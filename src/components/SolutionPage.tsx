// // import { useEffect, useMemo, useRef, useState } from "react"
// // import gsap from "gsap"

// // type Step = {
// //   id: string
// //   status: string
// //   title: string
// //   desc: string
// //   points?: string[]
// // }

// // type Workflow = {
// //   key: string
// //   tab: string
// //   kicker: string
// //   title: string
// //   accent: string
// //   desc: string
// //   steps: Step[]
// // }

// // const workflows: Workflow[] = [
// //   {
// //     key: "fake-apps",
// //     tab: "Fake App Detection",
// //     kicker: "Fraud App Pipeline",
// //     title: "Fake App Detection Phases",
// //     accent: "Signature → Automation → Protection",
// //     desc: "Our systematic approach to identifying and combating fraudulent loan applications — from signature matching to fully automated detection.",
// //     steps: [
// //       {
// //         id: "01",
// //         status: "Currently Active",
// //         title: "Signature Matching",
// //         desc: "Identifying common code signatures, patterns, and identifiers shared across fraudulent loan apps to establish a detection baseline for I4C.",
// //         points: [
// //           "Permission pattern recognition",
// //           "Developer metadata correlation",
// //           "Detection via ad distribution mechanisms",
// //           "Scam phone number & contact tracing",
// //         ],
// //       },
// //       {
// //         id: "02",
// //         status: "Upcoming",
// //         title: "Extended Detection",
// //         desc: "Scaling our detection capabilities to identify more fraudulent apps using the signatures discovered in Phase 1, with human review for validation and accuracy.",
// //       },
// //       {
// //         id: "03",
// //         status: "Upcoming",
// //         title: "Automated 1-Click Review",
// //         desc: "Fully automated pipeline — one-click review and evidence extraction. No human intervention required for standard detections.",
// //       },
// //       {
// //         id: "04",
// //         status: "Future",
// //         title: "Ecosystem Protection",
// //         desc: "Proactive defence — continuous monitoring of app stores and social media for new scam app variants before they reach victims.",
// //       },
// //     ],
// //   },
// //   {
// //     key: "ads",
// //     tab: "Ad Network Detection",
// //     kicker: "Ad Threat Intelligence",
// //     title: "Intermediary Ad Network Detection",
// //     accent: "Scrape → Score → Package → Monitor",
// //     desc: "Intermediary ad networks have become a partner in crime by letting malicious and fake ads run on their platforms. Our system scrapes, classifies, and packages evidence for takedown.",
// //     steps: [
// //       {
// //         id: "01",
// //         status: "Completed",
// //         title: "Keyword-Based Ad Scraping",
// //         desc: "Users input target keywords. The system scrapes major ad networks (Google Ads, Meta Ads Library, etc.) to discover ads matching those keywords — including short-lived campaigns that vanish quickly.",
// //       },
// //       {
// //         id: "02",
// //         status: "Completed",
// //         title: "Safety Scoring & Classification",
// //         desc: "Each scraped ad is run through a classification engine and assigned a safety score. Ads are categorized by risk level and linked to known scam patterns.",
// //       },
// //       {
// //         id: "03",
// //         status: "Currently Active",
// //         title: "Dashboard & Evidence Packaging",
// //         desc: "Classified ads and their scores are displayed on a searchable dashboard. Complete evidence packages are generated for easy takedown requests.",
// //         points: [
// //           "Interactive results dashboard",
// //           "Evidence packaging for LEA takedowns",
// //           "Ad history & timeline tracking",
// //           "Export reports in standard formats",
// //         ],
// //       },
// //       {
// //         id: "04",
// //         status: "Future",
// //         title: "Real-Time Ad Monitoring",
// //         desc: "Continuous, automated monitoring of ad networks for new malicious campaign variants. Instant alerts when new scam ads are detected matching known patterns.",
// //       },
// //     ],
// //   },
// //   {
// //     key: "websites",
// //     tab: "Website & RMG Detection",
// //     kicker: "Website Surveillance",
// //     title: "Banned Website & RMG Detection",
// //     accent: "Scan → Discover → Cluster → Takedown",
// //     desc: "Our website detection engine scrapes for sites similar to already banned websites — including Real Money Gaming platforms — that could become active any moment or may have escaped takedown orders.",
// //     steps: [
// //       {
// //         id: "01",
// //         status: "Currently Active",
// //         title: "Seed URL & Keyword Scanning",
// //         desc: "Starting from seed URLs or keywords, the engine checks if a website belongs to any banned category using known data points and classification rules.",
// //         points: [
// //           "Seed URL and keyword input system",
// //           "Banned category matching engine",
// //           "Instant classification of known clean URLs",
// //           "Data point collection from suspect sites",
// //         ],
// //       },
// //       {
// //         id: "02",
// //         status: "Planned",
// //         title: "Recursive Discovery",
// //         desc: "Recursively searching across top search engines and Telegram for more linked websites. Discovers unindexed sites and expands detection coverage automatically.",
// //       },
// //       {
// //         id: "03",
// //         status: "Planned",
// //         title: "ML Classification & Clustering",
// //         desc: "All collected data points are fed through ML classification models. Websites are clustered by operator, infrastructure, and content similarity for coordinated takedowns.",
// //       },
// //       {
// //         id: "04",
// //         status: "Future",
// //         title: "Automated Takedown & Evidence",
// //         desc: "Complete evidence packages tuned for Section 69A takedowns, with actionable insights for law enforcement. Continuous monitoring ensures takedown targets don't re-emerge.",
// //       },
// //     ],
// //   },
// // ]

