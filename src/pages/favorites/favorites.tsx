import { Container, Text } from "@nextui-org/react";
import MainLayout from "core/components/layout/main-layout";
import { pokemonArray } from "core/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import FavoritePokemon from "./favorite-pokemon";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(pokemonArray());
  }, []);

  return (
      <MainLayout>
        {!favorites.length ? (
          <Container
            css={{
              display: "flex",
              flexDirection: "column",
              height: "calc(100vh - 100px)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text h1>No Favorites</Text>
            <Image
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
              alt="No Favorites"
              width={250}
              height={250}
            />
          </Container>
        ) : (
            <FavoritePokemon pokemonList={favorites}/>
        )}
      </MainLayout>
  );
};

export default Favorites;
