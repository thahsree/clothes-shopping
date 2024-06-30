import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { authContext } from '../../context/AuthContexts';
import { dataContext } from '../../context/DataContext';
import usePrivateFetch from '../../hooks/usePrivateFetch';
import './addAddressInput.css';

function AddAddressInput({ setShowAddressInput }) {

    const [validatedState , setValidatedState] = useState('')
    const [validatedCity , setValidatedCity ] =useState('')
    const [validatedCountry , setValidatedCountry ] =useState('')

    const [address , setAddress] = useState({
        name:'',
        contactNumber:'',
        houseName:'',
        pincode:'',
        state:validatedState?validatedState:'',
        city:validatedCity?validatedCity:'',
        country:validatedCountry?validatedCountry:''
    })

    const {userData , dispatch} = useContext(dataContext);
    const {user} = useContext(authContext)

    const userID = user?.details?._id
    const {data , reFetch } = usePrivateFetch(`/users/${userID}`)

    const handleAddAddress = (e)=>{

        setAddress((prev)=>({
            ...prev,
            [e.target.id]:e.target.value
        }))
    }

    const handleCheckPinCode = async()=>{

             if(address.pincode){

                try {
                    
                    const response = await axios.get(`https://api.postalpincode.in/pincode/${address.pincode}`)

                    const postOfficeData = response.data[0].PostOffice[0];

                    setAddress((prevAddress) => ({
                        ...prevAddress,
                        state: postOfficeData.State || prevAddress.state,
                        city: postOfficeData.Block || prevAddress.city,
                        country: postOfficeData.Country || prevAddress.country
                    }));
                } catch (error) {
                }   
            }
    }

    const BASE_URL = import.meta.env.VITE_BASE_URL

    const handleSubmit = async()=>{
        
        if(
            !address.name ||
            !address.contactNumber ||
            !address.houseName ||
            !address.pincode ||
            !address.state ||
            !address.city ||
            !address.country 
        ){
            alert("Please add required fields")
            return 
        }

        const UserID = userData?.details?._id

        console.log(user?.accessToken);
        const response = await axios.post(BASE_URL+`/users/updateAddress/${UserID}`,address,{
            headers: {
                Authorization: `Bearer ${user?.accessToken}`
            }
        })
        reFetch()

        console.log(response);
        setShowAddressInput(false)

    }

    const prevAddress = userData?.details?.address

    useEffect(()=>{
        console.log(userData);
    },[])

    return (
        <div className='Main-Address'>
            
            <div className="top">
                <h3>ADD NEW ADDRESS</h3>
                <CloseIcon className='icon' onClick={() => setShowAddressInput(false)} />
            </div>
            {
                prevAddress?.length>0 &&
                <div className="prevAddress">
                    {prevAddress?.map((address,i)=> (
                        <div className="prevAddress_child" key={i}>
                            <p className='prevAddress_name'>{address.name}</p>
                            <p className='prevAddress_house'>{address?.houseName}, <span>{address?.city}</span></p>
                            <p className='prevAddress_country'><span>{address?.state},</span>{address?.country} <span>{address?.pincode}</span></p>
                            <p className='prevAddress_contact'> contact : <span>{address?.contactNumber}</span></p>
                        </div>
                    ))}
                </div>
            }
            <div className="middle">
                <h5>CONTACT DETAILS:</h5>

                <TextField 
                    id='name' 
                    label="Name*" 
                    variant="outlined"  
                    size="small"  
                    onChange={(e)=> handleAddAddress(e)}
                    InputLabelProps={{ 
                        sx: { fontSize: '0.8rem' } 
                    }}
                    InputProps={{ 
                        sx: { fontSize: '0.8rem' } 
                    }}
                />
                <TextField 
                    id="contactNumber" 
                    label="Number*" 
                    variant="outlined"  
                    size="small"  onChange={(e)=> handleAddAddress(e)}
                    InputLabelProps={{ 
                        sx: { fontSize: '0.8rem' } 
                    }}
                    InputProps={{ 
                        sx: { fontSize: '0.8rem' } 
                    }}    
                />
                    
            </div>
            <div className="middle">
                <h5>ADDRESS:</h5>
                <TextField 
                    id="pincode"
                    label="pincode*" 
                    variant="outlined"  
                    size="small" 
                    onBlur={handleCheckPinCode}
                    onChange={(e)=> handleAddAddress(e)}
                    InputLabelProps={{ 
                        sx: { fontSize: '0.8rem' } 
                    }}
                    InputProps={{ 
                        sx: { fontSize: '0.8rem' } 
                    }}
                />
                <TextField 
                    id="houseName"
                    label="Address (House No,Building,Street,Area)*" 
                    variant="outlined"  
                    size="small" 
                    onChange={(e)=> handleAddAddress(e)}
                    InputLabelProps={{ 
                        sx: { fontSize: '0.8rem' } 
                    }}
                    InputProps={{ 
                        sx: { fontSize: '0.8rem' } 
                    }}
                />
                    

                <div className="stateanddistrict"> 
                    <TextField 
                        id="city" 
                        label="City/District*" 
                        variant="outlined" 
                        value={address.city}  
                        size="small" 
                        onChange={(e)=> handleAddAddress(e)}
                        InputLabelProps={{ 
                            sx: { fontSize: '0.8rem' } 
                        }}
                        InputProps={{ 
                            sx: { fontSize: '0.8rem' } 
                        }}    
                    />
                    <TextField 
                        id="state" 
                        label="State*" 
                        variant="outlined"  
                        size="small" 
                        value={address.state} 
                        onChange={(e)=> handleAddAddress(e)}
                        InputLabelProps={{ 
                            sx: { fontSize: '0.8rem' } 
                        }}
                        InputProps={{ 
                            sx: { fontSize: '0.8rem' } 
                        }}
                    />
                </div>
                <TextField 
                    id="country" 
                    label="Country*" 
                    variant="outlined"  
                    size="small" 
                    value={address.country} 
                    onChange={(e)=> handleAddAddress(e)}
                    InputLabelProps={{ 
                        sx: { fontSize: '0.8rem' } 
                    }}
                    InputProps={{ 
                        sx: { fontSize: '0.8rem' } 
                    }}
                />
            </div>
            <div className="bottom">
                <button onClick={handleSubmit}>ADD ADDRESS</button>
            </div>
        </div>
    );
}

export default AddAddressInput;