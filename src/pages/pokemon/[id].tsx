import axios_instance from "core/api";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

type PokemonProps = {
  id: number | string;
  name: string;
};

export const Pokemon: NextPage<PokemonProps> = ({ id, name }) => {
  const router = useRouter();

  console.log(router.isFallback)

  return <h1>Page</h1>;
};

export default Pokemon;

export const getStaticPaths: GetStaticPaths<any> = async () => {
  const paths = Array.from({ length: 151 }, (_, id) => ({ params: { id: `${id}` } }));

  return {
    paths,
    fallback: false,
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {{
  const data = await axios_instance(`/pokemon/${params.id}`);

  return {
    props: {
      name: 'BUlbasaur',
      id: 1
    },
  };
}};
