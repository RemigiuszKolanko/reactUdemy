import React, {Component} from 'react';

import Person from './Person/Person';

class Persons extends Component {

    // tutaj już podłączeni do całych propsów żeby nie wyłączać reakcji komponentu Person
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps !== this.props) {
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
        return (
                this.props.persons.map((person, index) => {
                    return <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        click={() => this.props.clicked(index)}
                        changed={(event) => this.props.changed(event, person.id)}></Person>
                })
        );
    }
}

export default Persons;