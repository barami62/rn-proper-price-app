import { combineReducers } from "redux";
import ThemeReducer from "./reducers/theme";

const rootReducer = combineReducers({
  themes: ThemeReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;