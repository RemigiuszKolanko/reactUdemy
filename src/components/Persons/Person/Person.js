import React from 'react';

import classes from './Person.module.css';

const person = (props) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>Hi! My name is {props.name}. I am {props.age} years old. {props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default person;