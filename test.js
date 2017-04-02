class TodoList extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			todo: "",
			todos: []
		}
		this.addTodo = this.addTodo.bind(this);
	}
	addTodo (e) {
		const {todo, todos} = this.state;
		todos.push(todo);
		this.setState({todo: "", todos});
	}
	render () {
		return (
			<div>
				<h1>待办列表</h1>
				<div>
					<input type="text" onChange={e => this.setState({todo: e.target.value})} />
					<button onClick={this.addTodo}>添加</button>
				</div>
			</div>
		);
	}
}
ReactDOM.render(<TodoList />, document.getElementById("app"));