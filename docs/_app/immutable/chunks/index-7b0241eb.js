function O() {}
const rt = (t) => t;
function lt(t, e) {
	for (const n in e) t[n] = e[n];
	return t;
}
function K(t) {
	return t();
}
function H() {
	return Object.create(null);
}
function $(t) {
	t.forEach(K);
}
function Q(t) {
	return typeof t == 'function';
}
function Pt(t, e) {
	return t != t ? e == e : t !== e || (t && typeof t == 'object') || typeof t == 'function';
}
let A;
function Rt(t, e) {
	return A || (A = document.createElement('a')), (A.href = e), t === A.href;
}
function ot(t) {
	return Object.keys(t).length === 0;
}
function Dt(t, e, n, r) {
	if (t) {
		const l = W(t, e, n, r);
		return t[0](l);
	}
}
function W(t, e, n, r) {
	return t[1] && r ? lt(n.ctx.slice(), t[1](r(e))) : n.ctx;
}
function zt(t, e, n, r) {
	if (t[2] && r) {
		const l = t[2](r(n));
		if (e.dirty === void 0) return l;
		if (typeof l == 'object') {
			const c = [],
				i = Math.max(e.dirty.length, l.length);
			for (let s = 0; s < i; s += 1) c[s] = e.dirty[s] | l[s];
			return c;
		}
		return e.dirty | l;
	}
	return e.dirty;
}
function Bt(t, e, n, r, l, c) {
	if (l) {
		const i = W(e, n, r, c);
		t.p(i, l);
	}
}
function Lt(t) {
	if (t.ctx.length > 32) {
		const e = [],
			n = t.ctx.length / 32;
		for (let r = 0; r < n; r++) e[r] = -1;
		return e;
	}
	return -1;
}
const U = typeof window != 'undefined';
let st = U ? () => window.performance.now() : () => Date.now(),
	L = U ? (t) => requestAnimationFrame(t) : O;
