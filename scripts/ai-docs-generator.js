// scripts/ai-docs-generator.js - نسخه اصلاح شده
const fs = require('fs');
const path = require('path');

class AIDocsGenerator {
    constructor() {
        this.projectRoot = process.cwd();
        this.outputFiles = {
            hub: path.join(this.projectRoot, 'ai-documentation-hub.html'),
            memory: path.join(this.projectRoot, 'project-memory.json'),
            changelog: path.join(this.projectRoot, 'CHANGELOG.md')
        };
    }

    async generateDocumentation() {
        console.log('🧠 شروع تولید مستندات هوشمند...');
        
        try {
            // ۱. اسکن کامل پروژه
            const projectState = await this.scanDeep();
            
            // ۲. تولید حافظه پروژه
            const projectMemory = {
                meta: {
                    name: 'Digital Dental Lab v2',
                    version: '2.0.0',
                    lastScan: new Date().toISOString(),
                    totalFiles: projectState.files ? projectState.files.length : 0,
                    totalLines: projectState.stats ? projectState.stats.totalLines : 0,
                    scanDate: new Date().toLocaleString('fa-IR'),
                    scanTimestamp: Date.now()
                },
                architecture: projectState.architecture || {},
                files: projectState.files || [],
                components: projectState.components || [],
                routes: projectState.routes || [],
                services: projectState.services || [],
                knownIssues: this.detectIssues(projectState),
                nextSteps: this.generateNextSteps(projectState),
                aiContext: this.generateAIContext(projectState)
            };
            
            // ۳. ذخیره حافظه پروژه
            fs.writeFileSync(this.outputFiles.memory, JSON.stringify(projectMemory, null, 2));
            
            // ۴. تولید HTML Hub
            const html = this.generateHubHTML(projectMemory);
            fs.writeFileSync(this.outputFiles.hub, html);
            
            // ۵. تولید Changelog
            const changelog = this.generateChangelog(projectMemory);
            fs.writeFileSync(this.outputFiles.changelog, changelog);
            
            console.log('✅ مستندات تولید شد!');
            console.log('📄 مرکز مستندات: ai-documentation-hub.html');
            console.log('💾 حافظه پروژه: project-memory.json');
            console.log('📋 تغییرات: CHANGELOG.md');
            console.log('🌐 دسترسی: http://localhost:4200/ai-docs');
            
            return projectMemory;
            
        } catch (error) {
            console.error('❌ خطا در تولید مستندات:', error.message);
            throw error;
        }
    }

    async scanDeep() {
        console.log('🔍 در حال اسکن عمیق پروژه...');
        
        const files = [];
        let totalLines = 0;
        const ignoreDirs = ['node_modules', '.git', 'dist', 'build', '.angular'];
        
        const scanDirectory = (dir) => {
            // چک کن آیا پوشه باید ignore شود
            const dirName = path.basename(dir);
            if (ignoreDirs.includes(dirName) || dir.includes('node_modules') || dir.includes('.git')) {
                return;
            }
            
            try {
                const items = fs.readdirSync(dir);
                
                for (const item of items) {
                    const fullPath = path.join(dir, item);
                    
                    try {
                        const stat = fs.statSync(fullPath);
                        
                        if (stat.isDirectory()) {
                            scanDirectory(fullPath);
                        } else if (this.isCodeFile(item)) {
                            const content = fs.readFileSync(fullPath, 'utf8');
                            const lines = content.split('\n').length;
                            totalLines += lines;
                            
                            files.push({
                                path: fullPath.replace(this.projectRoot + path.sep, ''),
                                content: content.substring(0, 2000), // فقط 2000 کاراکتر اول برای جلوگیری از حجم زیاد
                                size: stat.size,
                                lines: lines,
                                modified: stat.mtime,
                                created: stat.birthtime,
                                extension: path.extname(item)
                            });
                        }
                    } catch (fileError) {
                        console.warn(`⚠️ خطا در پردازش فایل ${fullPath}: ${fileError.message}`);
                    }
                }
            } catch (dirError) {
                console.warn(`⚠️ خطا در اسکن پوشه ${dir}: ${dirError.message}`);
            }
        };
        
        scanDirectory(this.projectRoot);
        
        // استخراج اطلاعات معماری
        const architecture = this.extractArchitecture(files);
        const components = this.extractComponents(files);
        const routes = this.extractRoutes(files);
        const services = this.extractServices(files);
        
        console.log(`📊 اسکن کامل: ${files.length} فایل، ${totalLines} خط کد`);
        
        return {
            files: files,
            stats: { 
                totalFiles: files.length, 
                totalLines: totalLines,
                totalSize: files.reduce((sum, file) => sum + file.size, 0)
            },
            architecture,
            components,
            routes,
            services
        };
    }

