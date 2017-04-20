// React Component
class Counter extends React.Component {
	render () {
		return (
			<div>
				<h1>{this.props.value}</h1>
				<button onClick={this.props.onIncrement}>+</button>
				<button onClick={this.props.onDecrement}>-</button>
			</div>
		);
	}
}

// Reducer
const counter = (state = {count: 0}, action) => {
	const count = state.count;
	switch (action.type) {
		case "INCREMENT":
			return {count: count + 1};
			break;
		case "DECREMENT":
			return {count: count - 1};
			break;
		default: 
			return state;
	}
}

// Store
const store = Redux.createStore(counter);

// Map Redux state to component props
const mapStateToProps = (state) => {
	return {value: state.count}
}

// Map Redux actions to component props
const mapDispatchToProps = (dispatch) => {
	return {
		onIncrement: () => dispatch({type: "INCREMENT"}),
		onDecrement: () => dispatch({type: "DECREMENT"})
	}
}

// Connected Component
const App = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Counter);

// Provider Component
class Provider extends ReactRedux.Provider {}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("app"));