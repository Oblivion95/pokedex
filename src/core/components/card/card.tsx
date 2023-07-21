import { Card as NuiCard, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";

type CardProps = {
  pokemon: Pokemon;
};

const Card = ({ pokemon }: CardProps) => {
  const { push } = useRouter();

  const onClick = () => push(`/pokemon/${pokemon.id}`);

  return (
    <NuiCard isHoverable isPressable onClick={onClick}>
      <NuiCard.Body css={{ p: 1 }}>
        <NuiCard.Image
          src={pokemon.image}
          style={{
            width: "100%",
            height: "140px",
            objectFit: "fill",
            aspectRatio: "8/9",
          }}
        />
      </NuiCard.Body>
      <NuiCard.Footer>
        <Row justify="space-between">
          <Text transform="capitalize">{pokemon.name}</Text>
          <Text>#{pokemon.id}</Text>
        </Row>
      </NuiCard.Footer>
    </NuiCard>
  );
};

export default Card;
