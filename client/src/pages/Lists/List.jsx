import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Collections from '../../components/Collections/Collections';
import Crumps from '../../components/Crumps/Crumps';
import FilterSection from '../../components/Filter/FilterSection';
import { modeContext } from '../../context/DarkMode';
import { productLoadingContext } from '../../context/ProductLoadingContext';
import './list.css';

function List(props) {

    const [showOptions, setShowOptions] = useState(false);
    const [showSize, setShowSize] = useState(false)

    const { state, dispatch } = useContext(productLoadingContext)

    const handleActive = (state) => {
        setShowOptions(state)
    }
    const location = useLocation()


    const options = [
        "Recommended",
        "What's New",
        "Better Discount",
        "High to Low",
        "Low to High",
    ]

    const size = [
        "XXS",
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "XXL",
        "XXXL",
    ]

    const [sort, setSort] = useState(options[0])

    const handleSelect = async (option) => {
        setSort(option)

        setShowOptions(false);
        switch (option) {

            case 'Recommended':
                dispatch({ type: 'recommended' });
                break;

            case "What's New":
                dispatch({type: 'whatsNew'});
                break;

            case "High to Low":
                dispatch({type :"highToLow"});
                break;

            case "Low to High":
                dispatch({type:'lowToHigh'});
                break;

            case "Better Discount":
                dispatch({type:'betterDiscount'});
                break;
            
            default:
                break;
        }



    }
    const showSizeOptions = (option) => {
        setShowSize(option)
    }

    useEffect(() => {
        console.log('location', location);
    })
    const { darkMode } = useContext(modeContext)

    const category = location.state?.catogory?.toUpperCase()
    return (

        <div className={darkMode ? 'lists dark' : 'lists'}>
            <div className="breadCrumbs">
                <Crumps category={category} data={location?.state?.data} subData={location?.state?.subData} />
                <p>{category} {location?.state?.subData} <span>(1123 items)</span></p>
            </div>
            <div className="filters">
                <div className="items">
                    <p className='pHead'>FILTERS</p>
                </div>
                <div className="sort" onMouseEnter={() => handleActive(true)} onMouseLeave={() => handleActive(false)}>
                    <div className="customSelect">
                        <p>Sort by:</p>
                        <div className="selectedOptions">{sort}</div>
                        <KeyboardArrowDownIcon className='icon' />
                    </div>
                    {
                        showOptions && (
                            <div className="options">
                                {
                                    options?.map((option) => (
                                        <div
                                            className={option === sort ? "option selected" : "option"}
                                            key={option}
                                            onClick={() => handleSelect(option)}

                                        >{option}</div>
                                    ))
                                }
                            </div>
                        )
                    }
                </div>

            </div>
            <div className="content">
                <section className="filterItems">
                    <FilterSection />
                </section>
                <section className="collections">
                    <Collections />
                </section>
            </div>
        </div>

    );
}

export default List;