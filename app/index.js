// let React = require("react");
// let ReactDOM = require("react-dom");

import React from 'react'
import ReactDOM from 'react-dom'

let App = React.createClass( {
    render: function() {
        return <h1>Hello World 2</h1>
    }
})

ReactDOM.render(<App />, document.getElementById("root"));