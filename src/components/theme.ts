import { Theme, createTheme } from '@mui/material/styles';


declare module '@mui/material/styles' {
    interface Palette {
        surfaceTint: string;
        onPrimary: string;
        primaryContainer: string;
        onPrimaryContainer: string;
        onSecondary: string;
        secondaryContainer: string;
        onSecondaryContainer: string;
        tertiary: string;
        onTertiary: string;
        tertiaryContainer: string;
        onTertiaryContainer: string;
        onError: string;
        errorContainer: string;
        onErrorContainer: string;
        onBackground: string;
        surface: string;
        onSurface: string;
        surfaceVariant: string;
        onSurfaceVariant: string;
        outline: string;
        outlineVariant: string;
        shadow: string;
        scrim: string;
        inverseSurface: string;
        inverseOnSurface: string;
        inversePrimary: string;
        primaryFixed: string;
        onPrimaryFixed: string;
        primaryFixedDim: string;
        onPrimaryFixedVariant: string;
        secondaryFixed: string;
        onSecondaryFixed: string;
        secondaryFixedDim: string;
        onSecondaryFixedVariant: string;
        tertiaryFixed: string;
        onTertiaryFixed: string;
        tertiaryFixedDim: string;
        onTertiaryFixedVariant: string;
        surfaceDim: string;
        surfaceBright: string;
        surfaceContainerLowest: string;
        surfaceContainerLow: string;
        surfaceContainer: string;
        surfaceContainerHigh: string;
        surfaceContainerHighest: string;
    }
    // Allow configuration for the palette used in the theme
    interface PaletteOptions {
        surfaceTint: string;
        onPrimary: string;
        primaryContainer: string;
        onPrimaryContainer: string;
        onSecondary: string;
        secondaryContainer: string;
        onSecondaryContainer: string;
        tertiary: string;
        onTertiary: string;
        tertiaryContainer: string;
        onTertiaryContainer: string;
        onError: string;
        errorContainer: string;
        onErrorContainer: string;
        onBackground: string;
        surface: string;
        onSurface: string;
        surfaceVariant: string;
        onSurfaceVariant: string;
        outline: string;
        outlineVariant: string;
        shadow: string;
        scrim: string;
        inverseSurface: string;
        inverseOnSurface: string;
        inversePrimary: string;
        primaryFixed: string;
        onPrimaryFixed: string;
        primaryFixedDim: string;
        onPrimaryFixedVariant: string;
        secondaryFixed: string;
        onSecondaryFixed: string;
        secondaryFixedDim: string;
        onSecondaryFixedVariant: string;
        tertiaryFixed: string;
        onTertiaryFixed: string;
        tertiaryFixedDim: string;
        onTertiaryFixedVariant: string;
        surfaceDim: string;
        surfaceBright: string;
        surfaceContainerLowest: string;
        surfaceContainerLow: string;
        surfaceContainer: string;
        surfaceContainerHigh: string;
        surfaceContainerHighest: string;
    }
}

type ThemeMap = {
    [key: 'light' | 'light-medium-contrast' | 'light-high-contrast' | 'dark' | 'dark-medium-contrast' | 'dark-high-contrast' | string]: MaterialColorTheme;
}

type MaterialColorPaletteMap = {
    [key: 'primary' | 'secondary' | 'tertiary' | 'error' | string]: MaterialColorPalette;
}

interface SourceMaterialTheme {
    schemes: ThemeMap;
    palettes: MaterialColorPaletteMap;
}

interface MaterialColorPalette {
    0: string;
    5: string;
    10: string;
    15: string;
    20: string;
    25: string;
    30: string;
    35: string;
    40: string;
    50: string;
    60: string;
    70: string;
    80: string;
    90: string;
    95: string;
    98: string;
    99: string;
    100: string;
}