    isCodeFile(filename) {
        const ext = path.extname(filename).toLowerCase();
        const codeExtensions = ['.ts', '.js', '.html', '.css', '.scss', '.json', '.md', '.txt', '.yml', '.yaml'];
        return codeExtensions.includes(ext);
    }

    extractArchitecture(files) {
        const packageJson = files.find(f => f.path === 'package.json');
        let dependencies = {};
        let framework = 'Unknown';
        let version = 'Unknown';
        
        if (packageJson) {
            try {
                const pkg = JSON.parse(packageJson.content);
                dependencies = {
                    ...pkg.dependencies,
                    ...pkg.devDependencies
                };
                
                // تشخیص فریم‌ورک
                if (pkg.dependencies?.['@angular/core']) {
                    framework = 'Angular';
                    version = pkg.dependencies['@angular/core'];
                } else if (pkg.dependencies?.['react']) {
                    framework = 'React';
                    version = pkg.dependencies['react'];
                } else if (pkg.dependencies?.['vue']) {
                    framework = 'Vue';
                    version = pkg.dependencies['vue'];
                }
                
            } catch (e) {
                console.warn('⚠️ خطا در parsing package.json');
            }
        }
        
        return {
            framework: framework,
            version: version,
            dependencies: Object.keys(dependencies).slice(0, 15), // فقط 15 مورد اول
            totalDependencies: Object.keys(dependencies).length
        };
    }

    extractComponents(files) {
        const components = files
            .filter(f => {
                const ext = path.extname(f.path);
                return (f.path.includes('.component.') || f.path.includes('/components/')) && 
                       (ext === '.ts' || ext === '.js');
            })
            .map(f => ({
                name: path.basename(f.path, path.extname(f.path)),
                path: f.path,
                lines: f.lines,
                size: f.size,
                hasTemplate: files.some(tf => 
                    tf.path === f.path.replace('.ts', '.html').replace('.js', '.html')
                ),
                hasStyles: files.some(sf => 
                    sf.path === f.path.replace('.ts', '.css').replace('.ts', '.scss')
                             .replace('.js', '.css').replace('.js', '.scss')
                )
            }));
        
        console.log(`🎯 شناسایی ${components.length} کامپوننت`);
        return components;
    }

    extractRoutes(files) {
        const routeFiles = files.filter(f => 
            f.path.includes('routing') || 
            f.path.includes('routes') || 
            f.path.includes('app.routes')
        );
        
        let routes = [];
        
        routeFiles.forEach(routeFile => {
            const routeMatches = routeFile.content.match(/path:\s*['"`]([^'"`]+)['"`]/g) || [];
            const componentMatches = routeFile.content.match(/loadComponent[^}]+}/g) || [];
            
            routeMatches.forEach((match, index) => {
                const path = match.replace(/path:\s*['"`]/, '').replace(/['"`]/, '');
                routes.push({ 
                    path: path,
                    file: routeFile.path
                });
            });
        });
        
        // اگر route پیدا نشد، از ساختار پوشه‌ها استخراج کن
        if (routes.length === 0) {
            routes = this.extractRoutesFromStructure(files);
        }
        
        console.log(`🛣️ شناسایی ${routes.length} مسیر`);
        return routes;
    }

    extractRoutesFromStructure(files) {
        const routes = [];
        const componentDirs = new Set();
        
        files.forEach(file => {
            if (file.path.includes('src/app/components/') && file.path.endsWith('.ts')) {
                const dirPath = path.dirname(file.path);
                const dirName = path.basename(dirPath);
                if (dirName !== 'components') {
                    componentDirs.add(dirName);
                }
            }
        });
        
        componentDirs.forEach(dir => {
            routes.push({
                path: dir === 'home' ? '' : dir,
                file: `src/app/components/${dir}/`
            });
        });
        
        return routes;
    }

