import { useEffect, useRef, useState } from "react"
// // import gsap from "gsap"

// // const tabs = [
// //   "Fake App Detection",
// //   "Ad Network Detection",
// //   "Website & RMG Detection",
// // ]

// // type Phase = {
// //   id: string
// //   status: string
// //   title: string
// //   text: string
// //   points: string[]
// //   accent: string
// // }

// // type DetectionSection = {
// //   heading: string
// //   highlight: string
// //   description: string
// //   phases: Phase[]
// // }

// // const detectionData: DetectionSection[] = [
// //   {
// //     heading: "Fake App Detection",
// //     highlight: "Phases",
// //     description:
// //       "Our systematic approach to identifying and combating fraudulent loan applications from signature matching to fully automated detection.",
// //     phases: [
// //       {
// //         id: "01",
// //         status: "Currently Active",
// //         title: "Signature Matching",
// //         text: "Identifying common code signatures, patterns, and identifiers shared across fraudulent loan apps to establish a detection baseline for I4C.",
// //         points: [
// //           "Permission pattern recognition",
// //           "Developer metadata correlation",
// //           "Detection via ad distribution mechanisms",
// //           "Scam phone number and contact tracing",
// //         ],
// //         accent: "purple",
// //       },
// //       {
// //         id: "02",
// //         status: "Upcoming",
// //         title: "Extended Detection",
// //         text: "Scaling detection capabilities using signatures discovered in Phase 1 with human validation.",
// //         points: [
// //           "Larger app coverage",
// //           "Improved clustering",
// //           "Human-reviewed evidence",
// //         ],
// //         accent: "blue",
// //       },
// //       {
// //         id: "03",
// //         status: "Upcoming",
// //         title: "Automated 1-Click Review",
// //         text: "Fully automated pipeline for evidence extraction and review.",
// //         points: [
// //           "Auto-generated reports",
// //           "Fast review pipeline",
// //           "Low manual dependency",
// //         ],
// //         accent: "green",
// //       },
// //       {
// //         id: "04",
// //         status: "Future",
// //         title: "Ecosystem Protection",
// //         text: "Continuous monitoring of app stores and social media for new scam variants.",
// //         points: [
// //           "Always-on monitoring",
// //           "Variant detection",
// //           "Threat intelligence",
// //         ],
// //         accent: "pink",
// //       },
// //     ],
// //   },
// //   {
// //     heading: "Intermediary Ad Network",
// //     highlight: "Detection",
// //     description:
// //       "Intermediary ad networks allow malicious and fake ads to run on their platforms. Our system scrapes, classifies, and packages evidence for takedown.",
// //     phases: [
// //       {
// //         id: "01",
// //         status: "Completed",
// //         title: "Keyword-Based Ad Scraping",
// //         text: "Users input target keywords. The system scrapes major ad networks to discover ads matching those keywords, including short-lived campaigns.",
// //         points: [
// //           "Google Ads discovery",
// //           "Meta Ads Library scraping",
// //           "Short-lived campaign capture",
// //           "Keyword-driven investigation",
// //         ],
// //         accent: "purple",
// //       },
// //       {
// //         id: "02",
// //         status: "Completed",
// //         title: "Safety Scoring and Classification",
// //         text: "Each scraped ad is processed through a classification engine and assigned a safety score based on risk level and scam patterns.",
// //         points: [
// //           "Risk-based scoring",
// //           "Known scam pattern matching",
// //           "Ad category classification",
// //         ],
// //         accent: "blue",
// //       },
// //       {
// //         id: "03",
// //         status: "Currently Active",
// //         title: "Dashboard and Evidence Packaging",
// //         text: "Classified ads and their scores are displayed on a searchable dashboard with complete evidence packages for takedown requests.",
// //         points: [
// //           "Interactive results dashboard",
// //           "Evidence packaging for LEA takedowns",
// //           "Ad history and timeline tracking",
// //           "Export reports in standard formats",
// //         ],
// //         accent: "green",
// //       },
// //       {
// //         id: "04",
// //         status: "Future",
// //         title: "Real-Time Ad Monitoring",
// //         text: "Continuous automated monitoring of ad networks for new malicious campaign variants with instant alerts.",
// //         points: [
// //           "Real-time monitoring",
// //           "Instant threat alerts",
// //           "Campaign variant detection",
// //         ],
// //         accent: "pink",
// //       },
// //     ],
// //   },
// //   {
// //     heading: "Banned Website and RMG",
// //     highlight: "Detection",
// //     description:
// //       "Our website detection engine identifies sites similar to banned websites, including Real Money Gaming platforms that may evade takedown orders.",
// //     phases: [
// //       {
// //         id: "01",
// //         status: "Currently Active",
// //         title: "Seed URL and Keyword Scanning",
// //         text: "Starting from seed URLs or keywords, the engine checks if a website belongs to a banned category using known data points and classification rules.",
// //         points: [
// //           "Seed URL input system",
// //           "Keyword scanning",
// //           "Banned category matching",
// //           "Suspect site data collection",
// //         ],
// //         accent: "purple",
// //       },
// //       {
// //         id: "02",
// //         status: "Planned",
// //         title: "Recursive Discovery",
// //         text: "The system recursively searches search engines and Telegram to discover linked websites and expand detection coverage.",
// //         points: [
// //           "Search engine discovery",
// //           "Telegram link discovery",
// //           "Unindexed site detection",
// //         ],
// //         accent: "blue",
// //       },
// //       {
// //         id: "03",
// //         status: "Planned",
// //         title: "ML Classification and Clustering",
// //         text: "Collected data points are processed through ML models to cluster websites by operator, infrastructure, and content similarity.",
// //         points: [
// //           "ML-based classification",
// //           "Operator clustering",
// //           "Infrastructure similarity mapping",
// //         ],
// //         accent: "green",
// //       },
// //       {
// //         id: "04",
// //         status: "Future",
// //         title: "Automated Takedown and Evidence",
// //         text: "Structured evidence packages are generated for Section 69A takedowns with continuous monitoring to prevent re-emergence.",
// //         points: [
// //           "Section 69A evidence support",
// //           "Actionable LEA reports",
// //           "Re-emergence monitoring",
// //         ],
// //         accent: "pink",
// //       },
// //     ],
// //   },
// // ]