interface MaterialColorTheme {
    primary: string;
    surfaceTint: string;
    onPrimary: string;
    primaryContainer: string;
    onPrimaryContainer: string;
    secondary: string;
    onSecondary: string;
    secondaryContainer: string;
    onSecondaryContainer: string;
    tertiary: string;
    onTertiary: string;
    tertiaryContainer: string;
    onTertiaryContainer: string;
    error: string;
    onError: string;
    errorContainer: string;
    onErrorContainer: string;
    background: string;
    onBackground: string;
    surface: string;
    onSurface: string;
    surfaceVariant: string;
    onSurfaceVariant: string;
    outline: string;
    outlineVariant: string;
    shadow: string;
    scrim: string;
    inverseSurface: string;
    inverseOnSurface: string;
    inversePrimary: string;
    primaryFixed: string;
    onPrimaryFixed: string;
    primaryFixedDim: string;
    onPrimaryFixedVariant: string;
    secondaryFixed: string;
    onSecondaryFixed: string;
    secondaryFixedDim: string;
    onSecondaryFixedVariant: string;
    tertiaryFixed: string;
    onTertiaryFixed: string;
    tertiaryFixedDim: string;
    onTertiaryFixedVariant: string;
    surfaceDim: string;
    surfaceBright: string;
    surfaceContainerLowest: string;
    surfaceContainerLow: string;
    surfaceContainer: string;
    surfaceContainerHigh: string;
    surfaceContainerHighest: string;
}

