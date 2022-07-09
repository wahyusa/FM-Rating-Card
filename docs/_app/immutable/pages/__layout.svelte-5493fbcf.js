import {
	S as j,
	i as A,
	s as I,
	F as N,
	e as f,
	k as E,
	t as u,
	G as R,
	c as y,
	d as s,
	m as $,
	a as C,
	h as m,
	b as i,
	H as l,
	g as S,
	I as O,
	J as q,
	K as U,
	r as H,
	p as K
} from '../chunks/index-7b0241eb.js';
function L(d) {
	let o, w, p, e, b, n, x, k, c, v, _, h;
	const z = d[1].default,
		r = N(z, d, d[0], null);
	return {
		c() {
			(o = f('link')),
				(w = E()),
				r && r.c(),
				(p = E()),
				(e = f('footer')),
				(b = u('Challenge by ')),
				(n = f('a')),
				(x = u('Frontend Mentor')),
				(k = u(`. Coded by
	`)),
				(c = f('a')),
				(v = u("Wahyu Syamsul A'lam")),
				(_ = u('.')),
				this.h();
		},
		l(t) {
			const a = R('[data-svelte="svelte-9zbrtu"]', document.head);
			(o = y(a, 'LINK', { rel: !0, type: !0, sizes: !0, href: !0 })),
				a.forEach(s),
				(w = $(t)),
				r && r.l(t),
				(p = $(t)),
				(e = y(t, 'FOOTER', { class: !0 }));
			var g = C(e);
			(b = m(g, 'Challenge by ')), (n = y(g, 'A', { class: !0, href: !0, target: !0 }));
			var M = C(n);
			(x = m(M, 'Frontend Mentor')),
				M.forEach(s),
				(k = m(
					g,
					`. Coded by
	`
				)),
				(c = y(g, 'A', { class: !0, href: !0 }));
			var F = C(c);
			(v = m(F, "Wahyu Syamsul A'lam")), F.forEach(s), (_ = m(g, '.')), g.forEach(s), this.h();
		},
		h() {
			(document.title = 'Frontend Mentor | Interactive rating component'),
				i(o, 'rel', 'icon'),
				i(o, 'type', 'image/png'),
				i(o, 'sizes', '32x32'),
				i(o, 'href', '/FM-Rating-Card/images/favicon-32x32.png'),
				i(n, 'class', 'hover:underline'),
				i(n, 'href', 'https://www.frontendmentor.io?ref=challenge'),
				i(n, 'target', '_blank'),
				i(c, 'class', 'hover:underline'),
				i(c, 'href', 'https://github.com/wahyusa/FM-Rating-Card'),
				i(e, 'class', 'absolute bottom-0 text-brand-medium-grey text-sm');
		},
		m(t, a) {
			l(document.head, o),
				S(t, w, a),
				r && r.m(t, a),
				S(t, p, a),
				S(t, e, a),
				l(e, b),
				l(e, n),
				l(n, x),
				l(e, k),
				l(e, c),
				l(c, v),
				l(e, _),
				(h = !0);
		},
		p(t, [a]) {
			r && r.p && (!h || a & 1) && O(r, z, t, t[0], h ? U(z, t[0], a, null) : q(t[0]), null);
		},
		i(t) {
			h || (H(r, t), (h = !0));
		},
		o(t) {
			K(r, t), (h = !1);
		},
		d(t) {
			s(o), t && s(w), r && r.d(t), t && s(p), t && s(e);
		}
	};
}
function W(d, o, w) {
	let { $$slots: p = {}, $$scope: e } = o;
	return (
		(d.$$set = (b) => {
			'$$scope' in b && w(0, (e = b.$$scope));
		}),
		[e, p]
	);
}
class G extends j {
	constructor(o) {
		super(), A(this, o, W, L, I, {});
	}
}
export { G as default };
