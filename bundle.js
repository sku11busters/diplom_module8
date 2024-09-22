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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app */ \"./src/js/app.js\");\n\n\n\n// Точка входа webpack\n// Не пишите код в данном файле\n\n// import image from './img/characters/daemon.png';\n\n// const img = document.createElement('img');\n// img.src = image;\n// document.body.appendChild(img);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/Character.js":
/*!*****************************!*\
  !*** ./src/js/Character.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Character)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n/**\r\n * Базовый класс, от которого наследуются классы персонажей\r\n * @property level - уровень персонажа, от 1 до 4\r\n * @property attack - показатель атаки\r\n * @property defence - показатель защиты\r\n * @property health - здоровье персонажа\r\n * @property type - строка с одним из допустимых значений:\r\n * swordsman\r\n * bowman\r\n * magician\r\n * daemon\r\n * undead\r\n * vampire\r\n */\nvar Character = /*#__PURE__*/function () {\n  function Character() {\n    var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n    _classCallCheck(this, Character);\n    if ((this instanceof Character ? this.constructor : void 0) === Character) {\n      throw new Error(\"Cannot instantiate Character directly. Please use a subclass.\");\n    }\n    this.level = level;\n    this.attack = this.calculateAttack(level);\n    this.defence = this.calculateDefence(level);\n    this.health = Math.min(100, this.calculateHealth(level));\n    this.type = this.constructor.name.toLowerCase();\n  }\n  return _createClass(Character, [{\n    key: \"calculateAttack\",\n    value: function calculateAttack(level) {\n      return 10 + level * 5;\n    }\n  }, {\n    key: \"calculateDefence\",\n    value: function calculateDefence(level) {\n      return 5 + level * 3;\n    }\n  }, {\n    key: \"calculateHealth\",\n    value: function calculateHealth(level) {\n      return level + 80;\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack:///./src/js/Character.js?");

/***/ }),

/***/ "./src/js/GameController.js":
/*!**********************************!*\
  !*** ./src/js/GameController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameController)\n/* harmony export */ });\n/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./themes */ \"./src/js/themes.js\");\n/* harmony import */ var _PositionedCharacter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PositionedCharacter */ \"./src/js/PositionedCharacter.js\");\n/* harmony import */ var _generators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generators */ \"./src/js/generators.js\");\n/* harmony import */ var _characters_Bowman__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./characters/Bowman */ \"./src/js/characters/Bowman.js\");\n/* harmony import */ var _characters_Swordsman__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./characters/Swordsman */ \"./src/js/characters/Swordsman.js\");\n/* harmony import */ var _characters_Magician__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./characters/Magician */ \"./src/js/characters/Magician.js\");\n/* harmony import */ var _characters_Vampire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./characters/Vampire */ \"./src/js/characters/Vampire.js\");\n/* harmony import */ var _characters_Undead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./characters/Undead */ \"./src/js/characters/Undead.js\");\n/* harmony import */ var _characters_Daemon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./characters/Daemon */ \"./src/js/characters/Daemon.js\");\n/* harmony import */ var _Team__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Team */ \"./src/js/Team.js\");\n/* harmony import */ var _GamePlay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./GamePlay */ \"./src/js/GamePlay.js\");\n/* harmony import */ var _cursors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cursors */ \"./src/js/cursors.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = \"function\" == typeof Symbol ? Symbol : {}, a = i.iterator || \"@@iterator\", c = i.asyncIterator || \"@@asyncIterator\", u = i.toStringTag || \"@@toStringTag\"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, \"\"); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, \"_invoke\", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: \"normal\", arg: t.call(e, r) }; } catch (t) { return { type: \"throw\", arg: t }; } } e.wrap = wrap; var h = \"suspendedStart\", l = \"suspendedYield\", f = \"executing\", s = \"completed\", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { [\"next\", \"throw\", \"return\"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if (\"throw\" !== c.type) { var u = c.arg, h = u.value; return h && \"object\" == _typeof(h) && n.call(h, \"__await\") ? e.resolve(h.__await).then(function (t) { invoke(\"next\", t, i, a); }, function (t) { invoke(\"throw\", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke(\"throw\", t, i, a); }); } a(c.arg); } var r; o(this, \"_invoke\", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error(\"Generator is already running\"); if (o === s) { if (\"throw\" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if (\"next\" === n.method) n.sent = n._sent = n.arg;else if (\"throw\" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else \"return\" === n.method && n.abrupt(\"return\", n.arg); o = f; var p = tryCatch(e, r, n); if (\"normal\" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } \"throw\" === p.type && (o = s, n.method = \"throw\", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, \"throw\" === n && e.iterator[\"return\"] && (r.method = \"return\", r.arg = t, maybeInvokeDelegate(e, r), \"throw\" === r.method) || \"return\" !== n && (r.method = \"throw\", r.arg = new TypeError(\"The iterator does not provide a '\" + n + \"' method\")), y; var i = tryCatch(o, e.iterator, r.arg); if (\"throw\" === i.type) return r.method = \"throw\", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, \"return\" !== r.method && (r.method = \"next\", r.arg = t), r.delegate = null, y) : a : (r.method = \"throw\", r.arg = new TypeError(\"iterator result is not an object\"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = \"normal\", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: \"root\" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || \"\" === e) { var r = e[a]; if (r) return r.call(e); if (\"function\" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + \" is not iterable\"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, \"GeneratorFunction\"), e.isGeneratorFunction = function (t) { var e = \"function\" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || \"GeneratorFunction\" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, \"GeneratorFunction\")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, \"Generator\"), define(g, a, function () { return this; }), define(g, \"toString\", function () { return \"[object Generator]\"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) \"t\" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if (\"throw\" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = \"throw\", a.arg = e, r.next = n, o && (r.method = \"next\", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if (\"root\" === i.tryLoc) return handle(\"end\"); if (i.tryLoc <= this.prev) { var c = n.call(i, \"catchLoc\"), u = n.call(i, \"finallyLoc\"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error(\"try statement without catch or finally\"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, \"finallyLoc\") && this.prev < o.finallyLoc) { var i = o; break; } } i && (\"break\" === t || \"continue\" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = \"next\", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if (\"throw\" === t.type) throw t.arg; return \"break\" === t.type || \"continue\" === t.type ? this.next = t.arg : \"return\" === t.type ? (this.rval = this.arg = t.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, \"catch\": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if (\"throw\" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, \"next\" === this.method && (this.arg = t), y; } }, e; }\nfunction asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }\nfunction _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"next\", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"throw\", n); } _next(void 0); }); }; }\nfunction _createForOfIteratorHelper(r, e) { var t = \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && \"number\" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t[\"return\"] || t[\"return\"](); } finally { if (u) throw o; } } }; }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\n\n\n\n\n\n\n\n\n\n\nvar GameController = /*#__PURE__*/function () {\n  function GameController(gamePlay, stateService) {\n    _classCallCheck(this, GameController);\n    this.gamePlay = gamePlay;\n    this.stateService = stateService;\n    this.positionedCharacters = [];\n    this.selectedCharacter = null;\n    this.gameState = {\n      currentTurn: \"player\",\n      maxScore: 0,\n      currentScore: 0,\n      currentLevel: 0\n    };\n    this.currentLevel = 1;\n    this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this));\n    this.gamePlay.addCellLeaveListener(this.onCellLeave.bind(this));\n    this.gamePlay.addCellClickListener(this.onCellClick.bind(this));\n    this.gamePlay.addNewGameListener(this.newGame.bind(this));\n  }\n  return _createClass(GameController, [{\n    key: \"init\",\n    value: function init() {\n      this.gamePlay.drawUi(_themes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prairie);\n      var playerTypes = [_characters_Bowman__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _characters_Swordsman__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _characters_Magician__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n      var enemyTypes = [_characters_Vampire__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _characters_Undead__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _characters_Daemon__WEBPACK_IMPORTED_MODULE_8__[\"default\"]];\n      var playerTeam = new _Team__WEBPACK_IMPORTED_MODULE_9__[\"default\"]((0,_generators__WEBPACK_IMPORTED_MODULE_2__.generateTeam)(playerTypes, 3, 2));\n      var enemyTeam = new _Team__WEBPACK_IMPORTED_MODULE_9__[\"default\"]((0,_generators__WEBPACK_IMPORTED_MODULE_2__.generateTeam)(enemyTypes, 3, 2));\n      var positionedCharacters = [];\n      var occupiedPositions = new Set();\n      var generateUniquePosition = function generateUniquePosition(startCol, endCol) {\n        var position;\n        do {\n          var row = Math.floor(Math.random() * 8);\n          var col = startCol + Math.floor(Math.random() * (endCol - startCol + 1));\n          position = row * 8 + col;\n        } while (occupiedPositions.has(position));\n        occupiedPositions.add(position);\n        return position;\n      };\n      playerTeam.characters.forEach(function (character) {\n        var position = generateUniquePosition(0, 1);\n        positionedCharacters.push(new _PositionedCharacter__WEBPACK_IMPORTED_MODULE_1__[\"default\"](character, position));\n      });\n      enemyTeam.characters.forEach(function (character) {\n        var position = generateUniquePosition(6, 7);\n        positionedCharacters.push(new _PositionedCharacter__WEBPACK_IMPORTED_MODULE_1__[\"default\"](character, position));\n      });\n      this.positionedCharacters = positionedCharacters;\n      this.gamePlay.redrawPositions(positionedCharacters);\n    }\n  }, {\n    key: \"onCellClick\",\n    value: function onCellClick(index) {\n      var _this = this;\n      var character = this.findCharacterByPosition(index);\n      if (character && [\"bowman\", \"swordsman\", \"magician\"].includes(character.type)) {\n        if (this.selectedCharacter) {\n          var previousCharacterPosition = this.positionedCharacters.find(function (pc) {\n            return pc.character === _this.selectedCharacter;\n          });\n          if (previousCharacterPosition) {\n            this.gamePlay.deselectCell(previousCharacterPosition.position);\n          }\n        }\n        this.selectedCharacter = character;\n        this.gamePlay.selectCell(index);\n      } else if (this.selectedCharacter) {\n        var selectedPosition = this.positionedCharacters.find(function (pc) {\n          return pc.character === _this.selectedCharacter;\n        });\n        if (!selectedPosition) {\n          this.selectedCharacter = null;\n          return;\n        }\n        var moveDistance = this.calculateDistance(selectedPosition.position, index);\n        var maxMoveDistance = this.getMaxMoveDistance(this.selectedCharacter);\n        if (!character && moveDistance <= maxMoveDistance) {\n          this.moveCharacter(index);\n        }\n        var enemy = this.findCharacterByPosition(index);\n        if (enemy && ![\"bowman\", \"swordsman\", \"magician\"].includes(enemy.type)) {\n          var attackDistance = this.calculateDistance(selectedPosition.position, index);\n          var maxAttackDistance = this.getMaxAttackDistance(this.selectedCharacter);\n          if (attackDistance <= maxAttackDistance) {\n            this.attackCharacter(enemy, index).then(function () {\n              setTimeout(function () {\n                _this.computerTurn();\n              }, 1000);\n            });\n          }\n        }\n        if (!character && moveDistance > maxMoveDistance) {\n          _GamePlay__WEBPACK_IMPORTED_MODULE_10__[\"default\"].showError(\"Недопустимое перемещение\");\n        }\n\n        // this.computerTurn();\n      }\n    }\n  }, {\n    key: \"computerTurn\",\n    value: function computerTurn() {\n      var _this2 = this;\n      var computerCharacters = this.positionedCharacters.filter(function (pc) {\n        return pc.character instanceof _characters_Vampire__WEBPACK_IMPORTED_MODULE_6__[\"default\"] || pc.character instanceof _characters_Undead__WEBPACK_IMPORTED_MODULE_7__[\"default\"] || pc.character instanceof _characters_Daemon__WEBPACK_IMPORTED_MODULE_8__[\"default\"];\n      });\n      var playerCharacters = this.positionedCharacters.filter(function (pc) {\n        return pc.character instanceof _characters_Bowman__WEBPACK_IMPORTED_MODULE_3__[\"default\"] || pc.character instanceof _characters_Swordsman__WEBPACK_IMPORTED_MODULE_4__[\"default\"] || pc.character instanceof _characters_Magician__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\n      });\n      if (computerCharacters.length === 0) {\n        this.levelUp();\n        this.newGame();\n        return;\n      }\n      if (playerCharacters.length === 0) {\n        this.gameOver();\n        return;\n      }\n      var actions = [];\n      computerCharacters.forEach(function (attackingCharacter) {\n        var target = null;\n        var moveToIndex = null;\n\n        // Находим доступных для атаки персонажей\n        var availableTargets = playerCharacters.filter(function (targetCharacter) {\n          var attackDistance = _this2.calculateDistance(attackingCharacter.position, _this2.positionedCharacters.find(function (pc) {\n            return pc.character === targetCharacter.character;\n          }).position);\n          var maxAttackDistance = _this2.getMaxAttackDistance(attackingCharacter.character);\n          return attackDistance <= maxAttackDistance;\n        });\n        if (availableTargets.length > 0) {\n          // Выбираем самый слабый персонаж для атаки\n          target = _this2.findWeakestCharacter(availableTargets);\n        } else {\n          // Если атака невозможна, ищем ближайшую позицию для перемещения\n          moveToIndex = _this2.findClosestPositionToEnemy(attackingCharacter, playerCharacters);\n        }\n        if (target) {\n          actions.push({\n            attacker: attackingCharacter,\n            target: target\n          });\n        } else if (moveToIndex !== null) {\n          actions.push({\n            attacker: attackingCharacter,\n            moveToIndex: moveToIndex\n          });\n        }\n      });\n      actions.forEach(function (action) {\n        if (action.target) {\n          _this2.attackCharacter(action.target.character, action.target.position);\n        } else if (action.moveToIndex !== null) {\n          _this2.moveCharacterToIndex(action.attacker, action.moveToIndex);\n        }\n      });\n      if (this.positionedCharacters.filter(function (pc) {\n        return pc.character instanceof _characters_Vampire__WEBPACK_IMPORTED_MODULE_6__[\"default\"] || pc.character instanceof _characters_Undead__WEBPACK_IMPORTED_MODULE_7__[\"default\"] || pc.character instanceof _characters_Daemon__WEBPACK_IMPORTED_MODULE_8__[\"default\"];\n      }).length === 0) {\n        this.levelUp();\n        this.newGame();\n      }\n    }\n  }, {\n    key: \"findClosestPositionToEnemy\",\n    value: function findClosestPositionToEnemy(attackingCharacter, playerCharacters) {\n      var _this3 = this;\n      var closestDistance = Infinity;\n      var closestPosition = null;\n      playerCharacters.forEach(function (playerCharacter) {\n        var playerPosition = _this3.positionedCharacters.find(function (pc) {\n          return pc.character === playerCharacter.character;\n        }).position;\n        var distance = _this3.calculateDistance(attackingCharacter.position, playerPosition);\n        if (distance < closestDistance) {\n          closestDistance = distance;\n          closestPosition = playerPosition;\n        }\n      });\n\n      // Проверяем, есть ли свободные клетки вокруг ближайшего персонажа игрока\n      var adjacentPositions = this.getAdjacentPositions(closestPosition);\n      var _iterator = _createForOfIteratorHelper(adjacentPositions),\n        _step;\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var pos = _step.value;\n          if (this.isPositionAvailable(pos)) {\n            return pos;\n          }\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n      return closestPosition; // Возвращаем позицию самого близкого персонажа, если нет свободных клеток\n    }\n  }, {\n    key: \"getAdjacentPositions\",\n    value: function getAdjacentPositions(index) {\n      var positions = [];\n      for (var i = -1; i <= 1; i++) {\n        for (var j = -1; j <= 1; j++) {\n          var row = Math.floor(index / 8) + i;\n          var col = index % 8 + j;\n          if (row >= 0 && row < 8 && col >= 0 && col < 8 && (i !== 0 || j !== 0)) {\n            positions.push(row * 8 + col);\n          }\n        }\n      }\n      return positions;\n    }\n  }, {\n    key: \"isPositionAvailable\",\n    value: function isPositionAvailable(index) {\n      return !this.positionedCharacters.some(function (pc) {\n        return pc.position === index;\n      });\n    }\n  }, {\n    key: \"moveCharacterToIndex\",\n    value: function moveCharacterToIndex(attacker, index) {\n      var previousIndex = attacker.position;\n      this.positionedCharacters = this.positionedCharacters.map(function (pc) {\n        if (pc.character === attacker.character) {\n          return new _PositionedCharacter__WEBPACK_IMPORTED_MODULE_1__[\"default\"](pc.character, index);\n        }\n        return pc;\n      });\n      this.gamePlay.redrawPositions(this.positionedCharacters);\n    }\n  }, {\n    key: \"initTeams\",\n    value: function initTeams() {\n      var playerTypes = [_characters_Bowman__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _characters_Swordsman__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _characters_Magician__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n      var enemyTypes = [_characters_Vampire__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _characters_Undead__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _characters_Daemon__WEBPACK_IMPORTED_MODULE_8__[\"default\"]];\n      var playerTeam = new _Team__WEBPACK_IMPORTED_MODULE_9__[\"default\"]((0,_generators__WEBPACK_IMPORTED_MODULE_2__.generateTeam)(playerTypes, 3, this.currentLevel));\n      var enemyTeam = new _Team__WEBPACK_IMPORTED_MODULE_9__[\"default\"]((0,_generators__WEBPACK_IMPORTED_MODULE_2__.generateTeam)(enemyTypes, 3, this.currentLevel));\n      var positionedCharacters = [];\n      var occupiedPositions = new Set();\n      var generateUniquePosition = function generateUniquePosition(startCol, endCol) {\n        var position;\n        do {\n          var row = Math.floor(Math.random() * 8);\n          var col = startCol + Math.floor(Math.random() * (endCol - startCol + 1));\n          position = row * 8 + col;\n        } while (occupiedPositions.has(position));\n        occupiedPositions.add(position);\n        return position;\n      };\n      playerTeam.characters.forEach(function (character) {\n        var position = generateUniquePosition(0, 1);\n        positionedCharacters.push(new _PositionedCharacter__WEBPACK_IMPORTED_MODULE_1__[\"default\"](character, position));\n      });\n      enemyTeam.characters.forEach(function (character) {\n        var position = generateUniquePosition(6, 7);\n        positionedCharacters.push(new _PositionedCharacter__WEBPACK_IMPORTED_MODULE_1__[\"default\"](character, position));\n      });\n      this.positionedCharacters = positionedCharacters;\n      this.gamePlay.redrawPositions(positionedCharacters);\n    }\n  }, {\n    key: \"findWeakestCharacter\",\n    value: function findWeakestCharacter(characters) {\n      return characters.reduce(function (weakest, current) {\n        if (current.character.health < weakest.character.health) {\n          return current;\n        }\n        return weakest;\n      }, characters[0]);\n    }\n  }, {\n    key: \"onCellEnter\",\n    value: function onCellEnter(index) {\n      var _this4 = this;\n      var character = this.findCharacterByPosition(index);\n      if (character) {\n        var info = this.getCharacterInfo(character);\n        this.gamePlay.showCellTooltip(info, index);\n        if ([\"bowman\", \"swordsman\", \"magician\"].includes(character.type)) {\n          this.gamePlay.setCursor(_cursors__WEBPACK_IMPORTED_MODULE_11__[\"default\"].pointer);\n          if (character === this.selectedCharacter) {\n            this.gamePlay.selectCell(index, \"yellow\");\n          }\n        } else {\n          this.gamePlay.setCursor(_cursors__WEBPACK_IMPORTED_MODULE_11__[\"default\"].notallowed);\n        }\n      } else if (this.selectedCharacter) {\n        var selectedCharacterPosition = this.positionedCharacters.find(function (pc) {\n          return pc.character === _this4.selectedCharacter;\n        });\n        var selectedPosition = selectedCharacterPosition ? selectedCharacterPosition.position : null;\n        if (selectedPosition !== null) {\n          var moveDistance = this.calculateDistance(selectedPosition, index);\n          var maxMoveDistance = this.getMaxMoveDistance(this.selectedCharacter);\n          if (moveDistance <= maxMoveDistance) {\n            this.gamePlay.selectCell(index, \"green\");\n            this.gamePlay.setCursor(_cursors__WEBPACK_IMPORTED_MODULE_11__[\"default\"].pointer);\n          } else {\n            this.gamePlay.setCursor(_cursors__WEBPACK_IMPORTED_MODULE_11__[\"default\"].notallowed);\n          }\n          var enemy = this.findCharacterByPosition(index);\n          console.log(enemy);\n          if (enemy && ![\"bowman\", \"swordsman\", \"magician\"].includes(enemy.type)) {\n            var attackDistance = this.calculateDistance(selectedPosition, index);\n            var maxAttackDistance = this.getMaxAttackDistance(this.selectedCharacter);\n            if (attackDistance <= maxAttackDistance) {\n              this.gamePlay.selectCell(index, \"red\");\n              this.gamePlay.setCursor(_cursors__WEBPACK_IMPORTED_MODULE_11__[\"default\"].crosshair);\n            }\n          }\n        }\n      } else {\n        this.gamePlay.setCursor(_cursors__WEBPACK_IMPORTED_MODULE_11__[\"default\"].auto);\n      }\n    }\n  }, {\n    key: \"moveCharacter\",\n    value: function moveCharacter(index) {\n      var _this5 = this;\n      var previousIndex = this.positionedCharacters.find(function (pc) {\n        return pc.character === _this5.selectedCharacter;\n      }).position;\n      this.positionedCharacters = this.positionedCharacters.map(function (pc) {\n        if (pc.character === _this5.selectedCharacter) {\n          return new _PositionedCharacter__WEBPACK_IMPORTED_MODULE_1__[\"default\"](pc.character, index);\n        }\n        return pc;\n      });\n      this.gamePlay.deselectCell(previousIndex);\n      this.gamePlay.redrawPositions(this.positionedCharacters);\n      this.selectedCharacter = null;\n    }\n  }, {\n    key: \"onCellLeave\",\n    value: function onCellLeave(index) {\n      var character = this.findCharacterByPosition(index);\n      if (character !== this.selectedCharacter) {\n        this.gamePlay.hideCellTooltip(index);\n        this.gamePlay.deselectCell(index);\n      }\n    }\n  }, {\n    key: \"findCharacterByPosition\",\n    value: function findCharacterByPosition(index) {\n      var _this$positionedChara;\n      return (_this$positionedChara = this.positionedCharacters.find(function (pc) {\n        return pc.position === index;\n      })) === null || _this$positionedChara === void 0 ? void 0 : _this$positionedChara.character;\n    }\n  }, {\n    key: \"getCharacterInfo\",\n    value: function getCharacterInfo(character) {\n      var level = character.level || 1;\n      var attack = character.attack || 0;\n      var defense = character.defense || 0;\n      var health = character.health || 100;\n      return \"\\uD83C\\uDF96\".concat(level, \" \\u2694\").concat(attack, \" \\uD83D\\uDEE1\").concat(defense, \" \\u2764\").concat(health);\n    }\n  }, {\n    key: \"calculateDistance\",\n    value: function calculateDistance(index1, index2) {\n      var x1 = index1 % 8;\n      var y1 = Math.floor(index1 / 8);\n      var x2 = index2 % 8;\n      var y2 = Math.floor(index2 / 8);\n      return Math.max(Math.abs(x1 - x2), Math.abs(y1 - y2));\n    }\n  }, {\n    key: \"getMaxMoveDistance\",\n    value: function getMaxMoveDistance(character) {\n      switch (character.type) {\n        case \"swordsman\":\n        case \"undead\":\n          return 4;\n        case \"bowman\":\n        case \"vampire\":\n          return 2;\n        case \"magician\":\n        case \"daemon\":\n          return 1;\n        default:\n          return 0;\n      }\n    }\n  }, {\n    key: \"getMaxAttackDistance\",\n    value: function getMaxAttackDistance(character) {\n      switch (character.type) {\n        case \"swordsman\":\n        case \"undead\":\n          return 1;\n        case \"bowman\":\n        case \"vampire\":\n          return 2;\n        case \"magician\":\n        case \"daemon\":\n          return 4;\n        default:\n          return 0;\n      }\n    }\n  }, {\n    key: \"updateCharacterPositions\",\n    value: function updateCharacterPositions() {\n      // Перерисовываем всех персонажей на поле, что включает в себя обновление их здоровья\n      this.gamePlay.redrawPositions(this.positionedCharacters);\n    }\n  }, {\n    key: \"attackCharacter\",\n    value: function () {\n      var _attackCharacter = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(enemy, index) {\n        var attacker, damage;\n        return _regeneratorRuntime().wrap(function _callee$(_context) {\n          while (1) switch (_context.prev = _context.next) {\n            case 0:\n              attacker = this.selectedCharacter;\n              damage = Math.max(attacker.attack - enemy.defence, attacker.attack * 0.1); // Ожидаем завершения анимации урона перед обновлением здоровья персонажа\n              _context.next = 4;\n              return this.gamePlay.showDamage(index, damage);\n            case 4:\n              // После завершения анимации урона уменьшаем здоровье персонажа\n              enemy.health -= damage;\n\n              // Обновляем отображение всех персонажей на поле\n              this.updateCharacterPositions();\n\n              // Проверяем, не пора ли персонаж после удара\n              if (enemy.health <= 0) {\n                // Удаляем персонажа из списка позиционированных персонажей\n                this.positionedCharacters = this.positionedCharacters.filter(function (pc) {\n                  return pc.character !== enemy;\n                });\n                // Обновляем отображение персонажей на поле снова, чтобы удалить мертвого персонажа\n                this.updateCharacterPositions();\n              }\n\n              // После атаки можно добавить логику перехода к следующему ходу\n              // Например, переключиться на ход компьютера или следующего игрока\n            case 7:\n            case \"end\":\n              return _context.stop();\n          }\n        }, _callee, this);\n      }));\n      function attackCharacter(_x, _x2) {\n        return _attackCharacter.apply(this, arguments);\n      }\n      return attackCharacter;\n    }()\n  }, {\n    key: \"levelUp\",\n    value: function levelUp() {\n      this.positionedCharacters.forEach(function (pc) {\n        if (pc.character instanceof _characters_Bowman__WEBPACK_IMPORTED_MODULE_3__[\"default\"] || pc.character instanceof _characters_Swordsman__WEBPACK_IMPORTED_MODULE_4__[\"default\"] || pc.character instanceof _characters_Magician__WEBPACK_IMPORTED_MODULE_5__[\"default\"]) {\n          pc.character.level++;\n          pc.character.health = Math.min(pc.character.level + 80, 100);\n          var healthPercentageRemaining = pc.character.health / 100 * 100;\n          var previousAttack = pc.character.attack;\n          var previousDefense = pc.character.defence;\n          pc.character.attack = Math.max(previousAttack, previousAttack * (80 + healthPercentageRemaining) / 100);\n          pc.character.defence = Math.max(previousDefense, previousDefense * (80 + healthPercentageRemaining) / 100);\n        }\n      });\n      this.gameState.currentScore += 10;\n      this.updateCharacterPositions();\n    }\n  }, {\n    key: \"getCurrentTheme\",\n    value: function getCurrentTheme() {\n      var themesList = [_themes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prairie, _themes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].desert, _themes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].arctic, _themes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mountain];\n      return themesList[this.themeIndex || 0];\n    }\n  }, {\n    key: \"getCurrentLevel\",\n    value: function getCurrentLevel() {\n      return this.positionedCharacters[0].character.level;\n    }\n  }, {\n    key: \"gameOver\",\n    value: function gameOver() {\n      this.gamePlay.setCursor(\"not-allowed\");\n      this.gamePlay.cells.forEach(function (cell) {\n        cell.classList.add(\"blocked\");\n      });\n      if (this.gameState.currentScore > this.gameState.maxScore) {\n        this.gameState.maxScore = this.gameState.currentScore;\n        this.stateService.saveGame(this.gameState);\n      }\n      _GamePlay__WEBPACK_IMPORTED_MODULE_10__[\"default\"].showMessage(\"Game Over! Click 'New Game' to play again.\");\n    }\n  }, {\n    key: \"newGame\",\n    value: function newGame() {\n      this.currentLevel = 1;\n      var themesList = [_themes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prairie, _themes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].desert, _themes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].arctic, _themes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mountain];\n      this.themeIndex = 0;\n      this.gamePlay.drawUi(themesList[this.themeIndex]);\n      this.positionedCharacters = [];\n      this.selectedCharacter = null;\n      this.gameState = {\n        currentTurn: \"player\",\n        maxScore: 0,\n        currentScore: 0,\n        currentLevel: 0\n      };\n      this.initTeams();\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack:///./src/js/GameController.js?");

