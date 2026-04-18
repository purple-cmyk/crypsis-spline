import { useEffect, useMemo, useRef, useState } from "react"
import gsap from "gsap"

type Step = {
  id: string
  status: string
  title: string
  desc: string
  points?: string[]
}

type Workflow = {
  key: string
  tab: string
  kicker: string
  title: string
  accent: string
  desc: string
  steps: Step[]
}

const workflows: Workflow[] = [
  {
    key: "fake-apps",
    tab: "Fake App Detection",
    kicker: "Fraud App Pipeline",
    title: "Fake App Detection Phases",
    accent: "Signature → Automation → Protection",
    desc: "Our systematic approach to identifying and combating fraudulent loan applications — from signature matching to fully automated detection.",
    steps: [
      {
        id: "01",
        status: "Currently Active",
        title: "Signature Matching",
        desc: "Identifying common code signatures, patterns, and identifiers shared across fraudulent loan apps to establish a detection baseline for I4C.",
        points: [
          "Permission pattern recognition",
          "Developer metadata correlation",
          "Detection via ad distribution mechanisms",
          "Scam phone number & contact tracing",
        ],
      },
      {
        id: "02",
        status: "Upcoming",
        title: "Extended Detection",
        desc: "Scaling our detection capabilities to identify more fraudulent apps using the signatures discovered in Phase 1, with human review for validation and accuracy.",
      },
      {
        id: "03",
        status: "Upcoming",
        title: "Automated 1-Click Review",
        desc: "Fully automated pipeline — one-click review and evidence extraction. No human intervention required for standard detections.",
      },
      {
        id: "04",
        status: "Future",
        title: "Ecosystem Protection",
        desc: "Proactive defence — continuous monitoring of app stores and social media for new scam app variants before they reach victims.",
      },
    ],
  },
  {
    key: "ads",
    tab: "Ad Network Detection",
    kicker: "Ad Threat Intelligence",
    title: "Intermediary Ad Network Detection",
    accent: "Scrape → Score → Package → Monitor",
    desc: "Intermediary ad networks have become a partner in crime by letting malicious and fake ads run on their platforms. Our system scrapes, classifies, and packages evidence for takedown.",
    steps: [
      {
        id: "01",
        status: "Completed",
        title: "Keyword-Based Ad Scraping",
        desc: "Users input target keywords. The system scrapes major ad networks (Google Ads, Meta Ads Library, etc.) to discover ads matching those keywords — including short-lived campaigns that vanish quickly.",
      },
      {
        id: "02",
        status: "Completed",
        title: "Safety Scoring & Classification",
        desc: "Each scraped ad is run through a classification engine and assigned a safety score. Ads are categorized by risk level and linked to known scam patterns.",
      },
      {
        id: "03",
        status: "Currently Active",
        title: "Dashboard & Evidence Packaging",
        desc: "Classified ads and their scores are displayed on a searchable dashboard. Complete evidence packages are generated for easy takedown requests.",
        points: [
          "Interactive results dashboard",
          "Evidence packaging for LEA takedowns",
          "Ad history & timeline tracking",
          "Export reports in standard formats",
        ],
      },
      {
        id: "04",
        status: "Future",
        title: "Real-Time Ad Monitoring",
        desc: "Continuous, automated monitoring of ad networks for new malicious campaign variants. Instant alerts when new scam ads are detected matching known patterns.",
      },
    ],
  },
  {
    key: "websites",
    tab: "Website & RMG Detection",
    kicker: "Website Surveillance",
    title: "Banned Website & RMG Detection",
    accent: "Scan → Discover → Cluster → Takedown",
    desc: "Our website detection engine scrapes for sites similar to already banned websites — including Real Money Gaming platforms — that could become active any moment or may have escaped takedown orders.",
    steps: [
      {
        id: "01",
        status: "Currently Active",
        title: "Seed URL & Keyword Scanning",
        desc: "Starting from seed URLs or keywords, the engine checks if a website belongs to any banned category using known data points and classification rules.",
        points: [
          "Seed URL and keyword input system",
          "Banned category matching engine",
          "Instant classification of known clean URLs",
          "Data point collection from suspect sites",
        ],
      },
      {
        id: "02",
        status: "Planned",
        title: "Recursive Discovery",
        desc: "Recursively searching across top search engines and Telegram for more linked websites. Discovers unindexed sites and expands detection coverage automatically.",
      },
      {
        id: "03",
        status: "Planned",
        title: "ML Classification & Clustering",
        desc: "All collected data points are fed through ML classification models. Websites are clustered by operator, infrastructure, and content similarity for coordinated takedowns.",
      },
      {
        id: "04",
        status: "Future",
        title: "Automated Takedown & Evidence",
        desc: "Complete evidence packages tuned for Section 69A takedowns, with actionable insights for law enforcement. Continuous monitoring ensures takedown targets don't re-emerge.",
      },
    ],
  },
]

