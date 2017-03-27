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
class WelcomeDialog extends React.Component {
	render () {
		return (
			<Dialog title="Welcome" message="Thank you for visiting our spacecraft!" />
		);
	}
}
ReactDOM.render(<WelcomeDialog />, document.getElementById("app"));