const x = new Set();
function V(t) {
	x.forEach((e) => {
		e.c(t) || (x.delete(e), e.f());
	}),
		x.size !== 0 && L(V);
}
function ct(t) {
	let e;
	return (
		x.size === 0 && L(V),
		{
			promise: new Promise((n) => {
				x.add((e = { c: t, f: n }));
			}),
			abort() {
				x.delete(e);
			}
		}
	);
}
let P = !1;
function ut() {
	P = !0;
}
function at() {
	P = !1;
}
function ft(t, e, n, r) {
	for (; t < e; ) {
		const l = t + ((e - t) >> 1);
		n(l) <= r ? (t = l + 1) : (e = l);
	}
	return t;
}
function _t(t) {
	if (t.hydrate_init) return;
	t.hydrate_init = !0;
	let e = t.childNodes;
	if (t.nodeName === 'HEAD') {
		const o = [];
		for (let u = 0; u < e.length; u++) {
			const _ = e[u];
			_.claim_order !== void 0 && o.push(_);
		}
		e = o;
	}
	const n = new Int32Array(e.length + 1),
		r = new Int32Array(e.length);
	n[0] = -1;
	let l = 0;
	for (let o = 0; o < e.length; o++) {
		const u = e[o].claim_order,
			_ = (l > 0 && e[n[l]].claim_order <= u ? l + 1 : ft(1, l, (a) => e[n[a]].claim_order, u)) - 1;
		r[o] = n[_] + 1;
		const f = _ + 1;
		(n[f] = o), (l = Math.max(f, l));
	}
	const c = [],
		i = [];
	let s = e.length - 1;
	for (let o = n[l] + 1; o != 0; o = r[o - 1]) {
		for (c.push(e[o - 1]); s >= o; s--) i.push(e[s]);
		s--;
	}
	for (; s >= 0; s--) i.push(e[s]);
	c.reverse(), i.sort((o, u) => o.claim_order - u.claim_order);
	for (let o = 0, u = 0; o < i.length; o++) {
		for (; u < c.length && i[o].claim_order >= c[u].claim_order; ) u++;
		const _ = u < c.length ? c[u] : null;
		t.insertBefore(i[o], _);
	}
}
function dt(t, e) {
	t.appendChild(e);
}
function X(t) {
	if (!t) return document;
	const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
	return e && e.host ? e : t.ownerDocument;
}
function ht(t) {
	const e = Y('style');
	return mt(X(t), e), e.sheet;
}
function mt(t, e) {
	dt(t.head || t, e);
}
function pt(t, e) {
	if (P) {
		for (
			_t(t),
				(t.actual_end_child === void 0 ||
					(t.actual_end_child !== null && t.actual_end_child.parentElement !== t)) &&
					(t.actual_end_child = t.firstChild);
			t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

		)
			t.actual_end_child = t.actual_end_child.nextSibling;
		e !== t.actual_end_child
			? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child)
			: (t.actual_end_child = e.nextSibling);
	} else (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function Tt(t, e, n) {
	P && !n ? pt(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null);
}
function yt(t) {
	t.parentNode.removeChild(t);
}
function Y(t) {
	return document.createElement(t);
}
function T(t) {
	return document.createTextNode(t);
}
function Ft() {
	return T(' ');
}
function Ht() {
	return T('');
}
function It(t, e, n, r) {
	return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function Gt(t, e, n) {
	n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function gt(t) {
	return Array.from(t.childNodes);
}
function xt(t) {
	t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function Z(t, e, n, r, l = !1) {
	xt(t);
	const c = (() => {
		for (let i = t.claim_info.last_index; i < t.length; i++) {
			const s = t[i];
			if (e(s)) {
				const o = n(s);
				return o === void 0 ? t.splice(i, 1) : (t[i] = o), l || (t.claim_info.last_index = i), s;
			}
		}
		for (let i = t.claim_info.last_index - 1; i >= 0; i--) {
			const s = t[i];
			if (e(s)) {
				const o = n(s);
				return (
					o === void 0 ? t.splice(i, 1) : (t[i] = o),
					l ? o === void 0 && t.claim_info.last_index-- : (t.claim_info.last_index = i),
					s
				);
			}
		}
		return r();
	})();
	return (c.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1), c;
}
function $t(t, e, n, r) {
	return Z(
		t,
		(l) => l.nodeName === e,
		(l) => {
			const c = [];
			for (let i = 0; i < l.attributes.length; i++) {
				const s = l.attributes[i];
				n[s.name] || c.push(s.name);
			}
			c.forEach((i) => l.removeAttribute(i));
		},
		() => r(e)
	);
}
function Jt(t, e, n) {
	return $t(t, e, n, Y);
}
function bt(t, e) {
	return Z(
		t,
		(n) => n.nodeType === 3,
		(n) => {
			const r = '' + e;
			if (n.data.startsWith(r)) {
				if (n.data.length !== r.length) return n.splitText(r.length);
			} else n.data = r;
		},
		() => T(e),
		!0
	);
}
function Kt(t) {
	return bt(t, ' ');
}
function Qt(t, e) {
	(e = '' + e), t.wholeText !== e && (t.data = e);
}
function Wt(t, e, n, r) {
	n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, r ? 'important' : '');
}
function wt(t, e, { bubbles: n = !1, cancelable: r = !1 } = {}) {
	const l = document.createEvent('CustomEvent');
	return l.initCustomEvent(t, n, r, e), l;
}
function Ut(t, e = document.body) {
	return Array.from(e.querySelectorAll(t));
}
const S = new Map();
let M = 0;
function vt(t) {
	let e = 5381,
		n = t.length;
	for (; n--; ) e = ((e << 5) - e) ^ t.charCodeAt(n);
	return e >>> 0;
}
function Et(t, e) {
	const n = { stylesheet: ht(e), rules: {} };
	return S.set(t, n), n;
}
function I(t, e, n, r, l, c, i, s = 0) {
	const o = 16.666 / r;
	let u = `{
`;
	for (let p = 0; p <= 1; p += o) {
		const g = e + (n - e) * c(p);
		u +=
			p * 100 +
			`%{${i(g, 1 - g)}}
`;
	}
	const _ =
			u +
			`100% {${i(n, 1 - n)}}
}`,
		f = `__svelte_${vt(_)}_${s}`,
		a = X(t),
		{ stylesheet: d, rules: h } = S.get(a) || Et(a, t);
	h[f] || ((h[f] = !0), d.insertRule(`@keyframes ${f} ${_}`, d.cssRules.length));
	const y = t.style.animation || '';
	return (t.style.animation = `${y ? `${y}, ` : ''}${f} ${r}ms linear ${l}ms 1 both`), (M += 1), f;
}
function kt(t, e) {
	const n = (t.style.animation || '').split(', '),
		r = n.filter(e ? (c) => c.indexOf(e) < 0 : (c) => c.indexOf('__svelte') === -1),
		l = n.length - r.length;
	l && ((t.style.animation = r.join(', ')), (M -= l), M || At());
}
function At() {
	L(() => {
		M ||
			(S.forEach((t) => {
				const { stylesheet: e } = t;
				let n = e.cssRules.length;
				for (; n--; ) e.deleteRule(n);
				t.rules = {};
			}),
			S.clear());
	});
}
let E;
function v(t) {
	E = t;
}
function F() {
	if (!E) throw new Error('Function called outside component initialization');
	return E;
}
function Vt(t) {
	F().$$.on_mount.push(t);
}
function Xt(t) {
	F().$$.after_update.push(t);
}
function Yt(t, e) {
	return F().$$.context.set(t, e), e;
}
const w = [],
	G = [],
	j = [],
	J = [],
	tt = Promise.resolve();
let B = !1;
function et() {
	B || ((B = !0), tt.then(nt));
}
function Zt() {
	return et(), tt;
}
function q(t) {
	j.push(t);
}
const D = new Set();
let N = 0;
function nt() {
	const t = E;
	do {
		for (; N < w.length; ) {
			const e = w[N];
			N++, v(e), Nt(e.$$);
		}
		for (v(null), w.length = 0, N = 0; G.length; ) G.pop()();
		for (let e = 0; e < j.length; e += 1) {
			const n = j[e];
			D.has(n) || (D.add(n), n());
		}
		j.length = 0;
	} while (w.length);
	for (; J.length; ) J.pop()();
	(B = !1), D.clear(), v(t);
}
function Nt(t) {
	if (t.fragment !== null) {
		t.update(), $(t.before_update);
		const e = t.dirty;
		(t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(q);
	}
}
let b;
function jt() {
	return (
		b ||
			((b = Promise.resolve()),
			b.then(() => {
				b = null;
			})),
		b
	);
}
function z(t, e, n) {
	t.dispatchEvent(wt(`${e ? 'intro' : 'outro'}${n}`));
}
const C = new Set();
let m;
function te() {
	m = { r: 0, c: [], p: m };
}
function ee() {
	m.r || $(m.c), (m = m.p);
}
function Ct(t, e) {
	t && t.i && (C.delete(t), t.i(e));
}
function ne(t, e, n, r) {
	if (t && t.o) {
		if (C.has(t)) return;
		C.add(t),
			m.c.push(() => {
				C.delete(t), r && (n && t.d(1), r());
			}),
			t.o(e);
	} else r && r();
}
const St = { duration: 0 };
function ie(t, e, n, r) {
	let l = e(t, n),
		c = r ? 0 : 1,
		i = null,
		s = null,
		o = null;
	function u() {
		o && kt(t, o);
	}
	function _(a, d) {
		const h = a.b - c;
		return (
			(d *= Math.abs(h)),
			{ a: c, b: a.b, d: h, duration: d, start: a.start, end: a.start + d, group: a.group }
		);
	}
	function f(a) {
		const { delay: d = 0, duration: h = 300, easing: y = rt, tick: p = O, css: g } = l || St,
			R = { start: st() + d, b: a };
		a || ((R.group = m), (m.r += 1)),
			i || s
				? (s = R)
				: (g && (u(), (o = I(t, c, a, h, d, y, g))),
				  a && p(0, 1),
				  (i = _(R, h)),
				  q(() => z(t, a, 'start')),
				  ct((k) => {
						if (
							(s &&
								k > s.start &&
								((i = _(s, h)),
								(s = null),
								z(t, i.b, 'start'),
								g && (u(), (o = I(t, c, i.b, i.duration, 0, y, l.css)))),
							i)
						) {
							if (k >= i.end)
								p((c = i.b), 1 - c),
									z(t, i.b, 'end'),
									s || (i.b ? u() : --i.group.r || $(i.group.c)),
									(i = null);
							else if (k >= i.start) {
								const it = k - i.start;
								(c = i.a + i.d * y(it / i.duration)), p(c, 1 - c);
							}
						}
						return !!(i || s);
				  }));
	}
	return {
		run(a) {
			Q(l)
				? jt().then(() => {
						(l = l()), f(a);
				  })
				: f(a);
		},
		end() {
			u(), (i = s = null);
		}
	};
}
function re(t, e) {
	const n = {},
		r = {},
		l = { $$scope: 1 };
	let c = t.length;
	for (; c--; ) {
		const i = t[c],
			s = e[c];
		if (s) {
			for (const o in i) o in s || (r[o] = 1);
			for (const o in s) l[o] || ((n[o] = s[o]), (l[o] = 1));
			t[c] = s;
		} else for (const o in i) l[o] = 1;
	}
	for (const i in r) i in n || (n[i] = void 0);
	return n;
}
function le(t) {
	return typeof t == 'object' && t !== null ? t : {};
}
function oe(t) {
	t && t.c();
}
function se(t, e) {
	t && t.l(e);
}
function Mt(t, e, n, r) {
	const { fragment: l, on_mount: c, on_destroy: i, after_update: s } = t.$$;
	l && l.m(e, n),
		r ||
			q(() => {
				const o = c.map(K).filter(Q);
				i ? i.push(...o) : $(o), (t.$$.on_mount = []);
			}),
		s.forEach(q);
}
function qt(t, e) {
	const n = t.$$;
	n.fragment !== null &&
		($(n.on_destroy),
		n.fragment && n.fragment.d(e),
		(n.on_destroy = n.fragment = null),
		(n.ctx = []));
}
function Ot(t, e) {
	t.$$.dirty[0] === -1 && (w.push(t), et(), t.$$.dirty.fill(0)),
		(t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function ce(t, e, n, r, l, c, i, s = [-1]) {
	const o = E;
	v(t);
	const u = (t.$$ = {
		fragment: null,
		ctx: null,
		props: c,
		update: O,
		not_equal: l,
		bound: H(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(e.context || (o ? o.$$.context : [])),
		callbacks: H(),
		dirty: s,
		skip_bound: !1,
		root: e.target || o.$$.root
	});
	i && i(u.root);
	let _ = !1;
	if (
		((u.ctx = n
			? n(t, e.props || {}, (f, a, ...d) => {
					const h = d.length ? d[0] : a;
					return (
						u.ctx &&
							l(u.ctx[f], (u.ctx[f] = h)) &&
							(!u.skip_bound && u.bound[f] && u.bound[f](h), _ && Ot(t, f)),
						a
					);
			  })
			: []),
		u.update(),
		(_ = !0),
		$(u.before_update),
		(u.fragment = r ? r(u.ctx) : !1),
		e.target)
	) {
		if (e.hydrate) {
			ut();
			const f = gt(e.target);
			u.fragment && u.fragment.l(f), f.forEach(yt);
		} else u.fragment && u.fragment.c();
		e.intro && Ct(t.$$.fragment), Mt(t, e.target, e.anchor, e.customElement), at(), nt();
	}
	v(o);
}
class ue {
	$destroy() {
		qt(this, 1), (this.$destroy = O);
	}
	$on(e, n) {
		const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
		return (
			r.push(n),
			() => {
				const l = r.indexOf(n);
				l !== -1 && r.splice(l, 1);
			}
		);
	}
	$set(e) {
		this.$$set && !ot(e) && ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
	}
}
export {
	re as A,
	le as B,
	qt as C,
	lt as D,
	Zt as E,
	Dt as F,
	Ut as G,
	pt as H,
	Bt as I,
	Lt as J,
	zt as K,
	Rt as L,
	rt as M,
	It as N,
	$ as O,
	q as P,
	ie as Q,
	ue as S,
	gt as a,
	Gt as b,
	Jt as c,
	yt as d,
	Y as e,
	Wt as f,
	Tt as g,
	bt as h,
	ce as i,
	Qt as j,
	Ft as k,
	Ht as l,
	Kt as m,
	O as n,
	te as o,
	ne as p,
	ee as q,
	Ct as r,
	Pt as s,
	T as t,
	Yt as u,
	Xt as v,
	Vt as w,
	oe as x,
	se as y,
	Mt as z
};
