import axios from '../axios';
const factoryService = {
    createNewProduct(data) {
        return axios.post(`api/products/create`, data)
    },
    createNewStock(category, data) {
        return axios.post(`api/stocks/${category}`, data)
    },
    createNewCustomer(data) {
        return axios.post(`api/agency/customers`, data)
    },
    createBill(data) {
        return axios.post(`api/agency/customers`, data)
    },

    getProductList() {
        return axios.get(`api/products`)
    },
    getProductInfo(id) {
        return axios.get(`api/products/${id}`)

    },

    getStockList(category) {
        return axios.get(`api/stocks/category/${category}`)
    },
    getProductInStock(stockId) {
        return axios.get(`api/stocks/${stockId}/products`)
    },
    exportToAgency(data) {
        return axios.post(`api/factory/export-product/agency`, data)
    },
    insertProduct(data) {
        return axios.post(`api/factory/stock/insert-product`, data)
    },
    getCustomerList() {
        return axios.get(`api/customers`)
    }

};

export default factoryService;