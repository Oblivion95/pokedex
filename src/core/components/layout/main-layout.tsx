"use client";

import Head from "next/head";
import { PropsWithChildren } from "react";
import Navbar from "../navbar";

type Props = PropsWithChildren<{ title?: string; pokemon?: string }>;

const MainLayout = ({ children, title = "", pokemon }: Props) => {

  const location = typeof window === "undefined" ? "" : window.location.origin;

  console.log(location)

  return (
  <>
    <Head>
      <title>
        {title || "Pokemon App"}
        {title}
      </title>
      <meta
        name="description"
        content={
          pokemon
            ? `información del pokemon ${pokemon}`
            : "Vista principal pokedex"
        }
      />
      <meta name="keywords" content="pokemon, pokedex" />
      <meta
        property="og:title"
        content={`Informació sobre el pokemon ${pokemon}`}
      />
      <meta
        property="og:description"
        content="Get from SEO newbie to SEO pro in 8 simple steps."
      />
      <meta
        property="og:image"
        content={`${location}/img/banner.png`}
      />
    </Head>
    <Navbar />
    <main>{children}</main>
  </>
)};

export default MainLayout;
