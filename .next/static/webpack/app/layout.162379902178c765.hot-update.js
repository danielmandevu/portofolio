"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"b667ccdeb271\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/OTYzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImI2NjdjY2RlYjI3MVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/components/AnimationProvider.jsx":
/*!**************************************************!*\
  !*** ./src/app/components/AnimationProvider.jsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AnimationProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ \"(app-pages-browser)/./src/app/components/Navbar.jsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ \"(app-pages-browser)/./src/app/components/Footer.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction AnimationProvider(param) {\n    let { children } = param;\n    _s();\n    const pathName = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {\n        mode: \"wait\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-screen h-screen text-white px-4 sm:px-8 md:px-12 lg:px-20\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                    className: \"h-screen w-screen fixed bg-black z-40\",\n                    animate: {\n                        height: \"0vh\"\n                    },\n                    exit: {\n                        height: \"120vh\"\n                    },\n                    transition: {\n                        duration: 0.5,\n                        ease: \"easeOut\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/daniel/Documents/Data/2024/portofolio/src/app/components/AnimationProvider.jsx\",\n                    lineNumber: 13,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                    className: \"fixed m-auto right-0 left-0 top-0 bottom-0 text-[#ff104f] text-6xl w-fit h-fit z-50\",\n                    initial: {\n                        opacity: 1\n                    },\n                    animate: {\n                        opacity: 0\n                    },\n                    exit: {\n                        opacity: 0\n                    },\n                    transition: {\n                        duration: 0.8,\n                        ease: \"easeOut\"\n                    },\n                    children: pathName.substring(1)\n                }, void 0, false, {\n                    fileName: \"/Users/daniel/Documents/Data/2024/portofolio/src/app/components/AnimationProvider.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 12\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                    className: \"h-screen w-screen fixed bg-red rounded-t-[100px] bottom-0 z-30\",\n                    initial: {\n                        height: \"120vh\"\n                    },\n                    animate: {\n                        height: \"0vh\",\n                        transition: {\n                            delay: 0.5\n                        }\n                    },\n                    pathName: true\n                }, void 0, false, {\n                    fileName: \"/Users/daniel/Documents/Data/2024/portofolio/src/app/components/AnimationProvider.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 12\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-24\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/daniel/Documents/Data/2024/portofolio/src/app/components/AnimationProvider.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 12\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/daniel/Documents/Data/2024/portofolio/src/app/components/AnimationProvider.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-[calc(100vh-6rem)] xl:px-28\",\n                    children: children\n                }, void 0, false, {\n                    fileName: \"/Users/daniel/Documents/Data/2024/portofolio/src/app/components/AnimationProvider.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, pathName, true, {\n            fileName: \"/Users/daniel/Documents/Data/2024/portofolio/src/app/components/AnimationProvider.jsx\",\n            lineNumber: 12,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/daniel/Documents/Data/2024/portofolio/src/app/components/AnimationProvider.jsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(AnimationProvider, \"28xf+Q/MMfpBebWfp+J7Y3ZZbws=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname\n    ];\n});\n_c = AnimationProvider;\nvar _c;\n$RefreshReg$(_c, \"AnimationProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9BbmltYXRpb25Qcm92aWRlci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDeUI7QUFDNEI7QUFDeEI7QUFDZ0I7QUFDaEI7QUFFZCxTQUFTTSxrQkFBa0IsS0FBVTtRQUFWLEVBQUNDLFFBQVEsRUFBQyxHQUFWOztJQUN0QyxNQUFNQyxXQUFXSiw0REFBV0E7SUFDOUIscUJBQ0UsOERBQUNGLDBEQUFlQTtRQUFDTyxNQUFLO2tCQUNsQiw0RUFBQ0M7WUFBbUJDLFdBQVU7OzhCQUM1Qiw4REFBQ1YsaURBQU1BLENBQUNTLEdBQUc7b0JBQ1RDLFdBQVU7b0JBQ1ZDLFNBQVM7d0JBQUNDLFFBQU87b0JBQUs7b0JBQ3RCQyxNQUFNO3dCQUFDRCxRQUFPO29CQUFPO29CQUNyQkUsWUFBWTt3QkFBQ0MsVUFBUzt3QkFBS0MsTUFBSztvQkFBUzs7Ozs7OzhCQUUxQyw4REFBQ2hCLGlEQUFNQSxDQUFDUyxHQUFHO29CQUNWQyxXQUFVO29CQUNWTyxTQUFTO3dCQUFDQyxTQUFRO29CQUFDO29CQUNuQlAsU0FBUzt3QkFBQ08sU0FBUTtvQkFBQztvQkFDbkJMLE1BQU07d0JBQUNLLFNBQVE7b0JBQUM7b0JBQ2hCSixZQUFZO3dCQUFDQyxVQUFTO3dCQUFLQyxNQUFLO29CQUFTOzhCQUV4Q1QsU0FBU1ksU0FBUyxDQUFDOzs7Ozs7OEJBRXJCLDhEQUFDbkIsaURBQU1BLENBQUNTLEdBQUc7b0JBQ1ZDLFdBQVU7b0JBQ1ZPLFNBQVM7d0JBQUNMLFFBQU87b0JBQU87b0JBQ3hCRCxTQUFTO3dCQUFDQyxRQUFPO3dCQUFNRSxZQUFXOzRCQUFDTSxPQUFNO3dCQUFHO29CQUFDO29CQUM3Q2IsUUFBUTs7Ozs7OzhCQUVWLDhEQUFDRTtvQkFBSUMsV0FBVTs4QkFDZCw0RUFBQ1IsK0NBQU1BOzs7Ozs7Ozs7OzhCQUVSLDhEQUFDTztvQkFBSUMsV0FBVTs4QkFDYko7Ozs7Ozs7V0ExQk1DOzs7Ozs7Ozs7O0FBZ0NsQjtHQXBDd0JGOztRQUNIRix3REFBV0E7OztLQURSRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvQW5pbWF0aW9uUHJvdmlkZXIuanN4PzEzMzMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7bW90aW9uLCBBbmltYXRlUHJlc2VuY2V9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9OYXZiYXInXG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFuaW1hdGlvblByb3ZpZGVyKHtjaGlsZHJlbn0pIHtcbiAgICBjb25zdCBwYXRoTmFtZSA9IHVzZVBhdGhuYW1lKCk7XG4gIHJldHVybiAoXG4gICAgPEFuaW1hdGVQcmVzZW5jZSBtb2RlPVwid2FpdFwiPlxuICAgICAgICA8ZGl2IGtleT17cGF0aE5hbWV9IGNsYXNzTmFtZT1cInctc2NyZWVuIGgtc2NyZWVuIHRleHQtd2hpdGUgcHgtNCBzbTpweC04IG1kOnB4LTEyIGxnOnB4LTIwXCI+XG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtc2NyZWVuIHctc2NyZWVuIGZpeGVkIGJnLWJsYWNrIHotNDBcIlxuICAgICAgICAgICAgYW5pbWF0ZT17e2hlaWdodDpcIjB2aFwifX1cbiAgICAgICAgICAgIGV4aXQ9e3toZWlnaHQ6XCIxMjB2aFwifX1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e3tkdXJhdGlvbjowLjUsIGVhc2U6XCJlYXNlT3V0XCJ9fVxuICAgICAgICAgICAvPlxuICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgbS1hdXRvIHJpZ2h0LTAgbGVmdC0wIHRvcC0wIGJvdHRvbS0wIHRleHQtWyNmZjEwNGZdIHRleHQtNnhsIHctZml0IGgtZml0IHotNTBcIlxuICAgICAgICAgICAgaW5pdGlhbD17e29wYWNpdHk6MX19XG4gICAgICAgICAgICBhbmltYXRlPXt7b3BhY2l0eTowfX1cbiAgICAgICAgICAgIGV4aXQ9e3tvcGFjaXR5OjB9fVxuICAgICAgICAgICAgdHJhbnNpdGlvbj17e2R1cmF0aW9uOjAuOCwgZWFzZTpcImVhc2VPdXRcIn19XG4gICAgICAgICAgID5cbiAgICAgICAgICAgIHtwYXRoTmFtZS5zdWJzdHJpbmcoMSl9XG4gICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtc2NyZWVuIHctc2NyZWVuIGZpeGVkIGJnLXJlZCByb3VuZGVkLXQtWzEwMHB4XSBib3R0b20tMCB6LTMwXCJcbiAgICAgICAgICAgIGluaXRpYWw9e3toZWlnaHQ6XCIxMjB2aFwifX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3toZWlnaHQ6XCIwdmhcIix0cmFuc2l0aW9uOntkZWxheTowLjV9fX1cbiAgICAgICAgICAgIHBhdGhOYW1lXG4gICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTI0XCI+XG4gICAgICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtW2NhbGMoMTAwdmgtNnJlbSldIHhsOnB4LTI4XCI+XG4gICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsIk5hdmJhciIsInVzZVBhdGhuYW1lIiwiRm9vdGVyIiwiQW5pbWF0aW9uUHJvdmlkZXIiLCJjaGlsZHJlbiIsInBhdGhOYW1lIiwibW9kZSIsImRpdiIsImNsYXNzTmFtZSIsImFuaW1hdGUiLCJoZWlnaHQiLCJleGl0IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsImluaXRpYWwiLCJvcGFjaXR5Iiwic3Vic3RyaW5nIiwiZGVsYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/AnimationProvider.jsx\n"));

/***/ })

});