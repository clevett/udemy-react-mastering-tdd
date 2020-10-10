import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Gift from './Gift'

configure({ adapter: new Adapter(), disableLifecycleMethods: true })


describe('Gift', () => {
	const app = shallow(<Gift />)

	it('renders correctly', () => {
		expect(app).toMatchSnapshot()
	})
})
