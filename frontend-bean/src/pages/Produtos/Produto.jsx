import React from "react";
import "./produto.css";
import Card from "./Card";

function Produto(){
    return(
    <div className="produtos">
     <div className="icon-container user-icon">
       <i className="fa-solid fa-user-circle" style={{fontSize: 30}}></i>
    </div>
    <div className="icon-container notification-icon">
       <i className="fa-solid fa-bell" style={{fontSize: 30}}></i>
    </div>
        <Card>           
        </Card>
    </div>
    );
}

export default Produto;