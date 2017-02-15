import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { Router, Route, browserHistory, Link } from 'react-router'

// This is a stateless functional component
let User = function(props) {
    return (
        <div className="user">
            <div>Name: {props.name}</div>
        </div>
    );
}


let Users = React.createClass( {
    getInitialState: function() {
        return {
            users: []
        }
    },
    componentDidMount: function() {
        axios.get('http://swapi.co/api/people/').then(results => {
            this.setState({
                users: results.data.results
            });
        });
    },
    render: function() {
        return (
            <div>
                <h1>Star Wars Characters:</h1>
                    <Link to="/other">Other</Link>
                {
                    this.state.users.map(function(obj) {
                        return <User name={obj.name} key={obj.name} />;
                    })
                }
            </div>
        )
    }
})

let Other = () => {
    return <div>Other</div>
}

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={Users} />
        <Route path="/other" component={Other} />
    </Router>
), document.getElementById("root"));