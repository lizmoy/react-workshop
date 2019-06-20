import React, { Component } from 'react'

class Beach extends Component{
    constructor(){
        super()
        this.state = {

        }
        this.swim = this.swim.bind(this)
    }

    swim(){
        this.props.setNeeds([-5, -10, -3, 10, -2, 25])
    }

    tanning(){
        this.props.setNeeds([-1, -11, -5, 6, -8, 9])
    }

    playVolleyball(){

    }

    //swim
    //tanning
    //playvolleyball

    render(){
        return(
            <div>
                <p>I'm at the beach</p>
                <button onClick={this.swim}>Go Swimming</button>
                <button onClick={this.tanning}>Go Tanning</button>
            </div>
        )
    }
}

export default Beach