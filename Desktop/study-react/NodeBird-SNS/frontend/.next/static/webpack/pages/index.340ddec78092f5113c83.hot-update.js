webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ImagesZoom/index.jsx":
/*!*****************************************!*\
  !*** ./components/ImagesZoom/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n  _jsxFileName = \"/Users/a123/Desktop/study-react/NodeBird-SNS/frontend/components/ImagesZoom/index.jsx\",\n  _s = $RefreshSig$();\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar ImagesZoom = function ImagesZoom(_ref) {\n  _s();\n  var images = _ref.images,\n    onClose = _ref.onClose;\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n    currentSlide = _useState[0],\n    setCurrentSlide = _useState[1];\n  return __jsx(Overlay, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, __jsx(Global, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }), __jsx(Header, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, \"\\uC0C1\\uC138 \\uC774\\uBBF8\\uC9C0\"), __jsx(CloseBtn, {\n    onClick: onClose,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, \"X\")), __jsx(SlickWrapper, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    initialSlide: 0,\n    afterChange: function afterChange(slide) {\n      return setCurrentSlide(slide);\n    },\n    infinite: true,\n    arrows: false,\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 11\n    }\n  }, images.map(function (v) {\n    return __jsx(ImageWrapper, {\n      key: v.src,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 15\n      }\n    }, __jsx(\"img\", {\n      src: v.src,\n      alt: v.src,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 17\n      }\n    }));\n  })), __jsx(Indicator, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }, currentSlide + 1, \"  \", \"/ \", images.length)))));\n};\n_s(ImagesZoom, \"VQw0KpRgltXDNPWBgmV3GhZXdQE=\");\n_c = ImagesZoom;\nImagesZoom.propTypes = {\n  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,\n  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImagesZoom);\nvar _c;\n$RefreshReg$(_c, \"ImagesZoom\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZXNab29tL2luZGV4LmpzeD8xNTdhIl0sIm5hbWVzIjpbIkltYWdlc1pvb20iLCJpbWFnZXMiLCJvbkNsb3NlIiwidXNlU3RhdGUiLCJjdXJyZW50U2xpZGUiLCJzZXRDdXJyZW50U2xpZGUiLCJzbGlkZSIsIm1hcCIsInYiLCJzcmMiLCJsZW5ndGgiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0w7QUFDSDtBQUVoQyxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBVSxPQUE0QjtFQUFBO0VBQUEsSUFBdEJDLE1BQU0sUUFBTkEsTUFBTTtJQUFFQyxPQUFPLFFBQVBBLE9BQU87RUFDbkMsZ0JBQXdDQyxzREFBUSxDQUFDLENBQUMsQ0FBQztJQUE1Q0MsWUFBWTtJQUFFQyxlQUFlO0VBRXBDLE9BQ0UsTUFBQyxPQUFPO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDTixNQUFDLE1BQU07SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFHLEVBQ1YsTUFBQyxNQUFNO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDTDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLHFDQUFlLEVBQ2YsTUFBQyxRQUFRO0lBQUMsT0FBTyxFQUFFSCxPQUFRO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsT0FBYSxDQUNqQyxFQUNULE1BQUMsWUFBWTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ1g7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFLE1BQUMsa0RBQUs7SUFDSixZQUFZLEVBQUUsQ0FBRTtJQUNoQixXQUFXLEVBQUUscUJBQUNJLEtBQUs7TUFBQSxPQUFLRCxlQUFlLENBQUNDLEtBQUssQ0FBQztJQUFBLENBQUM7SUFDL0MsUUFBUTtJQUNSLE1BQU0sRUFBRSxLQUFNO0lBQ2QsWUFBWSxFQUFFLENBQUU7SUFDaEIsY0FBYyxFQUFFLENBQUU7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUVqQkwsTUFBTSxDQUFDTSxHQUFHLENBQUMsVUFBQ0MsQ0FBQztJQUFBLE9BQ1osTUFBQyxZQUFZO01BQUMsR0FBRyxFQUFFQSxDQUFDLENBQUNDLEdBQUk7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxHQUN2QjtNQUFLLEdBQUcsRUFBRUQsQ0FBQyxDQUFDQyxHQUFJO01BQUMsR0FBRyxFQUFFRCxDQUFDLENBQUNDLEdBQUk7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQUFHLENBQ2xCO0VBQUEsQ0FDaEIsQ0FBQyxDQUNJLEVBQ1IsTUFBQyxTQUFTO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDUjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0dMLFlBQVksR0FBRyxDQUFDLEVBQ2hCLElBQUksUUFBSUgsTUFBTSxDQUFDUyxNQUFNLENBQ2xCLENBQ0ksQ0FDUixDQUNPLENBQ1A7QUFFZCxDQUFDO0FBQUMsR0FwQ0lWLFVBQVU7QUFBQSxLQUFWQSxVQUFVO0FBc0NoQkEsVUFBVSxDQUFDVyxTQUFTLEdBQUc7RUFDckJWLE1BQU0sRUFBRVcsaURBQVMsQ0FBQ0MsT0FBTyxDQUFDRCxpREFBUyxDQUFDRSxNQUFNLENBQUMsQ0FBQ0MsVUFBVTtFQUN0RGIsT0FBTyxFQUFFVSxpREFBUyxDQUFDSSxJQUFJLENBQUNEO0FBQzFCLENBQUM7QUFFY2YseUVBQVUsRUFBQztBQUFBO0FBQUEiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ltYWdlc1pvb20vaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgU2xpY2sgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5cbmNvbnN0IEltYWdlc1pvb20gPSAoeyBpbWFnZXMsIG9uQ2xvc2UgfSkgPT4ge1xuICBjb25zdCBbY3VycmVudFNsaWRlLCBzZXRDdXJyZW50U2xpZGVdID0gdXNlU3RhdGUoMCk7XG5cbiAgcmV0dXJuIChcbiAgICA8T3ZlcmxheT5cbiAgICAgIDxHbG9iYWwgLz5cbiAgICAgIDxIZWFkZXI+XG4gICAgICAgIDxoMT7sg4HshLgg7J2066+47KeAPC9oMT5cbiAgICAgICAgPENsb3NlQnRuIG9uQ2xpY2s9e29uQ2xvc2V9Plg8L0Nsb3NlQnRuPlxuICAgICAgPC9IZWFkZXI+XG4gICAgICA8U2xpY2tXcmFwcGVyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxTbGlja1xuICAgICAgICAgICAgaW5pdGlhbFNsaWRlPXswfVxuICAgICAgICAgICAgYWZ0ZXJDaGFuZ2U9eyhzbGlkZSkgPT4gc2V0Q3VycmVudFNsaWRlKHNsaWRlKX1cbiAgICAgICAgICAgIGluZmluaXRlXG4gICAgICAgICAgICBhcnJvd3M9e2ZhbHNlfVxuICAgICAgICAgICAgc2xpZGVzVG9TaG93PXsxfVxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw9ezF9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2ltYWdlcy5tYXAoKHYpID0+IChcbiAgICAgICAgICAgICAgPEltYWdlV3JhcHBlciBrZXk9e3Yuc3JjfT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17di5zcmN9IGFsdD17di5zcmN9IC8+XG4gICAgICAgICAgICAgIDwvSW1hZ2VXcmFwcGVyPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9TbGljaz5cbiAgICAgICAgICA8SW5kaWNhdG9yPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAge2N1cnJlbnRTbGlkZSArIDF9XG4gICAgICAgICAgICAgIHtcIiAgXCJ9LyB7aW1hZ2VzLmxlbmd0aH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvSW5kaWNhdG9yPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU2xpY2tXcmFwcGVyPlxuICAgIDwvT3ZlcmxheT5cbiAgKTtcbn07XG5cbkltYWdlc1pvb20ucHJvcFR5cGVzID0ge1xuICBpbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLmlzUmVxdWlyZWQsXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZXNab29tO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ImagesZoom/index.jsx\n");

/***/ })

})