/***/ }),

/***/ "./src/js/GamePlay.js":
/*!****************************!*\
  !*** ./src/js/GamePlay.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GamePlay)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _iterableToArray(r) { if (\"undefined\" != typeof Symbol && null != r[Symbol.iterator] || null != r[\"@@iterator\"]) return Array.from(r); }\nfunction _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }\nfunction _createForOfIteratorHelper(r, e) { var t = \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && \"number\" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t[\"return\"] || t[\"return\"](); } finally { if (u) throw o; } } }; }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\nvar GamePlay = /*#__PURE__*/function () {\n  function GamePlay() {\n    _classCallCheck(this, GamePlay);\n    this.boardSize = 8;\n    this.container = null;\n    this.boardEl = null;\n    this.cells = [];\n    this.cellClickListeners = [];\n    this.cellEnterListeners = [];\n    this.cellLeaveListeners = [];\n    this.newGameListeners = [];\n    this.saveGameListeners = [];\n    this.loadGameListeners = [];\n  }\n  return _createClass(GamePlay, [{\n    key: \"bindToDOM\",\n    value: function bindToDOM(container) {\n      if (!(container instanceof HTMLElement)) {\n        throw new Error(\"container is not HTMLElement\");\n      }\n      this.container = container;\n    }\n\n    /**\r\n     * Draws boardEl with specific theme\r\n     *\r\n     * @param theme\r\n     */\n  }, {\n    key: \"drawUi\",\n    value: function drawUi(theme) {\n      var _this = this;\n      this.checkBinding();\n      this.container.innerHTML = \"\\n      <div class=\\\"controls\\\">\\n        <button data-id=\\\"action-restart\\\" class=\\\"btn\\\">New Game</button>\\n        <button data-id=\\\"action-save\\\" class=\\\"btn\\\">Save Game</button>\\n        <button data-id=\\\"action-load\\\" class=\\\"btn\\\">Load Game</button>\\n      </div>\\n      <div class=\\\"board-container\\\">\\n        <div data-id=\\\"board\\\" class=\\\"board\\\"></div>\\n      </div>\\n    \";\n      this.newGameEl = this.container.querySelector(\"[data-id=action-restart]\");\n      this.saveGameEl = this.container.querySelector(\"[data-id=action-save]\");\n      this.loadGameEl = this.container.querySelector(\"[data-id=action-load]\");\n      this.newGameEl.addEventListener(\"click\", function (event) {\n        return _this.onNewGameClick(event);\n      });\n      this.saveGameEl.addEventListener(\"click\", function (event) {\n        return _this.onSaveGameClick(event);\n      });\n      this.loadGameEl.addEventListener(\"click\", function (event) {\n        return _this.onLoadGameClick(event);\n      });\n      this.boardEl = this.container.querySelector(\"[data-id=board]\");\n      this.boardEl.classList.add(theme);\n      for (var i = 0; i < Math.pow(this.boardSize, 2); i += 1) {\n        var cellEl = document.createElement(\"div\");\n        cellEl.classList.add(\"cell\", \"map-tile\", \"map-tile-\".concat((0,_utils__WEBPACK_IMPORTED_MODULE_0__.calcTileType)(i, this.boardSize)));\n        cellEl.addEventListener(\"mouseenter\", function (event) {\n          return _this.onCellEnter(event);\n        });\n        cellEl.addEventListener(\"mouseleave\", function (event) {\n          return _this.onCellLeave(event);\n        });\n        cellEl.addEventListener(\"click\", function (event) {\n          return _this.onCellClick(event);\n        });\n        this.boardEl.appendChild(cellEl);\n      }\n      this.cells = Array.from(this.boardEl.children);\n    }\n\n    /**\r\n     * Draws positions (with chars) on boardEl\r\n     *\r\n     * @param positions array of PositionedCharacter objects\r\n     */\n  }, {\n    key: \"redrawPositions\",\n    value: function redrawPositions(positions) {\n      var _iterator = _createForOfIteratorHelper(this.cells),\n        _step;\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var cell = _step.value;\n          cell.innerHTML = \"\";\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n      var _iterator2 = _createForOfIteratorHelper(positions),\n        _step2;\n      try {\n        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n          var position = _step2.value;\n          var cellEl = this.boardEl.children[position.position];\n          var charEl = document.createElement(\"div\");\n          charEl.classList.add(\"character\", position.character.type);\n          var healthEl = document.createElement(\"div\");\n          healthEl.classList.add(\"health-level\");\n          var healthIndicatorEl = document.createElement(\"div\");\n          healthIndicatorEl.classList.add(\"health-level-indicator\", \"health-level-indicator-\".concat((0,_utils__WEBPACK_IMPORTED_MODULE_0__.calcHealthLevel)(position.character.health)));\n          healthIndicatorEl.style.width = \"\".concat(position.character.health, \"%\");\n          healthEl.appendChild(healthIndicatorEl);\n          charEl.appendChild(healthEl);\n          cellEl.appendChild(charEl);\n        }\n      } catch (err) {\n        _iterator2.e(err);\n      } finally {\n        _iterator2.f();\n      }\n    }\n\n    /**\r\n     * Add listener to mouse enter for cell\r\n     *\r\n     * @param callback\r\n     */\n  }, {\n    key: \"addCellEnterListener\",\n    value: function addCellEnterListener(callback) {\n      this.cellEnterListeners.push(callback);\n    }\n\n    /**\r\n     * Add listener to mouse leave for cell\r\n     *\r\n     * @param callback\r\n     */\n  }, {\n    key: \"addCellLeaveListener\",\n    value: function addCellLeaveListener(callback) {\n      this.cellLeaveListeners.push(callback);\n    }\n\n    /**\r\n     * Add listener to mouse click for cell\r\n     *\r\n     * @param callback\r\n     */\n  }, {\n    key: \"addCellClickListener\",\n    value: function addCellClickListener(callback) {\n      this.cellClickListeners.push(callback);\n    }\n\n    /**\r\n     * Add listener to \"New Game\" button click\r\n     *\r\n     * @param callback\r\n     */\n  }, {\n    key: \"addNewGameListener\",\n    value: function addNewGameListener(callback) {\n      this.newGameListeners.push(callback);\n    }\n\n    /**\r\n     * Add listener to \"Save Game\" button click\r\n     *\r\n     * @param callback\r\n     */\n  }, {\n    key: \"addSaveGameListener\",\n    value: function addSaveGameListener(callback) {\n      this.saveGameListeners.push(callback);\n    }\n\n    /**\r\n     * Add listener to \"Load Game\" button click\r\n     *\r\n     * @param callback\r\n     */\n  }, {\n    key: \"addLoadGameListener\",\n    value: function addLoadGameListener(callback) {\n      this.loadGameListeners.push(callback);\n    }\n  }, {\n    key: \"onCellEnter\",\n    value: function onCellEnter(event) {\n      event.preventDefault();\n      var index = this.cells.indexOf(event.currentTarget);\n      this.cellEnterListeners.forEach(function (o) {\n        return o.call(null, index);\n      });\n    }\n  }, {\n    key: \"onCellLeave\",\n    value: function onCellLeave(event) {\n      event.preventDefault();\n      var index = this.cells.indexOf(event.currentTarget);\n      this.cellLeaveListeners.forEach(function (o) {\n        return o.call(null, index);\n      });\n    }\n  }, {\n    key: \"onCellClick\",\n    value: function onCellClick(event) {\n      var index = this.cells.indexOf(event.currentTarget);\n      this.cellClickListeners.forEach(function (o) {\n        return o.call(null, index);\n      });\n    }\n  }, {\n    key: \"onNewGameClick\",\n    value: function onNewGameClick(event) {\n      event.preventDefault();\n      this.newGameListeners.forEach(function (o) {\n        return o.call(null);\n      });\n    }\n  }, {\n    key: \"onSaveGameClick\",\n    value: function onSaveGameClick(event) {\n      event.preventDefault();\n      this.saveGameListeners.forEach(function (o) {\n        return o.call(null);\n      });\n    }\n  }, {\n    key: \"onLoadGameClick\",\n    value: function onLoadGameClick(event) {\n      event.preventDefault();\n      this.loadGameListeners.forEach(function (o) {\n        return o.call(null);\n      });\n    }\n  }, {\n    key: \"selectCell\",\n    value: function selectCell(index) {\n      var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"yellow\";\n      this.deselectCell(index);\n      this.cells[index].classList.add(\"selected\", \"selected-\".concat(color));\n    }\n  }, {\n    key: \"deselectCell\",\n    value: function deselectCell(index) {\n      var _cell$classList;\n      var cell = this.cells[index];\n      (_cell$classList = cell.classList).remove.apply(_cell$classList, _toConsumableArray(Array.from(cell.classList).filter(function (o) {\n        return o.startsWith(\"selected\");\n      })));\n    }\n  }, {\n    key: \"showCellTooltip\",\n    value: function showCellTooltip(message, index) {\n      this.cells[index].title = message;\n    }\n  }, {\n    key: \"hideCellTooltip\",\n    value: function hideCellTooltip(index) {\n      this.cells[index].title = \"\";\n    }\n  }, {\n    key: \"showDamage\",\n    value: function showDamage(index, damage) {\n      var _this2 = this;\n      return new Promise(function (resolve) {\n        var cell = _this2.cells[index];\n        var damageEl = document.createElement(\"span\");\n        damageEl.textContent = damage;\n        damageEl.classList.add(\"damage\");\n        cell.appendChild(damageEl);\n        damageEl.addEventListener(\"animationend\", function () {\n          if (cell.contains(damageEl)) {\n            cell.removeChild(damageEl);\n          } else {\n            console.error(\"Damage element not found as a child of the cell\");\n          }\n          resolve();\n        });\n      });\n    }\n  }, {\n    key: \"setCursor\",\n    value: function setCursor(cursor) {\n      this.boardEl.style.cursor = cursor;\n    }\n  }, {\n    key: \"checkBinding\",\n    value: function checkBinding() {\n      if (this.container === null) {\n        throw new Error(\"GamePlay not bind to DOM\");\n      }\n    }\n  }], [{\n    key: \"showError\",\n    value: function showError(message) {\n      alert(message);\n    }\n  }, {\n    key: \"showMessage\",\n    value: function showMessage(message) {\n      alert(message);\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack:///./src/js/GamePlay.js?");

/***/ }),

/***/ "./src/js/GameStateService.js":
/*!************************************!*\
  !*** ./src/js/GameStateService.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameStateService)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n/* eslint-disable no-unused-vars */\nvar GameStateService = /*#__PURE__*/function () {\n  function GameStateService(storage) {\n    _classCallCheck(this, GameStateService);\n    this.storage = storage;\n  }\n  return _createClass(GameStateService, [{\n    key: \"save\",\n    value: function save(state) {\n      this.storage.setItem('state', JSON.stringify(state));\n    }\n  }, {\n    key: \"load\",\n    value: function load() {\n      try {\n        return JSON.parse(this.storage.getItem('state'));\n      } catch (e) {\n        throw new Error('Invalid state');\n      }\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack:///./src/js/GameStateService.js?");

/***/ }),

/***/ "./src/js/PositionedCharacter.js":
/*!***************************************!*\
  !*** ./src/js/PositionedCharacter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PositionedCharacter)\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Character */ \"./src/js/Character.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\n\nvar PositionedCharacter = /*#__PURE__*/_createClass(function PositionedCharacter(character, position) {\n  _classCallCheck(this, PositionedCharacter);\n  if (!(character instanceof _Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"])) {\n    throw new Error('character must be instance of Character or its children');\n  }\n  if (typeof position !== 'number') {\n    throw new Error('position must be a number');\n  }\n  this.character = character;\n  this.position = position;\n});\n\n\n//# sourceURL=webpack:///./src/js/PositionedCharacter.js?");

