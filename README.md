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

## 法律页面

- [服务条款](https://zxy12.github.io/bandu-download/terms.html)
- [隐私说明](https://zxy12.github.io/bandu-download/privacy.html)

## 当前版本

- 版本：`v2.0.0`
- 平台：macOS 11 或更高版本，Apple Silicon
- 安全：Developer ID Application 签名、Apple Notary Service 公证
- 下载：[Bandu-v2.0.0-macOS-Apple-Silicon.dmg](https://github.com/zxy12/bandu-download/releases/download/v2.0.0/Bandu-v2.0.0-macOS-Apple-Silicon.dmg)
