"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navbar = void 0;
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Navbar = () => {
    const setDocTitle = (title) => {
        document.title = `That is ${title}`;
    };
    return (<div>
      <ul>
        <li onClick={() => setDocTitle('Vlad')}>
          <react_router_dom_1.NavLink to="/">Перейти к Владу</react_router_dom_1.NavLink>
        </li>
        <li onClick={() => setDocTitle('Max')}>
          <react_router_dom_1.NavLink to="/max">Перейти к Максу</react_router_dom_1.NavLink>
        </li>
        <li onClick={() => setDocTitle('Kate')}>
          <react_router_dom_1.NavLink to="/kate">Перейти к Кате</react_router_dom_1.NavLink>
        </li>
      </ul>
    </div>);
};
exports.Navbar = Navbar;