/***/ }),

/***/ "./src/js/Team.js":
/*!************************!*\
  !*** ./src/js/Team.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\n/**\r\n * Класс, представляющий персонажей команды\r\n *\r\n * @todo Самостоятельно продумайте хранение персонажей в классе\r\n * Например\r\n * @example\r\n * ```js\r\n * const characters = [new Swordsman(2), new Bowman(1)]\r\n * const team = new Team(characters);\r\n *\r\n * team.characters // [swordsman, bowman]\r\n * ```\r\n * */\nvar Team = /*#__PURE__*/_createClass(function Team(characters) {\n  _classCallCheck(this, Team);\n  this.characters = characters;\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Team);\n\n//# sourceURL=webpack:///./src/js/Team.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GamePlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GamePlay */ \"./src/js/GamePlay.js\");\n/* harmony import */ var _GameController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameController */ \"./src/js/GameController.js\");\n/* harmony import */ var _GameStateService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameStateService */ \"./src/js/GameStateService.js\");\n/**\r\n * Entry point of app: don't change this\r\n */\n\n\n\nvar gamePlay = new _GamePlay__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\ngamePlay.bindToDOM(document.querySelector('#game-container'));\nvar stateService = new _GameStateService__WEBPACK_IMPORTED_MODULE_2__[\"default\"](localStorage);\nvar gameCtrl = new _GameController__WEBPACK_IMPORTED_MODULE_1__[\"default\"](gamePlay, stateService);\ngameCtrl.init();\n\n// don't write your code here\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/characters/Bowman.js":
/*!*************************************!*\
  !*** ./src/js/characters/Bowman.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Bowman)\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Character */ \"./src/js/Character.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\n\nvar Bowman = /*#__PURE__*/function (_Character) {\n  function Bowman(level) {\n    _classCallCheck(this, Bowman);\n    return _callSuper(this, Bowman, [level, 25, 25, 100, \"bowman\"]);\n  }\n  _inherits(Bowman, _Character);\n  return _createClass(Bowman);\n}(_Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack:///./src/js/characters/Bowman.js?");

