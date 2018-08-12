import React, { Component } from 'react';

export class Form extends Component {
	state = {
		firstName: "",
		lastName: "", 
		email: "",
	}

	change = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onSubmit = () => {
		console.log(this.state);
	};

 	render() {
	    return (
	    	<div id="call-to-action">
	    	<h1>Get More Information</h1>
			    <form>
			      	<input
			      		name="firstName"
			      		placeholder="First Name" 
			      		value={this.state.firstName}
			      		onChange={e => this.change(e)} 
			      	/>
			      	
			      	<input
			      		name="lastName"
			      		placeholder="Last Name" 
			      		value={this.state.lastName}
			      		onChange={e => this.change(e)}
			      	/>
			      	
			      	<input
			      		name="email"
			      		placeholder="Email" 
			      		value={this.state.email}
			      		onChange={e => this.change(e)}
			      	/>
			      	<br />
			      	<button className="action-button" onClick={() => this.onSubmit()}>Submit</button>
			    </form>
			</div>
    	);
  }
}

export default Form;