    extractServices(files) {
        const services = files
            .filter(f => {
                const ext = path.extname(f.path);
                return (f.path.includes('.service.') || f.path.includes('/services/')) && 
                       (ext === '.ts' || ext === '.js');
            })
            .map(f => ({
                name: path.basename(f.path, path.extname(f.path)),
                path: f.path,
                lines: f.lines,
                size: f.size
            }));
        
        console.log(`🔧 شناسایی ${services.length} سرویس`);
        return services;
    }

    detectIssues(projectState) {
        const issues = [];
        
        if (!projectState.files || !Array.isArray(projectState.files)) {
            issues.push('فایل‌های پروژه یافت نشد');
            return issues;
        }
        
        // تشخیص خطاهای معمول در کامپوننت‌ها
        projectState.files.forEach(file => {
            if (file.path.includes('component.') && file.path.endsWith('.ts')) {
                if (!file.content.includes('@Component')) {
                    issues.push(`کامپوننت ${file.path} ممکن است مشکل داشته باشد (فاقد @Component)`);
                }
                
                if (file.content.includes('TODO:') || file.content.includes('FIXME:')) {
                    issues.push(`فایل ${file.path} دارای TODO/FIXME است`);
                }
            }
            
            // تشخیص فایل‌های خالی یا خیلی کوچک
            if (file.lines < 5 && file.size > 0) {
                issues.push(`فایل ${file.path} بسیار کوچک است (${file.lines} خط)`);
            }
        });
        
        // بررسی missing dependencies
        const angularFiles = projectState.files.filter(f => 
            f.path.includes('.component.') || f.path.includes('.service.')
        );
        
        if (angularFiles.length > 0 && projectState.architecture && !projectState.architecture.dependencies.includes('@angular/core')) {
            issues.push('پروژه Angular است اما وابستگی‌های Angular یافت نشد');
        }
        
        if (issues.length === 0) {
            issues.push('✅ هیچ مشکل جدی شناسایی نشد - پروژه سالم است');
        }
        
        console.log(`⚠️ شناسایی ${issues.length} مشکل`);
        return issues;
    }

    generateNextSteps(projectState) {
        const nextSteps = [
            'تکمیل سیستم چندزبانه',
            'رفع مشکلات navigation', 
            'اضافه کردن انیمیشن‌ها',
            'تست responsiveness'
        ];
        
        // پیشنهادات هوشمند بر اساس وضعیت پروژه
        if (projectState.components && projectState.components.length < 3) {
            nextSteps.push('توسعه کامپوننت‌های بیشتر');
        }
        
        if (projectState.services && projectState.services.length === 0) {
            nextSteps.push('اضافه کردن سرویس‌های business logic');
        }
        
        const testFiles = projectState.files ? projectState.files.filter(f => 
            f.path.includes('.spec.') || f.path.includes('.test.')
        ) : [];
        
        if (testFiles.length === 0) {
            nextSteps.push('اضافه کردن تست‌های واحد');
        }
        
        return nextSteps;
    }

    generateAIContext(projectState) {
        // اضافه کردن بررسی null/undefined
        const recentFiles = projectState.files && Array.isArray(projectState.files) 
            ? projectState.files
                .sort((a, b) => new Date(b.modified || 0) - new Date(a.modified || 0))
                .slice(0, 5)
                .map(f => f.path || '')
            : [];

        const knownIssuesCount = projectState.knownIssues && Array.isArray(projectState.knownIssues) 
            ? projectState.knownIssues.length 
            : 0;

        const filesCount = projectState.files && Array.isArray(projectState.files) 
            ? projectState.files.length 
            : 0;

        const hasTranslation = projectState.files 
            ? projectState.files.some(f => f.path && f.path.includes('i18n'))
            : false;

        const hasRouting = projectState.routes && Array.isArray(projectState.routes) 
            ? projectState.routes.length > 0 
            : false;

        return {
            currentFocus: 'تکمیل سیستم مستندسازی و رفع مشکلات موجود',
            priority: 'high',
            workingFiles: recentFiles,
            recentActivity: `سیستم مستندسازی راه‌اندازی شد - اسکن ${filesCount} فایل`,
            projectHealth: knownIssuesCount > 1 ? 'needs_attention' : 'good',
            recommendations: this.getAIRecommendations(projectState),
            techStack: {
                framework: projectState.architecture?.framework || 'Unknown',
                version: projectState.architecture?.version || 'Unknown',
                hasTranslation: hasTranslation,
                hasRouting: hasRouting
            },
            // اضافه کردن پالت رنگ و اطلاعات پروژه
            colorPalette: {
                white_clean: "#ffffff",
                white_off: "#f8f9fa", 
                gray_light: "#e9ecef",
                navy_blue: "#1a237e",
                medical_blue: "#1565c0",
                teal_modern: "#00695c",
                ice_blue: "#4fc3f7",
                black_luxury: "#212121",
                charcoal: "#424242"
            },
            projectType: "dental_lab",
            targetAudience: "dentists",
            specialNotes: "فقط دکمه 'ورود به پنل لابراتوار' برای دندانپزشکان"
        };
    }

