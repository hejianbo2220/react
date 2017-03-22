class Form extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			inputValue: "",
			textareaValue: "Please write an essay about your favorite DOM element.",
			selectValue: "coconut"
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange (event) {
		const name = event.target.name;
		this.setState({[name]: event.target.value});
	}
	handleSubmit (event) {
		alert("A name was submitted: " + this.state.inputValue + "\n" + "A essay was submitted: " + this.state.textareaValue + "\n" + "Your favorite flavor is: " + this.state.selectValue);
		event.preventDefault();
	}
	render () {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Name:
					<input type="text" value={this.state.inputValue} name="inputValue" onChange={this.handleChange} />
				</label>
				<br />
				<label>
					Essay:
					<textarea value={this.state.textareaValue} name="textareaValue" onChange={this.handleChange} />
				</label>
				<br />
				<label>
					Pick your favorite La Croix flavor:
					<select value={this.state.selectValue} name="selectValue" onChange={this.handleChange}>
						<option value="grapefruit">Grapefruit</option>
						<option value="lime">Lime</option>
						<option value="coconut">Coconut</option>
						<option value="mango">Mango</option>
					</select>
				</label>
				<br />
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

ReactDOM.render(<Form />, document.getElementById("app"));