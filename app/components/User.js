import React from 'react'
import { Link } from 'react-router'

// This is a stateless functional component
let User = function(props) {
    return (
        <div className="user">
            <div>Name: <Link to={"/profile/" + props.id}>{props.name}</Link></div>
        </div>
    );
}

export default User