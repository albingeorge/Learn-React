import React from 'react'
import { Link } from 'react-router'

let AppLayout = function(props) {
    return (
        <div>
            <header>
                <h1>Welcome to the Star Wars page</h1>
                <Link to="/users">View Users</Link>
            </header>
            <main>
                {props.children}
            </main>
            <footer>
                Powered by <a href="http://swapi.co">SWAPI.co</a>
            </footer>
        </div>
    );
}

export default AppLayout