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
        return axios.post(`api/agency/product-bill`, data)
    },
    createInsuranceBill(data) {
        return axios.post(`api/agency/insurance-bill`, data)
    },
    getProductInsurance() {
        return axios.get(`api/insurance/products`)
    },
    getProductList() {
        return axios.get(`api/products`)
    },
    getBillList() {
        return axios.get(`api/product-bill`)
    },
    getProductInfo(id) {
        return axios.get(`api/products/${id}`)

    },
    insuranceExportToAgency(billId, stockId) {
        return axios.post(`api/insurance/export-product/${billId}/agency`, { stockId })
    },
    insuranceExportToFactory(billId) {
        return axios.post(`api/insurance/export-product/${billId}/factory`, { stockId: 2 })
    },
    getStockList(category) {
        return axios.get(`api/stocks/category/${category}`)
    },
    getProductInStock(stockId) {
        return axios.get(`api/stocks/${stockId}/products`)
    },

    getBillInfo(billId) {
        return axios.get(`api/product-bill/${billId}`)
    },
    getInsuranceBill() {
        return axios.get(`api/agency/insurance-bills`)
    },
    getInsuranceBillInfo(id) {
        return axios.get(`api/insurance/products/${id}`)
    },
    factoryExportToAgency(data) {
        return axios.post(`api/factory/export-product/agency`, data)
    },
    agencyExportToInsurance(id) {
        return axios.post(`api/agency/export-product/${id}/insurance`)
    },
    insertProduct(data) {
        return axios.post(`api/factory/stock/insert-product`, data)
    },
    getCustomerList() {
        return axios.get(`api/customers`)
    },
    getCustomerInfo(id) {
        return axios.get(`api/customers/${id}`)

    },
    getStockInfo(id) {
        return axios.get(`api/stocks/${id}`)
    },
};

export default factoryService;