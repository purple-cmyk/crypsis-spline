export const scrollToSection = (sectionId: string, extraOffset: number = 0) => {
  const element = document.getElementById(sectionId)
  if (!element) return

  const navbar = document.querySelector(".navbar") as HTMLElement | null
  const navbarHeight = navbar?.offsetHeight ?? 0

  const elementPosition = element.getBoundingClientRect().top + window.scrollY

  const finalPosition = elementPosition - navbarHeight - extraOffset

  window.scrollTo({
    top: finalPosition,
    behavior: "smooth",
  })
}