// // function SolutionPage() {
// //   const [activeTab, setActiveTab] = useState(0)

// //   const sectionRef = useRef<HTMLElement | null>(null)
// //   const cardsRef = useRef<(HTMLElement | null)[]>([])
// //   const nodesRef = useRef<(HTMLDivElement | null)[]>([])
// //   const lineRef = useRef<HTMLDivElement | null>(null)
// //   const progressRef = useRef<HTMLDivElement | null>(null)
// //   const pulseRef = useRef<HTMLDivElement | null>(null)

// //   const activeSection = detectionData[activeTab]

// //   useEffect(() => {
// //     const ctx = gsap.context(() => {
// //       const cards = cardsRef.current.filter(Boolean) as HTMLElement[]
// //       const nodes = nodesRef.current.filter(Boolean) as HTMLDivElement[]

// //       if (!cards.length || !nodes.length) return

// //       let active = 0

// //       cards.forEach((card, index) => {
// //         card.classList.toggle("featured", index === 0)
// //       })

// //       nodes.forEach((node, index) => {
// //         node.classList.toggle("active", index === 0)
// //       })

// //       gsap.set(cards, {
// //         opacity: 0.48,
// //         scale: 0.96,
// //         y: 16,
// //         filter: "blur(1px)",
// //       })

// //       gsap.set(cards[0], {
// //         opacity: 1,
// //         scale: 1,
// //         y: 0,
// //         filter: "blur(0px)",
// //       })

// //       gsap.set(nodes, {
// //         scale: 0.7,
// //         opacity: 0.35,
// //       })

// //       gsap.set(nodes[0], {
// //         scale: 1.45,
// //         opacity: 1,
// //       })

// //       gsap.set(progressRef.current, {
// //         width: "0%",
// //       })

