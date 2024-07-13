export const userColumns = [
    { field: '_id', headerName: 'ID', width: 150 },
    {
      field: 'username',
      headerName: 'USER NAME',
      width: 150,
      editable: false,
    },
    {
      field: 'email',
      headerName: 'EMAIL',
      width: 150,
      sortable:false,
      editable: false,
    },
    {
      field: 'phone',
      headerName: 'PHONE',
      width: 110,
      sortable:false,
      editable: false,
    },
    {
      field: 'city',
      headerName: 'CITY',
      width: 110,
      sortable:false,
      editable: false,
    },
    {
      field: 'country',
      headerName: 'COUNTRY',
      sortable:false,
      width: 110,
      editable: false,
    },
  ];

  export const productColumns = [
    { field: '_id', headerName: 'ID', width: 150 },
    {
      field: 'name',
      headerName: 'NAME',
      width: 150,
      editable: false,
    },
    {
      field: 'brandName',
      headerName: 'BRAND NAME',
      width: 150,
      editable: false,
      sortable:false
    },
    {
      field: 'categories',
      headerName: 'CATEGORIES',
      width: 140,
      editable: false,
      sortable:false
    },
    {
      field: 'price',
      headerName: 'PRICE',
      width: 110,
      editable: false,
      sortable:false
      
    },
    {
      field:'totalStock',
      headerName:'Stock',
      width:100,
      editable:true,
      sortable:false
    }
  ];


  export const orderColumn = [
    { field: 'customerID', headerName: 'CustomerID', width: 130 },
    {
      field:'orderID',
      headerName:'Order ID',
    },
    {
      field:'paymentType',
      headerName:'Payment Type',
    },
    {
      field:'paymentStatus',
      headerName:'Status'
    },
    {
      field:'paymentID',
      headerName:'Payment ID',
    },
    {
      field:'deliveryStatus',
      headerName:'Delivery Status',
      width:200
    },
    {
      field:'createdAt',
      headerName:'Order Created'
    }
    
  ]