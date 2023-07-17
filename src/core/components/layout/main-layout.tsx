import Head from "next/head";
import { PropsWithChildren } from "react";
import Navbar from "../navbar";

type Props = PropsWithChildren<{ title?: string; pokemon?: string }>;

const MainLayout = ({ children, title = "", pokemon }: Props) => (
  <>
    <Head>
      <title>{title || 'Pokemon App'}{title}</title>
      <meta
        name="description"
        content={
          pokemon
            ? `información del pokemon ${pokemon}`
            : "Vista principal pokedex"
        }
      />
      <meta name="keywords" content="pokemon, pokedex" />
    </Head>
    <Navbar />
    <main>{children}</main>
  </>
);

export default MainLayout;