// // function SolutionPage() {
// //   const [activeTab, setActiveTab] = useState(0)
// //   const contentRef = useRef<HTMLDivElement | null>(null)

// //   const current = useMemo(() => workflows[activeTab], [activeTab])

// //   useEffect(() => {
// //     if (!contentRef.current) return

// //     const ctx = gsap.context(() => {
// //       const header = contentRef.current?.querySelector(".pipeline-header")
// //       const accent = contentRef.current?.querySelector(".pipeline-accent")
// //       const beam = contentRef.current?.querySelector(".pipeline-beam")
// //       const glow = contentRef.current?.querySelector(".pipeline-travel-glow")
// //       const cards = gsap.utils.toArray<HTMLElement>(".pipeline-card")
// //       const dots = gsap.utils.toArray<HTMLElement>(".pipeline-dot")
// //       const connectors = gsap.utils.toArray<HTMLElement>(".pipeline-connector-fill")

// //       gsap.set(header, { opacity: 0, y: 20 })
// //       gsap.set(accent, { opacity: 0, y: 12 })
// //       gsap.set(cards, { opacity: 0, y: 30, scale: 0.96 })
// //       gsap.set(dots, { scale: 0.6, opacity: 0.45 })
// //       gsap.set(connectors, { scaleX: 0, transformOrigin: "left center" })
// //       gsap.set(beam, { scaleX: 0, transformOrigin: "left center" })
// //       gsap.set(glow, { x: 0, opacity: 0 })

// //       const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

// //       tl.to(header, {
// //         opacity: 1,
// //         y: 0,
// //         duration: 0.55,
// //       })
// //         .to(
// //           accent,
// //           {
// //             opacity: 1,
// //             y: 0,
// //             duration: 0.45,
// //           },
// //           0.08
// //         )
// //         .to(
// //           beam,
// //           {
// //             scaleX: 1,
// //             duration: 1.2,
// //             ease: "power2.inOut",
// //           },
// //           0.15
// //         )
// //         .to(
// //           glow,
// //           {
// //             opacity: 1,
// //             duration: 0.2,
// //           },
// //           0.22
// //         )
// //         .to(
// //           glow,
// //           {
// //             x: () => {
// //               const rail = contentRef.current?.querySelector(".pipeline-rail")
// //               return rail ? rail.clientWidth - 40 : 900
// //             },
// //             duration: 1.2,
// //             ease: "power2.inOut",
// //           },
// //           0.2
// //         )

// //       cards.forEach((card, index) => {
// //         tl.to(
// //           card,
// //           {
// //             opacity: 1,
// //             y: 0,
// //             scale: 1,
// //             duration: 0.5,
// //           },
// //           0.25 + index * 0.16
// //         )
// //           .to(
// //             dots[index],
// //             {
// //               scale: 1.12,
// //               opacity: 1,
// //               duration: 0.22,
// //               ease: "back.out(2.2)",
// //             },
// //             0.28 + index * 0.16
// //           )
// //           .to(
// //             dots[index],
// //             {
// //               scale: 1,
// //               duration: 0.22,
// //             },
// //             0.43 + index * 0.16
// //           )

// //         if (connectors[index]) {
// //           tl.to(
// //             connectors[index],
// //             {
// //               scaleX: 1,
// //               duration: 0.32,
// //               ease: "power2.out",
// //             },
// //             0.36 + index * 0.16
// //           )
// //         }
// //       })
// //     }, contentRef)

// //     return () => ctx.revert()
// //   }, [activeTab])

// //   return (
// //     <section className="solution-page">
// //       <div className="solution-bg">
// //         <div className="solution-grid-pattern" />
// //         <div className="solution-ambient solution-ambient-1" />
// //         <div className="solution-ambient solution-ambient-2" />
// //         <div className="solution-center-glow" />
// //         <div className="solution-overlay" />
// //       </div>

