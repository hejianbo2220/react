var Website = React.createClass({
	getInitialState: function () {
		return {
			name: "my app",
			site: "https://www.baidu.com"
		}
	},
	render: function () {
		return (
			<div>
				<Name name={this.state.name} />
				<Link site={this.state.site} />
			</div>
		);
	}
});
var Name = React.createClass({
	render: function () {
		return (
			<h1>{this.props.name}</h1>
		);
	}
});
var Link = React.createClass({
	render: function () {
		return (
			<a href={this.props.site}>{this.props.site}</a>
		);
	}
});
ReactDOM.render(<Website />, document.getElementById("app"));

// http://www.ruanyifeng.com/blog/2015/03/react.html
// http://www.runoob.com/react/react-props.html
// https://facebook.github.io/react/docs/introducing-jsx.html
// http-server root path ./
// chrome react developer tools