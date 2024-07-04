import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import SideBar from '../../components/SideNav/SideBar';
import UpdateForm from '../../components/updateForm/UpdateForm';
import './updateproduct.css';

function UpdateProduct(props) {

    const id = useParams()
    return (
        <div className='addProduct'>
            <SideBar />

            <div className="addProductContainer">
                <NavBar />
                <UpdateForm id={id.id}/>
            </div>
        </div>
    );
}

export default UpdateProduct;