function SolutionPage() {
  const [activeTab, setActiveTab] = useState(0)
  const contentRef = useRef<HTMLDivElement | null>(null)

  const current = useMemo(() => workflows[activeTab], [activeTab])

  useEffect(() => {
    if (!contentRef.current) return

    const ctx = gsap.context(() => {
      const header = contentRef.current?.querySelector(".pipeline-header")
      const accent = contentRef.current?.querySelector(".pipeline-accent")
      const beam = contentRef.current?.querySelector(".pipeline-beam")
      const glow = contentRef.current?.querySelector(".pipeline-travel-glow")
      const cards = gsap.utils.toArray<HTMLElement>(".pipeline-card")
      const dots = gsap.utils.toArray<HTMLElement>(".pipeline-dot")
      const connectors = gsap.utils.toArray<HTMLElement>(".pipeline-connector-fill")

      gsap.set(header, { opacity: 0, y: 20 })
      gsap.set(accent, { opacity: 0, y: 12 })
      gsap.set(cards, { opacity: 0, y: 30, scale: 0.96 })
      gsap.set(dots, { scale: 0.6, opacity: 0.45 })
      gsap.set(connectors, { scaleX: 0, transformOrigin: "left center" })
      gsap.set(beam, { scaleX: 0, transformOrigin: "left center" })
      gsap.set(glow, { x: 0, opacity: 0 })

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.to(header, {
        opacity: 1,
        y: 0,
        duration: 0.55,
      })
        .to(
          accent,
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
          },
          0.08
        )
        .to(
          beam,
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power2.inOut",
          },
          0.15
        )
        .to(
          glow,
          {
            opacity: 1,
            duration: 0.2,
          },
          0.22
        )
        .to(
          glow,
          {
            x: () => {
              const rail = contentRef.current?.querySelector(".pipeline-rail")
              return rail ? rail.clientWidth - 40 : 900
            },
            duration: 1.2,
            ease: "power2.inOut",
          },
          0.2
        )

      cards.forEach((card, index) => {
        tl.to(
          card,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
          },
          0.25 + index * 0.16
        )
          .to(
            dots[index],
            {
              scale: 1.12,
              opacity: 1,
              duration: 0.22,
              ease: "back.out(2.2)",
            },
            0.28 + index * 0.16
          )
          .to(
            dots[index],
            {
              scale: 1,
              duration: 0.22,
            },
            0.43 + index * 0.16
          )

        if (connectors[index]) {
          tl.to(
            connectors[index],
            {
              scaleX: 1,
              duration: 0.32,
              ease: "power2.out",
            },
            0.36 + index * 0.16
          )
        }
      })
    }, contentRef)

    return () => ctx.revert()
  }, [activeTab])

  return (
    <section className="solution-page">
      <div className="solution-bg">
        <div className="solution-grid-pattern" />
        <div className="solution-ambient solution-ambient-1" />
        <div className="solution-ambient solution-ambient-2" />
        <div className="solution-center-glow" />
        <div className="solution-overlay" />
      </div>

      <div className="solution-header">
        <span className="solution-kicker">Detection Systems</span>
        <h2>
          Crypsis <span>Threat Pipelines</span>
        </h2>
        <p>
          Three operational flows powering fake app detection, malicious ad
          analysis, and banned website discovery.
        </p>
      </div>

      <div className="solution-tabs">
        {workflows.map((item, index) => (
          <button
            key={item.key}
            type="button"
            className={`solution-tab ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            <span className="solution-tab-index">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{item.tab}</span>
          </button>
        ))}
      </div>

      <div className="pipeline-shell" ref={contentRef}>
        <div className="pipeline-header-wrap">
          <span className="pipeline-kicker">{current.kicker}</span>
          <h3 className="pipeline-header">{current.title}</h3>
          <p className="pipeline-accent">{current.accent}</p>
          <p className="pipeline-desc">{current.desc}</p>
        </div>

        <div className="pipeline-rail">
          <div className="pipeline-beam-track" />
          <div className="pipeline-beam" />
          <div className="pipeline-travel-glow" />

          {current.steps.map((step, index) => (
            <div className="pipeline-stage" key={`${current.key}-${step.id}`}>
              <div className="pipeline-stage-top">
                <div className="pipeline-dot-wrap">
                  <div className="pipeline-dot-ring" />
                  <div className="pipeline-dot" />
                </div>

                {index < current.steps.length - 1 && (
                  <div className="pipeline-connector">
                    <div className="pipeline-connector-base" />
                    <div className="pipeline-connector-fill" />
                  </div>
                )}
              </div>

              <article className="pipeline-card">
                <div className="pipeline-card-noise" />
                <div className="pipeline-card-aura" />
                <div className="pipeline-card-header">
                  <span className="pipeline-card-id">{step.id}</span>
                  <span
                    className={`pipeline-status ${step.status
                      .toLowerCase()
                      .replaceAll(" ", "-")}`}
                  >
                    {step.status}
                  </span>
                </div>

                <h4>{step.title}</h4>
                <p>{step.desc}</p>

                {step.points?.length ? (
                  <ul>
                    {step.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolutionPage