var mr = {};
function Je(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let r = 0; r < o.length; r++)
    n[o[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const k = mr.NODE_ENV !== "production" ? Object.freeze({}) : {}, Nt = mr.NODE_ENV !== "production" ? Object.freeze([]) : [], Q = () => {
}, _r = () => !1, Ut = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ln = (e) => e.startsWith("onUpdate:"), W = Object.assign, co = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ci = Object.prototype.hasOwnProperty, R = (e, t) => Ci.call(e, t), $ = Array.isArray, Ge = (e) => _n(e) === "[object Map]", Er = (e) => _n(e) === "[object Set]", T = (e) => typeof e == "function", z = (e) => typeof e == "string", mn = (e) => typeof e == "symbol", K = (e) => e !== null && typeof e == "object", uo = (e) => (K(e) || T(e)) && T(e.then) && T(e.catch), Nr = Object.prototype.toString, _n = (e) => Nr.call(e), fo = (e) => _n(e).slice(8, -1), br = (e) => _n(e) === "[object Object]", ao = (e) => z(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Qt = /* @__PURE__ */ Je(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), $i = /* @__PURE__ */ Je(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), En = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ti = /-(\w)/g, Ot = En((e) => e.replace(Ti, (t, n) => n ? n.toUpperCase() : "")), Pi = /\B([A-Z])/g, Ke = En(
  (e) => e.replace(Pi, "-$1").toLowerCase()
), Nn = En((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ze = En((e) => e ? `on${Nn(e)}` : ""), lt = (e, t) => !Object.is(e, t), Dt = (e, t) => {
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
let So;
const un = () => So || (So = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function po(e) {
  if ($(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = z(o) ? Si(o) : po(o);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (z(e) || K(e))
    return e;
}
const Mi = /;(?![^(]*\))/g, Ri = /:([^]+)/, Ai = /\/\*[^]*?\*\//g;
function Si(e) {
  const t = {};
  return e.replace(Ai, "").split(Mi).forEach((n) => {
    if (n) {
      const o = n.split(Ri);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function ho(e) {
  let t = "";
  if (z(e))
    t = e;
  else if ($(e))
    for (let n = 0; n < e.length; n++) {
      const o = ho(e[n]);
      o && (t += o + " ");
    }
  else if (K(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Fi = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", ji = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Hi = /* @__PURE__ */ Je(Fi), Li = /* @__PURE__ */ Je(ji), Ui = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Bi = /* @__PURE__ */ Je(Ui);
function Or(e) {
  return !!e || e === "";
}
const kn = (e) => z(e) ? e : e == null ? "" : $(e) || K(e) && (e.toString === Nr || !T(e.toString)) ? JSON.stringify(e, yr, 2) : String(e), yr = (e, t) => t && t.__v_isRef ? yr(e, t.value) : Ge(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [o, r]) => (n[`${o} =>`] = r, n), {})
} : Er(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : K(t) && !$(t) && !br(t) ? String(t) : t;
var Y = {};
function Kn(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let pe;
class ki {
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
      Y.NODE_ENV !== "production" && Kn("cannot run an inactive effect scope.");
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
function Ki(e, t = pe) {
  t && t.active && t.effects.push(e);
}
function Wi() {
  return pe;
}
const Rt = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, vr = (e) => (e.w & We) > 0, wr = (e) => (e.n & We) > 0, qi = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= We;
}, zi = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const r = t[o];
      vr(r) && !wr(r) ? r.delete(e) : t[n++] = r, r.w &= ~We, r.n &= ~We;
    }
    t.length = n;
  }
}, Wn = /* @__PURE__ */ new WeakMap();
let Ct = 0, We = 1;
const qn = 30;
let re;
const et = Symbol(Y.NODE_ENV !== "production" ? "iterate" : ""), zn = Symbol(Y.NODE_ENV !== "production" ? "Map key iterate" : "");
class go {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Ki(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = re, n = ke;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = re, re = this, ke = !0, We = 1 << ++Ct, Ct <= qn ? qi(this) : Fo(this), this.fn();
    } finally {
      Ct <= qn && zi(this), We = 1 << --Ct, re = this.parent, ke = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    re === this ? this.deferStop = !0 : this.active && (Fo(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Fo(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let ke = !0;
const Dr = [];
function ft() {
  Dr.push(ke), ke = !1;
}
function at() {
  const e = Dr.pop();
  ke = e === void 0 ? !0 : e;
}
function ee(e, t, n) {
  if (ke && re) {
    let o = Wn.get(e);
    o || Wn.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = Rt());
    const i = Y.NODE_ENV !== "production" ? { effect: re, target: e, type: t, key: n } : void 0;
    Jn(r, i);
  }
}
function Jn(e, t) {
  let n = !1;
  Ct <= qn ? wr(e) || (e.n |= We, n = !vr(e)) : n = !e.has(re), n && (e.add(re), re.deps.push(e), Y.NODE_ENV !== "production" && re.onTrack && re.onTrack(
    W(
      {
        effect: re
      },
      t
    )
  ));
}
function Ce(e, t, n, o, r, i) {
  const l = Wn.get(e);
  if (!l)
    return;
  let c = [];
  if (t === "clear")
    c = [...l.values()];
  else if (n === "length" && $(e)) {
    const d = Number(o);
    l.forEach((g, p) => {
      (p === "length" || !mn(p) && p >= d) && c.push(g);
    });
  } else
    switch (n !== void 0 && c.push(l.get(n)), t) {
      case "add":
        $(e) ? ao(n) && c.push(l.get("length")) : (c.push(l.get(et)), Ge(e) && c.push(l.get(zn)));
        break;
      case "delete":
        $(e) || (c.push(l.get(et)), Ge(e) && c.push(l.get(zn)));
        break;
      case "set":
        Ge(e) && c.push(l.get(et));
        break;
    }
  const f = Y.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: r, oldTarget: i } : void 0;
  if (c.length === 1)
    c[0] && (Y.NODE_ENV !== "production" ? _t(c[0], f) : _t(c[0]));
  else {
    const d = [];
    for (const g of c)
      g && d.push(...g);
    Y.NODE_ENV !== "production" ? _t(Rt(d), f) : _t(Rt(d));
  }
}
function _t(e, t) {
  const n = $(e) ? e : [...e];
  for (const o of n)
    o.computed && jo(o, t);
  for (const o of n)
    o.computed || jo(o, t);
}
function jo(e, t) {
  (e !== re || e.allowRecurse) && (Y.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(W({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const Ji = /* @__PURE__ */ Je("__proto__,__v_isRef,__isVue"), xr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(mn)
), Ho = /* @__PURE__ */ Yi();
function Yi() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = M(this);
      for (let i = 0, l = this.length; i < l; i++)
        ee(o, "get", i + "");
      const r = o[t](...n);
      return r === -1 || r === !1 ? o[t](...n.map(M)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      ft();
      const o = M(this)[t].apply(this, n);
      return at(), o;
    };
  }), e;
}
function Xi(e) {
  const t = M(this);
  return ee(t, "has", e), t.hasOwnProperty(e);
}
class Vr {
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
    if (n === "__v_raw" && o === (r ? i ? Rr : Mr : i ? Ir : Pr).get(t))
      return t;
    const l = $(t);
    if (!r) {
      if (l && R(Ho, n))
        return Reflect.get(Ho, n, o);
      if (n === "hasOwnProperty")
        return Xi;
    }
    const c = Reflect.get(t, n, o);
    return (mn(n) ? xr.has(n) : Ji(n)) || (r || ee(t, "get", n), i) ? c : Z(c) ? l && ao(n) ? c : c.value : K(c) ? r ? Ar(c) : _o(c) : c;
  }
}
class Cr extends Vr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, r) {
    let i = t[n];
    if (qe(i) && Z(i) && !Z(o))
      return !1;
    if (!this._shallow && (!fn(o) && !qe(o) && (i = M(i), o = M(o)), !$(t) && Z(i) && !Z(o)))
      return i.value = o, !0;
    const l = $(t) && ao(n) ? Number(n) < t.length : R(t, n), c = Reflect.set(t, n, o, r);
    return t === M(r) && (l ? lt(o, i) && Ce(t, "set", n, o, i) : Ce(t, "add", n, o)), c;
  }
  deleteProperty(t, n) {
    const o = R(t, n), r = t[n], i = Reflect.deleteProperty(t, n);
    return i && o && Ce(t, "delete", n, void 0, r), i;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!mn(n) || !xr.has(n)) && ee(t, "has", n), o;
  }
  ownKeys(t) {
    return ee(
      t,
      "iterate",
      $(t) ? "length" : et
    ), Reflect.ownKeys(t);
  }
}
class $r extends Vr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return Y.NODE_ENV !== "production" && Kn(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return Y.NODE_ENV !== "production" && Kn(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Zi = /* @__PURE__ */ new Cr(), Qi = /* @__PURE__ */ new $r(), Gi = /* @__PURE__ */ new Cr(
  !0
), es = /* @__PURE__ */ new $r(!0), mo = (e) => e, bn = (e) => Reflect.getPrototypeOf(e);
function qt(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = M(e), i = M(t);
  n || (lt(t, i) && ee(r, "get", t), ee(r, "get", i));
  const { has: l } = bn(r), c = o ? mo : n ? Eo : At;
  if (l.call(r, t))
    return c(e.get(t));
  if (l.call(r, i))
    return c(e.get(i));
  e !== r && e.get(t);
}
function zt(e, t = !1) {
  const n = this.__v_raw, o = M(n), r = M(e);
  return t || (lt(e, r) && ee(o, "has", e), ee(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function Jt(e, t = !1) {
  return e = e.__v_raw, !t && ee(M(e), "iterate", et), Reflect.get(e, "size", e);
}
function Lo(e) {
  e = M(e);
  const t = M(this);
  return bn(t).has.call(t, e) || (t.add(e), Ce(t, "add", e, e)), this;
}
function Uo(e, t) {
  t = M(t);
  const n = M(this), { has: o, get: r } = bn(n);
  let i = o.call(n, e);
  i ? Y.NODE_ENV !== "production" && Tr(n, o, e) : (e = M(e), i = o.call(n, e));
  const l = r.call(n, e);
  return n.set(e, t), i ? lt(t, l) && Ce(n, "set", e, t, l) : Ce(n, "add", e, t), this;
}
function Bo(e) {
  const t = M(this), { has: n, get: o } = bn(t);
  let r = n.call(t, e);
  r ? Y.NODE_ENV !== "production" && Tr(t, n, e) : (e = M(e), r = n.call(t, e));
  const i = o ? o.call(t, e) : void 0, l = t.delete(e);
  return r && Ce(t, "delete", e, void 0, i), l;
}
function ko() {
  const e = M(this), t = e.size !== 0, n = Y.NODE_ENV !== "production" ? Ge(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && Ce(e, "clear", void 0, void 0, n), o;
}
function Yt(e, t) {
  return function(o, r) {
    const i = this, l = i.__v_raw, c = M(l), f = t ? mo : e ? Eo : At;
    return !e && ee(c, "iterate", et), l.forEach((d, g) => o.call(r, f(d), f(g), i));
  };
}
function Xt(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, i = M(r), l = Ge(i), c = e === "entries" || e === Symbol.iterator && l, f = e === "keys" && l, d = r[e](...o), g = n ? mo : t ? Eo : At;
    return !t && ee(
      i,
      "iterate",
      f ? zn : et
    ), {
      // iterator protocol
      next() {
        const { value: p, done: b } = d.next();
        return b ? { value: p, done: b } : {
          value: c ? [g(p[0]), g(p[1])] : g(p),
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
        M(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ts() {
  const e = {
    get(i) {
      return qt(this, i);
    },
    get size() {
      return Jt(this);
    },
    has: zt,
    add: Lo,
    set: Uo,
    delete: Bo,
    clear: ko,
    forEach: Yt(!1, !1)
  }, t = {
    get(i) {
      return qt(this, i, !1, !0);
    },
    get size() {
      return Jt(this);
    },
    has: zt,
    add: Lo,
    set: Uo,
    delete: Bo,
    clear: ko,
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
    e[i] = Xt(
      i,
      !1,
      !1
    ), n[i] = Xt(
      i,
      !0,
      !1
    ), t[i] = Xt(
      i,
      !1,
      !0
    ), o[i] = Xt(
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
  ns,
  os,
  rs,
  is
] = /* @__PURE__ */ ts();
function On(e, t) {
  const n = t ? e ? is : rs : e ? os : ns;
  return (o, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(
    R(n, r) && r in o ? n : o,
    r,
    i
  );
}
const ss = {
  get: /* @__PURE__ */ On(!1, !1)
}, ls = {
  get: /* @__PURE__ */ On(!1, !0)
}, cs = {
  get: /* @__PURE__ */ On(!0, !1)
}, us = {
  get: /* @__PURE__ */ On(!0, !0)
};
function Tr(e, t, n) {
  const o = M(n);
  if (o !== n && t.call(e, o)) {
    const r = fo(e);
    console.warn(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Pr = /* @__PURE__ */ new WeakMap(), Ir = /* @__PURE__ */ new WeakMap(), Mr = /* @__PURE__ */ new WeakMap(), Rr = /* @__PURE__ */ new WeakMap();
function fs(e) {
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
function as(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : fs(fo(e));
}
function _o(e) {
  return qe(e) ? e : yn(
    e,
    !1,
    Zi,
    ss,
    Pr
  );
}
function ds(e) {
  return yn(
    e,
    !1,
    Gi,
    ls,
    Ir
  );
}
function Ar(e) {
  return yn(
    e,
    !0,
    Qi,
    cs,
    Mr
  );
}
function $t(e) {
  return yn(
    e,
    !0,
    es,
    us,
    Rr
  );
}
function yn(e, t, n, o, r) {
  if (!K(e))
    return Y.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const l = as(e);
  if (l === 0)
    return e;
  const c = new Proxy(
    e,
    l === 2 ? o : n
  );
  return r.set(e, c), c;
}
function tt(e) {
  return qe(e) ? tt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function qe(e) {
  return !!(e && e.__v_isReadonly);
}
function fn(e) {
  return !!(e && e.__v_isShallow);
}
function Yn(e) {
  return tt(e) || qe(e);
}
function M(e) {
  const t = e && e.__v_raw;
  return t ? M(t) : e;
}
function Sr(e) {
  return cn(e, "__v_skip", !0), e;
}
const At = (e) => K(e) ? _o(e) : e, Eo = (e) => K(e) ? Ar(e) : e;
function Fr(e) {
  ke && re && (e = M(e), Y.NODE_ENV !== "production" ? Jn(e.dep || (e.dep = Rt()), {
    target: e,
    type: "get",
    key: "value"
  }) : Jn(e.dep || (e.dep = Rt())));
}
function jr(e, t) {
  e = M(e);
  const n = e.dep;
  n && (Y.NODE_ENV !== "production" ? _t(n, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : _t(n));
}
function Z(e) {
  return !!(e && e.__v_isRef === !0);
}
function ps(e) {
  return hs(e, !1);
}
function hs(e, t) {
  return Z(e) ? e : new gs(e, t);
}
class gs {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : M(t), this._value = n ? t : At(t);
  }
  get value() {
    return Fr(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || fn(t) || qe(t);
    t = n ? t : M(t), lt(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : At(t), jr(this, t));
  }
}
function ms(e) {
  return Z(e) ? e.value : e;
}
const _s = {
  get: (e, t, n) => ms(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return Z(r) && !Z(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Hr(e) {
  return tt(e) ? e : new Proxy(e, _s);
}
class Es {
  constructor(t, n, o, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new go(t, () => {
      this._dirty || (this._dirty = !0, jr(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = M(this);
    return Fr(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
function Ns(e, t, n = !1) {
  let o, r;
  const i = T(e);
  i ? (o = e, r = Y.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : Q) : (o = e.get, r = e.set);
  const l = new Es(o, r, i || !r, n);
  return Y.NODE_ENV !== "production" && t && !n && (l.effect.onTrack = t.onTrack, l.effect.onTrigger = t.onTrigger), l;
}
var a = {};
const nt = [];
function Gt(e) {
  nt.push(e);
}
function en() {
  nt.pop();
}
function y(e, ...t) {
  if (a.NODE_ENV === "production")
    return;
  ft();
  const n = nt.length ? nt[nt.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = bs();
  if (o)
    Re(
      o,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        r.map(
          ({ vnode: i }) => `at <${$n(n, i.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    r.length && i.push(`
`, ...Os(r)), console.warn(...i);
  }
  at();
}
function bs() {
  let e = nt[nt.length - 1];
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
function Os(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...ys(n));
  }), t;
}
function ys({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${$n(
    e.component,
    e.type,
    o
  )}`, i = ">" + n;
  return e.props ? [r, ...vs(e.props), i] : [r + i];
}
function vs(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Lr(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Lr(e, t, n) {
  return z(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Z(t) ? (t = Lr(e, M(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : T(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = M(t), n ? t : [`${e}=`, t]);
}
const No = {
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
function Re(e, t, n, o) {
  let r;
  try {
    r = o ? e(...o) : e();
  } catch (i) {
    vn(i, t, n);
  }
  return r;
}
function _e(e, t, n, o) {
  if (T(e)) {
    const i = Re(e, t, n, o);
    return i && uo(i) && i.catch((l) => {
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
    const l = t.proxy, c = a.NODE_ENV !== "production" ? No[n] : n;
    for (; i; ) {
      const d = i.ec;
      if (d) {
        for (let g = 0; g < d.length; g++)
          if (d[g](e, l, c) === !1)
            return;
      }
      i = i.parent;
    }
    const f = t.appContext.config.errorHandler;
    if (f) {
      Re(
        f,
        null,
        10,
        [e, l, c]
      );
      return;
    }
  }
  ws(e, n, r, o);
}
function ws(e, t, n, o = !0) {
  if (a.NODE_ENV !== "production") {
    const r = No[t];
    if (n && Gt(n), y(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && en(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let St = !1, Xn = !1;
const te = [];
let xe = 0;
const bt = [];
let De = null, Le = 0;
const Ur = /* @__PURE__ */ Promise.resolve();
let bo = null;
const Ds = 100;
function xs(e) {
  const t = bo || Ur;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Vs(e) {
  let t = xe + 1, n = te.length;
  for (; t < n; ) {
    const o = t + n >>> 1, r = te[o], i = Ft(r);
    i < e || i === e && r.pre ? t = o + 1 : n = o;
  }
  return t;
}
function wn(e) {
  (!te.length || !te.includes(
    e,
    St && e.allowRecurse ? xe + 1 : xe
  )) && (e.id == null ? te.push(e) : te.splice(Vs(e.id), 0, e), Br());
}
function Br() {
  !St && !Xn && (Xn = !0, bo = Ur.then(Wr));
}
function Cs(e) {
  const t = te.indexOf(e);
  t > xe && te.splice(t, 1);
}
function kr(e) {
  $(e) ? bt.push(...e) : (!De || !De.includes(
    e,
    e.allowRecurse ? Le + 1 : Le
  )) && bt.push(e), Br();
}
function Ko(e, t = St ? xe + 1 : 0) {
  for (a.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < te.length; t++) {
    const n = te[t];
    if (n && n.pre) {
      if (a.NODE_ENV !== "production" && Oo(e, n))
        continue;
      te.splice(t, 1), t--, n();
    }
  }
}
function Kr(e) {
  if (bt.length) {
    const t = [...new Set(bt)];
    if (bt.length = 0, De) {
      De.push(...t);
      return;
    }
    for (De = t, a.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), De.sort((n, o) => Ft(n) - Ft(o)), Le = 0; Le < De.length; Le++)
      a.NODE_ENV !== "production" && Oo(e, De[Le]) || De[Le]();
    De = null, Le = 0;
  }
}
const Ft = (e) => e.id == null ? 1 / 0 : e.id, $s = (e, t) => {
  const n = Ft(e) - Ft(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Wr(e) {
  Xn = !1, St = !0, a.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), te.sort($s);
  const t = a.NODE_ENV !== "production" ? (n) => Oo(e, n) : Q;
  try {
    for (xe = 0; xe < te.length; xe++) {
      const n = te[xe];
      if (n && n.active !== !1) {
        if (a.NODE_ENV !== "production" && t(n))
          continue;
        Re(n, null, 14);
      }
    }
  } finally {
    xe = 0, te.length = 0, Kr(e), St = !1, bo = null, (te.length || bt.length) && Wr(e);
  }
}
function Oo(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Ds) {
      const o = t.ownerInstance, r = o && yi(o.type);
      return y(
        `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
let ot = !1;
const mt = /* @__PURE__ */ new Set();
a.NODE_ENV !== "production" && (un().__VUE_HMR_RUNTIME__ = {
  createRecord: An(qr),
  rerender: An(Is),
  reload: An(Ms)
});
const ct = /* @__PURE__ */ new Map();
function Ts(e) {
  const t = e.type.__hmrId;
  let n = ct.get(t);
  n || (qr(t, e.type), n = ct.get(t)), n.instances.add(e);
}
function Ps(e) {
  ct.get(e.type.__hmrId).instances.delete(e);
}
function qr(e, t) {
  return ct.has(e) ? !1 : (ct.set(e, {
    initialDef: It(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function It(e) {
  return vi(e) ? e.__vccOpts : e;
}
function Is(e, t) {
  const n = ct.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, It(o.type).render = t), o.renderCache = [], ot = !0, o.update(), ot = !1;
  }));
}
function Ms(e, t) {
  const n = ct.get(e);
  if (!n)
    return;
  t = It(t), Wo(n.initialDef, t);
  const o = [...n.instances];
  for (const r of o) {
    const i = It(r.type);
    mt.has(i) || (i !== n.initialDef && Wo(i, t), mt.add(i)), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (mt.add(i), r.ceReload(t.styles), mt.delete(i)) : r.parent ? wn(r.parent.update) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  kr(() => {
    for (const r of o)
      mt.delete(
        It(r.type)
      );
  });
}
function Wo(e, t) {
  W(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function An(e) {
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
let Ve, Tt = [], Zn = !1;
function Bt(e, ...t) {
  Ve ? Ve.emit(e, ...t) : Zn || Tt.push({ event: e, args: t });
}
function zr(e, t) {
  var n, o;
  Ve = e, Ve ? (Ve.enabled = !0, Tt.forEach(({ event: r, args: i }) => Ve.emit(r, ...i)), Tt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    zr(i, t);
  }), setTimeout(() => {
    Ve || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Zn = !0, Tt = []);
  }, 3e3)) : (Zn = !0, Tt = []);
}
function Rs(e, t) {
  Bt("app:init", e, t, {
    Fragment: he,
    Text: kt,
    Comment: Ee,
    Static: rn
  });
}
function As(e) {
  Bt("app:unmount", e);
}
const Ss = /* @__PURE__ */ yo(
  "component:added"
  /* COMPONENT_ADDED */
), Jr = /* @__PURE__ */ yo(
  "component:updated"
  /* COMPONENT_UPDATED */
), Fs = /* @__PURE__ */ yo(
  "component:removed"
  /* COMPONENT_REMOVED */
), js = (e) => {
  Ve && typeof Ve.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Ve.cleanupBuffer(e) && Fs(e);
};
function yo(e) {
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
const Hs = /* @__PURE__ */ Yr(
  "perf:start"
  /* PERFORMANCE_START */
), Ls = /* @__PURE__ */ Yr(
  "perf:end"
  /* PERFORMANCE_END */
);
function Yr(e) {
  return (t, n, o) => {
    Bt(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Us(e, t, n) {
  Bt(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
function Bs(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || k;
  if (a.NODE_ENV !== "production") {
    const {
      emitsOptions: g,
      propsOptions: [p]
    } = e;
    if (g)
      if (!(t in g))
        (!p || !(Ze(t) in p)) && y(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Ze(t)}" prop.`
        );
      else {
        const b = g[t];
        T(b) && (b(...n) || y(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let r = n;
  const i = t.startsWith("update:"), l = i && t.slice(7);
  if (l && l in o) {
    const g = `${l === "modelValue" ? "model" : l}Modifiers`, { number: p, trim: b } = o[g] || k;
    b && (r = n.map((x) => z(x) ? x.trim() : x)), p && (r = n.map(Ii));
  }
  if (a.NODE_ENV !== "production" && Us(e, t, r), a.NODE_ENV !== "production") {
    const g = t.toLowerCase();
    g !== t && o[Ze(g)] && y(
      `Event "${g}" is emitted in component ${$n(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ke(t)}" instead of "${t}".`
    );
  }
  let c, f = o[c = Ze(t)] || // also try camelCase event handler (#2249)
  o[c = Ze(Ot(t))];
  !f && i && (f = o[c = Ze(Ke(t))]), f && _e(
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
function Xr(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let l = {}, c = !1;
  if (!T(e)) {
    const f = (d) => {
      const g = Xr(d, t, !0);
      g && (c = !0, W(l, g));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !i && !c ? (K(e) && o.set(e, null), null) : ($(i) ? i.forEach((f) => l[f] = null) : W(l, i), K(e) && o.set(e, l), l);
}
function Dn(e, t) {
  return !e || !Ut(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), R(e, t[0].toLowerCase() + t.slice(1)) || R(e, Ke(t)) || R(e, t));
}
let ue = null, xn = null;
function an(e) {
  const t = ue;
  return ue = e, xn = e && e.type.__scopeId || null, t;
}
function Zr(e) {
  xn = e;
}
function Qr() {
  xn = null;
}
function ks(e, t = ue, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && or(-1);
    const i = an(t);
    let l;
    try {
      l = e(...r);
    } finally {
      an(i), o._d && or(1);
    }
    return a.NODE_ENV !== "production" && Jr(t), l;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let Qn = !1;
function dn() {
  Qn = !0;
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
    render: g,
    renderCache: p,
    data: b,
    setupState: x,
    ctx: H,
    inheritAttrs: S
  } = e;
  let q, X;
  const Ne = an(e);
  a.NODE_ENV !== "production" && (Qn = !1);
  try {
    if (n.shapeFlag & 4) {
      const P = r || o, $e = a.NODE_ENV !== "production" && x.__isScriptSetup ? new Proxy(P, {
        get(Oe, fe, ce) {
          return y(
            `Property '${String(
              fe
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(Oe, fe, ce);
        }
      }) : P;
      q = ge(
        g.call(
          $e,
          P,
          p,
          i,
          x,
          b,
          H
        )
      ), X = f;
    } else {
      const P = t;
      a.NODE_ENV !== "production" && f === i && dn(), q = ge(
        P.length > 1 ? P(
          i,
          a.NODE_ENV !== "production" ? {
            get attrs() {
              return dn(), f;
            },
            slots: c,
            emit: d
          } : { attrs: f, slots: c, emit: d }
        ) : P(
          i,
          null
          /* we know it doesn't need it */
        )
      ), X = t.props ? f : Ws(f);
    }
  } catch (P) {
    Mt.length = 0, vn(P, e, 1), q = it(Ee);
  }
  let L = q, be;
  if (a.NODE_ENV !== "production" && q.patchFlag > 0 && q.patchFlag & 2048 && ([L, be] = Ks(q)), X && S !== !1) {
    const P = Object.keys(X), { shapeFlag: $e } = L;
    if (P.length) {
      if ($e & 7)
        l && P.some(ln) && (X = qs(
          X,
          l
        )), L = ze(L, X);
      else if (a.NODE_ENV !== "production" && !Qn && L.type !== Ee) {
        const Oe = Object.keys(f), fe = [], ce = [];
        for (let Te = 0, Se = Oe.length; Te < Se; Te++) {
          const ae = Oe[Te];
          Ut(ae) ? ln(ae) || fe.push(ae[2].toLowerCase() + ae.slice(3)) : ce.push(ae);
        }
        ce.length && y(
          `Extraneous non-props attributes (${ce.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), fe.length && y(
          `Extraneous non-emits event listeners (${fe.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (a.NODE_ENV !== "production" && !qo(L) && y(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), L = ze(L), L.dirs = L.dirs ? L.dirs.concat(n.dirs) : n.dirs), n.transition && (a.NODE_ENV !== "production" && !qo(L) && y(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), L.transition = n.transition), a.NODE_ENV !== "production" && be ? be(L) : q = L, an(Ne), q;
}
const Ks = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Gr(t);
  if (!o)
    return [e, void 0];
  const r = t.indexOf(o), i = n ? n.indexOf(o) : -1, l = (c) => {
    t[r] = c, n && (i > -1 ? n[i] = c : c.patchFlag > 0 && (e.dynamicChildren = [...n, c]));
  };
  return [ge(o), l];
};
function Gr(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    if (Vo(o)) {
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
const Ws = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ut(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, qs = (e, t) => {
  const n = {};
  for (const o in e)
    (!ln(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, qo = (e) => e.shapeFlag & 7 || e.type === Ee;
function zs(e, t, n) {
  const { props: o, children: r, component: i } = e, { props: l, children: c, patchFlag: f } = t, d = i.emitsOptions;
  if (a.NODE_ENV !== "production" && (r || c) && ot || t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return o ? zo(o, l, d) : !!l;
    if (f & 8) {
      const g = t.dynamicProps;
      for (let p = 0; p < g.length; p++) {
        const b = g[p];
        if (l[b] !== o[b] && !Dn(d, b))
          return !0;
      }
    }
  } else
    return (r || c) && (!c || !c.$stable) ? !0 : o === l ? !1 : o ? l ? zo(o, l, d) : !0 : !!l;
  return !1;
}
function zo(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const i = o[r];
    if (t[i] !== e[i] && !Dn(n, i))
      return !0;
  }
  return !1;
}
function Js({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const Ys = Symbol.for("v-ndc"), Xs = (e) => e.__isSuspense;
function Zs(e, t) {
  t && t.pendingBranch ? $(e) ? t.effects.push(...e) : t.effects.push(e) : kr(e);
}
const Zt = {};
function Fn(e, t, n) {
  return a.NODE_ENV !== "production" && !T(t) && y(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), ei(e, t, n);
}
function ei(e, t, { immediate: n, deep: o, flush: r, onTrack: i, onTrigger: l } = k) {
  var c;
  a.NODE_ENV !== "production" && !t && (n !== void 0 && y(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && y(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const f = (P) => {
    y(
      "Invalid watch source: ",
      P,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = Wi() === ((c = G) == null ? void 0 : c.scope) ? G : null;
  let g, p = !1, b = !1;
  if (Z(e) ? (g = () => e.value, p = fn(e)) : tt(e) ? (g = () => e, o = !0) : $(e) ? (b = !0, p = e.some((P) => tt(P) || fn(P)), g = () => e.map((P) => {
    if (Z(P))
      return P.value;
    if (tt(P))
      return Et(P);
    if (T(P))
      return Re(P, d, 2);
    a.NODE_ENV !== "production" && f(P);
  })) : T(e) ? t ? g = () => Re(e, d, 2) : g = () => {
    if (!(d && d.isUnmounted))
      return x && x(), _e(
        e,
        d,
        3,
        [H]
      );
  } : (g = Q, a.NODE_ENV !== "production" && f(e)), t && o) {
    const P = g;
    g = () => Et(P());
  }
  let x, H = (P) => {
    x = L.onStop = () => {
      Re(P, d, 4), x = L.onStop = void 0;
    };
  }, S;
  if (Ht)
    if (H = Q, t ? n && _e(t, d, 3, [
      g(),
      b ? [] : void 0,
      H
    ]) : g(), r === "sync") {
      const P = rc();
      S = P.__watcherHandles || (P.__watcherHandles = []);
    } else
      return Q;
  let q = b ? new Array(e.length).fill(Zt) : Zt;
  const X = () => {
    if (L.active)
      if (t) {
        const P = L.run();
        (o || p || (b ? P.some(($e, Oe) => lt($e, q[Oe])) : lt(P, q))) && (x && x(), _e(t, d, 3, [
          P,
          // pass undefined as the old value when it's changed for the first time
          q === Zt ? void 0 : b && q[0] === Zt ? [] : q,
          H
        ]), q = P);
      } else
        L.run();
  };
  X.allowRecurse = !!t;
  let Ne;
  r === "sync" ? Ne = X : r === "post" ? Ne = () => le(X, d && d.suspense) : (X.pre = !0, d && (X.id = d.uid), Ne = () => wn(X));
  const L = new go(g, Ne);
  a.NODE_ENV !== "production" && (L.onTrack = i, L.onTrigger = l), t ? n ? X() : q = L.run() : r === "post" ? le(
    L.run.bind(L),
    d && d.suspense
  ) : L.run();
  const be = () => {
    L.stop(), d && d.scope && co(d.scope.effects, L);
  };
  return S && S.push(be), be;
}
function Qs(e, t, n) {
  const o = this.proxy, r = z(e) ? e.includes(".") ? ti(o, e) : () => o[e] : e.bind(o, o);
  let i;
  T(t) ? i = t : (i = t.handler, n = t);
  const l = G;
  yt(this);
  const c = ei(r, i.bind(o), n);
  return l ? yt(l) : st(), c;
}
function ti(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
function Et(e, t) {
  if (!K(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), Z(e))
    Et(e.value, t);
  else if ($(e))
    for (let n = 0; n < e.length; n++)
      Et(e[n], t);
  else if (Er(e) || Ge(e))
    e.forEach((n) => {
      Et(n, t);
    });
  else if (br(e))
    for (const n in e)
      Et(e[n], t);
  return e;
}
function ni(e) {
  $i(e) && y("Do not use built-in directive ids as custom directive id: " + e);
}
function Ye(e, t, n, o) {
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
function oi(e, t) {
  return T(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    W({ name: e.name }, t, { setup: e })
  ) : e;
}
const tn = (e) => !!e.type.__asyncLoader, vo = (e) => e.type.__isKeepAlive;
function Gs(e, t) {
  ri(e, "a", t);
}
function el(e, t) {
  ri(e, "da", t);
}
function ri(e, t, n = G) {
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
      vo(r.parent.vnode) && tl(o, t, n, r), r = r.parent;
  }
}
function tl(e, t, n, o) {
  const r = Vn(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  ii(() => {
    co(o[t], r);
  }, n);
}
function Vn(e, t, n = G, o = !1) {
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
    const r = Ze(No[e].replace(/ hook$/, ""));
    y(
      `${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Ae = (e) => (t, n = G) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Ht || e === "sp") && Vn(e, (...o) => t(...o), n)
), nl = Ae("bm"), ol = Ae("m"), rl = Ae("bu"), il = Ae("u"), sl = Ae("bum"), ii = Ae("um"), ll = Ae("sp"), cl = Ae(
  "rtg"
), ul = Ae(
  "rtc"
);
function fl(e, t = G) {
  Vn("ec", e, t);
}
const Gn = (e) => e ? bi(e) ? To(e) || e.proxy : Gn(e.parent) : null, rt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ W(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => a.NODE_ENV !== "production" ? $t(e.props) : e.props,
    $attrs: (e) => a.NODE_ENV !== "production" ? $t(e.attrs) : e.attrs,
    $slots: (e) => a.NODE_ENV !== "production" ? $t(e.slots) : e.slots,
    $refs: (e) => a.NODE_ENV !== "production" ? $t(e.refs) : e.refs,
    $parent: (e) => Gn(e.parent),
    $root: (e) => Gn(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Do(e),
    $forceUpdate: (e) => e.f || (e.f = () => wn(e.update)),
    $nextTick: (e) => e.n || (e.n = xs.bind(e.proxy)),
    $watch: (e) => Qs.bind(e)
  })
), wo = (e) => e === "_" || e === "$", jn = (e, t) => e !== k && !e.__isScriptSetup && R(e, t), si = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: r, props: i, accessCache: l, type: c, appContext: f } = e;
    if (a.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let d;
    if (t[0] !== "$") {
      const x = l[t];
      if (x !== void 0)
        switch (x) {
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
        if (jn(o, t))
          return l[t] = 1, o[t];
        if (r !== k && R(r, t))
          return l[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && R(d, t)
        )
          return l[t] = 3, i[t];
        if (n !== k && R(n, t))
          return l[t] = 4, n[t];
        eo && (l[t] = 0);
      }
    }
    const g = rt[t];
    let p, b;
    if (g)
      return t === "$attrs" ? (ee(e, "get", t), a.NODE_ENV !== "production" && dn()) : a.NODE_ENV !== "production" && t === "$slots" && ee(e, "get", t), g(e);
    if (
      // css module (injected by vue-loader)
      (p = c.__cssModules) && (p = p[t])
    )
      return p;
    if (n !== k && R(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      b = f.config.globalProperties, R(b, t)
    )
      return b[t];
    a.NODE_ENV !== "production" && ue && (!z(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== k && wo(t[0]) && R(r, t) ? y(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === ue && y(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: i } = e;
    return jn(r, t) ? (r[t] = n, !0) : a.NODE_ENV !== "production" && r.__isScriptSetup && R(r, t) ? (y(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== k && R(o, t) ? (o[t] = n, !0) : R(e.props, t) ? (a.NODE_ENV !== "production" && y(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (a.NODE_ENV !== "production" && y(
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
    return !!n[l] || e !== k && R(e, l) || jn(t, l) || (c = i[0]) && R(c, l) || R(o, l) || R(rt, l) || R(r.config.globalProperties, l);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : R(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
a.NODE_ENV !== "production" && (si.ownKeys = (e) => (y(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function al(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(rt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => rt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Q
    });
  }), t;
}
function dl(e) {
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
function pl(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(M(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (wo(o[0])) {
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
function Jo(e) {
  return $(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function hl() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? y(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let eo = !0;
function gl(e) {
  const t = Do(e), n = e.proxy, o = e.ctx;
  eo = !1, t.beforeCreate && Yo(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: l,
    watch: c,
    provide: f,
    inject: d,
    // lifecycle
    created: g,
    beforeMount: p,
    mounted: b,
    beforeUpdate: x,
    updated: H,
    activated: S,
    deactivated: q,
    beforeDestroy: X,
    beforeUnmount: Ne,
    destroyed: L,
    unmounted: be,
    render: P,
    renderTracked: $e,
    renderTriggered: Oe,
    errorCaptured: fe,
    serverPrefetch: ce,
    // public API
    expose: Te,
    inheritAttrs: Se,
    // assets
    components: ae,
    directives: Kt,
    filters: Po
  } = t, Fe = a.NODE_ENV !== "production" ? hl() : null;
  if (a.NODE_ENV !== "production") {
    const [F] = e.propsOptions;
    if (F)
      for (const j in F)
        Fe("Props", j);
  }
  if (d && ml(d, o, Fe), l)
    for (const F in l) {
      const j = l[F];
      T(j) ? (a.NODE_ENV !== "production" ? Object.defineProperty(o, F, {
        value: j.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[F] = j.bind(n), a.NODE_ENV !== "production" && Fe("Methods", F)) : a.NODE_ENV !== "production" && y(
        `Method "${F}" has type "${typeof j}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (r) {
    a.NODE_ENV !== "production" && !T(r) && y(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const F = r.call(n, n);
    if (a.NODE_ENV !== "production" && uo(F) && y(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !K(F))
      a.NODE_ENV !== "production" && y("data() should return an object.");
    else if (e.data = _o(F), a.NODE_ENV !== "production")
      for (const j in F)
        Fe("Data", j), wo(j[0]) || Object.defineProperty(o, j, {
          configurable: !0,
          enumerable: !0,
          get: () => F[j],
          set: Q
        });
  }
  if (eo = !0, i)
    for (const F in i) {
      const j = i[F], ye = T(j) ? j.bind(n, n) : T(j.get) ? j.get.bind(n, n) : Q;
      a.NODE_ENV !== "production" && ye === Q && y(`Computed property "${F}" has no getter.`);
      const Pn = !T(j) && T(j.set) ? j.set.bind(n) : a.NODE_ENV !== "production" ? () => {
        y(
          `Write operation failed: computed property "${F}" is readonly.`
        );
      } : Q, vt = nc({
        get: ye,
        set: Pn
      });
      Object.defineProperty(o, F, {
        enumerable: !0,
        configurable: !0,
        get: () => vt.value,
        set: (dt) => vt.value = dt
      }), a.NODE_ENV !== "production" && Fe("Computed", F);
    }
  if (c)
    for (const F in c)
      li(c[F], o, n, F);
  if (f) {
    const F = T(f) ? f.call(n) : f;
    Reflect.ownKeys(F).forEach((j) => {
      yl(j, F[j]);
    });
  }
  g && Yo(g, e, "c");
  function se(F, j) {
    $(j) ? j.forEach((ye) => F(ye.bind(n))) : j && F(j.bind(n));
  }
  if (se(nl, p), se(ol, b), se(rl, x), se(il, H), se(Gs, S), se(el, q), se(fl, fe), se(ul, $e), se(cl, Oe), se(sl, Ne), se(ii, be), se(ll, ce), $(Te))
    if (Te.length) {
      const F = e.exposed || (e.exposed = {});
      Te.forEach((j) => {
        Object.defineProperty(F, j, {
          get: () => n[j],
          set: (ye) => n[j] = ye
        });
      });
    } else
      e.exposed || (e.exposed = {});
  P && e.render === Q && (e.render = P), Se != null && (e.inheritAttrs = Se), ae && (e.components = ae), Kt && (e.directives = Kt);
}
function ml(e, t, n = Q) {
  $(e) && (e = to(e));
  for (const o in e) {
    const r = e[o];
    let i;
    K(r) ? "default" in r ? i = nn(
      r.from || o,
      r.default,
      !0
      /* treat default function as factory */
    ) : i = nn(r.from || o) : i = nn(r), Z(i) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : t[o] = i, a.NODE_ENV !== "production" && n("Inject", o);
  }
}
function Yo(e, t, n) {
  _e(
    $(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function li(e, t, n, o) {
  const r = o.includes(".") ? ti(n, o) : () => n[o];
  if (z(e)) {
    const i = t[e];
    T(i) ? Fn(r, i) : a.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e}"`, i);
  } else if (T(e))
    Fn(r, e.bind(n));
  else if (K(e))
    if ($(e))
      e.forEach((i) => li(i, t, n, o));
    else {
      const i = T(e.handler) ? e.handler.bind(n) : t[e.handler];
      T(i) ? Fn(r, i, e) : a.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e.handler}"`, i);
    }
  else
    a.NODE_ENV !== "production" && y(`Invalid watch option: "${o}"`, e);
}
function Do(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: l }
  } = e.appContext, c = i.get(t);
  let f;
  return c ? f = c : !r.length && !n && !o ? f = t : (f = {}, r.length && r.forEach(
    (d) => pn(f, d, l, !0)
  ), pn(f, t, l)), K(t) && i.set(t, f), f;
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
      const c = _l[l] || n && n[l];
      e[l] = c ? c(e[l], t[l]) : t[l];
    }
  return e;
}
const _l = {
  data: Xo,
  props: Zo,
  emits: Zo,
  // objects
  methods: Pt,
  computed: Pt,
  // lifecycle
  beforeCreate: oe,
  created: oe,
  beforeMount: oe,
  mounted: oe,
  beforeUpdate: oe,
  updated: oe,
  beforeDestroy: oe,
  beforeUnmount: oe,
  destroyed: oe,
  unmounted: oe,
  activated: oe,
  deactivated: oe,
  errorCaptured: oe,
  serverPrefetch: oe,
  // assets
  components: Pt,
  directives: Pt,
  // watch
  watch: Nl,
  // provide / inject
  provide: Xo,
  inject: El
};
function Xo(e, t) {
  return t ? e ? function() {
    return W(
      T(e) ? e.call(this, this) : e,
      T(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function El(e, t) {
  return Pt(to(e), to(t));
}
function to(e) {
  if ($(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function oe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Pt(e, t) {
  return e ? W(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Zo(e, t) {
  return e ? $(e) && $(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : W(
    /* @__PURE__ */ Object.create(null),
    Jo(e),
    Jo(t ?? {})
  ) : t;
}
function Nl(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = W(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = oe(e[o], t[o]);
  return n;
}
function ci() {
  return {
    app: null,
    config: {
      isNativeTag: _r,
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
let bl = 0;
function Ol(e, t) {
  return function(o, r = null) {
    T(o) || (o = W({}, o)), r != null && !K(r) && (a.NODE_ENV !== "production" && y("root props passed to app.mount() must be an object."), r = null);
    const i = ci();
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
      _uid: bl++,
      _component: o,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: lr,
      get config() {
        return i.config;
      },
      set config(d) {
        a.NODE_ENV !== "production" && y(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...g) {
        return l.has(d) ? a.NODE_ENV !== "production" && y("Plugin has already been applied to target app.") : d && T(d.install) ? (l.add(d), d.install(f, ...g)) : T(d) ? (l.add(d), d(f, ...g)) : a.NODE_ENV !== "production" && y(
          'A plugin must either be a function or an object with an "install" function.'
        ), f;
      },
      mixin(d) {
        return i.mixins.includes(d) ? a.NODE_ENV !== "production" && y(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : i.mixins.push(d), f;
      },
      component(d, g) {
        return a.NODE_ENV !== "production" && io(d, i.config), g ? (a.NODE_ENV !== "production" && i.components[d] && y(`Component "${d}" has already been registered in target app.`), i.components[d] = g, f) : i.components[d];
      },
      directive(d, g) {
        return a.NODE_ENV !== "production" && ni(d), g ? (a.NODE_ENV !== "production" && i.directives[d] && y(`Directive "${d}" has already been registered in target app.`), i.directives[d] = g, f) : i.directives[d];
      },
      mount(d, g, p) {
        if (c)
          a.NODE_ENV !== "production" && y(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          a.NODE_ENV !== "production" && d.__vue_app__ && y(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const b = it(o, r);
          return b.appContext = i, a.NODE_ENV !== "production" && (i.reload = () => {
            e(ze(b), d, p);
          }), g && t ? t(b, d) : e(b, d, p), c = !0, f._container = d, d.__vue_app__ = f, a.NODE_ENV !== "production" && (f._instance = b.component, Rs(f, lr)), To(b.component) || b.component.proxy;
        }
      },
      unmount() {
        c ? (e(null, f._container), a.NODE_ENV !== "production" && (f._instance = null, As(f)), delete f._container.__vue_app__) : a.NODE_ENV !== "production" && y("Cannot unmount an app that is not mounted.");
      },
      provide(d, g) {
        return a.NODE_ENV !== "production" && d in i.provides && y(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ), i.provides[d] = g, f;
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
function yl(e, t) {
  if (!G)
    a.NODE_ENV !== "production" && y("provide() can only be used inside setup().");
  else {
    let n = G.provides;
    const o = G.parent && G.parent.provides;
    o === n && (n = G.provides = Object.create(o)), n[e] = t;
  }
}
function nn(e, t, n = !1) {
  const o = G || ue;
  if (o || hn) {
    const r = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : hn._context.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && T(t) ? t.call(o && o.proxy) : t;
    a.NODE_ENV !== "production" && y(`injection "${String(e)}" not found.`);
  } else
    a.NODE_ENV !== "production" && y("inject() can only be used inside setup() or functional components.");
}
function vl(e, t, n, o = !1) {
  const r = {}, i = {};
  cn(i, Cn, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), ui(e, t, r, i);
  for (const l in e.propsOptions[0])
    l in r || (r[l] = void 0);
  a.NODE_ENV !== "production" && ai(t || {}, r, e), n ? e.props = o ? r : ds(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function wl(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function Dl(e, t, n, o) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: l }
  } = e, c = M(r), [f] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(a.NODE_ENV !== "production" && wl(e)) && (o || l > 0) && !(l & 16)
  ) {
    if (l & 8) {
      const g = e.vnode.dynamicProps;
      for (let p = 0; p < g.length; p++) {
        let b = g[p];
        if (Dn(e.emitsOptions, b))
          continue;
        const x = t[b];
        if (f)
          if (R(i, b))
            x !== i[b] && (i[b] = x, d = !0);
          else {
            const H = Ot(b);
            r[H] = no(
              f,
              c,
              H,
              x,
              e,
              !1
              /* isAbsent */
            );
          }
        else
          x !== i[b] && (i[b] = x, d = !0);
      }
    }
  } else {
    ui(e, t, r, i) && (d = !0);
    let g;
    for (const p in c)
      (!t || // for camelCase
      !R(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((g = Ke(p)) === p || !R(t, g))) && (f ? n && // for camelCase
      (n[p] !== void 0 || // for kebab-case
      n[g] !== void 0) && (r[p] = no(
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
        (!t || !R(t, p)) && (delete i[p], d = !0);
  }
  d && Ce(e, "set", "$attrs"), a.NODE_ENV !== "production" && ai(t || {}, r, e);
}
function ui(e, t, n, o) {
  const [r, i] = e.propsOptions;
  let l = !1, c;
  if (t)
    for (let f in t) {
      if (Qt(f))
        continue;
      const d = t[f];
      let g;
      r && R(r, g = Ot(f)) ? !i || !i.includes(g) ? n[g] = d : (c || (c = {}))[g] = d : Dn(e.emitsOptions, f) || (!(f in o) || d !== o[f]) && (o[f] = d, l = !0);
    }
  if (i) {
    const f = M(n), d = c || k;
    for (let g = 0; g < i.length; g++) {
      const p = i[g];
      n[p] = no(
        r,
        f,
        p,
        d[p],
        e,
        !R(d, p)
      );
    }
  }
  return l;
}
function no(e, t, n, o, r, i) {
  const l = e[n];
  if (l != null) {
    const c = R(l, "default");
    if (c && o === void 0) {
      const f = l.default;
      if (l.type !== Function && !l.skipFactory && T(f)) {
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
    ] && (o === "" || o === Ke(n)) && (o = !0));
  }
  return o;
}
function fi(e, t, n = !1) {
  const o = t.propsCache, r = o.get(e);
  if (r)
    return r;
  const i = e.props, l = {}, c = [];
  let f = !1;
  if (!T(e)) {
    const g = (p) => {
      f = !0;
      const [b, x] = fi(p, t, !0);
      W(l, b), x && c.push(...x);
    };
    !n && t.mixins.length && t.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g);
  }
  if (!i && !f)
    return K(e) && o.set(e, Nt), Nt;
  if ($(i))
    for (let g = 0; g < i.length; g++) {
      a.NODE_ENV !== "production" && !z(i[g]) && y("props must be strings when using array syntax.", i[g]);
      const p = Ot(i[g]);
      Qo(p) && (l[p] = k);
    }
  else if (i) {
    a.NODE_ENV !== "production" && !K(i) && y("invalid props options", i);
    for (const g in i) {
      const p = Ot(g);
      if (Qo(p)) {
        const b = i[g], x = l[p] = $(b) || T(b) ? { type: b } : W({}, b);
        if (x) {
          const H = er(Boolean, x.type), S = er(String, x.type);
          x[
            0
            /* shouldCast */
          ] = H > -1, x[
            1
            /* shouldCastTrue */
          ] = S < 0 || H < S, (H > -1 || R(x, "default")) && c.push(p);
        }
      }
    }
  }
  const d = [l, c];
  return K(e) && o.set(e, d), d;
}
function Qo(e) {
  return e[0] !== "$" ? !0 : (a.NODE_ENV !== "production" && y(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function oo(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function Go(e, t) {
  return oo(e) === oo(t);
}
function er(e, t) {
  return $(t) ? t.findIndex((n) => Go(n, e)) : T(t) && Go(t, e) ? 0 : -1;
}
function ai(e, t, n) {
  const o = M(t), r = n.propsOptions[0];
  for (const i in r) {
    let l = r[i];
    l != null && xl(
      i,
      o[i],
      l,
      !R(e, i) && !R(e, Ke(i))
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
      const d = $(r) ? r : [r], g = [];
      for (let p = 0; p < d.length && !f; p++) {
        const { valid: b, expectedType: x } = Cl(t, d[p]);
        g.push(x || ""), f = b;
      }
      if (!f) {
        y($l(e, t, g));
        return;
      }
    }
    l && !l(t) && y('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Vl = /* @__PURE__ */ Je(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Cl(e, t) {
  let n;
  const o = oo(t);
  if (Vl(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = K(e) : o === "Array" ? n = $(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function $l(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Nn).join(" | ")}`;
  const r = n[0], i = fo(t), l = tr(t, r), c = tr(t, i);
  return n.length === 1 && nr(r) && !Tl(r, i) && (o += ` with value ${l}`), o += `, got ${i} `, nr(i) && (o += `with value ${c}.`), o;
}
function tr(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function nr(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Tl(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const di = (e) => e[0] === "_" || e === "$stable", xo = (e) => $(e) ? e.map(ge) : [ge(e)], Pl = (e, t, n) => {
  if (t._n)
    return t;
  const o = ks((...r) => (a.NODE_ENV !== "production" && G && y(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), xo(t(...r))), n);
  return o._c = !1, o;
}, pi = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (di(r))
      continue;
    const i = e[r];
    if (T(i))
      t[r] = Pl(r, i, o);
    else if (i != null) {
      a.NODE_ENV !== "production" && y(
        `Non-function value encountered for slot "${r}". Prefer function slots for better performance.`
      );
      const l = xo(i);
      t[r] = () => l;
    }
  }
}, hi = (e, t) => {
  a.NODE_ENV !== "production" && !vo(e.vnode) && y(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = xo(t);
  e.slots.default = () => n;
}, Il = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = M(t), cn(t, "_", n)) : pi(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && hi(e, t);
  cn(e.slots, Cn, 1);
}, Ml = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let i = !0, l = k;
  if (o.shapeFlag & 32) {
    const c = t._;
    c ? a.NODE_ENV !== "production" && ot ? (W(r, t), Ce(e, "set", "$slots")) : n && c === 1 ? i = !1 : (W(r, t), !n && c === 1 && delete r._) : (i = !t.$stable, pi(t, r)), l = t;
  } else
    t && (hi(e, t), l = { default: 1 });
  if (i)
    for (const c in r)
      !di(c) && l[c] == null && delete r[c];
};
function ro(e, t, n, o, r = !1) {
  if ($(e)) {
    e.forEach(
      (b, x) => ro(
        b,
        t && ($(t) ? t[x] : t),
        n,
        o,
        r
      )
    );
    return;
  }
  if (tn(o) && !r)
    return;
  const i = o.shapeFlag & 4 ? To(o.component) || o.component.proxy : o.el, l = r ? null : i, { i: c, r: f } = e;
  if (a.NODE_ENV !== "production" && !c) {
    y(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const d = t && t.r, g = c.refs === k ? c.refs = {} : c.refs, p = c.setupState;
  if (d != null && d !== f && (z(d) ? (g[d] = null, R(p, d) && (p[d] = null)) : Z(d) && (d.value = null)), T(f))
    Re(f, c, 12, [l, g]);
  else {
    const b = z(f), x = Z(f);
    if (b || x) {
      const H = () => {
        if (e.f) {
          const S = b ? R(p, f) ? p[f] : g[f] : f.value;
          r ? $(S) && co(S, i) : $(S) ? S.includes(i) || S.push(i) : b ? (g[f] = [i], R(p, f) && (p[f] = g[f])) : (f.value = [i], e.k && (g[e.k] = f.value));
        } else
          b ? (g[f] = l, R(p, f) && (p[f] = l)) : x ? (f.value = l, e.k && (g[e.k] = l)) : a.NODE_ENV !== "production" && y("Invalid template ref type:", f, `(${typeof f})`);
      };
      l ? (H.id = -1, le(H, n)) : H();
    } else
      a.NODE_ENV !== "production" && y("Invalid template ref type:", f, `(${typeof f})`);
  }
}
let xt, Be;
function Ie(e, t) {
  e.appContext.config.performance && gn() && Be.mark(`vue-${t}-${e.uid}`), a.NODE_ENV !== "production" && Hs(e, t, gn() ? Be.now() : Date.now());
}
function Me(e, t) {
  if (e.appContext.config.performance && gn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    Be.mark(o), Be.measure(
      `<${$n(e, e.type)}> ${t}`,
      n,
      o
    ), Be.clearMarks(n), Be.clearMarks(o);
  }
  a.NODE_ENV !== "production" && Ls(e, t, gn() ? Be.now() : Date.now());
}
function gn() {
  return xt !== void 0 || (typeof window < "u" && window.performance ? (xt = !0, Be = window.performance) : xt = !1), xt;
}
function Rl() {
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
function Al(e) {
  return Sl(e);
}
function Sl(e, t) {
  Rl();
  const n = un();
  n.__VUE__ = !0, a.NODE_ENV !== "production" && zr(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: r,
    patchProp: i,
    createElement: l,
    createText: c,
    createComment: f,
    setText: d,
    setElementText: g,
    parentNode: p,
    nextSibling: b,
    setScopeId: x = Q,
    insertStaticContent: H
  } = e, S = (s, u, h, m = null, _ = null, O = null, w = !1, N = null, v = a.NODE_ENV !== "production" && ot ? !1 : !!u.dynamicChildren) => {
    if (s === u)
      return;
    s && !Vt(s, u) && (m = Wt(s), je(s, _, O, !0), s = null), u.patchFlag === -2 && (v = !1, u.dynamicChildren = null);
    const { type: E, ref: V, shapeFlag: D } = u;
    switch (E) {
      case kt:
        q(s, u, h, m);
        break;
      case Ee:
        X(s, u, h, m);
        break;
      case rn:
        s == null ? Ne(u, h, m, w) : a.NODE_ENV !== "production" && L(s, u, h, w);
        break;
      case he:
        Kt(
          s,
          u,
          h,
          m,
          _,
          O,
          w,
          N,
          v
        );
        break;
      default:
        D & 1 ? $e(
          s,
          u,
          h,
          m,
          _,
          O,
          w,
          N,
          v
        ) : D & 6 ? Po(
          s,
          u,
          h,
          m,
          _,
          O,
          w,
          N,
          v
        ) : D & 64 || D & 128 ? E.process(
          s,
          u,
          h,
          m,
          _,
          O,
          w,
          N,
          v,
          pt
        ) : a.NODE_ENV !== "production" && y("Invalid VNode type:", E, `(${typeof E})`);
    }
    V != null && _ && ro(V, s && s.ref, O, u || s, !u);
  }, q = (s, u, h, m) => {
    if (s == null)
      o(
        u.el = c(u.children),
        h,
        m
      );
    else {
      const _ = u.el = s.el;
      u.children !== s.children && d(_, u.children);
    }
  }, X = (s, u, h, m) => {
    s == null ? o(
      u.el = f(u.children || ""),
      h,
      m
    ) : u.el = s.el;
  }, Ne = (s, u, h, m) => {
    [s.el, s.anchor] = H(
      s.children,
      u,
      h,
      m,
      s.el,
      s.anchor
    );
  }, L = (s, u, h, m) => {
    if (u.children !== s.children) {
      const _ = b(s.anchor);
      P(s), [u.el, u.anchor] = H(
        u.children,
        h,
        _,
        m
      );
    } else
      u.el = s.el, u.anchor = s.anchor;
  }, be = ({ el: s, anchor: u }, h, m) => {
    let _;
    for (; s && s !== u; )
      _ = b(s), o(s, h, m), s = _;
    o(u, h, m);
  }, P = ({ el: s, anchor: u }) => {
    let h;
    for (; s && s !== u; )
      h = b(s), r(s), s = h;
    r(u);
  }, $e = (s, u, h, m, _, O, w, N, v) => {
    w = w || u.type === "svg", s == null ? Oe(
      u,
      h,
      m,
      _,
      O,
      w,
      N,
      v
    ) : Te(
      s,
      u,
      _,
      O,
      w,
      N,
      v
    );
  }, Oe = (s, u, h, m, _, O, w, N) => {
    let v, E;
    const { type: V, props: D, shapeFlag: C, transition: I, dirs: A } = s;
    if (v = s.el = l(
      s.type,
      O,
      D && D.is,
      D
    ), C & 8 ? g(v, s.children) : C & 16 && ce(
      s.children,
      v,
      null,
      m,
      _,
      O && V !== "foreignObject",
      w,
      N
    ), A && Ye(s, null, m, "created"), fe(v, s, s.scopeId, w, m), D) {
      for (const U in D)
        U !== "value" && !Qt(U) && i(
          v,
          U,
          null,
          D[U],
          O,
          s.children,
          m,
          _,
          Pe
        );
      "value" in D && i(v, "value", null, D.value), (E = D.onVnodeBeforeMount) && we(E, m, s);
    }
    a.NODE_ENV !== "production" && (Object.defineProperty(v, "__vnode", {
      value: s,
      enumerable: !1
    }), Object.defineProperty(v, "__vueParentComponent", {
      value: m,
      enumerable: !1
    })), A && Ye(s, null, m, "beforeMount");
    const B = Fl(_, I);
    B && I.beforeEnter(v), o(v, u, h), ((E = D && D.onVnodeMounted) || B || A) && le(() => {
      E && we(E, m, s), B && I.enter(v), A && Ye(s, null, m, "mounted");
    }, _);
  }, fe = (s, u, h, m, _) => {
    if (h && x(s, h), m)
      for (let O = 0; O < m.length; O++)
        x(s, m[O]);
    if (_) {
      let O = _.subTree;
      if (a.NODE_ENV !== "production" && O.patchFlag > 0 && O.patchFlag & 2048 && (O = Gr(O.children) || O), u === O) {
        const w = _.vnode;
        fe(
          s,
          w,
          w.scopeId,
          w.slotScopeIds,
          _.parent
        );
      }
    }
  }, ce = (s, u, h, m, _, O, w, N, v = 0) => {
    for (let E = v; E < s.length; E++) {
      const V = s[E] = N ? Ue(s[E]) : ge(s[E]);
      S(
        null,
        V,
        u,
        h,
        m,
        _,
        O,
        w,
        N
      );
    }
  }, Te = (s, u, h, m, _, O, w) => {
    const N = u.el = s.el;
    let { patchFlag: v, dynamicChildren: E, dirs: V } = u;
    v |= s.patchFlag & 16;
    const D = s.props || k, C = u.props || k;
    let I;
    h && Xe(h, !1), (I = C.onVnodeBeforeUpdate) && we(I, h, u, s), V && Ye(u, s, h, "beforeUpdate"), h && Xe(h, !0), a.NODE_ENV !== "production" && ot && (v = 0, w = !1, E = null);
    const A = _ && u.type !== "foreignObject";
    if (E ? (Se(
      s.dynamicChildren,
      E,
      N,
      h,
      m,
      A,
      O
    ), a.NODE_ENV !== "production" && on(s, u)) : w || ye(
      s,
      u,
      N,
      null,
      h,
      m,
      A,
      O,
      !1
    ), v > 0) {
      if (v & 16)
        ae(
          N,
          u,
          D,
          C,
          h,
          m,
          _
        );
      else if (v & 2 && D.class !== C.class && i(N, "class", null, C.class, _), v & 4 && i(N, "style", D.style, C.style, _), v & 8) {
        const B = u.dynamicProps;
        for (let U = 0; U < B.length; U++) {
          const J = B[U], de = D[J], ht = C[J];
          (ht !== de || J === "value") && i(
            N,
            J,
            de,
            ht,
            _,
            s.children,
            h,
            m,
            Pe
          );
        }
      }
      v & 1 && s.children !== u.children && g(N, u.children);
    } else
      !w && E == null && ae(
        N,
        u,
        D,
        C,
        h,
        m,
        _
      );
    ((I = C.onVnodeUpdated) || V) && le(() => {
      I && we(I, h, u, s), V && Ye(u, s, h, "updated");
    }, m);
  }, Se = (s, u, h, m, _, O, w) => {
    for (let N = 0; N < u.length; N++) {
      const v = s[N], E = u[N], V = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        v.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (v.type === he || // - In the case of different nodes, there is going to be a replacement
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
        m,
        _,
        O,
        w,
        !0
      );
    }
  }, ae = (s, u, h, m, _, O, w) => {
    if (h !== m) {
      if (h !== k)
        for (const N in h)
          !Qt(N) && !(N in m) && i(
            s,
            N,
            h[N],
            null,
            w,
            u.children,
            _,
            O,
            Pe
          );
      for (const N in m) {
        if (Qt(N))
          continue;
        const v = m[N], E = h[N];
        v !== E && N !== "value" && i(
          s,
          N,
          E,
          v,
          w,
          u.children,
          _,
          O,
          Pe
        );
      }
      "value" in m && i(s, "value", h.value, m.value);
    }
  }, Kt = (s, u, h, m, _, O, w, N, v) => {
    const E = u.el = s ? s.el : c(""), V = u.anchor = s ? s.anchor : c("");
    let { patchFlag: D, dynamicChildren: C, slotScopeIds: I } = u;
    a.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (ot || D & 2048) && (D = 0, v = !1, C = null), I && (N = N ? N.concat(I) : I), s == null ? (o(E, h, m), o(V, h, m), ce(
      u.children,
      h,
      V,
      _,
      O,
      w,
      N,
      v
    )) : D > 0 && D & 64 && C && // #2715 the previous fragment could've been a BAILed one as a result
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
  }, Po = (s, u, h, m, _, O, w, N, v) => {
    u.slotScopeIds = N, s == null ? u.shapeFlag & 512 ? _.ctx.activate(
      u,
      h,
      m,
      w,
      v
    ) : Fe(
      u,
      h,
      m,
      _,
      O,
      w,
      v
    ) : se(s, u, v);
  }, Fe = (s, u, h, m, _, O, w) => {
    const N = s.component = zl(
      s,
      m,
      _
    );
    if (a.NODE_ENV !== "production" && N.type.__hmrId && Ts(N), a.NODE_ENV !== "production" && (Gt(s), Ie(N, "mount")), vo(s) && (N.ctx.renderer = pt), a.NODE_ENV !== "production" && Ie(N, "init"), Yl(N), a.NODE_ENV !== "production" && Me(N, "init"), N.asyncDep) {
      if (_ && _.registerDep(N, F), !s.el) {
        const v = N.subTree = it(Ee);
        X(null, v, u, h);
      }
      return;
    }
    F(
      N,
      s,
      u,
      h,
      _,
      O,
      w
    ), a.NODE_ENV !== "production" && (en(), Me(N, "mount"));
  }, se = (s, u, h) => {
    const m = u.component = s.component;
    if (zs(s, u, h))
      if (m.asyncDep && !m.asyncResolved) {
        a.NODE_ENV !== "production" && Gt(u), j(m, u, h), a.NODE_ENV !== "production" && en();
        return;
      } else
        m.next = u, Cs(m.update), m.update();
    else
      u.el = s.el, m.vnode = u;
  }, F = (s, u, h, m, _, O, w) => {
    const N = () => {
      if (s.isMounted) {
        let { next: V, bu: D, u: C, parent: I, vnode: A } = s, B = V, U;
        a.NODE_ENV !== "production" && Gt(V || s.vnode), Xe(s, !1), V ? (V.el = A.el, j(s, V, w)) : V = A, D && Dt(D), (U = V.props && V.props.onVnodeBeforeUpdate) && we(U, I, V, A), Xe(s, !0), a.NODE_ENV !== "production" && Ie(s, "render");
        const J = Sn(s);
        a.NODE_ENV !== "production" && Me(s, "render");
        const de = s.subTree;
        s.subTree = J, a.NODE_ENV !== "production" && Ie(s, "patch"), S(
          de,
          J,
          // parent may have changed if it's in a teleport
          p(de.el),
          // anchor may have changed if it's in a fragment
          Wt(de),
          s,
          _,
          O
        ), a.NODE_ENV !== "production" && Me(s, "patch"), V.el = J.el, B === null && Js(s, J.el), C && le(C, _), (U = V.props && V.props.onVnodeUpdated) && le(
          () => we(U, I, V, A),
          _
        ), a.NODE_ENV !== "production" && Jr(s), a.NODE_ENV !== "production" && en();
      } else {
        let V;
        const { el: D, props: C } = u, { bm: I, m: A, parent: B } = s, U = tn(u);
        if (Xe(s, !1), I && Dt(I), !U && (V = C && C.onVnodeBeforeMount) && we(V, B, u), Xe(s, !0), D && Rn) {
          const J = () => {
            a.NODE_ENV !== "production" && Ie(s, "render"), s.subTree = Sn(s), a.NODE_ENV !== "production" && Me(s, "render"), a.NODE_ENV !== "production" && Ie(s, "hydrate"), Rn(
              D,
              s.subTree,
              s,
              _,
              null
            ), a.NODE_ENV !== "production" && Me(s, "hydrate");
          };
          U ? u.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !s.isUnmounted && J()
          ) : J();
        } else {
          a.NODE_ENV !== "production" && Ie(s, "render");
          const J = s.subTree = Sn(s);
          a.NODE_ENV !== "production" && Me(s, "render"), a.NODE_ENV !== "production" && Ie(s, "patch"), S(
            null,
            J,
            h,
            m,
            s,
            _,
            O
          ), a.NODE_ENV !== "production" && Me(s, "patch"), u.el = J.el;
        }
        if (A && le(A, _), !U && (V = C && C.onVnodeMounted)) {
          const J = u;
          le(
            () => we(V, B, J),
            _
          );
        }
        (u.shapeFlag & 256 || B && tn(B.vnode) && B.vnode.shapeFlag & 256) && s.a && le(s.a, _), s.isMounted = !0, a.NODE_ENV !== "production" && Ss(s), u = h = m = null;
      }
    }, v = s.effect = new go(
      N,
      () => wn(E),
      s.scope
      // track it in component's effect scope
    ), E = s.update = () => v.run();
    E.id = s.uid, Xe(s, !0), a.NODE_ENV !== "production" && (v.onTrack = s.rtc ? (V) => Dt(s.rtc, V) : void 0, v.onTrigger = s.rtg ? (V) => Dt(s.rtg, V) : void 0, E.ownerInstance = s), E();
  }, j = (s, u, h) => {
    u.component = s;
    const m = s.vnode.props;
    s.vnode = u, s.next = null, Dl(s, u.props, m, h), Ml(s, u.children, h), ft(), Ko(), at();
  }, ye = (s, u, h, m, _, O, w, N, v = !1) => {
    const E = s && s.children, V = s ? s.shapeFlag : 0, D = u.children, { patchFlag: C, shapeFlag: I } = u;
    if (C > 0) {
      if (C & 128) {
        vt(
          E,
          D,
          h,
          m,
          _,
          O,
          w,
          N,
          v
        );
        return;
      } else if (C & 256) {
        Pn(
          E,
          D,
          h,
          m,
          _,
          O,
          w,
          N,
          v
        );
        return;
      }
    }
    I & 8 ? (V & 16 && Pe(E, _, O), D !== E && g(h, D)) : V & 16 ? I & 16 ? vt(
      E,
      D,
      h,
      m,
      _,
      O,
      w,
      N,
      v
    ) : Pe(E, _, O, !0) : (V & 8 && g(h, ""), I & 16 && ce(
      D,
      h,
      m,
      _,
      O,
      w,
      N,
      v
    ));
  }, Pn = (s, u, h, m, _, O, w, N, v) => {
    s = s || Nt, u = u || Nt;
    const E = s.length, V = u.length, D = Math.min(E, V);
    let C;
    for (C = 0; C < D; C++) {
      const I = u[C] = v ? Ue(u[C]) : ge(u[C]);
      S(
        s[C],
        I,
        h,
        null,
        _,
        O,
        w,
        N,
        v
      );
    }
    E > V ? Pe(
      s,
      _,
      O,
      !0,
      !1,
      D
    ) : ce(
      u,
      h,
      m,
      _,
      O,
      w,
      N,
      v,
      D
    );
  }, vt = (s, u, h, m, _, O, w, N, v) => {
    let E = 0;
    const V = u.length;
    let D = s.length - 1, C = V - 1;
    for (; E <= D && E <= C; ) {
      const I = s[E], A = u[E] = v ? Ue(u[E]) : ge(u[E]);
      if (Vt(I, A))
        S(
          I,
          A,
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
    for (; E <= D && E <= C; ) {
      const I = s[D], A = u[C] = v ? Ue(u[C]) : ge(u[C]);
      if (Vt(I, A))
        S(
          I,
          A,
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
      D--, C--;
    }
    if (E > D) {
      if (E <= C) {
        const I = C + 1, A = I < V ? u[I].el : m;
        for (; E <= C; )
          S(
            null,
            u[E] = v ? Ue(u[E]) : ge(u[E]),
            h,
            A,
            _,
            O,
            w,
            N,
            v
          ), E++;
      }
    } else if (E > C)
      for (; E <= D; )
        je(s[E], _, O, !0), E++;
    else {
      const I = E, A = E, B = /* @__PURE__ */ new Map();
      for (E = A; E <= C; E++) {
        const ne = u[E] = v ? Ue(u[E]) : ge(u[E]);
        ne.key != null && (a.NODE_ENV !== "production" && B.has(ne.key) && y(
          "Duplicate keys found during update:",
          JSON.stringify(ne.key),
          "Make sure keys are unique."
        ), B.set(ne.key, E));
      }
      let U, J = 0;
      const de = C - A + 1;
      let ht = !1, Mo = 0;
      const wt = new Array(de);
      for (E = 0; E < de; E++)
        wt[E] = 0;
      for (E = I; E <= D; E++) {
        const ne = s[E];
        if (J >= de) {
          je(ne, _, O, !0);
          continue;
        }
        let ve;
        if (ne.key != null)
          ve = B.get(ne.key);
        else
          for (U = A; U <= C; U++)
            if (wt[U - A] === 0 && Vt(ne, u[U])) {
              ve = U;
              break;
            }
        ve === void 0 ? je(ne, _, O, !0) : (wt[ve - A] = E + 1, ve >= Mo ? Mo = ve : ht = !0, S(
          ne,
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
      const Ro = ht ? jl(wt) : Nt;
      for (U = Ro.length - 1, E = de - 1; E >= 0; E--) {
        const ne = A + E, ve = u[ne], Ao = ne + 1 < V ? u[ne + 1].el : m;
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
        ) : ht && (U < 0 || E !== Ro[U] ? dt(ve, h, Ao, 2) : U--);
      }
    }
  }, dt = (s, u, h, m, _ = null) => {
    const { el: O, type: w, transition: N, children: v, shapeFlag: E } = s;
    if (E & 6) {
      dt(s.component.subTree, u, h, m);
      return;
    }
    if (E & 128) {
      s.suspense.move(u, h, m);
      return;
    }
    if (E & 64) {
      w.move(s, u, h, pt);
      return;
    }
    if (w === he) {
      o(O, u, h);
      for (let D = 0; D < v.length; D++)
        dt(v[D], u, h, m);
      o(s.anchor, u, h);
      return;
    }
    if (w === rn) {
      be(s, u, h);
      return;
    }
    if (m !== 2 && E & 1 && N)
      if (m === 0)
        N.beforeEnter(O), o(O, u, h), le(() => N.enter(O), _);
      else {
        const { leave: D, delayLeave: C, afterLeave: I } = N, A = () => o(O, u, h), B = () => {
          D(O, () => {
            A(), I && I();
          });
        };
        C ? C(O, A, B) : B();
      }
    else
      o(O, u, h);
  }, je = (s, u, h, m = !1, _ = !1) => {
    const {
      type: O,
      props: w,
      ref: N,
      children: v,
      dynamicChildren: E,
      shapeFlag: V,
      patchFlag: D,
      dirs: C
    } = s;
    if (N != null && ro(N, null, h, s, !0), V & 256) {
      u.ctx.deactivate(s);
      return;
    }
    const I = V & 1 && C, A = !tn(s);
    let B;
    if (A && (B = w && w.onVnodeBeforeUnmount) && we(B, u, s), V & 6)
      Vi(s.component, h, m);
    else {
      if (V & 128) {
        s.suspense.unmount(h, m);
        return;
      }
      I && Ye(s, null, u, "beforeUnmount"), V & 64 ? s.type.remove(
        s,
        u,
        h,
        _,
        pt,
        m
      ) : E && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (O !== he || D > 0 && D & 64) ? Pe(
        E,
        u,
        h,
        !1,
        !0
      ) : (O === he && D & 384 || !_ && V & 16) && Pe(v, u, h), m && In(s);
    }
    (A && (B = w && w.onVnodeUnmounted) || I) && le(() => {
      B && we(B, u, s), I && Ye(s, null, u, "unmounted");
    }, h);
  }, In = (s) => {
    const { type: u, el: h, anchor: m, transition: _ } = s;
    if (u === he) {
      a.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048 && _ && !_.persisted ? s.children.forEach((w) => {
        w.type === Ee ? r(w.el) : In(w);
      }) : xi(h, m);
      return;
    }
    if (u === rn) {
      P(s);
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
  }, Vi = (s, u, h) => {
    a.NODE_ENV !== "production" && s.type.__hmrId && Ps(s);
    const { bum: m, scope: _, update: O, subTree: w, um: N } = s;
    m && Dt(m), _.stop(), O && (O.active = !1, je(w, s, u, h)), N && le(N, u), le(() => {
      s.isUnmounted = !0;
    }, u), u && u.pendingBranch && !u.isUnmounted && s.asyncDep && !s.asyncResolved && s.suspenseId === u.pendingId && (u.deps--, u.deps === 0 && u.resolve()), a.NODE_ENV !== "production" && js(s);
  }, Pe = (s, u, h, m = !1, _ = !1, O = 0) => {
    for (let w = O; w < s.length; w++)
      je(s[w], u, h, m, _);
  }, Wt = (s) => s.shapeFlag & 6 ? Wt(s.component.subTree) : s.shapeFlag & 128 ? s.suspense.next() : b(s.anchor || s.el), Io = (s, u, h) => {
    s == null ? u._vnode && je(u._vnode, null, null, !0) : S(u._vnode || null, s, u, null, null, null, h), Ko(), Kr(), u._vnode = s;
  }, pt = {
    p: S,
    um: je,
    m: dt,
    r: In,
    mt: Fe,
    mc: ce,
    pc: ye,
    pbc: Se,
    n: Wt,
    o: e
  };
  let Mn, Rn;
  return t && ([Mn, Rn] = t(
    pt
  )), {
    render: Io,
    hydrate: Mn,
    createApp: Ol(Io, Mn)
  };
}
function Xe({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Fl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function on(e, t, n = !1) {
  const o = e.children, r = t.children;
  if ($(o) && $(r))
    for (let i = 0; i < o.length; i++) {
      const l = o[i];
      let c = r[i];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = r[i] = Ue(r[i]), c.el = l.el), n || on(l, c)), c.type === kt && (c.el = l.el), a.NODE_ENV !== "production" && c.type === Ee && !c.el && (c.el = l.el);
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
const Hl = (e) => e.__isTeleport, he = Symbol.for("v-fgt"), kt = Symbol.for("v-txt"), Ee = Symbol.for("v-cmt"), rn = Symbol.for("v-stc"), Mt = [];
let me = null;
function gi(e = !1) {
  Mt.push(me = e ? null : []);
}
function Ll() {
  Mt.pop(), me = Mt[Mt.length - 1] || null;
}
let jt = 1;
function or(e) {
  jt += e;
}
function Ul(e) {
  return e.dynamicChildren = jt > 0 ? me || Nt : null, Ll(), jt > 0 && me && me.push(e), e;
}
function mi(e, t, n, o, r, i) {
  return Ul(
    ie(
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
function Vo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Vt(e, t) {
  return a.NODE_ENV !== "production" && t.shapeFlag & 6 && mt.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const Bl = (...e) => Ei(
  ...e
), Cn = "__vInternal", _i = ({ key: e }) => e ?? null, sn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? z(e) || Z(e) || T(e) ? { i: ue, r: e, k: t, f: !!n } : e : null);
function ie(e, t = null, n = null, o = 0, r = null, i = e === he ? 0 : 1, l = !1, c = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && _i(t),
    ref: t && sn(t),
    scopeId: xn,
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
    ctx: ue
  };
  return c ? (Co(f, n), i & 128 && e.normalize(f)) : n && (f.shapeFlag |= z(n) ? 8 : 16), a.NODE_ENV !== "production" && f.key !== f.key && y("VNode created with invalid key (NaN). VNode type:", f.type), jt > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  me && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && me.push(f), f;
}
const it = a.NODE_ENV !== "production" ? Bl : Ei;
function Ei(e, t = null, n = null, o = 0, r = null, i = !1) {
  if ((!e || e === Ys) && (a.NODE_ENV !== "production" && !e && y(`Invalid vnode type when creating vnode: ${e}.`), e = Ee), Vo(e)) {
    const c = ze(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Co(c, n), jt > 0 && !i && me && (c.shapeFlag & 6 ? me[me.indexOf(e)] = c : me.push(c)), c.patchFlag |= -2, c;
  }
  if (vi(e) && (e = e.__vccOpts), t) {
    t = kl(t);
    let { class: c, style: f } = t;
    c && !z(c) && (t.class = ho(c)), K(f) && (Yn(f) && !$(f) && (f = W({}, f)), t.style = po(f));
  }
  const l = z(e) ? 1 : Xs(e) ? 128 : Hl(e) ? 64 : K(e) ? 4 : T(e) ? 2 : 0;
  return a.NODE_ENV !== "production" && l & 4 && Yn(e) && (e = M(e), y(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), ie(
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
function kl(e) {
  return e ? Yn(e) || Cn in e ? W({}, e) : e : null;
}
function ze(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: i, children: l } = e, c = t ? Kl(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && _i(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? $(r) ? r.concat(sn(t)) : [r, sn(t)] : sn(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a.NODE_ENV !== "production" && i === -1 && $(l) ? l.map(Ni) : l,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== he ? i === -1 ? 16 : i | 16 : i,
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
    ssContent: e.ssContent && ze(e.ssContent),
    ssFallback: e.ssFallback && ze(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Ni(e) {
  const t = ze(e);
  return $(e.children) && (t.children = e.children.map(Ni)), t;
}
function ut(e = " ", t = 0) {
  return it(kt, null, e, t);
}
function ge(e) {
  return e == null || typeof e == "boolean" ? it(Ee) : $(e) ? it(
    he,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? Ue(e) : it(kt, null, String(e));
}
function Ue(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ze(e);
}
function Co(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if ($(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Co(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(Cn in t) ? t._ctx = ue : r === 3 && ue && (ue.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    T(t) ? (t = { default: t, _ctx: ue }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [ut(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Kl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = ho([t.class, o.class]));
      else if (r === "style")
        t.style = po([t.style, o.style]);
      else if (Ut(r)) {
        const i = t[r], l = o[r];
        l && i !== l && !($(i) && i.includes(l)) && (t[r] = i ? [].concat(i, l) : l);
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
const Wl = ci();
let ql = 0;
function zl(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || Wl, i = {
    uid: ql++,
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
    scope: new ki(
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
    propsOptions: fi(o, r),
    emitsOptions: Xr(o, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: k,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: k,
    data: k,
    props: k,
    attrs: k,
    slots: k,
    refs: k,
    setupState: k,
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
  return a.NODE_ENV !== "production" ? i.ctx = al(i) : i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Bs.bind(null, i), e.ce && e.ce(i), i;
}
let G = null, $o, gt, rr = "__VUE_INSTANCE_SETTERS__";
(gt = un()[rr]) || (gt = un()[rr] = []), gt.push((e) => G = e), $o = (e) => {
  gt.length > 1 ? gt.forEach((t) => t(e)) : gt[0](e);
};
const yt = (e) => {
  $o(e), e.scope.on();
}, st = () => {
  G && G.scope.off(), $o(null);
}, Jl = /* @__PURE__ */ Je("slot,component");
function io(e, t) {
  const n = t.isNativeTag || _r;
  (Jl(e) || n(e)) && y(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function bi(e) {
  return e.vnode.shapeFlag & 4;
}
let Ht = !1;
function Yl(e, t = !1) {
  Ht = t;
  const { props: n, children: o } = e.vnode, r = bi(e);
  vl(e, n, r, t), Il(e, o);
  const i = r ? Xl(e, t) : void 0;
  return Ht = !1, i;
}
function Xl(e, t) {
  var n;
  const o = e.type;
  if (a.NODE_ENV !== "production") {
    if (o.name && io(o.name, e.appContext.config), o.components) {
      const i = Object.keys(o.components);
      for (let l = 0; l < i.length; l++)
        io(i[l], e.appContext.config);
    }
    if (o.directives) {
      const i = Object.keys(o.directives);
      for (let l = 0; l < i.length; l++)
        ni(i[l]);
    }
    o.compilerOptions && Zl() && y(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Sr(new Proxy(e.ctx, si)), a.NODE_ENV !== "production" && dl(e);
  const { setup: r } = o;
  if (r) {
    const i = e.setupContext = r.length > 1 ? Gl(e) : null;
    yt(e), ft();
    const l = Re(
      r,
      e,
      0,
      [a.NODE_ENV !== "production" ? $t(e.props) : e.props, i]
    );
    if (at(), st(), uo(l)) {
      if (l.then(st, st), t)
        return l.then((c) => {
          ir(e, c, t);
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
      ir(e, l, t);
  } else
    Oi(e, t);
}
function ir(e, t, n) {
  T(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : K(t) ? (a.NODE_ENV !== "production" && Vo(t) && y(
    "setup() should not return VNodes directly - return a render function instead."
  ), a.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Hr(t), a.NODE_ENV !== "production" && pl(e)) : a.NODE_ENV !== "production" && t !== void 0 && y(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Oi(e, n);
}
let so;
const Zl = () => !so;
function Oi(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && so && !o.render) {
      const r = o.template || Do(e).template;
      if (r) {
        a.NODE_ENV !== "production" && Ie(e, "compile");
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
        o.render = so(r, d), a.NODE_ENV !== "production" && Me(e, "compile");
      }
    }
    e.render = o.render || Q;
  }
  {
    yt(e), ft();
    try {
      gl(e);
    } finally {
      at(), st();
    }
  }
  a.NODE_ENV !== "production" && !o.render && e.render === Q && !t && (o.template ? y(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : y("Component is missing template or render function."));
}
function sr(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    a.NODE_ENV !== "production" ? {
      get(t, n) {
        return dn(), ee(e, "get", "$attrs"), t[n];
      },
      set() {
        return y("setupContext.attrs is readonly."), !1;
      },
      deleteProperty() {
        return y("setupContext.attrs is readonly."), !1;
      }
    } : {
      get(t, n) {
        return ee(e, "get", "$attrs"), t[n];
      }
    }
  ));
}
function Ql(e) {
  return e.slotsProxy || (e.slotsProxy = new Proxy(e.slots, {
    get(t, n) {
      return ee(e, "get", "$slots"), t[n];
    }
  }));
}
function Gl(e) {
  const t = (n) => {
    if (a.NODE_ENV !== "production" && (e.exposed && y("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && ($(n) ? o = "array" : Z(n) && (o = "ref")), o !== "object" && y(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  return a.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return sr(e);
    },
    get slots() {
      return Ql(e);
    },
    get emit() {
      return (n, ...o) => e.emit(n, ...o);
    },
    expose: t
  }) : {
    get attrs() {
      return sr(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function To(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Hr(Sr(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in rt)
          return rt[n](e);
      },
      has(t, n) {
        return n in t || n in rt;
      }
    }));
}
const ec = /(?:^|[-_])(\w)/g, tc = (e) => e.replace(ec, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function yi(e, t = !0) {
  return T(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function $n(e, t, n = !1) {
  let o = yi(t);
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
  return o ? tc(o) : n ? "App" : "Anonymous";
}
function vi(e) {
  return T(e) && "__vccOpts" in e;
}
const nc = (e, t) => Ns(e, t, Ht), oc = Symbol.for("v-scx"), rc = () => {
  {
    const e = nn(oc);
    return e || a.NODE_ENV !== "production" && y(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Hn(e) {
  return !!(e && e.__v_isShallow);
}
function ic() {
  if (a.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, r = {
    header(p) {
      return K(p) ? p.__isVue ? ["div", e, "VueInstance"] : Z(p) ? [
        "div",
        {},
        ["span", e, g(p)],
        "<",
        c(p.value),
        ">"
      ] : tt(p) ? [
        "div",
        {},
        ["span", e, Hn(p) ? "ShallowReactive" : "Reactive"],
        "<",
        c(p),
        `>${qe(p) ? " (readonly)" : ""}`
      ] : qe(p) ? [
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
    p.type.props && p.props && b.push(l("props", M(p.props))), p.setupState !== k && b.push(l("setup", p.setupState)), p.data !== k && b.push(l("data", M(p.data)));
    const x = f(p, "computed");
    x && b.push(l("computed", x));
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
        ...Object.keys(b).map((x) => [
          "div",
          {},
          ["span", o, x + ": "],
          c(b[x], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(p, b = !0) {
    return typeof p == "number" ? ["span", t, p] : typeof p == "string" ? ["span", n, JSON.stringify(p)] : typeof p == "boolean" ? ["span", o, p] : K(p) ? ["object", { object: b ? M(p) : p }] : ["span", n, String(p)];
  }
  function f(p, b) {
    const x = p.type;
    if (T(x))
      return;
    const H = {};
    for (const S in p.ctx)
      d(x, S, b) && (H[S] = p.ctx[S]);
    return H;
  }
  function d(p, b, x) {
    const H = p[x];
    if ($(H) && H.includes(b) || K(H) && b in H || p.extends && d(p.extends, b, x) || p.mixins && p.mixins.some((S) => d(S, b, x)))
      return !0;
  }
  function g(p) {
    return Hn(p) ? "ShallowRef" : p.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const lr = "3.3.10";
var Lt = {};
const sc = "http://www.w3.org/2000/svg", Qe = typeof document < "u" ? document : null, cr = Qe && /* @__PURE__ */ Qe.createElement("template"), lc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t ? Qe.createElementNS(sc, e) : Qe.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => Qe.createTextNode(e),
  createComment: (e) => Qe.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Qe.querySelector(e),
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
      cr.innerHTML = o ? `<svg>${e}</svg>` : e;
      const c = cr.content;
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
}, cc = Symbol("_vtc");
function uc(e, t, n) {
  const o = e[cc];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const fc = Symbol("_vod");
function ac(e, t, n) {
  const o = e.style, r = z(n);
  if (n && !r) {
    if (t && !z(t))
      for (const i in t)
        n[i] == null && lo(o, i, "");
    for (const i in n)
      lo(o, i, n[i]);
  } else {
    const i = o.display;
    r ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), fc in e && (o.display = i);
  }
}
const dc = /[^\\];\s*$/, ur = /\s*!important$/;
function lo(e, t, n) {
  if ($(n))
    n.forEach((o) => lo(e, t, o));
  else if (n == null && (n = ""), Lt.NODE_ENV !== "production" && dc.test(n) && y(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = pc(e, t);
    ur.test(n) ? e.setProperty(
      Ke(o),
      n.replace(ur, ""),
      "important"
    ) : e[o] = n;
  }
}
const fr = ["Webkit", "Moz", "ms"], Ln = {};
function pc(e, t) {
  const n = Ln[t];
  if (n)
    return n;
  let o = Ot(t);
  if (o !== "filter" && o in e)
    return Ln[t] = o;
  o = Nn(o);
  for (let r = 0; r < fr.length; r++) {
    const i = fr[r] + o;
    if (i in e)
      return Ln[t] = i;
  }
  return t;
}
const ar = "http://www.w3.org/1999/xlink";
function hc(e, t, n, o, r) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(ar, t.slice(6, t.length)) : e.setAttributeNS(ar, t, n);
  else {
    const i = Bi(t);
    n == null || i && !Or(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : n);
  }
}
function gc(e, t, n, o, r, i, l) {
  if (t === "innerHTML" || t === "textContent") {
    o && l(o, r, i), e[t] = n ?? "";
    return;
  }
  const c = e.tagName;
  if (t === "value" && c !== "PROGRESS" && // custom elements may use _value internally
  !c.includes("-")) {
    e._value = n;
    const d = c === "OPTION" ? e.getAttribute("value") : e.value, g = n ?? "";
    d !== g && (e.value = g), n == null && e.removeAttribute(t);
    return;
  }
  let f = !1;
  if (n === "" || n == null) {
    const d = typeof e[t];
    d === "boolean" ? n = Or(n) : n == null && d === "string" ? (n = "", f = !0) : d === "number" && (n = 0, f = !0);
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
function _c(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const dr = Symbol("_vei");
function Ec(e, t, n, o, r = null) {
  const i = e[dr] || (e[dr] = {}), l = i[t];
  if (o && l)
    l.value = o;
  else {
    const [c, f] = Nc(t);
    if (o) {
      const d = i[t] = yc(o, r);
      mc(e, c, d, f);
    } else
      l && (_c(e, c, l, f), i[t] = void 0);
  }
}
const pr = /(?:Once|Passive|Capture)$/;
function Nc(e) {
  let t;
  if (pr.test(e)) {
    t = {};
    let o;
    for (; o = e.match(pr); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ke(e.slice(2)), t];
}
let Un = 0;
const bc = /* @__PURE__ */ Promise.resolve(), Oc = () => Un || (bc.then(() => Un = 0), Un = Date.now());
function yc(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    _e(
      vc(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = Oc(), n;
}
function vc(e, t) {
  if ($(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((o) => (r) => !r._stopped && o && o(r));
  } else
    return t;
}
const hr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, wc = (e, t, n, o, r = !1, i, l, c, f) => {
  t === "class" ? uc(e, o, r) : t === "style" ? ac(e, n, o) : Ut(t) ? ln(t) || Ec(e, t, n, o, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Dc(e, t, o, r)) ? gc(
    e,
    t,
    o,
    i,
    l,
    c,
    f
  ) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), hc(e, t, o, r));
};
function Dc(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && hr(t) && T(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    return !(r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE");
  }
  return hr(t) && z(n) ? !1 : t in e;
}
const xc = /* @__PURE__ */ W({ patchProp: wc }, lc);
let gr;
function Vc() {
  return gr || (gr = Al(xc));
}
const Cc = (...e) => {
  const t = Vc().createApp(...e);
  Lt.NODE_ENV !== "production" && ($c(t), Tc(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const r = Pc(o);
    if (!r)
      return;
    const i = t._component;
    !T(i) && !i.render && !i.template && (i.template = r.innerHTML), r.innerHTML = "";
    const l = n(r, !1, r instanceof SVGElement);
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), l;
  }, t;
};
function $c(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Hi(t) || Li(t),
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
function Pc(e) {
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
function Mc() {
  ic();
}
Ic.NODE_ENV !== "production" && Mc();
const Tn = (e) => (Zr("data-v-1d5be6d4"), e = e(), Qr(), e), Rc = { class: "card" }, Ac = /* @__PURE__ */ Tn(() => /* @__PURE__ */ ie("p", null, [
  /* @__PURE__ */ ut(" Edit "),
  /* @__PURE__ */ ie("code", null, "components/HelloWorld.vue"),
  /* @__PURE__ */ ut(" to test HMR ")
], -1)), Sc = /* @__PURE__ */ Tn(() => /* @__PURE__ */ ie("p", null, [
  /* @__PURE__ */ ut(" Check out "),
  /* @__PURE__ */ ie("a", {
    href: "https://vuejs.org/guide/quick-start.html#local",
    target: "_blank"
  }, "create-vue"),
  /* @__PURE__ */ ut(", the official Vue + Vite starter ")
], -1)), Fc = /* @__PURE__ */ Tn(() => /* @__PURE__ */ ie("p", null, [
  /* @__PURE__ */ ut(" Install "),
  /* @__PURE__ */ ie("a", {
    href: "https://github.com/vuejs/language-tools",
    target: "_blank"
  }, "Volar"),
  /* @__PURE__ */ ut(" in your IDE for a better DX ")
], -1)), jc = /* @__PURE__ */ Tn(() => /* @__PURE__ */ ie("p", { class: "read-the-docs" }, "Click on the Vite and Vue logos to learn more", -1)), Hc = /* @__PURE__ */ oi({
  __name: "HelloWorld",
  props: {
    msg: {}
  },
  setup(e) {
    const t = ps(0);
    return (n, o) => (gi(), mi(he, null, [
      ie("h1", null, kn(n.msg), 1),
      ie("div", Rc, [
        ie("button", {
          type: "button",
          onClick: o[0] || (o[0] = (r) => t.value++)
        }, "count is " + kn(t.value), 1),
        Ac
      ]),
      Sc,
      Fc,
      jc
    ], 64));
  }
}), wi = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Lc = /* @__PURE__ */ wi(Hc, [["__scopeId", "data-v-1d5be6d4"]]), Bn = "HelloWorld2InnerPageJsApp", Uc = "HelloWorld2", Bc = /* @__PURE__ */ oi({
  name: "App",
  components: {
    HelloWorld: Lc
  },
  data() {
    return {
      count: 0,
      messagePort: null
    };
  },
  computed: {
    registered() {
      return this.$data.messagePort !== null;
    }
  },
  created() {
    console.debug("App created!"), this.initMessageReceiver();
  },
  mounted() {
  },
  unmounted() {
    this.removeMessageReceiver();
  },
  methods: {
    handleClick(e) {
      e.stopPropagation(), e.preventDefault(), console.debug("handleClick", e), this.postMessage("clickButton", void 0);
    },
    initMessageReceiver() {
      console.debug("initMessageReceiver"), window.addEventListener("message", this.registerMessagePort.bind(this));
    },
    removeMessageReceiver() {
      var e;
      window.removeEventListener("message", this.registerMessagePort.bind(this)), (e = this.$data.messagePort) == null || e.close();
    },
    registerMessagePort(e) {
      console.debug("registerMessagePort", e);
      const { from: t, to: n, event: o } = e.data;
      if (console.debug("{from, to, event}", JSON.stringify({ from: t, to: n, event: o })), t === "HelloWorld2" && n === Bn && o === "registerMessageHandler" && !this.registered) {
        const r = e.ports[0];
        console.debug("port2", r), this.$data.messagePort = r, this.$data.messagePort.onmessage = this.messageReceiver;
      }
    },
    messageReceiver(e) {
      console.debug("messageReceiver");
      const { from: t, to: n, event: o, payload: r } = e.data;
      if (n === Bn)
        switch (console.debug({ from: t, to: n, event: o, payload: r }), t) {
          case "HelloWorld2":
            this.handleMessageFromHelloWorld2(o, r);
            break;
        }
    },
    handleMessageFromHelloWorld2(e, t) {
      switch (console.debug("handleMessageFromHelloWorld2", { event: e, payload: t }), e) {
        case "clickButton":
          this.$data.count++;
          break;
      }
    },
    postMessage(e, t) {
      var n;
      console.debug("postMessage"), console.debug("this.$data.messagePort", this.$data.messagePort), (n = this.$data.messagePort) == null || n.postMessage({
        from: Bn,
        to: Uc,
        event: e,
        payload: t
      });
    }
  }
}), kc = (e) => (Zr("data-v-ffca5c78"), e = e(), Qr(), e), Kc = { ref: "root" }, Wc = /* @__PURE__ */ kc(() => /* @__PURE__ */ ie("hr", null, null, -1));
function qc(e, t, n, o, r, i) {
  return gi(), mi("div", Kc, [
    ie("p", null, "LWC のボタンが押された回数: " + kn(e.count), 1),
    ie("button", {
      onClick: t[0] || (t[0] = (...l) => e.handleClick && e.handleClick(...l))
    }, "Vue app 内のボタン"),
    Wc
  ], 512);
}
const Di = /* @__PURE__ */ wi(Bc, [["render", qc], ["__scopeId", "data-v-ffca5c78"]]);
console.debug("HelloWorld2InnerPageJsApp: main.ts", Di);
Cc(Di).mount("#app");
