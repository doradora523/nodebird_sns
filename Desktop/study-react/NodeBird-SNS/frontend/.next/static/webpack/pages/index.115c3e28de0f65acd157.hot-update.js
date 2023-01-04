webpackHotUpdate_N_E("pages/index",{

/***/ "./components/AppLayout.jsx":
/*!**********************************!*\
  !*** ./components/AppLayout.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UserProfile */ \"./components/UserProfile.jsx\");\n/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LoginForm */ \"./components/LoginForm.jsx\");\nvar _jsxFileName = \"/Users/a123/Desktop/study-react/NodeBird-SNS/frontend/components/AppLayout.jsx\",\n  _this = undefined,\n  _s = $RefreshSig$();\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar SearchInput = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(antd__WEBPACK_IMPORTED_MODULE_4__[\"Input\"].Search).withConfig({\n  displayName: \"AppLayout__SearchInput\",\n  componentId: \"sc-q396uy-0\"\n})([\"vertical-align:middle;\"]);\n_c = SearchInput;\nvar menuItems = antd__WEBPACK_IMPORTED_MODULE_4__[\"Menu\"].MenuProps = [{\n  label: __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 12\n    }\n  }, \"\\uB178\\uB4DC\\uBC84\\uB4DC\"),\n  key: \"nodebird\"\n}, {\n  label: __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/profile\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 12\n    }\n  }, \"\\uD504\\uB85C\\uD544\"),\n  key: \"profile\"\n}, {\n  label: __jsx(SearchInput, {\n    enterButton: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 12\n    }\n  }),\n  key: \"search\"\n}, {\n  label: __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/signup\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 12\n    }\n  }, \"\\uD68C\\uC6D0\\uAC00\\uC785\"),\n  key: \"signup\"\n}];\nvar AppLayout = function AppLayout(_ref) {\n  _s();\n  var children = _ref.children;\n  var isLoggedIn = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.user.isLoggedIn;\n  });\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__[\"Menu\"], {\n    mode: \"horizontal\",\n    items: menuItems,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__[\"Row\"], {\n    gutter: 8,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n    xs: 24,\n    md: 6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }, isLoggedIn ? __jsx(_UserProfile__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 25\n    }\n  }) : __jsx(_LoginForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 43\n    }\n  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n    xs: 24,\n    md: 12,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }, children), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n    xs: 24,\n    md: 6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    href: \"https://github.com/doradora523\",\n    target: \"_blank\",\n    rel: \"noreferer noopener\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 11\n    }\n  }, \"Made by Sukyung\"))));\n};\n_s(AppLayout, \"wwozkPYuXjHFfszlt2mcSB3o0is=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n_c2 = AppLayout;\nAppLayout.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppLayout);\nvar _c, _c2;\n$RefreshReg$(_c, \"SearchInput\");\n$RefreshReg$(_c2, \"AppLayout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBMYXlvdXQuanN4PzllNDYiXSwibmFtZXMiOlsiU2VhcmNoSW5wdXQiLCJzdHlsZWQiLCJJbnB1dCIsIlNlYXJjaCIsIm1lbnVJdGVtcyIsIk1lbnUiLCJNZW51UHJvcHMiLCJsYWJlbCIsImtleSIsIkFwcExheW91dCIsImNoaWxkcmVuIiwiaXNMb2dnZWRJbiIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDZ0I7QUFDUDtBQUNOO0FBQ2dCO0FBQ047QUFDZTtBQUVkO0FBQ0o7QUFFcEMsSUFBTUEsV0FBVyxnQkFBR0MsaUVBQU0sQ0FBQ0MsMENBQUssQ0FBQ0MsTUFBTSxDQUFDO0VBQUE7RUFBQTtBQUFBLDhCQUV2QztBQUFDLEtBRklILFdBQVc7QUFJakIsSUFBTUksU0FBUyxHQUFJQyx5Q0FBSSxDQUFDQyxTQUFTLEdBQUcsQ0FDbEM7RUFDRUMsS0FBSyxFQUFFLE1BQUMsZ0RBQUk7SUFBQyxJQUFJLEVBQUMsR0FBRztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLDhCQUFZO0VBQ2pDQyxHQUFHLEVBQUU7QUFDUCxDQUFDLEVBQ0Q7RUFDRUQsS0FBSyxFQUFFLE1BQUMsZ0RBQUk7SUFBQyxJQUFJLEVBQUMsVUFBVTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLHdCQUFXO0VBQ3ZDQyxHQUFHLEVBQUU7QUFDUCxDQUFDLEVBQ0Q7RUFDRUQsS0FBSyxFQUFFLE1BQUMsV0FBVztJQUFDLFdBQVc7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFHO0VBQ2xDQyxHQUFHLEVBQUU7QUFDUCxDQUFDLEVBQ0Q7RUFDRUQsS0FBSyxFQUFFLE1BQUMsZ0RBQUk7SUFBQyxJQUFJLEVBQUMsU0FBUztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLDhCQUFZO0VBQ3ZDQyxHQUFHLEVBQUU7QUFDUCxDQUFDLENBQ0Q7QUFFRixJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBUyxPQUFxQjtFQUFBO0VBQUEsSUFBZkMsUUFBUSxRQUFSQSxRQUFRO0VBQzNCLElBQU1DLFVBQVUsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFLO0lBQUEsT0FBS0EsS0FBSyxDQUFDQyxJQUFJLENBQUNILFVBQVU7RUFBQSxFQUFDO0VBRWhFLE9BQ0UsbUVBQ0UsTUFBQyx5Q0FBSTtJQUFDLElBQUksRUFBQyxZQUFZO0lBQUMsS0FBSyxFQUFFUCxTQUFVO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBRyxFQUM1QyxNQUFDLHdDQUFHO0lBQUMsTUFBTSxFQUFFLENBQUU7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUdiLE1BQUMsd0NBQUc7SUFBQyxFQUFFLEVBQUUsRUFBRztJQUFDLEVBQUUsRUFBRSxDQUFFO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDaEJPLFVBQVUsR0FBRyxNQUFDLG9EQUFXO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBRyxHQUFHLE1BQUMsa0RBQVM7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFHLENBQ3pDLEVBQ04sTUFBQyx3Q0FBRztJQUFDLEVBQUUsRUFBRSxFQUFHO0lBQUMsRUFBRSxFQUFFLEVBQUc7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNqQkQsUUFBUSxDQUNMLEVBQ04sTUFBQyx3Q0FBRztJQUFDLEVBQUUsRUFBRSxFQUFHO0lBQUMsRUFBRSxFQUFFLENBQUU7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNqQjtJQUNFLElBQUksRUFBQyxnQ0FBZ0M7SUFDckMsTUFBTSxFQUFDLFFBQVE7SUFDZixHQUFHLEVBQUMsb0JBQW9CO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEscUJBR3RCLENBQ0EsQ0FDRixDQUNMO0FBRVAsQ0FBQztBQUFDLEdBM0JJRCxTQUFTO0VBQUEsUUFDTUcsdURBQVc7QUFBQTtBQUFBLE1BRDFCSCxTQUFTO0FBNkJmQSxTQUFTLENBQUNNLFNBQVMsR0FBRztFQUNwQkwsUUFBUSxFQUFFTSxpREFBUyxDQUFDQyxJQUFJLENBQUNDO0FBQzNCLENBQUM7QUFFY1Qsd0VBQVMsRUFBQztBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvQXBwTGF5b3V0LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBJbnB1dCwgTWVudSwgUm93LCBDb2wgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmltcG9ydCBVc2VyUHJvZmlsZSBmcm9tIFwiLi9Vc2VyUHJvZmlsZVwiO1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tIFwiLi9Mb2dpbkZvcm1cIjtcblxuY29uc3QgU2VhcmNoSW5wdXQgPSBzdHlsZWQoSW5wdXQuU2VhcmNoKWBcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbmA7XG5cbmNvbnN0IG1lbnVJdGVtcyA9IChNZW51Lk1lbnVQcm9wcyA9IFtcbiAge1xuICAgIGxhYmVsOiA8TGluayBocmVmPVwiL1wiPuuFuOuTnOuyhOuTnDwvTGluaz4sXG4gICAga2V5OiBcIm5vZGViaXJkXCIsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+7ZSE66Gc7ZWEPC9MaW5rPixcbiAgICBrZXk6IFwicHJvZmlsZVwiLFxuICB9LFxuICB7XG4gICAgbGFiZWw6IDxTZWFyY2hJbnB1dCBlbnRlckJ1dHRvbiAvPixcbiAgICBrZXk6IFwic2VhcmNoXCIsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogPExpbmsgaHJlZj1cIi9zaWdudXBcIj7tmozsm5DqsIDsnoU8L0xpbms+LFxuICAgIGtleTogXCJzaWdudXBcIixcbiAgfSxcbl0pO1xuXG5jb25zdCBBcHBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IGlzTG9nZ2VkSW4gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuaXNMb2dnZWRJbik7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1lbnUgbW9kZT1cImhvcml6b250YWxcIiBpdGVtcz17bWVudUl0ZW1zfSAvPlxuICAgICAgPFJvdyBndXR0ZXI9ezh9PlxuICAgICAgICB7LyogZ3V0dGVyID0g7Lus65+87IKs7J207J2YIOqwhOqyqSAqL31cbiAgICAgICAgey8qIHhzPW1vYmlsZSBzbT10YWIgbWQ9c21hbGwgZGVza3RvcCAgKi99XG4gICAgICAgIDxDb2wgeHM9ezI0fSBtZD17Nn0+XG4gICAgICAgICAge2lzTG9nZ2VkSW4gPyA8VXNlclByb2ZpbGUgLz4gOiA8TG9naW5Gb3JtIC8+fVxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXsxMn0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXs2fT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kb3JhZG9yYTUyM1wiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9yZWZlcmVyIG5vb3BlbmVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBNYWRlIGJ5IFN1a3l1bmdcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC8+XG4gICk7XG59O1xuXG5BcHBMYXlvdXQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcExheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AppLayout.jsx\n");

/***/ })

})