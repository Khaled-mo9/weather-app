import React, { Component } from "react";
import './Weather.css'
const AddItems = (props) => {

    return (
        <div>
            <form onSubmit={props.getWeather}>
                <input type={'text'} placeholder="City" name="city" />
                <input type={'text'} placeholder="Country" name="country" />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddItems