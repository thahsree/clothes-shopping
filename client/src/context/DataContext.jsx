import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
    userData: JSON.parse(localStorage.getItem('UserData')) || null,
    loading: false,
    error: null
}

export const dataContext = createContext(INITIAL_STATE)

const dataReducer = (state, action) => {

    switch (action.type) {


        case 'FETCH_START':
            return {
                userData: null,
                loading: true,
                error: null
            }
        case 'FETCH_SUCCESS':
            return {
                userData: action.payload,
                loading: false,
                error: null
            }
        case 'FETCH_FAILED':
            return {
                userData: null,
                loading: false,
                error: action.payload
            }
        case 'CLEAR_DATA':
            return {
                userData: null,
                loading: false,
                error: null
            }
        default:
            return state

    }
}

export const DataContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(dataReducer, INITIAL_STATE)

    useEffect(() => {

        localStorage.setItem('UserData', JSON.stringify(state.userData))

    }, [state.userData])

    return (

        <dataContext.Provider value={{ userData: state.userData, loading: state.loading, error: state.error, dispatch }}>
            {children}
        </dataContext.Provider>
    )
}