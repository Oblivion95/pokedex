import Image from "next/image";
import axios_instance from "core/api";
import MainLayout from "core/components/layout/main-layout";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Card, Grid, Text, Button, Container } from "@nextui-org/react";

import confetti from "canvas-confetti";
import toggleLocalStorage, {
  existsInLocalStorage,
} from "core/utils/toggle-local-storage";
import { useState } from "react";

type PokemonProps = {
  id: number | string;
  name: string;
} & {
  pokemon: Pokemon;
};

const Pokemon: NextPage<PokemonProps> = ({ pokemon }) => {
  const [isInFavorite, setIsInFavorite] = useState(
    existsInLocalStorage(pokemon.id)
  );

  const handleOnClick = () => {
    toggleLocalStorage(pokemon.id);
    setIsInFavorite(!isInFavorite);

    if (isInFavorite) return;

    confetti({
      zIndex: 8000,
      particleCount: 100,
      startVelocity: 30,
      spread: 60,
      origin: {
        x: 0.87, y: 0.2
      }
    })
  };

  return (
    <MainLayout title={pokemon.name}>
      <Grid.Container
        css={{
          marginTop: "5px",
          gap: 10,
        }}
      >
        <Grid xs={12} sm={3}>
          <Card
            isHoverable
            css={{
              padding: "30px",
            }}
          >
            <Card.Body>
              <Card.Image
                // @ts-ignore
                src={pokemon.sprites.other?.dream_world.front_default}
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text h1>{pokemon.name}</Text>
              <Button
                color="gradient"
                ghost={!isInFavorite}
                onPress={handleOnClick}
              >
                {`${isInFavorite ? "Guardado" : "Guardar en favoritos"}`}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites: </Text>
              <Container direction="row" display="flex" gap={0}>
                <Image
                  // @ts-ignore
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  // @ts-ignore

                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  // @ts-ignore

                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </MainLayout>
  );
};

export default Pokemon;

export const getStaticPaths: GetStaticPaths<any> = async () => {
  const paths = Array.from({ length: 150 }, (_, id) => ({
    params: { id: `${id + 1}` },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  {
    const { data: pokemon } = await axios_instance<Pokemon>(
      `/pokemon/${params.id}`
    );

    return {
      props: {
        pokemon,
      },
    };
  }
};
