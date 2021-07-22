import { createCss } from '@stitches/react'

export const { styled, keyframes, css } = createCss({
    theme: {
        colors: {
            // themePrimary: '#7E5AB8',
            themePrimary: '#936ecd',
            themeSecondary: '#9273c3',
            themeTertiary: '#b096da',
            textPrimary: '#000000d9',
            textSecondary: '#00000040',
            textTertiary: '#eeeeee',
            backgroundPrimary: '#fff',
            gray500: 'hsl(206,10%,76%)',
            blue500: 'hsl(206,100%,50%)',
            purple500: 'hsl(252,78%,60%)',
            green500: 'hsl(148,60%,60%)',
            red500: 'hsl(352,100%,62%)',
            red400: '#ff556b',
        },
        space: {
            1: '4px',
            2: '8px',
            3: '12px',
            4: '16px',
        },
        fontSizes: {
            1: '12px',
            2: '13px',
            3: '15px',
        },
        fonts: {
            untitled:
                '-apple-system,BlinkMacSystemFont,segoe ui,Roboto,helvetica neue,Arial,noto sans,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol,noto color emoji',
            mono: 'Söhne Mono, menlo, monospace',
        },
        fontWeights: {
            1: 400,
            2: 600,
            3: 900,
        },
        lineHeights: {},
        letterSpacings: {},
        sizes: {},
        borderWidths: {
            1: '1px',
            2: '2px',
            3: '3px',
        },
        borderStyles: {},
        radii: {
            1: '3px',
            2: '6px',
            3: '9px',
        },
        shadows: {},
        zIndices: {},
        transitions: {},
    },
})
