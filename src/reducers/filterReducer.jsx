const filterReducer = (state, action) => {

    switch (action.type) {
        case "SET_FILTER_PRODUCTS":
            return {
                ...state,
                filterProducts: [...action.payload],
                allProducts: [...action.payload] ,
            };

        default: return state;

    }

}

export default filterReducer