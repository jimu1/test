/* initGeetest 1.3.0
 * 鐢ㄤ簬鍔犺浇id瀵瑰簲鐨勯獙璇佺爜搴擄紝骞舵敮鎸佸畷鏈烘ā寮�
 * 鏆撮湶 initGeetest 杩涜楠岃瘉鐮佺殑鍒濆鍖�
 * 涓€鑸笉闇€瑕佺敤鎴疯繘琛屼慨鏀�
 */
(function (global, factory) {
  'use strict'
  if (typeof module === 'object' && typeof module.exports === 'object') {
    // CommonJS
    module.exports = global.document ?
      factory(global, true) :
      function (w) {
        if (!w.document) {
          throw new Error('Geetest requires a window with a document')
        }
        return factory(w)
      }
  } else {
    factory(global)
  }
})(typeof window !== 'undefined' ? window : this, function (window, noGlobal) {
  'use strict'
  if (typeof window === 'undefined') {
    throw new Error('Geetest requires browser environment')
  }
  var document = window.document
  var Math = window.Math
  var head = document.getElementsByTagName('head')[0]

  function _Object(obj) {
    this._obj = obj
  }

  _Object.prototype = {
    _each: function (process) {
      var _obj = this._obj
      for (var k in _obj) {
        if (_obj.hasOwnProperty(k)) {
          process(k, _obj[k])
        }
      }
      return this
    }
  }
  function Config(config) {
    var self = this
    new _Object(config)._each(function (key, value) {
      self[key] = value
    })
  }

  Config.prototype = {
    api_server: location.host,
    protocol: 'https://',
    typePath: '/gettype.php',
    fallback_config: {
      fullpage: {
        static_servers: ['captcha-static.pingan.com'],
        type: 'fullpage',
        fullpage: '/static/js/fullpage.pingan.0.0.js'
      }
    },
    _get_fallback_config: function () {
      var self = this
      if (isString(self.type)) {
        return self.fallback_config[self.type]
      } else {
        return self.fallback_config.fullpage
      }
    },
    _extend: function (obj) {
      var self = this
      new _Object(obj)._each(function (key, value) {
        self[key] = value
      })
    }
  }
  var isNumber = function (value) {
    return (typeof value === 'number')
  }
  var isString = function (value) {
    return (typeof value === 'string')
  }
  var isBoolean = function (value) {
    return (typeof value === 'boolean')
  }
  var isObject = function (value) {
    return (typeof value === 'object' && value !== null)
  }
  var isFunction = function (value) {
    return (typeof value === 'function')
  }
  var callbacks = {}
  var status = {}
  var random = function () {
    return parseInt(Math.random() * 10000) + (new Date()).valueOf()
  }
  var gt_load = function (url, cb) {
    var script = document.createElement('script')
    script.charset = 'UTF-8'
    script.async = true
    script.onerror = function () {
      cb(true)
    }
    var loaded = false
    script.onload = script.onreadystatechange = function () {
      if (!loaded &&
              (!script.readyState ||
              'loaded' === script.readyState ||
              'complete' === script.readyState)) {

        loaded = true
        setTimeout(function () {
          cb(false)
        }, 0)
      }
    }
    script.src = url
    head.appendChild(script)
  }
  var normalizeDomain = function (domain) {
    return domain.replace(/^https?:\/\/|\/$/g, '')
  }
  var normalizePath = function (path) {
    path = path.replace(/\/+/g, '/')
    if (path.indexOf('/') !== 0) {
      path = '/' + path
    }
    return path
  }
  var normalizeQuery = function (query) {
    if (!query) {
      return ''
    }
    var q = '?'
    new _Object(query)._each(function (key, value) {
      if (isString(value) || isNumber(value) || isBoolean(value)) {
        q = q + encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&'
      }
    })
    if (q === '?') {
      q = ''
    }
    return q.replace(/&$/, '')
  }
  var makeURL = function (protocol, domain, path, query) {
    domain = normalizeDomain(domain)

    var url = normalizePath(path) + normalizeQuery(query)
    if (domain) {
      url = protocol + domain + url
    }

    return url
  }
  var load = function (protocol, domains, path, query, cb) {
    var tryRequest = function (at) {

      var url = makeURL(protocol, domains[at], path, query)
      gt_load(url, function (err) {
        if (err) {
          if (at >= domains.length - 1) {
            cb(true)
          } else {
            tryRequest(at + 1)
          }
        } else {
          cb(false)
        }
      })
    }
    tryRequest(0)
  }
  var jsonp = function (domains, path, config, callback) {
    if (isObject(config.getLib)) {
      config._extend(config.getLib)
      callback(config)
      return
    }
    if (config.offline) {
      callback(config._get_fallback_config())
      return
    }
    var cb = 'geetest_' + random()
    window[cb] = function (data) {
      if (data.status === 'success') {
        callback(data.data)
      } else if (!data.status) {
        callback(data)
      } else {
        callback(config._get_fallback_config())
      }
      window[cb] = undefined
      try {
        delete window[cb]
      } catch (e) {
      }
    }
    load(config.protocol, domains, path, {
      gt: config.gt,
      callback: cb
    }, function (err) {
      if (err) {
        callback(config._get_fallback_config())
      }
    })
  }
  var throwError = function (errorType, config) {
    var errors = {
      networkError: '缃戠粶閿欒'
    }
    if (typeof config.onError === 'function') {
      config.onError(errors[errorType])
    } else {
      throw new Error(errors[errorType])
    }
  }
  var detect = function () {
    return !!window.Geetest
  }
  if (detect()) {
    status.slide = 'loaded'
  }
  var initGeetest = function (userConfig, callback) {
    var config = new Config(userConfig)
    if (userConfig.https) {
      config.protocol = 'https://'
    } else if (!userConfig.protocol) {
      config.protocol = window.location.protocol + '//'
    }

    if (isObject(userConfig.getType)) {
      config._extend(userConfig.getType)
    }
    if (isObject(config.getLib)) {
      config._extend(config.getLib)
    }

    jsonp([config.api_server || config.apiserver], config.typePath, config, function (newConfig) {
      var type = newConfig.type
      if (config.offline) {
        if (config[type]) {
          newConfig[type] = config[type]
          if (config.static_servers) {
            newConfig[type].static_servers =config.static_servers
          }
        }
      }
      if (config.static_servers) {
        newConfig.static_servers = config.static_servers
      }

      var type = newConfig.type
      var init = function () {
        config._extend(newConfig)
        callback(new window.Geetest(config))
      }
      callbacks[type] = callbacks[type] || []
      var s = status[type] || 'init'
      if (s === 'init') {
        status[type] = 'loading'
        callbacks[type].push(init)
        load(config.protocol, newConfig.static_servers || newConfig.domains, newConfig[type] || newConfig.path, null, function (err) {
          if (err) {
            status[type] = 'fail'
            throwError('networkError', config)
          } else {
            status[type] = 'loaded'
            var cbs = callbacks[type]
            for (var i = 0, len = cbs.length; i < len; i = i + 1) {
              var cb = cbs[i]
              if (isFunction(cb)) {
                cb()
              }
            }
            callbacks[type] = []
          }
        })
      } else if (s === 'loaded') {
        init()
      } else if (s === 'fail') {
        throwError('networkError', config)
      } else if (s === 'loading') {
        callbacks[type].push(init)
      }
    })

  }
  window.initGeetest = initGeetest
  window.gt_load = gt_load
  return initGeetest
})
