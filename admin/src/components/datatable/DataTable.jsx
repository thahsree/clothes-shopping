import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';

function DataTable({columns}) {


    const buyersRows = [
        { _id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
        { _id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
        { _id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
        { _id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
        { _id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { _id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { _id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { _id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { _id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];

    const actionColumn = [{
        field: 'Action',
        headerName: 'Action',
        width: 200,
        sortable:false,
        renderCell: (params) => {
            return (
                <div className='cellAction'>
                  
                        <button className="viewButton">View</button>
                    
                    <button className="deleteButton" onClick={() => handleDelete(params.row._id)}>Delete</button>
                </div>
            );
        }
    }];

    return (
        <div>
            <Box sx={{ height: "max-Content", width: '100%' }}>
                <DataGrid
                    rows={buyersRows}
                    columns={columns.concat(actionColumn)}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 9,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    getRowId={row => row._id}
                    disableRowSelectionOnClick
                />
            </Box>
        </div>
    );
}

export default DataTable;