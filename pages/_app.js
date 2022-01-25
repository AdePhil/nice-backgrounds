import { ThemeProvider } from "emotion-theming";
import Fonts from "../components/fonts";
import GlobalStyles from "../lib/globalstyles";
import theme from "../lib/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Fonts />
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
