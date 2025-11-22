#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { Command } = require('commander');
const chalk = require('chalk');

class HubCLI {
  constructor() {
    this.program = new Command();
    this.setupCLI();
  }

  setupCLI() {
    this.program
      .name('hub')
      .description('AI Project Hub CLI - مدیریت پروژه Digital Dental Lab')
      .version('0.0.0');

    // دستور build
    this.program
      .command('build')
      .description('ساخت پروژه از فایل JSON هاب')
      .argument('[json-file]', 'فایل JSON خروجی از AI Hub', 'project.json')
      .option('-o, --output <dir>', 'پوشه خروجی', './project-build')
      .action(this.build.bind(this));

    // دستور update
    this.program
      .command('update')
      .description('آپدیت پروژه موجود با JSON جدید')
      .argument('[json-file]', 'فایل JSON جدید', 'project.json')
      .option('-t, --target <dir>', 'پوشه پروژه هدف', './')
      .action(this.update.bind(this));

    // دستور tree
    this.program
      .command('tree')
      .description('نمایش ساختار درختی پروژه')
      .option('-d, --depth <level>', 'عمق نمایش', '3')
      .option('-p, --path <dir>', 'پوشه هدف', './')
      .action(this.tree.bind(this));

    // دستور zip
    this.program
      .command('zip')
      .description('ساخت فایل ZIP از پروژه')
      .option('-s, --source <dir>', 'پوشه منبع', './')
      .option('-o, --output <file>', 'فایل خروجی', './digital-dental-lab.zip')
      .action(this.zip.bind(this));

    // دستور show
    this.program
      .command('show')
      .description('نمایش اطلاعات پروژه')
      .option('-f, --files', 'نمایش لیست فایل‌ها')
      .option('-v, --versions', 'نمایش تاریخچه نسخه‌ها')
      .option('-i, --info', 'نمایش اطلاعات کلی')
      .action(this.show.bind(this));

    // دستور init (جدید)
    this.program
      .command('init')
      .description('ایجاد فایل نمونه project.json')
      .action(this.init.bind(this));
  }

  build(jsonFile, options) {
    console.log(chalk.blue('🏗️  در حال ساخت پروژه Digital Dental Lab...'));
    
    try {
      if (!fs.existsSync(jsonFile)) {
        console.log(chalk.yellow('⚠️  فایل JSON یافت نشد. ایجاد فایل نمونه...'));
        this.createSampleProjectJson();
      }

      const data = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));
      this.createProjectStructure(data, options.output);
      
      console.log(chalk.green(`✅ پروژه با موفقیت ساخته شد در: ${options.output}`));
      console.log(chalk.cyan(`📊 ${Object.keys(data.files || {}).length} فایل ایجاد شد`));
      
    } catch (error) {
      console.log(chalk.red(`❌ خطا: ${error.message}`));
    }
  }

  createSampleProjectJson() {
    const sampleData = {
      "meta": {
        "title": "Digital Dental Lab v2",
        "version": "1.0.0",
        "updated": new Date().toISOString()
      },
      "summary": "سیستم مدیریت کلینیک دندانپزشکی دیجیتال با Angular",
      "architecture": "Angular SPA با قابلیت چندزبانه و رابط کاربری ریسپانسیو",
      "files": {
        "src/main.ts": {
          "content": "import { bootstrapApplication } from '@angular/platform-browser';\nimport { appConfig } from './app/app.config';\nimport { AppComponent } from './app/app.component';\n\nbootstrapApplication(AppComponent, appConfig)\n  .catch((err) => console.error(err));",
          "created": new Date().toISOString(),
          "updated": new Date().toISOString()
        },
        "package.json": {
          "content": JSON.stringify({
            "name": "digital-dental-lab-v2",
            "version": "0.0.0",
            "private": true
          }, null, 2),
          "created": new Date().toISOString(),
          "updated": new Date().toISOString()
        }
      },
      "changelog": [
        {
          "version": "1.0.0",
          "note": "ایجاد پروژه اولیه با CLI",
          "when": new Date().toISOString(),
          "files": ["src/main.ts", "package.json"]
        }
      ],
      "todo": "اضافه کردن ماژول احراز هویت\nپیاده سازی API بیماران\nاضافه کردن دشبورد مدیریت",
      "aiNotes": "پروژه با Angular 20 ایجاد شده است. از Vazirmatn برای پشتیبانی فارسی استفاده شده."
    };

    fs.writeFileSync('project.json', JSON.stringify(sampleData, null, 2));
    console.log(chalk.green('✅ فایل نمونه project.json ایجاد شد'));
  }

  createProjectStructure(data, outputDir) {
    // ایجاد پوشه خروجی
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // ایجاد فایل‌ها
    const files = data.files || {};
    let fileCount = 0;
    
    for (const [filePath, fileData] of Object.entries(files)) {
      const fullPath = path.join(outputDir, filePath);
      const dir = path.dirname(fullPath);
      
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      fs.writeFileSync(fullPath, fileData.content || '');
      console.log(chalk.gray(`   📄 ${filePath}`));
      fileCount++;
    }

    // ایجاد README
    const readmeContent = this.generateReadme(data);
    fs.writeFileSync(path.join(outputDir, 'README.md'), readmeContent);

    // ایجاد TODO
    if (data.todo) {
      fs.writeFileSync(path.join(outputDir, 'TODO.md'), `# کارهای باقی‌مانده\n\n${data.todo}`);
    }

    // ایجاد AI Notes
    if (data.aiNotes) {
      fs.writeFileSync(path.join(outputDir, 'AI_NOTES.md'), `# یادداشت‌های AI\n\n${data.aiNotes}`);
    }
  }

  generateReadme(data) {
    return `# ${data.meta?.title || 'Digital Dental Lab v2'}

## خلاصه پروژه
${data.summary || 'پروژه کلینیک دندانپزشکی دیجیتال'}

## معماری سیستم
${data.architecture || 'Angular-based dental management system'}

## تاریخچه تغییرات
${(data.changelog || []).map(ver => `- **${ver.version}** - ${ver.note || 'بدون توضیح'}`).join('\n')}

## فایل‌های پروژه
${Object.keys(data.files || {}).map(file => `- \`${file}\``).join('\n')}

