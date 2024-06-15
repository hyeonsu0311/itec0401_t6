"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/kakao-js-sdk";
exports.ids = ["vendor-chunks/kakao-js-sdk"];
exports.modules = {

/***/ "(ssr)/./node_modules/kakao-js-sdk/dist/index.js":
/*!*************************************************!*\
  !*** ./node_modules/kakao-js-sdk/dist/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.initKakao = void 0;\n/**\n * Kakao Javascript SDK 동적으로 불러오고 초기화 시킨다.\n * @param {string} javascript키\n * @returns {Promise} SDK 로드 여부\n */\nconst initKakao = (jsKey) => {\n    return new Promise((resolve, reject) => {\n        if (typeof window !== \"undefined\") {\n            var script = document.createElement(\"script\");\n            script.onload = function () {\n                // console.log(\"onload : \", document);\n                window.Kakao.init(jsKey);\n                resolve(true);\n            };\n            script.onerror = (e) => {\n                reject(e);\n            };\n            script.src = \"https://t1.kakaocdn.net/kakao_js_sdk/2.0.1/kakao.min.js\";\n            script.integrity =\n                \"sha384-eKjgHJ9+vwU/FCSUG3nV1RKFolUXLsc6nLQ2R1tD0t4YFPCvRmkcF8saIfOZNWf/\";\n            script.crossOrigin = \"anonymous\";\n            document.head.appendChild(script);\n        }\n        else {\n            // console.info(\"Loading Kakao...\");\n            // resolve(false);\n        }\n    });\n};\nexports.initKakao = initKakao;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMva2FrYW8tanMtc2RrL2Rpc3QvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmlwLy4vbm9kZV9tb2R1bGVzL2tha2FvLWpzLXNkay9kaXN0L2luZGV4LmpzP2Q5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmluaXRLYWthbyA9IHZvaWQgMDtcbi8qKlxuICogS2FrYW8gSmF2YXNjcmlwdCBTREsg64+Z7KCB7Jy866GcIOu2iOufrOyYpOqzoCDstIjquLDtmZQg7Iuc7YKo64ukLlxuICogQHBhcmFtIHtzdHJpbmd9IGphdmFzY3JpcHTtgqRcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBTREsg66Gc65OcIOyXrOu2gFxuICovXG5jb25zdCBpbml0S2FrYW8gPSAoanNLZXkpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwib25sb2FkIDogXCIsIGRvY3VtZW50KTtcbiAgICAgICAgICAgICAgICB3aW5kb3cuS2FrYW8uaW5pdChqc0tleSk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzY3JpcHQub25lcnJvciA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNjcmlwdC5zcmMgPSBcImh0dHBzOi8vdDEua2FrYW9jZG4ubmV0L2tha2FvX2pzX3Nkay8yLjAuMS9rYWthby5taW4uanNcIjtcbiAgICAgICAgICAgIHNjcmlwdC5pbnRlZ3JpdHkgPVxuICAgICAgICAgICAgICAgIFwic2hhMzg0LWVLamdISjkrdndVL0ZDU1VHM25WMVJLRm9sVVhMc2M2bkxRMlIxdEQwdDRZRlBDdlJta2NGOHNhSWZPWk5XZi9cIjtcbiAgICAgICAgICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IFwiYW5vbnltb3VzXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmluZm8oXCJMb2FkaW5nIEtha2FvLi4uXCIpO1xuICAgICAgICAgICAgLy8gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5leHBvcnRzLmluaXRLYWthbyA9IGluaXRLYWthbztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/kakao-js-sdk/dist/index.js\n");

/***/ })

};
;