import React from 'react'
import { Loot } from './Loot'

import { mount, shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter(), disableLifecycleMethods: true })

describe("Loot", () => {
	const mockFetchbitcoin = jest.fn()
	const props = { balance: 10, bitcoin: {} }
	let loot = shallow(<Loot {...props} />)

	it('renders properly', () => {
		expect(loot).toMatchSnapshot()
	})

	describe('when mounted', () => {
		beforeEach(() => {
			props.fetchBitcoin = mockFetchbitcoin
			loot = mount(<Loot {...props} />)
		})

		it('dispatches the `fetchBitcoin()` method it receives from props', () => {
			expect(mockFetchbitcoin).toHaveBeenCalled()
		})
	})

	describe('when there are valid bitcoin props', () => {
		beforeEach(() => {
			props = {balance: 10, bitcoin:{bpi:{USD:{rate: '1,000'}}}}
			loot = shallow(<Loot {...props} />)
		})

		it('displays the correct bitcoin value', () => {
			console.log(loot)
			expect(loot.find('h3').text()).toEqual('Bitcoin balance: 0.01')
		})
	})
})