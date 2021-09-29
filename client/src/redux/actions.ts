import { ADD_SELECTED_COINS } from './types'

export function takeAllCoinPrices(namesCoins: string[]): Function {
  return async (dispatch: Function): Promise<any> => {
    try {
      dispatch({ type: ADD_SELECTED_COINS })
    } catch (err) {
      dispatch({ type: ADD_SELECTED_COINS })
    }
  }
}
