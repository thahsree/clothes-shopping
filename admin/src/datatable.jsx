export const userColumns = [
    { field: '_id', headerName: 'ID', width: 90 },
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
      type: 'number',
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
    { field: '_id', headerName: 'ID', width: 90 },
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
      field: 'category',
      headerName: 'CATEGORY',
      width: 110,
      editable: false,
      sortable:false
    },
    {
      field: 'availableStock',
      headerName: 'STOCK',
      width: 110,
      editable: false,
      sortable:false
      
    }
  ];