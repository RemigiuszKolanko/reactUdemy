import React, { useEffect, useRef } from 'react';

import classes from './Cockpit.module.css';

const Cockpit = (props) => {
    const toggleBtnRef = useRef(null);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // http request
        // setTimeout(() => {
        //     alert('[Cockpit.js] Alert from cloud');
        // }, 1000);
        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[COckpit.js] cleanup work with 2nd useEffect');
        }
    });
    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 3) {
        assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 2) {
        assignedClasses.push(classes.bold);
    }
    const finalClass = assignedClasses.join(' ');

    return ( 
        <div className={classes.Cockpit}>
            <p>{props.title}</p>
            <input readOnly type ="text" value="react app"></input>
            <p className={finalClass}>This is really working!</p>
            <button
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
            <button
                onClick={props.login}>Log in</button>
        </div>
    )
}

export default React.memo(Cockpit);