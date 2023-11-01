import { useState } from "react";
import "../sytle/switchTheme.scss";

const SwitchTheme = () => {

    const [state , setState]= useState(true)

    const onChangeSwitchTheme = () => {
        setState(state => !state)
<<<<<<< HEAD
=======
        
>>>>>>> 9e0a57e93ecf6e3aa84b4764d1cc90882245479a
        if(state){
            document.documentElement.setAttribute("data-theme", "light");
        }else{
            document.documentElement.setAttribute("data-theme", "");
        }
    }

  return (
    <div className="wrapper" >
      <input type="checkbox" className="checkbox" id="checkbox" />
      <label for="checkbox" className="label" onClick={onChangeSwitchTheme}>
        <i className="fas fa-moon"  />
        <i className="fas fa-sun" />
        <div className="ball" />
      </label>
    </div>
  );
};
export default SwitchTheme;
