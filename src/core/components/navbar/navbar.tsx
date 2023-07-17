import {
  StyledLoadingContainer,
  Text,
  useTheme,
  Spacer,
} from "@nextui-org/react";
import Image from "next/image";

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
        backgroundColor: theme?.colors?.gray900.value ?? "#fff",
      }}
    >
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
      <Spacer style={{ flex: 1 }} />
      <Text color="white">Favoritos</Text>
    </div>
  );
};

export default Navbar;
