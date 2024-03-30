import React from "react";
import './styles.css';

function Input({label}) {
    return (
        <label className="input">
             {label}
             <input type="text" className="styled-input" />
        </label>
       
    )

}

export default Input

