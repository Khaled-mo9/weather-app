import React from "react";
import './Form.css'

const WeatherItems = (props) => {
    const { items } = props;
    const visible = props;
    console.log(items.error);

    return (
        <div>
            {items.error && <p>{items.error}</p>}
            {items.city && <div>
                <p>Location:<span> {items.city}, {items.country}</span></p>
                <p>Temperature:<span> {items.Temperature}</span></p>
                <p>Humidity:<span> {items.Humidity}</span></p>
                <p>Description:<span> {items.description}</span></p>
            </div>}
            {visible && <div>
                <p>No Data To Show</p>
            </div>}
        </div>
    );
}

export default WeatherItems