/***/ }),

/***/ "./src/js/characters/Daemon.js":
/*!*************************************!*\
  !*** ./src/js/characters/Daemon.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Daemon)\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Character */ \"./src/js/Character.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\n\nvar Daemon = /*#__PURE__*/function (_Character) {\n  function Daemon() {\n    var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n    _classCallCheck(this, Daemon);\n    return _callSuper(this, Daemon, [level, 10, 10, 100, \"daemon\"]);\n  }\n  _inherits(Daemon, _Character);\n  return _createClass(Daemon);\n}(_Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack:///./src/js/characters/Daemon.js?");

/***/ }),

/***/ "./src/js/characters/Magician.js":
/*!***************************************!*\
  !*** ./src/js/characters/Magician.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Magician)\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Character */ \"./src/js/Character.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\n\nvar Magician = /*#__PURE__*/function (_Character) {\n  function Magician(level) {\n    _classCallCheck(this, Magician);\n    return _callSuper(this, Magician, [level, 10, 40, 100, \"magician\"]);\n  }\n  _inherits(Magician, _Character);\n  return _createClass(Magician);\n}(_Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack:///./src/js/characters/Magician.js?");

/***/ }),

/***/ "./src/js/characters/Swordsman.js":
/*!****************************************!*\
  !*** ./src/js/characters/Swordsman.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Swordsman)\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Character */ \"./src/js/Character.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\n\nvar Swordsman = /*#__PURE__*/function (_Character) {\n  function Swordsman(level) {\n    _classCallCheck(this, Swordsman);\n    return _callSuper(this, Swordsman, [level, 40, 10, 100, \"swordsman\"]);\n  }\n  _inherits(Swordsman, _Character);\n  return _createClass(Swordsman);\n}(_Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack:///./src/js/characters/Swordsman.js?");

