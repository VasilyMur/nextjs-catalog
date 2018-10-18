module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AddForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_FormStyles__ = __webpack_require__("./components/styles/FormStyles.js");
var _jsxFileName = "C:\\Users\\user\\Desktop\\UDEMY\\NEXT-JS-PROJECTS\\adultmoscow\\components\\AddForm.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var AddForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AddForm, _React$Component);

  function AddForm() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, AddForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = AddForm.__proto__ || Object.getPrototypeOf(AddForm)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        city: '',
        name: '',
        description: '',
        phone: '',
        url: '',
        schedule: {},
        address: '',
        lng: '',
        lat: '',
        errors: {}
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "validateHourStart", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var hourStart = _this.state.hourStart;
        var errors = {};
        var formIsValid = true;
        var regex = new RegExp(/^\d{2}\:\d{2}$/i);

        if (!regex.test(hourStart)) {
          formIsValid = false;
          errors['hourStart'] = '* Введите часы в указанном формате!';
        } else {
          formIsValid = true;
        }

        _this.setState({
          errors: errors
        });

        return formIsValid;
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "validateHourEnd", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var hourEnd = _this.state.hourEnd;
        var errors = {};
        var formIsValid = true;
        var regex = new RegExp(/^\d{2}\:\d{2}$/i);

        if (!regex.test(hourEnd)) {
          formIsValid = false;
          errors['hourEnd'] = '* Введите часы в указанном формате!';
        } else {
          formIsValid = true;
        }

        _this.setState({
          errors: errors
        });

        return formIsValid;
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "validatePhone", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var phone = _this.state.phone;
        var errors = {};
        var formIsValid = true;
        var regex = new RegExp(/\d{1}-\d{3}-\d{3}-\d{4}/i);

        if (!regex.test(phone)) {
          formIsValid = false;
          errors['phone'] = '* Введите телефон в указанном формате!';
        } else {
          formIsValid = true;
        }

        _this.setState({
          errors: errors
        });

        return formIsValid;
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        e.preventDefault();
        var item = {
          city: _this.state.city,
          name: _this.state.name,
          description: _this.state.description,
          phone: _this.state.phone,
          url: _this.state.url,
          days: _this.state.days,
          address: _this.state.address,
          lat: _this.state.lat,
          lng: _this.state.lng
        };
        console.log(item);

        if (!_this.validateHourStart() || !_this.validateHourEnd() || !_this.validatePhone()) {
          console.log('submit error');
        } else {
          console.log('all correct!!'); // axios.post('/api/items/create', item).then(res => {
          //     console.log(res)
          // }).catch((err) => {
          //     console.log(err)
          // })

          _this.setState({
            city: '',
            name: '',
            description: '',
            phone: '',
            url: '',
            days: [],
            address: '',
            lat: '',
            lng: ''
          });
        }
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var name = e.target.name;
        var value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        if (e.target.type !== 'checkbox') {
          _this.setState(_defineProperty({}, name, value));
        } else {
          console.log(name);

          if (value !== true) {
            var index = _this.state.days.indexOf(name);

            _this.setState({
              days: _toConsumableArray(_this.state.days.slice(0, index)).concat(_toConsumableArray(_this.state.days.slice(index + 1)))
            });
          } else {
            _this.setState({
              days: _toConsumableArray(_this.state.days).concat([name])
            });
          }
        }
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleAddressChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var address = e.target.value;
        var dropdown = new google.maps.places.Autocomplete(document.getElementById('autocomplete'));
        dropdown.addListener('place_changed', function () {
          var place = dropdown.getPlace();
          var address = place.formatted_address;
          var lat = place.geometry.location.lat();
          var lng = place.geometry.location.lng();

          _this.setState({
            address: address,
            lat: lat,
            lng: lng
          });
        });

        _this.setState({
          address: address
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleScheduleChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var time = e.target.value;
        console.log(time);
      }
    }), _temp));
  }

  _createClass(AddForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var weekDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__styles_FormStyles__["a" /* default */], {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("fieldset", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, " \u0413\u043E\u0440\u043E\u0434", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select", {
        value: this.state.city,
        type: "text",
        placeholder: "\u0413\u043E\u0440\u043E\u0434",
        name: "city",
        onChange: this.handleChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "moscow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, "\u041C\u043E\u0441\u043A\u0432\u0430"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "saint-petersburg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, "\u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, " \u0422\u0435\u043B\u0435\u0444\u043E\u043D", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        value: this.state.phone,
        type: "text",
        placeholder: "7-985-555-2233",
        name: "phone",
        onChange: this.handleChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }), this.state.errors.phone ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "form__error",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }, this.state.errors.phone) : ''), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, " Name", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        value: this.state.name,
        type: "text",
        placeholder: "Name",
        name: "name",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }, " Description", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("textarea", {
        value: this.state.description,
        type: "text",
        placeholder: "Description",
        name: "description",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }, " Website", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        value: this.state.url,
        type: "url",
        placeholder: "http://hello.ru",
        name: "url",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }, "Address", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        id: "autocomplete",
        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441",
        name: "address",
        onChange: this.handleAddressChange,
        value: this.state.address,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }, "\u0427\u0430\u0441\u044B \u0420\u0430\u0431\u043E\u0442\u044B"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "workHours",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        }
      }, weekDays.map(function (res, i) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 204
          }
        }, res, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
          key: i,
          type: "text",
          name: "".concat(res, "Open"),
          placeholder: "Open",
          onChange: _this2.handleScheduleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
          key: i + 1,
          type: "text",
          name: "".concat(res, "Close"),
          placeholder: "Close",
          onChange: _this2.handleScheduleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211
          }
        }));
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        }
      }, "Add"))));
    }
  }]);

  return AddForm;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (AddForm);

