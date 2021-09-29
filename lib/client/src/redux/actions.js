"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.takeAllCoinPrices = void 0;
const types_1 = require("./types");
function takeAllCoinPrices(namesCoins) {
    return async (dispatch) => {
        try {
            dispatch({ type: types_1.ADD_SELECTED_COINS });
        }
        catch (err) {
            dispatch({ type: types_1.ADD_SELECTED_COINS });
        }
    };
}
exports.takeAllCoinPrices = takeAllCoinPrices;
