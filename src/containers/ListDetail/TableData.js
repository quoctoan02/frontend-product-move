import Avatar from "@mui/material/Avatar";

export const productColumns = [
    {
        field: 'id',
        headerName: 'Mã sp',
        width: 70
    },
    {
        field: 'name',
        headerName: 'Tên sản phẩm',
        width: 150,
    },
    {
        field: 'image_url',
        headerName: 'Ảnh sp',
        width: 100,
        sortable: false,
        renderCell: (params) => <Avatar variant="rounded" src={params.value} />
    },
    {
        field: 'product_line',
        headerName: 'Dòng sản phẩm',
        width: 150,
    },
    {
        field: 'price',
        headerName: 'Giá niêm yết',
        width: 150,
    },

    {
        field: 'description',
        sortable: false,
        headerName: 'Mô tả chi tiết',
        width: 500,
    },
];

