"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"C:\\\\Users\\\\kuram\\\\Desktop\\\\pizza-quiz\\\\frontend\\\\pages\\\\index.tsx\";\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"pages__Container\",\n  componentId: \"sc-9mrxf5-0\"\n})([\"display:flex;justify-content:center;align-items:center;background:url(/background.png);height:100%;\"]);\n_c = Container;\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].form.withConfig({\n  displayName: \"pages__Form\",\n  componentId: \"sc-9mrxf5-1\"\n})([\"background:#fff;width:400px;padding:1rem;border-bottom:.25rem solid #dee2e6;border-radius:.5rem;\"]);\n_c2 = Form;\nvar Input = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].input.withConfig({\n  displayName: \"pages__Input\",\n  componentId: \"sc-9mrxf5-2\"\n})([\"background:#fff;width:100%;border:1px solid #dee2e6;border-bottom:.25rem solid #dee2e6;border-radius:.25rem;padding:.5rem;\"]);\n_c3 = Input;\nfunction Home() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {\n        placeholder: \"Seu nome\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"btn btn-primary\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, this);\n}\n_c4 = Home;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"Form\");\n$RefreshReg$(_c3, \"Input\");\n$RefreshReg$(_c4, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQyxTQUFTLEdBQUdELHdFQUFIO0VBQUE7RUFBQTtBQUFBLDJHQUFmO0tBQU1DO0FBUU4sSUFBTUUsSUFBSSxHQUFHSCx5RUFBSDtFQUFBO0VBQUE7QUFBQSx3R0FBVjtNQUFNRztBQVFOLElBQU1FLEtBQUssR0FBR0wsMEVBQUg7RUFBQTtFQUFBO0FBQUEsa0lBQVg7TUFBTUs7QUFTUyxTQUFTRSxJQUFULEdBQWdCO0VBQzdCLG9CQUNFLDhEQUFDLFNBQUQ7SUFBQSx1QkFDRSw4REFBQyxJQUFEO01BQUEsd0JBQ0UsOERBQUMsS0FBRDtRQUFPLFdBQVcsRUFBQztNQUFuQjtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBREYsZUFFRTtRQUFRLFNBQVMsRUFBQztNQUFsQjtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBRkY7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBREY7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURGO0FBUUQ7TUFUdUJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdXJsKC9iYWNrZ3JvdW5kLnBuZyk7XG4gIGhlaWdodDogMTAwJTtcbmA7XG5cbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IDQwMHB4O1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItYm90dG9tOiAuMjVyZW0gc29saWQgI2RlZTJlNjtcbiAgYm9yZGVyLXJhZGl1czogLjVyZW07XG5gO1xuXG5jb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG4gIGJvcmRlci1ib3R0b206IC4yNXJlbSBzb2xpZCAjZGVlMmU2O1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gIHBhZGRpbmc6IC41cmVtO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEZvcm0+XG4gICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj0nU2V1IG5vbWUnLz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj48L2J1dHRvbj5cbiAgICAgIDwvRm9ybT5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJDb250YWluZXIiLCJkaXYiLCJGb3JtIiwiZm9ybSIsIklucHV0IiwiaW5wdXQiLCJIb21lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});