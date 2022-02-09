const SET_MODE = 'themes/SET_MODE' as const;

export const setMode = () => ({
  type: SET_MODE,
});

type ThemeAction =
  | ReturnType<typeof setMode>;

const colors = {
  WHITE: "#ffffff",
  DARK: "#000000",
  BRIGHT_DARK: "#17171b",
  MORE_BRIGHT_DARK: "#202026",
  BRIGHT_GRAY: "#f0f0f0",
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
    mainButtonFontColor: colors.WHITE,
    contentBackgroundColor: colors.BRIGHT_GRAY,
    backgroundColor: colors.WHITE,
  },
  DARK_MODE: {
    ...commonStyle,
    fontColor: colors.WHITE,
    mainButtonFontColor: colors.WHITE,
    contentBackgroundColor: colors.MORE_BRIGHT_DARK,
    backgroundColor: colors.BRIGHT_DARK,
  },
  NOW_MODE: "LIGHT_MODE",
};

interface initialState {
  LIGHT_MODE: any,
  DARK_MODE: any,
  NOW_MODE: string,
}

const ThemeReducer = (
  state = initialState,
  action: ThemeAction,
): any => {
  const newState = { ...state };

  switch (action.type) {
    case SET_MODE:
      newState.NOW_MODE = newState.NOW_MODE === "LIGHT_MODE" ? "DARK_MODE" : "LIGHT_MODE";
      return newState;

    default:
      return newState;
  }
};

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