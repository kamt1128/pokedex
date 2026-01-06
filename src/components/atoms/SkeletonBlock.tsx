import "../../styles/skeleton.css";

interface Props {
  width?: string;
  height?: string;
  radius?: string;
  align?: string;
}

export const SkeletonBlock = ({
  width = "100%",
  height = "16px",
  radius = "8px",
  align = "initial",
}: Props) => {
  return (
    <div
      className="skeleton"
      style={{ width, height, borderRadius: radius, alignSelf: align }}
    />
  );
};
