import { Layout } from "../containers";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyle from "../styles/global";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme.light}>
			<GlobalStyle />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}

export default MyApp;
