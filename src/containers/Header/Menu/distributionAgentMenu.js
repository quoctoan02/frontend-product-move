import { path } from '../../../utils'

export const distributionAgentMenu = [
    { //hệ thống
        name: 'menu.dashboard', link: path.DISTRIBUTION_AGENT + path.DASHBOARD
    },
    // { //hệ thống
    //     name: 'menu.product', menus: [
    //         {
    //             name: 'menu.list-product', link: path.DISTRIBUTION_AGENT + path.LIST_PRODUCT
    //         },
    //     ]
    // },
    { //hệ thống
        name: 'menu.stock', menus: [
            {
                name: 'menu.list-stock', link: path.DISTRIBUTION_AGENT + path.LIST_STOCK
            },

            // { name: 'menu.system.system-parameter.header', link: '/admin/system-parameter' },
        ]
    },
    { //hệ thống
        name: 'menu.sell', menus: [
            {
                name: 'menu.add-bill', link: path.DISTRIBUTION_AGENT + path.ADD_BILL
            },
            {
                name: 'menu.list-bill', link: path.DISTRIBUTION_AGENT + path.LIST_BILL
            },
            {
                name: 'menu.list-customer', link: path.DISTRIBUTION_AGENT + path.LIST_CUSTOMER
            },

        ]
    },


    { //hệ thống
        name: 'menu.report', menus: [
            {
                name: 'menu.factory', link: path.DISTRIBUTION_AGENT + path.FACTORY,
            },
        ]
    },
];