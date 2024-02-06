!
function(t, e) {
	if ("object" == typeof exports && "object" == typeof module) module.exports = e();
	else if ("function" == typeof define && define.amd) define([], e);
	else {
		var i = e();
		for (var n in i)("object" == typeof exports ? exports: t)[n] = i[n]
	}
} (window,
function() {
	return f = [function(t, e, i) {
		var n = i(36);
		t.exports = function(t, e, i) {
			return e in t ? n(t, e, {
				value: i,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = i,
			t
		}
	},
	function(t, e, i) {
		"use strict";
		var n = i(83);
		e.a = {
			ipad: "pv-video-player-ipad",
			wrap: "pv-video-player",
			videoWrap: "pv-video-wrap",
			outside: "pv-control-outside",
			video: "pv-video",
			fullClass: "pv-full-wrap",
			selectMenu: "pv-setting-select-menu",
			selectMenuWrap: "pv-select-Menu-Wrap",
			paused: "pv-paused",
			pip: "pv-pip-pc",
			danmu: {
				defaultClass: "pv-danmu-btn",
				on: "pv-icon-btn-Bullet-on",
				off: "pv-icon-btn-Bullet-off"
			},
			cover: {
				play: "pv-icon-btn-play",
				defaultClass: "pv-cover",
				replay: "pv-cover-btn-replay",
				customIcon: "pv-cover-btn-custom-icon"
			},
			playpause: {
				defaultClass: "pv-playpause",
				play: "pv-icon-btn-play",
				pause: "pv-icon-pause"
			},
			time: {
				current: "pv-time-current",
				duration: "pv-time-duration"
			},
			volume: {
				defaultClass: "pv-volumebtn",
				on: "pv-icon-volumeon",
				off: "pv-icon-volumenone",
				slider: "pv-volume-slider",
				touch: "pv-volume-touch",
				rail: "pv-volume-rail",
				current: "pv-volume-current"
			},
			quality: {
				qualityBtn: "pv-quality-btn",
				select: "pv-quality-select"
			},
			rate: {
				rateBtn: "pv-rate-btn",
				select: "pv-rate-select",
				wrap: "pv-rate-wrap"
			},
			fullscreen: {
				defaultClass: "pv-fullscreen",
				full: "pv-icon-fullscreen",
				exit: "pv-icon-exitfullscreen",
				tip: "pv-fullscreen-tip"
			},
			fullscreenPage: {
				defaultClass: "pv-fullscreen-page",
				full: "pv-icon-btn-webFullScreen",
				exit: "pv-icon-btn-exitWebFullScreen",
				tip: "pv-fullscreen-page-tip"
			},
			progress: {
				touch: "pv-progress-touch",
				buffer: "pv-progress-buffer",
				current: "pv-progress-current-bg",
				hover: "pv-progress-hover",
				touchTime: "pv-progress-touch-time",
				point: "pv-progress-key"
			},
			setting: {
				btn: "pv-icon-settings",
				flash: "pv-flashBtn",
				menu: "pv-setting-menu"
			},
			flash: {
				wrap: "pv-flash-wrap",
				fix: "pv-flash-fix"
			},
			ad: {
				wrap: "pv-as-layout",
				video: "pv-as-video",
				time: "pv-as-time",
				volume: "pv-as-volome",
				img: "pv-as-img",
				url: "pv-as-url",
				imgClose: "pv-as-pause-close",
				skip: "pv-as-time-skip"
			},
			hide: "pv-hide",
			active: "pv-active",
			smallHide: "pv-small-hide",
			xsmallHide: "pv-xsmall-hide",
			xxsmallHide: "pv-xxsmall-hide",
			hideButton: "pv-hide-button",
			hideButton2: "pv-hide-button-2",
			hideButton3: "pv-hide-button-3",
			btnRadius: "pv-btn-radius",
			teaser: "pv-teaser-layout",
			switchPlayer: "pv-switch-player",
			logo: {
				leftTop: "pv-logo-left-top",
				rightTop: "pv-logo-right-top",
				leftDown: "pv-logo-left-down",
				rightDown: "pv-logo-right-down",
				offset: "pv-logo-offset",
				max: "pv-logo-max"
			},
			stream: {
				select: "pv-stream-select",
				hide: "pv-stream-hide",
				audio: "pv-currentmode-audio",
				btn: "pv-stream-btn"
			},
			subtitle: {
				select: "pv-subtitle-select",
				hide: "pv-subtitle-hide",
				btn: "pv-subtitle-btn"
			},
			line: {
				select: "pv-line-select",
				hide: "pv-line-hide",
				btn: "pv-line-btn"
			},
			svg: n.a
		}
	},
	function(t, e, i) {
		var r = i(36);
		function n(t, e) {
			for (var i = 0; i < e.length; i++) {
				var n = e[i];
				n.enumerable = n.enumerable || !1,
				n.configurable = !0,
				"value" in n && (n.writable = !0),
				r(t, n.key, n)
			}
		}
		t.exports = function(t, e, i) {
			return e && n(t.prototype, e),
			i && n(t, i),
			t
		}
	},
	function(t, e, i) {
		"use strict";
		i.d(e, "a",
		function() {
			return s
		});
		var n = i(6),
		M = i.n(n),
		r = i(14),
		P = i.n(r),
		a = i(29),
		O = i.n(a),
		o = i(11),
		B = i.n(o),
		s = function() {
			function s(t, e) {
				for (var i = I(e), n = B()(t), r = n.length, a = 0; a < r; a++) for (var o = n[a], s = t[o], l = s.length, c = 0; c < l; c++) i.on(o, s[c])
			}
			function r(e, i, n) {
				return function(t) {
					I(t.target).closest(i, n).size() && e.apply(t.target, arguments)
				}
			}
			function u(t, e) {
				if (! (1 < t.nodeType)) { (o = p(t)) && s(o, e);
					for (var i, n = S("*", t), r = n.length, a = 0; a < r; a++) {
						var o; (o = p(n[a])) && (i = i || S("*", e), s(o, i[a]))
					}
				}
			}
			function i(e, i, n, r, a) {
				var o = [],
				s = this;
				return this.each(function() {
					for (var t = e ? this.parentElement: this; t && (!a || a != t) && (r && !s.is(r, t) || (o.push(t), !n)) && !i;) t = t.parentElement
				}),
				I(m(o))
			}
			function l(t) {
				return _(t)[0]
			}
			function a(t, i) {
				return B()(p(t)).filter(function(e) {
					return _(i).every(function(t) {
						return v(t, _(e))
					})
				})
			}
			function e(t, e, i) {
				if (null == i) {
					var n = t.get(0);
					if (!n || 1 < n.nodeType && 9 != n.nodeType) return;
					var r = e[0].toUpperCase() + e.substring(1);
					return n == document ? Math.max(n.body["scroll" + r] || 0, n.body["offset" + r] || 0, E["scroll" + r] || 0, E["offset" + r] || 0) : n == window ? window["inner" + r] : n.getBoundingClientRect()[e]
				}
				var a = "function" == typeof i,
				o = a ? "": f(e, i);
				return t.each(function(t) {
					this == document || this == window || 1 < this.nodeType || (a && (o = f(e, i.call(this, t, I(this)[e]()))), this.style[e] = o)
				})
			}
			function d(a, t) {
				var e = t.length,
				i = t;
				if (1 < e && -1 < a.indexOf("after")) {
					i = [];
					for (var n = e; n--;) i.push(t[n])
				}
				for (n = 0; n < e; n++) {
					var r = i[n];
					if ("string" == typeof r || "number" == typeof r) this.each(function() {
						this.insertAdjacentHTML(a, r)
					});
					else {
						if ("function" != typeof r) {
							var o = r instanceof D,
							s = [],
							l = o ? r.get() : O()(r) ? x(r, !0, !0) : r.nodeType ? [r] : C(r),
							c = l.length;
							if (this.each(function(t) {
								for (var e = document.createDocumentFragment(), i = 0; i < c; i++) {
									var n, r = l[i];
									t ? (n = r.cloneNode(!0), u(r, n)) : n = r,
									e.appendChild(n),
									s.push(n)
								}
								h[a].call(this, e)
							}), o && (r.dom = s, r.length = s.length), n < e - 1) continue;
							return s
						}
						this.each(function(t) {
							var e = r.call(this, t, this.innerHTML);
							d.call(I(this), a, [e])
						})
					}
				}
			}
			function c(t) {
				return /\./.test(t)
			}
			function n(a, o, s) {
				return null == o ? "add" == a ? this: this.removeAttr("class") : ("string" == typeof o && (l = !0, c = o.trim().split(" "), u = c.length), this.each(function(t, e) {
					if (! (1 < this.nodeType)) {
						if (!l) {
							var i = o.call(e, t, e.className);
							if (!i) return;
							c = i.trim().split(" "),
							u = c.length
						}
						for (var n = 0; n < u; n++) {
							var r = c[n];
							r && (null == s ? e.classList[a](r) : e.classList.toggle(r, s))
						}
					}
				}));
				var l, c, u
			}
			var o, f = (o = ["animation-iteration-count", "column-count", "flex-grow", "flex-shrink", "font-weight", "line-height", "opacity", "order", "orphans", "widows", "z-index"],
			function(t, e) {
				if (v(t, o)) return e;
				var i = "string" == typeof e ? e: e.toString();
				return e && !/\D/.test(i) && (i += "px"),
				i
			}),
			h = {
				afterbegin: function(t) {
					this.insertBefore(t, this.firstChild)
				},
				afterend: function(t) {
					var e = this.parentElement;
					e && e.insertBefore(t, this.nextSibling)
				},
				beforebegin: function(t) {
					var e = this.parentElement;
					e && e.insertBefore(t, this)
				},
				beforeend: function(t) {
					this.appendChild(t)
				}
			},
			p = function(t) {
				return t.sprintEventListeners
			},
			v = function(t, e) {
				for (var i = e.length; i--;) if (e[i] === t) return ! 0;
				return ! 1
			},
			g = function() {
				for (var t = ["mozMatchesSelector", "webkitMatchesSelector", "msMatchesSelector", "matches"], e = t.length; e--;) {
					var i = t[e];
					if (Element.prototype[i]) return i
				}
			} (),
			m = function(t) {
				for (var e = [], i = 0, n = t.length, r = 0; r < n; r++) {
					for (var a = t[r], o = !1, s = 0; s < i; s++) if (a === e[s]) {
						o = !0;
						break
					}
					o || (e[i++] = a)
				}
				return e
			},
			A = function(n, r) {
				return function(t) {
					var e, i;
					p(n)[t].forEach(y(n, t, r)),
					p(n)[t] = (e = p(n)[t], i = r, e.filter(function(t) {
						return i && i !== t
					}))
				}
			};
			function y(r, a, o) {
				return function(t) {
					var e, i, n;
					o && o !== t || (r.removeEventListener(a, t), c(a) && (e = r, i = a, n = t, B()(p(e)).filter(function(t) {
						return l(i) === l(t)
					}).map(function(t) {
						return p(e)[t]
					}).reduce(function(t, e) {
						return t.concat(e)
					}).filter(function(t) {
						return t === n
					}).length < 2) && r.removeEventListener(l(a), t))
				}
			}
			function b(e, t, i, n) {
				var r = [],
				a = t + "ElementSibling";
				return e.each(function() {
					for (var t = this; (t = t[a]) && (!n || !e.is(n, t));) i && !e.is(i, t) || r.push(t)
				}),
				I(m(r))
			}
			function w(e, t, i) {
				var n = t + "ElementSibling";
				return e.map(function() {
					var t = this[n];
					if (t && (!i || e.is(i, t))) return t
				},
				!1)
			}
			var k, E = document.documentElement,
			x = function(t, e, i) {
				for (var n = t.length,
				r = n; r--;) if (!t[r] && 0 !== t[r] || e && t[r] instanceof D || i && ("string" == typeof t[r] || "number" == typeof t[r])) {
					for (var a = [], o = 0; o < n; o++) {
						var s = t[o];
						if (s || 0 === s) if (e && s instanceof D) for (var l = 0; l < s.length; l++) a.push(s.get(l));
						else ! i || "string" != typeof s && "number" != typeof s ? a.push(s) : a.push(document.createTextNode(s))
					}
					return a
				}
				return t
			},
			T = function(t, e, i) {
				if (!k) {
					var n = E.scrollTop;
					E.scrollTop = n + 1;
					var r = E.scrollTop;
					E.scrollTop = n,
					k = n < r ? E: document.body
				}
				if (null != i) return t.each(function() {
					var t = this;
					t != window && t != document || (t = k),
					t[e] = i
				});
				var a = t.get(0);
				return a ? (a != window && a != document || (a = k), a[e]) : void 0
			},
			S = function(t, e) {
				if (e = e || document, /^[\#.]?[\w-]+$/.test(t)) {
					var i = t[0];
					if ("." == i) return C(e.getElementsByClassName(t.slice(1)));
					if ("#" != i) return "body" == t ? [document.body] : C(e.getElementsByTagName(t));
					var n = e.getElementById(t.slice(1));
					return n ? [n] : []
				}
				return C(e.querySelectorAll(t))
			},
			_ = function(t) {
				return x(t.split("."))
			},
			C = function(t) {
				for (var e = [], i = t.length; i--;) e[i] = t[i];
				return e
			},
			L = function(e, i) {
				return "function" == typeof e ? this.each(function(t) {
					I(this)["inner" == i ? "wrapInner": "wrap"](e.call(this, t))
				}) : "all" == i ? t.call(this, e, i) : this.each(function() {
					t.call(this, e, i)
				}),
				this
			};
			function t(t, e) {
				var i = I(t).clone(!0).get(0),
				n = i;
				if (i && !(1 < this.nodeType)) {
					for (; n.firstChild;) n = n.firstChild;
					if ("inner" == e) {
						for (; this.firstChild;) n.appendChild(this.firstChild);
						this.appendChild(i)
					} else {
						var r = "all" == e ? this.get(0) : this,
						a = r.parentNode,
						o = r.nextSibling;
						"all" == e ? this.each(function() {
							n.appendChild(this)
						}) : n.appendChild(r),
						a.insertBefore(i, o)
					}
				}
			}
			var R = {
				legend: {
					intro: "<fieldset>",
					outro: "</fieldset>"
				},
				area: {
					intro: "<map>",
					outro: "</map>"
				},
				param: {
					intro: "<object>",
					outro: "</object>"
				},
				thead: {
					intro: "<table>",
					outro: "</table>"
				},
				tr: {
					intro: "<table><tbody>",
					outro: "</tbody></table>"
				},
				col: {
					intro: "<table><tbody></tbody><colgroup>",
					outro: "</colgroup></table>"
				},
				td: {
					intro: "<table><tbody><tr>",
					outro: "</tr></tbody></table>"
				}
			}; ["tbody", "tfoot", "colgroup", "caption"].forEach(function(t) {
				R[t] = R.thead
			}),
			R.th = R.td;
			var D = function t(e, i) {
				if ("string" == typeof e)"<" == e[0] ? this.dom = [function(t) {
					var e = document.createElement("div"),
					i = /[\w:-]+/.exec(t)[0],
					n = R[i],
					r = t.trim();
					n && (r = n.intro + r + n.outro),
					e.insertAdjacentHTML("afterbegin", r);
					var a = e.lastChild;
					if (n) for (var o = n.outro.match(/</g).length; o--;) a = a.lastChild;
					return e.textContent = "",
					a
				} (e)] : this.dom = i && i instanceof t ? i.find(e).get() : S(e, i);
				else if (O()(e)) this.dom = x(e);
				else if (e instanceof NodeList || e instanceof HTMLCollection) this.dom = C(e);
				else {
					if (e instanceof t) return e;
					if ("function" == typeof e) return this.ready(e);
					this.dom = e ? [e] : []
				}
				this.length = this.dom.length
			};
			D.prototype = {
				add: function(t) {
					for (var e = this.get(), i = I(t), n = i.get(), r = 0; r < i.length; r++) e.push(n[r]);
					return I(m(e))
				},
				addClass: function(t) {
					return n.call(this, "add", t)
				},
				after: function() {
					return d.call(this, "afterend", arguments),
					this
				},
				append: function() {
					return d.call(this, "beforeend", arguments),
					this
				},
				appendTo: function(t) {
					return I(d.call(I(t), "beforeend", [this]))
				},
				attr: function(i, e) {
					var n = "function" == typeof e;
					if ("string" == typeof e || "number" == typeof e || n) return this.each(function(t) {
						1 < this.nodeType || this.setAttribute(i, n ? e.call(this, t, this.getAttribute(i)) : e)
					});
					if ("object" == P()(i)) {
						var r = B()(i),
						a = r.length;
						return this.each(function() {
							if (! (1 < this.nodeType)) for (var t = 0; t < a; t++) {
								var e = r[t];
								this.setAttribute(e, i[e])
							}
						})
					}
					var t = this.get(0);
					if (t && !(1 < t.nodeType)) {
						var o = t.getAttribute(i);
						if (null != o) return o || i
					}
				},
				before: function() {
					return d.call(this, "beforebegin", arguments),
					this
				},
				children: function(r) {
					var a = [],
					o = this;
					return this.each(function() {
						if (! (1 < this.nodeType)) for (var t = this.children,
						e = t.length,
						i = 0; i < e; i++) {
							var n = t[i];
							r && !o.is(r, n) || a.push(n)
						}
					}),
					I(a)
				},
				clone: function(e) {
					return this.map(function() {
						if (this) {
							var t = this.cloneNode(!0);
							return e && u(this, t),
							t
						}
					},
					!1)
				},
				closest: function(t, e) {
					return i.call(this, !1, !1, !0, t, e)
				},
				css: function(i, n) {
					var t = P()(n),
					e = "string" == t;
					if (e || "number" == t) {
						var r = e && /=/.test(n);
						if (r) var a = M()(n[0] + n.slice(2));
						return this.each(function() {
							if (! (1 < this.nodeType)) {
								if (r) var t = M()(getComputedStyle(this).getPropertyValue(i)) + a;
								this.style[i] = f(i, r ? t: n)
							}
						})
					}
					if ("function" == t) return this.each(function(t) {
						if (! (1 < this.nodeType)) {
							var e = getComputedStyle(this).getPropertyValue(i);
							this.style[i] = n.call(this, t, e)
						}
					});
					if ("string" == typeof i) {
						if (! (o = this.get(0)) || 1 < o.nodeType) return;
						return getComputedStyle(o).getPropertyValue(i)
					}
					if (O()(i)) {
						var o;
						if (! (o = this.get(0)) || 1 < o.nodeType) return;
						for (var s = {},
						l = getComputedStyle(o), c = i.length, u = 0; u < c; u++) {
							var d = i[u];
							s[d] = l.getPropertyValue(d)
						}
						return s
					}
					var h = B()(i),
					p = h.length;
					return this.each(function() {
						if (! (1 < this.nodeType)) for (var t = 0; t < p; t++) {
							var e = h[t];
							this.style[e] = f(e, i[e])
						}
					})
				},
				detach: function() {
					return this.map(function() {
						var t = this.parentElement;
						if (t) return t.removeChild(this),
						this
					},
					!1)
				},
				each: function(t) {
					for (var e = this.dom,
					i = this.length,
					n = 0; n < i; n++) {
						var r = e[n];
						t.call(r, n, r)
					}
					return this
				},
				empty: function() {
					return this.each(function() {
						this.innerHTML = ""
					})
				},
				eq: function(t) {
					return I(this.get(t))
				},
				filter: function(e) {
					var i = "function" == typeof e,
					n = this;
					return this.map(function(t) {
						if (! (1 < this.nodeType || !i && !n.is(e, this) || i && !e.call(this, t, this))) return this
					},
					!1)
				},
				find: function(n) {
					if ("string" == typeof n) {
						var r = [];
						return this.each(function() {
							if (! (1 < this.nodeType)) for (var t = S(n, this), e = t.length, i = 0; i < e; i++) r.push(t[i])
						}),
						I(m(r))
					}
					for (var t = n.nodeType ? [n] : n.get(), e = t.length, i = [], a = 0, o = 0; o < this.length; o++) {
						var s = this.get(o);
						if (! (1 < s.nodeType)) for (var l = 0; l < e; l++) {
							var c = t[l];
							if (s.contains(c) && (i[a++] = c, !(a < e))) return I(i)
						}
					}
					return I(i)
				},
				first: function() {
					return this.eq(0)
				},
				get: function(t) {
					return null == t ? this.dom: (t < 0 && (t += this.length), this.dom[t])
				},
				has: function(t) {
					if ("string" == typeof t) return this.map(function() {
						if (! (1 < this.nodeType) && S(t, this)[0]) return this
					},
					!1);
					for (var e = [], i = this.length; i--;) {
						var n = this.get(i);
						if (n.contains(t)) {
							e.push(n);
							break
						}
					}
					return I(e)
				},
				hasClass: function(t) {
					for (var e = this.length; e--;) {
						var i = this.get(e);
						if (1 < i.nodeType) return;
						if (i.classList.contains(t)) return ! 0
					}
					return ! 1
				},
				height: function(t) {
					return e(this, "height", t)
				},
				html: function(i) {
					if (null != i) return "function" == typeof i ? this.each(function(t) {
						var e = i.call(this, t, this.innerHTML);
						I(this).html(e)
					}) : this.each(function() {
						this.innerHTML = i
					});
					var t = this.get(0);
					return t ? t.innerHTML: void 0
				},
				index: function(t) {
					if (this.length) {
						for (var e, i = (t ? "string" == typeof t ? (e = this.get(0), I(t)) : (e = t instanceof D ? t.get(0) : t, this) : (e = this.get(0), this.first().parent().children())).get(), n = i.length; n--;) if (i[n] == e) return n;
						return - 1
					}
				},
				insertAfter: function(t) {
					return I(t).after(this),
					this
				},
				insertBefore: function(t) {
					return I(t).before(this),
					this
				},
				is: function(t, e) {
					var i = e ? [e] : this.get(),
					n = i.length;
					if ("string" == typeof t) {
						for (var r = 0; r < n; r++) {
							var a = i[r];
							if (! (1 < a.nodeType) && a[g](t)) return ! 0
						}
						return ! 1
					}
					if ("object" == P()(t)) {
						var o, s = (o = t instanceof D ? t.get() : t.length ? t: [t]).length;
						for (r = 0; r < n; r++) for (var l = 0; l < s; l++) if (i[r] === o[l]) return ! 0;
						return ! 1
					}
					if ("function" == typeof t) {
						for (r = 0; r < n; r++) if (t.call(this, r, this)) return ! 0;
						return ! 1
					}
				},
				last: function() {
					return this.eq( - 1)
				},
				map: function(t, e) {
					null == e && (e = !0);
					for (var i = this.get(), n = this.length, r = [], a = 0; a < n; a++) {
						var o = i[a],
						s = t.call(o, a, o);
						if (e && O()(s)) for (var l = s.length,
						c = 0; c < l; c++) r.push(s[c]);
						else r.push(s)
					}
					return I(r)
				},
				next: function(t) {
					return w(this, "next", t)
				},
				nextAll: function(t) {
					return b(this, "next", t)
				},
				nextUntil: function(t, e) {
					return b(this, "next", e, t)
				},
				not: function(e) {
					var i = "function" == typeof e,
					n = this;
					return this.map(function(t) {
						if (i) {
							if (e.call(this, t, this)) return
						} else if (n.is(e, this)) return;
						return this
					},
					!1)
				},
				off: function(n, t) {
					return "object" == P()(n) ? (B()(n).forEach(function(t) {
						this.off(t, n[t])
					},
					this), this) : (n = n && n.trim().split(" "), this.each(function() {
						var e, i;
						p(this) && (n ? n.forEach((e = this, i = t,
						function(t) {
							a(e, t).forEach(A(e, i))
						})) : B()(p(this)).forEach(A(this)))
					}))
				},
				offset: function(n) {
					if (n) return "object" == P()(n) ? this.each(function() {
						if (! (1 < this.nodeType)) {
							var t = I(this);
							"static" == t.css("position") ? t.css("position", "relative") : t.css({
								top: 0,
								left: 0
							});
							var e = t.offset();
							t.css({
								top: n.top - e.top + "px",
								left: n.left - e.left + "px"
							})
						}
					}) : "function" == typeof n ? this.each(function(t) {
						var e = I(this),
						i = n.call(this, t, e.offset());
						e.offset(i)
					}) : void 0;
					var t = this.get(0);
					if (t && !(1 < t.nodeType)) {
						var e = t.getBoundingClientRect();
						return {
							top: e.top + window.pageYOffset,
							left: e.left + window.pageXOffset
						}
					}
				},
				offsetParent: function() {
					var i = [];
					return this.each(function() {
						if (! (1 < this.nodeType)) {
							for (var t = this; t != E;) {
								t = t.parentNode;
								var e = getComputedStyle(t).getPropertyValue("position");
								if (!e) break;
								if ("static" != e) return void i.push(t)
							}
							i.push(E)
						}
					}),
					I(i)
				},
				on: function(e, t, i) {
					if ("string" != typeof t && (i = t, t = null), i) {
						t && (i = r(i, t));
						var n = e.trim().split(" ");
						return this.each(function() {
							t && (i = r(i, t, this)),
							p(this) || (this.sprintEventListeners = {}),
							n.forEach(function(t) {
								p(this)[t] || (p(this)[t] = []),
								p(this)[t].push(i),
								this.addEventListener(t, i),
								c(t) && this.addEventListener(l(t), i)
							},
							this)
						})
					}
					return B()(e).forEach(function(t) {
						this.on(t, e[t])
					},
					this),
					this
				},
				parent: function(t) {
					return i.call(this, !0, !0, !1, t)
				},
				parents: function(t) {
					return i.call(this, !0, !1, !1, t)
				},
				position: function() {
					var t = this.offset(),
					e = this.parent().offset();
					if (t) return {
						top: t.top - e.top,
						left: t.left - e.left
					}
				},
				prop: function(i, e) {
					if ("object" == P()(i)) {
						var n = B()(i),
						r = n.length;
						return this.each(function() {
							for (var t = 0; t < r; t++) {
								var e = n[t];
								this[e] = i[e]
							}
						})
					}
					if (null == e) {
						var t = this.get(0);
						if (!t) return;
						return t[i]
					}
					var a = "function" == typeof e;
					return this.each(function(t) {
						this[i] = a ? e.call(this, t, this[i]) : e
					})
				},
				prepend: function() {
					return d.call(this, "afterbegin", arguments),
					this
				},
				prependTo: function(t) {
					return I(d.call(I(t), "afterbegin", [this]))
				},
				prev: function(t) {
					return w(this, "previous", t)
				},
				prevAll: function(t) {
					return b(this, "previous", t)
				},
				prevUntil: function(t, e) {
					return b(this, "previous", e, t)
				},
				ready: function(t) {
					return this.dom = [document],
					this.length = 1,
					this.on("DOMContentLoaded", t)
				},
				remove: function(e) {
					var i = this;
					return this.each(function() {
						var t = this.parentElement;
						t && (e && !i.is(e, this) || t.removeChild(this))
					})
				},
				removeAttr: function(t) {
					if (t) {
						var e = t.trim().split(" "),
						i = e.length;
						this.each(function() {
							if (! (1 < this.nodeType)) for (var t = 0; t < i; t++) this.removeAttribute(e[t])
						})
					}
					return this
				},
				removeClass: function(t) {
					return n.call(this, "remove", t)
				},
				removeProp: function(t) {
					return this.each(function() {
						this[t] = void 0
					})
				},
				replaceAll: function(t) {
					return I(t).replaceWith(this),
					this
				},
				replaceWith: function(e) {
					return "function" == typeof e ? this.each(function(t) {
						I(this).replaceWith(e.call(this, t, this))
					}) : this.before(e).remove()
				},
				scrollLeft: function(t) {
					return T(this, "scrollLeft", t)
				},
				scrollTop: function(t) {
					return T(this, "scrollTop", t)
				},
				siblings: function(i) {
					var n = [],
					r = this;
					return this.each(function(t, e) {
						I(this).parent().children().each(function() {
							this == e || i && !r.is(i, this) || n.push(this)
						})
					}),
					I(n)
				},
				size: function() {
					return this.length
				},
				slice: function(t, e) {
					var i = this.get(),
					n = [],
					r = 0 <= t ? t: t + this.length,
					a = this.length;
					for (e < 0 ? a += e: 0 <= e && (a = e > this.length ? this.length: e); r < a; r++) n.push(i[r]);
					return I(n)
				},
				text: function(e) {
					if (null == e) {
						var t = [];
						return this.each(function() {
							t.push(this.textContent)
						}),
						t.join("")
					}
					var i = "function" == typeof e;
					return this.each(function(t) {
						this.textContent = i ? e.call(this, t, this.textContent) : e
					})
				},
				toggleClass: function(t, e) {
					return n.call(this, "toggle", t, e)
				},
				trigger: function(t) {
					if (!window.CustomEvent || "function" != typeof window.CustomEvent) {
						var e = function(t, e) {
							var i;
							return e = e || {
								bubbles: !1,
								cancelable: !1,
								detail: void 0
							},
							(i = document.createEvent("CustomEvent")).initCustomEvent(t, e.bubbles, e.cancelable, e.detail),
							i
						};
						e.prototype = window.Event.prototype,
						window.CustomEvent = e
					}
					return this.each(function() {
						a(this, t).forEach(function(t) {
							this.dispatchEvent(new e(t, {
								bubbles: !0,
								cancelable: !0
							}))
						},
						this)
					})
				},
				unwrap: function() {
					return this.parent().each(function() {
						this != document.body && this != E && I(this).replaceWith(this.childNodes)
					}),
					this
				},
				val: function(e) {
					if (null == e) {
						var t = this.get(0);
						if (!t) return;
						if (t.multiple) {
							var i = [];
							return this.first().children(":checked").each(function() {
								i.push(this.value)
							}),
							i
						}
						return t.value
					}
					if (O()(e)) {
						var n = this;
						return this.each(function() {
							this.multiple ? n.children().each(function() {
								this.selected = v(this.value, e)
							}) : this.checked = v(this.value, e)
						})
					}
					return "function" == typeof e ? this.each(function(t) {
						I(this).val(e.call(this, t, this.value))
					}) : this.each(function() {
						this.value = e
					})
				},
				width: function(t) {
					return e(this, "width", t)
				},
				wrap: function(t) {
					return L.call(this, t)
				},
				wrapAll: function(t) {
					return L.call(this, t, "all")
				},
				wrapInner: function(t) {
					return L.call(this, t, "inner")
				}
			};
			var I = function(t, e) {
				return new D(t, e)
			};
			return I.fn = D.prototype,
			I
		}.call(void 0)
	},
	function(t, e) {
		t.exports = function(t, e) {
			if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}
	},
	function(t, e, i) {
		"use strict";
		i(50);
		var n, r, a, o = i(7),
		s = i.n(o),
		l = window.navigator && window.navigator.userAgent || "",
		c = (/MSIE\s(\d+)\.\d/.exec(l), a = (r = l).match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [], /trident/i.test(a[1]) ? {
			name: "IE",
			version: (n = /\brv[ :]+(\d+)/g.exec(r) || [])[1] || ""
		}: "Chrome" === a[1] && null !== (n = r.match(/\b(OPR|Edge)\/(\d+)/)) ? {
			name: n[1].replace("OPR", "Opera"),
			version: n[2]
		}: (a = a[2] ? [a[1], a[2]] : [navigator.appName, navigator.appVersion, "-?"], null !== (n = r.match(/version\/(\d+)/i)) && a.splice(1, 1, n[1]), {
			name: a[0],
			version: a[1]
		})),
		u = {
			IEVersion: null,
			name: (c.name || "").toLocaleLowerCase(),
			version: Number(c.version)
		};
		u.isEdge = /edge/i.test(l),
		u.isChrome = !u.isEdge && /chrome/i.test(l),
		u.isFirefox = /fireFox/i.test(l),
		u.isSafari = /safari/i.test(l) && -1 === l.indexOf("Chrome"),
		u.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone|IEMobile|Opera Mini/i.test(l),
		u.isiOS = /iPad|iPhone|iPod/i.test(l),
		u.isAndroid = /Android/i.test(l),
		u.isWindowsPhone = /Windows Phone/i.test(l),
		u.isIE11 = /trident.*rv:11/i.test(l),
		u.isMaxthon = /Maxthon/i.test(l),
		u.isOpera = !!window.opr && !!window.opr.addons || !!window.opera || 0 <= l.indexOf(" OPR/"),
		u.isIpad = -1 < l.indexOf("ipad") || -1 < l.indexOf("Macintosh") && "ontouchend" in s.a,
		u.isEdge && (u.IEVersion = "edge"),
		u.isIE11 && (u.IEVersion = 11),
		e.a = u
	},
	function(t, e, i) {
		t.exports = i(212)
	},
	function(r, t, a) { (function(t) {
			var e, i = void 0 !== t ? t: "undefined" != typeof window ? window: {},
			n = a(211);
			e = "undefined" != typeof document ? document: (e = i["__GLOBAL_DOCUMENT_CACHE@4"]) || (i["__GLOBAL_DOCUMENT_CACHE@4"] = n),
			r.exports = e
		}).call(this, a(66))
	},
	function(t, e, i) {
		t.exports = i(202)
	},
	function(t, e) {
		var i = t.exports = {
			version: "2.6.11"
		};
		"number" == typeof __e && (__e = i)
	},
	function(t, e, i) {
		"undefined" != typeof window && (t.exports = function(i) {
			var n = {};
			function r(t) {
				if (n[t]) return n[t].exports;
				var e = n[t] = {
					i: t,
					l: !1,
					exports: {}
				};
				return i[t].call(e.exports, e, e.exports, r),
				e.l = !0,
				e.exports
			}
			return r.m = i,
			r.c = n,
			r.d = function(t, e, i) {
				r.o(t, e) || Object.defineProperty(t, e, {
					enumerable: !0,
					get: i
				})
			},
			r.r = function(t) {
				"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
					value: "Module"
				}),
				Object.defineProperty(t, "__esModule", {
					value: !0
				})
			},
			r.t = function(e, t) {
				if (1 & t && (e = r(e)), 8 & t) return e;
				if (4 & t && "object" == typeof e && e && e.__esModule) return e;
				var i = Object.create(null);
				if (r.r(i), Object.defineProperty(i, "default", {
					enumerable: !0,
					value: e
				}), 2 & t && "string" != typeof e) for (var n in e) r.d(i, n,
				function(t) {
					return e[t]
				}.bind(null, n));
				return i
			},
			r.n = function(t) {
				var e = t && t.__esModule ?
				function() {
					return t.
				default
				}:
				function() {
					return t
				};
				return r.d(e, "a", e),
				e
			},
			r.o = function(t, e) {
				return Object.prototype.hasOwnProperty.call(t, e)
			},
			r.p = "/dist/",
			r(r.s = 17)
		} ([function(t, e, i) {
			"use strict";
			i.d(e, "a",
			function() {
				return o
			}),
			i.d(e, "b",
			function() {
				return c
			});
			var n = i(5);
			function r() {}
			var a = {
				trace: r,
				debug: r,
				log: r,
				warn: r,
				info: r,
				error: r
			},
			s = a,
			l = Object(n.a)();
			var o = function(t) {
				if (l.console && !0 === t || "object" == typeof t) { !
					function(e) {
						for (var t = arguments.length,
						i = new Array(1 < t ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
						i.forEach(function(t) {
							var a, o;
							s[t] = e[t] ? e[t].bind(e) : (a = t, (o = l.console[a]) ?
							function() {
								for (var t = arguments.length,
								e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
								var n, r;
								e[0] && (e[0] = (n = a, r = e[0], "[" + n + "] > " + r)),
								o.apply(l.console, e)
							}: r)
						})
					} (t, "debug", "log", "info", "warn", "error");
					try {
						s.log()
					} catch(t) {
						s = a
					}
				} else s = a
			},
			c = s
		},
		function(t, e, i) {
			"use strict";
			e.a = {
				MEDIA_ATTACHING: "hlsMediaAttaching",
				MEDIA_ATTACHED: "hlsMediaAttached",
				MEDIA_DETACHING: "hlsMediaDetaching",
				MEDIA_DETACHED: "hlsMediaDetached",
				BUFFER_RESET: "hlsBufferReset",
				BUFFER_CODECS: "hlsBufferCodecs",
				BUFFER_CREATED: "hlsBufferCreated",
				BUFFER_APPENDING: "hlsBufferAppending",
				BUFFER_APPENDED: "hlsBufferAppended",
				BUFFER_EOS: "hlsBufferEos",
				BUFFER_FLUSHING: "hlsBufferFlushing",
				BUFFER_FLUSHED: "hlsBufferFlushed",
				MANIFEST_LOADING: "hlsManifestLoading",
				MANIFEST_LOADED: "hlsManifestLoaded",
				MANIFEST_PARSED: "hlsManifestParsed",
				LEVEL_SWITCHING: "hlsLevelSwitching",
				LEVEL_SWITCHED: "hlsLevelSwitched",
				LEVEL_LOADING: "hlsLevelLoading",
				LEVEL_LOADED: "hlsLevelLoaded",
				LEVEL_UPDATED: "hlsLevelUpdated",
				LEVEL_PTS_UPDATED: "hlsLevelPtsUpdated",
				AUDIO_TRACKS_UPDATED: "hlsAudioTracksUpdated",
				AUDIO_TRACK_SWITCHING: "hlsAudioTrackSwitching",
				AUDIO_TRACK_SWITCHED: "hlsAudioTrackSwitched",
				AUDIO_TRACK_LOADING: "hlsAudioTrackLoading",
				AUDIO_TRACK_LOADED: "hlsAudioTrackLoaded",
				SUBTITLE_TRACKS_UPDATED: "hlsSubtitleTracksUpdated",
				SUBTITLE_TRACK_SWITCH: "hlsSubtitleTrackSwitch",
				SUBTITLE_TRACK_LOADING: "hlsSubtitleTrackLoading",
				SUBTITLE_TRACK_LOADED: "hlsSubtitleTrackLoaded",
				SUBTITLE_FRAG_PROCESSED: "hlsSubtitleFragProcessed",
				INIT_PTS_FOUND: "hlsInitPtsFound",
				FRAG_LOADING: "hlsFragLoading",
				FRAG_LOAD_PROGRESS: "hlsFragLoadProgress",
				FRAG_LOAD_EMERGENCY_ABORTED: "hlsFragLoadEmergencyAborted",
				FRAG_LOADED: "hlsFragLoaded",
				FRAG_DECRYPTED: "hlsFragDecrypted",
				FRAG_PARSING_INIT_SEGMENT: "hlsFragParsingInitSegment",
				FRAG_PARSING_USERDATA: "hlsFragParsingUserdata",
				FRAG_PARSING_METADATA: "hlsFragParsingMetadata",
				FRAG_PARSING_DATA: "hlsFragParsingData",
				FRAG_PARSED: "hlsFragParsed",
				FRAG_BUFFERED: "hlsFragBuffered",
				FRAG_CHANGED: "hlsFragChanged",
				FPS_DROP: "hlsFpsDrop",
				FPS_DROP_LEVEL_CAPPING: "hlsFpsDropLevelCapping",
				ERROR: "hlsError",
				DESTROYING: "hlsDestroying",
				KEY_LOADING: "hlsKeyLoading",
				KEY_LOADED: "hlsKeyLoaded",
				STREAM_STATE_TRANSITION: "hlsStreamStateTransition"
			}
		},
		function(t, e, i) {
			"use strict";
			var n, r;
			i.d(e, "b",
			function() {
				return n
			}),
			i.d(e, "a",
			function() {
				return r
			}),
			function(t) {
				t.NETWORK_ERROR = "networkError",
				t.MEDIA_ERROR = "mediaError",
				t.KEY_SYSTEM_ERROR = "keySystemError",
				t.MUX_ERROR = "muxError",
				t.OTHER_ERROR = "otherError"
			} (n = n || {}),
			function(t) {
				t.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys",
				t.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess",
				t.KEY_SYSTEM_NO_SESSION = "keySystemNoSession",
				t.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed",
				t.KEY_SYSTEM_NO_INIT_DATA = "keySystemNoInitData",
				t.MANIFEST_LOAD_ERROR = "manifestLoadError",
				t.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut",
				t.MANIFEST_PARSING_ERROR = "manifestParsingError",
				t.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError",
				t.LEVEL_LOAD_ERROR = "levelLoadError",
				t.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut",
				t.LEVEL_SWITCH_ERROR = "levelSwitchError",
				t.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError",
				t.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut",
				t.FRAG_LOAD_ERROR = "fragLoadError",
				t.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut",
				t.FRAG_DECRYPT_ERROR = "fragDecryptError",
				t.FRAG_PARSING_ERROR = "fragParsingError",
				t.REMUX_ALLOC_ERROR = "remuxAllocError",
				t.KEY_LOAD_ERROR = "keyLoadError",
				t.KEY_LOAD_TIMEOUT = "keyLoadTimeOut",
				t.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError",
				t.BUFFER_APPEND_ERROR = "bufferAppendError",
				t.BUFFER_APPENDING_ERROR = "bufferAppendingError",
				t.BUFFER_STALLED_ERROR = "bufferStalledError",
				t.BUFFER_FULL_ERROR = "bufferFullError",
				t.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole",
				t.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall",
				t.INTERNAL_EXCEPTION = "internalException"
			} (r = r || {})
		},
		function(t, e, i) {
			"use strict";
			i.d(e, "a",
			function() {
				return n
			});
			var n = Number.isFinite ||
			function(t) {
				return "number" == typeof t && isFinite(t)
			}
		},
		function(t, e, i) {
			"use strict";
			i.d(e, "b",
			function() {
				return r
			});
			var d, h = i(5),
			n = function() {
				function s() {}
				return s.isHeader = function(t, e) {
					return e + 10 <= t.length && 73 === t[e] && 68 === t[e + 1] && 51 === t[e + 2] && t[e + 3] < 255 && t[e + 4] < 255 && t[e + 6] < 128 && t[e + 7] < 128 && t[e + 8] < 128 && t[e + 9] < 128
				},
				s.isFooter = function(t, e) {
					return e + 10 <= t.length && 51 === t[e] && 68 === t[e + 1] && 73 === t[e + 2] && t[e + 3] < 255 && t[e + 4] < 255 && t[e + 6] < 128 && t[e + 7] < 128 && t[e + 8] < 128 && t[e + 9] < 128
				},
				s.getID3Data = function(t, e) {
					for (var i = e,
					n = 0; s.isHeader(t, e);) n += 10,
					n += s._readSize(t, e + 6),
					s.isFooter(t, e + 10) && (n += 10),
					e += n;
					if (0 < n) return t.subarray(i, i + n)
				},
				s._readSize = function(t, e) {
					var i = 0;
					return i = (127 & t[e]) << 21,
					i |= (127 & t[e + 1]) << 14,
					i |= (127 & t[e + 2]) << 7,
					i |= 127 & t[e + 3]
				},
				s.getTimeStamp = function(t) {
					for (var e = s.getID3Frames(t), i = 0; i < e.length; i++) {
						var n = e[i];
						if (s.isTimeStampFrame(n)) return s._readTimeStamp(n)
					}
				},
				s.isTimeStampFrame = function(t) {
					return t && "PRIV" === t.key && "com.apple.streaming.transportStreamTimestamp" === t.info
				},
				s._getFrameData = function(t) {
					var e = String.fromCharCode(t[0], t[1], t[2], t[3]),
					i = s._readSize(t, 4);
					return {
						type: e,
						size: i,
						data: t.subarray(10, 10 + i)
					}
				},
				s.getID3Frames = function(t) {
					for (var e = 0,
					i = []; s.isHeader(t, e);) {
						for (var n = s._readSize(t, e + 6), r = (e += 10) + n; e + 8 < r;) {
							var a = s._getFrameData(t.subarray(e)),
							o = s._decodeFrame(a);
							o && i.push(o),
							e += a.size + 10
						}
						s.isFooter(t, e) && (e += 10)
					}
					return i
				},
				s._decodeFrame = function(t) {
					return "PRIV" === t.type ? s._decodePrivFrame(t) : "T" === t.type[0] ? s._decodeTextFrame(t) : "W" === t.type[0] ? s._decodeURLFrame(t) : void 0
				},
				s._readTimeStamp = function(t) {
					if (8 === t.data.byteLength) {
						var e = new Uint8Array(t.data),
						i = 1 & e[3],
						n = (e[4] << 23) + (e[5] << 15) + (e[6] << 7) + e[7];
						return n /= 45,
						i && (n += 47721858.84),
						Math.round(n)
					}
				},
				s._decodePrivFrame = function(t) {
					if (! (t.size < 2)) {
						var e = s._utf8ArrayToStr(t.data, !0),
						i = new Uint8Array(t.data.subarray(e.length + 1));
						return {
							key: t.type,
							info: e,
							data: i.buffer
						}
					}
				},
				s._decodeTextFrame = function(t) {
					if (! (t.size < 2)) {
						if ("TXXX" === t.type) {
							var e = 1,
							i = s._utf8ArrayToStr(t.data.subarray(e), !0);
							e += i.length + 1;
							var n = s._utf8ArrayToStr(t.data.subarray(e));
							return {
								key: t.type,
								info: i,
								data: n
							}
						}
						var r = s._utf8ArrayToStr(t.data.subarray(1));
						return {
							key: t.type,
							data: r
						}
					}
				},
				s._decodeURLFrame = function(t) {
					if ("WXXX" === t.type) {
						if (t.size < 2) return;
						var e = 1,
						i = s._utf8ArrayToStr(t.data.subarray(e));
						e += i.length + 1;
						var n = s._utf8ArrayToStr(t.data.subarray(e));
						return {
							key: t.type,
							info: i,
							data: n
						}
					}
					var r = s._utf8ArrayToStr(t.data);
					return {
						key: t.type,
						data: r
					}
				},
				s._utf8ArrayToStr = function(t, e) {
					void 0 === e && (e = !1);
					var i = function() {
						var t = Object(h.a)();
						return d || void 0 === t.TextDecoder || (d = new t.TextDecoder("utf-8")),
						d
					} ();
					if (i) {
						var n = i.decode(t);
						if (e) {
							var r = n.indexOf("\0");
							return - 1 !== r ? n.substring(0, r) : n
						}
						return n.replace(/\0/g, "")
					}
					for (var a, o, s, l = t.length,
					c = "",
					u = 0; u < l;) {
						if (0 === (a = t[u++]) && e) return c;
						if (0 !== a && 3 !== a) switch (a >> 4) {
						case 0:
						case 1:
						case 2:
						case 3:
						case 4:
						case 5:
						case 6:
						case 7:
							c += String.fromCharCode(a);
							break;
						case 12:
						case 13:
							o = t[u++],
							c += String.fromCharCode((31 & a) << 6 | 63 & o);
							break;
						case 14:
							o = t[u++],
							s = t[u++],
							c += String.fromCharCode((15 & a) << 12 | (63 & o) << 6 | (63 & s) << 0)
						}
					}
					return c
				},
				s
			} ();
			var r = n._utf8ArrayToStr;
			e.a = n
		},
		function(t, e, i) {
			"use strict";
			function n() {
				return "undefined" == typeof window ? self: window
			}
			i.d(e, "a",
			function() {
				return n
			})
		},
		function(t, e, i) {
			var n, u, r, a, d;
			n = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/\?#]*\/)*.*?)??(;.*?)?(\?.*?)?(#.*?)?$/,
			u = /^([^\/?#]*)(.*)$/,
			r = /(?:\/|^)\.(?=\/)/g,
			a = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g,
			d = {
				buildAbsoluteURL: function(t, e, i) {
					if (i = i || {},
					t = t.trim(), !(e = e.trim())) {
						if (!i.alwaysNormalize) return t;
						var n = d.parseURL(t);
						if (!n) throw new Error("Error trying to parse base URL.");
						return n.path = d.normalizePath(n.path),
						d.buildURLFromParts(n)
					}
					var r = d.parseURL(e);
					if (!r) throw new Error("Error trying to parse relative URL.");
					if (r.scheme) return i.alwaysNormalize ? (r.path = d.normalizePath(r.path), d.buildURLFromParts(r)) : e;
					var a = d.parseURL(t);
					if (!a) throw new Error("Error trying to parse base URL.");
					if (!a.netLoc && a.path && "/" !== a.path[0]) {
						var o = u.exec(a.path);
						a.netLoc = o[1],
						a.path = o[2]
					}
					a.netLoc && !a.path && (a.path = "/");
					var s = {
						scheme: a.scheme,
						netLoc: r.netLoc,
						path: null,
						params: r.params,
						query: r.query,
						fragment: r.fragment
					};
					if (!r.netLoc && (s.netLoc = a.netLoc, "/" !== r.path[0])) if (r.path) {
						var l = a.path,
						c = l.substring(0, l.lastIndexOf("/") + 1) + r.path;
						s.path = d.normalizePath(c)
					} else s.path = a.path,
					r.params || (s.params = a.params, r.query || (s.query = a.query));
					return null === s.path && (s.path = i.alwaysNormalize ? d.normalizePath(r.path) : r.path),
					d.buildURLFromParts(s)
				},
				parseURL: function(t) {
					var e = n.exec(t);
					return e ? {
						scheme: e[1] || "",
						netLoc: e[2] || "",
						path: e[3] || "",
						params: e[4] || "",
						query: e[5] || "",
						fragment: e[6] || ""
					}: null
				},
				normalizePath: function(t) {
					for (t = t.split("").reverse().join("").replace(r, ""); t.length !== (t = t.replace(a, "")).length;);
					return t.split("").reverse().join("")
				},
				buildURLFromParts: function(t) {
					return t.scheme + t.netLoc + t.path + t.params + t.query + t.fragment
				}
			},
			t.exports = d
		},
		function(t, e, i) {
			"use strict";
			var s = function() {
				function t(t, e) {
					this.subtle = t,
					this.aesIV = e
				}
				return t.prototype.decrypt = function(t, e) {
					return this.subtle.decrypt({
						name: "AES-CBC",
						iv: this.aesIV
					},
					e, t)
				},
				t
			} (),
			l = function() {
				function t(t, e) {
					this.subtle = t,
					this.key = e
				}
				return t.prototype.expandKey = function() {
					return this.subtle.importKey("raw", this.key, {
						name: "AES-CBC"
					},
					!1, ["encrypt", "decrypt"])
				},
				t
			} (),
			c = function() {
				function t() {
					this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
					this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)],
					this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)],
					this.sBox = new Uint32Array(256),
					this.invSBox = new Uint32Array(256),
					this.key = new Uint32Array(0),
					this.initTable()
				}
				var e = t.prototype;
				return e.uint8ArrayToUint32Array_ = function(t) {
					for (var e = new DataView(t), i = new Uint32Array(4), n = 0; n < 4; n++) i[n] = e.getUint32(4 * n);
					return i
				},
				e.initTable = function() {
					var t = this.sBox,
					e = this.invSBox,
					i = this.subMix,
					n = i[0],
					r = i[1],
					a = i[2],
					o = i[3],
					s = this.invSubMix,
					l = s[0],
					c = s[1],
					u = s[2],
					d = s[3],
					h = new Uint32Array(256),
					p = 0,
					f = 0,
					v = 0;
					for (v = 0; v < 256; v++) h[v] = v < 128 ? v << 1 : v << 1 ^ 283;
					for (v = 0; v < 256; v++) {
						var g = f ^ f << 1 ^ f << 2 ^ f << 3 ^ f << 4;
						g = g >>> 8 ^ 255 & g ^ 99,
						t[p] = g,
						e[g] = p;
						var m = h[p],
						A = h[m],
						y = h[A],
						b = 257 * h[g] ^ 16843008 * g;
						n[p] = b << 24 | b >>> 8,
						r[p] = b << 16 | b >>> 16,
						a[p] = b << 8 | b >>> 24,
						o[p] = b,
						b = 16843009 * y ^ 65537 * A ^ 257 * m ^ 16843008 * p,
						l[g] = b << 24 | b >>> 8,
						c[g] = b << 16 | b >>> 16,
						u[g] = b << 8 | b >>> 24,
						d[g] = b,
						p ? (p = m ^ h[h[h[y ^ m]]], f ^= h[h[f]]) : p = f = 1
					}
				},
				e.expandKey = function(t) {
					for (var e = this.uint8ArrayToUint32Array_(t), i = !0, n = 0; n < e.length && i;) i = e[n] === this.key[n],
					n++;
					if (!i) {
						this.key = e;
						var r = this.keySize = e.length;
						if (4 !== r && 6 !== r && 8 !== r) throw new Error("Invalid aes key size=" + r);
						var a, o, s, l, c = this.ksRows = 4 * (r + 6 + 1),
						u = this.keySchedule = new Uint32Array(c),
						d = this.invKeySchedule = new Uint32Array(c),
						h = this.sBox,
						p = this.rcon,
						f = this.invSubMix,
						v = f[0],
						g = f[1],
						m = f[2],
						A = f[3];
						for (a = 0; a < c; a++) a < r ? s = u[a] = e[a] : (l = s, a % r == 0 ? (l = h[(l = l << 8 | l >>> 24) >>> 24] << 24 | h[l >>> 16 & 255] << 16 | h[l >>> 8 & 255] << 8 | h[255 & l], l ^= p[a / r | 0] << 24) : 6 < r && a % r == 4 && (l = h[l >>> 24] << 24 | h[l >>> 16 & 255] << 16 | h[l >>> 8 & 255] << 8 | h[255 & l]), u[a] = s = (u[a - r] ^ l) >>> 0);
						for (o = 0; o < c; o++) a = c - o,
						l = 3 & o ? u[a] : u[a - 4],
						d[o] = o < 4 || a <= 4 ? l: v[h[l >>> 24]] ^ g[h[l >>> 16 & 255]] ^ m[h[l >>> 8 & 255]] ^ A[h[255 & l]],
						d[o] = d[o] >>> 0
					}
				},
				e.networkToHostOrderSwap = function(t) {
					return t << 24 | (65280 & t) << 8 | (16711680 & t) >> 8 | t >>> 24
				},
				e.decrypt = function(t, e, i, n) {
					for (var r, a, o, s, l, c, u, d, h, p, f, v, g, m, A, y, b, w = this.keySize + 6,
					k = this.invKeySchedule,
					E = this.invSBox,
					x = this.invSubMix,
					T = x[0], S = x[1], _ = x[2], C = x[3], L = this.uint8ArrayToUint32Array_(i), R = L[0], D = L[1], I = L[2], M = L[3], P = new Int32Array(t), O = new Int32Array(P.length), B = this.networkToHostOrderSwap; e < P.length;) {
						for (h = B(P[e]), p = B(P[e + 1]), f = B(P[e + 2]), v = B(P[e + 3]), l = h ^ k[0], c = v ^ k[1], u = f ^ k[2], d = p ^ k[3], g = 4, m = 1; m < w; m++) r = T[l >>> 24] ^ S[c >> 16 & 255] ^ _[u >> 8 & 255] ^ C[255 & d] ^ k[g],
						a = T[c >>> 24] ^ S[u >> 16 & 255] ^ _[d >> 8 & 255] ^ C[255 & l] ^ k[g + 1],
						o = T[u >>> 24] ^ S[d >> 16 & 255] ^ _[l >> 8 & 255] ^ C[255 & c] ^ k[g + 2],
						s = T[d >>> 24] ^ S[l >> 16 & 255] ^ _[c >> 8 & 255] ^ C[255 & u] ^ k[g + 3],
						l = r,
						c = a,
						u = o,
						d = s,
						g += 4;
						r = E[l >>> 24] << 24 ^ E[c >> 16 & 255] << 16 ^ E[u >> 8 & 255] << 8 ^ E[255 & d] ^ k[g],
						a = E[c >>> 24] << 24 ^ E[u >> 16 & 255] << 16 ^ E[d >> 8 & 255] << 8 ^ E[255 & l] ^ k[g + 1],
						o = E[u >>> 24] << 24 ^ E[d >> 16 & 255] << 16 ^ E[l >> 8 & 255] << 8 ^ E[255 & c] ^ k[g + 2],
						s = E[d >>> 24] << 24 ^ E[l >> 16 & 255] << 16 ^ E[c >> 8 & 255] << 8 ^ E[255 & u] ^ k[g + 3],
						g += 3,
						O[e] = B(r ^ R),
						O[e + 1] = B(s ^ D),
						O[e + 2] = B(o ^ I),
						O[e + 3] = B(a ^ M),
						R = h,
						D = p,
						I = f,
						M = v,
						e += 4
					}
					return n ? (A = O.buffer, y = A.byteLength, (b = y && new DataView(A).getUint8(y - 1)) ? A.slice(0, y - b) : A) : O.buffer
				},
				e.destroy = function() {
					this.key = void 0,
					this.keySize = void 0,
					this.ksRows = void 0,
					this.sBox = void 0,
					this.invSBox = void 0,
					this.subMix = void 0,
					this.invSubMix = void 0,
					this.keySchedule = void 0,
					this.invKeySchedule = void 0,
					this.rcon = void 0
				},
				t
			} (),
			a = i(2),
			u = i(0),
			o = i(1),
			n = i(5),
			d = Object(n.a)(),
			r = function() {
				function t(t, e, i) {
					var n = (void 0 === i ? {}: i).removePKCS7Padding,
					r = void 0 === n || n;
					if (this.logEnabled = !0, this.observer = t, this.config = e, this.removePKCS7Padding = r) try {
						var a = d.crypto;
						a && (this.subtle = a.subtle || a.webkitSubtle)
					} catch(t) {}
					this.disableWebCrypto = !this.subtle
				}
				var e = t.prototype;
				return e.isSync = function() {
					return this.disableWebCrypto && this.config.enableSoftwareAES
				},
				e.decrypt = function(e, i, n, r) {
					var a = this;
					if (this.disableWebCrypto && this.config.enableSoftwareAES) {
						this.logEnabled && (u.b.log("JS AES decrypt"), this.logEnabled = !1);
						var t = this.decryptor;
						t || (this.decryptor = t = new c),
						t.expandKey(i),
						r(t.decrypt(e, 0, n, this.removePKCS7Padding))
					} else {
						this.logEnabled && (u.b.log("WebCrypto AES decrypt"), this.logEnabled = !1);
						var o = this.subtle;
						this.key !== i && (this.key = i, this.fastAesKey = new l(o, i)),
						this.fastAesKey.expandKey().then(function(t) {
							new s(o, n).decrypt(e, t).
							catch(function(t) {
								a.onWebCryptoError(t, e, i, n, r)
							}).then(function(t) {
								r(t)
							})
						}).
						catch(function(t) {
							a.onWebCryptoError(t, e, i, n, r)
						})
					}
				},
				e.onWebCryptoError = function(t, e, i, n, r) {
					this.config.enableSoftwareAES ? (u.b.log("WebCrypto Error, disable WebCrypto API"), this.disableWebCrypto = !0, this.logEnabled = !0, this.decrypt(e, i, n, r)) : (u.b.error("decrypting error : " + t.message), this.observer.trigger(o.a.ERROR, {
						type: a.b.MEDIA_ERROR,
						details: a.a.FRAG_DECRYPT_ERROR,
						fatal: !0,
						reason: t.message
					}))
				},
				e.destroy = function() {
					var t = this.decryptor;
					t && (t.destroy(), this.decryptor = void 0)
				},
				t
			} ();
			e.a = r
		},
		function(t, e, i) {
			"use strict";
			var n = Object.prototype.hasOwnProperty,
			p = "~";
			function r() {}
			function s(t, e, i) {
				this.fn = t,
				this.context = e,
				this.once = i || !1
			}
			function a(t, e, i, n, r) {
				if ("function" != typeof i) throw new TypeError("The listener must be a function");
				var a = new s(i, n || t, r),
				o = p ? p + e: e;
				return t._events[o] ? t._events[o].fn ? t._events[o] = [t._events[o], a] : t._events[o].push(a) : (t._events[o] = a, t._eventsCount++),
				t
			}
			function c(t, e) {
				0 == --t._eventsCount ? t._events = new r: delete t._events[e]
			}
			function o() {
				this._events = new r,
				this._eventsCount = 0
			}
			Object.create && (r.prototype = Object.create(null), (new r).__proto__ || (p = !1)),
			o.prototype.eventNames = function() {
				var t, e, i = [];
				if (0 === this._eventsCount) return i;
				for (e in t = this._events) n.call(t, e) && i.push(p ? e.slice(1) : e);
				return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(t)) : i
			},
			o.prototype.listeners = function(t) {
				var e = p ? p + t: t,
				i = this._events[e];
				if (!i) return [];
				if (i.fn) return [i.fn];
				for (var n = 0,
				r = i.length,
				a = new Array(r); n < r; n++) a[n] = i[n].fn;
				return a
			},
			o.prototype.listenerCount = function(t) {
				var e = p ? p + t: t,
				i = this._events[e];
				return i ? i.fn ? 1 : i.length: 0
			},
			o.prototype.emit = function(t, e, i, n, r, a) {
				var o = p ? p + t: t;
				if (!this._events[o]) return ! 1;
				var s, l, c = this._events[o],
				u = arguments.length;
				if (c.fn) {
					switch (c.once && this.removeListener(t, c.fn, void 0, !0), u) {
					case 1:
						return c.fn.call(c.context),
						!0;
					case 2:
						return c.fn.call(c.context, e),
						!0;
					case 3:
						return c.fn.call(c.context, e, i),
						!0;
					case 4:
						return c.fn.call(c.context, e, i, n),
						!0;
					case 5:
						return c.fn.call(c.context, e, i, n, r),
						!0;
					case 6:
						return c.fn.call(c.context, e, i, n, r, a),
						!0
					}
					for (l = 1, s = new Array(u - 1); l < u; l++) s[l - 1] = arguments[l];
					c.fn.apply(c.context, s)
				} else {
					var d, h = c.length;
					for (l = 0; l < h; l++) switch (c[l].once && this.removeListener(t, c[l].fn, void 0, !0), u) {
					case 1:
						c[l].fn.call(c[l].context);
						break;
					case 2:
						c[l].fn.call(c[l].context, e);
						break;
					case 3:
						c[l].fn.call(c[l].context, e, i);
						break;
					case 4:
						c[l].fn.call(c[l].context, e, i, n);
						break;
					default:
						if (!s) for (d = 1, s = new Array(u - 1); d < u; d++) s[d - 1] = arguments[d];
						c[l].fn.apply(c[l].context, s)
					}
				}
				return ! 0
			},
			o.prototype.on = function(t, e, i) {
				return a(this, t, e, i, !1)
			},
			o.prototype.once = function(t, e, i) {
				return a(this, t, e, i, !0)
			},
			o.prototype.removeListener = function(t, e, i, n) {
				var r = p ? p + t: t;
				if (!this._events[r]) return this;
				if (!e) return c(this, r),
				this;
				var a = this._events[r];
				if (a.fn) a.fn !== e || n && !a.once || i && a.context !== i || c(this, r);
				else {
					for (var o = 0,
					s = [], l = a.length; o < l; o++)(a[o].fn !== e || n && !a[o].once || i && a[o].context !== i) && s.push(a[o]);
					s.length ? this._events[r] = 1 === s.length ? s[0] : s: c(this, r)
				}
				return this
			},
			o.prototype.removeAllListeners = function(t) {
				var e;
				return t ? (e = p ? p + t: t, this._events[e] && c(this, e)) : (this._events = new r, this._eventsCount = 0),
				this
			},
			o.prototype.off = o.prototype.removeListener,
			o.prototype.addListener = o.prototype.on,
			o.prefixed = p,
			o.EventEmitter = o,
			t.exports = o
		},
		function(t, e, i) {
			"use strict";
			var $ = i(1),
			tt = i(2),
			v = i(7),
			f = i(3),
			et = i(0),
			n = i(5);
			function r(t, e) {
				return 255 === t[e] && 240 == (246 & t[e + 1])
			}
			function u(t, e) {
				return 1 & t[e + 1] ? 7 : 9
			}
			function d(t, e) {
				return (3 & t[e + 3]) << 11 | t[e + 4] << 3 | (224 & t[e + 5]) >>> 5
			}
			function g(t, e) {
				return e + 1 < t.length && r(t, e)
			}
			function a(t, e) {
				if (g(t, e)) {
					var i = u(t, e);
					e + 5 < t.length && (i = d(t, e));
					var n = e + i;
					if (n === t.length || n + 1 < t.length && r(t, n)) return 1
				}
			}
			function m(t, e, i, n, r) {
				if (!t.samplerate) {
					var a = function(t, e, i, n) {
						var r, a, o, s, l, c = navigator.userAgent.toLowerCase(),
						u = n,
						d = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
						if (r = 1 + ((192 & e[i + 2]) >>> 6), !((a = (60 & e[i + 2]) >>> 2) > d.length - 1)) return s = (1 & e[i + 2]) << 2,
						s |= (192 & e[i + 3]) >>> 6,
						et.b.log("manifest codec:" + n + ",ADTS data:type:" + r + ",sampleingIndex:" + a + "[" + d[a] + "Hz],channelConfig:" + s),
						o = /firefox/i.test(c) ? 6 <= a ? (r = 5, l = new Array(4), a - 3) : (r = 2, l = new Array(2), a) : -1 !== c.indexOf("android") ? (r = 2, l = new Array(2), a) : (r = 5, l = new Array(4), n && ( - 1 !== n.indexOf("mp4a.40.29") || -1 !== n.indexOf("mp4a.40.5")) || !n && 6 <= a ? a - 3 : ((n && -1 !== n.indexOf("mp4a.40.2") && (6 <= a && 1 == s || /vivaldi/i.test(c)) || !n && 1 == s) && (r = 2, l = new Array(2)), a)),
						l[0] = r << 3,
						l[0] |= (14 & a) >> 1,
						l[1] |= (1 & a) << 7,
						l[1] |= s << 3,
						5 === r && (l[1] |= (14 & o) >> 1, l[2] = (1 & o) << 7, l[2] |= 8, l[3] = 0),
						{
							config: l,
							samplerate: d[a],
							channelCount: s,
							codec: "mp4a.40." + r,
							manifestCodec: u
						};
						t.trigger($.a.ERROR, {
							type: tt.b.MEDIA_ERROR,
							details: tt.a.FRAG_PARSING_ERROR,
							fatal: !0,
							reason: "invalid ADTS sampling index:" + a
						})
					} (e, i, n, r);
					t.config = a.config,
					t.samplerate = a.samplerate,
					t.channelCount = a.channelCount,
					t.codec = a.codec,
					t.manifestCodec = a.manifestCodec,
					et.b.log("parsed codec:" + t.codec + ",rate:" + a.samplerate + ",nb channel:" + a.channelCount)
				}
			}
			function A(t) {
				return 9216e4 / t
			}
			function y(t, e, i, n, r) {
				var a = function(t, e, i, n, r) {
					var a, o, s = t.length;
					if (a = u(t, e), o = d(t, e), 0 < (o -= a) && e + a + o <= s) return {
						headerLength: a,
						frameLength: o,
						stamp: i + n * r
					}
				} (e, i, n, r, A(t.samplerate));
				if (a) {
					var o = a.stamp,
					s = a.headerLength,
					l = a.frameLength,
					c = {
						unit: e.subarray(i + s, i + s + l),
						pts: o,
						dts: o
					};
					return t.samples.push(c),
					{
						sample: c,
						length: l + s
					}
				}
			}
			var b, w = i(4),
			E = function() {
				function t(t, e, i) {
					this.observer = t,
					this.config = i,
					this.remuxer = e
				}
				var e = t.prototype;
				return e.resetInitSegment = function(t, e, i, n) {
					this._audioTrack = {
						container: "audio/adts",
						type: "audio",
						id: 0,
						sequenceNumber: 0,
						isAAC: !0,
						samples: [],
						len: 0,
						manifestCodec: e,
						duration: n,
						inputTimeScale: 9e4
					}
				},
				e.resetTimeStamp = function() {},
				t.probe = function(t) {
					if (!t) return ! 1;
					for (var e = (w.a.getID3Data(t, 0) || []).length, i = t.length; e < i; e++) if (a(t, e)) return et.b.log("ADTS sync word found !"),
					!0;
					return ! 1
				},
				e.append = function(t, e, i, n) {
					for (var r = this._audioTrack,
					a = w.a.getID3Data(t, 0) || [], o = w.a.getTimeStamp(a), s = Object(f.a)(o) ? 90 * o: 9e4 * e, l = 0, c = s, u = t.length, d = a.length, h = [{
						pts: c,
						dts: c,
						data: a
					}]; d < u - 1;) if (g(t, d) && d + 5 < u) {
						m(r, this.observer, t, d, r.manifestCodec);
						var p = y(r, t, d, s, l);
						if (!p) {
							et.b.log("Unable to parse AAC frame");
							break
						}
						d += p.length,
						c = p.sample.pts,
						l++
					} else w.a.isHeader(t, d) ? (a = w.a.getID3Data(t, d), h.push({
						pts: c,
						dts: c,
						data: a
					}), d += a.length) : d++;
					this.remuxer.remux(r, {
						samples: []
					},
					{
						samples: h,
						inputTimeScale: 9e4
					},
					{
						samples: []
					},
					e, i, n)
				},
				e.destroy = function() {},
				t
			} (),
			x = i(11),
			k = {
				BitratesMap: [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
				SamplingRateMap: [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
				SamplesCoefficients: [[0, 72, 144, 12], [0, 0, 0, 0], [0, 72, 144, 12], [0, 144, 144, 12]],
				BytesInSlot: [0, 1, 1, 4],
				appendFrame: function(t, e, i, n, r) {
					if (! (i + 24 > e.length)) {
						var a = this.parseHeader(e, i);
						if (a && i + a.frameLength <= e.length) {
							var o = n + r * (9e4 * a.samplesPerFrame / a.sampleRate),
							s = {
								unit: e.subarray(i, i + a.frameLength),
								pts: o,
								dts: o
							};
							return t.config = [],
							t.channelCount = a.channelCount,
							t.samplerate = a.sampleRate,
							t.samples.push(s),
							{
								sample: s,
								length: a.frameLength
							}
						}
					}
				},
				parseHeader: function(t, e) {
					var i = t[e + 1] >> 3 & 3,
					n = t[e + 1] >> 1 & 3,
					r = t[e + 2] >> 4 & 15,
					a = t[e + 2] >> 2 & 3,
					o = t[e + 2] >> 1 & 1;
					if (1 != i && 0 != r && 15 != r && 3 != a) {
						var s = 3 == i ? 3 - n: 3 == n ? 3 : 4,
						l = 1e3 * k.BitratesMap[14 * s + r - 1],
						c = 3 == i ? 0 : 2 == i ? 1 : 2,
						u = k.SamplingRateMap[3 * c + a],
						d = t[e + 3] >> 6 == 3 ? 1 : 2,
						h = k.SamplesCoefficients[i][n],
						p = k.BytesInSlot[n],
						f = 8 * h * p;
						return {
							sampleRate: u,
							channelCount: d,
							frameLength: parseInt(h * l / u + o, 10) * p,
							samplesPerFrame: f
						}
					}
				},
				isHeaderPattern: function(t, e) {
					return 255 === t[e] && 224 == (224 & t[e + 1]) && 0 != (6 & t[e + 1])
				},
				isHeader: function(t, e) {
					return !! (e + 1 < t.length && this.isHeaderPattern(t, e))
				},
				probe: function(t, e) {
					if (e + 1 < t.length && this.isHeaderPattern(t, e)) {
						var i = this.parseHeader(t, e),
						n = 4;
						i && i.frameLength && (n = i.frameLength);
						var r = e + n;
						if (r === t.length || r + 1 < t.length && this.isHeaderPattern(t, r)) return ! 0
					}
					return ! 1
				}
			},
			T = k,
			S = function() {
				function t(t) {
					this.data = t,
					this.bytesAvailable = t.byteLength,
					this.word = 0,
					this.bitsAvailable = 0
				}
				var e = t.prototype;
				return e.loadWord = function() {
					var t = this.data,
					e = this.bytesAvailable,
					i = t.byteLength - e,
					n = new Uint8Array(4),
					r = Math.min(4, e);
					if (0 === r) throw new Error("no bytes available");
					n.set(t.subarray(i, i + r)),
					this.word = new DataView(n.buffer).getUint32(0),
					this.bitsAvailable = 8 * r,
					this.bytesAvailable -= r
				},
				e.skipBits = function(t) {
					var e;
					this.bitsAvailable > t || (t -= this.bitsAvailable, t -= (e = t >> 3) >> 3, this.bytesAvailable -= e, this.loadWord()),
					this.word <<= t,
					this.bitsAvailable -= t
				},
				e.readBits = function(t) {
					var e = Math.min(this.bitsAvailable, t),
					i = this.word >>> 32 - e;
					return 32 < t && et.b.error("Cannot read more than 32 bits at a time"),
					this.bitsAvailable -= e,
					0 < this.bitsAvailable ? this.word <<= e: 0 < this.bytesAvailable && this.loadWord(),
					0 < (e = t - e) && this.bitsAvailable ? i << e | this.readBits(e) : i
				},
				e.skipLZ = function() {
					var t;
					for (t = 0; t < this.bitsAvailable; ++t) if (0 != (this.word & 2147483648 >>> t)) return this.word <<= t,
					this.bitsAvailable -= t,
					t;
					return this.loadWord(),
					t + this.skipLZ()
				},
				e.skipUEG = function() {
					this.skipBits(1 + this.skipLZ())
				},
				e.skipEG = function() {
					this.skipBits(1 + this.skipLZ())
				},
				e.readUEG = function() {
					var t = this.skipLZ();
					return this.readBits(t + 1) - 1
				},
				e.readEG = function() {
					var t = this.readUEG();
					return 1 & t ? 1 + t >>> 1 : -1 * (t >>> 1)
				},
				e.readBoolean = function() {
					return 1 === this.readBits(1)
				},
				e.readUByte = function() {
					return this.readBits(8)
				},
				e.readUShort = function() {
					return this.readBits(16)
				},
				e.readUInt = function() {
					return this.readBits(32)
				},
				e.skipScalingList = function(t) {
					var e, i = 8,
					n = 8;
					for (e = 0; e < t; e++) 0 !== n && (n = (i + this.readEG() + 256) % 256),
					i = 0 === n ? i: n
				},
				e.readSPS = function() {
					var t, e, i, n, r, a, o, s = 0,
					l = 0,
					c = 0,
					u = 0,
					d = this.readUByte.bind(this),
					h = this.readBits.bind(this),
					p = this.readUEG.bind(this),
					f = this.readBoolean.bind(this),
					v = this.skipBits.bind(this),
					g = this.skipEG.bind(this),
					m = this.skipUEG.bind(this),
					A = this.skipScalingList.bind(this);
					if (d(), t = d(), h(5), v(3), d(), m(), 100 === t || 110 === t || 122 === t || 244 === t || 44 === t || 83 === t || 86 === t || 118 === t || 128 === t) {
						var y = p();
						if (3 === y && v(1), m(), m(), v(1), f()) for (a = 3 !== y ? 8 : 12, o = 0; o < a; o++) f() && A(o < 6 ? 16 : 64)
					}
					m();
					var b = p();
					if (0 === b) p();
					else if (1 === b) for (v(1), g(), g(), e = p(), o = 0; o < e; o++) g();
					m(),
					v(1),
					i = p(),
					n = p(),
					0 === (r = h(1)) && v(1),
					v(1),
					f() && (s = p(), l = p(), c = p(), u = p());
					var w = [1, 1];
					if (f() && f()) switch (d()) {
					case 1:
						w = [1, 1];
						break;
					case 2:
						w = [12, 11];
						break;
					case 3:
						w = [10, 11];
						break;
					case 4:
						w = [16, 11];
						break;
					case 5:
						w = [40, 33];
						break;
					case 6:
						w = [24, 11];
						break;
					case 7:
						w = [20, 11];
						break;
					case 8:
						w = [32, 11];
						break;
					case 9:
						w = [80, 33];
						break;
					case 10:
						w = [18, 11];
						break;
					case 11:
						w = [15, 11];
						break;
					case 12:
						w = [64, 33];
						break;
					case 13:
						w = [160, 99];
						break;
					case 14:
						w = [4, 3];
						break;
					case 15:
						w = [3, 2];
						break;
					case 16:
						w = [2, 1];
						break;
					case 255:
						w = [d() << 8 | d(), d() << 8 | d()]
					}
					return {
						width: Math.ceil(16 * (i + 1) - 2 * s - 2 * l),
						height: (2 - r) * (n + 1) * 16 - (r ? 2 : 4) * (c + u),
						pixelRatio: w
					}
				},
				e.readSliceType = function() {
					return this.readUByte(),
					this.readUEG(),
					this.readUEG()
				},
				t
			} (),
			o = function() {
				function t(t, e, i, n) {
					this.decryptdata = i,
					this.discardEPB = n,
					this.decrypter = new v.a(t, e, {
						removePKCS7Padding: !1
					})
				}
				var e = t.prototype;
				return e.decryptBuffer = function(t, e) {
					this.decrypter.decrypt(t, this.decryptdata.key.buffer, this.decryptdata.iv.buffer, e)
				},
				e.decryptAacSample = function(e, i, n, r) {
					var a = e[i].unit,
					t = a.subarray(16, a.length - a.length % 16),
					o = t.buffer.slice(t.byteOffset, t.byteOffset + t.length),
					s = this;
					this.decryptBuffer(o,
					function(t) {
						t = new Uint8Array(t),
						a.set(t, 16),
						r || s.decryptAacSamples(e, i + 1, n)
					})
				},
				e.decryptAacSamples = function(t, e, i) {
					for (;; e++) {
						if (e >= t.length) return void i();
						if (! (t[e].unit.length < 32)) {
							var n = this.decrypter.isSync();
							if (this.decryptAacSample(t, e, i, n), !n) return
						}
					}
				},
				e.getAvcEncryptedData = function(t) {
					for (var e = 16 * Math.floor((t.length - 48) / 160) + 16, i = new Int8Array(e), n = 0, r = 32; r <= t.length - 16; r += 160, n += 16) i.set(t.subarray(r, r + 16), n);
					return i
				},
				e.getAvcDecryptedUnit = function(t, e) {
					e = new Uint8Array(e);
					for (var i = 0,
					n = 32; n <= t.length - 16; n += 160, i += 16) t.set(e.subarray(i, i + 16), n);
					return t
				},
				e.decryptAvcSample = function(e, i, n, r, a, o) {
					var s = this.discardEPB(a.data),
					t = this.getAvcEncryptedData(s),
					l = this;
					this.decryptBuffer(t.buffer,
					function(t) {
						a.data = l.getAvcDecryptedUnit(s, t),
						o || l.decryptAvcSamples(e, i, n + 1, r)
					})
				},
				e.decryptAvcSamples = function(t, e, i, n) {
					for (;; e++, i = 0) {
						if (e >= t.length) return void n();
						for (var r = t[e].units; ! (i >= r.length); i++) {
							var a = r[i];
							if (! (a.length <= 48 || 1 !== a.type && 5 !== a.type)) {
								var o = this.decrypter.isSync();
								if (this.decryptAvcSample(t, e, i, n, a, o), !o) return
							}
						}
					}
				},
				t
			} (),
			s = {
				video: 1,
				audio: 2,
				id3: 3,
				text: 4
			},
			_ = function() {
				function I(t, e, i, n) {
					if (this.observer = t, this.config = i, this.typeSupported = n, this.remuxer = e, this.sampleAes = null, this.seiUnit = null, i.sei && i.playsafe) try {
						this.seiUnit = I.createSeiUnit(i.playsafe)
					} catch(t) {
						console.warn(t)
					}
				}
				I.createSeiUnit = function(t) {
					for (var e = t.split("-"), i = function(t) {
						if ("" === t) return "";
						for (var e = [], i = 0; i < t.length; i++) e.push(t.charCodeAt(i).toString(16));
						return e.join("")
					} (e.pop()), n = e.join("") + i, r = [], a = 0; a < n.length; a += 2) r.push(parseInt(n.slice(a, a + 2), 16));
					r.push(0);
					for (var o = [], s = r.length, l = 0; l < parseInt(s / 255); l++) o.push(255);
					return s % 255 && o.push(s % 255),
					{
						type: 6,
						data: new Uint8Array([6, 5].concat(o, r))
					}
				};
				var t = I.prototype;
				return t.setDecryptData = function(t) {
					null != t && null != t.key && "SAMPLE-AES" === t.method ? this.sampleAes = new o(this.observer, this.config, t, this.discardEPB) : this.sampleAes = null
				},
				I.probe = function(t) {
					var e = I._syncOffset(t);
					return ! (e < 0 || (e && et.b.warn("MPEG2-TS detected but first sync word found @ offset " + e + ", junk ahead ?"), 0))
				},
				I._syncOffset = function(t) {
					for (var e = Math.min(1e3, t.length - 564), i = 0; i < e;) {
						if (71 === t[i] && 71 === t[i + 188] && 71 === t[i + 376]) return i;
						i++
					}
					return - 1
				},
				I.createTrack = function(t, e) {
					return {
						container: "video" === t || "audio" === t ? "video/mp2t": void 0,
						type: t,
						id: s[t],
						pid: -1,
						inputTimeScale: 9e4,
						sequenceNumber: 0,
						samples: [],
						dropped: "video" === t ? 0 : void 0,
						isAAC: "audio" === t || void 0,
						duration: "audio" === t ? e: void 0
					}
				},
				t.resetInitSegment = function(t, e, i, n) {
					this.pmtParsed = !1,
					this._pmtId = -1,
					this._avcTrack = I.createTrack("video", n),
					this._audioTrack = I.createTrack("audio", n),
					this._id3Track = I.createTrack("id3", n),
					this._txtTrack = I.createTrack("text", n),
					this.aacOverFlow = null,
					this.aacLastPTS = null,
					this.avcSample = null,
					this.audioCodec = e,
					this.videoCodec = i,
					this._duration = n
				},
				t.resetTimeStamp = function() {},
				t.append = function(t, e, i, n) {
					var r, a, o, s, l, c = t.length,
					u = !1;
					this.contiguous = i;
					var d = this.pmtParsed,
					h = this._avcTrack,
					p = this._audioTrack,
					f = this._id3Track,
					v = h.pid,
					g = p.pid,
					m = f.pid,
					A = this._pmtId,
					y = h.pesData,
					b = p.pesData,
					w = f.pesData,
					k = this._parsePAT,
					E = this._parsePMT,
					x = this._parsePES,
					T = this._parseAVCPES.bind(this),
					S = this._parseAACPES.bind(this),
					_ = this._parseMPEGPES.bind(this),
					C = this._parseID3PES.bind(this),
					L = I._syncOffset(t),
					R = this.seiUnit;
					for (c -= (c + L) % 188, r = L; r < c; r += 188) if (71 === t[r]) {
						if (a = !!(64 & t[r + 1]), o = ((31 & t[r + 1]) << 8) + t[r + 2], 1 < (48 & t[r + 3]) >> 4) {
							if ((s = r + 5 + t[r + 4]) === r + 188) continue
						} else s = r + 4;
						switch (o) {
						case v:
							a && (y && (l = x(y)) && void 0 !== l.pts && T(l, !1), y = {
								data: [],
								size: 0
							}),
							y && (y.data.push(t.subarray(s, r + 188)), y.size += r + 188 - s);
							break;
						case g:
							a && (b && (l = x(b)) && void 0 !== l.pts && (p.isAAC ? S: _)(l), b = {
								data: [],
								size: 0
							}),
							b && (b.data.push(t.subarray(s, r + 188)), b.size += r + 188 - s);
							break;
						case m:
							a && (w && (l = x(w)) && void 0 !== l.pts && C(l), w = {
								data: [],
								size: 0
							}),
							w && (w.data.push(t.subarray(s, r + 188)), w.size += r + 188 - s);
							break;
						case 0:
							a && (s += t[s] + 1),
							A = this._pmtId = k(t, s);
							break;
						case A:
							a && (s += t[s] + 1);
							var D = E(t, s, !0 === this.typeSupported.mpeg || !0 === this.typeSupported.mp3, null != this.sampleAes);
							0 < (v = D.avc) && (h.pid = v),
							0 < (g = D.audio) && (p.pid = g, p.isAAC = D.isAAC),
							0 < (m = D.id3) && (f.pid = m),
							u && !d && (et.b.log("reparse from beginning"), u = !1, r = L - 188),
							d = this.pmtParsed = !0;
							break;
						case 17:
						case 8191:
							break;
						default:
							u = !0
						}
					} else this.observer.trigger($.a.ERROR, {
						type: tt.b.MEDIA_ERROR,
						details: tt.a.FRAG_PARSING_ERROR,
						fatal: !1,
						reason: "TS packet did not start with 0x47"
					});
					y && (l = x(y)) && void 0 !== l.pts ? (T(l, !0, R), h.pesData = null) : h.pesData = y,
					b && (l = x(b)) && void 0 !== l.pts ? ((p.isAAC ? S: _)(l), p.pesData = null) : (b && b.size && et.b.log("last AAC PES packet truncated,might overlap between fragments"), p.pesData = b),
					w && (l = x(w)) && void 0 !== l.pts ? (C(l), f.pesData = null) : f.pesData = w,
					null == this.sampleAes ? this.remuxer.remux(p, h, f, this._txtTrack, e, i, n) : this.decryptAndRemux(p, h, f, this._txtTrack, e, i, n)
				},
				t.decryptAndRemux = function(t, e, i, n, r, a, o) {
					if (t.samples && t.isAAC) {
						var s = this;
						this.sampleAes.decryptAacSamples(t.samples, 0,
						function() {
							s.decryptAndRemuxAvc(t, e, i, n, r, a, o)
						})
					} else this.decryptAndRemuxAvc(t, e, i, n, r, a, o)
				},
				t.decryptAndRemuxAvc = function(t, e, i, n, r, a, o) {
					if (e.samples) {
						var s = this;
						this.sampleAes.decryptAvcSamples(e.samples, 0, 0,
						function() {
							s.remuxer.remux(t, e, i, n, r, a, o)
						})
					} else this.remuxer.remux(t, e, i, n, r, a, o)
				},
				t.destroy = function() {
					this._initPTS = this._initDTS = void 0,
					this._duration = 0
				},
				t._parsePAT = function(t, e) {
					return (31 & t[e + 10]) << 8 | t[e + 11]
				},
				t._parsePMT = function(t, e, i, n) {
					var r, a, o = {
						audio: -1,
						avc: -1,
						id3: -1,
						isAAC: !0
					};
					for (r = e + 3 + ((15 & t[e + 1]) << 8 | t[e + 2]) - 4, e += 12 + ((15 & t[e + 10]) << 8 | t[e + 11]); e < r;) {
						switch (a = (31 & t[e + 1]) << 8 | t[e + 2], t[e]) {
						case 207:
							if (!n) {
								et.b.log("unknown stream type:" + t[e]);
								break
							}
						case 15:
							-1 === o.audio && (o.audio = a);
							break;
						case 21:
							-1 === o.id3 && (o.id3 = a);
							break;
						case 219:
							if (!n) {
								et.b.log("unknown stream type:" + t[e]);
								break
							}
						case 27:
							-1 === o.avc && (o.avc = a);
							break;
						case 3:
						case 4:
							i ? -1 === o.audio && (o.audio = a, o.isAAC = !1) : et.b.log("MPEG audio found, not supported in this browser for now");
							break;
						case 36:
							et.b.warn("HEVC stream type found, not supported for now");
							break;
						default:
							et.b.log("unknown stream type:" + t[e])
						}
						e += 5 + ((15 & t[e + 3]) << 8 | t[e + 4])
					}
					return o
				},
				t._parsePES = function(t) {
					var e, i, n, r, a, o, s, l, c = 0,
					u = t.data;
					if (!t || 0 === t.size) return null;
					for (; u[0].length < 19 && 1 < u.length;) {
						var d = new Uint8Array(u[0].length + u[1].length);
						d.set(u[0]),
						d.set(u[1], u[0].length),
						u[0] = d,
						u.splice(1, 1)
					}
					if (1 !== ((e = u[0])[0] << 16) + (e[1] << 8) + e[2]) return null;
					if ((n = (e[4] << 8) + e[5]) && n > t.size - 6) return null;
					192 & (i = e[7]) && (4294967295 < (o = 536870912 * (14 & e[9]) + 4194304 * (255 & e[10]) + 16384 * (254 & e[11]) + 128 * (255 & e[12]) + (254 & e[13]) / 2) && (o -= 8589934592), 64 & i ? (4294967295 < (s = 536870912 * (14 & e[14]) + 4194304 * (255 & e[15]) + 16384 * (254 & e[16]) + 128 * (255 & e[17]) + (254 & e[18]) / 2) && (s -= 8589934592), 54e5 < o - s && (et.b.warn(Math.round((o - s) / 9e4) + "s delta between PTS and DTS, align them"), o = s)) : s = o),
					l = (r = e[8]) + 9,
					t.size -= l,
					a = new Uint8Array(t.size);
					for (var h = 0,
					p = u.length; h < p; h++) {
						var f = (e = u[h]).byteLength;
						if (l) {
							if (f < l) {
								l -= f;
								continue
							}
							e = e.subarray(l),
							f -= l,
							l = 0
						}
						a.set(e, c),
						c += f
					}
					return n && (n -= r + 3),
					{
						data: a,
						pts: o,
						dts: s,
						len: n
					}
				},
				t.pushAccesUnit = function(t, e) {
					if (t.units.length && t.frame) {
						var i = e.samples,
						n = i.length; ! this.config.forceKeyFrameOnDiscontinuity || !0 === t.key || e.sps && (n || this.contiguous) ? (t.id = n, i.push(t)) : e.dropped++
					}
					t.debug.length && et.b.log(t.pts + "/" + t.dts + ":" + t.debug)
				},
				t._parseAVCPES = function(g, t, e) {
					var m, A, y, b = this,
					w = this._avcTrack,
					i = this._parseAVCNALu(g.data),
					k = this.avcSample,
					E = !1,
					x = this.pushAccesUnit.bind(this),
					T = function(t, e, i, n) {
						return {
							key: t,
							pts: e,
							dts: i,
							units: [],
							debug: n
						}
					};
					if (g.data = null, k && i.length && !w.audFound && (x(k, w), k = this.avcSample = T(!1, g.pts, g.dts, "")), e && i.length) {
						for (var n = !1,
						r = 0; r < i.length; r++) 6 === i[r].type && (n = !0);
						n || i.splice(1, 0, e)
					}
					i.forEach(function(t) {
						switch (t.type) {
						case 1:
							A = !0,
							(k = k || (b.avcSample = T(!0, g.pts, g.dts, ""))).frame = !0;
							var e = t.data;
							if (E && 4 < e.length) {
								var i = new S(e).readSliceType();
								2 !== i && 4 !== i && 7 !== i && 9 !== i || (k.key = !0)
							}
							break;
						case 5:
							A = !0,
							(k = k || (b.avcSample = T(!0, g.pts, g.dts, ""))).key = !0,
							k.frame = !0;
							break;
						case 6:
							A = !0,
							(m = new S(b.discardEPB(t.data))).readUByte();
							for (var n = 0,
							r = 0,
							a = !1,
							o = 0; ! a && 1 < m.bytesAvailable;) {
								for (n = 0; n += o = m.readUByte(), 255 === o;);
								for (r = 0; r += o = m.readUByte(), 255 === o;);
								if (4 === n && 0 !== m.bytesAvailable) {
									if (a = !0, 181 === m.readUByte() && 49 === m.readUShort() && 1195456820 === m.readUInt() && 3 === m.readUByte()) {
										var s = m.readUByte(),
										l = 31 & s,
										c = [s, m.readUByte()];
										for (y = 0; y < l; y++) c.push(m.readUByte()),
										c.push(m.readUByte()),
										c.push(m.readUByte());
										b._insertSampleInOrder(b._txtTrack.samples, {
											type: 3,
											pts: g.pts,
											bytes: c
										})
									}
								} else if (5 === n && 0 !== m.bytesAvailable) {
									if (a = !0, 16 < r) {
										var u = [],
										d = [];
										for (y = 0; y < 16; y++) u.push(m.readUByte().toString(16)),
										3 !== y && 5 !== y && 7 !== y && 9 !== y || u.push("-");
										for (y = 16; y < r; y++) d.push(m.readUByte());
										b._insertSampleInOrder(b._txtTrack.samples, {
											pts: g.pts,
											payloadType: n,
											uuid: u.join(""),
											userData: String.fromCharCode.apply(null, d),
											userDataBytes: d
										})
									}
								} else if (r < m.bytesAvailable) for (y = 0; y < r; y++) m.readUByte()
							}
							break;
						case 7:
							if (E = A = !0, !w.sps) {
								var h = (m = new S(t.data)).readSPS();
								w.width = h.width,
								w.height = h.height,
								w.pixelRatio = h.pixelRatio,
								w.sps = [t.data],
								w.duration = b._duration;
								var p = t.data.subarray(1, 4),
								f = "avc1.";
								for (y = 0; y < 3; y++) {
									var v = p[y].toString(16);
									v.length < 2 && (v = "0" + v),
									f += v
								}
								w.codec = f
							}
							break;
						case 8:
							A = !0,
							w.pps || (w.pps = [t.data]);
							break;
						case 9:
							A = !1,
							w.audFound = !0,
							k && x(k, w),
							k = b.avcSample = T(!1, g.pts, g.dts, "");
							break;
						case 12:
							A = !1;
							break;
						default:
							A = !1,
							k && (k.debug += "unknown NAL " + t.type + " ")
						}
						k && A && k.units.push(t)
					}),
					t && k && (x(k, w), this.avcSample = null)
				},
				t._insertSampleInOrder = function(t, e) {
					var i = t.length;
					if (0 < i) {
						if (e.pts >= t[i - 1].pts) t.push(e);
						else for (var n = i - 1; 0 <= n; n--) if (e.pts < t[n].pts) {
							t.splice(n, 0, e);
							break
						}
					} else t.push(e)
				},
				t._getLastNalUnit = function() {
					var t, e = this.avcSample;
					if (!e || 0 === e.units.length) {
						var i = this._avcTrack.samples;
						e = i[i.length - 1]
					}
					if (e) {
						var n = e.units;
						t = n[n.length - 1]
					}
					return t
				},
				t._parseAVCNALu = function(t) {
					var e, i, n, r, a = 0,
					o = t.byteLength,
					s = this._avcTrack,
					l = s.naluState || 0,
					c = l,
					u = [],
					d = -1;
					for ( - 1 === l && (r = 31 & t[d = 0], l = 0, a = 1); a < o;) if (e = t[a++], l) if (1 !== l) if (e) if (1 === e) {
						if (0 <= d) n = {
							data: t.subarray(d, a - l - 1),
							type: r
						},
						u.push(n);
						else {
							var h = this._getLastNalUnit();
							if (h && (c && a <= 4 - c && h.state && (h.data = h.data.subarray(0, h.data.byteLength - c)), 0 < (i = a - l - 1))) {
								var p = new Uint8Array(h.data.byteLength + i);
								p.set(h.data, 0),
								p.set(t.subarray(0, i), h.data.byteLength),
								h.data = p
							}
						}
						l = a < o ? (r = 31 & t[d = a], 0) : -1
					} else l = 0;
					else l = 3;
					else l = e ? 0 : 2;
					else l = e ? 0 : 1;
					if (0 <= d && 0 <= l && (n = {
						data: t.subarray(d, o),
						type: r,
						state: l
					},
					u.push(n)), 0 === u.length) {
						var f = this._getLastNalUnit();
						if (f) {
							var v = new Uint8Array(f.data.byteLength + t.byteLength);
							v.set(f.data, 0),
							v.set(t, f.data.byteLength),
							f.data = v
						}
					}
					return s.naluState = l,
					u
				},
				t.discardEPB = function(t) {
					for (var e, i, n = t.byteLength,
					r = [], a = 1; a < n - 2;) 0 === t[a] && 0 === t[a + 1] && 3 === t[a + 2] ? (r.push(a + 2), a += 2) : a++;
					if (0 === r.length) return t;
					e = n - r.length,
					i = new Uint8Array(e);
					var o = 0;
					for (a = 0; a < e; o++, a++) o === r[0] && (o++, r.shift()),
					i[a] = t[o];
					return i
				},
				t._parseAACPES = function(t) {
					var e, i, n, r, a, o, s, l = this._audioTrack,
					c = t.data,
					u = t.pts,
					d = this.aacOverFlow,
					h = this.aacLastPTS;
					if (d) {
						var p = new Uint8Array(d.byteLength + c.byteLength);
						p.set(d, 0),
						p.set(c, d.byteLength),
						c = p
					}
					for (n = 0, a = c.length; n < a - 1 && !g(c, n); n++);
					if (!n || (s = n < a - 1 ? (o = "AAC PES did not start with ADTS header,offset:" + n, !1) : (o = "no ADTS header found in AAC PES", !0), et.b.warn("parsing error:" + o), this.observer.trigger($.a.ERROR, {
						type: tt.b.MEDIA_ERROR,
						details: tt.a.FRAG_PARSING_ERROR,
						fatal: s,
						reason: o
					}), !s)) {
						if (m(l, this.observer, c, n, this.audioCodec), i = 0, e = A(l.samplerate), d && h) {
							var f = h + e;
							1 < Math.abs(f - u) && (et.b.log("AAC: align PTS for overlapping frames by " + Math.round((f - u) / 90)), u = f)
						}
						for (; n < a;) if (g(c, n) && n + 5 < a) {
							var v = y(l, c, n, u, i);
							if (!v) break;
							n += v.length,
							r = v.sample.pts,
							i++
						} else n++;
						d = n < a ? c.subarray(n, a) : null,
						this.aacOverFlow = d,
						this.aacLastPTS = r
					}
				},
				t._parseMPEGPES = function(t) {
					for (var e = t.data,
					i = e.length,
					n = 0,
					r = 0,
					a = t.pts; r < i;) if (T.isHeader(e, r)) {
						var o = T.appendFrame(this._audioTrack, e, r, a, n);
						if (!o) break;
						r += o.length,
						n++
					} else r++
				},
				t._parseID3PES = function(t) {
					this._id3Track.samples.push(t)
				},
				I
			} (),
			C = function() {
				function t(t, e, i) {
					this.observer = t,
					this.config = i,
					this.remuxer = e
				}
				var e = t.prototype;
				return e.resetInitSegment = function(t, e, i, n) {
					this._audioTrack = {
						container: "audio/mpeg",
						type: "audio",
						id: -1,
						sequenceNumber: 0,
						isAAC: !1,
						samples: [],
						len: 0,
						manifestCodec: e,
						duration: n,
						inputTimeScale: 9e4
					}
				},
				e.resetTimeStamp = function() {},
				t.probe = function(t) {
					var e, i, n = w.a.getID3Data(t, 0);
					if (n && void 0 !== w.a.getTimeStamp(n)) for (e = n.length, i = Math.min(t.length - 1, e + 100); e < i; e++) if (T.probe(t, e)) return et.b.log("MPEG Audio sync word found !"),
					!0;
					return ! 1
				},
				e.append = function(t, e, i, n) {
					for (var r = w.a.getID3Data(t, 0), a = w.a.getTimeStamp(r), o = a ? 90 * a: 9e4 * e, s = r.length, l = t.length, c = 0, u = 0, d = this._audioTrack, h = [{
						pts: o,
						dts: o,
						data: r
					}]; s < l;) if (T.isHeader(t, s)) {
						var p = T.appendFrame(d, t, s, o, c);
						if (!p) break;
						s += p.length,
						u = p.sample.pts,
						c++
					} else w.a.isHeader(t, s) ? (r = w.a.getID3Data(t, s), h.push({
						pts: u,
						dts: u,
						data: r
					}), s += r.length) : s++;
					this.remuxer.remux(d, {
						samples: []
					},
					{
						samples: h,
						inputTimeScale: 9e4
					},
					{
						samples: []
					},
					e, i, n)
				},
				e.destroy = function() {},
				t
			} (),
			G = function() {
				function t() {}
				return t.getSilentFrame = function(t, e) {
					switch (t) {
					case "mp4a.40.2":
						if (1 === e) return new Uint8Array([0, 200, 0, 128, 35, 128]);
						if (2 === e) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
						if (3 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
						if (4 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
						if (5 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
						if (6 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
						break;
					default:
						if (1 === e) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
						if (2 === e) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
						if (3 === e) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94])
					}
					return null
				},
				t
			} (),
			l = Math.pow(2, 32) - 1,
			it = function() {
				function h() {}
				return h.init = function() {
					var t;
					for (t in h.types = {
						avc1: [],
						avcC: [],
						btrt: [],
						dinf: [],
						dref: [],
						esds: [],
						ftyp: [],
						hdlr: [],
						mdat: [],
						mdhd: [],
						mdia: [],
						mfhd: [],
						minf: [],
						moof: [],
						moov: [],
						mp4a: [],
						".mp3": [],
						mvex: [],
						mvhd: [],
						pasp: [],
						sdtp: [],
						stbl: [],
						stco: [],
						stsc: [],
						stsd: [],
						stsz: [],
						stts: [],
						tfdt: [],
						tfhd: [],
						traf: [],
						trak: [],
						trun: [],
						trex: [],
						tkhd: [],
						vmhd: [],
						smhd: []
					}) h.types.hasOwnProperty(t) && (h.types[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]);
					var e = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
					i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
					h.HDLR_TYPES = {
						video: e,
						audio: i
					};
					var n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
					r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
					h.STTS = h.STSC = h.STCO = r,
					h.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
					h.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]),
					h.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]),
					h.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
					var a = new Uint8Array([105, 115, 111, 109]),
					o = new Uint8Array([97, 118, 99, 49]),
					s = new Uint8Array([0, 0, 0, 1]);
					h.FTYP = h.box(h.types.ftyp, a, s, a, o),
					h.DINF = h.box(h.types.dinf, h.box(h.types.dref, n))
				},
				h.box = function(t) {
					for (var e, i = Array.prototype.slice.call(arguments, 1), n = 8, r = i.length, a = r; r--;) n += i[r].byteLength;
					for ((e = new Uint8Array(n))[0] = n >> 24 & 255, e[1] = n >> 16 & 255, e[2] = n >> 8 & 255, e[3] = 255 & n, e.set(t, 4), r = 0, n = 8; r < a; r++) e.set(i[r], n),
					n += i[r].byteLength;
					return e
				},
				h.hdlr = function(t) {
					return h.box(h.types.hdlr, h.HDLR_TYPES[t])
				},
				h.mdat = function(t) {
					return h.box(h.types.mdat, t)
				},
				h.mdhd = function(t, e) {
					e *= t;
					var i = Math.floor(e / (1 + l)),
					n = Math.floor(e % (1 + l));
					return h.box(h.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 85, 196, 0, 0]))
				},
				h.mdia = function(t) {
					return h.box(h.types.mdia, h.mdhd(t.timescale, t.duration), h.hdlr(t.type), h.minf(t))
				},
				h.mfhd = function(t) {
					return h.box(h.types.mfhd, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t]))
				},
				h.minf = function(t) {
					return "audio" === t.type ? h.box(h.types.minf, h.box(h.types.smhd, h.SMHD), h.DINF, h.stbl(t)) : h.box(h.types.minf, h.box(h.types.vmhd, h.VMHD), h.DINF, h.stbl(t))
				},
				h.moof = function(t, e, i) {
					return h.box(h.types.moof, h.mfhd(t), h.traf(i, e))
				},
				h.moov = function(t) {
					for (var e = t.length,
					i = []; e--;) i[e] = h.trak(t[e]);
					return h.box.apply(null, [h.types.moov, h.mvhd(t[0].timescale, t[0].duration)].concat(i).concat(h.mvex(t)))
				},
				h.mvex = function(t) {
					for (var e = t.length,
					i = []; e--;) i[e] = h.trex(t[e]);
					return h.box.apply(null, [h.types.mvex].concat(i))
				},
				h.mvhd = function(t, e) {
					e *= t;
					var i = Math.floor(e / (1 + l)),
					n = Math.floor(e % (1 + l)),
					r = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
					return h.box(h.types.mvhd, r)
				},
				h.sdtp = function(t) {
					var e, i, n = t.samples || [],
					r = new Uint8Array(4 + n.length);
					for (i = 0; i < n.length; i++) e = n[i].flags,
					r[i + 4] = e.dependsOn << 4 | e.isDependedOn << 2 | e.hasRedundancy;
					return h.box(h.types.sdtp, r)
				},
				h.stbl = function(t) {
					return h.box(h.types.stbl, h.stsd(t), h.box(h.types.stts, h.STTS), h.box(h.types.stsc, h.STSC), h.box(h.types.stsz, h.STSZ), h.box(h.types.stco, h.STCO))
				},
				h.avc1 = function(t) {
					var e, i, n, r = [],
					a = [];
					for (e = 0; e < t.sps.length; e++) n = (i = t.sps[e]).byteLength,
					r.push(n >>> 8 & 255),
					r.push(255 & n),
					r = r.concat(Array.prototype.slice.call(i));
					for (e = 0; e < t.pps.length; e++) n = (i = t.pps[e]).byteLength,
					a.push(n >>> 8 & 255),
					a.push(255 & n),
					a = a.concat(Array.prototype.slice.call(i));
					var o = h.box(h.types.avcC, new Uint8Array([1, r[3], r[4], r[5], 255, 224 | t.sps.length].concat(r).concat([t.pps.length]).concat(a))),
					s = t.width,
					l = t.height,
					c = t.pixelRatio[0],
					u = t.pixelRatio[1];
					return h.box(h.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, s >> 8 & 255, 255 & s, l >> 8 & 255, 255 & l, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), o, h.box(h.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), h.box(h.types.pasp, new Uint8Array([c >> 24, c >> 16 & 255, c >> 8 & 255, 255 & c, u >> 24, u >> 16 & 255, u >> 8 & 255, 255 & u])))
				},
				h.esds = function(t) {
					var e = t.config.length;
					return new Uint8Array([0, 0, 0, 0, 3, 23 + e, 0, 1, 0, 4, 15 + e, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([e]).concat(t.config).concat([6, 1, 2]))
				},
				h.mp4a = function(t) {
					var e = t.samplerate;
					return h.box(h.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, e >> 8 & 255, 255 & e, 0, 0]), h.box(h.types.esds, h.esds(t)))
				},
				h.mp3 = function(t) {
					var e = t.samplerate;
					return h.box(h.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, e >> 8 & 255, 255 & e, 0, 0]))
				},
				h.stsd = function(t) {
					return "audio" === t.type ? t.isAAC || "mp3" !== t.codec ? h.box(h.types.stsd, h.STSD, h.mp4a(t)) : h.box(h.types.stsd, h.STSD, h.mp3(t)) : h.box(h.types.stsd, h.STSD, h.avc1(t))
				},
				h.tkhd = function(t) {
					var e = t.id,
					i = t.duration * t.timescale,
					n = t.width,
					r = t.height,
					a = Math.floor(i / (1 + l)),
					o = Math.floor(i % (1 + l));
					return h.box(h.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, 0, 0, 0, 0, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, n >> 8 & 255, 255 & n, 0, 0, r >> 8 & 255, 255 & r, 0, 0]))
				},
				h.traf = function(t, e) {
					var i = h.sdtp(t),
					n = t.id,
					r = Math.floor(e / (1 + l)),
					a = Math.floor(e % (1 + l));
					return h.box(h.types.traf, h.box(h.types.tfhd, new Uint8Array([0, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n])), h.box(h.types.tfdt, new Uint8Array([1, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a])), h.trun(t, i.length + 16 + 20 + 8 + 16 + 8 + 8), i)
				},
				h.trak = function(t) {
					return t.duration = t.duration || 4294967295,
					h.box(h.types.trak, h.tkhd(t), h.mdia(t))
				},
				h.trex = function(t) {
					var e = t.id;
					return h.box(h.types.trex, new Uint8Array([0, 0, 0, 0, e >> 24, e >> 16 & 255, e >> 8 & 255, 255 & e, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))
				},
				h.trun = function(t, e) {
					var i, n, r, a, o, s, l = t.samples || [],
					c = l.length,
					u = 12 + 16 * c,
					d = new Uint8Array(u);
					for (e += 8 + u, d.set([0, 0, 15, 1, c >>> 24 & 255, c >>> 16 & 255, c >>> 8 & 255, 255 & c, e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e], 0), i = 0; i < c; i++) r = (n = l[i]).duration,
					a = n.size,
					o = n.flags,
					s = n.cts,
					d.set([r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r, a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, 255 & a, o.isLeading << 2 | o.dependsOn, o.isDependedOn << 6 | o.hasRedundancy << 4 | o.paddingValue << 1 | o.isNonSync, 61440 & o.degradPrio, 15 & o.degradPrio, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s], 12 + 16 * i);
					return h.box(h.types.trun, d)
				},
				h.initSegment = function(t) {
					h.types || h.init();
					var e, i = h.moov(t);
					return (e = new Uint8Array(h.FTYP.byteLength + i.byteLength)).set(h.FTYP),
					e.set(i, h.FTYP.byteLength),
					e
				},
				h
			} (),
			L = function() {
				function t(t, e, i, n) {
					this.observer = t,
					this.config = e,
					this.typeSupported = i;
					var r = navigator.userAgent;
					this.isSafari = n && -1 < n.indexOf("Apple") && r && !r.match("CriOS"),
					this.ISGenerated = !1
				}
				var e = t.prototype;
				return e.destroy = function() {},
				e.resetTimeStamp = function(t) {
					this._initPTS = this._initDTS = t
				},
				e.resetInitSegment = function() {
					this.ISGenerated = !1
				},
				e.remux = function(t, e, i, n, r, a, o) {
					if (this.ISGenerated || this.generateIS(t, e, r), this.ISGenerated) {
						var s = t.samples.length,
						l = e.samples.length,
						c = r,
						u = r;
						if (s && l) {
							var d = (t.samples[0].pts - e.samples[0].pts) / e.inputTimeScale;
							c += Math.max(0, d),
							u += Math.max(0, -d)
						}
						if (s) {
							t.timescale || (et.b.warn("regenerate InitSegment as audio detected"), this.generateIS(t, e, r));
							var h, p = this.remuxAudio(t, c, a, o);
							l && (p && (h = p.endPTS - p.startPTS), e.timescale || (et.b.warn("regenerate InitSegment as video detected"), this.generateIS(t, e, r)), this.remuxVideo(e, u, a, h, o))
						} else if (l) {
							var f = this.remuxVideo(e, u, a, 0, o);
							f && t.codec && this.remuxEmptyAudio(t, c, a, f)
						}
					}
					i.samples.length && this.remuxID3(i, r),
					n.samples.length && this.remuxText(n, r),
					this.observer.trigger($.a.FRAG_PARSED)
				},
				e.generateIS = function(t, e, i) {
					var n, r, a = this.observer,
					o = t.samples,
					s = e.samples,
					l = this.typeSupported,
					c = "audio/mp4",
					u = {},
					d = {
						tracks: u
					},
					h = void 0 === this._initPTS;
					if (h && (n = r = 1 / 0), t.config && o.length && (t.timescale = t.samplerate, et.b.log("audio sampling rate : " + t.samplerate), t.isAAC || (l.mpeg ? (c = "audio/mpeg", t.codec = "") : l.mp3 && (t.codec = "mp3")), u.audio = {
						container: c,
						codec: t.codec,
						initSegment: !t.isAAC && l.mpeg ? new Uint8Array: it.initSegment([t]),
						metadata: {
							channelCount: t.channelCount
						}
					},
					h && (n = r = o[0].pts - t.inputTimeScale * i)), e.sps && e.pps && s.length) {
						var p = e.inputTimeScale;
						e.timescale = p,
						u.video = {
							container: "video/mp4",
							codec: e.codec,
							initSegment: it.initSegment([e]),
							metadata: {
								width: e.width,
								height: e.height
							}
						},
						h && (n = Math.min(n, s[0].pts - p * i), r = Math.min(r, s[0].dts - p * i), this.observer.trigger($.a.INIT_PTS_FOUND, {
							initPTS: n
						}))
					}
					Object.keys(u).length ? (a.trigger($.a.FRAG_PARSING_INIT_SEGMENT, d), this.ISGenerated = !0, h && (this._initPTS = n, this._initDTS = r)) : a.trigger($.a.ERROR, {
						type: tt.b.MEDIA_ERROR,
						details: tt.a.FRAG_PARSING_ERROR,
						fatal: !1,
						reason: "no audio/video samples found"
					})
				},
				e.remuxVideo = function(t, e, i, n, r) {
					var a, o, s, l, c, u, d, h = 8,
					p = t.timescale,
					f = t.samples,
					v = [],
					g = f.length,
					m = this._PTSNormalize,
					A = this._initPTS,
					y = this.nextAvcDts,
					b = this.isSafari;
					if (0 !== g) {
						b && (i |= f.length && y && (r && Math.abs(e - y / p) < .1 || Math.abs(f[0].pts - y - A) < p / 5)),
						i || (y = e * p),
						f.forEach(function(t) {
							t.pts = m(t.pts - A, y),
							t.dts = m(t.dts - A, y)
						}),
						f.sort(function(t, e) {
							var i = t.dts - e.dts,
							n = t.pts - e.pts;
							return i || n || t.id - e.id
						});
						var w = f.reduce(function(t, e) {
							return Math.max(Math.min(t, e.pts - e.dts), -18e3)
						},
						0);
						if (w < 0) {
							et.b.warn("PTS < DTS detected in video samples, shifting DTS by " + Math.round(w / 90) + " ms to overcome this issue");
							for (var k = 0; k < f.length; k++) f[k].dts += w
						}
						var E = f[0];
						c = Math.max(E.dts, 0),
						l = Math.max(E.pts, 0);
						var x = Math.round((c - y) / 90);
						i && x && (1 < x ? et.b.log("AVC:" + x + " ms hole between fragments detected,filling it") : x < -1 && et.b.log("AVC:" + -x + " ms overlapping between fragments detected"), c = y, f[0].dts = c, l = Math.max(l - x, y), f[0].pts = l, et.b.log("Video/PTS/DTS adjusted: " + Math.round(l / 90) + "/" + Math.round(c / 90) + ",delta:" + x + " ms")),
						E = f[f.length - 1],
						d = Math.max(E.dts, 0),
						u = Math.max(E.pts, 0, d),
						b && (a = Math.round((d - c) / (f.length - 1)));
						for (var T = 0,
						S = 0,
						_ = 0; _ < g; _++) {
							for (var C = f[_], L = C.units, R = L.length, D = 0, I = 0; I < R; I++) D += L[I].data.length;
							S += D,
							T += R,
							C.length = D,
							C.dts = b ? c + _ * a: Math.max(C.dts, c),
							C.pts = Math.max(C.pts, C.dts)
						}
						var M = S + 4 * T + 8;
						try {
							o = new Uint8Array(M)
						} catch(t) {
							return void this.observer.trigger($.a.ERROR, {
								type: tt.b.MUX_ERROR,
								details: tt.a.REMUX_ALLOC_ERROR,
								fatal: !1,
								bytes: M,
								reason: "fail allocating video mdat " + M
							})
						}
						var P = new DataView(o.buffer);
						P.setUint32(0, M),
						o.set(it.types.mdat, 4);
						for (var O = 0; O < g; O++) {
							for (var B = f[O], F = B.units, N = 0, U = void 0, q = 0, j = F.length; q < j; q++) {
								var z = F[q],
								V = z.data,
								H = z.data.byteLength;
								P.setUint32(h, H),
								h += 4,
								o.set(V, h),
								h += H,
								N += 4 + H
							}
							if (b) U = Math.max(0, a * Math.round((B.pts - B.dts) / a));
							else {
								if (O < g - 1) a = f[O + 1].dts - B.dts;
								else {
									var G = this.config,
									Y = B.dts - f[0 < O ? O - 1 : O].dts;
									if (G.stretchShortVideoTrack) {
										var W = G.maxBufferHole,
										K = Math.floor(W * p),
										Q = (n ? l + n * p: this.nextAudioPts) - B.pts;
										K < Q ? ((a = Q - Y) < 0 && (a = Y), et.b.log("It is approximately " + Q / 90 + " ms to the next segment; using duration " + a / 90 + " ms for the last video frame.")) : a = Y
									} else a = Y
								}
								U = Math.round(B.pts - B.dts)
							}
							v.push({
								size: N,
								duration: a,
								cts: U,
								flags: {
									isLeading: 0,
									isDependedOn: 0,
									hasRedundancy: 0,
									degradPrio: 0,
									dependsOn: B.key ? 2 : 1,
									isNonSync: B.key ? 0 : 1
								}
							})
						}
						this.nextAvcDts = d + a;
						var X = t.dropped;
						if (t.nbNalu = 0, t.dropped = 0, v.length && -1 < navigator.userAgent.toLowerCase().indexOf("chrome")) {
							var J = v[0].flags;
							J.dependsOn = 2,
							J.isNonSync = 0
						}
						t.samples = v,
						s = it.moof(t.sequenceNumber++, c, t),
						t.samples = [];
						var Z = {
							data1: s,
							data2: o,
							startPTS: l / p,
							endPTS: (u + a) / p,
							startDTS: c / p,
							endDTS: this.nextAvcDts / p,
							type: "video",
							hasAudio: !1,
							hasVideo: !0,
							nb: v.length,
							dropped: X
						};
						return this.observer.trigger($.a.FRAG_PARSING_DATA, Z),
						Z
					}
				},
				e.remuxAudio = function(t, e, i, n) {
					var r, a, o, s, l, c, u = t.inputTimeScale,
					d = t.timescale,
					h = u / d,
					p = (t.isAAC ? 1024 : 1152) * h,
					f = this._PTSNormalize,
					v = this._initPTS,
					g = !t.isAAC && this.typeSupported.mpeg,
					m = g ? 0 : 8,
					A = t.samples,
					y = [],
					b = this.nextAudioPts;
					if (i |= A.length && b && (n && Math.abs(e - b / u) < .1 || Math.abs(A[0].pts - b - v) < 20 * p), A.forEach(function(t) {
						t.pts = t.dts = f(t.pts - v, e * u)
					}), 0 !== (A = A.filter(function(t) {
						return 0 <= t.pts
					})).length) {
						if (i || (b = n ? e * u: A[0].pts), t.isAAC) for (var w = this.config.maxAudioFramesDrift,
						k = 0,
						E = b; k < A.length;) {
							var x, T = A[k];
							x = T.pts - E;
							var S = Math.abs(1e3 * x / u);
							if (x <= -w * p) et.b.warn("Dropping 1 audio frame @ " + (E / u).toFixed(3) + "s due to " + Math.round(S) + " ms overlap."),
							A.splice(k, 1);
							else if (w * p <= x && S < 1e4 && E) {
								var _ = Math.round(x / p);
								et.b.warn("Injecting " + _ + " audio frame @ " + (E / u).toFixed(3) + "s due to " + Math.round(1e3 * x / u) + " ms gap.");
								for (var C = 0; C < _; C++) {
									var L = Math.max(E, 0); (a = G.getSilentFrame(t.manifestCodec || t.codec, t.channelCount)) || (et.b.log("Unable to get silent frame for given audio codec; duplicating last frame instead."), a = T.unit.subarray()),
									A.splice(k, 0, {
										unit: a,
										pts: L,
										dts: L
									}),
									E += p,
									k++
								}
								T.pts = T.dts = E,
								E += p,
								k++
							} else Math.abs(x),
							T.pts = T.dts = E,
							E += p,
							k++
						}
						for (var R = A.length,
						D = 0; R--;) D += A[R].unit.byteLength;
						for (var I = 0,
						M = A.length; I < M; I++) {
							var P = A[I],
							O = P.unit,
							B = P.pts;
							if (void 0 !== c) r.duration = Math.round((B - c) / h);
							else {
								var F = Math.round(1e3 * (B - b) / u),
								N = 0;
								if (i && t.isAAC && F) {
									if (0 < F && F < 1e4) N = Math.round((B - b) / p),
									et.b.log(F + " ms hole between AAC samples detected,filling it"),
									0 < N && ((a = G.getSilentFrame(t.manifestCodec || t.codec, t.channelCount)) || (a = O.subarray()), D += N * a.length);
									else if (F < -12) {
										et.b.log("drop overlapping AAC sample, expected/parsed/delta:" + (b / u).toFixed(3) + "s/" + (B / u).toFixed(3) + "s/" + -F + "ms"),
										D -= O.byteLength;
										continue
									}
									B = b
								}
								if (l = B, !(0 < D)) return;
								D += m;
								try {
									o = new Uint8Array(D)
								} catch(t) {
									return void this.observer.trigger($.a.ERROR, {
										type: tt.b.MUX_ERROR,
										details: tt.a.REMUX_ALLOC_ERROR,
										fatal: !1,
										bytes: D,
										reason: "fail allocating audio mdat " + D
									})
								}
								g || (new DataView(o.buffer).setUint32(0, D), o.set(it.types.mdat, 4));
								for (var U = 0; U < N; U++)(a = G.getSilentFrame(t.manifestCodec || t.codec, t.channelCount)) || (et.b.log("Unable to get silent frame for given audio codec; duplicating this frame instead."), a = O.subarray()),
								o.set(a, m),
								m += a.byteLength,
								r = {
									size: a.byteLength,
									cts: 0,
									duration: 1024,
									flags: {
										isLeading: 0,
										isDependedOn: 0,
										hasRedundancy: 0,
										degradPrio: 0,
										dependsOn: 1
									}
								},
								y.push(r)
							}
							o.set(O, m);
							var q = O.byteLength;
							m += q,
							r = {
								size: q,
								cts: 0,
								duration: 0,
								flags: {
									isLeading: 0,
									isDependedOn: 0,
									hasRedundancy: 0,
									degradPrio: 0,
									dependsOn: 1
								}
							},
							y.push(r),
							c = B
						}
						var j = 0;
						if (2 <= (R = y.length) && (j = y[R - 2].duration, r.duration = j), R) {
							this.nextAudioPts = b = c + h * j,
							t.samples = y,
							s = g ? new Uint8Array: it.moof(t.sequenceNumber++, l / h, t),
							t.samples = [];
							var z = l / u,
							V = b / u,
							H = {
								data1: s,
								data2: o,
								startPTS: z,
								endPTS: V,
								startDTS: z,
								endDTS: V,
								type: "audio",
								hasAudio: !0,
								hasVideo: !1,
								nb: R
							};
							return this.observer.trigger($.a.FRAG_PARSING_DATA, H),
							H
						}
						return null
					}
				},
				e.remuxEmptyAudio = function(t, e, i, n) {
					var r = t.inputTimeScale,
					a = r / (t.samplerate ? t.samplerate: r),
					o = this.nextAudioPts,
					s = (void 0 !== o ? o: n.startDTS * r) + this._initDTS,
					l = n.endDTS * r + this._initDTS,
					c = 1024 * a,
					u = Math.ceil((l - s) / c),
					d = G.getSilentFrame(t.manifestCodec || t.codec, t.channelCount);
					if (et.b.warn("remux empty Audio"), d) {
						for (var h = [], p = 0; p < u; p++) {
							var f = s + p * c;
							h.push({
								unit: d,
								pts: f,
								dts: f
							})
						}
						t.samples = h,
						this.remuxAudio(t, e, i)
					} else et.b.trace("Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!")
				},
				e.remuxID3 = function(t) {
					var e, i = t.samples.length,
					n = t.inputTimeScale,
					r = this._initPTS,
					a = this._initDTS;
					if (i) {
						for (var o = 0; o < i; o++)(e = t.samples[o]).pts = (e.pts - r) / n,
						e.dts = (e.dts - a) / n;
						this.observer.trigger($.a.FRAG_PARSING_METADATA, {
							samples: t.samples
						})
					}
					t.samples = []
				},
				e.remuxText = function(t) {
					t.samples.sort(function(t, e) {
						return t.pts - e.pts
					});
					var e, i = t.samples.length,
					n = t.inputTimeScale,
					r = this._initPTS;
					if (i) {
						for (var a = 0; a < i; a++)(e = t.samples[a]).pts = (e.pts - r) / n;
						this.observer.trigger($.a.FRAG_PARSING_USERDATA, {
							samples: t.samples
						})
					}
					t.samples = []
				},
				e._PTSNormalize = function(t, e) {
					var i;
					if (void 0 === e) return t;
					for (i = e < t ? -8589934592 : 8589934592; 4294967296 < Math.abs(t - e);) t += i;
					return t
				},
				t
			} (),
			R = function() {
				function t(t) {
					this.observer = t
				}
				var e = t.prototype;
				return e.destroy = function() {},
				e.resetTimeStamp = function() {},
				e.resetInitSegment = function() {},
				e.remux = function(t, e, i, n, r, a, o, s) {
					var l = this.observer,
					c = "";
					t && (c += "audio"),
					e && (c += "video"),
					l.trigger($.a.FRAG_PARSING_DATA, {
						data1: s,
						startPTS: r,
						startDTS: r,
						type: c,
						hasAudio: !!t,
						hasVideo: !!e,
						nb: 1,
						dropped: 0
					}),
					l.trigger($.a.FRAG_PARSED)
				},
				t
			} (),
			c = Object(n.a)();
			try {
				b = c.performance.now.bind(c.performance)
			} catch(t) {
				et.b.debug("Unable to use Performance API on this environment"),
				b = c.Date.now
			}
			var h = function() {
				function t(t, e, i, n) {
					this.observer = t,
					this.typeSupported = e,
					this.config = i,
					this.vendor = n
				}
				var e = t.prototype;
				return e.destroy = function() {
					var t = this.demuxer;
					t && t.destroy()
				},
				e.push = function(t, i, n, r, a, o, s, l, c, u, d, h) {
					var p = this;
					if (0 < t.byteLength && null != i && null != i.key && "AES-128" === i.method) {
						var e = this.decrypter;
						null == e && (e = this.decrypter = new v.a(this.observer, this.config));
						var f = b();
						e.decrypt(t, i.key.buffer, i.iv.buffer,
						function(t) {
							var e = b();
							p.observer.trigger($.a.FRAG_DECRYPTED, {
								stats: {
									tstart: f,
									tdecrypt: e
								}
							}),
							p.pushDecrypted(new Uint8Array(t), i, new Uint8Array(n), r, a, o, s, l, c, u, d, h)
						})
					} else this.pushDecrypted(new Uint8Array(t), i, new Uint8Array(n), r, a, o, s, l, c, u, d, h)
				},
				e.pushDecrypted = function(t, e, i, n, r, a, o, s, l, c, u, d) {
					var h = this.demuxer;
					if (!h || (o || s) && !this.probe(t)) {
						for (var p = this.observer,
						f = this.typeSupported,
						v = this.config,
						g = [{
							demux: _,
							remux: L
						},
						{
							demux: x.a,
							remux: R
						},
						{
							demux: E,
							remux: L
						},
						{
							demux: C,
							remux: L
						}], m = 0, A = g.length; m < A; m++) {
							var y = g[m],
							b = y.demux.probe;
							if (b(t)) {
								var w = this.remuxer = new y.remux(p, v, f, this.vendor);
								h = new y.demux(p, w, v, f),
								this.probe = b;
								break
							}
						}
						if (!h) return void p.trigger($.a.ERROR, {
							type: tt.b.MEDIA_ERROR,
							details: tt.a.FRAG_PARSING_ERROR,
							fatal: !0,
							reason: "no demux matching with content found"
						});
						this.demuxer = h
					}
					var k = this.remuxer; (o || s) && (h.resetInitSegment(i, n, r, c), k.resetInitSegment()),
					o && (h.resetTimeStamp(d), k.resetTimeStamp(d)),
					"function" == typeof h.setDecryptData && h.setDecryptData(e),
					h.append(t, a, l, u)
				},
				t
			} ();
			e.a = h
		},
		function(t, e, i) {
			var m, A, y, b, w;
			m = i(14),
			A = i(12).utf8,
			y = i(15),
			b = i(12).bin,
			(w = function(t, e) {
				t.constructor == String ? t = e && "binary" === e.encoding ? b.stringToBytes(t) : A.stringToBytes(t) : y(t) ? t = Array.prototype.slice.call(t, 0) : Array.isArray(t) || (t = t.toString());
				for (var i = m.bytesToWords(t), n = 8 * t.length, r = 1732584193, a = -271733879, o = -1732584194, s = 271733878, l = 0; l < i.length; l++) i[l] = 16711935 & (i[l] << 8 | i[l] >>> 24) | 4278255360 & (i[l] << 24 | i[l] >>> 8);
				i[n >>> 5] |= 128 << n % 32,
				i[14 + (64 + n >>> 9 << 4)] = n;
				var c = w._ff,
				u = w._gg,
				d = w._hh,
				h = w._ii;
				for (l = 0; l < i.length; l += 16) {
					var p = r,
					f = a,
					v = o,
					g = s;
					r = c(r, a, o, s, i[l + 0], 7, -680876936),
					s = c(s, r, a, o, i[l + 1], 12, -389564586),
					o = c(o, s, r, a, i[l + 2], 17, 606105819),
					a = c(a, o, s, r, i[l + 3], 22, -1044525330),
					r = c(r, a, o, s, i[l + 4], 7, -176418897),
					s = c(s, r, a, o, i[l + 5], 12, 1200080426),
					o = c(o, s, r, a, i[l + 6], 17, -1473231341),
					a = c(a, o, s, r, i[l + 7], 22, -45705983),
					r = c(r, a, o, s, i[l + 8], 7, 1770035416),
					s = c(s, r, a, o, i[l + 9], 12, -1958414417),
					o = c(o, s, r, a, i[l + 10], 17, -42063),
					a = c(a, o, s, r, i[l + 11], 22, -1990404162),
					r = c(r, a, o, s, i[l + 12], 7, 1804603682),
					s = c(s, r, a, o, i[l + 13], 12, -40341101),
					o = c(o, s, r, a, i[l + 14], 17, -1502002290),
					r = u(r, a = c(a, o, s, r, i[l + 15], 22, 1236535329), o, s, i[l + 1], 5, -165796510),
					s = u(s, r, a, o, i[l + 6], 9, -1069501632),
					o = u(o, s, r, a, i[l + 11], 14, 643717713),
					a = u(a, o, s, r, i[l + 0], 20, -373897302),
					r = u(r, a, o, s, i[l + 5], 5, -701558691),
					s = u(s, r, a, o, i[l + 10], 9, 38016083),
					o = u(o, s, r, a, i[l + 15], 14, -660478335),
					a = u(a, o, s, r, i[l + 4], 20, -405537848),
					r = u(r, a, o, s, i[l + 9], 5, 568446438),
					s = u(s, r, a, o, i[l + 14], 9, -1019803690),
					o = u(o, s, r, a, i[l + 3], 14, -187363961),
					a = u(a, o, s, r, i[l + 8], 20, 1163531501),
					r = u(r, a, o, s, i[l + 13], 5, -1444681467),
					s = u(s, r, a, o, i[l + 2], 9, -51403784),
					o = u(o, s, r, a, i[l + 7], 14, 1735328473),
					r = d(r, a = u(a, o, s, r, i[l + 12], 20, -1926607734), o, s, i[l + 5], 4, -378558),
					s = d(s, r, a, o, i[l + 8], 11, -2022574463),
					o = d(o, s, r, a, i[l + 11], 16, 1839030562),
					a = d(a, o, s, r, i[l + 14], 23, -35309556),
					r = d(r, a, o, s, i[l + 1], 4, -1530992060),
					s = d(s, r, a, o, i[l + 4], 11, 1272893353),
					o = d(o, s, r, a, i[l + 7], 16, -155497632),
					a = d(a, o, s, r, i[l + 10], 23, -1094730640),
					r = d(r, a, o, s, i[l + 13], 4, 681279174),
					s = d(s, r, a, o, i[l + 0], 11, -358537222),
					o = d(o, s, r, a, i[l + 3], 16, -722521979),
					a = d(a, o, s, r, i[l + 6], 23, 76029189),
					r = d(r, a, o, s, i[l + 9], 4, -640364487),
					s = d(s, r, a, o, i[l + 12], 11, -421815835),
					o = d(o, s, r, a, i[l + 15], 16, 530742520),
					r = h(r, a = d(a, o, s, r, i[l + 2], 23, -995338651), o, s, i[l + 0], 6, -198630844),
					s = h(s, r, a, o, i[l + 7], 10, 1126891415),
					o = h(o, s, r, a, i[l + 14], 15, -1416354905),
					a = h(a, o, s, r, i[l + 5], 21, -57434055),
					r = h(r, a, o, s, i[l + 12], 6, 1700485571),
					s = h(s, r, a, o, i[l + 3], 10, -1894986606),
					o = h(o, s, r, a, i[l + 10], 15, -1051523),
					a = h(a, o, s, r, i[l + 1], 21, -2054922799),
					r = h(r, a, o, s, i[l + 8], 6, 1873313359),
					s = h(s, r, a, o, i[l + 15], 10, -30611744),
					o = h(o, s, r, a, i[l + 6], 15, -1560198380),
					a = h(a, o, s, r, i[l + 13], 21, 1309151649),
					r = h(r, a, o, s, i[l + 4], 6, -145523070),
					s = h(s, r, a, o, i[l + 11], 10, -1120210379),
					o = h(o, s, r, a, i[l + 2], 15, 718787259),
					a = h(a, o, s, r, i[l + 9], 21, -343485551),
					r = r + p >>> 0,
					a = a + f >>> 0,
					o = o + v >>> 0,
					s = s + g >>> 0
				}
				return m.endian([r, a, o, s])
			})._ff = function(t, e, i, n, r, a, o) {
				var s = t + (e & i | ~e & n) + (r >>> 0) + o;
				return (s << a | s >>> 32 - a) + e
			},
			w._gg = function(t, e, i, n, r, a, o) {
				var s = t + (e & n | i & ~n) + (r >>> 0) + o;
				return (s << a | s >>> 32 - a) + e
			},
			w._hh = function(t, e, i, n, r, a, o) {
				var s = t + (e ^ i ^ n) + (r >>> 0) + o;
				return (s << a | s >>> 32 - a) + e
			},
			w._ii = function(t, e, i, n, r, a, o) {
				var s = t + (i ^ (e | ~n)) + (r >>> 0) + o;
				return (s << a | s >>> 32 - a) + e
			},
			w._blocksize = 16,
			w._digestsize = 16,
			t.exports = function(t, e) {
				if (null == t) throw new Error("Illegal argument " + t);
				var i = m.wordsToBytes(w(t, e));
				return e && e.asBytes ? i: e && e.asString ? b.bytesToString(i) : m.bytesToHex(i)
			}
		},
		function(t, e, i) {
			"use strict";
			var h = i(0),
			l = i(1),
			s = Math.pow(2, 32) - 1,
			n = function() {
				function v(t, e) {
					this.observer = t,
					this.remuxer = e
				}
				var t = v.prototype;
				return t.resetTimeStamp = function(t) {
					this.initPTS = t
				},
				t.resetInitSegment = function(t, e, i, n) {
					if (t && t.byteLength) {
						var r = this.initData = v.parseInitSegment(t);
						null == e && (e = "mp4a.40.5"),
						null == i && (i = "avc1.42e01e");
						var a = {};
						r.audio && r.video ? a.audiovideo = {
							container: "video/mp4",
							codec: e + "," + i,
							initSegment: n ? t: null
						}: (r.audio && (a.audio = {
							container: "audio/mp4",
							codec: e,
							initSegment: n ? t: null
						}), r.video && (a.video = {
							container: "video/mp4",
							codec: i,
							initSegment: n ? t: null
						})),
						this.observer.trigger(l.a.FRAG_PARSING_INIT_SEGMENT, {
							tracks: a
						})
					} else e && (this.audioCodec = e),
					i && (this.videoCodec = i)
				},
				v.probe = function(t) {
					return 0 < v.findBox({
						data: t,
						start: 0,
						end: Math.min(t.length, 16384)
					},
					["moof"]).length
				},
				v.bin2str = function(t) {
					return String.fromCharCode.apply(null, t)
				},
				v.readUint16 = function(t, e) {
					t.data && (e += t.start, t = t.data);
					var i = t[e] << 8 | t[e + 1];
					return i < 0 ? 65536 + i: i
				},
				v.readUint32 = function(t, e) {
					t.data && (e += t.start, t = t.data);
					var i = t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3];
					return i < 0 ? 4294967296 + i: i
				},
				v.writeUint32 = function(t, e, i) {
					t.data && (e += t.start, t = t.data),
					t[e] = i >> 24,
					t[e + 1] = i >> 16 & 255,
					t[e + 2] = i >> 8 & 255,
					t[e + 3] = 255 & i
				},
				v.findBox = function(t, e) {
					var i, n, r, a, o, s, l = [];
					if (t.data ? (o = t.start, r = t.end, t = t.data) : (o = 0, r = t.byteLength), !e.length) return null;
					for (i = o; i < r;) s = 1 < (n = v.readUint32(t, i)) ? i + n: r,
					v.bin2str(t.subarray(i + 4, i + 8)) === e[0] && (1 === e.length ? l.push({
						data: t,
						start: i + 8,
						end: s
					}) : (a = v.findBox({
						data: t,
						start: i + 8,
						end: s
					},
					e.slice(1))).length && (l = l.concat(a))),
					i = s;
					return l
				},
				v.parseSegmentIndex = function(t) {
					var e, i = v.findBox(t, ["moov"])[0],
					n = i ? i.end: null,
					r = 0,
					a = v.findBox(t, ["sidx"]);
					if (!a || !a[0]) return null;
					e = [];
					var o = (a = a[0]).data[0],
					s = v.readUint32(a, r = 0 === o ? 8 : 16);
					r += 4,
					r += 0 === o ? 8 : 16,
					r += 2;
					var l = a.end + 0,
					c = v.readUint16(a, r);
					r += 2;
					for (var u = 0; u < c; u++) {
						var d = r,
						h = v.readUint32(a, d);
						d += 4;
						var p = 2147483647 & h;
						if (1 == (2147483648 & h) >>> 31) return void console.warn("SIDX has hierarchical references (not supported)");
						var f = v.readUint32(a, d);
						d += 4,
						e.push({
							referenceSize: p,
							subsegmentDuration: f,
							info: {
								duration: f / s,
								start: l,
								end: l + p - 1
							}
						}),
						l += p,
						r = d += 4
					}
					return {
						earliestPresentationTime: 0,
						timescale: s,
						version: o,
						referencesCount: c,
						references: e,
						moovEndOffset: n
					}
				},
				v.parseInitSegment = function(t) {
					var d = [];
					return v.findBox(t, ["moov", "trak"]).forEach(function(t) {
						var e = v.findBox(t, ["tkhd"])[0];
						if (e) {
							var i = e.data[e.start],
							n = 0 === i ? 12 : 20,
							r = v.readUint32(e, n),
							a = v.findBox(t, ["mdia", "mdhd"])[0];
							if (a) {
								n = 0 === (i = a.data[a.start]) ? 12 : 20;
								var o = v.readUint32(a, n),
								s = v.findBox(t, ["mdia", "hdlr"])[0];
								if (s) {
									var l = {
										soun: "audio",
										vide: "video"
									} [v.bin2str(s.data.subarray(s.start + 8, s.start + 12))];
									if (l) {
										var c = v.findBox(t, ["mdia", "minf", "stbl", "stsd"]);
										if (c.length) {
											c = c[0];
											var u = v.bin2str(c.data.subarray(c.start + 12, c.start + 16));
											h.b.log("MP4Demuxer:" + l + ":" + u + " found")
										}
										d[r] = {
											timescale: o,
											type: l
										},
										d[l] = {
											timescale: o,
											id: r
										}
									}
								}
							}
						}
					}),
					d
				},
				v.getStartDTS = function(r, t) {
					var e, i, n;
					return e = v.findBox(t, ["moof", "traf"]),
					i = [].concat.apply([], e.map(function(n) {
						return v.findBox(n, ["tfhd"]).map(function(t) {
							var e, i;
							return e = v.readUint32(t, 4),
							i = r[e].timescale || 9e4,
							v.findBox(n, ["tfdt"]).map(function(t) {
								var e, i;
								return e = t.data[t.start],
								i = v.readUint32(t, 4),
								1 === e && (i *= Math.pow(2, 32), i += v.readUint32(t, 8)),
								i
							})[0] / i
						})
					})),
					n = Math.min.apply(null, i),
					isFinite(n) ? n: 0
				},
				v.offsetStartDTS = function(n, t, o) {
					v.findBox(t, ["moof", "traf"]).map(function(i) {
						return v.findBox(i, ["tfhd"]).map(function(t) {
							var e = v.readUint32(t, 4),
							a = n[e].timescale || 9e4;
							v.findBox(i, ["tfdt"]).map(function(t) {
								var e = t.data[t.start],
								i = v.readUint32(t, 4);
								if (0 === e) v.writeUint32(t, 4, i - o * a);
								else {
									i *= Math.pow(2, 32),
									i += v.readUint32(t, 8),
									i -= o * a,
									i = Math.max(i, 0);
									var n = Math.floor(i / (1 + s)),
									r = Math.floor(i % (1 + s));
									v.writeUint32(t, 4, n),
									v.writeUint32(t, 8, r)
								}
							})
						})
					})
				},
				t.append = function(t, e, i, n) {
					var r = this.initData;
					r || (this.resetInitSegment(t, this.audioCodec, this.videoCodec, !1), r = this.initData);
					var a, o = this.initPTS;
					if (void 0 === o) {
						var s = v.getStartDTS(r, t);
						this.initPTS = o = s - e,
						this.observer.trigger(l.a.INIT_PTS_FOUND, {
							initPTS: o
						})
					}
					v.offsetStartDTS(r, t, o),
					a = v.getStartDTS(r, t),
					this.remuxer.remux(r.audio, r.video, null, null, a, i, n, t)
				},
				t.destroy = function() {},
				v
			} ();
			e.a = n
		},
		function(t, e) {
			var i = {
				utf8: {
					stringToBytes: function(t) {
						return i.bin.stringToBytes(unescape(encodeURIComponent(t)))
					},
					bytesToString: function(t) {
						return decodeURIComponent(escape(i.bin.bytesToString(t)))
					}
				},
				bin: {
					stringToBytes: function(t) {
						for (var e = [], i = 0; i < t.length; i++) e.push(255 & t.charCodeAt(i));
						return e
					},
					bytesToString: function(t) {
						for (var e = [], i = 0; i < t.length; i++) e.push(String.fromCharCode(t[i]));
						return e.join("")
					}
				}
			};
			t.exports = i
		},
		function(t, e, p) {
			function l(i) {
				var n = {};
				function r(t) {
					if (n[t]) return n[t].exports;
					var e = n[t] = {
						i: t,
						l: !1,
						exports: {}
					};
					return i[t].call(e.exports, e, e.exports, r),
					e.l = !0,
					e.exports
				}
				r.m = i,
				r.c = n,
				r.i = function(t) {
					return t
				},
				r.d = function(t, e, i) {
					r.o(t, e) || Object.defineProperty(t, e, {
						configurable: !1,
						enumerable: !0,
						get: i
					})
				},
				r.r = function(t) {
					Object.defineProperty(t, "__esModule", {
						value: !0
					})
				},
				r.n = function(t) {
					var e = t && t.__esModule ?
					function() {
						return t.
					default
					}:
					function() {
						return t
					};
					return r.d(e, "a", e),
					e
				},
				r.o = function(t, e) {
					return Object.prototype.hasOwnProperty.call(t, e)
				},
				r.p = "/",
				r.oe = function(t) {
					throw console.error(t),
					t
				};
				var t = r(r.s = ENTRY_MODULE);
				return t.
			default || t
			}
			var f = "[\\.|\\-|\\+|\\w|/|@]+",
			v = "\\(\\s*(/\\*.*?\\*/)?\\s*.*?(" + f + ").*?\\)";
			function g(t) {
				return (t + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
			}
			function h(t, e, i) {
				var n = {};
				n[i] = [];
				var r = e.toString(),
				a = r.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);
				if (!a) return n;
				for (var o, s = a[1], l = new RegExp("(\\\\n|\\W)" + g(s) + v, "g"); o = l.exec(r);)"dll-reference" !== o[3] && n[i].push(o[3]);
				for (l = new RegExp("\\(" + g(s) + '\\("(dll-reference\\s(' + f + '))"\\)\\)' + v, "g"); o = l.exec(r);) t[o[2]] || (n[i].push(o[1]), t[o[2]] = p(o[1]).m),
				n[o[2]] = n[o[2]] || [],
				n[o[2]].push(o[4]);
				for (var c, u = Object.keys(n), d = 0; d < u.length; d++) for (var h = 0; h < n[u[d]].length; h++) c = n[u[d]][h],
				isNaN( + c) || (n[u[d]][h] = +n[u[d]][h]);
				return n
			}
			function m(i) {
				return Object.keys(i).reduce(function(t, e) {
					return t || 0 < i[e].length
				},
				!1)
			}
			t.exports = function(t, e) {
				e = e || {};
				var i = {
					main: p.m
				},
				n = e.all ? {
					main: Object.keys(i.main)
				}: function(t, e) {
					for (var i = {
						main: [e]
					},
					n = {
						main: []
					},
					r = {
						main: {}
					}; m(i);) for (var a = Object.keys(i), o = 0; o < a.length; o++) {
						var s = a[o],
						l = i[s].pop();
						if (r[s] = r[s] || {},
						!r[s][l] && t[s][l]) {
							r[s][l] = !0,
							n[s] = n[s] || [],
							n[s].push(l);
							for (var c = h(t, t[s][l], s), u = Object.keys(c), d = 0; d < u.length; d++) i[u[d]] = i[u[d]] || [],
							i[u[d]] = i[u[d]].concat(c[u[d]])
						}
					}
					return n
				} (i, t),
				r = "";
				Object.keys(n).filter(function(t) {
					return "main" !== t
				}).forEach(function(e) {
					for (var t = 0; n[e][t];) t++;
					n[e].push(t),
					i[e][t] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })",
					r = r + "var " + e + " = (" + l.toString().replace("ENTRY_MODULE", JSON.stringify(t)) + ")({" + n[e].map(function(t) {
						return JSON.stringify(t) + ": " + i[e][t].toString()
					}).join(",") + "});\n"
				}),
				r = r + "new ((" + l.toString().replace("ENTRY_MODULE", JSON.stringify(t)) + ")({" + n.main.map(function(t) {
					return JSON.stringify(t) + ": " + i.main[t].toString()
				}).join(",") + "}))(self);";
				var a = new window.Blob([r], {
					type: "text/javascript"
				});
				if (e.bare) return a;
				var o = (window.URL || window.webkitURL || window.mozURL || window.msURL).createObjectURL(a),
				s = new window.Worker(o);
				return s.objectURL = o,
				s
			}
		},
		function(t, e) {
			var a, i;
			a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
			i = {
				rotl: function(t, e) {
					return t << e | t >>> 32 - e
				},
				rotr: function(t, e) {
					return t << 32 - e | t >>> e
				},
				endian: function(t) {
					if (t.constructor == Number) return 16711935 & i.rotl(t, 8) | 4278255360 & i.rotl(t, 24);
					for (var e = 0; e < t.length; e++) t[e] = i.endian(t[e]);
					return t
				},
				randomBytes: function(t) {
					for (var e = []; 0 < t; t--) e.push(Math.floor(256 * Math.random()));
					return e
				},
				bytesToWords: function(t) {
					for (var e = [], i = 0, n = 0; i < t.length; i++, n += 8) e[n >>> 5] |= t[i] << 24 - n % 32;
					return e
				},
				wordsToBytes: function(t) {
					for (var e = [], i = 0; i < 32 * t.length; i += 8) e.push(t[i >>> 5] >>> 24 - i % 32 & 255);
					return e
				},
				bytesToHex: function(t) {
					for (var e = [], i = 0; i < t.length; i++) e.push((t[i] >>> 4).toString(16)),
					e.push((15 & t[i]).toString(16));
					return e.join("")
				},
				hexToBytes: function(t) {
					for (var e = [], i = 0; i < t.length; i += 2) e.push(parseInt(t.substr(i, 2), 16));
					return e
				},
				bytesToBase64: function(t) {
					for (var e = [], i = 0; i < t.length; i += 3) for (var n = t[i] << 16 | t[i + 1] << 8 | t[i + 2], r = 0; r < 4; r++) 8 * i + 6 * r <= 8 * t.length ? e.push(a.charAt(n >>> 6 * (3 - r) & 63)) : e.push("=");
					return e.join("")
				},
				base64ToBytes: function(t) {
					t = t.replace(/[^A-Z0-9+\/]/gi, "");
					for (var e = [], i = 0, n = 0; i < t.length; n = ++i % 4) 0 != n && e.push((a.indexOf(t.charAt(i - 1)) & Math.pow(2, -2 * n + 8) - 1) << 2 * n | a.indexOf(t.charAt(i)) >>> 6 - 2 * n);
					return e
				}
			},
			t.exports = i
		},
		function(t, e) {
			function i(t) {
				return !! t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
			}
			t.exports = function(t) {
				return null != t && (i(t) ||
				function(t) {
					return "function" == typeof t.readFloatLE && "function" == typeof t.slice && i(t.slice(0, 0))
				} (t) || !!t._isBuffer)
			}
		},
		function(t, e, i) {
			"use strict";
			i.r(e);
			var o = i(9),
			s = i(1),
			l = i(0),
			c = i(8);
			e.
		default = function(r) {
				var a = new c.EventEmitter;
				a.trigger = function(t) {
					for (var e = arguments.length,
					i = new Array(1 < e ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
					a.emit.apply(a, [t, t].concat(i))
				},
				a.off = function(t) {
					for (var e = arguments.length,
					i = new Array(1 < e ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
					a.removeListener.apply(a, [t].concat(i))
				};
				var n = function(t, e) {
					r.postMessage({
						event: t,
						data: e
					})
				};
				r.addEventListener("message",
				function(t) {
					var e = t.data;
					switch (e.cmd) {
					case "init":
						var i = JSON.parse(e.config);
						r.demuxer = new o.a(a, e.typeSupported, i, e.vendor),
						Object(l.a)(i.debug),
						n("init", null);
						break;
					case "demux":
						r.demuxer.push(e.data, e.decryptdata, e.initSegment, e.audioCodec, e.videoCodec, e.timeOffset, e.discontinuity, e.trackSwitch, e.contiguous, e.duration, e.accurateTimeOffset, e.defaultInitPTS)
					}
				}),
				a.on(s.a.FRAG_DECRYPTED, n),
				a.on(s.a.FRAG_PARSING_INIT_SEGMENT, n),
				a.on(s.a.FRAG_PARSED, n),
				a.on(s.a.ERROR, n),
				a.on(s.a.FRAG_PARSING_METADATA, n),
				a.on(s.a.FRAG_PARSING_USERDATA, n),
				a.on(s.a.INIT_PTS_FOUND, n),
				a.on(s.a.FRAG_PARSING_DATA,
				function(t, e) {
					var i = [],
					n = {
						event: t,
						data: e
					};
					e.data1 && (n.data1 = e.data1.buffer, i.push(e.data1.buffer), delete e.data1),
					e.data2 && (n.data2 = e.data2.buffer, i.push(e.data2.buffer), delete e.data2),
					r.postMessage(n, i)
				})
			}
		},
		function(t, e, i) {
			"use strict";
			i.r(e);
			var n = {};
			i.r(n),
			i.d(n, "newCue",
			function() {
				return qe
			});
			var g, a, r = i(10),
			o = i.n(r),
			s = i(6),
			h = i(2),
			O = i(3),
			M = i(1),
			B = i(0),
			l = {
				hlsEventGeneric: !0,
				hlsHandlerDestroying: !0,
				hlsHandlerDestroyed: !0
			},
			c = function() {
				function t(t) {
					this.hls = void 0,
					this.handledEvents = void 0,
					this.useGenericHandler = void 0,
					this.hls = t,
					this.onEvent = this.onEvent.bind(this);
					for (var e = arguments.length,
					i = new Array(1 < e ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
					this.handledEvents = i,
					this.useGenericHandler = !0,
					this.registerListeners()
				}
				var e = t.prototype;
				return e.destroy = function() {
					this.onHandlerDestroying(),
					this.unregisterListeners(),
					this.onHandlerDestroyed()
				},
				e.onHandlerDestroying = function() {},
				e.onHandlerDestroyed = function() {},
				e.isEventHandler = function() {
					return "object" == typeof this.handledEvents && this.handledEvents.length && "function" == typeof this.onEvent
				},
				e.registerListeners = function() {
					this.isEventHandler() && this.handledEvents.forEach(function(t) {
						if (l[t]) throw new Error("Forbidden event-name: " + t);
						this.hls.on(t, this.onEvent)
					},
					this)
				},
				e.unregisterListeners = function() {
					this.isEventHandler() && this.handledEvents.forEach(function(t) {
						this.hls.off(t, this.onEvent)
					},
					this)
				},
				e.onEvent = function(t, e) {
					this.onEventGeneric(t, e)
				},
				e.onEventGeneric = function(t, e) {
					try { (function(t, e) {
							var i = "on" + t.replace("hls", "");
							if ("function" != typeof this[i]) throw new Error("Event " + t + " has no generic handler in this " + this.constructor.name + " class (tried " + i + ")");
							return this[i].bind(this, e)
						}).call(this, t, e).call()
					} catch(e) {
						B.b.error("An internal error happened while handling event " + t + '. Error message: "' + e.message + '". Here is a stacktrace:', e),
						this.hls.trigger(M.a.ERROR, {
							type: h.b.OTHER_ERROR,
							details: h.a.INTERNAL_EXCEPTION,
							fatal: !1,
							event: t,
							err: e
						})
					}
				},
				t
			} (); !
			function(t) {
				t.MANIFEST = "manifest",
				t.LEVEL = "level",
				t.AUDIO_TRACK = "audioTrack",
				t.SUBTITLE_TRACK = "subtitleTrack"
			} (g = g || {}),
			function(t) {
				t.MAIN = "main",
				t.AUDIO = "audio",
				t.SUBTITLE = "subtitle"
			} (a = a || {});
			var u = i(11);
			function d(t, e) {
				for (var i = 0; i < e.length; i++) {
					var n = e[i];
					n.enumerable = n.enumerable || !1,
					n.configurable = !0,
					"value" in n && (n.writable = !0),
					Object.defineProperty(t, n.key, n)
				}
			}
			var p, F = function() {
				function t(t, e) {
					this._uri = null,
					this.baseuri = void 0,
					this.reluri = void 0,
					this.method = null,
					this.key = null,
					this.iv = null,
					this.baseuri = t,
					this.reluri = e
				}
				return d(t.prototype, [{
					key: "uri",
					get: function() {
						return ! this._uri && this.reluri && (this._uri = Object(s.buildAbsoluteURL)(this.baseuri, this.reluri, {
							alwaysNormalize: !0
						})),
						this._uri
					}
				}]),
				t
			} ();
			function f(t, e) {
				for (var i = 0; i < e.length; i++) {
					var n = e[i];
					n.enumerable = n.enumerable || !1,
					n.configurable = !0,
					"value" in n && (n.writable = !0),
					Object.defineProperty(t, n.key, n)
				}
			} !
			function(t) {
				t.AUDIO = "audio",
				t.VIDEO = "video"
			} (p = p || {});
			var N = function() {
				function t() {
					var t;
					this._url = null,
					this._byteRange = null,
					this._decryptdata = null,
					this._elementaryStreams = ((t = {})[p.AUDIO] = !1, t[p.VIDEO] = !1, t),
					this.rawProgramDateTime = null,
					this.programDateTime = null,
					this.tagList = [],
					this.relurl = void 0,
					this.baseurl = void 0,
					this.duration = void 0,
					this.sn = 0,
					this.levelkey = void 0
				}
				var e = t.prototype;
				return e.setByteRange = function(t, e) {
					var i = t.split("@", 2),
					n = [];
					1 === i.length ? n[0] = e ? e.byteRangeEndOffset: 0 : n[0] = parseInt(i[1]),
					n[1] = parseInt(i[0]) + n[0],
					this._byteRange = n
				},
				e.addElementaryStream = function(t) {
					this._elementaryStreams[t] = !0
				},
				e.hasElementaryStream = function(t) {
					return ! 0 === this._elementaryStreams[t]
				},
				e.createInitializationVector = function(t) {
					for (var e = new Uint8Array(16), i = 12; i < 16; i++) e[i] = t >> 8 * (15 - i) & 255;
					return e
				},
				e.setDecryptDataFromLevelKey = function(t, e) {
					var i = t;
					return t && t.method && t.uri && !t.iv && ((i = new F(t.baseuri, t.reluri)).method = t.method, i.iv = this.createInitializationVector(e)),
					i
				},
				f(t.prototype, [{
					key: "url",
					get: function() {
						return ! this._url && this.relurl && (this._url = Object(s.buildAbsoluteURL)(this.baseurl, this.relurl, {
							alwaysNormalize: !0
						})),
						this._url
					},
					set: function(t) {
						this._url = t
					}
				},
				{
					key: "byteRange",
					get: function() {
						return this._byteRange ? this._byteRange: []
					}
				},
				{
					key: "byteRangeStartOffset",
					get: function() {
						return this.byteRange[0]
					}
				},
				{
					key: "byteRangeEndOffset",
					get: function() {
						return this.byteRange[1]
					}
				},
				{
					key: "decryptdata",
					get: function() {
						if (!this.levelkey && !this._decryptdata) return null;
						if (!this._decryptdata && this.levelkey) {
							var t = this.sn;
							"number" != typeof t && (this.levelkey && "AES-128" === this.levelkey.method && !this.levelkey.iv && B.b.warn('missing IV for initialization segment with method="' + this.levelkey.method + '" - compliance issue'), t = 0),
							this._decryptdata = this.setDecryptDataFromLevelKey(this.levelkey, t)
						}
						return this._decryptdata
					}
				},
				{
					key: "endProgramDateTime",
					get: function() {
						if (null === this.programDateTime) return null;
						if (!Object(O.a)(this.programDateTime)) return null;
						var t = Object(O.a)(this.duration) ? this.duration: 0;
						return this.programDateTime + 1e3 * t
					}
				},
				{
					key: "encrypted",
					get: function() {
						return ! (!this.decryptdata || null === this.decryptdata.uri || null !== this.decryptdata.key)
					}
				}]),
				t
			} ();
			function v(t, e) {
				for (var i = 0; i < e.length; i++) {
					var n = e[i];
					n.enumerable = n.enumerable || !1,
					n.configurable = !0,
					"value" in n && (n.writable = !0),
					Object.defineProperty(t, n.key, n)
				}
			}
			var U = function() {
				function t(t) {
					this.endCC = 0,
					this.endSN = 0,
					this.fragments = [],
					this.initSegment = null,
					this.live = !0,
					this.needSidxRanges = !1,
					this.startCC = 0,
					this.startSN = 0,
					this.startTimeOffset = null,
					this.targetduration = 0,
					this.totalduration = 0,
					this.type = null,
					this.url = t,
					this.version = null
				}
				return v(t.prototype, [{
					key: "hasProgramDateTime",
					get: function() {
						return ! (!this.fragments[0] || !Object(O.a)(this.fragments[0].programDateTime))
					}
				}]),
				t
			} (),
			m = /^(\d+)x(\d+)$/,
			A = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,
			q = function() {
				function i(t) {
					for (var e in "string" == typeof t && (t = i.parseAttrList(t)), t) t.hasOwnProperty(e) && (this[e] = t[e])
				}
				var t = i.prototype;
				return t.decimalInteger = function(t) {
					var e = parseInt(this[t], 10);
					return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e
				},
				t.hexadecimalInteger = function(t) {
					if (this[t]) {
						var e = (this[t] || "0x").slice(2);
						e = (1 & e.length ? "0": "") + e;
						for (var i = new Uint8Array(e.length / 2), n = 0; n < e.length / 2; n++) i[n] = parseInt(e.slice(2 * n, 2 * n + 2), 16);
						return i
					}
					return null
				},
				t.hexadecimalIntegerAsNumber = function(t) {
					var e = parseInt(this[t], 16);
					return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e
				},
				t.decimalFloatingPoint = function(t) {
					return parseFloat(this[t])
				},
				t.enumeratedString = function(t) {
					return this[t]
				},
				t.decimalResolution = function(t) {
					var e = m.exec(this[t]);
					if (null !== e) return {
						width: parseInt(e[1], 10),
						height: parseInt(e[2], 10)
					}
				},
				i.parseAttrList = function(t) {
					var e, i = {};
					for (A.lastIndex = 0; null !== (e = A.exec(t));) {
						var n = e[2];
						0 === n.indexOf('"') && n.lastIndexOf('"') === n.length - 1 && (n = n.slice(1, -1)),
						i[e[1]] = n
					}
					return i
				},
				i
			} (),
			y = {
				audio: {
					a3ds: !0,
					"ac-3": !0,
					"ac-4": !0,
					alac: !0,
					alaw: !0,
					dra1: !0,
					"dts+": !0,
					"dts-": !0,
					dtsc: !0,
					dtse: !0,
					dtsh: !0,
					"ec-3": !0,
					enca: !0,
					g719: !0,
					g726: !0,
					m4ae: !0,
					mha1: !0,
					mha2: !0,
					mhm1: !0,
					mhm2: !0,
					mlpa: !0,
					mp4a: !0,
					"raw ": !0,
					Opus: !0,
					samr: !0,
					sawb: !0,
					sawp: !0,
					sevc: !0,
					sqcp: !0,
					ssmv: !0,
					twos: !0,
					ulaw: !0
				},
				video: {
					avc1: !0,
					avc2: !0,
					avc3: !0,
					avc4: !0,
					avcp: !0,
					drac: !0,
					dvav: !0,
					dvhe: !0,
					encv: !0,
					hev1: !0,
					hvc1: !0,
					mjp2: !0,
					mp4v: !0,
					mvc1: !0,
					mvc2: !0,
					mvc3: !0,
					mvc4: !0,
					resv: !0,
					rv60: !0,
					s263: !0,
					svc1: !0,
					svc2: !0,
					"vc-1": !0,
					vp08: !0,
					vp09: !0
				}
			};
			function b(t, e) {
				return MediaSource.isTypeSupported((e || "video") + '/mp4;codecs="' + t + '"')
			}
			var w = /#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g,
			k = /#EXT-X-MEDIA:(.*)/g,
			j = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /|(?!#)([\S+ ?]+)/.source, /|#EXT-X-BYTERANGE:*(.+)/.source, /|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /|#.*/.source].join(""), "g"),
			z = /(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)([^:]*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/,
			V = /\.(mp4|m4s|m4v|m4a)$/i,
			E = function() {
				function u() {}
				return u.findGroup = function(t, e) {
					if (!t) return null;
					for (var i = null,
					n = 0; n < t.length; n++) {
						var r = t[n];
						r.id === e && (i = r)
					}
					return i
				},
				u.convertAVC1ToAVCOTI = function(t) {
					var e, i = t.split(".");
					return 2 < i.length ? (e = i.shift() + ".", e += parseInt(i.shift()).toString(16), e += ("000" + parseInt(i.shift()).toString(16)).substr( - 4)) : e = t,
					e
				},
				u.resolve = function(t, e) {
					return s.buildAbsoluteURL(e, t, {
						alwaysNormalize: !0
					})
				},
				u.parseMasterPlaylist = function(t, e) {
					var i, n = [];
					function r(n, r) { ["video", "audio"].forEach(function(e) {
							var i = n.filter(function(t) {
								return function(t, e) {
									var i = y[e];
									return !! i && !0 === i[t.slice(0, 4)]
								} (t, e)
							});
							if (i.length) {
								var t = i.filter(function(t) {
									return 0 === t.lastIndexOf("avc1", 0) || 0 === t.lastIndexOf("mp4a", 0)
								});
								r[e + "Codec"] = 0 < t.length ? t[0] : i[0],
								n = n.filter(function(t) {
									return - 1 === i.indexOf(t)
								})
							}
						}),
						r.unknownCodecs = n
					}
					for (w.lastIndex = 0; null != (i = w.exec(t));) {
						var a = {},
						o = a.attrs = new q(i[1]);
						a.url = u.resolve(i[2], e);
						var s = o.decimalResolution("RESOLUTION");
						s && (a.width = s.width, a.height = s.height),
						a.bitrate = o.decimalInteger("AVERAGE-BANDWIDTH") || o.decimalInteger("BANDWIDTH"),
						a.name = o.NAME,
						r([].concat((o.CODECS || "").split(/[ ,]+/)), a),
						a.videoCodec && -1 !== a.videoCodec.indexOf("avc1") && (a.videoCodec = u.convertAVC1ToAVCOTI(a.videoCodec)),
						n.push(a)
					}
					return n
				},
				u.parseMasterPlaylistMedia = function(t, e, i, n) {
					var r;
					void 0 === n && (n = []);
					var a = [],
					o = 0;
					for (k.lastIndex = 0; null !== (r = k.exec(t));) {
						var s = {},
						l = new q(r[1]);
						if (l.TYPE === i) {
							if (s.groupId = l["GROUP-ID"], s.name = l.NAME, s.type = i, s.
						default = "YES" === l.DEFAULT, s.autoselect = "YES" === l.AUTOSELECT, s.forced = "YES" === l.FORCED, l.URI && (s.url = u.resolve(l.URI, e)), s.lang = l.LANGUAGE, s.name || (s.name = s.lang), n.length) {
								var c = u.findGroup(n, s.groupId);
								s.audioCodec = c ? c.codec: n[0].codec
							}
							s.id = o++,
							a.push(s)
						}
					}
					return a
				},
				u.parseLevelPlaylist = function(t, e, i, n, r, a, o) {
					var s, l, c, u, d = 0,
					h = 0,
					p = new U(e),
					f = new F,
					v = 0,
					g = null,
					m = new N,
					A = null;
					for (j.lastIndex = 0; null !== (s = j.exec(t));) {
						var y = s[1];
						if (y) {
							m.duration = parseFloat(y);
							var b = (" " + s[2]).slice(1);
							m.title = b || null,
							m.tagList.push(b ? ["INF", y, b] : ["INF", y])
						} else if (s[3]) {
							if (Object(O.a)(m.duration)) {
								var w = d++;
								m.type = n,
								m.start = h,
								m.levelkey = f,
								m.sn = w,
								m.level = i,
								m.cc = v,
								m.urlId = r,
								m.baseurl = e,
								m.relurl = (" " + s[3]).slice(1),
								u = g,
								(c = m).rawProgramDateTime ? c.programDateTime = Date.parse(c.rawProgramDateTime) : u && u.programDateTime && (c.programDateTime = u.endProgramDateTime),
								Object(O.a)(c.programDateTime) || (c.programDateTime = null, c.rawProgramDateTime = null),
								p.fragments.push(m),
								h += (g = m).duration,
								m = new N
							}
						} else if (s[4]) {
							var k = (" " + s[4]).slice(1);
							g ? m.setByteRange(k, g) : m.setByteRange(k)
						} else if (s[5]) m.rawProgramDateTime = (" " + s[5]).slice(1),
						m.tagList.push(["PROGRAM-DATE-TIME", m.rawProgramDateTime]),
						null === A && (A = p.fragments.length);
						else {
							for (s = s[0].match(z), l = 1; l < s.length && void 0 === s[l]; l++);
							var E = (" " + s[l + 1]).slice(1),
							x = (" " + s[l + 2]).slice(1);
							switch (s[l]) {
							case "#":
								m.tagList.push(x ? [E, x] : [E]);
								break;
							case "PLAYLIST-TYPE":
								p.type = E.toUpperCase();
								break;
							case "MEDIA-SEQUENCE":
								d = p.startSN = parseInt(E);
								break;
							case "TARGETDURATION":
								p.targetduration = parseFloat(E);
								break;
							case "VERSION":
								p.version = parseInt(E);
								break;
							case "EXTM3U":
								break;
							case "ENDLIST":
								p.live = !1;
								break;
							case "DIS":
								v++,
								m.tagList.push(["DIS"]);
								break;
							case "DISCONTINUITY-SEQ":
								v = parseInt(E);
								break;
							case "KEY":
								var T = new q(E),
								S = T.enumeratedString("METHOD"),
								_ = T.URI,
								C = T.hexadecimalInteger("IV");
								if (S && (f = new F, _ && 0 <= ["AES-128", "SAMPLE-AES", "SAMPLE-AES-CENC"].indexOf(S))) {
									var L = _,
									R = _.indexOf("/", 9),
									D = _.substring(0, ++R),
									I = _.slice(R);
									void 0 !== a && (L = D + "playsafe/" + I + "?token=" + o),
									f.method = S,
									f.baseuri = e,
									f.reluri = L,
									f.key = null,
									f.iv = C
								}
								break;
							case "START":
								var M = new q(E).decimalFloatingPoint("TIME-OFFSET");
								Object(O.a)(M) && (p.startTimeOffset = M);
								break;
							case "MAP":
								var P = new q(E);
								m.relurl = P.URI,
								P.BYTERANGE && m.setByteRange(P.BYTERANGE),
								m.baseurl = e,
								m.level = i,
								m.type = n,
								m.sn = "initSegment",
								p.initSegment = m,
								(m = new N).rawProgramDateTime = p.initSegment.rawProgramDateTime;
								break;
							default:
								B.b.warn("line parsed but not handled: " + s)
							}
						}
					}
					return (m = g) && !m.relurl && (p.fragments.pop(), h -= m.duration),
					p.totalduration = h,
					p.averagetargetduration = h / p.fragments.length,
					p.endSN = d - 1,
					p.startCC = p.fragments[0] ? p.fragments[0].cc: 0,
					p.endCC = v,
					!p.initSegment && p.fragments.length && p.fragments.every(function(t) {
						return V.test(t.relurl)
					}) && (B.b.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"), (m = new N).relurl = p.fragments[0].relurl, m.baseurl = e, m.level = i, m.type = n, m.sn = "initSegment", p.initSegment = m, p.needSidxRanges = !0),
					A &&
					function(t, e) {
						for (var i = t[e], n = e - 1; 0 <= n; n--) {
							var r = t[n];
							r.programDateTime = i.programDateTime - 1e3 * r.duration,
							i = r
						}
					} (p.fragments, A),
					p
				},
				u
			} ();
			var x = window.performance,
			T = function(i) {
				var t, e;
				function v(t) {
					var e;
					return (e = i.call(this, t, M.a.MANIFEST_LOADING, M.a.LEVEL_LOADING, M.a.AUDIO_TRACK_LOADING, M.a.SUBTITLE_TRACK_LOADING) || this).loaders = {},
					e
				}
				e = i,
				(t = v).prototype = Object.create(e.prototype),
				(t.prototype.constructor = t).__proto__ = e,
				v.canHaveQualityLevels = function(t) {
					return t !== g.AUDIO_TRACK && t !== g.SUBTITLE_TRACK
				},
				v.mapContextToLevelType = function(t) {
					switch (t.type) {
					case g.AUDIO_TRACK:
						return a.AUDIO;
					case g.SUBTITLE_TRACK:
						return a.SUBTITLE;
					default:
						return a.MAIN
					}
				},
				v.getResponseUrl = function(t, e) {
					var i = t.url;
					return void 0 !== i && 0 !== i.indexOf("data:") || (i = e.url),
					i
				};
				var n = v.prototype;
				return n.createInternalLoader = function(t) {
					var e = this.hls.config,
					i = e.pLoader,
					n = e.loader,
					r = new(i || n)(e);
					return t.loader = r,
					this.loaders[t.type] = r
				},
				n.getInternalLoader = function(t) {
					return this.loaders[t.type]
				},
				n.resetInternalLoader = function(t) {
					this.loaders[t] && delete this.loaders[t]
				},
				n.destroyInternalLoaders = function() {
					for (var t in this.loaders) {
						var e = this.loaders[t];
						e && e.destroy(),
						this.resetInternalLoader(t)
					}
				},
				n.destroy = function() {
					this.destroyInternalLoaders(),
					i.prototype.destroy.call(this)
				},
				n.onManifestLoading = function(t) {
					this.load({
						url: t.url,
						type: g.MANIFEST,
						level: 0,
						id: null,
						responseType: "text"
					})
				},
				n.onLevelLoading = function(t) {
					this.load({
						url: t.url,
						type: g.LEVEL,
						level: t.level,
						id: t.id,
						responseType: "text"
					})
				},
				n.onAudioTrackLoading = function(t) {
					this.load({
						url: t.url,
						type: g.AUDIO_TRACK,
						level: null,
						id: t.id,
						responseType: "text"
					})
				},
				n.onSubtitleTrackLoading = function(t) {
					this.load({
						url: t.url,
						type: g.SUBTITLE_TRACK,
						level: null,
						id: t.id,
						responseType: "text"
					})
				},
				n.load = function(t) {
					var e = this.hls.config;
					B.b.debug("Loading playlist of type " + t.type + ", level: " + t.level + ", id: " + t.id);
					var i, n, r, a, o = this.getInternalLoader(t);
					if (o) {
						var s = o.context;
						if (s && s.url === t.url) return B.b.trace("playlist request ongoing"),
						!1;
						B.b.warn("aborting previous loader for type: " + t.type),
						o.abort()
					}
					switch (t.type) {
					case g.MANIFEST:
						i = e.manifestLoadingMaxRetry,
						n = e.manifestLoadingTimeOut,
						r = e.manifestLoadingRetryDelay,
						a = e.manifestLoadingMaxRetryTimeout;
						break;
					case g.LEVEL:
						r = a = i = 0,
						n = e.levelLoadingTimeOut;
						break;
					default:
						i = e.levelLoadingMaxRetry,
						n = e.levelLoadingTimeOut,
						r = e.levelLoadingRetryDelay,
						a = e.levelLoadingMaxRetryTimeout
					}
					o = this.createInternalLoader(t);
					var l = {
						timeout: n,
						maxRetry: i,
						retryDelay: r,
						maxRetryDelay: a
					},
					c = {
						onSuccess: this.loadsuccess.bind(this),
						onError: this.loaderror.bind(this),
						onTimeout: this.loadtimeout.bind(this)
					};
					return B.b.debug("Calling internal loader delegate for URL: " + t.url),
					o.load(t, l, c),
					!0
				},
				n.loadsuccess = function(t, e, i, n) {
					if (void 0 === n && (n = null), i.isSidxRequest) return this._handleSidxRequest(t, i),
					void this._handlePlaylistLoaded(t, e, i, n);
					if (this.resetInternalLoader(i.type), "string" != typeof t.data) throw new Error('expected responseType of "text" for PlaylistLoader');
					var r = t.data;
					e.tload = x.now(),
					0 === r.indexOf("#EXTM3U") ? 0 < r.indexOf("#EXTINF:") || 0 < r.indexOf("#EXT-X-TARGETDURATION:") ? this._handleTrackOrLevelPlaylist(t, e, i, n) : this._handleMasterPlaylist(t, e, i, n) : this._handleManifestParsingError(t, i, "no EXTM3U delimiter", n)
				},
				n.loaderror = function(t, e, i) {
					void 0 === i && (i = null),
					this._handleNetworkError(e, i, !1, t)
				},
				n.loadtimeout = function(t, e, i) {
					void 0 === i && (i = null),
					this._handleNetworkError(e, i, !0)
				},
				n._handleMasterPlaylist = function(t, e, i, n) {
					var r = this.hls,
					a = t.data,
					o = v.getResponseUrl(t, i),
					s = E.parseMasterPlaylist(a, o);
					if (s.length) {
						var l = s.map(function(t) {
							return {
								id: t.attrs.AUDIO,
								codec: t.audioCodec
							}
						}),
						c = E.parseMasterPlaylistMedia(a, o, "AUDIO", l),
						u = E.parseMasterPlaylistMedia(a, o, "SUBTITLES");
						if (c.length) {
							var d = !1;
							c.forEach(function(t) {
								t.url || (d = !0)
							}),
							!1 === d && s[0].audioCodec && !s[0].attrs.AUDIO && (B.b.log("audio codec signaled in quality level, but no embedded audio track signaled, create one"), c.unshift({
								type: "main",
								name: "main"
							}))
						}
						r.trigger(M.a.MANIFEST_LOADED, {
							levels: s,
							audioTracks: c,
							subtitles: u,
							url: o,
							stats: e,
							networkDetails: n
						})
					} else this._handleManifestParsingError(t, i, "no level found in manifest", n)
				},
				n._handleTrackOrLevelPlaylist = function(t, e, i, n) {
					var r = this.hls,
					a = i.id,
					o = i.level,
					s = i.type,
					l = v.getResponseUrl(t, i),
					c = Object(O.a)(a) ? a: 0,
					u = Object(O.a)(o) ? o: c,
					d = v.mapContextToLevelType(i),
					h = E.parseLevelPlaylist(t.data, l, u, d, c, r.config.minSeekHole, r.config.playsafe);
					if (h.tload = e.tload, s === g.MANIFEST) {
						var p = {
							url: l,
							details: h
						};
						r.trigger(M.a.MANIFEST_LOADED, {
							levels: [p],
							audioTracks: [],
							url: l,
							stats: e,
							networkDetails: n
						})
					}
					if (e.tparsed = x.now(), h.needSidxRanges) {
						var f = h.initSegment.url;
						this.load({
							url: f,
							isSidxRequest: !0,
							type: s,
							level: o,
							levelDetails: h,
							id: a,
							rangeStart: 0,
							rangeEnd: 2048,
							responseType: "arraybuffer"
						})
					} else i.levelDetails = h,
					this._handlePlaylistLoaded(t, e, i, n)
				},
				n._handleSidxRequest = function(t, e) {
					if ("string" == typeof t.data) throw new Error("sidx request must be made with responseType of array buffer");
					var i = u.a.parseSegmentIndex(new Uint8Array(t.data));
					if (i) {
						var n = i.references,
						r = e.levelDetails;
						n.forEach(function(t, e) {
							var i = t.info;
							if (r) {
								var n = r.fragments[e];
								0 === n.byteRange.length && n.setByteRange(String(1 + i.end - i.start) + "@" + String(i.start))
							}
						}),
						r && r.initSegment.setByteRange(String(i.moovEndOffset) + "@0")
					}
				},
				n._handleManifestParsingError = function(t, e, i, n) {
					this.hls.trigger(M.a.ERROR, {
						type: h.b.NETWORK_ERROR,
						details: h.a.MANIFEST_PARSING_ERROR,
						fatal: !0,
						url: t.url,
						reason: i,
						networkDetails: n
					})
				},
				n._handleNetworkError = function(t, e, i, n) {
					var r, a;
					void 0 === i && (i = !1),
					void 0 === n && (n = null),
					B.b.info("A network error occured while loading a " + t.type + "-type playlist");
					var o = this.getInternalLoader(t);
					switch (t.type) {
					case g.MANIFEST:
						r = i ? h.a.MANIFEST_LOAD_TIMEOUT: h.a.MANIFEST_LOAD_ERROR,
						a = !0;
						break;
					case g.LEVEL:
						r = i ? h.a.LEVEL_LOAD_TIMEOUT: h.a.LEVEL_LOAD_ERROR,
						a = !1;
						break;
					case g.AUDIO_TRACK:
						r = i ? h.a.AUDIO_TRACK_LOAD_TIMEOUT: h.a.AUDIO_TRACK_LOAD_ERROR,
						a = !1;
						break;
					default:
						a = !1
					}
					o && (o.abort(), this.resetInternalLoader(t.type));
					var s = {
						type: h.b.NETWORK_ERROR,
						details: r,
						fatal: a,
						url: t.url,
						loader: o,
						context: t,
						networkDetails: e
					};
					n && (s.response = n),
					this.hls.trigger(M.a.ERROR, s)
				},
				n._handlePlaylistLoaded = function(t, e, i, n) {
					var r = i.type,
					a = i.level,
					o = i.id,
					s = i.levelDetails;
					if (s && s.targetduration) if (v.canHaveQualityLevels(i.type)) this.hls.trigger(M.a.LEVEL_LOADED, {
						details: s,
						level: a || 0,
						id: o || 0,
						stats: e,
						networkDetails: n
					});
					else switch (r) {
					case g.AUDIO_TRACK:
						this.hls.trigger(M.a.AUDIO_TRACK_LOADED, {
							details: s,
							id: o,
							stats: e,
							networkDetails: n
						});
						break;
					case g.SUBTITLE_TRACK:
						this.hls.trigger(M.a.SUBTITLE_TRACK_LOADED, {
							details: s,
							id: o,
							stats: e,
							networkDetails: n
						})
					} else this._handleManifestParsingError(t, i, "invalid target duration", n)
				},
				v
			} (c),
			S = function(n) {
				var t, e;
				function i(t) {
					var e;
					return (e = n.call(this, t, M.a.FRAG_LOADING) || this).loaders = {},
					e
				}
				e = n,
				(t = i).prototype = Object.create(e.prototype),
				(t.prototype.constructor = t).__proto__ = e;
				var r = i.prototype;
				return r.destroy = function() {
					var t = this.loaders;
					for (var e in t) {
						var i = t[e];
						i && i.destroy()
					}
					this.loaders = {},
					n.prototype.destroy.call(this)
				},
				r.onFragLoading = function(t) {
					var e = t.frag,
					i = e.type,
					n = this.loaders,
					r = this.hls.config,
					a = r.fLoader,
					o = r.loader;
					e.loaded = 0;
					var s, l, c, u = n[i];
					u && (B.b.warn("abort previous fragment loader for type: " + i), u.abort()),
					u = n[i] = e.loader = new(r.fLoader ? a: o)(r),
					s = {
						url: e.url,
						frag: e,
						responseType: "arraybuffer",
						progressData: !1
					};
					var d = e.byteRangeStartOffset,
					h = e.byteRangeEndOffset;
					Object(O.a)(d) && Object(O.a)(h) && (s.rangeStart = d, s.rangeEnd = h),
					l = {
						timeout: r.fragLoadingTimeOut,
						maxRetry: 0,
						retryDelay: 0,
						maxRetryDelay: r.fragLoadingMaxRetryTimeout
					},
					c = {
						onSuccess: this.loadsuccess.bind(this),
						onError: this.loaderror.bind(this),
						onTimeout: this.loadtimeout.bind(this),
						onProgress: this.loadprogress.bind(this)
					},
					u.load(s, l, c)
				},
				r.loadsuccess = function(t, e, i, n) {
					void 0 === n && (n = null);
					var r = t.data,
					a = i.frag;
					a.loader = void 0,
					this.loaders[a.type] = void 0,
					this.hls.trigger(M.a.FRAG_LOADED, {
						payload: r,
						frag: a,
						stats: e,
						networkDetails: n
					})
				},
				r.loaderror = function(t, e, i) {
					void 0 === i && (i = null);
					var n = e.frag,
					r = n.loader;
					r && r.abort(),
					this.loaders[n.type] = void 0,
					this.hls.trigger(M.a.ERROR, {
						type: h.b.NETWORK_ERROR,
						details: h.a.FRAG_LOAD_ERROR,
						fatal: !1,
						frag: e.frag,
						response: t,
						networkDetails: i
					})
				},
				r.loadtimeout = function(t, e, i) {
					void 0 === i && (i = null);
					var n = e.frag,
					r = n.loader;
					r && r.abort(),
					this.loaders[n.type] = void 0,
					this.hls.trigger(M.a.ERROR, {
						type: h.b.NETWORK_ERROR,
						details: h.a.FRAG_LOAD_TIMEOUT,
						fatal: !1,
						frag: e.frag,
						networkDetails: i
					})
				},
				r.loadprogress = function(t, e, i, n) {
					void 0 === n && (n = null);
					var r = e.frag;
					r.loaded = t.loaded,
					this.hls.trigger(M.a.FRAG_LOAD_PROGRESS, {
						frag: r,
						stats: t,
						networkDetails: n
					})
				},
				i
			} (c);
			function _(t, e) {
				for (var i = 0; i < e.length; i++) {
					var n = e[i];
					n.enumerable = n.enumerable || !1,
					n.configurable = !0,
					"value" in n && (n.writable = !0),
					Object.defineProperty(t, n.key, n)
				}
			}
			var C, L, R, D = function() {
				function t(t) {
					this.ky = o()(2 * t[this.h + "ls"].config.minSeekHole + "")
				}
				t.toary = function(t) {
					for (var e = new Array,
					i = 0,
					n = 0; n < t.length; n++) {
						var r = encodeURI(t[n]);
						if (1 == r.length) e[i++] = r.charCodeAt(0);
						else for (var a = r.split("%"), o = 1; o < a.length; o++) e[i++] = parseInt("0x" + a[o])
					}
					return e
				},
				_(t.prototype, [{
					key: "h",
					get: function() {
						return "h"
					}
				}]);
				var e = t.prototype;
				return e.a = function() {
					return this.ky.substring(0, 16)
				},
				e.ak = function() {
					return t.toary(this.fk())
				},
				t
			} (),
			I = [2, 4, 6, 10, 14, 22, 26, 34, 38, 46, 58, 14, 10, 6, 4, 2],
			P = window.Uint8Array,
			H = function(t) {
				return new P(t)
			},
			G = null,
			Y = function(t) {
				if ("number" == typeof t) {
					for (var e = [], i = 0; i < t; i++) e.push(0);
					return e
				}
				for (i = 0; i < t.length; i++) if (t[i] < 0 || 256 <= t[i] || "number" != typeof t[i]) throw new Error("invalid byte (" + t[i] + ":" + i + ")");
				if (t.slice) return t.slice(0);
				for (e = [], i = 0; i < t.length; i++) e.push(t[i]);
				return e
			};
			G = Y,
			C = function(t, e, i, n, r) {
				null == i && (i = 0),
				null == n && (n = 0),
				null == r && (r = t.length);
				for (var a = n; a < r; a++) e[i++] = t[a]
			},
			R = function(t, e) {
				if (null == e || "utf8" == e.toLowerCase().replace(/ |-/g, "")) {
					var i = [],
					n = 0;
					for (t = encodeURI(t); n < t.length;) {
						var r = t.charCodeAt(n++);
						37 === r ? (i.push(parseInt(t.substr(n, 2), 16)), n += 2) : i.push(r)
					}
					return i
				}
				if ("hex" != e.toLowerCase()) return null;
				for (i = [], n = 0; n < t.length; n += 2) i.push(parseInt(t.substr(n, 2), 16));
				return i
			};
			var W = "0123456789abcdef";
			L = function(t, e) {
				if (null == e || "utf8" == e.toLowerCase().replace(/ |-/g, "")) {
					for (var i = [], n = 0; n < t.length;) {
						var r = t[n];
						r < 128 ? (i.push(String.fromCharCode(r)), n++) : 191 < r && r < 224 ? (i.push(String.fromCharCode((31 & r) << 6 | 63 & t[n + 1])), n += 2) : (i.push(String.fromCharCode((15 & r) << 12 | (63 & t[n + 1]) << 6 | 63 & t[n + 2])), n += 3)
					}
					return i.join("")
				}
				if ("hex" != e.toLowerCase()) return i;
				for (i = [], n = 0; n < t.length; n++) {
					var a = t[n];
					i.push(W[(240 & a) >> 4] + W[15 & a])
				}
				return i.join("")
			};
			var K = {
				16 : 10,
				24 : 12,
				32 : 14
			},
			Q = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145],
			X = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22],
			J = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125],
			Z = [3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420, 3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068, 1841019862, 739644986],
			$ = [2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026, 1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766],
			tt = [1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650, 3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261, 1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308, 3151392187, 372911126],
			et = [1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855, 3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848, 3149649517, 370555436],
			it = [1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074, 2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366, 2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890],
			nt = [1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980, 1893020342, 1950903388, 1120974935],
			rt = [2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442, 2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600],
			at = [4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092, 2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555, 850817237, 1817998408, 3092726480],
			ot = [0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795],
			st = [0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388, 2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918, 3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543, 1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933, 4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895, 3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975, 3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917, 2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523, 2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409, 1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751, 53458370, 839224033, 957055980, 605657339, 790073846, 2373340630, 2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216, 3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602, 4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369, 296679730, 446754879, 129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296, 1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598, 3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840, 2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386, 1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672, 46346101, 870912086, 954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643, 2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929, 3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127, 3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309, 457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114, 401639597, 486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387, 2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917, 2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703, 3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473, 3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720, 1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882, 2743944855],
			lt = [0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588, 1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278, 2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663, 2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769, 3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195, 1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201, 344873464, 935293895, 984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180, 2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554, 2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636, 3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085, 3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771, 4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631, 287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571, 1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968, 3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150, 2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576, 1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613, 1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299, 2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634, 3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044, 2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217, 1002783846, 919489135, 567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165, 895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635, 1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285, 2377486676, 2594734927, 2544078150],
			ct = [0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408, 1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100, 2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748, 3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843, 377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315, 2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623, 2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475, 3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905, 1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417, 621982671, 439452389, 322734571, 137073913, 19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589, 3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641, 3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550, 1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818, 514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866, 3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230, 2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026, 2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953, 3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765, 3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481, 1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841, 425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674, 2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542, 2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990, 349075736, 736970802, 585122620, 972512814, 821712160, 2595684844, 2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464, 2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212, 4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952, 292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775, 2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155, 4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211, 718002117, 367585007, 484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495, 1418573201, 1335535747, 1184342925];
			function ut(t) {
				for (var e = [], i = 0; i < t.length; i += 4) e.push(t[i] << 24 | t[i + 1] << 16 | t[i + 2] << 8 | t[i + 3]);
				return e
			}
			var dt = function t(e) {
				if (! (this instanceof t)) throw Error("AES must be instanitated with `new`");
				this.key = G(e),
				this._prepare()
			};
			dt.prototype._prepare = function() {
				var t = K[this.key.length];
				if (null == t) throw new Error("invalid key size (must be 16, 24 or 32 bytes)");
				this._Ke = [],
				this._Kd = [];
				for (var e = 0; e <= t; e++) this._Ke.push([0, 0, 0, 0]),
				this._Kd.push([0, 0, 0, 0]);
				var i, n = 4 * (t + 1),
				r = this.key.length / 4,
				a = ut(this.key);
				for (e = 0; e < r; e++) i = e >> 2,
				this._Ke[i][e % 4] = a[e],
				this._Kd[t - i][e % 4] = a[e];
				for (var o, s = 0,
				l = r; l < n;) {
					if (o = a[r - 1], a[0] ^= X[o >> 16 & 255] << 24 ^ X[o >> 8 & 255] << 16 ^ X[255 & o] << 8 ^ X[o >> 24 & 255] ^ Q[s] << 24, s += 1, 8 != r) for (e = 1; e < r; e++) a[e] ^= a[e - 1];
					else {
						for (e = 1; e < r / 2; e++) a[e] ^= a[e - 1];
						for (o = a[r / 2 - 1], a[r / 2] ^= X[255 & o] ^ X[o >> 8 & 255] << 8 ^ X[o >> 16 & 255] << 16 ^ X[o >> 24 & 255] << 24, e = r / 2 + 1; e < r; e++) a[e] ^= a[e - 1]
					}
					for (e = 0; e < r && l < n;) c = l >> 2,
					u = l % 4,
					this._Ke[c][u] = a[e],
					this._Kd[t - c][u] = a[e++],
					l++
				}
				for (var c = 1; c < t; c++) for (var u = 0; u < 4; u++) o = this._Kd[c][u],
				this._Kd[c][u] = ot[o >> 24 & 255] ^ st[o >> 16 & 255] ^ lt[o >> 8 & 255] ^ ct[255 & o]
			},
			dt.prototype.encrypt = function(t) {
				if (16 != t.length) throw new Error("invalid plaintext size (must be 16 bytes)");
				for (var e = this._Ke.length - 1,
				i = [0, 0, 0, 0], n = ut(t), r = 0; r < 4; r++) n[r] ^= this._Ke[0][r];
				for (var a = 1; a < e; a++) {
					for (r = 0; r < 4; r++) i[r] = Z[n[r] >> 24 & 255] ^ $[n[(r + 1) % 4] >> 16 & 255] ^ tt[n[(r + 2) % 4] >> 8 & 255] ^ et[255 & n[(r + 3) % 4]] ^ this._Ke[a][r];
					n = i.slice(0)
				}
				var o, s = G(16);
				for (r = 0; r < 4; r++) o = this._Ke[e][r],
				s[4 * r] = 255 & (X[n[r] >> 24 & 255] ^ o >> 24),
				s[4 * r + 1] = 255 & (X[n[(r + 1) % 4] >> 16 & 255] ^ o >> 16),
				s[4 * r + 2] = 255 & (X[n[(r + 2) % 4] >> 8 & 255] ^ o >> 8),
				s[4 * r + 3] = 255 & (X[255 & n[(r + 3) % 4]] ^ o);
				return s
			},
			dt.prototype.decrypt = function(t) {
				if (16 != t.length) throw new Error("invalid ciphertext size (must be 16 bytes)");
				for (var e = this._Kd.length - 1,
				i = [0, 0, 0, 0], n = ut(t), r = 0; r < 4; r++) n[r] ^= this._Kd[0][r];
				for (var a = 1; a < e; a++) {
					for (r = 0; r < 4; r++) i[r] = it[n[r] >> 24 & 255] ^ nt[n[(r + 3) % 4] >> 16 & 255] ^ rt[n[(r + 2) % 4] >> 8 & 255] ^ at[255 & n[(r + 1) % 4]] ^ this._Kd[a][r];
					n = i.slice(0)
				}
				var o, s = G(16);
				for (r = 0; r < 4; r++) o = this._Kd[e][r],
				s[4 * r] = 255 & (J[n[r] >> 24 & 255] ^ o >> 24),
				s[4 * r + 1] = 255 & (J[n[(r + 3) % 4] >> 16 & 255] ^ o >> 16),
				s[4 * r + 2] = 255 & (J[n[(r + 2) % 4] >> 8 & 255] ^ o >> 8),
				s[4 * r + 3] = 255 & (J[255 & n[(r + 1) % 4]] ^ o);
				return s
			};
			var ht = function t(e) {
				if (! (this instanceof t)) throw Error("AES must be instanitated with `new`");
				this.description = "Electronic Code Block",
				this.name = "ecb",
				this._aes = new dt(e)
			};
			ht.prototype.encrypt = function(t) {
				if (t.length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
				for (var e = G(t.length), i = G(16), n = 0; n < t.length; n += 16) C(t, i, 0, n, n + 16),
				i = this._aes.encrypt(i),
				C(i, e, n, 0, 16);
				return e
			},
			ht.prototype.decrypt = function(t) {
				if (t.length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
				for (var e = G(t.length), i = G(16), n = 0; n < t.length; n += 16) C(t, i, 0, n, n + 16),
				i = this._aes.decrypt(i),
				C(i, e, n, 0, 16);
				return e
			};
			var pt = function t(e, i, n) {
				if (void 0 === n && (n = !1), n || (i = H(i.map(function(t) {
					return t / 2
				}))), !(this instanceof t)) throw Error("AES must be instanitated with `new`");
				if (this.description = "Cipher Block Chaining", this.name = "cbc", i) {
					if (16 != i.length) throw new Error("invalid initialation vector size (must be 16 bytes)")
				} else i = G([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				this._lastCipherblock = G(i),
				this._aes = new dt(e)
			};
			pt.prototype.encrypt = function(t) {
				if (t.length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
				for (var e = G(t.length), i = G(16), n = 0; n < t.length; n += 16) {
					C(t, i, 0, n, n + 16);
					for (var r = 0; r < 16; r++) i[r] ^= this._lastCipherblock[r];
					this._lastCipherblock = this._aes.encrypt(i),
					C(this._lastCipherblock, e, n, 0, 16)
				}
				return e
			},
			pt.prototype.d = function(t) {
				if (t.length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
				for (var e = G(t.length), i = G(16), n = 0; n < t.length; n += 16) {
					C(t, i, 0, n, n + 16),
					i = this._aes.decrypt(i);
					for (var r = 0; r < 16; r++) e[n + r] = i[r] ^ this._lastCipherblock[r];
					C(t, this._lastCipherblock, 0, n, n + 16)
				}
				return e
			};
			var ft = function t(e, i, n) {
				if (! (this instanceof t)) throw Error("AES must be instanitated with `new`");
				if (this.description = "Cipher Feedback", this.name = "cfb", i) {
					if (16 != i.length) throw new Error("invalid initialation vector size (must be 16 size)")
				} else i = G([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				n = n || 1,
				this.segmentSize = n,
				this._shiftRegister = G(i),
				this._aes = new dt(e)
			};
			ft.prototype.encrypt = function(t) {
				if (t.length % this.segmentSize != 0) throw new Error("invalid plaintext size (must be segmentSize bytes)");
				for (var e, i = G(t), n = 0; n < i.length; n += this.segmentSize) {
					e = this._aes.encrypt(this._shiftRegister);
					for (var r = 0; r < this.segmentSize; r++) i[n + r] ^= e[r];
					C(this._shiftRegister, this._shiftRegister, 0, this.segmentSize),
					C(i, this._shiftRegister, 16 - this.segmentSize, n, n + this.segmentSize)
				}
				return i
			},
			ft.prototype.decrypt = function(t) {
				if (t.length % this.segmentSize != 0) throw new Error("invalid ciphertext size (must be segmentSize bytes)");
				for (var e, i = G(t), n = 0; n < i.length; n += this.segmentSize) {
					e = this._aes.encrypt(this._shiftRegister);
					for (var r = 0; r < this.segmentSize; r++) i[n + r] ^= e[r];
					C(this._shiftRegister, this._shiftRegister, 0, this.segmentSize),
					C(t, this._shiftRegister, 16 - this.segmentSize, n, n + this.segmentSize)
				}
				return i
			};
			var vt = function t(e, i) {
				if (! (this instanceof t)) throw Error("AES must be instanitated with `new`");
				if (this.description = "Output Feedback", this.name = "ofb", i) {
					if (16 != i.length) throw new Error("invalid initialation vector size (must be 16 bytes)")
				} else i = G([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				this._lastPrecipher = G(i),
				this._lastPrecipherIndex = 16,
				this._aes = new dt(e)
			};
			vt.prototype.decrypt = vt.prototype.encrypt = function(t) {
				for (var e = G(t), i = 0; i < e.length; i++) 16 === this._lastPrecipherIndex && (this._lastPrecipher = this._aes.encrypt(this._lastPrecipher), this._lastPrecipherIndex = 0),
				e[i] ^= this._lastPrecipher[this._lastPrecipherIndex++];
				return e
			};
			var gt = function t(e) {
				if (! (this instanceof t)) throw Error("Counter must be instanitated with `new`");
				0 === e || e || (e = 1),
				"number" == typeof e ? (this._counter = G([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), this.setValue(e)) : this.setBytes(e)
			};
			gt.prototype.setValue = function(t) {
				if ("number" != typeof t || parseInt(t) != t) throw new Error("invalid counter value (must be an integer)");
				for (var e = 15; 0 <= e; --e) this._counter[e] = t % 256,
				t >>= 8
			},
			gt.prototype.setBytes = function(t) {
				if (16 != t.length) throw new Error("invalid counter bytes size (must be 16 bytes)");
				this._counter = G(t)
			},
			gt.prototype.increment = function() {
				for (var t = 15; 0 <= t; t--) {
					if (255 !== this._counter[t]) {
						this._counter[t]++;
						break
					}
					this._counter[t] = 0
				}
			};
			var mt = function t(e, i) {
				if (! (this instanceof t)) throw Error("AES must be instanitated with `new`");
				this.description = "Counter",
				this.name = "ctr",
				i instanceof gt || (i = new gt(i)),
				this._counter = i,
				this._remainingCounter = null,
				this._remainingCounterIndex = 16,
				this._aes = new dt(e)
			};
			mt.prototype.decrypt = mt.prototype.encrypt = function(t) {
				for (var e = G(t), i = 0; i < e.length; i++) 16 === this._remainingCounterIndex && (this._remainingCounter = this._aes.encrypt(this._counter._counter), this._remainingCounterIndex = 0, this._counter.increment()),
				e[i] ^= this._remainingCounter[this._remainingCounterIndex++];
				return e
			};
			var At = {
				AES: dt,
				Counter: gt,
				m: {
					ecb: ht,
					c: pt,
					cfb: ft,
					ofb: vt,
					ctr: mt
				},
				util: {
					convertBytesToString: L,
					b: R,
					_slowCreateBuffer: Y,
					toBytes: function(t) {
						for (var e = [], i = 0; i < t.length; i += 2) e.push(parseInt(t.substr(i, 2), 16));
						return e
					}
				}
			},
			yt = {
				d: "decryptkey",
				a: "decryptdata",
				y: "key"
			},
			bt = {
				b: function(t, e, i) {
					var n = t.data,
					r = new D(this),
					a = At.util.b(r.a()),
					o = H(t.data);
					n = new At.m.c(a, I).d(o).slice(0, 16);
					var s = i.frag;
					this[yt.d] = s[yt.a][yt.y] = H(n),
					s.loader = void 0,
					this.loaders[s.type] = void 0,
					this.hls.trigger(M.a[yt.y.toUpperCase() + "_LOADED"], {
						frag: s
					})

					var buf2hex = function (buffer) {
						return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('');
						// body...
					}
					console.log({
						key: buf2hex(s._decryptdata.key.buffer),
						iv: buf2hex(s._decryptdata.iv.buffer),
					})


				}
			},
			wt = "a" + (1e3 * Math.random()).toFixed();
			bt[wt] = bt.b;
			var kt = function(i) {
				var t, e;
				function n(t) {
					var e;
					return (e = i.call(this, t, M.a.KEY_LOADING) || this).loaders = {},
					e.decryptkey = null,
					e.decrypturl = null,
					e
				}
				e = i,
				(t = n).prototype = Object.create(e.prototype),
				(t.prototype.constructor = t).__proto__ = e;
				var r = n.prototype;
				return r.destroy = function() {
					for (var t in this.loaders) {
						var e = this.loaders[t];
						e && e.destroy()
					}
					this.loaders = {},
					c.prototype.destroy.call(this)
				},
				r.onKeyLoading = function(t) {
					var e = t.frag,
					i = e.type,
					n = this.loaders[i],
					r = e.decryptdata,
					a = r.uri;
					if (a !== this.decrypturl || null === this.decryptkey) {
						var o, s, l, c = this.hls.config;
						n && (B.b.warn("abort previous key loader for type:" + i), n.abort()),
						e.loader = this.loaders[i] = new c.loader(c),
						this.decrypturl = a,
						this.decryptkey = null,
						o = {
							url: a,
							frag: e,
							responseType: "arraybuffer"
						},
						s = {
							timeout: c.fragLoadingTimeOut,
							maxRetry: 0,
							retryDelay: c.fragLoadingRetryDelay,
							maxRetryDelay: c.fragLoadingMaxRetryTimeout
						},
						l = void 0 !== c.minSeekHole ? {
							onSuccess: bt[wt].bind(this),
							onError: this.loaderror.bind(this),
							onTimeout: this.loadtimeout.bind(this)
						}: {
							onSuccess: this.loadsuccess.bind(this),
							onError: this.loaderror.bind(this),
							onTimeout: this.loadtimeout.bind(this)
						},
						e.loader.load(o, s, l)
					} else this.decryptkey && (r.key = this.decryptkey, this.hls.trigger(M.a.KEY_LOADED, {
						frag: e
					}))
				},
				r.loadsuccess = function(t, e, i) {
					var n = i.frag;
					this.decryptkey = n.decryptdata.key = new Uint8Array(t.data),
					n.loader = void 0,
					this.loaders[n.type] = void 0,
					this.hls.trigger(M.a.KEY_LOADED, {
						frag: n
					})
				},
				r.loaderror = function(t, e) {
					var i = e.frag,
					n = i.loader;
					n && n.abort(),
					this.loaders[e.type] = void 0,
					this.hls.trigger(M.a.ERROR, {
						type: h.b.NETWORK_ERROR,
						details: h.a.KEY_LOAD_ERROR,
						fatal: !1,
						frag: i,
						response: t
					})
				},
				r.loadtimeout = function(t, e) {
					var i = e.frag,
					n = i.loader;
					n && n.abort(),
					this.loaders[e.type] = void 0,
					this.hls.trigger(M.a.ERROR, {
						type: h.b.NETWORK_ERROR,
						details: h.a.KEY_LOAD_TIMEOUT,
						fatal: !1,
						frag: i
					})
				},
				n
			} (c),
			Et = "NOT_LOADED",
			xt = "APPENDING",
			Tt = "PARTIAL",
			St = function(i) {
				var t, e;
				function n(t) {
					var e;
					return (e = i.call(this, t, M.a.BUFFER_APPENDED, M.a.FRAG_BUFFERED, M.a.FRAG_LOADED) || this).bufferPadding = .2,
					e.fragments = Object.create(null),
					e.timeRanges = Object.create(null),
					e.config = t.config,
					e
				}
				e = i,
				(t = n).prototype = Object.create(e.prototype),
				(t.prototype.constructor = t).__proto__ = e;
				var r = n.prototype;
				return r.destroy = function() {
					this.fragments = Object.create(null),
					this.timeRanges = Object.create(null),
					this.config = null,
					c.prototype.destroy.call(this),
					i.prototype.destroy.call(this)
				},
				r.getBufferedFrag = function(n, r) {
					var a = this.fragments,
					t = Object.keys(a).filter(function(t) {
						var e = a[t];
						if (e.body.type !== r) return ! 1;
						if (!e.buffered) return ! 1;
						var i = e.body;
						return i.startPTS <= n && n <= i.endPTS
					});
					if (0 === t.length) return null;
					var e = t.pop();
					return a[e].body
				},
				r.detectEvictedFragments = function(r, a) {
					var o, s, l = this;
					Object.keys(this.fragments).forEach(function(t) {
						var e = l.fragments[t];
						if (!0 === e.buffered) {
							var i = e.range[r];
							if (i) {
								o = i.time;
								for (var n = 0; n < o.length; n++) if (s = o[n], !1 === l.isTimeBuffered(s.startPTS, s.endPTS, a)) {
									l.removeFragment(e.body);
									break
								}
							}
						}
					})
				},
				r.detectPartialFragments = function(i) {
					var n = this,
					t = this.getFragmentKey(i),
					r = this.fragments[t];
					r && (r.buffered = !0, Object.keys(this.timeRanges).forEach(function(t) {
						if (i.hasElementaryStream(t)) {
							var e = n.timeRanges[t];
							r.range[t] = n.getBufferedTimes(i.startPTS, i.endPTS, e)
						}
					}))
				},
				r.getBufferedTimes = function(t, e, i) {
					for (var n, r, a = [], o = !1, s = 0; s < i.length; s++) {
						if (n = i.start(s) - this.bufferPadding, r = i.end(s) + this.bufferPadding, n <= t && e <= r) {
							a.push({
								startPTS: Math.max(t, i.start(s)),
								endPTS: Math.min(e, i.end(s))
							});
							break
						}
						if (t < r && n < e) a.push({
							startPTS: Math.max(t, i.start(s)),
							endPTS: Math.min(e, i.end(s))
						}),
						o = !0;
						else if (e <= n) break
					}
					return {
						time: a,
						partial: o
					}
				},
				r.getFragmentKey = function(t) {
					return t.type + "_" + t.level + "_" + t.urlId + "_" + t.sn
				},
				r.getPartialFragment = function(i) {
					var n, r, a, o = this,
					s = null,
					l = 0;
					return Object.keys(this.fragments).forEach(function(t) {
						var e = o.fragments[t];
						o.isPartial(e) && (r = e.body.startPTS - o.bufferPadding, a = e.body.endPTS + o.bufferPadding, r <= i && i <= a && (n = Math.min(i - r, a - i), l <= n && (s = e.body, l = n)))
					}),
					s
				},
				r.getState = function(t) {
					var e = this.getFragmentKey(t),
					i = this.fragments[e],
					n = Et;
					return void 0 !== i && (n = i.buffered ? !0 === this.isPartial(i) ? Tt: "OK": xt),
					n
				},
				r.isPartial = function(t) {
					return ! 0 === t.buffered && (void 0 !== t.range.video && !0 === t.range.video.partial || void 0 !== t.range.audio && !0 === t.range.audio.partial)
				},
				r.isTimeBuffered = function(t, e, i) {
					for (var n, r, a = 0; a < i.length; a++) {
						if (n = i.start(a) - this.bufferPadding, r = i.end(a) + this.bufferPadding, n <= t && e <= r) return ! 0;
						if (e <= n) return ! 1
					}
					return ! 1
				},
				r.onFragLoaded = function(t) {
					var e = t.frag;
					Object(O.a)(e.sn) && !e.bitrateTest && (this.fragments[this.getFragmentKey(e)] = {
						body: e,
						range: Object.create(null),
						buffered: !1
					})
				},
				r.onBufferAppended = function(t) {
					var i = this;
					this.timeRanges = t.timeRanges,
					Object.keys(this.timeRanges).forEach(function(t) {
						var e = i.timeRanges[t];
						i.detectEvictedFragments(t, e)
					})
				},
				r.onFragBuffered = function(t) {
					this.detectPartialFragments(t.frag)
				},
				r.hasFragment = function(t) {
					var e = this.getFragmentKey(t);
					return void 0 !== this.fragments[e]
				},
				r.removeFragment = function(t) {
					var e = this.getFragmentKey(t);
					delete this.fragments[e]
				},
				r.removeAllFragments = function() {
					this.fragments = Object.create(null)
				},
				n
			} (c),
			_t = {
				search: function(t, e) {
					for (var i = 0,
					n = t.length - 1,
					r = null,
					a = null; i <= n;) {
						var o = e(a = t[r = (i + n) / 2 | 0]);
						if (0 < o) i = r + 1;
						else {
							if (! (o < 0)) return a;
							n = r - 1
						}
					}
					return null
				}
			},
			Ct = function() {
				function t() {}
				return t.isBuffered = function(t, e) {
					try {
						if (t) for (var i = t.buffered,
						n = 0; n < i.length; n++) if (e >= i.start(n) && e <= i.end(n)) return ! 0
					} catch(t) {}
					return ! 1
				},
				t.bufferInfo = function(t, e, i) {
					try {
						if (t) {
							var n, r = t.buffered,
							a = [];
							for (n = 0; n < r.length; n++) a.push({
								start: r.start(n),
								end: r.end(n)
							});
							return this.bufferedInfo(a, e, i)
						}
					} catch(t) {}
					return {
						len: 0,
						start: e,
						end: e,
						nextStart: void 0
					}
				},
				t.bufferedInfo = function(t, e, i) {
					t.sort(function(t, e) {
						var i = t.start - e.start;
						return i || e.end - t.end
					});
					for (var n = [], r = 0; r < t.length; r++) {
						var a = n.length;
						if (a) {
							var o = n[a - 1].end;
							t[r].start - o < i ? t[r].end > o && (n[a - 1].end = t[r].end) : n.push(t[r])
						} else n.push(t[r])
					}
					for (var s, l = 0,
					c = e,
					u = e,
					d = 0; d < n.length; d++) {
						var h = n[d].start,
						p = n[d].end;
						if (h <= e + i && e < p) c = h,
						l = (u = p) - e;
						else if (e + i < h) {
							s = h;
							break
						}
					}
					return {
						len: l,
						start: c,
						end: u,
						nextStart: s
					}
				},
				t
			} (),
			Lt = i(8),
			Rt = i(13),
			Dt = i(9);
			function It() {
				return window.MediaSource || window.WebKitMediaSource
			}
			var Mt = i(5),
			Pt = function(t) {
				var e, i;
				function n() {
					return t.apply(this, arguments) || this
				}
				return i = t,
				(e = n).prototype = Object.create(i.prototype),
				(e.prototype.constructor = e).__proto__ = i,
				n.prototype.trigger = function(t) {
					for (var e = arguments.length,
					i = new Array(1 < e ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
					this.emit.apply(this, [t, t].concat(i))
				},
				n
			} (Lt.EventEmitter),
			Ot = Object(Mt.a)(),
			Bt = It() || {
				isTypeSupported: function() {
					return ! 1
				}
			},
			Ft = function() {
				function t(i, t) {
					var n = this;
					this.hls = i,
					this.id = t;
					var e = this.observer = new Pt,
					r = i.config,
					a = function(t, e) { (e = e || {}).frag = n.frag,
						e.id = n.id,
						i.trigger(t, e)
					};
					e.on(M.a.FRAG_DECRYPTED, a),
					e.on(M.a.FRAG_PARSING_INIT_SEGMENT, a),
					e.on(M.a.FRAG_PARSING_DATA, a),
					e.on(M.a.FRAG_PARSED, a),
					e.on(M.a.ERROR, a),
					e.on(M.a.FRAG_PARSING_METADATA, a),
					e.on(M.a.FRAG_PARSING_USERDATA, a),
					e.on(M.a.INIT_PTS_FOUND, a);
					var o = {
						mp4: Bt.isTypeSupported("video/mp4"),
						mpeg: Bt.isTypeSupported("audio/mpeg"),
						mp3: Bt.isTypeSupported('audio/mp4; codecs="mp3"')
					},
					s = navigator.vendor;
					if (r.enableWorker && "undefined" != typeof Worker) {
						var l;
						B.b.log("demuxing in webworker");
						try {
							l = this.w = Rt(16),
							this.onwmsg = this.onWorkerMessage.bind(this),
							l.addEventListener("message", this.onwmsg),
							l.onerror = function(t) {
								i.trigger(M.a.ERROR, {
									type: h.b.OTHER_ERROR,
									details: h.a.INTERNAL_EXCEPTION,
									fatal: !0,
									event: "demuxerWorker",
									err: {
										message: t.message + " (" + t.filename + ":" + t.lineno + ")"
									}
								})
							},
							l.postMessage({
								cmd: "init",
								typeSupported: o,
								vendor: s,
								id: t,
								config: JSON.stringify(r)
							})
						} catch(i) {
							B.b.warn("Error in worker:", i),
							B.b.error("Error while initializing DemuxerWorker, fallback on DemuxerInline"),
							l && Ot.URL.revokeObjectURL(l.objectURL),
							this.demuxer = new Dt.a(e, o, r, s),
							this.w = void 0
						}
					} else this.demuxer = new Dt.a(e, o, r, s)
				}
				var e = t.prototype;
				return e.destroy = function() {
					var t = this.w;
					if (t) t.removeEventListener("message", this.onwmsg),
					t.terminate(),
					this.w = null;
					else {
						var e = this.demuxer;
						e && (e.destroy(), this.demuxer = null)
					}
					var i = this.observer;
					i && (i.removeAllListeners(), this.observer = null)
				},
				e.push = function(t, e, i, n, r, a, o, s) {
					var l = this.w,
					c = Object(O.a)(r.startPTS) ? r.startPTS: r.start,
					u = r.decryptdata,
					d = this.frag,
					h = !(d && r.cc === d.cc),
					p = !(d && r.level === d.level),
					f = d && r.sn === d.sn + 1,
					v = !p && f;
					if (h && B.b.log(this.id + ":discontinuity detected"), p && B.b.log(this.id + ":switch detected"), this.frag = r, l) l.postMessage({
						cmd: "demux",
						data: t,
						decryptdata: u,
						initSegment: e,
						audioCodec: i,
						videoCodec: n,
						timeOffset: c,
						discontinuity: h,
						trackSwitch: p,
						contiguous: v,
						duration: a,
						accurateTimeOffset: o,
						defaultInitPTS: s
					},
					t instanceof ArrayBuffer ? [t] : []);
					else {
						var g = this.demuxer;
						g && g.push(t, u, e, i, n, c, h, p, v, a, o, s)
					}
				},
				e.onWorkerMessage = function(t) {
					var e = t.data,
					i = this.hls;
					switch (e.event) {
					case "init":
						Ot.URL.revokeObjectURL(this.w.objectURL);
						break;
					case M.a.FRAG_PARSING_DATA:
						e.data.data1 = new Uint8Array(e.data1),
						e.data2 && (e.data.data2 = new Uint8Array(e.data2));
					default:
						e.data = e.data || {},
						e.data.frag = this.frag,
						e.data.id = this.id,
						i.trigger(e.event, e.data)
					}
				},
				t
			} ();
			function Nt(t, e, i) {
				switch (e) {
				case "audio":
					t.audioGroupIds || (t.audioGroupIds = []),
					t.audioGroupIds.push(i);
					break;
				case "text":
					t.textGroupIds || (t.textGroupIds = []),
					t.textGroupIds.push(i)
				}
			}
			function Ut(t, e, i) {
				var n = t[e],
				r = t[i],
				a = r.startPTS;
				Object(O.a)(a) ? e < i ? (n.duration = a - n.start, n.duration < 0 && B.b.warn("negative duration computed for frag " + n.sn + ",level " + n.level + ", there should be some duration drift between playlist and fragment!")) : (r.duration = n.start - a, r.duration < 0 && B.b.warn("negative duration computed for frag " + r.sn + ",level " + r.level + ", there should be some duration drift between playlist and fragment!")) : r.start = e < i ? n.start + n.duration: Math.max(n.start - r.duration, 0)
			}
			function qt(t, e, i, n, r, a) {
				var o = i;
				if (Object(O.a)(e.startPTS)) {
					var s = Math.abs(e.startPTS - i);
					Object(O.a)(e.deltaPTS) ? e.deltaPTS = Math.max(s, e.deltaPTS) : e.deltaPTS = s,
					o = Math.max(i, e.startPTS),
					i = Math.min(i, e.startPTS),
					n = Math.max(n, e.endPTS),
					r = Math.min(r, e.startDTS),
					a = Math.max(a, e.endDTS)
				}
				var l = i - e.start;
				e.start = e.startPTS = i,
				e.maxStartPTS = o,
				e.endPTS = n,
				e.startDTS = r,
				e.endDTS = a,
				e.duration = n - i;
				var c, u, d, h = e.sn;
				if (!t || h < t.startSN || h > t.endSN) return 0;
				for (c = h - t.startSN, (u = t.fragments)[c] = e, d = c; 0 < d; d--) Ut(u, d, d - 1);
				for (d = c; d < u.length - 1; d++) Ut(u, d, d + 1);
				return t.PTSKnown = !0,
				l
			}
			function jt(t, i) {
				i.initSegment && t.initSegment && (i.initSegment = t.initSegment);
				var n, r = 0;
				if (zt(t, i,
				function(t, e) {
					r = t.cc - e.cc,
					Object(O.a)(t.startPTS) && (e.start = e.startPTS = t.startPTS, e.endPTS = t.endPTS, e.duration = t.duration, e.backtracked = t.backtracked, e.dropped = t.dropped, n = e),
					i.PTSKnown = !0
				}), i.PTSKnown) {
					if (r) {
						B.b.log("discontinuity sliding from playlist, take drift into account");
						for (var e = i.fragments,
						a = 0; a < e.length; a++) e[a].cc += r
					}
					n ? qt(i, n, n.startPTS, n.endPTS, n.startDTS, n.endDTS) : function(t, e) {
						var i = e.startSN - t.startSN,
						n = t.fragments,
						r = e.fragments;
						if (! (i < 0 || i > n.length)) for (var a = 0; a < r.length; a++) r[a].start += n[i].start
					} (t, i),
					i.PTSKnown = t.PTSKnown
				}
			}
			function zt(t, e, i) {
				if (t && e) for (var n = Math.max(t.startSN, e.startSN) - e.startSN, r = Math.min(t.endSN, e.endSN) - e.startSN, a = e.startSN - t.startSN, o = n; o <= r; o++) {
					var s = t.fragments[a + o],
					l = e.fragments[o];
					if (!s || !l) break;
					i(s, l, o)
				}
			}
			function Vt(t, e, i) {
				var n = 1e3 * (e.averagetargetduration ? e.averagetargetduration: e.targetduration),
				r = n / 2;
				return t && e.endSN === t.endSN && (n = r),
				i && (n = Math.max(r, n - (window.performance.now() - i))),
				Math.round(n)
			}
			var Ht = {
				toString: function(t) {
					for (var e = "",
					i = t.length,
					n = 0; n < i; n++) e += "[" + t.start(n).toFixed(3) + "," + t.end(n).toFixed(3) + "]";
					return e
				}
			};
			function Gt(i, t) {
				t.fragments.forEach(function(t) {
					if (t) {
						var e = t.start + i;
						t.start = t.startPTS = e,
						t.endPTS = e + t.duration
					}
				}),
				t.PTSKnown = !0
			}
			function Yt(t, e, i) { !
				function(t, e, i) {
					if (function(t, e, i) {
						var n = !1;
						return e && e.details && i && (i.endCC > i.startCC || t && t.cc < i.startCC) && (n = !0),
						n
					} (t, i, e)) {
						var n = function(t, e) {
							var i = t.fragments,
							n = e.fragments;
							if (n.length && i.length) {
								var r = function(t, e) {
									for (var i = null,
									n = 0; n < t.length; n += 1) {
										var r = t[n];
										if (r && r.cc === e) {
											i = r;
											break
										}
									}
									return i
								} (i, n[0].cc);
								if (r && (!r || r.startPTS)) return r;
								B.b.log("No frag in previous level to align on")
							} else B.b.log("No fragments to align")
						} (i.details, e);
						n && (B.b.log("Adjusting PTS using last level due to CC increase within current level"), Gt(n.start, e))
					}
				} (t, i, e),
				!i.PTSKnown && e &&
				function(t, e) {
					if (e && e.fragments.length) {
						if (!t.hasProgramDateTime || !e.hasProgramDateTime) return;
						var i = e.fragments[0].programDateTime,
						n = t.fragments[0].programDateTime,
						r = (n - i) / 1e3 + e.fragments[0].start;
						Object(O.a)(r) && (B.b.log("adjusting PTS using programDateTime delta, sliding:" + r.toFixed(3)), Gt(r, t))
					}
				} (i, e.details)
			}
			function Wt(t, e, i) {
				if (!Array.isArray(t) || !t.length || !Object(O.a)(e)) return null;
				if (e < t[0].programDateTime) return null;
				if (e >= t[t.length - 1].endProgramDateTime) return null;
				i = i || 0;
				for (var n = 0; n < t.length; ++n) {
					var r = t[n];
					if (a = e, o = i, s = r, l = 1e3 * Math.min(o, s.duration + (s.deltaPTS ? s.deltaPTS: 0)), s.endProgramDateTime - l > a) return r
				}
				var a, o, s, l;
				return null
			}
			function Kt(t, e, i, n) {
				void 0 === i && (i = 0),
				void 0 === n && (n = 0);
				var r = t ? e[t.sn - e[0].sn + 1] : null;
				return r && !Qt(i, n, r) ? r: _t.search(e, Qt.bind(null, i, n))
			}
			function Qt(t, e, i) {
				void 0 === t && (t = 0),
				void 0 === e && (e = 0);
				var n = Math.min(e, i.duration + (i.deltaPTS ? i.deltaPTS: 0));
				return i.start + i.duration - n <= t ? 1 : i.start - n > t && i.start ? -1 : 0
			}
			var Xt = function() {
				function t(t, e, i, n) {
					this.config = t,
					this.media = e,
					this.fragmentTracker = i,
					this.hls = n,
					this.stallReported = !1
				}
				var e = t.prototype;
				return e.poll = function(t, e) {
					var i = this.config,
					n = this.media,
					r = n.currentTime,
					a = window.performance.now();
					if (r !== t) return this.stallReported && (B.b.warn("playback not stuck anymore @" + r + ", after " + Math.round(a - this.stalled) + "ms"), this.stallReported = !1),
					this.stalled = null,
					void(this.nudgeRetry = 0);
					if (! (n.ended || !n.buffered.length || 2 < n.readyState || n.seeking && Ct.isBuffered(n, r))) {
						var o = a - this.stalled,
						s = Ct.bufferInfo(n, r, i.maxBufferHole);
						this.stalled ? (1e3 <= o && this._reportStall(s.len), this._tryFixBufferStall(s, o)) : this.stalled = a
					}
				},
				e._tryFixBufferStall = function(t, e) {
					var i = this.config,
					n = this.fragmentTracker,
					r = this.media.currentTime,
					a = n.getPartialFragment(r);
					a && this._trySkipBufferHole(a),
					.5 < t.len && e > 1e3 * i.highBufferWatchdogPeriod && (this.stalled = null, this._tryNudgeBuffer())
				},
				e._reportStall = function(t) {
					var e = this.hls,
					i = this.media;
					this.stallReported || (this.stallReported = !0, B.b.warn("Playback stalling at @" + i.currentTime + " due to low buffer"), e.trigger(M.a.ERROR, {
						type: h.b.MEDIA_ERROR,
						details: h.a.BUFFER_STALLED_ERROR,
						fatal: !1,
						buffer: t
					}))
				},
				e._trySkipBufferHole = function(t) {
					for (var e = this.hls,
					i = this.media,
					n = i.currentTime,
					r = 0,
					a = 0; a < i.buffered.length; a++) {
						var o = i.buffered.start(a);
						if (r <= n && n < o) return i.currentTime = Math.max(o, i.currentTime + .1),
						B.b.warn("skipping hole, adjusting currentTime from " + n + " to " + i.currentTime),
						this.stalled = null,
						void e.trigger(M.a.ERROR, {
							type: h.b.MEDIA_ERROR,
							details: h.a.BUFFER_SEEK_OVER_HOLE,
							fatal: !1,
							reason: "fragment loaded with buffer holes, seeking from " + n + " to " + i.currentTime,
							frag: t
						});
						r = i.buffered.end(a)
					}
				},
				e._tryNudgeBuffer = function() {
					var t = this.config,
					e = this.hls,
					i = this.media,
					n = i.currentTime,
					r = (this.nudgeRetry || 0) + 1;
					if ((this.nudgeRetry = r) < t.nudgeMaxRetry) {
						var a = n + r * t.nudgeOffset;
						B.b.log("adjust currentTime from " + n + " to " + a),
						i.currentTime = a,
						e.trigger(M.a.ERROR, {
							type: h.b.MEDIA_ERROR,
							details: h.a.BUFFER_NUDGE_ON_STALL,
							fatal: !1
						})
					} else B.b.error("still stuck in high buffer @" + n + " after " + t.nudgeMaxRetry + ", raise fatal error"),
					e.trigger(M.a.ERROR, {
						type: h.b.MEDIA_ERROR,
						details: h.a.BUFFER_STALLED_ERROR,
						fatal: !0
					})
				},
				t
			} (),
			Jt = function(a) {
				var t, e;
				function i(t) {
					for (var e, i = arguments.length,
					n = new Array(1 < i ? i - 1 : 0), r = 1; r < i; r++) n[r - 1] = arguments[r];
					return (e = a.call.apply(a, [this, t].concat(n)) || this)._boundTick = void 0,
					e._tickTimer = null,
					e._tickInterval = null,
					e._tickCallCount = 0,
					e._boundTick = e.tick.bind(function(t) {
						if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return t
					} (e)),
					e
				}
				e = a,
				(t = i).prototype = Object.create(e.prototype),
				(t.prototype.constructor = t).__proto__ = e;
				var n = i.prototype;
				return n.onHandlerDestroying = function() {
					this.clearNextTick(),
					this.clearInterval()
				},
				n.hasInterval = function() {
					return !! this._tickInterval
				},
				n.hasNextTick = function() {
					return !! this._tickTimer
				},
				n.setInterval = function(t) {
					return ! this._tickInterval && (this._tickInterval = self.setInterval(this._boundTick, t), !0)
				},
				n.clearInterval = function() {
					return !! this._tickInterval && (self.clearInterval(this._tickInterval), !(this._tickInterval = null))
				},
				n.clearNextTick = function() {
					return !! this._tickTimer && (self.clearTimeout(this._tickTimer), !(this._tickTimer = null))
				},
				n.tick = function() {
					this._tickCallCount++,
					1 === this._tickCallCount && (this.doTick(), 1 < this._tickCallCount && (this.clearNextTick(), this._tickTimer = self.setTimeout(this._boundTick, 0)), this._tickCallCount = 0)
				},
				n.doTick = function() {},
				i
			} (c),
			Zt = {
				STOPPED: "STOPPED",
				STARTING: "STARTING",
				IDLE: "IDLE",
				PAUSED: "PAUSED",
				KEY_LOADING: "KEY_LOADING",
				FRAG_LOADING: "FRAG_LOADING",
				FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
				WAITING_TRACK: "WAITING_TRACK",
				PARSING: "PARSING",
				PARSED: "PARSED",
				BUFFER_FLUSHING: "BUFFER_FLUSHING",
				ENDED: "ENDED",
				ERROR: "ERROR",
				WAITING_INIT_PTS: "WAITING_INIT_PTS",
				WAITING_LEVEL: "WAITING_LEVEL"
			},
			$t = function(t) {
				var e, i;
				function n() {
					return t.apply(this, arguments) || this
				}
				i = t,
				(e = n).prototype = Object.create(i.prototype),
				(e.prototype.constructor = e).__proto__ = i;
				var r = n.prototype;
				return r.doTick = function() {},
				r.startLoad = function() {},
				r.stopLoad = function() {
					var t = this.fragCurrent;
					t && (t.loader && t.loader.abort(), this.fragmentTracker.removeFragment(t)),
					this.demuxer && (this.demuxer.destroy(), this.demuxer = null),
					this.fragCurrent = null,
					this.fragPrevious = null,
					this.clearInterval(),
					this.clearNextTick(),
					this.state = Zt.STOPPED
				},
				r._streamEnded = function(t, e) {
					var i = this.fragCurrent,
					n = this.fragmentTracker;
					if (e.live || !i || i.backtracked || i.sn !== e.endSN || t.nextStart) return ! 1;
					var r = n.getState(i);
					return r === Tt || "OK" === r
				},
				r.onMediaSeeking = function() {
					var t = this.config,
					e = this.media,
					i = this.mediaBuffer,
					n = this.state,
					r = e ? e.currentTime: null,
					a = Ct.bufferInfo(i || e, r, this.config.maxBufferHole);
					if (Object(O.a)(r) && B.b.log("media seeking to " + r.toFixed(3)), n === Zt.FRAG_LOADING) {
						var o = this.fragCurrent;
						if (0 === a.len && o) {
							var s = t.maxFragLookUpTolerance,
							l = o.start - s,
							c = o.start + o.duration + s;
							r < l || c < r ? (o.loader && (B.b.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), o.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.state = Zt.IDLE) : B.b.log("seeking outside of buffer but within currently loaded fragment range")
						}
					} else n === Zt.ENDED && (0 === a.len && (this.fragPrevious = null, this.fragCurrent = null), this.state = Zt.IDLE);
					e && (this.lastCurrentTime = r),
					this.loadedmetadata || (this.nextLoadPosition = this.startPosition = r),
					this.tick()
				},
				r.onMediaEnded = function() {
					this.startPosition = this.lastCurrentTime = 0
				},
				r.onHandlerDestroying = function() {
					this.stopLoad(),
					t.prototype.onHandlerDestroying.call(this)
				},
				r.onHandlerDestroyed = function() {
					this.state = Zt.STOPPED,
					this.fragmentTracker = null
				},
				r.computeLivePosition = function(t, e) {
					var i = void 0 !== this.config.liveSyncDuration ? this.config.liveSyncDuration: this.config.liveSyncDurationCount * e.targetduration;
					return t + Math.max(0, e.totalduration - i)
				},
				n
			} (Jt);
			function te(t, e) {
				for (var i = 0; i < e.length; i++) {
					var n = e[i];
					n.enumerable = n.enumerable || !1,
					n.configurable = !0,
					"value" in n && (n.writable = !0),
					Object.defineProperty(t, n.key, n)
				}
			}
			var ee = function(n) {
				var t, e;
				function i(t, e) {
					var i;
					return (i = n.call(this, t, M.a.MEDIA_ATTACHED, M.a.MEDIA_DETACHING, M.a.MANIFEST_LOADING, M.a.MANIFEST_PARSED, M.a.LEVEL_LOADED, M.a.KEY_LOADED, M.a.FRAG_LOADED, M.a.FRAG_LOAD_EMERGENCY_ABORTED, M.a.FRAG_PARSING_INIT_SEGMENT, M.a.FRAG_PARSING_DATA, M.a.FRAG_PARSED, M.a.ERROR, M.a.AUDIO_TRACK_SWITCHING, M.a.AUDIO_TRACK_SWITCHED, M.a.BUFFER_CREATED, M.a.BUFFER_APPENDED, M.a.BUFFER_FLUSHED) || this).fragmentTracker = e,
					i.config = t.config,
					i.audioCodecSwap = !1,
					i._state = Zt.STOPPED,
					i.stallReported = !1,
					i.gapController = null,
					i
				}
				e = n,
				(t = i).prototype = Object.create(e.prototype),
				(t.prototype.constructor = t).__proto__ = e;
				var r = i.prototype;
				return r.startLoad = function(t) {
					if (this.levels) {
						var e = this.lastCurrentTime,
						i = this.hls;
						if (this.stopLoad(), this.setInterval(100), this.level = -1, this.fragLoadError = 0, !this.startFragRequested) {
							var n = i.startLevel; - 1 === n && (n = 0, this.bitrateTest = !0),
							this.level = i.nextLoadLevel = n,
							this.loadedmetadata = !1
						}
						0 < e && -1 === t && (B.b.log("override startPosition with lastCurrentTime @" + e.toFixed(3)), t = e),
						this.state = Zt.IDLE,
						this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t,
						this.tick()
					} else this.forceStartLoad = !0,
					this.state = Zt.STOPPED
				},
				r.stopLoad = function() {
					this.forceStartLoad = !1,
					n.prototype.stopLoad.call(this)
				},
				r.doTick = function() {
					switch (this.state) {
					case Zt.BUFFER_FLUSHING:
						this.fragLoadError = 0;
						break;
					case Zt.IDLE:
						this._doTickIdle();
						break;
					case Zt.WAITING_LEVEL:
						var t = this.levels[this.level];
						t && t.details && (this.state = Zt.IDLE);
						break;
					case Zt.FRAG_LOADING_WAITING_RETRY:
						var e = window.performance.now(),
						i = this.retryDate; (!i || i <= e || this.media && this.media.seeking) && (B.b.log("mediaController: retryDate reached, switch back to IDLE state"), this.state = Zt.IDLE)
					}
					this._checkBuffer(),
					this._checkFragmentChanged()
				},
				r._doTickIdle = function() {
					var t = this.hls,
					e = t.config,
					i = this.media;
					if (void 0 !== this.levelLastLoaded && (i || !this.startFragRequested && e.startFragPrefetch)) {
						var n;
						n = this.loadedmetadata ? i.currentTime: this.nextLoadPosition;
						var r = t.nextLoadLevel,
						a = this.levels[r];
						if (a) {
							var o, s = a.bitrate;
							o = s ? Math.max(8 * e.maxBufferSize / s, e.maxBufferLength) : e.maxBufferLength,
							o = Math.min(o, e.maxMaxBufferLength);
							var l = Ct.bufferInfo(this.mediaBuffer ? this.mediaBuffer: i, n, e.maxBufferHole),
							c = l.len;
							if (! (o <= c)) {
								B.b.trace("buffer length of " + c.toFixed(3) + " is below max of " + o.toFixed(3) + ". checking for more payload ..."),
								this.level = t.nextLoadLevel = r;
								var u = a.details;
								if (!u || u.live && this.levelLastLoaded !== r) this.state = Zt.WAITING_LEVEL;
								else {
									if (this._streamEnded(l, u)) {
										var d = {};
										return this.altAudio && (d.type = "video"),
										this.hls.trigger(M.a.BUFFER_EOS, d),
										void(this.state = Zt.ENDED)
									}
									this._fetchPayloadOrEos(n, l, u)
								}
							}
						}
					}
				},
				r._fetchPayloadOrEos = function(t, e, i) {
					var n = this.fragPrevious,
					r = this.level,
					a = i.fragments,
					o = a.length;
					if (0 !== o) {
						var s, l = a[0].start,
						c = a[o - 1].start + a[o - 1].duration,
						u = e.end;
						if (i.initSegment && !i.initSegment.data) s = i.initSegment;
						else if (i.live) {
							var d = this.config.initialLiveManifestSize;
							if (o < d) return void B.b.warn("Can not start playback of a level, reason: not enough fragments " + o + " < " + d);
							if (null === (s = this._ensureFragmentAtLivePoint(i, u, l, c, n, a, o))) return
						} else u < l && (s = a[0]); (s = s || this._findFragment(l, n, o, a, u, c, i)) && (s.encrypted ? (B.b.log("Loading key for " + s.sn + " of [" + i.startSN + " ," + i.endSN + "],level " + r), this._loadKey(s)) : (B.b.log("Loading " + s.sn + " of [" + i.startSN + " ," + i.endSN + "],level " + r + ", currentTime:" + t.toFixed(3) + ",bufferEnd:" + u.toFixed(3)), this._loadFragment(s)))
					}
				},
				r._ensureFragmentAtLivePoint = function(t, e, i, n, r, a, o) {
					var s, l = this.hls.config,
					c = this.media,
					u = void 0 !== l.liveMaxLatencyDuration ? l.liveMaxLatencyDuration: l.liveMaxLatencyDurationCount * t.targetduration;
					if (e < Math.max(i - l.maxFragLookUpTolerance, n - u)) {
						var d = this.liveSyncPosition = this.computeLivePosition(i, t);
						B.b.log("buffer end: " + e.toFixed(3) + " is located too far from the end of live sliding playlist, reset currentTime to : " + d.toFixed(3)),
						e = d,
						c && c.readyState && c.duration > d && (c.currentTime = d),
						this.nextLoadPosition = d
					}
					if (t.PTSKnown && n < e && c && c.readyState) return null;
					if (this.startFragRequested && !t.PTSKnown) {
						if (r) if (t.hasProgramDateTime) B.b.log("live playlist, switching playlist, load frag with same PDT: " + r.programDateTime),
						s = Wt(a, r.endProgramDateTime, l.maxFragLookUpTolerance);
						else {
							var h = r.sn + 1;
							if (h >= t.startSN && h <= t.endSN) {
								var p = a[h - t.startSN];
								r.cc === p.cc && (s = p, B.b.log("live playlist, switching playlist, load frag with next SN: " + s.sn))
							}
							s || (s = _t.search(a,
							function(t) {
								return r.cc - t.cc
							})) && B.b.log("live playlist, switching playlist, load frag with same CC: " + s.sn)
						}
						s || (s = a[Math.min(o - 1, Math.round(o / 2))], B.b.log("live playlist, switching playlist, unknown, load middle frag : " + s.sn))
					}
					return s
				},
				r._findFragment = function(t, e, i, n, r, a, o) {
					var s, l = this.hls.config;
					if (s = r < a ? Kt(e, n, r, r > a - l.maxFragLookUpTolerance ? 0 : l.maxFragLookUpTolerance) : n[i - 1]) {
						var c = s.sn - o.startSN,
						u = e && s.level === e.level,
						d = n[c - 1],
						h = n[1 + c];
						if (e && s.sn === e.sn) if (u && !s.backtracked) if (s.sn < o.endSN) {
							var p = e.deltaPTS;
							p && p > l.maxBufferHole && e.dropped && c ? (s = d, B.b.warn("SN just loaded, with large PTS gap between audio and video, maybe frag is not starting with a keyframe ? load previous one to try to overcome this")) : (s = h, B.b.log("SN just loaded, load next one: " + s.sn, s))
						} else s = null;
						else s.backtracked && (h && h.backtracked ? (B.b.warn("Already backtracked from fragment " + h.sn + ", will not backtrack to fragment " + s.sn + ". Loading fragment " + h.sn), s = h) : (B.b.warn("Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe"), s.dropped = 0, d ? (s = d).backtracked = !0 : c && (s = null)))
					}
					return s
				},
				r._loadKey = function(t) {
					this.state = Zt.KEY_LOADING,
					this.hls.trigger(M.a.KEY_LOADING, {
						frag: t
					})
				},
				r._loadFragment = function(t) {
					var e = this.fragmentTracker.getState(t);
					"initSegment" !== (this.fragCurrent = t).sn && (this.startFragRequested = !0),
					Object(O.a)(t.sn) && !t.bitrateTest && (this.nextLoadPosition = t.start + t.duration),
					t.backtracked || e === Et || e === Tt ? (t.autoLevel = this.hls.autoLevelEnabled, t.bitrateTest = this.bitrateTest, this.hls.trigger(M.a.FRAG_LOADING, {
						frag: t
					}), this.demuxer || (this.demuxer = new Ft(this.hls, "main")), this.state = Zt.FRAG_LOADING) : e === xt && this._reduceMaxBufferLength(t.duration) && this.fragmentTracker.removeFragment(t)
				},
				r.getBufferedFrag = function(t) {
					return this.fragmentTracker.getBufferedFrag(t, a.MAIN)
				},
				r.followingBufferedFrag = function(t) {
					return t ? this.getBufferedFrag(t.endPTS + .5) : null
				},
				r._checkFragmentChanged = function() {
					var t, e, i = this.media;
					if (i && i.readyState && !1 === i.seeking && ((e = i.currentTime) > this.lastCurrentTime && (this.lastCurrentTime = e), Ct.isBuffered(i, e) ? t = this.getBufferedFrag(e) : Ct.isBuffered(i, e + .1) && (t = this.getBufferedFrag(e + .1)), t)) {
						var n = t;
						if (n !== this.fragPlaying) {
							this.hls.trigger(M.a.FRAG_CHANGED, {
								frag: n
							});
							var r = n.level;
							this.fragPlaying && this.fragPlaying.level === r || this.hls.trigger(M.a.LEVEL_SWITCHED, {
								level: r
							}),
							this.fragPlaying = n
						}
					}
				},
				r.immediateLevelSwitch = function() {
					if (B.b.log("immediateLevelSwitch"), !this.immediateSwitch) {
						this.immediateSwitch = !0;
						var t, e = this.media;
						e ? (t = e.paused, e.pause()) : t = !0,
						this.previouslyPaused = t
					}
					var i = this.fragCurrent;
					i && i.loader && i.loader.abort(),
					this.fragCurrent = null,
					this.flushMainBuffer(0, Number.POSITIVE_INFINITY)
				},
				r.immediateLevelSwitchEnd = function() {
					var t = this.media;
					t && t.buffered.length && (this.immediateSwitch = !1, Ct.isBuffered(t, t.currentTime) && (t.currentTime -= 1e-4), this.previouslyPaused || t.play())
				},
				r.nextLevelSwitch = function() {
					var t = this.media;
					if (t && t.readyState) {
						var e, i, n;
						if ((i = this.getBufferedFrag(t.currentTime)) && 1 < i.startPTS && this.flushMainBuffer(0, i.startPTS - 1), t.paused) e = 0;
						else {
							var r = this.hls.nextLoadLevel,
							a = this.levels[r],
							o = this.fragLastKbps;
							e = o && this.fragCurrent ? this.fragCurrent.duration * a.bitrate / (1e3 * o) + 1 : 0
						}
						if ((n = this.getBufferedFrag(t.currentTime + e)) && (n = this.followingBufferedFrag(n))) {
							var s = this.fragCurrent;
							s && s.loader && s.loader.abort(),
							this.fragCurrent = null,
							this.flushMainBuffer(n.maxStartPTS, Number.POSITIVE_INFINITY)
						}
					}
				},
				r.flushMainBuffer = function(t, e) {
					this.state = Zt.BUFFER_FLUSHING;
					var i = {
						startOffset: t,
						endOffset: e
					};
					this.altAudio && (i.type = "video"),
					this.hls.trigger(M.a.BUFFER_FLUSHING, i)
				},
				r.onMediaAttached = function(t) {
					var e = this.media = this.mediaBuffer = t.media;
					this.onvseeking = this.onMediaSeeking.bind(this),
					this.onvseeked = this.onMediaSeeked.bind(this),
					this.onvended = this.onMediaEnded.bind(this),
					e.addEventListener("seeking", this.onvseeking),
					e.addEventListener("seeked", this.onvseeked),
					e.addEventListener("ended", this.onvended);
					var i = this.config;
					this.levels && i.autoStartLoad && this.hls.startLoad(i.startPosition),
					this.gapController = new Xt(i, e, this.fragmentTracker, this.hls)
				},
				r.onMediaDetaching = function() {
					var t = this.media;
					t && t.ended && (B.b.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0);
					var e = this.levels;
					e && e.forEach(function(t) {
						t.details && t.details.fragments.forEach(function(t) {
							t.backtracked = void 0
						})
					}),
					t && (t.removeEventListener("seeking", this.onvseeking), t.removeEventListener("seeked", this.onvseeked), t.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null),
					this.media = this.mediaBuffer = null,
					this.loadedmetadata = !1,
					this.stopLoad()
				},
				r.onMediaSeeked = function() {
					var t = this.media,
					e = t ? t.currentTime: void 0;
					Object(O.a)(e) && B.b.log("media seeked to " + e.toFixed(3)),
					this.tick()
				},
				r.onManifestLoading = function() {
					B.b.log("trigger BUFFER_RESET"),
					this.hls.trigger(M.a.BUFFER_RESET),
					this.fragmentTracker.removeAllFragments(),
					this.stalled = !1,
					this.startPosition = this.lastCurrentTime = 0
				},
				r.onManifestParsed = function(t) {
					var e, i = !1,
					n = !1;
					t.levels.forEach(function(t) { (e = t.audioCodec) && ( - 1 !== e.indexOf("mp4a.40.2") && (i = !0), -1 !== e.indexOf("mp4a.40.5") && (n = !0))
					}),
					this.audioCodecSwitch = i && n,
					this.audioCodecSwitch && B.b.log("both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),
					this.levels = t.levels,
					this.startFragRequested = !1;
					var r = this.config; (r.autoStartLoad || this.forceStartLoad) && this.hls.startLoad(r.startPosition)
				},
				r.onLevelLoaded = function(t) {
					var e = t.details,
					i = t.level,
					n = this.levels[this.levelLastLoaded],
					r = this.levels[i],
					a = e.totalduration,
					o = 0;
					if (B.b.log("level " + i + " loaded [" + e.startSN + "," + e.endSN + "],duration:" + a), e.live) {
						var s = r.details;
						s && 0 < e.fragments.length ? (jt(s, e), o = e.fragments[0].start, this.liveSyncPosition = this.computeLivePosition(o, s), e.PTSKnown && Object(O.a)(o) ? B.b.log("live playlist sliding:" + o.toFixed(3)) : (B.b.log("live playlist - outdated PTS, unknown sliding"), Yt(this.fragPrevious, n, e))) : (B.b.log("live playlist - first load, unknown sliding"), e.PTSKnown = !1, Yt(this.fragPrevious, n, e))
					} else e.PTSKnown = !1;
					if (r.details = e, this.levelLastLoaded = i, this.hls.trigger(M.a.LEVEL_UPDATED, {
						details: e,
						level: i
					}), !1 === this.startFragRequested) {
						if ( - 1 === this.startPosition || -1 === this.lastCurrentTime) {
							var l = e.startTimeOffset;
							Object(O.a)(l) ? (l < 0 && (B.b.log("negative start time offset " + l + ", count from end of last fragment"), l = o + a + l), B.b.log("start time offset found in playlist, adjust startPosition to " + l), this.startPosition = l) : e.live ? (this.startPosition = this.computeLivePosition(o, e), B.b.log("configure startPosition to " + this.startPosition)) : this.startPosition = 0,
							this.lastCurrentTime = this.startPosition
						}
						this.nextLoadPosition = this.startPosition
					}
					this.state === Zt.WAITING_LEVEL && (this.state = Zt.IDLE),
					this.tick()
				},
				r.onKeyLoaded = function() {
					this.state === Zt.KEY_LOADING && (this.state = Zt.IDLE, this.tick())
				},
				r.onFragLoaded = function(t) {
					var e = this.fragCurrent,
					i = this.hls,
					n = this.levels,
					r = this.media,
					a = t.frag;
					if (this.state === Zt.FRAG_LOADING && e && "main" === a.type && a.level === e.level && a.sn === e.sn) {
						var o = t.stats,
						s = n[e.level],
						l = s.details;
						if (this.bitrateTest = !1, this.stats = o, B.b.log("Loaded " + e.sn + " of [" + l.startSN + " ," + l.endSN + "],level " + e.level), a.bitrateTest && i.nextLoadLevel) this.state = Zt.IDLE,
						this.startFragRequested = !1,
						o.tparsed = o.tbuffered = window.performance.now(),
						i.trigger(M.a.FRAG_BUFFERED, {
							stats: o,
							frag: e,
							id: "main"
						}),
						this.tick();
						else if ("initSegment" === a.sn) this.state = Zt.IDLE,
						o.tparsed = o.tbuffered = window.performance.now(),
						l.initSegment.data = t.payload,
						i.trigger(M.a.FRAG_BUFFERED, {
							stats: o,
							frag: e,
							id: "main"
						}),
						this.tick();
						else {
							B.b.log("Parsing " + e.sn + " of [" + l.startSN + " ," + l.endSN + "],level " + e.level + ", cc " + e.cc),
							this.state = Zt.PARSING,
							this.pendingBuffering = !0,
							this.appended = !1,
							a.bitrateTest && (a.bitrateTest = !1, this.fragmentTracker.onFragLoaded({
								frag: a
							}));
							var c = !(r && r.seeking) && (l.PTSKnown || !l.live),
							u = l.initSegment ? l.initSegment.data: [],
							d = this._getAudioCodec(s); (this.demuxer = this.demuxer || new Ft(this.hls, "main")).push(t.payload, u, d, s.videoCodec, e, l.totalduration, c)
						}
					}
					this.fragLoadError = 0
				},
				r.onFragParsingInitSegment = function(t) {
					var e = this.fragCurrent,
					i = t.frag;
					if (e && "main" === t.id && i.sn === e.sn && i.level === e.level && this.state === Zt.PARSING) {
						var n, r, a = t.tracks;
						if (a.audio && this.altAudio && delete a.audio, r = a.audio) {
							var o = this.levels[this.level].audioCodec,
							s = navigator.userAgent.toLowerCase();
							o && this.audioCodecSwap && (B.b.log("swapping playlist audio codec"), o = -1 !== o.indexOf("mp4a.40.5") ? "mp4a.40.2": "mp4a.40.5"),
							this.audioCodecSwitch && 1 !== r.metadata.channelCount && -1 === s.indexOf("firefox") && (o = "mp4a.40.5"),
							-1 !== s.indexOf("android") && "audio/mpeg" !== r.container && (o = "mp4a.40.2", B.b.log("Android: force audio codec to " + o)),
							r.levelCodec = o,
							r.id = t.id
						}
						for (n in (r = a.video) && (r.levelCodec = this.levels[this.level].videoCodec, r.id = t.id), this.hls.trigger(M.a.BUFFER_CODECS, a), a) {
							r = a[n],
							B.b.log("main track:" + n + ",container:" + r.container + ",codecs[level/parsed]=[" + r.levelCodec + "/" + r.codec + "]");
							var l = r.initSegment;
							l && (this.appended = !0, this.pendingBuffering = !0, this.hls.trigger(M.a.BUFFER_APPENDING, {
								type: n,
								data: l,
								parent: "main",
								content: "initSegment"
							}))
						}
						this.tick()
					}
				},
				r.onFragParsingData = function(e) {
					var i = this,
					t = this.fragCurrent,
					n = e.frag;
					if (t && "main" === e.id && n.sn === t.sn && n.level === t.level && ("audio" !== e.type || !this.altAudio) && this.state === Zt.PARSING) {
						var r = this.levels[this.level],
						a = t;
						if (Object(O.a)(e.endPTS) || (e.endPTS = e.startPTS + t.duration, e.endDTS = e.startDTS + t.duration), !0 === e.hasAudio && a.addElementaryStream(p.AUDIO), !0 === e.hasVideo && a.addElementaryStream(p.VIDEO), B.b.log("Parsed " + e.type + ",PTS:[" + e.startPTS.toFixed(3) + "," + e.endPTS.toFixed(3) + "],DTS:[" + e.startDTS.toFixed(3) + "/" + e.endDTS.toFixed(3) + "],nb:" + e.nb + ",dropped:" + (e.dropped || 0)), "video" === e.type) if (a.dropped = e.dropped, a.dropped) if (a.backtracked) B.b.warn("Already backtracked on this fragment, appending with the gap", a.sn);
						else {
							var o = r.details;
							if (!o || a.sn !== o.startSN) return B.b.warn("missing video frame(s), backtracking fragment", a.sn),
							this.fragmentTracker.removeFragment(a),
							a.backtracked = !0,
							this.nextLoadPosition = e.startPTS,
							this.state = Zt.IDLE,
							this.fragPrevious = a,
							void this.tick();
							B.b.warn("missing video frame(s) on first frag, appending with gap", a.sn)
						} else a.backtracked = !1;
						var s = qt(r.details, a, e.startPTS, e.endPTS, e.startDTS, e.endDTS),
						l = this.hls;
						l.trigger(M.a.LEVEL_PTS_UPDATED, {
							details: r.details,
							level: this.level,
							drift: s,
							type: e.type,
							start: e.startPTS,
							end: e.endPTS
						}),
						[e.data1, e.data2].forEach(function(t) {
							t && t.length && i.state === Zt.PARSING && (i.appended = !0, i.pendingBuffering = !0, l.trigger(M.a.BUFFER_APPENDING, {
								type: e.type,
								data: t,
								parent: "main",
								content: "data"
							}))
						}),
						this.tick()
					}
				},
				r.onFragParsed = function(t) {
					var e = this.fragCurrent,
					i = t.frag;
					e && "main" === t.id && i.sn === e.sn && i.level === e.level && this.state === Zt.PARSING && (this.stats.tparsed = window.performance.now(), this.state = Zt.PARSED, this._checkAppendedParsed())
				},
				r.onAudioTrackSwitching = function(t) {
					var e = !!t.url,
					i = t.id;
					if (!e) {
						if (this.mediaBuffer !== this.media) {
							B.b.log("switching on main audio, use media.buffered to schedule main fragment loading"),
							this.mediaBuffer = this.media;
							var n = this.fragCurrent;
							n.loader && (B.b.log("switching to main audio track, cancel main fragment load"), n.loader.abort()),
							this.fragCurrent = null,
							this.fragPrevious = null,
							this.demuxer && (this.demuxer.destroy(), this.demuxer = null),
							this.state = Zt.IDLE
						}
						var r = this.hls;
						r.trigger(M.a.BUFFER_FLUSHING, {
							startOffset: 0,
							endOffset: Number.POSITIVE_INFINITY,
							type: "audio"
						}),
						r.trigger(M.a.AUDIO_TRACK_SWITCHED, {
							id: i
						}),
						this.altAudio = !1
					}
				},
				r.onAudioTrackSwitched = function(t) {
					var e = t.id,
					i = !!this.hls.audioTracks[e].url;
					if (i) {
						var n = this.videoBuffer;
						n && this.mediaBuffer !== n && (B.b.log("switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = n)
					}
					this.altAudio = i,
					this.tick()
				},
				r.onBufferCreated = function(t) {
					var e, i, n = t.tracks,
					r = !1;
					for (var a in n) {
						var o = n[a];
						"main" === o.id ? (e = o, "video" === (i = a) && (this.videoBuffer = n[a].buffer)) : r = !0
					}
					r && e ? (B.b.log("alternate track found, use " + i + ".buffered to schedule main fragment loading"), this.mediaBuffer = e.buffer) : this.mediaBuffer = this.media
				},
				r.onBufferAppended = function(t) {
					if ("main" === t.parent) {
						var e = this.state;
						e !== Zt.PARSING && e !== Zt.PARSED || (this.pendingBuffering = 0 < t.pending, this._checkAppendedParsed())
					}
				},
				r._checkAppendedParsed = function() {
					if (! (this.state !== Zt.PARSED || this.appended && this.pendingBuffering)) {
						var t = this.fragCurrent;
						if (t) {
							var e = this.mediaBuffer ? this.mediaBuffer: this.media;
							B.b.log("main buffered : " + Ht.toString(e.buffered)),
							this.fragPrevious = t;
							var i = this.stats;
							i.tbuffered = window.performance.now(),
							this.fragLastKbps = Math.round(8 * i.total / (i.tbuffered - i.tfirst)),
							this.hls.trigger(M.a.FRAG_BUFFERED, {
								stats: i,
								frag: t,
								id: "main"
							}),
							this.state = Zt.IDLE
						}
						this.tick()
					}
				},
				r.onError = function(t) {
					var e = t.frag || this.fragCurrent;
					if (!e || "main" === e.type) {
						var i = !!this.media && Ct.isBuffered(this.media, this.media.currentTime) && Ct.isBuffered(this.media, this.media.currentTime + .5);
						switch (t.details) {
						case h.a.FRAG_LOAD_ERROR:
						case h.a.FRAG_LOAD_TIMEOUT:
						case h.a.KEY_LOAD_ERROR:
						case h.a.KEY_LOAD_TIMEOUT:
							if (!t.fatal) if (this.fragLoadError + 1 <= this.config.fragLoadingMaxRetry) {
								var n = Math.min(Math.pow(2, this.fragLoadError) * this.config.fragLoadingRetryDelay, this.config.fragLoadingMaxRetryTimeout);
								B.b.warn("mediaController: frag loading failed, retry in " + n + " ms"),
								this.retryDate = window.performance.now() + n,
								this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition),
								this.fragLoadError++,
								this.state = Zt.FRAG_LOADING_WAITING_RETRY
							} else B.b.error("mediaController: " + t.details + " reaches max retry, redispatch as fatal ..."),
							t.fatal = !0,
							this.state = Zt.ERROR;
							break;
						case h.a.LEVEL_LOAD_ERROR:
						case h.a.LEVEL_LOAD_TIMEOUT:
							this.state !== Zt.ERROR && (t.fatal ? (this.state = Zt.ERROR, B.b.warn("streamController: " + t.details + ",switch to " + this.state + " state ...")) : t.levelRetry || this.state !== Zt.WAITING_LEVEL || (this.state = Zt.IDLE));
							break;
						case h.a.BUFFER_FULL_ERROR:
							"main" !== t.parent || this.state !== Zt.PARSING && this.state !== Zt.PARSED || (i ? (this._reduceMaxBufferLength(this.config.maxBufferLength), this.state = Zt.IDLE) : (B.b.warn("buffer full error also media.currentTime is not buffered, flush everything"), this.fragCurrent = null, this.flushMainBuffer(0, Number.POSITIVE_INFINITY)))
						}
					}
				},
				r._reduceMaxBufferLength = function(t) {
					var e = this.config;
					return e.maxMaxBufferLength >= t && (e.maxMaxBufferLength /= 2, B.b.warn("main:reduce max buffer length to " + e.maxMaxBufferLength + "s"), !0)
				},
				r._checkBuffer = function() {
					var t = this.media;
					if (t && 0 !== t.readyState) {
						var e = (this.mediaBuffer ? this.mediaBuffer: t).buffered; ! this.loadedmetadata && e.length ? (this.loadedmetadata = !0, this._seekToStartPos()) : this.immediateSwitch ? this.immediateLevelSwitchEnd() : this.gapController.poll(this.lastCurrentTime, e)
					}
				},
				r.onFragLoadEmergencyAborted = function() {
					this.state = Zt.IDLE,
					this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition),
					this.tick()
				},
				r.onBufferFlushed = function() {
					var t = this.mediaBuffer ? this.mediaBuffer: this.media;
					t && this.fragmentTracker.detectEvictedFragments(p.VIDEO, t.buffered),
					this.state = Zt.IDLE,
					this.fragPrevious = null
				},
				r.swapAudioCodec = function() {
					this.audioCodecSwap = !this.audioCodecSwap
				},
				r._seekToStartPos = function() {
					var t = this.media,
					e = t.currentTime,
					i = t.seeking ? e: this.startPosition;
					e !== i && (B.b.log("target start position not buffered, seek to buffered.start(0) " + i + " from current time " + e + " "), t.currentTime = i)
				},
				r._getAudioCodec = function(t) {
					var e = this.config.defaultAudioCodec || t.audioCodec;
					return this.audioCodecSwap && (B.b.log("swapping playlist audio codec"), e = e && ( - 1 !== e.indexOf("mp4a.40.5") ? "mp4a.40.2": "mp4a.40.5")),
					e
				},
				te(i.prototype, [{
					key: "state",
					set: function(t) {
						if (this.state !== t) {
							var e = this.state;
							this._state = t,
							B.b.log("main stream:" + e + "->" + t),
							this.hls.trigger(M.a.STREAM_STATE_TRANSITION, {
								previousState: e,
								nextState: t
							})
						}
					},
					get: function() {
						return this._state
					}
				},
				{
					key: "currentLevel",
					get: function() {
						var t = this.media;
						if (t) {
							var e = this.getBufferedFrag(t.currentTime);
							if (e) return e.level
						}
						return - 1
					}
				},
				{
					key: "nextBufferedFrag",
					get: function() {
						var t = this.media;
						return t ? this.followingBufferedFrag(this.getBufferedFrag(t.currentTime)) : null
					}
				},
				{
					key: "nextLevel",
					get: function() {
						var t = this.nextBufferedFrag;
						return t ? t.level: -1
					}
				},
				{
					key: "liveSyncPosition",
					get: function() {
						return this._liveSyncPosition
					},
					set: function(t) {
						this._liveSyncPosition = t
					}
				}]),
				i
			} ($t);
			function ie(t, e) {
				for (var i = 0; i < e.length; i++) {
					var n = e[i];
					n.enumerable = n.enumerable || !1,
					n.configurable = !0,
					"value" in n && (n.writable = !0),
					Object.defineProperty(t, n.key, n)
				}
			}
			function ne(t) {
				return t.replace(/route=..(&?)/, "").replace(/&$/, "")
			}
			window.performance;
			var re, ae = function(i) {
				var t, e;
				function n(t) {
					var e;
					return (e = i.call(this, t, M.a.MANIFEST_LOADED, M.a.LEVEL_LOADED, M.a.AUDIO_TRACK_SWITCHED, M.a.FRAG_LOADED, M.a.ERROR) || this).canload = !1,
					e.currentLevelIndex = null,
					e.manualLevelIndex = -1,
					e.timer = null,
					re = /chrome|firefox/.test(navigator.userAgent.toLowerCase()),
					e
				}
				e = i,
				(t = n).prototype = Object.create(e.prototype),
				(t.prototype.constructor = t).__proto__ = e;
				var r = n.prototype;
				return r.switchLine = function(i) {
					var t = this.levels;
					t && i && t.forEach(function(t) {
						var e = ne(t.url[0]);
						if (t.url[0] = -1 === e.indexOf("?") ? e + "?route=" + i: e + "&route=" + i, t.details) {
							if (t.details.url = t.url[0], !t.details.fragments) return;
							t.details.fragments.forEach(function(t) {
								t.url = ne(t.url.replace(/..-dts/, i + "-dts"))
							})
						}
					})
				},
				r.onHandlerDestroying = function() {
					this.clearTimer(),
					this.manualLevelIndex = -1
				},
				r.clearTimer = function() {
					null !== this.timer && (clearTimeout(this.timer), this.timer = null)
				},
				r.startLoad = function() {
					var t = this._levels;
					this.canload = !0,
					this.levelRetryCount = 0,
					t && t.forEach(function(t) {
						t.loadError = 0;
						var e = t.details;
						e && e.live && (t.details = void 0)
					}),
					null !== this.timer && this.loadLevel()
				},
				r.stopLoad = function() {
					this.canload = !1
				},
				r.onManifestLoaded = function(t) {
					var e, i = [],
					n = [],
					r = {},
					a = null,
					o = !1,
					s = !1;
					if (t.levels.forEach(function(t) {
						var e = t.attrs;
						t.loadError = 0,
						t.fragmentError = !1,
						o = o || !!t.videoCodec,
						s = s || !!t.audioCodec,
						re && t.audioCodec && -1 !== t.audioCodec.indexOf("mp4a.40.34") && (t.audioCodec = void 0),
						(a = r[t.bitrate]) ? a.url.push(t.url) : (t.url = [t.url], t.urlId = 0, r[t.bitrate] = t, i.push(t)),
						e && (e.AUDIO && (s = !0, Nt(a || t, "audio", e.AUDIO)), e.SUBTITLES && Nt(a || t, "text", e.SUBTITLES))
					}), o && s && (i = i.filter(function(t) {
						return !! t.videoCodec
					})), i = i.filter(function(t) {
						var e = t.audioCodec,
						i = t.videoCodec;
						return (!e || b(e, "audio")) && (!i || b(i, "video"))
					}), t.audioTracks && (n = t.audioTracks.filter(function(t) {
						return ! t.audioCodec || b(t.audioCodec, "audio")
					})).forEach(function(t, e) {
						t.id = e
					}), 0 < i.length) {
						e = i[0].bitrate,
						i.sort(function(t, e) {
							return t.bitrate - e.bitrate
						}),
						this._levels = i;
						for (var l = 0; l < i.length; l++) if (i[l].bitrate === e) {
							this._firstLevel = l,
							B.b.log("manifest loaded," + i.length + " level(s) found, first bitrate:" + e);
							break
						}
						this.hls.trigger(M.a.MANIFEST_PARSED, {
							levels: i,
							audioTracks: n,
							firstLevel: this._firstLevel,
							stats: t.stats,
							audio: s,
							video: o,
							altAudio: n.some(function(t) {
								return !! t.url
							})
						})
					} else this.hls.trigger(M.a.ERROR, {
						type: h.b.MEDIA_ERROR,
						details: h.a.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
						fatal: !0,
						url: this.hls.url,
						reason: "no level with compatible codecs found in manifest"
					})
				},
				r.setLevelInternal = function(t) {
					var e = this._levels,
					i = this.hls;
					if (0 <= t && t < e.length) {
						if (this.clearTimer(), this.currentLevelIndex !== t) {
							B.b.log("switching to level " + t),
							this.currentLevelIndex = t;
							var n = e[t];
							n.level = t,
							i.trigger(M.a.LEVEL_SWITCHING, n)
						}
						var r = e[t],
						a = r.details;
						if (!a || a.live) {
							var o = r.urlId;
							i.trigger(M.a.LEVEL_LOADING, {
								url: r.url[o],
								level: t,
								id: o
							})
						}
					} else i.trigger(M.a.ERROR, {
						type: h.b.OTHER_ERROR,
						details: h.a.LEVEL_SWITCH_ERROR,
						level: t,
						fatal: !1,
						reason: "invalid level idx"
					})
				},
				r.onError = function(t) {
					if (t.fatal) t.type === h.b.NETWORK_ERROR && this.clearTimer();
					else {
						var e, i = !1,
						n = !1;
						switch (t.details) {
						case h.a.FRAG_LOAD_ERROR:
						case h.a.FRAG_LOAD_TIMEOUT:
						case h.a.KEY_LOAD_ERROR:
						case h.a.KEY_LOAD_TIMEOUT:
							e = t.frag.level,
							n = !0;
							break;
						case h.a.LEVEL_LOAD_ERROR:
						case h.a.LEVEL_LOAD_TIMEOUT:
							e = t.context.level,
							i = !0;
							break;
						case h.a.REMUX_ALLOC_ERROR:
							e = t.level,
							i = !0
						}
						void 0 !== e && this.recoverLevel(t, e, i, n)
					}
				},
				r.recoverLevel = function(t, e, i, n) {
					var r, a, o, s = this,
					l = this.hls.config,
					c = t.details,
					u = this._levels[e];
					if (u.loadError++, u.fragmentError = n, i) {
						if (! (this.levelRetryCount + 1 <= l.levelLoadingMaxRetry)) return B.b.error("level controller, cannot recover from " + c + " error"),
						this.currentLevelIndex = null,
						this.clearTimer(),
						void(t.fatal = !0);
						a = Math.min(Math.pow(2, this.levelRetryCount) * l.levelLoadingRetryDelay, l.levelLoadingMaxRetryTimeout),
						this.timer = setTimeout(function() {
							return s.loadLevel()
						},
						a),
						t.levelRetry = !0,
						this.levelRetryCount++,
						B.b.warn("level controller, " + c + ", retry in " + a + " ms, current retry count is " + this.levelRetryCount)
					} (i || n) && (1 < (r = u.url.length) && u.loadError < r ? (u.urlId = (u.urlId + 1) % r, u.details = void 0, B.b.warn("level controller, " + c + " for level " + e + ": switching to redundant URL-id " + u.urlId)) : -1 === this.manualLevelIndex ? (o = 0 === e ? this._levels.length - 1 : e - 1, B.b.warn("level controller, " + c + ": switch to " + o), this.hls.nextAutoLevel = this.currentLevelIndex = o) : n && (B.b.warn("level controller, " + c + ": reload a fragment"), this.currentLevelIndex = null))
				},
				r.onFragLoaded = function(t) {
					var e = t.frag;
					if (void 0 !== e && "main" === e.type) {
						var i = this._levels[e.level];
						void 0 !== i && (i.fragmentError = !1, i.loadError = 0, this.levelRetryCount = 0)
					}
				},
				r.onLevelLoaded = function(t) {
					var e = this,
					i = t.level,
					n = t.details;
					if (i === this.currentLevelIndex) {
						var r = this._levels[i];
						if (r.fragmentError || (r.loadError = 0, this.levelRetryCount = 0), n.live) {
							var a = Vt(r.details, n, t.stats.trequest);
							B.b.log("live playlist, reload in " + Math.round(a) + " ms"),
							this.timer = setTimeout(function() {
								return e.loadLevel()
							},
							a)
						} else this.clearTimer()
					}
				},
				r.onAudioTrackSwitched = function(t) {
					var e = this.hls.audioTracks[t.id].groupId,
					i = this.hls.levels[this.currentLevelIndex];
					if (i && i.audioGroupIds) {
						for (var n = -1,
						r = 0; r < i.audioGroupIds.length; r++) if (i.audioGroupIds[r] === e) {
							n = r;
							break
						}
						n !== i.urlId && (i.urlId = n, this.startLoad())
					}
				},
				r.loadLevel = function() {
					if (B.b.debug("call to loadLevel"), null !== this.currentLevelIndex && this.canload) {
						var t = this._levels[this.currentLevelIndex];
						if ("object" == typeof t && 0 < t.url.length) {
							var e = this.currentLevelIndex,
							i = t.urlId,
							n = t.url[i];
							B.b.log("Attempt loading level index " + e + " with URL-id " + i),
							this.hls.trigger(M.a.LEVEL_LOADING, {
								url: n,
								level: e,
								id: i
							})
						}
					}
				},
				ie(n.prototype, [{
					key: "levels",
					get: function() {
						return this._levels
					}
				},
				{
					key: "level",
					get: function() {
						return this.currentLevelIndex
					},
					set: function(t) {
						var e = this._levels;
						e && (t = Math.min(t, e.length - 1), this.currentLevelIndex === t && e[t].details || this.setLevelInternal(t))
					}
				},
				{
					key: "manualLevel",
					get: function() {
						return this.manualLevelIndex
					},
					set: function(t) {
						this.manualLevelIndex = t,
						void 0 === this._startLevel && (this._startLevel = t),
						-1 !== t && (this.level = t)
					}
				},
				{
					key: "firstLevel",
					get: function() {
						return this._firstLevel
					},
					set: function(t) {
						this._firstLevel = t
					}
				},
				{
					key: "startLevel",
					get: function() {
						if (void 0 !== this._startLevel) return this._startLevel;
						var t = this.hls.config.startLevel;
						return void 0 !== t ? t: this._firstLevel
					},
					set: function(t) {
						this._startLevel = t
					}
				},
				{
					key: "nextLoadLevel",
					get: function() {
						return - 1 !== this.manualLevelIndex ? this.manualLevelIndex: this.hls.nextAutoLevel
					},
					set: function(t) {
						this.level = t,
						-1 === this.manualLevelIndex && (this.hls.nextAutoLevel = t)
					}
				}]),
				n
			} (c),
			oe = i(4);
			function se(t, e) {
				var i;
				try {
					i = new Event("addtrack")
				} catch(t) { (i = document.createEvent("Event")).initEvent("addtrack", !1, !1)
				}
				i.track = t,
				e.dispatchEvent(i)
			}
			function le(t) {
				if (t && t.cues) for (; 0 < t.cues.length;) t.removeCue(t.cues[0])
			}
			var ce = function(i) {
				var t, e;
				function n(t) {
					var e;
					return (e = i.call(this, t, M.a.MEDIA_ATTACHED, M.a.MEDIA_DETACHING, M.a.FRAG_PARSING_METADATA) || this).id3Track = void 0,
					e.media = void 0,
					e
				}
				e = i,
				(t = n).prototype = Object.create(e.prototype),
				(t.prototype.constructor = t).__proto__ = e;
				var r = n.prototype;
				return r.destroy = function() {
					c.prototype.destroy.call(this)
				},
				r.onMediaAttached = function(t) {
					this.media = t.media,
					this.media
				},
				r.onMediaDetaching = function() {
					le(this.id3Track),
					this.id3Track = void 0,
					this.media = void 0
				},
				r.getID3Track = function(t) {
					for (var e = 0; e < t.length; e++) {
						var i = t[e];
						if ("metadata" === i.kind && "id3" === i.label) return se(i, this.media),
						i
					}
					return this.media.addTextTrack("metadata", "id3")
				},
				r.onFragParsingMetadata = function(t) {
					var e = t.frag,
					i = t.samples;
					this.id3Track || (this.id3Track = this.getID3Track(this.media.textTracks), this.id3Track.mode = "hidden");
					for (var n = window.WebKitDataCue || window.VTTCue || window.TextTrackCue,
					r = 0; r < i.length; r++) {
						var a = oe.a.getID3Frames(i[r].data);
						if (a) {
							var o = i[r].pts,
							s = r < i.length - 1 ? i[r + 1].pts: e.endPTS;
							o === s ? s += 1e-4: s < o && (B.b.warn("detected an id3 sample with endTime < startTime, adjusting endTime to (startTime + 0.25)"), s = o + .25);
							for (var l = 0; l < a.length; l++) {
								var c = a[l];
								if (!oe.a.isTimeStampFrame(c)) {
									var u = new n(o, s, "");
									u.value = c,
									this.id3Track.addCue(u)
								}
							}
						}
					}
				},
				n
			} (c),
			ue = function() {
				function t(t) {
					this.alpha_ = void 0,
					this.estimate_ = void 0,
					this.totalWeight_ = void 0,
					this.alpha_ = t ? Math.exp(Math.log(.5) / t) : 0,
					this.estimate_ = 0,
					this.totalWeight_ = 0
				}
				var e = t.prototype;
				return e.sample = function(t, e) {
					var i = Math.pow(this.alpha_, t);
					this.estimate_ = e * (1 - i) + i * this.estimate_,
					this.totalWeight_ += t
				},
				e.getTotalWeight = function() {
					return this.totalWeight_
				},
				e.getEstimate = function() {
					if (this.alpha_) {
						var t = 1 - Math.pow(this.alpha_, this.totalWeight_);
						return this.estimate_ / t
					}
					return this.estimate_
				},
				t
			} (),
			de = function() {
				function t(t, e, i, n) {
					this.hls = void 0,
					this.defaultEstimate_ = void 0,
					this.minWeight_ = void 0,
					this.minDelayMs_ = void 0,
					this.slow_ = void 0,
					this.fast_ = void 0,
					this.hls = t,
					this.defaultEstimate_ = n,
					this.minWeight_ = .001,
					this.minDelayMs_ = 50,
					this.slow_ = new ue(e),
					this.fast_ = new ue(i)
				}
				var e = t.prototype;
				return e.sample = function(t, e) {
					var i = (t = Math.max(t, this.minDelayMs_)) / 1e3,
					n = 8 * e / i;
					this.fast_.sample(i, n),
					this.slow_.sample(i, n)
				},
				e.canEstimate = function() {
					var t = this.fast_;
					return t && t.getTotalWeight() >= this.minWeight_
				},
				e.getEstimate = function() {
					return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_
				},
				e.destroy = function() {},
				t
			} ();
			function he(t, e) {
				for (var i = 0; i < e.length; i++) {
					var n = e[i];
					n.enumerable = n.enumerable || !1,
					n.configurable = !0,
					"value" in n && (n.writable = !0),
					Object.defineProperty(t, n.key, n)
				}
			}
			var pe = window.performance,
			fe = function(i) {
				var t, e;
				function n(t) {
					var e;
					return (e = i.call(this, t, M.a.FRAG_LOADING, M.a.FRAG_LOADED, M.a.FRAG_BUFFERED, M.a.ERROR) || this).lastLoadedFragLevel = 0,
					e._nextAutoLevel = -1,
					e.hls = t,
					e.timer = null,
					e._bwEstimator = null,
					e.onCheck = e._abandonRulesCheck.bind(function(t) {
						if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return t
					} (e)),
					e
				}
				e = i,
				(t = n).prototype = Object.create(e.prototype),
				(t.prototype.constructor = t).__proto__ = e;
				var r = n.prototype;
				return r.destroy = function() {
					this.clearTimer(),
					c.prototype.destroy.call(this)
				},
				r.onFragLoading = function(t) {
					var e = t.frag;
					if ("main" === e.type && (this.timer || (this.fragCurrent = e, this.timer = setInterval(this.onCheck, 100)), !this._bwEstimator)) {
						var i, n, r = this.hls,
						a = r.config,
						o = e.level;
						n = r.levels[o].details.live ? (i = a.abrEwmaFastLive, a.abrEwmaSlowLive) : (i = a.abrEwmaFastVoD, a.abrEwmaSlowVoD),
						this._bwEstimator = new de(r, n, i, a.abrEwmaDefaultEstimate)
					}
				},
				r._abandonRulesCheck = function() {
					var t = this.hls,
					e = t.media,
					i = this.fragCurrent;
					if (i) {
						var n = i.loader,
						r = t.minAutoLevel;
						if (!n || n.stats && n.stats.aborted) return B.b.warn("frag loader destroy or aborted, disarm abandonRules"),
						this.clearTimer(),
						void(this._nextAutoLevel = -1);
						var a = n.stats;
						if (e && a && (!e.paused && 0 !== e.playbackRate || !e.readyState) && i.autoLevel && i.level) {
							var o = pe.now() - a.trequest,
							s = Math.abs(e.playbackRate);
							if (o > 500 * i.duration / s) {
								var l = t.levels,
								c = Math.max(1, a.bw ? a.bw / 8 : 1e3 * a.loaded / o),
								u = l[i.level],
								d = u.realBitrate ? Math.max(u.realBitrate, u.bitrate) : u.bitrate,
								h = a.total ? a.total: Math.max(a.loaded, Math.round(i.duration * d / 8)),
								p = e.currentTime,
								f = (h - a.loaded) / c,
								v = (Ct.bufferInfo(e, p, t.config.maxBufferHole).end - p) / s;
								if (v < 2 * i.duration / s && v < f) {
									var g;
									for (g = i.level - 1; r < g; g--) {
										var m = l[g].realBitrate ? Math.max(l[g].realBitrate, l[g].bitrate) : l[g].bitrate;
										if (i.duration * m / (6.4 * c) < v) break
									}
									void 0 < f && (B.b.warn("loading too slow, abort fragment loading and switch to level " + g + ":fragLoadedDelay[" + g + "]<fragLoadedDelay[" + (i.level - 1) + "];bufferStarvationDelay:" + (void 0).toFixed(1) + "<" + f.toFixed(1) + ":" + v.toFixed(1)), t.nextLoadLevel = g, this._bwEstimator.sample(o, a.loaded), n.abort(), this.clearTimer(), t.trigger(M.a.FRAG_LOAD_EMERGENCY_ABORTED, {
										frag: i,
										stats: a
									}))
								}
							}
						}
					}
				},
				r.onFragLoaded = function(t) {
					var e = t.frag;
					if ("main" === e.type && Object(O.a)(e.sn)) {
						if (this.clearTimer(), this.lastLoadedFragLevel = e.level, this._nextAutoLevel = -1, this.hls.config.abrMaxWithRealBitrate) {
							var i = this.hls.levels[e.level],
							n = (i.loaded ? i.loaded.bytes: 0) + t.stats.loaded,
							r = (i.loaded ? i.loaded.duration: 0) + t.frag.duration;
							i.loaded = {
								bytes: n,
								duration: r
							},
							i.realBitrate = Math.round(8 * n / r)
						}
						if (t.frag.bitrateTest) {
							var a = t.stats;
							a.tparsed = a.tbuffered = a.tload,
							this.onFragBuffered(t)
						}
					}
				},
				r.onFragBuffered = function(t) {
					var e = t.stats,
					i = t.frag;
					if (!0 !== e.aborted && "main" === i.type && Object(O.a)(i.sn) && (!i.bitrateTest || e.tload === e.tbuffered)) {
						var n = e.tparsed - e.trequest;
						B.b.log("latency/loading/parsing/append/kbps:" + Math.round(e.tfirst - e.trequest) + "/" + Math.round(e.tload - e.tfirst) + "/" + Math.round(e.tparsed - e.tload) + "/" + Math.round(e.tbuffered - e.tparsed) + "/" + Math.round(8 * e.loaded / (e.tbuffered - e.trequest))),
						this._bwEstimator.sample(n, e.loaded),
						e.bwEstimate = this._bwEstimator.getEstimate(),
						i.bitrateTest ? this.bitrateTestDelay = n / 1e3: this.bitrateTestDelay = 0
					}
				},
				r.onError = function(t) {
					switch (t.details) {
					case h.a.FRAG_LOAD_ERROR:
					case h.a.FRAG_LOAD_TIMEOUT:
						this.clearTimer()
					}
				},
				r.clearTimer = function() {
					clearInterval(this.timer),
					this.timer = null
				},
				r._findBestLevel = function(t, e, i, n, r, a, o, s, l) {
					for (var c = r; n <= c; c--) {
						var u = l[c];
						if (u) {
							var d = u.details,
							h = d ? d.totalduration / d.fragments.length: e,
							p = !!d && d.live,
							f = void 0;
							f = c <= t ? o * i: s * i;
							var v = l[c].realBitrate ? Math.max(l[c].realBitrate, l[c].bitrate) : l[c].bitrate,
							g = v * h / f;
							if (B.b.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + c + "/" + Math.round(f) + "/" + v + "/" + h + "/" + a + "/" + g), v < f && (!g || p && !this.bitrateTestDelay || g < a)) return c
						}
					}
					return - 1
				},
				he(n.prototype, [{
					key: "nextAutoLevel",
					get: function() {
						var t = this._nextAutoLevel,
						e = this._bwEstimator;
						if (! ( - 1 === t || e && e.canEstimate())) return t;
						var i = this._nextABRAutoLevel;
						return - 1 !== t && (i = Math.min(t, i)),
						i
					},
					set: function(t) {
						this._nextAutoLevel = t
					}
				},
				{
					key: "_nextABRAutoLevel",
					get: function() {
						var t = this.hls,
						e = t.maxAutoLevel,
						i = t.levels,
						n = t.config,
						r = t.minAutoLevel,
						a = t.media,
						o = this.lastLoadedFragLevel,
						s = this.fragCurrent ? this.fragCurrent.duration: 0,
						l = a ? a.currentTime: 0,
						c = a && 0 !== a.playbackRate ? Math.abs(a.playbackRate) : 1,
						u = this._bwEstimator ? this._bwEstimator.getEstimate() : n.abrEwmaDefaultEstimate,
						d = (Ct.bufferInfo(a, l, n.maxBufferHole).end - l) / c,
						h = this._findBestLevel(o, s, u, r, e, d, n.abrBandWidthFactor, n.abrBandWidthUpFactor, i);
						if (0 <= h) return h;
						B.b.trace("rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering");
						var p = s ? Math.min(s, n.maxStarvationDelay) : n.maxStarvationDelay,
						f = n.abrBandWidthFactor,
						v = n.abrBandWidthUpFactor;
						if (0 == d) {
							var g = this.bitrateTestDelay;
							g && (p = (s ? Math.min(s, n.maxLoadingDelay) : n.maxLoadingDelay) - g, B.b.trace("bitrate test took " + Math.round(1e3 * g) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * p) + " ms"), f = v = 1)
						}
						return h = this._findBestLevel(o, s, u, r, e, d + p, f, v, i),
						Math.max(h, 0)
					}
				}]),
				n
			} (c),
			ve = It(),
			ge = function(e) {
				var t, i;
				function n(t) {
					var s;
					return (s = e.call(this, t, M.a.MEDIA_ATTACHING, M.a.MEDIA_DETACHING, M.a.MANIFEST_PARSED, M.a.BUFFER_RESET, M.a.BUFFER_APPENDING, M.a.BUFFER_CODECS, M.a.BUFFER_EOS, M.a.BUFFER_FLUSHING, M.a.LEVEL_PTS_UPDATED, M.a.LEVEL_UPDATED) || this)._msDuration = null,
					s._levelDuration = null,
					s._levelTargetDuration = 10,
					s._live = null,
					s._objectUrl = null,
					s._needsFlush = !1,
					s._needsEos = !1,
					s.config = void 0,
					s.audioTimestampOffset = void 0,
					s.bufferCodecEventsExpected = 0,
					s.media = null,
					s.mediaSource = null,
					s.segments = [],
					s.parent = void 0,
					s.appending = !1,
					s.appended = 0,
					s.appendError = 0,
					s.flushBufferCounter = 0,
					s.tracks = {},
					s.pendingTracks = {},
					s.sourceBuffer = {},
					s.flushRange = [],
					s._onMediaSourceOpen = function() {
						B.b.log("media source opened"),
						s.hls.trigger(M.a.MEDIA_ATTACHED, {
							media: s.media
						});
						var t = s.mediaSource;
						t && t.removeEventListener("sourceopen", s._onMediaSourceOpen),
						s.checkPendingTracks()
					},
					s._onMediaSourceClose = function() {
						B.b.log("media source closed")
					},
					s._onMediaSourceEnded = function() {
						B.b.log("media source ended")
					},
					s._onSBUpdateEnd = function() {
						if (s.audioTimestampOffset && s.sourceBuffer.audio) {
							var t = s.sourceBuffer.audio;
							B.b.warn("change mpeg audio timestamp offset from " + t.timestampOffset + " to " + s.audioTimestampOffset),
							t.timestampOffset = s.audioTimestampOffset,
							delete s.audioTimestampOffset
						}
						s._needsFlush && s.doFlush(),
						s._needsEos && s.checkEos(),
						s.appending = !1;
						var i = s.parent,
						e = s.segments.reduce(function(t, e) {
							return e.parent === i ? t + 1 : t
						},
						0),
						n = {},
						r = s.sourceBuffer;
						for (var a in r) {
							var o = r[a];
							if (!o) throw Error("handling source buffer update end error: source buffer for " + a + " uninitilized and unable to update buffered TimeRanges.");
							n[a] = o.buffered
						}
						s.hls.trigger(M.a.BUFFER_APPENDED, {
							parent: i,
							pending: e,
							timeRanges: n
						}),
						s._needsFlush || s.doAppending(),
						s.updateMediaElementDuration(),
						0 === e && s.flushLiveBackBuffer()
					},
					s._onSBUpdateError = function(t) {
						B.b.error("sourceBuffer error:", t),
						s.hls.trigger(M.a.ERROR, {
							type: h.b.MEDIA_ERROR,
							details: h.a.BUFFER_APPENDING_ERROR,
							fatal: !1
						})
					},
					s.config = t.config,
					s
				}
				i = e,
				(t = n).prototype = Object.create(i.prototype),
				(t.prototype.constructor = t).__proto__ = i;
				var r = n.prototype;
				return r.destroy = function() {
					c.prototype.destroy.call(this)
				},
				r.onLevelPtsUpdated = function(t) {
					var e = t.type,
					i = this.tracks.audio;
					if ("audio" === e && i && "audio/mpeg" === i.container) {
						var n = this.sourceBuffer.audio;
						if (!n) throw Error("Level PTS Updated and source buffer for audio uninitalized");
						if (.1 < Math.abs(n.timestampOffset - t.start)) {
							var r = n.updating;
							try {
								n.abort()
							} catch(t) {
								B.b.warn("can not abort audio buffer: " + t)
							}
							r ? this.audioTimestampOffset = t.start: (B.b.warn("change mpeg audio timestamp offset from " + n.timestampOffset + " to " + t.start), n.timestampOffset = t.start)
						}
					}
				},
				r.onManifestParsed = function(t) {
					this.bufferCodecEventsExpected = t.altAudio ? 2 : 1,
					B.b.log(this.bufferCodecEventsExpected + " bufferCodec event(s) expected")
				},
				r.onMediaAttaching = function(t) {
					var e = this.media = t.media;
					if (e && ve) {
						var i = this.mediaSource = new ve;
						i.addEventListener("sourceopen", this._onMediaSourceOpen),
						i.addEventListener("sourceended", this._onMediaSourceEnded),
						i.addEventListener("sourceclose", this._onMediaSourceClose),
						e.src = window.URL.createObjectURL(i),
						this._objectUrl = e.src
					}
				},
				r.onMediaDetaching = function() {
					B.b.log("media source detaching");
					var t = this.mediaSource;
					if (t) {
						if ("open" === t.readyState) try {
							t.endOfStream()
						} catch(t) {
							B.b.warn("onMediaDetaching:" + t.message + " while calling endOfStream")
						}
						t.removeEventListener("sourceopen", this._onMediaSourceOpen),
						t.removeEventListener("sourceended", this._onMediaSourceEnded),
						t.removeEventListener("sourceclose", this._onMediaSourceClose),
						this.media && (this._objectUrl && window.URL.revokeObjectURL(this._objectUrl), this.media.src === this._objectUrl ? (this.media.removeAttribute("src"), this.media.load()) : B.b.warn("media.src was changed by a third party - skip cleanup")),
						this.mediaSource = null,
						this.media = null,
						this._objectUrl = null,
						this.pendingTracks = {},
						this.tracks = {},
						this.sourceBuffer = {},
						this.flushRange = [],
						this.segments = [],
						this.appended = 0
					}
					this.hls.trigger(M.a.MEDIA_DETACHED)
				},
				r.checkPendingTracks = function() {
					var t = this.bufferCodecEventsExpected,
					e = this.pendingTracks,
					i = Object.keys(e).length; (i && !t || 2 === i) && (this.createSourceBuffers(e), this.pendingTracks = {},
					this.doAppending())
				},
				r.onBufferReset = function() {
					var t = this.sourceBuffer;
					for (var e in t) {
						var i = t[e];
						try {
							i && (this.mediaSource && this.mediaSource.removeSourceBuffer(i), i.removeEventListener("updateend", this._onSBUpdateEnd), i.removeEventListener("error", this._onSBUpdateError))
						} catch(t) {}
					}
					this.sourceBuffer = {},
					this.flushRange = [],
					this.segments = [],
					this.appended = 0
				},
				r.onBufferCodecs = function(e) {
					var i = this;
					Object.keys(this.sourceBuffer).length || (Object.keys(e).forEach(function(t) {
						i.pendingTracks[t] = e[t]
					}), this.bufferCodecEventsExpected = Math.max(this.bufferCodecEventsExpected - 1, 0), this.mediaSource && "open" === this.mediaSource.readyState && this.checkPendingTracks())
				},
				r.createSourceBuffers = function(t) {
					var e = this.sourceBuffer,
					i = this.mediaSource;
					if (!i) throw Error("createSourceBuffers called when mediaSource was null");
					for (var n in t) if (!e[n]) {
						var r = t[n];
						if (!r) throw Error("source buffer exists for track " + n + ", however track does not");
						var a = r.levelCodec || r.codec,
						o = r.container + ";codecs=" + a;
						B.b.log("creating sourceBuffer(" + o + ")");
						try {
							var s = e[n] = i.addSourceBuffer(o);
							s.addEventListener("updateend", this._onSBUpdateEnd),
							s.addEventListener("error", this._onSBUpdateError),
							this.tracks[n] = {
								buffer: s,
								codec: a,
								id: r.id,
								container: r.container,
								levelCodec: r.levelCodec
							}
						} catch(t) {
							B.b.error("error while trying to add sourceBuffer:" + t.message),
							this.hls.trigger(M.a.ERROR, {
								type: h.b.MEDIA_ERROR,
								details: h.a.BUFFER_ADD_CODEC_ERROR,
								fatal: !1,
								err: t,
								mimeType: o
							})
						}
					}
					this.hls.trigger(M.a.BUFFER_CREATED, {
						tracks: this.tracks
					})
				},
				r.onBufferAppending = function(t) {
					this._needsFlush || (this.segments ? this.segments.push(t) : this.segments = [t], this.doAppending())
				},
				r.onBufferEos = function(t) {
					for (var e in this.sourceBuffer) if (!t.type || t.type === e) {
						var i = this.sourceBuffer[e];
						i && !i.ended && (i.ended = !0, B.b.log(e + " sourceBuffer now EOS"))
					}
					this.checkEos()
				},
				r.checkEos = function() {
					var t = this.sourceBuffer,
					e = this.mediaSource;
					if (e && "open" === e.readyState) {
						for (var i in t) {
							var n = t[i];
							if (n) {
								if (!n.ended) return;
								if (n.updating) return void(this._needsEos = !0)
							}
						}
						B.b.log("all media data are available, signal endOfStream() to MediaSource and stop loading fragment");
						try {
							e.endOfStream()
						} catch(t) {
							B.b.warn("exception while calling mediaSource.endOfStream()")
						}
						this._needsEos = !1
					} else this._needsEos = !1
				},
				r.onBufferFlushing = function(t) {
					t.type ? this.flushRange.push({
						start: t.startOffset,
						end: t.endOffset,
						type: t.type
					}) : (this.flushRange.push({
						start: t.startOffset,
						end: t.endOffset,
						type: "video"
					}), this.flushRange.push({
						start: t.startOffset,
						end: t.endOffset,
						type: "audio"
					})),
					this.flushBufferCounter = 0,
					this.doFlush()
				},
				r.flushLiveBackBuffer = function() {
					if (!this.media) throw Error("flushLiveBackBuffer called without attaching media");
					if (this._live) {
						var t = this.config.liveBackBufferLength;
						if (isFinite(t) && !(t < 0)) for (var e = this.media.currentTime,
						i = this.sourceBuffer,
						n = Object.keys(i), r = e - Math.max(t, this._levelTargetDuration), a = n.length - 1; 0 <= a; a--) {
							var o = n[a],
							s = i[o];
							if (s) {
								var l = s.buffered;
								0 < l.length && r > l.start(0) && this.removeBufferRange(o, s, 0, r)
							}
						}
					}
				},
				r.onLevelUpdated = function(t) {
					var e = t.details;
					0 < e.fragments.length && (this._levelDuration = e.totalduration + e.fragments[0].start, this._levelTargetDuration = e.averagetargetduration || e.targetduration || 10, this._live = e.live, this.updateMediaElementDuration())
				},
				r.updateMediaElementDuration = function() {
					var t, e = this.config;
					if (null !== this._levelDuration && this.media && this.mediaSource && this.sourceBuffer && 0 !== this.media.readyState && "open" === this.mediaSource.readyState) {
						for (var i in this.sourceBuffer) {
							var n = this.sourceBuffer[i];
							if (n && !0 === n.updating) return
						}
						t = this.media.duration,
						null === this._msDuration && (this._msDuration = this.mediaSource.duration),
						!0 === this._live && !0 === e.liveDurationInfinity ? (B.b.log("Media Source duration is set to Infinity"), this._msDuration = this.mediaSource.duration = 1 / 0) : (this._levelDuration > this._msDuration && this._levelDuration > t || !Object(O.a)(t)) && (B.b.log("Updating Media Source duration to " + this._levelDuration.toFixed(3)), this._msDuration = this.mediaSource.duration = this._levelDuration)
					}
				},
				r.doFlush = function() {
					for (; this.flushRange.length;) {
						var t = this.flushRange[0];
						if (!this.flushBuffer(t.start, t.end, t.type)) return void(this._needsFlush = !0);
						this.flushRange.shift(),
						this.flushBufferCounter = 0
					}
					if (0 === this.flushRange.length) {
						this._needsFlush = !1;
						var e = 0,
						i = this.sourceBuffer;
						try {
							for (var n in i) {
								var r = i[n];
								r && (e += r.buffered.length)
							}
						} catch(t) {
							B.b.error("error while accessing sourceBuffer.buffered")
						}
						this.appended = e,
						this.hls.trigger(M.a.BUFFER_FLUSHED)
					}
				},
				r.doAppending = function() {
					var t = this.config,
					e = this.hls,
					i = this.segments,
					n = this.sourceBuffer;
					if (Object.keys(n).length) {
						if (!this.media || this.media.error) return this.segments = [],
						void B.b.error("trying to append although a media error occured, flush segment and abort");
						if (!this.appending) {
							var r = i.shift();
							if (r) try {
								var a = n[r.type];
								if (!a) return void this._onSBUpdateEnd();
								if (a.updating) return void i.unshift(r);
								a.ended = !1,
								this.parent = r.parent,
								a.appendBuffer(r.data),
								this.appendError = 0,
								this.appended++,
								this.appending = !0
							} catch(n) {
								B.b.error("error while trying to append buffer:" + n.message),
								i.unshift(r);
								var o = {
									type: h.b.MEDIA_ERROR,
									parent: r.parent,
									details: "",
									fatal: !1
								};
								22 === n.code ? (this.segments = [], o.details = h.a.BUFFER_FULL_ERROR) : (this.appendError++, o.details = h.a.BUFFER_APPEND_ERROR, this.appendError > t.appendErrorMaxRetry && (B.b.log("fail " + t.appendErrorMaxRetry + " times to append segment in sourceBuffer"), this.segments = [], o.fatal = !0)),
								e.trigger(M.a.ERROR, o)
							}
						}
					}
				},
				r.flushBuffer = function(t, e, i) {
					var n = this.sourceBuffer;
					if (!Object.keys(n).length) return ! 0;
					var r = "null";
					if (this.media && (r = this.media.currentTime.toFixed(3)), B.b.log("flushBuffer,pos/start/end: " + r + "/" + t + "/" + e), this.flushBufferCounter >= this.appended) return B.b.warn("abort flushing too many retries"),
					!0;
					var a = n[i];
					if (a) {
						if (a.ended = !1, a.updating) return B.b.warn("cannot flush, sb updating in progress"),
						!1;
						if (this.removeBufferRange(i, a, t, e)) return this.flushBufferCounter++,
						!1
					}
					return B.b.log("buffer flushed"),
					!0
				},
				r.removeBufferRange = function(t, e, i, n) {
					try {
						for (var r = 0; r < e.buffered.length; r++) {
							var a = e.buffered.start(r),
							o = e.buffered.end(r),
							s = Math.max(a, i),
							l = Math.min(o, n);
							if (.5 < Math.min(l, o) - s) {
								var c = "null";
								return this.media && (c = this.media.currentTime.toString()),
								B.b.log("sb remove " + t + " [" + s + "," + l + "], of [" + a + "," + o + "], pos:" + c),
								e.remove(s, l),
								!0
							}
						}
					} catch(t) {
						B.b.warn("removeBufferRange failed", t)
					}
					return ! 1
				},
				n
			} (c);
			function me(t, e) {
				for (var i = 0; i < e.length; i++) {
					var n = e[i];
					n.enumerable = n.enumerable || !1,
					n.configurable = !0,
					"value" in n && (n.writable = !0),
					Object.defineProperty(t, n.key, n)
				}
			}
			var Ae = function(i) {
				var t, e;
				function r(t) {
					var e;
					return (e = i.call(this, t, M.a.FPS_DROP_LEVEL_CAPPING, M.a.MEDIA_ATTACHING, M.a.MANIFEST_PARSED, M.a.BUFFER_CODECS, M.a.MEDIA_DETACHING) || this).autoLevelCapping = Number.POSITIVE_INFINITY,
					e.firstLevel = null,
					e.levels = [],
					e.media = null,
					e.restrictedLevels = [],
					e.timer = null,
					e
				}
				e = i,
				(t = r).prototype = Object.create(e.prototype),
				(t.prototype.constructor = t).__proto__ = e;
				var n, a, o = r.prototype;
				return o.destroy = function() {
					this.hls.config.capLevelToPlayerSize && (this.media = null, this.stopCapping())
				},
				o.onFpsDropLevelCapping = function(t) {
					r.isLevelAllowed(t.droppedLevel, this.restrictedLevels) && this.restrictedLevels.push(t.droppedLevel)
				},
				o.onMediaAttaching = function(t) {
					this.media = t.media instanceof window.HTMLVideoElement ? t.media: null
				},
				o.onManifestParsed = function(t) {
					var e = this.hls;
					this.restrictedLevels = [],
					this.levels = t.levels,
					this.firstLevel = t.firstLevel,
					e.config.capLevelToPlayerSize && t.video && this.startCapping()
				},
				o.onBufferCodecs = function(t) {
					this.hls.config.capLevelToPlayerSize && t.video && this.startCapping()
				},
				o.onLevelsUpdated = function(t) {
					this.levels = t.levels
				},
				o.onMediaDetaching = function() {
					this.stopCapping()
				},
				o.detectPlayerSize = function() {
					if (this.media) {
						var t = this.levels ? this.levels.length: 0;
						if (t) {
							var e = this.hls;
							e.autoLevelCapping = this.getMaxLevel(t - 1),
							e.autoLevelCapping > this.autoLevelCapping && e.streamController.nextLevelSwitch(),
							this.autoLevelCapping = e.autoLevelCapping
						}
					}
				},
				o.getMaxLevel = function(i) {
					var n = this;
					if (!this.levels) return - 1;
					var t = this.levels.filter(function(t, e) {
						return r.isLevelAllowed(e, n.restrictedLevels) && e <= i
					});
					return r.getMaxLevelByMediaSize(t, this.mediaWidth, this.mediaHeight)
				},
				o.startCapping = function() {
					this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, this.hls.firstLevel = this.getMaxLevel(this.firstLevel), clearInterval(this.timer), this.timer = setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize())
				},
				o.stopCapping = function() {
					this.restrictedLevels = [],
					this.firstLevel = null,
					this.autoLevelCapping = Number.POSITIVE_INFINITY,
					this.timer && (this.timer = clearInterval(this.timer), this.timer = null)
				},
				r.isLevelAllowed = function(t, e) {
					return void 0 === e && (e = []),
					-1 === e.indexOf(t)
				},
				r.getMaxLevelByMediaSize = function(t, e, i) {
					if (!t || t && !t.length) return - 1;
					for (var n, r, a = t.length - 1,
					o = 0; o < t.length; o += 1) {
						var s = t[o];
						if ((s.width >= e || s.height >= i) && (n = s, !(r = t[o + 1]) || n.width !== r.width || n.height !== r.height)) {
							a = o;
							break
						}
					}
					return a
				},
				a = [{
					key: "contentScaleFactor",
					get: function() {
						var t = 1;
						try {
							t = window.devicePixelRatio
						} catch(t) {}
						return t
					}
				}],
				me((n = r).prototype, [{
					key: "mediaWidth",
					get: function() {
						var t, e = this.media;
						return e && (t = e.width || e.clientWidth || e.offsetWidth, t *= r.contentScaleFactor),
						t
					}
				},
				{
					key: "mediaHeight",
					get: function() {
						var t, e = this.media;
						return e && (t = e.height || e.clientHeight || e.offsetHeight, t *= r.contentScaleFactor),
						t
					}
				}]),
				me(n, a),
				r
			} (c),
			ye = window.performance,
			be = function(e) {
				var t, i;
				function n(t) {
					return e.call(this, t, M.a.MEDIA_ATTACHING) || this
				}
				i = e,
				(t = n).prototype = Object.create(i.prototype),
				(t.prototype.constructor = t).__proto__ = i;
				var r = n.prototype;
				return r.destroy = function() {
					this.timer && clearInterval(this.timer),
					this.isVideoPlaybackQualityAvailable = !1
				},
				r.onMediaAttaching = function(t) {
					var e = this.hls.config;
					e.capLevelOnFPSDrop && ("function" == typeof(this.video = t.media instanceof window.HTMLVideoElement ? t.media: null).getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = !0), clearInterval(this.timer), this.timer = setInterval(this.checkFPSInterval.bind(this), e.fpsDroppedMonitoringPeriod))
				},
				r.checkFPS = function(t, e, i) {
					var n = ye.now();
					if (e) {
						if (this.lastTime) {
							var r = n - this.lastTime,
							a = i - this.lastDroppedFrames,
							o = e - this.lastDecodedFrames,
							s = 1e3 * a / r,
							l = this.hls;
							if (l.trigger(M.a.FPS_DROP, {
								currentDropped: a,
								currentDecoded: o,
								totalDroppedFrames: i
							}), 0 < s && a > l.config.fpsDroppedMonitoringThreshold * o) {
								var c = l.currentLevel;
								B.b.warn("drop FPS ratio greater than max allowed value for currentLevel: " + c),
								0 < c && ( - 1 === l.autoLevelCapping || l.autoLevelCapping >= c) && (--c, l.trigger(M.a.FPS_DROP_LEVEL_CAPPING, {
									level: c,
									droppedLevel: l.currentLevel
								}), l.autoLevelCapping = c, l.streamController.nextLevelSwitch())
							}
						}
						this.lastTime = n,
						this.lastDroppedFrames = i,
						this.lastDecodedFrames = e
					}
				},
				r.checkFPSInterval = function() {
					var t = this.video;
					if (t) if (this.isVideoPlaybackQualityAvailable) {
						var e = t.getVideoPlaybackQuality();
						this.checkFPS(t, e.totalVideoFrames, e.droppedVideoFrames)
					} else this.checkFPS(t, t.webkitDecodedFrameCount, t.webkitDroppedFrameCount)
				},
				n
			} (c),
			we = window,
			ke = we.performance,
			Ee = we.XMLHttpRequest,
			xe = function() {
				function t(t) {
					t && t.xhrSetup && (this.xhrSetup = t.xhrSetup)
				}
				var e = t.prototype;
				return e.destroy = function() {
					this.abort(),
					this.loader = null
				},
				e.abort = function() {
					var t = this.loader;
					t && 4 !== t.readyState && (this.stats.aborted = !0, t.abort()),
					window.clearTimeout(this.requestTimeout),
					this.requestTimeout = null,
					window.clearTimeout(this.retryTimeout),
					this.retryTimeout = null
				},
				e.load = function(t, e, i) {
					this.context = t,
					this.config = e,
					this.callbacks = i,
					this.stats = {
						trequest: ke.now(),
						retry: 0
					},
					this.retryDelay = e.retryDelay,
					this.loadInternal()
				},
				e.loadInternal = function() {
					var t, e = this.context;
					t = this.loader = new Ee;
					var i = this.stats;
					i.tfirst = 0,
					i.loaded = 0;
					var n = this.xhrSetup;
					try {
						if (n) try {
							n(t, e.url)
						} catch(i) {
							t.open("GET", e.url, !0),
							n(t, e.url)
						}
						t.readyState || t.open("GET", e.url, !0)
					} catch(i) {
						return void this.callbacks.onError({
							code: t.status,
							text: i.message
						},
						e, t)
					}
					e.rangeEnd && t.setRequestHeader("Range", "bytes=" + e.rangeStart + "-" + (e.rangeEnd - 1)),
					t.onreadystatechange = this.readystatechange.bind(this),
					t.onprogress = this.loadprogress.bind(this),
					t.responseType = e.responseType,
					this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), this.config.timeout),
					t.send()
				},
				e.readystatechange = function(t) {
					var e = t.currentTarget,
					i = e.readyState,
					n = this.stats,
					r = this.context,
					a = this.config;
					if (!n.aborted && 2 <= i) if (window.clearTimeout(this.requestTimeout), 0 === n.tfirst && (n.tfirst = Math.max(ke.now(), n.trequest)), 4 === i) {
						var o = e.status;
						if (200 <= o && o < 300) {
							var s, l;
							n.tload = Math.max(n.tfirst, ke.now()),
							l = "arraybuffer" === r.responseType ? (s = e.response).byteLength: (s = e.responseText).length,
							n.loaded = n.total = l;
							var c = {
								url: e.responseURL,
								data: s
							};
							this.callbacks.onSuccess(c, n, r, e)
						} else n.retry >= a.maxRetry || 400 <= o && o < 499 ? (B.b.error(o + " while loading " + r.url), this.callbacks.onError({
							code: o,
							text: e.statusText
						},
						r, e)) : (B.b.warn(o + " while loading " + r.url + ", retrying in " + this.retryDelay + "..."), this.destroy(), this.retryTimeout = window.setTimeout(this.loadInternal.bind(this), this.retryDelay), this.retryDelay = Math.min(2 * this.retryDelay, a.maxRetryDelay), n.retry++)
					} else this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), a.timeout)
				},
				e.loadtimeout = function() {
					B.b.warn("timeout while loading " + this.context.url),
					this.callbacks.onTimeout(this.stats, this.context, null)
				},
				e.loadprogress = function(t) {
					var e = t.currentTarget,
					i = this.stats;
					i.loaded = t.loaded,
					t.lengthComputable && (i.total = t.total);
					var n = this.callbacks.onProgress;
					n && n(i, this.context, null, e)
				},
				t
			} ();
			function Te(t, e) {
				for (var i = 0; i < e.length; i++) {
					var n = e[i];
					n.enumerable = n.enumerable || !1,
					n.configurable = !0,
					"value" in n && (n.writable = !0),
					Object.defineProperty(t, n.key, n)
				}
			}
			var Se = function(i) {
				var t, e;
				function n(t) {
					var e;
					return (e = i.call(this, t, M.a.MANIFEST_LOADING, M.a.MANIFEST_PARSED, M.a.AUDIO_TRACK_LOADED, M.a.AUDIO_TRACK_SWITCHED, M.a.LEVEL_LOADED, M.a.ERROR) || this)._trackId = -1,
					e._selectDefaultTrack = !0,
					e.tracks = [],
					e.trackIdBlacklist = Object.create(null),
					e.audioGroupId = null,
					e
				}
				e = i,
				(t = n).prototype = Object.create(e.prototype),
				(t.prototype.constructor = t).__proto__ = e;
				var r = n.prototype;
				return r.onManifestLoading = function() {
					this.tracks = [],
					this._trackId = -1,
					this._selectDefaultTrack = !0
				},
				r.onManifestParsed = function(t) {
					var e = this.tracks = t.audioTracks || [];
					this.hls.trigger(M.a.AUDIO_TRACKS_UPDATED, {
						audioTracks: e
					})
				},
				r.onAudioTrackLoaded = function(t) {
					if (t.id >= this.tracks.length) B.b.warn("Invalid audio track id:", t.id);
					else {
						if (B.b.log("audioTrack " + t.id + " loaded"), this.tracks[t.id].details = t.details, t.details.live && !this.hasInterval()) {
							var e = 1e3 * t.details.targetduration;
							this.setInterval(e)
						} ! t.details.live && this.hasInterval() && this.clearInterval()
					}
				},
				r.onAudioTrackSwitched = function(t) {
					var e = this.tracks[t.id].groupId;
					e && this.audioGroupId !== e && (this.audioGroupId = e)
				},
				r.onLevelLoaded = function(t) {
					var e = this.hls.levels[t.level];
					if (e.audioGroupIds) {
						var i = e.audioGroupIds[e.urlId];
						this.audioGroupId !== i && (this.audioGroupId = i, this._selectInitialAudioTrack())
					}
				},
				r.onError = function(t) {
					t.type === h.b.NETWORK_ERROR && (t.fatal && this.clearInterval(), t.details === h.a.AUDIO_TRACK_LOAD_ERROR && (B.b.warn("Network failure on audio-track id:", t.context.id), this._handleLoadError()))
				},
				r._setAudioTrack = function(t) {
					if (this._trackId === t && this.tracks[this._trackId].details) B.b.debug("Same id as current audio-track passed, and track details available -> no-op");
					else if (t < 0 || t >= this.tracks.length) B.b.warn("Invalid id passed to audio-track controller");
					else {
						var e = this.tracks[t];
						B.b.log("Now switching to audio-track index " + t),
						this.clearInterval(),
						this._trackId = t;
						var i = e.url,
						n = e.type,
						r = e.id;
						this.hls.trigger(M.a.AUDIO_TRACK_SWITCHING, {
							id: r,
							type: n,
							url: i
						}),
						this._loadTrackDetailsIfNeeded(e)
					}
				},
				r.doTick = function() {
					this._updateTrack(this._trackId)
				},
				r._selectInitialAudioTrack = function() {
					var e = this,
					t = this.tracks;
					if (t.length) {
						var i = this.tracks[this._trackId],
						n = null;
						if (i && (n = i.name), this._selectDefaultTrack) {
							var r = t.filter(function(t) {
								return t.
							default
							});
							r.length ? t = r: B.b.warn("No default audio tracks defined")
						}
						var a = !1,
						o = function() {
							t.forEach(function(t) {
								a || e.audioGroupId && t.groupId !== e.audioGroupId || n && n !== t.name || (e._setAudioTrack(t.id), a = !0)
							})
						};
						o(),
						a || (n = null, o()),
						a || (B.b.error("No track found for running audio group-ID: " + this.audioGroupId), this.hls.trigger(M.a.ERROR, {
							type: h.b.MEDIA_ERROR,
							details: h.a.AUDIO_TRACK_LOAD_ERROR,
							fatal: !0
						}))
					}
				},
				r._needsTrackLoading = function(t) {
					var e = t.details,
					i = t.url;
					return ! (e && !e.live || !i)
				},
				r._loadTrackDetailsIfNeeded = function(t) {
					if (this._needsTrackLoading(t)) {
						var e = t.url,
						i = t.id;
						B.b.log("loading audio-track playlist for id: " + i),
						this.hls.trigger(M.a.AUDIO_TRACK_LOADING, {
							url: e,
							id: i
						})
					}
				},
				r._updateTrack = function(t) {
					if (! (t < 0 || t >= this.tracks.length)) {
						this.clearInterval(),
						this._trackId = t,
						B.b.log("trying to update audio-track " + t);
						var e = this.tracks[t];
						this._loadTrackDetailsIfNeeded(e)
					}
				},
				r._handleLoadError = function() {
					this.trackIdBlacklist[this._trackId] = !0;
					var t = this._trackId,
					e = this.tracks[t],
					i = e.name,
					n = e.language,
					r = e.groupId;
					B.b.warn("Loading failed on audio track id: " + t + ", group-id: " + r + ', name/language: "' + i + '" / "' + n + '"');
					for (var a = t,
					o = 0; o < this.tracks.length; o++) if (!this.trackIdBlacklist[o] && this.tracks[o].name === i) {
						a = o;
						break
					}
					a !== t ? (B.b.log("Attempting audio-track fallback id:", a, "group-id:", this.tracks[a].groupId), this._setAudioTrack(a)) : B.b.warn('No fallback audio-track found for name/language: "' + i + '" / "' + n + '"')
				},
				Te(n.prototype, [{
					key: "audioTracks",
					get: function() {
						return this.tracks
					}
				},
				{
					key: "audioTrack",
					get: function() {
						return this._trackId
					},
					set: function(t) {
						this._setAudioTrack(t),
						this._selectDefaultTrack = !1
					}
				}]),
				n
			} (Jt);
			function _e(t, e) {
				for (var i = 0; i < e.length; i++) {
					var n = e[i];
					n.enumerable = n.enumerable || !1,
					n.configurable = !0,
					"value" in n && (n.writable = !0),
					Object.defineProperty(t, n.key, n)
				}
			}
			var Ce = window.performance,
			Le = function(n) {
				var t, e;
				function i(t, e) {
					var i;
					return (i = n.call(this, t, M.a.MEDIA_ATTACHED, M.a.MEDIA_DETACHING, M.a.AUDIO_TRACKS_UPDATED, M.a.AUDIO_TRACK_SWITCHING, M.a.AUDIO_TRACK_LOADED, M.a.KEY_LOADED, M.a.FRAG_LOADED, M.a.FRAG_PARSING_INIT_SEGMENT, M.a.FRAG_PARSING_DATA, M.a.FRAG_PARSED, M.a.ERROR, M.a.BUFFER_RESET, M.a.BUFFER_CREATED, M.a.BUFFER_APPENDED, M.a.BUFFER_FLUSHED, M.a.INIT_PTS_FOUND) || this).fragmentTracker = e,
					i.config = t.config,
					i.audioCodecSwap = !1,
					i._state = Zt.STOPPED,
					i.initPTS = [],
					i.waitingFragment = null,
					i.videoTrackCC = null,
					i
				}
				e = n,
				(t = i).prototype = Object.create(e.prototype),
				(t.prototype.constructor = t).__proto__ = e;
				var r = i.prototype;
				return r.onInitPtsFound = function(t) {
					var e = t.id,
					i = t.frag.cc,
					n = t.initPTS;
					"main" === e && (this.initPTS[i] = n, this.videoTrackCC = i, B.b.log("InitPTS for cc: " + i + " found from video track: " + n), this.state === Zt.WAITING_INIT_PTS && this.tick())
				},
				r.startLoad = function(t) {
					if (this.tracks) {
						var e = this.lastCurrentTime;
						this.stopLoad(),
						this.setInterval(100),
						(this.fragLoadError = 0) < e && -1 === t ? (B.b.log("audio:override startPosition with lastCurrentTime @" + e.toFixed(3)), this.state = Zt.IDLE) : (this.lastCurrentTime = this.startPosition ? this.startPosition: t, this.state = Zt.STARTING),
						this.nextLoadPosition = this.startPosition = this.lastCurrentTime,
						this.tick()
					} else this.startPosition = t,
					this.state = Zt.STOPPED
				},
				r.doTick = function() {
					var t, e, i, n = this.hls,
					r = n.config;
					switch (this.state) {
					case Zt.ERROR:
					case Zt.PAUSED:
					case Zt.BUFFER_FLUSHING:
						break;
					case Zt.STARTING:
						this.state = Zt.WAITING_TRACK,
						this.loadedmetadata = !1;
						break;
					case Zt.IDLE:
						var a = this.tracks;
						if (!a) break;
						if (!this.media && (this.startFragRequested || !r.startFragPrefetch)) break;
						if (this.loadedmetadata) t = this.media.currentTime;
						else if (void 0 === (t = this.nextLoadPosition)) break;
						var o = this.mediaBuffer ? this.mediaBuffer: this.media,
						s = this.videoBuffer ? this.videoBuffer: this.media,
						l = Ct.bufferInfo(o, t, r.maxBufferHole),
						c = Ct.bufferInfo(s, t, r.maxBufferHole),
						u = l.len,
						d = l.end,
						h = this.fragPrevious,
						p = Math.min(r.maxBufferLength, r.maxMaxBufferLength),
						f = Math.max(p, c.len),
						v = this.audioSwitch,
						g = this.trackId;
						if ((u < f || v) && g < a.length) {
							if (void 0 === (i = a[g].details)) {
								this.state = Zt.WAITING_TRACK;
								break
							}
							if (!v && this._streamEnded(l, i)) return this.hls.trigger(M.a.BUFFER_EOS, {
								type: "audio"
							}),
							void(this.state = Zt.ENDED);
							var m, A = i.fragments,
							y = A.length,
							b = A[0].start,
							w = A[y - 1].start + A[y - 1].duration;
							if (v) if (i.live && !i.PTSKnown) B.b.log("switching audiotrack, live stream, unknown PTS,load first fragment"),
							d = 0;
							else if (d = t, i.PTSKnown && t < b) {
								if (! (l.end > b || l.nextStart)) return;
								B.b.log("alt audio track ahead of main track, seek to start of alt audio track"),
								this.media.currentTime = b + .05
							}
							if (i.initSegment && !i.initSegment.data) m = i.initSegment;
							else if (d <= b) {
								if (m = A[0], null !== this.videoTrackCC && m.cc !== this.videoTrackCC && (m = function(t, e) {
									return _t.search(t,
									function(t) {
										return t.cc < e ? 1 : t.cc > e ? -1 : 0
									})
								} (A, this.videoTrackCC)), i.live && m.loadIdx && m.loadIdx === this.fragLoadIdx) {
									var k = l.nextStart ? l.nextStart: b;
									return B.b.log("no alt audio available @currentTime:" + this.media.currentTime + ", seeking @" + (k + .05)),
									void(this.media.currentTime = k + .05)
								}
							} else {
								var E, x = r.maxFragLookUpTolerance,
								T = h ? A[h.sn - A[0].sn + 1] : void 0,
								S = function(t) {
									var e = Math.min(x, t.duration);
									return t.start + t.duration - e <= d ? 1 : t.start - e > d && t.start ? -1 : 0
								}; (E = d < w ? (w - x < d && (x = 0), T && !S(T) ? T: _t.search(A, S)) : A[y - 1]) && (b = (m = E).start, h && m.level === h.level && m.sn === h.sn && (m.sn < i.endSN ? (m = A[m.sn + 1 - i.startSN], B.b.log("SN just loaded, load next one: " + m.sn)) : m = null))
							}
							m && (m.encrypted ? (B.b.log("Loading key for " + m.sn + " of [" + i.startSN + " ," + i.endSN + "],track " + g), this.state = Zt.KEY_LOADING, n.trigger(M.a.KEY_LOADING, {
								frag: m
							})) : (B.b.log("Loading " + m.sn + ", cc: " + m.cc + " of [" + i.startSN + " ," + i.endSN + "],track " + g + ", currentTime:" + t + ",bufferEnd:" + d.toFixed(3)), this.fragCurrent = m, !v && this.fragmentTracker.getState(m) !== Et || ("initSegment" !== m.sn && (this.startFragRequested = !0), Object(O.a)(m.sn) && (this.nextLoadPosition = m.start + m.duration), n.trigger(M.a.FRAG_LOADING, {
								frag: m
							}), this.state = Zt.FRAG_LOADING)))
						}
						break;
					case Zt.WAITING_TRACK:
						(e = this.tracks[this.trackId]) && e.details && (this.state = Zt.IDLE);
						break;
					case Zt.FRAG_LOADING_WAITING_RETRY:
						var _ = Ce.now(),
						C = this.retryDate,
						L = (o = this.media) && o.seeking; (!C || C <= _ || L) && (B.b.log("audioStreamController: retryDate reached, switch back to IDLE state"), this.state = Zt.IDLE);
						break;
					case Zt.WAITING_INIT_PTS:
						var R = this.videoTrackCC;
						if (void 0 === this.initPTS[R]) break;
						var D = this.waitingFragment;
						if (D) {
							var I = D.frag.cc;
							R !== I ? (e = this.tracks[this.trackId]).details && e.details.live && (B.b.warn("Waiting fragment CC (" + I + ") does not match video track CC (" + R + ")"), this.waitingFragment = null, this.state = Zt.IDLE) : (this.state = Zt.FRAG_LOADING, this.onFragLoaded(this.waitingFragment), this.waitingFragment = null)
						} else this.state = Zt.IDLE
					}
				},
				r.onMediaAttached = function(t) {
					var e = this.media = this.mediaBuffer = t.media;
					this.onvseeking = this.onMediaSeeking.bind(this),
					this.onvended = this.onMediaEnded.bind(this),
					e.addEventListener("seeking", this.onvseeking),
					e.addEventListener("ended", this.onvended);
					var i = this.config;
					this.tracks && i.autoStartLoad && this.startLoad(i.startPosition)
				},
				r.onMediaDetaching = function() {
					var t = this.media;
					t && t.ended && (B.b.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0),
					t && (t.removeEventListener("seeking", this.onvseeking), t.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null),
					this.media = this.mediaBuffer = this.videoBuffer = null,
					this.loadedmetadata = !1,
					this.stopLoad()
				},
				r.onAudioTracksUpdated = function(t) {
					B.b.log("audio tracks updated"),
					this.tracks = t.audioTracks
				},
				r.onAudioTrackSwitching = function(t) {
					var e = !!t.url;
					this.trackId = t.id,
					this.fragCurrent = null,
					this.state = Zt.PAUSED,
					this.waitingFragment = null,
					e ? this.setInterval(100) : this.demuxer && (this.demuxer.destroy(), this.demuxer = null),
					e && (this.audioSwitch = !0, this.state = Zt.IDLE),
					this.tick()
				},
				r.onAudioTrackLoaded = function(t) {
					var e = t.details,
					i = t.id,
					n = this.tracks[i],
					r = e.totalduration,
					a = 0;
					if (B.b.log("track " + i + " loaded [" + e.startSN + "," + e.endSN + "],duration:" + r), e.live) {
						var o = n.details;
						o && 0 < e.fragments.length ? (jt(o, e), a = e.fragments[0].start, e.PTSKnown ? B.b.log("live audio playlist sliding:" + a.toFixed(3)) : B.b.log("live audio playlist - outdated PTS, unknown sliding")) : (e.PTSKnown = !1, B.b.log("live audio playlist - first load, unknown sliding"))
					} else e.PTSKnown = !1;
					if (n.details = e, !this.startFragRequested) {
						if ( - 1 === this.startPosition) {
							var s = e.startTimeOffset;
							Object(O.a)(s) ? (B.b.log("start time offset found in playlist, adjust startPosition to " + s), this.startPosition = s) : e.live ? (this.startPosition = this.computeLivePosition(a, e), B.b.log("compute startPosition for audio-track to " + this.startPosition)) : this.startPosition = 0
						}
						this.nextLoadPosition = this.startPosition
					}
					this.state === Zt.WAITING_TRACK && (this.state = Zt.IDLE),
					this.tick()
				},
				r.onKeyLoaded = function() {
					this.state === Zt.KEY_LOADING && (this.state = Zt.IDLE, this.tick())
				},
				r.onFragLoaded = function(t) {
					var e = this.fragCurrent,
					i = t.frag;
					if (this.state === Zt.FRAG_LOADING && e && "audio" === i.type && i.level === e.level && i.sn === e.sn) {
						var n = this.tracks[this.trackId],
						r = n.details,
						a = r.totalduration,
						o = e.level,
						s = e.sn,
						l = e.cc,
						c = this.config.defaultAudioCodec || n.audioCodec || "mp4a.40.2",
						u = this.stats = t.stats;
						if ("initSegment" === s) this.state = Zt.IDLE,
						u.tparsed = u.tbuffered = Ce.now(),
						r.initSegment.data = t.payload,
						this.hls.trigger(M.a.FRAG_BUFFERED, {
							stats: u,
							frag: e,
							id: "audio"
						}),
						this.tick();
						else {
							this.state = Zt.PARSING,
							this.appended = !1,
							this.demuxer || (this.demuxer = new Ft(this.hls, "audio"));
							var d = this.initPTS[l],
							h = r.initSegment ? r.initSegment.data: [];
							r.initSegment || void 0 !== d ? (this.pendingBuffering = !0, B.b.log("Demuxing " + s + " of [" + r.startSN + " ," + r.endSN + "],track " + o), this.demuxer.push(t.payload, h, c, null, e, a, !1, d)) : (B.b.log("unknown video PTS for continuity counter " + l + ", waiting for video PTS before demuxing audio frag " + s + " of [" + r.startSN + " ," + r.endSN + "],track " + o), this.waitingFragment = t, this.state = Zt.WAITING_INIT_PTS)
						}
					}
					this.fragLoadError = 0
				},
				r.onFragParsingInitSegment = function(t) {
					var e = this.fragCurrent,
					i = t.frag;
					if (e && "audio" === t.id && i.sn === e.sn && i.level === e.level && this.state === Zt.PARSING) {
						var n, r = t.tracks;
						if (r.video && delete r.video, n = r.audio) {
							n.levelCodec = n.codec,
							n.id = t.id,
							this.hls.trigger(M.a.BUFFER_CODECS, r),
							B.b.log("audio track:audio,container:" + n.container + ",codecs[level/parsed]=[" + n.levelCodec + "/" + n.codec + "]");
							var a = n.initSegment;
							if (a) {
								var o = {
									type: "audio",
									data: a,
									parent: "audio",
									content: "initSegment"
								};
								this.audioSwitch ? this.pendingData = [o] : (this.appended = !0, this.pendingBuffering = !0, this.hls.trigger(M.a.BUFFER_APPENDING, o))
							}
							this.tick()
						}
					}
				},
				r.onFragParsingData = function(e) {
					var i = this,
					t = this.fragCurrent,
					n = e.frag;
					if (t && "audio" === e.id && "audio" === e.type && n.sn === t.sn && n.level === t.level && this.state === Zt.PARSING) {
						var r = this.trackId,
						a = this.tracks[r],
						o = this.hls;
						Object(O.a)(e.endPTS) || (e.endPTS = e.startPTS + t.duration, e.endDTS = e.startDTS + t.duration),
						t.addElementaryStream(p.AUDIO),
						B.b.log("parsed " + e.type + ",PTS:[" + e.startPTS.toFixed(3) + "," + e.endPTS.toFixed(3) + "],DTS:[" + e.startDTS.toFixed(3) + "/" + e.endDTS.toFixed(3) + "],nb:" + e.nb),
						qt(a.details, t, e.startPTS, e.endPTS);
						var s = this.audioSwitch,
						l = this.media,
						c = !1;
						if (s) if (l && l.readyState) {
							var u = l.currentTime;
							B.b.log("switching audio track : currentTime:" + u),
							u >= e.startPTS && (B.b.log("switching audio track : flushing all audio"), this.state = Zt.BUFFER_FLUSHING, o.trigger(M.a.BUFFER_FLUSHING, {
								startOffset: 0,
								endOffset: Number.POSITIVE_INFINITY,
								type: "audio"
							}), c = !0, this.audioSwitch = !1, o.trigger(M.a.AUDIO_TRACK_SWITCHED, {
								id: r
							}))
						} else this.audioSwitch = !1,
						o.trigger(M.a.AUDIO_TRACK_SWITCHED, {
							id: r
						});
						var d = this.pendingData;
						if (!d) return B.b.warn("Apparently attempt to enqueue media payload without codec initialization data upfront"),
						void o.trigger(M.a.ERROR, {
							type: h.b.MEDIA_ERROR,
							details: null,
							fatal: !0
						});
						this.audioSwitch || ([e.data1, e.data2].forEach(function(t) {
							t && t.length && d.push({
								type: e.type,
								data: t,
								parent: "audio",
								content: "data"
							})
						}), !c && d.length && (d.forEach(function(t) {
							i.state === Zt.PARSING && (i.pendingBuffering = !0, i.hls.trigger(M.a.BUFFER_APPENDING, t))
						}), this.pendingData = [], this.appended = !0)),
						this.tick()
					}
				},
				r.onFragParsed = function(t) {
					var e = this.fragCurrent,
					i = t.frag;
					e && "audio" === t.id && i.sn === e.sn && i.level === e.level && this.state === Zt.PARSING && (this.stats.tparsed = Ce.now(), this.state = Zt.PARSED, this._checkAppendedParsed())
				},
				r.onBufferReset = function() {
					this.mediaBuffer = this.videoBuffer = null,
					this.loadedmetadata = !1
				},
				r.onBufferCreated = function(t) {
					var e = t.tracks.audio;
					e && (this.mediaBuffer = e.buffer, this.loadedmetadata = !0),
					t.tracks.video && (this.videoBuffer = t.tracks.video.buffer)
				},
				r.onBufferAppended = function(t) {
					if ("audio" === t.parent) {
						var e = this.state;
						e !== Zt.PARSING && e !== Zt.PARSED || (this.pendingBuffering = 0 < t.pending, this._checkAppendedParsed())
					}
				},
				r._checkAppendedParsed = function() {
					if (! (this.state !== Zt.PARSED || this.appended && this.pendingBuffering)) {
						var t = this.fragCurrent,
						e = this.stats,
						i = this.hls;
						if (t) {
							this.fragPrevious = t,
							e.tbuffered = Ce.now(),
							i.trigger(M.a.FRAG_BUFFERED, {
								stats: e,
								frag: t,
								id: "audio"
							});
							var n = this.mediaBuffer ? this.mediaBuffer: this.media;
							n && B.b.log("audio buffered : " + Ht.toString(n.buffered)),
							this.audioSwitch && this.appended && (this.audioSwitch = !1, i.trigger(M.a.AUDIO_TRACK_SWITCHED, {
								id: this.trackId
							})),
							this.state = Zt.IDLE
						}
						this.tick()
					}
				},
				r.onError = function(t) {
					var e = t.frag;
					if (!e || "audio" === e.type) switch (t.details) {
					case h.a.FRAG_LOAD_ERROR:
					case h.a.FRAG_LOAD_TIMEOUT:
						var i = t.frag;
						if (i && "audio" !== i.type) break;
						if (!t.fatal) {
							var n = this.fragLoadError;
							n ? n++:n = 1;
							var r = this.config;
							if (n <= r.fragLoadingMaxRetry) {
								this.fragLoadError = n;
								var a = Math.min(Math.pow(2, n - 1) * r.fragLoadingRetryDelay, r.fragLoadingMaxRetryTimeout);
								B.b.warn("AudioStreamController: frag loading failed, retry in " + a + " ms"),
								this.retryDate = Ce.now() + a,
								this.state = Zt.FRAG_LOADING_WAITING_RETRY
							} else B.b.error("AudioStreamController: " + t.details + " reaches max retry, redispatch as fatal ..."),
							t.fatal = !0,
							this.state = Zt.ERROR
						}
						break;
					case h.a.AUDIO_TRACK_LOAD_ERROR:
					case h.a.AUDIO_TRACK_LOAD_TIMEOUT:
					case h.a.KEY_LOAD_ERROR:
					case h.a.KEY_LOAD_TIMEOUT:
						this.state !== Zt.ERROR && (this.state = t.fatal ? Zt.ERROR: Zt.IDLE, B.b.warn("AudioStreamController: " + t.details + " while loading frag, now switching to " + this.state + " state ..."));
						break;
					case h.a.BUFFER_FULL_ERROR:
						if ("audio" === t.parent && (this.state === Zt.PARSING || this.state === Zt.PARSED)) {
							var o = this.mediaBuffer,
							s = this.media.currentTime;
							if (o && Ct.isBuffered(o, s) && Ct.isBuffered(o, s + .5)) {
								var l = this.config;
								l.maxMaxBufferLength >= l.maxBufferLength && (l.maxMaxBufferLength /= 2, B.b.warn("AudioStreamController: reduce max buffer length to " + l.maxMaxBufferLength + "s")),
								this.state = Zt.IDLE
							} else B.b.warn("AudioStreamController: buffer full error also media.currentTime is not buffered, flush audio buffer"),
							this.fragCurrent = null,
							this.state = Zt.BUFFER_FLUSHING,
							this.hls.trigger(M.a.BUFFER_FLUSHING, {
								startOffset: 0,
								endOffset: Number.POSITIVE_INFINITY,
								type: "audio"
							})
						}
					}
				},
				r.onBufferFlushed = function() {
					var e = this,
					t = this.pendingData;
					t && t.length ? (B.b.log("AudioStreamController: appending pending audio data after buffer flushed"), t.forEach(function(t) {
						e.hls.trigger(M.a.BUFFER_APPENDING, t)
					}), this.appended = !0, this.pendingData = [], this.state = Zt.PARSED) : (this.state = Zt.IDLE, this.fragPrevious = null, this.tick())
				},
				_e(i.prototype, [{
					key: "state",
					set: function(t) {
						if (this.state !== t) {
							var e = this.state;
							this._state = t,
							B.b.log("audio stream:" + e + "->" + t)
						}
					},
					get: function() {
						return this._state
					}
				}]),
				i
			} ($t),
			Re = function() {
				if ("undefined" != typeof window && window.VTTCue) return window.VTTCue;
				var y = {
					"": !0,
					lr: !0,
					rl: !0
				},
				e = {
					start: !0,
					middle: !0,
					end: !0,
					left: !0,
					right: !0
				};
				function b(t) {
					return "string" == typeof t && !!e[t.toLowerCase()] && t.toLowerCase()
				}
				function w(t) {
					for (var e = 1; e < arguments.length; e++) {
						var i = arguments[e];
						for (var n in i) t[n] = i[n]
					}
					return t
				}
				function t(t, e, i) {
					var n = this,
					r = {
						enumerable: !0
					};
					n.hasBeenReset = !1;
					var a = "",
					o = !1,
					s = t,
					l = e,
					c = i,
					u = null,
					d = "",
					h = !0,
					p = "auto",
					f = "start",
					v = 50,
					g = "middle",
					m = 50,
					A = "middle";
					Object.defineProperty(n, "id", w({},
					r, {
						get: function() {
							return a
						},
						set: function(t) {
							a = "" + t
						}
					})),
					Object.defineProperty(n, "pauseOnExit", w({},
					r, {
						get: function() {
							return o
						},
						set: function(t) {
							o = !!t
						}
					})),
					Object.defineProperty(n, "startTime", w({},
					r, {
						get: function() {
							return s
						},
						set: function(t) {
							if ("number" != typeof t) throw new TypeError("Start time must be set to a number.");
							s = t,
							this.hasBeenReset = !0
						}
					})),
					Object.defineProperty(n, "endTime", w({},
					r, {
						get: function() {
							return l
						},
						set: function(t) {
							if ("number" != typeof t) throw new TypeError("End time must be set to a number.");
							l = t,
							this.hasBeenReset = !0
						}
					})),
					Object.defineProperty(n, "text", w({},
					r, {
						get: function() {
							return c
						},
						set: function(t) {
							c = "" + t,
							this.hasBeenReset = !0
						}
					})),
					Object.defineProperty(n, "region", w({},
					r, {
						get: function() {
							return u
						},
						set: function(t) {
							u = t,
							this.hasBeenReset = !0
						}
					})),
					Object.defineProperty(n, "vertical", w({},
					r, {
						get: function() {
							return d
						},
						set: function(t) {
							var e = function(t) {
								return "string" == typeof t && !!y[t.toLowerCase()] && t.toLowerCase()
							} (t);
							if (!1 === e) throw new SyntaxError("An invalid or illegal string was specified.");
							d = e,
							this.hasBeenReset = !0
						}
					})),
					Object.defineProperty(n, "snapToLines", w({},
					r, {
						get: function() {
							return h
						},
						set: function(t) {
							h = !!t,
							this.hasBeenReset = !0
						}
					})),
					Object.defineProperty(n, "line", w({},
					r, {
						get: function() {
							return p
						},
						set: function(t) {
							if ("number" != typeof t && "auto" !== t) throw new SyntaxError("An invalid number or illegal string was specified.");
							p = t,
							this.hasBeenReset = !0
						}
					})),
					Object.defineProperty(n, "lineAlign", w({},
					r, {
						get: function() {
							return f
						},
						set: function(t) {
							var e = b(t);
							if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
							f = e,
							this.hasBeenReset = !0
						}
					})),
					Object.defineProperty(n, "position", w({},
					r, {
						get: function() {
							return v
						},
						set: function(t) {
							if (t < 0 || 100 < t) throw new Error("Position must be between 0 and 100.");
							v = t,
							this.hasBeenReset = !0
						}
					})),
					Object.defineProperty(n, "positionAlign", w({},
					r, {
						get: function() {
							return g
						},
						set: function(t) {
							var e = b(t);
							if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
							g = e,
							this.hasBeenReset = !0
						}
					})),
					Object.defineProperty(n, "size", w({},
					r, {
						get: function() {
							return m
						},
						set: function(t) {
							if (t < 0 || 100 < t) throw new Error("Size must be between 0 and 100.");
							m = t,
							this.hasBeenReset = !0
						}
					})),
					Object.defineProperty(n, "align", w({},
					r, {
						get: function() {
							return A
						},
						set: function(t) {
							var e = b(t);
							if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
							A = e,
							this.hasBeenReset = !0
						}
					})),
					n.displayState = void 0
				}
				return t.prototype.getCueAsHTML = function() {
					return window.WebVTT.convertCueToDOMTree(window, this.text)
				},
				t
			} (),
			De = function() {
				return {
					decode: function(t) {
						if (!t) return "";
						if ("string" != typeof t) throw new Error("Error - expected string data.");
						return decodeURIComponent(encodeURIComponent(t))
					}
				}
			};
			function Ie() {
				this.window = window,
				this.state = "INITIAL",
				this.buffer = "",
				this.decoder = new De,
				this.regionList = []
			}
			function Me() {
				this.values = Object.create(null)
			}
			function Pe(t, e, i, n) {
				var r = n ? t.split(n) : [t];
				for (var a in r) if ("string" == typeof r[a]) {
					var o = r[a].split(i);
					2 === o.length && e(o[0], o[1])
				}
			}
			Me.prototype = {
				set: function(t, e) {
					this.get(t) || "" === e || (this.values[t] = e)
				},
				get: function(t, e, i) {
					return i ? this.has(t) ? this.values[t] : e[i] : this.has(t) ? this.values[t] : e
				},
				has: function(t) {
					return t in this.values
				},
				alt: function(t, e, i) {
					for (var n = 0; n < i.length; ++n) if (e === i[n]) {
						this.set(t, e);
						break
					}
				},
				integer: function(t, e) { / ^-?\d + $ / .test(e) && this.set(t, parseInt(e, 10))
				},
				percent: function(t, e) {
					return !! (e.match(/^([\d]{1,3})(\.[\d]*)?%$/) && 0 <= (e = parseFloat(e)) && e <= 100) && (this.set(t, e), !0)
				}
			};
			var Oe = new Re(0, 0, 0),
			Be = "middle" === Oe.align ? "middle": "center";
			function Fe(e, t, o) {
				var i = e;
				function n() {
					var t = function(t) {
						function e(t, e, i, n) {
							return 3600 * (0 | t) + 60 * (0 | e) + (0 | i) + (0 | n) / 1e3
						}
						var i = t.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
						return i ? i[3] ? e(i[1], i[2], i[3].replace(":", ""), i[4]) : 59 < i[1] ? e(i[1], i[2], 0, i[4]) : e(0, i[1], i[2], i[4]) : null
					} (e);
					if (null === t) throw new Error("Malformed timestamp: " + i);
					return e = e.replace(/^[^\sa-zA-Z-]+/, ""),
					t
				}
				function r() {
					e = e.replace(/^\s+/, "")
				}
				if (r(), t.startTime = n(), r(), "--\x3e" !== e.substr(0, 3)) throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): " + i);
				e = e.substr(3),
				r(),
				t.endTime = n(),
				r(),
				function(t, e) {
					var a = new Me;
					Pe(t,
					function(t, e) {
						switch (t) {
						case "region":
							for (var i = o.length - 1; 0 <= i; i--) if (o[i].id === e) {
								a.set(t, o[i].region);
								break
							}
							break;
						case "vertical":
							a.alt(t, e, ["rl", "lr"]);
							break;
						case "line":
							var n = e.split(","),
							r = n[0];
							a.integer(t, r),
							a.percent(t, r) && a.set("snapToLines", !1),
							a.alt(t, r, ["auto"]),
							2 === n.length && a.alt("lineAlign", n[1], ["start", Be, "end"]);
							break;
						case "position":
							n = e.split(","),
							a.percent(t, n[0]),
							2 === n.length && a.alt("positionAlign", n[1], ["start", Be, "end", "line-left", "line-right", "auto"]);
							break;
						case "size":
							a.percent(t, e);
							break;
						case "align":
							a.alt(t, e, ["start", Be, "end", "left", "right"])
						}
					},
					/:/, /\s/),
					e.region = a.get("region", null),
					e.vertical = a.get("vertical", "");
					var i = a.get("line", "auto");
					"auto" === i && -1 === Oe.line && (i = -1),
					e.line = i,
					e.lineAlign = a.get("lineAlign", "start"),
					e.snapToLines = a.get("snapToLines", !0),
					e.size = a.get("size", 100),
					e.align = a.get("align", Be);
					var n = a.get("position", "auto");
					"auto" === n && 50 === Oe.position && (n = "start" === e.align || "left" === e.align ? 0 : "end" === e.align || "right" === e.align ? 100 : 50),
					e.position = n
				} (e, t)
			}
			function Ne(t) {
				return t.replace(/<br(?: \/)?>/gi, "\n")
			}
			Ie.prototype = {
				parse: function(t) {
					var n = this;
					function e() {
						var t = n.buffer,
						e = 0;
						for (t = Ne(t); e < t.length && "\r" !== t[e] && "\n" !== t[e];)++e;
						var i = t.substr(0, e);
						return "\r" === t[e] && ++e,
						"\n" === t[e] && ++e,
						n.buffer = t.substr(e),
						i
					}
					t && (n.buffer += n.decoder.decode(t, {
						stream: !0
					}));
					try {
						var i;
						if ("INITIAL" === n.state) {
							if (!/\r\n|\n/.test(n.buffer)) return this;
							var r = (i = e()).match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
							if (!r || !r[0]) throw new Error("Malformed WebVTT signature.");
							n.state = "HEADER"
						}
						for (var a = !1; n.buffer;) {
							if (!/\r\n|\n/.test(n.buffer)) return this;
							switch (a ? a = !1 : i = e(), n.state) {
							case "HEADER":
								/:/.test(i) ? Pe(i,
								function(t, e) {},
								/:/) : i || (n.state = "ID");
								continue;
							case "NOTE":
								i || (n.state = "ID");
								continue;
							case "ID":
								if (/^NOTE($|[ \t])/.test(i)) {
									n.state = "NOTE";
									break
								}
								if (!i) continue;
								if (n.cue = new Re(0, 0, ""), n.state = "CUE", -1 === i.indexOf("--\x3e")) {
									n.cue.id = i;
									continue
								}
							case "CUE":
								try {
									Fe(i, n.cue, n.regionList)
								} catch(t) {
									n.cue = null,
									n.state = "BADCUE";
									continue
								}
								n.state = "CUETEXT";
								continue;
							case "CUETEXT":
								var o = -1 !== i.indexOf("--\x3e");
								if (!i || o && (a = !0)) {
									n.oncue && n.oncue(n.cue),
									n.cue = null,
									n.state = "ID";
									continue
								}
								n.cue.text && (n.cue.text += "\n"),
								n.cue.text += i;
								continue;
							case "BADCUE":
								i || (n.state = "ID");
								continue
							}
						}
					} catch(t) {
						"CUETEXT" === n.state && n.cue && n.oncue && n.oncue(n.cue),
						n.cue = null,
						n.state = "INITIAL" === n.state ? "BADWEBVTT": "BADCUE"
					}
					return this
				},
				flush: function() {
					try {
						if (this.buffer += this.decoder.decode(), !this.cue && "HEADER" !== this.state || (this.buffer += "\n\n", this.parse()), "INITIAL" === this.state) throw new Error("Malformed WebVTT signature.")
					} catch(t) {
						throw t
					}
					return this.onflush && this.onflush(),
					this
				}
			};
			var Ue = Ie;
			function qe(t, e, i, n) {
				for (var r, a, o, s, l, c = window.VTTCue || TextTrackCue,
				u = 0; u < n.rows.length; u++) if (o = !0, s = 0, l = "", !(r = n.rows[u]).isEmpty()) {
					for (var d = 0; d < r.chars.length; d++) r.chars[d].uchar.match(/\s/) && o ? s++:(l += r.chars[d].uchar, o = !1); (r.cueStartTime = e) === i && (i += 1e-4),
					a = new c(e, i, Ne(l.trim())),
					16 <= s ? s--:s++,
					navigator.userAgent.match(/Firefox\//) ? a.line = u + 1 : a.line = 7 < u ? u - 2 : u + 1,
					a.align = "left",
					a.position = Math.max(0, Math.min(100, s / 32 * 100)),
					t.addCue(a)
				}
			}
			var je, ze = {
				42 : 225,
				92 : 233,
				94 : 237,
				95 : 243,
				96 : 250,
				123 : 231,
				124 : 247,
				125 : 209,
				126 : 241,
				127 : 9608,
				128 : 174,
				129 : 176,
				130 : 189,
				131 : 191,
				132 : 8482,
				133 : 162,
				134 : 163,
				135 : 9834,
				136 : 224,
				137 : 32,
				138 : 232,
				139 : 226,
				140 : 234,
				141 : 238,
				142 : 244,
				143 : 251,
				144 : 193,
				145 : 201,
				146 : 211,
				147 : 218,
				148 : 220,
				149 : 252,
				150 : 8216,
				151 : 161,
				152 : 42,
				153 : 8217,
				154 : 9473,
				155 : 169,
				156 : 8480,
				157 : 8226,
				158 : 8220,
				159 : 8221,
				160 : 192,
				161 : 194,
				162 : 199,
				163 : 200,
				164 : 202,
				165 : 203,
				166 : 235,
				167 : 206,
				168 : 207,
				169 : 239,
				170 : 212,
				171 : 217,
				172 : 249,
				173 : 219,
				174 : 171,
				175 : 187,
				176 : 195,
				177 : 227,
				178 : 205,
				179 : 204,
				180 : 236,
				181 : 210,
				182 : 242,
				183 : 213,
				184 : 245,
				185 : 123,
				186 : 125,
				187 : 92,
				188 : 94,
				189 : 95,
				190 : 124,
				191 : 8764,
				192 : 196,
				193 : 228,
				194 : 214,
				195 : 246,
				196 : 223,
				197 : 165,
				198 : 164,
				199 : 9475,
				200 : 197,
				201 : 229,
				202 : 216,
				203 : 248,
				204 : 9487,
				205 : 9491,
				206 : 9495,
				207 : 9499
			},
			Ve = function(t) {
				var e = t;
				return ze.hasOwnProperty(t) && (e = ze[t]),
				String.fromCharCode(e)
			},
			He = 100,
			Ge = {
				17 : 1,
				18 : 3,
				21 : 5,
				22 : 7,
				23 : 9,
				16 : 11,
				19 : 12,
				20 : 14
			},
			Ye = {
				17 : 2,
				18 : 4,
				21 : 6,
				22 : 8,
				23 : 10,
				19 : 13,
				20 : 15
			},
			We = {
				25 : 1,
				26 : 3,
				29 : 5,
				30 : 7,
				31 : 9,
				24 : 11,
				27 : 12,
				28 : 14
			},
			Ke = {
				25 : 2,
				26 : 4,
				29 : 6,
				30 : 8,
				31 : 10,
				27 : 13,
				28 : 15
			},
			Qe = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"]; !
			function(t) {
				t[t.ERROR = 0] = "ERROR",
				t[t.TEXT = 1] = "TEXT",
				t[t.WARNING = 2] = "WARNING",
				t[t.INFO = 2] = "INFO",
				t[t.DEBUG = 3] = "DEBUG",
				t[t.DATA = 3] = "DATA"
			} (je = je || {});
			var Xe = {
				verboseFilter: {
					DATA: 3,
					DEBUG: 3,
					INFO: 2,
					WARNING: 2,
					TEXT: 1,
					ERROR: 0
				},
				time: null,
				verboseLevel: 0,
				setTime: function(t) {
					this.time = t
				},
				log: function(t, e) {
					this.verboseFilter[t],
					this.verboseLevel
				}
			},
			Je = function(t) {
				for (var e = [], i = 0; i < t.length; i++) e.push(t[i].toString(16));
				return e
			},
			Ze = function() {
				function t(t, e, i, n, r) {
					this.foreground = void 0,
					this.underline = void 0,
					this.italics = void 0,
					this.background = void 0,
					this.flash = void 0,
					this.foreground = t || "white",
					this.underline = e || !1,
					this.italics = i || !1,
					this.background = n || "black",
					this.flash = r || !1
				}
				var e = t.prototype;
				return e.reset = function() {
					this.foreground = "white",
					this.underline = !1,
					this.italics = !1,
					this.background = "black",
					this.flash = !1
				},
				e.setStyles = function(t) {
					for (var e = ["foreground", "underline", "italics", "background", "flash"], i = 0; i < e.length; i++) {
						var n = e[i];
						t.hasOwnProperty(n) && (this[n] = t[n])
					}
				},
				e.isDefault = function() {
					return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash
				},
				e.equals = function(t) {
					return this.foreground === t.foreground && this.underline === t.underline && this.italics === t.italics && this.background === t.background && this.flash === t.flash
				},
				e.copy = function(t) {
					this.foreground = t.foreground,
					this.underline = t.underline,
					this.italics = t.italics,
					this.background = t.background,
					this.flash = t.flash
				},
				e.toString = function() {
					return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash
				},
				t
			} (),
			$e = function() {
				function t(t, e, i, n, r, a) {
					this.uchar = void 0,
					this.penState = void 0,
					this.uchar = t || " ",
					this.penState = new Ze(e, i, n, r, a)
				}
				var e = t.prototype;
				return e.reset = function() {
					this.uchar = " ",
					this.penState.reset()
				},
				e.setChar = function(t, e) {
					this.uchar = t,
					this.penState.copy(e)
				},
				e.setPenState = function(t) {
					this.penState.copy(t)
				},
				e.equals = function(t) {
					return this.uchar === t.uchar && this.penState.equals(t.penState)
				},
				e.copy = function(t) {
					this.uchar = t.uchar,
					this.penState.copy(t.penState)
				},
				e.isEmpty = function() {
					return " " === this.uchar && this.penState.isDefault()
				},
				t
			} (),
			ti = function() {
				function t() {
					this.chars = void 0,
					this.pos = void 0,
					this.currPenState = void 0,
					this.cueStartTime = void 0,
					this.chars = [];
					for (var t = 0; t < He; t++) this.chars.push(new $e);
					this.pos = 0,
					this.currPenState = new Ze
				}
				var e = t.prototype;
				return e.equals = function(t) {
					for (var e = !0,
					i = 0; i < He; i++) if (!this.chars[i].equals(t.chars[i])) {
						e = !1;
						break
					}
					return e
				},
				e.copy = function(t) {
					for (var e = 0; e < He; e++) this.chars[e].copy(t.chars[e])
				},
				e.isEmpty = function() {
					for (var t = !0,
					e = 0; e < He; e++) if (!this.chars[e].isEmpty()) {
						t = !1;
						break
					}
					return t
				},
				e.setCursor = function(t) {
					this.pos !== t && (this.pos = t),
					this.pos < 0 ? (Xe.log("ERROR", "Negative cursor position " + this.pos), this.pos = 0) : this.pos > He && (Xe.log("ERROR", "Too large cursor position " + this.pos), this.pos = He)
				},
				e.moveCursor = function(t) {
					var e = this.pos + t;
					if (1 < t) for (var i = this.pos + 1; i < e + 1; i++) this.chars[i].setPenState(this.currPenState);
					this.setCursor(e)
				},
				e.backSpace = function() {
					this.moveCursor( - 1),
					this.chars[this.pos].setChar(" ", this.currPenState)
				},
				e.insertChar = function(t) {
					144 <= t && this.backSpace();
					var e = Ve(t);
					this.pos >= He ? Xe.log("ERROR", "Cannot insert " + t.toString(16) + " (" + e + ") at position " + this.pos + ". Skipping it!") : (this.chars[this.pos].setChar(e, this.currPenState), this.moveCursor(1))
				},
				e.clearFromPos = function(t) {
					var e;
					for (e = t; e < He; e++) this.chars[e].reset()
				},
				e.clear = function() {
					this.clearFromPos(0),
					this.pos = 0,
					this.currPenState.reset()
				},
				e.clearToEndOfRow = function() {
					this.clearFromPos(this.pos)
				},
				e.getTextString = function() {
					for (var t = [], e = !0, i = 0; i < He; i++) {
						var n = this.chars[i].uchar;
						" " !== n && (e = !1),
						t.push(n)
					}
					return e ? "": t.join("")
				},
				e.setPenStyles = function(t) {
					this.currPenState.setStyles(t),
					this.chars[this.pos].setPenState(this.currPenState)
				},
				t
			} (),
			ei = function() {
				function t() {
					this.rows = void 0,
					this.currRow = void 0,
					this.nrRollUpRows = void 0,
					this.lastOutputScreen = void 0,
					this.rows = [];
					for (var t = 0; t < 15; t++) this.rows.push(new ti);
					this.currRow = 14,
					this.nrRollUpRows = null,
					this.reset()
				}
				var e = t.prototype;
				return e.reset = function() {
					for (var t = 0; t < 15; t++) this.rows[t].clear();
					this.currRow = 14
				},
				e.equals = function(t) {
					for (var e = !0,
					i = 0; i < 15; i++) if (!this.rows[i].equals(t.rows[i])) {
						e = !1;
						break
					}
					return e
				},
				e.copy = function(t) {
					for (var e = 0; e < 15; e++) this.rows[e].copy(t.rows[e])
				},
				e.isEmpty = function() {
					for (var t = !0,
					e = 0; e < 15; e++) if (!this.rows[e].isEmpty()) {
						t = !1;
						break
					}
					return t
				},
				e.backSpace = function() {
					this.rows[this.currRow].backSpace()
				},
				e.clearToEndOfRow = function() {
					this.rows[this.currRow].clearToEndOfRow()
				},
				e.insertChar = function(t) {
					this.rows[this.currRow].insertChar(t)
				},
				e.setPen = function(t) {
					this.rows[this.currRow].setPenStyles(t)
				},
				e.moveCursor = function(t) {
					this.rows[this.currRow].moveCursor(t)
				},
				e.setCursor = function(t) {
					Xe.log("INFO", "setCursor: " + t),
					this.rows[this.currRow].setCursor(t)
				},
				e.setPAC = function(t) {
					Xe.log("INFO", "pacData = " + JSON.stringify(t));
					var e = t.row - 1;
					if (this.nrRollUpRows && e < this.nrRollUpRows - 1 && (e = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== e) {
						for (var i = 0; i < 15; i++) this.rows[i].clear();
						var n = this.currRow + 1 - this.nrRollUpRows,
						r = this.lastOutputScreen;
						if (r) {
							var a = r.rows[n].cueStartTime;
							if (a && Xe.time && a < Xe.time) for (var o = 0; o < this.nrRollUpRows; o++) this.rows[e - this.nrRollUpRows + o + 1].copy(r.rows[n + o])
						}
					}
					this.currRow = e;
					var s = this.rows[this.currRow];
					if (null !== t.indent) {
						var l = t.indent,
						c = Math.max(l - 1, 0);
						s.setCursor(t.indent),
						t.color = s.chars[c].penState.foreground
					}
					var u = {
						foreground: t.color,
						underline: t.underline,
						italics: t.italics,
						background: "black",
						flash: !1
					};
					this.setPen(u)
				},
				e.setBkgData = function(t) {
					Xe.log("INFO", "bkgData = " + JSON.stringify(t)),
					this.backSpace(),
					this.setPen(t),
					this.insertChar(32)
				},
				e.setRollUpRows = function(t) {
					this.nrRollUpRows = t
				},
				e.rollUp = function() {
					if (null !== this.nrRollUpRows) {
						Xe.log("TEXT", this.getDisplayText());
						var t = this.currRow + 1 - this.nrRollUpRows,
						e = this.rows.splice(t, 1)[0];
						e.clear(),
						this.rows.splice(this.currRow, 0, e),
						Xe.log("INFO", "Rolling up")
					} else Xe.log("DEBUG", "roll_up but nrRollUpRows not set yet")
				},
				e.getDisplayText = function(t) {
					t = t || !1;
					for (var e = [], i = "", n = -1, r = 0; r < 15; r++) {
						var a = this.rows[r].getTextString();
						a && (n = r + 1, t ? e.push("Row " + n + ": '" + a + "'") : e.push(a.trim()))
					}
					return 0 < e.length && (i = t ? "[" + e.join(" | ") + "]": e.join("\n")),
					i
				},
				e.getTextAndFormat = function() {
					return this.rows
				},
				t
			} (),
			ii = function() {
				function t(t, e) {
					this.chNr = void 0,
					this.outputFilter = void 0,
					this.mode = void 0,
					this.verbose = void 0,
					this.displayedMemory = void 0,
					this.nonDisplayedMemory = void 0,
					this.lastOutputScreen = void 0,
					this.currRollUpRow = void 0,
					this.writeScreen = void 0,
					this.cueStartTime = void 0,
					this.lastCueEndTime = void 0,
					this.chNr = t,
					this.outputFilter = e,
					this.mode = null,
					this.verbose = 0,
					this.displayedMemory = new ei,
					this.nonDisplayedMemory = new ei,
					this.lastOutputScreen = new ei,
					this.currRollUpRow = this.displayedMemory.rows[14],
					this.writeScreen = this.displayedMemory,
					this.mode = null,
					this.cueStartTime = null
				}
				var e = t.prototype;
				return e.reset = function() {
					this.mode = null,
					this.displayedMemory.reset(),
					this.nonDisplayedMemory.reset(),
					this.lastOutputScreen.reset(),
					this.currRollUpRow = this.displayedMemory.rows[14],
					this.writeScreen = this.displayedMemory,
					this.mode = null,
					this.cueStartTime = null
				},
				e.getHandler = function() {
					return this.outputFilter
				},
				e.setHandler = function(t) {
					this.outputFilter = t
				},
				e.setPAC = function(t) {
					this.writeScreen.setPAC(t)
				},
				e.setBkgData = function(t) {
					this.writeScreen.setBkgData(t)
				},
				e.setMode = function(t) {
					t !== this.mode && (this.mode = t, Xe.log("INFO", "MODE=" + t), "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory: (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = t)
				},
				e.insertChars = function(t) {
					for (var e = 0; e < t.length; e++) this.writeScreen.insertChar(t[e]);
					var i = this.writeScreen === this.displayedMemory ? "DISP": "NON_DISP";
					Xe.log("INFO", i + ": " + this.writeScreen.getDisplayText(!0)),
					"MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (Xe.log("TEXT", "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate())
				},
				e.ccRCL = function() {
					Xe.log("INFO", "RCL - Resume Caption Loading"),
					this.setMode("MODE_POP-ON")
				},
				e.ccBS = function() {
					Xe.log("INFO", "BS - BackSpace"),
					"MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate())
				},
				e.ccAOF = function() {},
				e.ccAON = function() {},
				e.ccDER = function() {
					Xe.log("INFO", "DER- Delete to End of Row"),
					this.writeScreen.clearToEndOfRow(),
					this.outputDataUpdate()
				},
				e.ccRU = function(t) {
					Xe.log("INFO", "RU(" + t + ") - Roll Up"),
					this.writeScreen = this.displayedMemory,
					this.setMode("MODE_ROLL-UP"),
					this.writeScreen.setRollUpRows(t)
				},
				e.ccFON = function() {
					Xe.log("INFO", "FON - Flash On"),
					this.writeScreen.setPen({
						flash: !0
					})
				},
				e.ccRDC = function() {
					Xe.log("INFO", "RDC - Resume Direct Captioning"),
					this.setMode("MODE_PAINT-ON")
				},
				e.ccTR = function() {
					Xe.log("INFO", "TR"),
					this.setMode("MODE_TEXT")
				},
				e.ccRTD = function() {
					Xe.log("INFO", "RTD"),
					this.setMode("MODE_TEXT")
				},
				e.ccEDM = function() {
					Xe.log("INFO", "EDM - Erase Displayed Memory"),
					this.displayedMemory.reset(),
					this.outputDataUpdate(!0)
				},
				e.ccCR = function() {
					Xe.log("INFO", "CR - Carriage Return"),
					this.writeScreen.rollUp(),
					this.outputDataUpdate(!0)
				},
				e.ccENM = function() {
					Xe.log("INFO", "ENM - Erase Non-displayed Memory"),
					this.nonDisplayedMemory.reset()
				},
				e.ccEOC = function() {
					if (Xe.log("INFO", "EOC - End Of Caption"), "MODE_POP-ON" === this.mode) {
						var t = this.displayedMemory;
						this.displayedMemory = this.nonDisplayedMemory,
						this.nonDisplayedMemory = t,
						this.writeScreen = this.nonDisplayedMemory,
						Xe.log("TEXT", "DISP: " + this.displayedMemory.getDisplayText())
					}
					this.outputDataUpdate(!0)
				},
				e.ccTO = function(t) {
					Xe.log("INFO", "TO(" + t + ") - Tab Offset"),
					this.writeScreen.moveCursor(t)
				},
				e.ccMIDROW = function(t) {
					var e = {
						flash: !1
					};
					if (e.underline = t % 2 == 1, e.italics = 46 <= t, e.italics) e.foreground = "white";
					else {
						var i = Math.floor(t / 2) - 16;
						e.foreground = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"][i]
					}
					Xe.log("INFO", "MIDROW: " + JSON.stringify(e)),
					this.writeScreen.setPen(e)
				},
				e.outputDataUpdate = function(t) {
					void 0 === t && (t = !1);
					var e = Xe.time;
					null !== e && this.outputFilter && (null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, e, this.lastOutputScreen), t && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(), this.cueStartTime = this.displayedMemory.isEmpty() ? null: e) : this.cueStartTime = e, this.lastOutputScreen.copy(this.displayedMemory))
				},
				e.cueSplitAtTime = function(t) {
					this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, t, this.displayedMemory), this.cueStartTime = t))
				},
				t
			} (),
			ni = function() {
				function t(t, e, i) {
					this.field = void 0,
					this.outputs = void 0,
					this.channels = void 0,
					this.currChNr = void 0,
					this.lastCmdA = void 0,
					this.lastCmdB = void 0,
					this.lastTime = void 0,
					this.dataCounters = void 0,
					this.field = t || 1,
					this.outputs = [e, i],
					this.channels = [new ii(1, e), new ii(2, i)],
					this.currChNr = -1,
					this.lastCmdA = null,
					this.lastCmdB = null,
					this.lastTime = null,
					this.dataCounters = {
						padding: 0,
						char: 0,
						cmd: 0,
						other: 0
					}
				}
				var e = t.prototype;
				return e.getHandler = function(t) {
					return this.channels[t].getHandler()
				},
				e.setHandler = function(t, e) {
					this.channels[t].setHandler(e)
				},
				e.addData = function(t, e) {
					var i, n, r, a = !1;
					this.lastTime = t,
					Xe.setTime(t);
					for (var o = 0; o < e.length; o += 2) n = 127 & e[o],
					r = 127 & e[o + 1],
					0 != n || 0 != r ? (Xe.log("DATA", "[" + Je([e[o], e[o + 1]]) + "] -> (" + Je([n, r]) + ")"), (i = this.parseCmd(n, r)) || (i = this.parseMidrow(n, r)), (i = (i = i || this.parsePAC(n, r)) || this.parseBackgroundAttributes(n, r)) || (a = this.parseChars(n, r)) && (this.currChNr && 0 <= this.currChNr ? this.channels[this.currChNr - 1].insertChars(a) : Xe.log("WARNING", "No channel found yet. TEXT-MODE?")), i ? this.dataCounters.cmd += 2 : a ? this.dataCounters.char += 2 : (this.dataCounters.other += 2, Xe.log("WARNING", "Couldn't parse cleaned data " + Je([n, r]) + " orig: " + Je([e[o], e[o + 1]])))) : this.dataCounters.padding += 2
				},
				e.parseCmd = function(t, e) {
					var i = null;
					if (! ((20 === t || 28 === t) && 32 <= e && e <= 47 || (23 === t || 31 === t) && 33 <= e && e <= 35)) return ! 1;
					if (t === this.lastCmdA && e === this.lastCmdB) return this.lastCmdA = null,
					this.lastCmdB = null,
					Xe.log("DEBUG", "Repeated command (" + Je([t, e]) + ") is dropped"),
					!0;
					i = 20 === t || 23 === t ? 1 : 2;
					var n = this.channels[i - 1];
					return 20 === t || 28 === t ? 32 === e ? n.ccRCL() : 33 === e ? n.ccBS() : 34 === e ? n.ccAOF() : 35 === e ? n.ccAON() : 36 === e ? n.ccDER() : 37 === e ? n.ccRU(2) : 38 === e ? n.ccRU(3) : 39 === e ? n.ccRU(4) : 40 === e ? n.ccFON() : 41 === e ? n.ccRDC() : 42 === e ? n.ccTR() : 43 === e ? n.ccRTD() : 44 === e ? n.ccEDM() : 45 === e ? n.ccCR() : 46 === e ? n.ccENM() : 47 === e && n.ccEOC() : n.ccTO(e - 32),
					this.lastCmdA = t,
					this.lastCmdB = e,
					this.currChNr = i,
					!0
				},
				e.parseMidrow = function(t, e) {
					var i = null;
					return (17 === t || 25 === t) && 32 <= e && e <= 47 && ((i = 17 === t ? 1 : 2) !== this.currChNr ? (Xe.log("ERROR", "Mismatch channel in midrow parsing"), !1) : (this.channels[i - 1].ccMIDROW(e), Xe.log("DEBUG", "MIDROW (" + Je([t, e]) + ")"), !0))
				},
				e.parsePAC = function(t, e) {
					var i, n = null;
					if (! ((17 <= t && t <= 23 || 25 <= t && t <= 31) && 64 <= e && e <= 127 || (16 === t || 24 === t) && 64 <= e && e <= 95)) return ! 1;
					if (t === this.lastCmdA && e === this.lastCmdB) return this.lastCmdA = null,
					!(this.lastCmdB = null);
					i = t <= 23 ? 1 : 2,
					n = 64 <= e && e <= 95 ? 1 == i ? Ge[t] : We[t] : 1 == i ? Ye[t] : Ke[t];
					var r = this.interpretPAC(n, e);
					return this.channels[i - 1].setPAC(r),
					this.lastCmdA = t,
					this.lastCmdB = e,
					this.currChNr = i,
					!0
				},
				e.interpretPAC = function(t, e) {
					var i = e,
					n = {
						color: null,
						italics: !1,
						indent: null,
						underline: !1,
						row: t
					};
					return i = 95 < e ? e - 96 : e - 64,
					n.underline = 1 == (1 & i),
					i <= 13 ? n.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(i / 2)] : i <= 15 ? (n.italics = !0, n.color = "white") : n.indent = 4 * Math.floor((i - 16) / 2),
					n
				},
				e.parseChars = function(t, e) {
					var i = null,
					n = null,
					r = null;
					if (17 <= (r = 25 <= t ? (i = 2, t - 8) : (i = 1, t)) && r <= 19) {
						var a = e;
						a = 17 === r ? e + 80 : 18 === r ? e + 112 : e + 144,
						Xe.log("INFO", "Special char '" + Ve(a) + "' in channel " + i),
						n = [a]
					} else 32 <= t && t <= 127 && (n = 0 === e ? [t] : [t, e]);
					if (n) {
						var o = Je(n);
						Xe.log("DEBUG", "Char codes =  " + o.join(",")),
						this.lastCmdA = null,
						this.lastCmdB = null
					}
					return n
				},
				e.parseBackgroundAttributes = function(t, e) {
					var i, n, r;
					return ((16 === t || 24 === t) && 32 <= e && e <= 47 || (23 === t || 31 === t) && 45 <= e && e <= 47) && (i = {},
					16 === t || 24 === t ? (n = Math.floor((e - 32) / 2), i.background = Qe[n], e % 2 == 1 && (i.background = i.background + "_semi")) : 45 === e ? i.background = "transparent": (i.foreground = "black", 47 === e && (i.underline = !0)), r = t < 24 ? 1 : 2, this.channels[r - 1].setBkgData(i), this.lastCmdA = null, !(this.lastCmdB = null))
				},
				e.reset = function() {
					for (var t = 0; t < this.channels.length; t++) this.channels[t] && this.channels[t].reset();
					this.lastCmdA = null,
					this.lastCmdB = null
				},
				e.cueSplitAtTime = function(t) {
					for (var e = 0; e < this.channels.length; e++) this.channels[e] && this.channels[e].cueSplitAtTime(t)
				},
				t
			} (),
			ri = function() {
				function t(t, e) {
					this.timelineController = void 0,
					this.trackName = void 0,
					this.startTime = void 0,
					this.endTime = void 0,
					this.screen = void 0,
					this.timelineController = t,
					this.trackName = e,
					this.startTime = null,
					this.endTime = null,
					this.screen = null
				}
				var e = t.prototype;
				return e.dispatchCue = function() {
					null !== this.startTime && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen), this.startTime = null)
				},
				e.newCue = function(t, e, i) { (null === this.startTime || this.startTime > t) && (this.startTime = t),
					this.endTime = e,
					this.screen = i,
					this.timelineController.createCaptionsTrack(this.trackName)
				},
				t
			} (),
			ai = function(t, e, i) {
				return t.substr(i || 0, e.length) === e
			},
			oi = function(t) {
				for (var e = 5381,
				i = t.length; i;) e = 33 * e ^ t.charCodeAt(--i);
				return (e >>> 0).toString()
			},
			si = {
				parse: function(t, e, n, r, i, a) {
					var o, s = Object(oe.b)(new Uint8Array(t)).trim().replace(/\r\n|\n\r|\n|\r/g, "\n").split("\n"),
					l = "00:00.000",
					c = 0,
					u = 0,
					d = 0,
					h = [],
					p = !0,
					f = !1,
					v = new Ue;
					v.oncue = function(t) {
						var e = n[r],
						i = n.ccOffset;
						e && e.new && (void 0 !== u ? i = n.ccOffset = e.start: function(t, e, i) {
							var n = t[e],
							r = t[n.prevCC];
							if (!r || !r.new && n.new) return t.ccOffset = t.presentationOffset = n.start,
							n.new = !1;
							for (; r && r.new;) t.ccOffset += n.start - r.start,
							n.new = !1,
							r = t[(n = r).prevCC];
							t.presentationOffset = i
						} (n, r, d)),
						d && (i = d - n.presentationOffset),
						f && (t.startTime += i - u, t.endTime += i - u),
						t.id = oi(t.startTime.toString()) + oi(t.endTime.toString()) + oi(t.text),
						t.text = decodeURIComponent(encodeURIComponent(t.text)),
						0 < t.endTime && h.push(t)
					},
					v.onparsingerror = function(t) {
						o = t
					},
					v.onflush = function() {
						o && a ? a(o) : i(h)
					},
					s.forEach(function(t) {
						if (p) {
							if (ai(t, "X-TIMESTAMP-MAP=")) {
								f = !(p = !1),
								t.substr(16).split(",").forEach(function(t) {
									ai(t, "LOCAL:") ? l = t.substr(6) : ai(t, "MPEGTS:") && (c = parseInt(t.substr(7)))
								});
								try {
									e + (9e4 * n[r].start || 0) < 0 && (e += 8589934592),
									c -= e,
									u = function(t) {
										var e = parseInt(t.substr( - 3)),
										i = parseInt(t.substr( - 6, 2)),
										n = parseInt(t.substr( - 9, 2)),
										r = 9 < t.length ? parseInt(t.substr(0, t.indexOf(":"))) : 0;
										if (! (Object(O.a)(e) && Object(O.a)(i) && Object(O.a)(n) && Object(O.a)(r))) throw Error("Malformed X-TIMESTAMP-MAP: Local:" + t);
										return e += 1e3 * i,
										e += 6e4 * n,
										e += 36e5 * r
									} (l) / 1e3,
									d = c / 9e4
								} catch(t) {
									f = !1,
									o = t
								}
								return
							}
							"" === t && (p = !1)
						}
						v.parse(t + "\n")
					}),
					v.flush()
				}
			};
			function li(t) {
				if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return t
			}
			var ci = function(r) {
				var t, e;
				function i(t) {
					var e;
					if ((e = r.call(this, t, M.a.MEDIA_ATTACHING, M.a.MEDIA_DETACHING, M.a.FRAG_PARSING_USERDATA, M.a.FRAG_DECRYPTED, M.a.MANIFEST_LOADING, M.a.MANIFEST_LOADED, M.a.FRAG_LOADED, M.a.LEVEL_SWITCHING, M.a.INIT_PTS_FOUND) || this).media = null, e.config = void 0, e.enabled = !0, e.Cues = void 0, e.textTracks = [], e.tracks = [], e.initPTS = [], e.unparsedVttFrags = [], e.cueRanges = [], e.captionsTracks = {},
					e.captionsProperties = void 0, e.cea608Parser = void 0, e.lastSn = -1, e.prevCC = -1, e.vttCCs = null, e.hls = t, e.config = t.config, e.Cues = t.config.cueHandler, e.captionsProperties = {
						textTrack1: {
							label: e.config.captionsTextTrack1Label,
							languageCode: e.config.captionsTextTrack1LanguageCode
						},
						textTrack2: {
							label: e.config.captionsTextTrack2Label,
							languageCode: e.config.captionsTextTrack2LanguageCode
						}
					},
					e.config.enableCEA708Captions) {
						var i = new ri(li(e), "textTrack1"),
						n = new ri(li(e), "textTrack2");
						e.cea608Parser = new ni(0, i, n)
					}
					return e
				}
				e = r,
				(t = i).prototype = Object.create(e.prototype),
				(t.prototype.constructor = t).__proto__ = e;
				var n = i.prototype;
				return n.addCues = function(t, e, i, n) {
					for (var r, a, o, s, l = this.cueRanges,
					c = !1,
					u = l.length; u--;) {
						var d = l[u],
						h = (r = d[0], a = d[1], o = e, s = i, Math.min(a, s) - Math.max(r, o));
						if (0 <= h && (d[0] = Math.min(d[0], e), d[1] = Math.max(d[1], i), c = !0, .5 < h / (i - e))) return
					}
					c || l.push([e, i]),
					this.Cues.newCue(this.captionsTracks[t], e, i, n)
				},
				n.onInitPtsFound = function(t) {
					var e = this,
					i = t.frag,
					n = t.id,
					r = t.initPTS,
					a = this.unparsedVttFrags;
					"main" === n && (this.initPTS[i.cc] = r),
					a.length && (this.unparsedVttFrags = [], a.forEach(function(t) {
						e.onFragLoaded(t)
					}))
				},
				n.getExistingTrack = function(t) {
					var e = this.media;
					if (e) for (var i = 0; i < e.textTracks.length; i++) {
						var n = e.textTracks[i];
						if (n[t]) return n
					}
					return null
				},
				n.createCaptionsTrack = function(t) {
					var e = this.captionsProperties,
					i = this.captionsTracks,
					n = this.media,
					r = e[t],
					a = r.label,
					o = r.languageCode;
					if (!i[t]) {
						var s = this.getExistingTrack(t);
						if (s) i[t] = s,
						le(i[t]),
						se(i[t], n);
						else {
							var l = this.createTextTrack("captions", a, o);
							l && (l[t] = !0, i[t] = l)
						}
					}
				},
				n.createTextTrack = function(t, e, i) {
					var n = this.media;
					if (n) return n.addTextTrack(t, e, i)
				},
				n.destroy = function() {
					r.prototype.destroy.call(this)
				},
				n.onMediaAttaching = function(t) {
					this.media = t.media,
					this._cleanTracks()
				},
				n.onMediaDetaching = function() {
					var e = this.captionsTracks;
					Object.keys(e).forEach(function(t) {
						le(e[t]),
						delete e[t]
					})
				},
				n.onManifestLoading = function() {
					this.lastSn = -1,
					this.prevCC = -1,
					this.vttCCs = {
						ccOffset: 0,
						presentationOffset: 0,
						0 : {
							start: 0,
							prevCC: -1,
							new: !1
						}
					},
					this._cleanTracks()
				},
				n._cleanTracks = function() {
					var t = this.media;
					if (t) {
						var e = t.textTracks;
						if (e) for (var i = 0; i < e.length; i++) le(e[i])
					}
				},
				n.onManifestLoaded = function(t) {
					var s = this;
					if (this.textTracks = [], this.unparsedVttFrags = this.unparsedVttFrags || [], this.initPTS = [], this.cueRanges = [], this.config.enableWebVTT) {
						this.tracks = t.subtitles || [];
						var l = this.media ? this.media.textTracks: [];
						this.tracks.forEach(function(t, e) {
							var i, n, r;
							if (e < l.length) {
								for (var a = null,
								o = 0; o < l.length; o++) if (n = l[o], r = t, n && n.label === r.name && !n.textTrack1 && !n.textTrack2) {
									a = l[o];
									break
								}
								a && (i = a)
							}
							i = i || s.createTextTrack("subtitles", t.name, t.lang),
							t.
						default ? i.mode = s.hls.subtitleDisplay ? "showing": "hidden": i.mode = "disabled",
							s.textTracks.push(i)
						})
					}
				},
				n.onLevelSwitching = function() {
					this.enabled = "NONE" !== this.hls.currentLevel.closedCaptions
				},
				n.onFragLoaded = function(t) {
					var e = t.frag,
					i = t.payload,
					n = this.cea608Parser,
					r = this.initPTS,
					a = this.lastSn,
					o = this.unparsedVttFrags;
					if ("main" === e.type) {
						var s = e.sn;
						e.sn !== a + 1 && n && n.reset(),
						this.lastSn = s
					} else if ("subtitle" === e.type) if (i.byteLength) {
						if (!Object(O.a)(r[e.cc])) return o.push(t),
						void(r.length && this.hls.trigger(M.a.SUBTITLE_FRAG_PROCESSED, {
							success: !1,
							frag: e
						}));
						var l = e.decryptdata;
						null != l && null != l.key && "AES-128" === l.method || this._parseVTTs(e, i)
					} else this.hls.trigger(M.a.SUBTITLE_FRAG_PROCESSED, {
						success: !1,
						frag: e
					})
				},
				n._parseVTTs = function(e, t) {
					var i = this.hls,
					n = this.prevCC,
					r = this.textTracks,
					a = this.vttCCs;
					a[e.cc] || (a[e.cc] = {
						start: e.start,
						prevCC: n,
						new: !0
					},
					this.prevCC = e.cc),
					si.parse(t, this.initPTS[e.cc], a, e.cc,
					function(t) {
						var n = r[e.level];
						"disabled" !== n.mode ? (t.forEach(function(e) {
							if (!n.cues.getCueById(e.id)) try {
								n.addCue(e)
							} catch(t) {
								var i = new window.TextTrackCue(e.startTime, e.endTime, e.text);
								i.id = e.id,
								n.addCue(i)
							}
						}), i.trigger(M.a.SUBTITLE_FRAG_PROCESSED, {
							success: !0,
							frag: e
						})) : i.trigger(M.a.SUBTITLE_FRAG_PROCESSED, {
							success: !1,
							frag: e
						})
					},
					function(t) {
						B.b.log("Failed to parse VTT cue: " + t),
						i.trigger(M.a.SUBTITLE_FRAG_PROCESSED, {
							success: !1,
							frag: e
						})
					})
				},
				n.onFragDecrypted = function(t) {
					var e = t.frag,
					i = t.payload;
					if ("subtitle" === e.type) {
						if (!Object(O.a)(this.initPTS[e.cc])) return void this.unparsedVttFrags.push(t);
						this._parseVTTs(e, i)
					}
				},
				n.onFragParsingUserdata = function(t) {
					if (this.enabled && this.config.enableCEA708Captions) for (var e = 0; e < t.samples.length; e++) {
						var i = t.samples[e].bytes;
						if (i) {
							var n = this.extractCea608Data(i);
							this.cea608Parser.addData(t.samples[e].pts, n)
						}
					}
				},
				n.extractCea608Data = function(t) {
					for (var e, i, n, r = 31 & t[0], a = 2, o = [], s = 0; s < r; s++) e = t[a++],
					i = 127 & t[a++],
					n = 127 & t[a++],
					0 == i && 0 == n || 0 != (4 & e) && 0 == (3 & e) && (o.push(i), o.push(n));
					return o
				},
				i
			} (c);
			function ui(t, e) {
				for (var i = 0; i < e.length; i++) {
					var n = e[i];
					n.enumerable = n.enumerable || !1,
					n.configurable = !0,
					"value" in n && (n.writable = !0),
					Object.defineProperty(t, n.key, n)
				}
			}
			function di(t) {
				for (var e = [], i = 0; i < t.length; i++) {
					var n = t[i];
					"subtitles" === n.kind && n.label && e.push(t[i])
				}
				return e
			}
			var hi, pi = function(i) {
				var t, e;
				function n(t) {
					var e;
					return (e = i.call(this, t, M.a.MEDIA_ATTACHED, M.a.MEDIA_DETACHING, M.a.MANIFEST_LOADED, M.a.SUBTITLE_TRACK_LOADED) || this).tracks = [],
					e.trackId = -1,
					e.media = null,
					e.stopped = !0,
					e.subtitleDisplay = !0,
					e.queuedDefaultTrack = null,
					e
				}
				e = i,
				(t = n).prototype = Object.create(e.prototype),
				(t.prototype.constructor = t).__proto__ = e;
				var r = n.prototype;
				return r.destroy = function() {
					c.prototype.destroy.call(this)
				},
				r.onMediaAttached = function(t) {
					var e = this;
					this.media = t.media,
					this.media && (Object(O.a)(this.queuedDefaultTrack) && (this.subtitleTrack = this.queuedDefaultTrack, this.queuedDefaultTrack = null), this.trackChangeListener = this._onTextTracksChanged.bind(this), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.subtitlePollingInterval = setInterval(function() {
						e.trackChangeListener()
					},
					500) : this.media.textTracks.addEventListener("change", this.trackChangeListener))
				},
				r.onMediaDetaching = function() {
					this.media && (this.useTextTrackPolling ? clearInterval(this.subtitlePollingInterval) : this.media.textTracks.removeEventListener("change", this.trackChangeListener), this.media = null)
				},
				r.onManifestLoaded = function(t) {
					var e = this,
					i = t.subtitles || [];
					this.tracks = i,
					this.hls.trigger(M.a.SUBTITLE_TRACKS_UPDATED, {
						subtitleTracks: i
					}),
					i.forEach(function(t) {
						t.
					default && (e.media ? e.subtitleTrack = t.id: e.queuedDefaultTrack = t.id)
					})
				},
				r.onSubtitleTrackLoaded = function(t) {
					var e = this,
					i = t.id,
					n = t.details,
					r = this.trackId,
					a = this.tracks,
					o = a[r];
					if (i >= a.length || i !== r || !o || this.stopped) this._clearReloadTimer();
					else if (B.b.log("subtitle track " + i + " loaded"), n.live) {
						var s = Vt(o.details, n, t.stats.trequest);
						B.b.log("Reloading live subtitle playlist in " + s + "ms"),
						this.timer = setTimeout(function() {
							e._loadCurrentTrack()
						},
						s)
					} else this._clearReloadTimer()
				},
				r.startLoad = function() {
					this.stopped = !1,
					this._loadCurrentTrack()
				},
				r.stopLoad = function() {
					this.stopped = !0,
					this._clearReloadTimer()
				},
				r._clearReloadTimer = function() {
					this.timer && (clearTimeout(this.timer), this.timer = null)
				},
				r._loadCurrentTrack = function() {
					var t = this.trackId,
					e = this.tracks,
					i = this.hls,
					n = e[t];
					t < 0 || !n || n.details && !n.details.live || (B.b.log("Loading subtitle track " + t), i.trigger(M.a.SUBTITLE_TRACK_LOADING, {
						url: n.url,
						id: t
					}))
				},
				r._toggleTrackModes = function(t) {
					var e = this.media,
					i = this.subtitleDisplay,
					n = this.trackId;
					if (e) {
						var r = di(e.textTracks);
						if ( - 1 === t)[].slice.call(r).forEach(function(t) {
							t.mode = "disabled"
						});
						else {
							var a = r[n];
							a && (a.mode = "disabled")
						}
						var o = r[t];
						o && (o.mode = i ? "showing": "hidden")
					}
				},
				r._setSubtitleTrackInternal = function(t) {
					var e = this.hls,
					i = this.tracks; ! Object(O.a)(t) || t < -1 || t >= i.length || (this.trackId = t, B.b.log("Switching to subtitle track " + t), e.trigger(M.a.SUBTITLE_TRACK_SWITCH, {
						id: t
					}), this._loadCurrentTrack())
				},
				r._onTextTracksChanged = function() {
					if (this.media) {
						for (var t = -1,
						e = di(this.media.textTracks), i = 0; i < e.length; i++) if ("hidden" === e[i].mode) t = i;
						else if ("showing" === e[i].mode) {
							t = i;
							break
						}
						this.subtitleTrack = t
					}
				},
				ui(n.prototype, [{
					key: "subtitleTracks",
					get: function() {
						return this.tracks
					}
				},
				{
					key: "subtitleTrack",
					get: function() {
						return this.trackId
					},
					set: function(t) {
						this.trackId !== t && (this._toggleTrackModes(t), this._setSubtitleTrackInternal(t))
					}
				}]),
				n
			} (c),
			fi = i(7),
			vi = window.performance,
			gi = function(n) {
				var t, e;
				function i(t, e) {
					var i;
					return (i = n.call(this, t, M.a.MEDIA_ATTACHED, M.a.MEDIA_DETACHING, M.a.ERROR, M.a.KEY_LOADED, M.a.FRAG_LOADED, M.a.SUBTITLE_TRACKS_UPDATED, M.a.SUBTITLE_TRACK_SWITCH, M.a.SUBTITLE_TRACK_LOADED, M.a.SUBTITLE_FRAG_PROCESSED, M.a.LEVEL_UPDATED) || this).fragmentTracker = e,
					i.config = t.config,
					i.state = Zt.STOPPED,
					i.tracks = [],
					i.tracksBuffered = [],
					i.currentTrackId = -1,
					i.decrypter = new fi.a(t, t.config),
					i.lastAVStart = 0,
					i._onMediaSeeking = i.onMediaSeeking.bind(function(t) {
						if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return t
					} (i)),
					i
				}
				e = n,
				(t = i).prototype = Object.create(e.prototype),
				(t.prototype.constructor = t).__proto__ = e;
				var r = i.prototype;
				return r.onSubtitleFragProcessed = function(t) {
					var e = t.frag,
					i = t.success;
					if (this.fragPrevious = e, this.state = Zt.IDLE, i) {
						var n = this.tracksBuffered[this.currentTrackId];
						if (n) {
							for (var r, a = e.start,
							o = 0; o < n.length; o++) if (a >= n[o].start && a <= n[o].end) {
								r = n[o];
								break
							}
							var s = e.start + e.duration;
							r ? r.end = s: (r = {
								start: a,
								end: s
							},
							n.push(r))
						}
					}
				},
				r.onMediaAttached = function(t) {
					var e = t.media; (this.media = e).addEventListener("seeking", this._onMediaSeeking),
					this.state = Zt.IDLE
				},
				r.onMediaDetaching = function() {
					this.media.removeEventListener("seeking", this._onMediaSeeking),
					this.media = null,
					this.state = Zt.STOPPED
				},
				r.onError = function(t) {
					var e = t.frag;
					e && "subtitle" === e.type && (this.state = Zt.IDLE)
				},
				r.onSubtitleTracksUpdated = function(t) {
					var e = this;
					B.b.log("subtitle tracks updated"),
					this.tracksBuffered = [],
					this.tracks = t.subtitleTracks,
					this.tracks.forEach(function(t) {
						e.tracksBuffered[t.id] = []
					})
				},
				r.onSubtitleTrackSwitch = function(t) {
					if (this.currentTrackId = t.id, this.tracks && -1 !== this.currentTrackId) {
						var e = this.tracks[this.currentTrackId];
						e && e.details && this.setInterval(500)
					} else this.clearInterval()
				},
				r.onSubtitleTrackLoaded = function(t) {
					var e = t.id,
					i = t.details,
					n = this.currentTrackId,
					r = this.tracks,
					a = r[n];
					e >= r.length || e !== n || !a || (i.live &&
					function(t, e, i) {
						void 0 === i && (i = 0);
						var n = -1;
						zt(t, e,
						function(t, e, i) {
							e.start = t.start,
							n = i
						});
						var r = e.fragments;
						if (n < 0) r.forEach(function(t) {
							t.start += i
						});
						else for (var a = n + 1; a < r.length; a++) r[a].start = r[a - 1].start + r[a - 1].duration
					} (a.details, i, this.lastAVStart), a.details = i, this.setInterval(500))
				},
				r.onKeyLoaded = function() {
					this.state === Zt.KEY_LOADING && (this.state = Zt.IDLE)
				},
				r.onFragLoaded = function(t) {
					var e = this.fragCurrent,
					i = t.frag.decryptdata,
					n = t.frag,
					r = this.hls;
					if (this.state === Zt.FRAG_LOADING && e && "subtitle" === t.frag.type && e.sn === t.frag.sn && 0 < t.payload.byteLength && i && i.key && "AES-128" === i.method) {
						var a = vi.now();
						this.decrypter.decrypt(t.payload, i.key.buffer, i.iv.buffer,
						function(t) {
							var e = vi.now();
							r.trigger(M.a.FRAG_DECRYPTED, {
								frag: n,
								payload: t,
								stats: {
									tstart: a,
									tdecrypt: e
								}
							})
						})
					}
				},
				r.onLevelUpdated = function(t) {
					var e = t.details.fragments;
					this.lastAVStart = e.length ? e[0].start: 0
				},
				r.doTick = function() {
					if (this.media) switch (this.state) {
					case Zt.IDLE:
						var t = this.config,
						e = this.currentTrackId,
						i = this.fragmentTracker,
						n = this.media,
						r = this.tracks;
						if (!r || !r[e] || !r[e].details) break;
						var a, o = t.maxBufferHole,
						s = t.maxFragLookUpTolerance,
						l = Math.min(t.maxBufferLength, t.maxMaxBufferLength),
						c = Ct.bufferedInfo(this._getBuffered(), n.currentTime, o),
						u = c.end,
						d = c.len,
						h = r[e].details,
						p = h.fragments,
						f = p.length,
						v = p[f - 1].start + p[f - 1].duration;
						if (l < d) return;
						var g = this.fragPrevious; (a = u < v ? (g && h.hasProgramDateTime && (a = Wt(p, g.endProgramDateTime, s)), a || Kt(g, p, u, s)) : p[f - 1]) && a.encrypted ? (B.b.log("Loading key for " + a.sn), this.state = Zt.KEY_LOADING, this.hls.trigger(M.a.KEY_LOADING, {
							frag: a
						})) : a && i.getState(a) === Et && (this.fragCurrent = a, this.state = Zt.FRAG_LOADING, this.hls.trigger(M.a.FRAG_LOADING, {
							frag: a
						}))
					} else this.state = Zt.IDLE
				},
				r.stopLoad = function() {
					this.lastAVStart = 0,
					n.prototype.stopLoad.call(this)
				},
				r._getBuffered = function() {
					return this.tracksBuffered[this.currentTrackId] || []
				},
				r.onMediaSeeking = function() {
					this.fragPrevious = null
				},
				i
			} ($t); !
			function(t) {
				t.WIDEVINE = "com.widevine.alpha",
				t.PLAYREADY = "com.microsoft.playready"
			} (hi = hi || {});
			var mi = "undefined" != typeof window && window.navigator && window.navigator.requestMediaKeySystemAccess ? window.navigator.requestMediaKeySystemAccess.bind(window.navigator) : null;
			function Ai(t, e) {
				for (var i = 0; i < e.length; i++) {
					var n = e[i];
					n.enumerable = n.enumerable || !1,
					n.configurable = !0,
					"value" in n && (n.writable = !0),
					Object.defineProperty(t, n.key, n)
				}
			}
			var yi = function(i) {
				var t, e;
				function n(t) {
					var e;
					return (e = i.call(this, t, M.a.MEDIA_ATTACHED, M.a.MEDIA_DETACHED, M.a.MANIFEST_PARSED) || this)._widevineLicenseUrl = void 0,
					e._licenseXhrSetup = void 0,
					e._emeEnabled = void 0,
					e._requestMediaKeySystemAccess = void 0,
					e._config = void 0,
					e._mediaKeysList = [],
					e._media = null,
					e._hasSetMediaKeys = !1,
					e._requestLicenseFailureCount = 0,
					e._onMediaEncrypted = function(t) {
						B.b.log('Media is encrypted using "' + t.initDataType + '" init data type'),
						e._attemptSetMediaKeys(),
						e._generateRequestWithPreferredKeySession(t.initDataType, t.initData)
					},
					e._config = t.config,
					e._widevineLicenseUrl = e._config.widevineLicenseUrl,
					e._licenseXhrSetup = e._config.licenseXhrSetup,
					e._emeEnabled = e._config.emeEnabled,
					e._requestMediaKeySystemAccess = e._config.requestMediaKeySystemAccessFunc,
					e
				}
				e = i,
				(t = n).prototype = Object.create(e.prototype),
				(t.prototype.constructor = t).__proto__ = e;
				var r = n.prototype;
				return r.getLicenseServerUrl = function(t) {
					switch (t) {
					case hi.WIDEVINE:
						if (!this._widevineLicenseUrl) break;
						return this._widevineLicenseUrl
					}
					throw new Error('no license server URL configured for key-system "' + t + '"')
				},
				r._attemptKeySystemAccess = function(e, t, i) {
					var n = this,
					r = function(t, e) {
						switch (t) {
						case hi.WIDEVINE:
							return function(t) {
								var e = {
									videoCapabilities: []
								};
								return t.forEach(function(t) {
									e.videoCapabilities.push({
										contentType: 'video/mp4; codecs="' + t + '"'
									})
								}),
								[e]
							} (e);
						default:
							throw new Error("Unknown key-system: " + t)
						}
					} (e, i);
					B.b.log("Requesting encrypted media key-system access"),
					this.requestMediaKeySystemAccess(e, r).then(function(t) {
						n._onMediaKeySystemAccessObtained(e, t)
					}).
					catch(function(t) {
						B.b.error('Failed to obtain key-system "' + e + '" access:', t)
					})
				},
				r._onMediaKeySystemAccessObtained = function(e, t) {
					var i = this;
					B.b.log('Access for key-system "' + e + '" obtained');
					var n = {
						mediaKeysSessionInitialized: !1,
						mediaKeySystemAccess: t,
						mediaKeySystemDomain: e
					};
					this._mediaKeysList.push(n),
					t.createMediaKeys().then(function(t) {
						n.mediaKeys = t,
						B.b.log('Media-keys created for key-system "' + e + '"'),
						i._onMediaKeysCreated()
					}).
					catch(function(t) {
						B.b.error("Failed to create media-keys:", t)
					})
				},
				r._onMediaKeysCreated = function() {
					var e = this;
					this._mediaKeysList.forEach(function(t) {
						t.mediaKeysSession || (t.mediaKeysSession = t.mediaKeys.createSession(), e._onNewMediaKeySession(t.mediaKeysSession))
					})
				},
				r._onNewMediaKeySession = function(e) {
					var i = this;
					B.b.log("New key-system session " + e.sessionId),
					e.addEventListener("message",
					function(t) {
						i._onKeySessionMessage(e, t.message)
					},
					!1)
				},
				r._onKeySessionMessage = function(e, t) {
					B.b.log("Got EME message event, creating license request"),
					this._requestLicense(t,
					function(t) {
						B.b.log("Received license data, updating key-session"),
						e.update(t)
					})
				},
				r._attemptSetMediaKeys = function() {
					if (!this._media) throw new Error("Attempted to set mediaKeys without first attaching a media element");
					if (!this._hasSetMediaKeys) {
						var t = this._mediaKeysList[0];
						if (!t || !t.mediaKeys) return B.b.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"),
						void this.hls.trigger(M.a.ERROR, {
							type: h.b.KEY_SYSTEM_ERROR,
							details: h.a.KEY_SYSTEM_NO_KEYS,
							fatal: !0
						});
						B.b.log("Setting keys for encrypted media"),
						this._media.setMediaKeys(t.mediaKeys),
						this._hasSetMediaKeys = !0
					}
				},
				r._generateRequestWithPreferredKeySession = function(t, e) {
					var i = this,
					n = this._mediaKeysList[0];
					if (!n) return B.b.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"),
					void this.hls.trigger(M.a.ERROR, {
						type: h.b.KEY_SYSTEM_ERROR,
						details: h.a.KEY_SYSTEM_NO_ACCESS,
						fatal: !0
					});
					if (n.mediaKeysSessionInitialized) B.b.warn("Key-Session already initialized but requested again");
					else {
						var r = n.mediaKeysSession;
						if (!r) return B.b.error("Fatal: Media is encrypted but no key-session existing"),
						void this.hls.trigger(M.a.ERROR, {
							type: h.b.KEY_SYSTEM_ERROR,
							details: h.a.KEY_SYSTEM_NO_SESSION,
							fatal: !0
						});
						if (!e) return B.b.warn("Fatal: initData required for generating a key session is null"),
						void this.hls.trigger(M.a.ERROR, {
							type: h.b.KEY_SYSTEM_ERROR,
							details: h.a.KEY_SYSTEM_NO_INIT_DATA,
							fatal: !0
						});
						B.b.log('Generating key-session request for "' + t + '" init data type'),
						n.mediaKeysSessionInitialized = !0,
						r.generateRequest(t, e).then(function() {
							B.b.debug("Key-session generation succeeded")
						}).
						catch(function(t) {
							B.b.error("Error generating key-session request:", t),
							i.hls.trigger(M.a.ERROR, {
								type: h.b.KEY_SYSTEM_ERROR,
								details: h.a.KEY_SYSTEM_NO_SESSION,
								fatal: !1
							})
						})
					}
				},
				r._createLicenseXhr = function(t, e, i) {
					var n = new XMLHttpRequest,
					r = this._licenseXhrSetup;
					try {
						if (r) try {
							r(n, t)
						} catch(e) {
							n.open("POST", t, !0),
							r(n, t)
						}
						n.readyState || n.open("POST", t, !0)
					} catch(t) {
						throw new Error("issue setting up KeySystem license XHR " + t)
					}
					return n.responseType = "arraybuffer",
					n.onreadystatechange = this._onLicenseRequestReadyStageChange.bind(this, n, t, e, i),
					n
				},
				r._onLicenseRequestReadyStageChange = function(t, e, i, n) {
					switch (t.readyState) {
					case 4:
						if (200 === t.status) this._requestLicenseFailureCount = 0,
						B.b.log("License request succeeded"),
						"arraybuffer" !== t.responseType && B.b.warn("xhr response type was not set to the expected arraybuffer for license request"),
						n(t.response);
						else {
							if (B.b.error("License Request XHR failed (" + e + "). Status: " + t.status + " (" + t.statusText + ")"), this._requestLicenseFailureCount++, 3 < this._requestLicenseFailureCount) return void this.hls.trigger(M.a.ERROR, {
								type: h.b.KEY_SYSTEM_ERROR,
								details: h.a.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
								fatal: !0
							});
							var r = 3 - this._requestLicenseFailureCount + 1;
							B.b.warn("Retrying license request, " + r + " attempts left"),
							this._requestLicense(i, n)
						}
					}
				},
				r._generateLicenseRequestChallenge = function(t, e) {
					switch (t.mediaKeySystemDomain) {
					case hi.WIDEVINE:
						return e
					}
					throw new Error("unsupported key-system: " + t.mediaKeySystemDomain)
				},
				r._requestLicense = function(t, e) {
					B.b.log("Requesting content license for key-system");
					var i = this._mediaKeysList[0];
					if (!i) return B.b.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"),
					void this.hls.trigger(M.a.ERROR, {
						type: h.b.KEY_SYSTEM_ERROR,
						details: h.a.KEY_SYSTEM_NO_ACCESS,
						fatal: !0
					});
					try {
						var n = this.getLicenseServerUrl(i.mediaKeySystemDomain),
						r = this._createLicenseXhr(n, t, e);
						B.b.log("Sending license request to URL: " + n);
						var a = this._generateLicenseRequestChallenge(i, t);
						r.send(a)
					} catch(t) {
						B.b.error("Failure requesting DRM license: " + t),
						this.hls.trigger(M.a.ERROR, {
							type: h.b.KEY_SYSTEM_ERROR,
							details: h.a.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
							fatal: !0
						})
					}
				},
				r.onMediaAttached = function(t) {
					if (this._emeEnabled) {
						var e = t.media; (this._media = e).addEventListener("encrypted", this._onMediaEncrypted)
					}
				},
				r.onMediaDetached = function() {
					this._media && (this._media.removeEventListener("encrypted", this._onMediaEncrypted), this._media = null)
				},
				r.onManifestParsed = function(t) {
					if (this._emeEnabled) {
						var e = t.levels.map(function(t) {
							return t.audioCodec
						}),
						i = t.levels.map(function(t) {
							return t.videoCodec
						});
						this._attemptKeySystemAccess(hi.WIDEVINE, e, i)
					}
				},
				Ai(n.prototype, [{
					key: "requestMediaKeySystemAccess",
					get: function() {
						if (!this._requestMediaKeySystemAccess) throw new Error("No requestMediaKeySystemAccess function configured");
						return this._requestMediaKeySystemAccess
					}
				}]),
				n
			} (c);
			var bi = function(r) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {},
					e = Object.keys(a);
					"function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(a).filter(function(t) {
						return Object.getOwnPropertyDescriptor(a, t).enumerable
					}))),
					e.forEach(function(t) {
						var e, i, n;
						e = r,
						n = a[i = t],
						i in e ? Object.defineProperty(e, i, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : e[i] = n
					})
				}
				return r
			} ({
				autoStartLoad: !0,
				startPosition: -1,
				defaultAudioCodec: void 0,
				debug: !1,
				capLevelOnFPSDrop: !1,
				capLevelToPlayerSize: !1,
				initialLiveManifestSize: 1,
				maxBufferLength: 30,
				maxBufferSize: 6e7,
				maxBufferHole: .5,
				lowBufferWatchdogPeriod: .5,
				highBufferWatchdogPeriod: 3,
				nudgeOffset: .1,
				nudgeMaxRetry: 3,
				maxFragLookUpTolerance: .25,
				liveSyncDurationCount: 3,
				liveMaxLatencyDurationCount: 1 / 0,
				liveSyncDuration: void 0,
				liveMaxLatencyDuration: void 0,
				liveDurationInfinity: !1,
				liveBackBufferLength: 1 / 0,
				maxMaxBufferLength: 600,
				enableWorker: !0,
				enableSoftwareAES: !0,
				manifestLoadingTimeOut: 1e4,
				manifestLoadingMaxRetry: 1,
				manifestLoadingRetryDelay: 1e3,
				manifestLoadingMaxRetryTimeout: 64e3,
				startLevel: void 0,
				levelLoadingTimeOut: 1e4,
				levelLoadingMaxRetry: 4,
				levelLoadingRetryDelay: 1e3,
				levelLoadingMaxRetryTimeout: 64e3,
				fragLoadingTimeOut: 2e4,
				fragLoadingMaxRetry: 6,
				fragLoadingRetryDelay: 1e3,
				fragLoadingMaxRetryTimeout: 64e3,
				startFragPrefetch: !1,
				fpsDroppedMonitoringPeriod: 5e3,
				fpsDroppedMonitoringThreshold: .2,
				appendErrorMaxRetry: 3,
				loader: xe,
				fLoader: void 0,
				pLoader: void 0,
				xhrSetup: void 0,
				licenseXhrSetup: void 0,
				abrController: fe,
				bufferController: ge,
				capLevelController: Ae,
				fpsController: be,
				stretchShortVideoTrack: !1,
				maxAudioFramesDrift: 1,
				forceKeyFrameOnDiscontinuity: !0,
				abrEwmaFastLive: 3,
				abrEwmaSlowLive: 9,
				abrEwmaFastVoD: 3,
				abrEwmaSlowVoD: 9,
				abrEwmaDefaultEstimate: 5e5,
				abrBandWidthFactor: .95,
				abrBandWidthUpFactor: .7,
				abrMaxWithRealBitrate: !1,
				maxStarvationDelay: 4,
				maxLoadingDelay: 4,
				minAutoBitrate: 0,
				emeEnabled: !1,
				widevineLicenseUrl: void 0,
				requestMediaKeySystemAccessFunc: mi
			},
			{
				cueHandler: n,
				enableCEA708Captions: !0,
				enableWebVTT: !0,
				captionsTextTrack1Label: "English",
				captionsTextTrack1LanguageCode: "en",
				captionsTextTrack2Label: "Spanish",
				captionsTextTrack2LanguageCode: "es"
			},
			{
				subtitleStreamController: gi,
				subtitleTrackController: pi,
				timelineController: ci,
				audioStreamController: Le,
				audioTrackController: Se,
				emeController: yi
			});
			function wi(t) {
				if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return t
			}
			function ki(t, e) {
				for (var i = 0; i < e.length; i++) {
					var n = e[i];
					n.enumerable = n.enumerable || !1,
					n.configurable = !0,
					"value" in n && (n.writable = !0),
					Object.defineProperty(t, n.key, n)
				}
			}
			function Ei(t, e, i) {
				return e && ki(t.prototype, e),
				i && ki(t, i),
				t
			}
			i.d(e, "default",
			function() {
				return xi
			});
			var xi = function(b) {
				var t, e;
				function w(t) {
					var e;
					void 0 === t && (t = {}),
					(e = b.call(this) || this).config = void 0,
					e._autoLevelCapping = void 0,
					e.abrController = void 0,
					e.capLevelController = void 0,
					e.levelController = void 0,
					e.streamController = void 0,
					e.networkControllers = void 0,
					e.audioTrackController = void 0,
					e.subtitleTrackController = void 0,
					e.emeController = void 0,
					e.coreComponents = void 0,
					e.media = null,
					e.url = null;
					var i = w.DefaultConfig;
					if ((t.liveSyncDurationCount || t.liveMaxLatencyDurationCount) && (t.liveSyncDuration || t.liveMaxLatencyDuration)) throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
					e.config = function(r) {
						for (var t = 1; t < arguments.length; t++) {
							var a = null != arguments[t] ? arguments[t] : {},
							e = Object.keys(a);
							"function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(a).filter(function(t) {
								return Object.getOwnPropertyDescriptor(a, t).enumerable
							}))),
							e.forEach(function(t) {
								var e, i, n;
								e = r,
								n = a[i = t],
								i in e ? Object.defineProperty(e, i, {
									value: n,
									enumerable: !0,
									configurable: !0,
									writable: !0
								}) : e[i] = n
							})
						}
						return r
					} ({},
					i, t);
					var n = wi(e).config;
					if (void 0 !== n.liveMaxLatencyDurationCount && n.liveMaxLatencyDurationCount <= n.liveSyncDurationCount) throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');
					if (void 0 !== n.liveMaxLatencyDuration && (void 0 === n.liveSyncDuration || n.liveMaxLatencyDuration <= n.liveSyncDuration)) throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');
					Object(B.a)(n.debug),
					e._autoLevelCapping = -1;
					var r = e.abrController = new n.abrController(wi(e)),
					a = new n.bufferController(wi(e)),
					o = e.capLevelController = new n.capLevelController(wi(e)),
					s = new n.fpsController(wi(e)),
					l = new T(wi(e)),
					c = new S(wi(e)),
					u = new kt(wi(e)),
					d = new ce(wi(e)),
					h = e.levelController = new ae(wi(e)),
					p = new St(wi(e)),
					f = [h, e.streamController = new ee(wi(e), p)],
					v = n.audioStreamController;
					v && f.push(new v(wi(e), p)),
					e.networkControllers = f;
					var g = [l, c, u, r, a, o, s, d, p];
					if (v = n.audioTrackController) {
						var m = new v(wi(e));
						e.audioTrackController = m,
						g.push(m)
					}
					if (v = n.subtitleTrackController) {
						var A = new v(wi(e));
						e.subtitleTrackController = A,
						f.push(A)
					}
					if (v = n.emeController) {
						var y = new v(wi(e));
						e.emeController = y,
						g.push(y)
					}
					return (v = n.subtitleStreamController) && f.push(new v(wi(e), p)),
					(v = n.timelineController) && g.push(new v(wi(e))),
					e.coreComponents = g,
					e
				}
				e = b,
				(t = w).prototype = Object.create(e.prototype),
				(t.prototype.constructor = t).__proto__ = e,
				w.isSupported = function() {
					return function() {
						var t = It();
						if (!t) return ! 1;
						var e = window.SourceBuffer || window.WebKitSourceBuffer,
						i = t && "function" == typeof t.isTypeSupported && t.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
						n = !e || e.prototype && "function" == typeof e.prototype.appendBuffer && "function" == typeof e.prototype.remove;
						return !! i && !!n
					} ()
				},
				Ei(w, null, [{
					key: "version",
					get: function() {
						return "0.12.4"
					}
				},
				{
					key: "Events",
					get: function() {
						return M.a
					}
				},
				{
					key: "ErrorTypes",
					get: function() {
						return h.b
					}
				},
				{
					key: "ErrorDetails",
					get: function() {
						return h.a
					}
				},
				{
					key: "DefaultConfig",
					get: function() {
						return w.defaultConfig ? w.defaultConfig: bi
					},
					set: function(t) {
						w.defaultConfig = t
					}
				}]);
				var i = w.prototype;
				return i.destroy = function() {
					B.b.log("destroy"),
					this.trigger(M.a.DESTROYING),
					this.detachMedia(),
					this.coreComponents.concat(this.networkControllers).forEach(function(t) {
						t.destroy()
					}),
					this.url = null,
					this.removeAllListeners(),
					this._autoLevelCapping = -1
				},
				i.attachMedia = function(t) {
					B.b.log("attachMedia"),
					this.media = t,
					this.trigger(M.a.MEDIA_ATTACHING, {
						media: t
					})
				},
				i.detachMedia = function() {
					B.b.log("detachMedia"),
					this.trigger(M.a.MEDIA_DETACHING),
					this.media = null
				},
				i.loadSource = function(t) {
					t = s.buildAbsoluteURL(window.location.href, t, {
						alwaysNormalize: !0
					}),
					B.b.log("loadSource:" + t),
					this.url = t,
					this.trigger(M.a.MANIFEST_LOADING, {
						url: t
					})
				},
				i.startLoad = function(e) {
					void 0 === e && (e = -1),
					B.b.log("startLoad(" + e + ")"),
					this.networkControllers.forEach(function(t) {
						t.startLoad(e)
					})
				},
				i.stopLoad = function() {
					B.b.log("stopLoad"),
					this.networkControllers.forEach(function(t) {
						t.stopLoad()
					})
				},
				i.swapAudioCodec = function() {
					B.b.log("swapAudioCodec"),
					this.streamController.swapAudioCodec()
				},
				i.recoverMediaError = function() {
					B.b.log("recoverMediaError");
					var t = this.media;
					this.detachMedia(),
					t && this.attachMedia(t)
				},
				i.switchLine = function(t) {
					this.levelController.switchLine(t),
					this.streamController.state === Zt.ERROR && this.startLoad()
				},
				Ei(w, [{
					key: "levels",
					get: function() {
						return this.levelController.levels
					}
				},
				{
					key: "currentLevel",
					get: function() {
						return this.streamController.currentLevel
					},
					set: function(t) {
						B.b.log("set currentLevel:" + t),
						this.loadLevel = t,
						this.streamController.immediateLevelSwitch()
					}
				},
				{
					key: "nextLevel",
					get: function() {
						return this.streamController.nextLevel
					},
					set: function(t) {
						B.b.log("set nextLevel:" + t),
						this.levelController.manualLevel = t,
						this.streamController.nextLevelSwitch()
					}
				},
				{
					key: "loadLevel",
					get: function() {
						return this.levelController.level
					},
					set: function(t) {
						B.b.log("set loadLevel:" + t),
						this.levelController.manualLevel = t
					}
				},
				{
					key: "nextLoadLevel",
					get: function() {
						return this.levelController.nextLoadLevel
					},
					set: function(t) {
						this.levelController.nextLoadLevel = t
					}
				},
				{
					key: "firstLevel",
					get: function() {
						return Math.max(this.levelController.firstLevel, this.minAutoLevel)
					},
					set: function(t) {
						B.b.log("set firstLevel:" + t),
						this.levelController.firstLevel = t
					}
				},
				{
					key: "startLevel",
					get: function() {
						return this.levelController.startLevel
					},
					set: function(t) {
						B.b.log("set startLevel:" + t),
						-1 !== t && (t = Math.max(t, this.minAutoLevel)),
						this.levelController.startLevel = t
					}
				},
				{
					key: "capLevelToPlayerSize",
					set: function(t) {
						var e = !!t;
						e !== this.config.capLevelToPlayerSize && (e ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(), this.autoLevelCapping = -1, this.streamController.nextLevelSwitch()), this.config.capLevelToPlayerSize = e)
					}
				},
				{
					key: "autoLevelCapping",
					get: function() {
						return this._autoLevelCapping
					},
					set: function(t) {
						B.b.log("set autoLevelCapping:" + t),
						this._autoLevelCapping = t
					}
				},
				{
					key: "bandwidthEstimate",
					get: function() {
						var t = this.abrController._bwEstimator;
						return t ? t.getEstimate() : NaN
					}
				},
				{
					key: "autoLevelEnabled",
					get: function() {
						return - 1 === this.levelController.manualLevel
					}
				},
				{
					key: "manualLevel",
					get: function() {
						return this.levelController.manualLevel
					}
				},
				{
					key: "minAutoLevel",
					get: function() {
						for (var t = this.levels,
						e = this.config.minAutoBitrate,
						i = t ? t.length: 0, n = 0; n < i; n++) if ((t[n].realBitrate ? Math.max(t[n].realBitrate, t[n].bitrate) : t[n].bitrate) > e) return n;
						return 0
					}
				},
				{
					key: "maxAutoLevel",
					get: function() {
						var t = this.levels,
						e = this.autoLevelCapping;
						return - 1 === e && t && t.length ? t.length - 1 : e
					}
				},
				{
					key: "nextAutoLevel",
					get: function() {
						return Math.min(Math.max(this.abrController.nextAutoLevel, this.minAutoLevel), this.maxAutoLevel)
					},
					set: function(t) {
						this.abrController.nextAutoLevel = Math.max(this.minAutoLevel, t)
					}
				},
				{
					key: "audioTracks",
					get: function() {
						var t = this.audioTrackController;
						return t ? t.audioTracks: []
					}
				},
				{
					key: "audioTrack",
					get: function() {
						var t = this.audioTrackController;
						return t ? t.audioTrack: -1
					},
					set: function(t) {
						var e = this.audioTrackController;
						e && (e.audioTrack = t)
					}
				},
				{
					key: "liveSyncPosition",
					get: function() {
						return this.streamController.liveSyncPosition
					}
				},
				{
					key: "subtitleTracks",
					get: function() {
						var t = this.subtitleTrackController;
						return t ? t.subtitleTracks: []
					}
				},
				{
					key: "subtitleTrack",
					get: function() {
						var t = this.subtitleTrackController;
						return t ? t.subtitleTrack: -1
					},
					set: function(t) {
						var e = this.subtitleTrackController;
						e && (e.subtitleTrack = t)
					}
				},
				{
					key: "subtitleDisplay",
					get: function() {
						var t = this.subtitleTrackController;
						return !! t && t.subtitleDisplay
					},
					set: function(t) {
						var e = this.subtitleTrackController;
						e && (e.subtitleDisplay = t)
					}
				}]),
				w
			} (Pt);
			xi.defaultConfig = void 0,
			xi.md5 = r,
			xi.aes = At
		}]).
	default)
	},
	function(t, e, i) {
		t.exports = i(217)
	},
	function(t, e, i) {
		t.exports = i(222)
	},
	function(i, t, e) { (function(t) {
			var e;
			e = "undefined" != typeof window ? window: void 0 !== t ? t: "undefined" != typeof self ? self: {},
			i.exports = e
		}).call(this, e(66))
	},
	function(e, t, i) {
		var n = i(187),
		r = i(41);
		function a(t) {
			return e.exports = a = "function" == typeof r && "symbol" == typeof n ?
			function(t) {
				return typeof t
			}: function(t) {
				return t && "function" == typeof r && t.constructor === r && t !== r.prototype ? "symbol": typeof t
			},
			a(t)
		}
		e.exports = a
	},
	function(t, e, i) {
		var v = i(17),
		g = i(9),
		m = i(45),
		A = i(39),
		y = i(40),
		b = "prototype",
		w = function(t, e, i) {
			var n, r, a, o = t & w.F,
			s = t & w.G,
			l = t & w.S,
			c = t & w.P,
			u = t & w.B,
			d = t & w.W,
			h = s ? g: g[e] || (g[e] = {}),
			p = h[b],
			f = s ? v: l ? v[e] : (v[e] || {})[b];
			for (n in s && (i = e), i)(r = !o && f && void 0 !== f[n]) && y(h, n) || (a = r ? f[n] : i[n], h[n] = s && "function" != typeof f[n] ? i[n] : u && r ? m(a, v) : d && f[n] == a ?
			function(n) {
				function t(t, e, i) {
					if (this instanceof n) {
						switch (arguments.length) {
						case 0:
							return new n;
						case 1:
							return new n(t);
						case 2:
							return new n(t, e)
						}
						return new n(t, e, i)
					}
					return n.apply(this, arguments)
				}
				return t[b] = n[b],
				t
			} (a) : c && "function" == typeof a ? m(Function.call, a) : a, c && ((h.virtual || (h.virtual = {}))[n] = a, t & w.R && p && !p[n] && A(p, n, a)))
		};
		w.F = 1,
		w.G = 2,
		w.S = 4,
		w.P = 8,
		w.B = 16,
		w.W = 32,
		w.U = 64,
		w.R = 128,
		t.exports = w
	},
	function(t, e, i) {
		var n = i(243),
		r = i(244),
		a = i(155),
		o = i(249);
		t.exports = function(t) {
			return n(t) || r(t) || a(t) || o()
		}
	},
	function(t, e) {
		var i = t.exports = "undefined" != typeof window && window.Math == Math ? window: "undefined" != typeof self && self.Math == Math ? self: Function("return this")();
		"number" == typeof __g && (__g = i)
	},
	function(t, e, i) {
		"use strict";
		var n = i(16),
		a = i.n(n),
		r = i(11),
		o = i.n(r);
		e.a = function(t, e, i) {
			var n = o()(e),
			r = n.map(function(t) {
				return e[t]
			});
			return i && (r.push(i), n.push("lang")),
			new Function(n.join(","), "return (".concat(t.toString(), ")()")).apply(void 0, a()(r)).trim()
		}
	},
	function(t, e, a) {
		"use strict";
		var i, n, r = function() {
			return void 0 === i && (i = Boolean(window && document && document.all && !window.atob)),
			i
		},
		o = (n = {},
		function(t) {
			if (void 0 === n[t]) {
				var e = document.querySelector(t);
				if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement) try {
					e = e.contentDocument.head
				} catch(t) {
					e = null
				}
				n[t] = e
			}
			return n[t]
		}),
		d = [];
		function h(t) {
			for (var e = -1,
			i = 0; i < d.length; i++) if (d[i].identifier === t) {
				e = i;
				break
			}
			return e
		}
		function l(t, e) {
			for (var i = {},
			n = [], r = 0; r < t.length; r++) {
				var a = t[r],
				o = e.base ? a[0] + e.base: a[0],
				s = i[o] || 0,
				l = "".concat(o, " ").concat(s);
				i[o] = s + 1;
				var c = h(l),
				u = {
					css: a[1],
					media: a[2],
					sourceMap: a[3]
				}; - 1 !== c ? (d[c].references++, d[c].updater(u)) : d.push({
					identifier: l,
					updater: g(u, e),
					references: 1
				}),
				n.push(l)
			}
			return n
		}
		function s(t) {
			var e = document.createElement("style"),
			i = t.attributes || {};
			if (void 0 === i.nonce) {
				var n = a.nc;
				n && (i.nonce = n)
			}
			if (Object.keys(i).forEach(function(t) {
				e.setAttribute(t, i[t])
			}), "function" == typeof t.insert) t.insert(e);
			else {
				var r = o(t.insert || "head");
				if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
				r.appendChild(e)
			}
			return e
		}
		var c, u = (c = [],
		function(t, e) {
			return c[t] = e,
			c.filter(Boolean).join("\n")
		});
		function p(t, e, i, n) {
			var r = i ? "": n.media ? "@media ".concat(n.media, " {").concat(n.css, "}") : n.css;
			if (t.styleSheet) t.styleSheet.cssText = u(e, r);
			else {
				var a = document.createTextNode(r),
				o = t.childNodes;
				o[e] && t.removeChild(o[e]),
				o.length ? t.insertBefore(a, o[e]) : t.appendChild(a)
			}
		}
		var f = null,
		v = 0;
		function g(e, t) {
			var i, n, r;
			if (t.singleton) {
				var a = v++;
				i = f = f || s(t),
				n = p.bind(null, i, a, !1),
				r = p.bind(null, i, a, !0)
			} else i = s(t),
			n = function(t, e, i) {
				var n = i.css,
				r = i.media,
				a = i.sourceMap;
				if (r ? t.setAttribute("media", r) : t.removeAttribute("media"), a && btoa && (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")), t.styleSheet) t.styleSheet.cssText = n;
				else {
					for (; t.firstChild;) t.removeChild(t.firstChild);
					t.appendChild(document.createTextNode(n))
				}
			}.bind(null, i, t),
			r = function() {
				var t;
				null !== (t = i).parentNode && t.parentNode.removeChild(t)
			};
			return n(e),
			function(t) {
				if (t) {
					if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
					n(e = t)
				} else r()
			}
		}
		t.exports = function(t, o) { (o = o || {}).singleton || "boolean" == typeof o.singleton || (o.singleton = r());
			var s = l(t = t || [], o);
			return function(t) {
				if (t = t || [], "[object Array]" === Object.prototype.toString.call(t)) {
					for (var e = 0; e < s.length; e++) {
						var i = h(s[e]);
						d[i].references--
					}
					for (var n = l(t, o), r = 0; r < s.length; r++) {
						var a = h(s[r]);
						0 === d[a].references && (d[a].updater(), d.splice(a, 1))
					}
					s = n
				}
			}
		}
	},
	function(t, e, i) {
		"use strict";
		t.exports = function(i) {
			var l = [];
			return l.toString = function() {
				return this.map(function(t) {
					var e = function(t, e) {
						var i = t[1] || "",
						n = t[3];
						if (!n) return i;
						if (e && "function" == typeof btoa) {
							var r = function(t) {
								var e = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
								i = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e);
								return "/*# ".concat(i, " */")
							} (n),
							a = n.sources.map(function(t) {
								return "/*# sourceURL=".concat(n.sourceRoot || "").concat(t, " */")
							});
							return [i].concat(a).concat([r]).join("\n")
						}
						return [i].join("\n")
					} (t, i);
					return t[2] ? "@media ".concat(t[2], " {").concat(e, "}") : e
				}).join("")
			},
			l.i = function(t, e, i) {
				"string" == typeof t && (t = [[null, t, ""]]);
				var n = {};
				if (i) for (var r = 0; r < this.length; r++) {
					var a = this[r][0];
					null != a && (n[a] = !0)
				}
				for (var o = 0; o < t.length; o++) {
					var s = [].concat(t[o]);
					i && n[s[0]] || (e && (s[2] ? s[2] = "".concat(e, " and ").concat(s[2]) : s[2] = e), l.push(s))
				}
			},
			l
		}
	},
	function(t, e, i) {
		var n = i(100)("wks"),
		r = i(77),
		a = i(17).Symbol,
		o = "function" == typeof a; (t.exports = function(t) {
			return n[t] || (n[t] = o && a[t] || (o ? a: r)("Symbol." + t))
		}).store = n
	},
	function(S, _, C) { (function(t) {
			var x, T, e;
			e = "undefined" != typeof self ? self: "undefined" != typeof window ? window: void 0 !== t ? t: this,
			S.exports = function(e) {
				"use strict";
				var i = e.Base64,
				t = "2.4.5",
				n;
				if (true && S.exports) {
					try {
						n = C(271).Buffer
					} catch(t) {}
				}
				var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
				a = function(t) {
					var e = {};
					for (var i = 0,
					n = t.length; i < n; i++) e[t.charAt(i)] = i;
					return e
				} (r),
				o = String.fromCharCode,
				s = function(t) {
					if (t.length < 2) {
						var e = t.charCodeAt(0);
						return e < 128 ? t: e < 2048 ? o(192 | e >>> 6) + o(128 | e & 63) : o(224 | e >>> 12 & 15) + o(128 | e >>> 6 & 63) + o(128 | e & 63)
					} else {
						var e = 65536 + (t.charCodeAt(0) - 55296) * 1024 + (t.charCodeAt(1) - 56320);
						return o(240 | e >>> 18 & 7) + o(128 | e >>> 12 & 63) + o(128 | e >>> 6 & 63) + o(128 | e & 63)
					}
				},
				l = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
				c = function(t) {
					return t.replace(l, s)
				},
				u = function(t) {
					var e = [0, 2, 1][t.length % 3],
					i = t.charCodeAt(0) << 16 | (t.length > 1 ? t.charCodeAt(1) : 0) << 8 | (t.length > 2 ? t.charCodeAt(2) : 0),
					n = [r.charAt(i >>> 18), r.charAt(i >>> 12 & 63), e >= 2 ? "=": r.charAt(i >>> 6 & 63), e >= 1 ? "=": r.charAt(i & 63)];
					return n.join("")
				},
				d = e.btoa ?
				function(t) {
					return e.btoa(t)
				}: function(t) {
					return t.replace(/[\s\S]{1,3}/g, u)
				},
				h = n ? n.from && Uint8Array && n.from !== Uint8Array.from ?
				function(t) {
					return (t.constructor === n.constructor ? t: n.from(t)).toString("base64")
				}: function(t) {
					return (t.constructor === n.constructor ? t: new n(t)).toString("base64")
				}: function(t) {
					return d(c(t))
				},
				p = function(t, e) {
					return ! e ? h(String(t)) : h(String(t)).replace(/[+\/]/g,
					function(t) {
						return t == "+" ? "-": "_"
					}).replace(/=/g, "")
				},
				f = function(t) {
					return p(t, true)
				},
				v = new RegExp(["[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}"].join("|"), "g"),
				g = function(t) {
					switch (t.length) {
					case 4:
						var e = (7 & t.charCodeAt(0)) << 18 | (63 & t.charCodeAt(1)) << 12 | (63 & t.charCodeAt(2)) << 6 | 63 & t.charCodeAt(3),
						i = e - 65536;
						return o((i >>> 10) + 55296) + o((i & 1023) + 56320);
					case 3:
						return o((15 & t.charCodeAt(0)) << 12 | (63 & t.charCodeAt(1)) << 6 | 63 & t.charCodeAt(2));
					default:
						return o((31 & t.charCodeAt(0)) << 6 | 63 & t.charCodeAt(1))
					}
				},
				m = function(t) {
					return t.replace(v, g)
				},
				A = function(t) {
					var e = t.length,
					i = e % 4,
					n = (e > 0 ? a[t.charAt(0)] << 18 : 0) | (e > 1 ? a[t.charAt(1)] << 12 : 0) | (e > 2 ? a[t.charAt(2)] << 6 : 0) | (e > 3 ? a[t.charAt(3)] : 0),
					r = [o(n >>> 16), o(n >>> 8 & 255), o(n & 255)];
					r.length -= [0, 0, 2, 1][i];
					return r.join("")
				},
				y = e.atob ?
				function(t) {
					return e.atob(t)
				}: function(t) {
					return t.replace(/[\s\S]{1,4}/g, A)
				},
				b = n ? n.from && Uint8Array && n.from !== Uint8Array.from ?
				function(t) {
					return (t.constructor === n.constructor ? t: n.from(t, "base64")).toString()
				}: function(t) {
					return (t.constructor === n.constructor ? t: new n(t, "base64")).toString()
				}: function(t) {
					return m(y(t))
				},
				w = function(t) {
					return b(String(t).replace(/[-_]/g,
					function(t) {
						return t == "-" ? "+": "/"
					}).replace(/[^A-Za-z0-9\+\/]/g, ""))
				},
				k = function() {
					var t = e.Base64;
					e.Base64 = i;
					return t
				};
				if (e.Base64 = {
					VERSION: t,
					atob: y,
					btoa: d,
					fromBase64: w,
					toBase64: p,
					utob: c,
					encode: p,
					encodeURI: f,
					btou: m,
					decode: w,
					noConflict: k
				},
				typeof Object.defineProperty === "function") {
					var E = function(t) {
						return {
							value: t,
							enumerable: false,
							writable: true,
							configurable: true
						}
					};
					e.Base64.extendString = function() {
						Object.defineProperty(String.prototype, "fromBase64", E(function() {
							return w(this)
						}));
						Object.defineProperty(String.prototype, "toBase64", E(function(t) {
							return p(this, t)
						}));
						Object.defineProperty(String.prototype, "toBase64URI", E(function() {
							return p(this, true)
						}))
					}
				}
				if (e["Meteor"]) {
					Base64 = e.Base64
				}
				if (true && S.exports) {
					S.exports.Base64 = e.Base64
				} else if (true) { ! (x = [], T = function() {
						return e.Base64
					}.apply(_, x), T !== undefined && (S.exports = T))
				}
				return {
					Base64: e.Base64
				}
			} (e)
		}).call(this, C(66))
	},
	function(t, e, i) {
		var n = i(89)("wks"),
		r = i(56),
		a = i(27).Symbol,
		o = "function" == typeof a; (t.exports = function(t) {
			return n[t] || (n[t] = o && a[t] || (o ? a: r)("Symbol." + t))
		}).store = n
	},
	function(t, e, i) {
		var n = i(28);
		t.exports = function(t) {
			if (!n(t)) throw TypeError(t + " is not an object!");
			return t
		}
	},
	function(t, e, i) {
		t.exports = !i(34)(function() {
			return 7 != Object.defineProperty({},
			"a", {
				get: function() {
					return 7
				}
			}).a
		})
	},
	function(t, e, i) {
		t.exports = i(242)
	},
	function(t, e) {
		var i = t.exports = "undefined" != typeof window && window.Math == Math ? window: "undefined" != typeof self && self.Math == Math ? self: Function("return this")();
		"number" == typeof __g && (__g = i)
	},
	function(t, e) {
		t.exports = function(t) {
			return "object" == typeof t ? null !== t: "function" == typeof t
		}
	},
	function(t, e, i) {
		t.exports = i(215)
	},
	function(t, e, i) {
		var n = i(24),
		r = i(131),
		a = i(97),
		o = Object.defineProperty;
		e.f = i(25) ? Object.defineProperty: function(t, e, i) {
			if (n(t), e = a(e, !0), n(i), r) try {
				return o(t, e, i)
			} catch(t) {}
			if ("get" in i || "set" in i) throw TypeError("Accessors not supported!");
			return "value" in i && (t[e] = i.value),
			t
		}
	},
	function(t, e, i) {
		var n = i(135),
		r = i(75);
		t.exports = function(t) {
			return n(r(t))
		}
	},
	function(t, e, i) {
		t.exports = !i(69)(function() {
			return 7 != Object.defineProperty({},
			"a", {
				get: function() {
					return 7
				}
			}).a
		})
	},
	function(t, e, i) {
		var n = i(43),
		r = i(72);
		t.exports = i(32) ?
		function(t, e, i) {
			return n.f(t, e, r(1, i))
		}: function(t, e, i) {
			return t[e] = i,
			t
		}
	},
	function(t, e) {
		t.exports = function(t) {
			try {
				return !! t()
			} catch(t) {
				return ! 0
			}
		}
	},
	function(t, e, i) {
		"use strict";
		var n = i(4),
		r = i.n(n),
		a = i(2),
		o = i.n(a),
		s = i(13),
		c = i.n(s),
		l = i(7),
		u = i.n(l),
		d = i(3),
		h = i(5),
		p = function() {
			function i(t) {
				var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "line";
				r()(this, i),
				this.touch = t,
				this.originTouch = t.dom[0],
				this.direction = e,
				this.mDown = !1,
				this.TW,
				this.init()
			}
			return o()(i, [{
				key: "offset",
				value: function(t) {
					return "col" === this.direction ? t.offsetY: t.offsetX
				}
			},
			{
				key: "page",
				value: function(t) {
					return "col" === this.direction ? t.pageY: t.pageX
				}
			},
			{
				key: "on",
				value: function(t, e) {
					var i = this;
					if ("changeEvent" === t) {
						this.originTouch.addEventListener(t,
						function(t) {
							e(t, i.percents, i.mOver, i.TW, i.mDown)
						},
						!1),
						this.percentsEvent = new CustomEvent(t, {})
					}
				}
			},
			{
				key: "removeEvents",
				value: function() {
					Object(d.a)(c.a).off("mousemove", this.moveHandler),
					Object(d.a)(c.a).off("mouseup", this.upHandler)
				}
			},
			{
				key: "init",
				value: function() {
					function i() {
						return a.percentsEvent
					}
					function n() {
						Object(d.a)(c.a).on("mousemove", e),
						Object(d.a)(c.a).on("mouseup", l),
						r = a.TW = a.touchW,
						s = a.touchX,
						o = !0
					}
					var r, a = this,
					t = this.touch,
					o = !1,
					s = 0,
					e = this.moveHandler = function(t) {
						var e; (a.mDown || o) && (e = (e = (e = a.page(t) - s) < 0 ? 0 : e) > r ? r: e, a.percents = e / r),
						a.mDown && (a.originTouch.dispatchEvent(i()), c.a.getSelection ? c.a.getSelection().removeAllRanges() : u.a.selection.empty()),
						o && !a.mDown && (a.mOver = !0, a.originTouch.dispatchEvent(i()))
					},
					l = this.upHandler = function(t) {
						a.mDown = !1,
						h.a.isIpad && a.originTouch.dispatchEvent(i())
					};
					t.on("mousedown",
					function(t) {
						if (1 === t.which) {
							a.mDown = !0,
							a.mOver = !1;
							var e = a.offset(t);
							o || n(),
							a.percents = e / r,
							a.originTouch.dispatchEvent(i())
						}
					}),
					t.on("mouseover", n),
					t.on("mouseout",
					function(t) {
						o = !1,
						a.mDown || a.removeEvents()
					})
				}
			},
			{
				key: "touchW",
				get: function() {
					return "col" === this.direction ? this.touch.height() : this.touch.width()
				}
			},
			{
				key: "touchX",
				get: function() {
					return "col" === this.direction ? this.touch.offset().top: this.touch.offset().left
				}
			}]),
			i
		} ();
		e.a = p
	},
	function(t, e, i) {
		t.exports = i(232)
	},
	function(t, e, i) {
		"use strict";
		function n() {
			return '\n  <div class="pv-progress-wrap">\n  <div class="'.concat(progress.touchTime, '">\n    <div class="pv-thumbnail"></div>\n    <div class="pv-currenttime">00:00</div>\n  </div>\n   <div class="').concat(progress.touch, '"></div>\n   <div class="pv-progress-bg">\n     <div class="').concat(progress.buffer, '"></div>\n     <div class="pv-progress-current">\n       <div class="').concat(progress.current, '"></div>\n       <span class="pv-progress-target"></span>\n     </div>\n     <div class="').concat(progress.point, '"></div>\n   </div>\n  </div>\n  ')
		}
		i.d(e, "a",
		function() {
			return n
		})
	},
	function(t, e, i) {
		var n = i(57),
		r = Math.min;
		t.exports = function(t) {
			return 0 < t ? r(n(t), 9007199254740991) : 0
		}
	},
	function(t, e, i) {
		var n = i(30),
		r = i(62);
		t.exports = i(25) ?
		function(t, e, i) {
			return n.f(t, e, r(1, i))
		}: function(t, e, i) {
			return t[e] = i,
			t
		}
	},
	function(t, e) {
		var i = {}.hasOwnProperty;
		t.exports = function(t, e) {
			return i.call(t, e)
		}
	},
	function(t, e, i) {
		t.exports = i(196)
	},
	function(t, e) {
		var i = t.exports = {
			version: "2.6.11"
		};
		"number" == typeof __e && (__e = i)
	},
	function(t, e, i) {
		var n = i(71),
		r = i(112),
		a = i(87),
		o = Object.defineProperty;
		e.f = i(32) ? Object.defineProperty: function(t, e, i) {
			if (n(t), e = a(e, !0), n(i), r) try {
				return o(t, e, i)
			} catch(t) {}
			if ("get" in i || "set" in i) throw TypeError("Accessors not supported!");
			return "value" in i && (t[e] = i.value),
			t
		}
	},
	function(t, e) {
		var i = {}.hasOwnProperty;
		t.exports = function(t, e) {
			return i.call(t, e)
		}
	},
	function(t, e, i) {
		var a = i(46);
		t.exports = function(n, r, t) {
			if (a(n), void 0 === r) return n;
			switch (t) {
			case 1:
				return function(t) {
					return n.call(r, t)
				};
			case 2:
				return function(t, e) {
					return n.call(r, t, e)
				};
			case 3:
				return function(t, e, i) {
					return n.call(r, t, e, i)
				}
			}
			return function() {
				return n.apply(r, arguments)
			}
		}
	},
	function(t, e) {
		t.exports = function(t) {
			if ("function" != typeof t) throw TypeError(t + " is not a function!");
			return t
		}
	},
	function(t, e) {
		t.exports = {}
	},
	function(t, e, i) {
		var n = i(134),
		r = i(101);
		t.exports = Object.keys ||
		function(t) {
			return n(t, r)
		}
	},
	function(t, e, i) {
		var n = i(75);
		t.exports = function(t) {
			return Object(n(t))
		}
	},
	function(t, e, i) {
		t.exports = i(219)
	},
	function(t, e, i) {
		"use strict";
		var n = i(4),
		r = i.n(n),
		a = i(2),
		o = i.n(a),
		s = function() {
			function n(t, e, i) {
				r()(this, n),
				this.ctrl = t,
				this.wrap = e,
				this.cls = i,
				this._init()
			}
			return o()(n, [{
				key: "_init",
				value: function() {
					var e, i = this.cls,
					t = this.wrap,
					n = this.ctrl,
					r = !1,
					a = "move";
					e = setTimeout(function() {
						n.classList.remove(i)
					},
					5e3);
					function o(t) {
						a = t.type,
						clearTimeout(e),
						r || (n.classList.add(i), r = !0),
						e = setTimeout(function() {
							n.classList.remove(i),
							r = !1
						},
						3e3)
					}
					t.addEventListener("mousemove", o, !1),
					t.addEventListener("mouseleave",
					function() {
						"click" !== a && (clearTimeout(e), clearTimeout(void 0), n.classList.remove(i), r = !1)
					}),
					t.addEventListener("click", o)
				}
			}]),
			n
		} ();
		e.a = s
	},
	function(t, e, i) {
		t.exports = i(236)
	},
	function(t, e, i) {
		t.exports = i(239)
	},
	function(t, e, i) {
		t.exports = i(241)
	},
	function(t, e) {
		t.exports = function(t) {
			return "object" == typeof t ? null !== t: "function" == typeof t
		}
	},
	function(t, e) {
		var i = 0,
		n = Math.random();
		t.exports = function(t) {
			return "Symbol(".concat(void 0 === t ? "": t, ")_", (++i + n).toString(36))
		}
	},
	function(t, e) {
		var i = Math.ceil,
		n = Math.floor;
		t.exports = function(t) {
			return isNaN(t = +t) ? 0 : (0 < t ? n: i)(t)
		}
	},
	function(t, e, i) {
		var n = i(122);
		t.exports = function(t) {
			return Object(n(t))
		}
	},
	function(t, e) {
		t.exports = {}
	},
	function(t, e, i) {
		"use strict";
		var n = i(189)(!0);
		i(130)(String, "String",
		function(t) {
			this._t = String(t),
			this._i = 0
		},
		function() {
			var t, e = this._t,
			i = this._i;
			return i >= e.length ? {
				value: void 0,
				done: !0
			}: (t = n(e, i), this._i += t.length, {
				value: t,
				done: !1
			})
		})
	},
	function(t, e) {
		t.exports = !0
	},
	function(t, e) {
		t.exports = function(t, e) {
			return {
				enumerable: !(1 & t),
				configurable: !(2 & t),
				writable: !(4 & t),
				value: e
			}
		}
	},
	function(t, e) {
		var i = {}.toString;
		t.exports = function(t) {
			return i.call(t).slice(8, -1)
		}
	},
	function(t, e) {
		e.f = {}.propertyIsEnumerable
	},
	function(t, e, i) {
		"use strict";
		t.exports = function(t, e) {
			return e = e || {},
			"string" != typeof(t = t && t.__esModule ? t.
		default:
			t) ? t: (/^['"].*['"]$/.test(t) && (t = t.slice(1, -1)), e.hash && (t += e.hash), /["'() \t\n]/.test(t) || e.needQuotes ? '"'.concat(t.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : t)
		}
	},
	function(t, e) {
		var i;
		i = function() {
			return this
		} ();
		try {
			i = i || new Function("return this")()
		} catch(t) {
			"object" == typeof window && (i = window)
		}
		t.exports = i
	},
	function(t, e) {
		t.exports = function(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}
	},
	function(t, e, i) {
		t.exports = i(252)
	},
	function(t, e) {
		t.exports = function(t) {
			try {
				return !! t()
			} catch(t) {
				return ! 0
			}
		}
	},
	function(t, e) {
		t.exports = !1
	},
	function(t, e, i) {
		var n = i(55);
		t.exports = function(t) {
			if (!n(t)) throw TypeError(t + " is not an object!");
			return t
		}
	},
	function(t, e) {
		t.exports = function(t, e) {
			return {
				enumerable: !(1 & t),
				configurable: !(2 & t),
				writable: !(4 & t),
				value: e
			}
		}
	},
	function(t, e, i) {
		var n = i(121),
		r = i(122);
		t.exports = function(t) {
			return n(r(t))
		}
	},
	function(t, e, i) {
		var n = i(57),
		r = Math.max,
		a = Math.min;
		t.exports = function(t, e) {
			return (t = n(t)) < 0 ? r(t + e, 0) : a(t, e)
		}
	},
	function(t, e) {
		t.exports = function(t) {
			if (null == t) throw TypeError("Can't call method on  " + t);
			return t
		}
	},
	function(t, e, n) {
		function r() {}
		var a = n(24),
		o = n(133),
		s = n(101),
		l = n(99)("IE_PROTO"),
		c = "prototype",
		u = function() {
			var t, e = n(96)("iframe"),
			i = s.length;
			for (e.style.display = "none", n(136).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), u = t.F; i--;) delete u[c][s[i]];
			return u()
		};
		t.exports = Object.create ||
		function(t, e) {
			var i;
			return null !== t ? (r[c] = a(t), i = new r, r[c] = null, i[l] = t) : i = u(),
			void 0 === e ? i: o(i, e)
		}
	},
	function(t, e) {
		var i = 0,
		n = Math.random();
		t.exports = function(t) {
			return "Symbol(".concat(void 0 === t ? "": t, ")_", (++i + n).toString(36))
		}
	},
	function(t, e, i) {
		var n = i(30).f,
		r = i(40),
		a = i(21)("toStringTag");
		t.exports = function(t, e, i) {
			t && !r(t = i ? t: t.prototype, a) && n(t, a, {
				configurable: !0,
				value: e
			})
		}
	},
	function(t, e, i) {
		i(193);
		for (var n = i(17), r = i(39), a = i(47), o = i(21)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), l = 0; l < s.length; l++) {
			var c = s[l],
			u = n[c],
			d = u && u.prototype;
			d && !d[o] && r(d, o, c),
			a[c] = a.Array
		}
	},
	function(t, e) {
		e.f = Object.getOwnPropertySymbols
	},
	function(t, e, i) {
		var n = i(64),
		r = i(62),
		a = i(31),
		o = i(97),
		s = i(40),
		l = i(131),
		c = Object.getOwnPropertyDescriptor;
		e.f = i(25) ? c: function(t, e) {
			if (t = a(t), e = o(e, !0), l) try {
				return c(t, e)
			} catch(t) {}
			if (s(t, e)) return r(!n.f.call(t, e), t[e])
		}
	},
	function(t, e, i) {
		t.exports = i(234)
	},
	function(t, e, i) {
		"use strict";
		e.a = {
			select: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n  \t viewBox="0 0 1024 1024" style="enable-background:new 0 0 1024 1024;" xml:space="preserve">\n  \t<path d="M1000.2,107.7c-31.8-31.9-83.3-31.9-115.1,0L416.8,730.5L138.3,451.4c-31.6-31.7-82.9-31.7-114.5,0\n  \t\t\tc-31.6,31.7-31.6,83.1,0,114.8l322.1,322.8c4,10,10,19.3,18,27.4c20.9,20.9,50.3,28.1,77,21.6c16.6-2.4,32.7-10.1,45.5-22.9\n  \t\t\tc10.4-10.4,17.3-22.9,20.9-36.2l493-655.7C1031.9,191.2,1031.9,139.6,1000.2,107.7z"/>\n  </svg>',
			arrowDown: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\nviewBox="0 0 1024 1024" style="enable-background:new 0 0 1024 1024;" xml:space="preserve">\n    <path class="st0" d="M995.5,236.1c-37.9-37.9-99.5-37.9-137.4,0L514,580.3L166.7,233c-38.1-38.1-100-38.1-138.1,0 c-38.1,38.1-38.1,100,0,138.1l392.8,392.8c4.6,9.8,11,19,19.1,27.2c20,20,46.6,29.5,72.9,28.4c26.3,1.1,53-8.4,73.1-28.5\nc8.4-8.4,14.9-17.9,19.6-28l389.4-389.4C1033.5,335.6,1033.5,274,995.5,236.1z"/>\n  </svg>',
			arrowRight: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 1024 1024" style="enable-background:new 0 0 1024 1024;" xml:space="preserve">\n<path class="st0" d="M818.8,510.5c1-26.3-8.4-52.9-28.5-73c-8.4-8.4-17.8-14.9-28-19.6L373.8,28.5c-37.9-37.9-99.3-37.9-137.1,0\n\t\t\tc-37.9,37.9-37.9,99.5,0,137.4L580.1,510L233.6,857.3c-38.1,38.1-38.1,100,0,138.1c38.1,38.1,99.8,38.1,137.8,0l391.9-392.8\n\t\t\tc9.8-4.6,19-11,27.1-19.2C810.6,563.4,820,536.7,818.8,510.5z"/>\n</svg>',
			arrowLeft: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 1024 1024" style="enable-background:new 0 0 1024 1024;" xml:space="preserve">\n\t<path class="st0" d="M790.4,857.3L443.9,510l343.5-344.2c37.9-37.9,37.9-99.5,0-137.4c-37.9-37.9-99.3-37.9-137.1,0L261.6,417.9\n\t\t\tc-10.1,4.7-19.6,11.2-28,19.6c-20.1,20.1-29.5,46.8-28.5,73.1c-1.1,26.2,8.3,52.8,28.3,72.9c8.1,8.1,17.3,14.5,27.1,19.1\n\t\t\tl392,392.8c38.1,38.1,99.8,38.1,137.8,0C828.4,957.3,828.4,895.4,790.4,857.3z"/>\n</svg>'
		}
	},
	function(t, e, i) {
		"use strict";
		var n, r = "object" == typeof Reflect ? Reflect: null,
		u = r && "function" == typeof r.apply ? r.apply: function(t, e, i) {
			return Function.prototype.apply.call(t, e, i)
		};
		n = r && "function" == typeof r.ownKeys ? r.ownKeys: Object.getOwnPropertySymbols ?
		function(t) {
			return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
		}: function(t) {
			return Object.getOwnPropertyNames(t)
		};
		var a = Number.isNaN ||
		function(t) {
			return t != t
		};
		function o() {
			o.init.call(this)
		} ((t.exports = o).EventEmitter = o).prototype._events = void 0,
		o.prototype._eventsCount = 0,
		o.prototype._maxListeners = void 0;
		var s = 10;
		function c(t) {
			if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
		}
		function d(t) {
			return void 0 === t._maxListeners ? o.defaultMaxListeners: t._maxListeners
		}
		function l(t, e, i, n) {
			var r, a, o, s;
			if (c(i), void 0 === (a = t._events) ? (a = t._events = Object.create(null), t._eventsCount = 0) : (void 0 !== a.newListener && (t.emit("newListener", e, i.listener ? i.listener: i), a = t._events), o = a[e]), void 0 === o) o = a[e] = i,
			++t._eventsCount;
			else if ("function" == typeof o ? o = a[e] = n ? [i, o] : [o, i] : n ? o.unshift(i) : o.push(i), 0 < (r = d(t)) && o.length > r && !o.warned) {
				o.warned = !0;
				var l = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
				l.name = "MaxListenersExceededWarning",
				l.emitter = t,
				l.type = e,
				l.count = o.length,
				s = l,
				console && console.warn && console.warn(s)
			}
			return t
		}
		function h(t, e, i) {
			var n = {
				fired: !1,
				wrapFn: void 0,
				target: t,
				type: e,
				listener: i
			},
			r = function() {
				if (!this.fired) return this.target.removeListener(this.type, this.wrapFn),
				this.fired = !0,
				0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
			}.bind(n);
			return r.listener = i,
			n.wrapFn = r
		}
		function p(t, e, i) {
			var n = t._events;
			if (void 0 === n) return [];
			var r = n[e];
			return void 0 === r ? [] : "function" == typeof r ? i ? [r.listener || r] : [r] : i ?
			function(t) {
				for (var e = new Array(t.length), i = 0; i < e.length; ++i) e[i] = t[i].listener || t[i];
				return e
			} (r) : v(r, r.length)
		}
		function f(t) {
			var e = this._events;
			if (void 0 !== e) {
				var i = e[t];
				if ("function" == typeof i) return 1;
				if (void 0 !== i) return i.length
			}
			return 0
		}
		function v(t, e) {
			for (var i = new Array(e), n = 0; n < e; ++n) i[n] = t[n];
			return i
		}
		Object.defineProperty(o, "defaultMaxListeners", {
			enumerable: !0,
			get: function() {
				return s
			},
			set: function(t) {
				if ("number" != typeof t || t < 0 || a(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
				s = t
			}
		}),
		o.init = function() {
			void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0),
			this._maxListeners = this._maxListeners || void 0
		},
		o.prototype.setMaxListeners = function(t) {
			if ("number" != typeof t || t < 0 || a(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
			return this._maxListeners = t,
			this
		},
		o.prototype.getMaxListeners = function() {
			return d(this)
		},
		o.prototype.emit = function(t) {
			for (var e = [], i = 1; i < arguments.length; i++) e.push(arguments[i]);
			var n = "error" === t,
			r = this._events;
			if (void 0 !== r) n = n && void 0 === r.error;
			else if (!n) return ! 1;
			if (n) {
				var a;
				if (0 < e.length && (a = e[0]), a instanceof Error) throw a;
				var o = new Error("Unhandled error." + (a ? " (" + a.message + ")": ""));
				throw o.context = a,
				o
			}
			var s = r[t];
			if (void 0 === s) return ! 1;
			if ("function" == typeof s) u(s, this, e);
			else {
				var l = s.length,
				c = v(s, l);
				for (i = 0; i < l; ++i) u(c[i], this, e)
			}
			return ! 0
		},
		o.prototype.on = o.prototype.addListener = function(t, e) {
			return l(this, t, e, !1)
		},
		o.prototype.prependListener = function(t, e) {
			return l(this, t, e, !0)
		},
		o.prototype.once = function(t, e) {
			return c(e),
			this.on(t, h(this, t, e)),
			this
		},
		o.prototype.prependOnceListener = function(t, e) {
			return c(e),
			this.prependListener(t, h(this, t, e)),
			this
		},
		o.prototype.off = o.prototype.removeListener = function(t, e) {
			var i, n, r, a, o;
			if (c(e), void 0 === (n = this._events)) return this;
			if (void 0 === (i = n[t])) return this;
			if (i === e || i.listener === e) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete n[t], n.removeListener && this.emit("removeListener", t, i.listener || e));
			else if ("function" != typeof i) {
				for (r = -1, a = i.length - 1; 0 <= a; a--) if (i[a] === e || i[a].listener === e) {
					o = i[a].listener,
					r = a;
					break
				}
				if (r < 0) return this;
				0 === r ? i.shift() : function(t, e) {
					for (; e + 1 < t.length; e++) t[e] = t[e + 1];
					t.pop()
				} (i, r),
				1 === i.length && (n[t] = i[0]),
				void 0 !== n.removeListener && this.emit("removeListener", t, o || e)
			}
			return this
		},
		o.prototype.removeAllListeners = function(t) {
			var e, i, n;
			if (void 0 === (i = this._events)) return this;
			if (void 0 === i.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== i[t] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete i[t]),
			this;
			if (0 === arguments.length) {
				var r, a = Object.keys(i);
				for (n = 0; n < a.length; ++n)"removeListener" !== (r = a[n]) && this.removeAllListeners(r);
				return this.removeAllListeners("removeListener"),
				this._events = Object.create(null),
				this._eventsCount = 0,
				this
			}
			if ("function" == typeof(e = i[t])) this.removeListener(t, e);
			else if (void 0 !== e) for (n = e.length - 1; 0 <= n; n--) this.removeListener(t, e[n]);
			return this
		},
		o.prototype.listeners = function(t) {
			return p(this, t, !0)
		},
		o.prototype.rawListeners = function(t) {
			return p(this, t, !1)
		},
		o.listenerCount = function(t, e) {
			return "function" == typeof t.listenerCount ? t.listenerCount(e) : f.call(t, e)
		},
		o.prototype.listenerCount = f,
		o.prototype.eventNames = function() {
			return 0 < this._eventsCount ? n(this._events) : []
		}
	},
	function(t, e, i) {
		t.exports = i(275)
	},
	function(t, e, i) {
		var v = i(27),
		g = i(42),
		m = i(33),
		A = i(88),
		y = i(90),
		b = "prototype",
		w = function(t, e, i) {
			var n, r, a, o, s = t & w.F,
			l = t & w.G,
			c = t & w.S,
			u = t & w.P,
			d = t & w.B,
			h = l ? v: c ? v[e] || (v[e] = {}) : (v[e] || {})[b],
			p = l ? g: g[e] || (g[e] = {}),
			f = p[b] || (p[b] = {});
			for (n in l && (i = e), i) a = ((r = !s && h && void 0 !== h[n]) ? h: i)[n],
			o = d && r ? y(a, v) : u && "function" == typeof a ? y(Function.call, a) : a,
			h && A(h, n, a, t & w.U),
			p[n] != a && m(p, n, o),
			u && f[n] != a && (f[n] = a)
		};
		v.core = g,
		w.F = 1,
		w.G = 2,
		w.S = 4,
		w.P = 8,
		w.B = 16,
		w.W = 32,
		w.U = 64,
		w.R = 128,
		t.exports = w
	},
	function(t, e, i) {
		var r = i(55);
		t.exports = function(t, e) {
			if (!r(t)) return t;
			var i, n;
			if (e && "function" == typeof(i = t.toString) && !r(n = i.call(t))) return n;
			if ("function" == typeof(i = t.valueOf) && !r(n = i.call(t))) return n;
			if (!e && "function" == typeof(i = t.toString) && !r(n = i.call(t))) return n;
			throw TypeError("Can't convert object to primitive value")
		}
	},
	function(t, e, i) {
		var a = i(27),
		o = i(33),
		s = i(44),
		l = i(56)("src"),
		n = i(165),
		c = ("" + n).split("toString");
		i(42).inspectSource = function(t) {
			return n.call(t)
		},
		(t.exports = function(t, e, i, n) {
			var r = "function" == typeof i;
			r && (s(i, "name") || o(i, "name", e)),
			t[e] !== i && (r && (s(i, l) || o(i, l, t[e] ? "" + t[e] : c.join(String(e)))), t === a ? t[e] = i: n ? t[e] ? t[e] = i: o(t, e, i) : (delete t[e], o(t, e, i)))
		})(Function.prototype, "toString",
		function() {
			return "function" == typeof this && this[l] || n.call(this)
		})
	},
	function(t, e, i) {
		var n = i(42),
		r = i(27),
		a = "__core-js_shared__",
		o = r[a] || (r[a] = {}); (t.exports = function(t, e) {
			return o[t] || (o[t] = void 0 !== e ? e: {})
		})("versions", []).push({
			version: n.version,
			mode: i(70) ? "pure": "global",
			copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
		})
	},
	function(t, e, i) {
		var a = i(114);
		t.exports = function(n, r, t) {
			if (a(n), void 0 === r) return n;
			switch (t) {
			case 1:
				return function(t) {
					return n.call(r, t)
				};
			case 2:
				return function(t, e) {
					return n.call(r, t, e)
				};
			case 3:
				return function(t, e, i) {
					return n.call(r, t, e, i)
				}
			}
			return function() {
				return n.apply(r, arguments)
			}
		}
	},
	function(t, e) {
		var i = {}.toString;
		t.exports = function(t) {
			return i.call(t).slice(8, -1)
		}
	},
	function(t, e, i) {
		var n = i(89)("keys"),
		r = i(56);
		t.exports = function(t) {
			return n[t] || (n[t] = r(t))
		}
	},
	function(t, e) {
		t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
	},
	function(t, e, i) {
		var n = i(43).f,
		r = i(44),
		a = i(23)("toStringTag");
		t.exports = function(t, e, i) {
			t && !r(t = i ? t: t.prototype, a) && n(t, a, {
				configurable: !0,
				value: e
			})
		}
	},
	function(t, e) {
		var i = Math.ceil,
		n = Math.floor;
		t.exports = function(t) {
			return isNaN(t = +t) ? 0 : (0 < t ? n: i)(t)
		}
	},
	function(t, e, i) {
		var n = i(28),
		r = i(17).document,
		a = n(r) && n(r.createElement);
		t.exports = function(t) {
			return a ? r.createElement(t) : {}
		}
	},
	function(t, e, i) {
		var r = i(28);
		t.exports = function(t, e) {
			if (!r(t)) return t;
			var i, n;
			if (e && "function" == typeof(i = t.toString) && !r(n = i.call(t))) return n;
			if ("function" == typeof(i = t.valueOf) && !r(n = i.call(t))) return n;
			if (!e && "function" == typeof(i = t.toString) && !r(n = i.call(t))) return n;
			throw TypeError("Can't convert object to primitive value")
		}
	},
	function(t, e, i) {
		var n = i(95),
		r = Math.min;
		t.exports = function(t) {
			return 0 < t ? r(n(t), 9007199254740991) : 0
		}
	},
	function(t, e, i) {
		var n = i(100)("keys"),
		r = i(77);
		t.exports = function(t) {
			return n[t] || (n[t] = r(t))
		}
	},
	function(t, e, i) {
		var n = i(9),
		r = i(17),
		a = "__core-js_shared__",
		o = r[a] || (r[a] = {}); (t.exports = function(t, e) {
			return o[t] || (o[t] = void 0 !== e ? e: {})
		})("versions", []).push({
			version: n.version,
			mode: i(61) ? "pure": "global",
			copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
		})
	},
	function(t, e) {
		t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
	},
	function(t, e, i) {
		e.f = i(21)
	},
	function(t, e, i) {
		var n = i(17),
		r = i(9),
		a = i(61),
		o = i(102),
		s = i(30).f;
		t.exports = function(t) {
			var e = r.Symbol || (r.Symbol = !a && n.Symbol || {});
			"_" == t.charAt(0) || t in e || s(e, t, {
				value: o.f(t)
			})
		}
	},
	function(t, e, i) {
		var n = i(134),
		r = i(101).concat("length", "prototype");
		e.f = Object.getOwnPropertyNames ||
		function(t) {
			return n(t, r)
		}
	},
	function(t, e) {
		t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
	},
	function(t, e, i) {
		var r = i(15),
		a = i(9),
		o = i(34);
		t.exports = function(t, e) {
			var i = (a.Object || {})[t] || Object[t],
			n = {};
			n[t] = e(i),
			r(r.S + r.F * o(function() {
				i(1)
			}), "Object", n)
		}
	},
	function(t, e, i) {
		var r = i(63),
		a = i(21)("toStringTag"),
		o = "Arguments" == r(function() {
			return arguments
		} ());
		t.exports = function(t) {
			var e, i, n;
			return void 0 === t ? "Undefined": null === t ? "Null": "string" == typeof(i = function(t, e) {
				try {
					return t[e]
				} catch(t) {}
			} (e = Object(t), a)) ? i: o ? r(e) : "Object" == (n = r(e)) && "function" == typeof e.callee ? "Arguments": n
		}
	},
	function(t, e, i) {
		var n = i(107),
		r = i(21)("iterator"),
		a = i(47);
		t.exports = i(9).getIteratorMethod = function(t) {
			if (null != t) return t[r] || t["@@iterator"] || a[n(t)]
		}
	},
	function(t, e, i) {
		"use strict";
		var r = i(46);
		function n(t) {
			var i, n;
			this.promise = new t(function(t, e) {
				if (void 0 !== i || void 0 !== n) throw TypeError("Bad Promise constructor");
				i = t,
				n = e
			}),
			this.resolve = r(i),
			this.reject = r(n)
		}
		t.exports.f = function(t) {
			return new n(t)
		}
	},
	function(t, e, i) {
		"use strict";
		i.d(e, "a",
		function() {
			return w
		});
		var n = i(68),
		r = i.n(n),
		a = i(4),
		o = i.n(a),
		s = i(67),
		l = i.n(s),
		c = i(2),
		u = i.n(c),
		d = i(157),
		h = i.n(d),
		p = i(158),
		f = i.n(p),
		v = i(111),
		g = i.n(v),
		m = i(0),
		A = i.n(m),
		y = i(84);
		function b(n) {
			return function() {
				var t, e = g()(n);
				if (function() {
					if ("undefined" == typeof Reflect || !r.a) return;
					if (r.a.sham) return;
					if ("function" == typeof Proxy) return 1;
					try {
						return Date.prototype.toString.call(r()(Date, [],
						function() {})),
						1
					} catch(t) {
						return
					}
				} ()) {
					var i = g()(this).constructor;
					t = r()(e, arguments, i)
				} else t = e.apply(this, arguments);
				return f()(this, t)
			}
		}
		var w = function(t) {
			h()(a, t);
			var r = b(a);
			function a(t, e, i) {
				var n;
				return o()(this, a),
				(n = r.call(this)).player = t,
				A()(l()(n), "_line", void 0),
				A()(l()(n), "originLine", void 0),
				A()(l()(n), "cdns", void 0),
				n._line = e,
				n.originLine = e,
				n.cdns = a.parseCDNTypes(e, i || ""),
				n
			}
			return u()(a, [{
				key: "hasMultiLine",
				value: function() {
					return 1 < this.cdns.length
				}
			},
			{
				key: "switchLine",
				value: function(t) {
					if ( - 1 === this.cdns.indexOf(t) || !this.player.hls) return ! 1;
					var e = this.lineIndex;
					return this.player.hls.switchLine(t),
					this._line = t,
					this.emit("linechange", this.lineIndex, e),
					!0
				}
			},
			{
				key: "switchLineByIndex",
				value: function(t) {
					return !! this.cdns[t] && this.switchLine(this.cdns[t])
				}
			},
			{
				key: "switchToNextLine",
				value: function() {
					var t = this.lineIndex + 1;
					return this.lineIndex === this.lines - 1 && (t = 0),
					this.switchLineByIndex(t)
				}
			},
			{
				key: "line",
				get: function() {
					return this._line
				}
			},
			{
				key: "lines",
				get: function() {
					return this.cdns.length
				}
			},
			{
				key: "lineIndex",
				get: function() {
					return this.cdns.indexOf(this.line)
				}
			}], [{
				key: "parseCDNTypes",
				value: function(e, t) {
					var i = t.split(",").filter(function(t) {
						return t && t !== e && "kw" !== t
					});
					return i.unshift(e),
					i
				}
			}]),
			a
		} (y.EventEmitter)
	},
	function(e, t, i) {
		var n = i(262),
		r = i(156);
		function a(t) {
			return e.exports = a = r ? n: function(t) {
				return t.__proto__ || n(t)
			},
			a(t)
		}
		e.exports = a
	},
	function(t, e, i) {
		t.exports = !i(32) && !i(69)(function() {
			return 7 != Object.defineProperty(i(113)("div"), "a", {
				get: function() {
					return 7
				}
			}).a
		})
	},
	function(t, e, i) {
		var n = i(55),
		r = i(27).document,
		a = n(r) && n(r.createElement);
		t.exports = function(t) {
			return a ? r.createElement(t) : {}
		}
	},
	function(t, e) {
		t.exports = function(t) {
			if ("function" != typeof t) throw TypeError(t + " is not a function!");
			return t
		}
	},
	function(t, e, i) {
		for (var n, r = i(27), a = i(33), o = i(56), s = o("typed_array"), l = o("view"), c = !(!r.ArrayBuffer || !r.DataView), u = c, d = 0, h = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); d < 9;)(n = r[h[d++]]) ? (a(n.prototype, s, !0), a(n.prototype, l, !0)) : u = !1;
		t.exports = {
			ABV: c,
			CONSTR: u,
			TYPED: s,
			VIEW: l
		}
	},
	function(t, e, i) {
		var r = i(88);
		t.exports = function(t, e, i) {
			for (var n in e) r(t, n, e[n], i);
			return t
		}
	},
	function(t, e) {
		t.exports = function(t, e, i, n) {
			if (! (t instanceof e) || void 0 !== n && n in t) throw TypeError(i + ": incorrect invocation!");
			return t
		}
	},
	function(t, e, i) {
		var n = i(57),
		r = i(38);
		t.exports = function(t) {
			if (void 0 === t) return 0;
			var e = n(t),
			i = r(e);
			if (e !== i) throw RangeError("Wrong length!");
			return i
		}
	},
	function(t, e, i) {
		var n = i(120),
		r = i(93).concat("length", "prototype");
		e.f = Object.getOwnPropertyNames ||
		function(t) {
			return n(t, r)
		}
	},
	function(t, e, i) {
		var o = i(44),
		s = i(73),
		l = i(123)(!1),
		c = i(92)("IE_PROTO");
		t.exports = function(t, e) {
			var i, n = s(t),
			r = 0,
			a = [];
			for (i in n) i != c && o(n, i) && a.push(i);
			for (; e.length > r;) o(n, i = e[r++]) && (~l(a, i) || a.push(i));
			return a
		}
	},
	function(t, e, i) {
		var n = i(91);
		t.exports = Object("z").propertyIsEnumerable(0) ? Object: function(t) {
			return "String" == n(t) ? t.split("") : Object(t)
		}
	},
	function(t, e) {
		t.exports = function(t) {
			if (null == t) throw TypeError("Can't call method on  " + t);
			return t
		}
	},
	function(t, e, i) {
		var l = i(73),
		c = i(38),
		u = i(74);
		t.exports = function(s) {
			return function(t, e, i) {
				var n, r = l(t),
				a = c(r.length),
				o = u(i, a);
				if (s && e != e) {
					for (; o < a;) if ((n = r[o++]) != n) return ! 0
				} else for (; o < a; o++) if ((s || o in r) && r[o] === e) return s || o || 0;
				return ! s && -1
			}
		}
	},
	function(t, e, i) {
		"use strict";
		var c = i(58),
		u = i(74),
		d = i(38);
		t.exports = function(t, e, i) {
			for (var n = c(this), r = d(n.length), a = arguments.length, o = u(1 < a ? e: void 0, r), s = 2 < a ? i: void 0, l = void 0 === s ? r: u(s, r); o < l;) n[o++] = t;
			return n
		}
	},
	function(t, e, i) {
		var r = i(91),
		a = i(23)("toStringTag"),
		o = "Arguments" == r(function() {
			return arguments
		} ());
		t.exports = function(t) {
			var e, i, n;
			return void 0 === t ? "Undefined": null === t ? "Null": "string" == typeof(i = function(t, e) {
				try {
					return t[e]
				} catch(t) {}
			} (e = Object(t), a)) ? i: o ? r(e) : "Object" == (n = r(e)) && "function" == typeof e.callee ? "Arguments": n
		}
	},
	function(t, e, n) {
		function r() {}
		var a = n(71),
		o = n(168),
		s = n(93),
		l = n(92)("IE_PROTO"),
		c = "prototype",
		u = function() {
			var t, e = n(113)("iframe"),
			i = s.length;
			for (e.style.display = "none", n(170).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), u = t.F; i--;) delete u[c][s[i]];
			return u()
		};
		t.exports = Object.create ||
		function(t, e) {
			var i;
			return null !== t ? (r[c] = a(t), i = new r, r[c] = null, i[l] = t) : i = u(),
			void 0 === e ? i: o(i, e)
		}
	},
	function(t, e, i) {
		var n = i(44),
		r = i(58),
		a = i(92)("IE_PROTO"),
		o = Object.prototype;
		t.exports = Object.getPrototypeOf ||
		function(t) {
			return t = r(t),
			n(t, a) ? t[a] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype: t instanceof Object ? o: null
		}
	},
	function(t, e, i) {
		var y = i(90),
		b = i(121),
		w = i(58),
		k = i(38),
		n = i(172);
		t.exports = function(d, t) {
			var h = 1 == d,
			p = 2 == d,
			f = 3 == d,
			v = 4 == d,
			g = 6 == d,
			m = 5 == d || g,
			A = t || n;
			return function(t, e, i) {
				for (var n, r, a = w(t), o = b(a), s = y(e, i, 3), l = k(o.length), c = 0, u = h ? A(t, l) : p ? A(t, 0) : void 0; c < l; c++) if ((m || c in o) && (r = s(n = o[c], c, a), d)) if (h) u[c] = r;
				else if (r) switch (d) {
				case 3:
					return ! 0;
				case 5:
					return n;
				case 6:
					return c;
				case 2:
					u.push(n)
				} else if (v) return ! 1;
				return g ? -1 : f || v ? v: u
			}
		}
	},
	function(t, e, i) {
		var n = i(23)("unscopables"),
		r = Array.prototype;
		null == r[n] && i(33)(r, n, {}),
		t.exports = function(t) {
			r[n][t] = !0
		}
	},
	function(t, e, i) {
		"use strict";
		function y() {
			return this
		}
		var b = i(61),
		w = i(15),
		k = i(132),
		E = i(39),
		x = i(47),
		T = i(190),
		S = i(78),
		_ = i(137),
		C = i(21)("iterator"),
		L = !([].keys && "next" in [].keys()),
		R = "values";
		t.exports = function(t, e, i, n, r, a, o) {
			T(i, e, n);
			function s(t) {
				if (!L && t in f) return f[t];
				switch (t) {
				case "keys":
				case R:
					return function() {
						return new i(this, t)
					}
				}
				return function() {
					return new i(this, t)
				}
			}
			var l, c, u, d = e + " Iterator",
			h = r == R,
			p = !1,
			f = t.prototype,
			v = f[C] || f["@@iterator"] || r && f[r],
			g = v || s(r),
			m = r ? h ? s("entries") : g: void 0,
			A = "Array" == e && f.entries || v;
			if (A && (u = _(A.call(new t))) !== Object.prototype && u.next && (S(u, d, !0), b || "function" == typeof u[C] || E(u, C, y)), h && v && v.name !== R && (p = !0, g = function() {
				return v.call(this)
			}), b && !o || !L && !p && f[C] || E(f, C, g), x[e] = g, x[d] = y, r) if (l = {
				values: h ? g: s(R),
				keys: a ? g: s("keys"),
				entries: m
			},
			o) for (c in l) c in f || k(f, c, l[c]);
			else w(w.P + w.F * (L || p), e, l);
			return l
		}
	},
	function(t, e, i) {
		t.exports = !i(25) && !i(34)(function() {
			return 7 != Object.defineProperty(i(96)("div"), "a", {
				get: function() {
					return 7
				}
			}).a
		})
	},
	function(t, e, i) {
		t.exports = i(39)
	},
	function(t, e, i) {
		var o = i(30),
		s = i(24),
		l = i(48);
		t.exports = i(25) ? Object.defineProperties: function(t, e) {
			s(t);
			for (var i, n = l(e), r = n.length, a = 0; a < r;) o.f(t, i = n[a++], e[i]);
			return t
		}
	},
	function(t, e, i) {
		var o = i(40),
		s = i(31),
		l = i(191)(!1),
		c = i(99)("IE_PROTO");
		t.exports = function(t, e) {
			var i, n = s(t),
			r = 0,
			a = [];
			for (i in n) i != c && o(n, i) && a.push(i);
			for (; e.length > r;) o(n, i = e[r++]) && (~l(a, i) || a.push(i));
			return a
		}
	},
	function(t, e, i) {
		var n = i(63);
		t.exports = Object("z").propertyIsEnumerable(0) ? Object: function(t) {
			return "String" == n(t) ? t.split("") : Object(t)
		}
	},
	function(t, e, i) {
		var n = i(17).document;
		t.exports = n && n.documentElement
	},
	function(t, e, i) {
		var n = i(40),
		r = i(49),
		a = i(99)("IE_PROTO"),
		o = Object.prototype;
		t.exports = Object.getPrototypeOf ||
		function(t) {
			return t = r(t),
			n(t, a) ? t[a] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype: t instanceof Object ? o: null
		}
	},
	function(t, e, i) {
		"use strict";
		function n(t) {
			var e = W[t] = R(U[z]);
			return e._k = t,
			e
		}
		function r(t, e) {
			x(t);
			for (var i, n = k(e = _(e)), r = 0, a = n.length; r < a;) et(t, i = n[r++], e[i]);
			return t
		}
		function a(t) {
			var e = G.call(this, t = C(t, !0));
			return ! (this === Q && u(W, t) && !u(K, t)) && (!(e || !u(this, t) || !u(W, t) || u(this, V) && this[V][t]) || e)
		}
		function o(t, e) {
			if (t = _(t), e = C(e, !0), t !== Q || !u(W, e) || u(K, e)) {
				var i = B(t, e);
				return ! i || !u(W, e) || u(t, V) && t[V][e] || (i.enumerable = !0),
				i
			}
		}
		function s(t) {
			for (var e, i = N(_(t)), n = [], r = 0; i.length > r;) u(W, e = i[r++]) || e == V || e == f || n.push(e);
			return n
		}
		function l(t) {
			for (var e, i = t === Q,
			n = N(i ? K: _(t)), r = [], a = 0; n.length > a;) ! u(W, e = n[a++]) || i && !u(Q, e) || r.push(W[e]);
			return r
		}
		var c = i(17),
		u = i(40),
		d = i(25),
		h = i(15),
		p = i(132),
		f = i(197).KEY,
		v = i(34),
		g = i(100),
		m = i(78),
		A = i(77),
		y = i(21),
		b = i(102),
		w = i(103),
		k = i(198),
		E = i(139),
		x = i(24),
		T = i(28),
		S = i(49),
		_ = i(31),
		C = i(97),
		L = i(62),
		R = i(76),
		D = i(199),
		I = i(81),
		M = i(80),
		P = i(30),
		O = i(48),
		B = I.f,
		F = P.f,
		N = D.f,
		U = c.Symbol,
		q = c.JSON,
		j = q && q.stringify,
		z = "prototype",
		V = y("_hidden"),
		H = y("toPrimitive"),
		G = {}.propertyIsEnumerable,
		Y = g("symbol-registry"),
		W = g("symbols"),
		K = g("op-symbols"),
		Q = Object[z],
		X = "function" == typeof U && !!M.f,
		J = c.QObject,
		Z = !J || !J[z] || !J[z].findChild,
		$ = d && v(function() {
			return 7 != R(F({},
			"a", {
				get: function() {
					return F(this, "a", {
						value: 7
					}).a
				}
			})).a
		}) ?
		function(t, e, i) {
			var n = B(Q, e);
			n && delete Q[e],
			F(t, e, i),
			n && t !== Q && F(Q, e, n)
		}: F,
		tt = X && "symbol" == typeof U.iterator ?
		function(t) {
			return "symbol" == typeof t
		}: function(t) {
			return t instanceof U
		},
		et = function(t, e, i) {
			return t === Q && et(K, e, i),
			x(t),
			e = C(e, !0),
			x(i),
			u(W, e) ? (i.enumerable ? (u(t, V) && t[V][e] && (t[V][e] = !1), i = R(i, {
				enumerable: L(0, !1)
			})) : (u(t, V) || F(t, V, L(1, {})), t[V][e] = !0), $(t, e, i)) : F(t, e, i)
		};
		X || (p((U = function(t) {
			if (this instanceof U) throw TypeError("Symbol is not a constructor!");
			var e = A(0 < arguments.length ? t: void 0),
			i = function(t) {
				this === Q && i.call(K, t),
				u(this, V) && u(this[V], e) && (this[V][e] = !1),
				$(this, e, L(1, t))
			};
			return d && Z && $(Q, e, {
				configurable: !0,
				set: i
			}),
			n(e)
		})[z], "toString",
		function() {
			return this._k
		}), I.f = o, P.f = et, i(104).f = D.f = s, i(64).f = a, M.f = l, d && !i(61) && p(Q, "propertyIsEnumerable", a, !0), b.f = function(t) {
			return n(y(t))
		}),
		h(h.G + h.W + h.F * !X, {
			Symbol: U
		});
		for (var it = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; it.length > nt;) y(it[nt++]);
		for (var rt = O(y.store), at = 0; rt.length > at;) w(rt[at++]);
		h(h.S + h.F * !X, "Symbol", {
			for: function(t) {
				return u(Y, t += "") ? Y[t] : Y[t] = U(t)
			},
			keyFor: function(t) {
				if (!tt(t)) throw TypeError(t + " is not a symbol!");
				for (var e in Y) if (Y[e] === t) return e
			},
			useSetter: function() {
				Z = !0
			},
			useSimple: function() {
				Z = !1
			}
		}),
		h(h.S + h.F * !X, "Object", {
			create: function(t, e) {
				return void 0 === e ? R(t) : r(R(t), e)
			},
			defineProperty: et,
			defineProperties: r,
			getOwnPropertyDescriptor: o,
			getOwnPropertyNames: s,
			getOwnPropertySymbols: l
		});
		var ot = v(function() {
			M.f(1)
		});
		h(h.S + h.F * ot, "Object", {
			getOwnPropertySymbols: function(t) {
				return M.f(S(t))
			}
		}),
		q && h(h.S + h.F * (!X || v(function() {
			var t = U();
			return "[null]" != j([t]) || "{}" != j({
				a: t
			}) || "{}" != j(Object(t))
		})), "JSON", {
			stringify: function(t) {
				for (var e, i, n = [t], r = 1; r < arguments.length;) n.push(arguments[r++]);
				if (i = e = n[1], (T(e) || void 0 !== t) && !tt(t)) return E(e) || (e = function(t, e) {
					if ("function" == typeof i && (e = i.call(this, t, e)), !tt(e)) return e
				}),
				n[1] = e,
				j.apply(q, n)
			}
		}),
		U[z][H] || i(39)(U[z], H, U[z].valueOf),
		m(U, "Symbol"),
		m(Math, "Math", !0),
		m(c.JSON, "JSON", !0)
	},
	function(t, e, i) {
		var n = i(63);
		t.exports = Array.isArray ||
		function(t) {
			return "Array" == n(t)
		}
	},
	function(t, e) {},
	function(t, e) {
		t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAwCAMAAACPHmKLAAABoVBMVEUAAAD/////////////////7e3/7+//////8fH/////8vL/////8vL////////09PT////////////////4+Pj/////////////+fn5+fn6+vr/+vr/+vr6+vr/+vr6+vr6+vr/+vr7+/v/+/v7+/v7+/v/+/v/+/v7+/v7+/v/+/v7+/v7+/v8+Pj8/Pz//Pz//Pz//Pz//Pz8/Pz8/Pz//Pz//Pz8+fn8+fn8+vr9+vr9+vr9+vr9+vr9+/v9+fn9+/v9+/v7+fn9+/v9+/v7+fn9+/v9+/v9+/v7+fn9+/v7+vr8+vr9+vr9/Pz9+vr8+vr8+vr9/Pz8+vr9/Pz8+vr8+vr9/Pz9+vr8+vr8+/v8+/v8+/v8+/v8+vr8+/v++/v8+vr++/v8+vr8+vr9+vr7+vr9+vr9+/v9+vr7+vr8+vr8+fn9+vr9+vr9+/v8+fn9+/v8+vr8+/v8+vr9+/v9+/v8+vr8+vr8+vr8+/v9+/v9+/v8+vr8+vr9+/v9+/v8+vr8+vr8+vr9+/v9+/v8+vr8+vr8+vr9+/v8+vpNlQMSAAAAinRSTlMAAQIDBQ4QERISExMUFBUYGRofIiMjJykqLjAwMTIyNDc3OTo7PD4/QUJFR0hKSktMTVBRUlJUWVxlaWprbnh5eXp9fn+EhYaJioyQk5OUlZaYmJmcnqGho6eqsLW4urq6vb7EyM/R1NTY2d/g4OHj5OTp6uvr7u/w8fHx8vT29vf4+fr6+/z9/v64++u5AAABlUlEQVRIx+2VV1cCMRCFF7FgRbFg712x94IoiL2Lvffeu6LYUO+vNqCeA+wk4OGV+7Y3822SyWQiSQH5J42uVd/ZXpOk8C08Z/gAv7qcLv+DEhN58SXrcNNuo5MpttuLyfiw2S9H2O3qWE/30MK1k1mJZQNGwEgB6YcswjZZqPz5VOYNWJlxrpMkE2AigKI74HMqztWK7nsH3uo5ROY9YG3wdAvYvC/VJBFxBJykyX8Us8N+NEMRc2wgldqdeo8tliBKmV1HZzzl2ZEzGbEBWHiH1EER+cCjmkcEnxLEODDBrxw9QRwDeXwi6kNGxANXQYLy3JIRVcCyqKAHgS53pw0YFRHZtqdcd8cAmIW3RqWS/knI5G1VcnnbuVzesktIfIKUxFVCSViJtETVrm0OJVzHjaqngeR7zFO+49amUQPhu8ASNcDrDJGbwIOWnJzuPhn7gJ2zXKrDhfS+MqCJmy+PLipl9d8w46pSkGKXTm0eWTxzduq1BPGxeL4G243/enEuLGU+PlOaila9oaU2XiEF5I++Ac3noA1CVapLAAAAAElFTkSuQmCC"
	},
	function(t, e, i) {
		function n(t, e, i) {
			var n = {},
			r = s(function() {
				return !! l[t]() || "​" != "​" [t]()
			}),
			a = n[t] = r ? e(d) : l[t];
			i && (n[i] = a),
			o(o.P + o.F * r, "String", n)
		}
		var o = i(15),
		r = i(75),
		s = i(34),
		l = i(105),
		a = "[" + l + "]",
		c = RegExp("^" + a + a + "*"),
		u = RegExp(a + a + "*$"),
		d = n.trim = function(t, e) {
			return t = String(r(t)),
			1 & e && (t = t.replace(c, "")),
			2 & e && (t = t.replace(u, "")),
			t
		};
		t.exports = n
	},
	function(t, e, i) {
		var a = i(24);
		t.exports = function(e, t, i, n) {
			try {
				return n ? t(a(i)[0], i[1]) : t(i)
			} catch(t) {
				var r = e.
				return;
				throw void 0 !== r && a(r.call(e)),
				t
			}
		}
	},
	function(t, e, i) {
		var n = i(47),
		r = i(21)("iterator"),
		a = Array.prototype;
		t.exports = function(t) {
			return void 0 !== t && (n.Array === t || a[r] === t)
		}
	},
	function(t, e, i) {
		var r = i(24),
		a = i(46),
		o = i(21)("species");
		t.exports = function(t, e) {
			var i, n = r(t).constructor;
			return void 0 === n || null == (i = r(n)[o]) ? e: a(i)
		}
	},
	function(t, e, i) {
		function n() {
			var t = +this;
			if (y.hasOwnProperty(t)) {
				var e = y[t];
				delete y[t],
				e()
			}
		}
		function r(t) {
			n.call(t.data)
		}
		var a, o, s, l = i(45),
		c = i(147),
		u = i(136),
		d = i(96),
		h = i(17),
		p = h.process,
		f = h.setImmediate,
		v = h.clearImmediate,
		g = h.MessageChannel,
		m = h.Dispatch,
		A = 0,
		y = {},
		b = "onreadystatechange";
		f && v || (f = function(t) {
			for (var e = [], i = 1; i < arguments.length;) e.push(arguments[i++]);
			return y[++A] = function() {
				c("function" == typeof t ? t: Function(t), e)
			},
			a(A),
			A
		},
		v = function(t) {
			delete y[t]
		},
		"process" == i(63)(p) ? a = function(t) {
			p.nextTick(l(n, t, 1))
		}: m && m.now ? a = function(t) {
			m.now(l(n, t, 1))
		}: g ? (s = (o = new g).port2, o.port1.onmessage = r, a = l(s.postMessage, s, 1)) : h.addEventListener && "function" == typeof postMessage && !h.importScripts ? (a = function(t) {
			h.postMessage(t + "", "*")
		},
		h.addEventListener("message", r, !1)) : a = b in d("script") ?
		function(t) {
			u.appendChild(d("script"))[b] = function() {
				u.removeChild(this),
				n.call(t)
			}
		}: function(t) {
			setTimeout(l(n, t, 1), 0)
		}),
		t.exports = {
			set: f,
			clear: v
		}
	},
	function(t, e) {
		t.exports = function(t, e, i) {
			var n = void 0 === i;
			switch (e.length) {
			case 0:
				return n ? t() : t.call(i);
			case 1:
				return n ? t(e[0]) : t.call(i, e[0]);
			case 2:
				return n ? t(e[0], e[1]) : t.call(i, e[0], e[1]);
			case 3:
				return n ? t(e[0], e[1], e[2]) : t.call(i, e[0], e[1], e[2]);
			case 4:
				return n ? t(e[0], e[1], e[2], e[3]) : t.call(i, e[0], e[1], e[2], e[3])
			}
			return t.apply(i, e)
		}
	},
	function(t, e) {
		t.exports = function(t) {
			try {
				return {
					e: !1,
					v: t()
				}
			} catch(t) {
				return {
					e: !0,
					v: t
				}
			}
		}
	},
	function(t, e, i) {
		var n = i(24),
		r = i(28),
		a = i(109);
		t.exports = function(t, e) {
			if (n(t), r(e) && e.constructor === t) return e;
			var i = a.f(t);
			return (0, i.resolve)(e),
			i.promise
		}
	},
	function(t, e, i) {
		var a = i(21)("iterator"),
		o = !1;
		try {
			var n = [7][a]();
			n.
			return = function() {
				o = !0
			},
			Array.from(n,
			function() {
				throw 2
			})
		} catch(t) {}
		t.exports = function(t, e) {
			if (!e && !o) return ! 1;
			var i = !1;
			try {
				var n = [7],
				r = n[a]();
				r.next = function() {
					return {
						done: i = !0
					}
				},
				n[a] = function() {
					return r
				},
				t(n)
			} catch(t) {}
			return i
		}
	},
	function(t, e, i) {
		"use strict";
		var n = i(30),
		r = i(62);
		t.exports = function(t, e, i) {
			e in t ? n.f(t, e, r(0, i)) : t[e] = i
		}
	},
	function(t, e) {
		t.exports = function(t, e) { (null == e || e > t.length) && (e = t.length);
			for (var i = 0,
			n = new Array(e); i < e; i++) n[i] = t[i];
			return n
		}
	},
	function(t, e, i) {
		t.exports = i(245)
	},
	function(t, e, i) {
		t.exports = i(247)
	},
	function(t, e, i) {
		var n = i(153),
		r = i(152);
		t.exports = function(t, e) {
			if (t) {
				if ("string" == typeof t) return r(t, e);
				var i = Object.prototype.toString.call(t).slice(8, -1);
				return "Object" === i && t.constructor && (i = t.constructor.name),
				"Map" === i || "Set" === i ? n(i) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? r(t, e) : void 0
			}
		}
	},
	function(t, e, i) {
		t.exports = i(259)
	},
	function(t, e, i) {
		var n = i(255),
		r = i(258);
		t.exports = function(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t.prototype = n(e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}),
			e && r(t, e)
		}
	},
	function(t, e, i) {
		var n = i(14),
		r = i(67);
		t.exports = function(t, e) {
			return ! e || "object" !== n(e) && "function" != typeof e ? r(t) : e
		}
	},
	function(t, e, i) {
		var n = i(280),
		r = i(281),
		a = i(155),
		o = i(285);
		t.exports = function(t, e) {
			return n(t) || r(t, e) || a(t, e) || o()
		}
	},
	function(t, e, i) {
		t.exports = i(294)
	},
	function(module, exports, __webpack_require__) { (function(process, global) {
			var __WEBPACK_AMD_DEFINE_RESULT__; !
			function() {
				"use strict";
				var root = "object" == typeof window ? window: {},
				NODE_JS = !root.JS_SHA1_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node;
				NODE_JS && (root = global);
				var COMMON_JS = !root.JS_SHA1_NO_COMMON_JS && "object" == typeof module && module.exports,
				AMD = __webpack_require__(324),
				HEX_CHARS = "0123456789abcdef".split(""),
				EXTRA = [ - 2147483648, 8388608, 32768, 128],
				SHIFT = [24, 16, 8, 0],
				OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"],
				blocks = [],
				createOutputMethod = function(e) {
					return function(t) {
						return new Sha1(!0).update(t)[e]()
					}
				},
				createMethod = function() {
					var e = createOutputMethod("hex");
					NODE_JS && (e = nodeWrap(e)),
					e.create = function() {
						return new Sha1
					},
					e.update = function(t) {
						return e.create().update(t)
					};
					for (var t = 0; t < OUTPUT_TYPES.length; ++t) {
						var i = OUTPUT_TYPES[t];
						e[i] = createOutputMethod(i)
					}
					return e
				},
				nodeWrap = function(method) {
					var crypto = eval("require('crypto')"),
					Buffer = eval("require('buffer').Buffer"),
					nodeMethod = function(t) {
						if ("string" == typeof t) return crypto.createHash("sha1").update(t, "utf8").digest("hex");
						if (t.constructor === ArrayBuffer) t = new Uint8Array(t);
						else if (void 0 === t.length) return method(t);
						return crypto.createHash("sha1").update(new Buffer(t)).digest("hex")
					};
					return nodeMethod
				};
				function Sha1(t) {
					t ? (blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0, this.blocks = blocks) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					this.h0 = 1732584193,
					this.h1 = 4023233417,
					this.h2 = 2562383102,
					this.h3 = 271733878,
					this.h4 = 3285377520,
					this.block = this.start = this.bytes = this.hBytes = 0,
					this.finalized = this.hashed = !1,
					this.first = !0
				}
				Sha1.prototype.update = function(t) {
					if (!this.finalized) {
						var e = "string" != typeof t;
						e && t.constructor === root.ArrayBuffer && (t = new Uint8Array(t));
						for (var i, n, r = 0,
						a = t.length || 0,
						o = this.blocks; r < a;) {
							if (this.hashed && (this.hashed = !1, o[0] = this.block, o[16] = o[1] = o[2] = o[3] = o[4] = o[5] = o[6] = o[7] = o[8] = o[9] = o[10] = o[11] = o[12] = o[13] = o[14] = o[15] = 0), e) for (n = this.start; r < a && n < 64; ++r) o[n >> 2] |= t[r] << SHIFT[3 & n++];
							else for (n = this.start; r < a && n < 64; ++r)(i = t.charCodeAt(r)) < 128 ? o[n >> 2] |= i << SHIFT[3 & n++] : (i < 2048 ? o[n >> 2] |= (192 | i >> 6) << SHIFT[3 & n++] : (i < 55296 || 57344 <= i ? o[n >> 2] |= (224 | i >> 12) << SHIFT[3 & n++] : (i = 65536 + ((1023 & i) << 10 | 1023 & t.charCodeAt(++r)), o[n >> 2] |= (240 | i >> 18) << SHIFT[3 & n++], o[n >> 2] |= (128 | i >> 12 & 63) << SHIFT[3 & n++]), o[n >> 2] |= (128 | i >> 6 & 63) << SHIFT[3 & n++]), o[n >> 2] |= (128 | 63 & i) << SHIFT[3 & n++]);
							this.lastByteIndex = n,
							this.bytes += n - this.start,
							64 <= n ? (this.block = o[16], this.start = n - 64, this.hash(), this.hashed = !0) : this.start = n
						}
						return 4294967295 < this.bytes && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296),
						this
					}
				},
				Sha1.prototype.finalize = function() {
					if (!this.finalized) {
						this.finalized = !0;
						var t = this.blocks,
						e = this.lastByteIndex;
						t[16] = this.block,
						t[e >> 2] |= EXTRA[3 & e],
						this.block = t[16],
						56 <= e && (this.hashed || this.hash(), t[0] = this.block, t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0),
						t[14] = this.hBytes << 3 | this.bytes >>> 29,
						t[15] = this.bytes << 3,
						this.hash()
					}
				},
				Sha1.prototype.hash = function() {
					var t, e, i = this.h0,
					n = this.h1,
					r = this.h2,
					a = this.h3,
					o = this.h4,
					s = this.blocks;
					for (t = 16; t < 80; ++t) e = s[t - 3] ^ s[t - 8] ^ s[t - 14] ^ s[t - 16],
					s[t] = e << 1 | e >>> 31;
					for (t = 0; t < 20; t += 5) i = (e = (n = (e = (r = (e = (a = (e = (o = (e = i << 5 | i >>> 27) + (n & r | ~n & a) + o + 1518500249 + s[t] << 0) << 5 | o >>> 27) + (i & (n = n << 30 | n >>> 2) | ~i & r) + a + 1518500249 + s[t + 1] << 0) << 5 | a >>> 27) + (o & (i = i << 30 | i >>> 2) | ~o & n) + r + 1518500249 + s[t + 2] << 0) << 5 | r >>> 27) + (a & (o = o << 30 | o >>> 2) | ~a & i) + n + 1518500249 + s[t + 3] << 0) << 5 | n >>> 27) + (r & (a = a << 30 | a >>> 2) | ~r & o) + i + 1518500249 + s[t + 4] << 0,
					r = r << 30 | r >>> 2;
					for (; t < 40; t += 5) i = (e = (n = (e = (r = (e = (a = (e = (o = (e = i << 5 | i >>> 27) + (n ^ r ^ a) + o + 1859775393 + s[t] << 0) << 5 | o >>> 27) + (i ^ (n = n << 30 | n >>> 2) ^ r) + a + 1859775393 + s[t + 1] << 0) << 5 | a >>> 27) + (o ^ (i = i << 30 | i >>> 2) ^ n) + r + 1859775393 + s[t + 2] << 0) << 5 | r >>> 27) + (a ^ (o = o << 30 | o >>> 2) ^ i) + n + 1859775393 + s[t + 3] << 0) << 5 | n >>> 27) + (r ^ (a = a << 30 | a >>> 2) ^ o) + i + 1859775393 + s[t + 4] << 0,
					r = r << 30 | r >>> 2;
					for (; t < 60; t += 5) i = (e = (n = (e = (r = (e = (a = (e = (o = (e = i << 5 | i >>> 27) + (n & r | n & a | r & a) + o - 1894007588 + s[t] << 0) << 5 | o >>> 27) + (i & (n = n << 30 | n >>> 2) | i & r | n & r) + a - 1894007588 + s[t + 1] << 0) << 5 | a >>> 27) + (o & (i = i << 30 | i >>> 2) | o & n | i & n) + r - 1894007588 + s[t + 2] << 0) << 5 | r >>> 27) + (a & (o = o << 30 | o >>> 2) | a & i | o & i) + n - 1894007588 + s[t + 3] << 0) << 5 | n >>> 27) + (r & (a = a << 30 | a >>> 2) | r & o | a & o) + i - 1894007588 + s[t + 4] << 0,
					r = r << 30 | r >>> 2;
					for (; t < 80; t += 5) i = (e = (n = (e = (r = (e = (a = (e = (o = (e = i << 5 | i >>> 27) + (n ^ r ^ a) + o - 899497514 + s[t] << 0) << 5 | o >>> 27) + (i ^ (n = n << 30 | n >>> 2) ^ r) + a - 899497514 + s[t + 1] << 0) << 5 | a >>> 27) + (o ^ (i = i << 30 | i >>> 2) ^ n) + r - 899497514 + s[t + 2] << 0) << 5 | r >>> 27) + (a ^ (o = o << 30 | o >>> 2) ^ i) + n - 899497514 + s[t + 3] << 0) << 5 | n >>> 27) + (r ^ (a = a << 30 | a >>> 2) ^ o) + i - 899497514 + s[t + 4] << 0,
					r = r << 30 | r >>> 2;
					this.h0 = this.h0 + i << 0,
					this.h1 = this.h1 + n << 0,
					this.h2 = this.h2 + r << 0,
					this.h3 = this.h3 + a << 0,
					this.h4 = this.h4 + o << 0
				},
				Sha1.prototype.hex = function() {
					this.finalize();
					var t = this.h0,
					e = this.h1,
					i = this.h2,
					n = this.h3,
					r = this.h4;
					return HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] + HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 4 & 15] + HEX_CHARS[15 & t] + HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] + HEX_CHARS[i >> 28 & 15] + HEX_CHARS[i >> 24 & 15] + HEX_CHARS[i >> 20 & 15] + HEX_CHARS[i >> 16 & 15] + HEX_CHARS[i >> 12 & 15] + HEX_CHARS[i >> 8 & 15] + HEX_CHARS[i >> 4 & 15] + HEX_CHARS[15 & i] + HEX_CHARS[n >> 28 & 15] + HEX_CHARS[n >> 24 & 15] + HEX_CHARS[n >> 20 & 15] + HEX_CHARS[n >> 16 & 15] + HEX_CHARS[n >> 12 & 15] + HEX_CHARS[n >> 8 & 15] + HEX_CHARS[n >> 4 & 15] + HEX_CHARS[15 & n] + HEX_CHARS[r >> 28 & 15] + HEX_CHARS[r >> 24 & 15] + HEX_CHARS[r >> 20 & 15] + HEX_CHARS[r >> 16 & 15] + HEX_CHARS[r >> 12 & 15] + HEX_CHARS[r >> 8 & 15] + HEX_CHARS[r >> 4 & 15] + HEX_CHARS[15 & r]
				},
				Sha1.prototype.toString = Sha1.prototype.hex,
				Sha1.prototype.digest = function() {
					this.finalize();
					var t = this.h0,
					e = this.h1,
					i = this.h2,
					n = this.h3,
					r = this.h4;
					return [t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r]
				},
				Sha1.prototype.array = Sha1.prototype.digest,
				Sha1.prototype.arrayBuffer = function() {
					this.finalize();
					var t = new ArrayBuffer(20),
					e = new DataView(t);
					return e.setUint32(0, this.h0),
					e.setUint32(4, this.h1),
					e.setUint32(8, this.h2),
					e.setUint32(12, this.h3),
					e.setUint32(16, this.h4),
					t
				};
				var exports = createMethod();
				COMMON_JS ? module.exports = exports: (root.sha1 = exports, AMD && (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
					return exports
				}.call(exports, __webpack_require__, exports, module), void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)))
			} ()
		}).call(this, __webpack_require__(323), __webpack_require__(66))
	},
	function(t, e, i) {
		i(163),
		t.exports = i(42).Uint8Array
	},
	function(t, e, i) {
		i(164)("Uint8", 1,
		function(n) {
			return function(t, e, i) {
				return n(this, t, e, i)
			}
		})
	},
	function(t, e, i) {
		"use strict";
		if (i(32)) {
			var m = i(70),
			A = i(27),
			y = i(69),
			b = i(86),
			w = i(115),
			n = i(166),
			f = i(90),
			k = i(117),
			r = i(72),
			E = i(33),
			a = i(116),
			o = i(57),
			x = i(38),
			T = i(118),
			s = i(74),
			l = i(87),
			c = i(44),
			S = i(125),
			_ = i(55),
			v = i(58),
			g = i(167),
			C = i(126),
			L = i(127),
			R = i(119).f,
			D = i(171),
			u = i(56),
			d = i(23),
			h = i(128),
			p = i(123),
			I = i(175),
			M = i(176),
			P = i(59),
			O = i(180),
			B = i(181),
			F = i(124),
			N = i(182),
			U = i(43),
			q = i(183),
			j = U.f,
			z = q.f,
			V = A.RangeError,
			H = A.TypeError,
			G = A.Uint8Array,
			Y = "ArrayBuffer",
			W = "Shared" + Y,
			K = "BYTES_PER_ELEMENT",
			Q = "prototype",
			X = Array[Q],
			J = n.ArrayBuffer,
			Z = n.DataView,
			$ = h(0),
			tt = h(2),
			et = h(3),
			it = h(4),
			nt = h(5),
			rt = h(6),
			at = p(!0),
			ot = p(!1),
			st = M.values,
			lt = M.keys,
			ct = M.entries,
			ut = X.lastIndexOf,
			dt = X.reduce,
			ht = X.reduceRight,
			pt = X.join,
			ft = X.sort,
			vt = X.slice,
			gt = X.toString,
			mt = X.toLocaleString,
			At = d("iterator"),
			yt = d("toStringTag"),
			bt = u("typed_constructor"),
			wt = u("def_constructor"),
			kt = w.CONSTR,
			Et = w.TYPED,
			xt = w.VIEW,
			Tt = "Wrong length!",
			St = h(1,
			function(t, e) {
				return Dt(I(t, t[wt]), e)
			}),
			_t = y(function() {
				return 1 === new G(new Uint16Array([1]).buffer)[0]
			}),
			Ct = !!G && !!G[Q].set && y(function() {
				new G(1).set({})
			}),
			Lt = function(t, e) {
				var i = o(t);
				if (i < 0 || i % e) throw V("Wrong offset!");
				return i
			},
			Rt = function(t) {
				if (_(t) && Et in t) return t;
				throw H(t + " is not a typed array!")
			},
			Dt = function(t, e) {
				if (! (_(t) && bt in t)) throw H("It is not a typed array constructor!");
				return new t(e)
			},
			It = function(t, e) {
				return Mt(I(t, t[wt]), e)
			},
			Mt = function(t, e) {
				for (var i = 0,
				n = e.length,
				r = Dt(t, n); i < n;) r[i] = e[i++];
				return r
			},
			Pt = function(t, e, i) {
				j(t, e, {
					get: function() {
						return this._d[i]
					}
				})
			},
			Ot = function(t, e, i) {
				var n, r, a, o, s, l, c = v(t),
				u = arguments.length,
				d = 1 < u ? e: void 0,
				h = void 0 !== d,
				p = D(c);
				if (null != p && !g(p)) {
					for (l = p.call(c), a = [], n = 0; ! (s = l.next()).done; n++) a.push(s.value);
					c = a
				}
				for (h && 2 < u && (d = f(d, i, 2)), n = 0, r = x(c.length), o = Dt(this, r); n < r; n++) o[n] = h ? d(c[n], n) : c[n];
				return o
			},
			Bt = function() {
				for (var t = 0,
				e = arguments.length,
				i = Dt(this, e); t < e;) i[t] = arguments[t++];
				return i
			},
			Ft = !!G && y(function() {
				mt.call(new G(1))
			}),
			Nt = function() {
				return mt.apply(Ft ? vt.call(Rt(this)) : Rt(this), arguments)
			},
			Ut = {
				copyWithin: function(t, e, i) {
					return N.call(Rt(this), t, e, 2 < arguments.length ? i: void 0)
				},
				every: function(t, e) {
					return it(Rt(this), t, 1 < arguments.length ? e: void 0)
				},
				fill: function(t) {
					return F.apply(Rt(this), arguments)
				},
				filter: function(t, e) {
					return It(this, tt(Rt(this), t, 1 < arguments.length ? e: void 0))
				},
				find: function(t, e) {
					return nt(Rt(this), t, 1 < arguments.length ? e: void 0)
				},
				findIndex: function(t, e) {
					return rt(Rt(this), t, 1 < arguments.length ? e: void 0)
				},
				forEach: function(t, e) {
					$(Rt(this), t, 1 < arguments.length ? e: void 0)
				},
				indexOf: function(t, e) {
					return ot(Rt(this), t, 1 < arguments.length ? e: void 0)
				},
				includes: function(t, e) {
					return at(Rt(this), t, 1 < arguments.length ? e: void 0)
				},
				join: function(t) {
					return pt.apply(Rt(this), arguments)
				},
				lastIndexOf: function(t) {
					return ut.apply(Rt(this), arguments)
				},
				map: function(t, e) {
					return St(Rt(this), t, 1 < arguments.length ? e: void 0)
				},
				reduce: function(t) {
					return dt.apply(Rt(this), arguments)
				},
				reduceRight: function(t) {
					return ht.apply(Rt(this), arguments)
				},
				reverse: function() {
					for (var t, e = Rt(this).length, i = Math.floor(e / 2), n = 0; n < i;) t = this[n],
					this[n++] = this[--e],
					this[e] = t;
					return this
				},
				some: function(t, e) {
					return et(Rt(this), t, 1 < arguments.length ? e: void 0)
				},
				sort: function(t) {
					return ft.call(Rt(this), t)
				},
				subarray: function(t, e) {
					var i = Rt(this),
					n = i.length,
					r = s(t, n);
					return new(I(i, i[wt]))(i.buffer, i.byteOffset + r * i.BYTES_PER_ELEMENT, x((void 0 === e ? n: s(e, n)) - r))
				}
			},
			qt = function(t, e) {
				return It(this, vt.call(Rt(this), t, e))
			},
			jt = function(t, e) {
				Rt(this);
				var i = Lt(e, 1),
				n = this.length,
				r = v(t),
				a = x(r.length),
				o = 0;
				if (n < a + i) throw V(Tt);
				for (; o < a;) this[i + o] = r[o++]
			},
			zt = {
				entries: function() {
					return ct.call(Rt(this))
				},
				keys: function() {
					return lt.call(Rt(this))
				},
				values: function() {
					return st.call(Rt(this))
				}
			},
			Vt = function(t, e) {
				return _(t) && t[Et] && "symbol" != typeof e && e in t && String( + e) == String(e)
			},
			Ht = function(t, e) {
				return Vt(t, e = l(e, !0)) ? r(2, t[e]) : z(t, e)
			},
			Gt = function(t, e, i) {
				return ! (Vt(t, e = l(e, !0)) && _(i) && c(i, "value")) || c(i, "get") || c(i, "set") || i.configurable || c(i, "writable") && !i.writable || c(i, "enumerable") && !i.enumerable ? j(t, e, i) : (t[e] = i.value, t)
			};
			kt || (q.f = Ht, U.f = Gt),
			b(b.S + b.F * !kt, "Object", {
				getOwnPropertyDescriptor: Ht,
				defineProperty: Gt
			}),
			y(function() {
				gt.call({})
			}) && (gt = mt = function() {
				return pt.call(this)
			});
			var Yt = a({},
			Ut);
			a(Yt, zt),
			E(Yt, At, zt.values),
			a(Yt, {
				slice: qt,
				set: jt,
				constructor: function() {},
				toString: gt,
				toLocaleString: Nt
			}),
			Pt(Yt, "buffer", "b"),
			Pt(Yt, "byteOffset", "o"),
			Pt(Yt, "byteLength", "l"),
			Pt(Yt, "length", "e"),
			j(Yt, yt, {
				get: function() {
					return this[Et]
				}
			}),
			t.exports = function(t, d, e, a) {
				function h(t, r) {
					j(t, r, {
						get: function() {
							return t = r,
							(e = this._d).v[i](t * d + e.o, _t);
							var t, e
						}, set: function(t) {
							return e = r,
							i = t,
							n = this._d,
							a && (i = (i = Math.round(i)) < 0 ? 0 : 255 < i ? 255 : 255 & i),
							void n.v[o](e * d + n.o, i, _t);
							var e, i, n
						}, enumerable: !0
					})
				}
				var p = t + ((a = !!a) ? "Clamped": "") + "Array",
				i = "get" + t,
				o = "set" + t,
				f = A[p],
				s = f || {},
				n = f && L(f),
				r = !f || !w.ABV,
				l = {},
				c = f && f[Q];
				r ? (f = e(function(t, e, i, n) {
					k(t, f, p, "_d");
					var r, a, o, s, l = 0,
					c = 0;
					if (_(e)) {
						if (! (e instanceof J || (s = S(e)) == Y || s == W)) return Et in e ? Mt(f, e) : Ot.call(f, e);
						r = e,
						c = Lt(i, d);
						var u = e.byteLength;
						if (void 0 === n) {
							if (u % d) throw V(Tt);
							if ((a = u - c) < 0) throw V(Tt)
						} else if (u < (a = x(n) * d) + c) throw V(Tt);
						o = a / d
					} else o = T(e),
					r = new J(a = o * d);
					for (E(t, "_d", {
						b: r,
						o: c,
						l: a,
						e: o,
						v: new Z(r)
					}); l < o;) h(t, l++)
				}), c = f[Q] = C(Yt), E(c, "constructor", f)) : y(function() {
					f(1)
				}) && y(function() {
					new f( - 1)
				}) && O(function(t) {
					new f,
					new f(null),
					new f(1.5),
					new f(t)
				},
				!0) || (f = e(function(t, e, i, n) {
					var r;
					return k(t, f, p),
					_(e) ? e instanceof J || (r = S(e)) == Y || r == W ? void 0 !== n ? new s(e, Lt(i, d), n) : void 0 !== i ? new s(e, Lt(i, d)) : new s(e) : Et in e ? Mt(f, e) : Ot.call(f, e) : new s(T(e))
				}), $(n !== Function.prototype ? R(s).concat(R(n)) : R(s),
				function(t) {
					t in f || E(f, t, s[t])
				}), f[Q] = c, m || (c.constructor = f));
				var u = c[At],
				v = !!u && ("values" == u.name || null == u.name),
				g = zt.values;
				E(f, bt, !0),
				E(c, Et, p),
				E(c, xt, !0),
				E(c, wt, f),
				(a ? new f(1)[yt] == p: yt in c) || j(c, yt, {
					get: function() {
						return p
					}
				}),
				l[p] = f,
				b(b.G + b.W + b.F * (f != s), l),
				b(b.S, p, {
					BYTES_PER_ELEMENT: d
				}),
				b(b.S + b.F * y(function() {
					s.of.call(f, 1)
				}), p, {
					from: Ot,
					of: Bt
				}),
				K in c || E(c, K, d),
				b(b.P, p, Ut),
				B(p),
				b(b.P + b.F * Ct, p, {
					set: jt
				}),
				b(b.P + b.F * !v, p, zt),
				m || c.toString == gt || (c.toString = gt),
				b(b.P + b.F * y(function() {
					new f(1).slice()
				}), p, {
					slice: qt
				}),
				b(b.P + b.F * (y(function() {
					return [1, 2].toLocaleString() != new f([1, 2]).toLocaleString()
				}) || !y(function() {
					c.toLocaleString.call([1, 2])
				})), p, {
					toLocaleString: Nt
				}),
				P[p] = v ? u: g,
				m || v || E(c, At, g)
			}
		} else t.exports = function() {}
	},
	function(t, e, i) {
		t.exports = i(89)("native-function-to-string", Function.toString)
	},
	function(t, e, i) {
		"use strict";
		var n = i(27),
		r = i(32),
		a = i(70),
		o = i(115),
		s = i(33),
		l = i(116),
		c = i(69),
		u = i(117),
		d = i(57),
		h = i(38),
		p = i(118),
		f = i(119).f,
		v = i(43).f,
		g = i(124),
		m = i(94),
		A = "ArrayBuffer",
		y = "DataView",
		b = "prototype",
		w = "Wrong index!",
		k = n[A],
		E = n[y],
		x = n.Math,
		T = n.RangeError,
		S = n.Infinity,
		_ = k,
		C = x.abs,
		L = x.pow,
		R = x.floor,
		D = x.log,
		I = x.LN2,
		M = "byteLength",
		P = "byteOffset",
		O = r ? "_b": "buffer",
		B = r ? "_l": M,
		F = r ? "_o": P;
		function N(t, e, i) {
			var n, r, a, o = new Array(i),
			s = 8 * i - e - 1,
			l = (1 << s) - 1,
			c = l >> 1,
			u = 23 === e ? L(2, -24) - L(2, -77) : 0,
			d = 0,
			h = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
			for ((t = C(t)) != t || t === S ? (r = t != t ? 1 : 0, n = l) : (n = R(D(t) / I), t * (a = L(2, -n)) < 1 && (n--, a *= 2), 2 <= (t += 1 <= n + c ? u / a: u * L(2, 1 - c)) * a && (n++, a /= 2), l <= n + c ? (r = 0, n = l) : 1 <= n + c ? (r = (t * a - 1) * L(2, e), n += c) : (r = t * L(2, c - 1) * L(2, e), n = 0)); 8 <= e; o[d++] = 255 & r, r /= 256, e -= 8);
			for (n = n << e | r, s += e; 0 < s; o[d++] = 255 & n, n /= 256, s -= 8);
			return o[--d] |= 128 * h,
			o
		}
		function U(t, e, i) {
			var n, r = 8 * i - e - 1,
			a = (1 << r) - 1,
			o = a >> 1,
			s = r - 7,
			l = i - 1,
			c = t[l--],
			u = 127 & c;
			for (c >>= 7; 0 < s; u = 256 * u + t[l], l--, s -= 8);
			for (n = u & (1 << -s) - 1, u >>= -s, s += e; 0 < s; n = 256 * n + t[l], l--, s -= 8);
			if (0 === u) u = 1 - o;
			else {
				if (u === a) return n ? NaN: c ? -S: S;
				n += L(2, e),
				u -= o
			}
			return (c ? -1 : 1) * n * L(2, u - e)
		}
		function q(t) {
			return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
		}
		function j(t) {
			return [255 & t]
		}
		function z(t) {
			return [255 & t, t >> 8 & 255]
		}
		function V(t) {
			return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
		}
		function H(t) {
			return N(t, 52, 8)
		}
		function G(t) {
			return N(t, 23, 4)
		}
		function Y(t, e, i) {
			v(t[b], e, {
				get: function() {
					return this[i]
				}
			})
		}
		function W(t, e, i, n) {
			var r = p( + i);
			if (r + e > t[B]) throw T(w);
			var a = t[O]._b,
			o = r + t[F],
			s = a.slice(o, o + e);
			return n ? s: s.reverse()
		}
		function K(t, e, i, n, r, a) {
			var o = p( + i);
			if (o + e > t[B]) throw T(w);
			for (var s = t[O]._b, l = o + t[F], c = n( + r), u = 0; u < e; u++) s[l + u] = c[a ? u: e - u - 1]
		}
		if (o.ABV) {
			if (!c(function() {
				k(1)
			}) || !c(function() {
				new k( - 1)
			}) || c(function() {
				return new k,
				new k(1.5),
				new k(NaN),
				k.name != A
			})) {
				for (var Q, X = (k = function(t) {
					return u(this, k),
					new _(p(t))
				})[b] = _[b], J = f(_), Z = 0; J.length > Z;)(Q = J[Z++]) in k || s(k, Q, _[Q]);
				a || (X.constructor = k)
			}
			var $ = new E(new k(2)),
			tt = E[b].setInt8;
			$.setInt8(0, 2147483648),
			$.setInt8(1, 2147483649),
			!$.getInt8(0) && $.getInt8(1) || l(E[b], {
				setInt8: function(t, e) {
					tt.call(this, t, e << 24 >> 24)
				},
				setUint8: function(t, e) {
					tt.call(this, t, e << 24 >> 24)
				}
			},
			!0)
		} else k = function(t) {
			u(this, k, A);
			var e = p(t);
			this._b = g.call(new Array(e), 0),
			this[B] = e
		},
		E = function(t, e, i) {
			u(this, E, y),
			u(t, k, y);
			var n = t[B],
			r = d(e);
			if (r < 0 || n < r) throw T("Wrong offset!");
			if (n < r + (i = void 0 === i ? n - r: h(i))) throw T("Wrong length!");
			this[O] = t,
			this[F] = r,
			this[B] = i
		},
		r && (Y(k, M, "_l"), Y(E, "buffer", "_b"), Y(E, M, "_l"), Y(E, P, "_o")),
		l(E[b], {
			getInt8: function(t) {
				return W(this, 1, t)[0] << 24 >> 24
			},
			getUint8: function(t) {
				return W(this, 1, t)[0]
			},
			getInt16: function(t, e) {
				var i = W(this, 2, t, e);
				return (i[1] << 8 | i[0]) << 16 >> 16
			},
			getUint16: function(t, e) {
				var i = W(this, 2, t, e);
				return i[1] << 8 | i[0]
			},
			getInt32: function(t, e) {
				return q(W(this, 4, t, e))
			},
			getUint32: function(t, e) {
				return q(W(this, 4, t, e)) >>> 0
			},
			getFloat32: function(t, e) {
				return U(W(this, 4, t, e), 23, 4)
			},
			getFloat64: function(t, e) {
				return U(W(this, 8, t, e), 52, 8)
			},
			setInt8: function(t, e) {
				K(this, 1, t, j, e)
			},
			setUint8: function(t, e) {
				K(this, 1, t, j, e)
			},
			setInt16: function(t, e, i) {
				K(this, 2, t, z, e, i)
			},
			setUint16: function(t, e, i) {
				K(this, 2, t, z, e, i)
			},
			setInt32: function(t, e, i) {
				K(this, 4, t, V, e, i)
			},
			setUint32: function(t, e, i) {
				K(this, 4, t, V, e, i)
			},
			setFloat32: function(t, e, i) {
				K(this, 4, t, G, e, i)
			},
			setFloat64: function(t, e, i) {
				K(this, 8, t, H, e, i)
			}
		});
		m(k, A),
		m(E, y),
		s(E[b], o.VIEW, !0),
		e[A] = k,
		e[y] = E
	},
	function(t, e, i) {
		var n = i(59),
		r = i(23)("iterator"),
		a = Array.prototype;
		t.exports = function(t) {
			return void 0 !== t && (n.Array === t || a[r] === t)
		}
	},
	function(t, e, i) {
		var o = i(43),
		s = i(71),
		l = i(169);
		t.exports = i(32) ? Object.defineProperties: function(t, e) {
			s(t);
			for (var i, n = l(e), r = n.length, a = 0; a < r;) o.f(t, i = n[a++], e[i]);
			return t
		}
	},
	function(t, e, i) {
		var n = i(120),
		r = i(93);
		t.exports = Object.keys ||
		function(t) {
			return n(t, r)
		}
	},
	function(t, e, i) {
		var n = i(27).document;
		t.exports = n && n.documentElement
	},
	function(t, e, i) {
		var n = i(125),
		r = i(23)("iterator"),
		a = i(59);
		t.exports = i(42).getIteratorMethod = function(t) {
			if (null != t) return t[r] || t["@@iterator"] || a[n(t)]
		}
	},
	function(t, e, i) {
		var n = i(173);
		t.exports = function(t, e) {
			return new(n(t))(e)
		}
	},
	function(t, e, i) {
		var n = i(55),
		r = i(174),
		a = i(23)("species");
		t.exports = function(t) {
			var e;
			return r(t) && ("function" != typeof(e = t.constructor) || e !== Array && !r(e.prototype) || (e = void 0), n(e) && null === (e = e[a]) && (e = void 0)),
			void 0 === e ? Array: e
		}
	},
	function(t, e, i) {
		var n = i(91);
		t.exports = Array.isArray ||
		function(t) {
			return "Array" == n(t)
		}
	},
	function(t, e, i) {
		var r = i(71),
		a = i(114),
		o = i(23)("species");
		t.exports = function(t, e) {
			var i, n = r(t).constructor;
			return void 0 === n || null == (i = r(n)[o]) ? e: a(i)
		}
	},
	function(t, e, i) {
		"use strict";
		var n = i(129),
		r = i(177),
		a = i(59),
		o = i(73);
		t.exports = i(178)(Array, "Array",
		function(t, e) {
			this._t = o(t),
			this._i = 0,
			this._k = e
		},
		function() {
			var t = this._t,
			e = this._k,
			i = this._i++;
			return ! t || i >= t.length ? (this._t = void 0, r(1)) : r(0, "keys" == e ? i: "values" == e ? t[i] : [i, t[i]])
		},
		"values"),
		a.Arguments = a.Array,
		n("keys"),
		n("values"),
		n("entries")
	},
	function(t, e) {
		t.exports = function(t, e) {
			return {
				value: e,
				done: !!t
			}
		}
	},
	function(t, e, i) {
		"use strict";
		function y() {
			return this
		}
		var b = i(70),
		w = i(86),
		k = i(88),
		E = i(33),
		x = i(59),
		T = i(179),
		S = i(94),
		_ = i(127),
		C = i(23)("iterator"),
		L = !([].keys && "next" in [].keys()),
		R = "values";
		t.exports = function(t, e, i, n, r, a, o) {
			T(i, e, n);
			function s(t) {
				if (!L && t in f) return f[t];
				switch (t) {
				case "keys":
				case R:
					return function() {
						return new i(this, t)
					}
				}
				return function() {
					return new i(this, t)
				}
			}
			var l, c, u, d = e + " Iterator",
			h = r == R,
			p = !1,
			f = t.prototype,
			v = f[C] || f["@@iterator"] || r && f[r],
			g = v || s(r),
			m = r ? h ? s("entries") : g: void 0,
			A = "Array" == e && f.entries || v;
			if (A && (u = _(A.call(new t))) !== Object.prototype && u.next && (S(u, d, !0), b || "function" == typeof u[C] || E(u, C, y)), h && v && v.name !== R && (p = !0, g = function() {
				return v.call(this)
			}), b && !o || !L && !p && f[C] || E(f, C, g), x[e] = g, x[d] = y, r) if (l = {
				values: h ? g: s(R),
				keys: a ? g: s("keys"),
				entries: m
			},
			o) for (c in l) c in f || k(f, c, l[c]);
			else w(w.P + w.F * (L || p), e, l);
			return l
		}
	},
	function(t, e, i) {
		"use strict";
		var n = i(126),
		r = i(72),
		a = i(94),
		o = {};
		i(33)(o, i(23)("iterator"),
		function() {
			return this
		}),
		t.exports = function(t, e, i) {
			t.prototype = n(o, {
				next: r(1, i)
			}),
			a(t, e + " Iterator")
		}
	},
	function(t, e, i) {
		var a = i(23)("iterator"),
		o = !1;
		try {
			var n = [7][a]();
			n.
			return = function() {
				o = !0
			},
			Array.from(n,
			function() {
				throw 2
			})
		} catch(t) {}
		t.exports = function(t, e) {
			if (!e && !o) return ! 1;
			var i = !1;
			try {
				var n = [7],
				r = n[a]();
				r.next = function() {
					return {
						done: i = !0
					}
				},
				n[a] = function() {
					return r
				},
				t(n)
			} catch(t) {}
			return i
		}
	},
	function(t, e, i) {
		"use strict";
		var n = i(27),
		r = i(43),
		a = i(32),
		o = i(23)("species");
		t.exports = function(t) {
			var e = n[t];
			a && e && !e[o] && r.f(e, o, {
				configurable: !0,
				get: function() {
					return this
				}
			})
		}
	},
	function(t, e, i) {
		"use strict";
		var u = i(58),
		d = i(74),
		h = i(38);
		t.exports = [].copyWithin ||
		function(t, e, i) {
			var n = u(this),
			r = h(n.length),
			a = d(t, r),
			o = d(e, r),
			s = 2 < arguments.length ? i: void 0,
			l = Math.min((void 0 === s ? r: d(s, r)) - o, r - a),
			c = 1;
			for (o < a && a < o + l && (c = -1, o += l - 1, a += l - 1); 0 < l--;) o in n ? n[a] = n[o] : delete n[a],
			a += c,
			o += c;
			return n
		}
	},
	function(t, e, i) {
		var n = i(184),
		r = i(72),
		a = i(73),
		o = i(87),
		s = i(44),
		l = i(112),
		c = Object.getOwnPropertyDescriptor;
		e.f = i(32) ? c: function(t, e) {
			if (t = a(t), e = o(e, !0), l) try {
				return c(t, e)
			} catch(t) {}
			if (s(t, e)) return r(!n.f.call(t, e), t[e])
		}
	},
	function(t, e) {
		e.f = {}.propertyIsEnumerable
	},
	function(t, e, i) {
		i(186),
		t.exports = i(42).Array.findIndex
	},
	function(t, e, i) {
		"use strict";
		var n = i(86),
		r = i(128)(6),
		a = "findIndex",
		o = !0;
		a in [] && Array(1)[a](function() {
			o = !1
		}),
		n(n.P + n.F * o, "Array", {
			findIndex: function(t, e) {
				return r(this, t, 1 < arguments.length ? e: void 0)
			}
		}),
		i(129)(a)
	},
	function(t, e, i) {
		t.exports = i(188)
	},
	function(t, e, i) {
		i(60),
		i(79),
		t.exports = i(102).f("iterator")
	},
	function(t, e, i) {
		var l = i(95),
		c = i(75);
		t.exports = function(s) {
			return function(t, e) {
				var i, n, r = String(c(t)),
				a = l(e),
				o = r.length;
				return a < 0 || o <= a ? s ? "": void 0 : (i = r.charCodeAt(a)) < 55296 || 56319 < i || a + 1 === o || (n = r.charCodeAt(a + 1)) < 56320 || 57343 < n ? s ? r.charAt(a) : i: s ? r.slice(a, a + 2) : n - 56320 + (i - 55296 << 10) + 65536
			}
		}
	},
	function(t, e, i) {
		"use strict";
		var n = i(76),
		r = i(62),
		a = i(78),
		o = {};
		i(39)(o, i(21)("iterator"),
		function() {
			return this
		}),
		t.exports = function(t, e, i) {
			t.prototype = n(o, {
				next: r(1, i)
			}),
			a(t, e + " Iterator")
		}
	},
	function(t, e, i) {
		var l = i(31),
		c = i(98),
		u = i(192);
		t.exports = function(s) {
			return function(t, e, i) {
				var n, r = l(t),
				a = c(r.length),
				o = u(i, a);
				if (s && e != e) {
					for (; o < a;) if ((n = r[o++]) != n) return ! 0
				} else for (; o < a; o++) if ((s || o in r) && r[o] === e) return s || o || 0;
				return ! s && -1
			}
		}
	},
	function(t, e, i) {
		var n = i(95),
		r = Math.max,
		a = Math.min;
		t.exports = function(t, e) {
			return (t = n(t)) < 0 ? r(t + e, 0) : a(t, e)
		}
	},
	function(t, e, i) {
		"use strict";
		var n = i(194),
		r = i(195),
		a = i(47),
		o = i(31);
		t.exports = i(130)(Array, "Array",
		function(t, e) {
			this._t = o(t),
			this._i = 0,
			this._k = e
		},
		function() {
			var t = this._t,
			e = this._k,
			i = this._i++;
			return ! t || i >= t.length ? (this._t = void 0, r(1)) : r(0, "keys" == e ? i: "values" == e ? t[i] : [i, t[i]])
		},
		"values"),
		a.Arguments = a.Array,
		n("keys"),
		n("values"),
		n("entries")
	},
	function(t, e) {
		t.exports = function() {}
	},
	function(t, e) {
		t.exports = function(t, e) {
			return {
				value: e,
				done: !!t
			}
		}
	},
	function(t, e, i) {
		i(138),
		i(140),
		i(200),
		i(201),
		t.exports = i(9).Symbol
	},
	function(t, e, i) {
		function n(t) {
			s(t, r, {
				value: {
					i: "O" + ++l,
					w: {}
				}
			})
		}
		var r = i(77)("meta"),
		a = i(28),
		o = i(40),
		s = i(30).f,
		l = 0,
		c = Object.isExtensible ||
		function() {
			return ! 0
		},
		u = !i(34)(function() {
			return c(Object.preventExtensions({}))
		}),
		d = t.exports = {
			KEY: r,
			NEED: !1,
			fastKey: function(t, e) {
				if (!a(t)) return "symbol" == typeof t ? t: ("string" == typeof t ? "S": "P") + t;
				if (!o(t, r)) {
					if (!c(t)) return "F";
					if (!e) return "E";
					n(t)
				}
				return t[r].i
			},
			getWeak: function(t, e) {
				if (!o(t, r)) {
					if (!c(t)) return ! 0;
					if (!e) return ! 1;
					n(t)
				}
				return t[r].w
			},
			onFreeze: function(t) {
				return u && d.NEED && c(t) && !o(t, r) && n(t),
				t
			}
		}
	},
	function(t, e, i) {
		var s = i(48),
		l = i(80),
		c = i(64);
		t.exports = function(t) {
			var e = s(t),
			i = l.f;
			if (i) for (var n, r = i(t), a = c.f, o = 0; r.length > o;) a.call(t, n = r[o++]) && e.push(n);
			return e
		}
	},
	function(t, e, i) {
		var n = i(31),
		r = i(104).f,
		a = {}.toString,
		o = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
		t.exports.f = function(t) {
			return o && "[object Window]" == a.call(t) ?
			function(t) {
				try {
					return r(t)
				} catch(t) {
					return o.slice()
				}
			} (t) : r(n(t))
		}
	},
	function(t, e, i) {
		i(103)("asyncIterator")
	},
	function(t, e, i) {
		i(103)("observable")
	},
	function(t, e, i) {
		i(203),
		t.exports = i(9).Object.assign
	},
	function(t, e, i) {
		var n = i(15);
		n(n.S + n.F, "Object", {
			assign: i(204)
		})
	},
	function(t, e, i) {
		"use strict";
		var h = i(25),
		p = i(48),
		f = i(80),
		v = i(64),
		g = i(49),
		m = i(135),
		r = Object.assign;
		t.exports = !r || i(34)(function() {
			var t = {},
			e = {},
			i = Symbol(),
			n = "abcdefghijklmnopqrst";
			return t[i] = 7,
			n.split("").forEach(function(t) {
				e[t] = t
			}),
			7 != r({},
			t)[i] || Object.keys(r({},
			e)).join("") != n
		}) ?
		function(t, e) {
			for (var i = g(t), n = arguments.length, r = 1, a = f.f, o = v.f; r < n;) for (var s, l = m(arguments[r++]), c = a ? p(l).concat(a(l)) : p(l), u = c.length, d = 0; d < u;) s = c[d++],
			h && !o.call(l, s) || (i[s] = l[s]);
			return i
		}: r
	},
	function(t, e, i) {
		var n = i(19),
		r = i(206);
		"string" == typeof(r = r.__esModule ? r.
	default:
		r) && (r = [[t.i, r, ""]]);
		var a = {
			insert: "head",
			singleton: !1
		},
		o = (n(r, a), r.locals ? r.locals: {});
		t.exports = o
	},
	function(t, e, i) {
		var n = i(20),
		r = i(65),
		a = i(207),
		o = i(208),
		s = i(209),
		l = i(141);
		e = n(!1);
		var c = r(a),
		u = r(o),
		d = r(s),
		h = r(l);
		e.push([t.i, "@font-face{font-family:'pviconfont';src:url(" + c + ') format("woff")}.pv-iconfont{font-family:"pviconfont" !important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-webkit-text-stroke-width:0.2px;-moz-osx-font-smoothing:grayscale}.pv-icon-pip-pc:before{content:"\\fe885"}.pv-icon-close:before{content:"\\fe600"}.pv-icon-close-small:before{content:"\\fe601"}.pv-icon-exitfullscreen:before{content:"\\fe602"}.pv-icon-fullscreen:before{content:"\\fe603"}.pv-icon-ligntoff:before{content:"\\fe604"}.pv-icon-lignton:before{content:"\\fe605"}.pv-icon-pause:before{content:"\\fe606"}.pv-icon-play:before{content:"\\fe607"}.pv-icon-screenshot:before{content:"\\fe608"}.pv-icon-settings:before{content:"\\fe609"}.pv-icon-share:before{content:"\\fe60a"}.pv-icon-title:before{content:"\\fe60b"}.pv-icon-volumenone:before{content:"\\fe60c"}.pv-icon-volumeon:before{content:"\\fe60d"}.pv-icon-btn-play:before{content:"\\fe83c"}.pv-icon-btn-arrowDown:before{content:"\\e83b"}.pv-icon-btn-arrowLeft:before{content:"\\e83c"}.pv-icon-btn-Camera-on:before{content:"\\e83d"}.pv-icon-btn-arrowTop:before{content:"\\e83e"}.pv-icon-btn-Camera-off:before{content:"\\e83f"}.pv-icon-btn-close:before{content:"\\e840"}.pv-icon-btn-arrowRight:before{content:"\\e841"}.pv-icon-btn-Refresh:before{content:"\\e842"}.pv-icon-btn-selected:before{content:"\\e844"}.pv-icon-btn-webFullScreen:before{content:"\\e846"}.pv-icon-btn-exitWebFullScreen:before{content:"\\e847"}.pv-icon-btn-Stop:before{content:"\\e843"}.pv-icon-btn-ErrorCircle:before{content:"\\e87c"}.pv-icon-btn-RightCircle:before{content:"\\e87d"}.pv-icon-btn-Restore:before{content:"\\e845"}.pv-icon-btn-Bullet-off:before{content:"\\e87f"}.pv-icon-btn-Length:before{content:"\\e880"}.pv-icon-btn-VodMode:before{content:"\\e881"}.pv-icon-btn-VoiceMode:before{content:"\\e882"}.pv-icon-btn-Bullet-on:before{content:"\\e883"}.pv-icon-btn-Switch:before{content:"\\e884"}.pv-log-message{font-size:16px;line-height:20px;text-align:center;color:#fff;position:absolute;left:50%;top:50%;padding:20px;z-index:20;background-color:rgba(0,16,27,0.7);border-radius:8px;min-width:250px;max-width:80%;opacity:0;transition:opacity 1s;-ms-transform:translate(-50%, -50%);transform:translate(-50%, -50%);white-space:normal;word-break:break-word;display:none}.pv-log-message.pv-log-message-show{opacity:1}.pv-log-error{position:absolute;width:100%;height:100%;background:#00101b;z-index:30;font-size:16px;display:none;opacity:1 !important;visibility:visible !important}.pv-log-error .pv-log-errorIcon{position:absolute;top:50%;left:50%;margin-left:-23px;margin-top:-55px;width:47px;height:31px;background:url(' + u + ") no-repeat}.pv-log-error .pv-log-errormsg{position:absolute;top:50%;left:0;width:100%;padding-top:25px;text-align:center}.pv-quality-select>div,.pv-rate-select>div,.pv-setting-select>div,.pv-stream-select>div,.pv-fullscreen-tip,.pv-fullscreen-page-tip,.pv-volume-slider,.pv-danmu-tip,.pv-pip-tip{background-color:rgba(0,16,27,0.7)}.pv-fullscreen-tip:after,.pv-fullscreen-page-tip:after,.pv-pip-tip:after,.pv-quality-select:after,.pv-rate-select:after,.pv-danmu-tip:after{content:'';position:absolute;left:50%;margin-left:-4px;top:100%;width:0 !important;height:0 !important;display:inline-block;border:4px solid transparent;border-top:4px solid rgba(0,16,27,0.7);border-width:4px 4px 0 4px}.pv-setting-select:after{content:'';position:absolute;right:43px;top:100%;width:0 !important;height:0 !important;display:inline-block;border:4px solid transparent;border-top:4px solid rgba(0,16,27,0.7);border-width:4px 4px 0 4px}.pv-progress-buffer{background-color:rgba(255,255,255,0.35)}.pv-as-layout{display:none;position:absolute;left:0;top:0;width:100%;height:100%;color:#fff;background:#000}.pv-as-layout .pv-as-video{position:absolute;left:0;top:0;width:100%;height:100%}.pv-as-layout .pv-as-time-wrap{position:absolute;left:20px;top:20px;font-size:12px;line-height:16px;border-top-right-radius:17px;border-bottom-right-radius:17px;-ms-user-select:none;user-select:none}.pv-as-layout .pv-as-time-countdown{padding:8px 14px 8px 14px;border-radius:16px;background:#262727;margin-right:10px;display:inline-block}.pv-as-layout .pv-as-time{color:#ff5722;font-size:16px}.pv-as-layout .pv-as-time-skip{display:inline-block;color:#03a9f4;margin-left:4px;padding:0 0 0 8px;border-left:1px solid #fff;cursor:pointer}.pv-as-layout .pv-as-time-volume{display:inline-block;background:#262727;line-height:32px;border-radius:50%;text-align:center}.pv-as-layout .pv-as-volome{display:inline-block;cursor:pointer;width:36px}.pv-as-layout .pv-as-img{display:none;position:absolute;left:0;top:0;width:100%;height:100%;background-color:#000}.pv-as-layout .pv-as-url{position:absolute;left:0;top:0;width:100%;height:100%}.pv-as-pause{position:absolute;left:0;top:0;pointer-events:none;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;z-index:1}.pv-as-pause>div{width:50%;height:50%;position:relative;pointer-events:auto;text-align:center;font-size:0}.pv-as-pause img{max-width:100%;max-height:100%}.pv-as-pause-close{position:absolute;-ms-transform:translate(-50%, -50%);transform:translate(-50%, -50%);width:20px;height:20px;background:rgba(255,255,255,0.4);border-radius:20px;cursor:pointer;text-align:center;line-height:20px;color:rgba(255,255,255,0.8);font-size:14px}.pv-as-popup{position:absolute}.pv-as-popup.pv-as-popup-1{right:20px;bottom:90px}.pv-as-popup.pv-as-popup-2{right:20px;top:50px}.pv-as-popup.pv-as-popup-3{left:20px;bottom:90px}.pv-as-popup.pv-as-popup-4{left:20px;top:50px}.pv-as-popup>a{position:absolute;left:0;top:0;width:100%;height:100%}.pv-as-popup>img{max-width:360px;max-height:120px}.pv-control-outside:not(.pv-full-wrap) .pv-as-popup.pv-as-popup-1{bottom:30px}.pv-control-outside:not(.pv-full-wrap) .pv-as-popup.pv-as-popup-3{bottom:30px}.pv-audio-mode,.pv-audio-mode-bg,.pv-audio-mode-bg-color{position:absolute;width:100%;height:100%;left:0;top:0}.pv-audio-mode{display:none;overflow:hidden;background-color:#000}.pv-audio-mode .pv-audio-mode-bg{filter:blur(40px);background-size:cover;background-position:center center}.pv-audio-mode .pv-audio-mode-bg-color{background-color:rgba(0,0,0,0.6)}.pv-audio-mode .pv-audio-mode-container{padding:10px;height:100%;position:relative;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap}.pv-audio-mode .pv-audio-mode-cover{max-width:34%;background-size:cover;background-position:center center;border-radius:16px;position:relative}.pv-audio-mode .pv-audio-mode-cover>div{max-width:441px}.pv-audio-mode .pv-audio-mode-cover img{display:inline-block;top:0;right:0;max-height:248px;border-radius:12px;max-width:100%}.pv-audio-mode .pv-audio-mode-right{width:340px;max-width:50%}.pv-audio-mode .pv-audio-mode-right>div{box-sizing:content-box;padding-left:11.764%}.pv-audio-mode .pv-audio-mode-right>div>div:nth-child(1){margin-bottom:13.333%;font-size:20px;color:#fff;white-space:nowrap}.pv-audio-mode .pv-audio-mode-right>div>div:nth-child(2){margin-bottom:11.667%;height:24px}.pv-audio-mode .pv-audio-mode-right>div>span{display:inline-block;width:100px;line-height:32px;background:rgba(0,0,0,0.8);border-radius:16px;text-align:center;font-size:14px;color:#fff;cursor:pointer}.pv-audio-mode .pv-audio-mode-right>div>span>span{margin-right:2px;vertical-align:middle;display:inline-block;padding-left:20px;background-image:url(" + d + ');background-size:16px 16px;background-position:left center;background-repeat:no-repeat}.pv-audio-mode .pv-audio-mode-right>div>span:hover{background:rgba(0,0,0,0.6)}.pv-audio-mode-sound{position:relative;display:-ms-flexbox;display:flex;height:24px;-ms-flex-pack:justify;justify-content:space-between}.pv-audio-mode-sound>div{width:1.333%;min-width:3px;height:24px;position:relative}.pv-audio-mode-sound>div>div{position:absolute;top:50%;-ms-transform:translateY(-50%);transform:translateY(-50%);width:100%;height:100%;border-radius:2px;background-color:#fff}.pv-audio-mode-sound>div:nth-child(n+4)>div{animation:pvscaley .5s infinite cubic-bezier(0.85, 0.25, 0.37, 0.85)}.pv-audio-mode-sound>div:nth-child(2)>div,.pv-audio-mode-sound>div:nth-child(10)>div,.pv-audio-mode-sound>div:nth-child(12)>div,.pv-audio-mode-sound>div:nth-child(20)>div{height:10px;animation:pvscaley0 .5s infinite cubic-bezier(0.85, 0.25, 0.37, 0.85)}.pv-audio-mode-sound>div:nth-child(3)>div,.pv-audio-mode-sound>div:nth-child(9)>div,.pv-audio-mode-sound>div:nth-child(13)>div,.pv-audio-mode-sound>div:nth-child(19)>div{height:17px;animation:pvscaley1 .5s infinite cubic-bezier(0.85, 0.25, 0.37, 0.85)}.pv-audio-mode-sound>div:nth-child(1)>div,.pv-audio-mode-sound>div:nth-child(11)>div,.pv-audio-mode-sound>div:nth-child(21)>div{height:6px;animation:none}.pv-audio-mode-sound>div:nth-child(even)>div{animation-delay:-.3s}.pv-sound-paused .pv-audio-mode-sound>div>div{animation-play-state:paused}@keyframes pvscaley0{0%{height:10px}50%{height:6px}100%{height:10px}}@keyframes pvscaley1{0%{height:17px}50%{height:6px}100%{height:17px}}@keyframes pvscaley{0%{height:24px}50%{height:6px}100%{height:24px}}.pv-hide-button .pv-audio-mode .pv-audio-mode-right>div>div:nth-child(1){font-size:16px}.pv-hide-button .pv-audio-mode-sound>div{width:2px;min-width:2px}.pv-hide-button .pv-audio-mode .pv-audio-mode-right>div>span{font-size:12px;line-height:28px;width:86px}.pv-hide-button-2 .pv-audio-mode .pv-audio-mode-right>div>div:nth-child(1){font-size:14px}.pv-video-player-ipad .pv-volume-slider{display:none !important}.pv-player-font{font-family:"helvetica neue","hiragino sans gb","tahoma","microsoft yahei ui","microsoft yahei","simsun","sans-serif" !important}.pv-video-player{color:#fff;font-size:14px;line-height:1;font-family:"helvetica neue","hiragino sans gb","tahoma","microsoft yahei ui","microsoft yahei","simsun","sans-serif";position:relative;height:100%;margin:0;cursor:default;-webkit-font-smoothing:antialiased;transition:opacity .5s;box-sizing:border-box;background:#000;text-align:left !important;direction:ltr}.pv-video-player *{box-sizing:border-box}.pv-video-player.pv-full-wrap{position:fixed !important;width:100% !important;height:100% !important;left:0;top:0;z-index:10000}.pv-video-wrap{position:absolute;top:0;left:0;right:0;bottom:0}.pv-video-wrap #___wow_popup_window_placeholder___{display:none !important}.pv-video-wrap .pv-opa-tk{position:absolute;pointer-events:none;color:#fff;-webkit-text-stroke:1px #262626;font-weight:bold;opacity:0.01;font-size:14px;white-space:nowrap}.pv-hide{display:none !important}.pv-video-bottom{position:absolute;left:0;right:0;bottom:0;-ms-user-select:none;user-select:none;z-index:1}.pv-controls{box-sizing:border-box;font-family:"helvetica neue","hiragino sans gb","tahoma","microsoft yahei ui","microsoft yahei","simsun","sans-serif";font-size:14px}.pv-controls *{box-sizing:border-box}.pv-controls button{outline:none;border:0;vertical-align:top;background-color:transparent;text-align:center;color:#fff;width:34px;cursor:pointer;display:inline-block;height:100%;font-size:14px;font-family:"helvetica neue","hiragino sans gb","tahoma","microsoft yahei ui","microsoft yahei","simsun","sans-serif"}.pv-progress-wrap{position:absolute;left:0;right:0;cursor:pointer;z-index:2;transition:transform .1s;-ms-user-select:none;user-select:none;-webkit-user-select:none}.pv-progress-wrap .pv-progress-target{transition:opacity .1s ease}.pv-progress-wrap .pv-progress-bg,.pv-progress-wrap .pv-progress-target{transition:transform .2s}.pv-progress-wrap .pv-progress-bg{-ms-transform-origin:left bottom;transform-origin:left bottom}.pv-progress-wrap:hover .pv-progress-touch{z-index:10000}.pv-progress-wrap:hover .pv-progress-bg{-ms-transform:scaleY(1);transform:scaleY(1)}.pv-progress-wrap .pv-progress-key{position:absolute;width:100%;height:100%;top:0;left:0;z-index:1}.pv-progress-wrap .pv-progress-key>span{position:absolute;top:0;height:100%;width:4px;background-color:#fff;margin-left:-3px;border-radius:50%}.pv-first-h .pv-progress-wrap:hover .pv-progress-target{opacity:1;transition:opacity .2s ease;-ms-transform:scaleX(1.2) scaleY(1.2);transform:scaleX(1.2) scaleY(1.2)}.pv-first-h .pv-progress-wrap:hover .pv-progress-touch-time{display:block;z-index:0}.pv-first-h .pv-progress-wrap:hover .pv-progress-key>span{-ms-transform:scaleX(1.5);transform:scaleX(1.5)}.pv-progress-bg{position:absolute;left:0;width:100%;height:100%}.pv-progress-touch{background-color:transparent;position:absolute;bottom:-2px;width:100%;height:18px;cursor:pointer;z-index:5}.pv-progress-current{position:absolute;top:0;left:0;width:100%;height:100%;font-size:0;z-index:1}.pv-progress-current-bg{position:relative;display:inline-block;height:100%}.pv-progress-target{position:absolute;width:10px;height:10px;top:50%;margin-top:-5px;margin-left:-5px;border-radius:5px;background-color:#fff;opacity:0}.pv-progress-buffer{position:absolute;top:0;left:0;left:0;right:0;height:100%;-ms-transform-origin:0 0;transform-origin:0 0}.pv-loading{position:absolute;width:100%;text-align:center;top:50%;margin-top:-6px;display:none;opacity:1;transition:opacity .5s}.pv-loading>span{width:12px;height:12px;background-color:#fff;border-radius:100%;margin:2px;display:inline-block}.pv-loading>span:nth-child(1){animation:pvscale 0.75s -0.24s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)}.pv-loading>span:nth-child(2){animation:pvscale 0.75s -0.12s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)}.pv-loading>span:nth-child(3){animation:pvscale 0.75s 0s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)}@keyframes pvscale{0%{transform:scale(1);opacity:1}45%{transform:scale(0.1);opacity:0.7}80%{transform:scale(1);opacity:1}}video.pv-video{position:absolute;left:0;top:0;width:100%;height:100%;background:#000;z-index:auto}.pv-progress-touch-time{display:none;padding:3px;font-size:12px;background-color:rgba(0,16,27,0.7);position:absolute;bottom:100%;margin-bottom:8px;color:#fff;border-radius:4px;text-align:center}.pv-progress-touch-time:after{content:\'\';position:absolute;left:50%;margin-left:-4px;top:100%;width:0 !important;height:0 !important;display:inline-block;border:4px solid transparent;border-top:4px solid rgba(0,16,27,0.7);border-width:4px 4px 0 4px}.pv-progress-touch-time:before{content:"";position:absolute;left:0;top:100%;width:100%;height:8px}.pv-thumbnail{display:none;width:160px;height:90px;margin-bottom:2px}.pv-currenttime{min-width:44px;margin:0 auto;line-height:16px;max-width:160px;word-break:break-all;color:#fff}.pv-currenttime>a{margin-top:5px;display:inline-block;text-decoration:none;color:#fff;line-height:24px;border-radius:12px;padding:0 10px}.pv-control-wrap-style,.pv-control-wrap-style2{display:none;position:absolute;bottom:100%;left:50%;margin-bottom:-4px;padding-bottom:15px;-ms-transform:translateX(-50%);transform:translateX(-50%);transition:opacity .5s}.pv-control-wrap-style{z-index:-1;opacity:0}.pv-control-wrap-style:hover{display:block}.pv-control-wrap-style2{z-index:999;opacity:1}.pv-first-hh .pv-control-wrap-style{display:block}.pv-first-h .pv-control-wrap-style{display:block;pointer-events:none}.pv-first-h .pv-component-wrap:hover .pv-control-wrap-style{z-index:999;opacity:1;pointer-events:auto}.pv-fullscreen-tip,.pv-fullscreen-page-tip,.pv-pip-tip{margin-bottom:11px;font-size:12px;line-height:30px;padding:0 9px;border-radius:4px;text-align:center;white-space:nowrap}.pv-fullscreen-page-wrap,.pv-pip-wrap{display:none !important}.pv-cover{position:absolute;left:0;right:0;top:0;bottom:0;color:#fff;z-index:1;display:none;background-color:#000;background-repeat:no-repeat;background-position:center;background-repeat:no-repeat}.pv-cover>div{position:absolute;width:100%;height:100%;left:0;top:0;background-color:#00101b;opacity:.7;pointer-events:none}.pv-cover>span{font-size:28px;width:60px;height:60px;line-height:60px;text-align:center;position:absolute;left:50%;top:50%;margin-left:-30px;margin-top:-30px;cursor:pointer;z-index:1}.pv-cover>span.pv-cover-btn-replay{background-image:url(' + h + ');background-size:48px 48px;background-repeat:no-repeat;background-position:center top}.pv-cover>span.pv-cover-btn-replay:before{content:"";display:none}.pv-cover>span.pv-cover-btn-custom-icon{background-size:cover;background-repeat:no-repeat;background-position:center top}.pv-cover>span.pv-cover-btn-custom-icon:before{display:none}.pv-hide-button .pv-small-hide{display:none !important}.pv-hide-button-2 .pv-xsmall-hide{display:none !important}.pv-hide-button-3 .pv-xxsmall-hide{display:none !important}.pv-teaser-layout{position:absolute;width:100%;height:100%;left:0;top:0;background-size:100% auto;background-repeat:no-repeat;background-position:center;background-color:#000}.pv-teaser-layout>video{position:absolute;width:100%;height:100%;left:0;top:0}.pv-teaser-layout>span.pv-teaser-layout-skip{color:#fff;position:absolute;right:20px;top:20px;padding:5px 15px;cursor:pointer;background:rgba(0,0,0,0.6)}.pv-teaser-layout>span.pv-teaser-layout-skip:hover{background:rgba(255,255,255,0.4)}.pv-teaser-layout>span.pv-teaser-layout-volume{position:absolute;display:inline-block;line-height:32px;border-radius:50%;background:#262727;width:32px;text-align:center;left:20px;top:20px;cursor:pointer}.pv-logo{position:absolute;pointer-events:none}.pv-logo a{pointer-events:auto}.pv-logo img{max-width:100%;max-height:100%}.pv-logo img.pv-logo-max{max-width:120px;max-height:120px}.pv-logo-left-top{top:15px;left:15px}.pv-logo-left-down{bottom:50px;left:15px}.pv-logo-right-top{top:15px;right:15px;text-align:right}.pv-logo-right-down{bottom:50px;right:15px;text-align:right}.pv-no-pointer{-ms-user-select:none;user-select:none}.pv-no-pointer a{cursor:default}.pv-no-pointer:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%}.pv-start-time,.pv-line-tips{position:absolute;left:20px;bottom:80px;padding:7px 20px;font-size:12px;line-height:16px;color:#fff;background:#262727;border-radius:20px;overflow:hidden;z-index:1;display:none}.pv-start-time>a,.pv-line-tips>a{text-decoration:none;font-size:12px;color:#03a9f4;display:inline-block;margin-left:20px;margin-right:20px}.pv-start-time>span,.pv-line-tips>span{font-size:16px;width:40px;text-align:center;position:absolute;right:0;top:7px;cursor:pointer}.pv-line-tips{display:block;padding-right:40px}.pv-line-tips>a{margin-left:0;margin-right:0}.pv-dm-wrap>button{display:none;font-size:15px;padding-left:7px;padding-right:7px;width:28px}.pv-danmu-tip{margin-bottom:11px;font-size:12px;line-height:30px;padding:0 9px;border-radius:4px;text-align:center;white-space:nowrap}.pv-setting-choose{white-space:nowrap}.pv-lang-en .pv-skin-red .pv-fullscreen-tip,.pv-lang-en .pv-skin-red .pv-fullscreen-page-tip,.pv-lang-en .pv-skin-red .pv-pip-tip,.pv-lang-en .pv-skin-blue .pv-fullscreen-tip,.pv-lang-en .pv-skin-blue .pv-fullscreen-page-tip,.pv-lang-en .pv-skin-blue .pv-pip-tip{margin-left:-15px}.pv-lang-en .pv-skin-red .pv-fullscreen-tip:after,.pv-lang-en .pv-skin-red .pv-fullscreen-page-tip:after,.pv-lang-en .pv-skin-red .pv-pip-tip:after,.pv-lang-en .pv-skin-blue .pv-fullscreen-tip:after,.pv-lang-en .pv-skin-blue .pv-fullscreen-page-tip:after,.pv-lang-en .pv-skin-blue .pv-pip-tip:after{margin-left:10px}.pv-lang-en.pv-control-outside .pv-skin-green .pv-fullscreen-tip,.pv-lang-en.pv-control-outside .pv-skin-green .pv-fullscreen-page-tip,.pv-lang-en.pv-control-outside .pv-skin-green .pv-pip-tip{margin-left:-15px}.pv-lang-en.pv-control-outside .pv-skin-green .pv-fullscreen-tip:after,.pv-lang-en.pv-control-outside .pv-skin-green .pv-fullscreen-page-tip:after,.pv-lang-en.pv-control-outside .pv-skin-green .pv-pip-tip:after{margin-left:10px}.pv-hide-fullscreen .pv-fullscreen-wrap{display:none !important}.pv-show-fullscreen-page .pv-fullscreen-page-wrap{display:inline-block !important}.pv-show-pip .pv-pip-wrap{display:inline-block !important}.pv-object-position-left .pv-video{object-position:left center}.pv-object-position-right .pv-video{object-position:right center}.pv-object-position-top .pv-video{object-position:center top}.pv-object-position-bottom .pv-video{object-position:center bottom}\n', ""]),
		t.exports = e
	},
	function(t, e) {
		t.exports = "data:application/font-woff;base64,d09GRgABAAAAABJYAAsAAAAAHswAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY+sWc9Y21hcAAAAYAAAAEfAAADWL0nq95nbHlmAAACoAAADDUAABQM3hMbkmhlYWQAAA7YAAAAMQAAADYYz9n0aGhlYQAADwwAAAAgAAAAJAffa6RobXR4AAAPLAAAACUAAACYYOf/+WxvY2EAAA9UAAAATgAAAE5l2mCcbWF4cAAAD6QAAAAdAAAAIAE6AHpuYW1lAAAPxAAAAUkAAAKF+LeqtXBvc3QAABEQAAABRgAAAiMB3YQieJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2Dk9GScwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGBxeWP//z9zwv4EhhrmZoQEozAiSAwAQiA2JeJzt0tdRQzEQheFfXOeAyDmHNzog5x6oxR4TDE+URh13tgtztEsZyPN5daUZPexZoAlUciYNSN8kyvrSafLzip6fN3jRd0e/ObBnG9t0NtPu3EY2KTtfSfcHHGk3YMg8mQUWWWKZPiu6W2WNFm26erXSm83yWmrxvwblL/38fZ2WzoZyYxdBPcUug7qLXQX1GbsO6jh2E9R77DYoBewuKA/sPigZ7CEoI+wxKC3sKSg3ZR6UIDYKyhIbB6WKTYLyxV5DmR97C2XW7D2UebOPUObQpkETkWtc6UOuk4MN1TkHm6qVgy3VhoNt1aaDHdWWg13VtoM91Y6DfdWuQ3Ob656DQ9W+Q9Oc64GDY9WhgxOyMsmey7rqp1OIv/AFaQoAeJyNWH1sW9UVv+de+704cWy/Z/s9O3Xs9+zYpnHiOo7tV680mHaoLZA0jCYtDNa069qxNRKxOthgqC4gNlpUaBESjLYDtDGtZtK0P6ai/ZFE3dTsj4lJqGW00E0k0tCkQfmQVqH6Zee+Z7dpgUIc33vu97nn/s6XCSNk8TQ7g5VM4iRFCERBlRKSLulBPQtpqVAyQPdANwQUVR+C1VBIOXGI1eI5NtYgkDFPI9WXYMIiSeTzCeCl+S6QRcII9MXNz4A0auNI0Z/FVzjMDOQTxxN5sKux44QQijx85CDMS/zkBkJcMBiFgJCBeGo1DEFeUYPg5DSkIZGFQmmV1RcQHMR8aktI00ILahy0nAawx7xTjZtP3Ql77P6QBnH4h/kUaAOaHpoP6XpoC/yoiqV5ACfxbi2M3YQIiw3kZJI9RtqIRLrJcpInQ4T4OSfxLJTUvIJEqlBSlYAXBOSmUIoBjgzRKCAv6bgQUPKlQkpsjSkBsaTGYtkoaIocCvWEwmlKI9ThoILU1SmEYjE5ploDoRDvjVDKahDNxmL9mpv3JsIp6qR+YCzFGB2WY7GQ0NklqbEJe3RNc8SPswhbXLT4r6EMo8g98Qfi6WIhFRfw5ThVyitBMa+0WoNXyN0dgBt2QCwb28RYBziGrJL1CUIU+ZOjWKvRqCo7aEgQLF7tGg9EaZHFE/h260mQJMkAWU02kDGyjUwS4rTxM0QH9XyUBqWAhzLsQTCJEoIMwWQwnYvU0LmURauwHthIXxGsGPBAlg5xTATzUfDQLBRtCLRms4OXFgYqIOnLVRZRl+sSp6Ay0JjDXqzpSqyPm/McEdCN5UlO1XlRlSIeMaxrfj3k1/Sw6InIIU1u9mknF5og0tbxbY6rvZokab1qY5xTtJ7j2+fMlXYN44gm4JAq22DkRbm5rRTSq3KkUwjruh+0/a3esNZaw2XJdfEEm0NZdpAwMVCCKZIuEUMhqkAYig2lhkIrZKlf5ZJIrQCRY/ImSKMU8zEw8JEDIiWz5qLTCTA7C+B0mouzh2YZmz2E5eC2R1zDHWJbIBJpHxmRMppveNinZSSbXrd0De7BVHsVlt98ZNugWR9pj0QCbWLHyIhP6/ONbPRldB/SesZ3De8rrsM7E0QhIaSR+a/P9DqHy6eE5TbH97xaxrf+L1+D28aHnS4fk8WOHTjZu/4T5FJqydjCq4K2ZiUhSQukqYTOodREqgcYfsUWfjk+RYQtQljBGSVDygI7hbZFC5tlDhFKOOxAO4kwaJxqYpGWc5Xf4jjaHOCTQTsCCMBTYVyX0zmOTILdY2bZhimcUpdrElBEkq6a9ZCuhWEsxIHRfplnHXVsOelHPSuSMrmdbCL3oMVeolSDaKSv1jqUs17UoTgYNHidKA6m8Wvg16mohorv4oFUWkwbqeIQ+JUhmhYVbCTiqK0Hl2jRRbXf/NZVapavVM0qHDSr1ao5D93m/NRU2fqHU0NF4Q4hBjfu/gknNLpvYllOaxcPeLce8Hq7kKQ7lihPJX+Vepl/7leDVXNltVrHjatl/CxAzDkqFH/6/SEaww2Lq7ftM38HaqbQdcCx6YBD7S18Xn96r6c/iSu+xXI214ffrnrTwVS5LfgKLanGVdu28BUELvMU5BYxnqVFCXm4YhGlxvmetYMRumuYxpNrCsuWFdasw2+Sxod3UU40zvNufj+wLhmhGRLAhoh6FL9GjZj7bYcg98tO9g7H+8y01KvB386Kgs/nbDvHtWZmGjWotRet0yPWXip3brhTGs0u3AS4lSDC2RluGs61Ce0uh+Q+i8oOXtg3I6HSv8Oc7eGIIrzt03sl7r8JcRB6hnj5Lf06DyFa+jMEMCglxGCVklyFIrpNYgGKPVEu1+nppQZ0LldpzMFcvbrkrlm+Y5Iz1zR1JWMIQxTuXpnbl5Gmr+Hn317v9NV8e/st9hYXF99CHbqBCHhjnVvX5AooGoMSIB7SiTRnOphGZUgDF4KKh6D7iVJVLxmqkLC1Cin2/olAvWxWuR7cvB9W46WqMOnr9196QWbRfj/bJTsuPc5xDJFlaq07Yd2XPiAced5frZsrYdxS8ym88Ef3mlHZ4aXnfP09Tm8j6V0BHy9Yo+D+QcCSiMu1TWrKopseJcv4uzcf6wtMP3NPT3PLPDPj69N8S2haQSignLCht2Rm0U0cHG/iQMDQxt4VQx7cVcGz6IvCZegAmnqOJtjidJzju89Ocx9wliHorDdb/CNi/Tskhg29aGRB9AC6KlUpGYMICJRhSjZKDhXFzk6a70/c9u7k5KQc/M2DD073Ptj76SsvX0jpjz99GLL35cvwenni3pUrBuYeeOBFt+vh+4/8CZyzR38Jyq233PRw3lxoYeQu+hJRedR4jV/BR4xSgd1inmg5jzMcF6+D0R7pDopttGLeZrmItvYz/Hqvw7GONjHYHVlibxkR0ZbwuFRF2cdIgqQJ4ZFxETENWPuxZlgbzbaEdRFUF1UBLXu9WqV1Xs9Xq/PN+lLVHoDymDlHI7By3Jxj69CE1s2yNcQOLmmMW+PUrshVvuBr8dbiaTnYPCa/kDezbneY5VbHgnUgHP88e7TcvIBZj0CZT1poMWfbuoPIm2TlERigAQ+ei+iOIK+yrUoopDSOKQN94XDfgAJvejKFjMd8obOrr4u+0ZXp6my9qY8+g3cjgH5JVEV0U0aa+bLvvZedn7dKur1FYbkkBr1WJpY8uBySTTlA872SLTlFzIX61BQtc2JqqnFqaqrOSbpgd9AjUzbBS/M4yiUyhX8cfeSrzm29g9E8t9g81988Fx/AOuU4BwUC4vKx2GGJHBu85MdWmxNsW8tyGOdHMF8jGAun0sUsYLKEgT5P0y67uSyAgV5fpfdLXpA7JzyyVxq/D9hr+/a9xuA+c+buyt10/9pAonOjR5Y9GzsTgbWJ57bjIE7Z/pz5yUOvvvoQ3oss1vCONeImIdJDcuRGchfZSogeF8RgFDAawuOTmGcE0FxgApROijwTQkONyQdLeHjeODiEWWNyKf012Ca+IFpgjReQ64iqHUl3VOlofDvZoUTdyQ41OlXwKYqPF+z+y6T5xJff1p7Bi53tzT06UqnW1hBpnra0WPwq+VAL808jBrz83f1N19eMwVrhpGh7wgXb0fEoSuulG3nAg5GP1cl4itEYb2YsS1KNVs9AxdKvGpvBt8BT/RLUWIXVLtmQEHDsP2w3k/DFfIiNDHq4tYgPg6UEtMBO1CM0wqWUaqVPg1Zq5QfRGjT8KPdSCvPtNBKYJwYEfAYMBzFJVD0APx+94NRTuR/CLaOjc8JW2fmoICuKLCmKaj4/mvw19W8VLrjfLKf0xieSAqBIkqr+U1Yg7GmPUOiC2ihUYMOWe5/+1ejoh0J4x+Rt/2KGEghQQ/UH6d/N9T+u3L57R9gJIffFHZtvbawIBFSDBgKK8V8aaVdkRfYHm78T/AH9ywgiP4t3w0RcFdBCCOgMU2kjbTku9NYGZt+GgnZDSS6BFTslHBvuXfXswPp1A4dXZYaPCsLR2zOrDuU2rM/x9jHBLG+YoHRig1VCrScx8Ow3sL+z89hwZtXhgcSGntyhG3Gh232Ud+R6nmhNxrLJ3wXUFR9xoSUgSV3CiFvSpYQT44mgC4ICZRMNAhNmhc1MNF7666cMKubMGx+OUm2igWmBdjjV9gzgOz8TNl+x41lb9zi2Mq2MmoePNsz816TTSSHFh63fHthg4xeb91C6ZzPdadVOuqlieiqbKNbwMdZmUeoB6JHe8nprV6Zttpb9z57Xmr+pXQ5AICB3PNne085/a1j8wMGYjHx1k1WIxUEePCEjmI/zsDpZUjh7GESkEUXOL4lYLP9crqo6YMJTDemgwaQjz1jeseq0232aHn1sry/eL+3dJ2fjUo3T8t7HOrqjSlsbzeCSBXsl5ucLDlehMV5wOeSL8oJ88bNHa1J/3Ld3ny+elfbtlTn9qFtsC0ajxGnxTpD3TuQ9g1nUGm5FkX9kv4jWLAvO69+mNVfhc0W7UUixyPYapbXtQ3eA47uXPv3SW8GWDRMAExucI07nyO9zNwPcnAN6pOo9//LL573Vw/uffHbqenf7YNy195579rrGnf07d/bruBr38MzZtsHCiuU3XSC60NWDAQ4yZuJnDOpWAXVssAwWFnVlgJD/A8/GI78AAAB4nGNgZGBgAOLGNzwL4/ltvjJwszCAwK0bXr9g9P+//xtYmJmbgVwOBiaQKABzHA3JAAAAeJxjYGRgYG7438AQk8Pw/+//vyzMDEARFKAGAKtDBvJ4nGNhYGBggeIUhv9/cxj+/2dBEiOIH5OoHi8GmQUxDwDLAQw4AAAAAAAAAABCAIQA5AEgAcYCJAJ4AtIDZgOwA9YD/AQiBEwEdATSBQAFJgVeBYoF2AYmBkgGYgaeBtgHEAegB9YH5AhWCKYIzgkaCXgJ5AoGAAB4nGNgZGBgUGPIY+BiAAEmIOYCs/+D+QwAF/ABtQAAAHicbZI9bsJAEIXf8hfFSCkSkpTZiiJI5qekRYEyEgU9mLUB+U/LgkS6HCDnySFygjS5Qe6QhxmERLC1o2/evjcayQZwix8oHJ57ngMreOwOXMIVnoTL1JvCFXJHuIo6+sI16i/CHlp4Fa7jDm+coCrX7J7xIazQwKdwCTf4Ei5T/xaukH+Fq3hQSriGhnoU9jBRLeE6murdG1gzdWauZzu9DLI0zFLn5dsjjk20iaf2JJxoYux6maW663dO4sikxh7nrbdRz7lQhzZL9JC3Jo4zndtsZQLnL5zL++12KLofZAnXG8DCYArHOofGDDvWJQJkSBEW1dGXY/tPHTMTYYOYeXvRcUmbMGWxpr7vNbrw+ckuOUd0poX7fL813RF6VB3dmscyk5CGkjXcKiZrTt7fragE1H0silTOX6PNNzzz+8UOyR9NjHXFAAAAeJxtTstSwkAQTCuRkPAQxff7haf8hKgnvICl5xAmyVYtu6ndxejfm2ws4OCcumd6utvZcurxnf9niC1sowEXO2jCQws+ArTRQRc97KKPPexjgAMc4gjHOMEpznCOC1ziCte4wS3ucI8HDPHoBCyWIsxZHuaxPzMinBbMxFlQwQ85f5Nz6tSYxbRiT0vOyYRS9Cr2opRUI6ZiTpZPWJqZmlufCWkjFXU3P5PEpo1JpCbzbLCRuTWPSrviWRZizcaUGMtG0YJUVAa3V7d3mXc3T0nSqmjMpa4jrcp2+muTKNKZNdDEKTY071ekoNlr2W4aKyIxqDb0zcznxtb2zHn0E1j3UC8izruVKikl2j76a+hxlgpTFmrWQLh5tNTUqBz8WqIzaTxNxjCRaldnkSLXMMPJ/5J8uSAhBXk1LN9tquP8Ajz5ogwAAA=="
	},
	function(t, e) {
		t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAfCAYAAAB3XZQBAAAByUlEQVRYhe2XPUscURSGHyViECGxsDBaWym4ESyClaVYB/KBqWz9A2lT5C+kzF+wSLBSbNQUYpekCRhSJMSFQESEoI/FzuJ6M6N3dnZmEPaF08w9595nDufcD9RRdUPdU+dUAptTdxOf0ZTxXlouFtSnXulYbXQ4N5JvbT0rGT4XC+qU2kwJCp2biW+Z8LlY2kGPU4JC584slGnRLDcF1QGeiyUMepUSsFoxeDRLp3Mj42/DxqnColiynJumN04d4Jks+H+Ht+sqrXGq3m1uZMHre2vYnGEWqtznb2XBq1Nt3+xTbd9qT9golgGVu6rBugGKqA9fl/rwdakPX5f68HXpTsPfKxg/CMwCT4AZYBqYAMaBYeAB8A84AZrAN+ALsAtsAb8Krd7lBWpBfef1t2Venatb6kt1qBuOvAGz6scCwFn6buvZN1AW/Lp6VgJ4p7bVyVim2CvxG+B1xtgFcJjU8SHwFfgB/EnsPjAGPAQe0eqNRWAp+R7qN7ACfOpFzT/PyNKOuqaOx2YqsCF12dbD4iKY+6+tp1/hsjkIJv6gzncJnGXz6mawzttewL9PJvucZKqX0KG9UH+qRzEJiq35EeA0xrFKXQKoplpFM3MPLwAAAABJRU5ErkJggg=="
	},
	function(t, e) {
		t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACxElEQVRYR8WXTYiNYRTHf/8FFsxspISNkpGFooSFfJR8LETYsCIpk1IoC1/NYMvKWLCxwMKIiEiZkQWlzEKJiaSQEmGuBcrRMefyzp33zvu+c6/eU7duved5zu85X895RE4xs7HAMmAtMBuYEj/f4V38ngLXgB5JP/JsrSwlM5sMHAa2AK1Z+vH9K3Ae6JT0fqQ1dQHMbBxwANgDjI9N+oCrwH3gbZzaP7k3pgKLgXXA3ND/BpwAjkv6ngaSChCnvgIsjEXdwEFJz/N4wMzagGPAxtB/CKxP88YwADObA9wApgGvgM2SfIPCYmZ+gAvAdOANsEbSk+RGQwDi5I/C+D1gg6SPhS0nFpjZROAysCQg5ic98RcgYt4bbnfjKyT9bMR4da2ZjQHuBIR7c2k1J5IAncChcLtTNnTyWvDwhHvXw3FUklcWfwDC9S8i2xeNNuZZ3oqceAB4dczwUFQBuoCdQLekTTk2WuB5IsljW0jM7FJUx2lJ7YoO9yGazKw8pWZmq4GbwEVgl6RPeSmiRJ8B3qwmOcBK4BbQJ2leno0SAK7unW6HpOt51kbIH0ezWuUAp4B24IgkT8RMqQGo6p8Ddkv6krWBmXkCdgBdDtDjZQEsl+T/M6UOgK/zZrNd0u2RNjEzv9TuAr0O4O11JtAmqT/T+mDVVHOgnvoZYK+kgTQFM3N7brffAVxpAtAiqdIkgF/APkkn6wC4PbdbSQK01iNOaSojeeAlsFWS35ipYmYtUQUDzQyBeVIB+yV5o6krtSFoRhK+BrZJ8sTKlNokbLQMz/rQkjd80QeGlOFoG5FnupecN7FCYmZDGpEPm0VbsQ8rFUmfC1keLGGflv614nBJocuoqNGk/rDLKAB88i3vOg6I8gaSAPAxvLyRLBGKcobSaqKUOpYnIDwpy3mYJCDKe5rV1G05j9OUK/i/PM9/A90yl+XmWjQ7AAAAAElFTkSuQmCC"
	},
	function(t, e) {
		try {
			var i = new window.CustomEvent("test");
			if (i.preventDefault(), !0 !== i.defaultPrevented) throw new Error("Could not prevent default")
		} catch(t) {
			function n(t, e) {
				var i, n;
				return e = e || {
					bubbles: !1,
					cancelable: !1,
					detail: void 0
				},
				(i = document.createEvent("CustomEvent")).initCustomEvent(t, e.bubbles, e.cancelable, e.detail),
				n = i.preventDefault,
				i.preventDefault = function() {
					n.call(this);
					try {
						Object.defineProperty(this, "defaultPrevented", {
							get: function() {
								return ! 0
							}
						})
					} catch(t) {
						this.defaultPrevented = !0
					}
				},
				i
			}
			n.prototype = window.Event.prototype,
			window.CustomEvent = n
		}
	},
	function(t, e) {},
	function(t, e, i) {
		i(213),
		t.exports = i(9).parseInt
	},
	function(t, e, i) {
		var n = i(15),
		r = i(214);
		n(n.G + n.F * (parseInt != r), {
			parseInt: r
		})
	},
	function(t, e, i) {
		var n = i(17).parseInt,
		r = i(142).trim,
		a = i(105),
		o = /^[-+]?0[xX]/;
		t.exports = 8 !== n(a + "08") || 22 !== n(a + "0x16") ?
		function(t, e) {
			var i = r(String(t), 3);
			return n(i, e >>> 0 || (o.test(i) ? 16 : 10))
		}: n
	},
	function(t, e, i) {
		i(216),
		t.exports = i(9).Array.isArray
	},
	function(t, e, i) {
		var n = i(15);
		n(n.S, "Array", {
			isArray: i(139)
		})
	},
	function(t, e, i) {
		i(218),
		t.exports = i(9).Object.keys
	},
	function(t, e, i) {
		var n = i(49),
		r = i(48);
		i(106)("keys",
		function() {
			return function(t) {
				return r(n(t))
			}
		})
	},
	function(t, e, i) {
		i(220),
		t.exports = i(9).parseFloat
	},
	function(t, e, i) {
		var n = i(15),
		r = i(221);
		n(n.G + n.F * (parseFloat != r), {
			parseFloat: r
		})
	},
	function(t, e, i) {
		var n = i(17).parseFloat,
		r = i(142).trim;
		t.exports = 1 / n(i(105) + "-0") != -1 / 0 ?
		function(t) {
			var e = r(String(t), 3),
			i = n(e);
			return 0 === i && "-" == e.charAt(0) ? -0 : i
		}: n
	},
	function(t, e, i) {
		i(140),
		i(60),
		i(79),
		i(223),
		i(230),
		i(231),
		t.exports = i(9).Promise
	},
	function(t, e, i) {
		"use strict";
		function n() {}
		function d(t) {
			var e;
			return ! (!g(t) || "function" != typeof(e = t.then)) && e
		}
		function r(u, i) {
			if (!u._n) {
				u._n = !0;
				var n = u._c;
				k(function() {
					for (var l = u._v,
					c = 1 == u._s,
					t = 0,
					e = function(t) {
						var e, i, n, r = c ? t.ok: t.fail,
						a = t.resolve,
						o = t.reject,
						s = t.domain;
						try {
							r ? (c || (2 == u._h && N(u), u._h = 1), !0 === r ? e = l: (s && s.enter(), e = r(l), s && (s.exit(), n = !0)), e === t.promise ? o(C("Promise-chain cycle")) : (i = d(e)) ? i.call(e, a, o) : a(e)) : o(l)
						} catch(t) {
							s && !n && s.exit(),
							o(t)
						}
					}; n.length > t;) e(n[t++]);
					u._c = [],
					u._n = !1,
					i && !u._h && B(u)
				})
			}
		}
		function a(t) {
			var e = this;
			e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), r(e, !0))
		}
		var o, s, l, c, u = i(61),
		h = i(17),
		p = i(45),
		f = i(107),
		v = i(15),
		g = i(28),
		m = i(46),
		A = i(224),
		y = i(225),
		b = i(145),
		w = i(146).set,
		k = i(226)(),
		E = i(109),
		x = i(148),
		T = i(227),
		S = i(149),
		_ = "Promise",
		C = h.TypeError,
		L = h.process,
		R = L && L.versions,
		D = R && R.v8 || "",
		I = h[_],
		M = "process" == f(L),
		P = s = E.f,
		O = !!
		function() {
			try {
				var t = I.resolve(1),
				e = (t.constructor = {})[i(21)("species")] = function(t) {
					t(n, n)
				};
				return (M || "function" == typeof PromiseRejectionEvent) && t.then(n) instanceof e && 0 !== D.indexOf("6.6") && -1 === T.indexOf("Chrome/66")
			} catch(t) {}
		} (),
		B = function(a) {
			w.call(h,
			function() {
				var t, e, i, n = a._v,
				r = F(a);
				if (r && (t = x(function() {
					M ? L.emit("unhandledRejection", n, a) : (e = h.onunhandledrejection) ? e({
						promise: a,
						reason: n
					}) : (i = h.console) && i.error && i.error("Unhandled promise rejection", n)
				}), a._h = M || F(a) ? 2 : 1), a._a = void 0, r && t.e) throw t.v
			})
		},
		F = function(t) {
			return 1 !== t._h && 0 === (t._a || t._c).length
		},
		N = function(e) {
			w.call(h,
			function() {
				var t;
				M ? L.emit("rejectionHandled", e) : (t = h.onrejectionhandled) && t({
					promise: e,
					reason: e._v
				})
			})
		},
		U = function(t) {
			var i, n = this;
			if (!n._d) {
				n._d = !0,
				n = n._w || n;
				try {
					if (n === t) throw C("Promise can't be resolved itself"); (i = d(t)) ? k(function() {
						var e = {
							_w: n,
							_d: !1
						};
						try {
							i.call(t, p(U, e, 1), p(a, e, 1))
						} catch(t) {
							a.call(e, t)
						}
					}) : (n._v = t, n._s = 1, r(n, !1))
				} catch(t) {
					a.call({
						_w: n,
						_d: !1
					},
					t)
				}
			}
		};
		O || (I = function(t) {
			A(this, I, _, "_h"),
			m(t),
			o.call(this);
			try {
				t(p(U, this, 1), p(a, this, 1))
			} catch(t) {
				a.call(this, t)
			}
		},
		(o = function() {
			this._c = [],
			this._a = void 0,
			this._s = 0,
			this._d = !1,
			this._v = void 0,
			this._h = 0,
			this._n = !1
		}).prototype = i(228)(I.prototype, {
			then: function(t, e) {
				var i = P(b(this, I));
				return i.ok = "function" != typeof t || t,
				i.fail = "function" == typeof e && e,
				i.domain = M ? L.domain: void 0,
				this._c.push(i),
				this._a && this._a.push(i),
				this._s && r(this, !1),
				i.promise
			},
			catch: function(t) {
				return this.then(void 0, t)
			}
		}), l = function() {
			var t = new o;
			this.promise = t,
			this.resolve = p(U, t, 1),
			this.reject = p(a, t, 1)
		},
		E.f = P = function(t) {
			return t === I || t === c ? new l: s(t)
		}),
		v(v.G + v.W + v.F * !O, {
			Promise: I
		}),
		i(78)(I, _),
		i(229)(_),
		c = i(9)[_],
		v(v.S + v.F * !O, _, {
			reject: function(t) {
				var e = P(this);
				return (0, e.reject)(t),
				e.promise
			}
		}),
		v(v.S + v.F * (u || !O), _, {
			resolve: function(t) {
				return S(u && this === c ? I: this, t)
			}
		}),
		v(v.S + v.F * !(O && i(150)(function(t) {
			I.all(t).
			catch(n)
		})), _, {
			all: function(t) {
				var o = this,
				e = P(o),
				s = e.resolve,
				l = e.reject,
				i = x(function() {
					var n = [],
					r = 0,
					a = 1;
					y(t, !1,
					function(t) {
						var e = r++,
						i = !1;
						n.push(void 0),
						a++,
						o.resolve(t).then(function(t) {
							i || (i = !0, n[e] = t, --a || s(n))
						},
						l)
					}),
					--a || s(n)
				});
				return i.e && l(i.v),
				e.promise
			},
			race: function(t) {
				var e = this,
				i = P(e),
				n = i.reject,
				r = x(function() {
					y(t, !1,
					function(t) {
						e.resolve(t).then(i.resolve, n)
					})
				});
				return r.e && n(r.v),
				i.promise
			}
		})
	},
	function(t, e) {
		t.exports = function(t, e, i, n) {
			if (! (t instanceof e) || void 0 !== n && n in t) throw TypeError(i + ": incorrect invocation!");
			return t
		}
	},
	function(t, e, i) {
		var h = i(45),
		p = i(143),
		f = i(144),
		v = i(24),
		g = i(98),
		m = i(108),
		A = {},
		y = {}; (e = t.exports = function(t, e, i, n, r) {
			var a, o, s, l, c = r ?
			function() {
				return t
			}: m(t),
			u = h(i, n, e ? 2 : 1),
			d = 0;
			if ("function" != typeof c) throw TypeError(t + " is not iterable!");
			if (f(c)) {
				for (a = g(t.length); d < a; d++) if ((l = e ? u(v(o = t[d])[0], o[1]) : u(t[d])) === A || l === y) return l
			} else for (s = c.call(t); ! (o = s.next()).done;) if ((l = p(s, u, o.value, e)) === A || l === y) return l
		}).BREAK = A,
		e.RETURN = y
	},
	function(t, e, i) {
		var s = i(17),
		l = i(146).set,
		c = s.MutationObserver || s.WebKitMutationObserver,
		u = s.process,
		d = s.Promise,
		h = "process" == i(63)(u);
		t.exports = function() {
			function t() {
				var t, e;
				for (h && (t = u.domain) && t.exit(); i;) {
					e = i.fn,
					i = i.next;
					try {
						e()
					} catch(t) {
						throw i ? r() : n = void 0,
						t
					}
				}
				n = void 0,
				t && t.enter()
			}
			var i, n, r;
			if (h) r = function() {
				u.nextTick(t)
			};
			else if (!c || s.navigator && s.navigator.standalone) if (d && d.resolve) {
				var e = d.resolve(void 0);
				r = function() {
					e.then(t)
				}
			} else r = function() {
				l.call(s, t)
			};
			else {
				var a = !0,
				o = document.createTextNode("");
				new c(t).observe(o, {
					characterData: !0
				}),
				r = function() {
					o.data = a = !a
				}
			}
			return function(t) {
				var e = {
					fn: t,
					next: void 0
				};
				n && (n.next = e),
				i || (i = e, r()),
				n = e
			}
		}
	},
	function(t, e, i) {
		var n = i(17).navigator;
		t.exports = n && n.userAgent || ""
	},
	function(t, e, i) {
		var r = i(39);
		t.exports = function(t, e, i) {
			for (var n in e) i && t[n] ? t[n] = e[n] : r(t, n, e[n]);
			return t
		}
	},
	function(t, e, i) {
		"use strict";
		var n = i(17),
		r = i(9),
		a = i(30),
		o = i(25),
		s = i(21)("species");
		t.exports = function(t) {
			var e = "function" == typeof r[t] ? r[t] : n[t];
			o && e && !e[s] && a.f(e, s, {
				configurable: !0,
				get: function() {
					return this
				}
			})
		}
	},
	function(t, e, i) {
		"use strict";
		var n = i(15),
		r = i(9),
		a = i(17),
		o = i(145),
		s = i(149);
		n(n.P + n.R, "Promise", {
			finally: function(e) {
				var i = o(this, r.Promise || a.Promise),
				t = "function" == typeof e;
				return this.then(t ?
				function(t) {
					return s(i, e()).then(function() {
						return t
					})
				}: e, t ?
				function(t) {
					return s(i, e()).then(function() {
						throw t
					})
				}: e)
			}
		})
	},
	function(t, e, i) {
		"use strict";
		var n = i(15),
		r = i(109),
		a = i(148);
		n(n.S, "Promise", {
			try: function(t) {
				var e = r.f(this),
				i = a(t);
				return (i.e ? e.reject: e.resolve)(i.v),
				e.promise
			}
		})
	},
	function(t, e, i) {
		i(233);
		var n = i(9).Object;
		t.exports = function(t, e, i) {
			return n.defineProperty(t, e, i)
		}
	},
	function(t, e, i) {
		var n = i(15);
		n(n.S + n.F * !i(25), "Object", {
			defineProperty: i(30).f
		})
	},
	function(t, e, i) {
		i(235);
		var n = i(9).Object;
		t.exports = function(t, e) {
			return n.defineProperties(t, e)
		}
	},
	function(t, e, i) {
		var n = i(15);
		n(n.S + n.F * !i(25), "Object", {
			defineProperties: i(133)
		})
	},
	function(t, e, i) {
		i(237),
		t.exports = i(9).Object.getOwnPropertyDescriptors
	},
	function(t, e, i) {
		var n = i(15),
		l = i(238),
		c = i(31),
		u = i(81),
		d = i(151);
		n(n.S, "Object", {
			getOwnPropertyDescriptors: function(t) {
				for (var e, i, n = c(t), r = u.f, a = l(n), o = {},
				s = 0; a.length > s;) void 0 !== (i = r(n, e = a[s++])) && d(o, e, i);
				return o
			}
		})
	},
	function(t, e, i) {
		var n = i(104),
		r = i(80),
		a = i(24),
		o = i(17).Reflect;
		t.exports = o && o.ownKeys ||
		function(t) {
			var e = n.f(a(t)),
			i = r.f;
			return i ? e.concat(i(t)) : e
		}
	},
	function(t, e, i) {
		i(240);
		var n = i(9).Object;
		t.exports = function(t, e) {
			return n.getOwnPropertyDescriptor(t, e)
		}
	},
	function(t, e, i) {
		var n = i(31),
		r = i(81).f;
		i(106)("getOwnPropertyDescriptor",
		function() {
			return function(t, e) {
				return r(n(t), e)
			}
		})
	},
	function(t, e, i) {
		i(138),
		t.exports = i(9).Object.getOwnPropertySymbols
	},
	function(t, e, i) {
		var n = i(9),
		r = n.JSON || (n.JSON = {
			stringify: JSON.stringify
		});
		t.exports = function(t) {
			return r.stringify.apply(r, arguments)
		}
	},
	function(t, e, i) {
		var n = i(29),
		r = i(152);
		t.exports = function(t) {
			if (n(t)) return r(t)
		}
	},
	function(t, e, i) {
		var n = i(153),
		r = i(154),
		a = i(41);
		t.exports = function(t) {
			if (void 0 !== a && r(Object(t))) return n(t)
		}
	},
	function(t, e, i) {
		i(60),
		i(246),
		t.exports = i(9).Array.from
	},
	function(t, e, i) {
		"use strict";
		var f = i(45),
		n = i(15),
		v = i(49),
		g = i(143),
		m = i(144),
		A = i(98),
		y = i(151),
		b = i(108);
		n(n.S + n.F * !i(150)(function(t) {
			Array.from(t)
		}), "Array", {
			from: function(t, e, i) {
				var n, r, a, o, s = v(t),
				l = "function" == typeof this ? this: Array,
				c = arguments.length,
				u = 1 < c ? e: void 0,
				d = void 0 !== u,
				h = 0,
				p = b(s);
				if (d && (u = f(u, 2 < c ? i: void 0, 2)), null == p || l == Array && m(p)) for (r = new l(n = A(s.length)); h < n; h++) y(r, h, d ? u(s[h], h) : s[h]);
				else for (o = p.call(s), r = new l; ! (a = o.next()).done; h++) y(r, h, d ? g(o, u, [a.value, h], !0) : a.value);
				return r.length = h,
				r
			}
		})
	},
	function(t, e, i) {
		i(79),
		i(60),
		t.exports = i(248)
	},
	function(t, e, i) {
		var n = i(107),
		r = i(21)("iterator"),
		a = i(47);
		t.exports = i(9).isIterable = function(t) {
			var e = Object(t);
			return void 0 !== e[r] || "@@iterator" in e || a.hasOwnProperty(n(e))
		}
	},
	function(t, e) {
		t.exports = function() {
			throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}
	},
	function(t, e, i) {
		var n = i(19),
		r = i(251);
		"string" == typeof(r = r.__esModule ? r.
	default:
		r) && (r = [[t.i, r, ""]]);
		var a = {
			insert: "head",
			singleton: !1
		},
		o = (n(r, a), r.locals ? r.locals: {});
		t.exports = o
	},
	function(t, e, i) { (e = i(20)(!1)).push([t.i, '.pv-skin-gold.pv-video-bottom{height:120px;padding:0 20px;opacity:0;transition:opacity .3s;background:-prefix-linear-zgradient(top, rgba(0,0,0,0), rgba(0,16,27,0.25));background:linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,16,27,0.25))}.pv-skin-gold.pv-video-bottom.pv-controls-hide{opacity:1}.pv-skin-gold.pv-video-bottom:before{content:"";position:absolute;left:0;top:0;width:100%;height:100%;background:-prefix-linear-zgradient(top, rgba(0,0,0,0), rgba(246,196,116,0.65));background:linear-gradient(to bottom, rgba(0,0,0,0), rgba(246,196,116,0.65))}.pv-skin-gold.pv-video-bottom>div{position:relative;height:100%}.pv-skin_gold-player.pv-control-outside:not(.pv-full-wrap) .pv-skin-gold.pv-video-bottom{opacity:1;height:62px}.pv-skin_gold-player.pv-control-outside:not(.pv-full-wrap) .pv-video-wrap,.pv-skin_gold-player.pv-control-outside:not(.pv-full-wrap) .pv-outside-bottom{bottom:61px}.pv-skin_gold-player.pv-paused .pv-skin-gold.pv-video-bottom{opacity:1 !important}.pv-skin-gold.pv-currentmode-audio .pv-quality-btn,.pv-skin-gold.pv-currentmode-audio .pv-line-btn-wrap{display:none !important}.pv-skin-gold.pv-stream-hide .pv-stream-btn-wrap{display:none !important}.pv-skin-gold.pv-subtitle-hide .pv-subtitle-btn-wrap{display:none !important}.pv-skin-gold.pv-line-hide .pv-line-btn-wrap{display:none !important}.pv-skin-gold .pv-stream-select>div{background-color:transparent}.pv-skin-gold .pv-controls{position:absolute;left:0;bottom:0;width:100%;height:58px;background:transparent !important}.pv-skin-gold .pv-controls button{font-size:18px}.pv-skin-gold .pv-controls .pv-btn-radius{height:41px !important;padding-top:17px}.pv-skin-gold .pv-controls .pv-btn-radius button>svg{-ms-transform-origin:center;transform-origin:center}.pv-skin-gold .pv-controls .pv-btn-radius:hover button{color:#212121 !important}.pv-skin-gold .pv-controls .pv-btn-radius:hover button>svg{-ms-transform:rotate(-180deg);transform:rotate(-180deg)}.pv-skin-gold .pv-controls .pv-btn-radius button{padding:0;width:80px}.pv-skin-gold .pv-controls .pv-btn-radius button>span{font-size:12px;line-height:24px;display:inline-block;width:100%;padding:0 18px;background-color:rgba(255,255,255,0.15);text-align:left;border-radius:12px}.pv-skin-gold .pv-controls .pv-controls-left{position:absolute;left:0px;bottom:0;height:58px}.pv-skin-gold .pv-controls .pv-controls-left>*{display:inline-block;height:100%;vertical-align:top;position:relative}.pv-skin-gold .pv-controls .pv-controls-right{position:absolute;right:10px;top:0;height:58px}.pv-skin-gold .pv-controls .pv-controls-right button{font-size:16px}.pv-skin-gold .pv-controls .pv-controls-right>*{display:inline-block;height:100%;vertical-align:top;position:relative}.pv-skin-gold .pv-controls .pv-time-wrap{font-size:12px;line-height:58px}.pv-skin-gold .pv-progress-wrap{bottom:56px;height:6px}.pv-skin-gold .pv-progress-wrap .pv-progress-bg{-ms-transform-origin:center;transform-origin:center}.pv-skin-gold .pv-progress-bg{-ms-transform:scaleY(0.65);transform:scaleY(0.65);background-color:rgba(255,255,255,0.35);border-radius:3px}.pv-skin-gold .pv-progress-current-bg{border-radius:3px}.pv-skin-gold .pv-progress-buffer{border-radius:3px;-ms-transform:scaleX(0);transform:scaleX(0);left:1px}.pv-skin-gold .pv-volume-wrap>div{margin:0 10px 0 0;display:inline-block;padding-top:21px}.pv-skin-gold .pv-volume-slider{position:relative;padding:5px 0;background-color:transparent !important;cursor:pointer}.pv-skin-gold .pv-volume-current{position:absolute;left:0;bottom:0;width:0;height:100%;border-radius:3px}.pv-skin-gold .pv-volume-rail{height:6px;width:90px;border-radius:3px;background-color:rgba(255,255,255,0.35);position:relative}.pv-skin-gold .pv-volume-touch{position:absolute;width:100%;height:100%;top:0;left:0;z-index:10;background-color:transparent}.pv-skin-gold .pv-volume-target{width:12px;height:12px;border-radius:6px;background-color:#fff;position:absolute;top:50%;right:-6px;margin-top:-6px}.pv-skin-gold .pv-quality-btn{position:relative}.pv-skin-gold .pv-quality-btn>svg{fill:currentColor;width:9px;height:9px;position:absolute;top:50%;right:18px;margin-top:-3px;transition:transform .2s}.pv-skin-gold .pv-quality-select{position:relative;width:80px;font-size:12px;line-height:14px;text-align:right;border-radius:4px}.pv-skin-gold .pv-setting-select-wrap{width:156px;right:-30px;left:auto !important;-ms-transform:translateX(0) !important;transform:translateX(0) !important;transition:opacity .5s,height .3s, width .3s !important;z-index:998 !important}.pv-skin-gold.pv-hide-fullscreen .pv-setting-select-wrap{right:-5px}.pv-skin-gold.pv-hide-fullscreen .pv-setting-select-layout:after{right:18px}.pv-skin-gold .pv-setting-select-layout{position:relative;height:100%}.pv-skin-gold .pv-setting-select-layout:after{content:\'\';position:absolute;left:50%;margin-left:-4px;top:100%;width:0 !important;height:0 !important;display:inline-block;border:4px solid transparent;border-top:4px solid rgba(0,16,27,0.7);border-width:4px 4px 0 4px}.pv-skin-gold .pv-setting-select-layout:after{content:"";left:auto !important;right:43px}.pv-skin-gold .pv-setting-select{position:relative;font-size:12px;border-radius:4px;background:rgba(0,16,27,0.7);height:100%;overflow:hidden}.pv-skin-gold .pv-setting-select>div{background-color:transparent !important}.pv-skin-gold .pv-setting-select .pv-setting-select-menu>div{line-height:14px;padding:8px}.pv-skin-gold .pv-setting-select .pv-setting-select-menu>div:after{content:"";clear:both;display:table}.pv-skin-gold .pv-setting-select .pv-setting-select-menu>div:before{content:"";display:table}.pv-skin-gold .pv-setting-select:after{content:"";left:auto !important;right:43px}.pv-skin-gold .pv-setting-select-menu{position:absolute;bottom:0;left:0;width:100%;height:100%}.pv-skin-gold .pv-skin-gold-menu .pv-skin-gold-menu-title{text-align:left}.pv-skin-gold .pv-skin-gold-menu .pv-skin-gold-menu-title>svg{margin-right:5px;display:inline-block;position:static}.pv-skin-gold .pv-skin-gold-menu>div{padding:8px;cursor:pointer;text-align:right;position:relative}.pv-skin-gold .pv-skin-gold-menu>div svg{fill:currentColor;width:12px;height:10px;position:absolute;top:50%;left:8px;margin-top:-5px;display:none}.pv-skin-gold .pv-skin-gold-menu>div.pv-active svg{display:inline}.pv-skin-gold .pv-skin-gold-menu>div:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.pv-skin-gold .pv-skin-gold-menu>div:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.pv-skin-gold .pv-current-select svg{width:8px;height:14px;fill:currentColor;float:right;margin-left:10px}.pv-skin-gold .pv-setting-tip{float:left;color:#bdbdbd}.pv-skin-gold .pv-current-select{float:right;cursor:pointer;min-width:50%;text-align:right}.pv-skin-gold .pv-rate-select>div{background-color:transparent}.pv-skin-gold .pv-rate-select:after{display:none}\n', ""]),
		t.exports = e
	},
	function(t, e, i) {
		i(253),
		t.exports = i(9).Reflect.construct
	},
	function(t, e, i) {
		var n = i(15),
		l = i(76),
		c = i(46),
		u = i(24),
		d = i(28),
		r = i(34),
		h = i(254),
		p = (i(17).Reflect || {}).construct,
		f = r(function() {
			function t() {}
			return ! (p(function() {},
			[], t) instanceof t)
		}),
		v = !r(function() {
			p(function() {})
		});
		n(n.S + n.F * (f || v), "Reflect", {
			construct: function(t, e, i) {
				c(t),
				u(e);
				var n = arguments.length < 3 ? t: c(i);
				if (v && !f) return p(t, e, n);
				if (t == n) {
					switch (e.length) {
					case 0:
						return new t;
					case 1:
						return new t(e[0]);
					case 2:
						return new t(e[0], e[1]);
					case 3:
						return new t(e[0], e[1], e[2]);
					case 4:
						return new t(e[0], e[1], e[2], e[3])
					}
					var r = [null];
					return r.push.apply(r, e),
					new(h.apply(t, r))
				}
				var a = n.prototype,
				o = l(d(a) ? a: Object.prototype),
				s = Function.apply.call(t, o, e);
				return d(s) ? s: o
			}
		})
	},
	function(t, e, i) {
		"use strict";
		var a = i(46),
		o = i(28),
		s = i(147),
		l = [].slice,
		c = {};
		t.exports = Function.bind ||
		function(e) {
			var i = a(this),
			n = l.call(arguments, 1),
			r = function() {
				var t = n.concat(l.call(arguments));
				return this instanceof r ?
				function(t, e, i) {
					if (! (e in c)) {
						for (var n = [], r = 0; r < e; r++) n[r] = "a[" + r + "]";
						c[e] = Function("F,a", "return new F(" + n.join(",") + ")")
					}
					return c[e](t, i)
				} (i, t.length, t) : s(i, t, e)
			};
			return o(i.prototype) && (r.prototype = i.prototype),
			r
		}
	},
	function(t, e, i) {
		t.exports = i(256)
	},
	function(t, e, i) {
		i(257);
		var n = i(9).Object;
		t.exports = function(t, e) {
			return n.create(t, e)
		}
	},
	function(t, e, i) {
		var n = i(15);
		n(n.S, "Object", {
			create: i(76)
		})
	},
	function(i, t, e) {
		var n = e(156);
		function r(t, e) {
			return i.exports = r = n ||
			function(t, e) {
				return t.__proto__ = e,
				t
			},
			r(t, e)
		}
		i.exports = r
	},
	function(t, e, i) {
		i(260),
		t.exports = i(9).Object.setPrototypeOf
	},
	function(t, e, i) {
		var n = i(15);
		n(n.S, "Object", {
			setPrototypeOf: i(261).set
		})
	},
	function(t, e, r) {
		function a(t, e) {
			if (n(t), !i(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
		}
		var i = r(28),
		n = r(24);
		t.exports = {
			set: Object.setPrototypeOf || ("__proto__" in {} ?
			function(t, i, n) {
				try { (n = r(45)(Function.call, r(81).f(Object.prototype, "__proto__").set, 2))(t, []),
					i = !(t instanceof Array)
				} catch(t) {
					i = !0
				}
				return function(t, e) {
					return a(t, e),
					i ? t.__proto__ = e: n(t, e),
					t
				}
			} ({},
			!1) : void 0),
			check: a
		}
	},
	function(t, e, i) {
		t.exports = i(263)
	},
	function(t, e, i) {
		i(264),
		t.exports = i(9).Object.getPrototypeOf
	},
	function(t, e, i) {
		var n = i(49),
		r = i(137);
		i(106)("getPrototypeOf",
		function() {
			return function(t) {
				return r(n(t))
			}
		})
	},
	function(t, e, i) {
		var n = i(19),
		r = i(266);
		"string" == typeof(r = r.__esModule ? r.
	default:
		r) && (r = [[t.i, r, ""]]);
		var a = {
			insert: "head",
			singleton: !1
		},
		o = (n(r, a), r.locals ? r.locals: {});
		t.exports = o
	},
	function(t, e, i) { (e = i(20)(!1)).push([t.i, ".pv-hide-button-2 .pv-skin-green .pv-progress-wrap{display:none}.pv-skin-green.pv-video-bottom{height:48px;bottom:20px;left:20px;right:20px;opacity:0;transition:opacity .3s}.pv-skin_green-player.pv-control-outside:not(.pv-full-wrap) .pv-skin-green.pv-video-bottom{opacity:1;bottom:0;left:0;right:0}.pv-skin_green-player.pv-control-outside:not(.pv-full-wrap) .pv-skin-green.pv-video-bottom .pv-controls{border-radius:0;box-shadow:none}.pv-skin_green-player.pv-control-outside:not(.pv-full-wrap) .pv-skin-green.pv-video-bottom .pv-controls:before{border-radius:0}.pv-skin_green-player.pv-control-outside:not(.pv-full-wrap) .pv-video-wrap,.pv-skin_green-player.pv-control-outside:not(.pv-full-wrap) .pv-outside-bottom{bottom:48px}.pv-skin_green-player.pv-paused .pv-skin-green.pv-video-bottom{opacity:1 !important}.pv-base-panel.pv-skin-green .pv-controls .pv-btn-radius button>span{background-color:rgba(255,255,255,0.35)}.pv-skin-green.pv-video-bottom.pv-first-h{opacity:1}.pv-skin-green.pv-first-h .pv-progress-wrap:hover .pv-progress-target{opacity:1;transition:opacity .2s ease;-ms-transform:scaleX(1.2) scaleY(1.2);transform:scaleX(1.2) scaleY(1.2)}.pv-skin-green.pv-stream-hide .pv-stream-select-wrap{display:none !important}.pv-skin-green.pv-subtitle-hide .pv-subtitle-select-wrap{display:none !important}.pv-skin-green.pv-stream-hide.pv-subtitle-hide .pv-stream-select-wrap+div{border-top-right-radius:4px;border-top-left-radius:4px}.pv-skin-green.pv-line-hide .pv-line-select-wrap{display:none !important}.pv-skin-green.pv-subtitle-hide .pv-stream-select-wrap{border-top-right-radius:4px;border-top-left-radius:4px}.pv-skin-green.pv-currentmode-audio .pv-quality-btn{display:none !important}.pv-skin-green.pv-currentmode-audio .pv-line-select-wrap{display:none !important}.pv-skin-green .pv-progress-wrap{height:6px;margin-top:-3px;cursor:pointer;z-index:2}.pv-skin-green .pv-progress-bg{left:0;border-radius:3px;background-color:rgba(255,255,255,0.35)}.pv-skin-green .pv-progress-touch{height:15px;bottom:-4px}.pv-skin-green .pv-progress-current-bg{border-radius:3px}.pv-skin-green .pv-progress-buffer{-ms-transform:scaleX(0);transform:scaleX(0);border-radius:3px}.pv-skin-green .pv-controls{color:#fff;position:relative;bottom:0;width:100%;height:100%;box-shadow:0px 10px 15px 0px rgba(0,0,0,0.45);background-image:linear-gradient(90deg, rgba(0,16,27,0.75) 0%, rgba(0,16,27,0.45) 100%);background-image:-webkit-linear-gradient(90deg, rgba(0,16,27,0.75) 0%, rgba(0,16,27,0.45) 100%);border-radius:6px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.pv-skin-green .pv-controls .pv-playpause{margin-right:20px;width:58px;font-size:16px;box-shadow:1px 0px 0px 0px rgba(255,255,255,0.15);border-right:1px solid rgba(0,16,27,0.651)}.pv-skin-green .pv-controls .pv-btn-radius{height:37px !important;padding-top:13px}.pv-skin-green .pv-controls .pv-btn-radius button{padding:0;font-size:12px;color:#fff !important;white-space:nowrap;width:auto}.pv-skin-green .pv-controls .pv-btn-radius button>span{min-width:60px;padding:0 10px;line-height:24px;display:inline-block;background-color:rgba(0,0,0,0.35);border-radius:12px}.pv-skin-green .pv-controls .pv-btn-radius button>span:hover{color:#fff}.pv-skin-green .pv-controls .pv-rate-btn{width:50px;text-align:center}.pv-skin-green .pv-controls .pv-progress-wrap{position:relative;top:50%;-ms-flex-positive:1;flex-grow:1;margin-left:10px;margin-right:10px}.pv-skin-green .pv-controls .pv-controls-left{font-size:12px;height:100%;white-space:nowrap}.pv-skin-green .pv-controls .pv-controls-left>*{display:inline-block;height:100%;vertical-align:top;position:relative}.pv-skin-green .pv-controls .pv-controls-right{height:100%;white-space:nowrap}.pv-skin-green .pv-controls .pv-controls-right>*{display:inline-block;height:100%;vertical-align:top;position:relative}.pv-skin-green .pv-controls .pv-time-wrap{line-height:48px}.pv-skin-green.pv-base-panel .pv-controls{background-image:linear-gradient(90deg, rgba(0,16,27,0.45) 0%, rgba(0,16,27,0.75) 100%);background-image:-webkit-linear-gradient(90deg, rgba(0,16,27,0.45) 0%, rgba(0,16,27,0.75) 100%)}.pv-skin-green.pv-base-panel .pv-controls .pv-playpause{border-right:1px solid rgba(0,16,27,0.251)}.pv-skin-green .pv-volume-slider{position:relative;padding:9px 13px;cursor:pointer;border-radius:4px}.pv-skin-green .pv-volume-slider:after{content:'';position:absolute;left:50%;margin-left:-4px;top:100%;width:0 !important;height:0 !important;display:inline-block;border:4px solid transparent;border-top:4px solid rgba(0,16,27,0.7);border-width:4px 4px 0 4px}.pv-skin-green .pv-volume-touch{position:absolute;width:100%;height:100%;top:0;left:0;z-index:10;background-color:transparent}.pv-skin-green .pv-volume-rail{height:100px;width:6px;border-radius:3px;background-color:rgba(255,255,255,0.35);position:relative}.pv-skin-green .pv-volume-current{position:absolute;left:0;bottom:0;width:100%;height:0%;border-radius:3px}.pv-skin-green .pv-volume-target{width:12px;height:12px;border-radius:6px;background-color:#fff;position:absolute;top:-6px;left:-3px}.pv-skin-green .pv-quality-select{position:relative;width:64px;font-size:12px;line-height:14px;text-align:center}.pv-skin-green .pv-quality-select>div{padding:8px 0;margin-bottom:1px;cursor:pointer;text-align:center}.pv-skin-green .pv-quality-select>div:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.pv-skin-green .pv-quality-select>div:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.pv-skin-green .pv-rate-select{position:relative;width:64px;font-size:12px;line-height:14px;text-align:center}.pv-skin-green .pv-rate-select>div{padding:6px 0;margin-bottom:1px;cursor:pointer;text-align:center}.pv-skin-green .pv-rate-select>div:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.pv-skin-green .pv-rate-select>div:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.pv-skin-green .pv-setting-select-wrap{min-width:168px;right:-33px;left:auto !important;-ms-transform:translateX(0) !important;transform:translateX(0) !important}.pv-skin-green.pv-hide-fullscreen .pv-setting-select-wrap{right:-5px}.pv-skin-green.pv-hide-fullscreen .pv-setting-select:after{right:20px}.pv-skin-green .pv-setting-select{font-size:12px;position:relative}.pv-skin-green .pv-setting-select>div{padding:8px;margin-bottom:1px}.pv-skin-green .pv-setting-select>div:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.pv-skin-green .pv-setting-select>div:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.pv-skin-green .pv-setting-select .pv-setting-tip{color:#8f8f8f;margin-bottom:6px}.pv-skin-green .pv-setting-select .pv-setting-choose>span{display:inline-block;margin-right:15px;cursor:pointer}.pv-skin-green .pv-setting-select .pv-setting-choose>span>span:last-child{margin-right:0}.pv-skin-green .pv-volumebtn{padding-left:2px;padding-right:2px;width:30px;margin-right:2px}\n", ""]),
		t.exports = e
	},
	function(t, e, i) {
		var n = i(19),
		r = i(268);
		"string" == typeof(r = r.__esModule ? r.
	default:
		r) && (r = [[t.i, r, ""]]);
		var a = {
			insert: "head",
			singleton: !1
		},
		o = (n(r, a), r.locals ? r.locals: {});
		t.exports = o
	},
	function(t, e, i) { (e = i(20)(!1)).push([t.i, '.pv-skin-red.pv-video-bottom{height:69px;padding-top:15px;opacity:0;transition:opacity .3s}.pv-skin-red.pv-video-bottom.pv-first-h{opacity:1}.pv-skin_red-player.pv-control-outside:not(.pv-full-wrap) .pv-skin-red.pv-video-bottom{opacity:1}.pv-skin_red-player.pv-control-outside:not(.pv-full-wrap) .pv-video-wrap,.pv-skin_red-player.pv-control-outside:not(.pv-full-wrap) .pv-outside-bottom{bottom:57px}.pv-skin-red.pv-video-bottom.pv-hide-ctrl .pv-progress-wrap{opacity:0;transition:transform .3s,opacity .2s ease .1s}.pv-skin-red.pv-video-bottom.pv-hide-ctrl.pv-first-h .pv-progress-wrap{transition:transform .3s,opacity .2s ease .05s;opacity:1}.pv-skin-red.pv-first-h .pv-progress-wrap:hover .pv-progress-target{opacity:1;transition:opacity .2s ease;-ms-transform:scaleX(1.2) scaleY(1.2);transform:scaleX(1.2) scaleY(1.2)}.pv-skin_red-player.pv-paused .pv-skin-red.pv-video-bottom{opacity:1 !important}.pv-skin-red.pv-stream-hide .pv-stream-select-wrap{display:none !important}.pv-skin-red.pv-subtitle-hide .pv-subtitle-select-wrap{display:none !important}.pv-skin-red.pv-line-hide .pv-line-select-wrap{display:none !important}.pv-skin-red.pv-currentmode-audio .pv-quality-btn{display:none !important}.pv-skin-red.pv-currentmode-audio .pv-line-select-wrap{display:none !important}.pv-skin-red .pv-control-wrap-style:not(.pv-fullscreen-tip){margin-bottom:-9px;padding-bottom:20px}.pv-skin-red .pv-fullscreen-tip,.pv-skin-red .pv-danmu-tip,.pv-skin-red .pv-fullscreen-page-tip,.pv-skin-red .pv-pip-tip{border-radius:0;line-height:40px;padding:0 20px}.pv-skin-red .pv-fullscreen-tip:after,.pv-skin-red .pv-danmu-tip:after,.pv-skin-red .pv-fullscreen-page-tip:after,.pv-skin-red .pv-pip-tip:after{display:none}.pv-skin-red .pv-control-wrap-style.pv-fullscreen-page-tip,.pv-skin-red .pv-control-wrap-style.pv-pip-tip{padding:0 20px;margin-bottom:11px}.pv-skin-red .pv-danmu-tip{padding-bottom:0 !important;margin-bottom:11px !important}.pv-skin-red .pv-progress-wrap{position:absolute;height:6px;bottom:100%;margin-bottom:-16px;cursor:pointer;z-index:2;transition:transform .1s}.pv-skin-red .pv-progress-bg{top:-1px;left:0;-ms-transform:scaleY(0.56);transform:scaleY(0.56);background-color:rgba(255,255,255,0.35)}.pv-skin-red .pv-progress-buffer{-ms-transform:scaleX(0);transform:scaleX(0)}.pv-skin-red .pv-controls{color:#fff;position:relative;bottom:0;width:100%;height:100%;background:rgba(169,169,169,0.4);background-clip:content-box}.pv-skin-red .pv-controls button{font-size:16px;width:40px}.pv-skin-red .pv-controls .pv-btn-radius{height:39px !important;padding-top:15px}.pv-skin-red .pv-controls .pv-btn-radius button{padding:0;font-size:14px;color:#fff !important;white-space:nowrap;width:auto}.pv-skin-red .pv-controls .pv-btn-radius button>span{min-width:60px;padding:0 10px;line-height:24px;display:inline-block;background:rgba(255,255,255,0.2);border-radius:12px}.pv-skin-red .pv-controls .pv-btn-radius button>span:hover{color:#fff}.pv-skin-red .pv-controls .pv-rate-btn{width:50px;text-align:center}.pv-skin-red .pv-controls .pv-controls-left{font-size:14px;position:absolute;left:15px;top:0;height:54px}.pv-skin-red .pv-controls .pv-controls-left>*{display:inline-block;height:100%;vertical-align:top;position:relative}.pv-skin-red .pv-controls .pv-controls-right{position:absolute;right:15px;top:0;height:54px}.pv-skin-red .pv-controls .pv-controls-right>*{margin-left:10px;display:inline-block;height:100%;vertical-align:top;position:relative}.pv-skin-red .pv-controls .pv-time-wrap{line-height:54px;margin:0 15px 0 5px}.pv-skin-red .pv-volume-wrap>div{margin:0 10px 0 0;display:inline-block;padding-top:20px}.pv-skin-red .pv-volume-slider{position:relative;padding:5px 0;background-color:transparent !important;cursor:pointer}.pv-skin-red .pv-volume-current{position:absolute;left:0;bottom:0;width:0;height:100%;border-radius:3px}.pv-skin-red .pv-volume-rail{height:4px;width:120px;border-radius:3px;background-color:rgba(255,255,255,0.35);position:relative}.pv-skin-red .pv-volume-touch{position:absolute;width:100%;height:100%;top:0;left:0;z-index:10;background-color:transparent}.pv-skin-red .pv-volume-target{width:8px;height:8px;border-radius:4px;background-color:#fff;position:absolute;top:50%;right:-4px;margin-top:-4px}.pv-skin-red .pv-quality-select{position:relative;width:88px;padding:0 11px;font-size:12px;line-height:14px;text-align:center;background-color:rgba(0,0,0,0.8)}.pv-skin-red .pv-quality-select>div{padding:0;padding:12px 0;line-height:26px;cursor:pointer;text-align:center;background-color:transparent;color:#bebebe;border-bottom:1px solid rgba(255,255,255,0.25)}.pv-skin-red .pv-quality-select>div>span{display:block;border-radius:13px}.pv-skin-red .pv-quality-select>div:last-child{border-bottom:0}.pv-skin-red .pv-quality-select:after{display:none}.pv-skin-red .pv-rate-select{direction:rtl}.pv-skin-red .pv-rate-select:after{display:none}.pv-skin-red .pv-rate-select>div{cursor:pointer;text-align:center;background-color:transparent;direction:ltr}.pv-skin-red .pv-setting-select-wrap{min-width:168px;right:-55px;left:auto !important;-ms-transform:translateX(0) !important;transform:translateX(0) !important}.pv-skin-red.pv-hide-fullscreen .pv-setting-select-wrap{right:-5px}.pv-skin-red .pv-setting-select{font-size:12px;position:relative;background-color:rgba(0,0,0,0.8);padding:0 15px;white-space:nowrap}.pv-skin-red .pv-setting-select:after{display:none}.pv-skin-red .pv-setting-select>div{padding:15px 0;background-color:transparent;border-bottom:1px solid rgba(255,255,255,0.25)}.pv-skin-red .pv-setting-select>div:last-child{border-bottom:0}.pv-skin-red .pv-setting-select div.pv-red-select-hide-border{border-bottom:0}.pv-skin-red .pv-setting-select .pv-setting-tip{color:#fff;margin-bottom:8px}.pv-skin-red .pv-setting-select .pv-setting-choose{color:#bebebe}.pv-skin-red .pv-setting-select .pv-setting-choose>span,.pv-skin-red .pv-setting-select .pv-setting-choose>div{display:inline-block;margin-right:15px;cursor:pointer;line-height:26px;line-height:26px;padding:0 12px;border-radius:13px}.pv-skin-red .pv-setting-select .pv-setting-choose>span>span:last-child,.pv-skin-red .pv-setting-select .pv-setting-choose>div>span:last-child{margin-right:0}.pv-skin-red .pv-setting-select .pv-setting-choose>span:last-child,.pv-skin-red .pv-setting-select .pv-setting-choose>div:last-child{margin-right:0}.pv-skin-red.pv-base-panel .pv-setting-choose>span.pv-active,.pv-skin-red.pv-base-panel .pv-setting-choose>div.pv-active{background-color:#fff !important}.pv-skin-red .pv-setting-select .pv-stream-select-wrap,.pv-skin-red .pv-setting-select .pv-switch-player{display:inline-block;border-bottom:0}.pv-skin-red .pv-switch-player+.pv-stream-select-wrap{margin-left:25px}.pv-skin-red .pv-progress-touch{bottom:-7px}.pv-skin-red .pv-progress-touch-time{background-color:transparent}.pv-skin-red .pv-progress-touch-time:after{display:none}.pv-skin-red .pv-progress-touch-time .pv-currenttime{background-color:rgba(0,0,0,0.6)}.pv-skin-red .pv-progress-touch-time .pv-has-thumbnail+.pv-currenttime{position:absolute;left:8px;bottom:8px}.pv-skin-red .pv-dm-wrap{margin-right:8px}.pv-skin-red .pv-dm-wrap>span{margin-top:15px;display:none;vertical-align:middle;line-height:24px;padding:0 12px;border-radius:12px;background:#f44336;cursor:pointer}.pv-skin-red .pv-dm-wrap>span:before{content:""}.pv-skin-red .pv-dm-wrap>span:after{content:"";display:inline-block;width:4px;height:4px;border-radius:50%;border:4px solid #fff;vertical-align:middle;margin-left:3px}.pv-skin-red .pv-dm-wrap>span.pv-icon-btn-Bullet-off{background-color:rgba(255,255,255,0.2) !important}.pv-skin-red.pv-base-panel .pv-dm-wrap>span.pv-icon-btn-Bullet-on{background-color:#fff}.pv-hide-button .pv-skin-red .pv-volume-rail{width:90px}.pv-hide-button .pv-skin-red .pv-time-wrap{margin-right:10px}\n', ""]),
		t.exports = e
	},
	function(t, e, i) {
		var n = i(19),
		r = i(270);
		"string" == typeof(r = r.__esModule ? r.
	default:
		r) && (r = [[t.i, r, ""]]);
		var a = {
			insert: "head",
			singleton: !1
		},
		o = (n(r, a), r.locals ? r.locals: {});
		t.exports = o
	},
	function(t, e, i) { (e = i(20)(!1)).push([t.i, ".pv-skin-blue.pv-video-bottom{height:0;padding-top:15px;overflow:hidden;transition:height .4s}.pv-skin_blue-player.pv-control-outside:not(.pv-full-wrap) .pv-skin-blue.pv-video-bottom{height:63px;overflow:visible !important}.pv-skin_blue-player.pv-control-outside:not(.pv-full-wrap) .pv-video-wrap,.pv-skin_blue-player.pv-control-outside:not(.pv-full-wrap) .pv-outside-bottom{bottom:51px}.pv-skin_blue-player.pv-paused .pv-skin-blue.pv-video-bottom{height:63px;overflow:visible !important}.pv-skin-blue.pv-video-bottom.pv-first-h{height:63px}.pv-progress-touch{height:0}.pv-video-player:hover .pv-skin-blue.pv-video-bottom{transition:height .4s}.pv-video-player:hover .pv-progress-touch{height:15px}.pv-skin-blue.pv-video-bottom.pv-hide-ctrl .pv-progress-wrap{opacity:0;transition:transform .3s,opacity .2s ease .1s}.pv-skin-blue.pv-video-bottom.pv-hide-ctrl.pv-first-h .pv-progress-wrap{transition:transform .3s,opacity .2s ease .05s;opacity:1}.pv-skin-blue.pv-first-h .pv-progress-wrap:hover .pv-progress-target{opacity:1;transition:opacity .2s ease;-ms-transform:scaleX(1.2) scaleY(1.2);transform:scaleX(1.2) scaleY(1.2)}.pv-skin-blue.pv-stream-hide .pv-stream-select-wrap{display:none !important}.pv-skin-blue.pv-subtitle-hide .pv-subtitle-select-wrap{display:none !important}.pv-skin-blue.pv-line-hide .pv-line-select-wrap{display:none !important}.pv-skin-blue.pv-stream-hide.pv-subtitle-hide .pv-stream-select-wrap+div{border-top-right-radius:4px;border-top-left-radius:4px}.pv-skin-blue.pv-subtitle-hide .pv-stream-select-wrap{border-top-right-radius:4px;border-top-left-radius:4px}.pv-skin-blue.pv-currentmode-audio .pv-quality-btn{display:none !important}.pv-skin-blue.pv-currentmode-audio .pv-line-select-wrap{display:none !important}.pv-skin-blue .pv-progress-wrap{position:absolute;height:6px;bottom:100%;margin-bottom:-16px;cursor:pointer;z-index:2;transition:transform .1s}.pv-skin-blue .pv-progress-bg{top:-1px;left:0;-ms-transform:scaleY(0.56);transform:scaleY(0.56);background-color:rgba(255,255,255,0.35)}.pv-skin-blue .pv-progress-buffer{-ms-transform:scaleX(0);transform:scaleX(0)}.pv-skin-blue .pv-controls{color:#fff;position:relative;bottom:0;width:100%;height:100%;background:rgba(0,16,27,0.7);background-clip:content-box}.pv-skin-blue .pv-controls .pv-btn-radius{height:36px !important;padding-top:12px}.pv-skin-blue .pv-controls .pv-btn-radius button{padding:0;font-size:12px;color:#fff !important;white-space:nowrap;width:auto}.pv-skin-blue .pv-controls .pv-btn-radius button>span{min-width:60px;padding:0 10px;line-height:24px;display:inline-block;background-color:rgba(0,0,0,0.35);border-radius:12px}.pv-skin-blue .pv-controls .pv-btn-radius button>span:hover{color:#fff}.pv-skin-blue .pv-controls .pv-rate-btn{width:50px;text-align:center}.pv-skin-blue .pv-controls .pv-controls-left{font-size:12px;position:absolute;left:10px;top:0;height:48px}.pv-skin-blue .pv-controls .pv-controls-left>*{display:inline-block;height:100%;vertical-align:top;position:relative}.pv-skin-blue .pv-controls .pv-controls-right{position:absolute;right:10px;top:0;height:48px}.pv-skin-blue .pv-controls .pv-controls-right>*{display:inline-block;height:100%;vertical-align:top;position:relative}.pv-skin-blue .pv-controls .pv-time-wrap{line-height:48px}.pv-skin-blue .pv-volume-slider{position:relative;padding:9px 13px;cursor:pointer;border-radius:4px}.pv-skin-blue .pv-volume-slider:after{content:'';position:absolute;left:50%;margin-left:-4px;top:100%;width:0 !important;height:0 !important;display:inline-block;border:4px solid transparent;border-top:4px solid rgba(0,16,27,0.7);border-width:4px 4px 0 4px}.pv-skin-blue .pv-volume-touch{position:absolute;width:100%;height:100%;top:0;left:0;z-index:10;background-color:transparent}.pv-skin-blue .pv-volume-rail{height:100px;width:6px;border-radius:3px;background-color:rgba(255,255,255,0.35);position:relative}.pv-skin-blue .pv-volume-current{position:absolute;left:0;bottom:0;width:100%;height:0%;border-radius:3px}.pv-skin-blue .pv-volume-target{width:12px;height:12px;border-radius:6px;background-color:#fff;position:absolute;top:-6px;left:-3px}.pv-skin-blue .pv-quality-select{position:relative;width:64px;font-size:12px;line-height:14px;text-align:center}.pv-skin-blue .pv-quality-select>div{padding:8px 0;margin-bottom:1px;cursor:pointer;text-align:center}.pv-skin-blue .pv-quality-select>div:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.pv-skin-blue .pv-quality-select>div:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.pv-skin-blue .pv-rate-select{position:relative;width:64px;font-size:12px;line-height:14px;text-align:center}.pv-skin-blue .pv-rate-select>div{padding:6px 0;margin-bottom:1px;cursor:pointer;text-align:center}.pv-skin-blue .pv-rate-select>div:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.pv-skin-blue .pv-rate-select>div:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.pv-skin-blue .pv-setting-select-wrap{min-width:168px;right:-30px;left:auto !important;-ms-transform:translateX(0) !important;transform:translateX(0) !important}.pv-skin-blue.pv-hide-fullscreen .pv-setting-select-wrap{right:-5px}.pv-skin-blue.pv-hide-fullscreen .pv-setting-select:after{right:20px}.pv-skin-blue .pv-setting-select{font-size:12px;position:relative}.pv-skin-blue .pv-setting-select>div{padding:8px;margin-bottom:1px}.pv-skin-blue .pv-setting-select>div:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.pv-skin-blue .pv-setting-select>div:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.pv-skin-blue .pv-setting-select .pv-setting-tip{color:#8f8f8f;margin-bottom:6px}.pv-skin-blue .pv-setting-select .pv-setting-choose>span{display:inline-block;margin-right:15px;cursor:pointer}.pv-skin-blue .pv-setting-select .pv-setting-choose>span>span:last-child{margin-right:0}.pv-skin-blue.pv-first-h .pv-control-wrap-style{display:none}.pv-skin-blue.pv-first-h .pv-progress-touch-time{opacity:0}.pv-skin-blue.pv-first-hh .pv-control-wrap-style{display:block}.pv-skin-blue.pv-first-hh .pv-progress-touch-time{opacity:1}\n", ""]),
		t.exports = e
	},
	function(t, U, e) {
		"use strict"; (function(t) {
			var n = e(272),
			a = e(273),
			o = e(274);
			function i() {
				return d.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
			}
			function s(t, e) {
				if (i() < e) throw new RangeError("Invalid typed array length");
				return d.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = d.prototype: (null === t && (t = new d(e)), t.length = e),
				t
			}
			function d(t, e, i) {
				if (! (d.TYPED_ARRAY_SUPPORT || this instanceof d)) return new d(t, e, i);
				if ("number" != typeof t) return r(this, t, e, i);
				if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
				return c(this, t)
			}
			function r(t, e, i, n) {
				if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
				return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ?
				function(t, e, i, n) {
					if (e.byteLength, i < 0 || e.byteLength < i) throw new RangeError("'offset' is out of bounds");
					if (e.byteLength < i + (n || 0)) throw new RangeError("'length' is out of bounds");
					e = void 0 === i && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, i) : new Uint8Array(e, i, n);
					d.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = d.prototype: t = u(t, e);
					return t
				} (t, e, i, n) : "string" == typeof e ?
				function(t, e, i) {
					"string" == typeof i && "" !== i || (i = "utf8");
					if (!d.isEncoding(i)) throw new TypeError('"encoding" must be a valid string encoding');
					var n = 0 | p(e, i),
					r = (t = s(t, n)).write(e, i);
					r !== n && (t = t.slice(0, r));
					return t
				} (t, e, i) : function(t, e) {
					if (d.isBuffer(e)) {
						var i = 0 | h(e.length);
						return 0 === (t = s(t, i)).length ? t: (e.copy(t, 0, 0, i), t)
					}
					if (e) {
						if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length ||
						function(t) {
							return t != t
						} (e.length) ? s(t, 0) : u(t, e);
						if ("Buffer" === e.type && o(e.data)) return u(t, e.data)
					}
					throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
				} (t, e)
			}
			function l(t) {
				if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
				if (t < 0) throw new RangeError('"size" argument must not be negative')
			}
			function c(t, e) {
				if (l(e), t = s(t, e < 0 ? 0 : 0 | h(e)), !d.TYPED_ARRAY_SUPPORT) for (var i = 0; i < e; ++i) t[i] = 0;
				return t
			}
			function u(t, e) {
				var i = e.length < 0 ? 0 : 0 | h(e.length);
				t = s(t, i);
				for (var n = 0; n < i; n += 1) t[n] = 255 & e[n];
				return t
			}
			function h(t) {
				if (t >= i()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i().toString(16) + " bytes");
				return 0 | t
			}
			function p(t, e) {
				if (d.isBuffer(t)) return t.length;
				if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
				"string" != typeof t && (t = "" + t);
				var i = t.length;
				if (0 === i) return 0;
				for (var n = !1;;) switch (e) {
				case "ascii":
				case "latin1":
				case "binary":
					return i;
				case "utf8":
				case "utf-8":
				case void 0:
					return B(t).length;
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le":
					return 2 * i;
				case "hex":
					return i >>> 1;
				case "base64":
					return F(t).length;
				default:
					if (n) return B(t).length;
					e = ("" + e).toLowerCase(),
					n = !0
				}
			}
			function f(t, e, i) {
				var n = t[e];
				t[e] = t[i],
				t[i] = n
			}
			function v(t, e, i, n, r) {
				if (0 === t.length) return - 1;
				if ("string" == typeof i ? (n = i, i = 0) : 2147483647 < i ? i = 2147483647 : i < -2147483648 && (i = -2147483648), i = +i, isNaN(i) && (i = r ? 0 : t.length - 1), i < 0 && (i = t.length + i), i >= t.length) {
					if (r) return - 1;
					i = t.length - 1
				} else if (i < 0) {
					if (!r) return - 1;
					i = 0
				}
				if ("string" == typeof e && (e = d.from(e, n)), d.isBuffer(e)) return 0 === e.length ? -1 : g(t, e, i, n, r);
				if ("number" == typeof e) return e &= 255,
				d.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? r ? Uint8Array.prototype.indexOf.call(t, e, i) : Uint8Array.prototype.lastIndexOf.call(t, e, i) : g(t, [e], i, n, r);
				throw new TypeError("val must be string, number or Buffer")
			}
			function g(t, e, i, n, r) {
				var a, o = 1,
				s = t.length,
				l = e.length;
				if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
					if (t.length < 2 || e.length < 2) return - 1;
					s /= o = 2,
					l /= 2,
					i /= 2
				}
				function c(t, e) {
					return 1 === o ? t[e] : t.readUInt16BE(e * o)
				}
				if (r) {
					var u = -1;
					for (a = i; a < s; a++) if (c(t, a) === c(e, -1 === u ? 0 : a - u)) {
						if ( - 1 === u && (u = a), a - u + 1 === l) return u * o
					} else - 1 !== u && (a -= a - u),
					u = -1
				} else for (s < i + l && (i = s - l), a = i; 0 <= a; a--) {
					for (var d = !0,
					h = 0; h < l; h++) if (c(t, a + h) !== c(e, h)) {
						d = !1;
						break
					}
					if (d) return a
				}
				return - 1
			}
			function m(t, e, i, n) {
				i = Number(i) || 0;
				var r = t.length - i; (!n || r < (n = Number(n))) && (n = r);
				var a = e.length;
				if (a % 2 != 0) throw new TypeError("Invalid hex string");
				a / 2 < n && (n = a / 2);
				for (var o = 0; o < n; ++o) {
					var s = parseInt(e.substr(2 * o, 2), 16);
					if (isNaN(s)) return o;
					t[i + o] = s
				}
				return o
			}
			function A(t, e, i, n) {
				return N(function(t) {
					for (var e = [], i = 0; i < t.length; ++i) e.push(255 & t.charCodeAt(i));
					return e
				} (e), t, i, n)
			}
			function y(t, e, i, n) {
				return N(function(t, e) {
					for (var i, n, r, a = [], o = 0; o < t.length && !((e -= 2) < 0); ++o) i = t.charCodeAt(o),
					n = i >> 8,
					r = i % 256,
					a.push(r),
					a.push(n);
					return a
				} (e, t.length - i), t, i, n)
			}
			function b(t, e, i) {
				return 0 === e && i === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, i))
			}
			function w(t, e, i) {
				i = Math.min(t.length, i);
				for (var n = [], r = e; r < i;) {
					var a, o, s, l, c = t[r],
					u = null,
					d = 239 < c ? 4 : 223 < c ? 3 : 191 < c ? 2 : 1;
					if (r + d <= i) switch (d) {
					case 1:
						c < 128 && (u = c);
						break;
					case 2:
						128 == (192 & (a = t[r + 1])) && 127 < (l = (31 & c) << 6 | 63 & a) && (u = l);
						break;
					case 3:
						a = t[r + 1],
						o = t[r + 2],
						128 == (192 & a) && 128 == (192 & o) && 2047 < (l = (15 & c) << 12 | (63 & a) << 6 | 63 & o) && (l < 55296 || 57343 < l) && (u = l);
						break;
					case 4:
						a = t[r + 1],
						o = t[r + 2],
						s = t[r + 3],
						128 == (192 & a) && 128 == (192 & o) && 128 == (192 & s) && 65535 < (l = (15 & c) << 18 | (63 & a) << 12 | (63 & o) << 6 | 63 & s) && l < 1114112 && (u = l)
					}
					null === u ? (u = 65533, d = 1) : 65535 < u && (u -= 65536, n.push(u >>> 10 & 1023 | 55296), u = 56320 | 1023 & u),
					n.push(u),
					r += d
				}
				return function(t) {
					var e = t.length;
					if (e <= k) return String.fromCharCode.apply(String, t);
					var i = "",
					n = 0;
					for (; n < e;) i += String.fromCharCode.apply(String, t.slice(n, n += k));
					return i
				} (n)
			}
			U.Buffer = d,
			U.SlowBuffer = function(t) { + t != t && (t = 0);
				return d.alloc( + t)
			},
			U.INSPECT_MAX_BYTES = 50,
			d.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT: function() {
				try {
					var t = new Uint8Array(1);
					return t.__proto__ = {
						__proto__: Uint8Array.prototype,
						foo: function() {
							return 42
						}
					},
					42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
				} catch(t) {
					return ! 1
				}
			} (),
			U.kMaxLength = i(),
			d.poolSize = 8192,
			d._augment = function(t) {
				return t.__proto__ = d.prototype,
				t
			},
			d.from = function(t, e, i) {
				return r(null, t, e, i)
			},
			d.TYPED_ARRAY_SUPPORT && (d.prototype.__proto__ = Uint8Array.prototype, d.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && d[Symbol.species] === d && Object.defineProperty(d, Symbol.species, {
				value: null,
				configurable: !0
			})),
			d.alloc = function(t, e, i) {
				return n = null,
				a = e,
				o = i,
				l(r = t),
				r <= 0 || void 0 === a ? s(n, r) : "string" == typeof o ? s(n, r).fill(a, o) : s(n, r).fill(a);
				var n, r, a, o
			}, d.allocUnsafe = function(t) {
				return c(null, t)
			},
			d.allocUnsafeSlow = function(t) {
				return c(null, t)
			},
			d.isBuffer = function(t) {
				return ! (null == t || !t._isBuffer)
			},
			d.compare = function(t, e) {
				if (!d.isBuffer(t) || !d.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
				if (t === e) return 0;
				for (var i = t.length,
				n = e.length,
				r = 0,
				a = Math.min(i, n); r < a; ++r) if (t[r] !== e[r]) {
					i = t[r],
					n = e[r];
					break
				}
				return i < n ? -1 : n < i ? 1 : 0
			},
			d.isEncoding = function(t) {
				switch (String(t).toLowerCase()) {
				case "hex":
				case "utf8":
				case "utf-8":
				case "ascii":
				case "latin1":
				case "binary":
				case "base64":
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le":
					return ! 0;
				default:
					return ! 1
				}
			},
			d.concat = function(t, e) {
				if (!o(t)) throw new TypeError('"list" argument must be an Array of Buffers');
				if (0 === t.length) return d.alloc(0);
				var i;
				if (void 0 === e) for (i = e = 0; i < t.length; ++i) e += t[i].length;
				var n = d.allocUnsafe(e),
				r = 0;
				for (i = 0; i < t.length; ++i) {
					var a = t[i];
					if (!d.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
					a.copy(n, r),
					r += a.length
				}
				return n
			},
			d.byteLength = p,
			d.prototype._isBuffer = !0,
			d.prototype.swap16 = function() {
				var t = this.length;
				if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
				for (var e = 0; e < t; e += 2) f(this, e, e + 1);
				return this
			},
			d.prototype.swap32 = function() {
				var t = this.length;
				if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
				for (var e = 0; e < t; e += 4) f(this, e, e + 3),
				f(this, e + 1, e + 2);
				return this
			},
			d.prototype.swap64 = function() {
				var t = this.length;
				if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
				for (var e = 0; e < t; e += 8) f(this, e, e + 7),
				f(this, e + 1, e + 6),
				f(this, e + 2, e + 5),
				f(this, e + 3, e + 4);
				return this
			},
			d.prototype.toString = function() {
				var t = 0 | this.length;
				return 0 == t ? "": 0 === arguments.length ? w(this, 0, t) : function(t, e, i) {
					var n = !1;
					if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
					if ((void 0 === i || i > this.length) && (i = this.length), i <= 0) return "";
					if ((i >>>= 0) <= (e >>>= 0)) return "";
					for (t = t || "utf8";;) switch (t) {
					case "hex":
						return T(this, e, i);
					case "utf8":
					case "utf-8":
						return w(this, e, i);
					case "ascii":
						return E(this, e, i);
					case "latin1":
					case "binary":
						return x(this, e, i);
					case "base64":
						return b(this, e, i);
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return S(this, e, i);
					default:
						if (n) throw new TypeError("Unknown encoding: " + t);
						t = (t + "").toLowerCase(),
						n = !0
					}
				}.apply(this, arguments)
			},
			d.prototype.equals = function(t) {
				if (!d.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
				return this === t || 0 === d.compare(this, t)
			},
			d.prototype.inspect = function() {
				var t = "",
				e = U.INSPECT_MAX_BYTES;
				return 0 < this.length && (t = this.toString("hex", 0, e).match(/.{2}/g).join(" "), this.length > e && (t += " ... ")),
				"<Buffer " + t + ">"
			},
			d.prototype.compare = function(t, e, i, n, r) {
				if (!d.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
				if (void 0 === e && (e = 0), void 0 === i && (i = t ? t.length: 0), void 0 === n && (n = 0), void 0 === r && (r = this.length), e < 0 || i > t.length || n < 0 || r > this.length) throw new RangeError("out of range index");
				if (r <= n && i <= e) return 0;
				if (r <= n) return - 1;
				if (i <= e) return 1;
				if (this === t) return 0;
				for (var a = (r >>>= 0) - (n >>>= 0), o = (i >>>= 0) - (e >>>= 0), s = Math.min(a, o), l = this.slice(n, r), c = t.slice(e, i), u = 0; u < s; ++u) if (l[u] !== c[u]) {
					a = l[u],
					o = c[u];
					break
				}
				return a < o ? -1 : o < a ? 1 : 0
			},
			d.prototype.includes = function(t, e, i) {
				return - 1 !== this.indexOf(t, e, i)
			},
			d.prototype.indexOf = function(t, e, i) {
				return v(this, t, e, i, !0)
			},
			d.prototype.lastIndexOf = function(t, e, i) {
				return v(this, t, e, i, !1)
			},
			d.prototype.write = function(t, e, i, n) {
				if (void 0 === e) n = "utf8",
				i = this.length,
				e = 0;
				else if (void 0 === i && "string" == typeof e) n = e,
				i = this.length,
				e = 0;
				else {
					if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
					e |= 0,
					isFinite(i) ? (i |= 0, void 0 === n && (n = "utf8")) : (n = i, i = void 0)
				}
				var r = this.length - e;
				if ((void 0 === i || r < i) && (i = r), 0 < t.length && (i < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
				n = n || "utf8";
				for (var a, o, s, l, c, u, d = !1;;) switch (n) {
				case "hex":
					return m(this, t, e, i);
				case "utf8":
				case "utf-8":
					return c = e,
					u = i,
					N(B(t, (l = this).length - c), l, c, u);
				case "ascii":
					return A(this, t, e, i);
				case "latin1":
				case "binary":
					return A(this, t, e, i);
				case "base64":
					return a = this,
					o = e,
					s = i,
					N(F(t), a, o, s);
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le":
					return y(this, t, e, i);
				default:
					if (d) throw new TypeError("Unknown encoding: " + n);
					n = ("" + n).toLowerCase(),
					d = !0
				}
			},
			d.prototype.toJSON = function() {
				return {
					type: "Buffer",
					data: Array.prototype.slice.call(this._arr || this, 0)
				}
			};
			var k = 4096;
			function E(t, e, i) {
				var n = "";
				i = Math.min(t.length, i);
				for (var r = e; r < i; ++r) n += String.fromCharCode(127 & t[r]);
				return n
			}
			function x(t, e, i) {
				var n = "";
				i = Math.min(t.length, i);
				for (var r = e; r < i; ++r) n += String.fromCharCode(t[r]);
				return n
			}
			function T(t, e, i) {
				var n = t.length; (!e || e < 0) && (e = 0),
				(!i || i < 0 || n < i) && (i = n);
				for (var r = "",
				a = e; a < i; ++a) r += O(t[a]);
				return r
			}
			function S(t, e, i) {
				for (var n = t.slice(e, i), r = "", a = 0; a < n.length; a += 2) r += String.fromCharCode(n[a] + 256 * n[a + 1]);
				return r
			}
			function _(t, e, i) {
				if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
				if (i < t + e) throw new RangeError("Trying to access beyond buffer length")
			}
			function C(t, e, i, n, r, a) {
				if (!d.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
				if (r < e || e < a) throw new RangeError('"value" argument is out of bounds');
				if (i + n > t.length) throw new RangeError("Index out of range")
			}
			function L(t, e, i, n) {
				e < 0 && (e = 65535 + e + 1);
				for (var r = 0,
				a = Math.min(t.length - i, 2); r < a; ++r) t[i + r] = (e & 255 << 8 * (n ? r: 1 - r)) >>> 8 * (n ? r: 1 - r)
			}
			function R(t, e, i, n) {
				e < 0 && (e = 4294967295 + e + 1);
				for (var r = 0,
				a = Math.min(t.length - i, 4); r < a; ++r) t[i + r] = e >>> 8 * (n ? r: 3 - r) & 255
			}
			function D(t, e, i, n) {
				if (i + n > t.length) throw new RangeError("Index out of range");
				if (i < 0) throw new RangeError("Index out of range")
			}
			function I(t, e, i, n, r) {
				return r || D(t, 0, i, 4),
				a.write(t, e, i, n, 23, 4),
				i + 4
			}
			function M(t, e, i, n, r) {
				return r || D(t, 0, i, 8),
				a.write(t, e, i, n, 52, 8),
				i + 8
			}
			d.prototype.slice = function(t, e) {
				var i, n = this.length;
				if ((t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : n < t && (t = n), (e = void 0 === e ? n: ~~e) < 0 ? (e += n) < 0 && (e = 0) : n < e && (e = n), e < t && (e = t), d.TYPED_ARRAY_SUPPORT)(i = this.subarray(t, e)).__proto__ = d.prototype;
				else {
					var r = e - t;
					i = new d(r, void 0);
					for (var a = 0; a < r; ++a) i[a] = this[a + t]
				}
				return i
			},
			d.prototype.readUIntLE = function(t, e, i) {
				t |= 0,
				e |= 0,
				i || _(t, e, this.length);
				for (var n = this[t], r = 1, a = 0; ++a < e && (r *= 256);) n += this[t + a] * r;
				return n
			},
			d.prototype.readUIntBE = function(t, e, i) {
				t |= 0,
				e |= 0,
				i || _(t, e, this.length);
				for (var n = this[t + --e], r = 1; 0 < e && (r *= 256);) n += this[t + --e] * r;
				return n
			},
			d.prototype.readUInt8 = function(t, e) {
				return e || _(t, 1, this.length),
				this[t]
			},
			d.prototype.readUInt16LE = function(t, e) {
				return e || _(t, 2, this.length),
				this[t] | this[t + 1] << 8
			},
			d.prototype.readUInt16BE = function(t, e) {
				return e || _(t, 2, this.length),
				this[t] << 8 | this[t + 1]
			},
			d.prototype.readUInt32LE = function(t, e) {
				return e || _(t, 4, this.length),
				(this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
			},
			d.prototype.readUInt32BE = function(t, e) {
				return e || _(t, 4, this.length),
				16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
			},
			d.prototype.readIntLE = function(t, e, i) {
				t |= 0,
				e |= 0,
				i || _(t, e, this.length);
				for (var n = this[t], r = 1, a = 0; ++a < e && (r *= 256);) n += this[t + a] * r;
				return (r *= 128) <= n && (n -= Math.pow(2, 8 * e)),
				n
			},
			d.prototype.readIntBE = function(t, e, i) {
				t |= 0,
				e |= 0,
				i || _(t, e, this.length);
				for (var n = e,
				r = 1,
				a = this[t + --n]; 0 < n && (r *= 256);) a += this[t + --n] * r;
				return (r *= 128) <= a && (a -= Math.pow(2, 8 * e)),
				a
			},
			d.prototype.readInt8 = function(t, e) {
				return e || _(t, 1, this.length),
				128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
			},
			d.prototype.readInt16LE = function(t, e) {
				e || _(t, 2, this.length);
				var i = this[t] | this[t + 1] << 8;
				return 32768 & i ? 4294901760 | i: i
			},
			d.prototype.readInt16BE = function(t, e) {
				e || _(t, 2, this.length);
				var i = this[t + 1] | this[t] << 8;
				return 32768 & i ? 4294901760 | i: i
			},
			d.prototype.readInt32LE = function(t, e) {
				return e || _(t, 4, this.length),
				this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
			},
			d.prototype.readInt32BE = function(t, e) {
				return e || _(t, 4, this.length),
				this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
			},
			d.prototype.readFloatLE = function(t, e) {
				return e || _(t, 4, this.length),
				a.read(this, t, !0, 23, 4)
			},
			d.prototype.readFloatBE = function(t, e) {
				return e || _(t, 4, this.length),
				a.read(this, t, !1, 23, 4)
			},
			d.prototype.readDoubleLE = function(t, e) {
				return e || _(t, 8, this.length),
				a.read(this, t, !0, 52, 8)
			},
			d.prototype.readDoubleBE = function(t, e) {
				return e || _(t, 8, this.length),
				a.read(this, t, !1, 52, 8)
			},
			d.prototype.writeUIntLE = function(t, e, i, n) {
				t = +t,
				e |= 0,
				i |= 0,
				n || C(this, t, e, i, Math.pow(2, 8 * i) - 1, 0);
				var r = 1,
				a = 0;
				for (this[e] = 255 & t; ++a < i && (r *= 256);) this[e + a] = t / r & 255;
				return e + i
			},
			d.prototype.writeUIntBE = function(t, e, i, n) {
				t = +t,
				e |= 0,
				i |= 0,
				n || C(this, t, e, i, Math.pow(2, 8 * i) - 1, 0);
				var r = i - 1,
				a = 1;
				for (this[e + r] = 255 & t; 0 <= --r && (a *= 256);) this[e + r] = t / a & 255;
				return e + i
			},
			d.prototype.writeUInt8 = function(t, e, i) {
				return t = +t,
				e |= 0,
				i || C(this, t, e, 1, 255, 0),
				d.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
				this[e] = 255 & t,
				e + 1
			},
			d.prototype.writeUInt16LE = function(t, e, i) {
				return t = +t,
				e |= 0,
				i || C(this, t, e, 2, 65535, 0),
				d.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : L(this, t, e, !0),
				e + 2
			},
			d.prototype.writeUInt16BE = function(t, e, i) {
				return t = +t,
				e |= 0,
				i || C(this, t, e, 2, 65535, 0),
				d.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : L(this, t, e, !1),
				e + 2
			},
			d.prototype.writeUInt32LE = function(t, e, i) {
				return t = +t,
				e |= 0,
				i || C(this, t, e, 4, 4294967295, 0),
				d.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : R(this, t, e, !0),
				e + 4
			},
			d.prototype.writeUInt32BE = function(t, e, i) {
				return t = +t,
				e |= 0,
				i || C(this, t, e, 4, 4294967295, 0),
				d.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : R(this, t, e, !1),
				e + 4
			},
			d.prototype.writeIntLE = function(t, e, i, n) {
				if (t = +t, e |= 0, !n) {
					var r = Math.pow(2, 8 * i - 1);
					C(this, t, e, i, r - 1, -r)
				}
				var a = 0,
				o = 1,
				s = 0;
				for (this[e] = 255 & t; ++a < i && (o *= 256);) t < 0 && 0 === s && 0 !== this[e + a - 1] && (s = 1),
				this[e + a] = (t / o >> 0) - s & 255;
				return e + i
			},
			d.prototype.writeIntBE = function(t, e, i, n) {
				if (t = +t, e |= 0, !n) {
					var r = Math.pow(2, 8 * i - 1);
					C(this, t, e, i, r - 1, -r)
				}
				var a = i - 1,
				o = 1,
				s = 0;
				for (this[e + a] = 255 & t; 0 <= --a && (o *= 256);) t < 0 && 0 === s && 0 !== this[e + a + 1] && (s = 1),
				this[e + a] = (t / o >> 0) - s & 255;
				return e + i
			},
			d.prototype.writeInt8 = function(t, e, i) {
				return t = +t,
				e |= 0,
				i || C(this, t, e, 1, 127, -128),
				d.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
				t < 0 && (t = 255 + t + 1),
				this[e] = 255 & t,
				e + 1
			},
			d.prototype.writeInt16LE = function(t, e, i) {
				return t = +t,
				e |= 0,
				i || C(this, t, e, 2, 32767, -32768),
				d.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : L(this, t, e, !0),
				e + 2
			},
			d.prototype.writeInt16BE = function(t, e, i) {
				return t = +t,
				e |= 0,
				i || C(this, t, e, 2, 32767, -32768),
				d.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : L(this, t, e, !1),
				e + 2
			},
			d.prototype.writeInt32LE = function(t, e, i) {
				return t = +t,
				e |= 0,
				i || C(this, t, e, 4, 2147483647, -2147483648),
				d.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : R(this, t, e, !0),
				e + 4
			},
			d.prototype.writeInt32BE = function(t, e, i) {
				return t = +t,
				e |= 0,
				i || C(this, t, e, 4, 2147483647, -2147483648),
				t < 0 && (t = 4294967295 + t + 1),
				d.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : R(this, t, e, !1),
				e + 4
			},
			d.prototype.writeFloatLE = function(t, e, i) {
				return I(this, t, e, !0, i)
			},
			d.prototype.writeFloatBE = function(t, e, i) {
				return I(this, t, e, !1, i)
			},
			d.prototype.writeDoubleLE = function(t, e, i) {
				return M(this, t, e, !0, i)
			},
			d.prototype.writeDoubleBE = function(t, e, i) {
				return M(this, t, e, !1, i)
			},
			d.prototype.copy = function(t, e, i, n) {
				if (i = i || 0, n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e = e || 0, 0 < n && n < i && (n = i), n === i) return 0;
				if (0 === t.length || 0 === this.length) return 0;
				if (e < 0) throw new RangeError("targetStart out of bounds");
				if (i < 0 || i >= this.length) throw new RangeError("sourceStart out of bounds");
				if (n < 0) throw new RangeError("sourceEnd out of bounds");
				n > this.length && (n = this.length),
				t.length - e < n - i && (n = t.length - e + i);
				var r, a = n - i;
				if (this === t && i < e && e < n) for (r = a - 1; 0 <= r; --r) t[r + e] = this[r + i];
				else if (a < 1e3 || !d.TYPED_ARRAY_SUPPORT) for (r = 0; r < a; ++r) t[r + e] = this[r + i];
				else Uint8Array.prototype.set.call(t, this.subarray(i, i + a), e);
				return a
			},
			d.prototype.fill = function(t, e, i, n) {
				if ("string" == typeof t) {
					if ("string" == typeof e ? (n = e, e = 0, i = this.length) : "string" == typeof i && (n = i, i = this.length), 1 === t.length) {
						var r = t.charCodeAt(0);
						r < 256 && (t = r)
					}
					if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
					if ("string" == typeof n && !d.isEncoding(n)) throw new TypeError("Unknown encoding: " + n)
				} else "number" == typeof t && (t &= 255);
				if (e < 0 || this.length < e || this.length < i) throw new RangeError("Out of range index");
				if (i <= e) return this;
				var a;
				if (e >>>= 0, i = void 0 === i ? this.length: i >>> 0, "number" == typeof(t = t || 0)) for (a = e; a < i; ++a) this[a] = t;
				else {
					var o = d.isBuffer(t) ? t: B(new d(t, n).toString()),
					s = o.length;
					for (a = 0; a < i - e; ++a) this[a + e] = o[a % s]
				}
				return this
			};
			var P = /[^+\/0-9A-Za-z-_]/g;
			function O(t) {
				return t < 16 ? "0" + t.toString(16) : t.toString(16)
			}
			function B(t, e) {
				var i;
				e = e || 1 / 0;
				for (var n = t.length,
				r = null,
				a = [], o = 0; o < n; ++o) {
					if (55295 < (i = t.charCodeAt(o)) && i < 57344) {
						if (!r) {
							if (56319 < i) { - 1 < (e -= 3) && a.push(239, 191, 189);
								continue
							}
							if (o + 1 === n) { - 1 < (e -= 3) && a.push(239, 191, 189);
								continue
							}
							r = i;
							continue
						}
						if (i < 56320) { - 1 < (e -= 3) && a.push(239, 191, 189),
							r = i;
							continue
						}
						i = 65536 + (r - 55296 << 10 | i - 56320)
					} else r && -1 < (e -= 3) && a.push(239, 191, 189);
					if (r = null, i < 128) {
						if (--e < 0) break;
						a.push(i)
					} else if (i < 2048) {
						if ((e -= 2) < 0) break;
						a.push(i >> 6 | 192, 63 & i | 128)
					} else if (i < 65536) {
						if ((e -= 3) < 0) break;
						a.push(i >> 12 | 224, i >> 6 & 63 | 128, 63 & i | 128)
					} else {
						if (! (i < 1114112)) throw new Error("Invalid code point");
						if ((e -= 4) < 0) break;
						a.push(i >> 18 | 240, i >> 12 & 63 | 128, i >> 6 & 63 | 128, 63 & i | 128)
					}
				}
				return a
			}
			function F(t) {
				return n.toByteArray(function(t) {
					var e;
					if ((t = ((e = t).trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")).replace(P, "")).length < 2) return "";
					for (; t.length % 4 != 0;) t += "=";
					return t
				} (t))
			}
			function N(t, e, i, n) {
				for (var r = 0; r < n && !(r + i >= e.length || r >= t.length); ++r) e[r + i] = t[r];
				return r
			}
		}).call(this, e(66))
	},
	function(t, e, i) {
		"use strict";
		e.byteLength = function(t) {
			var e = d(t),
			i = e[0],
			n = e[1];
			return 3 * (i + n) / 4 - n
		},
		e.toByteArray = function(t) {
			var e, i, n = d(t),
			r = n[0],
			a = n[1],
			o = new u(function(t, e) {
				return 3 * (t + e) / 4 - e
			} (r, a)),
			s = 0,
			l = 0 < a ? r - 4 : r;
			for (i = 0; i < l; i += 4) e = c[t.charCodeAt(i)] << 18 | c[t.charCodeAt(i + 1)] << 12 | c[t.charCodeAt(i + 2)] << 6 | c[t.charCodeAt(i + 3)],
			o[s++] = e >> 16 & 255,
			o[s++] = e >> 8 & 255,
			o[s++] = 255 & e;
			2 === a && (e = c[t.charCodeAt(i)] << 2 | c[t.charCodeAt(i + 1)] >> 4, o[s++] = 255 & e);
			1 === a && (e = c[t.charCodeAt(i)] << 10 | c[t.charCodeAt(i + 1)] << 4 | c[t.charCodeAt(i + 2)] >> 2, o[s++] = e >> 8 & 255, o[s++] = 255 & e);
			return o
		},
		e.fromByteArray = function(t) {
			for (var e, i = t.length,
			n = i % 3,
			r = [], a = 0, o = i - n; a < o; a += 16383) r.push(l(t, a, o < a + 16383 ? o: a + 16383));
			1 == n ? (e = t[i - 1], r.push(s[e >> 2] + s[e << 4 & 63] + "==")) : 2 == n && (e = (t[i - 2] << 8) + t[i - 1], r.push(s[e >> 10] + s[e >> 4 & 63] + s[e << 2 & 63] + "="));
			return r.join("")
		};
		for (var s = [], c = [], u = "undefined" != typeof Uint8Array ? Uint8Array: Array, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = 0, a = n.length; r < a; ++r) s[r] = n[r],
		c[n.charCodeAt(r)] = r;
		function d(t) {
			var e = t.length;
			if (0 < e % 4) throw new Error("Invalid string. Length must be a multiple of 4");
			var i = t.indexOf("=");
			return - 1 === i && (i = e),
			[i, i === e ? 0 : 4 - i % 4]
		}
		function l(t, e, i) {
			for (var n, r, a = [], o = e; o < i; o += 3) n = (t[o] << 16 & 16711680) + (t[o + 1] << 8 & 65280) + (255 & t[o + 2]),
			a.push(s[(r = n) >> 18 & 63] + s[r >> 12 & 63] + s[r >> 6 & 63] + s[63 & r]);
			return a.join("")
		}
		c["-".charCodeAt(0)] = 62,
		c["_".charCodeAt(0)] = 63
	},
	function(t, e) {
		e.read = function(t, e, i, n, r) {
			var a, o, s = 8 * r - n - 1,
			l = (1 << s) - 1,
			c = l >> 1,
			u = -7,
			d = i ? r - 1 : 0,
			h = i ? -1 : 1,
			p = t[e + d];
			for (d += h, a = p & (1 << -u) - 1, p >>= -u, u += s; 0 < u; a = 256 * a + t[e + d], d += h, u -= 8);
			for (o = a & (1 << -u) - 1, a >>= -u, u += n; 0 < u; o = 256 * o + t[e + d], d += h, u -= 8);
			if (0 === a) a = 1 - c;
			else {
				if (a === l) return o ? NaN: 1 / 0 * (p ? -1 : 1);
				o += Math.pow(2, n),
				a -= c
			}
			return (p ? -1 : 1) * o * Math.pow(2, a - n)
		},
		e.write = function(t, e, i, n, r, a) {
			var o, s, l, c = 8 * a - r - 1,
			u = (1 << c) - 1,
			d = u >> 1,
			h = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
			p = n ? 0 : a - 1,
			f = n ? 1 : -1,
			v = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
			for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (s = isNaN(e) ? 1 : 0, o = u) : (o = Math.floor(Math.log(e) / Math.LN2), e * (l = Math.pow(2, -o)) < 1 && (o--, l *= 2), 2 <= (e += 1 <= o + d ? h / l: h * Math.pow(2, 1 - d)) * l && (o++, l /= 2), u <= o + d ? (s = 0, o = u) : 1 <= o + d ? (s = (e * l - 1) * Math.pow(2, r), o += d) : (s = e * Math.pow(2, d - 1) * Math.pow(2, r), o = 0)); 8 <= r; t[i + p] = 255 & s, p += f, s /= 256, r -= 8);
			for (o = o << r | s, c += r; 0 < c; t[i + p] = 255 & o, p += f, o /= 256, c -= 8);
			t[i + p - f] |= 128 * v
		}
	},
	function(t, e) {
		var i = {}.toString;
		t.exports = Array.isArray ||
		function(t) {
			return "[object Array]" == i.call(t)
		}
	},
	function(t, e, i) {
		i(276),
		t.exports = i(9).Date.now
	},
	function(t, e, i) {
		var n = i(15);
		n(n.S, "Date", {
			now: function() {
				return (new Date).getTime()
			}
		})
	},
	function(t, e, i) {
		var n = i(19),
		r = i(278);
		"string" == typeof(r = r.__esModule ? r.
	default:
		r) && (r = [[t.i, r, ""]]);
		var a = {
			insert: "head",
			singleton: !1
		},
		o = (n(r, a), r.locals ? r.locals: {});
		t.exports = o
	},
	function(t, e, i) {
		var n = i(20),
		r = i(65),
		a = i(279);
		e = n(!1);
		var o = r(a);
		e.push([t.i, ".pv-screenshot{position:absolute;right:21px;top:50%;width:48px;height:48px;-ms-transform:translateY(-50%);transform:translateY(-50%);background:rgba(0,0,0,0.8);outline:none;border:0;color:#fff;cursor:pointer;border-radius:50%;background-image:url(" + o + ');background-size:24px 22px;background-repeat:no-repeat;background-position:center center;opacity:0;transition:opacity .3s}.pv-screenshot:hover{background-color:#03a9f4}.pv-first-h ~ .pv-screenshot{opacity:1}.pv-skin-gold.pv-first-h ~ .pv-screenshot{opacity:0}.pv-skin-gold.pv-controls-hide ~ .pv-screenshot{opacity:1}.pv-screenshot-preview{position:absolute;border-radius:2px;border:1px solid rgba(0,0,0,0.8);top:50%;right:93px;margin-top:-28px;max-width:240px;font-size:0}.pv-screenshot-preview img{max-width:100%;height:auto}.pv-screenshot-preview>span{position:absolute;cursor:pointer;background:rgba(0,0,0,0.8);text-align:center;color:#fff}.pv-screenshot-preview>span:hover{background:#03a9f4}.pv-screenshot-preview>span[data-screenshot="save"]{left:50%;margin-left:-37px;bottom:16px;line-height:32px;width:74px;font-size:14px;border-radius:16px}.pv-screenshot-preview>span[data-screenshot="close"]{right:8px;top:8px;width:24px;line-height:24px;border-radius:50%;font-size:17px;font-weight:bold}\n', ""]),
		t.exports = e
	},
	function(t, e) {
		t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAoCAMAAACyy+glAAAAUVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////8IN+deAAAAGnRSTlMAAgUMEhofN0JRVWeKmqSlprvV2dzm7fLz/kRcq7IAAADOSURBVDjL1ZTHDoMwEERN76G39/8fmkOEwI4WWIlDMreRn8t41zbmqBZHrRFV8KVCYuPZXqsF5liA3UF3sjHNKG9rH2tszGkgJ7ANd5ENR50IT6/QjRG+Jhs2N/XDsJ/X/bL0de5fw9mwZR+yC9grj/daeqdwaZesPIMzgLVKgiCpVoBMhv0BGNOPSUdg8EU4B9Z0c+kK5CJcA9VuK6AW4R5IdpsAvQgvQLDbAFiegVXHUAVUXZ2qKKpy6xpJ16Kq5lc+q7/8Nx6E70sFvwG6OTpJyphVnAAAAABJRU5ErkJggg=="
	},
	function(t, e, i) {
		var n = i(29);
		t.exports = function(t) {
			if (n(t)) return t
		}
	},
	function(t, e, i) {
		var l = i(282),
		c = i(154),
		u = i(41);
		t.exports = function(t, e) {
			if (void 0 !== u && c(Object(t))) {
				var i = [],
				n = !0,
				r = !1,
				a = void 0;
				try {
					for (var o, s = l(t); ! (n = (o = s.next()).done) && (i.push(o.value), !e || i.length !== e); n = !0);
				} catch(t) {
					r = !0,
					a = t
				} finally {
					try {
						n || null == s.
						return || s.
						return ()
					} finally {
						if (r) throw a
					}
				}
				return i
			}
		}
	},
	function(t, e, i) {
		t.exports = i(283)
	},
	function(t, e, i) {
		i(79),
		i(60),
		t.exports = i(284)
	},
	function(t, e, i) {
		var n = i(24),
		r = i(108);
		t.exports = i(9).getIterator = function(t) {
			var e = r(t);
			if ("function" != typeof e) throw TypeError(t + " is not iterable!");
			return n(e.call(t))
		}
	},
	function(t, e) {
		t.exports = function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}
	},
	function(t, e, i) {
		var n = i(19),
		r = i(287);
		"string" == typeof(r = r.__esModule ? r.
	default:
		r) && (r = [[t.i, r, ""]]);
		var a = {
			insert: "head",
			singleton: !1
		},
		o = (n(r, a), r.locals ? r.locals: {});
		t.exports = o
	},
	function(t, e, i) {
		var n = i(20),
		r = i(65),
		a = i(288),
		o = i(289);
		e = n(!1);
		var s = r(a),
		l = r(o);
		e.push([t.i, ".pv-ask-modal-wrap{position:absolute;top:0;left:0;bottom:0;right:0;background-color:rgba(0,0,0,0.4);z-index:30;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:#212121}.pv-ask-modal-wrap .pv-ask-modal{position:relative;background:#fff;border-radius:6px;width:70%;height:70%;max-width:650px;max-height:400px}.pv-ask-modal-wrap .pv-ask-head{background-color:#f4f5f9;border-top-left-radius:6px;border-top-right-radius:6px;line-height:44px;padding:0 10px;color:#212121;border-bottom:1px solid #eee;text-align:center}.pv-ask-modal-wrap .pv-ask-content{position:absolute;height:100%;width:100%;top:0;left:0;padding:80px 40px 60px;z-index:1}.pv-ask-modal-wrap .pv-ask-content-noimg{padding:80px 80px 60px}.pv-ask-modal-wrap .pv-ask-foot{text-align:center;position:absolute;width:100%;bottom:0;padding-bottom:20px;z-index:2}.pv-ask-modal-wrap .pv-ask-foot>button{margin:0 3px;display:inline-block;outline:0;border:1px solid #03a9f4;line-height:2.2em;width:6rem;border-radius:4px;cursor:pointer}.pv-ask-modal-wrap .pv-ask-foot>button.pv-ask-submit{background-color:#03a9f4;color:#fff}.pv-ask-modal-wrap .pv-ask-foot>button.pv-ask-submit:hover{background-color:#14b4fc;border-color:#14b4fc}.pv-ask-modal-wrap .pv-ask-foot>button.pv-ask-skip{background-color:#fff;color:#03a9f4}.pv-ask-modal-wrap .pv-ask-foot>button.pv-ask-skip:hover{background-color:#c5ecfe}.pv-ask-modal-wrap .pv-ask-foot>button.pv-ask-default{background-color:#fff;border:1px solid #ddd}.pv-ask-modal-wrap .pv-ask-foot>button.pv-ask-default:hover{background-color:#eee}.pv-ask-modal-wrap .pv-ask-left{position:relative;height:100%;width:50%;padding-right:20px;float:left;text-align:center}.pv-ask-modal-wrap .pv-ask-left>div{position:absolute;left:0;right:20px;top:0;bottom:36px;overflow:hidden;padding-bottom:36px;text-align:center}.pv-ask-modal-wrap .pv-ask-left img{max-width:100%;max-height:100%;position:absolute;top:0;left:0;bottom:0;right:0;margin:auto}.pv-ask-modal-wrap .pv-ask-left .pv-ask-view-img-tip{position:absolute;left:0;right:20px;text-align:center;bottom:0;font-size:12px;color:#aaa}.pv-ask-modal-wrap .pv-ask-left .pv-ask-view-img-tip:before{display:inline-block;content:'';width:11px;height:11px;margin-right:4px;vertical-align:middle;background-image:url(" + s + ")}.pv-ask-modal-wrap .pv-ask-left .pv-ask-view-img-tip:hover{color:#29a7f4}.pv-ask-modal-wrap .pv-ask-left .pv-ask-view-img-tip:hover:before{background-image:url(" + l + ')}.pv-ask-modal-wrap .pv-ask-right{position:relative;height:100%;overflow:auto}.pv-ask-modal-wrap .pv-ask-right>div{text-align:left;display:inline-block}.pv-ask-modal-wrap .pv-ask-right::-webkit-scrollbar{width:6px}.pv-ask-modal-wrap .pv-ask-right::-webkit-scrollbar-track{box-shadow:inset 0 0 6px rgba(0,0,0,0.2)}.pv-ask-modal-wrap .pv-ask-right::-webkit-scrollbar-thumb{border-radius:3px;background-color:rgba(0,0,0,0.4)}.pv-ask-modal-wrap .pv-ask-right h3{margin-top:0;margin-bottom:15px;font-size:15px;font-weight:normal}.pv-ask-modal-wrap .pv-ask-right h3>span{color:#03a9f4}.pv-ask-modal-wrap .pv-ask-form{margin-bottom:15px;position:relative}.pv-ask-modal-wrap .pv-ask-form [type="radio"]:not(:checked),.pv-ask-modal-wrap .pv-ask-form [type="radio"]:checked{position:absolute;left:-9999px;opacity:0}.pv-ask-modal-wrap .pv-ask-form [type="radio"]:not(:checked)+label,.pv-ask-modal-wrap .pv-ask-form [type="radio"]:checked+label{padding-left:25px;position:relative;display:block;line-height:16px;cursor:pointer;word-break:break-all;box-sizing:border-box}.pv-ask-modal-wrap .pv-ask-form [type="radio"]:not(:checked)+label:before,.pv-ask-modal-wrap .pv-ask-form [type="radio"]:checked+label:before{content:"";position:absolute;width:14px;height:14px;border-radius:50%;border:1px solid  #ccc;left:0;top:1px}.pv-ask-modal-wrap .pv-ask-form [type="radio"]:checked+label:before{content:"";position:absolute;width:6px;height:6px;border-radius:50%;border:5px solid #03a9f4;left:0;top:0}.pv-ask-modal-wrap .pv-ask-form [type="checkbox"]:not(:checked),.pv-ask-modal-wrap .pv-ask-form [type="checkbox"]:checked{position:absolute;left:-9999px;opacity:0}.pv-ask-modal-wrap .pv-ask-form [type="checkbox"]:not(:checked)+label,.pv-ask-modal-wrap .pv-ask-form [type="checkbox"]:checked+label{padding-left:25px;position:relative;display:block;line-height:16px;cursor:pointer;word-break:break-all;box-sizing:border-box}.pv-ask-modal-wrap .pv-ask-form [type="checkbox"]:not(:checked)+label:before,.pv-ask-modal-wrap .pv-ask-form [type="checkbox"]:checked+label:before{content:"";position:absolute;width:12px;height:12px;border:1px solid  #ccc;left:0;top:1px}.pv-ask-modal-wrap .pv-ask-form [type="checkbox"]:checked+label:before{content:"✓";position:absolute;width:12px;height:12px;border:1px solid #03a9f4;background-color:#03a9f4;left:0;top:1px;color:#fff;text-align:center;line-height:12px;font-size:12px}.pv-ask-modal-wrap .pv-tips-icon{top:50px;width:66px;height:66px;color:#fff;font-size:42px;line-height:66px;border-radius:50%;text-align:center}.pv-ask-tip.pv-ask-modal-wrap{background-color:rgba(0,0,0,0)}.pv-ask-tip>div{position:relative;width:220px;height:200px;background-color:#fff;border-radius:16px;text-align:center;font-size:16px;padding-top:140px;line-height:20px}.pv-ask-tip>div>span{position:absolute;left:50%;margin-left:-33px;font-size:42px}.pv-ask-right-tip>div{color:#09bb07}.pv-right-icon{background-color:#09bb07;font-size:44px}.pv-error-icon{background-color:#f76260;color:#fff}.pv-error-icon:before{content:"!"}.pv-ask-error-tip>div{color:#f76260}.pv-ask-modal-answer .pv-ask-content{padding-top:100px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.pv-ask-modal-answer .pv-ask-content>div{max-width:80%;min-height:66px;padding-left:80px;position:relative}.pv-ask-modal-answer .pv-ask-content>div>p{font-size:14px;color:#212121;word-break:break-all;line-height:1.4}.pv-ask-modal-answer .pv-tips-icon{position:absolute;top:0;left:0}.pv-ask-view-img{padding:0 74px;background:rgba(0,0,0,0.6)}.pv-ask-view-img .pv-ask-view-img-close{position:absolute;top:20px;right:20px;width:34px;height:34px;line-height:32px;font-size:20px;text-align:center;color:#fff;background:rgba(255,255,255,0.2);border-radius:50%;cursor:pointer}.pv-ask-view-img .pv-ask-view-img-close:hover{background:rgba(255,255,255,0.4)}.pv-ask-view-img img{max-width:100%;max-height:90%}\n', ""]),
		t.exports = e
	},
	function(t, e) {
		t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAA5ElEQVQYlY2RMUrEQBhGXwKpUieXkKRa7e1dm1xErQTbdILeQGyFmU7InEGnCx5hmskNJsVnYUZklwVf/Xh8/H8hCQBr7R64Bc754RN4GobhnYwkjDHjNE0KISilpJSSQgiapknGmFESksAYc+WcU0pJh6SU5JyTMWYviRK467qOqqo4pKoquq5jm0cJ7JqmORIzbdsC7LL8H4os+2VZTloxxnwZSuB5nmfWdT0SQwh47wFeAApJWGvHuq4f+r7PG4kx4r3PkS/gsvjzlGvgBrjYwh9b8R44A15/5VNYaxvgEXj7Brk5hwkmAq6cAAAAAElFTkSuQmCC"
	},
	function(t, e) {
		t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAABE0lEQVQYlY2RO0jDUBRAz0t/xEEFKQ62kIBYUItLdTS8XQuCINjdxUWdBMkQqpOgi+ImLh3Esc4WOrYuJeIQBQtuQlGh2KX6HJKIEgqe7cLhcLlXOI4DgCvtZWAbmMenCRzla+XrYCYmpcSV9v6EztnmlDA3JkVyJSuSuWFhPnVZf8xYifF2/QZArNa/lrJDVA/mBHqcP/T6sNdSPH9QzNfKVQ3YKRlREUCPQ8kQBOuhAYXpkagYMjsKQCGU/4MI5dv798HW3RvgXwYNOK60Fb1+VGx24MRTAOcAsTVD8x4yVqLRYTGdEoyl4FNB6xVOPUXXj+ReTOtK/HpKEdgCFoJwIyjuAjPAxY88CFfaaeAQuPwGTy5LXCSkAf4AAAAASUVORK5CYII="
	},
	function(t, e, i) {
		var n = i(19),
		r = i(291);
		"string" == typeof(r = r.__esModule ? r.
	default:
		r) && (r = [[t.i, r, ""]]);
		var a = {
			insert: "head",
			singleton: !1
		},
		o = (n(r, a), r.locals ? r.locals: {});
		t.exports = o
	},
	function(t, e, i) { (e = i(20)(!1)).push([t.i, ".pv-menu{background-color:rgba(41,49,61,0.9);width:285px;border-radius:6px;color:#fff;font-size:12px;position:fixed;display:none;z-index:31;-ms-user-select:none;user-select:none}.pv-menu>div{line-height:34px;padding:0 20px;color:#fff}.pv-menu>ul{border-top:1px solid rgba(255,255,255,0.1);margin:0;padding:4px 0;list-style:none}.pv-menu>ul>li{list-style:none;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-decoration:none;padding:3px 20px;line-height:17px}.pv-menu>ul>li[data-target]:hover{color:#fff;background-color:rgba(255,255,255,0.1)}.pv-menu>ul>li:active{color:#fff}.pv-menu>ul a{color:#fff;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-decoration:none;padding:3px 20px;line-height:17px}.pv-menu>ul a[target]:hover{color:#fff;background-color:rgba(255,255,255,0.1)}.pv-menu>ul a:active{color:#fff}\n", ""]),
		t.exports = e
	},
	function(t, e, i) {
		var n = i(19),
		r = i(293);
		"string" == typeof(r = r.__esModule ? r.
	default:
		r) && (r = [[t.i, r, ""]]);
		var a = {
			insert: "head",
			singleton: !1
		},
		o = (n(r, a), r.locals ? r.locals: {});
		t.exports = o
	},
	function(t, e, i) { (e = i(20)(!1)).push([t.i, ".pv-danmu{position:absolute;width:100%;bottom:0;top:0;left:0;pointer-events:none}.pv-danmu>canvas{pointer-events:none}\n", ""]),
		t.exports = e
	},
	function(t, e, i) {
		i(295),
		t.exports = i(9).Object.values
	},
	function(t, e, i) {
		var n = i(15),
		r = i(296)(!1);
		n(n.S, "Object", {
			values: function(t) {
				return r(t)
			}
		})
	},
	function(t, e, i) {
		var l = i(25),
		c = i(48),
		u = i(31),
		d = i(64).f;
		t.exports = function(s) {
			return function(t) {
				for (var e, i = u(t), n = c(i), r = n.length, a = 0, o = []; a < r;) e = n[a++],
				l && !d.call(i, e) || o.push(s ? [e, i[e]] : i[e]);
				return o
			}
		}
	},
	function(t, e, i) {
		var n = i(19),
		r = i(298);
		"string" == typeof(r = r.__esModule ? r.
	default:
		r) && (r = [[t.i, r, ""]]);
		var a = {
			insert: "head",
			singleton: !1
		},
		o = (n(r, a), r.locals ? r.locals: {});
		t.exports = o
	},
	function(t, e, i) { (e = i(20)(!1)).push([t.i, ".pv-subtitle{position:absolute;bottom:30px;top:20px;left:20px;right:20px;pointer-events:none;color:#fff;font-size:20px;line-height:1.1;font-weight:bold;word-break:break-all;text-shadow:#000 1px 0px 1px,#000 0px 1px 1px,#000 0px -1px 1px,#000 -1px 0px 1px}.pv-subtitle .pv-subtitle-top{top:0}.pv-subtitle .pv-subtitle-middle{top:50%;-ms-transform:translateY(-50%);transform:translateY(-50%)}.pv-subtitle .pv-subtitle-bottom{bottom:0}.pv-subtitle .pv-subtitle-bottom-b{min-height:1.1em;margin-top:5px;margin-bottom:3px}.pv-subtitle>div{position:absolute;width:100%;left:0}.pv-subtitle>div span{display:block;margin-top:5px}.pv-subtitle>div span.pv-subtitle-left{text-align:left}.pv-subtitle>div span.pv-subtitle-center{text-align:center}.pv-subtitle>div span.pv-subtitle-right{text-align:right}.pv-full-wrap .pv-subtitle{bottom:61px !important}\n", ""]),
		t.exports = e
	},
	function(t, e) {
		t.exports = "data:video/mp4;base64,AAAAHGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAAAhmcmVlAAAC721kYXQhEAUgpBv/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3pwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcCEQBSCkG//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADengAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAsJtb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAALwABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAB7HRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAIAAAAAAAAALwAAAAAAAAAAAAAAAQEAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAC8AAAAAAAEAAAAAAWRtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAAKxEAAAIAFXEAAAAAAAtaGRscgAAAAAAAAAAc291bgAAAAAAAAAAAAAAAFNvdW5kSGFuZGxlcgAAAAEPbWluZgAAABBzbWhkAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAADTc3RibAAAAGdzdHNkAAAAAAAAAAEAAABXbXA0YQAAAAAAAAABAAAAAAAAAAAAAgAQAAAAAKxEAAAAAAAzZXNkcwAAAAADgICAIgACAASAgIAUQBUAAAAAAfQAAAHz+QWAgIACEhAGgICAAQIAAAAYc3R0cwAAAAAAAAABAAAAAgAABAAAAAAcc3RzYwAAAAAAAAABAAAAAQAAAAIAAAABAAAAHHN0c3oAAAAAAAAAAAAAAAIAAAFzAAABdAAAABRzdGNvAAAAAAAAAAEAAAAsAAAAYnVkdGEAAABabWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAtaWxzdAAAACWpdG9vAAAAHWRhdGEAAAABAAAAAExhdmY1Ni40MC4xMDE="
	},
	function(t, e, i) {
		var n = i(19),
		r = i(301);
		"string" == typeof(r = r.__esModule ? r.
	default:
		r) && (r = [[t.i, r, ""]]);
		var a = {
			insert: "head",
			singleton: !1
		},
		o = (n(r, a), r.locals ? r.locals: {});
		t.exports = o
	},
	function(t, e, i) { (e = i(20)(!1)).push([t.i, ".pv-password{position:absolute;left:0;top:0;width:100%;height:100%;background-color:#000;color:#fff;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-user-select:none;user-select:none}.pv-password p{margin:0;line-height:20px;font-size:15px;min-height:21px;margin-bottom:4px}.pv-password p small{color:#f4c600}.pv-password input{width:200px;padding:4px 10px;border:0}.pv-password button{display:inline-block;vertical-align:top;background-color:#03a9f4;color:#fff;border:0;line-height:24px;padding:0;width:56px;cursor:pointer;border-radius:4px;outline:none}.pv-password button:hover{background-color:#2ebcfc}.pv-password button:active{background-color:#03a9f4}\n", ""]),
		t.exports = e
	},
	function(t, e, i) {
		var n = i(19),
		r = i(303);
		"string" == typeof(r = r.__esModule ? r.
	default:
		r) && (r = [[t.i, r, ""]]);
		var a = {
			insert: "head",
			singleton: !1
		},
		o = (n(r, a), r.locals ? r.locals: {});
		t.exports = o
	},
	function(t, e, i) { (e = i(20)(!1)).push([t.i, ".pv-spread-text{position:absolute;left:0;bottom:58px;width:100%;font-size:14px;line-height:1.8em;height:1.8em;background-color:#000;overflow:hidden;z-index:0}.pv-spread-text .pv-spread-close{top:50%;margin-top:-8px}.pv-spread-image .pv-spread-close{top:5px}.pv-spread.pv-spread-text:hover .pv-spread-txt{animation-play-state:paused}.pv-spread>a{position:absolute;top:0;left:0;height:100%;width:100%;cursor:default}.pv-spread .pv-spread-txt{position:absolute;top:0;left:0;height:100%;padding-left:100%;white-space:nowrap;text-decoration:none;animation:pv-spread-move 10s linear 0s infinite normal;cursor:default;color:#fff}.pv-spread .pv-spread-close{position:absolute;right:5px;width:14px;text-align:center;line-height:14px;cursor:pointer;border:1px solid #999;background-color:#000;color:#999}@keyframes pv-spread-move{from{transform:translateX(0%)}to{transform:translateX(-100%)}}.pv-skin-green ~ .pv-spread-text{bottom:68px}.pv-skin-gold ~ .pv-spread-text{bottom:64px;z-index:1}.pv-control-outside .pv-skin-green ~ .pv-spread-text{bottom:48px}.pv-control-outside .pv-skin-gold ~ .pv-spread-text{bottom:60px}.pv-spread-image{position:absolute}.pv-spread-image>img{max-width:200px;max-height:200px}.pv-spread-image.pv-spread-tl{top:10px;left:10px}.pv-spread-image.pv-spread-tr{top:10px;right:10px}.pv-spread-image.pv-spread-bl{bottom:10px;left:10px}.pv-spread-image.pv-spread-br{bottom:10px;right:10px}\n", ""]),
		t.exports = e
	},
	function(t, e, i) {
		var n = i(19),
		r = i(305);
		"string" == typeof(r = r.__esModule ? r.
	default:
		r) && (r = [[t.i, r, ""]]);
		var a = {
			insert: "head",
			singleton: !1
		},
		o = (n(r, a), r.locals ? r.locals: {});
		t.exports = o
	},
	function(t, e, i) { (e = i(20)(!1)).push([t.i, '.pv-visitor{position:absolute;left:0;top:0;right:0;bottom:0;z-index:31;background-color:rgba(0,0,0,0.4);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.pv-visitor-container{width:558px;border-radius:8px;background-color:#fff}.pv-visitor-banner{text-align:center;font-size:0;border-top-left-radius:8px;border-top-right-radius:8px;overflow:hidden}.pv-visitor-banner>a{display:block}.pv-visitor-banner>a>img{max-width:100%;max-height:180px}.pv-visitor-main{padding:20px 0 25px 0;text-align:center}.pv-visitor-lists{text-align:right;display:inline-block;padding:0 10px}.pv-visitor-list{margin-bottom:8px;font-size:12px}.pv-visitor-list>span{color:#333}.pv-visitor-list>input,.pv-visitor-list textarea{width:270px;border:1px solid #ececec;border-radius:4px;line-height:16px;padding:6px 10px;display:inline-block;vertical-align:middle}.pv-visitor-list>input::-ms-clear,.pv-visitor-list textarea::-ms-clear{display:none}.pv-visitor-list>input.pv-visitor-error,.pv-visitor-list textarea.pv-visitor-error{border:1px solid #ff5b5b}.pv-visitor-list>input.pv-visitor-error::-webkit-input-placeholder,.pv-visitor-list textarea.pv-visitor-error::-webkit-input-placeholder{color:#ff5b5b}.pv-visitor-list>input.pv-visitor-error::-moz-placeholder,.pv-visitor-list textarea.pv-visitor-error::-moz-placeholder{color:#ff5b5b}.pv-visitor-list>input.pv-visitor-error:-ms-input-placeholder,.pv-visitor-list textarea.pv-visitor-error:-ms-input-placeholder{color:#ff5b5b}.pv-visitor-list>textarea{resize:none;line-height:14px;overflow:hidden}.pv-visitor-tips{color:#ff5b5b;font-size:12px;line-height:16px;margin-bottom:10px;display:none}.pv-visitor-tips:before{content:"!";border-radius:8px;width:16px;text-align:center;display:inline-block;vertical-align:middle;background:#ff5b5b;color:#fff;margin-right:5px}.pv-visitor-submit>span{cursor:pointer;min-width:100px;padding:0 10px;line-height:34px;background:#03a9f4;display:inline-block;border-radius:6px;-ms-user-select:none;user-select:none}.pv-visitor-submit>span:hover{background:#2ebcfc}.pv-visitor-submit>span.pv-visitor-success{background-color:#eee;color:#333}\n', ""]),
		t.exports = e
	},
	function(t, e, i) {
		var n = i(19),
		r = i(307);
		"string" == typeof(r = r.__esModule ? r.
	default:
		r) && (r = [[t.i, r, ""]]);
		var a = {
			insert: "head",
			singleton: !1
		},
		o = (n(r, a), r.locals ? r.locals: {});
		t.exports = o
	},
	function(t, e, i) {
		var n = i(20),
		r = i(65),
		a = i(308);
		e = n(!1);
		var o = r(a);
		e.push([t.i, '.pv-ppt-control{position:absolute;left:0;top:0;height:100%}.pv-ppt-close{position:absolute;top:0;left:0;width:26px;height:100%;background-color:rgba(0,16,27,0.7);color:#fff;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.pv-ppt-close>span{font-size:12px;word-break:break-all;-ms-user-select:none;user-select:none;text-align:center}.pv-ppt-close.pv-ppt-close-right{left:auto;right:0;top:10px;height:200px}.pv-ppt-lists{position:absolute;left:26px;width:186px;top:0;height:100%;background:#fefefe}.pv-ppt-tab{background:#00101b;line-height:40px;font-size:0;color:#fff}.pv-ppt-tab>span{width:50%;display:inline-block;font-size:12px;text-align:center;position:relative;vertical-align:top;cursor:pointer}.pv-ppt-tab>span.pv-active{color:#039af4}.pv-ppt-tab>span.pv-active:after{content:"";position:absolute;top:100%;left:0;width:100%;height:3px;background:#039af4}.pv-ppt-container{position:absolute;width:100%;top:40px;bottom:0;overflow:auto}.pv-ppt-container::-webkit-scrollbar{width:8px}.pv-ppt-container::-webkit-scrollbar-track{background-color:#000}.pv-ppt-container::-webkit-scrollbar-thumb{border-radius:3px;background-color:#fff;box-shadow:inset 0 0 1px rgba(0,0,0,0.8)}.pv-ppt-container>.pv-ppt-list:last-child{margin-bottom:50px}.pv-ppt-container>.pv-ppt-list:first-child{margin-top:20px}.pv-ppt-hide-list+.pv-ppt-lists{display:none}.pv-ppt-player{background-color:rgba(0,0,0,0.3);background-size:100% 100%;position:absolute;width:100%;height:100%;right:0;top:0}.pv-ppt-player>img{width:100%;height:100%;position:absolute;left:0;right:0}.pv-ppt-secondary{position:absolute;top:10px;right:26px;height:200px;width:355px;cursor:move}.pv-ppt-secondary.pv-ppt-player{z-index:1}video.pv-ppt-secondary.pv-video{top:10px;right:26px;left:auto;height:200px;width:355px;z-index:1}video.pv-ppt-secondary.pv-video+*:not(div){z-index:1 !important}.pv-ppt-list{color:#333;font-size:12px;padding:0 10px;word-wrap:break-word;cursor:pointer}.pv-ppt-list img{width:100%;height:auto}.pv-ppt-list.pv-active{background:#03a9f4}.pv-ppt-list.pv-active .pv-ppt-list-img{border:1px solid #03a9f4}.pv-ppt-list.pv-active .pv-ppt-list-title{color:#fff;border-bottom:0}.pv-ppt-list-img{margin-bottom:10px;padding:10px 5px;border-radius:8px;border:1px solid #f5f5f5;display:none}.pv-ppt-image .pv-ppt-list-img{display:block}.pv-ppt-image .pv-ppt-list-title{display:none}.pv-ppt-image .pv-ppt-list{background-color:transparent !important}.pv-ppt-list-title{border-bottom:1px solid #f5f5f5;padding:15px 10px}.pv-ppt-switch-btn{position:absolute;width:60px;height:48px;background:url(' + o + ");background-size:100% 100%;cursor:pointer;right:70px;top:150px;z-index:1;opacity:0;transition:opacity .3s}.pv-ppt-switch-btn:hover{opacity:1}.pv-ppt-secondary:hover ~ .pv-ppt-switch-btn{opacity:1}.pv-ppt-secondary.pv-hide ~ .pv-ppt-switch-btn{display:none}\n", ""]),
		t.exports = e
	},
	function(t, e) {
		t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAwCAYAAABNPhkJAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAABqUlEQVRo3u2Zv0vDQBTHv2dcq2Zu6KgWncXB/gFdOmSpu5tjl45VEFSQgjgILk4dXLJ2cEwFf0yCUuso3YuNoyEuRqjaNOXuXS/JfeCWHLzch7t3l3thWMoHyBBzsx6AFtbCWlgLa2EtrIWzwzxF0Pe3LhZyOaExh56HxUKROw7JDIuWFRmTZIZDmGkJiRMM+sLGpHN4GihylRquGU6aLLdwCDOtkTYOt+0gGPRHmtt2kifMQ8HKJ1+4c3uPm7uHP89LZRvMtLC9swvf9wEAl60rqcIkx1KpbI/tq9oVtC7OYBgG9o+b2Dtq/vStrS7j+eWVVFjqko6SrdoVPHau0ajX0iE8STbsY4x2HFKE48r+7kuksEqy5MKqyZIKqyhLJrxeXFFSFiA6h5+6PRycnAKAUrIAwHj+LYX31Dj3Xh7Zad4zCSnHUtQSl40U4fPmIQzDAAA06rWZ3JJCSEs8UbB/PqnctoOtzY3kC0ddJuIy9D6EjEXapqVCXECBAoBsMicsJIdF1o2p4Zrhz+8yDQU+UWyuTSuJZC6HtXDa0cJpRwunHS2cdr4A6CHBPkx0xwEAAAAASUVORK5CYII="
	},
	function(t, e) {
		t.exports = "data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjIwLjEwMAAAAAAAAAAAAAAA//tQwAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAJAAAIKAAzMzMzMzMzMzMzM0xMTExMTExMTExMZmZmZmZmZmZmZmZ/f39/f39/f39/f5mZmZmZmZmZmZmZs7Ozs7Ozs7Ozs7PMzMzMzMzMzMzMzObm5ubm5ubm5ubm//////////////8AAAAATGF2YzU4LjM1AAAAAAAAAAAAAAAAJAPMAAAAAAAACCjndrzVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7UMQAAAmxmzJ0A4AZjTMm/wMwAJQA0gP/5hnqeeeef///////9v0///v+rmGNoYYYeeeeeeeef////seeeeeeeeeYYYYYYYOEBuNwfgvAeDsSzhEADALB2JY3Jnh4AAAAhQBQBQBQCABwDgQCAMBAAAheI/CH1JeTRiXfy6ZF4vf5iXS6ZF7/0looqS//SWiipJL//WiipJJaKP//6kklooqSSWj///+lospJJENyC9ham/8yEYgDwHLNf/Oh1ANByAn2Lf////V/////////+1LEBQPLzaD4HAuACWo0XgAQ/vj//////////////+ZD5DLoWUgEABoGAFACoDQB6BgGYCsBgNYGYBgvoOABgbhqsBhH4CYBgEYGkBgRwBOBgCQB6BgQoAKBgHoBoAEATBfYY0gpdSG//P+f//f95ev///P//r/z5//9d/31//////3////////nYg91VVSQAEC4AuYAAAbGALgPJgIwLUYLeu2GONBQRgRoFWYCyAlmBaAcxgg4AkJAJ6JDQ4RL6Spml6///8v/+v/P//+////7UsQGgIpxnvAAB/mJmDQd7BD++Ml///////////////cof+WOmXUMAFADzAGACgwD8BfMCcBHjC90nwzowIEMDzApzAYwHcwJIHoMDNATDAFwANHxr8OS+kA3E0AC3B5LN5c++u/66z5ev/P/5//58+X8uX/1z/rL//l////P///////t2ON3eJmwsAAAYAnMAsADjAXwDEwOQCaMRDKAjU2ASgwUcCRMBjAmzAVAsQwGcB8AoAmlo3eAJXSWDSqa/bTr///83b+/6//T//v3//tSxAeACxGg7gAL98F2s95wEPr57duP//////7////////uPN1XMikHABIcATA4BVMBbADjA3gG8xEEmBNTqAyTBLwDEwDUCFMAZCxDAUgH4wAIAVRuaTAUzcwNLojZBBUgECQ81lz5cuu/7/rLn/8v/r//v/y58//+v77//z////////////9zT6s6SGLumACAIYBgC5gUggGD0HKZSf/550DLmE6BIOAamDGNQYUwIhgJABphNdh6l7lVZjTYDjzWSwvPn3y/r+snn/8//v//+1LECgHMSaLugIf3wXUz3cAQ/vn/v/y5//8+/7z//5////v///////5yXOKsYt0FgAsLgDgMAPTACQIYwDoGZMGfalzIbgs0wCsCUIgHgwMcEIMEqAJgcAwiwAUvV5pDbr65/y/l//1+XJ5////X/1///5f/Ll11mu//////r////////CffJpyRxVACxAAPGAAgIZgCwEcYCKDTmCtNg5jV4XSYEgBiGAzAJxgaoGyYJoAHiwDATAA7FHvikvDF//5f//31+T//y/+/////y//7UsQIA8tFnvAAh/fJjLSdgBD++P/5//XX//////n///////+pW/kjboXPMACADjAFwCswDoBkMCVBLTC0E10zdUIdMDoAqjAYgHIwJkHRMDWARzAGAABK9xIfllOGf/Pn1//3/eT7z///g/++uvz/n/8u+8uS7/8v///7///////9uQG3R4WOhgAWYAwACGAbgDZgNwCMYIKBqmJmGsJrtIMWYLsBZGA8AWRgOoY+YEgBHmADADCE9mEBxCV097q6VVlFVWNGYkQpCB0Tyeb1//tSxAcACxme+eCH18GBs54QEP75333/X99/+XP/5//9dfnz////7////y/n/////////+rsehlxV7JMjwCQcCKYNIDRkYH0HX2B4YSgChgIAdBYWkwEQNUJzoxKrc2hpkEAxvJ5cuXPrr+u+8n//l/8v//6/8//+X//f/+f////////////qUuEu1AKWmMAGABzAFwBgwDYBHMCXA+DDFkUQz18G2MDCAIRgBIMBqB/zAtwFcwBcAIRRZ1DtMSFqv/+fL//v8+Ty5f//z6/tr7/+1LECAPLjZ7uAIv+yZg0n4KBcAHf/6//Xp37cf//////r///////52WteU1LUhUAKBgA2AQDowBACFMBNBkDB5GiYyb0K+MBEAjQgBqMDABNzBJwDEDAMQkACr2eWRWCP///////////////////+vpv//9DppupNN6CCDLQZaaaY6Bcg4BCcBIAKAEATgYA0AiAYCsBTAYJ8DFAYCGUxAYDwAWgYEGAVgYBWAjgiACgLAaQGAVgEYBwAeHrjoIIThgaIGRx9cBgNgMNh8Px8P/7UsQEgAuBW1O4FoAQAAA0g4AABNRqIwwAA9D8bCH1JdBBL5oX009FH2TTLhcSLxeX+aEummydaKKkv3QQQN03S9FH/TTLhcNDdN1JJdaKP/6CDJ9P/X//oIMnrTNx6ASgAG4Xh/waTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
	},
	function(t, e) {
		t.exports = "data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjIwLjEwMAAAAAAAAAAAAAAA//tQwAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAJAAAIKAAzMzMzMzMzMzMzM0xMTExMTExMTExMZmZmZmZmZmZmZmZ/f39/f39/f39/f5mZmZmZmZmZmZmZs7Ozs7Ozs7Ozs7PMzMzMzMzMzMzMzObm5ubm5ubm5ubm//////////////8AAAAATGF2YzU4LjM1AAAAAAAAAAAAAAAAJAPMAAAAAAAACCin8frHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7UMQAAApxpy50A4AZZ7NoNwUAApAA0QP/5hhnnnnn//////9/1PMM9DP/M/Qw8///3/Pf//8wwwwwwwww888888888wwwwwwwcGg3G43B+D8B4OxLQbg/B+A8B4PxLG43Gg0Gg0AACAUCgQCgUCgUCAMBAABDeBBfAQH1JeXjEu/kyZF4mv8xLpMmRe/8mjEukyZF7/8yRRLqSRe//1ooqSSWij///SSoo0klo/////60RPALjf/QJIFH/+Gpi5zZSv///////////6//////+1LEBoAMEab0HAuAAUGz3zQQ3vn//////////+omi+OETaICAYACAEAYAyATAYAeALgYCcA5gYGUCngYLYA2gYOgCdAYoagcAYCsDcAYNKB1AYCaAXABANwGAKACIWghpIXPCgSONn1uyjU8jkDaDzTKeRNHz8s5X/Wf536nZ/5///7/z//+eu+pf9f/+/X///1WTLhFxmA+cG2AGAMgD4GDqgYgGENGtIEQEkBcAIDkRWxASaMVK2E0AgZhDc6PcrrrfiMq/816L/2///r0X//7UsQMAAxJpO1gi/0BQjPfNBD6+cb/TaiXr//svpan2/67939f////9/////j+er8sd9lidYOABDAGQAswFIBCMQ0BjTEYnW4wHcDIMAkAOTACwBICAAKQzDX+q5Wcs5am3NmnBGw86Lc7l35656r9e/+Wv899y/+//+8//6ZeX+X/l+12X/////////////O2JfFHXTUBQEZjshAGlXoqYLAJpgFgFIBV3OTGqXLJhsAIAGpucs7nsOun3/fXkEsG/H/99/Jd/Ef7b91r/TVL//tSxBCATSGk6QCL/sGBtF1gEX+hIbajPX0/9fq9Lsv/P/f8/f9///mt5WpyFt4t8oAACgAyBQFKYpwCQmm4RlRg0YIMYDMArmAVgEhgCAAaYACAAIqs6pa0ttOp4oEdDzstSurlr0ev+RL0Rb3PL//67v/D//90r/TT1+1F9P/T637N/z////////+/rGzalsWcVK4BACJgGIBkYh+A2Gq1uFJg3wGuYDOAjGAUADpgBoAMBgAFMJrtNVphaocEE2B9z8jy0fl/8vl9mWvnD5//+1LECYALbaTtAIf3wPay4vQQ1vtf/y+y//9T/8+/1/5fz+dd/////9f////z8cq1LKoi6SaINACjAEAE8w1AA2NXiViDBvQKYwGAA1MAjAEjACgAMuMpq407Ws5fb+7AfbXTWh5NFqZ53/siL8zqd+SJX/f+9Z4v/n/ZHUjuf8////f/LWeW/////1HR+AkJwO9wsCwJIkapC0vBGAB5CueZ2e352fX/O/RVWul/rXo91T8V/r+zV/rr6+uqa71/r9dVsnT/9////e///h/LU//7UsQbAA0VpOkAi/7BkLRd8BF/2VJXgX2hwFQBEQAGxgAoF2YWwDCHDMIQxhUoE0YEgAcmAcgCxgCwAKCgApDVk0moKXJ0zAowgTJGJR5WtypFoOvI79v9/P/Oj/2Req/+N/ZP2ev9bJv71/7/9PqzVsvX/////////+67yrMQG3BPcRAAgNAIzAEAIYwTcFJNd/F4TBygD8wFcASMAaAAQgAKStYNAs/drC7l/Kvl///y/Iq/5f/fy2f+L/137f/13ZOn9t/+u/am6dPv6/+b//tSxBKDy42g6gCL/smKtJ0AEX/Y1/7//wzw7NRNpClYgAAAKAKmAFAHhgGoGSYDoEBG9VBvphLIBMYDkAImATgAAOAFUKl6vNIKgNyX51PZ7l+uiLz+ma95V5/vqfZbeI/2//+mZbuv3au9Xr15N+1Vv6////+tf+v/8+W70y6DA0MASADmACADhgDoCeYCsB5GCRBSpxFJooEClgCA+gcAohgA0gavZ7YvXrYumnBYlFVFa6TK2B9XJTqXLfr/PUzX5/+/9Hftf/P/f9/8rX//+1LEEQOJSZr/4IbXyZG0n0KBcAF/PU///pdf///1JmBNkAEJwskAwBglAw6iSA/VSzAOH+FACDCJErHlv///////////1////////19N///QbppupNN6CCDLQZabqYmyfFmBigeQHgBIGAOgDYNlAYB4BXAYKEDYAYUEC1AZQuPtAYPUDnAYIcAtAYBMAWAYAEAHgHAE4X/FnDwRhacwPH1gQCMRiQWi0SCMRhEAAhPEAfnOUuyakty4XC8vycIOXzeYkyRXzxmbkUIoZEWIsv/7UsQXgBBt1Tu4KQAYAAA0g4AABC3zQvppsnWYl0yL36ZcLhoT6aaXWiY/1l83IoRQqE+bpqSS0lmJd/9N0EEE3rT/ooqS//QQZ9aaZcIADSAoqPrRRUklKQgMQ4g3//dBBD///8iyIKpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq"
	},
	function(t, e) {
		t.exports = "data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjIwLjEwMAAAAAAAAAAAAAAA//tQwAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAJAAAIKAAzMzMzMzMzMzMzM0xMTExMTExMTExMZmZmZmZmZmZmZmZ/f39/f39/f39/f5mZmZmZmZmZmZmZs7Ozs7Ozs7Ozs7PMzMzMzMzMzMzMzObm5ubm5ubm5ubm//////////////8AAAAATGF2YzU4LjM1AAAAAAAAAAAAAAAAJAPMAAAAAAAACChbJmRZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7UMQAAApZrSx0BQAJcDNoNwUAAhwBWgP//+ee////////5n6f//z/9v7Hnvzzz///uYYYYYYYYYeeeeeeeeeYYYYYYYYSD8fj8fj8fj8RYLYBQBgLw0LsFsCmDeF+LA8Hg8Hg8HgiAUCgQCgUCgUBgMBgABDeBF8BAfUl5eMS7+XTIvE1/mJdJkyL3/k0Yl0mTIvf/pLRRUkl//rRRUkktFH//9SSS0UVJJLR/////7LH2Ggf/VI0GX/1SgDJ//6P/6F/9v///9X//1N/t///+1LEBgPMCab0HAuAAWe03gAQXSD//q///////7/////0WWXSwITAEgBwLADwGBMgFAGAvgPgEgGMAQBgAwU0G2AwbUqqAz2gUBAw/YI7AwSoDLAsB6gYBqASAYAyAVAYAoACg2CRfDif+qf+j/r////1f9P//6v9P///////t//9X+r9FzxbGCFADcBQHuAwFQAHAwE0AoAwEcCOAwDIGPAwFtA8AwokaDAwC8E8AwAACFBMBCAiAPgEABAWUBpYqi2qf+v9f4P8v9f///9/4v/7UsQGg8uZpvAAh/fBdbTeABD++P//n/n///////3//////////X///jjlViSeo0AJmBNgKhgGgCSYCCAiGA5gPRgaQIqYWyVrGrTiKpg/IGYYFMAomAlgDwCAPSYADY2rc5Np///f+f+f+X+f//7/1//8v8v//////+D/L//3/////6////3qvBCS6fJgJADEYAKAkiEAmBwEkYGsAzGGZi/5sUISwYR6AvmBfADxgLYAaYBcAEGAKgBYFAA0eHbuVX/v/f+X+X+P/P//5/8P//tSxAcDy1mm8ACH18GHNN2AEX74//3/i///////5/5//////////////y3LGJkwGJhzAQGCWAOYHAApgHA4mB0LYYwfop43sOGIeJOYJwPRgQgfmAkBAYBoCIGADL8M3nH/v/X+H/H/g/+///q3+P//9v8H//+////+n+n//r/////3//+8srNNDqgQ0AkGCTAJJgNoCMYDcAsmBHAY5gZoPQYUEmUmlsD2Rg3AL6YEeBRGAeAKJgCIBEOAAKzkDV7SFX7/7f6v9X//57/V////+1LEBoPLUabwAILjwYg03gAQ/vh/9v//////+j//9f+v7pGJSHyGjCUAMAuAZwMALAUAMAkAPQMBoASwMDpAdAMNIEVQNkMBsgMJKARwMDDADgGALkEQC2AMAOBYAP+M8df8v+/9f7/xf5f//Jf6//+f+X///////f///9///////////nUiaqg8ANGBWgJZgGABcYAqAAmAJAHBgToIWYU4XvGo0CXpg6gG4YEyAsmAjAFhgE4AyYAoAIGABAASANxJ9f+v8v8f+f+f/+p/9//7UsQGA8sVpvAAgvoBi7TdgCF++P//q/1///v////t////q/Rc8WxghQA3AUB7gMBUABwMBNAKAMBHAjgMAyBjwMBbQPAMKJGgwMAvBPAAAIUEwEICIA+AQAEBZQGliqLb/7f43+T/T/Z/6///j/5v//g/8v//0f////f/X//1/////6///WONaUvsghEgCcwNMB4MBMAZzAXQGAwJ0CoMEaBbzDuzhY3BsWnMKZBEjA4AHEwGkAwMAwACSIAXTvR6YjLlH/n/n/l/n//83/t///tSxAYDy6mm8AAG78FcNN5AEPr4/9D/V//+//////1f6//+tRmPgMHhvoGAkAMQGACgJIDwCYA4CSAwNYBmAwzMX/A2KEJYAwj0BfAwL4AeAwFsANAwC4AIAwBUALAFAAwv4LPMP//3/i//+f///+f/X//3////3////////////////////LcsZ2TAQmGMAwYH4AZgXAAmAQC+YGAnhio6ynXOq0YdYf5ghA0GA2BqYBgDBgDgFlr0kG3nFX/v+QP8P+/8/+///Ub/H//+3+D/+1LECYPMPabsAIv9AYu2H0KBcAD//+j////6f///1/////7///eWVmmh1QIaASDBJgEkwG0BGMBuAWTAjgMcwM0HoMKCTKTS2B7IwbgF9MCPAojAPAFEwBEAiHAAFZyBq9or/3//+r////t///////////6b///Q6abqTTeggg1BlpvQQQdAgAygWuFoBoA9DSAMArARQMByAVgBQFEDANg5MDMdgPoDCNgW4DAvAHwDAXABQDAFQBsLvFZDBYrQiC0y+buloFA2Aw2H4/Gw1P/7UsQFAAulXV+4FpIQAAA0g4AABFojBAAD0PxsIfUluggl80Jc3TrLpI+yaZcJAyLxeR/QN03ZOtExSS/cuFw0N03S60Uf9N0EEE3qSS1LRMf/W6CDJ60/9H///6CCBLBK/hVn///PKkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq"
	},
	function(t, e) {
		t.exports = "data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjIwLjEwMAAAAAAAAAAAAAAA//tQwAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAJAAAIKAAzMzMzMzMzMzMzM0xMTExMTExMTExMZmZmZmZmZmZmZmZ/f39/f39/f39/f5mZmZmZmZmZmZmZs7Ozs7Ozs7Ozs7PMzMzMzMzMzMzMzObm5ubm5ubm5ubm//////////////8AAAAATGF2YzU4LjM1AAAAAAAAAAAAAAAAJAPMAAAAAAAACCh71uoEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7UMQAAAoFsSx0A4ABgcFn9wUgAhwBWgP//+ef////////b9P//7///Pf1PP///MMMMMMMMMPPPPPPPPPMMMMMMMMMJjcbjcbjcbg/B+AwAQAAAAAgWFQXgPAAAIAYDwSBoNCDQCAQCAUCgUCgMBgIAAIbzL5QvpJeTRiXfyZMi8TX+Yl0mTIvf+RYxLpFTImv/0looqSS//1ooqSSWij///SSooqSSWj/////9QN7//1hOf/6wlInxFl////k7b///+Lehf+//////////v//+1LEBQPKgaz4HAsACYk13gAb6+H///////+3////////kNGMBuUAUA4DAKBwDA6CgDBKCcDFgQcDLQs0D74/8D/2kIDImNADC2CkDAqCsDCMDUDCAHkCIFQtNGZQCv///rg767///L//+v/+//q//6f/376m///9Xb+3//zUUsDYyBgBYAEBgCYBEBgBwCGBgCID4BgEgIKBgNoZ0BhsTN0BhwYaIBgJgHqBgBwC4BgGgAAAMBXHoSgrqRAoTR3m1f5cv/vj6/9v///9f9X/3//7UsQHg8sxrvIAgvbJiTYeABvrqPV///9f////yMEjDOAwiA0AGgSAQwMBIADgMCVAPwMFuA8gMmVH3AMn6BAgMFzAZQMCSAVgMAyATgMAbATwMAQAnABACAUmUDNCf+X8/65c++v/L+f////b+//r/q/r7//6uvq//6v////l4TqDY0BgBQAKBgCgBGBgCYCEBgDAD2BgGIIABgRgZiBiEbLaBiJgZyBgN4HcAKArgKAL4GAqAA552QC5EQGFTt/B/+f/3w9///////+v//////tSxAeDy0ms8gCH18l/tZ4AG+vh//y6/r8nn///P////////////////j7CEl1DhYAoHAeGCSAuYSQJxi1iRnLlKuc7ImZi3A4GEmC6YG4J5gQAmGAyE2YAYELKJXUDOXP//ri66///8v5//f9///1f/9f//bU+v//+3b///+XROwNnQMALABAMAXAIgMAWAQwMAhAeAMA+A/QMCpDIgMTWZCAMUHDKgMCMA6QkAnAoAqAYCiAHHkgm4BolQLPKqv58uf99cf9//q/q/q/+/9//+1LECAPLma7wAIL4yX21ngAb6+Ff//9+////8jA/MLUBjoKABIGASgAYGApAFAGBUgOIGDMAwQGVLmGwGWFAygGDQgSYGBVAOQGAiALwGAXgLYGATAWAGAGAEwguTBmgP///+u+L////P//+v7f///6/6+3//fX1//9u39v//l4SiDbIDACgAcDAFgCMDAGwEADAJgHcDASwPYDAwgxMDFfWJEDFtAxsDAqwOAAgBHAsAlAYCYALnjmG3DIWwNZSVf5c//vg6///////9/1////7UsQHg8tVrPIAh9fJfLWeQBvrOef//9/133n///L////////////////m2YJbqNIEzAaAEMEMCkwjAbDFdF7ORjAE5exizFkCKMJMGUwOwTzAqBKMCUJMwCwH12SuoGfy/n/XH3/X///////v///////7frfX///X////8uiggsNAwAcACAwBMAaAwBYA1AwCMBgAwEYDPAwL8KeAxVZUUAxY8KkAwKgC7AwAkA0AUALQMA9AFjoSzVB0zoraVf/l/98uXf///l////3//+X8//tSxAiDy3mu8ACH18l5tZ5AEF8Z/7/+/z5///y//v//P//////////+OLzRAWWhYYEIB5gmAdGE+EeYww8B0P+HHUYPkYyIV5hUA9GCUC4YHYK5gaBTGAoBIseMU+A/+f//8PX9//q//7f/f9fX///X////8vCgQsKAwAYADAwBIAbAwBkAyAwCgBfAwFEDIAwNIKNAxdlSHAxhQKRAwL8CyAwBQAtAwBMAAAwDoAdAwE0BUAwCkAIDYSJGqyr+fPn/fF313/5/z///r+39v///+1LECQPL/azwAN9/CYg130KBcAD/9+3/21tr6v/+3f///+R4hADecQgC08DAHABQDASwEEDAmgJ4DBewgsDJ1kFkDKQQh0DBhgLoDApwH0DATQF0DAPgFQz2jMbI1NI3SBn/b///////////////t/9v19N9X//6ab009BBDQam6kEKCBogsY8QTGcAEADgMAlAEQMAFABQMAKAagMCuA1AMFOCgAMPILLAGih8CoBeA4AGC0wKAAQSAQQBgBEL7i5yJp8BgNgMNh8Px8NhqLP/7UsQGAAv9X2G4FpIQAAA0g4AABAQAA8A/Gwh9SW6CCXzQvpp1oo+yaZcLhkXi8v80JdNNjOtFFSX7oIIG6bpalomP+mmXC4aG6bqSS60Uf/TdBBA3etP+iipL///oIMmFd/Jf0O//LExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq"
	},
	function(t, e) {
		t.exports = "data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjIwLjEwMAAAAAAAAAAAAAAA//tQwAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAJAAAIKAAzMzMzMzMzMzMzM0xMTExMTExMTExMZmZmZmZmZmZmZmZ/f39/f39/f39/f5mZmZmZmZmZmZmZs7Ozs7Ozs7Ozs7PMzMzMzMzMzMzMzObm5ubm5ubm5ubm//////////////8AAAAATGF2YzU4LjM1AAAAAAAAAAAAAAAAJAPMAAAAAAAACCgPy6mqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7UMQAAAmBsSx0BoAJhcGp9wKgAhwBWgP//+mn////////b9X//9///v+t///2+pBBNNNNNNNNNBBBBBBBBBNNNMzL5fL5fLhID0HAIwFoC8EAcYJwCuBeBMB6D0LhcaTAYDAYDgcDgUCgUCgRsheI/CH0O8ViEe/iqRD4Vv8hHoqkQ+/85TTUO//OU01Djv/9TTUOOU03//9DjlNNQ45Tf///NQ45TWQ51NYiEV//QV//8iCjEz////JRN////wcG6v//////////////////+1LEBoPL/bb0HAuAAUY23gAQXyD///////////9EckcgaQe0FkYGALADoGAUAIoGAYAGAGBOgZQGCchKwGHHhTAGjOj3YGBfhCQGCaguAGB0gPQGAqgGAFQAsAoAFBtqMYILC5Sobf/////f9ft9X//////////plUgwpIP6EAAACEAPAgASARAVwFwOwDAkhYkDMJj4gDA9wIQDB2gLMDAmQEYDARAB8DAHwAoAYAVBsUIAkKWS8jX/v//8v/WWWz//L///9//t/f/9uz//9v/7UsQLg8w9tuwA331BercdwBvr4Pf//t/+1fruy7fWTAzY3hLwEAAgGADgDIGANAGAGAZgK4GAuAUQGBZguoGDmDqAGieKNIGE1hS4GDwgC4aOEz2TFpMFKINDcSIV9fy////6/L/////6/2/t////7N3/v2/////7Vb17/6ibHIJsZgLDwMAIABAMAZAFwMA0ALgMBjAWwMDMAvAMJnC8QNu9IQAMNWCggMAPA6DFXQKoCg8RgFVW7R+for/F////8//zv//////+/9+/+3////tSxAkACym47gDfecFSNh+0G2fh//v2///X///+yv6zhGkCFxCcQ2IFAAkBoAqAwDQANAwIkBuAwe4PVA2Y4reAwscFfAwbYEZOVdjQjkx8aMKCSzSgsPUsus92lttvrTlckFPRHR6kfKv69/37/+/9f5f7f/b/f/76quy//b3//q/////9j5qTI+BPYZAAiAUBYDwBIaQIqcA2p9vAwHBjAxkgwPQkFPIDVrOrFr0FdzcsmdTcUbFqRzopc7ly5c5k/38v/fv/nr/f/7e1dX//+1LEEAAMMbD5oN8/CZS23nAb6+D/dvV/1f//6tX////6ZcNyMEdhZwAEAHAwAoAWAwCEA5AwE4CSAwO0MJAygsiWAwUYE4AwKgAeA44kQs95IvLKcMiKTbkS0sRItlc5c2tP+vX5/R/vtf/+/9v79/fb//3///7f/1q1/////WUCHlAiYaoBs+BgBQAIBgD4AmBgIQBYBgSYC+Bg6gJUBq/wa2BhSYOaBgOQGCaOUYg+BRBe1W50aC9a4qP///+f/8/v////L/7///2//bu3b//7UsQKgAvJuOwA338Bgzbe9Bvr4O2r//+pX/6tv6lf1Ik0OaKBDVwXCg2UBgBgAeBgFYBwBgPAGSBg8Ir0BtFZ7WBhXgIUBhGIJsd9CmsoBlhCYqGAIJR+gWVQ7TccacsdaLcTTFlqVqT7fX9e/6l/Xz+/78/9v/t79v/+/1f/9//9X9X///9M0Kw6hGYW4AXABwAABoDACwEEDAIALIDASRAEDARi0YDAVgOADBKgDs644DQQwkkiyZ5Z+vWx/X//////9/3/+///+f77//////tSxAkDy2W27gAH98Fctx4AG+tw///r/3//+//9/////uUO3FHTLUGADgB5gDQBEYBqAimAwAPxgYII2YQ4KgGthHVphcoUaYIKBGmAeAGBgCIAaW0VO1hy38llvn//////9e/////////////b/79/////////UUyGFkhA6cBQAAACAGwMAiADAMBJAHQMCgAMAMILAdANkXBlwMLiB4AMDjA7jlYTOqjEEQKCRNZVM2p21yr//////8v///3////////+5dIMK2E2hkICgAH/+1LEDYPKibjwAIL5AYK230KBcACAuAKAYAIAegYBqBfAYI4JwgaJgbeAYNWAggYOMBrgYEqArAYCEATgYA+AHAYAUAAg3OD1SSKJeNX////////////////////76b///9NN6adSkG0GvoNQQQZZfJsVuQcZQG+B+IBoAeBgHYCGAaAcAYDICAAYT8JqAYlwRTgYM8CSAYDeBLgYDSAggYBWAHh3gucEeEPK50+hoFAtFotGw2Go1FgjEAADwD8bCHapLdBBL5oX006zEu+yaf/7UsQRAA5Rn0m4GAAQAAA0g4AABJcLiReLy/zQn002TrRRUl+mXC4aE+mml1omP+mmXC4aG6dSSXWij/6boIIJvWn/RRUl/9MuFw0N3mZNk+MwLkHAJTIt/+paP//ESJ5B3/1CVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
	},
	function(t, e) {
		t.exports = "data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjIwLjEwMAAAAAAAAAAAAAAA//tQwAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAJAAAIKAAzMzMzMzMzMzMzM0xMTExMTExMTExMZmZmZmZmZmZmZmZ/f39/f39/f39/f5mZmZmZmZmZmZmZs7Ozs7Ozs7Ozs7PMzMzMzMzMzMzMzObm5ubm5ubm5ubm//////////////8AAAAATGF2YzU4LjM1AAAAAAAAAAAAAAAAJAPMAAAAAAAACChsU+0ZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7UMQAAApZsyp0BQAJesHrtwSiAgABWgP///////////zG+Z///Pf+39jz3555///5hhhhhhhhh555555555hhhhhhhhh55554/H4/H48HgiBECIEQPBUBsAbC/IgWAFAGAKgXhIgjAYDAYDgcDgUCgUCASMxvDF8oXzjvFYhHv4qkQ+EV/kI9ESRCt/5ymmod/+cppqHHf/6mmoccppv//845TTUOOU3///zUOOU1kOdTWQQX/+n/+rAiLf///5G3///+Sur/5///////////+1LEBIALrbj4HBuAAU613rAb++H////////////7////////qLxsTQs4c8MigCACYBwBqBgA4ESBgfYCyBIAyAwJkCWAwTwokAx78B9AwI8EEAwNUBwAwDUAiAFADQBgCUL4ichCxJo1yMJOummkbLcqm+eurX/I6n/l/3/v//V//f9X/v////Zer///1f//6/63RSJ0XMBgAQFmBgy4AmBgCYAQBgDYCABgPh7Ac7IVRgRAMlllSuVGRgzXemSVOtyNgO7xnk+bl5cv53yv5f/7UsQKAAoVrvug398JubcdICv74H/f+/P5W2pL61e//q/////6tv////////skakGAMAVwAgjMAoAKAwAUAkAwDoroNXsHAwBgCUvmsw1SyLSgAKADs21bwzdXr9MzMydLvS9bdpP3/29Pprs6K/U776vt9WyvXt6lbf7qUbt6tvUq1XX/dWpX7q3XUtE2NSSFhC04DALgQEDD7wCsDATwC4DASQLwDAwJKo9rxujA+BhMA0CAEAEoTmQxCcnrPcIAFkBy87jXuXnz/sr766X5//tSxAiAS4247QDf3wFjNx2sK/Oov11/+9el+7f9dq+v/7///Wqkr+//9f+r/6+rskeLZCB9gMAeAbwMMVADQMA1AGAMApAigMBYc3ja9FUMBQEUEgKCIAFYJ4Y5OUd7qCiABBi9d3RMH97+t/+yf9tW/r//v/19X31f//v9W3//1Z5fr/r//9X//6kUUjxJjYEDgYA8ADgFDHYGAagCgGAPgRQGAMOkR9GsAgiiMKDgBW02OITlHe7VahQALEiOArkSgfuu/LRVevnWdv5/9+v/+1LEC4AL7bjtYN/fAX423aQr++D7V6v31f/V1f/X2Vb/3qRV/+ravq/7f+rfUtnPFcdge+BgDwCUDAxkDAMQA4DAEwIYDAFXQg0wBVguCKVAEioACo03eGJZR3u6wI0oQAPfaloInvTsnt+tm1Z9tf+39a909P1/u1X/17L2+v+v/9eff//6//7a/2X1VaZoT4yAcuBgDwFAAMMNAYBaAEAYAOBAAYCu5JHHIKcYCIIYiASQ5rIbm/ksn7yFxAkxKAyjZ0lqa9z2Ig5/y/X51//7UsQKAAtltvGA398BeTbdpCv74PX+v/+9S/vq/719Dv/b6//dVFBvV/3f6/////ZNAvkEEEwMAQArAMJBAAgCgDIB4CwBgMqrAcwQeRgLgVhYARPdpD7wxSW+ZMIyAQAPSz1XBv70+2n9Vv2/XX9v6N512+rX/1f13q/f6t/r/9tjyv7+r//6//q6vTLhFxcgXDgYA0CUAYWqANAFAIwQAOAGBdtSh+yCaGB2B2YAQBhe9WxrbsRif5XP/A/f58v5fqfm2XyX+//9Wr67VN////tSxAsDy0226gDf/wF/tt1AK/+oZf+rb/V/rqN1/23ftVar/X1f/rVZy4RcVoDfwMAeBlAMMNAMAGgEoAAB2AwQdyMNSUBTDAWQEEwBAAQLPqALvaxDkvsf94L7//9d/VP93X6f9//3q1q6l+36uvq2/1+q9f+qibK9f+vq6v9fV+69mWp1JkwQMQkASAAgYA0DmAYWiAeBQA2AwBABoAwS9pqNc4BMDAawDcwBYAKLNpiLva4/kvwV/+Ne//P///2i/////6vr9v/7/9e/r///+1LEC4PKkbbsAN/7gXk3H4KDYAC2x5f/6l3//1/+yuremXCBizAsTAwBAG6AwjcA8AkANgYAsAkAYJKp7GsvAdRgM4BKYAsABFv1NGXuRGKfD/5//////////////////////////TTemn0END6GgggyzM3qJ8WeMmKQAEAkBgkA4AIIgDEaEIDAaIMDGkAoDKfagD/kEYDHAP4DFMEADA4BQIAIgYEQBhfcR2JTJdnAYDYbDYfD8bD4aiwUghPIL87lLsqHbmGHfJBbJz6mm//7UsQQAA6Nn0+4JQAQAAA0g4AABOx548HhEPh8v5hOe8+ppCh35OIgRBILZOedopo9/zzx4PCQfnuhx3U03/z3MMMJ3qfp1NNQ7/548HhIP3kYixbAqAsA0ANhdf/opv//PEWNHf/KgqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq"
	},
	function(t, e, i) {
		var n = i(19),
		r = i(316);
		"string" == typeof(r = r.__esModule ? r.
	default:
		r) && (r = [[t.i, r, ""]]);
		var a = {
			insert: "head",
			singleton: !1
		},
		o = (n(r, a), r.locals ? r.locals: {});
		t.exports = o
	},
	function(t, e, i) {
		var n = i(20),
		r = i(65),
		a = i(141),
		o = i(317),
		s = i(318),
		l = i(319),
		c = i(320),
		u = i(321),
		d = i(322);
		e = n(!1);
		var h = r(a),
		p = r(o),
		f = r(s),
		v = r(l),
		g = r(c),
		m = r(u),
		A = r(d);
		e.push([t.i, '.pv-recommend{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#000;z-index:1;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.pv-recommend-container{width:85.625%;max-width:1096px;position:relative}.pv-recommend-p1{position:relative}.pv-recommend-p1-cover{width:55.11%;background-repeat:no-repeat;background-size:cover;background-position:center center;min-height:190px;position:relative}.pv-recommend-p1-cover:before{content:"";display:block;padding-top:56.291%;z-index:-1}.pv-recommend-p1-cover>div{position:absolute;top:0;left:0;height:100%;width:100%;background-color:rgba(0,0,0,0.6);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.pv-recommend-p1-cover>div>span{width:48px;padding-top:48px;background-image:url(' + h + ');background-size:48px 48px;background-repeat:no-repeat;background-position:center top;cursor:pointer;font-size:16px;line-height:21px;text-align:center}.pv-recommend-p1-share{display:none}.pv-recommend-p2{position:absolute;top:0;right:0;width:40.51%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.pv-recommend-p2-title{font-size:16px;line-height:1;height:9.411%;min-height:20px}.pv-recommend-p2-list{-ms-flex-positive:1;flex-grow:1;position:relative;overflow:hidden}.pv-recommend-p2-list>div{height:100%;overflow:hidden;white-space:nowrap;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-transform:translateY(0);transform:translateY(0);transition:transform .3s}.pv-recommend-list-part{display:inline-block;height:100%}.pv-recommend-list-part>div{position:relative;height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-line-pack:justify;align-content:space-between;-ms-flex-wrap:wrap;flex-wrap:wrap}.pv-recommend-list-part>div>div{width:47.297%;cursor:pointer}.pv-recommend-cover{position:relative;margin-bottom:10px;overflow:hidden}.pv-recommend-cover:before{content:"";padding-top:56.667%;display:block}.pv-recommend-cover>img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;-ms-transform:scale(1);transform:scale(1);-ms-transform-origin:center center;transform-origin:center center;transition:transform .3s}.pv-recommend-cover:hover>img{-ms-transform:scale(1.2);transform:scale(1.2)}.pv-recommend-cover>span{position:absolute;bottom:0;left:0;width:100%;padding:25px 5px 5px;font-size:12px;line-height:14px;color:#fff;white-space:nowrap;background:linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 34%, rgba(0,0,0,0.31) 66%, rgba(0,0,0,0.47) 89%, rgba(0,0,0,0.6) 100%)}.pv-recommend-cover+div{font-size:12px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.pv-recommend:not(.pv-recommend-share) .pv-recommend-list-part>div>div{height:50%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.pv-recommend:not(.pv-recommend-share) .pv-recommend-list-part>div>div:nth-child(-n+2){padding-bottom:5px}.pv-recommend:not(.pv-recommend-share) .pv-recommend-list-part>div>div:nth-child(n+3){padding-top:5px}.pv-recommend:not(.pv-recommend-share) .pv-recommend-cover{margin-bottom:0;-ms-flex-positive:1;flex-grow:1}.pv-recommend:not(.pv-recommend-share) .pv-recommend-cover:before{display:none}.pv-recommend:not(.pv-recommend-share) .pv-recommend-cover+div{padding-top:10px}.pv-recommend-p2-nav{position:absolute;top:100%;font-size:0;width:100%;text-align:center;padding-top:30px}.pv-recommend-p2-nav>span{display:inline-block;width:32px;height:32px;line-height:32px;background-color:rgba(51,51,51,0.8);border-radius:16px;text-align:center;font-size:20px;margin:0 18px;cursor:pointer}.pv-recommend-p2-nav>span:hover{background-color:#333}.pv-recommend-p2-nav.pv-recommend-p2-nav-start>span:first-child{color:rgba(255,255,255,0.2);background-color:rgba(51,51,51,0.4)}.pv-recommend-p2-nav.pv-recommend-p2-nav-end>span:last-child{color:rgba(255,255,255,0.2);background-color:rgba(51,51,51,0.4)}.pv-recommend-p1-share{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.pv-recommend-p1-share>div{height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between}.pv-recommend-p1-share>div>div:first-child{color:#fff;font-size:16px;line-height:1;height:21.276%;max-height:40px;min-height:25px;display:inline-block}.pv-recommend-p1-share>div>div:last-child{-ms-flex-positive:1;flex-grow:1;background-size:auto 100%;background-repeat:no-repeat}.pv-recommend-click{max-width:155px}.pv-recommend-click>div:last-child{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between}.pv-recommend-link{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.pv-recommend-link>a{width:36px;height:36px;display:inline-block;border-radius:50%;overflow:hidden;background-size:100% 100%;background-repeat:no-repeat}.pv-recommend-link>a:nth-child(1){background-image:url(' + p + ")}.pv-recommend-link>a:nth-child(1):hover{background-image:url(" + f + ")}.pv-recommend-link>a:nth-child(2){background-image:url(" + v + ")}.pv-recommend-link>a:nth-child(2):hover{background-image:url(" + g + ")}.pv-recommend-link>a:nth-child(3){background-image:url(" + m + ")}.pv-recommend-link>a:nth-child(3):hover{background-image:url(" + A + ")}.pv-recommend-copy>span{width:100%;display:inline-block;font-size:14px;line-height:30px;border-radius:16px;border:1px solid #fff;text-align:center;cursor:pointer}.pv-recommend-copy>span:hover{border-color:#2196f3;color:#2196f3}.pv-recommend-copy>span:first-child{margin-bottom:16px}.pv-recommend-share .pv-recommend-p2-nav{position:relative;top:auto}.pv-recommend-share .pv-recommend-container{max-width:760px}.pv-recommend-share .pv-recommend-p1{margin-bottom:30px}.pv-recommend-share .pv-recommend-p1-cover{width:43.947%;min-height:auto}.pv-recommend-share .pv-recommend-p1-share{display:-ms-flexbox;display:flex;position:absolute;right:0;top:0;width:47.237%;height:100%}.pv-recommend-share .pv-recommend-p2{position:relative;width:100%;height:auto;display:block}.pv-recommend-share .pv-recommend-p2-title{height:19.27%;max-height:36px;min-height:28px}.pv-recommend-share .pv-recommend-list-part>div{-ms-flex-pack:start;justify-content:flex-start}.pv-recommend-share .pv-recommend-list-part>div>div{width:31.579%;margin-right:2.6315%}.pv-recommend-share .pv-recommend-list-part>div>div:last-child{margin-right:0}\n", ""]),
		t.exports = e
	},
	function(t, e) {
		t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAkCAMAAAA5HAOUAAABYlBMVEUAAAD///////////////////////////////////////////////////////////////////8zMzM0NDQ1NTU2NjY3Nzc4ODg5OTk6Ojo8PDw+Pj4/Pz9BQUFFRUVGRkZHR0dISEhKSkpMTExNTU1QUFBUVFRWVlZXV1dYWFhZWVlbW1tcXFxfX19hYWFjY2NkZGRlZWVmZmZra2tubm5vb29wcHBzc3N0dHR2dnZ3d3d4eHh7e3t9fX1+fn6BgYGDg4OFhYWGhoaJiYmMjIyPj4+RkZGSkpKTk5OWlpaXl5eYmJidnZ2fn5+goKChoaGjo6Oqqqqtra2urq6zs7O2tra8vLy9vb3Dw8PExMTJycnLy8vNzc3R0dHS0tLV1dXY2Nje3t7g4ODh4eHk5OTm5ubo6Ojp6enu7u7v7+/x8fHz8/P09PT19fX39/f4+Pj5+fn6+vr8/Pz9/f3+/v7///9NAEUVAAAAEnRSTlMAAwgVISJEWGiYpMTKzdfr+P4sxOL1AAABsklEQVQ4y5VUZ1fCQBA8QA1pBM6KCmLBXlCxYgMVG/beK6DYKN7/N5fAJYvwXpwv7M0ML3u7e4uQGTVOQVbcbkUWnDWoMmyc6CEMHpGzVTDVuUgZXHXlHjvvIX/g4e3A5JBIRUgOs8lFqsBl2OwSqQqJfZQH/HICHPnS7UDiV7gtA66g39QGkvoZxngHpqbVjQPcJcbY9wEojrpEQIVUF94HlKiaakFW99SEA1mQmdpTJ/jfkubCR4B0IiToUfLicHNhrLtedzUFekOR9eNHXRMQkvWok4odo3Ox+PZWfGUq2EDPw7omI6To0UOA0s3tXQOT0VtS2GtWT4NvuqYg5C5+PNmLi4jlUhP0d6RUXbfhIhmtCNh7Qs59NJj4JIZLYVfJRlSt5+ErqrnD30xQWPYUhSkczrz0aaZgzuBlVgkN4zNPqfTz9enu6kzoLM9oAVQ158UGXkFVTR26M5nwDeiQqdsHmtw/XdYkEU7OrCr6j/LkMqgGa3ByjCn045YNbbSyiVY8CaeQTfR74/xLSUovDsGJNl7HV6VHxP/vpVl7tRY3gMVtYnEzWd1yFLVVNuYv+MppUqOqBUgAAAAASUVORK5CYII="
	},
	function(t, e) {
		t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAABj1BMVEUAAAD/qgD/3wD/zgD/0QD/ywD/zgD/0QD9zgD/zgD/0AD9zgD9zwD+zwD+zwD+zgD9zgD+zgD+zgD+zwD9zgD+zwD9zgD9zgH9zgL9zgP9zwX9zwb9zwf9zwj9zwn90Az90A390A790A/90RD90RH90RT90hX90hv90xv90xz90x/91CH91Cb91Sb91Sn91zD91zP92Df92Dn92T792UD92kP920r93Er93VL93VP931v94F/94WX94Wb94Wf94mn943L95HX95Hb95Hf95Xr95oD954f96If97KH+5oH+54P+6In+6Ir+6Iv+6Y/+6pP+6pb+6pf+65j+65v+7J7+7KL+7aX+7qn+7qr+763+76/+8LP+8LT+8bj+8bn+8r/+8sD+8sL+88H+88L+88X+9Mf+9Mv+9cz+9c3+9c7+9tD+9tH+9tL+9tX+99X+99v++Nv++N3++N/++eL++eT++uX++ub++uj+++3+++/+/PD+/PT+/fb+/ff+/fj+/fn+/vv+/vz+/v3+/v7////7x6FLAAAAFnRSTlMAAwgVISJEWGhoaJikxMrN19fr+P7+4qZnJAAAAbpJREFUOMuVVGdXwjAUDUOGLRQKxIW4cAAq7o0T98YBIi7ce+Pe+eG2KS2J4jn1funLfbcneRMAAnoTy/EOB8+xJj3ICo3R4oQKnBaj5rfGYIM/YDP8kGgZF/wFF6MlNTorzAqrjtDY4R+wKyqtFf4Jq3wjQ9GLYerIpOOi3tyKHr3U63GMGjr2PYSG6UyI+TJSVBtC6L6UooyCyEIxSUGEBijKAkCOkyQaRA1KuUnOqQdm6q8xLEIhijQBVjL87X0jy9tXn5LoLXWajE731Es+FnCScYOv2YnNTY1PTC6sXnyI533JxwFeMoK3Avn1+nB9tB5pgvmDr8LxsFLy8cCRvth/htKYL/JtiN/dirTLoYigF0ePnrthx71obJRARcQrQbijgusy6IlgcaJYcfDyw0XkJVDCGzjBmvPCDM/JKcDYjNf5qmtbuoZm41udBQrNksksfEYZVJHJJMrSSGhQM1kWosD92Hu8ij+9ZIGJVlkRfHehAth2IRgzVKtkmu4OvYyW4WSEn9Aa1XRK+5a/xwKyp2bpgGrfzCB4so0L85+RUjWc6sZc3cJQt3pULjERObnyOjRT6/AbIpmmv06R2iIAAAAASUVORK5CYII="
	},
	function(t, e) {
		t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAA1VBMVEUAAAD///////////////////////////////////////////////////////////////////8zMzM4ODg5OTk6Ojo7Ozs8PDw9PT0+Pj5ERERFRUVGRkZJSUlPT09XV1dZWVlaWlptbW1zc3N3d3d/f3+CgoKDg4OFhYWKioqQkJCTk5OUlJSVlZWYmJipqamurq6ysrK0tLS2trbAwMDFxcXPz8/R0dHV1dXZ2dnh4eHj4+Pn5+fo6Ojp6enq6urr6+vs7Ozy8vL19fX39/f9/f3////lFisMAAAAEnRSTlMAAwgVISJEWGiYpMTKzdfr+P4sxOL1AAABSklEQVQ4y42U6VbCMBCF01LovsW27igqLrjgioJasWre/5EEjpnJtPSY+yvJfOfkZpYwpshyvDBOkjj0HIutlWH7qQClvm00mV4kaop6NcR0U9FQ6poq0wnEWgUdhYlEiyKgzEC0KpA3unj2eX24XRxcfeCJ+/cu9PywyVcq7tD96o0GGrrnoFu0tcyXDdu3HKGNVzi2F5APuwuu6ByOfca66GhfhXbRlcUc2HxxogoCDvNgXVKohIDHwv+hkMWwnlBoAoGYJbAeUmgIgQShKqdQXiEE1415TWO8DowP6tAAjcsUTHlDU0iBTOaoCY0gmbIsfX5cex3vQ1lkgbObb/K8rZ/LDAosW+VFiDMVOl3YxFbBppvvILM3J02H7VseIXTyTtoXBuGpUK/LHskgyJGaPRPN6EhpDafemOt9GHpfj+YntlS35Tv8BUlIxT5p4JoxAAAAAElFTkSuQmCC"
	},
	function(t, e) {
		t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAA6lBMVEUAAAAAqv8gn/8knvMfovclnvAiofAjovMin/AiovAjofIioPEjoPEjoPEjoPAioPAioPEjofAjoPEjoPAjofEjoPAkoPAro/AtpPAwpfAxpvA2qPE3qfE4qfE5qfE6qvE7qvE8qvFArPFCrfFLsfJQs/NUtfNWtfNWtvNhuvRmvPRxwfVzwvV1w/V5xfV/x/aRz/eV0feW0feX0vea0/eh1vim2Pio2fip2vms2/mt2/m13/m54PnA4/rU7PzV7fzX7fzg8fzn9P3p9f3r9v3s9v3z+f3z+v71+v73+/74/P75/P7+/v7///8UFXUNAAAAFXRSTlMAAwgVISJEWGhomKTEys3X1+v4/v42vzSYAAABVElEQVQ4y42UaVPCMBCG01LoXWghHngVwfvAAy9UFBVtq/n/f0dgzG62hbHvpyT7zOxmL8YUGZYbhFEUBq5lsIXSTK/JQU3P1IpMrc5zqtdyiO60eEEtR1eZis8Xyq8oTIMvUQMo3edL5UuPDr5tXL58Jq9X2/ji/P0LYz5JxFzJGUY//6OGfz/9EVLnmIlZvky4dlJgxPcuPJtTyIPbjVB0C88eY1WsxZsKfWCFDGbDZU0QrYPBYi6cYwrFYHBZ8D8UsBDOhxQ6AEPIIjgPKTQEQ4RQO6VQ2kYI3PVFTn10B4GP8tAIA5cp6ImCepACmcxBERpAMmVZxuKJIg9iDGWRBc4uVsn3vlauMyiwbJU9zu9U6H4aJrYKNt3mBJn3LdJ02L47zwg9xqR9YRCOEtVddkwGQY5Ud5+oS0eq1HCWG/NyC6Pc6im5xGaq2nId2mQd/gKb+Jf4oTZbhAAAAABJRU5ErkJggg=="
	},
	function(t, e) {
		t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAMAAAApB0NrAAABwlBMVEUAAAD///////////////////////////////////////////////////////////////////////8zMzM0NDQ1NTU2NjY3Nzc4ODg5OTk6Ojo7Ozs8PDw9PT0+Pj5BQUFCQkJGRkZHR0dJSUlKSkpMTExNTU1OTk5QUFBRUVFSUlJVVVVWVlZYWFhZWVlaWlpcXFxdXV1eXl5fX19iYmJkZGRlZWVnZ2doaGhsbGxubm5xcXF1dXV2dnZ4eHh5eXl6enp7e3t8fHx9fX1+fn5/f3+BgYGCgoKFhYWGhoaJiYmKioqLi4uNjY2Ojo6QkJCRkZGSkpKTk5OUlJSVlZWbm5ufn5+goKCkpKSmpqanp6epqamqqqqrq6utra2vr6+wsLCysrKzs7O0tLS4uLi5ubm7u7u+vr6/v7/AwMDCwsLDw8PExMTFxcXIyMjJycnLy8vOzs7Pz8/R0dHT09PU1NTW1tbX19fY2NjZ2dnb29vc3Nzg4ODh4eHi4uLj4+Pl5eXn5+fp6enq6urr6+vs7Ozt7e3u7u7v7+/x8fHy8vL09PT19fX39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///88aylJAAAAE3RSTlMAAwcWJj5CfIWGuNDe5+/y9fb8Bgg0JgAAAhpJREFUOMuNlGlbUlEURg+izAr63jAFy8rMRi2bLBvNyswm0ywbbLLJykbLTJRGNUWR9X/7cBEhsIf19a7nnn322e82ZhWHy+MLBKuCAZ/H5TCFcHrLWaXc68wzStwhcgm5S3KVUj/5+EuzlbIKClFRlqVUUpjKjFRawVpUpI8r8bM2frtwd/6Xz83R8NbODwBuY4xxhvKdm7IkqWsRQk5jjLfACcufFhZG26UTgNcYR1Z3Jy82VbdMAyRG3yW4b+kJlDuMK2MkLocl6RLAXWnTe7p1BHAZz4ryba8kSacgGf8zPdG6mzHVAx7jSytTjbai4w/aahXu45HmZhUBfCZgKz+2KQdr5mn1/Fc1AAETBGCxNVfR+vnkBA91DAiaKgCuSVJDz/DY1OTbO0fD0oEkEGsfBars/8SqpS2Pl2EpCRA7KG3sS6YrDdr19Egtv0gO7LSsfW+ARKukrrQTsO+1XZE4nJUk1U4AI5Ksn7bjs/sTVgeMS1LvOl0FYpI0bjseu8871AuD1r14x3npDPBCUt287bjs97qgNrjVCLclDULqkKTudEIc9rvHo9YrYtHOnqh0OEHqiqSmOdvxrszPSM2GYb6c3hzZM7DE93ZJu+LpCDkzc/ixWfuHplIw8/xcrRS5nkjf3J01z6mXJ+tVU18nyWq58fufec7kIjX5bLC/f+j1bH4uispXUTktKu9F7Y2i9s//9thfiKWQvkgEnRwAAAAASUVORK5CYII="
	},
	function(t, e) {
		t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAMAAAApB0NrAAACIlBMVEUAAAD/AADbACToFy7rFC/qGS3oFy7mFy3oFy3oFy7oFy7nGCzoFy3oFy3oFy3oFi3nFy3nFy3nFy3nFy3nFy3nGC7nGS7nGS/nGi/nGjDnGzDnGzHnHDHnHDLnHTLnHTPnHjPnHzTnIDXoIjfoIzjoJTroJjvoJzvoKD3pKj7pKz/pLEDpLUHpLkLpL0LpL0PpMEPpMkXqNEfqNknqNkrqN0rqOErqOEvqOUzqOkzrPlDrP1HrQFLrQlPrQ1TrRFXrRFbrRVfrR1jrSVrsS1vsTV7sTl/tUWLtUmLtU2TtVGXtWGjtWWntWmntW2ruW2vuXW3uX27uYG/uY3LuZHPuZnTvZ3XvbHrvbnvwcH3wcX7wdIHwdoLwdoPwd4TweITweIXxeofxe4fxfYrxforxg47yg4/yhI/yiJPyiJTzj5rzkJrzkZvzk53zlJ70l6H0mKL0mqP0m6X0nKX1oKn1oar1pK31pq71p7D1qLD1qLH1qrL2qrL2rLP2rLT2rbX2r7f2sLf2s7r3s7r3t773u8H4vcP4wsj4w8j4xsv5x8z5yc75zNH5ztL5ztP6z9T60NT60tb609f61Nj61tr619v729/73OD73eH73uH74OP74eT74uX85Ob85ef85+r86Or97e797e/97u/97vD98vP98/T99PX99fb+9fb+9vf+9/f+9/j++Pn++vr++vv++/v++/z+/Pz+/f3+/v7///+SmA9gAAAAFHRSTlMAAwcWJj5CfHyFhrjQ3ufv8vX2/FxpskcAAAIwSURBVDjLnZRXVxNRFIVvCumV7KixQECwayQxir2LvSuKvTfQKNg7KLaoYG/YJREFopn9/3y4k5A4wZXl9zrfmnvuuWcfIQbQmax2p8fncdqtJp0ohMHmwgAum0Fj6M1e5OM16/MVowNaHMZcpcSNQrhLcpRSFKY0KxndGAy3epzegcFxyMIt2i9zOxP97y4sAgCLEEIYvFpnP9MKqbSMBLwGIYStwAn+ecGK5a0KbwCwCaHL6e7006/6OmoAoKxuSRDb0twIuHTClDXKT6ZI8hQA7CA/LkYzbwMwCWtGmfyIJMlrwLDQ6Jra+FPM5ycAVmFXlfAbqfBmfXsPU0exlVXVTAKwC6dUJmYUlfSYDf2VM9gFwCk8AIBR8XyFvZWBWtSzDYBH+AAAjSTZFdu0IBxduvPWL/J+AEC0rQ6AT/4n0ke+3zIEGBEAgMg98uuxoWqlHllPjOwYj8DB52nl4TIAwTjJFtVxynu95PcQcJ4k+WMmgDUklQnSscv+pHgFmKOQyonfbAIwjSRnS8cq+/yCjcAepWHq5bMKLwFYS7K7Qjom+V7NbAf2vQV2kdwL+O+SPKMmRCfffUpCWYlI4mIsQd4pA5pIvq6Sji0zP6t7v23GrKsfkk8ODMekVpLPQmqEDNk5XNjJB9vDfmDsunM9ZPJ4uXpzc848+1dd/8yfX7pJKo8PjftrnrO58EfX7z58pGFFtTYXReWrqJwWlXch9BbN3rDo/2P//GuP/QGYs99zr4X0sQAAAABJRU5ErkJggg=="
	},
	function(t, e) {
		var i, n, r = t.exports = {};
		function a() {
			throw new Error("setTimeout has not been defined")
		}
		function o() {
			throw new Error("clearTimeout has not been defined")
		}
		function s(e) {
			if (i === setTimeout) return setTimeout(e, 0);
			if ((i === a || !i) && setTimeout) return i = setTimeout,
			setTimeout(e, 0);
			try {
				return i(e, 0)
			} catch(t) {
				try {
					return i.call(null, e, 0)
				} catch(t) {
					return i.call(this, e, 0)
				}
			}
		} !
		function() {
			try {
				i = "function" == typeof setTimeout ? setTimeout: a
			} catch(t) {
				i = a
			}
			try {
				n = "function" == typeof clearTimeout ? clearTimeout: o
			} catch(t) {
				n = o
			}
		} ();
		var l, c = [],
		u = !1,
		d = -1;
		function h() {
			u && l && (u = !1, l.length ? c = l.concat(c) : d = -1, c.length && p())
		}
		function p() {
			if (!u) {
				var t = s(h);
				u = !0;
				for (var e = c.length; e;) {
					for (l = c, c = []; ++d < e;) l && l[d].run();
					d = -1,
					e = c.length
				}
				l = null,
				u = !1,
				function(e) {
					if (n === clearTimeout) return clearTimeout(e);
					if ((n === o || !n) && clearTimeout) return n = clearTimeout,
					clearTimeout(e);
					try {
						n(e)
					} catch(t) {
						try {
							return n.call(null, e)
						} catch(t) {
							return n.call(this, e)
						}
					}
				} (t)
			}
		}
		function f(t, e) {
			this.fun = t,
			this.array = e
		}
		function v() {}
		r.nextTick = function(t) {
			var e = new Array(arguments.length - 1);
			if (1 < arguments.length) for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
			c.push(new f(t, e)),
			1 !== c.length || u || s(p)
		},
		f.prototype.run = function() {
			this.fun.apply(null, this.array)
		},
		r.title = "browser",
		r.browser = !0,
		r.env = {},
		r.argv = [],
		r.version = "",
		r.versions = {},
		r.on = v,
		r.addListener = v,
		r.once = v,
		r.off = v,
		r.removeListener = v,
		r.removeAllListeners = v,
		r.emit = v,
		r.prependListener = v,
		r.prependOnceListener = v,
		r.listeners = function(t) {
			return []
		},
		r.binding = function(t) {
			throw new Error("process.binding is not supported")
		},
		r.cwd = function() {
			return "/"
		},
		r.chdir = function(t) {
			throw new Error("process.chdir is not supported")
		},
		r.umask = function() {
			return 0
		}
	},
	function(e, t) { (function(t) {
			e.exports = t
		}).call(this, {})
	},
	function(t, e, k) {
		"use strict";
		k.r(e),
		k.d(e, "polyvPlayer",
		function() {
			return Yi
		});
		var i = {};
		k.r(i),
		k.d(i, "createDom",
		function() {
			return Y
		}),
		k.d(i, "getImageSize",
		function() {
			return W
		}),
		k.d(i, "css",
		function() {
			return K
		}),
		k.d(i, "calculateNatural",
		function() {
			return Q
		}),
		k.d(i, "removeElement",
		function() {
			return X
		}),
		k.d(i, "isUndefined",
		function() {
			return J
		}),
		k.d(i, "hasValue",
		function() {
			return Z
		});
		k(162),
		k(185);
		var n = k(14),
		h = k.n(n),
		r = k(8),
		m = k.n(r),
		c = (k(210), k(10)),
		v = k.n(c),
		a = k(13),
		p = k.n(a),
		o = k(7),
		f = k.n(o),
		d = k(3),
		s = k(50),
		l = k.n(s),
		u = k(6),
		A = k.n(u),
		g = k(12),
		E = k.n(g),
		y = k(4),
		b = k.n(y),
		w = k(2),
		x = k.n(w),
		T = k(41),
		S = k.n(T);
		var _ = function(e) {
			if ("object" === h()(e) && e) {
				var i, n, r, a, t = (e.type || "GET").toLocaleUpperCase(),
				o = e.aysnc || !0,
				s = e.dataType || "string",
				l = null,
				c = e.url;
				if (e.data) {
					for (var u in l = "",
					e.data) l = l + "&" + u + "=" + encodeURIComponent(e.data[u]);
					l = l.substring(1)
				}
				if ("GET" === t && l && (c = -1 !== c.indexOf("?") ? c + "&" + l: c + "?" + l), l = "GET" === t ? null: l, "jsonp" === s) return i = {
					url: c,
					success: e.success,
					error: e.error
				},
				n = f.a.getElementsByTagName("head")[0] || f.a.getElementsByTagName("html")[0],
				r = "jsonp_" + Math.floor(1e7 * Math.random()) + (new Date).getTime(),
				(a = f.a.createElement("script")).src = i.url + "&callback=" + r,
				n.appendChild(a),
				a.onerror = function(t) {
					i.error && i.error(t),
					n.removeChild(a)
				},
				void(p.a[r] = function(t) {
					i.success && i.success(t),
					n.removeChild(a),
					delete p.a[r]
				});
				var d = new XMLHttpRequest;
				d.open(t, c, o),
				"POST" === t && d.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
				d.send(l),
				d.onload = function() {
					var t = d.responseText;
					if (4 === d.readyState && 200 === d.status) {
						switch (s) {
						case "string":
							t = d.responseText;
							break;
						case "json":
							t = JSON.parse(d.responseText);
							break;
						case "xml":
							t = d.responseXML;
							break;
						default:
							t = d.responseText
						}
						"function" == typeof e.success && e.success(t)
					} else "function" == typeof e.error && e.error(d)
				},
				d.onerror = function() {
					"function" == typeof e.error && e.error(d)
				}
			}
		},
		C = k(11),
		L = k.n(C),
		R = {
			save: {
				zh_CN: "保存",
				en: "save"
			},
			quality: {
				zh_CN: ["自动", "流畅", "高清", "超清"],
				en: ["Auto", "360P", "480P", "720P"]
			},
			menu: {
				zh_CN: "目录",
				en: "Menu"
			},
			player: {
				zh_CN: "播放器",
				en: "Player"
			},
			mode: {
				zh_CN: "模式",
				en: "PlayMode"
			},
			audioMode: {
				zh_CN: "音频",
				en: "Audio"
			},
			videoMode: {
				zh_CN: "视频",
				en: "Video"
			},
			audioPlaying: {
				zh_CN: "音频模式播放中",
				en: "Playing in audio mode"
			},
			toVideo: {
				zh_CN: "视频模式",
				en: "Video"
			},
			subtitle: {
				zh_CN: "字幕",
				en: "Subtitles"
			},
			hide: {
				zh_CN: "隐藏",
				en: "Hide"
			},
			doubleSubtitle: {
				zh_CN: "双语",
				en: "Bilingual"
			},
			danmu: {
				zh_CN: "弹幕",
				en: "Danmu"
			},
			fullscreen: {
				zh_CN: "全屏",
				en: "Full screen"
			},
			exitFullscreen: {
				zh_CN: "退出全屏",
				en: "Exit full screen"
			},
			fullscreenPage: {
				zh_CN: "网页全屏",
				en: "web full screen"
			},
			exitFullscreenPage: {
				zh_CN: "退出网页全屏",
				en: "Exit web full screen"
			},
			speed: {
				zh_CN: "速度",
				en: "Speed"
			},
			replay: {
				zh_CN: "从头播放",
				en: "Replay"
			},
			lastPlay: {
				zh_CN: "您上次看到",
				en: "Last played to"
			},
			replaying: {
				zh_CN: "正在自动续播",
				en: "Automatically continuing"
			},
			skip: {
				zh_CN: "跳过",
				en: "Skip"
			},
			second: {
				zh_CN: "秒",
				en: "Seconds"
			},
			adDes: {
				zh_CN: "广告也精彩",
				en: "Ad is also good"
			},
			question: {
				zh_CN: "课堂问答",
				en: "Question"
			},
			radio: {
				zh_CN: "单选题",
				en: "Multiple choice"
			},
			checkbox: {
				zh_CN: "多选题",
				en: "Multiple answers"
			},
			submit: {
				zh_CN: "提交",
				en: "Submit"
			},
			answerWrong: {
				zh_CN: "回答错误",
				en: "Wrong"
			},
			answerRight: {
				zh_CN: "回答正确",
				en: "Right"
			},
			close: {
				zh_CN: "关闭",
				en: "Close"
			},
			watchAgain: {
				zh_CN: "再看一次",
				en: "Watch again"
			},
			passwordTip: {
				zh_CN: "视频已加密，请输入密码",
				en: "Input access code please"
			},
			passwordError: {
				zh_CN: "密码错误!",
				en: "The password you entered is incorrect!"
			},
			networkError: {
				zh_CN: "网络错误，请稍后重试!",
				en: "Network error, please try again later!"
			},
			timeError: {
				zh_CN: "系统时间不正常，请调整后重试!",
				en: "The system time is abnormal. Please adjust and try again!"
			},
			inputPassword: {
				zh_CN: "请输入密码！",
				en: "Please enter password!"
			},
			ok: {
				zh_CN: "确定",
				en: "OK"
			},
			visitorSubmit: {
				zh_CN: "感谢您的提交！",
				en: "Thank you for your submission!"
			},
			visitorRequire: {
				zh_CN: "请把资料正确填写完整。",
				en: "Please complete the information correctly."
			},
			pptText: {
				zh_CN: "文字列表",
				en: "Contents"
			},
			pptThumbnails: {
				zh_CN: "图片列表",
				en: "Thumbnails"
			},
			pip: {
				zh_CN: "画中画",
				en: "Picture In Picture"
			},
			notAllowPip: {
				zh_CN: "当前不允许进入画中画",
				en: "Not allowed to use Picture-in-Picture currently"
			},
			warnMessage: {
				zh_CN: {
					loadError: "视频暂时无法播放，请稍后刷新重试",
					lessPlaysafe: "playsafe required",
					qualityError: "该清晰度播放错误,请切换其他清晰度",
					notObject: "param is not an Object",
					systemError: "视频暂时无法播放，请稍后刷新重试",
					videoPlaying: "视频播放中",
					videoStatus_normal: "正常",
					videoStatus_notThrough: "#005 当前视频无法播放，请向管理员反馈",
					videoStatus_deleted: "#004 当前视频无法播放，请向管理员反馈",
					videoStatus_transcoding: "#010 视频暂时无法播放，请稍后刷新重试",
					videoStatus_notAudit: "#009 视频暂时无法播放，请稍后刷新重试",
					videoStatus_abnormalVideo: "#048 视频状态异常，暂时无法播放",
					videoStatus_blocked: "#10000 该视频已被禁止播放，请联系管理员",
					domainError: "当前视频无法播放，请向管理员反馈",
					recordError: "视频禁止在小窗口播放，请关闭当前标签重新打开页面或重启浏览器继续播放！",
					timeoutflowError: "当前视频无法播放，请向管理员反馈",
					outflowError: "当前视频无法播放，请向管理员反馈",
					disableOpera: "加密视频不支持在该浏览器上播放，请更换其它浏览器观看"
				},
				en: {
					loadError: "The video is temporarily not available, please refresh later",
					lessPlaysafe: "playsafe required",
					qualityError: "该清晰度播放错误,请切换其他清晰度",
					notObject: "param is not an Object",
					systemError: "The video is temporarily not available, please refresh later",
					videoPlaying: "视频播放中",
					videoStatus_normal: "正常",
					videoStatus_notThrough: "#005 The video is not available, please contact the Administrators",
					videoStatus_deleted: "#004 The video is not available, please contact the Administrators",
					videoStatus_transcoding: "#010 The video is temporarily not available, please refresh later",
					videoStatus_notAudit: "#009 The video is temporarily not available, please refresh later",
					videoStatus_abnormalVideo: "#048 The video's state is abnormal, please try later",
					videoStatus_blocked: "#10000 The video is blocked, please contact administrator",
					domainError: "The video is not available, please contact the Administrators",
					recordError: "The video can't be played in separate window，please reopen the page or relaunch your browser",
					timeoutflowError: "The video is not available, please contact the Administrators",
					outflowError: "The video is not available, please contact the Administrators",
					disableOpera: "Encrypted video does not support playing on this browser, please switch other browsers to watch"
				}
			},
			viewLargerImage: {
				zh_CN: "点击图片可查看大图",
				en: "Click to view larger image"
			},
			replayTail: {
				zh_CN: "重播",
				en: "Replay"
			},
			share: {
				zh_CN: "分享",
				en: "Share"
			},
			hottestList: {
				zh_CN: "最热视频",
				en: "Hot Videos"
			},
			relateList: {
				zh_CN: "相关视频",
				en: "Related Videos"
			},
			newestList: {
				zh_CN: "最新视频",
				en: "What's New"
			},
			recommendList: {
				zh_CN: "编辑推荐",
				en: "Editor's Choice"
			},
			customList: {
				zh_CN: "推荐视频",
				en: "Featured Videos"
			},
			notSupportFullscreen: {
				zh_CN: "当前浏览器不支持全屏播放",
				en: "Video does not support full screen mode due to browser limitations"
			},
			videoNotSupportFullscreen: {
				zh_CN: "当前视频不支持全屏播放",
				en: "Video does not support full screen mode"
			},
			line: {
				zh_CN: "线路",
				en: "Line"
			}
		},
		D = {
			videoStatus_notThrough: "#005",
			videoStatus_deleted: "#004",
			videoStatus_transcoding: "#010",
			videoStatus_notAudit: "#009",
			videoStatus_abnormalVideo: "#048",
			videoStatus_blocked: "#10000"
		},
		I = k(36),
		M = k.n(I),
		P = k(82),
		O = k.n(P),
		B = k(52),
		F = k.n(B),
		N = k(53),
		U = k.n(N),
		q = k(54),
		j = k.n(q),
		z = k(26),
		V = k.n(z),
		H = k(0),
		G = k.n(H);
		function Y(t) {
			var e = document.createElement("div"),
			i = t.trim();
			e.insertAdjacentHTML("afterbegin", i);
			var n = e.lastChild;
			return e.textContent = "",
			n
		}
		function W(n) {
			return new E.a(function(t, e) {
				var i = new Image;
				i.onload = function() {
					t({
						naturalWidth: i.naturalWidth,
						naturalHeight: i.naturalHeight
					})
				},
				i.onerror = function(t) {
					e(t)
				},
				i.src = n
			})
		}
		function K(t, e) {
			for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.style.setProperty(i, e[i])
		}
		function Q(t, e, i) {
			var n = t,
			r = e;
			return i < t / e ? n = e * i: r = t / i,
			{
				videoW: n,
				videoH: r,
				blackW: (t - n) / 2,
				blackH: (e - r) / 2
			}
		}
		var X = function(t) {
			if (t) {
				var e = t.parentNode;
				e && e.removeChild(t)
			}
		},
		J = function(t) {
			return void 0 === t
		},
		Z = function(t) {
			return !! t || 0 === t
		};
		function $(e, t) {
			var i = L()(e);
			if (j.a) {
				var n = j()(e);
				t && (n = n.filter(function(t) {
					return U()(e, t).enumerable
				})),
				i.push.apply(i, n)
			}
			return i
		}
		var tt = function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var i = null != arguments[t] ? arguments[t] : {};
				t % 2 ? $(Object(i), !0).forEach(function(t) {
					G()(e, t, i[t])
				}) : F.a ? O()(e, F()(i)) : $(Object(i)).forEach(function(t) {
					M()(e, t, U()(i, t))
				})
			}
			return e
		} ({
			isObject: function(t) {
				return !! t && "object" === h()(t)
			},
			getTime: function(t, e) {
				var i = !(1 < arguments.length && void 0 !== e) || e;
				if (!t) return "00:00";
				var n = Math.floor(t % 60);
				n < 10 && (n = "0" + n);
				var r, a = Math.floor(t / 60);
				return i && 60 <= a && (r = Math.floor(a / 60), a = Math.floor(a % 60), r < 10 && (r = "0" + r)),
				a < 10 && (a = "0" + a),
				(r ? "".concat(r, ":") : "") + a + ":" + n
			},
			conversionBaseUrl: function(t) {
				return t && "//" !== t.substring(0, 2) && "http" !== t.substring(0, 4) ? p.a.location.origin + t: t
			},
			randomString: function(t) {
				for (var e = "",
				i = 0; i < t; i++) e += String.fromCharCode(122 - Math.floor(26 * Math.random()));
				return e
			},
			getHost: function(t) {
				var e = 0;
				return - 1 !== t.indexOf("http:") ? e = 7 : -1 !== t.indexOf("https:") && (e = 8),
				t.substring(e).split("/")[0]
			},
			matchDomain: function(t, e, i) {
				var n, r = f.a.domain,
				a = !e.some(function(t) {
					return - 1 !== r.indexOf(t)
				}),
				o = t.some(function(t) {
					return - 1 !== r.indexOf(t)
				});
				switch (i) {
				case 1:
					n = a;
					break;
				case 2:
					n = o;
					break;
				default:
					n = a && o
				}
				return n
			},
			checkDomain: function(t) {
				var e = t.enable_host,
				i = t.disable_host,
				n = t.setting_type,
				r = e.split(",").map(this.getHost).filter(function(t) {
					return !! t.trim()
				});
				r.push("polyv.net", "polyv.cn");
				var a = i.split(",").map(this.getHost).filter(function(t) {
					return !! t.trim()
				});
				return this.matchDomain(r, a, n)
			},
			supportStorage: p.a.localStorage,
			storageTest: function(t) {
				if (!t) return ! 1;
				try {
					return t.setItem("pvkey", "value"),
					t.removeItem("pvkey"),
					!0
				} catch(t) {
					return ! 1
				}
			},
			getStorage: function(t) {
				if (!tt.supportStorage) return {};
				var e = JSON.parse(p.a.localStorage.getItem("polyvPlayerStorage")) || {};
				return t ? e[t] : e
			},
			deleteStorage: function(t) {
				if (tt.supportStorage) {
					var e = tt.getStorage();
					delete e[t],
					tt.setStorage(e)
				}
			},
			setStorage: function(t, e) {
				if (tt.supportStorage) if (e || !tt.isObject(t)) {
					var i = tt.getStorage();
					i[t] = e,
					p.a.localStorage.setItem("polyvPlayerStorage", V()(i))
				} else p.a.localStorage.setItem("polyvPlayerStorage", V()(t))
			},
			isVid: function(t) {
				return "string" == typeof t && 34 === t.length && "_".concat(t[0]) === t.slice( - 2)
			},
			isPreviewVid: function(t) {
				return "string" == typeof t && 35 === t.length
			},
			decodePreviewVid: function(t) {
				for (var e = t.substr(1), i = "", n = 0; n < e.length; n++) {
					var r = e.charAt(n),
					a = "lpmkenjibhuvgycftxdrzsoawq0126783459".indexOf(r);
					i += -1 === a ? r: "abcdofghijklnmepqrstuvwxyz0123456789".charAt(a)
				}
				return i
			},
			enCodePreviewVid: function(t) {
				for (var e = "p",
				i = 0; i < t.length; i++) {
					var n = t[i],
					r = "abcdofghijklnmepqrstuvwxyz0123456789".indexOf(n);
					e += -1 === r ? n: "lpmkenjibhuvgycftxdrzsoawq0126783459" [r]
				}
				return e
			},
			getPreviewHlsUrl: function(t, e) {
				var i = t.substring(0, 32);
				return e.replace(i, "p_" + i)
			},
			stringToSeconds: function(t) {
				return + t.split(":").reverse().reduce(function(t, e, i) {
					return e * Math.pow(60, i) + t
				},
				0).toFixed(3)
			},
			parseColor: function(t) {
				for (var e = ( + t).toString(16), i = 6 - e.length, n = 0; n < i; n++) e = "0" + e;
				return "#" + e
			},
			getUrlHost: function(t) {
				if (!t) return "";
				return /^http(s)?:\/\/(.*?)\//.exec(t)[2]
			},
			isNumber: function(t) {
				return "number" == typeof t && t == t
			},
			isArray: function(t) {
				return t instanceof Array
			},
			parseString: function(t) {
				return t && "number" != typeof t ? t.replace(/</g, "&lt;").replace(/>/g, "&gt;").trim() : t
			},
			countFontWidth: function(t, e) {
				var i = f.a.createElement("div"),
				n = f.a.getElementsByTagName("body")[0];
				i.textContent = t,
				i.style.cssText = "position:absolute;top:-1000px;white-space: nowrap;font-size:".concat(e, "px;"),
				i.classList.add("pv-player-font"),
				n.appendChild(i);
				var r = i.clientWidth;
				return n.removeChild(i),
				r
			},
			addQuery: function(t, i) {
				var e = L()(i).reduce(function(t, e) {
					return "".concat(t, "&").concat(e, "=").concat(i[e])
				},
				"").substring(1);
				return t = -1 !== t.indexOf("?") ? t + "&" + e: t + "?" + e
			},
			copyText: function(t) {
				var e = f.a.createElement("pre");
				e.innerText = t,
				e.cssText = "position:absolute;opacity:0";
				var i = f.a.getElementsByTagName("body")[0];
				i.appendChild(e);
				try {
					return p.a.getSelection().selectAllChildren(e),
					f.a.execCommand("Copy"),
					i.removeChild(e),
					!0
				} catch(t) {
					return console.warn(t),
					!1
				}
			},
			removeChild: function(t) {
				t && t.parentNode && t.parentNode.removeChild(t)
			},
			isCuplayerUrl: function(t) {
				return !! t && ( - 1 !== t.indexOf("cuplayer") || void 0)
			},
			getLocation: function(t) {
				var e = t.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
				return e && {
					href: t,
					protocol: e[1],
					host: e[2],
					hostname: e[3],
					port: e[4],
					pathname: e[5],
					search: e[6],
					hash: e[7]
				}
			},
			getLanguage: function() {
				try {
					return navigator.language || "zh-CN"
				} catch(t) {
					return "zh-CN"
				}
			},
			protocol: "http:" === location.protocol ? "http:": "https:"
		},
		i),
		et = tt,
		it = k(5),
		nt = ["top", "bottom", "left", "right"];
		var rt = S()("createVideo"),
		at = function() {
			function e(t) {
				b()(this, e),
				this.params = t,
				this.width = "number" == typeof t.width ? t.width + "px": t.width,
				this.height = "number" == typeof t.height ? t.height + "px": t.height,
				this.className = t.elementClass.video
			}
			return x()(e, [{
				key: "init",
				value: function() {
					var t = this.params,
					e = t.autoplay,
					i = t.mutedAutoplay,
					n = t.screenshot,
					r = t.allowGetScreenshotData,
					a = t.loop,
					o = !1;
					e && !it.a.isIE11 && i && (o = !0);
					var s = this[rt](o);
					return (n || r) && s.dom[0].setAttribute("crossOrigin", "Anonymous"),
					s.attr("preload", "preload"),
					e && s.attr("autoplay", "autoplay"),
					a && s.attr("loop", "loop"),
					s
				}
			},
			{
				key: rt,
				value: function(t) {
					var e = 0 < arguments.length && void 0 !== t && t;
					return Object(d.a)("<video ".concat(e ? "muted ": "", "/>")).addClass(this.className)
				}
			}]),
			e
		} ();
		var ot, st, lt = function(i) {
			return {
				wrap: function() {
					return Object(d.a)('<div><div style="opacity: '.concat(i.cover_opacity / 100, '"></div></div>')).addClass(i.elementClass.cover.defaultClass)
				},
				playBtn: function() {
					this.btn = Object(d.a)("<span />").addClass(i.elementClass.cover.play);
					var t = i.skinConfig.playBtnImg;
					return t ? this.btn.css({
						backgroundImage: "url(" + t + ")"
					}).addClass(i.elementClass.cover.customIcon) : this.btn.addClass("pv-iconfont"),
					i.autoplay || this.show(),
					this.btn
				},
				show: function() {
					this.btn.css("display", "block")
				},
				hide: function() {
					this.btn.css("display", "none")
				},
				setReplay: function(t) {
					if (0 < arguments.length && void 0 !== t && t) {
						this.btn.removeClass(i.elementClass.cover.replay);
						var e = i.skinConfig.playBtnImg;
						e && this.btn.css({
							backgroundImage: "url(" + e + ")"
						}).addClass(i.elementClass.cover.customIcon)
					} else this.btn.css("background-image", "").removeClass(i.elementClass.cover.customIcon).addClass(i.elementClass.cover.replay)
				}
			}
		}; (st = ot = ot || {}).waiting = "videoWating",
		st.seeked = "videoSeeked",
		st.seeking = "videoSeeking",
		st.timeupdate = "videoTimeupdate",
		st.loadstart = "videoLoadstart",
		st.loadedmetadata = "videoLoadedmetadata",
		st.volumechange = "videoVolumechange",
		st.canplay = "videoCanplay",
		st.pause = "videoPause",
		st.play = "videoPlay",
		st.playing = "videoPlaying",
		st.ended = "videoEnded",
		st.error = "videoError",
		st.fullscreen = "fullscreen",
		st.exitFullscreen = "exitFullscreen",
		st.playStart = "playStart",
		st.changeLevel = "changeLevel",
		st.changeRate = "changeRate",
		st.ratechange = "ratechange",
		st.controlRender = "controlRender",
		st.changeVideo = "changeVideo",
		st.videoJsonUpdate = "videoJsonUpdate",
		st.onChangeMode = "onChangeMode",
		st.resize = "resize",
		st.serverError = "serverError",
		st.changeVideoDestroy = "changeVideoDestroy",
		st.destroy = "destroy",
		st.questionSkip = "questionSkip",
		st.answerResult = "answerResult",
		st.questionInit = "questionInit",
		st.tailStart = "tailStart",
		st.tailEnded = "tailEnded",
		st.tailADEnded = "tailADEnded",
		st.renderSubtitleControl = "renderSubtitleControl",
		st.renderLineControl = "renderLineControl",
		st.linechange = "ratechange";
		var ct, ut = ot,
		dt = k(1),
		ht = k(16),
		pt = k.n(ht),
		ft = (ct = {
			width: "100%",
			autoplay: void 0,
			statistics: {},
			contextmenu: 1,
			flash: 0,
			showHd: "on",
			hideRepeat: !1,
			code: "",
			volume: .75,
			loop: !1,
			adSkip: void 0,
			skin: {},
			teaserSkip: !1,
			speed: [2, 1.5, 1.2, 1, .5],
			ignoreIE: !1
		},
		G()(ct, "statistics", {}), G()(ct, "hideControlBar", !1), G()(ct, "ban_ui", "off"), G()(ct, "logo", {}), G()(ct, "logoConfig", void 0), G()(ct, "watchStartTime", !1), G()(ct, "watchEndTime", !1), G()(ct, "hideSwitchPlayer", !1), G()(ct, "beta", !1), G()(ct, "debug", !1), G()(ct, "audioMode", !0), G()(ct, "videoMode", !0), G()(ct, "priorityMode", "video"), G()(ct, "ban_seek_by_limit_time", "off"), G()(ct, "ban_seek", "off"), G()(ct, "screenshot", !1), G()(ct, "flashvars", {}), G()(ct, "ban_barrage_btn", "off"), G()(ct, "skipErrorTs", !0), G()(ct, "loading_bg_img", !1), G()(ct, "ban_record_interaction_right_answer", "off"), G()(ct, "marqueeCheck", !1), G()(ct, "start", void 0), G()(ct, "end", void 0), G()(ct, "lang", void 0), G()(ct, "mainScreen", "ppt"), G()(ct, "subWidth", 355), G()(ct, "subHeight", 200), G()(ct, "pptVisible", !0), G()(ct, "pptEnable", !1), G()(ct, "show_rate", void 0), G()(ct, "preloadDataSize", 15e3), G()(ct, "preloadDurationLength", 10), G()(ct, "is_interaction", "on"), G()(ct, "allowFullscreen", !0), G()(ct, "keyboardSeekTime", 15e3), G()(ct, "viewerInfo", {}), G()(ct, "history_video_duration", 5), G()(ct, "showAuto", !0), G()(ct, "flashConfig", {}), G()(ct, "title_of_wrong_answer_explain", void 0), G()(ct, "title_of_right_answer_explain", void 0), G()(ct, "video_align", "center"), G()(ct, "srt_caption_txt_size", 20), G()(ct, "srt_caption_txt_height", 20), G()(ct, "srt_caption_base_height", 720), G()(ct, "srt_caption_base_width", 1280), G()(ct, "fullscreenProxy", !1), G()(ct, "player_id", void 0), G()(ct, "cover_display", "scaleToFill"), G()(ct, "cover_opacity", 70), G()(ct, "full_page_screen", !1), G()(ct, "disableOpera", !0), G()(ct, "preview", !1), G()(ct, "ban_preview_video", "off"), G()(ct, "skin_type", void 0), G()(ct, "pictureInPicture", !1), G()(ct, "mutedAutoplay", !1), G()(ct, "endScreen", !1), G()(ct, "ban_ad", !1), G()(ct, "skinConfig", {}), G()(ct, "useSingleSubtitleStyle", !1), ct),
		vt = function(t) {
			if (!t) return t;
			var e = t;
			return et.isArray(t) || (e = pt()(ft.speed)),
			(e = e.slice(0, 6)).push(1),
			1 === (e = e.filter(function(t) {
				return et.isNumber(t) && 0 < t && t <= 3
			}).sort(function(t, e) {
				return e - t
			}).reduce(function(t, e) {
				var i = t.length,
				n = Math.floor(100 * e) / 100;
				return 0 !== i && t[i - 1] === n || t.push(n),
				t
			},
			[])).length && (e = pt()(ft.speed)),
			e
		},
		gt = function(t, n) {
			return t.reduce(function(t, e) {
				return "".concat(t).concat((i = e, n ? '<div class="'.concat(1 === i ? dt.a.active: "", '" data-rate="').concat(i, '">').concat(dt.a.svg.select, "<span>").concat(i, "x</span></div>") : '<div data-rate="'.concat(i, '">').concat(i, "x</div>")));
				var i
			}, "")
		}, mt = k(35),
		At = function() {
			function i(t, e) {
				b()(this, i),
				this.player = t,
				G()(this, "video", void 0),
				G()(this, "btn", null),
				this.video = t.video,
				i.support && (this.enterListener(), e && (this.btn = this.player.dom.querySelector(".".concat(dt.a.pip)), this.initClickEventListener(), this.initPlayerEvent()))
			}
			return x()(i, [{
				key: "status",
				get: function() {
					return this.element === this.video
				}
			},
			{
				key: "element",
				get: function() {
					return document.pictureInPictureElement
				}
			}]),
			x()(i, [{
				key: "initPlayerEvent",
				value: function() {
					var n = this;
					this.player.on("videoJsonUpdate",
					function() {
						n.status && n.player.isHls && n.exit()
					}),
					this.player.on("onChangeMode",
					function(t, e, i) {
						"audio" === i && n.status && n.exit()
					})
				}
			},
			{
				key: "initClickEventListener",
				value: function() {
					var i = this;
					this.btn && this.btn.addEventListener("click",
					function() {
						if (!i.player.isHls) if (i.status) {
							var t = i.exit();
							t && t.
							catch(function(t) {
								i.trigger("leavepictureinpicture", t)
							})
						} else {
							var e = i.request();
							e ? e.
							catch(function(t) {
								i.trigger("enterpictureinpicture", t)
							}) : i.player.log.show(i.player.lang.notAllowPip, 1500)
						}
					})
				}
			},
			{
				key: "trigger",
				value: function(t, e) {
					var i = this.player;
					i.trigger(t, e),
					i.triggerGlobal(t, e)
				}
			},
			{
				key: "enterListener",
				value: function() {
					var t = this;
					this.video.addEventListener("enterpictureinpicture",
					function() {
						t.trigger("enterpictureinpicture")
					}),
					this.video.addEventListener("leavepictureinpicture",
					function() {
						t.trigger("leavepictureinpicture")
					})
				}
			},
			{
				key: "request",
				value: function() {
					if (this.video.requestPictureInPicture && !this.player.isHls && !this.player.ignoreRespondEvent && "video" === this.player.getCurrentMode()) return this.video.requestPictureInPicture()
				}
			},
			{
				key: "exit",
				value: function() {
					if (document.exitPictureInPicture && this.status) return document.exitPictureInPicture()
				}
			},
			{
				key: "destroy",
				value: function() {
					this.status && this.exit()
				}
			}]),
			i
		} ();
		G()(At, "support", !!document.pictureInPictureEnabled);
		var yt = function() {
			function d(r) {
				var a = this,
				t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "skin_blue",
				e = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
				i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "off";
				b()(this, d);
				var n = (this.player = r).param.speed,
				o = r.param.skinLocation,
				s = r.param.hideSwitchPlayer,
				l = k("skin_gold" === t ? 327 : "skin_green" === t ? 328 : "skin_red" === t ? 329 : 326).tmp(e, n, s, r.lang);
				n && l.wrap.find(".".concat(dt.a.rate.select)).append(gt(n, "skin_gold" === t)),
				l.wrap.addClass(dt.a.subtitle.hide),
				l.wrap.addClass(dt.a.line.hide),
				r.param.allowFullscreen || l.wrap.addClass("pv-hide-fullscreen"),
				r.param.full_page_screen && l.wrap.addClass("pv-show-fullscreen-page"),
				this.direction = l.direction,
				this.size = l.size,
				this.skinSetting = l,
				this.wrap = l.wrap,
				this.randomClass = "pv-".concat(l.skin, "-").concat((1e8 * Math.random()).toFixed()),
				r.wrap.addClass(this.randomClass),
				r.wrap.addClass("pv-".concat(l.skin, "-player")),
				"on" !== i && 0 !== o || this.wrap.css("display", "none"),
				r.on(ut.loadedmetadata,
				function() {
					r.firstInit && r.autoplay.bind(function(t, e) {
						var i = r.autoplay.mutedPlay;
						r.debug && console.log("是否支持自动播放:".concat(t, " ").concat(e));
						var n = r.globalVolume;
						t && !e || !r.param.autoplay ? (r.volume = n, r.beforeVolume = r.volume, a.renderCurrentStyle(r.beforeVolume), it.a.isIpad && r.video.muted && a.renderVolumeBtn(!1), i && r.param.autoplay && !it.a.isIpad && r.on(ut.canplay,
						function() {
							r.video.muted && 0 < r.video.volume && (r.video.muted = !1)
						})) : !t && i && it.a.isIpad ? a.renderVolumeBtn(!1) : t && e && i ? (r.debug && console.log("尝试静音自动播放"), it.a.isIpad && (r.video.muted = !0), r.beforeVolume = n, a.renderVolumeBtn(!1), r.param.autoplay && r.mode.isAudioSrc && (r.debug && console.log("使用存音频地址不能自动播放 - play"), r.play())) : (r.debug && console.log("不支持静音自动播放或没有设置尝试静音自动播放"), r.video.muted = !1, r.video.autoplay = !1, r.pauseStyle(), r.showCover())
					})
				}),
				r.on(ut.controlRender,
				function() { !
					function(t) {
						var c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "col";
						return function() {
							var r = this,
							a = this.Elements.volumeRail,
							o = this.Elements.volumeTouch,
							t = new mt.a(this.Elements.volumeTouch, c),
							s = "col" === c ? "height": "width",
							l = !1;
							t.on("changeEvent",
							function(t, e, i) {
								if (!i) {
									if (isNaN(e)) return;
									var n = (e - (1 - (l = l || a[s]() / o[s]())) / 2) / l;
									n = 1 < (n = n < 0 ? 0 : n) ? 1 : n,
									r.volume = "col" === c ? 1 - n: n
								}
							}),
							this.Elements.volumeBtn.on("click", this.EVENT_HANDLER.muteEvent.bind(this))
						}.bind(t)
					} (r, l.direction)()
				}),
				r.on(ut.videoJsonUpdate,
				function() {
					r.param.pictureInPicture && At.support && (r.isHls ? l.wrap.removeClass("pv-show-pip") : l.wrap.addClass("pv-show-pip")),
					l.wrap.addClass(dt.a.line.hide)
				}),
				r.on(ut.renderLineControl,
				function() {
					l.wrap.find(".".concat(dt.a.setting.btn)).css("display", "inline-block")
				});
				var c = l.events;
				if (c) for (var u in c) r.on(ut[u], c[u].bind(r))
			}
			return x()(d, [{
				key: "renderCurrentStyle",
				value: function(t) {
					this.player.Elements.volumeCurrent["col" === this.direction ? "height": "width"](100 * t + "%")
				}
			},
			{
				key: "renderVolumeBtn",
				value: function(t) {
					var e, i;
					i = t ? (e = dt.a.volume.off, dt.a.volume.on) : (e = dt.a.volume.on, dt.a.volume.off),
					this.player.Elements.volumeBtn.removeClass(e).addClass(i)
				}
			},
			{
				key: "renderVolume",
				value: function(t) {
					var e, i = this.player.globalVolume,
					n = this.player.beforeVolume;
					this.direction;
					if (t && t.muted && 0 < i && (t.muted = !1), this.renderCurrentStyle(i), 0 < n && 0 === i) e = !1;
					else {
						if (! (0 < i)) return;
						e = !0
					}
					this.renderVolumeBtn(e)
				}
			}]),
			d
		} (),
		bt = "<span></span>";
		for (var wt, kt = k(22), Et = et.protocol, xt = c.aes, Tt = function() {
			function i(t, e) {
				b()(this, i),
				this.vid = t,
				this.beta = e
			}
			return x()(i, [{
				key: "decryptVideoJson",
				value: function(t) {
					var e = this.vid,
					i = Object(c.md5)(e),
					n = xt.util.b(i.substring(0, 16)),
					r = xt.util.b(i.substring(16, 32)),
					a = xt.util.toBytes(t.body),
					o = new xt.m.c(n, r, !0).d(a),
					s = xt.util.convertBytesToString(o);
					return JSON.parse(kt.Base64.decode(s))
				}
			},
			{
				key: "getVideoInfo",
				value: function(n, r) {
					function t(t, e) {
						var i = 1 < arguments.length && void 0 !== e ? e: function() {};
						_({
							url: t,
							type: "get",
							dataType: "json",
							success: function(t) {
								if (a.beta) n(t);
								else try {
									var e = a.decryptVideoJson(t);
									n(e)
								} catch(t) {
									r(2)
								}
							},
							error: function() {
								i()
							}
						})
					}
					var e = this,
					a = this;
					t(this.videoJsonLink,
					function() {
						t(e.standbyVideoJsonLink,
						function() {
							r(1)
						})
					})
				}
			},
			{
				key: "getVideoJsonLink",
				value: function() {
					return this.beta ? "//beta.polyv.net/videojson/".concat(this.vid, ".js?nocache=1") : "https:" === Et ? "https://player.polyv.net/secure/".concat(this.vid, ".json") : "http://player.polyv.net/videojson/".concat(this.vid, ".json")
				}
			},
			{
				key: "getStandbyVideoJsonLink",
				value: function() {
					return "https:" === Et ? "https://static.polyv.net/secure/".concat(this.vid, ".json") : "http://static.polyv.net/videojson/".concat(this.vid, ".json")
				}
			},
			{
				key: "videoJsonLink",
				get: function() {
					return this.getVideoJsonLink()
				}
			},
			{
				key: "standbyVideoJsonLink",
				get: function() {
					return this.getStandbyVideoJsonLink()
				}
			}]),
			i
		} (), St = function() {
			function n(t) {
				b()(this, n);
				var e = this.selector;
				for (var i in this.wrap = Object(d.a)(t), e) this[i] = this.getElementDom(e[i])
			}
			return x()(n, [{
				key: "selector",
				get: function() {
					return {
						playpause: dt.a.playpause.defaultClass,
						timeCurrent: dt.a.time.current,
						timeDuration: dt.a.time.duration,
						volumeBtn: dt.a.volume.defaultClass,
						volumeTouch: dt.a.volume.touch,
						volumeRail: dt.a.volume.rail,
						volumeCurrent: dt.a.volume.current,
						qualityBtn: "".concat(dt.a.quality.qualityBtn, ">span"),
						qualitySelect: dt.a.quality.select,
						rateBtn: "".concat(dt.a.rate.rateBtn, ">span"),
						rateSelect: dt.a.rate.select,
						fullscreen: dt.a.fullscreen.defaultClass,
						fullscreenTip: dt.a.fullscreen.tip,
						fullscreenPage: dt.a.fullscreenPage.defaultClass,
						fullscreenPageTip: dt.a.fullscreenPage.tip,
						progressTouch: dt.a.progress.touch,
						touchTime: dt.a.progress.touchTime,
						progressBuffer: dt.a.progress.buffer,
						progressCurrent: dt.a.progress.current,
						progressPoint: dt.a.progress.point,
						flashBtn: dt.a.setting.flash,
						settingBtn: dt.a.setting.btn,
						selectMenu: dt.a.selectMenu,
						selectMenuWrap: dt.a.selectMenuWrap,
						streamBtnLists: "".concat(dt.a.stream.select, " [data-mode]"),
						streamBtn: dt.a.stream.btn,
						danmuBtn: dt.a.danmu.defaultClass,
						subtitleWrap: dt.a.subtitle.select,
						subtitleBtn: dt.a.subtitle.btn,
						lineSelect: dt.a.line.select,
						lineBtn: dt.a.line.btn
					}
				}
			}]),
			x()(n, [{
				key: "getElementDom",
				value: function(t) {
					return this.wrap.find("." + t)
				}
			}]),
			n
		} (), _t = "webkitSupportsFullscreen", Ct = "webkitEnterFullscreen", Lt = "webkitExitFullscreen", Rt = "webkitDisplayingFullscreen", Dt = 0, It = [{
			enabled: "fullscreenEnabled",
			element: "fullscreenElement",
			request: "requestFullscreen",
			exit: "exitFullscreen",
			events: {
				change: "fullscreenchange",
				error: "fullscreenerror"
			}
		},
		{
			enabled: "webkitFullscreenEnabled",
			element: "webkitCurrentFullScreenElement",
			request: "webkitRequestFullscreen",
			exit: "webkitExitFullscreen",
			events: {
				change: "webkitfullscreenchange",
				error: "webkitfullscreenerror"
			}
		},
		{
			enabled: "mozFullScreenEnabled",
			element: "mozFullScreenElement",
			request: "mozRequestFullScreen",
			exit: "mozCancelFullScreen",
			events: {
				change: "mozfullscreenchange",
				error: "mozfullscreenerror"
			}
		},
		{
			enabled: "msFullscreenEnabled",
			element: "msFullscreenElement",
			request: "msRequestFullscreen",
			exit: "msExitFullscreen",
			events: {
				change: "MSFullscreenChange",
				error: "MSFullscreenError"
			}
		}]; Dt < It.length; Dt++) {
			var Mt = It[Dt];
			if (Mt.enabled in f.a) {
				wt = Mt;
				break
			}
		}
		var Pt = function() {
			function i() {
				var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : f.a,
				e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [];
				b()(this, i),
				this.ELE = Object(d.a)(t),
				this.api = wt,
				this.fullAry = e,
				this.api && (this.fullscreen = new CustomEvent("fullscreen", {}), this.exitFullscreen = new CustomEvent("exitFullscreen", {}), this.setScreenChange())
			}
			return x()(i, null, [{
				key: "support",
				value: function() {
					return !! wt
				}
			},
			{
				key: "supportVideoInIOS",
				value: function(t) {
					return t[_t]
				}
			},
			{
				key: "toggleVideoInIOS",
				value: function(t) {
					t[Rt] ? t[Lt]() : t[Ct]()
				}
			}]),
			x()(i, [{
				key: "request",
				value: function() {
					this.ELE.dom[0][this.api.request]()
				}
			},
			{
				key: "exit",
				value: function() {
					f.a[this.api.exit]()
				}
			},
			{
				key: "toggle",
				value: function() {
					i.support() && (f.a[this.api.element] ? this.exit() : this.request())
				}
			},
			{
				key: "setScreenChange",
				value: function() {
					var t = this.fullAry,
					i = this.fullscreen,
					n = this.exitFullscreen;
					f.a.addEventListener(this.api.events.change,
					function() {
						var e;
						e = f.a[this.api.element] ? i: n,
						t.forEach(function(t) {
							t.dispatchEvent(e)
						})
					}.bind(this))
				}
			},
			{
				key: "isFullscreen",
				get: function() {
					return this.api && !!f.a[this.api.element]
				}
			},
			{
				key: "fullscreenElement",
				get: function() {
					return f.a[this.api.element]
				}
			}]),
			i
		} ();
		var Ot = function(t, e) {
			var i = t,
			n = e;
			return {
				requestFullscreen: function() {
					this.fullscreen.ELE.dom[0] === this.fullscreen.fullscreenElement && n.wrap.addClass(i.fullClass),
					n.fullscreen.removeClass(i.fullscreen.full).addClass(i.fullscreen.exit),
					n.fullscreenTip.html(this.lang.exitFullscreen)
				},
				exitFullscreen: function() {
					n.wrap.removeClass(i.fullClass),
					n.fullscreen.addClass(i.fullscreen.full).removeClass(i.fullscreen.exit),
					n.fullscreenTip.html(this.lang.fullscreen)
				},
				fullscreenPage: function() {
					window.onFullPageScreen && window.onFullPageScreen(this.vid, this.isFullPageScreen)
				},
				playEvent: function() {
					this.ignoreRespondEvent || this.togglePlay()
				},
				coverPlay: function() {
					this.ignoreRespondEvent || (this.hideCover(), this.togglePlay())
				},
				muteEvent: function() {
					this.toggleMute()
				},
				rateEvent: function(t) {
					if (!this.ignoreRespondEvent) {
						var e = Object(d.a)(t.target),
						i = e.attr("data-rate");
						i = i || e.parent().attr("data-rate"),
						this.changeRate(l()(i))
					}
				}
			}
		},
		Bt = ["session_id", "param1", "param2", "param3", "param4"],
		Ft = window.MobileAndFlashUrl || "".concat(et.protocol, "//player.polyv.net/script/polyvplayer.min.js"),
		Nt = ["width", "height", "vid", "showHd", "hideRepeat", "df", "adSkip", "teaserSkip", "teaser_show", "teaser_url", "teaser_time", "speed", "ban_ui", "autoplay", "audioMode", "videoMode", "priorityMode", "watchStartTime", "watchEndTime", "hideSwitchPlayer", "ban_seek_by_limit_time", "ban_seek", "ban_barrage_btn", "loading_bg_img", "ban_record_interaction_right_answer", "url", "lang", "pptEnable", "is_interaction", "playsafe", "allowFullscreen", "keyboardSeekTime", "logo", "playsafeUrl", "start", "end", "show_rate", "viewerInfo", "history_video_duration", "showLine", "showAuto", "title_of_right_answer_explain", "title_of_wrong_answer_explain", "video_align", "srt_caption_txt_size", "srt_caption_txt_height", "srt_caption_base_height", "srt_caption_base_width", "fullscreenProxy", "ban_history_time", "player_id", "cover_display", "cover_opacity", "full_page_screen", "rightMenu", "appId", "tail_time", "tail_url", "tail_show", "tailSkip", "preview", "ban_preview_video", "skin_type", "loop", "pictureInPicture", "ban_ad", "customErrorTips"],
		Ut = function() {
			function a(t) {
				b()(this, a);
				var e = t.wrap,
				i = t.params,
				n = t.cb ||
				function() {};
				i.skin = t.skin;
				var r = a.createScript(a.url);
				r.onload = function() {
					n(),
					a._init(e, i)
				},
				a.checkFlash() ? (n(), a._init(e, i)) : document.querySelector("head").appendChild(r)
			}
			return x()(a, [{
				key: "url",
				get: function() {
					return window.MobileAndFlashUrl || Ft
				}
			}], [{
				key: "checkFlash",
				value: function() {
					return !! (window.polyvObject && window.polyvObject.fn && window.polyvObject.fn.videoPlayer)
				}
			},
			{
				key: "createScript",
				value: function(t) {
					var e = document.createElement("script");
					return e.src = t,
					e
				}
			}]),
			x()(a, [{
				key: "on",
				value: function() {}
			}], [{
				key: "_init",
				value: function(t, e, i) {
					var n = 2 < arguments.length && void 0 !== i ? i: "off",
					r = {
						code: e.code || "",
						verificationcode: e.verificationcode || "",
						flashvars: m()({},
						{
							ban_barrage_btn: e.ban_barrage_btn,
							ban_set_player: n,
							volume: e.volume,
							is_auto_replay: e.loop ? "on": "off",
							ban_history_time: e.ban_history_time || "off",
							ban_record_interaction_right_answer: e.ban_record_interaction_right_answer,
							ban_seek_by_limit_time: e.ban_seek_by_limit_time,
							ban_seek: e.ban_seek,
							videoMode: e.videoMode,
							audioMode: e.audioMode,
							ban_preview_video: e.ban_preview_video
						},
						e.flashvars),
						h5Config: e
					};
					Nt.forEach(function(t) {
						r[t] = e[t]
					}),
					"string" == typeof e.skin ? r.flashvars.skin_type = e.skin: "object" === h()(e.skin) && e.skin.skinid && (r.flashvars.skin_type = e.skin.skinid),
					e.hideSwitchPlayer && (r.flashvars.ban_set_player = "on"),
					e.ts && (r.ts = e.ts),
					e.sign && (r.sign = e.sign),
					e.statistics && (e.statistics[Bt[0]] && (r[Bt[0]] = e.statistics[Bt[0]]), r.params = {},
					Bt.slice(1).forEach(function(t) {
						void 0 !== e.statistics[t] && (r.params[t] = e.statistics[t])
					})),
					e.adMatter && (r.adMatter = e.adMatter),
					void 0 !== e.skinLocation && (r.skinLocation = e.skinLocation),
					"number" == typeof e.df && (r.df = e.df);
					var a = "videoPlayer";
					e.originVid && (r.vid = e.originVid, a = "previewPlayer"),
					e.flashConfig && L()(e.flashConfig).forEach(function(t) {
						r[t] = e.flashConfig[t]
					});
					var o = window.polyvObject(t)[a](r);
					return t.trigger("changeFlash", o),
					o
				}
			}]),
			a
		} ();
		Ut.url = Ft;
		var qt = Ut,
		jt = window;
		function zt(t) {
			var e, i, n, r;
			if (34 == t.length) e = t;
			else for (t = t.substr(1), e = "", i = 0; i < t.length; i++) n = t.charAt(i),
			e += -1 == (r = "lpmkenjibhuvgycftxdrzsoawq0126783459".indexOf(n)) ? n: "abcdofghijklnmepqrstuvwxyz0123456789".charAt(r);
			return e
		}
		var Vt = function() {
			var t;
			return t = {
				playStart: function() {
					jt.s2j_onPlayStart && jt.s2j_onPlayStart(this.vid),
					this.triggerGlobal("s2j_onPlayStart", this.vid)
				},
				play: function() {
					jt.s2j_onVideoPlay && jt.s2j_onVideoPlay(this.vid),
					this.triggerGlobal("s2j_onVideoPlay", this.vid)
				},
				pause: function() {
					jt.s2j_onVideoPause && jt.s2j_onVideoPause(this.vid),
					this.triggerGlobal("s2j_onVideoPause", this.vid)
				},
				loadedmetadata: function() {
					jt.s2j_onPlayerInitOver && jt.s2j_onPlayerInitOver(this.vid),
					this.triggerGlobal("s2j_onPlayerInitOver", this.vid),
					jt.s2j_onReadyPlay && jt.s2j_onReadyPlay(this.vid),
					this.triggerGlobal("s2j_onReadyPlay", this.vid)
				},
				ended: function() {
					jt.s2j_onPlayOver && jt.s2j_onPlayOver(this.vid),
					this.triggerGlobal("s2j_onPlayOver", this.vid)
				},
				fullscreen: function() {
					jt.s2j_onFullScreen && jt.s2j_onFullScreen(this.vid),
					this.triggerGlobal("s2j_onFullScreen", this.vid)
				},
				exitFullscreen: function() {
					jt.s2j_onNormalScreen && jt.s2j_onNormalScreen(this.vid),
					this.triggerGlobal("s2j_onNormalScreen", this.vid)
				},
				error: function() {
					jt.s2j_onPlayerError && jt.s2j_onPlayerError(this.vid),
					this.triggerGlobal("s2j_onPlayerError", this.vid)
				},
				onChangeMode: function(t, e, i, n) {
					jt.onChangeMode && jt.onChangeMode(e, i, n),
					this.triggerGlobal("onChangeMode", e, i, n)
				},
				volumechange: function() {
					var t = Math.ceil(100 * this.volume);
					jt.s2j_volumeChange && jt.s2j_volumeChange(this.vid, t),
					this.triggerGlobal("s2j_volumeChange", this.vid, t)
				},
				questionSkip: function(t) {
					for (var e = arguments.length,
					i = new Array(1 < e ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
					jt.onQuestionSkip && jt.onQuestionSkip.apply(jt, i),
					this.triggerGlobal.apply(this, ["onQuestionSkip"].concat(i))
				},
				answerResult: function(t) {
					for (var e = arguments.length,
					i = new Array(1 < e ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
					jt.onAnswerResult && jt.onAnswerResult.apply(jt, i),
					this.triggerGlobal.apply(this, ["onAnswerResult"].concat(i))
				},
				questionInit: function(t) {
					for (var e = arguments.length,
					i = new Array(1 < e ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
					jt.onQuestionPopUp && jt.onQuestionPopUp.apply(jt, i),
					this.triggerGlobal.apply(this, ["onQuestionPopUp"].concat(i))
				},
				timeupdate: function() {
					this.triggerGlobal("timeupdate")
				},
				changeRate: function(t) {
					for (var e = arguments.length,
					i = new Array(1 < e ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
					this.triggerGlobal.apply(this, ["rateChange"].concat(i))
				},
				changeLevel: function(t) {
					for (var e = arguments.length,
					i = new Array(1 < e ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
					this.triggerGlobal.apply(this, ["levelChange"].concat(i))
				}
			},
			G()(t, "onChangeMode",
			function(t, e, i, n) {
				this.triggerGlobal("modeChange", i, n)
			}),
			G()(t, "linechange",
			function(t) {
				for (var e = arguments.length,
				i = new Array(1 < e ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
				this.triggerGlobal.apply(this, ["lineChange"].concat(i))
			}),
			t
		},
		Ht = function() {
			function n(t) {
				b()(this, n),
				this.player = t,
				this.touch = t.Elements.progressTouch,
				this.vid = t.vid,
				this.video = t.video;
				var e = Vt();
				for (var i in e)"function" == typeof e[i] && this.player.on(ut[i], e[i].bind(this.player));
				this.seekedEvent()
			}
			return x()(n, [{
				key: "seekedEvent",
				value: function() {
					var e = this,
					i = this.vid,
					n = this.video,
					r = n.currentTime;
					this.touch.on("mousedown",
					function(t) {
						1 === t.which && (r = n.currentTime)
					}),
					this.touch.on("mouseup",
					function(t) {
						1 === t.which && (p.a.s2j_onVideoSeek && p.a.s2j_onVideoSeek(r, n.currentTime, i), e.player.triggerGlobal("s2j_onVideoSeek", r, n.currentTime, i))
					})
				}
			}]),
			n
		} (),
		Gt = "".concat(et.protocol, "//prtas.videocc.net/v2/view"),
		Yt = ("".concat(et.protocol, "//prtas-2.videocc.net/v2/view"), "".concat(et.protocol, "//prtas.videocc.net/qos")),
		Wt = p.a.location.href,
		Kt = {
			timeupdate: function() {
				var t = this;
				clearTimeout(this.pdclock);
				var e = Qt.getTs();
				if (this.afterTime) {
					var i = (e - this.afterTime) / 1e3;
					i > this.interval && (i = this.interval),
					i < 0 && (i = 0),
					this.pd = this.pd + i,
					this.afterTime = e
				} else this.afterTime = e;
				this.pdclock = setTimeout(function() {
					t.afterTime = 0
				}.bind(this), 1e3)
			},
			canplay: function() {
				if (this.startLoadDate) {
					var t = Qt.getTs() - this.startLoadDate;
					this.startLoadDate = void 0,
					this.sendQos("loading", {
						time: t
					})
				}
				if (this.secondLoadDate) {
					var e = Qt.getTs() - this.secondLoadDate;
					this.secondLoadDate = void 0,
					this.sendQos("buffer", {
						time: e
					}),
					this.player.off(ut.canplay, this.eventArray.canplay),
					this.player.off(ut.waiting, this.eventArray.waiting),
					this.player.off(ut.seeked, this.eventArray.seeked)
				}
			},
			loadstart: function() {
				this.startLoadDate = Qt.getTs()
			},
			waiting: function() {
				this.secondLoadDate = Qt.getTs()
			},
			seeked: function() {
				this.secondLoadDate = void 0
			},
			ended: function() {
				this.sendQos("end"),
				this.player.off(ut.ended, this.eventArray.ended)
			},
			serverError: function(t, e, i, n) {
				var r = this.player.codeMessage[e];
				if (r && r.type) {
					var a = this.player.getCurrentUrl() || "",
					o = r.type;
					r.getType && n && (o = r.getType(n)),
					"#007" === e || "#003" === e ? this.sendQos("error", {
						error: o,
						request_uri: a
					}) : this.sendQos("forbidden", {
						error: o,
						request_uri: a
					})
				}
			}
		},
		Qt = function() {
			function l(t, e) {
				var i = this,
				n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
				b()(this, l),
				this.allowSend = !n,
				this.href = kt.Base64.encode(Wt, !0);
				var r = [t, t.video, t.vid, e];
				this.player = r[0],
				this.video = r[1],
				this.vid = r[2],
				this.pid = r[3],
				this.appId = t.param.appId;
				var a = t.param.statistics || {};
				for (var o in this.startTime = l.getTs(), this.pd = 0, this.sd = 0, this.firstClock = !0, this.data = {},
				this.dataQos = {},
				this.sendCount = 0, this.viewerAvatar = t.param.viewerInfo.viewerAvatar, this.interval = 10, this.URL = Gt, this.pv = t.version, this.startLoadDate = void 0, this.secondLoadDate = void 0, this.seekStatus = void 0, t.param.viewerInfo.viewerId && (a.session_id = t.param.viewerInfo.viewerId), t.param.viewerInfo.viewerName && (a.param2 = t.param.viewerInfo.viewerName), t.param.viewerInfo.viewerExtraInfo1 && (a.param3 = t.param.viewerInfo.viewerExtraInfo1), t.param.viewerInfo.viewerExtraInfo2 && (a.param4 = t.param.viewerInfo.viewerExtraInfo2), t.param.viewerInfo.viewerExtraInfo3 && (a.param5 = t.param.viewerInfo.viewerExtraInfo3), this.userSet.forEach(function(t) {
					void 0 !== a[t] && ("session_id" === t ? (i.data.sid = kt.Base64.encode(a[t], !0), i.dataQos.session_id = a[t]) : (i.data[t] = kt.Base64.encode(a[t], !0), -1 === t.indexOf("key") && (i.dataQos[t] = a[t])))
				}), this.viewerAvatar && (this.viewerAvatar = kt.Base64.encode(this.viewerAvatar, !0)), a.log && (this.data.log = !0), this.eventArray = {},
				Kt) if ("function" == typeof Kt[o]) {
					var s = Kt[o].bind(this);
					this.eventArray[o] = s,
					t.on(ut[o], s)
				}
			}
			return x()(l, [{
				key: "sendQos",
				value: function(t, e) {
					var i = 1 < arguments.length && void 0 !== e ? e: {},
					n = {
						pid: this.pid,
						vid: this.vid,
						uid: l.getUid(this.vid),
						href: Wt,
						domain: et.getUrlHost(this.player.getCurrentUrl()),
						type: t,
						pn: "HTML5",
						pv: this.pv
					};
					m()(n, this.dataQos, i),
					this.allowSend && _({
						url: Yt,
						type: "get",
						data: n
					})
				}
			},
			{
				key: "userSet",
				get: function() {
					return ["session_id", "param1", "param2", "param3", "param4", "param5", "key1", "key2", "key3", "viewerAvatar"]
				}
			}], [{
				key: "getPid",
				value: function() {
					return l.getTs() + "" + "X" + (A()(1e6 * Math.random() + 1e6) + "")
				}
			},
			{
				key: "getUid",
				value: function(t) {
					return t ? t.slice(0, 10) : ""
				}
			},
			{
				key: "getTs",
				value: function() {
					return (new Date).getTime()
				}
			},
			{
				key: "getSign",
				value: function(t, e, i, n, r, a) {
					return Object(c.md5)(t + e + i + n + r + a)
				}
			},
			{
				key: "getSd",
				value: function(t, e) {
					return Math.floor((e - t) / 1e3)
				}
			},
			{
				key: "sendData",
				value: function() {
					var t = this.video,
					e = this.duration,
					i = Math.min(Math.ceil(t.currentTime), e) || 0,
					n = Math.floor(this.pd),
					r = this.sd += this.interval;
					if (0 !== n) {
						var a = {
							pid: this.pid,
							vid: this.vid,
							uid: l.getUid(this.vid),
							flow: 0,
							ts: l.getTs(),
							href: this.href,
							duration: e,
							cts: i,
							sign: l.getSign("rtas.net", this.pid, this.vid, 0, n, i),
							sd: r,
							pd: n,
							pn: "HTML5",
							pv: this.pv
						};
						this.appId && (a.appId = this.appId),
						m()(a, this.data),
						1 == ++this.sendCount && (this.viewerAvatar && (a.viewerAvatar = this.viewerAvatar), a.ute = "bop"),
						this.data.log && console.log(a),
						this.allowSend && _({
							url: this.URL || Gt,
							type: "get",
							data: a
						})
					}
				}
			}]),
			x()(l, [{
				key: "init",
				value: function(t) {
					et.isNumber(t) && 0 < t && (this.interval = t),
					this.duration = Math.floor( + this.player.videoInfo.duration),
					this.data.cataid = this.player.videoInfo.cataid,
					this.clock = setInterval(l.sendData.bind(this), 1e3 * this.interval)
				}
			},
			{
				key: "changeParams",
				value: function() {
					for (var t = arguments.length,
					e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
					e[0] && (this.data.sid = kt.Base64.encode(e[0], !0));
					for (var n = 1; n < 6; n++) e[n] && (this.data["param".concat(n)] = kt.Base64.encode(e[n], !0))
				}
			},
			{
				key: "refresh",
				value: function(t, e) {
					this.duration = t,
					this.vid = e,
					this.pd = 0
				}
			},
			{
				key: "destroy",
				value: function() {
					for (var t in clearTimeout(this.clock), this.eventArray) this.player.off(ut[t], this.eventArray[t])
				}
			}]),
			l
		} (),
		Xt = Qt,
		Jt = function() {
			function n(t) {
				b()(this, n),
				G()(this, "wrap", void 0),
				G()(this, "log", void 0),
				G()(this, "error", void 0),
				G()(this, "showClass", "pv-log-message-show"),
				G()(this, "hideClock", void 0),
				this.wrap = t,
				this.log = n.createElement("pv-log-message"),
				this.error = n.createError(),
				this.showClass = "pv-log-message-show",
				this.hideClock = void 0,
				t.appendChild(this.log),
				t.appendChild(this.error.errorWrap)
			}
			return x()(n, null, [{
				key: "createElement",
				value: function(t) {
					var e = document.createElement("div");
					return t && e.setAttribute("class", t),
					e
				}
			},
			{
				key: "createError",
				value: function() {
					var t = n.createElement("pv-log-errormsg"),
					e = n.createElement("pv-log-errorIcon"),
					i = n.createElement("pv-log-error");
					return i.appendChild(e),
					i.appendChild(t),
					{
						msg: t,
						icon: e,
						errorWrap: i
					}
				}
			}]),
			x()(n, [{
				key: "showError",
				value: function(t, e) {
					var i = 0 < arguments.length && void 0 !== t ? t: "",
					n = 1 < arguments.length && void 0 !== e ? e: "";
					this.error.msg.innerHTML = "".concat(i, " ").concat(n),
					this.error.errorWrap.style.display = "block"
				}
			},
			{
				key: "hideError",
				value: function() {
					this.error.msg.innerHTML = "",
					this.error.errorWrap.style.display = "none"
				}
			},
			{
				key: "show",
				value: function(t, e) {
					var i = this,
					n = this.log;
					this.hideClock && clearTimeout(this.hideClock),
					n.style.display = "block",
					n.innerHTML = t,
					setTimeout(function() {
						n.classList.add(i.showClass)
					},
					16),
					e && setTimeout(function() {
						i.hide()
					},
					e)
				}
			},
			{
				key: "hide",
				value: function() {
					var t = this;
					this.log.classList.remove(this.showClass),
					this.hideClock = setTimeout(function() {
						t.log.style.display = "none"
					},
					600)
				}
			}]),
			n
		} (),
		Zt = k(85),
		$t = k.n(Zt);
		function te(t) {
			if (!t) return 1;
			var e = t.videoWidth,
			i = t.videoHeight,
			n = t.clientWidth,
			r = t.clientHeight;
			if (!e || !i) return 1;
			var a = e / i,
			o = r;
			a < n / r || (o = n / a);
			var s = o / r;
			return s < 0 || 1 < s ? 1 : Math.floor(100 * s) / 100
		}
		function ee(e, t) {
			var i = L()(e);
			if (j.a) {
				var n = j()(e);
				t && (n = n.filter(function(t) {
					return U()(e, t).enumerable
				})),
				i.push.apply(i, n)
			}
			return i
		}
		function ie(e) {
			for (var t = 1; t < arguments.length; t++) {
				var i = null != arguments[t] ? arguments[t] : {};
				t % 2 ? ee(Object(i), !0).forEach(function(t) {
					G()(e, t, i[t])
				}) : F.a ? O()(e, F()(i)) : ee(Object(i)).forEach(function(t) {
					M()(e, t, U()(i, t))
				})
			}
			return e
		}
		var ne = {
			"font-size": "30px",
			color: "#000000",
			transition: "transform 20s linear",
			"-webkit-transition": "-webkit-transform 20s linear",
			transform: "translateX(0)",
			"-webkit-transform": "translateX(0)",
			opacity: "1",
			left: "100%",
			display: "inline-block"
		},
		re = {
			margin: "0px",
			padding: "0px",
			position: "absolute",
			overflow: "visible",
			visibility: "visible",
			bottom: "auto",
			border: "0px solid transparent",
			animation: "none",
			"-webkit-animation": "none",
			"user-select": "none",
			"-webkit-user-select": "none",
			"white-space": "nowrap",
			"pointer-events": "none",
			"z-index": "auto"
		},
		ae = {
			width: "100%",
			height: "100%",
			top: "0px",
			left: "0px",
			transform: "none",
			"-webkit-transform": "none",
			display: "block",
			opacity: "1",
			overflow: "hidden"
		},
		oe = function() {
			function g(t) {
				var e = t.video,
				i = t.wrap,
				n = t.data,
				r = t.marqueeCheck,
				a = t.vid,
				o = t.code,
				s = t.verificationcode,
				l = t.confirmCheck;
				b()(this, g),
				G()(this, "firstPlay", void 0),
				G()(this, "video", void 0),
				G()(this, "wrap", void 0),
				G()(this, "marqueeData", void 0),
				G()(this, "clock2", void 0),
				G()(this, "clock", void 0),
				G()(this, "existClock", void 0),
				G()(this, "left", void 0),
				G()(this, "top", void 0),
				G()(this, "check", void 0),
				G()(this, "checkCallback", void 0),
				G()(this, "legalRemove", void 0),
				G()(this, "fixMarqueeHideInterval", void 0),
				G()(this, "vid", void 0),
				G()(this, "code", void 0),
				G()(this, "verificationcode", void 0),
				G()(this, "options", void 0),
				G()(this, "styleE1", void 0),
				G()(this, "styleE2", void 0),
				G()(this, "setting", void 0),
				G()(this, "lifeTime", 5),
				G()(this, "interval", 0),
				G()(this, "legalPstring", void 0),
				G()(this, "parentDataString", ""),
				G()(this, "hideParentDataString", ""),
				G()(this, "childrenDataString", ""),
				G()(this, "legalString", void 0),
				G()(this, "marqueeWrap", void 0),
				G()(this, "marqueeChild", void 0),
				G()(this, "childWidth", void 0),
				G()(this, "childHeight", void 0),
				G()(this, "eventObject", void 0),
				G()(this, "fixMarqueeData", void 0),
				G()(this, "confirmCheck", void 0),
				G()(this, "liveFixMarquee", void 0),
				this.firstPlay = !1,
				this.legalRemove = !0,
				this.left = 0,
				this.top = 0,
				this.vid = a,
				this.code = o,
				this.verificationcode = s,
				this.video = e,
				this.wrap = i,
				this.check = !!r && !!e,
				this.confirmCheck = l,
				this.checkCallback = "function" == typeof r ? r: function() {},
				this.marqueeData = n,
				this.clock2,
				this.options = {},
				this.options.style = ne,
				this.fixMarqueeHideInterval = 20
			}
			return x()(g, [{
				key: "checkSign",
				value: function(t, e, i) {
					return o = {
						sign: t,
						validUrl: e,
						urlBackup: i,
						vid: this.vid,
						code: this.code,
						verificationcode: this.verificationcode
					},
					n = o.validUrl,
					s = o.urlBackup,
					l = o.vid,
					c = $t()() + Math.floor(1e9 * Math.random()),
					new E.a(function(a, t) { !
						function t(e, i) {
							var n = !(1 < arguments.length && void 0 !== i) || i,
							r = {};
							o.code && (r.code = o.code),
							o.verificationcode && (r.verificationcode = o.verificationcode),
							_({
								url: e,
								dataType: "jsonp",
								data: m()({
									t: c,
									vid: l
								},
								r),
								success: function(t) {
									var e = m()({},
									t);
									o.sign ? a(e) : (delete t.sign, _({
										url: et.protocol + "//v3.polyv.net/uc/services/get/player/sign",
										dataType: "jsonp",
										data: m()({
											t: c,
											vid: l,
											status: t.status,
											username: t.username
										},
										t, r),
										success: function(t) {
											e.sign === zt(kt.Base64.decode(t.sign)) || t.sign2 && e.sign === zt(kt.Base64.decode(t.sign2)) ? a(e) : a(!1)
										}
									}))
								},
								error: function() {
									s && n && t(s, n)
								}
							})
						} (n, !0)
					});
					var o, n, s, l, c
				}
			}], [{
				key: "removeChild",
				value: function(t) {
					if (t) {
						var e = t.parentNode;
						e && e.removeChild(t)
					}
				}
			}]),
			x()(g, [{
				key: "checkExist",
				value: function() {
					var v = this;
					this.existClock && clearInterval(this.existClock),
					this.existClock = setInterval(function() {
						if (v.video && (!v.confirmCheck || !v.confirmCheck()) && !v.video.paused && v.marqueeChild && v.marqueeWrap && v.styleE2 && v.styleE1) {
							var t = v.options.content && v.options.content === v.marqueeChild.textContent,
							e = g.getStyleString(v.marqueeChild, v.legalString) === v.styleE2.textContent,
							i = g.getStyleString(v.marqueeWrap, v.legalPstring) === v.styleE1.textContent,
							n = v.marqueeWrap.getAttribute("style") || v.marqueeChild.getAttribute("style"),
							r = !(!v.styleE1.parentNode || !v.styleE2.parentNode),
							a = v.marqueeWrap.parentNode === v.wrap,
							o = !1,
							s = !1,
							l = !1,
							c = !0,
							u = !1;
							if (a) {
								var d = v.marqueeWrap.offsetWidth;
								1 < Math.abs(d - v.video.offsetWidth) && (o = !0),
								1 < Math.abs(v.marqueeWrap.offsetHeight - v.video.offsetHeight) && (s = !0),
								c = !v.marqueeWrap.offsetTop && !v.marqueeWrap.offsetLeft;
								var h = window.getComputedStyle(v.marqueeChild);
								l = v.checkStyle(h),
								v.checkPosition(h, d) || (c = !1),
								(v.video.offsetTop || v.video.offsetLeft) && (c = !1),
								3 !== v.setting && (u = v.checkStyle(window.getComputedStyle(v.marqueeWrap), !1, !0))
							}
							if (o || s || u || !c || !r || n || !e || !i || l || !t || !a && !v.legalRemove) {
								var p = [o, s, u, !c, !r, n, !e, !i, l, !t, !a && !v.legalRemove],
								f = [];
								p.forEach(function(t, e) {
									t && f.push(e)
								}),
								v.checkCallback(f),
								v.existClock && clearInterval(v.existClock)
							}
						}
					},
					5e3)
				}
			},
			{
				key: "checkPosition",
				value: function(t, e) {
					var i = [2, 5, 7],
					n = A()(t.left),
					r = A()(t.top);
					return ! this.setting || !(1 < Math.abs(r - this.top)) && (!( - 1 === i.indexOf(this.setting) && 5 < Math.abs(n - e) && this.video && this.video.offsetWidth !== e) && !( - 1 !== i.indexOf(this.setting) && 5 < Math.abs(n - this.left)))
				}
			},
			{
				key: "checkStyle",
				value: function(t, e, i) {
					var n = !(1 < arguments.length && void 0 !== e) || e,
					r = 2 < arguments.length && void 0 !== i && i;
					return !! (Number(t.opacity) < .01 || "none" === t.display || "visible" !== t.visibility || n && A()(t.fontSize) < 12 || A()(t.marginTop || "") || A()(t.marginBottom || "") || A()(t.marginLeft || "") || A()(t.marginRight || "") || A()(t.paddingLeft || "") || A()(t.paddingRight || "") || A()(t.paddingTop || "") || A()(t.paddingBottom || "") || A()(t.borderBottomWidth || "") || A()(t.borderTopWidth || "") || A()(t.borderLeftWidth || "") || A()(t.borderRightWidth || "") || "absolute" !== t.position || "auto" !== t.zIndex && "0" !== t.zIndex || r && A()(t.bottom || ""))
				}
			},
			{
				key: "getEvents",
				value: function() {
					var t = this;
					return {
						play: function() {
							if (t.marqueeWrap && (t.legalPstring = t.parentDataString, t.setStyle1Text(), !t.firstPlay)) switch (t.firstPlay = !0, t.wrap.insertBefore(t.marqueeWrap, t.video.nextSibling), t.legalRemove = !1, t.check && t.checkExist(), t.setting) {
							case 1:
								t.showStyle1();
								break;
							case 2:
								t.showStyle2();
								break;
							case 3:
								t.showStyle3();
								break;
							case 4:
								t.showStyle1(.3);
								break;
							case 5:
								t.showStyle2(.3);
								break;
							case 6:
								t.showStyle1();
								break;
							case 7:
								t.showStyle2();
								break;
							default:
								return
							}
						},
						pause: function() {
							t.legalPstring = t.hideParentDataString,
							t.setStyle1Text()
						},
						ended: function() {
							t.firstPlay = !1,
							t.removeMarqueeWrap(),
							t.clock && clearInterval(t.clock),
							t.initElement()
						}
					}
				}
			},
			{
				key: "setup",
				value: function() {
					var t = this.video;
					this.styleE1 = g.createStyle(),
					this.styleE2 = g.createStyle(),
					this.wrap.appendChild(this.styleE1),
					this.wrap.appendChild(this.styleE2),
					this.setting = +(this.marqueeData.setting || 1),
					this.lifeTime = 1e3 * (this.marqueeData.lifeTime || 1),
					this.interval = 1e3 * ( + this.marqueeData.interval || 0),
					this.legalPstring = this.parentDataString = g.makeStyleString(re) + g.makeStyleString(ae),
					this.hideParentDataString = this.parentDataString.replace("opacity:1", "opacity:0"),
					this.options.style = g.mixOption(this.options.style, this.marqueeData),
					this.options.content = this.marqueeData.username,
					this.options.speed = this.marqueeData.speed ? this.marqueeData.speed / 10 : 20,
					this.legalString = this.childrenDataString = g.makeStyleString(re) + g.makeStyleString(this.options.style),
					this.marqueeWrap = g.createParentElement();
					var e = this.marqueeChild = g.createRandomElement();
					if (e.textContent = this.options.content, this.marqueeWrap.appendChild(e), this.childWidth = this.countChildWidth(), this.childHeight = A()(this.options.style["font-size"]), this.setStyle1Text(), this.setStyle2Text(), this.eventObject = this.getEvents(), t) for (var i in this.eventObject)"function" == typeof this.eventObject[i] && t.addEventListener(i, this.eventObject[i]); (!t || t.paused) && t || this.eventObject.play(),
					6 !== this.setting && 7 !== this.setting || (this.vid && t ? (this.showFixMarquee(), this.eventObject.timeupdate = this.timeupdate.bind(this), t.addEventListener("timeupdate", this.eventObject.timeupdate)) : this.showLiveFixMarquee())
				}
			},
			{
				key: "setStyle1Text",
				value: function() {
					this.styleE1 && this.marqueeWrap && (this.styleE1.textContent = g.getStyleString(this.marqueeWrap, this.legalPstring))
				}
			},
			{
				key: "setStyle2Text",
				value: function() {
					this.styleE2 && this.marqueeChild && (this.styleE2.textContent = g.getStyleString(this.marqueeChild, this.legalString))
				}
			},
			{
				key: "countChildWidth",
				value: function() {
					var t = document.createElement("div");
					t.setAttribute("style", this.childrenDataString),
					t.textContent = this.options.content,
					t.style.visibility = "hidden",
					t.style.position = "fixed";
					var e = document.querySelector("body") || document.querySelector("html") || document;
					e.appendChild(t);
					var i = t.clientWidth;
					return setTimeout(function() {
						e.removeChild(t)
					},
					16),
					i
				}
			},
			{
				key: "initElement",
				value: function() {
					var t = this.video && this.video.paused ? this.hideParentDataString: this.parentDataString;
					this.removeMarqueeWrap(),
					this.legalPstring = t,
					this.marqueeWrap = g.createParentElement(),
					this.marqueeChild = g.createRandomElement(),
					this.legalString = this.childrenDataString,
					this.marqueeChild.textContent = this.options.content,
					this.marqueeWrap.appendChild(this.marqueeChild),
					this.wrap.insertBefore(this.marqueeWrap, this.video.nextSibling),
					this.setStyle1Text(),
					this.setStyle2Text(),
					this.legalRemove = !1
				}
			},
			{
				key: "timeupdate",
				value: function() {
					if (this.video) {
						var t = this.fixMarqueeData,
						e = t.vidData,
						i = t.style,
						n = t.cycleTime,
						r = this.video.currentTime % n;
						if ( - 1 !== t.index) {
							var a = e[t.index].interval;
							if (r >= a[0] && r < a[1]) return
						}
						var o = e.findIndex(function(t) {
							return r >= t.interval[0] && r < t.interval[1]
						});
						if (t.index !== o) {
							if (this.removeFixMarquee(), -1 !== o) {
								var s = e[o];
								t.el = g.createFixMarquee(s.position, this.options.content, i),
								this.wrap.insertBefore(t.el, this.video.nextSibling)
							}
							t.index = o
						}
					}
				}
			},
			{
				key: "removeFixMarquee",
				value: function() {
					if (this.fixMarqueeData && this.fixMarqueeData.el) try {
						g.removeChild(this.fixMarqueeData.el)
					} catch(t) {
						console.warn(t)
					}
				}
			},
			{
				key: "showFixMarquee",
				value: function() {
					if (this.vid) {
						var t = ie({},
						re);
						delete t.bottom;
						var e = g.convertVid(this.vid, this.fixMarqueeHideInterval),
						i = ie({},
						this.marqueeData);
						i.alpha = .01,
						this.fixMarqueeData = {
							style: g.makeStyleString(t) + g.makeStyleString(g.mixOption({},
							i)),
							index: -1,
							vidData: e,
							cycleTime: e.reduce(function(t, e) {
								return t + e.seconds + 20
							},
							0)
						}
					}
				}
			},
			{
				key: "showLiveFixMarquee",
				value: function() {
					var o = this,
					s = ie({},
					re),
					l = ie({},
					ne, {
						alpha: .01,
						fontSize: "14",
						filter: "on",
						fontColor: "0xffffff"
					});
					this.liveFixMarquee = {
						style: "",
						clock: NaN,
						el: g.createRandomElement(5),
						styleEl: g.createStyle(),
						clear: function() {
							o.liveFixMarquee.clock && clearTimeout(o.liveFixMarquee.clock),
							o.liveFixMarquee.clock = NaN
						},
						append: function() {
							o.wrap.insertBefore(o.liveFixMarquee.el, o.video.nextSibling),
							o.wrap.appendChild(o.liveFixMarquee.styleEl)
						},
						remove: function() {
							g.removeChild(o.liveFixMarquee.el),
							g.removeChild(o.liveFixMarquee.styleEl)
						},
						initElement: function() { (o.liveFixMarquee.el = g.createRandomElement(5)).textContent = o.options.content,
							o.liveFixMarquee.append()
						},
						countStyle: function() {
							var t = o.wrap,
							e = t.clientWidth,
							i = t.clientHeight,
							n = Math.floor(Math.random() * (e - 16 * o.options.content.length)),
							r = g.countTop(i, 16, 1),
							a = g.makeStyleString(s) + g.makeStyleString(g.mixOption({
								top: "".concat(r, "px"),
								left: "".concat(n, "px")
							},
							l));
							o.liveFixMarquee.styleEl.textContent = g.getStyleString(o.liveFixMarquee.el, a)
						}
					},
					this.showLiveFixMarqueeStyle()
				}
			},
			{
				key: "showLiveFixMarqueeStyle",
				value: function() {
					var e = this;
					this.liveFixMarquee.initElement(),
					this.liveFixMarquee.countStyle(); !
					function t() {
						e.liveFixMarquee.clock = setTimeout(function() {
							e.liveFixMarquee.remove(),
							e.liveFixMarquee.initElement(),
							e.liveFixMarquee.countStyle(),
							t()
						},
						e.interval || 3e3)
					} ()
				}
			},
			{
				key: "removeLiveFixMarquee",
				value: function() {
					this.liveFixMarquee && (this.liveFixMarquee.clear(), this.liveFixMarquee.remove(), this.liveFixMarquee = null)
				}
			},
			{
				key: "showStyle1",
				value: function(t) {
					var e = this,
					i = 0 < arguments.length && void 0 !== t ? t: 1;
					this.countStyle1Position(i),
					this.clock = setInterval(function() {
						e.initElement(),
						e.countStyle1Position(i)
					},
					1e3 * (this.options.speed + 2))
				}
			},
			{
				key: "showStyle2",
				value: function(t) {
					var e = this,
					i = 0 < arguments.length && void 0 !== t ? t: 1;
					this.countStyle2Position(i),
					this.clock2 = setTimeout(function() {
						e.removeMarqueeWrap()
					},
					this.lifeTime),
					this.clock = setInterval(function() {
						e.clock2 && clearTimeout(e.clock2),
						e.initElement(),
						e.countStyle2Position(i),
						e.clock2 = setTimeout(function() {
							e.removeMarqueeWrap()
						},
						e.lifeTime)
					},
					this.interval + this.lifeTime)
				}
			},
			{
				key: "showStyle3",
				value: function() {
					var t = this;
					this.countStyle1Position(),
					this.clock = setInterval(function() {
						t.initElement(),
						t.countStyle1Position()
					},
					this.interval + 1e3 * this.options.speed);
					var e = 0;
					this.clock2 = setInterval(function() {
						t.countStyle3Position(e),
						e = e ? 0 : 1
					},
					3e3)
				}
			},
			{
				key: "initMarqueeWrap",
				value: function() {
					var t = this;
					this.marqueeWrap && (this.marqueeWrap.onclick = function() {
						t.video && t.video.click()
					})
				}
			},
			{
				key: "countStyle1Position",
				value: function(t) {
					var e = 0 < arguments.length && void 0 !== t ? t: 1;
					if (this.marqueeWrap && this.childHeight && this.childWidth) {
						var i = te(this.video) || 1,
						n = this.marqueeWrap,
						r = n.clientWidth,
						a = n.clientHeight;
						this.top = g.countTop(a, this.childHeight, e, i),
						this.left = r,
						this.legalString = "".concat(this.childrenDataString.replace(/translateX\(0\)/g, "translateX(-" + (r + this.childWidth) + "px)"), "top:").concat(this.top, "px"),
						this.setStyle2Text()
					}
				}
			},
			{
				key: "countStyle2Position",
				value: function(t) {
					var e = 0 < arguments.length && void 0 !== t ? t: 1;
					if (this.marqueeWrap && this.childHeight && this.childWidth) {
						var i = this.marqueeWrap,
						n = i.clientWidth,
						r = i.clientHeight,
						a = te(this.video) || 1;
						this.left = Math.floor(Math.random() * (n - this.childWidth)),
						this.top = g.countTop(r, this.childHeight, e, a),
						this.legalString = "".concat(this.childrenDataString.replace("left:100%", "left:" + this.left + "px"), "top:").concat(this.top, "px"),
						this.setStyle2Text()
					}
				}
			},
			{
				key: "countStyle3Position",
				value: function(t) {
					this.legalPstring = this.parentDataString.replace("opacity:1", "opacity:".concat(t)),
					this.setStyle1Text()
				}
			},
			{
				key: "removeMarqueeWrap",
				value: function() {
					this.legalRemove = !0;
					try {
						g.removeChild(this.marqueeWrap)
					} catch(t) {}
				}
			},
			{
				key: "removeStyle",
				value: function() {
					this.styleE1 && g.removeChild(this.styleE1),
					this.styleE2 && g.removeChild(this.styleE2)
				}
			},
			{
				key: "destroy",
				value: function() {
					var t = this.setting;
					if (this.existClock && clearInterval(this.existClock), this.removeMarqueeWrap(), this.removeStyle(), this.removeFixMarquee(), this.removeLiveFixMarquee(), this.clock && clearInterval(this.clock), 3 === t && this.clock2 && clearInterval(this.clock2), 2 !== t && 5 !== t && 7 !== t || !this.clock2 || clearTimeout(this.clock2), this.video) for (var e in this.eventObject) this.video.removeEventListener(e, this.eventObject[e])
				}
			}], [{
				key: "makeStyleString",
				value: function(t) {
					var e = "";
					for (var i in t) e += "".concat(i, ":").concat(t[i], " !important;");
					return e
				}
			},
			{
				key: "createRandomElement",
				value: function(t) {
					var e = 0 < arguments.length && void 0 !== t ? t: 4;
					return document.createElement(et.randomString(e))
				}
			},
			{
				key: "createParentElement",
				value: function() {
					return g.createRandomElement()
				}
			},
			{
				key: "parseColor",
				value: function(t) {
					for (var e = ( + t).toString(16), i = 6 - e.length, n = 0; n < i; n++) e = "0" + e;
					return "#" + e
				}
			},
			{
				key: "mixOption",
				value: function(t, e) {
					return e.fontSize && (t["font-size"] = Math.max( + e.fontSize, 12) + "px"),
					e.fontColor && (t.color = et.parseColor(e.fontColor)),
					e.alpha && ("string" == typeof e.alpha && "%" === e.alpha.slice( - 1) ? t.opacity = A()(e.alpha) / 100 + "": t.opacity = Math.max( + e.alpha, .01) + ""),
					e.speed && (t.transition = "transform ".concat(e.speed / 10, "s linear"), t["-webkit-transition"] = "-webkit-transform ".concat(e.speed / 10, "s linear")),
					"on" === e.filter && (t["text-shadow"] = e.filterColor ? "0 0 2px ".concat(et.parseColor(e.filterColor)) : "0 0 2px #000000"),
					t
				}
			},
			{
				key: "createStyle",
				value: function() {
					var t = document.createElement("style");
					return t.setAttribute("type", "text/css"),
					t
				}
			},
			{
				key: "getStyleString",
				value: function(t, e) {
					var i = 1 < arguments.length && void 0 !== e ? e: "";
					return "".concat(t.nodeName.toLowerCase(), "{").concat(i, "}")
				}
			},
			{
				key: "convertVid",
				value: function(t, e) {
					var o = 1 < arguments.length && void 0 !== e ? e: 20,
					s = t.slice(0, 32),
					l = 0;
					return pt()(new Array(8)).reduce(function(t, e, i) {
						var n = s.slice(4 * i, 4 * (i + 1)),
						r = A()(n[2], 16) + A()(n[3], 16) + 30,
						a = l + r;
						return t.push({
							content: n,
							seconds: r,
							position: A()(n.slice(0, 2), 16) % 4,
							interval: [l, a]
						}),
						l = a + o,
						t
					},
					[])
				}
			},
			{
				key: "createFixMarquee",
				value: function(t, e, i) {
					var n, r = 1 < arguments.length && void 0 !== e ? e: "",
					a = 2 < arguments.length && void 0 !== i ? i: "",
					o = g.createRandomElement();
					return o.setAttribute("style", a + g.makeStyleString((n = {},
					G()(n, t % 2 == 0 ? "left": "right", "20px"), G()(n, 1 < t ? "bottom": "top", "20px"), n))),
					o.textContent = r,
					o
				}
			},
			{
				key: "countTop",
				value: function(t, e, i, n) {
					var r = 2 < arguments.length && void 0 !== i ? i: 1,
					a = t * (1 - (3 < arguments.length && void 0 !== n ? n: 1)) / 2,
					o = t - e - 2 * a,
					s = Math.floor(Math.random() * (o * r));
					return (s < o * r / 2 ? s: o * (1 - r) + s) + a
				}
			}]),
			g
		} (),
		se = function() {
			function h(t, e) {
				b()(this, h),
				this.options = t,
				this.control = e,
				this.styleString = h.createStyleString(t, e),
				this.style = f.a.createElement("style"),
				this.style.setAttribute("type", "text/css"),
				this.style.textContent = this.styleString,
				this.appendToDoc()
			}
			return x()(h, [{
				key: "appendToDoc",
				value: function() {
					f.a.querySelector("head").appendChild(this.style)
				}
			},
			{
				key: "destroy",
				value: function() {
					f.a.querySelector("head").removeChild(this.style)
				}
			}], [{
				key: "parseColor",
				value: function(t, e) {
					for (var i = [], n = 0; n < 3; n++) i.push( + ("0x" + t.slice(2 * n + 1, 2 * n + 3)));
					return void 0 !== e && e <= 100 && 0 <= e ? "rgba(".concat(i.join(","), ",").concat(e / 100, ")") : "rgb(".concat(i.join(","), ")")
				}
			},
			{
				key: "createStyleString",
				value: function(t, e) {
					var i, n = e.skinSetting,
					r = n.alpha,
					a = n.color,
					o = n.renderColor,
					s = n.alpha2,
					l = h.parseColor(t.skincolor, r),
					c = h.parseColor(t.pColor || a, 100);
					t.base || (t.base = "control"),
					"panel" === t.base ? (c = h.parseColor(t.skincolor, 100), e.wrap.addClass("pv-base-panel")) : (l = h.parseColor(a, r), e.wrap.addClass("pv-base-control")),
					s && (i = h.parseColor(t.skincolor, s));
					t.zColor;
					var u = ".".concat(e.randomClass),
					d = "panel" === t.base ? o(l, u, i) : "";
					return '\n    @charset "UTF-8";\n    .pv-video-player'.concat(u, " .pv-active {\n      color: ").concat(c, ";\n    }\n    ").concat(it.a.isIpad ? "": "\n    ".concat(u, " .pv-stream-select>div:hover,\n    ").concat(u, " .pv-quality-select>div:hover,\n    ").concat(u, " .pv-rate-select>div:hover,\n    ").concat(u, " .pv-setting-choose>span:hover,\n    ").concat(u, " .pv-controls button:hover,\n    ").concat(u, " .pv-cover>span:hover,\n    ").concat(u, " .pv-current-select:hover,\n    ").concat(u, " .pv-skin-gold-menu>div:hover {\n      color: ").concat(c, ";\n    }\n    "), "\n    ").concat(u, " .pv-volume-current,\n    ").concat(u, " .pv-progress-current-bg,\n    ").concat(u, " .pv-controls .pv-btn-radius:hover button span,\n    ").concat(u, " .pv-ppt-list.pv-active,\n    ").concat(u, " .pv-ppt-tab > span.pv-active:after,\n    ").concat(u, " .pv-currenttime > a {\n      background-color: ").concat(c, ";\n    }\n    ").concat(d, "\n    ").concat(u, ".pv-skin_red-player .pv-quality-select>div.pv-active>span,\n    ").concat(u, ".pv-skin_red-player .pv-setting-choose>.pv-active,  {\n      background-color: ").concat(c, ";\n      color: #fff;\n    }\n    ").concat(u, " .pv-ppt-list.pv-active .pv-ppt-list-img {\n      border-color: ").concat(c, ";\n    }\n    ").concat(u, ".pv-skin_red-player .pv-base-panel .pv-quality-select>div.pv-active>span {\n      background-color: #fff;\n      color: ").concat(c, ";\n    }\n    ").concat(u, ".pv-skin_red-player .pv-dm-wrap>span {\n      background: ").concat(c, "\n    },\n    ").concat(u, ".pv-skin_red-player .pv-dm-wrap>span:after {\n      background-color: ").concat(c, "\n    }\n    ").concat(u, ".pv-skin_red-player .pv-base-panel .pv-dm-wrap>span.pv-icon-btn-Bullet-on,\n    ").concat(u, ".pv-skin_red-player .pv-base-panel .pv-active {\n      color: ").concat(c, ";\n    }\n    ").concat(u, ".pv-skin_red-player .pv-base-panel .pv-dm-wrap>span.pv-icon-btn-Bullet-on:after {\n      border-color: ").concat(c, ";\n      background-color: #fff;\n    }\n    ")
				}
			},
			{
				key: "lighten",
				value: function(t, e) {
					for (var i = [], n = 0; n < 3; n++) {
						var r = +("0x" + t.slice(2 * n + 1, 2 * n + 3)) + Math.round(255 * e);
						r = 255 < r ? 255 : r,
						i.push(r.toString(16))
					}
					return "#" + i.join("")
				}
			}]),
			h
		} (),
		le = function() {
			function f(t, e) {
				b()(this, f),
				this.el = t,
				this.thumbnail = this.el.children().first(),
				this.time = this.el.children().last(),
				e ? (this.thumbnail.css("display", "block").addClass("pv-has-thumbnail"), this.imgUrl = e, this.offsetW = 166, this.init()) : (this.offsetW = 50, this.thumbnail.css("display", "none").removeClass("pv-has-thumbnail"))
			}
			return x()(f, [{
				key: "init",
				value: function() {
					this.thumbnail.css({
						display: "block",
						backgroundImage: "url(".concat(this.imgUrl, ")")
					})
				}
			},
			{
				key: "render",
				value: function(t, e, i, n, r) {
					var a = 3 < arguments.length && void 0 !== n ? n: {},
					o = 4 < arguments.length && void 0 !== r ? r: {},
					s = this.offsetW,
					l = "";
					if (a.text && (l = "<br>".concat(a.text)), a.btnHref && (l += '<br><a href="'.concat(a.btnHref, '" target="_blank">').concat(a.btnDesc, "</a>")), this.time.html("".concat(et.getTime(Math.ceil(t * i))).concat(l)), this.imgUrl) {
						var c = o.duration || i,
						u = f.checkDuration(c),
						d = o.start || 0,
						h = 160 * Math.floor((i * t + d) / u);
						this.thumbnail.css({
							backgroundPosition: "".concat(h % 8e3 * -1, "px ").concat(90 * Math.floor(h / 8e3) * -1, "px")
						})
					} else a.text && (s = this.el.width());
					var p = e * t - s / 2 < 0 ? 0 : e * t - s / 2;
					p = e - s <= p ? e - s: p,
					this.el.css("transform", "translateX(" + p + "px)")
				}
			}], [{
				key: "checkDuration",
				value: function(t) {
					return 600 < t ? 15 : !(t < 300) && 5
				}
			}]),
			f
		} (),
		ce = function() {
			function i(t, e) {
				b()(this, i),
				this.wrap = t.wrap,
				this.cls = t.hideButton,
				this.cls2 = t.hideButton2,
				this.cls3 = t.hideButton3,
				this.size = t.size,
				this.resizeDelay = 750,
				this.player = e,
				this.currentW = "",
				this.currentH = Math.floor(this.wrap.height()),
				this.init()
			}
			return x()(i, [{
				key: "init",
				value: function() {
					var e = this,
					i = !0,
					n = !0,
					r = !0;
					this.clock = setInterval(function() {
						var t = Math.floor(e.width);
						t !== e.currentW && (e.currentW = t, e.currentH = Math.floor(e.height), e.player.trigger(ut.resize, t, e.currentH), t < e.size[0] && i ? (e.wrap.addClass(e.cls), i = !1) : t > e.size[0] && !i && (e.wrap.removeClass(e.cls), i = !0), t < e.size[1] && n ? (e.wrap.addClass(e.cls2), n = !1) : t > e.size[1] && !n && (e.wrap.removeClass(e.cls2), n = !0), e.size[2] && t < e.size[2] && r ? (e.wrap.addClass(e.cls3), r = !1) : e.size[2] && t > e.size[2] && !r && (e.wrap.removeClass(e.cls3), r = !0))
					},
					this.resizeDelay)
				}
			},
			{
				key: "destroy",
				value: function() {
					clearInterval(this.clock),
					this.wrap.removeClass(this.cls),
					this.wrap.removeClass(this.cls2)
				}
			},
			{
				key: "width",
				get: function() {
					return this.wrap.width()
				}
			},
			{
				key: "height",
				get: function() {
					return this.wrap.height()
				}
			}]),
			i
		} (),
		ue = k(18);
		function de() {
			return '\n  <div class="'.concat(ad.wrap, '">\n    <video autoplay="autoplay" preload="preload" class="').concat(ad.video, '"></video>\n    <div class="').concat(ad.img, '"></div>\n    <a class="').concat(ad.url, '" href="javascript:;" target="_blank"></a>\n    <div class="pv-as-time-wrap">\n      <div class="pv-as-time-countdown">').concat(lang.adDes, '：<span class="').concat(ad.time, '"></span> ').concat(lang.second, ' <span class="').concat(ad.skip, ' pv-hide">').concat(lang.skip, '</span></div>\n      \x3c!-- <div class="pv-as-time-volume"><span class="pv-iconfont ').concat(volume.on, " ").concat(ad.volume, '"></span></div> --\x3e\n    </div>\n  </div>\n  ')
		}
		function he() {
			return '\n    <div class="pv-as-pause '.concat(hide, '">\n      <div>\n        <a href="javascript:;" target="_blank"></a>\n        <span class="').concat(ad.imgClose, '">×</span>\n      </div>\n    </div>\n  ')
		}
		function pe() {
			return '\n    <div class="pv-as-popup">\n      <a href="javascript:;" target="_blank"></a>\n      <span class="'.concat(ad.imgClose, '">×</span>\n    </div>\n  ')
		}
		var fe = function() {
			function l(t, e, i) {
				var n = 3 < arguments.length && void 0 !== arguments[3] && arguments[3];
				b()(this, l),
				this.hideStartAd = n,
				this.player = t,
				this.lang = t.lang,
				this.loop = this.player.param.loop,
				this.res = e,
				this.rej = i,
				this.adSkip = t.param.adSkip,
				this.clockSkip = void 0,
				this.pastTime = 0;
				var r = t.param.adMatter || t.videoInfo.adMatter || []; ! 0 === t.param.ban_ad && (r = []),
				this.adMatter = l.parseAdMatter(r),
				this.cataid = this.player.videoInfo.cataid + "",
				this.catatree = this.player.videoInfo.catatree.split(","),
				this.currentData = null,
				this.status = "NOT_PLAY",
				this.endEventName = void 0,
				this.shouldMuted = void 0,
				this.playlists = {},
				this.playlist = {
					start: {
						time: 0,
						data: []
					},
					pause: {
						data: []
					},
					end: {
						time: 0,
						data: []
					},
					popup: {
						time: 0,
						data: []
					}
				},
				this.playEvent = function() {},
				this.getPlayList()
			}
			return x()(l, [{
				key: "selector",
				get: function() {
					var t = dt.a.ad;
					return {
						time: t.time,
						url: t.url,
						img: t.img,
						close: t.imgClose,
						skip: t.skip
					}
				}
			},
			{
				key: "playing",
				get: function() {
					var t = this.status;
					return "END_AD_PLAYING" === t || "START_AD_PLAYING" === t || "START_AD_READY" === t
				}
			},
			{
				key: "videoAd",
				get: function() {
					return this.currentData && 2 === this.currentData.adtype
				}
			}], [{
				key: "statisticAd",
				value: function(t, e) {
					_({
						url: l.statisticUrl,
						dataType: "jsonp",
						data: {
							adid: t || 0,
							type: e
						}
					})
				}
			},
			{
				key: "parseAdMatter",
				value: function(t) {
					return t.map(function(t) {
						var e = m()({},
						t);
						return e.cataid || (e.cataid = 1),
						e.addrurl || (e.addrurl = "javascript:;"),
						e.timesize || (e.timesize = 0),
						e
					})
				}
			}]),
			x()(l, [{
				key: "init",
				value: function() {
					var a = this,
					n = this.player;
					for (var t in this.videoWrap = Object(d.a)(Object(ue.a)(de, dt.a, this.lang)), this.$video = this.videoWrap.children("." + dt.a.ad.video), this.video = this.$video.dom[0], this.imgWrap = Object(d.a)(Object(ue.a)(he, dt.a)), this.videoWrap.insertAfter(n.$video), this.player.videoWrap.append(this.imgWrap), n.param.autoplay || (this.video.autoplay = !1, this.player.pauseStyle()), this.selector) this[t] = this.videoWrap.find(".".concat(this.selector[t]));
					if (this.close = this.imgWrap.find("." + dt.a.ad.imgClose), this.pauseUrl = this.imgWrap.find("a"), !n.adStatus.hidePlayStartAd && this.hasStartAd) {
						this.status = "START_AD_READY";
						var r = function() {
							a.playEvent = function() {
								a.setupPlay(),
								a.player.Elements.playpause.off("click", a.playEvent),
								a.player.coverPlay.off("click", a.playEvent)
							},
							a.player.coverPlay.on("click", a.playEvent),
							a.player.Elements.playpause.on("click", a.playEvent)
						};
						n.param.autoplay ? n.autoplay.bind(function(t, e) {
							var i = n.autoplay.mutedPlay; ! t || t && e && !i ? (r(), n.showCover()) : (a.shouldMuted = e, a.startAd())
						}) : r()
					} else this.res();
					this.hasPauseAd && this.pauseAd(),
					this.hasPopupAd && this.popupAd(),
					this.endAdshouldPlay && (this.player.video.loop = !1, this.endAd()),
					this.url.on("click",
					function() {
						l.statisticAd(a.currentData.adid, 0)
					}),
					!1 !== this.adSkip ? (!0 === this.adSkip && this.skip.removeClass("pv-hide"), this.skip.on("click",
					function() {
						if (!0 === a.adSkip)"START_AD_PLAYING" === a.status && (it.a.isIpad && (a.player.autoplay.onceSupport = !0), a.startAdEndHandler()),
						"END_AD_PLAYING" === a.status && a.endAdEndHandler();
						else {
							clearTimeout(a.clock),
							clearTimeout(a.clockSkip);
							for (var t = "START_AD_PLAYING" === a.status ? "start": "end", e = a.playlist[t], i = e.timeAry, n = e.time, r = 0; r < i.length; r++) if (a.pastTime <= i[r]) {
								a.pastTime = i[r];
								break
							}
							a.setRender(t, n - a.pastTime)
						}
					}), this.$video.on("volumechange",
					function() {
						a.video.muted || (a.shouldMuted = !1),
						it.a.isIpad ? a.player.controller.renderVolumeBtn(!a.video.muted) : a.player.controller.renderVolume(a.video)
					})) : this.skip.remove()
				}
			},
			{
				key: "setupPlay",
				value: function() {
					this.player.hideCover(),
					this.startAd()
				}
			},
			{
				key: "timeRender",
				value: function(t, i) {
					var n = this,
					r = (t.data, t.timeAry),
					a = t.time;
					this.clock = null,
					this.time.html(a - this.pastTime);
					i(r.indexOf(this.pastTime), this.pastTime, a),
					function e() {
						n.clock = setTimeout(function() {++n.pastTime,
							n.time.html(a - n.pastTime);
							var t = r.indexOf(n.pastTime); - 1 !== t && i(t, n.pastTime, a),
							n.pastTime < a && e()
						},
						1e3)
					} ()
				}
			},
			{
				key: "mediaRender",
				value: function(t) {
					var e = this.$video,
					i = this.video,
					n = this.url,
					r = this.img;
					i.pause(),
					1 === t.adtype ? (e.css("display", "none"), r.css({
						display: "block",
						backgroundImage: "url(".concat(t.matterurl, ")"),
						backgroundSize: "100% 100%",
						backgroundRepeat: "no-repeat"
					})) : (r.css("display", "none"), e.css("display", "block"), i.src = t.matterurl, i.load(), this.shouldMuted ? (i.muted = !0, this.player.volume = 0) : (this.player.volume = this.player.globalVolume, this.player.controller.renderCurrentStyle(this.player.globalVolume)), i.play()),
					n.attr("href", t.addrurl)
				}
			},
			{
				key: "popupAd",
				value: function() {
					var e = this,
					i = this.player,
					n = this.parsePopupAd(this.playlist.popup.data);
					i.on(ut.timeupdate,
					function() {
						if (i.video) {
							var t = "t".concat(Math.floor(i.video.currentTime));
							n[t] && (n[t].forEach(function(t) {
								e.renderPopupAd(t)
							}), delete n[t])
						}
					})
				}
			},
			{
				key: "destroyPopupAd",
				value: function() {
					this.player.videoWrap.find(".pv-as-popup").remove()
				}
			},
			{
				key: "renderPopupAd",
				value: function(t) {
					var e = Object(d.a)(Object(ue.a)(pe, dt.a)).addClass("pv-as-popup-".concat(t.poplocation)),
					i = Object(d.a)("<img />").attr("src", t.matterurl),
					n = !1;
					e.append(i),
					this.player.videoWrap.append(e),
					e.find("." + dt.a.ad.imgClose).on("click",
					function() {
						e.remove(),
						n = !0
					}),
					e.find("." + dt.a.ad.imgClose).on("click",
					function() {
						e.remove(),
						n = !0
					}),
					e.find("a").attr("href", t.addrurl).on("click",
					function() {
						l.statisticAd(t.adid, t.adtype)
					});
					setTimeout(function() {
						n || (e.remove(), n = !0)
					},
					1e3 * t.timesize);
					return function() {
						e.remove(),
						n = !0
					}
				}
			},
			{
				key: "parsePopupAd",
				value: function(t) {
					var i = {};
					return t.forEach(function(t) {
						var e = "t".concat(t.popuptime);
						i[e] || (i[e] = []),
						i[e].push(t)
					}),
					i
				}
			},
			{
				key: "hideVideoWrap",
				value: function() {
					this.videoWrap.css("display", "none")
				}
			},
			{
				key: "showVideoWrap",
				value: function() {
					this.videoWrap.css("display", "block")
				}
			},
			{
				key: "renderSkip",
				value: function() {
					var t = this;
					if (!0 === this.adSkip ? this.skip.removeClass("pv-hide") : this.skip.addClass("pv-hide"), this.currentData.skipenabled) {
						var e = 0 < this.currentData.skiptime ? 1e3 * this.currentData.skiptime: 0;
						this.clockSkip = setTimeout(function() {
							t.skip.text(t.currentData.skipbutton || t.lang.skip).removeClass("pv-hide")
						},
						e)
					}
				}
			},
			{
				key: "switchNextAd",
				value: function() {
					this.renderSkip(),
					this.mediaRender(this.currentData),
					l.statisticAd(this.currentData.adid, 1)
				}
			},
			{
				key: "startAd",
				value: function() {
					this.player.Elements.playpause.removeClass(dt.a.playpause.play).addClass(dt.a.playpause.pause),
					this.showVideoWrap(),
					this.status = "START_AD_PLAYING";
					this.playlist.start.data;
					this.pastTime = 0,
					this.setRender("start", this.playlist.start.time),
					this.player.wrap.removeClass(dt.a.paused)
				}
			},
			{
				key: "setRender",
				value: function(n) {
					var r = this,
					t = "start" === n ? this.playlist.start: this.playlist.end,
					a = t.data;
					this.timeRender(t,
					function(t, e, i) {
						e === i ? ("start" === n ? r.startAdEndHandler() : r.endAdEndHandler(), r.currentData = null) : (r.currentData = a[t], r.switchNextAd())
					})
				}
			},
			{
				key: "startAdEndHandler",
				value: function() {
					this.destroyStartAd(),
					this.status = "START_AD_END",
					this.player.adStatus.hidePlayStartAd = !0,
					this.hideVideoWrap(),
					this.player.coverPlay.off("click", this.playEvent),
					this.player.Elements.playpause.off("click", this.playEvent),
					this.res(!0)
				}
			},
			{
				key: "destroyStartAd",
				value: function() {
					this.video && this.video.pause(),
					clearTimeout(this.clock),
					clearTimeout(this.clockSkip)
				}
			},
			{
				key: "destroyEndAd",
				value: function() {
					this.video && this.video.pause(),
					clearTimeout(this.clock),
					clearTimeout(this.clockSkip)
				}
			},
			{
				key: "endAd",
				value: function() {
					var e = this;
					this.endAdEvent = function() {
						e.status = "END_AD_PLAYING";
						var t = e.playlist.end;
						t.time,
						t.data;
						setTimeout(function() {
							e.pastTime = 0,
							e.setRender("end", e.playlist.end.time),
							e.showVideoWrap()
						},
						0),
						e.player.wrap.removeClass(dt.a.paused),
						e.player.pip && e.player.pip.exit()
					},
					this.player.hasTail ? this.endEventName = ut.tailEnded: this.endEventName = ut.ended,
					this.player.on(this.endEventName, this.endAdEvent)
				}
			},
			{
				key: "endAdEndHandler",
				value: function() {
					this.status = "END_AD_END",
					this.player.adStatus.hidePlayEndAd = !0,
					this.destroyEndAd(),
					this.hideVideoWrap(),
					this.hidePauseAd(),
					this.loop ? (this.player.play(), this.player.video.loop = !0) : (this.player.showCover(), this.player.trigger(ut.tailADEnded)),
					this.player.off(this.endEventName, this.endAdEvent)
				}
			},
			{
				key: "resizePauseAd",
				value: function() {
					var t = this.playlist.pause.data[0],
					e = this.player.videoWrap.width(),
					i = this.player.videoWrap.height(),
					n = t.adwidth || .5 * e,
					r = t.adheight || .5 * i,
					a = l.lengthCalculation(e, i, n, r),
					o = a.width,
					s = a.height;
					this.imgWrap.css({
						background: "url(".concat(t.matterurl, ") no-repeat"),
						backgroundSize: "100% 100%",
						width: "".concat(o, "%"),
						height: "".concat(s, "%"),
						maxWidth: "".concat(n, "px"),
						maxHeight: "".concat(r, "px"),
						left: "".concat((100 - o) / 2, "%"),
						top: "".concat((100 - s) / 2, "%")
					})
				}
			},
			{
				key: "pauseAd",
				value: function() {
					var t = this.playlist.pause.data[0],
					e = Object(d.a)('<img src="'.concat(t.matterurl, '" />'));
					this.pauseUrl.append(e),
					this.pauseUrl.attr("href", t.addrurl).on("click",
					function() {
						l.statisticAd(t.adid, 0)
					}),
					this.close.on("click", this.hidePauseAd.bind(this)),
					this.pauseAdShowEvent = this.showPauseAd.bind(this, t.adid, 1),
					this.pauseAdHideEvent = this.hidePauseAd.bind(this),
					this.pauseAdEndEvent = this.hidePauseAd.bind(this),
					this.player.on(ut.playing, this.pauseAdHideEvent),
					this.player.on(ut.pause, this.pauseAdShowEvent),
					this.player.on(ut.ended, this.pauseAdEndEvent)
				}
			},
			{
				key: "pauseAdEnd",
				value: function() {
					this.hidePauseAd()
				}
			},
			{
				key: "showPauseAd",
				value: function(t, e) {
					this.player.hlsLevelsChanges ? this.player.hlsLevelsChanges = !1 : (l.statisticAd(t, e), this.imgWrap.removeClass(dt.a.hide))
				}
			},
			{
				key: "hidePauseAd",
				value: function() {
					this.imgWrap.addClass(dt.a.hide)
				}
			},
			{
				key: "compareCataid",
				value: function(e, t) {
					var i = {};
					e.forEach(function(t) {
						i[t] = {
							time: 0,
							data: []
						}
					});
					var n = [];
					t.forEach(function(t) {
						i[t.cataid] && (i[t.cataid].data.push(t), i[t.cataid].time += t.timesize),
						n.push(e.indexOf(t.cataid + ""))
					});
					var r = i[e[Math.max.apply(null, n)]] || {
						time: 0,
						data: []
					},
					a = [0];
					return r.data.forEach(function(t, e) {
						t.index = e,
						a.push(t.timesize + a[e])
					}),
					r.timeAry = a,
					r
				}
			},
			{
				key: "getPlayList",
				value: function() {
					var i = this;
					this.catatree.forEach(function(t) {
						i.playlists[t] = []
					});
					var n = [],
					r = [],
					a = [],
					o = [];
					this.adMatter.forEach(function(t) {
						var e = +t.location;
						if ((2 == e || 0 !== t.timesize) && 3 != +t.adtype && (!0 !== i.adSkip && !1 !== i.adSkip || (t.skipenabled = !1), 4 != e || 1 === t.adtype)) switch (e) {
						case 1:
							n.push(t);
							break;
						case 2:
							r.push(t);
							break;
						case 3:
							a.push(t);
							break;
						case 4:
							o.push(t);
						default:
							return
						}
					}),
					this.playlist.start = this.compareCataid(this.catatree, n),
					this.playlist.pause = this.compareCataid(this.catatree, r),
					this.playlist.end = this.compareCataid(this.catatree, a),
					this.playlist.popup = this.compareCataid(this.catatree, o),
					this.hasStartAd = !!this.playlist.start.time,
					this.hasPauseAd = 0 < !!this.playlist.pause.data.length,
					this.hasEndAd = !!this.playlist.end.time,
					this.hasPopupAd = !!(0 < this.playlist.popup.data.length && this.playlist.popup.time),
					this.hasAd = this.hasStartAd || this.hasPauseAd || this.hasEndAd || this.hasPopupAd
				}
			},
			{
				key: "destroy",
				value: function() {
					this.hasPauseAd && (this.player.off(ut.playing, this.pauseAdHideEvent), this.player.off(ut.pause, this.pauseAdShowEvent), this.player.off(ut.ended, this.pauseAdEndEvent)),
					this.hasEndAd && this.endEventName && this.endAdEvent && this.player.off(this.endEventName, this.endAdEvent),
					this.hasPopupAd && this.destroyPopupAd(),
					this.hasAd && (this.destroyStartAd(), this.videoWrap.remove(), this.imgWrap.remove())
				}
			},
			{
				key: "endAdshouldPlay",
				get: function() {
					return this.hasEndAd && !this.player.adStatus.hidePlayEndAd
				}
			}], [{
				key: "lengthCalculation",
				value: function(t, e, i, n) {
					var r = .5 * t,
					a = .5 * e,
					o = i / n,
					s = r < i ? r: i,
					l = a < n ? a: n;
					return 1 < o / (t / e) ? l = s / o: s = l * o,
					{
						width: s / t * 100,
						height: l / e * 100
					}
				}
			}]),
			l
		} ();
		fe.statisticUrl = "".concat(et.protocol, "//stat2.polyv.net/log/gganaly.html");
		var ve = fe;
		function ge() {
			var t = /\.\w+$/.exec((0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "").split("?")[0]);
			if (!t) return t;
			var e = t[0].slice(1).toLowerCase();
			return - 1 < me.indexOf(e) ? "image": -1 < Ae.indexOf(e) ? "video": null
		}
		var me = ["jpg", "png", "gif", "jpeg", "webp"],
		Ae = ["mp4"],
		ye = function() {
			function n(t) {
				b()(this, n);
				var e = (this.player = t).videoInfo,
				i = t.param;
				this.showTeaser = e.teaser_show,
				void 0 !== e.player.teaser_show && (this.showTeaser = e.player.teaser_show),
				void 0 !== i.teaser_show && (this.showTeaser = i.teaser_show),
				this.teaserUrl = i.teaser_url || e.player.teaser_url || e.teaser_url,
				this.teaserTime = i.teaser_time || e.player.teaser_time || e.teaser_time,
				this.teaserType = ge(this.teaserUrl),
				this.teaserTime || "image" !== this.teaserType || (this.teaserTime = 3),
				this.wrap = Object(d.a)("<div />").addClass(dt.a.teaser),
				this.skip = i.teaserSkip,
				this.skipBtn = Object(d.a)('<span class="'.concat(dt.a.teaser, '-skip" />')).html(t.lang.skip),
				this.startPlay = !1,
				this.status = "NOT_PLAY",
				this.clock,
				this.hasTeaser || (this.status = "ENDING")
			}
			return x()(n, [{
				key: "hasTeaser",
				get: function() {
					var t = this.teaserType,
					e = !0;
					return t && ("video" !== t || this.teaserTime) || (e = !1),
					0 === this.showTeaser && (e = !1),
					e
				}
			}]),
			x()(n, [{
				key: "register",
				value: function(t) {
					this.startPlay = !!t
				}
			},
			{
				key: "initVolumeBtn",
				value: function() {
					var t = this;
					this.volumeBtn = Object(d.a)('<span class="pv-iconfont '.concat(dt.a.volume.off, " ").concat(dt.a.teaser, '-volume" />')),
					this.wrap.append(this.volumeBtn),
					this.volumeBtn.on("click",
					function() {
						t.video.muted ? (t.volumeBtn.removeClass(dt.a.volume.off).addClass(dt.a.volume.on), t.video.muted = !1) : (t.volumeBtn.removeClass(dt.a.volume.on).addClass(dt.a.volume.off), t.video.muted = !0)
					})
				}
			},
			{
				key: "initVideo",
				value: function(t) {
					var e = this,
					i = document.createElement("video"),
					n = Object(d.a)(i);
					i.src = this.teaserUrl,
					i.preload = !0,
					this.video = i,
					this.wrap.append(i),
					n.on("error",
					function() {
						e.skipTeaser(t)
					}),
					n.on("ended",
					function() {
						e.skipTeaser(t)
					}),
					n.on("volumechange",
					function() {
						it.a.isIpad ? e.player.controller.renderVolumeBtn(!e.video.muted) : e.player.controller.renderVolume(i)
					})
				}
			},
			{
				key: "initImage",
				value: function() {
					this.wrap.css({
						backgroundImage: "url(".concat(this.teaserUrl, ")")
					})
				}
			},
			{
				key: "initSkip",
				value: function(t) {
					var e = this;
					this.wrap.append(this.skipBtn),
					this.skipBtn.on("click",
					function() {
						if (it.a.isIpad) {
							e.player.autoplay.onceSupport = !0
						}
						e.skipTeaser(t)
					})
				}
			},
			{
				key: "skipTeaser",
				value: function(t) {
					this.destroy(),
					this.status = "ENDING",
					t(!0)
				}
			},
			{
				key: "setup",
				value: function(n) {
					var r = this,
					t = (this.wrap, this.skip),
					a = (this.teaserTime, this.player),
					e = a.coverPlay,
					i = a.Elements.playpause;
					"image" === this.teaserType ? this.initImage() : this.initVideo(n),
					t && this.initSkip(n),
					this.wrap.insertAfter(a.$video);
					function o() {
						r.playEvent = function() {
							a.hideCover(),
							r.render(n),
							i.off("click", r.playEvent),
							e.off("click", r.playEvent)
						},
						e.on("click", r.playEvent),
						i.on("click", r.playEvent)
					}
					a.param.autoplay || this.startPlay ? a.autoplay.bind(function(t, e) {
						a.debug && console.log("teaser", t, e);
						var i = a.autoplay.mutedPlay; ! t || t && e && !i ? (o(), a.showCover()) : r.render(n, e)
					}) : o()
				}
			},
			{
				key: "render",
				value: function(t, e) {
					var i = this,
					n = this.player;
					n.playStyle(),
					this.status = "PLAYING",
					this.video && (e ? (this.video.muted = !0, n.volume = 0) : (n.volume = n.globalVolume, n.controller.renderCurrentStyle(n.globalVolume)), this.video.play()),
					this.clock = setTimeout(function() {
						i.destroy(),
						i.status = "ENDING",
						t(!0)
					},
					1e3 * this.teaserTime),
					n.wrap.removeClass(dt.a.paused)
				}
			},
			{
				key: "destroy",
				value: function() {
					clearTimeout(this.clock),
					"video" === this.teaserType && this.video && this.video.pause(),
					this.wrap.remove(),
					this.playEvent && (this.player.coverPlay.off("click", this.playEvent), this.player.Elements.playpause.off("click", this.playEvent))
				}
			}]),
			n
		} (),
		be = k(29),
		we = k.n(be);
		function ke(t, e, i) {
			var n = function(t, e) {
				var i = 1 < arguments.length && void 0 !== e && e,
				n = dt.a.logo;
				if (i) return n.offset;
				var r = "";
				switch (t) {
				case 1:
					r = n.leftTop;
					break;
				case 2:
					r = n.rightTop;
					break;
				case 3:
					r = n.leftDown;
					break;
				case 4:
					r = n.rightDown
				}
				return r
			} (i.position, t),
			r = e ? dt.a.logo.max: "";
			return et.createDom('<div class="pv-logo '.concat(n, " ").concat(i.href ? "": "pv-no-pointer", '">\n    <a href="').concat(i.href || "javascript:;", '" target="_blank">\n      <img src="').concat(i.src, '" width="').concat(i.width, '" height="').concat(i.height, '" class="').concat(r, '">\n    </a>\n  </div>'))
		}
		function Ee(r) {
			var a = new Le.a;
			return a.trigger = function(t) {
				for (var e = arguments.length,
				i = new Array(1 < e ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
				return a.emit.apply(a, [t, t].concat(i)),
				r
			},
			a.triggerEvent = function(t) {
				for (var e = arguments.length,
				i = new Array(1 < e ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
				return a.emit.apply(a, [t].concat(i)),
				r
			},
			a.off = function(t) {
				for (var e = arguments.length,
				i = new Array(1 < e ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
				return a.removeListener.apply(a, [t].concat(i)),
				r
			},
			r.on = function(t, e) {
				return a.on(t, e),
				r
			},
			r.once = function(t) {
				for (var e = arguments.length,
				i = new Array(1 < e ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
				return a.once.apply(a, [t].concat(i)),
				r
			},
			r.off = a.off.bind(a),
			r.trigger = a.trigger.bind(a),
			r.triggerEvent = a.triggerEvent.bind(a),
			a
		}
		function xe(t, e) {
			function i() {
				return t.menu && t.menu.status
			}
			function n() {
				clearTimeout(a),
				i() || (a = setTimeout(function() {
					t.togglePlay()
				},
				250))
			}
			function r() {
				clearTimeout(a),
				i() || t.toggleFullscreen()
			}
			var a;
			return it.a.isIpad || e.on("click", n),
			t.param.allowFullscreen && !it.a.isIpad && e.on("dblclick", r),
			function() {
				it.a.isIpad || (e.off("click", n), t.param.allowFullscreen && e.off("dblclick", r))
			}
		}
		var Te, Se = function() {
			function o(t, e) {
				b()(this, o),
				this.$afterElement = t,
				this.config = e,
				G()(this, "hasOffset", void 0),
				G()(this, "$dom", null),
				G()(this, "$image", null),
				G()(this, "restrictSize", !1),
				G()(this, "imageSize", null),
				G()(this, "cssSize", null);
				var i = e.width,
				n = e.height,
				r = e.resize,
				a = e.position;
				1 !== a && 2 !== a && (e.offsetX = e.offsetY = void 0),
				this.hasOffset = et.isNumber(e.offsetX) && et.isNumber(e.offsetY),
				"auto" === i && "auto" === n ? r || (this.restrictSize = !0) : e.resize = !1,
				"percentage" !== e.lengthUnit || et.isNumber(e.width) || et.isNumber(e.height) || (e.lengthUnit = "pixel")
			}
			return x()(o, [{
				key: "init",
				value: function(e) {
					var i = this,
					n = this.config,
					r = this.hasOffset,
					t = this.restrictSize,
					a = this.$dom = ke(r, t, n);
					this.$image = a.getElementsByTagName("img")[0],
					et.getImageSize(n.src).then(function(t) {
						i.imageSize = t,
						i.appendLogo(),
						r && (i.cssSize = {
							width: a.clientWidth,
							height: a.clientHeight
						}),
						e && e()
					}).
					catch(function(t) {
						console.warn('Logo image "'.concat(n.src, '" load failed'))
					})
				}
			},
			{
				key: "appendLogo",
				value: function() {
					var t = this.$afterElement,
					e = this.$dom,
					i = this.config;
					e && (et.css(e, {
						opacity: String(i.opacity / 100)
					}), t.parentNode.insertBefore(e, t))
				}
			},
			{
				key: "resizeLogo",
				value: function(t, e) {
					var i = this.imageSize,
					n = this.config,
					r = this.$image;
					if (i && r) {
						var a = i.naturalWidth,
						o = i.naturalHeight,
						s = et.calculateNatural(t, e, n.videoRatio).videoW / 640 * 120,
						l = et.calculateNatural(s, s, a / o);
						this.cssSize = {
							width: l.videoW,
							height: l.videoH
						},
						r.setAttribute("width", String(l.videoW)),
						r.setAttribute("height", String(l.videoH))
					}
				}
			},
			{
				key: "resizeLogoPercentage",
				value: function(t, e) {
					var i = this.config,
					n = this.$image;
					if (n) {
						var r = et.calculateNatural(t, e, i.videoRatio),
						a = r.videoW,
						o = r.videoH;
						et.isNumber(i.width) && n.setAttribute("width", "".concat(Math.ceil(a * i.width / 100))),
						et.isNumber(i.height) && n.setAttribute("height", "".concat(Math.ceil(o * i.height / 100)))
					}
				}
			},
			{
				key: "resizeOffset",
				value: function(t, e) {
					if (this.cssSize && this.$dom) {
						var i = this.cssSize,
						n = i.width,
						r = i.height,
						a = this.config,
						o = a.videoRatio,
						s = a.align,
						l = a.offsetX,
						c = a.offsetY,
						u = et.calculateNatural(t, e, o),
						d = u.videoW,
						h = u.videoH,
						p = u.blackW,
						f = u.blackH,
						v = 1,
						g = 1;
						"top" === s ? g = 0 : "bottom" === s ? g = 2 : "left" === s ? v = 0 : "right" === s && (v = 2),
						et.css(this.$dom, {
							left: ((d - n) * (l || 0) / 100 + p * v) / t * 100 + "%",
							top: ((h - r) * (c || 0) / 100 + f * g) / e * 100 + "%"
						})
					}
				}
			},
			{
				key: "resizePosition",
				value: function(t, e) {
					if (this.$dom) {
						var i = this.config,
						n = i.videoRatio,
						r = i.position,
						a = i.align,
						o = et.calculateNatural(t, e, n),
						s = o.blackW,
						l = o.blackH,
						c = 0,
						u = 0;
						switch (r) {
						case 1:
							c = s,
							u = l;
							break;
						case 2:
							c = -1 * s,
							u = l;
							break;
						case 3:
							c = s,
							u = -1 * l;
							break;
						case 4:
							c = -1 * s,
							u = -1 * l
						}
						var d = 1,
						h = 1,
						p = 1,
						f = 1;
						"top" === a ? f = 0 : "bottom" === a ? f = 2 : "left" === a ? p = 0 : "right" === a && (p = 2);
						var v = r % 2 != 0 ? 0 : 2,
						g = r < 3 ? 0 : 2;
						"center" !== a && (d = Math.abs(p - v), h = Math.abs(f - g)),
						et.css(this.$dom, {
							transform: "translate(".concat(c * d, "px, ").concat(u * h, "px)")
						})
					}
				}
			},
			{
				key: "resize",
				value: function(t, e) {
					var i = this.config,
					n = this.hasOffset;
					"percentage" === i.lengthUnit && this.resizeLogoPercentage(t, e),
					i.resize && this.resizeLogo(t, e),
					n ? this.resizeOffset(t, e) : this.resizePosition(t, e)
				}
			},
			{
				key: "destroy",
				value: function() {
					this.$dom && et.removeElement(this.$dom)
				}
			}]),
			o
		} (),
		_e = function() {
			function r(t, e, i) {
				var n = this;
				b()(this, r),
				this.player = t,
				G()(this, "video", void 0),
				G()(this, "videoRatio", void 0),
				G()(this, "align", void 0),
				G()(this, "logoList", void 0),
				G()(this, "config", void 0),
				G()(this, "resizeEvent",
				function(t, e, i) {
					n.logoList && n.logoList.forEach(function(t) {
						t.resize(e, i)
					})
				}),
				this.video = t.video,
				this.videoRatio = t.videoInfo.ratio,
				this.align = t.param.video_align,
				this.config = this.mergeConfig(e, i),
				0 !== this.config.length && this.init()
			}
			return x()(r, [{
				key: "init",
				value: function() {
					var i = this.logoList = [],
					n = this.player;
					this.config.forEach(function(t) {
						var e = new Se(n.cover.dom[0], t);
						e.init(function() {
							e.resize(n.resize.width, n.resize.height)
						}),
						i.push(e)
					}),
					n.on("resize", this.resizeEvent)
				}
			},
			{
				key: "convertPreConfig",
				value: function(t, e) {
					var i = e.logoOffset || t.logoOffset,
					n = {
						opacity: e.logo_alpha || t.logo_diaph || 100,
						href: e.logo_link || t.logo_location,
						position: void 0 !== e.logo_pos ? e.logo_pos: t.logoloca,
						src: e.logo_url || t.logo_url || "",
						width: e.logo_width,
						height: e.logo_height,
						resize: e.logo_resize
					};
					if (i) {
						var r = i.split(",").map(function(t) {
							return Number(t)
						});
						n.offsetX = r[0],
						n.offsetY = r[1]
					}
					return n
				}
			},
			{
				key: "mergeConfig",
				value: function(t, e) {
					var i, r = [];
					i = we()(e) ? e: [this.convertPreConfig(t, e)];
					var a = {
						width: "auto",
						height: "auto",
						opacity: 100,
						position: 0,
						src: "",
						align: this.align || "center",
						videoRatio: this.videoRatio,
						lengthUnit: "pixel"
					};
					return i.forEach(function(t) {
						if (t.src && 0 !== t.position) {
							var e = m()({},
							a, t);
							for (var i in e) {
								var n = i;
								Object.prototype.hasOwnProperty.call(e, n) && (et.hasValue(e[n]) || (e[n] = a[n]))
							}
							r.push(e)
						}
					}),
					r
				}
			},
			{
				key: "destroy",
				value: function() {
					this.logoList && (this.player.off("resize", this.resizeEvent), this.logoList.forEach(function(t) {
						t.destroy()
					}))
				}
			}]),
			r
		} (),
		Ce = k(84),
		Le = k.n(Ce),
		Re = {
			wrapEvent: function(t) {
				t.stopPropagation(),
				this.wrapIn = !0
			},
			docEvent: function() {
				this.wrapIn = !1
			},
			keyEvent: function(t) {
				if (this.wrapIn && this.allow) {
					var e = window.event ? t.keyCode: t.which;
					if (32 === e && (t.preventDefault(), this.player.togglePlay()), 37 === e) {
						var i = this.video.currentTime - this.keyboardSeekTime;
						this.player.banSeek.shouldUpdate(i) && (this.video.currentTime = i)
					}
					if (39 === e) {
						var n = this.video.currentTime + this.keyboardSeekTime;
						this.player.banSeek.shouldUpdate(n) && (this.video.currentTime = n)
					}
					77 === e && this.player.toggleMute(),
					70 === e && this.player.param.allowFullscreen && this.player.toggleFullscreen(),
					38 === e && (t.preventDefault(), this.player.volume = Math.min(this.player.volume + .05, 1)),
					40 === e && (t.preventDefault(), this.player.volume = Math.max(this.player.volume - .05, 0))
				}
			},
			keyDownEvent: function(t) {
				var e = window.event ? t.keyCode: t.which; ! this.wrapIn || 32 !== e && 38 !== e && 40 !== e || t.preventDefault()
			}
		},
		De = function() {
			function e(t) {
				b()(this, e),
				this.player = t,
				this.video = t.video,
				this.wrap = t.wrap,
				this.keyboardSeekTime = (isNaN(A()(t.param.keyboardSeekTime)) ? 15e3: t.param.keyboardSeekTime) / 1e3,
				this.doc = Object(d.a)(f.a),
				this.wrapIn = !0,
				this.allow = !0,
				this.wrapEvent = Re.wrapEvent.bind(this),
				this.docEvent = Re.docEvent.bind(this),
				this.keyEvent = Re.keyEvent.bind(this),
				this.keyDownEvent = Re.keyDownEvent.bind(this),
				this.wrap.on("click", this.wrapEvent),
				this.doc.on("click", this.docEvent),
				this.doc.on("keyup", this.keyEvent),
				this.doc.on("keydown", this.keyDownEvent)
			}
			return x()(e, [{
				key: "setAllow",
				value: function(t) {
					this.allow = t
				}
			},
			{
				key: "destroy",
				value: function() {
					this.wrap.off("click", this.wrapEvent),
					this.doc.off("click", this.docEvent),
					this.doc.off("keyup", this.keyEvent),
					this.doc.off("keydown", this.keyDownEvent)
				}
			}]),
			e
		} (),
		Ie = (k(277),
		function() {
			function r(t) {
				b()(this, r),
				this.wrap = t.wrap.dom[0],
				this.video = t.video,
				this.videoRatio = t.videoInfo.ratio,
				this.saveText = t.lang.save,
				this.previewLayout = void 0
			}
			return x()(r, [{
				key: "setup",
				value: function() {
					var n = this,
					t = this.createButton();
					this.wrap.appendChild(t),
					t.addEventListener("click",
					function() {
						var t = n.video,
						e = n.videoRatio,
						i = r.createCanvas(t, e);
						r.draw(i, t, e),
						n.save(i, "shot_".concat((new Date).getTime(), ".png"))
					})
				}
			},
			{
				key: "createButton",
				value: function() {
					var t = document.createElement("button");
					return t.setAttribute("type", "button"),
					t.setAttribute("class", "pv-screenshot"),
					t
				}
			},
			{
				key: "createPreviewDom",
				value: function() {
					var t = document.createElement("div");
					return t.setAttribute("class", "pv-screenshot-preview"),
					t.insertAdjacentHTML("beforeend", '<img /><span data-screenshot="save">'.concat(this.saveText, '</span><span class="pv-iconfont pv-icon-close-small" data-screenshot="close"></span>')),
					t
				}
			},
			{
				key: "createPreviewDomEvent",
				value: function(i, n) {
					var t = this;
					if (this.previewLayout && i) {
						var e = this.previewLayout;
						e.querySelector('span[data-screenshot="save"]').addEventListener("click",
						function() {
							var t = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
							t.href = i,
							t.download = n;
							var e = document.createEvent("MouseEvents");
							e.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null),
							t.dispatchEvent(e)
						}),
						e.querySelector('span[data-screenshot="close"]').addEventListener("click",
						function() {
							t.previewLayout && (t.wrap.removeChild(t.previewLayout), t.previewLayout = void 0)
						})
					}
				}
			},
			{
				key: "save",
				value: function(t, e) {
					var i = r.getImageData(t);
					if (t.msToBlob) window.navigator.msSaveBlob(i, e);
					else {
						var n = i.replace("image/png", "image/octet-stream");
						this.previewLayout && this.wrap.removeChild(this.previewLayout),
						this.previewLayout = this.createPreviewDom(),
						this.createPreviewDomEvent(n, e),
						this.wrap.appendChild(this.previewLayout),
						this.previewLayout.querySelector("img").src = n
					}
				}
			}], [{
				key: "createCanvas",
				value: function(t, e) {
					var i = document.createElement("canvas"),
					n = et.calculateNatural(t.clientWidth, t.clientWidth, e);
					return i.width = t.videoWidth || n.videoW,
					i.height = t.videoHeight || n.videoH,
					i
				}
			},
			{
				key: "draw",
				value: function(t, e, i) {
					var n = t.getContext("2d"),
					r = et.calculateNatural(e.clientWidth, e.clientWidth, i);
					n.drawImage(e, 0, 0, e.videoWidth || r.videoW, e.videoHeight || r.videoH)
				}
			},
			{
				key: "getImageData",
				value: function(t) {
					return t.msToBlob ? t.msToBlob() : t.toDataURL("image/png")
				}
			},
			{
				key: "cutVideo",
				value: function(t, e) {
					var i = r.createCanvas(t, e);
					return r.draw(i, t, e),
					r.getImageData(i)
				}
			}]),
			r
		} ()),
		Me = function() {
			function i(t) {
				b()(this, i),
				this.player = t,
				this.token = t.token,
				this.userId = void 0,
				this.el = void 0,
				this.wrap = void 0,
				this.timeout = void 0,
				this.resizeEvent = void 0,
				this.userId = this.token.split("-").pop(),
				this.userId && (this.width = 14 * this.userId.length, this.height = 14, this.init())
			}
			return x()(i, null, [{
				key: "createElement",
				value: function(t) {
					var e = document.createElement("o-span");
					return e.setAttribute("class", "pv-opa-tk"),
					e.textContent = t,
					e
				}
			}]),
			x()(i, [{
				key: "init",
				value: function() {
					var e = this;
					this.wrap = this.player.videoWrap.dom[0],
					this.resizeEvent = this.resize.bind(this); !
					function t() {
						e.el = i.createElement(e.userId),
						e.wrap.insertBefore(e.el, e.player.video.nextSibling),
						e.setStyle(e.wrap.clientWidth, e.wrap.clientHeight, e.width, e.height),
						e.timeout = setTimeout(function() {
							e.remove(),
							t()
						},
						1e4)
					} (),
					this.player.on("resize", this.resizeEvent)
				}
			},
			{
				key: "remove",
				value: function() {
					if (this.el) {
						var t = this.el.parentNode;
						t && t.removeChild(this.el)
					}
				}
			},
			{
				key: "setStyle",
				value: function(t, e) {
					if (t * e != 0) {
						var i = this.width,
						n = this.height,
						r = Math.floor(Math.random() * (t - i)),
						a = Math.floor(Math.random() * (e - n));
						this.el && (this.el.style.top = "".concat(a, "px"), this.el.style.left = "".concat(r, "px"))
					}
				}
			},
			{
				key: "resize",
				value: function(t, e, i) {
					this.el && this.setStyle(e, i, this.width, this.height)
				}
			},
			{
				key: "destroy",
				value: function() {
					this.resizeEvent && this.player.off("resize", this.resizeEvent),
					this.remove(),
					this.timeout && clearTimeout(this.timeout)
				}
			}]),
			i
		} (),
		Pe = (Te = {},
		G()(Te, ut.waiting,
		function() {
			this.waiting()
		}), G()(Te, ut.seeked,
		function() {
			this.ending()
		}), G()(Te, ut.timeupdate,
		function() {
			if (this.shouldUpdate && this.video) {
				var t = this.video.currentTime,
				e = this.isChild ? t - this.childVideo.start: t;
				this.Elements.progressCurrent.width(Math.min(100 * e / this.duration, 100) + "%")
			}
		}), G()(Te, ut.loadstart,
		function() {
			this.waiting()
		}), G()(Te, ut.loadedmetadata,
		function() {
			var c = this;
			this.coverObj.show();
			try {
				it.a.isFirefox && (this.video.currentTime = 0)
			} catch(t) {
				console.warn(t)
			}
			if (this.token && (this.opacityToken || (this.opacityToken = new Me(this))), (this.param.originVid && this.hls || this.param.url) && (this.duration = this.video.duration, this.Elements.timeDuration.html(et.getTime(this.duration))), this.setCurrentTime(), this.setBufferd(), this.firstInit) {
				this.param.screenshot && !it.a.isIE11 && new Ie(this).setup(),
				this.firstInit = !1,
				this.Elements.playpause.off("click", this.startPlayHander),
				this.Elements.playpause.on("click", this.EVENT_HANDLER.playEvent.bind(this)),
				this.ppt || (this.offClickEvent = xe(this, this.$video)),
				this.keypress = new De(this);
				this.video;
				var u = this.Elements.progressCurrent,
				t = this.Elements.progressTouch,
				e = (this.Elements.touchTime, new mt.a(t));
				this.isChild;
				e.on("changeEvent",
				function(t, e, i, n, r) {
					var a = c.param.watchEndTime,
					o = c.duration;
					c.shouldUpdate = !r;
					var s = Math.ceil(e * o);
					if (!i) {
						if (a && a < s) return;
						if (!c.banSeek.shouldUpdate(s)) return;
						c.ignoreRespondEvent || (u.css("width", 100 * e + "%"), c.seek(s))
					}
					var l = void 0;
					c.childVideo && (l = {
						start: c.childVideo.start,
						duration: c.originDuration
					});
					c.childVideo && c.childVideo.start,
					Number(c.videoInfo.duration);
					c.touchTime.render(e, n, o, c.keyPoint.getContent(s, n), l)
				}),
				this.$currentRate = this.Elements.rateSelect.children(".".concat(dt.a.active)),
				this.param.speed && this.Elements.rateSelect.on("click", "[data-rate]", this.EVENT_HANDLER.rateEvent.bind(this))
			}
		}), G()(Te, ut.volumechange,
		function() {
			it.a.isIpad ? this.controller.renderVolumeBtn(!this.video.muted) : this.controller.renderVolume(this.video)
		}), G()(Te, ut.canplay,
		function() {
			this.ending()
		}), G()(Te, ut.pause,
		function() {
			it.a.isIE11 && this.video && (this.pausePlaybackRate = this.video.playbackRate),
			this.pauseStyle()
		}), G()(Te, ut.playing,
		function() {
			this.ending(),
			this.playStyle(),
			it.a.isIE11 && (this.video.playbackRate = this.pausePlaybackRate)
		}), G()(Te, ut.ended,
		function() {
			var t = this;
			this.pause(),
			this.Elements.progressCurrent.css("width", "100%"),
			setTimeout(function() {
				t.param.hideRepeat || !t.adStatus.hidePlayEndAd && t.advertising.hasEndAd && "END_AD_END" !== t.advertising.status || t.tail && (!t.tail || "PLAYING" === t.tail.status) || t.showCover()
			},
			0)
		}), G()(Te, ut.error,
		function() {
			var d = this,
			t = this.video.error;
			if (t && console.warn(t), "audio" !== this.mode.status) if (this.videoInfo.keepsource) this.trigger(ut.serverError, "#007");
			else if (this.mp4List) {
				var e = function() {
					var t = d.currentSrc;
					d.errorList.push(t);
					for (var e = !1,
					i = d.mp4List.length,
					n = d.mp4List.slice(0).reverse(), r = function(t) {
						if ( - 1 === d.errorList.indexOf(n[t])) return e = !0,
						d.currentSrc = n[t],
						d.switchVideoSrc(d.currentSrc,
						function() {
							d.Elements.qualityBtn.html(d.quality[i - t - 1]),
							d.$currentBit = d.Elements.qualitySelect.children("div").removeClass(dt.a.active).eq(t).addClass(dt.a.active)
						},
						!0),
						{
							v: {
								v: void 0
							}
						}
					},
					a = 0; a < i; a++) {
						var o = r(a);
						if ("object" === h()(o)) return o.v
					}
					if (!e) {
						var s = d.video,
						l = s.duration,
						c = s.currentTime,
						u = s.loop;
						l && l - c <= 5 ? (console.warn("The error time is less than 5 seconds from the end, skip."), d.switchVideoSrc(d.currentSrc), u ? d.once(ut.canplay,
						function() {
							d.play()
						}) : d.trigger(ut.ended)) : d.trigger(ut.serverError, "#007")
					}
				} ();
				if ("object" === h()(e)) return e.v
			} else this.defaultAudioCodec ? this.trigger(ut.serverError, "#007") : (this.hls.destroy(), this.defaultAudioCodec = "mp4a.40.2", console.warn("Hls error, Switch codec 'mp4a.40.2' to play."), Mi.setVideo.call(this, {
				videoInfo: this.videoInfo,
				playsafe: this.param.playsafe,
				defaultAudioCodec: this.defaultAudioCodec,
				cb: function() {
					d.hls.attachMedia(d.video),
					Mi.hlsEvents.call(d)
				},
				pid: this.statistics.pid
			}))
		}), Te),
		Oe = function() {
			function s(t) {
				b()(this, s),
				this.player = t,
				this.video = t.video,
				t.hasAudioMode || t.hideVideoMode || t.isOriginMp3Url ? (this.status = t.param.priorityMode, this.reset()) : this.status = "video",
				this.isSet = !1,
				this.setClass()
			}
			return x()(s, [{
				key: "resetStatus",
				value: function(t) {
					var e = 0 < arguments.length && void 0 !== t && t;
					this.status = e ? "audio": "video"
				}
			},
			{
				key: "setImageSize",
				value: function() {}
			},
			{
				key: "reset",
				value: function() {
					var t, e, i = this.player;
					this.audioMode && this.audioMode.remove(),
					this.audioMode = i.audioMode = Object(d.a)((t = i.param.loading_bg_img || i.videoInfo.first_image, e = i.lang, '\n  <div class="pv-audio-mode">\n    <div class="pv-audio-mode-bg" style="background-image:url('.concat(t, ')"></div>\n    <div class="pv-audio-mode-bg-color"></div>\n    <div class="pv-audio-mode-container">\n      <div class="pv-audio-mode-cover">\n        <img src="').concat(t, '" class="js-pv-cover">\n      </div>\n      <div class="pv-audio-mode-right">\n        <div>\n          <div>').concat(e.audioPlaying, '</div>\n          <div class="pv-audio-mode-sound js-pv-soundWave"></div>\n          <span class="js-pv-toVideo"><span>').concat(e.toVideo, "</span></span>\n        </div>\n      </div>\n    </div>\n  </div>").trim())),
					this.audioModeCover = this.audioMode.find(".pv-audio-mode-cover"),
					i.audioMode.insertAfter(i.video),
					this.resetBtn(),
					this.resetSoundWave()
				}
			},
			{
				key: "resetSoundWave",
				value: function() {
					for (var t = this.audioMode.find(".js-pv-soundWave"), e = 0; e < 21; e++) t.append("<div><div></div></div>")
				}
			},
			{
				key: "resetBtn",
				value: function() {
					var i = this,
					t = this.player,
					e = t.lang;
					t.Elements.streamBtnLists.dom.forEach(function(t) {
						var e = Object(d.a)(t);
						e.attr("data-mode") === i.status ? e.addClass(dt.a.active) : e.removeClass(dt.a.active)
					}),
					t.Elements.streamBtn.html("audio" === this.status ? e.audioMode: e.videoMode),
					t.hideVideoMode ? this.audioMode.find(".js-pv-toVideo").css("display", "none") : this.audioMode.find(".js-pv-toVideo").on("click",
					function() {
						i.audioToVideo()
					})
				}
			},
			{
				key: "setClass",
				value: function() {
					var t = this.player,
					e = t.controller.wrap;
					"audio" === this.status ? e.addClass(dt.a.stream.audio) : e.removeClass(dt.a.stream.audio),
					t.hasAudioMode && !t.hideVideoMode ? e.removeClass(dt.a.stream.hide) : e.addClass(dt.a.stream.hide)
				}
			},
			{
				key: "setAudio",
				value: function() {
					this.hasAudioSource && this.player.switchVideoSrc(this.player.videoInfo.aac_link, void 0, !0)
				}
			},
			{
				key: "setup",
				value: function() {
					var i = this;
					this.isSet = !0;
					var t = this.player,
					e = t.Elements.streamBtnLists;
					"audio" === this.status ? (this.setAudio(), this.show(), this.toggle(2)) : (this.hide(), this.toggle(1)),
					this.setClass(),
					t.on(ut.changeVideo,
					function() {
						i.reset(),
						"audio" === i.status && (i.setAudio(), i.show())
					}),
					t.on(ut.playing,
					function() {
						i.run()
					}),
					t.on(ut.pause,
					function() {
						i.stop()
					}),
					t.on(ut.onChangeMode,
					function(t, e) {
						i.resetBtn()
					}),
					t.on(ut.videoJsonUpdate,
					function() {
						i.setClass()
					});
					var n = this;
					e.on("click",
					function(t) {
						var e = Object(d.a)(this).attr("data-mode");
						e !== n.status && ("audio" === e ? n.videoToAudio() : n.audioToVideo())
					})
				}
			},
			{
				key: "run",
				value: function() {
					this.audioMode && this.audioMode.removeClass("pv-sound-paused")
				}
			},
			{
				key: "stop",
				value: function() {
					this.audioMode && this.audioMode.addClass("pv-sound-paused")
				}
			},
			{
				key: "show",
				value: function() {
					this.audioMode && this.audioMode.css("display", "block")
				}
			},
			{
				key: "hide",
				value: function() {
					this.audioMode && this.audioMode.css("display", "none")
				}
			},
			{
				key: "audioToVideo",
				value: function() {
					var t = this;
					if (!this.player.ignoreRespondEvent && "video" !== this.status && !this.player.hideVideoMode) {
						this.toggle(1),
						this.hide(),
						this.status = "video";
						var e = this.video,
						i = (this.audioSrc, this.player),
						n = e.currentTime,
						r = e.paused,
						a = e.playbackRate,
						o = function() {
							s.recoverVideoStatus(e, i, r, n, a),
							i.trigger(ut.onChangeMode, i.vid, "video", "audio")
						};
						i.isHls ? (i.constructor.setVideo.call(i, {
							videoInfo: i.videoInfo,
							playsafe: i.param.playsafe,
							br: i.currentLevel,
							pid: i.pid,
							cb: function() {
								i.hls.attachMedia(e),
								i.constructor.hlsEvents.call(i, !!t.currentLevel)
							}
						}), o()) : (this.currentLevel || i.mp4Init(i.pid), i.switchVideoSrc(i.currentSrc,
						function() {
							it.a.isIpad && e.load(),
							o()
						},
						!0))
					}
				}
			},
			{
				key: "toggle",
				value: function(t) {
					var e = this.player.controller.wrap;
					1 === t ? e.removeClass(dt.a.stream.audio) : e.addClass(dt.a.stream.audio)
				}
			},
			{
				key: "videoToAudio",
				value: function() {
					if (!this.player.ignoreRespondEvent && this.player.hasAudioMode && "audio" !== this.status) {
						var t = this.video,
						e = this.player,
						i = e.videoInfo.aac_link;
						if (i) {
							this.toggle(2),
							this.show();
							var n = t.currentTime,
							r = t.paused,
							a = t.playbackRate;
							this.status = "audio",
							e.hls && e.hls.destroy(),
							e.switchVideoSrc(i,
							function() {
								s.recoverVideoStatus(t, e, r, n, a),
								e.trigger(ut.onChangeMode, e.vid, "audio", "video"),
								it.a.isIpad && t.load()
							},
							!0)
						}
					}
				}
			},
			{
				key: "isAudioSrc",
				get: function() {
					return "audio" === this.status && this.hasAudioSource
				}
			},
			{
				key: "hasAudioSource",
				get: function() {
					return !! this.player.videoInfo.aac_link
				}
			}], [{
				key: "recoverVideoStatus",
				value: function(e, i, n, r, a) {
					i.on(ut.canplay,
					function t() {
						e.currentTime = r,
						e.playbackRate = a,
						n ? i.pause() : i.play(),
						i.off(ut.canplay, t)
					})
				}
			}]),
			s
		} (),
		Be = function() {
			function e(t) {
				b()(this, e),
				this.player = t,
				this.video = t.video,
				this.time = 0,
				this.hasCache = !1,
				this.history_video_duration = et.isNumber(t.param.history_video_duration) ? Math.floor(t.param.history_video_duration) : 5,
				this.timeupdateEvent = this.timeupdate.bind(this),
				this.endedEvent = this.ended.bind(this),
				this.playStartEvent = this.playStart.bind(this),
				this.storageEnable = et.storageTest(window.localStorage),
				this.storageEnable && (this.hasHistory && "on" !== t.param.ban_history_time ? (this.init(), this.isInit = !0) : this.deleteLastTimeCache())
			}
			return x()(e, [{
				key: "init",
				value: function() {
					var t, e, i = this.getLastTimeCache();
					i && !et.isNumber(this.player.param.watchStartTime) && (this.hasCache = !0, this.player.param.watchStartTime = i, this.tip = Object(d.a)((t = i, e = this.player.lang, '<div class="pv-start-time">\n    '.concat(e.lastPlay, " ").concat(et.getTime(t), "，").concat(e.replaying, '\n    <a href="javascript:;">').concat(e.replay, "</a>\n    <span>×</span>\n  </div>"))), this.player.wrap.append(this.tip), this.tipInit()),
					this.player.on(ut.timeupdate, this.timeupdateEvent),
					this.player.on(ut.ended, this.endedEvent),
					this.player.on(ut.playStart, this.playStartEvent)
				}
			},
			{
				key: "tipInit",
				value: function() {
					var t = this;
					this.tip.children("a").on("click",
					function() {
						t.video.currentTime = 0,
						t.remove()
					}),
					this.tip.children("span").on("click",
					function() {
						t.remove()
					})
				}
			},
			{
				key: "clear",
				value: function() {
					clearTimeout(this.clock)
				}
			},
			{
				key: "remove",
				value: function() {
					this.tip && this.tip.remove(),
					this.clear()
				}
			},
			{
				key: "playStart",
				value: function() {
					var t = this;
					this.tip && this.tip.css("display", "block"),
					this.clock = setTimeout(function() {
						t.remove()
					},
					1e4)
				}
			},
			{
				key: "ended",
				value: function() {
					this.deleteLastTimeCache(),
					this.hasCache = !1
				}
			},
			{
				key: "timeupdate",
				value: function() {
					var t = Math.floor(this.video.currentTime);
					0 < t && t < 10 ? this.hasCache && (this.deleteLastTimeCache(), this.hasCache = !1) : this.time !== t && t % 5 == 0 && (this.time, this.setLastTimeCache(t), this.hasCache = !0)
				}
			},
			{
				key: "deleteLastTimeCache",
				value: function() {
					et.deleteStorage("startTime-".concat(this.player.vid))
				}
			},
			{
				key: "getLastTimeCache",
				value: function() {
					return et.getStorage("startTime-".concat(this.player.vid))
				}
			},
			{
				key: "setLastTimeCache",
				value: function(t) {
					et.setStorage("startTime-".concat(this.player.vid), t)
				}
			},
			{
				key: "destroy",
				value: function() {
					this.isInit && (this.player.off(ut.timeupdate, this.timeupdateEvent), this.player.off(ut.ended, this.endedEvent), this.player.off(ut.playStart, this.playStartEvent), this.remove(), this.isInit = !1)
				}
			},
			{
				key: "hasHistory",
				get: function() {
					return + this.player.duration > 60 * this.history_video_duration
				}
			}]),
			e
		} (),
		Fe = window.setInterval,
		Ne = window.clearInterval,
		Ue = "getAttribute",
		qe = window.getComputedStyle,
		je = Object(c.md5)("polyv"),
		ze = je.slice(0, 10),
		Ve = je.slice( - 10),
		He = function() {
			function e(t) {
				b()(this, e),
				this.player = t,
				this.video = t.video,
				this.check = t.param.marqueeCheck,
				this.clock,
				this.pipEvent,
				this.init()
			}
			return x()(e, [{
				key: "setStorage",
				value: function() {
					window.sessionStorage && window.sessionStorage.setItem(ze, Ve)
				}
			},
			{
				key: "getStorage",
				value: function() {
					return !! window.sessionStorage && window.sessionStorage.getItem(ze)
				}
			},
			{
				key: "init",
				value: function() {
					var o = this;
					this.getStorage() !== Ve ? (this.clock = Fe(function() {
						var t = o.video[Ue]("style"),
						e = qe(o.video),
						i = +e["flex-grow"],
						n = o.check && e.zIndex,
						r = o.video[Ue]("id");
						o.player.ppt && "ppt" === o.player.ppt.main && (n = void 0);
						var a = window.EventTarget && MediaSource.__proto__.__proto__ === window.EventTarget; (t || 1 == i || n && "auto" !== n || r && -1 === r.indexOf("360") || a) && (o.remove(), o.setStorage(), o.destroy())
					},
					5e3), this.pipEvent = function(t, e) {
						o.player.isHls && !e && (o.remove(), o.destroy())
					},
					this.player.on("enterpictureinpicture", this.pipEvent)) : this.remove()
				}
			},
			{
				key: "remove",
				value: function() {
					this.player.trigger(ut.serverError, "#0".concat(16)),
					this.video.pause(),
					this.player.hls ? this.player.hls.destroy() : this.video.src = "",
					this.player.$video.remove(),
					delete this.player.video,
					delete this.player.$video
				}
			},
			{
				key: "destroy",
				value: function() {
					Ne(this.clock),
					this.pipEvent && this.player.off("enterpictureinpicture", this.pipEvent)
				}
			}]),
			e
		} (),
		Ge = function() {
			function r(t) {
				b()(this, r);
				var e = (this.player = t).param,
				i = e.ban_seek_by_limit_time,
				n = (e.watchStartTime, e.ban_seek);
				this.enable = "on" === i,
				this.seekEnable = "on" === n,
				this.allowTime = 0,
				this.enable && this.init()
			}
			return x()(r, [{
				key: "shouldUpdate",
				value: function(t) {
					return ! (this.seekEnable || this.enable && this.allowTime < t)
				}
			},
			{
				key: "init",
				value: function() {
					var e = this,
					i = this.player.video;
					this.handler = function() {
						var t = i.currentTime;
						e.allowTime < t && (e.allowTime = t)
					},
					this.player.on(ut.timeupdate, this.handler)
				}
			},
			{
				key: "destroy",
				value: function() {
					this.handler && this.player.off(ut.timeupdate, this.handler)
				}
			}]),
			r
		} (),
		Ye = k(159),
		We = k.n(Ye),
		Ke = (k(286), {
			words: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
			getId: function(t, e) {
				return "pv-".concat(t).concat(e).concat(Math.floor(1e5 * Math.random()))
			},
			lists: function(n, t, r, a) {
				var o = this;
				return t.reduce(function(t, e) {
					var i = o.getId(n, e.option);
					return t + '<div class="pv-ask-form">\n        <input name="'.concat(r, '" type="').concat(a ? "radio": "checkbox", '" id="').concat(i, '" value="').concat(e.option, '" />\n        <label for="').concat(i, '">').concat(e.option, "、").concat(e.answer, "</label>\n      </div>")
				},
				"")
			},
			question: function(t, e, i) {
				var n = !(1 === t.rightAnswer.length),
				r = t.illustration;
				return '<div class="pv-ask-modal-wrap">\n        <div class="pv-ask-modal">\n          <div class="pv-ask-head">'.concat(i.question, '</div>\n          <div class="pv-ask-content ').concat(r ? "": "pv-ask-content-noimg", '">\n            <div class="pv-ask-left ').concat(r ? "": "pv-hide", '">\n              ').concat(r && '<div><img src="'.concat(r, '" data-type="pvViewImage" /></div><p class="pv-ask-view-img-tip">').concat(i.viewLargerImage, "</p>"), '\n            </div>\n            <div class="pv-ask-right">\n              <div>\n              <h3><span>【').concat(n ? i.checkbox: i.radio, "】</span>  ").concat(t.question, "</h3>\n              ").concat(this.lists(t.examId, t.choices, e, !n), '\n              </div>\n            </div>\n          </div>\n          <div class="pv-ask-foot">\n            <button type="button" class="pv-ask-submit" data-type="pvSubmit">').concat(i.submit, '</button>\n            <button type="button" class="pv-ask-skip ').concat("true" === t.skip || !0 === t.skip ? "": "pv-hide", '" data-type="pvSkip">').concat(i.skip, "</button>\n          </div>\n        </div>\n      </div>")
			},
			tipAnswer: function(t, e, i, n, r) {
				var a = 4 < arguments.length && void 0 !== r && r,
				o = "pv-ask-right-tip",
				s = n || i.answerRight,
				l = "pv-right-icon pv-iconfont pv-icon-btn-selected",
				c = i.close,
				u = "close";
				"error" === e ? (o = "pv-ask-error-tip", s = n || i.answerWrong, l = "pv-error-icon", c = i.watchAgain, u = "again") : a = !1;
				var d = a ? '<button type="button" class="pv-ask-default" data-type="skip">'.concat(i.skip, "</button>") : "";
				return '<div class="pv-ask-modal-wrap pv-ask-modal-answer">\n        <div class="pv-ask-modal">\n          <div class="pv-ask-content">\n            <div class="'.concat(o, '">\n              <span class="pv-tips-icon ').concat(l, '"></span>\n              <div>').concat(s, "</div>\n              <p>").concat(t, '</p>\n            </div>\n          </div>\n          <div class="pv-ask-foot">\n            <button type="button" class="pv-ask-default" data-type="').concat(u, '">').concat(c, "</button>\n            ").concat(d, "\n          </div>\n        </div>\n      </div>")
			},
			tip: function() {
				var t = "pv-ask-right-tip",
				e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "回答正确",
				i = "pv-right-icon pv-iconfont pv-icon-btn-selected";
				return "error" === (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "right") && (t = "pv-ask-error-tip", i = "pv-error-icon"),
				'<div class="pv-ask-modal-wrap pv-ask-tip '.concat(t, '">\n      <div>\n        <span class="pv-tips-icon ').concat(i, '"></span>\n        ').concat(e, "\n      </div>\n    </div>")
			},
			viewImg: function(t) {
				return '<div class="pv-ask-modal-wrap pv-ask-view-img" data-type="pvClose">\n              <span class="pv-ask-view-img-close" data-type="pvClose">&times;</span>\n              <img src="'.concat(t, '"/>\n            </div>')
			}
		}),
		Qe = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
		Xe = function() {
			function l(t, e) {
				var i = this;
				b()(this, l),
				this.wrap = t.wrap,
				this.vid = t.vid,
				this.player = t,
				this.lang = t.lang,
				this.currentData = null,
				this.el = null,
				this.tip = null,
				this.currentId = null,
				this.key = null,
				this.cacheAnswer = "off" === t.param.ban_record_interaction_right_answer,
				this.waitingLists = [],
				this.wrongTitle = t.param.title_of_wrong_answer_explain,
				this.rightTitle = t.param.title_of_right_answer_explain,
				this.data = {
					timeAry: [],
					ided: []
				},
				e && l.getData(this.vid).then(function(t) {
					i.init(t)
				})
			}
			return x()(l, [{
				key: "trigger",
				value: function(t) {
					for (var e, i = arguments.length,
					n = new Array(1 < i ? i - 1 : 0), r = 1; r < i; r++) n[r - 1] = arguments[r]; (e = this.player).trigger.apply(e, [t].concat(n))
				}
			},
			{
				key: "init",
				value: function(t) {
					var i = this,
					e = l.formatData(t.filter(function(t) {
						return ! (0 !== t.type || i.getExamCache(t.examId) && i.cacheAnswer)
					}));
					0 !== e.length && (e.forEach(function(t) {
						var e = "qus".concat(t.showTime);
						i.data[e] ? i.data[e].push(t) : (i.data[e] = [t], i.data.timeAry.push(t.showTime))
					}), this.data.maxTime = this.data.timeAry[0], this.initVideoEvent())
				}
			},
			{
				key: "initVideoEvent",
				value: function() {
					this.timeupdate = this.timeupdateEvent.bind(this),
					this.player.on(ut.timeupdate, this.timeupdate)
				}
			},
			{
				key: "timeupdateEvent",
				value: function() {
					var t = this.player.currentTime,
					e = "qus".concat(Math.floor(t));
					this.shouldShow(e, t) && (this.player.shouldUpdate = !0, this.key = "qus".concat(Math.floor(this.data.timeAry[0])), this.player.pause(), this.currentData = this.data[this.key], this.render(), this.initEvent(), this.player.keypress.setAllow(!1))
				}
			},
			{
				key: "shouldShow",
				value: function(t, e) {
					var i = this.data.maxTime;
					return this.data[t] && 0 < this.data[t].length && !this.currentData || i && i < e && !this.currentData
				}
			},
			{
				key: "viewLargerImage",
				value: function(t) {
					var e = this;
					this.viewImg = Object(d.a)(Ke.viewImg(t)),
					this.wrap.append(this.viewImg),
					this.viewImg.on("click",
					function(t) {
						"pvClose" === t.target.getAttribute("data-type") && e.viewImg.remove()
					})
				}
			},
			{
				key: "initEvent",
				value: function() {
					var n = this;
					this.el.on("click",
					function(t) {
						var e = t.target,
						i = e.getAttribute("data-type");
						i && ("pvSubmit" === i ? n.submit() : "pvViewImage" === i ? n.viewLargerImage(e.getAttribute("src")) : n.clear(!0))
					})
				}
			},
			{
				key: "submit",
				value: function() {
					var i = this,
					n = this.currentData[0],
					t = this.getSelectOptions(),
					e = n.rightAnswer.join("");
					if (t) {
						var r = n.examId,
						a = n.question,
						o = this.vid,
						s = o.slice(0, 10),
						l = this.player.pid,
						c = t === e,
						u = 0,
						d = "",
						h = null;
						this.el.addClass("pv-hide"),
						h = c ? (this.showRightTip(n.answer), u = 1, d = n.answer || "", n.wrongTime) : (this.showErrorTip(n.wrongAnswer, n.wrongTime, n.skipWrongButton), d = n.wrongAnswer || "", n.showTime);
						var p = t.split("").map(function(t) {
							return {
								answer: n.choices[Qe.indexOf(t)].answer,
								option: t
							}
						});
						if (this.trigger(ut.answerResult, c, m()({},
						n, {
							selectOption: p
						}), d, h, this.vid), this.tip && this.tip.on("click",
						function(t) {
							var e = t.target.getAttribute("data-type");
							e && ("again" === e ? i.wrongHandler(n.wrongTime) : i.clear())
						}), r && -1 === this.data.ided.indexOf(r)) {
							var f = this.player.param.statistics.session_id,
							v = {
								eid: r,
								question: a,
								vid: o,
								uid: s,
								pid: l,
								correct: u,
								answer: V()(t.split("").map(function(t) {
									return n.choices[Qe.indexOf(t)].answer
								}))
							};
							f && (v.viewerId = f),
							this.save(v,
							function(t) {
								i.data.ided.push(r)
							})
						}
					}
				}
			},
			{
				key: "save",
				value: function(t, e) {
					var i = 1 < arguments.length && void 0 !== e ? e: function() {};
					_({
						url: "".concat(et.protocol, "//v.polyv.net/uc/examlog/save"),
						type: "post",
						success: i,
						data: t
					})
				}
			},
			{
				key: "wrongHandler",
				value: function(t) {
					this.tip.remove(),
					et.isNumber(t) && 0 <= t ? (this.currentData = null, this.player.seek(t), this.el.remove(), this.player.play(), this.waitingLists = []) : this.el.removeClass("pv-hide")
				}
			},
			{
				key: "remove",
				value: function() {
					this.el && this.el.remove(),
					this.tip && this.tip.remove(),
					this.viewImg && this.viewImg.remove(),
					this.el = null,
					this.tip = null,
					this.player.keypress && this.player.keypress.setAllow(!0)
				}
			},
			{
				key: "clear",
				value: function(t) {
					var e = this.key,
					i = this.currentData.shift(),
					n = i.showTime,
					r = i.examId;
					this.remove();
					var a = this.currentData.length;
					if (0 === a && n) {
						var o = this.data.timeAry.indexOf(n);
						this.data.timeAry.splice(o, 1),
						delete this.data[e],
						this.currentData = null,
						this.key = null,
						0 === this.data.timeAry.length ? (this.data.maxTime = null, this.player.off(ut.timeupdate, this.timeupdate), this.timeupdate = null) : this.data.maxTime = this.data.timeAry[0],
						t || this.player.seek(n)
					} else 0 === a ? this.currentData = null: (this.render(), this.initEvent());
					0 === a && (0 < this.waitingLists.length ? (this.sendQuestion(this.waitingLists), this.waitingLists = []) : this.player.play()),
					t && this.trigger(ut.questionSkip, i, this.vid),
					n && this.setExamCache(r)
				}
			},
			{
				key: "setExamCache",
				value: function(t) {
					et.setStorage("exam-".concat(this.player.vid, "-").concat(t), !0)
				}
			},
			{
				key: "getExamCache",
				value: function(t) {
					return et.getStorage("exam-".concat(this.player.vid, "-").concat(t))
				}
			},
			{
				key: "showRightTip",
				value: function(t) {
					var e = this;
					this.tip = t ? Object(d.a)(Ke.tipAnswer(t, "right", this.lang, this.rightTitle)) : Object(d.a)(Ke.tip("right", this.lang.answerRight)),
					this.wrap.append(this.tip),
					t || setTimeout(function() {
						e.clear()
					},
					1500)
				}
			},
			{
				key: "showErrorTip",
				value: function(t, e, i) {
					var n = this,
					r = 2 < arguments.length && void 0 !== i && i;
					this.tip = t ? Object(d.a)(Ke.tipAnswer(t, "error", this.lang, this.wrongTitle, r)) : Object(d.a)(Ke.tip("error", this.lang.answerWrong)),
					this.wrap.append(this.tip),
					t || setTimeout(function() {
						n.wrongHandler(e)
					},
					1500)
				}
			},
			{
				key: "getSelectOptions",
				value: function() {
					return this.el.find('input[name="'.concat(this.currentId, '"]:checked')).dom.reduce(function(t, e) {
						return t + e.value
					},
					"")
				}
			},
			{
				key: "render",
				value: function() {
					var t = this.currentData[0];
					this.currentId = Ke.getId(t.examId, "name"),
					this.el = Object(d.a)(Ke.question(t, this.currentId, this.lang)),
					this.wrap.append(this.el),
					this.trigger(ut.questionInit, t, this.vid)
				}
			},
			{
				key: "formatExternalData",
				value: function(t) {
					var i = this,
					n = [],
					r = [];
					return t.forEach(function(t) {
						var e = i.player.currentTime;
						et.isNumber(t.showTime) && t.showTime > e ? n.push(t) : (t.showTime = void 0, r.push(t))
					}),
					[n, r]
				}
			},
			{
				key: "pushData",
				value: function(t) {
					var i = this;
					l.formatData(t).sort(function(t, e) {
						return t.showTime - e.showTime
					}).forEach(function(t) {
						var e = "qus".concat(t.showTime);
						i.data[e] ? i.data[e].push(t) : (i.data[e] = [t], i.data.timeAry.push(t.showTime))
					}),
					this.data.timeAry.sort(function(t, e) {
						return t - e
					}),
					this.data.maxTime = this.data.timeAry[0]
				}
			},
			{
				key: "sendQuestion",
				value: function(t, e) {
					var i = 0 < arguments.length && void 0 !== t ? t: [],
					n = 1 < arguments.length && void 0 !== e && e;
					if (et.isArray(i) && 0 !== i.length) {
						var r = [],
						a = [];
						if (n) {
							var o = this.formatExternalData(i),
							s = We()(o, 2);
							r = s[0],
							a = s[1]
						} else a = i;
						0 < r.length && (this.pushData(r), this.timeupdate || this.initVideoEvent()),
						0 !== a.length && (this.currentData ? this.waitingLists = [].concat(pt()(this.waitingLists), pt()(a)) : (this.currentData = l.formatData(a), this.player.pause(), this.render(), this.initEvent(), this.player.keypress.setAllow(!1)))
					}
				}
			},
			{
				key: "changeQuestion",
				value: function(e, t) {
					var i = 1 < arguments.length && void 0 !== t ? t: [],
					n = this.player.currentTime;
					if (et.isArray(i) && 0 !== i.length && et.isNumber(e)) {
						this.currentData && n === e && (this.currentData.splice(1), this.waitingLists = []);
						var r = "qus".concat(e);
						this.data[r] && (this.data[r] = []);
						var a = i.map(function(t) {
							return m()({},
							t, {
								showTime: e
							})
						});
						this.sendQuestion(a, !0)
					}
				}
			},
			{
				key: "destroy",
				value: function() {
					this.remove(),
					this.timeupdate && this.player.off(ut.timeupdate, this.timeupdate)
				}
			},
			{
				key: "isShow",
				get: function() {
					return !! this.currentData
				}
			}], [{
				key: "formatData",
				value: function(t) {
					return t.map(function(t) {
						var e = et.isArray(t.choices) ? t.choices: JSON.parse(t.choices);
						return ! 0 === t.skip && (t.skip = "true"),
						t.choices = e.map(function(t, e) {
							return t.option = Qe[e],
							t
						}),
						t.showTime && !et.isNumber(t.showTime) && (t.showTime = et.stringToSeconds(t.showTime)),
						t.rightAnswer = l.getRightChoices(t.choices),
						t
					})
				}
			},
			{
				key: "getRightChoices",
				value: function(t) {
					var i = [];
					return t.forEach(function(t, e) {
						1 !== t.right_answer && "1" !== t.right_answer || i.push(Qe[e])
					}),
					i
				}
			},
			{
				key: "getData",
				value: function(i) {
					return new E.a(function(t, e) {
						_({
							url: "".concat(et.protocol, "//v.polyv.net/uc/exam/get"),
							dataType: "jsonp",
							data: {
								vid: i
							},
							success: t
						})
					})
				}
			}]),
			l
		} (),
		Je = (k(290),
		function() {
			function i(t) {
				var e = this;
				b()(this, i),
				this.player = t,
				G()(this, "dom", void 0),
				G()(this, "rightMenu", void 0),
				G()(this, "layout", void 0),
				G()(this, "status", void 0),
				G()(this, "options", void 0),
				G()(this, "hideEvent", void 0),
				this.dom = t.dom,
				this.rightMenu = t.param.rightMenu || t.videoInfo.player.rightMenu,
				this.layout = i.createMenuLayout(t.version),
				this.status = !1,
				this.dom.appendChild(this.layout),
				this.rightMenu && 0 < this.rightMenu.length && this.renderOption(),
				this.dom.oncontextmenu = function(t) {
					return e.layout.style.display = "block",
					e.layout.style.top = "".concat(t.clientY, "px"),
					e.layout.style.left = "".concat(t.clientX, "px"),
					!(e.status = !0)
				},
				this.layout.addEventListener("click",
				function(t) {
					return t.stopPropagation()
				}),
				this.hideEvent = this.hide.bind(this),
				window.addEventListener("click", this.hideEvent),
				this.dom.addEventListener("click", this.hideEvent),
				t.param.rightMenu || t.on(ut.videoJsonUpdate, this.refleshOption.bind(this))
			}
			return x()(i, [{
				key: "hide",
				value: function() { ! this.player || this.player.menu ? (this.status = !1, this.layout.style.display = "none") : window.removeEventListener("click", this.hideEvent)
				}
			},
			{
				key: "renderOption",
				value: function() {
					var r = this;
					this.rightMenu && (this.options = i.createMenuOption(this.rightMenu), this.layout.appendChild(this.options), pt()(this.options.querySelectorAll("[data-menu-index]")).forEach(function(n) {
						n.addEventListener("click",
						function() {
							if (r.rightMenu) {
								var t = Number(n.getAttribute("data-menu-index")),
								e = r.rightMenu[t];
								if (e && (e.callback && e.callback(), e.rightUrl)) {
									var i = document.createElement("a");
									i.setAttribute("href", e.rightUrl),
									i.setAttribute("target", "_blank"),
									document.body.appendChild(i),
									i.click(),
									document.body.removeChild(i)
								}
							}
						})
					}))
				}
			},
			{
				key: "refleshOption",
				value: function(t, e) {
					if (this.rightMenu = e.player.rightMenu, this.options) {
						var i = this.options.parentNode;
						i && i.removeChild(this.options)
					}
					this.rightMenu && 0 < this.rightMenu.length && this.renderOption()
				}
			}], [{
				key: "createMenuLayout",
				value: function(t) {
					var e = document.createElement("div");
					return e.setAttribute("class", "pv-menu"),
					e.insertAdjacentHTML("beforeend", "<div>Version：".concat(t, "</div>")),
					e
				}
			},
			{
				key: "createMenuOption",
				value: function(t) {
					var e = document.createElement("ul");
					return e.insertAdjacentHTML("beforeend", t.reduce(function(t, e, i) {
						return "".concat(t, '<li data-menu-index="').concat(i, '" ').concat(e.rightUrl || e.callback ? "data-target": "", ">").concat(e.rightName, "</li>")
					},
					"")),
					e
				}
			}]),
			i
		} ()),
		Ze = (k(292),
		function() {
			function e(t) {
				b()(this, e),
				this.row = Math.max(t, 3),
				this.data = {},
				this.index = 1,
				this.lastIndex = 1,
				this.keyIndex = 0
			}
			return x()(e, [{
				key: "getIndex",
				value: function() {
					for (var t = this.lastIndex,
					e = this.index; e === this.index || e === t;) e = Math.ceil(Math.random() * this.row);
					return this.lastIndex = this.index,
					this.index = e,
					this.index
				}
			},
			{
				key: "reset",
				value: function() {
					this.data = {},
					this.index = 1,
					this.keyIndex = 0
				}
			},
			{
				key: "remove",
				value: function(t) {
					delete this.data[t]
				}
			},
			{
				key: "push",
				value: function(t) {
					var e = t.x,
					i = t.text,
					n = t.fontColor,
					r = this.getIndex(),
					a = this.keyIndex++;
					this.data[a] = {
						text: i,
						x: e,
						y: 24 * r + 4 * r,
						index: r,
						keyIndex: a,
						w: void 0,
						fontColor: n
					}
				}
			}]),
			e
		} ()),
		$e = function() {
			function e(t) {
				b()(this, e),
				this.options = t,
				this.canvas = this.createCanvas(t.width, t.height),
				this.ctx = this.canvas.getContext("2d"),
				this.el = t.el,
				t.el.appendChild(this.canvas),
				this.store = new Ze(Math.floor(t.height / 30)),
				this.pause = !1,
				this.animation = null
			}
			return x()(e, [{
				key: "createCanvas",
				value: function(t, e) {
					var i = document.createElement("canvas");
					return i.width = t,
					i.height = e,
					i
				}
			},
			{
				key: "send",
				value: function(t) {
					var e = t.text,
					i = t.fontColor,
					n = void 0 === i ? "#ffffff": i;
					this.store.push({
						x: this.options.width,
						text: e,
						fontColor: n
					})
				}
			},
			{
				key: "render",
				value: function() {
					if (!this.pause) {
						this.clear();
						var t = this.store,
						e = this.options.width,
						i = t.data;
						for (var n in i) {
							var r = i[n];
							r && (r.w ? (r.x = r.x - Math.round((e + r.w) / 400), r.x < -1 * r.w && t.remove(n)) : (this.draw(r), r.w = this.ctx.measureText(r.text).width), this.draw(r))
						}
						this.animation = requestAnimationFrame(this.render.bind(this))
					}
				}
			},
			{
				key: "clear",
				value: function(t) {
					this.ctx.clearRect(0, 0, this.options.width, this.options.height),
					t && this.store.reset()
				}
			},
			{
				key: "stop",
				value: function() {
					this.pause = !0,
					cancelAnimationFrame(this.animation)
				}
			},
			{
				key: "resume",
				value: function() {
					this.pause && (this.pause = !1, this.render())
				}
			},
			{
				key: "resize",
				value: function(t, e, i, n) {
					var r = this,
					a = this.store.data,
					o = t / this.options.width;
					this.options.height;
					for (var s in this.options.width = t,
					this.options.height = e,
					this.canvas.width = t,
					this.canvas.height = e,
					a) a.x = Math.floor(a.x * o);
					n || setTimeout(function() {
						r.resume(),
						i && r.stop()
					},
					0)
				}
			},
			{
				key: "draw",
				value: function(t) {
					var e = t.text,
					i = t.x,
					n = t.y,
					r = t.fontColor,
					a = this.ctx;
					a.strokeStyle = "rgba(0,0,0,0.35)",
					a.font = 'bold 24px "microsoft yahei"',
					a.fillStyle = r,
					a.fillText(e, i, n),
					a.strokeText(e, i, n)
				}
			}]),
			e
		} (),
		ti = function() {
			function i(t) {
				b()(this, i),
				this.player = t,
				this.dataUrl = window.s2j_callOnBarrageUrl(),
				this.el = this.createDanmuContainer(),
				this.el.insertBefore(t.controller.wrap),
				this.btn = t.Elements.danmuBtn,
				"off" === t.param.ban_barrage_btn && this.btn.css("display", "inline-block");
				var e = this.el.dom[0];
				this.barrage = new $e({
					el: e,
					width: e.clientWidth,
					height: e.clientHeight
				}),
				this.barrage.render(),
				this.data = {},
				this.history = {},
				this.setEvent(),
				this.stop = !1,
				this.reloadData(),
				this.setBtnEvent()
			}
			return x()(i, [{
				key: "setBtnEvent",
				value: function() {
					var t = this;
					this.btnEvent = function() {
						t.stop ? t.show() : t.hide()
					},
					this.btn.on("click", this.btnEvent)
				}
			},
			{
				key: "reloadData",
				value: function() {
					var e = this;
					this.pullBarrageData().then(function(t) {
						e.data = {},
						e.setData(t)
					})
				}
			},
			{
				key: "send",
				value: function(t) {
					var e = this,
					i = Math.floor(this.player.video.currentTime) + 1;
					t.forEach(function(t) {
						e.pushData(t.time || i, {
							text: t.msg,
							msg: t.msg,
							fontColor: t.fontColor
						})
					})
				}
			},
			{
				key: "hide",
				value: function() {
					this.stop = !0,
					this.barrage.stop(),
					this.barrage.clear(),
					this.btn.removeClass(dt.a.danmu.on).addClass(dt.a.danmu.off),
					window.s2j_barrageStatus && window.s2j_barrageStatus("off"),
					this.player.triggerGlobal("s2j_barrageStatus", "off")
				}
			},
			{
				key: "show",
				value: function() {
					this.stop = !1,
					this.reset(),
					this.barrage.resume(),
					this.btn.removeClass(dt.a.danmu.off).addClass(dt.a.danmu.on),
					window.s2j_barrageStatus && window.s2j_barrageStatus("on"),
					this.player.triggerGlobal("s2j_barrageStatus", "on")
				}
			},
			{
				key: "setEvent",
				value: function() {
					var i = this;
					this.timeupdate = function() {
						var t = Math.floor(i.player.video.currentTime);
						i.data[t] && !i.history[t] && (i.history[t] = !0, i.data[t].forEach(function(t) {
							i.barrage.send({
								text: t.msg,
								fontColor: t.fontColor
							})
						}))
					},
					this.pause = function() {
						i.stop || i.barrage.stop()
					},
					this.play = function() {
						i.stop || i.barrage.resume()
					},
					this.seeked = function() {
						i.stop || i.reset()
					},
					this.resize = function() {
						var t = i.el.dom[0].clientWidth,
						e = i.el.dom[0].clientHeight;
						t === i.barrage.options.width && e === i.barrage.options.height || i.barrage.resize(t, e, i.player.video.paused, i.stop)
					},
					this.ended = function() {
						i.barrage.clear(!0)
					},
					this.player.on(ut.timeupdate, this.timeupdate),
					this.player.on(ut.pause, this.pause),
					this.player.on(ut.play, this.play),
					this.player.on(ut.seeked, this.seeked),
					this.player.on(ut.resize, this.resize),
					this.player.on(ut.ended, this.ended),
					this.player.once(ut.changeVideoDestroy, this.destroy.bind(this))
				}
			},
			{
				key: "reset",
				value: function() {
					this.barrage.clear(!0),
					this.history = {}
				}
			},
			{
				key: "setData",
				value: function(t) {
					var e = this;
					t.forEach(function(t) {
						t && t.msg && e.pushData(et.stringToSeconds(t.time || "0"), t)
					})
				}
			},
			{
				key: "pushData",
				value: function(t, e) {
					e.fontColor && (e.fontColor = et.parseColor(e.fontColor)),
					this.data[t] ? this.data[t].push(e) : this.data[t] = [e]
				}
			},
			{
				key: "createDanmuContainer",
				value: function() {
					return Object(d.a)('<div class="pv-danmu pv-outside-bottom" />')
				}
			},
			{
				key: "pullBarrageData",
				value: function() {
					var i = this;
					return new E.a(function(e, t) {
						_({
							url: i.dataUrl,
							dataType: "json",
							success: function(t) {
								e(t)
							}
						})
					})
				}
			},
			{
				key: "destroy",
				value: function() {
					this.player.off(ut.timeupdate, this.timeupdate),
					this.player.off(ut.pause, this.pause),
					this.player.off(ut.play, this.play),
					this.player.off(ut.seeked, this.seeked),
					this.player.off(ut.resize, this.resize),
					this.player.off(ut.ended, this.ended),
					this.btn.off("click", this.btnEvent),
					this.barrage.stop(),
					this.barrage = null,
					this.el.remove(),
					this.btn.css("display", "none")
				}
			}], [{
				key: "checkDanmu",
				value: function(t) {
					return 1 === (0 < arguments.length && void 0 !== t ? t: 0) && ("function" == typeof window.s2j_callOnBarrageUrl && "string" == typeof window.s2j_callOnBarrageUrl() || void 0)
				}
			}]),
			i
		} (),
		ei = k(160),
		ii = k.n(ei);
		k(297);
		function ni(t) {
			var e = t.trim().concat("\n").replace(/\r\n/g, "\n").replace(/\n{3,}/g, "\n\n");
			if (!e) return [];
			return e.split("\n\n").reduce(function(t, e) {
				var i, n, r = e.split("\n");
				if (2 < r.length) {
					var a = r[0],
					o = r[1].split(" --\x3e "),
					s = et.stringToSeconds(o[0].replace(",", ".")),
					l = et.stringToSeconds(o[1].replace(",", ".")),
					c = r.slice(2).map(function(t) {
						return "string" != typeof(e = t) ? e: e.replace(/</g, "&lt;").replace(/>/g, "&gt;").trim();
						var e
					}).reduce(function(t, e) {
						return "".concat(t, "<br>").concat(e)
					}),
					u = {
						col: 6 < (i = function(t) {
							if (!t) return 2;
							var e = /\{\\an[1-9]\}/.exec(t);
							return e ? +e[0].slice(4, 5) : 2
						} (c)) ? "top": i < 4 ? "bottom": "middle",
						line: 0 == (n = i % 3) ? "right": 1 == n ? "left": "center",
						position: i
					};
					t.push({
						sn: a,
						startTime: s,
						endTime: l,
						position: u,
						content: c.replace(/\{\\.*.\}/g, "")
					})
				}
				return t
			},
			[]).sort(function(t, e) {
				return t.startTime - e.startTime
			})
		}
		var ri = function() {
			function i(t) {
				b()(this, i),
				this.player = t,
				this.select = t.Elements.subtitleWrap;
				var e = this.getDataSrc(t.videoInfo);
				this.dataSrc = e[0],
				"N" === t.videoInfo.player.subtitlesEnabled && (this.dataSrc = null),
				this.isDouble = e[2],
				this.defaultDouble = "Y" === t.videoInfo.player.subtitlesDoubleDefault,
				this.vid = t.vid,
				this.currentSrt = [],
				this.showSrt = [],
				this.currentIndex = this.isDouble && this.defaultDouble ? 2 : 0,
				this.saveSubtitles = "N" === t.videoInfo.player.saveSubtitles,
				this.useSingleSubtitleStyle = t.param.useSingleSubtitleStyle,
				this.style = {
					top: "",
					bottom: "",
					single: ""
				},
				this.currentType = null,
				this.clock = null,
				this.config = {
					size: t.param.srt_caption_txt_size,
					bottom: t.param.srt_caption_txt_height,
					baseHeight: t.param.srt_caption_base_height,
					baseWidth: t.param.srt_caption_base_width
				},
				this.dataSrc ? (this.renderController(e[1]), this.setup()) : this.renderController()
			}
			return x()(i, [{
				key: "getDataSrc",
				value: function(t) {
					var e, i = {},
					n = null;
					if ("Y" === t.player.subtitlesDoubleEnabled && et.isArray(t.match_srt) && 2 === t.match_srt.length) {
						e = !0,
						n = [];
						var r = t.match_srt;
						r.forEach(function(t) {
							i[t.title] = t.url,
							n.push(t.title)
						}),
						2 === r.length && (i[this.player.lang.doubleSubtitle] = [r[0].url, r[1].url], n.push(this.player.lang.doubleSubtitle))
					} else e = !1,
					(i = t.video_srt) && (n = L()(i));
					return [i, n, e]
				}
			},
			{
				key: "reset",
				value: function() {
					this.resetBtn(),
					ii()(this.els).forEach(function(t) {
						return t && t.empty()
					}),
					this.trackData = [],
					this.showSrt = []
				}
			},
			{
				key: "createSubtitleDom",
				value: function() {
					return Object(d.a)('<div class="pv-subtitle pv-outside-bottom">\n      <div class="pv-subtitle-top"></div>\n      <div class="pv-subtitle-middle"></div>\n      <div class="pv-subtitle-bottom"></div>\n    </div>')
				}
			},
			{
				key: "createSubtitleItem",
				value: function(t, e, i, n) {
					var r = i ? this.style.top: "",
					a = n ? this.style.bottom: "";
					return (this.currentSingle && (i || n) || this.useSingleSubtitleStyle && !i && !n && this.style.single) && (r = "", a = this.style.single),
					Object(d.a)('<span style="'.concat(r).concat(a, '" class="pv-subtitle-').concat(e, '">').concat(t, "</span>"))
				}
			},
			{
				key: "renderController",
				value: function(t) {
					var e = this.player.controller.wrap;
					t ? (this.select.append(i.tmp(t, "skin_gold" === this.player.controller.skinSetting.skin, this.player.lang.hide)), e.removeClass(dt.a.subtitle.hide), e.find(".".concat(dt.a.setting.btn)).css("display", "inline-block")) : e.addClass(dt.a.subtitle.hide),
					this.player.trigger(ut.renderSubtitleControl, !!t)
				}
			},
			{
				key: "clearSelect",
				value: function() {
					this.select.children("[data-subtitle]").remove()
				}
			},
			{
				key: "getPositionElement",
				value: function() {
					var t = this.el.children("div");
					return {
						top: t.eq(0),
						middle: t.eq(1),
						bottom: t.eq(2),
						bottomT: void 0,
						bottomB: void 0
					}
				}
			},
			{
				key: "appendBottomDom",
				value: function() {
					this.els.bottomT = Object(d.a)('<div class="pv-subtitle-bottom-t"></div>'),
					this.els.bottomB = Object(d.a)('<div class="pv-subtitle-bottom-b"></div>'),
					this.style.topFontsize && this.els.bottomT.css({
						fontSize: "".concat(this.style.topFontsize, "px")
					}),
					this.style.bottomFontsize && this.els.bottomB.css({
						fontSize: "".concat(this.style.bottomFontsize, "px")
					}),
					this.els.bottom.append(this.els.bottomT, this.els.bottomB)
				}
			},
			{
				key: "setup",
				value: function() {
					var e = this;
					this.el = this.createSubtitleDom(),
					this.els = this.getPositionElement(),
					this.currentDom = null,
					this.el.insertBefore(this.player.controller.wrap),
					this.trackData = [],
					this.timeUpdateEvent = this.timeUpdate.bind(this),
					this.seekedEvent = this.seeked.bind(this),
					this.endedEvent = this.reset.bind(this),
					this.resizeEvent = this.resize.bind(this),
					this.player.on(ut.timeupdate, this.timeUpdateEvent),
					this.player.on(ut.seeked, this.seekedEvent),
					this.player.on(ut.ended, this.endedEvent),
					this.player.on(ut.resize, this.resizeEvent),
					this.player.once(ut.changeVideoDestroy, this.destroy.bind(this));
					var t = this.player.videoInfo.player.subtitles;
					et.isArray(t) && t.forEach(function(t) {
						"top" === t.position ? (e.style.top = i.createdStyleString(t), e.style.topFontsize = t.fontSize) : "bottom" === t.position ? (e.style.bottom = i.createdStyleString(t), e.style.bottomFontsize = t.fontSize) : e.style.single = i.createdStyleString(t)
					}),
					this.initEvent(),
					this.getData()
				}
			},
			{
				key: "getData",
				value: function() {
					var i = this;
					this.currentType = this.currentDom.attr("data-subtitle");
					var t = this.dataSrc[this.currentType];
					et.isArray(t) || (t = [t]),
					E.a.all(t.map(function(t) {
						return i.getSrc(t)
					})).then(function(t) {
						if (i.isDouble) if (2 === t.length) t[0].map(function(t) {
							return t.topSub = !0,
							t
						}),
						t[1] = t[1].map(function(t) {
							return t.bottomSub = !0,
							t
						});
						else {
							var e = 0 === i.currentIndex ? "topSub": "bottomSub";
							t[0].map(function(t) {
								return t[e] = !0,
								t
							})
						}
						2 === t.length ? i.currentSrt = [].concat(pt()(t[0]), pt()(t[1])).sort(function(t, e) {
							return t.startTime - e.startTime
						}) : i.currentSrt = t[0],
						i.initData()
					})
				}
			},
			{
				key: "initEvent",
				value: function() {
					var n = this,
					t = this.select.children("[data-subtitle]").dom.map(function(t) {
						return Object(d.a)(t)
					});
					this.currentDom = t[this.currentIndex].addClass(dt.a.active),
					t.forEach(function(e, i) {
						Object(d.a)(e).on("click",
						function() {
							var t = e;
							if (n.currentDom !== t) {
								n.player.Elements.subtitleBtn;
								t.addClass(dt.a.active),
								n.currentDom.removeClass(dt.a.active),
								"hideSubtitle" === (n.currentDom = t).attr("data-subtitle") ? (n.reset(), n.resetBtn(!0), n.currentType = "hideSubtitle") : (n.currentIndex = i, n.getData(), n.resetBtn())
							}
						})
					})
				}
			},
			{
				key: "resetBtn",
				value: function(t) {
					this.player.Elements.subtitleBtn.html(t ? this.player.lang.hide: this.currentDom.attr("data-subtitle"))
				}
			},
			{
				key: "initData",
				value: function() {
					var i = this;
					this.reset(),
					this.isDouble && !this.currentSingle ? this.appendBottomDom() : (this.els.bottomT = void 0, this.els.bottomB = void 0);
					var n = this.player.video.currentTime;
					this.currentSrt.forEach(function(t) {
						if (t.endTime > n && t.endTime > t.startTime) {
							var e = m()({},
							t);
							e.startTime < n && (e.startTime = n),
							i.trackData.push(e)
						}
					})
				}
			},
			{
				key: "resize",
				value: function(t, e, i) {
					var n = this.config,
					r = n.baseWidth,
					a = n.baseHeight,
					o = n.size,
					s = i / a * n.bottom,
					l = Math.max(Math.min(e / r * o, 40), 20);
					this.els.bottom.css({
						bottom: "".concat(s, "px")
					}),
					this.el.css({
						"font-size": "".concat(l, "px")
					})
				}
			},
			{
				key: "seeked",
				value: function() {
					var t = this;
					"hideSubtitle" !== this.currentType && (clearTimeout(this.clock), this.clock = setTimeout(function() {
						t.initData()
					},
					500))
				}
			},
			{
				key: "timeUpdate",
				value: function() {
					var n = this;
					if ((0 !== this.trackData.length || 0 !== this.showSrt.length) && this.player.video) {
						var r = this.currentType,
						a = this.vid,
						i = [],
						o = [],
						s = this.player.video.currentTime,
						l = Math.floor(s);
						this.showSrt.forEach(function(t) {
							if (Math.floor(t.endTime) === l) {
								var e = t.endTime - s;
								0 < e ? setTimeout(function() {
									t.el && t.el.remove()
								},
								Math.ceil(1e3 * e)) : t.el && t.el.remove()
							} else i.push(t)
						});
						for (var c = 0; c < this.trackData.length && Math.floor(this.trackData[c].startTime) === l; c++) !
						function() {
							var t = m()(n.trackData[c]);
							t.el = n.createSubtitleItem(t.content, t.position.line, t.topSub, t.bottomSub),
							o.push(t);
							var e = t.startTime - s,
							i = t.position.col;
							"bottom" === i && n.isDouble && !n.currentSingle && (i = t.topSub ? "bottomT": "bottomB"),
							0 < e ? setTimeout(function() {
								r === n.currentType && a === n.vid && n.append(t.el, i)
							},
							Math.ceil(1e3 * e)) : n.append(t.el, i)
						} ();
						this.trackData = this.trackData.slice(o.length),
						this.showSrt = [].concat(o, i)
					}
				}
			},
			{
				key: "append",
				value: function(t, e) {
					this.els[e].append(t)
				}
			},
			{
				key: "destroy",
				value: function() {
					this.dataSrc && (clearTimeout(this.clock), this.reset(), this.el.remove(), this.clearSelect(), this.player.off(ut.timeupdate, this.timeUpdateEvent), this.player.off(ut.seeked, this.seekedEvent), this.player.off(ut.ended, this.endedEvent), this.player.off(ut.resize, this.resizeEvent))
				}
			},
			{
				key: "getSrc",
				value: function(t) {
					return new E.a(function(i, n) {
						_({
							url: t,
							success: function(t) {
								var e;
								try {
									e = ni(t),
									i(e)
								} catch(t) {
									console.warn(t),
									n()
								}
							},
							error: function() {
								n()
							}
						})
					})
				}
			},
			{
				key: "currentSingle",
				get: function() {
					return this.isDouble && this.currentIndex < 2 && this.saveSubtitles
				}
			}], [{
				key: "tmp",
				value: function(t, i, e) {
					function n(t, e) {
						return i ? '<div data-subtitle="'.concat(t, '">').concat(dt.a.svg.select, "<span>").concat(e, "</span></div>") : '<span data-subtitle="'.concat(t, '">').concat(e, "</span>")
					}
					var r = t.reduce(function(t, e) {
						return "".concat(t).concat(n(e, e))
					},
					"");
					return "".concat(r).concat(n("hideSubtitle", e))
				}
			},
			{
				key: "createdStyleString",
				value: function(t) {
					function e(t) {
						return void 0 !== t
					}
					var i = "",
					n = "".concat(t.outlineWidth || 1, "px"),
					r = t.outlineColor || "#262626";
					return i = "text-shadow:".concat(r, " 1px 0px ").concat(n, ", ").concat(r, " 0px 1px ").concat(n, ", ").concat(r, " 0px -1px ").concat(n, ", ").concat(r, " -1px 0px ").concat(n, ";"),
					e(t.vertical) && (i += "margin-bottom: ".concat(t.vertical, "px;")),
					e(t.fontStyle) && (i += "font-family: ".concat(t.fontStyle, ";")),
					e(t.fontColor) && (i += "color: ".concat(t.fontColor, ";")),
					e(t.fontBold) && (i += "font-weight: ".concat(1 === t.fontBold ? "blod": "normal", ";")),
					e(t.spacing) && (i += "letter-spacing: ".concat(t.spacing, "px;")),
					e(t.fontSize) && (i += "font-size: ".concat(t.fontSize, "px;")),
					"Y" === t.fontItalics && (i += "font-style: italic;"),
					i
				}
			}]),
			i
		} (),
		ai = k(299),
		oi = void 0;
		function si(t) {
			var r = 0 < arguments.length && void 0 !== t && t;
			return new E.a(function(e) {
				if (void 0 === oi) {
					var i = document.createElement("video");
					i.src = ai,
					r && (i.muted = !0, i.setAttribute("muted", "muted"));
					var n = document.getElementsByTagName("body")[0] || document.getElementsByTagName("html")[0];
					n.appendChild(i);
					var t = i.play();
					if (!t) return n.removeChild(i),
					void e(!0);
					t.then(function() {
						n.removeChild(i),
						e(!0)
					}).
					catch(function(t) {
						n.removeChild(i),
						e(!1)
					})
				} else e(oi)
			})
		}
		it.a.isSafari || document.addEventListener("click",
		function t() {
			oi = !0,
			document.removeEventListener("click", t)
		});
		var li = function() {
			function e() {
				var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
				b()(this, e),
				G()(this, "mutedPlay", void 0),
				G()(this, "support", void 0),
				G()(this, "onceSupport", void 0),
				this.mutedPlay = t,
				this.support = void 0,
				this.onceSupport = !1
			}
			return x()(e, [{
				key: "bind",
				value: function(e) {
					var i = this;
					if (oi || !0 === this.support || this.onceSupport) return this.onceSupport = !1,
					void e(!0, !1);
					si().then(function(t) { ! t && i.mutedPlay ? si(!0).then(function(t) {
							e(t, !0)
						}) : (i.support = t, e(t, !1))
					})
				}
			}]),
			e
		} ();
		k(300);
		var ci = function() {
			function a(t, e, i, n, r) {
				b()(this, a),
				this.res = t,
				this.el = e,
				this.value = i,
				this.vid = n,
				this.allow = !0,
				this.lang = r
			}
			return x()(a, [{
				key: "setup",
				value: function() {
					var t;
					this.wrap = Object(d.a)((t = this.lang, '<div class="pv-password">\n    <div>\n      <p>'.concat(t.passwordTip, '</p>\n      <div>\n        <input type="password">\n        <button type="button">').concat(t.ok, "</button>\n      </div>\n      <p><small></small></p>\n    </div>\n  </div>"))),
					this.el.append(this.wrap),
					this.input = this.wrap.find("input"),
					this.button = this.wrap.find("button"),
					this.tips = this.wrap.find("small"),
					this.initEvent()
				}
			},
			{
				key: "check",
				value: function() {
					var e = this,
					t = this.input.val().trim();
					if (t || this.showTips(this.lang.inputPassword), t && this.allow) {
						var i = (new Date).getTime();
						this.allow = !1,
						_({
							url: "https://v.polyv.net/uc/admin/checkpassword2",
							dataType: "jsonp",
							data: {
								vid: this.vid,
								password: a.getPassword(t, this.vid, i),
								ts: i
							},
							success: function(t) {
								0 === t ? e.showTips(e.lang.passwordError) : 2 === t ? e.showTips(e.lang.timeError) : (e.res(e.value), e.destroy()),
								e.allow = !0
							},
							error: function() {
								e.showTips(e.lang.networkError),
								e.allow = !0
							}
						})
					}
				}
			},
			{
				key: "destroy",
				value: function() {
					this.wrap && (this.wrap.remove(), this.wrap = void 0)
				}
			},
			{
				key: "showTips",
				value: function(t) {
					this.tips.html(t)
				}
			},
			{
				key: "removeTips",
				value: function() {
					this.tips.html("")
				}
			},
			{
				key: "initEvent",
				value: function() {
					var e = this;
					this.button.on("click",
					function() {
						e.check()
					}),
					this.input.on("keyup",
					function(t) {
						13 === t.keyCode ? e.check() : e.removeTips()
					})
				}
			}], [{
				key: "getPassword",
				value: function(t, e, i) {
					return Object(c.md5)("".concat(t).concat(e).concat(i, "polyvcheckpassword2"))
				}
			}]),
			a
		} ();
		k(302);
		var ui = function() {
			function i(t, e) {
				b()(this, i),
				this.url = e.tg_url,
				this.position = e.tg_position,
				this.content = e.tg_content.slice(4),
				this.type = e.tg_content.slice(0, 3),
				this.opacity = A()(e.tg_opacity),
				this.player = t,
				"txt" === this.type ? this.initTxt() : this.initImg()
			}
			return x()(i, null, [{
				key: "check",
				value: function(t) {
					return !! t
				}
			}]),
			x()(i, [{
				key: "creatEl",
				value: function() {
					this.el = Object(d.a)('<div class="pv-spread '.concat("txt" === this.type ? "pv-spread-text": "pv-spread-image", '">\n        <a target="_blank" href="').concat(this.url, '"></a>\n      </div>'))
				}
			},
			{
				key: "creatClose",
				value: function(t) {
					var e = 0 < arguments.length && void 0 !== t ? t: 1;
					this.close = Object(d.a)('<span class="pv-spread-close" style="opacity:'.concat(e, '">×</span>'))
				}
			},
			{
				key: "initCloseEventHandler",
				value: function() {
					this.close.on("click", this.destroy.bind(this))
				}
			},
			{
				key: "initTxt",
				value: function() {
					this.fontWidth = et.countFontWidth(this.content, 14),
					this.creatEl(),
					this.creatClose(),
					this.marquee = Object(d.a)('<div class="pv-spread-txt"><span>'.concat(this.content, "</span></div>")),
					this.el.prepend(this.marquee),
					this.el.append(this.close),
					this.player.wrap.append(this.el),
					this.initCloseEventHandler(),
					this.resize = this.resizeEvent.bind(this),
					this.setDuration(this.fontWidth, this.player.wrap.width()),
					this.player.on("resize", this.resize)
				}
			},
			{
				key: "setDuration",
				value: function(t, e) {
					this.marquee.css({
						"animation-duration": Math.max((t + e) / 100, 10) + "s"
					})
				}
			},
			{
				key: "resizeEvent",
				value: function(t, e) {
					this.setDuration(this.fontWidth, e)
				}
			},
			{
				key: "initImg",
				value: function() {
					var t = this.opacity / 100;
					this.creatEl(),
					this.creatClose(t),
					this.img = Object(d.a)('<img src="'.concat(this.content, '" style="opacity: ').concat(t, '" />')),
					this.el.addClass("pv-spread-".concat(this.position)),
					this.el.prepend(this.img),
					this.el.append(this.close),
					this.el.insertBefore(this.player.controller.wrap),
					this.initCloseEventHandler()
				}
			},
			{
				key: "destroy",
				value: function() {
					this.el && (this.el.remove(), this.el = void 0, this.close = void 0, this.marquee = void 0, this.img = void 0),
					this.resize && (this.player.off("resize", this.resize), this.resize = void 0)
				}
			}]),
			i
		} (),
		di = function() {
			function e(t) {
				b()(this, e),
				this.player = t,
				this.init(),
				this.start = t.param.start,
				this.end = t.param.end
			}
			return x()(e, [{
				key: "currentTime",
				get: function() {
					return this.player.video.currentTime - this.start
				}
			}], [{
				key: "check",
				value: function(t, e, i) {
					return !! (et.isNumber(t) && et.isNumber(e) && t < e && e < i)
				}
			}]),
			x()(e, [{
				key: "canplay",
				value: function() {
					this.player.seek(0),
					this.player.off(ut.canplay, this.canplayHandler)
				}
			},
			{
				key: "timeupdate",
				value: function() {
					var t = this.player.video;
					t && t.currentTime > this.end && (t.loop ? this.player.seek(0) : (this.player.showCover(), this.player.seek(0), this.player.pause(), window.s2j_onPlayOver && window.s2j_onPlayOver(this.player.vid), this.player.triggerGlobal("s2j_onPlayOver", this.player.vid)))
				}
			},
			{
				key: "init",
				value: function() {
					this.canplayHandler = this.canplay.bind(this),
					this.timeupdateHandler = this.timeupdate.bind(this),
					this.player.on(ut.canplay, this.canplayHandler),
					this.player.on(ut.timeupdate, this.timeupdateHandler)
				}
			},
			{
				key: "destroy",
				value: function() {
					this.player.off(ut.timeupdate, this.timeupdateHandler),
					this.player.off(ut.canplay, this.canplayHandler)
				}
			}]),
			e
		} (),
		hi = (k(304),
		function(t, e, i) {
			return '\n    <div class="pv-visitor">\n      <div class="pv-visitor-container">\n        <div class="pv-visitor-banner">\n          <a href="'.concat(e, '" target="_blank"><img src="').concat(t, '" draggable="false"></a>\n        </div>\n        <div class="pv-visitor-main">\n          <div class="pv-visitor-lists" data-pvVisitor="lists">\n          </div>\n          <div class="pv-visitor-tips" data-pvVisitor="tips">').concat(i.visitorRequire, '</div>\n          <div class="pv-visitor-submit">\n            <span data-pvVisitor="submit">').concat(i.submit, "</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    ").trim()
		}),
		pi = function(t) {
			var e = t.name,
			i = void 0 === e ? "": e,
			n = t.type,
			r = void 0 === n ? "input": n,
			a = t.msg,
			o = void 0 === a ? "": a,
			s = "input" === r ? '<input data-pvVisitor="input" type=\'text\' placeholder="'.concat(et.parseString(o), '">') : '<textarea data-pvVisitor="input" placeholder="'.concat(et.parseString(o), '"></textarea>');
			return '\n      <div class="pv-visitor-list">\n        <span>'.concat(et.parseString(i), "：</span>\n        ").concat(s, "\n      </div>\n    ").trim()
		},
		fi = function() {
			function r(t, e) {
				b()(this, r),
				this.player = t,
				this.lang = t.lang,
				this.data = e,
				this.time = r.getSeconds(this.data.time),
				this.status = !0,
				this.show = !1,
				this.videoTime,
				this.els = {},
				this.init()
			}
			return x()(r, null, [{
				key: "check",
				value: function(t, e) {
					return 0 !== (1 < arguments.length && void 0 !== e ? e: 1) && !!t && !r.getCache(t.qid)
				}
			},
			{
				key: "getSeconds",
				value: function(t) {
					return t.split(":").reverse().reduce(function(t, e, i) {
						return t + Math.pow(60, i) * e
					},
					0)
				}
			},
			{
				key: "setCache",
				value: function(t) {
					et.setStorage("visitor-".concat(t), !0)
				}
			},
			{
				key: "getCache",
				value: function(t) {
					return et.getStorage("visitor-".concat(t))
				}
			}]),
			x()(r, [{
				key: "init",
				value: function() {
					this.timeupdateEvent = this.timeupdate.bind(this),
					this.player.on(ut.timeupdate, this.timeupdateEvent)
				}
			},
			{
				key: "initElement",
				value: function() {
					var i = this;
					if (this.el) try {
						this.el.remove()
					} catch(t) {}
					var e = this;
					this.el = Object(d.a)(hi(this.data.imagelink, this.data.link, this.lang)),
					this.el.find("[data-pvVisitor]").each(function() {
						var t = Object(d.a)(this);
						e.els[t.attr("data-pvVisitor")] = t
					}),
					this.data.fields.forEach(function(e) {
						var t = Object(d.a)(pi(e));
						e.el = t.find("[data-pvVisitor]"),
						i.els.lists.append(t),
						e.el.on("change",
						function(t) {
							e.value = t.target.value.trim(),
							e.showError && e.value && (e.el.removeClass("pv-visitor-error"), e.showError = !1, i.showError && (i.data.fields.every(function(t) {
								return ! t.showError
							}) && (i.els.tips.css("display", "none"), i.showError = !1), i.data.fields))
						})
					}),
					this.els.submit.on("click", this.submit.bind(this)),
					this.player.wrap.append(this.el)
				}
			},
			{
				key: "submit",
				value: function() {
					var e = this;
					if (this.status) {
						var t = this.data,
						i = this.data.fields,
						n = !0;
						if (i.forEach(function(t) {
							t.value || (t.el.addClass("pv-visitor-error"), t.showError = !0, n = !1)
						}), !n) return this.showError = !0,
						void this.els.tips.css("display", "block");
						_({
							url: "".concat(et.protocol, "//v.polyv.net/uc/quserInfoRecord/addInfo"),
							type: "POST",
							data: {
								data: V()({
									id: t.qid,
									time: t.time,
									title: t.title,
									userhref: window.location.href,
									vid: this.player.vid,
									img: t.imagelink,
									link: t.link,
									field: i.map(function(t) {
										return {
											name: t.name,
											value: t.value,
											msg: t.msg,
											type: t.type
										}
									})
								})
							}
						}),
						r.setCache(t.qid),
						this.status = !1,
						this.els.submit.html(this.lang.visitorSubmit).addClass("pv-visitor-success"),
						setTimeout(function() {
							var t = e.player.ask;
							e.remove(!(t && t.isShow))
						},
						2e3)
					}
				}
			},
			{
				key: "remove",
				value: function(t) {
					var e = !(0 < arguments.length && void 0 !== t) || t;
					this.el && (this.el.remove(), this.el = void 0, this.player.off(ut.timeupdate, this.timeupdateEvent), e && this.player.play(), this.player.keypress && this.player.keypress.setAllow(!0))
				}
			},
			{
				key: "destroy",
				value: function() {
					this.remove(!1)
				}
			},
			{
				key: "timeupdate",
				value: function() {
					var t = Math.floor(this.player.currentTime);
					this.status && this.videoTime !== t && t >= this.time && (this.showError = !1, this.videoTime = t, this.show = !0, this.player.pause(), this.initElement(), this.player.keypress.setAllow(!1))
				}
			}]),
			r
		} (),
		vi = (k(306),
		function() {
			function a(t) {
				b()(this, a),
				this.player = t,
				this.lang = t.lang,
				this.wrap = t.videoWrap,
				this.els = {},
				this.pptData = [],
				this.currentIndex,
				this.sClass = "pv-ppt-secondary",
				this.sRClass = "pv-ppt-secondary-".concat(A()(1e6 * Math.random())),
				this.setClass = "".concat(this.sClass, " ").concat(this.sRClass),
				this.main = "video" === t.param.mainScreen ? "video": "ppt",
				this.width = t.param.subWidth,
				this.height = t.param.subHeight,
				this.pptVisible = t.param.pptVisible,
				this.sizeData = {},
				this.currentTime = this.nextTime = 0,
				this.$window = Object(d.a)(window),
				t.videoInfo.ppt && this.init()
			}
			return x()(a, [{
				key: "getPPTdata",
				value: function(t) {
					var i = this;
					return new E.a(function(e) {
						_({
							url: "".concat(et.protocol, "//").concat(i.player.param.beta ? "beta": "player", ".polyv.net/pptjson/").concat(t, ".js"),
							dataType: "json",
							success: function(t) {
								e(t.ppt.page)
							}
						})
					})
				}
			},
			{
				key: "getElements",
				value: function() {
					var t, n = this;
					this.el.find("[data-pvel]").each(function(t, e) {
						var i = Object(d.a)(e);
						n.els[i.attr("data-pvel")] = i
					}),
					this.els.closePPT = Object(d.a)((t = this.height, this.lang, '<div class="pv-ppt-close pv-ppt-close-right" style="height:'.concat(t, 'px" data-pvel="close"><span></span></div>').trim())),
					this.els.ppt = Object(d.a)('<div class="pv-ppt-player"></div>'.trim()),
					this.els.tabLists = this.els.tab.find("[data-pvIndex]"),
					this.els.switchBtn = Object(d.a)('<div class="pv-ppt-switch-btn"></div>'.trim())
				}
			},
			{
				key: "render",
				value: function() {
					this.els.content.html(this.pptData.reduce(function(t, e, i) {
						return "".concat(t).concat((n = e, '\n  <div class="pv-ppt-list" data-pvIndex="'.concat(i, '">\n    <div class="pv-ppt-list-title">').concat(n.title, '</div>\n    <div class="pv-ppt-list-img" title="').concat(n.title, '">\n      <img src="').concat(n.t_img, '" />\n    </div>\n  </div>\n  ').trim()));
						var n
					}, ""))
				}
			}, {
				key: "initEventHandler",
				value: function() {
					var e = this;
					this.els.content.on("click", this.switchChapterHanler.bind(this)),
					this.els.tab.on("click", this.tabHandler.bind(this)),
					this.timeupdate = this.timeupdateHandler.bind(this),
					this.resize = this.resetPPT.bind(this),
					this.player.on(ut.timeupdate, this.timeupdate),
					this.player.on(ut.resize, this.resize);
					function t() {
						var t = n ? e.lang.close: e.lang.menu;
						n = !n,
						e.els.close[n ? "addClass": "removeClass"]("pv-ppt-hide-list").children("span").html(a.formatClose(t))
					}
					function i() {
						var t = r ? e.lang.close: "video" === e.main ? "PPT": e.lang.videoMode;
						r = !r,
						e.currentEl[r ? "addClass": "removeClass"]("pv-hide"),
						e.els.closePPT.children("span").html(a.formatClose(t))
					}
					var n = this.pptVisible,
					r = this.pptVisible;
					this.els.close.on("click", t),
					this.els.closePPT.on("click", i),
					t(),
					i(),
					this.els.switchBtn.on("click", this.switchPlayerHandler.bind(this))
				}
			},
			{
				key: "mousedownEvent",
				value: function(t) {
					if (1 === t.which) {
						var e = t.offsetX,
						i = t.offsetY,
						n = this.wrap.offset(),
						r = this.currentEl.width(),
						a = this.currentEl.height();
						this.sizeData = {
							offsetL: n.left,
							offsetT: n.top,
							outW: this.wrap.width(),
							outH: this.wrap.height(),
							pptW: r,
							pptH: a,
							offsetXR: r - e,
							offsetY: i
						},
						this.$window.on("mousemove", this.moveHandler),
						this.$window.on("mouseup", this.mouseupHandler)
					}
				}
			},
			{
				key: "mouseupEvent",
				value: function() {
					this.$window.off("mousemove", this.moveHandler),
					this.$window.off("mouseup", this.mouseupHandler)
				}
			},
			{
				key: "moveEvent",
				value: function(t) {
					window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
					var e = t.pageX,
					i = t.pageY,
					n = this.sizeData,
					r = n.outW,
					a = n.outH,
					o = n.offsetL,
					s = n.offsetT,
					l = n.offsetY,
					c = n.offsetXR,
					u = n.pptW,
					d = n.pptH,
					h = this.sizeData.right = Math.min(Math.max(r - (e - o) - c, 0), r - u),
					p = this.sizeData.top = Math.max(Math.min(i - s - l, a - d), 0);
					this.setStyle(h, p)
				}
			},
			{
				key: "setStyle",
				value: function(t, e) {
					this.els.style.text(".".concat(this.sClass, ".").concat(this.sRClass, "{right:").concat(t, "px !important;top:").concat(e, "px !important}")),
					this.els.switchBtn.css({
						right: "".concat(t + 44, "px"),
						top: "".concat(e + (this.height - 60), "px")
					})
				}
			},
			{
				key: "initMoveEvent",
				value: function(t) {
					this.currentEl && (this.currentEl.off("mousedown", this.mousedownHandler), this.els.style.text("")),
					"video" === this.main ? (this.offPPTClickEvent && this.offPPTClickEvent(), this.offPPTClickEvent = void 0, this.player.offClickEvent = xe(this.player, this.player.$video)) : (this.player.offClickEvent && this.player.offClickEvent(), this.player.offClickEvent = void 0, this.offPPTClickEvent = xe(this.player, this.els.ppt)),
					this.currentEl = t,
					this.mousedownHandler = this.mousedownEvent.bind(this),
					this.mouseupHandler = this.mouseupEvent.bind(this),
					this.moveHandler = this.moveEvent.bind(this),
					t.on("mousedown", this.mousedownHandler)
				}
			},
			{
				key: "resetPPT",
				value: function() {
					this.els.style.text(""),
					this.resetSwitchBtnStyle()
				}
			},
			{
				key: "resetSwitchBtnStyle",
				value: function() {
					this.els.switchBtn.attr("style", "")
				}
			},
			{
				key: "switchPlayerHandler",
				value: function() {
					var t = this.player.$video,
					e = this.els.ppt;
					this.resetPPT(),
					"video" === this.main ? (e.removeClass(this.setClass), t.addClass(this.setClass), this.main = "ppt", this.initMoveEvent(t)) : (t.removeClass(this.setClass), e.addClass(this.setClass), this.main = "video", this.initMoveEvent(e))
				}
			},
			{
				key: "switchMain",
				value: function(t) {
					var e = this.main; (!t || "player" === t && "ppt" === e || "ppt" === t && "video" === e) && this.switchPlayerHandler()
				}
			},
			{
				key: "tabHandler",
				value: function(t) {
					var e, i = +t.target.getAttribute("data-pvIndex");
					i && (e = 2 == i ? (this.els.content.addClass("pv-ppt-image"), 0) : (this.els.content.removeClass("pv-ppt-image"), 1), Object(d.a)(this.els.tabLists.dom[e]).removeClass("pv-active"), Object(d.a)(this.els.tabLists.dom[i - 1]).addClass("pv-active"))
				}
			},
			{
				key: "switchChapterHanler",
				value: function(t) {
					for (var e, i = t.target; i !== this.els.content.dom[0];) {
						var n = i.getAttribute("data-pvIndex");
						if (n) {
							e = A()(n);
							break
						}
						i = i.parentNode
					}
					if (void 0 !== e) {
						var r = this.pptData[e];
						this.seek(r.sec)
					}
				}
			},
			{
				key: "timeupdateHandler",
				value: function() {
					var t = Math.floor(this.player.currentTime),
					e = this.timeArray,
					i = this.len;
					if (! (t >= this.currentTime && (void 0 === this.nextTime || t < this.nextTime))) for (var n = 0; n < i; n++) if (e[n] <= t && (i - 1 === n || e[n + 1] > t)) {
						this.currentIndex !== n && this.switchPPT(n);
						break
					}
				}
			},
			{
				key: "switchPPT",
				value: function(t) {
					var e = this.pptData[t];
					this.els.ppt.css({
						backgroundImage: "url(".concat(e.img, ")")
					}),
					void 0 !== this.currentIndex && Object(d.a)(this.listsDom.dom[this.currentIndex]).removeClass("pv-active"),
					Object(d.a)(this.listsDom.dom[t]).addClass("pv-active"),
					this.currentIndex = t,
					this.currentTime = this.timeArray[t],
					this.nextTime = this.timeArray[t + 1]
				}
			},
			{
				key: "seek",
				value: function(t) {
					this.player.seek(A()(t))
				}
			},
			{
				key: "destroy",
				value: function() {
					this.el && (this.el.remove(), this.els.switchBtn.remove(), this.els.closePPT.remove(), this.player.off(ut.timeupdate, this.timeupdate), this.player.off(ut.resize, this.resize), this.els.ppt.remove(), "ppt" === this.main && (this.player.$video.removeClass(this.setClass).removeClass("pv-hide"), this.player.offClickEvent = xe(this.player, this.player.$video)))
				}
			},
			{
				key: "init",
				value: function() {
					var o = this;
					this.getPPTdata(this.player.vid).then(function(t) {
						var e, i, n, r, a;
						o.el = Object(d.a)((i = o.width, n = o.height, r = o.sRClass, a = o.lang, '\n  <div class="pv-ppt-control">\n    <div class="pv-ppt-close" data-pvel="close"><span></span></div>\n    <div class="pv-ppt-lists">\n      <div class="pv-ppt-tab" data-pvel="tab">\n        <span class="pv-active" data-pvIndex="1">'.concat(a.pptText, '</span>\n        <span data-pvIndex="2">').concat(a.pptThumbnails, '</span>\n      </div>\n      <div class="pv-ppt-container" data-pvel="content">\n      </div>\n    </div>\n    <style type="text/css" data-pvel="style"></style>\n    <style type="text/css">\n      .').concat(r, " {width:").concat(i, "px !important;height:").concat(n, "px  !important}\n      .pv-ppt-switch-btn { top: ").concat(n - 60, "px }\n    </style>\n  </div>\n  ").trim())),
						o.el.insertBefore(o.player.controller.wrap),
						o.getElements(),
						o.wrap.append(o.els.closePPT),
						o.els.ppt.insertBefore(o.player.video),
						o.els.switchBtn.insertAfter(o.player.video),
						e = "video" === o.main ? o.els.ppt.addClass(o.setClass) : o.player.$video.addClass(o.setClass),
						o.pptData = t.sort(function(t, e) {
							return A()(t.sec) - A()(e.sec)
						}),
						o.timeArray = o.pptData.map(function(t) {
							return A()(t.sec)
						}),
						o.len = o.timeArray.length,
						o.render(),
						o.listsDom = o.els.content.find("[data-pvIndex]"),
						o.initMoveEvent(e),
						o.initEventHandler(),
						o.player.once(ut.changeVideoDestroy, o.destroy.bind(o))
					})
				}
			}], [{
				key: "formatClose",
				value: function(t) {
					return t.split("").reduce(function(t, e) {
						return "".concat(t).concat(e, "<br>")
					},
					"")
				}
			}]),
			a
		} ()),
		gi = function() {
			function i(t) {
				var e = this;
				b()(this, i),
				this.player = t,
				this.lastTime = 0,
				this.vid = t.vid,
				this.done = !1,
				this.normalPlay = !0,
				this.timeupdateEvent = this.timeupdate.bind(this),
				this.player.on(ut.loadedmetadata, this.loadedmetadata.bind(this)),
				this.player.on(ut.timeupdate, this.timeupdateEvent),
				this.player.on(ut.destroy,
				function() {
					e.player.off(ut.timeupdate, e.timeupdateEvent)
				})
			}
			return x()(i, [{
				key: "loadedmetadata",
				value: function() {
					var t = this.player.vid;
					t !== this.vid && (this.lastTime = 0, this.vid = t, this.normalPlay = !0, this.done = !1)
				}
			},
			{
				key: "timeupdate",
				value: function() {
					if (!this.done) {
						var t = this.lastTime,
						e = this.player,
						i = e.currentTime,
						n = i - t;
						if (e.duration - i < 5 && this.normalPlay && n < 1) return this.done = !0,
						void("function" == typeof window.playCompleted && (window.playCompleted(this.vid), this.player.triggerGlobal("playCompleted", this.vid)));
						5 < i && !1 === this.normalPlay || (1 <= n || n < 0 && 5 <= i ? this.normalPlay = !1 : n < 1 && 5 <= i || (this.normalPlay = !0)),
						this.lastTime = i
					}
				}
			}]),
			i
		} (),
		mi = [160, 158, 156, 154, 152, 150],
		Ai = mi.length,
		yi = {};
		mi.forEach(function(t, e) {
			for (var i = 0; i < Ai; i++) yi["abcdefghijklmnopqrstuvwxyz1234567890" [e * Ai + i]] = [t, mi[i]]
		});
		var bi, wi, ki = yi,
		Ei = {
			M150: k(309),
			M152: k(310),
			M154: k(311),
			M156: k(312),
			M158: k(313),
			M160: k(314)
		},
		xi = function() {
			function n(t) {
				b()(this, n),
				this.player = t,
				this.timeupdateEvent = null,
				this.volumechange = null,
				this.endedHandler = null,
				this.audio = null,
				this.playStartEvent = this.playStart.bind(this),
				this.player.once(ut.playStart, this.playStartEvent),
				this.debug = "source" === t.param.debug
			}
			return x()(n, null, [{
				key: "getTimeNodes",
				value: function(t) {
					for (var e = function(t) {
						return Math.floor(Math.random() * t)
					},
					i = {},
					n = 900; n < t; n += 900) {
						i[(n - e(600)).toString()] = !0
					}
					return t <= 900 && (i[e(t).toString()] = !0),
					i
				}
			}]),
			x()(n, [{
				key: "playStart",
				value: function() {
					var t = this;
					if (this.player.token) {
						var e = this.player.token.split("-").pop();
						if (e) {
							var i = Math.floor(this.player.duration - 2 * e.length);
							if (! (i < 0)) {
								this.userId = zt(e).toLowerCase();
								this.nodes = n.getTimeNodes(i),
								this.debug && console.log(this.nodes),
								this.initAudio(function() {
									t.timeupdateEvent = t.timeupdate.bind(t),
									t.player.on(ut.timeupdate, t.timeupdateEvent)
								}),
								this.playStartEvent = null
							}
						}
					}
				}
			},
			{
				key: "initAudio",
				value: function(t) {
					var e = this,
					i = 0 < arguments.length && void 0 !== t ? t: function() {};
					this.audio = document.createElement("audio"),
					this.audio.src = Ei.M150,
					this.volumechange = function() {
						if (!e.player.muted) {
							var t = e.audio.play();
							t && t.then(function() {
								i()
							}).
							catch(function(t) {}),
							e.player.off(ut.volumechange, e.volumechange),
							e.volumechange = null
						}
					},
					this.player.muted ? this.player.on(ut.volumechange, this.volumechange) : i()
				}
			},
			{
				key: "timeupdate",
				value: function() {
					var t = Math.floor(this.player.currentTime).toString();
					this.nodes[t] && !this.endedHandler && (this.play(), delete this.nodes[t], 0 === L()(this.nodes).length && (this.player.off(ut.timeupdate, this.timeupdateEvent), this.timeupdateEvent = null))
				}
			},
			{
				key: "play",
				value: function() {
					var t = this,
					e = this.srcLists;
					if (0 !== e.length) {
						var i = this.audio;
						this.endedHandler = function() {
							0 < e.length ? (i.src = e.shift(), i.play()) : (i.removeEventListener("ended", t.endedHandler), t.endedHandler = null, t.debug && console.log("end"))
						},
						i.addEventListener("ended", this.endedHandler),
						i.src = e.shift();
						var n = i.play();
						n && n.
						catch(function(t) {})
					}
				}
			},
			{
				key: "destroy",
				value: function() {
					this.volumechange && this.player.off(ut.volumechange, this.volumechange),
					this.timeupdateEvent && this.player.off(ut.timeupdate, this.timeupdateEvent),
					this.playStartEvent && this.player.off(ut.playStart, this.playStartEvent),
					this.endedHandler && this.audio && this.audio.removeEventListener("ended", this.endedHandler),
					this.audio && this.audio.pause(),
					this.player = null,
					this.audio = null
				}
			},
			{
				key: "srcLists",
				get: function() {
					return (this.userId || "").split("").reduce(function(t, e) {
						return t.concat(ki[e].map(function(t) {
							return Ei["M".concat(t)]
						}))
					},
					[])
				}
			}]),
			n
		} (),
		Ti = function() {
			function n(t) {
				b()(this, n);
				var e = (this.player = t).videoInfo,
				i = t.param;
				this.showTail = e.tail_show,
				void 0 !== e.player.tail_show && (this.showTail = e.player.tail_show),
				void 0 !== i.tail_show && (this.showTail = i.tail_show),
				this.loop = this.player.param.loop,
				this.tailUrl = i.tail_url || e.player.tail_url || e.tail_url,
				this.tailTime = i.tail_time || e.player.tail_time || e.tail_time,
				this.tailType = ge(this.tailUrl),
				this.tailTime || "image" !== this.tailType || (this.tailTime = 3),
				this.wrap = Object(d.a)("<div />").addClass(dt.a.teaser),
				this.skip = i.tailSkip,
				this.skipBtn = Object(d.a)('<span class="'.concat(dt.a.teaser, '-skip" />')).html(t.lang.skip),
				this.startPlay = !1,
				this.endedEvent = void 0,
				this.status = "NOT_PLAY",
				this.clock,
				this.hasTail ? (this.player.video.loop = !1, this.setup()) : (this.status = "ENDING", this.player.tailEnding = !0)
			}
			return x()(n, [{
				key: "hasTail",
				get: function() {
					var t = this.tailType,
					e = !0;
					return t && ("video" !== t || this.tailTime) || (e = !1),
					0 === this.showTail && (e = !1),
					e
				}
			}]),
			x()(n, [{
				key: "register",
				value: function(t) {
					this.startPlay = !!t
				}
			},
			{
				key: "initVideo",
				value: function(t) {
					var e = this,
					i = document.createElement("video"),
					n = Object(d.a)(i);
					i.src = this.tailUrl,
					i.preload = !0,
					this.video = i,
					this.wrap.append(i),
					n.on("error",
					function() {
						e.skipTail(t)
					}),
					n.on("ended",
					function() {
						e.skipTail(t)
					}),
					n.on("volumechange",
					function() {
						it.a.isIpad ? e.player.controller.renderVolumeBtn(!e.video.muted) : e.player.controller.renderVolume(i)
					})
				}
			},
			{
				key: "initImage",
				value: function() {
					this.wrap.css({
						backgroundImage: "url(".concat(this.tailUrl, ")")
					})
				}
			},
			{
				key: "initSkip",
				value: function() {
					var t = this;
					this.wrap.append(this.skipBtn),
					this.skipBtn.on("click",
					function() {
						t.skipTail()
					})
				}
			},
			{
				key: "skipTail",
				value: function() {
					this.destroy(),
					this.endHandler()
				}
			},
			{
				key: "setup",
				value: function() {
					var t = this,
					e = (this.wrap, this.skip);
					this.tailTime;
					this.endedEvent = function() {
						t.wrap.insertAfter(t.player.$video),
						"image" === t.tailType ? t.initImage() : t.initVideo(),
						t.render(),
						e && t.initSkip(),
						t.player.pip && t.player.pip.exit(),
						t.player.trigger(ut.tailStart, t.tailTime)
					},
					this.player.on(ut.ended, this.endedEvent)
				}
			},
			{
				key: "render",
				value: function() {
					var e = this;
					this.status = "PLAYING";
					var i = this.player;
					this.video && i.autoplay.bind(function(t) {
						t ? (i.volume = e.player.globalVolume, i.controller.renderCurrentStyle(e.player.globalVolume)) : (e.video.muted = !0, e.player.volume = 0),
						e.video.play()
					}),
					this.clock = setTimeout(function() {
						e.skipTail()
					},
					1e3 * this.tailTime),
					i.wrap.removeClass(dt.a.paused)
				}
			},
			{
				key: "endHandler",
				value: function() {
					this.status = "ENDING",
					this.player.tailEnding = !0,
					this.player.trigger(ut.tailEnded, this.tailTime),
					this.player.endAdshouldPlay || (this.loop ? (this.player.play(), this.player.video.loop = !0) : this.player.showCover())
				}
			},
			{
				key: "destroy",
				value: function() {
					clearTimeout(this.clock),
					"video" === this.tailType && this.video && this.video.pause(),
					this.wrap.remove(),
					this.playEvent && (this.player.coverPlay.off("click", this.playEvent), this.player.Elements.playpause.off("click", this.playEvent)),
					this.endedEvent && (this.player.off(ut.ended, this.endedEvent), this.endedEvent = void 0)
				}
			}]),
			n
		} ();
		function Si(t) {
			k(315);
			var e = document.createElement("div");
			e.setAttribute("class", "pv-recommend".concat(t.isHls ? "": " pv-recommend-share"));
			var r, a, o, i, n, s, l, c, u, d, h, p, f = t.isHls ? 4 : 3,
			v = Math.ceil(t.list.length / f),
			g = 100 * v + 10 * (v - 1),
			m = '\n  <div class="pv-recommend-container">\n    <div class="pv-recommend-p1">\n      <div class="pv-recommend-p1-cover" style="background-image: url('.concat(t.coverImage, ')">\n        <div>\n          <span data-pvTrtype="replay">').concat(t.lang.replayTail, "</span>\n        </div>\n      </div>\n      ").concat(t.isHls ? "": (i = t.vid, n = t.videoTitle, s = t.coverImage, l = encodeURIComponent("https://share.plvideo.cn/front/video/preview?vid=".concat(i)), c = encodeURIComponent(n), u = et.addQuery("https://v.polyv.net/uc/services/barcode", {
				url: l
			}), d = et.addQuery("https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey", {
				title: c,
				url: l,
				pic: s
			}), h = et.addQuery("https://connect.qq.com/widget/shareqq/index.html", {
				url: l,
				title: c,
				source: c,
				pics: s
			}), p = et.addQuery("https://service.weibo.com/share/share.php", {
				url: l,
				title: c,
				pic: s
			}), '\n  <div class="pv-recommend-p1-share">\n    <div class="pv-recommend-qrcode">\n      <div>扫一扫，手机继续看</div>\n      <div style="background-image: url('.concat(u, ')"></div>\n    </div>\n    <div class="pv-recommend-click">\n      <div>一键分享</div>\n      <div>\n        <div class="pv-recommend-link">\n          <a href="').concat(d, '" target="_blank" rel=noopener></a>\n          <a href="').concat(h, '" target="_blank" rel=noopener></a>\n          <a href="').concat(p, '" target="_blank" rel=noopener></a>\n        </div>\n        <div class="pv-recommend-copy">\n          <span data-pvTrtype="copyHTML">复制 HTML 代码</span>\n          <span data-pvTrtype="copyCommonCode">复制通用代码</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  ').trim()), '\n    </div>\n    <div class="pv-recommend-p2">\n      <div class="pv-recommend-p2-title">').concat(t.title, '</div>\n      <div class="pv-recommend-p2-list">\n        <div class="js-pv-rt-list" style="width: ').concat(g, '%">').concat((r = t.list, a = f, o = Math.ceil(r.length / a), pt()(new Array(o)).reduce(function(t, e, i) {
				var n = a * i;
				return t + '<div class="pv-recommend-list-part" style="width: '.concat(1 / (o + (o - 1) / 10) * 100, '%;"><div>') + r.slice(n, n + a).reduce(function(t, e) {
					return t + '<div title="'.concat(e.title, '" data-pv-tr-vid="').concat(e.vid, '">\n        <div class="pv-recommend-cover">\n          <img src="').concat(e.firstImage, '" alt="').concat(e.title, '">\n          <span>').concat(e.duration, "</span>\n        </div>\n        <div>").concat(e.title, "</div>\n      </div>")
				},
				"") + "</div></div>"
			},
			"")), '</div>\n      </div>\n      <div class="pv-recommend-p2-nav js-pv-rt-nav ').concat(1 < v ? "": "pv-hide", '">\n        <span class="pv-iconfont pv-icon-btn-arrowLeft" data-pvTrtype="prev"></span>\n        <span class="pv-iconfont pv-icon-btn-arrowRight" data-pvTrtype="next"></span>\n      </div>\n    </div>\n  </div>\n  ').trim();
			e.insertAdjacentHTML("beforeend", m);
			var A = e.querySelector(".js-pv-rt-list"),
			y = e.querySelector(".js-pv-rt-nav"),
			b = "pv-recommend-p2-nav-start",
			w = "pv-recommend-p2-nav-end";
			return null != y && y.classList.add(b),
			{
				el: e,
				_index: 0,
				get index() {
					return this._index
				},
				set index(t) {
					0 === t && null != y && y.classList.add(b),
					0 === this._index && 0 !== t && null != y && y.classList.remove(b),
					t === this.max && null != y && y.classList.add(w),
					this._index === this.max && t !== this.max && null != y && y.classList.remove(w),
					this._index = t
				},
				max: v - 1,
				next: function() {
					this.index < this.max && this.goto(++this.index)
				},
				prev: function() {
					A && 0 < this.index && this.goto(--this.index)
				},
				goto: function(t) {
					var e;
					A && (A.style.transform = "translateX(-".concat(((e = t) + e / 10) / g * 1e4, "%)"))
				}
			}
		} (wi = bi = bi || {})[wi.noTail = 0] = "noTail",
		wi[wi.relateList = 1] = "relateList",
		wi[wi.newestList = 2] = "newestList",
		wi[wi.hottestList = 3] = "hottestList",
		wi[wi.recommendList = 4] = "recommendList",
		wi[wi.returnTeaser = 5] = "returnTeaser",
		wi[wi.customList = 6] = "customList";
		var _i = function() {
			function n(t, e) {
				var i = this;
				b()(this, n),
				this.player = t,
				this.dom = e,
				G()(this, "type", void 0),
				G()(this, "vid", void 0),
				G()(this, "list", void 0),
				G()(this, "endEventName", void 0),
				G()(this, "firstEventName", void 0),
				G()(this, "$el", void 0),
				G()(this, "templateToolkit", void 0),
				G()(this, "timeout", void 0),
				G()(this, "playStart",
				function() {
					i.player.setReplayCover()
				}),
				G()(this, "firstEvent",
				function() {
					i.createDom(),
					i.bindEvent(),
					i.firstEventName = void 0,
					i.endEventName = ut.ended,
					i.player.on(i.endEventName, i.endEvent),
					i.player.once(ut.playing, i.hide.bind(i)),
					i.hideCover(),
					i.setTimeout()
				}),
				G()(this, "endEvent",
				function() {
					i.hideCover(),
					i.show(),
					i.player.once(ut.playing, i.hide.bind(i))
				}),
				this.type = t.videoInfo.tailRecommendOpt || 0,
				this.vid = t.vid,
				0 === this.type || t.param.loop || !0 !== t.param.endScreen || this.init()
			}
			function t() {
				return e.apply(this, arguments)
			}
			var e, i;
			function r() {
				return i.apply(this, arguments)
			}
			return x()(n, [{
				key: "init",
				value: function() {
					var i = this;
					5 === this.type ? this.player.once(ut.playStart, this.playStart) : n.getData(this.vid).then(function(t) {
						var e = t[bi[i.type]];
						e instanceof Array && 0 < e.length ? (i.list = e, i.listenEvent()) : console.warn("Can not found tail recommend data")
					})
				}
			},
			{
				key: "listenEvent",
				value: function() {
					var t = this.player;
					t.endAdshouldPlay ? this.firstEventName = ut.tailADEnded: t.hasTail ? this.firstEventName = ut.tailEnded: this.firstEventName = ut.ended,
					t.once(this.firstEventName, this.firstEvent)
				}
			},
			{
				key: "clearTimeout",
				value: (i = function() {
					this.timeout && (clearTimeout(this.timeout), this.timeout = void 0)
				},
				r.toString = function() {
					return i.toString()
				},
				r)
			},
			{
				key: "setTimeout",
				value: (e = function() {
					var e = this;
					this.clearTimeout(),
					this.timeout = setTimeout(function() {
						var t = e.templateToolkit;
						t && (t.index === t.max ? (t.goto(0), t.index = 0) : t.next()),
						e.setTimeout()
					},
					1e4)
				},
				t.toString = function() {
					return e.toString()
				},
				t)
			},
			{
				key: "hideCover",
				value: function() {
					var t = this;
					setTimeout(function() {
						t.player.hideCover()
					},
					0)
				}
			},
			{
				key: "show",
				value: function() {
					this.$el && (this.$el.classList.remove("pv-hide"), this.setTimeout())
				}
			},
			{
				key: "hide",
				value: function() {
					this.$el && this.$el.classList.add("pv-hide"),
					this.clearTimeout()
				}
			},
			{
				key: "copyCommonCode",
				value: function() {
					var t = '<iframe src="https://share.plvideo.cn/front/video/preview?vid='.concat(this.vid, '" frameborder="0" allowfullscreen="true" width="100%" height="100%"></iframe>');
					et.copyText(t) && this.player.log.show("复制成功", 2e3)
				}
			},
			{
				key: "copyHTML",
				value: function() {
					var t = '\n    <div id="player"></div>\n    <script src="https://player.polyv.net/script/player.js"><\/script>\n    <script>\n      var player = polyvPlayer({\n        wrap: \'#player\',\n        width: 800,\n        height: 533,\n        vid: \''.concat(this.vid, "',\n      });\n    <\/script>\n    ");
					et.copyText(t) && this.player.log.show("复制成功", 2e3)
				}
			},
			{
				key: "bindEvent",
				value: function() {
					var r = this;
					this.$el && (this.$el.addEventListener("click",
					function(t) {
						var e = t.target.getAttribute("data-pvTrtype");
						if ("replay" === e) r.player.play();
						else if ("copyHTML" === e) r.copyHTML();
						else if ("copyCommonCode" === e) r.copyCommonCode();
						else if ("next" === e) {
							var i;
							null !== (i = r.templateToolkit) && void 0 !== i && i.next(),
							r.setTimeout()
						} else if ("prev" === e) {
							var n;
							null !== (n = r.templateToolkit) && void 0 !== n && n.prev(),
							r.setTimeout()
						}
					}), pt()(this.$el.querySelectorAll("div[data-pv-tr-vid]")).forEach(function(e) {
						e.addEventListener("click",
						function() {
							var t = e.getAttribute("data-pv-tr-vid");
							t && r.player.changeVid({
								vid: t,
								autoplay: !0
							})
						})
					}))
				}
			},
			{
				key: "createDom",
				value: function() {
					var t = this.player,
					e = this.vid,
					i = this.list;
					i && (this.templateToolkit = Si({
						lang: t.lang,
						vid: e,
						isHls: t.isHls,
						title: t.lang[bi[this.type]],
						list: pt()(i),
						coverImage: t.coverImage,
						videoTitle: t.videoInfo.title || ""
					}), this.$el = this.templateToolkit.el, this.dom.insertAdjacentElement("afterend", this.$el))
				}
			},
			{
				key: "destroy",
				value: function() {
					this.clearTimeout(),
					5 === this.type && (this.player.setReplayCover(!0), this.player.off(ut.playStart, this.playStart)),
					this.$el && (et.removeChild(this.$el), this.$el = void 0),
					this.firstEventName && (this.player.once(this.firstEventName, this.firstEvent), this.firstEventName = void 0),
					this.endEventName && (this.player.off(this.endEventName, this.endEvent), this.endEventName = void 0)
				}
			}], [{
				key: "getData",
				value: function(i) {
					return new E.a(function(t, e) {
						_({
							url: "https://v.polyv.net/rjson/".concat(i, ".js"),
							dataType: "json",
							success: t,
							error: e
						})
					})
				}
			}]),
			n
		} ();
		function Ci(i, n, r) {
			var t = et.getLocation(i);
			t && t.pathname ? _({
				url: "https://player.polyv.net/token2".concat(t.pathname, ".json"),
				dataType: "json",
				success: function(t) {
					if ("success" !== t.message) return r(i);
					var e = function(t, e) {
						var i = c.aes.util.b(e.substring(0, 16)),
						n = c.aes.util.toBytes(t),
						r = new c.aes.m.c(i, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], !0).d(n),
						a = c.aes.util.convertBytesToString(r);
						try {
							return JSON.parse(kt.Base64.decode(a))
						} catch(t) {
							return void console.warn(t)
						}
					} (t.result, n);
					r(e ? et.addQuery(i, {
						auth_key: e.auth_key
					}) : i)
				},
				error: function() {
					r(i)
				}
			}) : r(i)
		}
		function Li(t, e, i, n) {
			var r = 2 < arguments.length && void 0 !== i ? i: function() {},
			a = 3 < arguments.length && void 0 !== n ? n: function() {};
			M()(t, e, {
				get: r,
				set: a
			})
		}
		var Ri = k(110),
		Di = function() {
			function r(t, e, i) {
				b()(this, r),
				this.controller = e,
				G()(this, "$el", void 0),
				G()(this, "$btn", void 0);
				var n = function(t) {
					var e = document.createElement("div");
					e.classList.add("pv-line-tips");
					var i = '\n    网络异常，建议\n    <a href="javascript:;">切换线路</a>\n    重试\n    <span>×</span>\n  ';
					"en" === t && (i = '\n      Network Error, please try to \n      <a href="javascript:;">switch lines</a>\n      <span>×</span>\n    '),
					e.insertAdjacentHTML("afterbegin", i);
					var n = e.querySelector("a");
					return e.querySelector("span").addEventListener("click",
					function() {
						X(e)
					}),
					{
						$el: e,
						$btn: n
					}
				} (i);
				this.$el = n.$el,
				this.$btn = n.$btn,
				t.appendChild(this.$el),
				this._init()
			}
			return x()(r, [{
				key: "_init",
				value: function() {
					var t = this;
					this.$btn.addEventListener("click",
					function() {
						t.controller.switchToNextLine(),
						t.remove()
					})
				}
			},
			{
				key: "remove",
				value: function() {
					X(this.$el)
				}
			}]),
			r
		} (),
		Ii = S()("marquee"),
		Mi = function() {
			function w(t, e) {
				if (b()(this, w), !et.isObject(t)) throw new Error("param is not an Object");
				this.param = m()({},
				ft, t),
				(!et.isNumber(t.preloadDataSize) || t.preloadDataSize < 500) && (this.param.preloadDataSize = 15e3),
				(!et.isNumber(t.preloadDurationLength) || t.preloadDurationLength < 10) && (this.param.preloadDurationLength = 10);
				var i, n, r, a, o = t.show_rate;
				o && (o % 1 != 0 || o < 1 || 2 < o) && (this.param.show_rate = void 0),
				this.debug = this.param.debug,
				this.preloadDataSize = this.param.preloadDataSize,
				this.preloadDurationLength = this.param.preloadDurationLength,
				this.version = e.version,
				this._global = e,
				it.a.isIpad && (this.param.mutedAutoplay = !0),
				this.autoplay = new li(this.param.mutedAutoplay),
				this.observer = Ee(this),
				this.defaultAudioCodec = void 0,
				this.shouldUpdate = !0,
				this.firstInit = !0,
				this.adStatus = {},
				this.tailEnding = !1,
				this.teaserEnd = !1,
				this.eventInit = !1,
				this.pausePlaybackRate = 1,
				this.vid = this.param.vid,
				this.token = "",
				this.globalVolume = this.param.volume,
				this.videojson = new Tt(this.param.vid, this.param.beta),
				this.param.elementClass = dt.a,
				this.ele = Object(d.a)(this.param.wrap),
				this.loading = Object(d.a)("<div />").addClass("pv-loading").append(bt, bt, bt).dom[0],
				this.wrap = (i = this.param, n = i.height || "100%", r = Object(d.a)("<div />").addClass(i.elementClass.wrap).css({
					width: "number" == typeof i.width ? i.width + "px": i.width,
					height: "number" == typeof n ? n + "px": n
				}), a = i.video_align, -1 !== nt.indexOf(a) && r.addClass("pv-object-position-".concat(a)), it.a.isIpad && r.addClass(i.elementClass.ipad), r),
				this.dom = this.wrap.dom[0],
				this.videoWrap = Object(d.a)("<div />").addClass(dt.a.videoWrap),
				this.$video = new at(this.param).init(),
				this.video = this.$video.dom[0],
				this.log = new Jt(this.videoWrap.dom[0]),
				this.coverObj = lt(this.param),
				this.coverPlay = this.coverObj.playBtn(),
				this.cover = this.coverObj.wrap(),
				this.cover.append(this.coverPlay),
				this.isOriginMp3Url = !1,
				this.preVideoisOriginMp3Url = !1,
				this.originDuration = void 0,
				this.lineController = void 0,
				this.lineTip = void 0
			}
			return x()(w, [{
				key: "mp4Init",
				value: function(t) {
					var e = this.param.show_rate,
					i = this.mp4List = w.addMp4PidAndAppId(this.videoInfo.h5pcmp4 || this.videoInfo.mp4, t, this.param.appId);
					e && (i = this.mp4List = i.slice(0, e)),
					this.errorList = [],
					i.unshift(i[0]);
					var n = i.length;
					this.levels = n - 1;
					var r = this.videoInfo.my_br,
					a = r < n ? r: n - 1;
					this.currentSrc = i[a],
					this.renderQualitySelect(n, a)
				}
			},
			{
				key: "renderQualitySelect",
				value: function(t, n) {
					var r = this;
					this.currentLevel = n;
					var a = this.Elements.qualitySelect,
					e = this.Elements.qualityBtn,
					o = this.quality,
					i = this.param.showAuto ? 0 : 1;
					this.qualityBtnLists = [],
					e.html(o[n]),
					a.empty();
					for (var s = function(t) {
						var e = o[t],
						i = Object(d.a)("<div />").attr("qt", e);
						r.qualityBtnLists.push(i),
						t === n && (r.$currentBit = i.addClass(dt.a.active), r.trigger(ut.changeLevel, t)),
						i.append("<span>".concat(e, "</span>")),
						a.prepend(i),
						i.on("click",
						function() {
							r.video.src && r.changeLevel(t)
						})
					},
					l = i; l < t; l++) s(l)
				}
			},
			{
				key: "initHlsLineController",
				value: function() {
					var t, e = this.videoInfo;
					if (this.lineController) return this.lineController.originLine !== this.lineController.line && (t = this.lineController.line),
					t;
					this.lineController = new Ri.a(this, e.currentLine, e.cdn_types),
					this.lineController.hasMultiLine && this.renderLineSelect()
				}
			},
			{
				key: "renderLineSelect",
				value: function() {
					var o = this;
					if (this.lineController) {
						this.controller.wrap.removeClass(dt.a.line.hide);
						var t = this.lineController,
						e = (t.line, t.cdns),
						s = this.Elements.lineSelect;
						s.children("[data-line]").remove();
						var l = "skin_gold" === this.controller.skinSetting.skin,
						c = this.lineController.lineIndex,
						u = [];
						e.forEach(function(t, e) {
							var i, n, r = "".concat(o.lang.line).concat(e + 1),
							a = Object(d.a)((i = t, n = r, l ? '<div data-line="'.concat(i, '">').concat(dt.a.svg.select, "<span>").concat(n, "</span></div>") : '<span data-line="'.concat(i, '">').concat(n, "</span>")));
							e === c && (o.Elements.lineBtn.text(r), a.addClass(dt.a.active)),
							s.append(a),
							u.push(a),
							a.on("click",
							function() {
								o.lineController.lineIndex !== e && (o.switchLine(e) || console.warn("Failed to switch line"))
							})
						}),
						this.trigger(ut.renderLineControl, e.length),
						this.lineController.on("linechange",
						function(t, e) {
							var i = u[e],
							n = u[t];
							n && n.addClass(dt.a.active),
							i && i.removeClass(dt.a.active);
							var r = "".concat(o.lang.line).concat(t + 1);
							o.Elements.lineBtn.text(r),
							o.trigger(ut.linechange, t, e),
							o.lineTip && (o.lineTip.remove(), o.lineTip = void 0)
						})
					}
				}
			},
			{
				key: "switchLine",
				value: function(t) {
					return !! this.lineController && this.lineController.switchLineByIndex(t)
				}
			},
			{
				key: "switchVideoSrc",
				value: function(t, e, i) {
					var n = this;
					2 < arguments.length && void 0 !== i && i && et.isCuplayerUrl(t) ? Ci(t, this.vid,
					function(t) {
						n.video.src = t,
						"function" == typeof e && e()
					}) : (this.video.src = t, "function" == typeof e && e())
				}
			},
			{
				key: "changeLevel",
				value: function(t) {
					var e = this;
					if (!this.ignoreRespondEvent && !this.videoInfo.keepsource) {
						var i = this.mp4List;
						if (i && -1 < this.errorList.indexOf(i[t])) this.log.show(this.warnMessage.qualityError, 2e3);
						else if (! (this.levels < t)) {
							var n = this.currentLevel;
							this.currentLevel = t;
							var r = this.video,
							a = this.qualityBtnLists[this.param.showAuto ? t: t - 1];
							this.$currentBit.removeClass(dt.a.active),
							a.addClass(dt.a.active),
							this.$currentBit = a,
							this.Elements.qualityBtn.html(a.attr("qt"));
							var o = function() {
								e.trigger(ut.changeLevel, t, n),
								et.setStorage("df", t)
							};
							if (this.hls) this.waiting(),
							this.hlsLevelsChanges = !0,
							this.hls.currentLevel = t - 1,
							o();
							else {
								var s = r.currentTime,
								l = r.playbackRate,
								c = !r.paused;
								this.currentSrc = this.mp4List[t],
								this.switchVideoSrc(this.currentSrc,
								function() {
									r.load(),
									w.resetPlayStatus(r, s, l),
									c && r.play(),
									o()
								},
								!0)
							}
						}
					}
				}
			},
			{
				key: "setLanguage",
				value: function(t) {
					if (!this.lang) {
						var e, i, n = this.param;
						n.lang && "en" !== n.lang && (this.param.lang = "zh_CN"),
						n.lang || 2 !== t ? n.lang || 3 !== t || 0 === et.getLanguage().indexOf("en") && (n.lang = "en") : n.lang = "en",
						"en" === n.lang && this.wrap.addClass("pv-lang-en"),
						n.lang = n.lang || "zh_CN",
						this.lang = function() {
							var t, e = {},
							i = "zh_CN" !== (t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "zh_CN") && "en" !== t ? "zh_CN": t;
							return L()(R).forEach(function(t) {
								e[t] = R[t][i]
							}),
							e
						} (n.lang),
						this.warnMessage = this.lang.warnMessage,
						this.codeMessage = (e = this.warnMessage, i = {},
						G()(i, "#006", {
							log: e.domainError,
							type: "white_black_list_error"
						}), G()(i, "#012", {
							log: e.systemError
						}), G()(i, "#003", {
							log: e.loadError,
							type: "load_videojson_failure",
							getType: function(t) {
								return 1 === t ? "load_videojson_failure": "parse_videojson_failure"
							}
						}), G()(i, "#007", {
							log: e.loadError,
							type: "load_video_failure"
						}), G()(i, "#016", {
							log: e.recordError
						}), G()(i, "#001", {
							log: e.timeoutflowError
						}), G()(i, "#002", {
							log: e.outflowError
						}), G()(i, "#024", {
							log: e.disableOpera
						}), i)
					}
				}
			},
			{
				key: "triggerGlobal",
				value: function(t) {
					for (var e, i = arguments.length,
					n = new Array(1 < i ? i - 1 : 0), r = 1; r < i; r++) n[r - 1] = arguments[r]; (e = this._global).triggerEvent.apply(e, [t].concat(n))
				}
			},
			{
				key: "quality",
				get: function() {
					return this.lang.quality
				}
			},
			{
				key: "muted",
				get: function() {
					return this.video.muted
				}
			},
			{
				key: "volume",
				get: function() {
					return this.video.volume
				},
				set: function(t) {
					var e;
					t < 0 && 1 < t || (this.beforeVolume = this.globalVolume, this.globalVolume = t, et.setStorage("volume-".concat(this.vid), t), this.ignoreRespondEvent ? this.advertising.playing && this.advertising.videoAd ? e = this.advertising.video: this.teaser && "PLAYING" === this.teaser.status ? (e = this.teaser.video) && e.paused && this.controller.renderVolume() : (!this.tail || "PLAYING" !== this.tail.status || (e = this.tail.video) && e.paused) && this.controller.renderVolume() : e = this.video, e && (e.volume = t))
				}
			},
			{
				key: "currentVideo",
				get: function() {
					var t;
					return this.ignoreRespondEvent ? this.advertising.playing && this.advertising.videoAd ? t = this.advertising.video: this.teaser && "PLAYING" === this.teaser.status ? t = this.teaser.video: this.tail && "PLAYING" === this.tail.status && (t = this.tail.video) : t = this.video,
					t
				}
			},
			{
				key: "buffered",
				get: function() {
					try {
						var t = this.video.buffered;
						return 100 * t.end(t.length - 1) / this.duration
					} catch(t) {
						return ! 1
					}
				}
			},
			{
				key: "hasAudioMode",
				get: function() {
					return ! (!this.videoInfo.aac_link || !this.param.audioMode || it.a.isIE11)
				}
			},
			{
				key: "hideVideoMode",
				get: function() {
					return ! this.param.videoMode
				}
			},
			{
				key: "hasSubtitle",
				get: function() {
					return !! this.videoInfo.video_srt
				}
			},
			{
				key: "isHls",
				get: function() {
					return 0 !== this.videoInfo.seed
				}
			},
			{
				key: "currentTime",
				get: function() {
					return this.isChild ? this.childVideo && this.childVideo.currentTime: this.video.currentTime
				}
			},
			{
				key: "realCurrentTime",
				get: function() {
					return this.video.currentTime
				}
			},
			{
				key: "allowPPT",
				get: function() {
					return this.param.pptEnable && "true" === this.videoInfo.ppt
				}
			},
			{
				key: "ignoreRespondEvent",
				get: function() {
					return this.advertising.playing || this.teaser && "ENDING" !== this.teaser.status || this.tail && "PLAYING" === this.tail.status
				}
			},
			{
				key: "isProtectOriginSource",
				get: function() {
					return ! (!this.videoInfo || 1 !== this.videoInfo.convertHls || !this.videoInfo.convertHlsUrl) && this.isHls
				}
			},
			{
				key: "coverImage",
				get: function() {
					return this.param.loading_bg_img || this.videoInfo.first_image
				}
			},
			{
				key: "line",
				get: function() {
					return this.lineController ? this.lineController.lineIndex: 0
				}
			},
			{
				key: "lines",
				get: function() {
					return this.lineController ? this.lineController.lines: 1
				}
			}], [{
				key: "getPlaysafeFuntion",
				value: function(i) {
					return function(t, e) {
						_({
							url: i,
							data: {
								vid: t
							},
							dataType: "json",
							success: function(t) {
								"success" === t.status && e(t.data)
							}
						})
					}
				}
			},
			{
				key: "setVideo",
				value: function(t) {
					var l, c = this,
					u = t.videoInfo,
					i = t.playsafe,
					d = t.pid,
					e = t.br,
					h = void 0 === e ? void 0 : e,
					n = t.defaultAudioCodec,
					p = void 0 === n ? void 0 : n,
					r = t.cb,
					f = void 0 === r ?
					function() {}: r,
					a = this.param.playsafeUrl;
					if (!i && !a) throw this.warnMessage.lessPlaysafe;
					var o = i;
					a && (o = w.getPlaysafeFuntion(a)),
					new E.a(function(e, t) {
						"function" == typeof o ? o(c.vid,
						function(t) {
							e(t)
						}) : e(i)
					}).then(function(t) {
						var r = void 0 === h ? u.my_br - 1 : h - 1;
						c.token = t;
						var e = "Y" === u.userMsgSeiEnabled;
						if (v.a.isSupported()) {
							c.hls = l = new v.a({
								minSeekHole: u.seed_const / 2,
								maxBufferSize: 1e3 * c.preloadDataSize,
								playsafe: t,
								startLevel: r,
								defaultAudioCodec: p,
								autoStartLoad: !0,
								pid: d,
								debug: "hls" === c.debug,
								maxBufferLength: c.preloadDurationLength,
								fragLoadingMaxRetry: 3,
								sei: e
							});
							var i = u.hlsIndex,
							n = u.hls302;
							n && 1 == +n && (i = u.hlsIndex2),
							c.param.originVid && (i = et.getPreviewHlsUrl(c.vid, i));
							var a = c.initHlsLineController(),
							o = c.param.appId,
							s = "".concat(i, "?device=desktop&pid=").concat(d).concat(o ? "&appId=".concat(o) : "");
							a && (s = "".concat(s, "&route=").concat(a)),
							l.loadSource(s),
							l.on(v.a.Events.MANIFEST_LOADED,
							function(t, e) {
								var i = l.streamController.levels.length;
								if (i < u.my_br) {
									var n = u.my_br - i;
									u.my_br = i,
									r > u.my_br - 1 && (r -= n)
								}
								c.hls.loadLevel = r,
								c.param.show_rate && (c.hls.autoLevelCapping = c.param.show_rate - 1)
							})
						}
						f()
					})
				}
			},
			{
				key: "hlsEvents",
				value: function(t) {
					var a, o = this;
					0 < arguments.length && void 0 !== t && t || this.hls.on(v.a.Events.MANIFEST_PARSED,
					function(t, e) {
						w.hlsInit.call(o)
					}),
					this.hls.on(v.a.Events.ERROR,
					function(t, e) {
						console.warn(e),
						"networkError" === e.type && "fragLoadError" === e.details && e.fatal && o.lineController && o.lineController.hasMultiLine && (o.lineTip = new Di(o.wrap.dom[0], o.lineController, o.param.lang))
					}),
					this.hls.on(v.a.Events.LEVEL_LOADED,
					function(t, e) {}),
					"ud" === this.debug && this.hls.on(v.a.Events.FRAG_PARSING_USERDATA,
					function(t, e) {
						console.log(t, e)
					});
					this.param.skipErrorTs && this.hls.on(v.a.Events.FRAG_PARSING_DATA,
					function t(e, i) {
						if (0 === i.frag.startDTS && i.frag.startDTS + 1 < i.frag.startPTS) {
							var n = i.frag.endPTS;
							o.video.currentTime = n,
							o.hls.off(v.a.Events.FRAG_PARSING_DATA, t);
							var r = function() {
								clearTimeout(a);
								var t = o.video.currentTime;
								t < n && (a = setTimeout(function() {
									o.video.currentTime === t && (o.video.currentTime = n)
								},
								1e3))
							};
							o.on(ut.seeking, r),
							o.once(ut.changeVideo,
							function() {
								o.off(ut.seeking, r)
							})
						}
					})
				}
			},
			{
				key: "setOriginSource",
				value: function(e, n, t) {
					function i(t, e) {
						if (t && (a.token = t), v.a.isSupported()) {
							a.hls = r = new v.a({
								maxBufferSize: 1e3 * a.preloadDataSize,
								autoStartLoad: !0,
								debug: "hls" === a.debug,
								maxBufferLength: a.preloadDurationLength,
								playsafe: t,
								minSeekHole: e,
								sei: !(!t || !u)
							});
							var i = {
								device: "desktop",
								pid: n
							};
							c && (i.appId = c),
							r.loadSource(et.addQuery(s, i)),
							w.hlsEvents.call(a, !0)
						}
						o()
					}
					var r, a = this,
					o = 2 < arguments.length && void 0 !== t ? t: function() {},
					s = e.play_source_url,
					l = this.isProtectOriginSource,
					c = this.param.appId,
					u = "Y" === e.userMsgSeiEnabled;
					if (l) {
						var d = this.param,
						h = d.playsafeUrl,
						p = d.playsafe;
						if (!p && !h) throw this.warnMessage.lessPlaysafe;
						var f = p;
						h && (f = w.getPlaysafeFuntion(h)),
						new E.a(function(e, t) {
							"function" == typeof f ? f(a.vid,
							function(t) {
								e(t)
							}) : e(p)
						}).then(function(t) {
							i(t, e.seed_const / 2)
						})
					} else i()
				}
			},
			{
				key: "checkOriginM3u8",
				value: function(t) {
					return "m3u8" === t.split("?")[0].slice( - 4)
				}
			},
			{
				key: "checkOriginMp3",
				value: function(t) {
					return "mp3" === t.split("?")[0].slice( - 3)
				}
			},
			{
				key: "bitrate",
				value: function(t) {
					return t < 5e5 ? "流畅": t < 1e6 && 5e5 <= t ? "高清": "超清"
				}
			},
			{
				key: "hlsInit",
				value: function() {
					var t = this.param.show_rate,
					e = this.videoInfo.my_br,
					i = this.hls.levels.length,
					n = 0;
					t && t < i && (i = t),
					n = e <= (this.levels = i) ? e: i,
					this.hlsLevelsChanges = !1,
					this.renderQualitySelect(i + 1, n)
				}
			},
			{
				key: "addMp4PidAndAppId",
				value: function(t, e, i) {
					return t.map(function(t) {
						return "".concat(t, "?pid=").concat(e).concat(i ? "&appId=".concat(i) : "")
					})
				}
			},
			{
				key: "resetPlayStatus",
				value: function(e, i, n) {
					e.addEventListener("canplay",
					function t() {
						i && (e.currentTime = i),
						n && (e.playbackRate = n),
						e.removeEventListener("canplay", t, !1)
					},
					!1)
				}
			},
			{
				key: "setPoster",
				value: function(t, e) {
					t.attr("poster", e)
				}
			},
			{
				key: "setCoverBg",
				value: function(t, e, i) {
					var n = "100% 100%";
					"scaleAspectFit" === i && (n = "contain"),
					"scaleAspectFill" === i && (n = "cover"),
					e ? t.css({
						backgroundImage: "url(" + e + ")",
						backgroundSize: n,
						display: "none"
					}) : t.css({
						backgroundColor: "rgba(0,0,0,0.2)"
					})
				}
			}]),
			x()(w, [{
				key: "init",
				value: function(t) {
					var n = this,
					e = 0 < arguments.length && void 0 !== t && t,
					r = this.wrap,
					a = this.param;
					e || (this.videoWrap.append(this.video, this.loading, this.cover), r.append(this.videoWrap), this.ele.append(this.wrap)),
					this.initErrorLog(),
					this.playBeforeHandler().then(function(t) {
						if (t) {
							t.player || (t.player = {}),
							a.skinLocation = void 0 !== a.skinLocation ? a.skinLocation: t.player.location,
							2 === a.skinLocation && r.addClass(dt.a.outside),
							n.controller = new yt(n, a.skin_type || a.skin.skinid || t.player.skinid, a.hideControlBar, a.ban_ui),
							t.player && (n.skin = new se(m()({},
							t.player, a.skin), n.controller));
							var e = n.controller.wrap;
							r.append(e);
							var i = n.Elements = new St(r);
							n.EVENT_HANDLER = Ot(a.elementClass, i),
							n.trigger(ut.controlRender),
							n.touchTime = new le(n.Elements.touchTime, "on" === n.param.ban_preview_video ? "": t.progressImage);
							n.fullscreen = new Pt(i.wrap, [n.videoWrap.dom[0], n.video]);
							n.initFullScreenEvents(),
							n.on(ut.fullscreen, n.EVENT_HANDLER.requestFullscreen.bind(n)),
							n.on(ut.exitFullscreen, n.EVENT_HANDLER.exitFullscreen.bind(n)),
							n.startPlayHander = function() {
								return n.EVENT_HANDLER.coverPlay.call(n)
							},
							n.Elements.fullscreen.on("click", n.toggleFullscreen.bind(n)),
							n.Elements.fullscreenPage && n.Elements.fullscreenPage.on("click", n.EVENT_HANDLER.fullscreenPage.bind(n)),
							At.support && (n.pip = new At(n, a.pictureInPicture)),
							n.resize = new ce({
								wrap: r,
								hideButton: a.elementClass.hideButton,
								hideButton2: a.elementClass.hideButton2,
								hideButton3: a.elementClass.hideButton3,
								size: n.controller.size
							},
							n),
							n.setVideoHandler(t, !0).then(function() {
								n.setEvents()
							}),
							n.Elements.flashBtn.on("click",
							function() {
								n.toFlash(a)
							})
						}
					})
				}
			},
			{
				key: "toggleFullscreen",
				value: function() {
					if (this.param.fullscreenProxy) {
						if (p.a.onFullscreenProxy) {
							var t = this.fullscreen.isFullscreen;
							p.a.onFullscreenProxy(this.vid, void 0 === t ? t: !t)
						}
					} else Pt.support() ? this.fullscreen.toggle() : Pt.supportVideoInIOS(this.video) ? this.isHls ? this.log.show(this.lang.videoNotSupportFullscreen, 2e3) : Pt.toggleVideoInIOS(this.video) : this.log.show(this.lang.notSupportFullscreen, 2e3)
				}
			},
			{
				key: "toggleFullPageScreen",
				value: function() {
					var t = this.Elements,
					e = t.fullscreenPage,
					i = t.fullscreenPageTip;
					if (e) {
						var n = dt.a.fullscreenPage.exit,
						r = n,
						a = this.lang.fullscreenPage;
						this.isFullPageScreen ? n = dt.a.fullscreenPage.full: (r = dt.a.fullscreenPage.full, a = this.lang.exitFullscreenPage),
						e.removeClass(r),
						e.addClass(n),
						i.html(a)
					}
				}
			},
			{
				key: "initErrorLog",
				value: function() {
					var a = this;
					this.on(ut.serverError,
					function(t, e, i) {
						var n = a.codeMessage[e] || {
							log: a.warnMessage.domainError
						},
						r = a.param.customErrorTips && a.param.customErrorTips[e] || n.log;
						a.triggerGlobal(ut.serverError, ut.serverError, e),
						a.log.showError(i || r, e)
					})
				}
			},
			{
				key: "initFullScreenEvents",
				value: function() {
					var t = {
						fullscreen: function(t) {
							this.trigger(ut[t.type])
						},
						exitFullscreen: function(t) {
							this.trigger(ut[t.type])
						}
					};
					this.$video.on("fullscreen", t.fullscreen.bind(this)),
					this.$video.on("exitFullscreen", t.exitFullscreen.bind(this))
				}
			},
			{
				key: "setEvents",
				value: function() {
					if (!this.eventInit) {
						for (var t in this.eventInit = !0,
						Pe) this.on(t, Pe[t].bind(this));
						new Ht(this);
						var e, i = (e = !1, {
							lastDuration: 0,
							waiting: function(t) {
								this.trigger(ut[t.type])
							},
							seeked: function(t) {
								this.trigger(ut[t.type])
							},
							timeupdate: function(t) {
								this.trigger(ut[t.type])
							},
							loadstart: function(t) {
								this.trigger(ut[t.type])
							},
							seeking: function(t) {
								this.trigger(ut[t.type])
							},
							loadedmetadata: function(t) {
								e = !1,
								this.trigger(ut[t.type])
							},
							volumechange: function(t) {
								this.trigger(ut[t.type])
							},
							canplay: function(t) {
								this.trigger(ut[t.type])
							},
							pause: function(t) {
								this.trigger(ut[t.type])
							},
							play: function(t) {
								this.trigger(ut[t.type])
							},
							playing: function(t) {
								this.trigger(ut[t.type]),
								e || (this.trigger(ut[ut.playStart]), e = !0)
							},
							ended: function(t) {
								this.trigger(ut[t.type])
							},
							ratechange: function(t) {
								this.trigger(ut[t.type])
							},
							error: function(t) {
								this.trigger(ut[t.type])
							}
						});
						for (var n in i)"function" == typeof i[n] && this.$video.on(n, i[n].bind(this))
					}
				}
			},
			{
				key: "setDuration",
				value: function() {
					var t = this.param,
					e = t.originVid,
					i = t.start,
					n = t.end,
					r = this.videoInfo,
					a = r.seed,
					o = r.previewDuration,
					s = this.originDuration = +this.videoInfo.duration;
					this.isChild ? (this.duration = n - i, this.Elements.timeDuration.html(et.getTime(this.duration))) : e ? 0 === a && e && (this.duration = Math.min(s, o), this.Elements.timeDuration.html(et.getTime(this.duration))) : (this.duration = s, this.Elements.timeDuration.html(et.getTime(s))),
					this.resetPlayStyle()
				}
			},
			{
				key: "resetPlayStyle",
				value: function() {
					this.Elements.timeCurrent.html(et.getTime(0)),
					this.Elements.progressBuffer.css({
						transform: "scaleX(0)"
					}),
					this.Elements.progressCurrent.width(0)
				}
			},
			{
				key: "serverSettingErrorHandler",
				value: function(t) {
					if (t && t.code && "0" !== String(t.code)) {
						var e = "#".concat(t.code),
						i = t.tips,
						n = i ? i[this.param.lang || "zh_CN"] || i.zh_CN: this.warnMessage.domainError;
						return this.trigger(ut.serverError, e, n),
						!0
					}
					return ! 1
				}
			},
			{
				key: "setVideoHandler",
				value: function(e, n, t) {
					var r = this,
					i = 2 < arguments.length && void 0 !== t ? t: 1,
					a = this.pid,
					o = this.videoInfo = e,
					s = this.param;
					if (o.seed_const = o.seed_const ? o.seed_const: "0", this.preVideoisOriginMp3Url = this.isOriginMp3Url, this.isOriginMp3Url = !(!o.keepsource || !w.checkOriginMp3(o.play_source_url || "")), this.setModeConfig(), this.trigger(ut.videoJsonUpdate, this.videoInfo), "number" == typeof s.df) ! s.showAuto && 0 === s.df || (o.my_br = this.param.df);
					else {
						var l = et.getStorage("df");
						et.isNumber(l) && (o.my_br = l)
					}
					o.my_br = +o.my_br,
					o.my_br > o.df_num && (o.my_br = o.df_num);
					var c = s.show_rate;
					c && o.my_br > c && (o.my_br = c);
					var u, d = o.status = +o.status;
					if (this.Elements.rateBtn.text("".concat(i || 1, "x")), this.$currentRate && this.$currentRate.removeClass(dt.a.active), this.Elements.rateSelect.find('[data-rate="'.concat(i, '"]')).addClass(dt.a.active), !this.param.height && e.ratio) {
						var h = Math.floor(this.wrap.width() / e.ratio);
						this.wrap.height(h + "px"),
						s.height = h
					}
					if (60 != d && 61 != d) {
						var p = 60 === (u = d) || 61 === u ? "videoStatus_normal": 51 === u ? "videoStatus_notThrough": u < 0 ? "videoStatus_deleted": 10 <= u && u <= 26 ? "videoStatus_transcoding": 48 === u ? "videoStatus_abnormalVideo": 53 === u ? "videoStatus_blocked": "videoStatus_notAudit",
						f = D[p],
						v = this.warnMessage[p];
						return s.customErrorTips && f && s.customErrorTips[f] && (v = "".concat(f, " ").concat(s.customErrorTips[f])),
						this.log.show(v),
						{
							then: function() {}
						}
					}
					var g = o.playerError,
					m = o.userError;
					if (this.serverSettingErrorHandler(g) || this.serverSettingErrorHandler(m)) return {
						then: function() {}
					};
					if ("true" === o.timeoutflow || "true" === o.outflow) return this.trigger(ut.serverError, "true" === o.timeoutflow ? "#001": "#002"),
					{
						then: function() {}
					};
					if (this.isChild = di.check(s.start, s.end, o.duration), this.setDuration(), w.setCoverBg(this.cover, this.coverImage, s.cover_display), this.param.autoplay || this.showCover(), "off" === s.showHd || !1 === s.showHd) this.Elements.qualitySelect.remove(),
					this.Elements.qualityBtn.parent().remove();
					else {
						var A = o.keepsource ? "none": "inline-block";
						this.Elements.qualityBtn.parent().css("display", A)
					}
					this.mode ? ((this.mode && !this.hasAudioMode && !this.hideVideoMode || this.preVideoisOriginMp3Url) && this.mode.resetStatus(), this.isOriginMp3Url && this.mode.resetStatus(!0)) : this.mode = new Oe(this),
					this.menu || (this.menu = new Je(this)),
					this.keyPoint = function() {
						var t = 1 < arguments.length ? arguments[1] : void 0,
						o = 2 < arguments.length ? arguments[2] : void 0,
						s = {}; (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : []).forEach(function(t) {
							s[t.keytime] = {
								text: t.keycontext || t.keycontent,
								btnDesc: t.btnDesc,
								btnHref: t.btnHref
							}
						});
						var e = "";
						for (var i in s) {
							if (! (o < i)) e += '<span style="left:'.concat(i / o * 100 + "%", '"></span>')
						}
						return t.html(e),
						{
							data: s,
							getContent: function(t, e) {
								for (var i = Math.round(6 / e * o / 2), n = void 0, r = Math.max(t - i, 0); r < Math.min(o, t + i) + 1; r++) {
									var a = s[r];
									if (a) {
										n = a;
										break
									}
								}
								return n
							}
						}
					} (o.videokeyframes, this.Elements.progressPoint, this.duration),
					this.subtitle = new ri(this),
					this.wrap.addClass(dt.a.paused);
					var y = "",
					b = "";
					return new E.a(function(t, e) {
						function i() {
							r.tailEnding || (r.tail = new Ti(r), "ENDING" === r.tail && (r.tail = void 0)),
							r.advertising = new ve(r, t, e, !n),
							r.advertising.hasAd && r.advertising.init(),
							r.teaser = r.teaserEnd ? null: new ye(r),
							r.statistics && r.statistics.init(o.reportFreq),
							r.tailRecommend = new _i(r, r.videoWrap.dom[0]),
							r.advertising.hasStartAd || (r.adStatus.hidePlayStartAd = !0, t())
						}
						o.keepsource ? (b = o.play_source_url, r.isOriginM3u8Url = w.checkOriginM3u8(b), r.isOriginM3u8Url ? w.setOriginSource.call(r, r.videoInfo, a, i) : i()) : r.mode.isAudioSrc ? i() : r.isHls ? w.setVideo.call(r, {
							videoInfo: o,
							playsafe: r.param.playsafe,
							cb: function() {
								w.hlsEvents.call(r),
								i()
							},
							pid: a
						}) : (r.mp4Init(a), y = r.currentSrc, i()),
						(0 === o.protect_mode && 0 !== o.seed || 1 === o.protect_mode) && (r.record = new He(r)),
						1 === o.audio_fp && 0 !== o.seed && (r.audioSource = new xi(r));
						try {
							r.fullplay || (r.fullplay = new gi(r))
						} catch(t) {
							console.log(t)
						}
					}).then(function(t) {
						return r.teaserEnd || !r.teaser.hasTeaser ? t: (r.teaser.register(t), new E.a(r.teaser.setup.bind(r.teaser)))
					}).then(function(i) {
						return o.keepsource && !r.isOriginM3u8Url && b && et.isCuplayerUrl(b) ? new E.a(function(e) {
							Ci(b, r.vid,
							function(t) {
								b = t,
								e(i)
							})
						}) : !o.keepsource && !r.mode.isAudioSrc && 0 == o.seed && r.currentSrc && et.isCuplayerUrl(r.currentSrc) ? new E.a(function(e) {
							Ci(r.currentSrc, r.vid,
							function(t) {
								y = t,
								e(i)
							})
						}) : i
					}).then(function(t) {
						r.teaserEnd = !0,
						!r.advertising.hasStartAd && r.firstInit && r.Elements.playpause.on("click", r.startPlayHander),
						r.firstInit && r.coverPlay.on("click", r.EVENT_HANDLER.coverPlay.bind(r)),
						o.player && (r.logo = new _e(r, e.player, r.param.logoConfig || r.param.logo)),
						t && !r.param.autoplay && setTimeout(function() {
							return r.play()
						},
						0),
						r.mode && !r.mode.isSet && r.mode.setup(),
						r.mode.isAudioSrc || (o.keepsource ? r.isOriginM3u8Url ? r.hls.attachMedia(r.video) : r.video.src = et.addQuery(b || o.play_source_url, {
							pid: a
						}) : 0 !== o.seed ? r.hls.attachMedia(r.video) : r.switchVideoSrc(y || r.currentSrc)),
						i && w.resetPlayStatus(r.video, void 0, i),
						r.cacheStartTime = new Be(r),
						r.ask = new Xe(r, "true" === o.interactive_video && "on" === r.param.is_interaction),
						r.danmu = ti.checkDanmu(o.openDanmu) ? new ti(r) : null,
						r.ppt = r.allowPPT ? new vi(r) : null,
						r.spread = ui.check(o.tg_content) ? new ui(r, o) : null,
						r.visitor = fi.check(o.userInfoRecord, o.permit_questionnaire) ? new fi(r, o.userInfoRecord) : null,
						r.childVideo = r.isChild ? new di(r) : null,
						r.initWatchStartTime(),
						r.initWatchEndTime(),
						r.initPreviewListener(),
						r.banSeek = new Ge(r),
						r[Ii] && "off" !== r[Ii].show && r[Ii].setup()
					})
				}
			},
			{
				key: "initPreviewListener",
				value: function() {
					var e = this;
					if (!this.isChild) {
						var t = this.param.originVid,
						i = this.videoInfo,
						n = i.seed,
						r = i.previewDuration,
						a = +this.videoInfo.duration,
						o = this.video,
						s = this.duration;
						if (0 === n && t && r < a) {
							var l = function t() {
								o.currentTime > s && (e.video.loop ? o.currentTime = 0 : (e.off(ut.timeupdate, t), e.trigger(ut.ended), o.currentTime = 0, e.once(ut.playing,
								function() {
									e.on(ut.timeupdate, t)
								})))
							};
							this.on(ut.timeupdate, l),
							this.once(ut.videoJsonUpdate,
							function() {
								e.off(ut.timeupdate, l)
							})
						}
					}
				}
			},
			{
				key: "initWatchStartTime",
				value: function() {
					var e = this;
					if (!this.isChild) {
						var t = this.param,
						i = t.watchStartTime,
						n = t.watchEndTime;
						if (!t.originVid && i) {
							if (n && n <= i) return;
							this.on(ut.canplay,
							function t() {
								i < e.duration && (e.video.currentTime = i),
								e.param.watchStartTime = !1,
								e.off(ut.canplay, t)
							})
						}
					}
				}
			},
			{
				key: "initWatchEndTime",
				value: function() {
					var e = this;
					if (this.endTimeHandler && (this.off(ut.timeupdate, this.endTimeHandler), this.endTimeHandler = void 0), this.endTimeEndedHandler && (this.off(ut.ended, this.endTimeEndedHandler), this.endTimeEndedHandler = void 0), !this.isChild) {
						var t = this.param,
						i = (t.watchStartTime, t.watchEndTime),
						n = t.originVid,
						r = this.duration,
						a = this.video;
						n || !i || r < i || (this.endTimeHandler = function(t) {
							a.currentTime > i && (e.off(ut.timeupdate, e.endTimeHandler), a.currentTime = r)
						},
						this.endTimeEndedHandler = function() {
							e.on(ut.timeupdate, e.endTimeHandler)
						},
						this.on(ut.timeupdate, this.endTimeHandler), this.on(ut.ended, this.endTimeEndedHandler))
					}
				}
			},
			{
				key: "playBeforeCheck",
				value: function(t) {
					var e = !0;
					return t.setting_type && 0 < t.setting_type && 0 !== t.domainSwitch && ((e = et.checkDomain(t)) || this.trigger(ut.serverError, "#006")),
					e
				}
			},
			{
				key: "playUrlBeforeHandler",
				value: function() {
					var i = this;
					return new E.a(function(t) {
						var e = {
							player: {
								skincolor: "#03a9f4",
								pColor: "#03a9f4"
							},
							keepsource: 1,
							play_source_url: i.param.url,
							status: 60,
							cataid: 1,
							catatree: "1"
						};
						setTimeout(function() {
							t(e)
						},
						0)
					})
				}
			},
			{
				key: "getPlayerFromId",
				value: function(e, t) {
					var i = t.player,
					n = t.playerList;
					if (!e || !et.isArray(n)) return i;
					var r = n.findIndex(function(t) {
						return t.playerid === e
					});
					return - 1 === r ? i: n[r]
				}
			},
			{
				key: "setHlsKeepsource",
				value: function(t) {
					1 === t.convertHls && t.convertHlsUrl && (t.keepsource = 1, t.play_source_url = t.convertHlsUrl)
				}
			},
			{
				key: "forbidBrowser",
				value: function(t) {
					if (0 === t.seed) return ! 1;
					var e = it.a.name,
					i = it.a.version,
					n = it.a.isFirefox,
					r = it.a.isOpera;
					if (this.param.disableOpera && r) return ! 0;
					var a = t.forbidClients;
					if (!a) return ! 1;
					var o = -1 !== a.split(",").indexOf(e);
					return !! (n && o && 68 <= i) || !n && o
				}
			},
			{
				key: "playBeforeHandler",
				value: function() {
					var n = this;
					return this[Ii] = null,
					this.skin = null,
					this.pid = Xt.getPid(),
					this.statistics = new Xt(this, this.pid, this.param.url),
					this.param.url ? (this.setLanguage(), this.playUrlBeforeHandler()) : new E.a(function(t, e) {
						return n.videojson.getVideoInfo(t, e)
					}).then(function(e) {
						return e.player = n.getPlayerFromId(n.param.player_id, e) || {},
						n.setLanguage(e.player.languageSetting),
						n.setHlsKeepsource(e),
						"true" !== e.usepassword ? e: new E.a(function(t) {
							n.password = new ci(t, n.wrap, e, n.vid, n.lang),
							n.password.setup()
						})
					}).then(function(i) {
						if (void 0 === n.param.autoplay && (n.param.autoplay = A()(i.autoplay), 1 === n.param.autoplay && (n.video.autoplay = !0)), n.param.autoplay = !!n.param.autoplay, n.password = void 0, n.log.hideError(), !n.playBeforeCheck(i)) return ! 1;
						if (n.forbidBrowser(i)) return n.trigger(ut.serverError, "#024"),
						!1;
						i.keepsource = 1 == +i.keepsource;
						var t = i.validUrl || i.validUrl2,
						e = i.validUrl_backup || i.validUrl2_backup;
						return t && "N" !== i.playauth ? (n[Ii] = new oe({
							video: n.video,
							wrap: n.videoWrap.dom[0],
							data: {},
							marqueeCheck: n.param.marqueeCheck && n.marqueeCheckCallback.bind(n),
							vid: n.vid,
							code: n.param.code || "",
							verificationcode: n.param.verificationcode || "",
							confirmCheck: n.confirmCheck.bind(n)
						}), n[Ii].checkSign( !! i.validUrl, et.conversionBaseUrl(t), et.conversionBaseUrl(e)).then(function(t) { ("off" === t.show || i.validUrl2 && !t.show) && (n[Ii].show = "off");
							var e = i;
							return ! t || 1 != +t.status ? (n.trigger(ut.serverError, "#012", t.msg), e = !1) : (n[Ii].marqueeData = t, i.marqueeData = t),
							e
						})) : i
					}).
					catch(function(t) {
						console.log(t),
						n.setLanguage(),
						n.trigger(ut.serverError, "#003", void 0, t)
					})
				}
			},
			{
				key: "marqueeCheckCallback",
				value: function() {
					this.record && (this.record.remove(), this.record.destroy())
				}
			},
			{
				key: "confirmCheck",
				value: function() {
					return ! (!this.ppt || "ppt" !== this.ppt.main)
				}
			},
			{
				key: "waiting",
				value: function() {
					this.loading.style.display = "block"
				}
			},
			{
				key: "ending",
				value: function() {
					this.loading.style.display = "none"
				}
			},
			{
				key: "playStyle",
				value: function() {
					this.Elements.playpause.removeClass(dt.a.playpause.play).addClass(dt.a.playpause.pause),
					this.hideCover(),
					this.wrap.removeClass(dt.a.paused)
				}
			},
			{
				key: "pauseStyle",
				value: function() {
					this.Elements.playpause.removeClass(dt.a.playpause.pause).addClass(dt.a.playpause.play),
					this.wrap.addClass(dt.a.paused)
				}
			},
			{
				key: "showCover",
				value: function() {
					this.cover.css("display", "block")
				}
			},
			{
				key: "hideCover",
				value: function() {
					this.cover.css("display", "none")
				}
			},
			{
				key: "setReplayCover",
				value: function(t) {
					var e = 0 < arguments.length && void 0 !== t && t;
					this.coverObj.setReplay(e)
				}
			},
			{
				key: "changeRepeat",
				value: function(t) {
					this.param.hideRepeat = t
				}
			},
			{
				key: "play",
				value: function() {
					return this.video.play()
				}
			},
			{
				key: "pause",
				value: function() {
					return this.video.pause()
				}
			},
			{
				key: "togglePlay",
				value: function() {
					return this.video.paused ? this.play() : this.pause()
				}
			},
			{
				key: "setCurrentTime",
				value: function() {
					var e = this;
					clearInterval(this.currentClock);
					var i = this.Elements.timeCurrent,
					n = this.video;
					this.currentClock = setInterval(function() {
						var t = e.isChild ? n.currentTime - e.childVideo.start: n.currentTime;
						t < 0 && (t = 0),
						i.html(et.getTime(Math.min(t, e.duration)))
					},
					500)
				}
			},
			{
				key: "setBufferd",
				value: function() {
					var e = this;
					clearInterval(this.bufferClock);
					var i = this.Elements.progressBuffer;
					this.bufferClock = setInterval(function() {
						var t = e.buffered;
						t && (t = 100 < t ? 100 : t, i.css({
							transform: "scaleX(" + t / 100 + ")"
						}))
					},
					1e3)
				}
			},
			{
				key: "clearTime",
				value: function() {
					clearInterval(this.bufferClock),
					clearInterval(this.currentClock)
				}
			},
			{
				key: "changeStatistics",
				value: function() {
					var t;
					this.statistics && (t = this.statistics).changeParams.apply(t, arguments)
				}
			},
			{
				key: "changeRate",
				value: function(t) {
					var e = this.Elements.rateSelect.find('[data-rate="'.concat(t, '"]'));
					if (0 !== e.length) {
						var i = dt.a.active,
						n = l()(t),
						r = e.text(),
						a = this.video,
						o = a.playbackRate;
						this.trigger(ut.changeRate, n, o),
						a.playbackRate = n,
						this.$currentRate.removeClass(i),
						this.$currentRate = e.addClass(i),
						this.Elements.rateBtn.text(r)
					}
				}
			},
			{
				key: "getScreenshotData",
				value: function() {
					if (this.param.allowGetScreenshotData) return Ie.cutVideo(this.video, this.videoInfo.ratio)
				}
			},
			{
				key: "setModeConfig",
				value: function() {
					this.param.audioMode || this.param.videoMode || this.isOriginMp3Url ? (this.param.audioMode && !this.param.videoMode || this.isOriginMp3Url) && (this.param.priorityMode = "audio") : (this.param.videoMode = !0, this.param.priorityMode = "video")
				}
			},
			{
				key: "getCurrentMode",
				value: function() {
					return this.mode ? this.mode.status: "video"
				}
			},
			{
				key: "changeMode",
				value: function(t) {
					this.mode && ("audio" === t && this.mode.videoToAudio(), "video" === t && this.mode.audioToVideo())
				}
			},
			{
				key: "seek",
				value: function(t) {
					var e = this.isChild ? t + this.childVideo.start: t;
					this.video.currentTime = e
				}
			},
			{
				key: "toggleMute",
				value: function() {
					if (it.a.isIpad) {
						var t = this.currentVideo;
						t && (t.muted = !t.muted)
					} else 0 < this.globalVolume ? this.volume = 0 : (0 === this.beforeVolume && (this.beforeVolume = .7), this.volume = this.beforeVolume)
				}
			},
			{
				key: "getCurrentUrl",
				value: function() {
					if (!this.videoInfo) return "";
					if (this.videoInfo.keepsource) return this.videoInfo.play_source_url;
					if (this.mode.isAudioSrc) return this.videoInfo.aac_link;
					if (this.hls) {
						var t = et.isNumber(this.hls.loadLevel) ? this.hls.loadLevel: this.hls.currentLevel;
						return this.hls.levels[t].url[0]
					}
					return this.currentSrc
				}
			},
			{
				key: "refleshOption",
				value: function(t) {
					var e = t.vid;
					t.statistics && (this.param.statistics = m()(this.param.statistics, t.statistics)),
					t.viewerInfo && (this.param.viewerInfo = m()(this.param.viewerInfo, t.viewerInfo)),
					t.ban_seek && (this.param.ban_seek = t.ban_seek),
					t.ban_seek_by_limit_time && (this.param.ban_seek_by_limit_time = t.ban_seek_by_limit_time),
					this.vid = this.param.vid = e,
					this.param.url = t.url,
					this.param.originVid = t.originVid,
					this.videojson = new Tt(e, this.param.beta),
					this.param.autoplay = t.autoplay,
					this.param.watchStartTime = !!et.isNumber(t.watchStartTime) && t.watchStartTime,
					this.param.watchEndTime = !!et.isNumber(t.watchEndTime) && t.watchEndTime,
					this.param.start = et.isNumber(t.start) ? t.start: void 0,
					this.param.end = et.isNumber(t.end) ? t.end: void 0,
					void 0 !== t.loading_bg_img && !0 !== t.loading_bg_img && (this.param.loading_bg_img = t.loading_bg_img),
					this.changeParam(t),
					t.playsafe && (this.param.playsafe = t.playsafe),
					t.code && (this.param.code = t.code),
					this.video.autoplay = this.param.autoplay
				}
			},
			{
				key: "changeVid",
				value: function(t) {
					var e = this,
					i = t,
					n = this.vid,
					r = i.vid,
					a = this.advertising && this.advertising.status,
					o = this.video.playbackRate;
					if (r !== this.vid || this.param.url || t.url) {
						if (this.log.hide(), this.token = "", this.lineController = void 0, this.lineTip && (this.lineTip.remove(), this.lineTip = void 0), this.param.url = t.url, this.password && (this.password.destroy(), this.password = void 0), !this.videoInfo) return this.refleshOption(i),
						void this.init(!0);
						this.pause();
						var s = null;
						this.hls && (this.defaultAudioCodec = void 0, s = setTimeout(function() {
							e.destoryHls()
						},
						0)),
						!1 === t.skipTeaser && (this.clearTime(), this.teaserEnd = !1),
						!1 === t.skipTail && (this.tailEnding = !1),
						this.advertising && this.advertising.destroy(),
						this.statistics && (this.statistics.destroy(), this.statistics = void 0),
						this[Ii] && this[Ii].destroy(),
						this.teaser && (this.teaser.destroy(), this.teaser = void 0),
						this.logo && this.logo.destroy(),
						this.cacheStartTime && this.cacheStartTime.destroy(),
						this.record && this.record.destroy(),
						this.banSeek && this.banSeek.destroy(),
						this.ask && this.ask.destroy(),
						this.spread && this.spread.destroy(),
						this.childVideo && this.childVideo.destroy(),
						this.visitor && this.visitor.destroy(),
						this.audioSource && (this.audioSource.destroy(), this.audioSource = null),
						this.opacityToken && (this.opacityToken.destroy(), this.opacityToken = null),
						this.tail && (this.tail.destroy(), this.tail = void 0),
						this.tailRecommend && (this.tailRecommend.destroy(), this.tailRecommend = void 0),
						this.trigger(ut.changeVideoDestroy, this.vid),
						this.isChild = !1,
						this.refleshOption(i),
						this.playBeforeHandler().then(function(t) {
							t && (e.hls && (clearTimeout(s), e.destoryHls()), e.touchTime = new le(e.Elements.touchTime, "on" === e.param.ban_preview_video ? "": t.progressImage), e.hideCover(), e.setVideoHandler(t, "START_AD_PLAYING" === a || e.firstInit, o).then(function() {
								e.trigger(ut.changeVideo, e.vid, n),
								e.setEvents()
							}))
						})
					} else console.warn(this.warnMessage.videoPlaying)
				}
			},
			{
				key: "destoryHls",
				value: function() {
					this.hls && (this.hls.destroy(), this.hls = null)
				}
			},
			{
				key: "destory",
				value: function() {
					this.destroy()
				}
			},
			{
				key: "destroy",
				value: function() {
					this.trigger(ut.destroy),
					this.clearTime(),
					this.advertising && this.advertising.destroy(),
					this.statistics && this.statistics.destroy(),
					this[Ii] && this[Ii].destroy(),
					this.keypress && this.keypress.destroy(),
					this.resize && this.resize.destroy(),
					this.skin && this.skin.destroy(),
					this.teaser && this.teaser.destroy(),
					this.logo && this.logo.destroy(),
					this.cacheStartTime && this.cacheStartTime.destroy(),
					this.record && this.record.destroy(),
					this.banSeek && this.banSeek.destroy(),
					this.ask && this.ask.destroy(),
					this.childVideo && this.childVideo.destroy(),
					this.visitor && this.visitor.destroy(),
					this.spread && this.spread.destroy(),
					this.tailRecommend && this.tailRecommend.destroy(),
					this.subtitle && (this.subtitle.destroy(), this.subtitle = null),
					this.ppt && (this.ppt.destroy(), this.ppt = null),
					this.danmu && (this.danmu.destroy(), this.danmu = null),
					this.audioSource && (this.audioSource.destroy(), this.audioSource = null),
					this.opacityToken && (this.opacityToken.destroy(), this.opacityToken = null),
					this.tail && (this.tail.destroy(), this.tail = void 0),
					this.pip && (this.pip.destroy(), this.pip = void 0),
					this.lineTip && (this.lineTip.remove(), this.lineTip = void 0);
					var t = this.wrap;
					t.css("opacify", "0"),
					this.hls && this.hls.destroy(),
					delete this.video,
					delete this.$video,
					t.remove(),
					this.menu = null
				}
			},
			{
				key: "toFlash",
				value: function() {
					this.waiting(),
					this.param.autoplay = !this.video.paused,
					this.pause();
					var t = this.ele.dom[0];
					this.param.elementClass.flash.fix;
					this.param.watchStartTime = this.currentTime,
					this.param.priorityMode = this.getCurrentMode(),
					new qt({
						wrap: t,
						params: this.param,
						skin: this.controller.skinSetting.skin,
						cb: this.destroy.bind(this)
					})
				}
			},
			{
				key: "isFullPageScreen",
				get: function() {
					return this.Elements.fullscreenPage && this.Elements.fullscreenPage.hasClass(dt.a.fullscreenPage.exit)
				}
			},
			{
				key: "hasTail",
				get: function() {
					return this.tail && "ENDING" !== this.tail.status
				}
			},
			{
				key: "endAdshouldPlay",
				get: function() {
					return this.advertising && this.advertising.endAdshouldPlay
				}
			}]),
			w
		} (),
		Pi = k(161),
		Oi = k.n(Pi),
		Bi = {
			j2s_getCurrentTime: function() {
				return this.HTML5 ? this.HTML5.currentTime: this.flash.j2s_getCurrentTime()
			},
			j2s_getDuration: function() {
				return this.HTML5 ? this.HTML5.duration: this.flash.j2s_getDuration()
			},
			j2s_pauseVideo: function() {
				this.HTML5 ? this.HTML5.pause() : this.flash.j2s_pauseVideo()
			},
			j2s_resumeVideo: function() {
				this.HTML5 ? this.HTML5.play() : this.flash.j2s_resumeVideo()
			},
			j2s_stopVideo: function() {
				this.HTML5 ? this.HTML5.video.currentTime = this.HTML5.video.duration: this.flash.j2s_stopVideo()
			},
			changeStatistics: function() {
				var t, e;
				this.HTML5 ? (t = this.HTML5).changeStatistics.apply(t, arguments) : (e = this.flash).changeStatistics.apply(e, arguments)
			},
			changeVid: function(t) {
				for (var e = et.isVid(t), i = arguments.length, n = new Array(1 < i ? i - 1 : 0), r = 1; r < i; r++) n[r - 1] = arguments[r];
				if (this.HTML5) {
					var a;
					a = "object" === h()(t) ? t: e ? {
						vid: t,
						watchStartTime: n[0],
						autoplay: n[1],
						ts: n[2],
						sign: n[3]
					}: JSON.parse(t),
					et.isPreviewVid(a.vid) ? (a.originVid = a.vid, a.vid = et.decodePreviewVid(a.vid)) : a.preview && (a.originVid = et.enCodePreviewVid(a.vid)),
					this.HTML5.changeVid(a)
				} else {
					var o, s;
					if (e)(s = this.flash).changeVid.apply(s, [t].concat(n)),
					o = t,
					this.changeParam({
						vid: o
					});
					else if ("object" === h()(t)) this.flash.changeVid(V()(t)),
					o = t.vid,
					this.changeParam(t);
					else {
						this.flash.changeVid(t);
						try {
							var l = JSON.parse(t);
							this.changeParam(l),
							o = l.vid
						} catch(t) {}
					}
					o && (window.polyvObject["toHTML5" + o] = this.toHTML5.bind(this))
				}
			},
			j2s_stayInVideoTime: function() {
				return this.HTML5 ? Math.round(this.HTML5.statistics.pd) : this.flash.j2s_stayInVideoTime()
			},
			j2s_realPlayVideoTime: function() {
				return this.j2s_stayInVideoTime()
			},
			j2s_seekVideo: function(t) {
				var e = Math.max(Math.min(t, this.j2s_getDuration()), 0);
				this.HTML5 ? this.HTML5.seek(e) : this.flash.j2s_seekVideo(e)
			},
			j2s_setVolume: function(t) {
				this.HTML5 ? this.HTML5.volume = t: this.flash.j2s_setVolume(t)
			},
			toggleFullscreen: function() {
				this.HTML5 && this.HTML5.toggleFullscreen()
			},
			toggleFullPageScreen: function() {
				this.HTML5 ? this.HTML5.toggleFullPageScreen() : this.flash.toggleFullPageScreen()
			},
			changeRepeat: function(t) {
				this.HTML5 ? this.HTML5.changeRepeat(t) : this.flash.changeRepeat(t)
			},
			changeLevel: function(t) {
				this.HTML5 && this.HTML5.changeLevel(t)
			},
			switchBitrate: function(t) {
				this.HTML5 ? this.HTML5.changeLevel(t) : this.flash.j2s_changeLevel(t)
			},
			changeRate: function(t) {
				this.HTML5 && this.HTML5.changeRate(t)
			},
			changeLine: function(t) {
				return !! this.HTML5 && this.HTML5.switchLine(t)
			},
			getCurrentMode: function() {
				return this.HTML5 ? this.HTML5.getCurrentMode() : this.flash.getCurrentMode && this.flash.getCurrentMode()
			},
			setMode: function(t) {
				this.HTML5 ? this.HTML5.changeMode(t) : this.flash.setMode && this.flash.setMode(t)
			},
			j2s_addBarrageMessage: function(t) {
				if (this.HTML5) {
					if (this.HTML5.danmu) try {
						var e = JSON.parse(t);
						this.HTML5.danmu.send(e.map(function(t) {
							return {
								msg: t.msg,
								time: t.time ? et.stringToSeconds(t.time) : void 0,
								fontColor: t.fontColor
							}
						}))
					} catch(t) {
						return
					}
				} else this.flash.j2s_addBarrageMessage(t)
			},
			j2s_showBarrage: function() {
				this.HTML5 ? this.HTML5.danmu && this.HTML5.danmu.show() : this.flash.j2s_showBarrage()
			},
			j2s_hideBarrage: function() {
				this.HTML5 ? this.HTML5.danmu && this.HTML5.danmu.hide() : this.flash.j2s_hideBarrage()
			},
			j2s_reloadBarrageData: function() {
				this.HTML5 ? this.HTML5.danmu && this.HTML5.danmu.reloadData() : this.flash.j2s_reloadBarrageData()
			},
			sendQuestion: function(t) {
				this.HTML5 ? this.HTML5.ask && this.HTML5.ask.sendQuestion(t, !0) : this.flash.sendQuestion(t)
			},
			changeQuestion: function(t, e) {
				this.HTML5 ? this.HTML5.ask && this.HTML5.ask.changeQuestion(t, e) : this.flash.changeQuestion(t, e)
			},
			switchMain: function(t) {
				this.HTML5 ? this.HTML5.ppt && this.HTML5.ppt.switchMain(t) : this.flash.switchMain(t)
			},
			j2s_realPlayStatus: function() {
				return this.HTML5 ? this.j2s_stayInVideoStatus() : this.flash.j2s_realPlayStatus ? this.flash.j2s_realPlayStatus() : this.flash.j2s_stayInVideoStatus ? this.flash.j2s_stayInVideoStatus() : void 0
			},
			j2s_stayInVideoStatus: function() {
				if (this.HTML5) {
					var t = this.HTML5.pid,
					e = this.HTML5.vid,
					i = Math.round(this.HTML5.statistics.pd);
					return n = e,
					r = t,
					a = i,
					o = $t()(),
					V()({
						vid: n,
						pid: r,
						playduration: a,
						timestamp: o,
						sign: Oi()(r + n + a.toString() + o.toString() + Object(c.md5)(n).substring(0, 8))
					})
				}
				return this.flash.j2s_stayInVideoStatus ? this.flash.j2s_stayInVideoStatus() : this.flash.j2s_realPlayStatus ? this.flash.j2s_realPlayStatus() : void 0;
				var n, r, a, o
			}, getScreenshotData: function() {
				if (this.HTML5) return this.HTML5.getScreenshotData()
			}
		},
		Fi = ["session_id", "param1", "param2", "param3", "param4", "param5", "key1", "key2", "key3"],
		Ni = ["df", "loop", "hideRepeat", "code", "teaser_time", "teaser_url", "teaser_show", "teaserSkip", , "tail_time", "tail_url", "tail_show", "tailSkip", "ignoreIE", "ban_ui", "logo", "priorityMode", "hideSwitchPlayer", "ban_seek_by_limit_time", "ban_seek", "screenshot", "verificationcode", "ban_barrage_btn", "skipErrorTs", "loading_bg_img", "ban_record_interaction_right_answer", "url", "start", "end", "lang", "preloadDataSize", "preloadDurationLength", "pptEnable", "is_interaction", "flashvars", "playsafeUrl", "keyboardSeekTime", "adMatter", "watchStartTime", "watchEndTime", "show_rate", "history_video_duration", "title_of_right_answer_explain", "title_of_wrong_answer_explain", "video_align", "player_id", "rightMenu", "appId", "preview", "ban_preview_video", "pictureInPicture", "mutedAutoplay", "endScreen", "ban_ad", "allowGetScreenshotData"],
		Ui = ["teaser_show", "tail_show", "speed", "adSkip", "marqueeCheck", "showHd", "audioMode", "videoMode", "skinLocation", "allowFullscreen", "showAuto", "flashConfig", "srt_caption_txt_size", "srt_caption_txt_height", "srt_caption_base_height", "srt_caption_base_width", "fullscreenProxy", "ban_history_time", "cover_display", "cover_opacity", "full_page_screen", "disableOpera", "customErrorTips", "logoConfig", "useSingleSubtitleStyle"];
		k(205);
		function qi() {
			return v.a.isSupported() && !it.a.isMobile && !it.a.isMaxthon
		}
		var ji = [],
		zi = qt.createScript(qt.url),
		Vi = !1;
		qi() || (qt.checkFlash() ? Vi = !0 : f.a.querySelector("head").appendChild(zi)),
		zi.onload = function() {
			Vi = !0,
			ji.forEach(function(t) {
				return t()
			})
		};
		function Hi(r, t) {
			if (!t.injectEventMethodStatus) {
				var a = void 0;
				t.emit && (a = t.emit.bind(t)),
				t.emit = function(t) {
					for (var e = arguments.length,
					i = new Array(1 < e ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
					a && a.apply(void 0, [t].concat(i)),
					r.triggerEvent.apply(r, [t].concat(i))
				},
				t.injectEventMethodStatus = !0
			}
		}
		function Gi(t) {
			var e, i, n, r, a = m()({},
			ft, t),
			o = {};
			function s(t) {
				var e = t.vid,
				i = t.playsafe,
				n = t.code,
				r = t.loading_bg_img;
				a.vid = e,
				i && (a.playsafe = i),
				n && (a.code = n),
				void 0 !== r && !0 !== r && (a.loading_bg_img = r)
			}
			t.options && (a = function(e, i) {
				if (Ni.forEach(function(t) {
					i[t] && (e[t] = i[t])
				}), Ui.forEach(function(t) {
					void 0 !== i[t] && (e[t] = i[t])
				}), i.flashvars && (e.volume = i.flashvars.volume || e.volume), i.session_id && (e.statistics.session_id = i.session_id), et.isObject(i.params)) for (var t in i.params) - 1 !== Fi.indexOf(t) && (e.statistics[t] = i.params[t]);
				return et.isObject(i.statistics) && (e.statistics = i.statistics),
				et.isObject(i.viewerInfo) && (e.viewerInfo = i.viewerInfo),
				et.isObject(i.skinConfig) && (e.skinConfig = i.skinConfig),
				e
			} (a, t.options), t.options.h5PlayerObj && (o = t.options.h5PlayerObj)),
			it.a.isIpad && (a.hideSwitchPlayer = !0),
			a.speed = vt(a.speed),
			et.isPreviewVid(a.vid) ? (a.originVid = a.vid, a.vid = et.decodePreviewVid(a.vid)) : a.preview && (a.originVid = et.enCodePreviewVid(a.vid)),
			e = a,
			i = et.getStorage(),
			n = e.vid,
			(r = i["volume-".concat(n)]) && (e.volume = r),
			"number" == typeof e.volume && e.volume <= 1 && 0 <= e.volume || (e.volume = ft.volume),
			(a = e).userConfig = m()({},
			t);
			var l = {
				get version() {
					return "v1.19.0"
				},
				get updateTime() {
					return "20210810"
				},
				changeParam: s,
				HTML5: !1,
				flash: !1,
				isSupportHTML5: !!qi(),
				destroy: function() {
					this.HTML5 && this.HTML5.destroy(),
					this.flash && this.flash.destroy && this.flash.destroy(),
					this.HTML5 = !1,
					this.flash = !1,
					Object(d.a)(a.wrap).empty()
				},
				toFlash: function() {
					this.flash || this.HTML5 && this.HTML5.toFlash()
				},
				toHTML5: function() {
					if (!this.HTML5 && this.isSupportHTML5 && (!it.a.isIE11 || !a.ignoreIE)) return a.watchStartTime = this.j2s_getCurrentTime(),
					a.autoplay = "FLOW_PLAY" === this.flash.j2s_getCurrentStatus(),
					this.flash && this.flash.destroy && this.flash.destroy(),
					Object(d.a)(a.wrap).empty(),
					this.HTML5 = new Mi(a, c),
					this.HTML5.init(),
					this.flash = !1,
					this.HTML5.changeParam = s,
					this.trigger("HTML5Load", this.HTML5),
					this
				},
				checkThis: function() {
					console.log("H5Object", o === this),
					console.log("playerInit", l === this)
				}
			},
			c = m()(o, l);
			if (c.el = "object" === h()(a.wrap) ? a.wrap: f.a.querySelector(a.wrap), Ee(c), Ee(c.el), (c.isSupportHTML5 && a.flash || c.isSupportHTML5 & it.a.isIE11 && a.ignoreIE) && (qt.checkFlash() ? Vi = !0 : f.a.querySelector("head").appendChild(zi)), c.el.on("changeFlash",
			function(t, e) {
				c.flash = e,
				Hi(c, c.flash),
				c.HTML5 = !1,
				p.a.polyvObject["toHTML5" + a.vid] = c.toHTML5.bind(c),
				c.trigger("flashLoad", c.flash)
			}), !c.isSupportHTML5 || a.flash || it.a.isIE11 && a.ignoreIE || (c.HTML5 = new Mi(a, c), c.HTML5.init(), c.HTML5.changeParam = s), !c.isSupportHTML5 || a.flash || it.a.isIE11 && a.ignoreIE) {
				var u = c.isSupportHTML5 ? "off": "on";
				it.a.isIE11 && a.ignoreIE && (u = "on"),
				Vi ? (c.flash = qt._init(c.el, a, u), Hi(c, c.flash), c.trigger("flashLoad", c.flash)) : ji.push(function() {
					c.flash = qt._init(c.el, a, u),
					Hi(c, c.flash),
					c.trigger("flashLoad", c.flash)
				})
			}
			return m()(c, Bi),
			function(t) {
				var e = {
					levels: {
						getHandler: function() {
							return t.HTML5 ? t.HTML5.levels: t.flash.getQualityLevels().length
						}
					},
					currentLevel: {
						getHandler: function() {
							if (t.HTML5) return t.HTML5.currentLevel
						}
					},
					currentRate: {
						getHandler: function() {
							return t.HTML5 ? t.HTML5.video.playbackRate: 1
						}
					},
					lines: {
						getHandler: function() {
							if (t.HTML5) return t.HTML5.lines
						}
					},
					currentLine: {
						getHandler: function() {
							if (t.HTML5) return t.HTML5.line
						}
					},
					speed: {
						getHandler: function() {
							if (t.HTML5) return t.HTML5.param.speed
						}
					}
				};
				for (var i in e) Li(t, i, e[i].getHandler, e[i].setHandler)
			} (c),
			c
		}
		Gi.isSupportHTML5 = qi(),
		Gi.version = "v1.19.0",
		Gi.updateTime = "20210810";
		var Yi = Gi
	},
	function(t, e, i) {
		"use strict";
		i.r(e),
		i.d(e, "tmp",
		function() {
			return f
		});
		var s = i(3),
		l = i(18),
		c = i(1);
		i(35);
		function u() {
			return '\n  <div class="pv-controls">\n    <div class="pv-controls-left">\n      <button type="button" class="'.concat(playpause.defaultClass, " pv-iconfont ").concat(playpause.play, '"></button>\n      <div class="pv-time-wrap pv-xxsmall-hide">\n        <span class="').concat(time.current, '">00:00</span>\n        <span class="pv-time-separator">/</span>\n        <span class="').concat(time.duration, '">00:00</span>\n      </div>\n    </div>\n    <div class="pv-controls-right">\n      <div class="pv-component-wrap pv-dm-wrap ').concat(smallHide, '">\n        <button type="button" class="').concat(danmu.defaultClass, " pv-iconfont ").concat(danmu.on, '"></button>\n        <div class="pv-danmu-tip pv-control-wrap-style">').concat(lang.danmu, '</div>\n      </div>\n      <div class="pv-component-wrap ').concat(xsmallHide, '">\n        <button type="button" class="').concat(volume.defaultClass, " pv-iconfont ").concat(volume.on, '"></button>\n        <div class="pv-control-wrap-style">\n          <div class="').concat(volume.slider, '">\n            <div class="').concat(volume.touch, '"></div>\n            <div class="').concat(volume.rail, '">\n              <div class="').concat(volume.current, '"><span class="pv-volume-target"></span></div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="pv-component-wrap ').concat(xsmallHide, " ").concat(btnRadius, '">\n        <button type="button" class="').concat(quality.qualityBtn, '">\n          <span></span>\n        </button>\n        <div class="pv-control-wrap-style">\n          <div class="').concat(quality.select, '">\n          </div>\n        </div>\n      </div>\n      <div class="pv-component-wrap ').concat(smallHide, " ").concat(btnRadius, '">\n        <button type="button" class="').concat(rate.rateBtn, '"><span>1x</span></button>\n        <div class="pv-control-wrap-style">\n          <div class="').concat(rate.select, '">\n          </div>\n        </div>\n      </div>\n      <div class="pv-component-wrap ').concat(smallHide, '">\n        <button type="button" class="').concat(setting.btn, ' pv-iconfont"></button>\n        <div class="pv-setting-select-wrap pv-control-wrap-style">\n          <div class="pv-setting-select">\n            <div class="pv-subtitle-select-wrap">\n              <div class="pv-setting-tip">').concat(lang.subtitle, '</div>\n              <div class="pv-setting-choose ').concat(subtitle.select, '"></div>\n            </div>\n            <div class="pv-stream-select-wrap">\n              <div class="pv-setting-tip">').concat(lang.mode, '</div>\n              <div class="pv-setting-choose ').concat(stream.select, '">\n                <span data-mode="video">').concat(lang.videoMode, '</span><span data-mode="audio">').concat(lang.audioMode, '</span>\n              </div>\n            </div>\n            <div class="pv-line-select-wrap">\n              <div class="pv-setting-tip">').concat(lang.line, '</div>\n              <div class="pv-setting-choose ').concat(line.select, '"></div>\n            </div>\n            <div class="').concat(switchPlayer, '">\n              <div class="pv-setting-tip">').concat(lang.player, '</div>\n              <div class="pv-setting-choose">\n                <span class="').concat(setting.flash, '">Flash</span><span class="pv-active">HTML5</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="pv-component-wrap pv-pip-wrap">\n        <button type="button" class="pv-icon-pip-pc pv-iconfont ').concat(pip, '"></button>\n        <div class="pv-pip-tip pv-control-wrap-style">').concat(lang.pip, '</div>\n      </div>\n      <div class="pv-component-wrap pv-fullscreen-page-wrap">\n        <button type="button" class="').concat(fullscreenPage.defaultClass, " pv-iconfont ").concat(fullscreenPage.full, '"></button>\n        <div class="').concat(fullscreenPage.tip, ' pv-control-wrap-style">').concat(lang.fullscreenPage, '</div>\n      </div>\n      <div class="pv-component-wrap pv-fullscreen-wrap">\n        <button type="button" class="').concat(fullscreen.defaultClass, " pv-iconfont ").concat(fullscreen.full, '"></button>\n        <div class="').concat(fullscreen.tip, ' pv-control-wrap-style">').concat(lang.fullscreen, "</div>\n      </div>\n    </div>\n  </div>\n  ")
		}
		var d = i(37),
		n = i(4),
		r = i.n(n),
		a = i(2),
		o = i.n(a),
		h = "pv-first-h",
		p = function() {
			function i(t, e) {
				r()(this, i),
				this.ctrl = t,
				this.wrap = e,
				this._init()
			}
			return o()(i, [{
				key: "_init",
				value: function() {
					var e, i, t = this.wrap,
					n = this.ctrl,
					r = !1,
					a = "move";
					e = setTimeout(function() {
						n.classList.remove(h),
						n.classList.remove("pv-first-hh"),
						n.style.overflow = "hidden"
					},
					5e3);
					function o(t) {
						a = t.type,
						clearTimeout(e),
						r || (n.classList.add(h), i = setTimeout(function() {
							n.style.overflow = "visible",
							n.classList.add("pv-first-hh")
						},
						200), r = !0),
						e = setTimeout(function() {
							n.classList.remove(h),
							n.classList.remove("pv-first-hh"),
							n.style.overflow = "hidden",
							r = !1
						},
						3e3)
					}
					t.addEventListener("mousemove", o, !1),
					t.addEventListener("mouseleave",
					function() {
						"click" !== a && (clearTimeout(e), clearTimeout(i), n.classList.remove(h), n.classList.remove("pv-first-hh"), n.style.overflow = "hidden", r = !1)
					}),
					t.addEventListener("click", o)
				}
			}]),
			i
		} ();
		i(269);
		var f = function(t, e, i, n) {
			var r = Object(s.a)(Object(l.a)(u, c.a, n)),
			a = Object(s.a)(Object(l.a)(d.a, c.a)),
			o = Object(s.a)('<div class="pv-skin-blue pv-video-bottom pv-first-h '.concat(t ? "pv-hide-ctrl": "", '"></div>'));
			o.append(a, r),
			e || o.find(".".concat(c.a.rate.rateBtn)).css("display", "none"),
			i && o.find(".".concat(c.a.switchPlayer)).remove();
			return {
				controllerWrap: r,
				progressWrap: a,
				wrap: o,
				direction: "col",
				skin: "skin_blue",
				color: "#03a9f4",
				alpha: 70,
				size: [400, 280, 200],
				renderColor: function(t, e) {
					return "".concat(e, " .pv-controls {\n        background-color: ").concat(t, ";\n      }")
				},
				events: {
					controlRender: function() {
						var t = this.controller.wrap;
						new p(t.dom[0], this.Elements.wrap.dom[0])
					},
					videoJsonUpdate: function() {
						var t;
						t = this.hasAudioMode && this.param.audioMode && this.param.videoMode,
						i && !t ? o.find(".".concat(c.a.setting.btn)).css("display", "none") : o.find(".".concat(c.a.setting.btn)).css("display", "inline-block")
					}
				}
			}
		}
	},
	function(t, e, i) {
		"use strict";
		i.r(e),
		i.d(e, "tmp",
		function() {
			return r
		});
		var n = i(11),
		u = i.n(n),
		d = i(3),
		h = i(18),
		p = i(1),
		f = (i(35), i(83));
		function v() {
			return '\n  <div class="pv-controls">\n    <div class="pv-controls-left">\n      <button type="button" class="'.concat(playpause.defaultClass, " pv-iconfont ").concat(playpause.play, '"></button>\n      <div class="pv-time-wrap pv-xxsmall-hide">\n        <span class="').concat(time.current, '">00:00</span>\n        <span class="pv-time-separator">/</span>\n        <span class="').concat(time.duration, '">00:00</span>\n      </div>\n    </div>\n    <div class="pv-controls-right">\n      <div class="pv-component-wrap pv-dm-wrap ').concat(smallHide, '">\n        <button type="button" class="').concat(danmu.defaultClass, " pv-iconfont ").concat(danmu.on, '"></button>\n        <div class="pv-danmu-tip pv-control-wrap-style">').concat(lang.danmu, '</div>\n      </div>\n      <div class="pv-volume-wrap ').concat(xsmallHide, '">\n        <button type="button" class="').concat(volume.defaultClass, " pv-iconfont ").concat(volume.on, '"></button>\n        <div class="">\n          <div class="').concat(volume.slider, '">\n            <div class="').concat(volume.touch, '"></div>\n            <div class="').concat(volume.rail, '">\n              <div class="').concat(volume.current, '"><span class="pv-volume-target"></span></div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="pv-component-wrap ').concat(smallHide, " ").concat(btnRadius, '">\n        <button type="button" class="').concat(quality.qualityBtn, '">\n          <span></span>\n          ').concat(svg.arrowDown, '\n        </button>\n        <div class="pv-control-wrap-style">\n          <div class="').concat(quality.select, ' pv-skin-gold-menu">\n          </div>\n        </div>\n      </div>\n      <div class="pv-component-wrap">\n        <button type="button" class="').concat(setting.btn, ' pv-iconfont pv-xxsmall-hide"></button>\n        <div class="pv-setting-select-wrap pv-control-wrap-style2 ').concat(selectMenuWrap, '" style="width:156px;height:105px">\n          <div class="pv-setting-select-layout">\n            <div class="pv-setting-select">\n              <div class="pv-setting-select-menu ').concat(selectMenu, " ").concat(setting.menu, '" data-size="156x105">\n                <div class="').concat(rate.wrap, '">\n                  <div class="pv-setting-tip">').concat(lang.speed, '</div>\n                  <div class="pv-current-select" data-target="2">\n                    <span class="').concat(rate.rateBtn, '"><span>1x</span></span>\n                    ').concat(svg.arrowRight, '</div>\n                </div>\n                <div class="pv-subtitle-btn-wrap">\n                  <div class="pv-setting-tip">').concat(lang.subtitle, '</div>\n                  <div class="pv-current-select" data-target="5"><span class="').concat(subtitle.btn, '"></span> ').concat(svg.arrowRight, '</div>\n                </div>\n                <div class="pv-stream-btn-wrap">\n                  <div class="pv-setting-tip">').concat(lang.mode, '</div>\n                  <div class="pv-current-select" data-target="4"><span class="').concat(stream.btn, '">').concat(lang.videoMode, "</span> ").concat(svg.arrowRight, '</div>\n                </div>\n\n                <div class="pv-line-btn-wrap">\n                  <div class="pv-setting-tip">').concat(lang.line, '</div>\n                  <div class="pv-current-select" data-target="6"><span class="').concat(line.btn, '"></span> ').concat(svg.arrowRight, '</div>\n                </div>\n\n                <div class="').concat(switchPlayer, '">\n                  <div class="pv-setting-tip">').concat(lang.player, '</div>\n                  <div class="pv-current-select" data-target="3">HTML5 ').concat(svg.arrowRight, '</div>\n                </div>\n              </div>\n              <div class="').concat(rate.select, " pv-skin-gold-menu ").concat(selectMenu, '" style="display:none;"  data-size="100x198">\n                <div class="pv-skin-gold-menu-title" data-target="1">').concat(svg.arrowLeft).concat(lang.speed, '</div>\n              </div>\n              <div class="pv-skin-gold-menu ').concat(selectMenu, '" style="display:none;" data-size="100x105">\n                <div class="pv-skin-gold-menu-title" data-target="1">').concat(svg.arrowLeft).concat(lang.player, '</div>\n                <div class="').concat(active, '">').concat(svg.select, '<span>HTML5</span></div>\n                <div class="').concat(setting.flash, '">').concat(svg.select, '<span>flash</span></div>\n              </div>\n              <div class="pv-skin-gold-menu ').concat(selectMenu, " ").concat(stream.select, '" style="display:none;" data-size="100x105">\n                <div class="pv-skin-gold-menu-title" data-target="1">').concat(svg.arrowLeft).concat(lang.mode, '</div>\n                <div data-mode="video">').concat(svg.select, "<span>").concat(lang.videoMode, '</span></div>\n                <div data-mode="audio">').concat(svg.select, "<span>").concat(lang.audioMode, '</span></div>\n              </div>\n              <div class="pv-skin-gold-menu ').concat(selectMenu, " ").concat(subtitle.select, '" style="display:none;" data-size="100x105">\n                <div class="pv-skin-gold-menu-title" data-target="1">').concat(svg.arrowLeft).concat(lang.subtitle, '</div>\n              </div>\n              <div class="pv-skin-gold-menu ').concat(selectMenu, " ").concat(line.select, '" style="display:none;" data-size="100x105">\n                <div class="pv-skin-gold-menu-title" data-target="1">').concat(svg.arrowLeft).concat(lang.line, '</div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="pv-component-wrap pv-pip-wrap">\n        <button type="button" class="pv-icon-pip-pc pv-iconfont ').concat(pip, '"></button>\n        <div class="pv-pip-tip pv-control-wrap-style">').concat(lang.pip, '</div>\n      </div>\n      <div class="pv-component-wrap pv-fullscreen-page-wrap">\n        <button type="button" class="').concat(fullscreenPage.defaultClass, " pv-iconfont ").concat(fullscreenPage.full, '"></button>\n        <div class="').concat(fullscreenPage.tip, ' pv-control-wrap-style">').concat(lang.fullscreenPage, '</div>\n      </div>\n      <div class="pv-component-wrap pv-fullscreen-wrap">\n        <button type="button" class="').concat(fullscreen.defaultClass, " pv-iconfont ").concat(fullscreen.full, '"></button>\n        <div class="').concat(fullscreen.tip, ' pv-control-wrap-style">').concat(lang.fullscreen, "</div>\n      </div>\n    </div>\n  </div>\n  ")
		}
		var g = i(37),
		m = i(51);
		i(110);
		i(250);
		var r = function(t, i, n, e) {
			var r = Object(d.a)(Object(h.a)(v, p.a, e)),
			a = Object(d.a)(Object(h.a)(g.a, p.a)),
			o = Object(d.a)('<div class="pv-skin-gold pv-video-bottom pv-controls-hide pv-first-h '.concat(t ? "pv-hide-ctrl": "", '"></div>')),
			s = Object(d.a)("<div />").append(a, r);
			o.append(s);
			function l(t) {
				var e = !(0 < arguments.length && void 0 !== t) || t;
				o.find(".".concat(p.a.setting.menu)).attr("data-size", "156x".concat(c)),
				e && o.find(".".concat(p.a.selectMenuWrap)).css({
					height: "".concat(c, "px")
				})
			}
			var c = 135;
			return {
				controllerWrap: r,
				progressWrap: a,
				wrap: o,
				direction: "line",
				skin: "skin_gold",
				color: "#f6c474",
				alpha: 65,
				size: [520, 390, 250],
				renderColor: function(t, e) {
					return "\n      ".concat(e, " .pv-skin-gold.pv-video-bottom:before {\n        background: -webkit-linear-gradient(top, transparent, ").concat(t, ");\n        background: linear-gradient(to bottom, transparent, ").concat(t, ");\n      }\n      ")
				},
				events: {
					changeLevel: function(t, e, i) {
						var n = this.qualityBtnLists;
						void 0 === i && n.forEach(function(t) {
							t.append(f.a.select)
						})
					},
					videoJsonUpdate: function() {
						var t, e;
						c = 135,
						t = this.hasAudioMode && this.param.audioMode && this.param.videoMode,
						e = this.videoInfo.video_srt,
						i ? o.find(".".concat(p.a.rate.select)).attr("data-size", "100x".concat(30 * i.length + 48)) : (o.find(".".concat(p.a.rate.wrap)).css("display", "none"), c -= 30),
						n && (o.find(".".concat(p.a.switchPlayer)).css("display", "none"), c -= 30),
						t || (c -= 30),
						e ? o.find(".".concat(p.a.subtitle.select)).attr("data-size", "100x".concat(30 * u()(e).length + 78)) : c -= 30,
						i || !n || t || e ? o.find(".".concat(p.a.setting.btn)).css("display", "inline-block") : o.find(".".concat(p.a.setting.btn)).css("display", "none"),
						l()
					},
					controlRender: function() {
						new m.a(this.controller.wrap.dom[0], this.Elements.wrap.dom[0], "pv-controls-hide");
						function e(t) {
							r.css("display", t ? "none": "block")
						}
						function i(t) {
							var e = n.eq(t - 1),
							i = e.attr("data-size").split("x");
							r.css({
								width: "".concat(i[0], "px"),
								height: "".concat(i[1], "px")
							}),
							setTimeout(function() {
								n.eq(o - 1).css("display", "none"),
								setTimeout(function() {
									e.css("display", "block")
								},
								50),
								o = t
							},
							50)
						}
						var t = this.wrap.find("[data-target]"),
						n = this.Elements.selectMenu,
						r = this.Elements.selectMenuWrap,
						a = !1,
						o = 1;
						this.Elements.settingBtn.on("click",
						function(t) {
							t.stopPropagation(),
							e(a),
							(a = !a) || i(1)
						}),
						r.on("click",
						function(t) {
							t.stopPropagation()
						}),
						Object(d.a)("body").on("click",
						function() {
							e(!0),
							a = !1,
							i(1)
						}),
						this.videoWrap.on("click",
						function(t) {
							e(!0),
							a = !1,
							i(1)
						}),
						t.on("click",
						function() {
							var t = +Object(d.a)(this).attr("data-target");
							i(t)
						})
					},
					renderLineControl: function(t, e) {
						o.find(".".concat(p.a.line.select)).attr("data-size", "100x".concat(30 * e + 48)),
						c += 30,
						l()
					},
					onChangeMode: function(t, e, i) {
						"audio" === i ? c -= 30 : c += 30,
						l(!1)
					}
				}
			}
		}
	},
	function(t, e, i) {
		"use strict";
		i.r(e),
		i.d(e, "tmp",
		function() {
			return r
		});
		var n = i(8),
		l = i.n(n),
		c = i(3),
		u = i(18),
		d = i(1);
		i(35);
		function h() {
			return '\n  <div class="pv-controls">\n    <div class="pv-controls-left">\n      <button type="button" class="'.concat(playpause.defaultClass, " pv-iconfont ").concat(playpause.play, '"></button>\n      <div class="pv-time-wrap">\n        <span class="').concat(time.current, '">00:00</span>\n        <span class="pv-time-separator">/</span>\n        <span class="').concat(time.duration, '">00:00</span>\n      </div>\n    </div>\n    ').concat(progressTemp, '\n    <div class="pv-controls-right">\n      <div class="pv-component-wrap pv-dm-wrap ').concat(smallHide, '">\n        <button type="button" class="').concat(danmu.defaultClass, " pv-iconfont ").concat(danmu.on, '"></button>\n        <div class="pv-danmu-tip pv-control-wrap-style">').concat(lang.danmu, '</div>\n      </div>\n      <div class="pv-component-wrap ').concat(xsmallHide, '">\n        <button type="button" class="').concat(volume.defaultClass, " pv-iconfont ").concat(volume.on, '"></button>\n        <div class="pv-control-wrap-style">\n          <div class="').concat(volume.slider, '">\n            <div class="').concat(volume.touch, '"></div>\n            <div class="').concat(volume.rail, '">\n              <div class="').concat(volume.current, '"><span class="pv-volume-target"></span></div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="pv-component-wrap ').concat(xsmallHide, " ").concat(btnRadius, '">\n        <button type="button" class="').concat(quality.qualityBtn, '">\n          <span></span>\n        </button>\n        <div class="pv-control-wrap-style">\n          <div class="').concat(quality.select, '">\n          </div>\n        </div>\n      </div>\n      <div class="pv-component-wrap ').concat(smallHide, " ").concat(btnRadius, '">\n        <button type="button" class="').concat(rate.rateBtn, '"><span>1x</span></button>\n        <div class="pv-control-wrap-style">\n          <div class="').concat(rate.select, '">\n          </div>\n        </div>\n      </div>\n      <div class="pv-component-wrap ').concat(smallHide, '">\n        <button type="button" class="').concat(setting.btn, ' pv-iconfont"></button>\n        <div class="pv-setting-select-wrap pv-control-wrap-style">\n          <div class="pv-setting-select">\n            <div class="pv-subtitle-select-wrap">\n              <div class="pv-setting-tip">').concat(lang.subtitle, '</div>\n              <div class="pv-setting-choose ').concat(subtitle.select, '"></div>\n            </div>\n            <div class="pv-stream-select-wrap">\n              <div class="pv-setting-tip">').concat(lang.mode, '</div>\n              <div class="pv-setting-choose ').concat(stream.select, '">\n                <span data-mode="video">').concat(lang.videoMode, '</span><span data-mode="audio">').concat(lang.audioMode, '</span>\n              </div>\n            </div>\n            <div class="pv-line-select-wrap">\n              <div class="pv-setting-tip">').concat(lang.line, '</div>\n              <div class="pv-setting-choose ').concat(line.select, '"></div>\n            </div>\n            <div class="').concat(switchPlayer, '">\n              <div class="pv-setting-tip">').concat(lang.player, '</div>\n              <div class="pv-setting-choose">\n                <span class="').concat(setting.flash, '">Flash</span><span class="pv-active">HTML5</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="pv-component-wrap pv-pip-wrap">\n        <button type="button" class="pv-icon-pip-pc pv-iconfont ').concat(pip, '"></button>\n        <div class="pv-pip-tip pv-control-wrap-style">').concat(lang.pip, '</div>\n      </div>\n      <div class="pv-component-wrap pv-fullscreen-page-wrap">\n        <button type="button" class="').concat(fullscreenPage.defaultClass, " pv-iconfont ").concat(fullscreenPage.full, '"></button>\n        <div class="').concat(fullscreenPage.tip, ' pv-control-wrap-style">').concat(lang.fullscreenPage, '</div>\n      </div>\n      <div class="pv-component-wrap pv-fullscreen-wrap">\n        <button type="button" class="').concat(fullscreen.defaultClass, " pv-iconfont ").concat(fullscreen.full, '"></button>\n        <div class="').concat(fullscreen.tip, ' pv-control-wrap-style">').concat(lang.fullscreen, "</div>\n      </div>\n    </div>\n  </div>\n  ")
		}
		var p = i(37),
		f = i(51);
		i(265);
		var r = function(t, e, i, n) {
			var r = Object(u.a)(p.a, d.a),
			a = Object(c.a)(Object(u.a)(h, l()({},
			d.a, {
				progressTemp: r
			}), n)),
			o = a.find(".pv-progress-wrap");
			console.log(o);
			var s = Object(c.a)('<div class="pv-skin-green pv-video-bottom pv-first-h '.concat(t ? "pv-hide-ctrl": "", '"></div>'));
			s.append(a),
			e || s.find(".".concat(d.a.rate.rateBtn)).css("display", "none"),
			i && s.find(".".concat(d.a.switchPlayer)).remove();
			return {
				controllerWrap: a,
				progressWrap: o,
				wrap: s,
				direction: "col",
				skin: "skin_green",
				color: "#03a9f4",
				alpha: 45,
				alpha2: 90,
				size: [650, 535],
				renderColor: function(t, e, i) {
					return "".concat(e, ' .pv-controls:before {\n         content: "";\n         z-index: 0;\n         border-radius: 6px;\n         position: absolute;\n         left: 0;\n         top: 0;\n         right: 0;\n         bottom: 0;\n         background-image: linear-gradient( 90deg, ').concat(t, " 0%, ").concat(i, " 100%);\n         background-image: -moz-linear-gradient( 90deg, ").concat(t, " 0%, ").concat(i, " 100%);\n         background-image: -webkit-linear-gradient( 90deg, ").concat(t, " 0%, ").concat(i, " 100%);\n      };\n      ")
				},
				events: {
					controlRender: function() {
						var t = this.controller.wrap;
						new f.a(t.dom[0], this.Elements.wrap.dom[0], "pv-first-h")
					},
					videoJsonUpdate: function() {
						var t;
						t = this.hasAudioMode && this.param.audioMode && this.param.videoMode,
						i && !t ? s.find(".".concat(d.a.setting.btn)).css("display", "none") : s.find(".".concat(d.a.setting.btn)).css("display", "inline-block")
					}
				}
			}
		}
	},
	function(t, e, i) {
		"use strict";
		i.r(e),
		i.d(e, "tmp",
		function() {
			return n
		});
		var u = i(3),
		d = i(18),
		h = i(1);
		i(35);
		function p() {
			return '\n  <div class="pv-controls">\n    <div class="pv-controls-left">\n      <button type="button" class="'.concat(playpause.defaultClass, " pv-iconfont ").concat(playpause.play, '"></button>\n      <div class="pv-time-wrap pv-xxsmall-hide">\n        <span class="').concat(time.current, '">00:00</span>\n        <span class="pv-time-separator">/</span>\n        <span class="').concat(time.duration, '">00:00</span>\n      </div>\n      <div class="pv-volume-wrap ').concat(xsmallHide, '">\n        <button type="button" class="').concat(volume.defaultClass, " pv-iconfont ").concat(volume.on, '"></button>\n        <div class="">\n          <div class="').concat(volume.slider, '">\n            <div class="').concat(volume.touch, '"></div>\n            <div class="').concat(volume.rail, '">\n              <div class="').concat(volume.current, '"><span class="pv-volume-target"></span></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="pv-controls-right">\n      <div class="pv-component-wrap pv-dm-wrap ').concat(smallHide, '">\n      \x3c!--  <button type="button" class="').concat(danmu.defaultClass, " pv-iconfont ").concat(danmu.on, '"></button> --\x3e\n        <span class="').concat(danmu.defaultClass, " ").concat(danmu.on, '">').concat(lang.danmu, '</span>\n        <div class="pv-danmu-tip pv-control-wrap-style">').concat(lang.danmu, '</div>\n      </div>\n      <div class="pv-component-wrap ').concat(xxsmallHide, " ").concat(btnRadius, '">\n        <button type="button" class="').concat(quality.qualityBtn, '">\n          <span></span>\n        </button>\n        <div class="pv-control-wrap-style">\n          <div class="').concat(quality.select, '">\n          </div>\n        </div>\n      </div>\n      <div class="pv-component-wrap ').concat(xxsmallHide, '">\n        <button type="button" class="').concat(setting.btn, ' pv-iconfont"></button>\n        <div class="pv-setting-select-wrap pv-control-wrap-style">\n          <div class="pv-setting-select">\n            <div class="pv-rate-select-wrap">\n              <div class="pv-setting-tip">').concat(lang.speed, '</div>\n              <div class="pv-setting-choose ').concat(rate.select, '"></div>\n            </div>\n            <div class="pv-subtitle-select-wrap">\n              <div class="pv-setting-tip">').concat(lang.subtitle, '</div>\n              <div class="pv-setting-choose ').concat(subtitle.select, '"></div>\n            </div>\n            <div class="pv-line-select-wrap">\n              <div class="pv-setting-tip">').concat(lang.line, '</div>\n              <div class="pv-setting-choose ').concat(line.select, '"></div>\n            </div>\n            <div class="').concat(switchPlayer, '">\n              <div class="pv-setting-tip">').concat(lang.player, '</div>\n              <div class="pv-setting-choose">\n                <span class="pv-active">HTML5</span><span class="').concat(setting.flash, '">Flash</span>\n              </div>\n            </div>\n            <div class="pv-stream-select-wrap">\n              <div class="pv-setting-tip">').concat(lang.mode, '</div>\n              <div class="pv-setting-choose ').concat(stream.select, '">\n                <span data-mode="video">').concat(lang.videoMode, '</span><span data-mode="audio">').concat(lang.audioMode, '</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="pv-component-wrap pv-pip-wrap">\n        <button type="button" class="pv-icon-pip-pc pv-iconfont ').concat(pip, '"></button>\n        <div class="pv-pip-tip pv-control-wrap-style">').concat(lang.pip, '</div>\n      </div>\n      <div class="pv-component-wrap pv-fullscreen-page-wrap">\n        <button type="button" class="').concat(fullscreenPage.defaultClass, " pv-iconfont ").concat(fullscreenPage.full, '"></button>\n        <div class="').concat(fullscreenPage.tip, ' pv-control-wrap-style">').concat(lang.fullscreenPage, '</div>\n      </div>\n      <div class="pv-component-wrap pv-fullscreen-wrap">\n        <button type="button" class="').concat(fullscreen.defaultClass, " pv-iconfont ").concat(fullscreen.full, '"></button>\n        <div class="').concat(fullscreen.tip, ' pv-control-wrap-style">').concat(lang.fullscreen, "</div>\n      </div>\n    </div>\n  </div>\n  ")
		}
		var f = i(37),
		v = i(51);
		i(267);
		var n = function(t, i, n, e) {
			var r = Object(u.a)(Object(d.a)(p, h.a, e)),
			a = Object(u.a)(Object(d.a)(f.a, h.a)),
			o = "pv-red-select-hide-border",
			s = Object(u.a)('<div class="pv-skin-red pv-video-bottom pv-first-h '.concat(t ? "pv-hide-ctrl": "", '"></div>'));
			s.append(a, r);
			var l = s.find(".pv-rate-select-wrap"),
			c = s.find(".pv-subtitle-select-wrap");
			i || l.css("display", "none"),
			n && s.find(".".concat(h.a.switchPlayer)).remove();
			return {
				controllerWrap: r,
				progressWrap: a,
				wrap: s,
				direction: "line",
				skin: "skin_red",
				color: "#f44336",
				alpha: 80,
				size: [620, 500, 375],
				renderColor: function(t, e) {
					return "".concat(e, " .pv-controls {\n        background-color: ").concat(t, ";\n      }")
				},
				events: {
					controlRender: function() {
						var t = this.controller.wrap;
						new v.a(t.dom[0], this.Elements.wrap.dom[0], "pv-first-h")
					},
					videoJsonUpdate: function() {
						var t, e;
						t = this.hasAudioMode && this.param.audioMode && this.param.videoMode,
						e = s.find(".".concat(h.a.setting.btn)),
						i || !n || t ? e.css("display", "inline-block") : e.css("display", "none"),
						i && (!n || t ? l.removeClass(o) : l.addClass(o))
					},
					renderSubtitleControl: function(t, e) {
						e && i && l.removeClass(o),
						c && (this.hasAudioMode && this.param.audioMode && this.param.videoMode || !n ? c.removeClass(o) : c.addClass(o))
					}
				}
			}
		}
	}],
	g = {},
	h.m = f,
	h.c = g,
	h.d = function(t, e, i) {
		h.o(t, e) || Object.defineProperty(t, e, {
			enumerable: !0,
			get: i
		})
	},
	h.r = function(t) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}),
		Object.defineProperty(t, "__esModule", {
			value: !0
		})
	},
	h.t = function(e, t) {
		if (1 & t && (e = h(e)), 8 & t) return e;
		if (4 & t && "object" == typeof e && e && e.__esModule) return e;
		var i = Object.create(null);
		if (h.r(i), Object.defineProperty(i, "default", {
			enumerable: !0,
			value: e
		}), 2 & t && "string" != typeof e) for (var n in e) h.d(i, n,
		function(t) {
			return e[t]
		}.bind(null, n));
		return i
	},
	h.n = function(t) {
		var e = t && t.__esModule ?
		function() {
			return t.
		default
		}:
		function() {
			return t
		};
		return h.d(e, "a", e),
		e
	},
	h.o = function(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	},
	h.p = "./",
	h(h.s = 325);
	function h(t) {
		if (g[t]) return g[t].exports;
		var e = g[t] = {
			i: t,
			l: !1,
			exports: {}
		};
		return f[t].call(e.exports, e, e.exports, h),
		e.l = !0,
		e.exports
	}
	var f, g
});