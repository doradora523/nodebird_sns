webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostImages.jsx":
/*!***********************************!*\
  !*** ./components/PostImages.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var _ImagesZoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImagesZoom */ \"./components/ImagesZoom/index.jsx\");\nvar _this = undefined,\n  _jsxFileName = \"/Users/a123/Desktop/study-react/NodeBird-SNS/frontend/components/PostImages.jsx\",\n  _s = $RefreshSig$();\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar PostImages = function PostImages(_ref) {\n  _s();\n  var images = _ref.images;\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n    showImagesZoom = _useState[0],\n    setShowImagesZoom = _useState[1];\n  var onZoom = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    setShowImagesZoom(true);\n  }, []);\n  var onClose = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    setShowImagesZoom(false);\n  }, []);\n  if (images.length === 1) {\n    __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"img\", {\n      role: \"presentation\",\n      src: images[0].src,\n      alt: images[0].src,\n      onClick: onZoom,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 7\n      }\n    }), showImagesZoom && __jsx(_ImagesZoom__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      image: images,\n      onClose: onClose,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 26\n      }\n    }));\n  }\n  if (images.length === 2) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"img\", {\n      role: \"presentation\",\n      style: {\n        display: \"inline-block\",\n        width: \"50%\"\n      },\n      src: images[0].src,\n      alt: images[0].src,\n      onClick: onZoom,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }\n    }), __jsx(\"img\", {\n      role: \"presentation\",\n      style: {\n        display: \"inline-block\",\n        width: \"50%\"\n      },\n      src: images[1].src,\n      alt: images[1].src,\n      onClick: onZoom,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }\n    }), showImagesZoom && __jsx(_ImagesZoom__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      images: images,\n      onClose: onClose,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 28\n      }\n    }));\n  }\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    role: \"presentation\",\n    style: {\n      width: \"50%\"\n    },\n    src: images[0].src,\n    alt: images[0].src,\n    onClick: onZoom,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    role: \"presentation\",\n    style: {\n      display: \"inline-block\",\n      width: \"50%\",\n      textAlign: \"center\",\n      verticalAlign: \"middle\"\n    },\n    onClick: onZoom,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__[\"PlusOutlined\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 11\n    }\n  }), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 11\n    }\n  }), images.length - 1, \"\\uAC1C\\uC758 \\uC0AC\\uC9C4 \\uB354\\uBCF4\\uAE30\")), showImagesZoom && __jsx(_ImagesZoom__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    image: images,\n    onClose: onClose,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 26\n    }\n  }));\n};\n_s(PostImages, \"xZ+WVc/D16Fmvriq1CwZMW/wLmE=\");\n_c = PostImages;\nPostImages.propTypes = {\n  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostImages);\nvar _c;\n$RefreshReg$(_c, \"PostImages\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0SW1hZ2VzLmpzeD83ZTdmIl0sIm5hbWVzIjpbIlBvc3RJbWFnZXMiLCJpbWFnZXMiLCJ1c2VTdGF0ZSIsInNob3dJbWFnZXNab29tIiwic2V0U2hvd0ltYWdlc1pvb20iLCJvblpvb20iLCJ1c2VDYWxsYmFjayIsIm9uQ2xvc2UiLCJsZW5ndGgiLCJzcmMiLCJkaXNwbGF5Iiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJ2ZXJ0aWNhbEFsaWduIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDbEI7QUFDYztBQUNYO0FBRXRDLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFVLE9BQW1CO0VBQUE7RUFBQSxJQUFiQyxNQUFNLFFBQU5BLE1BQU07RUFDMUIsZ0JBQTRDQyxzREFBUSxDQUFDLEtBQUssQ0FBQztJQUFwREMsY0FBYztJQUFFQyxpQkFBaUI7RUFFeEMsSUFBTUMsTUFBTSxHQUFHQyx5REFBVyxDQUFDLFlBQU07SUFDL0JGLGlCQUFpQixDQUFDLElBQUksQ0FBQztFQUN6QixDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sSUFBTUcsT0FBTyxHQUFHRCx5REFBVyxDQUFDLFlBQU07SUFDaENGLGlCQUFpQixDQUFDLEtBQUssQ0FBQztFQUMxQixDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sSUFBSUgsTUFBTSxDQUFDTyxNQUFNLEtBQUssQ0FBQyxFQUFFO0lBQ3ZCLG1FQUNFO01BQ0UsSUFBSSxFQUFDLGNBQWM7TUFDbkIsR0FBRyxFQUFFUCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNRLEdBQUk7TUFDbkIsR0FBRyxFQUFFUixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNRLEdBQUk7TUFDbkIsT0FBTyxFQUFFSixNQUFPO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsRUFDaEIsRUFDREYsY0FBYyxJQUFJLE1BQUMsbURBQVU7TUFBQyxLQUFLLEVBQUVGLE1BQU87TUFBQyxPQUFPLEVBQUVNLE9BQVE7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQUFHLENBQ2pFO0VBQ0w7RUFDQSxJQUFJTixNQUFNLENBQUNPLE1BQU0sS0FBSyxDQUFDLEVBQUU7SUFDdkIsT0FDRSxtRUFDRTtNQUNFLElBQUksRUFBQyxjQUFjO01BQ25CLEtBQUssRUFBRTtRQUNMRSxPQUFPLEVBQUUsY0FBYztRQUN2QkMsS0FBSyxFQUFFO01BQ1QsQ0FBRTtNQUNGLEdBQUcsRUFBRVYsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDUSxHQUFJO01BQ25CLEdBQUcsRUFBRVIsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDUSxHQUFJO01BQ25CLE9BQU8sRUFBRUosTUFBTztNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEVBQ2hCLEVBQ0Y7TUFDRSxJQUFJLEVBQUMsY0FBYztNQUNuQixLQUFLLEVBQUU7UUFDTEssT0FBTyxFQUFFLGNBQWM7UUFDdkJDLEtBQUssRUFBRTtNQUNULENBQUU7TUFDRixHQUFHLEVBQUVWLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ1EsR0FBSTtNQUNuQixHQUFHLEVBQUVSLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ1EsR0FBSTtNQUNuQixPQUFPLEVBQUVKLE1BQU87TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQUNoQixFQUNERixjQUFjLElBQUksTUFBQyxtREFBVTtNQUFDLE1BQU0sRUFBRUYsTUFBTztNQUFDLE9BQU8sRUFBRU0sT0FBUTtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEVBQUcsQ0FDbEU7RUFFUDtFQUNBLE9BQ0UsbUVBQ0U7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFO0lBQ0UsSUFBSSxFQUFDLGNBQWM7SUFDbkIsS0FBSyxFQUFFO01BQUVJLEtBQUssRUFBRTtJQUFNLENBQUU7SUFDeEIsR0FBRyxFQUFFVixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNRLEdBQUk7SUFDbkIsR0FBRyxFQUFFUixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNRLEdBQUk7SUFDbkIsT0FBTyxFQUFFSixNQUFPO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFDaEIsRUFDRjtJQUNFLElBQUksRUFBQyxjQUFjO0lBQ25CLEtBQUssRUFBRTtNQUNMSyxPQUFPLEVBQUUsY0FBYztNQUN2QkMsS0FBSyxFQUFFLEtBQUs7TUFDWkMsU0FBUyxFQUFFLFFBQVE7TUFDbkJDLGFBQWEsRUFBRTtJQUNqQixDQUFFO0lBQ0YsT0FBTyxFQUFFUixNQUFPO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FFaEIsTUFBQyw4REFBWTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQUcsRUFDaEI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFNLEVBQ0xKLE1BQU0sQ0FBQ08sTUFBTSxHQUFHLENBQUMsaURBRWQsQ0FDRixFQUNMTCxjQUFjLElBQUksTUFBQyxtREFBVTtJQUFDLEtBQUssRUFBRUYsTUFBTztJQUFDLE9BQU8sRUFBRU0sT0FBUTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQUcsQ0FDakU7QUFFUCxDQUFDO0FBQUMsR0E5RUlQLFVBQVU7QUFBQSxLQUFWQSxVQUFVO0FBZ0ZoQkEsVUFBVSxDQUFDYyxTQUFTLEdBQUc7RUFDckJiLE1BQU0sRUFBRWMsaURBQVMsQ0FBQ0MsT0FBTyxDQUFDRCxpREFBUyxDQUFDRSxNQUFNO0FBQzVDLENBQUM7QUFFY2pCLHlFQUFVLEVBQUM7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qb3N0SW1hZ2VzLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IFBsdXNPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuaW1wb3J0IEltYWdlc1pvb20gZnJvbSBcIi4vSW1hZ2VzWm9vbVwiO1xuXG5jb25zdCBQb3N0SW1hZ2VzID0gKHsgaW1hZ2VzIH0pID0+IHtcbiAgY29uc3QgW3Nob3dJbWFnZXNab29tLCBzZXRTaG93SW1hZ2VzWm9vbV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25ab29tID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFNob3dJbWFnZXNab29tKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25DbG9zZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTaG93SW1hZ2VzWm9vbShmYWxzZSk7XG4gIH0sIFtdKTtcblxuICBpZiAoaW1hZ2VzLmxlbmd0aCA9PT0gMSkge1xuICAgIDw+XG4gICAgICA8aW1nXG4gICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICBzcmM9e2ltYWdlc1swXS5zcmN9XG4gICAgICAgIGFsdD17aW1hZ2VzWzBdLnNyY31cbiAgICAgICAgb25DbGljaz17b25ab29tfVxuICAgICAgLz5cbiAgICAgIHtzaG93SW1hZ2VzWm9vbSAmJiA8SW1hZ2VzWm9vbSBpbWFnZT17aW1hZ2VzfSBvbkNsb3NlPXtvbkNsb3NlfSAvPn1cbiAgICA8Lz47XG4gIH1cbiAgaWYgKGltYWdlcy5sZW5ndGggPT09IDIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgICAgICAgICAgd2lkdGg6IFwiNTAlXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBzcmM9e2ltYWdlc1swXS5zcmN9XG4gICAgICAgICAgYWx0PXtpbWFnZXNbMF0uc3JjfVxuICAgICAgICAgIG9uQ2xpY2s9e29uWm9vbX1cbiAgICAgICAgLz5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgICAgICAgICAgd2lkdGg6IFwiNTAlXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBzcmM9e2ltYWdlc1sxXS5zcmN9XG4gICAgICAgICAgYWx0PXtpbWFnZXNbMV0uc3JjfVxuICAgICAgICAgIG9uQ2xpY2s9e29uWm9vbX1cbiAgICAgICAgLz5cbiAgICAgICAge3Nob3dJbWFnZXNab29tICYmIDxJbWFnZXNab29tIGltYWdlcz17aW1hZ2VzfSBvbkNsb3NlPXtvbkNsb3NlfSAvPn1cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjUwJVwiIH19XG4gICAgICAgICAgc3JjPXtpbWFnZXNbMF0uc3JjfVxuICAgICAgICAgIGFsdD17aW1hZ2VzWzBdLnNyY31cbiAgICAgICAgICBvbkNsaWNrPXtvblpvb219XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgICAgICAgIHdpZHRoOiBcIjUwJVwiLFxuICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIixcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uQ2xpY2s9e29uWm9vbX1cbiAgICAgICAgPlxuICAgICAgICAgIDxQbHVzT3V0bGluZWQgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCAtIDF9XG4gICAgICAgICAg6rCc7J2YIOyCrOynhCDrjZTrs7TquLBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtzaG93SW1hZ2VzWm9vbSAmJiA8SW1hZ2VzWm9vbSBpbWFnZT17aW1hZ2VzfSBvbkNsb3NlPXtvbkNsb3NlfSAvPn1cbiAgICA8Lz5cbiAgKTtcbn07XG5cblBvc3RJbWFnZXMucHJvcFR5cGVzID0ge1xuICBpbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdEltYWdlcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PostImages.jsx\n");

/***/ })

})