/***/ }),

/***/ "./src/js/characters/Undead.js":
/*!*************************************!*\
  !*** ./src/js/characters/Undead.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Undead)\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Character */ \"./src/js/Character.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\n\nvar Undead = /*#__PURE__*/function (_Character) {\n  function Undead(level) {\n    _classCallCheck(this, Undead);\n    return _callSuper(this, Undead, [level, 40, 10, 100, \"undead\"]);\n  }\n  _inherits(Undead, _Character);\n  return _createClass(Undead);\n}(_Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack:///./src/js/characters/Undead.js?");

/***/ }),

/***/ "./src/js/characters/Vampire.js":
/*!**************************************!*\
  !*** ./src/js/characters/Vampire.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Vampire)\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Character */ \"./src/js/Character.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\n\nvar Vampire = /*#__PURE__*/function (_Character) {\n  function Vampire(level) {\n    _classCallCheck(this, Vampire);\n    return _callSuper(this, Vampire, [level, 25, 25, 100, \"vampire\"]);\n  }\n  _inherits(Vampire, _Character);\n  return _createClass(Vampire);\n}(_Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack:///./src/js/characters/Vampire.js?");

/***/ }),

/***/ "./src/js/cursors.js":
/*!***************************!*\
  !*** ./src/js/cursors.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar cursors = {\n  auto: 'auto',\n  pointer: 'pointer',\n  crosshair: 'crosshair',\n  notallowed: 'not-allowed'\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cursors);\n\n//# sourceURL=webpack:///./src/js/cursors.js?");

/***/ }),

/***/ "./src/js/generators.js":
/*!******************************!*\
  !*** ./src/js/generators.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   characterGenerator: () => (/* binding */ characterGenerator),\n/* harmony export */   generateTeam: () => (/* binding */ generateTeam)\n/* harmony export */ });\n/* harmony import */ var _Team__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Team */ \"./src/js/Team.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = \"function\" == typeof Symbol ? Symbol : {}, a = i.iterator || \"@@iterator\", c = i.asyncIterator || \"@@asyncIterator\", u = i.toStringTag || \"@@toStringTag\"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, \"\"); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, \"_invoke\", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: \"normal\", arg: t.call(e, r) }; } catch (t) { return { type: \"throw\", arg: t }; } } e.wrap = wrap; var h = \"suspendedStart\", l = \"suspendedYield\", f = \"executing\", s = \"completed\", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { [\"next\", \"throw\", \"return\"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if (\"throw\" !== c.type) { var u = c.arg, h = u.value; return h && \"object\" == _typeof(h) && n.call(h, \"__await\") ? e.resolve(h.__await).then(function (t) { invoke(\"next\", t, i, a); }, function (t) { invoke(\"throw\", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke(\"throw\", t, i, a); }); } a(c.arg); } var r; o(this, \"_invoke\", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error(\"Generator is already running\"); if (o === s) { if (\"throw\" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if (\"next\" === n.method) n.sent = n._sent = n.arg;else if (\"throw\" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else \"return\" === n.method && n.abrupt(\"return\", n.arg); o = f; var p = tryCatch(e, r, n); if (\"normal\" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } \"throw\" === p.type && (o = s, n.method = \"throw\", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, \"throw\" === n && e.iterator[\"return\"] && (r.method = \"return\", r.arg = t, maybeInvokeDelegate(e, r), \"throw\" === r.method) || \"return\" !== n && (r.method = \"throw\", r.arg = new TypeError(\"The iterator does not provide a '\" + n + \"' method\")), y; var i = tryCatch(o, e.iterator, r.arg); if (\"throw\" === i.type) return r.method = \"throw\", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, \"return\" !== r.method && (r.method = \"next\", r.arg = t), r.delegate = null, y) : a : (r.method = \"throw\", r.arg = new TypeError(\"iterator result is not an object\"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = \"normal\", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: \"root\" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || \"\" === e) { var r = e[a]; if (r) return r.call(e); if (\"function\" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + \" is not iterable\"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, \"GeneratorFunction\"), e.isGeneratorFunction = function (t) { var e = \"function\" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || \"GeneratorFunction\" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, \"GeneratorFunction\")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, \"Generator\"), define(g, a, function () { return this; }), define(g, \"toString\", function () { return \"[object Generator]\"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) \"t\" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if (\"throw\" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = \"throw\", a.arg = e, r.next = n, o && (r.method = \"next\", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if (\"root\" === i.tryLoc) return handle(\"end\"); if (i.tryLoc <= this.prev) { var c = n.call(i, \"catchLoc\"), u = n.call(i, \"finallyLoc\"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error(\"try statement without catch or finally\"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, \"finallyLoc\") && this.prev < o.finallyLoc) { var i = o; break; } } i && (\"break\" === t || \"continue\" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = \"next\", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if (\"throw\" === t.type) throw t.arg; return \"break\" === t.type || \"continue\" === t.type ? this.next = t.arg : \"return\" === t.type ? (this.rval = this.arg = t.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, \"catch\": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if (\"throw\" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, \"next\" === this.method && (this.arg = t), y; } }, e; }\nvar _marked = /*#__PURE__*/_regeneratorRuntime().mark(characterGenerator);\n\n/**\r\n * Формирует экземпляр персонажа из массива allowedTypes со\r\n * случайным уровнем от 1 до maxLevel\r\n *\r\n * @param allowedTypes массив классов\r\n * @param maxLevel максимальный возможный уровень персонажа\r\n * @returns генератор, который при каждом вызове\r\n * возвращает новый экземпляр класса персонажа\r\n *\r\n */\nfunction characterGenerator(allowedTypes, maxLevel) {\n  var Type, level;\n  return _regeneratorRuntime().wrap(function characterGenerator$(_context) {\n    while (1) switch (_context.prev = _context.next) {\n      case 0:\n        if (false) {}\n        Type = allowedTypes[Math.floor(Math.random() * allowedTypes.length)];\n        level = Math.floor(Math.random() * maxLevel) + 1;\n        _context.next = 5;\n        return new Type(level);\n      case 5:\n        _context.next = 0;\n        break;\n      case 7:\n      case \"end\":\n        return _context.stop();\n    }\n  }, _marked);\n}\n\n/**\r\n * Формирует массив персонажей на основе characterGenerator\r\n * @param allowedTypes массив классов\r\n * @param maxLevel максимальный возможный уровень персонажа\r\n * @param characterCount количество персонажей, которое нужно сформировать\r\n * @returns экземпляр Team, хранящий экземпляры персонажей. Количество персонажей в команде - characterCount\r\n * */\n\nfunction generateTeam(allowedTypes, maxLevel, characterCount) {\n  var team = [];\n  var generator = characterGenerator(allowedTypes, maxLevel);\n  for (var i = 0; i < characterCount; i++) {\n    team.push(generator.next().value);\n  }\n  return team;\n}\n\n//# sourceURL=webpack:///./src/js/generators.js?");

/***/ }),

