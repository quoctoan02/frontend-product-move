import actionTypes from '../actions/actionTypes';

const initialState = {
    productList: '',
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PRODUCT_LIST_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
                adminInfo: null
            }
        default:
            return state;
    }
}

export default appReducer;