// //       gsap.set(pulseRef.current, {
// //         left: "0%",
// //         opacity: 1,
// //       })

// //       gsap.fromTo(
// //         ".solution-title, .solution-desc",
// //         { opacity: 0, y: 18 },
// //         {
// //           opacity: 1,
// //           y: 0,
// //           duration: 0.55,
// //           stagger: 0.08,
// //           ease: "power3.out",
// //         }
// //       )

// //       gsap.fromTo(
// //         cards,
// //         { opacity: 0, y: 30, scale: 0.94 },
// //         {
// //           opacity: (i) => (i === 0 ? 1 : 0.48),
// //           y: (i) => (i === 0 ? 0 : 16),
// //           scale: (i) => (i === 0 ? 1 : 0.96),
// //           duration: 0.75,
// //           stagger: 0.08,
// //           ease: "power3.out",
// //         }
// //       )

// //       gsap.fromTo(
// //         lineRef.current,
// //         { scaleX: 0, transformOrigin: "left center" },
// //         {
// //           scaleX: 1,
// //           duration: 0.9,
// //           ease: "power3.out",
// //         }
// //       )

// //       const updateNetwork = (next: number) => {
// //         const progress = (next / (nodes.length - 1)) * 100

// //         gsap.to(progressRef.current, {
// //           width: `${progress}%`,
// //           duration: 0.75,
// //           ease: "power3.inOut",
// //         })

// //         gsap.to(pulseRef.current, {
// //           left: `${progress}%`,
// //           duration: 0.75,
// //           ease: "power3.inOut",
// //         })

// //         nodes.forEach((node, i) => {
// //           node.classList.toggle("active", i === next)

// //           gsap.to(node, {
// //             scale: i === next ? 1.45 : 0.7,
// //             opacity: i === next ? 1 : 0.35,
// //             duration: 0.45,
// //             ease: i === next ? "back.out(2)" : "power3.out",
// //           })
// //         })
// //       }

// //       const switchCard = (next: number) => {
// //         const prev = active
// //         active = next

// //         cards.forEach((card, i) => {
// //           card.classList.toggle("featured", i === next)
// //         })

// //         gsap.to(cards[prev], {
// //           opacity: 0.48,
// //           scale: 0.96,
// //           y: 16,
// //           filter: "blur(1px)",
// //           duration: 0.55,
// //           ease: "power3.inOut",
// //         })

// //         gsap.fromTo(
// //           cards[next],
// //           {
// //             opacity: 0.55,
// //             scale: 0.96,
// //             y: 16,
// //             x: 34,
// //             filter: "blur(1px)",
// //           },
// //           {
// //             opacity: 1,
// //             scale: 1,
// //             y: 0,
// //             x: 0,
// //             filter: "blur(0px)",
// //             duration: 0.75,
// //             ease: "power4.out",
// //           }
// //         )

// //         cards.forEach((card, i) => {
// //           if (i !== next && i !== prev) {
// //             gsap.to(card, {
// //               opacity: 0.48,
// //               scale: 0.96,
// //               y: 16,
// //               filter: "blur(1px)",
// //               duration: 0.45,
// //               ease: "power3.out",
// //             })
// //           }
// //         })

// //         updateNetwork(next)
// //       }

// //       const tl = gsap.timeline({ repeat: -1 })

// //       activeSection.phases.forEach((_, i) => {
// //         if (i === 0) return
// //         tl.call(() => switchCard(i), [], "+=2.6")
// //       })

// //       tl.call(() => switchCard(0), [], "+=2.6")
// //     }, sectionRef)

// //     return () => ctx.revert()
// //   }, [activeTab, activeSection])

// //   return (
// //     <section ref={sectionRef} className="solution-page">
// //       <div className="solution-container">
// //         <div className="solution-tabs">
// //           {tabs.map((tab, i) => (
// //             <button
// //               key={tab}
// //               type="button"
// //               onClick={() => setActiveTab(i)}
// //               className={`solution-tab ${activeTab === i ? "active" : ""}`}
// //             >
// //               <span>{String(i + 1).padStart(2, "0")}</span>
// //               {tab}
// //             </button>
// //           ))}
// //         </div>

