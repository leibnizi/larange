import React from 'react';
import './calculator.css';

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		var number = '';
		var number2 = '';
		var number3 = '';
	    this.state = {
	        value: number,
			value2: number2,
			value3: number3,
	    }
	}

	// hand() {
	// 	this.setState({value: this.refs.input.value})
	// }

	hand0 = (e) => {
		this.setState({value: this.state.value + '0'})
		this.setState({value2: this.state.value})
	}
	hand1 = (e) => {
		this.setState({value: this.state.value + '1'})
		this.setState({value2: this.state.value})
	}
	hand2 = (e) => {
		this.setState({value: this.state.value + '2'})
		this.setState({value2: this.state.value})
	}
	hand3 = (e) => {
		this.setState({value: this.state.value + '3'})
		this.setState({value2: this.state.value})
	}
	hand4 = (e) => {
		this.setState({value: this.state.value + '4'})
		this.setState({value2: this.state.value})
	}
	hand5 = (e) => {
		this.setState({value: this.state.value + '5'})
		this.setState({value2: this.state.value})
	}
	hand6 = (e) => {
		this.setState({value: this.state.value + '6'})
	}
	hand7 = (e) => {
		this.setState({value: this.state.value + '7'})
	}
	hand8 = (e) => {
		this.setState({value: this.state.value + '8'})
	}
	hand9 = (e) => {
		this.setState({value: this.state.value + '9'})
	}
	handClear = (e) => {
		this.setState({value: ''})
	}
	handMin = (e) => {
		if (this.state.value[0] !== '-') {
			this.setState({value: '-' + this.state.value})
		}
		else if(this.state.value[0] == '-') {
			this.setState({value: this.state.value.slice(1)})
		}
	}
	handCent = (e) => {
		this.setState({value: parseFloat(this.state.value)/100})
	}
	handPoint = (e) => {
		if (this.state.value.indexOf('.') === -1) {
			this.setState({value: this.state.value + '.'})
		}
	}
	// 符号加到数字后
	handDivide = (e) => {
		this.setState({value: this.state.value + '/'})
		console.log(this.state.value, '/')
	}

	handPlus = (e) => {
		// var valuer = this.state.value
		// console.log(valuer)
		// var plus = valuer.indexOf('+')
		// var minus = valuer.indexOf('-')
		// var multiply = valuer.indexOf('*')
		// var divide = valuer.indexOf('/')
		// if (plus !== -1 ) {
		// 	this.setState({value: parseFloat(valuer.slice(0, plus)) + parseFloat(valuer.slice(plus + 1))})
		// 	console.log('++++++++', parseFloat(valuer.slice(0, plus)) + parseFloat(valuer.slice(plus + 1)))
		// }
		// else if (minus !== -1) {
		// 	this.setState({value: parseFloat(valuer.slice(0, minus)) - parseFloat(valuer.slice(minus + 1))})
		// }
		// else if (multiply !== -1) {
		// 	this.setState({value: parseFloat(valuer.slice(0, multiply)) * parseFloat(valuer.slice(multiply + 1))})
		// }
		// else if (divide !== -1) {
		// 	this.setState({value: parseFloat(valuer.slice(0, divide)) / parseFloat(valuer.slice(divide + 1))})
		// }
		this.setState({value: this.state.value + '+'})
		console.log(this.state.value, '+')
	}

	handMinus = (e) => {
		this.setState({value: this.state.value + '-'})
		console.log(this.state.value, '-')
	}
	handMultiply = (e) => {
		this.setState({value: this.state.value + '*'})
		console.log(this.state.value, '*')
	}
	// 等于之后转换成数字得出结果
	handEqual = (e) => {
		if (this.state.value[0] === '-') {
			var valuer = this.state.value.slice(1)
			console.log(valuer)
			var plus = valuer.indexOf('+')
			var minus = valuer.indexOf('-')
			var multiply = valuer.indexOf('*')
			var divide = valuer.indexOf('/')
			if (plus !== -1 ) {
				console.log("=")
				this.setState({value: parseFloat(-valuer.slice(0, plus)) + parseFloat(valuer.slice(plus + 1))})
			}
			else if (minus !== -1) {
				this.setState({value: parseFloat(-valuer.slice(0, minus)) - parseFloat(valuer.slice(minus + 1))})
			}
			else if (multiply !== -1) {
				this.setState({value: parseFloat(-valuer.slice(0, multiply)) * parseFloat(valuer.slice(multiply + 1))})
			}
			else if (divide !== -1) {
				this.setState({value: parseFloat(-valuer.slice(0, divide)) / parseFloat(valuer.slice(divide + 1))})
			}
		}
		else {
			var valuer2 = this.state.value
			console.log(valuer)
			var plus2 = valuer2.indexOf('+')
			var minus2 = valuer2.indexOf('-')
			var multiply2 = valuer2.indexOf('*')
			var divide2 = valuer2.indexOf('/')
			if (plus2 !== -1 ) {
				console.log("=")
				this.setState({value: parseFloat(valuer2.slice(0, plus2)) + parseFloat(valuer2.slice(plus2 + 1))})
			}
			else if (minus2 !== -1) {
				this.setState({value: parseFloat(valuer2.slice(0, minus2)) - parseFloat(valuer2.slice(minus2 + 1))})
			}
			else if (multiply2 !== -1) {
				this.setState({value: parseFloat(valuer2.slice(0, multiply2)) * parseFloat(valuer2.slice(multiply2 + 1))})
			}
			else if (divide2 !== -1) {
				this.setState({value: parseFloat(valuer2.slice(0, divide2)) / parseFloat(valuer2.slice(divide2 + 1))})
			}
		}


	}

	render() {
		return(
			<div className="Calculator">
				<p>{this.state.value}</p>
				<dl className="panel">
					<dt onClick={this.handClear} className="grid grid1-1">AC</dt>
					<dt onClick={this.handMin} className="grid grid1-2">+/-</dt>
					<dt onClick={this.handCent} className="grid grid1-3">%</dt>
					<dt onClick={this.handDivide} className="grid grid1-4">÷</dt>
				</dl>
				<dl className="panel">
					<dt onClick={this.hand7} className="grid grid2-1">7</dt>
					<dt onClick={this.hand8} className="grid grid2-2">8</dt>
					<dt onClick={this.hand9} className="grid grid2-3">9</dt>
					<dt onClick={this.handMultiply} className="grid grid2-4">×</dt>
				</dl>
				<dl className="panel">
					<dt onClick={this.hand4} className="grid grid3-1">4</dt>
					<dt onClick={this.hand5} className="grid grid3-2">5</dt>
					<dt onClick={this.hand6} className="grid grid3-3">6</dt>
					<dt onClick={this.handMinus} className="grid grid3-4">-</dt>
				</dl>
				<dl className="panel">
					<dt onClick={this.hand1} className="grid grid4-1">1</dt>
					<dt onClick={this.hand2} className="grid grid4-2">2</dt>
					<dt onClick={this.hand3} className="grid grid4-3">3</dt>
					<dt onClick={this.handPlus} className="grid grid4-4">+</dt>
				</dl>
				<dl className="panel">
					<dt onClick={this.hand0} className="grid grid5-1">0</dt>
					<dt onClick={this.handPoint} className="grid grid5-2">.</dt>
					<dt onClick={this.handEqual} className="grid grid5-3">=</dt>
				</dl>
			</div>
		);
	}
}

module.exports = Calculator
