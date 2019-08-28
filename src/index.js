import React from 'react'
import ReactDOM from 'react-dom'
import Rating from './Rating'
import './App.css'

class App extends React.Component {
    render() {
        return (
            <div>
                <Rating totalStar={10} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));