// //         <h2 className="solution-title">
// //           {activeSection.heading} <span>{activeSection.highlight}</span>
// //         </h2>

// //         <p className="solution-desc">{activeSection.description}</p>

// //         <div className="solution-timeline">
// //           <div ref={lineRef} className="timeline-line" />
// //           <div ref={progressRef} className="timeline-progress" />
// //           <div ref={pulseRef} className="timeline-pulse" />

// //           {activeSection.phases.map((_, i) => (
// //             <div key={`${activeTab}-node-${i}`} className="timeline-node-wrap">
// //               <div
// //                 ref={(el) => {
// //                   nodesRef.current[i] = el
// //                 }}
// //                 className={`timeline-node ${i === 0 ? "active" : ""}`}
// //               />
// //             </div>
// //           ))}
// //         </div>

// //         <div className="solution-cards">
// //           {activeSection.phases.map((phase, i) => (
// //             <article
// //               key={`${activeTab}-${phase.id}`}
// //               ref={(el) => {
// //                 cardsRef.current[i] = el
// //               }}
// //               className={`phase-card phase-card-${phase.accent} ${
// //                 i === 0 ? "featured" : ""
// //               }`}
// //             >
// //               <div className="phase-card-glow" />

// //               <div className="phase-top">
// //                 <span>{phase.id}</span>
// //                 <span>{phase.status}</span>
// //               </div>

// //               <h3>{phase.title}</h3>
// //               <p>{phase.text}</p>

// //               <ul>
// //                 {phase.points.map((point) => (
// //                   <li key={point}>{point}</li>
// //                 ))}
// //               </ul>
// //             </article>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // export default SolutionPage


// import { useEffect, useRef, useState } from "react"
// import gsap from "gsap"

// const tabs = [
//   "Fake App Detection",
//   "Ad Network Detection",
//   "Website & RMG Detection",
// ]

// type Phase = {
//   id: string
//   status: string
//   title: string
//   text: string
//   points: string[]
//   accent: string
// }

// type DetectionSection = {
//   heading: string
//   highlight: string
//   description: string
//   phases: Phase[]
// }

