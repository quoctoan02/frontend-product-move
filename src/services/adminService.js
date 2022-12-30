import axios from '../axios';

const adminService = {

    createNewAccount(username, password, role) {
        return axios.post(`api/executive-board/provide-account/${role}`, { username, password })
    },

    getProductSell() {
        return axios.get(`api/agency/product/selled`)
    },
    getProductSellMonth(month) {
        return axios.get(`api/agency/product/selled/month/${month}`)
    },


    getFactoryList() {

    }

};

export default adminService;