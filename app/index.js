import React from 'react'
import ReactDOM from 'react-dom'

let User = React.createClass({
    render: function() {
        let twitter = (this.props.twitter) ? (this.renderTwitter(this.props.twitter)) : null;
        return (<div>{this.props.name} : {twitter}</div>)
    },
    renderTwitter: function(twitter) {
        return (<a href={'http://www.twitter.com/' + twitter} >Twitter</a>)
    }
})


let App = React.createClass( {
    render: function() {
        return (
            <div>
                <h1>User List</h1>
                <User name="User 1" twitter="handle1"/>
                <User name="User 2"/>
            </div>
        )
    }
})

ReactDOM.render(<App />, document.getElementById("root"));