// const detectionData: DetectionSection[] = [
//   {
//     heading: "Fake App Detection",
//     highlight: "Phases",
//     description:
//       "A phased intelligence pipeline for identifying fraudulent loan applications, from signature matching to automated ecosystem monitoring.",
//     phases: [
//       {
//         id: "01",
//         status: "Currently Active",
//         title: "Signature Matching",
//         text: "Identifying shared code signatures, permissions, metadata, phone numbers, and distribution behavior across fraudulent loan apps.",
//         points: [
//           "Permission pattern recognition",
//           "Developer metadata correlation",
//           "Ad distribution tracing",
//           "Scam contact intelligence",
//         ],
//         accent: "purple",
//       },
//       {
//         id: "02",
//         status: "Upcoming",
//         title: "Extended Detection",
//         text: "Scaling detection using validated signals discovered in Phase 1 with human-reviewed evidence pipelines.",
//         points: [
//           "Larger app coverage",
//           "Improved clustering",
//           "Human-reviewed evidence",
//         ],
//         accent: "blue",
//       },
//       {
//         id: "03",
//         status: "Upcoming",
//         title: "Automated 1-Click Review",
//         text: "Automated evidence extraction, report creation, and review flows for faster takedown support.",
//         points: [
//           "Auto-generated reports",
//           "Fast review pipeline",
//           "Low manual dependency",
//         ],
//         accent: "green",
//       },
//       {
//         id: "04",
//         status: "Future",
//         title: "Ecosystem Protection",
//         text: "Continuous monitoring of app stores, social media, ads, and emerging distribution channels.",
//         points: [
//           "Always-on monitoring",
//           "Variant detection",
//           "Threat intelligence",
//         ],
//         accent: "pink",
//       },
//     ],
//   },
//   {
//     heading: "Intermediary Ad Network",
//     highlight: "Detection",
//     description:
//       "A detection engine that discovers malicious ads, scores risk, and packages evidence for takedown workflows.",
//     phases: [
//       {
//         id: "01",
//         status: "Completed",
//         title: "Keyword-Based Ad Scraping",
//         text: "Target keywords are used to discover ads across major platforms, including short-lived and evasive campaigns.",
//         points: [
//           "Google Ads discovery",
//           "Meta Ads Library scraping",
//           "Short-lived campaign capture",
//           "Keyword-driven investigation",
//         ],
//         accent: "purple",
//       },
//       {
//         id: "02",
//         status: "Completed",
//         title: "Safety Scoring",
//         text: "Each ad is classified and assigned a safety score using known scam patterns and campaign behavior.",
//         points: [
//           "Risk-based scoring",
//           "Scam pattern matching",
//           "Ad category classification",
//         ],
//         accent: "blue",
//       },
//       {
//         id: "03",
//         status: "Currently Active",
//         title: "Evidence Dashboard",
//         text: "Classified ads are displayed with searchable evidence packages for investigation and takedown requests.",
//         points: [
//           "Interactive dashboard",
//           "LEA-ready evidence",
//           "Ad timeline tracking",
//           "Report exports",
//         ],
//         accent: "green",
//       },
//       {
//         id: "04",
//         status: "Future",
//         title: "Real-Time Monitoring",
//         text: "Continuous monitoring for new malicious campaign variants with instant alerts and investigation trails.",
//         points: [
//           "Real-time monitoring",
//           "Instant threat alerts",
//           "Campaign variant detection",
//         ],
//         accent: "pink",
//       },
//     ],
//   },
//   {
//     heading: "Banned Website and RMG",
//     highlight: "Detection",
//     description:
//       "A discovery and classification engine for banned websites, real-money gaming platforms, and evasive web mirrors.",
//     phases: [
//       {
//         id: "01",
//         status: "Currently Active",
//         title: "Seed URL Scanning",
//         text: "Starting from seed URLs or keywords, the engine checks whether a website belongs to a banned or suspicious category.",
//         points: [
//           "Seed URL input",
//           "Keyword scanning",
//           "Banned category matching",
//           "Suspect site collection",
//         ],
//         accent: "purple",
//       },
//       {
//         id: "02",
//         status: "Planned",
//         title: "Recursive Discovery",
//         text: "The system expands discovery through search engines, Telegram links, redirects, and connected web infrastructure.",
//         points: [
//           "Search engine discovery",
//           "Telegram link discovery",
//           "Unindexed site detection",
//         ],
//         accent: "blue",
//       },
//       {
//         id: "03",
//         status: "Planned",
//         title: "ML Classification",
//         text: "Collected data points are processed through ML models to cluster sites by operator, content, and infrastructure similarity.",
//         points: [
//           "ML-based classification",
//           "Operator clustering",
//           "Infrastructure similarity",
//         ],
//         accent: "green",
//       },
//       {
//         id: "04",
//         status: "Future",
//         title: "Automated Takedown Evidence",
//         text: "Structured evidence packages are generated for takedown support with monitoring for re-emergence.",
//         points: [
//           "Section 69A support",
//           "Actionable LEA reports",
//           "Re-emergence monitoring",
//         ],
//         accent: "pink",
//       },
//     ],
//   },
// ]

// function SolutionPage() {
//   const [activeTab, setActiveTab] = useState(0)
//   const [activePhase, setActivePhase] = useState(0)

//   const sectionRef = useRef<HTMLElement | null>(null)
//   const cardsRef = useRef<(HTMLElement | null)[]>([])
//   const nodesRef = useRef<(HTMLDivElement | null)[]>([])
//   const lineRef = useRef<HTMLDivElement | null>(null)
//   const progressRef = useRef<HTMLDivElement | null>(null)
//   const pulseRef = useRef<HTMLDivElement | null>(null)
//   const timelineRef = useRef<gsap.core.Timeline | null>(null)

//   const activeSection = detectionData[activeTab]

