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