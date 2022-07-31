// @author Tamar Cohen

const Ex10_1reducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, users: [...state.users, action.payload] };

    case "UPDATE":
      let arr = [...state.users];
      let index = arr.findIndex((x) => x.id == action.payload.id);
      if (index >= 0) {
        arr[index] = action.payload;
      }
      return { ...state, users: arr };

    case "DELETE":
      let arr2 = [...state.users];
      arr2 = arr2.filter((x) => {
        if (x.id != action.payload) return x;
      });
      return { ...state, users: arr2 };

    default:
      return state;
  }
};

export default Ex10_1reducer;

// @author Tamar Cohen