// //       <div className="solution-header">
// //         <span className="solution-kicker">Detection Systems</span>
// //         <h2>
// //           Crypsis <span>Threat Pipelines</span>
// //         </h2>
// //         <p>
// //           Three operational flows powering fake app detection, malicious ad
// //           analysis, and banned website discovery.
// //         </p>
// //       </div>

// //       <div className="solution-tabs">
// //         {workflows.map((item, index) => (
// //           <button
// //             key={item.key}
// //             type="button"
// //             className={`solution-tab ${activeTab === index ? "active" : ""}`}
// //             onClick={() => setActiveTab(index)}
// //           >
// //             <span className="solution-tab-index">
// //               {String(index + 1).padStart(2, "0")}
// //             </span>
// //             <span>{item.tab}</span>
// //           </button>
// //         ))}
// //       </div>

// //       <div className="pipeline-shell" ref={contentRef}>
// //         <div className="pipeline-header-wrap">
// //           <span className="pipeline-kicker">{current.kicker}</span>
// //           <h3 className="pipeline-header">{current.title}</h3>
// //           <p className="pipeline-accent">{current.accent}</p>
// //           <p className="pipeline-desc">{current.desc}</p>
// //         </div>

// //         <div className="pipeline-rail">
// //           <div className="pipeline-beam-track" />
// //           <div className="pipeline-beam" />
// //           <div className="pipeline-travel-glow" />

// //           {current.steps.map((step, index) => (
// //             <div className="pipeline-stage" key={`${current.key}-${step.id}`}>
// //               <div className="pipeline-stage-top">
// //                 <div className="pipeline-dot-wrap">
// //                   <div className="pipeline-dot-ring" />
// //                   <div className="pipeline-dot" />
// //                 </div>

// //                 {index < current.steps.length - 1 && (
// //                   <div className="pipeline-connector">
// //                     <div className="pipeline-connector-base" />
// //                     <div className="pipeline-connector-fill" />
// //                   </div>
// //                 )}
// //               </div>

// //               <article className="pipeline-card">
// //                 <div className="pipeline-card-noise" />
// //                 <div className="pipeline-card-aura" />
// //                 <div className="pipeline-card-header">
// //                   <span className="pipeline-card-id">{step.id}</span>
// //                   <span
// //                     className={`pipeline-status ${step.status
// //                       .toLowerCase()
// //                       .replaceAll(" ", "-")}`}
// //                   >
// //                     {step.status}
// //                   </span>
// //                 </div>

// //                 <h4>{step.title}</h4>
// //                 <p>{step.desc}</p>

// //                 {step.points?.length ? (
// //                   <ul>
// //                     {step.points.map((point) => (
// //                       <li key={point}>{point}</li>
// //                     ))}
// //                   </ul>
// //                 ) : null}
// //               </article>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // export default SolutionPage



// import { useMemo, useState } from "react"

// type StatusType = "completed" | "active" | "upcoming" | "future"

// type Step = {
//   id: string
//   status: string
//   statusType: StatusType
//   title: string
//   desc: string
//   points?: string[]
// }

// type Workflow = {
//   key: string
//   tab: string
//   kicker: string
//   title: string
//   accent: string
//   desc: string
//   steps: Step[]
// }

// type StatusStyle = {
//   bg: string
//   border: string
//   dot: string
//   text: string
// }

