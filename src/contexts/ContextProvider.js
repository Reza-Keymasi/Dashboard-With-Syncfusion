import React, { useState, createContext, useContext } from 'react';

const StateContext = createContext()

const initialState = {
    chat: false,
    notification: false,
    cart: false,
    userProfile: false,
}


const ContextProvider = ({children}) => {

    const [ activeMenu, setActiveMenu ] = useState(true);
    const [ isClicked, setIsClicked ] = useState(initialState);
    const [ screenSize, setScreenSize ] = useState(undefined);


    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]: true})
    }
    

    return (
        <StateContext.Provider 
        value={{activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick,
        screenSize, setScreenSize
        }}
        >
            {children}
        </StateContext.Provider>
    );
};

export default ContextProvider;
export const useStateContext = () => useContext(StateContext);