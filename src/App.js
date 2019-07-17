import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
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

	togglePersonHandler = () => {
		const showPersonState = this.state.showPersons;
		this.setState({
			showPersons: !showPersonState
		});
	}

	deletePerson = (index) => {
		let personsArr = [...this.state.persons];
		personsArr.splice(index, 1);
		this.setState({
			persons: [...personsArr]
		});
	}

	personNameHandler = (event, index) => {
		console.log(event.target.value);
		console.log(index);
	}

	render() {

		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		}

		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<div>
					{
						this.state.persons.map((person, index) => {
							return <Person
								key={person.id}
								name={person.name}
								age={person.age}
								click={() => this.deletePerson(index)}
								changed={() => this.personNameHandler(event, index)}/>
						})
					}
				</div>
			);
		}

		return (
			<div className="App" >
				<h1>Hi! I am a react app.</h1>
				<p>It is real working!</p>
				<button
					style={style}
					onClick={this.togglePersonHandler}>Toggle Persons
				</button>
				{persons}
			</div>
		);
	}

}

export default App;
