import React from "react";

import styleCard from './css/card.module.css'


export default (props) => {

    
    return (

        <div className={styleCard.card}>

            {props.children}
            
        </div>

    )

}