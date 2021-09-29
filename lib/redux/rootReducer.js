"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootReducer = void 0;
const redux_1 = require("redux");
const mainCalcReducer_1 = require("./mainCalcReducer");
exports.rootReducer = (0, redux_1.combineReducers)({ initialSearch: mainCalcReducer_1.mainCalcReducer });
