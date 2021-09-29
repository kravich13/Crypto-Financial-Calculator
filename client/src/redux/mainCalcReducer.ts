import { ADD_SELECTED_COINS } from './types'

const initialState: Object = {
  selectedCryptocurrencies: [],
  monthlyAmount: 0,
}

export const mainCalcReducer = (state = initialState, action: any) => {
  const { type, payload } = action

  switch (type) {
    case ADD_SELECTED_COINS:
      return { ...state, selectedCryptocurrencies: payload }
    default:
      return state
  }
}