// const workflows: Workflow[] = [
//   {
//     key: "fake-apps",
//     tab: "Fake App Detection",
//     kicker: "Fraud App Pipeline",
//     title: "Fake App Detection Phases",
//     accent: "Signature → Automation → Protection",
//     desc: "Our systematic approach to identifying and combating fraudulent loan applications — from signature matching to fully automated detection.",
//     steps: [
//       {
//         id: "01",
//         status: "Currently Active",
//         statusType: "active",
//         title: "Signature Matching",
//         desc: "Identifying common code signatures, patterns, and identifiers shared across fraudulent loan apps to establish a detection baseline for I4C.",
//         points: [
//           "Permission pattern recognition",
//           "Developer metadata correlation",
//           "Detection via ad distribution mechanisms",
//           "Scam phone number & contact tracing",
//         ],
//       },
//       {
//         id: "02",
//         status: "Upcoming",
//         statusType: "upcoming",
//         title: "Extended Detection",
//         desc: "Scaling our detection capabilities to identify more fraudulent apps using the signatures discovered in Phase 1, with human review for validation and accuracy.",
//       },
//       {
//         id: "03",
//         status: "Upcoming",
//         statusType: "upcoming",
//         title: "Automated 1-Click Review",
//         desc: "Fully automated pipeline — one-click review and evidence extraction. No human intervention required for standard detections.",
//       },
//       {
//         id: "04",
//         status: "Future",
//         statusType: "future",
//         title: "Ecosystem Protection",
//         desc: "Proactive defence — continuous monitoring of app stores and social media for new scam app variants before they reach victims.",
//       },
//     ],
//   },
//   {
//     key: "ads",
//     tab: "Ad Network Detection",
//     kicker: "Ad Threat Intelligence",
//     title: "Intermediary Ad Network Detection",
//     accent: "Scrape → Score → Package → Monitor",
//     desc: "Intermediary ad networks have become a partner in crime by letting malicious and fake ads run on their platforms. Our system scrapes, classifies, and packages evidence for takedown.",
//     steps: [
//       {
//         id: "01",
//         status: "Completed",
//         statusType: "completed",
//         title: "Keyword-Based Ad Scraping",
//         desc: "Users input target keywords. The system scrapes major ad networks (Google Ads, Meta Ads Library, etc.) to discover ads matching those keywords — including short-lived campaigns that vanish quickly.",
//       },
//       {
//         id: "02",
//         status: "Completed",
//         statusType: "completed",
//         title: "Safety Scoring & Classification",
//         desc: "Each scraped ad is run through a classification engine and assigned a safety score. Ads are categorized by risk level and linked to known scam patterns.",
//       },
//       {
//         id: "03",
//         status: "Currently Active",
//         statusType: "active",
//         title: "Dashboard & Evidence Packaging",
//         desc: "Classified ads and their scores are displayed on a searchable dashboard. Complete evidence packages are generated for easy takedown requests.",
//         points: [
//           "Interactive results dashboard",
//           "Evidence packaging for LEA takedowns",
//           "Ad history & timeline tracking",
//           "Export reports in standard formats",
//         ],
//       },
//       {
//         id: "04",
//         status: "Future",
//         statusType: "future",
//         title: "Real-Time Ad Monitoring",
//         desc: "Continuous, automated monitoring of ad networks for new malicious campaign variants. Instant alerts when new scam ads are detected matching known patterns.",
//       },
//     ],
//   },
//   {
//     key: "websites",
//     tab: "Website & RMG Detection",
//     kicker: "Website Surveillance",
//     title: "Banned Website & RMG Detection",
//     accent: "Scan → Discover → Cluster → Takedown",
//     desc: "Our website detection engine scrapes for sites similar to already banned websites — including Real Money Gaming platforms — that could become active any moment.",
//     steps: [
//       {
//         id: "01",
//         status: "Currently Active",
//         statusType: "active",
//         title: "Seed URL & Keyword Scanning",
//         desc: "Starting from seed URLs or keywords, the engine checks if a website belongs to any banned category using known data points and classification rules.",
//         points: [
//           "Seed URL and keyword input system",
//           "Banned category matching engine",
//           "Instant classification of known clean URLs",
//           "Data point collection from suspect sites",
//         ],
//       },
//       {
//         id: "02",
//         status: "Planned",
//         statusType: "upcoming",
//         title: "Recursive Discovery",
//         desc: "Recursively searching across top search engines and Telegram for more linked websites. Discovers unindexed sites and expands detection coverage automatically.",
//       },
//       {
//         id: "03",
//         status: "Planned",
//         statusType: "upcoming",
//         title: "ML Classification & Clustering",
//         desc: "All collected data points are fed through ML classification models. Websites are clustered by operator, infrastructure, and content similarity.",
//       },
//       {
//         id: "04",
//         status: "Future",
//         statusType: "future",
//         title: "Automated Takedown & Evidence",
//         desc: "Complete evidence packages tuned for Section 69A takedowns, with actionable insights for law enforcement. Continuous monitoring ensures takedown targets don't re-emerge.",
//       },
//     ],
//   },
// ]

// const ST: Record<StatusType, StatusStyle> = {
//   completed: {
//     bg: "rgba(34,197,94,0.08)",
//     border: "rgba(34,197,94,0.20)",
//     dot: "#22c55e",
//     text: "#bbf7d0",
//   },
//   active: {
//     bg: "rgba(168,85,247,0.09)",
//     border: "rgba(168,85,247,0.24)",
//     dot: "#a855f7",
//     text: "#e9d5ff",
//   },
//   upcoming: {
//     bg: "rgba(99,102,241,0.07)",
//     border: "rgba(99,102,241,0.18)",
//     dot: "#6366f1",
//     text: "#c7d2fe",
//   },
//   future: {
//     bg: "rgba(148,163,184,0.07)",
//     border: "rgba(148,163,184,0.14)",
//     dot: "#94a3b8",
//     text: "#cbd5e1",
//   },
// }

