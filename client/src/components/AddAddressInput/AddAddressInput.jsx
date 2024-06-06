import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useContext, useState } from 'react';
import { dataContext } from '../../context/DataContext';
import './addAddressInput.css';
function AddAddressInput({ setShowAddressInput }) {

    const [validatedState , setValidatedState] = useState('')
    const [validatedCity , setValidatedCity ] =useState('')
    const [validatedCountry , setValidatedCountry ] =useState('')

    const [address , setAddress] = useState({
        name:'',
        contactNumber:'',
        address:'',
        pincode:'',
        state:validatedState?validatedState:'',
        city:validatedCity?validatedCity:'',
        country:validatedCountry?validatedCountry:''
    })

    const {userData , dispatch} = useContext(dataContext);



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

    const handleSubmit = ()=>{
        
        if(
            !address.name ||
            !address.contactNumber ||
            !address.address ||
            !address.pincode ||
            !address.state ||
            !address.city ||
            !address.country 
        ){
            alert("Please add required fields")
            return 
        }

        console.log(address);
        dispatch({type:'ADD_ADDRESS',payload:address})
        setShowAddressInput(false)

    }
    return (
        <div className='Main-Address'>
            <div className="top">
                <h3>ADD NEW ADDRESS</h3>
                <CloseIcon className='icon' onClick={() => setShowAddressInput(false)} />
            </div>
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
                    id="address" 
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