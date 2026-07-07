# Artist image assets

把授权图片或你自己整理好的图片放到这里，页面会自动读取。

## 团体/个人封面

路径格式：

```text
assets/artists/{artist-id}/cover.jpg
```

例子：

```text
assets/artists/stray-kids/cover.jpg
assets/artists/zerobaseone/cover.jpg
assets/artists/hearts2hearts/cover.jpg
```

建议比例：`4:3` 或 `16:10`，人物尽量居中。

## 成员图

路径格式：

```text
assets/artists/{artist-id}/members/{member-slug}.jpg
```

例子：

```text
assets/artists/zerobaseone/members/sung-han-bin.jpg
assets/artists/zerobaseone/members/kim-ji-woong.jpg
assets/artists/and2ble/members/zhang-hao.jpg
```

文件名规则：英文名小写，空格改成短横线。比如 `Bang Chan` -> `bang-chan.jpg`。

## 视频封面

目前 MV/舞台卡片直接使用 YouTube 缩略图，不需要手动放图。若后续想改成本地封面，可以在 `app.js` 的 `mediaByArtist` 里把 `thumbnail` 改成本地路径。
