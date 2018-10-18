webpackHotUpdate(5,{

/***/ "./components/AddForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("./node_modules/next/head.js");
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
        hourStart: '',
        hourEnd: '',
        days: [],
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
          hourStart: _this.state.hourStart,
          hourEnd: _this.state.hourEnd,
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
            hourStart: '',
            hourEnd: '',
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
    }), _temp));
  }

  _createClass(AddForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var weekDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
      var labels = ['name', 'description'];
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "https://unpkg.com/react-day-picker/lib/style.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__styles_FormStyles__["a" /* default */], {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("fieldset", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
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
          lineNumber: 162
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "moscow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, "\u041C\u043E\u0441\u043A\u0432\u0430"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "saint-petersburg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, "\u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
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
          lineNumber: 170
        }
      }), this.state.errors.phone ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "form__error",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, this.state.errors.phone) : ''), labels.map(function (res, i) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 175
          }
        }, " ", res, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
          value: _this2.state[res],
          type: "text",
          placeholder: res,
          name: res,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177
          }
        }));
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }, " Website", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        value: this.state.url,
        type: "url",
        placeholder: "http://hello.ru",
        name: "url",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }, "Address", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        id: "autocomplete",
        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441",
        name: "address",
        onChange: this.handleAddressChange,
        value: this.state.address,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      }, "Hours", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("fieldset", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        value: this.state.hourStart,
        placeholder: "12:00",
        name: "hourStart",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }), this.state.errors.hourStart ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "form__error",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        }
      }, this.state.errors.hourStart) : '', __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        value: this.state.hourEnd,
        placeholder: "14:00",
        name: "hourEnd",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }), this.state.errors.hourEnd ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "form__error",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        }
      }, this.state.errors.hourEnd) : '')), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }, "\u0414\u0435\u043D\u044C \u041D\u0435\u0434\u0435\u043B\u0438"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "workHours",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      }, weekDays.map(function (res, i) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212
          }
        }, res, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
          key: i,
          type: "text",
          name: "".concat(res, "Open"),
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
          key: i,
          type: "text",
          name: "".concat(res, "Close"),
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218
          }
        }));
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        }
      }, "Add"))));
    }
  }]);

  return AddForm;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (AddForm);

/***/ })

})
//# sourceMappingURL=5.9873ede66c67547c1287.hot-update.js.map