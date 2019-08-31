import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './Person.module.css';
import withClass from '../../../hoc/withClass';
import Auxiliary from '../../../hoc/Auxiliary';

class Person extends Component {

    render() {
        return (
            <Auxiliary>
                <p onClick={this.props.click}>
                    Hi! My name is {this.props.name}.
                    I am {this.props.age} years old.
                </p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Auxiliary>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func,
    key: PropTypes.number
}

export default withClass(Person, classes.Person);