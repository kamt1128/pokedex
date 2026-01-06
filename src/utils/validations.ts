export const validatePokemonName = (name: string): boolean => {
  const regex = /^[a-zA-Z]{3,}$/;
  return regex.test(name);
};
