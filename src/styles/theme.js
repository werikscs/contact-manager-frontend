export const theme = {
  color: {
    green1: "rgba(0, 255, 154, 1)",
    blue1: "#3D5A80",
    blue1_75: "rgba(55, 82, 116, 0.75)",
    blue1_50: "rgba(55, 82, 116, 0.5)",
    blue2: "#98C1D9",
    blue2_dark: "rgb(106, 166, 200)",
    blue2_50: "rgba(152, 193, 217, 0.5)",
    blue2_75: "rgba(152, 193, 217, 0.75)",
    blue3: "#E0FBFC",
    orange1: "#EE6C4D",
    orange1_dark: "rgb(234, 72, 31)",
    black1: "#293241",
    black1_50: "rgba(41, 50, 65, .5)",
    black1_75: "rgba(41, 50, 65, .75)",
    white1: "#ffffff",
    bg_app: "#e0e0e0",
  },
  font: "Inter, sans-serif",
  borderRadius: {
    general: "1rem",
  },
  size: {
    width: "inherit",
    minWidth: "360px",
    maxWidth: "400px",
    minWidthDivider: "360px",
    maxWidthDivider: "400px",
  },
};

export const themeMainPages = {
  borderRadius: {
    general: "0 0 0.5rem 0.5rem",
  },
  size: {
    width: "100%",
    maxWidth: "100%",
    minWidthDivider: theme.size.minWidth,
    maxWidthDivider: theme.size.maxWidth,
  },
};