/***/ "./src/js/themes.js":
/*!**************************!*\
  !*** ./src/js/themes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar themes = {\n  prairie: 'prairie',\n  desert: 'desert',\n  arctic: 'arctic',\n  mountain: 'mountain'\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (themes);\n\n//# sourceURL=webpack:///./src/js/themes.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calcHealthLevel: () => (/* binding */ calcHealthLevel),\n/* harmony export */   calcTileType: () => (/* binding */ calcTileType)\n/* harmony export */ });\n/* eslint-disable no-unused-vars */\n\n/**\r\n * @todo\r\n * @param index - индекс поля\r\n * @param boardSize - размер квадратного поля (в длину или ширину)\r\n * @returns строка - тип ячейки на поле:\r\n *\r\n * top-left\r\n * top-right\r\n * top\r\n * bottom-left\r\n * bottom-right\r\n * bottom\r\n * right\r\n * left\r\n * center\r\n *\r\n * @example\r\n * ```js\r\n * calcTileType(0, 8); // 'top-left'\r\n * calcTileType(1, 8); // 'top'\r\n * calcTileType(63, 8); // 'bottom-right'\r\n * calcTileType(7, 7); // 'left'\r\n * ```\r\n * */\nfunction calcTileType(index, boardSize) {\n  var row = Math.floor(index / boardSize);\n  var col = index % boardSize;\n  if (row === 0 && col === 0) return \"top-left\";\n  if (row === 0 && col === boardSize - 1) return \"top-right\";\n  if (row === boardSize - 1 && col === 0) return \"bottom-left\";\n  if (row === boardSize - 1 && col === boardSize - 1) return \"bottom-right\";\n  if (row === 0) return \"top\";\n  if (row === boardSize - 1) return \"bottom\";\n  if (col === 0) return \"left\";\n  if (col === boardSize - 1) return \"right\";\n  return \"center\";\n}\nfunction calcHealthLevel(health) {\n  if (health < 15) {\n    return \"critical\";\n  }\n  if (health < 50) {\n    return \"normal\";\n  }\n  return \"high\";\n}\n\n//# sourceURL=webpack:///./src/js/utils.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/prairie/map-tile-top-left.png */ \"./src/img/prairie/map-tile-top-left.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../img/prairie/map-tile-top.png */ \"./src/img/prairie/map-tile-top.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../img/prairie/map-tile-top-right.png */ \"./src/img/prairie/map-tile-top-right.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../img/prairie/map-tile-bottom-left.png */ \"./src/img/prairie/map-tile-bottom-left.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../img/prairie/map-tile-bottom.png */ \"./src/img/prairie/map-tile-bottom.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../img/prairie/map-tile-bottom-right.png */ \"./src/img/prairie/map-tile-bottom-right.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../img/prairie/map-tile-left.png */ \"./src/img/prairie/map-tile-left.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../img/prairie/map-tile-right.png */ \"./src/img/prairie/map-tile-right.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../img/prairie/map-tile-center.png */ \"./src/img/prairie/map-tile-center.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../img/desert/map-tile-top-left.png */ \"./src/img/desert/map-tile-top-left.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../img/desert/map-tile-top.png */ \"./src/img/desert/map-tile-top.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../img/desert/map-tile-top-right.png */ \"./src/img/desert/map-tile-top-right.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../img/desert/map-tile-bottom-left.png */ \"./src/img/desert/map-tile-bottom-left.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../img/desert/map-tile-bottom.png */ \"./src/img/desert/map-tile-bottom.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ../img/desert/map-tile-bottom-right.png */ \"./src/img/desert/map-tile-bottom-right.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ../img/desert/map-tile-left.png */ \"./src/img/desert/map-tile-left.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ../img/desert/map-tile-right.png */ \"./src/img/desert/map-tile-right.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ../img/desert/map-tile-center.png */ \"./src/img/desert/map-tile-center.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ../img/arctic/map-tile-top-left.png */ \"./src/img/arctic/map-tile-top-left.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ../img/arctic/map-tile-top.png */ \"./src/img/arctic/map-tile-top.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ../img/arctic/map-tile-top-right.png */ \"./src/img/arctic/map-tile-top-right.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ../img/arctic/map-tile-bottom-left.png */ \"./src/img/arctic/map-tile-bottom-left.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ../img/arctic/map-tile-bottom.png */ \"./src/img/arctic/map-tile-bottom.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ../img/arctic/map-tile-bottom-right.png */ \"./src/img/arctic/map-tile-bottom-right.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ../img/arctic/map-tile-left.png */ \"./src/img/arctic/map-tile-left.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_25___ = new URL(/* asset import */ __webpack_require__(/*! ../img/arctic/map-tile-right.png */ \"./src/img/arctic/map-tile-right.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_26___ = new URL(/* asset import */ __webpack_require__(/*! ../img/arctic/map-tile-center.png */ \"./src/img/arctic/map-tile-center.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_27___ = new URL(/* asset import */ __webpack_require__(/*! ../img/mountain/map-tile-top-left.png */ \"./src/img/mountain/map-tile-top-left.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_28___ = new URL(/* asset import */ __webpack_require__(/*! ../img/mountain/map-tile-top.png */ \"./src/img/mountain/map-tile-top.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_29___ = new URL(/* asset import */ __webpack_require__(/*! ../img/mountain/map-tile-top-right.png */ \"./src/img/mountain/map-tile-top-right.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_30___ = new URL(/* asset import */ __webpack_require__(/*! ../img/mountain/map-tile-bottom-left.png */ \"./src/img/mountain/map-tile-bottom-left.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_31___ = new URL(/* asset import */ __webpack_require__(/*! ../img/mountain/map-tile-bottom.png */ \"./src/img/mountain/map-tile-bottom.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_32___ = new URL(/* asset import */ __webpack_require__(/*! ../img/mountain/map-tile-bottom-right.png */ \"./src/img/mountain/map-tile-bottom-right.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_33___ = new URL(/* asset import */ __webpack_require__(/*! ../img/mountain/map-tile-left.png */ \"./src/img/mountain/map-tile-left.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_34___ = new URL(/* asset import */ __webpack_require__(/*! ../img/mountain/map-tile-right.png */ \"./src/img/mountain/map-tile-right.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_35___ = new URL(/* asset import */ __webpack_require__(/*! ../img/mountain/map-tile-center.png */ \"./src/img/mountain/map-tile-center.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_36___ = new URL(/* asset import */ __webpack_require__(/*! ../img/characters/generic.png */ \"./src/img/characters/generic.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_37___ = new URL(/* asset import */ __webpack_require__(/*! ../img/characters/bowman.png */ \"./src/img/characters/bowman.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_38___ = new URL(/* asset import */ __webpack_require__(/*! ../img/characters/daemon.png */ \"./src/img/characters/daemon.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_39___ = new URL(/* asset import */ __webpack_require__(/*! ../img/characters/magician.png */ \"./src/img/characters/magician.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_40___ = new URL(/* asset import */ __webpack_require__(/*! ../img/characters/swordsman.png */ \"./src/img/characters/swordsman.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_41___ = new URL(/* asset import */ __webpack_require__(/*! ../img/characters/undead.png */ \"./src/img/characters/undead.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_42___ = new URL(/* asset import */ __webpack_require__(/*! ../img/characters/vampire.png */ \"./src/img/characters/vampire.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_43___ = new URL(/* asset import */ __webpack_require__(/*! ../img/characters/zombie.png */ \"./src/img/characters/zombie.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);\nvar ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);\nvar ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);\nvar ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);\nvar ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);\nvar ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);\nvar ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);\nvar ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_14___);\nvar ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_15___);\nvar ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_16___);\nvar ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_17___);\nvar ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_18___);\nvar ___CSS_LOADER_URL_REPLACEMENT_19___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_19___);\nvar ___CSS_LOADER_URL_REPLACEMENT_20___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_20___);\nvar ___CSS_LOADER_URL_REPLACEMENT_21___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_21___);\nvar ___CSS_LOADER_URL_REPLACEMENT_22___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_22___);\nvar ___CSS_LOADER_URL_REPLACEMENT_23___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_23___);\nvar ___CSS_LOADER_URL_REPLACEMENT_24___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_24___);\nvar ___CSS_LOADER_URL_REPLACEMENT_25___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_25___);\nvar ___CSS_LOADER_URL_REPLACEMENT_26___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_26___);\nvar ___CSS_LOADER_URL_REPLACEMENT_27___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_27___);\nvar ___CSS_LOADER_URL_REPLACEMENT_28___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_28___);\nvar ___CSS_LOADER_URL_REPLACEMENT_29___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_29___);\nvar ___CSS_LOADER_URL_REPLACEMENT_30___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_30___);\nvar ___CSS_LOADER_URL_REPLACEMENT_31___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_31___);\nvar ___CSS_LOADER_URL_REPLACEMENT_32___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_32___);\nvar ___CSS_LOADER_URL_REPLACEMENT_33___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_33___);\nvar ___CSS_LOADER_URL_REPLACEMENT_34___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_34___);\nvar ___CSS_LOADER_URL_REPLACEMENT_35___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_35___);\nvar ___CSS_LOADER_URL_REPLACEMENT_36___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_36___);\nvar ___CSS_LOADER_URL_REPLACEMENT_37___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_37___);\nvar ___CSS_LOADER_URL_REPLACEMENT_38___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_38___);\nvar ___CSS_LOADER_URL_REPLACEMENT_39___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_39___);\nvar ___CSS_LOADER_URL_REPLACEMENT_40___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_40___);\nvar ___CSS_LOADER_URL_REPLACEMENT_41___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_41___);\nvar ___CSS_LOADER_URL_REPLACEMENT_42___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_42___);\nvar ___CSS_LOADER_URL_REPLACEMENT_43___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_43___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n  --cell-size: 64px;\r\n}\r\n\r\nhtml, body {\r\n  height: 100%;\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  background: #000;\r\n  font-size: 16px;\r\n}\r\n\r\n.btn {\r\n  display: inline-block;\r\n  font-weight: 400;\r\n  color: #212529;\r\n  background-color: #f8f9fa;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  padding: .375rem .75rem;\r\n  font-size: 1rem;\r\n  line-height: 1.5;\r\n  border-radius: .25rem;\r\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\r\n  border: none;\r\n}\r\n\r\n.controls {\r\n  text-align: center;\r\n  margin: 50px 0;\r\n}\r\n\r\n.board-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.board {\r\n  display: grid;\r\n  grid-template-columns: repeat(8, 1fr);\r\n  grid-column-gap: 2px;\r\n  grid-row-gap: 2px;\r\n}\r\n\r\n.cell {\r\n  position: relative;\r\n}\r\n\r\n.cell.selected::before {\r\n  content: '';\r\n  display: block;\r\n  border: 4px;\r\n  border-radius: 32px;\r\n  box-sizing: border-box;\r\n  width: var(--cell-size);\r\n  height: var(--cell-size);\r\n  opacity: 0.9;\r\n  position: absolute;\r\n}\r\n\r\n.cell.selected-yellow::before {\r\n  border-color: #ff0;\r\n  border-style: solid;\r\n}\r\n\r\n.cell.selected-green::before {\r\n  border-color: #0f0;\r\n  border-style: dashed;\r\n}\r\n\r\n.cell.selected-red::before {\r\n  border-color: #f00;\r\n  border-style: dashed;\r\n}\r\n\r\n.board.prairie {\r\n  --map-tile-top-left-url: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n  --map-tile-top-url: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\r\n  --map-tile-top-right-url: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\r\n  --map-tile-bottom-left-url: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\r\n  --map-tile-bottom-url: url(${___CSS_LOADER_URL_REPLACEMENT_4___});\r\n  --map-tile-bottom-right-url: url(${___CSS_LOADER_URL_REPLACEMENT_5___});\r\n  --map-tile-left-url: url(${___CSS_LOADER_URL_REPLACEMENT_6___});\r\n  --map-tile-right-url: url(${___CSS_LOADER_URL_REPLACEMENT_7___});\r\n  --map-tile-center-url: url(${___CSS_LOADER_URL_REPLACEMENT_8___});\r\n}\r\n\r\n.board.desert {\r\n  --map-tile-top-left-url: url(${___CSS_LOADER_URL_REPLACEMENT_9___});\r\n  --map-tile-top-url: url(${___CSS_LOADER_URL_REPLACEMENT_10___});\r\n  --map-tile-top-right-url: url(${___CSS_LOADER_URL_REPLACEMENT_11___});\r\n  --map-tile-bottom-left-url: url(${___CSS_LOADER_URL_REPLACEMENT_12___});\r\n  --map-tile-bottom-url: url(${___CSS_LOADER_URL_REPLACEMENT_13___});\r\n  --map-tile-bottom-right-url: url(${___CSS_LOADER_URL_REPLACEMENT_14___});\r\n  --map-tile-left-url: url(${___CSS_LOADER_URL_REPLACEMENT_15___});\r\n  --map-tile-right-url: url(${___CSS_LOADER_URL_REPLACEMENT_16___});\r\n  --map-tile-center-url: url(${___CSS_LOADER_URL_REPLACEMENT_17___});\r\n}\r\n\r\n.board.arctic {\r\n  --map-tile-top-left-url: url(${___CSS_LOADER_URL_REPLACEMENT_18___});\r\n  --map-tile-top-url: url(${___CSS_LOADER_URL_REPLACEMENT_19___});\r\n  --map-tile-top-right-url: url(${___CSS_LOADER_URL_REPLACEMENT_20___});\r\n  --map-tile-bottom-left-url: url(${___CSS_LOADER_URL_REPLACEMENT_21___});\r\n  --map-tile-bottom-url: url(${___CSS_LOADER_URL_REPLACEMENT_22___});\r\n  --map-tile-bottom-right-url: url(${___CSS_LOADER_URL_REPLACEMENT_23___});\r\n  --map-tile-left-url: url(${___CSS_LOADER_URL_REPLACEMENT_24___});\r\n  --map-tile-right-url: url(${___CSS_LOADER_URL_REPLACEMENT_25___});\r\n  --map-tile-center-url: url(${___CSS_LOADER_URL_REPLACEMENT_26___});\r\n}\r\n\r\n.board.mountain {\r\n  --map-tile-top-left-url: url(${___CSS_LOADER_URL_REPLACEMENT_27___});\r\n  --map-tile-top-url: url(${___CSS_LOADER_URL_REPLACEMENT_28___});\r\n  --map-tile-top-right-url: url(${___CSS_LOADER_URL_REPLACEMENT_29___});\r\n  --map-tile-bottom-left-url: url(${___CSS_LOADER_URL_REPLACEMENT_30___});\r\n  --map-tile-bottom-url: url(${___CSS_LOADER_URL_REPLACEMENT_31___});\r\n  --map-tile-bottom-right-url: url(${___CSS_LOADER_URL_REPLACEMENT_32___});\r\n  --map-tile-left-url: url(${___CSS_LOADER_URL_REPLACEMENT_33___});\r\n  --map-tile-right-url: url(${___CSS_LOADER_URL_REPLACEMENT_34___});\r\n  --map-tile-center-url: url(${___CSS_LOADER_URL_REPLACEMENT_35___});\r\n}\r\n\r\n.map-tile {\r\n  width: var(--cell-size);\r\n  height: var(--cell-size);\r\n}\r\n\r\n.map-tile-top-left {\r\n  background: var(--map-tile-top-left-url);\r\n}\r\n\r\n.map-tile-top {\r\n  background: var(--map-tile-top-url);\r\n}\r\n\r\n.map-tile-top-right {\r\n  background: var(--map-tile-top-right-url);\r\n}\r\n\r\n.map-tile-bottom-left {\r\n  background: var(--map-tile-bottom-left-url);\r\n}\r\n\r\n.map-tile-bottom {\r\n  background: var(--map-tile-bottom-url);\r\n}\r\n\r\n.map-tile-bottom-right {\r\n  background: var(--map-tile-bottom-right-url);\r\n}\r\n\r\n.map-tile-left {\r\n  background: var(--map-tile-left-url);\r\n}\r\n\r\n.map-tile-right {\r\n  background: var(--map-tile-right-url);\r\n}\r\n\r\n.map-tile-center {\r\n  background: var(--map-tile-center-url);\r\n}\r\n\r\n.character {\r\n  width: var(--cell-size);\r\n  height: var(--cell-size);\r\n  position: absolute;\r\n  z-index: 99;\r\n}\r\n\r\n.character.generic {\r\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_36___});\r\n}\r\n\r\n.character.bowman {\r\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_37___});\r\n}\r\n\r\n.character.daemon {\r\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_38___});\r\n}\r\n\r\n.character.magician {\r\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_39___});\r\n}\r\n\r\n.character.swordsman {\r\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_40___});\r\n}\r\n\r\n.character.undead {\r\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_41___});\r\n}\r\n\r\n.character.vampire {\r\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_42___});\r\n}\r\n\r\n.character.zombie {\r\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_43___});\r\n}\r\n\r\n.health-level {\r\n  top: 2px;\r\n  left: 7px;\r\n  position: absolute;\r\n  width: 50px;\r\n  height: 4px;\r\n  background: #000;\r\n}\r\n\r\n.health-level-indicator {\r\n  height: 4px;\r\n}\r\n\r\n.health-level-indicator-high {\r\n  background: #0f0;\r\n}\r\n\r\n.health-level-indicator-normal {\r\n  background: #ff0;\r\n}\r\n\r\n.health-level-indicator-critical {\r\n  background: #f00;\r\n}\r\n\r\n.damage {\r\n  position: absolute;\r\n  width: var(--cell-size);\r\n  text-align: center;\r\n  z-index: 999;\r\n  color: #f00;\r\n  font-weight: bold;\r\n  animation: 500ms fade ease-out;\r\n}\r\n\r\n@keyframes fade {\r\n  from {\r\n    opacity: 0;\r\n    top: calc(var(--cell-size) * 0.5);\r\n    font-size: 1rem;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    top: -20px;\r\n    font-size: 1.5rem;\r\n  }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/img/arctic/map-tile-bottom-left.png":
/*!*************************************************!*\
  !*** ./src/img/arctic/map-tile-bottom-left.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b27323cf850ed820855c.png\";\n\n//# sourceURL=webpack:///./src/img/arctic/map-tile-bottom-left.png?");

/***/ }),

