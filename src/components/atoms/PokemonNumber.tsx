type Props = {
  id: number;
};

export const PokemonNumber = ({ id }: Props) => {
  return <label>#{id.toString().padStart(3, "0")}</label>;
};
