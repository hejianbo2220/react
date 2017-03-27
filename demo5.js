class FancyBorder extends React.Component {
	constructor (props) {
		super(props);
	}
	render () {
		return (
			<div className={'FancyBorder FancyBorder-' + this.props.color}>
				{this.props.children}
			</div>
		);
	}
}
class Dialog extends React.Component {
	constructor (props) {
		super(props);
	}
	render () {
		return (
			<FancyBorder color="blue">
				<h1 className="Dialog-title">{this.props.title}</h1>
				<p className="Dialog-message">{this.props.message}</p>
				{this.props.children}
			</FancyBorder>
		);
	}
}
class SignUpDialog extends React.Component {
	constructor (props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSignUp = this.handleSignUp.bind(this);
		this.state = {login: ""};
	}
	handleChange (event) {
		this.setState({login: event.target.value});
	}
	handleSignUp () {
		alert("Welcome aboard, " + this.state.login);
	}
	render () {
		return (
			<Dialog title="Mars Exploration Program" message="How should we refer to you?">
				<input value={this.state.login} onChange={this.handleChange} />
				<button onClick={this.handleSignUp}>Sign Me Up</button>
			</Dialog>
		);
	}
}
ReactDOM.render(<SignUpDialog />, document.getElementById("app"));