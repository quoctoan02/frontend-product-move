import actionTypes from './actionTypes';
import adminService from '../../services/adminService';
import { toast } from 'react-toastify';

export const addNewAccount = (username, password, role) => {
    return async (dispatch, getState) => {
        try {
            let res = await adminService.createNewAccount(username, password, role)
            console.log(res)
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


