webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_REQUEST\", function() { return ADD_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_SUCCESS\", function() { return ADD_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_FAILURE\", function() { return ADD_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_REQUEST\", function() { return ADD_COMMENT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_SUCCESS\", function() { return ADD_COMMENT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_FAILURE\", function() { return ADD_COMMENT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addComment\", function() { return addComment; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ \"./node_modules/shortid/index.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nvar initialState = {\n  mainPosts: [{\n    // id, content 는 게시글 자체의 속성이기 때문에 소문자, User,Images,Comments 는 다른정보들과 합쳐서 주기 때문에 대문자\n    id: 1,\n    User: {\n      id: 1,\n      nickname: \"뚜갱\"\n    },\n    content: \"첫번째 게시글 #해시태그 #익스프레스\",\n    Images: [{\n      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n      src: \"http://www.chemicalnews.co.kr/news/photo/202106/3636_10174_4958.jpg\"\n    }, {\n      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n      src: \"https://src.hidoc.co.kr/image/lib/2022/5/12/1652337370806_0.jpg\"\n    }, {\n      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n      src: \"http://image.dongascience.com/Photo/2019/12/43a8a87814b98b5346192ec9855f5883.jpg\"\n    }],\n    Comments: [{\n      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n      User: {\n        id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n        nickname: \"Amanda\"\n      },\n      content: \"우와아 고양이다\"\n    }]\n  }],\n  ImagePaths: [],\n  // 이미지 업로드할 때 이미지의 경로들이 저장됨\n  addPostLoading: false,\n  addPostDone: false,\n  addPostError: null,\n  addCommentLoading: false,\n  addCommentDone: false,\n  addCommentError: null\n  // 게시글 추가가 완료됬을 때 true\n};\n\nvar ADD_POST_REQUEST = \"ADD_POST_REQUEST\";\nvar ADD_POST_SUCCESS = \"ADD_POST_SUCCESS\";\nvar ADD_POST_FAILURE = \"ADD_POST_FAILURE\";\nvar ADD_COMMENT_REQUEST = \"ADD_COMMENT_REQUEST\";\nvar ADD_COMMENT_SUCCESS = \"ADD_COMMENT_SUCCESS\";\nvar ADD_COMMENT_FAILURE = \"ADD_COMMENT_FAILURE\";\n\n// 상수로 액션이름을 빼주면 좋은 점: const 값을 재활용하여 오타가 나는 일을 막을 수 있음\nvar addPost = function addPost(data) {\n  return {\n    type: ADD_POST_REQUEST,\n    data: data\n  };\n};\nvar addComment = function addComment(data) {\n  return {\n    type: ADD_COMMENT_REQUEST,\n    data: data\n  };\n};\nvar dummyPost = function dummyPost(data) {\n  return {\n    id: data.id,\n    content: data,\n    User: {\n      id: 1,\n      nickname: \"뚜갱\"\n    },\n    Images: [],\n    Comments: []\n  };\n};\nvar dummyComment = function dummyComment(data) {\n  return {\n    id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n    content: data,\n    User: {\n      id: 1,\n      nickname: \"뚜갱\"\n    }\n  };\n};\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  switch (action.type) {\n    case ADD_POST_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addPostLoading: true,\n        addPostDone: false,\n        addPostError: null\n      });\n    case ADD_POST_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mainPosts: [dummyPost(action.data)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts)),\n        // 앞에다 dummyPost를 추가해야 게시글 최상단에 올라감\n        addPostLoading: false,\n        addPostDone: true\n      });\n    case ADD_POST_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addPostLoading: false,\n        addPostError: action.error\n      });\n    case ADD_COMMENT_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addCommentLoading: true,\n        addCommentDone: false,\n        addCommentError: null\n      });\n    case ADD_COMMENT_SUCCESS:\n      {\n        //불변성\n        var postIndex = state.mainPosts.findIndex(function (v) {\n          return v.id === action.data.postId;\n        });\n        var post = _objectSpread({}, state.mainPosts[postIndex]);\n        post.Comments = [dummyComment(action.data.content)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(post.Comments));\n        var mainPosts = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts);\n        mainPosts[postIndex] = post;\n        return _objectSpread(_objectSpread({}, state), {}, {\n          mainPosts: mainPosts,\n          addCommentLoading: false,\n          addCommentDone: true\n        });\n      }\n    case ADD_COMMENT_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addCommentLoading: false,\n        addCommentError: action.error\n      });\n    default:\n      return state;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcz9hN2UzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImlkIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkltYWdlcyIsInNob3J0aWQiLCJnZW5lcmF0ZSIsInNyYyIsIkNvbW1lbnRzIiwiSW1hZ2VQYXRocyIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiYWRkUG9zdCIsImRhdGEiLCJ0eXBlIiwiYWRkQ29tbWVudCIsImR1bW15UG9zdCIsImR1bW15Q29tbWVudCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImVycm9yIiwicG9zdEluZGV4IiwiZmluZEluZGV4IiwidiIsInBvc3RJZCIsInBvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUV2QixJQUFNQSxZQUFZLEdBQUc7RUFDMUJDLFNBQVMsRUFBRSxDQUNUO0lBQ0U7SUFDQUMsRUFBRSxFQUFFLENBQUM7SUFDTEMsSUFBSSxFQUFFO01BQ0pELEVBQUUsRUFBRSxDQUFDO01BQ0xFLFFBQVEsRUFBRTtJQUNaLENBQUM7SUFDREMsT0FBTyxFQUFFLHNCQUFzQjtJQUMvQkMsTUFBTSxFQUFFLENBQ047TUFDRUosRUFBRSxFQUFFSyw4Q0FBTyxDQUFDQyxRQUFRLEVBQUU7TUFDdEJDLEdBQUcsRUFBRTtJQUNQLENBQUMsRUFDRDtNQUNFUCxFQUFFLEVBQUVLLDhDQUFPLENBQUNDLFFBQVEsRUFBRTtNQUN0QkMsR0FBRyxF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dEIsdUNBQ0tVLEtBQUs7UUFDUmhCLGlCQUFpQixFQUFFLElBQUk7UUFDdkJDLGNBQWMsRUFBRSxLQUFLO1FBQ3JCQyxlQUFlLEVBQUU7TUFBSTtJQUV6QixLQUFLSyxtQkFBbUI7TUFBRTtRQUN4QjtRQUNBLElBQU1ZLFNBQVMsR0FBR0gsS0FBSyxDQUFDOUIsU0FBUyxDQUFDa0MsU0FBUyxDQUN6QyxVQUFDQyxDQUFDO1VBQUEsT0FBS0EsQ0FBQyxDQUFDbEMsRUFBRSxLQUFLOEIsTUFBTSxDQUFDUCxJQUFJLENBQUNZLE1BQU07UUFBQSxFQUNuQztRQUNELElBQU1DLElBQUkscUJBQVFQLEtBQUssQ0FBQzlCLFNBQVMsQ0FBQ2lDLFNBQVMsQ0FBQyxDQUFFO1FBQzlDSSxJQUFJLENBQUM1QixRQUFRLElBQUltQixZQUFZLENBQUNHLE1BQU0sQ0FBQ1AsSUFBSSxDQUFDcEIsT0FBTyxDQUFDLHNHQUFLaUMsSUFBSSxDQUFDNUIsUUFBUSxFQUFDO1FBQ3JFLElBQU1ULFNBQVMsR0FBRyw2RkFBSThCLEtBQUssQ0FBQzlCLFNBQVMsQ0FBQztRQUN0Q0EsU0FBUyxDQUFDaUMsU0FBUyxDQUFDLEdBQUdJLElBQUk7UUFFM0IsdUNBQ0tQLEtBQUs7VUFDUjlCLFNBQVMsRUFBVEEsU0FBUztVQUNUYyxpQkFBaUIsRUFBRSxLQUFLO1VBQ3hCQyxjQUFjLEVBQUU7UUFBSTtNQUV4QjtJQUNBLEtBQUtPLG1CQUFtQjtNQUN0Qix1Q0FDS1EsS0FBSztRQUNSaEIsaUJBQWlCLEVBQUUsS0FBSztRQUN4QkUsZUFBZSxFQUFFZSxNQUFNLENBQUNDO01BQUs7SUFFakM7TUFDRSxPQUFPRixLQUFLO0VBQUM7QUFFbkIsQ0FBQztBQUVjRCxzRUFBTyxFQUFDIiwiZmlsZSI6Ii4vcmVkdWNlcnMvcG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaG9ydGlkIGZyb20gXCJzaG9ydGlkXCI7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIG1haW5Qb3N0czogW1xuICAgIHtcbiAgICAgIC8vIGlkLCBjb250ZW50IOuKlCDqsozsi5zquIAg7J6Q7LK07J2YIOyGjeyEseydtOq4sCDrlYzrrLjsl5Ag7IaM66y47J6QLCBVc2VyLEltYWdlcyxDb21tZW50cyDripQg64uk66W47KCV67O065Ok6rO8IO2VqeyzkOyEnCDso7zquLAg65WM66y47JeQIOuMgOusuOyekFxuICAgICAgaWQ6IDEsXG4gICAgICBVc2VyOiB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuaWNrbmFtZTogXCLrmpzqsLFcIixcbiAgICAgIH0sXG4gICAgICBjb250ZW50OiBcIuyyq+uyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnOq3uCAj7J217Iqk7ZSE66CI7IqkXCIsXG4gICAgICBJbWFnZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXG4gICAgICAgICAgc3JjOiBcImh0dHA6Ly93d3cuY2hlbWljYWxuZXdzLmNvLmtyL25ld3MvcGhvdG8vMjAyMTA2LzM2MzZfMTAxNzRfNDk1OC5qcGdcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXG4gICAgICAgICAgc3JjOiBcImh0dHBzOi8vc3JjLmhpZG9jLmNvLmtyL2ltYWdlL2xpYi8yMDIyLzUvMTIvMTY1MjMzNzM3MDgwNl8wLmpwZ1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcbiAgICAgICAgICBzcmM6IFwiaHR0cDovL2ltYWdlLmRvbmdhc2NpZW5jZS5jb20vUGhvdG8vMjAxOS8xMi80M2E4YTg3ODE0Yjk4YjUzNDYxOTJlYzk4NTVmNTg4My5qcGdcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBDb21tZW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcbiAgICAgICAgICBVc2VyOiB7XG4gICAgICAgICAgICBpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxuICAgICAgICAgICAgbmlja25hbWU6IFwiQW1hbmRhXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb250ZW50OiBcIuyasOyZgOyVhCDqs6DslpHsnbTri6RcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgXSxcbiAgSW1hZ2VQYXRoczogW10sXG4gIC8vIOydtOuvuOyngCDsl4XroZzrk5ztlaAg65WMIOydtOuvuOyngOydmCDqsr3roZzrk6TsnbQg7KCA7J6l65CoXG4gIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcbiAgYWRkUG9zdERvbmU6IGZhbHNlLFxuICBhZGRQb3N0RXJyb3I6IG51bGwsXG5cbiAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxuICBhZGRDb21tZW50RG9uZTogZmFsc2UsXG4gIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcbiAgLy8g6rKM7Iuc6riAIOy2lOqwgOqwgCDsmYTro4zrkKzsnYQg65WMIHRydWVcbn07XG5cbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gXCJBRERfUE9TVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9IFwiQUREX1BPU1RfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSBcIkFERF9QT1NUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSBcIkFERF9DT01NRU5UX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gXCJBRERfQ09NTUVOVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9IFwiQUREX0NPTU1FTlRfRkFJTFVSRVwiO1xuXG4vLyDsg4HsiJjroZwg7JWh7IWY7J2066aE7J2EIOu5vOyjvOuptCDsoovsnYAg7KCQOiBjb25zdCDqsJLsnYQg7J6s7Zmc7Jqp7ZWY7JesIOyYpO2DgOqwgCDrgpjripQg7J287J2EIOunieydhCDsiJgg7J6I7J2MXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9PiAoe1xuICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxuICBkYXRhLFxufSk7XG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xuICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxuICBkYXRhLFxufSk7XG5jb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcbiAgaWQ6IGRhdGEuaWQsXG4gIGNvbnRlbnQ6IGRhdGEsXG4gIFVzZXI6IHtcbiAgICBpZDogMSxcbiAgICBuaWNrbmFtZTogXCLrmpzqsLFcIixcbiAgfSxcbiAgSW1hZ2VzOiBbXSxcbiAgQ29tbWVudHM6IFtdLFxufSk7XG5cbmNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9PiAoe1xuICBpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxuICBjb250ZW50OiBkYXRhLFxuICBVc2VyOiB7XG4gICAgaWQ6IDEsXG4gICAgbmlja25hbWU6IFwi65qc6rCxXCIsXG4gIH0sXG59KTtcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYWRkUG9zdExvYWRpbmc6IHRydWUsXG4gICAgICAgIGFkZFBvc3REb25lOiBmYWxzZSxcbiAgICAgICAgYWRkUG9zdEVycm9yOiBudWxsLFxuICAgICAgfTtcbiAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbWFpblBvc3RzOiBbZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSwgLi4uc3RhdGUubWFpblBvc3RzXSxcbiAgICAgICAgLy8g7JWe7JeQ64ukIGR1bW15UG9zdOulvCDstpTqsIDtlbTslbwg6rKM7Iuc6riAIOy1nOyDgeuLqOyXkCDsmKzrnbzqsJBcbiAgICAgICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxuICAgICAgICBhZGRQb3N0RG9uZTogdHJ1ZSxcbiAgICAgIH07XG4gICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgYWRkUG9zdEVycm9yOiBhY3Rpb24uZXJyb3IsXG4gICAgICB9O1xuICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhZGRDb21tZW50TG9hZGluZzogdHJ1ZSxcbiAgICAgICAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxuICAgICAgICBhZGRDb21tZW50RXJyb3I6IG51bGwsXG4gICAgICB9O1xuICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xuICAgICAgLy/rtojrs4DshLFcbiAgICAgIGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgoXG4gICAgICAgICh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWRcbiAgICAgICk7XG4gICAgICBjb25zdCBwb3N0ID0geyAuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XSB9O1xuICAgICAgcG9zdC5Db21tZW50cyA9IFtkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCksIC4uLnBvc3QuQ29tbWVudHNdO1xuICAgICAgY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XG4gICAgICBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHBvc3Q7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtYWluUG9zdHMsXG4gICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgYWRkQ29tbWVudERvbmU6IHRydWUsXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxuICAgICAgICBhZGRDb21tZW50RXJyb3I6IGFjdGlvbi5lcnJvcixcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ })

})