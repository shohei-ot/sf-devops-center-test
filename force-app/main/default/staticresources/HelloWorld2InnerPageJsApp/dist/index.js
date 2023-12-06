function ze(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let r = 0; r < o.length; r++)
    n[o[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const B = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, _t = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Z = () => {
}, pr = () => !1, Ft = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), on = (e) => e.startsWith("onUpdate:"), k = Object.assign, oo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, ys = Object.prototype.hasOwnProperty, M = (e, t) => ys.call(e, t), C = Array.isArray, Qe = (e) => hn(e) === "[object Map]", dr = (e) => hn(e) === "[object Set]", T = (e) => typeof e == "function", q = (e) => typeof e == "string", dn = (e) => typeof e == "symbol", K = (e) => e !== null && typeof e == "object", ro = (e) => (K(e) || T(e)) && T(e.then) && T(e.catch), hr = Object.prototype.toString, hn = (e) => hr.call(e), so = (e) => hn(e).slice(8, -1), mr = (e) => hn(e) === "[object Object]", io = (e) => q(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Yt = /* @__PURE__ */ ze(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ws = /* @__PURE__ */ ze(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), mn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, xs = /-(\w)/g, vt = mn((e) => e.replace(xs, (t, n) => n ? n.toUpperCase() : "")), Ds = /\B([A-Z])/g, Ke = mn(
  (e) => e.replace(Ds, "-$1").toLowerCase()
), gn = mn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ze = mn((e) => e ? `on${gn(e)}` : ""), st = (e, t) => !Object.is(e, t), yt = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, rn = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Vs = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Io;
const sn = () => Io || (Io = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function co(e) {
  if (C(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = q(o) ? Is(o) : co(o);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else if (q(e) || K(e))
    return e;
}
const Cs = /;(?![^(]*\))/g, Ts = /:([^]+)/, $s = /\/\*[^]*?\*\//g;
function Is(e) {
  const t = {};
  return e.replace($s, "").split(Cs).forEach((n) => {
    if (n) {
      const o = n.split(Ts);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function lo(e) {
  let t = "";
  if (q(e))
    t = e;
  else if (C(e))
    for (let n = 0; n < e.length; n++) {
      const o = lo(e[n]);
      o && (t += o + " ");
    }
  else if (K(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Ps = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Ms = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", As = /* @__PURE__ */ ze(Ps), Rs = /* @__PURE__ */ ze(Ms), Ss = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", js = /* @__PURE__ */ ze(Ss);
function gr(e) {
  return !!e || e === "";
}
const Po = (e) => q(e) ? e : e == null ? "" : C(e) || K(e) && (e.toString === hr || !T(e.toString)) ? JSON.stringify(e, _r, 2) : String(e), _r = (e, t) => t && t.__v_isRef ? _r(e, t.value) : Qe(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [o, r]) => (n[`${o} =>`] = r, n), {})
} : dr(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : K(t) && !C(t) && !mr(t) ? String(t) : t;
function Hn(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let pe;
class Fs {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = pe, !t && pe && (this.index = (pe.scopes || (pe.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = pe;
      try {
        return pe = this, t();
      } finally {
        pe = n;
      }
    } else
      process.env.NODE_ENV !== "production" && Hn("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    pe = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    pe = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Hs(e, t = pe) {
  t && t.active && t.effects.push(e);
}
function Ls() {
  return pe;
}
const Pt = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Er = (e) => (e.w & ke) > 0, vr = (e) => (e.n & ke) > 0, Us = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= ke;
}, Bs = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const r = t[o];
      Er(r) && !vr(r) ? r.delete(e) : t[n++] = r, r.w &= ~ke, r.n &= ~ke;
    }
    t.length = n;
  }
}, Ln = /* @__PURE__ */ new WeakMap();
let Dt = 0, ke = 1;
const Un = 30;
let oe;
const Ge = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Bn = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class uo {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Hs(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = oe, n = Ue;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = oe, oe = this, Ue = !0, ke = 1 << ++Dt, Dt <= Un ? Us(this) : Mo(this), this.fn();
    } finally {
      Dt <= Un && Bs(this), ke = 1 << --Dt, oe = this.parent, Ue = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    oe === this ? this.deferStop = !0 : this.active && (Mo(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Mo(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Ue = !0;
const Nr = [];
function lt() {
  Nr.push(Ue), Ue = !1;
}
function ut() {
  const e = Nr.pop();
  Ue = e === void 0 ? !0 : e;
}
function G(e, t, n) {
  if (Ue && oe) {
    let o = Ln.get(e);
    o || Ln.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = Pt());
    const s = process.env.NODE_ENV !== "production" ? { effect: oe, target: e, type: t, key: n } : void 0;
    Kn(r, s);
  }
}
function Kn(e, t) {
  let n = !1;
  Dt <= Un ? vr(e) || (e.n |= ke, n = !Er(e)) : n = !e.has(oe), n && (e.add(oe), oe.deps.push(e), process.env.NODE_ENV !== "production" && oe.onTrack && oe.onTrack(
    k(
      {
        effect: oe
      },
      t
    )
  ));
}
function De(e, t, n, o, r, s) {
  const c = Ln.get(e);
  if (!c)
    return;
  let l = [];
  if (t === "clear")
    l = [...c.values()];
  else if (n === "length" && C(e)) {
    const a = Number(o);
    c.forEach((h, p) => {
      (p === "length" || !dn(p) && p >= a) && l.push(h);
    });
  } else
    switch (n !== void 0 && l.push(c.get(n)), t) {
      case "add":
        C(e) ? io(n) && l.push(c.get("length")) : (l.push(c.get(Ge)), Qe(e) && l.push(c.get(Bn)));
        break;
      case "delete":
        C(e) || (l.push(c.get(Ge)), Qe(e) && l.push(c.get(Bn)));
        break;
      case "set":
        Qe(e) && l.push(c.get(Ge));
        break;
    }
  const f = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: r, oldTarget: s } : void 0;
  if (l.length === 1)
    l[0] && (process.env.NODE_ENV !== "production" ? mt(l[0], f) : mt(l[0]));
  else {
    const a = [];
    for (const h of l)
      h && a.push(...h);
    process.env.NODE_ENV !== "production" ? mt(Pt(a), f) : mt(Pt(a));
  }
}
function mt(e, t) {
  const n = C(e) ? e : [...e];
  for (const o of n)
    o.computed && Ao(o, t);
  for (const o of n)
    o.computed || Ao(o, t);
}
function Ao(e, t) {
  (e !== oe || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(k({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const Ks = /* @__PURE__ */ ze("__proto__,__v_isRef,__isVue"), br = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(dn)
), Ro = /* @__PURE__ */ ks();
function ks() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = P(this);
      for (let s = 0, c = this.length; s < c; s++)
        G(o, "get", s + "");
      const r = o[t](...n);
      return r === -1 || r === !1 ? o[t](...n.map(P)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      lt();
      const o = P(this)[t].apply(this, n);
      return ut(), o;
    };
  }), e;
}
function Ws(e) {
  const t = P(this);
  return G(t, "has", e), t.hasOwnProperty(e);
}
class Or {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._shallow = n;
  }
  get(t, n, o) {
    const r = this._isReadonly, s = this._shallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw" && o === (r ? s ? Tr : Cr : s ? Vr : Dr).get(t))
      return t;
    const c = C(t);
    if (!r) {
      if (c && M(Ro, n))
        return Reflect.get(Ro, n, o);
      if (n === "hasOwnProperty")
        return Ws;
    }
    const l = Reflect.get(t, n, o);
    return (dn(n) ? br.has(n) : Ks(n)) || (r || G(t, "get", n), s) ? l : Y(l) ? c && io(n) ? l : l.value : K(l) ? r ? $r(l) : ao(l) : l;
  }
}
class yr extends Or {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, r) {
    let s = t[n];
    if (We(s) && Y(s) && !Y(o))
      return !1;
    if (!this._shallow && (!cn(o) && !We(o) && (s = P(s), o = P(o)), !C(t) && Y(s) && !Y(o)))
      return s.value = o, !0;
    const c = C(t) && io(n) ? Number(n) < t.length : M(t, n), l = Reflect.set(t, n, o, r);
    return t === P(r) && (c ? st(o, s) && De(t, "set", n, o, s) : De(t, "add", n, o)), l;
  }
  deleteProperty(t, n) {
    const o = M(t, n), r = t[n], s = Reflect.deleteProperty(t, n);
    return s && o && De(t, "delete", n, void 0, r), s;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!dn(n) || !br.has(n)) && G(t, "has", n), o;
  }
  ownKeys(t) {
    return G(
      t,
      "iterate",
      C(t) ? "length" : Ge
    ), Reflect.ownKeys(t);
  }
}
class wr extends Or {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && Hn(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && Hn(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const qs = /* @__PURE__ */ new yr(), zs = /* @__PURE__ */ new wr(), Js = /* @__PURE__ */ new yr(
  !0
), Ys = /* @__PURE__ */ new wr(!0), fo = (e) => e, _n = (e) => Reflect.getPrototypeOf(e);
function Kt(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = P(e), s = P(t);
  n || (st(t, s) && G(r, "get", t), G(r, "get", s));
  const { has: c } = _n(r), l = o ? fo : n ? po : Mt;
  if (c.call(r, t))
    return l(e.get(t));
  if (c.call(r, s))
    return l(e.get(s));
  e !== r && e.get(t);
}
function kt(e, t = !1) {
  const n = this.__v_raw, o = P(n), r = P(e);
  return t || (st(e, r) && G(o, "has", e), G(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function Wt(e, t = !1) {
  return e = e.__v_raw, !t && G(P(e), "iterate", Ge), Reflect.get(e, "size", e);
}
function So(e) {
  e = P(e);
  const t = P(this);
  return _n(t).has.call(t, e) || (t.add(e), De(t, "add", e, e)), this;
}
function jo(e, t) {
  t = P(t);
  const n = P(this), { has: o, get: r } = _n(n);
  let s = o.call(n, e);
  s ? process.env.NODE_ENV !== "production" && xr(n, o, e) : (e = P(e), s = o.call(n, e));
  const c = r.call(n, e);
  return n.set(e, t), s ? st(t, c) && De(n, "set", e, t, c) : De(n, "add", e, t), this;
}
function Fo(e) {
  const t = P(this), { has: n, get: o } = _n(t);
  let r = n.call(t, e);
  r ? process.env.NODE_ENV !== "production" && xr(t, n, e) : (e = P(e), r = n.call(t, e));
  const s = o ? o.call(t, e) : void 0, c = t.delete(e);
  return r && De(t, "delete", e, void 0, s), c;
}
function Ho() {
  const e = P(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? Qe(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && De(e, "clear", void 0, void 0, n), o;
}
function qt(e, t) {
  return function(o, r) {
    const s = this, c = s.__v_raw, l = P(c), f = t ? fo : e ? po : Mt;
    return !e && G(l, "iterate", Ge), c.forEach((a, h) => o.call(r, f(a), f(h), s));
  };
}
function zt(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = P(r), c = Qe(s), l = e === "entries" || e === Symbol.iterator && c, f = e === "keys" && c, a = r[e](...o), h = n ? fo : t ? po : Mt;
    return !t && G(
      s,
      "iterate",
      f ? Bn : Ge
    ), {
      // iterator protocol
      next() {
        const { value: p, done: v } = a.next();
        return v ? { value: p, done: v } : {
          value: l ? [h(p[0]), h(p[1])] : h(p),
          done: v
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function je(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(
        `${gn(e)} operation ${n}failed: target is readonly.`,
        P(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Zs() {
  const e = {
    get(s) {
      return Kt(this, s);
    },
    get size() {
      return Wt(this);
    },
    has: kt,
    add: So,
    set: jo,
    delete: Fo,
    clear: Ho,
    forEach: qt(!1, !1)
  }, t = {
    get(s) {
      return Kt(this, s, !1, !0);
    },
    get size() {
      return Wt(this);
    },
    has: kt,
    add: So,
    set: jo,
    delete: Fo,
    clear: Ho,
    forEach: qt(!1, !0)
  }, n = {
    get(s) {
      return Kt(this, s, !0);
    },
    get size() {
      return Wt(this, !0);
    },
    has(s) {
      return kt.call(this, s, !0);
    },
    add: je("add"),
    set: je("set"),
    delete: je("delete"),
    clear: je("clear"),
    forEach: qt(!0, !1)
  }, o = {
    get(s) {
      return Kt(this, s, !0, !0);
    },
    get size() {
      return Wt(this, !0);
    },
    has(s) {
      return kt.call(this, s, !0);
    },
    add: je("add"),
    set: je("set"),
    delete: je("delete"),
    clear: je("clear"),
    forEach: qt(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    e[s] = zt(
      s,
      !1,
      !1
    ), n[s] = zt(
      s,
      !0,
      !1
    ), t[s] = zt(
      s,
      !1,
      !0
    ), o[s] = zt(
      s,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    o
  ];
}
const [
  Xs,
  Qs,
  Gs,
  ei
] = /* @__PURE__ */ Zs();
function En(e, t) {
  const n = t ? e ? ei : Gs : e ? Qs : Xs;
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(
    M(n, r) && r in o ? n : o,
    r,
    s
  );
}
const ti = {
  get: /* @__PURE__ */ En(!1, !1)
}, ni = {
  get: /* @__PURE__ */ En(!1, !0)
}, oi = {
  get: /* @__PURE__ */ En(!0, !1)
}, ri = {
  get: /* @__PURE__ */ En(!0, !0)
};
function xr(e, t, n) {
  const o = P(n);
  if (o !== n && t.call(e, o)) {
    const r = so(e);
    console.warn(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Dr = /* @__PURE__ */ new WeakMap(), Vr = /* @__PURE__ */ new WeakMap(), Cr = /* @__PURE__ */ new WeakMap(), Tr = /* @__PURE__ */ new WeakMap();
function si(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function ii(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : si(so(e));
}
function ao(e) {
  return We(e) ? e : vn(
    e,
    !1,
    qs,
    ti,
    Dr
  );
}
function ci(e) {
  return vn(
    e,
    !1,
    Js,
    ni,
    Vr
  );
}
function $r(e) {
  return vn(
    e,
    !0,
    zs,
    oi,
    Cr
  );
}
function Vt(e) {
  return vn(
    e,
    !0,
    Ys,
    ri,
    Tr
  );
}
function vn(e, t, n, o, r) {
  if (!K(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const c = ii(e);
  if (c === 0)
    return e;
  const l = new Proxy(
    e,
    c === 2 ? o : n
  );
  return r.set(e, l), l;
}
function et(e) {
  return We(e) ? et(e.__v_raw) : !!(e && e.__v_isReactive);
}
function We(e) {
  return !!(e && e.__v_isReadonly);
}
function cn(e) {
  return !!(e && e.__v_isShallow);
}
function kn(e) {
  return et(e) || We(e);
}
function P(e) {
  const t = e && e.__v_raw;
  return t ? P(t) : e;
}
function Ir(e) {
  return rn(e, "__v_skip", !0), e;
}
const Mt = (e) => K(e) ? ao(e) : e, po = (e) => K(e) ? $r(e) : e;
function Pr(e) {
  Ue && oe && (e = P(e), process.env.NODE_ENV !== "production" ? Kn(e.dep || (e.dep = Pt()), {
    target: e,
    type: "get",
    key: "value"
  }) : Kn(e.dep || (e.dep = Pt())));
}
function Mr(e, t) {
  e = P(e);
  const n = e.dep;
  n && (process.env.NODE_ENV !== "production" ? mt(n, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : mt(n));
}
function Y(e) {
  return !!(e && e.__v_isRef === !0);
}
function li(e) {
  return ui(e, !1);
}
function ui(e, t) {
  return Y(e) ? e : new fi(e, t);
}
class fi {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : P(t), this._value = n ? t : Mt(t);
  }
  get value() {
    return Pr(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || cn(t) || We(t);
    t = n ? t : P(t), st(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Mt(t), Mr(this, t));
  }
}
function ai(e) {
  return Y(e) ? e.value : e;
}
const pi = {
  get: (e, t, n) => ai(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return Y(r) && !Y(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Ar(e) {
  return et(e) ? e : new Proxy(e, pi);
}
class di {
  constructor(t, n, o, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new uo(t, () => {
      this._dirty || (this._dirty = !0, Mr(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = P(this);
    return Pr(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
function hi(e, t, n = !1) {
  let o, r;
  const s = T(e);
  s ? (o = e, r = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : Z) : (o = e.get, r = e.set);
  const c = new di(o, r, s || !r, n);
  return process.env.NODE_ENV !== "production" && t && !n && (c.effect.onTrack = t.onTrack, c.effect.onTrigger = t.onTrigger), c;
}
const tt = [];
function Zt(e) {
  tt.push(e);
}
function Xt() {
  tt.pop();
}
function b(e, ...t) {
  if (process.env.NODE_ENV === "production")
    return;
  lt();
  const n = tt.length ? tt[tt.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = mi();
  if (o)
    Pe(
      o,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        r.map(
          ({ vnode: s }) => `at <${Dn(n, s.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    r.length && s.push(`
`, ...gi(r)), console.warn(...s);
  }
  ut();
}
function mi() {
  let e = tt[tt.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function gi(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ..._i(n));
  }), t;
}
function _i({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${Dn(
    e.component,
    e.type,
    o
  )}`, s = ">" + n;
  return e.props ? [r, ...Ei(e.props), s] : [r + s];
}
function Ei(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Rr(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Rr(e, t, n) {
  return q(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Y(t) ? (t = Rr(e, P(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : T(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = P(t), n ? t : [`${e}=`, t]);
}
const ho = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function Pe(e, t, n, o) {
  let r;
  try {
    r = o ? e(...o) : e();
  } catch (s) {
    Nn(s, t, n);
  }
  return r;
}
function me(e, t, n, o) {
  if (T(e)) {
    const s = Pe(e, t, n, o);
    return s && ro(s) && s.catch((c) => {
      Nn(c, t, n);
    }), s;
  }
  const r = [];
  for (let s = 0; s < e.length; s++)
    r.push(me(e[s], t, n, o));
  return r;
}
function Nn(e, t, n, o = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const c = t.proxy, l = process.env.NODE_ENV !== "production" ? ho[n] : n;
    for (; s; ) {
      const a = s.ec;
      if (a) {
        for (let h = 0; h < a.length; h++)
          if (a[h](e, c, l) === !1)
            return;
      }
      s = s.parent;
    }
    const f = t.appContext.config.errorHandler;
    if (f) {
      Pe(
        f,
        null,
        10,
        [e, c, l]
      );
      return;
    }
  }
  vi(e, n, r, o);
}
function vi(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const r = ho[t];
    if (n && Zt(n), b(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && Xt(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let At = !1, Wn = !1;
const ee = [];
let we = 0;
const Et = [];
let ye = null, Fe = 0;
const Sr = /* @__PURE__ */ Promise.resolve();
let mo = null;
const Ni = 100;
function bi(e) {
  const t = mo || Sr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Oi(e) {
  let t = we + 1, n = ee.length;
  for (; t < n; ) {
    const o = t + n >>> 1, r = ee[o], s = Rt(r);
    s < e || s === e && r.pre ? t = o + 1 : n = o;
  }
  return t;
}
function bn(e) {
  (!ee.length || !ee.includes(
    e,
    At && e.allowRecurse ? we + 1 : we
  )) && (e.id == null ? ee.push(e) : ee.splice(Oi(e.id), 0, e), jr());
}
function jr() {
  !At && !Wn && (Wn = !0, mo = Sr.then(Lr));
}
function yi(e) {
  const t = ee.indexOf(e);
  t > we && ee.splice(t, 1);
}
function Fr(e) {
  C(e) ? Et.push(...e) : (!ye || !ye.includes(
    e,
    e.allowRecurse ? Fe + 1 : Fe
  )) && Et.push(e), jr();
}
function Lo(e, t = At ? we + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < ee.length; t++) {
    const n = ee[t];
    if (n && n.pre) {
      if (process.env.NODE_ENV !== "production" && go(e, n))
        continue;
      ee.splice(t, 1), t--, n();
    }
  }
}
function Hr(e) {
  if (Et.length) {
    const t = [...new Set(Et)];
    if (Et.length = 0, ye) {
      ye.push(...t);
      return;
    }
    for (ye = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ye.sort((n, o) => Rt(n) - Rt(o)), Fe = 0; Fe < ye.length; Fe++)
      process.env.NODE_ENV !== "production" && go(e, ye[Fe]) || ye[Fe]();
    ye = null, Fe = 0;
  }
}
const Rt = (e) => e.id == null ? 1 / 0 : e.id, wi = (e, t) => {
  const n = Rt(e) - Rt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Lr(e) {
  Wn = !1, At = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ee.sort(wi);
  const t = process.env.NODE_ENV !== "production" ? (n) => go(e, n) : Z;
  try {
    for (we = 0; we < ee.length; we++) {
      const n = ee[we];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        Pe(n, null, 14);
      }
    }
  } finally {
    we = 0, ee.length = 0, Hr(e), At = !1, mo = null, (ee.length || Et.length) && Lr(e);
  }
}
function go(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Ni) {
      const o = t.ownerInstance, r = o && Es(o.type);
      return b(
        `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
let nt = !1;
const ht = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (sn().__VUE_HMR_RUNTIME__ = {
  createRecord: Pn(Ur),
  rerender: Pn(Vi),
  reload: Pn(Ci)
});
const it = /* @__PURE__ */ new Map();
function xi(e) {
  const t = e.type.__hmrId;
  let n = it.get(t);
  n || (Ur(t, e.type), n = it.get(t)), n.instances.add(e);
}
function Di(e) {
  it.get(e.type.__hmrId).instances.delete(e);
}
function Ur(e, t) {
  return it.has(e) ? !1 : (it.set(e, {
    initialDef: $t(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function $t(e) {
  return vs(e) ? e.__vccOpts : e;
}
function Vi(e, t) {
  const n = it.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, $t(o.type).render = t), o.renderCache = [], nt = !0, o.update(), nt = !1;
  }));
}
function Ci(e, t) {
  const n = it.get(e);
  if (!n)
    return;
  t = $t(t), Uo(n.initialDef, t);
  const o = [...n.instances];
  for (const r of o) {
    const s = $t(r.type);
    ht.has(s) || (s !== n.initialDef && Uo(s, t), ht.add(s)), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (ht.add(s), r.ceReload(t.styles), ht.delete(s)) : r.parent ? bn(r.parent.update) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Fr(() => {
    for (const r of o)
      ht.delete(
        $t(r.type)
      );
  });
}
function Uo(e, t) {
  k(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Pn(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let xe, Ct = [], qn = !1;
function Ht(e, ...t) {
  xe ? xe.emit(e, ...t) : qn || Ct.push({ event: e, args: t });
}
function Br(e, t) {
  var n, o;
  xe = e, xe ? (xe.enabled = !0, Ct.forEach(({ event: r, args: s }) => xe.emit(r, ...s)), Ct = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    Br(s, t);
  }), setTimeout(() => {
    xe || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, qn = !0, Ct = []);
  }, 3e3)) : (qn = !0, Ct = []);
}
function Ti(e, t) {
  Ht("app:init", e, t, {
    Fragment: ce,
    Text: Lt,
    Comment: ge,
    Static: tn
  });
}
function $i(e) {
  Ht("app:unmount", e);
}
const Ii = /* @__PURE__ */ _o(
  "component:added"
  /* COMPONENT_ADDED */
), Kr = /* @__PURE__ */ _o(
  "component:updated"
  /* COMPONENT_UPDATED */
), Pi = /* @__PURE__ */ _o(
  "component:removed"
  /* COMPONENT_REMOVED */
), Mi = (e) => {
  xe && typeof xe.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !xe.cleanupBuffer(e) && Pi(e);
};
function _o(e) {
  return (t) => {
    Ht(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Ai = /* @__PURE__ */ kr(
  "perf:start"
  /* PERFORMANCE_START */
), Ri = /* @__PURE__ */ kr(
  "perf:end"
  /* PERFORMANCE_END */
);
function kr(e) {
  return (t, n, o) => {
    Ht(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Si(e, t, n) {
  Ht(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
function ji(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || B;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: h,
      propsOptions: [p]
    } = e;
    if (h)
      if (!(t in h))
        (!p || !(Ze(t) in p)) && b(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Ze(t)}" prop.`
        );
      else {
        const v = h[t];
        T(v) && (v(...n) || b(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let r = n;
  const s = t.startsWith("update:"), c = s && t.slice(7);
  if (c && c in o) {
    const h = `${c === "modelValue" ? "model" : c}Modifiers`, { number: p, trim: v } = o[h] || B;
    v && (r = n.map((x) => q(x) ? x.trim() : x)), p && (r = n.map(Vs));
  }
  if (process.env.NODE_ENV !== "production" && Si(e, t, r), process.env.NODE_ENV !== "production") {
    const h = t.toLowerCase();
    h !== t && o[Ze(h)] && b(
      `Event "${h}" is emitted in component ${Dn(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ke(t)}" instead of "${t}".`
    );
  }
  let l, f = o[l = Ze(t)] || // also try camelCase event handler (#2249)
  o[l = Ze(vt(t))];
  !f && s && (f = o[l = Ze(Ke(t))]), f && me(
    f,
    e,
    6,
    r
  );
  const a = o[l + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, me(
      a,
      e,
      6,
      r
    );
  }
}
function Wr(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let c = {}, l = !1;
  if (!T(e)) {
    const f = (a) => {
      const h = Wr(a, t, !0);
      h && (l = !0, k(c, h));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !s && !l ? (K(e) && o.set(e, null), null) : (C(s) ? s.forEach((f) => c[f] = null) : k(c, s), K(e) && o.set(e, c), c);
}
function On(e, t) {
  return !e || !Ft(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), M(e, t[0].toLowerCase() + t.slice(1)) || M(e, Ke(t)) || M(e, t));
}
let le = null, yn = null;
function ln(e) {
  const t = le;
  return le = e, yn = e && e.type.__scopeId || null, t;
}
function qr(e) {
  yn = e;
}
function zr() {
  yn = null;
}
function Fi(e, t = le, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && Go(-1);
    const s = ln(t);
    let c;
    try {
      c = e(...r);
    } finally {
      ln(s), o._d && Go(1);
    }
    return process.env.NODE_ENV !== "production" && Kr(t), c;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let zn = !1;
function un() {
  zn = !0;
}
function Mn(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: r,
    props: s,
    propsOptions: [c],
    slots: l,
    attrs: f,
    emit: a,
    render: h,
    renderCache: p,
    data: v,
    setupState: x,
    ctx: F,
    inheritAttrs: R
  } = e;
  let W, J;
  const _e = ln(e);
  process.env.NODE_ENV !== "production" && (zn = !1);
  try {
    if (n.shapeFlag & 4) {
      const $ = r || o, Ve = process.env.NODE_ENV !== "production" && x.__isScriptSetup ? new Proxy($, {
        get(ve, ue, ie) {
          return b(
            `Property '${String(
              ue
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(ve, ue, ie);
        }
      }) : $;
      W = de(
        h.call(
          Ve,
          $,
          p,
          s,
          x,
          v,
          F
        )
      ), J = f;
    } else {
      const $ = t;
      process.env.NODE_ENV !== "production" && f === s && un(), W = de(
        $.length > 1 ? $(
          s,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return un(), f;
            },
            slots: l,
            emit: a
          } : { attrs: f, slots: l, emit: a }
        ) : $(
          s,
          null
          /* we know it doesn't need it */
        )
      ), J = t.props ? f : Li(f);
    }
  } catch ($) {
    It.length = 0, Nn($, e, 1), W = Be(ge);
  }
  let H = W, Ee;
  if (process.env.NODE_ENV !== "production" && W.patchFlag > 0 && W.patchFlag & 2048 && ([H, Ee] = Hi(W)), J && R !== !1) {
    const $ = Object.keys(J), { shapeFlag: Ve } = H;
    if ($.length) {
      if (Ve & 7)
        c && $.some(on) && (J = Ui(
          J,
          c
        )), H = qe(H, J);
      else if (process.env.NODE_ENV !== "production" && !zn && H.type !== ge) {
        const ve = Object.keys(f), ue = [], ie = [];
        for (let Ce = 0, Ae = ve.length; Ce < Ae; Ce++) {
          const fe = ve[Ce];
          Ft(fe) ? on(fe) || ue.push(fe[2].toLowerCase() + fe.slice(3)) : ie.push(fe);
        }
        ie.length && b(
          `Extraneous non-props attributes (${ie.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), ue.length && b(
          `Extraneous non-emits event listeners (${ue.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Bo(H) && b(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), H = qe(H), H.dirs = H.dirs ? H.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Bo(H) && b(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), H.transition = n.transition), process.env.NODE_ENV !== "production" && Ee ? Ee(H) : W = H, ln(_e), W;
}
const Hi = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Jr(t);
  if (!o)
    return [e, void 0];
  const r = t.indexOf(o), s = n ? n.indexOf(o) : -1, c = (l) => {
    t[r] = l, n && (s > -1 ? n[s] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [de(o), c];
};
function Jr(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    if (Oo(o)) {
      if (o.type !== ge || o.children === "v-if") {
        if (t)
          return;
        t = o;
      }
    } else
      return;
  }
  return t;
}
const Li = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ft(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Ui = (e, t) => {
  const n = {};
  for (const o in e)
    (!on(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Bo = (e) => e.shapeFlag & 7 || e.type === ge;
function Bi(e, t, n) {
  const { props: o, children: r, component: s } = e, { props: c, children: l, patchFlag: f } = t, a = s.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (r || l) && nt || t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return o ? Ko(o, c, a) : !!c;
    if (f & 8) {
      const h = t.dynamicProps;
      for (let p = 0; p < h.length; p++) {
        const v = h[p];
        if (c[v] !== o[v] && !On(a, v))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : o === c ? !1 : o ? c ? Ko(o, c, a) : !0 : !!c;
  return !1;
}
function Ko(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const s = o[r];
    if (t[s] !== e[s] && !On(n, s))
      return !0;
  }
  return !1;
}
function Ki({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const ki = Symbol.for("v-ndc"), Wi = (e) => e.__isSuspense;
function qi(e, t) {
  t && t.pendingBranch ? C(e) ? t.effects.push(...e) : t.effects.push(e) : Fr(e);
}
const Jt = {};
function An(e, t, n) {
  return process.env.NODE_ENV !== "production" && !T(t) && b(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Yr(e, t, n);
}
function Yr(e, t, { immediate: n, deep: o, flush: r, onTrack: s, onTrigger: c } = B) {
  var l;
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && b(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && b(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const f = ($) => {
    b(
      "Invalid watch source: ",
      $,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, a = Ls() === ((l = Q) == null ? void 0 : l.scope) ? Q : null;
  let h, p = !1, v = !1;
  if (Y(e) ? (h = () => e.value, p = cn(e)) : et(e) ? (h = () => e, o = !0) : C(e) ? (v = !0, p = e.some(($) => et($) || cn($)), h = () => e.map(($) => {
    if (Y($))
      return $.value;
    if (et($))
      return gt($);
    if (T($))
      return Pe($, a, 2);
    process.env.NODE_ENV !== "production" && f($);
  })) : T(e) ? t ? h = () => Pe(e, a, 2) : h = () => {
    if (!(a && a.isUnmounted))
      return x && x(), me(
        e,
        a,
        3,
        [F]
      );
  } : (h = Z, process.env.NODE_ENV !== "production" && f(e)), t && o) {
    const $ = h;
    h = () => gt($());
  }
  let x, F = ($) => {
    x = H.onStop = () => {
      Pe($, a, 4), x = H.onStop = void 0;
    };
  }, R;
  if (jt)
    if (F = Z, t ? n && me(t, a, 3, [
      h(),
      v ? [] : void 0,
      F
    ]) : h(), r === "sync") {
      const $ = Qc();
      R = $.__watcherHandles || ($.__watcherHandles = []);
    } else
      return Z;
  let W = v ? new Array(e.length).fill(Jt) : Jt;
  const J = () => {
    if (H.active)
      if (t) {
        const $ = H.run();
        (o || p || (v ? $.some((Ve, ve) => st(Ve, W[ve])) : st($, W))) && (x && x(), me(t, a, 3, [
          $,
          // pass undefined as the old value when it's changed for the first time
          W === Jt ? void 0 : v && W[0] === Jt ? [] : W,
          F
        ]), W = $);
      } else
        H.run();
  };
  J.allowRecurse = !!t;
  let _e;
  r === "sync" ? _e = J : r === "post" ? _e = () => se(J, a && a.suspense) : (J.pre = !0, a && (J.id = a.uid), _e = () => bn(J));
  const H = new uo(h, _e);
  process.env.NODE_ENV !== "production" && (H.onTrack = s, H.onTrigger = c), t ? n ? J() : W = H.run() : r === "post" ? se(
    H.run.bind(H),
    a && a.suspense
  ) : H.run();
  const Ee = () => {
    H.stop(), a && a.scope && oo(a.scope.effects, H);
  };
  return R && R.push(Ee), Ee;
}
function zi(e, t, n) {
  const o = this.proxy, r = q(e) ? e.includes(".") ? Zr(o, e) : () => o[e] : e.bind(o, o);
  let s;
  T(t) ? s = t : (s = t.handler, n = t);
  const c = Q;
  Nt(this);
  const l = Yr(r, s.bind(o), n);
  return c ? Nt(c) : rt(), l;
}
function Zr(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
function gt(e, t) {
  if (!K(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), Y(e))
    gt(e.value, t);
  else if (C(e))
    for (let n = 0; n < e.length; n++)
      gt(e[n], t);
  else if (dr(e) || Qe(e))
    e.forEach((n) => {
      gt(n, t);
    });
  else if (mr(e))
    for (const n in e)
      gt(e[n], t);
  return e;
}
function Xr(e) {
  ws(e) && b("Do not use built-in directive ids as custom directive id: " + e);
}
function Je(e, t, n, o) {
  const r = e.dirs, s = t && t.dirs;
  for (let c = 0; c < r.length; c++) {
    const l = r[c];
    s && (l.oldValue = s[c].value);
    let f = l.dir[o];
    f && (lt(), me(f, n, 8, [
      e.el,
      l,
      e,
      t
    ]), ut());
  }
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Qr(e, t) {
  return T(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    k({ name: e.name }, t, { setup: e })
  ) : e;
}
const Qt = (e) => !!e.type.__asyncLoader, Eo = (e) => e.type.__isKeepAlive;
function Ji(e, t) {
  Gr(e, "a", t);
}
function Yi(e, t) {
  Gr(e, "da", t);
}
function Gr(e, t, n = Q) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (wn(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      Eo(r.parent.vnode) && Zi(o, t, n, r), r = r.parent;
  }
}
function Zi(e, t, n, o) {
  const r = wn(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  es(() => {
    oo(o[t], r);
  }, n);
}
function wn(e, t, n = Q, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...c) => {
      if (n.isUnmounted)
        return;
      lt(), Nt(n);
      const l = me(t, n, e, c);
      return rt(), ut(), l;
    });
    return o ? r.unshift(s) : r.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const r = Ze(ho[e].replace(/ hook$/, ""));
    b(
      `${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Me = (e) => (t, n = Q) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!jt || e === "sp") && wn(e, (...o) => t(...o), n)
), Xi = Me("bm"), Qi = Me("m"), Gi = Me("bu"), ec = Me("u"), tc = Me("bum"), es = Me("um"), nc = Me("sp"), oc = Me(
  "rtg"
), rc = Me(
  "rtc"
);
function sc(e, t = Q) {
  wn("ec", e, t);
}
const Jn = (e) => e ? ms(e) ? xo(e) || e.proxy : Jn(e.parent) : null, ot = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ k(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Vt(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Vt(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Vt(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Vt(e.refs) : e.refs,
    $parent: (e) => Jn(e.parent),
    $root: (e) => Jn(e.root),
    $emit: (e) => e.emit,
    $options: (e) => No(e),
    $forceUpdate: (e) => e.f || (e.f = () => bn(e.update)),
    $nextTick: (e) => e.n || (e.n = bi.bind(e.proxy)),
    $watch: (e) => zi.bind(e)
  })
), vo = (e) => e === "_" || e === "$", Rn = (e, t) => e !== B && !e.__isScriptSetup && M(e, t), ts = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: r, props: s, accessCache: c, type: l, appContext: f } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let a;
    if (t[0] !== "$") {
      const x = c[t];
      if (x !== void 0)
        switch (x) {
          case 1:
            return o[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (Rn(o, t))
          return c[t] = 1, o[t];
        if (r !== B && M(r, t))
          return c[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (a = e.propsOptions[0]) && M(a, t)
        )
          return c[t] = 3, s[t];
        if (n !== B && M(n, t))
          return c[t] = 4, n[t];
        Yn && (c[t] = 0);
      }
    }
    const h = ot[t];
    let p, v;
    if (h)
      return t === "$attrs" ? (G(e, "get", t), process.env.NODE_ENV !== "production" && un()) : process.env.NODE_ENV !== "production" && t === "$slots" && G(e, "get", t), h(e);
    if (
      // css module (injected by vue-loader)
      (p = l.__cssModules) && (p = p[t])
    )
      return p;
    if (n !== B && M(n, t))
      return c[t] = 4, n[t];
    if (
      // global properties
      v = f.config.globalProperties, M(v, t)
    )
      return v[t];
    process.env.NODE_ENV !== "production" && le && (!q(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== B && vo(t[0]) && M(r, t) ? b(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === le && b(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: s } = e;
    return Rn(r, t) ? (r[t] = n, !0) : process.env.NODE_ENV !== "production" && r.__isScriptSetup && M(r, t) ? (b(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== B && M(o, t) ? (o[t] = n, !0) : M(e.props, t) ? (process.env.NODE_ENV !== "production" && b(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && b(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: s }
  }, c) {
    let l;
    return !!n[c] || e !== B && M(e, c) || Rn(t, c) || (l = s[0]) && M(l, c) || M(o, c) || M(ot, c) || M(r.config.globalProperties, c);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : M(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (ts.ownKeys = (e) => (b(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function ic(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(ot).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => ot[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Z
    });
  }), t;
}
function cc(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: Z
    });
  });
}
function lc(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(P(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (vo(o[0])) {
        b(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: Z
      });
    }
  });
}
function ko(e) {
  return C(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function uc() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? b(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Yn = !0;
function fc(e) {
  const t = No(e), n = e.proxy, o = e.ctx;
  Yn = !1, t.beforeCreate && Wo(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: s,
    methods: c,
    watch: l,
    provide: f,
    inject: a,
    // lifecycle
    created: h,
    beforeMount: p,
    mounted: v,
    beforeUpdate: x,
    updated: F,
    activated: R,
    deactivated: W,
    beforeDestroy: J,
    beforeUnmount: _e,
    destroyed: H,
    unmounted: Ee,
    render: $,
    renderTracked: Ve,
    renderTriggered: ve,
    errorCaptured: ue,
    serverPrefetch: ie,
    // public API
    expose: Ce,
    inheritAttrs: Ae,
    // assets
    components: fe,
    directives: Ut,
    filters: Do
  } = t, Re = process.env.NODE_ENV !== "production" ? uc() : null;
  if (process.env.NODE_ENV !== "production") {
    const [S] = e.propsOptions;
    if (S)
      for (const j in S)
        Re("Props", j);
  }
  if (a && ac(a, o, Re), c)
    for (const S in c) {
      const j = c[S];
      T(j) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, S, {
        value: j.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[S] = j.bind(n), process.env.NODE_ENV !== "production" && Re("Methods", S)) : process.env.NODE_ENV !== "production" && b(
        `Method "${S}" has type "${typeof j}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (r) {
    process.env.NODE_ENV !== "production" && !T(r) && b(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const S = r.call(n, n);
    if (process.env.NODE_ENV !== "production" && ro(S) && b(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !K(S))
      process.env.NODE_ENV !== "production" && b("data() should return an object.");
    else if (e.data = ao(S), process.env.NODE_ENV !== "production")
      for (const j in S)
        Re("Data", j), vo(j[0]) || Object.defineProperty(o, j, {
          configurable: !0,
          enumerable: !0,
          get: () => S[j],
          set: Z
        });
  }
  if (Yn = !0, s)
    for (const S in s) {
      const j = s[S], Ne = T(j) ? j.bind(n, n) : T(j.get) ? j.get.bind(n, n) : Z;
      process.env.NODE_ENV !== "production" && Ne === Z && b(`Computed property "${S}" has no getter.`);
      const Cn = !T(j) && T(j.set) ? j.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        b(
          `Write operation failed: computed property "${S}" is readonly.`
        );
      } : Z, bt = Zc({
        get: Ne,
        set: Cn
      });
      Object.defineProperty(o, S, {
        enumerable: !0,
        configurable: !0,
        get: () => bt.value,
        set: (ft) => bt.value = ft
      }), process.env.NODE_ENV !== "production" && Re("Computed", S);
    }
  if (l)
    for (const S in l)
      ns(l[S], o, n, S);
  if (f) {
    const S = T(f) ? f.call(n) : f;
    Reflect.ownKeys(S).forEach((j) => {
      _c(j, S[j]);
    });
  }
  h && Wo(h, e, "c");
  function re(S, j) {
    C(j) ? j.forEach((Ne) => S(Ne.bind(n))) : j && S(j.bind(n));
  }
  if (re(Xi, p), re(Qi, v), re(Gi, x), re(ec, F), re(Ji, R), re(Yi, W), re(sc, ue), re(rc, Ve), re(oc, ve), re(tc, _e), re(es, Ee), re(nc, ie), C(Ce))
    if (Ce.length) {
      const S = e.exposed || (e.exposed = {});
      Ce.forEach((j) => {
        Object.defineProperty(S, j, {
          get: () => n[j],
          set: (Ne) => n[j] = Ne
        });
      });
    } else
      e.exposed || (e.exposed = {});
  $ && e.render === Z && (e.render = $), Ae != null && (e.inheritAttrs = Ae), fe && (e.components = fe), Ut && (e.directives = Ut);
}
function ac(e, t, n = Z) {
  C(e) && (e = Zn(e));
  for (const o in e) {
    const r = e[o];
    let s;
    K(r) ? "default" in r ? s = Gt(
      r.from || o,
      r.default,
      !0
      /* treat default function as factory */
    ) : s = Gt(r.from || o) : s = Gt(r), Y(s) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (c) => s.value = c
    }) : t[o] = s, process.env.NODE_ENV !== "production" && n("Inject", o);
  }
}
function Wo(e, t, n) {
  me(
    C(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function ns(e, t, n, o) {
  const r = o.includes(".") ? Zr(n, o) : () => n[o];
  if (q(e)) {
    const s = t[e];
    T(s) ? An(r, s) : process.env.NODE_ENV !== "production" && b(`Invalid watch handler specified by key "${e}"`, s);
  } else if (T(e))
    An(r, e.bind(n));
  else if (K(e))
    if (C(e))
      e.forEach((s) => ns(s, t, n, o));
    else {
      const s = T(e.handler) ? e.handler.bind(n) : t[e.handler];
      T(s) ? An(r, s, e) : process.env.NODE_ENV !== "production" && b(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else
    process.env.NODE_ENV !== "production" && b(`Invalid watch option: "${o}"`, e);
}
function No(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: r,
    optionsCache: s,
    config: { optionMergeStrategies: c }
  } = e.appContext, l = s.get(t);
  let f;
  return l ? f = l : !r.length && !n && !o ? f = t : (f = {}, r.length && r.forEach(
    (a) => fn(f, a, c, !0)
  ), fn(f, t, c)), K(t) && s.set(t, f), f;
}
function fn(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && fn(e, s, n, !0), r && r.forEach(
    (c) => fn(e, c, n, !0)
  );
  for (const c in t)
    if (o && c === "expose")
      process.env.NODE_ENV !== "production" && b(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = pc[c] || n && n[c];
      e[c] = l ? l(e[c], t[c]) : t[c];
    }
  return e;
}
const pc = {
  data: qo,
  props: zo,
  emits: zo,
  // objects
  methods: Tt,
  computed: Tt,
  // lifecycle
  beforeCreate: ne,
  created: ne,
  beforeMount: ne,
  mounted: ne,
  beforeUpdate: ne,
  updated: ne,
  beforeDestroy: ne,
  beforeUnmount: ne,
  destroyed: ne,
  unmounted: ne,
  activated: ne,
  deactivated: ne,
  errorCaptured: ne,
  serverPrefetch: ne,
  // assets
  components: Tt,
  directives: Tt,
  // watch
  watch: hc,
  // provide / inject
  provide: qo,
  inject: dc
};
function qo(e, t) {
  return t ? e ? function() {
    return k(
      T(e) ? e.call(this, this) : e,
      T(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function dc(e, t) {
  return Tt(Zn(e), Zn(t));
}
function Zn(e) {
  if (C(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ne(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Tt(e, t) {
  return e ? k(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function zo(e, t) {
  return e ? C(e) && C(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : k(
    /* @__PURE__ */ Object.create(null),
    ko(e),
    ko(t ?? {})
  ) : t;
}
function hc(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = k(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = ne(e[o], t[o]);
  return n;
}
function os() {
  return {
    app: null,
    config: {
      isNativeTag: pr,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let mc = 0;
function gc(e, t) {
  return function(o, r = null) {
    T(o) || (o = k({}, o)), r != null && !K(r) && (process.env.NODE_ENV !== "production" && b("root props passed to app.mount() must be an object."), r = null);
    const s = os();
    process.env.NODE_ENV !== "production" && Object.defineProperty(s.config, "unwrapInjectedRef", {
      get() {
        return !0;
      },
      set() {
        b(
          "app.config.unwrapInjectedRef has been deprecated. 3.3 now always unwraps injected refs in Options API."
        );
      }
    });
    const c = /* @__PURE__ */ new WeakSet();
    let l = !1;
    const f = s.app = {
      _uid: mc++,
      _component: o,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: or,
      get config() {
        return s.config;
      },
      set config(a) {
        process.env.NODE_ENV !== "production" && b(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(a, ...h) {
        return c.has(a) ? process.env.NODE_ENV !== "production" && b("Plugin has already been applied to target app.") : a && T(a.install) ? (c.add(a), a.install(f, ...h)) : T(a) ? (c.add(a), a(f, ...h)) : process.env.NODE_ENV !== "production" && b(
          'A plugin must either be a function or an object with an "install" function.'
        ), f;
      },
      mixin(a) {
        return s.mixins.includes(a) ? process.env.NODE_ENV !== "production" && b(
          "Mixin has already been applied to target app" + (a.name ? `: ${a.name}` : "")
        ) : s.mixins.push(a), f;
      },
      component(a, h) {
        return process.env.NODE_ENV !== "production" && eo(a, s.config), h ? (process.env.NODE_ENV !== "production" && s.components[a] && b(`Component "${a}" has already been registered in target app.`), s.components[a] = h, f) : s.components[a];
      },
      directive(a, h) {
        return process.env.NODE_ENV !== "production" && Xr(a), h ? (process.env.NODE_ENV !== "production" && s.directives[a] && b(`Directive "${a}" has already been registered in target app.`), s.directives[a] = h, f) : s.directives[a];
      },
      mount(a, h, p) {
        if (l)
          process.env.NODE_ENV !== "production" && b(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && a.__vue_app__ && b(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const v = Be(o, r);
          return v.appContext = s, process.env.NODE_ENV !== "production" && (s.reload = () => {
            e(qe(v), a, p);
          }), h && t ? t(v, a) : e(v, a, p), l = !0, f._container = a, a.__vue_app__ = f, process.env.NODE_ENV !== "production" && (f._instance = v.component, Ti(f, or)), xo(v.component) || v.component.proxy;
        }
      },
      unmount() {
        l ? (e(null, f._container), process.env.NODE_ENV !== "production" && (f._instance = null, $i(f)), delete f._container.__vue_app__) : process.env.NODE_ENV !== "production" && b("Cannot unmount an app that is not mounted.");
      },
      provide(a, h) {
        return process.env.NODE_ENV !== "production" && a in s.provides && b(
          `App already provides property with key "${String(a)}". It will be overwritten with the new value.`
        ), s.provides[a] = h, f;
      },
      runWithContext(a) {
        an = f;
        try {
          return a();
        } finally {
          an = null;
        }
      }
    };
    return f;
  };
}
let an = null;
function _c(e, t) {
  if (!Q)
    process.env.NODE_ENV !== "production" && b("provide() can only be used inside setup().");
  else {
    let n = Q.provides;
    const o = Q.parent && Q.parent.provides;
    o === n && (n = Q.provides = Object.create(o)), n[e] = t;
  }
}
function Gt(e, t, n = !1) {
  const o = Q || le;
  if (o || an) {
    const r = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : an._context.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && T(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && b(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && b("inject() can only be used inside setup() or functional components.");
}
function Ec(e, t, n, o = !1) {
  const r = {}, s = {};
  rn(s, xn, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), rs(e, t, r, s);
  for (const c in e.propsOptions[0])
    c in r || (r[c] = void 0);
  process.env.NODE_ENV !== "production" && is(t || {}, r, e), n ? e.props = o ? r : ci(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function vc(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function Nc(e, t, n, o) {
  const {
    props: r,
    attrs: s,
    vnode: { patchFlag: c }
  } = e, l = P(r), [f] = e.propsOptions;
  let a = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && vc(e)) && (o || c > 0) && !(c & 16)
  ) {
    if (c & 8) {
      const h = e.vnode.dynamicProps;
      for (let p = 0; p < h.length; p++) {
        let v = h[p];
        if (On(e.emitsOptions, v))
          continue;
        const x = t[v];
        if (f)
          if (M(s, v))
            x !== s[v] && (s[v] = x, a = !0);
          else {
            const F = vt(v);
            r[F] = Xn(
              f,
              l,
              F,
              x,
              e,
              !1
              /* isAbsent */
            );
          }
        else
          x !== s[v] && (s[v] = x, a = !0);
      }
    }
  } else {
    rs(e, t, r, s) && (a = !0);
    let h;
    for (const p in l)
      (!t || // for camelCase
      !M(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((h = Ke(p)) === p || !M(t, h))) && (f ? n && // for camelCase
      (n[p] !== void 0 || // for kebab-case
      n[h] !== void 0) && (r[p] = Xn(
        f,
        l,
        p,
        void 0,
        e,
        !0
        /* isAbsent */
      )) : delete r[p]);
    if (s !== l)
      for (const p in s)
        (!t || !M(t, p)) && (delete s[p], a = !0);
  }
  a && De(e, "set", "$attrs"), process.env.NODE_ENV !== "production" && is(t || {}, r, e);
}
function rs(e, t, n, o) {
  const [r, s] = e.propsOptions;
  let c = !1, l;
  if (t)
    for (let f in t) {
      if (Yt(f))
        continue;
      const a = t[f];
      let h;
      r && M(r, h = vt(f)) ? !s || !s.includes(h) ? n[h] = a : (l || (l = {}))[h] = a : On(e.emitsOptions, f) || (!(f in o) || a !== o[f]) && (o[f] = a, c = !0);
    }
  if (s) {
    const f = P(n), a = l || B;
    for (let h = 0; h < s.length; h++) {
      const p = s[h];
      n[p] = Xn(
        r,
        f,
        p,
        a[p],
        e,
        !M(a, p)
      );
    }
  }
  return c;
}
function Xn(e, t, n, o, r, s) {
  const c = e[n];
  if (c != null) {
    const l = M(c, "default");
    if (l && o === void 0) {
      const f = c.default;
      if (c.type !== Function && !c.skipFactory && T(f)) {
        const { propsDefaults: a } = r;
        n in a ? o = a[n] : (Nt(r), o = a[n] = f.call(
          null,
          t
        ), rt());
      } else
        o = f;
    }
    c[
      0
      /* shouldCast */
    ] && (s && !l ? o = !1 : c[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === Ke(n)) && (o = !0));
  }
  return o;
}
function ss(e, t, n = !1) {
  const o = t.propsCache, r = o.get(e);
  if (r)
    return r;
  const s = e.props, c = {}, l = [];
  let f = !1;
  if (!T(e)) {
    const h = (p) => {
      f = !0;
      const [v, x] = ss(p, t, !0);
      k(c, v), x && l.push(...x);
    };
    !n && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  if (!s && !f)
    return K(e) && o.set(e, _t), _t;
  if (C(s))
    for (let h = 0; h < s.length; h++) {
      process.env.NODE_ENV !== "production" && !q(s[h]) && b("props must be strings when using array syntax.", s[h]);
      const p = vt(s[h]);
      Jo(p) && (c[p] = B);
    }
  else if (s) {
    process.env.NODE_ENV !== "production" && !K(s) && b("invalid props options", s);
    for (const h in s) {
      const p = vt(h);
      if (Jo(p)) {
        const v = s[h], x = c[p] = C(v) || T(v) ? { type: v } : k({}, v);
        if (x) {
          const F = Zo(Boolean, x.type), R = Zo(String, x.type);
          x[
            0
            /* shouldCast */
          ] = F > -1, x[
            1
            /* shouldCastTrue */
          ] = R < 0 || F < R, (F > -1 || M(x, "default")) && l.push(p);
        }
      }
    }
  }
  const a = [c, l];
  return K(e) && o.set(e, a), a;
}
function Jo(e) {
  return e[0] !== "$" ? !0 : (process.env.NODE_ENV !== "production" && b(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Qn(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function Yo(e, t) {
  return Qn(e) === Qn(t);
}
function Zo(e, t) {
  return C(t) ? t.findIndex((n) => Yo(n, e)) : T(t) && Yo(t, e) ? 0 : -1;
}
function is(e, t, n) {
  const o = P(t), r = n.propsOptions[0];
  for (const s in r) {
    let c = r[s];
    c != null && bc(
      s,
      o[s],
      c,
      !M(e, s) && !M(e, Ke(s))
    );
  }
}
function bc(e, t, n, o) {
  const { type: r, required: s, validator: c, skipCheck: l } = n;
  if (s && o) {
    b('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !s)) {
    if (r != null && r !== !0 && !l) {
      let f = !1;
      const a = C(r) ? r : [r], h = [];
      for (let p = 0; p < a.length && !f; p++) {
        const { valid: v, expectedType: x } = yc(t, a[p]);
        h.push(x || ""), f = v;
      }
      if (!f) {
        b(wc(e, t, h));
        return;
      }
    }
    c && !c(t) && b('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Oc = /* @__PURE__ */ ze(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function yc(e, t) {
  let n;
  const o = Qn(t);
  if (Oc(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = K(e) : o === "Array" ? n = C(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function wc(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(gn).join(" | ")}`;
  const r = n[0], s = so(t), c = Xo(t, r), l = Xo(t, s);
  return n.length === 1 && Qo(r) && !xc(r, s) && (o += ` with value ${c}`), o += `, got ${s} `, Qo(s) && (o += `with value ${l}.`), o;
}
function Xo(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Qo(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function xc(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const cs = (e) => e[0] === "_" || e === "$stable", bo = (e) => C(e) ? e.map(de) : [de(e)], Dc = (e, t, n) => {
  if (t._n)
    return t;
  const o = Fi((...r) => (process.env.NODE_ENV !== "production" && Q && b(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), bo(t(...r))), n);
  return o._c = !1, o;
}, ls = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (cs(r))
      continue;
    const s = e[r];
    if (T(s))
      t[r] = Dc(r, s, o);
    else if (s != null) {
      process.env.NODE_ENV !== "production" && b(
        `Non-function value encountered for slot "${r}". Prefer function slots for better performance.`
      );
      const c = bo(s);
      t[r] = () => c;
    }
  }
}, us = (e, t) => {
  process.env.NODE_ENV !== "production" && !Eo(e.vnode) && b(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = bo(t);
  e.slots.default = () => n;
}, Vc = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = P(t), rn(t, "_", n)) : ls(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && us(e, t);
  rn(e.slots, xn, 1);
}, Cc = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let s = !0, c = B;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? process.env.NODE_ENV !== "production" && nt ? (k(r, t), De(e, "set", "$slots")) : n && l === 1 ? s = !1 : (k(r, t), !n && l === 1 && delete r._) : (s = !t.$stable, ls(t, r)), c = t;
  } else
    t && (us(e, t), c = { default: 1 });
  if (s)
    for (const l in r)
      !cs(l) && c[l] == null && delete r[l];
};
function Gn(e, t, n, o, r = !1) {
  if (C(e)) {
    e.forEach(
      (v, x) => Gn(
        v,
        t && (C(t) ? t[x] : t),
        n,
        o,
        r
      )
    );
    return;
  }
  if (Qt(o) && !r)
    return;
  const s = o.shapeFlag & 4 ? xo(o.component) || o.component.proxy : o.el, c = r ? null : s, { i: l, r: f } = e;
  if (process.env.NODE_ENV !== "production" && !l) {
    b(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const a = t && t.r, h = l.refs === B ? l.refs = {} : l.refs, p = l.setupState;
  if (a != null && a !== f && (q(a) ? (h[a] = null, M(p, a) && (p[a] = null)) : Y(a) && (a.value = null)), T(f))
    Pe(f, l, 12, [c, h]);
  else {
    const v = q(f), x = Y(f);
    if (v || x) {
      const F = () => {
        if (e.f) {
          const R = v ? M(p, f) ? p[f] : h[f] : f.value;
          r ? C(R) && oo(R, s) : C(R) ? R.includes(s) || R.push(s) : v ? (h[f] = [s], M(p, f) && (p[f] = h[f])) : (f.value = [s], e.k && (h[e.k] = f.value));
        } else
          v ? (h[f] = c, M(p, f) && (p[f] = c)) : x ? (f.value = c, e.k && (h[e.k] = c)) : process.env.NODE_ENV !== "production" && b("Invalid template ref type:", f, `(${typeof f})`);
      };
      c ? (F.id = -1, se(F, n)) : F();
    } else
      process.env.NODE_ENV !== "production" && b("Invalid template ref type:", f, `(${typeof f})`);
  }
}
let wt, Le;
function $e(e, t) {
  e.appContext.config.performance && pn() && Le.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && Ai(e, t, pn() ? Le.now() : Date.now());
}
function Ie(e, t) {
  if (e.appContext.config.performance && pn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    Le.mark(o), Le.measure(
      `<${Dn(e, e.type)}> ${t}`,
      n,
      o
    ), Le.clearMarks(n), Le.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && Ri(e, t, pn() ? Le.now() : Date.now());
}
function pn() {
  return wt !== void 0 || (typeof window < "u" && window.performance ? (wt = !0, Le = window.performance) : wt = !1), wt;
}
function Tc() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const se = qi;
function $c(e) {
  return Ic(e);
}
function Ic(e, t) {
  Tc();
  const n = sn();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && Br(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: r,
    patchProp: s,
    createElement: c,
    createText: l,
    createComment: f,
    setText: a,
    setElementText: h,
    parentNode: p,
    nextSibling: v,
    setScopeId: x = Z,
    insertStaticContent: F
  } = e, R = (i, u, d, m = null, g = null, N = null, y = !1, E = null, O = process.env.NODE_ENV !== "production" && nt ? !1 : !!u.dynamicChildren) => {
    if (i === u)
      return;
    i && !xt(i, u) && (m = Bt(i), Se(i, g, N, !0), i = null), u.patchFlag === -2 && (O = !1, u.dynamicChildren = null);
    const { type: _, ref: D, shapeFlag: w } = u;
    switch (_) {
      case Lt:
        W(i, u, d, m);
        break;
      case ge:
        J(i, u, d, m);
        break;
      case tn:
        i == null ? _e(u, d, m, y) : process.env.NODE_ENV !== "production" && H(i, u, d, y);
        break;
      case ce:
        Ut(
          i,
          u,
          d,
          m,
          g,
          N,
          y,
          E,
          O
        );
        break;
      default:
        w & 1 ? Ve(
          i,
          u,
          d,
          m,
          g,
          N,
          y,
          E,
          O
        ) : w & 6 ? Do(
          i,
          u,
          d,
          m,
          g,
          N,
          y,
          E,
          O
        ) : w & 64 || w & 128 ? _.process(
          i,
          u,
          d,
          m,
          g,
          N,
          y,
          E,
          O,
          at
        ) : process.env.NODE_ENV !== "production" && b("Invalid VNode type:", _, `(${typeof _})`);
    }
    D != null && g && Gn(D, i && i.ref, N, u || i, !u);
  }, W = (i, u, d, m) => {
    if (i == null)
      o(
        u.el = l(u.children),
        d,
        m
      );
    else {
      const g = u.el = i.el;
      u.children !== i.children && a(g, u.children);
    }
  }, J = (i, u, d, m) => {
    i == null ? o(
      u.el = f(u.children || ""),
      d,
      m
    ) : u.el = i.el;
  }, _e = (i, u, d, m) => {
    [i.el, i.anchor] = F(
      i.children,
      u,
      d,
      m,
      i.el,
      i.anchor
    );
  }, H = (i, u, d, m) => {
    if (u.children !== i.children) {
      const g = v(i.anchor);
      $(i), [u.el, u.anchor] = F(
        u.children,
        d,
        g,
        m
      );
    } else
      u.el = i.el, u.anchor = i.anchor;
  }, Ee = ({ el: i, anchor: u }, d, m) => {
    let g;
    for (; i && i !== u; )
      g = v(i), o(i, d, m), i = g;
    o(u, d, m);
  }, $ = ({ el: i, anchor: u }) => {
    let d;
    for (; i && i !== u; )
      d = v(i), r(i), i = d;
    r(u);
  }, Ve = (i, u, d, m, g, N, y, E, O) => {
    y = y || u.type === "svg", i == null ? ve(
      u,
      d,
      m,
      g,
      N,
      y,
      E,
      O
    ) : Ce(
      i,
      u,
      g,
      N,
      y,
      E,
      O
    );
  }, ve = (i, u, d, m, g, N, y, E) => {
    let O, _;
    const { type: D, props: w, shapeFlag: V, transition: I, dirs: A } = i;
    if (O = i.el = c(
      i.type,
      N,
      w && w.is,
      w
    ), V & 8 ? h(O, i.children) : V & 16 && ie(
      i.children,
      O,
      null,
      m,
      g,
      N && D !== "foreignObject",
      y,
      E
    ), A && Je(i, null, m, "created"), ue(O, i, i.scopeId, y, m), w) {
      for (const L in w)
        L !== "value" && !Yt(L) && s(
          O,
          L,
          null,
          w[L],
          N,
          i.children,
          m,
          g,
          Te
        );
      "value" in w && s(O, "value", null, w.value), (_ = w.onVnodeBeforeMount) && Oe(_, m, i);
    }
    process.env.NODE_ENV !== "production" && (Object.defineProperty(O, "__vnode", {
      value: i,
      enumerable: !1
    }), Object.defineProperty(O, "__vueParentComponent", {
      value: m,
      enumerable: !1
    })), A && Je(i, null, m, "beforeMount");
    const U = Pc(g, I);
    U && I.beforeEnter(O), o(O, u, d), ((_ = w && w.onVnodeMounted) || U || A) && se(() => {
      _ && Oe(_, m, i), U && I.enter(O), A && Je(i, null, m, "mounted");
    }, g);
  }, ue = (i, u, d, m, g) => {
    if (d && x(i, d), m)
      for (let N = 0; N < m.length; N++)
        x(i, m[N]);
    if (g) {
      let N = g.subTree;
      if (process.env.NODE_ENV !== "production" && N.patchFlag > 0 && N.patchFlag & 2048 && (N = Jr(N.children) || N), u === N) {
        const y = g.vnode;
        ue(
          i,
          y,
          y.scopeId,
          y.slotScopeIds,
          g.parent
        );
      }
    }
  }, ie = (i, u, d, m, g, N, y, E, O = 0) => {
    for (let _ = O; _ < i.length; _++) {
      const D = i[_] = E ? He(i[_]) : de(i[_]);
      R(
        null,
        D,
        u,
        d,
        m,
        g,
        N,
        y,
        E
      );
    }
  }, Ce = (i, u, d, m, g, N, y) => {
    const E = u.el = i.el;
    let { patchFlag: O, dynamicChildren: _, dirs: D } = u;
    O |= i.patchFlag & 16;
    const w = i.props || B, V = u.props || B;
    let I;
    d && Ye(d, !1), (I = V.onVnodeBeforeUpdate) && Oe(I, d, u, i), D && Je(u, i, d, "beforeUpdate"), d && Ye(d, !0), process.env.NODE_ENV !== "production" && nt && (O = 0, y = !1, _ = null);
    const A = g && u.type !== "foreignObject";
    if (_ ? (Ae(
      i.dynamicChildren,
      _,
      E,
      d,
      m,
      A,
      N
    ), process.env.NODE_ENV !== "production" && en(i, u)) : y || Ne(
      i,
      u,
      E,
      null,
      d,
      m,
      A,
      N,
      !1
    ), O > 0) {
      if (O & 16)
        fe(
          E,
          u,
          w,
          V,
          d,
          m,
          g
        );
      else if (O & 2 && w.class !== V.class && s(E, "class", null, V.class, g), O & 4 && s(E, "style", w.style, V.style, g), O & 8) {
        const U = u.dynamicProps;
        for (let L = 0; L < U.length; L++) {
          const z = U[L], ae = w[z], pt = V[z];
          (pt !== ae || z === "value") && s(
            E,
            z,
            ae,
            pt,
            g,
            i.children,
            d,
            m,
            Te
          );
        }
      }
      O & 1 && i.children !== u.children && h(E, u.children);
    } else
      !y && _ == null && fe(
        E,
        u,
        w,
        V,
        d,
        m,
        g
      );
    ((I = V.onVnodeUpdated) || D) && se(() => {
      I && Oe(I, d, u, i), D && Je(u, i, d, "updated");
    }, m);
  }, Ae = (i, u, d, m, g, N, y) => {
    for (let E = 0; E < u.length; E++) {
      const O = i[E], _ = u[E], D = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        O.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (O.type === ce || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !xt(O, _) || // - In the case of a component, it could contain anything.
        O.shapeFlag & 70) ? p(O.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          d
        )
      );
      R(
        O,
        _,
        D,
        null,
        m,
        g,
        N,
        y,
        !0
      );
    }
  }, fe = (i, u, d, m, g, N, y) => {
    if (d !== m) {
      if (d !== B)
        for (const E in d)
          !Yt(E) && !(E in m) && s(
            i,
            E,
            d[E],
            null,
            y,
            u.children,
            g,
            N,
            Te
          );
      for (const E in m) {
        if (Yt(E))
          continue;
        const O = m[E], _ = d[E];
        O !== _ && E !== "value" && s(
          i,
          E,
          _,
          O,
          y,
          u.children,
          g,
          N,
          Te
        );
      }
      "value" in m && s(i, "value", d.value, m.value);
    }
  }, Ut = (i, u, d, m, g, N, y, E, O) => {
    const _ = u.el = i ? i.el : l(""), D = u.anchor = i ? i.anchor : l("");
    let { patchFlag: w, dynamicChildren: V, slotScopeIds: I } = u;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (nt || w & 2048) && (w = 0, O = !1, V = null), I && (E = E ? E.concat(I) : I), i == null ? (o(_, d, m), o(D, d, m), ie(
      u.children,
      d,
      D,
      g,
      N,
      y,
      E,
      O
    )) : w > 0 && w & 64 && V && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    i.dynamicChildren ? (Ae(
      i.dynamicChildren,
      V,
      d,
      g,
      N,
      y,
      E
    ), process.env.NODE_ENV !== "production" ? en(i, u) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (u.key != null || g && u === g.subTree) && en(
        i,
        u,
        !0
        /* shallow */
      )
    )) : Ne(
      i,
      u,
      d,
      D,
      g,
      N,
      y,
      E,
      O
    );
  }, Do = (i, u, d, m, g, N, y, E, O) => {
    u.slotScopeIds = E, i == null ? u.shapeFlag & 512 ? g.ctx.activate(
      u,
      d,
      m,
      y,
      O
    ) : Re(
      u,
      d,
      m,
      g,
      N,
      y,
      O
    ) : re(i, u, O);
  }, Re = (i, u, d, m, g, N, y) => {
    const E = i.component = Bc(
      i,
      m,
      g
    );
    if (process.env.NODE_ENV !== "production" && E.type.__hmrId && xi(E), process.env.NODE_ENV !== "production" && (Zt(i), $e(E, "mount")), Eo(i) && (E.ctx.renderer = at), process.env.NODE_ENV !== "production" && $e(E, "init"), kc(E), process.env.NODE_ENV !== "production" && Ie(E, "init"), E.asyncDep) {
      if (g && g.registerDep(E, S), !i.el) {
        const O = E.subTree = Be(ge);
        J(null, O, u, d);
      }
      return;
    }
    S(
      E,
      i,
      u,
      d,
      g,
      N,
      y
    ), process.env.NODE_ENV !== "production" && (Xt(), Ie(E, "mount"));
  }, re = (i, u, d) => {
    const m = u.component = i.component;
    if (Bi(i, u, d))
      if (m.asyncDep && !m.asyncResolved) {
        process.env.NODE_ENV !== "production" && Zt(u), j(m, u, d), process.env.NODE_ENV !== "production" && Xt();
        return;
      } else
        m.next = u, yi(m.update), m.update();
    else
      u.el = i.el, m.vnode = u;
  }, S = (i, u, d, m, g, N, y) => {
    const E = () => {
      if (i.isMounted) {
        let { next: D, bu: w, u: V, parent: I, vnode: A } = i, U = D, L;
        process.env.NODE_ENV !== "production" && Zt(D || i.vnode), Ye(i, !1), D ? (D.el = A.el, j(i, D, y)) : D = A, w && yt(w), (L = D.props && D.props.onVnodeBeforeUpdate) && Oe(L, I, D, A), Ye(i, !0), process.env.NODE_ENV !== "production" && $e(i, "render");
        const z = Mn(i);
        process.env.NODE_ENV !== "production" && Ie(i, "render");
        const ae = i.subTree;
        i.subTree = z, process.env.NODE_ENV !== "production" && $e(i, "patch"), R(
          ae,
          z,
          // parent may have changed if it's in a teleport
          p(ae.el),
          // anchor may have changed if it's in a fragment
          Bt(ae),
          i,
          g,
          N
        ), process.env.NODE_ENV !== "production" && Ie(i, "patch"), D.el = z.el, U === null && Ki(i, z.el), V && se(V, g), (L = D.props && D.props.onVnodeUpdated) && se(
          () => Oe(L, I, D, A),
          g
        ), process.env.NODE_ENV !== "production" && Kr(i), process.env.NODE_ENV !== "production" && Xt();
      } else {
        let D;
        const { el: w, props: V } = u, { bm: I, m: A, parent: U } = i, L = Qt(u);
        if (Ye(i, !1), I && yt(I), !L && (D = V && V.onVnodeBeforeMount) && Oe(D, U, u), Ye(i, !0), w && In) {
          const z = () => {
            process.env.NODE_ENV !== "production" && $e(i, "render"), i.subTree = Mn(i), process.env.NODE_ENV !== "production" && Ie(i, "render"), process.env.NODE_ENV !== "production" && $e(i, "hydrate"), In(
              w,
              i.subTree,
              i,
              g,
              null
            ), process.env.NODE_ENV !== "production" && Ie(i, "hydrate");
          };
          L ? u.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !i.isUnmounted && z()
          ) : z();
        } else {
          process.env.NODE_ENV !== "production" && $e(i, "render");
          const z = i.subTree = Mn(i);
          process.env.NODE_ENV !== "production" && Ie(i, "render"), process.env.NODE_ENV !== "production" && $e(i, "patch"), R(
            null,
            z,
            d,
            m,
            i,
            g,
            N
          ), process.env.NODE_ENV !== "production" && Ie(i, "patch"), u.el = z.el;
        }
        if (A && se(A, g), !L && (D = V && V.onVnodeMounted)) {
          const z = u;
          se(
            () => Oe(D, U, z),
            g
          );
        }
        (u.shapeFlag & 256 || U && Qt(U.vnode) && U.vnode.shapeFlag & 256) && i.a && se(i.a, g), i.isMounted = !0, process.env.NODE_ENV !== "production" && Ii(i), u = d = m = null;
      }
    }, O = i.effect = new uo(
      E,
      () => bn(_),
      i.scope
      // track it in component's effect scope
    ), _ = i.update = () => O.run();
    _.id = i.uid, Ye(i, !0), process.env.NODE_ENV !== "production" && (O.onTrack = i.rtc ? (D) => yt(i.rtc, D) : void 0, O.onTrigger = i.rtg ? (D) => yt(i.rtg, D) : void 0, _.ownerInstance = i), _();
  }, j = (i, u, d) => {
    u.component = i;
    const m = i.vnode.props;
    i.vnode = u, i.next = null, Nc(i, u.props, m, d), Cc(i, u.children, d), lt(), Lo(), ut();
  }, Ne = (i, u, d, m, g, N, y, E, O = !1) => {
    const _ = i && i.children, D = i ? i.shapeFlag : 0, w = u.children, { patchFlag: V, shapeFlag: I } = u;
    if (V > 0) {
      if (V & 128) {
        bt(
          _,
          w,
          d,
          m,
          g,
          N,
          y,
          E,
          O
        );
        return;
      } else if (V & 256) {
        Cn(
          _,
          w,
          d,
          m,
          g,
          N,
          y,
          E,
          O
        );
        return;
      }
    }
    I & 8 ? (D & 16 && Te(_, g, N), w !== _ && h(d, w)) : D & 16 ? I & 16 ? bt(
      _,
      w,
      d,
      m,
      g,
      N,
      y,
      E,
      O
    ) : Te(_, g, N, !0) : (D & 8 && h(d, ""), I & 16 && ie(
      w,
      d,
      m,
      g,
      N,
      y,
      E,
      O
    ));
  }, Cn = (i, u, d, m, g, N, y, E, O) => {
    i = i || _t, u = u || _t;
    const _ = i.length, D = u.length, w = Math.min(_, D);
    let V;
    for (V = 0; V < w; V++) {
      const I = u[V] = O ? He(u[V]) : de(u[V]);
      R(
        i[V],
        I,
        d,
        null,
        g,
        N,
        y,
        E,
        O
      );
    }
    _ > D ? Te(
      i,
      g,
      N,
      !0,
      !1,
      w
    ) : ie(
      u,
      d,
      m,
      g,
      N,
      y,
      E,
      O,
      w
    );
  }, bt = (i, u, d, m, g, N, y, E, O) => {
    let _ = 0;
    const D = u.length;
    let w = i.length - 1, V = D - 1;
    for (; _ <= w && _ <= V; ) {
      const I = i[_], A = u[_] = O ? He(u[_]) : de(u[_]);
      if (xt(I, A))
        R(
          I,
          A,
          d,
          null,
          g,
          N,
          y,
          E,
          O
        );
      else
        break;
      _++;
    }
    for (; _ <= w && _ <= V; ) {
      const I = i[w], A = u[V] = O ? He(u[V]) : de(u[V]);
      if (xt(I, A))
        R(
          I,
          A,
          d,
          null,
          g,
          N,
          y,
          E,
          O
        );
      else
        break;
      w--, V--;
    }
    if (_ > w) {
      if (_ <= V) {
        const I = V + 1, A = I < D ? u[I].el : m;
        for (; _ <= V; )
          R(
            null,
            u[_] = O ? He(u[_]) : de(u[_]),
            d,
            A,
            g,
            N,
            y,
            E,
            O
          ), _++;
      }
    } else if (_ > V)
      for (; _ <= w; )
        Se(i[_], g, N, !0), _++;
    else {
      const I = _, A = _, U = /* @__PURE__ */ new Map();
      for (_ = A; _ <= V; _++) {
        const te = u[_] = O ? He(u[_]) : de(u[_]);
        te.key != null && (process.env.NODE_ENV !== "production" && U.has(te.key) && b(
          "Duplicate keys found during update:",
          JSON.stringify(te.key),
          "Make sure keys are unique."
        ), U.set(te.key, _));
      }
      let L, z = 0;
      const ae = V - A + 1;
      let pt = !1, Co = 0;
      const Ot = new Array(ae);
      for (_ = 0; _ < ae; _++)
        Ot[_] = 0;
      for (_ = I; _ <= w; _++) {
        const te = i[_];
        if (z >= ae) {
          Se(te, g, N, !0);
          continue;
        }
        let be;
        if (te.key != null)
          be = U.get(te.key);
        else
          for (L = A; L <= V; L++)
            if (Ot[L - A] === 0 && xt(te, u[L])) {
              be = L;
              break;
            }
        be === void 0 ? Se(te, g, N, !0) : (Ot[be - A] = _ + 1, be >= Co ? Co = be : pt = !0, R(
          te,
          u[be],
          d,
          null,
          g,
          N,
          y,
          E,
          O
        ), z++);
      }
      const To = pt ? Mc(Ot) : _t;
      for (L = To.length - 1, _ = ae - 1; _ >= 0; _--) {
        const te = A + _, be = u[te], $o = te + 1 < D ? u[te + 1].el : m;
        Ot[_] === 0 ? R(
          null,
          be,
          d,
          $o,
          g,
          N,
          y,
          E,
          O
        ) : pt && (L < 0 || _ !== To[L] ? ft(be, d, $o, 2) : L--);
      }
    }
  }, ft = (i, u, d, m, g = null) => {
    const { el: N, type: y, transition: E, children: O, shapeFlag: _ } = i;
    if (_ & 6) {
      ft(i.component.subTree, u, d, m);
      return;
    }
    if (_ & 128) {
      i.suspense.move(u, d, m);
      return;
    }
    if (_ & 64) {
      y.move(i, u, d, at);
      return;
    }
    if (y === ce) {
      o(N, u, d);
      for (let w = 0; w < O.length; w++)
        ft(O[w], u, d, m);
      o(i.anchor, u, d);
      return;
    }
    if (y === tn) {
      Ee(i, u, d);
      return;
    }
    if (m !== 2 && _ & 1 && E)
      if (m === 0)
        E.beforeEnter(N), o(N, u, d), se(() => E.enter(N), g);
      else {
        const { leave: w, delayLeave: V, afterLeave: I } = E, A = () => o(N, u, d), U = () => {
          w(N, () => {
            A(), I && I();
          });
        };
        V ? V(N, A, U) : U();
      }
    else
      o(N, u, d);
  }, Se = (i, u, d, m = !1, g = !1) => {
    const {
      type: N,
      props: y,
      ref: E,
      children: O,
      dynamicChildren: _,
      shapeFlag: D,
      patchFlag: w,
      dirs: V
    } = i;
    if (E != null && Gn(E, null, d, i, !0), D & 256) {
      u.ctx.deactivate(i);
      return;
    }
    const I = D & 1 && V, A = !Qt(i);
    let U;
    if (A && (U = y && y.onVnodeBeforeUnmount) && Oe(U, u, i), D & 6)
      Os(i.component, d, m);
    else {
      if (D & 128) {
        i.suspense.unmount(d, m);
        return;
      }
      I && Je(i, null, u, "beforeUnmount"), D & 64 ? i.type.remove(
        i,
        u,
        d,
        g,
        at,
        m
      ) : _ && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (N !== ce || w > 0 && w & 64) ? Te(
        _,
        u,
        d,
        !1,
        !0
      ) : (N === ce && w & 384 || !g && D & 16) && Te(O, u, d), m && Tn(i);
    }
    (A && (U = y && y.onVnodeUnmounted) || I) && se(() => {
      U && Oe(U, u, i), I && Je(i, null, u, "unmounted");
    }, d);
  }, Tn = (i) => {
    const { type: u, el: d, anchor: m, transition: g } = i;
    if (u === ce) {
      process.env.NODE_ENV !== "production" && i.patchFlag > 0 && i.patchFlag & 2048 && g && !g.persisted ? i.children.forEach((y) => {
        y.type === ge ? r(y.el) : Tn(y);
      }) : bs(d, m);
      return;
    }
    if (u === tn) {
      $(i);
      return;
    }
    const N = () => {
      r(d), g && !g.persisted && g.afterLeave && g.afterLeave();
    };
    if (i.shapeFlag & 1 && g && !g.persisted) {
      const { leave: y, delayLeave: E } = g, O = () => y(d, N);
      E ? E(i.el, N, O) : O();
    } else
      N();
  }, bs = (i, u) => {
    let d;
    for (; i !== u; )
      d = v(i), r(i), i = d;
    r(u);
  }, Os = (i, u, d) => {
    process.env.NODE_ENV !== "production" && i.type.__hmrId && Di(i);
    const { bum: m, scope: g, update: N, subTree: y, um: E } = i;
    m && yt(m), g.stop(), N && (N.active = !1, Se(y, i, u, d)), E && se(E, u), se(() => {
      i.isUnmounted = !0;
    }, u), u && u.pendingBranch && !u.isUnmounted && i.asyncDep && !i.asyncResolved && i.suspenseId === u.pendingId && (u.deps--, u.deps === 0 && u.resolve()), process.env.NODE_ENV !== "production" && Mi(i);
  }, Te = (i, u, d, m = !1, g = !1, N = 0) => {
    for (let y = N; y < i.length; y++)
      Se(i[y], u, d, m, g);
  }, Bt = (i) => i.shapeFlag & 6 ? Bt(i.component.subTree) : i.shapeFlag & 128 ? i.suspense.next() : v(i.anchor || i.el), Vo = (i, u, d) => {
    i == null ? u._vnode && Se(u._vnode, null, null, !0) : R(u._vnode || null, i, u, null, null, null, d), Lo(), Hr(), u._vnode = i;
  }, at = {
    p: R,
    um: Se,
    m: ft,
    r: Tn,
    mt: Re,
    mc: ie,
    pc: Ne,
    pbc: Ae,
    n: Bt,
    o: e
  };
  let $n, In;
  return t && ([$n, In] = t(
    at
  )), {
    render: Vo,
    hydrate: $n,
    createApp: gc(Vo, $n)
  };
}
function Ye({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Pc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function en(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (C(o) && C(r))
    for (let s = 0; s < o.length; s++) {
      const c = o[s];
      let l = r[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[s] = He(r[s]), l.el = c.el), n || en(c, l)), l.type === Lt && (l.el = c.el), process.env.NODE_ENV !== "production" && l.type === ge && !l.el && (l.el = c.el);
    }
}
function Mc(e) {
  const t = e.slice(), n = [0];
  let o, r, s, c, l;
  const f = e.length;
  for (o = 0; o < f; o++) {
    const a = e[o];
    if (a !== 0) {
      if (r = n[n.length - 1], e[r] < a) {
        t[o] = r, n.push(o);
        continue;
      }
      for (s = 0, c = n.length - 1; s < c; )
        l = s + c >> 1, e[n[l]] < a ? s = l + 1 : c = l;
      a < e[n[s]] && (s > 0 && (t[o] = n[s - 1]), n[s] = o);
    }
  }
  for (s = n.length, c = n[s - 1]; s-- > 0; )
    n[s] = c, c = t[c];
  return n;
}
const Ac = (e) => e.__isTeleport, ce = Symbol.for("v-fgt"), Lt = Symbol.for("v-txt"), ge = Symbol.for("v-cmt"), tn = Symbol.for("v-stc"), It = [];
let he = null;
function fs(e = !1) {
  It.push(he = e ? null : []);
}
function Rc() {
  It.pop(), he = It[It.length - 1] || null;
}
let St = 1;
function Go(e) {
  St += e;
}
function Sc(e) {
  return e.dynamicChildren = St > 0 ? he || _t : null, Rc(), St > 0 && he && he.push(e), e;
}
function as(e, t, n, o, r, s) {
  return Sc(
    X(
      e,
      t,
      n,
      o,
      r,
      s,
      !0
      /* isBlock */
    )
  );
}
function Oo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function xt(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && ht.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const jc = (...e) => ds(
  ...e
), xn = "__vInternal", ps = ({ key: e }) => e ?? null, nn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? q(e) || Y(e) || T(e) ? { i: le, r: e, k: t, f: !!n } : e : null);
function X(e, t = null, n = null, o = 0, r = null, s = e === ce ? 0 : 1, c = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ps(t),
    ref: t && nn(t),
    scopeId: yn,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: le
  };
  return l ? (yo(f, n), s & 128 && e.normalize(f)) : n && (f.shapeFlag |= q(n) ? 8 : 16), process.env.NODE_ENV !== "production" && f.key !== f.key && b("VNode created with invalid key (NaN). VNode type:", f.type), St > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  he && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && he.push(f), f;
}
const Be = process.env.NODE_ENV !== "production" ? jc : ds;
function ds(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === ki) && (process.env.NODE_ENV !== "production" && !e && b(`Invalid vnode type when creating vnode: ${e}.`), e = ge), Oo(e)) {
    const l = qe(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && yo(l, n), St > 0 && !s && he && (l.shapeFlag & 6 ? he[he.indexOf(e)] = l : he.push(l)), l.patchFlag |= -2, l;
  }
  if (vs(e) && (e = e.__vccOpts), t) {
    t = Fc(t);
    let { class: l, style: f } = t;
    l && !q(l) && (t.class = lo(l)), K(f) && (kn(f) && !C(f) && (f = k({}, f)), t.style = co(f));
  }
  const c = q(e) ? 1 : Wi(e) ? 128 : Ac(e) ? 64 : K(e) ? 4 : T(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && c & 4 && kn(e) && (e = P(e), b(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), X(
    e,
    t,
    n,
    o,
    r,
    c,
    s,
    !0
  );
}
function Fc(e) {
  return e ? kn(e) || xn in e ? k({}, e) : e : null;
}
function qe(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: s, children: c } = e, l = t ? Hc(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && ps(l),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? C(r) ? r.concat(nn(t)) : [r, nn(t)] : nn(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && C(c) ? c.map(hs) : c,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ce ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && qe(e.ssContent),
    ssFallback: e.ssFallback && qe(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function hs(e) {
  const t = qe(e);
  return C(e.children) && (t.children = e.children.map(hs)), t;
}
function ct(e = " ", t = 0) {
  return Be(Lt, null, e, t);
}
function de(e) {
  return e == null || typeof e == "boolean" ? Be(ge) : C(e) ? Be(
    ce,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? He(e) : Be(Lt, null, String(e));
}
function He(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : qe(e);
}
function yo(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (C(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), yo(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(xn in t) ? t._ctx = le : r === 3 && le && (le.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    T(t) ? (t = { default: t, _ctx: le }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [ct(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Hc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = lo([t.class, o.class]));
      else if (r === "style")
        t.style = co([t.style, o.style]);
      else if (Ft(r)) {
        const s = t[r], c = o[r];
        c && s !== c && !(C(s) && s.includes(c)) && (t[r] = s ? [].concat(s, c) : c);
      } else
        r !== "" && (t[r] = o[r]);
  }
  return t;
}
function Oe(e, t, n, o = null) {
  me(e, t, 7, [
    n,
    o
  ]);
}
const Lc = os();
let Uc = 0;
function Bc(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || Lc, s = {
    uid: Uc++,
    vnode: e,
    type: o,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new Fs(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: ss(o, r),
    emitsOptions: Wr(o, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: B,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: B,
    data: B,
    props: B,
    attrs: B,
    slots: B,
    refs: B,
    setupState: B,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? s.ctx = ic(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = ji.bind(null, s), e.ce && e.ce(s), s;
}
let Q = null, wo, dt, er = "__VUE_INSTANCE_SETTERS__";
(dt = sn()[er]) || (dt = sn()[er] = []), dt.push((e) => Q = e), wo = (e) => {
  dt.length > 1 ? dt.forEach((t) => t(e)) : dt[0](e);
};
const Nt = (e) => {
  wo(e), e.scope.on();
}, rt = () => {
  Q && Q.scope.off(), wo(null);
}, Kc = /* @__PURE__ */ ze("slot,component");
function eo(e, t) {
  const n = t.isNativeTag || pr;
  (Kc(e) || n(e)) && b(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function ms(e) {
  return e.vnode.shapeFlag & 4;
}
let jt = !1;
function kc(e, t = !1) {
  jt = t;
  const { props: n, children: o } = e.vnode, r = ms(e);
  Ec(e, n, r, t), Vc(e, o);
  const s = r ? Wc(e, t) : void 0;
  return jt = !1, s;
}
function Wc(e, t) {
  var n;
  const o = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (o.name && eo(o.name, e.appContext.config), o.components) {
      const s = Object.keys(o.components);
      for (let c = 0; c < s.length; c++)
        eo(s[c], e.appContext.config);
    }
    if (o.directives) {
      const s = Object.keys(o.directives);
      for (let c = 0; c < s.length; c++)
        Xr(s[c]);
    }
    o.compilerOptions && gs() && b(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Ir(new Proxy(e.ctx, ts)), process.env.NODE_ENV !== "production" && cc(e);
  const { setup: r } = o;
  if (r) {
    const s = e.setupContext = r.length > 1 ? zc(e) : null;
    Nt(e), lt();
    const c = Pe(
      r,
      e,
      0,
      [process.env.NODE_ENV !== "production" ? Vt(e.props) : e.props, s]
    );
    if (ut(), rt(), ro(c)) {
      if (c.then(rt, rt), t)
        return c.then((l) => {
          tr(e, l, t);
        }).catch((l) => {
          Nn(l, e, 0);
        });
      if (e.asyncDep = c, process.env.NODE_ENV !== "production" && !e.suspense) {
        const l = (n = o.name) != null ? n : "Anonymous";
        b(
          `Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      tr(e, c, t);
  } else
    _s(e, t);
}
function tr(e, t, n) {
  T(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : K(t) ? (process.env.NODE_ENV !== "production" && Oo(t) && b(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Ar(t), process.env.NODE_ENV !== "production" && lc(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && b(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), _s(e, n);
}
let to;
const gs = () => !to;
function _s(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && to && !o.render) {
      const r = o.template || No(e).template;
      if (r) {
        process.env.NODE_ENV !== "production" && $e(e, "compile");
        const { isCustomElement: s, compilerOptions: c } = e.appContext.config, { delimiters: l, compilerOptions: f } = o, a = k(
          k(
            {
              isCustomElement: s,
              delimiters: l
            },
            c
          ),
          f
        );
        o.render = to(r, a), process.env.NODE_ENV !== "production" && Ie(e, "compile");
      }
    }
    e.render = o.render || Z;
  }
  {
    Nt(e), lt();
    try {
      fc(e);
    } finally {
      ut(), rt();
    }
  }
  process.env.NODE_ENV !== "production" && !o.render && e.render === Z && !t && (o.template ? b(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : b("Component is missing template or render function."));
}
function nr(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    process.env.NODE_ENV !== "production" ? {
      get(t, n) {
        return un(), G(e, "get", "$attrs"), t[n];
      },
      set() {
        return b("setupContext.attrs is readonly."), !1;
      },
      deleteProperty() {
        return b("setupContext.attrs is readonly."), !1;
      }
    } : {
      get(t, n) {
        return G(e, "get", "$attrs"), t[n];
      }
    }
  ));
}
function qc(e) {
  return e.slotsProxy || (e.slotsProxy = new Proxy(e.slots, {
    get(t, n) {
      return G(e, "get", "$slots"), t[n];
    }
  }));
}
function zc(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && b("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (C(n) ? o = "array" : Y(n) && (o = "ref")), o !== "object" && b(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  return process.env.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return nr(e);
    },
    get slots() {
      return qc(e);
    },
    get emit() {
      return (n, ...o) => e.emit(n, ...o);
    },
    expose: t
  }) : {
    get attrs() {
      return nr(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function xo(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Ar(Ir(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in ot)
          return ot[n](e);
      },
      has(t, n) {
        return n in t || n in ot;
      }
    }));
}
const Jc = /(?:^|[-_])(\w)/g, Yc = (e) => e.replace(Jc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Es(e, t = !0) {
  return T(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Dn(e, t, n = !1) {
  let o = Es(t);
  if (!o && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (o = r[1]);
  }
  if (!o && e && e.parent) {
    const r = (s) => {
      for (const c in s)
        if (s[c] === t)
          return c;
    };
    o = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return o ? Yc(o) : n ? "App" : "Anonymous";
}
function vs(e) {
  return T(e) && "__vccOpts" in e;
}
const Zc = (e, t) => hi(e, t, jt), Xc = Symbol.for("v-scx"), Qc = () => {
  {
    const e = Gt(Xc);
    return e || process.env.NODE_ENV !== "production" && b(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Sn(e) {
  return !!(e && e.__v_isShallow);
}
function Gc() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, r = {
    header(p) {
      return K(p) ? p.__isVue ? ["div", e, "VueInstance"] : Y(p) ? [
        "div",
        {},
        ["span", e, h(p)],
        "<",
        l(p.value),
        ">"
      ] : et(p) ? [
        "div",
        {},
        ["span", e, Sn(p) ? "ShallowReactive" : "Reactive"],
        "<",
        l(p),
        `>${We(p) ? " (readonly)" : ""}`
      ] : We(p) ? [
        "div",
        {},
        ["span", e, Sn(p) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(p),
        ">"
      ] : null : null;
    },
    hasBody(p) {
      return p && p.__isVue;
    },
    body(p) {
      if (p && p.__isVue)
        return [
          "div",
          {},
          ...s(p.$)
        ];
    }
  };
  function s(p) {
    const v = [];
    p.type.props && p.props && v.push(c("props", P(p.props))), p.setupState !== B && v.push(c("setup", p.setupState)), p.data !== B && v.push(c("data", P(p.data)));
    const x = f(p, "computed");
    x && v.push(c("computed", x));
    const F = f(p, "inject");
    return F && v.push(c("injected", F)), v.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: p }]
    ]), v;
  }
  function c(p, v) {
    return v = k({}, v), Object.keys(v).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        p
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(v).map((x) => [
          "div",
          {},
          ["span", o, x + ": "],
          l(v[x], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(p, v = !0) {
    return typeof p == "number" ? ["span", t, p] : typeof p == "string" ? ["span", n, JSON.stringify(p)] : typeof p == "boolean" ? ["span", o, p] : K(p) ? ["object", { object: v ? P(p) : p }] : ["span", n, String(p)];
  }
  function f(p, v) {
    const x = p.type;
    if (T(x))
      return;
    const F = {};
    for (const R in p.ctx)
      a(x, R, v) && (F[R] = p.ctx[R]);
    return F;
  }
  function a(p, v, x) {
    const F = p[x];
    if (C(F) && F.includes(v) || K(F) && v in F || p.extends && a(p.extends, v, x) || p.mixins && p.mixins.some((R) => a(R, v, x)))
      return !0;
  }
  function h(p) {
    return Sn(p) ? "ShallowRef" : p.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const or = "3.3.10", el = "http://www.w3.org/2000/svg", Xe = typeof document < "u" ? document : null, rr = Xe && /* @__PURE__ */ Xe.createElement("template"), tl = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t ? Xe.createElementNS(el, e) : Xe.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => Xe.createTextNode(e),
  createComment: (e) => Xe.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Xe.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, r, s) {
    const c = n ? n.previousSibling : t.lastChild;
    if (r && (r === s || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === s || !(r = r.nextSibling)); )
        ;
    else {
      rr.innerHTML = o ? `<svg>${e}</svg>` : e;
      const l = rr.content;
      if (o) {
        const f = l.firstChild;
        for (; f.firstChild; )
          l.appendChild(f.firstChild);
        l.removeChild(f);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      c ? c.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, nl = Symbol("_vtc");
function ol(e, t, n) {
  const o = e[nl];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const rl = Symbol("_vod");
function sl(e, t, n) {
  const o = e.style, r = q(n);
  if (n && !r) {
    if (t && !q(t))
      for (const s in t)
        n[s] == null && no(o, s, "");
    for (const s in n)
      no(o, s, n[s]);
  } else {
    const s = o.display;
    r ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), rl in e && (o.display = s);
  }
}
const il = /[^\\];\s*$/, sr = /\s*!important$/;
function no(e, t, n) {
  if (C(n))
    n.forEach((o) => no(e, t, o));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && il.test(n) && b(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = cl(e, t);
    sr.test(n) ? e.setProperty(
      Ke(o),
      n.replace(sr, ""),
      "important"
    ) : e[o] = n;
  }
}
const ir = ["Webkit", "Moz", "ms"], jn = {};
function cl(e, t) {
  const n = jn[t];
  if (n)
    return n;
  let o = vt(t);
  if (o !== "filter" && o in e)
    return jn[t] = o;
  o = gn(o);
  for (let r = 0; r < ir.length; r++) {
    const s = ir[r] + o;
    if (s in e)
      return jn[t] = s;
  }
  return t;
}
const cr = "http://www.w3.org/1999/xlink";
function ll(e, t, n, o, r) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(cr, t.slice(6, t.length)) : e.setAttributeNS(cr, t, n);
  else {
    const s = js(t);
    n == null || s && !gr(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : n);
  }
}
function ul(e, t, n, o, r, s, c) {
  if (t === "innerHTML" || t === "textContent") {
    o && c(o, r, s), e[t] = n ?? "";
    return;
  }
  const l = e.tagName;
  if (t === "value" && l !== "PROGRESS" && // custom elements may use _value internally
  !l.includes("-")) {
    e._value = n;
    const a = l === "OPTION" ? e.getAttribute("value") : e.value, h = n ?? "";
    a !== h && (e.value = h), n == null && e.removeAttribute(t);
    return;
  }
  let f = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = gr(n) : n == null && a === "string" ? (n = "", f = !0) : a === "number" && (n = 0, f = !0);
  }
  try {
    e[t] = n;
  } catch (a) {
    process.env.NODE_ENV !== "production" && !f && b(
      `Failed setting prop "${t}" on <${l.toLowerCase()}>: value ${n} is invalid.`,
      a
    );
  }
  f && e.removeAttribute(t);
}
function fl(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function al(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const lr = Symbol("_vei");
function pl(e, t, n, o, r = null) {
  const s = e[lr] || (e[lr] = {}), c = s[t];
  if (o && c)
    c.value = o;
  else {
    const [l, f] = dl(t);
    if (o) {
      const a = s[t] = gl(o, r);
      fl(e, l, a, f);
    } else
      c && (al(e, l, c, f), s[t] = void 0);
  }
}
const ur = /(?:Once|Passive|Capture)$/;
function dl(e) {
  let t;
  if (ur.test(e)) {
    t = {};
    let o;
    for (; o = e.match(ur); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ke(e.slice(2)), t];
}
let Fn = 0;
const hl = /* @__PURE__ */ Promise.resolve(), ml = () => Fn || (hl.then(() => Fn = 0), Fn = Date.now());
function gl(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    me(
      _l(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = ml(), n;
}
function _l(e, t) {
  if (C(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((o) => (r) => !r._stopped && o && o(r));
  } else
    return t;
}
const fr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, El = (e, t, n, o, r = !1, s, c, l, f) => {
  t === "class" ? ol(e, o, r) : t === "style" ? sl(e, n, o) : Ft(t) ? on(t) || pl(e, t, n, o, c) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : vl(e, t, o, r)) ? ul(
    e,
    t,
    o,
    s,
    c,
    l,
    f
  ) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), ll(e, t, o, r));
};
function vl(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && fr(t) && T(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    return !(r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE");
  }
  return fr(t) && q(n) ? !1 : t in e;
}
const Nl = /* @__PURE__ */ k({ patchProp: El }, tl);
let ar;
function bl() {
  return ar || (ar = $c(Nl));
}
const Ol = (...e) => {
  const t = bl().createApp(...e);
  process.env.NODE_ENV !== "production" && (yl(t), wl(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const r = xl(o);
    if (!r)
      return;
    const s = t._component;
    !T(s) && !s.render && !s.template && (s.template = r.innerHTML), r.innerHTML = "";
    const c = n(r, !1, r instanceof SVGElement);
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), c;
  }, t;
};
function yl(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => As(t) || Rs(t),
    writable: !1
  });
}
function wl(e) {
  if (gs()) {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        b(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return b(o), n;
      },
      set() {
        b(o);
      }
    });
  }
}
function xl(e) {
  if (q(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && b(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && b(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
function Dl() {
  Gc();
}
process.env.NODE_ENV !== "production" && Dl();
const Vl = "/vite.svg", Cl = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='37.07'%20height='36'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20198'%3e%3cpath%20fill='%2341B883'%20d='M204.8%200H256L128%20220.8L0%200h97.92L128%2051.2L157.44%200h47.36Z'%3e%3c/path%3e%3cpath%20fill='%2341B883'%20d='m0%200l128%20220.8L256%200h-51.2L128%20132.48L50.56%200H0Z'%3e%3c/path%3e%3cpath%20fill='%2335495E'%20d='M50.56%200L128%20133.12L204.8%200h-47.36L128%2051.2L97.92%200H50.56Z'%3e%3c/path%3e%3c/svg%3e", Vn = (e) => (qr("data-v-1d5be6d4"), e = e(), zr(), e), Tl = { class: "card" }, $l = /* @__PURE__ */ Vn(() => /* @__PURE__ */ X("p", null, [
  /* @__PURE__ */ ct(" Edit "),
  /* @__PURE__ */ X("code", null, "components/HelloWorld.vue"),
  /* @__PURE__ */ ct(" to test HMR ")
], -1)), Il = /* @__PURE__ */ Vn(() => /* @__PURE__ */ X("p", null, [
  /* @__PURE__ */ ct(" Check out "),
  /* @__PURE__ */ X("a", {
    href: "https://vuejs.org/guide/quick-start.html#local",
    target: "_blank"
  }, "create-vue"),
  /* @__PURE__ */ ct(", the official Vue + Vite starter ")
], -1)), Pl = /* @__PURE__ */ Vn(() => /* @__PURE__ */ X("p", null, [
  /* @__PURE__ */ ct(" Install "),
  /* @__PURE__ */ X("a", {
    href: "https://github.com/vuejs/language-tools",
    target: "_blank"
  }, "Volar"),
  /* @__PURE__ */ ct(" in your IDE for a better DX ")
], -1)), Ml = /* @__PURE__ */ Vn(() => /* @__PURE__ */ X("p", { class: "read-the-docs" }, "Click on the Vite and Vue logos to learn more", -1)), Al = /* @__PURE__ */ Qr({
  __name: "HelloWorld",
  props: {
    msg: {}
  },
  setup(e) {
    const t = li(0);
    return (n, o) => (fs(), as(ce, null, [
      X("h1", null, Po(n.msg), 1),
      X("div", Tl, [
        X("button", {
          type: "button",
          onClick: o[0] || (o[0] = (r) => t.value++)
        }, "count is " + Po(t.value), 1),
        $l
      ]),
      Il,
      Pl,
      Ml
    ], 64));
  }
}), Ns = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Rl = /* @__PURE__ */ Ns(Al, [["__scopeId", "data-v-1d5be6d4"]]), Sl = (e) => (qr("data-v-58aba71c"), e = e(), zr(), e), jl = /* @__PURE__ */ Sl(() => /* @__PURE__ */ X("div", null, [
  /* @__PURE__ */ X("a", {
    href: "https://vitejs.dev",
    target: "_blank"
  }, [
    /* @__PURE__ */ X("img", {
      src: Vl,
      class: "logo",
      alt: "Vite logo"
    })
  ]),
  /* @__PURE__ */ X("a", {
    href: "https://vuejs.org/",
    target: "_blank"
  }, [
    /* @__PURE__ */ X("img", {
      src: Cl,
      class: "logo vue",
      alt: "Vue logo"
    })
  ])
], -1)), Fl = /* @__PURE__ */ Qr({
  __name: "App",
  setup(e) {
    return (t, n) => (fs(), as(ce, null, [
      jl,
      Be(Rl, { msg: "Vite + Vue" })
    ], 64));
  }
}), Hl = /* @__PURE__ */ Ns(Fl, [["__scopeId", "data-v-58aba71c"]]);
Ol(Hl).mount("#app");
