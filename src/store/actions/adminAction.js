import actionTypes from './actionTypes';
import adminService from '../../services/adminService';

export const fetchTopDoctor = () => {
    return async (dispatch, getState) => {
        try {
            let res = await adminService.createFactory()
            console.log(res)
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTOR_SUCCESS,
                    doctorData: res.data,
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTOR_FAILED,
                })
            }
        } catch (error) {

        }
    }
}