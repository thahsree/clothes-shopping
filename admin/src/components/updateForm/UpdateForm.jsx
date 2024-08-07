import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import './updateform.css';


const BASE_URL = import.meta.env.VITE_BASE_URL

function UpdateForm(id) {


    

    const base_url = import.meta.env.VITE_BASE_URL
    const [data , setData] = useState()

    const fetchData = async()=>{

        try {
            console.log(id);
            const response = await axios.get(`${base_url}/items/${id.id}`)

            setData(response.data)
            
        } catch (error) {
            console.log(error);
        }
    }


    const [details, setDetails] = useState({
        productDetails: [],
        sizeAndFit: [],
        name: "",
        brandName: "",
        price: 0,
        offerPrice: 0,
        gender: "",
        materialAndCare: [],
        categories: [],
        availableStock: {
            S: '',
            M: '',
            L: '',
            XL: '',
            XXL: ''
        }
    })

    

    useEffect(() => {
        console.log(data);
        if (data) {
            setDetails({
                images:data?.images || [],
                productDetails: data?.productDetails || [],
                sizeAndFit: data?.sizeAndFit || [],
                name: data?.name || "",
                brandName: data?.brandName || "",
                price: data?.price || null,
                offerPrice: data?.offerPrice || null,
                gender: data?.gender || "",
                materialAndCare: data?.materialAndCare || [],
                categories: data?.categories || [],
                availableStock: {
                    S: data?.availableStock.S,
                    M: data?.availableStock.M,
                    L: data?.availableStock.L,
                    XL: data?.availableStock.XL,
                    XXL: data?.availableStock.XXL
                }
            });
        }
    }, [data]);

    useEffect(()=>{

        fetchData()
      
    },[])

    
    const [files, setFiles] = useState('')

    const [productInput, setProductInput] = useState('')
    const [fitDetails, setFitDetails] = useState('')
    const [categories, setCategories] = useState('')
    const [materialDetails, setMaterialDetails] = useState('')


    const navigate = useNavigate()

    const onChangeData = (e, key) => {
        setDetails({
            ...details,
            [key]: e.target.value
        })
    }

    const onChangeStock = (e, size) => {
        const newStock = { ...details.availableStock, [size]: e.target.value }
        setDetails(prevState => ({ ...prevState, availableStock: newStock }))
    }

    const addDatas = (section) => {
        switch (section) {
            case 'productDetails':
                if (productInput === '') {
                    return
                }
                setDetails(prevState => {
                    const updatedProductInput = [...prevState.productDetails, productInput];
                    return { ...prevState, productDetails: updatedProductInput };
                });
                setProductInput('');
                break;
            case 'sizeAndFit':
                if (fitDetails === '') {
                    return
                }
                setDetails(prevState => {
                    const updatedSizeAndFit = [...prevState.sizeAndFit, fitDetails];
                    return { ...prevState, sizeAndFit: updatedSizeAndFit };
                });
                setFitDetails('');
                break;

            case 'categories':
                if (categories === '') {
                    return
                }
                setDetails(prevState => {
                    const updatedCategories = [...prevState.categories, categories];
                    return { ...prevState, categories: updatedCategories };
                });
                setCategories('');
                break;
            case 'materialAndCare':
                if (materialDetails === '') {
                    return
                }
                setDetails(prevState => {
                    const updatedMaterial = [...prevState.materialAndCare, materialDetails];
                    return { ...prevState, materialAndCare: updatedMaterial };
                });
                setMaterialDetails('');
                break;
            default:
                break;
        }
    }

    const deleteItem = (section, i) => {
        const newDetails = details[section].filter((item, index) => index !== i);
        setDetails({ ...details, [section]: newDetails });
    }

    const formSubmit = async (e) => {
        e.preventDefault()
        try {
            const list = await Promise.all(
                Object.values(files).map(async (file) => {
                    const data = new FormData()
                    data.append("file", file)
                    data.append("upload_preset", "upload")

                    const upload = await axios.post('https://api.cloudinary.com/v1_1/db17ho8ub/image/upload', data)

                    const { url } = upload.data
                    return url
                })
            )

            const newDetails = {
                ...details,
                images: [...details.images,...list]

            }

            const cookies = new Cookies()

            const user = cookies.get('accessToken')
            
            console.log('====================================');
            console.log(JSON.stringify(user));
            console.log('====================================');
            await axios.put(`${BASE_URL}/items/${id.id}`, newDetails, {
                headers: {
                    Authorization: user?`Bearer ${user}` : ''
                }
            })

            navigate('/products')

        } catch (error) {
            console.log(error);
        }


    }


    return (

        <div className='add-form'>
            <div className="heading">
                <h3>UPDATE Product</h3>
                <button onClick={formSubmit}>Save</button>
            </div>
            <div className="sections">
                <section className="basicInfo">
                    <div className="details">
                        <h4>Basic Information</h4>
                        {
                                <div className="addFormImages">
                                    {data?.images?.map((item,i)=>(
                                        <div className="addFormImage" key={i}>
                                            <img src={item} alt="" width='50px' height='50px'/>
                                        </div>
                                    ))}
                                </div>
                            }
                        <div className="imageInput">
                            <p>Add Images:</p>
                            <input
                                type="file"
                                multiple
                                onChange={(e) => setFiles(e.target.files)}
                            />
                        </div>
                        <div className="large-input">
                            <h5>Display Name</h5>
                            <div className="input">
                                <input value={details?.name} type="text" onChange={(e) => onChangeData(e, "name")} />
                            </div>
                        </div>
                        <div className="large-input">
                            <h5>Brand Name</h5>
                            <div className="input">
                                <input value={details?.brandName} type="text" onChange={(e) => onChangeData(e, "brandName")} />
                            </div>
                        </div>
                        <div className="adding-input">
                            <h5>Product Details</h5>
                            <div className="actions">
                                <div className="input">
                                    <input type="text" value={productInput} onChange={(e) => setProductInput(e.target.value)} />

                                </div>
                                <button onClick={() => addDatas('productDetails')}>Add</button>
                            </div>
                            {
                                details?.productDetails.map((value, i) => (
                                    <div className="detailsDisplay" key={i}>
                                        <p key={i} className='value'>{value}</p>
                                        <DeleteOutlineOutlinedIcon className='delete' onClick={() => deleteItem('productDetails', i)} />
                                    </div>
                                ))
                            }
                            
                        </div>
                        <div className="adding-input">
                            <h5>Size And Fit</h5>
                            <div className="actions">
                                <div className="input">
                                    <input type="text" value={fitDetails} onChange={(e) => setFitDetails(e.target.value)} />

                                </div>
                                <button onClick={() => addDatas('sizeAndFit')}>Add</button>
                            </div>
                            {
                                details?.sizeAndFit.map((value, i) => (
                                    <div className="detailsDisplay" key={i}>
                                        <p key={i} className='value'>{value}</p>
                                        <DeleteOutlineOutlinedIcon className='delete' onClick={() => deleteItem('sizeAndFit', i)} />
                                    </div>
                                ))
                            }
                        </div>
                        <div className="adding-input">
                            <h5>Categories</h5>
                            <div className="actions">
                                <div className="input">
                                    <input type="text" value={categories} onChange={(e) => setCategories(e.target.value)} />

                                </div>
                                <button onClick={() => addDatas('categories')}>Add</button>
                            </div>
                            {
                                details?.categories.map((value, i) => (
                                    <div className="detailsDisplay" key={i}>
                                        <p key={i} className='value'>{value}</p>
                                        <DeleteOutlineOutlinedIcon className='delete' onClick={() => deleteItem('categories', i)} />
                                    </div>
                                ))
                            }
                        </div>
                        <div className="adding-input">
                            <h5>Material And Care</h5>
                            <div className="actions">
                                <div className="input">
                                    <input type="text" value={materialDetails} onChange={(e) => setMaterialDetails(e.target.value)} />

                                </div>
                                <button onClick={() => addDatas('materialAndCare')}>Add</button>
                            </div>
                            {
                                details?.materialAndCare.map((value, i) => (
                                    <div className="detailsDisplay" key={i}>
                                        <p key={i} className='value'>{value}</p>
                                        <DeleteOutlineOutlinedIcon className='delete' onClick={() => deleteItem('materialAndCare', i)} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
                <section className="otherInfo">
                    <div className="details">
                        <h4>Other Information</h4>
                        <div className="small-input">
                            <h5>Pricing</h5>
                            <div className="inputs">
                                <div className="inputSection">
                                    <h6>Price</h6>
                                    <div className="input">
                                        <input value={details?.price} type="number" onChange={(e) => onChangeData(e, 'price')} />
                                    </div>
                                </div>
                                <div className="inputSection">
                                    <h6>Offer Price</h6>
                                    <div className="input">
                                        <input value={details?.offerPrice} type="number" onChange={(e) => onChangeData(e, 'offerPrice')} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="small-input">
                            <h5>Gender</h5>
                            <div className="gender-input">
                                <p>male</p>
                                <input type="radio" value='male' name='gender' onChange={(e) => onChangeData(e, 'gender')} />
                            </div>
                            <div className="gender-input">
                                <p>female</p>
                                <input type="radio" value='female' name='gender' onChange={(e) => onChangeData(e, 'gender')} />
                            </div>
                        </div>
                        <hr />
                        <div className="small-input">
                            <h5>Sizes and Stock</h5>
                            <div className="inputField">
                                <p>S:</p>
                                <div className="input">
                                    <input value={details?.availableStock.S} type="number" placeholder='stock' onChange={(e) => onChangeStock(e, 'S')} />
                                </div>
                            </div>
                            <div className="inputField">
                                <p>M:</p>
                                <div className="input">
                                    <input value={details?.availableStock.M} type="number" placeholder='stock' onChange={(e) => onChangeStock(e, 'M')} />
                                </div>
                            </div>
                            <div className="inputField">
                                <p>L:</p>
                                <div className="input">
                                    <input value={details?.availableStock.L} type="number" placeholder='stock' onChange={(e) => onChangeStock(e, 'L')} />
                                </div>
                            </div>
                            <div className="inputField">
                                <p>XL:</p>
                                <div className="input">
                                    <input value={details?.availableStock.XL} type="number" placeholder='stock' onChange={(e) => onChangeStock(e, 'XL')} />
                                </div>
                            </div>
                            <div className="inputField">
                                <p>XXL:</p>
                                <div className="input">
                                    <input value={details?.availableStock.XXL} type="number" placeholder='stock' onChange={(e) => onChangeStock(e, 'XXL')} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default UpdateForm;