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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_cost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cost */ \"./modules/cost.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('25 december 2021');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_cost__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/cost.js":
/*!*************************!*\
  !*** ./modules/cost.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cost = () => {\r\n\r\n    const inputText = document.querySelectorAll('input[name=user_name]');\r\n    const inputEmail = document.querySelectorAll('input[name=user_email]');\r\n    const inputTel = document.querySelectorAll('input[name=user_phone]');\r\n    const inputMes = document.querySelectorAll('input[placeholder=\"Ваше сообщение\"]');\r\n    \r\n\r\n    const validateFunc = (typeVal, e) => {\r\n        \r\n        switch(typeVal){\r\n            case 'text': e.target.value = e.target.value.replace(/[^а-яА-Я -]/g, ''); break;\r\n            case 'email':  e.target.value = e.target.value.replace(/[^a-zA-Z0-9\\@\\-\\_\\.\\!\\~\\*\\']/g, ''); break;\r\n            case 'tel':  e.target.value = e.target.value.replace(/[^0-9\\-\\)\\(]/, ''); break;\r\n\r\n        }\r\n    }\r\n\r\n    inputText.forEach(inp => {\r\n        inp.addEventListener('input', (e) => {validateFunc('text',e )});\r\n    });\r\n\r\n    inputEmail.forEach(inp => {\r\n        inp.addEventListener('input', (e) => {validateFunc('email', e)});\r\n    });\r\n\r\n    inputTel.forEach(inp => {\r\n        inp.addEventListener('input', (e) => {validateFunc('tel', e)});\r\n    });\r\n\r\n    inputMes.forEach(inp => {\r\n        inp.addEventListener('input', (e) => {validateFunc('text', e)});\r\n    });\r\n\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cost);\n\n//# sourceURL=webpack:///./modules/cost.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const menuBtn = document.querySelector('.menu');\r\n    const menu = document.querySelector('menu');\r\n\r\n    const handlMenu = () => {\r\n        menu.classList.toggle('active-menu');\r\n    }\r\n\r\n    menu.addEventListener('click', (e) => {\r\n        if (!e.target.closest('menu')) console.log(\"мимо\");\r\n        \r\n        if (!e.target.classList.contains('active-menu')) console.log(\"мимо\");\r\n\r\n        // if (e.target.closest('li>a') || e.target.closest('.close-btn') || e.target.classList.contains('active-menu'))\r\n        //     menu.classList.toggle('active-menu');\r\n    })\r\n\r\n    menuBtn.addEventListener('click', handlMenu);\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n\r\n    const modals = document.querySelector('.popup');\r\n    const buttons = document.querySelectorAll('.popup-btn');\r\n\r\n    let sizeW;\r\n\r\n\r\n    buttons.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            sizeW = document.documentElement.clientWidth;\r\n            modals.style.transition = `0.5s`;\r\n            modals.style.opacity = 0;\r\n            modals.style.display = 'block';\r\n            console.log(sizeW);\r\n\r\n            if (sizeW > 768) {\r\n\r\n                setTimeout(() => {\r\n                    modals.style.opacity = 1;\r\n                }, 500);\r\n            }\r\n            else {\r\n                modals.style.transition = `none !important`;\r\n                modals.style.opacity = 1;\r\n            }\r\n        })\r\n    });\r\n\r\n    modals.addEventListener('click', (e) => {\r\n        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close'))\r\n            modals.style.display = 'none';\r\n    })\r\n};\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n    const tabPanel = document.querySelector('.service-header');\r\n    const tabs = document.querySelectorAll('.service-header-tab');\r\n    const tabContent = document.querySelectorAll('.service-tab');\r\ntabPanel.addEventListener('click', (e) =>{\r\n    if(e.target.closest('.service-header-tab')){\r\n        const tabBtn = e.target.closest('.service-header-tab');\r\n        tabs.forEach((tab, index) => {\r\n            if(tab === tabBtn){\r\n                tab.classList.add('active');\r\n                tabContent[index].classList.remove('d-none');\r\n            } else{\r\n                tab.classList.remove('active');\r\n                tabContent[index].classList.add('d-none');\r\n            }\r\n        })\r\n    }\r\n})\r\n    console.log('tabs111');\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (dadline) => {\r\n    const timerHours = document.getElementById('timer-hours');\r\n    const timerMinutes = document.getElementById('timer-minutes');\r\n    const timerSeconds = document.getElementById('timer-seconds');\r\n\r\n    const getTimeRemaining = () => {\r\n\r\n        let dateStop = new Date(dadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n        let timeRemaining = (dateStop - dateNow) / 1000;\r\n\r\n        let days = Math.floor(timeRemaining / 60 / 60 / 24)\r\n        let hours = Math.floor((timeRemaining / 60 / 60) % 24);\r\n        let minutes = Math.floor((timeRemaining / 60) % 60);\r\n        let seconds = Math.floor(timeRemaining % 60);\r\n\r\n        return {\r\n            days,\r\n            hours,\r\n            minutes,\r\n            seconds,\r\n            timeRemaining\r\n        }\r\n    }\r\n    const zeroPlus = (number) => {\r\n        return number < 10 ? '0' + number : number;\r\n    }\r\n    const updateClock = () => {\r\n        let gettime = getTimeRemaining();\r\n        if (gettime.timeRemaining > 0) {\r\n            timerHours.textContent = zeroPlus(gettime.hours);\r\n            timerMinutes.textContent = zeroPlus(gettime.minutes);\r\n            timerSeconds.textContent = zeroPlus(gettime.seconds);\r\n        }\r\n        else {\r\n            clearInterval(jTime);\r\n            timerHours.textContent = \"00\";\r\n            timerMinutes.textContent = \"00\";\r\n            timerSeconds.textContent = \"00\";\r\n        }\r\n    }\r\n    let jTime = setInterval(updateClock, 1000);\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;