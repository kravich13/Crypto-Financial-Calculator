"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
require("./index.css");
const App_1 = require("./App");
require("../node_modules/normalize.css/normalize.css");
const react_redux_1 = require("react-redux");
const redux_1 = require("redux");
const rootReducer_1 = require("./redux/rootReducer");
const store = (0, redux_1.createStore)(rootReducer_1.rootReducer);
react_dom_1.default.render(<react_1.default.StrictMode>
    <react_redux_1.Provider store={store}>
      <App_1.App />
    </react_redux_1.Provider>
  </react_1.default.StrictMode>, document.getElementById('root'));
