import React from 'react';

import classes from './Cockpit.module.css';

const Cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 3) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.bold);
    }
    const finalClass = assignedClasses.join(' ');

    return ( 
        <div className={classes.Cockpit}>
            <p>{props.title}</p>
            <input readOnly type ="text" value ="react app"></input>
            <p className={finalClass}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    )
}

export default Cockpit;