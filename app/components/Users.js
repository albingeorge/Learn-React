import React from 'react'

import { Link } from 'react-router'
import User from './User'
import { getPeople } from '../xhr'

let Users = React.createClass( {
    getInitialState: function() {
        return {
            users: []
        }
    },
    componentDidMount: function() {
        getPeople().then(results => {
            this.setState({
                users: results.data.results
            });
        });
    },
    render: function() {
        return (
            <div>
                <h1>Star Wars Characters:</h1>
                    <Link to="/profile">Profile</Link>
                {
                    this.state.users.map(function(obj) {
                        return <User name={obj.name} key={obj.name} />;
                    })
                }
            </div>
        )
    }
})

export default Users