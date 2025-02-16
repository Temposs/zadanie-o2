const main_font = "sans-serif";

export const theme = {
  color: {
    surface: {
      "x-high": "#8C8C9A",
      "x-middle": "#424242cc",
      "x-low": "#FFFFFF",
      brand: "#0050FF",
      danger: "#DC2828",
      "danger-variant": "#FFDCDC",
      warning: "#A56315",
      "warning-variant": "#FAF1B6",
    },
    content: {
      "on-neutral": {
        "xx-high": "#2C2C31",
        medium: "#8C8C9A",
        low: "#C9C9CE",
        danger: "#DC2828",
        warning: "#A56315",
      },
    },
    state: {
      default: {
        hover: "#1A1A1A0F",
        focus: "#1A1A1ACC",
      },
    },
  },
  font: {
    label: {
      m: {
        fontFamily: main_font,
        fontSize: 16,
        fontWeight: 500,
        lineHeight: "22px",
        letterSpacing: 0.16,
      } as React.CSSProperties,
      s: {
        fontFamily: main_font,
        fontSize: 14,
        fontWeight: 550,
        lineHeight: "17px",
        letterSpacing: 0.16,
      } as React.CSSProperties,
    },
    body: {
      style: {
        m: {
          fontFamily: main_font,
          fontSize: 16,
          fontWeight: 400,
          lineHeight: "22px",
          letterSpacing: 0.01,
        } as React.CSSProperties,
      },
      "paragraph-spacing": 20,
      "list-spacing": 6,
    },
  },
  dimension: {
    radius: {
      input: 12,
    },
    xs: 8,
    s: 12,
    m: 16,
    l: 20,
  },
} as const;

export type Styled_theme = typeof theme;
