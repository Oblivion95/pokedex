import Image from "next/image";
import dynamic from "next/dynamic";
import { Spacer, Text, useTheme } from "@nextui-org/react";

const MyLink = dynamic(() => import("core/components/link"), { ssr: false });

const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "start",
        padding: "0 20px",
        backgroundColor: theme?.colors?.gray200.value,
      }}
    >
      <MyLink href="/">
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
          alt="app icon"
          width={70}
          height={70}
        />
        <Text color="white" h2>
          P
        </Text>
        <Text color="white">okemon</Text>
      </MyLink>
      <Spacer style={{ flex: 1 }} />
      <MyLink href="/favorites">
        <Text color="white">Favoritos</Text>
      </MyLink>
    </div>
  );
};

export default Navbar;
