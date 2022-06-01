/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/style.css":
/*!**************************!*\
  !*** ./public/style.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./public/style.css?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../public/style.css */ \"./public/style.css\");\n\nvar taskList = [];\nvar doneList = [];\nvar currentMode = 'TODO';\nvar $text_box = document.querySelector('input[type=\"text\"]');\nvar $form = document.querySelector('.form');\nvar $ul = document.querySelector('.task-list');\nvar $todo = document.querySelector('.menu.todo');\nvar $done = document.querySelector('.menu.done');\nvar deleteDone = function (task) {\n    doneList = doneList.filter(function (_task) { return _task.date !== task.date; });\n};\nvar renderDone = function () {\n    $ul.innerHTML = '';\n    doneList.map(function (task) {\n        var $li = document.createElement('li');\n        $li.textContent = task.content;\n        $li.addEventListener('click', function () {\n            deleteDone(task);\n            renderDone();\n        });\n        $ul.appendChild($li);\n    });\n};\nvar deleteTask = function (task) {\n    taskList = taskList.filter(function (_task) { return _task.date !== task.date; });\n};\nvar renderTask = function () {\n    $ul.innerHTML = '';\n    taskList.map(function (task) {\n        var $li = document.createElement('li');\n        $li.textContent = task.content;\n        $li.addEventListener('click', function () {\n            doneList.push(task);\n            deleteTask(task);\n            renderTask();\n        });\n        $ul.appendChild($li);\n    });\n};\nvar appendTask = function () {\n    var task_text = $text_box.value;\n    var date = new Date();\n    if (task_text === '') {\n        return;\n    }\n    taskList.push({ date: date, content: task_text });\n    $text_box.value = '';\n};\n$form.addEventListener('submit', function (event) {\n    appendTask();\n    if (currentMode === 'TODO') {\n        renderTask();\n    }\n    event.preventDefault();\n});\n$todo.addEventListener('click', function () {\n    if (currentMode === 'TODO')\n        return;\n    currentMode = 'TODO';\n    $todo.classList.add('current');\n    $done.classList.remove('current');\n    $ul.classList.remove('done');\n    $form.classList.remove('done');\n    renderTask();\n});\n$done.addEventListener('click', function () {\n    if (currentMode === 'DONE')\n        return;\n    currentMode = 'DONE';\n    $done.classList.add('current');\n    $todo.classList.remove('current');\n    $ul.classList.add('done');\n    $form.classList.add('done');\n    renderDone();\n});\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;