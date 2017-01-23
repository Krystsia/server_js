var bbc =
webpackJsonp_name_([0,3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _actions = __webpack_require__(1);

	var _highlight_service = __webpack_require__(13);

	var _highlight_service2 = _interopRequireDefault(_highlight_service);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	console.log(a);

	(function (d) {
	    _actions.actions.init();
	    document.querySelector('.all-visited').addEventListener('click', function () {
	        new _highlight_service2.default().highlight();
	    });
	})(document);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.actions = undefined;

	var _getData_service = __webpack_require__(2);

	var _getData_service2 = _interopRequireDefault(_getData_service);

	var _app_dispatcher = __webpack_require__(6);

	var _app_dispatcher2 = _interopRequireDefault(_app_dispatcher);

	var _stores = __webpack_require__(9);

	var _article_component = __webpack_require__(10);

	var _article_component2 = _interopRequireDefault(_article_component);

	var _more_news_component = __webpack_require__(14);

	var _more_news_component2 = _interopRequireDefault(_more_news_component);

	var _constants = __webpack_require__(8);

	var _getRequest_service = __webpack_require__(15);

	var _getRequest_service2 = _interopRequireDefault(_getRequest_service);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var requestString = new _getRequest_service2.default();

	var Actions = function () {
	  function Actions() {
	    _classCallCheck(this, Actions);
	  }

	  Actions.prototype.init = function init() {
	    _stores.store.dispatcherIndex();
	    var articles = new _article_component2.default();
	    var moreNews = new _more_news_component2.default();
	    articles.onInit();
	    moreNews.onInit();
	    var mainRequest = new _getData_service2.default(_constants.passwordAccess, 'GET', requestString.next(), { Accept: 'xyz' });
	    mainRequest.getData().then(function (data) {
	      if (true) {
	        console.log(data);
	      }
	      _app_dispatcher2.default.handleInitAction(data);
	    });
	  };

	  Actions.prototype.add = function add() {
	    var mainRequest = new _getData_service2.default(_constants.passwordAccess, 'GET', requestString.next(), { Accept: 'xyz' });
	    mainRequest.getData().then(function (data) {
	      if (true) {
	        console.log(data);
	      }
	      _app_dispatcher2.default.handleAddAction(data);
	    });
	  };

	  Actions.prototype.destroy = function destroy() {};

	  return Actions;
	}();

		var actions = exports.actions = new Actions();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(fetch) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _customError = __webpack_require__(4);

	var _customError2 = _interopRequireDefault(_customError);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var wrapper = document.querySelector('.articles');

	var cashRequestsStorage = [];
	var dataStorrage = new Map();

	var Request = function () {
	    function Request(apiKey, method, url) {
	        _classCallCheck(this, Request);

	        this.apiKey = apiKey;
	        this.method = method;
	        this.url = url;

	        for (var _len = arguments.length, headers = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
	            headers[_key - 3] = arguments[_key];
	        }

	        this.headers = headers;
	    }

	    Request.prototype.makeRequest = function makeRequest() {
	        var _this = this;

	        return fetch(this.stringRequest, this.config).then(handleErrors).then(function (data) {
	            return data.json();
	        }).then(function (data) {
	            dataStorrage.set(_this.stringRequest, data);
	            return data;
	        }, function (error) {
	            _customError2.default.init(error, wrapper);
	            return {};
	        });
	    };

	    // implementation of proxy

	    Request.prototype.proxyGetData = function proxyGetData() {
	        var _this2 = this;

	        var request = cashRequestsStorage.filter(function (item) {
	            return _this2.stringRequest === item;
	        });
	        if (!request.length) {
	            cashRequestsStorage.push(this.stringRequest);
	            return this.makeRequest();
	        } else {
	            return Promise.resolve(dataStorrage.get(request[0]));
	        }
	    };

	    Request.prototype.getData = function getData() {
	        return this.proxyGetData();
	    };

	    _createClass(Request, [{
	        key: 'allheaders',
	        get: function get() {
	            var allHeaders = {};
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = this.headers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var header = _step.value;

	                    Object.assign(allHeaders, header);
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'stringRequest',
	        get: function get() {
	            return this.url + '&apiKey=' + this.apiKey;
	        }
	    }, {
	        key: 'config',
	        get: function get() {
	            return {
	                method: this.method,
	                headers: this.allheaders
	            };
	        }
	    }]);

	    return Request;
	}();

	exports.default = Request;


	function handleErrors(response) {
	    if (!response.ok) {
	        throw Error(response.statusText);
	    }
	    return response;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 3 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/*** IMPORTS FROM imports-loader ***/
	(function() {

	'use strict';

	(function (self) {
	  'use strict';

	  if (self.fetch) {
	    return;
	  }

	  var support = {
	    searchParams: 'URLSearchParams' in self,
	    iterable: 'Symbol' in self && 'iterator' in Symbol,
	    blob: 'FileReader' in self && 'Blob' in self && function () {
	      try {
	        new Blob();
	        return true;
	      } catch (e) {
	        return false;
	      }
	    }(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  };

	  if (support.arrayBuffer) {
	    var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];

	    var isDataView = function isDataView(obj) {
	      return obj && DataView.prototype.isPrototypeOf(obj);
	    };

	    var isArrayBufferView = ArrayBuffer.isView || function (obj) {
	      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
	    };
	  }

	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name);
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name');
	    }
	    return name.toLowerCase();
	  }

	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value);
	    }
	    return value;
	  }

	  // Build a destructive iterator for the value list
	  function iteratorFor(items) {
	    var iterator = {
	      next: function next() {
	        var value = items.shift();
	        return { done: value === undefined, value: value };
	      }
	    };

	    if (support.iterable) {
	      iterator[Symbol.iterator] = function () {
	        return iterator;
	      };
	    }

	    return iterator;
	  }

	  function Headers(headers) {
	    this.map = {};

	    if (headers instanceof Headers) {
	      headers.forEach(function (value, name) {
	        this.append(name, value);
	      }, this);
	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function (name) {
	        this.append(name, headers[name]);
	      }, this);
	    }
	  }

	  Headers.prototype.append = function (name, value) {
	    name = normalizeName(name);
	    value = normalizeValue(value);
	    var oldValue = this.map[name];
	    this.map[name] = oldValue ? oldValue + ',' + value : value;
	  };

	  Headers.prototype['delete'] = function (name) {
	    delete this.map[normalizeName(name)];
	  };

	  Headers.prototype.get = function (name) {
	    name = normalizeName(name);
	    return this.has(name) ? this.map[name] : null;
	  };

	  Headers.prototype.has = function (name) {
	    return this.map.hasOwnProperty(normalizeName(name));
	  };

	  Headers.prototype.set = function (name, value) {
	    this.map[normalizeName(name)] = normalizeValue(value);
	  };

	  Headers.prototype.forEach = function (callback, thisArg) {
	    for (var name in this.map) {
	      if (this.map.hasOwnProperty(name)) {
	        callback.call(thisArg, this.map[name], name, this);
	      }
	    }
	  };

	  Headers.prototype.keys = function () {
	    var items = [];
	    this.forEach(function (value, name) {
	      items.push(name);
	    });
	    return iteratorFor(items);
	  };

	  Headers.prototype.values = function () {
	    var items = [];
	    this.forEach(function (value) {
	      items.push(value);
	    });
	    return iteratorFor(items);
	  };

	  Headers.prototype.entries = function () {
	    var items = [];
	    this.forEach(function (value, name) {
	      items.push([name, value]);
	    });
	    return iteratorFor(items);
	  };

	  if (support.iterable) {
	    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
	  }

	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'));
	    }
	    body.bodyUsed = true;
	  }

	  function fileReaderReady(reader) {
	    return new Promise(function (resolve, reject) {
	      reader.onload = function () {
	        resolve(reader.result);
	      };
	      reader.onerror = function () {
	        reject(reader.error);
	      };
	    });
	  }

	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader();
	    var promise = fileReaderReady(reader);
	    reader.readAsArrayBuffer(blob);
	    return promise;
	  }

	  function readBlobAsText(blob) {
	    var reader = new FileReader();
	    var promise = fileReaderReady(reader);
	    reader.readAsText(blob);
	    return promise;
	  }

	  function readArrayBufferAsText(buf) {
	    var view = new Uint8Array(buf);
	    var chars = new Array(view.length);

	    for (var i = 0; i < view.length; i++) {
	      chars[i] = String.fromCharCode(view[i]);
	    }
	    return chars.join('');
	  }

	  function bufferClone(buf) {
	    if (buf.slice) {
	      return buf.slice(0);
	    } else {
	      var view = new Uint8Array(buf.byteLength);
	      view.set(new Uint8Array(buf));
	      return view.buffer;
	    }
	  }

	  function Body() {
	    this.bodyUsed = false;

	    this._initBody = function (body) {
	      this._bodyInit = body;
	      if (!body) {
	        this._bodyText = '';
	      } else if (typeof body === 'string') {
	        this._bodyText = body;
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body;
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body;
	      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	        this._bodyText = body.toString();
	      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
	        this._bodyArrayBuffer = bufferClone(body.buffer);
	        // IE 10-11 can't handle a DataView body.
	        this._bodyInit = new Blob([this._bodyArrayBuffer]);
	      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
	        this._bodyArrayBuffer = bufferClone(body);
	      } else {
	        throw new Error('unsupported BodyInit type');
	      }

	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8');
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type);
	        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
	        }
	      }
	    };

	    if (support.blob) {
	      this.blob = function () {
	        var rejected = consumed(this);
	        if (rejected) {
	          return rejected;
	        }

	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob);
	        } else if (this._bodyArrayBuffer) {
	          return Promise.resolve(new Blob([this._bodyArrayBuffer]));
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob');
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]));
	        }
	      };

	      this.arrayBuffer = function () {
	        if (this._bodyArrayBuffer) {
	          return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
	        } else {
	          return this.blob().then(readBlobAsArrayBuffer);
	        }
	      };
	    }

	    this.text = function () {
	      var rejected = consumed(this);
	      if (rejected) {
	        return rejected;
	      }

	      if (this._bodyBlob) {
	        return readBlobAsText(this._bodyBlob);
	      } else if (this._bodyArrayBuffer) {
	        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
	      } else if (this._bodyFormData) {
	        throw new Error('could not read FormData body as text');
	      } else {
	        return Promise.resolve(this._bodyText);
	      }
	    };

	    if (support.formData) {
	      this.formData = function () {
	        return this.text().then(decode);
	      };
	    }

	    this.json = function () {
	      return this.text().then(JSON.parse);
	    };

	    return this;
	  }

	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase();
	    return methods.indexOf(upcased) > -1 ? upcased : method;
	  }

	  function Request(input, options) {
	    options = options || {};
	    var body = options.body;

	    if (input instanceof Request) {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read');
	      }
	      this.url = input.url;
	      this.credentials = input.credentials;
	      if (!options.headers) {
	        this.headers = new Headers(input.headers);
	      }
	      this.method = input.method;
	      this.mode = input.mode;
	      if (!body && input._bodyInit != null) {
	        body = input._bodyInit;
	        input.bodyUsed = true;
	      }
	    } else {
	      this.url = String(input);
	    }

	    this.credentials = options.credentials || this.credentials || 'omit';
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers);
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET');
	    this.mode = options.mode || this.mode || null;
	    this.referrer = null;

	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests');
	    }
	    this._initBody(body);
	  }

	  Request.prototype.clone = function () {
	    return new Request(this, { body: this._bodyInit });
	  };

	  function decode(body) {
	    var form = new FormData();
	    body.trim().split('&').forEach(function (bytes) {
	      if (bytes) {
	        var split = bytes.split('=');
	        var name = split.shift().replace(/\+/g, ' ');
	        var value = split.join('=').replace(/\+/g, ' ');
	        form.append(decodeURIComponent(name), decodeURIComponent(value));
	      }
	    });
	    return form;
	  }

	  function parseHeaders(rawHeaders) {
	    var headers = new Headers();
	    rawHeaders.split(/\r?\n/).forEach(function (line) {
	      var parts = line.split(':');
	      var key = parts.shift().trim();
	      if (key) {
	        var value = parts.join(':').trim();
	        headers.append(key, value);
	      }
	    });
	    return headers;
	  }

	  Body.call(Request.prototype);

	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {};
	    }

	    this.type = 'default';
	    this.status = 'status' in options ? options.status : 200;
	    this.ok = this.status >= 200 && this.status < 300;
	    this.statusText = 'statusText' in options ? options.statusText : 'OK';
	    this.headers = new Headers(options.headers);
	    this.url = options.url || '';
	    this._initBody(bodyInit);
	  }

	  Body.call(Response.prototype);

	  Response.prototype.clone = function () {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    });
	  };

	  Response.error = function () {
	    var response = new Response(null, { status: 0, statusText: '' });
	    response.type = 'error';
	    return response;
	  };

	  var redirectStatuses = [301, 302, 303, 307, 308];

	  Response.redirect = function (url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code');
	    }

	    return new Response(null, { status: status, headers: { location: url } });
	  };

	  self.Headers = Headers;
	  self.Request = Request;
	  self.Response = Response;

	  self.fetch = function (input, init) {
	    return new Promise(function (resolve, reject) {
	      var request = new Request(input, init);
	      var xhr = new XMLHttpRequest();

	      xhr.onload = function () {
	        var options = {
	          status: xhr.status,
	          statusText: xhr.statusText,
	          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
	        };
	        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
	        var body = 'response' in xhr ? xhr.response : xhr.responseText;
	        resolve(new Response(body, options));
	      };

	      xhr.onerror = function () {
	        reject(new TypeError('Network request failed'));
	      };

	      xhr.ontimeout = function () {
	        reject(new TypeError('Network request failed'));
	      };

	      xhr.open(request.method, request.url, true);

	      if (request.credentials === 'include') {
	        xhr.withCredentials = true;
	      }

	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob';
	      }

	      request.headers.forEach(function (value, name) {
	        xhr.setRequestHeader(name, value);
	      });

	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
	    });
	  };
	  self.fetch.polyfill = true;
	})(typeof self !== 'undefined' ? self : undefined);

	/*** EXPORTS FROM exports-loader ***/
	module.exports = global.fetch;
	}.call(global));
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _CustomErrorView = __webpack_require__(5);

	var _CustomErrorView2 = _interopRequireDefault(_CustomErrorView);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CustomError = function () {
	    function CustomError(errorMessage) {
	        _classCallCheck(this, CustomError);

	        this.errorElement = new _CustomErrorView2.default(errorMessage).cunstructErrorTemplate();
	    }

	    CustomError.init = function init(errorMessage, element) {
	        var customError = new CustomError(errorMessage);
	        element.appendChild(customError.errorElement);
	    };

	    return CustomError;
	}();

		exports.default = CustomError;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CustomErrorView = function () {
	    function CustomErrorView(errorMessage) {
	        _classCallCheck(this, CustomErrorView);

	        this.errorMessage = errorMessage;
	    }

	    CustomErrorView.prototype.cunstructErrorTemplate = function cunstructErrorTemplate() {
	        var li = document.createElement('li');

	        li.classList.add('error-message');
	        li.innerHTML = '<p>' + this.errorMessage + '</p>';
	        return li;
	    };

	    return CustomErrorView;
	}();

		exports.default = CustomErrorView;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _dispatcher = __webpack_require__(7);

	var _dispatcher2 = _interopRequireDefault(_dispatcher);

	var _constants = __webpack_require__(8);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var AppDispatcher = function (_Dispatcher) {
	    _inherits(AppDispatcher, _Dispatcher);

	    function AppDispatcher() {
	        _classCallCheck(this, AppDispatcher);

	        return _possibleConstructorReturn(this, _Dispatcher.apply(this, arguments));
	    }

	    AppDispatcher.prototype.handleViewAction = function handleViewAction(action) {
	        this.dispatch({
	            actionType: _constants.constants.VIEW_ACTION,
	            action: action
	        });
	    };

	    AppDispatcher.prototype.handleInitAction = function handleInitAction(data) {
	        console.log(data);
	        this.dispatch({
	            actionType: _constants.constants.INIT_ACTION,
	            data: data
	        });
	    };

	    AppDispatcher.prototype.handleAddAction = function handleAddAction(data) {
	        console.log(data);
	        this.dispatch({
	            actionType: _constants.constants.ADD_ACTION,
	            data: data
	        });
	    };

	    return AppDispatcher;
	}(_dispatcher2.default);

		exports.default = new AppDispatcher();

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _callbacks = [];
	var _promises = [];

	//  implementation of observable

	var Dispatcher = function () {
	    function Dispatcher() {
	        _classCallCheck(this, Dispatcher);
	    }

	    Dispatcher.prototype.register = function register(callback) {
	        _callbacks.push(callback);
	        return _callbacks.length - 1;
	    };

	    Dispatcher.prototype.dispatch = function dispatch(payload) {
	        var resolves = [];
	        var rejects = [];

	        _promises = _callbacks.map(function (item, index) {
	            return new Promise(function (resolve, reject) {
	                resolves[index] = resolve;
	                rejects[index] = reject;
	            });
	        });

	        _callbacks.forEach(function (callback, index) {
	            Promise.resolve(callback(payload)).then(function () {

	                resolves[index](payload);
	            }, function () {
	                rejects[index](new Error('Unsuccessful callback'));
	            });
	        });
	        _promises = [];
	    };

	    return Dispatcher;
	}();

		exports.default = Dispatcher;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var constants = exports.constants = {
	  INIT_ACTION: 1,
	  VIEW_ACTION: 2,
	  ADD_ACTION: 3
	};

	var passwordAccess = exports.passwordAccess = 'f1fdf072013c4b1e8b92b027a92a8977';

	var sources = exports.sources = ['bbc-news', 'bbc-sport', 'ars-technica', 'bloomberg', 'business-insider', 'daily-mail', 'entertainment-weekly', 'entertainment-weekly'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.store = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _app_dispatcher = __webpack_require__(6);

	var _app_dispatcher2 = _interopRequireDefault(_app_dispatcher);

	var _getData_service = __webpack_require__(2);

	var _getData_service2 = _interopRequireDefault(_getData_service);

	var _constants = __webpack_require__(8);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var dataStore = {};
	var elementListener = [];

	var Store = function () {
	  function Store() {
	    _classCallCheck(this, Store);
	  }

	  Store.prototype.addElementListener = function addElementListener(element) {
	    elementListener.push(element);
	  };

	  Store.prototype.dispatcherIndex = function dispatcherIndex() {
	    _app_dispatcher2.default.register(function (payload) {
	      var actionType = payload.actionType;

	      switch (actionType) {
	        case _constants.constants.INIT_ACTION:
	          dataStore = payload.data;
	          var initEvent = new CustomEvent('init', {
	            bubbles: true
	          });

	          var _iteratorNormalCompletion = true;
	          var _didIteratorError = false;
	          var _iteratorError = undefined;

	          try {
	            for (var _iterator = elementListener[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	              var element = _step.value;


	              element.dispatchEvent(initEvent);
	            }
	          } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	              }
	            } finally {
	              if (_didIteratorError) {
	                throw _iteratorError;
	              }
	            }
	          }

	          ;
	          break;

	        case _constants.constants.ADD_ACTION:
	          dataStore = payload.data;
	          var addEvent = new CustomEvent('add', {
	            bubbles: true
	          });

	          var _iteratorNormalCompletion2 = true;
	          var _didIteratorError2 = false;
	          var _iteratorError2 = undefined;

	          try {
	            for (var _iterator2 = elementListener[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	              var _element = _step2.value;


	              _element.dispatchEvent(addEvent);
	            }
	          } catch (err) {
	            _didIteratorError2 = true;
	            _iteratorError2 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                _iterator2.return();
	              }
	            } finally {
	              if (_didIteratorError2) {
	                throw _iteratorError2;
	              }
	            }
	          }

	          ;
	          break;

	        default:
	          return true;
	      }
	    });
	  };

	  _createClass(Store, [{
	    key: 'allData',
	    get: function get() {
	      return dataStore;
	    }
	  }]);

	  return Store;
	}();

		var store = exports.store = new Store();

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _stores = __webpack_require__(9);

	var _getDate_service = __webpack_require__(11);

	var _getDate_service2 = _interopRequireDefault(_getDate_service);

	var _toggleDescriptionService = __webpack_require__(12);

	var _toggleDescriptionService2 = _interopRequireDefault(_toggleDescriptionService);

	var _highlight_service = __webpack_require__(13);

	var _highlight_service2 = _interopRequireDefault(_highlight_service);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Article = function () {
	  function Article() {
	    _classCallCheck(this, Article);
	  }

	  Article.prototype.onInit = function onInit() {
	    var element = document.querySelector('.articles');
	    _stores.store.addElementListener(element);
	    element.addEventListener('init', function () {
	      repaint(element);
	    });
	    element.addEventListener('add', function () {
	      add(element);
	    });
	    initialEvents('mouseover', _toggleDescriptionService2.default.showDescription);
	  };

	  return Article;
	}();

	exports.default = Article;


	function constructArticles() {
	  var data = _stores.store.allData;

	  var _data$articles = data.articles,
	      allArticles = _data$articles === undefined ? [] : _data$articles;


	  var fragment = document.createDocumentFragment();

	  allArticles = allArticles.map(function (article) {
	    var li = document.createElement('li');

	    li.innerHTML = '<a href="' + article.url + '" target="blank">\n                        <h2>' + article.title + '</h2>\n                        <p class="published-at">' + new _getDate_service2.default().getDate(article.publishedAt) + '</p>\n                        <img src="' + article.urlToImage + '" alt="image"/>\n                        <p class="descriptor"><span>' + article.description + '</span><p>\n                    </a>';
	    li.addEventListener('click', function () {
	      new _highlight_service2.default().add(li);
	    });

	    li.highlight = function () {
	      li.classList.add('highlight');
	    };

	    return li;
	  });

	  var tempArticleStore = [];

	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    var _loop = function _loop() {
	      var li = _step.value;

	      if (!tempArticleStore.some(function (item) {
	        return item === li.innerHTML;
	      })) {
	        tempArticleStore.push(li.innerHTML);
	        fragment.appendChild(li);
	      }
	    };

	    for (var _iterator = allArticles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      _loop();
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }

	  return fragment;
	}

	function repaint(element) {
	  element.innerHTML = '';
	  element.appendChild(constructArticles());
	}

	function add(element) {
	  element.appendChild(constructArticles());
	}

	function initialEvents(evenName, callback) {
	  var articles = document.querySelector('.articles');
	  articles.addEventListener(evenName, callback);
	}

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// implementation singleton

	var instance = null;

	var DateService = function () {
	    function DateService() {
	        _classCallCheck(this, DateService);

	        if (!instance) {
	            instance = this;
	        }
	        return instance;
	    }

	    DateService.prototype.getDate = function getDate(date) {
	        var myDate = new Date(date);
	        return myDate.getDate() + "." + (myDate.getMonth() + 1) + "." + myDate.getFullYear();
	    };

	    return DateService;
	}();

		exports.default = DateService;

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ToggleDescription = function () {
	    function ToggleDescription() {
	        _classCallCheck(this, ToggleDescription);
	    }

	    ToggleDescription.showDescription = function showDescription(e) {
	        var element = e.target;

	        var _element$getElementsB = element.getElementsByClassName('descriptor'),
	            _element$getElementsB2 = _slicedToArray(_element$getElementsB, 1),
	            descriptor = _element$getElementsB2[0];

	        if (descriptor) {
	            descriptor.style.cssText = 'top: 0;';
	            element.addEventListener('mouseleave', ToggleDescription.hideDescription);
	            e.preventDefault();
	        }

	        return;
	    };

	    ToggleDescription.hideDescription = function hideDescription(e) {
	        var _e$target$getElements = e.target.getElementsByClassName('descriptor'),
	            _e$target$getElements2 = _slicedToArray(_e$target$getElements, 1),
	            descriptor = _e$target$getElements2[0];

	        descriptor.style.cssText = 'top: 100%;';
	        e.preventDefault();
	    };

	    return ToggleDescription;
	}();

		exports.default = ToggleDescription;

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// implementation composite

	var instance = null;

	var Highlight = function () {
	  function Highlight() {
	    _classCallCheck(this, Highlight);

	    if (!instance) {
	      this.elements = [];
	      instance = this;
	    }
	    return instance;
	  }

	  Highlight.prototype.highlight = function highlight() {
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = this.elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var element = _step.value;

	        element.highlight();
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }
	  };

	  Highlight.prototype.add = function add(element) {
	    this.elements.push(element);
	  };

	  Highlight.prototype.remove = function remove(element) {
	    var i = this.elements.indexOf(element);
	    this.elements.splice(i, 1);
	  };

	  return Highlight;
	}();

		exports.default = Highlight;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _stores = __webpack_require__(9);

	var _actions = __webpack_require__(1);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MoreNews = function () {
	  function MoreNews() {
	    _classCallCheck(this, MoreNews);
	  }

	  MoreNews.prototype.onInit = function onInit() {
	    var element = document.querySelector('.add-more-container');
	    _stores.store.addElementListener(element);
	    element.addEventListener('init', function () {
	      repaint(element);
	    });
	  };

	  return MoreNews;
	}();

	exports.default = MoreNews;


	function construcAddMoreButton() {
	  var button = document.createElement('button');
	  button.classList.add('add-more');
	  button.innerText = 'Add More';
	  button.addEventListener('click', function () {
	    _actions.actions.add();
	  });
	  return button;
	}

	function repaint(element) {
	  element.appendChild(construcAddMoreButton());
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _constants = __webpack_require__(8);

	var _marked = [generateSource].map(regeneratorRuntime.mark);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var RequestString = function () {
	  function RequestString() {
	    _classCallCheck(this, RequestString);
	  }

	  RequestString.prototype.getNextSource = function getNextSource() {
	    return generatorSource.next().value;
	  };

	  RequestString.prototype.next = function next() {
	    return this.mainPart + this.getNextSource();
	  };

	  _createClass(RequestString, [{
	    key: 'mainPart',
	    get: function get() {
	      return 'https://newsapi.org/v1/articles?source=';
	    }
	  }]);

	  return RequestString;
	}();

	exports.default = RequestString;


	var generatorSource = generateSource(_constants.sources);
	function generateSource(sources) {
	  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, source;

	  return regeneratorRuntime.wrap(function generateSource$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          _iteratorNormalCompletion = true;
	          _didIteratorError = false;
	          _iteratorError = undefined;
	          _context.prev = 3;
	          _iterator = sources[Symbol.iterator]();

	        case 5:
	          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
	            _context.next = 12;
	            break;
	          }

	          source = _step.value;
	          _context.next = 9;
	          return source;

	        case 9:
	          _iteratorNormalCompletion = true;
	          _context.next = 5;
	          break;

	        case 12:
	          _context.next = 18;
	          break;

	        case 14:
	          _context.prev = 14;
	          _context.t0 = _context['catch'](3);
	          _didIteratorError = true;
	          _iteratorError = _context.t0;

	        case 18:
	          _context.prev = 18;
	          _context.prev = 19;

	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }

	        case 21:
	          _context.prev = 21;

	          if (!_didIteratorError) {
	            _context.next = 24;
	            break;
	          }

	          throw _iteratorError;

	        case 24:
	          return _context.finish(21);

	        case 25:
	          return _context.finish(18);

	        case 26:
	        case 'end':
	          return _context.stop();
	      }
	    }
	  }, _marked[0], this, [[3, 14, 18, 26], [19,, 21, 25]]);
		}

/***/ }
]);
//# sourceMappingURL=bbc.js.map