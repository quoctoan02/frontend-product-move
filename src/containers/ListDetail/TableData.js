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
        width: 70,
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
export const productInsuranceColumns = [
    {
        field: 'id',
        headerName: 'Mã Hóa đơn',
        width: 70
    },

    {
        field: 'image_url',
        headerName: 'Ảnh sp',
        width: 70,
        sortable: false,
        renderCell: (params) => <Avatar variant="rounded" src={params.value} />
    },
    {
        field: 'product_id',
        headerName: 'Mã sp',
        width: 70
    },
    {
        field: 'name',
        headerName: 'Tên sản phẩm',
        width: 150,
    },
    {
        field: 'quantity',
        headerName: 'Số lượng',
        width: 90,
    },
    {
        field: 'customer_name',
        headerName: 'Tên khách hàng',
        width: 180,
    },
    {
        field: 'stock_name',
        headerName: 'Kho phân phối',
        width: 150,
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
        width: 70,
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
        width: 70,
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
        width: 90,
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

    },
    {
        field: 'address',
        headerName: 'Địa chỉ kho',
        width: 300,

    }
]
export const customerColumns = [
    {
        field: 'id',
        headerName: 'Mã kh',
        width: 70
    },
    {
        field: 'name',
        headerName: 'Tên khách hàng',
        width: 180,
    },
    {
        field: 'phone_number',
        headerName: 'Số điện thoại',
        width: 120,
    },
    {
        field: 'address',
        headerName: 'Địa chỉ',
        width: 300,
    }
]
export const billColumns = [
    {
        field: 'id',
        headerName: 'Mã hóa đơn',
        width: 80
    },
    {
        field: 'customer_name',
        headerName: 'Tên khách hàng',
        width: 180,
    },
    {
        field: 'customer_phone',
        headerName: 'Số điện thoại',
        width: 120,
    },
    {
        field: 'stock_name',
        headerName: 'Kho phân phối',
        width: 150,
    },
    {
        field: 'sell_date',
        headerName: 'Ngày bán',
        width: 150,
    }
]
export const productInBillColumns = [
    {
        field: 'id',
        headerName: 'Mã sp',
        width: 70
    },

    {
        field: 'image_url',
        headerName: 'Ảnh sp',
        width: 70,
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
        width: 90,
    },
]


