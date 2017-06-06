import createReducer from 'UTIL/createReducer'
import { ACTION_HANDLERS } from 'ACTION/test'
import initState from 'STORE/initState'

export default createReducer(initState.tests, ACTION_HANDLERS)
