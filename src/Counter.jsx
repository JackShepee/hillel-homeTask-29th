import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.initialValue
        };
    }

    increment = () => {
        this.setState(prevState => ({ value: prevState.value + 1 }));
    }

    decrement = () => {
        this.setState(prevState => ({ value: prevState.value - 1 }));
    }

    reset = () => {
        this.setState({ value: this.props.initialValue });
    }

    render() {
        return (
            <div>
                <p>Value: {this.state.value}</p>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.increment}>+</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

export default Counter;
