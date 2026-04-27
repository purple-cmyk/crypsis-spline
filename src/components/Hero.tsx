// import { useState, useEffect, useRef } from 'react'

// function Hero() {
//   const [shouldLoadSpline, setShouldLoadSpline] = useState(false)
//   const [isInView, setIsInView] = useState(false)
//   const triggerRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const mediaReduce = window.matchMedia('(prefers-reduced-motion: reduce)')
//     const mediaMobile = window.matchMedia('(max-width: 900px)')

//     if (mediaReduce.matches || mediaMobile.matches) {
//       setShouldLoadSpline(false)
//       return
//     }

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsInView(true)
//           observer.disconnect()
//         }
//       },
//       {
//         threshold: 0.2,
//         rootMargin: '150px',
//       }
//     )

//     if (triggerRef.current) {
//       observer.observe(triggerRef.current)
//     }

//     return () => observer.disconnect()
//   }, [])

//   useEffect(() => {
//     if (!isInView) return

//     let cancelled = false

//     const loadWhenIdle = () => {
//       if (!cancelled) {
//         setShouldLoadSpline(true)
//       }
//     }

//     if ('requestIdleCallback' in window) {
//       const id = window.requestIdleCallback(loadWhenIdle, { timeout: 1200 })
//       return () => {
//         cancelled = true
//         window.cancelIdleCallback(id)
//       }
//     } else {
//       const timeout = window.setTimeout(loadWhenIdle, 500)
//       return () => {
//         cancelled = true
//         clearTimeout(timeout)
//       }
//     }
//   }, [isInView])

//   return (
//     <main className="hero" id="home">
//       <div className="hero-dotfield" />
//       <div className="hero-vignette" />
//       <div className="hero-noise" />
//       <div className="hero-purple-haze" />

//       <div className="hero-inner">
//         <div className="hero-left">
//           <h1 className="hero-title">
//             Saving
//             <br />
//             India
//             <br />
//             From
//             <br />
//             CyberFrauds
//           </h1>

//           <div className="hero-badge">
//             #CSGC2.0 | Crypsis — 1st Runner-Up, Cyber Security Grand Challenge 2.0
//           </div>

//           <div className="hero-tags">
//             <span>SECURITY</span>
//             <span>\</span>
//             <span>TRINETR-I</span>
//             <span>\</span>
//             <span>SOLUTIONS</span>
//             <span>\</span>
//             <span>DEKUSION AI</span>
//           </div>
//         </div>

//         <div className="hero-right">
//           <p className="hero-copy">
//             Crypsis is an end-to-end platform tackling the fake and clone app ecosystem,
//             serving government agencies and enterprises facing brand impersonation.
//           </p>

//           <div className="hero-actions">
//             <button className="hero-btn hero-btn-secondary">Contact Us</button>
//             <button className="hero-btn hero-btn-primary">Get Started</button>
//           </div>
//         </div>
//       </div>

//       <div className="hero-spline-wrap" aria-hidden="true" ref={triggerRef}>
//         <div className="hero-spline-glow" />

//         {shouldLoadSpline ? (
//           <iframe
//             className="hero-spline"
//             src="https://my.spline.design/noisyglasscube-Osr20WHifvjZjIjBVQgIjS5H/"
//             frameBorder="0"
//             title="Noisy Glass Cube"
//             loading="lazy"
//           />
//         ) : (
//           <div className="hero-cube-fallback">
//             <div className="hero-cube-fallback-inner" />
//           </div>
//         )}

//         <div className="spline-badge-mask" />
//       </div>
//     </main>
//   )
// }

// export default Hero


'use client'

import { useState, useEffect, useRef } from 'react'
import Spline from '@splinetool/react-spline'

function Hero() {
  const [shouldLoadSpline, setShouldLoadSpline] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const triggerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mediaReduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    const mediaMobile = window.matchMedia('(max-width: 900px)')

    if (mediaReduce.matches || mediaMobile.matches) {
      setShouldLoadSpline(false)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.2,
        rootMargin: '150px',
      }
    )

    if (triggerRef.current) {
      observer.observe(triggerRef.current)
    }

    return () => observer.disconnect()
  }, [])

useEffect(() => {
  if (!isInView) return

  let cancelled = false

  const loadWhenIdle = () => {
    if (!cancelled) {
      setShouldLoadSpline(true)
    }
  }

  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    const id = window.requestIdleCallback(loadWhenIdle, { timeout: 1200 })

    return () => {
      cancelled = true
      window.cancelIdleCallback(id)
    }
  }

  const timeout = setTimeout(loadWhenIdle, 500)

  return () => {
    cancelled = true
    clearTimeout(timeout)
  }
}, [isInView])

  return (
    <main className="hero" id="home">
      <div className="hero-dotfield" />
      <div className="hero-vignette" />
      <div className="hero-noise" />
      <div className="hero-purple-haze" />

      <div className="hero-inner">
        <div className="hero-left">
          <h1 className="hero-title">
            Saving
            <br />
            India
            <br />
            From
            <br />
            CyberFrauds
          </h1>

<div className="hero-award-bar">
  <div className="hero-award-logo-wrap">
    <img
      src="/Ministry_of_Electronics_and_Information_Technology.svg"
      alt="MeitY"
    />
  </div>

  <span className="hero-award-text">
    <strong>Crypsis</strong> secured <strong>1st Runner-Up</strong> at the
    <span className="highlight"> Cyber Security Grand Challenge 2.0</span>
  </span>

  <div className="hero-award-logo-wrap">
    <img src="/dsci.svg" alt="DSCI" />
  </div>
</div>

          <div className="hero-tags">
            <span>SECURITY</span>
            <span>\</span>
            <span>TRINETR-I</span>
            <span>\</span>
            <span>SOLUTIONS</span>
            <span>\</span>
            <span>DEKUSION AI</span>
          </div>
        </div>

        <div className="hero-right">
          <p className="hero-copy">
            Crypsis is an end-to-end platform tackling the fake and clone app ecosystem,
            serving government agencies and enterprises facing brand impersonation.
          </p>

          <div className="hero-actions">
            <button className="hero-btn hero-btn-secondary">Contact Us</button>
            <button className="hero-btn hero-btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <div className="hero-spline-wrap" aria-hidden="true" ref={triggerRef}>
        <div className="hero-spline-glow" />

        {shouldLoadSpline ? (
          <div className="hero-spline">
            <Spline scene="https://prod.spline.design/1FWHZLGrrs5PnzWy/scene.splinecode" />
          </div>
        ) : (
          <div className="hero-cube-fallback">
            <div className="hero-cube-fallback-inner" />
          </div>
        )}

      </div>
    </main>
  )
}

export default Hero