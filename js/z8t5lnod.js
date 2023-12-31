function GetCount() {
    dateNow = new Date, amount = tomorrow.getTime() - dateNow.getTime(), delete dateNow, amount < 0 ? ($("#timer .hours").html("00"), $("#timer .mins").html("00"), $("#timer .secs").html("00")) : (hours = 0, mins = 0, secs = 0, out = "", amount = Math.floor(amount / 1e3), amount %= 86400, hours = Math.floor(amount / 3600), amount %= 3600, mins = Math.floor(amount / 60), amount %= 60, secs = Math.floor(amount), hours < 10 && (hours = "0" + hours), mins < 10 && (mins = "0" + mins), secs < 10 && (secs = "0" + secs), $("#timer .hours").html(hours), $("#timer .mins").html(mins), $("#timer .secs").html(secs), setTimeout("GetCount()", 1e3))
}! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function i(t) {
        var e = !!t && "length" in t && t.length,
            i = st.type(t);
        return "function" !== i && !st.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    function n(t, e, i) {
        if (st.isFunction(e)) return st.grep(t, function(t, n) {
            return !!e.call(t, n, t) !== i
        });
        if (e.nodeType) return st.grep(t, function(t) {
            return t === e !== i
        });
        if ("string" == typeof e) {
            if (pt.test(e)) return st.filter(e, t, i);
            e = st.filter(e, t)
        }
        return st.grep(t, function(t) {
            return J.call(e, t) > -1 !== i
        })
    }

    function o(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function s(t) {
        var e = {};
        return st.each(t.match(vt) || [], function(t, i) {
            e[i] = !0
        }), e
    }

    function r() {
        Q.removeEventListener("DOMContentLoaded", r), t.removeEventListener("load", r), st.ready()
    }

    function a() {
        this.expando = st.expando + a.uid++
    }

    function l(t, e, i) {
        var n;
        if (void 0 === i && 1 === t.nodeType)
            if (n = "data-" + e.replace(kt, "-$&").toLowerCase(), "string" == typeof(i = t.getAttribute(n))) {
                try {
                    i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : Tt.test(i) ? st.parseJSON(i) : i)
                } catch (t) {}
                Ct.set(t, e, i)
            } else i = void 0;
        return i
    }

    function c(t, e, i, n) {
        var o, s = 1,
            r = 20,
            a = n ? function() {
                return n.cur()
            } : function() {
                return st.css(t, e, "")
            },
            l = a(),
            c = i && i[3] || (st.cssNumber[e] ? "" : "px"),
            d = (st.cssNumber[e] || "px" !== c && +l) && _t.exec(st.css(t, e));
        if (d && d[3] !== c) {
            c = c || d[3], i = i || [], d = +l || 1;
            do {
                s = s || ".5", d /= s, st.style(t, e, d + c)
            } while (s !== (s = a() / l) && 1 !== s && --r)
        }
        return i && (d = +d || +l || 0, o = i[1] ? d + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = d, n.end = o)), o
    }

    function d(t, e) {
        var i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && st.nodeName(t, e) ? st.merge([t], i) : i
    }

    function u(t, e) {
        for (var i = 0, n = t.length; n > i; i++) bt.set(t[i], "globalEval", !e || bt.get(e[i], "globalEval"))
    }

    function p(t, e, i, n, o) {
        for (var s, r, a, l, c, p, h = e.createDocumentFragment(), f = [], g = 0, m = t.length; m > g; g++)
            if ((s = t[g]) || 0 === s)
                if ("object" === st.type(s)) st.merge(f, s.nodeType ? [s] : s);
                else if (jt.test(s)) {
            for (r = r || h.appendChild(e.createElement("div")), a = (Dt.exec(s) || ["", ""])[1].toLowerCase(), l = It[a] || It._default, r.innerHTML = l[1] + st.htmlPrefilter(s) + l[2], p = l[0]; p--;) r = r.lastChild;
            st.merge(f, r.childNodes), r = h.firstChild, r.textContent = ""
        } else f.push(e.createTextNode(s));
        for (h.textContent = "", g = 0; s = f[g++];)
            if (n && st.inArray(s, n) > -1) o && o.push(s);
            else if (c = st.contains(s.ownerDocument, s), r = d(h.appendChild(s), "script"), c && u(r), i)
            for (p = 0; s = r[p++];) Pt.test(s.type || "") && i.push(s);
        return h
    }

    function h() {
        return !0
    }

    function f() {
        return !1
    }

    function g() {
        try {
            return Q.activeElement
        } catch (t) {}
    }

    function m(t, e, i, n, o, s) {
        var r, a;
        if ("object" == typeof e) {
            "string" != typeof i && (n = n || i, i = void 0);
            for (a in e) m(t, a, i, n, e[a], s);
            return t
        }
        if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), o === !1) o = f;
        else if (!o) return t;
        return 1 === s && (r = o, o = function(t) {
            return st().off(t), r.apply(this, arguments)
        }, o.guid = r.guid || (r.guid = st.guid++)), t.each(function() {
            st.event.add(this, e, o, n, i)
        })
    }

    function v(t, e) {
        return st.nodeName(t, "table") && st.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function y(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function w(t) {
        var e = zt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function x(t, e) {
        var i, n, o, s, r, a, l, c;
        if (1 === e.nodeType) {
            if (bt.hasData(t) && (s = bt.access(t), r = bt.set(e, s), c = s.events)) {
                delete r.handle, r.events = {};
                for (o in c)
                    for (i = 0, n = c[o].length; n > i; i++) st.event.add(e, o, c[o][i])
            }
            Ct.hasData(t) && (a = Ct.access(t), l = st.extend({}, a), Ct.set(e, l))
        }
    }

    function b(t, e) {
        var i = e.nodeName.toLowerCase();
        "input" === i && At.test(t.type) ? e.checked = t.checked : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
    }

    function C(t, e, i, n) {
        e = Z.apply([], e);
        var o, s, r, a, l, c, u = 0,
            h = t.length,
            f = h - 1,
            g = e[0],
            m = st.isFunction(g);
        if (m || h > 1 && "string" == typeof g && !nt.checkClone && Nt.test(g)) return t.each(function(o) {
            var s = t.eq(o);
            m && (e[0] = g.call(this, o, s.html())), C(s, e, i, n)
        });
        if (h && (o = p(e, t[0].ownerDocument, !1, t, n), s = o.firstChild, 1 === o.childNodes.length && (o = s), s || n)) {
            for (r = st.map(d(o, "script"), y), a = r.length; h > u; u++) l = o, u !== f && (l = st.clone(l, !0, !0), a && st.merge(r, d(l, "script"))), i.call(t[u], l, u);
            if (a)
                for (c = r[r.length - 1].ownerDocument, st.map(r, w), u = 0; a > u; u++) l = r[u], Pt.test(l.type || "") && !bt.access(l, "globalEval") && st.contains(c, l) && (l.src ? st._evalUrl && st._evalUrl(l.src) : st.globalEval(l.textContent.replace(qt, "")))
        }
        return t
    }

    function T(t, e, i) {
        for (var n, o = e ? st.filter(e, t) : t, s = 0; null != (n = o[s]); s++) i || 1 !== n.nodeType || st.cleanData(d(n)), n.parentNode && (i && st.contains(n.ownerDocument, n) && u(d(n, "script")), n.parentNode.removeChild(n));
        return t
    }

    function k(t, e) {
        var i = st(e.createElement(t)).appendTo(e.body),
            n = st.css(i[0], "display");
        return i.detach(), n
    }

    function S(t) {
        var e = Q,
            i = Ft[t];
        return i || (i = k(t, e), "none" !== i && i || (Wt = (Wt || st("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Wt[0].contentDocument, e.write(), e.close(), i = k(t, e), Wt.detach()), Ft[t] = i), i
    }

    function _(t, e, i) {
        var n, o, s, r, a = t.style;
        return i = i || Xt(t), r = i ? i.getPropertyValue(e) || i[e] : void 0, "" !== r && void 0 !== r || st.contains(t.ownerDocument, t) || (r = st.style(t, e)), i && !nt.pixelMarginRight() && Bt.test(r) && Rt.test(e) && (n = a.width, o = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = o, a.maxWidth = s), void 0 !== r ? r + "" : r
    }

    function $(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function E(t) {
        if (t in Kt) return t;
        for (var e = t[0].toUpperCase() + t.slice(1), i = Zt.length; i--;)
            if ((t = Zt[i] + e) in Kt) return t
    }

    function A(t, e, i) {
        var n = _t.exec(e);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
    }

    function D(t, e, i, n, o) {
        for (var s = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, r = 0; 4 > s; s += 2) "margin" === i && (r += st.css(t, i + $t[s], !0, o)), n ? ("content" === i && (r -= st.css(t, "padding" + $t[s], !0, o)), "margin" !== i && (r -= st.css(t, "border" + $t[s] + "Width", !0, o))) : (r += st.css(t, "padding" + $t[s], !0, o), "padding" !== i && (r += st.css(t, "border" + $t[s] + "Width", !0, o)));
        return r
    }

    function P(e, i, n) {
        var o = !0,
            s = "width" === i ? e.offsetWidth : e.offsetHeight,
            r = Xt(e),
            a = "border-box" === st.css(e, "boxSizing", !1, r);
        if (Q.msFullscreenElement && t.top !== t && e.getClientRects().length && (s = Math.round(100 * e.getBoundingClientRect()[i])), 0 >= s || null == s) {
            if (s = _(e, i, r), (0 > s || null == s) && (s = e.style[i]), Bt.test(s)) return s;
            o = a && (nt.boxSizingReliable() || s === e.style[i]), s = parseFloat(s) || 0
        }
        return s + D(e, i, n || (a ? "border" : "content"), o, r) + "px"
    }

    function I(t, e) {
        for (var i, n, o, s = [], r = 0, a = t.length; a > r; r++) n = t[r], n.style && (s[r] = bt.get(n, "olddisplay"), i = n.style.display, e ? (s[r] || "none" !== i || (n.style.display = ""), "" === n.style.display && Et(n) && (s[r] = bt.access(n, "olddisplay", S(n.nodeName)))) : (o = Et(n), "none" === i && o || bt.set(n, "olddisplay", o ? i : st.css(n, "display"))));
        for (r = 0; a > r; r++) n = t[r], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? s[r] || "" : "none"));
        return t
    }

    function j(t, e, i, n, o) {
        return new j.prototype.init(t, e, i, n, o)
    }

    function L() {
        return t.setTimeout(function() {
            Jt = void 0
        }), Jt = st.now()
    }

    function O(t, e) {
        var i, n = 0,
            o = {
                height: t
            };
        for (e = e ? 1 : 0; 4 > n; n += 2 - e) i = $t[n], o["margin" + i] = o["padding" + i] = t;
        return e && (o.opacity = o.width = t), o
    }

    function H(t, e, i) {
        for (var n, o = (z.tweeners[e] || []).concat(z.tweeners["*"]), s = 0, r = o.length; r > s; s++)
            if (n = o[s].call(i, e, t)) return n
    }

    function M(t, e, i) {
        var n, o, s, r, a, l, c, d = this,
            u = {},
            p = t.style,
            h = t.nodeType && Et(t),
            f = bt.get(t, "fxshow");
        i.queue || (a = st._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, d.always(function() {
            d.always(function() {
                a.unqueued--, st.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], c = st.css(t, "display"), "inline" === ("none" === c ? bt.get(t, "olddisplay") || S(t.nodeName) : c) && "none" === st.css(t, "float") && (p.display = "inline-block")), i.overflow && (p.overflow = "hidden", d.always(function() {
            p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
        }));
        for (n in e)
            if (o = e[n], ee.exec(o)) {
                if (delete e[n], s = s || "toggle" === o, o === (h ? "hide" : "show")) {
                    if ("show" !== o || !f || void 0 === f[n]) continue;
                    h = !0
                }
                u[n] = f && f[n] || st.style(t, n)
            } else c = void 0;
        if (st.isEmptyObject(u)) "inline" === ("none" === c ? S(t.nodeName) : c) && (p.display = c);
        else {
            f ? "hidden" in f && (h = f.hidden) : f = bt.access(t, "fxshow", {}), s && (f.hidden = !h), h ? st(t).show() : d.done(function() {
                st(t).hide()
            }), d.done(function() {
                var e;
                bt.remove(t, "fxshow");
                for (e in u) st.style(t, e, u[e])
            });
            for (n in u) r = H(h ? f[n] : 0, n, d), n in f || (f[n] = r.start, h && (r.end = r.start, r.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function N(t, e) {
        var i, n, o, s, r;
        for (i in t)
            if (n = st.camelCase(i), o = e[n], s = t[i], st.isArray(s) && (o = s[1], s = t[i] = s[0]), i !== n && (t[n] = s, delete t[i]), (r = st.cssHooks[n]) && "expand" in r) {
                s = r.expand(s), delete t[n];
                for (i in s) i in t || (t[i] = s[i], e[i] = o)
            } else e[n] = o
    }

    function z(t, e, i) {
        var n, o, s = 0,
            r = z.prefilters.length,
            a = st.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var e = Jt || L(), i = Math.max(0, c.startTime + c.duration - e), n = i / c.duration || 0, s = 1 - n, r = 0, l = c.tweens.length; l > r; r++) c.tweens[r].run(s);
                return a.notifyWith(t, [c, s, i]), 1 > s && l ? i : (a.resolveWith(t, [c]), !1)
            },
            c = a.promise({
                elem: t,
                props: st.extend({}, e),
                opts: st.extend(!0, {
                    specialEasing: {},
                    easing: st.easing._default
                }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: Jt || L(),
                duration: i.duration,
                tweens: [],
                createTween: function(e, i) {
                    var n = st.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function(e) {
                    var i = 0,
                        n = e ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n > i; i++) c.tweens[i].run(1);
                    return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
                }
            }),
            d = c.props;
        for (N(d, c.opts.specialEasing); r > s; s++)
            if (n = z.prefilters[s].call(c, t, d, c.opts)) return st.isFunction(n.stop) && (st._queueHooks(c.elem, c.opts.queue).stop = st.proxy(n.stop, n)), n;
        return st.map(d, H, c), st.isFunction(c.opts.start) && c.opts.start.call(t, c), st.fx.timer(st.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function q(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function W(t) {
        return function(e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, o = 0,
                s = e.toLowerCase().match(vt) || [];
            if (st.isFunction(i))
                for (; n = s[o++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function F(t, e, i, n) {
        function o(a) {
            var l;
            return s[a] = !0, st.each(t[a] || [], function(t, a) {
                var c = a(e, i, n);
                return "string" != typeof c || r || s[c] ? r ? !(l = c) : void 0 : (e.dataTypes.unshift(c), o(c), !1)
            }), l
        }
        var s = {},
            r = t === ve;
        return o(e.dataTypes[0]) || !s["*"] && o("*")
    }

    function R(t, e) {
        var i, n, o = st.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
        return n && st.extend(!0, t, n), t
    }

    function B(t, e, i) {
        for (var n, o, s, r, a = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
        if (n)
            for (o in a)
                if (a[o] && a[o].test(n)) {
                    l.unshift(o);
                    break
                } if (l[0] in i) s = l[0];
        else {
            for (o in i) {
                if (!l[0] || t.converters[o + " " + l[0]]) {
                    s = o;
                    break
                }
                r || (r = o)
            }
            s = s || r
        }
        return s ? (s !== l[0] && l.unshift(s), i[s]) : void 0
    }

    function X(t, e, i, n) {
        var o, s, r, a, l, c = {},
            d = t.dataTypes.slice();
        if (d[1])
            for (r in t.converters) c[r.toLowerCase()] = t.converters[r];
        for (s = d.shift(); s;)
            if (t.responseFields[s] && (i[t.responseFields[s]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = d.shift())
                if ("*" === s) s = l;
                else if ("*" !== l && l !== s) {
            if (!(r = c[l + " " + s] || c["* " + s]))
                for (o in c)
                    if (a = o.split(" "), a[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                        r === !0 ? r = c[o] : c[o] !== !0 && (s = a[0], d.unshift(a[1]));
                        break
                    } if (r !== !0)
                if (r && t.throws) e = r(e);
                else try {
                    e = r(e)
                } catch (t) {
                    return {
                        state: "parsererror",
                        error: r ? t : "No conversion from " + l + " to " + s
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function U(t, e, i, n) {
        var o;
        if (st.isArray(e)) st.each(e, function(e, o) {
            i || xe.test(t) ? n(t, o) : U(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, i, n)
        });
        else if (i || "object" !== st.type(e)) n(t, e);
        else
            for (o in e) U(t + "[" + o + "]", e[o], i, n)
    }

    function Y(t) {
        return st.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    var V = [],
        Q = t.document,
        G = V.slice,
        Z = V.concat,
        K = V.push,
        J = V.indexOf,
        tt = {},
        et = tt.toString,
        it = tt.hasOwnProperty,
        nt = {},
        ot = "2.2.1",
        st = function(t, e) {
            return new st.fn.init(t, e)
        },
        rt = function(t, e) {
            return e.toUpperCase()
        };
    st.fn = st.prototype = {
        jquery: ot,
        constructor: st,
        selector: "",
        length: 0,
        toArray: function() {
            return G.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : G.call(this)
        },
        pushStack: function(t) {
            var e = st.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t) {
            return st.each(this, t)
        },
        map: function(t) {
            return this.pushStack(st.map(this, function(e, i) {
                return t.call(e, i, e)
            }))
        },
        slice: function() {
            return this.pushStack(G.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                i = +t + (0 > t ? e : 0);
            return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: K,
        sort: V.sort,
        splice: V.splice
    }, st.extend = st.fn.extend = function() {
        var t, e, i, n, o, s, r = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || st.isFunction(r) || (r = {}), a === l && (r = this, a--); l > a; a++)
            if (null != (t = arguments[a]))
                for (e in t) i = r[e], n = t[e], r !== n && (c && n && (st.isPlainObject(n) || (o = st.isArray(n))) ? (o ? (o = !1, s = i && st.isArray(i) ? i : []) : s = i && st.isPlainObject(i) ? i : {}, r[e] = st.extend(c, s, n)) : void 0 !== n && (r[e] = n));
        return r
    }, st.extend({
        expando: "jQuery" + (ot + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === st.type(t)
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            var e = t && t.toString();
            return !st.isArray(t) && e - parseFloat(e) + 1 >= 0
        },
        isPlainObject: function(t) {
            return "object" === st.type(t) && !t.nodeType && !st.isWindow(t) && !(t.constructor && !it.call(t.constructor.prototype, "isPrototypeOf"))
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? tt[et.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            var e, i = eval;
            (t = st.trim(t)) && (1 === t.indexOf("use strict") ? (e = Q.createElement("script"), e.text = t, Q.head.appendChild(e).parentNode.removeChild(e)) : i(t))
        },
        camelCase: function(t) {
            return t.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, rt)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e) {
            var n, o = 0;
            if (i(t))
                for (n = t.length; n > o && e.call(t[o], o, t[o]) !== !1; o++);
            else
                for (o in t)
                    if (e.call(t[o], o, t[o]) === !1) break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (i(Object(t)) ? st.merge(n, "string" == typeof t ? [t] : t) : K.call(n, t)), n
        },
        inArray: function(t, e, i) {
            return null == e ? -1 : J.call(e, t, i)
        },
        merge: function(t, e) {
            for (var i = +e.length, n = 0, o = t.length; i > n; n++) t[o++] = e[n];
            return t.length = o, t
        },
        grep: function(t, e, i) {
            for (var n = [], o = 0, s = t.length, r = !i; s > o; o++) !e(t[o], o) !== r && n.push(t[o]);
            return n
        },
        map: function(t, e, n) {
            var o, s, r = 0,
                a = [];
            if (i(t))
                for (o = t.length; o > r; r++) null != (s = e(t[r], r, n)) && a.push(s);
            else
                for (r in t) null != (s = e(t[r], r, n)) && a.push(s);
            return Z.apply([], a)
        },
        guid: 1,
        proxy: function(t, e) {
            var i, n, o;
            return "string" == typeof e && (i = t[e], e = t, t = i), st.isFunction(t) ? (n = G.call(arguments, 2), o = function() {
                return t.apply(e || this, n.concat(G.call(arguments)))
            }, o.guid = t.guid = t.guid || st.guid++, o) : void 0
        },
        now: Date.now,
        support: nt
    }), "function" == typeof Symbol && (st.fn[Symbol.iterator] = V[Symbol.iterator]), st.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        tt["[object " + e + "]"] = e.toLowerCase()
    });
    var at = function(t) {
        function e(t, e, i, n) {
            var o, s, r, a, c, u, p, h, f = e && e.ownerDocument,
                g = e ? e.nodeType : 9;
            if (i = i || [], "string" != typeof t || !t || 1 !== g && 9 !== g && 11 !== g) return i;
            if (!n && ((e ? e.ownerDocument || e : N) !== D && A(e), e = e || D, I)) {
                if (11 !== g && (u = gt.exec(t)))
                    if (o = u[1]) {
                        if (9 === g) {
                            if (!(r = e.getElementById(o))) return i;
                            if (r.id === o) return i.push(r), i
                        } else if (f && (r = f.getElementById(o)) && H(e, r) && r.id === o) return i.push(r), i
                    } else {
                        if (u[2]) return G.apply(i, e.getElementsByTagName(t)), i;
                        if ((o = u[3]) && w.getElementsByClassName && e.getElementsByClassName) return G.apply(i, e.getElementsByClassName(o)), i
                    } if (w.qsa && !R[t + " "] && (!j || !j.test(t))) {
                    if (1 !== g) f = e, h = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(vt, "\\$&") : e.setAttribute("id", a = M), p = T(t), s = p.length, c = dt.test(a) ? "#" + a : "[id='" + a + "']"; s--;) p[s] = c + " " + d(p[s]);
                        h = p.join(","), f = mt.test(t) && l(e.parentNode) || e
                    }
                    if (h) try {
                        return G.apply(i, f.querySelectorAll(h)), i
                    } catch (t) {} finally {
                        a === M && e.removeAttribute("id")
                    }
                }
            }
            return S(t.replace(st, "$1"), e, i, n)
        }

        function i() {
            function t(i, n) {
                return e.push(i + " ") > x.cacheLength && delete t[e.shift()], t[i + " "] = n
            }
            var e = [];
            return t
        }

        function n(t) {
            return t[M] = !0, t
        }

        function o(t) {
            var e = D.createElement("div");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function s(t, e) {
            for (var i = t.split("|"), n = i.length; n--;) x.attrHandle[i[n]] = e
        }

        function r(t, e) {
            var i = e && t,
                n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X);
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === e) return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return n(function(e) {
                return e = +e, n(function(i, n) {
                    for (var o, s = t([], i.length, e), r = s.length; r--;) i[o = s[r]] && (i[o] = !(n[o] = i[o]))
                })
            })
        }

        function l(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }

        function c() {}

        function d(t) {
            for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
            return n
        }

        function u(t, e, i) {
            var n = e.dir,
                o = i && "parentNode" === n,
                s = q++;
            return e.first ? function(e, i, s) {
                for (; e = e[n];)
                    if (1 === e.nodeType || o) return t(e, i, s)
            } : function(e, i, r) {
                var a, l, c, d = [z, s];
                if (r) {
                    for (; e = e[n];)
                        if ((1 === e.nodeType || o) && t(e, i, r)) return !0
                } else
                    for (; e = e[n];)
                        if (1 === e.nodeType || o) {
                            if (c = e[M] || (e[M] = {}), l = c[e.uniqueID] || (c[e.uniqueID] = {}), (a = l[n]) && a[0] === z && a[1] === s) return d[2] = a[2];
                            if (l[n] = d, d[2] = t(e, i, r)) return !0
                        }
            }
        }

        function p(t) {
            return t.length > 1 ? function(e, i, n) {
                for (var o = t.length; o--;)
                    if (!t[o](e, i, n)) return !1;
                return !0
            } : t[0]
        }

        function h(t, i, n) {
            for (var o = 0, s = i.length; s > o; o++) e(t, i[o], n);
            return n
        }

        function f(t, e, i, n, o) {
            for (var s, r = [], a = 0, l = t.length, c = null != e; l > a; a++)(s = t[a]) && (!i || i(s, n, o)) && (r.push(s), c && e.push(a));
            return r
        }

        function g(t, e, i, o, s, r) {
            return o && !o[M] && (o = g(o)), s && !s[M] && (s = g(s, r)), n(function(n, r, a, l) {
                var c, d, u, p = [],
                    g = [],
                    m = r.length,
                    v = n || h(e || "*", a.nodeType ? [a] : a, []),
                    y = !t || !n && e ? v : f(v, p, t, a, l),
                    w = i ? s || (n ? t : m || o) ? [] : r : y;
                if (i && i(y, w, a, l), o)
                    for (c = f(w, g), o(c, [], a, l), d = c.length; d--;)(u = c[d]) && (w[g[d]] = !(y[g[d]] = u));
                if (n) {
                    if (s || t) {
                        if (s) {
                            for (c = [], d = w.length; d--;)(u = w[d]) && c.push(y[d] = u);
                            s(null, w = [], c, l)
                        }
                        for (d = w.length; d--;)(u = w[d]) && (c = s ? K(n, u) : p[d]) > -1 && (n[c] = !(r[c] = u))
                    }
                } else w = f(w === r ? w.splice(m, w.length) : w), s ? s(null, r, w, l) : G.apply(r, w)
            })
        }

        function m(t) {
            for (var e, i, n, o = t.length, s = x.relative[t[0].type], r = s || x.relative[" "], a = s ? 1 : 0, l = u(function(t) {
                    return t === e
                }, r, !0), c = u(function(t) {
                    return K(e, t) > -1
                }, r, !0), h = [function(t, i, n) {
                    var o = !s && (n || i !== _) || ((e = i).nodeType ? l(t, i, n) : c(t, i, n));
                    return e = null, o
                }]; o > a; a++)
                if (i = x.relative[t[a].type]) h = [u(p(h), i)];
                else {
                    if (i = x.filter[t[a].type].apply(null, t[a].matches), i[M]) {
                        for (n = ++a; o > n && !x.relative[t[n].type]; n++);
                        return g(a > 1 && p(h), a > 1 && d(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(st, "$1"), i, n > a && m(t.slice(a, n)), o > n && m(t = t.slice(n)), o > n && d(t))
                    }
                    h.push(i)
                } return p(h)
        }

        function v(t, i) {
            var o = i.length > 0,
                s = t.length > 0,
                r = function(n, r, a, l, c) {
                    var d, u, p, h = 0,
                        g = "0",
                        m = n && [],
                        v = [],
                        y = _,
                        w = n || s && x.find.TAG("*", c),
                        b = z += null == y ? 1 : Math.random() || .1,
                        C = w.length;
                    for (c && (_ = r === D || r || c); g !== C && null != (d = w[g]); g++) {
                        if (s && d) {
                            for (u = 0, r || d.ownerDocument === D || (A(d), a = !I); p = t[u++];)
                                if (p(d, r || D, a)) {
                                    l.push(d);
                                    break
                                } c && (z = b)
                        }
                        o && ((d = !p && d) && h--, n && m.push(d))
                    }
                    if (h += g, o && g !== h) {
                        for (u = 0; p = i[u++];) p(m, v, r, a);
                        if (n) {
                            if (h > 0)
                                for (; g--;) m[g] || v[g] || (v[g] = V.call(l));
                            v = f(v)
                        }
                        G.apply(l, v), c && !n && v.length > 0 && h + i.length > 1 && e.uniqueSort(l)
                    }
                    return c && (z = b, _ = y), m
                };
            return o ? n(r) : r
        }
        var y, w, x, b, C, T, k, S, _, $, E, A, D, P, I, j, L, O, H, M = "sizzle" + 1 * new Date,
            N = t.document,
            z = 0,
            q = 0,
            W = i(),
            F = i(),
            R = i(),
            B = function(t, e) {
                return t === e && (E = !0), 0
            },
            X = 1 << 31,
            U = {}.hasOwnProperty,
            Y = [],
            V = Y.pop,
            Q = Y.push,
            G = Y.push,
            Z = Y.slice,
            K = function(t, e) {
                for (var i = 0, n = t.length; n > i; i++)
                    if (t[i] === e) return i;
                return -1
            },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            tt = "[\\x20\\t\\r\\n\\f]",
            et = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            it = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + et + "))|)" + tt + "*\\]",
            nt = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + it + ")*)|.*)\\)|)",
            ot = new RegExp(tt + "+", "g"),
            st = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"),
            rt = new RegExp("^" + tt + "*," + tt + "*"),
            at = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"),
            lt = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"),
            ct = new RegExp(nt),
            dt = new RegExp("^" + et + "$"),
            ut = {
                ID: new RegExp("^#(" + et + ")"),
                CLASS: new RegExp("^\\.(" + et + ")"),
                TAG: new RegExp("^(" + et + "|[*])"),
                ATTR: new RegExp("^" + it),
                PSEUDO: new RegExp("^" + nt),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + J + ")$", "i"),
                needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i")
            },
            pt = /^(?:input|select|textarea|button)$/i,
            ht = /^h\d$/i,
            ft = /^[^{]+\{\s*\[native \w/,
            gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            mt = /[+~]/,
            vt = /'|\\/g,
            yt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"),
            wt = function(t, e, i) {
                var n = "0x" + e - 65536;
                return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            xt = function() {
                A()
            };
        try {
            G.apply(Y = Z.call(N.childNodes), N.childNodes), Y[N.childNodes.length].nodeType
        } catch (t) {
            G = {
                apply: Y.length ? function(t, e) {
                    Q.apply(t, Z.call(e))
                } : function(t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];);
                    t.length = i - 1
                }
            }
        }
        w = e.support = {}, C = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }, A = e.setDocument = function(t) {
            var e, i, n = t ? t.ownerDocument || t : N;
            return n !== D && 9 === n.nodeType && n.documentElement ? (D = n, P = D.documentElement, I = !C(D), (i = D.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", xt, !1) : i.attachEvent && i.attachEvent("onunload", xt)), w.attributes = o(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), w.getElementsByTagName = o(function(t) {
                return t.appendChild(D.createComment("")), !t.getElementsByTagName("*").length
            }), w.getElementsByClassName = ft.test(D.getElementsByClassName), w.getById = o(function(t) {
                return P.appendChild(t).id = M, !D.getElementsByName || !D.getElementsByName(M).length
            }), w.getById ? (x.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && I) {
                    var i = e.getElementById(t);
                    return i ? [i] : []
                }
            }, x.filter.ID = function(t) {
                var e = t.replace(yt, wt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete x.find.ID, x.filter.ID = function(t) {
                var e = t.replace(yt, wt);
                return function(t) {
                    var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return i && i.value === e
                }
            }), x.find.TAG = w.getElementsByTagName ? function(t, e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
            } : function(t, e) {
                var i, n = [],
                    o = 0,
                    s = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = s[o++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return s
            }, x.find.CLASS = w.getElementsByClassName && function(t, e) {
                return void 0 !== e.getElementsByClassName && I ? e.getElementsByClassName(t) : void 0
            }, L = [], j = [], (w.qsa = ft.test(D.querySelectorAll)) && (o(function(t) {
                P.appendChild(t).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && j.push("[*^$]=" + tt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || j.push("\\[" + tt + "*(?:value|" + J + ")"), t.querySelectorAll("[id~=" + M + "-]").length || j.push("~="), t.querySelectorAll(":checked").length || j.push(":checked"), t.querySelectorAll("a#" + M + "+*").length || j.push(".#.+[+~]")
            }), o(function(t) {
                var e = D.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && j.push("name" + tt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || j.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), j.push(",.*:")
            })), (w.matchesSelector = ft.test(O = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && o(function(t) {
                w.disconnectedMatch = O.call(t, "div"), O.call(t, "[s!='']:x"), L.push("!=", nt)
            }), j = j.length && new RegExp(j.join("|")), L = L.length && new RegExp(L.join("|")), e = ft.test(P.compareDocumentPosition), H = e || ft.test(P.contains) ? function(t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t,
                    n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, B = e ? function(t, e) {
                if (t === e) return E = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i || (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !w.sortDetached && e.compareDocumentPosition(t) === i ? t === D || t.ownerDocument === N && H(N, t) ? -1 : e === D || e.ownerDocument === N && H(N, e) ? 1 : $ ? K($, t) - K($, e) : 0 : 4 & i ? -1 : 1)
            } : function(t, e) {
                if (t === e) return E = !0, 0;
                var i, n = 0,
                    o = t.parentNode,
                    s = e.parentNode,
                    a = [t],
                    l = [e];
                if (!o || !s) return t === D ? -1 : e === D ? 1 : o ? -1 : s ? 1 : $ ? K($, t) - K($, e) : 0;
                if (o === s) return r(t, e);
                for (i = t; i = i.parentNode;) a.unshift(i);
                for (i = e; i = i.parentNode;) l.unshift(i);
                for (; a[n] === l[n];) n++;
                return n ? r(a[n], l[n]) : a[n] === N ? -1 : l[n] === N ? 1 : 0
            }, D) : D
        }, e.matches = function(t, i) {
            return e(t, null, null, i)
        }, e.matchesSelector = function(t, i) {
            if ((t.ownerDocument || t) !== D && A(t), i = i.replace(lt, "='$1']"), w.matchesSelector && I && !R[i + " "] && (!L || !L.test(i)) && (!j || !j.test(i))) try {
                var n = O.call(t, i);
                if (n || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
            } catch (t) {}
            return e(i, D, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== D && A(t), H(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== D && A(t);
            var i = x.attrHandle[e.toLowerCase()],
                n = i && U.call(x.attrHandle, e.toLowerCase()) ? i(t, e, !I) : void 0;
            return void 0 !== n ? n : w.attributes || !I ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, i = [],
                n = 0,
                o = 0;
            if (E = !w.detectDuplicates, $ = !w.sortStable && t.slice(0), t.sort(B), E) {
                for (; e = t[o++];) e === t[o] && (n = i.push(o));
                for (; n--;) t.splice(i[n], 1)
            }
            return $ = null, t
        }, b = e.getText = function(t) {
            var e, i = "",
                n = 0,
                o = t.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += b(t)
                } else if (3 === o || 4 === o) return t.nodeValue
            } else
                for (; e = t[n++];) i += b(e);
            return i
        }, x = e.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: ut,
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
                ATTR: function(t) {
                    return t[1] = t[1].replace(yt, wt), t[3] = (t[3] || t[4] || t[5] || "").replace(yt, wt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, i = !t[6] && t[2];
                    return ut.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ct.test(i) && (e = T(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(yt, wt).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = W[t + " "];
                    return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && W(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, i, n) {
                    return function(o) {
                        var s = e.attr(o, t);
                        return null == s ? "!=" === i : !i || (s += "", "=" === i ? s === n : "!=" === i ? s !== n : "^=" === i ? n && 0 === s.indexOf(n) : "*=" === i ? n && s.indexOf(n) > -1 : "$=" === i ? n && s.slice(-n.length) === n : "~=" === i ? (" " + s.replace(ot, " ") + " ").indexOf(n) > -1 : "|=" === i && (s === n || s.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(t, e, i, n, o) {
                    var s = "nth" !== t.slice(0, 3),
                        r = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === n && 0 === o ? function(t) {
                        return !!t.parentNode
                    } : function(e, i, l) {
                        var c, d, u, p, h, f, g = s !== r ? "nextSibling" : "previousSibling",
                            m = e.parentNode,
                            v = a && e.nodeName.toLowerCase(),
                            y = !l && !a,
                            w = !1;
                        if (m) {
                            if (s) {
                                for (; g;) {
                                    for (p = e; p = p[g];)
                                        if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                    f = g = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [r ? m.firstChild : m.lastChild], r && y) {
                                for (p = m, u = p[M] || (p[M] = {}), d = u[p.uniqueID] || (u[p.uniqueID] = {}), c = d[t] || [], h = c[0] === z && c[1], w = h && c[2], p = h && m.childNodes[h]; p = ++h && p && p[g] || (w = h = 0) || f.pop();)
                                    if (1 === p.nodeType && ++w && p === e) {
                                        d[t] = [z, h, w];
                                        break
                                    }
                            } else if (y && (p = e, u = p[M] || (p[M] = {}), d = u[p.uniqueID] || (u[p.uniqueID] = {}), c = d[t] || [], h = c[0] === z && c[1], w = h), w === !1)
                                for (;
                                    (p = ++h && p && p[g] || (w = h = 0) || f.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++w || (y && (u = p[M] || (p[M] = {}), d = u[p.uniqueID] || (u[p.uniqueID] = {}), d[t] = [z, w]), p !== e)););
                            return (w -= o) === n || w % n == 0 && w / n >= 0
                        }
                    }
                },
                PSEUDO: function(t, i) {
                    var o, s = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return s[M] ? s(i) : s.length > 1 ? (o = [t, t, "", i], x.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                        for (var n, o = s(t, i), r = o.length; r--;) n = K(t, o[r]), t[n] = !(e[n] = o[r])
                    }) : function(t) {
                        return s(t, 0, o)
                    }) : s
                }
            },
            pseudos: {
                not: n(function(t) {
                    var e = [],
                        i = [],
                        o = k(t.replace(st, "$1"));
                    return o[M] ? n(function(t, e, i, n) {
                        for (var s, r = o(t, null, n, []), a = t.length; a--;)(s = r[a]) && (t[a] = !(e[a] = s))
                    }) : function(t, n, s) {
                        return e[0] = t, o(e, null, s, i), e[0] = null, !i.pop()
                    }
                }),
                has: n(function(t) {
                    return function(i) {
                        return e(t, i).length > 0
                    }
                }),
                contains: n(function(t) {
                    return t = t.replace(yt, wt),
                        function(e) {
                            return (e.textContent || e.innerText || b(e)).indexOf(t) > -1
                        }
                }),
                lang: n(function(t) {
                    return dt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(yt, wt).toLowerCase(),
                        function(e) {
                            var i;
                            do {
                                if (i = I ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id
                },
                root: function(t) {
                    return t === P
                },
                focus: function(t) {
                    return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) {
                    return !x.pseudos.empty(t)
                },
                header: function(t) {
                    return ht.test(t.nodeName)
                },
                input: function(t) {
                    return pt.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: a(function() {
                    return [0]
                }),
                last: a(function(t, e) {
                    return [e - 1]
                }),
                eq: a(function(t, e, i) {
                    return [0 > i ? i + e : i]
                }),
                even: a(function(t, e) {
                    for (var i = 0; e > i; i += 2) t.push(i);
                    return t
                }),
                odd: a(function(t, e) {
                    for (var i = 1; e > i; i += 2) t.push(i);
                    return t
                }),
                lt: a(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                    return t
                }),
                gt: a(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                    return t
                })
            }
        }, x.pseudos.nth = x.pseudos.eq;
        for (y in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[y] = function(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }(y);
        for (y in {
                submit: !0,
                reset: !0
            }) x.pseudos[y] = function(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }(y);
        return c.prototype = x.filters = x.pseudos, x.setFilters = new c, T = e.tokenize = function(t, i) {
            var n, o, s, r, a, l, c, d = F[t + " "];
            if (d) return i ? 0 : d.slice(0);
            for (a = t, l = [], c = x.preFilter; a;) {
                (!n || (o = rt.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(s = [])), n = !1, (o = at.exec(a)) && (n = o.shift(), s.push({
                    value: n,
                    type: o[0].replace(st, " ")
                }), a = a.slice(n.length));
                for (r in x.filter) !(o = ut[r].exec(a)) || c[r] && !(o = c[r](o)) || (n = o.shift(), s.push({
                    value: n,
                    type: r,
                    matches: o
                }), a = a.slice(n.length));
                if (!n) break
            }
            return i ? a.length : a ? e.error(t) : F(t, l).slice(0)
        }, k = e.compile = function(t, e) {
            var i, n = [],
                o = [],
                s = R[t + " "];
            if (!s) {
                for (e || (e = T(t)), i = e.length; i--;) s = m(e[i]), s[M] ? n.push(s) : o.push(s);
                s = R(t, v(o, n)), s.selector = t
            }
            return s
        }, S = e.select = function(t, e, i, n) {
            var o, s, r, a, c, u = "function" == typeof t && t,
                p = !n && T(t = u.selector || t);
            if (i = i || [], 1 === p.length) {
                if (s = p[0] = p[0].slice(0), s.length > 2 && "ID" === (r = s[0]).type && w.getById && 9 === e.nodeType && I && x.relative[s[1].type]) {
                    if (!(e = (x.find.ID(r.matches[0].replace(yt, wt), e) || [])[0])) return i;
                    u && (e = e.parentNode), t = t.slice(s.shift().value.length)
                }
                for (o = ut.needsContext.test(t) ? 0 : s.length; o-- && (r = s[o], !x.relative[a = r.type]);)
                    if ((c = x.find[a]) && (n = c(r.matches[0].replace(yt, wt), mt.test(s[0].type) && l(e.parentNode) || e))) {
                        if (s.splice(o, 1), !(t = n.length && d(s))) return G.apply(i, n), i;
                        break
                    }
            }
            return (u || k(t, p))(n, e, !I, i, !e || mt.test(t) && l(e.parentNode) || e), i
        }, w.sortStable = M.split("").sort(B).join("") === M, w.detectDuplicates = !!E, A(), w.sortDetached = o(function(t) {
            return 1 & t.compareDocumentPosition(D.createElement("div"))
        }), o(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || s("type|href|height|width", function(t, e, i) {
            return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), w.attributes && o(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || s("value", function(t, e, i) {
            return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), o(function(t) {
            return null == t.getAttribute("disabled")
        }) || s(J, function(t, e, i) {
            var n;
            return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }), e
    }(t);
    st.find = at, st.expr = at.selectors, st.expr[":"] = st.expr.pseudos, st.uniqueSort = st.unique = at.uniqueSort, st.text = at.getText, st.isXMLDoc = at.isXML, st.contains = at.contains;
    var lt = function(t, e, i) {
            for (var n = [], o = void 0 !== i;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (o && st(t).is(i)) break;
                    n.push(t)
                } return n
        },
        ct = function(t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        },
        dt = st.expr.match.needsContext,
        ut = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        pt = /^.[^:#\[\.,]*$/;
    st.filter = function(t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? st.find.matchesSelector(n, t) ? [n] : [] : st.find.matches(t, st.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, st.fn.extend({
        find: function(t) {
            var e, i = this.length,
                n = [],
                o = this;
            if ("string" != typeof t) return this.pushStack(st(t).filter(function() {
                for (e = 0; i > e; e++)
                    if (st.contains(o[e], this)) return !0
            }));
            for (e = 0; i > e; e++) st.find(t, o[e], n);
            return n = this.pushStack(i > 1 ? st.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
        },
        filter: function(t) {
            return this.pushStack(n(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(n(this, t || [], !0))
        },
        is: function(t) {
            return !!n(this, "string" == typeof t && dt.test(t) ? st(t) : t || [], !1).length
        }
    });
    var ht, ft = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (st.fn.init = function(t, e, i) {
        var n, o;
        if (!t) return this;
        if (i = i || ht, "string" == typeof t) {
            if (!(n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ft.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
            if (n[1]) {
                if (e = e instanceof st ? e[0] : e, st.merge(this, st.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : Q, !0)), ut.test(n[1]) && st.isPlainObject(e))
                    for (n in e) st.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                return this
            }
            return o = Q.getElementById(n[2]), o && o.parentNode && (this.length = 1, this[0] = o), this.context = Q, this.selector = t, this
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : st.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(st) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), st.makeArray(t, this))
    }).prototype = st.fn, ht = st(Q);
    var gt = /^(?:parents|prev(?:Until|All))/,
        mt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    st.fn.extend({
        has: function(t) {
            var e = st(t, this),
                i = e.length;
            return this.filter(function() {
                for (var t = 0; i > t; t++)
                    if (st.contains(this, e[t])) return !0
            })
        },
        closest: function(t, e) {
            for (var i, n = 0, o = this.length, s = [], r = dt.test(t) || "string" != typeof t ? st(t, e || this.context) : 0; o > n; n++)
                for (i = this[n]; i && i !== e; i = i.parentNode)
                    if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && st.find.matchesSelector(i, t))) {
                        s.push(i);
                        break
                    } return this.pushStack(s.length > 1 ? st.uniqueSort(s) : s)
        },
        index: function(t) {
            return t ? "string" == typeof t ? J.call(st(t), this[0]) : J.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(st.uniqueSort(st.merge(this.get(), st(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), st.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return lt(t, "parentNode")
        },
        parentsUntil: function(t, e, i) {
            return lt(t, "parentNode", i)
        },
        next: function(t) {
            return o(t, "nextSibling")
        },
        prev: function(t) {
            return o(t, "previousSibling")
        },
        nextAll: function(t) {
            return lt(t, "nextSibling")
        },
        prevAll: function(t) {
            return lt(t, "previousSibling")
        },
        nextUntil: function(t, e, i) {
            return lt(t, "nextSibling", i)
        },
        prevUntil: function(t, e, i) {
            return lt(t, "previousSibling", i)
        },
        siblings: function(t) {
            return ct((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return ct(t.firstChild)
        },
        contents: function(t) {
            return t.contentDocument || st.merge([], t.childNodes)
        }
    }, function(t, e) {
        st.fn[t] = function(i, n) {
            var o = st.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (o = st.filter(n, o)), this.length > 1 && (mt[t] || st.uniqueSort(o), gt.test(t) && o.reverse()), this.pushStack(o)
        }
    });
    var vt = /\S+/g;
    st.Callbacks = function(t) {
        t = "string" == typeof t ? s(t) : st.extend({}, t);
        var e, i, n, o, r = [],
            a = [],
            l = -1,
            c = function() {
                for (o = t.once, n = e = !0; a.length; l = -1)
                    for (i = a.shift(); ++l < r.length;) r[l].apply(i[0], i[1]) === !1 && t.stopOnFalse && (l = r.length, i = !1);
                t.memory || (i = !1), e = !1, o && (r = i ? [] : "")
            },
            d = {
                add: function() {
                    return r && (i && !e && (l = r.length - 1, a.push(i)), function e(i) {
                        st.each(i, function(i, n) {
                            st.isFunction(n) ? t.unique && d.has(n) || r.push(n) : n && n.length && "string" !== st.type(n) && e(n)
                        })
                    }(arguments), i && !e && c()), this
                },
                remove: function() {
                    return st.each(arguments, function(t, e) {
                        for (var i;
                            (i = st.inArray(e, r, i)) > -1;) r.splice(i, 1), l >= i && l--
                    }), this
                },
                has: function(t) {
                    return t ? st.inArray(t, r) > -1 : r.length > 0
                },
                empty: function() {
                    return r && (r = []), this
                },
                disable: function() {
                    return o = a = [], r = i = "", this
                },
                disabled: function() {
                    return !r
                },
                lock: function() {
                    return o = a = [], i || (r = i = ""), this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(t, i) {
                    return o || (i = i || [], i = [t, i.slice ? i.slice() : i], a.push(i), e || c()), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return d
    }, st.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", st.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", st.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", st.Callbacks("memory")]
                ],
                i = "pending",
                n = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return st.Deferred(function(i) {
                            st.each(e, function(e, s) {
                                var r = st.isFunction(t[e]) && t[e];
                                o[s[1]](function() {
                                    var t = r && r.apply(this, arguments);
                                    t && st.isFunction(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[s[0] + "With"](this === n ? i.promise() : this, r ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? st.extend(t, n) : n
                    }
                },
                o = {};
            return n.pipe = n.then, st.each(e, function(t, s) {
                var r = s[2],
                    a = s[3];
                n[s[1]] = r.add, a && r.add(function() {
                    i = a
                }, e[1 ^ t][2].disable, e[2][2].lock), o[s[0]] = function() {
                    return o[s[0] + "With"](this === o ? n : this, arguments), this
                }, o[s[0] + "With"] = r.fireWith
            }), n.promise(o), t && t.call(o, o), o
        },
        when: function(t) {
            var e, i, n, o = 0,
                s = G.call(arguments),
                r = s.length,
                a = 1 !== r || t && st.isFunction(t.promise) ? r : 0,
                l = 1 === a ? t : st.Deferred(),
                c = function(t, i, n) {
                    return function(o) {
                        i[t] = this, n[t] = arguments.length > 1 ? G.call(arguments) : o, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                    }
                };
            if (r > 1)
                for (e = new Array(r), i = new Array(r), n = new Array(r); r > o; o++) s[o] && st.isFunction(s[o].promise) ? s[o].promise().progress(c(o, i, e)).done(c(o, n, s)).fail(l.reject) : --a;
            return a || l.resolveWith(n, s), l.promise()
        }
    });
    var yt;
    st.fn.ready = function(t) {
        return st.ready.promise().done(t), this
    }, st.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? st.readyWait++ : st.ready(!0)
        },
        ready: function(t) {
            (t === !0 ? --st.readyWait : st.isReady) || (st.isReady = !0, t !== !0 && --st.readyWait > 0 || (yt.resolveWith(Q, [st]), st.fn.triggerHandler && (st(Q).triggerHandler("ready"), st(Q).off("ready"))))
        }
    }), st.ready.promise = function(e) {
        return yt || (yt = st.Deferred(), "complete" === Q.readyState || "loading" !== Q.readyState && !Q.documentElement.doScroll ? t.setTimeout(st.ready) : (Q.addEventListener("DOMContentLoaded", r), t.addEventListener("load", r))), yt.promise(e)
    }, st.ready.promise();
    var wt = function(t, e, i, n, o, s, r) {
            var a = 0,
                l = t.length,
                c = null == i;
            if ("object" === st.type(i)) {
                o = !0;
                for (a in i) wt(t, e, a, i[a], !0, s, r)
            } else if (void 0 !== n && (o = !0, st.isFunction(n) || (r = !0), c && (r ? (e.call(t, n), e = null) : (c = e, e = function(t, e, i) {
                    return c.call(st(t), i)
                })), e))
                for (; l > a; a++) e(t[a], i, r ? n : n.call(t[a], a, e(t[a], i)));
            return o ? t : c ? e.call(t) : l ? e(t[0], i) : s
        },
        xt = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };
    a.uid = 1, a.prototype = {
        register: function(t, e) {
            var i = e || {};
            return t.nodeType ? t[this.expando] = i : Object.defineProperty(t, this.expando, {
                value: i,
                writable: !0,
                configurable: !0
            }), t[this.expando]
        },
        cache: function(t) {
            if (!xt(t)) return {};
            var e = t[this.expando];
            return e || (e = {}, xt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        },
        set: function(t, e, i) {
            var n, o = this.cache(t);
            if ("string" == typeof e) o[e] = i;
            else
                for (n in e) o[n] = e[n];
            return o
        },
        get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
        },
        access: function(t, e, i) {
            var n;
            return void 0 === e || e && "string" == typeof e && void 0 === i ? (n = this.get(t, e), void 0 !== n ? n : this.get(t, st.camelCase(e))) : (this.set(t, e, i), void 0 !== i ? i : e)
        },
        remove: function(t, e) {
            var i, n, o, s = t[this.expando];
            if (void 0 !== s) {
                if (void 0 === e) this.register(t);
                else {
                    st.isArray(e) ? n = e.concat(e.map(st.camelCase)) : (o = st.camelCase(e), e in s ? n = [e, o] : (n = o, n = n in s ? [n] : n.match(vt) || [])), i = n.length;
                    for (; i--;) delete s[n[i]]
                }(void 0 === e || st.isEmptyObject(s)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function(t) {
            var e = t[this.expando];
            return void 0 !== e && !st.isEmptyObject(e)
        }
    };
    var bt = new a,
        Ct = new a,
        Tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        kt = /[A-Z]/g;
    st.extend({
        hasData: function(t) {
            return Ct.hasData(t) || bt.hasData(t)
        },
        data: function(t, e, i) {
            return Ct.access(t, e, i)
        },
        removeData: function(t, e) {
            Ct.remove(t, e)
        },
        _data: function(t, e, i) {
            return bt.access(t, e, i)
        },
        _removeData: function(t, e) {
            bt.remove(t, e)
        }
    }), st.fn.extend({
        data: function(t, e) {
            var i, n, o, s = this[0],
                r = s && s.attributes;
            if (void 0 === t) {
                if (this.length && (o = Ct.get(s), 1 === s.nodeType && !bt.get(s, "hasDataAttrs"))) {
                    for (i = r.length; i--;) r[i] && (n = r[i].name, 0 === n.indexOf("data-") && (n = st.camelCase(n.slice(5)), l(s, n, o[n])));
                    bt.set(s, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof t ? this.each(function() {
                Ct.set(this, t)
            }) : wt(this, function(e) {
                var i, n;
                if (s && void 0 === e) {
                    if (void 0 !== (i = Ct.get(s, t) || Ct.get(s, t.replace(kt, "-$&").toLowerCase()))) return i;
                    if (n = st.camelCase(t), void 0 !== (i = Ct.get(s, n))) return i;
                    if (void 0 !== (i = l(s, n, void 0))) return i
                } else n = st.camelCase(t), this.each(function() {
                    var i = Ct.get(this, n);
                    Ct.set(this, n, e), t.indexOf("-") > -1 && void 0 !== i && Ct.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                Ct.remove(this, t)
            })
        }
    }), st.extend({
        queue: function(t, e, i) {
            var n;
            return t ? (e = (e || "fx") + "queue", n = bt.get(t, e), i && (!n || st.isArray(i) ? n = bt.access(t, e, st.makeArray(i)) : n.push(i)), n || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = st.queue(t, e),
                n = i.length,
                o = i.shift(),
                s = st._queueHooks(t, e),
                r = function() {
                    st.dequeue(t, e)
                };
            "inprogress" === o && (o = i.shift(), n--), o && ("fx" === e && i.unshift("inprogress"), delete s.stop, o.call(t, r, s)), !n && s && s.empty.fire()
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return bt.get(t, i) || bt.access(t, i, {
                empty: st.Callbacks("once memory").add(function() {
                    bt.remove(t, [e + "queue", i])
                })
            })
        }
    }), st.fn.extend({
        queue: function(t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? st.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var i = st.queue(this, t, e);
                st._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && st.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                st.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var i, n = 1,
                o = st.Deferred(),
                s = this,
                r = this.length,
                a = function() {
                    --n || o.resolveWith(s, [s])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;)(i = bt.get(s[r], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
            return a(), o.promise(e)
        }
    });
    var St = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        _t = new RegExp("^(?:([+-])=|)(" + St + ")([a-z%]*)$", "i"),
        $t = ["Top", "Right", "Bottom", "Left"],
        Et = function(t, e) {
            return t = e || t, "none" === st.css(t, "display") || !st.contains(t.ownerDocument, t)
        },
        At = /^(?:checkbox|radio)$/i,
        Dt = /<([\w:-]+)/,
        Pt = /^$|\/(?:java|ecma)script/i,
        It = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    It.optgroup = It.option, It.tbody = It.tfoot = It.colgroup = It.caption = It.thead, It.th = It.td;
    var jt = /<|&#?\w+;/;
    ! function() {
        var t = Q.createDocumentFragment(),
            e = t.appendChild(Q.createElement("div")),
            i = Q.createElement("input");
        i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), e.appendChild(i), nt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Lt = /^key/,
        Ot = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ht = /^([^.]*)(?:\.(.+)|)/;
    st.event = {
        global: {},
        add: function(t, e, i, n, o) {
            var s, r, a, l, c, d, u, p, h, f, g, m = bt.get(t);
            if (m)
                for (i.handler && (s = i, i = s.handler, o = s.selector), i.guid || (i.guid = st.guid++), (l = m.events) || (l = m.events = {}), (r = m.handle) || (r = m.handle = function(e) {
                        return void 0 !== st && st.event.triggered !== e.type ? st.event.dispatch.apply(t, arguments) : void 0
                    }), e = (e || "").match(vt) || [""], c = e.length; c--;) a = Ht.exec(e[c]) || [], h = g = a[1], f = (a[2] || "").split(".").sort(), h && (u = st.event.special[h] || {}, h = (o ? u.delegateType : u.bindType) || h, u = st.event.special[h] || {}, d = st.extend({
                    type: h,
                    origType: g,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: o,
                    needsContext: o && st.expr.match.needsContext.test(o),
                    namespace: f.join(".")
                }, s), (p = l[h]) || (p = l[h] = [], p.delegateCount = 0, u.setup && u.setup.call(t, n, f, r) !== !1 || t.addEventListener && t.addEventListener(h, r)), u.add && (u.add.call(t, d), d.handler.guid || (d.handler.guid = i.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), st.event.global[h] = !0)
        },
        remove: function(t, e, i, n, o) {
            var s, r, a, l, c, d, u, p, h, f, g, m = bt.hasData(t) && bt.get(t);
            if (m && (l = m.events)) {
                for (e = (e || "").match(vt) || [""], c = e.length; c--;)
                    if (a = Ht.exec(e[c]) || [], h = g = a[1], f = (a[2] || "").split(".").sort(), h) {
                        for (u = st.event.special[h] || {}, h = (n ? u.delegateType : u.bindType) || h, p = l[h] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = s = p.length; s--;) d = p[s], !o && g !== d.origType || i && i.guid !== d.guid || a && !a.test(d.namespace) || n && n !== d.selector && ("**" !== n || !d.selector) || (p.splice(s, 1), d.selector && p.delegateCount--, u.remove && u.remove.call(t, d));
                        r && !p.length && (u.teardown && u.teardown.call(t, f, m.handle) !== !1 || st.removeEvent(t, h, m.handle), delete l[h])
                    } else
                        for (h in l) st.event.remove(t, h + e[c], i, n, !0);
                st.isEmptyObject(l) && bt.remove(t, "handle events")
            }
        },
        dispatch: function(t) {
            t = st.event.fix(t);
            var e, i, n, o, s, r = [],
                a = G.call(arguments),
                l = (bt.get(this, "events") || {})[t.type] || [],
                c = st.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                for (r = st.event.handlers.call(this, t, l), e = 0;
                    (o = r[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = o.elem, i = 0;
                        (s = o.handlers[i++]) && !t.isImmediatePropagationStopped();)(!t.rnamespace || t.rnamespace.test(s.namespace)) && (t.handleObj = s, t.data = s.data, void 0 !== (n = ((st.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, a)) && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var i, n, o, s, r = [],
                a = e.delegateCount,
                l = t.target;
            if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                        for (n = [], i = 0; a > i; i++) s = e[i], o = s.selector + " ", void 0 === n[o] && (n[o] = s.needsContext ? st(o, this).index(l) > -1 : st.find(o, this, null, [l]).length), n[o] && n.push(s);
                        n.length && r.push({
                            elem: l,
                            handlers: n
                        })
                    } return a < e.length && r.push({
                elem: this,
                handlers: e.slice(a)
            }), r
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var i, n, o, s = e.button;
                return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || Q, n = i.documentElement, o = i.body, t.pageX = e.clientX + (n && n.scrollLeft || o && o.scrollLeft || 0) - (n && n.clientLeft || o && o.clientLeft || 0), t.pageY = e.clientY + (n && n.scrollTop || o && o.scrollTop || 0) - (n && n.clientTop || o && o.clientTop || 0)), t.which || void 0 === s || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
            }
        },
        fix: function(t) {
            if (t[st.expando]) return t;
            var e, i, n, o = t.type,
                s = t,
                r = this.fixHooks[o];
            for (r || (this.fixHooks[o] = r = Ot.test(o) ? this.mouseHooks : Lt.test(o) ? this.keyHooks : {}), n = r.props ? this.props.concat(r.props) : this.props, t = new st.Event(s), e = n.length; e--;) i = n[e], t[i] = s[i];
            return t.target || (t.target = Q), 3 === t.target.nodeType && (t.target = t.target.parentNode), r.filter ? r.filter(t, s) : t
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== g() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === g() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && st.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return st.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, st.removeEvent = function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i)
    }, st.Event = function(t, e) {
        return this instanceof st.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? h : f) : this.type = t, e && st.extend(this, e), this.timeStamp = t && t.timeStamp || st.now(), void(this[st.expando] = !0)) : new st.Event(t, e)
    }, st.Event.prototype = {
        constructor: st.Event,
        isDefaultPrevented: f,
        isPropagationStopped: f,
        isImmediatePropagationStopped: f,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = h, t && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = h, t && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = h, t && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, st.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        st.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var i, n = this,
                    o = t.relatedTarget,
                    s = t.handleObj;
                return (!o || o !== n && !st.contains(n, o)) && (t.type = s.origType, i = s.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), st.fn.extend({
        on: function(t, e, i, n) {
            return m(this, t, e, i, n)
        },
        one: function(t, e, i, n) {
            return m(this, t, e, i, n, 1)
        },
        off: function(t, e, i) {
            var n, o;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, st(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (o in t) this.off(o, e, t[o]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (i = e, e = void 0), i === !1 && (i = f), this.each(function() {
                st.event.remove(this, t, i, e)
            })
        }
    });
    var Mt = /<script|<style|<link/i,
        Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        zt = /^true\/(.*)/,
        qt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    st.extend({
        htmlPrefilter: function(t) {
            return t.replace(/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, "<$1></$2>")
        },
        clone: function(t, e, i) {
            var n, o, s, r, a = t.cloneNode(!0),
                l = st.contains(t.ownerDocument, t);
            if (!(nt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || st.isXMLDoc(t)))
                for (r = d(a), s = d(t), n = 0, o = s.length; o > n; n++) b(s[n], r[n]);
            if (e)
                if (i)
                    for (s = s || d(t), r = r || d(a), n = 0, o = s.length; o > n; n++) x(s[n], r[n]);
                else x(t, a);
            return r = d(a, "script"), r.length > 0 && u(r, !l && d(t, "script")), a
        },
        cleanData: function(t) {
            for (var e, i, n, o = st.event.special, s = 0; void 0 !== (i = t[s]); s++)
                if (xt(i)) {
                    if (e = i[bt.expando]) {
                        if (e.events)
                            for (n in e.events) o[n] ? st.event.remove(i, n) : st.removeEvent(i, n, e.handle);
                        i[bt.expando] = void 0
                    }
                    i[Ct.expando] && (i[Ct.expando] = void 0)
                }
        }
    }), st.fn.extend({
        domManip: C,
        detach: function(t) {
            return T(this, t, !0)
        },
        remove: function(t) {
            return T(this, t)
        },
        text: function(t) {
            return wt(this, function(t) {
                return void 0 === t ? st.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return C(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    v(this, t).appendChild(t)
                }
            })
        },
        prepend: function() {
            return C(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = v(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return C(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return C(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (st.cleanData(d(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return st.clone(this, t, e)
            })
        },
        html: function(t) {
            return wt(this, function(t) {
                var e = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !Mt.test(t) && !It[(Dt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = st.htmlPrefilter(t);
                    try {
                        for (; n > i; i++) e = this[i] || {}, 1 === e.nodeType && (st.cleanData(d(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return C(this, arguments, function(e) {
                var i = this.parentNode;
                st.inArray(this, t) < 0 && (st.cleanData(d(this)), i && i.replaceChild(e, this))
            }, t)
        }
    }), st.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        st.fn[t] = function(t) {
            for (var i, n = [], o = st(t), s = o.length - 1, r = 0; s >= r; r++) i = r === s ? this : this.clone(!0), st(o[r])[e](i), K.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var Wt, Ft = {
            HTML: "block",
            BODY: "block"
        },
        Rt = /^margin/,
        Bt = new RegExp("^(" + St + ")(?!px)[a-z%]+$", "i"),
        Xt = function(e) {
            var i = e.ownerDocument.defaultView;
            return i && i.opener || (i = t), i.getComputedStyle(e)
        },
        Ut = function(t, e, i, n) {
            var o, s, r = {};
            for (s in e) r[s] = t.style[s], t.style[s] = e[s];
            o = i.apply(t, n || []);
            for (s in e) t.style[s] = r[s];
            return o
        },
        Yt = Q.documentElement;
    ! function() {
        function e() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Yt.appendChild(r);
            var e = t.getComputedStyle(a);
            i = "1%" !== e.top, s = "2px" === e.marginLeft, n = "4px" === e.width, a.style.marginRight = "50%", o = "4px" === e.marginRight, Yt.removeChild(r)
        }
        var i, n, o, s, r = Q.createElement("div"),
            a = Q.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === a.style.backgroundClip, r.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", r.appendChild(a), st.extend(nt, {
            pixelPosition: function() {
                return e(), i
            },
            boxSizingReliable: function() {
                return null == n && e(), n
            },
            pixelMarginRight: function() {
                return null == n && e(), o
            },
            reliableMarginLeft: function() {
                return null == n && e(), s
            },
            reliableMarginRight: function() {
                var e, i = a.appendChild(Q.createElement("div"));
                return i.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", a.style.width = "1px", Yt.appendChild(r), e = !parseFloat(t.getComputedStyle(i).marginRight), Yt.removeChild(r), a.removeChild(i), e
            }
        }))
    }();
    var Vt = /^(none|table(?!-c[ea]).+)/,
        Qt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Gt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Zt = ["Webkit", "O", "Moz", "ms"],
        Kt = Q.createElement("div").style;
    st.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = _(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
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
            float: "cssFloat"
        },
        style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, s, r, a = st.camelCase(e),
                    l = t.style;
                return e = st.cssProps[a] || (st.cssProps[a] = E(a) || a), r = st.cssHooks[e] || st.cssHooks[a], void 0 === i ? r && "get" in r && void 0 !== (o = r.get(t, !1, n)) ? o : l[e] : (s = typeof i, "string" === s && (o = _t.exec(i)) && o[1] && (i = c(t, e, o), s = "number"), void(null != i && i === i && ("number" === s && (i += o && o[3] || (st.cssNumber[a] ? "" : "px")), nt.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), r && "set" in r && void 0 === (i = r.set(t, i, n)) || (l[e] = i))))
            }
        },
        css: function(t, e, i, n) {
            var o, s, r, a = st.camelCase(e);
            return e = st.cssProps[a] || (st.cssProps[a] = E(a) || a), r = st.cssHooks[e] || st.cssHooks[a], r && "get" in r && (o = r.get(t, !0, i)), void 0 === o && (o = _(t, e, n)), "normal" === o && e in Gt && (o = Gt[e]), "" === i || i ? (s = parseFloat(o), i === !0 || isFinite(s) ? s || 0 : o) : o
        }
    }), st.each(["height", "width"], function(t, e) {
        st.cssHooks[e] = {
            get: function(t, i, n) {
                return i ? Vt.test(st.css(t, "display")) && 0 === t.offsetWidth ? Ut(t, Qt, function() {
                    return P(t, e, n)
                }) : P(t, e, n) : void 0
            },
            set: function(t, i, n) {
                var o, s = n && Xt(t),
                    r = n && D(t, e, n, "border-box" === st.css(t, "boxSizing", !1, s), s);
                return r && (o = _t.exec(i)) && "px" !== (o[3] || "px") && (t.style[e] = i, i = st.css(t, e)), A(t, i, r)
            }
        }
    }), st.cssHooks.marginLeft = $(nt.reliableMarginLeft, function(t, e) {
        return e ? (parseFloat(_(t, "marginLeft")) || t.getBoundingClientRect().left - Ut(t, {
            marginLeft: 0
        }, function() {
            return t.getBoundingClientRect().left
        })) + "px" : void 0
    }), st.cssHooks.marginRight = $(nt.reliableMarginRight, function(t, e) {
        return e ? Ut(t, {
            display: "inline-block"
        }, _, [t, "marginRight"]) : void 0
    }), st.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        st.cssHooks[t + e] = {
            expand: function(i) {
                for (var n = 0, o = {}, s = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) o[t + $t[n] + e] = s[n] || s[n - 2] || s[0];
                return o
            }
        }, Rt.test(t) || (st.cssHooks[t + e].set = A)
    }), st.fn.extend({
        css: function(t, e) {
            return wt(this, function(t, e, i) {
                var n, o, s = {},
                    r = 0;
                if (st.isArray(e)) {
                    for (n = Xt(t), o = e.length; o > r; r++) s[e[r]] = st.css(t, e[r], !1, n);
                    return s
                }
                return void 0 !== i ? st.style(t, e, i) : st.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return I(this, !0)
        },
        hide: function() {
            return I(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Et(this) ? st(this).show() : st(this).hide()
            })
        }
    }), st.Tween = j, j.prototype = {
        constructor: j,
        init: function(t, e, i, n, o, s) {
            this.elem = t, this.prop = i, this.easing = o || st.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = s || (st.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var t = j.propHooks[this.prop];
            return t && t.get ? t.get(this) : j.propHooks._default.get(this)
        },
        run: function(t) {
            var e, i = j.propHooks[this.prop];
            return this.options.duration ? this.pos = e = st.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : j.propHooks._default.set(this), this
        }
    }, j.prototype.init.prototype = j.prototype, j.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = st.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
            },
            set: function(t) {
                st.fx.step[t.prop] ? st.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[st.cssProps[t.prop]] && !st.cssHooks[t.prop] ? t.elem[t.prop] = t.now : st.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, j.propHooks.scrollTop = j.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, st.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, st.fx = j.prototype.init, st.fx.step = {};
    var Jt, te, ee = /^(?:toggle|show|hide)$/,
        ie = /queueHooks$/;
    st.Animation = st.extend(z, {
            tweeners: {
                "*": [function(t, e) {
                    var i = this.createTween(t, e);
                    return c(i.elem, t, _t.exec(e), i), i
                }]
            },
            tweener: function(t, e) {
                st.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(vt);
                for (var i, n = 0, o = t.length; o > n; n++) i = t[n], z.tweeners[i] = z.tweeners[i] || [], z.tweeners[i].unshift(e)
            },
            prefilters: [M],
            prefilter: function(t, e) {
                e ? z.prefilters.unshift(t) : z.prefilters.push(t)
            }
        }), st.speed = function(t, e, i) {
            var n = t && "object" == typeof t ? st.extend({}, t) : {
                complete: i || !i && e || st.isFunction(t) && t,
                duration: t,
                easing: i && e || e && !st.isFunction(e) && e
            };
            return n.duration = st.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in st.fx.speeds ? st.fx.speeds[n.duration] : st.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                st.isFunction(n.old) && n.old.call(this), n.queue && st.dequeue(this, n.queue)
            }, n
        }, st.fn.extend({
            fadeTo: function(t, e, i, n) {
                return this.filter(Et).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, i, n)
            },
            animate: function(t, e, i, n) {
                var o = st.isEmptyObject(t),
                    s = st.speed(e, i, n),
                    r = function() {
                        var e = z(this, st.extend({}, t), s);
                        (o || bt.get(this, "finish")) && e.stop(!0)
                    };
                return r.finish = r, o || s.queue === !1 ? this.each(r) : this.queue(s.queue, r)
            },
            stop: function(t, e, i) {
                var n = function(t) {
                    var e = t.stop;
                    delete t.stop, e(i)
                };
                return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        o = null != t && t + "queueHooks",
                        s = st.timers,
                        r = bt.get(this);
                    if (o) r[o] && r[o].stop && n(r[o]);
                    else
                        for (o in r) r[o] && r[o].stop && ie.test(o) && n(r[o]);
                    for (o = s.length; o--;) s[o].elem !== this || null != t && s[o].queue !== t || (s[o].anim.stop(i), e = !1, s.splice(o, 1));
                    (e || !i) && st.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, i = bt.get(this),
                        n = i[t + "queue"],
                        o = i[t + "queueHooks"],
                        s = st.timers,
                        r = n ? n.length : 0;
                    for (i.finish = !0, st.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                    for (e = 0; r > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete i.finish
                })
            }
        }), st.each(["toggle", "show", "hide"], function(t, e) {
            var i = st.fn[e];
            st.fn[e] = function(t, n, o) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(O(e, !0), t, n, o)
            }
        }), st.each({
            slideDown: O("show"),
            slideUp: O("hide"),
            slideToggle: O("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            st.fn[t] = function(t, i, n) {
                return this.animate(e, t, i, n)
            }
        }), st.timers = [], st.fx.tick = function() {
            var t, e = 0,
                i = st.timers;
            for (Jt = st.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
            i.length || st.fx.stop(), Jt = void 0
        }, st.fx.timer = function(t) {
            st.timers.push(t), t() ? st.fx.start() : st.timers.pop()
        }, st.fx.interval = 13, st.fx.start = function() {
            te || (te = t.setInterval(st.fx.tick, st.fx.interval))
        }, st.fx.stop = function() {
            t.clearInterval(te), te = null
        }, st.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, st.fn.delay = function(e, i) {
            return e = st.fx ? st.fx.speeds[e] || e : e, i = i || "fx", this.queue(i, function(i, n) {
                var o = t.setTimeout(i, e);
                n.stop = function() {
                    t.clearTimeout(o)
                }
            })
        },
        function() {
            var t = Q.createElement("input"),
                e = Q.createElement("select"),
                i = e.appendChild(Q.createElement("option"));
            t.type = "checkbox", nt.checkOn = "" !== t.value, nt.optSelected = i.selected, e.disabled = !0, nt.optDisabled = !i.disabled, t = Q.createElement("input"), t.value = "t", t.type = "radio", nt.radioValue = "t" === t.value
        }();
    var ne, oe = st.expr.attrHandle;
    st.fn.extend({
        attr: function(t, e) {
            return wt(this, st.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                st.removeAttr(this, t)
            })
        }
    }), st.extend({
        attr: function(t, e, i) {
            var n, o, s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return void 0 === t.getAttribute ? st.prop(t, e, i) : (1 === s && st.isXMLDoc(t) || (e = e.toLowerCase(), o = st.attrHooks[e] || (st.expr.match.bool.test(e) ? ne : void 0)), void 0 !== i ? null === i ? void st.removeAttr(t, e) : o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : o && "get" in o && null !== (n = o.get(t, e)) ? n : (n = st.find.attr(t, e), null == n ? void 0 : n))
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!nt.radioValue && "radio" === e && st.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var i, n, o = 0,
                s = e && e.match(vt);
            if (s && 1 === t.nodeType)
                for (; i = s[o++];) n = st.propFix[i] || i, st.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
        }
    }), ne = {
        set: function(t, e, i) {
            return e === !1 ? st.removeAttr(t, i) : t.setAttribute(i, i), i
        }
    }, st.each(st.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var i = oe[e] || st.find.attr;
        oe[e] = function(t, e, n) {
            var o, s;
            return n || (s = oe[e], oe[e] = o, o = null != i(t, e, n) ? e.toLowerCase() : null, oe[e] = s), o
        }
    });
    var se = /^(?:input|select|textarea|button)$/i,
        re = /^(?:a|area)$/i;
    st.fn.extend({
        prop: function(t, e) {
            return wt(this, st.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[st.propFix[t] || t]
            })
        }
    }), st.extend({
        prop: function(t, e, i) {
            var n, o, s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return 1 === s && st.isXMLDoc(t) || (e = st.propFix[e] || e, o = st.propHooks[e]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : t[e] = i : o && "get" in o && null !== (n = o.get(t, e)) ? n : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = st.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : se.test(t.nodeName) || re.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), nt.optSelected || (st.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }
    }), st.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        st.propFix[this.toLowerCase()] = this
    });
    var ae = /[\t\r\n\f]/g;
    st.fn.extend({
        addClass: function(t) {
            var e, i, n, o, s, r, a, l = 0;
            if (st.isFunction(t)) return this.each(function(e) {
                st(this).addClass(t.call(this, e, q(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(vt) || []; i = this[l++];)
                    if (o = q(i), n = 1 === i.nodeType && (" " + o + " ").replace(ae, " ")) {
                        for (r = 0; s = e[r++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                        a = st.trim(n), o !== a && i.setAttribute("class", a)
                    } return this
        },
        removeClass: function(t) {
            var e, i, n, o, s, r, a, l = 0;
            if (st.isFunction(t)) return this.each(function(e) {
                st(this).removeClass(t.call(this, e, q(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(vt) || []; i = this[l++];)
                    if (o = q(i), n = 1 === i.nodeType && (" " + o + " ").replace(ae, " ")) {
                        for (r = 0; s = e[r++];)
                            for (; n.indexOf(" " + s + " ") > -1;) n = n.replace(" " + s + " ", " ");
                        a = st.trim(n), o !== a && i.setAttribute("class", a)
                    } return this
        },
        toggleClass: function(t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : st.isFunction(t) ? this.each(function(i) {
                st(this).toggleClass(t.call(this, i, q(this), e), e)
            }) : this.each(function() {
                var e, n, o, s;
                if ("string" === i)
                    for (n = 0, o = st(this), s = t.match(vt) || []; e = s[n++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                else(void 0 === t || "boolean" === i) && (e = q(this), e && bt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : bt.get(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e, i, n = 0;
            for (e = " " + t + " "; i = this[n++];)
                if (1 === i.nodeType && (" " + q(i) + " ").replace(ae, " ").indexOf(e) > -1) return !0;
            return !1
        }
    });
    st.fn.extend({
        val: function(t) {
            var e, i, n, o = this[0];
            return arguments.length ? (n = st.isFunction(t), this.each(function(i) {
                var o;
                1 === this.nodeType && (o = n ? t.call(this, i, st(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : st.isArray(o) && (o = st.map(o, function(t) {
                    return null == t ? "" : t + ""
                })), (e = st.valHooks[this.type] || st.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
            })) : o ? (e = st.valHooks[o.type] || st.valHooks[o.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(o, "value")) ? i : (i = o.value, "string" == typeof i ? i.replace(/\r/g, "") : null == i ? "" : i)) : void 0
        }
    }), st.extend({
        valHooks: {
            option: {
                get: function(t) {
                    return st.trim(t.value)
                }
            },
            select: {
                get: function(t) {
                    for (var e, i, n = t.options, o = t.selectedIndex, s = "select-one" === t.type || 0 > o, r = s ? null : [], a = s ? o + 1 : n.length, l = 0 > o ? a : s ? o : 0; a > l; l++)
                        if (i = n[l], (i.selected || l === o) && (nt.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !st.nodeName(i.parentNode, "optgroup"))) {
                            if (e = st(i).val(), s) return e;
                            r.push(e)
                        } return r
                },
                set: function(t, e) {
                    for (var i, n, o = t.options, s = st.makeArray(e), r = o.length; r--;) n = o[r], (n.selected = st.inArray(st.valHooks.option.get(n), s) > -1) && (i = !0);
                    return i || (t.selectedIndex = -1), s
                }
            }
        }
    }), st.each(["radio", "checkbox"], function() {
        st.valHooks[this] = {
            set: function(t, e) {
                return st.isArray(e) ? t.checked = st.inArray(st(t).val(), e) > -1 : void 0
            }
        }, nt.checkOn || (st.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var le = /^(?:focusinfocus|focusoutblur)$/;
    st.extend(st.event, {
        trigger: function(e, i, n, o) {
            var s, r, a, l, c, d, u, p = [n || Q],
                h = it.call(e, "type") ? e.type : e,
                f = it.call(e, "namespace") ? e.namespace.split(".") : [];
            if (r = a = n = n || Q, 3 !== n.nodeType && 8 !== n.nodeType && !le.test(h + st.event.triggered) && (h.indexOf(".") > -1 && (f = h.split("."), h = f.shift(), f.sort()), c = h.indexOf(":") < 0 && "on" + h, e = e[st.expando] ? e : new st.Event(h, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : st.makeArray(i, [e]), u = st.event.special[h] || {}, o || !u.trigger || u.trigger.apply(n, i) !== !1)) {
                if (!o && !u.noBubble && !st.isWindow(n)) {
                    for (l = u.delegateType || h, le.test(l + h) || (r = r.parentNode); r; r = r.parentNode) p.push(r), a = r;
                    a === (n.ownerDocument || Q) && p.push(a.defaultView || a.parentWindow || t)
                }
                for (s = 0;
                    (r = p[s++]) && !e.isPropagationStopped();) e.type = s > 1 ? l : u.bindType || h, d = (bt.get(r, "events") || {})[e.type] && bt.get(r, "handle"), d && d.apply(r, i), (d = c && r[c]) && d.apply && xt(r) && (e.result = d.apply(r, i), e.result === !1 && e.preventDefault());
                return e.type = h, o || e.isDefaultPrevented() || u._default && u._default.apply(p.pop(), i) !== !1 || !xt(n) || c && st.isFunction(n[h]) && !st.isWindow(n) && (a = n[c], a && (n[c] = null), st.event.triggered = h, n[h](), st.event.triggered = void 0, a && (n[c] = a)), e.result
            }
        },
        simulate: function(t, e, i) {
            var n = st.extend(new st.Event, i, {
                type: t,
                isSimulated: !0
            });
            st.event.trigger(n, null, e), n.isDefaultPrevented() && i.preventDefault()
        }
    }), st.fn.extend({
        trigger: function(t, e) {
            return this.each(function() {
                st.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var i = this[0];
            return i ? st.event.trigger(t, e, i, !0) : void 0
        }
    }), st.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        st.fn[e] = function(t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), st.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), nt.focusin = "onfocusin" in t, nt.focusin || st.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var i = function(t) {
            st.event.simulate(e, t.target, st.event.fix(t))
        };
        st.event.special[e] = {
            setup: function() {
                var n = this.ownerDocument || this,
                    o = bt.access(n, e);
                o || n.addEventListener(t, i, !0), bt.access(n, e, (o || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                    o = bt.access(n, e) - 1;
                o ? bt.access(n, e, o) : (n.removeEventListener(t, i, !0), bt.remove(n, e))
            }
        }
    });
    var ce = t.location,
        de = st.now(),
        ue = /\?/;
    st.parseJSON = function(t) {
        return JSON.parse(t + "")
    }, st.parseXML = function(e) {
        var i;
        if (!e || "string" != typeof e) return null;
        try {
            i = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (t) {
            i = void 0
        }
        return (!i || i.getElementsByTagName("parsererror").length) && st.error("Invalid XML: " + e), i
    };
    var pe = /([?&])_=[^&]*/,
        he = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        fe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        ge = /^(?:GET|HEAD)$/,
        me = {},
        ve = {},
        ye = "*/".concat("*"),
        we = Q.createElement("a");
    we.href = ce.href, st.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ce.href,
            type: "GET",
            isLocal: fe.test(ce.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ye,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": st.parseJSON,
                "text xml": st.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? R(R(t, st.ajaxSettings), e) : R(st.ajaxSettings, t)
        },
        ajaxPrefilter: W(me),
        ajaxTransport: W(ve),
        ajax: function(e, i) {
            function n(e, i, n, a) {
                var c, u, y, w, b, T = i;
                2 !== x && (x = 2, l && t.clearTimeout(l), o = void 0, r = a || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, n && (w = B(p, C, n)), w = X(p, w, C, c), c ? (p.ifModified && (b = C.getResponseHeader("Last-Modified"), b && (st.lastModified[s] = b), (b = C.getResponseHeader("etag")) && (st.etag[s] = b)), 204 === e || "HEAD" === p.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = w.state, u = w.data, y = w.error, c = !y)) : (y = T, (e || !T) && (T = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (i || T) + "", c ? g.resolveWith(h, [u, T, C]) : g.rejectWith(h, [C, T, y]), C.statusCode(v), v = void 0, d && f.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? u : y]), m.fireWith(h, [C, T]), d && (f.trigger("ajaxComplete", [C, p]), --st.active || st.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (i = e, e = void 0), i = i || {};
            var o, s, r, a, l, c, d, u, p = st.ajaxSetup({}, i),
                h = p.context || p,
                f = p.context && (h.nodeType || h.jquery) ? st(h) : st.event,
                g = st.Deferred(),
                m = st.Callbacks("once memory"),
                v = p.statusCode || {},
                y = {},
                w = {},
                x = 0,
                b = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === x) {
                            if (!a)
                                for (a = {}; e = he.exec(r);) a[e[1].toLowerCase()] = e[2];
                            e = a[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? r : null
                    },
                    setRequestHeader: function(t, e) {
                        var i = t.toLowerCase();
                        return x || (t = w[i] = w[i] || t, y[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return x || (p.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > x)
                                for (e in t) v[e] = [v[e], t[e]];
                            else C.always(t[C.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || b;
                        return o && o.abort(e), n(0, e), this
                    }
                };
            if (g.promise(C).complete = m.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || ce.href) + "").replace(/#.*$/, "").replace(/^\/\//, ce.protocol + "//"), p.type = i.method || i.type || p.method || p.type, p.dataTypes = st.trim(p.dataType || "*").toLowerCase().match(vt) || [""], null == p.crossDomain) {
                c = Q.createElement("a");
                try {
                    c.href = p.url, c.href = c.href, p.crossDomain = we.protocol + "//" + we.host != c.protocol + "//" + c.host
                } catch (t) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = st.param(p.data, p.traditional)), F(me, p, i, C), 2 === x) return C;
            d = st.event && p.global, d && 0 == st.active++ && st.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !ge.test(p.type), s = p.url, p.hasContent || (p.data && (s = p.url += (ue.test(s) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = pe.test(s) ? s.replace(pe, "$1_=" + de++) : s + (ue.test(s) ? "&" : "?") + "_=" + de++)), p.ifModified && (st.lastModified[s] && C.setRequestHeader("If-Modified-Since", st.lastModified[s]), st.etag[s] && C.setRequestHeader("If-None-Match", st.etag[s])), (p.data && p.hasContent && p.contentType !== !1 || i.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + ye + "; q=0.01" : "") : p.accepts["*"]);
            for (u in p.headers) C.setRequestHeader(u, p.headers[u]);
            if (p.beforeSend && (p.beforeSend.call(h, C, p) === !1 || 2 === x)) return C.abort();
            b = "abort";
            for (u in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) C[u](p[u]);
            if (o = F(ve, p, i, C)) {
                if (C.readyState = 1, d && f.trigger("ajaxSend", [C, p]), 2 === x) return C;
                p.async && p.timeout > 0 && (l = t.setTimeout(function() {
                    C.abort("timeout")
                }, p.timeout));
                try {
                    x = 1, o.send(y, n)
                } catch (t) {
                    if (!(2 > x)) throw t;
                    n(-1, t)
                }
            } else n(-1, "No Transport");
            return C
        },
        getJSON: function(t, e, i) {
            return st.get(t, e, i, "json")
        },
        getScript: function(t, e) {
            return st.get(t, void 0, e, "script")
        }
    }), st.each(["get", "post"], function(t, e) {
        st[e] = function(t, i, n, o) {
            return st.isFunction(i) && (o = o || n, n = i, i = void 0), st.ajax(st.extend({
                url: t,
                type: e,
                dataType: o,
                data: i,
                success: n
            }, st.isPlainObject(t) && t))
        }
    }), st._evalUrl = function(t) {
        return st.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, st.fn.extend({
        wrapAll: function(t) {
            var e;
            return st.isFunction(t) ? this.each(function(e) {
                st(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = st(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this)
        },
        wrapInner: function(t) {
            return st.isFunction(t) ? this.each(function(e) {
                st(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = st(this),
                    i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = st.isFunction(t);
            return this.each(function(i) {
                st(this).wrapAll(e ? t.call(this, i) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                st.nodeName(this, "body") || st(this).replaceWith(this.childNodes)
            }).end()
        }
    }), st.expr.filters.hidden = function(t) {
        return !st.expr.filters.visible(t)
    }, st.expr.filters.visible = function(t) {
        return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
    };
    var xe = /\[\]$/,
        be = /^(?:submit|button|image|reset|file)$/i,
        Ce = /^(?:input|select|textarea|keygen)/i;
    st.param = function(t, e) {
        var i, n = [],
            o = function(t, e) {
                e = st.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = st.ajaxSettings && st.ajaxSettings.traditional), st.isArray(t) || t.jquery && !st.isPlainObject(t)) st.each(t, function() {
            o(this.name, this.value)
        });
        else
            for (i in t) U(i, t[i], e, o);
        return n.join("&").replace(/%20/g, "+")
    }, st.fn.extend({
        serialize: function() {
            return st.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = st.prop(this, "elements");
                return t ? st.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !st(this).is(":disabled") && Ce.test(this.nodeName) && !be.test(t) && (this.checked || !At.test(t))
            }).map(function(t, e) {
                var i = st(this).val();
                return null == i ? null : st.isArray(i) ? st.map(i, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(/\r?\n/g, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(/\r?\n/g, "\r\n")
                }
            }).get()
        }
    }), st.ajaxSettings.xhr = function() {
        try {
            return new t.XMLHttpRequest
        } catch (t) {}
    };
    var Te = {
            0: 200,
            1223: 204
        },
        ke = st.ajaxSettings.xhr();
    nt.cors = !!ke && "withCredentials" in ke, nt.ajax = ke = !!ke, st.ajaxTransport(function(e) {
        var i, n;
        return nt.cors || ke && !e.crossDomain ? {
            send: function(o, s) {
                var r, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (r in e.xhrFields) a[r] = e.xhrFields[r];
                e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                for (r in o) a.setRequestHeader(r, o[r]);
                i = function(t) {
                    return function() {
                        i && (i = n = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(Te[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = i(), n = a.onerror = i("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                    4 === a.readyState && t.setTimeout(function() {
                        i && n()
                    })
                }, i = i("abort");
                try {
                    a.send(e.hasContent && e.data || null)
                } catch (t) {
                    if (i) throw t
                }
            },
            abort: function() {
                i && i()
            }
        } : void 0
    }), st.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return st.globalEval(t), t
            }
        }
    }), st.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), st.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, i;
            return {
                send: function(n, o) {
                    e = st("<script>").prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", i = function(t) {
                        e.remove(), i = null, t && o("error" === t.type ? 404 : 200, t.type)
                    }), Q.head.appendChild(e[0])
                },
                abort: function() {
                    i && i()
                }
            }
        }
    });
    var Se = [],
        _e = /(=)\?(?=&|$)|\?\?/;
    st.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Se.pop() || st.expando + "_" + de++;
            return this[t] = !0, t
        }
    }), st.ajaxPrefilter("json jsonp", function(e, i, n) {
        var o, s, r, a = e.jsonp !== !1 && (_e.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && _e.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = st.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(_e, "$1" + o) : e.jsonp !== !1 && (e.url += (ue.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
            return r || st.error(o + " was not called"), r[0]
        }, e.dataTypes[0] = "json", s = t[o], t[o] = function() {
            r = arguments
        }, n.always(function() {
            void 0 === s ? st(t).removeProp(o) : t[o] = s, e[o] && (e.jsonpCallback = i.jsonpCallback, Se.push(o)), r && st.isFunction(s) && s(r[0]), r = s = void 0
        }), "script") : void 0
    }), nt.createHTMLDocument = function() {
        var t = Q.implementation.createHTMLDocument("").body;
        return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
    }(), st.parseHTML = function(t, e, i) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (i = e, e = !1), e = e || (nt.createHTMLDocument ? Q.implementation.createHTMLDocument("") : Q);
        var n = ut.exec(t),
            o = !i && [];
        return n ? [e.createElement(n[1])] : (n = p([t], e, o), o && o.length && st(o).remove(), st.merge([], n.childNodes))
    };
    var $e = st.fn.load;
    st.fn.load = function(t, e, i) {
        if ("string" != typeof t && $e) return $e.apply(this, arguments);
        var n, o, s, r = this,
            a = t.indexOf(" ");
        return a > -1 && (n = st.trim(t.slice(a)), t = t.slice(0, a)), st.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"), r.length > 0 && st.ajax({
            url: t,
            type: o || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            s = arguments, r.html(n ? st("<div>").append(st.parseHTML(t)).find(n) : t)
        }).always(i && function(t, e) {
            r.each(function() {
                i.apply(r, s || [t.responseText, e, t])
            })
        }), this
    }, st.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        st.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), st.expr.filters.animated = function(t) {
        return st.grep(st.timers, function(e) {
            return t === e.elem
        }).length
    }, st.offset = {
        setOffset: function(t, e, i) {
            var n, o, s, r, a, l, c, d = st.css(t, "position"),
                u = st(t),
                p = {};
            "static" === d && (t.style.position = "relative"), a = u.offset(), s = st.css(t, "top"), l = st.css(t, "left"), c = ("absolute" === d || "fixed" === d) && (s + l).indexOf("auto") > -1, c ? (n = u.position(), r = n.top, o = n.left) : (r = parseFloat(s) || 0, o = parseFloat(l) || 0), st.isFunction(e) && (e = e.call(t, i, st.extend({}, a))), null != e.top && (p.top = e.top - a.top + r), null != e.left && (p.left = e.left - a.left + o), "using" in e ? e.using.call(t, p) : u.css(p)
        }
    }, st.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                st.offset.setOffset(this, t, e)
            });
            var e, i, n = this[0],
                o = {
                    top: 0,
                    left: 0
                },
                s = n && n.ownerDocument;
            return s ? (e = s.documentElement, st.contains(e, n) ? (o = n.getBoundingClientRect(), i = Y(s), {
                top: o.top + i.pageYOffset - e.clientTop,
                left: o.left + i.pageXOffset - e.clientLeft
            }) : o) : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, i = this[0],
                    n = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === st.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), st.nodeName(t[0], "html") || (n = t.offset()), n.top += st.css(t[0], "borderTopWidth", !0), n.left += st.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - st.css(i, "marginTop", !0),
                    left: e.left - n.left - st.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && "static" === st.css(t, "position");) t = t.offsetParent;
                return t || Yt
            })
        }
    }), st.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var i = "pageYOffset" === e;
        st.fn[t] = function(n) {
            return wt(this, function(t, n, o) {
                var s = Y(t);
                return void 0 === o ? s ? s[e] : t[n] : void(s ? s.scrollTo(i ? s.pageXOffset : o, i ? o : s.pageYOffset) : t[n] = o)
            }, t, n, arguments.length)
        }
    }), st.each(["top", "left"], function(t, e) {
        st.cssHooks[e] = $(nt.pixelPosition, function(t, i) {
            return i ? (i = _(t, e), Bt.test(i) ? st(t).position()[e] + "px" : i) : void 0
        })
    }), st.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        st.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(i, n) {
            st.fn[n] = function(n, o) {
                var s = arguments.length && (i || "boolean" != typeof n),
                    r = i || (n === !0 || o === !0 ? "margin" : "border");
                return wt(this, function(e, i, n) {
                    var o;
                    return st.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === n ? st.css(e, i, r) : st.style(e, i, n, r)
                }, e, s ? n : void 0, s, null)
            }
        })
    }), st.fn.extend({
        bind: function(t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        },
        size: function() {
            return this.length
        }
    }), st.fn.andSelf = st.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return st
    });
    var Ee = t.jQuery,
        Ae = t.$;
    return st.noConflict = function(e) {
        return t.$ === st && (t.$ = Ae), e && t.jQuery === st && (t.jQuery = Ee), st
    }, e || (t.jQuery = t.$ = st), st
}),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(t) {
    var e, i, n, o, s, r, a = "Close",
        l = "BeforeClose",
        c = "MarkupParse",
        d = "Open",
        u = "Change",
        p = "mfp",
        h = "." + p,
        f = "mfp-ready",
        g = "mfp-removing",
        m = "mfp-prevent-close",
        v = function() {},
        y = !!window.jQuery,
        w = t(window),
        x = function(t, i) {
            e.ev.on(p + t + h, i)
        },
        b = function(e, i, n, o) {
            var s = document.createElement("div");
            return s.className = "mfp-" + e, n && (s.innerHTML = n), o ? i && i.appendChild(s) : (s = t(s), i && s.appendTo(i)), s
        },
        C = function(i, n) {
            e.ev.triggerHandler(p + i, n), e.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), e.st.callbacks[i] && e.st.callbacks[i].apply(e, t.isArray(n) ? n : [n]))
        },
        T = function(i) {
            return i === r && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), r = i), e.currTemplate.closeBtn
        },
        k = function() {
            t.magnificPopup.instance || (e = new v, e.init(), t.magnificPopup.instance = e)
        },
        S = function() {
            var t = document.createElement("p").style,
                e = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== t.transition) return !0;
            for (; e.length;)
                if (e.pop() + "Transition" in t) return !0;
            return !1
        };
    v.prototype = {
        constructor: v,
        init: function() {
            var i = navigator.appVersion;
            e.isIE7 = -1 !== i.indexOf("MSIE 7."), e.isIE8 = -1 !== i.indexOf("MSIE 8."), e.isLowIE = e.isIE7 || e.isIE8, e.isAndroid = /android/gi.test(i), e.isIOS = /iphone|ipad|ipod/gi.test(i), e.supportsTransition = S(), e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), n = t(document), e.popupsCache = {}
        },
        open: function(i) {
            var o;
            if (i.isObj === !1) {
                e.items = i.items.toArray(), e.index = 0;
                var r, a = i.items;
                for (o = 0; o < a.length; o++)
                    if (r = a[o], r.parsed && (r = r.el[0]), r === i.el[0]) {
                        e.index = o;
                        break
                    }
            } else e.items = t.isArray(i.items) ? i.items : [i.items], e.index = i.index || 0;
            if (e.isOpen) return void e.updateItemHTML();
            e.types = [], s = "", i.mainEl && i.mainEl.length ? e.ev = i.mainEl.eq(0) : e.ev = n, i.key ? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}), e.currTemplate = e.popupsCache[i.key]) : e.currTemplate = {}, e.st = t.extend(!0, {}, t.magnificPopup.defaults, i), e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos, e.st.modal && (e.st.closeOnContentClick = !1, e.st.closeOnBgClick = !1, e.st.showCloseBtn = !1, e.st.enableEscapeKey = !1), e.bgOverlay || (e.bgOverlay = b("bg").on("click" + h, function() {
                e.close()
            }), e.wrap = b("wrap").attr("tabindex", -1).on("click" + h, function(t) {
                e._checkIfClose(t.target) && e.close()
            }), e.container = b("container", e.wrap)), e.contentContainer = b("content"), e.st.preloader && (e.preloader = b("preloader", e.container, e.st.tLoading));
            var l = t.magnificPopup.modules;
            for (o = 0; o < l.length; o++) {
                var u = l[o];
                u = u.charAt(0).toUpperCase() + u.slice(1), e["init" + u].call(e)
            }
            C("BeforeOpen"), e.st.showCloseBtn && (e.st.closeBtnInside ? (x(c, function(t, e, i, n) {
                i.close_replaceWith = T(n.type)
            }), s += " mfp-close-btn-in") : e.wrap.append(T())), e.st.alignTop && (s += " mfp-align-top"), e.fixedContentPos ? e.wrap.css({
                overflow: e.st.overflowY,
                overflowX: "hidden",
                overflowY: e.st.overflowY
            }) : e.wrap.css({
                top: w.scrollTop(),
                position: "absolute"
            }), (e.st.fixedBgPos === !1 || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({
                height: n.height(),
                position: "absolute"
            }), e.st.enableEscapeKey && n.on("keyup" + h, function(t) {
                27 === t.keyCode && e.close()
            }), w.on("resize" + h, function() {
                e.updateSize()
            }), e.st.closeOnContentClick || (s += " mfp-auto-cursor"), s && e.wrap.addClass(s);
            var p = e.wH = w.height(),
                g = {};
            if (e.fixedContentPos && e._hasScrollBar(p)) {
                var m = e._getScrollbarSize();
                m && (g.marginRight = m)
            }
            e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : g.overflow = "hidden");
            var v = e.st.mainClass;
            return e.isIE7 && (v += " mfp-ie7"), v && e._addClassToMFP(v), e.updateItemHTML(), C("BuildControls"), t("html").css(g), e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || t(document.body)), e._lastFocusedEl = document.activeElement, setTimeout(function() {
                e.content ? (e._addClassToMFP(f), e._setFocus()) : e.bgOverlay.addClass(f), n.on("focusin" + h, e._onFocusIn)
            }, 16), e.isOpen = !0, e.updateSize(p), C(d), i
        },
        close: function() {
            e.isOpen && (C(l), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP(g), setTimeout(function() {
                e._close()
            }, e.st.removalDelay)) : e._close())
        },
        _close: function() {
            C(a);
            var i = g + " " + f + " ";
            if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (i += e.st.mainClass + " "), e._removeClassFromMFP(i), e.fixedContentPos) {
                var o = {
                    marginRight: ""
                };
                e.isIE7 ? t("body, html").css("overflow", "") : o.overflow = "", t("html").css(o)
            }
            n.off("keyup.mfp focusin" + h), e.ev.off(h), e.wrap.attr("class", "mfp-wrap").removeAttr("style"), e.bgOverlay.attr("class", "mfp-bg"), e.container.attr("class", "mfp-container"), !e.st.showCloseBtn || e.st.closeBtnInside && e.currTemplate[e.currItem.type] !== !0 || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(), e.st.autoFocusLast && e._lastFocusedEl && t(e._lastFocusedEl).focus(), e.currItem = null, e.content = null, e.currTemplate = null, e.prevHeight = 0, C("AfterClose")
        },
        updateSize: function(t) {
            if (e.isIOS) {
                var i = document.documentElement.clientWidth / window.innerWidth,
                    n = window.innerHeight * i;
                e.wrap.css("height", n), e.wH = n
            } else e.wH = t || w.height();
            e.fixedContentPos || e.wrap.css("height", e.wH), C("Resize")
        },
        updateItemHTML: function() {
            var i = e.items[e.index];
            e.contentContainer.detach(), e.content && e.content.detach(), i.parsed || (i = e.parseEl(e.index));
            var n = i.type;
            if (C("BeforeChange", [e.currItem ? e.currItem.type : "", n]), e.currItem = i, !e.currTemplate[n]) {
                var s = !!e.st[n] && e.st[n].markup;
                C("FirstMarkupParse", s), e.currTemplate[n] = !s || t(s)
            }
            o && o !== i.type && e.container.removeClass("mfp-" + o + "-holder");
            var r = e["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, e.currTemplate[n]);
            e.appendContent(r, n), i.preloaded = !0, C(u, i), o = i.type, e.container.prepend(e.contentContainer), C("AfterChange")
        },
        appendContent: function(t, i) {
            e.content = t, t ? e.st.showCloseBtn && e.st.closeBtnInside && e.currTemplate[i] === !0 ? e.content.find(".mfp-close").length || e.content.append(T()) : e.content = t : e.content = "", C("BeforeAppend"), e.container.addClass("mfp-" + i + "-holder"), e.contentContainer.append(e.content)
        },
        parseEl: function(i) {
            var n, o = e.items[i];
            if (o.tagName ? o = {
                    el: t(o)
                } : (n = o.type, o = {
                    data: o,
                    src: o.src
                }), o.el) {
                for (var s = e.types, r = 0; r < s.length; r++)
                    if (o.el.hasClass("mfp-" + s[r])) {
                        n = s[r];
                        break
                    } o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))
            }
            return o.type = n || e.st.type || "inline", o.index = i, o.parsed = !0, e.items[i] = o, C("ElementParse", o), e.items[i]
        },
        addGroup: function(t, i) {
            var n = function(n) {
                n.mfpEl = this, e._openClick(n, t, i)
            };
            i || (i = {});
            var o = "click.magnificPopup";
            i.mainEl = t, i.items ? (i.isObj = !0, t.off(o).on(o, n)) : (i.isObj = !1, i.delegate ? t.off(o).on(o, i.delegate, n) : (i.items = t, t.off(o).on(o, n)))
        },
        _openClick: function(i, n, o) {
            if ((void 0 !== o.midClick ? o.midClick : t.magnificPopup.defaults.midClick) || !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)) {
                var s = void 0 !== o.disableOn ? o.disableOn : t.magnificPopup.defaults.disableOn;
                if (s)
                    if (t.isFunction(s)) {
                        if (!s.call(e)) return !0
                    } else if (w.width() < s) return !0;
                i.type && (i.preventDefault(), e.isOpen && i.stopPropagation()), o.el = t(i.mfpEl), o.delegate && (o.items = n.find(o.delegate)), e.open(o)
            }
        },
        updateStatus: function(t, n) {
            if (e.preloader) {
                i !== t && e.container.removeClass("mfp-s-" + i), n || "loading" !== t || (n = e.st.tLoading);
                var o = {
                    status: t,
                    text: n
                };
                C("UpdateStatus", o), t = o.status, n = o.text, e.preloader.html(n), e.preloader.find("a").on("click", function(t) {
                    t.stopImmediatePropagation()
                }), e.container.addClass("mfp-s-" + t), i = t
            }
        },
        _checkIfClose: function(i) {
            if (!t(i).hasClass(m)) {
                var n = e.st.closeOnContentClick,
                    o = e.st.closeOnBgClick;
                if (n && o) return !0;
                if (!e.content || t(i).hasClass("mfp-close") || e.preloader && i === e.preloader[0]) return !0;
                if (i === e.content[0] || t.contains(e.content[0], i)) {
                    if (n) return !0
                } else if (o && t.contains(document, i)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(t) {
            e.bgOverlay.addClass(t), e.wrap.addClass(t)
        },
        _removeClassFromMFP: function(t) {
            this.bgOverlay.removeClass(t), e.wrap.removeClass(t)
        },
        _hasScrollBar: function(t) {
            return (e.isIE7 ? n.height() : document.body.scrollHeight) > (t || w.height())
        },
        _setFocus: function() {
            (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus()
        },
        _onFocusIn: function(i) {
            return i.target === e.wrap[0] || t.contains(e.wrap[0], i.target) ? void 0 : (e._setFocus(), !1)
        },
        _parseMarkup: function(e, i, n) {
            var o;
            n.data && (i = t.extend(n.data, i)), C(c, [e, i, n]), t.each(i, function(t, i) {
                if (void 0 === i || i === !1) return !0;
                if (o = t.split("_"), o.length > 1) {
                    var n = e.find(h + "-" + o[0]);
                    if (n.length > 0) {
                        var s = o[1];
                        "replaceWith" === s ? n[0] !== i[0] && n.replaceWith(i) : "img" === s ? n.is("img") ? n.attr("src", i) : n.replaceWith('<img src="' + i + '" class="' + n.attr("class") + '" />') : n.attr(o[1], i)
                    }
                } else e.find(h + "-" + t).html(i)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === e.scrollbarSize) {
                var t = document.createElement("div");
                t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), e.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
            }
            return e.scrollbarSize
        }
    }, t.magnificPopup = {
        instance: null,
        proto: v.prototype,
        modules: [],
        open: function(e, i) {
            return k(), e = e ? t.extend(!0, {}, e) : {}, e.isObj = !0, e.index = i || 0, this.instance.open(e)
        },
        close: function() {
            return t.magnificPopup.instance && t.magnificPopup.instance.close()
        },
        registerModule: function(e, i) {
            i.options && (t.magnificPopup.defaults[e] = i.options), t.extend(this.proto, i.proto), this.modules.push(e)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, t.fn.magnificPopup = function(i) {
        k();
        var n = t(this);
        if ("string" == typeof i)
            if ("open" === i) {
                var o, s = y ? n.data("magnificPopup") : n[0].magnificPopup,
                    r = parseInt(arguments[1], 10) || 0;
                s.items ? o = s.items[r] : (o = n, s.delegate && (o = o.find(s.delegate)), o = o.eq(r)), e._openClick({
                    mfpEl: o
                }, n, s)
            } else e.isOpen && e[i].apply(e, Array.prototype.slice.call(arguments, 1));
        else i = t.extend(!0, {}, i), y ? n.data("magnificPopup", i) : n[0].magnificPopup = i, e.addGroup(n, i);
        return n
    };
    var _, $, E, A = "inline",
        D = function() {
            E && ($.after(E.addClass(_)).detach(), E = null)
        };
    t.magnificPopup.registerModule(A, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                e.types.push(A), x(a + "." + A, function() {
                    D()
                })
            },
            getInline: function(i, n) {
                if (D(), i.src) {
                    var o = e.st.inline,
                        s = t(i.src);
                    if (s.length) {
                        var r = s[0].parentNode;
                        r && r.tagName && ($ || (_ = o.hiddenClass, $ = b(_), _ = "mfp-" + _), E = s.after($).detach().removeClass(_)), e.updateStatus("ready")
                    } else e.updateStatus("error", o.tNotFound), s = t("<div>");
                    return i.inlineElement = s, s
                }
                return e.updateStatus("ready"), e._parseMarkup(n, {}, i), n
            }
        }
    });
    var P, I = "ajax",
        j = function() {
            P && t(document.body).removeClass(P)
        },
        L = function() {
            j(), e.req && e.req.abort()
        };
    t.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                e.types.push(I), P = e.st.ajax.cursor, x(a + "." + I, L), x("BeforeChange." + I, L)
            },
            getAjax: function(i) {
                P && t(document.body).addClass(P), e.updateStatus("loading");
                var n = t.extend({
                    url: i.src,
                    success: function(n, o, s) {
                        var r = {
                            data: n,
                            xhr: s
                        };
                        C("ParseAjax", r), e.appendContent(t(r.data), I), i.finished = !0, j(), e._setFocus(), setTimeout(function() {
                            e.wrap.addClass(f)
                        }, 16), e.updateStatus("ready"), C("AjaxContentAdded")
                    },
                    error: function() {
                        j(), i.finished = i.loadError = !0, e.updateStatus("error", e.st.ajax.tError.replace("%url%", i.src))
                    }
                }, e.st.ajax.settings);
                return e.req = t.ajax(n), ""
            }
        }
    });
    var O, H = function(i) {
        if (i.data && void 0 !== i.data.title) return i.data.title;
        var n = e.st.image.titleSrc;
        if (n) {
            if (t.isFunction(n)) return n.call(e, i);
            if (i.el) return i.el.attr(n) || ""
        }
        return ""
    };
    t.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var i = e.st.image,
                    n = ".image";
                e.types.push("image"), x(d + n, function() {
                    "image" === e.currItem.type && i.cursor && t(document.body).addClass(i.cursor)
                }), x(a + n, function() {
                    i.cursor && t(document.body).removeClass(i.cursor), w.off("resize" + h)
                }), x("Resize" + n, e.resizeImage), e.isLowIE && x("AfterChange", e.resizeImage)
            },
            resizeImage: function() {
                var t = e.currItem;
                if (t && t.img && e.st.image.verticalFit) {
                    var i = 0;
                    e.isLowIE && (i = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", e.wH - i)
                }
            },
            _onImageHasSize: function(t) {
                t.img && (t.hasSize = !0, O && clearInterval(O), t.isCheckingImgSize = !1, C("ImageHasSize", t), t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1))
            },
            findImageSize: function(t) {
                var i = 0,
                    n = t.img[0],
                    o = function(s) {
                        O && clearInterval(O), O = setInterval(function() {
                            return n.naturalWidth > 0 ? void e._onImageHasSize(t) : (i > 200 && clearInterval(O), i++, void(3 === i ? o(10) : 40 === i ? o(50) : 100 === i && o(500)))
                        }, s)
                    };
                o(1)
            },
            getImage: function(i, n) {
                var o = 0,
                    s = function() {
                        i && (i.img[0].complete ? (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, C("ImageLoadComplete")) : (o++, 200 > o ? setTimeout(s, 100) : r()))
                    },
                    r = function() {
                        i && (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("error", a.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0)
                    },
                    a = e.st.image,
                    l = n.find(".mfp-img");
                if (l.length) {
                    var c = document.createElement("img");
                    c.className = "mfp-img", i.el && i.el.find("img").length && (c.alt = i.el.find("img").attr("alt")), i.img = t(c).on("load.mfploader", s).on("error.mfploader", r), c.src = i.src, l.is("img") && (i.img = i.img.clone()), c = i.img[0], c.naturalWidth > 0 ? i.hasSize = !0 : c.width || (i.hasSize = !1)
                }
                return e._parseMarkup(n, {
                    title: H(i),
                    img_replaceWith: i.img
                }, i), e.resizeImage(), i.hasSize ? (O && clearInterval(O), i.loadError ? (n.addClass("mfp-loading"), e.updateStatus("error", a.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"), e.updateStatus("ready")), n) : (e.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, n.addClass("mfp-loading"), e.findImageSize(i)), n)
            }
        }
    });
    var M, N = function() {
        return void 0 === M && (M = void 0 !== document.createElement("p").style.MozTransform), M
    };
    t.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(t) {
                return t.is("img") ? t : t.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var t, i = e.st.zoom,
                    n = ".zoom";
                if (i.enabled && e.supportsTransition) {
                    var o, s, r = i.duration,
                        c = function(t) {
                            var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                n = "all " + i.duration / 1e3 + "s " + i.easing,
                                o = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                s = "transition";
                            return o["-webkit-" + s] = o["-moz-" + s] = o["-o-" + s] = o[s] = n, e.css(o), e
                        },
                        d = function() {
                            e.content.css("visibility", "visible")
                        };
                    x("BuildControls" + n, function() {
                        if (e._allowZoom()) {
                            if (clearTimeout(o), e.content.css("visibility", "hidden"), !(t = e._getItemToZoom())) return void d();
                            s = c(t), s.css(e._getOffset()), e.wrap.append(s), o = setTimeout(function() {
                                s.css(e._getOffset(!0)), o = setTimeout(function() {
                                    d(), setTimeout(function() {
                                        s.remove(), t = s = null, C("ZoomAnimationEnded")
                                    }, 16)
                                }, r)
                            }, 16)
                        }
                    }), x(l + n, function() {
                        if (e._allowZoom()) {
                            if (clearTimeout(o), e.st.removalDelay = r, !t) {
                                if (!(t = e._getItemToZoom())) return;
                                s = c(t)
                            }
                            s.css(e._getOffset(!0)), e.wrap.append(s), e.content.css("visibility", "hidden"), setTimeout(function() {
                                s.css(e._getOffset())
                            }, 16)
                        }
                    }), x(a + n, function() {
                        e._allowZoom() && (d(), s && s.remove(), t = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === e.currItem.type
            },
            _getItemToZoom: function() {
                return !!e.currItem.hasSize && e.currItem.img
            },
            _getOffset: function(i) {
                var n;
                n = i ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem);
                var o = n.offset(),
                    s = parseInt(n.css("padding-top"), 10),
                    r = parseInt(n.css("padding-bottom"), 10);
                o.top -= t(window).scrollTop() - s;
                var a = {
                    width: n.width(),
                    height: (y ? n.innerHeight() : n[0].offsetHeight) - r - s
                };
                return N() ? a["-moz-transform"] = a.transform = "translate(" + o.left + "px," + o.top + "px)" : (a.left = o.left, a.top = o.top), a
            }
        }
    });
    var z = "iframe",
        q = function(t) {
            if (e.currTemplate[z]) {
                var i = e.currTemplate[z].find("iframe");
                i.length && (t || (i[0].src = "//about:blank"), e.isIE8 && i.css("display", t ? "block" : "none"))
            }
        };
    t.magnificPopup.registerModule(z, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                e.types.push(z), x("BeforeChange", function(t, e, i) {
                    e !== i && (e === z ? q() : i === z && q(!0))
                }), x(a + "." + z, function() {
                    q()
                })
            },
            getIframe: function(i, n) {
                var o = i.src,
                    s = e.st.iframe;
                t.each(s.patterns, function() {
                    return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0
                });
                var r = {};
                return s.srcAction && (r[s.srcAction] = o), e._parseMarkup(n, r, i), e.updateStatus("ready"), n
            }
        }
    });
    var W = function(t) {
            var i = e.items.length;
            return t > i - 1 ? t - i : 0 > t ? i + t : t
        },
        F = function(t, e, i) {
            return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i)
        };
    t.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var i = e.st.gallery,
                    o = ".mfp-gallery",
                    r = Boolean(t.fn.mfpFastClick);
                return e.direction = !0, !(!i || !i.enabled) && (s += " mfp-gallery", x(d + o, function() {
                    i.navigateByImgClick && e.wrap.on("click" + o, ".mfp-img", function() {
                        return e.items.length > 1 ? (e.next(), !1) : void 0
                    }), n.on("keydown" + o, function(t) {
                        37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next()
                    })
                }), x("UpdateStatus" + o, function(t, i) {
                    i.text && (i.text = F(i.text, e.currItem.index, e.items.length))
                }), x(c + o, function(t, n, o, s) {
                    var r = e.items.length;
                    o.counter = r > 1 ? F(i.tCounter, s.index, r) : ""
                }), x("BuildControls" + o, function() {
                    if (e.items.length > 1 && i.arrows && !e.arrowLeft) {
                        var n = i.arrowMarkup,
                            o = e.arrowLeft = t(n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(m),
                            s = e.arrowRight = t(n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(m),
                            a = r ? "mfpFastClick" : "click";
                        o[a](function() {
                            e.prev()
                        }), s[a](function() {
                            e.next()
                        }), e.isIE7 && (b("b", o[0], !1, !0), b("a", o[0], !1, !0), b("b", s[0], !1, !0), b("a", s[0], !1, !0)), e.container.append(o.add(s))
                    }
                }), x(u + o, function() {
                    e._preloadTimeout && clearTimeout(e._preloadTimeout), e._preloadTimeout = setTimeout(function() {
                        e.preloadNearbyImages(), e._preloadTimeout = null
                    }, 16)
                }), void x(a + o, function() {
                    n.off(o), e.wrap.off("click" + o), e.arrowLeft && r && e.arrowLeft.add(e.arrowRight).destroyMfpFastClick(), e.arrowRight = e.arrowLeft = null
                }))
            },
            next: function() {
                e.direction = !0, e.index = W(e.index + 1), e.updateItemHTML()
            },
            prev: function() {
                e.direction = !1, e.index = W(e.index - 1), e.updateItemHTML()
            },
            goTo: function(t) {
                e.direction = t >= e.index, e.index = t, e.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var t, i = e.st.gallery.preload,
                    n = Math.min(i[0], e.items.length),
                    o = Math.min(i[1], e.items.length);
                for (t = 1; t <= (e.direction ? o : n); t++) e._preloadItem(e.index + t);
                for (t = 1; t <= (e.direction ? n : o); t++) e._preloadItem(e.index - t)
            },
            _preloadItem: function(i) {
                if (i = W(i), !e.items[i].preloaded) {
                    var n = e.items[i];
                    n.parsed || (n = e.parseEl(i)), C("LazyLoad", n), "image" === n.type && (n.img = t('<img class="mfp-img" />').on("load.mfploader", function() {
                        n.hasSize = !0
                    }).on("error.mfploader", function() {
                        n.hasSize = !0, n.loadError = !0, C("LazyLoadError", n)
                    }).attr("src", n.src)), n.preloaded = !0
                }
            }
        }
    });
    var R = "retina";
    t.magnificPopup.registerModule(R, {
            options: {
                replaceSrc: function(t) {
                    return t.src.replace(/\.\w+$/, function(t) {
                        return "@2x" + t
                    })
                },
                ratio: 1
            },
            proto: {
                initRetina: function() {
                    if (window.devicePixelRatio > 1) {
                        var t = e.st.retina,
                            i = t.ratio;
                        (i = isNaN(i) ? i() : i) > 1 && (x("ImageHasSize." + R, function(t, e) {
                            e.img.css({
                                "max-width": e.img[0].naturalWidth / i,
                                width: "100%"
                            })
                        }), x("ElementParse." + R, function(e, n) {
                            n.src = t.replaceSrc(n, i)
                        }))
                    }
                }
            }
        }),
        function() {
            var e = "ontouchstart" in window,
                i = function() {
                    w.off("touchmove" + n + " touchend" + n)
                },
                n = ".mfpFastClick";
            t.fn.mfpFastClick = function(o) {
                return t(this).each(function() {
                    var s, r = t(this);
                    if (e) {
                        var a, l, c, d, u, p;
                        r.on("touchstart" + n, function(t) {
                            d = !1, p = 1, u = t.originalEvent ? t.originalEvent.touches[0] : t.touches[0], l = u.clientX, c = u.clientY, w.on("touchmove" + n, function(t) {
                                u = t.originalEvent ? t.originalEvent.touches : t.touches, p = u.length, u = u[0], (Math.abs(u.clientX - l) > 10 || Math.abs(u.clientY - c) > 10) && (d = !0, i())
                            }).on("touchend" + n, function(t) {
                                i(), d || p > 1 || (s = !0, t.preventDefault(), clearTimeout(a), a = setTimeout(function() {
                                    s = !1
                                }, 1e3), o())
                            })
                        })
                    }
                    r.on("click" + n, function() {
                        s || o()
                    })
                })
            }, t.fn.destroyMfpFastClick = function() {
                t(this).off("touchstart" + n + " click" + n), e && w.off("touchmove" + n + " touchend" + n)
            }
        }(), k()
}),
function(t, e, i, n) {
    function o(e, i) {
        this.settings = null, this.options = t.extend({}, o.Defaults, i), this.$element = t(e), this.drag = t.extend({}, p), this.state = t.extend({}, h), this.e = t.extend({}, f), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], t.each(o.Plugins, t.proxy(function(t, e) {
            this._plugins[t[0].toLowerCase() + t.slice(1)] = new e(this)
        }, this)), t.each(o.Pipe, t.proxy(function(e, i) {
            this._pipe.push({
                filter: i.filter,
                run: t.proxy(i.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }

    function s(t) {
        if (t.touches !== n) return {
            x: t.touches[0].pageX,
            y: t.touches[0].pageY
        };
        if (t.touches === n) {
            if (t.pageX !== n) return {
                x: t.pageX,
                y: t.pageY
            };
            if (t.pageX === n) return {
                x: t.clientX,
                y: t.clientY
            }
        }
    }

    function r(t) {
        var e, n, o = i.createElement("div"),
            s = t;
        for (e in s)
            if (n = s[e], void 0 !== o.style[n]) return o = null, [n, e];
        return [!1]
    }

    function a() {
        return r(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
    }

    function l() {
        return r(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
    }

    function c() {
        return r(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
    }

    function d() {
        return "ontouchstart" in e || !!navigator.msMaxTouchPoints
    }

    function u() {
        return e.navigator.msPointerEnabled
    }
    var p, h, f;
    p = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        offsetX: 0,
        offsetY: 0,
        distance: null,
        startTime: 0,
        endTime: 0,
        updatedX: 0,
        targetEl: null
    }, h = {
        isTouch: !1,
        isScrolling: !1,
        isSwiping: !1,
        direction: !1,
        inMotion: !1
    }, f = {
        _onDragStart: null,
        _onDragMove: null,
        _onDragEnd: null,
        _transitionEnd: null,
        _resizer: null,
        _responsiveCall: null,
        _goToLoop: null,
        _checkVisibile: null
    }, o.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: e,
        responsiveClass: !1,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        themeClass: "owl-theme",
        baseClass: "owl-carousel",
        itemClass: "owl-item",
        centerClass: "center",
        activeClass: "active"
    }, o.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, o.Plugins = {}, o.Pipe = [{
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var t = this._clones;
            (this.$stage.children(".cloned").length !== t.length || !this.settings.loop && t.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var t, e, i = this._clones,
                n = this._items,
                o = this.settings.loop ? i.length - Math.max(2 * this.settings.items, 4) : 0;
            for (t = 0, e = Math.abs(o / 2); e > t; t++) o > 0 ? (this.$stage.children().eq(n.length + i.length - 1).remove(), i.pop(), this.$stage.children().eq(0).remove(), i.pop()) : (i.push(i.length / 2), this.$stage.append(n[i[i.length - 1]].clone().addClass("cloned")), i.push(n.length - 1 - (i.length - 1) / 2), this.$stage.prepend(n[i[i.length - 1]].clone().addClass("cloned")))
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var t, e, i, n = this.settings.rtl ? 1 : -1,
                o = (this.width() / this.settings.items).toFixed(3),
                s = 0;
            for (this._coordinates = [], e = 0, i = this._clones.length + this._items.length; i > e; e++) t = this._mergers[this.relative(e)], t = this.settings.mergeFit && Math.min(t, this.settings.items) || t, s += (this.settings.autoWidth ? this._items[this.relative(e)].width() + this.settings.margin : o * t) * n, this._coordinates.push(s)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var e, i, n = (this.width() / this.settings.items).toFixed(3),
                o = {
                    width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
                    "padding-left": this.settings.stagePadding || "",
                    "padding-right": this.settings.stagePadding || ""
                };
            if (this.$stage.css(o), o = {
                    width: this.settings.autoWidth ? "auto" : n - this.settings.margin
                }, o[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && t.grep(this._mergers, function(t) {
                    return t > 1
                }).length > 0)
                for (e = 0, i = this._coordinates.length; i > e; e++) o.width = Math.abs(this._coordinates[e]) - Math.abs(this._coordinates[e - 1] || 0) - this.settings.margin, this.$stage.children().eq(e).css(o);
            else this.$stage.children().css(o)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current && this.reset(this.$stage.children().index(t.current))
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var t, e, i, n, o = this.settings.rtl ? 1 : -1,
                s = 2 * this.settings.stagePadding,
                r = this.coordinates(this.current()) + s,
                a = r + this.width() * o,
                l = [];
            for (i = 0, n = this._coordinates.length; n > i; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + s * o, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && l.push(i);
            this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
        }
    }], o.prototype.initialize = function() {
        if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
            var e, i, o;
            if (e = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : n, o = this.$element.children(i).width(), e.length && 0 >= o) return this.preloadAutoWidthImages(e), !1
        }
        this.$element.addClass("owl-loading"), this.$stage = t("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
    }, o.prototype.setup = function() {
        var e = this.viewport(),
            i = this.options.responsive,
            n = -1,
            o = null;
        i ? (t.each(i, function(t) {
            e >= t && t > n && (n = Number(t))
        }), o = t.extend({}, this.options, i[n]), delete o.responsive, o.responsiveClass && this.$element.attr("class", function(t, e) {
            return e.replace(/\b owl-responsive-\S+/g, "")
        }).addClass("owl-responsive-" + n)) : o = t.extend({}, this.options), (null === this.settings || this._breakpoint !== n) && (this.trigger("change", {
            property: {
                name: "settings",
                value: o
            }
        }), this._breakpoint = n, this.settings = o, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        }))
    }, o.prototype.optionsLogic = function() {
        this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, o.prototype.prepare = function(e) {
        var i = this.trigger("prepare", {
            content: e
        });
        return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(e)), this.trigger("prepared", {
            content: i.data
        }), i.data
    }, o.prototype.update = function() {
        for (var e = 0, i = this._pipe.length, n = t.proxy(function(t) {
                return this[t]
            }, this._invalidated), o = {}; i > e;)(this._invalidated.all || t.grep(this._pipe[e].filter, n).length > 0) && this._pipe[e].run(o), e++;
        this._invalidated = {}
    }, o.prototype.width = function(t) {
        switch (t = t || o.Width.Default) {
            case o.Width.Inner:
            case o.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, o.prototype.refresh = function() {
        if (0 === this._items.length) return !1;
        (new Date).getTime(), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = e.orientation, this.watchVisibility(), this.trigger("refreshed")
    }, o.prototype.eventsCall = function() {
        this.e._onDragStart = t.proxy(function(t) {
            this.onDragStart(t)
        }, this), this.e._onDragMove = t.proxy(function(t) {
            this.onDragMove(t)
        }, this), this.e._onDragEnd = t.proxy(function(t) {
            this.onDragEnd(t)
        }, this), this.e._onResize = t.proxy(function(t) {
            this.onResize(t)
        }, this), this.e._transitionEnd = t.proxy(function(t) {
            this.transitionEnd(t)
        }, this), this.e._preventClick = t.proxy(function(t) {
            this.preventClick(t)
        }, this)
    }, o.prototype.onThrottledResize = function() {
        e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
    }, o.prototype.onResize = function() {
        return !!this._items.length && (this._width !== this.$element.width() && (!this.trigger("resize").isDefaultPrevented() && (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized"))))
    }, o.prototype.eventsRouter = function(t) {
        var e = t.type;
        "mousedown" === e || "touchstart" === e ? this.onDragStart(t) : "mousemove" === e || "touchmove" === e ? this.onDragMove(t) : "mouseup" === e || "touchend" === e ? this.onDragEnd(t) : "touchcancel" === e && this.onDragEnd(t)
    }, o.prototype.internalEvents = function() {
        var i = (d(), u());
        this.settings.mouseDrag ? (this.$stage.on("mousedown", t.proxy(function(t) {
            this.eventsRouter(t)
        }, this)), this.$stage.on("dragstart", function() {
            return !1
        }), this.$stage.get(0).onselectstart = function() {
            return !1
        }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !i && this.$stage.on("touchstart touchcancel", t.proxy(function(t) {
            this.eventsRouter(t)
        }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(e, "resize", t.proxy(this.onThrottledResize, this))
    }, o.prototype.onDragStart = function(n) {
        var o, r, a, l;
        if (o = n.originalEvent || n || e.event, 3 === o.which || this.state.isTouch) return !1;
        if ("mousedown" === o.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, r = s(o).x, a = s(o).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) l = this.getTransformProperty(), this.drag.offsetX = l, this.animate(l), this.state.inMotion = !0;
        else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
        this.drag.startX = r - this.drag.offsetX, this.drag.startY = a - this.drag.offsetY, this.drag.start = r - this.drag.startX, this.drag.targetEl = o.target || o.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), t(i).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", t.proxy(function(t) {
            this.eventsRouter(t)
        }, this))
    }, o.prototype.onDragMove = function(t) {
        var i, o, r, a, l, c;
        this.state.isTouch && (this.state.isScrolling || (i = t.originalEvent || t || e.event, o = s(i).x, r = s(i).y, this.drag.currentX = o - this.drag.startX, this.drag.currentY = r - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (a = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), l = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), c = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, a + c), l + c)), (this.drag.distance > 8 || this.drag.distance < -8) && (i.preventDefault !== n ? i.preventDefault() : i.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
    }, o.prototype.onDragEnd = function(e) {
        var n, o, s;
        if (this.state.isTouch) {
            if ("mouseup" === e.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1;
            this.drag.endTime = (new Date).getTime(), n = this.drag.endTime - this.drag.startTime, o = Math.abs(this.drag.distance), (o > 3 || n > 300) && this.removeClick(this.drag.targetEl), s = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(s), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(s) || this.transitionEnd(), this.drag.distance = 0, t(i).off(".owl.dragEvents")
        }
    }, o.prototype.removeClick = function(i) {
        this.drag.targetEl = i, t(i).on("click.preventClick", this.e._preventClick), e.setTimeout(function() {
            t(i).off("click.preventClick")
        }, 300)
    }, o.prototype.preventClick = function(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), t(e.target).off("click.preventClick")
    }, o.prototype.getTransformProperty = function() {
        var t, i;
        return t = e.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), t = t.replace(/matrix(3d)?\(|\)/g, "").split(","), i = 16 === t.length, i !== !0 ? t[4] : t[12]
    }, o.prototype.closest = function(e) {
        var i = -1,
            n = this.width(),
            o = this.coordinates();
        return this.settings.freeDrag || t.each(o, t.proxy(function(t, s) {
            return e > s - 30 && s + 30 > e ? i = t : this.op(e, "<", s) && this.op(e, ">", o[t + 1] || s - n) && (i = "left" === this.state.direction ? t + 1 : t), -1 === i
        }, this)), this.settings.loop || (this.op(e, ">", o[this.minimum()]) ? i = e = this.minimum() : this.op(e, "<", o[this.maximum()]) && (i = e = this.maximum())), i
    }, o.prototype.animate = function(e) {
        this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
            transform: "translate3d(" + e + "px,0px, 0px)",
            transition: this.speed() / 1e3 + "s"
        }) : this.state.isTouch ? this.$stage.css({
            left: e + "px"
        }) : this.$stage.animate({
            left: e
        }, this.speed() / 1e3, this.settings.fallbackEasing, t.proxy(function() {
            this.state.inMotion && this.transitionEnd()
        }, this))
    }, o.prototype.current = function(t) {
        if (t === n) return this._current;
        if (0 === this._items.length) return n;
        if (t = this.normalize(t), this._current !== t) {
            var e = this.trigger("change", {
                property: {
                    name: "position",
                    value: t
                }
            });
            e.data !== n && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, o.prototype.invalidate = function(t) {
        this._invalidated[t] = !0
    }, o.prototype.reset = function(t) {
        (t = this.normalize(t)) !== n && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, o.prototype.normalize = function(e, i) {
        var o = i ? this._items.length : this._items.length + this._clones.length;
        return !t.isNumeric(e) || 1 > o ? n : e = this._clones.length ? (e % o + o) % o : Math.max(this.minimum(i), Math.min(this.maximum(i), e))
    }, o.prototype.relative = function(t) {
        return t = this.normalize(t), t -= this._clones.length / 2, this.normalize(t, !0)
    }, o.prototype.maximum = function(t) {
        var e, i, n, o = 0,
            s = this.settings;
        if (t) return this._items.length - 1;
        if (!s.loop && s.center) e = this._items.length - 1;
        else if (s.loop || s.center)
            if (s.loop || s.center) e = this._items.length + s.items;
            else {
                if (!s.autoWidth && !s.merge) throw "Can not detect maximum absolute position.";
                for (revert = s.rtl ? 1 : -1, i = this.$stage.width() - this.$element.width();
                    (n = this.coordinates(o)) && !(n * revert >= i);) e = ++o
            }
        else e = this._items.length - s.items;
        return e
    }, o.prototype.minimum = function(t) {
        return t ? 0 : this._clones.length / 2
    }, o.prototype.items = function(t) {
        return t === n ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
    }, o.prototype.mergers = function(t) {
        return t === n ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
    }, o.prototype.clones = function(e) {
        var i = this._clones.length / 2,
            o = i + this._items.length,
            s = function(t) {
                return t % 2 == 0 ? o + t / 2 : i - (t + 1) / 2
            };
        return e === n ? t.map(this._clones, function(t, e) {
            return s(e)
        }) : t.map(this._clones, function(t, i) {
            return t === e ? s(i) : null
        })
    }, o.prototype.speed = function(t) {
        return t !== n && (this._speed = t), this._speed
    }, o.prototype.coordinates = function(e) {
        var i = null;
        return e === n ? t.map(this._coordinates, t.proxy(function(t, e) {
            return this.coordinates(e)
        }, this)) : (this.settings.center ? (i = this._coordinates[e], i += (this.width() - i + (this._coordinates[e - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : i = this._coordinates[e - 1] || 0, i)
    }, o.prototype.duration = function(t, e, i) {
        return Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    }, o.prototype.to = function(i, n) {
        if (this.settings.loop) {
            var o = i - this.relative(this.current()),
                s = this.current(),
                r = this.current(),
                a = this.current() + o,
                l = 0 > r - a,
                c = this._clones.length + this._items.length;
            a < this.settings.items && l === !1 ? (s = r + this._items.length, this.reset(s)) : a >= c - this.settings.items && l === !0 && (s = r - this._items.length, this.reset(s)), e.clearTimeout(this.e._goToLoop), this.e._goToLoop = e.setTimeout(t.proxy(function() {
                this.speed(this.duration(this.current(), s + o, n)), this.current(s + o), this.update()
            }, this), 30)
        } else this.speed(this.duration(this.current(), i, n)), this.current(i), this.update()
    }, o.prototype.next = function(t) {
        t = t || !1, this.to(this.relative(this.current()) + 1, t)
    }, o.prototype.prev = function(t) {
        t = t || !1, this.to(this.relative(this.current()) - 1, t)
    }, o.prototype.transitionEnd = function(t) {
        return (t === n || (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) === this.$stage.get(0))) && (this.state.inMotion = !1, void this.trigger("translated"))
    }, o.prototype.viewport = function() {
        var n;
        if (this.options.responsiveBaseElement !== e) n = t(this.options.responsiveBaseElement).width();
        else if (e.innerWidth) n = e.innerWidth;
        else {
            if (!i.documentElement || !i.documentElement.clientWidth) throw "Can not detect viewport width.";
            n = i.documentElement.clientWidth
        }
        return n
    }, o.prototype.replace = function(e) {
        this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() {
            return 1 === this.nodeType
        }).each(t.proxy(function(t, e) {
            e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(t.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, o.prototype.add = function(t, e) {
        e = e === n ? this._items.length : this.normalize(e, !0), this.trigger("add", {
            content: t,
            position: e
        }), 0 === this._items.length || e === this._items.length ? (this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, 1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
            content: t,
            position: e
        })
    }, o.prototype.remove = function(t) {
        (t = this.normalize(t, !0)) !== n && (this.trigger("remove", {
            content: this._items[t],
            position: t
        }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: t
        }))
    }, o.prototype.addTriggerableEvents = function() {
        var e = t.proxy(function(e, i) {
            return t.proxy(function(t) {
                t.relatedTarget !== this && (this.suppress([i]), e.apply(this, [].slice.call(arguments, 1)), this.release([i]))
            }, this)
        }, this);
        t.each({
            next: this.next,
            prev: this.prev,
            to: this.to,
            destroy: this.destroy,
            refresh: this.refresh,
            replace: this.replace,
            add: this.add,
            remove: this.remove
        }, t.proxy(function(t, i) {
            this.$element.on(t + ".owl.carousel", e(i, t + ".owl.carousel"))
        }, this))
    }, o.prototype.watchVisibility = function() {
        function i(t) {
            return t.offsetWidth > 0 && t.offsetHeight > 0
        }

        function n() {
            i(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), e.clearInterval(this.e._checkVisibile))
        }
        i(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), e.clearInterval(this.e._checkVisibile),
            this.e._checkVisibile = e.setInterval(t.proxy(n, this), 500))
    }, o.prototype.preloadAutoWidthImages = function(e) {
        var i, n, o, s;
        i = 0, n = this, e.each(function(r, a) {
            o = t(a), s = new Image, s.onload = function() {
                i++, o.attr("src", s.src), o.css("opacity", 1), i >= e.length && (n.state.imagesLoaded = !0, n.initialize())
            }, s.src = o.attr("src") || o.attr("data-src") || o.attr("data-src-retina")
        })
    }, o.prototype.destroy = function() {
        this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && t(e).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
        for (var n in this._plugins) this._plugins[n].destroy();
        (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), t(i).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function() {}, this.$stage.off("dragstart", function() {
            return !1
        })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
    }, o.prototype.op = function(t, e, i) {
        var n = this.settings.rtl;
        switch (e) {
            case "<":
                return n ? t > i : i > t;
            case ">":
                return n ? i > t : t > i;
            case ">=":
                return n ? i >= t : t >= i;
            case "<=":
                return n ? t >= i : i >= t
        }
    }, o.prototype.on = function(t, e, i, n) {
        t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
    }, o.prototype.off = function(t, e, i, n) {
        t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i)
    }, o.prototype.trigger = function(e, i, n) {
        var o = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            s = t.camelCase(t.grep(["on", e, n], function(t) {
                return t
            }).join("-").toLowerCase()),
            r = t.Event([e, "owl", n || "carousel"].join(".").toLowerCase(), t.extend({
                relatedTarget: this
            }, o, i));
        return this._supress[e] || (t.each(this._plugins, function(t, e) {
            e.onTrigger && e.onTrigger(r)
        }), this.$element.trigger(r), this.settings && "function" == typeof this.settings[s] && this.settings[s].apply(this, r)), r
    }, o.prototype.suppress = function(e) {
        t.each(e, t.proxy(function(t, e) {
            this._supress[e] = !0
        }, this))
    }, o.prototype.release = function(e) {
        t.each(e, t.proxy(function(t, e) {
            delete this._supress[e]
        }, this))
    }, o.prototype.browserSupport = function() {
        if (this.support3d = c(), this.support3d) {
            this.transformVendor = l();
            var t = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
            this.transitionEndVendor = t[a()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
        }
        this.state.orientation = e.orientation
    }, t.fn.owlCarousel = function(e) {
        return this.each(function() {
            t(this).data("owlCarousel") || t(this).data("owlCarousel", new o(this, e))
        })
    }, t.fn.owlCarousel.Constructor = o
}(window.Zepto || window.jQuery, window, document),
function(t, e) {
    var i = function(e) {
        this._core = e, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel": t.proxy(function(e) {
                if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                    for (var i = this._core.settings, n = i.center && Math.ceil(i.items / 2) || i.items, o = i.center && -1 * n || 0, s = (e.property && e.property.value || this._core.current()) + o, r = this._core.clones().length, a = t.proxy(function(t, e) {
                            this.load(e)
                        }, this); o++ < n;) this.load(r / 2 + this._core.relative(s)), r && t.each(this._core.clones(this._core.relative(s++)), a)
            }, this)
        }, this._core.options = t.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    i.Defaults = {
        lazyLoad: !1
    }, i.prototype.load = function(i) {
        var n = this._core.$stage.children().eq(i),
            o = n && n.find(".owl-lazy");
        !o || t.inArray(n.get(0), this._loaded) > -1 || (o.each(t.proxy(function(i, n) {
            var o, s = t(n),
                r = e.devicePixelRatio > 1 && s.attr("data-src-retina") || s.attr("data-src");
            this._core.trigger("load", {
                element: s,
                url: r
            }, "lazy"), s.is("img") ? s.one("load.owl.lazy", t.proxy(function() {
                s.css("opacity", 1), this._core.trigger("loaded", {
                    element: s,
                    url: r
                }, "lazy")
            }, this)).attr("src", r) : (o = new Image, o.onload = t.proxy(function() {
                s.css({
                    "background-image": "url(" + r + ")",
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: s,
                    url: r
                }, "lazy")
            }, this), o.src = r)
        }, this)), this._loaded.push(n.get(0)))
    }, i.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Lazy = i
}(window.Zepto || window.jQuery, window, document),
function(t) {
    var e = function(i) {
        this._core = i, this._handlers = {
            "initialized.owl.carousel": t.proxy(function() {
                this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                this._core.settings.autoHeight && "position" == t.property.name && this.update()
            }, this),
            "loaded.owl.lazy": t.proxy(function(t) {
                this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
            }, this)
        }, this._core.options = t.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, e.prototype.update = function() {
        this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
    }, e.prototype.destroy = function() {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function(t, e, i) {
    var n = function(e) {
        this._core = e, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
            "resize.owl.carousel": t.proxy(function(t) {
                this._core.settings.video && !this.isInFullScreen() && t.preventDefault()
            }, this),
            "refresh.owl.carousel changed.owl.carousel": t.proxy(function() {
                this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": t.proxy(function(e) {
                var i = t(e.content).find(".owl-video");
                i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
            }, this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) {
            this.play(t)
        }, this))
    };
    n.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, n.prototype.fetch = function(t, e) {
        var i = t.attr("data-vimeo-id") ? "vimeo" : "youtube",
            n = t.attr("data-vimeo-id") || t.attr("data-youtube-id"),
            o = t.attr("data-width") || this._core.settings.videoWidth,
            s = t.attr("data-height") || this._core.settings.videoHeight,
            r = t.attr("href");
        if (!r) throw new Error("Missing video URL.");
        if (n = r.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), n[3].indexOf("youtu") > -1) i = "youtube";
        else {
            if (!(n[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
            i = "vimeo"
        }
        n = n[6], this._videos[r] = {
            type: i,
            id: n,
            width: o,
            height: s
        }, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
    }, n.prototype.thumbnail = function(e, i) {
        var n, o, s, r = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
            a = e.find("img"),
            l = "src",
            c = "",
            d = this._core.settings,
            u = function(t) {
                o = '<div class="owl-video-play-icon"></div>', n = d.lazyLoad ? '<div class="owl-video-tn ' + c + '" ' + l + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(n), e.after(o)
            };
        return e.wrap('<div class="owl-video-wrapper"' + r + "></div>"), this._core.settings.lazyLoad && (l = "data-src", c = "owl-lazy"), a.length ? (u(a.attr(l)), a.remove(), !1) : void("youtube" === i.type ? (s = "http://img.youtube.com/vi/" + i.id + "/hqdefault.jpg", u(s)) : "vimeo" === i.type && t.ajax({
            type: "GET",
            url: "http://vimeo.com/api/v2/video/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(t) {
                s = t[0].thumbnail_large, u(s)
            }
        }))
    }, n.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
    }, n.prototype.play = function(e) {
        this._core.trigger("play", null, "video"), this._playing && this.stop();
        var i, n, o = t(e.target || e.srcElement),
            s = o.closest("." + this._core.settings.itemClass),
            r = this._videos[s.attr("data-video")],
            a = r.width || "100%",
            l = r.height || this._core.$stage.height();
        "youtube" === r.type ? i = '<iframe width="' + a + '" height="' + l + '" src="http://www.youtube.com/embed/' + r.id + "?autoplay=1&v=" + r.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === r.type && (i = '<iframe src="http://player.vimeo.com/video/' + r.id + '?autoplay=1" width="' + a + '" height="' + l + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), s.addClass("owl-video-playing"), this._playing = s, n = t('<div style="height:' + l + "px; width:" + a + 'px" class="owl-video-frame">' + i + "</div>"), o.after(n)
    }, n.prototype.isInFullScreen = function() {
        var n = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
        return n && t(n).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), !(n && this._fullscreen && this._playing) && (this._fullscreen ? (this._fullscreen = !1, !1) : !this._playing || this._core.state.orientation === e.orientation || (this._core.state.orientation = e.orientation, !1))
    }, n.prototype.destroy = function() {
        var t, e;
        this._core.$element.off("click.owl.video");
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Video = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    var o = function(e) {
        this.core = e, this.core.options = t.extend({}, o.Defaults, this.core.options), this.swapping = !0, this.previous = n, this.next = n, this.handlers = {
            "change.owl.carousel": t.proxy(function(t) {
                "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) {
                this.swapping = "translated" == t.type
            }, this),
            "translate.owl.carousel": t.proxy(function() {
                this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    o.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, o.prototype.swap = function() {
        if (1 === this.core.settings.items && this.core.support3d) {
            this.core.speed(0);
            var e, i = t.proxy(this.clear, this),
                n = this.core.$stage.children().eq(this.previous),
                o = this.core.$stage.children().eq(this.next),
                s = this.core.settings.animateIn,
                r = this.core.settings.animateOut;
            this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.css({
                left: e + "px"
            }).addClass("animated owl-animated-out").addClass(r).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i)), s && o.addClass("animated owl-animated-in").addClass(s).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i))
        }
    }, o.prototype.clear = function(e) {
        t(e.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
    }, o.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Animate = o
}(window.Zepto || window.jQuery, window, document),
function(t, e, i) {
    var n = function(e) {
        this.core = e, this.core.options = t.extend({}, n.Defaults, this.core.options), this.handlers = {
            "translated.owl.carousel refreshed.owl.carousel": t.proxy(function() {
                this.autoplay()
            }, this),
            "play.owl.autoplay": t.proxy(function(t, e, i) {
                this.play(e, i)
            }, this),
            "stop.owl.autoplay": t.proxy(function() {
                this.stop()
            }, this),
            "mouseover.owl.autoplay": t.proxy(function() {
                this.core.settings.autoplayHoverPause && this.pause()
            }, this),
            "mouseleave.owl.autoplay": t.proxy(function() {
                this.core.settings.autoplayHoverPause && this.autoplay()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    n.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, n.prototype.autoplay = function() {
        this.core.settings.autoplay && !this.core.state.videoPlay ? (e.clearInterval(this.interval), this.interval = e.setInterval(t.proxy(function() {
            this.play()
        }, this), this.core.settings.autoplayTimeout)) : e.clearInterval(this.interval)
    }, n.prototype.play = function() {
        return i.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void e.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
    }, n.prototype.stop = function() {
        e.clearInterval(this.interval)
    }, n.prototype.pause = function() {
        e.clearInterval(this.interval)
    }, n.prototype.destroy = function() {
        var t, i;
        e.clearInterval(this.interval);
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.autoplay = n
}(window.Zepto || window.jQuery, window, document),
function(t) {
    "use strict";
    var e = function(i) {
        this._core = i, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": t.proxy(function(e) {
                this._core.settings.dotsData && this._templates.push(t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this),
            "add.owl.carousel": t.proxy(function(e) {
                this._core.settings.dotsData && this._templates.splice(e.position, 0, t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this),
            "remove.owl.carousel prepared.owl.carousel": t.proxy(function(t) {
                this._core.settings.dotsData && this._templates.splice(t.position, 1)
            }, this),
            "change.owl.carousel": t.proxy(function(t) {
                if ("position" == t.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                    var e = this._core.current(),
                        i = this._core.maximum(),
                        n = this._core.minimum();
                    t.data = t.property.value > i ? e >= i ? n : i : t.property.value < n ? i : t.property.value
                }
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                "position" == t.property.name && this.draw()
            }, this),
            "refreshed.owl.carousel": t.proxy(function() {
                this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
            }, this)
        }, this._core.options = t.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    e.Defaults = {
        nav: !1,
        navRewind: !0,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotData: !1,
        dotsSpeed: !1,
        dotsContainer: !1,
        controlsClass: "owl-controls"
    }, e.prototype.initialize = function() {
        var e, i, n = this._core.settings;
        n.dotsData || (this._templates = [t("<div>").addClass(n.dotClass).append(t("<span>")).prop("outerHTML")]), n.navContainer && n.dotsContainer || (this._controls.$container = t("<div>").addClass(n.controlsClass).appendTo(this.$element)), this._controls.$indicators = n.dotsContainer ? t(n.dotsContainer) : t("<div>").hide().addClass(n.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", t.proxy(function(e) {
            var i = t(e.target).parent().is(this._controls.$indicators) ? t(e.target).index() : t(e.target).parent().index();
            e.preventDefault(), this.to(i, n.dotsSpeed)
        }, this)), e = n.navContainer ? t(n.navContainer) : t("<div>").addClass(n.navContainerClass).prependTo(this._controls.$container), this._controls.$next = t("<" + n.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(n.navClass[0]).html(n.navText[0]).hide().prependTo(e).on("click", t.proxy(function() {
            this.prev(n.navSpeed)
        }, this)), this._controls.$next.addClass(n.navClass[1]).html(n.navText[1]).hide().appendTo(e).on("click", t.proxy(function() {
            this.next(n.navSpeed)
        }, this));
        for (i in this._overrides) this._core[i] = t.proxy(this[i], this)
    }, e.prototype.destroy = function() {
        var t, e, i, n;
        for (t in this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) this._controls[e].remove();
        for (n in this.overides) this._core[n] = this._overrides[n];
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, e.prototype.update = function() {
        var t, e, i, n = this._core.settings,
            o = this._core.clones().length / 2,
            s = o + this._core.items().length,
            r = n.center || n.autoWidth || n.dotData ? 1 : n.dotsEach || n.items;
        if ("page" !== n.slideBy && (n.slideBy = Math.min(n.slideBy, n.items)), n.dots || "page" == n.slideBy)
            for (this._pages = [], t = o, e = 0, i = 0; s > t; t++)(e >= r || 0 === e) && (this._pages.push({
                start: t - o,
                end: t - o + r - 1
            }), e = 0, ++i), e += this._core.mergers(this._core.relative(t))
    }, e.prototype.draw = function() {
        var e, i, n = "",
            o = this._core.settings,
            s = (this._core.$stage.children(), this._core.relative(this._core.current()));
        if (!o.nav || o.loop || o.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= s), this._controls.$next.toggleClass("disabled", s >= this._core.maximum())), this._controls.$previous.toggle(o.nav), this._controls.$next.toggle(o.nav), o.dots) {
            if (e = this._pages.length - this._controls.$indicators.children().length, o.dotData && 0 !== e) {
                for (i = 0; i < this._controls.$indicators.children().length; i++) n += this._templates[this._core.relative(i)];
                this._controls.$indicators.html(n)
            } else e > 0 ? (n = new Array(e + 1).join(this._templates[0]), this._controls.$indicators.append(n)) : 0 > e && this._controls.$indicators.children().slice(e).remove();
            this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(t.inArray(this.current(), this._pages)).addClass("active")
        }
        this._controls.$indicators.toggle(o.dots)
    }, e.prototype.onTrigger = function(e) {
        var i = this._core.settings;
        e.page = {
            index: t.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: i && (i.center || i.autoWidth || i.dotData ? 1 : i.dotsEach || i.items)
        }
    }, e.prototype.current = function() {
        var e = this._core.relative(this._core.current());
        return t.grep(this._pages, function(t) {
            return t.start <= e && t.end >= e
        }).pop()
    }, e.prototype.getPosition = function(e) {
        var i, n, o = this._core.settings;
        return "page" == o.slideBy ? (i = t.inArray(this.current(), this._pages), n = this._pages.length, e ? ++i : --i, i = this._pages[(i % n + n) % n].start) : (i = this._core.relative(this._core.current()), n = this._core.items().length, e ? i += o.slideBy : i -= o.slideBy), i
    }, e.prototype.next = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
    }, e.prototype.prev = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
    }, e.prototype.to = function(e, i, n) {
        var o;
        n ? t.proxy(this._overrides.to, this._core)(e, i) : (o = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % o + o) % o].start, i))
    }, t.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function(t, e) {
    "use strict";
    var i = function(n) {
        this._core = n, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": t.proxy(function() {
                "URLHash" == this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": t.proxy(function(e) {
                var i = t(e.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                this._hashes[i] = e.content
            }, this)
        }, this._core.options = t.extend({}, i.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function() {
            var t = e.location.hash.substring(1),
                i = this._core.$stage.children(),
                n = this._hashes[t] && i.index(this._hashes[t]) || 0;
            return !!t && void this._core.to(n, !1, !0)
        }, this))
    };
    i.Defaults = {
        URLhashListener: !1
    }, i.prototype.destroy = function() {
        var i, n;
        t(e).off("hashchange.owl.navigation");
        for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Hash = i
}(window.Zepto || window.jQuery, window, document),
function(t) {
    t.fn.equalHeights = function() {
        var e = 0,
            i = t(this);
        return i.each(function() {
            var i = t(this).innerHeight();
            i > e && (e = i)
        }), i.css("height", e)
    }, t("[data-equal]").each(function() {
        var e = t(this),
            i = e.data("equal");
        e.find(i).equalHeights()
    })
}(jQuery);
var today = new Date,
    tomorrow = new Date(today.getTime() + 864e5);
tomorrow = new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 0, 0, 0),
    function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(function(t) {
        "use strict";
        var e = window.Slick || {};
        e = function() {
            function e(e, n) {
                var o, s = this;
                s.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: t(e),
                    appendDots: t(e),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(e, i) {
                        return t('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1)
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
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
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
                    transformsEnabled: !1,
                    unslicked: !1
                }, t.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.focussed = !1, s.interrupted = !1, s.hidden = "hidden", s.paused = !0, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = t(e), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, o = t(e).data("slick") || {}, s.options = t.extend({}, s.defaults, n, o), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, void 0 !== document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = t.proxy(s.autoPlay, s), s.autoPlayClear = t.proxy(s.autoPlayClear, s), s.autoPlayIterator = t.proxy(s.autoPlayIterator, s), s.changeSlide = t.proxy(s.changeSlide, s), s.clickHandler = t.proxy(s.clickHandler, s), s.selectHandler = t.proxy(s.selectHandler, s), s.setPosition = t.proxy(s.setPosition, s), s.swipeHandler = t.proxy(s.swipeHandler, s), s.dragHandler = t.proxy(s.dragHandler, s), s.keyHandler = t.proxy(s.keyHandler, s), s.instanceUid = i++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0)
            }
            var i = 0;
            return e
        }(), e.prototype.activateADA = function() {
            this.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, e.prototype.addSlide = e.prototype.slickAdd = function(e, i, n) {
            var o = this;
            if ("boolean" == typeof i) n = i, i = null;
            else if (i < 0 || i >= o.slideCount) return !1;
            o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? t(e).appendTo(o.$slideTrack) : n ? t(e).insertBefore(o.$slides.eq(i)) : t(e).insertAfter(o.$slides.eq(i)) : n === !0 ? t(e).prependTo(o.$slideTrack) : t(e).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(e, i) {
                t(i).attr("data-slick-index", e)
            }), o.$slidesCache = o.$slides, o.reinit()
        }, e.prototype.animateHeight = function() {
            var t = this;
            if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.animate({
                    height: e
                }, t.options.speed)
            }
        }, e.prototype.animateSlide = function(e, i) {
            var n = {},
                o = this;
            o.animateHeight(), o.options.rtl === !0 && o.options.vertical === !1 && (e = -e), o.transformsEnabled === !1 ? o.options.vertical === !1 ? o.$slideTrack.animate({
                left: e
            }, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
                top: e
            }, o.options.speed, o.options.easing, i) : o.cssTransitions === !1 ? (o.options.rtl === !0 && (o.currentLeft = -o.currentLeft), t({
                animStart: o.currentLeft
            }).animate({
                animStart: e
            }, {
                duration: o.options.speed,
                easing: o.options.easing,
                step: function(t) {
                    t = Math.ceil(t), o.options.vertical === !1 ? (n[o.animType] = "translate(" + t + "px, 0px)", o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + t + "px)", o.$slideTrack.css(n))
                },
                complete: function() {
                    i && i.call()
                }
            })) : (o.applyTransition(), e = Math.ceil(e), o.options.vertical === !1 ? n[o.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[o.animType] = "translate3d(0px," + e + "px, 0px)", o.$slideTrack.css(n), i && setTimeout(function() {
                o.disableTransition(), i.call()
            }, o.options.speed))
        }, e.prototype.getNavTarget = function() {
            var e = this,
                i = e.options.asNavFor;
            return i && null !== i && (i = t(i).not(e.$slider)), i
        }, e.prototype.asNavFor = function(e) {
            var i = this,
                n = i.getNavTarget();
            null !== n && "object" == typeof n && n.each(function() {
                var i = t(this).slick("getSlick");
                i.unslicked || i.slideHandler(e, !0)
            })
        }, e.prototype.applyTransition = function(t) {
            var e = this,
                i = {};
            e.options.fade === !1 ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
        }, e.prototype.autoPlay = function() {
            var t = this;
            t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
        }, e.prototype.autoPlayClear = function() {
            var t = this;
            t.autoPlayTimer && clearInterval(t.autoPlayTimer)
        }, e.prototype.autoPlayIterator = function() {
            var t = this,
                e = t.currentSlide + t.options.slidesToScroll;
            t.paused || t.interrupted || t.focussed || (t.options.infinite === !1 && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 == 0 && (t.direction = 1))), t.slideHandler(e))
        }, e.prototype.buildArrows = function() {
            var e = this;
            e.options.arrows === !0 && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, e.prototype.buildDots = function() {
            var e, i, n = this;
            if (n.options.dots === !0 && n.slideCount > n.options.slidesToShow) {
                for (n.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1) i.append(t("<li />").append(n.options.customPaging.call(this, n, e)));
                n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
            }
        }, e.prototype.buildOut = function() {
            var e = this;
            e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, i) {
                t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
            }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), e.options.centerMode !== !0 && e.options.swipeToSlide !== !0 || (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.options.draggable === !0 && e.$list.addClass("draggable")
        }, e.prototype.buildRows = function() {
            var t, e, i, n, o, s, r, a = this;
            if (n = document.createDocumentFragment(), s = a.$slider.children(), a.options.rows > 1) {
                for (r = a.options.slidesPerRow * a.options.rows, o = Math.ceil(s.length / r), t = 0; t < o; t++) {
                    var l = document.createElement("div");
                    for (e = 0; e < a.options.rows; e++) {
                        var c = document.createElement("div");
                        for (i = 0; i < a.options.slidesPerRow; i++) {
                            var d = t * r + (e * a.options.slidesPerRow + i);
                            s.get(d) && c.appendChild(s.get(d))
                        }
                        l.appendChild(c)
                    }
                    n.appendChild(l)
                }
                a.$slider.empty().append(n), a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, e.prototype.checkResponsive = function(e, i) {
            var n, o, s, r = this,
                a = !1,
                l = r.$slider.width(),
                c = window.innerWidth || t(window).width();
            if ("window" === r.respondTo ? s = c : "slider" === r.respondTo ? s = l : "min" === r.respondTo && (s = Math.min(c, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
                o = null;
                for (n in r.breakpoints) r.breakpoints.hasOwnProperty(n) && (r.originalSettings.mobileFirst === !1 ? s < r.breakpoints[n] && (o = r.breakpoints[n]) : s > r.breakpoints[n] && (o = r.breakpoints[n]));
                null !== o ? null !== r.activeBreakpoint ? (o !== r.activeBreakpoint || i) && (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[o]), e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = o) : (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[o]), e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = o) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e), a = o), e || a === !1 || r.$slider.trigger("breakpoint", [r, a])
            }
        }, e.prototype.changeSlide = function(e, i) {
            var n, o, s, r = this,
                a = t(e.currentTarget);
            switch (a.is("a") && e.preventDefault(), a.is("li") || (a = a.closest("li")), s = r.slideCount % r.options.slidesToScroll != 0, n = s ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
                case "previous":
                    o = 0 === n ? r.options.slidesToScroll : r.options.slidesToShow - n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, i);
                    break;
                case "next":
                    o = 0 === n ? r.options.slidesToScroll : n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, i);
                    break;
                case "index":
                    var l = 0 === e.data.index ? 0 : e.data.index || a.index() * r.options.slidesToScroll;
                    r.slideHandler(r.checkNavigable(l), !1, i), a.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, e.prototype.checkNavigable = function(t) {
            var e, i, n = this;
            if (e = n.getNavigableIndexes(), i = 0, t > e[e.length - 1]) t = e[e.length - 1];
            else
                for (var o in e) {
                    if (t < e[o]) {
                        t = i;
                        break
                    }
                    i = e[o]
                }
            return t
        }, e.prototype.cleanUpEvents = function() {
            var e = this;
            e.options.dots && null !== e.$dots && t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), e.$slider.off("focus.slick blur.slick"), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(),
                e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
        }, e.prototype.cleanUpSlideEvents = function() {
            var e = this;
            e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
        }, e.prototype.cleanUpRows = function() {
            var t, e = this;
            e.options.rows > 1 && (t = e.$slides.children().children(), t.removeAttr("style"), e.$slider.empty().append(t))
        }, e.prototype.clickHandler = function(t) {
            this.shouldClick === !1 && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
        }, e.prototype.destroy = function(e) {
            var i = this;
            i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                t(this).attr("style", t(this).data("originalStyling"))
            }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
        }, e.prototype.disableTransition = function(t) {
            var e = this,
                i = {};
            i[e.transitionType] = "", e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
        }, e.prototype.fadeSlide = function(t, e) {
            var i = this;
            i.cssTransitions === !1 ? (i.$slides.eq(t).css({
                zIndex: i.options.zIndex
            }), i.$slides.eq(t).animate({
                opacity: 1
            }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
                opacity: 1,
                zIndex: i.options.zIndex
            }), e && setTimeout(function() {
                i.disableTransition(t), e.call()
            }, i.options.speed))
        }, e.prototype.fadeSlideOut = function(t) {
            var e = this;
            e.cssTransitions === !1 ? e.$slides.eq(t).animate({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }))
        }, e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
            var e = this;
            null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
        }, e.prototype.focusHandler = function() {
            var e = this;
            e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(i) {
                i.stopImmediatePropagation();
                var n = t(this);
                setTimeout(function() {
                    e.options.pauseOnFocus && (e.focussed = n.is(":focus"), e.autoPlay())
                }, 0)
            })
        }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
            return this.currentSlide
        }, e.prototype.getDotCount = function() {
            var t = this,
                e = 0,
                i = 0,
                n = 0;
            if (t.options.infinite === !0)
                for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else if (t.options.centerMode === !0) n = t.slideCount;
            else if (t.options.asNavFor)
                for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else n = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
            return n - 1
        }, e.prototype.getLeft = function(t) {
            var e, i, n, o = this,
                s = 0;
            return o.slideOffset = 0, i = o.$slides.first().outerHeight(!0), o.options.infinite === !0 ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, s = i * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll != 0 && t + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (t > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (t - o.slideCount)) * o.slideWidth * -1, s = (o.options.slidesToShow - (t - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, s = o.slideCount % o.options.slidesToScroll * i * -1))) : t + o.options.slidesToShow > o.slideCount && (o.slideOffset = (t + o.options.slidesToShow - o.slideCount) * o.slideWidth, s = (t + o.options.slidesToShow - o.slideCount) * i), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, s = 0), o.options.centerMode === !0 && o.options.infinite === !0 ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : o.options.centerMode === !0 && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), e = o.options.vertical === !1 ? t * o.slideWidth * -1 + o.slideOffset : t * i * -1 + s, o.options.variableWidth === !0 && (n = o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow), e = o.options.rtl === !0 ? n[0] ? (o.$slideTrack.width() - n[0].offsetLeft - n.width()) * -1 : 0 : n[0] ? n[0].offsetLeft * -1 : 0, o.options.centerMode === !0 && (n = o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow + 1), e = o.options.rtl === !0 ? n[0] ? (o.$slideTrack.width() - n[0].offsetLeft - n.width()) * -1 : 0 : n[0] ? n[0].offsetLeft * -1 : 0, e += (o.$list.width() - n.outerWidth()) / 2)), e
        }, e.prototype.getOption = e.prototype.slickGetOption = function(t) {
            return this.options[t]
        }, e.prototype.getNavigableIndexes = function() {
            var t, e = this,
                i = 0,
                n = 0,
                o = [];
            for (e.options.infinite === !1 ? t = e.slideCount : (i = e.options.slidesToScroll * -1, n = e.options.slidesToScroll * -1, t = 2 * e.slideCount); i < t;) o.push(i), i = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return o
        }, e.prototype.getSlick = function() {
            return this
        }, e.prototype.getSlideCount = function() {
            var e, i, n = this;
            return i = n.options.centerMode === !0 ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, n.options.swipeToSlide === !0 ? (n.$slideTrack.find(".slick-slide").each(function(o, s) {
                if (s.offsetLeft - i + t(s).outerWidth() / 2 > n.swipeLeft * -1) return e = s, !1
            }), Math.abs(t(e).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
        }, e.prototype.goTo = e.prototype.slickGoTo = function(t, e) {
            this.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(t)
                }
            }, e)
        }, e.prototype.init = function(e) {
            var i = this;
            t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [i]), i.options.accessibility === !0 && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
        }, e.prototype.initADA = function() {
            var e = this;
            e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(i) {
                t(this).attr({
                    role: "option",
                    "aria-describedby": "slick-slide" + e.instanceUid + i
                })
            }), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function(i) {
                t(this).attr({
                    role: "presentation",
                    "aria-selected": "false",
                    "aria-controls": "navigation" + e.instanceUid + i,
                    id: "slick-slide" + e.instanceUid + i
                })
            }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
        }, e.prototype.initArrowEvents = function() {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, t.changeSlide))
        }, e.prototype.initDotEvents = function() {
            var e = this;
            e.options.dots === !0 && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", {
                message: "index"
            }, e.changeSlide), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
        }, e.prototype.initSlideEvents = function() {
            var e = this;
            e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
        }, e.prototype.initializeEvents = function() {
            var e = this;
            e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
        }, e.prototype.initUI = function() {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.show()
        }, e.prototype.keyHandler = function(t) {
            var e = this;
            t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && e.options.accessibility === !0 ? e.changeSlide({
                data: {
                    message: e.options.rtl === !0 ? "next" : "previous"
                }
            }) : 39 === t.keyCode && e.options.accessibility === !0 && e.changeSlide({
                data: {
                    message: e.options.rtl === !0 ? "previous" : "next"
                }
            }))
        }, e.prototype.lazyLoad = function() {
            function e(e) {
                t("img[data-lazy]", e).each(function() {
                    var e = t(this),
                        i = t(this).attr("data-lazy"),
                        n = document.createElement("img");
                    n.onload = function() {
                        e.animate({
                            opacity: 0
                        }, 100, function() {
                            e.attr("src", i).animate({
                                opacity: 1
                            }, 200, function() {
                                e.removeAttr("data-lazy").removeClass("slick-loading")
                            }), r.$slider.trigger("lazyLoaded", [r, e, i])
                        })
                    }, n.onerror = function() {
                        e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, i])
                    }, n.src = i
                })
            }
            var i, n, o, s, r = this;
            r.options.centerMode === !0 ? r.options.infinite === !0 ? (o = r.currentSlide + (r.options.slidesToShow / 2 + 1), s = o + r.options.slidesToShow + 2) : (o = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), s = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide) : (o = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, s = Math.ceil(o + r.options.slidesToShow), r.options.fade === !0 && (o > 0 && o--, s <= r.slideCount && s++)), i = r.$slider.find(".slick-slide").slice(o, s), e(i), r.slideCount <= r.options.slidesToShow ? (n = r.$slider.find(".slick-slide"), e(n)) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? (n = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow), e(n)) : 0 === r.currentSlide && (n = r.$slider.find(".slick-cloned").slice(r.options.slidesToShow * -1), e(n))
        }, e.prototype.loadSlider = function() {
            var t = this;
            t.setPosition(), t.$slideTrack.css({
                opacity: 1
            }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
        }, e.prototype.next = e.prototype.slickNext = function() {
            this.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, e.prototype.orientationChange = function() {
            var t = this;
            t.checkResponsive(), t.setPosition()
        }, e.prototype.pause = e.prototype.slickPause = function() {
            var t = this;
            t.autoPlayClear(), t.paused = !0
        }, e.prototype.play = e.prototype.slickPlay = function() {
            var t = this;
            t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
        }, e.prototype.postSlide = function(t) {
            var e = this;
            e.unslicked || (e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay && e.autoPlay(), e.options.accessibility === !0 && e.initADA())
        }, e.prototype.prev = e.prototype.slickPrev = function() {
            this.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, e.prototype.preventDefault = function(t) {
            t.preventDefault()
        }, e.prototype.progressiveLazyLoad = function(e) {
            e = e || 1;
            var i, n, o, s = this,
                r = t("img[data-lazy]", s.$slider);
            r.length ? (i = r.first(), n = i.attr("data-lazy"), o = document.createElement("img"), o.onload = function() {
                i.attr("src", n).removeAttr("data-lazy").removeClass("slick-loading"), s.options.adaptiveHeight === !0 && s.setPosition(), s.$slider.trigger("lazyLoaded", [s, i, n]), s.progressiveLazyLoad()
            }, o.onerror = function() {
                e < 3 ? setTimeout(function() {
                    s.progressiveLazyLoad(e + 1)
                }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, i, n]), s.progressiveLazyLoad())
            }, o.src = n) : s.$slider.trigger("allImagesLoaded", [s])
        }, e.prototype.refresh = function(e) {
            var i, n, o = this;
            n = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > n && (o.currentSlide = n), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), i = o.currentSlide, o.destroy(!0), t.extend(o, o.initials, {
                currentSlide: i
            }), o.init(), e || o.changeSlide({
                data: {
                    message: "index",
                    index: i
                }
            }, !1)
        }, e.prototype.registerBreakpoints = function() {
            var e, i, n, o = this,
                s = o.options.responsive || null;
            if ("array" === t.type(s) && s.length) {
                o.respondTo = o.options.respondTo || "window";
                for (e in s)
                    if (n = o.breakpoints.length - 1, i = s[e].breakpoint, s.hasOwnProperty(e)) {
                        for (; n >= 0;) o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1), n--;
                        o.breakpoints.push(i), o.breakpointSettings[i] = s[e].settings
                    } o.breakpoints.sort(function(t, e) {
                    return o.options.mobileFirst ? t - e : e - t
                })
            }
        }, e.prototype.reinit = function() {
            var e = this;
            e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
        }, e.prototype.resize = function() {
            var e = this;
            t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
                e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
            }, 50))
        }, e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, i) {
            var n = this;
            if ("boolean" == typeof t ? (e = t, t = e === !0 ? 0 : n.slideCount - 1) : t = e === !0 ? --t : t, n.slideCount < 1 || t < 0 || t > n.slideCount - 1) return !1;
            n.unload(), i === !0 ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, n.reinit()
        }, e.prototype.setCSS = function(t) {
            var e, i, n = this,
                o = {};
            n.options.rtl === !0 && (t = -t), e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px", o[n.positionProp] = t, n.transformsEnabled === !1 ? n.$slideTrack.css(o) : (o = {}, n.cssTransitions === !1 ? (o[n.animType] = "translate(" + e + ", " + i + ")", n.$slideTrack.css(o)) : (o[n.animType] = "translate3d(" + e + ", " + i + ", 0px)", n.$slideTrack.css(o)))
        }, e.prototype.setDimensions = function() {
            var t = this;
            t.options.vertical === !1 ? t.options.centerMode === !0 && t.$list.css({
                padding: "0px " + t.options.centerPadding
            }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), t.options.centerMode === !0 && t.$list.css({
                padding: t.options.centerPadding + " 0px"
            })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), t.options.vertical === !1 && t.options.variableWidth === !1 ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : t.options.variableWidth === !0 ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
            var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
            t.options.variableWidth === !1 && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
        }, e.prototype.setFade = function() {
            var e, i = this;
            i.$slides.each(function(n, o) {
                e = i.slideWidth * n * -1, i.options.rtl === !0 ? t(o).css({
                    position: "relative",
                    right: e,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                }) : t(o).css({
                    position: "relative",
                    left: e,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                })
            }), i.$slides.eq(i.currentSlide).css({
                zIndex: i.options.zIndex - 1,
                opacity: 1
            })
        }, e.prototype.setHeight = function() {
            var t = this;
            if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.css("height", e)
            }
        }, e.prototype.setOption = e.prototype.slickSetOption = function() {
            var e, i, n, o, s, r = this,
                a = !1;
            if ("object" === t.type(arguments[0]) ? (n = arguments[0], a = arguments[1], s = "multiple") : "string" === t.type(arguments[0]) && (n = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? s = "responsive" : void 0 !== arguments[1] && (s = "single")), "single" === s) r.options[n] = o;
            else if ("multiple" === s) t.each(n, function(t, e) {
                r.options[t] = e
            });
            else if ("responsive" === s)
                for (i in o)
                    if ("array" !== t.type(r.options.responsive)) r.options.responsive = [o[i]];
                    else {
                        for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === o[i].breakpoint && r.options.responsive.splice(e, 1), e--;
                        r.options.responsive.push(o[i])
                    } a && (r.unload(), r.reinit())
        }, e.prototype.setPosition = function() {
            var t = this;
            t.setDimensions(), t.setHeight(), t.options.fade === !1 ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
        }, e.prototype.setProps = function() {
            var t = this,
                e = document.body.style;
            t.positionProp = t.options.vertical === !0 ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || t.options.useCSS === !0 && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && t.animType !== !1 && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && t.animType !== !1
        }, e.prototype.setSlideClasses = function(t) {
            var e, i, n, o, s = this;
            i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(t).addClass("slick-current"), s.options.centerMode === !0 ? (e = Math.floor(s.options.slidesToShow / 2), s.options.infinite === !0 && (t >= e && t <= s.slideCount - 1 - e ? s.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = s.options.slidesToShow + t, i.slice(n - e + 1, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : t === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(t).addClass("slick-center")) : t >= 0 && t <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(t, t + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = s.slideCount % s.options.slidesToShow, n = s.options.infinite === !0 ? s.options.slidesToShow + t : t, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - t < s.options.slidesToShow ? i.slice(n - (s.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === s.options.lazyLoad && s.lazyLoad()
        }, e.prototype.setupInfinite = function() {
            var e, i, n, o = this;
            if (o.options.fade === !0 && (o.options.centerMode = !1), o.options.infinite === !0 && o.options.fade === !1 && (i = null, o.slideCount > o.options.slidesToShow)) {
                for (n = o.options.centerMode === !0 ? o.options.slidesToShow + 1 : o.options.slidesToShow, e = o.slideCount; e > o.slideCount - n; e -= 1) i = e - 1, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
                for (e = 0; e < n; e += 1) i = e, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
                o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    t(this).attr("id", "")
                })
            }
        }, e.prototype.interrupt = function(t) {
            var e = this;
            t || e.autoPlay(), e.interrupted = t
        }, e.prototype.selectHandler = function(e) {
            var i = this,
                n = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
                o = parseInt(n.attr("data-slick-index"));
            if (o || (o = 0), i.slideCount <= i.options.slidesToShow) return i.setSlideClasses(o), void i.asNavFor(o);
            i.slideHandler(o)
        }, e.prototype.slideHandler = function(t, e, i) {
            var n, o, s, r, a, l = null,
                c = this;
            if (e = e || !1, (c.animating !== !0 || c.options.waitForAnimate !== !0) && !(c.options.fade === !0 && c.currentSlide === t || c.slideCount <= c.options.slidesToShow)) {
                if (e === !1 && c.asNavFor(t), n = t, l = c.getLeft(n), r = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft, c.options.infinite === !1 && c.options.centerMode === !1 && (t < 0 || t > c.getDotCount() * c.options.slidesToScroll)) return void(c.options.fade === !1 && (n = c.currentSlide, i !== !0 ? c.animateSlide(r, function() {
                    c.postSlide(n)
                }) : c.postSlide(n)));
                if (c.options.infinite === !1 && c.options.centerMode === !0 && (t < 0 || t > c.slideCount - c.options.slidesToScroll)) return void(c.options.fade === !1 && (n = c.currentSlide, i !== !0 ? c.animateSlide(r, function() {
                    c.postSlide(n)
                }) : c.postSlide(n)));
                if (c.options.autoplay && clearInterval(c.autoPlayTimer), o = n < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), s = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = c.getNavTarget(), a = a.slick("getSlick"), a.slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide)), c.updateDots(), c.updateArrows(), c.options.fade === !0) return i !== !0 ? (c.fadeSlideOut(s), c.fadeSlide(o, function() {
                    c.postSlide(o)
                })) : c.postSlide(o), void c.animateHeight();
                i !== !0 ? c.animateSlide(l, function() {
                    c.postSlide(o)
                }) : c.postSlide(o)
            }
        }, e.prototype.startLoad = function() {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
        }, e.prototype.swipeDirection = function() {
            var t, e, i, n, o = this;
            return t = o.touchObject.startX - o.touchObject.curX, e = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(e, t), n = Math.round(180 * i / Math.PI), n < 0 && (n = 360 - Math.abs(n)), n <= 45 && n >= 0 ? o.options.rtl === !1 ? "left" : "right" : n <= 360 && n >= 315 ? o.options.rtl === !1 ? "left" : "right" : n >= 135 && n <= 225 ? o.options.rtl === !1 ? "right" : "left" : o.options.verticalSwiping === !0 ? n >= 35 && n <= 135 ? "down" : "up" : "vertical"
        }, e.prototype.swipeEnd = function(t) {
            var e, i, n = this;
            if (n.dragging = !1, n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
            if (n.touchObject.edgeHit === !0 && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
                switch (i = n.swipeDirection()) {
                    case "left":
                    case "down":
                        e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
                }
                "vertical" != i && (n.slideHandler(e), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
            } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
        }, e.prototype.swipeHandler = function(t) {
            var e = this;
            if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && t.type.indexOf("mouse") !== -1)) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
                case "start":
                    e.swipeStart(t);
                    break;
                case "move":
                    e.swipeMove(t);
                    break;
                case "end":
                    e.swipeEnd(t)
            }
        }, e.prototype.swipeMove = function(t) {
            var e, i, n, o, s, r = this;
            return s = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!r.dragging || s && 1 !== s.length) && (e = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== s ? s[0].pageX : t.clientX, r.touchObject.curY = void 0 !== s ? s[0].pageY : t.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), r.options.verticalSwiping === !0 && (r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2)))), "vertical" !== (i = r.swipeDirection()) ? (void 0 !== t.originalEvent && r.touchObject.swipeLength > 4 && t.preventDefault(), o = (r.options.rtl === !1 ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), r.options.verticalSwiping === !0 && (o = r.touchObject.curY > r.touchObject.startY ? 1 : -1), n = r.touchObject.swipeLength, r.touchObject.edgeHit = !1, r.options.infinite === !1 && (0 === r.currentSlide && "right" === i || r.currentSlide >= r.getDotCount() && "left" === i) && (n = r.touchObject.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), r.options.vertical === !1 ? r.swipeLeft = e + n * o : r.swipeLeft = e + n * (r.$list.height() / r.listWidth) * o, r.options.verticalSwiping === !0 && (r.swipeLeft = e + n * o), r.options.fade !== !0 && r.options.touchMove !== !1 && (r.animating === !0 ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft))) : void 0)
        }, e.prototype.swipeStart = function(t) {
            var e, i = this;
            if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return i.touchObject = {}, !1;
            void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, i.dragging = !0
        }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
            var t = this;
            null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
        }, e.prototype.unload = function() {
            var e = this;
            t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, e.prototype.unslick = function(t) {
            var e = this;
            e.$slider.trigger("unslick", [e, t]), e.destroy()
        }, e.prototype.updateArrows = function() {
            var t = this;
            Math.floor(t.options.slidesToShow / 2), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && t.options.centerMode === !1 ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && t.options.centerMode === !0 && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, e.prototype.updateDots = function() {
            var t = this;
            null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
        }, e.prototype.visibility = function() {
            var t = this;
            t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
        }, t.fn.slick = function() {
            var t, i, n = this,
                o = arguments[0],
                s = Array.prototype.slice.call(arguments, 1),
                r = n.length;
            for (t = 0; t < r; t++)
                if ("object" == typeof o || void 0 === o ? n[t].slick = new e(n[t], o) : i = n[t].slick[o].apply(n[t].slick, s), void 0 !== i) return i;
            return n
        }
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
    }("undefined" != typeof window ? window : this, function() {
        function t() {}
        var e = t.prototype;
        return e.on = function(t, e) {
            if (t && e) {
                var i = this._events = this._events || {},
                    n = i[t] = i[t] || [];
                return -1 == n.indexOf(e) && n.push(e), this
            }
        }, e.once = function(t, e) {
            if (t && e) {
                this.on(t, e);
                var i = this._onceEvents = this._onceEvents || {};
                return (i[t] = i[t] || {})[e] = !0, this
            }
        }, e.off = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = i.indexOf(e);
                return -1 != n && i.splice(n, 1), this
            }
        }, e.emitEvent = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = 0,
                    o = i[n];
                e = e || [];
                for (var s = this._onceEvents && this._onceEvents[t]; o;) {
                    var r = s && s[o];
                    r && (this.off(t, o), delete s[o]), o.apply(this, e), n += r ? 0 : 1, o = i[n]
                }
                return this
            }
        }, t
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
    }(window, function(t, e) {
        function i(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function n(t) {
            var e = [];
            if (Array.isArray(t)) e = t;
            else if ("number" == typeof t.length)
                for (var i = 0; i < t.length; i++) e.push(t[i]);
            else e.push(t);
            return e
        }

        function o(t, e, s) {
            return this instanceof o ? ("string" == typeof t && (t = document.querySelectorAll(t)), this.elements = n(t), this.options = i({}, this.options), "function" == typeof e ? s = e : i(this.options, e), s && this.on("always", s), this.getImages(), a && (this.jqDeferred = new a.Deferred), void setTimeout(function() {
                this.check()
            }.bind(this))) : new o(t, e, s)
        }

        function s(t) {
            this.img = t
        }

        function r(t, e) {
            this.url = t, this.element = e, this.img = new Image
        }
        var a = t.jQuery,
            l = t.console;
        o.prototype = Object.create(e.prototype), o.prototype.options = {}, o.prototype.getImages = function() {
            this.images = [], this.elements.forEach(this.addElementImages, this)
        }, o.prototype.addElementImages = function(t) {
            "IMG" == t.nodeName && this.addImage(t), this.options.background === !0 && this.addElementBackgroundImages(t);
            var e = t.nodeType;
            if (e && c[e]) {
                for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                    var o = i[n];
                    this.addImage(o)
                }
                if ("string" == typeof this.options.background) {
                    var s = t.querySelectorAll(this.options.background);
                    for (n = 0; n < s.length; n++) {
                        var r = s[n];
                        this.addElementBackgroundImages(r)
                    }
                }
            }
        };
        var c = {
            1: !0,
            9: !0,
            11: !0
        };
        return o.prototype.addElementBackgroundImages = function(t) {
            var e = getComputedStyle(t);
            if (e)
                for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
                    var o = n && n[2];
                    o && this.addBackground(o, t), n = i.exec(e.backgroundImage)
                }
        }, o.prototype.addImage = function(t) {
            var e = new s(t);
            this.images.push(e)
        }, o.prototype.addBackground = function(t, e) {
            var i = new r(t, e);
            this.images.push(i)
        }, o.prototype.check = function() {
            function t(t, i, n) {
                setTimeout(function() {
                    e.progress(t, i, n)
                })
            }
            var e = this;
            return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(e) {
                e.once("progress", t), e.check()
            }) : void this.complete()
        }, o.prototype.progress = function(t, e, i) {
            this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && l && l.log("progress: " + i, t, e)
        }, o.prototype.complete = function() {
            var t = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                var e = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[e](this)
            }
        }, s.prototype = Object.create(e.prototype), s.prototype.check = function() {
            return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
        }, s.prototype.getIsImageComplete = function() {
            return this.img.complete && void 0 !== this.img.naturalWidth
        }, s.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
        }, s.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, s.prototype.onload = function() {
            this.confirm(!0, "onload"), this.unbindEvents()
        }, s.prototype.onerror = function() {
            this.confirm(!1, "onerror"), this.unbindEvents()
        }, s.prototype.unbindEvents = function() {
            this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, r.prototype = Object.create(s.prototype), r.prototype.check = function() {
            this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
        }, r.prototype.unbindEvents = function() {
            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, r.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
        }, o.makeJQueryPlugin = function(e) {
            (e = e || t.jQuery) && (a = e, a.fn.imagesLoaded = function(t, e) {
                return new o(this, t, e).jqDeferred.promise(a(this))
            })
        }, o.makeJQueryPlugin(), o
    }),
    function(t) {
        t.fn.imagefill = function(e) {
            function i() {
                r = 0, a = 0, o.each(function() {
                    s = t(this).find(c.target).width() / t(this).find(c.target).height();
                    var e = t(this).outerWidth(),
                        i = t(this).outerHeight();
                    r += t(this).outerHeight(), a += t(this).outerWidth(), e / i < s ? t(this).find(c.target).css({
                        width: "auto",
                        height: i,
                        top: 0,
                        left: -(i * s - e) / 2
                    }) : t(this).find(c.target).css({
                        width: e,
                        height: "auto",
                        top: -(e / s - i) / 2,
                        left: 0
                    })
                })
            }

            function n() {
                var e = 0,
                    s = 0;
                o.each(function() {
                    s += t(this).outerHeight(), e += t(this).outerWidth()
                }), r === s && a === e || i(), setTimeout(n, c.throttle)
            }
            var o = this,
                s = 1,
                r = 0,
                a = 0,
                l = {
                    runOnce: !1,
                    target: "img",
                    throttle: 200
                },
                c = t.extend({}, l, e),
                d = o.find(c.target).addClass("loading").css({
                    position: "absolute"
                }),
                u = o.css("position");
            return o.css({
                overflow: "hidden",
                position: "static" === u ? "relative" : u
            }), o.each(function() {
                r += t(this).outerHeight(), a += t(this).outerWidth()
            }), o.imagesLoaded().done(function(t) {
                s = d.width() / d.height(), d.removeClass("loading"), i(), c.runOnce || n()
            }), this
        }
    }(jQuery);