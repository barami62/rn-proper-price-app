import { combineReducers } from "redux";
import StockReducer from "./reducers/stocks";
import ThemeReducer from "./reducers/theme";

const rootReducer = combineReducers({
  themes: ThemeReducer,
  stocks: StockReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;