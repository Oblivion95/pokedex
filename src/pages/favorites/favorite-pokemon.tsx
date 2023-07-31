import { Card, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";
import React from "react";

const FavoritePokemon = ({ pokemonList }) => {
  const { push } = useRouter();

  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemonList?.map?.(id => (
        <>
          <Grid xs={6} sm={4} md={3} xl={2} key={id}  onClick={() => push(`/pokemon/${id}`)}>
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
  );
};

export default FavoritePokemon;
