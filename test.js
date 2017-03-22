function toCelsius (fahrenheit) {
	return (fahrenheit - 32) * 5 / 9;
}
function toFahrenheit (celsius) {
	return (celsius * 9 / 5) + 32;
}
function tryConvert (temperature, convert) {
	const input = parseFloat(temperature);
	if (Number.isNaN(input)) {
		return "";
	}
	const output = convert(input);
	const rounded = Math.round(output * 1000) / 1000;
	return rounded.toString();
}

class BoilingVerdict extends React.Component {
	constructor (props) {
		super(props);
	}
	render () {
		if (this.props.celsius >= 100) {
			return (
				<p>The water would boil.</p>
			);
		} else {
			return (
				<p>The water would not boil.</p>
			);
		}
	}
}

class TemperatureInput extends React.Component {
	constructor (props) {
		super(props);
		this.state = {temperature: ""};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange (event) {
		this.setState({temperature: event.target.value});
	}
	render () {
		return (
			<fieldset>
				<legend>Enter temperature in {this.props.scale}:</legend>
				<input value={this.props.temperature} onChange={this.handleChange} />
			</fieldset>
		);
	}
}

class Calculator extends React.Component {
	render () {
		return (
			<div>
				<TemperatureInput scale="Celsius" />
				<TemperatureInput scale="Fahrenheit" />
			</div>
		);
	}
}

ReactDOM.render(<Calculator />, document.getElementById("app"));