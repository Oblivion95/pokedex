import { Card, Container, Grid, Text } from "@nextui-org/react";
import MainLayout from "core/components/layout/main-layout";
import { pokemonArray } from "core/utils";
import Image from "next/image";
import { useState } from "react";

const Favorites = () => {
  const [favorites, setFavorites] = useState(pokemonArray());

  console.log(favorites.constructor.name === "Array");

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
        <Grid.Container gap={2} direction="row" justify="flex-start">
          {favorites?.map?.((id) => (
            <>
              <Grid xs={6} sm={4} md={3} xl={2} key={id}>
                <Card
                  isHoverable
                  css={{
                    padding: "10px",
                  }}
                >
                  <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                    alt="No Favorites"
                    width={250}
                    height={250}
                  />
                </Card>
              </Grid>
            </>
          ))}
        </Grid.Container>
      )}
    </MainLayout>
  );
};

export default Favorites;
