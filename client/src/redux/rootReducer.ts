import { combineReducers } from 'redux'
import { mainCalcReducer } from './mainCalcReducer'

export const rootReducer = combineReducers({ initialSearch: mainCalcReducer })
