import React, {Component} from 'react';

import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Auxiliary from '../hoc/Auxiliary';
import withClass from '../hoc/withClass';

class App extends Component {
	state = {
		persons: [
			{ id: 0, name: "Remigiusz", age: 28 },
			{ id: 1, name: "Ewa", age: 27 },
			{ id: 2, name: "Zuzia", age: 1 },
			{ id: 3, name: "Oliwier", age: 9 }
		],
		otherState: "Other state",
		showPersons: false,
		showCockpit: true,
		changeCounter: 0
	}

	togglePersonHandler = () => {
		const showPersonState = this.state.showPersons;
		this.setState({
			showPersons: !showPersonState
		});
	}

	toggleCockpitHandler = () => {
		const showCockpit = this.state.showCockpit;
		this.setState({
			showCockpit: !showCockpit
		})
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

		this.setState((prevState, props) => {
			return {
				persons: persons,
				changeCounter: prevState.changeCounter + 1
			}
		})
	}

	render() {
		let persons = null;

		if (this.state.showPersons) {
			persons =
				<Persons
					persons={this.state.persons}
					clicked={this.deletePersonHandler}
					changed={this.personNameHandler} />

		}

		let cockpit = null;

		console.log(this.props.appTitle);
		

		if (this.state.showCockpit) {
			cockpit = <Cockpit
				personsLength={this.state.persons.length}
				showPersons={this.state.showPersons}
				clicked={this.togglePersonHandler}
				title={this.props.appTitle} />
		}

		return (
			<Auxiliary>
				<button
					onClick={this.toggleCockpitHandler}>Toggle Cockpit</button>
				{cockpit}
				{persons}
			</Auxiliary>
		);
	}
}

export default withClass(App, classes.App);
