import React from 'react';

import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends React.Component {

	constructor(props) {
		super(props);
		console.log('[App.js] contructor');
	}

	state = {
		persons: [
			{ id: 0, name: "Remigiusz", age: 28 },
			{ id: 1, name: "Ewa", age: 27 },
			{ id: 2, name: "Zuzia", age: 1 },
			{ id: 3, name: "Oliwier", age: 9 }
		],
		otherState: "Other state",
		showPersons: false
	}

	static getDerivedStateFromProps(props, state) {
		console.log('[App.js] getDerivedStateFromProps');
		console.log(props);
		return state;
	}

	componentDidMount() {
		console.log('[App.js] componentDidMount');
	}

	componentDidUpdate() {
		console.log('[App.js] componentDidUpdate');
	}

	shouldComponentUpdate() {
		console.log('[App.js] shouldComponentUpdate');
		return true;
	}

	togglePersonHandler = () => {
		const showPersonState = this.state.showPersons;
		this.setState({
			showPersons: !showPersonState
		});
	}

	deletePersonHandler = (index) => {
		let personsArr = [...this.state.persons];
		personsArr.splice(index, 1);
		this.setState({
			persons: [...personsArr]
		});
	}

	personNameHandler = (event, id) => {
		let personIndex = this.state.persons.findIndex(p => p.id === id);

		const person = { ...this.state.persons[personIndex] };

		person.name = event.target.value;

		const persons = [...this.state.persons];

		persons[id] = person;

		this.setState({
			persons: persons
		})
	}

	render() {
		console.log('[App.js] render');
		
		let persons = null;


		if (this.state.showPersons) {
			persons =
				<Persons
					persons={this.state.persons}
					clicked={this.deletePersonHandler}
					changed={this.personNameHandler} />
		}

		return (
			<div className={classes.App}>
				<Cockpit
					persons={this.state.persons}
					showPersons={this.state.showPersons}
					clicked={this.togglePersonHandler}
					title={this.props.appTitle}/>
				{persons}
			</div>
		);
	}
}

export default App;
