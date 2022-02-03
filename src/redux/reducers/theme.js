const initialState = {
  LIGHT_MODE: {
    backgroundColor: "#FFFFFF",
    createButton: "#5C7AEA",
    buttonText: "#FFFFFF",
    deletePasswordButton: "#FF2626",
  },
  DARK_MODE: {

  },
};

const ThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
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