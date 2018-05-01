/*!
 * jQuery JavaScript Library v2.1.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:01Z
 */
! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = "length" in e && e.length,
            n = Z.type(e);
        return "function" === n || Z.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function r(e, t, n) {
        if (Z.isFunction(t)) return Z.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return Z.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (st.test(t)) return Z.filter(t, e, n);
            t = Z.filter(t, e)
        }
        return Z.grep(e, function(e) {
            return W.call(t, e) >= 0 !== n
        })
    }

    function i(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function o(e) {
        var t = ht[e] = {};
        return Z.each(e.match(pt) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        J.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1), Z.ready()
    }

    function s() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = Z.expando + s.uid++
    }

    function u(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(wt, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : yt.test(n) ? Z.parseJSON(n) : n
                } catch (i) {}
                $t.set(e, t, n)
            } else n = void 0;
        return n
    }

    function l() {
        return !0
    }

    function c() {
        return !1
    }

    function f() {
        try {
            return J.activeElement
        } catch (e) {}
    }

    function d(e, t) {
        return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function p(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function h(e) {
        var t = It.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function g(e, t) {
        for (var n = 0, r = e.length; r > n; n++) mt.set(e[n], "globalEval", !t || mt.get(t[n], "globalEval"))
    }

    function v(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (mt.hasData(e) && (o = mt.access(e), a = mt.set(t, o), l = o.events)) {
                delete a.handle, a.events = {};
                for (i in l)
                    for (n = 0, r = l[i].length; r > n; n++) Z.event.add(t, i, l[i][n])
            }
            $t.hasData(e) && (s = $t.access(e), u = Z.extend({}, s), $t.set(t, u))
        }
    }

    function m(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
    }

    function $(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && kt.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }

    function y(t, n) {
        var r, i = Z(n.createElement(t)).appendTo(n.body),
            o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : Z.css(i[0], "display");
        return i.detach(), o
    }

    function w(e) {
        var t = J,
            n = Rt[e];
        return n || (n = y(e, t), "none" !== n && n || (qt = (qt || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = qt[0].contentDocument, t.write(), t.close(), n = y(e, t), qt.detach()), Rt[e] = n), n
    }

    function b(e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || Vt(e), n && (a = n.getPropertyValue(t) || n[t]), n && ("" !== a || Z.contains(e.ownerDocument, e) || (a = Z.style(e, t)), Ut.test(a) && Ht.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function x(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function C(e, t) {
        if (t in e) return t;
        for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Yt.length; i--;)
            if (t = Yt[i] + n, t in e) return t;
        return r
    }

    function k(e, t, n) {
        var r = zt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function S(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += Z.css(e, n + xt[o], !0, i)), r ? ("content" === n && (a -= Z.css(e, "padding" + xt[o], !0, i)), "margin" !== n && (a -= Z.css(e, "border" + xt[o] + "Width", !0, i))) : (a += Z.css(e, "padding" + xt[o], !0, i), "padding" !== n && (a += Z.css(e, "border" + xt[o] + "Width", !0, i)));
        return a
    }

    function T(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = Vt(e),
            a = "border-box" === Z.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = b(e, t, o), (0 > i || null == i) && (i = e.style[t]), Ut.test(i)) return i;
            r = a && (K.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + S(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function E(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = mt.get(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ct(r) && (o[a] = mt.access(r, "olddisplay", w(r.nodeName)))) : (i = Ct(r), "none" === n && i || mt.set(r, "olddisplay", i ? n : Z.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function A(e, t, n, r, i) {
        return new A.prototype.init(e, t, n, r, i)
    }

    function O() {
        return setTimeout(function() {
            Kt = void 0
        }), Kt = Z.now()
    }

    function P(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = xt[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function D(e, t, n) {
        for (var r, i = (nn[t] || []).concat(nn["*"]), o = 0, a = i.length; a > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function j(e, t, n) {
        var r, i, o, a, s, u, l, c, f = this,
            d = {},
            p = e.style,
            h = e.nodeType && Ct(e),
            g = mt.get(e, "fxshow");
        n.queue || (s = Z._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
            s.unqueued || u()
        }), s.unqueued++, f.always(function() {
            f.always(function() {
                s.unqueued--, Z.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = Z.css(e, "display"), c = "none" === l ? mt.get(e, "olddisplay") || w(e.nodeName) : l, "inline" === c && "none" === Z.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], Qt.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                    if ("show" !== i || !g || void 0 === g[r]) continue;
                    h = !0
                }
                d[r] = g && g[r] || Z.style(e, r)
            } else l = void 0;
        if (Z.isEmptyObject(d)) "inline" === ("none" === l ? w(e.nodeName) : l) && (p.display = l);
        else {
            g ? "hidden" in g && (h = g.hidden) : g = mt.access(e, "fxshow", {}), o && (g.hidden = !h), h ? Z(e).show() : f.done(function() {
                Z(e).hide()
            }), f.done(function() {
                var t;
                mt.remove(e, "fxshow");
                for (t in d) Z.style(e, t, d[t])
            });
            for (r in d) a = D(h ? g[r] : 0, r, f), r in g || (g[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function _(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = Z.camelCase(n), i = t[r], o = e[n], Z.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = Z.cssHooks[r], a && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function F(e, t, n) {
        var r, i, o = 0,
            a = tn.length,
            s = Z.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (i) return !1;
                for (var t = Kt || O(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(o);
                return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1)
            },
            l = s.promise({
                elem: e,
                props: Z.extend({}, t),
                opts: Z.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Kt || O(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = Z.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) l.tweens[n].run(1);
                    return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (_(c, l.opts.specialEasing); a > o; o++)
            if (r = tn[o].call(l, e, c, l.opts)) return r;
        return Z.map(c, D, l), Z.isFunction(l.opts.start) && l.opts.start.call(e, l), Z.fx.timer(Z.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function N(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(pt) || [];
            if (Z.isFunction(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function I(e, t, n, r) {
        function i(s) {
            var u;
            return o[s] = !0, Z.each(e[s] || [], function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }), u
        }
        var o = {},
            a = e === wn;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function L(e, t) {
        var n, r, i = Z.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && Z.extend(!0, e, r), e
    }

    function M(e, t, n) {
        for (var r, i, o, a, s = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break
                }
        if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
    }

    function q(e, t, n, r) {
        var i, o, a, s, u, l = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (a = l[u + " " + o] || l["* " + o], !a)
                for (i in l)
                    if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                        a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (f) {
                    return {
                        state: "parsererror",
                        error: a ? f : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function R(e, t, n, r) {
        var i;
        if (Z.isArray(t)) Z.each(t, function(t, i) {
            n || Sn.test(e) ? r(e, i) : R(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== Z.type(t)) r(e, t);
        else
            for (i in t) R(e + "[" + i + "]", t[i], n, r)
    }

    function H(e) {
        return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var U = [],
        V = U.slice,
        B = U.concat,
        z = U.push,
        W = U.indexOf,
        G = {},
        X = G.toString,
        Y = G.hasOwnProperty,
        K = {},
        J = e.document,
        Q = "2.1.4",
        Z = function(e, t) {
            return new Z.fn.init(e, t)
        },
        et = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        tt = /^-ms-/,
        nt = /-([\da-z])/gi,
        rt = function(e, t) {
            return t.toUpperCase()
        };
    Z.fn = Z.prototype = {
        jquery: Q,
        constructor: Z,
        selector: "",
        length: 0,
        toArray: function() {
            return V.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : V.call(this)
        },
        pushStack: function(e) {
            var t = Z.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return Z.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(Z.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(V.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: z,
        sort: U.sort,
        splice: U.splice
    }, Z.extend = Z.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || Z.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], r = e[t], a !== r && (l && r && (Z.isPlainObject(r) || (i = Z.isArray(r))) ? (i ? (i = !1, o = n && Z.isArray(n) ? n : []) : o = n && Z.isPlainObject(n) ? n : {}, a[t] = Z.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, Z.extend({
        expando: "jQuery" + (Q + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === Z.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            return !Z.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isPlainObject: function(e) {
            return "object" !== Z.type(e) || e.nodeType || Z.isWindow(e) ? !1 : e.constructor && !Y.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? G[X.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            e = Z.trim(e), e && (1 === e.indexOf("use strict") ? (t = J.createElement("script"), t.text = e, J.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(tt, "ms-").replace(nt, rt)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, r) {
            var i, o = 0,
                a = e.length,
                s = n(e);
            if (r) {
                if (s)
                    for (; a > o && (i = t.apply(e[o], r), i !== !1); o++);
                else
                    for (o in e)
                        if (i = t.apply(e[o], r), i === !1) break
            } else if (s)
                for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
            else
                for (o in e)
                    if (i = t.call(e[o], o, e[o]), i === !1) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(et, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? Z.merge(r, "string" == typeof e ? [e] : e) : z.call(r, e)), r
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : W.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++) r = !t(e[o], o), r !== s && i.push(e[o]);
            return i
        },
        map: function(e, t, r) {
            var i, o = 0,
                a = e.length,
                s = n(e),
                u = [];
            if (s)
                for (; a > o; o++) i = t(e[o], o, r), null != i && u.push(i);
            else
                for (o in e) i = t(e[o], o, r), null != i && u.push(i);
            return B.apply([], u)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (n = e[t], t = e, e = n), Z.isFunction(e) ? (r = V.call(arguments, 2), i = function() {
                return e.apply(t || this, r.concat(V.call(arguments)))
            }, i.guid = e.guid = e.guid || Z.guid++, i) : void 0
        },
        now: Date.now,
        support: K
    }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        G["[object " + t + "]"] = t.toLowerCase()
    });
    var it =
        /*!
         * Sizzle CSS Selector Engine v2.2.0-pre
         * http://sizzlejs.com/
         *
         * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2014-12-16
         */
        function(e) {
            function t(e, t, n, r) {
                var i, o, a, s, u, l, f, p, h, g;
                if ((t ? t.ownerDocument || t : R) !== j && D(t), t = t || j, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
                if (!r && F) {
                    if (11 !== s && (i = $t.exec(e)))
                        if (a = i[1]) {
                            if (9 === s) {
                                if (o = t.getElementById(a), !o || !o.parentNode) return n;
                                if (o.id === a) return n.push(o), n
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && M(t, o) && o.id === a) return n.push(o), n
                        } else {
                            if (i[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                            if ((a = i[3]) && b.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(a)), n
                        }
                    if (b.qsa && (!N || !N.test(e))) {
                        if (p = f = q, h = t, g = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                            for (l = S(e), (f = t.getAttribute("id")) ? p = f.replace(wt, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", u = l.length; u--;) l[u] = p + d(l[u]);
                            h = yt.test(e) && c(t.parentNode) || t, g = l.join(",")
                        }
                        if (g) try {
                            return Q.apply(n, h.querySelectorAll(g)), n
                        } catch (v) {} finally {
                            f || t.removeAttribute("id")
                        }
                    }
                }
                return E(e.replace(ut, "$1"), t, n, r)
            }

            function n() {
                function e(n, r) {
                    return t.push(n + " ") > x.cacheLength && delete e[t.shift()], e[n + " "] = r
                }
                var t = [];
                return e
            }

            function r(e) {
                return e[q] = !0, e
            }

            function i(e) {
                var t = j.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function o(e, t) {
                for (var n = e.split("|"), r = e.length; r--;) x.attrHandle[n[r]] = t
            }

            function a(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || G) - (~e.sourceIndex || G);
                if (r) return r;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function s(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function u(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function l(e) {
                return r(function(t) {
                    return t = +t, r(function(n, r) {
                        for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }

            function c(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }

            function f() {}

            function d(e) {
                for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
                return r
            }

            function p(e, t, n) {
                var r = t.dir,
                    i = n && "parentNode" === r,
                    o = U++;
                return t.first ? function(t, n, o) {
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) return e(t, n, o)
                } : function(t, n, a) {
                    var s, u, l = [H, o];
                    if (a) {
                        for (; t = t[r];)
                            if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                    } else
                        for (; t = t[r];)
                            if (1 === t.nodeType || i) {
                                if (u = t[q] || (t[q] = {}), (s = u[r]) && s[0] === H && s[1] === o) return l[2] = s[2];
                                if (u[r] = l, l[2] = e(t, n, a)) return !0
                            }
                }
            }

            function h(e) {
                return e.length > 1 ? function(t, n, r) {
                    for (var i = e.length; i--;)
                        if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function g(e, n, r) {
                for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
                return r
            }

            function v(e, t, n, r, i) {
                for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
                return a
            }

            function m(e, t, n, i, o, a) {
                return i && !i[q] && (i = m(i)), o && !o[q] && (o = m(o, a)), r(function(r, a, s, u) {
                    var l, c, f, d = [],
                        p = [],
                        h = a.length,
                        m = r || g(t || "*", s.nodeType ? [s] : s, []),
                        $ = !e || !r && t ? m : v(m, d, e, s, u),
                        y = n ? o || (r ? e : h || i) ? [] : a : $;
                    if (n && n($, y, s, u), i)
                        for (l = v(y, p), i(l, [], s, u), c = l.length; c--;)(f = l[c]) && (y[p[c]] = !($[p[c]] = f));
                    if (r) {
                        if (o || e) {
                            if (o) {
                                for (l = [], c = y.length; c--;)(f = y[c]) && l.push($[c] = f);
                                o(null, y = [], l, u)
                            }
                            for (c = y.length; c--;)(f = y[c]) && (l = o ? et(r, f) : d[c]) > -1 && (r[l] = !(a[l] = f))
                        }
                    } else y = v(y === a ? y.splice(h, y.length) : y), o ? o(null, a, y, u) : Q.apply(a, y)
                })
            }

            function $(e) {
                for (var t, n, r, i = e.length, o = x.relative[e[0].type], a = o || x.relative[" "], s = o ? 1 : 0, u = p(function(e) {
                        return e === t
                    }, a, !0), l = p(function(e) {
                        return et(t, e) > -1
                    }, a, !0), c = [function(e, n, r) {
                        var i = !o && (r || n !== A) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                        return t = null, i
                    }]; i > s; s++)
                    if (n = x.relative[e[s].type]) c = [p(h(c), n)];
                    else {
                        if (n = x.filter[e[s].type].apply(null, e[s].matches), n[q]) {
                            for (r = ++s; i > r && !x.relative[e[r].type]; r++);
                            return m(s > 1 && h(c), s > 1 && d(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace(ut, "$1"), n, r > s && $(e.slice(s, r)), i > r && $(e = e.slice(r)), i > r && d(e))
                        }
                        c.push(n)
                    }
                return h(c)
            }

            function y(e, n) {
                var i = n.length > 0,
                    o = e.length > 0,
                    a = function(r, a, s, u, l) {
                        var c, f, d, p = 0,
                            h = "0",
                            g = r && [],
                            m = [],
                            $ = A,
                            y = r || o && x.find.TAG("*", l),
                            w = H += null == $ ? 1 : Math.random() || .1,
                            b = y.length;
                        for (l && (A = a !== j && a); h !== b && null != (c = y[h]); h++) {
                            if (o && c) {
                                for (f = 0; d = e[f++];)
                                    if (d(c, a, s)) {
                                        u.push(c);
                                        break
                                    }
                                l && (H = w)
                            }
                            i && ((c = !d && c) && p--, r && g.push(c))
                        }
                        if (p += h, i && h !== p) {
                            for (f = 0; d = n[f++];) d(g, m, a, s);
                            if (r) {
                                if (p > 0)
                                    for (; h--;) g[h] || m[h] || (m[h] = K.call(u));
                                m = v(m)
                            }
                            Q.apply(u, m), l && !r && m.length > 0 && p + n.length > 1 && t.uniqueSort(u)
                        }
                        return l && (H = w, A = $), g
                    };
                return i ? r(a) : a
            }
            var w, b, x, C, k, S, T, E, A, O, P, D, j, _, F, N, I, L, M, q = "sizzle" + 1 * new Date,
                R = e.document,
                H = 0,
                U = 0,
                V = n(),
                B = n(),
                z = n(),
                W = function(e, t) {
                    return e === t && (P = !0), 0
                },
                G = 1 << 31,
                X = {}.hasOwnProperty,
                Y = [],
                K = Y.pop,
                J = Y.push,
                Q = Y.push,
                Z = Y.slice,
                et = function(e, t) {
                    for (var n = 0, r = e.length; r > n; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                tt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                nt = "[\\x20\\t\\r\\n\\f]",
                rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                it = rt.replace("w", "w#"),
                ot = "\\[" + nt + "*(" + rt + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]",
                at = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
                st = new RegExp(nt + "+", "g"),
                ut = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
                lt = new RegExp("^" + nt + "*," + nt + "*"),
                ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
                ft = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
                dt = new RegExp(at),
                pt = new RegExp("^" + it + "$"),
                ht = {
                    ID: new RegExp("^#(" + rt + ")"),
                    CLASS: new RegExp("^\\.(" + rt + ")"),
                    TAG: new RegExp("^(" + rt.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + ot),
                    PSEUDO: new RegExp("^" + at),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + tt + ")$", "i"),
                    needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
                },
                gt = /^(?:input|select|textarea|button)$/i,
                vt = /^h\d$/i,
                mt = /^[^{]+\{\s*\[native \w/,
                $t = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                yt = /[+~]/,
                wt = /'|\\/g,
                bt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
                xt = function(e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                },
                Ct = function() {
                    D()
                };
            try {
                Q.apply(Y = Z.call(R.childNodes), R.childNodes), Y[R.childNodes.length].nodeType
            } catch (kt) {
                Q = {
                    apply: Y.length ? function(e, t) {
                        J.apply(e, Z.call(t))
                    } : function(e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++];);
                        e.length = n - 1
                    }
                }
            }
            b = t.support = {}, k = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, D = t.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : R;
                return r !== j && 9 === r.nodeType && r.documentElement ? (j = r, _ = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ct, !1) : n.attachEvent && n.attachEvent("onunload", Ct)), F = !k(r), b.attributes = i(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), b.getElementsByTagName = i(function(e) {
                    return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
                }), b.getElementsByClassName = mt.test(r.getElementsByClassName), b.getById = i(function(e) {
                    return _.appendChild(e).id = q, !r.getElementsByName || !r.getElementsByName(q).length
                }), b.getById ? (x.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && F) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, x.filter.ID = function(e) {
                    var t = e.replace(bt, xt);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete x.find.ID, x.filter.ID = function(e) {
                    var t = e.replace(bt, xt);
                    return function(e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), x.find.TAG = b.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, x.find.CLASS = b.getElementsByClassName && function(e, t) {
                    return F ? t.getElementsByClassName(e) : void 0
                }, I = [], N = [], (b.qsa = mt.test(r.querySelectorAll)) && (i(function(e) {
                    _.appendChild(e).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + nt + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || N.push("\\[" + nt + "*(?:value|" + tt + ")"), e.querySelectorAll("[id~=" + q + "-]").length || N.push("~="), e.querySelectorAll(":checked").length || N.push(":checked"), e.querySelectorAll("a#" + q + "+*").length || N.push(".#.+[+~]")
                }), i(function(e) {
                    var t = r.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && N.push("name" + nt + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), N.push(",.*:")
                })), (b.matchesSelector = mt.test(L = _.matches || _.webkitMatchesSelector || _.mozMatchesSelector || _.oMatchesSelector || _.msMatchesSelector)) && i(function(e) {
                    b.disconnectedMatch = L.call(e, "div"), L.call(e, "[s!='']:x"), I.push("!=", at)
                }), N = N.length && new RegExp(N.join("|")), I = I.length && new RegExp(I.join("|")), t = mt.test(_.compareDocumentPosition), M = t || mt.test(_.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, W = t ? function(e, t) {
                    if (e === t) return P = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === R && M(R, e) ? -1 : t === r || t.ownerDocument === R && M(R, t) ? 1 : O ? et(O, e) - et(O, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return P = !0, 0;
                    var n, i = 0,
                        o = e.parentNode,
                        s = t.parentNode,
                        u = [e],
                        l = [t];
                    if (!o || !s) return e === r ? -1 : t === r ? 1 : o ? -1 : s ? 1 : O ? et(O, e) - et(O, t) : 0;
                    if (o === s) return a(e, t);
                    for (n = e; n = n.parentNode;) u.unshift(n);
                    for (n = t; n = n.parentNode;) l.unshift(n);
                    for (; u[i] === l[i];) i++;
                    return i ? a(u[i], l[i]) : u[i] === R ? -1 : l[i] === R ? 1 : 0
                }, r) : j
            }, t.matches = function(e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== j && D(e), n = n.replace(ft, "='$1']"), !(!b.matchesSelector || !F || I && I.test(n) || N && N.test(n))) try {
                    var r = L.call(e, n);
                    if (r || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                } catch (i) {}
                return t(n, j, null, [e]).length > 0
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== j && D(e), M(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== j && D(e);
                var n = x.attrHandle[t.toLowerCase()],
                    r = n && X.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !F) : void 0;
                return void 0 !== r ? r : b.attributes || !F ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (P = !b.detectDuplicates, O = !b.sortStable && e.slice(0), e.sort(W), P) {
                    for (; t = e[i++];) t === e[i] && (r = n.push(i));
                    for (; r--;) e.splice(n[r], 1)
                }
                return O = null, e
            }, C = t.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r++];) n += C(t);
                return n
            }, x = t.selectors = {
                cacheLength: 50,
                createPseudo: r,
                match: ht,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(bt, xt), e[3] = (e[3] || e[4] || e[5] || "").replace(bt, xt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return ht.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && dt.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(bt, xt).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = V[e + " "];
                        return t || (t = new RegExp("(^|" + nt + ")" + e + "(" + nt + "|$)")) && V(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, r) {
                        return function(i) {
                            var o = t.attr(i, e);
                            return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(st, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, u) {
                            var l, c, f, d, p, h, g = o !== a ? "nextSibling" : "previousSibling",
                                v = t.parentNode,
                                m = s && t.nodeName.toLowerCase(),
                                $ = !u && !s;
                            if (v) {
                                if (o) {
                                    for (; g;) {
                                        for (f = t; f = f[g];)
                                            if (s ? f.nodeName.toLowerCase() === m : 1 === f.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? v.firstChild : v.lastChild], a && $) {
                                    for (c = v[q] || (v[q] = {}), l = c[e] || [], p = l[0] === H && l[1], d = l[0] === H && l[2], f = p && v.childNodes[p]; f = ++p && f && f[g] || (d = p = 0) || h.pop();)
                                        if (1 === f.nodeType && ++d && f === t) {
                                            c[e] = [H, p, d];
                                            break
                                        }
                                } else if ($ && (l = (t[q] || (t[q] = {}))[e]) && l[0] === H) d = l[1];
                                else
                                    for (;
                                        (f = ++p && f && f[g] || (d = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== m : 1 !== f.nodeType) || !++d || ($ && ((f[q] || (f[q] = {}))[e] = [H, d]), f !== t)););
                                return d -= i, d === r || d % r === 0 && d / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var i, o = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return o[q] ? o(n) : o.length > 1 ? (i = [e, e, "", n], x.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                            for (var r, i = o(e, n), a = i.length; a--;) r = et(e, i[a]), e[r] = !(t[r] = i[a])
                        }) : function(e) {
                            return o(e, 0, i)
                        }) : o
                    }
                },
                pseudos: {
                    not: r(function(e) {
                        var t = [],
                            n = [],
                            i = T(e.replace(ut, "$1"));
                        return i[q] ? r(function(e, t, n, r) {
                            for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, r, o) {
                            return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: r(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: r(function(e) {
                        return e = e.replace(bt, xt),
                            function(t) {
                                return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                            }
                    }),
                    lang: r(function(e) {
                        return pt.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(bt, xt).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = F ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === _
                    },
                    focus: function(e) {
                        return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !x.pseudos.empty(e)
                    },
                    header: function(e) {
                        return vt.test(e.nodeName)
                    },
                    input: function(e) {
                        return gt.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: l(function() {
                        return [0]
                    }),
                    last: l(function(e, t) {
                        return [t - 1]
                    }),
                    eq: l(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: l(function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: l(function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: l(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: l(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }, x.pseudos.nth = x.pseudos.eq;
            for (w in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) x.pseudos[w] = s(w);
            for (w in {
                    submit: !0,
                    reset: !0
                }) x.pseudos[w] = u(w);
            return f.prototype = x.filters = x.pseudos, x.setFilters = new f, S = t.tokenize = function(e, n) {
                var r, i, o, a, s, u, l, c = B[e + " "];
                if (c) return n ? 0 : c.slice(0);
                for (s = e, u = [], l = x.preFilter; s;) {
                    (!r || (i = lt.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = ct.exec(s)) && (r = i.shift(), o.push({
                        value: r,
                        type: i[0].replace(ut, " ")
                    }), s = s.slice(r.length));
                    for (a in x.filter) !(i = ht[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
                        value: r,
                        type: a,
                        matches: i
                    }), s = s.slice(r.length));
                    if (!r) break
                }
                return n ? s.length : s ? t.error(e) : B(e, u).slice(0)
            }, T = t.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    o = z[e + " "];
                if (!o) {
                    for (t || (t = S(e)), n = t.length; n--;) o = $(t[n]), o[q] ? r.push(o) : i.push(o);
                    o = z(e, y(i, r)), o.selector = e
                }
                return o
            }, E = t.select = function(e, t, n, r) {
                var i, o, a, s, u, l = "function" == typeof e && e,
                    f = !r && S(e = l.selector || e);
                if (n = n || [], 1 === f.length) {
                    if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && b.getById && 9 === t.nodeType && F && x.relative[o[1].type]) {
                        if (t = (x.find.ID(a.matches[0].replace(bt, xt), t) || [])[0], !t) return n;
                        l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                    }
                    for (i = ht.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !x.relative[s = a.type]);)
                        if ((u = x.find[s]) && (r = u(a.matches[0].replace(bt, xt), yt.test(o[0].type) && c(t.parentNode) || t))) {
                            if (o.splice(i, 1), e = r.length && d(o), !e) return Q.apply(n, r), n;
                            break
                        }
                }
                return (l || T(e, f))(r, t, !F, n, yt.test(e) && c(t.parentNode) || t), n
            }, b.sortStable = q.split("").sort(W).join("") === q, b.detectDuplicates = !!P, D(), b.sortDetached = i(function(e) {
                return 1 & e.compareDocumentPosition(j.createElement("div"))
            }), i(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function(e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), b.attributes && i(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || o("value", function(e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }), i(function(e) {
                return null == e.getAttribute("disabled")
            }) || o(tt, function(e, t, n) {
                var r;
                return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }), t
        }(e);
    Z.find = it, Z.expr = it.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = it.uniqueSort, Z.text = it.getText, Z.isXMLDoc = it.isXML, Z.contains = it.contains;
    var ot = Z.expr.match.needsContext,
        at = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        st = /^.[^:#\[\.,]*$/;
    Z.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Z.find.matchesSelector(r, e) ? [r] : [] : Z.find.matches(e, Z.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, Z.fn.extend({
        find: function(e) {
            var t, n = this.length,
                r = [],
                i = this;
            if ("string" != typeof e) return this.pushStack(Z(e).filter(function() {
                for (t = 0; n > t; t++)
                    if (Z.contains(i[t], this)) return !0
            }));
            for (t = 0; n > t; t++) Z.find(e, i[t], r);
            return r = this.pushStack(n > 1 ? Z.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && ot.test(e) ? Z(e) : e || [], !1).length
        }
    });
    var ut, lt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ct = Z.fn.init = function(e, t) {
            var n, r;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : lt.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || ut).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : J, !0)), at.test(n[1]) && Z.isPlainObject(t))
                        for (n in t) Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return r = J.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = J, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Z.isFunction(e) ? "undefined" != typeof ut.ready ? ut.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
        };
    ct.prototype = Z.fn, ut = Z(J);
    var ft = /^(?:parents|prev(?:Until|All))/,
        dt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    Z.extend({
        dir: function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && Z(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), Z.fn.extend({
        has: function(e) {
            var t = Z(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++)
                    if (Z.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = ot.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? Z.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? W.call(Z(e), this[0]) : W.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), Z.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return Z.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return Z.dir(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return Z.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return Z.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return Z.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return Z.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return Z.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Z.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || Z.merge([], e.childNodes)
        }
    }, function(e, t) {
        Z.fn[e] = function(n, r) {
            var i = Z.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = Z.filter(r, i)), this.length > 1 && (dt[e] || Z.unique(i), ft.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var pt = /\S+/g,
        ht = {};
    Z.Callbacks = function(e) {
        e = "string" == typeof e ? ht[e] || o(e) : Z.extend({}, e);
        var t, n, r, i, a, s, u = [],
            l = !e.once && [],
            c = function(o) {
                for (t = e.memory && o, n = !0, s = i || 0, i = 0, a = u.length, r = !0; u && a > s; s++)
                    if (u[s].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                        t = !1;
                        break
                    }
                r = !1, u && (l ? l.length && c(l.shift()) : t ? u = [] : f.disable())
            },
            f = {
                add: function() {
                    if (u) {
                        var n = u.length;
                        ! function o(t) {
                            Z.each(t, function(t, n) {
                                var r = Z.type(n);
                                "function" === r ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
                            })
                        }(arguments), r ? a = u.length : t && (i = n, c(t))
                    }
                    return this
                },
                remove: function() {
                    return u && Z.each(arguments, function(e, t) {
                        for (var n;
                            (n = Z.inArray(t, u, n)) > -1;) u.splice(n, 1), r && (a >= n && a--, s >= n && s--)
                    }), this
                },
                has: function(e) {
                    return e ? Z.inArray(e, u) > -1 : !(!u || !u.length)
                },
                empty: function() {
                    return u = [], a = 0, this
                },
                disable: function() {
                    return u = l = t = void 0, this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return l = void 0, t || f.disable(), this
                },
                locked: function() {
                    return !l
                },
                fireWith: function(e, t) {
                    return !u || n && !l || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? l.push(t) : c(t)), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return f
    }, Z.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", Z.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", Z.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", Z.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return Z.Deferred(function(n) {
                            Z.each(t, function(t, o) {
                                var a = Z.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? Z.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, Z.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t, n, r, i = 0,
                o = V.call(arguments),
                a = o.length,
                s = 1 !== a || e && Z.isFunction(e.promise) ? a : 0,
                u = 1 === s ? e : Z.Deferred(),
                l = function(e, n, r) {
                    return function(i) {
                        n[e] = this, r[e] = arguments.length > 1 ? V.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && Z.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
            return s || u.resolveWith(r, o), u.promise()
        }
    });
    var gt;
    Z.fn.ready = function(e) {
        return Z.ready.promise().done(e), this
    }, Z.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? Z.readyWait++ : Z.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, e !== !0 && --Z.readyWait > 0 || (gt.resolveWith(J, [Z]), Z.fn.triggerHandler && (Z(J).triggerHandler("ready"), Z(J).off("ready"))))
        }
    }), Z.ready.promise = function(t) {
        return gt || (gt = Z.Deferred(), "complete" === J.readyState ? setTimeout(Z.ready) : (J.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1))), gt.promise(t)
    }, Z.ready.promise();
    var vt = Z.access = function(e, t, n, r, i, o, a) {
        var s = 0,
            u = e.length,
            l = null == n;
        if ("object" === Z.type(n)) {
            i = !0;
            for (s in n) Z.access(e, t, s, n[s], !0, o, a)
        } else if (void 0 !== r && (i = !0, Z.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                return l.call(Z(e), n)
            })), t))
            for (; u > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    };
    Z.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, s.uid = 1, s.accepts = Z.acceptData, s.prototype = {
        key: function(e) {
            if (!s.accepts(e)) return 0;
            var t = {},
                n = e[this.expando];
            if (!n) {
                n = s.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    }, Object.defineProperties(e, t)
                } catch (r) {
                    t[this.expando] = n, Z.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function(e, t, n) {
            var r, i = this.key(e),
                o = this.cache[i];
            if ("string" == typeof t) o[t] = n;
            else if (Z.isEmptyObject(o)) Z.extend(this.cache[i], t);
            else
                for (r in t) o[r] = t[r];
            return o
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        },
        access: function(e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, Z.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r, i, o = this.key(e),
                a = this.cache[o];
            if (void 0 === t) this.cache[o] = {};
            else {
                Z.isArray(t) ? r = t.concat(t.map(Z.camelCase)) : (i = Z.camelCase(t), t in a ? r = [t, i] : (r = i, r = r in a ? [r] : r.match(pt) || [])), n = r.length;
                for (; n--;) delete a[r[n]]
            }
        },
        hasData: function(e) {
            return !Z.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var mt = new s,
        $t = new s,
        yt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        wt = /([A-Z])/g;
    Z.extend({
        hasData: function(e) {
            return $t.hasData(e) || mt.hasData(e)
        },
        data: function(e, t, n) {
            return $t.access(e, t, n)
        },
        removeData: function(e, t) {
            $t.remove(e, t)
        },
        _data: function(e, t, n) {
            return mt.access(e, t, n)
        },
        _removeData: function(e, t) {
            mt.remove(e, t)
        }
    }), Z.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = $t.get(o), 1 === o.nodeType && !mt.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = Z.camelCase(r.slice(5)), u(o, r, i[r])));
                    mt.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                $t.set(this, e)
            }) : vt(this, function(t) {
                var n, r = Z.camelCase(e);
                if (o && void 0 === t) {
                    if (n = $t.get(o, e), void 0 !== n) return n;
                    if (n = $t.get(o, r), void 0 !== n) return n;
                    if (n = u(o, r, void 0), void 0 !== n) return n
                } else this.each(function() {
                    var n = $t.get(this, r);
                    $t.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && $t.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                $t.remove(this, e)
            })
        }
    }), Z.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = mt.get(e, t), n && (!r || Z.isArray(n) ? r = mt.access(e, t, Z.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = Z.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = Z._queueHooks(e, t),
                a = function() {
                    Z.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return mt.get(e, n) || mt.access(e, n, {
                empty: Z.Callbacks("once memory").add(function() {
                    mt.remove(e, [t + "queue", n])
                })
            })
        }
    }), Z.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = Z.queue(this, e, t);
                Z._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                Z.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = Z.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = mt.get(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var bt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        xt = ["Top", "Right", "Bottom", "Left"],
        Ct = function(e, t) {
            return e = t || e, "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
        },
        kt = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = J.createDocumentFragment(),
            t = e.appendChild(J.createElement("div")),
            n = J.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), K.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", K.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var St = "undefined";
    K.focusinBubbles = "onfocusin" in e;
    var Tt = /^key/,
        Et = /^(?:mouse|pointer|contextmenu)|click/,
        At = /^(?:focusinfocus|focusoutblur)$/,
        Ot = /^([^.]*)(?:\.(.+)|)$/;
    Z.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, d, p, h, g, v = mt.get(e);
            if (v)
                for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = Z.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function(t) {
                        return typeof Z !== St && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(pt) || [""], l = t.length; l--;) s = Ot.exec(t[l]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p && (f = Z.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = Z.event.special[p] || {}, c = Z.extend({
                    type: p,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && Z.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (d = u[p]) || (d = u[p] = [], d.delegateCount = 0, f.setup && f.setup.call(e, r, h, a) !== !1 || e.addEventListener && e.addEventListener(p, a, !1)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), Z.event.global[p] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, d, p, h, g, v = mt.hasData(e) && mt.get(e);
            if (v && (u = v.events)) {
                for (t = (t || "").match(pt) || [""], l = t.length; l--;)
                    if (s = Ot.exec(t[l]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (f = Z.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, d = u[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) c = d[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !d.length && (f.teardown && f.teardown.call(e, h, v.handle) !== !1 || Z.removeEvent(e, p, v.handle), delete u[p])
                    } else
                        for (p in u) Z.event.remove(e, p + t[l], n, r, !0);
                Z.isEmptyObject(u) && (delete v.handle, mt.remove(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var o, a, s, u, l, c, f, d = [r || J],
                p = Y.call(t, "type") ? t.type : t,
                h = Y.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = r = r || J, 3 !== r.nodeType && 8 !== r.nodeType && !At.test(p + Z.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), l = p.indexOf(":") < 0 && "on" + p, t = t[Z.expando] ? t : new Z.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : Z.makeArray(n, [t]), f = Z.event.special[p] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                if (!i && !f.noBubble && !Z.isWindow(r)) {
                    for (u = f.delegateType || p, At.test(u + p) || (a = a.parentNode); a; a = a.parentNode) d.push(a), s = a;
                    s === (r.ownerDocument || J) && d.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0;
                    (a = d[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || p, c = (mt.get(a, "events") || {})[t.type] && mt.get(a, "handle"), c && c.apply(a, n), c = l && a[l], c && c.apply && Z.acceptData(a) && (t.result = c.apply(a, n), t.result === !1 && t.preventDefault());
                return t.type = p, i || t.isDefaultPrevented() || f._default && f._default.apply(d.pop(), n) !== !1 || !Z.acceptData(r) || l && Z.isFunction(r[p]) && !Z.isWindow(r) && (s = r[l], s && (r[l] = null), Z.event.triggered = p, r[p](), Z.event.triggered = void 0, s && (r[l] = s)), t.result
            }
        },
        dispatch: function(e) {
            e = Z.event.fix(e);
            var t, n, r, i, o, a = [],
                s = V.call(arguments),
                u = (mt.get(this, "events") || {})[e.type] || [],
                l = Z.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (a = Z.event.handlers.call(this, e, u), t = 0;
                    (i = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, r = ((Z.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a = [],
                s = t.delegateCount,
                u = e.target;
            if (s && u.nodeType && (!e.button || "click" !== e.type))
                for (; u !== this; u = u.parentNode || this)
                    if (u.disabled !== !0 || "click" !== e.type) {
                        for (r = [], n = 0; s > n; n++) o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? Z(i, this).index(u) >= 0 : Z.find(i, this, null, [u]).length), r[i] && r.push(o);
                        r.length && a.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || J, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[Z.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Et.test(i) ? this.mouseHooks : Tt.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new Z.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = J), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== f() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return Z.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = Z.extend(new Z.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? Z.event.trigger(i, null, t) : Z.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, Z.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, Z.Event = function(e, t) {
        return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? l : c) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(e, t)
    }, Z.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = l, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = l, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = l, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, Z.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        Z.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !Z.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), K.focusinBubbles || Z.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            Z.event.simulate(t, e.target, Z.event.fix(e), !0)
        };
        Z.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = mt.access(r, t);
                i || r.addEventListener(e, n, !0), mt.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = mt.access(r, t) - 1;
                i ? mt.access(r, t, i) : (r.removeEventListener(e, n, !0), mt.remove(r, t))
            }
        }
    }), Z.fn.extend({
        on: function(e, t, n, r, i) {
            var o, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (a in e) this.on(a, t, n, e[a], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = c;
            else if (!r) return this;
            return 1 === i && (o = r, r = function(e) {
                return Z().off(e), o.apply(this, arguments)
            }, r.guid = o.guid || (o.guid = Z.guid++)), this.each(function() {
                Z.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, Z(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = c), this.each(function() {
                Z.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                Z.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? Z.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Pt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Dt = /<([\w:]+)/,
        jt = /<|&#?\w+;/,
        _t = /<(?:script|style|link)/i,
        Ft = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Nt = /^$|\/(?:java|ecma)script/i,
        It = /^true\/(.*)/,
        Lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Mt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Mt.optgroup = Mt.option, Mt.tbody = Mt.tfoot = Mt.colgroup = Mt.caption = Mt.thead, Mt.th = Mt.td, Z.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0),
                u = Z.contains(e.ownerDocument, e);
            if (!(K.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e)))
                for (a = m(s), o = m(e), r = 0, i = o.length; i > r; r++) $(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || m(e), a = a || m(s), r = 0, i = o.length; i > r; r++) v(o[r], a[r]);
                else v(e, s);
            return a = m(s, "script"), a.length > 0 && g(a, !u && m(e, "script")), s
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, a, s, u, l, c = t.createDocumentFragment(), f = [], d = 0, p = e.length; p > d; d++)
                if (i = e[d], i || 0 === i)
                    if ("object" === Z.type(i)) Z.merge(f, i.nodeType ? [i] : i);
                    else if (jt.test(i)) {
                for (o = o || c.appendChild(t.createElement("div")), a = (Dt.exec(i) || ["", ""])[1].toLowerCase(), s = Mt[a] || Mt._default, o.innerHTML = s[1] + i.replace(Pt, "<$1></$2>") + s[2], l = s[0]; l--;) o = o.lastChild;
                Z.merge(f, o.childNodes), o = c.firstChild, o.textContent = ""
            } else f.push(t.createTextNode(i));
            for (c.textContent = "", d = 0; i = f[d++];)
                if ((!r || -1 === Z.inArray(i, r)) && (u = Z.contains(i.ownerDocument, i), o = m(c.appendChild(i), "script"), u && g(o), n))
                    for (l = 0; i = o[l++];) Nt.test(i.type || "") && n.push(i);
            return c
        },
        cleanData: function(e) {
            for (var t, n, r, i, o = Z.event.special, a = 0; void 0 !== (n = e[a]); a++) {
                if (Z.acceptData(n) && (i = n[mt.expando], i && (t = mt.cache[i]))) {
                    if (t.events)
                        for (r in t.events) o[r] ? Z.event.remove(n, r) : Z.removeEvent(n, r, t.handle);
                    mt.cache[i] && delete mt.cache[i]
                }
                delete $t.cache[n[$t.expando]]
            }
        }
    }), Z.fn.extend({
        text: function(e) {
            return vt(this, function(e) {
                return void 0 === e ? Z.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = d(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = d(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? Z.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || Z.cleanData(m(n)), n.parentNode && (t && Z.contains(n.ownerDocument, n) && g(m(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Z.cleanData(m(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return Z.clone(this, e, t)
            })
        },
        html: function(e) {
            return vt(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !_t.test(e) && !Mt[(Dt.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Pt, "<$1></$2>");
                    try {
                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (Z.cleanData(m(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, Z.cleanData(m(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = B.apply([], e);
            var n, r, i, o, a, s, u = 0,
                l = this.length,
                c = this,
                f = l - 1,
                d = e[0],
                g = Z.isFunction(d);
            if (g || l > 1 && "string" == typeof d && !K.checkClone && Ft.test(d)) return this.each(function(n) {
                var r = c.eq(n);
                g && (e[0] = d.call(this, n, r.html())), r.domManip(e, t)
            });
            if (l && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
                for (i = Z.map(m(n, "script"), p), o = i.length; l > u; u++) a = n, u !== f && (a = Z.clone(a, !0, !0), o && Z.merge(i, m(a, "script"))), t.call(this[u], a, u);
                if (o)
                    for (s = i[i.length - 1].ownerDocument, Z.map(i, h), u = 0; o > u; u++) a = i[u], Nt.test(a.type || "") && !mt.access(a, "globalEval") && Z.contains(s, a) && (a.src ? Z._evalUrl && Z._evalUrl(a.src) : Z.globalEval(a.textContent.replace(Lt, "")))
            }
            return this
        }
    }), Z.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        Z.fn[e] = function(e) {
            for (var n, r = [], i = Z(e), o = i.length - 1, a = 0; o >= a; a++) n = a === o ? this : this.clone(!0), Z(i[a])[t](n), z.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var qt, Rt = {},
        Ht = /^margin/,
        Ut = new RegExp("^(" + bt + ")(?!px)[a-z%]+$", "i"),
        Vt = function(t) {
            return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
        };
    ! function() {
        function t() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", i.appendChild(o);
            var t = e.getComputedStyle(a, null);
            n = "1%" !== t.top, r = "4px" === t.width, i.removeChild(o)
        }
        var n, r, i = J.documentElement,
            o = J.createElement("div"),
            a = J.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", K.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(a), e.getComputedStyle && Z.extend(K, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return null == r && t(), r
            },
            reliableMarginRight: function() {
                var t, n = a.appendChild(J.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", i.appendChild(o), t = !parseFloat(e.getComputedStyle(n, null).marginRight), i.removeChild(o), a.removeChild(n), t
            }
        }))
    }(), Z.swap = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t) a[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t) e.style[o] = a[o];
        return i
    };
    var Bt = /^(none|table(?!-c[ea]).+)/,
        zt = new RegExp("^(" + bt + ")(.*)$", "i"),
        Wt = new RegExp("^([+-])=(" + bt + ")", "i"),
        Gt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Xt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Yt = ["Webkit", "O", "Moz", "ms"];
    Z.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = b(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = Z.camelCase(t),
                    u = e.style;
                return t = Z.cssProps[s] || (Z.cssProps[s] = C(u, s)), a = Z.cssHooks[t] || Z.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t] : (o = typeof n, "string" === o && (i = Wt.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(Z.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || Z.cssNumber[s] || (n += "px"), K.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u[t] = n)), void 0)
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = Z.camelCase(t);
            return t = Z.cssProps[s] || (Z.cssProps[s] = C(e.style, s)), a = Z.cssHooks[t] || Z.cssHooks[s], a && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = b(e, t, r)), "normal" === i && t in Xt && (i = Xt[t]), "" === n || n ? (o = parseFloat(i), n === !0 || Z.isNumeric(o) ? o || 0 : i) : i
        }
    }), Z.each(["height", "width"], function(e, t) {
        Z.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? Bt.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Gt, function() {
                    return T(e, t, r)
                }) : T(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i = r && Vt(e);
                return k(e, n, r ? S(e, t, r, "border-box" === Z.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), Z.cssHooks.marginRight = x(K.reliableMarginRight, function(e, t) {
        return t ? Z.swap(e, {
            display: "inline-block"
        }, b, [e, "marginRight"]) : void 0
    }), Z.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        Z.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + xt[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Ht.test(e) || (Z.cssHooks[e + t].set = k)
    }), Z.fn.extend({
        css: function(e, t) {
            return vt(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Z.isArray(t)) {
                    for (r = Vt(e), i = t.length; i > a; a++) o[t[a]] = Z.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return E(this, !0)
        },
        hide: function() {
            return E(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Ct(this) ? Z(this).show() : Z(this).hide()
            })
        }
    }), Z.Tween = A, A.prototype = {
        constructor: A,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (Z.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = A.propHooks[this.prop];
            return e && e.get ? e.get(this) : A.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = A.propHooks[this.prop];
            return this.pos = t = this.options.duration ? Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : A.propHooks._default.set(this), this
        }
    }, A.prototype.init.prototype = A.prototype, A.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, A.propHooks.scrollTop = A.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, Z.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, Z.fx = A.prototype.init, Z.fx.step = {};
    var Kt, Jt, Qt = /^(?:toggle|show|hide)$/,
        Zt = new RegExp("^(?:([+-])=|)(" + bt + ")([a-z%]*)$", "i"),
        en = /queueHooks$/,
        tn = [j],
        nn = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = Zt.exec(t),
                    o = i && i[3] || (Z.cssNumber[e] ? "" : "px"),
                    a = (Z.cssNumber[e] || "px" !== o && +r) && Zt.exec(Z.css(n.elem, e)),
                    s = 1,
                    u = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], i = i || [], a = +r || 1;
                    do s = s || ".5", a /= s, Z.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --u)
                }
                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    Z.Animation = Z.extend(F, {
            tweener: function(e, t) {
                Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, i = e.length; i > r; r++) n = e[r], nn[n] = nn[n] || [], nn[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? tn.unshift(e) : tn.push(e)
            }
        }), Z.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? Z.extend({}, e) : {
                complete: n || !n && t || Z.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !Z.isFunction(t) && t
            };
            return r.duration = Z.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Z.fx.speeds ? Z.fx.speeds[r.duration] : Z.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                Z.isFunction(r.old) && r.old.call(this), r.queue && Z.dequeue(this, r.queue)
            }, r
        }, Z.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(Ct).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = Z.isEmptyObject(e),
                    o = Z.speed(t, n, r),
                    a = function() {
                        var t = F(this, Z.extend({}, e), o);
                        (i || mt.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = Z.timers,
                        a = mt.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && en.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    (t || !n) && Z.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = mt.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = Z.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, Z.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), Z.each(["toggle", "show", "hide"], function(e, t) {
            var n = Z.fn[t];
            Z.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(P(t, !0), e, r, i)
            }
        }), Z.each({
            slideDown: P("show"),
            slideUp: P("hide"),
            slideToggle: P("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            Z.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), Z.timers = [], Z.fx.tick = function() {
            var e, t = 0,
                n = Z.timers;
            for (Kt = Z.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || Z.fx.stop(), Kt = void 0
        }, Z.fx.timer = function(e) {
            Z.timers.push(e), e() ? Z.fx.start() : Z.timers.pop()
        }, Z.fx.interval = 13, Z.fx.start = function() {
            Jt || (Jt = setInterval(Z.fx.tick, Z.fx.interval))
        }, Z.fx.stop = function() {
            clearInterval(Jt), Jt = null
        }, Z.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, Z.fn.delay = function(e, t) {
            return e = Z.fx ? Z.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        function() {
            var e = J.createElement("input"),
                t = J.createElement("select"),
                n = t.appendChild(J.createElement("option"));
            e.type = "checkbox", K.checkOn = "" !== e.value, K.optSelected = n.selected, t.disabled = !0, K.optDisabled = !n.disabled, e = J.createElement("input"), e.value = "t", e.type = "radio", K.radioValue = "t" === e.value
        }();
    var rn, on, an = Z.expr.attrHandle;
    Z.fn.extend({
        attr: function(e, t) {
            return vt(this, Z.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                Z.removeAttr(this, e)
            })
        }
    }), Z.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === St ? Z.prop(e, t, n) : (1 === o && Z.isXMLDoc(e) || (t = t.toLowerCase(), r = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? on : rn)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = Z.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void Z.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(pt);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!K.radioValue && "radio" === t && Z.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), on = {
        set: function(e, t, n) {
            return t === !1 ? Z.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = an[t] || Z.find.attr;
        an[t] = function(e, t, r) {
            var i, o;
            return r || (o = an[t], an[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, an[t] = o), i
        }
    });
    var sn = /^(?:input|select|textarea|button)$/i;
    Z.fn.extend({
        prop: function(e, t) {
            return vt(this, Z.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[Z.propFix[e] || e]
            })
        }
    }), Z.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var r, i, o, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !Z.isXMLDoc(e), o && (t = Z.propFix[t] || t, i = Z.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || sn.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), K.optSelected || (Z.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        Z.propFix[this.toLowerCase()] = this
    });
    var un = /[\t\r\n\f]/g;
    Z.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s = "string" == typeof e && e,
                u = 0,
                l = this.length;
            if (Z.isFunction(e)) return this.each(function(t) {
                Z(this).addClass(e.call(this, t, this.className))
            });
            if (s)
                for (t = (e || "").match(pt) || []; l > u; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(un, " ") : " ")) {
                        for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        a = Z.trim(r), n.className !== a && (n.className = a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s = 0 === arguments.length || "string" == typeof e && e,
                u = 0,
                l = this.length;
            if (Z.isFunction(e)) return this.each(function(t) {
                Z(this).removeClass(e.call(this, t, this.className))
            });
            if (s)
                for (t = (e || "").match(pt) || []; l > u; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(un, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        a = e ? Z.trim(r) : "", n.className !== a && (n.className = a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(Z.isFunction(e) ? function(n) {
                Z(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n)
                    for (var t, r = 0, i = Z(this), o = e.match(pt) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else(n === St || "boolean" === n) && (this.className && mt.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : mt.get(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(un, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    });
    var ln = /\r/g;
    Z.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0]; {
                if (arguments.length) return r = Z.isFunction(e), this.each(function(n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, Z(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Z.isArray(i) && (i = Z.map(i, function(e) {
                        return null == e ? "" : e + ""
                    })), t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i) return t = Z.valHooks[i.type] || Z.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(ln, "") : null == n ? "" : n)
            }
        }
    }), Z.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = Z.find.attr(e, "value");
                    return null != t ? t : Z.trim(Z.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++)
                        if (n = r[u], !(!n.selected && u !== i || (K.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Z.nodeName(n.parentNode, "optgroup"))) {
                            if (t = Z(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = Z.makeArray(t), a = i.length; a--;) r = i[a], (r.selected = Z.inArray(r.value, o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), Z.each(["radio", "checkbox"], function() {
        Z.valHooks[this] = {
            set: function(e, t) {
                return Z.isArray(t) ? e.checked = Z.inArray(Z(e).val(), t) >= 0 : void 0
            }
        }, K.checkOn || (Z.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        Z.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), Z.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var cn = Z.now(),
        fn = /\?/;
    Z.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, Z.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            n = new DOMParser, t = n.parseFromString(e, "text/xml")
        } catch (r) {
            t = void 0
        }
        return (!t || t.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + e), t
    };
    var dn = /#.*$/,
        pn = /([?&])_=[^&]*/,
        hn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        gn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        vn = /^(?:GET|HEAD)$/,
        mn = /^\/\//,
        $n = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        yn = {},
        wn = {},
        bn = "*/".concat("*"),
        xn = e.location.href,
        Cn = $n.exec(xn.toLowerCase()) || [];
    Z.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: xn,
            type: "GET",
            isLocal: gn.test(Cn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": bn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": Z.parseJSON,
                "text xml": Z.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? L(L(e, Z.ajaxSettings), t) : L(Z.ajaxSettings, e)
        },
        ajaxPrefilter: N(yn),
        ajaxTransport: N(wn),
        ajax: function(e, t) {
            function n(e, t, n, a) {
                var u, c, m, $, w, x = t;
                2 !== y && (y = 2, s && clearTimeout(s), r = void 0, o = a || "", b.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, n && ($ = M(f, b, n)), $ = q(f, $, b, u), u ? (f.ifModified && (w = b.getResponseHeader("Last-Modified"), w && (Z.lastModified[i] = w), w = b.getResponseHeader("etag"), w && (Z.etag[i] = w)), 204 === e || "HEAD" === f.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = $.state, c = $.data, m = $.error, u = !m)) : (m = x, (e || !x) && (x = "error", 0 > e && (e = 0))), b.status = e, b.statusText = (t || x) + "", u ? h.resolveWith(d, [c, x, b]) : h.rejectWith(d, [b, x, m]), b.statusCode(v), v = void 0, l && p.trigger(u ? "ajaxSuccess" : "ajaxError", [b, f, u ? c : m]), g.fireWith(d, [b, x]), l && (p.trigger("ajaxComplete", [b, f]), --Z.active || Z.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var r, i, o, a, s, u, l, c, f = Z.ajaxSetup({}, t),
                d = f.context || f,
                p = f.context && (d.nodeType || d.jquery) ? Z(d) : Z.event,
                h = Z.Deferred(),
                g = Z.Callbacks("once memory"),
                v = f.statusCode || {},
                m = {},
                $ = {},
                y = 0,
                w = "canceled",
                b = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === y) {
                            if (!a)
                                for (a = {}; t = hn.exec(o);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === y ? o : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return y || (e = $[n] = $[n] || e, m[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return y || (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > y)
                                for (t in e) v[t] = [v[t], e[t]];
                            else b.always(e[b.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return r && r.abort(t), n(0, t), this
                    }
                };
            if (h.promise(b).complete = g.add, b.success = b.done, b.error = b.fail, f.url = ((e || f.url || xn) + "").replace(dn, "").replace(mn, Cn[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = Z.trim(f.dataType || "*").toLowerCase().match(pt) || [""], null == f.crossDomain && (u = $n.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === Cn[1] && u[2] === Cn[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (Cn[3] || ("http:" === Cn[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = Z.param(f.data, f.traditional)), I(yn, f, t, b), 2 === y) return b;
            l = Z.event && f.global, l && 0 === Z.active++ && Z.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !vn.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (fn.test(i) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = pn.test(i) ? i.replace(pn, "$1_=" + cn++) : i + (fn.test(i) ? "&" : "?") + "_=" + cn++)), f.ifModified && (Z.lastModified[i] && b.setRequestHeader("If-Modified-Since", Z.lastModified[i]), Z.etag[i] && b.setRequestHeader("If-None-Match", Z.etag[i])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && b.setRequestHeader("Content-Type", f.contentType), b.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + bn + "; q=0.01" : "") : f.accepts["*"]);
            for (c in f.headers) b.setRequestHeader(c, f.headers[c]);
            if (f.beforeSend && (f.beforeSend.call(d, b, f) === !1 || 2 === y)) return b.abort();
            w = "abort";
            for (c in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) b[c](f[c]);
            if (r = I(wn, f, t, b)) {
                b.readyState = 1, l && p.trigger("ajaxSend", [b, f]), f.async && f.timeout > 0 && (s = setTimeout(function() {
                    b.abort("timeout")
                }, f.timeout));
                try {
                    y = 1, r.send(m, n)
                } catch (x) {
                    if (!(2 > y)) throw x;
                    n(-1, x)
                }
            } else n(-1, "No Transport");
            return b
        },
        getJSON: function(e, t, n) {
            return Z.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return Z.get(e, void 0, t, "script")
        }
    }), Z.each(["get", "post"], function(e, t) {
        Z[t] = function(e, n, r, i) {
            return Z.isFunction(n) && (i = i || r, r = n, n = void 0), Z.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), Z._evalUrl = function(e) {
        return Z.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, Z.fn.extend({
        wrapAll: function(e) {
            var t;
            return Z.isFunction(e) ? this.each(function(t) {
                Z(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return this.each(Z.isFunction(e) ? function(t) {
                Z(this).wrapInner(e.call(this, t))
            } : function() {
                var t = Z(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = Z.isFunction(e);
            return this.each(function(n) {
                Z(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
            }).end()
        }
    }), Z.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, Z.expr.filters.visible = function(e) {
        return !Z.expr.filters.hidden(e)
    };
    var kn = /%20/g,
        Sn = /\[\]$/,
        Tn = /\r?\n/g,
        En = /^(?:submit|button|image|reset|file)$/i,
        An = /^(?:input|select|textarea|keygen)/i;
    Z.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                t = Z.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e)) Z.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) R(n, e[n], t, i);
        return r.join("&").replace(kn, "+")
    }, Z.fn.extend({
        serialize: function() {
            return Z.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = Z.prop(this, "elements");
                return e ? Z.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !Z(this).is(":disabled") && An.test(this.nodeName) && !En.test(e) && (this.checked || !kt.test(e))
            }).map(function(e, t) {
                var n = Z(this).val();
                return null == n ? null : Z.isArray(n) ? Z.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Tn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Tn, "\r\n")
                }
            }).get()
        }
    }), Z.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var On = 0,
        Pn = {},
        Dn = {
            0: 200,
            1223: 204
        },
        jn = Z.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in Pn) Pn[e]()
    }), K.cors = !!jn && "withCredentials" in jn, K.ajax = jn = !!jn, Z.ajaxTransport(function(e) {
        var t;
        return K.cors || jn && !e.crossDomain ? {
            send: function(n, r) {
                var i, o = e.xhr(),
                    a = ++On;
                if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (i in e.xhrFields) o[i] = e.xhrFields[i];
                e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (i in n) o.setRequestHeader(i, n[i]);
                t = function(e) {
                    return function() {
                        t && (delete Pn[a], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(Dn[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                            text: o.responseText
                        } : void 0, o.getAllResponseHeaders()))
                    }
                }, o.onload = t(), o.onerror = t("error"), t = Pn[a] = t("abort");
                try {
                    o.send(e.hasContent && e.data || null)
                } catch (s) {
                    if (t) throw s
                }
            },
            abort: function() {
                t && t()
            }
        } : void 0
    }), Z.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return Z.globalEval(e), e
            }
        }
    }), Z.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), Z.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(r, i) {
                    t = Z("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), J.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var _n = [],
        Fn = /(=)\?(?=&|$)|\?\?/;
    Z.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = _n.pop() || Z.expando + "_" + cn++;
            return this[e] = !0, e
        }
    }), Z.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = t.jsonp !== !1 && (Fn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Fn.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Fn, "$1" + i) : t.jsonp !== !1 && (t.url += (fn.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return a || Z.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            a = arguments
        }, r.always(function() {
            e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, _n.push(i)), a && Z.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), Z.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || J;
        var r = at.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = Z.buildFragment([e], t, i), i && i.length && Z(i).remove(), Z.merge([], r.childNodes))
    };
    var Nn = Z.fn.load;
    Z.fn.load = function(e, t, n) {
        if ("string" != typeof e && Nn) return Nn.apply(this, arguments);
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s >= 0 && (r = Z.trim(e.slice(s)), e = e.slice(0, s)), Z.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && Z.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? Z("<div>").append(Z.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            a.each(n, o || [e.responseText, t, e])
        }), this
    }, Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        Z.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), Z.expr.filters.animated = function(e) {
        return Z.grep(Z.timers, function(t) {
            return e === t.elem
        }).length
    };
    var In = e.document.documentElement;
    Z.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l, c = Z.css(e, "position"),
                f = Z(e),
                d = {};
            "static" === c && (e.style.position = "relative"), s = f.offset(), o = Z.css(e, "top"), u = Z.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), Z.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) : f.css(d)
        }
    }, Z.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                Z.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0],
                i = {
                    top: 0,
                    left: 0
                },
                o = r && r.ownerDocument;
            if (o) return t = o.documentElement, Z.contains(t, r) ? (typeof r.getBoundingClientRect !== St && (i = r.getBoundingClientRect()), n = H(o), {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Z.nodeName(e[0], "html") || (r = e.offset()), r.top += Z.css(e[0], "borderTopWidth", !0), r.left += Z.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - Z.css(n, "marginTop", !0),
                    left: t.left - r.left - Z.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || In; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");) e = e.offsetParent;
                return e || In
            })
        }
    }), Z.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, n) {
        var r = "pageYOffset" === n;
        Z.fn[t] = function(i) {
            return vt(this, function(t, i, o) {
                var a = H(t);
                return void 0 === o ? a ? a[n] : t[i] : void(a ? a.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o)
            }, t, i, arguments.length, null)
        }
    }), Z.each(["top", "left"], function(e, t) {
        Z.cssHooks[t] = x(K.pixelPosition, function(e, n) {
            return n ? (n = b(e, t), Ut.test(n) ? Z(e).position()[t] + "px" : n) : void 0
        })
    }), Z.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        Z.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            Z.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    a = n || (r === !0 || i === !0 ? "margin" : "border");
                return vt(this, function(t, n, r) {
                    var i;
                    return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? Z.css(t, n, a) : Z.style(t, n, r, a)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), Z.fn.size = function() {
        return this.length
    }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return Z
    });
    var Ln = e.jQuery,
        Mn = e.$;
    return Z.noConflict = function(t) {
        return e.$ === Z && (e.$ = Mn), t && e.jQuery === Z && (e.jQuery = Ln), Z
    }, typeof t === St && (e.jQuery = e.$ = Z), Z
}),
/**
 * @license AngularJS v1.3.17
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */
function(e, t, n) {
    "use strict";

    function r(e, t) {
        return t = t || Error,
            function() {
                var n, r, i = arguments[0],
                    o = "[" + (e ? e + ":" : "") + i + "] ",
                    a = arguments[1],
                    s = arguments;
                for (n = o + a.replace(/\{\d+\}/g, function(e) {
                        var t = +e.slice(1, -1);
                        return t + 2 < s.length ? dt(s[t + 2]) : e
                    }), n = n + "\nhttp://errors.angularjs.org/1.3.17/" + (e ? e + "/" : "") + i, r = 2; r < arguments.length; r++) n = n + (2 == r ? "?" : "&") + "p" + (r - 2) + "=" + encodeURIComponent(dt(arguments[r]));
                return new t(n)
            }
    }

    function i(e) {
        if (null == e || S(e)) return !1;
        var t = "length" in Object(e) && e.length;
        return e.nodeType === yi && t ? !0 : w(e) || di(e) || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function o(e, t, n) {
        var r, a;
        if (e)
            if (C(e))
                for (r in e) "prototype" == r || "length" == r || "name" == r || e.hasOwnProperty && !e.hasOwnProperty(r) || t.call(n, e[r], r, e);
            else if (di(e) || i(e)) {
            var s = "object" != typeof e;
            for (r = 0, a = e.length; a > r; r++)(s || r in e) && t.call(n, e[r], r, e)
        } else if (e.forEach && e.forEach !== o) e.forEach(t, n, e);
        else
            for (r in e) e.hasOwnProperty(r) && t.call(n, e[r], r, e);
        return e
    }

    function a(e) {
        return Object.keys(e).sort()
    }

    function s(e, t, n) {
        for (var r = a(e), i = 0; i < r.length; i++) t.call(n, e[r[i]], r[i]);
        return r
    }

    function u(e) {
        return function(t, n) {
            e(n, t)
        }
    }

    function l() {
        return ++ci
    }

    function c(e, t) {
        t ? e.$$hashKey = t : delete e.$$hashKey
    }

    function f(e) {
        for (var t = e.$$hashKey, n = 1, r = arguments.length; r > n; n++) {
            var i = arguments[n];
            if (i)
                for (var o = Object.keys(i), a = 0, s = o.length; s > a; a++) {
                    var u = o[a];
                    e[u] = i[u]
                }
        }
        return c(e, t), e
    }

    function d(e) {
        return parseInt(e, 10)
    }

    function p(e, t) {
        return f(Object.create(e), t)
    }

    function h() {}

    function g(e) {
        return e
    }

    function v(e) {
        return function() {
            return e
        }
    }

    function m(e) {
        return "undefined" == typeof e
    }

    function $(e) {
        return "undefined" != typeof e
    }

    function y(e) {
        return null !== e && "object" == typeof e
    }

    function w(e) {
        return "string" == typeof e
    }

    function b(e) {
        return "number" == typeof e
    }

    function x(e) {
        return "[object Date]" === si.call(e)
    }

    function C(e) {
        return "function" == typeof e
    }

    function k(e) {
        return "[object RegExp]" === si.call(e)
    }

    function S(e) {
        return e && e.window === e
    }

    function T(e) {
        return e && e.$evalAsync && e.$watch
    }

    function E(e) {
        return "[object File]" === si.call(e)
    }

    function A(e) {
        return "[object FormData]" === si.call(e)
    }

    function O(e) {
        return "[object Blob]" === si.call(e)
    }

    function P(e) {
        return "boolean" == typeof e
    }

    function D(e) {
        return e && C(e.then)
    }

    function j(e) {
        return !(!e || !(e.nodeName || e.prop && e.attr && e.find))
    }

    function _(e) {
        var t, n = {},
            r = e.split(",");
        for (t = 0; t < r.length; t++) n[r[t]] = !0;
        return n
    }

    function F(e) {
        return Yr(e.nodeName || e[0] && e[0].nodeName)
    }

    function N(e, t) {
        var n = e.indexOf(t);
        return n >= 0 && e.splice(n, 1), t
    }

    function I(e, t, n, r) {
        if (S(e) || T(e)) throw ui("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
        if (t) {
            if (e === t) throw ui("cpi", "Can't copy! Source and destination are identical.");
            if (n = n || [], r = r || [], y(e)) {
                var i = n.indexOf(e);
                if (-1 !== i) return r[i];
                n.push(e), r.push(t)
            }
            var a;
            if (di(e)) {
                t.length = 0;
                for (var s = 0; s < e.length; s++) a = I(e[s], null, n, r), y(e[s]) && (n.push(e[s]), r.push(a)), t.push(a)
            } else {
                var u = t.$$hashKey;
                di(t) ? t.length = 0 : o(t, function(e, n) {
                    delete t[n]
                });
                for (var l in e) e.hasOwnProperty(l) && (a = I(e[l], null, n, r), y(e[l]) && (n.push(e[l]), r.push(a)), t[l] = a);
                c(t, u)
            }
        } else if (t = e, e)
            if (di(e)) t = I(e, [], n, r);
            else if (x(e)) t = new Date(e.getTime());
        else if (k(e)) t = new RegExp(e.source, e.toString().match(/[^\/]*$/)[0]), t.lastIndex = e.lastIndex;
        else if (y(e)) {
            var f = Object.create(Object.getPrototypeOf(e));
            t = I(e, f, n, r)
        }
        return t
    }

    function L(e, t) {
        if (di(e)) {
            t = t || [];
            for (var n = 0, r = e.length; r > n; n++) t[n] = e[n]
        } else if (y(e)) {
            t = t || {};
            for (var i in e)("$" !== i.charAt(0) || "$" !== i.charAt(1)) && (t[i] = e[i])
        }
        return t || e
    }

    function M(e, t) {
        if (e === t) return !0;
        if (null === e || null === t) return !1;
        if (e !== e && t !== t) return !0;
        var r, i, o, a = typeof e,
            s = typeof t;
        if (a == s && "object" == a) {
            if (!di(e)) {
                if (x(e)) return x(t) ? M(e.getTime(), t.getTime()) : !1;
                if (k(e)) return k(t) ? e.toString() == t.toString() : !1;
                if (T(e) || T(t) || S(e) || S(t) || di(t) || x(t) || k(t)) return !1;
                o = {};
                for (i in e)
                    if ("$" !== i.charAt(0) && !C(e[i])) {
                        if (!M(e[i], t[i])) return !1;
                        o[i] = !0
                    }
                for (i in t)
                    if (!o.hasOwnProperty(i) && "$" !== i.charAt(0) && t[i] !== n && !C(t[i])) return !1;
                return !0
            }
            if (!di(t)) return !1;
            if ((r = e.length) == t.length) {
                for (i = 0; r > i; i++)
                    if (!M(e[i], t[i])) return !1;
                return !0
            }
        }
        return !1
    }

    function q(e, t, n) {
        return e.concat(ii.call(t, n))
    }

    function R(e, t) {
        return ii.call(e, t || 0)
    }

    function H(e, t) {
        var n = arguments.length > 2 ? R(arguments, 2) : [];
        return !C(t) || t instanceof RegExp ? t : n.length ? function() {
            return arguments.length ? t.apply(e, q(n, arguments, 0)) : t.apply(e, n)
        } : function() {
            return arguments.length ? t.apply(e, arguments) : t.call(e)
        }
    }

    function U(e, r) {
        var i = r;
        return "string" == typeof e && "$" === e.charAt(0) && "$" === e.charAt(1) ? i = n : S(r) ? i = "$WINDOW" : r && t === r ? i = "$DOCUMENT" : T(r) && (i = "$SCOPE"), i
    }

    function V(e, t) {
        return "undefined" == typeof e ? n : (b(t) || (t = t ? 2 : null), JSON.stringify(e, U, t))
    }

    function B(e) {
        return w(e) ? JSON.parse(e) : e
    }

    function z(e) {
        e = ti(e).clone();
        try {
            e.empty()
        } catch (t) {}
        var n = ti("<div>").append(e).html();
        try {
            return e[0].nodeType === bi ? Yr(n) : n.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(e, t) {
                return "<" + Yr(t)
            })
        } catch (t) {
            return Yr(n)
        }
    }

    function W(e) {
        try {
            return decodeURIComponent(e)
        } catch (t) {}
    }

    function G(e) {
        var t, n, r = {};
        return o((e || "").split("&"), function(e) {
            if (e && (t = e.replace(/\+/g, "%20").split("="), n = W(t[0]), $(n))) {
                var i = $(t[1]) ? W(t[1]) : !0;
                Kr.call(r, n) ? di(r[n]) ? r[n].push(i) : r[n] = [r[n], i] : r[n] = i
            }
        }), r
    }

    function X(e) {
        var t = [];
        return o(e, function(e, n) {
            di(e) ? o(e, function(e) {
                t.push(K(n, !0) + (e === !0 ? "" : "=" + K(e, !0)))
            }) : t.push(K(n, !0) + (e === !0 ? "" : "=" + K(e, !0)))
        }), t.length ? t.join("&") : ""
    }

    function Y(e) {
        return K(e, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function K(e, t) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, t ? "%20" : "+")
    }

    function J(e, t) {
        var n, r, i = vi.length;
        for (e = ti(e), r = 0; i > r; ++r)
            if (n = vi[r] + t, w(n = e.attr(n))) return n;
        return null
    }

    function Q(e, t) {
        var n, r, i = {};
        o(vi, function(t) {
            var i = t + "app";
            !n && e.hasAttribute && e.hasAttribute(i) && (n = e, r = e.getAttribute(i))
        }), o(vi, function(t) {
            var i, o = t + "app";
            !n && (i = e.querySelector("[" + o.replace(":", "\\:") + "]")) && (n = i, r = i.getAttribute(o))
        }), n && (i.strictDi = null !== J(n, "strict-di"), t(n, r ? [r] : [], i))
    }

    function Z(n, r, i) {
        y(i) || (i = {});
        var a = {
            strictDi: !1
        };
        i = f(a, i);
        var s = function() {
                if (n = ti(n), n.injector()) {
                    var e = n[0] === t ? "document" : z(n);
                    throw ui("btstrpd", "App Already Bootstrapped with this Element '{0}'", e.replace(/</, "&lt;").replace(/>/, "&gt;"))
                }
                r = r || [], r.unshift(["$provide", function(e) {
                    e.value("$rootElement", n)
                }]), i.debugInfoEnabled && r.push(["$compileProvider", function(e) {
                    e.debugInfoEnabled(!0)
                }]), r.unshift("ng");
                var o = Bt(r, i.strictDi);
                return o.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(e, t, n, r) {
                    e.$apply(function() {
                        t.data("$injector", r), n(t)(e)
                    })
                }]), o
            },
            u = /^NG_ENABLE_DEBUG_INFO!/,
            l = /^NG_DEFER_BOOTSTRAP!/;
        return e && u.test(e.name) && (i.debugInfoEnabled = !0, e.name = e.name.replace(u, "")), e && !l.test(e.name) ? s() : (e.name = e.name.replace(l, ""), li.resumeBootstrap = function(e) {
            return o(e, function(e) {
                r.push(e)
            }), s()
        }, void(C(li.resumeDeferredBootstrap) && li.resumeDeferredBootstrap()))
    }

    function et() {
        e.name = "NG_ENABLE_DEBUG_INFO!" + e.name, e.location.reload()
    }

    function tt(e) {
        var t = li.element(e).injector();
        if (!t) throw ui("test", "no injector found for element argument to getTestability");
        return t.get("$$testability")
    }

    function nt(e, t) {
        return t = t || "_", e.replace(mi, function(e, n) {
            return (n ? t : "") + e.toLowerCase()
        })
    }

    function rt() {
        var t;
        $i || (ni = e.jQuery, ni && ni.fn.on ? (ti = ni, f(ni.fn, {
            scope: qi.scope,
            isolateScope: qi.isolateScope,
            controller: qi.controller,
            injector: qi.injector,
            inheritedData: qi.inheritedData
        }), t = ni.cleanData, ni.cleanData = function(e) {
            var n;
            if (fi) fi = !1;
            else
                for (var r, i = 0; null != (r = e[i]); i++) n = ni._data(r, "events"), n && n.$destroy && ni(r).triggerHandler("$destroy");
            t(e)
        }) : ti = wt, li.element = ti, $i = !0)
    }

    function it(e, t, n) {
        if (!e) throw ui("areq", "Argument '{0}' is {1}", t || "?", n || "required");
        return e
    }

    function ot(e, t, n) {
        return n && di(e) && (e = e[e.length - 1]), it(C(e), t, "not a function, got " + (e && "object" == typeof e ? e.constructor.name || "Object" : typeof e)), e
    }

    function at(e, t) {
        if ("hasOwnProperty" === e) throw ui("badname", "hasOwnProperty is not a valid {0} name", t)
    }

    function st(e, t, n) {
        if (!t) return e;
        for (var r, i = t.split("."), o = e, a = i.length, s = 0; a > s; s++) r = i[s], e && (e = (o = e)[r]);
        return !n && C(e) ? H(o, e) : e
    }

    function ut(e) {
        var t = e[0],
            n = e[e.length - 1],
            r = [t];
        do {
            if (t = t.nextSibling, !t) break;
            r.push(t)
        } while (t !== n);
        return ti(r)
    }

    function lt() {
        return Object.create(null)
    }

    function ct(e) {
        function t(e, t, n) {
            return e[t] || (e[t] = n())
        }
        var n = r("$injector"),
            i = r("ng"),
            o = t(e, "angular", Object);
        return o.$$minErr = o.$$minErr || r, t(o, "module", function() {
            var e = {};
            return function(r, o, a) {
                var s = function(e, t) {
                    if ("hasOwnProperty" === e) throw i("badname", "hasOwnProperty is not a valid {0} name", t)
                };
                return s(r, "module"), o && e.hasOwnProperty(r) && (e[r] = null), t(e, r, function() {
                    function e(e, n, r, i) {
                        return i || (i = t),
                            function() {
                                return i[r || "push"]([e, n, arguments]), l
                            }
                    }
                    if (!o) throw n("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", r);
                    var t = [],
                        i = [],
                        s = [],
                        u = e("$injector", "invoke", "push", i),
                        l = {
                            _invokeQueue: t,
                            _configBlocks: i,
                            _runBlocks: s,
                            requires: o,
                            name: r,
                            provider: e("$provide", "provider"),
                            factory: e("$provide", "factory"),
                            service: e("$provide", "service"),
                            value: e("$provide", "value"),
                            constant: e("$provide", "constant", "unshift"),
                            animation: e("$animateProvider", "register"),
                            filter: e("$filterProvider", "register"),
                            controller: e("$controllerProvider", "register"),
                            directive: e("$compileProvider", "directive"),
                            config: u,
                            run: function(e) {
                                return s.push(e), this
                            }
                        };
                    return a && u(a), l
                })
            }
        })
    }

    function ft(e) {
        var t = [];
        return JSON.stringify(e, function(e, n) {
            if (n = U(e, n), y(n)) {
                if (t.indexOf(n) >= 0) return "<<already seen>>";
                t.push(n)
            }
            return n
        })
    }

    function dt(e) {
        return "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? ft(e) : e
    }

    function pt(t) {
        f(t, {
            bootstrap: Z,
            copy: I,
            extend: f,
            equals: M,
            element: ti,
            forEach: o,
            injector: Bt,
            noop: h,
            bind: H,
            toJson: V,
            fromJson: B,
            identity: g,
            isUndefined: m,
            isDefined: $,
            isString: w,
            isFunction: C,
            isObject: y,
            isNumber: b,
            isElement: j,
            isArray: di,
            version: Si,
            isDate: x,
            lowercase: Yr,
            uppercase: Jr,
            callbacks: {
                counter: 0
            },
            getTestability: tt,
            $$minErr: r,
            $$csp: gi,
            reloadWithDebugInfo: et
        }), ri = ct(e);
        try {
            ri("ngLocale")
        } catch (n) {
            ri("ngLocale", []).provider("$locale", mn)
        }
        ri("ng", ["ngLocale"], ["$provide", function(e) {
            e.provider({
                $$sanitizeUri: Yn
            }), e.provider("$compile", Jt).directive({
                a: jo,
                input: Yo,
                textarea: Yo,
                form: Lo,
                script: Ma,
                select: Ha,
                style: Va,
                option: Ua,
                ngBind: Qo,
                ngBindHtml: ea,
                ngBindTemplate: Zo,
                ngClass: na,
                ngClassEven: ia,
                ngClassOdd: ra,
                ngCloak: oa,
                ngController: aa,
                ngForm: Mo,
                ngHide: ja,
                ngIf: la,
                ngInclude: ca,
                ngInit: da,
                ngNonBindable: Ta,
                ngPluralize: Ea,
                ngRepeat: Aa,
                ngShow: Da,
                ngStyle: _a,
                ngSwitch: Fa,
                ngSwitchWhen: Na,
                ngSwitchDefault: Ia,
                ngOptions: Ra,
                ngTransclude: La,
                ngModel: Ca,
                ngList: pa,
                ngChange: ta,
                pattern: za,
                ngPattern: za,
                required: Ba,
                ngRequired: Ba,
                minlength: Ga,
                ngMinlength: Ga,
                maxlength: Wa,
                ngMaxlength: Wa,
                ngValue: Jo,
                ngModelOptions: Sa
            }).directive({
                ngInclude: fa
            }).directive(_o).directive(sa), e.provider({
                $anchorScroll: zt,
                $animate: Yi,
                $browser: Xt,
                $cacheFactory: Yt,
                $controller: tn,
                $document: nn,
                $exceptionHandler: rn,
                $filter: sr,
                $interpolate: gn,
                $interval: vn,
                $http: fn,
                $httpBackend: pn,
                $location: Dn,
                $log: jn,
                $parse: Vn,
                $rootScope: Xn,
                $q: Bn,
                $$q: zn,
                $sce: Zn,
                $sceDelegate: Qn,
                $sniffer: er,
                $templateCache: Kt,
                $templateRequest: tr,
                $$testability: nr,
                $timeout: rr,
                $window: ar,
                $$rAF: Gn,
                $$asyncCallback: Wt,
                $$jqLite: qt
            })
        }])
    }

    function ht() {
        return ++Ei
    }

    function gt(e) {
        return e.replace(Pi, function(e, t, n, r) {
            return r ? n.toUpperCase() : n
        }).replace(Di, "Moz$1")
    }

    function vt(e) {
        return !Ni.test(e)
    }

    function mt(e) {
        var t = e.nodeType;
        return t === yi || !t || t === Ci
    }

    function $t(e, t) {
        var n, r, i, a, s = t.createDocumentFragment(),
            u = [];
        if (vt(e)) u.push(t.createTextNode(e));
        else {
            for (n = n || s.appendChild(t.createElement("div")), r = (Ii.exec(e) || ["", ""])[1].toLowerCase(), i = Mi[r] || Mi._default, n.innerHTML = i[1] + e.replace(Li, "<$1></$2>") + i[2], a = i[0]; a--;) n = n.lastChild;
            u = q(u, n.childNodes), n = s.firstChild, n.textContent = ""
        }
        return s.textContent = "", s.innerHTML = "", o(u, function(e) {
            s.appendChild(e)
        }), s
    }

    function yt(e, n) {
        n = n || t;
        var r;
        return (r = Fi.exec(e)) ? [n.createElement(r[1])] : (r = $t(e, n)) ? r.childNodes : []
    }

    function wt(e) {
        if (e instanceof wt) return e;
        var t;
        if (w(e) && (e = pi(e), t = !0), !(this instanceof wt)) {
            if (t && "<" != e.charAt(0)) throw _i("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
            return new wt(e)
        }
        t ? Pt(this, yt(e)) : Pt(this, e)
    }

    function bt(e) {
        return e.cloneNode(!0)
    }

    function xt(e, t) {
        if (t || kt(e), e.querySelectorAll)
            for (var n = e.querySelectorAll("*"), r = 0, i = n.length; i > r; r++) kt(n[r])
    }

    function Ct(e, t, n, r) {
        if ($(r)) throw _i("offargs", "jqLite#off() does not support the `selector` argument");
        var i = St(e),
            a = i && i.events,
            s = i && i.handle;
        if (s)
            if (t) o(t.split(" "), function(t) {
                if ($(n)) {
                    var r = a[t];
                    if (N(r || [], n), r && r.length > 0) return
                }
                Oi(e, t, s), delete a[t]
            });
            else
                for (t in a) "$destroy" !== t && Oi(e, t, s), delete a[t]
    }

    function kt(e, t) {
        var r = e.ng339,
            i = r && Ti[r];
        if (i) {
            if (t) return void delete i.data[t];
            i.handle && (i.events.$destroy && i.handle({}, "$destroy"), Ct(e)), delete Ti[r], e.ng339 = n
        }
    }

    function St(e, t) {
        var r = e.ng339,
            i = r && Ti[r];
        return t && !i && (e.ng339 = r = ht(), i = Ti[r] = {
            events: {},
            data: {},
            handle: n
        }), i
    }

    function Tt(e, t, n) {
        if (mt(e)) {
            var r = $(n),
                i = !r && t && !y(t),
                o = !t,
                a = St(e, !i),
                s = a && a.data;
            if (r) s[t] = n;
            else {
                if (o) return s;
                if (i) return s && s[t];
                f(s, t)
            }
        }
    }

    function Et(e, t) {
        return e.getAttribute ? (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + t + " ") > -1 : !1
    }

    function At(e, t) {
        t && e.setAttribute && o(t.split(" "), function(t) {
            e.setAttribute("class", pi((" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + pi(t) + " ", " ")))
        })
    }

    function Ot(e, t) {
        if (t && e.setAttribute) {
            var n = (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            o(t.split(" "), function(e) {
                e = pi(e), -1 === n.indexOf(" " + e + " ") && (n += e + " ")
            }), e.setAttribute("class", pi(n))
        }
    }

    function Pt(e, t) {
        if (t)
            if (t.nodeType) e[e.length++] = t;
            else {
                var n = t.length;
                if ("number" == typeof n && t.window !== t) {
                    if (n)
                        for (var r = 0; n > r; r++) e[e.length++] = t[r]
                } else e[e.length++] = t
            }
    }

    function Dt(e, t) {
        return jt(e, "$" + (t || "ngController") + "Controller")
    }

    function jt(e, t, r) {
        e.nodeType == Ci && (e = e.documentElement);
        for (var i = di(t) ? t : [t]; e;) {
            for (var o = 0, a = i.length; a > o; o++)
                if ((r = ti.data(e, i[o])) !== n) return r;
            e = e.parentNode || e.nodeType === ki && e.host
        }
    }

    function _t(e) {
        for (xt(e, !0); e.firstChild;) e.removeChild(e.firstChild)
    }

    function Ft(e, t) {
        t || xt(e);
        var n = e.parentNode;
        n && n.removeChild(e)
    }

    function Nt(t, n) {
        n = n || e, "complete" === n.document.readyState ? n.setTimeout(t) : ti(n).on("load", t)
    }

    function It(e, t) {
        var n = Ri[t.toLowerCase()];
        return n && Hi[F(e)] && n
    }

    function Lt(e, t) {
        var n = e.nodeName;
        return ("INPUT" === n || "TEXTAREA" === n) && Ui[t]
    }

    function Mt(e, t) {
        var n = function(n, r) {
            n.isDefaultPrevented = function() {
                return n.defaultPrevented
            };
            var i = t[r || n.type],
                o = i ? i.length : 0;
            if (o) {
                if (m(n.immediatePropagationStopped)) {
                    var a = n.stopImmediatePropagation;
                    n.stopImmediatePropagation = function() {
                        n.immediatePropagationStopped = !0, n.stopPropagation && n.stopPropagation(), a && a.call(n)
                    }
                }
                n.isImmediatePropagationStopped = function() {
                    return n.immediatePropagationStopped === !0
                }, o > 1 && (i = L(i));
                for (var s = 0; o > s; s++) n.isImmediatePropagationStopped() || i[s].call(e, n)
            }
        };
        return n.elem = e, n
    }

    function qt() {
        this.$get = function() {
            return f(wt, {
                hasClass: function(e, t) {
                    return e.attr && (e = e[0]), Et(e, t)
                },
                addClass: function(e, t) {
                    return e.attr && (e = e[0]), Ot(e, t)
                },
                removeClass: function(e, t) {
                    return e.attr && (e = e[0]), At(e, t)
                }
            })
        }
    }

    function Rt(e, t) {
        var n = e && e.$$hashKey;
        if (n) return "function" == typeof n && (n = e.$$hashKey()), n;
        var r = typeof e;
        return n = "function" == r || "object" == r && null !== e ? e.$$hashKey = r + ":" + (t || l)() : r + ":" + e
    }

    function Ht(e, t) {
        if (t) {
            var n = 0;
            this.nextUid = function() {
                return ++n
            }
        }
        o(e, this.put, this)
    }

    function Ut(e) {
        var t = e.toString().replace(Wi, ""),
            n = t.match(Vi);
        return n ? "function(" + (n[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
    }

    function Vt(e, t, n) {
        var r, i, a, s;
        if ("function" == typeof e) {
            if (!(r = e.$inject)) {
                if (r = [], e.length) {
                    if (t) throw w(n) && n || (n = e.name || Ut(e)), Gi("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", n);
                    i = e.toString().replace(Wi, ""), a = i.match(Vi), o(a[1].split(Bi), function(e) {
                        e.replace(zi, function(e, t, n) {
                            r.push(n)
                        })
                    })
                }
                e.$inject = r
            }
        } else di(e) ? (s = e.length - 1, ot(e[s], "fn"), r = e.slice(0, s)) : ot(e, "fn", !0);
        return r
    }

    function Bt(e, t) {
        function r(e) {
            return function(t, n) {
                return y(t) ? void o(t, u(e)) : e(t, n)
            }
        }

        function i(e, t) {
            if (at(e, "service"), (C(t) || di(t)) && (t = T.instantiate(t)), !t.$get) throw Gi("pget", "Provider '{0}' must define $get factory method.", e);
            return S[e + b] = t
        }

        function a(e, t) {
            return function() {
                var n = A.invoke(t, this);
                if (m(n)) throw Gi("undef", "Provider '{0}' must return a value from $get factory method.", e);
                return n
            }
        }

        function s(e, t, n) {
            return i(e, {
                $get: n !== !1 ? a(e, t) : t
            })
        }

        function l(e, t) {
            return s(e, ["$injector", function(e) {
                return e.instantiate(t)
            }])
        }

        function c(e, t) {
            return s(e, v(t), !1)
        }

        function f(e, t) {
            at(e, "constant"), S[e] = t, E[e] = t
        }

        function d(e, t) {
            var n = T.get(e + b),
                r = n.$get;
            n.$get = function() {
                var e = A.invoke(r, n);
                return A.invoke(t, null, {
                    $delegate: e
                })
            }
        }

        function p(e) {
            var t, n = [];
            return o(e, function(e) {
                function r(e) {
                    var t, n;
                    for (t = 0, n = e.length; n > t; t++) {
                        var r = e[t],
                            i = T.get(r[0]);
                        i[r[1]].apply(i, r[2])
                    }
                }
                if (!k.get(e)) {
                    k.put(e, !0);
                    try {
                        w(e) ? (t = ri(e), n = n.concat(p(t.requires)).concat(t._runBlocks), r(t._invokeQueue), r(t._configBlocks)) : C(e) ? n.push(T.invoke(e)) : di(e) ? n.push(T.invoke(e)) : ot(e, "module")
                    } catch (i) {
                        throw di(e) && (e = e[e.length - 1]), i.message && i.stack && -1 == i.stack.indexOf(i.message) && (i = i.message + "\n" + i.stack), Gi("modulerr", "Failed to instantiate module {0} due to:\n{1}", e, i.stack || i.message || i)
                    }
                }
            }), n
        }

        function g(e, n) {
            function r(t, r) {
                if (e.hasOwnProperty(t)) {
                    if (e[t] === $) throw Gi("cdep", "Circular dependency found: {0}", t + " <- " + x.join(" <- "));
                    return e[t]
                }
                try {
                    return x.unshift(t), e[t] = $, e[t] = n(t, r)
                } catch (i) {
                    throw e[t] === $ && delete e[t], i
                } finally {
                    x.shift()
                }
            }

            function i(e, n, i, o) {
                "string" == typeof i && (o = i, i = null);
                var a, s, u, l = [],
                    c = Bt.$$annotate(e, t, o);
                for (s = 0, a = c.length; a > s; s++) {
                    if (u = c[s], "string" != typeof u) throw Gi("itkn", "Incorrect injection token! Expected service name as string, got {0}", u);
                    l.push(i && i.hasOwnProperty(u) ? i[u] : r(u, o))
                }
                return di(e) && (e = e[a]), e.apply(n, l)
            }

            function o(e, t, n) {
                var r = Object.create((di(e) ? e[e.length - 1] : e).prototype || null),
                    o = i(e, r, t, n);
                return y(o) || C(o) ? o : r
            }
            return {
                invoke: i,
                instantiate: o,
                get: r,
                annotate: Bt.$$annotate,
                has: function(t) {
                    return S.hasOwnProperty(t + b) || e.hasOwnProperty(t)
                }
            }
        }
        t = t === !0;
        var $ = {},
            b = "Provider",
            x = [],
            k = new Ht([], !0),
            S = {
                $provide: {
                    provider: r(i),
                    factory: r(s),
                    service: r(l),
                    value: r(c),
                    constant: r(f),
                    decorator: d
                }
            },
            T = S.$injector = g(S, function(e, t) {
                throw li.isString(t) && x.push(t), Gi("unpr", "Unknown provider: {0}", x.join(" <- "))
            }),
            E = {},
            A = E.$injector = g(E, function(e, t) {
                var r = T.get(e + b, t);
                return A.invoke(r.$get, r, n, e)
            });
        return o(p(e), function(e) {
            A.invoke(e || h)
        }), A
    }

    function zt() {
        var e = !0;
        this.disableAutoScrolling = function() {
            e = !1
        }, this.$get = ["$window", "$location", "$rootScope", function(t, n, r) {
            function i(e) {
                var t = null;
                return Array.prototype.some.call(e, function(e) {
                    return "a" === F(e) ? (t = e, !0) : void 0
                }), t
            }

            function o() {
                var e = s.yOffset;
                if (C(e)) e = e();
                else if (j(e)) {
                    var n = e[0],
                        r = t.getComputedStyle(n);
                    e = "fixed" !== r.position ? 0 : n.getBoundingClientRect().bottom
                } else b(e) || (e = 0);
                return e
            }

            function a(e) {
                if (e) {
                    e.scrollIntoView();
                    var n = o();
                    if (n) {
                        var r = e.getBoundingClientRect().top;
                        t.scrollBy(0, r - n)
                    }
                } else t.scrollTo(0, 0)
            }

            function s() {
                var e, t = n.hash();
                t ? (e = u.getElementById(t)) ? a(e) : (e = i(u.getElementsByName(t))) ? a(e) : "top" === t && a(null) : a(null)
            }
            var u = t.document;
            return e && r.$watch(function() {
                return n.hash()
            }, function(e, t) {
                (e !== t || "" !== e) && Nt(function() {
                    r.$evalAsync(s)
                })
            }), s
        }]
    }

    function Wt() {
        this.$get = ["$$rAF", "$timeout", function(e, t) {
            return e.supported ? function(t) {
                return e(t)
            } : function(e) {
                return t(e, 0, !1)
            }
        }]
    }

    function Gt(e, t, r, i) {
        function a(e) {
            try {
                e.apply(null, R(arguments, 1))
            } finally {
                if (k--, 0 === k)
                    for (; S.length;) try {
                        S.pop()()
                    } catch (t) {
                        r.error(t)
                    }
            }
        }

        function s(e) {
            var t = e.indexOf("#");
            return -1 === t ? "" : e.substr(t)
        }

        function u(e, t) {
            ! function n() {
                o(E, function(e) {
                    e()
                }), T = t(n, e)
            }()
        }

        function l() {
            f(), d()
        }

        function c() {
            try {
                return y.state
            } catch (e) {}
        }

        function f() {
            A = c(), A = m(A) ? null : A, M(A, N) && (A = N), N = A
        }

        function d() {
            (P !== g.url() || O !== A) && (P = g.url(), O = A, o(_, function(e) {
                e(g.url(), A)
            }))
        }

        function p(e) {
            try {
                return decodeURIComponent(e)
            } catch (t) {
                return e
            }
        }
        var g = this,
            v = t[0],
            $ = e.location,
            y = e.history,
            b = e.setTimeout,
            x = e.clearTimeout,
            C = {};
        g.isMock = !1;
        var k = 0,
            S = [];
        g.$$completeOutstandingRequest = a, g.$$incOutstandingRequestCount = function() {
            k++
        }, g.notifyWhenNoOutstandingRequests = function(e) {
            o(E, function(e) {
                e()
            }), 0 === k ? e() : S.push(e)
        };
        var T, E = [];
        g.addPollFn = function(e) {
            return m(T) && u(100, b), E.push(e), e
        };
        var A, O, P = $.href,
            D = t.find("base"),
            j = null;
        f(), O = A, g.url = function(t, n, r) {
            if (m(r) && (r = null), $ !== e.location && ($ = e.location), y !== e.history && (y = e.history), t) {
                var o = O === r;
                if (P === t && (!i.history || o)) return g;
                var a = P && xn(P) === xn(t);
                return P = t, O = r, !i.history || a && o ? ((!a || j) && (j = t), n ? $.replace(t) : a ? $.hash = s(t) : $.href = t) : (y[n ? "replaceState" : "pushState"](r, "", t), f(), O = A), g
            }
            return j || $.href.replace(/%27/g, "'")
        }, g.state = function() {
            return A
        };
        var _ = [],
            F = !1,
            N = null;
        g.onUrlChange = function(t) {
            return F || (i.history && ti(e).on("popstate", l), ti(e).on("hashchange", l), F = !0), _.push(t), t
        }, g.$$checkUrlChange = d, g.baseHref = function() {
            var e = D.attr("href");
            return e ? e.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        };
        var I = {},
            L = "",
            q = g.baseHref();
        g.cookies = function(e, t) {
            var i, o, a, s, u;
            if (!e) {
                if (v.cookie !== L)
                    for (L = v.cookie, o = L.split("; "), I = {}, s = 0; s < o.length; s++) a = o[s], u = a.indexOf("="), u > 0 && (e = p(a.substring(0, u)), I[e] === n && (I[e] = p(a.substring(u + 1))));
                return I
            }
            t === n ? v.cookie = encodeURIComponent(e) + "=;path=" + q + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : w(t) && (i = (v.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + ";path=" + q).length + 1, i > 4096 && r.warn("Cookie '" + e + "' possibly not set or overflowed because it was too large (" + i + " > 4096 bytes)!"))
        }, g.defer = function(e, t) {
            var n;
            return k++, n = b(function() {
                delete C[n], a(e)
            }, t || 0), C[n] = !0, n
        }, g.defer.cancel = function(e) {
            return C[e] ? (delete C[e], x(e), a(h), !0) : !1
        }
    }

    function Xt() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function(e, t, n, r) {
            return new Gt(e, r, t, n)
        }]
    }

    function Yt() {
        this.$get = function() {
            function e(e, n) {
                function i(e) {
                    e != d && (p ? p == e && (p = e.n) : p = e, o(e.n, e.p), o(e, d), d = e, d.n = null)
                }

                function o(e, t) {
                    e != t && (e && (e.p = t), t && (t.n = e))
                }
                if (e in t) throw r("$cacheFactory")("iid", "CacheId '{0}' is already taken!", e);
                var a = 0,
                    s = f({}, n, {
                        id: e
                    }),
                    u = {},
                    l = n && n.capacity || Number.MAX_VALUE,
                    c = {},
                    d = null,
                    p = null;
                return t[e] = {
                    put: function(e, t) {
                        if (l < Number.MAX_VALUE) {
                            var n = c[e] || (c[e] = {
                                key: e
                            });
                            i(n)
                        }
                        if (!m(t)) return e in u || a++, u[e] = t, a > l && this.remove(p.key), t
                    },
                    get: function(e) {
                        if (l < Number.MAX_VALUE) {
                            var t = c[e];
                            if (!t) return;
                            i(t)
                        }
                        return u[e]
                    },
                    remove: function(e) {
                        if (l < Number.MAX_VALUE) {
                            var t = c[e];
                            if (!t) return;
                            t == d && (d = t.p), t == p && (p = t.n), o(t.n, t.p), delete c[e]
                        }
                        delete u[e], a--
                    },
                    removeAll: function() {
                        u = {}, a = 0, c = {}, d = p = null
                    },
                    destroy: function() {
                        u = null, s = null, c = null, delete t[e]
                    },
                    info: function() {
                        return f({}, s, {
                            size: a
                        })
                    }
                }
            }
            var t = {};
            return e.info = function() {
                var e = {};
                return o(t, function(t, n) {
                    e[n] = t.info()
                }), e
            }, e.get = function(e) {
                return t[e]
            }, e
        }
    }

    function Kt() {
        this.$get = ["$cacheFactory", function(e) {
            return e("templates")
        }]
    }

    function Jt(e, r) {
        function i(e, t) {
            var n = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,
                r = {};
            return o(e, function(e, i) {
                var o = e.match(n);
                if (!o) throw Ki("iscp", "Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}", t, i, e);
                r[i] = {
                    mode: o[1][0],
                    collection: "*" === o[2],
                    optional: "?" === o[3],
                    attrName: o[4] || i
                }
            }), r
        }

        function a(e) {
            var t = e.charAt(0);
            if (!t || t !== Yr(t)) throw Ki("baddir", "Directive name '{0}' is invalid. The first character must be a lowercase letter", e);
            return e
        }
        var s = {},
            l = "Directive",
            c = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
            d = /(([\w\-]+)(?:\:([^;]+))?;?)/,
            m = _("ngSrc,ngSrcset,src,srcset"),
            b = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
            x = /^(on[a-z]+|formaction)$/;
        this.directive = function S(t, n) {
            return at(t, "directive"), w(t) ? (a(t), it(n, "directiveFactory"), s.hasOwnProperty(t) || (s[t] = [], e.factory(t + l, ["$injector", "$exceptionHandler", function(e, n) {
                var r = [];
                return o(s[t], function(o, a) {
                    try {
                        var s = e.invoke(o);
                        C(s) ? s = {
                            compile: v(s)
                        } : !s.compile && s.link && (s.compile = v(s.link)), s.priority = s.priority || 0, s.index = a, s.name = s.name || t, s.require = s.require || s.controller && s.name, s.restrict = s.restrict || "EA", y(s.scope) && (s.$$isolateBindings = i(s.scope, s.name)), r.push(s)
                    } catch (u) {
                        n(u)
                    }
                }), r
            }])), s[t].push(n)) : o(t, u(S)), this
        }, this.aHrefSanitizationWhitelist = function(e) {
            return $(e) ? (r.aHrefSanitizationWhitelist(e), this) : r.aHrefSanitizationWhitelist()
        }, this.imgSrcSanitizationWhitelist = function(e) {
            return $(e) ? (r.imgSrcSanitizationWhitelist(e), this) : r.imgSrcSanitizationWhitelist()
        };
        var k = !0;
        this.debugInfoEnabled = function(e) {
            return $(e) ? (k = e, this) : k
        }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(e, r, i, a, u, v, $, S, E, A, O) {
            function P(e, t) {
                try {
                    e.addClass(t)
                } catch (n) {}
            }

            function D(e, t, n, r, i) {
                e instanceof ti || (e = ti(e)), o(e, function(t, n) {
                    t.nodeType == bi && t.nodeValue.match(/\S+/) && (e[n] = ti(t).wrap("<span></span>").parent()[0])
                });
                var a = _(e, t, e, n, r, i);
                D.$$addScopeClass(e);
                var s = null;
                return function(t, n, r) {
                    it(t, "scope"), r = r || {};
                    var i = r.parentBoundTranscludeFn,
                        o = r.transcludeControllers,
                        u = r.futureParentElement;
                    i && i.$$boundTransclude && (i = i.$$boundTransclude), s || (s = j(u));
                    var l;
                    if (l = "html" !== s ? ti(Q(s, ti("<div>").append(e).html())) : n ? qi.clone.call(e) : e, o)
                        for (var c in o) l.data("$" + c + "Controller", o[c].instance);
                    return D.$$addScopeInfo(l, t), n && n(l, t), a && a(t, l, l, i), l
                }
            }

            function j(e) {
                var t = e && e[0];
                return t && "foreignobject" !== F(t) && t.toString().match(/SVG/) ? "svg" : "html"
            }

            function _(e, t, r, i, o, a) {
                function s(e, r, i, o) {
                    var a, s, u, l, c, f, d, p, v;
                    if (h) {
                        var m = r.length;
                        for (v = new Array(m), c = 0; c < g.length; c += 3) d = g[c], v[d] = r[d]
                    } else v = r;
                    for (c = 0, f = g.length; f > c;) u = v[g[c++]], a = g[c++], s = g[c++], a ? (a.scope ? (l = e.$new(), D.$$addScopeInfo(ti(u), l)) : l = e, p = a.transcludeOnThisElement ? I(e, a.transclude, o, a.elementTranscludeOnThisElement) : !a.templateOnThisElement && o ? o : !o && t ? I(e, t) : null, a(s, l, u, i, p)) : s && s(e, u.childNodes, n, o)
                }
                for (var u, l, c, f, d, p, h, g = [], v = 0; v < e.length; v++) u = new at, l = L(e[v], [], u, 0 === v ? i : n, o), c = l.length ? U(l, e[v], u, t, r, null, [], [], a) : null, c && c.scope && D.$$addScopeClass(u.$$element), d = c && c.terminal || !(f = e[v].childNodes) || !f.length ? null : _(f, c ? (c.transcludeOnThisElement || !c.templateOnThisElement) && c.transclude : t), (c || d) && (g.push(v, c, d), p = !0, h = h || c), a = null;
                return p ? s : null
            }

            function I(e, t, n) {
                var r = function(r, i, o, a, s) {
                    return r || (r = e.$new(!1, s), r.$$transcluded = !0), t(r, i, {
                        parentBoundTranscludeFn: n,
                        transcludeControllers: o,
                        futureParentElement: a
                    })
                };
                return r
            }

            function L(e, t, n, r, i) {
                var o, a, s = e.nodeType,
                    u = n.$attr;
                switch (s) {
                    case yi:
                        B(t, Qt(F(e)), "E", r, i);
                        for (var l, f, p, h, g, v, m = e.attributes, $ = 0, b = m && m.length; b > $; $++) {
                            var x = !1,
                                C = !1;
                            l = m[$], f = l.name, g = pi(l.value), h = Qt(f), (v = ft.test(h)) && (f = f.replace(Ji, "").substr(8).replace(/_(.)/g, function(e, t) {
                                return t.toUpperCase()
                            }));
                            var k = h.replace(/(Start|End)$/, "");
                            W(k) && h === k + "Start" && (x = f, C = f.substr(0, f.length - 5) + "end", f = f.substr(0, f.length - 6)), p = Qt(f.toLowerCase()), u[p] = f, (v || !n.hasOwnProperty(p)) && (n[p] = g, It(e, p) && (n[p] = !0)), et(e, t, g, p, v), B(t, p, "A", r, i, x, C)
                        }
                        if (a = e.className, y(a) && (a = a.animVal), w(a) && "" !== a)
                            for (; o = d.exec(a);) p = Qt(o[2]), B(t, p, "C", r, i) && (n[p] = pi(o[3])), a = a.substr(o.index + o[0].length);
                        break;
                    case bi:
                        J(t, e.nodeValue);
                        break;
                    case xi:
                        try {
                            o = c.exec(e.nodeValue), o && (p = Qt(o[1]), B(t, p, "M", r, i) && (n[p] = pi(o[2])))
                        } catch (S) {}
                }
                return t.sort(Y), t
            }

            function q(e, t, n) {
                var r = [],
                    i = 0;
                if (t && e.hasAttribute && e.hasAttribute(t)) {
                    do {
                        if (!e) throw Ki("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", t, n);
                        e.nodeType == yi && (e.hasAttribute(t) && i++, e.hasAttribute(n) && i--), r.push(e), e = e.nextSibling
                    } while (i > 0)
                } else r.push(e);
                return ti(r)
            }

            function H(e, t, n) {
                return function(r, i, o, a, s) {
                    return i = q(i[0], t, n), e(r, i, o, a, s)
                }
            }

            function U(e, a, s, l, c, f, d, p, h) {
                function g(e, t, n, r) {
                    e && (n && (e = H(e, n, r)), e.require = S.require, e.directiveName = E, (F === S || S.$$isolateScope) && (e = rt(e, {
                        isolateScope: !0
                    })), d.push(e)), t && (n && (t = H(t, n, r)), t.require = S.require, t.directiveName = E, (F === S || S.$$isolateScope) && (t = rt(t, {
                        isolateScope: !0
                    })), p.push(t))
                }

                function m(e, t, n, r) {
                    var i, a, s = "data",
                        u = !1,
                        l = n;
                    if (w(t)) {
                        if (a = t.match(b), t = t.substring(a[0].length), a[3] && (a[1] ? a[3] = null : a[1] = a[3]), "^" === a[1] ? s = "inheritedData" : "^^" === a[1] && (s = "inheritedData", l = n.parent()), "?" === a[2] && (u = !0), i = null, r && "data" === s && (i = r[t]) && (i = i.instance), i = i || l[s]("$" + t + "Controller"), !i && !u) throw Ki("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", t, e);
                        return i || null
                    }
                    return di(t) && (i = [], o(t, function(t) {
                        i.push(m(e, t, n, r))
                    })), i
                }

                function $(e, t, i, l, c) {
                    function f(e, t, r) {
                        var i;
                        return T(e) || (r = t, t = e, e = n), W && (i = b), r || (r = W ? C.parent() : C), c(e, t, i, r, O)
                    }
                    var h, g, $, y, w, b, x, C, S;
                    if (a === i ? (S = s, C = s.$$element) : (C = ti(i), S = new at(C, s)), F && (w = t.$new(!0)), c && (x = f, x.$$boundTransclude = c), _ && (k = {}, b = {}, o(_, function(e) {
                            var n, r = {
                                $scope: e === F || e.$$isolateScope ? w : t,
                                $element: C,
                                $attrs: S,
                                $transclude: x
                            };
                            y = e.controller, "@" == y && (y = S[e.name]), n = v(y, r, !0, e.controllerAs), b[e.name] = n, W || C.data("$" + e.name + "Controller", n.instance), k[e.name] = n
                        })), F) {
                        D.$$addScopeInfo(C, w, !0, !(N && (N === F || N === F.$$originalDirective))), D.$$addScopeClass(C, !0);
                        var E = k && k[F.name],
                            A = w;
                        E && E.identifier && F.bindToController === !0 && (A = E.instance), o(w.$$isolateBindings = F.$$isolateBindings, function(e, n) {
                            var i, o, a, s, l = e.attrName,
                                c = e.optional,
                                f = e.mode;
                            switch (f) {
                                case "@":
                                    S.$observe(l, function(e) {
                                        A[n] = e
                                    }), S.$$observers[l].$$scope = t, S[l] && (A[n] = r(S[l])(t));
                                    break;
                                case "=":
                                    if (c && !S[l]) return;
                                    o = u(S[l]), s = o.literal ? M : function(e, t) {
                                        return e === t || e !== e && t !== t
                                    }, a = o.assign || function() {
                                        throw i = A[n] = o(t), Ki("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", S[l], F.name)
                                    }, i = A[n] = o(t);
                                    var d = function(e) {
                                        return s(e, A[n]) || (s(e, i) ? a(t, e = A[n]) : A[n] = e), i = e
                                    };
                                    d.$stateful = !0;
                                    var p;
                                    p = e.collection ? t.$watchCollection(S[l], d) : t.$watch(u(S[l], d), null, o.literal), w.$on("$destroy", p);
                                    break;
                                case "&":
                                    o = u(S[l]), A[n] = function(e) {
                                        return o(t, e)
                                    }
                            }
                        })
                    }
                    for (k && (o(k, function(e) {
                            e()
                        }), k = null), h = 0, g = d.length; g > h; h++) $ = d[h], ot($, $.isolateScope ? w : t, C, S, $.require && m($.directiveName, $.require, C, b), x);
                    var O = t;
                    for (F && (F.template || null === F.templateUrl) && (O = w), e && e(O, i.childNodes, n, c), h = p.length - 1; h >= 0; h--) $ = p[h], ot($, $.isolateScope ? w : t, C, S, $.require && m($.directiveName, $.require, C, b), x)
                }
                h = h || {};
                for (var x, k, S, E, A, O, P, j = -Number.MAX_VALUE, _ = h.controllerDirectives, F = h.newIsolateScopeDirective, N = h.templateDirective, I = h.nonTlbTranscludeDirective, U = !1, B = !1, W = h.hasElementTranscludeDirective, Y = s.$$element = ti(a), J = f, Z = l, et = 0, nt = e.length; nt > et; et++) {
                    S = e[et];
                    var it = S.$$start,
                        st = S.$$end;
                    if (it && (Y = q(a, it, st)), A = n, j > S.priority) break;
                    if ((P = S.scope) && (S.templateUrl || (y(P) ? (K("new/isolated scope", F || x, S, Y), F = S) : K("new/isolated scope", F, S, Y)), x = x || S), E = S.name, !S.templateUrl && S.controller && (P = S.controller, _ = _ || {}, K("'" + E + "' controller", _[E], S, Y), _[E] = S), (P = S.transclude) && (U = !0, S.$$tlb || (K("transclusion", I, S, Y), I = S), "element" == P ? (W = !0, j = S.priority, A = Y, Y = s.$$element = ti(t.createComment(" " + E + ": " + s[E] + " ")), a = Y[0], tt(c, R(A), a), Z = D(A, l, j, J && J.name, {
                            nonTlbTranscludeDirective: I
                        })) : (A = ti(bt(a)).contents(), Y.empty(), Z = D(A, l))), S.template)
                        if (B = !0, K("template", N, S, Y), N = S, P = C(S.template) ? S.template(Y, s) : S.template, P = ct(P), S.replace) {
                            if (J = S, A = vt(P) ? [] : en(Q(S.templateNamespace, pi(P))), a = A[0], 1 != A.length || a.nodeType !== yi) throw Ki("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", E, "");
                            tt(c, Y, a);
                            var ut = {
                                    $attr: {}
                                },
                                lt = L(a, [], ut),
                                ft = e.splice(et + 1, e.length - (et + 1));
                            F && V(lt), e = e.concat(lt).concat(ft), G(s, ut), nt = e.length
                        } else Y.html(P);
                    if (S.templateUrl) B = !0, K("template", N, S, Y), N = S, S.replace && (J = S), $ = X(e.splice(et, e.length - et), Y, s, c, U && Z, d, p, {
                        controllerDirectives: _,
                        newIsolateScopeDirective: F,
                        templateDirective: N,
                        nonTlbTranscludeDirective: I
                    }), nt = e.length;
                    else if (S.compile) try {
                        O = S.compile(Y, s, Z), C(O) ? g(null, O, it, st) : O && g(O.pre, O.post, it, st)
                    } catch (dt) {
                        i(dt, z(Y))
                    }
                    S.terminal && ($.terminal = !0, j = Math.max(j, S.priority))
                }
                return $.scope = x && x.scope === !0, $.transcludeOnThisElement = U, $.elementTranscludeOnThisElement = W, $.templateOnThisElement = B, $.transclude = Z, h.hasElementTranscludeDirective = W, $
            }

            function V(e) {
                for (var t = 0, n = e.length; n > t; t++) e[t] = p(e[t], {
                    $$isolateScope: !0
                })
            }

            function B(t, r, o, a, u, c, f) {
                if (r === u) return null;
                var d = null;
                if (s.hasOwnProperty(r))
                    for (var h, g = e.get(r + l), v = 0, m = g.length; m > v; v++) try {
                        h = g[v], (a === n || a > h.priority) && -1 != h.restrict.indexOf(o) && (c && (h = p(h, {
                            $$start: c,
                            $$end: f
                        })), t.push(h), d = h)
                    } catch ($) {
                        i($)
                    }
                return d
            }

            function W(t) {
                if (s.hasOwnProperty(t))
                    for (var n, r = e.get(t + l), i = 0, o = r.length; o > i; i++)
                        if (n = r[i], n.multiElement) return !0;
                return !1
            }

            function G(e, t) {
                var n = t.$attr,
                    r = e.$attr,
                    i = e.$$element;
                o(e, function(r, i) {
                    "$" != i.charAt(0) && (t[i] && t[i] !== r && (r += ("style" === i ? ";" : " ") + t[i]), e.$set(i, r, !0, n[i]))
                }), o(t, function(t, o) {
                    "class" == o ? (P(i, t), e["class"] = (e["class"] ? e["class"] + " " : "") + t) : "style" == o ? (i.attr("style", i.attr("style") + ";" + t), e.style = (e.style ? e.style + ";" : "") + t) : "$" == o.charAt(0) || e.hasOwnProperty(o) || (e[o] = t, r[o] = n[o])
                })
            }

            function X(e, t, n, r, i, s, u, l) {
                var c, f, d = [],
                    h = t[0],
                    g = e.shift(),
                    v = p(g, {
                        templateUrl: null,
                        transclude: null,
                        replace: null,
                        $$originalDirective: g
                    }),
                    m = C(g.templateUrl) ? g.templateUrl(t, n) : g.templateUrl,
                    $ = g.templateNamespace;
                return t.empty(), a(m).then(function(a) {
                        var p, w, b, x;
                        if (a = ct(a), g.replace) {
                            if (b = vt(a) ? [] : en(Q($, pi(a))), p = b[0], 1 != b.length || p.nodeType !== yi) throw Ki("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", g.name, m);
                            w = {
                                $attr: {}
                            }, tt(r, t, p);
                            var C = L(p, [], w);
                            y(g.scope) && V(C), e = C.concat(e), G(n, w)
                        } else p = h, t.html(a);
                        for (e.unshift(v), c = U(e, p, n, i, t, g, s, u, l), o(r, function(e, n) {
                                e == p && (r[n] = t[0])
                            }), f = _(t[0].childNodes, i); d.length;) {
                            var k = d.shift(),
                                S = d.shift(),
                                T = d.shift(),
                                E = d.shift(),
                                A = t[0];
                            if (!k.$$destroyed) {
                                if (S !== h) {
                                    var O = S.className;
                                    l.hasElementTranscludeDirective && g.replace || (A = bt(p)), tt(T, ti(S), A), P(ti(A), O)
                                }
                                x = c.transcludeOnThisElement ? I(k, c.transclude, E) : E, c(f, k, A, r, x)
                            }
                        }
                        d = null
                    }),
                    function(e, t, n, r, i) {
                        var o = i;
                        t.$$destroyed || (d ? d.push(t, n, r, o) : (c.transcludeOnThisElement && (o = I(t, c.transclude, i)), c(f, t, n, r, o)))
                    }
            }

            function Y(e, t) {
                var n = t.priority - e.priority;
                return 0 !== n ? n : e.name !== t.name ? e.name < t.name ? -1 : 1 : e.index - t.index
            }

            function K(e, t, n, r) {
                if (t) throw Ki("multidir", "Multiple directives [{0}, {1}] asking for {2} on: {3}", t.name, n.name, e, z(r))
            }

            function J(e, t) {
                var n = r(t, !0);
                n && e.push({
                    priority: 0,
                    compile: function(e) {
                        var t = e.parent(),
                            r = !!t.length;
                        return r && D.$$addBindingClass(t),
                            function(e, t) {
                                var i = t.parent();
                                r || D.$$addBindingClass(i), D.$$addBindingInfo(i, n.expressions), e.$watch(n, function(e) {
                                    t[0].nodeValue = e
                                })
                            }
                    }
                })
            }

            function Q(e, n) {
                switch (e = Yr(e || "html")) {
                    case "svg":
                    case "math":
                        var r = t.createElement("div");
                        return r.innerHTML = "<" + e + ">" + n + "</" + e + ">", r.childNodes[0].childNodes;
                    default:
                        return n
                }
            }

            function Z(e, t) {
                if ("srcdoc" == t) return E.HTML;
                var n = F(e);
                return "xlinkHref" == t || "form" == n && "action" == t || "img" != n && ("src" == t || "ngSrc" == t) ? E.RESOURCE_URL : void 0
            }

            function et(e, t, n, i, o) {
                var a = Z(e, i);
                o = m[i] || o;
                var s = r(n, !0, a, o);
                if (s) {
                    if ("multiple" === i && "select" === F(e)) throw Ki("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", z(e));
                    t.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(e, t, u) {
                                    var l = u.$$observers || (u.$$observers = {});
                                    if (x.test(i)) throw Ki("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                                    var c = u[i];
                                    c !== n && (s = c && r(c, !0, a, o), n = c), s && (u[i] = s(e), (l[i] || (l[i] = [])).$$inter = !0, (u.$$observers && u.$$observers[i].$$scope || e).$watch(s, function(e, t) {
                                        "class" === i && e != t ? u.$updateClass(e, t) : u.$set(i, e)
                                    }))
                                }
                            }
                        }
                    })
                }
            }

            function tt(e, n, r) {
                var i, o, a = n[0],
                    s = n.length,
                    u = a.parentNode;
                if (e)
                    for (i = 0, o = e.length; o > i; i++)
                        if (e[i] == a) {
                            e[i++] = r;
                            for (var l = i, c = l + s - 1, f = e.length; f > l; l++, c++) f > c ? e[l] = e[c] : delete e[l];
                            e.length -= s - 1, e.context === a && (e.context = r);
                            break
                        }
                u && u.replaceChild(r, a);
                var d = t.createDocumentFragment();
                d.appendChild(a), ti(r).data(ti(a).data()), ni ? (fi = !0, ni.cleanData([a])) : delete ti.cache[a[ti.expando]];
                for (var p = 1, h = n.length; h > p; p++) {
                    var g = n[p];
                    ti(g).remove(), d.appendChild(g), delete n[p]
                }
                n[0] = r, n.length = 1
            }

            function rt(e, t) {
                return f(function() {
                    return e.apply(null, arguments)
                }, e, t)
            }

            function ot(e, t, n, r, o, a) {
                try {
                    e(t, n, r, o, a)
                } catch (s) {
                    i(s, z(n))
                }
            }
            var at = function(e, t) {
                if (t) {
                    var n, r, i, o = Object.keys(t);
                    for (n = 0, r = o.length; r > n; n++) i = o[n], this[i] = t[i]
                } else this.$attr = {};
                this.$$element = e
            };
            at.prototype = {
                $normalize: Qt,
                $addClass: function(e) {
                    e && e.length > 0 && A.addClass(this.$$element, e)
                },
                $removeClass: function(e) {
                    e && e.length > 0 && A.removeClass(this.$$element, e)
                },
                $updateClass: function(e, t) {
                    var n = Zt(e, t);
                    n && n.length && A.addClass(this.$$element, n);
                    var r = Zt(t, e);
                    r && r.length && A.removeClass(this.$$element, r)
                },
                $set: function(e, t, r, a) {
                    var s, u = this.$$element[0],
                        l = It(u, e),
                        c = Lt(u, e),
                        f = e;
                    if (l ? (this.$$element.prop(e, t), a = l) : c && (this[c] = t, f = c), this[e] = t, a ? this.$attr[e] = a : (a = this.$attr[e], a || (this.$attr[e] = a = nt(e, "-"))), s = F(this.$$element), "a" === s && "href" === e || "img" === s && "src" === e) this[e] = t = O(t, "src" === e);
                    else if ("img" === s && "srcset" === e) {
                        for (var d = "", p = pi(t), h = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, g = /\s/.test(p) ? h : /(,)/, v = p.split(g), m = Math.floor(v.length / 2), $ = 0; m > $; $++) {
                            var y = 2 * $;
                            d += O(pi(v[y]), !0), d += " " + pi(v[y + 1])
                        }
                        var w = pi(v[2 * $]).split(/\s/);
                        d += O(pi(w[0]), !0), 2 === w.length && (d += " " + pi(w[1])), this[e] = t = d
                    }
                    r !== !1 && (null === t || t === n ? this.$$element.removeAttr(a) : this.$$element.attr(a, t));
                    var b = this.$$observers;
                    b && o(b[f], function(e) {
                        try {
                            e(t)
                        } catch (n) {
                            i(n)
                        }
                    })
                },
                $observe: function(e, t) {
                    var n = this,
                        r = n.$$observers || (n.$$observers = lt()),
                        i = r[e] || (r[e] = []);
                    return i.push(t), $.$evalAsync(function() {
                            !i.$$inter && n.hasOwnProperty(e) && t(n[e])
                        }),
                        function() {
                            N(i, t)
                        }
                }
            };
            var st = r.startSymbol(),
                ut = r.endSymbol(),
                ct = "{{" == st || "}}" == ut ? g : function(e) {
                    return e.replace(/\{\{/g, st).replace(/}}/g, ut)
                },
                ft = /^ngAttr[A-Z]/;
            return D.$$addBindingInfo = k ? function(e, t) {
                var n = e.data("$binding") || [];
                di(t) ? n = n.concat(t) : n.push(t), e.data("$binding", n)
            } : h, D.$$addBindingClass = k ? function(e) {
                P(e, "ng-binding")
            } : h, D.$$addScopeInfo = k ? function(e, t, n, r) {
                var i = n ? r ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
                e.data(i, t)
            } : h, D.$$addScopeClass = k ? function(e, t) {
                P(e, t ? "ng-isolate-scope" : "ng-scope")
            } : h, D
        }]
    }

    function Qt(e) {
        return gt(e.replace(Ji, ""))
    }

    function Zt(e, t) {
        var n = "",
            r = e.split(/\s+/),
            i = t.split(/\s+/);
        e: for (var o = 0; o < r.length; o++) {
            for (var a = r[o], s = 0; s < i.length; s++)
                if (a == i[s]) continue e;
            n += (n.length > 0 ? " " : "") + a
        }
        return n
    }

    function en(e) {
        e = ti(e);
        var t = e.length;
        if (1 >= t) return e;
        for (; t--;) {
            var n = e[t];
            n.nodeType === xi && oi.call(e, t, 1)
        }
        return e
    }

    function tn() {
        var e = {},
            t = !1,
            i = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function(t, n) {
            at(t, "controller"), y(t) ? f(e, t) : e[t] = n
        }, this.allowGlobals = function() {
            t = !0
        }, this.$get = ["$injector", "$window", function(o, a) {
            function s(e, t, n, i) {
                if (!e || !y(e.$scope)) throw r("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", i, t);
                e.$scope[t] = n
            }
            return function(r, u, l, c) {
                var d, p, h, g;
                if (l = l === !0, c && w(c) && (g = c), w(r)) {
                    if (p = r.match(i), !p) throw Qi("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", r);
                    h = p[1], g = g || p[3], r = e.hasOwnProperty(h) ? e[h] : st(u.$scope, h, !0) || (t ? st(a, h, !0) : n), ot(r, h, !0)
                }
                if (l) {
                    var v = (di(r) ? r[r.length - 1] : r).prototype;
                    return d = Object.create(v || null), g && s(u, g, d, h || r.name), f(function() {
                        return o.invoke(r, d, u, h), d
                    }, {
                        instance: d,
                        identifier: g
                    })
                }
                return d = o.instantiate(r, u, h), g && s(u, g, d, h || r.name), d
            }
        }]
    }

    function nn() {
        this.$get = ["$window", function(e) {
            return ti(e.document)
        }]
    }

    function rn() {
        this.$get = ["$log", function(e) {
            return function() {
                e.error.apply(e, arguments)
            }
        }]
    }

    function on(e, t) {
        if (w(e)) {
            var n = e.replace(ro, "").trim();
            if (n) {
                var r = t("Content-Type");
                (r && 0 === r.indexOf(Zi) || an(n)) && (e = B(n))
            }
        }
        return e
    }

    function an(e) {
        var t = e.match(to);
        return t && no[t[0]].test(e)
    }

    function sn(e) {
        var t, n, r, i = lt();
        return e ? (o(e.split("\n"), function(e) {
            r = e.indexOf(":"), t = Yr(pi(e.substr(0, r))), n = pi(e.substr(r + 1)), t && (i[t] = i[t] ? i[t] + ", " + n : n)
        }), i) : i
    }

    function un(e) {
        var t = y(e) ? e : n;
        return function(n) {
            if (t || (t = sn(e)), n) {
                var r = t[Yr(n)];
                return void 0 === r && (r = null), r
            }
            return t
        }
    }

    function ln(e, t, n, r) {
        return C(r) ? r(e, t, n) : (o(r, function(r) {
            e = r(e, t, n)
        }), e)
    }

    function cn(e) {
        return e >= 200 && 300 > e
    }

    function fn() {
        var e = this.defaults = {
                transformResponse: [on],
                transformRequest: [function(e) {
                    return !y(e) || E(e) || O(e) || A(e) ? e : V(e)
                }],
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    },
                    post: L(eo),
                    put: L(eo),
                    patch: L(eo)
                },
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN"
            },
            t = !1;
        this.useApplyAsync = function(e) {
            return $(e) ? (t = !!e, this) : t
        };
        var i = this.interceptors = [];
        this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(a, u, l, c, d, p) {
            function h(t) {
                function i(e) {
                    var t = f({}, e);
                    return t.data = e.data ? ln(e.data, e.headers, e.status, u.transformResponse) : e.data, cn(e.status) ? t : d.reject(t)
                }

                function a(e) {
                    var t, n = {};
                    return o(e, function(e, r) {
                        C(e) ? (t = e(), null != t && (n[r] = t)) : n[r] = e
                    }), n
                }

                function s(t) {
                    var n, r, i, o = e.headers,
                        s = f({}, t.headers);
                    o = f({}, o.common, o[Yr(t.method)]);
                    e: for (n in o) {
                        r = Yr(n);
                        for (i in s)
                            if (Yr(i) === r) continue e;
                        s[n] = o[n]
                    }
                    return a(s)
                }
                if (!li.isObject(t)) throw r("$http")("badreq", "Http request configuration must be an object.  Received: {0}", t);
                var u = f({
                    method: "get",
                    transformRequest: e.transformRequest,
                    transformResponse: e.transformResponse
                }, t);
                u.headers = s(t), u.method = Jr(u.method);
                var l = function(t) {
                        var r = t.headers,
                            a = ln(t.data, un(r), n, t.transformRequest);
                        return m(a) && o(r, function(e, t) {
                            "content-type" === Yr(t) && delete r[t]
                        }), m(t.withCredentials) && !m(e.withCredentials) && (t.withCredentials = e.withCredentials), b(t, a).then(i, i)
                    },
                    c = [l, n],
                    p = d.when(u);
                for (o(T, function(e) {
                        (e.request || e.requestError) && c.unshift(e.request, e.requestError), (e.response || e.responseError) && c.push(e.response, e.responseError)
                    }); c.length;) {
                    var h = c.shift(),
                        g = c.shift();
                    p = p.then(h, g)
                }
                return p.success = function(e) {
                    return ot(e, "fn"), p.then(function(t) {
                        e(t.data, t.status, t.headers, u)
                    }), p
                }, p.error = function(e) {
                    return ot(e, "fn"), p.then(null, function(t) {
                        e(t.data, t.status, t.headers, u)
                    }), p
                }, p
            }

            function g() {
                o(arguments, function(e) {
                    h[e] = function(t, n) {
                        return h(f(n || {}, {
                            method: e,
                            url: t
                        }))
                    }
                })
            }

            function v() {
                o(arguments, function(e) {
                    h[e] = function(t, n, r) {
                        return h(f(r || {}, {
                            method: e,
                            url: t,
                            data: n
                        }))
                    }
                })
            }

            function b(r, i) {
                function o(e, n, r, i) {
                    function o() {
                        s(n, e, r, i)
                    }
                    p && (cn(e) ? p.put(x, [e, n, sn(r), i]) : p.remove(x)), t ? c.$applyAsync(o) : (o(), c.$$phase || c.$apply())
                }

                function s(e, t, n, i) {
                    t = Math.max(t, 0), (cn(t) ? v.resolve : v.reject)({
                        data: e,
                        status: t,
                        headers: un(n),
                        config: r,
                        statusText: i
                    })
                }

                function l(e) {
                    s(e.data, e.status, L(e.headers()), e.statusText)
                }

                function f() {
                    var e = h.pendingRequests.indexOf(r); - 1 !== e && h.pendingRequests.splice(e, 1)
                }
                var p, g, v = d.defer(),
                    w = v.promise,
                    b = r.headers,
                    x = k(r.url, r.params);
                if (h.pendingRequests.push(r), w.then(f, f), !r.cache && !e.cache || r.cache === !1 || "GET" !== r.method && "JSONP" !== r.method || (p = y(r.cache) ? r.cache : y(e.cache) ? e.cache : S), p && (g = p.get(x), $(g) ? D(g) ? g.then(l, l) : di(g) ? s(g[1], g[0], L(g[2]), g[3]) : s(g, 200, {}, "OK") : p.put(x, w)), m(g)) {
                    var C = or(r.url) ? u.cookies()[r.xsrfCookieName || e.xsrfCookieName] : n;
                    C && (b[r.xsrfHeaderName || e.xsrfHeaderName] = C), a(r.method, x, i, o, b, r.timeout, r.withCredentials, r.responseType)
                }
                return w
            }

            function k(e, t) {
                if (!t) return e;
                var n = [];
                return s(t, function(e, t) {
                    null === e || m(e) || (di(e) || (e = [e]), o(e, function(e) {
                        y(e) && (e = x(e) ? e.toISOString() : V(e)), n.push(K(t) + "=" + K(e))
                    }))
                }), n.length > 0 && (e += (-1 == e.indexOf("?") ? "?" : "&") + n.join("&")), e
            }
            var S = l("$http"),
                T = [];
            return o(i, function(e) {
                T.unshift(w(e) ? p.get(e) : p.invoke(e))
            }), h.pendingRequests = [], g("get", "delete", "head", "jsonp"), v("post", "put", "patch"), h.defaults = e, h
        }]
    }

    function dn() {
        return new e.XMLHttpRequest
    }

    function pn() {
        this.$get = ["$browser", "$window", "$document", function(e, t, n) {
            return hn(e, dn, e.defer, t.angular.callbacks, n[0])
        }]
    }

    function hn(e, t, r, i, a) {
        function s(e, t, n) {
            var r = a.createElement("script"),
                o = null;
            return r.type = "text/javascript", r.src = e, r.async = !0, o = function(e) {
                Oi(r, "load", o), Oi(r, "error", o), a.body.removeChild(r), r = null;
                var s = -1,
                    u = "unknown";
                e && ("load" !== e.type || i[t].called || (e = {
                    type: "error"
                }), u = e.type, s = "error" === e.type ? 404 : 200), n && n(s, u)
            }, Ai(r, "load", o), Ai(r, "error", o), a.body.appendChild(r), o
        }
        return function(a, u, l, c, f, d, p, g) {
            function v() {
                w && w(), b && b.abort()
            }

            function m(t, i, o, a, s) {
                k !== n && r.cancel(k), w = b = null, t(i, o, a, s), e.$$completeOutstandingRequest(h)
            }
            if (e.$$incOutstandingRequestCount(), u = u || e.url(), "jsonp" == Yr(a)) {
                var y = "_" + (i.counter++).toString(36);
                i[y] = function(e) {
                    i[y].data = e, i[y].called = !0
                };
                var w = s(u.replace("JSON_CALLBACK", "angular.callbacks." + y), y, function(e, t) {
                    m(c, e, i[y].data, "", t), i[y] = h
                })
            } else {
                var b = t();
                b.open(a, u, !0), o(f, function(e, t) {
                    $(e) && b.setRequestHeader(t, e)
                }), b.onload = function() {
                    var e = b.statusText || "",
                        t = "response" in b ? b.response : b.responseText,
                        n = 1223 === b.status ? 204 : b.status;
                    0 === n && (n = t ? 200 : "file" == ir(u).protocol ? 404 : 0), m(c, n, t, b.getAllResponseHeaders(), e)
                };
                var x = function() {
                    m(c, -1, null, null, "")
                };
                if (b.onerror = x, b.onabort = x, p && (b.withCredentials = !0), g) try {
                    b.responseType = g
                } catch (C) {
                    if ("json" !== g) throw C
                }
                b.send(l || null)
            }
            if (d > 0) var k = r(v, d);
            else D(d) && d.then(v)
        }
    }

    function gn() {
        var e = "{{",
            t = "}}";
        this.startSymbol = function(t) {
            return t ? (e = t, this) : e
        }, this.endSymbol = function(e) {
            return e ? (t = e, this) : t
        }, this.$get = ["$parse", "$exceptionHandler", "$sce", function(n, r, i) {
            function o(e) {
                return "\\\\\\" + e
            }

            function a(o, a, d, p) {
                function h(n) {
                    return n.replace(l, e).replace(c, t)
                }

                function g(e) {
                    try {
                        return e = O(e), p && !$(e) ? e : P(e)
                    } catch (t) {
                        var n = io("interr", "Can't interpolate: {0}\n{1}", o, t.toString());
                        r(n)
                    }
                }
                p = !!p;
                for (var v, y, w, b = 0, x = [], k = [], S = o.length, T = [], E = []; S > b;) {
                    if (-1 == (v = o.indexOf(e, b)) || -1 == (y = o.indexOf(t, v + s))) {
                        b !== S && T.push(h(o.substring(b)));
                        break
                    }
                    b !== v && T.push(h(o.substring(b, v))), w = o.substring(v + s, y), x.push(w), k.push(n(w, g)), b = y + u, E.push(T.length), T.push("")
                }
                if (d && T.length > 1) throw io("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", o);
                if (!a || x.length) {
                    var A = function(e) {
                            for (var t = 0, n = x.length; n > t; t++) {
                                if (p && m(e[t])) return;
                                T[E[t]] = e[t]
                            }
                            return T.join("")
                        },
                        O = function(e) {
                            return d ? i.getTrusted(d, e) : i.valueOf(e)
                        },
                        P = function(e) {
                            if (null == e) return "";
                            switch (typeof e) {
                                case "string":
                                    break;
                                case "number":
                                    e = "" + e;
                                    break;
                                default:
                                    e = V(e)
                            }
                            return e
                        };
                    return f(function(e) {
                        var t = 0,
                            n = x.length,
                            i = new Array(n);
                        try {
                            for (; n > t; t++) i[t] = k[t](e);
                            return A(i)
                        } catch (a) {
                            var s = io("interr", "Can't interpolate: {0}\n{1}", o, a.toString());
                            r(s)
                        }
                    }, {
                        exp: o,
                        expressions: x,
                        $$watchDelegate: function(e, t, n) {
                            var r;
                            return e.$watchGroup(k, function(n, i) {
                                var o = A(n);
                                C(t) && t.call(this, o, n !== i ? r : o, e), r = o
                            }, n)
                        }
                    })
                }
            }
            var s = e.length,
                u = t.length,
                l = new RegExp(e.replace(/./g, o), "g"),
                c = new RegExp(t.replace(/./g, o), "g");
            return a.startSymbol = function() {
                return e
            }, a.endSymbol = function() {
                return t
            }, a
        }]
    }

    function vn() {
        this.$get = ["$rootScope", "$window", "$q", "$$q", function(e, t, n, r) {
            function i(i, a, s, u) {
                var l = t.setInterval,
                    c = t.clearInterval,
                    f = 0,
                    d = $(u) && !u,
                    p = (d ? r : n).defer(),
                    h = p.promise;
                return s = $(s) ? s : 0, h.then(null, null, i), h.$$intervalId = l(function() {
                    p.notify(f++), s > 0 && f >= s && (p.resolve(f), c(h.$$intervalId), delete o[h.$$intervalId]), d || e.$apply()
                }, a), o[h.$$intervalId] = p, h
            }
            var o = {};
            return i.cancel = function(e) {
                return e && e.$$intervalId in o ? (o[e.$$intervalId].reject("canceled"), t.clearInterval(e.$$intervalId), delete o[e.$$intervalId], !0) : !1
            }, i
        }]
    }

    function mn() {
        this.$get = function() {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [{
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "¤",
                        posSuf: "",
                        negPre: "(¤",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    }],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
                    SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                    DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
                    SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
                    AMPMS: ["AM", "PM"],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a",
                    ERANAMES: ["Before Christ", "Anno Domini"],
                    ERAS: ["BC", "AD"]
                },
                pluralCat: function(e) {
                    return 1 === e ? "one" : "other"
                }
            }
        }
    }

    function $n(e) {
        for (var t = e.split("/"), n = t.length; n--;) t[n] = Y(t[n]);
        return t.join("/")
    }

    function yn(e, t) {
        var n = ir(e);
        t.$$protocol = n.protocol, t.$$host = n.hostname, t.$$port = d(n.port) || ao[n.protocol] || null
    }

    function wn(e, t) {
        var n = "/" !== e.charAt(0);
        n && (e = "/" + e);
        var r = ir(e);
        t.$$path = decodeURIComponent(n && "/" === r.pathname.charAt(0) ? r.pathname.substring(1) : r.pathname), t.$$search = G(r.search), t.$$hash = decodeURIComponent(r.hash), t.$$path && "/" != t.$$path.charAt(0) && (t.$$path = "/" + t.$$path)
    }

    function bn(e, t) {
        return 0 === t.indexOf(e) ? t.substr(e.length) : void 0
    }

    function xn(e) {
        var t = e.indexOf("#");
        return -1 == t ? e : e.substr(0, t)
    }

    function Cn(e) {
        return e.replace(/(#.+)|#$/, "$1")
    }

    function kn(e) {
        return e.substr(0, xn(e).lastIndexOf("/") + 1)
    }

    function Sn(e) {
        return e.substring(0, e.indexOf("/", e.indexOf("//") + 2))
    }

    function Tn(e, t) {
        this.$$html5 = !0, t = t || "";
        var r = kn(e);
        yn(e, this), this.$$parse = function(e) {
            var t = bn(r, e);
            if (!w(t)) throw so("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', e, r);
            wn(t, this), this.$$path || (this.$$path = "/"), this.$$compose()
        }, this.$$compose = function() {
            var e = X(this.$$search),
                t = this.$$hash ? "#" + Y(this.$$hash) : "";
            this.$$url = $n(this.$$path) + (e ? "?" + e : "") + t, this.$$absUrl = r + this.$$url.substr(1)
        }, this.$$parseLinkUrl = function(i, o) {
            if (o && "#" === o[0]) return this.hash(o.slice(1)), !0;
            var a, s, u;
            return (a = bn(e, i)) !== n ? (s = a, u = (a = bn(t, a)) !== n ? r + (bn("/", a) || a) : e + s) : (a = bn(r, i)) !== n ? u = r + a : r == i + "/" && (u = r), u && this.$$parse(u), !!u
        }
    }

    function En(e, t) {
        var n = kn(e);
        yn(e, this), this.$$parse = function(r) {
            function i(e, t, n) {
                var r, i = /^\/[A-Z]:(\/.*)/;
                return 0 === t.indexOf(n) && (t = t.replace(n, "")), i.exec(t) ? e : (r = i.exec(e), r ? r[1] : e)
            }
            var o, a = bn(e, r) || bn(n, r);
            m(a) || "#" !== a.charAt(0) ? this.$$html5 ? o = a : (o = "", m(a) && (e = r, this.replace())) : (o = bn(t, a), m(o) && (o = a)), wn(o, this), this.$$path = i(this.$$path, o, e), this.$$compose()
        }, this.$$compose = function() {
            var n = X(this.$$search),
                r = this.$$hash ? "#" + Y(this.$$hash) : "";
            this.$$url = $n(this.$$path) + (n ? "?" + n : "") + r, this.$$absUrl = e + (this.$$url ? t + this.$$url : "")
        }, this.$$parseLinkUrl = function(t) {
            return xn(e) == xn(t) ? (this.$$parse(t), !0) : !1
        }
    }

    function An(e, t) {
        this.$$html5 = !0, En.apply(this, arguments);
        var n = kn(e);
        this.$$parseLinkUrl = function(r, i) {
            if (i && "#" === i[0]) return this.hash(i.slice(1)), !0;
            var o, a;
            return e == xn(r) ? o = r : (a = bn(n, r)) ? o = e + t + a : n === r + "/" && (o = n), o && this.$$parse(o), !!o
        }, this.$$compose = function() {
            var n = X(this.$$search),
                r = this.$$hash ? "#" + Y(this.$$hash) : "";
            this.$$url = $n(this.$$path) + (n ? "?" + n : "") + r, this.$$absUrl = e + t + this.$$url
        }
    }

    function On(e) {
        return function() {
            return this[e]
        }
    }

    function Pn(e, t) {
        return function(n) {
            return m(n) ? this[e] : (this[e] = t(n), this.$$compose(), this)
        }
    }

    function Dn() {
        var e = "",
            t = {
                enabled: !1,
                requireBase: !0,
                rewriteLinks: !0
            };
        this.hashPrefix = function(t) {
            return $(t) ? (e = t, this) : e
        }, this.html5Mode = function(e) {
            return P(e) ? (t.enabled = e, this) : y(e) ? (P(e.enabled) && (t.enabled = e.enabled), P(e.requireBase) && (t.requireBase = e.requireBase), P(e.rewriteLinks) && (t.rewriteLinks = e.rewriteLinks), this) : t
        }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(n, r, i, o, a) {
            function s(e, t, n) {
                var i = l.url(),
                    o = l.$$state;
                try {
                    r.url(e, t, n), l.$$state = r.state()
                } catch (a) {
                    throw l.url(i), l.$$state = o, a
                }
            }

            function u(e, t) {
                n.$broadcast("$locationChangeSuccess", l.absUrl(), e, l.$$state, t)
            }
            var l, c, f, d = r.baseHref(),
                p = r.url();
            if (t.enabled) {
                if (!d && t.requireBase) throw so("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
                f = Sn(p) + (d || "/"), c = i.history ? Tn : An
            } else f = xn(p), c = En;
            l = new c(f, "#" + e), l.$$parseLinkUrl(p, p), l.$$state = r.state();
            var h = /^\s*(javascript|mailto):/i;
            o.on("click", function(e) {
                if (t.rewriteLinks && !e.ctrlKey && !e.metaKey && !e.shiftKey && 2 != e.which && 2 != e.button) {
                    for (var i = ti(e.target);
                        "a" !== F(i[0]);)
                        if (i[0] === o[0] || !(i = i.parent())[0]) return;
                    var s = i.prop("href"),
                        u = i.attr("href") || i.attr("xlink:href");
                    y(s) && "[object SVGAnimatedString]" === s.toString() && (s = ir(s.animVal).href), h.test(s) || !s || i.attr("target") || e.isDefaultPrevented() || l.$$parseLinkUrl(s, u) && (e.preventDefault(), l.absUrl() != r.url() && (n.$apply(), a.angular["ff-684208-preventDefault"] = !0))
                }
            }), Cn(l.absUrl()) != Cn(p) && r.url(l.absUrl(), !0);
            var g = !0;
            return r.onUrlChange(function(e, t) {
                n.$evalAsync(function() {
                    var r, i = l.absUrl(),
                        o = l.$$state;
                    l.$$parse(e), l.$$state = t, r = n.$broadcast("$locationChangeStart", e, i, t, o).defaultPrevented, l.absUrl() === e && (r ? (l.$$parse(i), l.$$state = o, s(i, !1, o)) : (g = !1, u(i, o)))
                }), n.$$phase || n.$digest()
            }), n.$watch(function() {
                var e = Cn(r.url()),
                    t = Cn(l.absUrl()),
                    o = r.state(),
                    a = l.$$replace,
                    c = e !== t || l.$$html5 && i.history && o !== l.$$state;
                (g || c) && (g = !1, n.$evalAsync(function() {
                    var t = l.absUrl(),
                        r = n.$broadcast("$locationChangeStart", t, e, l.$$state, o).defaultPrevented;
                    l.absUrl() === t && (r ? (l.$$parse(e), l.$$state = o) : (c && s(t, a, o === l.$$state ? null : l.$$state), u(e, o)))
                })), l.$$replace = !1
            }), l
        }]
    }

    function jn() {
        var e = !0,
            t = this;
        this.debugEnabled = function(t) {
            return $(t) ? (e = t, this) : e
        }, this.$get = ["$window", function(n) {
            function r(e) {
                return e instanceof Error && (e.stack ? e = e.message && -1 === e.stack.indexOf(e.message) ? "Error: " + e.message + "\n" + e.stack : e.stack : e.sourceURL && (e = e.message + "\n" + e.sourceURL + ":" + e.line)), e
            }

            function i(e) {
                var t = n.console || {},
                    i = t[e] || t.log || h,
                    a = !1;
                try {
                    a = !!i.apply
                } catch (s) {}
                return a ? function() {
                    var e = [];
                    return o(arguments, function(t) {
                        e.push(r(t))
                    }), i.apply(t, e)
                } : function(e, t) {
                    i(e, null == t ? "" : t)
                }
            }
            return {
                log: i("log"),
                info: i("info"),
                warn: i("warn"),
                error: i("error"),
                debug: function() {
                    var n = i("debug");
                    return function() {
                        e && n.apply(t, arguments)
                    }
                }()
            }
        }]
    }

    function _n(e, t) {
        if ("__defineGetter__" === e || "__defineSetter__" === e || "__lookupGetter__" === e || "__lookupSetter__" === e || "__proto__" === e) throw lo("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", t);
        return e
    }

    function Fn(e, t) {
        if (e) {
            if (e.constructor === e) throw lo("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", t);
            if (e.window === e) throw lo("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", t);
            if (e.children && (e.nodeName || e.prop && e.attr && e.find)) throw lo("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", t);
            if (e === Object) throw lo("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", t)
        }
        return e
    }

    function Nn(e, t) {
        if (e) {
            if (e.constructor === e) throw lo("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", t);
            if (e === co || e === fo || e === po) throw lo("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", t)
        }
    }

    function In(e) {
        return e.constant
    }

    function Ln(e, t, n, r, i) {
        Fn(e, i), Fn(t, i);
        for (var o, a = n.split("."), s = 0; a.length > 1; s++) {
            o = _n(a.shift(), i);
            var u = 0 === s && t && t[o] || e[o];
            u || (u = {}, e[o] = u), e = Fn(u, i)
        }
        return o = _n(a.shift(), i), Fn(e[o], i), e[o] = r, r
    }

    function Mn(e) {
        return "constructor" == e
    }

    function qn(e, t, r, i, o, a, s) {
        _n(e, a), _n(t, a), _n(r, a), _n(i, a), _n(o, a);
        var u = function(e) {
                return Fn(e, a)
            },
            l = s || Mn(e) ? u : g,
            c = s || Mn(t) ? u : g,
            f = s || Mn(r) ? u : g,
            d = s || Mn(i) ? u : g,
            p = s || Mn(o) ? u : g;
        return function(a, s) {
            var u = s && s.hasOwnProperty(e) ? s : a;
            return null == u ? u : (u = l(u[e]), t ? null == u ? n : (u = c(u[t]), r ? null == u ? n : (u = f(u[r]), i ? null == u ? n : (u = d(u[i]), o ? null == u ? n : u = p(u[o]) : u) : u) : u) : u)
        }
    }

    function Rn(e, t) {
        return function(n, r) {
            return e(n, r, Fn, t)
        }
    }

    function Hn(e, t, r) {
        var i = t.expensiveChecks,
            a = i ? wo : yo,
            s = a[e];
        if (s) return s;
        var u = e.split("."),
            l = u.length;
        if (t.csp) s = 6 > l ? qn(u[0], u[1], u[2], u[3], u[4], r, i) : function(e, t) {
            var o, a = 0;
            do o = qn(u[a++], u[a++], u[a++], u[a++], u[a++], r, i)(e, t), t = n, e = o; while (l > a);
            return o
        };
        else {
            var c = "";
            i && (c += "s = eso(s, fe);\nl = eso(l, fe);\n");
            var f = i;
            o(u, function(e, t) {
                _n(e, r);
                var n = (t ? "s" : '((l&&l.hasOwnProperty("' + e + '"))?l:s)') + "." + e;
                (i || Mn(e)) && (n = "eso(" + n + ", fe)", f = !0), c += "if(s == null) return undefined;\ns=" + n + ";\n"
            }), c += "return s;";
            var d = new Function("s", "l", "eso", "fe", c);
            d.toString = v(c), f && (d = Rn(d, r)), s = d
        }
        return s.sharedGetter = !0, s.assign = function(t, n, r) {
            return Ln(t, r, e, n, e)
        }, a[e] = s, s
    }

    function Un(e) {
        return C(e.valueOf) ? e.valueOf() : bo.call(e)
    }

    function Vn() {
        var e = lt(),
            t = lt();
        this.$get = ["$filter", "$sniffer", function(n, r) {
            function i(e) {
                var t = e;
                return e.sharedGetter && (t = function(t, n) {
                    return e(t, n)
                }, t.literal = e.literal, t.constant = e.constant, t.assign = e.assign), t
            }

            function a(e, t) {
                for (var n = 0, r = e.length; r > n; n++) {
                    var i = e[n];
                    i.constant || (i.inputs ? a(i.inputs, t) : -1 === t.indexOf(i) && t.push(i))
                }
                return t
            }

            function s(e, t) {
                return null == e || null == t ? e === t : "object" == typeof e && (e = Un(e), "object" == typeof e) ? !1 : e === t || e !== e && t !== t
            }

            function u(e, t, n, r) {
                var i, o = r.$$inputs || (r.$$inputs = a(r.inputs, []));
                if (1 === o.length) {
                    var u = s;
                    return o = o[0], e.$watch(function(e) {
                        var t = o(e);
                        return s(t, u) || (i = r(e), u = t && Un(t)), i
                    }, t, n)
                }
                for (var l = [], c = 0, f = o.length; f > c; c++) l[c] = s;
                return e.$watch(function(e) {
                    for (var t = !1, n = 0, a = o.length; a > n; n++) {
                        var u = o[n](e);
                        (t || (t = !s(u, l[n]))) && (l[n] = u && Un(u))
                    }
                    return t && (i = r(e)), i
                }, t, n)
            }

            function l(e, t, n, r) {
                var i, o;
                return i = e.$watch(function(e) {
                    return r(e)
                }, function(e, n, r) {
                    o = e, C(t) && t.apply(this, arguments), $(e) && r.$$postDigest(function() {
                        $(o) && i()
                    })
                }, n)
            }

            function c(e, t, n, r) {
                function i(e) {
                    var t = !0;
                    return o(e, function(e) {
                        $(e) || (t = !1)
                    }), t
                }
                var a, s;
                return a = e.$watch(function(e) {
                    return r(e)
                }, function(e, n, r) {
                    s = e, C(t) && t.call(this, e, n, r), i(e) && r.$$postDigest(function() {
                        i(s) && a()
                    })
                }, n)
            }

            function f(e, t, n, r) {
                var i;
                return i = e.$watch(function(e) {
                    return r(e)
                }, function() {
                    C(t) && t.apply(this, arguments), i()
                }, n)
            }

            function d(e, t) {
                if (!t) return e;
                var n = e.$$watchDelegate,
                    r = n !== c && n !== l,
                    i = r ? function(n, r) {
                        var i = e(n, r);
                        return t(i, n, r)
                    } : function(n, r) {
                        var i = e(n, r),
                            o = t(i, n, r);
                        return $(i) ? o : i
                    };
                return e.$$watchDelegate && e.$$watchDelegate !== u ? i.$$watchDelegate = e.$$watchDelegate : t.$stateful || (i.$$watchDelegate = u, i.inputs = [e]), i
            }
            var p = {
                    csp: r.csp,
                    expensiveChecks: !1
                },
                g = {
                    csp: r.csp,
                    expensiveChecks: !0
                };
            return function(r, o, a) {
                var s, v, m;
                switch (typeof r) {
                    case "string":
                        m = r = r.trim();
                        var $ = a ? t : e;
                        if (s = $[m], !s) {
                            ":" === r.charAt(0) && ":" === r.charAt(1) && (v = !0, r = r.substring(2));
                            var y = a ? g : p,
                                w = new mo(y),
                                b = new $o(w, n, y);
                            s = b.parse(r), s.constant ? s.$$watchDelegate = f : v ? (s = i(s), s.$$watchDelegate = s.literal ? c : l) : s.inputs && (s.$$watchDelegate = u), $[m] = s
                        }
                        return d(s, o);
                    case "function":
                        return d(r, o);
                    default:
                        return d(h, o)
                }
            }
        }]
    }

    function Bn() {
        this.$get = ["$rootScope", "$exceptionHandler", function(e, t) {
            return Wn(function(t) {
                e.$evalAsync(t)
            }, t)
        }]
    }

    function zn() {
        this.$get = ["$browser", "$exceptionHandler", function(e, t) {
            return Wn(function(t) {
                e.defer(t)
            }, t)
        }]
    }

    function Wn(e, t) {
        function i(e, t, n) {
            function r(t) {
                return function(n) {
                    i || (i = !0, t.call(e, n))
                }
            }
            var i = !1;
            return [r(t), r(n)]
        }

        function a() {
            this.$$state = {
                status: 0
            }
        }

        function s(e, t) {
            return function(n) {
                t.call(e, n)
            }
        }

        function u(e) {
            var r, i, o;
            o = e.pending, e.processScheduled = !1, e.pending = n;
            for (var a = 0, s = o.length; s > a; ++a) {
                i = o[a][0], r = o[a][e.status];
                try {
                    C(r) ? i.resolve(r(e.value)) : 1 === e.status ? i.resolve(e.value) : i.reject(e.value)
                } catch (u) {
                    i.reject(u), t(u)
                }
            }
        }

        function l(t) {
            !t.processScheduled && t.pending && (t.processScheduled = !0, e(function() {
                u(t)
            }))
        }

        function c() {
            this.promise = new a, this.resolve = s(this, this.resolve), this.reject = s(this, this.reject), this.notify = s(this, this.notify)
        }

        function f(e) {
            var t = new c,
                n = 0,
                r = di(e) ? [] : {};
            return o(e, function(e, i) {
                n++, m(e).then(function(e) {
                    r.hasOwnProperty(i) || (r[i] = e, --n || t.resolve(r))
                }, function(e) {
                    r.hasOwnProperty(i) || t.reject(e)
                })
            }), 0 === n && t.resolve(r), t.promise
        }
        var d = r("$q", TypeError),
            p = function() {
                return new c
            };
        a.prototype = {
            then: function(e, t, n) {
                var r = new c;
                return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([r, e, t, n]), this.$$state.status > 0 && l(this.$$state), r.promise
            },
            "catch": function(e) {
                return this.then(null, e)
            },
            "finally": function(e, t) {
                return this.then(function(t) {
                    return v(t, !0, e)
                }, function(t) {
                    return v(t, !1, e)
                }, t)
            }
        }, c.prototype = {
            resolve: function(e) {
                this.promise.$$state.status || (e === this.promise ? this.$$reject(d("qcycle", "Expected promise to be resolved with value other than itself '{0}'", e)) : this.$$resolve(e))
            },
            $$resolve: function(e) {
                var n, r;
                r = i(this, this.$$resolve, this.$$reject);
                try {
                    (y(e) || C(e)) && (n = e && e.then), C(n) ? (this.promise.$$state.status = -1, n.call(e, r[0], r[1], this.notify)) : (this.promise.$$state.value = e, this.promise.$$state.status = 1, l(this.promise.$$state))
                } catch (o) {
                    r[1](o), t(o)
                }
            },
            reject: function(e) {
                this.promise.$$state.status || this.$$reject(e)
            },
            $$reject: function(e) {
                this.promise.$$state.value = e, this.promise.$$state.status = 2, l(this.promise.$$state)
            },
            notify: function(n) {
                var r = this.promise.$$state.pending;
                this.promise.$$state.status <= 0 && r && r.length && e(function() {
                    for (var e, i, o = 0, a = r.length; a > o; o++) {
                        i = r[o][0], e = r[o][3];
                        try {
                            i.notify(C(e) ? e(n) : n)
                        } catch (s) {
                            t(s)
                        }
                    }
                })
            }
        };
        var h = function(e) {
                var t = new c;
                return t.reject(e), t.promise
            },
            g = function(e, t) {
                var n = new c;
                return t ? n.resolve(e) : n.reject(e), n.promise
            },
            v = function(e, t, n) {
                var r = null;
                try {
                    C(n) && (r = n())
                } catch (i) {
                    return g(i, !1)
                }
                return D(r) ? r.then(function() {
                    return g(e, t)
                }, function(e) {
                    return g(e, !1)
                }) : g(e, t)
            },
            m = function(e, t, n, r) {
                var i = new c;
                return i.resolve(e), i.promise.then(t, n, r)
            },
            $ = function w(e) {
                function t(e) {
                    r.resolve(e)
                }

                function n(e) {
                    r.reject(e)
                }
                if (!C(e)) throw d("norslvr", "Expected resolverFn, got '{0}'", e);
                if (!(this instanceof w)) return new w(e);
                var r = new c;
                return e(t, n), r.promise
            };
        return $.defer = p, $.reject = h, $.when = m, $.all = f, $
    }

    function Gn() {
        this.$get = ["$window", "$timeout", function(e, t) {
            function n() {
                for (var e = 0; e < c.length; e++) {
                    var t = c[e];
                    t && (c[e] = null, t())
                }
                l = c.length = 0
            }

            function r(e) {
                var t = c.length;
                return l++, c.push(e), 0 === t && (u = s(n)),
                    function() {
                        t >= 0 && (c[t] = null, t = null, 0 === --l && u && (u(), u = null, c.length = 0))
                    }
            }
            var i = e.requestAnimationFrame || e.webkitRequestAnimationFrame,
                o = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.webkitCancelRequestAnimationFrame,
                a = !!i,
                s = a ? function(e) {
                    var t = i(e);
                    return function() {
                        o(t)
                    }
                } : function(e) {
                    var n = t(e, 16.66, !1);
                    return function() {
                        t.cancel(n)
                    }
                };
            r.supported = a;
            var u, l = 0,
                c = [];
            return r
        }]
    }

    function Xn() {
        function e(e) {
            function t() {
                this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$id = l(), this.$$ChildScope = null
            }
            return t.prototype = e, t
        }
        var t = 10,
            n = r("$rootScope"),
            a = null,
            s = null;
        this.digestTtl = function(e) {
            return arguments.length && (t = e), t
        }, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function(r, u, c, f) {
            function d(e) {
                e.currentScope.$$destroyed = !0
            }

            function p() {
                this.$id = l(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$isolateBindings = null
            }

            function g(e) {
                if (k.$$phase) throw n("inprog", "{0} already in progress", k.$$phase);
                k.$$phase = e
            }

            function v() {
                k.$$phase = null
            }

            function $(e, t, n) {
                do e.$$listenerCount[n] -= t, 0 === e.$$listenerCount[n] && delete e.$$listenerCount[n]; while (e = e.$parent)
            }

            function w() {}

            function b() {
                for (; E.length;) try {
                    E.shift()()
                } catch (e) {
                    u(e)
                }
                s = null
            }

            function x() {
                null === s && (s = f.defer(function() {
                    k.$apply(b)
                }))
            }
            p.prototype = {
                constructor: p,
                $new: function(t, n) {
                    var r;
                    return n = n || this, t ? (r = new p, r.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = e(this)), r = new this.$$ChildScope), r.$parent = n, r.$$prevSibling = n.$$childTail, n.$$childHead ? (n.$$childTail.$$nextSibling = r, n.$$childTail = r) : n.$$childHead = n.$$childTail = r, (t || n != this) && r.$on("$destroy", d), r
                },
                $watch: function(e, t, n) {
                    var r = c(e);
                    if (r.$$watchDelegate) return r.$$watchDelegate(this, t, n, r);
                    var i = this,
                        o = i.$$watchers,
                        s = {
                            fn: t,
                            last: w,
                            get: r,
                            exp: e,
                            eq: !!n
                        };
                    return a = null, C(t) || (s.fn = h), o || (o = i.$$watchers = []), o.unshift(s),
                        function() {
                            N(o, s), a = null
                        }
                },
                $watchGroup: function(e, t) {
                    function n() {
                        u = !1, l ? (l = !1, t(i, i, s)) : t(i, r, s)
                    }
                    var r = new Array(e.length),
                        i = new Array(e.length),
                        a = [],
                        s = this,
                        u = !1,
                        l = !0;
                    if (!e.length) {
                        var c = !0;
                        return s.$evalAsync(function() {
                                c && t(i, i, s)
                            }),
                            function() {
                                c = !1
                            }
                    }
                    return 1 === e.length ? this.$watch(e[0], function(e, n, o) {
                        i[0] = e, r[0] = n, t(i, e === n ? i : r, o)
                    }) : (o(e, function(e, t) {
                        var o = s.$watch(e, function(e, o) {
                            i[t] = e, r[t] = o, u || (u = !0, s.$evalAsync(n))
                        });
                        a.push(o)
                    }), function() {
                        for (; a.length;) a.shift()()
                    })
                },
                $watchCollection: function(e, t) {
                    function n(e) {
                        o = e;
                        var t, n, r, s, u;
                        if (!m(o)) {
                            if (y(o))
                                if (i(o)) {
                                    a !== p && (a = p, v = a.length = 0, f++), t = o.length, v !== t && (f++, a.length = v = t);
                                    for (var l = 0; t > l; l++) u = a[l], s = o[l], r = u !== u && s !== s, r || u === s || (f++, a[l] = s)
                                } else {
                                    a !== h && (a = h = {}, v = 0, f++), t = 0;
                                    for (n in o) o.hasOwnProperty(n) && (t++, s = o[n], u = a[n], n in a ? (r = u !== u && s !== s, r || u === s || (f++, a[n] = s)) : (v++, a[n] = s, f++));
                                    if (v > t) {
                                        f++;
                                        for (n in a) o.hasOwnProperty(n) || (v--, delete a[n])
                                    }
                                }
                            else a !== o && (a = o, f++);
                            return f
                        }
                    }

                    function r() {
                        if (g ? (g = !1, t(o, o, u)) : t(o, s, u), l)
                            if (y(o))
                                if (i(o)) {
                                    s = new Array(o.length);
                                    for (var e = 0; e < o.length; e++) s[e] = o[e]
                                } else {
                                    s = {};
                                    for (var n in o) Kr.call(o, n) && (s[n] = o[n])
                                }
                        else s = o
                    }
                    n.$stateful = !0;
                    var o, a, s, u = this,
                        l = t.length > 1,
                        f = 0,
                        d = c(e, n),
                        p = [],
                        h = {},
                        g = !0,
                        v = 0;
                    return this.$watch(d, r)
                },
                $digest: function() {
                    var e, r, i, o, l, c, d, p, h, m, $ = t,
                        y = this,
                        x = [];
                    g("$digest"), f.$$checkUrlChange(), this === k && null !== s && (f.defer.cancel(s), b()), a = null;
                    do {
                        for (c = !1, p = y; S.length;) {
                            try {
                                m = S.shift(), m.scope.$eval(m.expression, m.locals)
                            } catch (E) {
                                u(E)
                            }
                            a = null
                        }
                        e: do {
                            if (o = p.$$watchers)
                                for (l = o.length; l--;) try {
                                    if (e = o[l])
                                        if ((r = e.get(p)) === (i = e.last) || (e.eq ? M(r, i) : "number" == typeof r && "number" == typeof i && isNaN(r) && isNaN(i))) {
                                            if (e === a) {
                                                c = !1;
                                                break e
                                            }
                                        } else c = !0, a = e, e.last = e.eq ? I(r, null) : r, e.fn(r, i === w ? r : i, p), 5 > $ && (h = 4 - $, x[h] || (x[h] = []), x[h].push({
                                            msg: C(e.exp) ? "fn: " + (e.exp.name || e.exp.toString()) : e.exp,
                                            newVal: r,
                                            oldVal: i
                                        }))
                                } catch (E) {
                                    u(E)
                                }
                            if (!(d = p.$$childHead || p !== y && p.$$nextSibling))
                                for (; p !== y && !(d = p.$$nextSibling);) p = p.$parent
                        } while (p = d);
                        if ((c || S.length) && !$--) throw v(), n("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", t, x)
                    } while (c || S.length);
                    for (v(); T.length;) try {
                        T.shift()()
                    } catch (E) {
                        u(E)
                    }
                },
                $destroy: function() {
                    if (!this.$$destroyed) {
                        var e = this.$parent;
                        if (this.$broadcast("$destroy"), this.$$destroyed = !0, this !== k) {
                            for (var t in this.$$listenerCount) $(this, this.$$listenerCount[t], t);
                            e.$$childHead == this && (e.$$childHead = this.$$nextSibling), e.$$childTail == this && (e.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = h, this.$on = this.$watch = this.$watchGroup = function() {
                                return h
                            }, this.$$listeners = {}, this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null
                        }
                    }
                },
                $eval: function(e, t) {
                    return c(e)(this, t)
                },
                $evalAsync: function(e, t) {
                    k.$$phase || S.length || f.defer(function() {
                        S.length && k.$digest()
                    }), S.push({
                        scope: this,
                        expression: e,
                        locals: t
                    })
                },
                $$postDigest: function(e) {
                    T.push(e)
                },
                $apply: function(e) {
                    try {
                        return g("$apply"), this.$eval(e)
                    } catch (t) {
                        u(t)
                    } finally {
                        v();
                        try {
                            k.$digest()
                        } catch (t) {
                            throw u(t), t
                        }
                    }
                },
                $applyAsync: function(e) {
                    function t() {
                        n.$eval(e)
                    }
                    var n = this;
                    e && E.push(t), x()
                },
                $on: function(e, t) {
                    var n = this.$$listeners[e];
                    n || (this.$$listeners[e] = n = []), n.push(t);
                    var r = this;
                    do r.$$listenerCount[e] || (r.$$listenerCount[e] = 0), r.$$listenerCount[e]++; while (r = r.$parent);
                    var i = this;
                    return function() {
                        var r = n.indexOf(t); - 1 !== r && (n[r] = null, $(i, 1, e))
                    }
                },
                $emit: function(e) {
                    var t, n, r, i = [],
                        o = this,
                        a = !1,
                        s = {
                            name: e,
                            targetScope: o,
                            stopPropagation: function() {
                                a = !0
                            },
                            preventDefault: function() {
                                s.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        },
                        l = q([s], arguments, 1);
                    do {
                        for (t = o.$$listeners[e] || i, s.currentScope = o, n = 0, r = t.length; r > n; n++)
                            if (t[n]) try {
                                t[n].apply(null, l)
                            } catch (c) {
                                u(c)
                            } else t.splice(n, 1), n--, r--;
                        if (a) return s.currentScope = null, s;
                        o = o.$parent
                    } while (o);
                    return s.currentScope = null, s
                },
                $broadcast: function(e) {
                    var t = this,
                        n = t,
                        r = t,
                        i = {
                            name: e,
                            targetScope: t,
                            preventDefault: function() {
                                i.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        };
                    if (!t.$$listenerCount[e]) return i;
                    for (var o, a, s, l = q([i], arguments, 1); n = r;) {
                        for (i.currentScope = n, o = n.$$listeners[e] || [], a = 0, s = o.length; s > a; a++)
                            if (o[a]) try {
                                o[a].apply(null, l)
                            } catch (c) {
                                u(c)
                            } else o.splice(a, 1), a--, s--;
                        if (!(r = n.$$listenerCount[e] && n.$$childHead || n !== t && n.$$nextSibling))
                            for (; n !== t && !(r = n.$$nextSibling);) n = n.$parent
                    }
                    return i.currentScope = null, i
                }
            };
            var k = new p,
                S = k.$$asyncQueue = [],
                T = k.$$postDigestQueue = [],
                E = k.$$applyAsyncQueue = [];
            return k
        }]
    }

    function Yn() {
        var e = /^\s*(https?|ftp|mailto|tel|file):/,
            t = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function(t) {
            return $(t) ? (e = t, this) : e
        }, this.imgSrcSanitizationWhitelist = function(e) {
            return $(e) ? (t = e, this) : t
        }, this.$get = function() {
            return function(n, r) {
                var i, o = r ? t : e;
                return i = ir(n).href, "" === i || i.match(o) ? n : "unsafe:" + i
            }
        }
    }

    function Kn(e) {
        if ("self" === e) return e;
        if (w(e)) {
            if (e.indexOf("***") > -1) throw xo("iwcard", "Illegal sequence *** in string matcher.  String: {0}", e);
            return e = hi(e).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + e + "$")
        }
        if (k(e)) return new RegExp("^" + e.source + "$");
        throw xo("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
    }

    function Jn(e) {
        var t = [];
        return $(e) && o(e, function(e) {
            t.push(Kn(e))
        }), t
    }

    function Qn() {
        this.SCE_CONTEXTS = Co;
        var e = ["self"],
            t = [];
        this.resourceUrlWhitelist = function(t) {
            return arguments.length && (e = Jn(t)), e
        }, this.resourceUrlBlacklist = function(e) {
            return arguments.length && (t = Jn(e)), t
        }, this.$get = ["$injector", function(r) {
            function i(e, t) {
                return "self" === e ? or(t) : !!e.exec(t.href)
            }

            function o(n) {
                var r, o, a = ir(n.toString()),
                    s = !1;
                for (r = 0, o = e.length; o > r; r++)
                    if (i(e[r], a)) {
                        s = !0;
                        break
                    }
                if (s)
                    for (r = 0, o = t.length; o > r; r++)
                        if (i(t[r], a)) {
                            s = !1;
                            break
                        }
                return s
            }

            function a(e) {
                var t = function(e) {
                    this.$$unwrapTrustedValue = function() {
                        return e
                    }
                };
                return e && (t.prototype = new e), t.prototype.valueOf = function() {
                    return this.$$unwrapTrustedValue()
                }, t.prototype.toString = function() {
                    return this.$$unwrapTrustedValue().toString()
                }, t
            }

            function s(e, t) {
                var r = d.hasOwnProperty(e) ? d[e] : null;
                if (!r) throw xo("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", e, t);
                if (null === t || t === n || "" === t) return t;
                if ("string" != typeof t) throw xo("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", e);
                return new r(t)
            }

            function u(e) {
                return e instanceof f ? e.$$unwrapTrustedValue() : e
            }

            function l(e, t) {
                if (null === t || t === n || "" === t) return t;
                var r = d.hasOwnProperty(e) ? d[e] : null;
                if (r && t instanceof r) return t.$$unwrapTrustedValue();
                if (e === Co.RESOURCE_URL) {
                    if (o(t)) return t;
                    throw xo("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", t.toString())
                }
                if (e === Co.HTML) return c(t);
                throw xo("unsafe", "Attempting to use an unsafe value in a safe context.")
            }
            var c = function() {
                throw xo("unsafe", "Attempting to use an unsafe value in a safe context.")
            };
            r.has("$sanitize") && (c = r.get("$sanitize"));
            var f = a(),
                d = {};
            return d[Co.HTML] = a(f), d[Co.CSS] = a(f), d[Co.URL] = a(f), d[Co.JS] = a(f), d[Co.RESOURCE_URL] = a(d[Co.URL]), {
                trustAs: s,
                getTrusted: l,
                valueOf: u
            }
        }]
    }

    function Zn() {
        var e = !0;
        this.enabled = function(t) {
            return arguments.length && (e = !!t), e
        }, this.$get = ["$parse", "$sceDelegate", function(t, n) {
            if (e && 8 > ei) throw xo("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
            var r = L(Co);
            r.isEnabled = function() {
                return e
            }, r.trustAs = n.trustAs, r.getTrusted = n.getTrusted, r.valueOf = n.valueOf, e || (r.trustAs = r.getTrusted = function(e, t) {
                return t
            }, r.valueOf = g), r.parseAs = function(e, n) {
                var i = t(n);
                return i.literal && i.constant ? i : t(n, function(t) {
                    return r.getTrusted(e, t)
                })
            };
            var i = r.parseAs,
                a = r.getTrusted,
                s = r.trustAs;
            return o(Co, function(e, t) {
                var n = Yr(t);
                r[gt("parse_as_" + n)] = function(t) {
                    return i(e, t)
                }, r[gt("get_trusted_" + n)] = function(t) {
                    return a(e, t)
                }, r[gt("trust_as_" + n)] = function(t) {
                    return s(e, t)
                }
            }), r
        }]
    }

    function er() {
        this.$get = ["$window", "$document", function(e, t) {
            var n, r, i = {},
                o = d((/android (\d+)/.exec(Yr((e.navigator || {}).userAgent)) || [])[1]),
                a = /Boxee/i.test((e.navigator || {}).userAgent),
                s = t[0] || {},
                u = /^(Moz|webkit|ms)(?=[A-Z])/,
                l = s.body && s.body.style,
                c = !1,
                f = !1;
            if (l) {
                for (var p in l)
                    if (r = u.exec(p)) {
                        n = r[0], n = n.substr(0, 1).toUpperCase() + n.substr(1);
                        break
                    }
                n || (n = "WebkitOpacity" in l && "webkit"), c = !!("transition" in l || n + "Transition" in l), f = !!("animation" in l || n + "Animation" in l), !o || c && f || (c = w(s.body.style.webkitTransition), f = w(s.body.style.webkitAnimation))
            }
            return {
                history: !(!e.history || !e.history.pushState || 4 > o || a),
                hasEvent: function(e) {
                    if ("input" === e && 11 >= ei) return !1;
                    if (m(i[e])) {
                        var t = s.createElement("div");
                        i[e] = "on" + e in t
                    }
                    return i[e]
                },
                csp: gi(),
                vendorPrefix: n,
                transitions: c,
                animations: f,
                android: o
            }
        }]
    }

    function tr() {
        this.$get = ["$templateCache", "$http", "$q", "$sce", function(e, t, n, r) {
            function i(o, a) {
                function s(e) {
                    if (!a) throw Ki("tpload", "Failed to load template: {0}", o);
                    return n.reject(e)
                }
                i.totalPendingRequests++, w(o) && e.get(o) || (o = r.getTrustedResourceUrl(o));
                var u = t.defaults && t.defaults.transformResponse;
                di(u) ? u = u.filter(function(e) {
                    return e !== on
                }) : u === on && (u = null);
                var l = {
                    cache: e,
                    transformResponse: u
                };
                return t.get(o, l)["finally"](function() {
                    i.totalPendingRequests--
                }).then(function(e) {
                    return e.data
                }, s)
            }
            return i.totalPendingRequests = 0, i
        }]
    }

    function nr() {
        this.$get = ["$rootScope", "$browser", "$location", function(e, t, n) {
            var r = {};
            return r.findBindings = function(e, t, n) {
                var r = e.getElementsByClassName("ng-binding"),
                    i = [];
                return o(r, function(e) {
                    var r = li.element(e).data("$binding");
                    r && o(r, function(r) {
                        if (n) {
                            var o = new RegExp("(^|\\s)" + hi(t) + "(\\s|\\||$)");
                            o.test(r) && i.push(e)
                        } else -1 != r.indexOf(t) && i.push(e)
                    })
                }), i
            }, r.findModels = function(e, t, n) {
                for (var r = ["ng-", "data-ng-", "ng\\:"], i = 0; i < r.length; ++i) {
                    var o = n ? "=" : "*=",
                        a = "[" + r[i] + "model" + o + '"' + t + '"]',
                        s = e.querySelectorAll(a);
                    if (s.length) return s
                }
            }, r.getLocation = function() {
                return n.url()
            }, r.setLocation = function(t) {
                t !== n.url() && (n.url(t), e.$digest())
            }, r.whenStable = function(e) {
                t.notifyWhenNoOutstandingRequests(e)
            }, r
        }]
    }

    function rr() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(e, t, n, r, i) {
            function o(o, s, u) {
                var l, c = $(u) && !u,
                    f = (c ? r : n).defer(),
                    d = f.promise;
                return l = t.defer(function() {
                    try {
                        f.resolve(o())
                    } catch (t) {
                        f.reject(t), i(t)
                    } finally {
                        delete a[d.$$timeoutId]
                    }
                    c || e.$apply()
                }, s), d.$$timeoutId = l, a[l] = f, d
            }
            var a = {};
            return o.cancel = function(e) {
                return e && e.$$timeoutId in a ? (a[e.$$timeoutId].reject("canceled"), delete a[e.$$timeoutId], t.defer.cancel(e.$$timeoutId)) : !1
            }, o
        }]
    }

    function ir(e) {
        var t = e;
        return ei && (ko.setAttribute("href", t), t = ko.href), ko.setAttribute("href", t), {
            href: ko.href,
            protocol: ko.protocol ? ko.protocol.replace(/:$/, "") : "",
            host: ko.host,
            search: ko.search ? ko.search.replace(/^\?/, "") : "",
            hash: ko.hash ? ko.hash.replace(/^#/, "") : "",
            hostname: ko.hostname,
            port: ko.port,
            pathname: "/" === ko.pathname.charAt(0) ? ko.pathname : "/" + ko.pathname
        }
    }

    function or(e) {
        var t = w(e) ? ir(e) : e;
        return t.protocol === So.protocol && t.host === So.host
    }

    function ar() {
        this.$get = v(e)
    }

    function sr(e) {
        function t(r, i) {
            if (y(r)) {
                var a = {};
                return o(r, function(e, n) {
                    a[n] = t(n, e)
                }), a
            }
            return e.factory(r + n, i)
        }
        var n = "Filter";
        this.register = t, this.$get = ["$injector", function(e) {
            return function(t) {
                return e.get(t + n)
            }
        }], t("currency", fr), t("date", kr), t("filter", ur), t("json", Sr), t("limitTo", Tr), t("lowercase", Po), t("number", dr), t("orderBy", Er), t("uppercase", Do)
    }

    function ur() {
        return function(e, t, n) {
            if (!di(e)) return e;
            var r, i, o = null !== t ? typeof t : "null";
            switch (o) {
                case "function":
                    r = t;
                    break;
                case "boolean":
                case "null":
                case "number":
                case "string":
                    i = !0;
                case "object":
                    r = lr(t, n, i);
                    break;
                default:
                    return e
            }
            return e.filter(r)
        }
    }

    function lr(e, t, n) {
        var r, i = y(e) && "$" in e;
        return t === !0 ? t = M : C(t) || (t = function(e, t) {
            return m(e) ? !1 : null === e || null === t ? e === t : y(e) || y(t) ? !1 : (e = Yr("" + e), t = Yr("" + t), -1 !== e.indexOf(t))
        }), r = function(r) {
            return i && !y(r) ? cr(r, e.$, t, !1) : cr(r, e, t, n)
        }
    }

    function cr(e, t, n, r, i) {
        var o = null !== e ? typeof e : "null",
            a = null !== t ? typeof t : "null";
        if ("string" === a && "!" === t.charAt(0)) return !cr(e, t.substring(1), n, r);
        if (di(e)) return e.some(function(e) {
            return cr(e, t, n, r)
        });
        switch (o) {
            case "object":
                var s;
                if (r) {
                    for (s in e)
                        if ("$" !== s.charAt(0) && cr(e[s], t, n, !0)) return !0;
                    return i ? !1 : cr(e, t, n, !1)
                }
                if ("object" === a) {
                    for (s in t) {
                        var u = t[s];
                        if (!C(u) && !m(u)) {
                            var l = "$" === s,
                                c = l ? e : e[s];
                            if (!cr(c, u, n, l, l)) return !1
                        }
                    }
                    return !0
                }
                return n(e, t);
            case "function":
                return !1;
            default:
                return n(e, t)
        }
    }

    function fr(e) {
        var t = e.NUMBER_FORMATS;
        return function(e, n, r) {
            return m(n) && (n = t.CURRENCY_SYM), m(r) && (r = t.PATTERNS[1].maxFrac), null == e ? e : pr(e, t.PATTERNS[1], t.GROUP_SEP, t.DECIMAL_SEP, r).replace(/\u00A4/g, n)
        }
    }

    function dr(e) {
        var t = e.NUMBER_FORMATS;
        return function(e, n) {
            return null == e ? e : pr(e, t.PATTERNS[0], t.GROUP_SEP, t.DECIMAL_SEP, n)
        }
    }

    function pr(e, t, n, r, i) {
        if (!isFinite(e) || y(e)) return "";
        var o = 0 > e;
        e = Math.abs(e);
        var a = e + "",
            s = "",
            u = [],
            l = !1;
        if (-1 !== a.indexOf("e")) {
            var c = a.match(/([\d\.]+)e(-?)(\d+)/);
            c && "-" == c[2] && c[3] > i + 1 ? e = 0 : (s = a, l = !0)
        }
        if (l) i > 0 && 1 > e && (s = e.toFixed(i), e = parseFloat(s));
        else {
            var f = (a.split(To)[1] || "").length;
            m(i) && (i = Math.min(Math.max(t.minFrac, f), t.maxFrac)), e = +(Math.round(+(e.toString() + "e" + i)).toString() + "e" + -i);
            var d = ("" + e).split(To),
                p = d[0];
            d = d[1] || "";
            var h, g = 0,
                v = t.lgSize,
                $ = t.gSize;
            if (p.length >= v + $)
                for (g = p.length - v, h = 0; g > h; h++)(g - h) % $ === 0 && 0 !== h && (s += n), s += p.charAt(h);
            for (h = g; h < p.length; h++)(p.length - h) % v === 0 && 0 !== h && (s += n), s += p.charAt(h);
            for (; d.length < i;) d += "0";
            i && "0" !== i && (s += r + d.substr(0, i))
        }
        return 0 === e && (o = !1), u.push(o ? t.negPre : t.posPre, s, o ? t.negSuf : t.posSuf), u.join("")
    }

    function hr(e, t, n) {
        var r = "";
        for (0 > e && (r = "-", e = -e), e = "" + e; e.length < t;) e = "0" + e;
        return n && (e = e.substr(e.length - t)), r + e
    }

    function gr(e, t, n, r) {
        return n = n || 0,
            function(i) {
                var o = i["get" + e]();
                return (n > 0 || o > -n) && (o += n), 0 === o && -12 == n && (o = 12), hr(o, t, r)
            }
    }

    function vr(e, t) {
        return function(n, r) {
            var i = n["get" + e](),
                o = Jr(t ? "SHORT" + e : e);
            return r[o][i]
        }
    }

    function mr(e) {
        var t = -1 * e.getTimezoneOffset(),
            n = t >= 0 ? "+" : "";
        return n += hr(Math[t > 0 ? "floor" : "ceil"](t / 60), 2) + hr(Math.abs(t % 60), 2)
    }

    function $r(e) {
        var t = new Date(e, 0, 1).getDay();
        return new Date(e, 0, (4 >= t ? 5 : 12) - t)
    }

    function yr(e) {
        return new Date(e.getFullYear(), e.getMonth(), e.getDate() + (4 - e.getDay()))
    }

    function wr(e) {
        return function(t) {
            var n = $r(t.getFullYear()),
                r = yr(t),
                i = +r - +n,
                o = 1 + Math.round(i / 6048e5);
            return hr(o, e)
        }
    }

    function br(e, t) {
        return e.getHours() < 12 ? t.AMPMS[0] : t.AMPMS[1]
    }

    function xr(e, t) {
        return e.getFullYear() <= 0 ? t.ERAS[0] : t.ERAS[1]
    }

    function Cr(e, t) {
        return e.getFullYear() <= 0 ? t.ERANAMES[0] : t.ERANAMES[1]
    }

    function kr(e) {
        function t(e) {
            var t;
            if (t = e.match(n)) {
                var r = new Date(0),
                    i = 0,
                    o = 0,
                    a = t[8] ? r.setUTCFullYear : r.setFullYear,
                    s = t[8] ? r.setUTCHours : r.setHours;
                t[9] && (i = d(t[9] + t[10]), o = d(t[9] + t[11])), a.call(r, d(t[1]), d(t[2]) - 1, d(t[3]));
                var u = d(t[4] || 0) - i,
                    l = d(t[5] || 0) - o,
                    c = d(t[6] || 0),
                    f = Math.round(1e3 * parseFloat("0." + (t[7] || 0)));
                return s.call(r, u, l, c, f), r
            }
            return e
        }
        var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(n, r, i) {
            var a, s, u = "",
                l = [];
            if (r = r || "mediumDate", r = e.DATETIME_FORMATS[r] || r, w(n) && (n = Oo.test(n) ? d(n) : t(n)), b(n) && (n = new Date(n)), !x(n)) return n;
            for (; r;) s = Ao.exec(r), s ? (l = q(l, s, 1), r = l.pop()) : (l.push(r), r = null);
            return i && "UTC" === i && (n = new Date(n.getTime()), n.setMinutes(n.getMinutes() + n.getTimezoneOffset())), o(l, function(t) {
                a = Eo[t], u += a ? a(n, e.DATETIME_FORMATS) : t.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            }), u
        }
    }

    function Sr() {
        return function(e, t) {
            return m(t) && (t = 2), V(e, t)
        }
    }

    function Tr() {
        return function(e, t) {
            return b(e) && (e = e.toString()), di(e) || w(e) ? (t = 1 / 0 === Math.abs(Number(t)) ? Number(t) : d(t), t ? t > 0 ? e.slice(0, t) : e.slice(t) : w(e) ? "" : []) : e
        }
    }

    function Er(e) {
        return function(t, n, r) {
            function o(e, t) {
                for (var r = 0; r < n.length; r++) {
                    var i = n[r](e, t);
                    if (0 !== i) return i
                }
                return 0
            }

            function a(e, t) {
                return t ? function(t, n) {
                    return e(n, t)
                } : e
            }

            function s(e) {
                switch (typeof e) {
                    case "number":
                    case "boolean":
                    case "string":
                        return !0;
                    default:
                        return !1
                }
            }

            function u(e) {
                return null === e ? "null" : "function" == typeof e.valueOf && (e = e.valueOf(), s(e)) ? e : "function" == typeof e.toString && (e = e.toString(), s(e)) ? e : ""
            }

            function l(e, t) {
                var n = typeof e,
                    r = typeof t;
                return n === r && "object" === n && (e = u(e), t = u(t)), n === r ? ("string" === n && (e = e.toLowerCase(), t = t.toLowerCase()), e === t ? 0 : t > e ? -1 : 1) : r > n ? -1 : 1
            }
            return i(t) ? (n = di(n) ? n : [n], 0 === n.length && (n = ["+"]), n = n.map(function(t) {
                var n = !1,
                    r = t || g;
                if (w(t)) {
                    if (("+" == t.charAt(0) || "-" == t.charAt(0)) && (n = "-" == t.charAt(0), t = t.substring(1)), "" === t) return a(l, n);
                    if (r = e(t), r.constant) {
                        var i = r();
                        return a(function(e, t) {
                            return l(e[i], t[i])
                        }, n)
                    }
                }
                return a(function(e, t) {
                    return l(r(e), r(t))
                }, n)
            }), ii.call(t).sort(a(o, r))) : t
        }
    }

    function Ar(e) {
        return C(e) && (e = {
            link: e
        }), e.restrict = e.restrict || "AC", v(e)
    }

    function Or(e, t) {
        e.$name = t
    }

    function Pr(e, t, r, i, a) {
        var s = this,
            u = [],
            l = s.$$parentForm = e.parent().controller("form") || Fo;
        s.$error = {}, s.$$success = {}, s.$pending = n, s.$name = a(t.name || t.ngForm || "")(r), s.$dirty = !1, s.$pristine = !0, s.$valid = !0, s.$invalid = !1, s.$submitted = !1, l.$addControl(s), s.$rollbackViewValue = function() {
            o(u, function(e) {
                e.$rollbackViewValue()
            })
        }, s.$commitViewValue = function() {
            o(u, function(e) {
                e.$commitViewValue()
            })
        }, s.$addControl = function(e) {
            at(e.$name, "input"), u.push(e), e.$name && (s[e.$name] = e)
        }, s.$$renameControl = function(e, t) {
            var n = e.$name;
            s[n] === e && delete s[n], s[t] = e, e.$name = t
        }, s.$removeControl = function(e) {
            e.$name && s[e.$name] === e && delete s[e.$name], o(s.$pending, function(t, n) {
                s.$setValidity(n, null, e)
            }), o(s.$error, function(t, n) {
                s.$setValidity(n, null, e)
            }), o(s.$$success, function(t, n) {
                s.$setValidity(n, null, e)
            }), N(u, e)
        }, zr({
            ctrl: this,
            $element: e,
            set: function(e, t, n) {
                var r = e[t];
                if (r) {
                    var i = r.indexOf(n); - 1 === i && r.push(n)
                } else e[t] = [n]
            },
            unset: function(e, t, n) {
                var r = e[t];
                r && (N(r, n), 0 === r.length && delete e[t])
            },
            parentForm: l,
            $animate: i
        }), s.$setDirty = function() {
            i.removeClass(e, va), i.addClass(e, ma), s.$dirty = !0, s.$pristine = !1, l.$setDirty()
        }, s.$setPristine = function() {
            i.setClass(e, va, ma + " " + No), s.$dirty = !1, s.$pristine = !0, s.$submitted = !1, o(u, function(e) {
                e.$setPristine()
            })
        }, s.$setUntouched = function() {
            o(u, function(e) {
                e.$setUntouched()
            })
        }, s.$setSubmitted = function() {
            i.addClass(e, No), s.$submitted = !0, l.$setSubmitted()
        }
    }

    function Dr(e) {
        e.$formatters.push(function(t) {
            return e.$isEmpty(t) ? t : t.toString()
        })
    }

    function jr(e, t, n, r, i, o) {
        _r(e, t, n, r, i, o), Dr(r)
    }

    function _r(e, t, n, r, i, o) {
        var a = Yr(t[0].type);
        if (!i.android) {
            var s = !1;
            t.on("compositionstart", function() {
                s = !0
            }), t.on("compositionend", function() {
                s = !1, u()
            })
        }
        var u = function(e) {
            if (l && (o.defer.cancel(l), l = null), !s) {
                var i = t.val(),
                    u = e && e.type;
                "password" === a || n.ngTrim && "false" === n.ngTrim || (i = pi(i)), (r.$viewValue !== i || "" === i && r.$$hasNativeValidators) && r.$setViewValue(i, u)
            }
        };
        if (i.hasEvent("input")) t.on("input", u);
        else {
            var l, c = function(e, t, n) {
                l || (l = o.defer(function() {
                    l = null, t && t.value === n || u(e)
                }))
            };
            t.on("keydown", function(e) {
                var t = e.keyCode;
                91 === t || t > 15 && 19 > t || t >= 37 && 40 >= t || c(e, this, this.value)
            }), i.hasEvent("paste") && t.on("paste cut", c)
        }
        t.on("change", u), r.$render = function() {
            t.val(r.$isEmpty(r.$viewValue) ? "" : r.$viewValue)
        }
    }

    function Fr(e, t) {
        if (x(e)) return e;
        if (w(e)) {
            zo.lastIndex = 0;
            var n = zo.exec(e);
            if (n) {
                var r = +n[1],
                    i = +n[2],
                    o = 0,
                    a = 0,
                    s = 0,
                    u = 0,
                    l = $r(r),
                    c = 7 * (i - 1);
                return t && (o = t.getHours(), a = t.getMinutes(), s = t.getSeconds(), u = t.getMilliseconds()), new Date(r, 0, l.getDate() + c, o, a, s, u)
            }
        }
        return 0 / 0
    }

    function Nr(e, t) {
        return function(n, r) {
            var i, a;
            if (x(n)) return n;
            if (w(n)) {
                if ('"' == n.charAt(0) && '"' == n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1)), qo.test(n)) return new Date(n);
                if (e.lastIndex = 0, i = e.exec(n)) return i.shift(), a = r ? {
                    yyyy: r.getFullYear(),
                    MM: r.getMonth() + 1,
                    dd: r.getDate(),
                    HH: r.getHours(),
                    mm: r.getMinutes(),
                    ss: r.getSeconds(),
                    sss: r.getMilliseconds() / 1e3
                } : {
                    yyyy: 1970,
                    MM: 1,
                    dd: 1,
                    HH: 0,
                    mm: 0,
                    ss: 0,
                    sss: 0
                }, o(i, function(e, n) {
                    n < t.length && (a[t[n]] = +e)
                }), new Date(a.yyyy, a.MM - 1, a.dd, a.HH, a.mm, a.ss || 0, 1e3 * a.sss || 0)
            }
            return 0 / 0
        }
    }

    function Ir(e, t, r, i) {
        return function(o, a, s, u, l, c, f) {
            function d(e) {
                return e && !(e.getTime && e.getTime() !== e.getTime())
            }

            function p(e) {
                return $(e) ? x(e) ? e : r(e) : n
            }
            Lr(o, a, s, u), _r(o, a, s, u, l, c);
            var h, g = u && u.$options && u.$options.timezone;
            if (u.$$parserName = e, u.$parsers.push(function(e) {
                    if (u.$isEmpty(e)) return null;
                    if (t.test(e)) {
                        var i = r(e, h);
                        return "UTC" === g && i.setMinutes(i.getMinutes() - i.getTimezoneOffset()), i
                    }
                    return n
                }), u.$formatters.push(function(e) {
                    if (e && !x(e)) throw ba("datefmt", "Expected `{0}` to be a date", e);
                    if (d(e)) {
                        if (h = e, h && "UTC" === g) {
                            var t = 6e4 * h.getTimezoneOffset();
                            h = new Date(h.getTime() + t)
                        }
                        return f("date")(e, i, g)
                    }
                    return h = null, ""
                }), $(s.min) || s.ngMin) {
                var v;
                u.$validators.min = function(e) {
                    return !d(e) || m(v) || r(e) >= v
                }, s.$observe("min", function(e) {
                    v = p(e), u.$validate()
                })
            }
            if ($(s.max) || s.ngMax) {
                var y;
                u.$validators.max = function(e) {
                    return !d(e) || m(y) || r(e) <= y
                }, s.$observe("max", function(e) {
                    y = p(e), u.$validate()
                })
            }
        }
    }

    function Lr(e, t, r, i) {
        var o = t[0],
            a = i.$$hasNativeValidators = y(o.validity);
        a && i.$parsers.push(function(e) {
            var r = t.prop(Xr) || {};
            return r.badInput && !r.typeMismatch ? n : e
        })
    }

    function Mr(e, t, r, i, o, a) {
        if (Lr(e, t, r, i), _r(e, t, r, i, o, a), i.$$parserName = "number", i.$parsers.push(function(e) {
                return i.$isEmpty(e) ? null : Uo.test(e) ? parseFloat(e) : n
            }), i.$formatters.push(function(e) {
                if (!i.$isEmpty(e)) {
                    if (!b(e)) throw ba("numfmt", "Expected `{0}` to be a number", e);
                    e = e.toString()
                }
                return e
            }), $(r.min) || r.ngMin) {
            var s;
            i.$validators.min = function(e) {
                return i.$isEmpty(e) || m(s) || e >= s
            }, r.$observe("min", function(e) {
                $(e) && !b(e) && (e = parseFloat(e, 10)), s = b(e) && !isNaN(e) ? e : n, i.$validate()
            })
        }
        if ($(r.max) || r.ngMax) {
            var u;
            i.$validators.max = function(e) {
                return i.$isEmpty(e) || m(u) || u >= e
            }, r.$observe("max", function(e) {
                $(e) && !b(e) && (e = parseFloat(e, 10)), u = b(e) && !isNaN(e) ? e : n, i.$validate()
            })
        }
    }

    function qr(e, t, n, r, i, o) {
        _r(e, t, n, r, i, o), Dr(r), r.$$parserName = "url", r.$validators.url = function(e, t) {
            var n = e || t;
            return r.$isEmpty(n) || Ro.test(n)
        }
    }

    function Rr(e, t, n, r, i, o) {
        _r(e, t, n, r, i, o), Dr(r), r.$$parserName = "email", r.$validators.email = function(e, t) {
            var n = e || t;
            return r.$isEmpty(n) || Ho.test(n)
        }
    }

    function Hr(e, t, n, r) {
        m(n.name) && t.attr("name", l());
        var i = function(e) {
            t[0].checked && r.$setViewValue(n.value, e && e.type)
        };
        t.on("click", i), r.$render = function() {
            var e = n.value;
            t[0].checked = e == r.$viewValue
        }, n.$observe("value", r.$render)
    }

    function Ur(e, t, n, i, o) {
        var a;
        if ($(i)) {
            if (a = e(i), !a.constant) throw r("ngModel")("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", n, i);
            return a(t)
        }
        return o
    }

    function Vr(e, t, n, r, i, o, a, s) {
        var u = Ur(s, e, "ngTrueValue", n.ngTrueValue, !0),
            l = Ur(s, e, "ngFalseValue", n.ngFalseValue, !1),
            c = function(e) {
                r.$setViewValue(t[0].checked, e && e.type)
            };
        t.on("click", c), r.$render = function() {
            t[0].checked = r.$viewValue
        }, r.$isEmpty = function(e) {
            return e === !1
        }, r.$formatters.push(function(e) {
            return M(e, u)
        }), r.$parsers.push(function(e) {
            return e ? u : l
        })
    }

    function Br(e, t) {
        return e = "ngClass" + e, ["$animate", function(n) {
            function r(e, t) {
                var n = [];
                e: for (var r = 0; r < e.length; r++) {
                    for (var i = e[r], o = 0; o < t.length; o++)
                        if (i == t[o]) continue e;
                    n.push(i)
                }
                return n
            }

            function i(e) {
                if (di(e)) return e;
                if (w(e)) return e.split(" ");
                if (y(e)) {
                    var t = [];
                    return o(e, function(e, n) {
                        e && (t = t.concat(n.split(" ")))
                    }), t
                }
                return e
            }
            return {
                restrict: "AC",
                link: function(a, s, u) {
                    function l(e) {
                        var t = f(e, 1);
                        u.$addClass(t)
                    }

                    function c(e) {
                        var t = f(e, -1);
                        u.$removeClass(t)
                    }

                    function f(e, t) {
                        var n = s.data("$classCounts") || {},
                            r = [];
                        return o(e, function(e) {
                            (t > 0 || n[e]) && (n[e] = (n[e] || 0) + t, n[e] === +(t > 0) && r.push(e))
                        }), s.data("$classCounts", n), r.join(" ")
                    }

                    function d(e, t) {
                        var i = r(t, e),
                            o = r(e, t);
                        i = f(i, 1), o = f(o, -1), i && i.length && n.addClass(s, i), o && o.length && n.removeClass(s, o)
                    }

                    function p(e) {
                        if (t === !0 || a.$index % 2 === t) {
                            var n = i(e || []);
                            if (h) {
                                if (!M(e, h)) {
                                    var r = i(h);
                                    d(r, n)
                                }
                            } else l(n)
                        }
                        h = L(e)
                    }
                    var h;
                    a.$watch(u[e], p, !0), u.$observe("class", function() {
                        p(a.$eval(u[e]))
                    }), "ngClass" !== e && a.$watch("$index", function(n, r) {
                        var o = 1 & n;
                        if (o !== (1 & r)) {
                            var s = i(a.$eval(u[e]));
                            o === t ? l(s) : c(s)
                        }
                    })
                }
            }
        }]
    }

    function zr(e) {
        function t(e, t, u) {
            t === n ? r("$pending", e, u) : i("$pending", e, u), P(t) ? t ? (f(s.$error, e, u), c(s.$$success, e, u)) : (c(s.$error, e, u), f(s.$$success, e, u)) : (f(s.$error, e, u), f(s.$$success, e, u)), s.$pending ? (o(wa, !0), s.$valid = s.$invalid = n, a("", null)) : (o(wa, !1), s.$valid = Wr(s.$error), s.$invalid = !s.$valid, a("", s.$valid));
            var l;
            l = s.$pending && s.$pending[e] ? n : s.$error[e] ? !1 : s.$$success[e] ? !0 : null, a(e, l), d.$setValidity(e, l, s)
        }

        function r(e, t, n) {
            s[e] || (s[e] = {}), c(s[e], t, n)
        }

        function i(e, t, r) {
            s[e] && f(s[e], t, r), Wr(s[e]) && (s[e] = n)
        }

        function o(e, t) {
            t && !l[e] ? (p.addClass(u, e), l[e] = !0) : !t && l[e] && (p.removeClass(u, e), l[e] = !1)
        }

        function a(e, t) {
            e = e ? "-" + nt(e, "-") : "", o(ha + e, t === !0), o(ga + e, t === !1)
        }
        var s = e.ctrl,
            u = e.$element,
            l = {},
            c = e.set,
            f = e.unset,
            d = e.parentForm,
            p = e.$animate;
        l[ga] = !(l[ha] = u.hasClass(ha)), s.$setValidity = t
    }

    function Wr(e) {
        if (e)
            for (var t in e) return !1;
        return !0
    }
    var Gr = /^\/(.+)\/([a-z]*)$/,
        Xr = "validity",
        Yr = function(e) {
            return w(e) ? e.toLowerCase() : e
        },
        Kr = Object.prototype.hasOwnProperty,
        Jr = function(e) {
            return w(e) ? e.toUpperCase() : e
        },
        Qr = function(e) {
            return w(e) ? e.replace(/[A-Z]/g, function(e) {
                return String.fromCharCode(32 | e.charCodeAt(0))
            }) : e
        },
        Zr = function(e) {
            return w(e) ? e.replace(/[a-z]/g, function(e) {
                return String.fromCharCode(-33 & e.charCodeAt(0))
            }) : e
        };
    "i" !== "I".toLowerCase() && (Yr = Qr, Jr = Zr);
    var ei, ti, ni, ri, ii = [].slice,
        oi = [].splice,
        ai = [].push,
        si = Object.prototype.toString,
        ui = r("ng"),
        li = e.angular || (e.angular = {}),
        ci = 0;
    ei = t.documentMode, h.$inject = [], g.$inject = [];
    var fi, di = Array.isArray,
        pi = function(e) {
            return w(e) ? e.trim() : e
        },
        hi = function(e) {
            return e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
        },
        gi = function() {
            if ($(gi.isActive_)) return gi.isActive_;
            var e = !(!t.querySelector("[ng-csp]") && !t.querySelector("[data-ng-csp]"));
            if (!e) try {
                new Function("")
            } catch (n) {
                e = !0
            }
            return gi.isActive_ = e
        },
        vi = ["ng-", "data-ng-", "ng:", "x-ng-"],
        mi = /[A-Z]/g,
        $i = !1,
        yi = 1,
        wi = 2,
        bi = 3,
        xi = 8,
        Ci = 9,
        ki = 11,
        Si = {
            full: "1.3.17",
            major: 1,
            minor: 3,
            dot: 17,
            codeName: "tsktskskly-euouae"
        };
    wt.expando = "ng339";
    var Ti = wt.cache = {},
        Ei = 1,
        Ai = function(e, t, n) {
            e.addEventListener(t, n, !1)
        },
        Oi = function(e, t, n) {
            e.removeEventListener(t, n, !1)
        };
    wt._data = function(e) {
        return this.cache[e[this.expando]] || {}
    };
    var Pi = /([\:\-\_]+(.))/g,
        Di = /^moz([A-Z])/,
        ji = {
            mouseleave: "mouseout",
            mouseenter: "mouseover"
        },
        _i = r("jqLite"),
        Fi = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        Ni = /<|&#?\w+;/,
        Ii = /<([\w:]+)/,
        Li = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Mi = {
            option: [1, '<select multiple="multiple">', "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Mi.optgroup = Mi.option, Mi.tbody = Mi.tfoot = Mi.colgroup = Mi.caption = Mi.thead, Mi.th = Mi.td;
    var qi = wt.prototype = {
            ready: function(n) {
                function r() {
                    i || (i = !0, n())
                }
                var i = !1;
                "complete" === t.readyState ? setTimeout(r) : (this.on("DOMContentLoaded", r), wt(e).on("load", r))
            },
            toString: function() {
                var e = [];
                return o(this, function(t) {
                    e.push("" + t)
                }), "[" + e.join(", ") + "]"
            },
            eq: function(e) {
                return ti(e >= 0 ? this[e] : this[this.length + e])
            },
            length: 0,
            push: ai,
            sort: [].sort,
            splice: [].splice
        },
        Ri = {};
    o("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(e) {
        Ri[Yr(e)] = e
    });
    var Hi = {};
    o("input,select,option,textarea,button,form,details".split(","), function(e) {
        Hi[e] = !0
    });
    var Ui = {
        ngMinlength: "minlength",
        ngMaxlength: "maxlength",
        ngMin: "min",
        ngMax: "max",
        ngPattern: "pattern"
    };
    o({
        data: Tt,
        removeData: kt
    }, function(e, t) {
        wt[t] = e
    }), o({
        data: Tt,
        inheritedData: jt,
        scope: function(e) {
            return ti.data(e, "$scope") || jt(e.parentNode || e, ["$isolateScope", "$scope"])
        },
        isolateScope: function(e) {
            return ti.data(e, "$isolateScope") || ti.data(e, "$isolateScopeNoTemplate")
        },
        controller: Dt,
        injector: function(e) {
            return jt(e, "$injector")
        },
        removeAttr: function(e, t) {
            e.removeAttribute(t)
        },
        hasClass: Et,
        css: function(e, t, n) {
            return t = gt(t), $(n) ? void(e.style[t] = n) : e.style[t]
        },
        attr: function(e, t, r) {
            var i = e.nodeType;
            if (i !== bi && i !== wi && i !== xi) {
                var o = Yr(t);
                if (Ri[o]) {
                    if (!$(r)) return e[t] || (e.attributes.getNamedItem(t) || h).specified ? o : n;
                    r ? (e[t] = !0, e.setAttribute(t, o)) : (e[t] = !1, e.removeAttribute(o))
                } else if ($(r)) e.setAttribute(t, r);
                else if (e.getAttribute) {
                    var a = e.getAttribute(t, 2);
                    return null === a ? n : a
                }
            }
        },
        prop: function(e, t, n) {
            return $(n) ? void(e[t] = n) : e[t]
        },
        text: function() {
            function e(e, t) {
                if (m(t)) {
                    var n = e.nodeType;
                    return n === yi || n === bi ? e.textContent : ""
                }
                e.textContent = t
            }
            return e.$dv = "", e
        }(),
        val: function(e, t) {
            if (m(t)) {
                if (e.multiple && "select" === F(e)) {
                    var n = [];
                    return o(e.options, function(e) {
                        e.selected && n.push(e.value || e.text)
                    }), 0 === n.length ? null : n
                }
                return e.value
            }
            e.value = t
        },
        html: function(e, t) {
            return m(t) ? e.innerHTML : (xt(e, !0), void(e.innerHTML = t))
        },
        empty: _t
    }, function(e, t) {
        wt.prototype[t] = function(t, r) {
            var i, o, a = this.length;
            if (e !== _t && (2 == e.length && e !== Et && e !== Dt ? t : r) === n) {
                if (y(t)) {
                    for (i = 0; a > i; i++)
                        if (e === Tt) e(this[i], t);
                        else
                            for (o in t) e(this[i], o, t[o]);
                    return this
                }
                for (var s = e.$dv, u = s === n ? Math.min(a, 1) : a, l = 0; u > l; l++) {
                    var c = e(this[l], t, r);
                    s = s ? s + c : c
                }
                return s
            }
            for (i = 0; a > i; i++) e(this[i], t, r);
            return this
        }
    }), o({
        removeData: kt,
        on: function Xa(e, t, n, r) {
            if ($(r)) throw _i("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
            if (mt(e)) {
                var i = St(e, !0),
                    o = i.events,
                    a = i.handle;
                a || (a = i.handle = Mt(e, o));
                for (var s = t.indexOf(" ") >= 0 ? t.split(" ") : [t], u = s.length; u--;) {
                    t = s[u];
                    var l = o[t];
                    l || (o[t] = [], "mouseenter" === t || "mouseleave" === t ? Xa(e, ji[t], function(e) {
                        var n = this,
                            r = e.relatedTarget;
                        (!r || r !== n && !n.contains(r)) && a(e, t)
                    }) : "$destroy" !== t && Ai(e, t, a), l = o[t]), l.push(n)
                }
            }
        },
        off: Ct,
        one: function(e, t, n) {
            e = ti(e), e.on(t, function r() {
                e.off(t, n), e.off(t, r)
            }), e.on(t, n)
        },
        replaceWith: function(e, t) {
            var n, r = e.parentNode;
            xt(e), o(new wt(t), function(t) {
                n ? r.insertBefore(t, n.nextSibling) : r.replaceChild(t, e), n = t
            })
        },
        children: function(e) {
            var t = [];
            return o(e.childNodes, function(e) {
                e.nodeType === yi && t.push(e)
            }), t
        },
        contents: function(e) {
            return e.contentDocument || e.childNodes || []
        },
        append: function(e, t) {
            var n = e.nodeType;
            if (n === yi || n === ki) {
                t = new wt(t);
                for (var r = 0, i = t.length; i > r; r++) {
                    var o = t[r];
                    e.appendChild(o)
                }
            }
        },
        prepend: function(e, t) {
            if (e.nodeType === yi) {
                var n = e.firstChild;
                o(new wt(t), function(t) {
                    e.insertBefore(t, n)
                })
            }
        },
        wrap: function(e, t) {
            t = ti(t).eq(0).clone()[0];
            var n = e.parentNode;
            n && n.replaceChild(t, e), t.appendChild(e)
        },
        remove: Ft,
        detach: function(e) {
            Ft(e, !0)
        },
        after: function(e, t) {
            var n = e,
                r = e.parentNode;
            t = new wt(t);
            for (var i = 0, o = t.length; o > i; i++) {
                var a = t[i];
                r.insertBefore(a, n.nextSibling), n = a
            }
        },
        addClass: Ot,
        removeClass: At,
        toggleClass: function(e, t, n) {
            t && o(t.split(" "), function(t) {
                var r = n;
                m(r) && (r = !Et(e, t)), (r ? Ot : At)(e, t)
            })
        },
        parent: function(e) {
            var t = e.parentNode;
            return t && t.nodeType !== ki ? t : null
        },
        next: function(e) {
            return e.nextElementSibling
        },
        find: function(e, t) {
            return e.getElementsByTagName ? e.getElementsByTagName(t) : []
        },
        clone: bt,
        triggerHandler: function(e, t, n) {
            var r, i, a, s = t.type || t,
                u = St(e),
                l = u && u.events,
                c = l && l[s];
            c && (r = {
                preventDefault: function() {
                    this.defaultPrevented = !0
                },
                isDefaultPrevented: function() {
                    return this.defaultPrevented === !0
                },
                stopImmediatePropagation: function() {
                    this.immediatePropagationStopped = !0
                },
                isImmediatePropagationStopped: function() {
                    return this.immediatePropagationStopped === !0
                },
                stopPropagation: h,
                type: s,
                target: e
            }, t.type && (r = f(r, t)), i = L(c), a = n ? [r].concat(n) : [r], o(i, function(t) {
                r.isImmediatePropagationStopped() || t.apply(e, a)
            }))
        }
    }, function(e, t) {
        wt.prototype[t] = function(t, n, r) {
            for (var i, o = 0, a = this.length; a > o; o++) m(i) ? (i = e(this[o], t, n, r), $(i) && (i = ti(i))) : Pt(i, e(this[o], t, n, r));
            return $(i) ? i : this
        }, wt.prototype.bind = wt.prototype.on, wt.prototype.unbind = wt.prototype.off
    }), Ht.prototype = {
        put: function(e, t) {
            this[Rt(e, this.nextUid)] = t
        },
        get: function(e) {
            return this[Rt(e, this.nextUid)]
        },
        remove: function(e) {
            var t = this[e = Rt(e, this.nextUid)];
            return delete this[e], t
        }
    };
    var Vi = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
        Bi = /,/,
        zi = /^\s*(_?)(\S+?)\1\s*$/,
        Wi = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
        Gi = r("$injector");
    Bt.$$annotate = Vt;
    var Xi = r("$animate"),
        Yi = ["$provide", function(e) {
            this.$$selectors = {}, this.register = function(t, n) {
                var r = t + "-animation";
                if (t && "." != t.charAt(0)) throw Xi("notcsel", "Expecting class selector starting with '.' got '{0}'.", t);
                this.$$selectors[t.substr(1)] = r, e.factory(r, n)
            }, this.classNameFilter = function(e) {
                return 1 === arguments.length && (this.$$classNameFilter = e instanceof RegExp ? e : null), this.$$classNameFilter
            }, this.$get = ["$$q", "$$asyncCallback", "$rootScope", function(e, t, n) {
                function r(t) {
                    var r, i = e.defer();
                    return i.promise.$$cancelFn = function() {
                        r && r()
                    }, n.$$postDigest(function() {
                        r = t(function() {
                            i.resolve()
                        })
                    }), i.promise
                }

                function i(e, t) {
                    var n = [],
                        r = [],
                        i = lt();
                    return o((e.attr("class") || "").split(/\s+/), function(e) {
                        i[e] = !0
                    }), o(t, function(e, t) {
                        var o = i[t];
                        e === !1 && o ? r.push(t) : e !== !0 || o || n.push(t)
                    }), n.length + r.length > 0 && [n.length ? n : null, r.length ? r : null]
                }

                function a(e, t, n) {
                    for (var r = 0, i = t.length; i > r; ++r) {
                        var o = t[r];
                        e[o] = n
                    }
                }

                function s() {
                    return l || (l = e.defer(), t(function() {
                        l.resolve(), l = null
                    })), l.promise
                }

                function u(e, t) {
                    if (li.isObject(t)) {
                        var n = f(t.from || {}, t.to || {});
                        e.css(n)
                    }
                }
                var l;
                return {
                    animate: function(e, t, n) {
                        return u(e, {
                            from: t,
                            to: n
                        }), s()
                    },
                    enter: function(e, t, n, r) {
                        return u(e, r), n ? n.after(e) : t.prepend(e), s()
                    },
                    leave: function(e, t) {
                        return u(e, t), e.remove(), s()
                    },
                    move: function(e, t, n, r) {
                        return this.enter(e, t, n, r)
                    },
                    addClass: function(e, t, n) {
                        return this.setClass(e, t, [], n)
                    },
                    $$addClassImmediately: function(e, t, n) {
                        return e = ti(e), t = w(t) ? t : di(t) ? t.join(" ") : "", o(e, function(e) {
                            Ot(e, t)
                        }), u(e, n), s()
                    },
                    removeClass: function(e, t, n) {
                        return this.setClass(e, [], t, n)
                    },
                    $$removeClassImmediately: function(e, t, n) {
                        return e = ti(e), t = w(t) ? t : di(t) ? t.join(" ") : "", o(e, function(e) {
                            At(e, t)
                        }), u(e, n), s()
                    },
                    setClass: function(e, t, n, o) {
                        var s = this,
                            u = "$$animateClasses",
                            l = !1;
                        e = ti(e);
                        var c = e.data(u);
                        c ? o && c.options && (c.options = li.extend(c.options || {}, o)) : (c = {
                            classes: {},
                            options: o
                        }, l = !0);
                        var f = c.classes;
                        return t = di(t) ? t : t.split(" "), n = di(n) ? n : n.split(" "), a(f, t, !0), a(f, n, !1), l && (c.promise = r(function(t) {
                            var n = e.data(u);
                            if (e.removeData(u), n) {
                                var r = i(e, n.classes);
                                r && s.$$setClassImmediately(e, r[0], r[1], n.options)
                            }
                            t()
                        }), e.data(u, c)), c.promise
                    },
                    $$setClassImmediately: function(e, t, n, r) {
                        return t && this.$$addClassImmediately(e, t), n && this.$$removeClassImmediately(e, n), u(e, r), s()
                    },
                    enabled: h,
                    cancel: h
                }
            }]
        }],
        Ki = r("$compile");
    Jt.$inject = ["$provide", "$$sanitizeUriProvider"];
    var Ji = /^((?:x|data)[\:\-_])/i,
        Qi = r("$controller"),
        Zi = "application/json",
        eo = {
            "Content-Type": Zi + ";charset=utf-8"
        },
        to = /^\[|^\{(?!\{)/,
        no = {
            "[": /]$/,
            "{": /}$/
        },
        ro = /^\)\]\}',?\n/,
        io = r("$interpolate"),
        oo = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
        ao = {
            http: 80,
            https: 443,
            ftp: 21
        },
        so = r("$location"),
        uo = {
            $$html5: !1,
            $$replace: !1,
            absUrl: On("$$absUrl"),
            url: function(e) {
                if (m(e)) return this.$$url;
                var t = oo.exec(e);
                return (t[1] || "" === e) && this.path(decodeURIComponent(t[1])), (t[2] || t[1] || "" === e) && this.search(t[3] || ""), this.hash(t[5] || ""), this
            },
            protocol: On("$$protocol"),
            host: On("$$host"),
            port: On("$$port"),
            path: Pn("$$path", function(e) {
                return e = null !== e ? e.toString() : "", "/" == e.charAt(0) ? e : "/" + e
            }),
            search: function(e, t) {
                switch (arguments.length) {
                    case 0:
                        return this.$$search;
                    case 1:
                        if (w(e) || b(e)) e = e.toString(), this.$$search = G(e);
                        else {
                            if (!y(e)) throw so("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                            e = I(e, {}), o(e, function(t, n) {
                                null == t && delete e[n]
                            }), this.$$search = e
                        }
                        break;
                    default:
                        m(t) || null === t ? delete this.$$search[e] : this.$$search[e] = t
                }
                return this.$$compose(), this
            },
            hash: Pn("$$hash", function(e) {
                return null !== e ? e.toString() : ""
            }),
            replace: function() {
                return this.$$replace = !0, this
            }
        };
    o([An, En, Tn], function(e) {
        e.prototype = Object.create(uo), e.prototype.state = function(t) {
            if (!arguments.length) return this.$$state;
            if (e !== Tn || !this.$$html5) throw so("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
            return this.$$state = m(t) ? null : t, this
        }
    });
    var lo = r("$parse"),
        co = Function.prototype.call,
        fo = Function.prototype.apply,
        po = Function.prototype.bind,
        ho = lt();
    o({
        "null": function() {
            return null
        },
        "true": function() {
            return !0
        },
        "false": function() {
            return !1
        },
        undefined: function() {}
    }, function(e, t) {
        e.constant = e.literal = e.sharedGetter = !0, ho[t] = e
    }), ho["this"] = function(e) {
        return e
    }, ho["this"].sharedGetter = !0;
    var go = f(lt(), {
            "+": function(e, t, r, i) {
                return r = r(e, t), i = i(e, t), $(r) ? $(i) ? r + i : r : $(i) ? i : n
            },
            "-": function(e, t, n, r) {
                return n = n(e, t), r = r(e, t), ($(n) ? n : 0) - ($(r) ? r : 0)
            },
            "*": function(e, t, n, r) {
                return n(e, t) * r(e, t)
            },
            "/": function(e, t, n, r) {
                return n(e, t) / r(e, t)
            },
            "%": function(e, t, n, r) {
                return n(e, t) % r(e, t)
            },
            "===": function(e, t, n, r) {
                return n(e, t) === r(e, t)
            },
            "!==": function(e, t, n, r) {
                return n(e, t) !== r(e, t)
            },
            "==": function(e, t, n, r) {
                return n(e, t) == r(e, t)
            },
            "!=": function(e, t, n, r) {
                return n(e, t) != r(e, t)
            },
            "<": function(e, t, n, r) {
                return n(e, t) < r(e, t)
            },
            ">": function(e, t, n, r) {
                return n(e, t) > r(e, t)
            },
            "<=": function(e, t, n, r) {
                return n(e, t) <= r(e, t)
            },
            ">=": function(e, t, n, r) {
                return n(e, t) >= r(e, t)
            },
            "&&": function(e, t, n, r) {
                return n(e, t) && r(e, t)
            },
            "||": function(e, t, n, r) {
                return n(e, t) || r(e, t)
            },
            "!": function(e, t, n) {
                return !n(e, t)
            },
            "=": !0,
            "|": !0
        }),
        vo = {
            n: "\n",
            f: "\f",
            r: "\r",
            t: "	",
            v: "",
            "'": "'",
            '"': '"'
        },
        mo = function(e) {
            this.options = e
        };
    mo.prototype = {
        constructor: mo,
        lex: function(e) {
            for (this.text = e, this.index = 0, this.tokens = []; this.index < this.text.length;) {
                var t = this.text.charAt(this.index);
                if ('"' === t || "'" === t) this.readString(t);
                else if (this.isNumber(t) || "." === t && this.isNumber(this.peek())) this.readNumber();
                else if (this.isIdent(t)) this.readIdent();
                else if (this.is(t, "(){}[].,;:?")) this.tokens.push({
                    index: this.index,
                    text: t
                }), this.index++;
                else if (this.isWhitespace(t)) this.index++;
                else {
                    var n = t + this.peek(),
                        r = n + this.peek(2),
                        i = go[t],
                        o = go[n],
                        a = go[r];
                    if (i || o || a) {
                        var s = a ? r : o ? n : t;
                        this.tokens.push({
                            index: this.index,
                            text: s,
                            operator: !0
                        }), this.index += s.length
                    } else this.throwError("Unexpected next character ", this.index, this.index + 1)
                }
            }
            return this.tokens
        },
        is: function(e, t) {
            return -1 !== t.indexOf(e)
        },
        peek: function(e) {
            var t = e || 1;
            return this.index + t < this.text.length ? this.text.charAt(this.index + t) : !1
        },
        isNumber: function(e) {
            return e >= "0" && "9" >= e && "string" == typeof e
        },
        isWhitespace: function(e) {
            return " " === e || "\r" === e || "	" === e || "\n" === e || "" === e || " " === e
        },
        isIdent: function(e) {
            return e >= "a" && "z" >= e || e >= "A" && "Z" >= e || "_" === e || "$" === e
        },
        isExpOperator: function(e) {
            return "-" === e || "+" === e || this.isNumber(e)
        },
        throwError: function(e, t, n) {
            n = n || this.index;
            var r = $(t) ? "s " + t + "-" + this.index + " [" + this.text.substring(t, n) + "]" : " " + n;
            throw lo("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", e, r, this.text)
        },
        readNumber: function() {
            for (var e = "", t = this.index; this.index < this.text.length;) {
                var n = Yr(this.text.charAt(this.index));
                if ("." == n || this.isNumber(n)) e += n;
                else {
                    var r = this.peek();
                    if ("e" == n && this.isExpOperator(r)) e += n;
                    else if (this.isExpOperator(n) && r && this.isNumber(r) && "e" == e.charAt(e.length - 1)) e += n;
                    else {
                        if (!this.isExpOperator(n) || r && this.isNumber(r) || "e" != e.charAt(e.length - 1)) break;
                        this.throwError("Invalid exponent")
                    }
                }
                this.index++
            }
            this.tokens.push({
                index: t,
                text: e,
                constant: !0,
                value: Number(e)
            })
        },
        readIdent: function() {
            for (var e = this.index; this.index < this.text.length;) {
                var t = this.text.charAt(this.index);
                if (!this.isIdent(t) && !this.isNumber(t)) break;
                this.index++
            }
            this.tokens.push({
                index: e,
                text: this.text.slice(e, this.index),
                identifier: !0
            })
        },
        readString: function(e) {
            var t = this.index;
            this.index++;
            for (var n = "", r = e, i = !1; this.index < this.text.length;) {
                var o = this.text.charAt(this.index);
                if (r += o, i) {
                    if ("u" === o) {
                        var a = this.text.substring(this.index + 1, this.index + 5);
                        a.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + a + "]"), this.index += 4, n += String.fromCharCode(parseInt(a, 16))
                    } else {
                        var s = vo[o];
                        n += s || o
                    }
                    i = !1
                } else if ("\\" === o) i = !0;
                else {
                    if (o === e) return this.index++, void this.tokens.push({
                        index: t,
                        text: r,
                        constant: !0,
                        value: n
                    });
                    n += o
                }
                this.index++
            }
            this.throwError("Unterminated quote", t)
        }
    };
    var $o = function(e, t, n) {
        this.lexer = e, this.$filter = t, this.options = n
    };
    $o.ZERO = f(function() {
        return 0
    }, {
        sharedGetter: !0,
        constant: !0
    }), $o.prototype = {
        constructor: $o,
        parse: function(e) {
            this.text = e, this.tokens = this.lexer.lex(e);
            var t = this.statements();
            return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), t.literal = !!t.literal, t.constant = !!t.constant, t
        },
        primary: function() {
            var e;
            this.expect("(") ? (e = this.filterChain(), this.consume(")")) : this.expect("[") ? e = this.arrayDeclaration() : this.expect("{") ? e = this.object() : this.peek().identifier && this.peek().text in ho ? e = ho[this.consume().text] : this.peek().identifier ? e = this.identifier() : this.peek().constant ? e = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var t, n; t = this.expect("(", "[", ".");) "(" === t.text ? (e = this.functionCall(e, n), n = null) : "[" === t.text ? (n = e, e = this.objectIndex(e)) : "." === t.text ? (n = e, e = this.fieldAccess(e)) : this.throwError("IMPOSSIBLE");
            return e
        },
        throwError: function(e, t) {
            throw lo("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", t.text, e, t.index + 1, this.text, this.text.substring(t.index))
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw lo("ueoe", "Unexpected end of expression: {0}", this.text);
            return this.tokens[0]
        },
        peek: function(e, t, n, r) {
            return this.peekAhead(0, e, t, n, r)
        },
        peekAhead: function(e, t, n, r, i) {
            if (this.tokens.length > e) {
                var o = this.tokens[e],
                    a = o.text;
                if (a === t || a === n || a === r || a === i || !t && !n && !r && !i) return o
            }
            return !1
        },
        expect: function(e, t, n, r) {
            var i = this.peek(e, t, n, r);
            return i ? (this.tokens.shift(), i) : !1
        },
        consume: function(e) {
            if (0 === this.tokens.length) throw lo("ueoe", "Unexpected end of expression: {0}", this.text);
            var t = this.expect(e);
            return t || this.throwError("is unexpected, expecting [" + e + "]", this.peek()), t
        },
        unaryFn: function(e, t) {
            var n = go[e];
            return f(function(e, r) {
                return n(e, r, t)
            }, {
                constant: t.constant,
                inputs: [t]
            })
        },
        binaryFn: function(e, t, n, r) {
            var i = go[t];
            return f(function(t, r) {
                return i(t, r, e, n)
            }, {
                constant: e.constant && n.constant,
                inputs: !r && [e, n]
            })
        },
        identifier: function() {
            for (var e = this.consume().text; this.peek(".") && this.peekAhead(1).identifier && !this.peekAhead(2, "(");) e += this.consume().text + this.consume().text;
            return Hn(e, this.options, this.text)
        },
        constant: function() {
            var e = this.consume().value;
            return f(function() {
                return e
            }, {
                constant: !0,
                literal: !0
            })
        },
        statements: function() {
            for (var e = [];;)
                if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && e.push(this.filterChain()), !this.expect(";")) return 1 === e.length ? e[0] : function(t, n) {
                    for (var r, i = 0, o = e.length; o > i; i++) r = e[i](t, n);
                    return r
                }
        },
        filterChain: function() {
            for (var e, t = this.expression(); e = this.expect("|");) t = this.filter(t);
            return t
        },
        filter: function(e) {
            var t, r, i = this.$filter(this.consume().text);
            if (this.peek(":"))
                for (t = [], r = []; this.expect(":");) t.push(this.expression());
            var o = [e].concat(t || []);
            return f(function(o, a) {
                var s = e(o, a);
                if (r) {
                    r[0] = s;
                    for (var u = t.length; u--;) r[u + 1] = t[u](o, a);
                    return i.apply(n, r)
                }
                return i(s)
            }, {
                constant: !i.$stateful && o.every(In),
                inputs: !i.$stateful && o
            })
        },
        expression: function() {
            return this.assignment()
        },
        assignment: function() {
            var e, t, n = this.ternary();
            return (t = this.expect("=")) ? (n.assign || this.throwError("implies assignment but [" + this.text.substring(0, t.index) + "] can not be assigned to", t), e = this.ternary(), f(function(t, r) {
                return n.assign(t, e(t, r), r)
            }, {
                inputs: [n, e]
            })) : n
        },
        ternary: function() {
            var e, t, n = this.logicalOR();
            if ((t = this.expect("?")) && (e = this.assignment(), this.consume(":"))) {
                var r = this.assignment();
                return f(function(t, i) {
                    return n(t, i) ? e(t, i) : r(t, i)
                }, {
                    constant: n.constant && e.constant && r.constant
                })
            }
            return n
        },
        logicalOR: function() {
            for (var e, t = this.logicalAND(); e = this.expect("||");) t = this.binaryFn(t, e.text, this.logicalAND(), !0);
            return t
        },
        logicalAND: function() {
            for (var e, t = this.equality(); e = this.expect("&&");) t = this.binaryFn(t, e.text, this.equality(), !0);
            return t
        },
        equality: function() {
            for (var e, t = this.relational(); e = this.expect("==", "!=", "===", "!==");) t = this.binaryFn(t, e.text, this.relational());
            return t
        },
        relational: function() {
            for (var e, t = this.additive(); e = this.expect("<", ">", "<=", ">=");) t = this.binaryFn(t, e.text, this.additive());
            return t
        },
        additive: function() {
            for (var e, t = this.multiplicative(); e = this.expect("+", "-");) t = this.binaryFn(t, e.text, this.multiplicative());
            return t
        },
        multiplicative: function() {
            for (var e, t = this.unary(); e = this.expect("*", "/", "%");) t = this.binaryFn(t, e.text, this.unary());
            return t
        },
        unary: function() {
            var e;
            return this.expect("+") ? this.primary() : (e = this.expect("-")) ? this.binaryFn($o.ZERO, e.text, this.unary()) : (e = this.expect("!")) ? this.unaryFn(e.text, this.unary()) : this.primary()
        },
        fieldAccess: function(e) {
            var t = this.identifier();
            return f(function(r, i, o) {
                var a = o || e(r, i);
                return null == a ? n : t(a)
            }, {
                assign: function(n, r, i) {
                    var o = e(n, i);
                    return o || e.assign(n, o = {}, i), t.assign(o, r)
                }
            })
        },
        objectIndex: function(e) {
            var t = this.text,
                r = this.expression();
            return this.consume("]"), f(function(i, o) {
                var a, s = e(i, o),
                    u = r(i, o);
                return _n(u, t), s ? a = Fn(s[u], t) : n
            }, {
                assign: function(n, i, o) {
                    var a = _n(r(n, o), t),
                        s = Fn(e(n, o), t);
                    return s || e.assign(n, s = {}, o), s[a] = i
                }
            })
        },
        functionCall: function(e, t) {
            var r = [];
            if (")" !== this.peekToken().text)
                do r.push(this.expression()); while (this.expect(","));
            this.consume(")");
            var i = this.text,
                o = r.length ? [] : null;
            return function(a, s) {
                var u = t ? t(a, s) : $(t) ? n : a,
                    l = e(a, s, u) || h;
                if (o)
                    for (var c = r.length; c--;) o[c] = Fn(r[c](a, s), i);
                Fn(u, i), Nn(l, i);
                var f = l.apply ? l.apply(u, o) : l(o[0], o[1], o[2], o[3], o[4]);
                return o && (o.length = 0), Fn(f, i)
            }
        },
        arrayDeclaration: function() {
            var e = [];
            if ("]" !== this.peekToken().text)
                do {
                    if (this.peek("]")) break;
                    e.push(this.expression())
                } while (this.expect(","));
            return this.consume("]"), f(function(t, n) {
                for (var r = [], i = 0, o = e.length; o > i; i++) r.push(e[i](t, n));
                return r
            }, {
                literal: !0,
                constant: e.every(In),
                inputs: e
            })
        },
        object: function() {
            var e = [],
                t = [];
            if ("}" !== this.peekToken().text)
                do {
                    if (this.peek("}")) break;
                    var n = this.consume();
                    n.constant ? e.push(n.value) : n.identifier ? e.push(n.text) : this.throwError("invalid key", n), this.consume(":"), t.push(this.expression())
                } while (this.expect(","));
            return this.consume("}"), f(function(n, r) {
                for (var i = {}, o = 0, a = t.length; a > o; o++) i[e[o]] = t[o](n, r);
                return i
            }, {
                literal: !0,
                constant: t.every(In),
                inputs: t
            })
        }
    };
    var yo = lt(),
        wo = lt(),
        bo = Object.prototype.valueOf,
        xo = r("$sce"),
        Co = {
            HTML: "html",
            CSS: "css",
            URL: "url",
            RESOURCE_URL: "resourceUrl",
            JS: "js"
        },
        Ki = r("$compile"),
        ko = t.createElement("a"),
        So = ir(e.location.href);
    sr.$inject = ["$provide"], fr.$inject = ["$locale"], dr.$inject = ["$locale"];
    var To = ".",
        Eo = {
            yyyy: gr("FullYear", 4),
            yy: gr("FullYear", 2, 0, !0),
            y: gr("FullYear", 1),
            MMMM: vr("Month"),
            MMM: vr("Month", !0),
            MM: gr("Month", 2, 1),
            M: gr("Month", 1, 1),
            dd: gr("Date", 2),
            d: gr("Date", 1),
            HH: gr("Hours", 2),
            H: gr("Hours", 1),
            hh: gr("Hours", 2, -12),
            h: gr("Hours", 1, -12),
            mm: gr("Minutes", 2),
            m: gr("Minutes", 1),
            ss: gr("Seconds", 2),
            s: gr("Seconds", 1),
            sss: gr("Milliseconds", 3),
            EEEE: vr("Day"),
            EEE: vr("Day", !0),
            a: br,
            Z: mr,
            ww: wr(2),
            w: wr(1),
            G: xr,
            GG: xr,
            GGG: xr,
            GGGG: Cr
        },
        Ao = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
        Oo = /^\-?\d+$/;
    kr.$inject = ["$locale"];
    var Po = v(Yr),
        Do = v(Jr);
    Er.$inject = ["$parse"];
    var jo = v({
            restrict: "E",
            compile: function(e, t) {
                return t.href || t.xlinkHref || t.name ? void 0 : function(e, t) {
                    if ("a" === t[0].nodeName.toLowerCase()) {
                        var n = "[object SVGAnimatedString]" === si.call(t.prop("href")) ? "xlink:href" : "href";
                        t.on("click", function(e) {
                            t.attr(n) || e.preventDefault()
                        })
                    }
                }
            }
        }),
        _o = {};
    o(Ri, function(e, t) {
        if ("multiple" != e) {
            var n = Qt("ng-" + t);
            _o[n] = function() {
                return {
                    restrict: "A",
                    priority: 100,
                    link: function(e, r, i) {
                        e.$watch(i[n], function(e) {
                            i.$set(t, !!e)
                        })
                    }
                }
            }
        }
    }), o(Ui, function(e, t) {
        _o[t] = function() {
            return {
                priority: 100,
                link: function(e, n, r) {
                    if ("ngPattern" === t && "/" == r.ngPattern.charAt(0)) {
                        var i = r.ngPattern.match(Gr);
                        if (i) return void r.$set("ngPattern", new RegExp(i[1], i[2]))
                    }
                    e.$watch(r[t], function(e) {
                        r.$set(t, e)
                    })
                }
            }
        }
    }), o(["src", "srcset", "href"], function(e) {
        var t = Qt("ng-" + e);
        _o[t] = function() {
            return {
                priority: 99,
                link: function(n, r, i) {
                    var o = e,
                        a = e;
                    "href" === e && "[object SVGAnimatedString]" === si.call(r.prop("href")) && (a = "xlinkHref", i.$attr[a] = "xlink:href", o = null), i.$observe(t, function(t) {
                        return t ? (i.$set(a, t), void(ei && o && r.prop(o, i[a]))) : void("href" === e && i.$set(a, null))
                    })
                }
            }
        }
    });
    var Fo = {
            $addControl: h,
            $$renameControl: Or,
            $removeControl: h,
            $setValidity: h,
            $setDirty: h,
            $setPristine: h,
            $setSubmitted: h
        },
        No = "ng-submitted";
    Pr.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    var Io = function(e) {
            return ["$timeout", function(t) {
                var r = {
                    name: "form",
                    restrict: e ? "EAC" : "E",
                    controller: Pr,
                    compile: function(r, i) {
                        r.addClass(va).addClass(ha);
                        var o = i.name ? "name" : e && i.ngForm ? "ngForm" : !1;
                        return {
                            pre: function(e, r, i, a) {
                                if (!("action" in i)) {
                                    var s = function(t) {
                                        e.$apply(function() {
                                            a.$commitViewValue(), a.$setSubmitted()
                                        }), t.preventDefault()
                                    };
                                    Ai(r[0], "submit", s), r.on("$destroy", function() {
                                        t(function() {
                                            Oi(r[0], "submit", s)
                                        }, 0, !1)
                                    })
                                }
                                var u = a.$$parentForm;
                                o && (Ln(e, null, a.$name, a, a.$name), i.$observe(o, function(t) {
                                    a.$name !== t && (Ln(e, null, a.$name, n, a.$name), u.$$renameControl(a, t), Ln(e, null, a.$name, a, a.$name))
                                })), r.on("$destroy", function() {
                                    u.$removeControl(a), o && Ln(e, null, i[o], n, a.$name), f(a, Fo)
                                })
                            }
                        }
                    }
                };
                return r
            }]
        },
        Lo = Io(),
        Mo = Io(!0),
        qo = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
        Ro = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
        Ho = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
        Uo = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
        Vo = /^(\d{4})-(\d{2})-(\d{2})$/,
        Bo = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        zo = /^(\d{4})-W(\d\d)$/,
        Wo = /^(\d{4})-(\d\d)$/,
        Go = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        Xo = {
            text: jr,
            date: Ir("date", Vo, Nr(Vo, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
            "datetime-local": Ir("datetimelocal", Bo, Nr(Bo, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),
            time: Ir("time", Go, Nr(Go, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
            week: Ir("week", zo, Fr, "yyyy-Www"),
            month: Ir("month", Wo, Nr(Wo, ["yyyy", "MM"]), "yyyy-MM"),
            number: Mr,
            url: qr,
            email: Rr,
            radio: Hr,
            checkbox: Vr,
            hidden: h,
            button: h,
            submit: h,
            reset: h,
            file: h
        },
        Yo = ["$browser", "$sniffer", "$filter", "$parse", function(e, t, n, r) {
            return {
                restrict: "E",
                require: ["?ngModel"],
                link: {
                    pre: function(i, o, a, s) {
                        s[0] && (Xo[Yr(a.type)] || Xo.text)(i, o, a, s[0], t, e, n, r)
                    }
                }
            }
        }],
        Ko = /^(true|false|\d+)$/,
        Jo = function() {
            return {
                restrict: "A",
                priority: 100,
                compile: function(e, t) {
                    return Ko.test(t.ngValue) ? function(e, t, n) {
                        n.$set("value", e.$eval(n.ngValue))
                    } : function(e, t, n) {
                        e.$watch(n.ngValue, function(e) {
                            n.$set("value", e)
                        })
                    }
                }
            }
        },
        Qo = ["$compile", function(e) {
            return {
                restrict: "AC",
                compile: function(t) {
                    return e.$$addBindingClass(t),
                        function(t, r, i) {
                            e.$$addBindingInfo(r, i.ngBind), r = r[0], t.$watch(i.ngBind, function(e) {
                                r.textContent = e === n ? "" : e
                            })
                        }
                }
            }
        }],
        Zo = ["$interpolate", "$compile", function(e, t) {
            return {
                compile: function(r) {
                    return t.$$addBindingClass(r),
                        function(r, i, o) {
                            var a = e(i.attr(o.$attr.ngBindTemplate));
                            t.$$addBindingInfo(i, a.expressions), i = i[0], o.$observe("ngBindTemplate", function(e) {
                                i.textContent = e === n ? "" : e
                            })
                        }
                }
            }
        }],
        ea = ["$sce", "$parse", "$compile", function(e, t, n) {
            return {
                restrict: "A",
                compile: function(r, i) {
                    var o = t(i.ngBindHtml),
                        a = t(i.ngBindHtml, function(e) {
                            return (e || "").toString()
                        });
                    return n.$$addBindingClass(r),
                        function(t, r, i) {
                            n.$$addBindingInfo(r, i.ngBindHtml), t.$watch(a, function() {
                                r.html(e.getTrustedHtml(o(t)) || "")
                            })
                        }
                }
            }
        }],
        ta = v({
            restrict: "A",
            require: "ngModel",
            link: function(e, t, n, r) {
                r.$viewChangeListeners.push(function() {
                    e.$eval(n.ngChange)
                })
            }
        }),
        na = Br("", !0),
        ra = Br("Odd", 0),
        ia = Br("Even", 1),
        oa = Ar({
            compile: function(e, t) {
                t.$set("ngCloak", n), e.removeClass("ng-cloak")
            }
        }),
        aa = [function() {
            return {
                restrict: "A",
                scope: !0,
                controller: "@",
                priority: 500
            }
        }],
        sa = {},
        ua = {
            blur: !0,
            focus: !0
        };
    o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(e) {
        var t = Qt("ng-" + e);
        sa[t] = ["$parse", "$rootScope", function(n, r) {
            return {
                restrict: "A",
                compile: function(i, o) {
                    var a = n(o[t], null, !0);
                    return function(t, n) {
                        n.on(e, function(n) {
                            var i = function() {
                                a(t, {
                                    $event: n
                                })
                            };
                            ua[e] && r.$$phase ? t.$evalAsync(i) : t.$apply(i)
                        })
                    }
                }
            }
        }]
    });
    var la = ["$animate", function(e) {
            return {
                multiElement: !0,
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function(n, r, i, o, a) {
                    var s, u, l;
                    n.$watch(i.ngIf, function(n) {
                        n ? u || a(function(n, o) {
                            u = o, n[n.length++] = t.createComment(" end ngIf: " + i.ngIf + " "), s = {
                                clone: n
                            }, e.enter(n, r.parent(), r)
                        }) : (l && (l.remove(), l = null), u && (u.$destroy(), u = null), s && (l = ut(s.clone), e.leave(l).then(function() {
                            l = null
                        }), s = null))
                    })
                }
            }
        }],
        ca = ["$templateRequest", "$anchorScroll", "$animate", function(e, t, n) {
            return {
                restrict: "ECA",
                priority: 400,
                terminal: !0,
                transclude: "element",
                controller: li.noop,
                compile: function(r, i) {
                    var o = i.ngInclude || i.src,
                        a = i.onload || "",
                        s = i.autoscroll;
                    return function(r, i, u, l, c) {
                        var f, d, p, h = 0,
                            g = function() {
                                d && (d.remove(), d = null), f && (f.$destroy(), f = null), p && (n.leave(p).then(function() {
                                    d = null
                                }), d = p, p = null)
                            };
                        r.$watch(o, function(o) {
                            var u = function() {
                                    !$(s) || s && !r.$eval(s) || t()
                                },
                                d = ++h;
                            o ? (e(o, !0).then(function(e) {
                                if (d === h) {
                                    var t = r.$new();
                                    l.template = e;
                                    var s = c(t, function(e) {
                                        g(), n.enter(e, null, i).then(u)
                                    });
                                    f = t, p = s, f.$emit("$includeContentLoaded", o), r.$eval(a)
                                }
                            }, function() {
                                d === h && (g(), r.$emit("$includeContentError", o))
                            }), r.$emit("$includeContentRequested", o)) : (g(), l.template = null)
                        })
                    }
                }
            }
        }],
        fa = ["$compile", function(e) {
            return {
                restrict: "ECA",
                priority: -400,
                require: "ngInclude",
                link: function(n, r, i, o) {
                    return /SVG/.test(r[0].toString()) ? (r.empty(), void e($t(o.template, t).childNodes)(n, function(e) {
                        r.append(e)
                    }, {
                        futureParentElement: r
                    })) : (r.html(o.template), void e(r.contents())(n))
                }
            }
        }],
        da = Ar({
            priority: 450,
            compile: function() {
                return {
                    pre: function(e, t, n) {
                        e.$eval(n.ngInit)
                    }
                }
            }
        }),
        pa = function() {
            return {
                restrict: "A",
                priority: 100,
                require: "ngModel",
                link: function(e, t, r, i) {
                    var a = t.attr(r.$attr.ngList) || ", ",
                        s = "false" !== r.ngTrim,
                        u = s ? pi(a) : a,
                        l = function(e) {
                            if (!m(e)) {
                                var t = [];
                                return e && o(e.split(u), function(e) {
                                    e && t.push(s ? pi(e) : e)
                                }), t
                            }
                        };
                    i.$parsers.push(l), i.$formatters.push(function(e) {
                        return di(e) ? e.join(a) : n
                    }), i.$isEmpty = function(e) {
                        return !e || !e.length
                    }
                }
            }
        },
        ha = "ng-valid",
        ga = "ng-invalid",
        va = "ng-pristine",
        ma = "ng-dirty",
        $a = "ng-untouched",
        ya = "ng-touched",
        wa = "ng-pending",
        ba = new r("ngModel"),
        xa = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function(e, t, r, i, a, s, u, l, c, f) {
            this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = n, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = n, this.$name = f(r.name || "", !1)(e);
            var d, p = a(r.ngModel),
                g = p.assign,
                v = p,
                y = g,
                w = null,
                x = this;
            this.$$setOptions = function(e) {
                if (x.$options = e, e && e.getterSetter) {
                    var t = a(r.ngModel + "()"),
                        n = a(r.ngModel + "($$$p)");
                    v = function(e) {
                        var n = p(e);
                        return C(n) && (n = t(e)), n
                    }, y = function(e) {
                        C(p(e)) ? n(e, {
                            $$$p: x.$modelValue
                        }) : g(e, x.$modelValue)
                    }
                } else if (!p.assign) throw ba("nonassign", "Expression '{0}' is non-assignable. Element: {1}", r.ngModel, z(i))
            }, this.$render = h, this.$isEmpty = function(e) {
                return m(e) || "" === e || null === e || e !== e
            };
            var k = i.inheritedData("$formController") || Fo,
                S = 0;
            zr({
                ctrl: this,
                $element: i,
                set: function(e, t) {
                    e[t] = !0
                },
                unset: function(e, t) {
                    delete e[t]
                },
                parentForm: k,
                $animate: s
            }), this.$setPristine = function() {
                x.$dirty = !1, x.$pristine = !0, s.removeClass(i, ma), s.addClass(i, va)
            }, this.$setDirty = function() {
                x.$dirty = !0, x.$pristine = !1, s.removeClass(i, va), s.addClass(i, ma), k.$setDirty()
            }, this.$setUntouched = function() {
                x.$touched = !1, x.$untouched = !0, s.setClass(i, $a, ya)
            }, this.$setTouched = function() {
                x.$touched = !0, x.$untouched = !1, s.setClass(i, ya, $a)
            }, this.$rollbackViewValue = function() {
                u.cancel(w), x.$viewValue = x.$$lastCommittedViewValue, x.$render()
            }, this.$validate = function() {
                if (!b(x.$modelValue) || !isNaN(x.$modelValue)) {
                    var e = x.$$lastCommittedViewValue,
                        t = x.$$rawModelValue,
                        r = x.$valid,
                        i = x.$modelValue,
                        o = x.$options && x.$options.allowInvalid;
                    x.$$runValidators(t, e, function(e) {
                        o || r === e || (x.$modelValue = e ? t : n, x.$modelValue !== i && x.$$writeModelToScope())
                    })
                }
            }, this.$$runValidators = function(e, t, r) {
                function i() {
                    var e = x.$$parserName || "parse";
                    return d !== n ? (d || (o(x.$validators, function(e, t) {
                        u(t, null)
                    }), o(x.$asyncValidators, function(e, t) {
                        u(t, null)
                    })), u(e, d), d) : (u(e, null), !0)
                }

                function a() {
                    var n = !0;
                    return o(x.$validators, function(r, i) {
                        var o = r(e, t);
                        n = n && o, u(i, o)
                    }), n ? !0 : (o(x.$asyncValidators, function(e, t) {
                        u(t, null)
                    }), !1)
                }

                function s() {
                    var r = [],
                        i = !0;
                    o(x.$asyncValidators, function(o, a) {
                        var s = o(e, t);
                        if (!D(s)) throw ba("$asyncValidators", "Expected asynchronous validator to return a promise but got '{0}' instead.", s);
                        u(a, n), r.push(s.then(function() {
                            u(a, !0)
                        }, function() {
                            i = !1, u(a, !1)
                        }))
                    }), r.length ? c.all(r).then(function() {
                        l(i)
                    }, h) : l(!0)
                }

                function u(e, t) {
                    f === S && x.$setValidity(e, t)
                }

                function l(e) {
                    f === S && r(e)
                }
                S++;
                var f = S;
                return i() && a() ? void s() : void l(!1)
            }, this.$commitViewValue = function() {
                var e = x.$viewValue;
                u.cancel(w), (x.$$lastCommittedViewValue !== e || "" === e && x.$$hasNativeValidators) && (x.$$lastCommittedViewValue = e, x.$pristine && this.$setDirty(), this.$$parseAndValidate())
            }, this.$$parseAndValidate = function() {
                function t() {
                    x.$modelValue !== a && x.$$writeModelToScope()
                }
                var r = x.$$lastCommittedViewValue,
                    i = r;
                if (d = m(i) ? n : !0)
                    for (var o = 0; o < x.$parsers.length; o++)
                        if (i = x.$parsers[o](i), m(i)) {
                            d = !1;
                            break
                        }
                b(x.$modelValue) && isNaN(x.$modelValue) && (x.$modelValue = v(e));
                var a = x.$modelValue,
                    s = x.$options && x.$options.allowInvalid;
                x.$$rawModelValue = i, s && (x.$modelValue = i, t()), x.$$runValidators(i, x.$$lastCommittedViewValue, function(e) {
                    s || (x.$modelValue = e ? i : n, t())
                })
            }, this.$$writeModelToScope = function() {
                y(e, x.$modelValue), o(x.$viewChangeListeners, function(e) {
                    try {
                        e()
                    } catch (n) {
                        t(n)
                    }
                })
            }, this.$setViewValue = function(e, t) {
                x.$viewValue = e, (!x.$options || x.$options.updateOnDefault) && x.$$debounceViewValueCommit(t)
            }, this.$$debounceViewValueCommit = function(t) {
                var n, r = 0,
                    i = x.$options;
                i && $(i.debounce) && (n = i.debounce, b(n) ? r = n : b(n[t]) ? r = n[t] : b(n["default"]) && (r = n["default"])), u.cancel(w), r ? w = u(function() {
                    x.$commitViewValue()
                }, r) : l.$$phase ? x.$commitViewValue() : e.$apply(function() {
                    x.$commitViewValue()
                })
            }, e.$watch(function() {
                var t = v(e);
                if (t !== x.$modelValue && (x.$modelValue === x.$modelValue || t === t)) {
                    x.$modelValue = x.$$rawModelValue = t, d = n;
                    for (var r = x.$formatters, i = r.length, o = t; i--;) o = r[i](o);
                    x.$viewValue !== o && (x.$viewValue = x.$$lastCommittedViewValue = o, x.$render(), x.$$runValidators(t, o, h))
                }
                return t
            })
        }],
        Ca = ["$rootScope", function(e) {
            return {
                restrict: "A",
                require: ["ngModel", "^?form", "^?ngModelOptions"],
                controller: xa,
                priority: 1,
                compile: function(t) {
                    return t.addClass(va).addClass($a).addClass(ha), {
                        pre: function(e, t, n, r) {
                            var i = r[0],
                                o = r[1] || Fo;
                            i.$$setOptions(r[2] && r[2].$options), o.$addControl(i), n.$observe("name", function(e) {
                                i.$name !== e && o.$$renameControl(i, e)
                            }), e.$on("$destroy", function() {
                                o.$removeControl(i)
                            })
                        },
                        post: function(t, n, r, i) {
                            var o = i[0];
                            o.$options && o.$options.updateOn && n.on(o.$options.updateOn, function(e) {
                                o.$$debounceViewValueCommit(e && e.type)
                            }), n.on("blur", function() {
                                o.$touched || (e.$$phase ? t.$evalAsync(o.$setTouched) : t.$apply(o.$setTouched))
                            })
                        }
                    }
                }
            }
        }],
        ka = /(\s+|^)default(\s+|$)/,
        Sa = function() {
            return {
                restrict: "A",
                controller: ["$scope", "$attrs", function(e, t) {
                    var r = this;
                    this.$options = e.$eval(t.ngModelOptions), this.$options.updateOn !== n ? (this.$options.updateOnDefault = !1, this.$options.updateOn = pi(this.$options.updateOn.replace(ka, function() {
                        return r.$options.updateOnDefault = !0, " "
                    }))) : this.$options.updateOnDefault = !0
                }]
            }
        },
        Ta = Ar({
            terminal: !0,
            priority: 1e3
        }),
        Ea = ["$locale", "$interpolate", function(e, t) {
            var n = /{}/g,
                r = /^when(Minus)?(.+)$/;
            return {
                restrict: "EA",
                link: function(i, a, s) {
                    function u(e) {
                        a.text(e || "")
                    }
                    var l, c = s.count,
                        f = s.$attr.when && a.attr(s.$attr.when),
                        d = s.offset || 0,
                        p = i.$eval(f) || {},
                        h = {},
                        g = t.startSymbol(),
                        v = t.endSymbol(),
                        m = g + c + "-" + d + v,
                        $ = li.noop;
                    o(s, function(e, t) {
                        var n = r.exec(t);
                        if (n) {
                            var i = (n[1] ? "-" : "") + Yr(n[2]);
                            p[i] = a.attr(s.$attr[t])
                        }
                    }), o(p, function(e, r) {
                        h[r] = t(e.replace(n, m))
                    }), i.$watch(c, function(t) {
                        var n = parseFloat(t),
                            r = isNaN(n);
                        r || n in p || (n = e.pluralCat(n - d)), n === l || r && isNaN(l) || ($(), $ = i.$watch(h[n], u), l = n)
                    })
                }
            }
        }],
        Aa = ["$parse", "$animate", function(e, a) {
            var s = "$$NG_REMOVED",
                u = r("ngRepeat"),
                l = function(e, t, n, r, i, o, a) {
                    e[n] = r, i && (e[i] = o), e.$index = t, e.$first = 0 === t, e.$last = t === a - 1, e.$middle = !(e.$first || e.$last), e.$odd = !(e.$even = 0 === (1 & t))
                },
                c = function(e) {
                    return e.clone[0]
                },
                f = function(e) {
                    return e.clone[e.clone.length - 1]
                };
            return {
                restrict: "A",
                multiElement: !0,
                transclude: "element",
                priority: 1e3,
                terminal: !0,
                $$tlb: !0,
                compile: function(r, d) {
                    var p = d.ngRepeat,
                        h = t.createComment(" end ngRepeat: " + p + " "),
                        g = p.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                    if (!g) throw u("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", p);
                    var v = g[1],
                        m = g[2],
                        $ = g[3],
                        y = g[4];
                    if (g = v.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/), !g) throw u("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", v);
                    var w = g[3] || g[1],
                        b = g[2];
                    if ($ && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test($) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test($))) throw u("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", $);
                    var x, C, k, S, T = {
                        $id: Rt
                    };
                    return y ? x = e(y) : (k = function(e, t) {
                            return Rt(t)
                        }, S = function(e) {
                            return e
                        }),
                        function(e, t, r, d, g) {
                            x && (C = function(t, n, r) {
                                return b && (T[b] = t), T[w] = n, T.$index = r, x(e, T)
                            });
                            var v = lt();
                            e.$watchCollection(m, function(r) {
                                var d, m, y, x, T, E, A, O, P, D, j, _, F = t[0],
                                    N = lt();
                                if ($ && (e[$] = r), i(r)) P = r, O = C || k;
                                else {
                                    O = C || S, P = [];
                                    for (var I in r) r.hasOwnProperty(I) && "$" != I.charAt(0) && P.push(I);
                                    P.sort()
                                }
                                for (x = P.length, j = new Array(x), d = 0; x > d; d++)
                                    if (T = r === P ? d : P[d], E = r[T], A = O(T, E, d), v[A]) D = v[A], delete v[A], N[A] = D, j[d] = D;
                                    else {
                                        if (N[A]) throw o(j, function(e) {
                                            e && e.scope && (v[e.id] = e)
                                        }), u("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", p, A, E);
                                        j[d] = {
                                            id: A,
                                            scope: n,
                                            clone: n
                                        }, N[A] = !0
                                    }
                                for (var L in v) {
                                    if (D = v[L], _ = ut(D.clone), a.leave(_), _[0].parentNode)
                                        for (d = 0, m = _.length; m > d; d++) _[d][s] = !0;
                                    D.scope.$destroy()
                                }
                                for (d = 0; x > d; d++)
                                    if (T = r === P ? d : P[d], E = r[T], D = j[d], D.scope) {
                                        y = F;
                                        do y = y.nextSibling; while (y && y[s]);
                                        c(D) != y && a.move(ut(D.clone), null, ti(F)), F = f(D), l(D.scope, d, w, E, b, T, x)
                                    } else g(function(e, t) {
                                        D.scope = t;
                                        var n = h.cloneNode(!1);
                                        e[e.length++] = n, a.enter(e, null, ti(F)), F = n, D.clone = e, N[D.id] = D, l(D.scope, d, w, E, b, T, x)
                                    });
                                v = N
                            })
                        }
                }
            }
        }],
        Oa = "ng-hide",
        Pa = "ng-hide-animate",
        Da = ["$animate", function(e) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function(t, n, r) {
                    t.$watch(r.ngShow, function(t) {
                        e[t ? "removeClass" : "addClass"](n, Oa, {
                            tempClasses: Pa
                        })
                    })
                }
            }
        }],
        ja = ["$animate", function(e) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function(t, n, r) {
                    t.$watch(r.ngHide, function(t) {
                        e[t ? "addClass" : "removeClass"](n, Oa, {
                            tempClasses: Pa
                        })
                    })
                }
            }
        }],
        _a = Ar(function(e, t, n) {
            e.$watch(n.ngStyle, function(e, n) {
                n && e !== n && o(n, function(e, n) {
                    t.css(n, "")
                }), e && t.css(e)
            }, !0)
        }),
        Fa = ["$animate", function(e) {
            return {
                restrict: "EA",
                require: "ngSwitch",
                controller: ["$scope", function() {
                    this.cases = {}
                }],
                link: function(n, r, i, a) {
                    var s = i.ngSwitch || i.on,
                        u = [],
                        l = [],
                        c = [],
                        f = [],
                        d = function(e, t) {
                            return function() {
                                e.splice(t, 1)
                            }
                        };
                    n.$watch(s, function(n) {
                        var r, i;
                        for (r = 0, i = c.length; i > r; ++r) e.cancel(c[r]);
                        for (c.length = 0, r = 0, i = f.length; i > r; ++r) {
                            var s = ut(l[r].clone);
                            f[r].$destroy();
                            var p = c[r] = e.leave(s);
                            p.then(d(c, r))
                        }
                        l.length = 0, f.length = 0, (u = a.cases["!" + n] || a.cases["?"]) && o(u, function(n) {
                            n.transclude(function(r, i) {
                                f.push(i);
                                var o = n.element;
                                r[r.length++] = t.createComment(" end ngSwitchWhen: ");
                                var a = {
                                    clone: r
                                };
                                l.push(a), e.enter(r, o.parent(), o)
                            })
                        })
                    })
                }
            }
        }],
        Na = Ar({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function(e, t, n, r, i) {
                r.cases["!" + n.ngSwitchWhen] = r.cases["!" + n.ngSwitchWhen] || [], r.cases["!" + n.ngSwitchWhen].push({
                    transclude: i,
                    element: t
                })
            }
        }),
        Ia = Ar({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function(e, t, n, r, i) {
                r.cases["?"] = r.cases["?"] || [], r.cases["?"].push({
                    transclude: i,
                    element: t
                })
            }
        }),
        La = Ar({
            restrict: "EAC",
            link: function(e, t, n, i, o) {
                if (!o) throw r("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", z(t));
                o(function(e) {
                    t.empty(), t.append(e)
                })
            }
        }),
        Ma = ["$templateCache", function(e) {
            return {
                restrict: "E",
                terminal: !0,
                compile: function(t, n) {
                    if ("text/ng-template" == n.type) {
                        var r = n.id,
                            i = t[0].text;
                        e.put(r, i)
                    }
                }
            }
        }],
        qa = r("ngOptions"),
        Ra = v({
            restrict: "A",
            terminal: !0
        }),
        Ha = ["$compile", "$parse", function(e, r) {
            var i = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
                s = {
                    $setViewValue: h
                };
            return {
                restrict: "E",
                require: ["select", "?ngModel"],
                controller: ["$element", "$scope", "$attrs", function(e, t, n) {
                    var r, i, o = this,
                        a = {},
                        u = s;
                    o.databound = n.ngModel, o.init = function(e, t, n) {
                        u = e, r = t, i = n
                    }, o.addOption = function(t, n) {
                        at(t, '"option value"'), a[t] = !0, u.$viewValue == t && (e.val(t), i.parent() && i.remove()), n && n[0].hasAttribute("selected") && (n[0].selected = !0)
                    }, o.removeOption = function(e) {
                        this.hasOption(e) && (delete a[e], u.$viewValue === e && this.renderUnknownOption(e))
                    }, o.renderUnknownOption = function(t) {
                        var n = "? " + Rt(t) + " ?";
                        i.val(n), e.prepend(i), e.val(n), i.prop("selected", !0)
                    }, o.hasOption = function(e) {
                        return a.hasOwnProperty(e)
                    }, t.$on("$destroy", function() {
                        o.renderUnknownOption = h
                    })
                }],
                link: function(s, u, l, c) {
                    function f(e, t, n, r) {
                        n.$render = function() {
                            var e = n.$viewValue;
                            r.hasOption(e) ? (k.parent() && k.remove(), t.val(e), "" === e && h.prop("selected", !0)) : null == e && h ? t.val("") : r.renderUnknownOption(e)
                        }, t.on("change", function() {
                            e.$apply(function() {
                                k.parent() && k.remove(), n.$setViewValue(t.val())
                            })
                        })
                    }

                    function d(e, t, n) {
                        var r;
                        n.$render = function() {
                            var e = new Ht(n.$viewValue);
                            o(t.find("option"), function(t) {
                                t.selected = $(e.get(t.value))
                            })
                        }, e.$watch(function() {
                            M(r, n.$viewValue) || (r = L(n.$viewValue), n.$render())
                        }), t.on("change", function() {
                            e.$apply(function() {
                                var e = [];
                                o(t.find("option"), function(t) {
                                    t.selected && e.push(t.value)
                                }), n.$setViewValue(e)
                            })
                        })
                    }

                    function p(t, s, u) {
                        function l(e, n, r) {
                            return M[E] = r, P && (M[P] = n), e(t, M)
                        }

                        function c() {
                            t.$apply(function() {
                                var e, n = _(t) || [];
                                if (m) e = [], o(s.val(), function(t) {
                                    t = N ? I[t] : t, e.push(f(t, n[t]))
                                });
                                else {
                                    var r = N ? I[s.val()] : s.val();
                                    e = f(r, n[r])
                                }
                                u.$setViewValue(e), k()
                            })
                        }

                        function f(e, t) {
                            if ("?" === e) return n;
                            if ("" === e) return null;
                            var r = O ? O : j;
                            return l(r, e, t)
                        }

                        function d() {
                            var e, n = _(t);
                            if (n && di(n)) {
                                e = new Array(n.length);
                                for (var r = 0, i = n.length; i > r; r++) e[r] = l(T, r, n[r]);
                                return e
                            }
                            if (n) {
                                e = {};
                                for (var o in n) n.hasOwnProperty(o) && (e[o] = l(T, o, n[o]))
                            }
                            return e
                        }

                        function p(e) {
                            var t;
                            if (m)
                                if (N && di(e)) {
                                    t = new Ht([]);
                                    for (var n = 0; n < e.length; n++) t.put(l(N, null, e[n]), !0)
                                } else t = new Ht(e);
                            else N && (e = l(N, null, e));
                            return function(n, r) {
                                var i;
                                return i = N ? N : O ? O : j, m ? $(t.remove(l(i, n, r))) : e === l(i, n, r)
                            }
                        }

                        function h() {
                            b || (t.$$postDigest(k), b = !0)
                        }

                        function v(e, t, n) {
                            e[t] = e[t] || 0, e[t] += n ? 1 : -1
                        }

                        function k() {
                            b = !1;
                            var e, n, r, i, c, f, d, h, y, k, S, E, A, O, j, F, q, R = {
                                    "": []
                                },
                                H = [""],
                                U = u.$viewValue,
                                V = _(t) || [],
                                B = P ? a(V) : V,
                                z = {},
                                W = p(U),
                                G = !1;
                            for (I = {}, E = 0; k = B.length, k > E; E++) d = E, P && (d = B[E], "$" === d.charAt(0)) || (h = V[d], e = l(D, d, h) || "", (n = R[e]) || (n = R[e] = [], H.push(e)), A = W(d, h), G = G || A, F = l(T, d, h), F = $(F) ? F : "", q = N ? N(t, M) : P ? B[E] : E, N && (I[q] = d), n.push({
                                id: q,
                                label: F,
                                selected: A
                            }));
                            for (m || (w || null === U ? R[""].unshift({
                                    id: "",
                                    label: "",
                                    selected: !G
                                }) : G || R[""].unshift({
                                    id: "?",
                                    label: "",
                                    selected: !0
                                })), S = 0, y = H.length; y > S; S++) {
                                for (e = H[S], n = R[e], L.length <= S ? (i = {
                                        element: C.clone().attr("label", e),
                                        label: n.label
                                    }, c = [i], L.push(c), s.append(i.element)) : (c = L[S], i = c[0], i.label != e && i.element.attr("label", i.label = e)), O = null, E = 0, k = n.length; k > E; E++) r = n[E], (f = c[E + 1]) ? (O = f.element, f.label !== r.label && (v(z, f.label, !1), v(z, r.label, !0), O.text(f.label = r.label), O.prop("label", f.label)), f.id !== r.id && O.val(f.id = r.id), O[0].selected !== r.selected && (O.prop("selected", f.selected = r.selected), ei && O.prop("selected", f.selected))) : ("" === r.id && w ? j = w : (j = x.clone()).val(r.id).prop("selected", r.selected).attr("selected", r.selected).prop("label", r.label).text(r.label), c.push(f = {
                                    element: j,
                                    label: r.label,
                                    id: r.id,
                                    selected: r.selected
                                }), v(z, r.label, !0), O ? O.after(j) : i.element.append(j), O = j);
                                for (E++; c.length > E;) r = c.pop(), v(z, r.label, !1), r.element.remove()
                            }
                            for (; L.length > S;) {
                                for (n = L.pop(), E = 1; E < n.length; ++E) v(z, n[E].label, !1);
                                n[0].element.remove()
                            }
                            o(z, function(e, t) {
                                e > 0 ? g.addOption(t) : 0 > e && g.removeOption(t)
                            })
                        }
                        var S;
                        if (!(S = y.match(i))) throw qa("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", y, z(s));
                        var T = r(S[2] || S[1]),
                            E = S[4] || S[6],
                            A = / as /.test(S[0]) && S[1],
                            O = A ? r(A) : null,
                            P = S[5],
                            D = r(S[3] || ""),
                            j = r(S[2] ? S[1] : E),
                            _ = r(S[7]),
                            F = S[8],
                            N = F ? r(S[8]) : null,
                            I = {},
                            L = [
                                [{
                                    element: s,
                                    label: ""
                                }]
                            ],
                            M = {};
                        w && (e(w)(t), w.removeClass("ng-scope"), w.remove()), s.empty(), s.on("change", c), u.$render = k, t.$watchCollection(_, h), t.$watchCollection(d, h), m && t.$watchCollection(function() {
                            return u.$modelValue
                        }, h)
                    }
                    if (c[1]) {
                        for (var h, g = c[0], v = c[1], m = l.multiple, y = l.ngOptions, w = !1, b = !1, x = ti(t.createElement("option")), C = ti(t.createElement("optgroup")), k = x.clone(), S = 0, T = u.children(), E = T.length; E > S; S++)
                            if ("" === T[S].value) {
                                h = w = T.eq(S);
                                break
                            }
                        g.init(v, w, k), m && (v.$isEmpty = function(e) {
                            return !e || 0 === e.length
                        }), y ? p(s, u, v) : m ? d(s, u, v) : f(s, u, v, g)
                    }
                }
            }
        }],
        Ua = ["$interpolate", function(e) {
            var t = {
                addOption: h,
                removeOption: h
            };
            return {
                restrict: "E",
                priority: 100,
                compile: function(n, r) {
                    if (m(r.value)) {
                        var i = e(n.text(), !0);
                        i || r.$set("value", n.text())
                    }
                    return function(e, n, r) {
                        var o = "$selectController",
                            a = n.parent(),
                            s = a.data(o) || a.parent().data(o);
                        s && s.databound || (s = t), i ? e.$watch(i, function(e, t) {
                            r.$set("value", e), t !== e && s.removeOption(t), s.addOption(e, n)
                        }) : s.addOption(r.value, n), n.on("$destroy", function() {
                            s.removeOption(r.value)
                        })
                    }
                }
            }
        }],
        Va = v({
            restrict: "E",
            terminal: !1
        }),
        Ba = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(e, t, n, r) {
                    r && (n.required = !0, r.$validators.required = function(e, t) {
                        return !n.required || !r.$isEmpty(t)
                    }, n.$observe("required", function() {
                        r.$validate()
                    }))
                }
            }
        },
        za = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(e, t, i, o) {
                    if (o) {
                        var a, s = i.ngPattern || i.pattern;
                        i.$observe("pattern", function(e) {
                            if (w(e) && e.length > 0 && (e = new RegExp("^" + e + "$")), e && !e.test) throw r("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", s, e, z(t));
                            a = e || n, o.$validate()
                        }), o.$validators.pattern = function(e) {
                            return o.$isEmpty(e) || m(a) || a.test(e)
                        }
                    }
                }
            }
        },
        Wa = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(e, t, n, r) {
                    if (r) {
                        var i = -1;
                        n.$observe("maxlength", function(e) {
                            var t = d(e);
                            i = isNaN(t) ? -1 : t, r.$validate()
                        }), r.$validators.maxlength = function(e, t) {
                            return 0 > i || r.$isEmpty(t) || t.length <= i
                        }
                    }
                }
            }
        },
        Ga = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(e, t, n, r) {
                    if (r) {
                        var i = 0;
                        n.$observe("minlength", function(e) {
                            i = d(e) || 0, r.$validate()
                        }), r.$validators.minlength = function(e, t) {
                            return r.$isEmpty(t) || t.length >= i
                        }
                    }
                }
            }
        };
    return e.angular.bootstrap ? void console.log("WARNING: Tried to load angular more than once.") : (rt(), pt(li), void ti(t).ready(function() {
        Q(t, Z)
    }))
}(window, document), !window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>'),
    /**
     * @license AngularJS v1.3.17
     * (c) 2010-2014 Google, Inc. http://angularjs.org
     * License: MIT
     */
    function(e, t, n) {
        "use strict";
        t.module("ngAnimate", ["ng"]).directive("ngAnimateChildren", function() {
            var e = "$$ngAnimateChildren";
            return function(n, r, i) {
                var o = i.ngAnimateChildren;
                t.isString(o) && 0 === o.length ? r.data(e, !0) : n.$watch(o, function(t) {
                    r.data(e, !!t)
                })
            }
        }).factory("$$animateReflow", ["$$rAF", "$document", function(e, t) {
            var n = t[0].body;
            return function(t) {
                return e(function() {
                    t(n.offsetWidth)
                })
            }
        }]).config(["$provide", "$animateProvider", function(r, i) {
            function o(e) {
                for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    if (n.nodeType == v) return n
                }
            }

            function a(e) {
                return e && t.element(e)
            }

            function s(e) {
                return t.element(o(e))
            }

            function u(e, t) {
                return o(e) == o(t)
            }
            var l, c = t.noop,
                f = t.forEach,
                d = i.$$selectors,
                p = t.isArray,
                h = t.isString,
                g = t.isObject,
                v = 1,
                m = "$$ngAnimateState",
                $ = "$$ngAnimateChildren",
                y = "ng-animate",
                w = {
                    running: !0
                };
            r.decorator("$animate", ["$delegate", "$$q", "$injector", "$sniffer", "$rootElement", "$$asyncCallback", "$rootScope", "$document", "$templateRequest", "$$jqLite", function(e, n, r, v, b, x, C, k, S, T) {
                function E(e, t) {
                    var n = e.data(m) || {};
                    return t && (n.running = !0, n.structural = !0, e.data(m, n)), n.disabled || n.running && n.structural
                }

                function A(e) {
                    var t, r = n.defer();
                    return r.promise.$$cancelFn = function() {
                        t && t()
                    }, C.$$postDigest(function() {
                        t = e(function() {
                            r.resolve()
                        })
                    }), r.promise
                }

                function O(e) {
                    return g(e) ? (e.tempClasses && h(e.tempClasses) && (e.tempClasses = e.tempClasses.split(/\s+/)), e) : void 0
                }

                function P(e, t, n) {
                    n = n || {};
                    var r = {};
                    f(n, function(e, t) {
                        f(t.split(" "), function(t) {
                            r[t] = e
                        })
                    });
                    var i = Object.create(null);
                    f((e.attr("class") || "").split(/\s+/), function(e) {
                        i[e] = !0
                    });
                    var o = [],
                        a = [];
                    return f(t && t.classes || [], function(e, t) {
                        var n = i[t],
                            s = r[t] || {};
                        e === !1 ? (n || "addClass" == s.event) && a.push(t) : e === !0 && (n && "removeClass" != s.event || o.push(t))
                    }), o.length + a.length > 0 && [o.join(" "), a.join(" ")]
                }

                function D(e) {
                    if (e) {
                        var t = [],
                            n = {},
                            i = e.substr(1).split(".");
                        (v.transitions || v.animations) && t.push(r.get(d[""]));
                        for (var o = 0; o < i.length; o++) {
                            var a = i[o],
                                s = d[a];
                            s && !n[a] && (t.push(r.get(s)), n[a] = !0)
                        }
                        return t
                    }
                }

                function j(e, n, r, i) {
                    function o(e, t) {
                        var n = e[t],
                            r = e["before" + t.charAt(0).toUpperCase() + t.substr(1)];
                        return n || r ? ("leave" == t && (r = n, n = null), x.push({
                            event: t,
                            fn: n
                        }), y.push({
                            event: t,
                            fn: r
                        }), !0) : void 0
                    }

                    function a(t, n, o) {
                        function a(e) {
                            if (n) {
                                if ((n[e] || c)(), ++d < s.length) return;
                                n = null
                            }
                            o()
                        }
                        var s = [];
                        f(t, function(e) {
                            e.fn && s.push(e)
                        });
                        var d = 0;
                        f(s, function(t, o) {
                            var s = function() {
                                a(o)
                            };
                            switch (t.event) {
                                case "setClass":
                                    n.push(t.fn(e, u, l, s, i));
                                    break;
                                case "animate":
                                    n.push(t.fn(e, r, i.from, i.to, s));
                                    break;
                                case "addClass":
                                    n.push(t.fn(e, u || r, s, i));
                                    break;
                                case "removeClass":
                                    n.push(t.fn(e, l || r, s, i));
                                    break;
                                default:
                                    n.push(t.fn(e, s, i))
                            }
                        }), n && 0 === n.length && o()
                    }
                    var s = e[0];
                    if (s) {
                        i && (i.to = i.to || {}, i.from = i.from || {});
                        var u, l;
                        p(r) && (u = r[0], l = r[1], u ? l ? r = u + " " + l : (r = u, n = "addClass") : (r = l, n = "removeClass"));
                        var d = "setClass" == n,
                            h = d || "addClass" == n || "removeClass" == n || "animate" == n,
                            g = e.attr("class"),
                            v = g + " " + r;
                        if (R(v)) {
                            var m = c,
                                $ = [],
                                y = [],
                                w = c,
                                b = [],
                                x = [],
                                C = (" " + v).replace(/\s+/g, ".");
                            return f(D(C), function(e) {
                                var t = o(e, n);
                                !t && d && (o(e, "addClass"), o(e, "removeClass"))
                            }), {
                                node: s,
                                event: n,
                                className: r,
                                isClassBased: h,
                                isSetClassOperation: d,
                                applyStyles: function() {
                                    i && e.css(t.extend(i.from || {}, i.to || {}))
                                },
                                before: function(e) {
                                    m = e, a(y, $, function() {
                                        m = c, e()
                                    })
                                },
                                after: function(e) {
                                    w = e, a(x, b, function() {
                                        w = c, e()
                                    })
                                },
                                cancel: function() {
                                    $ && (f($, function(e) {
                                        (e || c)(!0)
                                    }), m(!0)), b && (f(b, function(e) {
                                        (e || c)(!0)
                                    }), w(!0))
                                }
                            }
                        }
                    }
                }

                function _(e, n, r, i, o, a, s, u) {
                    function d(t) {
                        var i = "$animate:" + t;
                        C && C[i] && C[i].length > 0 && x(function() {
                            r.triggerHandler(i, {
                                event: e,
                                className: n
                            })
                        })
                    }

                    function p() {
                        d("before")
                    }

                    function h() {
                        d("after")
                    }

                    function g() {
                        d("close"), u()
                    }

                    function v() {
                        v.hasBeenRun || (v.hasBeenRun = !0, a())
                    }

                    function $() {
                        if (!$.hasBeenRun) {
                            b && b.applyStyles(), $.hasBeenRun = !0, s && s.tempClasses && f(s.tempClasses, function(e) {
                                l.removeClass(r, e)
                            });
                            var t = r.data(m);
                            t && (b && b.isClassBased ? N(r, n) : (x(function() {
                                var t = r.data(m) || {};
                                _ == t.index && N(r, n, e)
                            }), r.data(m, t))), g()
                        }
                    }
                    var w = c,
                        b = j(r, e, n, s);
                    if (!b) return v(), p(), h(), $(), w;
                    e = b.event, n = b.className;
                    var C = t.element._data(b.node);
                    if (C = C && C.events, i || (i = o ? o.parent() : r.parent()), I(r, i)) return v(), p(), h(), $(), w;
                    var k = r.data(m) || {},
                        S = k.active || {},
                        T = k.totalActive || 0,
                        E = k.last,
                        A = !1;
                    if (T > 0) {
                        var O = [];
                        if (b.isClassBased) {
                            if ("setClass" == E.event) O.push(E), N(r, n);
                            else if (S[n]) {
                                var P = S[n];
                                P.event == e ? A = !0 : (O.push(P), N(r, n))
                            }
                        } else if ("leave" == e && S["ng-leave"]) A = !0;
                        else {
                            for (var D in S) O.push(S[D]);
                            k = {}, N(r, !0)
                        }
                        O.length > 0 && f(O, function(e) {
                            e.cancel()
                        })
                    }
                    if (!b.isClassBased || b.isSetClassOperation || "animate" == e || A || (A = "addClass" == e == r.hasClass(n)), A) return v(), p(), h(), g(), w;
                    S = k.active || {}, T = k.totalActive || 0, "leave" == e && r.one("$destroy", function() {
                        var e = t.element(this),
                            n = e.data(m);
                        if (n) {
                            var r = n.active["ng-leave"];
                            r && (r.cancel(), N(e, "ng-leave"))
                        }
                    }), l.addClass(r, y), s && s.tempClasses && f(s.tempClasses, function(e) {
                        l.addClass(r, e)
                    });
                    var _ = M++;
                    return T++, S[n] = b, r.data(m, {
                        last: b,
                        active: S,
                        index: _,
                        totalActive: T
                    }), p(), b.before(function(t) {
                        var i = r.data(m);
                        t = t || !i || !i.active[n] || b.isClassBased && i.active[n].event != e, v(), t === !0 ? $() : (h(), b.after($))
                    }), b.cancel
                }

                function F(e) {
                    var n = o(e);
                    if (n) {
                        var r = t.isFunction(n.getElementsByClassName) ? n.getElementsByClassName(y) : n.querySelectorAll("." + y);
                        f(r, function(e) {
                            e = t.element(e);
                            var n = e.data(m);
                            n && n.active && f(n.active, function(e) {
                                e.cancel()
                            })
                        })
                    }
                }

                function N(e, t) {
                    if (u(e, b)) w.disabled || (w.running = !1, w.structural = !1);
                    else if (t) {
                        var n = e.data(m) || {},
                            r = t === !0;
                        !r && n.active && n.active[t] && (n.totalActive--, delete n.active[t]), (r || !n.totalActive) && (l.removeClass(e, y), e.removeData(m))
                    }
                }

                function I(e, n) {
                    if (w.disabled) return !0;
                    if (u(e, b)) return w.running;
                    var r, i, o;
                    do {
                        if (0 === n.length) break;
                        var a = u(n, b),
                            s = a ? w : n.data(m) || {};
                        if (s.disabled) return !0;
                        if (a && (o = !0), r !== !1) {
                            var l = n.data($);
                            t.isDefined(l) && (r = l)
                        }
                        i = i || s.running || s.last && !s.last.isClassBased
                    } while (n = n.parent());
                    return !o || !r && i
                }
                l = T, b.data(m, w);
                var L = C.$watch(function() {
                        return S.totalPendingRequests
                    }, function(e) {
                        0 === e && (L(), C.$$postDigest(function() {
                            C.$$postDigest(function() {
                                w.running = !1
                            })
                        }))
                    }),
                    M = 0,
                    q = i.classNameFilter(),
                    R = q ? function(e) {
                        return q.test(e)
                    } : function() {
                        return !0
                    };
                return {
                    animate: function(e, t, n, r, i) {
                        return r = r || "ng-inline-animate", i = O(i) || {}, i.from = n ? t : null, i.to = n ? n : t, A(function(t) {
                            return _("animate", r, s(e), null, null, c, i, t)
                        })
                    },
                    enter: function(n, r, i, o) {
                        return o = O(o), n = t.element(n), r = a(r), i = a(i), E(n, !0), e.enter(n, r, i), A(function(e) {
                            return _("enter", "ng-enter", s(n), r, i, c, o, e)
                        })
                    },
                    leave: function(n, r) {
                        return r = O(r), n = t.element(n), F(n), E(n, !0), A(function(t) {
                            return _("leave", "ng-leave", s(n), null, null, function() {
                                e.leave(n)
                            }, r, t)
                        })
                    },
                    move: function(n, r, i, o) {
                        return o = O(o), n = t.element(n), r = a(r), i = a(i), F(n), E(n, !0), e.move(n, r, i), A(function(e) {
                            return _("move", "ng-move", s(n), r, i, c, o, e)
                        })
                    },
                    addClass: function(e, t, n) {
                        return this.setClass(e, t, [], n)
                    },
                    removeClass: function(e, t, n) {
                        return this.setClass(e, [], t, n)
                    },
                    setClass: function(n, r, i, a) {
                        a = O(a);
                        var u = "$$animateClasses";
                        if (n = t.element(n), n = s(n), E(n)) return e.$$setClassImmediately(n, r, i, a);
                        var l, c = n.data(u),
                            d = !!c;
                        return c || (c = {}, c.classes = {}), l = c.classes, r = p(r) ? r : r.split(" "), f(r, function(e) {
                            e && e.length && (l[e] = !0)
                        }), i = p(i) ? i : i.split(" "), f(i, function(e) {
                            e && e.length && (l[e] = !1)
                        }), d ? (a && c.options && (c.options = t.extend(c.options || {}, a)), c.promise) : (n.data(u, c = {
                            classes: l,
                            options: a
                        }), c.promise = A(function(t) {
                            var r = n.parent(),
                                i = o(n),
                                a = i.parentNode;
                            if (!a || a.$$NG_REMOVED || i.$$NG_REMOVED) return void t();
                            var s = n.data(u);
                            n.removeData(u);
                            var l = n.data(m) || {},
                                c = P(n, s, l.active);
                            return c ? _("setClass", c, n, r, null, function() {
                                c[0] && e.$$addClassImmediately(n, c[0]), c[1] && e.$$removeClassImmediately(n, c[1])
                            }, s.options, t) : t()
                        }))
                    },
                    cancel: function(e) {
                        e.$$cancelFn()
                    },
                    enabled: function(e, t) {
                        switch (arguments.length) {
                            case 2:
                                if (e) N(t);
                                else {
                                    var n = t.data(m) || {};
                                    n.disabled = !0, t.data(m, n)
                                }
                                break;
                            case 1:
                                w.disabled = !e;
                                break;
                            default:
                                e = !w.disabled
                        }
                        return !!e
                    }
                }
            }]), i.register("", ["$window", "$sniffer", "$timeout", "$$animateReflow", function(r, i, a, s) {
                function u() {
                    N || (N = s(function() {
                        X = [], N = null, W = {}
                    }))
                }

                function d(e, t) {
                    N && N(), X.push(t), N = s(function() {
                        f(X, function(e) {
                            e()
                        }), X = [], N = null, W = {}
                    })
                }

                function g(e, n) {
                    var r = o(e);
                    e = t.element(r), J.push(e);
                    var i = Date.now() + n;
                    K >= i || (a.cancel(Y), K = i, Y = a(function() {
                        m(J), J = []
                    }, n, !1))
                }

                function m(e) {
                    f(e, function(e) {
                        var t = e.data(U);
                        t && f(t.closeAnimationFns, function(e) {
                            e()
                        })
                    })
                }

                function $(e, t) {
                    var n = t ? W[t] : null;
                    if (!n) {
                        var i = 0,
                            o = 0,
                            a = 0,
                            s = 0;
                        f(e, function(e) {
                            if (e.nodeType == v) {
                                var t = r.getComputedStyle(e) || {},
                                    n = t[P + I];
                                i = Math.max(y(n), i);
                                var u = t[P + M];
                                o = Math.max(y(u), o); {
                                    t[j + M]
                                }
                                s = Math.max(y(t[j + M]), s);
                                var l = y(t[j + I]);
                                l > 0 && (l *= parseInt(t[j + q], 10) || 1), a = Math.max(l, a)
                            }
                        }), n = {
                            total: 0,
                            transitionDelay: o,
                            transitionDuration: i,
                            animationDelay: s,
                            animationDuration: a
                        }, t && (W[t] = n)
                    }
                    return n
                }

                function y(e) {
                    var t = 0,
                        n = h(e) ? e.split(/\s*,\s*/) : [];
                    return f(n, function(e) {
                        t = Math.max(parseFloat(e) || 0, t)
                    }), t
                }

                function w(e) {
                    var t = e.parent(),
                        n = t.data(H);
                    return n || (t.data(H, ++G), n = G), n + "-" + o(e).getAttribute("class")
                }

                function b(e, t, n, r) {
                    var i = ["ng-enter", "ng-leave", "ng-move"].indexOf(n) >= 0,
                        a = w(t),
                        s = a + " " + n,
                        u = W[s] ? ++W[s].total : 0,
                        c = {};
                    if (u > 0) {
                        var f = n + "-stagger",
                            d = a + " " + f,
                            p = !W[d];
                        p && l.addClass(t, f), c = $(t, d), p && l.removeClass(t, f)
                    }
                    l.addClass(t, n);
                    var h = t.data(U) || {},
                        g = $(t, s),
                        v = g.transitionDuration,
                        m = g.animationDuration;
                    if (i && 0 === v && 0 === m) return l.removeClass(t, n), !1;
                    var y = r || i && v > 0,
                        b = m > 0 && c.animationDelay > 0 && 0 === c.animationDuration,
                        x = h.closeAnimationFns || [];
                    t.data(U, {
                        stagger: c,
                        cacheKey: s,
                        running: h.running || 0,
                        itemIndex: u,
                        blockTransition: y,
                        closeAnimationFns: x
                    });
                    var S = o(t);
                    return y && (C(S, !0), r && t.css(r)), b && k(S, !0), !0
                }

                function x(e, t, n, r, i) {
                    function s() {
                        t.off(M, u), l.removeClass(t, p), l.removeClass(t, h), I && a.cancel(I), A(t, n);
                        var e = o(t);
                        for (var r in m) e.style.removeProperty(m[r])
                    }

                    function u(e) {
                        e.stopPropagation();
                        var t = e.originalEvent || e,
                            n = t.$manualTimeStamp || t.timeStamp || Date.now(),
                            i = parseFloat(t.elapsedTime.toFixed(V));
                        Math.max(n - L, 0) >= j && i >= O && r()
                    }
                    var c = o(t),
                        d = t.data(U);
                    if (-1 == c.getAttribute("class").indexOf(n) || !d) return void r();
                    var p = "",
                        h = "";
                    f(n.split(" "), function(e, t) {
                        var n = (t > 0 ? " " : "") + e;
                        p += n + "-active", h += n + "-pending"
                    });
                    var v = "",
                        m = [],
                        y = d.itemIndex,
                        w = d.stagger,
                        b = 0;
                    if (y > 0) {
                        var x = 0;
                        w.transitionDelay > 0 && 0 === w.transitionDuration && (x = w.transitionDelay * y);
                        var S = 0;
                        w.animationDelay > 0 && 0 === w.animationDuration && (S = w.animationDelay * y, m.push(F + "animation-play-state")), b = Math.round(100 * Math.max(x, S)) / 100
                    }
                    b || (l.addClass(t, p), d.blockTransition && C(c, !1));
                    var T = d.cacheKey + " " + p,
                        E = $(t, T),
                        O = Math.max(E.transitionDuration, E.animationDuration);
                    if (0 === O) return l.removeClass(t, p), A(t, n), void r();
                    !b && i && Object.keys(i).length > 0 && (E.transitionDuration || (t.css("transition", E.animationDuration + "s linear all"), m.push("transition")), t.css(i));
                    var P = Math.max(E.transitionDelay, E.animationDelay),
                        j = P * z;
                    if (m.length > 0) {
                        var N = c.getAttribute("style") || "";
                        ";" !== N.charAt(N.length - 1) && (N += ";"), c.setAttribute("style", N + " " + v)
                    }
                    var I, L = Date.now(),
                        M = _ + " " + D,
                        q = (P + O) * B,
                        R = (b + q) * z;
                    return b > 0 && (l.addClass(t, h), I = a(function() {
                        I = null, E.transitionDuration > 0 && C(c, !1), E.animationDuration > 0 && k(c, !1), l.addClass(t, p), l.removeClass(t, h), i && (0 === E.transitionDuration && t.css("transition", E.animationDuration + "s linear all"), t.css(i), m.push("transition"))
                    }, b * z, !1)), t.on(M, u), d.closeAnimationFns.push(function() {
                        s(), r()
                    }), d.running++, g(t, R), s
                }

                function C(e, t) {
                    e.style[P + L] = t ? "none" : ""
                }

                function k(e, t) {
                    e.style[j + R] = t ? "paused" : ""
                }

                function S(e, t, n, r) {
                    return b(e, t, n, r) ? function(e) {
                        e && A(t, n)
                    } : void 0
                }

                function T(e, t, n, r, i) {
                    return t.data(U) ? x(e, t, n, r, i) : (A(t, n), void r())
                }

                function E(e, t, n, r, i) {
                    var o = S(e, t, n, i.from);
                    if (!o) return u(), void r();
                    var a = o;
                    return d(t, function() {
                            a = T(e, t, n, r, i.to)
                        }),
                        function(e) {
                            (a || c)(e)
                        }
                }

                function A(e, t) {
                    l.removeClass(e, t);
                    var n = e.data(U);
                    n && (n.running && n.running--, n.running && 0 !== n.running || e.removeData(U))
                }

                function O(e, t) {
                    var n = "";
                    return e = p(e) ? e : e.split(/\s+/), f(e, function(e, r) {
                        e && e.length > 0 && (n += (r > 0 ? " " : "") + e + t)
                    }), n
                }
                var P, D, j, _, F = "";
                e.ontransitionend === n && e.onwebkittransitionend !== n ? (F = "-webkit-", P = "WebkitTransition", D = "webkitTransitionEnd transitionend") : (P = "transition", D = "transitionend"), e.onanimationend === n && e.onwebkitanimationend !== n ? (F = "-webkit-", j = "WebkitAnimation", _ = "webkitAnimationEnd animationend") : (j = "animation", _ = "animationend");
                var N, I = "Duration",
                    L = "Property",
                    M = "Delay",
                    q = "IterationCount",
                    R = "PlayState",
                    H = "$$ngAnimateKey",
                    U = "$$ngAnimateCSS3Data",
                    V = 3,
                    B = 1.5,
                    z = 1e3,
                    W = {},
                    G = 0,
                    X = [],
                    Y = null,
                    K = 0,
                    J = [];
                return {
                    animate: function(e, t, n, r, i, o) {
                        return o = o || {}, o.from = n, o.to = r, E("animate", e, t, i, o)
                    },
                    enter: function(e, t, n) {
                        return n = n || {}, E("enter", e, "ng-enter", t, n)
                    },
                    leave: function(e, t, n) {
                        return n = n || {}, E("leave", e, "ng-leave", t, n)
                    },
                    move: function(e, t, n) {
                        return n = n || {}, E("move", e, "ng-move", t, n)
                    },
                    beforeSetClass: function(e, t, n, r, i) {
                        i = i || {};
                        var o = O(n, "-remove") + " " + O(t, "-add"),
                            a = S("setClass", e, o, i.from);
                        return a ? (d(e, r), a) : (u(), void r())
                    },
                    beforeAddClass: function(e, t, n, r) {
                        r = r || {};
                        var i = S("addClass", e, O(t, "-add"), r.from);
                        return i ? (d(e, n), i) : (u(), void n())
                    },
                    beforeRemoveClass: function(e, t, n, r) {
                        r = r || {};
                        var i = S("removeClass", e, O(t, "-remove"), r.from);
                        return i ? (d(e, n), i) : (u(), void n())
                    },
                    setClass: function(e, t, n, r, i) {
                        i = i || {}, n = O(n, "-remove"), t = O(t, "-add");
                        var o = n + " " + t;
                        return T("setClass", e, o, r, i.to)
                    },
                    addClass: function(e, t, n, r) {
                        return r = r || {}, T("addClass", e, O(t, "-add"), n, r.to)
                    },
                    removeClass: function(e, t, n, r) {
                        return r = r || {}, T("removeClass", e, O(t, "-remove"), n, r.to)
                    }
                }
            }])
        }])
    }(window, window.angular),
    /**
     * @license AngularJS v1.3.17
     * (c) 2010-2014 Google, Inc. http://angularjs.org
     * License: MIT
     */
    function(e, t, n) {
        "use strict";
        t.module("ngCookies", ["ng"]).factory("$cookies", ["$rootScope", "$browser", function(e, r) {
            function i() {
                var e, i, o, u;
                for (e in s) c(a[e]) && (r.cookies(e, n), delete s[e]);
                for (e in a) i = a[e], t.isString(i) || (i = "" + i, a[e] = i), i !== s[e] && (r.cookies(e, i), s[e] = i, u = !0);
                if (u) {
                    o = r.cookies();
                    for (e in a) a[e] !== o[e] && (c(o[e]) ? (delete a[e], delete s[e]) : a[e] = s[e] = o[e])
                }
            }
            var o, a = {},
                s = {},
                u = !1,
                l = t.copy,
                c = t.isUndefined;
            return r.addPollFn(function() {
                var t = r.cookies();
                o != t && (o = t, l(t, s), l(t, a), u && e.$apply())
            })(), u = !0, e.$watch(i), a
        }]).factory("$cookieStore", ["$cookies", function(e) {
            return {
                get: function(n) {
                    var r = e[n];
                    return r ? t.fromJson(r) : r
                },
                put: function(n, r) {
                    e[n] = t.toJson(r)
                },
                remove: function(t) {
                    delete e[t]
                }
            }
        }])
    }(window, window.angular), angular.module("tinacious.fluidVid", []).directive("fluidVideo", ["$log", function(e) {
        return {
            link: function(t, n, r) {
                var i, o = r.videoType,
                    a = r.videoId;
                if (a || e.error("Specify a video ID"), o || e.error("Specify type, either 'youtube' or 'vimeo'"), a && o) {
                    switch (o) {
                        case "youtube":
                            i = '<iframe src="http://www.youtube.com/embed/' + a + '" frameborder="0" allowfullscreen></iframe>';
                            break;
                        case "vimeo":
                            i = '<iframe src="http://player.vimeo.com/video/' + a + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
                            break;
                        default:
                            e.error('Sorry, the type "' + o + "\" is not currently supported. Please use either 'youtube' or 'vimeo'")
                    }
                    n.replaceWith('<div class="responsive-video">' + i + "</div>"), angular.element(document).find("head").append('<style type="text/css">.responsive-video iframe {position: absolute; top: 0; left: 0; width: 100%; height: 100%;} .responsive-video {position: relative; padding-bottom: 56.25%; height: 0;}</style>')
                }
            }
        }
    }]),
    function() {
        "use strict";

        function e() {}

        function t(e, t) {
            for (var n = e.length; n--;)
                if (e[n].listener === t) return n;
            return -1
        }

        function n(e) {
            return function() {
                return this[e].apply(this, arguments)
            }
        }
        var r = e.prototype,
            i = this,
            o = i.EventEmitter;
        r.getListeners = function(e) {
            var t, n, r = this._getEvents();
            if (e instanceof RegExp) {
                t = {};
                for (n in r) r.hasOwnProperty(n) && e.test(n) && (t[n] = r[n])
            } else t = r[e] || (r[e] = []);
            return t
        }, r.flattenListeners = function(e) {
            var t, n = [];
            for (t = 0; t < e.length; t += 1) n.push(e[t].listener);
            return n
        }, r.getListenersAsObject = function(e) {
            var t, n = this.getListeners(e);
            return n instanceof Array && (t = {}, t[e] = n), t || n
        }, r.addListener = function(e, n) {
            var r, i = this.getListenersAsObject(e),
                o = "object" == typeof n;
            for (r in i) i.hasOwnProperty(r) && -1 === t(i[r], n) && i[r].push(o ? n : {
                listener: n,
                once: !1
            });
            return this
        }, r.on = n("addListener"), r.addOnceListener = function(e, t) {
            return this.addListener(e, {
                listener: t,
                once: !0
            })
        }, r.once = n("addOnceListener"), r.defineEvent = function(e) {
            return this.getListeners(e), this
        }, r.defineEvents = function(e) {
            for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
            return this
        }, r.removeListener = function(e, n) {
            var r, i, o = this.getListenersAsObject(e);
            for (i in o) o.hasOwnProperty(i) && (r = t(o[i], n), -1 !== r && o[i].splice(r, 1));
            return this
        }, r.off = n("removeListener"), r.addListeners = function(e, t) {
            return this.manipulateListeners(!1, e, t)
        }, r.removeListeners = function(e, t) {
            return this.manipulateListeners(!0, e, t)
        }, r.manipulateListeners = function(e, t, n) {
            var r, i, o = e ? this.removeListener : this.addListener,
                a = e ? this.removeListeners : this.addListeners;
            if ("object" != typeof t || t instanceof RegExp)
                for (r = n.length; r--;) o.call(this, t, n[r]);
            else
                for (r in t) t.hasOwnProperty(r) && (i = t[r]) && ("function" == typeof i ? o.call(this, r, i) : a.call(this, r, i));
            return this
        }, r.removeEvent = function(e) {
            var t, n = typeof e,
                r = this._getEvents();
            if ("string" === n) delete r[e];
            else if (e instanceof RegExp)
                for (t in r) r.hasOwnProperty(t) && e.test(t) && delete r[t];
            else delete this._events;
            return this
        }, r.removeAllListeners = n("removeEvent"), r.emitEvent = function(e, t) {
            var n, r, i, o, a = this.getListenersAsObject(e);
            for (i in a)
                if (a.hasOwnProperty(i))
                    for (r = a[i].length; r--;) n = a[i][r], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
            return this
        }, r.trigger = n("emitEvent"), r.emit = function(e) {
            var t = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(e, t)
        }, r.setOnceReturnValue = function(e) {
            return this._onceReturnValue = e, this
        }, r._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, r._getEvents = function() {
            return this._events || (this._events = {})
        }, e.noConflict = function() {
            return i.EventEmitter = o, e
        }, "function" == typeof define && define.amd ? define(function() {
            return e
        }) : "object" == typeof module && module.exports ? module.exports = e : i.EventEmitter = e
    }.call(this),
    /*!
     * eventie v1.0.6
     * event binding helper
     *   eventie.bind( elem, 'click', myFn )
     *   eventie.unbind( elem, 'click', myFn )
     * MIT license
     */
    function(e) {
        "use strict";

        function t(t) {
            var n = e.event;
            return n.target = n.target || n.srcElement || t, n
        }
        var n = document.documentElement,
            r = function() {};
        n.addEventListener ? r = function(e, t, n) {
            e.addEventListener(t, n, !1)
        } : n.attachEvent && (r = function(e, n, r) {
            e[n + r] = r.handleEvent ? function() {
                var n = t(e);
                r.handleEvent.call(r, n)
            } : function() {
                var n = t(e);
                r.call(e, n)
            }, e.attachEvent("on" + n, e[n + r])
        });
        var i = function() {};
        n.removeEventListener ? i = function(e, t, n) {
            e.removeEventListener(t, n, !1)
        } : n.detachEvent && (i = function(e, t, n) {
            e.detachEvent("on" + t, e[t + n]);
            try {
                delete e[t + n]
            } catch (r) {
                e[t + n] = void 0
            }
        });
        var o = {
            bind: r,
            unbind: i
        };
        "function" == typeof define && define.amd ? define(o) : "object" == typeof exports ? module.exports = o : e.eventie = o
    }(window),
    /*!
     * imagesLoaded v3.1.8
     * JavaScript is all like "You images are done yet or what?"
     * MIT License
     */
    function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(n, r) {
            return t(e, n, r)
        }) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
    }(window, function(e, t, n) {
        "use strict";

        function r(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function i(e) {
            return "[object Array]" === d.call(e)
        }

        function o(e) {
            var t = [];
            if (i(e)) t = e;
            else if ("number" == typeof e.length)
                for (var n = 0, r = e.length; r > n; n++) t.push(e[n]);
            else t.push(e);
            return t
        }

        function a(e, t, n) {
            if (!(this instanceof a)) return new a(e, t);
            "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = r({}, this.options), "function" == typeof t ? n = t : r(this.options, t), n && this.on("always", n), this.getImages(), l && (this.jqDeferred = new l.Deferred);
            var i = this;
            setTimeout(function() {
                i.check()
            })
        }

        function s(e) {
            this.img = e
        }

        function u(e) {
            this.src = e, p[e] = this
        }
        var l = e.jQuery,
            c = e.console,
            f = "undefined" != typeof c,
            d = Object.prototype.toString;
        a.prototype = new t, a.prototype.options = {}, a.prototype.getImages = function() {
            this.images = [];
            for (var e = 0, t = this.elements.length; t > e; e++) {
                var n = this.elements[e];
                "IMG" === n.nodeName && this.addImage(n);
                var r = n.nodeType;
                if (r && (1 === r || 9 === r || 11 === r))
                    for (var i = n.querySelectorAll("img"), o = 0, a = i.length; a > o; o++) {
                        var s = i[o];
                        this.addImage(s)
                    }
            }
        }, a.prototype.addImage = function(e) {
            var t = new s(e);
            this.images.push(t)
        }, a.prototype.check = function() {
            function e(e, i) {
                return t.options.debug && f && c.log("confirm", e, i), t.progress(e), n++, n === r && t.complete(), !0
            }
            var t = this,
                n = 0,
                r = this.images.length;
            if (this.hasAnyBroken = !1, !r) return void this.complete();
            for (var i = 0; r > i; i++) {
                var o = this.images[i];
                o.on("confirm", e), o.check()
            }
        }, a.prototype.progress = function(e) {
            this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
            var t = this;
            setTimeout(function() {
                t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
            })
        }, a.prototype.complete = function() {
            var e = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var t = this;
            setTimeout(function() {
                if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
                    var n = t.hasAnyBroken ? "reject" : "resolve";
                    t.jqDeferred[n](t)
                }
            })
        }, l && (l.fn.imagesLoaded = function(e, t) {
            var n = new a(this, e, t);
            return n.jqDeferred.promise(l(this))
        }), s.prototype = new t, s.prototype.check = function() {
            var e = p[this.img.src] || new u(this.img.src);
            if (e.isConfirmed) return void this.confirm(e.isLoaded, "cached was confirmed");
            if (this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
            var t = this;
            e.on("confirm", function(e, n) {
                return t.confirm(e.isLoaded, n), !0
            }), e.check()
        }, s.prototype.confirm = function(e, t) {
            this.isLoaded = e, this.emit("confirm", this, t)
        };
        var p = {};
        return u.prototype = new t, u.prototype.check = function() {
            if (!this.isChecked) {
                var e = new Image;
                n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0
            }
        }, u.prototype.handleEvent = function(e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, u.prototype.onload = function(e) {
            this.confirm(!0, "onload"), this.unbindProxyEvents(e)
        }, u.prototype.onerror = function(e) {
            this.confirm(!1, "onerror"), this.unbindProxyEvents(e)
        }, u.prototype.confirm = function(e, t) {
            this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
        }, u.prototype.unbindProxyEvents = function(e) {
            n.unbind(e.target, "load", this), n.unbind(e.target, "error", this)
        }, a
    }), angular.module("angular-images-loaded", []), angular.module("angular-images-loaded").constant("imagesLoaded", imagesLoaded), angular.module("angular-images-loaded").directive("imagesLoaded", ["$timeout", "imagesLoaded", function(e, t) {
        "use strict";
        return {
            restrict: "AC",
            link: function(n, r, i) {
                var o = n.$eval(i.imagesLoaded) || n.$eval(i.imagesLoadedEvents),
                    a = i.imagesLoadedClass || "images-loaded",
                    s = r.hasClass(a),
                    u = function() {
                        e(function() {
                            n.$imagesLoaded = !1, n.$emit("imagesLoaded:started", {
                                scope: n,
                                element: r
                            }), s && r.addClass(a);
                            var e = t(r[0], function() {
                                n.$imagesLoaded = !0, n.$emit("imagesLoaded:loaded", {
                                    scope: n,
                                    element: r
                                }), r.removeClass(a + " images-loaded: " + i.imagesLoaded + ";"), n.$$phase || n.$apply()
                            });
                            void 0 !== typeof o && angular.forEach(o, function(t, n) {
                                e.on(n, t)
                            })
                        })
                    };
                i.imagesLoadedWatch ? n.$watch(i.imagesLoadedWatch, function() {
                    u()
                }) : u()
            }
        }
    }]),
    /**
     * @license AngularJS v1.3.17
     * (c) 2010-2014 Google, Inc. http://angularjs.org
     * License: MIT
     */
    function(e, t) {
        "use strict";
        /*
         * HTML Parser By Misko Hevery (misko@hevery.com)
         * based on:  HTML Parser By John Resig (ejohn.org)
         * Original code by Erik Arvidsson, Mozilla Public License
         * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
         *
         * // Use like so:
         * htmlParser(htmlString, {
         *     start: function(tag, attrs, unary) {},
         *     end: function(tag) {},
         *     chars: function(text) {},
         *     comment: function(text) {}
         * });
         *
         */
        function n() {
            this.$get = ["$$sanitizeUri", function(e) {
                return function(t) {
                    var n = [];
                    return o(t, u(n, function(t, n) {
                        return !/^unsafe/.test(e(t, n))
                    })), n.join("")
                }
            }]
        }

        function r(e) {
            var n = [],
                r = u(n, t.noop);
            return r.chars(e), n.join("")
        }

        function i(e) {
            var t, n = {},
                r = e.split(",");
            for (t = 0; t < r.length; t++) n[r[t]] = !0;
            return n
        }

        function o(e, n) {
            function r(e, r, o, s) {
                if (r = t.lowercase(r), k[r])
                    for (; y.last() && S[y.last()];) i("", y.last());
                C[r] && y.last() == r && i("", r), s = w[r] || !!s, s || y.push(r);
                var u = {};
                o.replace(d, function(e, t, n, r, i) {
                    var o = n || r || i || "";
                    u[t] = a(o)
                }), n.start && n.start(r, u, s)
            }

            function i(e, r) {
                var i, o = 0;
                if (r = t.lowercase(r))
                    for (o = y.length - 1; o >= 0 && y[o] != r; o--);
                if (o >= 0) {
                    for (i = y.length - 1; i >= o; i--) n.end && n.end(y[i]);
                    y.length = o
                }
            }
            "string" != typeof e && (e = null === e || "undefined" == typeof e ? "" : "" + e);
            var o, s, u, $, y = [],
                b = e;
            for (y.last = function() {
                    return y[y.length - 1]
                }; e;) {
                if ($ = "", s = !0, y.last() && E[y.last()] ? (e = e.replace(new RegExp("([\\W\\w]*)<\\s*\\/\\s*" + y.last() + "[^>]*>", "i"), function(e, t) {
                        return t = t.replace(g, "$1").replace(m, "$1"), n.chars && n.chars(a(t)), ""
                    }), i("", y.last())) : (0 === e.indexOf("<!--") ? (o = e.indexOf("--", 4), o >= 0 && e.lastIndexOf("-->", o) === o && (n.comment && n.comment(e.substring(4, o)), e = e.substring(o + 3), s = !1)) : v.test(e) ? (u = e.match(v), u && (e = e.replace(u[0], ""), s = !1)) : h.test(e) ? (u = e.match(f), u && (e = e.substring(u[0].length), u[0].replace(f, i), s = !1)) : p.test(e) && (u = e.match(c), u ? (u[4] && (e = e.substring(u[0].length), u[0].replace(c, r)), s = !1) : ($ += "<", e = e.substring(1))), s && (o = e.indexOf("<"), $ += 0 > o ? e : e.substring(0, o), e = 0 > o ? "" : e.substring(o), n.chars && n.chars(a($)))), e == b) throw l("badparse", "The sanitizer was unable to parse the following block of html: {0}", e);
                b = e
            }
            i()
        }

        function a(e) {
            return e ? (_.innerHTML = e.replace(/</g, "&lt;"), _.textContent) : ""
        }

        function s(e) {
            return e.replace(/&/g, "&amp;").replace($, function(e) {
                var t = e.charCodeAt(0),
                    n = e.charCodeAt(1);
                return "&#" + (1024 * (t - 55296) + (n - 56320) + 65536) + ";"
            }).replace(y, function(e) {
                return "&#" + e.charCodeAt(0) + ";"
            }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }

        function u(e, n) {
            var r = !1,
                i = t.bind(e, e.push);
            return {
                start: function(e, o, a) {
                    e = t.lowercase(e), !r && E[e] && (r = e), r || A[e] !== !0 || (i("<"), i(e), t.forEach(o, function(r, o) {
                        var a = t.lowercase(o),
                            u = "img" === e && "src" === a || "background" === a;
                        j[a] !== !0 || O[a] === !0 && !n(r, u) || (i(" "), i(o), i('="'), i(s(r)), i('"'))
                    }), i(a ? "/>" : ">"))
                },
                end: function(e) {
                    e = t.lowercase(e), r || A[e] !== !0 || (i("</"), i(e), i(">")), e == r && (r = !1)
                },
                chars: function(e) {
                    r || i(s(e))
                }
            }
        }
        var l = t.$$minErr("$sanitize"),
            c = /^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,
            f = /^<\/\s*([\w:-]+)[^>]*>/,
            d = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,
            p = /^</,
            h = /^<\//,
            g = /<!--(.*?)-->/g,
            v = /<!DOCTYPE([^>]*?)>/i,
            m = /<!\[CDATA\[(.*?)]]>/g,
            $ = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
            y = /([^\#-~| |!])/g,
            w = i("area,br,col,hr,img,wbr"),
            b = i("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
            x = i("rp,rt"),
            C = t.extend({}, x, b),
            k = t.extend({}, b, i("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),
            S = t.extend({}, x, i("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
            T = i("animate,animateColor,animateMotion,animateTransform,circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,set,stop,svg,switch,text,title,tspan,use"),
            E = i("script,style"),
            A = t.extend({}, w, k, S, C, T),
            O = i("background,cite,href,longdesc,src,usemap,xlink:href"),
            P = i("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width"),
            D = i("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,attributeName,attributeType,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan"),
            j = t.extend({}, O, D, P),
            _ = document.createElement("pre");
        t.module("ngSanitize", []).provider("$sanitize", n), t.module("ngSanitize").filter("linky", ["$sanitize", function(e) {
            var n = /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"”’]/i,
                i = /^mailto:/i;
            return function(o, a) {
                function s(e) {
                    e && p.push(r(e))
                }

                function u(e, n) {
                    p.push("<a "), t.isDefined(a) && p.push('target="', a, '" '), p.push('href="', e.replace(/"/g, "&quot;"), '">'), s(n), p.push("</a>")
                }
                if (!o) return o;
                for (var l, c, f, d = o, p = []; l = d.match(n);) c = l[0], l[2] || l[4] || (c = (l[3] ? "http://" : "mailto:") + c), f = l.index, s(d.substr(0, f)), u(c, l[0].replace(i, "")), d = d.substring(f + l[0].length);
                return s(d), e(p.join(""))
            }
        }])
    }(window, window.angular);
var duScrollDefaultEasing = function(e) {
    "use strict";
    return .5 > e ? Math.pow(2 * e, 2) / 2 : 1 - Math.pow(2 * (1 - e), 2) / 2
};
angular.module("duScroll", ["duScroll.scrollspy", "duScroll.smoothScroll", "duScroll.scrollContainer", "duScroll.spyContext", "duScroll.scrollHelpers"]).value("duScrollDuration", 350).value("duScrollSpyWait", 100).value("duScrollGreedy", !1).value("duScrollOffset", 0).value("duScrollEasing", duScrollDefaultEasing), angular.module("duScroll.scrollHelpers", ["duScroll.requestAnimation"]).run(["$window", "$q", "cancelAnimation", "requestAnimation", "duScrollEasing", "duScrollDuration", "duScrollOffset", function(e, t, n, r, i, o, a) {
        "use strict";
        var s = {},
            u = function(e) {
                return "undefined" != typeof HTMLDocument && e instanceof HTMLDocument || e.nodeType && e.nodeType === e.DOCUMENT_NODE
            },
            l = function(e) {
                return "undefined" != typeof HTMLElement && e instanceof HTMLElement || e.nodeType && e.nodeType === e.ELEMENT_NODE
            },
            c = function(e) {
                return l(e) || u(e) ? e : e[0]
            };
        s.duScrollTo = function(t, n, r) {
            var i;
            if (angular.isElement(t) ? i = this.duScrollToElement : angular.isDefined(r) && (i = this.duScrollToAnimated), i) return i.apply(this, arguments);
            var o = c(this);
            return u(o) ? e.scrollTo(t, n) : (o.scrollLeft = t, void(o.scrollTop = n))
        };
        var f, d;
        s.duScrollToAnimated = function(e, o, a, s) {
            a && !s && (s = i);
            var u = this.duScrollLeft(),
                l = this.duScrollTop(),
                c = Math.round(e - u),
                p = Math.round(o - l),
                h = null,
                g = 0,
                v = this,
                m = "scroll mousedown mousewheel touchmove keydown",
                $ = function(e) {
                    (!e || g && e.which > 0) && (v.unbind(m, $), n(f), d.reject(), f = null)
                };
            if (f && $(), d = t.defer(), 0 === a || !c && !p) return 0 === a && v.duScrollTo(e, o), d.resolve(), d.promise;
            var y = function(e) {
                null === h && (h = e), g = e - h;
                var t = g >= a ? 1 : s(g / a);
                v.scrollTo(u + Math.ceil(c * t), l + Math.ceil(p * t)), 1 > t ? f = r(y) : (v.unbind(m, $), f = null, d.resolve())
            };
            return v.duScrollTo(u, l), v.bind(m, $), f = r(y), d.promise
        }, s.duScrollToElement = function(e, t, n, r) {
            var i = c(this);
            (!angular.isNumber(t) || isNaN(t)) && (t = a);
            var o = this.duScrollTop() + c(e).getBoundingClientRect().top - t;
            return l(i) && (o -= i.getBoundingClientRect().top), this.duScrollTo(0, o, n, r)
        }, s.duScrollLeft = function(t, n, r) {
            if (angular.isNumber(t)) return this.duScrollTo(t, this.duScrollTop(), n, r);
            var i = c(this);
            return u(i) ? e.scrollX || document.documentElement.scrollLeft || document.body.scrollLeft : i.scrollLeft
        }, s.duScrollTop = function(t, n, r) {
            if (angular.isNumber(t)) return this.duScrollTo(this.duScrollLeft(), t, n, r);
            var i = c(this);
            return u(i) ? e.scrollY || document.documentElement.scrollTop || document.body.scrollTop : i.scrollTop
        }, s.duScrollToElementAnimated = function(e, t, n, r) {
            return this.duScrollToElement(e, t, n || o, r)
        }, s.duScrollTopAnimated = function(e, t, n) {
            return this.duScrollTop(e, t || o, n)
        }, s.duScrollLeftAnimated = function(e, t, n) {
            return this.duScrollLeft(e, t || o, n)
        }, angular.forEach(s, function(e, t) {
            angular.element.prototype[t] = e;
            var n = t.replace(/^duScroll/, "scroll");
            angular.isUndefined(angular.element.prototype[n]) && (angular.element.prototype[n] = e)
        })
    }]), angular.module("duScroll.polyfill", []).factory("polyfill", ["$window", function(e) {
        "use strict";
        var t = ["webkit", "moz", "o", "ms"];
        return function(n, r) {
            if (e[n]) return e[n];
            for (var i, o = n.substr(0, 1).toUpperCase() + n.substr(1), a = 0; a < t.length; a++)
                if (i = t[a] + o, e[i]) return e[i];
            return r
        }
    }]), angular.module("duScroll.requestAnimation", ["duScroll.polyfill"]).factory("requestAnimation", ["polyfill", "$timeout", function(e, t) {
        "use strict";
        var n = 0,
            r = function(e) {
                var r = (new Date).getTime(),
                    i = Math.max(0, 16 - (r - n)),
                    o = t(function() {
                        e(r + i)
                    }, i);
                return n = r + i, o
            };
        return e("requestAnimationFrame", r)
    }]).factory("cancelAnimation", ["polyfill", "$timeout", function(e, t) {
        "use strict";
        var n = function(e) {
            t.cancel(e)
        };
        return e("cancelAnimationFrame", n)
    }]), angular.module("duScroll.spyAPI", ["duScroll.scrollContainerAPI"]).factory("spyAPI", ["$rootScope", "$timeout", "$window", "$document", "scrollContainerAPI", "duScrollGreedy", "duScrollSpyWait", function(e, t, n, r, i, o, a) {
        "use strict";
        var s = function(i) {
                var s = !1,
                    u = !1,
                    l = function() {
                        u = !1;
                        var t, a = i.container,
                            s = a[0],
                            l = 0;
                        "undefined" != typeof HTMLElement && s instanceof HTMLElement || s.nodeType && s.nodeType === s.ELEMENT_NODE ? (l = s.getBoundingClientRect().top, t = Math.round(s.scrollTop + s.clientHeight) >= s.scrollHeight) : t = Math.round(n.pageYOffset + n.innerHeight) >= r[0].body.scrollHeight;
                        var c, f, d, p, h, g, v = t ? "bottom" : "top";
                        for (p = i.spies, f = i.currentlyActive, d = void 0, c = 0; c < p.length; c++) h = p[c], g = h.getTargetPosition(), g && (t || g.top + h.offset - l < 20 && (o || -1 * g.top + l) < g.height) && (!d || d[v] < g[v]) && (d = {
                            spy: h
                        }, d[v] = g[v]);
                        d && (d = d.spy), f === d || o && !d || (f && (f.$element.removeClass("active"), e.$broadcast("duScrollspy:becameInactive", f.$element)), d && (d.$element.addClass("active"), e.$broadcast("duScrollspy:becameActive", d.$element)), i.currentlyActive = d)
                    };
                return a ? function() {
                    s ? u = !0 : (l(), s = t(function() {
                        s = !1, u && l()
                    }, a, !1))
                } : l
            },
            u = {},
            l = function(e) {
                var t = e.$id,
                    n = {
                        spies: []
                    };
                return n.handler = s(n), u[t] = n, e.$on("$destroy", function() {
                    c(e)
                }), t
            },
            c = function(e) {
                var t = e.$id,
                    n = u[t],
                    r = n.container;
                r && r.off("scroll", n.handler), delete u[t]
            },
            f = l(e),
            d = function(e) {
                return u[e.$id] ? u[e.$id] : e.$parent ? d(e.$parent) : u[f]
            },
            p = function(e) {
                var t, n, r = e.$scope;
                if (r) return d(r);
                for (n in u)
                    if (t = u[n], -1 !== t.spies.indexOf(e)) return t
            },
            h = function(e) {
                for (; e.parentNode;)
                    if (e = e.parentNode, e === document) return !0;
                return !1
            },
            g = function(e) {
                var t = p(e);
                t && (t.spies.push(e), t.container && h(t.container) || (t.container && t.container.off("scroll", t.handler), t.container = i.getContainer(e.$scope), t.container.on("scroll", t.handler).triggerHandler("scroll")))
            },
            v = function(e) {
                var t = p(e);
                e === t.currentlyActive && (t.currentlyActive = null);
                var n = t.spies.indexOf(e); - 1 !== n && t.spies.splice(n, 1), e.$element = null
            };
        return {
            addSpy: g,
            removeSpy: v,
            createContext: l,
            destroyContext: c,
            getContextForScope: d
        }
    }]), angular.module("duScroll.scrollContainerAPI", []).factory("scrollContainerAPI", ["$document", function(e) {
        "use strict";
        var t = {},
            n = function(e, n) {
                var r = e.$id;
                return t[r] = n, r
            },
            r = function(e) {
                return t[e.$id] ? e.$id : e.$parent ? r(e.$parent) : void 0
            },
            i = function(n) {
                var i = r(n);
                return i ? t[i] : e
            },
            o = function(e) {
                var n = r(e);
                n && delete t[n]
            };
        return {
            getContainerId: r,
            getContainer: i,
            setContainer: n,
            removeContainer: o
        }
    }]), angular.module("duScroll.smoothScroll", ["duScroll.scrollHelpers", "duScroll.scrollContainerAPI"]).directive("duSmoothScroll", ["duScrollDuration", "duScrollOffset", "scrollContainerAPI", function(e, t, n) {
        "use strict";
        return {
            link: function(r, i, o) {
                i.on("click", function(i) {
                    if (o.href && -1 !== o.href.indexOf("#")) {
                        var a = document.getElementById(o.href.replace(/.*(?=#[^\s]+$)/, "").substring(1));
                        if (a && a.getBoundingClientRect) {
                            i.stopPropagation && i.stopPropagation(), i.preventDefault && i.preventDefault();
                            var s = o.offset ? parseInt(o.offset, 10) : t,
                                u = o.duration ? parseInt(o.duration, 10) : e,
                                l = n.getContainer(r);
                            l.duScrollToElement(angular.element(a), isNaN(s) ? 0 : s, isNaN(u) ? 0 : u)
                        }
                    }
                })
            }
        }
    }]), angular.module("duScroll.spyContext", ["duScroll.spyAPI"]).directive("duSpyContext", ["spyAPI", function(e) {
        "use strict";
        return {
            restrict: "A",
            scope: !0,
            compile: function() {
                return {
                    pre: function(t) {
                        e.createContext(t)
                    }
                }
            }
        }
    }]), angular.module("duScroll.scrollContainer", ["duScroll.scrollContainerAPI"]).directive("duScrollContainer", ["scrollContainerAPI", function(e) {
        "use strict";
        return {
            restrict: "A",
            scope: !0,
            compile: function() {
                return {
                    pre: function(t, n, r) {
                        r.$observe("duScrollContainer", function(r) {
                            angular.isString(r) && (r = document.getElementById(r)), r = angular.isElement(r) ? angular.element(r) : n, e.setContainer(t, r), t.$on("$destroy", function() {
                                e.removeContainer(t)
                            })
                        })
                    }
                }
            }
        }
    }]), angular.module("duScroll.scrollspy", ["duScroll.spyAPI"]).directive("duScrollspy", ["spyAPI", "duScrollOffset", "$timeout", "$rootScope", function(e, t, n, r) {
        "use strict";
        var i = function(e, t, n, r) {
            angular.isElement(e) ? this.target = e : angular.isString(e) && (this.targetId = e), this.$scope = t, this.$element = n, this.offset = r
        };
        return i.prototype.getTargetElement = function() {
            return !this.target && this.targetId && (this.target = document.getElementById(this.targetId)), this.target
        }, i.prototype.getTargetPosition = function() {
            var e = this.getTargetElement();
            return e ? e.getBoundingClientRect() : void 0
        }, i.prototype.flushTargetCache = function() {
            this.targetId && (this.target = void 0)
        }, {
            link: function(o, a, s) {
                var u, l = s.ngHref || s.href;
                l && -1 !== l.indexOf("#") ? u = l.replace(/.*(?=#[^\s]+$)/, "").substring(1) : s.duScrollspy && (u = s.duScrollspy), u && n(function() {
                    var n = new i(u, o, a, -(s.offset ? parseInt(s.offset, 10) : t));
                    e.addSpy(n), o.$on("$destroy", function() {
                        e.removeSpy(n)
                    }), o.$on("$locationChangeSuccess", n.flushTargetCache.bind(n)), r.$on("$stateChangeSuccess", n.flushTargetCache.bind(n))
                }, 0, !1)
            }
        }
    }]),
    function() {
        var e;
        e = {
            handler: "&customHandler"
        }, angular.module("socialLinks", []).factory("socialLinker", ["$window", "$location", function(e, t) {
            return function(n) {
                return function(r, i, o) {
                    var a, s, u;
                    return u = "status=no, width=" + (r.socialWidth || 640) + ", height=" + (r.socialWidth || 480) + ", resizable=yes, toolbar=no, menubar=no, scrollbars=no, location=no, directories=no", a = function() {
                        return o.customUrl || t.absUrl()
                    }, o.$observe("customUrl", function() {
                        var e;
                        return e = n(r, a()), "A" !== i[0].nodeName || null != o.href && "" !== o.href ? void 0 : i.attr("href", e)
                    }), i.attr("rel", "nofollow"), s = function(t) {
                        var i, o;
                        return t.preventDefault(), i = n(r, a()), o = e.open(i, "popupwindow", u).focus()
                    }, null != o.customHandler ? i.on("click", s = function(e) {
                        var t;
                        return t = n(r, a()), i.attr("href", t), r.handler({
                            $event: e,
                            $url: t
                        })
                    }) : i.on("click", s), r.$on("$destroy", function() {
                        return i.off("click", s)
                    })
                }
            }
        }]).directive("socialFacebook", ["socialLinker", function(t) {
            return {
                restrict: "ACEM",
                scope: e,
                link: t(function(e, t) {
                    var n;
                    return n = ["https://facebook.com/sharer.php?"], n.push("u=" + encodeURIComponent(t)), n.join("")
                })
            }
        }]).directive("socialTwitter", ["socialLinker", function(t) {
            return {
                restrict: "ACEM",
                scope: angular.extend({
                    status: "@status"
                }, e),
                link: t(function(e, t) {
                    return e.status || (e.status = "Check this out! - " + t), "https://twitter.com/intent/tweet?text=" + encodeURIComponent(e.status)
                })
            }
        }]).directive("socialGplus", ["socialLinker", function(t) {
            return {
                restrict: "ACEM",
                scope: e,
                link: t(function(e, t) {
                    return "https://plus.google.com/share?url=" + encodeURIComponent(t)
                })
            }
        }]).directive("socialPinterest", ["socialLinker", function(t) {
            return {
                restrict: "ACEM",
                scope: angular.extend({
                    media: "@media",
                    description: "@description"
                }, e),
                link: t(function(e, t) {
                    return "http://pinterest.com/pin/create/button/?url=" + encodeURIComponent(t) + "&amp;media=" + encodeURIComponent(e.media) + "&amp;description=" + encodeURIComponent(e.description)
                })
            }
        }]).directive("socialStumbleupon", ["socialLinker", function(t) {
            return {
                restrict: "ACEM",
                scope: e,
                link: t(function(e, t) {
                    return "https://stumbleupon.com/submit?url=" + encodeURIComponent(t)
                })
            }
        }]).directive("socialLinkedin", ["socialLinker", function(t) {
            return {
                restrict: "ACEM",
                scope: e,
                link: t(function(e, t) {
                    return "https://linkedin.com/shareArticle?url=" + encodeURIComponent(t)
                })
            }
        }]).directive("socialReddit", ["socialLinker", function(t) {
            return {
                restrict: "ACEM",
                scope: e,
                link: t(function(e, t) {
                    return "https://www.reddit.com/submit?url=" + encodeURIComponent(t)
                })
            }
        }]).directive("socialVk", ["socialLinker", function(t) {
            return {
                restrict: "ACEM",
                scope: e,
                link: t(function(e, t) {
                    return "http://vkontakte.ru/share.php?url=" + encodeURIComponent(t)
                })
            }
        }]).directive("socialOk", ["socialLinker", function(t) {
            return {
                restrict: "ACEM",
                scope: e,
                link: t(function(e, t) {
                    return "http://www.odnoklassniki.ru/dk?st.cmd=addShare&st._surl=" + encodeURIComponent(t)
                })
            }
        }]).directive("socialXing", ["socialLinker", function(t) {
            return {
                restrict: "ACEM",
                scope: e,
                link: t(function(e, t) {
                    return "https://www.xing.com/spi/shares/new?url=" + encodeURIComponent(t)
                })
            }
        }])
    }.call(this),
    /**
     * @license AngularJS v1.3.17
     * (c) 2010-2014 Google, Inc. http://angularjs.org
     * License: MIT
     */
    function(e, t) {
        "use strict";

        function n(e) {
            return t.lowercase(e.nodeName || e[0] && e[0].nodeName)
        }

        function r(e, n, r) {
            i.directive(e, ["$parse", "$swipe", function(i, o) {
                var a = 75,
                    s = .3,
                    u = 30;
                return function(l, c, f) {
                    function d(e) {
                        if (!p) return !1;
                        var t = Math.abs(e.y - p.y),
                            r = (e.x - p.x) * n;
                        return h && a > t && r > 0 && r > u && s > t / r
                    }
                    var p, h, g = i(f[e]),
                        v = ["touch"];
                    t.isDefined(f.ngSwipeDisableMouse) || v.push("mouse"), o.bind(c, {
                        start: function(e) {
                            p = e, h = !0
                        },
                        cancel: function() {
                            h = !1
                        },
                        end: function(e, t) {
                            d(e) && l.$apply(function() {
                                c.triggerHandler(r), g(l, {
                                    $event: t
                                })
                            })
                        }
                    }, v)
                }
            }])
        }
        var i = t.module("ngTouch", []);
        i.factory("$swipe", [function() {
            function e(e) {
                var t = e.originalEvent || e,
                    n = t.touches && t.touches.length ? t.touches : [t],
                    r = t.changedTouches && t.changedTouches[0] || n[0];
                return {
                    x: r.clientX,
                    y: r.clientY
                }
            }

            function n(e, n) {
                var r = [];
                return t.forEach(e, function(e) {
                    var t = i[e][n];
                    t && r.push(t)
                }), r.join(" ")
            }
            var r = 10,
                i = {
                    mouse: {
                        start: "mousedown",
                        move: "mousemove",
                        end: "mouseup"
                    },
                    touch: {
                        start: "touchstart",
                        move: "touchmove",
                        end: "touchend",
                        cancel: "touchcancel"
                    }
                };
            return {
                bind: function(t, i, o) {
                    var a, s, u, l, c = !1;
                    o = o || ["mouse", "touch"], t.on(n(o, "start"), function(t) {
                        u = e(t), c = !0, a = 0, s = 0, l = u, i.start && i.start(u, t)
                    });
                    var f = n(o, "cancel");
                    f && t.on(f, function(e) {
                        c = !1, i.cancel && i.cancel(e)
                    }), t.on(n(o, "move"), function(t) {
                        if (c && u) {
                            var n = e(t);
                            if (a += Math.abs(n.x - l.x), s += Math.abs(n.y - l.y), l = n, !(r > a && r > s)) return s > a ? (c = !1, void(i.cancel && i.cancel(t))) : (t.preventDefault(), void(i.move && i.move(n, t)))
                        }
                    }), t.on(n(o, "end"), function(t) {
                        c && (c = !1, i.end && i.end(e(t), t))
                    })
                }
            }
        }]), i.config(["$provide", function(e) {
            e.decorator("ngClickDirective", ["$delegate", function(e) {
                return e.shift(), e
            }])
        }]), i.directive("ngClick", ["$parse", "$timeout", "$rootElement", function(e, r, i) {
            function o(e, t, n, r) {
                return Math.abs(e - n) < v && Math.abs(t - r) < v
            }

            function a(e, t, n) {
                for (var r = 0; r < e.length; r += 2)
                    if (o(e[r], e[r + 1], t, n)) return e.splice(r, r + 2), !0;
                return !1
            }

            function s(e) {
                if (!(Date.now() - c > g)) {
                    var t = e.touches && e.touches.length ? e.touches : [e],
                        r = t[0].clientX,
                        i = t[0].clientY;
                    1 > r && 1 > i || d && d[0] === r && d[1] === i || (d && (d = null), "label" === n(e.target) && (d = [r, i]), a(f, r, i) || (e.stopPropagation(), e.preventDefault(), e.target && e.target.blur && e.target.blur()))
                }
            }

            function u(e) {
                var t = e.touches && e.touches.length ? e.touches : [e],
                    n = t[0].clientX,
                    i = t[0].clientY;
                f.push(n, i), r(function() {
                    for (var e = 0; e < f.length; e += 2)
                        if (f[e] == n && f[e + 1] == i) return void f.splice(e, e + 2)
                }, g, !1)
            }

            function l(e, t) {
                f || (i[0].addEventListener("click", s, !0), i[0].addEventListener("touchstart", u, !0), f = []), c = Date.now(), a(f, e, t)
            }
            var c, f, d, p = 750,
                h = 12,
                g = 2500,
                v = 25,
                m = "ng-click-active";
            return function(n, r, i) {
                function o() {
                    d = !1, r.removeClass(m)
                }
                var a, s, u, c, f = e(i.ngClick),
                    d = !1;
                r.on("touchstart", function(e) {
                    d = !0, a = e.target ? e.target : e.srcElement, 3 == a.nodeType && (a = a.parentNode), r.addClass(m), s = Date.now();
                    var t = e.originalEvent || e,
                        n = t.touches && t.touches.length ? t.touches : [t],
                        i = n[0];
                    u = i.clientX, c = i.clientY
                }), r.on("touchmove", function() {
                    o()
                }), r.on("touchcancel", function() {
                    o()
                }), r.on("touchend", function(e) {
                    var n = Date.now() - s,
                        f = e.originalEvent || e,
                        g = f.changedTouches && f.changedTouches.length ? f.changedTouches : f.touches && f.touches.length ? f.touches : [f],
                        v = g[0],
                        m = v.clientX,
                        $ = v.clientY,
                        y = Math.sqrt(Math.pow(m - u, 2) + Math.pow($ - c, 2));
                    d && p > n && h > y && (l(m, $), a && a.blur(), t.isDefined(i.disabled) && i.disabled !== !1 || r.triggerHandler("click", [e])), o()
                }), r.onclick = function() {}, r.on("click", function(e, t) {
                    n.$apply(function() {
                        f(n, {
                            $event: t || e
                        })
                    })
                }), r.on("mousedown", function() {
                    r.addClass(m)
                }), r.on("mousemove mouseup", function() {
                    r.removeClass(m)
                })
            }
        }]), r("ngSwipeLeft", -1, "swipeleft"), r("ngSwipeRight", 1, "swiperight")
    }(window, window.angular),
    /**
     * State-based routing for AngularJS
     * @version v0.2.15
     * @link http://angular-ui.github.com/
     * @license MIT License, http://www.opensource.org/licenses/MIT
     */
    "undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router"),
    function(e, t, n) {
        "use strict";

        function r(e, t) {
            return q(new(q(function() {}, {
                prototype: e
            })), t)
        }

        function i(e) {
            return M(arguments, function(t) {
                t !== e && M(t, function(t, n) {
                    e.hasOwnProperty(n) || (e[n] = t)
                })
            }), e
        }

        function o(e, t) {
            var n = [];
            for (var r in e.path) {
                if (e.path[r] !== t.path[r]) break;
                n.push(e.path[r])
            }
            return n
        }

        function a(e) {
            if (Object.keys) return Object.keys(e);
            var t = [];
            return M(e, function(e, n) {
                t.push(n)
            }), t
        }

        function s(e, t) {
            if (Array.prototype.indexOf) return e.indexOf(t, Number(arguments[2]) || 0);
            var n = e.length >>> 0,
                r = Number(arguments[2]) || 0;
            for (r = 0 > r ? Math.ceil(r) : Math.floor(r), 0 > r && (r += n); n > r; r++)
                if (r in e && e[r] === t) return r;
            return -1
        }

        function u(e, t, n, r) {
            var i, u = o(n, r),
                l = {},
                c = [];
            for (var f in u)
                if (u[f].params && (i = a(u[f].params), i.length))
                    for (var d in i) s(c, i[d]) >= 0 || (c.push(i[d]), l[i[d]] = e[i[d]]);
            return q({}, l, t)
        }

        function l(e, t, n) {
            if (!n) {
                n = [];
                for (var r in e) n.push(r)
            }
            for (var i = 0; i < n.length; i++) {
                var o = n[i];
                if (e[o] != t[o]) return !1
            }
            return !0
        }

        function c(e, t) {
            var n = {};
            return M(e, function(e) {
                n[e] = t[e]
            }), n
        }

        function f(e) {
            var t = {},
                n = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
            return M(n, function(n) {
                n in e && (t[n] = e[n])
            }), t
        }

        function d(e) {
            var t = {},
                n = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
            for (var r in e) - 1 == s(n, r) && (t[r] = e[r]);
            return t
        }

        function p(e, t) {
            var n = L(e),
                r = n ? [] : {};
            return M(e, function(e, i) {
                t(e, i) && (r[n ? r.length : i] = e)
            }), r
        }

        function h(e, t) {
            var n = L(e) ? [] : {};
            return M(e, function(e, r) {
                n[r] = t(e, r)
            }), n
        }

        function g(e, t) {
            var r = 1,
                o = 2,
                u = {},
                l = [],
                c = u,
                f = q(e.when(u), {
                    $$promises: u,
                    $$values: u
                });
            this.study = function(u) {
                function p(e, n) {
                    if ($[n] !== o) {
                        if (m.push(n), $[n] === r) throw m.splice(0, s(m, n)), new Error("Cyclic dependency: " + m.join(" -> "));
                        if ($[n] = r, N(e)) v.push(n, [function() {
                            return t.get(e)
                        }], l);
                        else {
                            var i = t.annotate(e);
                            M(i, function(e) {
                                e !== n && u.hasOwnProperty(e) && p(u[e], e)
                            }), v.push(n, e, i)
                        }
                        m.pop(), $[n] = o
                    }
                }

                function h(e) {
                    return I(e) && e.then && e.$$promises
                }
                if (!I(u)) throw new Error("'invocables' must be an object");
                var g = a(u || {}),
                    v = [],
                    m = [],
                    $ = {};
                return M(u, p), u = m = $ = null,
                    function(r, o, a) {
                        function s() {
                            --w || (b || i(y, o.$$values), m.$$values = y, m.$$promises = m.$$promises || !0, delete m.$$inheritedValues, p.resolve(y))
                        }

                        function u(e) {
                            m.$$failure = e, p.reject(e)
                        }

                        function l(n, i, o) {
                            function l(e) {
                                f.reject(e), u(e)
                            }

                            function c() {
                                if (!_(m.$$failure)) try {
                                    f.resolve(t.invoke(i, a, y)), f.promise.then(function(e) {
                                        y[n] = e, s()
                                    }, l)
                                } catch (e) {
                                    l(e)
                                }
                            }
                            var f = e.defer(),
                                d = 0;
                            M(o, function(e) {
                                $.hasOwnProperty(e) && !r.hasOwnProperty(e) && (d++, $[e].then(function(t) {
                                    y[e] = t, --d || c()
                                }, l))
                            }), d || c(), $[n] = f.promise
                        }
                        if (h(r) && a === n && (a = o, o = r, r = null), r) {
                            if (!I(r)) throw new Error("'locals' must be an object")
                        } else r = c;
                        if (o) {
                            if (!h(o)) throw new Error("'parent' must be a promise returned by $resolve.resolve()")
                        } else o = f;
                        var p = e.defer(),
                            m = p.promise,
                            $ = m.$$promises = {},
                            y = q({}, r),
                            w = 1 + v.length / 3,
                            b = !1;
                        if (_(o.$$failure)) return u(o.$$failure), m;
                        o.$$inheritedValues && i(y, d(o.$$inheritedValues, g)), q($, o.$$promises), o.$$values ? (b = i(y, d(o.$$values, g)), m.$$inheritedValues = d(o.$$values, g), s()) : (o.$$inheritedValues && (m.$$inheritedValues = d(o.$$inheritedValues, g)), o.then(s, u));
                        for (var x = 0, C = v.length; C > x; x += 3) r.hasOwnProperty(v[x]) ? s() : l(v[x], v[x + 1], v[x + 2]);
                        return m
                    }
            }, this.resolve = function(e, t, n, r) {
                return this.study(e)(t, n, r)
            }
        }

        function v(e, t, n) {
            this.fromConfig = function(e, t, n) {
                return _(e.template) ? this.fromString(e.template, t) : _(e.templateUrl) ? this.fromUrl(e.templateUrl, t) : _(e.templateProvider) ? this.fromProvider(e.templateProvider, t, n) : null
            }, this.fromString = function(e, t) {
                return F(e) ? e(t) : e
            }, this.fromUrl = function(n, r) {
                return F(n) && (n = n(r)), null == n ? null : e.get(n, {
                    cache: t,
                    headers: {
                        Accept: "text/html"
                    }
                }).then(function(e) {
                    return e.data
                })
            }, this.fromProvider = function(e, t, r) {
                return n.invoke(e, null, r || {
                    params: t
                })
            }
        }

        function m(e, t, i) {
            function o(t, n, r, i) {
                if (v.push(t), h[t]) return h[t];
                if (!/^\w+(-+\w+)*(?:\[\])?$/.test(t)) throw new Error("Invalid parameter name '" + t + "' in pattern '" + e + "'");
                if (g[t]) throw new Error("Duplicate parameter name '" + t + "' in pattern '" + e + "'");
                return g[t] = new H.Param(t, n, r, i), g[t]
            }

            function a(e, t, n, r) {
                var i = ["", ""],
                    o = e.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
                if (!t) return o;
                switch (n) {
                    case !1:
                        i = ["(", ")" + (r ? "?" : "")];
                        break;
                    case !0:
                        i = ["?(", ")?"];
                        break;
                    default:
                        i = ["(" + n + "|", ")?"]
                }
                return o + i[0] + t + i[1]
            }

            function s(i, o) {
                var a, s, u, l, c;
                return a = i[2] || i[3], c = t.params[a], u = e.substring(d, i.index), s = o ? i[4] : i[4] || ("*" == i[1] ? ".*" : null), l = H.type(s || "string") || r(H.type("string"), {
                    pattern: new RegExp(s, t.caseInsensitive ? "i" : n)
                }), {
                    id: a,
                    regexp: s,
                    segment: u,
                    type: l,
                    cfg: c
                }
            }
            t = q({
                params: {}
            }, I(t) ? t : {});
            var u, l = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
                c = /([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
                f = "^",
                d = 0,
                p = this.segments = [],
                h = i ? i.params : {},
                g = this.params = i ? i.params.$$new() : new H.ParamSet,
                v = [];
            this.source = e;
            for (var m, $, y;
                (u = l.exec(e)) && (m = s(u, !1), !(m.segment.indexOf("?") >= 0));) $ = o(m.id, m.type, m.cfg, "path"), f += a(m.segment, $.type.pattern.source, $.squash, $.isOptional), p.push(m.segment), d = l.lastIndex;
            y = e.substring(d);
            var w = y.indexOf("?");
            if (w >= 0) {
                var b = this.sourceSearch = y.substring(w);
                if (y = y.substring(0, w), this.sourcePath = e.substring(0, d + w), b.length > 0)
                    for (d = 0; u = c.exec(b);) m = s(u, !0), $ = o(m.id, m.type, m.cfg, "search"), d = l.lastIndex
            } else this.sourcePath = e, this.sourceSearch = "";
            f += a(y) + (t.strict === !1 ? "/?" : "") + "$", p.push(y), this.regexp = new RegExp(f, t.caseInsensitive ? "i" : n), this.prefix = p[0], this.$$paramNames = v
        }

        function $(e) {
            q(this, e)
        }

        function y() {
            function e(e) {
                return null != e ? e.toString().replace(/\//g, "%2F") : e
            }

            function i(e) {
                return null != e ? e.toString().replace(/%2F/g, "/") : e
            }

            function o() {
                return {
                    strict: g,
                    caseInsensitive: d
                }
            }

            function u(e) {
                return F(e) || L(e) && F(e[e.length - 1])
            }

            function l() {
                for (; x.length;) {
                    var e = x.shift();
                    if (e.pattern) throw new Error("You cannot override a type's .pattern at runtime.");
                    t.extend(w[e.name], f.invoke(e.def))
                }
            }

            function c(e) {
                q(this, e || {})
            }
            H = this;
            var f, d = !1,
                g = !0,
                v = !1,
                w = {},
                b = !0,
                x = [],
                C = {
                    string: {
                        encode: e,
                        decode: i,
                        is: function(e) {
                            return null == e || !_(e) || "string" == typeof e
                        },
                        pattern: /[^/]*/
                    },
                    "int": {
                        encode: e,
                        decode: function(e) {
                            return parseInt(e, 10)
                        },
                        is: function(e) {
                            return _(e) && this.decode(e.toString()) === e
                        },
                        pattern: /\d+/
                    },
                    bool: {
                        encode: function(e) {
                            return e ? 1 : 0
                        },
                        decode: function(e) {
                            return 0 !== parseInt(e, 10)
                        },
                        is: function(e) {
                            return e === !0 || e === !1
                        },
                        pattern: /0|1/
                    },
                    date: {
                        encode: function(e) {
                            return this.is(e) ? [e.getFullYear(), ("0" + (e.getMonth() + 1)).slice(-2), ("0" + e.getDate()).slice(-2)].join("-") : n
                        },
                        decode: function(e) {
                            if (this.is(e)) return e;
                            var t = this.capture.exec(e);
                            return t ? new Date(t[1], t[2] - 1, t[3]) : n
                        },
                        is: function(e) {
                            return e instanceof Date && !isNaN(e.valueOf())
                        },
                        equals: function(e, t) {
                            return this.is(e) && this.is(t) && e.toISOString() === t.toISOString()
                        },
                        pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
                        capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
                    },
                    json: {
                        encode: t.toJson,
                        decode: t.fromJson,
                        is: t.isObject,
                        equals: t.equals,
                        pattern: /[^/]*/
                    },
                    any: {
                        encode: t.identity,
                        decode: t.identity,
                        equals: t.equals,
                        pattern: /.*/
                    }
                };
            y.$$getDefaultValue = function(e) {
                if (!u(e.value)) return e.value;
                if (!f) throw new Error("Injectable functions cannot be called at configuration time");
                return f.invoke(e.value)
            }, this.caseInsensitive = function(e) {
                return _(e) && (d = e), d
            }, this.strictMode = function(e) {
                return _(e) && (g = e), g
            }, this.defaultSquashPolicy = function(e) {
                if (!_(e)) return v;
                if (e !== !0 && e !== !1 && !N(e)) throw new Error("Invalid squash policy: " + e + ". Valid policies: false, true, arbitrary-string");
                return v = e, e
            }, this.compile = function(e, t) {
                return new m(e, q(o(), t))
            }, this.isMatcher = function(e) {
                if (!I(e)) return !1;
                var t = !0;
                return M(m.prototype, function(n, r) {
                    F(n) && (t = t && _(e[r]) && F(e[r]))
                }), t
            }, this.type = function(e, t, n) {
                if (!_(t)) return w[e];
                if (w.hasOwnProperty(e)) throw new Error("A type named '" + e + "' has already been defined.");
                return w[e] = new $(q({
                    name: e
                }, t)), n && (x.push({
                    name: e,
                    def: n
                }), b || l()), this
            }, M(C, function(e, t) {
                w[t] = new $(q({
                    name: t
                }, e))
            }), w = r(w, {}), this.$get = ["$injector", function(e) {
                return f = e, b = !1, l(), M(C, function(e, t) {
                    w[t] || (w[t] = new $(e))
                }), this
            }], this.Param = function(e, t, r, i) {
                function o(e) {
                    var t = I(e) ? a(e) : [],
                        n = -1 === s(t, "value") && -1 === s(t, "type") && -1 === s(t, "squash") && -1 === s(t, "array");
                    return n && (e = {
                        value: e
                    }), e.$$fn = u(e.value) ? e.value : function() {
                        return e.value
                    }, e
                }

                function l(t, n, r) {
                    if (t.type && n) throw new Error("Param '" + e + "' has two type configurations.");
                    return n ? n : t.type ? t.type instanceof $ ? t.type : new $(t.type) : "config" === r ? w.any : w.string
                }

                function c() {
                    var t = {
                            array: "search" === i ? "auto" : !1
                        },
                        n = e.match(/\[\]$/) ? {
                            array: !0
                        } : {};
                    return q(t, n, r).array
                }

                function d(e, t) {
                    var n = e.squash;
                    if (!t || n === !1) return !1;
                    if (!_(n) || null == n) return v;
                    if (n === !0 || N(n)) return n;
                    throw new Error("Invalid squash policy: '" + n + "'. Valid policies: false, true, or arbitrary string")
                }

                function g(e, t, r, i) {
                    var o, a, u = [{
                        from: "",
                        to: r || t ? n : ""
                    }, {
                        from: null,
                        to: r || t ? n : ""
                    }];
                    return o = L(e.replace) ? e.replace : [], N(i) && o.push({
                        from: i,
                        to: n
                    }), a = h(o, function(e) {
                        return e.from
                    }), p(u, function(e) {
                        return -1 === s(a, e.from)
                    }).concat(o)
                }

                function m() {
                    if (!f) throw new Error("Injectable functions cannot be called at configuration time");
                    var e = f.invoke(r.$$fn);
                    if (null !== e && e !== n && !x.type.is(e)) throw new Error("Default value (" + e + ") for parameter '" + x.id + "' is not an instance of Type (" + x.type.name + ")");
                    return e
                }

                function y(e) {
                    function t(e) {
                        return function(t) {
                            return t.from === e
                        }
                    }

                    function n(e) {
                        var n = h(p(x.replace, t(e)), function(e) {
                            return e.to
                        });
                        return n.length ? n[0] : e
                    }
                    return e = n(e), _(e) ? x.type.$normalize(e) : m()
                }

                function b() {
                    return "{Param:" + e + " " + t + " squash: '" + S + "' optional: " + k + "}"
                }
                var x = this;
                r = o(r), t = l(r, t, i);
                var C = c();
                t = C ? t.$asArray(C, "search" === i) : t, "string" !== t.name || C || "path" !== i || r.value !== n || (r.value = "");
                var k = r.value !== n,
                    S = d(r, k),
                    T = g(r, C, k, S);
                q(this, {
                    id: e,
                    type: t,
                    location: i,
                    array: C,
                    squash: S,
                    replace: T,
                    isOptional: k,
                    value: y,
                    dynamic: n,
                    config: r,
                    toString: b
                })
            }, c.prototype = {
                $$new: function() {
                    return r(this, q(new c, {
                        $$parent: this
                    }))
                },
                $$keys: function() {
                    for (var e = [], t = [], n = this, r = a(c.prototype); n;) t.push(n), n = n.$$parent;
                    return t.reverse(), M(t, function(t) {
                        M(a(t), function(t) {
                            -1 === s(e, t) && -1 === s(r, t) && e.push(t)
                        })
                    }), e
                },
                $$values: function(e) {
                    var t = {},
                        n = this;
                    return M(n.$$keys(), function(r) {
                        t[r] = n[r].value(e && e[r])
                    }), t
                },
                $$equals: function(e, t) {
                    var n = !0,
                        r = this;
                    return M(r.$$keys(), function(i) {
                        var o = e && e[i],
                            a = t && t[i];
                        r[i].type.equals(o, a) || (n = !1)
                    }), n
                },
                $$validates: function(e) {
                    var r, i, o, a, s, u = this.$$keys();
                    for (r = 0; r < u.length && (i = this[u[r]], o = e[u[r]], o !== n && null !== o || !i.isOptional); r++) {
                        if (a = i.type.$normalize(o), !i.type.is(a)) return !1;
                        if (s = i.type.encode(a), t.isString(s) && !i.type.pattern.exec(s)) return !1
                    }
                    return !0
                },
                $$parent: n
            }, this.ParamSet = c
        }

        function w(e, r) {
            function i(e) {
                var t = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(e.source);
                return null != t ? t[1].replace(/\\(.)/g, "$1") : ""
            }

            function o(e, t) {
                return e.replace(/\$(\$|\d{1,2})/, function(e, n) {
                    return t["$" === n ? 0 : Number(n)]
                })
            }

            function a(e, t, n) {
                if (!n) return !1;
                var r = e.invoke(t, t, {
                    $match: n
                });
                return _(r) ? r : !0
            }

            function s(r, i, o, a) {
                function s(e, t, n) {
                    return "/" === g ? e : t ? g.slice(0, -1) + e : n ? g.slice(1) + e : e
                }

                function d(e) {
                    function t(e) {
                        var t = e(o, r);
                        return t ? (N(t) && r.replace().url(t), !0) : !1
                    }
                    if (!e || !e.defaultPrevented) {
                        {
                            h && r.url() === h
                        }
                        h = n;
                        var i, a = l.length;
                        for (i = 0; a > i; i++)
                            if (t(l[i])) return;
                        c && t(c)
                    }
                }

                function p() {
                    return u = u || i.$on("$locationChangeSuccess", d)
                }
                var h, g = a.baseHref(),
                    v = r.url();
                return f || p(), {
                    sync: function() {
                        d()
                    },
                    listen: function() {
                        return p()
                    },
                    update: function(e) {
                        return e ? void(v = r.url()) : void(r.url() !== v && (r.url(v), r.replace()))
                    },
                    push: function(e, t, i) {
                        var o = e.format(t || {});
                        null !== o && t && t["#"] && (o += "#" + t["#"]), r.url(o), h = i && i.$$avoidResync ? r.url() : n, i && i.replace && r.replace()
                    },
                    href: function(n, i, o) {
                        if (!n.validates(i)) return null;
                        var a = e.html5Mode();
                        t.isObject(a) && (a = a.enabled);
                        var u = n.format(i);
                        if (o = o || {}, a || null === u || (u = "#" + e.hashPrefix() + u), null !== u && i && i["#"] && (u += "#" + i["#"]), u = s(u, a, o.absolute), !o.absolute || !u) return u;
                        var l = !a && u ? "/" : "",
                            c = r.port();
                        return c = 80 === c || 443 === c ? "" : ":" + c, [r.protocol(), "://", r.host(), c, l, u].join("")
                    }
                }
            }
            var u, l = [],
                c = null,
                f = !1;
            this.rule = function(e) {
                if (!F(e)) throw new Error("'rule' must be a function");
                return l.push(e), this
            }, this.otherwise = function(e) {
                if (N(e)) {
                    var t = e;
                    e = function() {
                        return t
                    }
                } else if (!F(e)) throw new Error("'rule' must be a function");
                return c = e, this
            }, this.when = function(e, t) {
                var n, s = N(t);
                if (N(e) && (e = r.compile(e)), !s && !F(t) && !L(t)) throw new Error("invalid 'handler' in when()");
                var u = {
                        matcher: function(e, t) {
                            return s && (n = r.compile(t), t = ["$match", function(e) {
                                return n.format(e)
                            }]), q(function(n, r) {
                                return a(n, t, e.exec(r.path(), r.search()))
                            }, {
                                prefix: N(e.prefix) ? e.prefix : ""
                            })
                        },
                        regex: function(e, t) {
                            if (e.global || e.sticky) throw new Error("when() RegExp must not be global or sticky");
                            return s && (n = t, t = ["$match", function(e) {
                                return o(n, e)
                            }]), q(function(n, r) {
                                return a(n, t, e.exec(r.path()))
                            }, {
                                prefix: i(e)
                            })
                        }
                    },
                    l = {
                        matcher: r.isMatcher(e),
                        regex: e instanceof RegExp
                    };
                for (var c in l)
                    if (l[c]) return this.rule(u[c](e, t));
                throw new Error("invalid 'what' in when()")
            }, this.deferIntercept = function(e) {
                e === n && (e = !0), f = e
            }, this.$get = s, s.$inject = ["$location", "$rootScope", "$injector", "$browser"]
        }

        function b(e, i) {
            function o(e) {
                return 0 === e.indexOf(".") || 0 === e.indexOf("^")
            }

            function d(e, t) {
                if (!e) return n;
                var r = N(e),
                    i = r ? e : e.name,
                    a = o(i);
                if (a) {
                    if (!t) throw new Error("No reference point given for path '" + i + "'");
                    t = d(t);
                    for (var s = i.split("."), u = 0, l = s.length, c = t; l > u; u++)
                        if ("" !== s[u] || 0 !== u) {
                            if ("^" !== s[u]) break;
                            if (!c.parent) throw new Error("Path '" + i + "' not valid for state '" + t.name + "'");
                            c = c.parent
                        } else c = t;
                    s = s.slice(u).join("."), i = c.name + (c.name && s ? "." : "") + s
                }
                var f = S[i];
                return !f || !r && (r || f !== e && f.self !== e) ? n : f
            }

            function p(e, t) {
                T[e] || (T[e] = []), T[e].push(t)
            }

            function g(e) {
                for (var t = T[e] || []; t.length;) v(t.shift())
            }

            function v(t) {
                t = r(t, {
                    self: t,
                    resolve: t.resolve || {},
                    toString: function() {
                        return this.name
                    }
                });
                var n = t.name;
                if (!N(n) || n.indexOf("@") >= 0) throw new Error("State must have a valid name");
                if (S.hasOwnProperty(n)) throw new Error("State '" + n + "'' is already defined");
                var i = -1 !== n.indexOf(".") ? n.substring(0, n.lastIndexOf(".")) : N(t.parent) ? t.parent : I(t.parent) && N(t.parent.name) ? t.parent.name : "";
                if (i && !S[i]) return p(i, t.self);
                for (var o in A) F(A[o]) && (t[o] = A[o](t, A.$delegates[o]));
                return S[n] = t, !t[E] && t.url && e.when(t.url, ["$match", "$stateParams", function(e, n) {
                    k.$current.navigable == t && l(e, n) || k.transitionTo(t, e, {
                        inherit: !0,
                        location: !1
                    })
                }]), g(n), t
            }

            function m(e) {
                return e.indexOf("*") > -1
            }

            function $(e) {
                for (var t = e.split("."), n = k.$current.name.split("."), r = 0, i = t.length; i > r; r++) "*" === t[r] && (n[r] = "*");
                return "**" === t[0] && (n = n.slice(s(n, t[1])), n.unshift("**")), "**" === t[t.length - 1] && (n.splice(s(n, t[t.length - 2]) + 1, Number.MAX_VALUE), n.push("**")), t.length != n.length ? !1 : n.join("") === t.join("")
            }

            function y(e, t) {
                return N(e) && !_(t) ? A[e] : F(t) && N(e) ? (A[e] && !A.$delegates[e] && (A.$delegates[e] = A[e]), A[e] = t, this) : this
            }

            function w(e, t) {
                return I(e) ? t = e : t.name = e, v(t), this
            }

            function b(e, i, o, s, f, p, g) {
                function v(t, n, r, o) {
                    var a = e.$broadcast("$stateNotFound", t, n, r);
                    if (a.defaultPrevented) return g.update(), T;
                    if (!a.retry) return null;
                    if (o.$retry) return g.update(), A;
                    var s = k.transition = i.when(a.retry);
                    return s.then(function() {
                        return s !== k.transition ? w : (t.options.$retry = !0, k.transitionTo(t.to, t.toParams, t.options))
                    }, function() {
                        return T
                    }), g.update(), s
                }

                function y(e, n, r, a, u, l) {
                    function d() {
                        var n = [];
                        return M(e.views, function(r, i) {
                            var a = r.resolve && r.resolve !== e.resolve ? r.resolve : {};
                            a.$template = [function() {
                                return o.load(i, {
                                    view: r,
                                    locals: u.globals,
                                    params: p,
                                    notify: l.notify
                                }) || ""
                            }], n.push(f.resolve(a, u.globals, u.resolve, e).then(function(n) {
                                if (F(r.controllerProvider) || L(r.controllerProvider)) {
                                    var o = t.extend({}, a, u.globals);
                                    n.$$controller = s.invoke(r.controllerProvider, null, o)
                                } else n.$$controller = r.controller;
                                n.$$state = e, n.$$controllerAs = r.controllerAs, u[i] = n
                            }))
                        }), i.all(n).then(function() {
                            return u.globals
                        })
                    }
                    var p = r ? n : c(e.params.$$keys(), n),
                        h = {
                            $stateParams: p
                        };
                    u.resolve = f.resolve(e.resolve, h, u.resolve, e);
                    var g = [u.resolve.then(function(e) {
                        u.globals = e
                    })];
                    return a && g.push(a), i.all(g).then(d).then(function() {
                        return u
                    })
                }
                var w = i.reject(new Error("transition superseded")),
                    b = i.reject(new Error("transition prevented")),
                    T = i.reject(new Error("transition aborted")),
                    A = i.reject(new Error("transition failed"));
                return C.locals = {
                    resolve: null,
                    globals: {
                        $stateParams: {}
                    }
                }, k = {
                    params: {},
                    current: C.self,
                    $current: C,
                    transition: null
                }, k.reload = function(e) {
                    return k.transitionTo(k.current, p, {
                        reload: e || !0,
                        inherit: !1,
                        notify: !0
                    })
                }, k.go = function(e, t, n) {
                    return k.transitionTo(e, t, q({
                        inherit: !0,
                        relative: k.$current
                    }, n))
                }, k.transitionTo = function(t, n, o) {
                    n = n || {}, o = q({
                        location: !0,
                        inherit: !1,
                        relative: null,
                        notify: !0,
                        reload: !1,
                        $retry: !1
                    }, o || {});
                    var a, l = k.$current,
                        f = k.params,
                        h = l.path,
                        m = d(t, o.relative),
                        $ = n["#"];
                    if (!_(m)) {
                        var S = {
                                to: t,
                                toParams: n,
                                options: o
                            },
                            T = v(S, l.self, f, o);
                        if (T) return T;
                        if (t = S.to, n = S.toParams, o = S.options, m = d(t, o.relative), !_(m)) {
                            if (!o.relative) throw new Error("No such state '" + t + "'");
                            throw new Error("Could not resolve '" + t + "' from state '" + o.relative + "'")
                        }
                    }
                    if (m[E]) throw new Error("Cannot transition to abstract state '" + t + "'");
                    if (o.inherit && (n = u(p, n || {}, k.$current, m)), !m.params.$$validates(n)) return A;
                    n = m.params.$$values(n), t = m;
                    var O = t.path,
                        P = 0,
                        D = O[P],
                        j = C.locals,
                        F = [];
                    if (o.reload) {
                        if (N(o.reload) || I(o.reload)) {
                            if (I(o.reload) && !o.reload.name) throw new Error("Invalid reload state object");
                            var L = o.reload === !0 ? h[0] : d(o.reload);
                            if (o.reload && !L) throw new Error("No such reload state '" + (N(o.reload) ? o.reload : o.reload.name) + "'");
                            for (; D && D === h[P] && D !== L;) j = F[P] = D.locals, P++, D = O[P]
                        }
                    } else
                        for (; D && D === h[P] && D.ownParams.$$equals(n, f);) j = F[P] = D.locals, P++, D = O[P];
                    if (x(t, n, l, f, j, o)) return $ && (n["#"] = $), k.params = n, R(k.params, p), o.location && t.navigable && t.navigable.url && (g.push(t.navigable.url, n, {
                        $$avoidResync: !0,
                        replace: "replace" === o.location
                    }), g.update(!0)), k.transition = null, i.when(k.current);
                    if (n = c(t.params.$$keys(), n || {}), o.notify && e.$broadcast("$stateChangeStart", t.self, n, l.self, f).defaultPrevented) return e.$broadcast("$stateChangeCancel", t.self, n, l.self, f), g.update(), b;
                    for (var M = i.when(j), H = P; H < O.length; H++, D = O[H]) j = F[H] = r(j), M = y(D, n, D === t, M, j, o);
                    var U = k.transition = M.then(function() {
                        var r, i, a;
                        if (k.transition !== U) return w;
                        for (r = h.length - 1; r >= P; r--) a = h[r], a.self.onExit && s.invoke(a.self.onExit, a.self, a.locals.globals), a.locals = null;
                        for (r = P; r < O.length; r++) i = O[r], i.locals = F[r], i.self.onEnter && s.invoke(i.self.onEnter, i.self, i.locals.globals);
                        return $ && (n["#"] = $), k.transition !== U ? w : (k.$current = t, k.current = t.self, k.params = n, R(k.params, p), k.transition = null, o.location && t.navigable && g.push(t.navigable.url, t.navigable.locals.globals.$stateParams, {
                            $$avoidResync: !0,
                            replace: "replace" === o.location
                        }), o.notify && e.$broadcast("$stateChangeSuccess", t.self, n, l.self, f), g.update(!0), k.current)
                    }, function(r) {
                        return k.transition !== U ? w : (k.transition = null, a = e.$broadcast("$stateChangeError", t.self, n, l.self, f, r), a.defaultPrevented || g.update(), i.reject(r))
                    });
                    return U
                }, k.is = function(e, t, r) {
                    r = q({
                        relative: k.$current
                    }, r || {});
                    var i = d(e, r.relative);
                    return _(i) ? k.$current !== i ? !1 : t ? l(i.params.$$values(t), p) : !0 : n
                }, k.includes = function(e, t, r) {
                    if (r = q({
                            relative: k.$current
                        }, r || {}), N(e) && m(e)) {
                        if (!$(e)) return !1;
                        e = k.$current.name
                    }
                    var i = d(e, r.relative);
                    return _(i) ? _(k.$current.includes[i.name]) ? t ? l(i.params.$$values(t), p, a(t)) : !0 : !1 : n
                }, k.href = function(e, t, r) {
                    r = q({
                        lossy: !0,
                        inherit: !0,
                        absolute: !1,
                        relative: k.$current
                    }, r || {});
                    var i = d(e, r.relative);
                    if (!_(i)) return null;
                    r.inherit && (t = u(p, t || {}, k.$current, i));
                    var o = i && r.lossy ? i.navigable : i;
                    return o && o.url !== n && null !== o.url ? g.href(o.url, c(i.params.$$keys().concat("#"), t || {}), {
                        absolute: r.absolute
                    }) : null
                }, k.get = function(e, t) {
                    if (0 === arguments.length) return h(a(S), function(e) {
                        return S[e].self
                    });
                    var n = d(e, t || k.$current);
                    return n && n.self ? n.self : null
                }, k
            }

            function x(e, t, n, r, i, o) {
                function a(e, t, n) {
                    function r(t) {
                        return "search" != e.params[t].location
                    }
                    var i = e.params.$$keys().filter(r),
                        o = f.apply({}, [e.params].concat(i)),
                        a = new H.ParamSet(o);
                    return a.$$equals(t, n)
                }
                return !o.reload && e === n && (i === n.locals || e.self.reloadOnSearch === !1 && a(n, r, t)) ? !0 : void 0
            }
            var C, k, S = {},
                T = {},
                E = "abstract",
                A = {
                    parent: function(e) {
                        if (_(e.parent) && e.parent) return d(e.parent);
                        var t = /^(.+)\.[^.]+$/.exec(e.name);
                        return t ? d(t[1]) : C
                    },
                    data: function(e) {
                        return e.parent && e.parent.data && (e.data = e.self.data = q({}, e.parent.data, e.data)), e.data
                    },
                    url: function(e) {
                        var t = e.url,
                            n = {
                                params: e.params || {}
                            };
                        if (N(t)) return "^" == t.charAt(0) ? i.compile(t.substring(1), n) : (e.parent.navigable || C).url.concat(t, n);
                        if (!t || i.isMatcher(t)) return t;
                        throw new Error("Invalid url '" + t + "' in state '" + e + "'")
                    },
                    navigable: function(e) {
                        return e.url ? e : e.parent ? e.parent.navigable : null
                    },
                    ownParams: function(e) {
                        var t = e.url && e.url.params || new H.ParamSet;
                        return M(e.params || {}, function(e, n) {
                            t[n] || (t[n] = new H.Param(n, null, e, "config"))
                        }), t
                    },
                    params: function(e) {
                        return e.parent && e.parent.params ? q(e.parent.params.$$new(), e.ownParams) : new H.ParamSet
                    },
                    views: function(e) {
                        var t = {};
                        return M(_(e.views) ? e.views : {
                            "": e
                        }, function(n, r) {
                            r.indexOf("@") < 0 && (r += "@" + e.parent.name), t[r] = n
                        }), t
                    },
                    path: function(e) {
                        return e.parent ? e.parent.path.concat(e) : []
                    },
                    includes: function(e) {
                        var t = e.parent ? q({}, e.parent.includes) : {};
                        return t[e.name] = !0, t
                    },
                    $delegates: {}
                };
            C = v({
                name: "",
                url: "^",
                views: null,
                "abstract": !0
            }), C.navigable = null, this.decorator = y, this.state = w, this.$get = b, b.$inject = ["$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$urlRouter", "$location", "$urlMatcherFactory"]
        }

        function x() {
            function e(e, t) {
                return {
                    load: function(n, r) {
                        var i, o = {
                            template: null,
                            controller: null,
                            view: null,
                            locals: null,
                            notify: !0,
                            async: !0,
                            params: {}
                        };
                        return r = q(o, r), r.view && (i = t.fromConfig(r.view, r.params, r.locals)), i && r.notify && e.$broadcast("$viewContentLoading", r), i
                    }
                }
            }
            this.$get = e, e.$inject = ["$rootScope", "$templateFactory"]
        }

        function C() {
            var e = !1;
            this.useAnchorScroll = function() {
                e = !0
            }, this.$get = ["$anchorScroll", "$timeout", function(t, n) {
                return e ? t : function(e) {
                    return n(function() {
                        e[0].scrollIntoView()
                    }, 0, !1)
                }
            }]
        }

        function k(e, n, r, i) {
            function o() {
                return n.has ? function(e) {
                    return n.has(e) ? n.get(e) : null
                } : function(e) {
                    try {
                        return n.get(e)
                    } catch (t) {
                        return null
                    }
                }
            }

            function a(e, t) {
                var n = function() {
                    return {
                        enter: function(e, t, n) {
                            t.after(e), n()
                        },
                        leave: function(e, t) {
                            e.remove(), t()
                        }
                    }
                };
                if (l) return {
                    enter: function(e, t, n) {
                        var r = l.enter(e, null, t, n);
                        r && r.then && r.then(n)
                    },
                    leave: function(e, t) {
                        var n = l.leave(e, t);
                        n && n.then && n.then(t)
                    }
                };
                if (u) {
                    var r = u && u(t, e);
                    return {
                        enter: function(e, t, n) {
                            r.enter(e, null, t), n()
                        },
                        leave: function(e, t) {
                            r.leave(e), t()
                        }
                    }
                }
                return n()
            }
            var s = o(),
                u = s("$animator"),
                l = s("$animate"),
                c = {
                    restrict: "ECA",
                    terminal: !0,
                    priority: 400,
                    transclude: "element",
                    compile: function(n, o, s) {
                        return function(n, o, u) {
                            function l() {
                                f && (f.remove(), f = null), p && (p.$destroy(), p = null), d && (m.leave(d, function() {
                                    f = null
                                }), f = d, d = null)
                            }

                            function c(a) {
                                var c, f = T(n, u, o, i),
                                    $ = f && e.$current && e.$current.locals[f];
                                if (a || $ !== h) {
                                    c = n.$new(), h = e.$current.locals[f];
                                    var y = s(c, function(e) {
                                        m.enter(e, o, function() {
                                            p && p.$emit("$viewContentAnimationEnded"), (t.isDefined(v) && !v || n.$eval(v)) && r(e)
                                        }), l()
                                    });
                                    d = y, p = c, p.$emit("$viewContentLoaded"), p.$eval(g)
                                }
                            }
                            var f, d, p, h, g = u.onload || "",
                                v = u.autoscroll,
                                m = a(u, n);
                            n.$on("$stateChangeSuccess", function() {
                                c(!1)
                            }), n.$on("$viewContentLoading", function() {
                                c(!1)
                            }), c(!0)
                        }
                    }
                };
            return c
        }

        function S(e, t, n, r) {
            return {
                restrict: "ECA",
                priority: -400,
                compile: function(i) {
                    var o = i.html();
                    return function(i, a, s) {
                        var u = n.$current,
                            l = T(i, s, a, r),
                            c = u && u.locals[l];
                        if (c) {
                            a.data("$uiView", {
                                name: l,
                                state: c.$$state
                            }), a.html(c.$template ? c.$template : o);
                            var f = e(a.contents());
                            if (c.$$controller) {
                                c.$scope = i, c.$element = a;
                                var d = t(c.$$controller, c);
                                c.$$controllerAs && (i[c.$$controllerAs] = d), a.data("$ngControllerController", d), a.children().data("$ngControllerController", d)
                            }
                            f(i)
                        }
                    }
                }
            }
        }

        function T(e, t, n, r) {
            var i = r(t.uiView || t.name || "")(e),
                o = n.inheritedData("$uiView");
            return i.indexOf("@") >= 0 ? i : i + "@" + (o ? o.state.name : "")
        }

        function E(e, t) {
            var n, r = e.match(/^\s*({[^}]*})\s*$/);
            if (r && (e = t + "(" + r[1] + ")"), n = e.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/), !n || 4 !== n.length) throw new Error("Invalid state ref '" + e + "'");
            return {
                state: n[1],
                paramExpr: n[3] || null
            }
        }

        function A(e) {
            var t = e.parent().inheritedData("$uiView");
            return t && t.state && t.state.name ? t.state : void 0
        }

        function O(e, n) {
            var r = ["location", "inherit", "reload", "absolute"];
            return {
                restrict: "A",
                require: ["?^uiSrefActive", "?^uiSrefActiveEq"],
                link: function(i, o, a, s) {
                    var u = E(a.uiSref, e.current.name),
                        l = null,
                        c = A(o) || e.$current,
                        f = "[object SVGAnimatedString]" === Object.prototype.toString.call(o.prop("href")) ? "xlink:href" : "href",
                        d = null,
                        p = "A" === o.prop("tagName").toUpperCase(),
                        h = "FORM" === o[0].nodeName,
                        g = h ? "action" : f,
                        v = !0,
                        m = {
                            relative: c,
                            inherit: !0
                        },
                        $ = i.$eval(a.uiSrefOpts) || {};
                    t.forEach(r, function(e) {
                        e in $ && (m[e] = $[e])
                    });
                    var y = function(n) {
                        if (n && (l = t.copy(n)), v) {
                            d = e.href(u.state, l, m);
                            var r = s[1] || s[0];
                            return r && r.$$addStateInfo(u.state, l), null === d ? (v = !1, !1) : void a.$set(g, d)
                        }
                    };
                    u.paramExpr && (i.$watch(u.paramExpr, function(e) {
                        e !== l && y(e)
                    }, !0), l = t.copy(i.$eval(u.paramExpr))), y(), h || o.bind("click", function(t) {
                        var r = t.which || t.button;
                        if (!(r > 1 || t.ctrlKey || t.metaKey || t.shiftKey || o.attr("target"))) {
                            var i = n(function() {
                                e.go(u.state, l, m)
                            });
                            t.preventDefault();
                            var a = p && !d ? 1 : 0;
                            t.preventDefault = function() {
                                a-- <= 0 && n.cancel(i)
                            }
                        }
                    })
                }
            }
        }

        function P(e, t, n) {
            return {
                restrict: "A",
                controller: ["$scope", "$element", "$attrs", function(t, r, i) {
                    function o() {
                        a() ? r.addClass(u) : r.removeClass(u)
                    }

                    function a() {
                        for (var e = 0; e < l.length; e++)
                            if (s(l[e].state, l[e].params)) return !0;
                        return !1
                    }

                    function s(t, n) {
                        return "undefined" != typeof i.uiSrefActiveEq ? e.is(t.name, n) : e.includes(t.name, n)
                    }
                    var u, l = [];
                    u = n(i.uiSrefActiveEq || i.uiSrefActive || "", !1)(t), this.$$addStateInfo = function(t, n) {
                        var i = e.get(t, A(r));
                        l.push({
                            state: i || {
                                name: t
                            },
                            params: n
                        }), o()
                    }, t.$on("$stateChangeSuccess", o)
                }]
            }
        }

        function D(e) {
            var t = function(t) {
                return e.is(t)
            };
            return t.$stateful = !0, t
        }

        function j(e) {
            var t = function(t) {
                return e.includes(t)
            };
            return t.$stateful = !0, t
        }
        var _ = t.isDefined,
            F = t.isFunction,
            N = t.isString,
            I = t.isObject,
            L = t.isArray,
            M = t.forEach,
            q = t.extend,
            R = t.copy;
        t.module("ui.router.util", ["ng"]), t.module("ui.router.router", ["ui.router.util"]), t.module("ui.router.state", ["ui.router.router", "ui.router.util"]), t.module("ui.router", ["ui.router.state"]), t.module("ui.router.compat", ["ui.router"]), g.$inject = ["$q", "$injector"], t.module("ui.router.util").service("$resolve", g), v.$inject = ["$http", "$templateCache", "$injector"], t.module("ui.router.util").service("$templateFactory", v);
        var H;
        m.prototype.concat = function(e, t) {
            var n = {
                caseInsensitive: H.caseInsensitive(),
                strict: H.strictMode(),
                squash: H.defaultSquashPolicy()
            };
            return new m(this.sourcePath + e + this.sourceSearch, q(n, t), this)
        }, m.prototype.toString = function() {
            return this.source
        }, m.prototype.exec = function(e, t) {
            function n(e) {
                function t(e) {
                    return e.split("").reverse().join("")
                }

                function n(e) {
                    return e.replace(/\\-/g, "-")
                }
                var r = t(e).split(/-(?!\\)/),
                    i = h(r, t);
                return h(i, n).reverse()
            }
            var r = this.regexp.exec(e);
            if (!r) return null;
            t = t || {};
            var i, o, a, s = this.parameters(),
                u = s.length,
                l = this.segments.length - 1,
                c = {};
            if (l !== r.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");
            for (i = 0; l > i; i++) {
                a = s[i];
                var f = this.params[a],
                    d = r[i + 1];
                for (o = 0; o < f.replace; o++) f.replace[o].from === d && (d = f.replace[o].to);
                d && f.array === !0 && (d = n(d)), c[a] = f.value(d)
            }
            for (; u > i; i++) a = s[i], c[a] = this.params[a].value(t[a]);
            return c
        }, m.prototype.parameters = function(e) {
            return _(e) ? this.params[e] || null : this.$$paramNames
        }, m.prototype.validates = function(e) {
            return this.params.$$validates(e)
        }, m.prototype.format = function(e) {
            function t(e) {
                return encodeURIComponent(e).replace(/-/g, function(e) {
                    return "%5C%" + e.charCodeAt(0).toString(16).toUpperCase()
                })
            }
            e = e || {};
            var n = this.segments,
                r = this.parameters(),
                i = this.params;
            if (!this.validates(e)) return null;
            var o, a = !1,
                s = n.length - 1,
                u = r.length,
                l = n[0];
            for (o = 0; u > o; o++) {
                var c = s > o,
                    f = r[o],
                    d = i[f],
                    p = d.value(e[f]),
                    g = d.isOptional && d.type.equals(d.value(), p),
                    v = g ? d.squash : !1,
                    m = d.type.encode(p);
                if (c) {
                    var $ = n[o + 1];
                    if (v === !1) null != m && (l += L(m) ? h(m, t).join("-") : encodeURIComponent(m)), l += $;
                    else if (v === !0) {
                        var y = l.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
                        l += $.match(y)[1]
                    } else N(v) && (l += v + $)
                } else {
                    if (null == m || g && v !== !1) continue;
                    L(m) || (m = [m]), m = h(m, encodeURIComponent).join("&" + f + "="), l += (a ? "&" : "?") + (f + "=" + m), a = !0
                }
            }
            return l
        }, $.prototype.is = function() {
            return !0
        }, $.prototype.encode = function(e) {
            return e
        }, $.prototype.decode = function(e) {
            return e
        }, $.prototype.equals = function(e, t) {
            return e == t
        }, $.prototype.$subPattern = function() {
            var e = this.pattern.toString();
            return e.substr(1, e.length - 2)
        }, $.prototype.pattern = /.*/, $.prototype.toString = function() {
            return "{Type:" + this.name + "}"
        }, $.prototype.$normalize = function(e) {
            return this.is(e) ? e : this.decode(e)
        }, $.prototype.$asArray = function(e, t) {
            function r(e, t) {
                function r(e, t) {
                    return function() {
                        return e[t].apply(e, arguments)
                    }
                }

                function i(e) {
                    return L(e) ? e : _(e) ? [e] : []
                }

                function o(e) {
                    switch (e.length) {
                        case 0:
                            return n;
                        case 1:
                            return "auto" === t ? e[0] : e;
                        default:
                            return e
                    }
                }

                function a(e) {
                    return !e
                }

                function s(e, t) {
                    return function(n) {
                        n = i(n);
                        var r = h(n, e);
                        return t === !0 ? 0 === p(r, a).length : o(r)
                    }
                }

                function u(e) {
                    return function(t, n) {
                        var r = i(t),
                            o = i(n);
                        if (r.length !== o.length) return !1;
                        for (var a = 0; a < r.length; a++)
                            if (!e(r[a], o[a])) return !1;
                        return !0
                    }
                }
                this.encode = s(r(e, "encode")), this.decode = s(r(e, "decode")), this.is = s(r(e, "is"), !0), this.equals = u(r(e, "equals")), this.pattern = e.pattern, this.$normalize = s(r(e, "$normalize")), this.name = e.name, this.$arrayMode = t
            }
            if (!e) return this;
            if ("auto" === e && !t) throw new Error("'auto' array mode is for query parameters only");
            return new r(this, e)
        }, t.module("ui.router.util").provider("$urlMatcherFactory", y), t.module("ui.router.util").run(["$urlMatcherFactory", function() {}]), w.$inject = ["$locationProvider", "$urlMatcherFactoryProvider"], t.module("ui.router.router").provider("$urlRouter", w), b.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider"], t.module("ui.router.state").value("$stateParams", {}).provider("$state", b), x.$inject = [], t.module("ui.router.state").provider("$view", x), t.module("ui.router.state").provider("$uiViewScroll", C), k.$inject = ["$state", "$injector", "$uiViewScroll", "$interpolate"], S.$inject = ["$compile", "$controller", "$state", "$interpolate"], t.module("ui.router.state").directive("uiView", k), t.module("ui.router.state").directive("uiView", S), O.$inject = ["$state", "$timeout"], P.$inject = ["$state", "$stateParams", "$interpolate"], t.module("ui.router.state").directive("uiSref", O).directive("uiSrefActive", P).directive("uiSrefActiveEq", P), D.$inject = ["$state"], j.$inject = ["$state"], t.module("ui.router.state").filter("isState", D).filter("includedByState", j)
    }(window, window.angular),
    /*!
    Waypoints - 3.1.1
    Copyright © 2011-2015 Caleb Troughton
    Licensed under the MIT license.
    https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
    */
    ! function() {
        "use strict";

        function e(r) {
            if (!r) throw new Error("No options passed to Waypoint constructor");
            if (!r.element) throw new Error("No element option passed to Waypoint constructor");
            if (!r.handler) throw new Error("No handler option passed to Waypoint constructor");
            this.key = "waypoint-" + t, this.options = e.Adapter.extend({}, e.defaults, r), this.element = this.options.element, this.adapter = new e.Adapter(this.element), this.callback = r.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = e.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis
            }), this.context = e.Context.findOrCreateByElement(this.options.context), e.offsetAliases[this.options.offset] && (this.options.offset = e.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), n[this.key] = this, t += 1
        }
        var t = 0,
            n = {};
        e.prototype.queueTrigger = function(e) {
            this.group.queueTrigger(this, e)
        }, e.prototype.trigger = function(e) {
            this.enabled && this.callback && this.callback.apply(this, e)
        }, e.prototype.destroy = function() {
            this.context.remove(this), this.group.remove(this), delete n[this.key]
        }, e.prototype.disable = function() {
            return this.enabled = !1, this
        }, e.prototype.enable = function() {
            return this.context.refresh(), this.enabled = !0, this
        }, e.prototype.next = function() {
            return this.group.next(this)
        }, e.prototype.previous = function() {
            return this.group.previous(this)
        }, e.invokeAll = function(e) {
            var t = [];
            for (var r in n) t.push(n[r]);
            for (var i = 0, o = t.length; o > i; i++) t[i][e]()
        }, e.destroyAll = function() {
            e.invokeAll("destroy")
        }, e.disableAll = function() {
            e.invokeAll("disable")
        }, e.enableAll = function() {
            e.invokeAll("enable")
        }, e.refreshAll = function() {
            e.Context.refreshAll()
        }, e.viewportHeight = function() {
            return window.innerHeight || document.documentElement.clientHeight
        }, e.viewportWidth = function() {
            return document.documentElement.clientWidth
        }, e.adapters = [], e.defaults = {
            context: window,
            continuous: !0,
            enabled: !0,
            group: "default",
            horizontal: !1,
            offset: 0
        }, e.offsetAliases = {
            "bottom-in-view": function() {
                return this.context.innerHeight() - this.adapter.outerHeight()
            },
            "right-in-view": function() {
                return this.context.innerWidth() - this.adapter.outerWidth()
            }
        }, window.Waypoint = e
    }(),
    function() {
        "use strict";

        function e(e) {
            window.setTimeout(e, 1e3 / 60)
        }

        function t(e) {
            this.element = e, this.Adapter = i.Adapter, this.adapter = new this.Adapter(e), this.key = "waypoint-context-" + n, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
                x: this.adapter.scrollLeft(),
                y: this.adapter.scrollTop()
            }, this.waypoints = {
                vertical: {},
                horizontal: {}
            }, e.waypointContextKey = this.key, r[e.waypointContextKey] = this, n += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
        }
        var n = 0,
            r = {},
            i = window.Waypoint,
            o = window.onload;
        t.prototype.add = function(e) {
            var t = e.options.horizontal ? "horizontal" : "vertical";
            this.waypoints[t][e.key] = e, this.refresh()
        }, t.prototype.checkEmpty = function() {
            var e = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                t = this.Adapter.isEmptyObject(this.waypoints.vertical);
            e && t && (this.adapter.off(".waypoints"), delete r[this.key])
        }, t.prototype.createThrottledResizeHandler = function() {
            function e() {
                t.handleResize(), t.didResize = !1
            }
            var t = this;
            this.adapter.on("resize.waypoints", function() {
                t.didResize || (t.didResize = !0, i.requestAnimationFrame(e))
            })
        }, t.prototype.createThrottledScrollHandler = function() {
            function e() {
                t.handleScroll(), t.didScroll = !1
            }
            var t = this;
            this.adapter.on("scroll.waypoints", function() {
                (!t.didScroll || i.isTouch) && (t.didScroll = !0, i.requestAnimationFrame(e))
            })
        }, t.prototype.handleResize = function() {
            i.Context.refreshAll()
        }, t.prototype.handleScroll = function() {
            var e = {},
                t = {
                    horizontal: {
                        newScroll: this.adapter.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.adapter.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
            for (var n in t) {
                var r = t[n],
                    i = r.newScroll > r.oldScroll,
                    o = i ? r.forward : r.backward;
                for (var a in this.waypoints[n]) {
                    var s = this.waypoints[n][a],
                        u = r.oldScroll < s.triggerPoint,
                        l = r.newScroll >= s.triggerPoint,
                        c = u && l,
                        f = !u && !l;
                    (c || f) && (s.queueTrigger(o), e[s.group.id] = s.group)
                }
            }
            for (var d in e) e[d].flushTriggers();
            this.oldScroll = {
                x: t.horizontal.newScroll,
                y: t.vertical.newScroll
            }
        }, t.prototype.innerHeight = function() {
            return this.element == this.element.window ? i.viewportHeight() : this.adapter.innerHeight()
        }, t.prototype.remove = function(e) {
            delete this.waypoints[e.axis][e.key], this.checkEmpty()
        }, t.prototype.innerWidth = function() {
            return this.element == this.element.window ? i.viewportWidth() : this.adapter.innerWidth()
        }, t.prototype.destroy = function() {
            var e = [];
            for (var t in this.waypoints)
                for (var n in this.waypoints[t]) e.push(this.waypoints[t][n]);
            for (var r = 0, i = e.length; i > r; r++) e[r].destroy()
        }, t.prototype.refresh = function() {
            var e, t = this.element == this.element.window,
                n = this.adapter.offset(),
                r = {};
            this.handleScroll(), e = {
                horizontal: {
                    contextOffset: t ? 0 : n.left,
                    contextScroll: t ? 0 : this.oldScroll.x,
                    contextDimension: this.innerWidth(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                    offsetProp: "left"
                },
                vertical: {
                    contextOffset: t ? 0 : n.top,
                    contextScroll: t ? 0 : this.oldScroll.y,
                    contextDimension: this.innerHeight(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                    offsetProp: "top"
                }
            };
            for (var i in e) {
                var o = e[i];
                for (var a in this.waypoints[i]) {
                    var s, u, l, c, f, d = this.waypoints[i][a],
                        p = d.options.offset,
                        h = d.triggerPoint,
                        g = 0,
                        v = null == h;
                    d.element !== d.element.window && (g = d.adapter.offset()[o.offsetProp]), "function" == typeof p ? p = p.apply(d) : "string" == typeof p && (p = parseFloat(p), d.options.offset.indexOf("%") > -1 && (p = Math.ceil(o.contextDimension * p / 100))), s = o.contextScroll - o.contextOffset, d.triggerPoint = g + s - p, u = h < o.oldScroll, l = d.triggerPoint >= o.oldScroll, c = u && l, f = !u && !l, !v && c ? (d.queueTrigger(o.backward), r[d.group.id] = d.group) : !v && f ? (d.queueTrigger(o.forward), r[d.group.id] = d.group) : v && o.oldScroll >= d.triggerPoint && (d.queueTrigger(o.forward), r[d.group.id] = d.group)
                }
            }
            for (var m in r) r[m].flushTriggers();
            return this
        }, t.findOrCreateByElement = function(e) {
            return t.findByElement(e) || new t(e)
        }, t.refreshAll = function() {
            for (var e in r) r[e].refresh()
        }, t.findByElement = function(e) {
            return r[e.waypointContextKey]
        }, window.onload = function() {
            o && o(), t.refreshAll()
        }, i.requestAnimationFrame = function(t) {
            var n = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || e;
            n.call(window, t)
        }, i.Context = t
    }(),
    function() {
        "use strict";

        function e(e, t) {
            return e.triggerPoint - t.triggerPoint
        }

        function t(e, t) {
            return t.triggerPoint - e.triggerPoint
        }

        function n(e) {
            this.name = e.name, this.axis = e.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), r[this.axis][this.name] = this
        }
        var r = {
                vertical: {},
                horizontal: {}
            },
            i = window.Waypoint;
        n.prototype.add = function(e) {
            this.waypoints.push(e)
        }, n.prototype.clearTriggerQueues = function() {
            this.triggerQueues = {
                up: [],
                down: [],
                left: [],
                right: []
            }
        }, n.prototype.flushTriggers = function() {
            for (var n in this.triggerQueues) {
                var r = this.triggerQueues[n],
                    i = "up" === n || "left" === n;
                r.sort(i ? t : e);
                for (var o = 0, a = r.length; a > o; o += 1) {
                    var s = r[o];
                    (s.options.continuous || o === r.length - 1) && s.trigger([n])
                }
            }
            this.clearTriggerQueues()
        }, n.prototype.next = function(t) {
            this.waypoints.sort(e);
            var n = i.Adapter.inArray(t, this.waypoints),
                r = n === this.waypoints.length - 1;
            return r ? null : this.waypoints[n + 1]
        }, n.prototype.previous = function(t) {
            this.waypoints.sort(e);
            var n = i.Adapter.inArray(t, this.waypoints);
            return n ? this.waypoints[n - 1] : null
        }, n.prototype.queueTrigger = function(e, t) {
            this.triggerQueues[t].push(e)
        }, n.prototype.remove = function(e) {
            var t = i.Adapter.inArray(e, this.waypoints);
            t > -1 && this.waypoints.splice(t, 1)
        }, n.prototype.first = function() {
            return this.waypoints[0]
        }, n.prototype.last = function() {
            return this.waypoints[this.waypoints.length - 1]
        }, n.findOrCreate = function(e) {
            return r[e.axis][e.name] || new n(e)
        }, i.Group = n
    }(),
    function() {
        "use strict";

        function e(e) {
            return e === e.window
        }

        function t(t) {
            return e(t) ? t : t.defaultView
        }

        function n(e) {
            this.element = e, this.handlers = {}
        }
        var r = window.Waypoint;
        n.prototype.innerHeight = function() {
            var t = e(this.element);
            return t ? this.element.innerHeight : this.element.clientHeight
        }, n.prototype.innerWidth = function() {
            var t = e(this.element);
            return t ? this.element.innerWidth : this.element.clientWidth
        }, n.prototype.off = function(e, t) {
            function n(e, t, n) {
                for (var r = 0, i = t.length - 1; i > r; r++) {
                    var o = t[r];
                    n && n !== o || e.removeEventListener(o)
                }
            }
            var r = e.split("."),
                i = r[0],
                o = r[1],
                a = this.element;
            if (o && this.handlers[o] && i) n(a, this.handlers[o][i], t), this.handlers[o][i] = [];
            else if (i)
                for (var s in this.handlers) n(a, this.handlers[s][i] || [], t), this.handlers[s][i] = [];
            else if (o && this.handlers[o]) {
                for (var u in this.handlers[o]) n(a, this.handlers[o][u], t);
                this.handlers[o] = {}
            }
        }, n.prototype.offset = function() {
            if (!this.element.ownerDocument) return null;
            var e = this.element.ownerDocument.documentElement,
                n = t(this.element.ownerDocument),
                r = {
                    top: 0,
                    left: 0
                };
            return this.element.getBoundingClientRect && (r = this.element.getBoundingClientRect()), {
                top: r.top + n.pageYOffset - e.clientTop,
                left: r.left + n.pageXOffset - e.clientLeft
            }
        }, n.prototype.on = function(e, t) {
            var n = e.split("."),
                r = n[0],
                i = n[1] || "__default",
                o = this.handlers[i] = this.handlers[i] || {},
                a = o[r] = o[r] || [];
            a.push(t), this.element.addEventListener(r, t)
        }, n.prototype.outerHeight = function(t) {
            var n, r = this.innerHeight();
            return t && !e(this.element) && (n = window.getComputedStyle(this.element), r += parseInt(n.marginTop, 10), r += parseInt(n.marginBottom, 10)), r
        }, n.prototype.outerWidth = function(t) {
            var n, r = this.innerWidth();
            return t && !e(this.element) && (n = window.getComputedStyle(this.element), r += parseInt(n.marginLeft, 10), r += parseInt(n.marginRight, 10)), r
        }, n.prototype.scrollLeft = function() {
            var e = t(this.element);
            return e ? e.pageXOffset : this.element.scrollLeft
        }, n.prototype.scrollTop = function() {
            var e = t(this.element);
            return e ? e.pageYOffset : this.element.scrollTop
        }, n.extend = function() {
            function e(e, t) {
                if ("object" == typeof e && "object" == typeof t)
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                return e
            }
            for (var t = Array.prototype.slice.call(arguments), n = 1, r = t.length; r > n; n++) e(t[0], t[n]);
            return t[0]
        }, n.inArray = function(e, t, n) {
            return null == t ? -1 : t.indexOf(e, n)
        }, n.isEmptyObject = function(e) {
            for (var t in e) return !1;
            return !0
        }, r.adapters.push({
            name: "noframework",
            Adapter: n
        }), r.Adapter = n
    }(),
    function() {
        function e(e) {
            var t, n = (e.length + 8 >> 6) + 1,
                r = [];
            for (t = 0; 16 * n > t; t++) r[t] = 0;
            for (t = 0; t < e.length; t++) r[t >> 2] |= e.charCodeAt(t) << 24 - 8 * (3 & t);
            return r[t >> 2] |= 128 << 24 - 8 * (3 & t), r[16 * n - 1] = 8 * e.length, r
        }

        function t(e) {
            var t, n = "0123456789abcdef",
                r = "";
            for (t = 0; t < 4 * e.length; t++) r += n.charAt(e[t >> 2] >> 8 * (3 - t % 4) + 4 & 15) + n.charAt(e[t >> 2] >> 8 * (3 - t % 4) & 15);
            return r
        }

        function n(e) {
            var t, n, s, u, l, c, f, d, p = [],
                h = 1732584193,
                g = 4023233417,
                v = 2562383102,
                m = 271733878,
                $ = 3285377520;
            for (f = 0; f < e.length; f += 16) {
                for (t = h, n = g, s = v, u = m, l = $, d = 0; 80 > d; d++) p[d] = 16 > d ? e[f + d] : a(p[d - 3] ^ p[d - 8] ^ p[d - 14] ^ p[d - 16], 1), c = o(o(a(h, 5), r(d, g, v, m)), o(o($, p[d]), i(d))), $ = m, m = v, v = a(g, 30), g = h, h = c;
                h = o(h, t), g = o(g, n), v = o(v, s), m = o(m, u), $ = o($, l)
            }
            return [h, g, v, m, $]
        }

        function r(e, t, n, r) {
            return 20 > e ? t & n | ~t & r : 40 > e ? t ^ n ^ r : 60 > e ? t & n | t & r | n & r : t ^ n ^ r
        }

        function i(e) {
            return 20 > e ? 1518500249 : 40 > e ? 1859775393 : 60 > e ? 2400959708 : 3395469782
        }

        function o(e, t) {
            var n = (65535 & e) + (65535 & t),
                r = (e >> 16) + (t >> 16) + (n >> 16);
            return r << 16 | 65535 & n
        }

        function a(e, t) {
            return e << t | e >>> 32 - t
        }

        function s(r) {
            return t(n(e(r)))
        }
        var u = this;
        "function" == typeof define ? define(function() {
            return s
        }) : "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = s), exports.sha1 = s) : u.sha1 = s
    }.call(this),
    /**
     * @license Angulartics v0.19.2
     * (c) 2013 Luis Farzati http://luisfarzati.github.io/angulartics
     * License: MIT
     */
    function(e) {
        "use strict";
        var t = window.angulartics || (window.angulartics = {});
        t.waitForVendorCount = 0, t.waitForVendorApi = function(e, n, r, i, o) {
            o || t.waitForVendorCount++, i || (i = r, r = void 0), !Object.prototype.hasOwnProperty.call(window, e) || void 0 !== r && void 0 === window[e][r] ? setTimeout(function() {
                t.waitForVendorApi(e, n, r, i, !0)
            }, n) : (t.waitForVendorCount--, i(window[e]))
        }, e.module("angulartics", []).provider("$analytics", function() {
            var n = {
                    pageTracking: {
                        autoTrackFirstPage: !0,
                        autoTrackVirtualPages: !0,
                        trackRelativePath: !1,
                        autoBasePath: !1,
                        basePath: ""
                    },
                    eventTracking: {},
                    bufferFlushDelay: 1e3,
                    developerMode: !1
                },
                r = ["pageTrack", "eventTrack", "setAlias", "setUsername", "setUserProperties", "setUserPropertiesOnce", "setSuperProperties", "setSuperPropertiesOnce"],
                i = {},
                o = {},
                a = function(e) {
                    return function() {
                        t.waitForVendorCount && (i[e] || (i[e] = []), i[e].push(arguments))
                    }
                },
                s = function(t, n) {
                    return o[t] || (o[t] = []), o[t].push(n),
                        function() {
                            var n = arguments;
                            e.forEach(o[t], function(e) {
                                e.apply(this, n)
                            }, this)
                        }
                },
                u = {
                    settings: n
                },
                l = function(e, t) {
                    t ? setTimeout(e, t) : e()
                },
                c = {
                    $get: function() {
                        return u
                    },
                    api: u,
                    settings: n,
                    virtualPageviews: function(e) {
                        this.settings.pageTracking.autoTrackVirtualPages = e
                    },
                    firstPageview: function(e) {
                        this.settings.pageTracking.autoTrackFirstPage = e
                    },
                    withBase: function(t) {
                        this.settings.pageTracking.basePath = t ? e.element(document).find("base").attr("href") : ""
                    },
                    withAutoBase: function(e) {
                        this.settings.pageTracking.autoBasePath = e
                    },
                    developerMode: function(e) {
                        this.settings.developerMode = e
                    }
                },
                f = function(t, r) {
                    u[t] = s(t, r);
                    var o = n[t],
                        a = o ? o.bufferFlushDelay : null,
                        c = null !== a ? a : n.bufferFlushDelay;
                    e.forEach(i[t], function(e, t) {
                        l(function() {
                            r.apply(this, e)
                        }, t * c)
                    })
                },
                d = function(e) {
                    return e.replace(/^./, function(e) {
                        return e.toUpperCase()
                    })
                },
                p = function(e) {
                    var t = "register" + d(e);
                    c[t] = function(t) {
                        f(e, t)
                    }, u[e] = s(e, a(e))
                };
            return e.forEach(r, p), c
        }).run(["$rootScope", "$window", "$analytics", "$injector", function(t, n, r, i) {
            r.settings.pageTracking.autoTrackFirstPage && i.invoke(["$location", function(e) {
                var t = !0;
                if (i.has("$route")) {
                    var o = i.get("$route");
                    for (var a in o.routes) {
                        t = !1;
                        break
                    }
                } else if (i.has("$state")) {
                    var s = i.get("$state");
                    for (var u in s.get()) {
                        t = !1;
                        break
                    }
                }
                if (t)
                    if (r.settings.pageTracking.autoBasePath && (r.settings.pageTracking.basePath = n.location.pathname), r.settings.pageTracking.trackRelativePath) {
                        var l = r.settings.pageTracking.basePath + e.url();
                        r.pageTrack(l, e)
                    } else r.pageTrack(e.absUrl(), e)
            }]), r.settings.pageTracking.autoTrackVirtualPages && i.invoke(["$location", function(e) {
                r.settings.pageTracking.autoBasePath && (r.settings.pageTracking.basePath = n.location.pathname + "#");
                var o = !0;
                if (i.has("$route")) {
                    var a = i.get("$route");
                    for (var s in a.routes) {
                        o = !1;
                        break
                    }
                    t.$on("$routeChangeSuccess", function(t, n) {
                        if (!n || !(n.$$route || n).redirectTo) {
                            var i = r.settings.pageTracking.basePath + e.url();
                            r.pageTrack(i, e)
                        }
                    })
                }
                i.has("$state") && (o = !1, t.$on("$stateChangeSuccess", function() {
                    var t = r.settings.pageTracking.basePath + e.url();
                    r.pageTrack(t, e)
                })), o && t.$on("$locationChangeSuccess", function(t, n) {
                    if (!n || !(n.$$route || n).redirectTo)
                        if (r.settings.pageTracking.trackRelativePath) {
                            var i = r.settings.pageTracking.basePath + e.url();
                            r.pageTrack(i, e)
                        } else r.pageTrack(e.absUrl(), e)
                })
            }]), r.settings.developerMode && e.forEach(r, function(e, t) {
                "function" == typeof e && (r[t] = function() {})
            })
        }]).directive("analyticsOn", ["$analytics", function(t) {
            function n(e) {
                return ["a:", "button:", "button:button", "button:submit", "input:button", "input:submit"].indexOf(e.tagName.toLowerCase() + ":" + (e.type || "")) >= 0
            }

            function r(e) {
                return n(e), "click"
            }

            function i(e) {
                return n(e) ? e.innerText || e.value : e.id || e.name || e.tagName
            }

            function o(e) {
                return "analytics" === e.substr(0, 9) && -1 === ["On", "Event", "If", "Properties", "EventType"].indexOf(e.substr(9))
            }

            function a(e) {
                var t = e.slice(9);
                return "undefined" != typeof t && null !== t && t.length > 0 ? t.substring(0, 1).toLowerCase() + t.substring(1) : t
            }
            return {
                restrict: "A",
                link: function(n, s, u) {
                    var l = u.analyticsOn || r(s[0]),
                        c = {};
                    e.forEach(u.$attr, function(e, t) {
                        o(t) && (c[a(t)] = u[t], u.$observe(t, function(e) {
                            c[a(t)] = e
                        }))
                    }), e.element(s[0]).bind(l, function(r) {
                        var o = u.analyticsEvent || i(s[0]);
                        c.eventType = r.type, (!u.analyticsIf || n.$eval(u.analyticsIf)) && (u.analyticsProperties && e.extend(c, n.$eval(u.analyticsProperties)), t.eventTrack(o, c))
                    })
                }
            }
        }])
    }(angular),
    function(e) {
        "use strict";
        e.module("angulartics.clicky", ["angulartics"]).config(["$analyticsProvider", "$documentProvider", function(t, n) {
            function r(e) {
                u = e, u && (t.registerPageTrack(i), t.registerEventTrack(o))
            }

            function i(e, t) {
                var n = t.title || l[0].title,
                    r = a(t.type);
                u.log(e, n, r)
            }

            function o(t, n) {
                var r, i, o, l, c;
                e.isDefined(n.goal) ? (r = n.goal, i = s(n.revenue) ? n.revenue : void 0, o = !!n.noQueue, u.goal(r, i, o)) : (c = a(n.type) === n.type ? n.type : "click", l = n.title || n.value, u.log(t, l, c))
            }

            function a(e) {
                var t = ["click", "download", "outbound", "pageview"];
                return t.indexOf(e) >= 0 ? e : "pageview"
            }

            function s(e) {
                return "number" == typeof e && isFinite(e)
            }
            var u, l = n.$get;
            t.settings.pageTracking.trackRelativePath = !0, angulartics.waitForVendorApi("clicky", 100, r)
        }])
    }(angular),
    function(e) {
        "use strict";
        e.module("angulartics.cnzz", ["angulartics"]).config(["$analyticsProvider", function(e) {
            window._czc = _czc || [], _czc.push(["_setAutoPageview", !1]), e.registerPageTrack(function(e) {
                _czc.push(["_trackPageview", e])
            }), e.registerEventTrack(function(e, t) {
                _czc.push(["_trackEvent", t.category, e, t.label, t.value, t.nodeid])
            })
        }])
    }(angular),
    /**
     * @license Angulartics v0.19.2
     * (c) 2013 Luis Farzati http://luisfarzati.github.io/angulartics
     * License: MIT
     */
    function(e) {
        "use strict";
        e.module("angulartics.google.analytics.cordova", ["angulartics"]).provider("googleAnalyticsCordova", function() {
            var t = ["$q", "$log", "ready", "debug", "trackingId", "period", function(e, t, n, r, i, o) {
                function a() {
                    r && t.info(arguments)
                }

                function s(e) {
                    r && t.error(e)
                }
                var u = e.defer(),
                    l = !1;
                window.addEventListener("deviceReady", function() {
                    l = !0, u.resolve()
                }), setTimeout(function() {
                    l || u.resolve()
                }, 3e3), this.init = function() {
                    return u.promise.then(function() {
                        var e = window.plugins && window.plugins.gaPlugin;
                        e ? e.init(function() {
                            n(e, a, s)
                        }, s, i, o || 10) : r && t.error("Google Analytics for Cordova is not available")
                    })
                }
            }];
            return {
                $get: ["$injector", function(n) {
                    return n.instantiate(t, {
                        ready: this._ready || e.noop,
                        debug: this.debug,
                        trackingId: this.trackingId,
                        period: this.period
                    })
                }],
                ready: function(e) {
                    this._ready = e
                }
            }
        }).config(["$analyticsProvider", "googleAnalyticsCordovaProvider", function(e, t) {
            t.ready(function(t, n, r) {
                e.registerPageTrack(function(e) {
                    t.trackPage(n, r, e)
                }), e.registerEventTrack(function(e, i) {
                    t.trackEvent(n, r, i.category, e, i.label, i.value)
                })
            })
        }]).run(["googleAnalyticsCordova", function(e) {
            e.init()
        }])
    }(angular),
    /**
     * @license Angulartics v0.19.2
     * (c) 2013 Luis Farzati http://luisfarzati.github.io/angulartics
     * Google Tag Manager Plugin Contributed by http://github.com/danrowe49
     * License: MIT
     */
    function(e) {
        "use strict";
        e.module("angulartics.google.tagmanager", ["angulartics"]).config(["$analyticsProvider", function(e) {
            e.registerPageTrack(function(e) {
                var t = window.dataLayer = window.dataLayer || [];
                t.push({
                    event: "content-view",
                    "content-name": e
                })
            }), e.registerEventTrack(function(e, t) {
                var n = window.dataLayer = window.dataLayer || [];
                t = t || {}, n.push({
                    event: t.event || "interaction",
                    target: t.category,
                    action: e,
                    "target-properties": t.label,
                    value: t.value,
                    "interaction-type": t.noninteraction
                })
            })
        }])
    }(angular),
    /**
     * @license Angulartics v0.19.2
     * (c) 2013 Luis Farzati http://luisfarzati.github.io/angulartics
     * Piwik 2.1.x update contributed by http://github.com/highskillz
     * License: MIT
     */
    function(e) {
        "use strict";
        e.module("angulartics.piwik", ["angulartics"]).config(["$analyticsProvider", "$windowProvider", function(t, n) {
            var r = n.$get();
            t.settings.pageTracking.trackRelativePath = !0, t.api.setCustomVariable = function(e, t, n, i) {
                r._paq && (i = i || "page", r._paq.push(["setCustomVariable", e, t, n, i]))
            }, t.api.trackSiteSearch = function(t, n, i) {
                if (r._paq && t) {
                    var o = ["trackSiteSearch", t, n || !1];
                    e.isDefined(i) && o.push(i), r._paq.push(o)
                }
            }, t.api.trackGoal = function(e, t) {
                r._paq && _paq.push(["trackGoal", e, t || 0])
            }, t.registerSetUsername(function(e) {
                r._paq && r._paq.push(["setUserId", e])
            }), t.registerPageTrack(function(e) {
                r._paq && (r._paq.push(["setDocumentTitle", r.document.title]), r._paq.push(["setCustomUrl", e]), r._paq.push(["trackPageView"]))
            }), t.registerEventTrack(function(e, t) {
                if (r._paq) {
                    if (t.value) {
                        var n = parseInt(t.value, 10);
                        t.value = isNaN(n) ? 0 : n
                    }
                    r._paq.push(["trackEvent", t.category, e, t.label, t.value])
                }
            })
        }])
    }(angular),
    /**
     * @license Angulartics v0.19.2
     * (c) 2013 Luis Farzati http://luisfarzati.github.io/angulartics
     * License: MIT
     */
    function(e) {
        "use strict";
        e.module("angulartics.scroll", ["angulartics"]).factory("$waypoint", function() {
            return function(e) {
                return new Waypoint(e)
            }
        }).directive("analyticsOn", ["$analytics", "$waypoint", function(t, n) {
            function r(e) {
                return "scrollby" === e.substr(0, 8)
            }

            function i(e) {
                return "" === e || "true" === e ? !0 : "false" === e ? !1 : e
            }
            return {
                restrict: "A",
                priority: 5,
                scope: !1,
                link: function(t, o, a) {
                    if ("scrollby" === a.analyticsOn) {
                        var s = {
                            handler: function() {
                                o.triggerHandler("scrollby"), this.options.triggeronce && this.destroy()
                            },
                            element: o[0],
                            continuous: !1,
                            triggeronce: !0
                        };
                        e.forEach(a.$attr, function(e, t) {
                            r(e) && (s[t.slice(8, 9).toLowerCase() + t.slice(9)] = i(a[t]))
                        }), n(s)
                    }
                }
            }
        }])
    }(angular),
    /**
     * @license Angulartics v0.19.2
     * (c) 2013 Luis Farzati http://luisfarzati.github.io/angulartics
     * License: MIT
     */
    function(e) {
        "use strict";
        e.module("angulartics.splunk", ["angulartics"]).config(["$analyticsProvider", function(e) {
            var t = function() {
                    throw "Define sp "
                },
                n = function() {
                    return window.sp || {
                        pageview: t,
                        track: t
                    }
                };
            e.registerPageTrack(function(e) {
                n().pageview(e)
            }), e.registerEventTrack(function(e, t) {
                n().track(e, t)
            })
        }])
    }(angular),
    /**
     * @license Angulartics v0.19.2
     * (c) 2013 Luis Farzati http://luisfarzati.github.io/angulartics
     * License: MIT
     */
    function(e) {
        "use strict";
        e.module("angulartics.woopra", ["angulartics"]).config(["$analyticsProvider", function(e) {
            e.registerPageTrack(function(e) {
                woopra.track("pv", {
                    url: e
                })
            }), e.registerEventTrack(function(e, t) {
                woopra.track(e, t)
            }), e.registerSetUsername(function(e) {
                woopra.identify("email", e).push()
            }), e.registerSetUserProperties(function(e) {
                e.email && woopra.identify(e).push()
            })
        }])
    }(angular),
    /**
     * @license Angulartics v0.19.2
     * (c) 2014 Carl Thorner http://luisfarzati.github.io/angulartics
     * Contributed by http://github.com/L42y
     * License: MIT
     */
    function(e) {
        "use strict";
        e.module("angulartics.marketo", ["angulartics"]).config(["$analyticsProvider", function(e) {
            angulartics.waitForVendorApi("Munchkin", 500, "sKey", function(t) {
                e.registerPageTrack(function(e) {
                    t.munchkinFunction("visitWebPage", {
                        url: e
                    })
                })
            }), angulartics.waitForVendorApi("Munchkin", 500, "sKey", function(t) {
                e.registerEventTrack(function(e, n) {
                    if (void 0 !== n.path) {
                        var r = [];
                        for (var i in n) "path" !== i && r.push(i + "=" + n[i]);
                        "CLICK" == e.toUpperCase() && t.munchkinFunction("clickLink", {
                            href: n.path
                        }), t.munchkinFunction("visitWebPage", {
                            url: n.path,
                            params: r.join("&")
                        })
                    }
                })
            });
            var t = function(e) {
                void 0 !== e.email && (email = e.email, email_sha = sha1(Munckin.sKey + email), e.Email = e.email, Munchkin.munchkinFunction("associateLead", e, email_sha))
            };
            angulartics.waitForVendorApi("Munchkin", 500, function() {
                e.registerSetUsername(function(e) {
                    /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/.test(e) && t({
                        Email: e
                    })
                })
            }), angulartics.waitForVendorApi("Munchkin", 500, function() {
                e.registerSetUserProperties(function(e) {
                    t(e)
                })
            }), angulartics.waitForVendorApi("Munchkin", 500, function() {
                e.registerSetUserPropertiesOnce(function(e) {
                    t(e)
                })
            })
        }])
    }(angular),
    /**
     * @license Angulartics v0.19.2
     * (c) 2013 Luis Farzati http://luisfarzati.github.io/angulartics
     * Universal Analytics update contributed by http://github.com/willmcclellan
     * License: MIT
     */
    function(e) {
        "use strict";
        e.module("angulartics.intercom", ["angulartics"]).config(["$analyticsProvider", function(e) {
            e.registerSetUsername(function(e) {
                window.Intercom && window.Intercom("update", {
                    user_id: e
                })
            }), e.registerEventTrack(function(e, t) {
                window.Intercom && window.Intercom("trackEvent", e, t)
            })
        }])
    }(angular),
    /**
     * @license Angulartics v0.19.2
     * (c) 2013 Luis Farzati http://luisfarzati.github.io/angulartics
     * Inspectlet support contributed by http://github.com/geordie--
     * License: MIT
     */
    function(e) {
        "use strict";
        e.module("angulartics.inspectlet", ["angulartics"]).config(["$analyticsProvider", function(e) {
            e.registerPageTrack(function(e) {
                var t = [];
                t.push("virtualPage"), e && t.push({
                    url: e
                }), __insp.push(t)
            }), e.registerEventTrack(function(e, t) {
                if ("identify" == e || "tagSession" == e) {
                    t.category && delete t.category;
                    var n = [];
                    n.push(e), n.push(t), __insp.push(n)
                }
            })
        }])
    }(angular),
    /**
     * @license Angulartics v0.19.2
     * (c) 2013 Luis Farzati http://luisfarzati.github.io/angulartics
     * Contributed by Jakub Hampl http://gampleman.eu
     * License: MIT
     */
    function(e) {
        "use strict";
        e.module("angulartics.newrelic.insights", ["angulartics"]).config(["$analyticsProvider", function(t) {
            angulartics.waitForVendorApi("newrelic", 100, function(n) {
                t.registerEventTrack(function(e, t) {
                    n.addPageAction(e, t)
                }), t.registerSetUsername(function(e) {
                    n.setCustomAttribute("username", e)
                }), t.registerSetAlias(function(e) {
                    n.setCustomAttribute("alias", e)
                }), t.registerSetUserProperties(function(t) {
                    e.forEach(t, function(e, t) {
                        n.setCustomAttribute(t, e)
                    })
                })
            })
        }])
    }(angular), ! function(e, t, n) {
        "use strict";
        t.module("angulartics.google.analytics", ["angulartics"]).config(["$analyticsProvider", function(r) {
            r.settings.pageTracking.trackRelativePath = !0, r.settings.ga = {
                additionalAccountNames: n,
                userId: null
            }, r.registerPageTrack(function(n) {
                e._gaq && (_gaq.push(["_trackPageview", n]), t.forEach(r.settings.ga.additionalAccountNames, function(e) {
                    _gaq.push([e + "._trackPageview", n])
                })), e.ga && (r.settings.ga.userId && ga("set", "&uid", r.settings.ga.userId), ga("send", "pageview", n), t.forEach(r.settings.ga.additionalAccountNames, function(e) {
                    ga(e + ".send", "pageview", n)
                }))
            }), r.registerEventTrack(function(n, i) {
                if (i && i.category || (i = i || {}, i.category = "Event"), i.value) {
                    var o = parseInt(i.value, 10);
                    i.value = isNaN(o) ? 0 : o
                }
                if (e.ga) {
                    for (var a = {
                            eventCategory: i.category,
                            eventAction: n,
                            eventLabel: i.label,
                            eventValue: i.value,
                            nonInteraction: i.noninteraction,
                            page: i.page || e.location.hash.substring(1) || e.location.pathname,
                            userId: r.settings.ga.userId
                        }, s = 1; 20 >= s; s++) i["dimension" + s.toString()] && (a["dimension" + s.toString()] = i["dimension" + s.toString()]), i["metric" + s.toString()] && (a["metric" + s.toString()] = i["metric" + s.toString()]);
                    ga("send", "event", a), t.forEach(r.settings.ga.additionalAccountNames, function(e) {
                        ga(e + ".send", "event", a)
                    })
                } else e._gaq && _gaq.push(["_trackEvent", i.category, n, i.label, i.value, i.noninteraction])
            }), r.registerSetUsername(function(e) {
                r.settings.ga.userId = e
            })
        }])
    }(window, window.angular),
    /*
     * ngDialog - easy modals and popup windows
     * http://github.com/likeastore/ngDialog
     * (c) 2013-2015 MIT License, https://likeastore.com
     */
    function(e, t) {
        "undefined" != typeof module && module.exports ? module.exports = t(require("angular")) : "function" == typeof define && define.amd ? define(["angular"], t) : t(e.angular)
    }(this, function(e) {
        "use strict";
        var t = e.module("ngDialog", []),
            n = e.element,
            r = e.isDefined,
            i = (document.body || document.documentElement).style,
            o = r(i.animation) || r(i.WebkitAnimation) || r(i.MozAnimation) || r(i.MsAnimation) || r(i.OAnimation),
            a = "animationend webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend",
            s = "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]",
            u = !1,
            l = {},
            c = [],
            f = !1;
        return t.provider("ngDialog", function() {
            var t = this.defaults = {
                className: "ngdialog-theme-default",
                plain: !1,
                showClose: !0,
                closeByDocument: !0,
                closeByEscape: !0,
                closeByNavigation: !1,
                appendTo: !1,
                preCloseCallback: !1,
                overlay: !0,
                cache: !0,
                trapFocus: !0,
                preserveFocus: !0,
                ariaAuto: !0,
                ariaRole: null,
                ariaLabelledById: null,
                ariaLabelledBySelector: null,
                ariaDescribedById: null,
                ariaDescribedBySelector: null
            };
            this.setForceBodyReload = function(e) {
                u = e || !1
            }, this.setDefaults = function(n) {
                e.extend(t, n)
            };
            var r, i = 0,
                d = 0,
                p = {};
            this.$get = ["$document", "$templateCache", "$compile", "$q", "$http", "$rootScope", "$timeout", "$window", "$controller", "$injector", function(h, g, v, m, $, y, w, b, x, C) {
                var k = h.find("body");
                u && y.$on("$locationChangeSuccess", function() {
                    k = h.find("body")
                });
                var S = {
                        onDocumentKeydown: function(e) {
                            27 === e.keyCode && T.close("$escape")
                        },
                        activate: function(e) {
                            var t = e.data("$ngDialogOptions");
                            t.trapFocus && (e.on("keydown", S.onTrapFocusKeydown), k.on("keydown", S.onTrapFocusKeydown))
                        },
                        deactivate: function(e) {
                            e.off("keydown", S.onTrapFocusKeydown), k.off("keydown", S.onTrapFocusKeydown)
                        },
                        deactivateAll: function() {
                            e.forEach(function(t) {
                                var n = e.element(t);
                                S.deactivate(n)
                            })
                        },
                        setBodyPadding: function(e) {
                            var t = parseInt(k.css("padding-right") || 0, 10);
                            k.css("padding-right", t + e + "px"), k.data("ng-dialog-original-padding", t)
                        },
                        resetBodyPadding: function() {
                            var e = k.data("ng-dialog-original-padding");
                            e ? k.css("padding-right", e + "px") : k.css("padding-right", "")
                        },
                        performCloseDialog: function(e, t) {
                            var n = e.attr("id"),
                                i = l[n];
                            if (i) {
                                if ("undefined" != typeof b.Hammer) {
                                    var s = i.hammerTime;
                                    s.off("tap", r), s.destroy && s.destroy(), delete i.hammerTime
                                } else e.unbind("click");
                                1 === d && k.unbind("keydown"), e.hasClass("ngdialog-closing") || (d -= 1);
                                var u = e.data("$ngDialogPreviousFocus");
                                u && u.focus(), y.$broadcast("ngDialog.closing", e), d = 0 > d ? 0 : d, o ? (i.$destroy(), e.unbind(a).bind(a, function() {
                                    e.remove(), 0 === d && (k.removeClass("ngdialog-open"), S.resetBodyPadding()), y.$broadcast("ngDialog.closed", e)
                                }).addClass("ngdialog-closing")) : (i.$destroy(), e.remove(), 0 === d && (k.removeClass("ngdialog-open"), S.resetBodyPadding()), y.$broadcast("ngDialog.closed", e)), p[n] && (p[n].resolve({
                                    id: n,
                                    value: t,
                                    $dialog: e,
                                    remainingDialogs: d
                                }), delete p[n]), l[n] && delete l[n], c.splice(c.indexOf(n), 1), c.length || (k.unbind("keydown", S.onDocumentKeydown), f = !1)
                            }
                        },
                        closeDialog: function(t, n) {
                            var r = t.data("$ngDialogPreCloseCallback");
                            if (r && e.isFunction(r)) {
                                var i = r.call(t, n);
                                e.isObject(i) ? i.closePromise ? i.closePromise.then(function() {
                                    S.performCloseDialog(t, n)
                                }) : i.then(function() {
                                    S.performCloseDialog(t, n)
                                }, function() {}) : i !== !1 && S.performCloseDialog(t, n)
                            } else S.performCloseDialog(t, n)
                        },
                        onTrapFocusKeydown: function(t) {
                            var n, r = e.element(t.currentTarget);
                            if (r.hasClass("ngdialog")) n = r;
                            else if (n = S.getActiveDialog(), null === n) return;
                            var i = 9 === t.keyCode,
                                o = t.shiftKey === !0;
                            i && S.handleTab(n, t, o)
                        },
                        handleTab: function(e, t, n) {
                            var r = S.getFocusableElements(e);
                            if (0 === r.length) return void(document.activeElement && document.activeElement.blur());
                            var i = document.activeElement,
                                o = Array.prototype.indexOf.call(r, i),
                                a = -1 === o,
                                s = 0 === o,
                                u = o === r.length - 1,
                                l = !1;
                            n ? (a || s) && (r[r.length - 1].focus(), l = !0) : (a || u) && (r[0].focus(), l = !0), l && (t.preventDefault(), t.stopPropagation())
                        },
                        autoFocus: function(e) {
                            var t = e[0],
                                r = t.querySelector("*[autofocus]");
                            if (null === r || (r.focus(), document.activeElement !== r)) {
                                var i = S.getFocusableElements(e);
                                if (i.length > 0) return void i[0].focus();
                                var o = S.filterVisibleElements(t.querySelectorAll("h1,h2,h3,h4,h5,h6,p,span"));
                                if (o.length > 0) {
                                    var a = o[0];
                                    n(a).attr("tabindex", "-1").css("outline", "0"), a.focus()
                                }
                            }
                        },
                        getFocusableElements: function(e) {
                            var t = e[0],
                                n = t.querySelectorAll(s);
                            return S.filterVisibleElements(n)
                        },
                        filterVisibleElements: function(e) {
                            for (var t = [], n = 0; n < e.length; n++) {
                                var r = e[n];
                                (r.offsetWidth > 0 || r.offsetHeight > 0) && t.push(r)
                            }
                            return t
                        },
                        getActiveDialog: function() {
                            var e = document.querySelectorAll(".ngdialog");
                            return 0 === e.length ? null : n(e[e.length - 1])
                        },
                        applyAriaAttributes: function(e, t) {
                            if (t.ariaAuto) {
                                if (!t.ariaRole) {
                                    var n = S.getFocusableElements(e).length > 0 ? "dialog" : "alertdialog";
                                    t.ariaRole = n
                                }
                                t.ariaLabelledBySelector || (t.ariaLabelledBySelector = "h1,h2,h3,h4,h5,h6"), t.ariaDescribedBySelector || (t.ariaDescribedBySelector = "article,section,p")
                            }
                            t.ariaRole && e.attr("role", t.ariaRole), S.applyAriaAttribute(e, "aria-labelledby", t.ariaLabelledById, t.ariaLabelledBySelector), S.applyAriaAttribute(e, "aria-describedby", t.ariaDescribedById, t.ariaDescribedBySelector)
                        },
                        applyAriaAttribute: function(e, t, r, i) {
                            if (r && e.attr(t, r), i) {
                                var o = e.attr("id"),
                                    a = e[0].querySelector(i);
                                if (!a) return;
                                var s = o + "-" + t;
                                return n(a).attr("id", s), e.attr(t, s), s
                            }
                        }
                    },
                    T = {
                        open: function(o) {
                            function a(e, t) {
                                return $.get(e, t || {}).then(function(e) {
                                    return e.data || ""
                                })
                            }

                            function s(t) {
                                return t ? e.isString(t) && u.plain ? t : "boolean" != typeof u.cache || u.cache ? g.get(t) || a(t, {
                                    cache: !0
                                }) : a(t, {
                                    cache: !1
                                }) : "Empty template"
                            }
                            var u = e.copy(t),
                                h = ++i,
                                E = "ngdialog" + h;
                            c.push(E), o = o || {}, e.extend(u, o);
                            var A;
                            p[E] = A = m.defer();
                            var O;
                            l[E] = O = e.isObject(u.scope) ? u.scope.$new() : y.$new();
                            var P, D, j = e.extend({}, u.resolve);
                            return e.forEach(j, function(t, n) {
                                j[n] = e.isString(t) ? C.get(t) : C.invoke(t, null, null, n)
                            }), m.all({
                                template: s(u.template || u.templateUrl),
                                locals: m.all(j)
                            }).then(function(t) {
                                var i = t.template,
                                    o = t.locals;
                                if (g.put(u.template || u.templateUrl, i), u.showClose && (i += '<div class="ngdialog-close"></div>'), P = n('<div id="ngdialog' + h + '" class="ngdialog"></div>'), P.html(u.overlay ? '<div class="ngdialog-overlay"></div><div class="ngdialog-content" role="document">' + i + "</div>" : '<div class="ngdialog-content" role="document">' + i + "</div>"), P.data("$ngDialogOptions", u), u.data && e.isString(u.data)) {
                                    var a = u.data.replace(/^\s*/, "")[0];
                                    O.ngDialogData = "{" === a || "[" === a ? e.fromJson(u.data) : u.data
                                } else u.data && e.isObject(u.data) && (O.ngDialogData = u.data);
                                if (u.controller && (e.isString(u.controller) || e.isArray(u.controller) || e.isFunction(u.controller))) {
                                    var s = u.controller;
                                    u.controllerAs && e.isString(u.controllerAs) && (s += " as " + u.controllerAs);
                                    var l = x(s, e.extend(o, {
                                        $scope: O,
                                        $element: P
                                    }));
                                    P.data("$ngDialogControllerController", l)
                                }
                                if (u.className && P.addClass(u.className), D = u.appendTo && e.isString(u.appendTo) ? e.element(document.querySelector(u.appendTo)) : k, S.applyAriaAttributes(P, u), u.preCloseCallback) {
                                    var c;
                                    e.isFunction(u.preCloseCallback) ? c = u.preCloseCallback : e.isString(u.preCloseCallback) && O && (e.isFunction(O[u.preCloseCallback]) ? c = O[u.preCloseCallback] : O.$parent && e.isFunction(O.$parent[u.preCloseCallback]) ? c = O.$parent[u.preCloseCallback] : y && e.isFunction(y[u.preCloseCallback]) && (c = y[u.preCloseCallback])), c && P.data("$ngDialogPreCloseCallback", c)
                                }
                                if (O.closeThisDialog = function(e) {
                                        S.closeDialog(P, e)
                                    }, w(function() {
                                        var e = document.querySelectorAll(".ngdialog");
                                        S.deactivateAll(e), v(P)(O);
                                        var t = b.innerWidth - k.prop("clientWidth");
                                        k.addClass("ngdialog-open");
                                        var n = t - (b.innerWidth - k.prop("clientWidth"));
                                        n > 0 && S.setBodyPadding(n), D.append(P), S.activate(P), u.trapFocus && S.autoFocus(P), u.name ? y.$broadcast("ngDialog.opened", {
                                            dialog: P,
                                            name: u.name
                                        }) : y.$broadcast("ngDialog.opened", P)
                                    }), f || (k.bind("keydown", S.onDocumentKeydown), f = !0), u.closeByNavigation && y.$on("$locationChangeSuccess", function() {
                                        S.closeDialog(P)
                                    }), u.preserveFocus && P.data("$ngDialogPreviousFocus", document.activeElement), r = function(e) {
                                        var t = u.closeByDocument ? n(e.target).hasClass("ngdialog-overlay") : !1,
                                            r = n(e.target).hasClass("ngdialog-close");
                                        (t || r) && T.close(P.attr("id"), r ? "$closeButton" : "$document")
                                    }, "undefined" != typeof b.Hammer) {
                                    var p = O.hammerTime = b.Hammer(P[0]);
                                    p.on("tap", r)
                                } else P.bind("click", r);
                                return d += 1, T
                            }), {
                                id: E,
                                closePromise: A.promise,
                                close: function(e) {
                                    S.closeDialog(P, e)
                                }
                            }
                        },
                        openConfirm: function(t) {
                            var r = m.defer(),
                                i = {
                                    closeByEscape: !1,
                                    closeByDocument: !1
                                };
                            e.extend(i, t), i.scope = e.isObject(i.scope) ? i.scope.$new() : y.$new(), i.scope.confirm = function(e) {
                                r.resolve(e);
                                var t = n(document.getElementById(o.id));
                                S.performCloseDialog(t, e)
                            };
                            var o = T.open(i);
                            return o.closePromise.then(function(e) {
                                return e ? r.reject(e.value) : r.reject()
                            }), r.promise
                        },
                        isOpen: function(e) {
                            var t = n(document.getElementById(e));
                            return t.length > 0
                        },
                        close: function(e, t) {
                            var r = n(document.getElementById(e));
                            if (r.length) S.closeDialog(r, t);
                            else if ("$escape" === e) {
                                var i = c[c.length - 1];
                                r = n(document.getElementById(i)), r.data("$ngDialogOptions").closeByEscape && S.closeDialog(r, t)
                            }
                            return T
                        },
                        closeAll: function(e) {
                            for (var t = document.querySelectorAll(".ngdialog"), r = t.length - 1; r >= 0; r--) {
                                var i = t[r];
                                S.closeDialog(n(i), e)
                            }
                        },
                        getDefaults: function() {
                            return t
                        }
                    };
                return T
            }]
        }), t.directive("ngDialog", ["ngDialog", function(t) {
            return {
                restrict: "A",
                scope: {
                    ngDialogScope: "="
                },
                link: function(n, r, i) {
                    r.on("click", function(r) {
                        r.preventDefault();
                        var o = e.isDefined(n.ngDialogScope) ? n.ngDialogScope : "noScope";
                        e.isDefined(i.ngDialogClosePrevious) && t.close(i.ngDialogClosePrevious);
                        var a = t.getDefaults();
                        t.open({
                            template: i.ngDialog,
                            className: i.ngDialogClass || a.className,
                            controller: i.ngDialogController,
                            controllerAs: i.ngDialogControllerAs,
                            scope: o,
                            data: i.ngDialogData,
                            showClose: "false" === i.ngDialogShowClose ? !1 : "true" === i.ngDialogShowClose ? !0 : a.showClose,
                            closeByDocument: "false" === i.ngDialogCloseByDocument ? !1 : "true" === i.ngDialogCloseByDocument ? !0 : a.closeByDocument,
                            closeByEscape: "false" === i.ngDialogCloseByEscape ? !1 : "true" === i.ngDialogCloseByEscape ? !0 : a.closeByEscape,
                            preCloseCallback: i.ngDialogPreCloseCallback || a.preCloseCallback
                        })
                    })
                }
            }
        }]), t
    });
var mod;
mod = angular.module("infinite-scroll", []), mod.value("THROTTLE_MILLISECONDS", null), mod.directive("infiniteScroll", ["$rootScope", "$window", "$interval", "THROTTLE_MILLISECONDS", function(e, t, n, r) {
        return {
            scope: {
                infiniteScroll: "&",
                infiniteScrollContainer: "=",
                infiniteScrollDistance: "=",
                infiniteScrollDisabled: "=",
                infiniteScrollUseDocumentBottom: "=",
                infiniteScrollListenForEvent: "@"
            },
            link: function(i, o, a) {
                var s, u, l, c, f, d, p, h, g, v, m, $, y, w, b, x, C, k;
                return k = angular.element(t), y = null, w = null, u = null, l = null, v = !0, C = !1, x = null, g = function(e) {
                    return e = e[0] || e, isNaN(e.offsetHeight) ? e.document.documentElement.clientHeight : e.offsetHeight
                }, m = function(e) {
                    return e[0].getBoundingClientRect && !e.css("none") ? e[0].getBoundingClientRect().top + $(e) : void 0
                }, $ = function(e) {
                    return e = e[0] || e, isNaN(window.pageYOffset) ? e.document.documentElement.scrollTop : e.ownerDocument.defaultView.pageYOffset
                }, h = function() {
                    var t, n, r, a, s;
                    return l === k ? (t = g(l) + $(l[0].document.documentElement), r = m(o) + g(o)) : (t = g(l), n = 0, void 0 !== m(l) && (n = m(l)), r = m(o) - n + g(o)), C && (r = g((o[0].ownerDocument || o[0].document).documentElement)), a = r - t, s = a <= g(l) * y + 1, s ? (u = !0, w ? i.$$phase || e.$$phase ? i.infiniteScroll() : i.$apply(i.infiniteScroll) : void 0) : u = !1
                }, b = function(e, t) {
                    var r, i, o;
                    return o = null, i = 0, r = function() {
                            var t;
                            return i = (new Date).getTime(), n.cancel(o), o = null, e.call(), t = null
                        },
                        function() {
                            var a, s;
                            return a = (new Date).getTime(), s = t - (a - i), 0 >= s ? (clearTimeout(o), n.cancel(o), o = null, i = a, e.call()) : o ? void 0 : o = n(r, s, 1)
                        }
                }, null != r && (h = b(h, r)), i.$on("$destroy", function() {
                    return l.unbind("scroll", h), null != x ? (x(), x = null) : void 0
                }), d = function(e) {
                    return y = parseFloat(e) || 0
                }, i.$watch("infiniteScrollDistance", d), d(i.infiniteScrollDistance), f = function(e) {
                    return w = !e, w && u ? (u = !1, h()) : void 0
                }, i.$watch("infiniteScrollDisabled", f), f(i.infiniteScrollDisabled), p = function(e) {
                    return C = e
                }, i.$watch("infiniteScrollUseDocumentBottom", p), p(i.infiniteScrollUseDocumentBottom), s = function(e) {
                    return null != l && l.unbind("scroll", h), l = e, null != e ? l.bind("scroll", h) : void 0
                }, s(k), i.infiniteScrollListenForEvent && (x = e.$on(i.infiniteScrollListenForEvent, h)), c = function(e) {
                    if (null != e && 0 !== e.length) {
                        if (e instanceof HTMLElement ? e = angular.element(e) : "function" == typeof e.append ? e = angular.element(e[e.length - 1]) : "string" == typeof e && (e = angular.element(document.querySelector(e))), null != e) return s(e);
                        throw new Exception("invalid infinite-scroll-container attribute.")
                    }
                }, i.$watch("infiniteScrollContainer", c), c(i.infiniteScrollContainer || []), null != a.infiniteScrollParent && s(angular.element(o.parent())), null != a.infiniteScrollImmediateCheck && (v = i.$eval(a.infiniteScrollImmediateCheck)), n(function() {
                    return v ? h() : void 0
                }, 0, 1)
            }
        }
    }]),
    function() {
        function e(e, t, n) {
            for (var r = (n || 0) - 1, i = e ? e.length : 0; ++r < i;)
                if (e[r] === t) return r;
            return -1
        }

        function t(t, n) {
            var r = typeof n;
            if (t = t.cache, "boolean" == r || null == n) return t[n] ? 0 : -1;
            "number" != r && "string" != r && (r = "object");
            var i = "number" == r ? n : y + n;
            return t = (t = t[r]) && t[i], "object" == r ? t && e(t, n) > -1 ? 0 : -1 : t ? 0 : -1
        }

        function n(e) {
            var t = this.cache,
                n = typeof e;
            if ("boolean" == n || null == e) t[e] = !0;
            else {
                "number" != n && "string" != n && (n = "object");
                var r = "number" == n ? e : y + e,
                    i = t[n] || (t[n] = {});
                "object" == n ? (i[r] || (i[r] = [])).push(e) : i[r] = !0
            }
        }

        function r(e) {
            return e.charCodeAt(0)
        }

        function i(e, t) {
            for (var n = e.criteria, r = t.criteria, i = -1, o = n.length; ++i < o;) {
                var a = n[i],
                    s = r[i];
                if (a !== s) {
                    if (a > s || "undefined" == typeof a) return 1;
                    if (s > a || "undefined" == typeof s) return -1
                }
            }
            return e.index - t.index
        }

        function o(e) {
            var t = -1,
                r = e.length,
                i = e[0],
                o = e[r / 2 | 0],
                a = e[r - 1];
            if (i && "object" == typeof i && o && "object" == typeof o && a && "object" == typeof a) return !1;
            var s = u();
            s["false"] = s["null"] = s["true"] = s.undefined = !1;
            var l = u();
            for (l.array = e, l.cache = s, l.push = n; ++t < r;) l.push(e[t]);
            return l
        }

        function a(e) {
            return "\\" + Z[e]
        }

        function s() {
            return g.pop() || []
        }

        function u() {
            return v.pop() || {
                array: null,
                cache: null,
                criteria: null,
                "false": !1,
                index: 0,
                "null": !1,
                number: null,
                object: null,
                push: null,
                string: null,
                "true": !1,
                undefined: !1,
                value: null
            }
        }

        function l(e) {
            return "function" != typeof e.toString && "string" == typeof(e + "")
        }

        function c(e) {
            e.length = 0, g.length < b && g.push(e)
        }

        function f(e) {
            var t = e.cache;
            t && f(t), e.array = e.cache = e.criteria = e.object = e.number = e.string = e.value = null, v.length < b && v.push(e)
        }

        function d(e, t, n) {
            t || (t = 0), "undefined" == typeof n && (n = e ? e.length : 0);
            for (var r = -1, i = n - t || 0, o = Array(0 > i ? 0 : i); ++r < i;) o[r] = e[t + r];
            return o
        }

        function p(n) {
            function g(e) {
                return e && "object" == typeof e && !fi(e) && Br.call(e, "__wrapped__") ? e : new v(e)
            }

            function v(e, t) {
                this.__chain__ = !!t, this.__wrapped__ = e
            }

            function b(e) {
                function t() {
                    if (r) {
                        var e = d(r);
                        zr.apply(e, arguments)
                    }
                    if (this instanceof t) {
                        var o = tt(n.prototype),
                            a = n.apply(o, e || arguments);
                        return Lt(a) ? a : o
                    }
                    return n.apply(i, e || arguments)
                }
                var n = e[0],
                    r = e[2],
                    i = e[4];
                return ci(t, e), t
            }

            function Z(e, t, n, r, i) {
                if (n) {
                    var o = n(e);
                    if ("undefined" != typeof o) return o
                }
                var a = Lt(e);
                if (!a) return e;
                var u = Lr.call(e);
                if (!X[u] || !ui.nodeClass && l(e)) return e;
                var f = ai[u];
                switch (u) {
                    case R:
                    case H:
                        return new f(+e);
                    case B:
                    case G:
                        return new f(e);
                    case W:
                        return o = f(e.source, A.exec(e)), o.lastIndex = e.lastIndex, o
                }
                var p = fi(e);
                if (t) {
                    var h = !r;
                    r || (r = s()), i || (i = s());
                    for (var g = r.length; g--;)
                        if (r[g] == e) return i[g];
                    o = p ? f(e.length) : {}
                } else o = p ? d(e) : xi({}, e);
                return p && (Br.call(e, "index") && (o.index = e.index), Br.call(e, "input") && (o.input = e.input)), t ? (r.push(e), i.push(o), (p ? bi : Si)(e, function(e, a) {
                    o[a] = Z(e, t, n, r, i)
                }), h && (c(r), c(i)), o) : o
            }

            function tt(e) {
                return Lt(e) ? Jr(e) : {}
            }

            function nt(e, t, n) {
                if ("function" != typeof e) return or;
                if ("undefined" == typeof t || !("prototype" in e)) return e;
                var r = e.__bindData__;
                if ("undefined" == typeof r && (ui.funcNames && (r = !e.name), r = r || !ui.funcDecomp, !r)) {
                    var i = Ur.call(e);
                    ui.funcNames || (r = !O.test(i)), r || (r = _.test(i), ci(e, r))
                }
                if (r === !1 || r !== !0 && 1 & r[1]) return e;
                switch (n) {
                    case 1:
                        return function(n) {
                            return e.call(t, n)
                        };
                    case 2:
                        return function(n, r) {
                            return e.call(t, n, r)
                        };
                    case 3:
                        return function(n, r, i) {
                            return e.call(t, n, r, i)
                        };
                    case 4:
                        return function(n, r, i, o) {
                            return e.call(t, n, r, i, o)
                        }
                }
                return Un(e, t)
            }

            function rt(e) {
                function t() {
                    var e = u ? a : this;
                    if (i) {
                        var h = d(i);
                        zr.apply(h, arguments)
                    }
                    if ((o || c) && (h || (h = d(arguments)), o && zr.apply(h, o), c && h.length < s)) return r |= 16, rt([n, f ? r : -4 & r, h, null, a, s]);
                    if (h || (h = arguments), l && (n = e[p]), this instanceof t) {
                        e = tt(n.prototype);
                        var g = n.apply(e, h);
                        return Lt(g) ? g : e
                    }
                    return n.apply(e, h)
                }
                var n = e[0],
                    r = e[1],
                    i = e[2],
                    o = e[3],
                    a = e[4],
                    s = e[5],
                    u = 1 & r,
                    l = 2 & r,
                    c = 4 & r,
                    f = 8 & r,
                    p = n;
                return ci(t, e), t
            }

            function it(n, r) {
                var i = -1,
                    a = gt(),
                    s = n ? n.length : 0,
                    u = s >= w && a === e,
                    l = [];
                if (u) {
                    var c = o(r);
                    c ? (a = t, r = c) : u = !1
                }
                for (; ++i < s;) {
                    var d = n[i];
                    a(r, d) < 0 && l.push(d)
                }
                return u && f(r), l
            }

            function at(e, t, n, r) {
                for (var i = (r || 0) - 1, o = e ? e.length : 0, a = []; ++i < o;) {
                    var s = e[i];
                    if (s && "object" == typeof s && "number" == typeof s.length && (fi(s) || yt(s))) {
                        t || (s = at(s, t, n));
                        var u = -1,
                            l = s.length,
                            c = a.length;
                        for (a.length += l; ++u < l;) a[c++] = s[u]
                    } else n || a.push(s)
                }
                return a
            }

            function st(e, t, n, r, i, o) {
                if (n) {
                    var a = n(e, t);
                    if ("undefined" != typeof a) return !!a
                }
                if (e === t) return 0 !== e || 1 / e == 1 / t;
                var u = typeof e,
                    f = typeof t;
                if (!(e !== e || e && Q[u] || t && Q[f])) return !1;
                if (null == e || null == t) return e === t;
                var d = Lr.call(e),
                    p = Lr.call(t);
                if (d == M && (d = z), p == M && (p = z), d != p) return !1;
                switch (d) {
                    case R:
                    case H:
                        return +e == +t;
                    case B:
                        return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
                    case W:
                    case G:
                        return e == Pr(t)
                }
                var h = d == q;
                if (!h) {
                    var g = Br.call(e, "__wrapped__"),
                        v = Br.call(t, "__wrapped__");
                    if (g || v) return st(g ? e.__wrapped__ : e, v ? t.__wrapped__ : t, n, r, i, o);
                    if (d != z || !ui.nodeClass && (l(e) || l(t))) return !1;
                    var m = !ui.argsObject && yt(e) ? Ar : e.constructor,
                        $ = !ui.argsObject && yt(t) ? Ar : t.constructor;
                    if (m != $ && !(It(m) && m instanceof m && It($) && $ instanceof $) && "constructor" in e && "constructor" in t) return !1
                }
                var y = !i;
                i || (i = s()), o || (o = s());
                for (var w = i.length; w--;)
                    if (i[w] == e) return o[w] == t;
                var b = 0;
                if (a = !0, i.push(e), o.push(t), h) {
                    if (w = e.length, b = t.length, a = b == w, a || r)
                        for (; b--;) {
                            var x = w,
                                C = t[b];
                            if (r)
                                for (; x-- && !(a = st(e[x], C, n, r, i, o)););
                            else if (!(a = st(e[b], C, n, r, i, o))) break
                        }
                } else ki(t, function(t, s, u) {
                    return Br.call(u, s) ? (b++, a = Br.call(e, s) && st(e[s], t, n, r, i, o)) : void 0
                }), a && !r && ki(e, function(e, t, n) {
                    return Br.call(n, t) ? a = --b > -1 : void 0
                });
                return i.pop(), o.pop(), y && (c(i), c(o)), a
            }

            function ut(e, t, n, r, i) {
                (fi(t) ? rn : Si)(t, function(t, o) {
                    var a, s, u = t,
                        l = e[o];
                    if (t && ((s = fi(t)) || Ti(t))) {
                        for (var c = r.length; c--;)
                            if (a = r[c] == t) {
                                l = i[c];
                                break
                            }
                        if (!a) {
                            var f;
                            n && (u = n(l, t), (f = "undefined" != typeof u) && (l = u)), f || (l = s ? fi(l) ? l : [] : Ti(l) ? l : {}), r.push(t), i.push(l), f || ut(l, t, n, r, i)
                        }
                    } else n && (u = n(l, t), "undefined" == typeof u && (u = t)), "undefined" != typeof u && (l = u);
                    e[o] = l
                })
            }

            function lt(e, t) {
                return e + Hr(oi() * (t - e + 1))
            }

            function ct(n, r, i) {
                var a = -1,
                    u = gt(),
                    l = n ? n.length : 0,
                    d = [],
                    p = !r && l >= w && u === e,
                    h = i || p ? s() : d;
                if (p) {
                    var g = o(h);
                    u = t, h = g
                }
                for (; ++a < l;) {
                    var v = n[a],
                        m = i ? i(v, a, n) : v;
                    (r ? !a || h[h.length - 1] !== m : u(h, m) < 0) && ((i || p) && h.push(m), d.push(v))
                }
                return p ? (c(h.array), f(h)) : i && c(h), d
            }

            function ft(e) {
                return function(t, n, r) {
                    var i = {};
                    if (n = g.createCallback(n, r, 3), fi(t))
                        for (var o = -1, a = t.length; ++o < a;) {
                            var s = t[o];
                            e(i, s, n(s, o, t), t)
                        } else bi(t, function(t, r, o) {
                            e(i, t, n(t, r, o), o)
                        });
                    return i
                }
            }

            function dt(e, t, n, r, i, o) {
                var a = 1 & t,
                    s = 2 & t,
                    u = 4 & t,
                    l = 16 & t,
                    c = 32 & t;
                if (!s && !It(e)) throw new Dr;
                l && !n.length && (t &= -17, l = n = !1), c && !r.length && (t &= -33, c = r = !1);
                var f = e && e.__bindData__;
                if (f && f !== !0) return f = d(f), f[2] && (f[2] = d(f[2])), f[3] && (f[3] = d(f[3])), !a || 1 & f[1] || (f[4] = i), !a && 1 & f[1] && (t |= 8), !u || 4 & f[1] || (f[5] = o), l && zr.apply(f[2] || (f[2] = []), n), c && Yr.apply(f[3] || (f[3] = []), r), f[1] |= t, dt.apply(null, f);
                var p = 1 == t || 17 === t ? b : rt;
                return p([e, t, n, r, i, o])
            }

            function pt() {
                J.shadowedProps = I, J.array = J.bottom = J.loop = J.top = "", J.init = "iterable", J.useHas = !0;
                for (var e, t = 0; e = arguments[t]; t++)
                    for (var n in e) J[n] = e[n];
                var r = J.args;
                J.firstArg = /^[^,]+/.exec(r)[0];
                var i = Sr("baseCreateCallback, errorClass, errorProto, hasOwnProperty, indicatorObject, isArguments, isArray, isString, keys, objectProto, objectTypes, nonEnumProps, stringClass, stringProto, toString", "return function(" + r + ") {\n" + li(J) + "\n}");
                return i(nt, U, _r, Br, $, yt, fi, Ut, J.keys, Fr, Q, si, G, Nr, Lr)
            }

            function ht(e) {
                return mi[e]
            }

            function gt() {
                var t = (t = g.indexOf) === Sn ? e : t;
                return t
            }

            function vt(e) {
                return "function" == typeof e && Mr.test(e)
            }

            function mt(e) {
                var t, n;
                return !e || Lr.call(e) != z || (t = e.constructor, It(t) && !(t instanceof t)) || !ui.argsClass && yt(e) || !ui.nodeClass && l(e) ? !1 : ui.ownLast ? (ki(e, function(e, t, r) {
                    return n = Br.call(r, t), !1
                }), n !== !1) : (ki(e, function(e, t) {
                    n = t
                }), "undefined" == typeof n || Br.call(e, n))
            }

            function $t(e) {
                return $i[e]
            }

            function yt(e) {
                return e && "object" == typeof e && "number" == typeof e.length && Lr.call(e) == M || !1
            }

            function wt(e, t, n, r) {
                return "boolean" != typeof t && null != t && (r = n, n = t, t = !1), Z(e, t, "function" == typeof n && nt(n, r, 1))
            }

            function bt(e, t, n) {
                return Z(e, !0, "function" == typeof t && nt(t, n, 1))
            }

            function xt(e, t) {
                var n = tt(e);
                return t ? xi(n, t) : n
            }

            function Ct(e, t, n) {
                var r;
                return t = g.createCallback(t, n, 3), Si(e, function(e, n, i) {
                    return t(e, n, i) ? (r = n, !1) : void 0
                }), r
            }

            function kt(e, t, n) {
                var r;
                return t = g.createCallback(t, n, 3), Tt(e, function(e, n, i) {
                    return t(e, n, i) ? (r = n, !1) : void 0
                }), r
            }

            function St(e, t, n) {
                var r = [];
                ki(e, function(e, t) {
                    r.push(t, e)
                });
                var i = r.length;
                for (t = nt(t, n, 3); i-- && t(r[i--], r[i], e) !== !1;);
                return e
            }

            function Tt(e, t, n) {
                var r = pi(e),
                    i = r.length;
                for (t = nt(t, n, 3); i--;) {
                    var o = r[i];
                    if (t(e[o], o, e) === !1) break
                }
                return e
            }

            function Et(e) {
                var t = [];
                return ki(e, function(e, n) {
                    It(e) && t.push(n)
                }), t.sort()
            }

            function At(e, t) {
                return e ? Br.call(e, t) : !1
            }

            function Ot(e) {
                for (var t = -1, n = pi(e), r = n.length, i = {}; ++t < r;) {
                    var o = n[t];
                    i[e[o]] = o
                }
                return i
            }

            function Pt(e) {
                return e === !0 || e === !1 || e && "object" == typeof e && Lr.call(e) == R || !1
            }

            function Dt(e) {
                return e && "object" == typeof e && Lr.call(e) == H || !1
            }

            function jt(e) {
                return e && 1 === e.nodeType || !1
            }

            function _t(e) {
                var t = !0;
                if (!e) return t;
                var n = Lr.call(e),
                    r = e.length;
                return n == q || n == G || (ui.argsClass ? n == M : yt(e)) || n == z && "number" == typeof r && It(e.splice) ? !r : (Si(e, function() {
                    return t = !1
                }), t)
            }

            function Ft(e, t, n, r) {
                return st(e, t, "function" == typeof n && nt(n, r, 2))
            }

            function Nt(e) {
                return Zr(e) && !ei(parseFloat(e))
            }

            function It(e) {
                return "function" == typeof e
            }

            function Lt(e) {
                return !(!e || !Q[typeof e])
            }

            function Mt(e) {
                return Rt(e) && e != +e
            }

            function qt(e) {
                return null === e
            }

            function Rt(e) {
                return "number" == typeof e || e && "object" == typeof e && Lr.call(e) == B || !1
            }

            function Ht(e) {
                return e && Q[typeof e] && Lr.call(e) == W || !1
            }

            function Ut(e) {
                return "string" == typeof e || e && "object" == typeof e && Lr.call(e) == G || !1
            }

            function Vt(e) {
                return "undefined" == typeof e
            }

            function Bt(e, t, n) {
                var r = {};
                return t = g.createCallback(t, n, 3), Si(e, function(e, n, i) {
                    r[n] = t(e, n, i)
                }), r
            }

            function zt(e) {
                var t = arguments,
                    n = 2;
                if (!Lt(e)) return e;
                if ("number" != typeof t[2] && (n = t.length), n > 3 && "function" == typeof t[n - 2]) var r = nt(t[--n - 1], t[n--], 2);
                else n > 2 && "function" == typeof t[n - 1] && (r = t[--n]);
                for (var i = d(arguments, 1, n), o = -1, a = s(), u = s(); ++o < n;) ut(e, i[o], r, a, u);
                return c(a), c(u), e
            }

            function Wt(e, t, n) {
                var r = {};
                if ("function" != typeof t) {
                    var i = [];
                    ki(e, function(e, t) {
                        i.push(t)
                    }), i = it(i, at(arguments, !0, !1, 1));
                    for (var o = -1, a = i.length; ++o < a;) {
                        var s = i[o];
                        r[s] = e[s]
                    }
                } else t = g.createCallback(t, n, 3), ki(e, function(e, n, i) {
                    t(e, n, i) || (r[n] = e)
                });
                return r
            }

            function Gt(e) {
                for (var t = -1, n = pi(e), r = n.length, i = br(r); ++t < r;) {
                    var o = n[t];
                    i[t] = [o, e[o]]
                }
                return i
            }

            function Xt(e, t, n) {
                var r = {};
                if ("function" != typeof t)
                    for (var i = -1, o = at(arguments, !0, !1, 1), a = Lt(e) ? o.length : 0; ++i < a;) {
                        var s = o[i];
                        s in e && (r[s] = e[s])
                    } else t = g.createCallback(t, n, 3), ki(e, function(e, n, i) {
                        t(e, n, i) && (r[n] = e)
                    });
                return r
            }

            function Yt(e, t, n, r) {
                var i = fi(e);
                if (null == n)
                    if (i) n = [];
                    else {
                        var o = e && e.constructor,
                            a = o && o.prototype;
                        n = tt(a)
                    }
                return t && (t = g.createCallback(t, r, 4), (i ? bi : Si)(e, function(e, r, i) {
                    return t(n, e, r, i)
                })), n
            }

            function Kt(e) {
                for (var t = -1, n = pi(e), r = n.length, i = br(r); ++t < r;) i[t] = e[n[t]];
                return i
            }

            function Jt(e) {
                var t = arguments,
                    n = -1,
                    r = at(t, !0, !1, 1),
                    i = t[2] && t[2][t[1]] === e ? 1 : r.length,
                    o = br(i);
                for (ui.unindexedChars && Ut(e) && (e = e.split("")); ++n < i;) o[n] = e[r[n]];
                return o
            }

            function Qt(e, t, n) {
                var r = -1,
                    i = gt(),
                    o = e ? e.length : 0,
                    a = !1;
                return n = (0 > n ? ni(0, o + n) : n) || 0, fi(e) ? a = i(e, t, n) > -1 : "number" == typeof o ? a = (Ut(e) ? e.indexOf(t, n) : i(e, t, n)) > -1 : bi(e, function(e) {
                    return ++r >= n ? !(a = e === t) : void 0
                }), a
            }

            function Zt(e, t, n) {
                var r = !0;
                if (t = g.createCallback(t, n, 3), fi(e))
                    for (var i = -1, o = e.length; ++i < o && (r = !!t(e[i], i, e)););
                else bi(e, function(e, n, i) {
                    return r = !!t(e, n, i)
                });
                return r
            }

            function en(e, t, n) {
                var r = [];
                if (t = g.createCallback(t, n, 3), fi(e))
                    for (var i = -1, o = e.length; ++i < o;) {
                        var a = e[i];
                        t(a, i, e) && r.push(a)
                    } else bi(e, function(e, n, i) {
                        t(e, n, i) && r.push(e)
                    });
                return r
            }

            function tn(e, t, n) {
                if (t = g.createCallback(t, n, 3), !fi(e)) {
                    var r;
                    return bi(e, function(e, n, i) {
                        return t(e, n, i) ? (r = e, !1) : void 0
                    }), r
                }
                for (var i = -1, o = e.length; ++i < o;) {
                    var a = e[i];
                    if (t(a, i, e)) return a
                }
            }

            function nn(e, t, n) {
                var r;
                return t = g.createCallback(t, n, 3), on(e, function(e, n, i) {
                    return t(e, n, i) ? (r = e, !1) : void 0
                }), r
            }

            function rn(e, t, n) {
                if (t && "undefined" == typeof n && fi(e))
                    for (var r = -1, i = e.length; ++r < i && t(e[r], r, e) !== !1;);
                else bi(e, t, n);
                return e
            }

            function on(e, t, n) {
                var r = e,
                    i = e ? e.length : 0;
                if (t = t && "undefined" == typeof n ? t : nt(t, n, 3), fi(e))
                    for (; i-- && t(e[i], i, e) !== !1;);
                else {
                    if ("number" != typeof i) {
                        var o = pi(e);
                        i = o.length
                    } else ui.unindexedChars && Ut(e) && (r = e.split(""));
                    bi(e, function(e, n, a) {
                        return n = o ? o[--i] : --i, t(r[n], n, a)
                    })
                }
                return e
            }

            function an(e, t) {
                var n = d(arguments, 2),
                    r = -1,
                    i = "function" == typeof t,
                    o = e ? e.length : 0,
                    a = br("number" == typeof o ? o : 0);
                return rn(e, function(e) {
                    a[++r] = (i ? t : e[t]).apply(e, n)
                }), a
            }

            function sn(e, t, n) {
                var r = -1,
                    i = e ? e.length : 0,
                    o = br("number" == typeof i ? i : 0);
                if (t = g.createCallback(t, n, 3), fi(e))
                    for (; ++r < i;) o[r] = t(e[r], r, e);
                else bi(e, function(e, n, i) {
                    o[++r] = t(e, n, i)
                });
                return o
            }

            function un(e, t, n) {
                var i = -1 / 0,
                    o = i;
                if ("function" != typeof t && n && n[t] === e && (t = null), null == t && fi(e))
                    for (var a = -1, s = e.length; ++a < s;) {
                        var u = e[a];
                        u > o && (o = u)
                    } else t = null == t && Ut(e) ? r : g.createCallback(t, n, 3), bi(e, function(e, n, r) {
                        var a = t(e, n, r);
                        a > i && (i = a, o = e)
                    });
                return o
            }

            function ln(e, t, n) {
                var i = 1 / 0,
                    o = i;
                if ("function" != typeof t && n && n[t] === e && (t = null), null == t && fi(e))
                    for (var a = -1, s = e.length; ++a < s;) {
                        var u = e[a];
                        o > u && (o = u)
                    } else t = null == t && Ut(e) ? r : g.createCallback(t, n, 3), bi(e, function(e, n, r) {
                        var a = t(e, n, r);
                        i > a && (i = a, o = e)
                    });
                return o
            }

            function cn(e, t, n, r) {
                var i = arguments.length < 3;
                if (t = g.createCallback(t, r, 4), fi(e)) {
                    var o = -1,
                        a = e.length;
                    for (i && (n = e[++o]); ++o < a;) n = t(n, e[o], o, e)
                } else bi(e, function(e, r, o) {
                    n = i ? (i = !1, e) : t(n, e, r, o)
                });
                return n
            }

            function fn(e, t, n, r) {
                var i = arguments.length < 3;
                return t = g.createCallback(t, r, 4), on(e, function(e, r, o) {
                    n = i ? (i = !1, e) : t(n, e, r, o)
                }), n
            }

            function dn(e, t, n) {
                return t = g.createCallback(t, n, 3), en(e, function(e, n, r) {
                    return !t(e, n, r)
                })
            }

            function pn(e, t, n) {
                if (e && "number" != typeof e.length ? e = Kt(e) : ui.unindexedChars && Ut(e) && (e = e.split("")), null == t || n) return e ? e[lt(0, e.length - 1)] : h;
                var r = hn(e);
                return r.length = ri(ni(0, t), r.length), r
            }

            function hn(e) {
                var t = -1,
                    n = e ? e.length : 0,
                    r = br("number" == typeof n ? n : 0);
                return rn(e, function(e) {
                    var n = lt(0, ++t);
                    r[t] = r[n], r[n] = e
                }), r
            }

            function gn(e) {
                var t = e ? e.length : 0;
                return "number" == typeof t ? t : pi(e).length
            }

            function vn(e, t, n) {
                var r;
                if (t = g.createCallback(t, n, 3), fi(e))
                    for (var i = -1, o = e.length; ++i < o && !(r = t(e[i], i, e)););
                else bi(e, function(e, n, i) {
                    return !(r = t(e, n, i))
                });
                return !!r
            }

            function mn(e, t, n) {
                var r = -1,
                    o = fi(t),
                    a = e ? e.length : 0,
                    l = br("number" == typeof a ? a : 0);
                for (o || (t = g.createCallback(t, n, 3)), rn(e, function(e, n, i) {
                        var a = l[++r] = u();
                        o ? a.criteria = sn(t, function(t) {
                            return e[t]
                        }) : (a.criteria = s())[0] = t(e, n, i), a.index = r, a.value = e
                    }), a = l.length, l.sort(i); a--;) {
                    var d = l[a];
                    l[a] = d.value, o || c(d.criteria), f(d)
                }
                return l
            }

            function $n(e) {
                return e && "number" == typeof e.length ? ui.unindexedChars && Ut(e) ? e.split("") : d(e) : Kt(e)
            }

            function yn(e) {
                for (var t = -1, n = e ? e.length : 0, r = []; ++t < n;) {
                    var i = e[t];
                    i && r.push(i)
                }
                return r
            }

            function wn(e) {
                return it(e, at(arguments, !0, !0, 1))
            }

            function bn(e, t, n) {
                var r = -1,
                    i = e ? e.length : 0;
                for (t = g.createCallback(t, n, 3); ++r < i;)
                    if (t(e[r], r, e)) return r;
                return -1
            }

            function xn(e, t, n) {
                var r = e ? e.length : 0;
                for (t = g.createCallback(t, n, 3); r--;)
                    if (t(e[r], r, e)) return r;
                return -1
            }

            function Cn(e, t, n) {
                var r = 0,
                    i = e ? e.length : 0;
                if ("number" != typeof t && null != t) {
                    var o = -1;
                    for (t = g.createCallback(t, n, 3); ++o < i && t(e[o], o, e);) r++
                } else if (r = t, null == r || n) return e ? e[0] : h;
                return d(e, 0, ri(ni(0, r), i))
            }

            function kn(e, t, n, r) {
                return "boolean" != typeof t && null != t && (r = n, n = "function" != typeof t && r && r[t] === e ? null : t, t = !1), null != n && (e = sn(e, n, r)), at(e, t)
            }

            function Sn(t, n, r) {
                if ("number" == typeof r) {
                    var i = t ? t.length : 0;
                    r = 0 > r ? ni(0, i + r) : r || 0
                } else if (r) {
                    var o = Fn(t, n);
                    return t[o] === n ? o : -1
                }
                return e(t, n, r)
            }

            function Tn(e, t, n) {
                var r = 0,
                    i = e ? e.length : 0;
                if ("number" != typeof t && null != t) {
                    var o = i;
                    for (t = g.createCallback(t, n, 3); o-- && t(e[o], o, e);) r++
                } else r = null == t || n ? 1 : t || r;
                return d(e, 0, ri(ni(0, i - r), i))
            }

            function En() {
                for (var n = [], r = -1, i = arguments.length, a = s(), u = gt(), l = u === e, d = s(); ++r < i;) {
                    var p = arguments[r];
                    (fi(p) || yt(p)) && (n.push(p), a.push(l && p.length >= w && o(r ? n[r] : d)))
                }
                var h = n[0],
                    g = -1,
                    v = h ? h.length : 0,
                    m = [];
                e: for (; ++g < v;) {
                    var $ = a[0];
                    if (p = h[g], ($ ? t($, p) : u(d, p)) < 0) {
                        for (r = i, ($ || d).push(p); --r;)
                            if ($ = a[r], ($ ? t($, p) : u(n[r], p)) < 0) continue e;
                        m.push(p)
                    }
                }
                for (; i--;) $ = a[i], $ && f($);
                return c(a), c(d), m
            }

            function An(e, t, n) {
                var r = 0,
                    i = e ? e.length : 0;
                if ("number" != typeof t && null != t) {
                    var o = i;
                    for (t = g.createCallback(t, n, 3); o-- && t(e[o], o, e);) r++
                } else if (r = t, null == r || n) return e ? e[i - 1] : h;
                return d(e, ni(0, i - r))
            }

            function On(e, t, n) {
                var r = e ? e.length : 0;
                for ("number" == typeof n && (r = (0 > n ? ni(0, r + n) : ri(n, r - 1)) + 1); r--;)
                    if (e[r] === t) return r;
                return -1
            }

            function Pn(e) {
                for (var t = arguments, n = 0, r = t.length, i = e ? e.length : 0; ++n < r;)
                    for (var o = -1, a = t[n]; ++o < i;) e[o] === a && (Xr.call(e, o--, 1), i--);
                return e
            }

            function Dn(e, t, n) {
                e = +e || 0, n = "number" == typeof n ? n : +n || 1, null == t && (t = e, e = 0);
                for (var r = -1, i = ni(0, qr((t - e) / (n || 1))), o = br(i); ++r < i;) o[r] = e, e += n;
                return o
            }

            function jn(e, t, n) {
                var r = -1,
                    i = e ? e.length : 0,
                    o = [];
                for (t = g.createCallback(t, n, 3); ++r < i;) {
                    var a = e[r];
                    t(a, r, e) && (o.push(a), Xr.call(e, r--, 1), i--)
                }
                return o
            }

            function _n(e, t, n) {
                if ("number" != typeof t && null != t) {
                    var r = 0,
                        i = -1,
                        o = e ? e.length : 0;
                    for (t = g.createCallback(t, n, 3); ++i < o && t(e[i], i, e);) r++
                } else r = null == t || n ? 1 : ni(0, t);
                return d(e, r)
            }

            function Fn(e, t, n, r) {
                var i = 0,
                    o = e ? e.length : i;
                for (n = n ? g.createCallback(n, r, 1) : or, t = n(t); o > i;) {
                    var a = i + o >>> 1;
                    n(e[a]) < t ? i = a + 1 : o = a
                }
                return i
            }

            function Nn() {
                return ct(at(arguments, !0, !0))
            }

            function In(e, t, n, r) {
                return "boolean" != typeof t && null != t && (r = n, n = "function" != typeof t && r && r[t] === e ? null : t, t = !1), null != n && (n = g.createCallback(n, r, 3)), ct(e, t, n)
            }

            function Ln(e) {
                return it(e, d(arguments, 1))
            }

            function Mn() {
                for (var e = -1, t = arguments.length; ++e < t;) {
                    var n = arguments[e];
                    if (fi(n) || yt(n)) var r = r ? ct(it(r, n).concat(it(n, r))) : n
                }
                return r || []
            }

            function qn() {
                for (var e = arguments.length > 1 ? arguments : arguments[0], t = -1, n = e ? un(Pi(e, "length")) : 0, r = br(0 > n ? 0 : n); ++t < n;) r[t] = Pi(e, t);
                return r
            }

            function Rn(e, t) {
                var n = -1,
                    r = e ? e.length : 0,
                    i = {};
                for (t || !r || fi(e[0]) || (t = []); ++n < r;) {
                    var o = e[n];
                    t ? i[o] = t[n] : o && (i[o[0]] = o[1])
                }
                return i
            }

            function Hn(e, t) {
                if (!It(t)) throw new Dr;
                return function() {
                    return --e < 1 ? t.apply(this, arguments) : void 0
                }
            }

            function Un(e, t) {
                return arguments.length > 2 ? dt(e, 17, d(arguments, 2), null, t) : dt(e, 1, null, null, t)
            }

            function Vn(e) {
                for (var t = arguments.length > 1 ? at(arguments, !0, !1, 1) : Et(e), n = -1, r = t.length; ++n < r;) {
                    var i = t[n];
                    e[i] = dt(e[i], 1, null, null, e)
                }
                return e
            }

            function Bn(e, t) {
                return arguments.length > 2 ? dt(t, 19, d(arguments, 2), null, e) : dt(t, 3, null, null, e)
            }

            function zn() {
                for (var e = arguments, t = e.length; t--;)
                    if (!It(e[t])) throw new Dr;
                return function() {
                    for (var t = arguments, n = e.length; n--;) t = [e[n].apply(this, t)];
                    return t[0]
                }
            }

            function Wn(e, t) {
                return t = "number" == typeof t ? t : +t || e.length, dt(e, 4, null, null, null, t)
            }

            function Gn(e, t, n) {
                var r, i, o, a, s, u, l, c = 0,
                    f = !1,
                    d = !0;
                if (!It(e)) throw new Dr;
                if (t = ni(0, t) || 0, n === !0) {
                    var p = !0;
                    d = !1
                } else Lt(n) && (p = n.leading, f = "maxWait" in n && (ni(t, n.maxWait) || 0), d = "trailing" in n ? n.trailing : d);
                var g = function() {
                        var n = t - (ji() - a);
                        if (0 >= n) {
                            i && Rr(i);
                            var f = l;
                            i = u = l = h, f && (c = ji(), o = e.apply(s, r), u || i || (r = s = null))
                        } else u = Gr(g, n)
                    },
                    v = function() {
                        u && Rr(u), i = u = l = h, (d || f !== t) && (c = ji(), o = e.apply(s, r), u || i || (r = s = null))
                    };
                return function() {
                    if (r = arguments, a = ji(), s = this, l = d && (u || !p), f === !1) var n = p && !u;
                    else {
                        i || p || (c = a);
                        var h = f - (a - c),
                            m = 0 >= h;
                        m ? (i && (i = Rr(i)), c = a, o = e.apply(s, r)) : i || (i = Gr(v, h))
                    }
                    return m && u ? u = Rr(u) : u || t === f || (u = Gr(g, t)), n && (m = !0, o = e.apply(s, r)), !m || u || i || (r = s = null), o
                }
            }

            function Xn(e) {
                if (!It(e)) throw new Dr;
                var t = d(arguments, 1);
                return Gr(function() {
                    e.apply(h, t)
                }, 1)
            }

            function Yn(e, t) {
                if (!It(e)) throw new Dr;
                var n = d(arguments, 2);
                return Gr(function() {
                    e.apply(h, n)
                }, t)
            }

            function Kn(e, t) {
                if (!It(e)) throw new Dr;
                var n = function() {
                    var r = n.cache,
                        i = t ? t.apply(this, arguments) : y + arguments[0];
                    return Br.call(r, i) ? r[i] : r[i] = e.apply(this, arguments)
                };
                return n.cache = {}, n
            }

            function Jn(e) {
                var t, n;
                if (!It(e)) throw new Dr;
                return function() {
                    return t ? n : (t = !0, n = e.apply(this, arguments), e = null, n)
                }
            }

            function Qn(e) {
                return dt(e, 16, d(arguments, 1))
            }

            function Zn(e) {
                return dt(e, 32, null, d(arguments, 1))
            }

            function er(e, t, n) {
                var r = !0,
                    i = !0;
                if (!It(e)) throw new Dr;
                return n === !1 ? r = !1 : Lt(n) && (r = "leading" in n ? n.leading : r, i = "trailing" in n ? n.trailing : i), Y.leading = r, Y.maxWait = t, Y.trailing = i, Gn(e, t, Y)
            }

            function tr(e, t) {
                return dt(t, 16, [e])
            }

            function nr(e) {
                return function() {
                    return e
                }
            }

            function rr(e, t, n) {
                var r = typeof e;
                if (null == e || "function" == r) return nt(e, t, n);
                if ("object" != r) return lr(e);
                var i = pi(e),
                    o = i[0],
                    a = e[o];
                return 1 != i.length || a !== a || Lt(a) ? function(t) {
                    for (var n = i.length, r = !1; n-- && (r = st(t[i[n]], e[i[n]], null, !0)););
                    return r
                } : function(e) {
                    var t = e[o];
                    return a === t && (0 !== a || 1 / a == 1 / t)
                }
            }

            function ir(e) {
                return null == e ? "" : Pr(e).replace(wi, ht)
            }

            function or(e) {
                return e
            }

            function ar(e, t, n) {
                var r = !0,
                    i = t && Et(t);
                t && (n || i.length) || (null == n && (n = t), o = v, t = e, e = g, i = Et(t)), n === !1 ? r = !1 : Lt(n) && "chain" in n && (r = n.chain);
                var o = e,
                    a = It(o);
                rn(i, function(n) {
                    var i = e[n] = t[n];
                    a && (o.prototype[n] = function() {
                        var t = this.__chain__,
                            n = this.__wrapped__,
                            a = [n];
                        zr.apply(a, arguments);
                        var s = i.apply(e, a);
                        if (r || t) {
                            if (n === s && Lt(s)) return this;
                            s = new o(s), s.__chain__ = t
                        }
                        return s
                    })
                })
            }

            function sr() {
                return n._ = Ir, this
            }

            function ur() {}

            function lr(e) {
                return function(t) {
                    return t[e]
                }
            }

            function cr(e, t, n) {
                var r = null == e,
                    i = null == t;
                if (null == n && ("boolean" == typeof e && i ? (n = e, e = 1) : i || "boolean" != typeof t || (n = t, i = !0)), r && i && (t = 1), e = +e || 0, i ? (t = e, e = 0) : t = +t || 0, n || e % 1 || t % 1) {
                    var o = oi();
                    return ri(e + o * (t - e + parseFloat("1e-" + ((o + "").length - 1))), t)
                }
                return lt(e, t)
            }

            function fr(e, t) {
                if (e) {
                    var n = e[t];
                    return It(n) ? e[t]() : n
                }
            }

            function dr(e, t, n) {
                var r = g.templateSettings;
                e = Pr(e || ""), n = Ci({}, n, r);
                var i, o = Ci({}, n.imports, r.imports),
                    s = pi(o),
                    u = Kt(o),
                    l = 0,
                    c = n.interpolate || j,
                    f = "__p += '",
                    d = Or((n.escape || j).source + "|" + c.source + "|" + (c === P ? E : j).source + "|" + (n.evaluate || j).source + "|$", "g");
                e.replace(d, function(t, n, r, o, s, u) {
                    return r || (r = o), f += e.slice(l, u).replace(F, a), n && (f += "' +\n__e(" + n + ") +\n'"), s && (i = !0, f += "';\n" + s + ";\n__p += '"), r && (f += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), l = u + t.length, t
                }), f += "';\n";
                var p = n.variable,
                    v = p;
                v || (p = "obj", f = "with (" + p + ") {\n" + f + "\n}\n"), f = (i ? f.replace(C, "") : f).replace(S, "$1").replace(T, "$1;"), f = "function(" + p + ") {\n" + (v ? "" : p + " || (" + p + " = {});\n") + "var __t, __p = '', __e = _.escape" + (i ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + f + "return __p\n}";
                var m = "\n/*\n//# sourceURL=" + (n.sourceURL || "/lodash/template/source[" + L++ + "]") + "\n*/";
                try {
                    var $ = Sr(s, "return " + f + m).apply(h, u)
                } catch (y) {
                    throw y.source = f, y
                }
                return t ? $(t) : ($.source = f, $)
            }

            function pr(e, t, n) {
                e = (e = +e) > -1 ? e : 0;
                var r = -1,
                    i = br(e);
                for (t = nt(t, n, 1); ++r < e;) i[r] = t(r);
                return i
            }

            function hr(e) {
                return null == e ? "" : Pr(e).replace(yi, $t)
            }

            function gr(e) {
                var t = ++m;
                return Pr(null == e ? "" : e) + t
            }

            function vr(e) {
                return e = new v(e), e.__chain__ = !0, e
            }

            function mr(e, t) {
                return t(e), e
            }

            function $r() {
                return this.__chain__ = !0, this
            }

            function yr() {
                return Pr(this.__wrapped__)
            }

            function wr() {
                return this.__wrapped__
            }
            n = n ? ot.defaults(et.Object(), n, ot.pick(et, N)) : et;
            var br = n.Array,
                xr = n.Boolean,
                Cr = n.Date,
                kr = n.Error,
                Sr = n.Function,
                Tr = n.Math,
                Er = n.Number,
                Ar = n.Object,
                Or = n.RegExp,
                Pr = n.String,
                Dr = n.TypeError,
                jr = [],
                _r = kr.prototype,
                Fr = Ar.prototype,
                Nr = Pr.prototype,
                Ir = n._,
                Lr = Fr.toString,
                Mr = Or("^" + Pr(Lr).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"),
                qr = Tr.ceil,
                Rr = n.clearTimeout,
                Hr = Tr.floor,
                Ur = Sr.prototype.toString,
                Vr = vt(Vr = Ar.getPrototypeOf) && Vr,
                Br = Fr.hasOwnProperty,
                zr = jr.push,
                Wr = Fr.propertyIsEnumerable,
                Gr = n.setTimeout,
                Xr = jr.splice,
                Yr = jr.unshift,
                Kr = function() {
                    try {
                        var e = {},
                            t = vt(t = Ar.defineProperty) && t,
                            n = t(e, e, e) && t
                    } catch (r) {}
                    return n
                }(),
                Jr = vt(Jr = Ar.create) && Jr,
                Qr = vt(Qr = br.isArray) && Qr,
                Zr = n.isFinite,
                ei = n.isNaN,
                ti = vt(ti = Ar.keys) && ti,
                ni = Tr.max,
                ri = Tr.min,
                ii = n.parseInt,
                oi = Tr.random,
                ai = {};
            ai[q] = br, ai[R] = xr, ai[H] = Cr, ai[V] = Sr, ai[z] = Ar, ai[B] = Er, ai[W] = Or, ai[G] = Pr;
            var si = {};
            si[q] = si[H] = si[B] = {
                    constructor: !0,
                    toLocaleString: !0,
                    toString: !0,
                    valueOf: !0
                }, si[R] = si[G] = {
                    constructor: !0,
                    toString: !0,
                    valueOf: !0
                }, si[U] = si[V] = si[W] = {
                    constructor: !0,
                    toString: !0
                }, si[z] = {
                    constructor: !0
                },
                function() {
                    for (var e = I.length; e--;) {
                        var t = I[e];
                        for (var n in si) Br.call(si, n) && !Br.call(si[n], t) && (si[n][t] = !1)
                    }
                }(), v.prototype = g.prototype;
            var ui = g.support = {};
            ! function() {
                var e = function() {
                        this.x = 1
                    },
                    t = {
                        0: 1,
                        length: 1
                    },
                    r = [];
                e.prototype = {
                    valueOf: 1,
                    y: 1
                };
                for (var i in new e) r.push(i);
                for (i in arguments);
                ui.argsClass = Lr.call(arguments) == M, ui.argsObject = arguments.constructor == Ar && !(arguments instanceof br), ui.enumErrorProps = Wr.call(_r, "message") || Wr.call(_r, "name"), ui.enumPrototypes = Wr.call(e, "prototype"), ui.funcDecomp = !vt(n.WinRTError) && _.test(p), ui.funcNames = "string" == typeof Sr.name, ui.nonEnumArgs = 0 != i, ui.nonEnumShadows = !/valueOf/.test(r), ui.ownLast = "x" != r[0], ui.spliceObjects = (jr.splice.call(t, 0, 1), !t[0]), ui.unindexedChars = "x" [0] + Ar("x")[0] != "xx";
                try {
                    ui.nodeClass = !(Lr.call(document) == z && !({
                        toString: 0
                    } + ""))
                } catch (o) {
                    ui.nodeClass = !0
                }
            }(1), g.templateSettings = {
                escape: /<%-([\s\S]+?)%>/g,
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: P,
                variable: "",
                imports: {
                    _: g
                }
            };
            var li = function(e) {
                var t = "var index, iterable = " + e.firstArg + ", result = " + e.init + ";\nif (!iterable) return result;\n" + e.top + ";";
                e.array ? (t += "\nvar length = iterable.length; index = -1;\nif (" + e.array + ") {  ", ui.unindexedChars && (t += "\n  if (isString(iterable)) {\n    iterable = iterable.split('')\n  }  "), t += "\n  while (++index < length) {\n    " + e.loop + ";\n  }\n}\nelse {  ") : ui.nonEnumArgs && (t += "\n  var length = iterable.length; index = -1;\n  if (length && isArguments(iterable)) {\n    while (++index < length) {\n      index += '';\n      " + e.loop + ";\n    }\n  } else {  "), ui.enumPrototypes && (t += "\n  var skipProto = typeof iterable == 'function';\n  "), ui.enumErrorProps && (t += "\n  var skipErrorProps = iterable === errorProto || iterable instanceof Error;\n  ");
                var n = [];
                if (ui.enumPrototypes && n.push('!(skipProto && index == "prototype")'), ui.enumErrorProps && n.push('!(skipErrorProps && (index == "message" || index == "name"))'), e.useHas && e.keys) t += "\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iterable] && keys(iterable),\n      length = ownProps ? ownProps.length : 0;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n", n.length && (t += "    if (" + n.join(" && ") + ") {\n  "), t += e.loop + ";    ", n.length && (t += "\n    }"), t += "\n  }  ";
                else if (t += "\n  for (index in iterable) {\n", e.useHas && n.push("hasOwnProperty.call(iterable, index)"), n.length && (t += "    if (" + n.join(" && ") + ") {\n  "), t += e.loop + ";    ", n.length && (t += "\n    }"), t += "\n  }    ", ui.nonEnumShadows) {
                    for (t += "\n\n  if (iterable !== objectProto) {\n    var ctor = iterable.constructor,\n        isProto = iterable === (ctor && ctor.prototype),\n        className = iterable === stringProto ? stringClass : iterable === errorProto ? errorClass : toString.call(iterable),\n        nonEnum = nonEnumProps[className];\n      ", k = 0; k < 7; k++) t += "\n    index = '" + e.shadowedProps[k] + "';\n    if ((!(isProto && nonEnum[index]) && hasOwnProperty.call(iterable, index))", e.useHas || (t += " || (!nonEnum[index] && iterable[index] !== objectProto[index])"), t += ") {\n      " + e.loop + ";\n    }      ";
                    t += "\n  }    "
                }
                return (e.array || ui.nonEnumArgs) && (t += "\n}"), t += e.bottom + ";\nreturn result"
            };
            Jr || (tt = function() {
                function e() {}
                return function(t) {
                    if (Lt(t)) {
                        e.prototype = t;
                        var r = new e;
                        e.prototype = null
                    }
                    return r || n.Object()
                }
            }());
            var ci = Kr ? function(e, t) {
                K.value = t, Kr(e, "__bindData__", K), K.value = null
            } : ur;
            ui.argsClass || (yt = function(e) {
                return e && "object" == typeof e && "number" == typeof e.length && Br.call(e, "callee") && !Wr.call(e, "callee") || !1
            });
            var fi = Qr || function(e) {
                    return e && "object" == typeof e && "number" == typeof e.length && Lr.call(e) == q || !1
                },
                di = pt({
                    args: "object",
                    init: "[]",
                    top: "if (!(objectTypes[typeof object])) return result",
                    loop: "result.push(index)"
                }),
                pi = ti ? function(e) {
                    return Lt(e) ? ui.enumPrototypes && "function" == typeof e || ui.nonEnumArgs && e.length && yt(e) ? di(e) : ti(e) : []
                } : di,
                hi = {
                    args: "collection, callback, thisArg",
                    top: "callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3)",
                    array: "typeof length == 'number'",
                    keys: pi,
                    loop: "if (callback(iterable[index], index, collection) === false) return result"
                },
                gi = {
                    args: "object, source, guard",
                    top: "var args = arguments,\n    argsIndex = 0,\n    argsLength = typeof guard == 'number' ? 2 : args.length;\nwhile (++argsIndex < argsLength) {\n  iterable = args[argsIndex];\n  if (iterable && objectTypes[typeof iterable]) {",
                    keys: pi,
                    loop: "if (typeof result[index] == 'undefined') result[index] = iterable[index]",
                    bottom: "  }\n}"
                },
                vi = {
                    top: "if (!objectTypes[typeof iterable]) return result;\n" + hi.top,
                    array: !1
                },
                mi = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                },
                $i = Ot(mi),
                yi = Or("(" + pi($i).join("|") + ")", "g"),
                wi = Or("[" + pi(mi).join("") + "]", "g"),
                bi = pt(hi),
                xi = pt(gi, {
                    top: gi.top.replace(";", ";\nif (argsLength > 3 && typeof args[argsLength - 2] == 'function') {\n  var callback = baseCreateCallback(args[--argsLength - 1], args[argsLength--], 2);\n} else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {\n  callback = args[--argsLength];\n}"),
                    loop: "result[index] = callback ? callback(result[index], iterable[index]) : iterable[index]"
                }),
                Ci = pt(gi),
                ki = pt(hi, vi, {
                    useHas: !1
                }),
                Si = pt(hi, vi);
            It(/x/) && (It = function(e) {
                return "function" == typeof e && Lr.call(e) == V
            });
            var Ti = Vr ? function(e) {
                    if (!e || Lr.call(e) != z || !ui.argsClass && yt(e)) return !1;
                    var t = e.valueOf,
                        n = vt(t) && (n = Vr(t)) && Vr(n);
                    return n ? e == n || Vr(e) == n : mt(e)
                } : mt,
                Ei = ft(function(e, t, n) {
                    Br.call(e, n) ? e[n]++ : e[n] = 1
                }),
                Ai = ft(function(e, t, n) {
                    (Br.call(e, n) ? e[n] : e[n] = []).push(t)
                }),
                Oi = ft(function(e, t, n) {
                    e[n] = t
                }),
                Pi = sn,
                Di = en,
                ji = vt(ji = Cr.now) && ji || function() {
                    return (new Cr).getTime()
                },
                _i = 8 == ii(x + "08") ? ii : function(e, t) {
                    return ii(Ut(e) ? e.replace(D, "") : e, t || 0)
                };
            return g.after = Hn, g.assign = xi, g.at = Jt, g.bind = Un, g.bindAll = Vn, g.bindKey = Bn, g.chain = vr, g.compact = yn, g.compose = zn, g.constant = nr, g.countBy = Ei, g.create = xt, g.createCallback = rr, g.curry = Wn, g.debounce = Gn, g.defaults = Ci, g.defer = Xn, g.delay = Yn, g.difference = wn, g.filter = en, g.flatten = kn, g.forEach = rn, g.forEachRight = on, g.forIn = ki, g.forInRight = St, g.forOwn = Si, g.forOwnRight = Tt, g.functions = Et, g.groupBy = Ai, g.indexBy = Oi, g.initial = Tn, g.intersection = En, g.invert = Ot, g.invoke = an, g.keys = pi, g.map = sn, g.mapValues = Bt, g.max = un, g.memoize = Kn, g.merge = zt, g.min = ln, g.omit = Wt, g.once = Jn, g.pairs = Gt, g.partial = Qn, g.partialRight = Zn, g.pick = Xt, g.pluck = Pi, g.property = lr, g.pull = Pn, g.range = Dn, g.reject = dn, g.remove = jn, g.rest = _n, g.shuffle = hn, g.sortBy = mn, g.tap = mr, g.throttle = er, g.times = pr, g.toArray = $n, g.transform = Yt, g.union = Nn, g.uniq = In, g.values = Kt, g.where = Di, g.without = Ln, g.wrap = tr, g.xor = Mn, g.zip = qn, g.zipObject = Rn, g.collect = sn, g.drop = _n, g.each = rn, g.eachRight = on, g.extend = xi, g.methods = Et, g.object = Rn, g.select = en, g.tail = _n, g.unique = In, g.unzip = qn, ar(g), g.clone = wt, g.cloneDeep = bt, g.contains = Qt, g.escape = ir, g.every = Zt, g.find = tn, g.findIndex = bn, g.findKey = Ct, g.findLast = nn, g.findLastIndex = xn, g.findLastKey = kt, g.has = At, g.identity = or, g.indexOf = Sn, g.isArguments = yt, g.isArray = fi, g.isBoolean = Pt, g.isDate = Dt, g.isElement = jt, g.isEmpty = _t, g.isEqual = Ft, g.isFinite = Nt, g.isFunction = It, g.isNaN = Mt, g.isNull = qt, g.isNumber = Rt, g.isObject = Lt, g.isPlainObject = Ti, g.isRegExp = Ht, g.isString = Ut, g.isUndefined = Vt, g.lastIndexOf = On, g.mixin = ar, g.noConflict = sr, g.noop = ur, g.now = ji, g.parseInt = _i, g.random = cr, g.reduce = cn, g.reduceRight = fn, g.result = fr, g.runInContext = p, g.size = gn, g.some = vn, g.sortedIndex = Fn, g.template = dr, g.unescape = hr, g.uniqueId = gr, g.all = Zt, g.any = vn, g.detect = tn, g.findWhere = tn, g.foldl = cn, g.foldr = fn, g.include = Qt, g.inject = cn, ar(function() {
                var e = {};
                return Si(g, function(t, n) {
                    g.prototype[n] || (e[n] = t)
                }), e
            }(), !1), g.first = Cn, g.last = An, g.sample = pn, g.take = Cn, g.head = Cn, Si(g, function(e, t) {
                var n = "sample" !== t;
                g.prototype[t] || (g.prototype[t] = function(t, r) {
                    var i = this.__chain__,
                        o = e(this.__wrapped__, t, r);
                    return i || null != t && (!r || n && "function" == typeof t) ? new v(o, i) : o
                })
            }), g.VERSION = "2.4.2", g.prototype.chain = $r, g.prototype.toString = yr, g.prototype.value = wr, g.prototype.valueOf = wr, bi(["join", "pop", "shift"], function(e) {
                var t = jr[e];
                g.prototype[e] = function() {
                    var e = this.__chain__,
                        n = t.apply(this.__wrapped__, arguments);
                    return e ? new v(n, e) : n
                }
            }), bi(["push", "reverse", "sort", "unshift"], function(e) {
                var t = jr[e];
                g.prototype[e] = function() {
                    return t.apply(this.__wrapped__, arguments), this
                }
            }), bi(["concat", "slice", "splice"], function(e) {
                var t = jr[e];
                g.prototype[e] = function() {
                    return new v(t.apply(this.__wrapped__, arguments), this.__chain__)
                }
            }), ui.spliceObjects || bi(["pop", "shift", "splice"], function(e) {
                var t = jr[e],
                    n = "splice" == e;
                g.prototype[e] = function() {
                    var e = this.__chain__,
                        r = this.__wrapped__,
                        i = t.apply(r, arguments);
                    return 0 === r.length && delete r[0], e || n ? new v(i, e) : i
                }
            }), g
        }
        var h, g = [],
            v = [],
            m = 0,
            $ = {},
            y = +new Date + "",
            w = 75,
            b = 40,
            x = " 	\f ﻿\n\r\u2028\u2029 ᠎             　",
            C = /\b__p \+= '';/g,
            S = /\b(__p \+=) '' \+/g,
            T = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            E = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            A = /\w*$/,
            O = /^\s*function[ \n\r\t]+\w/,
            P = /<%=([\s\S]+?)%>/g,
            D = RegExp("^[" + x + "]*0+(?=.$)"),
            j = /($^)/,
            _ = /\bthis\b/,
            F = /['\n\r\t\u2028\u2029\\]/g,
            N = ["Array", "Boolean", "Date", "Error", "Function", "Math", "Number", "Object", "RegExp", "String", "_", "attachEvent", "clearTimeout", "isFinite", "isNaN", "parseInt", "setTimeout"],
            I = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
            L = 0,
            M = "[object Arguments]",
            q = "[object Array]",
            R = "[object Boolean]",
            H = "[object Date]",
            U = "[object Error]",
            V = "[object Function]",
            B = "[object Number]",
            z = "[object Object]",
            W = "[object RegExp]",
            G = "[object String]",
            X = {};
        X[V] = !1, X[M] = X[q] = X[R] = X[H] = X[B] = X[z] = X[W] = X[G] = !0;
        var Y = {
                leading: !1,
                maxWait: 0,
                trailing: !1
            },
            K = {
                configurable: !1,
                enumerable: !1,
                value: null,
                writable: !1
            },
            J = {
                args: "",
                array: null,
                bottom: "",
                firstArg: "",
                init: "",
                keys: null,
                loop: "",
                shadowedProps: null,
                support: null,
                top: "",
                useHas: !1
            },
            Q = {
                "boolean": !1,
                "function": !0,
                object: !0,
                number: !1,
                string: !1,
                undefined: !1
            },
            Z = {
                "\\": "\\",
                "'": "'",
                "\n": "n",
                "\r": "r",
                "	": "t",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            et = Q[typeof window] && window || this,
            tt = Q[typeof exports] && exports && !exports.nodeType && exports,
            nt = Q[typeof module] && module && !module.nodeType && module,
            rt = nt && nt.exports === tt && tt,
            it = Q[typeof global] && global;
        !it || it.global !== it && it.window !== it || (et = it);
        var ot = p();
        "function" == typeof define && "object" == typeof define.amd && define.amd ? (et._ = ot, define(function() {
            return ot
        })) : tt && nt ? rt ? (nt.exports = ot)._ = ot : tt._ = ot : et._ = ot
    }.call(this),
    /**
     * Restful Resources service for AngularJS apps
     * @version v1.4.0 - 2014-04-25 * @link https://github.com/mgonto/restangular
     * @author Martin Gontovnikas <martin@gon.to>
     * @license MIT License, http://www.opensource.org/licenses/MIT
     */
    function() {
        var e = angular.module("restangular", []);
        e.provider("Restangular", function() {
            var e = {};
            e.init = function(e, t) {
                function n(e, t, n, r) {
                    var i = {};
                    return _.each(_.keys(r), function(o) {
                        var a = r[o];
                        a.params = _.extend({}, a.params, e.defaultRequestParams[a.method.toLowerCase()]), _.isEmpty(a.params) && delete a.params, i[o] = e.isSafe(a.method) ? function() {
                            return t(_.extend(a, {
                                url: n
                            }))
                        } : function(e) {
                            return t(_.extend(a, {
                                url: n,
                                data: e
                            }))
                        }
                    }), i
                }
                e.configuration = t;
                var r = ["get", "head", "options", "trace", "getlist"];
                t.isSafe = function(e) {
                    return _.contains(r, e.toLowerCase())
                };
                var i = /^https?:\/\//i;
                t.isAbsoluteUrl = function(e) {
                    return _.isUndefined(t.absoluteUrl) || _.isNull(t.absoluteUrl) ? e && i.test(e) : t.absoluteUrl
                }, t.absoluteUrl = _.isUndefined(t.absoluteUrl) ? !0 : t.absoluteUrl, e.setSelfLinkAbsoluteUrl = function(e) {
                    t.absoluteUrl = e
                }, t.baseUrl = _.isUndefined(t.baseUrl) ? "" : t.baseUrl, e.setBaseUrl = function(e) {
                    return t.baseUrl = /\/$/.test(e) ? e.substring(0, e.length - 1) : e, this
                }, t.extraFields = t.extraFields || [], e.setExtraFields = function(e) {
                    return t.extraFields = e, this
                }, t.defaultHttpFields = t.defaultHttpFields || {}, e.setDefaultHttpFields = function(e) {
                    return t.defaultHttpFields = e, this
                }, t.withHttpValues = function(e, n) {
                    return _.defaults(n, e, t.defaultHttpFields)
                }, t.encodeIds = _.isUndefined(t.encodeIds) ? !0 : t.encodeIds, e.setEncodeIds = function(e) {
                    t.encodeIds = e
                }, t.defaultRequestParams = t.defaultRequestParams || {
                    get: {},
                    post: {},
                    put: {},
                    remove: {},
                    common: {}
                }, e.setDefaultRequestParams = function(e, n) {
                    var r = [],
                        i = n || e;
                    return _.isUndefined(n) ? r.push("common") : _.isArray(e) ? r = e : r.push(e), _.each(r, function(e) {
                        t.defaultRequestParams[e] = i
                    }), this
                }, e.requestParams = t.defaultRequestParams, t.defaultHeaders = t.defaultHeaders || {}, e.setDefaultHeaders = function(n) {
                    return t.defaultHeaders = n, e.defaultHeaders = t.defaultHeaders, this
                }, e.defaultHeaders = t.defaultHeaders, t.methodOverriders = t.methodOverriders || [], e.setMethodOverriders = function(e) {
                    var n = _.extend([], e);
                    return t.isOverridenMethod("delete", n) && n.push("remove"), t.methodOverriders = n, this
                }, t.jsonp = _.isUndefined(t.jsonp) ? !1 : t.jsonp, e.setJsonp = function(e) {
                    t.jsonp = e
                }, t.isOverridenMethod = function(e, n) {
                    var r = n || t.methodOverriders;
                    return !_.isUndefined(_.find(r, function(t) {
                        return t.toLowerCase() === e.toLowerCase()
                    }))
                }, t.urlCreator = t.urlCreator || "path", e.setUrlCreator = function(e) {
                    if (!_.has(t.urlCreatorFactory, e)) throw new Error("URL Path selected isn't valid");
                    return t.urlCreator = e, this
                }, t.restangularFields = t.restangularFields || {
                    id: "id",
                    route: "route",
                    parentResource: "parentResource",
                    restangularCollection: "restangularCollection",
                    cannonicalId: "__cannonicalId",
                    etag: "restangularEtag",
                    selfLink: "href",
                    get: "get",
                    getList: "getList",
                    put: "put",
                    post: "post",
                    remove: "remove",
                    head: "head",
                    trace: "trace",
                    options: "options",
                    patch: "patch",
                    getRestangularUrl: "getRestangularUrl",
                    getRequestedUrl: "getRequestedUrl",
                    putElement: "putElement",
                    addRestangularMethod: "addRestangularMethod",
                    getParentList: "getParentList",
                    clone: "clone",
                    ids: "ids",
                    httpConfig: "_$httpConfig",
                    reqParams: "reqParams",
                    one: "one",
                    all: "all",
                    several: "several",
                    oneUrl: "oneUrl",
                    allUrl: "allUrl",
                    customPUT: "customPUT",
                    customPOST: "customPOST",
                    customDELETE: "customDELETE",
                    customGET: "customGET",
                    customGETLIST: "customGETLIST",
                    customOperation: "customOperation",
                    doPUT: "doPUT",
                    doPOST: "doPOST",
                    doDELETE: "doDELETE",
                    doGET: "doGET",
                    doGETLIST: "doGETLIST",
                    fromServer: "fromServer",
                    withConfig: "withConfig",
                    withHttpConfig: "withHttpConfig",
                    singleOne: "singleOne",
                    plain: "plain",
                    save: "save"
                }, e.setRestangularFields = function(e) {
                    return t.restangularFields = _.extend(t.restangularFields, e), this
                }, t.isRestangularized = function(e) {
                    return !!e[t.restangularFields.one] || !!e[t.restangularFields.all]
                }, t.setFieldToElem = function(e, t, n) {
                    var r = e.split("."),
                        i = t;
                    return _.each(_.initial(r), function(e) {
                        i[e] = {}, i = i[e]
                    }), i[_.last(r)] = n, this
                }, t.getFieldFromElem = function(e, t) {
                    var n = e.split("."),
                        r = t;
                    return _.each(n, function(e) {
                        r && (r = r[e])
                    }), angular.copy(r)
                }, t.setIdToElem = function(e, n) {
                    return t.setFieldToElem(t.restangularFields.id, e, n), this
                }, t.getIdFromElem = function(e) {
                    return t.getFieldFromElem(t.restangularFields.id, e)
                }, t.isValidId = function(e) {
                    return "" !== e && !_.isUndefined(e) && !_.isNull(e)
                }, t.setUrlToElem = function(e, n) {
                    return t.setFieldToElem(t.restangularFields.selfLink, e, n), this
                }, t.getUrlFromElem = function(e) {
                    return t.getFieldFromElem(t.restangularFields.selfLink, e)
                }, t.useCannonicalId = _.isUndefined(t.useCannonicalId) ? !1 : t.useCannonicalId, e.setUseCannonicalId = function(e) {
                    return t.useCannonicalId = e, this
                }, t.getCannonicalIdFromElem = function(e) {
                    var n = e[t.restangularFields.cannonicalId],
                        r = t.isValidId(n) ? n : t.getIdFromElem(e);
                    return r
                }, t.responseInterceptors = t.responseInterceptors || [], t.defaultResponseInterceptor = function(e) {
                    return e
                }, t.responseExtractor = function(e, n, r, i, o, a) {
                    var s = angular.copy(t.responseInterceptors);
                    s.push(t.defaultResponseInterceptor);
                    var u = e;
                    return _.each(s, function(e) {
                        u = e(u, n, r, i, o, a)
                    }), u
                }, e.addResponseInterceptor = function(e) {
                    return t.responseInterceptors.push(e), this
                }, e.setResponseInterceptor = e.addResponseInterceptor, e.setResponseExtractor = e.addResponseInterceptor, t.requestInterceptors = t.requestInterceptors || [], t.defaultInterceptor = function(e, t, n, r, i, o, a) {
                    return {
                        element: e,
                        headers: i,
                        params: o,
                        httpConfig: a
                    }
                }, t.fullRequestInterceptor = function(e, n, r, i, o, a, s) {
                    var u = angular.copy(t.requestInterceptors),
                        l = t.defaultInterceptor(e, n, r, i, o, a, s);
                    return _.reduce(u, function(e, t) {
                        return _.extend(e, t(e.element, n, r, i, e.headers, e.params, e.httpConfig))
                    }, l)
                }, e.addRequestInterceptor = function(e) {
                    return t.requestInterceptors.push(function(t, n, r, i, o, a, s) {
                        return {
                            headers: o,
                            params: a,
                            element: e(t, n, r, i),
                            httpConfig: s
                        }
                    }), this
                }, e.setRequestInterceptor = e.addRequestInterceptor, e.addFullRequestInterceptor = function(e) {
                    return t.requestInterceptors.push(e), this
                }, e.setFullRequestInterceptor = e.addFullRequestInterceptor, t.errorInterceptor = t.errorInterceptor || function() {}, e.setErrorInterceptor = function(e) {
                    return t.errorInterceptor = e, this
                }, t.onBeforeElemRestangularized = t.onBeforeElemRestangularized || function(e) {
                    return e
                }, e.setOnBeforeElemRestangularized = function(e) {
                    return t.onBeforeElemRestangularized = e, this
                }, t.onElemRestangularized = t.onElemRestangularized || function(e) {
                    return e
                }, e.setOnElemRestangularized = function(e) {
                    return t.onElemRestangularized = e, this
                }, t.shouldSaveParent = t.shouldSaveParent || function() {
                    return !0
                }, e.setParentless = function(e) {
                    return _.isArray(e) ? t.shouldSaveParent = function(t) {
                        return !_.contains(e, t)
                    } : _.isBoolean(e) && (t.shouldSaveParent = function() {
                        return !e
                    }), this
                }, t.suffix = _.isUndefined(t.suffix) ? null : t.suffix, e.setRequestSuffix = function(e) {
                    return t.suffix = e, this
                }, t.transformers = t.transformers || {}, e.addElementTransformer = function(n, r, i) {
                    var o = null,
                        a = null;
                    2 === arguments.length ? a = r : (a = i, o = r);
                    var s = t.transformers[n];
                    return s || (s = t.transformers[n] = []), s.push(function(e, t) {
                        return _.isNull(o) || e == o ? a(t) : t
                    }), e
                }, e.extendCollection = function(t, n) {
                    return e.addElementTransformer(t, !0, n)
                }, e.extendModel = function(t, n) {
                    return e.addElementTransformer(t, !1, n)
                }, t.transformElem = function(e, n, r, i, o) {
                    if (!o && !t.transformLocalElements && !e[t.restangularFields.fromServer]) return e;
                    var a = t.transformers[r],
                        s = e;
                    return a && _.each(a, function(e) {
                        s = e(n, s)
                    }), t.onElemRestangularized(s, n, r, i)
                }, t.transformLocalElements = _.isUndefined(t.transformLocalElements) ? !1 : t.transformLocalElements, e.setTransformOnlyServerElements = function(e) {
                    t.transformLocalElements = !e
                }, t.fullResponse = _.isUndefined(t.fullResponse) ? !1 : t.fullResponse, e.setFullResponse = function(e) {
                    return t.fullResponse = e, this
                }, t.urlCreatorFactory = {};
                var o = function() {};
                o.prototype.setConfig = function(e) {
                    return this.config = e, this
                }, o.prototype.parentsArray = function(e) {
                    for (var t = []; e;) t.push(e), e = e[this.config.restangularFields.parentResource];
                    return t.reverse()
                }, o.prototype.resource = function(e, r, i, o, a, s, u, l) {
                    var c = _.defaults(a || {}, this.config.defaultRequestParams.common),
                        f = _.defaults(o || {}, this.config.defaultHeaders);
                    u && (t.isSafe(l) ? f["If-None-Match"] = u : f["If-Match"] = u);
                    var d = this.base(e);
                    if (s) {
                        var p = "";
                        /\/$/.test(d) || (p += "/"), p += s, d += p
                    }
                    return this.config.suffix && -1 === d.indexOf(this.config.suffix, d.length - this.config.suffix.length) && !this.config.getUrlFromElem(e) && (d += this.config.suffix), e[this.config.restangularFields.httpConfig] = void 0, n(this.config, r, d, {
                        getList: this.config.withHttpValues(i, {
                            method: "GET",
                            params: c,
                            headers: f
                        }),
                        get: this.config.withHttpValues(i, {
                            method: "GET",
                            params: c,
                            headers: f
                        }),
                        jsonp: this.config.withHttpValues(i, {
                            method: "jsonp",
                            params: c,
                            headers: f
                        }),
                        put: this.config.withHttpValues(i, {
                            method: "PUT",
                            params: c,
                            headers: f
                        }),
                        post: this.config.withHttpValues(i, {
                            method: "POST",
                            params: c,
                            headers: f
                        }),
                        remove: this.config.withHttpValues(i, {
                            method: "DELETE",
                            params: c,
                            headers: f
                        }),
                        head: this.config.withHttpValues(i, {
                            method: "HEAD",
                            params: c,
                            headers: f
                        }),
                        trace: this.config.withHttpValues(i, {
                            method: "TRACE",
                            params: c,
                            headers: f
                        }),
                        options: this.config.withHttpValues(i, {
                            method: "OPTIONS",
                            params: c,
                            headers: f
                        }),
                        patch: this.config.withHttpValues(i, {
                            method: "PATCH",
                            params: c,
                            headers: f
                        })
                    })
                };
                var a = function() {};
                a.prototype = new o, a.prototype.base = function(e) {
                    var n = this;
                    return _.reduce(this.parentsArray(e), function(e, r) {
                        var i, o = n.config.getUrlFromElem(r);
                        if (o) {
                            if (n.config.isAbsoluteUrl(o)) return o;
                            i = o
                        } else if (i = r[n.config.restangularFields.route], r[n.config.restangularFields.restangularCollection]) {
                            var a = r[n.config.restangularFields.ids];
                            a && (i += "/" + a.join(","))
                        } else {
                            var s;
                            s = n.config.useCannonicalId ? n.config.getCannonicalIdFromElem(r) : n.config.getIdFromElem(r), t.isValidId(s) && !r.singleOne && (i += "/" + (n.config.encodeIds ? encodeURIComponent(s) : s))
                        }
                        return e.replace(/\/$/, "") + "/" + i
                    }, this.config.baseUrl)
                }, a.prototype.fetchUrl = function(e, t) {
                    var n = this.base(e);
                    return t && (n += "/" + t), n
                }, a.prototype.fetchRequestedUrl = function(e, n) {
                    function r(e) {
                        var t = [];
                        for (var n in e) e.hasOwnProperty(n) && t.push(n);
                        return t.sort()
                    }

                    function i(e, t, n) {
                        for (var i = r(e), o = 0; o < i.length; o++) t.call(n, e[i[o]], i[o]);
                        return i
                    }

                    function o(e, t) {
                        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, t ? "%20" : "+")
                    }
                    var a = this.fetchUrl(e, n),
                        s = e[t.restangularFields.reqParams];
                    if (!s) return a;
                    var u = [];
                    return i(s, function(e, t) {
                        null != e && void 0 != e && (angular.isArray(e) || (e = [e]), angular.forEach(e, function(e) {
                            angular.isObject(e) && (e = angular.toJson(e)), u.push(o(t) + "=" + o(e))
                        }))
                    }), a + (this.config.suffix || "") + (-1 === a.indexOf("?") ? "?" : "&") + u.join("&")
                }, t.urlCreatorFactory.path = a
            };
            var t = {};
            e.init(this, t), this.$get = ["$http", "$q", function(n, r) {
                function i(t) {
                    function o(e, n, r, i, o) {
                        if (n[t.restangularFields.route] = r, n[t.restangularFields.getRestangularUrl] = _.bind(U.fetchUrl, U, n), n[t.restangularFields.getRequestedUrl] = _.bind(U.fetchRequestedUrl, U, n), n[t.restangularFields.addRestangularMethod] = _.bind(M, n), n[t.restangularFields.clone] = _.bind(m, n, n), n[t.restangularFields.reqParams] = _.isEmpty(i) ? null : i, n[t.restangularFields.withHttpConfig] = _.bind(S, n), n[t.restangularFields.plain] = _.bind(g, n, n), n[t.restangularFields.one] = _.bind(a, n, n), n[t.restangularFields.all] = _.bind(s, n, n), n[t.restangularFields.several] = _.bind(u, n, n), n[t.restangularFields.oneUrl] = _.bind(l, n, n), n[t.restangularFields.allUrl] = _.bind(c, n, n), n[t.restangularFields.fromServer] = !!o, e && t.shouldSaveParent(r)) {
                            var f = t.getIdFromElem(e),
                                d = t.getUrlFromElem(e),
                                p = _.union(_.values(_.pick(t.restangularFields, ["route", "singleOne", "parentResource"])), t.extraFields),
                                h = _.pick(e, p);
                            t.isValidId(f) && t.setIdToElem(h, f), t.isValidId(d) && t.setUrlToElem(h, d), n[t.restangularFields.parentResource] = h
                        } else n[t.restangularFields.parentResource] = null;
                        return n
                    }

                    function a(e, n, r, i) {
                        if (_.isNumber(n) || _.isNumber(e)) {
                            var o = "You're creating a Restangular entity with the number ";
                            throw o += "instead of the route or the parent. You can't call .one(12)", new Error(o)
                        }
                        var a = {};
                        return t.setIdToElem(a, r), t.setFieldToElem(t.restangularFields.singleOne, a, i), $(e, a, n, !1)
                    }

                    function s(e, t) {
                        return y(e, [], t, !1)
                    }

                    function u(e, n) {
                        var r = [];
                        return r[t.restangularFields.ids] = Array.prototype.splice.call(arguments, 2), y(e, r, n, !1)
                    }

                    function l(e, n, r) {
                        if (!n) throw new Error("Route is mandatory when creating new Restangular objects.");
                        var i = {};
                        return t.setUrlToElem(i, r, n), $(e, i, n, !1)
                    }

                    function c(e, n, r) {
                        if (!n) throw new Error("Route is mandatory when creating new Restangular objects.");
                        var i = {};
                        return t.setUrlToElem(i, r, n), y(e, i, n, !1)
                    }

                    function f(e, n, r) {
                        return e.call = _.bind(d, e), e.get = _.bind(p, e), e[t.restangularFields.restangularCollection] = n, n && (e.push = _.bind(d, e, "push")), e.$object = r, e
                    }

                    function d(e) {
                        var n = r.defer(),
                            i = arguments,
                            o = {};
                        return this.then(function(t) {
                            var r = Array.prototype.slice.call(i, 1),
                                a = t[e];
                            a.apply(t, r), o = t, n.resolve(t)
                        }), f(n.promise, this[t.restangularFields.restangularCollection], o)
                    }

                    function p(e) {
                        var n = r.defer(),
                            i = {};
                        return this.then(function(t) {
                            i = t[e], n.resolve(i)
                        }), f(n.promise, this[t.restangularFields.restangularCollection], i)
                    }

                    function h(e, n, r, i) {
                        return _.extend(i, r), t.fullResponse ? e.resolve(_.extend(n, {
                            data: r
                        })) : void e.resolve(r)
                    }

                    function g(e) {
                        if (_.isArray(e)) {
                            var n = [];
                            return _.each(e, function(e) {
                                n.push(g(e))
                            }), n
                        }
                        return _.omit(e, _.values(_.omit(t.restangularFields, "id")))
                    }

                    function v(e) {
                        e[t.restangularFields.customOperation] = _.bind(L, e), _.each(["put", "post", "get", "delete"], function(t) {
                            _.each(["do", "custom"], function(n) {
                                var r, i = "delete" === t ? "remove" : t,
                                    o = n + t.toUpperCase();
                                r = "put" !== i && "post" !== i ? L : function(e, t, n, r, i) {
                                    return _.bind(L, this)(e, n, r, i, t)
                                }, e[o] = _.bind(r, e, i)
                            })
                        }), e[t.restangularFields.customGETLIST] = _.bind(k, e), e[t.restangularFields.doGETLIST] = e[t.restangularFields.customGETLIST]
                    }

                    function m(e, n) {
                        var r = angular.copy(e, n);
                        return $(r[t.restangularFields.parentResource], r, r[t.restangularFields.route], !0)
                    }

                    function $(e, n, r, i, a, s) {
                        var u = t.onBeforeElemRestangularized(n, !1, r),
                            l = o(e, u, r, s, i);
                        return t.useCannonicalId && (l[t.restangularFields.cannonicalId] = t.getIdFromElem(l)), a && (l[t.restangularFields.getParentList] = function() {
                            return a
                        }), l[t.restangularFields.restangularCollection] = !1, l[t.restangularFields.get] = _.bind(A, l), l[t.restangularFields.getList] = _.bind(k, l), l[t.restangularFields.put] = _.bind(P, l), l[t.restangularFields.post] = _.bind(D, l), l[t.restangularFields.remove] = _.bind(O, l), l[t.restangularFields.head] = _.bind(j, l), l[t.restangularFields.trace] = _.bind(F, l), l[t.restangularFields.options] = _.bind(N, l), l[t.restangularFields.patch] = _.bind(I, l), l[t.restangularFields.save] = _.bind(T, l), v(l), t.transformElem(l, !1, r, H, !0)
                    }

                    function y(e, n, r, i, a) {
                        var s = t.onBeforeElemRestangularized(n, !0, r),
                            u = o(e, s, r, a, i);
                        return u[t.restangularFields.restangularCollection] = !0, u[t.restangularFields.post] = _.bind(D, u, null), u[t.restangularFields.remove] = _.bind(O, u), u[t.restangularFields.head] = _.bind(j, u), u[t.restangularFields.trace] = _.bind(F, u), u[t.restangularFields.putElement] = _.bind(x, u), u[t.restangularFields.options] = _.bind(N, u), u[t.restangularFields.patch] = _.bind(I, u), u[t.restangularFields.get] = _.bind(b, u), u[t.restangularFields.getList] = _.bind(k, u, null), v(u), t.transformElem(u, !0, r, H, !0)
                    }

                    function w(e, t, n) {
                        var r = y(e, t, n, !1);
                        return _.each(r, function(t) {
                            $(e, t, n, !1)
                        }), r
                    }

                    function b(e, t, n) {
                        return this.customGET(e.toString(), t, n)
                    }

                    function x(e, n, i) {
                        var o = this,
                            a = this[e],
                            s = r.defer(),
                            u = [];
                        return u = t.transformElem(u, !0, a[t.restangularFields.route], H), a.put(n, i).then(function(t) {
                            var n = m(o);
                            n[e] = t, u = n, s.resolve(n)
                        }, function(e) {
                            s.reject(e)
                        }), f(s.promise, !0, u)
                    }

                    function C(e, n, r, i, o, a) {
                        var s = t.responseExtractor(e, n, r, i, o, a),
                            u = o.headers("ETag");
                        return s && u && (s[t.restangularFields.etag] = u), s
                    }

                    function k(e, i, o) {
                        var a = this,
                            s = r.defer(),
                            u = "getList",
                            l = U.fetchUrl(this, e),
                            c = e || a[t.restangularFields.route],
                            d = t.fullRequestInterceptor(null, u, c, l, o || {}, i || {}, this[t.restangularFields.httpConfig] || {}),
                            p = [];
                        p = t.transformElem(p, !0, c, H);
                        var g = "getList";
                        return t.jsonp && (g = "jsonp"), U.resource(this, n, d.httpConfig, d.headers, d.params, e, this[t.restangularFields.etag], u)[g]().then(function(n) {
                            var r = n.data,
                                i = n.config.params,
                                o = C(r, u, c, l, n, s);
                            if ((_.isUndefined(o) || "" === o) && (o = []), !_.isArray(o)) throw new Error("Response for getList SHOULD be an array and not an object or something else");
                            var f = _.map(o, function(n) {
                                return a[t.restangularFields.restangularCollection] ? $(a[t.restangularFields.parentResource], n, a[t.restangularFields.route], !0, o) : $(a, n, e, !0, o)
                            });
                            f = _.extend(o, f), a[t.restangularFields.restangularCollection] ? h(s, n, y(a[t.restangularFields.parentResource], f, a[t.restangularFields.route], !0, i), p) : h(s, n, y(a, f, e, !0, i), p)
                        }, function(e) {
                            304 === e.status && a[t.restangularFields.restangularCollection] ? h(s, e, a, p) : t.errorInterceptor(e, s) !== !1 && s.reject(e)
                        }), f(s.promise, !0, p)
                    }

                    function S(e) {
                        return this[t.restangularFields.httpConfig] = e, this
                    }

                    function T(e, n) {
                        return this[t.restangularFields.fromServer] ? this[t.restangularFields.put](e, n) : _.bind(E, this)("post", void 0, e, void 0, n)
                    }

                    function E(e, i, o, a, s) {
                        var u = this,
                            l = r.defer(),
                            c = o || {},
                            d = i || this[t.restangularFields.route],
                            p = U.fetchUrl(this, i),
                            v = a || this,
                            m = v[t.restangularFields.etag] || ("post" != e ? this[t.restangularFields.etag] : null);
                        _.isObject(v) && t.isRestangularized(v) && (v = g(v));
                        var y = t.fullRequestInterceptor(v, e, d, p, s || {}, c || {}, this[t.restangularFields.httpConfig] || {}),
                            w = {};
                        w = t.transformElem(w, !1, d, H);
                        var b = function(n) {
                                var r = n.data,
                                    o = n.config.params,
                                    a = C(r, e, d, p, n, l);
                                a ? "post" !== e || u[t.restangularFields.restangularCollection] ? (data = $(u[t.restangularFields.parentResource], a, u[t.restangularFields.route], !0, null, o), data[t.restangularFields.singleOne] = u[t.restangularFields.singleOne], h(l, n, data, w)) : h(l, n, $(u, a, i, !0, null, o), w) : h(l, n, void 0, w)
                            },
                            x = function(n) {
                                304 === n.status && t.isSafe(e) ? h(l, n, u, w) : t.errorInterceptor(n, l) !== !1 && l.reject(n)
                            },
                            k = e,
                            S = _.extend({}, y.headers),
                            T = t.isOverridenMethod(e);
                        return T ? (k = "post", S = _.extend(S, {
                            "X-HTTP-Method-Override": "remove" === e ? "DELETE" : e
                        })) : t.jsonp && "get" === k && (k = "jsonp"), t.isSafe(e) ? T ? U.resource(this, n, y.httpConfig, S, y.params, i, m, k)[k]({}).then(b, x) : U.resource(this, n, y.httpConfig, S, y.params, i, m, k)[k]().then(b, x) : U.resource(this, n, y.httpConfig, S, y.params, i, m, k)[k](y.element).then(b, x), f(l.promise, !1, w)
                    }

                    function A(e, t) {
                        return _.bind(E, this)("get", void 0, e, void 0, t)
                    }

                    function O(e, t) {
                        return _.bind(E, this)("remove", void 0, e, void 0, t)
                    }

                    function P(e, t) {
                        return _.bind(E, this)("put", void 0, e, void 0, t)
                    }

                    function D(e, t, n, r) {
                        return _.bind(E, this)("post", e, n, t, r)
                    }

                    function j(e, t) {
                        return _.bind(E, this)("head", void 0, e, void 0, t)
                    }

                    function F(e, t) {
                        return _.bind(E, this)("trace", void 0, e, void 0, t)
                    }

                    function N(e, t) {
                        return _.bind(E, this)("options", void 0, e, void 0, t)
                    }

                    function I(e, t, n) {
                        return _.bind(E, this)("patch", void 0, t, e, n)
                    }

                    function L(e, t, n, r, i) {
                        return _.bind(E, this)(e, t, n, i, r)
                    }

                    function M(e, n, r, i, o, a) {
                        var s;
                        s = "getList" === n ? _.bind(k, this, r) : _.bind(L, this, n, r);
                        var u = function(e, t, n) {
                            var r = _.defaults({
                                params: e,
                                headers: t,
                                elem: n
                            }, {
                                params: i,
                                headers: o,
                                elem: a
                            });
                            return s(r.params, r.headers, r.elem)
                        };
                        this[e] = t.isSafe(n) ? u : function(e, t, n) {
                            return u(t, n, e)
                        }
                    }

                    function q(n) {
                        var r = angular.copy(_.omit(t, "configuration"));
                        return e.init(r, r), n(r), i(r)
                    }

                    function R(e, t) {
                        var n = {},
                            r = (t || H).all(e);
                        return n.one = _.bind(a, t || H, t, e), n.post = _.bind(r.post, r), n.getList = _.bind(r.getList, r), n
                    }
                    var H = {},
                        U = new t.urlCreatorFactory[t.urlCreator];
                    return U.setConfig(t), e.init(H, t), H.copy = _.bind(m, H), H.service = _.bind(R, H), H.withConfig = _.bind(q, H), H.one = _.bind(a, H, null), H.all = _.bind(s, H, null), H.several = _.bind(u, H, null), H.oneUrl = _.bind(l, H, null), H.allUrl = _.bind(c, H, null), H.stripRestangular = _.bind(g, H), H.restangularizeElement = _.bind($, H), H.restangularizeCollection = _.bind(w, H), H
                }
                return i(t)
            }]
        })
    }(), ! function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function(e) {
        "use strict";
        var t = window.Slick || {};
        t = function() {
            function t(t, r) {
                var i, o, a, s = this;
                if (s.defaults = {
                        accessibility: !0,
                        adaptiveHeight: !1,
                        appendArrows: e(t),
                        appendDots: e(t),
                        arrows: !0,
                        asNavFor: null,
                        prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',
                        nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',
                        autoplay: !1,
                        autoplaySpeed: 3e3,
                        centerMode: !1,
                        centerPadding: "50px",
                        cssEase: "ease",
                        customPaging: function(e, t) {
                            return '<button type="button" data-role="none">' + (t + 1) + "</button>"
                        },
                        dots: !1,
                        dotsClass: "slick-dots",
                        draggable: !0,
                        easing: "linear",
                        edgeFriction: .35,
                        fade: !1,
                        focusOnSelect: !1,
                        infinite: !0,
                        initialSlide: 0,
                        lazyLoad: "ondemand",
                        mobileFirst: !1,
                        pauseOnHover: !0,
                        pauseOnDotsHover: !1,
                        respondTo: "window",
                        responsive: null,
                        rtl: !1,
                        slide: "",
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        speed: 500,
                        swipe: !0,
                        swipeToSlide: !1,
                        touchMove: !0,
                        touchThreshold: 5,
                        useCSS: !0,
                        variableWidth: !1,
                        vertical: !1,
                        waitForAnimate: !0
                    }, s.initials = {
                        animating: !1,
                        dragging: !1,
                        autoPlayTimer: null,
                        currentDirection: 0,
                        currentLeft: null,
                        currentSlide: 0,
                        direction: 1,
                        $dots: null,
                        listWidth: null,
                        listHeight: null,
                        loadIndex: 0,
                        $nextArrow: null,
                        $prevArrow: null,
                        slideCount: null,
                        slideWidth: null,
                        $slideTrack: null,
                        $slides: null,
                        sliding: !1,
                        slideOffset: 0,
                        swipeLeft: null,
                        $list: null,
                        touchObject: {},
                        transformsEnabled: !1
                    }, e.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.hidden = "hidden", s.paused = !1, s.positionProp = null, s.respondTo = null, s.shouldClick = !0, s.$slider = e(t), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, i = e(t).data("slick") || {}, s.options = e.extend({}, s.defaults, i, r), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, o = s.options.responsive || null, o && o.length > -1) {
                    s.respondTo = s.options.respondTo || "window";
                    for (a in o) o.hasOwnProperty(a) && (s.breakpoints.push(o[a].breakpoint), s.breakpointSettings[o[a].breakpoint] = o[a].settings);
                    s.breakpoints.sort(function(e, t) {
                        return s.options.mobileFirst === !0 ? e - t : t - e
                    })
                }
                "undefined" != typeof document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (s.hidden = "msHidden", s.visibilityChange = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = e.proxy(s.autoPlay, s), s.autoPlayClear = e.proxy(s.autoPlayClear, s), s.changeSlide = e.proxy(s.changeSlide, s), s.clickHandler = e.proxy(s.clickHandler, s), s.selectHandler = e.proxy(s.selectHandler, s), s.setPosition = e.proxy(s.setPosition, s), s.swipeHandler = e.proxy(s.swipeHandler, s), s.dragHandler = e.proxy(s.dragHandler, s), s.keyHandler = e.proxy(s.keyHandler, s), s.autoPlayIterator = e.proxy(s.autoPlayIterator, s), s.instanceUid = n++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.init(), s.checkResponsive(!0)
            }
            var n = 0;
            return t
        }(), t.prototype.addSlide = t.prototype.slickAdd = function(t, n, r) {
            var i = this;
            if ("boolean" == typeof n) r = n, n = null;
            else if (0 > n || n >= i.slideCount) return !1;
            i.unload(), "number" == typeof n ? 0 === n && 0 === i.$slides.length ? e(t).appendTo(i.$slideTrack) : r ? e(t).insertBefore(i.$slides.eq(n)) : e(t).insertAfter(i.$slides.eq(n)) : r === !0 ? e(t).prependTo(i.$slideTrack) : e(t).appendTo(i.$slideTrack), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slides.each(function(t, n) {
                e(n).attr("data-slick-index", t)
            }), i.$slidesCache = i.$slides, i.reinit()
        }, t.prototype.animateHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.animate({
                    height: t
                }, e.options.speed)
            }
        }, t.prototype.animateSlide = function(t, n) {
            var r = {},
                i = this;
            i.animateHeight(), i.options.rtl === !0 && i.options.vertical === !1 && (t = -t), i.transformsEnabled === !1 ? i.options.vertical === !1 ? i.$slideTrack.animate({
                left: t
            }, i.options.speed, i.options.easing, n) : i.$slideTrack.animate({
                top: t
            }, i.options.speed, i.options.easing, n) : i.cssTransitions === !1 ? (i.options.rtl === !0 && (i.currentLeft = -i.currentLeft), e({
                animStart: i.currentLeft
            }).animate({
                animStart: t
            }, {
                duration: i.options.speed,
                easing: i.options.easing,
                step: function(e) {
                    e = Math.ceil(e), i.options.vertical === !1 ? (r[i.animType] = "translate(" + e + "px, 0px)", i.$slideTrack.css(r)) : (r[i.animType] = "translate(0px," + e + "px)", i.$slideTrack.css(r))
                },
                complete: function() {
                    n && n.call()
                }
            })) : (i.applyTransition(), t = Math.ceil(t), r[i.animType] = i.options.vertical === !1 ? "translate3d(" + t + "px, 0px, 0px)" : "translate3d(0px," + t + "px, 0px)", i.$slideTrack.css(r), n && setTimeout(function() {
                i.disableTransition(), n.call()
            }, i.options.speed))
        }, t.prototype.asNavFor = function(t) {
            var n = this,
                r = null !== n.options.asNavFor ? e(n.options.asNavFor).slick("getSlick") : null;
            null !== r && r.slideHandler(t, !0)
        }, t.prototype.applyTransition = function(e) {
            var t = this,
                n = {};
            n[t.transitionType] = t.options.fade === !1 ? t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : "opacity " + t.options.speed + "ms " + t.options.cssEase, t.options.fade === !1 ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
        }, t.prototype.autoPlay = function() {
            var e = this;
            e.autoPlayTimer && clearInterval(e.autoPlayTimer), e.slideCount > e.options.slidesToShow && e.paused !== !0 && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
        }, t.prototype.autoPlayClear = function() {
            var e = this;
            e.autoPlayTimer && clearInterval(e.autoPlayTimer)
        }, t.prototype.autoPlayIterator = function() {
            var e = this;
            e.options.infinite === !1 ? 1 === e.direction ? (e.currentSlide + 1 === e.slideCount - 1 && (e.direction = 0), e.slideHandler(e.currentSlide + e.options.slidesToScroll)) : (0 === e.currentSlide - 1 && (e.direction = 1), e.slideHandler(e.currentSlide - e.options.slidesToScroll)) : e.slideHandler(e.currentSlide + e.options.slidesToScroll)
        }, t.prototype.buildArrows = function() {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow = e(t.options.prevArrow), t.$nextArrow = e(t.options.nextArrow), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.appendTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled"))
        }, t.prototype.buildDots = function() {
            var t, n, r = this;
            if (r.options.dots === !0 && r.slideCount > r.options.slidesToShow) {
                for (n = '<ul class="' + r.options.dotsClass + '">', t = 0; t <= r.getDotCount(); t += 1) n += "<li>" + r.options.customPaging.call(this, r, t) + "</li>";
                n += "</ul>", r.$dots = e(n).appendTo(r.options.appendDots), r.$dots.find("li").first().addClass("slick-active")
            }
        }, t.prototype.buildOut = function() {
            var t = this;
            t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, n) {
                e(n).attr("data-slick-index", t)
            }), t.$slidesCache = t.$slides, t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), (t.options.centerMode === !0 || t.options.swipeToSlide === !0) && (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.options.accessibility === !0 && t.$list.prop("tabIndex", 0), t.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0), t.options.draggable === !0 && t.$list.addClass("draggable")
        }, t.prototype.checkResponsive = function(t) {
            var n, r, i, o = this,
                a = o.$slider.width(),
                s = window.innerWidth || e(window).width();
            if ("window" === o.respondTo ? i = s : "slider" === o.respondTo ? i = a : "min" === o.respondTo && (i = Math.min(s, a)), o.originalSettings.responsive && o.originalSettings.responsive.length > -1 && null !== o.originalSettings.responsive) {
                r = null;
                for (n in o.breakpoints) o.breakpoints.hasOwnProperty(n) && (o.originalSettings.mobileFirst === !1 ? i < o.breakpoints[n] && (r = o.breakpoints[n]) : i > o.breakpoints[n] && (r = o.breakpoints[n]));
                null !== r ? null !== o.activeBreakpoint ? r !== o.activeBreakpoint && (o.activeBreakpoint = r, "unslick" === o.breakpointSettings[r] ? o.unslick() : (o.options = e.extend({}, o.originalSettings, o.breakpointSettings[r]), t === !0 && (o.currentSlide = o.options.initialSlide), o.refresh())) : (o.activeBreakpoint = r, "unslick" === o.breakpointSettings[r] ? o.unslick() : (o.options = e.extend({}, o.originalSettings, o.breakpointSettings[r]), t === !0 && (o.currentSlide = o.options.initialSlide), o.refresh())) : null !== o.activeBreakpoint && (o.activeBreakpoint = null, o.options = o.originalSettings, t === !0 && (o.currentSlide = o.options.initialSlide), o.refresh())
            }
        }, t.prototype.changeSlide = function(t, n) {
            var r, i, o, a = this,
                s = e(t.target);
            switch (s.is("a") && t.preventDefault(), o = 0 !== a.slideCount % a.options.slidesToScroll, r = o ? 0 : (a.slideCount - a.currentSlide) % a.options.slidesToScroll, t.data.message) {
                case "previous":
                    i = 0 === r ? a.options.slidesToScroll : a.options.slidesToShow - r, a.slideCount > a.options.slidesToShow && a.slideHandler(a.currentSlide - i, !1, n);
                    break;
                case "next":
                    i = 0 === r ? a.options.slidesToScroll : r, a.slideCount > a.options.slidesToShow && a.slideHandler(a.currentSlide + i, !1, n);
                    break;
                case "index":
                    var u = 0 === t.data.index ? 0 : t.data.index || e(t.target).parent().index() * a.options.slidesToScroll;
                    a.slideHandler(a.checkNavigable(u), !1, n);
                    break;
                default:
                    return
            }
        }, t.prototype.checkNavigable = function(e) {
            var t, n, r = this;
            if (t = r.getNavigableIndexes(), n = 0, e > t[t.length - 1]) e = t[t.length - 1];
            else
                for (var i in t) {
                    if (e < t[i]) {
                        e = n;
                        break
                    }
                    n = t[i]
                }
            return e
        }, t.prototype.clickHandler = function(e) {
            var t = this;
            t.shouldClick === !1 && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
        }, t.prototype.destroy = function() {
            var t = this;
            t.autoPlayClear(), t.touchObject = {}, e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && "object" != typeof t.options.prevArrow && t.$prevArrow.remove(), t.$nextArrow && "object" != typeof t.options.nextArrow && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-center slick-visible").removeAttr("data-slick-index").css({
                position: "",
                left: "",
                top: "",
                zIndex: "",
                opacity: "",
                width: ""
            }), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$list.off(".slick"), e(window).off(".slick-" + t.instanceUid), e(document).off(".slick-" + t.instanceUid), t.$slider.html(t.$slides)
        }, t.prototype.disableTransition = function(e) {
            var t = this,
                n = {};
            n[t.transitionType] = "", t.options.fade === !1 ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
        }, t.prototype.fadeSlide = function(e, t) {
            var n = this;
            n.cssTransitions === !1 ? (n.$slides.eq(e).css({
                zIndex: 1e3
            }), n.$slides.eq(e).animate({
                opacity: 1
            }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
                opacity: 1,
                zIndex: 1e3
            }), t && setTimeout(function() {
                n.disableTransition(e), t.call()
            }, n.options.speed))
        }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
            var t = this;
            null !== e && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
        }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
            var e = this;
            return e.currentSlide
        }, t.prototype.getDotCount = function() {
            var e = this,
                t = 0,
                n = 0,
                r = 0;
            if (e.options.infinite === !0) r = Math.ceil(e.slideCount / e.options.slidesToScroll);
            else if (e.options.centerMode === !0) r = e.slideCount;
            else
                for (; t < e.slideCount;) ++r, t = n + e.options.slidesToShow, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return r - 1
        }, t.prototype.getLeft = function(e) {
            var t, n, r, i = this,
                o = 0;
            return i.slideOffset = 0, n = i.$slides.first().outerHeight(), i.options.infinite === !0 ? (i.slideCount > i.options.slidesToShow && (i.slideOffset = -1 * i.slideWidth * i.options.slidesToShow, o = -1 * n * i.options.slidesToShow), 0 !== i.slideCount % i.options.slidesToScroll && e + i.options.slidesToScroll > i.slideCount && i.slideCount > i.options.slidesToShow && (e > i.slideCount ? (i.slideOffset = -1 * (i.options.slidesToShow - (e - i.slideCount)) * i.slideWidth, o = -1 * (i.options.slidesToShow - (e - i.slideCount)) * n) : (i.slideOffset = -1 * i.slideCount % i.options.slidesToScroll * i.slideWidth, o = -1 * i.slideCount % i.options.slidesToScroll * n))) : e + i.options.slidesToShow > i.slideCount && (i.slideOffset = (e + i.options.slidesToShow - i.slideCount) * i.slideWidth, o = (e + i.options.slidesToShow - i.slideCount) * n), i.slideCount <= i.options.slidesToShow && (i.slideOffset = 0, o = 0), i.options.centerMode === !0 && i.options.infinite === !0 ? i.slideOffset += i.slideWidth * Math.floor(i.options.slidesToShow / 2) - i.slideWidth : i.options.centerMode === !0 && (i.slideOffset = 0, i.slideOffset += i.slideWidth * Math.floor(i.options.slidesToShow / 2)), t = i.options.vertical === !1 ? -1 * e * i.slideWidth + i.slideOffset : -1 * e * n + o, i.options.variableWidth === !0 && (r = i.$slideTrack.children(".slick-slide").eq(i.slideCount <= i.options.slidesToShow || i.options.infinite === !1 ? e : e + i.options.slidesToShow), t = r[0] ? -1 * r[0].offsetLeft : 0, i.options.centerMode === !0 && (r = i.$slideTrack.children(".slick-slide").eq(i.options.infinite === !1 ? e : e + i.options.slidesToShow + 1), t = r[0] ? -1 * r[0].offsetLeft : 0, t += (i.$list.width() - r.outerWidth()) / 2)), t
        }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
            var t = this;
            return t.options[e]
        }, t.prototype.getNavigableIndexes = function() {
            var e, t = this,
                n = 0,
                r = 0,
                i = [];
            for (t.options.infinite === !1 ? (e = t.slideCount - t.options.slidesToShow + 1, t.options.centerMode === !0 && (e = t.slideCount)) : (n = -1 * t.slideCount, r = -1 * t.slideCount, e = 2 * t.slideCount); e > n;) i.push(n), n = r + t.options.slidesToScroll, r += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            return i
        }, t.prototype.getSlick = function() {
            return this
        }, t.prototype.getSlideCount = function() {
            var t, n, r, i = this;
            return r = i.options.centerMode === !0 ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0, i.options.swipeToSlide === !0 ? (i.$slideTrack.find(".slick-slide").each(function(t, o) {
                return o.offsetLeft - r + e(o).outerWidth() / 2 > -1 * i.swipeLeft ? (n = o, !1) : void 0
            }), t = Math.abs(e(n).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll
        }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
            var n = this;
            n.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(e)
                }
            }, t)
        }, t.prototype.init = function() {
            var t = this;
            e(t.$slider).hasClass("slick-initialized") || (e(t.$slider).addClass("slick-initialized"), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots()), t.$slider.trigger("init", [t])
        }, t.prototype.initArrowEvents = function() {
            var e = this;
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.on("click.slick", {
                message: "previous"
            }, e.changeSlide), e.$nextArrow.on("click.slick", {
                message: "next"
            }, e.changeSlide))
        }, t.prototype.initDotEvents = function() {
            var t = this;
            t.options.dots === !0 && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", {
                message: "index"
            }, t.changeSlide), t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && e("li", t.$dots).on("mouseenter.slick", function() {
                t.paused = !0, t.autoPlayClear()
            }).on("mouseleave.slick", function() {
                t.paused = !1, t.autoPlay()
            })
        }, t.prototype.initializeEvents = function() {
            var t = this;
            t.initArrowEvents(), t.initDotEvents(), t.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), t.options.autoplay === !0 && (e(document).on(t.visibilityChange, function() {
                t.visibility()
            }), t.options.pauseOnHover === !0 && (t.$list.on("mouseenter.slick", function() {
                t.paused = !0, t.autoPlayClear()
            }), t.$list.on("mouseleave.slick", function() {
                t.paused = !1, t.autoPlay()
            }))), t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, function() {
                t.checkResponsive(), t.setPosition()
            }), e(window).on("resize.slick.slick-" + t.instanceUid, function() {
                e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
                    t.windowWidth = e(window).width(), t.checkResponsive(), t.setPosition()
                }, 50))
            }), e("*[draggable!=true]", t.$slideTrack).on("dragstart", function(e) {
                e.preventDefault()
            }), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
        }, t.prototype.initUI = function() {
            var e = this;
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.show(), e.options.autoplay === !0 && e.autoPlay()
        }, t.prototype.keyHandler = function(e) {
            var t = this;
            37 === e.keyCode && t.options.accessibility === !0 ? t.changeSlide({
                data: {
                    message: "previous"
                }
            }) : 39 === e.keyCode && t.options.accessibility === !0 && t.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, t.prototype.lazyLoad = function() {
            function t(t) {
                e("img[data-lazy]", t).each(function() {
                    var t = e(this),
                        n = e(this).attr("data-lazy");
                    t.load(function() {
                        t.animate({
                            opacity: 1
                        }, 200)
                    }).css({
                        opacity: 0
                    }).attr("src", n).removeAttr("data-lazy").removeClass("slick-loading")
                })
            }
            var n, r, i, o, a = this;
            a.options.centerMode === !0 ? a.options.infinite === !0 ? (i = a.currentSlide + (a.options.slidesToShow / 2 + 1), o = i + a.options.slidesToShow + 2) : (i = Math.max(0, a.currentSlide - (a.options.slidesToShow / 2 + 1)), o = 2 + (a.options.slidesToShow / 2 + 1) + a.currentSlide) : (i = a.options.infinite ? a.options.slidesToShow + a.currentSlide : a.currentSlide, o = i + a.options.slidesToShow, a.options.fade === !0 && (i > 0 && i--, o <= a.slideCount && o++)), n = a.$slider.find(".slick-slide").slice(i, o), t(n), a.slideCount <= a.options.slidesToShow ? (r = a.$slider.find(".slick-slide"), t(r)) : a.currentSlide >= a.slideCount - a.options.slidesToShow ? (r = a.$slider.find(".slick-cloned").slice(0, a.options.slidesToShow), t(r)) : 0 === a.currentSlide && (r = a.$slider.find(".slick-cloned").slice(-1 * a.options.slidesToShow), t(r))
        }, t.prototype.loadSlider = function() {
            var e = this;
            e.setPosition(), e.$slideTrack.css({
                opacity: 1
            }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
        }, t.prototype.next = t.prototype.slickNext = function() {
            var e = this;
            e.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, t.prototype.pause = t.prototype.slickPause = function() {
            var e = this;
            e.autoPlayClear(), e.paused = !0
        }, t.prototype.play = t.prototype.slickPlay = function() {
            var e = this;
            e.paused = !1, e.autoPlay()
        }, t.prototype.postSlide = function(e) {
            var t = this;
            t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay === !0 && t.paused === !1 && t.autoPlay()
        }, t.prototype.prev = t.prototype.slickPrev = function() {
            var e = this;
            e.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, t.prototype.progressiveLazyLoad = function() {
            var t, n, r = this;
            t = e("img[data-lazy]", r.$slider).length, t > 0 && (n = e("img[data-lazy]", r.$slider).first(), n.attr("src", n.attr("data-lazy")).removeClass("slick-loading").load(function() {
                n.removeAttr("data-lazy"), r.progressiveLazyLoad()
            }).error(function() {
                n.removeAttr("data-lazy"), r.progressiveLazyLoad()
            }))
        }, t.prototype.refresh = function() {
            var t = this,
                n = t.currentSlide;
            t.destroy(), e.extend(t, t.initials), t.init(), t.changeSlide({
                data: {
                    message: "index",
                    index: n
                }
            }, !0)
        }, t.prototype.reinit = function() {
            var t = this;
            t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses(0), t.setPosition(), t.$slider.trigger("reInit", [t])
        }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, n) {
            var r = this;
            return "boolean" == typeof e ? (t = e, e = t === !0 ? 0 : r.slideCount - 1) : e = t === !0 ? --e : e, r.slideCount < 1 || 0 > e || e > r.slideCount - 1 ? !1 : (r.unload(), n === !0 ? r.$slideTrack.children().remove() : r.$slideTrack.children(this.options.slide).eq(e).remove(), r.$slides = r.$slideTrack.children(this.options.slide), r.$slideTrack.children(this.options.slide).detach(), r.$slideTrack.append(r.$slides), r.$slidesCache = r.$slides, void r.reinit())
        }, t.prototype.setCSS = function(e) {
            var t, n, r = this,
                i = {};
            r.options.rtl === !0 && (e = -e), t = "left" == r.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == r.positionProp ? Math.ceil(e) + "px" : "0px", i[r.positionProp] = e, r.transformsEnabled === !1 ? r.$slideTrack.css(i) : (i = {}, r.cssTransitions === !1 ? (i[r.animType] = "translate(" + t + ", " + n + ")", r.$slideTrack.css(i)) : (i[r.animType] = "translate3d(" + t + ", " + n + ", 0px)", r.$slideTrack.css(i)))
        }, t.prototype.setDimensions = function() {
            var e = this;
            if (e.options.vertical === !1 ? e.options.centerMode === !0 && e.$list.css({
                    padding: "0px " + e.options.centerPadding
                }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), e.options.centerMode === !0 && e.$list.css({
                    padding: e.options.centerPadding + " 0px"
                })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), e.options.vertical === !1 && e.options.variableWidth === !1) e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length));
            else if (e.options.variableWidth === !0) {
                var t = 0;
                e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.children(".slick-slide").each(function() {
                    t += e.listWidth
                }), e.$slideTrack.width(Math.ceil(t) + 1)
            } else e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length));
            var n = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
            e.options.variableWidth === !1 && e.$slideTrack.children(".slick-slide").width(e.slideWidth - n)
        }, t.prototype.setFade = function() {
            var t, n = this;
            n.$slides.each(function(r, i) {
                t = -1 * n.slideWidth * r, e(i).css(n.options.rtl === !0 ? {
                    position: "relative",
                    right: t,
                    top: 0,
                    zIndex: 800,
                    opacity: 0
                } : {
                    position: "relative",
                    left: t,
                    top: 0,
                    zIndex: 800,
                    opacity: 0
                })
            }), n.$slides.eq(n.currentSlide).css({
                zIndex: 900,
                opacity: 1
            })
        }, t.prototype.setHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.css("height", t)
            }
        }, t.prototype.setOption = t.prototype.slickSetOption = function(e, t, n) {
            var r = this;
            r.options[e] = t, n === !0 && (r.unload(), r.reinit())
        }, t.prototype.setPosition = function() {
            var e = this;
            e.setDimensions(), e.setHeight(), e.options.fade === !1 ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
        }, t.prototype.setProps = function() {
            var e = this,
                t = document.body.style;
            e.positionProp = e.options.vertical === !0 ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && e.options.useCSS === !0 && (e.cssTransitions = !0), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && e.animType !== !1 && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = null !== e.animType && e.animType !== !1
        }, t.prototype.setSlideClasses = function(e) {
            var t, n, r, i, o = this;
            o.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center"), n = o.$slider.find(".slick-slide"), o.options.centerMode === !0 ? (t = Math.floor(o.options.slidesToShow / 2), o.options.infinite === !0 && (e >= t && e <= o.slideCount - 1 - t ? o.$slides.slice(e - t, e + t + 1).addClass("slick-active") : (r = o.options.slidesToShow + e, n.slice(r - t + 1, r + t + 2).addClass("slick-active")), 0 === e ? n.eq(n.length - 1 - o.options.slidesToShow).addClass("slick-center") : e === o.slideCount - 1 && n.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(e, e + o.options.slidesToShow).addClass("slick-active") : n.length <= o.options.slidesToShow ? n.addClass("slick-active") : (i = o.slideCount % o.options.slidesToShow, r = o.options.infinite === !0 ? o.options.slidesToShow + e : e, o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - e < o.options.slidesToShow ? n.slice(r - (o.options.slidesToShow - i), r + i).addClass("slick-active") : n.slice(r, r + o.options.slidesToShow).addClass("slick-active")), "ondemand" === o.options.lazyLoad && o.lazyLoad()
        }, t.prototype.setupInfinite = function() {
            var t, n, r, i = this;
            if (i.options.fade === !0 && (i.options.centerMode = !1), i.options.infinite === !0 && i.options.fade === !1 && (n = null, i.slideCount > i.options.slidesToShow)) {
                for (r = i.options.centerMode === !0 ? i.options.slidesToShow + 1 : i.options.slidesToShow, t = i.slideCount; t > i.slideCount - r; t -= 1) n = t - 1, e(i.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - i.slideCount).prependTo(i.$slideTrack).addClass("slick-cloned");
                for (t = 0; r > t; t += 1) n = t, e(i.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + i.slideCount).appendTo(i.$slideTrack).addClass("slick-cloned");
                i.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    e(this).attr("id", "")
                })
            }
        }, t.prototype.selectHandler = function(t) {
            var n = this,
                r = parseInt(e(t.target).parents(".slick-slide").attr("data-slick-index"));
            return r || (r = 0), n.slideCount <= n.options.slidesToShow ? (n.$slider.find(".slick-slide").removeClass("slick-active"), n.$slides.eq(r).addClass("slick-active"), n.options.centerMode === !0 && (n.$slider.find(".slick-slide").removeClass("slick-center"), n.$slides.eq(r).addClass("slick-center")), void n.asNavFor(r)) : void n.slideHandler(r)
        }, t.prototype.slideHandler = function(e, t, n) {
            var r, i, o, a, s = null,
                u = this;
            return t = t || !1, u.animating === !0 && u.options.waitForAnimate === !0 || u.options.fade === !0 && u.currentSlide === e || u.slideCount <= u.options.slidesToShow ? void 0 : (t === !1 && u.asNavFor(e), r = e, s = u.getLeft(r), a = u.getLeft(u.currentSlide), u.currentLeft = null === u.swipeLeft ? a : u.swipeLeft, u.options.infinite === !1 && u.options.centerMode === !1 && (0 > e || e > u.getDotCount() * u.options.slidesToScroll) ? void(u.options.fade === !1 && (r = u.currentSlide, n !== !0 ? u.animateSlide(a, function() {
                u.postSlide(r)
            }) : u.postSlide(r))) : u.options.infinite === !1 && u.options.centerMode === !0 && (0 > e || e > u.slideCount - u.options.slidesToScroll) ? void(u.options.fade === !1 && (r = u.currentSlide, n !== !0 ? u.animateSlide(a, function() {
                u.postSlide(r)
            }) : u.postSlide(r))) : (u.options.autoplay === !0 && clearInterval(u.autoPlayTimer), i = 0 > r ? 0 !== u.slideCount % u.options.slidesToScroll ? u.slideCount - u.slideCount % u.options.slidesToScroll : u.slideCount + r : r >= u.slideCount ? 0 !== u.slideCount % u.options.slidesToScroll ? 0 : r - u.slideCount : r, u.animating = !0, u.$slider.trigger("beforeChange", [u, u.currentSlide, i]), o = u.currentSlide, u.currentSlide = i, u.setSlideClasses(u.currentSlide), u.updateDots(), u.updateArrows(), u.options.fade === !0 ? (n !== !0 ? u.fadeSlide(i, function() {
                u.postSlide(i)
            }) : u.postSlide(i), void u.animateHeight()) : void(n !== !0 ? u.animateSlide(s, function() {
                u.postSlide(i)
            }) : u.postSlide(i))))
        }, t.prototype.startLoad = function() {
            var e = this;
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
        }, t.prototype.swipeDirection = function() {
            var e, t, n, r, i = this;
            return e = i.touchObject.startX - i.touchObject.curX, t = i.touchObject.startY - i.touchObject.curY, n = Math.atan2(t, e), r = Math.round(180 * n / Math.PI), 0 > r && (r = 360 - Math.abs(r)), 45 >= r && r >= 0 ? i.options.rtl === !1 ? "left" : "right" : 360 >= r && r >= 315 ? i.options.rtl === !1 ? "left" : "right" : r >= 135 && 225 >= r ? i.options.rtl === !1 ? "right" : "left" : "vertical"
        }, t.prototype.swipeEnd = function() {
            var e, t = this;
            if (t.dragging = !1, t.shouldClick = t.touchObject.swipeLength > 10 ? !1 : !0, void 0 === t.touchObject.curX) return !1;
            if (t.touchObject.edgeHit === !0 && t.$slider.trigger("edge", [t, t.swipeDirection()]), t.touchObject.swipeLength >= t.touchObject.minSwipe) switch (t.swipeDirection()) {
                case "left":
                    e = t.options.swipeToSlide ? t.checkNavigable(t.currentSlide + t.getSlideCount()) : t.currentSlide + t.getSlideCount(), t.slideHandler(e), t.currentDirection = 0, t.touchObject = {}, t.$slider.trigger("swipe", [t, "left"]);
                    break;
                case "right":
                    e = t.options.swipeToSlide ? t.checkNavigable(t.currentSlide - t.getSlideCount()) : t.currentSlide - t.getSlideCount(), t.slideHandler(e), t.currentDirection = 1, t.touchObject = {}, t.$slider.trigger("swipe", [t, "right"])
            } else t.touchObject.startX !== t.touchObject.curX && (t.slideHandler(t.currentSlide), t.touchObject = {})
        }, t.prototype.swipeHandler = function(e) {
            var t = this;
            if (!(t.options.swipe === !1 || "ontouchend" in document && t.options.swipe === !1 || t.options.draggable === !1 && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, e.data.action) {
                case "start":
                    t.swipeStart(e);
                    break;
                case "move":
                    t.swipeMove(e);
                    break;
                case "end":
                    t.swipeEnd(e)
            }
        }, t.prototype.swipeMove = function(e) {
            var t, n, r, i, o, a = this;
            return o = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !a.dragging || o && 1 !== o.length ? !1 : (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== o ? o[0].pageX : e.clientX, a.touchObject.curY = void 0 !== o ? o[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), n = a.swipeDirection(), "vertical" !== n ? (void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && e.preventDefault(), i = (a.options.rtl === !1 ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), r = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, a.options.infinite === !1 && (0 === a.currentSlide && "right" === n || a.currentSlide >= a.getDotCount() && "left" === n) && (r = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), a.swipeLeft = a.options.vertical === !1 ? t + r * i : t + r * (a.$list.height() / a.listWidth) * i, a.options.fade === !0 || a.options.touchMove === !1 ? !1 : a.animating === !0 ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft)) : void 0)
        }, t.prototype.swipeStart = function(e) {
            var t, n = this;
            return 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow ? (n.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void(n.dragging = !0))
        }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
            var e = this;
            null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
        }, t.prototype.unload = function() {
            var t = this;
            e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && "object" != typeof t.options.prevArrow && t.$prevArrow.remove(), t.$nextArrow && "object" != typeof t.options.nextArrow && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible").css("width", "")
        }, t.prototype.unslick = function() {
            var e = this;
            e.destroy()
        }, t.prototype.updateArrows = function() {
            var e, t = this;
            e = Math.floor(t.options.slidesToShow / 2), t.options.arrows === !0 && t.options.infinite !== !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.removeClass("slick-disabled"), t.$nextArrow.removeClass("slick-disabled"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled"), t.$nextArrow.removeClass("slick-disabled")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && t.options.centerMode === !1 ? (t.$nextArrow.addClass("slick-disabled"), t.$prevArrow.removeClass("slick-disabled")) : t.currentSlide >= t.slideCount - 1 && t.options.centerMode === !0 && (t.$nextArrow.addClass("slick-disabled"), t.$prevArrow.removeClass("slick-disabled")))
        }, t.prototype.updateDots = function() {
            var e = this;
            null !== e.$dots && (e.$dots.find("li").removeClass("slick-active"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
        }, t.prototype.visibility = function() {
            var e = this;
            document[e.hidden] ? (e.paused = !0, e.autoPlayClear()) : (e.paused = !1, e.autoPlay())
        }, e.fn.slick = function() {
            var e, n = this,
                r = arguments[0],
                i = Array.prototype.slice.call(arguments, 1),
                o = n.length,
                a = 0;
            for (a; o > a; a++)
                if ("object" == typeof r || "undefined" == typeof r ? n[a].slick = new t(n[a], r) : e = n[a].slick[r].apply(n[a].slick, i), "undefined" != typeof e) return e;
            return n
        }, e(function() {
            e("[data-slick]").slick()
        })
    });