/***/ "./src/img/arctic/map-tile-bottom-right.png":
/*!**************************************************!*\
  !*** ./src/img/arctic/map-tile-bottom-right.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ac9d74f57639792774bc.png\";\n\n//# sourceURL=webpack:///./src/img/arctic/map-tile-bottom-right.png?");

/***/ }),

/***/ "./src/img/arctic/map-tile-bottom.png":
/*!********************************************!*\
  !*** ./src/img/arctic/map-tile-bottom.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"63aae58e4690953a3857.png\";\n\n//# sourceURL=webpack:///./src/img/arctic/map-tile-bottom.png?");

/***/ }),

/***/ "./src/img/arctic/map-tile-center.png":
/*!********************************************!*\
  !*** ./src/img/arctic/map-tile-center.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"246277b8ca590816b3e8.png\";\n\n//# sourceURL=webpack:///./src/img/arctic/map-tile-center.png?");

/***/ }),

/***/ "./src/img/arctic/map-tile-left.png":
/*!******************************************!*\
  !*** ./src/img/arctic/map-tile-left.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3d9503e0a850fda86f82.png\";\n\n//# sourceURL=webpack:///./src/img/arctic/map-tile-left.png?");

/***/ }),

/***/ "./src/img/arctic/map-tile-right.png":
/*!*******************************************!*\
  !*** ./src/img/arctic/map-tile-right.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"22e7c5ede3f747cbe27a.png\";\n\n//# sourceURL=webpack:///./src/img/arctic/map-tile-right.png?");

/***/ }),

/***/ "./src/img/arctic/map-tile-top-left.png":
/*!**********************************************!*\
  !*** ./src/img/arctic/map-tile-top-left.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eab6a2cc5e89a4dd8e3f.png\";\n\n//# sourceURL=webpack:///./src/img/arctic/map-tile-top-left.png?");

/***/ }),

/***/ "./src/img/arctic/map-tile-top-right.png":
/*!***********************************************!*\
  !*** ./src/img/arctic/map-tile-top-right.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d31d84c693f649766aee.png\";\n\n//# sourceURL=webpack:///./src/img/arctic/map-tile-top-right.png?");

/***/ }),

/***/ "./src/img/arctic/map-tile-top.png":
/*!*****************************************!*\
  !*** ./src/img/arctic/map-tile-top.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e0aa3daf6d08c62c96d9.png\";\n\n//# sourceURL=webpack:///./src/img/arctic/map-tile-top.png?");

/***/ }),

