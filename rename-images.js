const fs = require('fs');
const path = require('path');

// 图片映射关系
const imageMapping = {
  // 主要页面图片
  'pexels-photo-323780.jpeg': 'hero-bg.jpg',
  'pexels-photo-3184291.jpeg': 'about-team.jpg',
  'pexels-photo-3184292.jpeg': 'learn-more-team.jpg',
  
  // 项目展示图片
  'pexels-photo-323772.jpeg': 'project-1.jpg',
  'pexels-photo-323775.jpeg': 'project-2.jpg',
  'pexels-photo-323776.jpeg': 'project-3.jpg',
  'pexels-photo-323774.jpeg': 'project-4.jpg',
  'pexels-photo-323773.jpeg': 'project-5.jpg',
  'pexels-photo-323777.jpeg': 'project-6.jpg',
  'pexels-photo-2219024.jpeg': 'project-7.jpg',
  'pexels-photo-2219025.jpeg': 'project-8.jpg',
  'pexels-photo-2219026.jpeg': 'project-9.jpg',
  
  // 项目详情页面 - 项目1 (现代预制社区)
  'pexels-photo-323780.jpeg': 'project-1-hero.jpg',
  'pexels-photo-323772.jpeg': 'project-1-gallery-1.jpg',
  'pexels-photo-323775.jpeg': 'project-1-gallery-2.jpg',
  'pexels-photo-323776.jpeg': 'project-1-gallery-3.jpg',
  'pexels-photo-323774.jpeg': 'project-1-gallery-4.jpg',
  'pexels-photo-1396122.jpeg': 'project-1-prefab-1.jpg',
  'pexels-photo-1396132.jpeg': 'project-1-prefab-2.jpg',
  'pexels-photo-1396134.jpeg': 'project-1-prefab-3.jpg',
  'pexels-photo-1396135.jpeg': 'project-1-prefab-4.jpg',
  'pexels-photo-1396136.jpeg': 'project-1-prefab-5.jpg',
  'pexels-photo-1396137.jpeg': 'project-1-prefab-6.jpg',
  
  // 项目详情页面 - 项目2 (模块化办公综合体)
  'pexels-photo-323775.jpeg': 'project-2-hero.jpg',
  'pexels-photo-2219024.jpeg': 'project-2-gallery-1.jpg',
  'pexels-photo-2219025.jpeg': 'project-2-gallery-2.jpg',
  'pexels-photo-2219026.jpeg': 'project-2-gallery-3.jpg',
  'pexels-photo-323773.jpeg': 'project-2-gallery-4.jpg',
  'pexels-photo-2219027.jpeg': 'project-2-prefab-1.jpg',
  'pexels-photo-2219028.jpeg': 'project-2-prefab-2.jpg',
  'pexels-photo-2219029.jpeg': 'project-2-prefab-3.jpg',
  'pexels-photo-2219030.jpeg': 'project-2-prefab-4.jpg',
  'pexels-photo-2219031.jpeg': 'project-2-prefab-5.jpg',
  'pexels-photo-2219032.jpeg': 'project-2-prefab-6.jpg',
  
  // 项目详情页面 - 项目3 (豪华预制别墅)
  'pexels-photo-323776.jpeg': 'project-3-hero.jpg',
  'pexels-photo-1396140.jpeg': 'project-3-gallery-1.jpg',
  'pexels-photo-1396141.jpeg': 'project-3-gallery-2.jpg',
  'pexels-photo-1396142.jpeg': 'project-3-gallery-3.jpg',
  'pexels-photo-1396143.jpeg': 'project-3-gallery-4.jpg',
  'pexels-photo-1396144.jpeg': 'project-3-prefab-1.jpg',
  'pexels-photo-1396145.jpeg': 'project-3-prefab-2.jpg',
  'pexels-photo-1396146.jpeg': 'project-3-prefab-3.jpg',
  'pexels-photo-1396147.jpeg': 'project-3-prefab-4.jpg',
  'pexels-photo-1396148.jpeg': 'project-3-prefab-5.jpg',
  'pexels-photo-1396149.jpeg': 'project-3-prefab-6.jpg',
  
  // 项目详情页面 - 项目4 (混合用途预制开发)
  'pexels-photo-323774.jpeg': 'project-4-hero.jpg',
  'pexels-photo-2219033.jpeg': 'project-4-gallery-1.jpg',
  'pexels-photo-2219034.jpeg': 'project-4-gallery-2.jpg',
  'pexels-photo-2219035.jpeg': 'project-4-gallery-3.jpg',
  'pexels-photo-2219036.jpeg': 'project-4-gallery-4.jpg',
  'pexels-photo-2219037.jpeg': 'project-4-prefab-1.jpg',
  'pexels-photo-2219038.jpeg': 'project-4-prefab-2.jpg',
  'pexels-photo-2219039.jpeg': 'project-4-prefab-3.jpg',
  'pexels-photo-2219040.jpeg': 'project-4-prefab-4.jpg',
  'pexels-photo-2219041.jpeg': 'project-4-prefab-5.jpg',
  'pexels-photo-2219042.jpeg': 'project-4-prefab-6.jpg',
  
  // 项目详情页面 - 项目5 (预制企业园区)
  'pexels-photo-323773.jpeg': 'project-5-hero.jpg',
  'pexels-photo-2219043.jpeg': 'project-5-gallery-1.jpg',
  'pexels-photo-2219044.jpeg': 'project-5-gallery-2.jpg',
  'pexels-photo-2219045.jpeg': 'project-5-gallery-3.jpg',
  'pexels-photo-2219046.jpeg': 'project-5-gallery-4.jpg',
  'pexels-photo-2219047.jpeg': 'project-5-prefab-1.jpg',
  'pexels-photo-2219048.jpeg': 'project-5-prefab-2.jpg',
  'pexels-photo-2219049.jpeg': 'project-5-prefab-3.jpg',
  'pexels-photo-2219050.jpeg': 'project-5-prefab-4.jpg',
  'pexels-photo-2219051.jpeg': 'project-5-prefab-5.jpg',
  'pexels-photo-2219052.jpeg': 'project-5-prefab-6.jpg',
  
  // 项目详情页面 - 项目6 (生态预制住宅)
  'pexels-photo-323777.jpeg': 'project-6-hero.jpg',
  'pexels-photo-2219053.jpeg': 'project-6-gallery-1.jpg',
  'pexels-photo-2219054.jpeg': 'project-6-gallery-2.jpg',
  'pexels-photo-2219055.jpeg': 'project-6-gallery-3.jpg',
  'pexels-photo-2219056.jpeg': 'project-6-gallery-4.jpg',
  'pexels-photo-2219057.jpeg': 'project-6-prefab-1.jpg',
  'pexels-photo-2219058.jpeg': 'project-6-prefab-2.jpg',
  'pexels-photo-2219059.jpeg': 'project-6-prefab-3.jpg',
  'pexels-photo-2219060.jpeg': 'project-6-prefab-4.jpg',
  'pexels-photo-2219061.jpeg': 'project-6-prefab-5.jpg',
  'pexels-photo-2219062.jpeg': 'project-6-prefab-6.jpg'
};

const imagesDir = path.join(__dirname, 'public', 'images');

// 检查目录是否存在
if (!fs.existsSync(imagesDir)) {
  console.error('Images directory not found:', imagesDir);
  process.exit(1);
}

// 获取目录中的所有文件
const files = fs.readdirSync(imagesDir);

console.log('Starting image renaming process...');

// 重命名文件
let renamedCount = 0;
for (const [oldName, newName] of Object.entries(imageMapping)) {
  const oldPath = path.join(imagesDir, oldName);
  const newPath = path.join(imagesDir, newName);
  
  if (fs.existsSync(oldPath)) {
    try {
      fs.renameSync(oldPath, newPath);
      console.log(`✓ Renamed: ${oldName} → ${newName}`);
      renamedCount++;
    } catch (error) {
      console.error(`✗ Error renaming ${oldName}:`, error.message);
    }
  } else {
    console.log(`- File not found: ${oldName}`);
  }
}

console.log(`\nRenaming complete! ${renamedCount} files renamed.`);

// 显示重命名后的文件列表
console.log('\nFiles in images directory:');
const finalFiles = fs.readdirSync(imagesDir);
finalFiles.forEach(file => {
  console.log(`  ${file}`);
});

