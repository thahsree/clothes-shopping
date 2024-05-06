import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
    
    admin:JSON.parse(localStorage.getItem('PersistLogin'))||null,
    loading:false,
    error:null
}

export const authContext = createContext(INITIAL_STATE)


const authReducer = (state,action)=>{

   
    switch(action.type){

        case 'LOGIN_START':
            return {
                admin:null,
                loading:true,
                error:null
            }
        case 'LOGIN_SUCCESS':
            return{
                admin:action.payload,
                loading:false,
                error:null
            }
        case 'LOGIN_FAILED':
            return{
                admin:null,
                loading:false,
                error:action.payload
            }
        case 'LOGOUT':
            return{
                admin:null,
                loading:false,
                error:null
            }
        default:
            return state
    }
}

export const AuthContextProvider = ({children})=>{

   const [state, dispatch] = useReducer(authReducer,INITIAL_STATE);

   useEffect(()=>{

    localStorage.setItem('PersistLogin',JSON.stringify(state.admin))

   },[state.admin])
   return(

        <authContext.Provider value={{admin:state.admin , loading:state.loading , error:state.error ,dispatch}}>
            {children}
        </authContext.Provider>
   )
}