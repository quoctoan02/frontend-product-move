// import { createMuiTheme } from '@material-ui/core';

// export const tableTheme = createMuiTheme({
//     overrides: {
//         MuiTablePagination: {
//             root: {
//                 '&:last-child': {
//                     //'padding-top': '1rem',
//                 }
//             },
//             toolbar: {
//                 'align-items': 'center'
//             }
//         },
//         MuiTypography: {
//             colorInherit: {
//                 '&:nth-child(2)': {
//                     display: 'block !important',
//                 }
//             }
//         },
//         MuiTable: {
//             root: {
//                 'max-height': '500px !important',
//             }
//         },
//         MuiTableBody: {
//             root: {
//                 //  'box-shadow': '0 2px 5px rgba(0, 0, 0, .08)',
//                 'border-left': '1px solid #e8e8e8',
//                 'border-right': '1px solid #e8e8e8',
//                 'border-bottom': '1px solid #e8e8e8',
//                 'box-shadow': '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)'
//             }
//         },
//         MuiToolbar: {
//             root: {
//                 'align-items': 'start',
//                 'flex-wrap': 'wrap-reverse',
//                 backgroundColor: "#f5f5f5",
//                 //'padding-bottom': '1.5rem'
//             },
//             gutters: {
//                 // [tableTheme.breakpoints.up("md")]: {
//                 //     'padding-left': '0'
//                 // },
//                 '@media (min-width: 600px)': {
//                     'padding-left': '0'
//                 },
//                 // all: 'none',
//             },
//             regular: {
//                 '@media (min-width: 600px)': {
//                     'min-height': '60px'
//                 },
//             }
//         },
//         MuiIconButton: {
//             root: {
//                 padding: '5px'
//             }
//         },
//         MuiPaper: {
//             root: {
//                 //backgroundColor: "#f5f5f5",

//             },
//             elevation2: {
//                 "box-shadow": "none"
//             }
//         },
//         MuiTableCell: {
//             root: {
//                 '&:not(.MuiTableCell-footer)':
//                 {
//                     padding: '5px !important',
//                     "border-bottom": "none"
//                 },
//                 '&.MuiTableCell-footer': {
//                     "border-bottom": "none",

//                 }
//             }
//         },

//         MuiTableRow: {
//             root: {
//                 "&:not(.MuiTableRow-footer):not(.MuiTableRow-head):hover": {
//                     backgroundColor: "rgba(87, 197, 111, 0.13) !important",
//                     cursor: 'pointer',
//                 },
//                 "&:empty": {
//                     display: "none"
//                 }
//             },
//             footer: {

//             },
//             head: {
//                 border: '1px solid #c5e7f2'
//             }
//         },
//         MuiList: {
//             root: {
//                 backgroundColor: '#fff'
//             }
//         },
//         // MuiTableFooter: {
//         //     root: {
//         //
//         //     }
//         // // },
//         // MuiFormControl: {
//         //     root: {
//         //         'min-width': '350px',
//         //         'text-align': 'center',
//         //         //width: '50%',
//         //         display: 'flex',
//         //         padding: '2px 20px 0 20px',
//         //         'align-items': 'center',
//         //         'justify-content': 'center',
//         //         'border-radius': '25px',
//         //         'background-color': '#fff',
//         //         'box-shadow': '0 2px 5px rgba(0, 0, 0, .08)',
//         //     }
//         // },
//         MuiInput: {
//             underline: {
//                 "&:before": {
//                     'border-bottom': 'none',
//                 }
//             },
//             root: {
//                 width: '100%',
//                 // 'padding': 'none',
//                 'line-height': '2.5rem',
//                 height: '2.5rem',
//             },
//             input: {
//                 'padding-top': '10px',
//                 //height: '2rem',
//             }
//         },
//     }
// });