import { CssBaseline } from '@nextui-org/react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { Children } from 'react';

export default function MyDocument() {
  return (
    <Html lang="en">
      <Head>
        {CssBaseline.flush()}
        <meta name="author" content="Emmanuel Canto Vázquez"/>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export const getInitialProps = async (ctx: DocumentContext) => {
  const initialProps = await Document.getInitialProps(ctx);
  return {
    ...initialProps,
    styles: Children.toArray([initialProps.styles])
  };
}
