const SET_STOCKS = 'stocks/SET_STOCKS' as const;
const SET_STOCK_PRICE = 'stocks/SET_STOCK_PRICE' as const;

export type Stock = {
  cd: string;
  gb: string;
  nm: string;
}

export type StockPriceInfo = {
  "D_5": string,
  "first_price": number,
  "now_price": number,
  "required_yield": number,
  "second_price": number,
  "third_price": number
}

export const setStocks = (stocks: Stock[]) => ({
  type: SET_STOCKS,
  payload: stocks,
});

export const setStockPriceInfo = (stockPriceInfo: StockPriceInfo) => ({
  type: SET_STOCK_PRICE,
  payload: stockPriceInfo,
});

type StockAction =
  | ReturnType<typeof setStocks>
  | ReturnType<typeof setStockPriceInfo>;

interface initialState {
  stocks: Stock[];
  stockPriceInfo: StockPriceInfo;
}

const initialState: initialState = {
  stocks: [],
  stockPriceInfo: {
    "D_5": "",
    "first_price": 0,
    "now_price": 0,
    "required_yield": 0,
    "second_price": 0,
    "third_price": 0,
  }
};

const StockReducer = (
  state: initialState = initialState,
  action: StockAction
): initialState => {
  const newState = { ...state };

  switch (action.type) {
    case SET_STOCKS:
      newState.stocks = action.payload;
      return newState;

    case SET_STOCK_PRICE:
      newState.stockPriceInfo = action.payload;
      return newState;

    default:
      return state;
  }
};

export default StockReducer;