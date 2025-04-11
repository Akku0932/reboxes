// Sustainable branding colors for Reboxes
export const colors = {
  // Primary colors
  primary: {
    darkGreen: '#2A5D45',
    green: '#3B7A5A',
    lightGreen: '#5A9E7A',
  },
  // Earth tones
  earth: {
    brown: '#8B6D4B',
    sand: '#D9C0A3',
    clay: '#BF8F65',
  },
  // Neutral colors
  neutral: {
    white: '#FFFFFF',
    offWhite: '#F8F9F5',
    lightGray: '#E9ECEF',
    gray: '#6C757D',
    darkGray: '#343A40',
    black: '#212529',
  },
  // Accent colors
  accent: {
    coral: '#E86A58',
    aqua: '#4ECDC4',
    yellow: '#F7CB45',
  },
};

// CSS Variables for easier usage
export const cssVariables = `
  :root {
    --color-dark-green: ${colors.primary.darkGreen};
    --color-green: ${colors.primary.green};
    --color-light-green: ${colors.primary.lightGreen};
    
    --color-brown: ${colors.earth.brown};
    --color-sand: ${colors.earth.sand};
    --color-clay: ${colors.earth.clay};
    
    --color-white: ${colors.neutral.white};
    --color-off-white: ${colors.neutral.offWhite};
    --color-light-gray: ${colors.neutral.lightGray};
    --color-gray: ${colors.neutral.gray};
    --color-dark-gray: ${colors.neutral.darkGray};
    --color-black: ${colors.neutral.black};
    
    --color-coral: ${colors.accent.coral};
    --color-aqua: ${colors.accent.aqua};
    --color-yellow: ${colors.accent.yellow};
  }
`; 