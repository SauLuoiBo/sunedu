import { Layout } from "../containers";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyle from "../styles/global";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../lib/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme.light}>
        <CssBaseline />
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
