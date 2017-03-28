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
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange (event) {
		this.props.onTemperatureChange(event.target.value);
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
	constructor (props) {
		super(props);
		this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
		this.state = {
			scale: "celsius",
			temperature: ""
		}
	}
	handleCelsiusChange (temperature) {
		this.setState({scale: "celsius", temperature});
	}
	handleFahrenheitChange (temperature) {
		this.setState({scale: "fahrenheit", temperature});
	}
	render () {
		const scale = this.state.scale;
		const temperature = this.state.temperature;
		const celsius = scale === "fahrenheit" ? tryConvert(temperature, toCelsius) : temperature;
		const fahrenheit = scale === "celsius" ? tryConvert(temperature, toFahrenheit) : temperature;
		return (
			<div>
				<TemperatureInput scale="Celsius" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
				<TemperatureInput scale="Fahrenheit" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
				<BoilingVerdict celsius={parseFloat(celsius)} />
			</div>
		);
	}
}

ReactDOM.render(<Calculator />, document.getElementById("app"));