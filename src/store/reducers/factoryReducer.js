import actionTypes from '../actions/actionTypes';

const initialState = {
    productList: '',
    stockList: ''
}

const factoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PRODUCT_LIST_SUCCESS:
            state.productList = action.productList
            return {
                ...state,
            }
        case actionTypes.FETCH_PRODUCT_LIST_FAIL:
            state.productList = []
            return {
                ...state,
            }
        case actionTypes.FETCH_STOCK_LIST_SUCCESS:
            state.stockList = action.stockList
            return {
                ...state,
            }
        case actionTypes.FETCH_STOCK_LIST_FAIL:
            state.stockList = []
            return {
                ...state,
            }
        case actionTypes.FETCH_PRODUCT_IN_STOCK_SUCCESS:
            state.productInStock = action.productList
            return {
                ...state,
            }
        case actionTypes.FETCH_PRODUCT_IN_STOCK_FAIL:
            state.productInStock = []
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default factoryReducer;