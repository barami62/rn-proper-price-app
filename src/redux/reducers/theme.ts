const colors = {
  WHITE: "#ffffff",
  DARK: "#000000",
  BRIGHT_DARK: "#17171b",
  BRIGHT_GRAY: "#d2d2d2",
  IOLITE: "#6236ff"
};

const commonStyle = {
  mainButton: colors.IOLITE,
  focusedColor: colors.IOLITE,
  unfocusedColor: colors.BRIGHT_GRAY,
};

const initialState = {
  LIGHT_MODE: {
    ...commonStyle,
    fontColor: colors.DARK,
    contentBackgroundColor: colors.BRIGHT_GRAY,
    backgroundColor: colors.WHITE,
  },
  DARK_MODE: {
    ...commonStyle,
    backgroundColor: colors.BRIGHT_DARK,
  },
};

const ThemeReducer = (state = initialState) => state;

export default ThemeReducer;

/*
export const lightTheme = {
    mainButton: '#6236ff',
    // contentBackground: '#fafafb',
    backgroundColor: '#ffffff',
    color: '#1d1d1f',
    contentBackgroundColor: "#f0f0f0",
    borderColor: "#fafafb",
};

export const darkTheme = {
    mainButton: '#6236ff',
    // contentBackground: '#fafafb',
    backgroundColor: "#17171b",
    //#262626
    color: '#dedede',
    contentBackgroundColor: "#202026",
    borderColor: "#202026",
};

export const theme = {
    lightTheme,
    darkTheme
};
*/