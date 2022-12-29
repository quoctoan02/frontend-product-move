import { path } from '../../../utils'

export const factoryMenu = [
    { //hệ thống
        name: 'menu.dashboard', link: path.FACTORY + path.DASHBOARD
    },
    { //hệ thống
        name: 'menu.product', menus: [
            {
                name: 'menu.list-product', link: path.FACTORY + path.LIST_PRODUCT
            },

            // { name: 'menu.system.system-parameter.header', link: '/admin/system-parameter' },
        ]
    },
    { //hệ thống
        name: 'menu.stock', menus: [
            {
                name: 'menu.list-stock', link: path.FACTORY + path.LIST_STOCK
            },

            // { name: 'menu.system.system-parameter.header', link: '/admin/system-parameter' },
        ]
    },

    { //hệ thống
        name: 'menu.report', menus: [
            {
                name: 'menu.factory', link: path.FACTORY + path.FACTORY,
            },
        ]
    },
];