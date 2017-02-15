import React from 'react'

// This is a stateless functional component
let User = function(props) {
    return (
        <div className="user">
            <div>Name: {props.name}</div>
        </div>
    );
}

export default User