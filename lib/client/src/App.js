"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
require("./App.css");
const Title_1 = require("./components/navbar/Title");
const Main_1 = require("./pages/Main");
const Unfaithful_1 = require("./pages/Unfaithful ");
const App = () => {
    return (<div className="App">
      <react_router_dom_1.BrowserRouter>
        <Title_1.Title />

        <react_router_dom_1.Switch>
          <react_router_dom_1.Route component={Main_1.Main} path="/" exact></react_router_dom_1.Route>
          <react_router_dom_1.Route component={Unfaithful_1.Unfaithful}/>
        </react_router_dom_1.Switch>
      </react_router_dom_1.BrowserRouter>
    </div>);
};
exports.App = App;
