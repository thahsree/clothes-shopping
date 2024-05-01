import NavBar from '../../components/NavBar/NavBar';
import SideBar from '../../components/SideNav/SideBar';
import AddForm from '../../components/addform/AddForm';
import './addproduct.css';

function AddProduct(props) {
    return (
        <div className='addProduct'>
            <SideBar/>

            <div className="addProductContainer">
                <NavBar/>
                <AddForm/>
            </div>
        </div>
    );
}

export default AddProduct;