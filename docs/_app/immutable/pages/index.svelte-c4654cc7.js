import {
	S as lt,
	i as it,
	s as ut,
	e as h,
	k as E,
	t as y,
	c as b,
	a as p,
	m as T,
	h as x,
	d as c,
	b as u,
	L as ct,
	g as $,
	H as n,
	j as dt,
	n as P,
	M as ft,
	p as z,
	q as ht,
	r as L,
	o as bt,
	N as C,
	O as gt,
	x as pt,
	y as _t,
	z as mt,
	P as vt,
	Q as at,
	C as yt
} from '../chunks/index-7b0241eb.js';
function xt(i) {
	let t, e, r, a, s, o, _, l, d, m, O, g, v, j;
	return {
		c() {
			(t = h('section')),
				(e = h('img')),
				(a = E()),
				(s = h('span')),
				(o = y('You selected ')),
				(_ = y(i[0])),
				(l = y(' out of 5')),
				(d = E()),
				(m = h('h1')),
				(O = y('Thank You!')),
				(g = E()),
				(v = h('p')),
				(j =
					y(`We appreciate you taking the time to give a rating. If you ever need more support, don\u2019t
		hesitate to get in touch!`)),
				this.h();
		},
		l(k) {
			t = b(k, 'SECTION', { class: !0 });
			var f = p(t);
			(e = b(f, 'IMG', { class: !0, src: !0, alt: !0 })),
				(a = T(f)),
				(s = b(f, 'SPAN', { class: !0 }));
			var V = p(s);
			(o = x(V, 'You selected ')),
				(_ = x(V, i[0])),
				(l = x(V, ' out of 5')),
				V.forEach(c),
				(d = T(f)),
				(m = b(f, 'H1', { class: !0 }));
			var U = p(m);
			(O = x(U, 'Thank You!')), U.forEach(c), (g = T(f)), (v = b(f, 'P', { class: !0 }));
			var I = p(v);
			(j = x(
				I,
				`We appreciate you taking the time to give a rating. If you ever need more support, don\u2019t
		hesitate to get in touch!`
			)),
				I.forEach(c),
				f.forEach(c),
				this.h();
		},
		h() {
			u(e, 'class', 'my-2'),
				ct(e.src, (r = '/FM-Rating-Card/images/illustration-thank-you.svg')) || u(e, 'src', r),
				u(e, 'alt', 'illustration-thank-you'),
				u(s, 'class', 'rounded-full text-brand bg-brand-medium-grey/20 px-3 py-1.5'),
				u(m, 'class', 'text-brand-white text-2xl tracking-wide font-bold'),
				u(v, 'class', 'text-[15px]'),
				u(
					t,
					'class',
					'p-6 rounded-xl bg-brand-dark-blue max-w-[350px] mx-auto flex items-center flex-col space-y-4'
				);
		},
		m(k, f) {
			$(k, t, f),
				n(t, e),
				n(t, a),
				n(t, s),
				n(s, o),
				n(s, _),
				n(s, l),
				n(t, d),
				n(t, m),
				n(m, O),
				n(t, g),
				n(t, v),
				n(v, j);
		},
		p(k, [f]) {
			f & 1 && dt(_, k[0]);
		},
		i: P,
		o: P,
		d(k) {
			k && c(t);
		}
	};
}
function wt(i, t, e) {
	let { ratingValue: r = 0 } = t;
	return (
		(i.$$set = (a) => {
			'ratingValue' in a && e(0, (r = a.ratingValue));
		}),
		[r]
	);
}
class kt extends lt {
	constructor(t) {
		super(), it(this, t, wt, xt, ut, { ratingValue: 0 });
	}
}
function ot(i, { delay: t = 0, duration: e = 400, easing: r = ft } = {}) {
	const a = +getComputedStyle(i).opacity;
	return { delay: t, duration: e, easing: r, css: (s) => `opacity: ${s * a}` };
}
function Et(i) {
	let t, e, r, a, s, o, _, l, d, m, O, g, v, j, k, f, V, U, I, q, H, B, Y, A, M, D, F, S, G, W, Q;
	return {
		c() {
			(t = h('section')),
				(e = h('div')),
				(r = h('img')),
				(s = E()),
				(o = h('h1')),
				(_ = y('How did we do?')),
				(l = E()),
				(d = h('p')),
				(m =
					y(`Please let us know how we did with your support request. All feedback is appreciated to help
				us improve our offering!`)),
				(O = E()),
				(g = h('div')),
				(v = h('button')),
				(j = y('1')),
				(k = E()),
				(f = h('button')),
				(V = y('2')),
				(U = E()),
				(I = h('button')),
				(q = y('3')),
				(H = E()),
				(B = h('button')),
				(Y = y('4')),
				(A = E()),
				(M = h('button')),
				(D = y('5')),
				(F = E()),
				(S = h('button')),
				(G = y('SUBMIT')),
				this.h();
		},
		l(R) {
			t = b(R, 'SECTION', { class: !0 });
			var w = p(t);
			e = b(w, 'DIV', { class: !0 });
			var J = p(e);
			(r = b(J, 'IMG', { src: !0, alt: !0 })),
				J.forEach(c),
				(s = T(w)),
				(o = b(w, 'H1', { class: !0 }));
			var K = p(o);
			(_ = x(K, 'How did we do?')), K.forEach(c), (l = T(w)), (d = b(w, 'P', { class: !0 }));
			var X = p(d);
			(m = x(
				X,
				`Please let us know how we did with your support request. All feedback is appreciated to help
				us improve our offering!`
			)),
				X.forEach(c),
				(O = T(w)),
				(g = b(w, 'DIV', { class: !0 }));
			var N = p(g);
			v = b(N, 'BUTTON', { class: !0 });
			var Z = p(v);
			(j = x(Z, '1')), Z.forEach(c), (k = T(N)), (f = b(N, 'BUTTON', { class: !0 }));
			var tt = p(f);
			(V = x(tt, '2')), tt.forEach(c), (U = T(N)), (I = b(N, 'BUTTON', { class: !0 }));
			var et = p(I);
			(q = x(et, '3')), et.forEach(c), (H = T(N)), (B = b(N, 'BUTTON', { class: !0 }));
			var rt = p(B);
			(Y = x(rt, '4')), rt.forEach(c), (A = T(N)), (M = b(N, 'BUTTON', { class: !0 }));
			var nt = p(M);
			(D = x(nt, '5')),
				nt.forEach(c),
				N.forEach(c),
				(F = T(w)),
				(S = b(w, 'BUTTON', { class: !0 }));
			var st = p(S);
			(G = x(st, 'SUBMIT')), st.forEach(c), w.forEach(c), this.h();
		},
		h() {
			ct(r.src, (a = '/FM-Rating-Card/images/icon-star.svg')) || u(r, 'src', a),
				u(r, 'alt', 'icon star'),
				u(
					e,
					'class',
					'rounded-full bg-brand-medium-grey/20 self-start inline-block drop-shadow-lg p-3'
				),
				u(o, 'class', 'text-brand-white text-2xl tracking-wide font-bold'),
				u(d, 'class', 'text-[15px]'),
				u(
					v,
					'class',
					'focus:bg-brand-light-grey focus:text-brand-white hover:text-brand-white cursor-pointer hover:bg-brand rounded-full transition-colors duration-300 bg-brand-medium-grey/20 p-4 h-11 w-11 flex justify-center items-center'
				),
				u(
					f,
					'class',
					'focus:bg-brand-light-grey focus:text-brand-white hover:text-brand-white cursor-pointer hover:bg-brand rounded-full transition-colors duration-300 bg-brand-medium-grey/20 p-4 h-11 w-11 flex justify-center items-center'
				),
				u(
					I,
					'class',
					'focus:bg-brand-light-grey focus:text-brand-white hover:text-brand-white cursor-pointer hover:bg-brand rounded-full transition-colors duration-300 bg-brand-medium-grey/20 p-4 h-11 w-11 flex justify-center items-center'
				),
				u(
					B,
					'class',
					'focus:bg-brand-light-grey focus:text-brand-white hover:text-brand-white cursor-pointer hover:bg-brand rounded-full transition-colors duration-300 bg-brand-medium-grey/20 p-4 h-11 w-11 flex justify-center items-center'
				),
				u(
					M,
					'class',
					'focus:bg-brand-light-grey focus:text-brand-white hover:text-brand-white cursor-pointer hover:bg-brand rounded-full transition-colors duration-300 bg-brand-medium-grey/20 p-4 h-11 w-11 flex justify-center items-center'
				),
				u(g, 'class', 'flex items-center space-x-5 py-3 justify-center'),
				u(
					S,
					'class',
					'bg-brand transition-colors duration-300 font-bold hover:bg-brand-white hover:text-brand text-brand-white p-3 text-sm tracking-widest rounded-full'
				),
				u(
					t,
					'class',
					'p-6 rounded-xl bg-brand-dark-blue max-w-[350px] mx-auto flex flex-col space-y-4'
				);
		},
		m(R, w) {
			$(R, t, w),
				n(t, e),
				n(e, r),
				n(t, s),
				n(t, o),
				n(o, _),
				n(t, l),
				n(t, d),
				n(d, m),
				n(t, O),
				n(t, g),
				n(g, v),
				n(v, j),
				n(g, k),
				n(g, f),
				n(f, V),
				n(g, U),
				n(g, I),
				n(I, q),
				n(g, H),
				n(g, B),
				n(B, Y),
				n(g, A),
				n(g, M),
				n(M, D),
				n(t, F),
				n(t, S),
				n(S, G),
				W ||
					((Q = [
						C(v, 'focus', i[3]),
						C(f, 'focus', i[4]),
						C(I, 'focus', i[5]),
						C(B, 'focus', i[6]),
						C(M, 'focus', i[7]),
						C(S, 'click', i[2])
					]),
					(W = !0));
		},
		p: P,
		i: P,
		o: P,
		d(R) {
			R && c(t), (W = !1), gt(Q);
		}
	};
}
function Tt(i) {
	let t, e, r, a;
	return (
		(e = new kt({ props: { ratingValue: i[1] } })),
		{
			c() {
				(t = h('div')), pt(e.$$.fragment);
			},
			l(s) {
				t = b(s, 'DIV', {});
				var o = p(t);
				_t(e.$$.fragment, o), o.forEach(c);
			},
			m(s, o) {
				$(s, t, o), mt(e, t, null), (a = !0);
			},
			p(s, o) {
				const _ = {};
				o & 2 && (_.ratingValue = s[1]), e.$set(_);
			},
			i(s) {
				a ||
					(L(e.$$.fragment, s),
					vt(() => {
						r || (r = at(t, ot, { duration: 1e3 }, !0)), r.run(1);
					}),
					(a = !0));
			},
			o(s) {
				z(e.$$.fragment, s), r || (r = at(t, ot, { duration: 1e3 }, !1)), r.run(0), (a = !1);
			},
			d(s) {
				s && c(t), yt(e), s && r && r.end();
			}
		}
	);
}
function It(i) {
	let t, e, r, a;
	const s = [Tt, Et],
		o = [];
	function _(l, d) {
		return l[0] ? 0 : 1;
	}
	return (
		(e = _(i)),
		(r = o[e] = s[e](i)),
		{
			c() {
				(t = h('main')), r.c(), this.h();
			},
			l(l) {
				t = b(l, 'MAIN', { class: !0 });
				var d = p(t);
				r.l(d), d.forEach(c), this.h();
			},
			h() {
				u(
					t,
					'class',
					'h-screen bg-brand-very-dark-blue grid items-center justify-center content-around font-overpass text-brand-light-grey'
				);
			},
			m(l, d) {
				$(l, t, d), o[e].m(t, null), (a = !0);
			},
			p(l, [d]) {
				let m = e;
				(e = _(l)),
					e === m
						? o[e].p(l, d)
						: (bt(),
						  z(o[m], 1, 1, () => {
								o[m] = null;
						  }),
						  ht(),
						  (r = o[e]),
						  r ? r.p(l, d) : ((r = o[e] = s[e](l)), r.c()),
						  L(r, 1),
						  r.m(t, null));
			},
			i(l) {
				a || (L(r), (a = !0));
			},
			o(l) {
				z(r), (a = !1);
			},
			d(l) {
				l && c(t), o[e].d();
			}
		}
	);
}
function Nt(i, t, e) {
	let r = !1,
		a = 0;
	return [
		r,
		a,
		() => {
			console.log('Rating value'), e(0, (r = !0));
		},
		() => {
			e(1, (a = 1));
		},
		() => {
			e(1, (a = 2));
		},
		() => {
			e(1, (a = 3));
		},
		() => {
			e(1, (a = 4));
		},
		() => {
			e(1, (a = 5));
		}
	];
}
class Ot extends lt {
	constructor(t) {
		super(), it(this, t, Nt, It, ut, {});
	}
}
export { Ot as default };