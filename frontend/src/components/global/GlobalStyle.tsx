import { createGlobalStyle } from "styled-components";
import { media } from "../../utils/media";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
    font-family: 'Source Sans Pro', arial, sans-serif;
    color: ${props => props.theme.textColor};
  }

  body {
    overflow-x: hidden;
    padding: 0 1.5rem;
    background: ${props => props.theme.pageBackgroundColor};
  }

  ul {
    list-style: none;
  }

  input {
    outline: none;
    background: none;
    border: none;
  }

  button {
    display: block;
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
  }

  a {
    display: block;
    text-decoration: none;
    color: ${props => props.theme.primaryColor};
    ${media.laptop} {
      transition: 0.4s;
      &:hover {
        color: ${props => props.theme.secondaryColor};
      }
    }
  }

  i {
    background: ${props => props.theme.primaryColor};
    background-clip: text;
    background: ${props => `linear-gradient(to bottom, ${props.theme.primaryColor} 0%, ${props.theme.secondaryColor} 100%)`};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  img {
    display: block;
    max-width: 100%;
  }

  @font-face {
    font-family: "FontAwesome";
    src: url('/fonts/fontello/fontello.eot');
    src: url('/fonts/fontello/fontello.eot#iefix') format('embedded-opentype'),
    url('/fonts/fontello/fontello.woff2') format('woff2'),
    url('/fonts/fontello/fontello.woff') format('woff'),
    url('/fonts/fontello/fontello.ttf') format('truetype'),
    url('/fonts/fontello/fontello.svg#fontello') format('svg');
    font-display: swap;
  }

  [class^="StyledIcons"]::before, [class*="StyledIcons"]::before {
  font-family: "FontAwesome";
  font-style: normal;
  font-weight: normal;
  }
`;