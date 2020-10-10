import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class App extends Component {
	constructor() {
		super()
		this.state = {
			gifts: []
		}
	}

	addGift = () => {
		let { gifts } = this.state
		const ids = this.state.gifts.map(gift => gift.id)
		const maxID = ids.lenght > 0 ? Math.max(...ids) : 0
		gifts.push({ id: maxID + 1})
		this.setState({ gifts })
	}

	render() {
		return (
			<div>
				<h1>Gift Giver</h1>
				<Button className='btn-add' onClick={this.addGift}>Add Gift</Button>
			</div>
		)
	}
}

export default App