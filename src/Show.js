import React, { Component } from 'react';

const ShowDetail = (props) => {

    return (
        <div className="show-detail">
        <h3>{props.show.venue}</h3>
        <p>{props.show.band} <b>{props.show.date}</b></p>
        <br></br>
        </div>
    )
}

export default ShowDetail