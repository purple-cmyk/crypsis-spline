import facebookPostImage from "../assets/spotlight/facebook.jpg"
import digitalIndiaPostImage from "../assets/spotlight/digital-india-x.jpg"
import digitalIndiaSecondPostImage from "../assets/spotlight/digital-india-x-2.jpg"
import instagramPostImage from "../assets/spotlight/instagram.jpg"
import linkedInPostImage from "../assets/spotlight/linkedin.jpg"
import linkedInSecondPostImage from "../assets/spotlight/linkedin-2.jpg"
import ministryLogo from "../assets/Ministry_of_Electronics_and_Information_Technology.svg"
import dsciLogo from "../assets/dsci.svg"

const awardPostCopy =
  "Kudos to Crypsis for securing the 1st Runner-Up position at CSGC 2.0! Awarded ₹50 Lakh for delivering an impactful cybersecurity solution."

const spotlightPosts = [
  {
    platform: "X",
    account: "Digital India",
    badge: "𝕏",
    image: digitalIndiaPostImage,
    imageAlt: "Crypsis receives the CSGC 2.0 first runner-up award",
    href: "https://x.com/_DigitalIndia/status/2026974589532999790",
  },
  {
    platform: "X",
    account: "Ministry of Electronics & IT",
    badge: "𝕏",
    image: digitalIndiaSecondPostImage,
    imageAlt: "Crypsis receives its award at the CSGC 2.0 ceremony",
    href: "https://x.com/GoI_MeitY/status/2026974761025470663",
  },
  {
    platform: "Instagram",
    account: "Digital India",
    badge: "IG",
    image: instagramPostImage,
    imageAlt: "The CSGC 2.0 award ceremony shared by Digital India",
    href: "https://www.instagram.com/p/DVN_XpljZtT/",
  },
  {
    platform: "LinkedIn",
    account: "Cyber Security Grand Challenge",
    badge: "in",
    image: linkedInPostImage,
    imageAlt: "Crypsis team at the Cyber Security Grand Challenge award ceremony",
    href: "https://www.linkedin.com/posts/csgc20-cyberinnovation-digitalindia-ugcPost-7432746663783358464-DsFW/",
  },
  {
    platform: "Press release",
    account: "Press Information Bureau",
    badge: "PIB",
    image: linkedInSecondPostImage,
    imageAlt: "Crypsis at the Cyber Security Grand Challenge 2.0 award ceremony",
    href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2233054&reg=3&lang=1",
  },
  {
    platform: "Facebook",
    account: "National e-Governance Division",
    badge: "f",
    image: facebookPostImage,
    imageAlt: "Crypsis receives the CSGC 2.0 first runner-up award",
    href: "https://www.facebook.com/NeGDofficial/posts/1st-runner-up-cyber-security-grand-challenge-20kudos-to-crypsis-for-securing-the/1336530105179043/",
  },
  {
    platform: "X",
    account: "National e-Governance Division",
    badge: "𝕏",
    image: digitalIndiaPostImage,
    imageAlt: "Crypsis team with the CSGC 2.0 award",
    href: "https://x.com/NeGD_GoI/status/2026974849932120101",
  },
]

function PostCard({
  post,
  duplicate = false,
}: {
  post: (typeof spotlightPosts)[number]
  duplicate?: boolean
}) {
  return (
    <a
      className="spotlight-post-card"
      href={post.href}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={duplicate ? -1 : undefined}
      aria-hidden={duplicate || undefined}
    >
      <div className="spotlight-post-header">
        <span className="spotlight-post-badge">{post.badge}</span>
        <span className="spotlight-post-account">
          <strong>{post.account}</strong>
          <small>{post.platform} · Cyber Security Grand Challenge 2.0</small>
        </span>
        <span className="spotlight-post-external" aria-hidden="true">
          ↗
        </span>
      </div>
      <p className="spotlight-post-copy">
        1st Runner-Up — Cyber Security Grand Challenge 2.0
        <br />
        {awardPostCopy}
        <br />
        <span>#CSGC20 #CyberInnovation #DigitalIndia</span>
      </p>
      <img
        className="spotlight-post-image"
        src={post.image}
        alt={post.imageAlt}
        loading="eager"
        decoding="async"
      />
      <span className="spotlight-post-link">View original post</span>
    </a>
  )
}

