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
})