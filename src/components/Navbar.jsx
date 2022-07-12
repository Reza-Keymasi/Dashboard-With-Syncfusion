import React, {useEffect} from 'react'
import { AiOutlineMenu } from "react-icons/ai"
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

import{ TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../data/avatar.jpg";

// components
import { Chat, Cart, Notification, UserProfile } from "./Index.jsx"

// Contexts
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} posisiton="ButtomCenter">
    <button type="button" onClick={customFunc}
    style= {{ color }}
    className="relative text-xl rounded-full p-3
    hover:bg-light-gray"
    >

    <span style={{ background: dotColor }}
    className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
    />
    {icon}

    </button>
  </TooltipComponent>
)

const Navbar = () => {

  const { activeMenu, setActiveMenu, isClicked, setIsClicked,
  handleClick,screenSize, setScreenSize, currentColor} = useStateContext();

// This useEffects are for control the open and close state of sidebar when user works with small screen
// but it needs a reload
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);

  }, []);

  useEffect(() => {
    if(screenSize <= 900){
      setActiveMenu(false);
    }else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
        <NavButton title="Menu" customFunc={() => 
        setActiveMenu((prevActiveMenu) => (!prevActiveMenu))}
        color={currentColor} icon={<AiOutlineMenu />} />

        <div className="flex">
          <NavButton title="Cart" customFunc={() => handleClick("cart")}
          color={currentColor} icon={<FiShoppingCart />} />
        </div>

        <div className="flex">
          <NavButton title="Chat" customFunc={() => handleClick("chat")}
          color={currentColor} dotColor="#09c9d7" icon={<BsChatLeft />} />
        </div>

        <div className="flex">
          <NavButton title="Notification" customFunc={() => handleClick("notification")}
          color={currentColor} dotColor="#09c9d7" icon={<RiNotification3Line />} />
        </div>

        <TooltipComponent content="Profile" position="BottomCenter">
          <div className="flex items-center gap-2 cursor-pointer
          p-1 hover:bg-light-gray rounded-lg "
          onClick={() => handleClick("userProfile")}
          >
            <img src={avatar} className="rounded-full w-10 h-10"
            alt="avatar" /> 
            <p>
              <span className="text-gray-400 text-14">Hi,</span> {' '}
              <span className="text-gray-400 font-bold ml-1 text-14">Ammy</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />

          </div>
        </TooltipComponent>

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}

    </div>
    
  )
}

export default Navbar