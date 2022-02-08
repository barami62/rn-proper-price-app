const INCREASE = 'counter/INCREASE' as const;

export const increase = () => ({
  type: INCREASE
});

type CounterAction =
  | ReturnType<typeof increase>;

type CounterState = {
  count: number;
};

const initialState = {

};

const StockReducer = (state = initialState, action: CounterAction) => {
  switch (action.type) {
    case INCREASE:

      break;

    default:
      break;
  }
};

export default StockReducer;