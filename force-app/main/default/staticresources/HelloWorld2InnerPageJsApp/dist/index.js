var mr = {};
function Ye(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let r = 0; r < o.length; r++)
    n[o[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const K = mr.NODE_ENV !== "production" ? Object.freeze({}) : {}, Nt = mr.NODE_ENV !== "production" ? Object.freeze([]) : [], Q = () => {
}, gr = () => !1, Ut = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ln = (e) => e.startsWith("onUpdate:"), W = Object.assign, so = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Vi = Object.prototype.hasOwnProperty, M = (e, t) => Vi.call(e, t), T = Array.isArray, et = (e) => _n(e) === "[object Map]", _r = (e) => _n(e) === "[object Set]", $ = (e) => typeof e == "function", z = (e) => typeof e == "string", gn = (e) => typeof e == "symbol", k = (e) => e !== null && typeof e == "object", lo = (e) => (k(e) || $(e)) && $(e.then) && $(e.catch), Er = Object.prototype.toString, _n = (e) => Er.call(e), co = (e) => _n(e).slice(8, -1), Nr = (e) => _n(e) === "[object Object]", uo = (e) => z(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Qt = /* @__PURE__ */ Ye(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ci = /* @__PURE__ */ Ye(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), En = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ti = /-(\w)/g, Ot = En((e) => e.replace(Ti, (t, n) => n ? n.toUpperCase() : "")), $i = /\B([A-Z])/g, We = En(
  (e) => e.replace($i, "-$1").toLowerCase()
), Nn = En((e) => e.charAt(0).toUpperCase() + e.slice(1)), Qe = En((e) => e ? `on${Nn(e)}` : ""), lt = (e, t) => !Object.is(e, t), xt = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, cn = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Ii = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Mo;
const un = () => Mo || (Mo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function fo(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = z(o) ? Ri(o) : fo(o);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (z(e) || k(e))
    return e;
}
const Pi = /;(?![^(]*\))/g, Ai = /:([^]+)/, Mi = /\/\*[^]*?\*\//g;
function Ri(e) {
  const t = {};
  return e.replace(Mi, "").split(Pi).forEach((n) => {
    if (n) {
      const o = n.split(Ai);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function ao(e) {
  let t = "";
  if (z(e))
    t = e;
  else if (T(e))
    for (let n = 0; n < e.length; n++) {
      const o = ao(e[n]);
      o && (t += o + " ");
    }
  else if (k(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Si = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", ji = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Fi = /* @__PURE__ */ Ye(Si), Hi = /* @__PURE__ */ Ye(ji), Li = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ui = /* @__PURE__ */ Ye(Li);
function br(e) {
  return !!e || e === "";
}
const Ro = (e) => z(e) ? e : e == null ? "" : T(e) || k(e) && (e.toString === Er || !$(e.toString)) ? JSON.stringify(e, Or, 2) : String(e), Or = (e, t) => t && t.__v_isRef ? Or(e, t.value) : et(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [o, r]) => (n[`${o} =>`] = r, n), {})
} : _r(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : k(t) && !T(t) && !Nr(t) ? String(t) : t;
var Y = {};
function Bn(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let he;
class Bi {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = he, !t && he && (this.index = (he.scopes || (he.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = he;
      try {
        return he = this, t();
      } finally {
        he = n;
      }
    } else
      Y.NODE_ENV !== "production" && Bn("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    he = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    he = this.parent;
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
function Ki(e, t = he) {
  t && t.active && t.effects.push(e);
}
function ki() {
  return he;
}
const Mt = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, yr = (e) => (e.w & qe) > 0, vr = (e) => (e.n & qe) > 0, Wi = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= qe;
}, qi = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const r = t[o];
      yr(r) && !vr(r) ? r.delete(e) : t[n++] = r, r.w &= ~qe, r.n &= ~qe;
    }
    t.length = n;
  }
}, Kn = /* @__PURE__ */ new WeakMap();
let Ct = 0, qe = 1;
const kn = 30;
let ie;
const tt = Symbol(Y.NODE_ENV !== "production" ? "iterate" : ""), Wn = Symbol(Y.NODE_ENV !== "production" ? "Map key iterate" : "");
class po {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Ki(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = ie, n = Ke;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = ie, ie = this, Ke = !0, qe = 1 << ++Ct, Ct <= kn ? Wi(this) : So(this), this.fn();
    } finally {
      Ct <= kn && qi(this), qe = 1 << --Ct, ie = this.parent, Ke = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    ie === this ? this.deferStop = !0 : this.active && (So(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function So(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Ke = !0;
const wr = [];
function ft() {
  wr.push(Ke), Ke = !1;
}
function at() {
  const e = wr.pop();
  Ke = e === void 0 ? !0 : e;
}
function te(e, t, n) {
  if (Ke && ie) {
    let o = Kn.get(e);
    o || Kn.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = Mt());
    const i = Y.NODE_ENV !== "production" ? { effect: ie, target: e, type: t, key: n } : void 0;
    qn(r, i);
  }
}
function qn(e, t) {
  let n = !1;
  Ct <= kn ? vr(e) || (e.n |= qe, n = !yr(e)) : n = !e.has(ie), n && (e.add(ie), ie.deps.push(e), Y.NODE_ENV !== "production" && ie.onTrack && ie.onTrack(
    W(
      {
        effect: ie
      },
      t
    )
  ));
}
function Ce(e, t, n, o, r, i) {
  const l = Kn.get(e);
  if (!l)
    return;
  let c = [];
  if (t === "clear")
    c = [...l.values()];
  else if (n === "length" && T(e)) {
    const d = Number(o);
    l.forEach((m, p) => {
      (p === "length" || !gn(p) && p >= d) && c.push(m);
    });
  } else
    switch (n !== void 0 && c.push(l.get(n)), t) {
      case "add":
        T(e) ? uo(n) && c.push(l.get("length")) : (c.push(l.get(tt)), et(e) && c.push(l.get(Wn)));
        break;
      case "delete":
        T(e) || (c.push(l.get(tt)), et(e) && c.push(l.get(Wn)));
        break;
      case "set":
        et(e) && c.push(l.get(tt));
        break;
    }
  const f = Y.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: r, oldTarget: i } : void 0;
  if (c.length === 1)
    c[0] && (Y.NODE_ENV !== "production" ? _t(c[0], f) : _t(c[0]));
  else {
    const d = [];
    for (const m of c)
      m && d.push(...m);
    Y.NODE_ENV !== "production" ? _t(Mt(d), f) : _t(Mt(d));
  }
}
function _t(e, t) {
  const n = T(e) ? e : [...e];
  for (const o of n)
    o.computed && jo(o, t);
  for (const o of n)
    o.computed || jo(o, t);
}
function jo(e, t) {
  (e !== ie || e.allowRecurse) && (Y.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(W({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const zi = /* @__PURE__ */ Ye("__proto__,__v_isRef,__isVue"), xr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(gn)
), Fo = /* @__PURE__ */ Ji();
function Ji() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = A(this);
      for (let i = 0, l = this.length; i < l; i++)
        te(o, "get", i + "");
      const r = o[t](...n);
      return r === -1 || r === !1 ? o[t](...n.map(A)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      ft();
      const o = A(this)[t].apply(this, n);
      return at(), o;
    };
  }), e;
}
function Yi(e) {
  const t = A(this);
  return te(t, "has", e), t.hasOwnProperty(e);
}
class Dr {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._shallow = n;
  }
  get(t, n, o) {
    const r = this._isReadonly, i = this._shallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw" && o === (r ? i ? Ar : Pr : i ? Ir : $r).get(t))
      return t;
    const l = T(t);
    if (!r) {
      if (l && M(Fo, n))
        return Reflect.get(Fo, n, o);
      if (n === "hasOwnProperty")
        return Yi;
    }
    const c = Reflect.get(t, n, o);
    return (gn(n) ? xr.has(n) : zi(n)) || (r || te(t, "get", n), i) ? c : X(c) ? l && uo(n) ? c : c.value : k(c) ? r ? Mr(c) : mo(c) : c;
  }
}
class Vr extends Dr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, r) {
    let i = t[n];
    if (ze(i) && X(i) && !X(o))
      return !1;
    if (!this._shallow && (!fn(o) && !ze(o) && (i = A(i), o = A(o)), !T(t) && X(i) && !X(o)))
      return i.value = o, !0;
    const l = T(t) && uo(n) ? Number(n) < t.length : M(t, n), c = Reflect.set(t, n, o, r);
    return t === A(r) && (l ? lt(o, i) && Ce(t, "set", n, o, i) : Ce(t, "add", n, o)), c;
  }
  deleteProperty(t, n) {
    const o = M(t, n), r = t[n], i = Reflect.deleteProperty(t, n);
    return i && o && Ce(t, "delete", n, void 0, r), i;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!gn(n) || !xr.has(n)) && te(t, "has", n), o;
  }
  ownKeys(t) {
    return te(
      t,
      "iterate",
      T(t) ? "length" : tt
    ), Reflect.ownKeys(t);
  }
}
class Cr extends Dr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return Y.NODE_ENV !== "production" && Bn(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return Y.NODE_ENV !== "production" && Bn(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Zi = /* @__PURE__ */ new Vr(), Xi = /* @__PURE__ */ new Cr(), Qi = /* @__PURE__ */ new Vr(
  !0
), Gi = /* @__PURE__ */ new Cr(!0), ho = (e) => e, bn = (e) => Reflect.getPrototypeOf(e);
function qt(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = A(e), i = A(t);
  n || (lt(t, i) && te(r, "get", t), te(r, "get", i));
  const { has: l } = bn(r), c = o ? ho : n ? go : Rt;
  if (l.call(r, t))
    return c(e.get(t));
  if (l.call(r, i))
    return c(e.get(i));
  e !== r && e.get(t);
}
function zt(e, t = !1) {
  const n = this.__v_raw, o = A(n), r = A(e);
  return t || (lt(e, r) && te(o, "has", e), te(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function Jt(e, t = !1) {
  return e = e.__v_raw, !t && te(A(e), "iterate", tt), Reflect.get(e, "size", e);
}
function Ho(e) {
  e = A(e);
  const t = A(this);
  return bn(t).has.call(t, e) || (t.add(e), Ce(t, "add", e, e)), this;
}
function Lo(e, t) {
  t = A(t);
  const n = A(this), { has: o, get: r } = bn(n);
  let i = o.call(n, e);
  i ? Y.NODE_ENV !== "production" && Tr(n, o, e) : (e = A(e), i = o.call(n, e));
  const l = r.call(n, e);
  return n.set(e, t), i ? lt(t, l) && Ce(n, "set", e, t, l) : Ce(n, "add", e, t), this;
}
function Uo(e) {
  const t = A(this), { has: n, get: o } = bn(t);
  let r = n.call(t, e);
  r ? Y.NODE_ENV !== "production" && Tr(t, n, e) : (e = A(e), r = n.call(t, e));
  const i = o ? o.call(t, e) : void 0, l = t.delete(e);
  return r && Ce(t, "delete", e, void 0, i), l;
}
function Bo() {
  const e = A(this), t = e.size !== 0, n = Y.NODE_ENV !== "production" ? et(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && Ce(e, "clear", void 0, void 0, n), o;
}
function Yt(e, t) {
  return function(o, r) {
    const i = this, l = i.__v_raw, c = A(l), f = t ? ho : e ? go : Rt;
    return !e && te(c, "iterate", tt), l.forEach((d, m) => o.call(r, f(d), f(m), i));
  };
}
function Zt(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, i = A(r), l = et(i), c = e === "entries" || e === Symbol.iterator && l, f = e === "keys" && l, d = r[e](...o), m = n ? ho : t ? go : Rt;
    return !t && te(
      i,
      "iterate",
      f ? Wn : tt
    ), {
      // iterator protocol
      next() {
        const { value: p, done: b } = d.next();
        return b ? { value: p, done: b } : {
          value: c ? [m(p[0]), m(p[1])] : m(p),
          done: b
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function He(e) {
  return function(...t) {
    if (Y.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(
        `${Nn(e)} operation ${n}failed: target is readonly.`,
        A(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function es() {
  const e = {
    get(i) {
      return qt(this, i);
    },
    get size() {
      return Jt(this);
    },
    has: zt,
    add: Ho,
    set: Lo,
    delete: Uo,
    clear: Bo,
    forEach: Yt(!1, !1)
  }, t = {
    get(i) {
      return qt(this, i, !1, !0);
    },
    get size() {
      return Jt(this);
    },
    has: zt,
    add: Ho,
    set: Lo,
    delete: Uo,
    clear: Bo,
    forEach: Yt(!1, !0)
  }, n = {
    get(i) {
      return qt(this, i, !0);
    },
    get size() {
      return Jt(this, !0);
    },
    has(i) {
      return zt.call(this, i, !0);
    },
    add: He("add"),
    set: He("set"),
    delete: He("delete"),
    clear: He("clear"),
    forEach: Yt(!0, !1)
  }, o = {
    get(i) {
      return qt(this, i, !0, !0);
    },
    get size() {
      return Jt(this, !0);
    },
    has(i) {
      return zt.call(this, i, !0);
    },
    add: He("add"),
    set: He("set"),
    delete: He("delete"),
    clear: He("clear"),
    forEach: Yt(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
    e[i] = Zt(
      i,
      !1,
      !1
    ), n[i] = Zt(
      i,
      !0,
      !1
    ), t[i] = Zt(
      i,
      !1,
      !0
    ), o[i] = Zt(
      i,
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
  ts,
  ns,
  os,
  rs
] = /* @__PURE__ */ es();
function On(e, t) {
  const n = t ? e ? rs : os : e ? ns : ts;
  return (o, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(
    M(n, r) && r in o ? n : o,
    r,
    i
  );
}
const is = {
  get: /* @__PURE__ */ On(!1, !1)
}, ss = {
  get: /* @__PURE__ */ On(!1, !0)
}, ls = {
  get: /* @__PURE__ */ On(!0, !1)
}, cs = {
  get: /* @__PURE__ */ On(!0, !0)
};
function Tr(e, t, n) {
  const o = A(n);
  if (o !== n && t.call(e, o)) {
    const r = co(e);
    console.warn(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const $r = /* @__PURE__ */ new WeakMap(), Ir = /* @__PURE__ */ new WeakMap(), Pr = /* @__PURE__ */ new WeakMap(), Ar = /* @__PURE__ */ new WeakMap();
function us(e) {
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
function fs(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : us(co(e));
}
function mo(e) {
  return ze(e) ? e : yn(
    e,
    !1,
    Zi,
    is,
    $r
  );
}
function as(e) {
  return yn(
    e,
    !1,
    Qi,
    ss,
    Ir
  );
}
function Mr(e) {
  return yn(
    e,
    !0,
    Xi,
    ls,
    Pr
  );
}
function Tt(e) {
  return yn(
    e,
    !0,
    Gi,
    cs,
    Ar
  );
}
function yn(e, t, n, o, r) {
  if (!k(e))
    return Y.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const l = fs(e);
  if (l === 0)
    return e;
  const c = new Proxy(
    e,
    l === 2 ? o : n
  );
  return r.set(e, c), c;
}
function nt(e) {
  return ze(e) ? nt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ze(e) {
  return !!(e && e.__v_isReadonly);
}
function fn(e) {
  return !!(e && e.__v_isShallow);
}
function zn(e) {
  return nt(e) || ze(e);
}
function A(e) {
  const t = e && e.__v_raw;
  return t ? A(t) : e;
}
function Rr(e) {
  return cn(e, "__v_skip", !0), e;
}
const Rt = (e) => k(e) ? mo(e) : e, go = (e) => k(e) ? Mr(e) : e;
function Sr(e) {
  Ke && ie && (e = A(e), Y.NODE_ENV !== "production" ? qn(e.dep || (e.dep = Mt()), {
    target: e,
    type: "get",
    key: "value"
  }) : qn(e.dep || (e.dep = Mt())));
}
function jr(e, t) {
  e = A(e);
  const n = e.dep;
  n && (Y.NODE_ENV !== "production" ? _t(n, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : _t(n));
}
function X(e) {
  return !!(e && e.__v_isRef === !0);
}
function ds(e) {
  return ps(e, !1);
}
function ps(e, t) {
  return X(e) ? e : new hs(e, t);
}
class hs {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : A(t), this._value = n ? t : Rt(t);
  }
  get value() {
    return Sr(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || fn(t) || ze(t);
    t = n ? t : A(t), lt(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Rt(t), jr(this, t));
  }
}
function ms(e) {
  return X(e) ? e.value : e;
}
const gs = {
  get: (e, t, n) => ms(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return X(r) && !X(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Fr(e) {
  return nt(e) ? e : new Proxy(e, gs);
}
class _s {
  constructor(t, n, o, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new po(t, () => {
      this._dirty || (this._dirty = !0, jr(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = A(this);
    return Sr(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
function Es(e, t, n = !1) {
  let o, r;
  const i = $(e);
  i ? (o = e, r = Y.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : Q) : (o = e.get, r = e.set);
  const l = new _s(o, r, i || !r, n);
  return Y.NODE_ENV !== "production" && t && !n && (l.effect.onTrack = t.onTrack, l.effect.onTrigger = t.onTrigger), l;
}
var a = {};
const ot = [];
function Gt(e) {
  ot.push(e);
}
function en() {
  ot.pop();
}
function y(e, ...t) {
  if (a.NODE_ENV === "production")
    return;
  ft();
  const n = ot.length ? ot[ot.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = Ns();
  if (o)
    Me(
      o,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        r.map(
          ({ vnode: i }) => `at <${Tn(n, i.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    r.length && i.push(`
`, ...bs(r)), console.warn(...i);
  }
  at();
}
function Ns() {
  let e = ot[ot.length - 1];
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
function bs(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Os(n));
  }), t;
}
function Os({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${Tn(
    e.component,
    e.type,
    o
  )}`, i = ">" + n;
  return e.props ? [r, ...ys(e.props), i] : [r + i];
}
function ys(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Hr(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Hr(e, t, n) {
  return z(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : X(t) ? (t = Hr(e, A(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : $(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = A(t), n ? t : [`${e}=`, t]);
}
const _o = {
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
function Me(e, t, n, o) {
  let r;
  try {
    r = o ? e(...o) : e();
  } catch (i) {
    vn(i, t, n);
  }
  return r;
}
function _e(e, t, n, o) {
  if ($(e)) {
    const i = Me(e, t, n, o);
    return i && lo(i) && i.catch((l) => {
      vn(l, t, n);
    }), i;
  }
  const r = [];
  for (let i = 0; i < e.length; i++)
    r.push(_e(e[i], t, n, o));
  return r;
}
function vn(e, t, n, o = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let i = t.parent;
    const l = t.proxy, c = a.NODE_ENV !== "production" ? _o[n] : n;
    for (; i; ) {
      const d = i.ec;
      if (d) {
        for (let m = 0; m < d.length; m++)
          if (d[m](e, l, c) === !1)
            return;
      }
      i = i.parent;
    }
    const f = t.appContext.config.errorHandler;
    if (f) {
      Me(
        f,
        null,
        10,
        [e, l, c]
      );
      return;
    }
  }
  vs(e, n, r, o);
}
function vs(e, t, n, o = !0) {
  if (a.NODE_ENV !== "production") {
    const r = _o[t];
    if (n && Gt(n), y(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && en(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let St = !1, Jn = !1;
const ne = [];
let De = 0;
const bt = [];
let xe = null, Le = 0;
const Lr = /* @__PURE__ */ Promise.resolve();
let Eo = null;
const ws = 100;
function xs(e) {
  const t = Eo || Lr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ds(e) {
  let t = De + 1, n = ne.length;
  for (; t < n; ) {
    const o = t + n >>> 1, r = ne[o], i = jt(r);
    i < e || i === e && r.pre ? t = o + 1 : n = o;
  }
  return t;
}
function wn(e) {
  (!ne.length || !ne.includes(
    e,
    St && e.allowRecurse ? De + 1 : De
  )) && (e.id == null ? ne.push(e) : ne.splice(Ds(e.id), 0, e), Ur());
}
function Ur() {
  !St && !Jn && (Jn = !0, Eo = Lr.then(kr));
}
function Vs(e) {
  const t = ne.indexOf(e);
  t > De && ne.splice(t, 1);
}
function Br(e) {
  T(e) ? bt.push(...e) : (!xe || !xe.includes(
    e,
    e.allowRecurse ? Le + 1 : Le
  )) && bt.push(e), Ur();
}
function Ko(e, t = St ? De + 1 : 0) {
  for (a.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < ne.length; t++) {
    const n = ne[t];
    if (n && n.pre) {
      if (a.NODE_ENV !== "production" && No(e, n))
        continue;
      ne.splice(t, 1), t--, n();
    }
  }
}
function Kr(e) {
  if (bt.length) {
    const t = [...new Set(bt)];
    if (bt.length = 0, xe) {
      xe.push(...t);
      return;
    }
    for (xe = t, a.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), xe.sort((n, o) => jt(n) - jt(o)), Le = 0; Le < xe.length; Le++)
      a.NODE_ENV !== "production" && No(e, xe[Le]) || xe[Le]();
    xe = null, Le = 0;
  }
}
const jt = (e) => e.id == null ? 1 / 0 : e.id, Cs = (e, t) => {
  const n = jt(e) - jt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function kr(e) {
  Jn = !1, St = !0, a.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ne.sort(Cs);
  const t = a.NODE_ENV !== "production" ? (n) => No(e, n) : Q;
  try {
    for (De = 0; De < ne.length; De++) {
      const n = ne[De];
      if (n && n.active !== !1) {
        if (a.NODE_ENV !== "production" && t(n))
          continue;
        Me(n, null, 14);
      }
    }
  } finally {
    De = 0, ne.length = 0, Kr(e), St = !1, Eo = null, (ne.length || bt.length) && kr(e);
  }
}
function No(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > ws) {
      const o = t.ownerInstance, r = o && Oi(o.type);
      return y(
        `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
let rt = !1;
const gt = /* @__PURE__ */ new Set();
a.NODE_ENV !== "production" && (un().__VUE_HMR_RUNTIME__ = {
  createRecord: Rn(Wr),
  rerender: Rn(Is),
  reload: Rn(Ps)
});
const ct = /* @__PURE__ */ new Map();
function Ts(e) {
  const t = e.type.__hmrId;
  let n = ct.get(t);
  n || (Wr(t, e.type), n = ct.get(t)), n.instances.add(e);
}
function $s(e) {
  ct.get(e.type.__hmrId).instances.delete(e);
}
function Wr(e, t) {
  return ct.has(e) ? !1 : (ct.set(e, {
    initialDef: Pt(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Pt(e) {
  return yi(e) ? e.__vccOpts : e;
}
function Is(e, t) {
  const n = ct.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Pt(o.type).render = t), o.renderCache = [], rt = !0, o.update(), rt = !1;
  }));
}
function Ps(e, t) {
  const n = ct.get(e);
  if (!n)
    return;
  t = Pt(t), ko(n.initialDef, t);
  const o = [...n.instances];
  for (const r of o) {
    const i = Pt(r.type);
    gt.has(i) || (i !== n.initialDef && ko(i, t), gt.add(i)), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (gt.add(i), r.ceReload(t.styles), gt.delete(i)) : r.parent ? wn(r.parent.update) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Br(() => {
    for (const r of o)
      gt.delete(
        Pt(r.type)
      );
  });
}
function ko(e, t) {
  W(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Rn(e) {
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
let Ve, $t = [], Yn = !1;
function Bt(e, ...t) {
  Ve ? Ve.emit(e, ...t) : Yn || $t.push({ event: e, args: t });
}
function qr(e, t) {
  var n, o;
  Ve = e, Ve ? (Ve.enabled = !0, $t.forEach(({ event: r, args: i }) => Ve.emit(r, ...i)), $t = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    qr(i, t);
  }), setTimeout(() => {
    Ve || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Yn = !0, $t = []);
  }, 3e3)) : (Yn = !0, $t = []);
}
function As(e, t) {
  Bt("app:init", e, t, {
    Fragment: ue,
    Text: Kt,
    Comment: Ee,
    Static: rn
  });
}
function Ms(e) {
  Bt("app:unmount", e);
}
const Rs = /* @__PURE__ */ bo(
  "component:added"
  /* COMPONENT_ADDED */
), zr = /* @__PURE__ */ bo(
  "component:updated"
  /* COMPONENT_UPDATED */
), Ss = /* @__PURE__ */ bo(
  "component:removed"
  /* COMPONENT_REMOVED */
), js = (e) => {
  Ve && typeof Ve.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Ve.cleanupBuffer(e) && Ss(e);
};
function bo(e) {
  return (t) => {
    Bt(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Fs = /* @__PURE__ */ Jr(
  "perf:start"
  /* PERFORMANCE_START */
), Hs = /* @__PURE__ */ Jr(
  "perf:end"
  /* PERFORMANCE_END */
);
function Jr(e) {
  return (t, n, o) => {
    Bt(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Ls(e, t, n) {
  Bt(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
function Us(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || K;
  if (a.NODE_ENV !== "production") {
    const {
      emitsOptions: m,
      propsOptions: [p]
    } = e;
    if (m)
      if (!(t in m))
        (!p || !(Qe(t) in p)) && y(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Qe(t)}" prop.`
        );
      else {
        const b = m[t];
        $(b) && (b(...n) || y(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let r = n;
  const i = t.startsWith("update:"), l = i && t.slice(7);
  if (l && l in o) {
    const m = `${l === "modelValue" ? "model" : l}Modifiers`, { number: p, trim: b } = o[m] || K;
    b && (r = n.map((D) => z(D) ? D.trim() : D)), p && (r = n.map(Ii));
  }
  if (a.NODE_ENV !== "production" && Ls(e, t, r), a.NODE_ENV !== "production") {
    const m = t.toLowerCase();
    m !== t && o[Qe(m)] && y(
      `Event "${m}" is emitted in component ${Tn(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${We(t)}" instead of "${t}".`
    );
  }
  let c, f = o[c = Qe(t)] || // also try camelCase event handler (#2249)
  o[c = Qe(Ot(t))];
  !f && i && (f = o[c = Qe(We(t))]), f && _e(
    f,
    e,
    6,
    r
  );
  const d = o[c + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, _e(
      d,
      e,
      6,
      r
    );
  }
}
function Yr(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let l = {}, c = !1;
  if (!$(e)) {
    const f = (d) => {
      const m = Yr(d, t, !0);
      m && (c = !0, W(l, m));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !i && !c ? (k(e) && o.set(e, null), null) : (T(i) ? i.forEach((f) => l[f] = null) : W(l, i), k(e) && o.set(e, l), l);
}
function xn(e, t) {
  return !e || !Ut(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), M(e, t[0].toLowerCase() + t.slice(1)) || M(e, We(t)) || M(e, t));
}
let fe = null, Dn = null;
function an(e) {
  const t = fe;
  return fe = e, Dn = e && e.type.__scopeId || null, t;
}
function Zr(e) {
  Dn = e;
}
function Xr() {
  Dn = null;
}
function Bs(e, t = fe, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && nr(-1);
    const i = an(t);
    let l;
    try {
      l = e(...r);
    } finally {
      an(i), o._d && nr(1);
    }
    return a.NODE_ENV !== "production" && zr(t), l;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let Zn = !1;
function dn() {
  Zn = !0;
}
function Sn(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: r,
    props: i,
    propsOptions: [l],
    slots: c,
    attrs: f,
    emit: d,
    render: m,
    renderCache: p,
    data: b,
    setupState: D,
    ctx: H,
    inheritAttrs: S
  } = e;
  let q, Z;
  const Ne = an(e);
  a.NODE_ENV !== "production" && (Zn = !1);
  try {
    if (n.shapeFlag & 4) {
      const I = r || o, Te = a.NODE_ENV !== "production" && D.__isScriptSetup ? new Proxy(I, {
        get(Oe, ae, ce) {
          return y(
            `Property '${String(
              ae
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(Oe, ae, ce);
        }
      }) : I;
      q = me(
        m.call(
          Te,
          I,
          p,
          i,
          D,
          b,
          H
        )
      ), Z = f;
    } else {
      const I = t;
      a.NODE_ENV !== "production" && f === i && dn(), q = me(
        I.length > 1 ? I(
          i,
          a.NODE_ENV !== "production" ? {
            get attrs() {
              return dn(), f;
            },
            slots: c,
            emit: d
          } : { attrs: f, slots: c, emit: d }
        ) : I(
          i,
          null
          /* we know it doesn't need it */
        )
      ), Z = t.props ? f : ks(f);
    }
  } catch (I) {
    At.length = 0, vn(I, e, 1), q = ke(Ee);
  }
  let L = q, be;
  if (a.NODE_ENV !== "production" && q.patchFlag > 0 && q.patchFlag & 2048 && ([L, be] = Ks(q)), Z && S !== !1) {
    const I = Object.keys(Z), { shapeFlag: Te } = L;
    if (I.length) {
      if (Te & 7)
        l && I.some(ln) && (Z = Ws(
          Z,
          l
        )), L = Je(L, Z);
      else if (a.NODE_ENV !== "production" && !Zn && L.type !== Ee) {
        const Oe = Object.keys(f), ae = [], ce = [];
        for (let $e = 0, Se = Oe.length; $e < Se; $e++) {
          const de = Oe[$e];
          Ut(de) ? ln(de) || ae.push(de[2].toLowerCase() + de.slice(3)) : ce.push(de);
        }
        ce.length && y(
          `Extraneous non-props attributes (${ce.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), ae.length && y(
          `Extraneous non-emits event listeners (${ae.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (a.NODE_ENV !== "production" && !Wo(L) && y(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), L = Je(L), L.dirs = L.dirs ? L.dirs.concat(n.dirs) : n.dirs), n.transition && (a.NODE_ENV !== "production" && !Wo(L) && y(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), L.transition = n.transition), a.NODE_ENV !== "production" && be ? be(L) : q = L, an(Ne), q;
}
const Ks = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Qr(t);
  if (!o)
    return [e, void 0];
  const r = t.indexOf(o), i = n ? n.indexOf(o) : -1, l = (c) => {
    t[r] = c, n && (i > -1 ? n[i] = c : c.patchFlag > 0 && (e.dynamicChildren = [...n, c]));
  };
  return [me(o), l];
};
function Qr(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    if (xo(o)) {
      if (o.type !== Ee || o.children === "v-if") {
        if (t)
          return;
        t = o;
      }
    } else
      return;
  }
  return t;
}
const ks = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ut(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Ws = (e, t) => {
  const n = {};
  for (const o in e)
    (!ln(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Wo = (e) => e.shapeFlag & 7 || e.type === Ee;
function qs(e, t, n) {
  const { props: o, children: r, component: i } = e, { props: l, children: c, patchFlag: f } = t, d = i.emitsOptions;
  if (a.NODE_ENV !== "production" && (r || c) && rt || t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return o ? qo(o, l, d) : !!l;
    if (f & 8) {
      const m = t.dynamicProps;
      for (let p = 0; p < m.length; p++) {
        const b = m[p];
        if (l[b] !== o[b] && !xn(d, b))
          return !0;
      }
    }
  } else
    return (r || c) && (!c || !c.$stable) ? !0 : o === l ? !1 : o ? l ? qo(o, l, d) : !0 : !!l;
  return !1;
}
function qo(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const i = o[r];
    if (t[i] !== e[i] && !xn(n, i))
      return !0;
  }
  return !1;
}
function zs({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const Js = Symbol.for("v-ndc"), Ys = (e) => e.__isSuspense;
function Zs(e, t) {
  t && t.pendingBranch ? T(e) ? t.effects.push(...e) : t.effects.push(e) : Br(e);
}
const Xt = {};
function jn(e, t, n) {
  return a.NODE_ENV !== "production" && !$(t) && y(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Gr(e, t, n);
}
function Gr(e, t, { immediate: n, deep: o, flush: r, onTrack: i, onTrigger: l } = K) {
  var c;
  a.NODE_ENV !== "production" && !t && (n !== void 0 && y(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && y(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const f = (I) => {
    y(
      "Invalid watch source: ",
      I,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = ki() === ((c = ee) == null ? void 0 : c.scope) ? ee : null;
  let m, p = !1, b = !1;
  if (X(e) ? (m = () => e.value, p = fn(e)) : nt(e) ? (m = () => e, o = !0) : T(e) ? (b = !0, p = e.some((I) => nt(I) || fn(I)), m = () => e.map((I) => {
    if (X(I))
      return I.value;
    if (nt(I))
      return Et(I);
    if ($(I))
      return Me(I, d, 2);
    a.NODE_ENV !== "production" && f(I);
  })) : $(e) ? t ? m = () => Me(e, d, 2) : m = () => {
    if (!(d && d.isUnmounted))
      return D && D(), _e(
        e,
        d,
        3,
        [H]
      );
  } : (m = Q, a.NODE_ENV !== "production" && f(e)), t && o) {
    const I = m;
    m = () => Et(I());
  }
  let D, H = (I) => {
    D = L.onStop = () => {
      Me(I, d, 4), D = L.onStop = void 0;
    };
  }, S;
  if (Ht)
    if (H = Q, t ? n && _e(t, d, 3, [
      m(),
      b ? [] : void 0,
      H
    ]) : m(), r === "sync") {
      const I = oc();
      S = I.__watcherHandles || (I.__watcherHandles = []);
    } else
      return Q;
  let q = b ? new Array(e.length).fill(Xt) : Xt;
  const Z = () => {
    if (L.active)
      if (t) {
        const I = L.run();
        (o || p || (b ? I.some((Te, Oe) => lt(Te, q[Oe])) : lt(I, q))) && (D && D(), _e(t, d, 3, [
          I,
          // pass undefined as the old value when it's changed for the first time
          q === Xt ? void 0 : b && q[0] === Xt ? [] : q,
          H
        ]), q = I);
      } else
        L.run();
  };
  Z.allowRecurse = !!t;
  let Ne;
  r === "sync" ? Ne = Z : r === "post" ? Ne = () => le(Z, d && d.suspense) : (Z.pre = !0, d && (Z.id = d.uid), Ne = () => wn(Z));
  const L = new po(m, Ne);
  a.NODE_ENV !== "production" && (L.onTrack = i, L.onTrigger = l), t ? n ? Z() : q = L.run() : r === "post" ? le(
    L.run.bind(L),
    d && d.suspense
  ) : L.run();
  const be = () => {
    L.stop(), d && d.scope && so(d.scope.effects, L);
  };
  return S && S.push(be), be;
}
function Xs(e, t, n) {
  const o = this.proxy, r = z(e) ? e.includes(".") ? ei(o, e) : () => o[e] : e.bind(o, o);
  let i;
  $(t) ? i = t : (i = t.handler, n = t);
  const l = ee;
  yt(this);
  const c = Gr(r, i.bind(o), n);
  return l ? yt(l) : st(), c;
}
function ei(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
function Et(e, t) {
  if (!k(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), X(e))
    Et(e.value, t);
  else if (T(e))
    for (let n = 0; n < e.length; n++)
      Et(e[n], t);
  else if (_r(e) || et(e))
    e.forEach((n) => {
      Et(n, t);
    });
  else if (Nr(e))
    for (const n in e)
      Et(e[n], t);
  return e;
}
function ti(e) {
  Ci(e) && y("Do not use built-in directive ids as custom directive id: " + e);
}
function Ze(e, t, n, o) {
  const r = e.dirs, i = t && t.dirs;
  for (let l = 0; l < r.length; l++) {
    const c = r[l];
    i && (c.oldValue = i[l].value);
    let f = c.dir[o];
    f && (ft(), _e(f, n, 8, [
      e.el,
      c,
      e,
      t
    ]), at());
  }
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ni(e, t) {
  return $(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    W({ name: e.name }, t, { setup: e })
  ) : e;
}
const tn = (e) => !!e.type.__asyncLoader, Oo = (e) => e.type.__isKeepAlive;
function Qs(e, t) {
  oi(e, "a", t);
}
function Gs(e, t) {
  oi(e, "da", t);
}
function oi(e, t, n = ee) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Vn(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      Oo(r.parent.vnode) && el(o, t, n, r), r = r.parent;
  }
}
function el(e, t, n, o) {
  const r = Vn(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  ri(() => {
    so(o[t], r);
  }, n);
}
function Vn(e, t, n = ee, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...l) => {
      if (n.isUnmounted)
        return;
      ft(), yt(n);
      const c = _e(t, n, e, l);
      return st(), at(), c;
    });
    return o ? r.unshift(i) : r.push(i), i;
  } else if (a.NODE_ENV !== "production") {
    const r = Qe(_o[e].replace(/ hook$/, ""));
    y(
      `${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Re = (e) => (t, n = ee) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Ht || e === "sp") && Vn(e, (...o) => t(...o), n)
), tl = Re("bm"), nl = Re("m"), ol = Re("bu"), rl = Re("u"), il = Re("bum"), ri = Re("um"), sl = Re("sp"), ll = Re(
  "rtg"
), cl = Re(
  "rtc"
);
function ul(e, t = ee) {
  Vn("ec", e, t);
}
const Xn = (e) => e ? Ni(e) ? Co(e) || e.proxy : Xn(e.parent) : null, it = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ W(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => a.NODE_ENV !== "production" ? Tt(e.props) : e.props,
    $attrs: (e) => a.NODE_ENV !== "production" ? Tt(e.attrs) : e.attrs,
    $slots: (e) => a.NODE_ENV !== "production" ? Tt(e.slots) : e.slots,
    $refs: (e) => a.NODE_ENV !== "production" ? Tt(e.refs) : e.refs,
    $parent: (e) => Xn(e.parent),
    $root: (e) => Xn(e.root),
    $emit: (e) => e.emit,
    $options: (e) => vo(e),
    $forceUpdate: (e) => e.f || (e.f = () => wn(e.update)),
    $nextTick: (e) => e.n || (e.n = xs.bind(e.proxy)),
    $watch: (e) => Xs.bind(e)
  })
), yo = (e) => e === "_" || e === "$", Fn = (e, t) => e !== K && !e.__isScriptSetup && M(e, t), ii = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: r, props: i, accessCache: l, type: c, appContext: f } = e;
    if (a.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let d;
    if (t[0] !== "$") {
      const D = l[t];
      if (D !== void 0)
        switch (D) {
          case 1:
            return o[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (Fn(o, t))
          return l[t] = 1, o[t];
        if (r !== K && M(r, t))
          return l[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && M(d, t)
        )
          return l[t] = 3, i[t];
        if (n !== K && M(n, t))
          return l[t] = 4, n[t];
        Qn && (l[t] = 0);
      }
    }
    const m = it[t];
    let p, b;
    if (m)
      return t === "$attrs" ? (te(e, "get", t), a.NODE_ENV !== "production" && dn()) : a.NODE_ENV !== "production" && t === "$slots" && te(e, "get", t), m(e);
    if (
      // css module (injected by vue-loader)
      (p = c.__cssModules) && (p = p[t])
    )
      return p;
    if (n !== K && M(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      b = f.config.globalProperties, M(b, t)
    )
      return b[t];
    a.NODE_ENV !== "production" && fe && (!z(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== K && yo(t[0]) && M(r, t) ? y(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === fe && y(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: i } = e;
    return Fn(r, t) ? (r[t] = n, !0) : a.NODE_ENV !== "production" && r.__isScriptSetup && M(r, t) ? (y(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== K && M(o, t) ? (o[t] = n, !0) : M(e.props, t) ? (a.NODE_ENV !== "production" && y(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (a.NODE_ENV !== "production" && y(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (a.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(i, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: i }
  }, l) {
    let c;
    return !!n[l] || e !== K && M(e, l) || Fn(t, l) || (c = i[0]) && M(c, l) || M(o, l) || M(it, l) || M(r.config.globalProperties, l);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : M(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
a.NODE_ENV !== "production" && (ii.ownKeys = (e) => (y(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function fl(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(it).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => it[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Q
    });
  }), t;
}
function al(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: Q
    });
  });
}
function dl(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(A(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (yo(o[0])) {
        y(
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
        set: Q
      });
    }
  });
}
function zo(e) {
  return T(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function pl() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? y(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Qn = !0;
function hl(e) {
  const t = vo(e), n = e.proxy, o = e.ctx;
  Qn = !1, t.beforeCreate && Jo(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: l,
    watch: c,
    provide: f,
    inject: d,
    // lifecycle
    created: m,
    beforeMount: p,
    mounted: b,
    beforeUpdate: D,
    updated: H,
    activated: S,
    deactivated: q,
    beforeDestroy: Z,
    beforeUnmount: Ne,
    destroyed: L,
    unmounted: be,
    render: I,
    renderTracked: Te,
    renderTriggered: Oe,
    errorCaptured: ae,
    serverPrefetch: ce,
    // public API
    expose: $e,
    inheritAttrs: Se,
    // assets
    components: de,
    directives: kt,
    filters: To
  } = t, je = a.NODE_ENV !== "production" ? pl() : null;
  if (a.NODE_ENV !== "production") {
    const [j] = e.propsOptions;
    if (j)
      for (const F in j)
        je("Props", F);
  }
  if (d && ml(d, o, je), l)
    for (const j in l) {
      const F = l[j];
      $(F) ? (a.NODE_ENV !== "production" ? Object.defineProperty(o, j, {
        value: F.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[j] = F.bind(n), a.NODE_ENV !== "production" && je("Methods", j)) : a.NODE_ENV !== "production" && y(
        `Method "${j}" has type "${typeof F}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (r) {
    a.NODE_ENV !== "production" && !$(r) && y(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const j = r.call(n, n);
    if (a.NODE_ENV !== "production" && lo(j) && y(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !k(j))
      a.NODE_ENV !== "production" && y("data() should return an object.");
    else if (e.data = mo(j), a.NODE_ENV !== "production")
      for (const F in j)
        je("Data", F), yo(F[0]) || Object.defineProperty(o, F, {
          configurable: !0,
          enumerable: !0,
          get: () => j[F],
          set: Q
        });
  }
  if (Qn = !0, i)
    for (const j in i) {
      const F = i[j], ye = $(F) ? F.bind(n, n) : $(F.get) ? F.get.bind(n, n) : Q;
      a.NODE_ENV !== "production" && ye === Q && y(`Computed property "${j}" has no getter.`);
      const In = !$(F) && $(F.set) ? F.set.bind(n) : a.NODE_ENV !== "production" ? () => {
        y(
          `Write operation failed: computed property "${j}" is readonly.`
        );
      } : Q, vt = tc({
        get: ye,
        set: In
      });
      Object.defineProperty(o, j, {
        enumerable: !0,
        configurable: !0,
        get: () => vt.value,
        set: (dt) => vt.value = dt
      }), a.NODE_ENV !== "production" && je("Computed", j);
    }
  if (c)
    for (const j in c)
      si(c[j], o, n, j);
  if (f) {
    const j = $(f) ? f.call(n) : f;
    Reflect.ownKeys(j).forEach((F) => {
      Ol(F, j[F]);
    });
  }
  m && Jo(m, e, "c");
  function se(j, F) {
    T(F) ? F.forEach((ye) => j(ye.bind(n))) : F && j(F.bind(n));
  }
  if (se(tl, p), se(nl, b), se(ol, D), se(rl, H), se(Qs, S), se(Gs, q), se(ul, ae), se(cl, Te), se(ll, Oe), se(il, Ne), se(ri, be), se(sl, ce), T($e))
    if ($e.length) {
      const j = e.exposed || (e.exposed = {});
      $e.forEach((F) => {
        Object.defineProperty(j, F, {
          get: () => n[F],
          set: (ye) => n[F] = ye
        });
      });
    } else
      e.exposed || (e.exposed = {});
  I && e.render === Q && (e.render = I), Se != null && (e.inheritAttrs = Se), de && (e.components = de), kt && (e.directives = kt);
}
function ml(e, t, n = Q) {
  T(e) && (e = Gn(e));
  for (const o in e) {
    const r = e[o];
    let i;
    k(r) ? "default" in r ? i = nn(
      r.from || o,
      r.default,
      !0
      /* treat default function as factory */
    ) : i = nn(r.from || o) : i = nn(r), X(i) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : t[o] = i, a.NODE_ENV !== "production" && n("Inject", o);
  }
}
function Jo(e, t, n) {
  _e(
    T(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function si(e, t, n, o) {
  const r = o.includes(".") ? ei(n, o) : () => n[o];
  if (z(e)) {
    const i = t[e];
    $(i) ? jn(r, i) : a.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e}"`, i);
  } else if ($(e))
    jn(r, e.bind(n));
  else if (k(e))
    if (T(e))
      e.forEach((i) => si(i, t, n, o));
    else {
      const i = $(e.handler) ? e.handler.bind(n) : t[e.handler];
      $(i) ? jn(r, i, e) : a.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e.handler}"`, i);
    }
  else
    a.NODE_ENV !== "production" && y(`Invalid watch option: "${o}"`, e);
}
function vo(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: l }
  } = e.appContext, c = i.get(t);
  let f;
  return c ? f = c : !r.length && !n && !o ? f = t : (f = {}, r.length && r.forEach(
    (d) => pn(f, d, l, !0)
  ), pn(f, t, l)), k(t) && i.set(t, f), f;
}
function pn(e, t, n, o = !1) {
  const { mixins: r, extends: i } = t;
  i && pn(e, i, n, !0), r && r.forEach(
    (l) => pn(e, l, n, !0)
  );
  for (const l in t)
    if (o && l === "expose")
      a.NODE_ENV !== "production" && y(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = gl[l] || n && n[l];
      e[l] = c ? c(e[l], t[l]) : t[l];
    }
  return e;
}
const gl = {
  data: Yo,
  props: Zo,
  emits: Zo,
  // objects
  methods: It,
  computed: It,
  // lifecycle
  beforeCreate: re,
  created: re,
  beforeMount: re,
  mounted: re,
  beforeUpdate: re,
  updated: re,
  beforeDestroy: re,
  beforeUnmount: re,
  destroyed: re,
  unmounted: re,
  activated: re,
  deactivated: re,
  errorCaptured: re,
  serverPrefetch: re,
  // assets
  components: It,
  directives: It,
  // watch
  watch: El,
  // provide / inject
  provide: Yo,
  inject: _l
};
function Yo(e, t) {
  return t ? e ? function() {
    return W(
      $(e) ? e.call(this, this) : e,
      $(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function _l(e, t) {
  return It(Gn(e), Gn(t));
}
function Gn(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function re(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function It(e, t) {
  return e ? W(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Zo(e, t) {
  return e ? T(e) && T(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : W(
    /* @__PURE__ */ Object.create(null),
    zo(e),
    zo(t ?? {})
  ) : t;
}
function El(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = W(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = re(e[o], t[o]);
  return n;
}
function li() {
  return {
    app: null,
    config: {
      isNativeTag: gr,
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
let Nl = 0;
function bl(e, t) {
  return function(o, r = null) {
    $(o) || (o = W({}, o)), r != null && !k(r) && (a.NODE_ENV !== "production" && y("root props passed to app.mount() must be an object."), r = null);
    const i = li();
    a.NODE_ENV !== "production" && Object.defineProperty(i.config, "unwrapInjectedRef", {
      get() {
        return !0;
      },
      set() {
        y(
          "app.config.unwrapInjectedRef has been deprecated. 3.3 now always unwraps injected refs in Options API."
        );
      }
    });
    const l = /* @__PURE__ */ new WeakSet();
    let c = !1;
    const f = i.app = {
      _uid: Nl++,
      _component: o,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: sr,
      get config() {
        return i.config;
      },
      set config(d) {
        a.NODE_ENV !== "production" && y(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...m) {
        return l.has(d) ? a.NODE_ENV !== "production" && y("Plugin has already been applied to target app.") : d && $(d.install) ? (l.add(d), d.install(f, ...m)) : $(d) ? (l.add(d), d(f, ...m)) : a.NODE_ENV !== "production" && y(
          'A plugin must either be a function or an object with an "install" function.'
        ), f;
      },
      mixin(d) {
        return i.mixins.includes(d) ? a.NODE_ENV !== "production" && y(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : i.mixins.push(d), f;
      },
      component(d, m) {
        return a.NODE_ENV !== "production" && oo(d, i.config), m ? (a.NODE_ENV !== "production" && i.components[d] && y(`Component "${d}" has already been registered in target app.`), i.components[d] = m, f) : i.components[d];
      },
      directive(d, m) {
        return a.NODE_ENV !== "production" && ti(d), m ? (a.NODE_ENV !== "production" && i.directives[d] && y(`Directive "${d}" has already been registered in target app.`), i.directives[d] = m, f) : i.directives[d];
      },
      mount(d, m, p) {
        if (c)
          a.NODE_ENV !== "production" && y(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          a.NODE_ENV !== "production" && d.__vue_app__ && y(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const b = ke(o, r);
          return b.appContext = i, a.NODE_ENV !== "production" && (i.reload = () => {
            e(Je(b), d, p);
          }), m && t ? t(b, d) : e(b, d, p), c = !0, f._container = d, d.__vue_app__ = f, a.NODE_ENV !== "production" && (f._instance = b.component, As(f, sr)), Co(b.component) || b.component.proxy;
        }
      },
      unmount() {
        c ? (e(null, f._container), a.NODE_ENV !== "production" && (f._instance = null, Ms(f)), delete f._container.__vue_app__) : a.NODE_ENV !== "production" && y("Cannot unmount an app that is not mounted.");
      },
      provide(d, m) {
        return a.NODE_ENV !== "production" && d in i.provides && y(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ), i.provides[d] = m, f;
      },
      runWithContext(d) {
        hn = f;
        try {
          return d();
        } finally {
          hn = null;
        }
      }
    };
    return f;
  };
}
let hn = null;
function Ol(e, t) {
  if (!ee)
    a.NODE_ENV !== "production" && y("provide() can only be used inside setup().");
  else {
    let n = ee.provides;
    const o = ee.parent && ee.parent.provides;
    o === n && (n = ee.provides = Object.create(o)), n[e] = t;
  }
}
function nn(e, t, n = !1) {
  const o = ee || fe;
  if (o || hn) {
    const r = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : hn._context.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && $(t) ? t.call(o && o.proxy) : t;
    a.NODE_ENV !== "production" && y(`injection "${String(e)}" not found.`);
  } else
    a.NODE_ENV !== "production" && y("inject() can only be used inside setup() or functional components.");
}
function yl(e, t, n, o = !1) {
  const r = {}, i = {};
  cn(i, Cn, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), ci(e, t, r, i);
  for (const l in e.propsOptions[0])
    l in r || (r[l] = void 0);
  a.NODE_ENV !== "production" && fi(t || {}, r, e), n ? e.props = o ? r : as(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function vl(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function wl(e, t, n, o) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: l }
  } = e, c = A(r), [f] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(a.NODE_ENV !== "production" && vl(e)) && (o || l > 0) && !(l & 16)
  ) {
    if (l & 8) {
      const m = e.vnode.dynamicProps;
      for (let p = 0; p < m.length; p++) {
        let b = m[p];
        if (xn(e.emitsOptions, b))
          continue;
        const D = t[b];
        if (f)
          if (M(i, b))
            D !== i[b] && (i[b] = D, d = !0);
          else {
            const H = Ot(b);
            r[H] = eo(
              f,
              c,
              H,
              D,
              e,
              !1
              /* isAbsent */
            );
          }
        else
          D !== i[b] && (i[b] = D, d = !0);
      }
    }
  } else {
    ci(e, t, r, i) && (d = !0);
    let m;
    for (const p in c)
      (!t || // for camelCase
      !M(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((m = We(p)) === p || !M(t, m))) && (f ? n && // for camelCase
      (n[p] !== void 0 || // for kebab-case
      n[m] !== void 0) && (r[p] = eo(
        f,
        c,
        p,
        void 0,
        e,
        !0
        /* isAbsent */
      )) : delete r[p]);
    if (i !== c)
      for (const p in i)
        (!t || !M(t, p)) && (delete i[p], d = !0);
  }
  d && Ce(e, "set", "$attrs"), a.NODE_ENV !== "production" && fi(t || {}, r, e);
}
function ci(e, t, n, o) {
  const [r, i] = e.propsOptions;
  let l = !1, c;
  if (t)
    for (let f in t) {
      if (Qt(f))
        continue;
      const d = t[f];
      let m;
      r && M(r, m = Ot(f)) ? !i || !i.includes(m) ? n[m] = d : (c || (c = {}))[m] = d : xn(e.emitsOptions, f) || (!(f in o) || d !== o[f]) && (o[f] = d, l = !0);
    }
  if (i) {
    const f = A(n), d = c || K;
    for (let m = 0; m < i.length; m++) {
      const p = i[m];
      n[p] = eo(
        r,
        f,
        p,
        d[p],
        e,
        !M(d, p)
      );
    }
  }
  return l;
}
function eo(e, t, n, o, r, i) {
  const l = e[n];
  if (l != null) {
    const c = M(l, "default");
    if (c && o === void 0) {
      const f = l.default;
      if (l.type !== Function && !l.skipFactory && $(f)) {
        const { propsDefaults: d } = r;
        n in d ? o = d[n] : (yt(r), o = d[n] = f.call(
          null,
          t
        ), st());
      } else
        o = f;
    }
    l[
      0
      /* shouldCast */
    ] && (i && !c ? o = !1 : l[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === We(n)) && (o = !0));
  }
  return o;
}
function ui(e, t, n = !1) {
  const o = t.propsCache, r = o.get(e);
  if (r)
    return r;
  const i = e.props, l = {}, c = [];
  let f = !1;
  if (!$(e)) {
    const m = (p) => {
      f = !0;
      const [b, D] = ui(p, t, !0);
      W(l, b), D && c.push(...D);
    };
    !n && t.mixins.length && t.mixins.forEach(m), e.extends && m(e.extends), e.mixins && e.mixins.forEach(m);
  }
  if (!i && !f)
    return k(e) && o.set(e, Nt), Nt;
  if (T(i))
    for (let m = 0; m < i.length; m++) {
      a.NODE_ENV !== "production" && !z(i[m]) && y("props must be strings when using array syntax.", i[m]);
      const p = Ot(i[m]);
      Xo(p) && (l[p] = K);
    }
  else if (i) {
    a.NODE_ENV !== "production" && !k(i) && y("invalid props options", i);
    for (const m in i) {
      const p = Ot(m);
      if (Xo(p)) {
        const b = i[m], D = l[p] = T(b) || $(b) ? { type: b } : W({}, b);
        if (D) {
          const H = Go(Boolean, D.type), S = Go(String, D.type);
          D[
            0
            /* shouldCast */
          ] = H > -1, D[
            1
            /* shouldCastTrue */
          ] = S < 0 || H < S, (H > -1 || M(D, "default")) && c.push(p);
        }
      }
    }
  }
  const d = [l, c];
  return k(e) && o.set(e, d), d;
}
function Xo(e) {
  return e[0] !== "$" ? !0 : (a.NODE_ENV !== "production" && y(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function to(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function Qo(e, t) {
  return to(e) === to(t);
}
function Go(e, t) {
  return T(t) ? t.findIndex((n) => Qo(n, e)) : $(t) && Qo(t, e) ? 0 : -1;
}
function fi(e, t, n) {
  const o = A(t), r = n.propsOptions[0];
  for (const i in r) {
    let l = r[i];
    l != null && xl(
      i,
      o[i],
      l,
      !M(e, i) && !M(e, We(i))
    );
  }
}
function xl(e, t, n, o) {
  const { type: r, required: i, validator: l, skipCheck: c } = n;
  if (i && o) {
    y('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (r != null && r !== !0 && !c) {
      let f = !1;
      const d = T(r) ? r : [r], m = [];
      for (let p = 0; p < d.length && !f; p++) {
        const { valid: b, expectedType: D } = Vl(t, d[p]);
        m.push(D || ""), f = b;
      }
      if (!f) {
        y(Cl(e, t, m));
        return;
      }
    }
    l && !l(t) && y('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Dl = /* @__PURE__ */ Ye(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Vl(e, t) {
  let n;
  const o = to(t);
  if (Dl(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = k(e) : o === "Array" ? n = T(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Cl(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Nn).join(" | ")}`;
  const r = n[0], i = co(t), l = er(t, r), c = er(t, i);
  return n.length === 1 && tr(r) && !Tl(r, i) && (o += ` with value ${l}`), o += `, got ${i} `, tr(i) && (o += `with value ${c}.`), o;
}
function er(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function tr(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Tl(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const ai = (e) => e[0] === "_" || e === "$stable", wo = (e) => T(e) ? e.map(me) : [me(e)], $l = (e, t, n) => {
  if (t._n)
    return t;
  const o = Bs((...r) => (a.NODE_ENV !== "production" && ee && y(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), wo(t(...r))), n);
  return o._c = !1, o;
}, di = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (ai(r))
      continue;
    const i = e[r];
    if ($(i))
      t[r] = $l(r, i, o);
    else if (i != null) {
      a.NODE_ENV !== "production" && y(
        `Non-function value encountered for slot "${r}". Prefer function slots for better performance.`
      );
      const l = wo(i);
      t[r] = () => l;
    }
  }
}, pi = (e, t) => {
  a.NODE_ENV !== "production" && !Oo(e.vnode) && y(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = wo(t);
  e.slots.default = () => n;
}, Il = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = A(t), cn(t, "_", n)) : di(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && pi(e, t);
  cn(e.slots, Cn, 1);
}, Pl = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let i = !0, l = K;
  if (o.shapeFlag & 32) {
    const c = t._;
    c ? a.NODE_ENV !== "production" && rt ? (W(r, t), Ce(e, "set", "$slots")) : n && c === 1 ? i = !1 : (W(r, t), !n && c === 1 && delete r._) : (i = !t.$stable, di(t, r)), l = t;
  } else
    t && (pi(e, t), l = { default: 1 });
  if (i)
    for (const c in r)
      !ai(c) && l[c] == null && delete r[c];
};
function no(e, t, n, o, r = !1) {
  if (T(e)) {
    e.forEach(
      (b, D) => no(
        b,
        t && (T(t) ? t[D] : t),
        n,
        o,
        r
      )
    );
    return;
  }
  if (tn(o) && !r)
    return;
  const i = o.shapeFlag & 4 ? Co(o.component) || o.component.proxy : o.el, l = r ? null : i, { i: c, r: f } = e;
  if (a.NODE_ENV !== "production" && !c) {
    y(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const d = t && t.r, m = c.refs === K ? c.refs = {} : c.refs, p = c.setupState;
  if (d != null && d !== f && (z(d) ? (m[d] = null, M(p, d) && (p[d] = null)) : X(d) && (d.value = null)), $(f))
    Me(f, c, 12, [l, m]);
  else {
    const b = z(f), D = X(f);
    if (b || D) {
      const H = () => {
        if (e.f) {
          const S = b ? M(p, f) ? p[f] : m[f] : f.value;
          r ? T(S) && so(S, i) : T(S) ? S.includes(i) || S.push(i) : b ? (m[f] = [i], M(p, f) && (p[f] = m[f])) : (f.value = [i], e.k && (m[e.k] = f.value));
        } else
          b ? (m[f] = l, M(p, f) && (p[f] = l)) : D ? (f.value = l, e.k && (m[e.k] = l)) : a.NODE_ENV !== "production" && y("Invalid template ref type:", f, `(${typeof f})`);
      };
      l ? (H.id = -1, le(H, n)) : H();
    } else
      a.NODE_ENV !== "production" && y("Invalid template ref type:", f, `(${typeof f})`);
  }
}
let Dt, Be;
function Pe(e, t) {
  e.appContext.config.performance && mn() && Be.mark(`vue-${t}-${e.uid}`), a.NODE_ENV !== "production" && Fs(e, t, mn() ? Be.now() : Date.now());
}
function Ae(e, t) {
  if (e.appContext.config.performance && mn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    Be.mark(o), Be.measure(
      `<${Tn(e, e.type)}> ${t}`,
      n,
      o
    ), Be.clearMarks(n), Be.clearMarks(o);
  }
  a.NODE_ENV !== "production" && Hs(e, t, mn() ? Be.now() : Date.now());
}
function mn() {
  return Dt !== void 0 || (typeof window < "u" && window.performance ? (Dt = !0, Be = window.performance) : Dt = !1), Dt;
}
function Al() {
  const e = [];
  if (a.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const le = Zs;
function Ml(e) {
  return Rl(e);
}
function Rl(e, t) {
  Al();
  const n = un();
  n.__VUE__ = !0, a.NODE_ENV !== "production" && qr(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: r,
    patchProp: i,
    createElement: l,
    createText: c,
    createComment: f,
    setText: d,
    setElementText: m,
    parentNode: p,
    nextSibling: b,
    setScopeId: D = Q,
    insertStaticContent: H
  } = e, S = (s, u, h, g = null, _ = null, O = null, w = !1, N = null, v = a.NODE_ENV !== "production" && rt ? !1 : !!u.dynamicChildren) => {
    if (s === u)
      return;
    s && !Vt(s, u) && (g = Wt(s), Fe(s, _, O, !0), s = null), u.patchFlag === -2 && (v = !1, u.dynamicChildren = null);
    const { type: E, ref: V, shapeFlag: x } = u;
    switch (E) {
      case Kt:
        q(s, u, h, g);
        break;
      case Ee:
        Z(s, u, h, g);
        break;
      case rn:
        s == null ? Ne(u, h, g, w) : a.NODE_ENV !== "production" && L(s, u, h, w);
        break;
      case ue:
        kt(
          s,
          u,
          h,
          g,
          _,
          O,
          w,
          N,
          v
        );
        break;
      default:
        x & 1 ? Te(
          s,
          u,
          h,
          g,
          _,
          O,
          w,
          N,
          v
        ) : x & 6 ? To(
          s,
          u,
          h,
          g,
          _,
          O,
          w,
          N,
          v
        ) : x & 64 || x & 128 ? E.process(
          s,
          u,
          h,
          g,
          _,
          O,
          w,
          N,
          v,
          pt
        ) : a.NODE_ENV !== "production" && y("Invalid VNode type:", E, `(${typeof E})`);
    }
    V != null && _ && no(V, s && s.ref, O, u || s, !u);
  }, q = (s, u, h, g) => {
    if (s == null)
      o(
        u.el = c(u.children),
        h,
        g
      );
    else {
      const _ = u.el = s.el;
      u.children !== s.children && d(_, u.children);
    }
  }, Z = (s, u, h, g) => {
    s == null ? o(
      u.el = f(u.children || ""),
      h,
      g
    ) : u.el = s.el;
  }, Ne = (s, u, h, g) => {
    [s.el, s.anchor] = H(
      s.children,
      u,
      h,
      g,
      s.el,
      s.anchor
    );
  }, L = (s, u, h, g) => {
    if (u.children !== s.children) {
      const _ = b(s.anchor);
      I(s), [u.el, u.anchor] = H(
        u.children,
        h,
        _,
        g
      );
    } else
      u.el = s.el, u.anchor = s.anchor;
  }, be = ({ el: s, anchor: u }, h, g) => {
    let _;
    for (; s && s !== u; )
      _ = b(s), o(s, h, g), s = _;
    o(u, h, g);
  }, I = ({ el: s, anchor: u }) => {
    let h;
    for (; s && s !== u; )
      h = b(s), r(s), s = h;
    r(u);
  }, Te = (s, u, h, g, _, O, w, N, v) => {
    w = w || u.type === "svg", s == null ? Oe(
      u,
      h,
      g,
      _,
      O,
      w,
      N,
      v
    ) : $e(
      s,
      u,
      _,
      O,
      w,
      N,
      v
    );
  }, Oe = (s, u, h, g, _, O, w, N) => {
    let v, E;
    const { type: V, props: x, shapeFlag: C, transition: P, dirs: R } = s;
    if (v = s.el = l(
      s.type,
      O,
      x && x.is,
      x
    ), C & 8 ? m(v, s.children) : C & 16 && ce(
      s.children,
      v,
      null,
      g,
      _,
      O && V !== "foreignObject",
      w,
      N
    ), R && Ze(s, null, g, "created"), ae(v, s, s.scopeId, w, g), x) {
      for (const U in x)
        U !== "value" && !Qt(U) && i(
          v,
          U,
          null,
          x[U],
          O,
          s.children,
          g,
          _,
          Ie
        );
      "value" in x && i(v, "value", null, x.value), (E = x.onVnodeBeforeMount) && we(E, g, s);
    }
    a.NODE_ENV !== "production" && (Object.defineProperty(v, "__vnode", {
      value: s,
      enumerable: !1
    }), Object.defineProperty(v, "__vueParentComponent", {
      value: g,
      enumerable: !1
    })), R && Ze(s, null, g, "beforeMount");
    const B = Sl(_, P);
    B && P.beforeEnter(v), o(v, u, h), ((E = x && x.onVnodeMounted) || B || R) && le(() => {
      E && we(E, g, s), B && P.enter(v), R && Ze(s, null, g, "mounted");
    }, _);
  }, ae = (s, u, h, g, _) => {
    if (h && D(s, h), g)
      for (let O = 0; O < g.length; O++)
        D(s, g[O]);
    if (_) {
      let O = _.subTree;
      if (a.NODE_ENV !== "production" && O.patchFlag > 0 && O.patchFlag & 2048 && (O = Qr(O.children) || O), u === O) {
        const w = _.vnode;
        ae(
          s,
          w,
          w.scopeId,
          w.slotScopeIds,
          _.parent
        );
      }
    }
  }, ce = (s, u, h, g, _, O, w, N, v = 0) => {
    for (let E = v; E < s.length; E++) {
      const V = s[E] = N ? Ue(s[E]) : me(s[E]);
      S(
        null,
        V,
        u,
        h,
        g,
        _,
        O,
        w,
        N
      );
    }
  }, $e = (s, u, h, g, _, O, w) => {
    const N = u.el = s.el;
    let { patchFlag: v, dynamicChildren: E, dirs: V } = u;
    v |= s.patchFlag & 16;
    const x = s.props || K, C = u.props || K;
    let P;
    h && Xe(h, !1), (P = C.onVnodeBeforeUpdate) && we(P, h, u, s), V && Ze(u, s, h, "beforeUpdate"), h && Xe(h, !0), a.NODE_ENV !== "production" && rt && (v = 0, w = !1, E = null);
    const R = _ && u.type !== "foreignObject";
    if (E ? (Se(
      s.dynamicChildren,
      E,
      N,
      h,
      g,
      R,
      O
    ), a.NODE_ENV !== "production" && on(s, u)) : w || ye(
      s,
      u,
      N,
      null,
      h,
      g,
      R,
      O,
      !1
    ), v > 0) {
      if (v & 16)
        de(
          N,
          u,
          x,
          C,
          h,
          g,
          _
        );
      else if (v & 2 && x.class !== C.class && i(N, "class", null, C.class, _), v & 4 && i(N, "style", x.style, C.style, _), v & 8) {
        const B = u.dynamicProps;
        for (let U = 0; U < B.length; U++) {
          const J = B[U], pe = x[J], ht = C[J];
          (ht !== pe || J === "value") && i(
            N,
            J,
            pe,
            ht,
            _,
            s.children,
            h,
            g,
            Ie
          );
        }
      }
      v & 1 && s.children !== u.children && m(N, u.children);
    } else
      !w && E == null && de(
        N,
        u,
        x,
        C,
        h,
        g,
        _
      );
    ((P = C.onVnodeUpdated) || V) && le(() => {
      P && we(P, h, u, s), V && Ze(u, s, h, "updated");
    }, g);
  }, Se = (s, u, h, g, _, O, w) => {
    for (let N = 0; N < u.length; N++) {
      const v = s[N], E = u[N], V = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        v.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (v.type === ue || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Vt(v, E) || // - In the case of a component, it could contain anything.
        v.shapeFlag & 70) ? p(v.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      S(
        v,
        E,
        V,
        null,
        g,
        _,
        O,
        w,
        !0
      );
    }
  }, de = (s, u, h, g, _, O, w) => {
    if (h !== g) {
      if (h !== K)
        for (const N in h)
          !Qt(N) && !(N in g) && i(
            s,
            N,
            h[N],
            null,
            w,
            u.children,
            _,
            O,
            Ie
          );
      for (const N in g) {
        if (Qt(N))
          continue;
        const v = g[N], E = h[N];
        v !== E && N !== "value" && i(
          s,
          N,
          E,
          v,
          w,
          u.children,
          _,
          O,
          Ie
        );
      }
      "value" in g && i(s, "value", h.value, g.value);
    }
  }, kt = (s, u, h, g, _, O, w, N, v) => {
    const E = u.el = s ? s.el : c(""), V = u.anchor = s ? s.anchor : c("");
    let { patchFlag: x, dynamicChildren: C, slotScopeIds: P } = u;
    a.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (rt || x & 2048) && (x = 0, v = !1, C = null), P && (N = N ? N.concat(P) : P), s == null ? (o(E, h, g), o(V, h, g), ce(
      u.children,
      h,
      V,
      _,
      O,
      w,
      N,
      v
    )) : x > 0 && x & 64 && C && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    s.dynamicChildren ? (Se(
      s.dynamicChildren,
      C,
      h,
      _,
      O,
      w,
      N
    ), a.NODE_ENV !== "production" ? on(s, u) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (u.key != null || _ && u === _.subTree) && on(
        s,
        u,
        !0
        /* shallow */
      )
    )) : ye(
      s,
      u,
      h,
      V,
      _,
      O,
      w,
      N,
      v
    );
  }, To = (s, u, h, g, _, O, w, N, v) => {
    u.slotScopeIds = N, s == null ? u.shapeFlag & 512 ? _.ctx.activate(
      u,
      h,
      g,
      w,
      v
    ) : je(
      u,
      h,
      g,
      _,
      O,
      w,
      v
    ) : se(s, u, v);
  }, je = (s, u, h, g, _, O, w) => {
    const N = s.component = ql(
      s,
      g,
      _
    );
    if (a.NODE_ENV !== "production" && N.type.__hmrId && Ts(N), a.NODE_ENV !== "production" && (Gt(s), Pe(N, "mount")), Oo(s) && (N.ctx.renderer = pt), a.NODE_ENV !== "production" && Pe(N, "init"), Jl(N), a.NODE_ENV !== "production" && Ae(N, "init"), N.asyncDep) {
      if (_ && _.registerDep(N, j), !s.el) {
        const v = N.subTree = ke(Ee);
        Z(null, v, u, h);
      }
      return;
    }
    j(
      N,
      s,
      u,
      h,
      _,
      O,
      w
    ), a.NODE_ENV !== "production" && (en(), Ae(N, "mount"));
  }, se = (s, u, h) => {
    const g = u.component = s.component;
    if (qs(s, u, h))
      if (g.asyncDep && !g.asyncResolved) {
        a.NODE_ENV !== "production" && Gt(u), F(g, u, h), a.NODE_ENV !== "production" && en();
        return;
      } else
        g.next = u, Vs(g.update), g.update();
    else
      u.el = s.el, g.vnode = u;
  }, j = (s, u, h, g, _, O, w) => {
    const N = () => {
      if (s.isMounted) {
        let { next: V, bu: x, u: C, parent: P, vnode: R } = s, B = V, U;
        a.NODE_ENV !== "production" && Gt(V || s.vnode), Xe(s, !1), V ? (V.el = R.el, F(s, V, w)) : V = R, x && xt(x), (U = V.props && V.props.onVnodeBeforeUpdate) && we(U, P, V, R), Xe(s, !0), a.NODE_ENV !== "production" && Pe(s, "render");
        const J = Sn(s);
        a.NODE_ENV !== "production" && Ae(s, "render");
        const pe = s.subTree;
        s.subTree = J, a.NODE_ENV !== "production" && Pe(s, "patch"), S(
          pe,
          J,
          // parent may have changed if it's in a teleport
          p(pe.el),
          // anchor may have changed if it's in a fragment
          Wt(pe),
          s,
          _,
          O
        ), a.NODE_ENV !== "production" && Ae(s, "patch"), V.el = J.el, B === null && zs(s, J.el), C && le(C, _), (U = V.props && V.props.onVnodeUpdated) && le(
          () => we(U, P, V, R),
          _
        ), a.NODE_ENV !== "production" && zr(s), a.NODE_ENV !== "production" && en();
      } else {
        let V;
        const { el: x, props: C } = u, { bm: P, m: R, parent: B } = s, U = tn(u);
        if (Xe(s, !1), P && xt(P), !U && (V = C && C.onVnodeBeforeMount) && we(V, B, u), Xe(s, !0), x && Mn) {
          const J = () => {
            a.NODE_ENV !== "production" && Pe(s, "render"), s.subTree = Sn(s), a.NODE_ENV !== "production" && Ae(s, "render"), a.NODE_ENV !== "production" && Pe(s, "hydrate"), Mn(
              x,
              s.subTree,
              s,
              _,
              null
            ), a.NODE_ENV !== "production" && Ae(s, "hydrate");
          };
          U ? u.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !s.isUnmounted && J()
          ) : J();
        } else {
          a.NODE_ENV !== "production" && Pe(s, "render");
          const J = s.subTree = Sn(s);
          a.NODE_ENV !== "production" && Ae(s, "render"), a.NODE_ENV !== "production" && Pe(s, "patch"), S(
            null,
            J,
            h,
            g,
            s,
            _,
            O
          ), a.NODE_ENV !== "production" && Ae(s, "patch"), u.el = J.el;
        }
        if (R && le(R, _), !U && (V = C && C.onVnodeMounted)) {
          const J = u;
          le(
            () => we(V, B, J),
            _
          );
        }
        (u.shapeFlag & 256 || B && tn(B.vnode) && B.vnode.shapeFlag & 256) && s.a && le(s.a, _), s.isMounted = !0, a.NODE_ENV !== "production" && Rs(s), u = h = g = null;
      }
    }, v = s.effect = new po(
      N,
      () => wn(E),
      s.scope
      // track it in component's effect scope
    ), E = s.update = () => v.run();
    E.id = s.uid, Xe(s, !0), a.NODE_ENV !== "production" && (v.onTrack = s.rtc ? (V) => xt(s.rtc, V) : void 0, v.onTrigger = s.rtg ? (V) => xt(s.rtg, V) : void 0, E.ownerInstance = s), E();
  }, F = (s, u, h) => {
    u.component = s;
    const g = s.vnode.props;
    s.vnode = u, s.next = null, wl(s, u.props, g, h), Pl(s, u.children, h), ft(), Ko(), at();
  }, ye = (s, u, h, g, _, O, w, N, v = !1) => {
    const E = s && s.children, V = s ? s.shapeFlag : 0, x = u.children, { patchFlag: C, shapeFlag: P } = u;
    if (C > 0) {
      if (C & 128) {
        vt(
          E,
          x,
          h,
          g,
          _,
          O,
          w,
          N,
          v
        );
        return;
      } else if (C & 256) {
        In(
          E,
          x,
          h,
          g,
          _,
          O,
          w,
          N,
          v
        );
        return;
      }
    }
    P & 8 ? (V & 16 && Ie(E, _, O), x !== E && m(h, x)) : V & 16 ? P & 16 ? vt(
      E,
      x,
      h,
      g,
      _,
      O,
      w,
      N,
      v
    ) : Ie(E, _, O, !0) : (V & 8 && m(h, ""), P & 16 && ce(
      x,
      h,
      g,
      _,
      O,
      w,
      N,
      v
    ));
  }, In = (s, u, h, g, _, O, w, N, v) => {
    s = s || Nt, u = u || Nt;
    const E = s.length, V = u.length, x = Math.min(E, V);
    let C;
    for (C = 0; C < x; C++) {
      const P = u[C] = v ? Ue(u[C]) : me(u[C]);
      S(
        s[C],
        P,
        h,
        null,
        _,
        O,
        w,
        N,
        v
      );
    }
    E > V ? Ie(
      s,
      _,
      O,
      !0,
      !1,
      x
    ) : ce(
      u,
      h,
      g,
      _,
      O,
      w,
      N,
      v,
      x
    );
  }, vt = (s, u, h, g, _, O, w, N, v) => {
    let E = 0;
    const V = u.length;
    let x = s.length - 1, C = V - 1;
    for (; E <= x && E <= C; ) {
      const P = s[E], R = u[E] = v ? Ue(u[E]) : me(u[E]);
      if (Vt(P, R))
        S(
          P,
          R,
          h,
          null,
          _,
          O,
          w,
          N,
          v
        );
      else
        break;
      E++;
    }
    for (; E <= x && E <= C; ) {
      const P = s[x], R = u[C] = v ? Ue(u[C]) : me(u[C]);
      if (Vt(P, R))
        S(
          P,
          R,
          h,
          null,
          _,
          O,
          w,
          N,
          v
        );
      else
        break;
      x--, C--;
    }
    if (E > x) {
      if (E <= C) {
        const P = C + 1, R = P < V ? u[P].el : g;
        for (; E <= C; )
          S(
            null,
            u[E] = v ? Ue(u[E]) : me(u[E]),
            h,
            R,
            _,
            O,
            w,
            N,
            v
          ), E++;
      }
    } else if (E > C)
      for (; E <= x; )
        Fe(s[E], _, O, !0), E++;
    else {
      const P = E, R = E, B = /* @__PURE__ */ new Map();
      for (E = R; E <= C; E++) {
        const oe = u[E] = v ? Ue(u[E]) : me(u[E]);
        oe.key != null && (a.NODE_ENV !== "production" && B.has(oe.key) && y(
          "Duplicate keys found during update:",
          JSON.stringify(oe.key),
          "Make sure keys are unique."
        ), B.set(oe.key, E));
      }
      let U, J = 0;
      const pe = C - R + 1;
      let ht = !1, Io = 0;
      const wt = new Array(pe);
      for (E = 0; E < pe; E++)
        wt[E] = 0;
      for (E = P; E <= x; E++) {
        const oe = s[E];
        if (J >= pe) {
          Fe(oe, _, O, !0);
          continue;
        }
        let ve;
        if (oe.key != null)
          ve = B.get(oe.key);
        else
          for (U = R; U <= C; U++)
            if (wt[U - R] === 0 && Vt(oe, u[U])) {
              ve = U;
              break;
            }
        ve === void 0 ? Fe(oe, _, O, !0) : (wt[ve - R] = E + 1, ve >= Io ? Io = ve : ht = !0, S(
          oe,
          u[ve],
          h,
          null,
          _,
          O,
          w,
          N,
          v
        ), J++);
      }
      const Po = ht ? jl(wt) : Nt;
      for (U = Po.length - 1, E = pe - 1; E >= 0; E--) {
        const oe = R + E, ve = u[oe], Ao = oe + 1 < V ? u[oe + 1].el : g;
        wt[E] === 0 ? S(
          null,
          ve,
          h,
          Ao,
          _,
          O,
          w,
          N,
          v
        ) : ht && (U < 0 || E !== Po[U] ? dt(ve, h, Ao, 2) : U--);
      }
    }
  }, dt = (s, u, h, g, _ = null) => {
    const { el: O, type: w, transition: N, children: v, shapeFlag: E } = s;
    if (E & 6) {
      dt(s.component.subTree, u, h, g);
      return;
    }
    if (E & 128) {
      s.suspense.move(u, h, g);
      return;
    }
    if (E & 64) {
      w.move(s, u, h, pt);
      return;
    }
    if (w === ue) {
      o(O, u, h);
      for (let x = 0; x < v.length; x++)
        dt(v[x], u, h, g);
      o(s.anchor, u, h);
      return;
    }
    if (w === rn) {
      be(s, u, h);
      return;
    }
    if (g !== 2 && E & 1 && N)
      if (g === 0)
        N.beforeEnter(O), o(O, u, h), le(() => N.enter(O), _);
      else {
        const { leave: x, delayLeave: C, afterLeave: P } = N, R = () => o(O, u, h), B = () => {
          x(O, () => {
            R(), P && P();
          });
        };
        C ? C(O, R, B) : B();
      }
    else
      o(O, u, h);
  }, Fe = (s, u, h, g = !1, _ = !1) => {
    const {
      type: O,
      props: w,
      ref: N,
      children: v,
      dynamicChildren: E,
      shapeFlag: V,
      patchFlag: x,
      dirs: C
    } = s;
    if (N != null && no(N, null, h, s, !0), V & 256) {
      u.ctx.deactivate(s);
      return;
    }
    const P = V & 1 && C, R = !tn(s);
    let B;
    if (R && (B = w && w.onVnodeBeforeUnmount) && we(B, u, s), V & 6)
      Di(s.component, h, g);
    else {
      if (V & 128) {
        s.suspense.unmount(h, g);
        return;
      }
      P && Ze(s, null, u, "beforeUnmount"), V & 64 ? s.type.remove(
        s,
        u,
        h,
        _,
        pt,
        g
      ) : E && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (O !== ue || x > 0 && x & 64) ? Ie(
        E,
        u,
        h,
        !1,
        !0
      ) : (O === ue && x & 384 || !_ && V & 16) && Ie(v, u, h), g && Pn(s);
    }
    (R && (B = w && w.onVnodeUnmounted) || P) && le(() => {
      B && we(B, u, s), P && Ze(s, null, u, "unmounted");
    }, h);
  }, Pn = (s) => {
    const { type: u, el: h, anchor: g, transition: _ } = s;
    if (u === ue) {
      a.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048 && _ && !_.persisted ? s.children.forEach((w) => {
        w.type === Ee ? r(w.el) : Pn(w);
      }) : xi(h, g);
      return;
    }
    if (u === rn) {
      I(s);
      return;
    }
    const O = () => {
      r(h), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (s.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: w, delayLeave: N } = _, v = () => w(h, O);
      N ? N(s.el, O, v) : v();
    } else
      O();
  }, xi = (s, u) => {
    let h;
    for (; s !== u; )
      h = b(s), r(s), s = h;
    r(u);
  }, Di = (s, u, h) => {
    a.NODE_ENV !== "production" && s.type.__hmrId && $s(s);
    const { bum: g, scope: _, update: O, subTree: w, um: N } = s;
    g && xt(g), _.stop(), O && (O.active = !1, Fe(w, s, u, h)), N && le(N, u), le(() => {
      s.isUnmounted = !0;
    }, u), u && u.pendingBranch && !u.isUnmounted && s.asyncDep && !s.asyncResolved && s.suspenseId === u.pendingId && (u.deps--, u.deps === 0 && u.resolve()), a.NODE_ENV !== "production" && js(s);
  }, Ie = (s, u, h, g = !1, _ = !1, O = 0) => {
    for (let w = O; w < s.length; w++)
      Fe(s[w], u, h, g, _);
  }, Wt = (s) => s.shapeFlag & 6 ? Wt(s.component.subTree) : s.shapeFlag & 128 ? s.suspense.next() : b(s.anchor || s.el), $o = (s, u, h) => {
    s == null ? u._vnode && Fe(u._vnode, null, null, !0) : S(u._vnode || null, s, u, null, null, null, h), Ko(), Kr(), u._vnode = s;
  }, pt = {
    p: S,
    um: Fe,
    m: dt,
    r: Pn,
    mt: je,
    mc: ce,
    pc: ye,
    pbc: Se,
    n: Wt,
    o: e
  };
  let An, Mn;
  return t && ([An, Mn] = t(
    pt
  )), {
    render: $o,
    hydrate: An,
    createApp: bl($o, An)
  };
}
function Xe({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Sl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function on(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (T(o) && T(r))
    for (let i = 0; i < o.length; i++) {
      const l = o[i];
      let c = r[i];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = r[i] = Ue(r[i]), c.el = l.el), n || on(l, c)), c.type === Kt && (c.el = l.el), a.NODE_ENV !== "production" && c.type === Ee && !c.el && (c.el = l.el);
    }
}
function jl(e) {
  const t = e.slice(), n = [0];
  let o, r, i, l, c;
  const f = e.length;
  for (o = 0; o < f; o++) {
    const d = e[o];
    if (d !== 0) {
      if (r = n[n.length - 1], e[r] < d) {
        t[o] = r, n.push(o);
        continue;
      }
      for (i = 0, l = n.length - 1; i < l; )
        c = i + l >> 1, e[n[c]] < d ? i = c + 1 : l = c;
      d < e[n[i]] && (i > 0 && (t[o] = n[i - 1]), n[i] = o);
    }
  }
  for (i = n.length, l = n[i - 1]; i-- > 0; )
    n[i] = l, l = t[l];
  return n;
}
const Fl = (e) => e.__isTeleport, ue = Symbol.for("v-fgt"), Kt = Symbol.for("v-txt"), Ee = Symbol.for("v-cmt"), rn = Symbol.for("v-stc"), At = [];
let ge = null;
function hi(e = !1) {
  At.push(ge = e ? null : []);
}
function Hl() {
  At.pop(), ge = At[At.length - 1] || null;
}
let Ft = 1;
function nr(e) {
  Ft += e;
}
function Ll(e) {
  return e.dynamicChildren = Ft > 0 ? ge || Nt : null, Hl(), Ft > 0 && ge && ge.push(e), e;
}
function mi(e, t, n, o, r, i) {
  return Ll(
    G(
      e,
      t,
      n,
      o,
      r,
      i,
      !0
      /* isBlock */
    )
  );
}
function xo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Vt(e, t) {
  return a.NODE_ENV !== "production" && t.shapeFlag & 6 && gt.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const Ul = (...e) => _i(
  ...e
), Cn = "__vInternal", gi = ({ key: e }) => e ?? null, sn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? z(e) || X(e) || $(e) ? { i: fe, r: e, k: t, f: !!n } : e : null);
function G(e, t = null, n = null, o = 0, r = null, i = e === ue ? 0 : 1, l = !1, c = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && gi(t),
    ref: t && sn(t),
    scopeId: Dn,
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
    shapeFlag: i,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: fe
  };
  return c ? (Do(f, n), i & 128 && e.normalize(f)) : n && (f.shapeFlag |= z(n) ? 8 : 16), a.NODE_ENV !== "production" && f.key !== f.key && y("VNode created with invalid key (NaN). VNode type:", f.type), Ft > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  ge && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && ge.push(f), f;
}
const ke = a.NODE_ENV !== "production" ? Ul : _i;
function _i(e, t = null, n = null, o = 0, r = null, i = !1) {
  if ((!e || e === Js) && (a.NODE_ENV !== "production" && !e && y(`Invalid vnode type when creating vnode: ${e}.`), e = Ee), xo(e)) {
    const c = Je(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Do(c, n), Ft > 0 && !i && ge && (c.shapeFlag & 6 ? ge[ge.indexOf(e)] = c : ge.push(c)), c.patchFlag |= -2, c;
  }
  if (yi(e) && (e = e.__vccOpts), t) {
    t = Bl(t);
    let { class: c, style: f } = t;
    c && !z(c) && (t.class = ao(c)), k(f) && (zn(f) && !T(f) && (f = W({}, f)), t.style = fo(f));
  }
  const l = z(e) ? 1 : Ys(e) ? 128 : Fl(e) ? 64 : k(e) ? 4 : $(e) ? 2 : 0;
  return a.NODE_ENV !== "production" && l & 4 && zn(e) && (e = A(e), y(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), G(
    e,
    t,
    n,
    o,
    r,
    l,
    i,
    !0
  );
}
function Bl(e) {
  return e ? zn(e) || Cn in e ? W({}, e) : e : null;
}
function Je(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: i, children: l } = e, c = t ? Kl(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && gi(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? T(r) ? r.concat(sn(t)) : [r, sn(t)] : sn(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a.NODE_ENV !== "production" && i === -1 && T(l) ? l.map(Ei) : l,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ue ? i === -1 ? 16 : i | 16 : i,
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
    ssContent: e.ssContent && Je(e.ssContent),
    ssFallback: e.ssFallback && Je(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Ei(e) {
  const t = Je(e);
  return T(e.children) && (t.children = e.children.map(Ei)), t;
}
function ut(e = " ", t = 0) {
  return ke(Kt, null, e, t);
}
function me(e) {
  return e == null || typeof e == "boolean" ? ke(Ee) : T(e) ? ke(
    ue,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? Ue(e) : ke(Kt, null, String(e));
}
function Ue(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Je(e);
}
function Do(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (T(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Do(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(Cn in t) ? t._ctx = fe : r === 3 && fe && (fe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    $(t) ? (t = { default: t, _ctx: fe }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [ut(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Kl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = ao([t.class, o.class]));
      else if (r === "style")
        t.style = fo([t.style, o.style]);
      else if (Ut(r)) {
        const i = t[r], l = o[r];
        l && i !== l && !(T(i) && i.includes(l)) && (t[r] = i ? [].concat(i, l) : l);
      } else
        r !== "" && (t[r] = o[r]);
  }
  return t;
}
function we(e, t, n, o = null) {
  _e(e, t, 7, [
    n,
    o
  ]);
}
const kl = li();
let Wl = 0;
function ql(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || kl, i = {
    uid: Wl++,
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
    scope: new Bi(
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
    propsOptions: ui(o, r),
    emitsOptions: Yr(o, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: K,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: K,
    data: K,
    props: K,
    attrs: K,
    slots: K,
    refs: K,
    setupState: K,
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
  return a.NODE_ENV !== "production" ? i.ctx = fl(i) : i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Us.bind(null, i), e.ce && e.ce(i), i;
}
let ee = null, Vo, mt, or = "__VUE_INSTANCE_SETTERS__";
(mt = un()[or]) || (mt = un()[or] = []), mt.push((e) => ee = e), Vo = (e) => {
  mt.length > 1 ? mt.forEach((t) => t(e)) : mt[0](e);
};
const yt = (e) => {
  Vo(e), e.scope.on();
}, st = () => {
  ee && ee.scope.off(), Vo(null);
}, zl = /* @__PURE__ */ Ye("slot,component");
function oo(e, t) {
  const n = t.isNativeTag || gr;
  (zl(e) || n(e)) && y(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Ni(e) {
  return e.vnode.shapeFlag & 4;
}
let Ht = !1;
function Jl(e, t = !1) {
  Ht = t;
  const { props: n, children: o } = e.vnode, r = Ni(e);
  yl(e, n, r, t), Il(e, o);
  const i = r ? Yl(e, t) : void 0;
  return Ht = !1, i;
}
function Yl(e, t) {
  var n;
  const o = e.type;
  if (a.NODE_ENV !== "production") {
    if (o.name && oo(o.name, e.appContext.config), o.components) {
      const i = Object.keys(o.components);
      for (let l = 0; l < i.length; l++)
        oo(i[l], e.appContext.config);
    }
    if (o.directives) {
      const i = Object.keys(o.directives);
      for (let l = 0; l < i.length; l++)
        ti(i[l]);
    }
    o.compilerOptions && Zl() && y(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Rr(new Proxy(e.ctx, ii)), a.NODE_ENV !== "production" && al(e);
  const { setup: r } = o;
  if (r) {
    const i = e.setupContext = r.length > 1 ? Ql(e) : null;
    yt(e), ft();
    const l = Me(
      r,
      e,
      0,
      [a.NODE_ENV !== "production" ? Tt(e.props) : e.props, i]
    );
    if (at(), st(), lo(l)) {
      if (l.then(st, st), t)
        return l.then((c) => {
          rr(e, c, t);
        }).catch((c) => {
          vn(c, e, 0);
        });
      if (e.asyncDep = l, a.NODE_ENV !== "production" && !e.suspense) {
        const c = (n = o.name) != null ? n : "Anonymous";
        y(
          `Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      rr(e, l, t);
  } else
    bi(e, t);
}
function rr(e, t, n) {
  $(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : k(t) ? (a.NODE_ENV !== "production" && xo(t) && y(
    "setup() should not return VNodes directly - return a render function instead."
  ), a.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Fr(t), a.NODE_ENV !== "production" && dl(e)) : a.NODE_ENV !== "production" && t !== void 0 && y(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), bi(e, n);
}
let ro;
const Zl = () => !ro;
function bi(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && ro && !o.render) {
      const r = o.template || vo(e).template;
      if (r) {
        a.NODE_ENV !== "production" && Pe(e, "compile");
        const { isCustomElement: i, compilerOptions: l } = e.appContext.config, { delimiters: c, compilerOptions: f } = o, d = W(
          W(
            {
              isCustomElement: i,
              delimiters: c
            },
            l
          ),
          f
        );
        o.render = ro(r, d), a.NODE_ENV !== "production" && Ae(e, "compile");
      }
    }
    e.render = o.render || Q;
  }
  {
    yt(e), ft();
    try {
      hl(e);
    } finally {
      at(), st();
    }
  }
  a.NODE_ENV !== "production" && !o.render && e.render === Q && !t && (o.template ? y(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : y("Component is missing template or render function."));
}
function ir(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    a.NODE_ENV !== "production" ? {
      get(t, n) {
        return dn(), te(e, "get", "$attrs"), t[n];
      },
      set() {
        return y("setupContext.attrs is readonly."), !1;
      },
      deleteProperty() {
        return y("setupContext.attrs is readonly."), !1;
      }
    } : {
      get(t, n) {
        return te(e, "get", "$attrs"), t[n];
      }
    }
  ));
}
function Xl(e) {
  return e.slotsProxy || (e.slotsProxy = new Proxy(e.slots, {
    get(t, n) {
      return te(e, "get", "$slots"), t[n];
    }
  }));
}
function Ql(e) {
  const t = (n) => {
    if (a.NODE_ENV !== "production" && (e.exposed && y("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (T(n) ? o = "array" : X(n) && (o = "ref")), o !== "object" && y(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  return a.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return ir(e);
    },
    get slots() {
      return Xl(e);
    },
    get emit() {
      return (n, ...o) => e.emit(n, ...o);
    },
    expose: t
  }) : {
    get attrs() {
      return ir(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Co(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Fr(Rr(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in it)
          return it[n](e);
      },
      has(t, n) {
        return n in t || n in it;
      }
    }));
}
const Gl = /(?:^|[-_])(\w)/g, ec = (e) => e.replace(Gl, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Oi(e, t = !0) {
  return $(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Tn(e, t, n = !1) {
  let o = Oi(t);
  if (!o && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (o = r[1]);
  }
  if (!o && e && e.parent) {
    const r = (i) => {
      for (const l in i)
        if (i[l] === t)
          return l;
    };
    o = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return o ? ec(o) : n ? "App" : "Anonymous";
}
function yi(e) {
  return $(e) && "__vccOpts" in e;
}
const tc = (e, t) => Es(e, t, Ht), nc = Symbol.for("v-scx"), oc = () => {
  {
    const e = nn(nc);
    return e || a.NODE_ENV !== "production" && y(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Hn(e) {
  return !!(e && e.__v_isShallow);
}
function rc() {
  if (a.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, r = {
    header(p) {
      return k(p) ? p.__isVue ? ["div", e, "VueInstance"] : X(p) ? [
        "div",
        {},
        ["span", e, m(p)],
        "<",
        c(p.value),
        ">"
      ] : nt(p) ? [
        "div",
        {},
        ["span", e, Hn(p) ? "ShallowReactive" : "Reactive"],
        "<",
        c(p),
        `>${ze(p) ? " (readonly)" : ""}`
      ] : ze(p) ? [
        "div",
        {},
        ["span", e, Hn(p) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(p),
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
          ...i(p.$)
        ];
    }
  };
  function i(p) {
    const b = [];
    p.type.props && p.props && b.push(l("props", A(p.props))), p.setupState !== K && b.push(l("setup", p.setupState)), p.data !== K && b.push(l("data", A(p.data)));
    const D = f(p, "computed");
    D && b.push(l("computed", D));
    const H = f(p, "inject");
    return H && b.push(l("injected", H)), b.push([
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
    ]), b;
  }
  function l(p, b) {
    return b = W({}, b), Object.keys(b).length ? [
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
        ...Object.keys(b).map((D) => [
          "div",
          {},
          ["span", o, D + ": "],
          c(b[D], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(p, b = !0) {
    return typeof p == "number" ? ["span", t, p] : typeof p == "string" ? ["span", n, JSON.stringify(p)] : typeof p == "boolean" ? ["span", o, p] : k(p) ? ["object", { object: b ? A(p) : p }] : ["span", n, String(p)];
  }
  function f(p, b) {
    const D = p.type;
    if ($(D))
      return;
    const H = {};
    for (const S in p.ctx)
      d(D, S, b) && (H[S] = p.ctx[S]);
    return H;
  }
  function d(p, b, D) {
    const H = p[D];
    if (T(H) && H.includes(b) || k(H) && b in H || p.extends && d(p.extends, b, D) || p.mixins && p.mixins.some((S) => d(S, b, D)))
      return !0;
  }
  function m(p) {
    return Hn(p) ? "ShallowRef" : p.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const sr = "3.3.10";
var Lt = {};
const ic = "http://www.w3.org/2000/svg", Ge = typeof document < "u" ? document : null, lr = Ge && /* @__PURE__ */ Ge.createElement("template"), sc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t ? Ge.createElementNS(ic, e) : Ge.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => Ge.createTextNode(e),
  createComment: (e) => Ge.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ge.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, r, i) {
    const l = n ? n.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      lr.innerHTML = o ? `<svg>${e}</svg>` : e;
      const c = lr.content;
      if (o) {
        const f = c.firstChild;
        for (; f.firstChild; )
          c.appendChild(f.firstChild);
        c.removeChild(f);
      }
      t.insertBefore(c, n);
    }
    return [
      // first
      l ? l.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, lc = Symbol("_vtc");
function cc(e, t, n) {
  const o = e[lc];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const uc = Symbol("_vod");
function fc(e, t, n) {
  const o = e.style, r = z(n);
  if (n && !r) {
    if (t && !z(t))
      for (const i in t)
        n[i] == null && io(o, i, "");
    for (const i in n)
      io(o, i, n[i]);
  } else {
    const i = o.display;
    r ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), uc in e && (o.display = i);
  }
}
const ac = /[^\\];\s*$/, cr = /\s*!important$/;
function io(e, t, n) {
  if (T(n))
    n.forEach((o) => io(e, t, o));
  else if (n == null && (n = ""), Lt.NODE_ENV !== "production" && ac.test(n) && y(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = dc(e, t);
    cr.test(n) ? e.setProperty(
      We(o),
      n.replace(cr, ""),
      "important"
    ) : e[o] = n;
  }
}
const ur = ["Webkit", "Moz", "ms"], Ln = {};
function dc(e, t) {
  const n = Ln[t];
  if (n)
    return n;
  let o = Ot(t);
  if (o !== "filter" && o in e)
    return Ln[t] = o;
  o = Nn(o);
  for (let r = 0; r < ur.length; r++) {
    const i = ur[r] + o;
    if (i in e)
      return Ln[t] = i;
  }
  return t;
}
const fr = "http://www.w3.org/1999/xlink";
function pc(e, t, n, o, r) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(fr, t.slice(6, t.length)) : e.setAttributeNS(fr, t, n);
  else {
    const i = Ui(t);
    n == null || i && !br(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : n);
  }
}
function hc(e, t, n, o, r, i, l) {
  if (t === "innerHTML" || t === "textContent") {
    o && l(o, r, i), e[t] = n ?? "";
    return;
  }
  const c = e.tagName;
  if (t === "value" && c !== "PROGRESS" && // custom elements may use _value internally
  !c.includes("-")) {
    e._value = n;
    const d = c === "OPTION" ? e.getAttribute("value") : e.value, m = n ?? "";
    d !== m && (e.value = m), n == null && e.removeAttribute(t);
    return;
  }
  let f = !1;
  if (n === "" || n == null) {
    const d = typeof e[t];
    d === "boolean" ? n = br(n) : n == null && d === "string" ? (n = "", f = !0) : d === "number" && (n = 0, f = !0);
  }
  try {
    e[t] = n;
  } catch (d) {
    Lt.NODE_ENV !== "production" && !f && y(
      `Failed setting prop "${t}" on <${c.toLowerCase()}>: value ${n} is invalid.`,
      d
    );
  }
  f && e.removeAttribute(t);
}
function mc(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function gc(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const ar = Symbol("_vei");
function _c(e, t, n, o, r = null) {
  const i = e[ar] || (e[ar] = {}), l = i[t];
  if (o && l)
    l.value = o;
  else {
    const [c, f] = Ec(t);
    if (o) {
      const d = i[t] = Oc(o, r);
      mc(e, c, d, f);
    } else
      l && (gc(e, c, l, f), i[t] = void 0);
  }
}
const dr = /(?:Once|Passive|Capture)$/;
function Ec(e) {
  let t;
  if (dr.test(e)) {
    t = {};
    let o;
    for (; o = e.match(dr); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : We(e.slice(2)), t];
}
let Un = 0;
const Nc = /* @__PURE__ */ Promise.resolve(), bc = () => Un || (Nc.then(() => Un = 0), Un = Date.now());
function Oc(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    _e(
      yc(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = bc(), n;
}
function yc(e, t) {
  if (T(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((o) => (r) => !r._stopped && o && o(r));
  } else
    return t;
}
const pr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, vc = (e, t, n, o, r = !1, i, l, c, f) => {
  t === "class" ? cc(e, o, r) : t === "style" ? fc(e, n, o) : Ut(t) ? ln(t) || _c(e, t, n, o, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : wc(e, t, o, r)) ? hc(
    e,
    t,
    o,
    i,
    l,
    c,
    f
  ) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), pc(e, t, o, r));
};
function wc(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && pr(t) && $(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    return !(r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE");
  }
  return pr(t) && z(n) ? !1 : t in e;
}
const xc = /* @__PURE__ */ W({ patchProp: vc }, sc);
let hr;
function Dc() {
  return hr || (hr = Ml(xc));
}
const Vc = (...e) => {
  const t = Dc().createApp(...e);
  Lt.NODE_ENV !== "production" && (Cc(t), Tc(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const r = $c(o);
    if (!r)
      return;
    const i = t._component;
    !$(i) && !i.render && !i.template && (i.template = r.innerHTML), r.innerHTML = "";
    const l = n(r, !1, r instanceof SVGElement);
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), l;
  }, t;
};
function Cc(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Fi(t) || Hi(t),
    writable: !1
  });
}
function Tc(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        y(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return y(o), n;
      },
      set() {
        y(o);
      }
    });
  }
}
function $c(e) {
  if (z(e)) {
    const t = document.querySelector(e);
    return Lt.NODE_ENV !== "production" && !t && y(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return Lt.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && y(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var Ic = {};
function Pc() {
  rc();
}
Ic.NODE_ENV !== "production" && Pc();
const Ac = "/vite.svg", Mc = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='37.07'%20height='36'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20198'%3e%3cpath%20fill='%2341B883'%20d='M204.8%200H256L128%20220.8L0%200h97.92L128%2051.2L157.44%200h47.36Z'%3e%3c/path%3e%3cpath%20fill='%2341B883'%20d='m0%200l128%20220.8L256%200h-51.2L128%20132.48L50.56%200H0Z'%3e%3c/path%3e%3cpath%20fill='%2335495E'%20d='M50.56%200L128%20133.12L204.8%200h-47.36L128%2051.2L97.92%200H50.56Z'%3e%3c/path%3e%3c/svg%3e", $n = (e) => (Zr("data-v-1d5be6d4"), e = e(), Xr(), e), Rc = { class: "card" }, Sc = /* @__PURE__ */ $n(() => /* @__PURE__ */ G("p", null, [
  /* @__PURE__ */ ut(" Edit "),
  /* @__PURE__ */ G("code", null, "components/HelloWorld.vue"),
  /* @__PURE__ */ ut(" to test HMR ")
], -1)), jc = /* @__PURE__ */ $n(() => /* @__PURE__ */ G("p", null, [
  /* @__PURE__ */ ut(" Check out "),
  /* @__PURE__ */ G("a", {
    href: "https://vuejs.org/guide/quick-start.html#local",
    target: "_blank"
  }, "create-vue"),
  /* @__PURE__ */ ut(", the official Vue + Vite starter ")
], -1)), Fc = /* @__PURE__ */ $n(() => /* @__PURE__ */ G("p", null, [
  /* @__PURE__ */ ut(" Install "),
  /* @__PURE__ */ G("a", {
    href: "https://github.com/vuejs/language-tools",
    target: "_blank"
  }, "Volar"),
  /* @__PURE__ */ ut(" in your IDE for a better DX ")
], -1)), Hc = /* @__PURE__ */ $n(() => /* @__PURE__ */ G("p", { class: "read-the-docs" }, "Click on the Vite and Vue logos to learn more", -1)), Lc = /* @__PURE__ */ ni({
  __name: "HelloWorld",
  props: {
    msg: {}
  },
  setup(e) {
    const t = ds(0);
    return (n, o) => (hi(), mi(ue, null, [
      G("h1", null, Ro(n.msg), 1),
      G("div", Rc, [
        G("button", {
          type: "button",
          onClick: o[0] || (o[0] = (r) => t.value++)
        }, "count is " + Ro(t.value), 1),
        Sc
      ]),
      jc,
      Fc,
      Hc
    ], 64));
  }
}), vi = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Uc = /* @__PURE__ */ vi(Lc, [["__scopeId", "data-v-1d5be6d4"]]), Bc = (e) => (Zr("data-v-58aba71c"), e = e(), Xr(), e), Kc = /* @__PURE__ */ Bc(() => /* @__PURE__ */ G("div", null, [
  /* @__PURE__ */ G("a", {
    href: "https://vitejs.dev",
    target: "_blank"
  }, [
    /* @__PURE__ */ G("img", {
      src: Ac,
      class: "logo",
      alt: "Vite logo"
    })
  ]),
  /* @__PURE__ */ G("a", {
    href: "https://vuejs.org/",
    target: "_blank"
  }, [
    /* @__PURE__ */ G("img", {
      src: Mc,
      class: "logo vue",
      alt: "Vue logo"
    })
  ])
], -1)), kc = /* @__PURE__ */ ni({
  __name: "App",
  setup(e) {
    return (t, n) => (hi(), mi(ue, null, [
      Kc,
      ke(Uc, { msg: "Vite + Vue" })
    ], 64));
  }
}), wi = /* @__PURE__ */ vi(kc, [["__scopeId", "data-v-58aba71c"]]);
console.debug("HelloWorld2InnerPageJsApp: main.ts", wi);
Vc(wi).mount("#app");
