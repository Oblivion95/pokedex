import MainLayout from "core/core/components/layout/main-layout";
import axios_instance from "core/core/api";
import { PropsWithChildren } from "react";
import { Card, Grid, Row, Text } from "@nextui-org/react";

type Pokemon = { name: string; url: string; id: number; image: string };

type HomeProps = PropsWithChildren<{
  pokemonList: Pokemon[];
}>;

export const Home = ({ children, pokemonList }: HomeProps) => {
  console.log(pokemonList);

  return (
    <MainLayout title="Listado de pokemons">
      <Grid.Container gap={2}>
        {pokemonList.map((pokemon) => (
          <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
            <Card isHoverable isPressable>
              <Card.Body css={{ p: 1 }}>
                <Card.Image
                  src={pokemon.image}
                  style={{
                    width: "100%",
                    height: "140px",
                    objectFit: "fill",
                    aspectRatio: "8/9",
                  }}
                />
              </Card.Body>
              <Card.Footer>
                <Row justify="space-between">
                  <Text transform="capitalize">{pokemon.name}</Text>
                  <Text>#{pokemon.id}</Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </MainLayout>
  );
};

export const getStaticProps = async (
  ctx
): Promise<{ props: { pokemonList: Pokemon } }> => {
  console.log("ctx: ", ctx);

  const { data } = await axios_instance.get("/pokemon?limit=151");

  return {
    props: {
      pokemonList: data.results.map((pokemon, i) => ({
        ...pokemon,
        id: i + 1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          i + 1
        }.png`,
      })),
    },
  };
};

export default Home;
