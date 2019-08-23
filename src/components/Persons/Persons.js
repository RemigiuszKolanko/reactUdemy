import React from 'react';

import Person from './Person/Person';

class Persons extends React.Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        if(nextProps.persons !== this.props.persons) {
            return true;
        }
        return false;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        console.log('prevProps', prevProps);
        return this.props;
    }

    componentDidUpdate() {
        console.log('[Persons.js] componentDIdUpdate');
    }

    render() {
        console.log('[Persons.js] rendering ...');
        return this.props.persons.map((person, index) => {
            return <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.props.clicked(index)}
                changed={(event) => this.props.changed(event, person.id)} />
        })
    }
}

export default Persons;