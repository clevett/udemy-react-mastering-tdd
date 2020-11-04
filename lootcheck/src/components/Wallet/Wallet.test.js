import React from 'react'
import { Wallet } from './Wallet'

import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter(), disableLifecycleMethods: true })

describe('Wallet', () => {
	const props = { balance: 20 }
	const wallet = shallow(<Wallet {...props} />)
	
	it('renders properly', ()  => {
		expect(wallet).toMatchSnapshot()
	})

	it('displays the balance from props', () => {
		expect(wallet.find('.balance').text()).toEqual('Wallet balance: 20')
	})

	it('creates an input to deposit into or withdraw from the balance', () => {
		expect(wallet.find('.input-wallet').exists()).toBe(true)
	})

	describe('when the user types into the wallet input', () => {
		const userBalance = '25'
		
		beforeEach(() => {
			wallet.find('.input-wallet').simulate('change', {target: {value: userBalance}})
		})

		it('updates the local wallet balance in `state` and converts it into a number', () => {
			expect(wallet.state().balance).toEqual(parseInt(userBalance, 10))
		})
	})
})