// The actual color themes that we will use for this application
const themeSource: SourceMaterialTheme = {
    schemes: {
        "light": {
            "primary": "#8D4E2A",
            "surfaceTint": "#8D4E2A",
            "onPrimary": "#FFFFFF",
            "primaryContainer": "#FFDBCA",
            "onPrimaryContainer": "#331100",
            "secondary": "#765848",
            "onSecondary": "#FFFFFF",
            "secondaryContainer": "#FFDBCA",
            "onSecondaryContainer": "#2B160A",
            "tertiary": "#646032",
            "onTertiary": "#FFFFFF",
            "tertiaryContainer": "#EBE5AA",
            "onTertiaryContainer": "#1E1C00",
            "error": "#BA1A1A",
            "onError": "#FFFFFF",
            "errorContainer": "#FFDAD6",
            "onErrorContainer": "#410002",
            "background": "#FFF8F6",
            "onBackground": "#221A15",
            "surface": "#FFF8F6",
            "onSurface": "#221A15",
            "surfaceVariant": "#F4DED4",
            "onSurfaceVariant": "#52443D",
            "outline": "#85746B",
            "outlineVariant": "#D7C2B9",
            "shadow": "#000000",
            "scrim": "#000000",
            "inverseSurface": "#382E29",
            "inverseOnSurface": "#FFEDE6",
            "inversePrimary": "#FFB68F",
            "primaryFixed": "#FFDBCA",
            "onPrimaryFixed": "#331100",
            "primaryFixedDim": "#FFB68F",
            "onPrimaryFixedVariant": "#703715",
            "secondaryFixed": "#FFDBCA",
            "onSecondaryFixed": "#2B160A",
            "secondaryFixedDim": "#E6BEAB",
            "onSecondaryFixedVariant": "#5C4132",
            "tertiaryFixed": "#EBE5AA",
            "onTertiaryFixed": "#1E1C00",
            "tertiaryFixedDim": "#CEC891",
            "onTertiaryFixedVariant": "#4B481D",
            "surfaceDim": "#E8D7CF",
            "surfaceBright": "#FFF8F6",
            "surfaceContainerLowest": "#FFFFFF",
            "surfaceContainerLow": "#FFF1EB",
            "surfaceContainer": "#FCEAE3",
            "surfaceContainerHigh": "#F6E5DD",
            "surfaceContainerHighest": "#F0DFD8"
        },
        "light-medium-contrast": {
            "primary": "#6B3411",
            "surfaceTint": "#8D4E2A",
            "onPrimary": "#FFFFFF",
            "primaryContainer": "#A7643D",
            "onPrimaryContainer": "#FFFFFF",
            "secondary": "#583D2E",
            "onSecondary": "#FFFFFF",
            "secondaryContainer": "#8E6E5D",
            "onSecondaryContainer": "#FFFFFF",
            "tertiary": "#474419",
            "onTertiary": "#FFFFFF",
            "tertiaryContainer": "#7A7646",
            "onTertiaryContainer": "#FFFFFF",
            "error": "#8C0009",
            "onError": "#FFFFFF",
            "errorContainer": "#DA342E",
            "onErrorContainer": "#FFFFFF",
            "background": "#FFF8F6",
            "onBackground": "#221A15",
            "surface": "#FFF8F6",
            "onSurface": "#221A15",
            "surfaceVariant": "#F4DED4",
            "onSurfaceVariant": "#4E4039",
            "outline": "#6C5C54",
            "outlineVariant": "#89776F",
            "shadow": "#000000",
            "scrim": "#000000",
            "inverseSurface": "#382E29",
            "inverseOnSurface": "#FFEDE6",
            "inversePrimary": "#FFB68F",
            "primaryFixed": "#A7643D",
            "onPrimaryFixed": "#FFFFFF",
            "primaryFixedDim": "#8A4C27",
            "onPrimaryFixedVariant": "#FFFFFF",
            "secondaryFixed": "#8E6E5D",
            "onSecondaryFixed": "#FFFFFF",
            "secondaryFixedDim": "#735546",
            "onSecondaryFixedVariant": "#FFFFFF",
            "tertiaryFixed": "#7A7646",
            "onTertiaryFixed": "#FFFFFF",
            "tertiaryFixedDim": "#615D30",
            "onTertiaryFixedVariant": "#FFFFFF",
            "surfaceDim": "#E8D7CF",
            "surfaceBright": "#FFF8F6",
            "surfaceContainerLowest": "#FFFFFF",
            "surfaceContainerLow": "#FFF1EB",
            "surfaceContainer": "#FCEAE3",
            "surfaceContainerHigh": "#F6E5DD",
            "surfaceContainerHighest": "#F0DFD8"
        },
        "light-high-contrast": {
            "primary": "#3E1600",
            "surfaceTint": "#8D4E2A",
            "onPrimary": "#FFFFFF",
            "primaryContainer": "#6B3411",
            "onPrimaryContainer": "#FFFFFF",
            "secondary": "#331D10",
            "onSecondary": "#FFFFFF",
            "secondaryContainer": "#583D2E",
            "onSecondaryContainer": "#FFFFFF",
            "tertiary": "#262300",
            "onTertiary": "#FFFFFF",
            "tertiaryContainer": "#474419",
            "onTertiaryContainer": "#FFFFFF",
            "error": "#4E0002",
            "onError": "#FFFFFF",
            "errorContainer": "#8C0009",
            "onErrorContainer": "#FFFFFF",
            "background": "#FFF8F6",
            "onBackground": "#221A15",
            "surface": "#FFF8F6",
            "onSurface": "#000000",
            "surfaceVariant": "#F4DED4",
            "onSurfaceVariant": "#2D211B",
            "outline": "#4E4039",
            "outlineVariant": "#4E4039",
            "shadow": "#000000",
            "scrim": "#000000",
            "inverseSurface": "#382E29",
            "inverseOnSurface": "#FFFFFF",
            "inversePrimary": "#FFE7DD",
            "primaryFixed": "#6B3411",
            "onPrimaryFixed": "#FFFFFF",
            "primaryFixedDim": "#4E1E00",
            "onPrimaryFixedVariant": "#FFFFFF",
            "secondaryFixed": "#583D2E",
            "onSecondaryFixed": "#FFFFFF",
            "secondaryFixedDim": "#3F271A",
            "onSecondaryFixedVariant": "#FFFFFF",
            "tertiaryFixed": "#474419",
            "onTertiaryFixed": "#FFFFFF",
            "tertiaryFixedDim": "#302E05",
            "onTertiaryFixedVariant": "#FFFFFF",
            "surfaceDim": "#E8D7CF",
            "surfaceBright": "#FFF8F6",
            "surfaceContainerLowest": "#FFFFFF",
            "surfaceContainerLow": "#FFF1EB",
            "surfaceContainer": "#FCEAE3",
            "surfaceContainerHigh": "#F6E5DD",
            "surfaceContainerHighest": "#F0DFD8"
        },
        "dark": {
            "primary": "#FFB68F",
            "surfaceTint": "#FFB68F",
            "onPrimary": "#532201",
            "primaryContainer": "#703715",
            "onPrimaryContainer": "#FFDBCA",
            "secondary": "#E6BEAB",
            "onSecondary": "#432B1D",
            "secondaryContainer": "#5C4132",
            "onSecondaryContainer": "#FFDBCA",
            "tertiary": "#CEC891",
            "onTertiary": "#343108",
            "tertiaryContainer": "#4B481D",
            "onTertiaryContainer": "#EBE5AA",
            "error": "#FFB4AB",
            "onError": "#690005",
            "errorContainer": "#93000A",
            "onErrorContainer": "#FFDAD6",
            "background": "#1A120D",
            "onBackground": "#F0DFD8",
            "surface": "#1A120D",
            "onSurface": "#F0DFD8",
            "surfaceVariant": "#52443D",
            "onSurfaceVariant": "#D7C2B9",
            "outline": "#9F8D84",
            "outlineVariant": "#52443D",
            "shadow": "#000000",
            "scrim": "#000000",
            "inverseSurface": "#F0DFD8",
            "inverseOnSurface": "#382E29",
            "inversePrimary": "#8D4E2A",
            "primaryFixed": "#FFDBCA",
            "onPrimaryFixed": "#331100",
            "primaryFixedDim": "#FFB68F",
            "onPrimaryFixedVariant": "#703715",
            "secondaryFixed": "#FFDBCA",
            "onSecondaryFixed": "#2B160A",
            "secondaryFixedDim": "#E6BEAB",
            "onSecondaryFixedVariant": "#5C4132",
            "tertiaryFixed": "#EBE5AA",
            "onTertiaryFixed": "#1E1C00",
            "tertiaryFixedDim": "#CEC891",
            "onTertiaryFixedVariant": "#4B481D",
            "surfaceDim": "#1A120D",
            "surfaceBright": "#413732",
            "surfaceContainerLowest": "#140C09",
            "surfaceContainerLow": "#221A15",
            "surfaceContainer": "#271E19",
            "surfaceContainerHigh": "#322823",
            "surfaceContainerHighest": "#3D332E"
        },
        "dark-medium-contrast": {
            "primary": "#FFBC99",
            "surfaceTint": "#FFB68F",
            "onPrimary": "#2B0D00",
            "primaryContainer": "#C87F56",
            "onPrimaryContainer": "#000000",
            "secondary": "#EAC2AF",
            "onSecondary": "#251106",
            "secondaryContainer": "#AC8978",
            "onSecondaryContainer": "#000000",
            "tertiary": "#D2CD95",
            "onTertiary": "#191700",
            "tertiaryContainer": "#97925F",
            "onTertiaryContainer": "#000000",
            "error": "#FFBAB1",
            "onError": "#370001",
            "errorContainer": "#FF5449",
            "onErrorContainer": "#000000",
            "background": "#1A120D",
            "onBackground": "#F0DFD8",
            "surface": "#1A120D",
            "onSurface": "#FFFAF8",
            "surfaceVariant": "#52443D",
            "onSurfaceVariant": "#DCC6BD",
            "outline": "#B29F96",
            "outlineVariant": "#917F77",
            "shadow": "#000000",
            "scrim": "#000000",
            "inverseSurface": "#F0DFD8",
            "inverseOnSurface": "#322823",
            "inversePrimary": "#713816",
            "primaryFixed": "#FFDBCA",
            "onPrimaryFixed": "#230A00",
            "primaryFixedDim": "#FFB68F",
            "onPrimaryFixedVariant": "#5B2705",
            "secondaryFixed": "#FFDBCA",
            "onSecondaryFixed": "#1F0C03",
            "secondaryFixedDim": "#E6BEAB",
            "onSecondaryFixedVariant": "#4A3023",
            "tertiaryFixed": "#EBE5AA",
            "onTertiaryFixed": "#131200",
            "tertiaryFixedDim": "#CEC891",
            "onTertiaryFixedVariant": "#3A370D",
            "surfaceDim": "#1A120D",
            "surfaceBright": "#413732",
            "surfaceContainerLowest": "#140C09",
            "surfaceContainerLow": "#221A15",
            "surfaceContainer": "#271E19",
            "surfaceContainerHigh": "#322823",
            "surfaceContainerHighest": "#3D332E"
        },
        "dark-high-contrast": {
            "primary": "#FFFAF8",
            "surfaceTint": "#FFB68F",
            "onPrimary": "#000000",
            "primaryContainer": "#FFBC99",
            "onPrimaryContainer": "#000000",
            "secondary": "#FFFAF8",
            "onSecondary": "#000000",
            "secondaryContainer": "#EAC2AF",
            "onSecondaryContainer": "#000000",
            "tertiary": "#FFFAEF",
            "onTertiary": "#000000",
            "tertiaryContainer": "#D2CD95",
            "onTertiaryContainer": "#000000",
            "error": "#FFF9F9",
            "onError": "#000000",
            "errorContainer": "#FFBAB1",
            "onErrorContainer": "#000000",
            "background": "#1A120D",
            "onBackground": "#F0DFD8",
            "surface": "#1A120D",
            "onSurface": "#FFFFFF",
            "surfaceVariant": "#52443D",
            "onSurfaceVariant": "#FFFAF8",
            "outline": "#DCC6BD",
            "outlineVariant": "#DCC6BD",
            "shadow": "#000000",
            "scrim": "#000000",
            "inverseSurface": "#F0DFD8",
            "inverseOnSurface": "#000000",
            "inversePrimary": "#4A1C00",
            "primaryFixed": "#FFE1D3",
            "onPrimaryFixed": "#000000",
            "primaryFixedDim": "#FFBC99",
            "onPrimaryFixedVariant": "#2B0D00",
            "secondaryFixed": "#FFE1D3",
            "onSecondaryFixed": "#000000",
            "secondaryFixedDim": "#EAC2AF",
            "onSecondaryFixedVariant": "#251106",
            "tertiaryFixed": "#EFE9AF",
            "onTertiaryFixed": "#000000",
            "tertiaryFixedDim": "#D2CD95",
            "onTertiaryFixedVariant": "#191700",
            "surfaceDim": "#1A120D",
            "surfaceBright": "#413732",
            "surfaceContainerLowest": "#140C09",
            "surfaceContainerLow": "#221A15",
            "surfaceContainer": "#271E19",
            "surfaceContainerHigh": "#322823",
            "surfaceContainerHighest": "#3D332E"
        }
    },
    "palettes": {
        "primary": {
            "0": "#000000",
            "5": "#230900",
            "10": "#331100",
            "15": "#431900",
            "20": "#542100",
            "25": "#652A00",
            "30": "#773200",
            "35": "#8A3B00",
            "40": "#9D4400",
            "50": "#C45700",
            "60": "#EC6A00",
            "70": "#FF8D49",
            "80": "#FFB68F",
            "90": "#FFDBCA",
            "95": "#FFEDE6",
            "98": "#FFF8F6",
            "99": "#FFFBFF",
            "100": "#FFFFFF"
        },
        "secondary": {
            "0": "#000000",
            "5": "#230900",
            "10": "#311302",
            "15": "#3E1D09",
            "20": "#4A2713",
            "25": "#58321D",
            "30": "#653D27",
            "35": "#724831",
            "40": "#80543C",
            "50": "#9C6C53",
            "60": "#B8856A",
            "70": "#D69F83",
            "80": "#F4BA9C",
            "90": "#FFDBCA",
            "95": "#FFEDE6",
            "98": "#FFF8F6",
            "99": "#FFFBFF",
            "100": "#FFFFFF"
        },
        "tertiary": {
            "0": "#000000",
            "5": "#131100",
            "10": "#1E1C00",
            "15": "#292700",
            "20": "#353200",
            "25": "#413D00",
            "30": "#4D4800",
            "35": "#595406",
            "40": "#656014",
            "50": "#7F792C",
            "60": "#999343",
            "70": "#B5AE5B",
            "80": "#D1C973",
            "90": "#EDE68C",
            "95": "#FCF499",
            "98": "#FFFAE0",
            "99": "#FFFBFF",
            "100": "#FFFFFF"
        },
        "neutral": {
            "0": "#000000",
            "5": "#15100D",
            "10": "#201A17",
            "15": "#2B2421",
            "20": "#362F2C",
            "25": "#413A37",
            "30": "#4D4542",
            "35": "#59514D",
            "40": "#655D59",
            "50": "#7F7571",
            "60": "#998F8A",
            "70": "#B4A9A4",
            "80": "#D0C4BF",
            "90": "#ECE0DB",
            "95": "#FBEEE9",
            "98": "#FFF8F6",
            "99": "#FFFBFF",
            "100": "#FFFFFF"
        },
        "neutral-variant": {
            "0": "#000000",
            "5": "#190F09",
            "10": "#241913",
            "15": "#2F231D",
            "20": "#3B2E27",
            "25": "#463832",
            "30": "#52443D",
            "35": "#5F4F48",
            "40": "#6B5B53",
            "50": "#85746B",
            "60": "#9F8D84",
            "70": "#BBA79E",
            "80": "#D7C2B9",
            "90": "#F4DED4",
            "95": "#FFEDE6",
            "98": "#FFF8F6",
            "99": "#FFFBFF",
            "100": "#FFFFFF"
        },
        "error": {
            "0": "#000000",
            "5": "#2d0001",
            "10": "#410002",
            "15": "#540003",
            "20": "#690005",
            "25": "#7e0007",
            "30": "#93000a",
            "35": "#a80710",
            "40": "#ba1a1a",
            "50": "#de3730",
            "60": "#ff5449",
            "70": "#ff897d",
            "80": "#ffb4ab",
            "90": "#ffdad6",
            "95": "#ffedea",
            "98": "#fff8f7",
            "99": "#fffbff",
            "100": "#ffffff",
        }
    }
}


