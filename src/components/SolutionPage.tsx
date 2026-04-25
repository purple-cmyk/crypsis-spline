import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

const tabs = [
  "Fake App Detection",
  "Ad Network Detection",
  "Website & RMG Detection",
]

type Phase = {
  id: string
  status: string
  title: string
  text: string
  points: string[]
  accent: string
}

type DetectionSection = {
  heading: string
  highlight: string
  description: string
  phases: Phase[]
}

const detectionData: DetectionSection[] = [
  {
    heading: "Fake App Detection",
    highlight: "Phases",
    description:
      "Our systematic approach to identifying and combating fraudulent loan applications from signature matching to fully automated detection.",
    phases: [
      {
        id: "01",
        status: "Currently Active",
        title: "Signature Matching",
        text: "Identifying common code signatures, patterns, and identifiers shared across fraudulent loan apps to establish a detection baseline for I4C.",
        points: [
          "Permission pattern recognition",
          "Developer metadata correlation",
          "Detection via ad distribution mechanisms",
          "Scam phone number and contact tracing",
        ],
        accent: "purple",
      },
      {
        id: "02",
        status: "Upcoming",
        title: "Extended Detection",
        text: "Scaling detection capabilities to identify more fraudulent apps using the signatures discovered in Phase 1 with human review.",
        points: [
          "Larger app coverage",
          "Improved clustering",
          "Human-reviewed validation",
        ],
        accent: "blue",
      },
      {
        id: "03",
        status: "Upcoming",
        title: "Automated 1-Click Review",
        text: "Fully automated pipeline for one-click review and evidence extraction with minimal manual dependency.",
        points: [
          "Auto-generated reports",
          "Fast review pipeline",
          "Low manual dependency",
        ],
        accent: "green",
      },
      {
        id: "04",
        status: "Future",
        title: "Ecosystem Protection",
        text: "Continuous monitoring of app stores and social media for new scam app variants before they reach victims.",
        points: [
          "Always-on monitoring",
          "Variant detection",
          "Threat intelligence",
        ],
        accent: "pink",
      },
    ],
  },
  {
    heading: "Intermediary Ad Network",
    highlight: "Detection",
    description:
      "Intermediary ad networks allow malicious and fake ads to run on their platforms. Our system scrapes, classifies, and packages evidence for takedown.",
    phases: [
      {
        id: "01",
        status: "Completed",
        title: "Keyword-Based Ad Scraping",
        text: "Users input target keywords. The system scrapes major ad networks to discover ads matching those keywords, including short-lived campaigns.",
        points: [
          "Google Ads discovery",
          "Meta Ads Library scraping",
          "Short-lived campaign capture",
          "Keyword-driven investigation",
        ],
        accent: "purple",
      },
      {
        id: "02",
        status: "Completed",
        title: "Safety Scoring and Classification",
        text: "Each scraped ad is processed through a classification engine and assigned a safety score based on risk level and scam patterns.",
        points: [
          "Risk-based scoring",
          "Known scam pattern matching",
          "Ad category classification",
        ],
        accent: "blue",
      },
      {
        id: "03",
        status: "Currently Active",
        title: "Dashboard and Evidence Packaging",
        text: "Classified ads and their scores are displayed on a searchable dashboard with complete evidence packages for takedown requests.",
        points: [
          "Interactive results dashboard",
          "Evidence packaging for LEA takedowns",
          "Ad history and timeline tracking",
          "Export reports in standard formats",
        ],
        accent: "green",
      },
      {
        id: "04",
        status: "Future",
        title: "Real-Time Ad Monitoring",
        text: "Continuous automated monitoring of ad networks for new malicious campaign variants with instant alerts.",
        points: [
          "Real-time monitoring",
          "Instant threat alerts",
          "Campaign variant detection",
        ],
        accent: "pink",
      },
    ],
  },
  {
    heading: "Banned Website and RMG",
    highlight: "Detection",
    description:
      "Our website detection engine identifies sites similar to already banned websites, including Real Money Gaming platforms that may evade takedown orders.",
    phases: [
      {
        id: "01",
        status: "Currently Active",
        title: "Seed URL and Keyword Scanning",
        text: "Starting from seed URLs or keywords, the engine checks if a website belongs to a banned category using known data points and classification rules.",
        points: [
          "Seed URL input system",
          "Keyword scanning",
          "Banned category matching",
          "Suspect site data collection",
        ],
        accent: "purple",
      },
      {
        id: "02",
        status: "Planned",
        title: "Recursive Discovery",
        text: "The system recursively searches search engines and Telegram to discover linked websites and expand detection coverage.",
        points: [
          "Search engine discovery",
          "Telegram link discovery",
          "Unindexed site detection",
        ],
        accent: "blue",
      },
      {
        id: "03",
        status: "Planned",
        title: "ML Classification and Clustering",
        text: "Collected data points are processed through ML models to cluster websites by operator, infrastructure, and content similarity.",
        points: [
          "ML-based classification",
          "Operator clustering",
          "Infrastructure similarity mapping",
        ],
        accent: "green",
      },
      {
        id: "04",
        status: "Future",
        title: "Automated Takedown and Evidence",
        text: "Structured evidence packages are generated for Section 69A takedowns with continuous monitoring to prevent re-emergence.",
        points: [
          "Section 69A evidence support",
          "Actionable LEA reports",
          "Re-emergence monitoring",
        ],
        accent: "pink",
      },
    ],
  },
]

