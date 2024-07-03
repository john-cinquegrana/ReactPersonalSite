import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: string;
        };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        status?: {
            danger?: string;
        };
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



export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            light: "#C45700",
            main: "#8D4E2A",
            dark: "#773200",
            contrastText: "#331100"
        },
        secondary: {
            light: "#9C6C53",
            main: "#765848",
            dark: "#653D27",
            contrastText: "#311302",
        },
        error: {
            light: "#de3730",
            main: "#BA1A1A",
            dark: "#93000a",
            contrastText: "#410002",
        },
        background: {
            default: "#FFF8F6",
            paper: "#FFF8F6"
        },
        "surfaceTint": "#8D4E2A",
        "onPrimary": "#FFFFFF",
        "primaryContainer": "#FFDBCA",
        "onPrimaryContainer": "#331100",
        "onSecondary": "#FFFFFF",
        "secondaryContainer": "#FFDBCA",
        "onSecondaryContainer": "#2B160A",
        "tertiary": "#646032",
        "onTertiary": "#FFFFFF",
        "tertiaryContainer": "#EBE5AA",
        "onTertiaryContainer": "#1E1C00",
        "onError": "#FFFFFF",
        "errorContainer": "#FFDAD6",
        "onErrorContainer": "#410002",
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
    }
})

// export const theme = createTheme({
//     palette: {
//         primary: {
//             light: '#757ce8',
//             main: '#3f50b5',
//             dark: '#002884',
//             contrastText: '#fff',
//         },
//         secondary: {
//             light: '#ff7961',
//             main: '#f44336',
//             dark: '#ba000d',
//             contrastText: '#000',
//         },
//     },
// });
