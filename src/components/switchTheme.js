import { useState } from "react";
import "../sytle/switchTheme.scss";

const SwitchTheme = () => {

    const [state , setState]= useState(true)

    const onChangeSwitchTheme = () => {
        setState(state => !state)
        console.log("jeofeo")
        if(state){
            document.documentElement.setAttribute("data-theme", "light");
        }else{
            document.documentElement.setAttribute("data-theme", "");
        }
    }

  return (
    <div className="wrapper">
      <input type="checkbox" className="checkbox" id="checkbox" />
      <label for="checkbox" className="label">
        <i className="fas fa-moon" onClick={onChangeSwitchTheme} />
        <i className="fas fa-sun" onClick={onChangeSwitchTheme}/>
        <div className="ball" onClick={onChangeSwitchTheme}/>
      </label>
    </div>
  );
};
export default SwitchTheme;