    getAIRecommendations(projectState) {
        const recommendations = [];
        
        if (projectState.components && projectState.components.some(c => !c.hasTemplate)) {
            recommendations.push('برخی کامپوننت‌ها template ندارند');
        }
        
        if (projectState.files && projectState.files.some(f => f.path && f.path.includes('i18n'))) {
            recommendations.push('سیستم چندزبانه شناسایی شد - نیاز به تکمیل');
        }
        
        if (projectState.architecture?.dependencies?.includes('@ngx-translate/core')) {
            recommendations.push('Translate service شناسایی شد - بررسی عملکرد');
        }
        
        return recommendations.length > 0 ? recommendations : ['پروژه ساختار مناسبی دارد'];
    }

    generateHubHTML(projectMemory) {
        const fileStats = this.calculateFileStats(projectMemory.files);
        
        return `<!DOCTYPE html>
<html lang="fa">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Documentation Hub - Digital Dental Lab</title>
    <style>
        :root {
            --primary: #3498db;
            --secondary: #2ecc71;
            --warning: #f39c12;
            --danger: #e74c3c;
            --dark: #2c3e50;
            --light: #ecf0f1;
            --text: #333;
            --text-muted: #7f8c8d;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body { 
            font-family: 'Vazirmatn', 'Segoe UI', Tahoma, sans-serif; 
            direction: rtl; 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            background-attachment: fixed;
            margin: 0; 
            padding: 20px;
            color: var(--text);
            line-height: 1.6;
            min-height: 100vh;
        }
        
        .container { 
            max-width: 1400px; 
            margin: 0 auto;
        }
        
        .header { 
            background: rgba(255,255,255,0.95); 
            backdrop-filter: blur(10px);
            padding: 2rem; 
            border-radius: 20px; 
            margin-bottom: 2rem; 
            text-align: center;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            border: 1px solid rgba(255,255,255,0.2);
        }
        
        .header h1 {
            color: var(--dark);
            margin-bottom: 0.5rem;
            font-size: 2.5rem;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .meta {
            color: var(--text-muted);
            font-size: 0.9rem;
            margin-top: 1rem;
            display: flex;
            justify-content: center;
            gap: 2rem;
            flex-wrap: wrap;
        }
        
        .dashboard { 
            display: grid; 
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); 
            gap: 1.5rem; 
            margin-bottom: 2rem; 
        }
        
        .card { 
            background: rgba(255,255,255,0.95);
            backdrop-filter: blur(10px);
            padding: 1.5rem; 
            border-radius: 15px; 
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            border: 1px solid rgba(255,255,255,0.2);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }
        
        .card h2 {
            color: var(--dark);
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 3px solid var(--primary);
            font-size: 1.3rem;
        }
        
        .file-list { 
            max-height: 400px; 
            overflow-y: auto; 
            border: 1px solid rgba(0,0,0,0.1);
            border-radius: 8px;
            padding: 1rem;
            background: rgba(248,249,250,0.5);
        }
        
        .file-item { 
            padding: 0.8rem; 
            border-bottom: 1px solid rgba(0,0,0,0.1); 
            display: flex; 
            justify-content: space-between;
            align-items: center;
            transition: background-color 0.2s ease;
        }
        
        .file-item:hover {
            background: rgba(0,0,0,0.03);
        }
        
        .file-item:last-child {
            border-bottom: none;
        }
        
        .status-badge { 
            padding: 0.3rem 0.8rem; 
            border-radius: 20px; 
            font-size: 0.8rem; 
            font-weight: bold;
            white-space: nowrap;
        }
        
        .status-active { background: var(--warning); color: white; }
        .status-stable { background: var(--secondary); color: white; }
        .status-high { background: var(--danger); color: white; }
        .status-info { background: var(--primary); color: white; }
        
        .meta { color: var(--text-muted); font-size: 0.9rem; }
        
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 1rem;
            margin: 1rem 0;
        }
        
        .stat-item {
            text-align: center;
            padding: 1rem;
            background: rgba(255,255,255,0.5);
            border-radius: 10px;
            border: 1px solid rgba(0,0,0,0.1);
        }
        
        .stat-number {
            font-size: 1.5rem;
            font-weight: bold;
            color: var(--primary);
            display: block;
        }
        
        .stat-label {
            font-size: 0.8rem;
            color: var(--text-muted);
        }
        
        .ai-context {
            background: rgba(52, 152, 219, 0.1);
            border-right: 4px solid var(--primary);
        }
        
        .issue-item {
            padding: 0.5rem;
            margin: 0.3rem 0;
            background: rgba(231, 76, 60, 0.1);
            border-radius: 5px;
            border-right: 3px solid var(--danger);
        }
        
        .next-step-item {
            padding: 0.5rem;
            margin: 0.3rem 0;
            background: rgba(46, 204, 113, 0.1);
            border-radius: 5px;
            border-right: 3px solid var(--secondary);
        }
        
        @media (max-width: 768px) {
            .dashboard {
                grid-template-columns: 1fr;
            }
            
            .header h1 {
                font-size: 2rem;
            }
            
            .meta {
                flex-direction: column;
                gap: 0.5rem;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🧠 AI Documentation Hub</h1>
            <p>Digital Dental Lab v2 - سیستم مستندسازی هوشمند</p>
            <div class="meta">
                <span><strong>ورژن:</strong> ${projectMemory.meta.version}</span>
                <span><strong>تاریخ اسکن:</strong> ${projectMemory.meta.scanDate}</span>
                <span><strong>فایل‌ها:</strong> ${projectMemory.meta.totalFiles}</span>
                <span><strong>خطوط کد:</strong> ${projectMemory.meta.totalLines}</span>
            </div>
        </div>

        <div class="dashboard">
            <div class="card">
                <h2>📊 وضعیت پروژه</h2>
                <div class="stats-grid">
                    <div class="stat-item">
                        <span class="stat-number">${projectMemory.components.length}</span>
                        <span class="stat-label">کامپوننت</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">${projectMemory.services.length}</span>
                        <span class="stat-label">سرویس</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">${projectMemory.routes.length}</span>
                        <span class="stat-label">مسیر</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">${fileStats.byType['.ts'] || 0}</span>
                        <span class="stat-label">فایل TypeScript</span>
                    </div>
                </div>
                <p><strong>وضعیت:</strong> <span class="status-badge status-active">در حال توسعه</span></p>
                <p><strong>فریم‌ورک:</strong> ${projectMemory.architecture.framework} ${projectMemory.architecture.version}</p>
            </div>

            <div class="card ai-context">
                <h2>🎯 راهنمای AI</h2>
                <p><strong>تمرکز فعلی:</strong> ${projectMemory.aiContext.currentFocus}</p>
                <p><strong>اولویت:</strong> <span class="status-badge status-high">${projectMemory.aiContext.priority}</span></p>
                <p><strong>سلامت پروژه:</strong> ${projectMemory.aiContext.projectHealth === 'good' ? '✅ خوب' : '⚠️ نیاز به توجه'}</p>
                <p><strong>فایل‌های اخیر:</strong> ${projectMemory.aiContext.workingFiles.slice(0, 3).join(', ')}</p>
            </div>

            <div class="card">
                <h2>🏗️ معماری</h2>
                <p><strong>فریم‌ورک:</strong> ${projectMemory.architecture.framework}</p>
                <p><strong>ورژن:</strong> ${projectMemory.architecture.version}</p>
                <p><strong>وابستگی‌ها:</strong> ${projectMemory.architecture.totalDependencies}</p>
                <p><strong>تکنولوژی‌ها:</strong> ${projectMemory.architecture.dependencies.slice(0, 5).join(', ')}</p>
            </div>
        </div>

        <div class="card">
            <h2>📁 فایل‌های پروژه (${projectMemory.files.length} فایل)</h2>
            <div class="file-list">
                ${projectMemory.files.slice(0, 20).map(file => `
                    <div class="file-item">
                        <div>
                            <strong>${file.path}</strong>
                            <div class="meta">${file.lines} خط | ${this.formatFileSize(file.size)} | ${new Date(file.modified).toLocaleDateString('fa-IR')}</div>
                        </div>
                        <span class="status-badge status-stable">${file.extension}</span>
                    </div>
                `).join('')}
                ${projectMemory.files.length > 20 ? `
                    <div class="file-item">
                        <div class="meta">... و ${projectMemory.files.length - 20} فایل دیگر</div>
                    </div>
                ` : ''}
            </div>
        </div>

        <div class="dashboard">
            <div class="card">
                <h2>⚠️ مشکلات شناسایی شده</h2>
                <div>
                    ${projectMemory.knownIssues.map(issue => `
                        <div class="issue-item">${issue}</div>
                    `).join('')}
                </div>
            </div>

            <div class="card">
                <h2>🚀 اقدامات بعدی</h2>
                <div>
                    ${projectMemory.nextSteps.map(step => `
                        <div class="next-step-item">${step}</div>
                    `).join('')}
                </div>
            </div>
        </div>

        <div class="card">
            <h2>🔍 آمار فایل‌ها</h2>
            <div class="stats-grid">
                ${Object.entries(fileStats.byType).map(([ext, count]) => `
                    <div class="stat-item">
                        <span class="stat-number">${count}</span>
                        <span class="stat-label">${ext} فایل</span>
                    </div>
                `).join('')}
            </div>
            <p class="meta">تولید شده در ${projectMemory.meta.scanDate} - سیستم مستندسازی هوشمند</p>
        </div>
    </div>
</body>
</html>`;
    }

