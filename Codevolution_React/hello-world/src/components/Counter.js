import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    increaseCount() {
        // this.setState(
        //     {
        //         count: this.state.count + 1
        //     },
        //     () => {console.log("callback value", this,this.state.count)}
        // )

        this.setState((prevState,props) => ({
            count: prevState.count + props.addValue
        }), () => {console.log("Callback Value:", this.state.count)})
    }


    increaseCountFive() {
        this.increaseCount()
        this.increaseCount()
        this.increaseCount()
        this.increaseCount()
        this.increaseCount()
    }

    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick = {() => this.increaseCountFive()}>Increament Count</button>
            </div>
        )
    }
}

export default Counter
