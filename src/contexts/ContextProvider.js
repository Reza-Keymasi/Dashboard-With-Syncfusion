import React, { useState, createContext, useContext } from 'react';

const StateContext = createContext()

const initialValues = {
    chat: false,
    notification: false,
    cart: false,
    userProfile: false,
}

const ContextProvider = ({children}) => {

    const [ activeMenu, setActiveMenu ] = useState(true);

    return (
        <StateContext.Provider value={{activeMenu, setActiveMenu}}>
            {children}
        </StateContext.Provider>
    );
};

export default ContextProvider;
export const useStateContext = () => useContext(StateContext);