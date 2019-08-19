import React from 'react';

import classes from './Person.module.css';

class Person extends React.Component {

    render() {
        console.log('[Person.js] rendering ...');
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>
                    Hi! My name is {this.props.name}.
                    I am {this.props.age} years old.
                </p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        )
    }
}

export default Person;