// export default function SolutionPage() {
//   const [activeTab, setActiveTab] = useState<number>(0)
//   const [animKey, setAnimKey] = useState<number>(0)

//   const current = useMemo<Workflow>(() => workflows[activeTab], [activeTab])

//   const handleTab = (i: number) => {
//     setActiveTab(i)
//     setAnimKey((k) => k + 1)
//   }

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Geist+Mono:wght@300;400;500&display=swap');
//         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

//         .cr-root {
//           font-family: 'Inter', sans-serif;
//           background:
//             radial-gradient(circle at top right, rgba(109,40,217,0.08), transparent 30%),
//             radial-gradient(circle at bottom left, rgba(79,40,180,0.06), transparent 28%),
//             #07080f;
//           min-height: 100vh;
//           color: #e2e8f0;
//           position: relative;
//           overflow: hidden;
//         }

//         .cr-bg { position: absolute; inset: 0; pointer-events: none; z-index: 0; }

//         .cr-bg-grid {
//           position: absolute; inset: 0;
//           background-image:
//             linear-gradient(rgba(99,60,180,0.035) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(99,60,180,0.035) 1px, transparent 1px);
//           background-size: 60px 60px;
//           mask-image: radial-gradient(circle at center, black 55%, transparent 95%);
//         }

//         .cr-glow-a {
//           position: absolute; top: -15%; right: -8%;
//           width: 650px; height: 650px; border-radius: 50%;
//           background: radial-gradient(circle, rgba(109,40,217,0.13) 0%, transparent 65%);
//           filter: blur(10px);
//         }

//         .cr-glow-b {
//           position: absolute; bottom: 5%; left: -12%;
//           width: 480px; height: 480px; border-radius: 50%;
//           background: radial-gradient(circle, rgba(79,40,180,0.08) 0%, transparent 65%);
//           filter: blur(10px);
//         }

//         .cr-inner {
//           position: relative; z-index: 1;
//           max-width: 1200px; margin: 0 auto;
//           padding: 56px 40px 100px;
//         }

//         .cr-tabs {
//           display: flex;
//           gap: 10px;
//           margin-bottom: 42px;
//           flex-wrap: wrap;
//         }

//         .cr-tab {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           padding: 11px 20px;
//           border-radius: 12px;
//           border: 1px solid rgba(255,255,255,0.07);
//           background: rgba(255,255,255,0.025);
//           color: #64748b;
//           font-family: 'Inter', sans-serif;
//           font-size: 13px;
//           font-weight: 600;
//           cursor: pointer;
//           transition: all 0.24s ease;
//           letter-spacing: 0.01em;
//           backdrop-filter: blur(12px);
//         }

//         .cr-tab:hover {
//           border-color: rgba(139,92,246,0.20);
//           background: rgba(139,92,246,0.04);
//           color: #ddd6fe;
//           transform: translateY(-1px);
//         }

//         .cr-tab.active {
//           border-color: rgba(139,92,246,0.28);
//           background: rgba(139,92,246,0.06);
//           color: #f5f3ff;
//           box-shadow: 0 0 16px rgba(139,92,246,0.08);
//         }

//         .cr-tab-num {
//           font-family: 'Geist Mono', monospace;
//           font-size: 10px;
//           opacity: 0.5;
//         }

//         .cr-pipeline {
//           animation: cr-rise 0.4s cubic-bezier(0.22,1,0.36,1) both;
//         }

//         @keyframes cr-rise {
//           from { opacity:0; transform:translateY(18px); }
//           to { opacity:1; transform:translateY(0); }
//         }

//         .cr-pip-meta {
//           display: flex;
//           align-items: flex-start;
//           justify-content: space-between;
//           gap: 28px;
//           margin-bottom: 28px;
//         }

//         .cr-pip-title {
//           font-size: clamp(22px, 2.8vw, 32px);
//           font-weight: 700;
//           color: #f1f5f9;
//           letter-spacing: -0.02em;
//           line-height: 1.15;
//           margin-bottom: 10px;
//         }

//         .cr-pip-desc {
//           font-size: 14px;
//           color: #94a3b8;
//           line-height: 1.7;
//           max-width: 560px;
//         }

//         .cr-rail {
//           display: flex;
//           align-items: center;
//           gap: 0;
//           margin-bottom: 28px;
//           padding: 0 2px;
//         }

//         .cr-rail-node {
//           width: 10px;
//           height: 10px;
//           border-radius: 50%;
//           flex-shrink: 0;
//           background: rgba(139,92,246,0.42);
//           box-shadow: 0 0 8px rgba(139,92,246,0.26);
//           transition: all 0.3s;
//         }

