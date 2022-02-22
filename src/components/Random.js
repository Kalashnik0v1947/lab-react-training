import React from "react";


const Random = (props) => {
    const {min, max} = props;
    const randomNumber = Math.floor(Math.random() * (max-min))

    return (
        <div className="Random">
            <p>Random values between {min} and {max} = {">"} {randomNumber}</p>
        </div>
    )

};


export default Random; 