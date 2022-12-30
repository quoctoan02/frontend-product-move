import { path } from '../../../utils'

export const serviceCenterMenu = [
    { //hệ thống
        name: 'menu.dashboard', link: path.SERVICE_CENTER + path.DASHBOARD
    },
    { //hệ thống
        name: 'menu.product', menus: [
            {
                name: 'menu.list-product', link: path.SERVICE_CENTER + path.LIST_PRODUCT
            },
        ]
    },
    { //hệ thống
        name: 'menu.insurance', menus: [
            {
                name: 'menu.list-bill', link: path.SERVICE_CENTER + path.LIST_BILL
            },
            {
                name: 'menu.list-customer', link: path.SERVICE_CENTER + path.LIST_CUSTOMER
            },

        ]
    },

    { //hệ thống
        name: 'menu.report', menus: [
            {
                name: 'menu.factory', link: path.SERVICE_CENTER + path.FACTORY,
            },
        ]
    },
];