//         .cr-rail-node.dim {
//           background: rgba(255,255,255,0.1);
//           box-shadow: none;
//         }

//         .cr-rail-line {
//           flex: 1;
//           height: 1px;
//           background: linear-gradient(90deg, rgba(139,92,246,0.24), rgba(79,40,180,0.08));
//         }

//         .cr-rail-line.dim {
//           background: rgba(255,255,255,0.05);
//         }

//         .cr-cards {
//           display: grid;
//           grid-template-columns: repeat(4, 1fr);
//           gap: 14px;
//         }

//         @media (max-width: 940px) {
//           .cr-pip-meta {
//             flex-direction: column;
//           }

//           .cr-cards {
//             grid-template-columns: 1fr 1fr;
//           }
//         }

//         @media (max-width: 540px) {
//           .cr-inner {
//             padding: 40px 20px 72px;
//           }

//           .cr-cards {
//             grid-template-columns: 1fr;
//           }

//           .cr-tab {
//             width: 100%;
//             justify-content: flex-start;
//           }

//           .cr-rail {
//             display: none;
//           }
//         }

//         .cr-card {
//           position: relative;
//           border-radius: 18px;
//           border: 1px solid rgba(255,255,255,0.06);
//           background: linear-gradient(145deg, rgba(16,18,32,0.9) 0%, rgba(12,13,24,0.95) 100%);
//           padding: 22px;
//           overflow: hidden;
//           transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
//           animation: cr-card-in 0.5s cubic-bezier(0.22,1,0.36,1) both;
//           display: flex;
//           flex-direction: column;
//           backdrop-filter: blur(16px);
//           min-height: 260px;
//         }

//         .cr-card:nth-child(1) { animation-delay: 0.06s; }
//         .cr-card:nth-child(2) { animation-delay: 0.13s; }
//         .cr-card:nth-child(3) { animation-delay: 0.20s; }
//         .cr-card:nth-child(4) { animation-delay: 0.27s; }

//         @keyframes cr-card-in {
//           from { opacity:0; transform:translateY(14px) scale(0.97); }
//           to { opacity:1; transform:translateY(0) scale(1); }
//         }

//         .cr-card::before {
//           content:'';
//           position:absolute;
//           inset:0;
//           border-radius:inherit;
//           background: radial-gradient(ellipse at 0% 0%, rgba(109,40,217,0.06) 0%, transparent 55%);
//           pointer-events: none;
//         }

//         .cr-card:hover {
//           border-color: rgba(139,92,246,0.18);
//           transform: translateY(-4px);
//           box-shadow: 0 24px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(139,92,246,0.08);
//         }

//         .cr-card.is-active {
//           border-color: rgba(139,92,246,0.16);
//           background: linear-gradient(145deg, rgba(18,16,34,0.95) 0%, rgba(13,12,26,0.98) 100%);
//         }

//         .cr-card.is-active::after {
//           content: '';
//           position: absolute;
//           inset: auto 18px 0 18px;
//           height: 2px;
//           border-radius: 999px;
//           background: linear-gradient(90deg, rgba(168,85,247,0), rgba(168,85,247,0.55), rgba(168,85,247,0));
//         }

//         .cr-card-top {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           margin-bottom: 18px;
//           gap: 10px;
//         }

//         .cr-card-num {
//           font-family: 'Geist Mono', monospace;
//           font-size: 11px;
//           color: rgba(255,255,255,0.22);
//           letter-spacing: 0.08em;
//           background: rgba(255,255,255,0.04);
//           padding: 3px 8px;
//           border-radius: 6px;
//         }

//         .cr-badge {
//           display: flex;
//           align-items: center;
//           gap: 5px;
//           padding: 4px 10px;
//           border-radius: 999px;
//           font-family: 'Geist Mono', monospace;
//           font-size: 9px;
//           font-weight: 500;
//           letter-spacing: 0.1em;
//           text-transform: uppercase;
//         }

//         .cr-badge-dot {
//           width: 5px;
//           height: 5px;
//           border-radius: 50%;
//           flex-shrink: 0;
//         }

//         .cr-card-title {
//           font-size: 15px;
//           font-weight: 700;
//           color: #f1f5f9;
//           line-height: 1.3;
//           margin-bottom: 9px;
//           letter-spacing: -0.01em;
//         }

//         .cr-card-desc {
//           font-size: 13px;
//           color: #94a3b8;
//           line-height: 1.7;
//           font-weight: 400;
//           flex: 1;
//         }