const bodyFontFamily = ["Lora Variable", "serif"].join(',');
const headerFontFamily = ["Ubuntu", "sans-serif"].join(',');

/**
 * 
 * @param materialTheme The color theme to be used when created the MUI theme for the application
 * @param palettes The extended Material color palettes for the more important colors. This field
 * must have a 'primary', 'secondary', and 'error' value for this function to run successfully.
 * @returns A useable MUI theme using the colors from the arguments. Also has additional font and
 * component styling.
 */
function themeFromMaterialColors(materialTheme: MaterialColorTheme, palettes: MaterialColorPaletteMap): Theme {
    // Create an initial theme with nothing but breakpoints so that we can use them later on.
    const templateTheme = createTheme({
        breakpoints: {
            keys: ['xs', 'sm', 'md', 'lg', 'xl'],
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1536,
            }
        }
    });
    // Create the theme that we will actually use in our application
    const newTheme = createTheme({
        // The base color system of our theme
        palette: {
            mode: 'light',
            primary: {
                light: palettes.primary[30],
                main: materialTheme.primary,
                dark: palettes.primary[50],
                contrastText: palettes.primary[90],
            },
            secondary: {
                light: palettes.secondary[30],
                main: materialTheme.secondary,
                dark: palettes.secondary[50],
                contrastText: palettes.secondary[90],
            },
            error: {
                light: "#de3730",
                main: materialTheme.error,
                dark: "#93000a",
                contrastText: "#410002",
            },
            background: {
                default: materialTheme.background,
                paper: materialTheme.surface,
            },
            "surfaceTint": materialTheme.surfaceTint,
            "onPrimary": materialTheme.onPrimary,
            "primaryContainer": materialTheme.primaryContainer,
            "onPrimaryContainer": materialTheme.onPrimaryContainer,
            "onSecondary": materialTheme.onSecondary,
            "secondaryContainer": materialTheme.secondaryContainer,
            "onSecondaryContainer": materialTheme.onSecondaryContainer,
            "tertiary": materialTheme.tertiary,
            "onTertiary": materialTheme.onTertiary,
            "tertiaryContainer": materialTheme.tertiaryContainer,
            "onTertiaryContainer": materialTheme.onTertiaryContainer,
            "onError": materialTheme.onError,
            "errorContainer": materialTheme.errorContainer,
            "onErrorContainer": materialTheme.onErrorContainer,
            "onBackground": materialTheme.onBackground,
            "surface": materialTheme.surface,
            "onSurface": materialTheme.onSurface,
            "surfaceVariant": materialTheme.surfaceVariant,
            "onSurfaceVariant": materialTheme.onSurfaceVariant,
            "outline": materialTheme.outline,
            "outlineVariant": materialTheme.outlineVariant,
            "shadow": materialTheme.shadow,
            "scrim": materialTheme.scrim,
            "inverseSurface": materialTheme.inverseSurface,
            "inverseOnSurface": materialTheme.inverseOnSurface,
            "inversePrimary": materialTheme.inversePrimary,
            "primaryFixed": materialTheme.primaryFixed,
            "onPrimaryFixed": materialTheme.onPrimaryFixed,
            "primaryFixedDim": materialTheme.primaryFixedDim,
            "onPrimaryFixedVariant": materialTheme.onPrimaryFixedVariant,
            "secondaryFixed": materialTheme.secondaryFixed,
            "onSecondaryFixed": materialTheme.onSecondaryFixed,
            "secondaryFixedDim": materialTheme.secondaryFixedDim,
            "onSecondaryFixedVariant": materialTheme.onSecondaryFixedVariant,
            "tertiaryFixed": materialTheme.tertiaryFixed,
            "onTertiaryFixed": materialTheme.onTertiaryFixed,
            "tertiaryFixedDim": materialTheme.tertiaryFixedDim,
            "onTertiaryFixedVariant": materialTheme.onTertiaryFixedVariant,
            "surfaceDim": materialTheme.surfaceDim,
            "surfaceBright": materialTheme.surfaceBright,
            "surfaceContainerLowest": materialTheme.surfaceContainerLowest,
            "surfaceContainerLow": materialTheme.surfaceContainerLow,
            "surfaceContainer": materialTheme.surfaceContainer,
            "surfaceContainerHigh": materialTheme.surfaceContainerHigh,
            "surfaceContainerHighest": materialTheme.surfaceContainerHighest
        },
        typography: {
            fontFamily: ["Lora Variable", "Ubuntu", "sans-serif"].join(','),
            h1: {
                fontFamily: headerFontFamily,
                [templateTheme.breakpoints.up('md')]: {
                    fontSize: '6.3rem',
                },
                // Have 1rem for sizes smaller than md
                [templateTheme.breakpoints.down('md')]: {
                    fontSize: '6rem',
                }
            },
            h2: {
                fontFamily: headerFontFamily,
                [templateTheme.breakpoints.up('md')]: {
                    fontSize: '3.95rem',
                },
                // Have 1rem for sizes smaller than md
                [templateTheme.breakpoints.down('md')]: {
                    fontSize: '3.75rem',
                }
            },
            h3: {
                fontFamily: headerFontFamily,
                [templateTheme.breakpoints.up('md')]: {
                    fontSize: '3.2rem',
                },
                // Have 1rem for sizes smaller than md
                [templateTheme.breakpoints.down('md')]: {
                    fontSize: '3rem',
                }
            },
            h4: {
                fontFamily: headerFontFamily,
                [templateTheme.breakpoints.up('md')]: {
                    fontSize: '2.325rem',
                },
                // Have 1rem for sizes smaller than md
                [templateTheme.breakpoints.down('md')]: {
                    fontSize: '2.125rem',
                }
            },
            h5: {
                fontFamily: headerFontFamily,
                [templateTheme.breakpoints.up('md')]: {
                    fontSize: '1.7rem',
                },
                // Have 1rem for sizes smaller than md
                [templateTheme.breakpoints.down('md')]: {
                    fontSize: '1.5rem',
                }
            },
            h6: {
                fontFamily: headerFontFamily,
                [templateTheme.breakpoints.up('md')]: {
                    fontSize: '1.55rem',
                },
                // Have 1rem for sizes smaller than md
                [templateTheme.breakpoints.down('md')]: {
                    fontSize: '1.25rem',
                }
            },
            subtitle1: {
                fontFamily: bodyFontFamily,
                [templateTheme.breakpoints.up('md')]: {
                    fontSize: '1.3rem',
                },
                // Have 1rem for sizes smaller than md
                [templateTheme.breakpoints.down('md')]: {
                    fontSize: '1rem',
                }
            },
            subtitle2: {
                fontFamily: bodyFontFamily,
            },
            body1: {
                fontFamily: bodyFontFamily,
                fontWeight: 400,
                [templateTheme.breakpoints.up('md')]: {
                    fontSize: '1.3rem',
                },
                // Have 1rem for sizes smaller than md
                [templateTheme.breakpoints.down('md')]: {
                    fontSize: '1rem',
                }
            },
            body2: {
                fontFamily: bodyFontFamily,
            },
            caption: {
                fontFamily: bodyFontFamily,
            },
            overline: {
                fontFamily: bodyFontFamily,
            },
        },
        // Changes in the default properties of components
        components: {
            MuiCard: {
                styleOverrides: {
                    root: {
                        backgroundColor: materialTheme.primaryContainer,
                        color: materialTheme.onPrimaryContainer,
                        borderRadius: '8px',
                        // border: '1px solid',
                        // borderColor: '#D7C2B9',
                        boxShadow: 'none',
                        overflow: 'visible',
                        padding: '16px',
                    }
                }
            }

        }
    });
    // Return the brand new theme that we have created
    return newTheme;
}

// Create the light theme that will be used for the application
export const lightTheme = themeFromMaterialColors(themeSource.schemes.light, themeSource.palettes);

// Create a light theme with medium contrast that will be used for the application
export const lightMediumContrastTheme = themeFromMaterialColors(themeSource.schemes['light-medium-contrast'], themeSource.palettes);

// Create the dark theme that will be used for the application
export const darkTheme = themeFromMaterialColors(themeSource.schemes.dark, themeSource.palettes);
