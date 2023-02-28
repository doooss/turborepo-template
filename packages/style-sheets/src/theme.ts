const colors = {
  red: {
    100: 'rgb(255, 237, 235)',
    200: 'rgb(255, 210, 204)',
    300: 'rgb(255, 156, 143)',
    400: 'rgb(248, 116, 98)',
    500: 'rgb(239, 92, 72)',
    600: 'rgb(227, 73, 53)',
    700: 'rgb(202, 53, 33)',
    800: 'rgb(174, 42, 25)',
    900: 'rgb(96, 30, 22)',
    1000: 'rgb(57, 24, 19)',
  },
  blue: {
    100: 'rgb(233, 242, 255)',
    200: 'rgb(204, 224, 255)',
    300: 'rgb(133, 184, 255)',
    400: 'rgb(87, 157, 255)',
    500: 'rgb(56, 139, 255)',
    600: 'rgb(29, 122, 252)',
    700: 'rgb(12, 102, 228)',
    800: 'rgb(0, 85, 204)',
    900: 'rgb(9, 50, 108)',
    1000: 'rgb(8, 33, 69)',
  },
  orange: {
    100: 'rgb(255, 244, 229)',
    200: 'rgb(255, 226, 189)',
    300: 'rgb(254, 197, 123)',
    400: 'rgb(250, 165, 61)',
    500: 'rgb(241, 141, 19)',
    600: 'rgb(217, 112, 8)',
    700: 'rgb(182, 92, 2)',
    800: 'rgb(151, 79, 12)',
    900: 'rgb(95, 56, 17)',
    1000: 'rgb(67, 41, 15)',
  },
  yellow: {
    100: 'rgb(255, 247, 214)',
    200: 'rgb(248, 230, 160)',
    300: 'rgb(245, 205, 71)',
    400: 'rgb(226, 178, 3)',
    500: 'rgb(207, 159, 2)',
    600: 'rgb(179, 134, 0)',
    700: 'rgb(148, 111, 0)',
    800: 'rgb(127, 95, 1)',
    900: 'rgb(83, 63, 4)',
    1000: 'rgb(61, 46, 0)',
  },
  green: {
    100: 'rgb(223, 252, 240)',
    200: 'rgb(186, 243, 219)',
    300: 'rgb(126, 226, 184)',
    400: 'rgb(75, 206, 151)',
    500: 'rgb(42, 187, 127)',
    600: 'rgb(34, 160, 107)',
    700: 'rgb(31, 132, 90)',
    800: 'rgb(33, 110, 78)',
    900: 'rgb(22, 75, 53)',
    1000: 'rgb(19, 53, 39)',
  },
  teal: {
    100: 'rgb(227, 250, 252)',
    200: 'rgb(193, 240, 245)',
    300: 'rgb(139, 219, 229)',
    400: 'rgb(96, 198, 210)',
    500: 'rgb(55, 180, 195)',
    600: 'rgb(29, 154, 170)',
    700: 'rgb(29, 127, 140)',
    800: 'rgb(32, 107, 116)',
    900: 'rgb(29, 71, 76)',
    1000: 'rgb(21, 51, 55)',
  },
  purple: {
    100: 'rgb(243, 240, 255)',
    200: 'rgb(223, 216, 253)',
    300: 'rgb(184, 172, 246)',
    400: 'rgb(159, 143, 239)',
    500: 'rgb(143, 126, 231)',
    600: 'rgb(130, 112, 219)',
    700: 'rgb(110, 93, 198)',
    800: 'rgb(94, 77, 178)',
    900: 'rgb(53, 44, 99)',
    1000: 'rgb(35, 28, 63)',
  },
  magenta: {
    100: 'rgb(255, 236, 248)',
    200: 'rgb(253, 208, 236)',
    300: 'rgb(247, 151, 210)',
    400: 'rgb(231, 116, 187)',
    500: 'rgb(218, 98, 172)',
    600: 'rgb(205, 81, 157)',
    700: 'rgb(174, 71, 135)',
    800: 'rgb(148, 61, 115)',
    900: 'rgb(80, 37, 63)',
    1000: 'rgb(52, 24, 41)',
  },
  netural: {
    0: 'rgb(255, 255, 255)',
    100: 'rgb(247, 248, 249)',
    200: 'rgb(241, 242, 244)',
    300: 'rgb(220, 223, 228)',
    400: 'rgb(179, 185, 196)',
    500: 'rgb(133, 144, 162)',
    600: 'rgb(117, 129, 149)',
    700: 'rgb(98, 111, 134)',
    800: 'rgb(68, 84, 111)',
    900: 'rgb(44, 62, 93)',
    1000: 'rgb(23, 43, 77)',
    1100: 'rgb(0,0,0)',
  },
  'dark-neutral': {
    0: 'rgb(22, 26, 29)',
    100: 'rgb(29, 33, 37)',
    200: 'rgb(34, 39, 43)',
    300: 'rgb(44, 51, 58)',
    400: 'rgb(69, 79, 89)',
    500: 'rgb(89, 103, 115)',
    600: 'rgb(115, 132, 150)',
    700: 'rgb(134, 150, 167)',
    800: 'rgb(159, 173, 188)',
    900: 'rgb(182, 194, 207)',
    1000: 'rgb(199, 209, 219)',
    1100: 'rgb(222, 228, 234)',
  },
};

export type Color = keyof typeof colors;
export type ColorVariant =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 1000;
export type NeutralVariant = ColorVariant | 0 | 1100;

export type BaseSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type FontWeight = 'light' | 'normal' | 'bold' | 'extrabold';
export type FontFamily = 'sans';
export type IconSize = BaseSize;
export type IconPadding = BaseSize;
export type BorderRadius = BaseSize | 'none' | 'full';

const font = {
  size: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
  },
  weight: {
    light: '300',
    normal: '400',
    bold: '700',
    extrabold: '800',
  },
  family: {
    sans: "system-ui, -apple-system, 'Noto Sans KR', 'Open Sans', 'Malgun Gothic', 'Segoe UI', Dotum, Helvetica, Arial, sans-serif",
  },
} as const;

const icon = {
  size: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
  },
  padding: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
  },
} as const;

const borderRadius = {
  none: '0',
  xs: '0.125rem',
  sm: '0.25rem',
  md: '0.5rem',
  lg: '1rem',
  xl: '2rem',
  full: '9999px',
} as const;

const transition = {
  duration: {
    fast: '0.2s',
    normal: '0.3s',
    slow: '0.5s',
  },
} as const;

const spacing = new Array(201).fill(0).map((_, i) => i * 0.25 + 'rem');

export const theme = {
  font,
  icon,
  transition,
  borderRadius,
  colors,
  spacing,
};

export type CustomTheme = typeof theme;
