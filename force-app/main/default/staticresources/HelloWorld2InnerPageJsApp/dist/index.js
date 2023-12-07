var br = {};
function Ze(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let r = 0; r < o.length; r++)
    n[o[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const k = br.NODE_ENV !== "production" ? Object.freeze({}) : {}, Ot = br.NODE_ENV !== "production" ? Object.freeze([]) : [], ee = () => {
}, Or = () => !1, Bt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), cn = (e) => e.startsWith("onUpdate:"), W = Object.assign, co = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Pi = Object.prototype.hasOwnProperty, R = (e, t) => Pi.call(e, t), $ = Array.isArray, tt = (e) => En(e) === "[object Map]", yr = (e) => En(e) === "[object Set]", T = (e) => typeof e == "function", z = (e) => typeof e == "string", _n = (e) => typeof e == "symbol", K = (e) => e !== null && typeof e == "object", uo = (e) => (K(e) || T(e)) && T(e.then) && T(e.catch), vr = Object.prototype.toString, En = (e) => vr.call(e), fo = (e) => En(e).slice(8, -1), wr = (e) => En(e) === "[object Object]", ao = (e) => z(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Gt = /* @__PURE__ */ Ze(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ii = /* @__PURE__ */ Ze(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Nn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Mi = /-(\w)/g, $e = Nn((e) => e.replace(Mi, (t, n) => n ? n.toUpperCase() : "")), Ri = /\B([A-Z])/g, qe = Nn(
  (e) => e.replace(Ri, "-$1").toLowerCase()
), ct = Nn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ge = Nn((e) => e ? `on${ct(e)}` : ""), ut = (e, t) => !Object.is(e, t), Dt = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, un = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Ai = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let jo;
const fn = () => jo || (jo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function po(e) {
  if ($(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = z(o) ? Hi(o) : po(o);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (z(e) || K(e))
    return e;
}
const Si = /;(?![^(]*\))/g, Fi = /:([^]+)/, ji = /\/\*[^]*?\*\//g;
function Hi(e) {
  const t = {};
  return e.replace(ji, "").split(Si).forEach((n) => {
    if (n) {
      const o = n.split(Fi);
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
const Li = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Ui = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Bi = /* @__PURE__ */ Ze(Li), ki = /* @__PURE__ */ Ze(Ui), Ki = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Wi = /* @__PURE__ */ Ze(Ki);
function xr(e) {
  return !!e || e === "";
}
const Bn = (e) => z(e) ? e : e == null ? "" : $(e) || K(e) && (e.toString === vr || !T(e.toString)) ? JSON.stringify(e, Dr, 2) : String(e), Dr = (e, t) => t && t.__v_isRef ? Dr(e, t.value) : tt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [o, r]) => (n[`${o} =>`] = r, n), {})
} : yr(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : K(t) && !$(t) && !wr(t) ? String(t) : t;
var Y = {};
function kn(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let pe;
class qi {
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
      Y.NODE_ENV !== "production" && kn("cannot run an inactive effect scope.");
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
function zi(e, t = pe) {
  t && t.active && t.effects.push(e);
}
function Ji() {
  return pe;
}
const At = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Vr = (e) => (e.w & ze) > 0, Cr = (e) => (e.n & ze) > 0, Yi = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= ze;
}, Zi = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const r = t[o];
      Vr(r) && !Cr(r) ? r.delete(e) : t[n++] = r, r.w &= ~ze, r.n &= ~ze;
    }
    t.length = n;
  }
}, Kn = /* @__PURE__ */ new WeakMap();
let $t = 0, ze = 1;
const Wn = 30;
let ie;
const nt = Symbol(Y.NODE_ENV !== "production" ? "iterate" : ""), qn = Symbol(Y.NODE_ENV !== "production" ? "Map key iterate" : "");
class mo {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, zi(this, o);
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
      return this.parent = ie, ie = this, Ke = !0, ze = 1 << ++$t, $t <= Wn ? Yi(this) : Ho(this), this.fn();
    } finally {
      $t <= Wn && Zi(this), ze = 1 << --$t, ie = this.parent, Ke = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    ie === this ? this.deferStop = !0 : this.active && (Ho(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Ho(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Ke = !0;
const $r = [];
function dt() {
  $r.push(Ke), Ke = !1;
}
function pt() {
  const e = $r.pop();
  Ke = e === void 0 ? !0 : e;
}
function te(e, t, n) {
  if (Ke && ie) {
    let o = Kn.get(e);
    o || Kn.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = At());
    const i = Y.NODE_ENV !== "production" ? { effect: ie, target: e, type: t, key: n } : void 0;
    zn(r, i);
  }
}
function zn(e, t) {
  let n = !1;
  $t <= Wn ? Cr(e) || (e.n |= ze, n = !Vr(e)) : n = !e.has(ie), n && (e.add(ie), ie.deps.push(e), Y.NODE_ENV !== "production" && ie.onTrack && ie.onTrack(
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
  else if (n === "length" && $(e)) {
    const d = Number(o);
    l.forEach((m, p) => {
      (p === "length" || !_n(p) && p >= d) && c.push(m);
    });
  } else
    switch (n !== void 0 && c.push(l.get(n)), t) {
      case "add":
        $(e) ? ao(n) && c.push(l.get("length")) : (c.push(l.get(nt)), tt(e) && c.push(l.get(qn)));
        break;
      case "delete":
        $(e) || (c.push(l.get(nt)), tt(e) && c.push(l.get(qn)));
        break;
      case "set":
        tt(e) && c.push(l.get(nt));
        break;
    }
  const f = Y.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: r, oldTarget: i } : void 0;
  if (c.length === 1)
    c[0] && (Y.NODE_ENV !== "production" ? Nt(c[0], f) : Nt(c[0]));
  else {
    const d = [];
    for (const m of c)
      m && d.push(...m);
    Y.NODE_ENV !== "production" ? Nt(At(d), f) : Nt(At(d));
  }
}
function Nt(e, t) {
  const n = $(e) ? e : [...e];
  for (const o of n)
    o.computed && Lo(o, t);
  for (const o of n)
    o.computed || Lo(o, t);
}
function Lo(e, t) {
  (e !== ie || e.allowRecurse) && (Y.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(W({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const Xi = /* @__PURE__ */ Ze("__proto__,__v_isRef,__isVue"), Tr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_n)
), Uo = /* @__PURE__ */ Qi();
function Qi() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = M(this);
      for (let i = 0, l = this.length; i < l; i++)
        te(o, "get", i + "");
      const r = o[t](...n);
      return r === -1 || r === !1 ? o[t](...n.map(M)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      dt();
      const o = M(this)[t].apply(this, n);
      return pt(), o;
    };
  }), e;
}
function Gi(e) {
  const t = M(this);
  return te(t, "has", e), t.hasOwnProperty(e);
}
class Pr {
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
    if (n === "__v_raw" && o === (r ? i ? jr : Fr : i ? Sr : Ar).get(t))
      return t;
    const l = $(t);
    if (!r) {
      if (l && R(Uo, n))
        return Reflect.get(Uo, n, o);
      if (n === "hasOwnProperty")
        return Gi;
    }
    const c = Reflect.get(t, n, o);
    return (_n(n) ? Tr.has(n) : Xi(n)) || (r || te(t, "get", n), i) ? c : X(c) ? l && ao(n) ? c : c.value : K(c) ? r ? Hr(c) : _o(c) : c;
  }
}
class Ir extends Pr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, r) {
    let i = t[n];
    if (Je(i) && X(i) && !X(o))
      return !1;
    if (!this._shallow && (!an(o) && !Je(o) && (i = M(i), o = M(o)), !$(t) && X(i) && !X(o)))
      return i.value = o, !0;
    const l = $(t) && ao(n) ? Number(n) < t.length : R(t, n), c = Reflect.set(t, n, o, r);
    return t === M(r) && (l ? ut(o, i) && Ce(t, "set", n, o, i) : Ce(t, "add", n, o)), c;
  }
  deleteProperty(t, n) {
    const o = R(t, n), r = t[n], i = Reflect.deleteProperty(t, n);
    return i && o && Ce(t, "delete", n, void 0, r), i;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!_n(n) || !Tr.has(n)) && te(t, "has", n), o;
  }
  ownKeys(t) {
    return te(
      t,
      "iterate",
      $(t) ? "length" : nt
    ), Reflect.ownKeys(t);
  }
}
class Mr extends Pr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return Y.NODE_ENV !== "production" && kn(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return Y.NODE_ENV !== "production" && kn(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const es = /* @__PURE__ */ new Ir(), ts = /* @__PURE__ */ new Mr(), ns = /* @__PURE__ */ new Ir(
  !0
), os = /* @__PURE__ */ new Mr(!0), go = (e) => e, bn = (e) => Reflect.getPrototypeOf(e);
function zt(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = M(e), i = M(t);
  n || (ut(t, i) && te(r, "get", t), te(r, "get", i));
  const { has: l } = bn(r), c = o ? go : n ? Eo : St;
  if (l.call(r, t))
    return c(e.get(t));
  if (l.call(r, i))
    return c(e.get(i));
  e !== r && e.get(t);
}
function Jt(e, t = !1) {
  const n = this.__v_raw, o = M(n), r = M(e);
  return t || (ut(e, r) && te(o, "has", e), te(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function Yt(e, t = !1) {
  return e = e.__v_raw, !t && te(M(e), "iterate", nt), Reflect.get(e, "size", e);
}
function Bo(e) {
  e = M(e);
  const t = M(this);
  return bn(t).has.call(t, e) || (t.add(e), Ce(t, "add", e, e)), this;
}
function ko(e, t) {
  t = M(t);
  const n = M(this), { has: o, get: r } = bn(n);
  let i = o.call(n, e);
  i ? Y.NODE_ENV !== "production" && Rr(n, o, e) : (e = M(e), i = o.call(n, e));
  const l = r.call(n, e);
  return n.set(e, t), i ? ut(t, l) && Ce(n, "set", e, t, l) : Ce(n, "add", e, t), this;
}
function Ko(e) {
  const t = M(this), { has: n, get: o } = bn(t);
  let r = n.call(t, e);
  r ? Y.NODE_ENV !== "production" && Rr(t, n, e) : (e = M(e), r = n.call(t, e));
  const i = o ? o.call(t, e) : void 0, l = t.delete(e);
  return r && Ce(t, "delete", e, void 0, i), l;
}
function Wo() {
  const e = M(this), t = e.size !== 0, n = Y.NODE_ENV !== "production" ? tt(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && Ce(e, "clear", void 0, void 0, n), o;
}
function Zt(e, t) {
  return function(o, r) {
    const i = this, l = i.__v_raw, c = M(l), f = t ? go : e ? Eo : St;
    return !e && te(c, "iterate", nt), l.forEach((d, m) => o.call(r, f(d), f(m), i));
  };
}
function Xt(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, i = M(r), l = tt(i), c = e === "entries" || e === Symbol.iterator && l, f = e === "keys" && l, d = r[e](...o), m = n ? go : t ? Eo : St;
    return !t && te(
      i,
      "iterate",
      f ? qn : nt
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
function Le(e) {
  return function(...t) {
    if (Y.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(
        `${ct(e)} operation ${n}failed: target is readonly.`,
        M(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function rs() {
  const e = {
    get(i) {
      return zt(this, i);
    },
    get size() {
      return Yt(this);
    },
    has: Jt,
    add: Bo,
    set: ko,
    delete: Ko,
    clear: Wo,
    forEach: Zt(!1, !1)
  }, t = {
    get(i) {
      return zt(this, i, !1, !0);
    },
    get size() {
      return Yt(this);
    },
    has: Jt,
    add: Bo,
    set: ko,
    delete: Ko,
    clear: Wo,
    forEach: Zt(!1, !0)
  }, n = {
    get(i) {
      return zt(this, i, !0);
    },
    get size() {
      return Yt(this, !0);
    },
    has(i) {
      return Jt.call(this, i, !0);
    },
    add: Le("add"),
    set: Le("set"),
    delete: Le("delete"),
    clear: Le("clear"),
    forEach: Zt(!0, !1)
  }, o = {
    get(i) {
      return zt(this, i, !0, !0);
    },
    get size() {
      return Yt(this, !0);
    },
    has(i) {
      return Jt.call(this, i, !0);
    },
    add: Le("add"),
    set: Le("set"),
    delete: Le("delete"),
    clear: Le("clear"),
    forEach: Zt(!0, !0)
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
  is,
  ss,
  ls,
  cs
] = /* @__PURE__ */ rs();
function On(e, t) {
  const n = t ? e ? cs : ls : e ? ss : is;
  return (o, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(
    R(n, r) && r in o ? n : o,
    r,
    i
  );
}
const us = {
  get: /* @__PURE__ */ On(!1, !1)
}, fs = {
  get: /* @__PURE__ */ On(!1, !0)
}, as = {
  get: /* @__PURE__ */ On(!0, !1)
}, ds = {
  get: /* @__PURE__ */ On(!0, !0)
};
function Rr(e, t, n) {
  const o = M(n);
  if (o !== n && t.call(e, o)) {
    const r = fo(e);
    console.warn(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Ar = /* @__PURE__ */ new WeakMap(), Sr = /* @__PURE__ */ new WeakMap(), Fr = /* @__PURE__ */ new WeakMap(), jr = /* @__PURE__ */ new WeakMap();
function ps(e) {
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
function hs(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ps(fo(e));
}
function _o(e) {
  return Je(e) ? e : yn(
    e,
    !1,
    es,
    us,
    Ar
  );
}
function ms(e) {
  return yn(
    e,
    !1,
    ns,
    fs,
    Sr
  );
}
function Hr(e) {
  return yn(
    e,
    !0,
    ts,
    as,
    Fr
  );
}
function Tt(e) {
  return yn(
    e,
    !0,
    os,
    ds,
    jr
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
  const l = hs(e);
  if (l === 0)
    return e;
  const c = new Proxy(
    e,
    l === 2 ? o : n
  );
  return r.set(e, c), c;
}
function ot(e) {
  return Je(e) ? ot(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Je(e) {
  return !!(e && e.__v_isReadonly);
}
function an(e) {
  return !!(e && e.__v_isShallow);
}
function Jn(e) {
  return ot(e) || Je(e);
}
function M(e) {
  const t = e && e.__v_raw;
  return t ? M(t) : e;
}
function Lr(e) {
  return un(e, "__v_skip", !0), e;
}
const St = (e) => K(e) ? _o(e) : e, Eo = (e) => K(e) ? Hr(e) : e;
function Ur(e) {
  Ke && ie && (e = M(e), Y.NODE_ENV !== "production" ? zn(e.dep || (e.dep = At()), {
    target: e,
    type: "get",
    key: "value"
  }) : zn(e.dep || (e.dep = At())));
}
function Br(e, t) {
  e = M(e);
  const n = e.dep;
  n && (Y.NODE_ENV !== "production" ? Nt(n, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : Nt(n));
}
function X(e) {
  return !!(e && e.__v_isRef === !0);
}
function gs(e) {
  return _s(e, !1);
}
function _s(e, t) {
  return X(e) ? e : new Es(e, t);
}
class Es {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : M(t), this._value = n ? t : St(t);
  }
  get value() {
    return Ur(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || an(t) || Je(t);
    t = n ? t : M(t), ut(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : St(t), Br(this, t));
  }
}
function Ns(e) {
  return X(e) ? e.value : e;
}
const bs = {
  get: (e, t, n) => Ns(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return X(r) && !X(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function kr(e) {
  return ot(e) ? e : new Proxy(e, bs);
}
class Os {
  constructor(t, n, o, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new mo(t, () => {
      this._dirty || (this._dirty = !0, Br(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = M(this);
    return Ur(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
function ys(e, t, n = !1) {
  let o, r;
  const i = T(e);
  i ? (o = e, r = Y.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : ee) : (o = e.get, r = e.set);
  const l = new Os(o, r, i || !r, n);
  return Y.NODE_ENV !== "production" && t && !n && (l.effect.onTrack = t.onTrack, l.effect.onTrigger = t.onTrigger), l;
}
var a = {};
const rt = [];
function en(e) {
  rt.push(e);
}
function tn() {
  rt.pop();
}
function y(e, ...t) {
  if (a.NODE_ENV === "production")
    return;
  dt();
  const n = rt.length ? rt[rt.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = vs();
  if (o)
    Ae(
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
`, ...ws(r)), console.warn(...i);
  }
  pt();
}
function vs() {
  let e = rt[rt.length - 1];
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
function ws(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...xs(n));
  }), t;
}
function xs({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${$n(
    e.component,
    e.type,
    o
  )}`, i = ">" + n;
  return e.props ? [r, ...Ds(e.props), i] : [r + i];
}
function Ds(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Kr(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Kr(e, t, n) {
  return z(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : X(t) ? (t = Kr(e, M(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : T(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = M(t), n ? t : [`${e}=`, t]);
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
function Ae(e, t, n, o) {
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
    const i = Ae(e, t, n, o);
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
        for (let m = 0; m < d.length; m++)
          if (d[m](e, l, c) === !1)
            return;
      }
      i = i.parent;
    }
    const f = t.appContext.config.errorHandler;
    if (f) {
      Ae(
        f,
        null,
        10,
        [e, l, c]
      );
      return;
    }
  }
  Vs(e, n, r, o);
}
function Vs(e, t, n, o = !0) {
  if (a.NODE_ENV !== "production") {
    const r = No[t];
    if (n && en(n), y(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && tn(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Ft = !1, Yn = !1;
const ne = [];
let De = 0;
const yt = [];
let xe = null, Ue = 0;
const Wr = /* @__PURE__ */ Promise.resolve();
let bo = null;
const Cs = 100;
function $s(e) {
  const t = bo || Wr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ts(e) {
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
    Ft && e.allowRecurse ? De + 1 : De
  )) && (e.id == null ? ne.push(e) : ne.splice(Ts(e.id), 0, e), qr());
}
function qr() {
  !Ft && !Yn && (Yn = !0, bo = Wr.then(Yr));
}
function Ps(e) {
  const t = ne.indexOf(e);
  t > De && ne.splice(t, 1);
}
function zr(e) {
  $(e) ? yt.push(...e) : (!xe || !xe.includes(
    e,
    e.allowRecurse ? Ue + 1 : Ue
  )) && yt.push(e), qr();
}
function qo(e, t = Ft ? De + 1 : 0) {
  for (a.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < ne.length; t++) {
    const n = ne[t];
    if (n && n.pre) {
      if (a.NODE_ENV !== "production" && Oo(e, n))
        continue;
      ne.splice(t, 1), t--, n();
    }
  }
}
function Jr(e) {
  if (yt.length) {
    const t = [...new Set(yt)];
    if (yt.length = 0, xe) {
      xe.push(...t);
      return;
    }
    for (xe = t, a.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), xe.sort((n, o) => jt(n) - jt(o)), Ue = 0; Ue < xe.length; Ue++)
      a.NODE_ENV !== "production" && Oo(e, xe[Ue]) || xe[Ue]();
    xe = null, Ue = 0;
  }
}
const jt = (e) => e.id == null ? 1 / 0 : e.id, Is = (e, t) => {
  const n = jt(e) - jt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Yr(e) {
  Yn = !1, Ft = !0, a.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ne.sort(Is);
  const t = a.NODE_ENV !== "production" ? (n) => Oo(e, n) : ee;
  try {
    for (De = 0; De < ne.length; De++) {
      const n = ne[De];
      if (n && n.active !== !1) {
        if (a.NODE_ENV !== "production" && t(n))
          continue;
        Ae(n, null, 14);
      }
    }
  } finally {
    De = 0, ne.length = 0, Jr(e), Ft = !1, bo = null, (ne.length || yt.length) && Yr(e);
  }
}
function Oo(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Cs) {
      const o = t.ownerInstance, r = o && Po(o.type);
      return y(
        `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
let it = !1;
const Et = /* @__PURE__ */ new Set();
a.NODE_ENV !== "production" && (fn().__VUE_HMR_RUNTIME__ = {
  createRecord: An(Zr),
  rerender: An(As),
  reload: An(Ss)
});
const ft = /* @__PURE__ */ new Map();
function Ms(e) {
  const t = e.type.__hmrId;
  let n = ft.get(t);
  n || (Zr(t, e.type), n = ft.get(t)), n.instances.add(e);
}
function Rs(e) {
  ft.get(e.type.__hmrId).instances.delete(e);
}
function Zr(e, t) {
  return ft.has(e) ? !1 : (ft.set(e, {
    initialDef: Mt(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Mt(e) {
  return Di(e) ? e.__vccOpts : e;
}
function As(e, t) {
  const n = ft.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Mt(o.type).render = t), o.renderCache = [], it = !0, o.update(), it = !1;
  }));
}
function Ss(e, t) {
  const n = ft.get(e);
  if (!n)
    return;
  t = Mt(t), zo(n.initialDef, t);
  const o = [...n.instances];
  for (const r of o) {
    const i = Mt(r.type);
    Et.has(i) || (i !== n.initialDef && zo(i, t), Et.add(i)), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (Et.add(i), r.ceReload(t.styles), Et.delete(i)) : r.parent ? wn(r.parent.update) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  zr(() => {
    for (const r of o)
      Et.delete(
        Mt(r.type)
      );
  });
}
function zo(e, t) {
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
let Ve, Pt = [], Zn = !1;
function kt(e, ...t) {
  Ve ? Ve.emit(e, ...t) : Zn || Pt.push({ event: e, args: t });
}
function Xr(e, t) {
  var n, o;
  Ve = e, Ve ? (Ve.enabled = !0, Pt.forEach(({ event: r, args: i }) => Ve.emit(r, ...i)), Pt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    Xr(i, t);
  }), setTimeout(() => {
    Ve || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Zn = !0, Pt = []);
  }, 3e3)) : (Zn = !0, Pt = []);
}
function Fs(e, t) {
  kt("app:init", e, t, {
    Fragment: he,
    Text: Kt,
    Comment: Ee,
    Static: sn
  });
}
function js(e) {
  kt("app:unmount", e);
}
const Hs = /* @__PURE__ */ yo(
  "component:added"
  /* COMPONENT_ADDED */
), Qr = /* @__PURE__ */ yo(
  "component:updated"
  /* COMPONENT_UPDATED */
), Ls = /* @__PURE__ */ yo(
  "component:removed"
  /* COMPONENT_REMOVED */
), Us = (e) => {
  Ve && typeof Ve.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Ve.cleanupBuffer(e) && Ls(e);
};
function yo(e) {
  return (t) => {
    kt(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Bs = /* @__PURE__ */ Gr(
  "perf:start"
  /* PERFORMANCE_START */
), ks = /* @__PURE__ */ Gr(
  "perf:end"
  /* PERFORMANCE_END */
);
function Gr(e) {
  return (t, n, o) => {
    kt(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Ks(e, t, n) {
  kt(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
function Ws(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || k;
  if (a.NODE_ENV !== "production") {
    const {
      emitsOptions: m,
      propsOptions: [p]
    } = e;
    if (m)
      if (!(t in m))
        (!p || !(Ge(t) in p)) && y(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Ge(t)}" prop.`
        );
      else {
        const b = m[t];
        T(b) && (b(...n) || y(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let r = n;
  const i = t.startsWith("update:"), l = i && t.slice(7);
  if (l && l in o) {
    const m = `${l === "modelValue" ? "model" : l}Modifiers`, { number: p, trim: b } = o[m] || k;
    b && (r = n.map((D) => z(D) ? D.trim() : D)), p && (r = n.map(Ai));
  }
  if (a.NODE_ENV !== "production" && Ks(e, t, r), a.NODE_ENV !== "production") {
    const m = t.toLowerCase();
    m !== t && o[Ge(m)] && y(
      `Event "${m}" is emitted in component ${$n(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${qe(t)}" instead of "${t}".`
    );
  }
  let c, f = o[c = Ge(t)] || // also try camelCase event handler (#2249)
  o[c = Ge($e(t))];
  !f && i && (f = o[c = Ge(qe(t))]), f && _e(
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
function ei(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let l = {}, c = !1;
  if (!T(e)) {
    const f = (d) => {
      const m = ei(d, t, !0);
      m && (c = !0, W(l, m));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !i && !c ? (K(e) && o.set(e, null), null) : ($(i) ? i.forEach((f) => l[f] = null) : W(l, i), K(e) && o.set(e, l), l);
}
function xn(e, t) {
  return !e || !Bt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), R(e, t[0].toLowerCase() + t.slice(1)) || R(e, qe(t)) || R(e, t));
}
let ue = null, Dn = null;
function dn(e) {
  const t = ue;
  return ue = e, Dn = e && e.type.__scopeId || null, t;
}
function ti(e) {
  Dn = e;
}
function ni() {
  Dn = null;
}
function qs(e, t = ue, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && sr(-1);
    const i = dn(t);
    let l;
    try {
      l = e(...r);
    } finally {
      dn(i), o._d && sr(1);
    }
    return a.NODE_ENV !== "production" && Qr(t), l;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let Xn = !1;
function pn() {
  Xn = !0;
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
  const Ne = dn(e);
  a.NODE_ENV !== "production" && (Xn = !1);
  try {
    if (n.shapeFlag & 4) {
      const P = r || o, Te = a.NODE_ENV !== "production" && D.__isScriptSetup ? new Proxy(P, {
        get(Oe, fe, ce) {
          return y(
            `Property '${String(
              fe
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(Oe, fe, ce);
        }
      }) : P;
      q = me(
        m.call(
          Te,
          P,
          p,
          i,
          D,
          b,
          H
        )
      ), Z = f;
    } else {
      const P = t;
      a.NODE_ENV !== "production" && f === i && pn(), q = me(
        P.length > 1 ? P(
          i,
          a.NODE_ENV !== "production" ? {
            get attrs() {
              return pn(), f;
            },
            slots: c,
            emit: d
          } : { attrs: f, slots: c, emit: d }
        ) : P(
          i,
          null
          /* we know it doesn't need it */
        )
      ), Z = t.props ? f : Js(f);
    }
  } catch (P) {
    Rt.length = 0, vn(P, e, 1), q = We(Ee);
  }
  let L = q, be;
  if (a.NODE_ENV !== "production" && q.patchFlag > 0 && q.patchFlag & 2048 && ([L, be] = zs(q)), Z && S !== !1) {
    const P = Object.keys(Z), { shapeFlag: Te } = L;
    if (P.length) {
      if (Te & 7)
        l && P.some(cn) && (Z = Ys(
          Z,
          l
        )), L = Ye(L, Z);
      else if (a.NODE_ENV !== "production" && !Xn && L.type !== Ee) {
        const Oe = Object.keys(f), fe = [], ce = [];
        for (let Pe = 0, Fe = Oe.length; Pe < Fe; Pe++) {
          const ae = Oe[Pe];
          Bt(ae) ? cn(ae) || fe.push(ae[2].toLowerCase() + ae.slice(3)) : ce.push(ae);
        }
        ce.length && y(
          `Extraneous non-props attributes (${ce.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), fe.length && y(
          `Extraneous non-emits event listeners (${fe.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (a.NODE_ENV !== "production" && !Jo(L) && y(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), L = Ye(L), L.dirs = L.dirs ? L.dirs.concat(n.dirs) : n.dirs), n.transition && (a.NODE_ENV !== "production" && !Jo(L) && y(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), L.transition = n.transition), a.NODE_ENV !== "production" && be ? be(L) : q = L, dn(Ne), q;
}
const zs = (e) => {
  const t = e.children, n = e.dynamicChildren, o = oi(t);
  if (!o)
    return [e, void 0];
  const r = t.indexOf(o), i = n ? n.indexOf(o) : -1, l = (c) => {
    t[r] = c, n && (i > -1 ? n[i] = c : c.patchFlag > 0 && (e.dynamicChildren = [...n, c]));
  };
  return [me(o), l];
};
function oi(e) {
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
const Js = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Bt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Ys = (e, t) => {
  const n = {};
  for (const o in e)
    (!cn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Jo = (e) => e.shapeFlag & 7 || e.type === Ee;
function Zs(e, t, n) {
  const { props: o, children: r, component: i } = e, { props: l, children: c, patchFlag: f } = t, d = i.emitsOptions;
  if (a.NODE_ENV !== "production" && (r || c) && it || t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return o ? Yo(o, l, d) : !!l;
    if (f & 8) {
      const m = t.dynamicProps;
      for (let p = 0; p < m.length; p++) {
        const b = m[p];
        if (l[b] !== o[b] && !xn(d, b))
          return !0;
      }
    }
  } else
    return (r || c) && (!c || !c.$stable) ? !0 : o === l ? !1 : o ? l ? Yo(o, l, d) : !0 : !!l;
  return !1;
}
function Yo(e, t, n) {
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
function Xs({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const Qn = "components";
function Qs(e, t) {
  return el(Qn, e, !0, t) || e;
}
const Gs = Symbol.for("v-ndc");
function el(e, t, n = !0, o = !1) {
  const r = ue || G;
  if (r) {
    const i = r.type;
    if (e === Qn) {
      const c = Po(
        i,
        !1
        /* do not include inferred name to avoid breaking existing code */
      );
      if (c && (c === t || c === $e(t) || c === ct($e(t))))
        return i;
    }
    const l = (
      // local registration
      // check instance[type] first which is resolved for options API
      Zo(r[e] || i[e], t) || // global registration
      Zo(r.appContext[e], t)
    );
    if (!l && o)
      return i;
    if (a.NODE_ENV !== "production" && n && !l) {
      const c = e === Qn ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      y(`Failed to resolve ${e.slice(0, -1)}: ${t}${c}`);
    }
    return l;
  } else
    a.NODE_ENV !== "production" && y(
      `resolve${ct(e.slice(0, -1))} can only be used in render() or setup().`
    );
}
function Zo(e, t) {
  return e && (e[t] || e[$e(t)] || e[ct($e(t))]);
}
const tl = (e) => e.__isSuspense;
function nl(e, t) {
  t && t.pendingBranch ? $(e) ? t.effects.push(...e) : t.effects.push(e) : zr(e);
}
const Qt = {};
function Fn(e, t, n) {
  return a.NODE_ENV !== "production" && !T(t) && y(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), ri(e, t, n);
}
function ri(e, t, { immediate: n, deep: o, flush: r, onTrack: i, onTrigger: l } = k) {
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
  }, d = Ji() === ((c = G) == null ? void 0 : c.scope) ? G : null;
  let m, p = !1, b = !1;
  if (X(e) ? (m = () => e.value, p = an(e)) : ot(e) ? (m = () => e, o = !0) : $(e) ? (b = !0, p = e.some((P) => ot(P) || an(P)), m = () => e.map((P) => {
    if (X(P))
      return P.value;
    if (ot(P))
      return bt(P);
    if (T(P))
      return Ae(P, d, 2);
    a.NODE_ENV !== "production" && f(P);
  })) : T(e) ? t ? m = () => Ae(e, d, 2) : m = () => {
    if (!(d && d.isUnmounted))
      return D && D(), _e(
        e,
        d,
        3,
        [H]
      );
  } : (m = ee, a.NODE_ENV !== "production" && f(e)), t && o) {
    const P = m;
    m = () => bt(P());
  }
  let D, H = (P) => {
    D = L.onStop = () => {
      Ae(P, d, 4), D = L.onStop = void 0;
    };
  }, S;
  if (Lt)
    if (H = ee, t ? n && _e(t, d, 3, [
      m(),
      b ? [] : void 0,
      H
    ]) : m(), r === "sync") {
      const P = uc();
      S = P.__watcherHandles || (P.__watcherHandles = []);
    } else
      return ee;
  let q = b ? new Array(e.length).fill(Qt) : Qt;
  const Z = () => {
    if (L.active)
      if (t) {
        const P = L.run();
        (o || p || (b ? P.some((Te, Oe) => ut(Te, q[Oe])) : ut(P, q))) && (D && D(), _e(t, d, 3, [
          P,
          // pass undefined as the old value when it's changed for the first time
          q === Qt ? void 0 : b && q[0] === Qt ? [] : q,
          H
        ]), q = P);
      } else
        L.run();
  };
  Z.allowRecurse = !!t;
  let Ne;
  r === "sync" ? Ne = Z : r === "post" ? Ne = () => le(Z, d && d.suspense) : (Z.pre = !0, d && (Z.id = d.uid), Ne = () => wn(Z));
  const L = new mo(m, Ne);
  a.NODE_ENV !== "production" && (L.onTrack = i, L.onTrigger = l), t ? n ? Z() : q = L.run() : r === "post" ? le(
    L.run.bind(L),
    d && d.suspense
  ) : L.run();
  const be = () => {
    L.stop(), d && d.scope && co(d.scope.effects, L);
  };
  return S && S.push(be), be;
}
function ol(e, t, n) {
  const o = this.proxy, r = z(e) ? e.includes(".") ? ii(o, e) : () => o[e] : e.bind(o, o);
  let i;
  T(t) ? i = t : (i = t.handler, n = t);
  const l = G;
  vt(this);
  const c = ri(r, i.bind(o), n);
  return l ? vt(l) : lt(), c;
}
function ii(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
function bt(e, t) {
  if (!K(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), X(e))
    bt(e.value, t);
  else if ($(e))
    for (let n = 0; n < e.length; n++)
      bt(e[n], t);
  else if (yr(e) || tt(e))
    e.forEach((n) => {
      bt(n, t);
    });
  else if (wr(e))
    for (const n in e)
      bt(e[n], t);
  return e;
}
function si(e) {
  Ii(e) && y("Do not use built-in directive ids as custom directive id: " + e);
}
function Xe(e, t, n, o) {
  const r = e.dirs, i = t && t.dirs;
  for (let l = 0; l < r.length; l++) {
    const c = r[l];
    i && (c.oldValue = i[l].value);
    let f = c.dir[o];
    f && (dt(), _e(f, n, 8, [
      e.el,
      c,
      e,
      t
    ]), pt());
  }
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function li(e, t) {
  return T(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    W({ name: e.name }, t, { setup: e })
  ) : e;
}
const nn = (e) => !!e.type.__asyncLoader, vo = (e) => e.type.__isKeepAlive;
function rl(e, t) {
  ci(e, "a", t);
}
function il(e, t) {
  ci(e, "da", t);
}
function ci(e, t, n = G) {
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
      vo(r.parent.vnode) && sl(o, t, n, r), r = r.parent;
  }
}
function sl(e, t, n, o) {
  const r = Vn(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  ui(() => {
    co(o[t], r);
  }, n);
}
function Vn(e, t, n = G, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...l) => {
      if (n.isUnmounted)
        return;
      dt(), vt(n);
      const c = _e(t, n, e, l);
      return lt(), pt(), c;
    });
    return o ? r.unshift(i) : r.push(i), i;
  } else if (a.NODE_ENV !== "production") {
    const r = Ge(No[e].replace(/ hook$/, ""));
    y(
      `${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Se = (e) => (t, n = G) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Lt || e === "sp") && Vn(e, (...o) => t(...o), n)
), ll = Se("bm"), cl = Se("m"), ul = Se("bu"), fl = Se("u"), al = Se("bum"), ui = Se("um"), dl = Se("sp"), pl = Se(
  "rtg"
), hl = Se(
  "rtc"
);
function ml(e, t = G) {
  Vn("ec", e, t);
}
const Gn = (e) => e ? wi(e) ? To(e) || e.proxy : Gn(e.parent) : null, st = (
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
    $parent: (e) => Gn(e.parent),
    $root: (e) => Gn(e.root),
    $emit: (e) => e.emit,
    $options: (e) => xo(e),
    $forceUpdate: (e) => e.f || (e.f = () => wn(e.update)),
    $nextTick: (e) => e.n || (e.n = $s.bind(e.proxy)),
    $watch: (e) => ol.bind(e)
  })
), wo = (e) => e === "_" || e === "$", jn = (e, t) => e !== k && !e.__isScriptSetup && R(e, t), fi = {
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
    const m = st[t];
    let p, b;
    if (m)
      return t === "$attrs" ? (te(e, "get", t), a.NODE_ENV !== "production" && pn()) : a.NODE_ENV !== "production" && t === "$slots" && te(e, "get", t), m(e);
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
    return !!n[l] || e !== k && R(e, l) || jn(t, l) || (c = i[0]) && R(c, l) || R(o, l) || R(st, l) || R(r.config.globalProperties, l);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : R(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
a.NODE_ENV !== "production" && (fi.ownKeys = (e) => (y(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function gl(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(st).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => st[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: ee
    });
  }), t;
}
function _l(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: ee
    });
  });
}
function El(e) {
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
        set: ee
      });
    }
  });
}
function Xo(e) {
  return $(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Nl() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? y(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let eo = !0;
function bl(e) {
  const t = xo(e), n = e.proxy, o = e.ctx;
  eo = !1, t.beforeCreate && Qo(t.beforeCreate, e, "bc");
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
    render: P,
    renderTracked: Te,
    renderTriggered: Oe,
    errorCaptured: fe,
    serverPrefetch: ce,
    // public API
    expose: Pe,
    inheritAttrs: Fe,
    // assets
    components: ae,
    directives: Wt,
    filters: Mo
  } = t, je = a.NODE_ENV !== "production" ? Nl() : null;
  if (a.NODE_ENV !== "production") {
    const [F] = e.propsOptions;
    if (F)
      for (const j in F)
        je("Props", j);
  }
  if (d && Ol(d, o, je), l)
    for (const F in l) {
      const j = l[F];
      T(j) ? (a.NODE_ENV !== "production" ? Object.defineProperty(o, F, {
        value: j.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[F] = j.bind(n), a.NODE_ENV !== "production" && je("Methods", F)) : a.NODE_ENV !== "production" && y(
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
        je("Data", j), wo(j[0]) || Object.defineProperty(o, j, {
          configurable: !0,
          enumerable: !0,
          get: () => F[j],
          set: ee
        });
  }
  if (eo = !0, i)
    for (const F in i) {
      const j = i[F], ye = T(j) ? j.bind(n, n) : T(j.get) ? j.get.bind(n, n) : ee;
      a.NODE_ENV !== "production" && ye === ee && y(`Computed property "${F}" has no getter.`);
      const Pn = !T(j) && T(j.set) ? j.set.bind(n) : a.NODE_ENV !== "production" ? () => {
        y(
          `Write operation failed: computed property "${F}" is readonly.`
        );
      } : ee, wt = lc({
        get: ye,
        set: Pn
      });
      Object.defineProperty(o, F, {
        enumerable: !0,
        configurable: !0,
        get: () => wt.value,
        set: (ht) => wt.value = ht
      }), a.NODE_ENV !== "production" && je("Computed", F);
    }
  if (c)
    for (const F in c)
      ai(c[F], o, n, F);
  if (f) {
    const F = T(f) ? f.call(n) : f;
    Reflect.ownKeys(F).forEach((j) => {
      Vl(j, F[j]);
    });
  }
  m && Qo(m, e, "c");
  function se(F, j) {
    $(j) ? j.forEach((ye) => F(ye.bind(n))) : j && F(j.bind(n));
  }
  if (se(ll, p), se(cl, b), se(ul, D), se(fl, H), se(rl, S), se(il, q), se(ml, fe), se(hl, Te), se(pl, Oe), se(al, Ne), se(ui, be), se(dl, ce), $(Pe))
    if (Pe.length) {
      const F = e.exposed || (e.exposed = {});
      Pe.forEach((j) => {
        Object.defineProperty(F, j, {
          get: () => n[j],
          set: (ye) => n[j] = ye
        });
      });
    } else
      e.exposed || (e.exposed = {});
  P && e.render === ee && (e.render = P), Fe != null && (e.inheritAttrs = Fe), ae && (e.components = ae), Wt && (e.directives = Wt);
}
function Ol(e, t, n = ee) {
  $(e) && (e = to(e));
  for (const o in e) {
    const r = e[o];
    let i;
    K(r) ? "default" in r ? i = on(
      r.from || o,
      r.default,
      !0
      /* treat default function as factory */
    ) : i = on(r.from || o) : i = on(r), X(i) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : t[o] = i, a.NODE_ENV !== "production" && n("Inject", o);
  }
}
function Qo(e, t, n) {
  _e(
    $(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function ai(e, t, n, o) {
  const r = o.includes(".") ? ii(n, o) : () => n[o];
  if (z(e)) {
    const i = t[e];
    T(i) ? Fn(r, i) : a.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e}"`, i);
  } else if (T(e))
    Fn(r, e.bind(n));
  else if (K(e))
    if ($(e))
      e.forEach((i) => ai(i, t, n, o));
    else {
      const i = T(e.handler) ? e.handler.bind(n) : t[e.handler];
      T(i) ? Fn(r, i, e) : a.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e.handler}"`, i);
    }
  else
    a.NODE_ENV !== "production" && y(`Invalid watch option: "${o}"`, e);
}
function xo(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: l }
  } = e.appContext, c = i.get(t);
  let f;
  return c ? f = c : !r.length && !n && !o ? f = t : (f = {}, r.length && r.forEach(
    (d) => hn(f, d, l, !0)
  ), hn(f, t, l)), K(t) && i.set(t, f), f;
}
function hn(e, t, n, o = !1) {
  const { mixins: r, extends: i } = t;
  i && hn(e, i, n, !0), r && r.forEach(
    (l) => hn(e, l, n, !0)
  );
  for (const l in t)
    if (o && l === "expose")
      a.NODE_ENV !== "production" && y(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = yl[l] || n && n[l];
      e[l] = c ? c(e[l], t[l]) : t[l];
    }
  return e;
}
const yl = {
  data: Go,
  props: er,
  emits: er,
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
  watch: wl,
  // provide / inject
  provide: Go,
  inject: vl
};
function Go(e, t) {
  return t ? e ? function() {
    return W(
      T(e) ? e.call(this, this) : e,
      T(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function vl(e, t) {
  return It(to(e), to(t));
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
function re(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function It(e, t) {
  return e ? W(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function er(e, t) {
  return e ? $(e) && $(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : W(
    /* @__PURE__ */ Object.create(null),
    Xo(e),
    Xo(t ?? {})
  ) : t;
}
function wl(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = W(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = re(e[o], t[o]);
  return n;
}
function di() {
  return {
    app: null,
    config: {
      isNativeTag: Or,
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
let xl = 0;
function Dl(e, t) {
  return function(o, r = null) {
    T(o) || (o = W({}, o)), r != null && !K(r) && (a.NODE_ENV !== "production" && y("root props passed to app.mount() must be an object."), r = null);
    const i = di();
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
      _uid: xl++,
      _component: o,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: fr,
      get config() {
        return i.config;
      },
      set config(d) {
        a.NODE_ENV !== "production" && y(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...m) {
        return l.has(d) ? a.NODE_ENV !== "production" && y("Plugin has already been applied to target app.") : d && T(d.install) ? (l.add(d), d.install(f, ...m)) : T(d) ? (l.add(d), d(f, ...m)) : a.NODE_ENV !== "production" && y(
          'A plugin must either be a function or an object with an "install" function.'
        ), f;
      },
      mixin(d) {
        return i.mixins.includes(d) ? a.NODE_ENV !== "production" && y(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : i.mixins.push(d), f;
      },
      component(d, m) {
        return a.NODE_ENV !== "production" && io(d, i.config), m ? (a.NODE_ENV !== "production" && i.components[d] && y(`Component "${d}" has already been registered in target app.`), i.components[d] = m, f) : i.components[d];
      },
      directive(d, m) {
        return a.NODE_ENV !== "production" && si(d), m ? (a.NODE_ENV !== "production" && i.directives[d] && y(`Directive "${d}" has already been registered in target app.`), i.directives[d] = m, f) : i.directives[d];
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
          const b = We(o, r);
          return b.appContext = i, a.NODE_ENV !== "production" && (i.reload = () => {
            e(Ye(b), d, p);
          }), m && t ? t(b, d) : e(b, d, p), c = !0, f._container = d, d.__vue_app__ = f, a.NODE_ENV !== "production" && (f._instance = b.component, Fs(f, fr)), To(b.component) || b.component.proxy;
        }
      },
      unmount() {
        c ? (e(null, f._container), a.NODE_ENV !== "production" && (f._instance = null, js(f)), delete f._container.__vue_app__) : a.NODE_ENV !== "production" && y("Cannot unmount an app that is not mounted.");
      },
      provide(d, m) {
        return a.NODE_ENV !== "production" && d in i.provides && y(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ), i.provides[d] = m, f;
      },
      runWithContext(d) {
        mn = f;
        try {
          return d();
        } finally {
          mn = null;
        }
      }
    };
    return f;
  };
}
let mn = null;
function Vl(e, t) {
  if (!G)
    a.NODE_ENV !== "production" && y("provide() can only be used inside setup().");
  else {
    let n = G.provides;
    const o = G.parent && G.parent.provides;
    o === n && (n = G.provides = Object.create(o)), n[e] = t;
  }
}
function on(e, t, n = !1) {
  const o = G || ue;
  if (o || mn) {
    const r = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : mn._context.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && T(t) ? t.call(o && o.proxy) : t;
    a.NODE_ENV !== "production" && y(`injection "${String(e)}" not found.`);
  } else
    a.NODE_ENV !== "production" && y("inject() can only be used inside setup() or functional components.");
}
function Cl(e, t, n, o = !1) {
  const r = {}, i = {};
  un(i, Cn, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), pi(e, t, r, i);
  for (const l in e.propsOptions[0])
    l in r || (r[l] = void 0);
  a.NODE_ENV !== "production" && mi(t || {}, r, e), n ? e.props = o ? r : ms(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function $l(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function Tl(e, t, n, o) {
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
    !(a.NODE_ENV !== "production" && $l(e)) && (o || l > 0) && !(l & 16)
  ) {
    if (l & 8) {
      const m = e.vnode.dynamicProps;
      for (let p = 0; p < m.length; p++) {
        let b = m[p];
        if (xn(e.emitsOptions, b))
          continue;
        const D = t[b];
        if (f)
          if (R(i, b))
            D !== i[b] && (i[b] = D, d = !0);
          else {
            const H = $e(b);
            r[H] = no(
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
    pi(e, t, r, i) && (d = !0);
    let m;
    for (const p in c)
      (!t || // for camelCase
      !R(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((m = qe(p)) === p || !R(t, m))) && (f ? n && // for camelCase
      (n[p] !== void 0 || // for kebab-case
      n[m] !== void 0) && (r[p] = no(
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
  d && Ce(e, "set", "$attrs"), a.NODE_ENV !== "production" && mi(t || {}, r, e);
}
function pi(e, t, n, o) {
  const [r, i] = e.propsOptions;
  let l = !1, c;
  if (t)
    for (let f in t) {
      if (Gt(f))
        continue;
      const d = t[f];
      let m;
      r && R(r, m = $e(f)) ? !i || !i.includes(m) ? n[m] = d : (c || (c = {}))[m] = d : xn(e.emitsOptions, f) || (!(f in o) || d !== o[f]) && (o[f] = d, l = !0);
    }
  if (i) {
    const f = M(n), d = c || k;
    for (let m = 0; m < i.length; m++) {
      const p = i[m];
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
        n in d ? o = d[n] : (vt(r), o = d[n] = f.call(
          null,
          t
        ), lt());
      } else
        o = f;
    }
    l[
      0
      /* shouldCast */
    ] && (i && !c ? o = !1 : l[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === qe(n)) && (o = !0));
  }
  return o;
}
function hi(e, t, n = !1) {
  const o = t.propsCache, r = o.get(e);
  if (r)
    return r;
  const i = e.props, l = {}, c = [];
  let f = !1;
  if (!T(e)) {
    const m = (p) => {
      f = !0;
      const [b, D] = hi(p, t, !0);
      W(l, b), D && c.push(...D);
    };
    !n && t.mixins.length && t.mixins.forEach(m), e.extends && m(e.extends), e.mixins && e.mixins.forEach(m);
  }
  if (!i && !f)
    return K(e) && o.set(e, Ot), Ot;
  if ($(i))
    for (let m = 0; m < i.length; m++) {
      a.NODE_ENV !== "production" && !z(i[m]) && y("props must be strings when using array syntax.", i[m]);
      const p = $e(i[m]);
      tr(p) && (l[p] = k);
    }
  else if (i) {
    a.NODE_ENV !== "production" && !K(i) && y("invalid props options", i);
    for (const m in i) {
      const p = $e(m);
      if (tr(p)) {
        const b = i[m], D = l[p] = $(b) || T(b) ? { type: b } : W({}, b);
        if (D) {
          const H = or(Boolean, D.type), S = or(String, D.type);
          D[
            0
            /* shouldCast */
          ] = H > -1, D[
            1
            /* shouldCastTrue */
          ] = S < 0 || H < S, (H > -1 || R(D, "default")) && c.push(p);
        }
      }
    }
  }
  const d = [l, c];
  return K(e) && o.set(e, d), d;
}
function tr(e) {
  return e[0] !== "$" ? !0 : (a.NODE_ENV !== "production" && y(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function oo(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function nr(e, t) {
  return oo(e) === oo(t);
}
function or(e, t) {
  return $(t) ? t.findIndex((n) => nr(n, e)) : T(t) && nr(t, e) ? 0 : -1;
}
function mi(e, t, n) {
  const o = M(t), r = n.propsOptions[0];
  for (const i in r) {
    let l = r[i];
    l != null && Pl(
      i,
      o[i],
      l,
      !R(e, i) && !R(e, qe(i))
    );
  }
}
function Pl(e, t, n, o) {
  const { type: r, required: i, validator: l, skipCheck: c } = n;
  if (i && o) {
    y('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (r != null && r !== !0 && !c) {
      let f = !1;
      const d = $(r) ? r : [r], m = [];
      for (let p = 0; p < d.length && !f; p++) {
        const { valid: b, expectedType: D } = Ml(t, d[p]);
        m.push(D || ""), f = b;
      }
      if (!f) {
        y(Rl(e, t, m));
        return;
      }
    }
    l && !l(t) && y('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Il = /* @__PURE__ */ Ze(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Ml(e, t) {
  let n;
  const o = oo(t);
  if (Il(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = K(e) : o === "Array" ? n = $(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Rl(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(ct).join(" | ")}`;
  const r = n[0], i = fo(t), l = rr(t, r), c = rr(t, i);
  return n.length === 1 && ir(r) && !Al(r, i) && (o += ` with value ${l}`), o += `, got ${i} `, ir(i) && (o += `with value ${c}.`), o;
}
function rr(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function ir(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Al(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const gi = (e) => e[0] === "_" || e === "$stable", Do = (e) => $(e) ? e.map(me) : [me(e)], Sl = (e, t, n) => {
  if (t._n)
    return t;
  const o = qs((...r) => (a.NODE_ENV !== "production" && G && y(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Do(t(...r))), n);
  return o._c = !1, o;
}, _i = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (gi(r))
      continue;
    const i = e[r];
    if (T(i))
      t[r] = Sl(r, i, o);
    else if (i != null) {
      a.NODE_ENV !== "production" && y(
        `Non-function value encountered for slot "${r}". Prefer function slots for better performance.`
      );
      const l = Do(i);
      t[r] = () => l;
    }
  }
}, Ei = (e, t) => {
  a.NODE_ENV !== "production" && !vo(e.vnode) && y(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Do(t);
  e.slots.default = () => n;
}, Fl = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = M(t), un(t, "_", n)) : _i(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && Ei(e, t);
  un(e.slots, Cn, 1);
}, jl = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let i = !0, l = k;
  if (o.shapeFlag & 32) {
    const c = t._;
    c ? a.NODE_ENV !== "production" && it ? (W(r, t), Ce(e, "set", "$slots")) : n && c === 1 ? i = !1 : (W(r, t), !n && c === 1 && delete r._) : (i = !t.$stable, _i(t, r)), l = t;
  } else
    t && (Ei(e, t), l = { default: 1 });
  if (i)
    for (const c in r)
      !gi(c) && l[c] == null && delete r[c];
};
function ro(e, t, n, o, r = !1) {
  if ($(e)) {
    e.forEach(
      (b, D) => ro(
        b,
        t && ($(t) ? t[D] : t),
        n,
        o,
        r
      )
    );
    return;
  }
  if (nn(o) && !r)
    return;
  const i = o.shapeFlag & 4 ? To(o.component) || o.component.proxy : o.el, l = r ? null : i, { i: c, r: f } = e;
  if (a.NODE_ENV !== "production" && !c) {
    y(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const d = t && t.r, m = c.refs === k ? c.refs = {} : c.refs, p = c.setupState;
  if (d != null && d !== f && (z(d) ? (m[d] = null, R(p, d) && (p[d] = null)) : X(d) && (d.value = null)), T(f))
    Ae(f, c, 12, [l, m]);
  else {
    const b = z(f), D = X(f);
    if (b || D) {
      const H = () => {
        if (e.f) {
          const S = b ? R(p, f) ? p[f] : m[f] : f.value;
          r ? $(S) && co(S, i) : $(S) ? S.includes(i) || S.push(i) : b ? (m[f] = [i], R(p, f) && (p[f] = m[f])) : (f.value = [i], e.k && (m[e.k] = f.value));
        } else
          b ? (m[f] = l, R(p, f) && (p[f] = l)) : D ? (f.value = l, e.k && (m[e.k] = l)) : a.NODE_ENV !== "production" && y("Invalid template ref type:", f, `(${typeof f})`);
      };
      l ? (H.id = -1, le(H, n)) : H();
    } else
      a.NODE_ENV !== "production" && y("Invalid template ref type:", f, `(${typeof f})`);
  }
}
let Vt, ke;
function Me(e, t) {
  e.appContext.config.performance && gn() && ke.mark(`vue-${t}-${e.uid}`), a.NODE_ENV !== "production" && Bs(e, t, gn() ? ke.now() : Date.now());
}
function Re(e, t) {
  if (e.appContext.config.performance && gn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    ke.mark(o), ke.measure(
      `<${$n(e, e.type)}> ${t}`,
      n,
      o
    ), ke.clearMarks(n), ke.clearMarks(o);
  }
  a.NODE_ENV !== "production" && ks(e, t, gn() ? ke.now() : Date.now());
}
function gn() {
  return Vt !== void 0 || (typeof window < "u" && window.performance ? (Vt = !0, ke = window.performance) : Vt = !1), Vt;
}
function Hl() {
  const e = [];
  if (a.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const le = nl;
function Ll(e) {
  return Ul(e);
}
function Ul(e, t) {
  Hl();
  const n = fn();
  n.__VUE__ = !0, a.NODE_ENV !== "production" && Xr(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
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
    setScopeId: D = ee,
    insertStaticContent: H
  } = e, S = (s, u, h, g = null, _ = null, O = null, w = !1, N = null, v = a.NODE_ENV !== "production" && it ? !1 : !!u.dynamicChildren) => {
    if (s === u)
      return;
    s && !Ct(s, u) && (g = qt(s), He(s, _, O, !0), s = null), u.patchFlag === -2 && (v = !1, u.dynamicChildren = null);
    const { type: E, ref: V, shapeFlag: x } = u;
    switch (E) {
      case Kt:
        q(s, u, h, g);
        break;
      case Ee:
        Z(s, u, h, g);
        break;
      case sn:
        s == null ? Ne(u, h, g, w) : a.NODE_ENV !== "production" && L(s, u, h, w);
        break;
      case he:
        Wt(
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
        ) : x & 6 ? Mo(
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
          mt
        ) : a.NODE_ENV !== "production" && y("Invalid VNode type:", E, `(${typeof E})`);
    }
    V != null && _ && ro(V, s && s.ref, O, u || s, !u);
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
      P(s), [u.el, u.anchor] = H(
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
  }, P = ({ el: s, anchor: u }) => {
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
    ) : Pe(
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
    const { type: V, props: x, shapeFlag: C, transition: I, dirs: A } = s;
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
    ), A && Xe(s, null, g, "created"), fe(v, s, s.scopeId, w, g), x) {
      for (const U in x)
        U !== "value" && !Gt(U) && i(
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
    })), A && Xe(s, null, g, "beforeMount");
    const B = Bl(_, I);
    B && I.beforeEnter(v), o(v, u, h), ((E = x && x.onVnodeMounted) || B || A) && le(() => {
      E && we(E, g, s), B && I.enter(v), A && Xe(s, null, g, "mounted");
    }, _);
  }, fe = (s, u, h, g, _) => {
    if (h && D(s, h), g)
      for (let O = 0; O < g.length; O++)
        D(s, g[O]);
    if (_) {
      let O = _.subTree;
      if (a.NODE_ENV !== "production" && O.patchFlag > 0 && O.patchFlag & 2048 && (O = oi(O.children) || O), u === O) {
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
  }, ce = (s, u, h, g, _, O, w, N, v = 0) => {
    for (let E = v; E < s.length; E++) {
      const V = s[E] = N ? Be(s[E]) : me(s[E]);
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
  }, Pe = (s, u, h, g, _, O, w) => {
    const N = u.el = s.el;
    let { patchFlag: v, dynamicChildren: E, dirs: V } = u;
    v |= s.patchFlag & 16;
    const x = s.props || k, C = u.props || k;
    let I;
    h && Qe(h, !1), (I = C.onVnodeBeforeUpdate) && we(I, h, u, s), V && Xe(u, s, h, "beforeUpdate"), h && Qe(h, !0), a.NODE_ENV !== "production" && it && (v = 0, w = !1, E = null);
    const A = _ && u.type !== "foreignObject";
    if (E ? (Fe(
      s.dynamicChildren,
      E,
      N,
      h,
      g,
      A,
      O
    ), a.NODE_ENV !== "production" && rn(s, u)) : w || ye(
      s,
      u,
      N,
      null,
      h,
      g,
      A,
      O,
      !1
    ), v > 0) {
      if (v & 16)
        ae(
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
          const J = B[U], de = x[J], gt = C[J];
          (gt !== de || J === "value") && i(
            N,
            J,
            de,
            gt,
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
      !w && E == null && ae(
        N,
        u,
        x,
        C,
        h,
        g,
        _
      );
    ((I = C.onVnodeUpdated) || V) && le(() => {
      I && we(I, h, u, s), V && Xe(u, s, h, "updated");
    }, g);
  }, Fe = (s, u, h, g, _, O, w) => {
    for (let N = 0; N < u.length; N++) {
      const v = s[N], E = u[N], V = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        v.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (v.type === he || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ct(v, E) || // - In the case of a component, it could contain anything.
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
  }, ae = (s, u, h, g, _, O, w) => {
    if (h !== g) {
      if (h !== k)
        for (const N in h)
          !Gt(N) && !(N in g) && i(
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
        if (Gt(N))
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
  }, Wt = (s, u, h, g, _, O, w, N, v) => {
    const E = u.el = s ? s.el : c(""), V = u.anchor = s ? s.anchor : c("");
    let { patchFlag: x, dynamicChildren: C, slotScopeIds: I } = u;
    a.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (it || x & 2048) && (x = 0, v = !1, C = null), I && (N = N ? N.concat(I) : I), s == null ? (o(E, h, g), o(V, h, g), ce(
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
    s.dynamicChildren ? (Fe(
      s.dynamicChildren,
      C,
      h,
      _,
      O,
      w,
      N
    ), a.NODE_ENV !== "production" ? rn(s, u) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (u.key != null || _ && u === _.subTree) && rn(
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
  }, Mo = (s, u, h, g, _, O, w, N, v) => {
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
    const N = s.component = Ql(
      s,
      g,
      _
    );
    if (a.NODE_ENV !== "production" && N.type.__hmrId && Ms(N), a.NODE_ENV !== "production" && (en(s), Me(N, "mount")), vo(s) && (N.ctx.renderer = mt), a.NODE_ENV !== "production" && Me(N, "init"), ec(N), a.NODE_ENV !== "production" && Re(N, "init"), N.asyncDep) {
      if (_ && _.registerDep(N, F), !s.el) {
        const v = N.subTree = We(Ee);
        Z(null, v, u, h);
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
    ), a.NODE_ENV !== "production" && (tn(), Re(N, "mount"));
  }, se = (s, u, h) => {
    const g = u.component = s.component;
    if (Zs(s, u, h))
      if (g.asyncDep && !g.asyncResolved) {
        a.NODE_ENV !== "production" && en(u), j(g, u, h), a.NODE_ENV !== "production" && tn();
        return;
      } else
        g.next = u, Ps(g.update), g.update();
    else
      u.el = s.el, g.vnode = u;
  }, F = (s, u, h, g, _, O, w) => {
    const N = () => {
      if (s.isMounted) {
        let { next: V, bu: x, u: C, parent: I, vnode: A } = s, B = V, U;
        a.NODE_ENV !== "production" && en(V || s.vnode), Qe(s, !1), V ? (V.el = A.el, j(s, V, w)) : V = A, x && Dt(x), (U = V.props && V.props.onVnodeBeforeUpdate) && we(U, I, V, A), Qe(s, !0), a.NODE_ENV !== "production" && Me(s, "render");
        const J = Sn(s);
        a.NODE_ENV !== "production" && Re(s, "render");
        const de = s.subTree;
        s.subTree = J, a.NODE_ENV !== "production" && Me(s, "patch"), S(
          de,
          J,
          // parent may have changed if it's in a teleport
          p(de.el),
          // anchor may have changed if it's in a fragment
          qt(de),
          s,
          _,
          O
        ), a.NODE_ENV !== "production" && Re(s, "patch"), V.el = J.el, B === null && Xs(s, J.el), C && le(C, _), (U = V.props && V.props.onVnodeUpdated) && le(
          () => we(U, I, V, A),
          _
        ), a.NODE_ENV !== "production" && Qr(s), a.NODE_ENV !== "production" && tn();
      } else {
        let V;
        const { el: x, props: C } = u, { bm: I, m: A, parent: B } = s, U = nn(u);
        if (Qe(s, !1), I && Dt(I), !U && (V = C && C.onVnodeBeforeMount) && we(V, B, u), Qe(s, !0), x && Rn) {
          const J = () => {
            a.NODE_ENV !== "production" && Me(s, "render"), s.subTree = Sn(s), a.NODE_ENV !== "production" && Re(s, "render"), a.NODE_ENV !== "production" && Me(s, "hydrate"), Rn(
              x,
              s.subTree,
              s,
              _,
              null
            ), a.NODE_ENV !== "production" && Re(s, "hydrate");
          };
          U ? u.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !s.isUnmounted && J()
          ) : J();
        } else {
          a.NODE_ENV !== "production" && Me(s, "render");
          const J = s.subTree = Sn(s);
          a.NODE_ENV !== "production" && Re(s, "render"), a.NODE_ENV !== "production" && Me(s, "patch"), S(
            null,
            J,
            h,
            g,
            s,
            _,
            O
          ), a.NODE_ENV !== "production" && Re(s, "patch"), u.el = J.el;
        }
        if (A && le(A, _), !U && (V = C && C.onVnodeMounted)) {
          const J = u;
          le(
            () => we(V, B, J),
            _
          );
        }
        (u.shapeFlag & 256 || B && nn(B.vnode) && B.vnode.shapeFlag & 256) && s.a && le(s.a, _), s.isMounted = !0, a.NODE_ENV !== "production" && Hs(s), u = h = g = null;
      }
    }, v = s.effect = new mo(
      N,
      () => wn(E),
      s.scope
      // track it in component's effect scope
    ), E = s.update = () => v.run();
    E.id = s.uid, Qe(s, !0), a.NODE_ENV !== "production" && (v.onTrack = s.rtc ? (V) => Dt(s.rtc, V) : void 0, v.onTrigger = s.rtg ? (V) => Dt(s.rtg, V) : void 0, E.ownerInstance = s), E();
  }, j = (s, u, h) => {
    u.component = s;
    const g = s.vnode.props;
    s.vnode = u, s.next = null, Tl(s, u.props, g, h), jl(s, u.children, h), dt(), qo(), pt();
  }, ye = (s, u, h, g, _, O, w, N, v = !1) => {
    const E = s && s.children, V = s ? s.shapeFlag : 0, x = u.children, { patchFlag: C, shapeFlag: I } = u;
    if (C > 0) {
      if (C & 128) {
        wt(
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
        Pn(
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
    I & 8 ? (V & 16 && Ie(E, _, O), x !== E && m(h, x)) : V & 16 ? I & 16 ? wt(
      E,
      x,
      h,
      g,
      _,
      O,
      w,
      N,
      v
    ) : Ie(E, _, O, !0) : (V & 8 && m(h, ""), I & 16 && ce(
      x,
      h,
      g,
      _,
      O,
      w,
      N,
      v
    ));
  }, Pn = (s, u, h, g, _, O, w, N, v) => {
    s = s || Ot, u = u || Ot;
    const E = s.length, V = u.length, x = Math.min(E, V);
    let C;
    for (C = 0; C < x; C++) {
      const I = u[C] = v ? Be(u[C]) : me(u[C]);
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
  }, wt = (s, u, h, g, _, O, w, N, v) => {
    let E = 0;
    const V = u.length;
    let x = s.length - 1, C = V - 1;
    for (; E <= x && E <= C; ) {
      const I = s[E], A = u[E] = v ? Be(u[E]) : me(u[E]);
      if (Ct(I, A))
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
    for (; E <= x && E <= C; ) {
      const I = s[x], A = u[C] = v ? Be(u[C]) : me(u[C]);
      if (Ct(I, A))
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
      x--, C--;
    }
    if (E > x) {
      if (E <= C) {
        const I = C + 1, A = I < V ? u[I].el : g;
        for (; E <= C; )
          S(
            null,
            u[E] = v ? Be(u[E]) : me(u[E]),
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
      for (; E <= x; )
        He(s[E], _, O, !0), E++;
    else {
      const I = E, A = E, B = /* @__PURE__ */ new Map();
      for (E = A; E <= C; E++) {
        const oe = u[E] = v ? Be(u[E]) : me(u[E]);
        oe.key != null && (a.NODE_ENV !== "production" && B.has(oe.key) && y(
          "Duplicate keys found during update:",
          JSON.stringify(oe.key),
          "Make sure keys are unique."
        ), B.set(oe.key, E));
      }
      let U, J = 0;
      const de = C - A + 1;
      let gt = !1, Ao = 0;
      const xt = new Array(de);
      for (E = 0; E < de; E++)
        xt[E] = 0;
      for (E = I; E <= x; E++) {
        const oe = s[E];
        if (J >= de) {
          He(oe, _, O, !0);
          continue;
        }
        let ve;
        if (oe.key != null)
          ve = B.get(oe.key);
        else
          for (U = A; U <= C; U++)
            if (xt[U - A] === 0 && Ct(oe, u[U])) {
              ve = U;
              break;
            }
        ve === void 0 ? He(oe, _, O, !0) : (xt[ve - A] = E + 1, ve >= Ao ? Ao = ve : gt = !0, S(
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
      const So = gt ? kl(xt) : Ot;
      for (U = So.length - 1, E = de - 1; E >= 0; E--) {
        const oe = A + E, ve = u[oe], Fo = oe + 1 < V ? u[oe + 1].el : g;
        xt[E] === 0 ? S(
          null,
          ve,
          h,
          Fo,
          _,
          O,
          w,
          N,
          v
        ) : gt && (U < 0 || E !== So[U] ? ht(ve, h, Fo, 2) : U--);
      }
    }
  }, ht = (s, u, h, g, _ = null) => {
    const { el: O, type: w, transition: N, children: v, shapeFlag: E } = s;
    if (E & 6) {
      ht(s.component.subTree, u, h, g);
      return;
    }
    if (E & 128) {
      s.suspense.move(u, h, g);
      return;
    }
    if (E & 64) {
      w.move(s, u, h, mt);
      return;
    }
    if (w === he) {
      o(O, u, h);
      for (let x = 0; x < v.length; x++)
        ht(v[x], u, h, g);
      o(s.anchor, u, h);
      return;
    }
    if (w === sn) {
      be(s, u, h);
      return;
    }
    if (g !== 2 && E & 1 && N)
      if (g === 0)
        N.beforeEnter(O), o(O, u, h), le(() => N.enter(O), _);
      else {
        const { leave: x, delayLeave: C, afterLeave: I } = N, A = () => o(O, u, h), B = () => {
          x(O, () => {
            A(), I && I();
          });
        };
        C ? C(O, A, B) : B();
      }
    else
      o(O, u, h);
  }, He = (s, u, h, g = !1, _ = !1) => {
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
    if (N != null && ro(N, null, h, s, !0), V & 256) {
      u.ctx.deactivate(s);
      return;
    }
    const I = V & 1 && C, A = !nn(s);
    let B;
    if (A && (B = w && w.onVnodeBeforeUnmount) && we(B, u, s), V & 6)
      Ti(s.component, h, g);
    else {
      if (V & 128) {
        s.suspense.unmount(h, g);
        return;
      }
      I && Xe(s, null, u, "beforeUnmount"), V & 64 ? s.type.remove(
        s,
        u,
        h,
        _,
        mt,
        g
      ) : E && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (O !== he || x > 0 && x & 64) ? Ie(
        E,
        u,
        h,
        !1,
        !0
      ) : (O === he && x & 384 || !_ && V & 16) && Ie(v, u, h), g && In(s);
    }
    (A && (B = w && w.onVnodeUnmounted) || I) && le(() => {
      B && we(B, u, s), I && Xe(s, null, u, "unmounted");
    }, h);
  }, In = (s) => {
    const { type: u, el: h, anchor: g, transition: _ } = s;
    if (u === he) {
      a.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048 && _ && !_.persisted ? s.children.forEach((w) => {
        w.type === Ee ? r(w.el) : In(w);
      }) : $i(h, g);
      return;
    }
    if (u === sn) {
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
  }, $i = (s, u) => {
    let h;
    for (; s !== u; )
      h = b(s), r(s), s = h;
    r(u);
  }, Ti = (s, u, h) => {
    a.NODE_ENV !== "production" && s.type.__hmrId && Rs(s);
    const { bum: g, scope: _, update: O, subTree: w, um: N } = s;
    g && Dt(g), _.stop(), O && (O.active = !1, He(w, s, u, h)), N && le(N, u), le(() => {
      s.isUnmounted = !0;
    }, u), u && u.pendingBranch && !u.isUnmounted && s.asyncDep && !s.asyncResolved && s.suspenseId === u.pendingId && (u.deps--, u.deps === 0 && u.resolve()), a.NODE_ENV !== "production" && Us(s);
  }, Ie = (s, u, h, g = !1, _ = !1, O = 0) => {
    for (let w = O; w < s.length; w++)
      He(s[w], u, h, g, _);
  }, qt = (s) => s.shapeFlag & 6 ? qt(s.component.subTree) : s.shapeFlag & 128 ? s.suspense.next() : b(s.anchor || s.el), Ro = (s, u, h) => {
    s == null ? u._vnode && He(u._vnode, null, null, !0) : S(u._vnode || null, s, u, null, null, null, h), qo(), Jr(), u._vnode = s;
  }, mt = {
    p: S,
    um: He,
    m: ht,
    r: In,
    mt: je,
    mc: ce,
    pc: ye,
    pbc: Fe,
    n: qt,
    o: e
  };
  let Mn, Rn;
  return t && ([Mn, Rn] = t(
    mt
  )), {
    render: Ro,
    hydrate: Mn,
    createApp: Dl(Ro, Mn)
  };
}
function Qe({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Bl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function rn(e, t, n = !1) {
  const o = e.children, r = t.children;
  if ($(o) && $(r))
    for (let i = 0; i < o.length; i++) {
      const l = o[i];
      let c = r[i];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = r[i] = Be(r[i]), c.el = l.el), n || rn(l, c)), c.type === Kt && (c.el = l.el), a.NODE_ENV !== "production" && c.type === Ee && !c.el && (c.el = l.el);
    }
}
function kl(e) {
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
const Kl = (e) => e.__isTeleport, he = Symbol.for("v-fgt"), Kt = Symbol.for("v-txt"), Ee = Symbol.for("v-cmt"), sn = Symbol.for("v-stc"), Rt = [];
let ge = null;
function Ni(e = !1) {
  Rt.push(ge = e ? null : []);
}
function Wl() {
  Rt.pop(), ge = Rt[Rt.length - 1] || null;
}
let Ht = 1;
function sr(e) {
  Ht += e;
}
function ql(e) {
  return e.dynamicChildren = Ht > 0 ? ge || Ot : null, Wl(), Ht > 0 && ge && ge.push(e), e;
}
function bi(e, t, n, o, r, i) {
  return ql(
    Q(
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
function Ct(e, t) {
  return a.NODE_ENV !== "production" && t.shapeFlag & 6 && Et.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const zl = (...e) => yi(
  ...e
), Cn = "__vInternal", Oi = ({ key: e }) => e ?? null, ln = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? z(e) || X(e) || T(e) ? { i: ue, r: e, k: t, f: !!n } : e : null);
function Q(e, t = null, n = null, o = 0, r = null, i = e === he ? 0 : 1, l = !1, c = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Oi(t),
    ref: t && ln(t),
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
    ctx: ue
  };
  return c ? (Co(f, n), i & 128 && e.normalize(f)) : n && (f.shapeFlag |= z(n) ? 8 : 16), a.NODE_ENV !== "production" && f.key !== f.key && y("VNode created with invalid key (NaN). VNode type:", f.type), Ht > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  ge && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && ge.push(f), f;
}
const We = a.NODE_ENV !== "production" ? zl : yi;
function yi(e, t = null, n = null, o = 0, r = null, i = !1) {
  if ((!e || e === Gs) && (a.NODE_ENV !== "production" && !e && y(`Invalid vnode type when creating vnode: ${e}.`), e = Ee), Vo(e)) {
    const c = Ye(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Co(c, n), Ht > 0 && !i && ge && (c.shapeFlag & 6 ? ge[ge.indexOf(e)] = c : ge.push(c)), c.patchFlag |= -2, c;
  }
  if (Di(e) && (e = e.__vccOpts), t) {
    t = Jl(t);
    let { class: c, style: f } = t;
    c && !z(c) && (t.class = ho(c)), K(f) && (Jn(f) && !$(f) && (f = W({}, f)), t.style = po(f));
  }
  const l = z(e) ? 1 : tl(e) ? 128 : Kl(e) ? 64 : K(e) ? 4 : T(e) ? 2 : 0;
  return a.NODE_ENV !== "production" && l & 4 && Jn(e) && (e = M(e), y(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Q(
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
function Jl(e) {
  return e ? Jn(e) || Cn in e ? W({}, e) : e : null;
}
function Ye(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: i, children: l } = e, c = t ? Yl(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Oi(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? $(r) ? r.concat(ln(t)) : [r, ln(t)] : ln(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a.NODE_ENV !== "production" && i === -1 && $(l) ? l.map(vi) : l,
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
    ssContent: e.ssContent && Ye(e.ssContent),
    ssFallback: e.ssFallback && Ye(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function vi(e) {
  const t = Ye(e);
  return $(e.children) && (t.children = e.children.map(vi)), t;
}
function at(e = " ", t = 0) {
  return We(Kt, null, e, t);
}
function me(e) {
  return e == null || typeof e == "boolean" ? We(Ee) : $(e) ? We(
    he,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? Be(e) : We(Kt, null, String(e));
}
function Be(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ye(e);
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
    T(t) ? (t = { default: t, _ctx: ue }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [at(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Yl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = ho([t.class, o.class]));
      else if (r === "style")
        t.style = po([t.style, o.style]);
      else if (Bt(r)) {
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
const Zl = di();
let Xl = 0;
function Ql(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || Zl, i = {
    uid: Xl++,
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
    scope: new qi(
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
    propsOptions: hi(o, r),
    emitsOptions: ei(o, r),
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
  return a.NODE_ENV !== "production" ? i.ctx = gl(i) : i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Ws.bind(null, i), e.ce && e.ce(i), i;
}
let G = null, $o, _t, lr = "__VUE_INSTANCE_SETTERS__";
(_t = fn()[lr]) || (_t = fn()[lr] = []), _t.push((e) => G = e), $o = (e) => {
  _t.length > 1 ? _t.forEach((t) => t(e)) : _t[0](e);
};
const vt = (e) => {
  $o(e), e.scope.on();
}, lt = () => {
  G && G.scope.off(), $o(null);
}, Gl = /* @__PURE__ */ Ze("slot,component");
function io(e, t) {
  const n = t.isNativeTag || Or;
  (Gl(e) || n(e)) && y(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function wi(e) {
  return e.vnode.shapeFlag & 4;
}
let Lt = !1;
function ec(e, t = !1) {
  Lt = t;
  const { props: n, children: o } = e.vnode, r = wi(e);
  Cl(e, n, r, t), Fl(e, o);
  const i = r ? tc(e, t) : void 0;
  return Lt = !1, i;
}
function tc(e, t) {
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
        si(i[l]);
    }
    o.compilerOptions && nc() && y(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Lr(new Proxy(e.ctx, fi)), a.NODE_ENV !== "production" && _l(e);
  const { setup: r } = o;
  if (r) {
    const i = e.setupContext = r.length > 1 ? rc(e) : null;
    vt(e), dt();
    const l = Ae(
      r,
      e,
      0,
      [a.NODE_ENV !== "production" ? Tt(e.props) : e.props, i]
    );
    if (pt(), lt(), uo(l)) {
      if (l.then(lt, lt), t)
        return l.then((c) => {
          cr(e, c, t);
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
      cr(e, l, t);
  } else
    xi(e, t);
}
function cr(e, t, n) {
  T(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : K(t) ? (a.NODE_ENV !== "production" && Vo(t) && y(
    "setup() should not return VNodes directly - return a render function instead."
  ), a.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = kr(t), a.NODE_ENV !== "production" && El(e)) : a.NODE_ENV !== "production" && t !== void 0 && y(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), xi(e, n);
}
let so;
const nc = () => !so;
function xi(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && so && !o.render) {
      const r = o.template || xo(e).template;
      if (r) {
        a.NODE_ENV !== "production" && Me(e, "compile");
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
        o.render = so(r, d), a.NODE_ENV !== "production" && Re(e, "compile");
      }
    }
    e.render = o.render || ee;
  }
  {
    vt(e), dt();
    try {
      bl(e);
    } finally {
      pt(), lt();
    }
  }
  a.NODE_ENV !== "production" && !o.render && e.render === ee && !t && (o.template ? y(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : y("Component is missing template or render function."));
}
function ur(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    a.NODE_ENV !== "production" ? {
      get(t, n) {
        return pn(), te(e, "get", "$attrs"), t[n];
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
function oc(e) {
  return e.slotsProxy || (e.slotsProxy = new Proxy(e.slots, {
    get(t, n) {
      return te(e, "get", "$slots"), t[n];
    }
  }));
}
function rc(e) {
  const t = (n) => {
    if (a.NODE_ENV !== "production" && (e.exposed && y("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && ($(n) ? o = "array" : X(n) && (o = "ref")), o !== "object" && y(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  return a.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return ur(e);
    },
    get slots() {
      return oc(e);
    },
    get emit() {
      return (n, ...o) => e.emit(n, ...o);
    },
    expose: t
  }) : {
    get attrs() {
      return ur(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function To(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(kr(Lr(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in st)
          return st[n](e);
      },
      has(t, n) {
        return n in t || n in st;
      }
    }));
}
const ic = /(?:^|[-_])(\w)/g, sc = (e) => e.replace(ic, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Po(e, t = !0) {
  return T(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function $n(e, t, n = !1) {
  let o = Po(t);
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
  return o ? sc(o) : n ? "App" : "Anonymous";
}
function Di(e) {
  return T(e) && "__vccOpts" in e;
}
const lc = (e, t) => ys(e, t, Lt), cc = Symbol.for("v-scx"), uc = () => {
  {
    const e = on(cc);
    return e || a.NODE_ENV !== "production" && y(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Hn(e) {
  return !!(e && e.__v_isShallow);
}
function fc() {
  if (a.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, r = {
    header(p) {
      return K(p) ? p.__isVue ? ["div", e, "VueInstance"] : X(p) ? [
        "div",
        {},
        ["span", e, m(p)],
        "<",
        c(p.value),
        ">"
      ] : ot(p) ? [
        "div",
        {},
        ["span", e, Hn(p) ? "ShallowReactive" : "Reactive"],
        "<",
        c(p),
        `>${Je(p) ? " (readonly)" : ""}`
      ] : Je(p) ? [
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
    return typeof p == "number" ? ["span", t, p] : typeof p == "string" ? ["span", n, JSON.stringify(p)] : typeof p == "boolean" ? ["span", o, p] : K(p) ? ["object", { object: b ? M(p) : p }] : ["span", n, String(p)];
  }
  function f(p, b) {
    const D = p.type;
    if (T(D))
      return;
    const H = {};
    for (const S in p.ctx)
      d(D, S, b) && (H[S] = p.ctx[S]);
    return H;
  }
  function d(p, b, D) {
    const H = p[D];
    if ($(H) && H.includes(b) || K(H) && b in H || p.extends && d(p.extends, b, D) || p.mixins && p.mixins.some((S) => d(S, b, D)))
      return !0;
  }
  function m(p) {
    return Hn(p) ? "ShallowRef" : p.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const fr = "3.3.10";
var Ut = {};
const ac = "http://www.w3.org/2000/svg", et = typeof document < "u" ? document : null, ar = et && /* @__PURE__ */ et.createElement("template"), dc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t ? et.createElementNS(ac, e) : et.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => et.createTextNode(e),
  createComment: (e) => et.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => et.querySelector(e),
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
      ar.innerHTML = o ? `<svg>${e}</svg>` : e;
      const c = ar.content;
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
}, pc = Symbol("_vtc");
function hc(e, t, n) {
  const o = e[pc];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const mc = Symbol("_vod");
function gc(e, t, n) {
  const o = e.style, r = z(n);
  if (n && !r) {
    if (t && !z(t))
      for (const i in t)
        n[i] == null && lo(o, i, "");
    for (const i in n)
      lo(o, i, n[i]);
  } else {
    const i = o.display;
    r ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), mc in e && (o.display = i);
  }
}
const _c = /[^\\];\s*$/, dr = /\s*!important$/;
function lo(e, t, n) {
  if ($(n))
    n.forEach((o) => lo(e, t, o));
  else if (n == null && (n = ""), Ut.NODE_ENV !== "production" && _c.test(n) && y(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = Ec(e, t);
    dr.test(n) ? e.setProperty(
      qe(o),
      n.replace(dr, ""),
      "important"
    ) : e[o] = n;
  }
}
const pr = ["Webkit", "Moz", "ms"], Ln = {};
function Ec(e, t) {
  const n = Ln[t];
  if (n)
    return n;
  let o = $e(t);
  if (o !== "filter" && o in e)
    return Ln[t] = o;
  o = ct(o);
  for (let r = 0; r < pr.length; r++) {
    const i = pr[r] + o;
    if (i in e)
      return Ln[t] = i;
  }
  return t;
}
const hr = "http://www.w3.org/1999/xlink";
function Nc(e, t, n, o, r) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(hr, t.slice(6, t.length)) : e.setAttributeNS(hr, t, n);
  else {
    const i = Wi(t);
    n == null || i && !xr(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : n);
  }
}
function bc(e, t, n, o, r, i, l) {
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
    d === "boolean" ? n = xr(n) : n == null && d === "string" ? (n = "", f = !0) : d === "number" && (n = 0, f = !0);
  }
  try {
    e[t] = n;
  } catch (d) {
    Ut.NODE_ENV !== "production" && !f && y(
      `Failed setting prop "${t}" on <${c.toLowerCase()}>: value ${n} is invalid.`,
      d
    );
  }
  f && e.removeAttribute(t);
}
function Oc(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function yc(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const mr = Symbol("_vei");
function vc(e, t, n, o, r = null) {
  const i = e[mr] || (e[mr] = {}), l = i[t];
  if (o && l)
    l.value = o;
  else {
    const [c, f] = wc(t);
    if (o) {
      const d = i[t] = Vc(o, r);
      Oc(e, c, d, f);
    } else
      l && (yc(e, c, l, f), i[t] = void 0);
  }
}
const gr = /(?:Once|Passive|Capture)$/;
function wc(e) {
  let t;
  if (gr.test(e)) {
    t = {};
    let o;
    for (; o = e.match(gr); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : qe(e.slice(2)), t];
}
let Un = 0;
const xc = /* @__PURE__ */ Promise.resolve(), Dc = () => Un || (xc.then(() => Un = 0), Un = Date.now());
function Vc(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    _e(
      Cc(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = Dc(), n;
}
function Cc(e, t) {
  if ($(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((o) => (r) => !r._stopped && o && o(r));
  } else
    return t;
}
const _r = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, $c = (e, t, n, o, r = !1, i, l, c, f) => {
  t === "class" ? hc(e, o, r) : t === "style" ? gc(e, n, o) : Bt(t) ? cn(t) || vc(e, t, n, o, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Tc(e, t, o, r)) ? bc(
    e,
    t,
    o,
    i,
    l,
    c,
    f
  ) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Nc(e, t, o, r));
};
function Tc(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && _r(t) && T(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    return !(r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE");
  }
  return _r(t) && z(n) ? !1 : t in e;
}
const Pc = /* @__PURE__ */ W({ patchProp: $c }, dc);
let Er;
function Ic() {
  return Er || (Er = Ll(Pc));
}
const Mc = (...e) => {
  const t = Ic().createApp(...e);
  Ut.NODE_ENV !== "production" && (Rc(t), Ac(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const r = Sc(o);
    if (!r)
      return;
    const i = t._component;
    !T(i) && !i.render && !i.template && (i.template = r.innerHTML), r.innerHTML = "";
    const l = n(r, !1, r instanceof SVGElement);
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), l;
  }, t;
};
function Rc(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Bi(t) || ki(t),
    writable: !1
  });
}
function Ac(e) {
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
function Sc(e) {
  if (z(e)) {
    const t = document.querySelector(e);
    return Ut.NODE_ENV !== "production" && !t && y(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return Ut.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && y(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var Fc = {};
function jc() {
  fc();
}
Fc.NODE_ENV !== "production" && jc();
const Tn = (e) => (ti("data-v-1d5be6d4"), e = e(), ni(), e), Hc = { class: "card" }, Lc = /* @__PURE__ */ Tn(() => /* @__PURE__ */ Q("p", null, [
  /* @__PURE__ */ at(" Edit "),
  /* @__PURE__ */ Q("code", null, "components/HelloWorld.vue"),
  /* @__PURE__ */ at(" to test HMR ")
], -1)), Uc = /* @__PURE__ */ Tn(() => /* @__PURE__ */ Q("p", null, [
  /* @__PURE__ */ at(" Check out "),
  /* @__PURE__ */ Q("a", {
    href: "https://vuejs.org/guide/quick-start.html#local",
    target: "_blank"
  }, "create-vue"),
  /* @__PURE__ */ at(", the official Vue + Vite starter ")
], -1)), Bc = /* @__PURE__ */ Tn(() => /* @__PURE__ */ Q("p", null, [
  /* @__PURE__ */ at(" Install "),
  /* @__PURE__ */ Q("a", {
    href: "https://github.com/vuejs/language-tools",
    target: "_blank"
  }, "Volar"),
  /* @__PURE__ */ at(" in your IDE for a better DX ")
], -1)), kc = /* @__PURE__ */ Tn(() => /* @__PURE__ */ Q("p", { class: "read-the-docs" }, "Click on the Vite and Vue logos to learn more", -1)), Kc = /* @__PURE__ */ li({
  __name: "HelloWorld",
  props: {
    msg: {}
  },
  setup(e) {
    const t = gs(0);
    return (n, o) => (Ni(), bi(he, null, [
      Q("h1", null, Bn(n.msg), 1),
      Q("div", Hc, [
        Q("button", {
          type: "button",
          onClick: o[0] || (o[0] = (r) => t.value++)
        }, "count is " + Bn(t.value), 1),
        Lc
      ]),
      Uc,
      Bc,
      kc
    ], 64));
  }
}), Vi = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Wc = /* @__PURE__ */ Vi(Kc, [["__scopeId", "data-v-1d5be6d4"]]), Nr = "HelloWorld2InnerPageJsApp", qc = /* @__PURE__ */ li({
  name: "App",
  components: {
    HelloWorld: Wc
  },
  data() {
    return {
      count: 0,
      messagePort: null
    };
  },
  created() {
    console.debug("App created!"), this.initMessageReceiver();
  },
  mounted() {
    console.log("App mounted!");
  },
  unmounted() {
    this.removeMessageReceiver();
  },
  methods: {
    initMessageReceiver() {
      console.debug("initMessageReceiver"), window.addEventListener("message", this.registerMessagePort);
    },
    removeMessageReceiver() {
      var e;
      window.removeEventListener("message", this.registerMessagePort), (e = this.$data.messagePort) == null || e.close();
    },
    registerMessagePort(e) {
      console.debug("registerMessagePort", e);
      const { from: t, to: n, event: o } = e.data;
      if (console.debug("{from, to, event}", JSON.stringify({ from: t, to: n, event: o })), t === "HelloWorld2" && o === "registerMessageHandler") {
        const r = e.ports[0];
        this.$data.messagePort = r, this.$data.messagePort.onmessage = this.messageReceiver;
      }
    },
    messageReceiver(e) {
      console.debug("messageReceiver");
      const { from: t, to: n, event: o, payload: r } = e.data;
      if (n === Nr)
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
      (n = this.$data.messagePort) == null || n.postMessage({
        from: Nr,
        event: e,
        payload: t
      });
    }
  }
}), zc = "/vite.svg", Jc = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='37.07'%20height='36'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20198'%3e%3cpath%20fill='%2341B883'%20d='M204.8%200H256L128%20220.8L0%200h97.92L128%2051.2L157.44%200h47.36Z'%3e%3c/path%3e%3cpath%20fill='%2341B883'%20d='m0%200l128%20220.8L256%200h-51.2L128%20132.48L50.56%200H0Z'%3e%3c/path%3e%3cpath%20fill='%2335495E'%20d='M50.56%200L128%20133.12L204.8%200h-47.36L128%2051.2L97.92%200H50.56Z'%3e%3c/path%3e%3c/svg%3e", Io = (e) => (ti("data-v-ea65b9d7"), e = e(), ni(), e), Yc = { ref: "root" }, Zc = /* @__PURE__ */ Io(() => /* @__PURE__ */ Q("hr", null, null, -1)), Xc = /* @__PURE__ */ Io(() => /* @__PURE__ */ Q("a", {
  href: "https://vitejs.dev",
  target: "_blank"
}, [
  /* @__PURE__ */ Q("img", {
    src: zc,
    class: "logo",
    alt: "Vite logo"
  })
], -1)), Qc = /* @__PURE__ */ Io(() => /* @__PURE__ */ Q("a", {
  href: "https://vuejs.org/",
  target: "_blank"
}, [
  /* @__PURE__ */ Q("img", {
    src: Jc,
    class: "logo vue",
    alt: "Vue logo"
  })
], -1));
function Gc(e, t, n, o, r, i) {
  const l = Qs("HelloWorld");
  return Ni(), bi("div", Yc, [
    Q("div", null, [
      Q("p", null, "LWC のボタンが押された回数: " + Bn(e.count), 1),
      Zc,
      Xc,
      Qc
    ]),
    We(l, { msg: "Vite + Vue" })
  ], 512);
}
const Ci = /* @__PURE__ */ Vi(qc, [["render", Gc], ["__scopeId", "data-v-ea65b9d7"]]);
console.debug("HelloWorld2InnerPageJsApp: main.ts", Ci);
Mc(Ci).mount("#app");
