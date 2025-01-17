import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssString, theme, createTheme } = createStitches({
  theme: {
    colors: {
      primary: '#0070f3',
      secondary: '#1c1c1e',
      background: '#ffffff',
      text: '#000000',
      // Adicione mais cores conforme necessário
    },
    space: {
      small: '8px',
      medium: '16px',
      large: '24px',
      // Adicione mais espaçamentos conforme necessário
    },
    fontSizes: {
      small: '12px',
      medium: '16px',
      large: '20px',
      // Adicione mais tamanhos de fonte conforme necessário
    },
    // Adicione mais tokens de design conforme necessário
  },
  media: {
    bp1: '(min-width: 640px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
    // Adicione mais breakpoints conforme necessário
  },
});

globalCss({
  body: {
    margin: 0,
    padding: 0,
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '$background',
    color: '$text',
  },
  // Adicione mais estilos globais conforme necessário
})();