# SBS 2026 Summer Lineup

2026 年 8 月 9 日 SBS 歌谣大战 Summer KINTEX 场静态宣传资料页。

## 内容结构

- Banner：使用用户提供的海报作为主视觉。
- 活动介绍：活动、地点、阵容结构、观看建议。
- 阵容 Tab：个人/乐队、男团、女团三类，响应式宫格。
- 艺人资料页：简介、成员卡片、官方 MV/舞台直达卡片。
- 历年阵容对比：从 2024 Summer 到 2026 Summer。
- 素材位：支持本地团体封面和成员图替换。

## 本地打开

直接打开 `index.html` 即可。

如果想用本地服务预览，可以在项目目录运行：

```bash
python3 -m http.server 8000
```

然后访问：

```text
http://localhost:8000
```

## 图片素材放置

团体/个人封面：

```text
assets/artists/{artist-id}/cover.jpg
```

成员图：

```text
assets/artists/{artist-id}/members/{member-slug}.jpg
```

更多例子见：

```text
assets/artists/README.md
```

## 可继续补充的地方

- 替换为授权的艺人官方宣传照/团体照。
- 给每个艺人补 2-4 条官方 MV、现场舞台或 fancam。
- 演出前再次核对 SBS 官方节目页、票务页、KINTEX 交通公告和艺人行程。
