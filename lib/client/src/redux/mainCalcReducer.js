"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainCalcReducer = void 0;
const types_1 = require("./types");
const initialState = {
    selectedCryptocurrencies: [],
    monthlyAmount: 0,
};
const mainCalcReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types_1.ADD_SELECTED_COINS:
            return { ...state, selectedCryptocurrencies: payload };
        default:
            return state;
    }
};
exports.mainCalcReducer = mainCalcReducer;
