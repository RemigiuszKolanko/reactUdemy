import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{ name: "Remigiusz", age: 28 },
			{ name: "Ewa", age: 27 },
			{ name: "Zuzia", age: 1 },
			{ name: "Oliwier", age: 9 }
		],
		otherState: "Other state"
	}

	switchNameHandler = (newName) => {
		this.setState({
			persons: [
				{ name: newName, age: 28 },
				{ name: "Ewe", age: 27 },
				{ name: "Zuz", age: 1 },
				{ name: "Oliwier", age: 9 }
			]
		})
	}

	nameChangeHandler = (event) => {
		this.setState({
			persons: [
				{ name: 'Remigiusz', age: 28 },
				{ name: event.target.value, age: 27 },
				{ name: "Zuzia", age: 1 },
				{ name: "Oliwier", age: 9 }
			]
		})
	}

	render() {

		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		}

		return (
			<div className="App" >
				<h1>Hi! I am a react app.</h1>
				<p>It is real working!</p>
				<button
					style={style}
					onClick={this.switchNameHandler.bind(this, 'BUTTON')}>Switch name</button>
				<Person
					name={this.state.persons[0].name}
					age={this.state.persons[0].age} />
				<Person
					name={this.state.persons[1].name}
					age={this.state.persons[1].age}
					changed={this.nameChangeHandler}>
						My hobbies: squash.
				</Person>
				<Person
					name={this.state.persons[2].name}
					age={this.state.persons[2].age}
					click={this.switchNameHandler.bind(this, 'PARAGRAPH')}/>
				<Person
					name={this.state.persons[3].name}
					age={this.state.persons[3].age} />
			</div>
		);
	}

}

export default App;