//   useEffect(() => {
//     setActivePhase(0)
//     cardsRef.current = []
//     nodesRef.current = []
//   }, [activeTab])

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const cards = cardsRef.current.filter(Boolean) as HTMLElement[]
//       const nodes = nodesRef.current.filter(Boolean) as HTMLDivElement[]

//       if (!cards.length || !nodes.length) return

//       const progress =
//         nodes.length <= 1 ? 0 : (activePhase / (nodes.length - 1)) * 100

//       cards.forEach((card, index) => {
//         card.classList.toggle("featured", index === activePhase)

//         gsap.to(card, {
//           opacity: index === activePhase ? 1 : 0.38,
//           scale: index === activePhase ? 1 : 0.94,
//           y: index === activePhase ? 0 : 18,
//           filter: index === activePhase ? "blur(0px)" : "blur(1.2px)",
//           duration: 0.55,
//           ease: "power3.out",
//         })
//       })

//       nodes.forEach((node, index) => {
//         node.classList.toggle("active", index === activePhase)

//         gsap.to(node, {
//           scale: index === activePhase ? 1.45 : 0.75,
//           opacity: index === activePhase ? 1 : 0.35,
//           duration: 0.45,
//           ease: index === activePhase ? "back.out(2)" : "power3.out",
//         })
//       })

//       gsap.to(progressRef.current, {
//         width: `${progress}%`,
//         duration: 0.65,
//         ease: "power3.inOut",
//       })

//       gsap.to(pulseRef.current, {
//         left: `${progress}%`,
//         duration: 0.65,
//         ease: "power3.inOut",
//       })
//     }, sectionRef)

//     return () => ctx.revert()
//   }, [activePhase, activeTab])

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const cards = cardsRef.current.filter(Boolean) as HTMLElement[]

//       gsap.fromTo(
//         ".solution-tabs, .solution-title, .solution-desc",
//         { opacity: 0, y: 18 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.65,
//           stagger: 0.08,
//           ease: "power3.out",
//         }
//       )

//       gsap.fromTo(
//         lineRef.current,
//         { scaleX: 0, transformOrigin: "left center" },
//         {
//           scaleX: 1,
//           duration: 0.9,
//           ease: "power3.out",
//         }
//       )

//       gsap.fromTo(
//         cards,
//         { opacity: 0, y: 34, scale: 0.92 },
//         {
//           opacity: (i) => (i === 0 ? 1 : 0.38),
//           y: (i) => (i === 0 ? 0 : 18),
//           scale: (i) => (i === 0 ? 1 : 0.94),
//           duration: 0.75,
//           stagger: 0.08,
//           ease: "power4.out",
//         }
//       )
//     }, sectionRef)

//     return () => ctx.revert()
//   }, [activeTab])

//   useEffect(() => {
//     timelineRef.current?.kill()

//     const tl = gsap.timeline({
//       repeat: -1,
//       repeatDelay: 0.4,
//     })

//     activeSection.phases.forEach((_, index) => {
//       tl.call(() => {
//         setActivePhase(index)
//       }, [], index === 0 ? 0 : "+=2.7")
//     })

//     timelineRef.current = tl

//     return () => {
//       tl.kill()
//     }
//   }, [activeTab, activeSection.phases])

//   const handleTabClick = (index: number) => {
//     if (index === activeTab) return
//     setActiveTab(index)
//   }

//   const handlePhaseHover = (index: number) => {
//     timelineRef.current?.pause()
//     setActivePhase(index)
//   }

//   const handleMouseLeave = () => {
//     timelineRef.current?.resume()
//   }

//   return (
//     <section ref={sectionRef} className="solution-page" id="solution-page">
//       <div className="solution-container">
//         <div className="solution-tabs" role="tablist" aria-label="Detection categories">
//           {tabs.map((tab, index) => (
//             <button
//               key={tab}
//               type="button"
//               onClick={() => handleTabClick(index)}
//               className={`solution-tab ${activeTab === index ? "active" : ""}`}
//               aria-selected={activeTab === index}
//             >
//               <span>{String(index + 1).padStart(2, "0")}</span>
//               {tab}
//             </button>
//           ))}
//         </div>

