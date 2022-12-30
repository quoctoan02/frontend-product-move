import Avatar from "@mui/material/Avatar";

export const allProductColumns = [
    {
        field: 'id',
        headerName: 'Mã sp',
        width: 70
    },
    {
        field: 'image_url',
        headerName: 'Ảnh sp',
        width: 100,
        sortable: false,
        renderCell: (params) => <Avatar variant="rounded" src={params.value} />
    },
    {
        field: 'name',
        headerName: 'Tên sản phẩm',
        width: 150,
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

export const productInFactoryStockColumns = [
    {
        field: 'id',
        headerName: 'Mã sp',
        width: 70
    },

    {
        field: 'image_url',
        headerName: 'Ảnh sp',
        width: 100,
        sortable: false,
        renderCell: (params) => <Avatar variant="rounded" src={params.value} />
    },
    {
        field: 'name',
        headerName: 'Tên sản phẩm',
        width: 150,
    },
    {
        field: 'quantity',
        headerName: 'Số lượng',
        width: 150,
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
export const productInDistributionAgentStockColumns = [
    {
        field: 'id',
        headerName: 'Mã sp',
        width: 70
    },

    {
        field: 'image_url',
        headerName: 'Ảnh sp',
        width: 100,
        sortable: false,
        renderCell: (params) => <Avatar variant="rounded" src={params.value} />
    },
    {
        field: 'name',
        headerName: 'Tên sản phẩm',
        width: 150,
    },
    {
        field: 'quantity',
        headerName: 'Số lượng',
        width: 150,
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
    // {
    //     field: 'factoryStockId',
    //     headerName: 'Nơi sản xuất',
    //     width: 150,
    // },
    {
        field: 'description',
        sortable: false,
        headerName: 'Mô tả chi tiết',
        width: 500,
    },
];

export const stockColumns = [
    {
        field: 'id',
        headerName: 'Mã kho',
        width: 80
    },
    {
        field: 'name',
        headerName: 'Tên kho',
        width: 150,
        editable: true,
    },
    {
        field: 'address',
        headerName: 'Địa chỉ kho',
        width: 300,
        editable: true,
    }
]


