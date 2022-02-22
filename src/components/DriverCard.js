import React from "react";

const DriverCard =(props) => {

    function star() {
        const rating = Math.round(props.rating);
        let score = '';

        for(let i =0; i<5; i++) {
            if (i<rating) {
                score += '★';
            } else score += '☆';
        }
        return score;
    }

    return (
        <div className="DriverCard" style={{backgroundColor: "#455EB5"}}>
            <p>{props.name}</p>
            <p> {star()}</p>
            <img style={{height: "75px", width: "75px", borderRadius: "50%"}} src={props.img} alt={props.name}></img>
            <p>{props.car.model} - {props.car.licensePlate}</p>
        </div>
    )
};

export default DriverCard;