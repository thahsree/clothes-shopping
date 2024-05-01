import NavBar from '../../components/NavBar/NavBar';
import SideBar from '../../components/SideNav/SideBar';
import DataTable from '../../components/datatable/DataTable';
import './list.css';

function List({columns}) {
    return (
        <div className='list'>
            <SideBar/>
            <div className="listContainer">
                <NavBar/>
                <DataTable columns={columns}/>
            </div>
        </div>
    );
}

export default List;