import MainLayout from "core/components/layout/main-layout";
import axiosInstance from "core/api";
import { PropsWithChildren } from "react";
import { Grid } from "@nextui-org/react";
import Card from 'core/components/card/'

type HomeProps = PropsWithChildren<{
  pokemonList: Pokemon[];
}>;

export const Home = ({ pokemonList }: HomeProps) => {
  return (
    <MainLayout title="Listado de pokemons">
      <Grid.Container gap={2}>
        {pokemonList?.map((pokemon) => (
          <Grid xs={6} sm={4} md={3} xl={2} key={pokemon.id}>
            <Card pokemon={pokemon}/>
          </Grid>
        ))}
      </Grid.Container>
    </MainLayout>
  );
};

export const getStaticProps = async (
  ctx
): Promise<{ props: { pokemonList: Pokemon } }> => {
  const { data } = await axiosInstance.get("/pokemon?limit=151");

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
