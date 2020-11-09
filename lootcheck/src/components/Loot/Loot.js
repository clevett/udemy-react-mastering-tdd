import React from 'react'
import { connect } from 'react-redux'
import { fetchBitcoin } from '../../actions/bitcoin'

export class Loot extends React.Component {
	componentDidMount() {
		this.props.fetchBitcoin()
	}

	computeBitcoin() {
		const { bitcoin } = this.props

		//Guard clause
		if (Object.keys(bitcoin).lenght === 0) return ''

		return this.props.balance / parseInt(bitcoin.bpi.USD.rate.replace(',', ''), 10)
	}

	render() {
		return(
			<h3>Bitcoin balance: {this.computeBitcoin()}</h3>
		)
	}
}

export default connect(state => state, { fetchBitcoin })(Loot)