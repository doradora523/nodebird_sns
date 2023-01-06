webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_REQUEST\", function() { return ADD_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_SUCCESS\", function() { return ADD_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_FAILURE\", function() { return ADD_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_REQUEST\", function() { return REMOVE_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_SUCCESS\", function() { return REMOVE_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_FAILURE\", function() { return REMOVE_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_REQUEST\", function() { return ADD_COMMENT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_SUCCESS\", function() { return ADD_COMMENT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_FAILURE\", function() { return ADD_COMMENT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addComment\", function() { return addComment; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ \"./node_modules/shortid/index.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nvar initialState = {\n  mainPosts: [{\n    // id, content 는 게시글 자체의 속성이기 때문에 소문자, User,Images,Comments 는 다른정보들과 합쳐서 주기 때문에 대문자\n    id: 1,\n    User: {\n      id: 1,\n      nickname: \"뚜갱\"\n    },\n    content: \"첫번째 게시글 #해시태그 #익스프레스\",\n    Images: [{\n      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n      src: \"http://www.chemicalnews.co.kr/news/photo/202106/3636_10174_4958.jpg\"\n    }, {\n      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n      src: \"https://src.hidoc.co.kr/image/lib/2022/5/12/1652337370806_0.jpg\"\n    }, {\n      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n      src: \"http://image.dongascience.com/Photo/2019/12/43a8a87814b98b5346192ec9855f5883.jpg\"\n    }],\n    Comments: [{\n      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n      User: {\n        id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n        nickname: \"Amanda\"\n      },\n      content: \"우와아 고양이다\"\n    }]\n  }],\n  ImagePaths: [],\n  // 이미지 업로드할 때 이미지의 경로들이 저장됨\n  addPostLoading: false,\n  addPostDone: false,\n  addPostError: null,\n  removePostLoading: false,\n  removePostDone: false,\n  removePostError: null,\n  addCommentLoading: false,\n  addCommentDone: false,\n  addCommentError: null\n  // 게시글 추가가 완료됬을 때 true\n};\n\nvar ADD_POST_REQUEST = \"ADD_POST_REQUEST\";\nvar ADD_POST_SUCCESS = \"ADD_POST_SUCCESS\";\nvar ADD_POST_FAILURE = \"ADD_POST_FAILURE\";\nvar REMOVE_POST_REQUEST = \"REMOVE_POST_REQUEST\";\nvar REMOVE_POST_SUCCESS = \"REMOVE_POST_SUCCESS\";\nvar REMOVE_POST_FAILURE = \"REMOVE_POST_FAILURE\";\nvar ADD_COMMENT_REQUEST = \"ADD_COMMENT_REQUEST\";\nvar ADD_COMMENT_SUCCESS = \"ADD_COMMENT_SUCCESS\";\nvar ADD_COMMENT_FAILURE = \"ADD_COMMENT_FAILURE\";\n\n// 상수로 액션이름을 빼주면 좋은 점: const 값을 재활용하여 오타가 나는 일을 막을 수 있음\nvar addPost = function addPost(data) {\n  return {\n    type: ADD_POST_REQUEST,\n    data: data\n  };\n};\nvar addComment = function addComment(data) {\n  return {\n    type: ADD_COMMENT_REQUEST,\n    data: data\n  };\n};\nvar dummyPost = function dummyPost(data) {\n  return {\n    id: data.id,\n    content: data.content,\n    User: {\n      id: 1,\n      nickname: \"뚜갱\"\n    },\n    Images: [],\n    Comments: []\n  };\n};\nvar dummyComment = function dummyComment(data) {\n  return {\n    id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n    content: data,\n    User: {\n      id: 1,\n      nickname: \"뚜갱\"\n    }\n  };\n};\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  switch (action.type) {\n    case ADD_POST_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addPostLoading: true,\n        addPostDone: false,\n        addPostError: null\n      });\n    case ADD_POST_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mainPosts: [dummyPost(action.data)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts)),\n        // 앞에다 dummyPost를 추가해야 게시글 최상단에 올라감\n        addPostLoading: false,\n        addPostDone: true\n      });\n    case ADD_POST_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addPostLoading: false,\n        addPostError: action.error\n      });\n    case REMOVE_POST_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        removePostLoading: true,\n        removePostDone: false,\n        removePostError: null\n      });\n    case REMOVE_POST_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mainPosts: [dummyPost(action.data)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts)),\n        // 앞에다 dummyPost를 추가해야 게시글 최상단에 올라감\n        removePostLoading: false,\n        removePostDone: true\n      });\n    case REMOVE_POST_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        REMOVEPostLoading: false,\n        REMOVEPostError: action.error\n      });\n    case ADD_COMMENT_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addCommentLoading: true,\n        addCommentDone: false,\n        addCommentError: null\n      });\n    case ADD_COMMENT_SUCCESS:\n      {\n        //불변성\n        var postIndex = state.mainPosts.findIndex(function (v) {\n          return v.id === action.data.postId;\n        });\n        var post = _objectSpread({}, state.mainPosts[postIndex]);\n        post.Comments = [dummyComment(action.data.content)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(post.Comments));\n        var mainPosts = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts);\n        mainPosts[postIndex] = post;\n        return _objectSpread(_objectSpread({}, state), {}, {\n          mainPosts: mainPosts,\n          addCommentLoading: false,\n          addCommentDone: true\n        });\n      }\n    case ADD_COMMENT_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addCommentLoading: false,\n        addCommentError: action.error\n      });\n    default:\n      return state;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcz9hN2UzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImlkIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkltYWdlcyIsInNob3J0aWQiLCJnZW5lcmF0ZSIsInNyYyIsIkNvbW1lbnRzIiwiSW1hZ2VQYXRocyIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsImFkZFBvc3QiLCJkYXRhIiwidHlwZSIsImFkZENvbW1lbnQiLCJkdW1teVBvc3QiLCJkdW1teUNvbW1lbnQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJlcnJvciIsIlJFTU9WRVBvc3RMb2FkaW5nIiwiUkVNT1ZFUG9zdEVycm9yIiwicG9zdEluZGV4IiwiZmluZEluZGV4IiwidiIsInBvc3RJZCIsInBvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUV2QixJQUFNQSxZQUFZLEdBQUc7RUFDMUJDLFNBQVMsRUFBRSxDQUNUO0lBQ0U7SUFDQUMsRUFBRSxFQUFFLENBQUM7SUFDTEMsSUFBSSxFQUFFO01BQ0pELEVBQUUsRUFBRSxDQUFDO01BQ0xFLFFBQVEsRUFBRTtJQUNaLENBQUM7SUFDREMs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Q0FBQzFDLEVBQUUsS0FBS29DLE1BQU0sQ0FBQ1AsSUFBSSxDQUFDYyxNQUFNO1FBQUEsRUFDbkM7UUFDRCxJQUFNQyxJQUFJLHFCQUFRVCxLQUFLLENBQUNwQyxTQUFTLENBQUN5QyxTQUFTLENBQUMsQ0FBRTtRQUM5Q0ksSUFBSSxDQUFDcEMsUUFBUSxJQUFJeUIsWUFBWSxDQUFDRyxNQUFNLENBQUNQLElBQUksQ0FBQzFCLE9BQU8sQ0FBQyxzR0FBS3lDLElBQUksQ0FBQ3BDLFFBQVEsRUFBQztRQUNyRSxJQUFNVCxTQUFTLEdBQUcsNkZBQUlvQyxLQUFLLENBQUNwQyxTQUFTLENBQUM7UUFDdENBLFNBQVMsQ0FBQ3lDLFNBQVMsQ0FBQyxHQUFHSSxJQUFJO1FBRTNCLHVDQUNLVCxLQUFLO1VBQ1JwQyxTQUFTLEVBQVRBLFNBQVM7VUFDVGlCLGlCQUFpQixFQUFFLEtBQUs7VUFDeEJDLGNBQWMsRUFBRTtRQUFJO01BRXhCO0lBQ0EsS0FBS1UsbUJBQW1CO01BQ3RCLHVDQUNLUSxLQUFLO1FBQ1JuQixpQkFBaUIsRUFBRSxLQUFLO1FBQ3hCRSxlQUFlLEVBQUVrQixNQUFNLENBQUNDO01BQUs7SUFFakM7TUFDRSxPQUFPRixLQUFLO0VBQUM7QUFFbkIsQ0FBQztBQUVjRCxzRUFBTyxFQUFDIiwiZmlsZSI6Ii4vcmVkdWNlcnMvcG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaG9ydGlkIGZyb20gXCJzaG9ydGlkXCI7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIG1haW5Qb3N0czogW1xuICAgIHtcbiAgICAgIC8vIGlkLCBjb250ZW50IOuKlCDqsozsi5zquIAg7J6Q7LK07J2YIOyGjeyEseydtOq4sCDrlYzrrLjsl5Ag7IaM66y47J6QLCBVc2VyLEltYWdlcyxDb21tZW50cyDripQg64uk66W47KCV67O065Ok6rO8IO2VqeyzkOyEnCDso7zquLAg65WM66y47JeQIOuMgOusuOyekFxuICAgICAgaWQ6IDEsXG4gICAgICBVc2VyOiB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuaWNrbmFtZTogXCLrmpzqsLFcIixcbiAgICAgIH0sXG4gICAgICBjb250ZW50OiBcIuyyq+uyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnOq3uCAj7J217Iqk7ZSE66CI7IqkXCIsXG4gICAgICBJbWFnZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXG4gICAgICAgICAgc3JjOiBcImh0dHA6Ly93d3cuY2hlbWljYWxuZXdzLmNvLmtyL25ld3MvcGhvdG8vMjAyMTA2LzM2MzZfMTAxNzRfNDk1OC5qcGdcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXG4gICAgICAgICAgc3JjOiBcImh0dHBzOi8vc3JjLmhpZG9jLmNvLmtyL2ltYWdlL2xpYi8yMDIyLzUvMTIvMTY1MjMzNzM3MDgwNl8wLmpwZ1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcbiAgICAgICAgICBzcmM6IFwiaHR0cDovL2ltYWdlLmRvbmdhc2NpZW5jZS5jb20vUGhvdG8vMjAxOS8xMi80M2E4YTg3ODE0Yjk4YjUzNDYxOTJlYzk4NTVmNTg4My5qcGdcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBDb21tZW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcbiAgICAgICAgICBVc2VyOiB7XG4gICAgICAgICAgICBpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxuICAgICAgICAgICAgbmlja25hbWU6IFwiQW1hbmRhXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb250ZW50OiBcIuyasOyZgOyVhCDqs6DslpHsnbTri6RcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgXSxcbiAgSW1hZ2VQYXRoczogW10sXG4gIC8vIOydtOuvuOyngCDsl4XroZzrk5ztlaAg65WMIOydtOuvuOyngOydmCDqsr3roZzrk6TsnbQg7KCA7J6l65CoXG4gIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcbiAgYWRkUG9zdERvbmU6IGZhbHNlLFxuICBhZGRQb3N0RXJyb3I6IG51bGwsXG4gIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcbiAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxuICByZW1vdmVQb3N0RXJyb3I6IG51bGwsXG4gIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcbiAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxuICBhZGRDb21tZW50RXJyb3I6IG51bGwsXG4gIC8vIOqyjOyLnOq4gCDstpTqsIDqsIAg7JmE66OM65Cs7J2EIOuVjCB0cnVlXG59O1xuXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9IFwiQUREX1BPU1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSBcIkFERF9QT1NUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gXCJBRERfUE9TVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gXCJSRU1PVkVfUE9TVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9IFwiUkVNT1ZFX1BPU1RfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSBcIlJFTU9WRV9QT1NUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSBcIkFERF9DT01NRU5UX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gXCJBRERfQ09NTUVOVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9IFwiQUREX0NPTU1FTlRfRkFJTFVSRVwiO1xuXG5cbi8vIOyDgeyImOuhnCDslaHshZjsnbTrpoTsnYQg67m87KO866m0IOyii+ydgCDsoJA6IGNvbnN0IOqwkuydhCDsnqztmZzsmqntlZjsl6wg7Jik7YOA6rCAIOuCmOuKlCDsnbzsnYQg66eJ7J2EIOyImCDsnojsnYxcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0gKGRhdGEpID0+ICh7XG4gIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXG4gIGRhdGEsXG59KTtcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XG4gIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXG4gIGRhdGEsXG59KTtcbmNvbnN0IGR1bW15UG9zdCA9IChkYXRhKSA9PiAoe1xuICBpZDogZGF0YS5pZCxcbiAgY29udGVudDogZGF0YS5jb250ZW50LFxuICBVc2VyOiB7XG4gICAgaWQ6IDEsXG4gICAgbmlja25hbWU6IFwi65qc6rCxXCIsXG4gIH0sXG4gIEltYWdlczogW10sXG4gIENvbW1lbnRzOiBbXSxcbn0pO1xuXG5jb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKHtcbiAgaWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcbiAgY29udGVudDogZGF0YSxcbiAgVXNlcjoge1xuICAgIGlkOiAxLFxuICAgIG5pY2tuYW1lOiBcIuuanOqwsVwiLFxuICB9LFxufSk7XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFkZFBvc3RMb2FkaW5nOiB0cnVlLFxuICAgICAgICBhZGRQb3N0RG9uZTogZmFsc2UsXG4gICAgICAgIGFkZFBvc3RFcnJvcjogbnVsbCxcbiAgICAgIH07XG4gICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG1haW5Qb3N0czogW2R1bW15UG9zdChhY3Rpb24uZGF0YSksIC4uLnN0YXRlLm1haW5Qb3N0c10sXG4gICAgICAgIC8vIOyVnuyXkOuLpCBkdW1teVBvc3Trpbwg7LaU6rCA7ZW07JW8IOqyjOyLnOq4gCDstZzsg4Hri6jsl5Ag7Jis65286rCQXG4gICAgICAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgYWRkUG9zdERvbmU6IHRydWUsXG4gICAgICB9O1xuICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXG4gICAgICAgIGFkZFBvc3RFcnJvcjogYWN0aW9uLmVycm9yLFxuICAgICAgfTtcblxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIHJlbW92ZVBvc3RMb2FkaW5nOiB0cnVlLFxuICAgICAgICAgIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcbiAgICAgICAgICByZW1vdmVQb3N0RXJyb3I6IG51bGwsXG4gICAgICAgIH07XG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgbWFpblBvc3RzOiBbZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSwgLi4uc3RhdGUubWFpblBvc3RzXSxcbiAgICAgICAgICAvLyDslZ7sl5Dri6QgZHVtbXlQb3N066W8IOy2lOqwgO2VtOyVvCDqsozsi5zquIAg7LWc7IOB64uo7JeQIOyYrOudvOqwkFxuICAgICAgICAgIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICByZW1vdmVQb3N0RG9uZTogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBSRU1PVkVQb3N0TG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgUkVNT1ZFUG9zdEVycm9yOiBhY3Rpb24uZXJyb3IsXG4gICAgICAgIH07XG5cbiAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6IHRydWUsXG4gICAgICAgIGFkZENvbW1lbnREb25lOiBmYWxzZSxcbiAgICAgICAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxuICAgICAgfTtcbiAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6IHtcbiAgICAgIC8v67aI67OA7ISxXG4gICAgICBjb25zdCBwb3N0SW5kZXggPSBzdGF0ZS5tYWluUG9zdHMuZmluZEluZGV4KFxuICAgICAgICAodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkXG4gICAgICApO1xuICAgICAgY29uc3QgcG9zdCA9IHsgLi4uc3RhdGUubWFpblBvc3RzW3Bvc3RJbmRleF0gfTtcbiAgICAgIHBvc3QuQ29tbWVudHMgPSBbZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpLCAuLi5wb3N0LkNvbW1lbnRzXTtcbiAgICAgIGNvbnN0IG1haW5Qb3N0cyA9IFsuLi5zdGF0ZS5tYWluUG9zdHNdO1xuICAgICAgbWFpblBvc3RzW3Bvc3RJbmRleF0gPSBwb3N0O1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbWFpblBvc3RzLFxuICAgICAgICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXG4gICAgICAgIGFkZENvbW1lbnREb25lOiB0cnVlLFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgYWRkQ29tbWVudEVycm9yOiBhY3Rpb24uZXJyb3IsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ })

})