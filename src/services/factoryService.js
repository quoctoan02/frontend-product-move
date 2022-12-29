import axios from '../axios';
const factoryService = {
    createNewProduct(data) {
        return axios.post(`api/products/create`, data)
    },
    createNewStock(category) {
        return axios.post(`api/stocks/${category}`)
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
    }

};

export default factoryService;