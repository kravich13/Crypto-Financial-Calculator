"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = void 0;
const Title = () => {
    const pathName = window.location.pathname;
    const setTitle = (title) => (document.title = title);
    switchToPath(pathName);
    function switchToPath(pathName) {
        switch (pathName) {
            case '/':
                setTitle('Crypto calculator');
                break;
            default:
                setTitle('Page not found');
        }
    }
    window.onpopstate = () => {
        const pathName = document.location.pathname;
        switchToPath(pathName);
    };
    return null;
};
exports.Title = Title;
