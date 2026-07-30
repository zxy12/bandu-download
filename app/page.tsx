const DOWNLOAD_URL = "https://github.com/zxy12/bandu-reader/releases";

const features = [
  ["保留原书", "不重排正文，竖排、配图和书籍自己的字体都按原样呈现。"],
  ["一句即懂", "鼠标经过句子即可选中，按 J 获得翻译、假名、句子成分与语法解析。"],
  ["读过会留下", "分析记录、生词和阅读位置自动保存，下一次从上次停下的地方继续。"],
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="主导航">
        <a className="brand" href="#top" aria-label="伴读首页">
          <span className="brand-mark">伴</span>
          <span>伴读</span>
        </a>
        <div className="nav-links">
          <a href="#features">功能</a>
          <a href="#download">下载</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">为日语初学者做的本地阅读器</p>
          <h1>读原来的书，<br />多一个懂你的伴。</h1>
          <p className="lede">
            伴读保留电子书本来的样子，在你需要时解释一句日语，
            把假名、词汇、语法和句子结构安静地放在手边。
          </p>
          <div className="hero-actions">
            <a className="primary-button" href={DOWNLOAD_URL} aria-label="查看伴读原型版本">
              查看原型版本
              <span aria-hidden="true">↗</span>
            </a>
            <span className="availability"><i /> macOS · Apple Silicon</span>
          </div>
        </div>

        <div className="reader-scene" aria-label="伴读阅读分析界面示意">
          <div className="window-bar"><span /><span /><span /><b>阅读 · 伴读</b></div>
          <div className="book-page">
            <p className="jp-line">しかし、初めてこの試験に挑む方にとっては、</p>
            <p className="jp-line selected">試験範囲の広さや専門用語の多さに</p>
            <p className="jp-line">圧倒されることも少なくありません。</p>
            <div className="analysis-card">
              <small>阅读分析</small>
              <p>第一次参加这项考试的人，也常会被考试范围之广和专业术语之多所压倒。</p>
              <div className="tokens"><span>試験範囲</span><span>専門用語</span><span>圧倒される</span></div>
            </div>
          </div>
          <div className="companions" aria-hidden="true"><span>●</span><span>●</span><span>●</span></div>
        </div>
      </section>

      <section className="feature-section" id="features">
        <p className="section-kicker">阅读，不被工具打断</p>
        <div className="feature-heading">
          <h2>只在需要时出现。</h2>
          <p>没有复杂的学习流程，也不要求你把书导入云端。选中、理解，然后继续读。</p>
        </div>
        <div className="feature-grid">
          {features.map(([title, detail], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="download" id="download">
        <div>
          <p className="section-kicker">Prototype 1.0.0</p>
          <h2>从一本想读懂的书开始。</h2>
          <p>当前为原型版本。正式公开下载前将完成独立安装包公证、自动更新和商业授权流程。</p>
        </div>
        <a className="download-button" href={DOWNLOAD_URL}>
          <span>查看版本进度<small>macOS 11 或更高版本</small></span>
          <b aria-hidden="true">→</b>
        </a>
      </section>

      <footer><span>伴读 Bandu</span><span>安静地陪你多读懂一点。</span></footer>
    </main>
  );
}