//         .cr-points {
//           list-style: none;
//           margin-top: 16px;
//           padding-top: 14px;
//           border-top: 1px solid rgba(255,255,255,0.05);
//           display: flex;
//           flex-direction: column;
//           gap: 8px;
//         }

//         .cr-point {
//           display: flex;
//           align-items: flex-start;
//           gap: 8px;
//           font-size: 12px;
//           color: #cbd5e1;
//           line-height: 1.5;
//         }

//         .cr-point-dot {
//           width: 5px;
//           height: 5px;
//           border-radius: 50%;
//           background: rgba(168,85,247,0.42);
//           flex-shrink: 0;
//           margin-top: 5px;
//         }
//       `}</style>

//       <div className="cr-root">
//         <div className="cr-bg">
//           <div className="cr-bg-grid" />
//           <div className="cr-glow-a" />
//           <div className="cr-glow-b" />
//         </div>

//         <div className="cr-inner">
//           <div className="cr-tabs">
//             {workflows.map((workflow: Workflow, i: number) => (
//               <button
//                 key={workflow.key}
//                 type="button"
//                 className={`cr-tab${activeTab === i ? " active" : ""}`}
//                 onClick={() => handleTab(i)}
//               >
//                 <span className="cr-tab-num">
//                   {String(i + 1).padStart(2, "0")}
//                 </span>
//                 {workflow.tab}
//               </button>
//             ))}
//           </div>

//           <div className="cr-pipeline" key={animKey}>
//             <div className="cr-pip-meta">
//               <div>
//                 <div className="cr-pip-title">{current.title}</div>
//                 <div className="cr-pip-desc">{current.desc}</div>
//               </div>
//             </div>

//             <div className="cr-rail">
//               {current.steps.map((step: Step, i: number) => {
//                 const lit =
//                   step.statusType === "active" || step.statusType === "completed"

//                 return (
//                   <span key={step.id} style={{ display: "contents" }}>
//                     <div className={`cr-rail-node${lit ? "" : " dim"}`} />
//                     {i < current.steps.length - 1 && (
//                       <div className={`cr-rail-line${lit ? "" : " dim"}`} />
//                     )}
//                   </span>
//                 )
//               })}
//             </div>

//             <div className="cr-cards">
//               {current.steps.map((step: Step) => {
//                 const s = ST[step.statusType]

//                 return (
//                   <div
//                     key={`${current.key}-${step.id}`}
//                     className={`cr-card${step.statusType === "active" ? " is-active" : ""}`}
//                   >
//                     <div className="cr-card-top">
//                       <span className="cr-card-num">{step.id}</span>

//                       <span
//                         className="cr-badge"
//                         style={{
//                           background: s.bg,
//                           border: `1px solid ${s.border}`,
//                           color: s.text,
//                         }}
//                       >
//                         <span
//                           className="cr-badge-dot"
//                           style={{
//                             background: s.dot,
//                             boxShadow: `0 0 5px ${s.dot}`,
//                           }}
//                         />
//                         {step.status}
//                       </span>
//                     </div>

//                     <div className="cr-card-title">{step.title}</div>
//                     <p className="cr-card-desc">{step.desc}</p>

//                     {step.points?.length ? (
//                       <ul className="cr-points">
//                         {step.points.map((point: string) => (
//                           <li className="cr-point" key={point}>
//                             <span className="cr-point-dot" />
//                             {point}
//                           </li>
//                         ))}
//                       </ul>
//                     ) : null}
//                   </div>
//                 )
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }


// const tabs = [
//   "Fake App Detection",
//   "Ad Network Detection",
//   "Website & RMG Detection",
// ]

// const phases = [
//   {
//     id: "01",
//     status: "Currently Active",
//     title: "Signature Matching",
//     text: "Identify shared code signatures, permission patterns, developer metadata, phone numbers, and distribution behavior across fraudulent loan apps.",
//     points: [
//       "Permission pattern recognition",
//       "Developer metadata correlation",
//       "Ad distribution tracing",
//       "Contact and phone number tracking",
//     ],
//     accent: "purple",
//   },
//   {
//     id: "02",
//     status: "Upcoming",
//     title: "Extended Detection",
//     text: "Scale detection using signals discovered in Phase 1, validated with human review for accuracy and evidence quality.",
//     points: ["Larger app coverage", "Improved clustering", "Human-reviewed evidence"],
//     accent: "blue",
//   },
//   {
//     id: "03",
//     status: "Upcoming",
//     title: "Automated 1-Click Review",
//     text: "Automated evidence extraction and risk scoring for standard detections with minimal manual effort.",
//     points: ["Auto-generated reports", "Fast review pipeline", "Low manual dependency"],
//     accent: "green",
//   },
//   {
//     id: "04",
//     status: "Future",
//     title: "Ecosystem Protection",
//     text: "Continuous monitoring of app stores, websites, ads, and social channels to detect scam variants before they spread.",
//     points: ["Always-on monitoring", "Variant detection", "Threat intelligence"],
//     accent: "pink",
//   },
// ]

