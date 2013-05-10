if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/gallery-lazy-promise/gallery-lazy-promise.js']) {
   __coverage__['build/gallery-lazy-promise/gallery-lazy-promise.js'] = {"path":"build/gallery-lazy-promise/gallery-lazy-promise.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":32},"end":{"line":1,"column":51}}},"2":{"name":"(anonymous_2)","line":7,"loc":{"start":{"line":7,"column":1},"end":{"line":7,"column":14}}},"3":{"name":"(anonymous_3)","line":21,"loc":{"start":{"line":21,"column":17},"end":{"line":21,"column":31}}},"4":{"name":"(anonymous_4)","line":43,"loc":{"start":{"line":43,"column":19},"end":{"line":43,"column":31}}},"5":{"name":"(anonymous_5)","line":61,"loc":{"start":{"line":61,"column":14},"end":{"line":61,"column":43}}},"6":{"name":"(anonymous_6)","line":66,"loc":{"start":{"line":66,"column":39},"end":{"line":66,"column":66}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":87,"column":58}},"2":{"start":{"line":7,"column":0},"end":{"line":85,"column":6}},"3":{"start":{"line":8,"column":4},"end":{"line":8,"column":17}},"4":{"start":{"line":10,"column":4},"end":{"line":33,"column":10}},"5":{"start":{"line":22,"column":12},"end":{"line":24,"column":13}},"6":{"start":{"line":23,"column":16},"end":{"line":23,"column":38}},"7":{"start":{"line":32,"column":12},"end":{"line":32,"column":26}},"8":{"start":{"line":35,"column":4},"end":{"line":82,"column":6}},"9":{"start":{"line":44,"column":12},"end":{"line":44,"column":40}},"10":{"start":{"line":45,"column":12},"end":{"line":45,"column":61}},"11":{"start":{"line":62,"column":12},"end":{"line":63,"column":38}},"12":{"start":{"line":65,"column":12},"end":{"line":78,"column":13}},"13":{"start":{"line":66,"column":16},"end":{"line":77,"column":19}},"14":{"start":{"line":73,"column":20},"end":{"line":73,"column":39}},"15":{"start":{"line":75,"column":20},"end":{"line":75,"column":44}},"16":{"start":{"line":76,"column":20},"end":{"line":76,"column":34}},"17":{"start":{"line":80,"column":12},"end":{"line":80,"column":51}},"18":{"start":{"line":84,"column":4},"end":{"line":84,"column":27}}},"branchMap":{"1":{"line":22,"type":"if","locations":[{"start":{"line":22,"column":12},"end":{"line":22,"column":12}},{"start":{"line":22,"column":12},"end":{"line":22,"column":12}}]},"2":{"line":45,"type":"cond-expr","locations":[{"start":{"line":45,"column":29},"end":{"line":45,"column":48}},{"start":{"line":45,"column":51},"end":{"line":45,"column":60}}]},"3":{"line":65,"type":"if","locations":[{"start":{"line":65,"column":12},"end":{"line":65,"column":12}},{"start":{"line":65,"column":12},"end":{"line":65,"column":12}}]}},"code":["(function () { YUI.add('gallery-lazy-promise', function (Y, NAME) {","","/**","@module gallery-lazy-promise","@author Steven Olmsted","*/","(function (Y) {","    'use strict';","","    var _Promise = Y.Promise,","","        /**","        A LazyPromise acts just like a Promise with the exception that it won't be","        executed until its `then` method is called.","        @class LazyPromise","        @constructor","        @param {Function} fn A function where to insert the logic that resolves this","        promise.  Receives `fulfill` and `reject` functions as parameters.  This","        function is executed the first time the `then` method is called.","        */","        _Class = function (fn) {","            if (!(this instanceof _Class)) {","                return new _Class(fn);","            }","","            /**","            A temporary reference to fn.","            @property _fn","            @type Function","            @protected","            */","            this._fn = fn;","        };","","    _Class.prototype = {","        /**","        Returns the current status of the operation.  Possible results are","        'pending', 'fulfilled', and 'rejected'.","","        @method getStatus","        @return {String}","        **/","        getStatus: function () {","            var promise = this._promise;","            return promise ? promise.getStatus() : 'pending';","        },","        /**","        Schedule execution of a callback to either or both of `fulfill` and","        `reject` resolutions for this promise.  The callbacks are wrapped in a","        new promise and that promise is returned.  Callbacks are guaranteed to","        be called in a future turn of the event loop.","","        @method then","        @param {Function} [callback] function to execute if the lazy promise","        resolves successfully.","        @param {Function} [errback] function to execute if the lazy promise","        resolves unsuccessfully.","        @return {Promise} A promise wrapping the resolution of either the","        `resolve` or `reject` callback.","        **/","        then: function (callback, errback) {","            var me = this,","                promise = me._promise;","","            if (!promise) {","                promise = new _Promise(function (fulfill, reject) {","                    /**","                    An internal promise instance.","                    @property _promise","                    @type Promise","                    @protected","                    */","                    me._promise = this;","","                    me._fn(fulfill, reject);","                    delete me._fn;","                });","            }","","            return promise.then(callback, errback);","        }","    };","","    Y.LazyPromise = _Class;","}(Y));","","}, 'gallery-2013.05.02-22-59', {\"requires\": [\"promise\"]});","","}());"]};
}
var __cov_Y$W18175JteaRcFJxMyr3A = __coverage__['build/gallery-lazy-promise/gallery-lazy-promise.js'];
__cov_Y$W18175JteaRcFJxMyr3A.s['1']++;YUI.add('gallery-lazy-promise',function(Y,NAME){__cov_Y$W18175JteaRcFJxMyr3A.f['1']++;__cov_Y$W18175JteaRcFJxMyr3A.s['2']++;(function(Y){__cov_Y$W18175JteaRcFJxMyr3A.f['2']++;__cov_Y$W18175JteaRcFJxMyr3A.s['3']++;'use strict';__cov_Y$W18175JteaRcFJxMyr3A.s['4']++;var _Promise=Y.Promise,_Class=function(fn){__cov_Y$W18175JteaRcFJxMyr3A.f['3']++;__cov_Y$W18175JteaRcFJxMyr3A.s['5']++;if(!(this instanceof _Class)){__cov_Y$W18175JteaRcFJxMyr3A.b['1'][0]++;__cov_Y$W18175JteaRcFJxMyr3A.s['6']++;return new _Class(fn);}else{__cov_Y$W18175JteaRcFJxMyr3A.b['1'][1]++;}__cov_Y$W18175JteaRcFJxMyr3A.s['7']++;this._fn=fn;};__cov_Y$W18175JteaRcFJxMyr3A.s['8']++;_Class.prototype={getStatus:function(){__cov_Y$W18175JteaRcFJxMyr3A.f['4']++;__cov_Y$W18175JteaRcFJxMyr3A.s['9']++;var promise=this._promise;__cov_Y$W18175JteaRcFJxMyr3A.s['10']++;return promise?(__cov_Y$W18175JteaRcFJxMyr3A.b['2'][0]++,promise.getStatus()):(__cov_Y$W18175JteaRcFJxMyr3A.b['2'][1]++,'pending');},then:function(callback,errback){__cov_Y$W18175JteaRcFJxMyr3A.f['5']++;__cov_Y$W18175JteaRcFJxMyr3A.s['11']++;var me=this,promise=me._promise;__cov_Y$W18175JteaRcFJxMyr3A.s['12']++;if(!promise){__cov_Y$W18175JteaRcFJxMyr3A.b['3'][0]++;__cov_Y$W18175JteaRcFJxMyr3A.s['13']++;promise=new _Promise(function(fulfill,reject){__cov_Y$W18175JteaRcFJxMyr3A.f['6']++;__cov_Y$W18175JteaRcFJxMyr3A.s['14']++;me._promise=this;__cov_Y$W18175JteaRcFJxMyr3A.s['15']++;me._fn(fulfill,reject);__cov_Y$W18175JteaRcFJxMyr3A.s['16']++;delete me._fn;});}else{__cov_Y$W18175JteaRcFJxMyr3A.b['3'][1]++;}__cov_Y$W18175JteaRcFJxMyr3A.s['17']++;return promise.then(callback,errback);}};__cov_Y$W18175JteaRcFJxMyr3A.s['18']++;Y.LazyPromise=_Class;}(Y));},'gallery-2013.05.02-22-59',{'requires':['promise']});