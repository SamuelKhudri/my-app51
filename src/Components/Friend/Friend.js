import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'
const Friend = (props) => {
    const { id, name, website, address, phone } = props.friend
    const url = `/friend/${id}`;

    return (
        <div className="friend-container">
            <h2>name:{name} {id}</h2>
            <h4>web:{website}</h4>
            <p>address:{address.city}</p>
            <p>phn:{phone}</p>
            <Link to={url}>Visit Here</Link>
        </div>
    );
};

export default Friend;