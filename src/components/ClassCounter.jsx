import { Component } from "react";

export class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState(prevState => {
             count: prevState.count + 1
        })
    }
 
    render() {
        return (
            <div>
                <button onClick={this.incrementCount}>Count {this.state.count}</button>
            </div>
        ) 
    }
}
