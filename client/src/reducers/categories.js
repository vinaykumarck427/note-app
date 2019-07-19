const categoriesDefaultInitalValue = []

const categoriesReducer = (state=categoriesDefaultInitalValue, action) => {

      switch (action.type) {
        case "SET_CATEGORIES":
          return [...action.payload];

        default:
          return [...state];
      }
}
export default categoriesReducer