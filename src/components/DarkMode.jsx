import React from 'react'
import DarkLight from '../assets/dark-mode-button.png';
import LightMode from '../assets/light-mode-button.png';
const DarkMode = () => {

    const[theme,setTheme]=React.useState(
        localStorage.getItem("theme")?
        localStorage.getItem("theme"):"light"
    );
    const element=document.documentElement;
    React.useEffect(()=>{
        if(theme==="dark"){
            element.classList.add("dark");
            localStorage.setItem("theme","dark");
        }else{
            element.classList.remove("dark");
            localStorage.setItem("theme","light");
        }
    },[theme]);
    const changeTheme=()=>{
        if (theme==="light"){
            setTheme("dark");

        }else{
            setTheme("light");
        }
    }
  return (
    <div>
      <div className='flex relative' >
        <img src={DarkLight} alt=""
        onClick={changeTheme}
        className={`w-12  absolute z-10 right-0
        cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
        transition-all duration-300 
        ${theme !=="dark"? "opacity-0" :"opacity-100"}`}/>
        
        <img src={LightMode} alt=""
        onClick={changeTheme}
        className='w-12 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
        transition-all duration-300'/>
       
        
      </div>
    </div>
  )
}

export default DarkMode
