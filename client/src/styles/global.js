import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    transition: all .2s linear;
  }
  *:focus {
  outline: 0;
  outline: none;
  }
  html {
    font-size: 62.5%;
    box-sizing: border-box;
    --color-text: ${(props) => props.theme.colors.text};
    --color-text2: ${(props) => props.theme.colors.text2};
    --color-background: ${(props) => props.theme.colors.background};
    --color-primary: ${(props) => props.theme.colors.primary};
    --color-primary2: ${(props) => props.theme.colors.primary2};
    --color-secondary: ${(props) => props.theme.colors.secondary};
    --color-secondary2: ${(props) => props.theme.colors.secondary2};
    --border-radius: 95% 4% 97% 5%/4% 94% 3% 95%;
    --border-radius-hover: 4% 95% 6% 95%/95% 4% 92% 5%;
    @media ${(props) => props.theme.breakpoints.lg} {
      font-size: 60%;
    }
    @media ${(props) => props.theme.breakpoints.md} {
      font-size: 55%;
    }
  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.6;
    color: ${(props) => props.theme.colors.primary1};
    text-decoration: none;
    /* text-transform: capitalize; */
    transition: all .2s linear;
    /* margin: 0;
    padding: 0; */
    box-sizing: border-box;
    outline: none;
    border: none;

    .container{
      padding: 0 30rem;

      @media ${(props) => props.theme.breakpoints.lg} {
        padding: 0 20rem;
    }
    @media ${(props) => props.theme.breakpoints.md} {
        padding: 0 10rem;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        padding: 0 1rem;
    }
    }
  }
  a, button, img {
    cursor: pointer;
    color: var(--color-main);
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  h1 {
    font-size: 6rem;
    font-weight: bold;
  }
  h2 {
    font-size: 5rem;
    font-weight: bold;
  }
  h3 {
    font-size: 4rem;
    font-weight: bold;
    color: var(--color-background1);
  }
  h4 {
    font-size: 3rem;
    font-weight: bold;
  }
  p {
    font-size: 2rem;
    font-family: ${(props) => props.theme.fonts.main};
    color: var(--color-main);
  }
  li{
    list-style: none;
  }
`;
