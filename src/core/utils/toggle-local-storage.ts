const toggleLocalStorage = (id: number) => {
  if (typeof window === "undefined") return;

  let pokemonIdArray = JSON.parse(localStorage.getItem("pokemonIdArray") ?? '[]');

  if (pokemonIdArray.includes(id)) {
    pokemonIdArray = pokemonIdArray.filter((pokemonId: number) => pokemonId !== id);
  } else {
    pokemonIdArray.push(id);
  }

  localStorage.setItem("pokemonIdArray", JSON.stringify(pokemonIdArray));
};

const existsInLocalStorage = (id: number) => {
  if (typeof window === "undefined") return false;

  const pokemonIdArray = JSON.parse(localStorage.getItem("pokemonIdArray") ?? '[]');

  return pokemonIdArray.includes(id);
};

const pokemonArray = () => {
  if (typeof window === "undefined") return false;

  return JSON.parse(localStorage.getItem("pokemonIdArray") ?? '[]');
}

export default toggleLocalStorage;

export { existsInLocalStorage, toggleLocalStorage, pokemonArray }