/***/ }),

/***/ "./components/styles/FormStyles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);

var FormStyles = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.form.withConfig({
  displayName: "FormStyles",
  componentId: "sc-3qa0dp-0"
})(["box-shadow:0 0 5px 3px rgba(0,0,0,0.05);background:rgba(0,0,0,0.02);border:5px solid white;padding:20px;font-size:1.5rem;line-height:1.5;font-weight:500;.workHours{label{display:grid;grid-template-columns:repeat(auto-fit,minmax(100px,1fr));grid-gap:10px;align-items:center;}}label{display:block;margin-bottom:1rem;}input,textarea,select{width:100%;padding:0.5rem;font-size:1.5rem;border:1px solid black;&:focus{outline:0;border-color:", ";}}button,input[type='submit']{width:auto;background:red;color:white;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;}button,input[type='submit']:hover{cursor:pointer;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;content:'';display:block;background-image:linear-gradient(to right,#ff3019 0%,#e2b04a 50%,#ff3019 100%);}}.form__error{color:", "}"], function (props) {
  return props.theme.red;
}, function (props) {
  return props.theme.red;
});
/* harmony default export */ __webpack_exports__["a"] = (FormStyles);

/***/ }),

/***/ "./pages/add.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_AddForm__ = __webpack_require__("./components/AddForm.js");
var _jsxFileName = "C:\\Users\\user\\Desktop\\UDEMY\\NEXT-JS-PROJECTS\\adultmoscow\\pages\\add.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Add =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Add, _React$Component);

  function Add() {
    _classCallCheck(this, Add);

    return _possibleConstructorReturn(this, (Add.__proto__ || Object.getPrototypeOf(Add)).apply(this, arguments));
  }

  _createClass(Add, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, "Add Item"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_AddForm__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      })));
    }
  }]);

  return Add;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var Container = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
  displayName: "add__Container",
  componentId: "sc-1ksrj9w-0"
})(["max-width:500px;margin:0 auto;"]);
/* harmony default export */ __webpack_exports__["default"] = (Add);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/add.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=add.js.map