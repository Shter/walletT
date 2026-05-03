const stats = [
  { value: "4.8M+", label: "protected accounts" },
  { value: "$12.6B", label: "assets tracked" },
  { value: "82M+", label: "signed transactions" },
  { value: "48", label: "supported networks" },
];

const features = [
  {
    title: "Security",
    eyebrow: "Self-custody first",
    copy:
      "Encrypted key storage, biometric unlock, hardware-wallet pairing, transaction simulation, and permission warnings keep control with the owner.",
    icon: "circle",
  },
  {
    title: "Modern UI",
    eyebrow: "Clarity at speed",
    copy:
      "A refined portfolio view surfaces balances, staking rewards, gas estimates, and risk signals without burying users in chain jargon.",
    icon: "connection",
  },
  {
    title: "Fast Transactions",
    eyebrow: "Built for motion",
    copy:
      "Cosmos routes swaps, sends, and bridge actions through low-latency endpoints with clear fees before a signature is requested.",
    icon: "planet",
  },
  {
    title: "Cross-Platform",
    eyebrow: "One wallet everywhere",
    copy:
      "Use Cosmos on iOS, Android, desktop, and browser with synchronized preferences and local-first account recovery guidance.",
    icon: "rocket",
  },
];

const gettingStarted = [
  {
    title: "Create a vault",
    copy: "Generate a new encrypted wallet or import an existing seed phrase with guided recovery checks.",
  },
  {
    title: "Connect networks",
    copy: "Add Cosmos, EVM, Solana, Bitcoin, and appchain accounts from a single clean dashboard.",
  },
  {
    title: "Move with confidence",
    copy: "Preview destination, fees, approvals, simulation results, and recipient reputation before signing.",
  },
];

const ecosystem = [
  "Portfolio",
  "Staking",
  "Swaps",
  "Bridges",
  "NFTs",
  "Governance",
  "Alerts",
  "Contacts",
  "DeFi",
  "Hardware",
  "Analytics",
  "Recovery",
];

function Icon({ type }: { type: string }) {
  return <span className={`icon icon-${type}`} aria-hidden="true" />;
}

