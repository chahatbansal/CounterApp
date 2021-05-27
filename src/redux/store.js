import { createStore } from 'redux'
import counterDecrement from './counter/counterReducer'
import counterReducer from './counter/counterReducer'

const store = createStore(counterReducer)

export default store