const SET_STOCKS = 'stocks/SET_STOCKS' as const;

export const setStocks = (stocks: Stock[]) => ({
  type: SET_STOCKS,
  payload: stocks,
});

type StockAction =
  | ReturnType<typeof setStocks>;

export type Stock = {
  cd: string;
  gb: string;
  nm: string;
}

interface initialState {
  stocks: Stock[]
}

const initialState: initialState = {
  stocks: []
};

const StockReducer = (
  state: initialState = initialState,
  action: StockAction
): initialState => {
  switch (action.type) {
    case SET_STOCKS:
      const newState = { ...state };
      newState.stocks = action.payload;
      return newState;

    default:
      return state;
  }
};

export default StockReducer;