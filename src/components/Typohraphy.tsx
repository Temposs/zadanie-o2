import { useCallback } from "react";
import { useTheme } from "styled-components";
type Label_props = React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>;
type Paragraph_props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

type Typography_props =
  | ({
      variant: "label-s" | "label-m";
      style?: React.CSSProperties;
    } & Label_props)
  | ({
      variant: "body-m";
      style?: React.CSSProperties;
    } & Paragraph_props);

export function Typography(props: React.PropsWithChildren & Typography_props) {
  const {
    font: { body, label },
  } = useTheme();

  const get_typography = useCallback(() => {
    switch (props.variant) {
      case "label-s":
        return (
          <label
            {...(props as Label_props)}
            style={{
              ...label.s,
              ...props.style,
            }}
          >
            {props.children}
          </label>
        );
      case "label-m":
        return (
          <label
            {...(props as Label_props)}
            style={{
              ...label.m,
              ...props.style,
            }}
          >
            {props.children}
          </label>
        );
      case "body-m":
        return (
          <p
            {...(props as Paragraph_props)}
            style={{
              ...body.style.m,
              margin: `${body["paragraph-spacing"]}px 0px`,
              ...props.style,
            }}
          >
            {props.children}
          </p>
        );
    }
  }, [props, body, label]);

  return get_typography();
}
