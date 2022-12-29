import axios from '../axios';
import { connect } from 'react-redux';
import store from '../store/store';

const state = store.getState()

const adminService = {

    createNewAccount(username, password, role) {
        return axios.post(`api/executive-board/provide-account/${role}`, { username, password })
    },


    getFactoryList() {

    }

};

export default adminService;