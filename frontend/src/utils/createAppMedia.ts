import { createMedia } from "@artsy/fresnel";

const AppMedia = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    laptop: 1024,
    desktop: 1280,
  }
});

export const { Media, MediaContextProvider } = AppMedia;