    calculateFileStats(files) {
        const byType = {};
        let totalSize = 0;
        
        if (files && Array.isArray(files)) {
            files.forEach(file => {
                const ext = file.extension;
                byType[ext] = (byType[ext] || 0) + 1;
                totalSize += file.size;
            });
        }
        
        return {
            byType,
            totalSize,
            averageSize: files && files.length > 0 ? totalSize / files.length : 0
        };
    }

    formatFileSize(bytes) {
        if (bytes === 0) return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    generateChangelog(projectMemory) {
        const changelogContent = `# Changelog - Digital Dental Lab v2

## ${projectMemory.meta.version} - ${projectMemory.meta.scanDate}

### سیستم مستندسازی راه‌اندازی شد
- ایجاد سیستم مستندسازی هوشمند AI-Optimized
- اسکن ${projectMemory.meta.totalFiles} فایل پروژه
- شناسایی ${projectMemory.components.length} کامپوننت
- شناسایی ${projectMemory.services.length} سرویس
- شناسایی ${projectMemory.routes.length} مسیر

### وضعیت فعلی
- کل خطوط کد: ${projectMemory.meta.totalLines}
- فایل‌های شناسایی شده: ${projectMemory.meta.totalFiles}
- حجم کل پروژه: ${this.formatFileSize(projectMemory.files.reduce((sum, file) => sum + file.size, 0))}
- وضعیت پروژه: در حال توسعه

### معماری
- فریم‌ورک: ${projectMemory.architecture.framework}
- ورژن: ${projectMemory.architecture.version}
- وابستگی‌ها: ${projectMemory.architecture.totalDependencies}

### مشکلات شناسایی شده
${projectMemory.knownIssues.map(issue => `- ${issue}`).join('\n')}

### اقدامات بعدی  
${projectMemory.nextSteps.map(step => `- ${step}`).join('\n')}

### فایل‌های کلیدی
${projectMemory.files.slice(0, 10).map(file => `- ${file.path} (${file.lines} خط)`).join('\n')}

---
*تولید شده توسط سیستم مستندسازی هوشمند - ${new Date().toLocaleString('fa-IR')}*
`;

        return changelogContent;
    }
}

// اجرای سیستم
const generator = new AIDocsGenerator();

// هندل کردن خطاهای全局
process.on('uncaughtException', (error) => {
    console.error('❌ خطای غیرمنتظره:', error);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('❌ Promise رد شده:', reason);
});

// اجرا
generator.generateDocumentation().catch(console.error);