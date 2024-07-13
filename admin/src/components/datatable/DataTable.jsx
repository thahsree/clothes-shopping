import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import useFetch from '../../hooks/useFetch';
import OrderUpdate from '../../pages/OrderUpdate/OrderUpdate';
import './datatable.css';
function DataTable({ columns }) {


    const location = useLocation()
    const navigate = useNavigate()
    const path = location.pathname.split('/')[1]

    const BASE_URL = import.meta.env.VITE_BASE_URL

    const [showOptions, setShowOptions] = useState(false)
    const [selectedID, setSelectedID] = useState()

    let url;
    if (path === 'buyers') {
        url = BASE_URL + '/users'
    } else if (path === 'products') {
        url = BASE_URL + '/items'
    } else if (path === 'orders') {
        url = BASE_URL + '/orders'
    }
    const { data, loading, error, reFetch } = useFetch(url)


    const [list, setList] = useState([])


    useEffect(() => {
        setList(data)
    }, [data])

    const cookies = new Cookies()
    const user = cookies.get('accessToken')


    const handleDelete = async (id) => {
        console.log('id', id);

        console.log(path);
        if (path === 'products') {
            const response = await axios.delete(`${BASE_URL}/items/${id}`, {
                headers: {
                    Authorization: user ? `Bearer ${user}` : ''
                }
            })

            navigate('/products')

        } else if (path === 'buyers') {
            const response = await axios.delete(`${BASE_URL}/users/${id}`, {
                headers: {
                    Authorization: user ? `Bearer ${user}` : ''
                }
            })


            navigate('/buyers')
        }

    }

    const isOrderPage = path === 'orders'

    const actionColumn = [{
        field: 'Action',
        headerName: 'Action',
        width: 200,
        sortable: false,
        renderCell: (params) => {
            return (
                <div className='cellAction' key={params._id}>

                    <button className="viewButton" onClick={() => {
                        if (path === 'products') {
                            navigate(`/update-products/${params.row._id}`);
                        } else if (path === 'orders') {
                            setSelectedID(params.row.orderID);
                            setShowOptions(true);
                        }
                    }}>
                        {path === 'products' ? 'Update' : path === 'buyers' ? 'View' : 'Update Status'}
                    </button>

                    {
                        !isOrderPage && <button className="deleteButton" onClick={() => handleDelete(params.row._id)}>Delete</button>
                    }
                </div>
            );
        }
    }];

    useEffect(()=>{

        console.log(selectedID);
    },[selectedID])

    return (
        <div className='dataTable-main'>
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
            {
                showOptions && <OrderUpdate />
            }
        </div>
    );
}

export default DataTable;