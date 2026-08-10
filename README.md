# 伴读下载页

伴读（Bandu）的公开产品介绍与下载页面。网站由 GitHub Pages 直接托管，
不包含伴读桌面应用源码。

## 本地预览

```bash
python3 -m http.server 8000
```

然后访问 `http://127.0.0.1:8000/`。

## 验证

```bash
npm test
```

页面入口是 `index.html`，样式位于 `styles.css`。发布安装包通过本仓库的
GitHub Releases 提供。

## 当前版本

- 版本：`v1.3.0`
- 平台：macOS 11 或更高版本，Apple Silicon
- 安全：Developer ID Application 签名、Apple Notary Service 公证
- 下载：[Bandu-v1.3.0-macOS-Apple-Silicon.dmg](https://github.com/zxy12/bandu-download/releases/download/v1.3.0/Bandu-v1.3.0-macOS-Apple-Silicon.dmg)