//         <div className="solution-heading-row">
//           <h2 className="solution-title">
//             {activeSection.heading} <span>{activeSection.highlight}</span>
//           </h2>

//           <p className="solution-desc">{activeSection.description}</p>
//         </div>

//         <div className="solution-timeline">
//           <div ref={lineRef} className="timeline-line" />
//           <div ref={progressRef} className="timeline-progress" />
//           <div ref={pulseRef} className="timeline-pulse" />

//           {activeSection.phases.map((phase, index) => (
//             <button
//               key={`${activeTab}-node-${phase.id}`}
//               type="button"
//               className="timeline-node-wrap"
//               onClick={() => setActivePhase(index)}
//               aria-label={`Go to ${phase.title}`}
//             >
//               <div
//                 ref={(el) => {
//                   nodesRef.current[index] = el
//                 }}
//                 className={`timeline-node ${index === activePhase ? "active" : ""}`}
//               />
//             </button>
//           ))}
//         </div>

//         <div className="solution-cards" onMouseLeave={handleMouseLeave}>
//           {activeSection.phases.map((phase, index) => (
//             <article
//               key={`${activeTab}-${phase.id}`}
//               ref={(el) => {
//                 cardsRef.current[index] = el
//               }}
//               onMouseEnter={() => handlePhaseHover(index)}
//               className={`phase-card phase-card-${phase.accent} ${
//                 index === activePhase ? "featured" : ""
//               }`}
//             >
//               <div className="phase-card-glow" />

//               <div className="phase-top">
//                 <span className="phase-id">{phase.id}</span>
//                 <span className="phase-status">{phase.status}</span>
//               </div>

//               <h3>{phase.title}</h3>
//               <p>{phase.text}</p>

//               <ul>
//                 {phase.points.map((point) => (
//                   <li key={point}>{point}</li>
//                 ))}
//               </ul>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default SolutionPage


'use client'

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

const tabs = [
  "Fake App Detection",
  "Ad Network Detection",
  "Website & RMG Detection",
]

