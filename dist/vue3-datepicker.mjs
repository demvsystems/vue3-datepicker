(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".v3dp__popout[data-v-65eb861b]{z-index:10;position:absolute;text-align:center;width:17.5em;background-color:var(--popout-bg-color);box-shadow:var(--box-shadow);border-radius:var(--border-radius);padding:8px 0 1em;color:var(--text-color)}.v3dp__popout *[data-v-65eb861b]{color:inherit;font-size:inherit;font-weight:inherit}.v3dp__popout[data-v-65eb861b] button{background:none;border:none;outline:none}.v3dp__popout[data-v-65eb861b] button:not(:disabled){cursor:pointer}.v3dp__heading[data-v-65eb861b]{width:100%;display:flex;height:var(--heading-size);line-height:var(--heading-size);font-weight:var(--heading-weight)}.v3dp__heading__button[data-v-65eb861b]{background:none;border:none;padding:0;display:flex;justify-content:center;align-items:center;width:var(--heading-size)}button.v3dp__heading__center[data-v-65eb861b]:hover,.v3dp__heading__button[data-v-65eb861b]:not(:disabled):hover{background-color:var(--heading-hover-color)}.v3dp__heading__center[data-v-65eb861b]{flex:1}.v3dp__heading__icon[data-v-65eb861b]{height:12px;stroke:var(--arrow-color)}.v3dp__heading__button:disabled .v3dp__heading__icon[data-v-65eb861b]{stroke:var(--elem-disabled-color)}.v3dp__subheading[data-v-65eb861b],.v3dp__elements[data-v-65eb861b]{display:grid;grid-template-columns:var(--popout-column-definition);font-size:var(--elem-font-size)}.v3dp__subheading[data-v-65eb861b]{margin-top:1em}.v3dp__divider[data-v-65eb861b]{border:1px solid var(--divider-color);border-radius:3px}.v3dp__elements[data-v-65eb861b] button:disabled{color:var(--elem-disabled-color)}.v3dp__elements[data-v-65eb861b] button{padding:.3em .6em}.v3dp__elements[data-v-65eb861b] button span{display:block;line-height:1.9em;height:1.8em;border-radius:var(--elem-border-radius)}.v3dp__elements[data-v-65eb861b] button:not(:disabled):hover span{background-color:var(--elem-hover-bg-color);color:var(--elem-hover-color)}.v3dp__elements[data-v-65eb861b] button.selected span{background-color:var(--elem-selected-bg-color);color:var(--elem-selected-color)}.v3dp__elements[data-v-65eb861b] button.current span{font-weight:var(--elem-current-font-weight);outline:1px solid var(--elem-current-outline-color)}.v3dp__column[data-v-81ac698d]{display:flex;flex-direction:column;overflow-y:auto;height:190px}.v3dp__datepicker{--popout-bg-color: var(--vdp-bg-color, #fff);--box-shadow: var( --vdp-box-shadow, 0 4px 10px 0 rgba(128, 144, 160, .1), 0 0 1px 0 rgba(128, 144, 160, .81) );--text-color: var(--vdp-text-color, #000000);--border-radius: var(--vdp-border-radius, 3px);--heading-size: var(--vdp-heading-size, 2.5em);--heading-weight: var(--vdp-heading-weight, bold);--heading-hover-color: var(--vdp-heading-hover-color, #eeeeee);--arrow-color: var(--vdp-arrow-color, currentColor);--elem-color: var(--vdp-elem-color, currentColor);--elem-disabled-color: var(--vdp-disabled-color, #d5d9e0);--elem-hover-color: var(--vdp-hover-color, #fff);--elem-hover-bg-color: var(--vdp-hover-bg-color, #0baf74);--elem-selected-color: var(--vdp-selected-color, #fff);--elem-selected-bg-color: var(--vdp-selected-bg-color, #0baf74);--elem-current-outline-color: var(--vdp-current-date-outline-color, #888);--elem-current-font-weight: var(--vdp-current-date-font-weight, bold);--elem-font-size: var(--vdp-elem-font-size, .8em);--elem-border-radius: var(--vdp-elem-border-radius, 3px);--divider-color: var(--vdp-divider-color, var(--elem-disabled-color));position:relative}.v3dp__clearable{display:inline;position:relative;left:-15px;cursor:pointer}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
import { defineComponent as B, openBlock as h, createElementBlock as S, normalizeClass as R, normalizeStyle as re, withModifiers as C, createElementVNode as m, renderSlot as F, createBlock as N, resolveDynamicComponent as pe, withCtx as M, Fragment as H, createCommentVNode as ge, renderList as Z, toDisplayString as O, pushScopeId as ve, popScopeId as ye, computed as u, resolveComponent as q, createTextVNode as K, ref as $, watch as ne, nextTick as be, watchEffect as X, withDirectives as P, mergeProps as he, vModelText as De, vShow as I, createVNode as A } from "vue";
import { isValid as w, startOfDecade as ke, endOfDecade as we, eachYearOfInterval as Le, getYear as L, getDecade as U, isBefore as j, isAfter as Y, subYears as de, addYears as ue, startOfYear as $e, endOfYear as Se, format as z, eachMonthOfInterval as _e, isSameMonth as ee, isSameYear as ie, startOfMonth as ce, endOfMonth as me, startOfWeek as Ve, endOfWeek as Oe, setDay as qe, eachDayOfInterval as Ce, isSameDay as x, isWithinInterval as Me, startOfDay as Pe, endOfDay as Fe, subMonths as Be, addMonths as Te, set as le, isSameHour as Ee, isSameMinute as Ie, parse as oe, max as Re, min as He } from "date-fns";
const je = ["year", "month", "day", "time", "custom"], Ye = B({
  emits: {
    elementClick: (e) => w(e),
    left: () => !0,
    right: () => !0,
    heading: () => !0
  },
  props: {
    headingClickable: {
      type: Boolean,
      default: !1
    },
    leftDisabled: {
      type: Boolean,
      default: !1
    },
    rightDisabled: {
      type: Boolean,
      default: !1
    },
    columnCount: {
      type: Number,
      default: 7
    },
    items: {
      type: Array,
      default: () => []
    },
    viewMode: {
      type: String,
      required: !0,
      validate: (e) => typeof e == "string" && je.includes(e)
    }
  }
});
const T = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [l, o] of t)
    r[l] = o;
  return r;
}, te = (e) => (ve("data-v-65eb861b"), e = e(), ye(), e), Ne = { class: "v3dp__heading" }, Ae = ["disabled"], Ue = /* @__PURE__ */ te(() => /* @__PURE__ */ m("svg", {
  class: "v3dp__heading__icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 6 8"
}, [
  /* @__PURE__ */ m("g", {
    fill: "none",
    "fill-rule": "evenodd"
  }, [
    /* @__PURE__ */ m("path", {
      stroke: "none",
      d: "M-9 16V-8h24v24z"
    }),
    /* @__PURE__ */ m("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M5 0L1 4l4 4"
    })
  ])
], -1)), We = ["disabled"], Ze = /* @__PURE__ */ te(() => /* @__PURE__ */ m("svg", {
  class: "v3dp__heading__icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 6 8"
}, [
  /* @__PURE__ */ m("g", {
    fill: "none",
    "fill-rule": "evenodd"
  }, [
    /* @__PURE__ */ m("path", {
      stroke: "none",
      d: "M15-8v24H-9V-8z"
    }),
    /* @__PURE__ */ m("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M1 8l4-4-4-4"
    })
  ])
], -1)), ze = { class: "v3dp__body" }, Ke = { class: "v3dp__subheading" }, Ge = /* @__PURE__ */ te(() => /* @__PURE__ */ m("hr", { class: "v3dp__divider" }, null, -1)), Je = { class: "v3dp__elements" }, Qe = ["disabled", "onClick"];
function Xe(e, t, r, l, o, p) {
  return h(), S("div", {
    class: R(["v3dp__popout", `v3dp__popout-${e.viewMode}`]),
    style: re({ ["--popout-column-definition"]: `repeat(${e.columnCount}, 1fr)` }),
    onMousedown: t[3] || (t[3] = C(() => {
    }, ["prevent"]))
  }, [
    m("div", Ne, [
      m("button", {
        class: "v3dp__heading__button v3dp__heading__button__left",
        disabled: e.leftDisabled,
        onClick: t[0] || (t[0] = C((n) => e.$emit("left"), ["stop", "prevent"]))
      }, [
        F(e.$slots, "arrow-left", {}, () => [
          Ue
        ], !0)
      ], 8, Ae),
      (h(), N(pe(e.headingClickable ? "button" : "span"), {
        class: "v3dp__heading__center",
        onClick: t[1] || (t[1] = C((n) => e.$emit("heading"), ["stop", "prevent"]))
      }, {
        default: M(() => [
          F(e.$slots, "heading", {}, void 0, !0)
        ]),
        _: 3
      })),
      m("button", {
        class: "v3dp__heading__button v3dp__heading__button__right",
        disabled: e.rightDisabled,
        onClick: t[2] || (t[2] = C((n) => e.$emit("right"), ["stop", "prevent"]))
      }, [
        F(e.$slots, "arrow-right", {}, () => [
          Ze
        ], !0)
      ], 8, We)
    ]),
    m("div", ze, [
      "subheading" in e.$slots ? (h(), S(H, { key: 0 }, [
        m("div", Ke, [
          F(e.$slots, "subheading", {}, void 0, !0)
        ]),
        Ge
      ], 64)) : ge("", !0),
      m("div", Je, [
        F(e.$slots, "body", {}, () => [
          (h(!0), S(H, null, Z(e.items, (n) => (h(), S("button", {
            key: n.key,
            disabled: n.disabled,
            class: R([
              {
                selected: n.selected,
                current: n.current
              },
              `v3dp__element__button__${e.viewMode}`
            ]),
            onClick: C((a) => e.$emit("elementClick", n.value), ["stop", "prevent"])
          }, [
            m("span", null, O(n.display), 1)
          ], 10, Qe))), 128))
        ], !0)
      ])
    ])
  ], 38);
}
const G = /* @__PURE__ */ T(Ye, [["render", Xe], ["__scopeId", "data-v-65eb861b"]]), xe = B({
  components: {
    PickerPopup: G
  },
  emits: {
    "update:pageDate": (e) => w(e),
    select: (e) => w(e)
  },
  props: {
    selected: {
      type: Date,
      required: !1
    },
    pageDate: {
      type: Date,
      required: !0
    },
    lowerLimit: {
      type: Date,
      required: !1
    },
    upperLimit: {
      type: Date,
      required: !1
    }
  },
  setup(e, { emit: t }) {
    const r = u(() => ke(e.pageDate)), l = u(() => we(e.pageDate)), o = (b, y, i) => !y && !i ? !0 : !(y && L(b) < L(y) || i && L(b) > L(i)), p = u(
      () => Le({
        start: r.value,
        end: l.value
      }).map(
        (b) => ({
          value: b,
          key: String(L(b)),
          display: L(b),
          selected: !!e.selected && L(b) === L(e.selected),
          disabled: !o(b, e.lowerLimit, e.upperLimit)
        })
      )
    ), n = u(() => {
      const b = L(r.value), y = L(l.value);
      return `${b} - ${y}`;
    }), a = u(
      () => e.lowerLimit && (U(e.lowerLimit) === U(e.pageDate) || j(e.pageDate, e.lowerLimit))
    ), f = u(
      () => e.upperLimit && (U(e.upperLimit) === U(e.pageDate) || Y(e.pageDate, e.upperLimit))
    );
    return {
      years: p,
      heading: n,
      leftDisabled: a,
      rightDisabled: f,
      previousPage: () => t("update:pageDate", de(e.pageDate, 10)),
      nextPage: () => t("update:pageDate", ue(e.pageDate, 10))
    };
  }
});
function et(e, t, r, l, o, p) {
  const n = q("picker-popup");
  return h(), N(n, {
    columnCount: 3,
    leftDisabled: e.leftDisabled,
    rightDisabled: e.rightDisabled,
    items: e.years,
    viewMode: "year",
    onLeft: e.previousPage,
    onRight: e.nextPage,
    onElementClick: t[0] || (t[0] = (a) => e.$emit("select", a))
  }, {
    heading: M(() => [
      K(O(e.heading), 1)
    ]),
    _: 1
  }, 8, ["leftDisabled", "rightDisabled", "items", "onLeft", "onRight"]);
}
const tt = /* @__PURE__ */ T(xe, [["render", et]]), at = B({
  components: {
    PickerPopup: G
  },
  emits: {
    "update:pageDate": (e) => w(e),
    select: (e) => w(e),
    back: () => !0
  },
  props: {
    /**
     * Currently selected date, needed for highlighting
     */
    selected: {
      type: Date,
      required: !1
    },
    pageDate: {
      type: Date,
      required: !0
    },
    format: {
      type: String,
      required: !1,
      default: "LLL"
    },
    locale: {
      type: Object,
      required: !1
    },
    lowerLimit: {
      type: Date,
      required: !1
    },
    upperLimit: {
      type: Date,
      required: !1
    }
  },
  setup(e, { emit: t }) {
    const r = u(() => $e(e.pageDate)), l = u(() => Se(e.pageDate)), o = u(
      () => (y) => z(y, e.format, {
        locale: e.locale
      })
    ), p = (y, i, D) => !i && !D ? !0 : !(i && j(y, ce(i)) || D && Y(y, me(D))), n = u(
      () => _e({
        start: r.value,
        end: l.value
      }).map(
        (y) => ({
          value: y,
          display: o.value(y),
          key: o.value(y),
          selected: !!e.selected && ee(e.selected, y),
          disabled: !p(y, e.lowerLimit, e.upperLimit)
        })
      )
    ), a = u(() => L(r.value)), f = u(
      () => e.lowerLimit && (ie(e.lowerLimit, e.pageDate) || j(e.pageDate, e.lowerLimit))
    ), _ = u(
      () => e.upperLimit && (ie(e.upperLimit, e.pageDate) || Y(e.pageDate, e.upperLimit))
    );
    return {
      months: n,
      heading: a,
      leftDisabled: f,
      rightDisabled: _,
      previousPage: () => t("update:pageDate", de(e.pageDate, 1)),
      nextPage: () => t("update:pageDate", ue(e.pageDate, 1))
    };
  }
});
function nt(e, t, r, l, o, p) {
  const n = q("picker-popup");
  return h(), N(n, {
    headingClickable: "",
    columnCount: 3,
    items: e.months,
    leftDisabled: e.leftDisabled,
    rightDisabled: e.rightDisabled,
    viewMode: "month",
    onLeft: e.previousPage,
    onRight: e.nextPage,
    onHeading: t[0] || (t[0] = (a) => e.$emit("back")),
    onElementClick: t[1] || (t[1] = (a) => e.$emit("select", a))
  }, {
    heading: M(() => [
      K(O(e.heading), 1)
    ]),
    _: 1
  }, 8, ["items", "leftDisabled", "rightDisabled", "onLeft", "onRight"]);
}
const it = /* @__PURE__ */ T(at, [["render", nt]]), lt = B({
  components: {
    PickerPopup: G
  },
  emits: {
    "update:pageDate": (e) => w(e),
    select: (e) => w(e),
    back: () => !0
  },
  props: {
    selected: {
      type: Date,
      required: !1
    },
    pageDate: {
      type: Date,
      required: !0
    },
    format: {
      type: String,
      required: !1,
      default: "dd"
    },
    headingFormat: {
      type: String,
      required: !1,
      default: "LLLL yyyy"
    },
    weekdayFormat: {
      type: String,
      required: !1,
      default: "EE"
    },
    locale: {
      type: Object,
      required: !1
    },
    weekStartsOn: {
      type: Number,
      required: !1,
      default: 1,
      validator: (e) => typeof e == "number" && Number.isInteger(e) && e >= 0 && e <= 6
    },
    lowerLimit: {
      type: Date,
      required: !1
    },
    upperLimit: {
      type: Date,
      required: !1
    },
    disabledDates: {
      type: Object,
      required: !1
    },
    allowOutsideInterval: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(e, { emit: t }) {
    const r = u(
      () => (g) => (v) => z(v, g, {
        locale: e.locale,
        weekStartsOn: e.weekStartsOn
      })
    ), l = u(() => ce(e.pageDate)), o = u(() => me(e.pageDate)), p = u(() => ({
      start: l.value,
      end: o.value
    })), n = u(() => ({
      start: Ve(l.value, {
        weekStartsOn: e.weekStartsOn
      }),
      end: Oe(o.value, {
        weekStartsOn: e.weekStartsOn
      })
    })), a = u(() => {
      const g = e.weekStartsOn, v = r.value(e.weekdayFormat);
      return Array.from(Array(7)).map((c, k) => (g + k) % 7).map(
        (c) => qe(/* @__PURE__ */ new Date(), c, {
          weekStartsOn: e.weekStartsOn
        })
      ).map(v);
    }), f = (g, v, c, k) => {
      var E, J;
      return (E = k == null ? void 0 : k.dates) != null && E.some((ae) => x(g, ae)) || (J = k == null ? void 0 : k.predicate) != null && J.call(k, g) ? !1 : !v && !c ? !0 : !(v && j(g, Pe(v)) || c && Y(g, Fe(c)));
    }, _ = u(() => {
      const g = /* @__PURE__ */ new Date(), v = r.value(e.format);
      return Ce(n.value).map(
        (c) => ({
          value: c,
          display: v(c),
          selected: !!e.selected && x(e.selected, c),
          current: x(g, c),
          disabled: !e.allowOutsideInterval && !Me(c, p.value) || !f(
            c,
            e.lowerLimit,
            e.upperLimit,
            e.disabledDates
          ),
          key: r.value("yyyy-MM-dd")(c)
        })
      );
    }), d = u(
      () => r.value(e.headingFormat)(e.pageDate)
    ), b = u(
      () => e.lowerLimit && (ee(e.lowerLimit, e.pageDate) || j(e.pageDate, e.lowerLimit))
    ), y = u(
      () => e.upperLimit && (ee(e.upperLimit, e.pageDate) || Y(e.pageDate, e.upperLimit))
    );
    return {
      weekDays: a,
      days: _,
      heading: d,
      leftDisabled: b,
      rightDisabled: y,
      previousPage: () => t("update:pageDate", Be(e.pageDate, 1)),
      nextPage: () => t("update:pageDate", Te(e.pageDate, 1))
    };
  }
});
function ot(e, t, r, l, o, p) {
  const n = q("picker-popup");
  return h(), N(n, {
    headingClickable: "",
    leftDisabled: e.leftDisabled,
    rightDisabled: e.rightDisabled,
    items: e.days,
    viewMode: "day",
    onLeft: e.previousPage,
    onRight: e.nextPage,
    onHeading: t[0] || (t[0] = (a) => e.$emit("back")),
    onElementClick: t[1] || (t[1] = (a) => e.$emit("select", a))
  }, {
    heading: M(() => [
      K(O(e.heading), 1)
    ]),
    subheading: M(() => [
      (h(!0), S(H, null, Z(e.weekDays, (a, f) => (h(), S("span", {
        key: a,
        class: R(`v3dp__subheading__weekday__${f}`)
      }, O(a), 3))), 128))
    ]),
    _: 1
  }, 8, ["leftDisabled", "rightDisabled", "items", "onLeft", "onRight"]);
}
const st = /* @__PURE__ */ T(lt, [["render", ot]]);
function se(e, t) {
  const r = e.getBoundingClientRect(), l = {
    height: e.clientHeight,
    width: e.clientWidth
  }, o = t.getBoundingClientRect();
  if (!(o.top >= r.top && o.bottom <= r.top + l.height)) {
    const n = o.top - r.top, a = o.bottom - r.bottom;
    Math.abs(n) < Math.abs(a) ? e.scrollTop += n : e.scrollTop += a;
  }
}
const rt = B({
  components: {
    PickerPopup: G
  },
  emits: {
    select: (e) => w(e),
    back: () => !0
  },
  props: {
    selected: {
      type: Date,
      required: !1
    },
    pageDate: {
      type: Date,
      required: !0
    },
    visible: {
      type: Boolean,
      required: !0
    },
    disabledTime: {
      type: Object,
      required: !1
    }
  },
  setup(e, { emit: t }) {
    const r = $(null), l = $(null), o = u(() => e.pageDate ?? e.selected), p = $(o.value.getHours()), n = $(o.value.getMinutes());
    ne(
      () => e.selected,
      (i) => {
        let D = 0, g = 0;
        i && (D = i.getHours(), g = i.getMinutes()), p.value = D, n.value = g;
      }
    );
    const a = u(
      () => [...Array(24).keys()].map(
        (i) => ({
          value: i,
          date: le(new Date(o.value.getTime()), {
            hours: i,
            minutes: n.value,
            seconds: 0
          }),
          selected: p.value === i,
          ref: $(null)
        })
      )
    ), f = u(
      () => [...Array(60).keys()].map((i) => ({
        value: i,
        date: le(new Date(o.value.getTime()), {
          hours: p.value,
          minutes: i,
          seconds: 0
        }),
        selected: n.value === i,
        ref: $(null)
      }))
    ), _ = (i) => {
      n.value = i.value, t("select", i.date);
    }, d = () => {
      const i = a.value.find(
        (g) => {
          var v, c;
          return ((c = (v = g.ref.value) == null ? void 0 : v.classList) == null ? void 0 : c.contains("selected")) ?? !1;
        }
      ), D = f.value.find(
        (g) => {
          var v, c;
          return ((c = (v = g.ref.value) == null ? void 0 : v.classList) == null ? void 0 : c.contains("selected")) ?? !1;
        }
      );
      i && D && (se(r.value, i.ref.value), se(l.value, D.ref.value));
    };
    return ne(
      () => e.visible,
      (i) => {
        i && be(d);
      }
    ), {
      hoursListRef: r,
      minutesListRef: l,
      hours: p,
      minutes: n,
      hoursList: a,
      minutesList: f,
      padStartZero: (i) => `0${i}`.substr(-2),
      selectMinutes: _,
      isEnabled: (i) => {
        var D, g, v, c;
        return !((g = (D = e.disabledTime) == null ? void 0 : D.dates) != null && g.some(
          (k) => Ee(i, k) && Ie(i, k)
        ) || (c = (v = e.disabledTime) == null ? void 0 : v.predicate) != null && c.call(v, i));
      },
      scroll: d
    };
  }
});
const dt = {
  ref: "hoursListRef",
  class: "v3dp__column"
}, ut = ["disabled", "onClick"], ct = {
  ref: "minutesListRef",
  class: "v3dp__column"
}, mt = ["disabled", "onClick"];
function ft(e, t, r, l, o, p) {
  const n = q("picker-popup");
  return h(), N(n, {
    headingClickable: "",
    columnCount: 2,
    leftDisabled: !0,
    rightDisabled: !0,
    viewMode: "time",
    onHeading: t[0] || (t[0] = (a) => e.$emit("back"))
  }, {
    heading: M(() => [
      K(O(e.padStartZero(e.hours)) + ":" + O(e.padStartZero(e.minutes)), 1)
    ]),
    body: M(() => [
      m("div", dt, [
        (h(!0), S(H, null, Z(e.hoursList, (a) => (h(), S("button", {
          key: a.value,
          ref_for: !0,
          ref: a.ref,
          class: R([{ selected: a.selected }, "v3dp__element_button__hour"]),
          disabled: !e.isEnabled(a.date),
          onClick: C((f) => e.hours = a.value, ["stop", "prevent"])
        }, [
          m("span", null, O(e.padStartZero(a.value)), 1)
        ], 10, ut))), 128))
      ], 512),
      m("div", ct, [
        (h(!0), S(H, null, Z(e.minutesList, (a) => (h(), S("button", {
          key: a.value,
          ref_for: !0,
          ref: a.ref,
          class: R([{ selected: a.selected }, "v3dp__element_button__minute"]),
          disabled: !e.isEnabled(a.date),
          onClick: C((f) => e.selectMinutes(a), ["stop", "prevent"])
        }, [
          m("span", null, O(e.padStartZero(a.value)), 1)
        ], 10, mt))), 128))
      ], 512)
    ]),
    _: 1
  });
}
const pt = /* @__PURE__ */ T(rt, [["render", ft], ["__scopeId", "data-v-81ac698d"]]), W = ["time", "day", "month", "year"], gt = (e, t, r = void 0) => {
  let l = r || /* @__PURE__ */ new Date();
  return e && (l = Re([e, l])), t && (l = He([t, l])), l;
}, vt = B({
  components: {
    YearPicker: tt,
    MonthPicker: it,
    DayPicker: st,
    TimePicker: pt
  },
  inheritAttrs: !1,
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    /**
     * `v-model` for selected date
     */
    modelValue: {
      type: Date,
      required: !1
    },
    /**
     * Dates not available for picking
     */
    disabledDates: {
      type: Object,
      required: !1
    },
    allowOutsideInterval: {
      type: Boolean,
      required: !1,
      default: !1
    },
    /**
     * Time not available for picking
     */
    disabledTime: {
      type: Object,
      required: !1
    },
    /**
     * Upper limit for available dates for picking
     */
    upperLimit: {
      type: Date,
      required: !1
    },
    /**
     * Lower limit for available dates for picking
     */
    lowerLimit: {
      type: Date,
      required: !1
    },
    /**
     * View on which the date picker should open. Can be either `year`, `month`, `day` or `time`
     */
    startingView: {
      type: String,
      required: !1,
      default: "day",
      validate: (e) => typeof e == "string" && W.includes(e)
    },
    /**
     * Date which should be the "center" of the initial view.
     * When an empty datepicker opens, it focuses on the month/year
     * that contains this date
     */
    startingViewDate: {
      type: Date,
      required: !1,
      default: () => /* @__PURE__ */ new Date()
    },
    /**
     * `date-fns`-type formatting for a month view heading
     */
    dayPickerHeadingFormat: {
      type: String,
      required: !1,
      default: "LLLL yyyy"
    },
    /**
     * `date-fns`-type formatting for the month picker view
     */
    monthListFormat: {
      type: String,
      required: !1,
      default: "LLL"
    },
    /**
     * `date-fns`-type formatting for a line of weekdays on day view
     */
    weekdayFormat: {
      type: String,
      required: !1,
      default: "EE"
    },
    /**
     * `date-fns`-type formatting for the day picker view
     */
    dayFormat: {
      type: String,
      required: !1,
      default: "dd"
    },
    /**
     * `date-fns`-type format in which the string in the input should be both
     * parsed and displayed
     */
    inputFormat: {
      type: String,
      required: !1,
      default: "yyyy-MM-dd"
    },
    /**
     * [`date-fns` locale object](https://date-fns.org/v2.16.1/docs/I18n#usage).
     * Used in string formatting (see default `dayPickerHeadingFormat`)
     */
    locale: {
      type: Object,
      required: !1
    },
    /**
     * Day on which the week should start.
     *
     * Number from 0 to 6, where 0 is Sunday and 6 is Saturday.
     * Week starts with a Monday (1) by default
     */
    weekStartsOn: {
      type: Number,
      required: !1,
      default: 1,
      validator: (e) => [0, 1, 2, 3, 4, 5, 6].includes(e)
    },
    /**
     * Disables datepicker and prevents it's opening
     */
    disabled: {
      type: Boolean,
      required: !1,
      default: !1
    },
    /**
     * Clears selected date
     */
    clearable: {
      type: Boolean,
      required: !1,
      default: !1
    },
    /*
     * Allows user to input date manually
     */
    typeable: {
      type: Boolean,
      required: !1,
      default: !1
    },
    /**
     * If set, lower-level views won't show
     */
    minimumView: {
      type: String,
      required: !1,
      default: "day",
      validate: (e) => typeof e == "string" && W.includes(e)
    }
  },
  emits: {
    "update:modelValue": (e) => e == null || w(e),
    decadePageChanged: (e) => !0,
    yearPageChanged: (e) => !0,
    monthPageChanged: (e) => !0,
    opened: () => !0,
    closed: () => !0
  },
  setup(e, { emit: t, attrs: r }) {
    const l = $("none"), o = $(e.startingViewDate), p = $(null), n = $(!1), a = $("");
    X(() => {
      const s = oe(a.value, e.inputFormat, /* @__PURE__ */ new Date(), {
        locale: e.locale
      });
      w(s) && (o.value = s);
    }), X(
      () => a.value = e.modelValue && w(e.modelValue) && e.inputFormat.length === a.value.length ? z(e.modelValue, e.inputFormat, {
        locale: e.locale
      }) : ""
    );
    const f = (s = "none") => {
      e.disabled || (s !== "none" && l.value === "none" && (o.value = e.modelValue || gt(e.lowerLimit, e.upperLimit, o.value)), l.value = s, t(s !== "none" ? "opened" : "closed"));
    };
    X(() => {
      e.disabled && (l.value = "none");
    });
    const _ = (s, V) => {
      o.value = V, s === "year" ? t("decadePageChanged", V) : s === "month" ? t("yearPageChanged", V) : s === "day" && t("monthPageChanged", V);
    }, d = (s) => {
      o.value = s, e.minimumView === "year" ? (f("none"), t("update:modelValue", s)) : l.value = "month";
    }, b = (s) => {
      o.value = s, e.minimumView === "month" ? (f("none"), t("update:modelValue", s)) : l.value = "day";
    }, y = (s) => {
      o.value = s, e.minimumView === "day" ? (f("none"), t("update:modelValue", s)) : l.value = "time";
    }, i = (s) => {
      f("none"), t("update:modelValue", s);
    }, D = () => {
      e.clearable && (f("none"), t("update:modelValue", null), o.value = e.startingViewDate);
    }, g = () => n.value = !0, v = () => f(E.value), c = () => {
      n.value = !1, f();
    }, k = (s) => {
      const V = s.keyCode ? s.keyCode : s.which;
      if ([
        27,
        // escape
        13
        // enter
      ].includes(V) && p.value.blur(), e.typeable) {
        const Q = oe(
          p.value.value,
          e.inputFormat,
          /* @__PURE__ */ new Date(),
          { locale: e.locale }
        );
        w(Q) && a.value === z(Q, e.inputFormat, { locale: e.locale }) && (a.value = p.value.value, t("update:modelValue", Q));
      }
    }, E = u(() => {
      const s = W.indexOf(e.startingView), V = W.indexOf(e.minimumView);
      return s < V ? e.minimumView : e.startingView;
    });
    return {
      blur: c,
      focus: v,
      click: g,
      input: a,
      inputRef: p,
      pageDate: o,
      renderView: f,
      updatePageDate: _,
      selectYear: d,
      selectMonth: b,
      selectDay: y,
      selectTime: i,
      keyUp: k,
      viewShown: l,
      goBackFromTimepicker: () => e.startingView === "time" && e.minimumView === "time" ? null : l.value = "day",
      clearModelValue: D,
      initialView: E,
      log: (s) => console.log(s),
      variables: (s) => Object.fromEntries(
        Object.entries(s ?? {}).filter(([V, fe]) => V.startsWith("--"))
      )
    };
  }
});
const yt = { class: "v3dp__input_wrapper" }, bt = ["readonly", "placeholder", "disabled", "tabindex"], ht = { class: "v3dp__clearable" };
function Dt(e, t, r, l, o, p) {
  const n = q("year-picker"), a = q("month-picker"), f = q("day-picker"), _ = q("time-picker");
  return h(), S("div", {
    class: "v3dp__datepicker",
    style: re(e.variables(e.$attrs.style))
  }, [
    m("div", yt, [
      P(m("input", he({
        type: "text",
        ref: "inputRef",
        readonly: !e.typeable,
        "onUpdate:modelValue": t[0] || (t[0] = (d) => e.input = d)
      }, e.$attrs, {
        placeholder: e.placeholder,
        disabled: e.disabled,
        tabindex: e.disabled ? -1 : 0,
        onKeyup: t[1] || (t[1] = (...d) => e.keyUp && e.keyUp(...d)),
        onBlur: t[2] || (t[2] = (...d) => e.blur && e.blur(...d)),
        onFocus: t[3] || (t[3] = (...d) => e.focus && e.focus(...d)),
        onClick: t[4] || (t[4] = (...d) => e.click && e.click(...d))
      }), null, 16, bt), [
        [De, e.input]
      ]),
      P(m("div", ht, [
        F(e.$slots, "clear", { onClear: e.clearModelValue }, () => [
          m("i", {
            onClick: t[5] || (t[5] = (d) => e.clearModelValue())
          }, "x")
        ])
      ], 512), [
        [I, e.clearable && e.modelValue]
      ])
    ]),
    P(A(n, {
      pageDate: e.pageDate,
      "onUpdate:pageDate": t[6] || (t[6] = (d) => e.updatePageDate("year", d)),
      selected: e.modelValue,
      lowerLimit: e.lowerLimit,
      upperLimit: e.upperLimit,
      onSelect: e.selectYear
    }, null, 8, ["pageDate", "selected", "lowerLimit", "upperLimit", "onSelect"]), [
      [I, e.viewShown === "year"]
    ]),
    P(A(a, {
      pageDate: e.pageDate,
      "onUpdate:pageDate": t[7] || (t[7] = (d) => e.updatePageDate("month", d)),
      selected: e.modelValue,
      onSelect: e.selectMonth,
      lowerLimit: e.lowerLimit,
      upperLimit: e.upperLimit,
      format: e.monthListFormat,
      locale: e.locale,
      onBack: t[8] || (t[8] = (d) => e.viewShown = "year")
    }, null, 8, ["pageDate", "selected", "onSelect", "lowerLimit", "upperLimit", "format", "locale"]), [
      [I, e.viewShown === "month"]
    ]),
    P(A(f, {
      pageDate: e.pageDate,
      "onUpdate:pageDate": t[9] || (t[9] = (d) => e.updatePageDate("day", d)),
      selected: e.modelValue,
      weekStartsOn: e.weekStartsOn,
      lowerLimit: e.lowerLimit,
      upperLimit: e.upperLimit,
      headingFormat: e.dayPickerHeadingFormat,
      disabledDates: e.disabledDates,
      locale: e.locale,
      weekdayFormat: e.weekdayFormat,
      "allow-outside-interval": e.allowOutsideInterval,
      format: e.dayFormat,
      onSelect: e.selectDay,
      onBack: t[10] || (t[10] = (d) => e.viewShown = "month")
    }, null, 8, ["pageDate", "selected", "weekStartsOn", "lowerLimit", "upperLimit", "headingFormat", "disabledDates", "locale", "weekdayFormat", "allow-outside-interval", "format", "onSelect"]), [
      [I, e.viewShown === "day"]
    ]),
    P(A(_, {
      pageDate: e.pageDate,
      visible: e.viewShown === "time",
      selected: e.modelValue,
      disabledTime: e.disabledTime,
      onSelect: e.selectTime,
      onBack: e.goBackFromTimepicker
    }, null, 8, ["pageDate", "visible", "selected", "disabledTime", "onSelect", "onBack"]), [
      [I, e.viewShown === "time"]
    ])
  ], 4);
}
const Lt = /* @__PURE__ */ T(vt, [["render", Dt]]);
export {
  Lt as default
};
