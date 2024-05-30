import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    loading: false,
    error: null
}

export const loadingContext = createContext(INITIAL_STATE)

const loadingReducer = (state, action)=>{
    switch(action.type){

        case 'LOADING':
            return{
                loading:true
            }
        case 'SUCCESS':
            return{
                loading:false
            }
        case 'ERROR':
            return{
                loading:false,
                error:action.payload
            }
        default: 
            return state
    }
}

export const LoadingContextProvider =({children})=>{

    const [state , dispatch] = useReducer(loadingReducer, INITIAL_STATE)

    return(
        <loadingContext.Provider value={{dispatch , error:state.error , loading:state.loading}}>
            {children}
        </loadingContext.Provider>
    )
}