const detectionData = [
  {
    heading: "Fake App Detection",
    highlight: "Phases",
    description:
      "Our systematic approach to identifying and combating fraudulent loan applications, from signature matching to fully automated ecosystem protection.",
    phases: [
      {
        id: "01",
        status: "Currently Active",
        title: "Signature Matching",
        text: "Identifying shared code signatures, permissions, metadata, phone numbers, and distribution behavior across fraudulent loan apps.",
        points: [
          "Permission pattern recognition",
          "Developer metadata correlation",
          "Ad distribution tracing",
          "Scam contact intelligence",
        ],
        accent: "purple",
      },
      {
        id: "02",
        status: "Upcoming",
        title: "Extended Detection",
        text: "Scaling detection using validated signals discovered in Phase 1 with human-reviewed evidence pipelines.",
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
        title: "Automated 1-Click Review",
        text: "Automated evidence extraction, report creation, and review flows for faster takedown support.",
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
        text: "Continuous monitoring of app stores, social media, ads, and emerging distribution channels.",
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
      "Intermediary ad networks allow malicious ads to operate. We detect, classify, and generate takedown evidence.",
    phases: [
      {
        id: "01",
        status: "Completed",
        title: "Keyword-Based Ad Scraping",
        text: "Scrapes ads from major platforms using target keywords.",
        points: [
          "Google Ads discovery",
          "Meta Ads Library scraping",
          "Short-lived campaigns",
        ],
        accent: "purple",
      },
      {
        id: "02",
        status: "Completed",
        title: "Safety Scoring",
        text: "Each ad is classified and assigned a risk score.",
        points: [
          "Risk scoring",
          "Pattern matching",
          "Classification",
        ],
        accent: "blue",
      },
      {
        id: "03",
        status: "Currently Active",
        title: "Dashboard & Evidence",
        text: "All ads are tracked with evidence packages.",
        points: [
          "Dashboard UI",
          "Exportable reports",
          "Tracking system",
        ],
        accent: "green",
      },
      {
        id: "04",
        status: "Future",
        title: "Real-Time Monitoring",
        text: "Continuous detection of malicious campaigns.",
        points: [
          "Live monitoring",
          "Instant alerts",
          "Campaign detection",
        ],
        accent: "pink",
      },
    ],
  },

  {
    heading: "Banned Website & RMG",
    highlight: "Detection",
    description:
      "Detection system for banned websites and real-money gaming platforms evading regulation.",
    phases: [
      {
        id: "01",
        status: "Currently Active",
        title: "Seed URL Scanning",
        text: "Analyze sites based on seed URLs or keywords.",
        points: [
          "Keyword scanning",
          "Category matching",
          "Site analysis",
        ],
        accent: "purple",
      },
      {
        id: "02",
        status: "Planned",
        title: "Recursive Discovery",
        text: "Find related sites via search + Telegram.",
        points: [
          "Search engine crawling",
          "Telegram tracking",
          "Link discovery",
        ],
        accent: "blue",
      },
      {
        id: "03",
        status: "Planned",
        title: "ML Clustering",
        text: "Cluster sites using ML similarity models.",
        points: [
          "Operator clustering",
          "Infra similarity",
          "Content matching",
        ],
        accent: "green",
      },
      {
        id: "04",
        status: "Future",
        title: "Automated Takedown",
        text: "Generate takedown-ready evidence.",
        points: [
          "LEA reports",
          "Section 69A support",
          "Monitoring",
        ],
        accent: "pink",
      },
    ],
  },
]

function SolutionPage() {
  const [activeTab, setActiveTab] = useState(0)
  const [activePhase, setActivePhase] = useState(0)

  const cardsRef = useRef<(HTMLElement | null)[]>([])
  const timelineRef = useRef<gsap.core.Timeline | null>(null)

  const activeSection = detectionData[activeTab]

  // RESET ON TAB CHANGE
  useEffect(() => {
    setActivePhase(0)
    cardsRef.current = []
  }, [activeTab])

  // CARD ANIMATION
  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean) as HTMLElement[]

    cards.forEach((card, i) => {
      gsap.to(card, {
        opacity: i === activePhase ? 1 : 0.35,
        scale: i === activePhase ? 1 : 0.94,
        y: i === activePhase ? 0 : 18,
        duration: 0.5,
        ease: "power3.out",
      })
    })
  }, [activePhase])

  // AUTO CYCLE
  useEffect(() => {
    timelineRef.current?.kill()

    const tl = gsap.timeline({ repeat: -1 })

    activeSection.phases.forEach((_, i) => {
      tl.call(() => setActivePhase(i), [], i === 0 ? 0 : "+=2.6")
    })

    timelineRef.current = tl

    return () => {
      tl.kill()
    }
  }, [activeTab, activeSection.phases])

  const handleHover = (i: number) => {
    timelineRef.current?.pause()
    setActivePhase(i)
  }

  const handleLeave = () => {
    timelineRef.current?.resume()
  }

  return (
    <section className="solution-page" id="library">
      <div className="solution-container">

        {/* TABS */}
        <div className="solution-tabs">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`solution-tab ${activeTab === i ? "active" : ""}`}
            >
              <span>{String(i + 1).padStart(2, "0")}</span>
              {tab}
            </button>
          ))}
        </div>

        {/* TITLE */}
        <h2 className="solution-title">
          {activeSection.heading} <span>{activeSection.highlight}</span>
        </h2>

        <p className="solution-desc">{activeSection.description}</p>

        {/* 🔥 GLOW LINE */}
        <div className="solution-timeline">
          <div className="timeline-line" />
          <div className="timeline-loading-glow" />
        </div>

        {/* CARDS */}
        <div className="solution-cards" onMouseLeave={handleLeave}>
          {activeSection.phases.map((phase, i) => (
            <article
              key={phase.id}
              ref={(el) => (cardsRef.current[i] = el)}
              onMouseEnter={() => handleHover(i)}
              className={`phase-card phase-card-${phase.accent} ${
                i === activePhase ? "featured" : ""
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