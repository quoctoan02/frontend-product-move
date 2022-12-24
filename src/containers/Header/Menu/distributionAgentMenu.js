import { path } from '../../../utils'

export const distributionAgentMenu = [
    { //hệ thống
        name: 'menu.dashboard', link: path.DISTRIBUTION_AGENT + path.DASHBOARD
    },
    { //hệ thống
        name: 'menu.product', menus: [
            {
                name: 'menu.list-product', link: path.DISTRIBUTION_AGENT + path.LIST_PRODUCT
            },

            // { name: 'menu.system.system-parameter.header', link: '/admin/system-parameter' },
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