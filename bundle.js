/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _path = __webpack_require__(2);

	var _path2 = _interopRequireDefault(_path);

	var _compression = __webpack_require__(3);

	var _compression2 = _interopRequireDefault(_compression);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(5);

	var _reactRouter = __webpack_require__(6);

	var _routes = __webpack_require__(7);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = (0, _express2.default)();

	app.use((0, _compression2.default)());

	// serve our static stuff like index.css
	app.use(_express2.default.static(_path2.default.join(__dirname, 'public'), { index: false }));

	// send all requests to index.html so browserHistory works
	app.get('*', function (req, res) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
	    if (err) {
	      res.status(500).send(err.message);
	    } else if (redirect) {
	      res.redirect(redirect.pathname + redirect.search);
	    } else if (props) {
	      // hey we made it!
	      var appHtml = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));
	      res.send(renderPage(appHtml));
	    } else {
	      res.status(404).send('Not Found');
	    }
	  });
	});

	function renderPage(appHtml) {
	  return '\n<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <link rel="shortcut icon" href="favicon.ico">\n  <link rel="stylesheet" type="text/css"  href="style/app.css">\n  <link rel="stylesheet" type="text/css"  href="style/material-icons.css">\n  <title>Nuflow</title>\n</head>\n<body>\n    <div id=root>' + appHtml + '</div>\n</body>\n<script src="/bundle.js"></script>\n</html>\n   ';
	}

	var PORT = process.env.PORT || 8080;
	app.listen(PORT, function () {
	  console.log('Production Express server running at localhost:' + PORT);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(6);

	var _App = __webpack_require__(8);

	var _App2 = _interopRequireDefault(_App);

	var _Home = __webpack_require__(15);

	var _Home2 = _interopRequireDefault(_Home);

	var _Login = __webpack_require__(16);

	var _Login2 = _interopRequireDefault(_Login);

	var _Register = __webpack_require__(18);

	var _Register2 = _interopRequireDefault(_Register);

	var _Feed = __webpack_require__(19);

	var _Feed2 = _interopRequireDefault(_Feed);

	var _Logout = __webpack_require__(21);

	var _Logout2 = _interopRequireDefault(_Logout);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _react2.default.createElement(
	  _reactRouter.Route,
	  { path: '/', component: _App2.default },
	  _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/login', component: _Login2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/register', component: _Register2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/Feed', component: _Feed2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/logout', component: _Logout2.default })
	);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactMdl = __webpack_require__(9);

	var _reactRouter = __webpack_require__(6);

	var _Sidebar = __webpack_require__(10);

	var _Sidebar2 = _interopRequireDefault(_Sidebar);

	var _Settings = __webpack_require__(11);

	var _Settings2 = _interopRequireDefault(_Settings);

	var _Search = __webpack_require__(12);

	var _Search2 = _interopRequireDefault(_Search);

	var _pubsubJs = __webpack_require__(13);

	var _pubsubJs2 = _interopRequireDefault(_pubsubJs);

	var _axios = __webpack_require__(14);

	var _axios2 = _interopRequireDefault(_axios);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_Component) {
	    _inherits(App, _Component);

	    function App() {
	        _classCallCheck(this, App);

	        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

	        _this.state = {
	            login: false
	        };
	        _this.loginUser = _this.loginUser.bind(_this);

	        _axios2.default.defaults.baseURL = 'https://nuflow.herokuapp.com';
	        // axios.defaults.baseURL = 'http://localhost:3001';
	        return _this;
	    }

	    _createClass(App, [{
	        key: 'loginUser',


	        // componentWillMount(){
	        //     if(this.localStorage !== null){
	        //         this.setState({login:true});
	        //         this.context.router.push('/Feed');
	        //     }else{
	        //         this.setState({login:false});
	        //          this.context.router.push('/');
	        //     }
	        // }
	        value: function loginUser() {
	            var _this2 = this;

	            _pubsubJs2.default.subscribe('login', function (tipoco) {
	                _this2.setState({ login: true });
	            });
	            _pubsubJs2.default.subscribe('logout', function (tipoco) {
	                _this2.setState({ login: false });
	            });

	            if (this.state.login === false) {
	                return _react2.default.createElement(
	                    _reactRouter.Link,
	                    { to: '/login' },
	                    'login'
	                );
	            } else {
	                return _react2.default.createElement(
	                    _reactRouter.Link,
	                    { to: '/logout' },
	                    'Logout'
	                );
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    _reactMdl.Layout,
	                    { fixedHeader: true },
	                    _react2.default.createElement(
	                        _reactMdl.Header,
	                        { title: _react2.default.createElement(
	                                'span',
	                                null,
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    'Nuflow'
	                                )
	                            ) },
	                        _react2.default.createElement(
	                            _reactMdl.Navigation,
	                            null,
	                            _react2.default.createElement(_Search2.default, null),
	                            this.loginUser()
	                        ),
	                        _react2.default.createElement(_Settings2.default, null)
	                    ),
	                    _react2.default.createElement(_Sidebar2.default, null),
	                    _react2.default.createElement(
	                        _reactMdl.Content,
	                        null,
	                        this.props.children
	                    )
	                )
	            );
	        }
	    }]);

	    return App;
	}(_react.Component);

	exports.default = App;


	App.contextTypes = {
	    router: _react2.default.PropTypes.object.isRequired
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("react-mdl");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactMdl = __webpack_require__(9);

	var _reactRouter = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SideBar = function (_Component) {
	    _inherits(SideBar, _Component);

	    function SideBar() {
	        _classCallCheck(this, SideBar);

	        return _possibleConstructorReturn(this, (SideBar.__proto__ || Object.getPrototypeOf(SideBar)).apply(this, arguments));
	    }

	    _createClass(SideBar, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                _reactMdl.Drawer,
	                { className: 'mdl-layout--small-screen-only' },
	                _react2.default.createElement(
	                    _reactMdl.Navigation,
	                    null,
	                    _react2.default.createElement(
	                        _reactRouter.Link,
	                        { to: '' },
	                        'legal'
	                    ),
	                    _react2.default.createElement(
	                        _reactRouter.Link,
	                        { to: '' },
	                        'tem'
	                    )
	                )
	            );
	        }
	    }]);

	    return SideBar;
	}(_react.Component);

	exports.default = SideBar;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactMdl = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Settings = function (_Component) {
		_inherits(Settings, _Component);

		function Settings() {
			_classCallCheck(this, Settings);

			return _possibleConstructorReturn(this, (Settings.__proto__ || Object.getPrototypeOf(Settings)).apply(this, arguments));
		}

		_createClass(Settings, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ style: { position: 'relative' } },
					_react2.default.createElement(_reactMdl.IconButton, { name: 'more_vert', id: 'demo-menu-lower-right' }),
					_react2.default.createElement(
						_reactMdl.Menu,
						{ target: 'demo-menu-lower-right', align: 'right' },
						_react2.default.createElement(
							_reactMdl.MenuItem,
							null,
							'Regulamento'
						),
						_react2.default.createElement(
							_reactMdl.MenuItem,
							null,
							_react2.default.createElement(
								'a',
								{ href: 'https://github.com/Alberto19' },
								'GitHub'
							)
						),
						_react2.default.createElement(
							_reactMdl.MenuItem,
							null,
							'About'
						)
					)
				);
			}
		}]);

		return Settings;
	}(_react.Component);

	exports.default = Settings;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactMdl = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Search = function (_Component) {
	    _inherits(Search, _Component);

	    function Search() {
	        _classCallCheck(this, Search);

	        return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
	    }

	    _createClass(Search, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_reactMdl.Textfield, {
	                    onChange: function onChange() {},
	                    label: 'Expandable Input',
	                    expandable: true,
	                    expandableIcon: 'search'
	                })
	            );
	        }
	    }]);

	    return Search;
	}(_react.Component);

	exports.default = Search;

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("pubsub-js");

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("axios");

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactMdl = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Home = function (_Component) {
		_inherits(Home, _Component);

		function Home() {
			_classCallCheck(this, Home);

			return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
		}

		_createClass(Home, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						_reactMdl.Layout,
						null,
						_react2.default.createElement(
							'h1',
							{ style: { textAlign: 'center' } },
							'Nuflow em Constru\xE7\xE3o...'
						)
					)
				);
			}
		}]);

		return Home;
	}(_react.Component);

	exports.default = Home;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactMdl = __webpack_require__(9);

	var _reactRouter = __webpack_require__(6);

	var _pubsubJs = __webpack_require__(13);

	var _pubsubJs2 = _interopRequireDefault(_pubsubJs);

	var _axios = __webpack_require__(14);

	var _axios2 = _interopRequireDefault(_axios);

	var _reactFacebookLogin = __webpack_require__(17);

	var _reactFacebookLogin2 = _interopRequireDefault(_reactFacebookLogin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Login = function (_Component) {
	    _inherits(Login, _Component);

	    function Login(props) {
	        _classCallCheck(this, Login);

	        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

	        _this.state = {
	            email: '',
	            password: ''
	        };
	        _this.login = _this.login.bind(_this);
	        _this.facebook = _this.facebook.bind(_this);
	        return _this;
	    }

	    _createClass(Login, [{
	        key: 'inputChange',
	        value: function inputChange(nome, e) {
	            this.setState(_defineProperty({}, nome, e.target.value));
	        }
	    }, {
	        key: 'login',
	        value: function login(e) {
	            var _this2 = this;

	            e.preventDefault();

	            var user = {
	                login: this.state.email,
	                password: this.state.password
	            };
	            _axios2.default.post('/user/singIn', user).then(function (result) {
	                localStorage.setItem('token', result.data.token);
	                _pubsubJs2.default.publish('login');
	                _this2.context.router.push('/Feed');
	            }).catch(function (err) {
	                alert(err);
	            });
	        }
	    }, {
	        key: 'facebook',
	        value: function facebook(response) {
	            localStorage.setItem('token', response.accessToken);
	            _pubsubJs2.default.publish('login');
	            this.context.router.push('/Feed');
	            console.log(response);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                _reactMdl.Grid,
	                { className: 'section--center' },
	                _react2.default.createElement(
	                    _reactMdl.Cell,
	                    { offsetDesktop: 3, col: 6, offsetTablet: 1, tablet: 6, phone: 5 },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'mdl-shadow--2dp formLogin ' },
	                        _react2.default.createElement(
	                            'form',
	                            { onSubmit: this.login, method: 'post', style: { paddingTop: "30px" } },
	                            _react2.default.createElement(
	                                _reactMdl.Grid,
	                                null,
	                                _react2.default.createElement(
	                                    _reactMdl.Cell,
	                                    { offsetDesktop: 3, col: 6, offsetTablet: 1, tablet: 7, phone: 6 },
	                                    _react2.default.createElement(_reactMdl.Textfield, { type: 'email',
	                                        onChange: this.inputChange.bind(this, 'email'),
	                                        label: 'exemplo@exemplo.com'

	                                    }),
	                                    _react2.default.createElement(_reactMdl.Textfield, { type: 'password',
	                                        onChange: this.inputChange.bind(this, 'password'),
	                                        label: 'Password'
	                                    })
	                                )
	                            ),
	                            _react2.default.createElement(
	                                _reactMdl.Grid,
	                                null,
	                                _react2.default.createElement(
	                                    _reactMdl.Cell,
	                                    { offsetDesktop: 4, col: 7, offsetTablet: 3, tablet: 7, offsetPhone: 1, phone: 5 },
	                                    _react2.default.createElement(
	                                        _reactMdl.Button,
	                                        { raised: true, colored: true, type: 'submit' },
	                                        'SingIn'
	                                    ),
	                                    _react2.default.createElement(_reactFacebookLogin2.default, {
	                                        appId: '780090875680638',
	                                        autoLoad: true,
	                                        fields: 'name,email,picture',
	                                        callback: this.facebook,
	                                        cssClass: 'my-facebook-button-class',
	                                        icon: 'fa-facebook-square'
	                                    }),
	                                    _react2.default.createElement(
	                                        'div',
	                                        null,
	                                        _react2.default.createElement(
	                                            'span',
	                                            null,
	                                            'Ainda n\xE3o \xE9 usuario?'
	                                        ),
	                                        _react2.default.createElement(
	                                            _reactRouter.Link,
	                                            { to: '/register' },
	                                            'SingUp in Nuflow'
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Login;
	}(_react.Component);

	exports.default = Login;

	Login.contextTypes = {
	    router: _react2.default.PropTypes.object.isRequired
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("react-facebook-login");

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactMdl = __webpack_require__(9);

	var _axios = __webpack_require__(14);

	var _axios2 = _interopRequireDefault(_axios);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// import {Card, CardTitle, CardText, CardActions, CardMenu, IconButton, Button} from 'react-mdl';


	// import face from '../style/'
	var Register = function (_Component) {
	    _inherits(Register, _Component);

	    function Register(props) {
	        _classCallCheck(this, Register);

	        var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));

	        _this.state = {
	            email: '',
	            password: ''
	        };
	        _this.RegisterUser = _this.RegisterUser.bind(_this);
	        return _this;
	    }

	    _createClass(Register, [{
	        key: 'inputChange',
	        value: function inputChange(nome, e) {
	            this.setState(_defineProperty({}, nome, e.target.value));
	        }
	    }, {
	        key: 'RegisterUser',
	        value: function RegisterUser(e) {
	            var _this2 = this;

	            e.preventDefault();
	            // axios.defaults.baseURL = '';
	            var user = {
	                login: this.state.email,
	                password: this.state.password
	            };

	            _axios2.default.post('/user/singUp', user).then(function (result) {
	                localStorage.setItem('token', result.data.token);
	                _this2.context.router.push('/Feed');
	            }).catch(function () {
	                alert('Erro ao cadastrar usuario');
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                _reactMdl.Grid,
	                { className: 'section--center' },
	                _react2.default.createElement(
	                    _reactMdl.Cell,
	                    { offsetDesktop: 3, col: 6, offsetTablet: 1, tablet: 6, phone: 5 },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'mdl-shadow--2dp formLogin ' },
	                        _react2.default.createElement(
	                            'form',
	                            { onSubmit: this.RegisterUser, method: 'post', style: { paddingTop: "30px" } },
	                            _react2.default.createElement(
	                                _reactMdl.Grid,
	                                null,
	                                _react2.default.createElement(
	                                    _reactMdl.Cell,
	                                    { offsetDesktop: 3, col: 6, offsetTablet: 1, tablet: 7, phone: 6 },
	                                    _react2.default.createElement(_reactMdl.Textfield, { type: 'email',
	                                        onChange: this.inputChange.bind(this, 'email'),
	                                        label: 'exemplo@exemplo.com'

	                                    }),
	                                    _react2.default.createElement(_reactMdl.Textfield, { type: 'password',
	                                        onChange: this.inputChange.bind(this, 'password'),
	                                        label: 'Password'
	                                    })
	                                )
	                            ),
	                            _react2.default.createElement(
	                                _reactMdl.Grid,
	                                null,
	                                _react2.default.createElement(
	                                    _reactMdl.Cell,
	                                    { offsetDesktop: 4, col: 7, offsetTablet: 3, tablet: 7, offsetPhone: 1, phone: 5 },
	                                    _react2.default.createElement(
	                                        _reactMdl.Button,
	                                        { raised: true, colored: true, type: 'submit' },
	                                        'SingUp'
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Register;
	}(_react.Component);

	exports.default = Register;


	Register.contextTypes = {
	    router: _react2.default.PropTypes.object.isRequired
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _axios = __webpack_require__(14);

	var _axios2 = _interopRequireDefault(_axios);

	var _CardFeed = __webpack_require__(20);

	var _CardFeed2 = _interopRequireDefault(_CardFeed);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Feed = function (_Component) {
		_inherits(Feed, _Component);

		function Feed() {
			_classCallCheck(this, Feed);

			var _this = _possibleConstructorReturn(this, (Feed.__proto__ || Object.getPrototypeOf(Feed)).call(this));

			_this.state = {
				lista: []
			};
			_this.location = [];
			_this.keyword = '';
			_this.radius = 200;

			return _this;
		}

		_createClass(Feed, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				var _this2 = this;

				if (navigator.geolocation) {
					navigator.geolocation.getCurrentPosition(function (position) {
						_this2.location = [position.coords.latitude, position.coords.longitude];
						_this2.radius /= 6371;
						var find = {
							location: _this2.location,
							radius: _this2.radius,
							keyword: _this2.keyword
						};

						_axios2.default.post('/search/places', find).then(function (result) {
							// axios.post('http://localhost:3001/search/places', find).then((result)=>{
							_this2.setState({ lista: result.data });
							console.log(result.data);
						}).catch(function (err) {
							alert(err);
						});
					});
				} else {
					alert("Geolocation is not supported by this browser.");
				}
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(_CardFeed2.default, { places: this.state.lista });
			}
		}]);

		return Feed;
	}(_react.Component);

	exports.default = Feed;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactMdl = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CardFeed = function (_Component) {
		_inherits(CardFeed, _Component);

		function CardFeed() {
			_classCallCheck(this, CardFeed);

			return _possibleConstructorReturn(this, (CardFeed.__proto__ || Object.getPrototypeOf(CardFeed)).apply(this, arguments));
		}

		_createClass(CardFeed, [{
			key: 'Maps',
			value: function Maps(url, e) {
				e.preventDefault();
				window.open(url, '_blank');
			}
		}, {
			key: 'render',
			value: function render() {
				var _this2 = this;

				return _react2.default.createElement(
					'div',
					null,
					this.props.places.map(function (place) {
						return _react2.default.createElement(
							_reactMdl.Grid,
							{ className: 'section--center', key: place._id },
							_react2.default.createElement(
								_reactMdl.Cell,
								{ offsetDesktop: 3, col: 6, offsetTablet: 1, tablet: 6, phone: 5 },
								_react2.default.createElement(
									_reactMdl.Grid,
									{ shadow: 2, style: { padding: '0px', height: '200px' } },
									_react2.default.createElement(
										_reactMdl.Cell,
										{ col: 5, tablet: 3, phone: 2 },
										_react2.default.createElement('img', { alt: place.name, src: place.photos[0], style: { height: '100%', width: '100%' } })
									),
									_react2.default.createElement(
										_reactMdl.Cell,
										{ col: 7, tablet: 5, phone: 2 },
										_react2.default.createElement(
											_reactMdl.Grid,
											{ style: { padding: '0px', height: '200px' } },
											_react2.default.createElement(
												_reactMdl.Cell,
												{ col: 10, tablet: 5, phone: 3 },
												_react2.default.createElement(
													'p',
													{ style: { fontSize: '23px', fontWeight: '600', color: 'rgb(33,150,243)', textAlign: 'center' } },
													place.name
												),
												_react2.default.createElement(
													'p',
													null,
													'Rating:',
													place.rating
												),
												_react2.default.createElement(
													'div',
													null,
													_react2.default.createElement(
														_reactMdl.Tooltip,
														{ label: place.phone, position: 'right' },
														_react2.default.createElement(_reactMdl.Icon, { name: 'phone' })
													),
													_react2.default.createElement(_reactMdl.IconButton, { name: 'place', onClick: _this2.Maps.bind(_this2, place.mapsUrl) })
												)
											),
											_react2.default.createElement(
												_reactMdl.Cell,
												{ col: 2, tablet: 3, phone: 1 },
												_react2.default.createElement(_reactMdl.IconButton, { name: 'share' })
											)
										)
									)
								)
							)
						);
					})
				);
			}
		}]);

		return CardFeed;
	}(_react.Component);

	exports.default = CardFeed;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _pubsubJs = __webpack_require__(13);

	var _pubsubJs2 = _interopRequireDefault(_pubsubJs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Logout = function (_Component) {
	    _inherits(Logout, _Component);

	    function Logout() {
	        _classCallCheck(this, Logout);

	        return _possibleConstructorReturn(this, (Logout.__proto__ || Object.getPrototypeOf(Logout)).apply(this, arguments));
	    }

	    _createClass(Logout, [{
	        key: 'render',
	        value: function render() {
	            localStorage.removeItem('token');
	            this.context.router.push('/login');
	            _pubsubJs2.default.publish('logout');
	            return _react2.default.createElement(
	                'p',
	                null,
	                'Saindo'
	            );
	        }
	    }]);

	    return Logout;
	}(_react.Component);

	exports.default = Logout;


	Logout.contextTypes = {
	    router: _react2.default.PropTypes.object.isRequired
	};

/***/ }
/******/ ]);