import React from 'react'
import ReactDOM from 'react-dom'

let Counter = React.createClass({
    getInitialState: function() {
        return {
            count: 0

        }
    },

    componentDidMount: function() {
        this.setState( {
            count: this.props.count
        })
        setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    },

    render: function() {
        return (
            <div className="count">
                Counter: {this.state.count}
            </div>
        )
    }

})


let App = React.createClass( {
    render: function() {
        return <Counter count={5}/>
    }
})

ReactDOM.render(<App />, document.getElementById("root"));