// @author Tamar Cohen

const Ex10_2reducer = (state = { products: [], total: 0 }, action) => {
  switch (action.type) {
    case "ADD": // gets product
      let price1 = action.payload.price;
      return {
        ...state,
        products: [...state.products, action.payload],
        total: state.total + price1,
      };

    case "REMOVE":
      // gets product name
      let price2 = 0;
      let arr = [...state.products];
      arr = arr.filter((x) => {
        if (x.name != action.payload) return x;
        else price2 = x.price;
      });
      return { ...state, products: arr, total: state.total - price2 };

    default:
      return state;
  }
};

export default Ex10_2reducer;

// @author Tamar Cohen
