import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
function DataTable({columns}) {


    const location = useLocation()
    const path = location.pathname.split('/')[1]

    const BASE_URL = import.meta.env.VITE_BASE_URL

    let url;
    if(path === 'buyers'){
        url = BASE_URL+'/users'
    }else{
        url = BASE_URL+'/items'
    }
    const {data , loading , error , reFetch} = useFetch(url)
    

    const [list , setList] = useState([])

    useEffect(()=>{
        setList(data)
    })
    

    const handleDelete = async(id)=>{
        console.log('id',id);

        const response = await axios.delete(url)
    }

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
                    rows={list}
                    columns={columns.concat(actionColumn)}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 8,
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