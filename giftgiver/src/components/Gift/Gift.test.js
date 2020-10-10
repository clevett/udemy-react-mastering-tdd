import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Gift from './Gift'

configure({ adapter: new Adapter(), disableLifecycleMethods: true })


describe('Gift', () => {
	const gift = shallow(<Gift />)

	it('renders correctly', () => {
		expect(gift).toMatchSnapshot()
	})

	it('initializes a person and present in `state`', () => {
		expect(gift.state()).toEqual({ person: '', present: '' })
	})

	describe('when typing into the person input', () => {
		const person = "Uncle"
		beforeEach(() => gift.find('.input-person').simulate('change', {target: {value: person} }))

		it('then updates the person in state', () => {
			expect(gift.state().person).toEqual(person)
		})
	})

	describe('when typing into the present input', () => {
		const present = 'Golf Clubs'
		beforeEach(() => gift.find('.input-present').simulate('change', { target: {value: present} }))

		it('updates the present in state', () => {
			expect(gift.state().present).toEqual(present)
		})
	})
})
