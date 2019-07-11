import React, { Component } from 'react';

class Person extends Component {
    render() {
        return <p>Hi! My name is {this.props.name}. I am {this.props.age} years old. {this.props.children}</p>
    }
}

export default Person;