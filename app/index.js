import React from 'react'
import ReactDOM from 'react-dom'


// This is a stateless functional component
let User = function(props) {
    return (
        <div className="user">
            <div>Name: {props.name}</div>
        </div>
    );
}


let App = React.createClass( {
    getInitialState: function() {
        return {
            users: []
        }
    },
    componentDidMount: function() {

    },
    render: function() {
        return (
            <div>
                <h1>Star Wars Characters:</h1>
                <User name="Luke Skywalker" />
                <User name="Darth Vader" />
            </div>
        )
    }
})

ReactDOM.render(<App />, document.getElementById("root"));