import { path } from '../../../utils'

let partnerLink = "/partner"
let subsidiaryLink = "/subsidiary"

export const adminMenu = [
    { //hệ thống
        name: 'menu.dashboard', link: path.ADMIN + path.DASHBOARD,
    },
    { //hệ thống
        name: 'menu.product', menus: [
            {
                name: 'menu.list-product', link: path.ADMIN + path.LIST_PRODUCT
            },
        ]
    },
    { //hệ thống
        name: 'menu.admin.subsidiary', menus: [
            {
                name: 'menu.factory', link: path.ADMIN + subsidiaryLink + path.FACTORY
            },
            {
                name: 'menu.service-center', link: path.ADMIN + subsidiaryLink + path.SERVICE_CENTER
            },
        ]
    },
    { //hệ thống
        name: 'menu.admin.partner', menus: [
            {
                name: 'menu.distribution-agent', link: path.ADMIN + partnerLink + path.DISTRIBUTION_AGENT
            },
        ]
    },
    { //hệ thống
        name: 'menu.report', menus: [
            {
                name: 'menu.factory', link: path.ADMIN + path.REPORT + path.FACTORY,
            },
            {
                name: 'menu.service-center', link: path.ADMIN + path.REPORT + path.SERVICE_CENTER,
            },
            {
                name: 'menu.distribution-agent', link: path.ADMIN + path.REPORT + path.DISTRIBUTION_AGENT
            },
        ]
    },
];

