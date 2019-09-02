import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './Person.module.css';
import withClass from '../../../hoc/withClass';
import Auxiliary from '../../../hoc/Auxiliary';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    constructor(props) {
        super(props);
        console.log('props from person constructor', props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        this.inputElementRef.current.focus();
    }

    render() {
        return (
            <Auxiliary>
                {this.context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}

                <p onClick={this.props.click}>
                    Hi! My name is {this.props.name}.
                    I am {this.props.age} years old.
                </p>
                <input
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name} />
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