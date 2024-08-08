import { createContext, useReducer } from 'react';

const INITIAL_STATE = {
    recommended: true,
    highToLow: false,
    lowToHigh: false,
    whatsNew: false,
    popularity: false,
    customerRating: false,
    betterDiscount: false
}

export const productLoadingContext = createContext(INITIAL_STATE);

const productLoadingReducer = (state, action) => {

    switch (action.type) {
        case 'recommended':
            return {
                recommended: true,
                highToLow: false,
                lowToHigh: false,
                whatsNew: false,
                popularity: false,
                customerRating: false,
                betterDiscount: false
            }
        case 'highToLow':
            return {
                recommended: false,
                highToLow: true,
                lowToHigh: false,
                whatsNew: false,
                popularity: false,
                customerRating: false,
                betterDiscount: false
            }
        case 'lowToHigh':
            return {
                recommended: false,
                highToLow: false,
                lowToHigh: true,
                whatsNew: false,
                popularity: false,
                customerRating: false,
                betterDiscount: false
            }
        case 'whatsNew':
            return {
                recommended: false,
                highToLow: false,
                lowToHigh: false,
                whatsNew: true,
                popularity: false,
                customerRating: false,
                betterDiscount: false
            }
        case 'popularity':
            return {
                recommended: false,
                highToLow: false,
                lowToHigh: false,
                whatsNew: false,
                popularity: true,
                customerRating: false,
                betterDiscount: false
            }
        case 'customerRating':
            return {
                recommended: false,
                highToLow: false,
                lowToHigh: false,
                whatsNew: false,
                popularity: false,
                customerRating: true,
                betterDiscount: false
            }
        case 'betterDiscount':
            return {
                recommended: false,
                highToLow: false,
                lowToHigh: false,
                whatsNew: false,
                popularity: false,
                customerRating: false,
                betterDiscount: true
            }
        default:
            return state

    }
}


export const ProductLoadingContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(productLoadingReducer, INITIAL_STATE);

    return (
        < productLoadingContext.Provider value={{state ,dispatch }}>
                {children}
        </ productLoadingContext.Provider>
    )
}