function ArrowIcon() {
  return (
    <svg className="download-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 30" aria-hidden="true">
      <desc>Arrow right icon</desc>
      <path fill="currentColor" d="M9.997 19.997v-10h10v10zM0 29.998V20h10v10z"></path>
      <path fill="currentColor" d="M0 10V0h10v10z"></path>
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Cosmos Wallet home">
            <span className="cosmos-logo" aria-hidden="true" />
          </a>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#security">Security</a>
            <a href="#ecosystem">Ecosystem</a>
            <a href="#download">Download</a>
          </div>

          <a className="nav-cta download-action" href="#download">
            Download
            <ArrowIcon />
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-scene" role="img"
               aria-label="Cosmos Wallet interface floating over a connected blockchain network">
            <div className="star-field"/>
          </div>

          <div className="container hero-content fade-up">
            <p className="eyebrow">Secure multichain self-custody</p>
            <h1 id="hero-title">COSMOS WALLET</h1>
            <p className="hero-copy">
              A polished cryptocurrency wallet for people who need serious security, fast transactions, and a calm
              interface across every chain they use.
            </p>
            <div className="hero-actions">
              <a className="button button-primary cosmo-note-cta download-action" href="#download">
                Download Wallet
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section className="cosmo-note" aria-label="Cosmos Wallet app preview">
          <img src="/comsonote.png" alt="" aria-hidden="true" />

        </section>

        <section className="stats" aria-label="Cosmos Wallet network statistics">
          <div className="container stats-grid fade-up">
            {stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
            ))}
          </div>
        </section>

        <section className="intro" aria-labelledby="intro-title">
          <div className="container section-heading fade-up">
            <p className="eyebrow">Get started: Create. Connect. Transact.</p>
            <h2 id="intro-title">A wallet experience designed for trust from the first signature.</h2>
          </div>
          <div className="container start-grid">
            {gettingStarted.map((item, index) => (
                <article className="start-card fade-up" key={item.title}>
                  <span className="step">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
            ))}
          </div>
        </section>

        <section className="features" id="features" aria-labelledby="features-title">
          <div className="container section-heading fade-up">
            <p className="eyebrow">Wallet capabilities</p>
            <h2 id="features-title">Everything needed to manage assets without losing context.</h2>
          </div>
          <div className="container feature-grid">
            {features.map((feature) => (
                <article className="feature-card fade-up" key={feature.title}>
                  <Icon type={feature.icon}/>
                  <p className="card-eyebrow">{feature.eyebrow}</p>
                  <h3>{feature.title}</h3>
                  <p>{feature.copy}</p>
                </article>
            ))}
          </div>
        </section>

        <section className="trust" id="security" aria-labelledby="security-title">
          <div className="container trust-layout">
            <div className="trust-copy fade-up">
              <p className="eyebrow">Security center</p>
              <h2 id="security-title">Built to make risky actions visible before they become costly.</h2>
              <p>
                Cosmos labels approvals, simulates contract calls, highlights destination changes, and separates high-value vaults from daily spending accounts. Every warning is written for humans, not just protocol engineers.
              </p>
              <a className="button button-primary download-action" href="#download">
                Download Wallet
                <ArrowIcon />
              </a>
            </div>
            <div className="security-panel fade-up" aria-label="Security checks preview">
              <div className="panel-header">
                <span>Live Risk Review</span>
                <strong>98.7%</strong>
              </div>
              <div className="check-row">
                <span />
                Contract verified
              </div>
              <div className="check-row">
                <span />
                Recipient matches address book
              </div>
              <div className="check-row">
                <span />
                Approval limited to this transaction
              </div>
              <div className="meter">
                <span />
              </div>
              <p>3.2s average confirmation preview across priority endpoints.</p>
            </div>
          </div>
        </section>

        <section className="ecosystem" id="ecosystem" aria-labelledby="ecosystem-title">
          <div className="container section-heading fade-up">
            <p className="eyebrow">Explore chains, apps, and tools</p>
            <h2 id="ecosystem-title">A single command center for the open crypto economy.</h2>
          </div>
          <div className="container ecosystem-grid" aria-label="Cosmos Wallet supported tools">
            {ecosystem.map((item) => (
              <div className="ecosystem-item fade-up" key={item}>
                <span className="mini-mark" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 30">
                    <path fill="currentColor" d="M9.997 19.997v-10h10v10zM0 29.998V20h10v10z" />
                    <path fill="currentColor" d="M0 10V0h10v10z" />
                  </svg>
                </span>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="download" id="download" aria-labelledby="download-title">
          <div className="container download-panel fade-up">
            <div>
              <p className="eyebrow">Available soon</p>
              <h2 id="download-title">Download Cosmos Wallet for every device.</h2>
              <p>Join the private release list for mobile, desktop, and browser builds with audited account recovery and fast multichain routing.</p>
            </div>
            <a className="button button-primary download-action" href="mailto:download@cosmos-wallet.example">
              Download Wallet
              <ArrowIcon />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-layout">
          <div>
            <a className="brand" href="#top" aria-label="Cosmos Wallet home">
              <span className="brand-mark" aria-hidden="true" />
              Cosmos Wallet
            </a>
            <p>Secure self-custody for a multichain world.</p>
          </div>
          <div className="footer-links" aria-label="Footer links">
            <a href="#features">Features</a>
            <a href="#security">Security</a>
            <a href="#ecosystem">Ecosystem</a>
            <a href="#download">Download</a>
          </div>
          <div className="socials" aria-label="Social media links">
            <a href="https://x.com" aria-label="Cosmos Wallet on X">X</a>
            <a href="https://github.com" aria-label="Cosmos Wallet on GitHub">GH</a>
            <a href="https://discord.com" aria-label="Cosmos Wallet on Discord">DC</a>
          </div>
        </div>
        <div className="container copyright">Copyright 2026 Cosmos Wallet. All rights reserved.</div>
      </footer>
    </>
  );
}