function SolutionPage() {
  const [activeTab, setActiveTab] = useState(0)

  const sectionRef = useRef<HTMLElement | null>(null)
  const cardsRef = useRef<(HTMLElement | null)[]>([])
  const nodesRef = useRef<(HTMLDivElement | null)[]>([])

  const activeSection = detectionData[activeTab]

  useEffect(() => {
    cardsRef.current = []
    nodesRef.current = []
  }, [activeTab])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean) as HTMLElement[]
      const nodes = nodesRef.current.filter(Boolean) as HTMLDivElement[]

      if (!cards.length) return

      gsap.fromTo(
        ".solution-title, .solution-desc",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
        }
      )

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 24,
          scale: 0.96,
        },
        {
          opacity: 0.72,
          y: 8,
          scale: 0.98,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
        }
      )

      gsap.set(cards[0], {
        opacity: 1,
        scale: 1,
        y: 0,
      })

      gsap.set(nodes, { scale: 0.7, opacity: 0.4 })
      gsap.set(nodes[0], { scale: 1.4, opacity: 1 })

      let active = 0

      const switchCard = (next: number) => {
        const prev = active
        active = next

        cards.forEach((card, i) => {
          card.classList.toggle("featured", i === next)
        })

        nodes.forEach((node, i) => {
          node.classList.toggle("active", i === next)
        })

        gsap.to(cards[prev], {
          opacity: 0.72,
          scale: 0.98,
          y: 8,
          duration: 0.6,
          ease: "power3.inOut",
        })

        gsap.fromTo(
          cards[next],
          {
            opacity: 0.6,
            scale: 0.98,
            x: 40,
          },
          {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            duration: 0.8,
            ease: "power4.out",
          }
        )

        cards.forEach((card, i) => {
          if (i !== next && i !== prev) {
            gsap.to(card, {
              opacity: 0.72,
              scale: 0.98,
              y: 8,
              duration: 0.5,
            })
          }
        })

        gsap.to(nodes, {
          scale: 0.7,
          opacity: 0.4,
          duration: 0.4,
        })

        gsap.to(nodes[next], {
          scale: 1.4,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(2)",
        })
      }

      const tl = gsap.timeline({ repeat: -1 })

      activeSection.phases.forEach((_, i) => {
        if (i === 0) return
        tl.call(() => switchCard(i), [], "+=2.6")
      })

      tl.call(() => switchCard(0), [], "+=2.6")
    }, sectionRef)

    return () => ctx.revert()
  }, [activeTab, activeSection.phases])

  return (
    <section ref={sectionRef} className="solution-page">
      <div className="solution-container">
        <div className="solution-tabs">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(i)}
              className={`solution-tab ${activeTab === i ? "active" : ""}`}
            >
              <span>{String(i + 1).padStart(2, "0")}</span>
              {tab}
            </button>
          ))}
        </div>

        <h2 className="solution-title">
          {activeSection.heading} <span>{activeSection.highlight}</span>
        </h2>

        <p className="solution-desc">{activeSection.description}</p>

        <div className="solution-timeline">
          {activeSection.phases.map((_, i) => (
            <div key={i} className="timeline-node-wrap">
              <div
                ref={(el) => {
                  nodesRef.current[i] = el
                }}
                className={`timeline-node ${i === 0 ? "active" : ""}`}
              />
            </div>
          ))}
        </div>

        <div className="solution-cards">
          {activeSection.phases.map((phase, i) => (
            <article
              key={`${activeTab}-${phase.id}`}
              ref={(el) => {
                cardsRef.current[i] = el
              }}
              className={`phase-card phase-card-${phase.accent} ${
                i === 0 ? "featured" : ""
              }`}
            >
              <div className="phase-card-glow" />

              <div className="phase-top">
                <span>{phase.id}</span>
                <span>{phase.status}</span>
              </div>

              <h3>{phase.title}</h3>
              <p>{phase.text}</p>

              <ul>
                {phase.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolutionPage