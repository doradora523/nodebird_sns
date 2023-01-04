webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ImagesZoom/index.jsx":
/*!*****************************************!*\
  !*** ./components/ImagesZoom/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _this = undefined,\n  _jsxFileName = \"/Users/a123/Desktop/study-react/NodeBird-SNS/frontend/components/ImagesZoom/index.jsx\",\n  _s = $RefreshSig$();\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar Overlay = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"ImagesZoom__Overlay\",\n  componentId: \"sc-1lqytoq-0\"\n})([\"position:fixed;z-index:5000;top:0;left:0;right:0;bottom:0;\"]);\n_c = Overlay;\nvar Header = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].header.withConfig({\n  displayName: \"ImagesZoom__Header\",\n  componentId: \"sc-1lqytoq-1\"\n})([\"height:44px;background:white;position:relative;padding:0;text-align:center;& h1{margin:0;font-size:17px;color:#333;line-height:44px;}\"]);\n_c2 = Header;\nvar ImagesZoom = function ImagesZoom(_ref) {\n  _s();\n  var images = _ref.images,\n    onClose = _ref.onClose;\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n    currentSlide = _useState[0],\n    setCurrentSlide = _useState[1];\n  return __jsx(Overlay, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }\n  }, __jsx(Header, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, \"\\uC0C1\\uC138 \\uC774\\uBBF8\\uC9C0\"), __jsx(CloseBtn, {\n    onClick: onClose,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, \"X\")), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    initialSlide: 0,\n    afterChange: function afterChange(slide) {\n      return setCurrentSlide(slide);\n    },\n    infinite: true,\n    arrows: false,\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 11\n    }\n  }, images.map(function (v) {\n    return __jsx(\"div\", {\n      key: v.src,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 15\n      }\n    }, __jsx(\"img\", {\n      src: v.src,\n      alt: v.src,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 17\n      }\n    }));\n  })))));\n};\n_s(ImagesZoom, \"VQw0KpRgltXDNPWBgmV3GhZXdQE=\");\n_c3 = ImagesZoom;\nImagesZoom.propTypes = {\n  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,\n  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImagesZoom);\nvar _c, _c2, _c3;\n$RefreshReg$(_c, \"Overlay\");\n$RefreshReg$(_c2, \"Header\");\n$RefreshReg$(_c3, \"ImagesZoom\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZXNab29tL2luZGV4LmpzeD8xNTdhIl0sIm5hbWVzIjpbIk92ZXJsYXkiLCJzdHlsZWQiLCJkaXYiLCJIZWFkZXIiLCJoZWFkZXIiLCJJbWFnZXNab29tIiwiaW1hZ2VzIiwib25DbG9zZSIsInVzZVN0YXRlIiwiY3VycmVudFNsaWRlIiwic2V0Q3VycmVudFNsaWRlIiwic2xpZGUiLCJtYXAiLCJ2Iiwic3JjIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0M7QUFDTDtBQUNIO0FBQ087QUFFdkMsSUFBTUEsT0FBTyxnQkFBR0MseURBQU0sQ0FBQ0MsR0FBRztFQUFBO0VBQUE7QUFBQSxrRUFPekI7QUFBQyxLQVBJRixPQUFPO0FBU2IsSUFBTUcsTUFBTSxnQkFBR0YseURBQU0sQ0FBQ0csTUFBTTtFQUFBO0VBQUE7QUFBQSw2SUFhM0I7QUFBQyxNQWJJRCxNQUFNO0FBZVosSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQVUsT0FBNEI7RUFBQTtFQUFBLElBQXRCQyxNQUFNLFFBQU5BLE1BQU07SUFBRUMsT0FBTyxRQUFQQSxPQUFPO0VBQ25DLGdCQUF3Q0Msc0RBQVEsQ0FBQyxDQUFDLENBQUM7SUFBNUNDLFlBQVk7SUFBRUMsZUFBZTtFQUVwQyxPQUNFLE1BQUMsT0FBTztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ04sTUFBQyxNQUFNO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDTDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLHFDQUFlLEVBQ2YsTUFBQyxRQUFRO0lBQUMsT0FBTyxFQUFFSCxPQUFRO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsT0FBYSxDQUNqQyxFQUNUO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxrREFBSztJQUNKLFlBQVksRUFBRSxDQUFFO0lBQ2hCLFdBQVcsRUFBRSxxQkFBQ0ksS0FBSztNQUFBLE9BQUtELGVBQWUsQ0FBQ0MsS0FBSyxDQUFDO0lBQUEsQ0FBQztJQUMvQyxRQUFRO0lBQ1IsTUFBTSxFQUFFLEtBQU07SUFDZCxZQUFZLEVBQUUsQ0FBRTtJQUNoQixjQUFjLEVBQUUsQ0FBRTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBRWpCTCxNQUFNLENBQUNNLEdBQUcsQ0FBQyxVQUFDQyxDQUFDO0lBQUEsT0FDWjtNQUFLLEdBQUcsRUFBRUEsQ0FBQyxDQUFDQyxHQUFJO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsR0FDZDtNQUFLLEdBQUcsRUFBRUQsQ0FBQyxDQUFDQyxHQUFJO01BQUMsR0FBRyxFQUFFRCxDQUFDLENBQUNDLEdBQUk7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQUFHLENBQzNCO0VBQUEsQ0FDUCxDQUFDLENBQ0ksQ0FDSixDQUNGLENBQ0U7QUFFZCxDQUFDO0FBQUMsR0E3QklULFVBQVU7QUFBQSxNQUFWQSxVQUFVO0FBK0JoQkEsVUFBVSxDQUFDVSxTQUFTLEdBQUc7RUFDckJULE1BQU0sRUFBRVUsaURBQVMsQ0FBQ0MsT0FBTyxDQUFDRCxpREFBUyxDQUFDRSxNQUFNLENBQUMsQ0FBQ0MsVUFBVTtFQUN0RFosT0FBTyxFQUFFUyxpREFBUyxDQUFDSSxJQUFJLENBQUNEO0FBQzFCLENBQUM7QUFFY2QseUVBQVUsRUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9JbWFnZXNab29tL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFNsaWNrIGZyb20gXCJyZWFjdC1zbGlja1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgT3ZlcmxheSA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogNTAwMDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuYDtcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgaGVpZ2h0OiA0NHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgJiBoMSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgfVxuYDtcblxuY29uc3QgSW1hZ2VzWm9vbSA9ICh7IGltYWdlcywgb25DbG9zZSB9KSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50U2xpZGUsIHNldEN1cnJlbnRTbGlkZV0gPSB1c2VTdGF0ZSgwKTtcblxuICByZXR1cm4gKFxuICAgIDxPdmVybGF5PlxuICAgICAgPEhlYWRlcj5cbiAgICAgICAgPGgxPuyDgeyEuCDsnbTrr7jsp4A8L2gxPlxuICAgICAgICA8Q2xvc2VCdG4gb25DbGljaz17b25DbG9zZX0+WDwvQ2xvc2VCdG4+XG4gICAgICA8L0hlYWRlcj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFNsaWNrXG4gICAgICAgICAgICBpbml0aWFsU2xpZGU9ezB9XG4gICAgICAgICAgICBhZnRlckNoYW5nZT17KHNsaWRlKSA9PiBzZXRDdXJyZW50U2xpZGUoc2xpZGUpfVxuICAgICAgICAgICAgaW5maW5pdGVcbiAgICAgICAgICAgIGFycm93cz17ZmFsc2V9XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c9ezF9XG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbD17MX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aW1hZ2VzLm1hcCgodikgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17di5zcmN9PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt2LnNyY30gYWx0PXt2LnNyY30gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1NsaWNrPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvT3ZlcmxheT5cbiAgKTtcbn07XG5cbkltYWdlc1pvb20ucHJvcFR5cGVzID0ge1xuICBpbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLmlzUmVxdWlyZWQsXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZXNab29tO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ImagesZoom/index.jsx\n");

/***/ })

})