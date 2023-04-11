import React from 'react';

function clickMe(text) {
  alert(text);
}

export default function Card(props){
    function clickMe() {
    alert(props.description);
    }
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    }
    return (
        <div className="card">
            <div className="image">
                {badgeText && <div className="card--badge">{badgeText}</div>}
                <img className="card-img" src={`../images/${props.img}`} />
            </div>
            <h3> {props.title} </h3>
            <div className="stats">
                <img src="../images/star.png" />
                <p> {props.stats.rating}/5 ({props.stats.reviewCount})</p>         
            </div>
            <h4> {props.price}$ </h4>
            {props.openSpots != 0 && <button className="button-53" onClick={clickMe}>Learn</button>}
        </div>
    )
}