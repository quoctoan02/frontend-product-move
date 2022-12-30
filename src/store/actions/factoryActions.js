import actionTypes from './actionTypes';
import factoryService from '../../services/factoryService';
import { toast } from 'react-toastify';

export const fetchProductList = () => {
    return async (dispatch, getState) => {
        try {
            let res = await factoryService.getProductList()
            if (res) {
                dispatch({
                    type: actionTypes.FETCH_PRODUCT_LIST_SUCCESS,
                    productList: res
                })
            } else {
                toast.error("Fetch product fail")
                dispatch({
                    type: actionTypes.FETCH_PRODUCT_LIST_FAIL,
                })
            }
        } catch (error) {
            toast.error("Fetch product error")
            dispatch({
                type: actionTypes.FETCH_PRODUCT_LIST_FAIL,
            })
        }
    }
}
export const fetchStockList = (category) => {
    return async (dispatch, getState) => {
        try {
            let res = await factoryService.getStockList(category)
            if (res) {
                dispatch({
                    type: actionTypes.FETCH_STOCK_LIST_SUCCESS,
                    stockList: res
                })
            } else {
                toast.error("Fetch stock fail")
                dispatch({
                    type: actionTypes.FETCH_STOCK_LIST_FAIL,
                })
            }
        } catch (error) {
            toast.error("Fetch stock error")
            dispatch({
                type: actionTypes.FETCH_STOCK_LIST_FAIL,
            })
        }
    }
}
export const fetchProductInStock = (stockId) => {
    return async (dispatch, getState) => {
        try {
            let res = await factoryService.getProductInStock(stockId)
            if (res) {
                dispatch({
                    type: actionTypes.FETCH_PRODUCT_IN_STOCK_SUCCESS,
                    productList: res
                })
            } else {
                toast.error("Fetch stock fail")
                dispatch({
                    type: actionTypes.FETCH_PRODUCT_IN_STOCK_FAIL,
                })
            }
        } catch (error) {
            toast.error("Fetch stock error")
            dispatch({
                type: actionTypes.FETCH_PRODUCT_IN_STOCK_FAIL,
            })
        }
    }
}

export const addNewProduct = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await factoryService.createNewProduct(data)
            if (res) {
                toast.success(res.message)
                dispatch({
                    type: actionTypes.ADD_NEW_PRODUCT_SUCCESS,
                })
            } else {
                toast.error("Create new product fail")
                dispatch({
                    type: actionTypes.ADD_NEW_PRODUCT_FAIL,
                })
            }
        } catch (error) {
            toast.error("Create new product error")
            dispatch({
                type: actionTypes.ADD_NEW_PRODUCT_FAIL,
            })
        }
    }
}

export const addNewStock = (category, data) => {
    return async (dispatch, getState) => {
        try {
            let res = await factoryService.createNewStock(category, data)
            if (res) {
                toast.success(res.message)
                dispatch({
                    type: actionTypes.ADD_NEW_ACCOUNT_SUCCESS,
                })
            } else {
                toast.error("Create new account fail")
                dispatch({
                    type: actionTypes.ADD_NEW_ACCOUNT_FAIL,
                })
            }
        } catch (error) {
            toast.error("Create new account error")
            dispatch({
                type: actionTypes.ADD_NEW_ACCOUNT_FAIL,
            })
        }
    }
}
