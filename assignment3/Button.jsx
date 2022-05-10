import React from "react";

export const Button = ({children, type, onClick}) => {
    return(
        <button onClick={onClick} type={type}>
            {children}
        </button>
    )
}
