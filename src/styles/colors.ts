// styles/colors.ts

import {
  gray,
  blue,
  red,
  green,
  grayDark,
  blueDark,
  redDark,
  greenDark,
  indigo,
  indigoDark,
} from "@radix-ui/colors"

export type Colors = typeof colors.light & typeof colors.dark

export const colors = {
  light: {
    ...indigo,
    ...gray,
    ...blue,
    ...red,
    ...green,

    // Bổ sung các màu từ CSS
    purple: "#6f42c1",
    pink: "#e83e8c",
    orange: "#fd7e14",
    yellow: "#ffc107",
    teal: "#20c997",
    cyan: "#17a2b8",
    white: "#fff",
    grayDark: "#343a40",

    primary: "#007bff",
    secondary: "#6c757d",
    success: "#28a745",
    info: "#17a2b8",
    warning: "#ffc107",
    danger: "#dc3545",
    light: "#f8f9fa",
    dark: "#343a40",
  },

  dark: {
    ...indigoDark,
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,

    // Bổ sung các màu từ CSS (cho dark theme)
    purple: "#6f42c1",
    pink: "#e83e8c",
    orange: "#fd7e14",
    yellow: "#ffc107",
    teal: "#20c997",
    cyan: "#17a2b8",
    white: "#fff",
    grayDark: "#343a40",

    primary: "#007bff",
    secondary: "#6c757d",
    success: "#28a745",
    info: "#17a2b8",
    warning: "#ffc107",
    danger: "#dc3545",
    light: "#f8f9fa",
    dark: "#343a40",
  },
}
