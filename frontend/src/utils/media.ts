export const breakpoints = {
  mobileXl: 410,
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
}

export const media = {
  mobileXl: `@media (min-width: ${breakpoints.mobileXl}px)`,
  tablet: `@media (min-width: ${breakpoints.tablet}px)`,
  laptop: `@media(min-width: ${breakpoints.laptop}px)`,
  desktop: `@media (min-width: ${breakpoints.desktop}px)`,
}