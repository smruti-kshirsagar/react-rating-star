import React from 'react'
import RatingComp from './RatingComp'
import './App.css'

class Rating extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedStar: 2
        }
    }

    addRating(i) {
        this.setState({
            selectedStar: i + 1
        })
    }

    render() {
        const totalStar = this.props.totalStar
        const arr = Array(totalStar).fill(false)
        return (
            <div>
                <span>Rating : </span>
                {
                    arr.map((item, i) => (
                        <RatingComp 
                        key={i}
                        handleEvent = {() => this.addRating(i)}
                        star={ i < this.state.selectedStar ? "checked" : " "} />
                    ))
                }
                <div>{this.state.selectedStar}  / { totalStar }</div>
            </div>
            
        )
    }
}

export default Rating