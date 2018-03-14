/* prebid.js v1.6.0-pre
Updated : 2018-03-13 */
!(function(d) {
    var s = window.pbjsChunk;
    window.pbjsChunk = function(e, t, n) {
        for (var r, i, o, a = 0, u = []; a < e.length; a++) i = e[a], c[i] && u.push(c[i][0]), c[i] = 0;
        for (r in t) Object.prototype.hasOwnProperty.call(t, r) && (d[r] = t[r]);
        for (s && s(e, t, n); u.length;) u.shift()();
        if (n)
            for (a = 0; a < n.length; a++) o = f(f.s = n[a]);
        return o
    };
    var n = {},
        c = {
            107: 0
        };

    function f(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return d[e].call(t.exports, t, t.exports, f), t.l = !0, t.exports
    }
    f.m = d, f.c = n, f.d = function(e, t, n) {
        f.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, f.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return f.d(t, "a", t), t
    }, f.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, f.p = "", f.oe = function(e) {
        throw console.error(e), e
    }, f(f.s = 371)
})({
    0: function(e, i, t) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
        i.parseSizesInput = function(e) {
            var t = [];
            if ("string" == typeof e) {
                var n = e.split(","),
                    r = /^(\d)+x(\d)+$/i;
                if (n)
                    for (var i in n) E(n, i) && n[i].match(r) && t.push(n[i])
            } else if ("object" === (void 0 === e ? "undefined" : u(e))) {
                var o = e.length;
                if (0 < o)
                    if (2 === o && "number" == typeof e[0] && "number" == typeof e[1]) t.push(b(e));
                    else
                        for (var a = 0; a < o; a++) t.push(b(e[a]))
            }
            return t
        }, i.parseGPTSingleSizeArray = b, i.uniques = T, i.flatten = A, i.getBidRequest = function(t, e) {
            return (0, a.default)(e.map((function(e) {
                return (0, a.default)(e.bids, (function(e) {
                    return e.bidId === t
                }))
            })), (function(e) {
                return e
            }))
        }, i.getKeys = I, i.getValue = _, i.getBidderCodes = function() {
            return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : pbjs.adUnits).map((function(e) {
                return e.bids.map((function(e) {
                    return e.bidder
                })).reduce(A, [])
            })).reduce(A).filter(T)
        }, i.isGptPubadsDefined = function() {
            if (window.googletag && i.isFn(window.googletag.pubads) && i.isFn(window.googletag.pubads().getSlots)) return !0
        }, i.getHighestCpm = function(e, t) {
            if (e.cpm === t.cpm) return e.timeToRespond > t.timeToRespond ? t : e;
            return e.cpm < t.cpm ? t : e
        }, i.shuffle = function(e) {
            var t = e.length;
            for (; 0 < t;) {
                var n = Math.floor(Math.random() * t),
                    r = e[--t];
                e[t] = e[n], e[n] = r
            }
            return e
        }, i.adUnitsFilter = function(e, t) {
            return (0, d.default)(e, t && t.adUnitCode)
        }, i.isSrcdocSupported = function(e) {
            return e.defaultView && e.defaultView.frameElement && "srcdoc" in e.defaultView.frameElement && !/firefox/i.test(navigator.userAgent)
        }, i.deepClone = function(e) {
            return (0, o.default)(e)
        }, i.inIframe = function() {
            try {
                return window.self !== window.top
            } catch (e) {
                return !0
            }
        }, i.isSafariBrowser = function() {
            return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
        }, i.replaceAuctionPrice = function(e, t) {
            if (!e) return;
            return e.replace(/\$\{AUCTION_PRICE\}/g, t)
        }, i.timestamp = function() {
            return (new Date).getTime()
        }, i.checkCookieSupport = function() {
            if (window.navigator.cookieEnabled || document.cookie.length) return !0
        }, i.cookiesAreEnabled = function() {
            if (i.checkCookieSupport()) return !0;
            return window.document.cookie = "prebid.cookieTest", -1 != window.document.cookie.indexOf("prebid.cookieTest")
        }, i.delayExecution = function(e, t) {
            if (t < 1) throw new Error("numRequiredCalls must be a positive number. Got " + t);
            var n = 0;
            return function() {
                ++n === t && e.apply(null, arguments)
            }
        }, i.groupBy = function(e, n) {
            return e.reduce((function(e, t) {
                return (e[t[n]] = e[t[n]] || []).push(t), e
            }), {})
        }, i.deepAccess = function(e, t) {
            t = String(t).split(".");
            for (var n = 0; n < t.length; n++)
                if (void 0 === (e = e[t[n]])) return;
            return e
        }, i.createContentToExecuteExtScriptInFriendlyFrame = function(e) {
            if (!e) return "";
            return '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><script>inDapIF=true;<\/script></head><body>\x3c!--PRE_SCRIPT_TAG_MACRO--\x3e<script src="' + e + '"><\/script>\x3c!--POST_SCRIPT_TAG_MACRO--\x3e</body></html>'
        }, i.getDefinedParams = function(n, e) {
            return e.filter((function(e) {
                return n[e]
            })).reduce((function(e, t) {
                return r(e, (function(e, t, n) {
                    t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n;
                    return e
                })({}, t, n[t]))
            }), {})
        }, i.isValidMediaTypes = function(e) {
            var t = ["banner", "native", "video"];
            if (!Object.keys(e).every((function(e) {
                    return (0, d.default)(t, e)
                }))) return !1;
            if (e.video && e.video.context) return (0, d.default)(["instream", "outstream"], e.video.context);
            return !0
        }, i.getBidderRequest = function(e, t, n) {
            return (0, a.default)(e, (function(e) {
                return 0 < e.bids.filter((function(e) {
                    return e.bidder === t && e.adUnitCode === n
                })).length
            })) || {
                start: null,
                auctionId: null
            }
        }, i.getOrigin = function() {
            return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")
        }, i.getDNT = function() {
            return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNotTrack || "yes" === navigator.doNotTrack
        }, i.isAdUnitCodeMatchingSlot = function(t) {
            return function(e) {
                return w(t, e)
            }
        }, i.isSlotMatchingAdUnitCode = function(t) {
            return function(e) {
                return w(e, t)
            }
        }, i.unsupportedBidderMessage = function(e, t) {
            var n = Object.keys(e.mediaTypes || {
                banner: "banner"
            }).join(", ");
            return "\n    " + e.code + " is a " + n + " ad unit\n    containing bidders that don't support " + n + ": " + t + ".\n    This bidder won't fetch demand.\n  "
        }, i.deletePropertyFromObject = function(e, t) {
            var n = r({}, e);
            return delete n[t], n
        }, i.removeRequestId = function(e) {
            return i.deletePropertyFromObject(e, "requestId")
        }, i.isInteger = function(e) {
            return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e
        };
        var n = t(2),
            o = s(t(61)),
            a = s(t(9)),
            d = s(t(5));

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var c = t(3),
            f = !1,
            l = Object.prototype.toString,
            g = null;
        try {
            g = console.info.bind(window.console)
        } catch (e) {}
        i.replaceTokenInString = function(i, e, o) {
            return this._each(e, (function(e, t) {
                e = void 0 === e ? "" : e;
                var n = o + t.toUpperCase() + o,
                    r = new RegExp(n, "g");
                i = i.replace(r, e)
            })), i
        };
        var p, v = (p = 0, function() {
            return ++p
        });

        function y() {
            return v() + Math.random().toString(16).substr(2)
        }

        function b(e) {
            if (i.isArray(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1])) return e[0] + "x" + e[1]
        }

        function m() {
            return window.console && window.console.log
        }
        i.getUniqueIdentifierStr = y, i.generateUUID = function e(t) {
            return t ? (t ^ 16 * Math.random() >> t / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e)
        }, i.getBidIdParameter = function(e, t) {
            return t && t[e] ? t[e] : ""
        }, i.tryAppendQueryString = function(e, t, n) {
            return n ? e + (t + "=") + encodeURIComponent(n) + "&" : e
        }, i.parseQueryStringParameters = function(e) {
            var t = "";
            for (var n in e) e.hasOwnProperty(n) && (t += n + "=" + encodeURIComponent(e[n]) + "&");
            return t
        }, i.transformAdServerTargetingObj = function(t) {
            return t && 0 < Object.getOwnPropertyNames(t).length ? I(t).map((function(e) {
                return e + "=" + encodeURIComponent(_(t, e))
            })).join("&") : ""
        }, i.getTopWindowLocation = function() {
            var t = void 0;
            try {
                window.top.location.toString(), t = window.top.location
            } catch (e) {
                t = window.location
            }
            return t
        }, i.getTopWindowUrl = function() {
            var t = void 0;
            try {
                t = this.getTopWindowLocation().href
            } catch (e) {
                t = ""
            }
            return t
        }, i.getTopWindowReferrer = function() {
            try {
                return window.top.document.referrer
            } catch (e) {
                return document.referrer
            }
        }, i.logWarn = function(e) {
            h() && console.warn && console.warn("WARNING: " + e)
        }, i.logInfo = function(e, t) {
            h() && m() && g && (t && 0 !== t.length || (t = ""), g("INFO: " + e + ("" === t ? "" : " : params : "), t))
        }, i.logMessage = function(e) {
            h() && m() && console.log("MESSAGE: " + e)
        }, i.hasConsoleLogger = m;
        var h = function() {
            if (!1 === n.config.getConfig("debug") && !1 === f) {
                var e = "TRUE" === S(c.DEBUG_MODE).toUpperCase();
                n.config.setConfig({
                    debug: e
                }), f = !0
            }
            return !!n.config.getConfig("debug")
        };
        i.debugTurnedOn = h, i.logError = function() {
            h() && window.console && window.console.error && console.error.apply(console, arguments)
        }, i.createInvisibleIframe = function() {
            var e = document.createElement("iframe");
            return e.id = y(), e.height = 0, e.width = 0, e.border = "0px", e.hspace = "0", e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border = "0", e.scrolling = "no", e.frameBorder = "0", e.src = "about:blank", e.style.display = "none", e
        };
        var S = function(e) {
            var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(window.location.search);
            return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
        };
        i.getParameterByName = S, i.hasValidBidRequest = function(e, n, t) {
            var r = !1;

            function i(e, t) {
                t === n[o] && (r = !0)
            }
            for (var o = 0; o < n.length; o++)
                if (r = !1, this._each(e, i), !r) return this.logError("Params are missing for bid request. One of these required paramaters are missing: " + n, t), !1;
            return !0
        }, i.addEventHandler = function(e, t, n) {
            e.addEventListener ? e.addEventListener(t, n, !0) : e.attachEvent && e.attachEvent("on" + t, n)
        }, i.isA = function(e, t) {
            return l.call(e) === "[object " + t + "]"
        }, i.isFn = function(e) {
            return this.isA(e, "Function")
        }, i.isStr = function(e) {
            return this.isA(e, "String")
        }, i.isArray = function(e) {
            return this.isA(e, "Array")
        }, i.isNumber = function(e) {
            return this.isA(e, "Number")
        }, i.isEmpty = function(e) {
            if (!e) return !0;
            if (i.isArray(e) || i.isStr(e)) return !(0 < e.length);
            for (var t in e)
                if (hasOwnProperty.call(e, t)) return !1;
            return !0
        }, i.isEmptyStr = function(e) {
            return this.isStr(e) && (!e || 0 === e.length)
        }, i._each = function(e, t) {
            if (!this.isEmpty(e)) {
                if (this.isFn(e.forEach)) return e.forEach(t, this);
                var n = 0,
                    r = e.length;
                if (0 < r)
                    for (; n < r; n++) t(e[n], n, e);
                else
                    for (n in e) hasOwnProperty.call(e, n) && t.call(this, e[n], n)
            }
        }, i.contains = function(e, t) {
            if (this.isEmpty(e)) return !1;
            if (this.isFn(e.indexOf)) return -1 !== e.indexOf(t);
            for (var n = e.length; n--;)
                if (e[n] === t) return !0;
            return !1
        }, i.indexOf = (function() {
            if (Array.prototype.indexOf) return Array.prototype.indexOf
        })(), i._map = function(n, r) {
            if (this.isEmpty(n)) return [];
            if (this.isFn(n.map)) return n.map(r);
            var i = [];
            return this._each(n, (function(e, t) {
                i.push(r(e, t, n))
            })), i
        };
        var E = function(e, t) {
            return e.hasOwnProperty ? e.hasOwnProperty(t) : void 0 !== e[t] && e.constructor.prototype[t] !== e[t]
        };

        function T(e, t, n) {
            return n.indexOf(e) === t
        }

        function A(e, t) {
            return e.concat(t)
        }

        function I(e) {
            return Object.keys(e)
        }

        function _(e, t) {
            return e[t]
        }
        i.insertElement = function(e, t, n) {
            t = t || document;
            var r = void 0;
            r = n ? t.getElementsByTagName(n) : t.getElementsByTagName("head");
            try {
                (r = r.length ? r : t.getElementsByTagName("body")).length && (r = r[0]).insertBefore(e, r.firstChild)
            } catch (e) {}
        }, i.triggerPixel = function(e) {
            (new Image).src = e
        }, i.insertUserSyncIframe = function(e) {
            var t = this.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin"),
                n = document.createElement("div");
            n.innerHTML = t;
            var r = n.firstChild;
            i.insertElement(r)
        }, i.createTrackPixelHtml = function(e) {
            if (!e) return "";
            var t = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
            return t += '<img src="' + encodeURI(e) + '"></div>'
        }, i.createTrackPixelIframeHtml = function(e) {
            var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
            return e ? (t && (e = encodeURI(e)), n && (n = 'sandbox="' + n + '"'), "<iframe " + n + ' id="' + i.getUniqueIdentifierStr() + '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0p;width:0p;display:none;"\n      scrolling="no"\n      src="' + e + '">\n    </iframe>') : ""
        }, i.getIframeDocument = function(e) {
            if (e) {
                var t = void 0;
                try {
                    t = e.contentWindow ? e.contentWindow.document : e.contentDocument.document ? e.contentDocument.document : e.contentDocument
                } catch (e) {
                    this.logError("Cannot get iframe document", e)
                }
                return t
            }
        }, i.getValueString = function(e, t, n) {
            return null == t ? n : this.isStr(t) ? t : this.isNumber(t) ? t.toString() : void this.logWarn("Unsuported type for param: " + e + " required type: String")
        };
        var w = function(e, t) {
            return e.getAdUnitPath() === t || e.getSlotElementId() === t
        }
    },
    1: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return (function(e, t) {
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            !r && u.return && u.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                })(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            v = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            };
        t.registerBidder = function(t) {
            var n = Array.isArray(t.supportedMediaTypes) ? {
                supportedMediaTypes: t.supportedMediaTypes
            } : void 0;

            function r(e) {
                var t = l(e);
                i.default.registerBidAdapter(t, e.code, n)
            }
            r(t), Array.isArray(t.aliases) && t.aliases.forEach((function(e) {
                r(v({}, t, {
                    code: e
                }))
            }))
        }, t.newBidder = l, t.isValid = S;
        var r = s(n(24)),
            i = s(n(6)),
            y = n(2),
            b = s(n(15)),
            m = n(3),
            o = n(13),
            a = n(14),
            u = n(63),
            d = s(n(5)),
            h = n(0);

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var f = ["requestId", "cpm", "ttl", "creativeId", "netRevenue", "currency"];

        function l(f) {
            return v(new r.default(f.code), {
                getSpec: function() {
                    return Object.freeze(f)
                },
                registerSyncs: l,
                callBids: function(o, a, r, n) {
                    if (Array.isArray(o.bids)) {
                        var u = {},
                            d = [],
                            e = o.bids.filter(g);
                        if (0 !== e.length) {
                            var s = {};
                            e.forEach((function(e) {
                                (s[e.bidId] = e).adUnitCode || (e.adUnitCode = e.placementCode)
                            }));
                            var t = f.buildRequests(e, o);
                            if (t && 0 !== t.length) {
                                Array.isArray(t) || (t = [t]);
                                var c = (0, h.delayExecution)(i, t.length);
                                t.forEach((function(i) {
                                    switch (i.method) {
                                        case "GET":
                                            n("" + i.url + (function(e) {
                                                if (e) return "?" + ("object" === (void 0 === e ? "undefined" : p(e)) ? (0, h.parseQueryStringParameters)(e) : e);
                                                return ""
                                            })(i.data), {
                                                success: e,
                                                error: t
                                            }, void 0, v({
                                                method: "GET",
                                                withCredentials: !0
                                            }, i.options));
                                            break;
                                        case "POST":
                                            n(i.url, {
                                                success: e,
                                                error: t
                                            }, "string" == typeof i.data ? i.data : JSON.stringify(i.data), v({
                                                method: "POST",
                                                contentType: "text/plain",
                                                withCredentials: !0
                                            }, i.options));
                                            break;
                                        default:
                                            (0, h.logWarn)("Skipping invalid request from " + f.code + ". Request type " + i.type + " must be GET or POST"), c()
                                    }

                                    function e(e, t) {
                                        try {
                                            e = JSON.parse(e)
                                        } catch (e) {}
                                        e = {
                                            body: e,
                                            headers: {
                                                get: t.getResponseHeader.bind(t)
                                            }
                                        }, d.push(e);
                                        var n = void 0;
                                        try {
                                            n = f.interpretResponse(e, i)
                                        } catch (e) {
                                            return (0, h.logError)("Bidder " + f.code + " failed to interpret the server's response. Continuing without bids", null, e), void c()
                                        }

                                        function r(e) {
                                            var t, n, r = s[e.requestId];
                                            if (r) {
                                                var i = v(b.default.createBid(m.STATUS.GOOD, r), e);
                                                t = r.adUnitCode, n = i, u[t] = !0, S(t, n, [o]) && a(t, n)
                                            } else(0, h.logWarn)("Bidder " + f.code + " made bid for unknown request ID: " + e.requestId + ". Ignoring.")
                                        }
                                        n && (n.forEach ? n.forEach(r) : r(n)), c(n)
                                    }

                                    function t(e) {
                                        (0, h.logError)("Server call for " + f.code + " failed: " + e + ". Continuing without bids."), c()
                                    }
                                }))
                            } else i()
                        } else i()
                    }

                    function i(e) {
                        var t = (e ? e[0] ? e : [e] : []).some((function(e) {
                                return "video" === e.mediaType
                            })),
                            n = y.config.getConfig("cache.url");
                        t && n || r(), l(d)
                    }
                }
            });

            function l(e) {
                if (f.getUserSyncs) {
                    var t = f.getUserSyncs({
                        iframeEnabled: y.config.getConfig("userSync.iframeEnabled"),
                        pixelEnabled: y.config.getConfig("userSync.pixelEnabled")
                    }, e);
                    t && (Array.isArray(t) || (t = [t]), t.forEach((function(e) {
                        o.userSync.registerSync(e.type, f.code, e.url)
                    })))
                }
            }

            function g(e) {
                return !!f.isBidRequestValid(e) || ((0, h.logWarn)("Invalid bid sent to bidder " + f.code + ": " + JSON.stringify(e)), !1)
            }
        }

        function S(e, t, n) {
            function r(e) {
                return "Invalid bid from " + t.bidderCode + ". Ignoring bid: " + e
            }
            return e ? t ? (i = Object.keys(t), f.every((function(e) {
                return (0, d.default)(i, e)
            })) ? "native" !== t.mediaType || (0, a.nativeBidIsValid)(t, n) ? "video" !== t.mediaType || (0, u.isValidVideoBid)(t, n) ? !("banner" === t.mediaType && !(function(e, t, n) {
                if ((t.width || 0 === t.width) && (t.height || 0 === t.height)) return !0;
                var r = (0, h.getBidderRequest)(n, t.bidderCode, e),
                    i = r && r.bids && r.bids[0] && r.bids[0].sizes,
                    o = (0, h.parseSizesInput)(i);
                if (1 === o.length) {
                    var a = o[0].split("x"),
                        u = c(a, 2),
                        d = u[0],
                        s = u[1];
                    return t.width = d, t.height = s, !0
                }
                return !1
            })(e, t, n)) || ((0, h.logError)(r("Banner bids require a width and height")), !1) : ((0, h.logError)(r("Video bid does not have required vastUrl or renderer property")), !1) : ((0, h.logError)(r("Native bid missing some required properties.")), !1) : ((0, h.logError)(r("Bidder " + t.bidderCode + " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params.")), !1)) : ((0, h.logWarn)("Some adapter tried to add an undefined bid for " + e + "."), !1) : ((0, h.logWarn)("No adUnitCode was supplied to addBidResponse."), !1);
            var i
        }
    },
    10: function(e, t, n) {
        "use strict";
        var u, r, i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            d = n(0),
            o = n(3),
            a = Array.prototype.slice,
            s = Array.prototype.push,
            c = d._map(o.EVENTS, (function(e) {
                return e
            })),
            f = o.EVENT_ID_PATHS,
            l = [];
        e.exports = (u = {}, (r = {}).on = function(e, t, n) {
            if (i = e, d.contains(c, i)) {
                var r = u[e] || {
                    que: []
                };
                n ? (r[n] = r[n] || {
                    que: []
                }, r[n].que.push(t)) : r.que.push(t), u[e] = r
            } else d.logError("Wrong event name : " + e + " Valid event names :" + c);
            var i
        }, r.emit = function(e) {
            !(function(e, t) {
                d.logMessage("Emitting event for: " + e);
                var n = t[0] || {},
                    r = n[f[e]],
                    i = u[e] || {
                        que: []
                    },
                    o = d._map(i, (function(e, t) {
                        return t
                    })),
                    a = [];
                l.push({
                    eventType: e,
                    args: n,
                    id: r
                }), r && d.contains(o, r) && s.apply(a, i[r].que), s.apply(a, i.que), d._each(a, (function(e) {
                    if (e) try {
                        e.apply(null, t)
                    } catch (e) {
                        d.logError("Error executing handler:", "events.js", e)
                    }
                }))
            })(e, a.call(arguments, 1))
        }, r.off = function(e, n, r) {
            var i = u[e];
            d.isEmpty(i) || d.isEmpty(i.que) && d.isEmpty(i[r]) || r && (d.isEmpty(i[r]) || d.isEmpty(i[r].que)) || (r ? d._each(i[r].que, (function(e) {
                var t = i[r].que;
                e === n && t.splice(d.indexOf.call(t, e), 1)
            })) : d._each(i.que, (function(e) {
                var t = i.que;
                e === n && t.splice(d.indexOf.call(t, e), 1)
            })), u[e] = i)
        }, r.get = function() {
            return u
        }, r.getEvents = function() {
            var n = [];
            return d._each(l, (function(e) {
                var t = i({}, e);
                n.push(t)
            })), n
        }, r)
    },
    11: function(e, t, n) {
        "use strict";
        var r = n(0),
            i = {};

        function o(e, t) {
            var n = document.createElement("script");
            n.type = "text/javascript", n.async = !0, t && "function" == typeof t && (n.readyState ? n.onreadystatechange = function() {
                "loaded" !== n.readyState && "complete" !== n.readyState || (n.onreadystatechange = null, t())
            } : n.onload = function() {
                t()
            }), n.src = e;
            var r = document.getElementsByTagName("head");
            (r = r.length ? r : document.getElementsByTagName("body")).length && (r = r[0]).insertBefore(n, r.firstChild)
        }
        t.loadScript = function(t, e, n) {
            t ? n ? i[t] ? e && "function" == typeof e && (i[t].loaded ? e() : i[t].callbacks.push(e)) : (i[t] = {
                loaded: !1,
                callbacks: []
            }, e && "function" == typeof e && i[t].callbacks.push(e), o(t, (function() {
                i[t].loaded = !0;
                try {
                    for (var e = 0; e < i[t].callbacks.length; e++) i[t].callbacks[e]()
                } catch (e) {
                    r.logError("Error executing callback", "adloader.js:loadScript", e)
                }
            }))) : o(t, e) : r.logError("Error attempting to request empty URL", "adloader.js:loadScript")
        }
    },
    12: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return (function(e, t) {
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        !r && u.return && u.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            })(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        };

        function r(e) {
            return e ? e.replace(/^\?/, "").split("&").reduce((function(e, t) {
                var n = t.split("="),
                    r = a(n, 2),
                    i = r[0],
                    o = r[1];
                return /\[\]$/.test(i) ? (e[i = i.replace("[]", "")] = e[i] || [], e[i].push(o)) : e[i] = o || "", e
            }), {}) : {}
        }

        function i(e) {
            return Object.keys(e).map((function(t) {
                return Array.isArray(e[t]) ? e[t].map((function(e) {
                    return t + "[]=" + e
                })).join("&") : t + "=" + e[t]
            })).join("&")
        }
        t.parseQS = r, t.formatQS = i, t.parse = function(e, t) {
            var n = document.createElement("a");
            t && "noDecodeWholeURL" in t && t.noDecodeWholeURL ? n.href = e : n.href = decodeURIComponent(e);
            return {
                protocol: (n.protocol || "").replace(/:$/, ""),
                hostname: n.hostname,
                port: +n.port,
                pathname: n.pathname.replace(/^(?!\/)/, "/"),
                search: r(n.search || ""),
                hash: (n.hash || "").replace(/^#/, ""),
                host: n.host || window.location.host
            }
        }, t.format = function(e) {
            return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":" + e.port : "")) + (e.pathname || "") + (e.search ? "?" + i(e.search || "") : "") + (e.hash ? "#" + e.hash : "")
        }
    },
    13: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.userSync = void 0;
        var i = function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return (function(e, t) {
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            !r && u.return && u.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                })(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            d = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            };
        t.newUserSync = r;
        var s = (function(e) {
                {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }
            })(n(0)),
            c = n(2);

        function r(e) {
            var t = {},
                o = {
                    image: [],
                    iframe: []
                },
                n = !1,
                a = {},
                u = e.config;

            function r() {
                if (u.syncEnabled && e.browserSupportsCookies && !n) {
                    try {
                        !(function() {
                            if (!u.pixelEnabled) return;
                            s.shuffle(o.image).forEach((function(e) {
                                var t = i(e, 2),
                                    n = t[0],
                                    r = t[1];
                                s.logMessage("Invoking image pixel user sync for bidder: " + n), s.triggerPixel(r)
                            }))
                        })(), (function() {
                            if (!u.iframeEnabled) return;
                            s.shuffle(o.iframe).forEach((function(e) {
                                var t = i(e, 2),
                                    n = t[0],
                                    r = t[1];
                                s.logMessage("Invoking iframe user sync for bidder: " + n), s.insertUserSyncIframe(r)
                            }))
                        })()
                    } catch (e) {
                        return s.logError("Error firing user syncs", e)
                    }
                    o = {
                        image: [],
                        iframe: []
                    }, n = !0
                }
            }
            return c.config.getConfig("userSync", (function(e) {
                u = d(u, e.userSync)
            })), t.registerSync = function(e, t, n) {
                return u.syncEnabled && s.isArray(o[e]) ? t ? Number(a[t]) >= u.syncsPerBidder ? s.logWarn('Number of user syncs exceeded for "{$bidder}"') : u.enabledBidders && u.enabledBidders.length && u.enabledBidders.indexOf(t) < 0 ? s.logWarn('Bidder "' + t + '" not supported') : (o[e].push([t, n]), (r = a)[i = t] ? r[i] += 1 : r[i] = 1, void(a = r)) : s.logWarn("Bidder is required for registering sync") : s.logWarn('User sync type "' + e + '" not supported');
                var r, i
            }, t.syncUsers = function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                if (e) return setTimeout(r, Number(e));
                r()
            }, t.triggerUserSyncs = function() {
                u.enableOverride && t.syncUsers()
            }, t
        }
        c.config.setDefaults({
            userSync: {
                syncEnabled: !0,
                pixelEnabled: !0,
                syncsPerBidder: 5,
                syncDelay: 3e3
            }
        });
        var o = !s.isSafariBrowser() && s.cookiesAreEnabled();
        t.userSync = r({
            config: c.config.getConfig("userSync"),
            browserSupportsCookies: o
        })
    },
    14: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.hasNonNativeBidder = t.nativeBidder = t.nativeAdUnit = t.NATIVE_TARGETING_KEYS = t.NATIVE_KEYS = t.nativeAdapters = void 0;
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        t.processNativeAdUnitParams = function(e) {
            if (e && e.type && (function(e) {
                    if (!e || !(0, u.default)(Object.keys(c), e)) return (0, a.logError)(e + " nativeParam is not supported"), !1;
                    return !0
                })(e.type)) return c[e.type];
            return e
        }, t.nativeBidIsValid = function(t, e) {
            var n = (0, a.getBidRequest)(t.adId, e);
            if (!n) return !1;
            if (!(0, a.deepAccess)(t, "native.clickUrl")) return !1;
            if ((0, a.deepAccess)(t, "native.image") && (!(0, a.deepAccess)(t, "native.image.height") || !(0, a.deepAccess)(t, "native.image.width"))) return !1;
            if ((0, a.deepAccess)(t, "native.icon") && (!(0, a.deepAccess)(t, "native.icon.height") || !(0, a.deepAccess)(t, "native.icon.width"))) return !1;
            var r = n.nativeParams;
            if (!r) return !0;
            var i = Object.keys(r).filter((function(e) {
                    return r[e].required
                })),
                o = Object.keys(t.native).filter((function(e) {
                    return t.native[e]
                }));
            return i.every((function(e) {
                return (0, u.default)(o, e)
            }))
        }, t.fireNativeTrackers = function(e, t) {
            var n = void 0;
            n = "click" === e.action ? t.native && t.native.clickTrackers : t.native && t.native.impressionTrackers;
            (n || []).forEach(a.triggerPixel)
        }, t.getNativeTargeting = function(r) {
            var i = {};
            return Object.keys(r.native).forEach((function(e) {
                var t = s[e],
                    n = r.native[e];
                "object" === (void 0 === n ? "undefined" : o(n)) && n.url && (n = n.url), t && (i[t] = n)
            })), i
        };
        var r, a = n(0),
            i = n(5),
            u = (r = i) && r.__esModule ? r : {
                default: r
            };
        var d = t.nativeAdapters = [],
            s = t.NATIVE_KEYS = {
                title: "hb_native_title",
                body: "hb_native_body",
                sponsoredBy: "hb_native_brand",
                image: "hb_native_image",
                icon: "hb_native_icon",
                clickUrl: "hb_native_linkurl",
                cta: "hb_native_cta"
            },
            c = (t.NATIVE_TARGETING_KEYS = Object.keys(s).map((function(e) {
                return s[e]
            })), {
                image: {
                    image: {
                        required: !0
                    },
                    title: {
                        required: !0
                    },
                    sponsoredBy: {
                        required: !0
                    },
                    clickUrl: {
                        required: !0
                    },
                    body: {
                        required: !1
                    },
                    icon: {
                        required: !1
                    }
                }
            });
        t.nativeAdUnit = function(e) {
            var t = "native" === e.mediaType,
                n = (0, a.deepAccess)(e, "mediaTypes.native");
            return t || n
        };
        var f = t.nativeBidder = function(e) {
            return (0, u.default)(d, e.bidder)
        };
        t.hasNonNativeBidder = function(e) {
            return e.bids.filter((function(e) {
                return !f(e)
            })).length
        }
    },
    143: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.addBidResponse = t.AUCTION_COMPLETED = t.AUCTION_IN_PROGRESS = t.AUCTION_STARTED = void 0;
        var c = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        t.newAuction = function(e) {
            var t = e.adUnits,
                n = e.adUnitCodes,
                r = e.callback,
                i = e.cbTimeout,
                o = e.labels,
                a = t,
                u = o,
                f = n,
                l = [],
                g = [],
                d = void 0,
                p = _.generateUUID(),
                v = void 0,
                y = r,
                b = void 0,
                s = i,
                c = void 0;

            function m(e, t) {
                if (t && clearTimeout(b), null != y) {
                    if (e) {
                        _.logMessage("Auction " + p + " timedOut");
                        var n = (u = g, d = (a = l).filter((function(e) {
                            return !e.doneCbCallCount
                        })).map((function(e) {
                            return e.bidderCode
                        })).filter(S.uniques), s = u.map((function(e) {
                            return e.bidder
                        })).filter(S.uniques), c = d.filter((function(e) {
                            return !(0, A.default)(s, e)
                        })), a.map((function(e) {
                            return (e.bids || []).filter((function(e) {
                                return (0, A.default)(c, e.bidder)
                            }))
                        })).reduce(S.flatten, []).map((function(e) {
                            return {
                                bidId: e.bidId,
                                bidder: e.bidder,
                                adUnitCode: e.adUnitCode,
                                auctionId: e.auctionId
                            }
                        })));
                        n.length && C.emit(O.EVENTS.BID_TIMEOUT, n)
                    }
                    C.emit(O.EVENTS.AUCTION_END, {
                        auctionId: p
                    });
                    try {
                        v = N;
                        var r = f,
                            i = [g.filter(S.adUnitsFilter.bind(this, r)).reduce(j, {})];
                        y.apply(pbjs, i)
                    } catch (e) {
                        _.logError("Error executing bidsBackHandler", null, e)
                    } finally {
                        var o = E.config.getConfig("userSync") || {};
                        o.enableOverride || I(o.syncDelay)
                    }
                    y = null
                }
                var a, u, d, s, c
            }

            function h() {
                l.every((function(e) {
                    return 1 <= e.doneCbCallCount
                })) && (_.logInfo("Bids Received for Auction with id: " + p, g), v = N, m(!1, !0))
            }
            return {
                addBidReceived: function(e) {
                    g = g.concat(e)
                },
                executeCallback: m,
                callBids: function() {
                    e = m.bind(null, !0), t = setTimeout(e, s), b = t, v = B;
                    var e, t;
                    var n = {
                        timestamp: d = Date.now(),
                        auctionId: p,
                        timeout: s
                    };
                    C.emit(O.EVENTS.AUCTION_INIT, n);
                    var r = w.makeBidRequests(a, d, p, s, u);
                    _.logInfo("Bids Requested for Auction with id: " + p, r), r.forEach((function(e) {
                        var t;
                        t = e, l = l.concat(t)
                    })), v = U, w.callBids(a, r, R.bind(this), function(e) {
                        var t = e;
                        return (0, S.delayExecution)((function() {
                            var e = (0, T.default)(l, (function(e) {
                                return t === e.bidderRequestId
                            }));
                            e.doneCbCallCount += 1, h()
                        }), 1)
                    }.bind(this))
                },
                bidsBackAll: h,
                setWinningBid: function(e) {
                    c = e
                },
                getWinningBid: function() {
                    return c
                },
                getTimeout: function() {
                    return s
                },
                getAuctionId: function() {
                    return p
                },
                getAuctionStatus: function() {
                    return v
                },
                getAdUnits: function() {
                    return a
                },
                getAdUnitCodes: function() {
                    return f
                },
                getBidRequests: function() {
                    return l
                },
                getBidsReceived: function() {
                    return g
                }
            }
        }, t.getStandardBidderSettings = u, t.getKeyValueTargetingPairs = y, t.adjustBids = s;
        var S = n(0),
            f = n(27),
            i = n(14),
            l = n(144),
            g = n(20),
            E = n(2),
            r = n(13),
            o = n(19),
            T = a(n(9)),
            A = a(n(5));

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var I = r.userSync.syncUsers,
            _ = n(0),
            w = n(6),
            C = n(10),
            O = n(3),
            B = t.AUCTION_STARTED = "started",
            U = t.AUCTION_IN_PROGRESS = "inProgress",
            N = t.AUCTION_COMPLETED = "completed";

        function p(e, t) {
            t.timeToRespond > e.getTimeout() + E.config.getConfig("timeoutBuffer") && e.executeCallback(!0)
        }

        function v(e, t) {
            C.emit(O.EVENTS.BID_RESPONSE, t), e.addBidReceived(t), p(e, t)
        }
        C.on(O.EVENTS.BID_ADJUSTMENT, (function(e) {
            s(e)
        }));
        var R = t.addBidResponse = (0, o.createHook)("asyncSeries", (function(e, t) {
            var n, r, i, o, a = this.getBidRequests(),
                u = this.getAuctionId(),
                d = (0, S.getBidderRequest)(a, t.bidderCode, e),
                s = (function(e) {
                    var t = e.adUnitCode,
                        n = e.bid,
                        r = e.bidRequest,
                        i = e.auctionId,
                        o = r.start,
                        a = c({}, n, {
                            auctionId: i,
                            responseTimestamp: (0, S.timestamp)(),
                            requestTimestamp: o,
                            cpm: parseFloat(n.cpm) || 0,
                            bidder: n.bidderCode,
                            adUnitCode: t
                        });
                    a.timeToRespond = a.responseTimestamp - a.requestTimestamp, C.emit(O.EVENTS.BID_ADJUSTMENT, a);
                    var u = r.bids && r.bids[0] && r.bids[0].renderer;
                    u && u.url && (a.renderer = g.Renderer.install({
                        url: u.url
                    }), a.renderer.setRender(u.render));
                    var d, s = (0, f.getPriceBucketString)(a.cpm, E.config.getConfig("customPriceBucket"), E.config.getConfig("currency.granularityMultiplier"));
                    a.pbLg = s.low, a.pbMg = s.med, a.pbHg = s.high, a.pbAg = s.auto, a.pbDg = s.dense, a.pbCg = s.custom, a.bidderCode && (0 < a.cpm || a.dealId) && (d = y(a.bidderCode, a));
                    return a.adserverTargeting = c(a.adserverTargeting || {}, d), a
                })({
                    adUnitCode: e,
                    bid: t,
                    bidRequest: d,
                    auctionId: u
                });
            "video" === s.mediaType ? (n = this, r = s, i = d, o = !0, E.config.getConfig("cache.url") && (r.videoCacheKey ? r.vastUrl || (_.logError("videoCacheKey specified but not required vastUrl for video bid"), o = !1) : (o = !1, (0, l.store)([r], (function(e, t) {
                e ? (_.logWarn("Failed to save to the video cache: " + e + ". Video bid must be discarded."), p(n, r)) : (r.videoCacheKey = t[0].uuid, r.vastUrl || (r.vastUrl = (0, l.getCacheUrl)(r.videoCacheKey)), i.doneCbCallCount += 1, v(n, r), n.bidsBackAll())
            })))), o && v(n, r)) : v(this, s)
        }), "addBidResponse");

        function u() {
            var t = E.config.getConfig("priceGranularity"),
                e = pbjs.bidderSettings;
            return e[O.JSON_MAPPING.BD_SETTING_STANDARD] || (e[O.JSON_MAPPING.BD_SETTING_STANDARD] = {}), e[O.JSON_MAPPING.BD_SETTING_STANDARD][O.JSON_MAPPING.ADSERVER_TARGETING] || (e[O.JSON_MAPPING.BD_SETTING_STANDARD][O.JSON_MAPPING.ADSERVER_TARGETING] = [{
                key: "hb_bidder",
                val: function(e) {
                    return e.bidderCode
                }
            }, {
                key: "hb_adid",
                val: function(e) {
                    return e.adId
                }
            }, {
                key: "hb_pb",
                val: function(e) {
                    return t === O.GRANULARITY_OPTIONS.AUTO ? e.pbAg : t === O.GRANULARITY_OPTIONS.DENSE ? e.pbDg : t === O.GRANULARITY_OPTIONS.LOW ? e.pbLg : t === O.GRANULARITY_OPTIONS.MEDIUM ? e.pbMg : t === O.GRANULARITY_OPTIONS.HIGH ? e.pbHg : t === O.GRANULARITY_OPTIONS.CUSTOM ? e.pbCg : void 0
                }
            }, {
                key: "hb_size",
                val: function(e) {
                    return e.size
                }
            }, {
                key: "hb_deal",
                val: function(e) {
                    return e.dealId
                }
            }, {
                key: "hb_source",
                val: function(e) {
                    return e.source
                }
            }, {
                key: "hb_format",
                val: function(e) {
                    return e.mediaType
                }
            }]), e[O.JSON_MAPPING.BD_SETTING_STANDARD]
        }

        function y(e, t) {
            if (!t) return {};
            var n = {},
                r = pbjs.bidderSettings;
            r && (d(n, u(), t), e && r[e] && r[e][O.JSON_MAPPING.ADSERVER_TARGETING] && (d(n, r[e], t), t.sendStandardTargeting = r[e].sendStandardTargeting));
            return t.native && (n = c({}, n, (0, i.getNativeTargeting)(t))), n
        }

        function d(r, i, o) {
            var e = i[O.JSON_MAPPING.ADSERVER_TARGETING];
            return o.size = o.getSize(), _._each(e, (function(e) {
                var t = e.key,
                    n = e.val;
                if (r[t] && _.logWarn("The key: " + t + " is getting ovewritten"), _.isFn(n)) try {
                    n = n(o)
                } catch (e) {
                    _.logError("bidmanager", "ERROR", e)
                }(void 0 === i.suppressEmptyKeys || !0 !== i.suppressEmptyKeys) && "hb_deal" !== t || !_.isEmptyStr(n) && null != n ? r[t] = n : _.logInfo("suppressing empty key '" + t + "' from adserver targeting")
            })), r
        }

        function s(e) {
            var t = e.bidderCode,
                n = e.cpm,
                r = void 0;
            if (pbjs.bidderSettings && (t && pbjs.bidderSettings[t] && "function" == typeof pbjs.bidderSettings[t].bidCpmAdjustment ? r = pbjs.bidderSettings[t].bidCpmAdjustment : pbjs.bidderSettings[O.JSON_MAPPING.BD_SETTING_STANDARD] && "function" == typeof pbjs.bidderSettings[O.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment && (r = pbjs.bidderSettings[O.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment), r)) try {
                n = r(e.cpm, c({}, e))
            } catch (e) {
                _.logError("Error during bid adjustment", "bidmanager.js", e)
            }
            0 <= n && (e.cpm = n)
        }

        function j(e, t) {
            return e[t.adUnitCode] || (e[t.adUnitCode] = {
                bids: []
            }), e[t.adUnitCode].bids.push(t), e
        }
    },
    144: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.store = function(e, t) {
            var n = {
                puts: e.map(a)
            };
            (0, i.ajax)(o.config.getConfig("cache.url"), (r = t, {
                success: function(e) {
                    var t = void 0;
                    try {
                        t = JSON.parse(e).responses
                    } catch (e) {
                        return void r(e, [])
                    }
                    t ? r(null, t) : r(new Error("The cache server didn't respond with a responses property."), [])
                },
                error: function(e, t) {
                    r(new Error("Error storing video ad in the cache: " + e + ": " + JSON.stringify(t)), [])
                }
            }), JSON.stringify(n), {
                contentType: "text/plain",
                withCredentials: !0
            });
            var r
        }, t.getCacheUrl = function(e) {
            return o.config.getConfig("cache.url") + "?uuid=" + e
        };
        var i = n(7),
            o = n(2);

        function a(e) {
            return {
                type: "xml",
                value: e.vastXml ? e.vastXml : '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA[' + e.vastUrl + "]]></VASTAdTagURI>\n        <Impression></Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>"
            }
        }
    },
    15: function(e, t, n) {
        "use strict";
        var o = n(0);
        t.createBid = function(e, t) {
            return new function(e, t) {
                var n = t && t.bidId || o.getUniqueIdentifierStr(),
                    r = t && t.src || "client",
                    i = e || 0;
                this.bidderCode = t && t.bidder || "", this.width = 0, this.height = 0, this.statusMessage = (function() {
                    switch (i) {
                        case 0:
                            return "Pending";
                        case 1:
                            return "Bid available";
                        case 2:
                            return "Bid returned empty or error response";
                        case 3:
                            return "Bid timed out"
                    }
                })(), this.adId = n, this.mediaType = "banner", this.source = r, this.getStatusCode = function() {
                    return i
                }, this.getSize = function() {
                    return this.width + "x" + this.height
                }
            }(e, t)
        }
    },
    16: function(e, t) {
        var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    },
    17: function(e, t) {
        var n = e.exports = {
            version: "2.5.3"
        };
        "number" == typeof __e && (__e = n)
    },
    18: function(e, t) {
        e.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    },
    19: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
        t.createHook = function(r, i, e) {
            var u = [{
                    fn: i,
                    priority: 0
                }],
                o = {
                    sync: function() {
                        for (var t = this, e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                        u.forEach((function(e) {
                            e.fn.apply(t, n)
                        }))
                    },
                    asyncSeries: function() {
                        for (var o = this, e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        var a = 0;
                        return u[a].fn.apply(this, t.concat((function e() {
                            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                            var i = u[++a];
                            if ("object" === (void 0 === i ? "undefined" : d(i)) && "function" == typeof i.fn) return i.fn.apply(o, n.concat(e))
                        })))
                    }
                };
            if (!o[r]) throw "invalid hook type";
            var t = {
                addHook: function(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 10;
                    "function" == typeof e && (u.push({
                        fn: e,
                        priority: t
                    }), u.sort((function(e, t) {
                        return t.priority - e.priority
                    })))
                },
                removeHook: function(t) {
                    u = u.filter((function(e) {
                        return e.fn === i || e.fn !== t
                    }))
                }
            };
            "string" == typeof e && (s[e] = t);
            return a((function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if (1 === u.length && u[0].fn === i) return i.apply(this, t);
                return o[r].apply(this, t)
            }), t)
        };
        var s = t.hooks = {}
    },
    2: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.config = t.RANDOM = void 0;
        var d = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
        t.newConfig = u;
        var r = n(27),
            i = o(n(9)),
            c = o(n(5)),
            f = n(19);

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var l = n(0),
            g = !1,
            p = 3e3,
            v = window.location.origin,
            y = 100,
            b = !0,
            m = 200,
            a = t.RANDOM = "random",
            h = {};
        h[a] = !0, h.fixed = !0;
        var S = a,
            E = {
                LOW: "low",
                MEDIUM: "medium",
                HIGH: "high",
                AUTO: "auto",
                DENSE: "dense",
                CUSTOM: "custom"
            },
            T = "*";

        function u() {
            var o = [],
                a = void 0,
                u = void 0;

            function e() {
                function t(t) {
                    return (0, i.default)(Object.keys(E), (function(e) {
                        return t === E[e]
                    }))
                }
                a = {}, u = {
                    _debug: g,
                    get debug() {
                        return this._debug
                    },
                    set debug(e) {
                        this._debug = e
                    },
                    _bidderTimeout: p,
                    get bidderTimeout() {
                        return this._bidderTimeout
                    },
                    set bidderTimeout(e) {
                        this._bidderTimeout = e
                    },
                    _publisherDomain: v,
                    get publisherDomain() {
                        return this._publisherDomain
                    },
                    set publisherDomain(e) {
                        this._publisherDomain = e
                    },
                    _cookieSyncDelay: y,
                    get cookieSyncDelay() {
                        return pbjs.cookieSyncDelay || this._cookieSyncDelay
                    },
                    set cookieSyncDelay(e) {
                        this._cookieSyncDelay = e
                    },
                    _priceGranularity: E.MEDIUM,
                    set priceGranularity(e) {
                        (function(e) {
                            if (!e) return l.logError("Prebid Error: no value passed to `setPriceGranularity()`"), !1;
                            if ("string" == typeof e) t(e) || l.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");
                            else if ("object" === (void 0 === e ? "undefined" : s(e)) && !(0, r.isValidPriceConfig)(e)) return l.logError("Invalid custom price value passed to `setPriceGranularity()`"), !1;
                            return !0
                        })(e) && ("string" == typeof e ? this._priceGranularity = t(e) ? e : E.MEDIUM : "object" === (void 0 === e ? "undefined" : s(e)) && (this._customPriceBucket = e, this._priceGranularity = E.CUSTOM, l.logMessage("Using custom price granularity")))
                    },
                    get priceGranularity() {
                        return this._priceGranularity
                    },
                    _customPriceBucket: {},
                    get customPriceBucket() {
                        return this._customPriceBucket
                    },
                    _sendAllBids: b,
                    get enableSendAllBids() {
                        return this._sendAllBids
                    },
                    set enableSendAllBids(e) {
                        this._sendAllBids = e
                    },
                    _bidderSequence: S,
                    get bidderSequence() {
                        return this._bidderSequence
                    },
                    set bidderSequence(e) {
                        h[e] ? this._bidderSequence = e : l.logWarn("Invalid order: " + e + ". Bidder Sequence was not set.")
                    },
                    _timoutBuffer: m,
                    get timeoutBuffer() {
                        return this._timoutBuffer
                    },
                    set timeoutBuffer(e) {
                        this._timoutBuffer = e
                    }
                }
            }
            var t = (0, f.createHook)("asyncSeries", (function(n) {
                if ("object" === (void 0 === n ? "undefined" : s(n))) {
                    var i, t, e = Object.keys(n),
                        r = {};
                    e.forEach((function(e) {
                        var t = n[e];
                        "object" === s(a[e]) && "object" === (void 0 === t ? "undefined" : s(t)) && (t = d({}, a[e], t)), r[e] = u[e] = t
                    })), i = r, t = Object.keys(i), o.filter((function(e) {
                        return (0, c.default)(t, e.topic)
                    })).forEach((function(e) {
                        var t, n, r;
                        e.callback((t = {}, n = e.topic, r = i[e.topic], n in t ? Object.defineProperty(t, n, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = r, t))
                    })), o.filter((function(e) {
                        return e.topic === T
                    })).forEach((function(e) {
                        return e.callback(i)
                    }))
                } else l.logError("setConfig options must be an object")
            }));
            return e(), {
                getConfig: function() {
                    if (arguments.length <= 1 && "function" != typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
                        var e = arguments.length <= 0 ? void 0 : arguments[0];
                        return e ? l.deepAccess(u, e) : u
                    }
                    return function(e, t) {
                        var n = t;
                        if ("string" != typeof e && (n = e, e = T), "function" == typeof n) return o.push({
                                topic: e,
                                callback: n
                            }),
                            function() {
                                o.splice(o.indexOf(t), 1)
                            };
                        l.logError("listener must be a function")
                    }.apply(void 0, arguments)
                },
                setConfig: t,
                setDefaults: function(e) {
                    "object" === (void 0 === a ? "undefined" : s(a)) ? (d(a, e), d(u, e)) : l.logError("defaults must be an object")
                },
                resetConfig: e
            }
        }
        t.config = u()
    },
    20: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Renderer = r;
        var u = n(11),
            d = (function(e) {
                {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }
            })(n(0));

        function r(e) {
            var t = this,
                n = e.url,
                r = e.config,
                i = e.id,
                o = e.callback,
                a = e.loaded;
            this.url = n, this.config = r, this.handlers = {}, this.id = i, this.loaded = a, this.cmd = [], this.push = function(e) {
                "function" == typeof e ? t.loaded ? e.call() : t.cmd.push(e) : d.logError("Commands given to Renderer.push must be wrapped in a function")
            }, this.callback = o || function() {
                t.loaded = !0, t.process()
            }, (0, u.loadScript)(n, this.callback, !0)
        }
        r.install = function(e) {
            return new r({
                url: e.url,
                config: e.config,
                id: e.id,
                callback: e.callback,
                loaded: e.loaded
            })
        }, r.prototype.getConfig = function() {
            return this.config
        }, r.prototype.setRender = function(e) {
            this.render = e
        }, r.prototype.setEventHandlers = function(e) {
            this.handlers = e
        }, r.prototype.handleVideoEvent = function(e) {
            var t = e.id,
                n = e.eventName;
            "function" == typeof this.handlers[n] && this.handlers[n](), d.logMessage("Prebid Renderer event for id " + t + " type " + n)
        }, r.prototype.process = function() {
            for (; 0 < this.cmd.length;) try {
                this.cmd.shift().call()
            } catch (e) {
                d.logError("Error processing Renderer command: ", e)
            }
        }
    },
    21: function(e, t, n) {
        var v = n(16),
            y = n(17),
            b = n(28),
            m = n(43),
            h = "prototype",
            S = function(e, t, n) {
                var r, i, o, a = e & S.F,
                    u = e & S.G,
                    d = e & S.S,
                    s = e & S.P,
                    c = e & S.B,
                    f = e & S.W,
                    l = u ? y : y[t] || (y[t] = {}),
                    g = l[h],
                    p = u ? v : d ? v[t] : (v[t] || {})[h];
                for (r in u && (n = t), n)(i = !a && p && void 0 !== p[r]) && r in l || (o = i ? p[r] : n[r], l[r] = u && "function" != typeof p[r] ? n[r] : c && i ? b(o, v) : f && p[r] == o ? (function(r) {
                    var e = function(e, t, n) {
                        if (this instanceof r) {
                            switch (arguments.length) {
                                case 0:
                                    return new r;
                                case 1:
                                    return new r(e);
                                case 2:
                                    return new r(e, t)
                            }
                            return new r(e, t, n)
                        }
                        return r.apply(this, arguments)
                    };
                    return e[h] = r[h], e
                })(o) : s && "function" == typeof o ? b(Function.call, o) : o, s && ((l.virtual || (l.virtual = {}))[r] = o, e & S.R && g && !g[r] && m(g, r, o)))
            };
        S.F = 1, S.G = 2, S.S = 4, S.P = 8, S.B = 16, S.W = 32, S.U = 64, S.R = 128, e.exports = S
    },
    22: function(e, t, n) {
        e.exports = !n(29)((function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        }))
    },
    23: function(e, t) {
        e.exports = function() {}
    },
    24: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            var t = e;
            return {
                callBids: function() {},
                setBidderCode: function(e) {
                    t = e
                },
                getBidderCode: function() {
                    return t
                }
            }
        }
    },
    25: function(e, t, n) {
        n(94), e.exports = n(17).Array.findIndex
    },
    26: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.auctionManager = void 0, t.newAuctionManager = d;
        var r, i = n(0),
            s = n(143),
            o = n(9),
            a = (r = o) && r.__esModule ? r : {
                default: r
            };
        var u = n(3);

        function d() {
            var d = [],
                e = {};
            return e.addWinningBid = function(t) {
                var e = (0, a.default)(d, (function(e) {
                    return e.getAuctionId() === t.auctionId
                }));
                e ? e.setWinningBid(t) : utils.logWarn("Auction not found when adding winning bid")
            }, e.getAllWinningBids = function() {
                return d.map((function(e) {
                    return e.getWinningBid()
                })).reduce(i.flatten, [])
            }, e.getBidsRequested = function() {
                return d.map((function(e) {
                    return e.getBidRequests()
                })).reduce(i.flatten, [])
            }, e.getBidsReceived = function() {
                return d.map((function(e) {
                    if (e.getAuctionStatus() === s.AUCTION_COMPLETED) return e.getBidsReceived()
                })).reduce(i.flatten, []).filter((function(e) {
                    return e
                }))
            }, e.getAdUnits = function() {
                return d.map((function(e) {
                    return e.getAdUnits()
                })).reduce(i.flatten, [])
            }, e.getAdUnitCodes = function() {
                return d.map((function(e) {
                    return e.getAdUnitCodes()
                })).reduce(i.flatten, []).filter(i.uniques)
            }, e.createAuction = function(e) {
                var t, n = e.adUnits,
                    r = e.adUnitCodes,
                    i = e.callback,
                    o = e.cbTimeout,
                    a = e.labels,
                    u = (0, s.newAuction)({
                        adUnits: n,
                        adUnitCodes: r,
                        callback: i,
                        cbTimeout: o,
                        labels: a
                    });
                return t = u, d.push(t), u
            }, e.findBidByAdId = function(t) {
                return (0, a.default)(d.map((function(e) {
                    return e.getBidsReceived()
                })).reduce(i.flatten, []), (function(e) {
                    return e.adId === t
                }))
            }, e.getStandardBidderAdServerTargeting = function() {
                return (0, s.getStandardBidderSettings)()[u.JSON_MAPPING.ADSERVER_TARGETING]
            }, e
        }
        t.auctionManager = d()
    },
    27: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isValidPriceConfig = t.getPriceBucketString = void 0;
        var r, i = n(9),
            a = (r = i) && r.__esModule ? r : {
                default: r
            };
        var o = n(0),
            u = 2,
            d = {
                buckets: [{
                    min: 0,
                    max: 5,
                    increment: .5
                }]
            },
            s = {
                buckets: [{
                    min: 0,
                    max: 20,
                    increment: .1
                }]
            },
            c = {
                buckets: [{
                    min: 0,
                    max: 20,
                    increment: .01
                }]
            },
            f = {
                buckets: [{
                    min: 0,
                    max: 3,
                    increment: .01
                }, {
                    min: 3,
                    max: 8,
                    increment: .05
                }, {
                    min: 8,
                    max: 20,
                    increment: .5
                }]
            },
            l = {
                buckets: [{
                    min: 0,
                    max: 5,
                    increment: .05
                }, {
                    min: 5,
                    max: 10,
                    increment: .1
                }, {
                    min: 10,
                    max: 20,
                    increment: .5
                }]
            };

        function g(n, e, r) {
            var i = "";
            if (!p(e)) return i;
            var o = e.buckets.reduce((function(e, t) {
                    return e.max > t.max ? e : t
                }), {
                    max: 0
                }),
                t = (0, a.default)(e.buckets, (function(e) {
                    if (n > o.max * r) {
                        var t = e.precision;
                        void 0 === t && (t = u), i = (e.max * r).toFixed(t)
                    } else if (n <= e.max * r && n >= e.min * r) return e
                }));
            return t && (i = (function(e, t, n, r) {
                void 0 === n && (n = u);
                var i = 1 / (t * r);
                return (Math.floor(e * i) / i).toFixed(n)
            })(n, t.increment, t.precision, r)), i
        }

        function p(e) {
            if (o.isEmpty(e) || !e.buckets || !Array.isArray(e.buckets)) return !1;
            var t = !0;
            return e.buckets.forEach((function(e) {
                void 0 !== e.min && e.max && e.increment || (t = !1)
            })), t
        }
        t.getPriceBucketString = function(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1,
                r = parseFloat(e);
            return isNaN(r) && (r = ""), {
                low: "" === r ? "" : g(e, d, n),
                med: "" === r ? "" : g(e, s, n),
                high: "" === r ? "" : g(e, c, n),
                auto: "" === r ? "" : g(e, l, n),
                dense: "" === r ? "" : g(e, f, n),
                custom: "" === r ? "" : g(e, t, n)
            }
        }, t.isValidPriceConfig = p
    },
    28: function(e, t, n) {
        var o = n(42);
        e.exports = function(r, i, e) {
            if (o(r), void 0 === i) return r;
            switch (e) {
                case 1:
                    return function(e) {
                        return r.call(i, e)
                    };
                case 2:
                    return function(e, t) {
                        return r.call(i, e, t)
                    };
                case 3:
                    return function(e, t, n) {
                        return r.call(i, e, t, n)
                    }
            }
            return function() {
                return r.apply(i, arguments)
            }
        }
    },
    29: function(e, t) {
        e.exports = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    },
    3: function(e, t) {
        e.exports = {
            JSON_MAPPING: {
                PL_CODE: "code",
                PL_SIZE: "sizes",
                PL_BIDS: "bids",
                BD_BIDDER: "bidder",
                BD_ID: "paramsd",
                BD_PL_ID: "placementId",
                ADSERVER_TARGETING: "adserverTargeting",
                BD_SETTING_STANDARD: "standard"
            },
            REPO_AND_VERSION: "prebid_prebid_1.6.0-pre",
            DEBUG_MODE: "pbjs_debug",
            STATUS: {
                GOOD: 1,
                NO_BID: 2
            },
            CB: {
                TYPE: {
                    ALL_BIDS_BACK: "allRequestedBidsBack",
                    AD_UNIT_BIDS_BACK: "adUnitBidsBack",
                    BID_WON: "bidWon",
                    REQUEST_BIDS: "requestBids"
                }
            },
            EVENTS: {
                AUCTION_INIT: "auctionInit",
                AUCTION_END: "auctionEnd",
                BID_ADJUSTMENT: "bidAdjustment",
                BID_TIMEOUT: "bidTimeout",
                BID_REQUESTED: "bidRequested",
                BID_RESPONSE: "bidResponse",
                BID_WON: "bidWon",
                SET_TARGETING: "setTargeting",
                REQUEST_BIDS: "requestBids",
                ADD_AD_UNITS: "addAdUnits"
            },
            EVENT_ID_PATHS: {
                bidWon: "adUnitCode"
            },
            GRANULARITY_OPTIONS: {
                LOW: "low",
                MEDIUM: "medium",
                HIGH: "high",
                AUTO: "auto",
                DENSE: "dense",
                CUSTOM: "custom"
            },
            TARGETING_KEYS: ["hb_bidder", "hb_adid", "hb_pb", "hb_size", "hb_deal", "hb_source", "hb_format"],
            S2S: {
                SRC: "s2s",
                SYNCED_BIDDERS_KEY: "pbjsSyncs"
            }
        }
    },
    30: function(e, t, n) {
        var h = n(28),
            S = n(31),
            E = n(50),
            T = n(34),
            r = n(51);
        e.exports = function(f, e) {
            var l = 1 == f,
                g = 2 == f,
                p = 3 == f,
                v = 4 == f,
                y = 6 == f,
                b = 5 == f || y,
                m = e || r;
            return function(e, t, n) {
                for (var r, i, o = E(e), a = S(o), u = h(t, n, 3), d = T(a.length), s = 0, c = l ? m(e, d) : g ? m(e, 0) : void 0; s < d; s++)
                    if ((b || s in a) && (i = u(r = a[s], s, o), f))
                        if (l) c[s] = i;
                        else if (i) switch (f) {
                    case 3:
                        return !0;
                    case 5:
                        return r;
                    case 6:
                        return s;
                    case 2:
                        c.push(r)
                } else if (v) return !1;
                return y ? -1 : p || v ? v : c
            }
        }
    },
    31: function(e, t, n) {
        var r = n(32);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
            return "String" == r(e) ? e.split("") : Object(e)
        }
    },
    32: function(e, t) {
        var n = {}.toString;
        e.exports = function(e) {
            return n.call(e).slice(8, -1)
        }
    },
    33: function(e, t) {
        e.exports = function(e) {
            if (null == e) throw TypeError("Can't call method on  " + e);
            return e
        }
    },
    34: function(e, t, n) {
        var r = n(35),
            i = Math.min;
        e.exports = function(e) {
            return 0 < e ? i(r(e), 9007199254740991) : 0
        }
    },
    35: function(e, t) {
        var n = Math.ceil,
            r = Math.floor;
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (0 < e ? r : n)(e)
        }
    },
    36: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getGlobal = function() {
            return window.pbjs
        }, window.pbjs = window.pbjs || {}, window.pbjs.cmd = window.pbjs.cmd || [], window.pbjs.que = window.pbjs.que || []
    },
    37: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.targeting = t.isBidExpired = t.BID_TARGETING_SET = void 0;
        var b = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        t.newTargeting = d;
        var r, m = n(0),
            h = n(2),
            S = n(14),
            i = n(26),
            o = n(5),
            E = (r = o) && r.__esModule ? r : {
                default: r
            };

        function T(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var a = n(0),
            A = n(3),
            I = [],
            _ = t.BID_TARGETING_SET = "targetingSet",
            w = 20,
            u = (t.isBidExpired = function(e) {
                return (0, m.timestamp)() - e.responseTimestamp < 1e3 * e.ttl
            }, function(e) {
                return e && (e.status && e.status === _ || !e.status)
            });

        function d(n) {
            var c = {};

            function f(e) {
                return "string" == typeof e ? [e] : a.isArray(e) ? e : n.getAdUnitCodes() || []
            }

            function l() {
                return n.getBidsReceived().filter(u).filter(t.isBidExpired)
            }

            function g() {
                return n.getStandardBidderAdServerTargeting().map((function(e) {
                    return e.key
                })).concat(A.TARGETING_KEYS).filter(m.uniques)
            }

            function p(r, i, e, t) {
                return Object.keys(i.adserverTargeting).filter(o()).forEach((function(e) {
                    var t, n;
                    r.length && r.filter((n = e, function(e) {
                        return e.adUnitCode === i.adUnitCode && e.adserverTargeting[n]
                    })).forEach((t = e, function(e) {
                        a.isArray(e.adserverTargeting[t]) || (e.adserverTargeting[t] = [e.adserverTargeting[t]]), e.adserverTargeting[t] = e.adserverTargeting[t].concat(i.adserverTargeting[t]).filter(m.uniques), delete i.adserverTargeting[t]
                    }))
                })), r.push(i), r
            }

            function o() {
                var t = g();
                return function(e) {
                    return -1 === t.indexOf(e)
                }
            }

            function v(t) {
                return T({}, t.adUnitCode, Object.keys(t.adserverTargeting).filter(o()).map((function(e) {
                    return T({}, e.substring(0, w), [t.adserverTargeting[e]])
                })))
            }

            function y(e) {
                return {
                    adUnitCode: e,
                    cpm: 0,
                    adserverTargeting: {},
                    timeToRespond: 0
                }
            }
            return c.resetPresetTargeting = function(e) {
                if ((0, m.isGptPubadsDefined)()) {
                    var t = f(e),
                        r = n.getAdUnits().filter((function(e) {
                            return (0, E.default)(t, e.code)
                        }));
                    window.googletag.pubads().getSlots().forEach((function(n) {
                        I.forEach((function(t) {
                            r.forEach((function(e) {
                                e.code !== n.getAdUnitPath() && e.code !== n.getSlotElementId() || n.setTargeting(t, null)
                            }))
                        }))
                    }))
                }
            }, c.getAllTargeting = function(e) {
                var t, r, n, i, o, a, u = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : l(),
                    d = f(e),
                    s = (function(e, t) {
                        var n = c.getWinningBids(e, t);
                        n.forEach((function(e) {
                            e.status = _
                        }));
                        var r = g();
                        return n = n.map((function(t) {
                            return T({}, t.adUnitCode, Object.keys(t.adserverTargeting).filter((function(e) {
                                return void 0 === t.sendStandardTargeting || t.sendStandardTargeting || -1 === r.indexOf(e)
                            })).map((function(e) {
                                return T({}, "hb_deal" === e ? (e + "_" + t.bidderCode).substring(0, w) : e.substring(0, w), [t.adserverTargeting[e]])
                            })))
                        }))
                    })(d, u).concat((o = d, a = u, a.filter((function(e) {
                        return (0, E.default)(o, e.adUnitCode)
                    })).map((function(e) {
                        return b({}, e)
                    })).reduce(p, []).map(v).filter((function(e) {
                        return e
                    })))).concat(h.config.getConfig("enableSendAllBids") ? (t = u, r = A.TARGETING_KEYS.concat(S.NATIVE_TARGETING_KEYS), n = [], i = (0, m.groupBy)(t, "adUnitCode"), Object.keys(i).forEach((function(e) {
                        var t = (0, m.groupBy)(i[e], "bidderCode");
                        Object.keys(t).forEach((function(e) {
                            return n.push(t[e].reduce(m.getHighestCpm, y()))
                        }))
                    })), n.map((function(t) {
                        if (t.adserverTargeting) return T({}, t.adUnitCode, (n = t, r.filter((function(e) {
                            return void 0 !== t.adserverTargeting[e]
                        })).map((function(e) {
                            return T({}, (e + "_" + n.bidderCode).substring(0, w), [n.adserverTargeting[e]])
                        }))));
                        var n
                    })).filter((function(e) {
                        return e
                    }))) : []);
                return s.map((function(t) {
                    Object.keys(t).map((function(e) {
                        t[e].map((function(e) {
                            -1 === I.indexOf(Object.keys(e)[0]) && (I = Object.keys(e).concat(I))
                        }))
                    }))
                })), s = s.map((function(e) {
                    return T({}, Object.keys(e)[0], e[Object.keys(e)[0]].map((function(e) {
                        return T({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(", "))
                    })).reduce((function(e, t) {
                        return b(t, e)
                    }), {}))
                })).reduce((function(e, t) {
                    var n = Object.keys(t)[0];
                    return e[n] = b({}, e[n], t[n]), e
                }), {})
            }, c.setTargetingForGPT = function(i) {
                window.googletag.pubads().getSlots().forEach((function(r) {
                    Object.keys(i).filter((0, m.isAdUnitCodeMatchingSlot)(r)).forEach((function(n) {
                        return Object.keys(i[n]).forEach((function(t) {
                            var e = i[n][t].split(",");
                            (e = 1 < e.length ? [e] : e).map((function(e) {
                                return a.logMessage("Attempting to set key value for slot: " + r.getSlotElementId() + " key: " + t + " value: " + e), e
                            })).forEach((function(e) {
                                r.setTargeting(t, e)
                            }))
                        }))
                    }))
                }))
            }, c.getWinningBids = function(e) {
                var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : l(),
                    t = f(e);
                return n.filter((function(e) {
                    return (0, E.default)(t, e.adUnitCode)
                })).filter((function(e) {
                    return 0 < e.cpm
                })).map((function(e) {
                    return e.adUnitCode
                })).filter(m.uniques).map((function(t) {
                    return n.filter((function(e) {
                        return e.adUnitCode === t ? e : null
                    })).reduce(m.getHighestCpm, y(t))
                }))
            }, c.setTargetingForAst = function() {
                var i = c.getAllTargeting();
                Object.keys(i).forEach((function(r) {
                    return Object.keys(i[r]).forEach((function(e) {
                        if (a.logMessage("Attempting to set targeting for targetId: " + r + " key: " + e + " value: " + i[r][e]), a.isStr(i[r][e]) || a.isArray(i[r][e])) {
                            var t = {},
                                n = "hb_adid";
                            t[e.substring(0, n.length) === n ? e.toUpperCase() : e] = i[r][e], window.apntag.setKeywords(r, t)
                        }
                    }))
                }))
            }, c.isApntagDefined = function() {
                if (window.apntag && a.isFn(window.apntag.setKeywords)) return !0
            }, c
        }
        t.targeting = d(i.auctionManager)
    },
    371: function(e, t, n) {
        e.exports = n(372)
    },
    372: function(e, t, n) {
        "use strict";
        var r, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            a = n(36),
            u = n(0),
            d = n(373),
            s = n(13),
            c = n(11),
            f = n(2),
            l = n(26),
            g = n(37),
            p = n(19),
            v = n(5),
            y = (r = v) && r.__esModule ? r : {
                default: r
            };
        var b = (0, a.getGlobal)(),
            m = n(3),
            h = n(0),
            S = n(6),
            E = n(15),
            T = n(10),
            A = s.userSync.triggerUserSyncs,
            I = m.EVENTS,
            _ = I.ADD_AD_UNITS,
            w = I.BID_WON,
            C = I.REQUEST_BIDS,
            O = I.SET_TARGETING,
            B = {
                bidWon: function(e) {
                    var t = l.auctionManager.getBidsRequested().map((function(e) {
                        return e.bids.map((function(e) {
                            return e.adUnitCode
                        }))
                    })).reduce(u.flatten).filter(u.uniques);
                    if (!h.contains(t, e)) return void h.logError('The "' + e + '" placement is not defined.');
                    return !0
                }
            };

        function U(e, t, n) {
            e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = t, e.defaultView.frameElement.height = n)
        }

        function N(e) {
            e.forEach((function(e) {
                if (void 0 === e.called) try {
                    e.call(), e.called = !0
                } catch (e) {
                    h.logError("Error processing command :", "prebid.js", e)
                }
            }))
        }
        b.bidderSettings = b.bidderSettings || {}, b.cbTimeout = b.cbTimeout || 200, b.libLoaded = !0, b.version = "v1.6.0-pre", h.logInfo("Prebid.js v1.6.0-pre loaded"), b.adUnits = b.adUnits || [], b.triggerUserSyncs = A, b.getAdserverTargetingForAdUnitCodeStr = function(e) {
            if (h.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr", arguments), e) {
                var t = b.getAdserverTargetingForAdUnitCode(e);
                return h.transformAdServerTargetingObj(t)
            }
            h.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")
        }, b.getAdserverTargetingForAdUnitCode = function(e) {
            return b.getAdserverTargeting(e)[e]
        }, b.getAdserverTargeting = function(e) {
            return h.logInfo("Invoking pbjs.getAdserverTargeting", arguments), g.targeting.getAllTargeting(e, l.auctionManager.getBidsReceived())
        }, b.getBidResponses = function() {
            h.logInfo("Invoking pbjs.getBidResponses", arguments);
            var e = l.auctionManager.getBidsReceived().filter(u.adUnitsFilter.bind(this, l.auctionManager.getAdUnitCodes())),
                n = e && e.length && e[e.length - 1].auctionId;
            return e.map((function(e) {
                return e.adUnitCode
            })).filter(u.uniques).map((function(t) {
                return e.filter((function(e) {
                    return e.auctionId === n && e.adUnitCode === t
                }))
            })).filter((function(e) {
                return e && e[0] && e[0].adUnitCode
            })).map((function(e) {
                return t = {}, n = e[0].adUnitCode, r = {
                    bids: e.map(u.removeRequestId)
                }, n in t ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r, t;
                var t, n, r
            })).reduce((function(e, t) {
                return o(e, t)
            }), {})
        }, b.getBidResponsesForAdUnitCode = function(t) {
            return {
                bids: l.auctionManager.getBidsReceived().filter((function(e) {
                    return e.adUnitCode === t
                })).map(u.removeRequestId)
            }
        }, b.setTargetingForGPTAsync = function(e) {
            if (h.logInfo("Invoking pbjs.setTargetingForGPTAsync", arguments), (0, u.isGptPubadsDefined)()) {
                var t = g.targeting.getAllTargeting(e);
                g.targeting.resetPresetTargeting(e), g.targeting.setTargetingForGPT(t), T.emit(O)
            } else h.logError("window.googletag is not defined on the page")
        }, b.setTargetingForAst = function() {
            h.logInfo("Invoking pbjs.setTargetingForAn", arguments), g.targeting.isApntagDefined() ? (g.targeting.setTargetingForAst(), T.emit(O)) : h.logError("window.apntag is not defined on the page")
        }, b.renderAd = function(e, t) {
            if (h.logInfo("Invoking pbjs.renderAd", arguments), h.logMessage("Calling renderAd with adId :" + t), e && t) try {
                var n = l.auctionManager.findBidByAdId(t);
                if (n) {
                    n.status = "rendered", n.ad = h.replaceAuctionPrice(n.ad, n.cpm), n.adUrl = h.replaceAuctionPrice(n.adUrl, n.cpm), l.auctionManager.addWinningBid(n), T.emit(w, n);
                    var r = n.height,
                        i = n.width,
                        o = n.ad,
                        a = n.mediaType,
                        u = n.adUrl,
                        d = n.renderer,
                        s = document.createComment("Creative " + n.creativeId + " served by " + n.bidder + " Prebid.js Header Bidding");
                    if (h.insertElement(s, e, "body"), d && d.url) d.render(n);
                    else if (e === document && !h.inIframe() || "video" === a) h.logError("Error trying to write ad. Ad render call ad id " + t + " was prevented from writing to the main document.");
                    else if (o) e.write(o), e.close(), U(e, i, r);
                    else if (u) {
                        var c = h.createInvisibleIframe();
                        c.height = r, c.width = i, c.style.display = "inline", c.style.overflow = "hidden", c.src = u, h.insertElement(c, e, "body"), U(e, i, r)
                    } else h.logError("Error trying to write ad. No ad for bid response id: " + t)
                } else h.logError("Error trying to write ad. Cannot find ad by given id : " + t)
            } catch (e) {
                h.logError("Error trying to write ad Id :" + t + " to the page:" + e.message)
            } else h.logError("Error trying to write ad Id :" + t + " to the page. Missing document or adId")
        }, b.removeAdUnit = function(e) {
            if (h.logInfo("Invoking pbjs.removeAdUnit", arguments), e)
                for (var t = 0; t < b.adUnits.length; t++) b.adUnits[t].code === e && b.adUnits.splice(t, 1)
        }, b.requestBids = (0, p.createHook)("asyncSeries", (function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.bidsBackHandler,
                n = e.timeout,
                r = e.adUnits,
                i = e.adUnitCodes,
                o = e.labels;
            T.emit(C);
            var a = n || f.config.getConfig("bidderTimeout");
            if (r = r || b.adUnits, h.logInfo("Invoking pbjs.requestBids", arguments), i && i.length ? r = r.filter((function(e) {
                    return (0, y.default)(i, e.code)
                })) : i = r && r.map((function(e) {
                    return e.code
                })), r.forEach((function(i) {
                    var o = Object.keys(i.mediaTypes || {
                            banner: "banner"
                        }),
                        e = i.bids.map((function(e) {
                            return e.bidder
                        })),
                        a = S.bidderRegistry;
                    e.forEach((function(t) {
                        var e = a[t],
                            n = e && e.getSpec && e.getSpec(),
                            r = n && n.supportedMediaTypes || ["banner"];
                        o.some((function(e) {
                            return (0, y.default)(r, e)
                        })) || (h.logWarn(h.unsupportedBidderMessage(i, t)), i.bids = i.bids.filter((function(e) {
                            return e.bidder !== t
                        })))
                    }))
                })), r && 0 !== r.length) {
                var u = l.auctionManager.createAuction({
                    adUnits: r,
                    adUnitCodes: i,
                    callback: t,
                    cbTimeout: a,
                    labels: o
                });
                return u.callBids(), u
            }
            if (h.logMessage("No adUnits configured. No bids requested."), "function" == typeof t) try {
                t()
            } catch (e) {
                h.logError("Error executing bidsBackHandler", null, e)
            }
        })), b.addAdUnits = function(e) {
            h.logInfo("Invoking pbjs.addAdUnits", arguments), h.isArray(e) ? (e.forEach((function(e) {
                return e.transactionId = h.generateUUID()
            })), b.adUnits.push.apply(b.adUnits, e)) : "object" === (void 0 === e ? "undefined" : i(e)) && (e.transactionId = h.generateUUID(), b.adUnits.push(e)), T.emit(_)
        }, b.onEvent = function(e, t, n) {
            h.logInfo("Invoking pbjs.onEvent", arguments), h.isFn(t) ? !n || B[e].call(null, n) ? T.on(e, t, n) : h.logError('The id provided is not valid for event "' + e + '" and no handler was set.') : h.logError('The event handler provided is not a function and was not set on event "' + e + '".')
        }, b.offEvent = function(e, t, n) {
            h.logInfo("Invoking pbjs.offEvent", arguments), n && !B[e].call(null, n) || T.off(e, t, n)
        }, b.registerBidAdapter = function(e, t) {
            h.logInfo("Invoking pbjs.registerBidAdapter", arguments);
            try {
                S.registerBidAdapter(e(), t)
            } catch (e) {
                h.logError("Error registering bidder adapter : " + e.message)
            }
        }, b.registerAnalyticsAdapter = function(e) {
            h.logInfo("Invoking pbjs.registerAnalyticsAdapter", arguments);
            try {
                S.registerAnalyticsAdapter(e)
            } catch (e) {
                h.logError("Error registering analytics adapter : " + e.message)
            }
        }, b.createBid = function(e) {
            return h.logInfo("Invoking pbjs.createBid", arguments), E.createBid(e)
        }, b.loadScript = function(e, t, n) {
            h.logInfo("Invoking pbjs.loadScript", arguments), (0, c.loadScript)(e, t, n)
        }, b.enableAnalytics = function(e) {
            e && !h.isEmpty(e) ? (h.logInfo("Invoking pbjs.enableAnalytics for: ", e), S.enableAnalytics(e)) : h.logError("pbjs.enableAnalytics should be called with option {}")
        }, b.aliasBidder = function(e, t) {
            h.logInfo("Invoking pbjs.aliasBidder", arguments), e && t ? S.aliasBidAdapter(e, t) : h.logError("bidderCode and alias must be passed as arguments", "pbjs.aliasBidder")
        }, b.getAllWinningBids = function() {
            return l.auctionManager.getAllWinningBids().map(u.removeRequestId)
        }, b.getHighestCpmBids = function(e) {
            return g.targeting.getWinningBids(e, l.auctionManager.getBidsReceived()).map(u.removeRequestId)
        }, b.getConfig = f.config.getConfig, b.setConfig = f.config.setConfig, b.que.push((function() {
            return (0, d.listenMessagesFromCreative)()
        })), b.cmd.push = function(e) {
            if ("function" == typeof e) try {
                e.call()
            } catch (e) {
                h.logError("Error processing command :", e.message, e.stack)
            } else h.logError("Commands written into pbjs.cmd.push must be wrapped in a function")
        }, b.que.push = b.cmd.push, b.processQueue = function() {
            N(b.que), N(b.cmd)
        }
    },
    373: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.listenMessagesFromCreative = function() {
            addEventListener("message", o, !1)
        };
        var b = i(n(10)),
            m = n(14),
            r = n(3),
            h = n(0),
            S = n(26),
            E = i(n(9));

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var T = r.EVENTS.BID_WON;

        function o(e) {
            var t, n, r, i, o, a, u, d, s, c, f, l, g, p = e.message ? "message" : "data",
                v = {};
            try {
                v = JSON.parse(e[p])
            } catch (e) {
                return
            }
            if (v.adId) {
                var y = (0, E.default)(S.auctionManager.getBidsReceived(), (function(e) {
                    return e.adId === v.adId
                }));
                "Prebid Request" === v.message && (t = y, n = v.adServerDomain, r = e.source, i = t.adId, o = t.ad, a = t.adUrl, u = t.width, d = t.height, i && (c = (s = t).adUnitCode, f = s.width, l = s.height, (g = document.getElementById((0, E.default)(window.googletag.pubads().getSlots().filter((0, h.isSlotMatchingAdUnitCode)(c)), (function(e) {
                    return e
                })).getSlotElementId()).querySelector("iframe")).width = "" + f, g.height = "" + l, r.postMessage(JSON.stringify({
                    message: "Prebid Response",
                    ad: o,
                    adUrl: a,
                    adId: i,
                    width: u,
                    height: d
                }), n)), S.auctionManager.addWinningBid(y), b.default.emit(T, y)), "Prebid Native" === v.message && ((0, m.fireNativeTrackers)(v, y), S.auctionManager.addWinningBid(y), b.default.emit(T, y))
            }
        }
    },
    38: function(e, t) {
        var n;
        n = (function() {
            return this
        })();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    },
    4: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.NATIVE = "native", t.VIDEO = "video", t.BANNER = "banner"
    },
    41: function(e, t, n) {
        "use strict";
        var r = n(21),
            i = n(30)(5),
            o = "find",
            a = !0;
        o in [] && Array(1)[o]((function() {
            a = !1
        })), r(r.P + r.F * a, "Array", {
            find: function(e) {
                return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
            }
        }), n(23)(o)
    },
    42: function(e, t) {
        e.exports = function(e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e
        }
    },
    43: function(e, t, n) {
        var r = n(44),
            i = n(49);
        e.exports = n(22) ? function(e, t, n) {
            return r.f(e, t, i(1, n))
        } : function(e, t, n) {
            return e[t] = n, e
        }
    },
    44: function(e, t, n) {
        var r = n(45),
            i = n(46),
            o = n(48),
            a = Object.defineProperty;
        t.f = n(22) ? Object.defineProperty : function(e, t, n) {
            if (r(e), t = o(t, !0), r(n), i) try {
                return a(e, t, n)
            } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e
        }
    },
    45: function(e, t, n) {
        var r = n(18);
        e.exports = function(e) {
            if (!r(e)) throw TypeError(e + " is not an object!");
            return e
        }
    },
    46: function(e, t, n) {
        e.exports = !n(22) && !n(29)((function() {
            return 7 != Object.defineProperty(n(47)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }))
    },
    47: function(e, t, n) {
        var r = n(18),
            i = n(16).document,
            o = r(i) && r(i.createElement);
        e.exports = function(e) {
            return o ? i.createElement(e) : {}
        }
    },
    48: function(e, t, n) {
        var i = n(18);
        e.exports = function(e, t) {
            if (!i(e)) return e;
            var n, r;
            if (t && "function" == typeof(n = e.toString) && !i(r = n.call(e))) return r;
            if ("function" == typeof(n = e.valueOf) && !i(r = n.call(e))) return r;
            if (!t && "function" == typeof(n = e.toString) && !i(r = n.call(e))) return r;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    49: function(e, t) {
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    },
    5: function(e, t, n) {
        n(57), e.exports = n(17).Array.includes
    },
    50: function(e, t, n) {
        var r = n(33);
        e.exports = function(e) {
            return Object(r(e))
        }
    },
    51: function(e, t, n) {
        var r = n(52);
        e.exports = function(e, t) {
            return new(r(e))(t)
        }
    },
    52: function(e, t, n) {
        var r = n(18),
            i = n(53),
            o = n(54)("species");
        e.exports = function(e) {
            var t;
            return i(e) && ("function" != typeof(t = e.constructor) || t !== Array && !i(t.prototype) || (t = void 0), r(t) && null === (t = t[o]) && (t = void 0)), void 0 === t ? Array : t
        }
    },
    53: function(e, t, n) {
        var r = n(32);
        e.exports = Array.isArray || function(e) {
            return "Array" == r(e)
        }
    },
    54: function(e, t, n) {
        var r = n(55)("wks"),
            i = n(56),
            o = n(16).Symbol,
            a = "function" == typeof o;
        (e.exports = function(e) {
            return r[e] || (r[e] = a && o[e] || (a ? o : i)("Symbol." + e))
        }).store = r
    },
    55: function(e, t, n) {
        var r = n(16),
            i = "__core-js_shared__",
            o = r[i] || (r[i] = {});
        e.exports = function(e) {
            return o[e] || (o[e] = {})
        }
    },
    56: function(e, t) {
        var n = 0,
            r = Math.random();
        e.exports = function(e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
        }
    },
    57: function(e, t, n) {
        "use strict";
        var r = n(21),
            i = n(58)(!0);
        r(r.P, "Array", {
            includes: function(e) {
                return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
            }
        }), n(23)("includes")
    },
    58: function(e, t, n) {
        var d = n(59),
            s = n(34),
            c = n(60);
        e.exports = function(u) {
            return function(e, t, n) {
                var r, i = d(e),
                    o = s(i.length),
                    a = c(n, o);
                if (u && t != t) {
                    for (; a < o;)
                        if ((r = i[a++]) != r) return !0
                } else
                    for (; a < o; a++)
                        if ((u || a in i) && i[a] === t) return u || a || 0;
                return !u && -1
            }
        }
    },
    59: function(e, t, n) {
        var r = n(31),
            i = n(33);
        e.exports = function(e) {
            return r(i(e))
        }
    },
    6: function(e, v, t) {
        "use strict";
        var n, y = function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return (function(e, t) {
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            !r && u.return && u.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                })(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            f = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            b = t(0),
            l = t(62),
            g = t(14),
            d = t(1),
            m = t(7),
            h = t(2),
            r = t(5),
            S = (n = r) && n.__esModule ? n : {
                default: n
            };
        var E = t(0),
            T = t(3),
            A = t(10),
            I = void 0,
            _ = {};
        v.bidderRegistry = _;
        var w = {};
        h.config.getConfig("s2sConfig", (function(e) {
            w = e.s2sConfig
        }));
        var i = {};

        function p(e, t) {
            return e.labelAll ? {
                labelAll: !0,
                labels: e.labelAll,
                activeLabels: t
            } : {
                labelAll: !1,
                labels: e.labelAny,
                activeLabels: t
            }
        }

        function C(e) {
            var r = e.bidderCode,
                d = e.auctionId,
                s = e.bidderRequestId,
                t = e.adUnits,
                c = e.labels;
            return t.reduce((function(e, a) {
                var t = (0, l.resolveStatus)(p(a, c), a.sizes),
                    n = t.active,
                    u = t.sizes;
                return n && e.push(a.bids.filter((function(e) {
                    return e.bidder === r
                })).reduce((function(e, t) {
                    a.mediaTypes && (E.isValidMediaTypes(a.mediaTypes) ? t = f({}, t, {
                        mediaTypes: a.mediaTypes
                    }) : E.logError("mediaTypes is not correctly configured for adunit " + a.code));
                    var n = a.nativeParams || E.deepAccess(a, "mediaTypes.native");
                    n && (t = f({}, t, {
                        nativeParams: (0, g.processNativeAdUnitParams)(n)
                    })), t = f({}, t, (0, b.getDefinedParams)(a, ["mediaType", "renderer"]));
                    var r = (0, l.resolveStatus)(p(t, c), u),
                        i = r.active,
                        o = r.sizes;
                    return i && e.push(f({}, t, {
                        adUnitCode: a.code,
                        transactionId: a.transactionId,
                        sizes: o,
                        bidId: t.bid_id || E.getUniqueIdentifierStr(),
                        bidderRequestId: s,
                        auctionId: d
                    })), e
                }), [])), e
            }), []).reduce(b.flatten, []).filter((function(e) {
                return "" !== e
            }))
        }

        function O(e) {
            var n = w.bidders,
                t = E.deepClone(e);
            return t.forEach((function(e) {
                var t, r;
                e.sizes = (t = e, r = [], E.parseSizesInput(t.sizes).forEach((function(e) {
                    var t = e.split("x"),
                        n = {
                            w: parseInt(t[0]),
                            h: parseInt(t[1])
                        };
                    r.push(n)
                })), r), e.bids = e.bids.filter((function(e) {
                    return (0, S.default)(n, e.bidder) && (!B() || e.finalSource !== I.CLIENT)
                })).map((function(e) {
                    return e.bid_id = E.getUniqueIdentifierStr(), e
                }))
            })), t = t.filter((function(e) {
                return 0 !== e.bids.length
            }))
        }

        function B() {
            return w && w.enabled && w.testing && I
        }
        v.makeBidRequests = function(e, r, i, o, a) {
            var u = [];
            e = v.checkBidRequestSizes(e);
            var t = (0, b.getBidderCodes)(e);
            h.config.getConfig("bidderSequence") === h.RANDOM && (t = (0, b.shuffle)(t));
            var n = t,
                d = [];
            if (w.enabled) {
                B() && (d = I.getSourceBidderMap(e)[I.CLIENT]);
                var s = w.bidders;
                n = t.filter((function(e) {
                    return !(0, S.default)(s, e) || (0, S.default)(d, e)
                }));
                var c = O(e),
                    f = E.generateUUID();
                s.forEach((function(e) {
                    var t = E.getUniqueIdentifierStr(),
                        n = {
                            bidderCode: e,
                            auctionId: i,
                            bidderRequestId: t,
                            tid: f,
                            adUnitsS2SCopy: c,
                            bids: C({
                                bidderCode: e,
                                auctionId: i,
                                bidderRequestId: t,
                                adUnits: c,
                                labels: a
                            }),
                            auctionStart: r,
                            timeout: w.timeout,
                            src: T.S2S.SRC
                        };
                    0 !== n.bids.length && u.push(n)
                }))
            }
            var l, g, p = (l = e, (g = E.deepClone(l)).forEach((function(e) {
                e.bids = e.bids.filter((function(e) {
                    return !B() || e.finalSource !== I.SERVER
                }))
            })), g = g.filter((function(e) {
                return 0 !== e.bids.length
            })));
            return n.forEach((function(e) {
                var t = E.getUniqueIdentifierStr(),
                    n = {
                        bidderCode: e,
                        auctionId: i,
                        bidderRequestId: t,
                        bids: C({
                            bidderCode: e,
                            auctionId: i,
                            bidderRequestId: t,
                            adUnits: p,
                            labels: a
                        }),
                        auctionStart: r,
                        timeout: o
                    };
                n.bids && 0 !== n.bids.length && u.push(n)
            })), u
        }, v.checkBidRequestSizes = function(e) {
            return Array.prototype.forEach.call(e, (function(e) {
                e.sizes && E.logWarn("Usage of adUnits.sizes will eventually be deprecated.  Please define size dimensions within the corresponding area of the mediaTypes.<object> (eg mediaTypes.banner.sizes).");
                var t = e.mediaTypes;
                if (t && t.banner) {
                    var n = t.banner;
                    n.sizes ? e.sizes = n.sizes : (E.logError("Detected a mediaTypes.banner object did not include sizes.  This is a required field for the mediaTypes.banner object.  Removing invalid mediaTypes.banner object from request."), delete e.mediaTypes.banner)
                }
                if (t && t.video) {
                    var r = t.video;
                    r.playerSize && (Array.isArray(r.playerSize) && 2 === r.playerSize.length && E.isInteger(r.playerSize[0]) && E.isInteger(r.playerSize[1]) ? e.sizes = r.playerSize : (E.logError("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [640, 480]. Removing invalid mediaTypes.video.playerSize property from request."), delete e.mediaTypes.video.playerSize))
                }
                if (t && t.native) {
                    var i = t.native;
                    i.image && i.image.sizes && !Array.isArray(i.image.sizes) && (E.logError("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."), delete e.mediaTypes.native.image.sizes), i.image && i.image.aspect_ratios && !Array.isArray(i.image.aspect_ratios) && (E.logError("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."), delete e.mediaTypes.native.image.aspect_ratios), i.icon && i.icon.sizes && !Array.isArray(i.icon.sizes) && (E.logError("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."), delete e.mediaTypes.native.icon.sizes)
                }
            })), e
        }, v.callBids = function(e, t, r, i) {
            if (t.length) {
                var o = (0, m.ajaxBuilder)(t[0].timeout),
                    n = t.reduce((function(e, t) {
                        return e[Number(void 0 !== t.src && t.src === T.S2S.SRC)].push(t), e
                    }), [
                        [],
                        []
                    ]),
                    a = y(n, 2),
                    u = a[0],
                    d = a[1];
                if (d.length) {
                    var s = w.bidders,
                        c = _[w.adapter],
                        f = d[0].tid,
                        l = d[0].adUnitsS2SCopy;
                    if (c) {
                        var g = {
                            tid: f,
                            ad_units: l
                        };
                        if (g.ad_units.length) {
                            var p = d.map((function(e) {
                                    return e.start = (0, b.timestamp)(), e.doneCbCallCount = 0, i(e.bidderRequestId)
                                })),
                                v = g.ad_units.reduce((function(e, t) {
                                    return e.concat((t.bids || []).reduce((function(e, t) {
                                        return e.concat(t.bidder)
                                    }), []))
                                }), []);
                            E.logMessage("CALLING S2S HEADER BIDDERS ==== " + s.filter((function(e) {
                                return (0, S.default)(v, e)
                            })).join(",")), d.forEach((function(e) {
                                A.emit(T.EVENTS.BID_REQUESTED, e)
                            })), c.callBids(g, d, r, (function() {
                                return p.forEach((function(e) {
                                    return e()
                                }))
                            }), o)
                        }
                    }
                }
                u.forEach((function(e) {
                    e.start = (0, b.timestamp)();
                    var t = _[e.bidderCode];
                    if (t) {
                        E.logMessage("CALLING BIDDER ======= " + e.bidderCode), A.emit(T.EVENTS.BID_REQUESTED, e), e.doneCbCallCount = 0;
                        var n = i(e.bidderRequestId);
                        t.callBids(e, r, n, o)
                    } else E.logError("Adapter trying to be called which does not exist: " + e.bidderCode + " adaptermanager.callBids")
                }))
            } else E.logWarn("callBids executed with no bidRequests.  Were they filtered by labels or sizing?")
        }, v.videoAdapters = [], v.registerBidAdapter = function(e, t) {
            var n = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).supportedMediaTypes,
                r = void 0 === n ? [] : n;
            e && t ? "function" == typeof e.callBids ? (_[t] = e, (0, S.default)(r, "video") && v.videoAdapters.push(t), (0, S.default)(r, "native") && g.nativeAdapters.push(t)) : E.logError("Bidder adaptor error for bidder code: " + t + "bidder must implement a callBids() function") : E.logError("bidAdaptor or bidderCode not specified")
        }, v.aliasBidAdapter = function(t, e) {
            var n, r;
            if (void 0 === _[e]) {
                var i = _[t];
                if (void 0 === i) E.logError('bidderCode "' + t + '" is not an existing bidder.', "adaptermanager.aliasBidAdapter");
                else try {
                    var o = void 0,
                        a = (n = t, r = [], (0, S.default)(v.videoAdapters, n) && r.push("video"), (0, S.default)(g.nativeAdapters, n) && r.push("native"), r);
                    if (i.constructor.prototype != Object.prototype)(o = new i.constructor).setBidderCode(e);
                    else {
                        var u = i.getSpec();
                        o = (0, d.newBidder)(f({}, u, {
                            code: e
                        }))
                    }
                    this.registerBidAdapter(o, e, {
                        supportedMediaTypes: a
                    })
                } catch (e) {
                    E.logError(t + " bidder does not currently support aliasing.", "adaptermanager.aliasBidAdapter")
                }
            } else E.logMessage('alias name "' + e + '" has been already specified.')
        }, v.registerAnalyticsAdapter = function(e) {
            var t = e.adapter,
                n = e.code;
            t && n ? "function" == typeof t.enableAnalytics ? (t.code = n, i[n] = t) : E.logError('Prebid Error: Analytics adaptor error for analytics "' + n + '"\n        analytics adapter must implement an enableAnalytics() function') : E.logError("Prebid Error: analyticsAdapter or analyticsCode not specified")
        }, v.enableAnalytics = function(e) {
            E.isArray(e) || (e = [e]), E._each(e, (function(e) {
                var t = i[e.provider];
                t ? t.enableAnalytics(e) : E.logError("Prebid Error: no analytics adapter found in registry for\n        " + e.provider + ".")
            }))
        }, v.getBidAdapter = function(e) {
            return _[e]
        }, v.setS2STestingModule = function(e) {
            I = e
        }
    },
    60: function(e, t, n) {
        var r = n(35),
            i = Math.max,
            o = Math.min;
        e.exports = function(e, t) {
            return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t)
        }
    },
    61: function(e, t) {
        e.exports = function e(t) {
            var n = Array.isArray(t) ? [] : {};
            for (var r in t) {
                var i = t[r];
                n[r] = i && "object" == typeof i ? e(i) : i
            }
            return n
        }
    },
    62: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        t.setSizeConfig = a, t.resolveStatus = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.labels,
                n = void 0 === t ? [] : t,
                r = e.labelAll,
                i = void 0 !== r && r,
                o = e.activeLabels,
                a = void 0 === o ? [] : o,
                u = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [],
                d = (c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : p, c.reduce((function(n, e) {
                    return "object" === (void 0 === e ? "undefined" : f(e)) && "string" == typeof e.mediaQuery ? matchMedia(e.mediaQuery).matches && (Array.isArray(e.sizesSupported) && (n.shouldFilter = !0), ["labels", "sizesSupported"].forEach((function(t) {
                        return (e[t] || []).forEach((function(e) {
                            return n[t][e] = !0
                        }))
                    }))) : (0, l.logWarn)('sizeConfig rule missing required property "mediaQuery"'), n
                }), {
                    labels: {},
                    sizesSupported: {},
                    shouldFilter: !1
                })),
                s = void 0;
            var c;
            s = d.shouldFilter ? u.filter((function(e) {
                return d.sizesSupported[e]
            })) : u;
            return {
                active: 0 < s.length && (0 === n.length || !i && (n.some((function(e) {
                    return d.labels[e]
                })) || n.some((function(e) {
                    return (0, g.default)(a, e)
                }))) || i && n.reduce((function(e, t) {
                    return e ? d.labels[t] || (0, g.default)(a, t) : e
                }), !0)),
                sizes: s
            }
        };
        var r, i = n(2),
            l = n(0),
            o = n(5),
            g = (r = o) && r.__esModule ? r : {
                default: r
            };
        var p = [];

        function a(e) {
            p = e
        }
        i.config.getConfig("sizeConfig", (function(e) {
            return a(e.sizeConfig)
        }))
    },
    63: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.hasNonVideoBidder = t.videoBidder = t.videoAdUnit = void 0, t.isValidVideoBid = function(e, t) {
            var n = (0, o.getBidRequest)(e.adId, t),
                r = n && (0, o.deepAccess)(n, "mediaTypes.video"),
                i = r && (0, o.deepAccess)(r, "context");
            if (!n || r && i !== s) return a.config.getConfig("cache.url") || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : ((0, o.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '), !1);
            if (i === s) return !(!e.renderer && !n.renderer);
            return !0
        };
        var r, i = n(6),
            o = n(0),
            a = n(2),
            u = n(5),
            d = (r = u) && r.__esModule ? r : {
                default: r
            };
        var s = "outstream",
            c = (t.videoAdUnit = function(e) {
                var t = "video" === e.mediaType,
                    n = (0, o.deepAccess)(e, "mediaTypes.video");
                return t || n
            }, t.videoBidder = function(e) {
                return (0, d.default)(i.videoAdapters, e.bidder)
            });
        t.hasNonVideoBidder = function(e) {
            return e.bids.filter((function(e) {
                return !c(e)
            })).length
        }
    },
    7: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ajax = void 0;
        var c = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
        t.ajaxBuilder = r;
        var l = n(12),
            g = n(0),
            p = 4;
        t.ajax = r();

        function r() {
            var s = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 3e3;
            return function(e, t, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
                try {
                    var i = void 0,
                        o = !1,
                        a = r.method || (n ? "POST" : "GET"),
                        u = "object" === (void 0 === t ? "undefined" : f(t)) ? t : {
                            success: function() {
                                g.logMessage("xhr success")
                            },
                            error: function(e) {
                                g.logError("xhr error", null, e)
                            }
                        };
                    if ("function" == typeof t && (u.success = t), window.XMLHttpRequest ? void 0 === (i = new window.XMLHttpRequest).responseType && (o = !0) : o = !0, o ? ((i = new window.XDomainRequest).onload = function() {
                            u.success(i.responseText, i)
                        }, i.onerror = function() {
                            u.error("error", i)
                        }, i.ontimeout = function() {
                            u.error("timeout", i)
                        }, i.onprogress = function() {
                            g.logMessage("xhr onprogress")
                        }) : (i.onreadystatechange = function() {
                            if (i.readyState === p) {
                                var e = i.status;
                                200 <= e && e < 300 || 304 === e ? u.success(i.responseText, i) : u.error(i.statusText, i)
                            }
                        }, i.ontimeout = function() {
                            g.logError("  xhr timeout after ", i.timeout, "ms")
                        }), "GET" === a && n) {
                        var d = (0, l.parse)(e, r);
                        c(d.search, n), e = (0, l.format)(d)
                    }
                    i.open(a, e), i.timeout = s, o || (r.withCredentials && (i.withCredentials = !0), g._each(r.customHeaders, (function(e, t) {
                        i.setRequestHeader(t, e)
                    })), r.preflight && i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.setRequestHeader("Content-Type", r.contentType || "text/plain")), "POST" === a && n ? i.send(n) : i.send()
                } catch (e) {
                    g.logError("xhr construction", e)
                }
            }
        }
    },
    9: function(e, t, n) {
        n(41), e.exports = n(17).Array.find
    },
    94: function(e, t, n) {
        "use strict";
        var r = n(21),
            i = n(30)(6),
            o = "findIndex",
            a = !0;
        o in [] && Array(1)[o]((function() {
            a = !1
        })), r(r.P + r.F * a, "Array", {
            findIndex: function(e) {
                return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
            }
        }), n(23)(o)
    }
});
pbjsChunk([81], {
    117: function(a, e, t) {
        t(118), a.exports = t(119)
    },
    118: function(a, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.spec = void 0;
        var y = function(a, e) {
                if (Array.isArray(a)) return a;
                if (Symbol.iterator in Object(a)) return (function(a, e) {
                    var t = [],
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, d = a[Symbol.iterator](); !(n = (o = d.next()).done) && (t.push(o.value), !e || t.length !== e); n = !0);
                    } catch (a) {
                        r = !0, i = a
                    } finally {
                        try {
                            !n && d.return && d.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return t
                })(a, e);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
                return typeof a
            } : function(a) {
                return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
            },
            r = t(1),
            i = t(2),
            p = t(12),
            o = t(0),
            m = c(t(25)),
            d = c(t(5));

        function c(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }
        var w = function(a) {
                return Array.isArray(a) && 2 === a.length ? a[0] + "x" + a[1] : a
            },
            x = function(a) {
                return a.split("x").map(Number)
            },
            b = function(a) {
                return (0, d.default)(["300x250", "320x50"], a)
            },
            h = function(a) {
                return (0, d.default)(["video", "native"], a)
            },
            A = function(a) {
                return "video" === a
            },
            v = function(a) {
                return "fullwidth" === a
            },
            _ = function() {
                return encodeURIComponent((0, o.getTopWindowUrl)())
            },
            s = e.spec = {
                code: "audienceNetwork",
                supportedMediaTypes: ["banner", "video"],
                isBidRequestValid: function(a) {
                    return "object" === n(a.params) && "string" == typeof a.params.placementId && 0 < a.params.placementId.length && Array.isArray(a.sizes) && 0 < a.sizes.length && (!v(a.params.format) || a.sizes.map(w).every((function(a) {
                        return "300x250" === a
                    }))) && (h(a.params.format) || a.sizes.map(w).some(b))
                },
                buildRequests: function(a) {
                    var t = [],
                        r = [],
                        i = [],
                        o = [],
                        d = [];
                    a.forEach((function(n) {
                        return n.sizes.map(w).filter((function(a) {
                            return e = a, t = n.params.format, v(t) && "300x250" === w(e) || h(t) || b(w(e));
                            var e, t
                        })).slice(0, 1).forEach((function(a) {
                            var e;
                            t.push(n.params.placementId), r.push(n.params.format || a), i.push(a), o.push((e = n.params.format, A(e) ? "" : "5.5.web")), d.push(n.bidId)
                        }))
                    }));
                    var e = Boolean(window && window.location && "string" == typeof window.location.search && -1 !== window.location.search.indexOf("anhb_testmode")).toString(),
                        n = _(),
                        c = {
                            placementids: t,
                            adformats: r,
                            testmode: e,
                            pageurl: n,
                            sdk: o
                        },
                        s = (0, m.default)(r, A);
                    if (-1 !== s) {
                        var f = x(i[s]),
                            l = y(f, 2);
                        c.playerwidth = l[0], c.playerheight = l[1]
                    }
                    var u = (0, p.formatQS)(c);
                    return [{
                        adformats: r,
                        data: u,
                        method: "GET",
                        requestIds: d,
                        sizes: i,
                        url: "https://an.facebook.com/v2/placementbid.json"
                    }]
                },
                interpretResponse: function(a, e) {
                    var t = a.body,
                        b = e.adformats,
                        h = e.requestIds,
                        v = e.sizes,
                        g = Number(i.config.getConfig().bidderTimeout),
                        n = t.bids,
                        r = void 0 === n ? {} : n;
                        console.log(e.sizes);
                    return Object.keys(r).map((function(a) {
                        return r[a]
                    })).reduce((function(a, e) {
                        return a.concat(e)
                    }), []).map((function(a, e) {
                        var t, n, r = a.bid_id,
                            i = a.placement_id,
                            o = a.bid_price_cents,
                            d = b[e],
                            c = x(w(v[e])),
                            s = y(c, 2),
                            f = s[0],
                            l = s[1],
                            u = "<html><head>" + ("native" === (n = d) ? "<style>.thirdPartySubtitleClass,.thirdPartyTitleClass{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical}.thirdPartyRoot{box-sizing:border-box;background-color:#fff;color:#000;font-family:garamond;font-size:14px;line-height:16px;width:728px;height:90px;text-align:left;position:relative;border:ridge;padding:10px}.fbAdIcon{height:60px;width:60px;float:left;margin-right:5px}.fbAdChoice{margin-right:50px}.thirdPartySubtitleClass{font-size:20px;-webkit-line-clamp:1;height:16px;margin-bottom:10px}.thirdPartyTitleClass{padding-right:12px;line-height:18px;font-size:18px;-webkit-line-clamp:2;height:36px}.thirdPartyCallToActionClass{background-color:#000;color:#fff;border-radius:4px;padding:6px 20px;text-align:center;text-transform:uppercase;font-size:11px;position:absolute;bottom:10px;right:10px}</style>" : "") + "</head><body><div style=\"display:none;position:relative;\">\n<script type='text/javascript'>var data = {placementid:'" + (t = i) + "',format:'" + n + "',bidid:'" + r + "',onAdLoaded:function(e){console.log('Audience Network [" + t + "] ad loaded');e.style.display = 'block';},onAdError:function(c,m){console.log('Audience Network [" + t + "] error (' + c + ') ' + m);}};\n(function(a,b,c){var d='https://www.facebook.com',e='https://connect.facebook.net/en_US/fbadnw55.js',f={iframeLoaded:true,xhrLoaded:true},g=a.data,h=function(){if(Date.now){return Date.now();}else return +new Date();},i=function(aa){var ba=d+'/audience_network/client_event',ca={cb:h(),event_name:'ADNW_ADERROR',ad_pivot_type:'audience_network_mobile_web',sdk_version:'5.5.web',app_id:g.placementid.split('_')[0],publisher_id:g.placementid.split('_')[1],error_message:aa},da=[];for(var ea in ca)da.push(encodeURIComponent(ea)+'='+encodeURIComponent(ca[ea]));var fa=ba+'?'+da.join('&'),ga=new XMLHttpRequest();ga.open('GET',fa,true);ga.send();if(g.onAdError)g.onAdError('1000','Internal error.');},j=function(){if(b.currentScript){return b.currentScript;}else{var aa=b.getElementsByTagName('script');return aa[aa.length-1];}},k=function(aa){try{return aa.document.referrer;}catch(ba){}return '';},l=function(){var aa=a,ba=[aa];try{while(aa!==aa.parent&&aa.parent.document)ba.push(aa=aa.parent);}catch(ca){}return ba.reverse();},m=function(){var aa=l();for(var ba=0;ba<aa.length;ba++){var ca=aa[ba],da=ca.ADNW||{};ca.ADNW=da;if(!ca.ADNW)continue;return da.v55=da.v55||{ads:[],window:ca};}throw new Error('no_writable_global');},n=function(aa){var ba=aa.indexOf('/',aa.indexOf('://')+3);if(ba===-1)return aa;return aa.substring(0,ba);},o=function(aa){return aa.location.href||k(aa);},p=function(aa){if(aa.sdkLoaded)return;var ba=aa.window.document,ca=ba.createElement('iframe');ca.name='fbadnw';ca.style.display='none';ba.body.appendChild(ca);var da=ca.contentDocument.createElement('script');da.src=e;da.async=true;ca.contentDocument.body.appendChild(da);aa.sdkLoaded=true;},q=function(aa){var ba=/^https?:\\/\\/www\\.google(\\.com?)?\\.\\w{2,3}$/;return !!aa.match(ba);},r=function(aa){return !!aa.match(/cdn\\.ampproject\\.org$/);},s=function(){var aa=c.ancestorOrigins||[],ba=aa[aa.length-1]||c.origin,ca=aa[aa.length-2]||c.origin;if(q(ba)&&r(ca)){return n(ca);}else return n(ba);},t=function(aa){try{return JSON.parse(aa);}catch(ba){i(ba.message);throw ba;}},u=function(aa,ba,ca){if(!aa.iframe){var da=ca.createElement('iframe');da.src=d+'/audiencenetwork/iframe/';da.style.display='none';ca.body.appendChild(da);aa.iframe=da;aa.iframeAppendedTime=h();aa.iframeData={};}ba.iframe=aa.iframe;ba.iframeData=aa.iframeData;ba.tagJsIframeAppendedTime=aa.iframeAppendedTime||0;},v=function(aa){var ba=d+'/audiencenetwork/xhr/?sdk=5.5.web';for(var ca in aa)if(typeof aa[ca]!=='function')ba+='&'+ca+'='+encodeURIComponent(aa[ca]);var da=new XMLHttpRequest();da.open('GET',ba,true);da.withCredentials=true;da.onreadystatechange=function(){if(da.readyState===4){var ea=t(da.response);aa.events.push({name:'xhrLoaded',source:aa.iframe.contentWindow,data:ea,postMessageTimestamp:h(),receivedTimestamp:h()});}};da.send();},w=function(aa,ba){var ca=d+'/audiencenetwork/xhriframe/?sdk=5.5.web';for(var da in ba)if(typeof ba[da]!=='function')ca+='&'+da+'='+encodeURIComponent(ba[da]);var ea=b.createElement('iframe');ea.src=ca;ea.style.display='none';b.body.appendChild(ea);ba.iframe=ea;ba.iframeData={};ba.tagJsIframeAppendedTime=h();},x=function(aa){var ba=function(event){try{var da=event.data;if(da.name in f)aa.events.push({name:da.name,source:event.source,data:da.data});}catch(ea){}},ca=aa.iframe.contentWindow.parent;ca.addEventListener('message',ba,false);},y=function(aa){if(aa.context&&aa.context.sourceUrl)return true;try{return !!JSON.parse(decodeURI(aa.name)).ampcontextVersion;}catch(ba){return false;}},z=function(aa){var ba=h(),ca=l()[0],da=j().parentElement,ea=ca!=a.top,fa=ca.$sf&&ca.$sf.ext,ga=o(ca),ha=m();p(ha);var ia={amp:y(ca),events:[],tagJsInitTime:ba,rootElement:da,iframe:null,tagJsIframeAppendedTime:ha.iframeAppendedTime||0,url:ga,domain:s(),channel:n(o(ca)),width:screen.width,height:screen.height,pixelratio:a.devicePixelRatio,placementindex:ha.ads.length,crossdomain:ea,safeframe:!!fa,placementid:g.placementid,format:g.format||'300x250',testmode:!!g.testmode,onAdLoaded:g.onAdLoaded,onAdError:g.onAdError};if(g.bidid)ia.bidid=g.bidid;if(ea){w(ha,ia);}else{u(ha,ia,ca.document);v(ia);}; x(ia);ia.rootElement.dataset.placementid=ia.placementid;ha.ads.push(ia);};try{z();}catch(aa){i(aa.message||aa);throw aa;}})(window,document,location);\n<\/script>\n" + ("native" === n ? '<div class="thirdPartyRoot"> <a class="fbAdLink"><div class="fbAdIcon"></div><div class="fbAdSubtitle thirdPartySubtitleClass"></div><div class="fbAdTitle thirdPartyTitleClass"></div><div class="fbAdCallToAction thirdPartyCallToActionClass"></div> </a></div>' : "") + "</div></body></html>",
                            p = {
                                requestId: h[e],
                                cpm: o / 100,
                                width: f,
                                height: l,
                                ad: u,
                                ttl: g,
                                creativeId: i,
                                netRevenue: !0,
                                currency: "USD",
                                hb_bidder: "fan",
                                fb_bidid: r,
                                fb_format: d,
                                fb_placementid: i
                            };
                        if (A(d)) {
                            var m = _();
                            p.mediaType = "video", p.vastUrl = "https://an.facebook.com/v1/instream/vast.xml?placementid=" + i + "&pageurl=" + m + "&playerwidth=" + f + "&playerheight=" + l + "&bidid=" + r
                        }
                        return p
                    }))
                }
            };
        (0, r.registerBidder)(s)
    },
    119: function(a, e) {}
}, [117]);
pbjs.processQueue();
