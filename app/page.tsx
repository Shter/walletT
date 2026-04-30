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
    icon: "shield",
  },
  {
    title: "Modern UI",
    eyebrow: "Clarity at speed",
    copy:
      "A refined portfolio view surfaces balances, staking rewards, gas estimates, and risk signals without burying users in chain jargon.",
    icon: "spark",
  },
  {
    title: "Fast Transactions",
    eyebrow: "Built for motion",
    copy:
      "Nebula routes swaps, sends, and bridge actions through low-latency endpoints with clear fees before a signature is requested.",
    icon: "bolt",
  },
  {
    title: "Cross-Platform",
    eyebrow: "One wallet everywhere",
    copy:
      "Use Nebula on iOS, Android, desktop, and browser with synchronized preferences and local-first account recovery guidance.",
    icon: "devices",
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
  return (
    <span className={`icon icon-${type}`} aria-hidden="true">
      <span />
    </span>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Nebula Wallet home">
            <span className="brand-mark" aria-hidden="true" />
            Nebula Wallet
          </a>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#security">Security</a>
            <a href="#ecosystem">Ecosystem</a>
            <a href="#download">Download</a>
          </div>
          <a className="nav-cta" href="#download">
            Download Wallet
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-band" aria-labelledby="hero-title">
          <div className="hero-scene" role="img" aria-label="Nebula Wallet interface floating over a connected blockchain network">
            <div className="star-field" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="wallet-visual">
              <div className="wallet-top">
                <span />
                <span />
              </div>
              <div className="balance-card">
                <small>Total Balance</small>
                <strong>$48,219.84</strong>
                <span>+12.4% this month</span>
              </div>
              <div className="asset-row">
                <span className="token-dot" />
                <div>
                  <strong>ATOM</strong>
                  <small>1,284.42</small>
                </div>
                <b>$14,908</b>
              </div>
              <div className="asset-row">
                <span className="token-dot alt" />
                <div>
                  <strong>NOVA</strong>
                  <small>8,419.20</small>
                </div>
                <b>$9,630</b>
              </div>
              <div className="approval-pill">Verified transaction</div>
            </div>
          </div>

          <div className="container hero-content fade-up">
            <p className="eyebrow">Secure multichain self-custody</p>
            <h1 id="hero-title">Nebula Wallet</h1>
            <p className="hero-copy">
              A polished cryptocurrency wallet for people who need serious security, fast transactions, and a calm interface across every chain they use.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#download">
                Download Wallet
              </a>
              <a className="button button-secondary" href="#features">
                Explore Features
              </a>
            </div>
          </div>
        </section>

        <section className="stats section-band" aria-label="Nebula Wallet network statistics">
          <div className="container stats-grid fade-up">
            {stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section-band intro" aria-labelledby="intro-title">
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

        <section className="section-band features" id="features" aria-labelledby="features-title">
          <div className="container section-heading fade-up">
            <p className="eyebrow">Wallet capabilities</p>
            <h2 id="features-title">Everything needed to manage assets without losing context.</h2>
          </div>
          <div className="container feature-grid">
            {features.map((feature) => (
              <article className="feature-card fade-up" key={feature.title}>
                <Icon type={feature.icon} />
                <p className="card-eyebrow">{feature.eyebrow}</p>
                <h3>{feature.title}</h3>
                <p>{feature.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-band trust" id="security" aria-labelledby="security-title">
          <div className="container trust-layout">
            <div className="trust-copy fade-up">
              <p className="eyebrow">Security center</p>
              <h2 id="security-title">Built to make risky actions visible before they become costly.</h2>
              <p>
                Nebula labels approvals, simulates contract calls, highlights destination changes, and separates high-value vaults from daily spending accounts. Every warning is written for humans, not just protocol engineers.
              </p>
              <a className="button button-primary" href="#download">
                Download Wallet
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

        <section className="section-band ecosystem" id="ecosystem" aria-labelledby="ecosystem-title">
          <div className="container section-heading fade-up">
            <p className="eyebrow">Explore chains, apps, and tools</p>
            <h2 id="ecosystem-title">A single command center for the open crypto economy.</h2>
          </div>
          <div className="container ecosystem-grid" aria-label="Nebula Wallet supported tools">
            {ecosystem.map((item) => (
              <a className="ecosystem-item fade-up" href="#download" key={item}>
                <span className="mini-mark" aria-hidden="true" />
                {item}
              </a>
            ))}
          </div>
        </section>

        <section className="section-band download" id="download" aria-labelledby="download-title">
          <div className="container download-panel fade-up">
            <div>
              <p className="eyebrow">Available soon</p>
              <h2 id="download-title">Download Nebula Wallet for every device.</h2>
              <p>Join the private release list for mobile, desktop, and browser builds with audited account recovery and fast multichain routing.</p>
            </div>
            <a className="button button-primary" href="mailto:download@nebula-wallet.example">
              Download Wallet
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-layout">
          <div>
            <a className="brand" href="#top" aria-label="Nebula Wallet home">
              <span className="brand-mark" aria-hidden="true" />
              Nebula Wallet
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
            <a href="https://x.com" aria-label="Nebula Wallet on X">X</a>
            <a href="https://github.com" aria-label="Nebula Wallet on GitHub">GH</a>
            <a href="https://discord.com" aria-label="Nebula Wallet on Discord">DC</a>
          </div>
        </div>
        <div className="container copyright">Copyright 2026 Nebula Wallet. All rights reserved.</div>
      </footer>
    </>
  );
}
