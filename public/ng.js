var ng =
webpackJsonp_name_([3,4],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(28);

	var _getData_service = __webpack_require__(2);

	var _getData_service2 = _interopRequireDefault(_getData_service);

	var _article = __webpack_require__(17);

	var _article2 = _interopRequireDefault(_article);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function (d) {
	    var mainRequest = new _getData_service2.default('f1fdf072013c4b1e8b92b027a92a8977', 'GET', 'https://newsapi.org/v1/articles?source=national-geographic', { Accept: 'xyz' });

	    d.addEventListener('DOMContentLoaded', function () {
	        mainRequest.getData().then(function (data) {

	            if (true) {
	                console.log(data);
	            }

	            _article2.default.init(data, '.articles');
	        });
	    });
	})(document);

/***/ },
/* 1 */,
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

	    if (typeof input === 'string') {
	      this.url = input;
	    } else {
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
	    rawHeaders.split('\r\n').forEach(function (line) {
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
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
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
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(18);

	var _article_model = __webpack_require__(22);

	var _article_model2 = _interopRequireDefault(_article_model);

	var _article_ctrl = __webpack_require__(24);

	var _article_ctrl2 = _interopRequireDefault(_article_ctrl);

	var _article_view = __webpack_require__(25);

	var _article_view2 = _interopRequireDefault(_article_view);

	var _toggleDescriptionService = __webpack_require__(12);

	var _toggleDescriptionService2 = _interopRequireDefault(_toggleDescriptionService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Article = function () {
	    function Article() {
	        _classCallCheck(this, Article);
	    }

	    Article.init = function init(data, element) {
	        var _data$articles = data.articles,
	            allArticles = _data$articles === undefined ? [] : _data$articles;

	        var fragment = document.createDocumentFragment();
	        allArticles = allArticles.map(function (article) {
	            var itemModel = new _article_model2.default(article);
	            var itemCtrl = new _article_ctrl2.default(itemModel);
	            return new _article_view2.default(itemModel, itemCtrl).constructTemplate();
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

	        document.querySelector(element).appendChild(fragment);
	        hideLoader();
	        initialEvents('mouseover', _toggleDescriptionService2.default.showDescription);
	    };

	    Article.add = function add(data, element) {
	        var _data$articles2 = data.articles,
	            newArticle = _data$articles2 === undefined ? [] : _data$articles2;


	        var itemModel = new _article_model2.default(newArticle);
	        var itemCtrl = new _article_ctrl2.default(itemModel);
	        var li = new _article_view2.default(itemModel, itemCtrl).constructTemplate();

	        document.querySelector(element).prepend(li);
	    };

	    return Article;
	}();

	exports.default = Article;


	function hideLoader() {
	    var backdrop = document.querySelector('.backdrop'),
	        loader = document.querySelector('.loader');

	    loader.style.opacity = 'none';
	    loader.style.display = 'none';
	    backdrop.style.opacity = 'none';
	    backdrop.style.display = 'none';
	}

	function initialEvents(evenName, callback) {
	    var articles = document.querySelector('.articles');
	    articles.addEventListener(evenName, callback);
	}

/***/ },
/* 18 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _model = __webpack_require__(23);

	var _model2 = _interopRequireDefault(_model);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var ArticleModel = function (_Model) {
	    _inherits(ArticleModel, _Model);

	    function ArticleModel(article) {
	        _classCallCheck(this, ArticleModel);

	        var _this = _possibleConstructorReturn(this, _Model.call(this, article));

	        _this.addField('title');
	        _this.addField('publishedAt');
	        _this.addField('description');
	        _this.addField('url');
	        _this.addField('source');
	        _this.addField('urlToImage');
	        _this.addField('abstract');
	        _this.addField('author');
	        return _this;
	    }

	    return ArticleModel;
	}(_model2.default);

		exports.default = ArticleModel;

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Model = function () {
	    function Model(data) {
	        _classCallCheck(this, Model);

	        this.data = data;
	    }

	    Model.prototype.addField = function addField(name) {
	        this[name] = this.data[name] || null;
	    };

	    return Model;
	}();

		exports.default = Model;

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ArticleCtrl = function () {
	    function ArticleCtrl(model) {
	        _classCallCheck(this, ArticleCtrl);

	        this.model = model;
	    }

	    ArticleCtrl.prototype.getDate = function getDate(date) {
	        var myDate = new Date(date);
	        return myDate.getDate() + '.' + (myDate.getMonth() + 1) + '.' + myDate.getFullYear();
	    };

	    ArticleCtrl.showDescription = function showDescription(e) {
	        var element = e.target;

	        var _element$getElementsB = element.getElementsByClassName('descriptor'),
	            _element$getElementsB2 = _slicedToArray(_element$getElementsB, 1),
	            descriptor = _element$getElementsB2[0];

	        if (descriptor) {
	            descriptor.style.cssText = 'top: 0;';
	            element.addEventListener('mouseleave', ArticleCtrl.hideDescription);
	            e.preventDefault();
	        }

	        return;
	    };

	    ArticleCtrl.hideDescription = function hideDescription(e) {
	        var _e$target$getElements = e.target.getElementsByClassName('descriptor'),
	            _e$target$getElements2 = _slicedToArray(_e$target$getElements, 1),
	            descriptor = _e$target$getElements2[0];

	        descriptor.style.cssText = 'top: 100%;';
	        e.preventDefault();
	    };

	    return ArticleCtrl;
	}();

		exports.default = ArticleCtrl;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getDate_service = __webpack_require__(11);

	var _getDate_service2 = _interopRequireDefault(_getDate_service);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ArticleView = function () {
	    function ArticleView(model, ctrl) {
	        _classCallCheck(this, ArticleView);

	        this.model = model;
	        this.ctrl = ctrl;
	    }

	    ArticleView.prototype.constructTemplate = function constructTemplate() {
	        var li = document.createElement('li');
	        li.innerHTML = '<a href="' + this.model.url + '">\n                            <h2>' + this.model.title + '</h2>\n                            <p class="published-at">' + new _getDate_service2.default().getDate(this.model.publishedAt) + '</p>\n                            <img src="' + this.model.urlToImage + '" alt="image"/>\n                            <p class="descriptor"><span>' + this.model.description + '</span><p>\n                        </a>';

	        return li;
	    };

	    return ArticleView;
	}();

		exports.default = ArticleView;

/***/ },
/* 26 */,
/* 27 */,
/* 28 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);
//# sourceMappingURL=ng.js.map