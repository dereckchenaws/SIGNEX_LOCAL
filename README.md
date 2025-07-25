# SIGNEX - 建筑设计与施工网站

## 图片文件结构

为了使网站正常显示，请将以下图片文件放置在 `public/images/` 文件夹中：

### 主要页面图片
- `hero-bg.jpg` - 首页背景图片 (推荐尺寸: 1920x1080)
- `about-team.jpg` - 关于我们页面团队图片 (推荐尺寸: 800x1000)
- `learn-more-team.jpg` - 了解更多页面团队图片 (推荐尺寸: 800x1000)

### 项目展示图片
- `project-1.jpg` - 现代预制社区
- `project-2.jpg` - 模块化办公综合体
- `project-3.jpg` - 豪华预制别墅
- `project-4.jpg` - 混合用途预制开发
- `project-5.jpg` - 预制企业园区
- `project-6.jpg` - 生态预制住宅
- `project-7.jpg` - 模块化高层建筑
- `project-8.jpg` - 预制度假村综合体
- `project-9.jpg` - 可持续预制村庄

### 项目详情页面图片

#### 项目1 - 现代预制社区
- `project-1-hero.jpg` - 项目主图 (推荐尺寸: 1920x1080)
- `project-1-gallery-1.jpg` 到 `project-1-gallery-4.jpg` - 项目画廊图片
- `project-1-prefab-1.jpg` 到 `project-1-prefab-6.jpg` - 预制住宅解决方案图片

#### 项目2 - 模块化办公综合体
- `project-2-hero.jpg` - 项目主图
- `project-2-gallery-1.jpg` 到 `project-2-gallery-4.jpg` - 项目画廊图片
- `project-2-prefab-1.jpg` 到 `project-2-prefab-6.jpg` - 预制住宅解决方案图片

#### 项目3 - 豪华预制别墅
- `project-3-hero.jpg` - 项目主图
- `project-3-gallery-1.jpg` 到 `project-3-gallery-4.jpg` - 项目画廊图片
- `project-3-prefab-1.jpg` 到 `project-3-prefab-6.jpg` - 预制住宅解决方案图片

#### 项目4 - 混合用途预制开发
- `project-4-hero.jpg` - 项目主图
- `project-4-gallery-1.jpg` 到 `project-4-gallery-4.jpg` - 项目画廊图片
- `project-4-prefab-1.jpg` 到 `project-4-prefab-6.jpg` - 预制住宅解决方案图片

#### 项目5 - 预制企业园区
- `project-5-hero.jpg` - 项目主图
- `project-5-gallery-1.jpg` 到 `project-5-gallery-4.jpg` - 项目画廊图片
- `project-5-prefab-1.jpg` 到 `project-5-prefab-6.jpg` - 预制住宅解决方案图片

#### 项目6 - 生态预制住宅
- `project-6-hero.jpg` - 项目主图
- `project-6-gallery-1.jpg` 到 `project-6-gallery-4.jpg` - 项目画廊图片
- `project-6-prefab-1.jpg` 到 `project-6-prefab-6.jpg` - 预制住宅解决方案图片

## 图片规格建议

- **主图/背景图**: 1920x1080 (16:9 比例)
- **项目展示图**: 800x600 (4:3 比例)
- **画廊图片**: 800x600 (4:3 比例)
- **团队图片**: 800x1000 (4:5 比例)

## 图片优化建议

1. **格式**: 使用 JPEG 格式，质量设置为 80-90%
2. **压缩**: 使用 TinyPNG 或类似工具压缩图片
3. **命名**: 使用描述性的文件名，避免空格和特殊字符
4. **尺寸**: 确保图片尺寸适合显示需求，避免过大的文件

## 文件夹结构

```
public/
├── images/
│   ├── hero-bg.jpg
│   ├── about-team.jpg
│   ├── learn-more-team.jpg
│   ├── project-1.jpg
│   ├── project-2.jpg
│   ├── ...
│   ├── project-1-hero.jpg
│   ├── project-1-gallery-1.jpg
│   ├── project-1-gallery-2.jpg
│   ├── ...
│   └── project-6-prefab-6.jpg
└── Logotype_white.png
```

## 开发说明

- 所有图片路径都已更新为本地路径 (`/images/...`)
- 图片文件需要手动添加到 `public/images/` 文件夹
- 如果某些图片暂时缺失，网站仍可正常运行，只是相应位置会显示破损图片图标
- 建议按照上述文件名准确命名图片文件以确保正确显示