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
    const [ currentColor, setCurrentColor ] = useState("#03c9d7");
    const [ currentMode, setCurrentMode ] = useState("Light");
    const [ themeSettings, setThemeSettings ] = useState(false);


    const setMode = (event) => {
        setCurrentMode(event.target.value);

        localStorage.setItem("themeMode", event.target.value);

        setThemeSettings(false);
    };

    const setColor = (color) => {
        setCurrentColor(color);

        localStorage.setItem("themeColor", color);

        setThemeSettings(false);
    }


    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]: true})
    }
    

    return (
        <StateContext.Provider 
        value={{activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick,
        screenSize, setScreenSize, currentColor, currentMode, setCurrentColor,
        setMode, setColor,
        setCurrentMode, themeSettings, setThemeSettings
        }}
        >
            {children}
        </StateContext.Provider>
    );
};

export default ContextProvider;
export const useStateContext = () => useContext(StateContext);