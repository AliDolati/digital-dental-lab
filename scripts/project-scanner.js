// scripts/project-scanner.js
const fs = require('fs');
const path = require('path');

class ProjectScanner {
    constructor() {
        this.projectRoot = process.cwd();
        this.ignoreDirs = ['node_modules', '.git', 'dist', 'build'];
    }

    async scanDeep() {
        console.log('🔍 در حال اسکن عمیق پروژه...');
        
        const files = [];
        let totalLines = 0;
        
        const scanDirectory = async (dir) => {
            if (this.ignoreDirs.some(ignore => dir.includes(ignore))) return;
            
            try {
                const items = fs.readdirSync(dir);
                
                for (const item of items) {
                    const fullPath = path.join(dir, item);
                    const stat = fs.statSync(fullPath);
                    
                    if (stat.isDirectory()) {
                        await scanDirectory(fullPath);
                    } else if (this.isCodeFile(item)) {
                        try {
                            const content = fs.readFileSync(fullPath, 'utf8');
                            const lines = content.split('\n').length;
                            totalLines += lines;
                            
                            files.push({
                                path: fullPath.replace(this.projectRoot + path.sep, ''),
                                content: content,
                                size: stat.size,
                                lines: lines,
                                modified: stat.mtime,
                                created: stat.birthtime
                            });
                        } catch (e) {
                            console.warn(`❌ خطا در خواندن فایل ${fullPath}:`, e.message);
                        }
                    }
                }
            } catch (error) {
                console.warn(`❌ خطا در اسکن پوشه ${dir}:`, error.message);
            }
        };
        
        await scanDirectory(this.projectRoot);
        
        // استخراج اطلاعات معماری
        const architecture = this.extractArchitecture(files);
        const components = this.extractComponents(files);
        const routes = this.extractRoutes(files);
        const services = this.extractServices(files);
        
        return {
            files: files,
            stats: { totalFiles: files.length, totalLines },
            architecture,
            components,
            routes,
            services
        };
    }

    isCodeFile(filename) {
        const ext = path.extname(filename).toLowerCase();
        return ['.ts', '.js', '.html', '.css', '.scss', '.json', '.md', '.txt'].includes(ext);
    }

    extractArchitecture(files) {
        const packageJson = files.find(f => f.path === 'package.json');
        let dependencies = {};
        
        if (packageJson) {
            try {
                const pkg = JSON.parse(packageJson.content);
                dependencies = {
                    ...pkg.dependencies,
                    ...pkg.devDependencies
                };
            } catch (e) {
                console.warn('❌ خطا در parsing package.json');
            }
        }
        
        return {
            framework: dependencies['@angular/core'] ? 'Angular' : 'Unknown',
            version: dependencies['@angular/core'] || 'Unknown',
            dependencies: dependencies
        };
    }

    extractComponents(files) {
        return files
            .filter(f => f.path.includes('.component.') && f.path.endsWith('.ts'))
            .map(f => ({
                name: path.basename(f.path, '.component.ts'),
                path: f.path,
                lines: f.lines,
                hasTemplate: files.some(t => t.path === f.path.replace('.ts', '.html')),
                hasStyles: files.some(s => 
                    s.path === f.path.replace('.ts', '.css') || 
                    s.path === f.path.replace('.ts', '.scss')
                )
            }));
    }

    extractRoutes(files) {
        const routeFile = files.find(f => f.path.includes('app.routes.ts'));
        if (!routeFile) return [];
        
        // استخراج مسیرها از فایل routes (ساده شده)
        const routeMatches = routeFile.content.match(/path:\s*['"`]([^'"`]+)['"`]/g) || [];
        return routeMatches.map(match => {
            const path = match.replace(/path:\s*['"`]/, '').replace(/['"`]/, '');
            return { path, method: 'GET' };
        });
    }

    extractServices(files) {
        return files
            .filter(f => f.path.includes('.service.') && f.path.endsWith('.ts'))
            .map(f => ({
                name: path.basename(f.path, '.service.ts'),
                path: f.path,
                lines: f.lines
            }));
    }
}

module.exports = { ProjectScanner };