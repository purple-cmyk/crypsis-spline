import { useEffect, useRef } from "react"
import gsap from "gsap"

const tabs = [
  "Fake App Detection",
  "Ad Network Detection",
  "Website & RMG Detection",
]

type Phase = {
  id: string
  status: string
  icon: string
  title: string
  text: string
  points: string[]
  accent: string
}

const phases: Phase[] = [
  {
    id: "01",
    status: "Currently Active",
    icon: "⌘",
    title: "Signature Matching",
    text: "Identify shared code signatures, permission patterns, developer metadata, phone numbers, and distribution behavior across fraudulent loan apps.",
    points: [
      "Permission pattern recognition",
      "Developer metadata correlation",
      "Ad distribution tracing",
      "Contact and phone number tracking",
    ],
    accent: "purple",
  },
  {
    id: "02",
    status: "Upcoming",
    icon: "⌕",
    title: "Extended Detection",
    text: "Scale detection using signals discovered in Phase 1.",
    points: [
      "Larger app coverage",
      "Improved clustering",
      "Human-reviewed evidence",
    ],
    accent: "blue",
  },
  {
    id: "03",
    status: "Upcoming",
    icon: "⚡",
    title: "Automated 1-Click Review",
    text: "Automated evidence extraction and scoring.",
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
    icon: "◆",
    title: "Ecosystem Protection",
    text: "Continuous monitoring of threats across ecosystem.",
    points: [
      "Always-on monitoring",
      "Variant detection",
      "Threat intelligence",
    ],
    accent: "pink",
  },
]

function SolutionPage() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const cardsRef = useRef<(HTMLElement | null)[]>([])
  const nodesRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean) as HTMLElement[]
      const nodes = nodesRef.current.filter(Boolean) as HTMLDivElement[]

      if (!cards.length) return

      // ✅ NORMALIZED BASE STATE (no harsh differences)
      gsap.set(cards, {
        opacity: 0.72,
        scale: 0.98,
        y: 8,
      })

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

        // 🔥 keep visual consistency
        cards.forEach((card, i) => {
          card.classList.toggle("featured", i === next)
        })

        nodes.forEach((node, i) => {
          node.classList.toggle("active", i === next)
        })

        // OUT (minimal change)
        gsap.to(cards[prev], {
          opacity: 0.72,
          scale: 0.98,
          y: 8,
          duration: 0.6,
          ease: "power3.inOut",
        })

        // IN (smooth, not aggressive)
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

        // reset others
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

        // timeline nodes
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

      phases.forEach((_, i) => {
        if (i === 0) return
        tl.call(() => switchCard(i), [], "+=2.6")
      })

      tl.call(() => switchCard(0), [], "+=2.6")
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="solution-page">
      <div className="solution-container">

        <div className="solution-tabs">
          {tabs.map((tab, i) => (
            <button key={i} className="solution-tab">
              <span>{String(i + 1).padStart(2, "0")}</span>
              {tab}
            </button>
          ))}
        </div>

        <h2 className="solution-title">
          Fake App Detection <span>Phases</span>
        </h2>

        <div className="solution-timeline">
          {phases.map((_, i) => (
            <div key={i} className="timeline-node-wrap">
              <div
                ref={(el) => {
                  nodesRef.current[i] = el
                }}
                className="timeline-node"
              />
            </div>
          ))}
        </div>

        <div className="solution-cards">
          {phases.map((phase, i) => (
            <article
              key={phase.id}
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

              <div className="phase-icon">{phase.icon}</div>

              <h3>{phase.title}</h3>
              <p>{phase.text}</p>

              <ul>
                {phase.points.map((p) => (
                  <li key={p}>{p}</li>
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