var hello = "Hello, world";
var Clock = React.createClass({
	getInitialState: function () {
		return {date: new Date()}
	},
	componentDidMount: function () {
		this.timer = setInterval(function () {
			this.setState({date: new Date()});
		}.bind(this), 1000);
	},
	componentWillUnmount: function () {
		clearInterval(this.timer);
	},
	render: function () {
		return (
			<div>
				<h1>{this.props.text}</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}</h2>
			</div>
		);
	}
});

ReactDOM.render(<Clock text={hello} />, document.getElementById("app"));