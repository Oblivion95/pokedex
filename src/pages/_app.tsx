import { NextUIProvider } from "@nextui-org/react";
// import "core/styles/globals.css";
import type { AppProps } from "next/app";
import { darkTheme } from "core/styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
