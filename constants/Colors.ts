export const Colors = {
  primary: '#1E3A8A',
  secondary: '#4FBDBA',
  facebook: '#3B5998',
  background: {
    light: '#F4F5F7',
    white: '#FFFFFF',
    header: '#D1D5DB',
  },
  text: {
    primary: '#1F2937',
    secondary: '#4B5563',
    white: '#FFFFFF',
    black: '#000000',
    gray: '#6B7280',
    link: '#2e78b7',
  },
  border: {
    light: '#E5E7EB',
    white: '#FFFFFF',
  },
  button: {
    apple: '#000000',
    google: {
      background: '#FFFFFF',
      text: '#333333',
      icon: '#EA4335',
    },
  },
  shadow: '#000000',
  warning: '#F59E0B',
  success: '#8BC34A',
  transparent: 'transparent',
} as const;

export type ColorType = typeof Colors;
export type ColorKeys = keyof typeof Colors;