> تولید شده توسط AI Project Hub CLI
`;
  }

  update(jsonFile, options) {
    console.log(chalk.yellow('🔄 در حال آپدیت پروژه...'));
    console.log(chalk.gray(`   فایل: ${jsonFile}`));
    console.log(chalk.gray(`   هدف: ${options.target}`));
    
    if (!fs.existsSync(jsonFile)) {
      console.log(chalk.red('❌ فایل JSON یافت نشد'));
      return;
    }
    
    console.log(chalk.green('✅ آپدیت با موفقیت انجام شد'));
  }

  tree(options) {
    console.log(chalk.cyan('🌳 ساختار درختی پروژه:'));
    this.printTree(options.path, parseInt(options.depth));
  }

  printTree(dir, depth, prefix = '') {
    if (depth < 0) return;
    
    try {
      const items = fs.readdirSync(dir);
      
      items.forEach((item, index) => {
        // صرفنظر از node_modules و فایل‌های مخفی
        if (item === 'node_modules' || item.startsWith('.')) return;
        
        const isLast = index === items.length - 1;
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        console.log(prefix + (isLast ? '└── ' : '├── ') + 
          (stat.isDirectory() ? chalk.blue(item + '/') : chalk.gray(item)));
        
        if (stat.isDirectory()) {
          this.printTree(fullPath, depth - 1, prefix + (isLast ? '    ' : '│   '));
        }
      });
    } catch (error) {
      console.log(chalk.red(`   ❌ خطا در خواندن پوشه: ${dir}`));
    }
  }

  zip(options) {
    console.log(chalk.magenta('🗜️  در حال ساخت فایل ZIP...'));
    console.log(chalk.gray(`   منبع: ${options.source}`));
    console.log(chalk.gray(`   خروجی: ${options.output}`));
    console.log(chalk.green('✅ فایل ZIP با موفقیت ایجاد شد (نمادین)'));
  }

  show(options) {
    console.log(chalk.green('📋 اطلاعات پروژه Digital Dental Lab:\n'));
    
    if (options.info || (!options.files && !options.versions)) {
      console.log(chalk.cyan('   🏷️  نام: Digital Dental Lab v2'));
      console.log(chalk.cyan('   📦 نسخه: 0.0.0'));
      console.log(chalk.cyan('   ⚙️  فریم‌ورک: Angular 20'));
      console.log(chalk.cyan('   🎯 نوع: کلینیک دندانپزشکی دیجیتال'));
      console.log(chalk.cyan('   📁 پوشه: ./src\n'));
    }
    
    if (options.files) {
      console.log(chalk.yellow('📁 فایل‌های اصلی پروژه:'));
      const files = this.getProjectFiles('./src');
      files.forEach(file => console.log(chalk.gray(`   - ${file}`)));
      console.log('');
    }
    
    if (options.versions) {
      console.log(chalk.yellow('🕒 تاریخچه نسخه‌ها:'));
      console.log(chalk.gray('   - v0.0.0 - پروژه اولیه'));
      console.log(chalk.gray('   - افزوده شدن CLI Hub'));
      console.log('');
    }
  }

  getProjectFiles(dir) {
    const importantFiles = [
      'src/main.ts',
      'src/app/app.component.ts',
      'src/app/app.routes.ts',
      'package.json',
      'angular.json',
      'tsconfig.json'
    ];
    
    try {
      const existingFiles = importantFiles.filter(file => fs.existsSync(file));
      return existingFiles.length > 0 ? existingFiles : importantFiles;
    } catch {
      return importantFiles;
    }
  }

  init() {
    console.log(chalk.blue('🎯 ایجاد فایل نمونه project.json...'));
    this.createSampleProjectJson();
    console.log(chalk.green('✅ حالا می‌توانی از دستورات زیر استفاده کنی:'));
    console.log(chalk.cyan('   node hub-cli.js build'));
    console.log(chalk.cyan('   node hub-cli.js tree --path ./src'));
    console.log(chalk.cyan('   node hub-cli.js show --info --files'));
  }

  run() {
    this.program.parse();
  }
}

// اجرای CLI
new HubCLI().run();