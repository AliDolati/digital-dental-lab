// scripts/file-tracker.js
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

class FileTracker {
    constructor() {
        this.trackerFile = path.join(process.cwd(), '.ai-file-tracker.json');
        this.previousState = this.loadPreviousState();
    }

    loadPreviousState() {
        try {
            if (fs.existsSync(this.trackerFile)) {
                return JSON.parse(fs.readFileSync(this.trackerFile, 'utf8'));
            }
        } catch (e) {
            console.warn('❌ خطا در بارگذاری وضعیت قبلی:', e.message);
        }
        
        return { files: {}, lastScan: null };
    }

    detectChanges(currentFiles) {
        const changes = {
            hasChanges: false,
            fileChanges: [],
            stats: {
                added: 0,
                modified: 0,
                deleted: 0
            }
        };

        const currentFileHashes = {};
        
        // محاسبه hash برای فایل‌های فعلی
        currentFiles.forEach(file => {
            const hash = this.calculateHash(file.content + file.path);
            currentFileHashes[file.path] = hash;
            
            // بررسی تغییرات
            if (!this.previousState.files[file.path]) {
                // فایل جدید
                changes.fileChanges.push({
                    file: file.path,
                    type: 'added',
                    lines: file.lines
                });
                changes.stats.added++;
            } else if (this.previousState.files[file.path] !== hash) {
                // فایل تغییر کرده
                changes.fileChanges.push({
                    file: file.path,
                    type: 'modified',
                    lines: file.lines
                });
                changes.stats.modified++;
            }
        });
        
        // بررسی فایل‌های حذف شده
        Object.keys(this.previousState.files).forEach(filePath => {
            if (!currentFileHashes[filePath]) {
                changes.fileChanges.push({
                    file: filePath,
                    type: 'deleted'
                });
                changes.stats.deleted++;
            }
        });
        
        changes.hasChanges = changes.fileChanges.length > 0;
        
        // ذخیره وضعیت فعلی برای اسکن بعدی
        this.saveCurrentState(currentFileHashes);
        
        return changes;
    }

    calculateHash(content) {
        return crypto.createHash('md5').update(content).digest('hex');
    }

    saveCurrentState(fileHashes) {
        try {
            const state = {
                files: fileHashes,
                lastScan: new Date().toISOString()
            };
            fs.writeFileSync(this.trackerFile, JSON.stringify(state, null, 2));
        } catch (e) {
            console.warn('❌ خطا در ذخیره وضعیت فایل‌ها:', e.message);
        }
    }
}

module.exports = { FileTracker };