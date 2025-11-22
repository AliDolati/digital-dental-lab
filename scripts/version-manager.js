// scripts/version-manager.js
const fs = require('fs');
const path = require('path');

class VersionManager {
    constructor() {
        this.versionsFile = path.join(process.cwd(), '.ai-versions.json');
        this.versions = this.loadVersions();
    }

    loadVersions() {
        try {
            if (fs.existsSync(this.versionsFile)) {
                return JSON.parse(fs.readFileSync(this.versionsFile, 'utf8'));
            }
        } catch (e) {
            console.warn('❌ خطا در بارگذاری نسخه‌ها:', e.message);
        }
        
        return [{
            version: '1.0.0',
            timestamp: new Date().toISOString(),
            changes: 'نسخه اولیه - شروع پروژه'
        }];
    }

    async recordVersion(changes) {
        const lastVersion = this.versions[this.versions.length - 1];
        const newVersion = this.incrementVersion(lastVersion.version);
        
        const versionEntry = {
            version: newVersion,
            timestamp: new Date().toISOString(),
            changes: `اتوماتیک: ${changes.fileChanges.length} فایل تغییر کرد`,
            fileChanges: changes.fileChanges,
            stats: changes.stats
        };
        
        this.versions.push(versionEntry);
        this.saveVersions();
        
        console.log(`✅ نسخه ${newVersion} ثبت شد`);
        return newVersion;
    }

    incrementVersion(currentVersion) {
        const parts = currentVersion.split('.').map(Number);
        parts[2] += 1; // افزایش patch version
        
        if (parts[2] >= 10) {
            parts[2] = 0;
            parts[1] += 1;
            
            if (parts[1] >= 10) {
                parts[1] = 0;
                parts[0] += 1;
            }
        }
        
        return parts.join('.');
    }

    saveVersions() {
        try {
            fs.writeFileSync(this.versionsFile, JSON.stringify(this.versions, null, 2));
        } catch (e) {
            console.warn('❌ خطا در ذخیره نسخه‌ها:', e.message);
        }
    }

    getCurrentVersion() {
        return this.versions[this.versions.length - 1].version;
    }

    getVersionHistory() {
        return this.versions;
    }
}

module.exports = { VersionManager };