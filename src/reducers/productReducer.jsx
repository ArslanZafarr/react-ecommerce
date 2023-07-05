const productReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            };

        case "SET_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
            };

        case "SET_API_DATA":
            const featuredData = action.payload.filter((curElem) => {
                return curElem.featured === true;
            });
            return {
                ...state,
                isLoading: false,
                isError: false,
                products: action.payload,
                featureProducts: featuredData,
            };

        case "SET_SINGLE_LOADING":
            return {
                ...state,
                isSingleLoading: true,
            };

        case "SET_SINGLE_ERROR":
            return {
                ...state,
                isSingleLoading: false,
                isSingleError: true,
            };

        case "SET_SINGLE_PRODUCT":
            return {
                ...state,
                isSingleLoading: false,
                isSingleError: false,
                singleProduct: action.payload,
            };

        default:
            return state;
    }
};

export default productReducer;
