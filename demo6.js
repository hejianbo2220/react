const products = [
	{category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
	{category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
	{category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
	{category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
	{category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
	{category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

class ProductCategoryRow extends React.Component {
	render () {
		return (
			<tr><th colSpan="2">{this.props.category}</th></tr>
		);
	}
}
class ProductRow extends React.Component {
	render () {
		const name = this.props.product.stocked ? this.props.product.name : <span style={{color:"red"}}>{this.props.product.name}</span>;
		return (
			<tr>
				<td>{name}</td>
				<td>{this.props.product.price}</td>
			</tr>
		);
	}
}
class ProductTable extends React.Component {
	render () {
		let rows = [];
		let lastCategory = null;
		this.props.products.forEach((product) => {
			if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
				return;
			}
			if (product.category !== lastCategory) {
				rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
			}
			rows.push(<ProductRow product={product} key={product.name} />);
			lastCategory = product.category;
		});
		return (
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		);
	}
}
class SearchBar extends React.Component {
	constructor (props) {
		super(props);
		this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
		this.handleInStockInputChange = this.handleInStockInputChange.bind(this);
	}
	handleFilterTextInputChange (event) {
		this.props.onFilterTextInput(event.target.value);
	}
	handleInStockInputChange (event) {
		this.props.onInStockInput(event.target.checked);
	}
	render () {
		return (
			<form>
				<input value={this.props.filterText} onChange={this.handleFilterTextInputChange} placeholder="Search..." />
				<br />
				<label>
					<input type="checkbox" checked={this.props.inStockOnly} onChange={this.handleInStockInputChange} />
					Only show products in stock
				</label>
			</form>
		);
	}
}
class FilterableProductTable extends React.Component {
	constructor (props) {
		super(props);
		this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
		this.handleInStockInput = this.handleInStockInput.bind(this);
		this.state = {filterText: "", inStockOnly: false};
	}
	handleFilterTextInput (filterText) {
		this.setState({filterText: filterText});
	}
	handleInStockInput (inStockOnly) {
		this.setState({inStockOnly: inStockOnly});
	}
	render () {
		return (
			<div>
				<SearchBar filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} onFilterTextInput={this.handleFilterTextInput} onInStockInput={this.handleInStockInput} />
				<ProductTable products={this.props.products} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} />
			</div>
		);
	}
}

ReactDOM.render(<FilterableProductTable products={products} />, document.getElementById("app"));