// function SolutionPage() {
//   return (
//     <section className="solution-page" id="solution">
//       <div className="solution-bg">
//         <div className="solution-grid-pattern" />
//         <div className="solution-orb solution-orb-one" />
//         <div className="solution-orb solution-orb-two" />
//         <div className="solution-orb solution-orb-three" />
//       </div>

//       <div className="solution-container">
//         <div className="solution-tabs">
//           {tabs.map((tab, index) => (
//             <button
//               key={tab}
//               className={`solution-tab ${index === 0 ? "active" : ""}`}
//             >
//               <span>{String(index + 1).padStart(2, "0")}</span>
//               {tab}
//             </button>
//           ))}
//         </div>

//         <div className="solution-hero-row">
//           <div>
//             <p className="solution-kicker">Detection Roadmap</p>
//             <h2>
//               Fake App Detection <span>Phases</span>
//             </h2>
//             <p>
//               A structured fraud-intelligence pipeline that evolves from manual
//               signature matching to fully automated ecosystem protection.
//             </p>
//           </div>

//           <div className="solution-shield">
//             <div className="shield-ring" />
//             <div className="shield-core">✓</div>
//           </div>
//         </div>

//         <div className="solution-timeline">
//           {phases.map((phase, index) => (
//             <div key={phase.id} className="timeline-node-wrap">
//               <div className={`timeline-node ${index === 0 ? "active" : ""}`} />
//             </div>
//           ))}
//         </div>

//         <div className="solution-cards">
//           {phases.map((phase, index) => (
//             <article
//               key={phase.id}
//               className={`phase-card phase-card-${phase.accent} ${
//                 index === 0 ? "featured" : ""
//               }`}
//             >
//               <div className="phase-card-glow" />

//               <div className="phase-top">
//                 <span className="phase-number">{phase.id}</span>
//                 <span className="phase-status">{phase.status}</span>
//               </div>

//               <div className="phase-icon">
//                 {phase.id === "01" && "⌘"}
//                 {phase.id === "02" && "⌕"}
//                 {phase.id === "03" && "⚡"}
//                 {phase.id === "04" && "◆"}
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

//         <div className="solution-bottom-strip">
//           <div>
//             <strong>AI-Powered Detection</strong>
//             <span>Advanced fraud intelligence</span>
//           </div>
//           <div>
//             <strong>Real-time Analysis</strong>
//             <span>Continuous scanning</span>
//           </div>
//           <div>
//             <strong>Privacy Focused</strong>
//             <span>Secure evidence handling</span>
//           </div>
//           <div>
//             <strong>Scalable System</strong>
//             <span>Built for large app ecosystems</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default SolutionPage


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

      // Initial state
      gsap.set(cards, {
        opacity: 0.4,
        scale: 0.92,
        y: 20,
      })

      gsap.set(cards[0], {
        opacity: 1,
        scale: 1.05,
        y: 0,
      })

      gsap.set(nodes, { scale: 0.7, opacity: 0.4 })
      gsap.set(nodes[0], { scale: 1.4, opacity: 1 })

      let active = 0

      const switchCard = (next: number) => {
        const prev = active
        active = next

        // OUT animation
        gsap.to(cards[prev], {
          opacity: 0.3,
          scale: 0.9,
          y: 20,
          duration: 0.6,
          ease: "power3.inOut",
        })

        // IN animation
        gsap.fromTo(
          cards[next],
          {
            opacity: 0,
            scale: 0.9,
            x: 80,
          },
          {
            opacity: 1,
            scale: 1.05,
            x: 0,
            duration: 0.8,
            ease: "power4.out",
          }
        )

        // reset others
        cards.forEach((card, i) => {
          if (i !== next && i !== prev) {
            gsap.to(card, {
              opacity: 0.4,
              scale: 0.92,
              y: 20,
              duration: 0.5,
            })
          }
        })

        // timeline nodes
        gsap.to(nodes, { scale: 0.7, opacity: 0.4, duration: 0.4 })
        gsap.to(nodes[next], {
          scale: 1.4,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(2)",
        })
      }

      // loop animation
      const tl = gsap.timeline({ repeat: -1 })

      phases.forEach((_, i) => {
        if (i === 0) return
        tl.call(() => switchCard(i), [], "+=2.5")
      })

      tl.call(() => switchCard(0), [], "+=2.5")
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
              className={`phase-card phase-card-${phase.accent}`}
            >
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