function MediaPage() {
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

        <div
          className="spotlight-carousel"
          role="region"
          aria-label="Media coverage of Crypsis"
          aria-roledescription="carousel"
        >
          <div className="spotlight-track">
            <div className="spotlight-track-group">
              {spotlightPosts.map((post) => (
                <PostCard key={post.href} post={post} />
              ))}
            </div>
            <div className="spotlight-track-group" aria-hidden="true">
              {spotlightPosts.map((post) => (
                <PostCard key={`copy-${post.href}`} post={post} duplicate />
              ))}
            </div>
          </div>
        </div>

        <p className="spotlight-carousel-hint">
          Posts scroll continuously. Hover or focus to pause; select a post to open it.
        </p>

        <div className="trusted-strip">
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
        .spotlight-carousel {
          --spotlight-gap: 20px;
          overflow: hidden;
          width: 100%;
          padding: 16px 0 24px;
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent);
          mask-image: linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent);
        }

        .spotlight-track {
          display: flex;
          width: max-content;
          animation: spotlight-scroll 78s linear infinite;
        }

        .spotlight-track-group {
          display: flex;
          flex: 0 0 auto;
          gap: var(--spotlight-gap);
          padding-right: var(--spotlight-gap);
        }

        .spotlight-carousel:hover .spotlight-track,
        .spotlight-carousel:focus-within .spotlight-track {
          animation-play-state: paused;
        }

        .spotlight-post-card {
          display: flex;
          flex: 0 0 clamp(290px, 34vw, 410px);
          flex-direction: column;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 14px;
          background: #fff;
          color: #16181c;
          text-align: left;
          text-decoration: none;
          transition: border-color 180ms ease, transform 180ms ease;
        }

        .spotlight-post-card:hover {
          transform: translateY(-3px);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .spotlight-post-card:focus-visible {
          outline: 2px solid #a88bff;
          outline-offset: 4px;
        }

        .spotlight-post-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 18px 10px;
        }

        .spotlight-post-badge {
          display: grid;
          width: 38px;
          height: 38px;
          flex: 0 0 38px;
          place-items: center;
          border-radius: 50%;
          background: #17121f;
          color: #fff;
          font-size: 16px;
          font-weight: 700;
        }

        .spotlight-post-account {
          display: grid;
          min-width: 0;
          gap: 3px;
        }

        .spotlight-post-account strong {
          overflow: hidden;
          font-size: 13px;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .spotlight-post-account small {
          color: #62666d;
          font-size: 11px;
        }

        .spotlight-post-external {
          margin-left: auto;
          color: #62666d;
          font-size: 20px;
        }

        .spotlight-post-copy {
          display: -webkit-box;
          min-height: 92px;
          margin: 0;
          overflow: hidden;
          padding: 2px 18px 12px;
          color: #22252a;
          font-size: 13px;
          line-height: 1.5;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 4;
        }

        .spotlight-post-copy span {
          color: #5b50b8;
        }

        .spotlight-post-image {
          display: block;
          width: 100%;
          height: 210px;
          object-fit: cover;
          object-position: center 38%;
        }

        .spotlight-post-link {
          padding: 12px 18px 14px;
          color: #6153c2;
          font-size: 12px;
          font-weight: 600;
        }

        .spotlight-carousel-hint {
          margin: 0;
          color: rgba(255, 255, 255, 0.5);
          font-size: 12px;
          text-align: center;
        }

        .trusted-strip {
          max-width: 1100px;
          margin: 36px auto 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
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

        @keyframes spotlight-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (max-width: 768px) {
          .spotlight-carousel {
            --spotlight-gap: 14px;
            -webkit-mask-image: linear-gradient(90deg, transparent, #000 2%, #000 98%, transparent);
            mask-image: linear-gradient(90deg, transparent, #000 2%, #000 98%, transparent);
          }

          .spotlight-post-card { flex-basis: min(82vw, 360px); }
          .spotlight-post-image { height: 190px; }
          .trusted-logos { gap: 28px; }
          .trusted-logo { height: 38px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .spotlight-track { animation: none; }
          .spotlight-carousel { overflow-x: auto; }
          .spotlight-track-group[aria-hidden="true"] { display: none; }
        }
      `}</style>
    </section>
  )
}

export default MediaPage
