<<<<<<< HEAD
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_cost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cost */ \"./modules/cost.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('25 december 2021');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();npx\r\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_cost__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(100);\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('.portfolio-content', '.portfolio-item', '.portfolio-dots');\r\n\r\n// const forms = ['form1', 'form2', 'form3']\r\n// forms.forEach((form) => {\r\n\r\n//     sendForm({\r\n//         formId: form,\r\n//         someElem: [\r\n//             {\r\n//                 type: 'block',\r\n//                 id: 'total'\r\n//             }\r\n//         ]\r\n//     });\r\n// })\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst calc = (price = 100) => {\r\n    const calcBlock = document.querySelector('.calc-block');\r\n    const calcType = document.querySelector('.calc-type');\r\n    const calcSquare = document.querySelector('.calc-square');\r\n    const calcCount = document.querySelector('.calc-count');\r\n    const calcDay = document.querySelector('.calc-day');\r\n    const total = document.getElementById('total');\r\n    \r\n    const countCalc = () => {\r\n        const calcTypeValue = +calcType.options[calcType.selectedIndex].value\r\n        const calcSquareValue = calcSquare.value;\r\n\r\n        let totalValue = 0;\r\n        let calcCountValue = 1;\r\n        let calcDayValue = 1;\r\n\r\n        if (calcCount.value && calcCount.value > 1) {\r\n            calcCountValue += +calcCount.value / 10;\r\n        }\r\n        if (calcCount.value && calcDay.value < 5) {\r\n            calcDayValue = 2;\r\n        } else if (calcDay.Value < 10) {\r\n            calcDayValue = 1.5;\r\n        }\r\n\r\n\r\n        if (calcTypeValue && calcSquareValue) {\r\n            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;\r\n        } else {\r\n            totalValue = 0;\r\n        }\r\n\r\n        setTimeout(() => {\r\n            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 2000,\r\n                timing(timeFraction) {\r\n                    return Math.pow(timeFraction, 5)\r\n                },\r\n                draw(progress) {\r\n                    \r\n                    total.textContent = Math.round(progress * totalValue);\r\n\r\n                }\r\n            });\r\n        }, 500);\r\n\r\n    }\r\n\r\n    calcBlock.addEventListener('input', (e) => {\r\n        if (e.target === calcType ||\r\n            e.target === calcSquare ||\r\n            e.target === calcCount ||\r\n            e.target === calcDay)\r\n            countCalc();\r\n    });\r\n\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/cost.js":
/*!*************************!*\
  !*** ./modules/cost.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cost = () => {\r\n\r\n    const inputText = document.querySelectorAll('input[name=user_name]');\r\n    const inputEmail = document.querySelectorAll('input[name=user_email]');\r\n    const inputTel = document.querySelectorAll('input[name=user_phone]');\r\n    const inputMes = document.querySelectorAll('input[placeholder=\"Ваше сообщение\"]');\r\n    \r\n\r\n    const validateFunc = (typeVal, e) => {\r\n        \r\n        switch(typeVal){\r\n            case 'text': e.target.value = e.target.value.replace(/[^а-яА-Я -]/g, ''); break;\r\n            case 'email':  e.target.value = e.target.value.replace(/[^a-zA-Z0-9\\@\\-\\_\\.\\!\\~\\*\\']/g, ''); break;\r\n            case 'tel':  e.target.value = e.target.value.replace(/[^0-9\\-\\)\\(\\+]/, ''); break;\r\n\r\n        }\r\n    }\r\n\r\n    inputText.forEach(inp => {\r\n        inp.addEventListener('input', (e) => {validateFunc('text',e )});\r\n    });\r\n\r\n    inputEmail.forEach(inp => {\r\n        inp.addEventListener('input', (e) => {validateFunc('email', e)});\r\n    });\r\n\r\n    inputTel.forEach(inp => {\r\n        inp.addEventListener('input', (e) => {validateFunc('tel', e)});\r\n    });\r\n\r\n    inputMes.forEach(inp => {\r\n        inp.addEventListener('input', (e) => {validateFunc('text', e)});\r\n    });\r\n\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cost);\n\n//# sourceURL=webpack:///./modules/cost.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) =>{\r\n\r\n    let start = performance.now(); // возвращает текущую точку времени\r\n\r\n    requestAnimationFrame(function animate(time) {\r\n        // timeFraction изменяется от 0 до 1\r\n        let timeFraction = (time - start) / duration;\r\n        \r\n        if (timeFraction > 1) timeFraction = 1;\r\n\r\n        // вычисление текущего состояния анимации\r\n        let progress = timing(timeFraction);\r\n\r\n        draw(progress); // отрисовать её\r\n\r\n        if (timeFraction < 1) {\r\n            requestAnimationFrame(animate);\r\n        }\r\n\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n\r\n    const body = document.querySelector('body');\r\n\r\n    body.addEventListener('click', (e) => {\r\n        const menu = document.querySelector('menu');\r\n\r\n        if (e.target.closest('.menu') ||\r\n            e.target.closest('li>a') ||\r\n            e.target.closest('.close-btn') ||\r\n            (!e.target.classList.contains('active-menu') && menu.classList.contains('active-menu'))) {\r\n            menu.classList.toggle('active-menu');\r\n        }\r\n    })\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\nconst modal = () => {\r\n\r\n    const modals = document.querySelector('.popup');\r\n    const buttons = document.querySelectorAll('.popup-btn');\r\n\r\n    let sizeW;\r\n\r\n\r\n    buttons.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            sizeW = document.documentElement.clientWidth;\r\n            modals.style.transition = `0.5s`;\r\n            modals.style.opacity = 0;\r\n            modals.style.display = 'block';\r\n            \r\n            if (sizeW > 768) {\r\n\r\n                setTimeout(() => {\r\n                    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                        duration: 100,\r\n                        timing(timeFraction) {\r\n                            return timeFraction;\r\n                        },\r\n                        draw(progress) {\r\n                            modals.style.opacity = progress;\r\n                        }\r\n                    });\r\n                }, 500);\r\n            }\r\n            else {\r\n                modals.style.transition = `none !important`;\r\n                modals.style.opacity = 1;\r\n            }\r\n        })\r\n    });\r\n\r\n    modals.addEventListener('click', (e) => {\r\n        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close'))\r\n            modals.style.display = 'none';\r\n    })\r\n};\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = ({ formId, someElem = [] }) => {\r\n    const form = document.getElementById(formId);\r\n    const statusBlock = document.createElement('div');\r\n    \r\n    const loadText = 'Загрузка...';\r\n    const errorText = 'Ошибка...';\r\n    const succesText = 'Данные отправлены';\r\n\r\n    const validate = (list) => {\r\n        let success = true;\r\n        let reg;\r\n        list.forEach(inp => {\r\n\r\n            switch (inp.name) {\r\n                case 'user_message':\r\n                    reg = /^[а-яА-Я]+(([\\?\\!\\,\\. ][а-яА-Я ])?[а-яА-Я]*)*$/;\r\n                    console.log(reg.test(inp.value) + ' собщение');\r\n                    if (!reg.test(inp.value)) \r\n                    success = false;\r\n                    break;\r\n                case 'user_phone':\r\n                    reg = /[^0-9\\-\\)\\(\\+]/;               //формат телефона 8 (999) 123-45-64\r\n                    console.log(reg.test(inp.value) + ' тел');\r\n                    if (!reg.test(inp.value))\r\n                        success = false;\r\n                    break;\r\n\r\n                case 'user_name':\r\n                    reg = /^[а-яА-Я]+(([ ][а-яА-Я ])?[а-яА-Я]*)*$/;\r\n                    console.log(reg.test(inp.value)+' имя');\r\n                    if (!reg.test(inp.value))\r\n                        success = false;\r\n                    break;\r\n\r\n            }\r\n        })\r\nconsole.log(success+ '   итог');\r\n        return success\r\n    }\r\n\r\n    const sendData = (data) => {\r\n        return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n            method: 'POST',\r\n            body: JSON.stringify(data),\r\n            headers: {\r\n                \"Content-Type\": \"application/json\"\r\n            }\r\n        }).then(res => res.json())\r\n    }\r\n\r\n    const submitForm = () => {\r\n        const formElemrnts = form.querySelectorAll('input');\r\n        const formData = new FormData(form);\r\n        const formBody = {};\r\n\r\n        statusBlock.textContent = loadText;\r\n        form.append(statusBlock);\r\n\r\n        formData.forEach((val, key) => {\r\n            formBody[key] = val;\r\n        });\r\n\r\n        someElem.forEach(elem => {\r\n            const element = document.getElementById(elem.id);\r\n\r\n            if (elem.type === 'block') {\r\n                formBody[elem.id] = element.textContent;\r\n            }\r\n            else if (elem.type === 'input') {\r\n                formBody[elem.id] = element.value;\r\n            }\r\n        });\r\n\r\n        console.log('результат' + validate(formElemrnts));\r\n\r\n        if (validate(formElemrnts)) {\r\n\r\n            sendData(formBody)\r\n                .then(data => {\r\n                    statusBlock.textContent = succesText;\r\n                    formElemrnts.forEach(input => {\r\n                        input.value = '';\r\n                    });\r\n                })\r\n                .catch(error => {\r\n                    statusBlock.textContent = errorText;\r\n                });\r\n\r\n        } else {\r\n            statusBlock.textContent = errorText;\r\n\r\n        }\r\n    }\r\n\r\n\r\n    try {\r\n\r\n        if (!form) {\r\n            throw new Error('Верните Вилли');\r\n        }\r\n        form.addEventListener('submit', (e) => {\r\n            e.preventDefault();\r\n            submitForm();\r\n\r\n        })\r\n    } catch (error) {\r\n        console.log(error.message);\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = (sliderBlockClass, slidesClass, portfolioDotsClass, dotActiveClass = 'dot-active', portfolioItemActive = 'portfolio-item-active') => {\r\n    const sliderBlock = document.querySelector(sliderBlockClass);\r\n    const slides = document.querySelectorAll(slidesClass);\r\n\r\n\r\n    let currentSlide = 0;\r\n    let interval;\r\n    let timeInterval = 2000;\r\n    let dot;\r\n\r\n\r\n\r\n    if (!sliderBlock || !slides) {\r\n        return;\r\n    } \r\n    \r\n    const portfolioDots = sliderBlock.querySelector(portfolioDotsClass);\r\n    for (let i = 0; i < slides.length; i++) {\r\n        dot = document.createElement('li');\r\n        dot.classList.add('dot');\r\n        if (i == 0) {\r\n            dot.classList.add(dotActiveClass);\r\n        }\r\n        portfolioDots.append(dot);\r\n    }\r\n    \r\n    const dots = document.querySelectorAll('.dot');\r\n\r\n    const prevSlide = (elems, index, strClass) => {\r\n        elems[index].classList.remove(strClass);\r\n    }\r\n\r\n    const nextSlide = (elems, index, strClass) => {\r\n        elems[index].classList.add(strClass);\r\n    }\r\n    const autoSlide = () => {\r\n        prevSlide(slides, currentSlide, portfolioItemActive);\r\n        prevSlide(dots, currentSlide, dotActiveClass);\r\n        currentSlide++;\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0;\r\n        }\r\n        nextSlide(slides, currentSlide, portfolioItemActive);\r\n        nextSlide(dots, currentSlide, dotActiveClass);\r\n\r\n    }\r\n\r\n    const startSlide = (timer = 1500) => {\r\n        interval = setInterval(autoSlide, timer);\r\n    }\r\n\r\n    const stopSlide = () => {\r\n        clearInterval(interval)\r\n    }\r\n\r\n    sliderBlock.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        if (!e.target.matches('.dot, .portfolio-btn')) {\r\n            return;\r\n        }\r\n        prevSlide(slides, currentSlide, portfolioItemActive);\r\n        prevSlide(dots, currentSlide, dotActiveClass);\r\n\r\n        if (e.target.matches('#arrow-right')) {\r\n            currentSlide++;\r\n        } else if (e.target.matches('#arrow-left')) {\r\n            currentSlide--;\r\n        } else if (e.target.classList.contains('dot')) {\r\n            dots.forEach((dot, index) => {\r\n                if (e.target === dot) {\r\n                    currentSlide = index;\r\n                }\r\n            })\r\n        }\r\n\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0;\r\n        }\r\n        if (currentSlide < 0) {\r\n            currentSlide = slides.length - 1;\r\n        }\r\n\r\n        nextSlide(slides, currentSlide, portfolioItemActive);\r\n        nextSlide(dots, currentSlide, dotActiveClass);\r\n    })\r\n\r\n    sliderBlock.addEventListener('mouseenter', (e) => {\r\n        if (e.target.matches('.dot, .portfolio-btn')) {\r\n            stopSlide();\r\n        }\r\n    }, true)\r\n\r\n    sliderBlock.addEventListener('mouseleave', (e) => {\r\n        if (e.target.matches('.dot, .portfolio-btn')) {\r\n            startSlide(timeInterval);\r\n        }\r\n    }, true)\r\n\r\n    startSlide(timeInterval);\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n    const tabPanel = document.querySelector('.service-header');\r\n    const tabs = document.querySelectorAll('.service-header-tab');\r\n    const tabContent = document.querySelectorAll('.service-tab');\r\n    tabPanel.addEventListener('click', (e) => {\r\n        if (e.target.closest('.service-header-tab')) {\r\n            const tabBtn = e.target.closest('.service-header-tab');\r\n            tabs.forEach((tab, index) => {\r\n                if (tab === tabBtn) {\r\n                    tab.classList.add('active');\r\n                    tabContent[index].classList.remove('d-none');\r\n                } else {\r\n                    tab.classList.remove('active');\r\n                    tabContent[index].classList.add('d-none');\r\n                }\r\n            })\r\n        }\r\n    })\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

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
=======
(()=>{"use strict";const e=({timing:e,draw:t,duration:n})=>{let o=performance.now();requestAnimationFrame((function a(r){let c=(r-o)/n;c>1&&(c=1);let l=e(c);t(l),c<1&&requestAnimationFrame(a)}))},t=({formId:e,someElem:t=[]})=>{const n=document.getElementById(e);n.querySelector('input[type="email"]').required=!0;const o=document.createElement("div");let a="",r="";try{if(!n)throw new Error("Верните Вилли");n.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=n.querySelectorAll("input"),c=new FormData(n),l={};var s;o.textContent="Загрузка...",n.append(o),c.forEach(((e,t)=>{l[t]=e})),t.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type?l[e.id]=t.textContent:"input"===e.type&&(l[e.id]=t.value)})),(e=>{a="";let t,n=!0;return e.forEach((e=>{switch(r=e.value.trim(),e.name){case"user_message":t=/^[а-яА-Я]+(([\?\!\,\. ][а-яА-Я ])?[а-яА-Я]*)*$/,t.test(e.value)||(n=!1);break;case"user_phone":t=/[\d()-]/g,(!t.test(e.value)||r.length<11)&&(n=!1,a+=" / слишком короткий номер /");break;case"user_name":t=/^[а-яА-Я]+(([ ][а-яА-Я ])?[а-яА-Я]*)*$/,(!t.test(e.value)||r.length<2)&&(n=!1,a+=" имя слишком короткое")}})),n})(e)?(s=l,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((t=>{o.textContent="Данные отправлены",e.forEach((e=>{e.value=""})),setTimeout((()=>{o.textContent=""}),5e3)})).catch((e=>{o.textContent="Ошибка..."})):o.textContent=a})()}))}catch(e){console.log(e.message)}};(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds"),a=e=>e<10?"0"+e:e;let r=setInterval((()=>{let e=(()=>{let e=(new Date("16 january 2022").getTime()-(new Date).getTime())/1e3;return{days:Math.floor(e/60/60/24),hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60),timeRemaining:e}})();e.timeRemaining>0?(t.textContent=a(e.hours),n.textContent=a(e.minutes),o.textContent=a(e.seconds)):(clearInterval(r),t.textContent="00",n.textContent="00",o.textContent="00")}),1e3)})(),document.querySelector("body").addEventListener("click",(e=>{const t=document.querySelector("menu");(e.target.closest(".menu")||e.target.closest("li>a")||e.target.closest(".close-btn")||!e.target.classList.contains("active-menu")&&t.classList.contains("active-menu"))&&t.classList.toggle("active-menu")})),(()=>{const t=document.querySelector(".popup");let n;document.querySelectorAll(".popup-btn").forEach((o=>{o.addEventListener("click",(()=>{n=document.documentElement.clientWidth,t.style.transition="0.5s",t.style.opacity=0,t.style.display="block",n>768?setTimeout((()=>{e({duration:100,timing:e=>e,draw(e){t.style.opacity=e}})}),500):(t.style.transition="none !important",t.style.opacity=1)}))})),t.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||(t.style.display="none")}))})(),(()=>{const e=document.querySelectorAll("input[name=user_name]"),t=document.querySelectorAll("input[name=user_email]"),n=document.querySelectorAll("input[name=user_phone]"),o=document.querySelectorAll('input[placeholder="Ваше сообщение"]'),a=(e,t)=>{switch(e){case"text":t.target.value=t.target.value.replace(/[^а-яА-Я -]/g,"");break;case"email":t.target.value=t.target.value.replace(/[^a-zA-Z0-9\@\-\_\.\!\~\*\']/g,"");break;case"tel":t.target.value=t.target.value.replace(/[^0-9\-\)\(]/,"")}};e.forEach((e=>{e.addEventListener("input",(e=>{a("text",e)}))})),t.forEach((e=>{e.addEventListener("input",(e=>{a("email",e)}))})),n.forEach((e=>{e.addEventListener("input",(e=>{a("tel",e)}))})),o.forEach((e=>{e.addEventListener("input",(e=>{a("text",e)}))}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),n=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const o=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===o?(e.classList.add("active"),n[t].classList.remove("d-none")):(e.classList.remove("active"),n[t].classList.add("d-none"))}))}}))})(),((t=100)=>{const n=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),a=document.querySelector(".calc-square"),r=document.querySelector(".calc-count"),c=document.querySelector(".calc-day"),l=document.getElementById("total");n.addEventListener("input",(n=>{n.target!==o&&n.target!==a&&n.target!==r&&n.target!==c||(()=>{const n=+o.options[o.selectedIndex].value,s=a.value;let i=0,u=1,d=1;r.value&&r.value>1&&(u+=+r.value/10),r.value&&c.value<5?d=2:c.Value<10&&(d=1.5),i=n&&s?t*n*s*u*d:0,setTimeout((()=>{e({duration:2e3,timing:e=>Math.pow(e,5),draw(e){l.textContent=Math.round(e*i)}})}),500)})()}))})(100),((e,t,n,o="dot-active",a="portfolio-item-active")=>{const r=document.querySelector(e),c=document.querySelectorAll(t);let l,s,i=0;if(!r||!c)return;const u=r.querySelector(n);for(let e=0;e<c.length;e++)s=document.createElement("li"),s.classList.add("dot"),0==e&&s.classList.add(o),u.append(s);const d=document.querySelectorAll(".dot"),m=(e,t,n)=>{e[t].classList.remove(n)},p=(e,t,n)=>{e[t].classList.add(n)},v=()=>{m(c,i,a),m(d,i,o),i++,i>=c.length&&(i=0),p(c,i,a),p(d,i,o)},g=(e=1500)=>{l=setInterval(v,e)};r.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(m(c,i,a),m(d,i,o),e.target.matches("#arrow-right")?i++:e.target.matches("#arrow-left")?i--:e.target.classList.contains("dot")&&d.forEach(((t,n)=>{e.target===t&&(i=n)})),i>=c.length&&(i=0),i<0&&(i=c.length-1),p(c,i,a),p(d,i,o))})),r.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(l)}),!0),r.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&g(2e3)}),!0),g(2e3)})(".portfolio-content",".portfolio-item",".portfolio-dots"),["form1","form2","form3"].forEach((e=>{t({formId:e,someElem:[{type:"block",id:"total"}]})}))})();
>>>>>>> finish
