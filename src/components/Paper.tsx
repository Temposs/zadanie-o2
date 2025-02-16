import { useTheme } from "styled-components";

export function Paper({
  children,
  style,
}: React.PropsWithChildren & { style?: React.CSSProperties }) {
  const { color, dimension } = useTheme();

  return (
    <div
      style={{
        background: color.surface["x-low"],
        border: "solid",
        borderWidth: 1,
        borderColor: "#B8B8B8",
        borderRadius: dimension.radius.input,
        padding: dimension.l,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
