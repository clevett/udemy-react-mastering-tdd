import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'

configure({ adapter: new Adapter(), disableLifecycleMethods: true })

describe('App', () => {
	const app = shallow(<App />)

	it('renders properly', () => {
		expect(app).toMatchSnapshot()
	})

	it('contains a connected Wallet component', () => {
		expect(app.find('Connect(Wallet)').exists()).toBe(true)
	})
})

