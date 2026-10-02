import awardImage from "../assets/award-image.webp"
import ministryLogo from "../assets/Ministry_of_Electronics_and_Information_Technology.svg"
import dsciLogo from "../assets/dsci.svg"

function MediaPage() {
  const linkedinUrl = "https://www.linkedin.com/posts/csgc2-cybersecuritygrandchallenge-appsecurity-share-7432735319676076032-Czd1/";

  return (
    <section className="media-page" id="media">
      <div className="glass-container">
        <div className="glass-header">
          <span className="glass-kicker">Media Recognition</span>
          <h2 className="glass-heading">In The Spotlight</h2>
          <p className="glass-subtext">
            Crypsis has been recognized on the national stage for innovation in cybersecurity.
          </p>
        </div>

        {/* DESKTOP: clickable lightbox */}
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="lk-link-wrapper"
        >
          <div className="lk-lightbox">
            <div className="lk-image-side">
              <img
                src={awardImage}
                alt="Crypsis DSCI Award Ceremony"
                className="lk-main-img"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  img.style.display = "none";
                  const fallback = img.parentElement?.querySelector(".lk-img-fallback") as HTMLElement | null;
                  if (fallback) fallback.style.display = "flex";
                }}
              />
              <div className="lk-img-fallback">
                <span>🏆</span>
                <p>award-image.webp / .png / .jpeg</p>
              </div>
            </div>

            <div className="lk-panel">
              <div className="lk-panel-top">
                <div className="lk-org-row">
                  <div className="lk-org-avatar">DSCI</div>
                  <div className="lk-org-meta">
                    <div className="lk-org-name">Data Security Council of India</div>
                    <div className="lk-org-sub">72,517 followers</div>
                    <div className="lk-org-sub">3mo · 🌐</div>
                  </div>
                  <button
                    className="lk-follow"
                    onClick={(e) => e.stopPropagation()}
                  >
                    + Follow
                  </button>
                </div>
              </div>

              <div className="lk-panel-body">
                <p>
                  <span className="lk-tag">#CSGC2.0</span> | We are pleased to announce <strong>Crypsis</strong> as the <strong>1st Runner-Up</strong> of the Cyber Security Grand Challenge 2.0.
                </p>
                <p>
                  Crypsis was recognized for its impactful solution focused on <strong>Clone & Fake Apps Mitigation</strong>, addressing one of the most pressing challenges in today's digital economy, protecting users and enterprises from malicious app impersonation and fraud.
                </p>
                <p>Congratulations to Team Crypsis for their remarkable performance!</p>
                <p className="lk-tags">
                  <span className="lk-tag">#CyberSecurityGrandChallenge</span>{" "}
                  <span className="lk-tag">#AppSecurity</span>{" "}
                  <span className="lk-tag">#DigitalTrust</span>{" "}
                  <span className="lk-tag">#CyberInnovation</span>{" "}
                  <span className="lk-tag">#DSCI</span>{" "}
                  <span className="lk-tag">| Ministry of Electronics and Information Technology</span>{" "}
                  <span className="lk-tag">| S Krishnan</span>{" "}
                  <span className="lk-tag">Dr. Gaurav Gupta</span>{" "}
                  <span className="lk-tag">| Aryan Kalra</span>{" "}
                  <span className="lk-tag">| Vinayak Godse Atul Kumar Pragya Srivastava Hemang Vivek Prakhar</span>
                </p>
              </div>

              <div className="lk-reactions-row">
                <div className="lk-react-left">
                  <span className="lk-emoji-stack">👍🤝</span>
                  <span className="lk-react-label">You and 34 others</span>
                </div>
                <span className="lk-comment-count">2 comments</span>
              </div>

              <div className="lk-divider" />

              <div className="lk-actions">
                <button className="lk-action lk-action-active" onClick={(e) => e.stopPropagation()}>
                  <span className="lk-action-icon">👍</span> Like
                </button>
                <button className="lk-action" onClick={(e) => e.stopPropagation()}>
                  <span className="lk-action-icon">💬</span> Comment
                </button>
                <button className="lk-action" onClick={(e) => e.stopPropagation()}>
                  <span className="lk-action-icon">🔁</span> Repost
                </button>
                <button className="lk-action" onClick={(e) => e.stopPropagation()}>
                  <span className="lk-action-icon">📤</span> Send
                </button>
              </div>

              <div className="lk-divider" />
              <div className="lk-most-relevant">Most relevant ▾</div>
            </div>
          </div>
        </a>

        {/* MOBILE: clickable card */}
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="lk-link-wrapper"
        >
          <div className="lk-mobile-card">
            <div className="lk-mobile-img-wrap">
              <img
                src={awardImage}
                alt="Crypsis DSCI Award Ceremony"
                className="lk-mobile-img"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  img.style.display = "none";
                  const fallback = img.parentElement?.querySelector(".lk-mobile-fallback") as HTMLElement | null;
                  if (fallback) fallback.style.display = "flex";
                }}
              />
              <div className="lk-mobile-fallback">
                <span>🏆</span>
                <p>award-image.webp / .png / .jpeg</p>
              </div>
            </div>

            <div className="lk-mobile-header">
              <div className="lk-org-avatar">DSCI</div>
              <div className="lk-org-meta">
                <div className="lk-org-name">Data Security Council of India</div>
                <div className="lk-org-sub">72,517 followers · 3mo · 🌐</div>
              </div>
              <button className="lk-follow" onClick={(e) => e.stopPropagation()}>+ Follow</button>
            </div>

            <div className="lk-mobile-body">
              <p>
                <span className="lk-tag">#CSGC2.0</span> | We are pleased to announce <strong>Crypsis</strong> as the <strong>1st Runner-Up</strong> of the Cyber Security Grand Challenge 2.0.
              </p>
              <p>
                Crypsis was recognized for its impactful solution focused on <strong>Clone & Fake Apps Mitigation</strong>, protecting users and enterprises from malicious app impersonation and fraud.
              </p>
              <p>Congratulations to Team Crypsis for their remarkable performance!</p>
              <p>
                <span className="lk-tag">#CyberSecurityGrandChallenge</span>{" "}
                <span className="lk-tag">#AppSecurity</span>{" "}
                <span className="lk-tag">#DigitalTrust</span>{" "}
                <span className="lk-tag">#DSCI</span>
              </p>
            </div>

            <div className="lk-reactions-row" style={{ padding: "0 14px 8px" }}>
              <div className="lk-react-left">
                <span className="lk-emoji-stack">👍🤝</span>
                <span className="lk-react-label">You and 34 others</span>
              </div>
              <span className="lk-comment-count">2 comments</span>
            </div>

            <div className="lk-divider" style={{ margin: "0 14px" }} />

            <div className="lk-actions">
              <button className="lk-action lk-action-active" onClick={(e) => e.stopPropagation()}>
                <span className="lk-action-icon">👍</span> Like
              </button>
              <button className="lk-action" onClick={(e) => e.stopPropagation()}>
                <span className="lk-action-icon">💬</span> Comment
              </button>
              <button className="lk-action" onClick={(e) => e.stopPropagation()}>
                <span className="lk-action-icon">🔁</span> Repost
              </button>
              <button className="lk-action" onClick={(e) => e.stopPropagation()}>
                <span className="lk-action-icon">📤</span> Send
              </button>
            </div>
          </div>
        </a>

        {/* ─── TRUSTED BY STRIP ─── */}
        <div className="trusted-strip">
          <p className="trusted-label">Trusted by</p>
          <div className="trusted-logos">
            <div className="trusted-logo-item">
              <img
                src={ministryLogo}
                alt="Ministry of Electronics and Information Technology"
                className="trusted-logo"
              />
              <span className="trusted-logo-name">MeitY</span>
            </div>
            <div className="trusted-divider-vert" />
            <div className="trusted-logo-item">
              <img
                src={dsciLogo}
                alt="Data Security Council of India"
                className="trusted-logo"
              />
              <span className="trusted-logo-name">DSCI</span>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .lk-link-wrapper {
          display: block;
          text-decoration: none;
          color: inherit;
          cursor: pointer;
        }

        .lk-link-wrapper:hover .lk-lightbox,
        .lk-link-wrapper:hover .lk-mobile-card {
          outline: 2px solid rgba(10, 102, 194, 0.4);
          outline-offset: 2px;
        }

        .lk-lightbox {
          display: flex;
          width: 100%;
          max-width: 1100px;
          margin: 32px auto 0;
          background: #1b1b1b;
          border-radius: 12px;
          overflow: hidden;
          min-height: 560px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          transition: outline 0.15s ease;
        }

        @media (max-width: 768px) {
          .lk-lightbox { display: none; }
        }

        .lk-image-side {
          flex: 1 1 60%;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 520px;
          position: relative;
          overflow: hidden;
        }

        .lk-main-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .lk-img-fallback {
          display: none;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          height: 100%;
          min-height: 400px;
          background: #111;
        }

        .lk-img-fallback span { font-size: 52px; }
        .lk-img-fallback p { font-size: 13px; color: #666; font-family: monospace; }

        .lk-panel {
          flex: 0 0 380px;
          background: #fff;
          display: flex;
          flex-direction: column;
          border-left: 1px solid #e0e0e0;
          overflow: hidden;
        }

        .lk-panel-top {
          padding: 16px 16px 12px;
          border-bottom: 1px solid #e8e8e8;
          flex-shrink: 0;
        }

        .lk-org-row {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .lk-org-avatar {
          width: 48px;
          height: 48px;
          border-radius: 8px;
          background: #004182;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 9px;
          font-weight: 800;
          color: #fff;
          letter-spacing: 0.3px;
          flex-shrink: 0;
          text-align: center;
          line-height: 1.2;
        }

        .lk-org-meta { flex: 1; }

        .lk-org-name {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0,0,0,0.9);
          line-height: 1.3;
        }

        .lk-org-sub {
          font-size: 12px;
          color: rgba(0,0,0,0.5);
          line-height: 1.5;
        }

        .lk-follow {
          background: none;
          border: none;
          color: #0a66c2;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          white-space: nowrap;
          padding: 2px 0;
        }

        .lk-panel-body {
          flex: 1;
          overflow-y: auto;
          padding: 14px 16px;
          font-size: 14px;
          color: rgba(0,0,0,0.85);
          line-height: 1.6;
        }

        .lk-panel-body p { margin: 0 0 10px; }

        .lk-tag { color: #0a66c2; cursor: pointer; }
        .lk-tags { font-size: 13px; }

        .lk-reactions-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 16px;
          flex-shrink: 0;
        }

        .lk-react-left {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .lk-emoji-stack { font-size: 16px; letter-spacing: -2px; }

        .lk-react-label {
          font-size: 13px;
          color: rgba(0,0,0,0.55);
        }

        .lk-comment-count {
          font-size: 13px;
          color: rgba(0,0,0,0.55);
        }

        .lk-divider {
          height: 1px;
          background: #e0e0e0;
          margin: 0;
          flex-shrink: 0;
        }

        .lk-actions {
          display: flex;
          justify-content: space-around;
          padding: 2px 4px;
          flex-shrink: 0;
        }

        .lk-action {
          background: none;
          border: none;
          padding: 10px 8px;
          font-size: 13px;
          font-weight: 600;
          color: rgba(0,0,0,0.6);
          cursor: pointer;
          border-radius: 4px;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .lk-action:hover {
          background: rgba(0,0,0,0.05);
          color: rgba(0,0,0,0.9);
        }

        .lk-action-active { color: #0a66c2; }
        .lk-action-icon { font-size: 16px; }

        .lk-most-relevant {
          padding: 10px 16px;
          font-size: 13px;
          font-weight: 600;
          color: rgba(0,0,0,0.7);
          cursor: pointer;
          flex-shrink: 0;
        }

        .lk-mobile-card {
          display: none;
          background: #fff;
          border: 1px solid #e0e0e0;
          border-radius: 10px;
          overflow: hidden;
          margin: 24px auto 0;
          max-width: 560px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        @media (max-width: 768px) {
          .lk-mobile-card { display: block; }
        }

        .lk-mobile-img-wrap {
          width: 100%;
          background: #111;
          min-height: 220px;
        }

        .lk-mobile-img {
          width: 100%;
          display: block;
          object-fit: cover;
          max-height: 320px;
        }

        .lk-mobile-fallback {
          display: none;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 220px;
          gap: 8px;
          background: #111;
        }

        .lk-mobile-fallback span { font-size: 48px; }
        .lk-mobile-fallback p { font-size: 12px; color: #666; font-family: monospace; }

        .lk-mobile-header {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 14px 14px 0;
        }

        .lk-mobile-body {
          padding: 10px 14px 4px;
          font-size: 14px;
          color: rgba(0,0,0,0.85);
          line-height: 1.6;
        }

        .lk-mobile-body p { margin: 0 0 8px; }

        .trusted-strip {
          max-width: 1100px;
          margin: 36px auto 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .trusted-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin: 0;
        }

        .trusted-logos {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .trusted-logo-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          opacity: 0.75;
          transition: opacity 0.2s ease;
        }

        .trusted-logo-item:hover { opacity: 1; }

        .trusted-logo {
          height: 52px;
          width: auto;
          object-fit: contain;
          filter: brightness(0) invert(1);
        }

        .trusted-logo-name {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
        }

        .trusted-divider-vert {
          width: 1px;
          height: 48px;
          background: rgba(255,255,255,0.12);
        }

        @media (max-width: 768px) {
          .trusted-logos { gap: 28px; }
          .trusted-logo { height: 38px; }
        }
      `}</style>
    </section>
  );
}

export default MediaPage;