/***/ "./src/img/characters/bowman.png":
/*!***************************************!*\
  !*** ./src/img/characters/bowman.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cec542854b228e61547a.png\";\n\n//# sourceURL=webpack:///./src/img/characters/bowman.png?");

/***/ }),

/***/ "./src/img/characters/daemon.png":
/*!***************************************!*\
  !*** ./src/img/characters/daemon.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cf170a9fea1051b7424a.png\";\n\n//# sourceURL=webpack:///./src/img/characters/daemon.png?");

/***/ }),

/***/ "./src/img/characters/generic.png":
/*!****************************************!*\
  !*** ./src/img/characters/generic.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0a77fc47d727eab6fd39.png\";\n\n//# sourceURL=webpack:///./src/img/characters/generic.png?");

/***/ }),

/***/ "./src/img/characters/magician.png":
/*!*****************************************!*\
  !*** ./src/img/characters/magician.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c0fa2b75539f94144dc4.png\";\n\n//# sourceURL=webpack:///./src/img/characters/magician.png?");

/***/ }),

/***/ "./src/img/characters/swordsman.png":
/*!******************************************!*\
  !*** ./src/img/characters/swordsman.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2007ec00c1d9f997e704.png\";\n\n//# sourceURL=webpack:///./src/img/characters/swordsman.png?");

/***/ }),

/***/ "./src/img/characters/undead.png":
/*!***************************************!*\
  !*** ./src/img/characters/undead.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f5c75398bcb5931f9f3c.png\";\n\n//# sourceURL=webpack:///./src/img/characters/undead.png?");

/***/ }),

/***/ "./src/img/characters/vampire.png":
/*!****************************************!*\
  !*** ./src/img/characters/vampire.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bf0ed0dca1d1e6091d42.png\";\n\n//# sourceURL=webpack:///./src/img/characters/vampire.png?");

/***/ }),

/***/ "./src/img/characters/zombie.png":
/*!***************************************!*\
  !*** ./src/img/characters/zombie.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"296dfeac15e2377fc1dc.png\";\n\n//# sourceURL=webpack:///./src/img/characters/zombie.png?");

/***/ }),

/***/ "./src/img/desert/map-tile-bottom-left.png":
/*!*************************************************!*\
  !*** ./src/img/desert/map-tile-bottom-left.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"13edb269e39172ddd74f.png\";\n\n//# sourceURL=webpack:///./src/img/desert/map-tile-bottom-left.png?");

/***/ }),

/***/ "./src/img/desert/map-tile-bottom-right.png":
/*!**************************************************!*\
  !*** ./src/img/desert/map-tile-bottom-right.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5cf9c17d6a1ea7106a6c.png\";\n\n//# sourceURL=webpack:///./src/img/desert/map-tile-bottom-right.png?");

/***/ }),

/***/ "./src/img/desert/map-tile-bottom.png":
/*!********************************************!*\
  !*** ./src/img/desert/map-tile-bottom.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f1703771380a9959d979.png\";\n\n//# sourceURL=webpack:///./src/img/desert/map-tile-bottom.png?");

/***/ }),

/***/ "./src/img/desert/map-tile-center.png":
/*!********************************************!*\
  !*** ./src/img/desert/map-tile-center.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"51e2a5de56bd631452fe.png\";\n\n//# sourceURL=webpack:///./src/img/desert/map-tile-center.png?");

/***/ }),

/***/ "./src/img/desert/map-tile-left.png":
/*!******************************************!*\
  !*** ./src/img/desert/map-tile-left.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eb1f6e4f87b977012684.png\";\n\n//# sourceURL=webpack:///./src/img/desert/map-tile-left.png?");

/***/ }),

/***/ "./src/img/desert/map-tile-right.png":
/*!*******************************************!*\
  !*** ./src/img/desert/map-tile-right.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2c19971f327b288278bb.png\";\n\n//# sourceURL=webpack:///./src/img/desert/map-tile-right.png?");

/***/ }),

/***/ "./src/img/desert/map-tile-top-left.png":
/*!**********************************************!*\
  !*** ./src/img/desert/map-tile-top-left.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"258d884122fabfc2f312.png\";\n\n//# sourceURL=webpack:///./src/img/desert/map-tile-top-left.png?");

/***/ }),

/***/ "./src/img/desert/map-tile-top-right.png":
/*!***********************************************!*\
  !*** ./src/img/desert/map-tile-top-right.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2f1e1970c2c20cf3a8d5.png\";\n\n//# sourceURL=webpack:///./src/img/desert/map-tile-top-right.png?");

/***/ }),

/***/ "./src/img/desert/map-tile-top.png":
/*!*****************************************!*\
  !*** ./src/img/desert/map-tile-top.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dc3f97e7bbcd5ea1ded9.png\";\n\n//# sourceURL=webpack:///./src/img/desert/map-tile-top.png?");

/***/ }),

/***/ "./src/img/mountain/map-tile-bottom-left.png":
/*!***************************************************!*\
  !*** ./src/img/mountain/map-tile-bottom-left.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1d70f1dab2dd418c3612.png\";\n\n//# sourceURL=webpack:///./src/img/mountain/map-tile-bottom-left.png?");

/***/ }),

/***/ "./src/img/mountain/map-tile-bottom-right.png":
/*!****************************************************!*\
  !*** ./src/img/mountain/map-tile-bottom-right.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6bacb8e25ed9ecf726bf.png\";\n\n//# sourceURL=webpack:///./src/img/mountain/map-tile-bottom-right.png?");

/***/ }),

/***/ "./src/img/mountain/map-tile-bottom.png":
/*!**********************************************!*\
  !*** ./src/img/mountain/map-tile-bottom.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f462d2ed6eedca1e4fd9.png\";\n\n//# sourceURL=webpack:///./src/img/mountain/map-tile-bottom.png?");

/***/ }),

/***/ "./src/img/mountain/map-tile-center.png":
/*!**********************************************!*\
  !*** ./src/img/mountain/map-tile-center.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6f6f7c09bde970b2e41b.png\";\n\n//# sourceURL=webpack:///./src/img/mountain/map-tile-center.png?");

/***/ }),

/***/ "./src/img/mountain/map-tile-left.png":
/*!********************************************!*\
  !*** ./src/img/mountain/map-tile-left.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c75f062dddba6e98fdc6.png\";\n\n//# sourceURL=webpack:///./src/img/mountain/map-tile-left.png?");

/***/ }),

/***/ "./src/img/mountain/map-tile-right.png":
/*!*********************************************!*\
  !*** ./src/img/mountain/map-tile-right.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"26fdc25019c24e87f11a.png\";\n\n//# sourceURL=webpack:///./src/img/mountain/map-tile-right.png?");

/***/ }),

/***/ "./src/img/mountain/map-tile-top-left.png":
/*!************************************************!*\
  !*** ./src/img/mountain/map-tile-top-left.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ef1b0ea8c4e545d9aadc.png\";\n\n//# sourceURL=webpack:///./src/img/mountain/map-tile-top-left.png?");

/***/ }),

/***/ "./src/img/mountain/map-tile-top-right.png":
/*!*************************************************!*\
  !*** ./src/img/mountain/map-tile-top-right.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a1d2321024649b9d8f5f.png\";\n\n//# sourceURL=webpack:///./src/img/mountain/map-tile-top-right.png?");

/***/ }),

/***/ "./src/img/mountain/map-tile-top.png":
/*!*******************************************!*\
  !*** ./src/img/mountain/map-tile-top.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8b928c3eb136543e573a.png\";\n\n//# sourceURL=webpack:///./src/img/mountain/map-tile-top.png?");

/***/ }),

/***/ "./src/img/prairie/map-tile-bottom-left.png":
/*!**************************************************!*\
  !*** ./src/img/prairie/map-tile-bottom-left.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"26b5f224d8750119922d.png\";\n\n//# sourceURL=webpack:///./src/img/prairie/map-tile-bottom-left.png?");

/***/ }),

/***/ "./src/img/prairie/map-tile-bottom-right.png":
/*!***************************************************!*\
  !*** ./src/img/prairie/map-tile-bottom-right.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2429af6d3a5796e3c34b.png\";\n\n//# sourceURL=webpack:///./src/img/prairie/map-tile-bottom-right.png?");

/***/ }),

/***/ "./src/img/prairie/map-tile-bottom.png":
/*!*********************************************!*\
  !*** ./src/img/prairie/map-tile-bottom.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"07d5e8127645225478b6.png\";\n\n//# sourceURL=webpack:///./src/img/prairie/map-tile-bottom.png?");

/***/ }),

/***/ "./src/img/prairie/map-tile-center.png":
/*!*********************************************!*\
  !*** ./src/img/prairie/map-tile-center.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0089a610e6611f679b50.png\";\n\n//# sourceURL=webpack:///./src/img/prairie/map-tile-center.png?");

/***/ }),

/***/ "./src/img/prairie/map-tile-left.png":
/*!*******************************************!*\
  !*** ./src/img/prairie/map-tile-left.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"546abb060a0837550fd1.png\";\n\n//# sourceURL=webpack:///./src/img/prairie/map-tile-left.png?");

/***/ }),

/***/ "./src/img/prairie/map-tile-right.png":
/*!********************************************!*\
  !*** ./src/img/prairie/map-tile-right.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6a84ae91f5d985ddc9ee.png\";\n\n//# sourceURL=webpack:///./src/img/prairie/map-tile-right.png?");

/***/ }),

/***/ "./src/img/prairie/map-tile-top-left.png":
/*!***********************************************!*\
  !*** ./src/img/prairie/map-tile-top-left.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"46d63299c3420c030b4e.png\";\n\n//# sourceURL=webpack:///./src/img/prairie/map-tile-top-left.png?");

/***/ }),

/***/ "./src/img/prairie/map-tile-top-right.png":
/*!************************************************!*\
  !*** ./src/img/prairie/map-tile-top-right.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0ac7f8258ec7166dc957.png\";\n\n//# sourceURL=webpack:///./src/img/prairie/map-tile-top-right.png?");

/***/ }),

/***/ "./src/img/prairie/map-tile-top.png":
/*!******************************************!*\
  !*** ./src/img/prairie/map-tile-top.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"946aeb948db6313f1d85.png\";\n\n//# sourceURL=webpack:///./src/img/prairie/map-tile-top.png?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;