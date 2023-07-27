import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import { darkTheme } from "core/styles/theme";

const App = ({ Component, pageProps }: AppProps) => (
  <NextUIProvider theme={darkTheme}>
    <Component {...pageProps} />
  </NextUIProvider>
);

export default App;
