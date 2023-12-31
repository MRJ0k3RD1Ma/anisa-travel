﻿
//# sourceMappingURL=bootstrap.bundle.min.js.map
const $ = e => document.querySelector(e), countdown = function (e) {
    let t = $(e.target).getAttribute("data-date").split("-"), r = parseInt(t[0]), n = parseInt(t[1]),
        o = parseInt(t[2]), a = $(e.target).getAttribute("data-time"), d, i;
    null != a && (d = parseInt((a = a.split(":"))[0]), i = parseInt(a[1])), new Date().getFullYear();
    let g = new Date;
    g.getDate(), g.getMonth(), g.getFullYear(), g.getHours(), g.getMinutes();
    let l = new Date(o, n - 1, r, d, i, 0, 0).getTime();
    $(e.target + " .day .word").innerHTML = e.dayWord, $(e.target + " .hour .word").innerHTML = e.hourWord, $(e.target + " .min .word").innerHTML = e.minWord, $(e.target + " .sec .word").innerHTML = e.secWord;
    let u = () => {
        let t = new Date().getTime(), r = l - t;
        requestAnimationFrame(u), $(e.target + " .day .num").innerHTML = addZero(Math.floor(r / 864e5)), $(e.target + " .hour .num").innerHTML = addZero(Math.floor(r % 864e5 / 36e5)), $(e.target + " .min .num").innerHTML = addZero(Math.floor(r % 36e5 / 6e4)), $(e.target + " .sec .num").innerHTML = addZero(Math.floor(r % 6e4 / 1e3)), r < 0 && ($(".countdown").innerHTML = "")
    };
    u()
}, addZero = e => e < 10 && e >= 0 ? "0" + e : e;

function dselectUpdate(e, t, l) {
    let n = e.dataset.dselectValue, s = e.closest(`.${t}`).previousElementSibling,
        i = s.nextElementSibling.getElementsByClassName(l)[0], o = s.nextElementSibling.querySelector("input");
    s.multiple ? Array.from(s.options).filter(e => e.value === n)[0].selected = !0 : s.value = n, s.multiple && i.click(), s.dispatchEvent(new Event("change")), i.focus(), o && (o.value = "")
}

function dselectRemoveTag(e, t, l) {
    let n = e.parentNode.dataset.dselectValue, s = e.closest(`.${t}`).previousElementSibling,
        i = s.nextElementSibling.getElementsByClassName(l)[0], o = s.nextElementSibling.querySelector("input");
    Array.from(s.options).filter(e => e.value === n)[0].selected = !1, s.dispatchEvent(new Event("change")), i.click(), o && (o.value = "")
}

function dselectSearch(e, t, l, n, s) {
    let i = t.value.toLowerCase().trim(), o = t.nextElementSibling, a = o.querySelectorAll(".dropdown-header"),
        c = o.querySelectorAll(".dropdown-item"), r = o.nextElementSibling;
    for (let d of (a.forEach(e => e.classList.add("d-none")), c)) if (d.textContent.toLowerCase().indexOf(i) > -1) {
        d.classList.remove("d-none");
        let u = d;
        for (; u = u.previousElementSibling;) if (u.classList.contains("dropdown-header")) {
            u.classList.remove("d-none");
            break
        }
    } else d.classList.add("d-none");
    if (Array.from(c).filter(e => !e.classList.contains("d-none") && !e.hasAttribute("hidden")).length < 1) {
        if (r.classList.remove("d-none"), o.classList.add("d-none"), s && (r.innerHTML = `Press Enter to add "<strong>${t.value}</strong>"`, "Enter" === e.key)) {
            let p = t.closest(`.${l}`).previousElementSibling, m = p.nextElementSibling.getElementsByClassName(n)[0];
            p.insertAdjacentHTML("afterbegin", `<option value="${t.value}" selected>${t.value}</option>`), p.dispatchEvent(new Event("change")), t.value = "", t.dispatchEvent(new Event("keyup")), m.click(), m.focus()
        }
    } else r.classList.add("d-none"), o.classList.remove("d-none")
}

function dselectClear(e, t) {
    let l = e.closest(`.${t}`).previousElementSibling;
    Array.from(l.options).forEach(e => e.selected = !1), l.dispatchEvent(new Event("change"))
}

function dselect(e, t = {}) {
    e.style.display = "none";
    let l = "dselect-wrapper", n = "dselect-placeholder", s = "", i = p("search") || t.search || !1,
        o = p("creatable") || t.creatable || !1, a = p("clearable") || t.clearable || !1,
        c = e.dataset.dselectMaxHeight || t.maxHeight || "360px", r = e.dataset.dselectSize || t.size || s;
    r = "" !== r ? ` form-select-${r}` : "";
    let d = `form-select${r}`,
        u = i ? `<input onkeydown="return event.key !== 'Enter'" onkeyup="dselectSearch(event, this, '${l}', '${d}', ${o})" type="text" class="form-control" placeholder="Search" autofocus>` : "";

    function p(t) {
        let l = `data-dselect-${t}`;
        return e.hasAttribute(l) ? "true" === e.getAttribute(l).toLowerCase() : null
    }

    function m(e) {
        return "" === e.getAttribute("value")
    }

    function f(e, t) {
        if (t) {
            let s = Array.from(e).filter(e => e.selected && !m(e)), i = Array.from(e).filter(e => m(e)), o = [];
            if (0 === s.length) {
                let a = i.length ? i[0].textContent : "&nbsp;";
                o.push(`<span class="${n}">${a}</span>`)
            } else for (let c of s) o.push(`
            <div class="dselect-tag" data-dselect-value="${c.value}">
              ${c.text}
              <svg onclick="dselectRemoveTag(this, '${l}', '${d}')" class="dselect-tag-remove" width="14" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>
            </div>
          `);
            return o.join("")
        }
        {
            let r = e[e.selectedIndex];
            return m(r) ? `<span class="${n}">${r.innerHTML}</span>` : r.innerHTML
        }
    }

    function v(e) {
        let t = e[e.selectedIndex];
        return m(t) ? "" : t.textContent
    }

    function h(t) {
        let n = [];
        for (let s of t) if ("OPTGROUP" === s.tagName) n.push(`<h6 class="dropdown-header">${s.getAttribute("label")}</h6>`); else {
            let i = m(s) ? " hidden" : "", o = s.selected ? " active" : "",
                a = e.multiple && s.selected ? " disabled" : "", c = s.value, r = s.textContent;
            n.push(`<button${i} class="dropdown-item${o}" data-dselect-value="${c}" type="button" onclick="dselectUpdate(this, '${l}', '${d}')"${a}>${r}</button>`)
        }
        return n.join("")
    }

    !function t() {
        let n = e.multiple ? ' data-bs-auto-close="outside"' : "",
            s = Array.from(e.classList).filter(e => "form-select" !== e && "form-select-sm" !== e && "form-select-lg" !== e).join(" "),
            i = a && !e.multiple ? `
    <button type="button" class="btn dselect-clear" title="Clear selection" onclick="dselectClear(this, '${l}')">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" fill="none">
        <path d="M13 1L0.999999 13" stroke-width="2" stroke="currentColor"></path>
        <path d="M1 1L13 13" stroke-width="2" stroke="currentColor"></path>
      </svg>
    </button>
    ` : "", o = `
    <div class="dropdown ${l} ${s}">
      <button class="${d} ${!e.multiple && a ? "dselect-clearable" : ""}" data-dselect-text="${!e.multiple && v(e.options)}" type="button" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false"${n}>
        ${f(e.options, e.multiple)}
      </button>
      <div class="dropdown-menu">
        <div class="d-flex flex-column">
          ${u}
          <div class="dselect-items" style="max-height:${c};overflow:auto">
            ${h(e.querySelectorAll("*"))}
          </div>
          <div class="dselect-no-results d-none">No results found</div>
        </div>
      </div>
      ${i}
    </div>
    `;
        e.nextElementSibling && e.nextElementSibling.classList && e.nextElementSibling.classList.contains(l) && e.nextElementSibling.remove(), e.insertAdjacentHTML("afterend", o)
    }(), e.addEventListener("change", function t() {
        let l = e.nextElementSibling, n = l.getElementsByClassName(d)[0],
            s = l.getElementsByClassName("dselect-items")[0];
        n.innerHTML = f(e.options, e.multiple), s.innerHTML = h(e.querySelectorAll("*")), e.multiple || (n.dataset.dselectText = v(e.options))
    })
}

/* flatpickr v4.6.13,, @license MIT */
!function (e, n) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (e = "undefined" != typeof globalThis ? globalThis : e || self).flatpickr = n()
}(this, (function () {
    "use strict";
    var e = function () {
        return (e = Object.assign || function (e) {
            for (var n, t = 1, a = arguments.length; t < a; t++) for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            return e
        }).apply(this, arguments)
    };

    function n() {
        for (var e = 0, n = 0, t = arguments.length; n < t; n++) e += arguments[n].length;
        var a = Array(e), i = 0;
        for (n = 0; n < t; n++) for (var o = arguments[n], r = 0, l = o.length; r < l; r++, i++) a[i] = o[r];
        return a
    }

    var t = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"],
        a = {
            _disable: [],
            allowInput: !1,
            allowInvalidPreload: !1,
            altFormat: "F j, Y",
            altInput: !1,
            altInputClass: "form-control input",
            animate: "object" == typeof window && -1 === window.navigator.userAgent.indexOf("MSIE"),
            ariaDateFormat: "F j, Y",
            autoFillDefaultTime: !0,
            clickOpens: !0,
            closeOnSelect: !0,
            conjunction: ", ",
            dateFormat: "Y-m-d",
            defaultHour: 12,
            defaultMinute: 0,
            defaultSeconds: 0,
            disable: [],
            disableMobile: !1,
            enableSeconds: !1,
            enableTime: !1,
            errorHandler: function (e) {
                return "undefined" != typeof console && console.warn(e)
            },
            getWeek: function (e) {
                var n = new Date(e.getTime());
                n.setHours(0, 0, 0, 0), n.setDate(n.getDate() + 3 - (n.getDay() + 6) % 7);
                var t = new Date(n.getFullYear(), 0, 4);
                return 1 + Math.round(((n.getTime() - t.getTime()) / 864e5 - 3 + (t.getDay() + 6) % 7) / 7)
            },
            hourIncrement: 1,
            ignoredFocusElements: [],
            inline: !1,
            locale: "default",
            minuteIncrement: 5,
            mode: "single",
            monthSelectorType: "dropdown",
            nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
            noCalendar: !1,
            now: new Date,
            onChange: [],
            onClose: [],
            onDayCreate: [],
            onDestroy: [],
            onKeyDown: [],
            onMonthChange: [],
            onOpen: [],
            onParseConfig: [],
            onReady: [],
            onValueUpdate: [],
            onYearChange: [],
            onPreCalendarPosition: [],
            plugins: [],
            position: "auto",
            positionElement: void 0,
            prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
            shorthandCurrentMonth: !1,
            showMonths: 1,
            static: !1,
            time_24hr: !1,
            weekNumbers: !1,
            wrap: !1
        }, i = {
            weekdays: {
                shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            },
            months: {
                shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            },
            daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            firstDayOfWeek: 0,
            ordinal: function (e) {
                var n = e % 100;
                if (n > 3 && n < 21) return "th";
                switch (n % 10) {
                    case 1:
                        return "st";
                    case 2:
                        return "nd";
                    case 3:
                        return "rd";
                    default:
                        return "th"
                }
            },
            rangeSeparator: " to ",
            weekAbbreviation: "Wk",
            scrollTitle: "Scroll to increment",
            toggleTitle: "Click to toggle",
            amPM: ["AM", "PM"],
            yearAriaLabel: "Year",
            monthAriaLabel: "Month",
            hourAriaLabel: "Hour",
            minuteAriaLabel: "Minute",
            time_24hr: !1
        }, o = function (e, n) {
            return void 0 === n && (n = 2), ("000" + e).slice(-1 * n)
        }, r = function (e) {
            return !0 === e ? 1 : 0
        };

    function l(e, n) {
        var t;
        return function () {
            var a = this, i = arguments;
            clearTimeout(t), t = setTimeout((function () {
                return e.apply(a, i)
            }), n)
        }
    }

    var c = function (e) {
        return e instanceof Array ? e : [e]
    };

    function s(e, n, t) {
        if (!0 === t) return e.classList.add(n);
        e.classList.remove(n)
    }

    function d(e, n, t) {
        var a = window.document.createElement(e);
        return n = n || "", t = t || "", a.className = n, void 0 !== t && (a.textContent = t), a
    }

    function u(e) {
        for (; e.firstChild;) e.removeChild(e.firstChild)
    }

    function f(e, n) {
        return n(e) ? e : e.parentNode ? f(e.parentNode, n) : void 0
    }

    function m(e, n) {
        var t = d("div", "numInputWrapper"), a = d("input", "numInput " + e), i = d("span", "arrowUp"),
            o = d("span", "arrowDown");
        if (-1 === navigator.userAgent.indexOf("MSIE 9.0") ? a.type = "number" : (a.type = "text", a.pattern = "\\d*"), void 0 !== n) for (var r in n) a.setAttribute(r, n[r]);
        return t.appendChild(a), t.appendChild(i), t.appendChild(o), t
    }

    function g(e) {
        try {
            return "function" == typeof e.composedPath ? e.composedPath()[0] : e.target
        } catch (n) {
            return e.target
        }
    }

    var p = function () {
    }, h = function (e, n, t) {
        return t.months[n ? "shorthand" : "longhand"][e]
    }, v = {
        D: p, F: function (e, n, t) {
            e.setMonth(t.months.longhand.indexOf(n))
        }, G: function (e, n) {
            e.setHours((e.getHours() >= 12 ? 12 : 0) + parseFloat(n))
        }, H: function (e, n) {
            e.setHours(parseFloat(n))
        }, J: function (e, n) {
            e.setDate(parseFloat(n))
        }, K: function (e, n, t) {
            e.setHours(e.getHours() % 12 + 12 * r(new RegExp(t.amPM[1], "i").test(n)))
        }, M: function (e, n, t) {
            e.setMonth(t.months.shorthand.indexOf(n))
        }, S: function (e, n) {
            e.setSeconds(parseFloat(n))
        }, U: function (e, n) {
            return new Date(1e3 * parseFloat(n))
        }, W: function (e, n, t) {
            var a = parseInt(n), i = new Date(e.getFullYear(), 0, 2 + 7 * (a - 1), 0, 0, 0, 0);
            return i.setDate(i.getDate() - i.getDay() + t.firstDayOfWeek), i
        }, Y: function (e, n) {
            e.setFullYear(parseFloat(n))
        }, Z: function (e, n) {
            return new Date(n)
        }, d: function (e, n) {
            e.setDate(parseFloat(n))
        }, h: function (e, n) {
            e.setHours((e.getHours() >= 12 ? 12 : 0) + parseFloat(n))
        }, i: function (e, n) {
            e.setMinutes(parseFloat(n))
        }, j: function (e, n) {
            e.setDate(parseFloat(n))
        }, l: p, m: function (e, n) {
            e.setMonth(parseFloat(n) - 1)
        }, n: function (e, n) {
            e.setMonth(parseFloat(n) - 1)
        }, s: function (e, n) {
            e.setSeconds(parseFloat(n))
        }, u: function (e, n) {
            return new Date(parseFloat(n))
        }, w: p, y: function (e, n) {
            e.setFullYear(2e3 + parseFloat(n))
        }
    }, D = {
        D: "",
        F: "",
        G: "(\\d\\d|\\d)",
        H: "(\\d\\d|\\d)",
        J: "(\\d\\d|\\d)\\w+",
        K: "",
        M: "",
        S: "(\\d\\d|\\d)",
        U: "(.+)",
        W: "(\\d\\d|\\d)",
        Y: "(\\d{4})",
        Z: "(.+)",
        d: "(\\d\\d|\\d)",
        h: "(\\d\\d|\\d)",
        i: "(\\d\\d|\\d)",
        j: "(\\d\\d|\\d)",
        l: "",
        m: "(\\d\\d|\\d)",
        n: "(\\d\\d|\\d)",
        s: "(\\d\\d|\\d)",
        u: "(.+)",
        w: "(\\d\\d|\\d)",
        y: "(\\d{2})"
    }, w = {
        Z: function (e) {
            return e.toISOString()
        }, D: function (e, n, t) {
            return n.weekdays.shorthand[w.w(e, n, t)]
        }, F: function (e, n, t) {
            return h(w.n(e, n, t) - 1, !1, n)
        }, G: function (e, n, t) {
            return o(w.h(e, n, t))
        }, H: function (e) {
            return o(e.getHours())
        }, J: function (e, n) {
            return void 0 !== n.ordinal ? e.getDate() + n.ordinal(e.getDate()) : e.getDate()
        }, K: function (e, n) {
            return n.amPM[r(e.getHours() > 11)]
        }, M: function (e, n) {
            return h(e.getMonth(), !0, n)
        }, S: function (e) {
            return o(e.getSeconds())
        }, U: function (e) {
            return e.getTime() / 1e3
        }, W: function (e, n, t) {
            return t.getWeek(e)
        }, Y: function (e) {
            return o(e.getFullYear(), 4)
        }, d: function (e) {
            return o(e.getDate())
        }, h: function (e) {
            return e.getHours() % 12 ? e.getHours() % 12 : 12
        }, i: function (e) {
            return o(e.getMinutes())
        }, j: function (e) {
            return e.getDate()
        }, l: function (e, n) {
            return n.weekdays.longhand[e.getDay()]
        }, m: function (e) {
            return o(e.getMonth() + 1)
        }, n: function (e) {
            return e.getMonth() + 1
        }, s: function (e) {
            return e.getSeconds()
        }, u: function (e) {
            return e.getTime()
        }, w: function (e) {
            return e.getDay()
        }, y: function (e) {
            return String(e.getFullYear()).substring(2)
        }
    }, b = function (e) {
        var n = e.config, t = void 0 === n ? a : n, o = e.l10n, r = void 0 === o ? i : o, l = e.isMobile,
            c = void 0 !== l && l;
        return function (e, n, a) {
            var i = a || r;
            return void 0 === t.formatDate || c ? n.split("").map((function (n, a, o) {
                return w[n] && "\\" !== o[a - 1] ? w[n](e, i, t) : "\\" !== n ? n : ""
            })).join("") : t.formatDate(e, n, i)
        }
    }, C = function (e) {
        var n = e.config, t = void 0 === n ? a : n, o = e.l10n, r = void 0 === o ? i : o;
        return function (e, n, i, o) {
            if (0 === e || e) {
                var l, c = o || r, s = e;
                if (e instanceof Date) l = new Date(e.getTime()); else if ("string" != typeof e && void 0 !== e.toFixed) l = new Date(e); else if ("string" == typeof e) {
                    var d = n || (t || a).dateFormat, u = String(e).trim();
                    if ("today" === u) l = new Date, i = !0; else if (t && t.parseDate) l = t.parseDate(e, d); else if (/Z$/.test(u) || /GMT$/.test(u)) l = new Date(e); else {
                        for (var f = void 0, m = [], g = 0, p = 0, h = ""; g < d.length; g++) {
                            var w = d[g], b = "\\" === w, C = "\\" === d[g - 1] || b;
                            if (D[w] && !C) {
                                h += D[w];
                                var M = new RegExp(h).exec(e);
                                M && (f = !0) && m["Y" !== w ? "push" : "unshift"]({fn: v[w], val: M[++p]})
                            } else b || (h += ".")
                        }
                        l = t && t.noCalendar ? new Date((new Date).setHours(0, 0, 0, 0)) : new Date((new Date).getFullYear(), 0, 1, 0, 0, 0, 0), m.forEach((function (e) {
                            var n = e.fn, t = e.val;
                            return l = n(l, t, c) || l
                        })), l = f ? l : void 0
                    }
                }
                if (l instanceof Date && !isNaN(l.getTime())) return !0 === i && l.setHours(0, 0, 0, 0), l;
                t.errorHandler(new Error("Invalid date provided: " + s))
            }
        }
    };

    function M(e, n, t) {
        return void 0 === t && (t = !0), !1 !== t ? new Date(e.getTime()).setHours(0, 0, 0, 0) - new Date(n.getTime()).setHours(0, 0, 0, 0) : e.getTime() - n.getTime()
    }

    var y = function (e, n, t) {
        return 3600 * e + 60 * n + t
    }, x = 864e5;

    function E(e) {
        var n = e.defaultHour, t = e.defaultMinute, a = e.defaultSeconds;
        if (void 0 !== e.minDate) {
            var i = e.minDate.getHours(), o = e.minDate.getMinutes(), r = e.minDate.getSeconds();
            n < i && (n = i), n === i && t < o && (t = o), n === i && t === o && a < r && (a = e.minDate.getSeconds())
        }
        if (void 0 !== e.maxDate) {
            var l = e.maxDate.getHours(), c = e.maxDate.getMinutes();
            (n = Math.min(n, l)) === l && (t = Math.min(c, t)), n === l && t === c && (a = e.maxDate.getSeconds())
        }
        return {hours: n, minutes: t, seconds: a}
    }

    "function" != typeof Object.assign && (Object.assign = function (e) {
        for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
        if (!e) throw TypeError("Cannot convert undefined or null to object");
        for (var a = function (n) {
            n && Object.keys(n).forEach((function (t) {
                return e[t] = n[t]
            }))
        }, i = 0, o = n; i < o.length; i++) {
            var r = o[i];
            a(r)
        }
        return e
    });

    function k(p, v) {
        var w = {config: e(e({}, a), I.defaultConfig), l10n: i};

        function k() {
            var e;
            return (null === (e = w.calendarContainer) || void 0 === e ? void 0 : e.getRootNode()).activeElement || document.activeElement
        }

        function T(e) {
            return e.bind(w)
        }

        function S() {
            var e = w.config;
            !1 === e.weekNumbers && 1 === e.showMonths || !0 !== e.noCalendar && window.requestAnimationFrame((function () {
                if (void 0 !== w.calendarContainer && (w.calendarContainer.style.visibility = "hidden", w.calendarContainer.style.display = "block"), void 0 !== w.daysContainer) {
                    var n = (w.days.offsetWidth + 1) * e.showMonths;
                    w.daysContainer.style.width = n + "px", w.calendarContainer.style.width = n + (void 0 !== w.weekWrapper ? w.weekWrapper.offsetWidth : 0) + "px", w.calendarContainer.style.removeProperty("visibility"), w.calendarContainer.style.removeProperty("display")
                }
            }))
        }

        function _(e) {
            if (0 === w.selectedDates.length) {
                var n = void 0 === w.config.minDate || M(new Date, w.config.minDate) >= 0 ? new Date : new Date(w.config.minDate.getTime()),
                    t = E(w.config);
                n.setHours(t.hours, t.minutes, t.seconds, n.getMilliseconds()), w.selectedDates = [n], w.latestSelectedDateObj = n
            }
            void 0 !== e && "blur" !== e.type && function (e) {
                e.preventDefault();
                var n = "keydown" === e.type, t = g(e), a = t;
                void 0 !== w.amPM && t === w.amPM && (w.amPM.textContent = w.l10n.amPM[r(w.amPM.textContent === w.l10n.amPM[0])]);
                var i = parseFloat(a.getAttribute("min")), l = parseFloat(a.getAttribute("max")),
                    c = parseFloat(a.getAttribute("step")), s = parseInt(a.value, 10),
                    d = e.delta || (n ? 38 === e.which ? 1 : -1 : 0), u = s + c * d;
                if (void 0 !== a.value && 2 === a.value.length) {
                    var f = a === w.hourElement, m = a === w.minuteElement;
                    u < i ? (u = l + u + r(!f) + (r(f) && r(!w.amPM)), m && L(void 0, -1, w.hourElement)) : u > l && (u = a === w.hourElement ? u - l - r(!w.amPM) : i, m && L(void 0, 1, w.hourElement)), w.amPM && f && (1 === c ? u + s === 23 : Math.abs(u - s) > c) && (w.amPM.textContent = w.l10n.amPM[r(w.amPM.textContent === w.l10n.amPM[0])]), a.value = o(u)
                }
            }(e);
            var a = w._input.value;
            O(), ye(), w._input.value !== a && w._debouncedChange()
        }

        function O() {
            if (void 0 !== w.hourElement && void 0 !== w.minuteElement) {
                var e, n, t = (parseInt(w.hourElement.value.slice(-2), 10) || 0) % 24,
                    a = (parseInt(w.minuteElement.value, 10) || 0) % 60,
                    i = void 0 !== w.secondElement ? (parseInt(w.secondElement.value, 10) || 0) % 60 : 0;
                void 0 !== w.amPM && (e = t, n = w.amPM.textContent, t = e % 12 + 12 * r(n === w.l10n.amPM[1]));
                var o = void 0 !== w.config.minTime || w.config.minDate && w.minDateHasTime && w.latestSelectedDateObj && 0 === M(w.latestSelectedDateObj, w.config.minDate, !0),
                    l = void 0 !== w.config.maxTime || w.config.maxDate && w.maxDateHasTime && w.latestSelectedDateObj && 0 === M(w.latestSelectedDateObj, w.config.maxDate, !0);
                if (void 0 !== w.config.maxTime && void 0 !== w.config.minTime && w.config.minTime > w.config.maxTime) {
                    var c = y(w.config.minTime.getHours(), w.config.minTime.getMinutes(), w.config.minTime.getSeconds()),
                        s = y(w.config.maxTime.getHours(), w.config.maxTime.getMinutes(), w.config.maxTime.getSeconds()),
                        d = y(t, a, i);
                    if (d > s && d < c) {
                        var u = function (e) {
                            var n = Math.floor(e / 3600), t = (e - 3600 * n) / 60;
                            return [n, t, e - 3600 * n - 60 * t]
                        }(c);
                        t = u[0], a = u[1], i = u[2]
                    }
                } else {
                    if (l) {
                        var f = void 0 !== w.config.maxTime ? w.config.maxTime : w.config.maxDate;
                        (t = Math.min(t, f.getHours())) === f.getHours() && (a = Math.min(a, f.getMinutes())), a === f.getMinutes() && (i = Math.min(i, f.getSeconds()))
                    }
                    if (o) {
                        var m = void 0 !== w.config.minTime ? w.config.minTime : w.config.minDate;
                        (t = Math.max(t, m.getHours())) === m.getHours() && a < m.getMinutes() && (a = m.getMinutes()), a === m.getMinutes() && (i = Math.max(i, m.getSeconds()))
                    }
                }
                A(t, a, i)
            }
        }

        function F(e) {
            var n = e || w.latestSelectedDateObj;
            n && n instanceof Date && A(n.getHours(), n.getMinutes(), n.getSeconds())
        }

        function A(e, n, t) {
            void 0 !== w.latestSelectedDateObj && w.latestSelectedDateObj.setHours(e % 24, n, t || 0, 0), w.hourElement && w.minuteElement && !w.isMobile && (w.hourElement.value = o(w.config.time_24hr ? e : (12 + e) % 12 + 12 * r(e % 12 == 0)), w.minuteElement.value = o(n), void 0 !== w.amPM && (w.amPM.textContent = w.l10n.amPM[r(e >= 12)]), void 0 !== w.secondElement && (w.secondElement.value = o(t)))
        }

        function N(e) {
            var n = g(e), t = parseInt(n.value) + (e.delta || 0);
            (t / 1e3 > 1 || "Enter" === e.key && !/[^\d]/.test(t.toString())) && ee(t)
        }

        function P(e, n, t, a) {
            return n instanceof Array ? n.forEach((function (n) {
                return P(e, n, t, a)
            })) : e instanceof Array ? e.forEach((function (e) {
                return P(e, n, t, a)
            })) : (e.addEventListener(n, t, a), void w._handlers.push({
                remove: function () {
                    return e.removeEventListener(n, t, a)
                }
            }))
        }

        function Y() {
            De("onChange")
        }

        function j(e, n) {
            var t = void 0 !== e ? w.parseDate(e) : w.latestSelectedDateObj || (w.config.minDate && w.config.minDate > w.now ? w.config.minDate : w.config.maxDate && w.config.maxDate < w.now ? w.config.maxDate : w.now),
                a = w.currentYear, i = w.currentMonth;
            try {
                void 0 !== t && (w.currentYear = t.getFullYear(), w.currentMonth = t.getMonth())
            } catch (e) {
                e.message = "Invalid date supplied: " + t, w.config.errorHandler(e)
            }
            n && w.currentYear !== a && (De("onYearChange"), q()), !n || w.currentYear === a && w.currentMonth === i || De("onMonthChange"), w.redraw()
        }

        function H(e) {
            var n = g(e);
            ~n.className.indexOf("arrow") && L(e, n.classList.contains("arrowUp") ? 1 : -1)
        }

        function L(e, n, t) {
            var a = e && g(e), i = t || a && a.parentNode && a.parentNode.firstChild, o = we("increment");
            o.delta = n, i && i.dispatchEvent(o)
        }

        function R(e, n, t, a) {
            var i = ne(n, !0), o = d("span", e, n.getDate().toString());
            return o.dateObj = n, o.$i = a, o.setAttribute("aria-label", w.formatDate(n, w.config.ariaDateFormat)), -1 === e.indexOf("hidden") && 0 === M(n, w.now) && (w.todayDateElem = o, o.classList.add("today"), o.setAttribute("aria-current", "date")), i ? (o.tabIndex = -1, be(n) && (o.classList.add("selected"), w.selectedDateElem = o, "range" === w.config.mode && (s(o, "startRange", w.selectedDates[0] && 0 === M(n, w.selectedDates[0], !0)), s(o, "endRange", w.selectedDates[1] && 0 === M(n, w.selectedDates[1], !0)), "nextMonthDay" === e && o.classList.add("inRange")))) : o.classList.add("flatpickr-disabled"), "range" === w.config.mode && function (e) {
                return !("range" !== w.config.mode || w.selectedDates.length < 2) && (M(e, w.selectedDates[0]) >= 0 && M(e, w.selectedDates[1]) <= 0)
            }(n) && !be(n) && o.classList.add("inRange"), w.weekNumbers && 1 === w.config.showMonths && "prevMonthDay" !== e && a % 7 == 6 && w.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + w.config.getWeek(n) + "</span>"), De("onDayCreate", o), o
        }

        function W(e) {
            e.focus(), "range" === w.config.mode && oe(e)
        }

        function B(e) {
            for (var n = e > 0 ? 0 : w.config.showMonths - 1, t = e > 0 ? w.config.showMonths : -1, a = n; a != t; a += e) for (var i = w.daysContainer.children[a], o = e > 0 ? 0 : i.children.length - 1, r = e > 0 ? i.children.length : -1, l = o; l != r; l += e) {
                var c = i.children[l];
                if (-1 === c.className.indexOf("hidden") && ne(c.dateObj)) return c
            }
        }

        function J(e, n) {
            var t = k(), a = te(t || document.body),
                i = void 0 !== e ? e : a ? t : void 0 !== w.selectedDateElem && te(w.selectedDateElem) ? w.selectedDateElem : void 0 !== w.todayDateElem && te(w.todayDateElem) ? w.todayDateElem : B(n > 0 ? 1 : -1);
            void 0 === i ? w._input.focus() : a ? function (e, n) {
                for (var t = -1 === e.className.indexOf("Month") ? e.dateObj.getMonth() : w.currentMonth, a = n > 0 ? w.config.showMonths : -1, i = n > 0 ? 1 : -1, o = t - w.currentMonth; o != a; o += i) for (var r = w.daysContainer.children[o], l = t - w.currentMonth === o ? e.$i + n : n < 0 ? r.children.length - 1 : 0, c = r.children.length, s = l; s >= 0 && s < c && s != (n > 0 ? c : -1); s += i) {
                    var d = r.children[s];
                    if (-1 === d.className.indexOf("hidden") && ne(d.dateObj) && Math.abs(e.$i - s) >= Math.abs(n)) return W(d)
                }
                w.changeMonth(i), J(B(i), 0)
            }(i, n) : W(i)
        }

        function K(e, n) {
            for (var t = (new Date(e, n, 1).getDay() - w.l10n.firstDayOfWeek + 7) % 7, a = w.utils.getDaysInMonth((n - 1 + 12) % 12, e), i = w.utils.getDaysInMonth(n, e), o = window.document.createDocumentFragment(), r = w.config.showMonths > 1, l = r ? "prevMonthDay hidden" : "prevMonthDay", c = r ? "nextMonthDay hidden" : "nextMonthDay", s = a + 1 - t, u = 0; s <= a; s++, u++) o.appendChild(R("flatpickr-day " + l, new Date(e, n - 1, s), 0, u));
            for (s = 1; s <= i; s++, u++) o.appendChild(R("flatpickr-day", new Date(e, n, s), 0, u));
            for (var f = i + 1; f <= 42 - t && (1 === w.config.showMonths || u % 7 != 0); f++, u++) o.appendChild(R("flatpickr-day " + c, new Date(e, n + 1, f % i), 0, u));
            var m = d("div", "dayContainer");
            return m.appendChild(o), m
        }

        function U() {
            if (void 0 !== w.daysContainer) {
                u(w.daysContainer), w.weekNumbers && u(w.weekNumbers);
                for (var e = document.createDocumentFragment(), n = 0; n < w.config.showMonths; n++) {
                    var t = new Date(w.currentYear, w.currentMonth, 1);
                    t.setMonth(w.currentMonth + n), e.appendChild(K(t.getFullYear(), t.getMonth()))
                }
                w.daysContainer.appendChild(e), w.days = w.daysContainer.firstChild, "range" === w.config.mode && 1 === w.selectedDates.length && oe()
            }
        }

        function q() {
            if (!(w.config.showMonths > 1 || "dropdown" !== w.config.monthSelectorType)) {
                var e = function (e) {
                    return !(void 0 !== w.config.minDate && w.currentYear === w.config.minDate.getFullYear() && e < w.config.minDate.getMonth()) && !(void 0 !== w.config.maxDate && w.currentYear === w.config.maxDate.getFullYear() && e > w.config.maxDate.getMonth())
                };
                w.monthsDropdownContainer.tabIndex = -1, w.monthsDropdownContainer.innerHTML = "";
                for (var n = 0; n < 12; n++) if (e(n)) {
                    var t = d("option", "flatpickr-monthDropdown-month");
                    t.value = new Date(w.currentYear, n).getMonth().toString(), t.textContent = h(n, w.config.shorthandCurrentMonth, w.l10n), t.tabIndex = -1, w.currentMonth === n && (t.selected = !0), w.monthsDropdownContainer.appendChild(t)
                }
            }
        }

        function $() {
            var e, n = d("div", "flatpickr-month"), t = window.document.createDocumentFragment();
            w.config.showMonths > 1 || "static" === w.config.monthSelectorType ? e = d("span", "cur-month") : (w.monthsDropdownContainer = d("select", "flatpickr-monthDropdown-months"), w.monthsDropdownContainer.setAttribute("aria-label", w.l10n.monthAriaLabel), P(w.monthsDropdownContainer, "change", (function (e) {
                var n = g(e), t = parseInt(n.value, 10);
                w.changeMonth(t - w.currentMonth), De("onMonthChange")
            })), q(), e = w.monthsDropdownContainer);
            var a = m("cur-year", {tabindex: "-1"}), i = a.getElementsByTagName("input")[0];
            i.setAttribute("aria-label", w.l10n.yearAriaLabel), w.config.minDate && i.setAttribute("min", w.config.minDate.getFullYear().toString()), w.config.maxDate && (i.setAttribute("max", w.config.maxDate.getFullYear().toString()), i.disabled = !!w.config.minDate && w.config.minDate.getFullYear() === w.config.maxDate.getFullYear());
            var o = d("div", "flatpickr-current-month");
            return o.appendChild(e), o.appendChild(a), t.appendChild(o), n.appendChild(t), {
                container: n,
                yearElement: i,
                monthElement: e
            }
        }

        function V() {
            u(w.monthNav), w.monthNav.appendChild(w.prevMonthNav), w.config.showMonths && (w.yearElements = [], w.monthElements = []);
            for (var e = w.config.showMonths; e--;) {
                var n = $();
                w.yearElements.push(n.yearElement), w.monthElements.push(n.monthElement), w.monthNav.appendChild(n.container)
            }
            w.monthNav.appendChild(w.nextMonthNav)
        }

        function z() {
            w.weekdayContainer ? u(w.weekdayContainer) : w.weekdayContainer = d("div", "flatpickr-weekdays");
            for (var e = w.config.showMonths; e--;) {
                var n = d("div", "flatpickr-weekdaycontainer");
                w.weekdayContainer.appendChild(n)
            }
            return G(), w.weekdayContainer
        }

        function G() {
            if (w.weekdayContainer) {
                var e = w.l10n.firstDayOfWeek, t = n(w.l10n.weekdays.shorthand);
                e > 0 && e < t.length && (t = n(t.splice(e, t.length), t.splice(0, e)));
                for (var a = w.config.showMonths; a--;) w.weekdayContainer.children[a].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + t.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      "
            }
        }

        function Z(e, n) {
            void 0 === n && (n = !0);
            var t = n ? e : e - w.currentMonth;
            t < 0 && !0 === w._hidePrevMonthArrow || t > 0 && !0 === w._hideNextMonthArrow || (w.currentMonth += t, (w.currentMonth < 0 || w.currentMonth > 11) && (w.currentYear += w.currentMonth > 11 ? 1 : -1, w.currentMonth = (w.currentMonth + 12) % 12, De("onYearChange"), q()), U(), De("onMonthChange"), Ce())
        }

        function Q(e) {
            return w.calendarContainer.contains(e)
        }

        function X(e) {
            if (w.isOpen && !w.config.inline) {
                var n = g(e), t = Q(n),
                    a = !(n === w.input || n === w.altInput || w.element.contains(n) || e.path && e.path.indexOf && (~e.path.indexOf(w.input) || ~e.path.indexOf(w.altInput))) && !t && !Q(e.relatedTarget),
                    i = !w.config.ignoredFocusElements.some((function (e) {
                        return e.contains(n)
                    }));
                a && i && (w.config.allowInput && w.setDate(w._input.value, !1, w.config.altInput ? w.config.altFormat : w.config.dateFormat), void 0 !== w.timeContainer && void 0 !== w.minuteElement && void 0 !== w.hourElement && "" !== w.input.value && void 0 !== w.input.value && _(), w.close(), w.config && "range" === w.config.mode && 1 === w.selectedDates.length && w.clear(!1))
            }
        }

        function ee(e) {
            if (!(!e || w.config.minDate && e < w.config.minDate.getFullYear() || w.config.maxDate && e > w.config.maxDate.getFullYear())) {
                var n = e, t = w.currentYear !== n;
                w.currentYear = n || w.currentYear, w.config.maxDate && w.currentYear === w.config.maxDate.getFullYear() ? w.currentMonth = Math.min(w.config.maxDate.getMonth(), w.currentMonth) : w.config.minDate && w.currentYear === w.config.minDate.getFullYear() && (w.currentMonth = Math.max(w.config.minDate.getMonth(), w.currentMonth)), t && (w.redraw(), De("onYearChange"), q())
            }
        }

        function ne(e, n) {
            var t;
            void 0 === n && (n = !0);
            var a = w.parseDate(e, void 0, n);
            if (w.config.minDate && a && M(a, w.config.minDate, void 0 !== n ? n : !w.minDateHasTime) < 0 || w.config.maxDate && a && M(a, w.config.maxDate, void 0 !== n ? n : !w.maxDateHasTime) > 0) return !1;
            if (!w.config.enable && 0 === w.config.disable.length) return !0;
            if (void 0 === a) return !1;
            for (var i = !!w.config.enable, o = null !== (t = w.config.enable) && void 0 !== t ? t : w.config.disable, r = 0, l = void 0; r < o.length; r++) {
                if ("function" == typeof (l = o[r]) && l(a)) return i;
                if (l instanceof Date && void 0 !== a && l.getTime() === a.getTime()) return i;
                if ("string" == typeof l) {
                    var c = w.parseDate(l, void 0, !0);
                    return c && c.getTime() === a.getTime() ? i : !i
                }
                if ("object" == typeof l && void 0 !== a && l.from && l.to && a.getTime() >= l.from.getTime() && a.getTime() <= l.to.getTime()) return i
            }
            return !i
        }

        function te(e) {
            return void 0 !== w.daysContainer && (-1 === e.className.indexOf("hidden") && -1 === e.className.indexOf("flatpickr-disabled") && w.daysContainer.contains(e))
        }

        function ae(e) {
            var n = e.target === w._input, t = w._input.value.trimEnd() !== Me();
            !n || !t || e.relatedTarget && Q(e.relatedTarget) || w.setDate(w._input.value, !0, e.target === w.altInput ? w.config.altFormat : w.config.dateFormat)
        }

        function ie(e) {
            var n = g(e), t = w.config.wrap ? p.contains(n) : n === w._input, a = w.config.allowInput,
                i = w.isOpen && (!a || !t), o = w.config.inline && t && !a;
            if (13 === e.keyCode && t) {
                if (a) return w.setDate(w._input.value, !0, n === w.altInput ? w.config.altFormat : w.config.dateFormat), w.close(), n.blur();
                w.open()
            } else if (Q(n) || i || o) {
                var r = !!w.timeContainer && w.timeContainer.contains(n);
                switch (e.keyCode) {
                    case 13:
                        r ? (e.preventDefault(), _(), fe()) : me(e);
                        break;
                    case 27:
                        e.preventDefault(), fe();
                        break;
                    case 8:
                    case 46:
                        t && !w.config.allowInput && (e.preventDefault(), w.clear());
                        break;
                    case 37:
                    case 39:
                        if (r || t) w.hourElement && w.hourElement.focus(); else {
                            e.preventDefault();
                            var l = k();
                            if (void 0 !== w.daysContainer && (!1 === a || l && te(l))) {
                                var c = 39 === e.keyCode ? 1 : -1;
                                e.ctrlKey ? (e.stopPropagation(), Z(c), J(B(1), 0)) : J(void 0, c)
                            }
                        }
                        break;
                    case 38:
                    case 40:
                        e.preventDefault();
                        var s = 40 === e.keyCode ? 1 : -1;
                        w.daysContainer && void 0 !== n.$i || n === w.input || n === w.altInput ? e.ctrlKey ? (e.stopPropagation(), ee(w.currentYear - s), J(B(1), 0)) : r || J(void 0, 7 * s) : n === w.currentYearElement ? ee(w.currentYear - s) : w.config.enableTime && (!r && w.hourElement && w.hourElement.focus(), _(e), w._debouncedChange());
                        break;
                    case 9:
                        if (r) {
                            var d = [w.hourElement, w.minuteElement, w.secondElement, w.amPM].concat(w.pluginElements).filter((function (e) {
                                return e
                            })), u = d.indexOf(n);
                            if (-1 !== u) {
                                var f = d[u + (e.shiftKey ? -1 : 1)];
                                e.preventDefault(), (f || w._input).focus()
                            }
                        } else !w.config.noCalendar && w.daysContainer && w.daysContainer.contains(n) && e.shiftKey && (e.preventDefault(), w._input.focus())
                }
            }
            if (void 0 !== w.amPM && n === w.amPM) switch (e.key) {
                case w.l10n.amPM[0].charAt(0):
                case w.l10n.amPM[0].charAt(0).toLowerCase():
                    w.amPM.textContent = w.l10n.amPM[0], O(), ye();
                    break;
                case w.l10n.amPM[1].charAt(0):
                case w.l10n.amPM[1].charAt(0).toLowerCase():
                    w.amPM.textContent = w.l10n.amPM[1], O(), ye()
            }
            (t || Q(n)) && De("onKeyDown", e)
        }

        function oe(e, n) {
            if (void 0 === n && (n = "flatpickr-day"), 1 === w.selectedDates.length && (!e || e.classList.contains(n) && !e.classList.contains("flatpickr-disabled"))) {
                for (var t = e ? e.dateObj.getTime() : w.days.firstElementChild.dateObj.getTime(), a = w.parseDate(w.selectedDates[0], void 0, !0).getTime(), i = Math.min(t, w.selectedDates[0].getTime()), o = Math.max(t, w.selectedDates[0].getTime()), r = !1, l = 0, c = 0, s = i; s < o; s += x) ne(new Date(s), !0) || (r = r || s > i && s < o, s < a && (!l || s > l) ? l = s : s > a && (!c || s < c) && (c = s));
                Array.from(w.rContainer.querySelectorAll("*:nth-child(-n+" + w.config.showMonths + ") > ." + n)).forEach((function (n) {
                    var i, o, s, d = n.dateObj.getTime(), u = l > 0 && d < l || c > 0 && d > c;
                    if (u) return n.classList.add("notAllowed"), void ["inRange", "startRange", "endRange"].forEach((function (e) {
                        n.classList.remove(e)
                    }));
                    r && !u || (["startRange", "inRange", "endRange", "notAllowed"].forEach((function (e) {
                        n.classList.remove(e)
                    })), void 0 !== e && (e.classList.add(t <= w.selectedDates[0].getTime() ? "startRange" : "endRange"), a < t && d === a ? n.classList.add("startRange") : a > t && d === a && n.classList.add("endRange"), d >= l && (0 === c || d <= c) && (o = a, s = t, (i = d) > Math.min(o, s) && i < Math.max(o, s)) && n.classList.add("inRange")))
                }))
            }
        }

        function re() {
            !w.isOpen || w.config.static || w.config.inline || de()
        }

        function le(e) {
            return function (n) {
                var t = w.config["_" + e + "Date"] = w.parseDate(n, w.config.dateFormat),
                    a = w.config["_" + ("min" === e ? "max" : "min") + "Date"];
                void 0 !== t && (w["min" === e ? "minDateHasTime" : "maxDateHasTime"] = t.getHours() > 0 || t.getMinutes() > 0 || t.getSeconds() > 0), w.selectedDates && (w.selectedDates = w.selectedDates.filter((function (e) {
                    return ne(e)
                })), w.selectedDates.length || "min" !== e || F(t), ye()), w.daysContainer && (ue(), void 0 !== t ? w.currentYearElement[e] = t.getFullYear().toString() : w.currentYearElement.removeAttribute(e), w.currentYearElement.disabled = !!a && void 0 !== t && a.getFullYear() === t.getFullYear())
            }
        }

        function ce() {
            return w.config.wrap ? p.querySelector("[data-input]") : p
        }

        function se() {
            "object" != typeof w.config.locale && void 0 === I.l10ns[w.config.locale] && w.config.errorHandler(new Error("flatpickr: invalid locale " + w.config.locale)), w.l10n = e(e({}, I.l10ns.default), "object" == typeof w.config.locale ? w.config.locale : "default" !== w.config.locale ? I.l10ns[w.config.locale] : void 0), D.D = "(" + w.l10n.weekdays.shorthand.join("|") + ")", D.l = "(" + w.l10n.weekdays.longhand.join("|") + ")", D.M = "(" + w.l10n.months.shorthand.join("|") + ")", D.F = "(" + w.l10n.months.longhand.join("|") + ")", D.K = "(" + w.l10n.amPM[0] + "|" + w.l10n.amPM[1] + "|" + w.l10n.amPM[0].toLowerCase() + "|" + w.l10n.amPM[1].toLowerCase() + ")", void 0 === e(e({}, v), JSON.parse(JSON.stringify(p.dataset || {}))).time_24hr && void 0 === I.defaultConfig.time_24hr && (w.config.time_24hr = w.l10n.time_24hr), w.formatDate = b(w), w.parseDate = C({
                config: w.config,
                l10n: w.l10n
            })
        }

        function de(e) {
            if ("function" != typeof w.config.position) {
                if (void 0 !== w.calendarContainer) {
                    De("onPreCalendarPosition");
                    var n = e || w._positionElement,
                        t = Array.prototype.reduce.call(w.calendarContainer.children, (function (e, n) {
                            return e + n.offsetHeight
                        }), 0), a = w.calendarContainer.offsetWidth, i = w.config.position.split(" "), o = i[0],
                        r = i.length > 1 ? i[1] : null, l = n.getBoundingClientRect(),
                        c = window.innerHeight - l.bottom, d = "above" === o || "below" !== o && c < t && l.top > t,
                        u = window.pageYOffset + l.top + (d ? -t - 2 : n.offsetHeight + 2);
                    if (s(w.calendarContainer, "arrowTop", !d), s(w.calendarContainer, "arrowBottom", d), !w.config.inline) {
                        var f = window.pageXOffset + l.left, m = !1, g = !1;
                        "center" === r ? (f -= (a - l.width) / 2, m = !0) : "right" === r && (f -= a - l.width, g = !0), s(w.calendarContainer, "arrowLeft", !m && !g), s(w.calendarContainer, "arrowCenter", m), s(w.calendarContainer, "arrowRight", g);
                        var p = window.document.body.offsetWidth - (window.pageXOffset + l.right),
                            h = f + a > window.document.body.offsetWidth, v = p + a > window.document.body.offsetWidth;
                        if (s(w.calendarContainer, "rightMost", h), !w.config.static) if (w.calendarContainer.style.top = u + "px", h) if (v) {
                            var D = function () {
                                for (var e = null, n = 0; n < document.styleSheets.length; n++) {
                                    var t = document.styleSheets[n];
                                    if (t.cssRules) {
                                        try {
                                            t.cssRules
                                        } catch (e) {
                                            continue
                                        }
                                        e = t;
                                        break
                                    }
                                }
                                return null != e ? e : (a = document.createElement("style"), document.head.appendChild(a), a.sheet);
                                var a
                            }();
                            if (void 0 === D) return;
                            var b = window.document.body.offsetWidth, C = Math.max(0, b / 2 - a / 2),
                                M = D.cssRules.length, y = "{left:" + l.left + "px;right:auto;}";
                            s(w.calendarContainer, "rightMost", !1), s(w.calendarContainer, "centerMost", !0), D.insertRule(".flatpickr-calendar.centerMost:before,.flatpickr-calendar.centerMost:after" + y, M), w.calendarContainer.style.left = C + "px", w.calendarContainer.style.right = "auto"
                        } else w.calendarContainer.style.left = "auto", w.calendarContainer.style.right = p + "px"; else w.calendarContainer.style.left = f + "px", w.calendarContainer.style.right = "auto"
                    }
                }
            } else w.config.position(w, e)
        }

        function ue() {
            w.config.noCalendar || w.isMobile || (q(), Ce(), U())
        }

        function fe() {
            w._input.focus(), -1 !== window.navigator.userAgent.indexOf("MSIE") || void 0 !== navigator.msMaxTouchPoints ? setTimeout(w.close, 0) : w.close()
        }

        function me(e) {
            e.preventDefault(), e.stopPropagation();
            var n = f(g(e), (function (e) {
                return e.classList && e.classList.contains("flatpickr-day") && !e.classList.contains("flatpickr-disabled") && !e.classList.contains("notAllowed")
            }));
            if (void 0 !== n) {
                var t = n, a = w.latestSelectedDateObj = new Date(t.dateObj.getTime()),
                    i = (a.getMonth() < w.currentMonth || a.getMonth() > w.currentMonth + w.config.showMonths - 1) && "range" !== w.config.mode;
                if (w.selectedDateElem = t, "single" === w.config.mode) w.selectedDates = [a]; else if ("multiple" === w.config.mode) {
                    var o = be(a);
                    o ? w.selectedDates.splice(parseInt(o), 1) : w.selectedDates.push(a)
                } else "range" === w.config.mode && (2 === w.selectedDates.length && w.clear(!1, !1), w.latestSelectedDateObj = a, w.selectedDates.push(a), 0 !== M(a, w.selectedDates[0], !0) && w.selectedDates.sort((function (e, n) {
                    return e.getTime() - n.getTime()
                })));
                if (O(), i) {
                    var r = w.currentYear !== a.getFullYear();
                    w.currentYear = a.getFullYear(), w.currentMonth = a.getMonth(), r && (De("onYearChange"), q()), De("onMonthChange")
                }
                if (Ce(), U(), ye(), i || "range" === w.config.mode || 1 !== w.config.showMonths ? void 0 !== w.selectedDateElem && void 0 === w.hourElement && w.selectedDateElem && w.selectedDateElem.focus() : W(t), void 0 !== w.hourElement && void 0 !== w.hourElement && w.hourElement.focus(), w.config.closeOnSelect) {
                    var l = "single" === w.config.mode && !w.config.enableTime,
                        c = "range" === w.config.mode && 2 === w.selectedDates.length && !w.config.enableTime;
                    (l || c) && fe()
                }
                Y()
            }
        }

        w.parseDate = C({
            config: w.config,
            l10n: w.l10n
        }), w._handlers = [], w.pluginElements = [], w.loadedPlugins = [], w._bind = P, w._setHoursFromDate = F, w._positionCalendar = de, w.changeMonth = Z, w.changeYear = ee, w.clear = function (e, n) {
            void 0 === e && (e = !0);
            void 0 === n && (n = !0);
            w.input.value = "", void 0 !== w.altInput && (w.altInput.value = "");
            void 0 !== w.mobileInput && (w.mobileInput.value = "");
            w.selectedDates = [], w.latestSelectedDateObj = void 0, !0 === n && (w.currentYear = w._initialDate.getFullYear(), w.currentMonth = w._initialDate.getMonth());
            if (!0 === w.config.enableTime) {
                var t = E(w.config), a = t.hours, i = t.minutes, o = t.seconds;
                A(a, i, o)
            }
            w.redraw(), e && De("onChange")
        }, w.close = function () {
            w.isOpen = !1, w.isMobile || (void 0 !== w.calendarContainer && w.calendarContainer.classList.remove("open"), void 0 !== w._input && w._input.classList.remove("active"));
            De("onClose")
        }, w.onMouseOver = oe, w._createElement = d, w.createDay = R, w.destroy = function () {
            void 0 !== w.config && De("onDestroy");
            for (var e = w._handlers.length; e--;) w._handlers[e].remove();
            if (w._handlers = [], w.mobileInput) w.mobileInput.parentNode && w.mobileInput.parentNode.removeChild(w.mobileInput), w.mobileInput = void 0; else if (w.calendarContainer && w.calendarContainer.parentNode) if (w.config.static && w.calendarContainer.parentNode) {
                var n = w.calendarContainer.parentNode;
                if (n.lastChild && n.removeChild(n.lastChild), n.parentNode) {
                    for (; n.firstChild;) n.parentNode.insertBefore(n.firstChild, n);
                    n.parentNode.removeChild(n)
                }
            } else w.calendarContainer.parentNode.removeChild(w.calendarContainer);
            w.altInput && (w.input.type = "text", w.altInput.parentNode && w.altInput.parentNode.removeChild(w.altInput), delete w.altInput);
            w.input && (w.input.type = w.input._type, w.input.classList.remove("flatpickr-input"), w.input.removeAttribute("readonly"));
            ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "monthsDropdownContainer", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach((function (e) {
                try {
                    delete w[e]
                } catch (e) {
                }
            }))
        }, w.isEnabled = ne, w.jumpToDate = j, w.updateValue = ye, w.open = function (e, n) {
            void 0 === n && (n = w._positionElement);
            if (!0 === w.isMobile) {
                if (e) {
                    e.preventDefault();
                    var t = g(e);
                    t && t.blur()
                }
                return void 0 !== w.mobileInput && (w.mobileInput.focus(), w.mobileInput.click()), void De("onOpen")
            }
            if (w._input.disabled || w.config.inline) return;
            var a = w.isOpen;
            w.isOpen = !0, a || (w.calendarContainer.classList.add("open"), w._input.classList.add("active"), De("onOpen"), de(n));
            !0 === w.config.enableTime && !0 === w.config.noCalendar && (!1 !== w.config.allowInput || void 0 !== e && w.timeContainer.contains(e.relatedTarget) || setTimeout((function () {
                return w.hourElement.select()
            }), 50))
        }, w.redraw = ue, w.set = function (e, n) {
            if (null !== e && "object" == typeof e) for (var a in Object.assign(w.config, e), e) void 0 !== ge[a] && ge[a].forEach((function (e) {
                return e()
            })); else w.config[e] = n, void 0 !== ge[e] ? ge[e].forEach((function (e) {
                return e()
            })) : t.indexOf(e) > -1 && (w.config[e] = c(n));
            w.redraw(), ye(!0)
        }, w.setDate = function (e, n, t) {
            void 0 === n && (n = !1);
            void 0 === t && (t = w.config.dateFormat);
            if (0 !== e && !e || e instanceof Array && 0 === e.length) return w.clear(n);
            pe(e, t), w.latestSelectedDateObj = w.selectedDates[w.selectedDates.length - 1], w.redraw(), j(void 0, n), F(), 0 === w.selectedDates.length && w.clear(!1);
            ye(n), n && De("onChange")
        }, w.toggle = function (e) {
            if (!0 === w.isOpen) return w.close();
            w.open(e)
        };
        var ge = {
            locale: [se, G],
            showMonths: [V, S, z],
            minDate: [j],
            maxDate: [j],
            positionElement: [ve],
            clickOpens: [function () {
                !0 === w.config.clickOpens ? (P(w._input, "focus", w.open), P(w._input, "click", w.open)) : (w._input.removeEventListener("focus", w.open), w._input.removeEventListener("click", w.open))
            }]
        };

        function pe(e, n) {
            var t = [];
            if (e instanceof Array) t = e.map((function (e) {
                return w.parseDate(e, n)
            })); else if (e instanceof Date || "number" == typeof e) t = [w.parseDate(e, n)]; else if ("string" == typeof e) switch (w.config.mode) {
                case"single":
                case"time":
                    t = [w.parseDate(e, n)];
                    break;
                case"multiple":
                    t = e.split(w.config.conjunction).map((function (e) {
                        return w.parseDate(e, n)
                    }));
                    break;
                case"range":
                    t = e.split(w.l10n.rangeSeparator).map((function (e) {
                        return w.parseDate(e, n)
                    }))
            } else w.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(e)));
            w.selectedDates = w.config.allowInvalidPreload ? t : t.filter((function (e) {
                return e instanceof Date && ne(e, !1)
            })), "range" === w.config.mode && w.selectedDates.sort((function (e, n) {
                return e.getTime() - n.getTime()
            }))
        }

        function he(e) {
            return e.slice().map((function (e) {
                return "string" == typeof e || "number" == typeof e || e instanceof Date ? w.parseDate(e, void 0, !0) : e && "object" == typeof e && e.from && e.to ? {
                    from: w.parseDate(e.from, void 0),
                    to: w.parseDate(e.to, void 0)
                } : e
            })).filter((function (e) {
                return e
            }))
        }

        function ve() {
            w._positionElement = w.config.positionElement || w._input
        }

        function De(e, n) {
            if (void 0 !== w.config) {
                var t = w.config[e];
                if (void 0 !== t && t.length > 0) for (var a = 0; t[a] && a < t.length; a++) t[a](w.selectedDates, w.input.value, w, n);
                "onChange" === e && (w.input.dispatchEvent(we("change")), w.input.dispatchEvent(we("input")))
            }
        }

        function we(e) {
            var n = document.createEvent("Event");
            return n.initEvent(e, !0, !0), n
        }

        function be(e) {
            for (var n = 0; n < w.selectedDates.length; n++) {
                var t = w.selectedDates[n];
                if (t instanceof Date && 0 === M(t, e)) return "" + n
            }
            return !1
        }

        function Ce() {
            w.config.noCalendar || w.isMobile || !w.monthNav || (w.yearElements.forEach((function (e, n) {
                var t = new Date(w.currentYear, w.currentMonth, 1);
                t.setMonth(w.currentMonth + n), w.config.showMonths > 1 || "static" === w.config.monthSelectorType ? w.monthElements[n].textContent = h(t.getMonth(), w.config.shorthandCurrentMonth, w.l10n) + " " : w.monthsDropdownContainer.value = t.getMonth().toString(), e.value = t.getFullYear().toString()
            })), w._hidePrevMonthArrow = void 0 !== w.config.minDate && (w.currentYear === w.config.minDate.getFullYear() ? w.currentMonth <= w.config.minDate.getMonth() : w.currentYear < w.config.minDate.getFullYear()), w._hideNextMonthArrow = void 0 !== w.config.maxDate && (w.currentYear === w.config.maxDate.getFullYear() ? w.currentMonth + 1 > w.config.maxDate.getMonth() : w.currentYear > w.config.maxDate.getFullYear()))
        }

        function Me(e) {
            var n = e || (w.config.altInput ? w.config.altFormat : w.config.dateFormat);
            return w.selectedDates.map((function (e) {
                return w.formatDate(e, n)
            })).filter((function (e, n, t) {
                return "range" !== w.config.mode || w.config.enableTime || t.indexOf(e) === n
            })).join("range" !== w.config.mode ? w.config.conjunction : w.l10n.rangeSeparator)
        }

        function ye(e) {
            void 0 === e && (e = !0), void 0 !== w.mobileInput && w.mobileFormatStr && (w.mobileInput.value = void 0 !== w.latestSelectedDateObj ? w.formatDate(w.latestSelectedDateObj, w.mobileFormatStr) : ""), w.input.value = Me(w.config.dateFormat), void 0 !== w.altInput && (w.altInput.value = Me(w.config.altFormat)), !1 !== e && De("onValueUpdate")
        }

        function xe(e) {
            var n = g(e), t = w.prevMonthNav.contains(n), a = w.nextMonthNav.contains(n);
            t || a ? Z(t ? -1 : 1) : w.yearElements.indexOf(n) >= 0 ? n.select() : n.classList.contains("arrowUp") ? w.changeYear(w.currentYear + 1) : n.classList.contains("arrowDown") && w.changeYear(w.currentYear - 1)
        }

        return function () {
            w.element = w.input = p, w.isOpen = !1, function () {
                var n = ["wrap", "weekNumbers", "allowInput", "allowInvalidPreload", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"],
                    i = e(e({}, JSON.parse(JSON.stringify(p.dataset || {}))), v), o = {};
                w.config.parseDate = i.parseDate, w.config.formatDate = i.formatDate, Object.defineProperty(w.config, "enable", {
                    get: function () {
                        return w.config._enable
                    }, set: function (e) {
                        w.config._enable = he(e)
                    }
                }), Object.defineProperty(w.config, "disable", {
                    get: function () {
                        return w.config._disable
                    }, set: function (e) {
                        w.config._disable = he(e)
                    }
                });
                var r = "time" === i.mode;
                if (!i.dateFormat && (i.enableTime || r)) {
                    var l = I.defaultConfig.dateFormat || a.dateFormat;
                    o.dateFormat = i.noCalendar || r ? "H:i" + (i.enableSeconds ? ":S" : "") : l + " H:i" + (i.enableSeconds ? ":S" : "")
                }
                if (i.altInput && (i.enableTime || r) && !i.altFormat) {
                    var s = I.defaultConfig.altFormat || a.altFormat;
                    o.altFormat = i.noCalendar || r ? "h:i" + (i.enableSeconds ? ":S K" : " K") : s + " h:i" + (i.enableSeconds ? ":S" : "") + " K"
                }
                Object.defineProperty(w.config, "minDate", {
                    get: function () {
                        return w.config._minDate
                    }, set: le("min")
                }), Object.defineProperty(w.config, "maxDate", {
                    get: function () {
                        return w.config._maxDate
                    }, set: le("max")
                });
                var d = function (e) {
                    return function (n) {
                        w.config["min" === e ? "_minTime" : "_maxTime"] = w.parseDate(n, "H:i:S")
                    }
                };
                Object.defineProperty(w.config, "minTime", {
                    get: function () {
                        return w.config._minTime
                    }, set: d("min")
                }), Object.defineProperty(w.config, "maxTime", {
                    get: function () {
                        return w.config._maxTime
                    }, set: d("max")
                }), "time" === i.mode && (w.config.noCalendar = !0, w.config.enableTime = !0);
                Object.assign(w.config, o, i);
                for (var u = 0; u < n.length; u++) w.config[n[u]] = !0 === w.config[n[u]] || "true" === w.config[n[u]];
                t.filter((function (e) {
                    return void 0 !== w.config[e]
                })).forEach((function (e) {
                    w.config[e] = c(w.config[e] || []).map(T)
                })), w.isMobile = !w.config.disableMobile && !w.config.inline && "single" === w.config.mode && !w.config.disable.length && !w.config.enable && !w.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                for (u = 0; u < w.config.plugins.length; u++) {
                    var f = w.config.plugins[u](w) || {};
                    for (var m in f) t.indexOf(m) > -1 ? w.config[m] = c(f[m]).map(T).concat(w.config[m]) : void 0 === i[m] && (w.config[m] = f[m])
                }
                i.altInputClass || (w.config.altInputClass = ce().className + " " + w.config.altInputClass);
                De("onParseConfig")
            }(), se(), function () {
                if (w.input = ce(), !w.input) return void w.config.errorHandler(new Error("Invalid input element specified"));
                w.input._type = w.input.type, w.input.type = "text", w.input.classList.add("flatpickr-input"), w._input = w.input, w.config.altInput && (w.altInput = d(w.input.nodeName, w.config.altInputClass), w._input = w.altInput, w.altInput.placeholder = w.input.placeholder, w.altInput.disabled = w.input.disabled, w.altInput.required = w.input.required, w.altInput.tabIndex = w.input.tabIndex, w.altInput.type = "text", w.input.setAttribute("type", "hidden"), !w.config.static && w.input.parentNode && w.input.parentNode.insertBefore(w.altInput, w.input.nextSibling));
                w.config.allowInput || w._input.setAttribute("readonly", "readonly");
                ve()
            }(), function () {
                w.selectedDates = [], w.now = w.parseDate(w.config.now) || new Date;
                var e = w.config.defaultDate || ("INPUT" !== w.input.nodeName && "TEXTAREA" !== w.input.nodeName || !w.input.placeholder || w.input.value !== w.input.placeholder ? w.input.value : null);
                e && pe(e, w.config.dateFormat);
                w._initialDate = w.selectedDates.length > 0 ? w.selectedDates[0] : w.config.minDate && w.config.minDate.getTime() > w.now.getTime() ? w.config.minDate : w.config.maxDate && w.config.maxDate.getTime() < w.now.getTime() ? w.config.maxDate : w.now, w.currentYear = w._initialDate.getFullYear(), w.currentMonth = w._initialDate.getMonth(), w.selectedDates.length > 0 && (w.latestSelectedDateObj = w.selectedDates[0]);
                void 0 !== w.config.minTime && (w.config.minTime = w.parseDate(w.config.minTime, "H:i"));
                void 0 !== w.config.maxTime && (w.config.maxTime = w.parseDate(w.config.maxTime, "H:i"));
                w.minDateHasTime = !!w.config.minDate && (w.config.minDate.getHours() > 0 || w.config.minDate.getMinutes() > 0 || w.config.minDate.getSeconds() > 0), w.maxDateHasTime = !!w.config.maxDate && (w.config.maxDate.getHours() > 0 || w.config.maxDate.getMinutes() > 0 || w.config.maxDate.getSeconds() > 0)
            }(), w.utils = {
                getDaysInMonth: function (e, n) {
                    return void 0 === e && (e = w.currentMonth), void 0 === n && (n = w.currentYear), 1 === e && (n % 4 == 0 && n % 100 != 0 || n % 400 == 0) ? 29 : w.l10n.daysInMonth[e]
                }
            }, w.isMobile || function () {
                var e = window.document.createDocumentFragment();
                if (w.calendarContainer = d("div", "flatpickr-calendar"), w.calendarContainer.tabIndex = -1, !w.config.noCalendar) {
                    if (e.appendChild((w.monthNav = d("div", "flatpickr-months"), w.yearElements = [], w.monthElements = [], w.prevMonthNav = d("span", "flatpickr-prev-month"), w.prevMonthNav.innerHTML = w.config.prevArrow, w.nextMonthNav = d("span", "flatpickr-next-month"), w.nextMonthNav.innerHTML = w.config.nextArrow, V(), Object.defineProperty(w, "_hidePrevMonthArrow", {
                        get: function () {
                            return w.__hidePrevMonthArrow
                        }, set: function (e) {
                            w.__hidePrevMonthArrow !== e && (s(w.prevMonthNav, "flatpickr-disabled", e), w.__hidePrevMonthArrow = e)
                        }
                    }), Object.defineProperty(w, "_hideNextMonthArrow", {
                        get: function () {
                            return w.__hideNextMonthArrow
                        }, set: function (e) {
                            w.__hideNextMonthArrow !== e && (s(w.nextMonthNav, "flatpickr-disabled", e), w.__hideNextMonthArrow = e)
                        }
                    }), w.currentYearElement = w.yearElements[0], Ce(), w.monthNav)), w.innerContainer = d("div", "flatpickr-innerContainer"), w.config.weekNumbers) {
                        var n = function () {
                            w.calendarContainer.classList.add("hasWeeks");
                            var e = d("div", "flatpickr-weekwrapper");
                            e.appendChild(d("span", "flatpickr-weekday", w.l10n.weekAbbreviation));
                            var n = d("div", "flatpickr-weeks");
                            return e.appendChild(n), {weekWrapper: e, weekNumbers: n}
                        }(), t = n.weekWrapper, a = n.weekNumbers;
                        w.innerContainer.appendChild(t), w.weekNumbers = a, w.weekWrapper = t
                    }
                    w.rContainer = d("div", "flatpickr-rContainer"), w.rContainer.appendChild(z()), w.daysContainer || (w.daysContainer = d("div", "flatpickr-days"), w.daysContainer.tabIndex = -1), U(), w.rContainer.appendChild(w.daysContainer), w.innerContainer.appendChild(w.rContainer), e.appendChild(w.innerContainer)
                }
                w.config.enableTime && e.appendChild(function () {
                    w.calendarContainer.classList.add("hasTime"), w.config.noCalendar && w.calendarContainer.classList.add("noCalendar");
                    var e = E(w.config);
                    w.timeContainer = d("div", "flatpickr-time"), w.timeContainer.tabIndex = -1;
                    var n = d("span", "flatpickr-time-separator", ":"),
                        t = m("flatpickr-hour", {"aria-label": w.l10n.hourAriaLabel});
                    w.hourElement = t.getElementsByTagName("input")[0];
                    var a = m("flatpickr-minute", {"aria-label": w.l10n.minuteAriaLabel});
                    w.minuteElement = a.getElementsByTagName("input")[0], w.hourElement.tabIndex = w.minuteElement.tabIndex = -1, w.hourElement.value = o(w.latestSelectedDateObj ? w.latestSelectedDateObj.getHours() : w.config.time_24hr ? e.hours : function (e) {
                        switch (e % 24) {
                            case 0:
                            case 12:
                                return 12;
                            default:
                                return e % 12
                        }
                    }(e.hours)), w.minuteElement.value = o(w.latestSelectedDateObj ? w.latestSelectedDateObj.getMinutes() : e.minutes), w.hourElement.setAttribute("step", w.config.hourIncrement.toString()), w.minuteElement.setAttribute("step", w.config.minuteIncrement.toString()), w.hourElement.setAttribute("min", w.config.time_24hr ? "0" : "1"), w.hourElement.setAttribute("max", w.config.time_24hr ? "23" : "12"), w.hourElement.setAttribute("maxlength", "2"), w.minuteElement.setAttribute("min", "0"), w.minuteElement.setAttribute("max", "59"), w.minuteElement.setAttribute("maxlength", "2"), w.timeContainer.appendChild(t), w.timeContainer.appendChild(n), w.timeContainer.appendChild(a), w.config.time_24hr && w.timeContainer.classList.add("time24hr");
                    if (w.config.enableSeconds) {
                        w.timeContainer.classList.add("hasSeconds");
                        var i = m("flatpickr-second");
                        w.secondElement = i.getElementsByTagName("input")[0], w.secondElement.value = o(w.latestSelectedDateObj ? w.latestSelectedDateObj.getSeconds() : e.seconds), w.secondElement.setAttribute("step", w.minuteElement.getAttribute("step")), w.secondElement.setAttribute("min", "0"), w.secondElement.setAttribute("max", "59"), w.secondElement.setAttribute("maxlength", "2"), w.timeContainer.appendChild(d("span", "flatpickr-time-separator", ":")), w.timeContainer.appendChild(i)
                    }
                    w.config.time_24hr || (w.amPM = d("span", "flatpickr-am-pm", w.l10n.amPM[r((w.latestSelectedDateObj ? w.hourElement.value : w.config.defaultHour) > 11)]), w.amPM.title = w.l10n.toggleTitle, w.amPM.tabIndex = -1, w.timeContainer.appendChild(w.amPM));
                    return w.timeContainer
                }());
                s(w.calendarContainer, "rangeMode", "range" === w.config.mode), s(w.calendarContainer, "animate", !0 === w.config.animate), s(w.calendarContainer, "multiMonth", w.config.showMonths > 1), w.calendarContainer.appendChild(e);
                var i = void 0 !== w.config.appendTo && void 0 !== w.config.appendTo.nodeType;
                if ((w.config.inline || w.config.static) && (w.calendarContainer.classList.add(w.config.inline ? "inline" : "static"), w.config.inline && (!i && w.element.parentNode ? w.element.parentNode.insertBefore(w.calendarContainer, w._input.nextSibling) : void 0 !== w.config.appendTo && w.config.appendTo.appendChild(w.calendarContainer)), w.config.static)) {
                    var l = d("div", "flatpickr-wrapper");
                    w.element.parentNode && w.element.parentNode.insertBefore(l, w.element), l.appendChild(w.element), w.altInput && l.appendChild(w.altInput), l.appendChild(w.calendarContainer)
                }
                w.config.static || w.config.inline || (void 0 !== w.config.appendTo ? w.config.appendTo : window.document.body).appendChild(w.calendarContainer)
            }(), function () {
                w.config.wrap && ["open", "close", "toggle", "clear"].forEach((function (e) {
                    Array.prototype.forEach.call(w.element.querySelectorAll("[data-" + e + "]"), (function (n) {
                        return P(n, "click", w[e])
                    }))
                }));
                if (w.isMobile) return void function () {
                    var e = w.config.enableTime ? w.config.noCalendar ? "time" : "datetime-local" : "date";
                    w.mobileInput = d("input", w.input.className + " flatpickr-mobile"), w.mobileInput.tabIndex = 1, w.mobileInput.type = e, w.mobileInput.disabled = w.input.disabled, w.mobileInput.required = w.input.required, w.mobileInput.placeholder = w.input.placeholder, w.mobileFormatStr = "datetime-local" === e ? "Y-m-d\\TH:i:S" : "date" === e ? "Y-m-d" : "H:i:S", w.selectedDates.length > 0 && (w.mobileInput.defaultValue = w.mobileInput.value = w.formatDate(w.selectedDates[0], w.mobileFormatStr));
                    w.config.minDate && (w.mobileInput.min = w.formatDate(w.config.minDate, "Y-m-d"));
                    w.config.maxDate && (w.mobileInput.max = w.formatDate(w.config.maxDate, "Y-m-d"));
                    w.input.getAttribute("step") && (w.mobileInput.step = String(w.input.getAttribute("step")));
                    w.input.type = "hidden", void 0 !== w.altInput && (w.altInput.type = "hidden");
                    try {
                        w.input.parentNode && w.input.parentNode.insertBefore(w.mobileInput, w.input.nextSibling)
                    } catch (e) {
                    }
                    P(w.mobileInput, "change", (function (e) {
                        w.setDate(g(e).value, !1, w.mobileFormatStr), De("onChange"), De("onClose")
                    }))
                }();
                var e = l(re, 50);
                w._debouncedChange = l(Y, 300), w.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent) && P(w.daysContainer, "mouseover", (function (e) {
                    "range" === w.config.mode && oe(g(e))
                }));
                P(w._input, "keydown", ie), void 0 !== w.calendarContainer && P(w.calendarContainer, "keydown", ie);
                w.config.inline || w.config.static || P(window, "resize", e);
                void 0 !== window.ontouchstart ? P(window.document, "touchstart", X) : P(window.document, "mousedown", X);
                P(window.document, "focus", X, {capture: !0}), !0 === w.config.clickOpens && (P(w._input, "focus", w.open), P(w._input, "click", w.open));
                void 0 !== w.daysContainer && (P(w.monthNav, "click", xe), P(w.monthNav, ["keyup", "increment"], N), P(w.daysContainer, "click", me));
                if (void 0 !== w.timeContainer && void 0 !== w.minuteElement && void 0 !== w.hourElement) {
                    var n = function (e) {
                        return g(e).select()
                    };
                    P(w.timeContainer, ["increment"], _), P(w.timeContainer, "blur", _, {capture: !0}), P(w.timeContainer, "click", H), P([w.hourElement, w.minuteElement], ["focus", "click"], n), void 0 !== w.secondElement && P(w.secondElement, "focus", (function () {
                        return w.secondElement && w.secondElement.select()
                    })), void 0 !== w.amPM && P(w.amPM, "click", (function (e) {
                        _(e)
                    }))
                }
                w.config.allowInput && P(w._input, "blur", ae)
            }(), (w.selectedDates.length || w.config.noCalendar) && (w.config.enableTime && F(w.config.noCalendar ? w.latestSelectedDateObj : void 0), ye(!1)), S();
            var n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            !w.isMobile && n && de(), De("onReady")
        }(), w
    }

    function T(e, n) {
        for (var t = Array.prototype.slice.call(e).filter((function (e) {
            return e instanceof HTMLElement
        })), a = [], i = 0; i < t.length; i++) {
            var o = t[i];
            try {
                if (null !== o.getAttribute("data-fp-omit")) continue;
                void 0 !== o._flatpickr && (o._flatpickr.destroy(), o._flatpickr = void 0), o._flatpickr = k(o, n || {}), a.push(o._flatpickr)
            } catch (e) {
                console.error(e)
            }
        }
        return 1 === a.length ? a[0] : a
    }

    "undefined" != typeof HTMLElement && "undefined" != typeof HTMLCollection && "undefined" != typeof NodeList && (HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (e) {
        return T(this, e)
    }, HTMLElement.prototype.flatpickr = function (e) {
        return T([this], e)
    });
    var I = function (e, n) {
        return "string" == typeof e ? T(window.document.querySelectorAll(e), n) : e instanceof Node ? T([e], n) : T(e, n)
    };
    return I.defaultConfig = {}, I.l10ns = {en: e({}, i), default: e({}, i)}, I.localize = function (n) {
        I.l10ns.default = e(e({}, I.l10ns.default), n)
    }, I.setDefaults = function (n) {
        I.defaultConfig = e(e({}, I.defaultConfig), n)
    }, I.parseDate = C({}), I.formatDate = b({}), I.compareDates = M, "undefined" != typeof jQuery && void 0 !== jQuery.fn && (jQuery.fn.flatpickr = function (e) {
        return T(this, e)
    }), Date.prototype.fp_incr = function (e) {
        return new Date(this.getFullYear(), this.getMonth(), this.getDate() + ("string" == typeof e ? parseInt(e, 10) : e))
    }, "undefined" != typeof window && (window.flatpickr = I), I
}));
!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).monthSelectPlugin = t()
}(this, function () {
    "use strict";/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    var e = function () {
        return (e = Object.assign || function e(t) {
            for (var n, o = 1, a = arguments.length; o < a; o++) for (var r in n = arguments[o]) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            return t
        }).apply(this, arguments)
    };

    function t(e) {
        for (; e.firstChild;) e.removeChild(e.firstChild)
    }

    function n(e) {
        try {
            if ("function" == typeof e.composedPath) return e.composedPath()[0];
            return e.target
        } catch (t) {
            return e.target
        }
    }

    var o = {shorthand: !1, dateFormat: "F Y", altFormat: "F Y", theme: "light"};
    return function a(r) {
        var i = e(e({}, o), r);
        return function (e) {
            e.config.dateFormat = i.dateFormat, e.config.altFormat = i.altFormat;
            var o = {monthsContainer: null};

            function a() {
                if (o.monthsContainer) {
                    t(o.monthsContainer);
                    for (var n = document.createDocumentFragment(), a = 0; a < 12; a++) {
                        var r, c, s, d = e.createDay("flatpickr-monthSelect-month", new Date(e.currentYear, a), 0, a);
                        d.dateObj.getMonth() === new Date().getMonth() && d.dateObj.getFullYear() === new Date().getFullYear() && d.classList.add("today"), d.textContent = (r = a, c = i.shorthand, (s = e.l10n).months[c ? "shorthand" : "longhand"][r]), d.addEventListener("click", l), n.appendChild(d)
                    }
                    o.monthsContainer.appendChild(n), e.config.minDate && e.currentYear === e.config.minDate.getFullYear() ? e.prevMonthNav.classList.add("flatpickr-disabled") : e.prevMonthNav.classList.remove("flatpickr-disabled"), e.config.maxDate && e.currentYear === e.config.maxDate.getFullYear() ? e.nextMonthNav.classList.add("flatpickr-disabled") : e.nextMonthNav.classList.remove("flatpickr-disabled")
                }
            }

            function r() {
                if (e.rContainer && e.selectedDates.length) {
                    for (var t = e.rContainer.querySelectorAll(".flatpickr-monthSelect-month.selected"), n = 0; n < t.length; n++) t[n].classList.remove("selected");
                    var o = e.selectedDates[0].getMonth(),
                        a = e.rContainer.querySelector(".flatpickr-monthSelect-month:nth-child(" + (o + 1) + ")");
                    a && a.classList.add("selected")
                }
            }

            function c() {
                var t = e.selectedDates[0];
                t && ((t = new Date(t)).setFullYear(e.currentYear), e.config.minDate && t < e.config.minDate && (t = e.config.minDate), e.config.maxDate && t > e.config.maxDate && (t = e.config.maxDate), e.currentYear = t.getFullYear()), e.currentYearElement.value = String(e.currentYear), e.rContainer && e.rContainer.querySelectorAll(".flatpickr-monthSelect-month").forEach(function (t) {
                    t.dateObj.setFullYear(e.currentYear), e.config.minDate && t.dateObj < e.config.minDate || e.config.maxDate && t.dateObj > e.config.maxDate ? t.classList.add("flatpickr-disabled") : t.classList.remove("flatpickr-disabled")
                }), r()
            }

            function l(t) {
                t.preventDefault(), t.stopPropagation();
                var o = n(t);
                if (!(!(o instanceof Element) || o.classList.contains("flatpickr-disabled")) && !o.classList.contains("notAllowed") && (s(o.dateObj), e.config.closeOnSelect)) {
                    var a = "single" === e.config.mode, r = "range" === e.config.mode && 2 === e.selectedDates.length;
                    (a || r) && e.close()
                }
            }

            function s(t) {
                var n = new Date(e.currentYear, t.getMonth(), t.getDate()), o = [];
                switch (e.config.mode) {
                    case "single":
                        o = [n];
                        break;
                    case "multiple":
                        o.push(n);
                        break;
                    case "range":
                        2 === e.selectedDates.length ? o = [n] : (o = e.selectedDates.concat([n])).sort(function (e, t) {
                            return e.getTime() - t.getTime()
                        })
                }
                e.setDate(o, !0), r()
            }

            var d = {37: -1, 39: 1, 40: 3, 38: -3};

            function f() {
                var t;
                (null === (t = e.config) || void 0 === t ? void 0 : t.mode) === "range" && 1 === e.selectedDates.length && e.clear(!1), e.selectedDates.length || a()
            }

            return {
                onParseConfig: function () {
                    e.config.enableTime = !1
                }, onValueUpdate: r, onKeyDown: function t(n, a, r, i) {
                    var c = void 0 !== d[i.keyCode];
                    if ((c || 13 === i.keyCode) && e.rContainer && o.monthsContainer) {
                        var l = e.rContainer.querySelector(".flatpickr-monthSelect-month.selected"),
                            f = Array.prototype.indexOf.call(o.monthsContainer.children, document.activeElement);
                        if (-1 === f) {
                            var h = l || o.monthsContainer.firstElementChild;
                            h.focus(), f = h.$i
                        }
                        c ? o.monthsContainer.children[(12 + f + d[i.keyCode]) % 12].focus() : 13 === i.keyCode && o.monthsContainer.contains(document.activeElement) && s(document.activeElement.dateObj)
                    }
                }, onReady: [function t() {
                    i._stubbedCurrentMonth = e._initialDate.getMonth(), e._initialDate.setMonth(i._stubbedCurrentMonth), e.currentMonth = i._stubbedCurrentMonth
                }, function n() {
                    if (e.rContainer) {
                        t(e.rContainer);
                        for (var o = 0; o < e.monthElements.length; o++) {
                            var a = e.monthElements[o];
                            a.parentNode && a.parentNode.removeChild(a)
                        }
                    }
                }, function t() {
                    e.rContainer && (o.monthsContainer = e._createElement("div", "flatpickr-monthSelect-months"), o.monthsContainer.tabIndex = -1, a(), e.rContainer.appendChild(o.monthsContainer), e.calendarContainer.classList.add("flatpickr-monthSelect-theme-" + i.theme))
                }, function t() {
                    e._bind(e.prevMonthNav, "click", function (t) {
                        t.preventDefault(), t.stopPropagation(), e.changeYear(e.currentYear - 1), c(), a()
                    }), e._bind(e.nextMonthNav, "click", function (t) {
                        t.preventDefault(), t.stopPropagation(), e.changeYear(e.currentYear + 1), c(), a()
                    }), e._bind(o.monthsContainer, "mouseover", function (t) {
                        "range" === e.config.mode && e.onMouseOver(n(t), "flatpickr-monthSelect-month")
                    })
                }, r, function () {
                    e.config.onClose.push(f), e.loadedPlugins.push("monthSelect")
                },], onDestroy: [function t() {
                    i._stubbedCurrentMonth && (e._initialDate.setMonth(i._stubbedCurrentMonth), e.currentMonth = i._stubbedCurrentMonth, delete i._stubbedCurrentMonth)
                }, function e() {
                    if (null !== o.monthsContainer) for (var t = o.monthsContainer.querySelectorAll(".flatpickr-monthSelect-month"), n = 0; n < t.length; n++) t[n].removeEventListener("click", l)
                }, function () {
                    e.config.onClose = e.config.onClose.filter(function (e) {
                        return e !== f
                    })
                },]
            }
        }
    }
});
!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).GLightbox = t()
}(this, (function () {
    "use strict";

    function e(t) {
        return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(t)
    }

    function t(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function n(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e
    }

    var s = Date.now();

    function l() {
        var e = {}, t = !0, i = 0, n = arguments.length;
        "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (t = arguments[0], i++);
        for (var s = function (i) {
            for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t && "[object Object]" === Object.prototype.toString.call(i[n]) ? e[n] = l(!0, e[n], i[n]) : e[n] = i[n])
        }; i < n; i++) {
            var o = arguments[i];
            s(o)
        }
        return e
    }

    function o(e, t) {
        if ((k(e) || e === window || e === document) && (e = [e]), A(e) || L(e) || (e = [e]), 0 != P(e)) if (A(e) && !L(e)) for (var i = e.length, n = 0; n < i && !1 !== t.call(e[n], e[n], n, e); n++) ; else if (L(e)) for (var s in e) if (O(e, s) && !1 === t.call(e[s], e[s], s, e)) break
    }

    function r(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, n = e[s] = e[s] || [],
            l = {all: n, evt: null, found: null};
        return t && i && P(n) > 0 && o(n, (function (e, n) {
            if (e.eventName == t && e.fn.toString() == i.toString()) return l.found = !0, l.evt = n, !1
        })), l
    }

    function a(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = t.onElement,
            n = t.withCallback, s = t.avoidDuplicate, l = void 0 === s || s, a = t.once, h = void 0 !== a && a,
            d = t.useCapture, c = void 0 !== d && d, u = arguments.length > 2 ? arguments[2] : void 0, g = i || [];

        function v(e) {
            T(n) && n.call(u, e, this), h && v.destroy()
        }

        return C(g) && (g = document.querySelectorAll(g)), v.destroy = function () {
            o(g, (function (t) {
                var i = r(t, e, v);
                i.found && i.all.splice(i.evt, 1), t.removeEventListener && t.removeEventListener(e, v, c)
            }))
        }, o(g, (function (t) {
            var i = r(t, e, v);
            (t.addEventListener && l && !i.found || !l) && (t.addEventListener(e, v, c), i.all.push({
                eventName: e,
                fn: v
            }))
        })), v
    }

    function h(e, t) {
        o(t.split(" "), (function (t) {
            return e.classList.add(t)
        }))
    }

    function d(e, t) {
        o(t.split(" "), (function (t) {
            return e.classList.remove(t)
        }))
    }

    function c(e, t) {
        return e.classList.contains(t)
    }

    function u(e, t) {
        for (; e !== document.body;) {
            if (!(e = e.parentElement)) return !1;
            if ("function" == typeof e.matches ? e.matches(t) : e.msMatchesSelector(t)) return e
        }
    }

    function g(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!e || "" === t) return !1;
        if ("none" === t) return T(i) && i(), !1;
        var n = x(), s = t.split(" ");
        o(s, (function (t) {
            h(e, "g" + t)
        })), a(n, {
            onElement: e, avoidDuplicate: !1, once: !0, withCallback: function (e, t) {
                o(s, (function (e) {
                    d(t, "g" + e)
                })), T(i) && i()
            }
        })
    }

    function v(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if ("" === t) return e.style.webkitTransform = "", e.style.MozTransform = "", e.style.msTransform = "", e.style.OTransform = "", e.style.transform = "", !1;
        e.style.webkitTransform = t, e.style.MozTransform = t, e.style.msTransform = t, e.style.OTransform = t, e.style.transform = t
    }

    function f(e) {
        e.style.display = "block"
    }

    function p(e) {
        e.style.display = "none"
    }

    function m(e) {
        var t = document.createDocumentFragment(), i = document.createElement("div");
        for (i.innerHTML = e; i.firstChild;) t.appendChild(i.firstChild);
        return t
    }

    function y() {
        return {
            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        }
    }

    function x() {
        var e, t = document.createElement("fakeelement"), i = {
            animation: "animationend",
            OAnimation: "oAnimationEnd",
            MozAnimation: "animationend",
            WebkitAnimation: "webkitAnimationEnd"
        };
        for (e in i) if (void 0 !== t.style[e]) return i[e]
    }

    function b(e, t, i, n) {
        if (e()) t(); else {
            var s;
            i || (i = 100);
            var l = setInterval((function () {
                e() && (clearInterval(l), s && clearTimeout(s), t())
            }), i);
            n && (s = setTimeout((function () {
                clearInterval(l)
            }), n))
        }
    }

    function S(e, t, i) {
        if (I(e)) console.error("Inject assets error"); else if (T(t) && (i = t, t = !1), C(t) && t in window) T(i) && i(); else {
            var n;
            if (-1 !== e.indexOf(".css")) {
                if ((n = document.querySelectorAll('link[href="' + e + '"]')) && n.length > 0) return void (T(i) && i());
                var s = document.getElementsByTagName("head")[0], l = s.querySelectorAll('link[rel="stylesheet"]'),
                    o = document.createElement("link");
                return o.rel = "stylesheet", o.type = "text/css", o.href = e, o.media = "all", l ? s.insertBefore(o, l[0]) : s.appendChild(o), void (T(i) && i())
            }
            if ((n = document.querySelectorAll('script[src="' + e + '"]')) && n.length > 0) {
                if (T(i)) {
                    if (C(t)) return b((function () {
                        return void 0 !== window[t]
                    }), (function () {
                        i()
                    })), !1;
                    i()
                }
            } else {
                var r = document.createElement("script");
                r.type = "text/javascript", r.src = e, r.onload = function () {
                    if (T(i)) {
                        if (C(t)) return b((function () {
                            return void 0 !== window[t]
                        }), (function () {
                            i()
                        })), !1;
                        i()
                    }
                }, document.body.appendChild(r)
            }
        }
    }

    function w() {
        return "navigator" in window && window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i)
    }

    function T(e) {
        return "function" == typeof e
    }

    function C(e) {
        return "string" == typeof e
    }

    function k(e) {
        return !(!e || !e.nodeType || 1 != e.nodeType)
    }

    function E(e) {
        return Array.isArray(e)
    }

    function A(e) {
        return e && e.length && isFinite(e.length)
    }

    function L(t) {
        return "object" === e(t) && null != t && !T(t) && !E(t)
    }

    function I(e) {
        return null == e
    }

    function O(e, t) {
        return null !== e && hasOwnProperty.call(e, t)
    }

    function P(e) {
        if (L(e)) {
            if (e.keys) return e.keys().length;
            var t = 0;
            for (var i in e) O(e, i) && t++;
            return t
        }
        return e.length
    }

    function M(e) {
        return !isNaN(parseFloat(e)) && isFinite(e)
    }

    function z() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1,
            t = document.querySelectorAll(".gbtn[data-taborder]:not(.disabled)");
        if (!t.length) return !1;
        if (1 == t.length) return t[0];
        "string" == typeof e && (e = parseInt(e));
        var i = [];
        o(t, (function (e) {
            i.push(e.getAttribute("data-taborder"))
        }));
        var n = Math.max.apply(Math, i.map((function (e) {
            return parseInt(e)
        }))), s = e < 0 ? 1 : e + 1;
        s > n && (s = "1");
        var l = i.filter((function (e) {
            return e >= parseInt(s)
        })), r = l.sort()[0];
        return document.querySelector('.gbtn[data-taborder="'.concat(r, '"]'))
    }

    function X(e) {
        if (e.events.hasOwnProperty("keyboard")) return !1;
        e.events.keyboard = a("keydown", {
            onElement: window, withCallback: function (t, i) {
                var n = (t = t || window.event).keyCode;
                if (9 == n) {
                    var s = document.querySelector(".gbtn.focused");
                    if (!s) {
                        var l = !(!document.activeElement || !document.activeElement.nodeName) && document.activeElement.nodeName.toLocaleLowerCase();
                        if ("input" == l || "textarea" == l || "button" == l) return
                    }
                    t.preventDefault();
                    var o = document.querySelectorAll(".gbtn[data-taborder]");
                    if (!o || o.length <= 0) return;
                    if (!s) {
                        var r = z();
                        return void (r && (r.focus(), h(r, "focused")))
                    }
                    var a = z(s.getAttribute("data-taborder"));
                    d(s, "focused"), a && (a.focus(), h(a, "focused"))
                }
                39 == n && e.nextSlide(), 37 == n && e.prevSlide(), 27 == n && e.close()
            }
        })
    }

    function Y(e) {
        return Math.sqrt(e.x * e.x + e.y * e.y)
    }

    function q(e, t) {
        var i = function (e, t) {
            var i = Y(e) * Y(t);
            if (0 === i) return 0;
            var n = function (e, t) {
                return e.x * t.x + e.y * t.y
            }(e, t) / i;
            return n > 1 && (n = 1), Math.acos(n)
        }(e, t);
        return function (e, t) {
            return e.x * t.y - t.x * e.y
        }(e, t) > 0 && (i *= -1), 180 * i / Math.PI
    }

    var N = function () {
        function e(i) {
            t(this, e), this.handlers = [], this.el = i
        }

        return n(e, [{
            key: "add", value: function (e) {
                this.handlers.push(e)
            }
        }, {
            key: "del", value: function (e) {
                e || (this.handlers = []);
                for (var t = this.handlers.length; t >= 0; t--) this.handlers[t] === e && this.handlers.splice(t, 1)
            }
        }, {
            key: "dispatch", value: function () {
                for (var e = 0, t = this.handlers.length; e < t; e++) {
                    var i = this.handlers[e];
                    "function" == typeof i && i.apply(this.el, arguments)
                }
            }
        }]), e
    }();

    function D(e, t) {
        var i = new N(e);
        return i.add(t), i
    }

    var _ = function () {
        function e(i, n) {
            t(this, e), this.element = "string" == typeof i ? document.querySelector(i) : i, this.start = this.start.bind(this), this.move = this.move.bind(this), this.end = this.end.bind(this), this.cancel = this.cancel.bind(this), this.element.addEventListener("touchstart", this.start, !1), this.element.addEventListener("touchmove", this.move, !1), this.element.addEventListener("touchend", this.end, !1), this.element.addEventListener("touchcancel", this.cancel, !1), this.preV = {
                x: null,
                y: null
            }, this.pinchStartLen = null, this.zoom = 1, this.isDoubleTap = !1;
            var s = function () {
            };
            this.rotate = D(this.element, n.rotate || s), this.touchStart = D(this.element, n.touchStart || s), this.multipointStart = D(this.element, n.multipointStart || s), this.multipointEnd = D(this.element, n.multipointEnd || s), this.pinch = D(this.element, n.pinch || s), this.swipe = D(this.element, n.swipe || s), this.tap = D(this.element, n.tap || s), this.doubleTap = D(this.element, n.doubleTap || s), this.longTap = D(this.element, n.longTap || s), this.singleTap = D(this.element, n.singleTap || s), this.pressMove = D(this.element, n.pressMove || s), this.twoFingerPressMove = D(this.element, n.twoFingerPressMove || s), this.touchMove = D(this.element, n.touchMove || s), this.touchEnd = D(this.element, n.touchEnd || s), this.touchCancel = D(this.element, n.touchCancel || s), this.translateContainer = this.element, this._cancelAllHandler = this.cancelAll.bind(this), window.addEventListener("scroll", this._cancelAllHandler), this.delta = null, this.last = null, this.now = null, this.tapTimeout = null, this.singleTapTimeout = null, this.longTapTimeout = null, this.swipeTimeout = null, this.x1 = this.x2 = this.y1 = this.y2 = null, this.preTapPosition = {
                x: null,
                y: null
            }
        }

        return n(e, [{
            key: "start", value: function (e) {
                if (e.touches) {
                    if (e.target && e.target.nodeName && ["a", "button", "input"].indexOf(e.target.nodeName.toLowerCase()) >= 0) console.log("ignore drag for this touched element", e.target.nodeName.toLowerCase()); else {
                        this.now = Date.now(), this.x1 = e.touches[0].pageX, this.y1 = e.touches[0].pageY, this.delta = this.now - (this.last || this.now), this.touchStart.dispatch(e, this.element), null !== this.preTapPosition.x && (this.isDoubleTap = this.delta > 0 && this.delta <= 250 && Math.abs(this.preTapPosition.x - this.x1) < 30 && Math.abs(this.preTapPosition.y - this.y1) < 30, this.isDoubleTap && clearTimeout(this.singleTapTimeout)), this.preTapPosition.x = this.x1, this.preTapPosition.y = this.y1, this.last = this.now;
                        var t = this.preV;
                        if (e.touches.length > 1) {
                            this._cancelLongTap(), this._cancelSingleTap();
                            var i = {x: e.touches[1].pageX - this.x1, y: e.touches[1].pageY - this.y1};
                            t.x = i.x, t.y = i.y, this.pinchStartLen = Y(t), this.multipointStart.dispatch(e, this.element)
                        }
                        this._preventTap = !1, this.longTapTimeout = setTimeout(function () {
                            this.longTap.dispatch(e, this.element), this._preventTap = !0
                        }.bind(this), 750)
                    }
                }
            }
        }, {
            key: "move", value: function (e) {
                if (e.touches) {
                    var t = this.preV, i = e.touches.length, n = e.touches[0].pageX, s = e.touches[0].pageY;
                    if (this.isDoubleTap = !1, i > 1) {
                        var l = e.touches[1].pageX, o = e.touches[1].pageY,
                            r = {x: e.touches[1].pageX - n, y: e.touches[1].pageY - s};
                        null !== t.x && (this.pinchStartLen > 0 && (e.zoom = Y(r) / this.pinchStartLen, this.pinch.dispatch(e, this.element)), e.angle = q(r, t), this.rotate.dispatch(e, this.element)), t.x = r.x, t.y = r.y, null !== this.x2 && null !== this.sx2 ? (e.deltaX = (n - this.x2 + l - this.sx2) / 2, e.deltaY = (s - this.y2 + o - this.sy2) / 2) : (e.deltaX = 0, e.deltaY = 0), this.twoFingerPressMove.dispatch(e, this.element), this.sx2 = l, this.sy2 = o
                    } else {
                        if (null !== this.x2) {
                            e.deltaX = n - this.x2, e.deltaY = s - this.y2;
                            var a = Math.abs(this.x1 - this.x2), h = Math.abs(this.y1 - this.y2);
                            (a > 10 || h > 10) && (this._preventTap = !0)
                        } else e.deltaX = 0, e.deltaY = 0;
                        this.pressMove.dispatch(e, this.element)
                    }
                    this.touchMove.dispatch(e, this.element), this._cancelLongTap(), this.x2 = n, this.y2 = s, i > 1 && e.preventDefault()
                }
            }
        }, {
            key: "end", value: function (e) {
                if (e.changedTouches) {
                    this._cancelLongTap();
                    var t = this;
                    e.touches.length < 2 && (this.multipointEnd.dispatch(e, this.element), this.sx2 = this.sy2 = null), this.x2 && Math.abs(this.x1 - this.x2) > 30 || this.y2 && Math.abs(this.y1 - this.y2) > 30 ? (e.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2), this.swipeTimeout = setTimeout((function () {
                        t.swipe.dispatch(e, t.element)
                    }), 0)) : (this.tapTimeout = setTimeout((function () {
                        t._preventTap || t.tap.dispatch(e, t.element), t.isDoubleTap && (t.doubleTap.dispatch(e, t.element), t.isDoubleTap = !1)
                    }), 0), t.isDoubleTap || (t.singleTapTimeout = setTimeout((function () {
                        t.singleTap.dispatch(e, t.element)
                    }), 250))), this.touchEnd.dispatch(e, this.element), this.preV.x = 0, this.preV.y = 0, this.zoom = 1, this.pinchStartLen = null, this.x1 = this.x2 = this.y1 = this.y2 = null
                }
            }
        }, {
            key: "cancelAll", value: function () {
                this._preventTap = !0, clearTimeout(this.singleTapTimeout), clearTimeout(this.tapTimeout), clearTimeout(this.longTapTimeout), clearTimeout(this.swipeTimeout)
            }
        }, {
            key: "cancel", value: function (e) {
                this.cancelAll(), this.touchCancel.dispatch(e, this.element)
            }
        }, {
            key: "_cancelLongTap", value: function () {
                clearTimeout(this.longTapTimeout)
            }
        }, {
            key: "_cancelSingleTap", value: function () {
                clearTimeout(this.singleTapTimeout)
            }
        }, {
            key: "_swipeDirection", value: function (e, t, i, n) {
                return Math.abs(e - t) >= Math.abs(i - n) ? e - t > 0 ? "Left" : "Right" : i - n > 0 ? "Up" : "Down"
            }
        }, {
            key: "on", value: function (e, t) {
                this[e] && this[e].add(t)
            }
        }, {
            key: "off", value: function (e, t) {
                this[e] && this[e].del(t)
            }
        }, {
            key: "destroy", value: function () {
                return this.singleTapTimeout && clearTimeout(this.singleTapTimeout), this.tapTimeout && clearTimeout(this.tapTimeout), this.longTapTimeout && clearTimeout(this.longTapTimeout), this.swipeTimeout && clearTimeout(this.swipeTimeout), this.element.removeEventListener("touchstart", this.start), this.element.removeEventListener("touchmove", this.move), this.element.removeEventListener("touchend", this.end), this.element.removeEventListener("touchcancel", this.cancel), this.rotate.del(), this.touchStart.del(), this.multipointStart.del(), this.multipointEnd.del(), this.pinch.del(), this.swipe.del(), this.tap.del(), this.doubleTap.del(), this.longTap.del(), this.singleTap.del(), this.pressMove.del(), this.twoFingerPressMove.del(), this.touchMove.del(), this.touchEnd.del(), this.touchCancel.del(), this.preV = this.pinchStartLen = this.zoom = this.isDoubleTap = this.delta = this.last = this.now = this.tapTimeout = this.singleTapTimeout = this.longTapTimeout = this.swipeTimeout = this.x1 = this.x2 = this.y1 = this.y2 = this.preTapPosition = this.rotate = this.touchStart = this.multipointStart = this.multipointEnd = this.pinch = this.swipe = this.tap = this.doubleTap = this.longTap = this.singleTap = this.pressMove = this.touchMove = this.touchEnd = this.touchCancel = this.twoFingerPressMove = null, window.removeEventListener("scroll", this._cancelAllHandler), null
            }
        }]), e
    }();

    function W(e) {
        var t = function () {
                var e, t = document.createElement("fakeelement"), i = {
                    transition: "transitionend",
                    OTransition: "oTransitionEnd",
                    MozTransition: "transitionend",
                    WebkitTransition: "webkitTransitionEnd"
                };
                for (e in i) if (void 0 !== t.style[e]) return i[e]
            }(), i = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            n = c(e, "gslide-media") ? e : e.querySelector(".gslide-media"), s = u(n, ".ginner-container"),
            l = e.querySelector(".gslide-description");
        i > 769 && (n = s), h(n, "greset"), v(n, "translate3d(0, 0, 0)"), a(t, {
            onElement: n,
            once: !0,
            withCallback: function (e, t) {
                d(n, "greset")
            }
        }), n.style.opacity = "", l && (l.style.opacity = "")
    }

    function B(e) {
        if (e.events.hasOwnProperty("touch")) return !1;
        var t, i, n, s = y(), l = s.width, o = s.height, r = !1, a = null, g = null, f = null, p = !1, m = 1, x = 1,
            b = !1, S = !1, w = null, T = null, C = null, k = null, E = 0, A = 0, L = !1, I = !1, O = {}, P = {}, M = 0,
            z = 0, X = document.getElementById("glightbox-slider"), Y = document.querySelector(".goverlay"),
            q = new _(X, {
                touchStart: function (t) {
                    if (r = !0, (c(t.targetTouches[0].target, "ginner-container") || u(t.targetTouches[0].target, ".gslide-desc") || "a" == t.targetTouches[0].target.nodeName.toLowerCase()) && (r = !1), u(t.targetTouches[0].target, ".gslide-inline") && !c(t.targetTouches[0].target.parentNode, "gslide-inline") && (r = !1), r) {
                        if (P = t.targetTouches[0], O.pageX = t.targetTouches[0].pageX, O.pageY = t.targetTouches[0].pageY, M = t.targetTouches[0].clientX, z = t.targetTouches[0].clientY, a = e.activeSlide, g = a.querySelector(".gslide-media"), n = a.querySelector(".gslide-inline"), f = null, c(g, "gslide-image") && (f = g.querySelector("img")), (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) > 769 && (g = a.querySelector(".ginner-container")), d(Y, "greset"), t.pageX > 20 && t.pageX < window.innerWidth - 20) return;
                        t.preventDefault()
                    }
                }, touchMove: function (s) {
                    if (r && (P = s.targetTouches[0], !b && !S)) {
                        if (n && n.offsetHeight > o) {
                            var a = O.pageX - P.pageX;
                            if (Math.abs(a) <= 13) return !1
                        }
                        p = !0;
                        var h, d = s.targetTouches[0].clientX, c = s.targetTouches[0].clientY, u = M - d, m = z - c;
                        if (Math.abs(u) > Math.abs(m) ? (L = !1, I = !0) : (I = !1, L = !0), t = P.pageX - O.pageX, E = 100 * t / l, i = P.pageY - O.pageY, A = 100 * i / o, L && f && (h = 1 - Math.abs(i) / o, Y.style.opacity = h, e.settings.touchFollowAxis && (E = 0)), I && (h = 1 - Math.abs(t) / l, g.style.opacity = h, e.settings.touchFollowAxis && (A = 0)), !f) return v(g, "translate3d(".concat(E, "%, 0, 0)"));
                        v(g, "translate3d(".concat(E, "%, ").concat(A, "%, 0)"))
                    }
                }, touchEnd: function () {
                    if (r) {
                        if (p = !1, S || b) return C = w, void (k = T);
                        var t = Math.abs(parseInt(A)), i = Math.abs(parseInt(E));
                        if (!(t > 29 && f)) return t < 29 && i < 25 ? (h(Y, "greset"), Y.style.opacity = 1, W(g)) : void 0;
                        e.close()
                    }
                }, multipointEnd: function () {
                    setTimeout((function () {
                        b = !1
                    }), 50)
                }, multipointStart: function () {
                    b = !0, m = x || 1
                }, pinch: function (e) {
                    if (!f || p) return !1;
                    b = !0, f.scaleX = f.scaleY = m * e.zoom;
                    var t = m * e.zoom;
                    if (S = !0, t <= 1) return S = !1, t = 1, k = null, C = null, w = null, T = null, void f.setAttribute("style", "");
                    t > 4.5 && (t = 4.5), f.style.transform = "scale3d(".concat(t, ", ").concat(t, ", 1)"), x = t
                }, pressMove: function (e) {
                    if (S && !b) {
                        var t = P.pageX - O.pageX, i = P.pageY - O.pageY;
                        C && (t += C), k && (i += k), w = t, T = i;
                        var n = "translate3d(".concat(t, "px, ").concat(i, "px, 0)");
                        x && (n += " scale3d(".concat(x, ", ").concat(x, ", 1)")), v(f, n)
                    }
                }, swipe: function (t) {
                    if (!S) if (b) b = !1; else {
                        if ("Left" == t.direction) {
                            if (e.index == e.elements.length - 1) return W(g);
                            e.nextSlide()
                        }
                        if ("Right" == t.direction) {
                            if (0 == e.index) return W(g);
                            e.prevSlide()
                        }
                    }
                }
            });
        e.events.touch = q
    }

    var H = function () {
        function e(i, n) {
            var s = this, l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            if (t(this, e), this.img = i, this.slide = n, this.onclose = l, this.img.setZoomEvents) return !1;
            this.active = !1, this.zoomedIn = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.img.addEventListener("mousedown", (function (e) {
                return s.dragStart(e)
            }), !1), this.img.addEventListener("mouseup", (function (e) {
                return s.dragEnd(e)
            }), !1), this.img.addEventListener("mousemove", (function (e) {
                return s.drag(e)
            }), !1), this.img.addEventListener("click", (function (e) {
                return s.slide.classList.contains("dragging-nav") ? (s.zoomOut(), !1) : s.zoomedIn ? void (s.zoomedIn && !s.dragging && s.zoomOut()) : s.zoomIn()
            }), !1), this.img.setZoomEvents = !0
        }

        return n(e, [{
            key: "zoomIn", value: function () {
                var e = this.widowWidth();
                if (!(this.zoomedIn || e <= 768)) {
                    var t = this.img;
                    if (t.setAttribute("data-style", t.getAttribute("style")), t.style.maxWidth = t.naturalWidth + "px", t.style.maxHeight = t.naturalHeight + "px", t.naturalWidth > e) {
                        var i = e / 2 - t.naturalWidth / 2;
                        this.setTranslate(this.img.parentNode, i, 0)
                    }
                    this.slide.classList.add("zoomed"), this.zoomedIn = !0
                }
            }
        }, {
            key: "zoomOut", value: function () {
                this.img.parentNode.setAttribute("style", ""), this.img.setAttribute("style", this.img.getAttribute("data-style")), this.slide.classList.remove("zoomed"), this.zoomedIn = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.onclose && "function" == typeof this.onclose && this.onclose()
            }
        }, {
            key: "dragStart", value: function (e) {
                e.preventDefault(), this.zoomedIn ? ("touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset, this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset, this.initialY = e.clientY - this.yOffset), e.target === this.img && (this.active = !0, this.img.classList.add("dragging"))) : this.active = !1
            }
        }, {
            key: "dragEnd", value: function (e) {
                var t = this;
                e.preventDefault(), this.initialX = this.currentX, this.initialY = this.currentY, this.active = !1, setTimeout((function () {
                    t.dragging = !1, t.img.isDragging = !1, t.img.classList.remove("dragging")
                }), 100)
            }
        }, {
            key: "drag", value: function (e) {
                this.active && (e.preventDefault(), "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX, this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX, this.currentY = e.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.img.isDragging = !0, this.dragging = !0, this.setTranslate(this.img, this.currentX, this.currentY))
            }
        }, {
            key: "onMove", value: function (e) {
                if (this.zoomedIn) {
                    var t = e.clientX - this.img.naturalWidth / 2, i = e.clientY - this.img.naturalHeight / 2;
                    this.setTranslate(this.img, t, i)
                }
            }
        }, {
            key: "setTranslate", value: function (e, t, i) {
                e.style.transform = "translate3d(" + t + "px, " + i + "px, 0)"
            }
        }, {
            key: "widowWidth", value: function () {
                return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
            }
        }]), e
    }(), V = function () {
        function e() {
            var i = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            t(this, e);
            var s = n.dragEl, l = n.toleranceX, o = void 0 === l ? 40 : l, r = n.toleranceY, a = void 0 === r ? 65 : r,
                h = n.slide, d = void 0 === h ? null : h, c = n.instance, u = void 0 === c ? null : c;
            this.el = s, this.active = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.direction = null, this.lastDirection = null, this.toleranceX = o, this.toleranceY = a, this.toleranceReached = !1, this.dragContainer = this.el, this.slide = d, this.instance = u, this.el.addEventListener("mousedown", (function (e) {
                return i.dragStart(e)
            }), !1), this.el.addEventListener("mouseup", (function (e) {
                return i.dragEnd(e)
            }), !1), this.el.addEventListener("mousemove", (function (e) {
                return i.drag(e)
            }), !1)
        }

        return n(e, [{
            key: "dragStart", value: function (e) {
                if (this.slide.classList.contains("zoomed")) this.active = !1; else {
                    "touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset, this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset, this.initialY = e.clientY - this.yOffset);
                    var t = e.target.nodeName.toLowerCase();
                    e.target.classList.contains("nodrag") || u(e.target, ".nodrag") || -1 !== ["input", "select", "textarea", "button", "a"].indexOf(t) ? this.active = !1 : (e.preventDefault(), (e.target === this.el || "img" !== t && u(e.target, ".gslide-inline")) && (this.active = !0, this.el.classList.add("dragging"), this.dragContainer = u(e.target, ".ginner-container")))
                }
            }
        }, {
            key: "dragEnd", value: function (e) {
                var t = this;
                e && e.preventDefault(), this.initialX = 0, this.initialY = 0, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.active = !1, this.doSlideChange && (this.instance.preventOutsideClick = !0, "right" == this.doSlideChange && this.instance.prevSlide(), "left" == this.doSlideChange && this.instance.nextSlide()), this.doSlideClose && this.instance.close(), this.toleranceReached || this.setTranslate(this.dragContainer, 0, 0, !0), setTimeout((function () {
                    t.instance.preventOutsideClick = !1, t.toleranceReached = !1, t.lastDirection = null, t.dragging = !1, t.el.isDragging = !1, t.el.classList.remove("dragging"), t.slide.classList.remove("dragging-nav"), t.dragContainer.style.transform = "", t.dragContainer.style.transition = ""
                }), 100)
            }
        }, {
            key: "drag", value: function (e) {
                if (this.active) {
                    e.preventDefault(), this.slide.classList.add("dragging-nav"), "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX, this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX, this.currentY = e.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.el.isDragging = !0, this.dragging = !0, this.doSlideChange = !1, this.doSlideClose = !1;
                    var t = Math.abs(this.currentX), i = Math.abs(this.currentY);
                    if (t > 0 && t >= Math.abs(this.currentY) && (!this.lastDirection || "x" == this.lastDirection)) {
                        this.yOffset = 0, this.lastDirection = "x", this.setTranslate(this.dragContainer, this.currentX, 0);
                        var n = this.shouldChange();
                        if (!this.instance.settings.dragAutoSnap && n && (this.doSlideChange = n), this.instance.settings.dragAutoSnap && n) return this.instance.preventOutsideClick = !0, this.toleranceReached = !0, this.active = !1, this.instance.preventOutsideClick = !0, this.dragEnd(null), "right" == n && this.instance.prevSlide(), void ("left" == n && this.instance.nextSlide())
                    }
                    if (this.toleranceY > 0 && i > 0 && i >= t && (!this.lastDirection || "y" == this.lastDirection)) {
                        this.xOffset = 0, this.lastDirection = "y", this.setTranslate(this.dragContainer, 0, this.currentY);
                        var s = this.shouldClose();
                        return !this.instance.settings.dragAutoSnap && s && (this.doSlideClose = !0), void (this.instance.settings.dragAutoSnap && s && this.instance.close())
                    }
                }
            }
        }, {
            key: "shouldChange", value: function () {
                var e = !1;
                if (Math.abs(this.currentX) >= this.toleranceX) {
                    var t = this.currentX > 0 ? "right" : "left";
                    ("left" == t && this.slide !== this.slide.parentNode.lastChild || "right" == t && this.slide !== this.slide.parentNode.firstChild) && (e = t)
                }
                return e
            }
        }, {
            key: "shouldClose", value: function () {
                var e = !1;
                return Math.abs(this.currentY) >= this.toleranceY && (e = !0), e
            }
        }, {
            key: "setTranslate", value: function (e, t, i) {
                var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                e.style.transition = n ? "all .2s ease" : "", e.style.transform = "translate3d(".concat(t, "px, ").concat(i, "px, 0)")
            }
        }]), e
    }();

    function j(e, t, i, n) {
        var s = e.querySelector(".gslide-media"), l = new Image, o = "gSlideTitle_" + i, r = "gSlideDesc_" + i;
        l.addEventListener("load", (function () {
            T(n) && n()
        }), !1), l.src = t.href, "" != t.sizes && "" != t.srcset && (l.sizes = t.sizes, l.srcset = t.srcset), l.alt = "", I(t.alt) || "" === t.alt || (l.alt = t.alt), "" !== t.title && l.setAttribute("aria-labelledby", o), "" !== t.description && l.setAttribute("aria-describedby", r), t.hasOwnProperty("_hasCustomWidth") && t._hasCustomWidth && (l.style.width = t.width), t.hasOwnProperty("_hasCustomHeight") && t._hasCustomHeight && (l.style.height = t.height), s.insertBefore(l, s.firstChild)
    }

    function F(e, t, i, n) {
        var s = this, l = e.querySelector(".ginner-container"), o = "gvideo" + i, r = e.querySelector(".gslide-media"),
            a = this.getAllPlayers();
        h(l, "gvideo-container"), r.insertBefore(m('<div class="gvideo-wrapper"></div>'), r.firstChild);
        var d = e.querySelector(".gvideo-wrapper");
        S(this.settings.plyr.css, "Plyr");
        var c = t.href, u = null == t ? void 0 : t.videoProvider, g = !1;
        r.style.maxWidth = t.width, S(this.settings.plyr.js, "Plyr", (function () {
            if (!u && c.match(/vimeo\.com\/([0-9]*)/) && (u = "vimeo"), !u && (c.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || c.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || c.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) && (u = "youtube"), "local" === u || !u) {
                u = "local";
                var l = '<video id="' + o + '" ';
                l += 'style="background:#000; max-width: '.concat(t.width, ';" '), l += 'preload="metadata" ', l += 'x-webkit-airplay="allow" ', l += "playsinline ", l += "controls ", l += 'class="gvideo-local">', l += '<source src="'.concat(c, '">'), g = m(l += "</video>")
            }
            var r = g || m('<div id="'.concat(o, '" data-plyr-provider="').concat(u, '" data-plyr-embed-id="').concat(c, '"></div>'));
            h(d, "".concat(u, "-video gvideo")), d.appendChild(r), d.setAttribute("data-id", o), d.setAttribute("data-index", i);
            var v = O(s.settings.plyr, "config") ? s.settings.plyr.config : {}, f = new Plyr("#" + o, v);
            f.on("ready", (function (e) {
                a[o] = e.detail.plyr, T(n) && n()
            })), b((function () {
                return e.querySelector("iframe") && "true" == e.querySelector("iframe").dataset.ready
            }), (function () {
                s.resize(e)
            })), f.on("enterfullscreen", R), f.on("exitfullscreen", R)
        }))
    }

    function R(e) {
        var t = u(e.target, ".gslide-media");
        "enterfullscreen" === e.type && h(t, "fullscreen"), "exitfullscreen" === e.type && d(t, "fullscreen")
    }

    function G(e, t, i, n) {
        var s, l = this, o = e.querySelector(".gslide-media"),
            r = !(!O(t, "href") || !t.href) && t.href.split("#").pop().trim(),
            d = !(!O(t, "content") || !t.content) && t.content;
        if (d && (C(d) && (s = m('<div class="ginlined-content">'.concat(d, "</div>"))), k(d))) {
            "none" == d.style.display && (d.style.display = "block");
            var c = document.createElement("div");
            c.className = "ginlined-content", c.appendChild(d), s = c
        }
        if (r) {
            var u = document.getElementById(r);
            if (!u) return !1;
            var g = u.cloneNode(!0);
            g.style.height = t.height, g.style.maxWidth = t.width, h(g, "ginlined-content"), s = g
        }
        if (!s) return console.error("Unable to append inline slide content", t), !1;
        o.style.height = t.height, o.style.width = t.width, o.appendChild(s), this.events["inlineclose" + r] = a("click", {
            onElement: o.querySelectorAll(".gtrigger-close"),
            withCallback: function (e) {
                e.preventDefault(), l.close()
            }
        }), T(n) && n()
    }

    function Z(e, t, i, n) {
        var s = e.querySelector(".gslide-media"), l = function (e) {
            var t = e.url, i = e.allow, n = e.callback, s = e.appendTo, l = document.createElement("iframe");
            return l.className = "vimeo-video gvideo", l.src = t, l.style.width = "100%", l.style.height = "100%", i && l.setAttribute("allow", i), l.onload = function () {
                l.onload = null, h(l, "node-ready"), T(n) && n()
            }, s && s.appendChild(l), l
        }({url: t.href, callback: n});
        s.parentNode.style.maxWidth = t.width, s.parentNode.style.height = t.height, s.appendChild(l)
    }

    var U = function () {
            function e() {
                var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                t(this, e), this.defaults = {
                    href: "",
                    sizes: "",
                    srcset: "",
                    title: "",
                    type: "",
                    videoProvider: "",
                    description: "",
                    alt: "",
                    descPosition: "bottom",
                    effect: "",
                    width: "",
                    height: "",
                    content: !1,
                    zoomable: !0,
                    draggable: !0
                }, L(i) && (this.defaults = l(this.defaults, i))
            }

            return n(e, [{
                key: "sourceType", value: function (e) {
                    var t = e;
                    if (null !== (e = e.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|avif|svg)/)) return "image";
                    if (e.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || e.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) return "video";
                    if (e.match(/vimeo\.com\/([0-9]*)/)) return "video";
                    if (null !== e.match(/\.(mp4|ogg|webm|mov)/)) return "video";
                    if (null !== e.match(/\.(mp3|wav|wma|aac|ogg)/)) return "audio";
                    if (e.indexOf("#") > -1 && "" !== t.split("#").pop().trim()) return "inline";
                    return e.indexOf("goajax=true") > -1 ? "ajax" : "external"
                }
            }, {
                key: "parseConfig", value: function (e, t) {
                    var i = this, n = l({descPosition: t.descPosition}, this.defaults);
                    if (L(e) && !k(e)) {
                        O(e, "type") || (O(e, "content") && e.content ? e.type = "inline" : O(e, "href") && (e.type = this.sourceType(e.href)));
                        var s = l(n, e);
                        return this.setSize(s, t), s
                    }
                    var r = "", a = e.getAttribute("data-glightbox"), h = e.nodeName.toLowerCase();
                    if ("a" === h && (r = e.href), "img" === h && (r = e.src, n.alt = e.alt), n.href = r, o(n, (function (s, l) {
                        O(t, l) && "width" !== l && (n[l] = t[l]);
                        var o = e.dataset[l];
                        I(o) || (n[l] = i.sanitizeValue(o))
                    })), n.content && (n.type = "inline"), !n.type && r && (n.type = this.sourceType(r)), I(a)) {
                        if (!n.title && "a" == h) {
                            var d = e.title;
                            I(d) || "" === d || (n.title = d)
                        }
                        if (!n.title && "img" == h) {
                            var c = e.alt;
                            I(c) || "" === c || (n.title = c)
                        }
                    } else {
                        var u = [];
                        o(n, (function (e, t) {
                            u.push(";\\s?" + t)
                        })), u = u.join("\\s?:|"), "" !== a.trim() && o(n, (function (e, t) {
                            var s = a, l = new RegExp("s?" + t + "s?:s?(.*?)(" + u + "s?:|$)"), o = s.match(l);
                            if (o && o.length && o[1]) {
                                var r = o[1].trim().replace(/;\s*$/, "");
                                n[t] = i.sanitizeValue(r)
                            }
                        }))
                    }
                    if (n.description && "." === n.description.substring(0, 1)) {
                        var g;
                        try {
                            g = document.querySelector(n.description).innerHTML
                        } catch (e) {
                            if (!(e instanceof DOMException)) throw e
                        }
                        g && (n.description = g)
                    }
                    if (!n.description) {
                        var v = e.querySelector(".glightbox-desc");
                        v && (n.description = v.innerHTML)
                    }
                    return this.setSize(n, t, e), this.slideConfig = n, n
                }
            }, {
                key: "setSize", value: function (e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        n = "video" == e.type ? this.checkSize(t.videosWidth) : this.checkSize(t.width),
                        s = this.checkSize(t.height);
                    return e.width = O(e, "width") && "" !== e.width ? this.checkSize(e.width) : n, e.height = O(e, "height") && "" !== e.height ? this.checkSize(e.height) : s, i && "image" == e.type && (e._hasCustomWidth = !!i.dataset.width, e._hasCustomHeight = !!i.dataset.height), e
                }
            }, {
                key: "checkSize", value: function (e) {
                    return M(e) ? "".concat(e, "px") : e
                }
            }, {
                key: "sanitizeValue", value: function (e) {
                    return "true" !== e && "false" !== e ? e : "true" === e
                }
            }]), e
        }(), $ = function () {
            function e(i, n, s) {
                t(this, e), this.element = i, this.instance = n, this.index = s
            }

            return n(e, [{
                key: "setContent", value: function () {
                    var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (c(t, "loaded")) return !1;
                    var n = this.instance.settings, s = this.slideConfig, l = w();
                    T(n.beforeSlideLoad) && n.beforeSlideLoad({index: this.index, slide: t, player: !1});
                    var o = s.type, r = s.descPosition, a = t.querySelector(".gslide-media"),
                        d = t.querySelector(".gslide-title"), u = t.querySelector(".gslide-desc"),
                        g = t.querySelector(".gdesc-inner"), v = i, f = "gSlideTitle_" + this.index,
                        p = "gSlideDesc_" + this.index;
                    if (T(n.afterSlideLoad) && (v = function () {
                        T(i) && i(), n.afterSlideLoad({
                            index: e.index,
                            slide: t,
                            player: e.instance.getSlidePlayerInstance(e.index)
                        })
                    }), "" == s.title && "" == s.description ? g && g.parentNode.parentNode.removeChild(g.parentNode) : (d && "" !== s.title ? (d.id = f, d.innerHTML = s.title) : d.parentNode.removeChild(d), u && "" !== s.description ? (u.id = p, l && n.moreLength > 0 ? (s.smallDescription = this.slideShortDesc(s.description, n.moreLength, n.moreText), u.innerHTML = s.smallDescription, this.descriptionEvents(u, s)) : u.innerHTML = s.description) : u.parentNode.removeChild(u), h(a.parentNode, "desc-".concat(r)), h(g.parentNode, "description-".concat(r))), h(a, "gslide-".concat(o)), h(t, "loaded"), "video" !== o) {
                        if ("external" !== o) return "inline" === o ? (G.apply(this.instance, [t, s, this.index, v]), void (s.draggable && new V({
                            dragEl: t.querySelector(".gslide-inline"),
                            toleranceX: n.dragToleranceX,
                            toleranceY: n.dragToleranceY,
                            slide: t,
                            instance: this.instance
                        }))) : void ("image" !== o ? T(v) && v() : j(t, s, this.index, (function () {
                            var i = t.querySelector("img");
                            s.draggable && new V({
                                dragEl: i,
                                toleranceX: n.dragToleranceX,
                                toleranceY: n.dragToleranceY,
                                slide: t,
                                instance: e.instance
                            }), s.zoomable && i.naturalWidth > i.offsetWidth && (h(i, "zoomable"), new H(i, t, (function () {
                                e.instance.resize()
                            }))), T(v) && v()
                        })));
                        Z.apply(this, [t, s, this.index, v])
                    } else F.apply(this.instance, [t, s, this.index, v])
                }
            }, {
                key: "slideShortDesc", value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50,
                        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        n = document.createElement("div");
                    n.innerHTML = e;
                    var s = n.innerText, l = i;
                    if ((e = s.trim()).length <= t) return e;
                    var o = e.substr(0, t - 1);
                    return l ? (n = null, o + '... <a href="#" class="desc-more">' + i + "</a>") : o
                }
            }, {
                key: "descriptionEvents", value: function (e, t) {
                    var i = this, n = e.querySelector(".desc-more");
                    if (!n) return !1;
                    a("click", {
                        onElement: n, withCallback: function (e, n) {
                            e.preventDefault();
                            var s = document.body, l = u(n, ".gslide-desc");
                            if (!l) return !1;
                            l.innerHTML = t.description, h(s, "gdesc-open");
                            var o = a("click", {
                                onElement: [s, u(l, ".gslide-description")], withCallback: function (e, n) {
                                    "a" !== e.target.nodeName.toLowerCase() && (d(s, "gdesc-open"), h(s, "gdesc-closed"), l.innerHTML = t.smallDescription, i.descriptionEvents(l, t), setTimeout((function () {
                                        d(s, "gdesc-closed")
                                    }), 400), o.destroy())
                                }
                            })
                        }
                    })
                }
            }, {
                key: "create", value: function () {
                    return m(this.instance.settings.slideHTML)
                }
            }, {
                key: "getConfig", value: function () {
                    k(this.element) || this.element.hasOwnProperty("draggable") || (this.element.draggable = this.instance.settings.draggable);
                    var e = new U(this.instance.settings.slideExtraAttributes);
                    return this.slideConfig = e.parseConfig(this.element, this.instance.settings), this.slideConfig
                }
            }]), e
        }(), J = w(),
        K = null !== w() || void 0 !== document.createTouch || "ontouchstart" in window || "onmsgesturechange" in window || navigator.msMaxTouchPoints,
        Q = document.getElementsByTagName("html")[0], ee = {
            selector: ".glightbox",
            elements: null,
            skin: "clean",
            theme: "clean",
            closeButton: !0,
            startAt: null,
            autoplayVideos: !0,
            autofocusVideos: !0,
            descPosition: "bottom",
            width: "900px",
            height: "506px",
            videosWidth: "960px",
            beforeSlideChange: null,
            afterSlideChange: null,
            beforeSlideLoad: null,
            afterSlideLoad: null,
            slideInserted: null,
            slideRemoved: null,
            slideExtraAttributes: null,
            onOpen: null,
            onClose: null,
            loop: !1,
            zoomable: !0,
            draggable: !0,
            dragAutoSnap: !1,
            dragToleranceX: 40,
            dragToleranceY: 65,
            preload: !0,
            oneSlidePerOpen: !1,
            touchNavigation: !0,
            touchFollowAxis: !0,
            keyboardNavigation: !0,
            closeOnOutsideClick: !0,
            plugins: !1,
            plyr: {
                css: "https://cdn.plyr.io/3.6.12/plyr.css",
                js: "https://cdn.plyr.io/3.6.12/plyr.js",
                config: {
                    ratio: "16:9",
                    fullscreen: {enabled: !0, iosNative: !0},
                    youtube: {noCookie: !0, rel: 0, showinfo: 0, iv_load_policy: 3},
                    vimeo: {byline: !1, portrait: !1, title: !1, transparent: !1}
                }
            },
            openEffect: "zoom",
            closeEffect: "zoom",
            slideEffect: "slide",
            moreText: "See more",
            moreLength: 60,
            cssEfects: {
                fade: {in: "fadeIn", out: "fadeOut"},
                zoom: {in: "zoomIn", out: "zoomOut"},
                slide: {in: "slideInRight", out: "slideOutLeft"},
                slideBack: {in: "slideInLeft", out: "slideOutRight"},
                none: {in: "none", out: "none"}
            },
            svg: {
                close: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',
                next: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',
                prev: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'
            },
            slideHTML: '<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>',
            lightboxHTML: '<div id="glightbox-body" class="glightbox-container" tabindex="-1" role="dialog" aria-hidden="false">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gclose gbtn" aria-label="Close" data-taborder="3">{closeSVG}</button>\n    <button class="gprev gbtn" aria-label="Previous" data-taborder="2">{prevSVG}</button>\n    <button class="gnext gbtn" aria-label="Next" data-taborder="1">{nextSVG}</button>\n</div>\n</div>'
        }, te = function () {
            function e() {
                var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                t(this, e), this.customOptions = i, this.settings = l(ee, i), this.effectsClasses = this.getAnimationClasses(), this.videoPlayers = {}, this.apiEvents = [], this.fullElementsList = !1
            }

            return n(e, [{
                key: "init", value: function () {
                    var e = this, t = this.getSelector();
                    t && (this.baseEvents = a("click", {
                        onElement: t, withCallback: function (t, i) {
                            t.preventDefault(), e.open(i)
                        }
                    })), this.elements = this.getElements()
                }
            }, {
                key: "open", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (0 === this.elements.length) return !1;
                    this.activeSlide = null, this.prevActiveSlideIndex = null, this.prevActiveSlide = null;
                    var i = M(t) ? t : this.settings.startAt;
                    if (k(e)) {
                        var n = e.getAttribute("data-gallery");
                        n && (this.fullElementsList = this.elements, this.elements = this.getGalleryElements(this.elements, n)), I(i) && (i = this.getElementIndex(e)) < 0 && (i = 0)
                    }
                    M(i) || (i = 0), this.build(), g(this.overlay, "none" === this.settings.openEffect ? "none" : this.settings.cssEfects.fade.in);
                    var s = document.body, l = window.innerWidth - document.documentElement.clientWidth;
                    if (l > 0) {
                        var o = document.createElement("style");
                        o.type = "text/css", o.className = "gcss-styles", o.innerText = ".gscrollbar-fixer {margin-right: ".concat(l, "px}"), document.head.appendChild(o), h(s, "gscrollbar-fixer")
                    }
                    h(s, "glightbox-open"), h(Q, "glightbox-open"), J && (h(document.body, "glightbox-mobile"), this.settings.slideEffect = "slide"), this.showSlide(i, !0), 1 === this.elements.length ? (h(this.prevButton, "glightbox-button-hidden"), h(this.nextButton, "glightbox-button-hidden")) : (d(this.prevButton, "glightbox-button-hidden"), d(this.nextButton, "glightbox-button-hidden")), this.lightboxOpen = !0, this.trigger("open"), T(this.settings.onOpen) && this.settings.onOpen(), K && this.settings.touchNavigation && B(this), this.settings.keyboardNavigation && X(this)
                }
            }, {
                key: "openAt", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    this.open(null, e)
                }
            }, {
                key: "showSlide", value: function () {
                    var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    f(this.loader), this.index = parseInt(t);
                    var n = this.slidesContainer.querySelector(".current");
                    n && d(n, "current"), this.slideAnimateOut();
                    var s = this.slidesContainer.querySelectorAll(".gslide")[t];
                    if (c(s, "loaded")) this.slideAnimateIn(s, i), p(this.loader); else {
                        f(this.loader);
                        var l = this.elements[t], o = {
                            index: this.index,
                            slide: s,
                            slideNode: s,
                            slideConfig: l.slideConfig,
                            slideIndex: this.index,
                            trigger: l.node,
                            player: null
                        };
                        this.trigger("slide_before_load", o), l.instance.setContent(s, (function () {
                            p(e.loader), e.resize(), e.slideAnimateIn(s, i), e.trigger("slide_after_load", o)
                        }))
                    }
                    this.slideDescription = s.querySelector(".gslide-description"), this.slideDescriptionContained = this.slideDescription && c(this.slideDescription.parentNode, "gslide-media"), this.settings.preload && (this.preloadSlide(t + 1), this.preloadSlide(t - 1)), this.updateNavigationClasses(), this.activeSlide = s
                }
            }, {
                key: "preloadSlide", value: function (e) {
                    var t = this;
                    if (e < 0 || e > this.elements.length - 1) return !1;
                    if (I(this.elements[e])) return !1;
                    var i = this.slidesContainer.querySelectorAll(".gslide")[e];
                    if (c(i, "loaded")) return !1;
                    var n = this.elements[e], s = n.type, l = {
                        index: e,
                        slide: i,
                        slideNode: i,
                        slideConfig: n.slideConfig,
                        slideIndex: e,
                        trigger: n.node,
                        player: null
                    };
                    this.trigger("slide_before_load", l), "video" === s || "external" === s ? setTimeout((function () {
                        n.instance.setContent(i, (function () {
                            t.trigger("slide_after_load", l)
                        }))
                    }), 200) : n.instance.setContent(i, (function () {
                        t.trigger("slide_after_load", l)
                    }))
                }
            }, {
                key: "prevSlide", value: function () {
                    this.goToSlide(this.index - 1)
                }
            }, {
                key: "nextSlide", value: function () {
                    this.goToSlide(this.index + 1)
                }
            }, {
                key: "goToSlide", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (this.prevActiveSlide = this.activeSlide, this.prevActiveSlideIndex = this.index, !this.loop() && (e < 0 || e > this.elements.length - 1)) return !1;
                    e < 0 ? e = this.elements.length - 1 : e >= this.elements.length && (e = 0), this.showSlide(e)
                }
            }, {
                key: "insertSlide", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                    t < 0 && (t = this.elements.length);
                    var i = new $(e, this, t), n = i.getConfig(), s = l({}, n), o = i.create(),
                        r = this.elements.length - 1;
                    s.index = t, s.node = !1, s.instance = i, s.slideConfig = n, this.elements.splice(t, 0, s);
                    var a = null, h = null;
                    if (this.slidesContainer) {
                        if (t > r) this.slidesContainer.appendChild(o); else {
                            var d = this.slidesContainer.querySelectorAll(".gslide")[t];
                            this.slidesContainer.insertBefore(o, d)
                        }
                        (this.settings.preload && 0 == this.index && 0 == t || this.index - 1 == t || this.index + 1 == t) && this.preloadSlide(t), 0 === this.index && 0 === t && (this.index = 1), this.updateNavigationClasses(), a = this.slidesContainer.querySelectorAll(".gslide")[t], h = this.getSlidePlayerInstance(t), s.slideNode = a
                    }
                    this.trigger("slide_inserted", {
                        index: t,
                        slide: a,
                        slideNode: a,
                        slideConfig: n,
                        slideIndex: t,
                        trigger: null,
                        player: h
                    }), T(this.settings.slideInserted) && this.settings.slideInserted({index: t, slide: a, player: h})
                }
            }, {
                key: "removeSlide", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                    if (e < 0 || e > this.elements.length - 1) return !1;
                    var t = this.slidesContainer && this.slidesContainer.querySelectorAll(".gslide")[e];
                    t && (this.getActiveSlideIndex() == e && (e == this.elements.length - 1 ? this.prevSlide() : this.nextSlide()), t.parentNode.removeChild(t)), this.elements.splice(e, 1), this.trigger("slide_removed", e), T(this.settings.slideRemoved) && this.settings.slideRemoved(e)
                }
            }, {
                key: "slideAnimateIn", value: function (e, t) {
                    var i = this, n = e.querySelector(".gslide-media"), s = e.querySelector(".gslide-description"), l = {
                        index: this.prevActiveSlideIndex,
                        slide: this.prevActiveSlide,
                        slideNode: this.prevActiveSlide,
                        slideIndex: this.prevActiveSlide,
                        slideConfig: I(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                        trigger: I(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
                        player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                    }, o = {
                        index: this.index,
                        slide: this.activeSlide,
                        slideNode: this.activeSlide,
                        slideConfig: this.elements[this.index].slideConfig,
                        slideIndex: this.index,
                        trigger: this.elements[this.index].node,
                        player: this.getSlidePlayerInstance(this.index)
                    };
                    if (n.offsetWidth > 0 && s && (p(s), s.style.display = ""), d(e, this.effectsClasses), t) g(e, this.settings.cssEfects[this.settings.openEffect].in, (function () {
                        i.settings.autoplayVideos && i.slidePlayerPlay(e), i.trigger("slide_changed", {
                            prev: l,
                            current: o
                        }), T(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [l, o])
                    })); else {
                        var r = this.settings.slideEffect, a = "none" !== r ? this.settings.cssEfects[r].in : r;
                        this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (a = this.settings.cssEfects.slideBack.in), g(e, a, (function () {
                            i.settings.autoplayVideos && i.slidePlayerPlay(e), i.trigger("slide_changed", {
                                prev: l,
                                current: o
                            }), T(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [l, o])
                        }))
                    }
                    setTimeout((function () {
                        i.resize(e)
                    }), 100), h(e, "current")
                }
            }, {
                key: "slideAnimateOut", value: function () {
                    if (!this.prevActiveSlide) return !1;
                    var e = this.prevActiveSlide;
                    d(e, this.effectsClasses), h(e, "prev");
                    var t = this.settings.slideEffect, i = "none" !== t ? this.settings.cssEfects[t].out : t;
                    this.slidePlayerPause(e), this.trigger("slide_before_change", {
                        prev: {
                            index: this.prevActiveSlideIndex,
                            slide: this.prevActiveSlide,
                            slideNode: this.prevActiveSlide,
                            slideIndex: this.prevActiveSlideIndex,
                            slideConfig: I(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                            trigger: I(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
                            player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                        },
                        current: {
                            index: this.index,
                            slide: this.activeSlide,
                            slideNode: this.activeSlide,
                            slideIndex: this.index,
                            slideConfig: this.elements[this.index].slideConfig,
                            trigger: this.elements[this.index].node,
                            player: this.getSlidePlayerInstance(this.index)
                        }
                    }), T(this.settings.beforeSlideChange) && this.settings.beforeSlideChange.apply(this, [{
                        index: this.prevActiveSlideIndex,
                        slide: this.prevActiveSlide,
                        player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                    }, {
                        index: this.index,
                        slide: this.activeSlide,
                        player: this.getSlidePlayerInstance(this.index)
                    }]), this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (i = this.settings.cssEfects.slideBack.out), g(e, i, (function () {
                        var t = e.querySelector(".ginner-container"), i = e.querySelector(".gslide-media"),
                            n = e.querySelector(".gslide-description");
                        t.style.transform = "", i.style.transform = "", d(i, "greset"), i.style.opacity = "", n && (n.style.opacity = ""), d(e, "prev")
                    }))
                }
            }, {
                key: "getAllPlayers", value: function () {
                    return this.videoPlayers
                }
            }, {
                key: "getSlidePlayerInstance", value: function (e) {
                    var t = "gvideo" + e, i = this.getAllPlayers();
                    return !(!O(i, t) || !i[t]) && i[t]
                }
            }, {
                key: "stopSlideVideo", value: function (e) {
                    if (k(e)) {
                        var t = e.querySelector(".gvideo-wrapper");
                        t && (e = t.getAttribute("data-index"))
                    }
                    console.log("stopSlideVideo is deprecated, use slidePlayerPause");
                    var i = this.getSlidePlayerInstance(e);
                    i && i.playing && i.pause()
                }
            }, {
                key: "slidePlayerPause", value: function (e) {
                    if (k(e)) {
                        var t = e.querySelector(".gvideo-wrapper");
                        t && (e = t.getAttribute("data-index"))
                    }
                    var i = this.getSlidePlayerInstance(e);
                    i && i.playing && i.pause()
                }
            }, {
                key: "playSlideVideo", value: function (e) {
                    if (k(e)) {
                        var t = e.querySelector(".gvideo-wrapper");
                        t && (e = t.getAttribute("data-index"))
                    }
                    console.log("playSlideVideo is deprecated, use slidePlayerPlay");
                    var i = this.getSlidePlayerInstance(e);
                    i && !i.playing && i.play()
                }
            }, {
                key: "slidePlayerPlay", value: function (e) {
                    var t;
                    if (!J || null !== (t = this.settings.plyr.config) && void 0 !== t && t.muted) {
                        if (k(e)) {
                            var i = e.querySelector(".gvideo-wrapper");
                            i && (e = i.getAttribute("data-index"))
                        }
                        var n = this.getSlidePlayerInstance(e);
                        n && !n.playing && (n.play(), this.settings.autofocusVideos && n.elements.container.focus())
                    }
                }
            }, {
                key: "setElements", value: function (e) {
                    var t = this;
                    this.settings.elements = !1;
                    var i = [];
                    e && e.length && o(e, (function (e, n) {
                        var s = new $(e, t, n), o = s.getConfig(), r = l({}, o);
                        r.slideConfig = o, r.instance = s, r.index = n, i.push(r)
                    })), this.elements = i, this.lightboxOpen && (this.slidesContainer.innerHTML = "", this.elements.length && (o(this.elements, (function () {
                        var e = m(t.settings.slideHTML);
                        t.slidesContainer.appendChild(e)
                    })), this.showSlide(0, !0)))
                }
            }, {
                key: "getElementIndex", value: function (e) {
                    var t = !1;
                    return o(this.elements, (function (i, n) {
                        if (O(i, "node") && i.node == e) return t = n, !0
                    })), t
                }
            }, {
                key: "getElements", value: function () {
                    var e = this, t = [];
                    this.elements = this.elements ? this.elements : [], !I(this.settings.elements) && E(this.settings.elements) && this.settings.elements.length && o(this.settings.elements, (function (i, n) {
                        var s = new $(i, e, n), o = s.getConfig(), r = l({}, o);
                        r.node = !1, r.index = n, r.instance = s, r.slideConfig = o, t.push(r)
                    }));
                    var i = !1;
                    return this.getSelector() && (i = document.querySelectorAll(this.getSelector())), i ? (o(i, (function (i, n) {
                        var s = new $(i, e, n), o = s.getConfig(), r = l({}, o);
                        r.node = i, r.index = n, r.instance = s, r.slideConfig = o, r.gallery = i.getAttribute("data-gallery"), t.push(r)
                    })), t) : t
                }
            }, {
                key: "getGalleryElements", value: function (e, t) {
                    return e.filter((function (e) {
                        return e.gallery == t
                    }))
                }
            }, {
                key: "getSelector", value: function () {
                    return !this.settings.elements && (this.settings.selector && "data-" == this.settings.selector.substring(0, 5) ? "*[".concat(this.settings.selector, "]") : this.settings.selector)
                }
            }, {
                key: "getActiveSlide", value: function () {
                    return this.slidesContainer.querySelectorAll(".gslide")[this.index]
                }
            }, {
                key: "getActiveSlideIndex", value: function () {
                    return this.index
                }
            }, {
                key: "getAnimationClasses", value: function () {
                    var e = [];
                    for (var t in this.settings.cssEfects) if (this.settings.cssEfects.hasOwnProperty(t)) {
                        var i = this.settings.cssEfects[t];
                        e.push("g".concat(i.in)), e.push("g".concat(i.out))
                    }
                    return e.join(" ")
                }
            }, {
                key: "build", value: function () {
                    var e = this;
                    if (this.built) return !1;
                    var t = document.body.childNodes, i = [];
                    o(t, (function (e) {
                        e.parentNode == document.body && "#" !== e.nodeName.charAt(0) && e.hasAttribute && !e.hasAttribute("aria-hidden") && (i.push(e), e.setAttribute("aria-hidden", "true"))
                    }));
                    var n = O(this.settings.svg, "next") ? this.settings.svg.next : "",
                        s = O(this.settings.svg, "prev") ? this.settings.svg.prev : "",
                        l = O(this.settings.svg, "close") ? this.settings.svg.close : "", r = this.settings.lightboxHTML;
                    r = m(r = (r = (r = r.replace(/{nextSVG}/g, n)).replace(/{prevSVG}/g, s)).replace(/{closeSVG}/g, l)), document.body.appendChild(r);
                    var d = document.getElementById("glightbox-body");
                    this.modal = d;
                    var g = d.querySelector(".gclose");
                    this.prevButton = d.querySelector(".gprev"), this.nextButton = d.querySelector(".gnext"), this.overlay = d.querySelector(".goverlay"), this.loader = d.querySelector(".gloader"), this.slidesContainer = document.getElementById("glightbox-slider"), this.bodyHiddenChildElms = i, this.events = {}, h(this.modal, "glightbox-" + this.settings.skin), this.settings.closeButton && g && (this.events.close = a("click", {
                        onElement: g,
                        withCallback: function (t, i) {
                            t.preventDefault(), e.close()
                        }
                    })), g && !this.settings.closeButton && g.parentNode.removeChild(g), this.nextButton && (this.events.next = a("click", {
                        onElement: this.nextButton,
                        withCallback: function (t, i) {
                            t.preventDefault(), e.nextSlide()
                        }
                    })), this.prevButton && (this.events.prev = a("click", {
                        onElement: this.prevButton,
                        withCallback: function (t, i) {
                            t.preventDefault(), e.prevSlide()
                        }
                    })), this.settings.closeOnOutsideClick && (this.events.outClose = a("click", {
                        onElement: d,
                        withCallback: function (t, i) {
                            e.preventOutsideClick || c(document.body, "glightbox-mobile") || u(t.target, ".ginner-container") || u(t.target, ".gbtn") || c(t.target, "gnext") || c(t.target, "gprev") || e.close()
                        }
                    })), o(this.elements, (function (t, i) {
                        e.slidesContainer.appendChild(t.instance.create()), t.slideNode = e.slidesContainer.querySelectorAll(".gslide")[i]
                    })), K && h(document.body, "glightbox-touch"), this.events.resize = a("resize", {
                        onElement: window,
                        withCallback: function () {
                            e.resize()
                        }
                    }), this.built = !0
                }
            }, {
                key: "resize", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if ((e = e || this.activeSlide) && !c(e, "zoomed")) {
                        var t = y(), i = e.querySelector(".gvideo-wrapper"), n = e.querySelector(".gslide-image"),
                            s = this.slideDescription, l = t.width, o = t.height;
                        if (l <= 768 ? h(document.body, "glightbox-mobile") : d(document.body, "glightbox-mobile"), i || n) {
                            var r = !1;
                            if (s && (c(s, "description-bottom") || c(s, "description-top")) && !c(s, "gabsolute") && (r = !0), n) if (l <= 768) n.querySelector("img"); else if (r) {
                                var a = s.offsetHeight, u = n.querySelector("img");
                                u.setAttribute("style", "max-height: calc(100vh - ".concat(a, "px)")), s.setAttribute("style", "max-width: ".concat(u.offsetWidth, "px;"))
                            }
                            if (i) {
                                var g = O(this.settings.plyr.config, "ratio") ? this.settings.plyr.config.ratio : "";
                                if (!g) {
                                    var v = i.clientWidth, f = i.clientHeight, p = v / f;
                                    g = "".concat(v / p, ":").concat(f / p)
                                }
                                var m = g.split(":"), x = this.settings.videosWidth, b = this.settings.videosWidth,
                                    S = (b = M(x) || -1 !== x.indexOf("px") ? parseInt(x) : -1 !== x.indexOf("vw") ? l * parseInt(x) / 100 : -1 !== x.indexOf("vh") ? o * parseInt(x) / 100 : -1 !== x.indexOf("%") ? l * parseInt(x) / 100 : parseInt(i.clientWidth)) / (parseInt(m[0]) / parseInt(m[1]));
                                if (S = Math.floor(S), r && (o -= s.offsetHeight), b > l || S > o || o < S && l > b) {
                                    var w = i.offsetWidth, T = i.offsetHeight, C = o / T, k = {width: w * C, height: T * C};
                                    i.parentNode.setAttribute("style", "max-width: ".concat(k.width, "px")), r && s.setAttribute("style", "max-width: ".concat(k.width, "px;"))
                                } else i.parentNode.style.maxWidth = "".concat(x), r && s.setAttribute("style", "max-width: ".concat(x, ";"))
                            }
                        }
                    }
                }
            }, {
                key: "reload", value: function () {
                    this.init()
                }
            }, {
                key: "updateNavigationClasses", value: function () {
                    var e = this.loop();
                    d(this.nextButton, "disabled"), d(this.prevButton, "disabled"), 0 == this.index && this.elements.length - 1 == 0 ? (h(this.prevButton, "disabled"), h(this.nextButton, "disabled")) : 0 !== this.index || e ? this.index !== this.elements.length - 1 || e || h(this.nextButton, "disabled") : h(this.prevButton, "disabled")
                }
            }, {
                key: "loop", value: function () {
                    var e = O(this.settings, "loopAtEnd") ? this.settings.loopAtEnd : null;
                    return e = O(this.settings, "loop") ? this.settings.loop : e, e
                }
            }, {
                key: "close", value: function () {
                    var e = this;
                    if (!this.lightboxOpen) {
                        if (this.events) {
                            for (var t in this.events) this.events.hasOwnProperty(t) && this.events[t].destroy();
                            this.events = null
                        }
                        return !1
                    }
                    if (this.closing) return !1;
                    this.closing = !0, this.slidePlayerPause(this.activeSlide), this.fullElementsList && (this.elements = this.fullElementsList), this.bodyHiddenChildElms.length && o(this.bodyHiddenChildElms, (function (e) {
                        e.removeAttribute("aria-hidden")
                    })), h(this.modal, "glightbox-closing"), g(this.overlay, "none" == this.settings.openEffect ? "none" : this.settings.cssEfects.fade.out), g(this.activeSlide, this.settings.cssEfects[this.settings.closeEffect].out, (function () {
                        if (e.activeSlide = null, e.prevActiveSlideIndex = null, e.prevActiveSlide = null, e.built = !1, e.events) {
                            for (var t in e.events) e.events.hasOwnProperty(t) && e.events[t].destroy();
                            e.events = null
                        }
                        var i = document.body;
                        d(Q, "glightbox-open"), d(i, "glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"), e.modal.parentNode.removeChild(e.modal), e.trigger("close"), T(e.settings.onClose) && e.settings.onClose();
                        var n = document.querySelector(".gcss-styles");
                        n && n.parentNode.removeChild(n), e.lightboxOpen = !1, e.closing = null
                    }))
                }
            }, {
                key: "destroy", value: function () {
                    this.close(), this.clearAllEvents(), this.baseEvents && this.baseEvents.destroy()
                }
            }, {
                key: "on", value: function (e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (!e || !T(t)) throw new TypeError("Event name and callback must be defined");
                    this.apiEvents.push({evt: e, once: i, callback: t})
                }
            }, {
                key: "once", value: function (e, t) {
                    this.on(e, t, !0)
                }
            }, {
                key: "trigger", value: function (e) {
                    var t = this, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = [];
                    o(this.apiEvents, (function (t, s) {
                        var l = t.evt, o = t.once, r = t.callback;
                        l == e && (r(i), o && n.push(s))
                    })), n.length && o(n, (function (e) {
                        return t.apiEvents.splice(e, 1)
                    }))
                }
            }, {
                key: "clearAllEvents", value: function () {
                    this.apiEvents.splice(0, this.apiEvents.length)
                }
            }, {
                key: "version", value: function () {
                    return "3.1.0"
                }
            }]), e
        }();
    return function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = new te(e);
        return t.init(), t
    }
}));
"object" == typeof navigator && function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Plyr", t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Plyr = t()
}(this, (function () {
    "use strict";

    function e(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i, e
    }

    function t(e, t) {
        for (var i = 0; i < t.length; i++) {
            var s = t[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
        }
    }

    function i(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i, e
    }

    function s(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(e);
            t && (s = s.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), i.push.apply(i, s)
        }
        return i
    }

    function n(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? s(Object(n), !0).forEach((function (t) {
                i(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    var a = {addCSS: !0, thumbWidth: 15, watch: !0};

    function l(e, t) {
        return function () {
            return Array.from(document.querySelectorAll(t)).includes(this)
        }.call(e, t)
    }

    var o = function (e) {
        return null != e ? e.constructor : null
    }, r = function (e, t) {
        return !!(e && t && e instanceof t)
    }, c = function (e) {
        return null == e
    }, h = function (e) {
        return o(e) === Object
    }, u = function (e) {
        return o(e) === String
    }, d = function (e) {
        return Array.isArray(e)
    }, m = function (e) {
        return r(e, NodeList)
    }, p = u, g = d, f = m, b = function (e) {
        return r(e, Element)
    }, y = function (e) {
        return r(e, Event)
    }, v = function (e) {
        return c(e) || (u(e) || d(e) || m(e)) && !e.length || h(e) && !Object.keys(e).length
    };

    function w(e, t) {
        if (1 > t) {
            var i = function (e) {
                var t = "".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0
            }(t);
            return parseFloat(e.toFixed(i))
        }
        return Math.round(e / t) * t
    }

    var T = function () {
        function e(t, i) {
            (function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            })(this, e), b(t) ? this.element = t : p(t) && (this.element = document.querySelector(t)), b(this.element) && v(this.element.rangeTouch) && (this.config = n({}, a, {}, i), this.init())
        }

        return function (e, i, s) {
            i && t(e.prototype, i), s && t(e, s)
        }(e, [{
            key: "init", value: function () {
                e.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(!0), this.element.rangeTouch = this)
            }
        }, {
            key: "destroy", value: function () {
                e.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(!1), this.element.rangeTouch = null)
            }
        }, {
            key: "listeners", value: function (e) {
                var t = this, i = e ? "addEventListener" : "removeEventListener";
                ["touchstart", "touchmove", "touchend"].forEach((function (e) {
                    t.element[i](e, (function (e) {
                        return t.set(e)
                    }), !1)
                }))
            }
        }, {
            key: "get", value: function (t) {
                if (!e.enabled || !y(t)) return null;
                var i, s = t.target, n = t.changedTouches[0], a = parseFloat(s.getAttribute("min")) || 0,
                    l = parseFloat(s.getAttribute("max")) || 100, o = parseFloat(s.getAttribute("step")) || 1,
                    r = s.getBoundingClientRect(), c = 100 / r.width * (this.config.thumbWidth / 2) / 100;
                return 0 > (i = 100 / r.width * (n.clientX - r.left)) ? i = 0 : 100 < i && (i = 100), 50 > i ? i -= (100 - 2 * i) * c : 50 < i && (i += 2 * (i - 50) * c), a + w(i / 100 * (l - a), o)
            }
        }, {
            key: "set", value: function (t) {
                e.enabled && y(t) && !t.target.disabled && (t.preventDefault(), t.target.value = this.get(t), function (e, t) {
                    if (e && t) {
                        var i = new Event(t, {bubbles: !0});
                        e.dispatchEvent(i)
                    }
                }(t.target, "touchend" === t.type ? "change" : "input"))
            }
        }], [{
            key: "setup", value: function (t) {
                var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, s = null;
                if (v(t) || p(t) ? s = Array.from(document.querySelectorAll(p(t) ? t : 'input[type="range"]')) : b(t) ? s = [t] : f(t) ? s = Array.from(t) : g(t) && (s = t.filter(b)), v(s)) return null;
                var o = n({}, a, {}, i);
                if (p(t) && o.watch) {
                    var r = new MutationObserver((function (i) {
                        Array.from(i).forEach((function (i) {
                            Array.from(i.addedNodes).forEach((function (i) {
                                b(i) && l(i, t) && new e(i, o)
                            }))
                        }))
                    }));
                    r.observe(document.body, {childList: !0, subtree: !0})
                }
                return s.map((function (t) {
                    return new e(t, i)
                }))
            }
        }, {
            key: "enabled", get: function () {
                return "ontouchstart" in document.documentElement
            }
        }]), e
    }();
    const k = e => null != e ? e.constructor : null, C = (e, t) => Boolean(e && t && e instanceof t),
        A = e => null == e, S = e => k(e) === Object, E = e => k(e) === String, P = e => k(e) === Function,
        N = e => Array.isArray(e), x = e => C(e, NodeList),
        M = e => A(e) || (E(e) || N(e) || x(e)) && !e.length || S(e) && !Object.keys(e).length;
    var I = A, L = S, $ = e => k(e) === Number && !Number.isNaN(e), _ = E, O = e => k(e) === Boolean, j = P, q = N,
        D = x,
        H = e => null !== e && "object" == typeof e && 1 === e.nodeType && "object" == typeof e.style && "object" == typeof e.ownerDocument,
        F = e => C(e, Event), R = e => C(e, KeyboardEvent), V = e => C(e, TextTrack) || !A(e) && E(e.kind),
        B = e => C(e, Promise) && P(e.then), U = e => {
            if (C(e, window.URL)) return !0;
            if (!E(e)) return !1;
            let t = e;
            e.startsWith("http://") && e.startsWith("https://") || (t = `http://${e}`);
            try {
                return !M(new URL(t).hostname)
            } catch (e) {
                return !1
            }
        }, W = M;
    const z = (() => {
        const e = document.createElement("span"), t = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        }, i = Object.keys(t).find((t => void 0 !== e.style[t]));
        return !!_(i) && t[i]
    })();

    function K(e, t) {
        setTimeout((() => {
            try {
                e.hidden = !0, e.offsetHeight, e.hidden = !1
            } catch (e) {
            }
        }), t)
    }

    const Y = {
        isIE: Boolean(window.document.documentMode),
        isEdge: window.navigator.userAgent.includes("Edge"),
        isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent),
        isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
        isIos: "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || /(iPad|iPhone|iPod)/gi.test(navigator.platform)
    };

    function Q(e, t) {
        return t.split(".").reduce(((e, t) => e && e[t]), e)
    }

    function X(e = {}, ...t) {
        if (!t.length) return e;
        const i = t.shift();
        return L(i) ? (Object.keys(i).forEach((t => {
            L(i[t]) ? (Object.keys(e).includes(t) || Object.assign(e, {[t]: {}}), X(e[t], i[t])) : Object.assign(e, {[t]: i[t]})
        })), X(e, ...t)) : e
    }

    function J(e, t) {
        const i = e.length ? e : [e];
        Array.from(i).reverse().forEach(((e, i) => {
            const s = i > 0 ? t.cloneNode(!0) : t, n = e.parentNode, a = e.nextSibling;
            s.appendChild(e), a ? n.insertBefore(s, a) : n.appendChild(s)
        }))
    }

    function G(e, t) {
        H(e) && !W(t) && Object.entries(t).filter((([, e]) => !I(e))).forEach((([t, i]) => e.setAttribute(t, i)))
    }

    function Z(e, t, i) {
        const s = document.createElement(e);
        return L(t) && G(s, t), _(i) && (s.innerText = i), s
    }

    function ee(e, t, i, s) {
        H(t) && t.appendChild(Z(e, i, s))
    }

    function te(e) {
        D(e) || q(e) ? Array.from(e).forEach(te) : H(e) && H(e.parentNode) && e.parentNode.removeChild(e)
    }

    function ie(e) {
        if (!H(e)) return;
        let {length: t} = e.childNodes;
        for (; t > 0;) e.removeChild(e.lastChild), t -= 1
    }

    function se(e, t) {
        return H(t) && H(t.parentNode) && H(e) ? (t.parentNode.replaceChild(e, t), e) : null
    }

    function ne(e, t) {
        if (!_(e) || W(e)) return {};
        const i = {}, s = X({}, t);
        return e.split(",").forEach((e => {
            const t = e.trim(), n = t.replace(".", ""), a = t.replace(/[[\]]/g, "").split("="), [l] = a,
                o = a.length > 1 ? a[1].replace(/["']/g, "") : "";
            switch (t.charAt(0)) {
                case".":
                    _(s.class) ? i.class = `${s.class} ${n}` : i.class = n;
                    break;
                case"#":
                    i.id = t.replace("#", "");
                    break;
                case"[":
                    i[l] = o
            }
        })), X(s, i)
    }

    function ae(e, t) {
        if (!H(e)) return;
        let i = t;
        O(i) || (i = !e.hidden), e.hidden = i
    }

    function le(e, t, i) {
        if (D(e)) return Array.from(e).map((e => le(e, t, i)));
        if (H(e)) {
            let s = "toggle";
            return void 0 !== i && (s = i ? "add" : "remove"), e.classList[s](t), e.classList.contains(t)
        }
        return !1
    }

    function oe(e, t) {
        return H(e) && e.classList.contains(t)
    }

    function re(e, t) {
        const {prototype: i} = Element;
        return (i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector || function () {
            return Array.from(document.querySelectorAll(t)).includes(this)
        }).call(e, t)
    }

    function ce(e) {
        return this.elements.container.querySelectorAll(e)
    }

    function he(e) {
        return this.elements.container.querySelector(e)
    }

    function ue(e = null, t = !1) {
        H(e) && (e.focus({preventScroll: !0}), t && le(e, this.config.classNames.tabFocus))
    }

    const de = {
        "audio/ogg": "vorbis",
        "audio/wav": "1",
        "video/webm": "vp8, vorbis",
        "video/mp4": "avc1.42E01E, mp4a.40.2",
        "video/ogg": "theora"
    }, me = {
        audio: "canPlayType" in document.createElement("audio"),
        video: "canPlayType" in document.createElement("video"),
        check(e, t, i) {
            const s = Y.isIPhone && i && me.playsinline, n = me[e] || "html5" !== t;
            return {api: n, ui: n && me.rangeInput && ("video" !== e || !Y.isIPhone || s)}
        },
        pip: !(Y.isIPhone || !j(Z("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || Z("video").disablePictureInPicture)),
        airplay: j(window.WebKitPlaybackTargetAvailabilityEvent),
        playsinline: "playsInline" in document.createElement("video"),
        mime(e) {
            if (W(e)) return !1;
            const [t] = e.split("/");
            let i = e;
            if (!this.isHTML5 || t !== this.type) return !1;
            Object.keys(de).includes(i) && (i += `; codecs="${de[e]}"`);
            try {
                return Boolean(i && this.media.canPlayType(i).replace(/no/, ""))
            } catch (e) {
                return !1
            }
        },
        textTracks: "textTracks" in document.createElement("video"),
        rangeInput: (() => {
            const e = document.createElement("input");
            return e.type = "range", "range" === e.type
        })(),
        touch: "ontouchstart" in document.documentElement,
        transitions: !1 !== z,
        reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
    }, pe = (() => {
        let e = !1;
        try {
            const t = Object.defineProperty({}, "passive", {get: () => (e = !0, null)});
            window.addEventListener("test", null, t), window.removeEventListener("test", null, t)
        } catch (e) {
        }
        return e
    })();

    function ge(e, t, i, s = !1, n = !0, a = !1) {
        if (!e || !("addEventListener" in e) || W(t) || !j(i)) return;
        const l = t.split(" ");
        let o = a;
        pe && (o = {passive: n, capture: a}), l.forEach((t => {
            this && this.eventListeners && s && this.eventListeners.push({
                element: e,
                type: t,
                callback: i,
                options: o
            }), e[s ? "addEventListener" : "removeEventListener"](t, i, o)
        }))
    }

    function fe(e, t = "", i, s = !0, n = !1) {
        ge.call(this, e, t, i, !0, s, n)
    }

    function be(e, t = "", i, s = !0, n = !1) {
        ge.call(this, e, t, i, !1, s, n)
    }

    function ye(e, t = "", i, s = !0, n = !1) {
        const a = (...l) => {
            be(e, t, a, s, n), i.apply(this, l)
        };
        ge.call(this, e, t, a, !0, s, n)
    }

    function ve(e, t = "", i = !1, s = {}) {
        if (!H(e) || W(t)) return;
        const n = new CustomEvent(t, {bubbles: i, detail: {...s, plyr: this}});
        e.dispatchEvent(n)
    }

    function we() {
        this && this.eventListeners && (this.eventListeners.forEach((e => {
            const {element: t, type: i, callback: s, options: n} = e;
            t.removeEventListener(i, s, n)
        })), this.eventListeners = [])
    }

    function Te() {
        return new Promise((e => this.ready ? setTimeout(e, 0) : fe.call(this, this.elements.container, "ready", e))).then((() => {
        }))
    }

    function ke(e) {
        B(e) && e.then(null, (() => {
        }))
    }

    function Ce(e) {
        return q(e) ? e.filter(((t, i) => e.indexOf(t) === i)) : e
    }

    function Ae(e, t) {
        return q(e) && e.length ? e.reduce(((e, i) => Math.abs(i - t) < Math.abs(e - t) ? i : e)) : null
    }

    function Se(e) {
        return !(!window || !window.CSS) && window.CSS.supports(e)
    }

    const Ee = [[1, 1], [4, 3], [3, 4], [5, 4], [4, 5], [3, 2], [2, 3], [16, 10], [10, 16], [16, 9], [9, 16], [21, 9], [9, 21], [32, 9], [9, 32]].reduce(((e, [t, i]) => ({
        ...e,
        [t / i]: [t, i]
    })), {});

    function Pe(e) {
        if (!(q(e) || _(e) && e.includes(":"))) return !1;
        return (q(e) ? e : e.split(":")).map(Number).every($)
    }

    function Ne(e) {
        if (!q(e) || !e.every($)) return null;
        const [t, i] = e, s = (e, t) => 0 === t ? e : s(t, e % t), n = s(t, i);
        return [t / n, i / n]
    }

    function xe(e) {
        const t = e => Pe(e) ? e.split(":").map(Number) : null;
        let i = t(e);
        if (null === i && (i = t(this.config.ratio)), null === i && !W(this.embed) && q(this.embed.ratio) && ({ratio: i} = this.embed), null === i && this.isHTML5) {
            const {videoWidth: e, videoHeight: t} = this.media;
            i = [e, t]
        }
        return Ne(i)
    }

    function Me(e) {
        if (!this.isVideo) return {};
        const {wrapper: t} = this.elements, i = xe.call(this, e);
        if (!q(i)) return {};
        const [s, n] = Ne(i), a = 100 / s * n;
        if (Se(`aspect-ratio: ${s}/${n}`) ? t.style.aspectRatio = `${s}/${n}` : t.style.paddingBottom = `${a}%`, this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
            const e = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10),
                i = (e - a) / (e / 50);
            this.fullscreen.active ? t.style.paddingBottom = null : this.media.style.transform = `translateY(-${i}%)`
        } else this.isHTML5 && t.classList.add(this.config.classNames.videoFixedRatio);
        return {padding: a, ratio: i}
    }

    function Ie(e, t, i = .05) {
        const s = e / t, n = Ae(Object.keys(Ee), s);
        return Math.abs(n - s) <= i ? Ee[n] : [e, t]
    }

    const Le = {
        getSources() {
            if (!this.isHTML5) return [];
            return Array.from(this.media.querySelectorAll("source")).filter((e => {
                const t = e.getAttribute("type");
                return !!W(t) || me.mime.call(this, t)
            }))
        }, getQualityOptions() {
            return this.config.quality.forced ? this.config.quality.options : Le.getSources.call(this).map((e => Number(e.getAttribute("size")))).filter(Boolean)
        }, setup() {
            if (!this.isHTML5) return;
            const e = this;
            e.options.speed = e.config.speed.options, W(this.config.ratio) || Me.call(e), Object.defineProperty(e.media, "quality", {
                get() {
                    const t = Le.getSources.call(e).find((t => t.getAttribute("src") === e.source));
                    return t && Number(t.getAttribute("size"))
                }, set(t) {
                    if (e.quality !== t) {
                        if (e.config.quality.forced && j(e.config.quality.onChange)) e.config.quality.onChange(t); else {
                            const i = Le.getSources.call(e).find((e => Number(e.getAttribute("size")) === t));
                            if (!i) return;
                            const {currentTime: s, paused: n, preload: a, readyState: l, playbackRate: o} = e.media;
                            e.media.src = i.getAttribute("src"), ("none" !== a || l) && (e.once("loadedmetadata", (() => {
                                e.speed = o, e.currentTime = s, n || ke(e.play())
                            })), e.media.load())
                        }
                        ve.call(e, e.media, "qualitychange", !1, {quality: t})
                    }
                }
            })
        }, cancelRequests() {
            this.isHTML5 && (te(Le.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"))
        }
    };

    function $e(e, ...t) {
        return W(e) ? e : e.toString().replace(/{(\d+)}/g, ((e, i) => t[i].toString()))
    }

    const _e = (e = "", t = "", i = "") => e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), i.toString()),
        Oe = (e = "") => e.toString().replace(/\w\S*/g, (e => e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()));

    function je(e = "") {
        let t = e.toString();
        return t = function (e = "") {
            let t = e.toString();
            return t = _e(t, "-", " "), t = _e(t, "_", " "), t = Oe(t), _e(t, " ", "")
        }(t), t.charAt(0).toLowerCase() + t.slice(1)
    }

    function qe(e) {
        const t = document.createElement("div");
        return t.appendChild(e), t.innerHTML
    }

    const De = {pip: "PIP", airplay: "AirPlay", html5: "HTML5", vimeo: "Vimeo", youtube: "YouTube"}, He = {
        get(e = "", t = {}) {
            if (W(e) || W(t)) return "";
            let i = Q(t.i18n, e);
            if (W(i)) return Object.keys(De).includes(e) ? De[e] : "";
            const s = {"{seektime}": t.seekTime, "{title}": t.title};
            return Object.entries(s).forEach((([e, t]) => {
                i = _e(i, e, t)
            })), i
        }
    };

    class Fe {
        constructor(t) {
            e(this, "get", (e => {
                if (!Fe.supported || !this.enabled) return null;
                const t = window.localStorage.getItem(this.key);
                if (W(t)) return null;
                const i = JSON.parse(t);
                return _(e) && e.length ? i[e] : i
            })), e(this, "set", (e => {
                if (!Fe.supported || !this.enabled) return;
                if (!L(e)) return;
                let t = this.get();
                W(t) && (t = {}), X(t, e);
                try {
                    window.localStorage.setItem(this.key, JSON.stringify(t))
                } catch (e) {
                }
            })), this.enabled = t.config.storage.enabled, this.key = t.config.storage.key
        }

        static get supported() {
            try {
                if (!("localStorage" in window)) return !1;
                const e = "___test";
                return window.localStorage.setItem(e, e), window.localStorage.removeItem(e), !0
            } catch (e) {
                return !1
            }
        }
    }

    function Re(e, t = "text") {
        return new Promise(((i, s) => {
            try {
                const s = new XMLHttpRequest;
                if (!("withCredentials" in s)) return;
                s.addEventListener("load", (() => {
                    if ("text" === t) try {
                        i(JSON.parse(s.responseText))
                    } catch (e) {
                        i(s.responseText)
                    } else i(s.response)
                })), s.addEventListener("error", (() => {
                    throw new Error(s.status)
                })), s.open("GET", e, !0), s.responseType = t, s.send()
            } catch (e) {
                s(e)
            }
        }))
    }

    function Ve(e, t) {
        if (!_(e)) return;
        const i = _(t);
        let s = !1;
        const n = () => null !== document.getElementById(t), a = (e, t) => {
            e.innerHTML = t, i && n() || document.body.insertAdjacentElement("afterbegin", e)
        };
        if (!i || !n()) {
            const n = Fe.supported, l = document.createElement("div");
            if (l.setAttribute("hidden", ""), i && l.setAttribute("id", t), n) {
                const e = window.localStorage.getItem(`cache-${t}`);
                if (s = null !== e, s) {
                    const t = JSON.parse(e);
                    a(l, t.content)
                }
            }
            Re(e).then((e => {
                if (!W(e)) {
                    if (n) try {
                        window.localStorage.setItem(`cache-${t}`, JSON.stringify({content: e}))
                    } catch (e) {
                    }
                    a(l, e)
                }
            })).catch((() => {
            }))
        }
    }

    const Be = e => Math.trunc(e / 60 / 60 % 60, 10);

    function Ue(e = 0, t = !1, i = !1) {
        if (!$(e)) return Ue(void 0, t, i);
        const s = e => `0${e}`.slice(-2);
        let n = Be(e);
        const a = (l = e, Math.trunc(l / 60 % 60, 10));
        var l;
        const o = (e => Math.trunc(e % 60, 10))(e);
        return n = t || n > 0 ? `${n}:` : "", `${i && e > 0 ? "-" : ""}${n}${s(a)}:${s(o)}`
    }

    const We = {
        getIconUrl() {
            const e = new URL(this.config.iconUrl, window.location),
                t = window.location.host ? window.location.host : window.top.location.host,
                i = e.host !== t || Y.isIE && !window.svg4everybody;
            return {url: this.config.iconUrl, cors: i}
        }, findElements() {
            try {
                return this.elements.controls = he.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
                    play: ce.call(this, this.config.selectors.buttons.play),
                    pause: he.call(this, this.config.selectors.buttons.pause),
                    restart: he.call(this, this.config.selectors.buttons.restart),
                    rewind: he.call(this, this.config.selectors.buttons.rewind),
                    fastForward: he.call(this, this.config.selectors.buttons.fastForward),
                    mute: he.call(this, this.config.selectors.buttons.mute),
                    pip: he.call(this, this.config.selectors.buttons.pip),
                    airplay: he.call(this, this.config.selectors.buttons.airplay),
                    settings: he.call(this, this.config.selectors.buttons.settings),
                    captions: he.call(this, this.config.selectors.buttons.captions),
                    fullscreen: he.call(this, this.config.selectors.buttons.fullscreen)
                }, this.elements.progress = he.call(this, this.config.selectors.progress), this.elements.inputs = {
                    seek: he.call(this, this.config.selectors.inputs.seek),
                    volume: he.call(this, this.config.selectors.inputs.volume)
                }, this.elements.display = {
                    buffer: he.call(this, this.config.selectors.display.buffer),
                    currentTime: he.call(this, this.config.selectors.display.currentTime),
                    duration: he.call(this, this.config.selectors.display.duration)
                }, H(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(`.${this.config.classNames.tooltip}`)), !0
            } catch (e) {
                return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1
            }
        }, createIcon(e, t) {
            const i = "http://www.w3.org/2000/svg", s = We.getIconUrl.call(this),
                n = `${s.cors ? "" : s.url}#${this.config.iconPrefix}`, a = document.createElementNS(i, "svg");
            G(a, X(t, {"aria-hidden": "true", focusable: "false"}));
            const l = document.createElementNS(i, "use"), o = `${n}-${e}`;
            return "href" in l && l.setAttributeNS("http://www.w3.org/1999/xlink", "href", o), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", o), a.appendChild(l), a
        }, createLabel(e, t = {}) {
            const i = He.get(e, this.config);
            return Z("span", {...t, class: [t.class, this.config.classNames.hidden].filter(Boolean).join(" ")}, i)
        }, createBadge(e) {
            if (W(e)) return null;
            const t = Z("span", {class: this.config.classNames.menu.value});
            return t.appendChild(Z("span", {class: this.config.classNames.menu.badge}, e)), t
        }, createButton(e, t) {
            const i = X({}, t);
            let s = je(e);
            const n = {element: "button", toggle: !1, label: null, icon: null, labelPressed: null, iconPressed: null};
            switch (["element", "icon", "label"].forEach((e => {
                Object.keys(i).includes(e) && (n[e] = i[e], delete i[e])
            })), "button" !== n.element || Object.keys(i).includes("type") || (i.type = "button"), Object.keys(i).includes("class") ? i.class.split(" ").some((e => e === this.config.classNames.control)) || X(i, {class: `${i.class} ${this.config.classNames.control}`}) : i.class = this.config.classNames.control, e) {
                case"play":
                    n.toggle = !0, n.label = "play", n.labelPressed = "pause", n.icon = "play", n.iconPressed = "pause";
                    break;
                case"mute":
                    n.toggle = !0, n.label = "mute", n.labelPressed = "unmute", n.icon = "volume", n.iconPressed = "muted";
                    break;
                case"captions":
                    n.toggle = !0, n.label = "enableCaptions", n.labelPressed = "disableCaptions", n.icon = "captions-off", n.iconPressed = "captions-on";
                    break;
                case"fullscreen":
                    n.toggle = !0, n.label = "enterFullscreen", n.labelPressed = "exitFullscreen", n.icon = "enter-fullscreen", n.iconPressed = "exit-fullscreen";
                    break;
                case"play-large":
                    i.class += ` ${this.config.classNames.control}--overlaid`, s = "play", n.label = "play", n.icon = "play";
                    break;
                default:
                    W(n.label) && (n.label = s), W(n.icon) && (n.icon = e)
            }
            const a = Z(n.element);
            return n.toggle ? (a.appendChild(We.createIcon.call(this, n.iconPressed, {class: "icon--pressed"})), a.appendChild(We.createIcon.call(this, n.icon, {class: "icon--not-pressed"})), a.appendChild(We.createLabel.call(this, n.labelPressed, {class: "label--pressed"})), a.appendChild(We.createLabel.call(this, n.label, {class: "label--not-pressed"}))) : (a.appendChild(We.createIcon.call(this, n.icon)), a.appendChild(We.createLabel.call(this, n.label))), X(i, ne(this.config.selectors.buttons[s], i)), G(a, i), "play" === s ? (q(this.elements.buttons[s]) || (this.elements.buttons[s] = []), this.elements.buttons[s].push(a)) : this.elements.buttons[s] = a, a
        }, createRange(e, t) {
            const i = Z("input", X(ne(this.config.selectors.inputs[e]), {
                type: "range",
                min: 0,
                max: 100,
                step: .01,
                value: 0,
                autocomplete: "off",
                role: "slider",
                "aria-label": He.get(e, this.config),
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-valuenow": 0
            }, t));
            return this.elements.inputs[e] = i, We.updateRangeFill.call(this, i), T.setup(i), i
        }, createProgress(e, t) {
            const i = Z("progress", X(ne(this.config.selectors.display[e]), {
                min: 0,
                max: 100,
                value: 0,
                role: "progressbar",
                "aria-hidden": !0
            }, t));
            if ("volume" !== e) {
                i.appendChild(Z("span", null, "0"));
                const t = {played: "played", buffer: "buffered"}[e], s = t ? He.get(t, this.config) : "";
                i.innerText = `% ${s.toLowerCase()}`
            }
            return this.elements.display[e] = i, i
        }, createTime(e, t) {
            const i = ne(this.config.selectors.display[e], t), s = Z("div", X(i, {
                class: `${i.class ? i.class : ""} ${this.config.classNames.display.time} `.trim(),
                "aria-label": He.get(e, this.config)
            }), "00:00");
            return this.elements.display[e] = s, s
        }, bindMenuItemShortcuts(e, t) {
            fe.call(this, e, "keydown keyup", (i => {
                if (![32, 38, 39, 40].includes(i.which)) return;
                if (i.preventDefault(), i.stopPropagation(), "keydown" === i.type) return;
                const s = re(e, '[role="menuitemradio"]');
                if (!s && [32, 39].includes(i.which)) We.showMenuPanel.call(this, t, !0); else {
                    let t;
                    32 !== i.which && (40 === i.which || s && 39 === i.which ? (t = e.nextElementSibling, H(t) || (t = e.parentNode.firstElementChild)) : (t = e.previousElementSibling, H(t) || (t = e.parentNode.lastElementChild)), ue.call(this, t, !0))
                }
            }), !1), fe.call(this, e, "keyup", (e => {
                13 === e.which && We.focusFirstMenuItem.call(this, null, !0)
            }))
        }, createMenuItem({value: e, list: t, type: i, title: s, badge: n = null, checked: a = !1}) {
            const l = ne(this.config.selectors.inputs[i]), o = Z("button", X(l, {
                type: "button",
                role: "menuitemradio",
                class: `${this.config.classNames.control} ${l.class ? l.class : ""}`.trim(),
                "aria-checked": a,
                value: e
            })), r = Z("span");
            r.innerHTML = s, H(n) && r.appendChild(n), o.appendChild(r), Object.defineProperty(o, "checked", {
                enumerable: !0,
                get: () => "true" === o.getAttribute("aria-checked"),
                set(e) {
                    e && Array.from(o.parentNode.children).filter((e => re(e, '[role="menuitemradio"]'))).forEach((e => e.setAttribute("aria-checked", "false"))), o.setAttribute("aria-checked", e ? "true" : "false")
                }
            }), this.listeners.bind(o, "click keyup", (t => {
                if (!R(t) || 32 === t.which) {
                    switch (t.preventDefault(), t.stopPropagation(), o.checked = !0, i) {
                        case"language":
                            this.currentTrack = Number(e);
                            break;
                        case"quality":
                            this.quality = e;
                            break;
                        case"speed":
                            this.speed = parseFloat(e)
                    }
                    We.showMenuPanel.call(this, "home", R(t))
                }
            }), i, !1), We.bindMenuItemShortcuts.call(this, o, i), t.appendChild(o)
        }, formatTime(e = 0, t = !1) {
            if (!$(e)) return e;
            return Ue(e, Be(this.duration) > 0, t)
        }, updateTimeDisplay(e = null, t = 0, i = !1) {
            H(e) && $(t) && (e.innerText = We.formatTime(t, i))
        }, updateVolume() {
            this.supported.ui && (H(this.elements.inputs.volume) && We.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), H(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume))
        }, setRange(e, t = 0) {
            H(e) && (e.value = t, We.updateRangeFill.call(this, e))
        }, updateProgress(e) {
            if (!this.supported.ui || !F(e)) return;
            let t = 0;
            const i = (e, t) => {
                const i = $(t) ? t : 0, s = H(e) ? e : this.elements.display.buffer;
                if (H(s)) {
                    s.value = i;
                    const e = s.getElementsByTagName("span")[0];
                    H(e) && (e.childNodes[0].nodeValue = i)
                }
            };
            if (e) switch (e.type) {
                case"timeupdate":
                case"seeking":
                case"seeked":
                    s = this.currentTime, n = this.duration, t = 0 === s || 0 === n || Number.isNaN(s) || Number.isNaN(n) ? 0 : (s / n * 100).toFixed(2), "timeupdate" === e.type && We.setRange.call(this, this.elements.inputs.seek, t);
                    break;
                case"playing":
                case"progress":
                    i(this.elements.display.buffer, 100 * this.buffered)
            }
            var s, n
        }, updateRangeFill(e) {
            const t = F(e) ? e.target : e;
            if (H(t) && "range" === t.getAttribute("type")) {
                if (re(t, this.config.selectors.inputs.seek)) {
                    t.setAttribute("aria-valuenow", this.currentTime);
                    const e = We.formatTime(this.currentTime), i = We.formatTime(this.duration),
                        s = He.get("seekLabel", this.config);
                    t.setAttribute("aria-valuetext", s.replace("{currentTime}", e).replace("{duration}", i))
                } else if (re(t, this.config.selectors.inputs.volume)) {
                    const e = 100 * t.value;
                    t.setAttribute("aria-valuenow", e), t.setAttribute("aria-valuetext", `${e.toFixed(1)}%`)
                } else t.setAttribute("aria-valuenow", t.value);
                Y.isWebkit && t.style.setProperty("--value", t.value / t.max * 100 + "%")
            }
        }, updateSeekTooltip(e) {
            if (!this.config.tooltips.seek || !H(this.elements.inputs.seek) || !H(this.elements.display.seekTooltip) || 0 === this.duration) return;
            const t = `${this.config.classNames.tooltip}--visible`,
                i = e => le(this.elements.display.seekTooltip, t, e);
            if (this.touch) return void i(!1);
            let s = 0;
            const n = this.elements.progress.getBoundingClientRect();
            if (F(e)) s = 100 / n.width * (e.pageX - n.left); else {
                if (!oe(this.elements.display.seekTooltip, t)) return;
                s = parseFloat(this.elements.display.seekTooltip.style.left, 10)
            }
            s < 0 ? s = 0 : s > 100 && (s = 100), We.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * s), this.elements.display.seekTooltip.style.left = `${s}%`, F(e) && ["mouseenter", "mouseleave"].includes(e.type) && i("mouseenter" === e.type)
        }, timeUpdate(e) {
            const t = !H(this.elements.display.duration) && this.config.invertTime;
            We.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), e && "timeupdate" === e.type && this.media.seeking || We.updateProgress.call(this, e)
        }, durationUpdate() {
            if (!this.supported.ui || !this.config.invertTime && this.currentTime) return;
            if (this.duration >= 2 ** 32) return ae(this.elements.display.currentTime, !0), void ae(this.elements.progress, !0);
            H(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
            const e = H(this.elements.display.duration);
            !e && this.config.displayDuration && this.paused && We.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && We.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), We.updateSeekTooltip.call(this)
        }, toggleMenuButton(e, t) {
            ae(this.elements.settings.buttons[e], !t)
        }, updateSetting(e, t, i) {
            const s = this.elements.settings.panels[e];
            let n = null, a = t;
            if ("captions" === e) n = this.currentTrack; else {
                if (n = W(i) ? this[e] : i, W(n) && (n = this.config[e].default), !W(this.options[e]) && !this.options[e].includes(n)) return void this.debug.warn(`Unsupported value of '${n}' for ${e}`);
                if (!this.config[e].options.includes(n)) return void this.debug.warn(`Disabled value of '${n}' for ${e}`)
            }
            if (H(a) || (a = s && s.querySelector('[role="menu"]')), !H(a)) return;
            this.elements.settings.buttons[e].querySelector(`.${this.config.classNames.menu.value}`).innerHTML = We.getLabel.call(this, e, n);
            const l = a && a.querySelector(`[value="${n}"]`);
            H(l) && (l.checked = !0)
        }, getLabel(e, t) {
            switch (e) {
                case"speed":
                    return 1 === t ? He.get("normal", this.config) : `${t}&times;`;
                case"quality":
                    if ($(t)) {
                        const e = He.get(`qualityLabel.${t}`, this.config);
                        return e.length ? e : `${t}p`
                    }
                    return Oe(t);
                case"captions":
                    return Ye.getLabel.call(this);
                default:
                    return null
            }
        }, setQualityMenu(e) {
            if (!H(this.elements.settings.panels.quality)) return;
            const t = "quality", i = this.elements.settings.panels.quality.querySelector('[role="menu"]');
            q(e) && (this.options.quality = Ce(e).filter((e => this.config.quality.options.includes(e))));
            const s = !W(this.options.quality) && this.options.quality.length > 1;
            if (We.toggleMenuButton.call(this, t, s), ie(i), We.checkMenu.call(this), !s) return;
            const n = e => {
                const t = He.get(`qualityBadge.${e}`, this.config);
                return t.length ? We.createBadge.call(this, t) : null
            };
            this.options.quality.sort(((e, t) => {
                const i = this.config.quality.options;
                return i.indexOf(e) > i.indexOf(t) ? 1 : -1
            })).forEach((e => {
                We.createMenuItem.call(this, {
                    value: e,
                    list: i,
                    type: t,
                    title: We.getLabel.call(this, "quality", e),
                    badge: n(e)
                })
            })), We.updateSetting.call(this, t, i)
        }, setCaptionsMenu() {
            if (!H(this.elements.settings.panels.captions)) return;
            const e = "captions", t = this.elements.settings.panels.captions.querySelector('[role="menu"]'),
                i = Ye.getTracks.call(this), s = Boolean(i.length);
            if (We.toggleMenuButton.call(this, e, s), ie(t), We.checkMenu.call(this), !s) return;
            const n = i.map(((e, i) => ({
                value: i,
                checked: this.captions.toggled && this.currentTrack === i,
                title: Ye.getLabel.call(this, e),
                badge: e.language && We.createBadge.call(this, e.language.toUpperCase()),
                list: t,
                type: "language"
            })));
            n.unshift({
                value: -1,
                checked: !this.captions.toggled,
                title: He.get("disabled", this.config),
                list: t,
                type: "language"
            }), n.forEach(We.createMenuItem.bind(this)), We.updateSetting.call(this, e, t)
        }, setSpeedMenu() {
            if (!H(this.elements.settings.panels.speed)) return;
            const e = "speed", t = this.elements.settings.panels.speed.querySelector('[role="menu"]');
            this.options.speed = this.options.speed.filter((e => e >= this.minimumSpeed && e <= this.maximumSpeed));
            const i = !W(this.options.speed) && this.options.speed.length > 1;
            We.toggleMenuButton.call(this, e, i), ie(t), We.checkMenu.call(this), i && (this.options.speed.forEach((i => {
                We.createMenuItem.call(this, {value: i, list: t, type: e, title: We.getLabel.call(this, "speed", i)})
            })), We.updateSetting.call(this, e, t))
        }, checkMenu() {
            const {buttons: e} = this.elements.settings, t = !W(e) && Object.values(e).some((e => !e.hidden));
            ae(this.elements.settings.menu, !t)
        }, focusFirstMenuItem(e, t = !1) {
            if (this.elements.settings.popup.hidden) return;
            let i = e;
            H(i) || (i = Object.values(this.elements.settings.panels).find((e => !e.hidden)));
            const s = i.querySelector('[role^="menuitem"]');
            ue.call(this, s, t)
        }, toggleMenu(e) {
            const {popup: t} = this.elements.settings, i = this.elements.buttons.settings;
            if (!H(t) || !H(i)) return;
            const {hidden: s} = t;
            let n = s;
            if (O(e)) n = e; else if (R(e) && 27 === e.which) n = !1; else if (F(e)) {
                const s = j(e.composedPath) ? e.composedPath()[0] : e.target, a = t.contains(s);
                if (a || !a && e.target !== i && n) return
            }
            i.setAttribute("aria-expanded", n), ae(t, !n), le(this.elements.container, this.config.classNames.menu.open, n), n && R(e) ? We.focusFirstMenuItem.call(this, null, !0) : n || s || ue.call(this, i, R(e))
        }, getMenuSize(e) {
            const t = e.cloneNode(!0);
            t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), e.parentNode.appendChild(t);
            const i = t.scrollWidth, s = t.scrollHeight;
            return te(t), {width: i, height: s}
        }, showMenuPanel(e = "", t = !1) {
            const i = this.elements.container.querySelector(`#plyr-settings-${this.id}-${e}`);
            if (!H(i)) return;
            const s = i.parentNode, n = Array.from(s.children).find((e => !e.hidden));
            if (me.transitions && !me.reducedMotion) {
                s.style.width = `${n.scrollWidth}px`, s.style.height = `${n.scrollHeight}px`;
                const e = We.getMenuSize.call(this, i), t = e => {
                    e.target === s && ["width", "height"].includes(e.propertyName) && (s.style.width = "", s.style.height = "", be.call(this, s, z, t))
                };
                fe.call(this, s, z, t), s.style.width = `${e.width}px`, s.style.height = `${e.height}px`
            }
            ae(n, !0), ae(i, !1), We.focusFirstMenuItem.call(this, i, t)
        }, setDownloadUrl() {
            const e = this.elements.buttons.download;
            H(e) && e.setAttribute("href", this.download)
        }, create(e) {
            const {
                bindMenuItemShortcuts: t,
                createButton: i,
                createProgress: s,
                createRange: n,
                createTime: a,
                setQualityMenu: l,
                setSpeedMenu: o,
                showMenuPanel: r
            } = We;
            this.elements.controls = null, q(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(i.call(this, "play-large"));
            const c = Z("div", ne(this.config.selectors.controls.wrapper));
            this.elements.controls = c;
            const h = {class: "plyr__controls__item"};
            return Ce(q(this.config.controls) ? this.config.controls : []).forEach((l => {
                if ("restart" === l && c.appendChild(i.call(this, "restart", h)), "rewind" === l && c.appendChild(i.call(this, "rewind", h)), "play" === l && c.appendChild(i.call(this, "play", h)), "fast-forward" === l && c.appendChild(i.call(this, "fast-forward", h)), "progress" === l) {
                    const t = Z("div", {class: `${h.class} plyr__progress__container`}),
                        i = Z("div", ne(this.config.selectors.progress));
                    if (i.appendChild(n.call(this, "seek", {id: `plyr-seek-${e.id}`})), i.appendChild(s.call(this, "buffer")), this.config.tooltips.seek) {
                        const e = Z("span", {class: this.config.classNames.tooltip}, "00:00");
                        i.appendChild(e), this.elements.display.seekTooltip = e
                    }
                    this.elements.progress = i, t.appendChild(this.elements.progress), c.appendChild(t)
                }
                if ("current-time" === l && c.appendChild(a.call(this, "currentTime", h)), "duration" === l && c.appendChild(a.call(this, "duration", h)), "mute" === l || "volume" === l) {
                    let {volume: t} = this.elements;
                    if (H(t) && c.contains(t) || (t = Z("div", X({}, h, {class: `${h.class} plyr__volume`.trim()})), this.elements.volume = t, c.appendChild(t)), "mute" === l && t.appendChild(i.call(this, "mute")), "volume" === l && !Y.isIos) {
                        const i = {max: 1, step: .05, value: this.config.volume};
                        t.appendChild(n.call(this, "volume", X(i, {id: `plyr-volume-${e.id}`})))
                    }
                }
                if ("captions" === l && c.appendChild(i.call(this, "captions", h)), "settings" === l && !W(this.config.settings)) {
                    const s = Z("div", X({}, h, {class: `${h.class} plyr__menu`.trim(), hidden: ""}));
                    s.appendChild(i.call(this, "settings", {
                        "aria-haspopup": !0,
                        "aria-controls": `plyr-settings-${e.id}`,
                        "aria-expanded": !1
                    }));
                    const n = Z("div", {class: "plyr__menu__container", id: `plyr-settings-${e.id}`, hidden: ""}),
                        a = Z("div"), l = Z("div", {id: `plyr-settings-${e.id}-home`}), o = Z("div", {role: "menu"});
                    l.appendChild(o), a.appendChild(l), this.elements.settings.panels.home = l, this.config.settings.forEach((i => {
                        const s = Z("button", X(ne(this.config.selectors.buttons.settings), {
                            type: "button",
                            class: `${this.config.classNames.control} ${this.config.classNames.control}--forward`,
                            role: "menuitem",
                            "aria-haspopup": !0,
                            hidden: ""
                        }));
                        t.call(this, s, i), fe.call(this, s, "click", (() => {
                            r.call(this, i, !1)
                        }));
                        const n = Z("span", null, He.get(i, this.config)),
                            l = Z("span", {class: this.config.classNames.menu.value});
                        l.innerHTML = e[i], n.appendChild(l), s.appendChild(n), o.appendChild(s);
                        const c = Z("div", {id: `plyr-settings-${e.id}-${i}`, hidden: ""}), h = Z("button", {
                            type: "button",
                            class: `${this.config.classNames.control} ${this.config.classNames.control}--back`
                        });
                        h.appendChild(Z("span", {"aria-hidden": !0}, He.get(i, this.config))), h.appendChild(Z("span", {class: this.config.classNames.hidden}, He.get("menuBack", this.config))), fe.call(this, c, "keydown", (e => {
                            37 === e.which && (e.preventDefault(), e.stopPropagation(), r.call(this, "home", !0))
                        }), !1), fe.call(this, h, "click", (() => {
                            r.call(this, "home", !1)
                        })), c.appendChild(h), c.appendChild(Z("div", {role: "menu"})), a.appendChild(c), this.elements.settings.buttons[i] = s, this.elements.settings.panels[i] = c
                    })), n.appendChild(a), s.appendChild(n), c.appendChild(s), this.elements.settings.popup = n, this.elements.settings.menu = s
                }
                if ("pip" === l && me.pip && c.appendChild(i.call(this, "pip", h)), "airplay" === l && me.airplay && c.appendChild(i.call(this, "airplay", h)), "download" === l) {
                    const e = X({}, h, {element: "a", href: this.download, target: "_blank"});
                    this.isHTML5 && (e.download = "");
                    const {download: t} = this.config.urls;
                    !U(t) && this.isEmbed && X(e, {
                        icon: `logo-${this.provider}`,
                        label: this.provider
                    }), c.appendChild(i.call(this, "download", e))
                }
                "fullscreen" === l && c.appendChild(i.call(this, "fullscreen", h))
            })), this.isHTML5 && l.call(this, Le.getQualityOptions.call(this)), o.call(this), c
        }, inject() {
            if (this.config.loadSprite) {
                const e = We.getIconUrl.call(this);
                e.cors && Ve(e.url, "sprite-plyr")
            }
            this.id = Math.floor(1e4 * Math.random());
            let e = null;
            this.elements.controls = null;
            const t = {id: this.id, seektime: this.config.seekTime, title: this.config.title};
            let i = !0;
            j(this.config.controls) && (this.config.controls = this.config.controls.call(this, t)), this.config.controls || (this.config.controls = []), H(this.config.controls) || _(this.config.controls) ? e = this.config.controls : (e = We.create.call(this, {
                id: this.id,
                seektime: this.config.seekTime,
                speed: this.speed,
                quality: this.quality,
                captions: Ye.getLabel.call(this)
            }), i = !1);
            let s;
            i && _(this.config.controls) && (e = (e => {
                let i = e;
                return Object.entries(t).forEach((([e, t]) => {
                    i = _e(i, `{${e}}`, t)
                })), i
            })(e)), _(this.config.selectors.controls.container) && (s = document.querySelector(this.config.selectors.controls.container)), H(s) || (s = this.elements.container);
            if (s[H(e) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", e), H(this.elements.controls) || We.findElements.call(this), !W(this.elements.buttons)) {
                const e = e => {
                    const t = this.config.classNames.controlPressed;
                    Object.defineProperty(e, "pressed", {
                        enumerable: !0, get: () => oe(e, t), set(i = !1) {
                            le(e, t, i)
                        }
                    })
                };
                Object.values(this.elements.buttons).filter(Boolean).forEach((t => {
                    q(t) || D(t) ? Array.from(t).filter(Boolean).forEach(e) : e(t)
                }))
            }
            if (Y.isEdge && K(s), this.config.tooltips.controls) {
                const {classNames: e, selectors: t} = this.config, i = `${t.controls.wrapper} ${t.labels} .${e.hidden}`,
                    s = ce.call(this, i);
                Array.from(s).forEach((e => {
                    le(e, this.config.classNames.hidden, !1), le(e, this.config.classNames.tooltip, !0)
                }))
            }
        }
    };

    function ze(e, t = !0) {
        let i = e;
        if (t) {
            const e = document.createElement("a");
            e.href = i, i = e.href
        }
        try {
            return new URL(i)
        } catch (e) {
            return null
        }
    }

    function Ke(e) {
        const t = new URLSearchParams;
        return L(e) && Object.entries(e).forEach((([e, i]) => {
            t.set(e, i)
        })), t
    }

    const Ye = {
            setup() {
                if (!this.supported.ui) return;
                if (!this.isVideo || this.isYouTube || this.isHTML5 && !me.textTracks) return void (q(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && We.setCaptionsMenu.call(this));
                var e, t;
                if (H(this.elements.captions) || (this.elements.captions = Z("div", ne(this.config.selectors.captions)), e = this.elements.captions, t = this.elements.wrapper, H(e) && H(t) && t.parentNode.insertBefore(e, t.nextSibling)), Y.isIE && window.URL) {
                    const e = this.media.querySelectorAll("track");
                    Array.from(e).forEach((e => {
                        const t = e.getAttribute("src"), i = ze(t);
                        null !== i && i.hostname !== window.location.href.hostname && ["http:", "https:"].includes(i.protocol) && Re(t, "blob").then((t => {
                            e.setAttribute("src", window.URL.createObjectURL(t))
                        })).catch((() => {
                            te(e)
                        }))
                    }))
                }
                const i = Ce((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map((e => e.split("-")[0])));
                let s = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
                "auto" === s && ([s] = i);
                let n = this.storage.get("captions");
                if (O(n) || ({active: n} = this.config.captions), Object.assign(this.captions, {
                    toggled: !1,
                    active: n,
                    language: s,
                    languages: i
                }), this.isHTML5) {
                    const e = this.config.captions.update ? "addtrack removetrack" : "removetrack";
                    fe.call(this, this.media.textTracks, e, Ye.update.bind(this))
                }
                setTimeout(Ye.update.bind(this), 0)
            }, update() {
                const e = Ye.getTracks.call(this, !0), {
                    active: t,
                    language: i,
                    meta: s,
                    currentTrackNode: n
                } = this.captions, a = Boolean(e.find((e => e.language === i)));
                this.isHTML5 && this.isVideo && e.filter((e => !s.get(e))).forEach((e => {
                    this.debug.log("Track added", e), s.set(e, {default: "showing" === e.mode}), "showing" === e.mode && (e.mode = "hidden"), fe.call(this, e, "cuechange", (() => Ye.updateCues.call(this)))
                })), (a && this.language !== i || !e.includes(n)) && (Ye.setLanguage.call(this, i), Ye.toggle.call(this, t && a)), this.elements && le(this.elements.container, this.config.classNames.captions.enabled, !W(e)), q(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && We.setCaptionsMenu.call(this)
            }, toggle(e, t = !0) {
                if (!this.supported.ui) return;
                const {toggled: i} = this.captions, s = this.config.classNames.captions.active, n = I(e) ? !i : e;
                if (n !== i) {
                    if (t || (this.captions.active = n, this.storage.set({captions: n})), !this.language && n && !t) {
                        const e = Ye.getTracks.call(this),
                            t = Ye.findTrack.call(this, [this.captions.language, ...this.captions.languages], !0);
                        return this.captions.language = t.language, void Ye.set.call(this, e.indexOf(t))
                    }
                    this.elements.buttons.captions && (this.elements.buttons.captions.pressed = n), le(this.elements.container, s, n), this.captions.toggled = n, We.updateSetting.call(this, "captions"), ve.call(this, this.media, n ? "captionsenabled" : "captionsdisabled")
                }
                setTimeout((() => {
                    n && this.captions.toggled && (this.captions.currentTrackNode.mode = "hidden")
                }))
            }, set(e, t = !0) {
                const i = Ye.getTracks.call(this);
                if (-1 !== e) if ($(e)) if (e in i) {
                    if (this.captions.currentTrack !== e) {
                        this.captions.currentTrack = e;
                        const s = i[e], {language: n} = s || {};
                        this.captions.currentTrackNode = s, We.updateSetting.call(this, "captions"), t || (this.captions.language = n, this.storage.set({language: n})), this.isVimeo && this.embed.enableTextTrack(n), ve.call(this, this.media, "languagechange")
                    }
                    Ye.toggle.call(this, !0, t), this.isHTML5 && this.isVideo && Ye.updateCues.call(this)
                } else this.debug.warn("Track not found", e); else this.debug.warn("Invalid caption argument", e); else Ye.toggle.call(this, !1, t)
            }, setLanguage(e, t = !0) {
                if (!_(e)) return void this.debug.warn("Invalid language argument", e);
                const i = e.toLowerCase();
                this.captions.language = i;
                const s = Ye.getTracks.call(this), n = Ye.findTrack.call(this, [i]);
                Ye.set.call(this, s.indexOf(n), t)
            }, getTracks(e = !1) {
                return Array.from((this.media || {}).textTracks || []).filter((t => !this.isHTML5 || e || this.captions.meta.has(t))).filter((e => ["captions", "subtitles"].includes(e.kind)))
            }, findTrack(e, t = !1) {
                const i = Ye.getTracks.call(this), s = e => Number((this.captions.meta.get(e) || {}).default),
                    n = Array.from(i).sort(((e, t) => s(t) - s(e)));
                let a;
                return e.every((e => (a = n.find((t => t.language === e)), !a))), a || (t ? n[0] : void 0)
            }, getCurrentTrack() {
                return Ye.getTracks.call(this)[this.currentTrack]
            }, getLabel(e) {
                let t = e;
                return !V(t) && me.textTracks && this.captions.toggled && (t = Ye.getCurrentTrack.call(this)), V(t) ? W(t.label) ? W(t.language) ? He.get("enabled", this.config) : e.language.toUpperCase() : t.label : He.get("disabled", this.config)
            }, updateCues(e) {
                if (!this.supported.ui) return;
                if (!H(this.elements.captions)) return void this.debug.warn("No captions element to render to");
                if (!I(e) && !Array.isArray(e)) return void this.debug.warn("updateCues: Invalid input", e);
                let t = e;
                if (!t) {
                    const e = Ye.getCurrentTrack.call(this);
                    t = Array.from((e || {}).activeCues || []).map((e => e.getCueAsHTML())).map(qe)
                }
                const i = t.map((e => e.trim())).join("\n");
                if (i !== this.elements.captions.innerHTML) {
                    ie(this.elements.captions);
                    const e = Z("span", ne(this.config.selectors.caption));
                    e.innerHTML = i, this.elements.captions.appendChild(e), ve.call(this, this.media, "cuechange")
                }
            }
        }, Qe = {
            enabled: !0,
            title: "",
            debug: !1,
            autoplay: !1,
            autopause: !0,
            playsinline: !0,
            seekTime: 10,
            volume: 1,
            muted: !1,
            duration: null,
            displayDuration: !0,
            invertTime: !0,
            toggleInvert: !0,
            ratio: null,
            clickToPlay: !0,
            hideControls: !0,
            resetOnEnd: !1,
            disableContextMenu: !0,
            loadSprite: !0,
            iconPrefix: "plyr",
            iconUrl: "https://cdn.plyr.io/3.6.12/plyr.svg",
            blankVideo: "https://cdn.plyr.io/static/blank.mp4",
            quality: {
                default: 576,
                options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
                forced: !1,
                onChange: null
            },
            loop: {active: !1},
            speed: {selected: 1, options: [.5, .75, 1, 1.25, 1.5, 1.75, 2, 4]},
            keyboard: {focused: !0, global: !1},
            tooltips: {controls: !1, seek: !0},
            captions: {active: !1, language: "auto", update: !1},
            fullscreen: {enabled: !0, fallback: !0, iosNative: !1},
            storage: {enabled: !0, key: "plyr"},
            controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
            settings: ["captions", "quality", "speed"],
            i18n: {
                restart: "Restart",
                rewind: "Rewind {seektime}s",
                play: "Play",
                pause: "Pause",
                fastForward: "Forward {seektime}s",
                seek: "Seek",
                seekLabel: "{currentTime} of {duration}",
                played: "Played",
                buffered: "Buffered",
                currentTime: "Current time",
                duration: "Duration",
                volume: "Volume",
                mute: "Mute",
                unmute: "Unmute",
                enableCaptions: "Enable captions",
                disableCaptions: "Disable captions",
                download: "Download",
                enterFullscreen: "Enter fullscreen",
                exitFullscreen: "Exit fullscreen",
                frameTitle: "Player for {title}",
                captions: "Captions",
                settings: "Settings",
                pip: "PIP",
                menuBack: "Go back to previous menu",
                speed: "Speed",
                normal: "Normal",
                quality: "Quality",
                loop: "Loop",
                start: "Start",
                end: "End",
                all: "All",
                reset: "Reset",
                disabled: "Disabled",
                enabled: "Enabled",
                advertisement: "Ad",
                qualityBadge: {2160: "4K", 1440: "HD", 1080: "HD", 720: "HD", 576: "SD", 480: "SD"}
            },
            urls: {
                download: null,
                vimeo: {
                    sdk: "https://player.vimeo.com/api/player.js",
                    iframe: "https://player.vimeo.com/video/{0}?{1}",
                    api: "https://vimeo.com/api/oembed.json?url={0}"
                },
                youtube: {
                    sdk: "https://www.youtube.com/iframe_api",
                    api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"
                },
                googleIMA: {sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"}
            },
            listeners: {
                seek: null,
                play: null,
                pause: null,
                restart: null,
                rewind: null,
                fastForward: null,
                mute: null,
                volume: null,
                captions: null,
                download: null,
                fullscreen: null,
                pip: null,
                airplay: null,
                speed: null,
                quality: null,
                loop: null,
                language: null
            },
            events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"],
            selectors: {
                editable: "input, textarea, select, [contenteditable]",
                container: ".plyr",
                controls: {container: null, wrapper: ".plyr__controls"},
                labels: "[data-plyr]",
                buttons: {
                    play: '[data-plyr="play"]',
                    pause: '[data-plyr="pause"]',
                    restart: '[data-plyr="restart"]',
                    rewind: '[data-plyr="rewind"]',
                    fastForward: '[data-plyr="fast-forward"]',
                    mute: '[data-plyr="mute"]',
                    captions: '[data-plyr="captions"]',
                    download: '[data-plyr="download"]',
                    fullscreen: '[data-plyr="fullscreen"]',
                    pip: '[data-plyr="pip"]',
                    airplay: '[data-plyr="airplay"]',
                    settings: '[data-plyr="settings"]',
                    loop: '[data-plyr="loop"]'
                },
                inputs: {
                    seek: '[data-plyr="seek"]',
                    volume: '[data-plyr="volume"]',
                    speed: '[data-plyr="speed"]',
                    language: '[data-plyr="language"]',
                    quality: '[data-plyr="quality"]'
                },
                display: {
                    currentTime: ".plyr__time--current",
                    duration: ".plyr__time--duration",
                    buffer: ".plyr__progress__buffer",
                    loop: ".plyr__progress__loop",
                    volume: ".plyr__volume--display"
                },
                progress: ".plyr__progress",
                captions: ".plyr__captions",
                caption: ".plyr__caption"
            },
            classNames: {
                type: "plyr--{0}",
                provider: "plyr--{0}",
                video: "plyr__video-wrapper",
                embed: "plyr__video-embed",
                videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
                embedContainer: "plyr__video-embed__container",
                poster: "plyr__poster",
                posterEnabled: "plyr__poster-enabled",
                ads: "plyr__ads",
                control: "plyr__control",
                controlPressed: "plyr__control--pressed",
                playing: "plyr--playing",
                paused: "plyr--paused",
                stopped: "plyr--stopped",
                loading: "plyr--loading",
                hover: "plyr--hover",
                tooltip: "plyr__tooltip",
                cues: "plyr__cues",
                hidden: "plyr__sr-only",
                hideControls: "plyr--hide-controls",
                isIos: "plyr--is-ios",
                isTouch: "plyr--is-touch",
                uiSupported: "plyr--full-ui",
                noTransition: "plyr--no-transition",
                display: {time: "plyr__time"},
                menu: {value: "plyr__menu__value", badge: "plyr__badge", open: "plyr--menu-open"},
                captions: {enabled: "plyr--captions-enabled", active: "plyr--captions-active"},
                fullscreen: {enabled: "plyr--fullscreen-enabled", fallback: "plyr--fullscreen-fallback"},
                pip: {supported: "plyr--pip-supported", active: "plyr--pip-active"},
                airplay: {supported: "plyr--airplay-supported", active: "plyr--airplay-active"},
                tabFocus: "plyr__tab-focus",
                previewThumbnails: {
                    thumbContainer: "plyr__preview-thumb",
                    thumbContainerShown: "plyr__preview-thumb--is-shown",
                    imageContainer: "plyr__preview-thumb__image-container",
                    timeContainer: "plyr__preview-thumb__time-container",
                    scrubbingContainer: "plyr__preview-scrubbing",
                    scrubbingContainerShown: "plyr__preview-scrubbing--is-shown"
                }
            },
            attributes: {embed: {provider: "data-plyr-provider", id: "data-plyr-embed-id", hash: "data-plyr-embed-hash"}},
            ads: {enabled: !1, publisherId: "", tagUrl: ""},
            previewThumbnails: {enabled: !1, src: ""},
            vimeo: {
                byline: !1,
                portrait: !1,
                title: !1,
                speed: !0,
                transparent: !1,
                customControls: !0,
                referrerPolicy: null,
                premium: !1
            },
            youtube: {rel: 0, showinfo: 0, iv_load_policy: 3, modestbranding: 1, customControls: !0, noCookie: !1}
        }, Xe = "picture-in-picture", Je = "inline", Ge = {html5: "html5", youtube: "youtube", vimeo: "vimeo"},
        Ze = "audio", et = "video";
    const tt = () => {
    };

    class it {
        constructor(e = !1) {
            this.enabled = window.console && e, this.enabled && this.log("Debugging enabled")
        }

        get log() {
            return this.enabled ? Function.prototype.bind.call(console.log, console) : tt
        }

        get warn() {
            return this.enabled ? Function.prototype.bind.call(console.warn, console) : tt
        }

        get error() {
            return this.enabled ? Function.prototype.bind.call(console.error, console) : tt
        }
    }

    class st {
        constructor(t) {
            e(this, "onChange", (() => {
                if (!this.enabled) return;
                const e = this.player.elements.buttons.fullscreen;
                H(e) && (e.pressed = this.active);
                const t = this.target === this.player.media ? this.target : this.player.elements.container;
                ve.call(this.player, t, this.active ? "enterfullscreen" : "exitfullscreen", !0)
            })), e(this, "toggleFallback", ((e = !1) => {
                if (e ? this.scrollPosition = {
                    x: window.scrollX || 0,
                    y: window.scrollY || 0
                } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = e ? "hidden" : "", le(this.target, this.player.config.classNames.fullscreen.fallback, e), Y.isIos) {
                    let t = document.head.querySelector('meta[name="viewport"]');
                    const i = "viewport-fit=cover";
                    t || (t = document.createElement("meta"), t.setAttribute("name", "viewport"));
                    const s = _(t.content) && t.content.includes(i);
                    e ? (this.cleanupViewport = !s, s || (t.content += `,${i}`)) : this.cleanupViewport && (t.content = t.content.split(",").filter((e => e.trim() !== i)).join(","))
                }
                this.onChange()
            })), e(this, "trapFocus", (e => {
                if (Y.isIos || !this.active || "Tab" !== e.key || 9 !== e.keyCode) return;
                const t = document.activeElement,
                    i = ce.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"), [s] = i,
                    n = i[i.length - 1];
                t !== n || e.shiftKey ? t === s && e.shiftKey && (n.focus(), e.preventDefault()) : (s.focus(), e.preventDefault())
            })), e(this, "update", (() => {
                if (this.enabled) {
                    let e;
                    e = this.forceFallback ? "Fallback (forced)" : st.native ? "Native" : "Fallback", this.player.debug.log(`${e} fullscreen enabled`)
                } else this.player.debug.log("Fullscreen not supported and fallback disabled");
                le(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled)
            })), e(this, "enter", (() => {
                this.enabled && (Y.isIos && this.player.config.fullscreen.iosNative ? this.player.isVimeo ? this.player.embed.requestFullscreen() : this.target.webkitEnterFullscreen() : !st.native || this.forceFallback ? this.toggleFallback(!0) : this.prefix ? W(this.prefix) || this.target[`${this.prefix}Request${this.property}`]() : this.target.requestFullscreen({navigationUI: "hide"}))
            })), e(this, "exit", (() => {
                if (this.enabled) if (Y.isIos && this.player.config.fullscreen.iosNative) this.target.webkitExitFullscreen(), ke(this.player.play()); else if (!st.native || this.forceFallback) this.toggleFallback(!1); else if (this.prefix) {
                    if (!W(this.prefix)) {
                        const e = "moz" === this.prefix ? "Cancel" : "Exit";
                        document[`${this.prefix}${e}${this.property}`]()
                    }
                } else (document.cancelFullScreen || document.exitFullscreen).call(document)
            })), e(this, "toggle", (() => {
                this.active ? this.exit() : this.enter()
            })), this.player = t, this.prefix = st.prefix, this.property = st.property, this.scrollPosition = {
                x: 0,
                y: 0
            }, this.forceFallback = "force" === t.config.fullscreen.fallback, this.player.elements.fullscreen = t.config.fullscreen.container && function (e, t) {
                const {prototype: i} = Element;
                return (i.closest || function () {
                    let e = this;
                    do {
                        if (re.matches(e, t)) return e;
                        e = e.parentElement || e.parentNode
                    } while (null !== e && 1 === e.nodeType);
                    return null
                }).call(e, t)
            }(this.player.elements.container, t.config.fullscreen.container), fe.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : `${this.prefix}fullscreenchange`, (() => {
                this.onChange()
            })), fe.call(this.player, this.player.elements.container, "dblclick", (e => {
                H(this.player.elements.controls) && this.player.elements.controls.contains(e.target) || this.player.listeners.proxy(e, this.toggle, "fullscreen")
            })), fe.call(this, this.player.elements.container, "keydown", (e => this.trapFocus(e))), this.update()
        }

        static get native() {
            return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
        }

        get usingNative() {
            return st.native && !this.forceFallback
        }

        static get prefix() {
            if (j(document.exitFullscreen)) return "";
            let e = "";
            return ["webkit", "moz", "ms"].some((t => !(!j(document[`${t}ExitFullscreen`]) && !j(document[`${t}CancelFullScreen`])) && (e = t, !0))), e
        }

        static get property() {
            return "moz" === this.prefix ? "FullScreen" : "Fullscreen"
        }

        get enabled() {
            return (st.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo
        }

        get active() {
            if (!this.enabled) return !1;
            if (!st.native || this.forceFallback) return oe(this.target, this.player.config.classNames.fullscreen.fallback);
            const e = this.prefix ? this.target.getRootNode()[`${this.prefix}${this.property}Element`] : this.target.getRootNode().fullscreenElement;
            return e && e.shadowRoot ? e === this.target.getRootNode().host : e === this.target
        }

        get target() {
            return Y.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen || this.player.elements.container
        }
    }

    function nt(e, t = 1) {
        return new Promise(((i, s) => {
            const n = new Image, a = () => {
                delete n.onload, delete n.onerror, (n.naturalWidth >= t ? i : s)(n)
            };
            Object.assign(n, {onload: a, onerror: a, src: e})
        }))
    }

    const at = {
        addStyleHook() {
            le(this.elements.container, this.config.selectors.container.replace(".", ""), !0), le(this.elements.container, this.config.classNames.uiSupported, this.supported.ui)
        }, toggleNativeControls(e = !1) {
            e && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls")
        }, build() {
            if (this.listeners.media(), !this.supported.ui) return this.debug.warn(`Basic support only for ${this.provider} ${this.type}`), void at.toggleNativeControls.call(this, !0);
            H(this.elements.controls) || (We.inject.call(this), this.listeners.controls()), at.toggleNativeControls.call(this), this.isHTML5 && Ye.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, We.updateVolume.call(this), We.timeUpdate.call(this), We.durationUpdate.call(this), at.checkPlaying.call(this), le(this.elements.container, this.config.classNames.pip.supported, me.pip && this.isHTML5 && this.isVideo), le(this.elements.container, this.config.classNames.airplay.supported, me.airplay && this.isHTML5), le(this.elements.container, this.config.classNames.isIos, Y.isIos), le(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout((() => {
                ve.call(this, this.media, "ready")
            }), 0), at.setTitle.call(this), this.poster && at.setPoster.call(this, this.poster, !1).catch((() => {
            })), this.config.duration && We.durationUpdate.call(this)
        }, setTitle() {
            let e = He.get("play", this.config);
            if (_(this.config.title) && !W(this.config.title) && (e += `, ${this.config.title}`), Array.from(this.elements.buttons.play || []).forEach((t => {
                t.setAttribute("aria-label", e)
            })), this.isEmbed) {
                const e = he.call(this, "iframe");
                if (!H(e)) return;
                const t = W(this.config.title) ? "video" : this.config.title, i = He.get("frameTitle", this.config);
                e.setAttribute("title", i.replace("{title}", t))
            }
        }, togglePoster(e) {
            le(this.elements.container, this.config.classNames.posterEnabled, e)
        }, setPoster(e, t = !0) {
            return t && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("data-poster", e), this.elements.poster.removeAttribute("hidden"), Te.call(this).then((() => nt(e))).catch((t => {
                throw e === this.poster && at.togglePoster.call(this, !1), t
            })).then((() => {
                if (e !== this.poster) throw new Error("setPoster cancelled by later call to setPoster")
            })).then((() => (Object.assign(this.elements.poster.style, {
                backgroundImage: `url('${e}')`,
                backgroundSize: ""
            }), at.togglePoster.call(this, !0), e))))
        }, checkPlaying(e) {
            le(this.elements.container, this.config.classNames.playing, this.playing), le(this.elements.container, this.config.classNames.paused, this.paused), le(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach((e => {
                Object.assign(e, {pressed: this.playing}), e.setAttribute("aria-label", He.get(this.playing ? "pause" : "play", this.config))
            })), F(e) && "timeupdate" === e.type || at.toggleControls.call(this)
        }, checkLoading(e) {
            this.loading = ["stalled", "waiting"].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout((() => {
                le(this.elements.container, this.config.classNames.loading, this.loading), at.toggleControls.call(this)
            }), this.loading ? 250 : 0)
        }, toggleControls(e) {
            const {controls: t} = this.elements;
            if (t && this.config.hideControls) {
                const i = this.touch && this.lastSeekTime + 2e3 > Date.now();
                this.toggleControls(Boolean(e || this.loading || this.paused || t.pressed || t.hover || i))
            }
        }, migrateStyles() {
            Object.values({...this.media.style}).filter((e => !W(e) && _(e) && e.startsWith("--plyr"))).forEach((e => {
                this.elements.container.style.setProperty(e, this.media.style.getPropertyValue(e)), this.media.style.removeProperty(e)
            })), W(this.media.style) && this.media.removeAttribute("style")
        }
    };

    class lt {
        constructor(t) {
            e(this, "firstTouch", (() => {
                const {player: e} = this, {elements: t} = e;
                e.touch = !0, le(t.container, e.config.classNames.isTouch, !0)
            })), e(this, "setTabFocus", (e => {
                const {player: t} = this, {elements: i} = t;
                if (clearTimeout(this.focusTimer), "keydown" === e.type && 9 !== e.which) return;
                "keydown" === e.type && (this.lastKeyDown = e.timeStamp);
                const s = e.timeStamp - this.lastKeyDown <= 20;
                ("focus" !== e.type || s) && ((() => {
                    const e = t.config.classNames.tabFocus;
                    le(ce.call(t, `.${e}`), e, !1)
                })(), "focusout" !== e.type && (this.focusTimer = setTimeout((() => {
                    const e = document.activeElement;
                    i.container.contains(e) && le(document.activeElement, t.config.classNames.tabFocus, !0)
                }), 10)))
            })), e(this, "global", ((e = !0) => {
                const {player: t} = this;
                t.config.keyboard.global && ge.call(t, window, "keydown keyup", this.handleKey, e, !1), ge.call(t, document.body, "click", this.toggleMenu, e), ye.call(t, document.body, "touchstart", this.firstTouch), ge.call(t, document.body, "keydown focus blur focusout", this.setTabFocus, e, !1, !0)
            })), e(this, "container", (() => {
                const {player: e} = this, {config: t, elements: i, timers: s} = e;
                !t.keyboard.global && t.keyboard.focused && fe.call(e, i.container, "keydown keyup", this.handleKey, !1), fe.call(e, i.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", (t => {
                    const {controls: n} = i;
                    n && "enterfullscreen" === t.type && (n.pressed = !1, n.hover = !1);
                    let a = 0;
                    ["touchstart", "touchmove", "mousemove"].includes(t.type) && (at.toggleControls.call(e, !0), a = e.touch ? 3e3 : 2e3), clearTimeout(s.controls), s.controls = setTimeout((() => at.toggleControls.call(e, !1)), a)
                }));
                const n = () => {
                    if (!e.isVimeo || e.config.vimeo.premium) return;
                    const t = i.wrapper, {active: s} = e.fullscreen, [n, a] = xe.call(e),
                        l = Se(`aspect-ratio: ${n} / ${a}`);
                    if (!s) return void (l ? (t.style.width = null, t.style.height = null) : (t.style.maxWidth = null, t.style.margin = null));
                    const [o, r] = [Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0), Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)],
                        c = o / r > n / a;
                    l ? (t.style.width = c ? "auto" : "100%", t.style.height = c ? "100%" : "auto") : (t.style.maxWidth = c ? r / a * n + "px" : null, t.style.margin = c ? "0 auto" : null)
                }, a = () => {
                    clearTimeout(s.resized), s.resized = setTimeout(n, 50)
                };
                fe.call(e, i.container, "enterfullscreen exitfullscreen", (t => {
                    const {target: s} = e.fullscreen;
                    if (s !== i.container) return;
                    if (!e.isEmbed && W(e.config.ratio)) return;
                    n();
                    ("enterfullscreen" === t.type ? fe : be).call(e, window, "resize", a)
                }))
            })), e(this, "media", (() => {
                const {player: e} = this, {elements: t} = e;
                if (fe.call(e, e.media, "timeupdate seeking seeked", (t => We.timeUpdate.call(e, t))), fe.call(e, e.media, "durationchange loadeddata loadedmetadata", (t => We.durationUpdate.call(e, t))), fe.call(e, e.media, "ended", (() => {
                    e.isHTML5 && e.isVideo && e.config.resetOnEnd && (e.restart(), e.pause())
                })), fe.call(e, e.media, "progress playing seeking seeked", (t => We.updateProgress.call(e, t))), fe.call(e, e.media, "volumechange", (t => We.updateVolume.call(e, t))), fe.call(e, e.media, "playing play pause ended emptied timeupdate", (t => at.checkPlaying.call(e, t))), fe.call(e, e.media, "waiting canplay seeked playing", (t => at.checkLoading.call(e, t))), e.supported.ui && e.config.clickToPlay && !e.isAudio) {
                    const i = he.call(e, `.${e.config.classNames.video}`);
                    if (!H(i)) return;
                    fe.call(e, t.container, "click", (s => {
                        ([t.container, i].includes(s.target) || i.contains(s.target)) && (e.touch && e.config.hideControls || (e.ended ? (this.proxy(s, e.restart, "restart"), this.proxy(s, (() => {
                            ke(e.play())
                        }), "play")) : this.proxy(s, (() => {
                            ke(e.togglePlay())
                        }), "play")))
                    }))
                }
                e.supported.ui && e.config.disableContextMenu && fe.call(e, t.wrapper, "contextmenu", (e => {
                    e.preventDefault()
                }), !1), fe.call(e, e.media, "volumechange", (() => {
                    e.storage.set({volume: e.volume, muted: e.muted})
                })), fe.call(e, e.media, "ratechange", (() => {
                    We.updateSetting.call(e, "speed"), e.storage.set({speed: e.speed})
                })), fe.call(e, e.media, "qualitychange", (t => {
                    We.updateSetting.call(e, "quality", null, t.detail.quality)
                })), fe.call(e, e.media, "ready qualitychange", (() => {
                    We.setDownloadUrl.call(e)
                }));
                const i = e.config.events.concat(["keyup", "keydown"]).join(" ");
                fe.call(e, e.media, i, (i => {
                    let {detail: s = {}} = i;
                    "error" === i.type && (s = e.media.error), ve.call(e, t.container, i.type, !0, s)
                }))
            })), e(this, "proxy", ((e, t, i) => {
                const {player: s} = this, n = s.config.listeners[i];
                let a = !0;
                j(n) && (a = n.call(s, e)), !1 !== a && j(t) && t.call(s, e)
            })), e(this, "bind", ((e, t, i, s, n = !0) => {
                const {player: a} = this, l = a.config.listeners[s], o = j(l);
                fe.call(a, e, t, (e => this.proxy(e, i, s)), n && !o)
            })), e(this, "controls", (() => {
                const {player: e} = this, {elements: t} = e, i = Y.isIE ? "change" : "input";
                if (t.buttons.play && Array.from(t.buttons.play).forEach((t => {
                    this.bind(t, "click", (() => {
                        ke(e.togglePlay())
                    }), "play")
                })), this.bind(t.buttons.restart, "click", e.restart, "restart"), this.bind(t.buttons.rewind, "click", (() => {
                    e.lastSeekTime = Date.now(), e.rewind()
                }), "rewind"), this.bind(t.buttons.fastForward, "click", (() => {
                    e.lastSeekTime = Date.now(), e.forward()
                }), "fastForward"), this.bind(t.buttons.mute, "click", (() => {
                    e.muted = !e.muted
                }), "mute"), this.bind(t.buttons.captions, "click", (() => e.toggleCaptions())), this.bind(t.buttons.download, "click", (() => {
                    ve.call(e, e.media, "download")
                }), "download"), this.bind(t.buttons.fullscreen, "click", (() => {
                    e.fullscreen.toggle()
                }), "fullscreen"), this.bind(t.buttons.pip, "click", (() => {
                    e.pip = "toggle"
                }), "pip"), this.bind(t.buttons.airplay, "click", e.airplay, "airplay"), this.bind(t.buttons.settings, "click", (t => {
                    t.stopPropagation(), t.preventDefault(), We.toggleMenu.call(e, t)
                }), null, !1), this.bind(t.buttons.settings, "keyup", (t => {
                    const i = t.which;
                    [13, 32].includes(i) && (13 !== i ? (t.preventDefault(), t.stopPropagation(), We.toggleMenu.call(e, t)) : We.focusFirstMenuItem.call(e, null, !0))
                }), null, !1), this.bind(t.settings.menu, "keydown", (t => {
                    27 === t.which && We.toggleMenu.call(e, t)
                })), this.bind(t.inputs.seek, "mousedown mousemove", (e => {
                    const i = t.progress.getBoundingClientRect(), s = 100 / i.width * (e.pageX - i.left);
                    e.currentTarget.setAttribute("seek-value", s)
                })), this.bind(t.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", (t => {
                    const i = t.currentTarget, s = t.keyCode ? t.keyCode : t.which, n = "play-on-seeked";
                    if (R(t) && 39 !== s && 37 !== s) return;
                    e.lastSeekTime = Date.now();
                    const a = i.hasAttribute(n), l = ["mouseup", "touchend", "keyup"].includes(t.type);
                    a && l ? (i.removeAttribute(n), ke(e.play())) : !l && e.playing && (i.setAttribute(n, ""), e.pause())
                })), Y.isIos) {
                    const t = ce.call(e, 'input[type="range"]');
                    Array.from(t).forEach((e => this.bind(e, i, (e => K(e.target)))))
                }
                this.bind(t.inputs.seek, i, (t => {
                    const i = t.currentTarget;
                    let s = i.getAttribute("seek-value");
                    W(s) && (s = i.value), i.removeAttribute("seek-value"), e.currentTime = s / i.max * e.duration
                }), "seek"), this.bind(t.progress, "mouseenter mouseleave mousemove", (t => We.updateSeekTooltip.call(e, t))), this.bind(t.progress, "mousemove touchmove", (t => {
                    const {previewThumbnails: i} = e;
                    i && i.loaded && i.startMove(t)
                })), this.bind(t.progress, "mouseleave touchend click", (() => {
                    const {previewThumbnails: t} = e;
                    t && t.loaded && t.endMove(!1, !0)
                })), this.bind(t.progress, "mousedown touchstart", (t => {
                    const {previewThumbnails: i} = e;
                    i && i.loaded && i.startScrubbing(t)
                })), this.bind(t.progress, "mouseup touchend", (t => {
                    const {previewThumbnails: i} = e;
                    i && i.loaded && i.endScrubbing(t)
                })), Y.isWebkit && Array.from(ce.call(e, 'input[type="range"]')).forEach((t => {
                    this.bind(t, "input", (t => We.updateRangeFill.call(e, t.target)))
                })), e.config.toggleInvert && !H(t.display.duration) && this.bind(t.display.currentTime, "click", (() => {
                    0 !== e.currentTime && (e.config.invertTime = !e.config.invertTime, We.timeUpdate.call(e))
                })), this.bind(t.inputs.volume, i, (t => {
                    e.volume = t.target.value
                }), "volume"), this.bind(t.controls, "mouseenter mouseleave", (i => {
                    t.controls.hover = !e.touch && "mouseenter" === i.type
                })), t.fullscreen && Array.from(t.fullscreen.children).filter((e => !e.contains(t.container))).forEach((i => {
                    this.bind(i, "mouseenter mouseleave", (i => {
                        t.controls && (t.controls.hover = !e.touch && "mouseenter" === i.type)
                    }))
                })), this.bind(t.controls, "mousedown mouseup touchstart touchend touchcancel", (e => {
                    t.controls.pressed = ["mousedown", "touchstart"].includes(e.type)
                })), this.bind(t.controls, "focusin", (() => {
                    const {config: i, timers: s} = e;
                    le(t.controls, i.classNames.noTransition, !0), at.toggleControls.call(e, !0), setTimeout((() => {
                        le(t.controls, i.classNames.noTransition, !1)
                    }), 0);
                    const n = this.touch ? 3e3 : 4e3;
                    clearTimeout(s.controls), s.controls = setTimeout((() => at.toggleControls.call(e, !1)), n)
                })), this.bind(t.inputs.volume, "wheel", (t => {
                    const i = t.webkitDirectionInvertedFromDevice, [s, n] = [t.deltaX, -t.deltaY].map((e => i ? -e : e)),
                        a = Math.sign(Math.abs(s) > Math.abs(n) ? s : n);
                    e.increaseVolume(a / 50);
                    const {volume: l} = e.media;
                    (1 === a && l < 1 || -1 === a && l > 0) && t.preventDefault()
                }), "volume", !1)
            })), this.player = t, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.setTabFocus = this.setTabFocus.bind(this), this.firstTouch = this.firstTouch.bind(this)
        }

        handleKey(e) {
            const {player: t} = this, {elements: i} = t, s = e.keyCode ? e.keyCode : e.which, n = "keydown" === e.type,
                a = n && s === this.lastKey;
            if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
            if (!$(s)) return;
            if (n) {
                const n = document.activeElement;
                if (H(n)) {
                    const {editable: s} = t.config.selectors, {seek: a} = i.inputs;
                    if (n !== a && re(n, s)) return;
                    if (32 === e.which && re(n, 'button, [role^="menuitem"]')) return
                }
                switch ([32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57, 67, 70, 73, 75, 76, 77, 79].includes(s) && (e.preventDefault(), e.stopPropagation()), s) {
                    case 48:
                    case 49:
                    case 50:
                    case 51:
                    case 52:
                    case 53:
                    case 54:
                    case 55:
                    case 56:
                    case 57:
                        a || (t.currentTime = t.duration / 10 * (s - 48));
                        break;
                    case 32:
                    case 75:
                        a || ke(t.togglePlay());
                        break;
                    case 38:
                        t.increaseVolume(.1);
                        break;
                    case 40:
                        t.decreaseVolume(.1);
                        break;
                    case 77:
                        a || (t.muted = !t.muted);
                        break;
                    case 39:
                        t.forward();
                        break;
                    case 37:
                        t.rewind();
                        break;
                    case 70:
                        t.fullscreen.toggle();
                        break;
                    case 67:
                        a || t.toggleCaptions();
                        break;
                    case 76:
                        t.loop = !t.loop
                }
                27 === s && !t.fullscreen.usingNative && t.fullscreen.active && t.fullscreen.toggle(), this.lastKey = s
            } else this.lastKey = null
        }

        toggleMenu(e) {
            We.toggleMenu.call(this.player, e)
        }
    }

    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
    var ot = function (e, t) {
        return e(t = {exports: {}}, t.exports), t.exports
    }((function (e, t) {
        e.exports = function () {
            var e = function () {
            }, t = {}, i = {}, s = {};

            function n(e, t) {
                e = e.push ? e : [e];
                var n, a, l, o = [], r = e.length, c = r;
                for (n = function (e, i) {
                    i.length && o.push(e), --c || t(o)
                }; r--;) a = e[r], (l = i[a]) ? n(a, l) : (s[a] = s[a] || []).push(n)
            }

            function a(e, t) {
                if (e) {
                    var n = s[e];
                    if (i[e] = t, n) for (; n.length;) n[0](e, t), n.splice(0, 1)
                }
            }

            function l(t, i) {
                t.call && (t = {success: t}), i.length ? (t.error || e)(i) : (t.success || e)(t)
            }

            function o(t, i, s, n) {
                var a, l, r = document, c = s.async, h = (s.numRetries || 0) + 1, u = s.before || e,
                    d = t.replace(/[\?|#].*$/, ""), m = t.replace(/^(css|img)!/, "");
                n = n || 0, /(^css!|\.css$)/.test(d) ? ((l = r.createElement("link")).rel = "stylesheet", l.href = m, (a = "hideFocus" in l) && l.relList && (a = 0, l.rel = "preload", l.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(d) ? (l = r.createElement("img")).src = m : ((l = r.createElement("script")).src = t, l.async = void 0 === c || c), l.onload = l.onerror = l.onbeforeload = function (e) {
                    var r = e.type[0];
                    if (a) try {
                        l.sheet.cssText.length || (r = "e")
                    } catch (e) {
                        18 != e.code && (r = "e")
                    }
                    if ("e" == r) {
                        if ((n += 1) < h) return o(t, i, s, n)
                    } else if ("preload" == l.rel && "style" == l.as) return l.rel = "stylesheet";
                    i(t, r, e.defaultPrevented)
                }, !1 !== u(t, l) && r.head.appendChild(l)
            }

            function r(e, t, i) {
                var s, n, a = (e = e.push ? e : [e]).length, l = a, r = [];
                for (s = function (e, i, s) {
                    if ("e" == i && r.push(e), "b" == i) {
                        if (!s) return;
                        r.push(e)
                    }
                    --a || t(r)
                }, n = 0; n < l; n++) o(e[n], s, i)
            }

            function c(e, i, s) {
                var n, o;
                if (i && i.trim && (n = i), o = (n ? s : i) || {}, n) {
                    if (n in t) throw "LoadJS";
                    t[n] = !0
                }

                function c(t, i) {
                    r(e, (function (e) {
                        l(o, e), t && l({success: t, error: i}, e), a(n, e)
                    }), o)
                }

                if (o.returnPromise) return new Promise(c);
                c()
            }

            return c.ready = function (e, t) {
                return n(e, (function (e) {
                    l(t, e)
                })), c
            }, c.done = function (e) {
                a(e, [])
            }, c.reset = function () {
                t = {}, i = {}, s = {}
            }, c.isDefined = function (e) {
                return e in t
            }, c
        }()
    }));

    function rt(e) {
        return new Promise(((t, i) => {
            ot(e, {success: t, error: i})
        }))
    }

    function ct(e) {
        e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, ve.call(this, this.media, e ? "play" : "pause"))
    }

    const ht = {
        setup() {
            const e = this;
            le(e.elements.wrapper, e.config.classNames.embed, !0), e.options.speed = e.config.speed.options, Me.call(e), L(window.Vimeo) ? ht.ready.call(e) : rt(e.config.urls.vimeo.sdk).then((() => {
                ht.ready.call(e)
            })).catch((t => {
                e.debug.warn("Vimeo SDK (player.js) failed to load", t)
            }))
        }, ready() {
            const e = this, t = e.config.vimeo, {premium: i, referrerPolicy: s, ...n} = t;
            let a = e.media.getAttribute("src"), l = "";
            W(a) ? (a = e.media.getAttribute(e.config.attributes.embed.id), l = e.media.getAttribute(e.config.attributes.embed.hash)) : l = function (e) {
                const t = e.match(/^.*(?:vimeo.com\/|video\/)(?:\d+)(?:\?.*&*h=|\/)+(?<hash>[\d,a-f]+)/);
                return t ? t.groups.hash : null
            }(a);
            const o = l ? {h: l} : {};
            i && Object.assign(n, {controls: !1, sidedock: !1});
            const r = Ke({
                loop: e.config.loop.active,
                autoplay: e.autoplay,
                muted: e.muted,
                gesture: "media",
                playsinline: !this.config.fullscreen.iosNative, ...o, ...n
            }), c = W(h = a) ? null : $(Number(h)) ? h : h.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : h;
            var h;
            const u = Z("iframe"), d = $e(e.config.urls.vimeo.iframe, c, r);
            if (u.setAttribute("src", d), u.setAttribute("allowfullscreen", ""), u.setAttribute("allow", ["autoplay", "fullscreen", "picture-in-picture", "encrypted-media", "accelerometer", "gyroscope"].join("; ")), W(s) || u.setAttribute("referrerPolicy", s), i || !t.customControls) u.setAttribute("data-poster", e.poster), e.media = se(u, e.media); else {
                const t = Z("div", {class: e.config.classNames.embedContainer, "data-poster": e.poster});
                t.appendChild(u), e.media = se(t, e.media)
            }
            t.customControls || Re($e(e.config.urls.vimeo.api, d)).then((t => {
                !W(t) && t.thumbnail_url && at.setPoster.call(e, t.thumbnail_url).catch((() => {
                }))
            })), e.embed = new window.Vimeo.Player(u, {
                autopause: e.config.autopause,
                muted: e.muted
            }), e.media.paused = !0, e.media.currentTime = 0, e.supported.ui && e.embed.disableTextTrack(), e.media.play = () => (ct.call(e, !0), e.embed.play()), e.media.pause = () => (ct.call(e, !1), e.embed.pause()), e.media.stop = () => {
                e.pause(), e.currentTime = 0
            };
            let {currentTime: m} = e.media;
            Object.defineProperty(e.media, "currentTime", {
                get: () => m, set(t) {
                    const {embed: i, media: s, paused: n, volume: a} = e, l = n && !i.hasPlayed;
                    s.seeking = !0, ve.call(e, s, "seeking"), Promise.resolve(l && i.setVolume(0)).then((() => i.setCurrentTime(t))).then((() => l && i.pause())).then((() => l && i.setVolume(a))).catch((() => {
                    }))
                }
            });
            let p = e.config.speed.selected;
            Object.defineProperty(e.media, "playbackRate", {
                get: () => p, set(t) {
                    e.embed.setPlaybackRate(t).then((() => {
                        p = t, ve.call(e, e.media, "ratechange")
                    })).catch((() => {
                        e.options.speed = [1]
                    }))
                }
            });
            let {volume: g} = e.config;
            Object.defineProperty(e.media, "volume", {
                get: () => g, set(t) {
                    e.embed.setVolume(t).then((() => {
                        g = t, ve.call(e, e.media, "volumechange")
                    }))
                }
            });
            let {muted: f} = e.config;
            Object.defineProperty(e.media, "muted", {
                get: () => f, set(t) {
                    const i = !!O(t) && t;
                    e.embed.setVolume(i ? 0 : e.config.volume).then((() => {
                        f = i, ve.call(e, e.media, "volumechange")
                    }))
                }
            });
            let b, {loop: y} = e.config;
            Object.defineProperty(e.media, "loop", {
                get: () => y, set(t) {
                    const i = O(t) ? t : e.config.loop.active;
                    e.embed.setLoop(i).then((() => {
                        y = i
                    }))
                }
            }), e.embed.getVideoUrl().then((t => {
                b = t, We.setDownloadUrl.call(e)
            })).catch((e => {
                this.debug.warn(e)
            })), Object.defineProperty(e.media, "currentSrc", {get: () => b}), Object.defineProperty(e.media, "ended", {get: () => e.currentTime === e.duration}), Promise.all([e.embed.getVideoWidth(), e.embed.getVideoHeight()]).then((t => {
                const [i, s] = t;
                e.embed.ratio = Ie(i, s), Me.call(this)
            })), e.embed.setAutopause(e.config.autopause).then((t => {
                e.config.autopause = t
            })), e.embed.getVideoTitle().then((t => {
                e.config.title = t, at.setTitle.call(this)
            })), e.embed.getCurrentTime().then((t => {
                m = t, ve.call(e, e.media, "timeupdate")
            })), e.embed.getDuration().then((t => {
                e.media.duration = t, ve.call(e, e.media, "durationchange")
            })), e.embed.getTextTracks().then((t => {
                e.media.textTracks = t, Ye.setup.call(e)
            })), e.embed.on("cuechange", (({cues: t = []}) => {
                const i = t.map((e => function (e) {
                    const t = document.createDocumentFragment(), i = document.createElement("div");
                    return t.appendChild(i), i.innerHTML = e, t.firstChild.innerText
                }(e.text)));
                Ye.updateCues.call(e, i)
            })), e.embed.on("loaded", (() => {
                if (e.embed.getPaused().then((t => {
                    ct.call(e, !t), t || ve.call(e, e.media, "playing")
                })), H(e.embed.element) && e.supported.ui) {
                    e.embed.element.setAttribute("tabindex", -1)
                }
            })), e.embed.on("bufferstart", (() => {
                ve.call(e, e.media, "waiting")
            })), e.embed.on("bufferend", (() => {
                ve.call(e, e.media, "playing")
            })), e.embed.on("play", (() => {
                ct.call(e, !0), ve.call(e, e.media, "playing")
            })), e.embed.on("pause", (() => {
                ct.call(e, !1)
            })), e.embed.on("timeupdate", (t => {
                e.media.seeking = !1, m = t.seconds, ve.call(e, e.media, "timeupdate")
            })), e.embed.on("progress", (t => {
                e.media.buffered = t.percent, ve.call(e, e.media, "progress"), 1 === parseInt(t.percent, 10) && ve.call(e, e.media, "canplaythrough"), e.embed.getDuration().then((t => {
                    t !== e.media.duration && (e.media.duration = t, ve.call(e, e.media, "durationchange"))
                }))
            })), e.embed.on("seeked", (() => {
                e.media.seeking = !1, ve.call(e, e.media, "seeked")
            })), e.embed.on("ended", (() => {
                e.media.paused = !0, ve.call(e, e.media, "ended")
            })), e.embed.on("error", (t => {
                e.media.error = t, ve.call(e, e.media, "error")
            })), t.customControls && setTimeout((() => at.build.call(e)), 0)
        }
    };

    function ut(e) {
        e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, ve.call(this, this.media, e ? "play" : "pause"))
    }

    function dt(e) {
        return e.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0
    }

    const mt = {
        setup() {
            if (le(this.elements.wrapper, this.config.classNames.embed, !0), L(window.YT) && j(window.YT.Player)) mt.ready.call(this); else {
                const e = window.onYouTubeIframeAPIReady;
                window.onYouTubeIframeAPIReady = () => {
                    j(e) && e(), mt.ready.call(this)
                }, rt(this.config.urls.youtube.sdk).catch((e => {
                    this.debug.warn("YouTube API failed to load", e)
                }))
            }
        }, getTitle(e) {
            Re($e(this.config.urls.youtube.api, e)).then((e => {
                if (L(e)) {
                    const {title: t, height: i, width: s} = e;
                    this.config.title = t, at.setTitle.call(this), this.embed.ratio = Ie(s, i)
                }
                Me.call(this)
            })).catch((() => {
                Me.call(this)
            }))
        }, ready() {
            const e = this, t = e.config.youtube, i = e.media && e.media.getAttribute("id");
            if (!W(i) && i.startsWith("youtube-")) return;
            let s = e.media.getAttribute("src");
            W(s) && (s = e.media.getAttribute(this.config.attributes.embed.id));
            const n = W(a = s) ? null : a.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : a;
            var a;
            const l = Z("div", {
                id: `${e.provider}-${Math.floor(1e4 * Math.random())}`,
                "data-poster": t.customControls ? e.poster : void 0
            });
            if (e.media = se(l, e.media), t.customControls) {
                const t = e => `https://i.ytimg.com/vi/${n}/${e}default.jpg`;
                nt(t("maxres"), 121).catch((() => nt(t("sd"), 121))).catch((() => nt(t("hq")))).then((t => at.setPoster.call(e, t.src))).then((t => {
                    t.includes("maxres") || (e.elements.poster.style.backgroundSize = "cover")
                })).catch((() => {
                }))
            }
            e.embed = new window.YT.Player(e.media, {
                videoId: n,
                host: dt(t),
                playerVars: X({}, {
                    autoplay: e.config.autoplay ? 1 : 0,
                    hl: e.config.hl,
                    controls: e.supported.ui && t.customControls ? 0 : 1,
                    disablekb: 1,
                    playsinline: e.config.fullscreen.iosNative ? 0 : 1,
                    cc_load_policy: e.captions.active ? 1 : 0,
                    cc_lang_pref: e.config.captions.language,
                    widget_referrer: window ? window.location.href : null
                }, t),
                events: {
                    onError(t) {
                        if (!e.media.error) {
                            const i = t.data, s = {
                                2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                                5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                                100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                                101: "The owner of the requested video does not allow it to be played in embedded players.",
                                150: "The owner of the requested video does not allow it to be played in embedded players."
                            }[i] || "An unknown error occured";
                            e.media.error = {code: i, message: s}, ve.call(e, e.media, "error")
                        }
                    }, onPlaybackRateChange(t) {
                        const i = t.target;
                        e.media.playbackRate = i.getPlaybackRate(), ve.call(e, e.media, "ratechange")
                    }, onReady(i) {
                        if (j(e.media.play)) return;
                        const s = i.target;
                        mt.getTitle.call(e, n), e.media.play = () => {
                            ut.call(e, !0), s.playVideo()
                        }, e.media.pause = () => {
                            ut.call(e, !1), s.pauseVideo()
                        }, e.media.stop = () => {
                            s.stopVideo()
                        }, e.media.duration = s.getDuration(), e.media.paused = !0, e.media.currentTime = 0, Object.defineProperty(e.media, "currentTime", {
                            get: () => Number(s.getCurrentTime()),
                            set(t) {
                                e.paused && !e.embed.hasPlayed && e.embed.mute(), e.media.seeking = !0, ve.call(e, e.media, "seeking"), s.seekTo(t)
                            }
                        }), Object.defineProperty(e.media, "playbackRate", {
                            get: () => s.getPlaybackRate(), set(e) {
                                s.setPlaybackRate(e)
                            }
                        });
                        let {volume: a} = e.config;
                        Object.defineProperty(e.media, "volume", {
                            get: () => a, set(t) {
                                a = t, s.setVolume(100 * a), ve.call(e, e.media, "volumechange")
                            }
                        });
                        let {muted: l} = e.config;
                        Object.defineProperty(e.media, "muted", {
                            get: () => l, set(t) {
                                const i = O(t) ? t : l;
                                l = i, s[i ? "mute" : "unMute"](), s.setVolume(100 * a), ve.call(e, e.media, "volumechange")
                            }
                        }), Object.defineProperty(e.media, "currentSrc", {get: () => s.getVideoUrl()}), Object.defineProperty(e.media, "ended", {get: () => e.currentTime === e.duration});
                        const o = s.getAvailablePlaybackRates();
                        e.options.speed = o.filter((t => e.config.speed.options.includes(t))), e.supported.ui && t.customControls && e.media.setAttribute("tabindex", -1), ve.call(e, e.media, "timeupdate"), ve.call(e, e.media, "durationchange"), clearInterval(e.timers.buffering), e.timers.buffering = setInterval((() => {
                            e.media.buffered = s.getVideoLoadedFraction(), (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && ve.call(e, e.media, "progress"), e.media.lastBuffered = e.media.buffered, 1 === e.media.buffered && (clearInterval(e.timers.buffering), ve.call(e, e.media, "canplaythrough"))
                        }), 200), t.customControls && setTimeout((() => at.build.call(e)), 50)
                    }, onStateChange(i) {
                        const s = i.target;
                        clearInterval(e.timers.playing);
                        switch (e.media.seeking && [1, 2].includes(i.data) && (e.media.seeking = !1, ve.call(e, e.media, "seeked")), i.data) {
                            case-1:
                                ve.call(e, e.media, "timeupdate"), e.media.buffered = s.getVideoLoadedFraction(), ve.call(e, e.media, "progress");
                                break;
                            case 0:
                                ut.call(e, !1), e.media.loop ? (s.stopVideo(), s.playVideo()) : ve.call(e, e.media, "ended");
                                break;
                            case 1:
                                t.customControls && !e.config.autoplay && e.media.paused && !e.embed.hasPlayed ? e.media.pause() : (ut.call(e, !0), ve.call(e, e.media, "playing"), e.timers.playing = setInterval((() => {
                                    ve.call(e, e.media, "timeupdate")
                                }), 50), e.media.duration !== s.getDuration() && (e.media.duration = s.getDuration(), ve.call(e, e.media, "durationchange")));
                                break;
                            case 2:
                                e.muted || e.embed.unMute(), ut.call(e, !1);
                                break;
                            case 3:
                                ve.call(e, e.media, "waiting")
                        }
                        ve.call(e, e.elements.container, "statechange", !1, {code: i.data})
                    }
                }
            })
        }
    }, pt = {
        setup() {
            this.media ? (le(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), le(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && le(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = Z("div", {class: this.config.classNames.video}), J(this.media, this.elements.wrapper), this.elements.poster = Z("div", {class: this.config.classNames.poster}), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? Le.setup.call(this) : this.isYouTube ? mt.setup.call(this) : this.isVimeo && ht.setup.call(this)) : this.debug.warn("No media element found!")
        }
    };

    class gt {
        constructor(t) {
            e(this, "load", (() => {
                this.enabled && (L(window.google) && L(window.google.ima) ? this.ready() : rt(this.player.config.urls.googleIMA.sdk).then((() => {
                    this.ready()
                })).catch((() => {
                    this.trigger("error", new Error("Google IMA SDK failed to load"))
                })))
            })), e(this, "ready", (() => {
                var e;
                this.enabled || ((e = this).manager && e.manager.destroy(), e.elements.displayContainer && e.elements.displayContainer.destroy(), e.elements.container.remove()), this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then((() => {
                    this.clearSafetyTimer("onAdsManagerLoaded()")
                })), this.listeners(), this.setupIMA()
            })), e(this, "setupIMA", (() => {
                this.elements.container = Z("div", {class: this.player.config.classNames.ads}), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media), this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, (e => this.onAdsManagerLoaded(e)), !1), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (e => this.onAdError(e)), !1), this.requestAds()
            })), e(this, "requestAds", (() => {
                const {container: e} = this.player.elements;
                try {
                    const t = new google.ima.AdsRequest;
                    t.adTagUrl = this.tagUrl, t.linearAdSlotWidth = e.offsetWidth, t.linearAdSlotHeight = e.offsetHeight, t.nonLinearAdSlotWidth = e.offsetWidth, t.nonLinearAdSlotHeight = e.offsetHeight, t.forceNonLinearFullSlot = !1, t.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(t)
                } catch (e) {
                    this.onAdError(e)
                }
            })), e(this, "pollCountdown", ((e = !1) => {
                if (!e) return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");
                this.countdownTimer = setInterval((() => {
                    const e = Ue(Math.max(this.manager.getRemainingTime(), 0)),
                        t = `${He.get("advertisement", this.player.config)} - ${e}`;
                    this.elements.container.setAttribute("data-badge-text", t)
                }), 100)
            })), e(this, "onAdsManagerLoaded", (e => {
                if (!this.enabled) return;
                const t = new google.ima.AdsRenderingSettings;
                t.restoreCustomPlaybackStateOnAdBreakComplete = !0, t.enablePreloading = !0, this.manager = e.getAdsManager(this.player, t), this.cuePoints = this.manager.getCuePoints(), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (e => this.onAdError(e))), Object.keys(google.ima.AdEvent.Type).forEach((e => {
                    this.manager.addEventListener(google.ima.AdEvent.Type[e], (e => this.onAdEvent(e)))
                })), this.trigger("loaded")
            })), e(this, "addCuePoints", (() => {
                W(this.cuePoints) || this.cuePoints.forEach((e => {
                    if (0 !== e && -1 !== e && e < this.player.duration) {
                        const t = this.player.elements.progress;
                        if (H(t)) {
                            const i = 100 / this.player.duration * e,
                                s = Z("span", {class: this.player.config.classNames.cues});
                            s.style.left = `${i.toString()}%`, t.appendChild(s)
                        }
                    }
                }))
            })), e(this, "onAdEvent", (e => {
                const {container: t} = this.player.elements, i = e.getAd(), s = e.getAdData();
                switch ((e => {
                    ve.call(this.player, this.player.media, `ads${e.replace(/_/g, "").toLowerCase()}`)
                })(e.type), e.type) {
                    case google.ima.AdEvent.Type.LOADED:
                        this.trigger("loaded"), this.pollCountdown(!0), i.isLinear() || (i.width = t.offsetWidth, i.height = t.offsetHeight);
                        break;
                    case google.ima.AdEvent.Type.STARTED:
                        this.manager.setVolume(this.player.volume);
                        break;
                    case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                        this.player.ended ? this.loadAds() : this.loader.contentComplete();
                        break;
                    case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                        this.pauseContent();
                        break;
                    case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                        this.pollCountdown(), this.resumeContent();
                        break;
                    case google.ima.AdEvent.Type.LOG:
                        s.adError && this.player.debug.warn(`Non-fatal ad error: ${s.adError.getMessage()}`)
                }
            })), e(this, "onAdError", (e => {
                this.cancel(), this.player.debug.warn("Ads error", e)
            })), e(this, "listeners", (() => {
                const {container: e} = this.player.elements;
                let t;
                this.player.on("canplay", (() => {
                    this.addCuePoints()
                })), this.player.on("ended", (() => {
                    this.loader.contentComplete()
                })), this.player.on("timeupdate", (() => {
                    t = this.player.currentTime
                })), this.player.on("seeked", (() => {
                    const e = this.player.currentTime;
                    W(this.cuePoints) || this.cuePoints.forEach(((i, s) => {
                        t < i && i < e && (this.manager.discardAdBreak(), this.cuePoints.splice(s, 1))
                    }))
                })), window.addEventListener("resize", (() => {
                    this.manager && this.manager.resize(e.offsetWidth, e.offsetHeight, google.ima.ViewMode.NORMAL)
                }))
            })), e(this, "play", (() => {
                const {container: e} = this.player.elements;
                this.managerPromise || this.resumeContent(), this.managerPromise.then((() => {
                    this.manager.setVolume(this.player.volume), this.elements.displayContainer.initialize();
                    try {
                        this.initialized || (this.manager.init(e.offsetWidth, e.offsetHeight, google.ima.ViewMode.NORMAL), this.manager.start()), this.initialized = !0
                    } catch (e) {
                        this.onAdError(e)
                    }
                })).catch((() => {
                }))
            })), e(this, "resumeContent", (() => {
                this.elements.container.style.zIndex = "", this.playing = !1, ke(this.player.media.play())
            })), e(this, "pauseContent", (() => {
                this.elements.container.style.zIndex = 3, this.playing = !0, this.player.media.pause()
            })), e(this, "cancel", (() => {
                this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds()
            })), e(this, "loadAds", (() => {
                this.managerPromise.then((() => {
                    this.manager && this.manager.destroy(), this.managerPromise = new Promise((e => {
                        this.on("loaded", e), this.player.debug.log(this.manager)
                    })), this.initialized = !1, this.requestAds()
                })).catch((() => {
                }))
            })), e(this, "trigger", ((e, ...t) => {
                const i = this.events[e];
                q(i) && i.forEach((e => {
                    j(e) && e.apply(this, t)
                }))
            })), e(this, "on", ((e, t) => (q(this.events[e]) || (this.events[e] = []), this.events[e].push(t), this))), e(this, "startSafetyTimer", ((e, t) => {
                this.player.debug.log(`Safety timer invoked from: ${t}`), this.safetyTimer = setTimeout((() => {
                    this.cancel(), this.clearSafetyTimer("startSafetyTimer()")
                }), e)
            })), e(this, "clearSafetyTimer", (e => {
                I(this.safetyTimer) || (this.player.debug.log(`Safety timer cleared from: ${e}`), clearTimeout(this.safetyTimer), this.safetyTimer = null)
            })), this.player = t, this.config = t.config.ads, this.playing = !1, this.initialized = !1, this.elements = {
                container: null,
                displayContainer: null
            }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise(((e, t) => {
                this.on("loaded", e), this.on("error", t)
            })), this.load()
        }

        get enabled() {
            const {config: e} = this;
            return this.player.isHTML5 && this.player.isVideo && e.enabled && (!W(e.publisherId) || U(e.tagUrl))
        }

        get tagUrl() {
            const {config: e} = this;
            if (U(e.tagUrl)) return e.tagUrl;
            return `https://go.aniview.com/api/adserver6/vast/?${Ke({
                AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
                AV_CHANNELID: "5a0458dc28a06145e4519d21",
                AV_URL: window.location.hostname,
                cb: Date.now(),
                AV_WIDTH: 640,
                AV_HEIGHT: 480,
                AV_CDIM2: e.publisherId
            })}`
        }
    }

    const ft = e => {
        const t = [];
        return e.split(/\r\n\r\n|\n\n|\r\r/).forEach((e => {
            const i = {};
            e.split(/\r\n|\n|\r/).forEach((e => {
                if ($(i.startTime)) {
                    if (!W(e.trim()) && W(i.text)) {
                        const t = e.trim().split("#xywh=");
                        [i.text] = t, t[1] && ([i.x, i.y, i.w, i.h] = t[1].split(","))
                    }
                } else {
                    const t = e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
                    t && (i.startTime = 60 * Number(t[1] || 0) * 60 + 60 * Number(t[2]) + Number(t[3]) + Number(`0.${t[4]}`), i.endTime = 60 * Number(t[6] || 0) * 60 + 60 * Number(t[7]) + Number(t[8]) + Number(`0.${t[9]}`))
                }
            })), i.text && t.push(i)
        })), t
    }, bt = (e, t) => {
        const i = {};
        return e > t.width / t.height ? (i.width = t.width, i.height = 1 / e * t.width) : (i.height = t.height, i.width = e * t.height), i
    };

    class yt {
        constructor(t) {
            e(this, "load", (() => {
                this.player.elements.display.seekTooltip && (this.player.elements.display.seekTooltip.hidden = this.enabled), this.enabled && this.getThumbnails().then((() => {
                    this.enabled && (this.render(), this.determineContainerAutoSizing(), this.loaded = !0)
                }))
            })), e(this, "getThumbnails", (() => new Promise((e => {
                const {src: t} = this.player.config.previewThumbnails;
                if (W(t)) throw new Error("Missing previewThumbnails.src config attribute");
                const i = () => {
                    this.thumbnails.sort(((e, t) => e.height - t.height)), this.player.debug.log("Preview thumbnails", this.thumbnails), e()
                };
                if (j(t)) t((e => {
                    this.thumbnails = e, i()
                })); else {
                    const e = (_(t) ? [t] : t).map((e => this.getThumbnail(e)));
                    Promise.all(e).then(i)
                }
            })))), e(this, "getThumbnail", (e => new Promise((t => {
                Re(e).then((i => {
                    const s = {frames: ft(i), height: null, urlPrefix: ""};
                    s.frames[0].text.startsWith("/") || s.frames[0].text.startsWith("http://") || s.frames[0].text.startsWith("https://") || (s.urlPrefix = e.substring(0, e.lastIndexOf("/") + 1));
                    const n = new Image;
                    n.onload = () => {
                        s.height = n.naturalHeight, s.width = n.naturalWidth, this.thumbnails.push(s), t()
                    }, n.src = s.urlPrefix + s.frames[0].text
                }))
            })))), e(this, "startMove", (e => {
                if (this.loaded && F(e) && ["touchmove", "mousemove"].includes(e.type) && this.player.media.duration) {
                    if ("touchmove" === e.type) this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100); else {
                        const t = this.player.elements.progress.getBoundingClientRect(),
                            i = 100 / t.width * (e.pageX - t.left);
                        this.seekTime = this.player.media.duration * (i / 100), this.seekTime < 0 && (this.seekTime = 0), this.seekTime > this.player.media.duration - 1 && (this.seekTime = this.player.media.duration - 1), this.mousePosX = e.pageX, this.elements.thumb.time.innerText = Ue(this.seekTime)
                    }
                    this.showImageAtCurrentTime()
                }
            })), e(this, "endMove", (() => {
                this.toggleThumbContainer(!1, !0)
            })), e(this, "startScrubbing", (e => {
                (I(e.button) || !1 === e.button || 0 === e.button) && (this.mouseDown = !0, this.player.media.duration && (this.toggleScrubbingContainer(!0), this.toggleThumbContainer(!1, !0), this.showImageAtCurrentTime()))
            })), e(this, "endScrubbing", (() => {
                this.mouseDown = !1, Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime) ? this.toggleScrubbingContainer(!1) : ye.call(this.player, this.player.media, "timeupdate", (() => {
                    this.mouseDown || this.toggleScrubbingContainer(!1)
                }))
            })), e(this, "listeners", (() => {
                this.player.on("play", (() => {
                    this.toggleThumbContainer(!1, !0)
                })), this.player.on("seeked", (() => {
                    this.toggleThumbContainer(!1)
                })), this.player.on("timeupdate", (() => {
                    this.lastTime = this.player.media.currentTime
                }))
            })), e(this, "render", (() => {
                this.elements.thumb.container = Z("div", {class: this.player.config.classNames.previewThumbnails.thumbContainer}), this.elements.thumb.imageContainer = Z("div", {class: this.player.config.classNames.previewThumbnails.imageContainer}), this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
                const e = Z("div", {class: this.player.config.classNames.previewThumbnails.timeContainer});
                this.elements.thumb.time = Z("span", {}, "00:00"), e.appendChild(this.elements.thumb.time), this.elements.thumb.container.appendChild(e), H(this.player.elements.progress) && this.player.elements.progress.appendChild(this.elements.thumb.container), this.elements.scrubbing.container = Z("div", {class: this.player.config.classNames.previewThumbnails.scrubbingContainer}), this.player.elements.wrapper.appendChild(this.elements.scrubbing.container)
            })), e(this, "destroy", (() => {
                this.elements.thumb.container && this.elements.thumb.container.remove(), this.elements.scrubbing.container && this.elements.scrubbing.container.remove()
            })), e(this, "showImageAtCurrentTime", (() => {
                this.mouseDown ? this.setScrubbingContainerSize() : this.setThumbContainerSizeAndPos();
                const e = this.thumbnails[0].frames.findIndex((e => this.seekTime >= e.startTime && this.seekTime <= e.endTime)),
                    t = e >= 0;
                let i = 0;
                this.mouseDown || this.toggleThumbContainer(t), t && (this.thumbnails.forEach(((t, s) => {
                    this.loadedImages.includes(t.frames[e].text) && (i = s)
                })), e !== this.showingThumb && (this.showingThumb = e, this.loadImage(i)))
            })), e(this, "loadImage", ((e = 0) => {
                const t = this.showingThumb, i = this.thumbnails[e], {urlPrefix: s} = i, n = i.frames[t],
                    a = i.frames[t].text, l = s + a;
                if (this.currentImageElement && this.currentImageElement.dataset.filename === a) this.showImage(this.currentImageElement, n, e, t, a, !1), this.currentImageElement.dataset.index = t, this.removeOldImages(this.currentImageElement); else {
                    this.loadingImage && this.usingSprites && (this.loadingImage.onload = null);
                    const i = new Image;
                    i.src = l, i.dataset.index = t, i.dataset.filename = a, this.showingThumbFilename = a, this.player.debug.log(`Loading image: ${l}`), i.onload = () => this.showImage(i, n, e, t, a, !0), this.loadingImage = i, this.removeOldImages(i)
                }
            })), e(this, "showImage", ((e, t, i, s, n, a = !0) => {
                this.player.debug.log(`Showing thumb: ${n}. num: ${s}. qual: ${i}. newimg: ${a}`), this.setImageSizeAndOffset(e, t), a && (this.currentImageContainer.appendChild(e), this.currentImageElement = e, this.loadedImages.includes(n) || this.loadedImages.push(n)), this.preloadNearby(s, !0).then(this.preloadNearby(s, !1)).then(this.getHigherQuality(i, e, t, n))
            })), e(this, "removeOldImages", (e => {
                Array.from(this.currentImageContainer.children).forEach((t => {
                    if ("img" !== t.tagName.toLowerCase()) return;
                    const i = this.usingSprites ? 500 : 1e3;
                    if (t.dataset.index !== e.dataset.index && !t.dataset.deleting) {
                        t.dataset.deleting = !0;
                        const {currentImageContainer: e} = this;
                        setTimeout((() => {
                            e.removeChild(t), this.player.debug.log(`Removing thumb: ${t.dataset.filename}`)
                        }), i)
                    }
                }))
            })), e(this, "preloadNearby", ((e, t = !0) => new Promise((i => {
                setTimeout((() => {
                    const s = this.thumbnails[0].frames[e].text;
                    if (this.showingThumbFilename === s) {
                        let n;
                        n = t ? this.thumbnails[0].frames.slice(e) : this.thumbnails[0].frames.slice(0, e).reverse();
                        let a = !1;
                        n.forEach((e => {
                            const t = e.text;
                            if (t !== s && !this.loadedImages.includes(t)) {
                                a = !0, this.player.debug.log(`Preloading thumb filename: ${t}`);
                                const {urlPrefix: e} = this.thumbnails[0], s = e + t, n = new Image;
                                n.src = s, n.onload = () => {
                                    this.player.debug.log(`Preloaded thumb filename: ${t}`), this.loadedImages.includes(t) || this.loadedImages.push(t), i()
                                }
                            }
                        })), a || i()
                    }
                }), 300)
            })))), e(this, "getHigherQuality", ((e, t, i, s) => {
                if (e < this.thumbnails.length - 1) {
                    let n = t.naturalHeight;
                    this.usingSprites && (n = i.h), n < this.thumbContainerHeight && setTimeout((() => {
                        this.showingThumbFilename === s && (this.player.debug.log(`Showing higher quality thumb for: ${s}`), this.loadImage(e + 1))
                    }), 300)
                }
            })), e(this, "toggleThumbContainer", ((e = !1, t = !1) => {
                const i = this.player.config.classNames.previewThumbnails.thumbContainerShown;
                this.elements.thumb.container.classList.toggle(i, e), !e && t && (this.showingThumb = null, this.showingThumbFilename = null)
            })), e(this, "toggleScrubbingContainer", ((e = !1) => {
                const t = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
                this.elements.scrubbing.container.classList.toggle(t, e), e || (this.showingThumb = null, this.showingThumbFilename = null)
            })), e(this, "determineContainerAutoSizing", (() => {
                (this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) && (this.sizeSpecifiedInCSS = !0)
            })), e(this, "setThumbContainerSizeAndPos", (() => {
                if (this.sizeSpecifiedInCSS) {
                    if (this.elements.thumb.imageContainer.clientHeight > 20 && this.elements.thumb.imageContainer.clientWidth < 20) {
                        const e = Math.floor(this.elements.thumb.imageContainer.clientHeight * this.thumbAspectRatio);
                        this.elements.thumb.imageContainer.style.width = `${e}px`
                    } else if (this.elements.thumb.imageContainer.clientHeight < 20 && this.elements.thumb.imageContainer.clientWidth > 20) {
                        const e = Math.floor(this.elements.thumb.imageContainer.clientWidth / this.thumbAspectRatio);
                        this.elements.thumb.imageContainer.style.height = `${e}px`
                    }
                } else {
                    const e = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
                    this.elements.thumb.imageContainer.style.height = `${this.thumbContainerHeight}px`, this.elements.thumb.imageContainer.style.width = `${e}px`
                }
                this.setThumbContainerPos()
            })), e(this, "setThumbContainerPos", (() => {
                const e = this.player.elements.progress.getBoundingClientRect(),
                    t = this.player.elements.container.getBoundingClientRect(), {container: i} = this.elements.thumb,
                    s = t.left - e.left + 10, n = t.right - e.left - i.clientWidth - 10;
                let a = this.mousePosX - e.left - i.clientWidth / 2;
                a < s && (a = s), a > n && (a = n), i.style.left = `${a}px`
            })), e(this, "setScrubbingContainerSize", (() => {
                const {width: e, height: t} = bt(this.thumbAspectRatio, {
                    width: this.player.media.clientWidth,
                    height: this.player.media.clientHeight
                });
                this.elements.scrubbing.container.style.width = `${e}px`, this.elements.scrubbing.container.style.height = `${t}px`
            })), e(this, "setImageSizeAndOffset", ((e, t) => {
                if (!this.usingSprites) return;
                const i = this.thumbContainerHeight / t.h;
                e.style.height = e.naturalHeight * i + "px", e.style.width = e.naturalWidth * i + "px", e.style.left = `-${t.x * i}px`, e.style.top = `-${t.y * i}px`
            })), this.player = t, this.thumbnails = [], this.loaded = !1, this.lastMouseMoveTime = Date.now(), this.mouseDown = !1, this.loadedImages = [], this.elements = {
                thumb: {},
                scrubbing: {}
            }, this.load()
        }

        get enabled() {
            return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled
        }

        get currentImageContainer() {
            return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer
        }

        get usingSprites() {
            return Object.keys(this.thumbnails[0].frames[0]).includes("w")
        }

        get thumbAspectRatio() {
            return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height
        }

        get thumbContainerHeight() {
            if (this.mouseDown) {
                const {height: e} = bt(this.thumbAspectRatio, {
                    width: this.player.media.clientWidth,
                    height: this.player.media.clientHeight
                });
                return e
            }
            return this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4)
        }

        get currentImageElement() {
            return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement
        }

        set currentImageElement(e) {
            this.mouseDown ? this.currentScrubbingImageElement = e : this.currentThumbnailImageElement = e
        }
    }

    const vt = {
        insertElements(e, t) {
            _(t) ? ee(e, this.media, {src: t}) : q(t) && t.forEach((t => {
                ee(e, this.media, t)
            }))
        }, change(e) {
            Q(e, "sources.length") ? (Le.cancelRequests.call(this), this.destroy.call(this, (() => {
                this.options.quality = [], te(this.media), this.media = null, H(this.elements.container) && this.elements.container.removeAttribute("class");
                const {sources: t, type: i} = e, [{provider: s = Ge.html5, src: n}] = t, a = "html5" === s ? i : "div",
                    l = "html5" === s ? {} : {src: n};
                Object.assign(this, {
                    provider: s,
                    type: i,
                    supported: me.check(i, s, this.config.playsinline),
                    media: Z(a, l)
                }), this.elements.container.appendChild(this.media), O(e.autoplay) && (this.config.autoplay = e.autoplay), this.isHTML5 && (this.config.crossorigin && this.media.setAttribute("crossorigin", ""), this.config.autoplay && this.media.setAttribute("autoplay", ""), W(e.poster) || (this.poster = e.poster), this.config.loop.active && this.media.setAttribute("loop", ""), this.config.muted && this.media.setAttribute("muted", ""), this.config.playsinline && this.media.setAttribute("playsinline", "")), at.addStyleHook.call(this), this.isHTML5 && vt.insertElements.call(this, "source", t), this.config.title = e.title, pt.setup.call(this), this.isHTML5 && Object.keys(e).includes("tracks") && vt.insertElements.call(this, "track", e.tracks), (this.isHTML5 || this.isEmbed && !this.supported.ui) && at.build.call(this), this.isHTML5 && this.media.load(), W(e.previewThumbnails) || (Object.assign(this.config.previewThumbnails, e.previewThumbnails), this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), this.previewThumbnails = null), this.config.previewThumbnails.enabled && (this.previewThumbnails = new yt(this))), this.fullscreen.update()
            }), !0)) : this.debug.warn("Invalid source format")
        }
    };

    class wt {
        constructor(t, i) {
            if (e(this, "play", (() => j(this.media.play) ? (this.ads && this.ads.enabled && this.ads.managerPromise.then((() => this.ads.play())).catch((() => ke(this.media.play()))), this.media.play()) : null)), e(this, "pause", (() => this.playing && j(this.media.pause) ? this.media.pause() : null)), e(this, "togglePlay", (e => (O(e) ? e : !this.playing) ? this.play() : this.pause())), e(this, "stop", (() => {
                this.isHTML5 ? (this.pause(), this.restart()) : j(this.media.stop) && this.media.stop()
            })), e(this, "restart", (() => {
                this.currentTime = 0
            })), e(this, "rewind", (e => {
                this.currentTime -= $(e) ? e : this.config.seekTime
            })), e(this, "forward", (e => {
                this.currentTime += $(e) ? e : this.config.seekTime
            })), e(this, "increaseVolume", (e => {
                const t = this.media.muted ? 0 : this.volume;
                this.volume = t + ($(e) ? e : 0)
            })), e(this, "decreaseVolume", (e => {
                this.increaseVolume(-e)
            })), e(this, "airplay", (() => {
                me.airplay && this.media.webkitShowPlaybackTargetPicker()
            })), e(this, "toggleControls", (e => {
                if (this.supported.ui && !this.isAudio) {
                    const t = oe(this.elements.container, this.config.classNames.hideControls),
                        i = void 0 === e ? void 0 : !e,
                        s = le(this.elements.container, this.config.classNames.hideControls, i);
                    if (s && q(this.config.controls) && this.config.controls.includes("settings") && !W(this.config.settings) && We.toggleMenu.call(this, !1), s !== t) {
                        const e = s ? "controlshidden" : "controlsshown";
                        ve.call(this, this.media, e)
                    }
                    return !s
                }
                return !1
            })), e(this, "on", ((e, t) => {
                fe.call(this, this.elements.container, e, t)
            })), e(this, "once", ((e, t) => {
                ye.call(this, this.elements.container, e, t)
            })), e(this, "off", ((e, t) => {
                be(this.elements.container, e, t)
            })), e(this, "destroy", ((e, t = !1) => {
                if (!this.ready) return;
                const i = () => {
                    document.body.style.overflow = "", this.embed = null, t ? (Object.keys(this.elements).length && (te(this.elements.buttons.play), te(this.elements.captions), te(this.elements.controls), te(this.elements.wrapper), this.elements.buttons.play = null, this.elements.captions = null, this.elements.controls = null, this.elements.wrapper = null), j(e) && e()) : (we.call(this), Le.cancelRequests.call(this), se(this.elements.original, this.elements.container), ve.call(this, this.elements.original, "destroyed", !0), j(e) && e.call(this.elements.original), this.ready = !1, setTimeout((() => {
                        this.elements = null, this.media = null
                    }), 200))
                };
                this.stop(), clearTimeout(this.timers.loading), clearTimeout(this.timers.controls), clearTimeout(this.timers.resized), this.isHTML5 ? (at.toggleNativeControls.call(this, !0), i()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && j(this.embed.destroy) && this.embed.destroy(), i()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(i), setTimeout(i, 200))
            })), e(this, "supports", (e => me.mime.call(this, e))), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = me.touch, this.media = t, _(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || D(this.media) || q(this.media)) && (this.media = this.media[0]), this.config = X({}, Qe, wt.defaults, i || {}, (() => {
                try {
                    return JSON.parse(this.media.getAttribute("data-plyr-config"))
                } catch (e) {
                    return {}
                }
            })()), this.elements = {
                container: null,
                fullscreen: null,
                captions: null,
                buttons: {},
                display: {},
                progress: {},
                inputs: {},
                settings: {popup: null, menu: null, panels: {}, buttons: {}}
            }, this.captions = {
                active: null,
                currentTrack: -1,
                meta: new WeakMap
            }, this.fullscreen = {active: !1}, this.options = {
                speed: [],
                quality: []
            }, this.debug = new it(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", me), I(this.media) || !H(this.media)) return void this.debug.error("Setup failed: no suitable element passed");
            if (this.media.plyr) return void this.debug.warn("Target already setup");
            if (!this.config.enabled) return void this.debug.error("Setup failed: disabled by config");
            if (!me.check().api) return void this.debug.error("Setup failed: no support");
            const s = this.media.cloneNode(!0);
            s.autoplay = !1, this.elements.original = s;
            const n = this.media.tagName.toLowerCase();
            let a = null, l = null;
            switch (n) {
                case"div":
                    if (a = this.media.querySelector("iframe"), H(a)) {
                        if (l = ze(a.getAttribute("src")), this.provider = function (e) {
                            return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e) ? Ge.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e) ? Ge.vimeo : null
                        }(l.toString()), this.elements.container = this.media, this.media = a, this.elements.container.className = "", l.search.length) {
                            const e = ["1", "true"];
                            e.includes(l.searchParams.get("autoplay")) && (this.config.autoplay = !0), e.includes(l.searchParams.get("loop")) && (this.config.loop.active = !0), this.isYouTube ? (this.config.playsinline = e.includes(l.searchParams.get("playsinline")), this.config.youtube.hl = l.searchParams.get("hl")) : this.config.playsinline = !0
                        }
                    } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
                    if (W(this.provider) || !Object.values(Ge).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
                    this.type = et;
                    break;
                case"video":
                case"audio":
                    this.type = n, this.provider = Ge.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
                    break;
                default:
                    return void this.debug.error("Setup failed: unsupported type")
            }
            this.supported = me.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.eventListeners = [], this.listeners = new lt(this), this.storage = new Fe(this), this.media.plyr = this, H(this.elements.container) || (this.elements.container = Z("div", {tabindex: 0}), J(this.media, this.elements.container)), at.migrateStyles.call(this), at.addStyleHook.call(this), pt.setup.call(this), this.config.debug && fe.call(this, this.elements.container, this.config.events.join(" "), (e => {
                this.debug.log(`event: ${e.type}`)
            })), this.fullscreen = new st(this), (this.isHTML5 || this.isEmbed && !this.supported.ui) && at.build.call(this), this.listeners.container(), this.listeners.global(), this.config.ads.enabled && (this.ads = new gt(this)), this.isHTML5 && this.config.autoplay && this.once("canplay", (() => ke(this.play()))), this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new yt(this))) : this.debug.error("Setup failed: no support")
        }

        get isHTML5() {
            return this.provider === Ge.html5
        }

        get isEmbed() {
            return this.isYouTube || this.isVimeo
        }

        get isYouTube() {
            return this.provider === Ge.youtube
        }

        get isVimeo() {
            return this.provider === Ge.vimeo
        }

        get isVideo() {
            return this.type === et
        }

        get isAudio() {
            return this.type === Ze
        }

        get playing() {
            return Boolean(this.ready && !this.paused && !this.ended)
        }

        get paused() {
            return Boolean(this.media.paused)
        }

        get stopped() {
            return Boolean(this.paused && 0 === this.currentTime)
        }

        get ended() {
            return Boolean(this.media.ended)
        }

        set currentTime(e) {
            if (!this.duration) return;
            const t = $(e) && e > 0;
            this.media.currentTime = t ? Math.min(e, this.duration) : 0, this.debug.log(`Seeking to ${this.currentTime} seconds`)
        }

        get currentTime() {
            return Number(this.media.currentTime)
        }

        get buffered() {
            const {buffered: e} = this.media;
            return $(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0
        }

        get seeking() {
            return Boolean(this.media.seeking)
        }

        get duration() {
            const e = parseFloat(this.config.duration), t = (this.media || {}).duration,
                i = $(t) && t !== 1 / 0 ? t : 0;
            return e || i
        }

        set volume(e) {
            let t = e;
            _(t) && (t = Number(t)), $(t) || (t = this.storage.get("volume")), $(t) || ({volume: t} = this.config), t > 1 && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, !W(e) && this.muted && t > 0 && (this.muted = !1)
        }

        get volume() {
            return Number(this.media.volume)
        }

        set muted(e) {
            let t = e;
            O(t) || (t = this.storage.get("muted")), O(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t
        }

        get muted() {
            return Boolean(this.media.muted)
        }

        get hasAudio() {
            return !this.isHTML5 || (!!this.isAudio || (Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length)))
        }

        set speed(e) {
            let t = null;
            $(e) && (t = e), $(t) || (t = this.storage.get("speed")), $(t) || (t = this.config.speed.selected);
            const {minimumSpeed: i, maximumSpeed: s} = this;
            t = function (e = 0, t = 0, i = 255) {
                return Math.min(Math.max(e, t), i)
            }(t, i, s), this.config.speed.selected = t, setTimeout((() => {
                this.media && (this.media.playbackRate = t)
            }), 0)
        }

        get speed() {
            return Number(this.media.playbackRate)
        }

        get minimumSpeed() {
            return this.isYouTube ? Math.min(...this.options.speed) : this.isVimeo ? .5 : .0625
        }

        get maximumSpeed() {
            return this.isYouTube ? Math.max(...this.options.speed) : this.isVimeo ? 2 : 16
        }

        set quality(e) {
            const t = this.config.quality, i = this.options.quality;
            if (!i.length) return;
            let s = [!W(e) && Number(e), this.storage.get("quality"), t.selected, t.default].find($), n = !0;
            if (!i.includes(s)) {
                const e = Ae(i, s);
                this.debug.warn(`Unsupported quality option: ${s}, using ${e} instead`), s = e, n = !1
            }
            t.selected = s, this.media.quality = s, n && this.storage.set({quality: s})
        }

        get quality() {
            return this.media.quality
        }

        set loop(e) {
            const t = O(e) ? e : this.config.loop.active;
            this.config.loop.active = t, this.media.loop = t
        }

        get loop() {
            return Boolean(this.media.loop)
        }

        set source(e) {
            vt.change.call(this, e)
        }

        get source() {
            return this.media.currentSrc
        }

        get download() {
            const {download: e} = this.config.urls;
            return U(e) ? e : this.source
        }

        set download(e) {
            U(e) && (this.config.urls.download = e, We.setDownloadUrl.call(this))
        }

        set poster(e) {
            this.isVideo ? at.setPoster.call(this, e, !1).catch((() => {
            })) : this.debug.warn("Poster can only be set for video")
        }

        get poster() {
            return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null
        }

        get ratio() {
            if (!this.isVideo) return null;
            const e = Ne(xe.call(this));
            return q(e) ? e.join(":") : e
        }

        set ratio(e) {
            this.isVideo ? _(e) && Pe(e) ? (this.config.ratio = Ne(e), Me.call(this)) : this.debug.error(`Invalid aspect ratio specified (${e})`) : this.debug.warn("Aspect ratio can only be set for video")
        }

        set autoplay(e) {
            const t = O(e) ? e : this.config.autoplay;
            this.config.autoplay = t
        }

        get autoplay() {
            return Boolean(this.config.autoplay)
        }

        toggleCaptions(e) {
            Ye.toggle.call(this, e, !1)
        }

        set currentTrack(e) {
            Ye.set.call(this, e, !1), Ye.setup()
        }

        get currentTrack() {
            const {toggled: e, currentTrack: t} = this.captions;
            return e ? t : -1
        }

        set language(e) {
            Ye.setLanguage.call(this, e, !1)
        }

        get language() {
            return (Ye.getCurrentTrack.call(this) || {}).language
        }

        set pip(e) {
            if (!me.pip) return;
            const t = O(e) ? e : !this.pip;
            j(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t ? Xe : Je), j(this.media.requestPictureInPicture) && (!this.pip && t ? this.media.requestPictureInPicture() : this.pip && !t && document.exitPictureInPicture())
        }

        get pip() {
            return me.pip ? W(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === Xe : null
        }

        setPreviewThumbnails(e) {
            this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), this.previewThumbnails = null), Object.assign(this.config.previewThumbnails, e), this.config.previewThumbnails.enabled && (this.previewThumbnails = new yt(this))
        }

        static supported(e, t, i) {
            return me.check(e, t, i)
        }

        static loadSprite(e, t) {
            return Ve(e, t)
        }

        static setup(e, t = {}) {
            let i = null;
            return _(e) ? i = Array.from(document.querySelectorAll(e)) : D(e) ? i = Array.from(e) : q(e) && (i = e.filter(H)), W(i) ? null : i.map((e => new wt(e, t)))
        }
    }

    var Tt;
    return wt.defaults = (Tt = Qe, JSON.parse(JSON.stringify(Tt))), wt
}));
!function (e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else {
        var t;
        (t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).raterJs = e()
    }
}(function () {
    return (function () {
        function e(t, n, i) {
            function r(s, o) {
                if (!n[s]) {
                    if (!t[s]) {
                        var l = "function" == typeof require && require;
                        if (!o && l) return l(s, !0);
                        if (a) return a(s, !0);
                        var u = Error("Cannot find module '" + s + "'");
                        throw u.code = "MODULE_NOT_FOUND", u
                    }
                    var c = n[s] = {exports: {}};
                    t[s][0].call(c.exports, function (e) {
                        return r(t[s][1][e] || e)
                    }, c, c.exports, e, t, n, i)
                }
                return n[s].exports
            }

            for (var a = "function" == typeof require && require, s = 0; s < i.length; s++) r(i[s]);
            return r
        }

        return e
    })()({
        1: [function (e, t, n) {
            "use strict";
            e("./style.css"), t.exports = function (e) {
                var t, n, i, r, a = !0;
                if (void 0 === e.element || null === e.element) throw Error("element required");
                if (void 0 !== e.showToolTip && (a = !!e.showToolTip), void 0 !== e.step && (e.step <= 0 || e.step > 1)) throw Error("step must be a number between 0 and 1");
                var s = e.element, o = e.reverse, l = e.max || 5, u = e.starSize || 16, c = e.step || 1, d = e.onHover,
                    f = e.onLeave, g = null;
                s.classList.add("star-rating");
                var v = document.createElement("div");
                v.classList.add("star-value"), o && v.classList.add("rtl"), v.style.backgroundSize = u + "px", s.appendChild(v), s.style.width = u * l + "px", s.style.height = u + "px", s.style.backgroundSize = u + "px";
                var $ = e.rateCallback, p = !!e.readOnly, m = !1, b = e.isBusyText;
                if (n = void 0 !== e.disableText ? e.disableText : "{rating}/{maxRating}", r = void 0 !== e.ratingText ? e.ratingText : "{rating}/{maxRating}", e.rating) w(e.rating); else {
                    var h = s.dataset.rating;
                    h && w(+h)
                }

                function y(e) {
                    x(e, !1)
                }

                function x(e, t) {
                    if (!0 !== p && !0 !== m) {
                        var n, u, f = null, v = s.offsetWidth, $ = s.getBoundingClientRect();
                        if (o) {
                            u = (v - (f = t ? e.changedTouches[0].pageX - $.left : e.pageX - window.scrollX - $.left)) / (v / 100)
                        } else u = (f = t ? e.changedTouches[0].pageX - $.left : e.offsetX) / v * 100;
                        if (u < 101) {
                            if (1 === c) i = Math.ceil(u / 100 * l); else for (var b = u / 100 * l, h = 0; ; h += c) if (h >= b) {
                                i = h;
                                break
                            }
                            if (i > l && (i = l), s.querySelector(".star-value").style.width = i / l * 100 + "%", a) {
                                var y = r.replace("{rating}", i);
                                y = y.replace("{maxRating}", l), s.setAttribute("title", y)
                            }
                            "function" == typeof d && d(i, g)
                        }
                    }
                }

                function L(e) {
                    g ? (s.querySelector(".star-value").style.width = g / l * 100 + "%", s.setAttribute("data-rating", g)) : (s.querySelector(".star-value").style.width = "0%", s.removeAttribute("data-rating")), "function" == typeof f && f(i, g)
                }

                function A(e) {
                    !0 !== p && !0 !== m && void 0 !== $ && (m = !0, t = i, void 0 === b ? s.removeAttribute("title") : s.setAttribute("title", b), s.classList.add("is-busy"), $.call(this, t, function () {
                        !1 === p && s.removeAttribute("title"), m = !1, s.classList.remove("is-busy")
                    }))
                }

                function I() {
                    if (p = !0, s.classList.add("disabled"), a && n) {
                        var e = n.replace("{rating}", g || 0);
                        e = e.replace("{maxRating}", l), s.setAttribute("title", e)
                    } else s.removeAttribute("title")
                }

                function w(e) {
                    if (void 0 === e) throw Error("Value not set.");
                    if (null === e) throw Error("Value cannot be null.");
                    if ("number" != typeof e) throw Error("Value must be a number.");
                    if (e < 0 || e > l) throw Error("Value too high. Please set a rating of " + l + " or below.");
                    g = e, s.querySelector(".star-value").style.width = e / l * 100 + "%", s.setAttribute("data-rating", e)
                }

                function M() {
                    return g
                }

                g || (s.querySelector(".star-value").style.width = "0px"), p && I(), s.addEventListener("mousemove", y), s.addEventListener("mouseleave", L);
                var N = {
                    setRating: w, getRating: M, disable: I, enable: function e() {
                        p = !1, s.removeAttribute("title"), s.classList.remove("disabled")
                    }, clear: function e() {
                        g = null, s.querySelector(".star-value").style.width = "0px", s.removeAttribute("title")
                    }, dispose: function e() {
                        s.removeEventListener("mousemove", y), s.removeEventListener("mouseleave", L), s.removeEventListener("click", A), s.removeEventListener("touchmove", _, !1), s.removeEventListener("touchstart", T, !1), s.removeEventListener("touchend", z, !1), s.removeEventListener("touchcancel", E, !1)
                    }, get element() {
                        return s
                    }
                };

                function _(e) {
                    e.preventDefault(), x(e, !0)
                }

                function T(e) {
                    e.preventDefault(), x(e, !0)
                }

                function z(e) {
                    e.preventDefault(), x(e, !0), A.call(N)
                }

                function E(e) {
                    e.preventDefault(), L(e)
                }

                return s.addEventListener("click", A.bind(N)), s.addEventListener("touchmove", _, !1), s.addEventListener("touchstart", T, !1), s.addEventListener("touchend", z, !1), s.addEventListener("touchcancel", E, !1), N
            }
        }, {"./style.css": 2}], 2: [function (e, t, n) {
            var i = ".star-rating {\n  width: 0;\n  position: relative;\n  display: inline-block;\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDguOSIgaGVpZ2h0PSIxMDMuNiIgdmlld0JveD0iMCAwIDEwOC45IDEwMy42Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2UzZTZlNjt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPnN0YXJfMDwvdGl0bGU+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMTA4LjkgMzkuNiA3MS4zIDM0LjEgNTQuNCAwIDM3LjYgMzQuMSAwIDM5LjYgMjcuMiA2Ni4xIDIwLjggMTAzLjYgNTQuNCA4NS45IDg4LjEgMTAzLjYgODEuNyA2Ni4xIDEwOC45IDM5LjYiLz48L2c+PC9nPjwvc3ZnPg0K);\n  background-position: 0 0;\n  background-repeat: repeat-x;\n  cursor: pointer;\n}\n.star-rating .star-value {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background: url('data:image/svg+xml;base64,PHN2Zw0KCXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwOC45IiBoZWlnaHQ9IjEwMy42IiB2aWV3Qm94PSIwIDAgMTA4LjkgMTAzLjYiPg0KCTxkZWZzPg0KCQk8c3R5bGU+LmNscy0xe2ZpbGw6I2YxYzk0Nzt9PC9zdHlsZT4NCgk8L2RlZnM+DQoJPHRpdGxlPnN0YXIxPC90aXRsZT4NCgk8ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj4NCgkJPGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj4NCgkJCTxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSI1NC40IDAgNzEuMyAzNC4xIDEwOC45IDM5LjYgODEuNyA2Ni4xIDg4LjEgMTAzLjYgNTQuNCA4NS45IDIwLjggMTAzLjYgMjcuMiA2Ni4xIDAgMzkuNiAzNy42IDM0LjEgNTQuNCAwIi8+DQoJCTwvZz4NCgk8L2c+DQo8L3N2Zz4NCg==');\n  background-repeat: repeat-x;\n}\n.star-rating.disabled {\n  cursor: default;\n}\n.star-rating.is-busy {\n  cursor: wait;\n}\n.star-rating .star-value.rtl {\n  -moz-transform: scaleX(-1);\n  -o-transform: scaleX(-1);\n  -webkit-transform: scaleX(-1);\n  transform: scaleX(-1);\n  filter: FlipH;\n  -ms-filter: \"FlipH\";\n  right: 0;\n  left: auto;\n}\n";
            e("browserify-css").createStyle(i, {href: "lib\\style.css"}, {insertAt: "bottom"}), t.exports = i
        }, {"browserify-css": 3}], 3: [function (e, t, n) {
            "use strict";
            var i = [], r = function (e, t) {
                var n = document.head || document.getElementsByTagName("head")[0], r = i[i.length - 1];
                if ((t = t || {}).insertAt = t.insertAt || "bottom", "top" === t.insertAt) r ? r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), i.push(e); else if ("bottom" === t.insertAt) n.appendChild(e); else throw Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.")
            };
            t.exports = {
                createLink: function (e, t) {
                    var n = document.head || document.getElementsByTagName("head")[0],
                        i = document.createElement("link");
                    for (var r in i.href = e, i.rel = "stylesheet", t) if (t.hasOwnProperty(r)) {
                        var a = t[r];
                        i.setAttribute("data-" + r, a)
                    }
                    n.appendChild(i)
                }, createStyle: function (e, t, n) {
                    n = n || {};
                    var i = document.createElement("style");
                    for (var a in i.type = "text/css", t) if (t.hasOwnProperty(a)) {
                        var s = t[a];
                        i.setAttribute("data-" + a, s)
                    }
                    i.sheet ? (i.innerHTML = e, i.sheet.cssText = e, r(i, {insertAt: n.insertAt})) : i.styleSheet ? (r(i, {insertAt: n.insertAt}), i.styleSheet.cssText = e) : (i.appendChild(document.createTextNode(e)), r(i, {insertAt: n.insertAt}))
                }
            }
        }, {}]
    }, {}, [1])(1)
});
/**
 * Swiper 8.4.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2022 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: September 15, 2022
 */

!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t()
}(this, (function () {
    "use strict";

    function e(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
    }

    function t(s, a) {
        void 0 === s && (s = {}), void 0 === a && (a = {}), Object.keys(a).forEach((i => {
            void 0 === s[i] ? s[i] = a[i] : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i])
        }))
    }

    const s = {
        body: {},
        addEventListener() {
        },
        removeEventListener() {
        },
        activeElement: {
            blur() {
            }, nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
            initEvent() {
            }
        }),
        createElement: () => ({
            children: [], childNodes: [], style: {}, setAttribute() {
            }, getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""}
    };

    function a() {
        const e = "undefined" != typeof document ? document : {};
        return t(e, s), e
    }

    const i = {
        document: s,
        navigator: {userAgent: ""},
        location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""},
        history: {
            replaceState() {
            }, pushState() {
            }, go() {
            }, back() {
            }
        },
        CustomEvent: function () {
            return this
        },
        addEventListener() {
        },
        removeEventListener() {
        },
        getComputedStyle: () => ({getPropertyValue: () => ""}),
        Image() {
        },
        Date() {
        },
        screen: {},
        setTimeout() {
        },
        clearTimeout() {
        },
        matchMedia: () => ({}),
        requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
            "undefined" != typeof setTimeout && clearTimeout(e)
        }
    };

    function r() {
        const e = "undefined" != typeof window ? window : {};
        return t(e, i), e
    }

    class n extends Array {
        constructor(e) {
            "number" == typeof e ? super(e) : (super(...e || []), function (e) {
                const t = e.__proto__;
                Object.defineProperty(e, "__proto__", {
                    get: () => t, set(e) {
                        t.__proto__ = e
                    }
                })
            }(this))
        }
    }

    function l(e) {
        void 0 === e && (e = []);
        const t = [];
        return e.forEach((e => {
            Array.isArray(e) ? t.push(...l(e)) : t.push(e)
        })), t
    }

    function o(e, t) {
        return Array.prototype.filter.call(e, t)
    }

    function d(e, t) {
        const s = r(), i = a();
        let l = [];
        if (!t && e instanceof n) return e;
        if (!e) return new n(l);
        if ("string" == typeof e) {
            const s = e.trim();
            if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                let e = "div";
                0 === s.indexOf("<li") && (e = "ul"), 0 === s.indexOf("<tr") && (e = "tbody"), 0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (e = "tr"), 0 === s.indexOf("<tbody") && (e = "table"), 0 === s.indexOf("<option") && (e = "select");
                const t = i.createElement(e);
                t.innerHTML = s;
                for (let e = 0; e < t.childNodes.length; e += 1) l.push(t.childNodes[e])
            } else l = function (e, t) {
                if ("string" != typeof e) return [e];
                const s = [], a = t.querySelectorAll(e);
                for (let e = 0; e < a.length; e += 1) s.push(a[e]);
                return s
            }(e.trim(), t || i)
        } else if (e.nodeType || e === s || e === i) l.push(e); else if (Array.isArray(e)) {
            if (e instanceof n) return e;
            l = e
        }
        return new n(function (e) {
            const t = [];
            for (let s = 0; s < e.length; s += 1) -1 === t.indexOf(e[s]) && t.push(e[s]);
            return t
        }(l))
    }

    d.fn = n.prototype;
    const c = {
        addClass: function () {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            const a = l(t.map((e => e.split(" "))));
            return this.forEach((e => {
                e.classList.add(...a)
            })), this
        }, removeClass: function () {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            const a = l(t.map((e => e.split(" "))));
            return this.forEach((e => {
                e.classList.remove(...a)
            })), this
        }, hasClass: function () {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            const a = l(t.map((e => e.split(" "))));
            return o(this, (e => a.filter((t => e.classList.contains(t))).length > 0)).length > 0
        }, toggleClass: function () {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            const a = l(t.map((e => e.split(" "))));
            this.forEach((e => {
                a.forEach((t => {
                    e.classList.toggle(t)
                }))
            }))
        }, attr: function (e, t) {
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (let s = 0; s < this.length; s += 1) if (2 === arguments.length) this[s].setAttribute(e, t); else for (const t in e) this[s][t] = e[t], this[s].setAttribute(t, e[t]);
            return this
        }, removeAttr: function (e) {
            for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        }, transform: function (e) {
            for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
            return this
        }, transition: function (e) {
            for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
            return this
        }, on: function () {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            let [a, i, r, n] = t;

            function l(e) {
                const t = e.target;
                if (!t) return;
                const s = e.target.dom7EventData || [];
                if (s.indexOf(e) < 0 && s.unshift(e), d(t).is(i)) r.apply(t, s); else {
                    const e = d(t).parents();
                    for (let t = 0; t < e.length; t += 1) d(e[t]).is(i) && r.apply(e[t], s)
                }
            }

            function o(e) {
                const t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t)
            }

            "function" == typeof t[1] && ([a, r, n] = t, i = void 0), n || (n = !1);
            const c = a.split(" ");
            let p;
            for (let e = 0; e < this.length; e += 1) {
                const t = this[e];
                if (i) for (p = 0; p < c.length; p += 1) {
                    const e = c[p];
                    t.dom7LiveListeners || (t.dom7LiveListeners = {}), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({
                        listener: r,
                        proxyListener: l
                    }), t.addEventListener(e, l, n)
                } else for (p = 0; p < c.length; p += 1) {
                    const e = c[p];
                    t.dom7Listeners || (t.dom7Listeners = {}), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({
                        listener: r,
                        proxyListener: o
                    }), t.addEventListener(e, o, n)
                }
            }
            return this
        }, off: function () {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            let [a, i, r, n] = t;
            "function" == typeof t[1] && ([a, r, n] = t, i = void 0), n || (n = !1);
            const l = a.split(" ");
            for (let e = 0; e < l.length; e += 1) {
                const t = l[e];
                for (let e = 0; e < this.length; e += 1) {
                    const s = this[e];
                    let a;
                    if (!i && s.dom7Listeners ? a = s.dom7Listeners[t] : i && s.dom7LiveListeners && (a = s.dom7LiveListeners[t]), a && a.length) for (let e = a.length - 1; e >= 0; e -= 1) {
                        const i = a[e];
                        r && i.listener === r || r && i.listener && i.listener.dom7proxy && i.listener.dom7proxy === r ? (s.removeEventListener(t, i.proxyListener, n), a.splice(e, 1)) : r || (s.removeEventListener(t, i.proxyListener, n), a.splice(e, 1))
                    }
                }
            }
            return this
        }, trigger: function () {
            const e = r();
            for (var t = arguments.length, s = new Array(t), a = 0; a < t; a++) s[a] = arguments[a];
            const i = s[0].split(" "), n = s[1];
            for (let t = 0; t < i.length; t += 1) {
                const a = i[t];
                for (let t = 0; t < this.length; t += 1) {
                    const i = this[t];
                    if (e.CustomEvent) {
                        const t = new e.CustomEvent(a, {detail: n, bubbles: !0, cancelable: !0});
                        i.dom7EventData = s.filter(((e, t) => t > 0)), i.dispatchEvent(t), i.dom7EventData = [], delete i.dom7EventData
                    }
                }
            }
            return this
        }, transitionEnd: function (e) {
            const t = this;
            return e && t.on("transitionend", (function s(a) {
                a.target === this && (e.call(this, a), t.off("transitionend", s))
            })), this
        }, outerWidth: function (e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        }, outerHeight: function (e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        }, styles: function () {
            const e = r();
            return this[0] ? e.getComputedStyle(this[0], null) : {}
        }, offset: function () {
            if (this.length > 0) {
                const e = r(), t = a(), s = this[0], i = s.getBoundingClientRect(), n = t.body,
                    l = s.clientTop || n.clientTop || 0, o = s.clientLeft || n.clientLeft || 0,
                    d = s === e ? e.scrollY : s.scrollTop, c = s === e ? e.scrollX : s.scrollLeft;
                return {top: i.top + d - l, left: i.left + c - o}
            }
            return null
        }, css: function (e, t) {
            const s = r();
            let a;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (a = 0; a < this.length; a += 1) for (const t in e) this[a].style[t] = e[t];
                    return this
                }
                if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
                return this
            }
            return this
        }, each: function (e) {
            return e ? (this.forEach(((t, s) => {
                e.apply(t, [t, s])
            })), this) : this
        }, html: function (e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : null;
            for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        }, text: function (e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        }, is: function (e) {
            const t = r(), s = a(), i = this[0];
            let l, o;
            if (!i || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (i.matches) return i.matches(e);
                if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
                if (i.msMatchesSelector) return i.msMatchesSelector(e);
                for (l = d(e), o = 0; o < l.length; o += 1) if (l[o] === i) return !0;
                return !1
            }
            if (e === s) return i === s;
            if (e === t) return i === t;
            if (e.nodeType || e instanceof n) {
                for (l = e.nodeType ? [e] : e, o = 0; o < l.length; o += 1) if (l[o] === i) return !0;
                return !1
            }
            return !1
        }, index: function () {
            let e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        }, eq: function (e) {
            if (void 0 === e) return this;
            const t = this.length;
            if (e > t - 1) return d([]);
            if (e < 0) {
                const s = t + e;
                return d(s < 0 ? [] : [this[s]])
            }
            return d([this[e]])
        }, append: function () {
            let e;
            const t = a();
            for (let s = 0; s < arguments.length; s += 1) {
                e = s < 0 || arguments.length <= s ? void 0 : arguments[s];
                for (let s = 0; s < this.length; s += 1) if ("string" == typeof e) {
                    const a = t.createElement("div");
                    for (a.innerHTML = e; a.firstChild;) this[s].appendChild(a.firstChild)
                } else if (e instanceof n) for (let t = 0; t < e.length; t += 1) this[s].appendChild(e[t]); else this[s].appendChild(e)
            }
            return this
        }, prepend: function (e) {
            const t = a();
            let s, i;
            for (s = 0; s < this.length; s += 1) if ("string" == typeof e) {
                const a = t.createElement("div");
                for (a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1) this[s].insertBefore(a.childNodes[i], this[s].childNodes[0])
            } else if (e instanceof n) for (i = 0; i < e.length; i += 1) this[s].insertBefore(e[i], this[s].childNodes[0]); else this[s].insertBefore(e, this[s].childNodes[0]);
            return this
        }, next: function (e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e) ? d([this[0].nextElementSibling]) : d([]) : this[0].nextElementSibling ? d([this[0].nextElementSibling]) : d([]) : d([])
        }, nextAll: function (e) {
            const t = [];
            let s = this[0];
            if (!s) return d([]);
            for (; s.nextElementSibling;) {
                const a = s.nextElementSibling;
                e ? d(a).is(e) && t.push(a) : t.push(a), s = a
            }
            return d(t)
        }, prev: function (e) {
            if (this.length > 0) {
                const t = this[0];
                return e ? t.previousElementSibling && d(t.previousElementSibling).is(e) ? d([t.previousElementSibling]) : d([]) : t.previousElementSibling ? d([t.previousElementSibling]) : d([])
            }
            return d([])
        }, prevAll: function (e) {
            const t = [];
            let s = this[0];
            if (!s) return d([]);
            for (; s.previousElementSibling;) {
                const a = s.previousElementSibling;
                e ? d(a).is(e) && t.push(a) : t.push(a), s = a
            }
            return d(t)
        }, parent: function (e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) null !== this[s].parentNode && (e ? d(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
            return d(t)
        }, parents: function (e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                let a = this[s].parentNode;
                for (; a;) e ? d(a).is(e) && t.push(a) : t.push(a), a = a.parentNode
            }
            return d(t)
        }, closest: function (e) {
            let t = this;
            return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        }, find: function (e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                const a = this[s].querySelectorAll(e);
                for (let e = 0; e < a.length; e += 1) t.push(a[e])
            }
            return d(t)
        }, children: function (e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                const a = this[s].children;
                for (let s = 0; s < a.length; s += 1) e && !d(a[s]).is(e) || t.push(a[s])
            }
            return d(t)
        }, filter: function (e) {
            return d(o(this, e))
        }, remove: function () {
            for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }
    };

    function p(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t)
    }

    function u() {
        return Date.now()
    }

    function h(e, t) {
        void 0 === t && (t = "x");
        const s = r();
        let a, i, n;
        const l = function (e) {
            const t = r();
            let s;
            return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
        }(e);
        return s.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((e => e.replace(",", "."))).join(", ")), n = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = n.toString().split(",")), "x" === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = s.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0
    }

    function m(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
    }

    function f(e) {
        return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType)
    }

    function g() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = ["__proto__", "constructor", "prototype"];
        for (let s = 1; s < arguments.length; s += 1) {
            const a = s < 0 || arguments.length <= s ? void 0 : arguments[s];
            if (null != a && !f(a)) {
                const s = Object.keys(Object(a)).filter((e => t.indexOf(e) < 0));
                for (let t = 0, i = s.length; t < i; t += 1) {
                    const i = s[t], r = Object.getOwnPropertyDescriptor(a, i);
                    void 0 !== r && r.enumerable && (m(e[i]) && m(a[i]) ? a[i].__swiper__ ? e[i] = a[i] : g(e[i], a[i]) : !m(e[i]) && m(a[i]) ? (e[i] = {}, a[i].__swiper__ ? e[i] = a[i] : g(e[i], a[i])) : e[i] = a[i])
                }
            }
        }
        return e
    }

    function v(e, t, s) {
        e.style.setProperty(t, s)
    }

    function w(e) {
        let {swiper: t, targetPosition: s, side: a} = e;
        const i = r(), n = -t.translate;
        let l, o = null;
        const d = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID);
        const c = s > n ? "next" : "prev", p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t, u = () => {
            l = (new Date).getTime(), null === o && (o = l);
            const e = Math.max(Math.min((l - o) / d, 1), 0), r = .5 - Math.cos(e * Math.PI) / 2;
            let c = n + r * (s - n);
            if (p(c, s) && (c = s), t.wrapperEl.scrollTo({[a]: c}), p(c, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({[a]: c})
            })), void i.cancelAnimationFrame(t.cssModeFrameID);
            t.cssModeFrameID = i.requestAnimationFrame(u)
        };
        u()
    }

    let b, x, y;

    function E() {
        return b || (b = function () {
            const e = r(), t = a();
            return {
                smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                passiveListener: function () {
                    let t = !1;
                    try {
                        const s = Object.defineProperty({}, "passive", {
                            get() {
                                t = !0
                            }
                        });
                        e.addEventListener("testPassiveListener", null, s)
                    } catch (e) {
                    }
                    return t
                }(),
                gestures: "ongesturestart" in e
            }
        }()), b
    }

    function C(e) {
        return void 0 === e && (e = {}), x || (x = function (e) {
            let {userAgent: t} = void 0 === e ? {} : e;
            const s = E(), a = r(), i = a.navigator.platform, n = t || a.navigator.userAgent,
                l = {ios: !1, android: !1}, o = a.screen.width, d = a.screen.height,
                c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
            let p = n.match(/(iPad).*OS\s([\d_]+)/);
            const u = n.match(/(iPod)(.*OS\s([\d_]+))?/), h = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                m = "Win32" === i;
            let f = "MacIntel" === i;
            return !p && f && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${d}`) >= 0 && (p = n.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), f = !1), c && !m && (l.os = "android", l.android = !0), (p || h || u) && (l.os = "ios", l.ios = !0), l
        }(e)), x
    }

    function T() {
        return y || (y = function () {
            const e = r();
            return {
                isSafari: function () {
                    const t = e.navigator.userAgent.toLowerCase();
                    return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                }(), isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
            }
        }()), y
    }

    Object.keys(c).forEach((e => {
        Object.defineProperty(d.fn, e, {value: c[e], writable: !0})
    }));
    var $ = {
        on(e, t, s) {
            const a = this;
            if (!a.eventsListeners || a.destroyed) return a;
            if ("function" != typeof t) return a;
            const i = s ? "unshift" : "push";
            return e.split(" ").forEach((e => {
                a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][i](t)
            })), a
        }, once(e, t, s) {
            const a = this;
            if (!a.eventsListeners || a.destroyed) return a;
            if ("function" != typeof t) return a;

            function i() {
                a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
                for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) r[n] = arguments[n];
                t.apply(a, r)
            }

            return i.__emitterProxy = t, a.on(e, i, s)
        }, onAny(e, t) {
            const s = this;
            if (!s.eventsListeners || s.destroyed) return s;
            if ("function" != typeof e) return s;
            const a = t ? "unshift" : "push";
            return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s
        }, offAny(e) {
            const t = this;
            if (!t.eventsListeners || t.destroyed) return t;
            if (!t.eventsAnyListeners) return t;
            const s = t.eventsAnyListeners.indexOf(e);
            return s >= 0 && t.eventsAnyListeners.splice(s, 1), t
        }, off(e, t) {
            const s = this;
            return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e => {
                void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((a, i) => {
                    (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1)
                }))
            })), s) : s
        }, emit() {
            const e = this;
            if (!e.eventsListeners || e.destroyed) return e;
            if (!e.eventsListeners) return e;
            let t, s, a;
            for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
            "string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0], s = r.slice(1, r.length), a = e) : (t = r[0].events, s = r[0].data, a = r[0].context || e), s.unshift(a);
            return (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
                e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
                    e.apply(a, [t, ...s])
                })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
                    e.apply(a, s)
                }))
            })), e
        }
    };
    var S = {
        updateSize: function () {
            const e = this;
            let t, s;
            const a = e.$el;
            t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a[0].clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a[0].clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(a.css("padding-left") || 0, 10) - parseInt(a.css("padding-right") || 0, 10), s = s - parseInt(a.css("padding-top") || 0, 10) - parseInt(a.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
                width: t,
                height: s,
                size: e.isHorizontal() ? t : s
            }))
        }, updateSlides: function () {
            const e = this;

            function t(t) {
                return e.isHorizontal() ? t : {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[t]
            }

            function s(e, s) {
                return parseFloat(e.getPropertyValue(t(s)) || 0)
            }

            const a = e.params, {$wrapperEl: i, size: r, rtlTranslate: n, wrongRTL: l} = e,
                o = e.virtual && a.virtual.enabled, d = o ? e.virtual.slides.length : e.slides.length,
                c = i.children(`.${e.params.slideClass}`), p = o ? e.virtual.slides.length : c.length;
            let u = [];
            const h = [], m = [];
            let f = a.slidesOffsetBefore;
            "function" == typeof f && (f = a.slidesOffsetBefore.call(e));
            let g = a.slidesOffsetAfter;
            "function" == typeof g && (g = a.slidesOffsetAfter.call(e));
            const w = e.snapGrid.length, b = e.slidesGrid.length;
            let x = a.spaceBetween, y = -f, E = 0, C = 0;
            if (void 0 === r) return;
            "string" == typeof x && x.indexOf("%") >= 0 && (x = parseFloat(x.replace("%", "")) / 100 * r), e.virtualSize = -x, n ? c.css({
                marginLeft: "",
                marginBottom: "",
                marginTop: ""
            }) : c.css({
                marginRight: "",
                marginBottom: "",
                marginTop: ""
            }), a.centeredSlides && a.cssMode && (v(e.wrapperEl, "--swiper-centered-offset-before", ""), v(e.wrapperEl, "--swiper-centered-offset-after", ""));
            const T = a.grid && a.grid.rows > 1 && e.grid;
            let $;
            T && e.grid.initSlides(p);
            const S = "auto" === a.slidesPerView && a.breakpoints && Object.keys(a.breakpoints).filter((e => void 0 !== a.breakpoints[e].slidesPerView)).length > 0;
            for (let i = 0; i < p; i += 1) {
                $ = 0;
                const n = c.eq(i);
                if (T && e.grid.updateSlide(i, n, p, t), "none" !== n.css("display")) {
                    if ("auto" === a.slidesPerView) {
                        S && (c[i].style[t("width")] = "");
                        const r = getComputedStyle(n[0]), l = n[0].style.transform, o = n[0].style.webkitTransform;
                        if (l && (n[0].style.transform = "none"), o && (n[0].style.webkitTransform = "none"), a.roundLengths) $ = e.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0); else {
                            const e = s(r, "width"), t = s(r, "padding-left"), a = s(r, "padding-right"),
                                i = s(r, "margin-left"), l = s(r, "margin-right"), o = r.getPropertyValue("box-sizing");
                            if (o && "border-box" === o) $ = e + i + l; else {
                                const {clientWidth: s, offsetWidth: r} = n[0];
                                $ = e + t + a + i + l + (r - s)
                            }
                        }
                        l && (n[0].style.transform = l), o && (n[0].style.webkitTransform = o), a.roundLengths && ($ = Math.floor($))
                    } else $ = (r - (a.slidesPerView - 1) * x) / a.slidesPerView, a.roundLengths && ($ = Math.floor($)), c[i] && (c[i].style[t("width")] = `${$}px`);
                    c[i] && (c[i].swiperSlideSize = $), m.push($), a.centeredSlides ? (y = y + $ / 2 + E / 2 + x, 0 === E && 0 !== i && (y = y - r / 2 - x), 0 === i && (y = y - r / 2 - x), Math.abs(y) < .001 && (y = 0), a.roundLengths && (y = Math.floor(y)), C % a.slidesPerGroup == 0 && u.push(y), h.push(y)) : (a.roundLengths && (y = Math.floor(y)), (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup == 0 && u.push(y), h.push(y), y = y + $ + x), e.virtualSize += $ + x, E = $, C += 1
                }
            }
            if (e.virtualSize = Math.max(e.virtualSize, r) + g, n && l && ("slide" === a.effect || "coverflow" === a.effect) && i.css({width: `${e.virtualSize + a.spaceBetween}px`}), a.setWrapperSize && i.css({[t("width")]: `${e.virtualSize + a.spaceBetween}px`}), T && e.grid.updateWrapperSize($, u, t), !a.centeredSlides) {
                const t = [];
                for (let s = 0; s < u.length; s += 1) {
                    let i = u[s];
                    a.roundLengths && (i = Math.floor(i)), u[s] <= e.virtualSize - r && t.push(i)
                }
                u = t, Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r)
            }
            if (0 === u.length && (u = [0]), 0 !== a.spaceBetween) {
                const s = e.isHorizontal() && n ? "marginLeft" : t("marginRight");
                c.filter(((e, t) => !a.cssMode || t !== c.length - 1)).css({[s]: `${x}px`})
            }
            if (a.centeredSlides && a.centeredSlidesBounds) {
                let e = 0;
                m.forEach((t => {
                    e += t + (a.spaceBetween ? a.spaceBetween : 0)
                })), e -= a.spaceBetween;
                const t = e - r;
                u = u.map((e => e < 0 ? -f : e > t ? t + g : e))
            }
            if (a.centerInsufficientSlides) {
                let e = 0;
                if (m.forEach((t => {
                    e += t + (a.spaceBetween ? a.spaceBetween : 0)
                })), e -= a.spaceBetween, e < r) {
                    const t = (r - e) / 2;
                    u.forEach(((e, s) => {
                        u[s] = e - t
                    })), h.forEach(((e, s) => {
                        h[s] = e + t
                    }))
                }
            }
            if (Object.assign(e, {
                slides: c,
                snapGrid: u,
                slidesGrid: h,
                slidesSizesGrid: m
            }), a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
                v(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"), v(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");
                const t = -e.snapGrid[0], s = -e.slidesGrid[0];
                e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + s))
            }
            if (p !== d && e.emit("slidesLengthChange"), u.length !== w && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== b && e.emit("slidesGridLengthChange"), a.watchSlidesProgress && e.updateSlidesOffset(), !(o || a.cssMode || "slide" !== a.effect && "fade" !== a.effect)) {
                const t = `${a.containerModifierClass}backface-hidden`, s = e.$el.hasClass(t);
                p <= a.maxBackfaceHiddenSlides ? s || e.$el.addClass(t) : s && e.$el.removeClass(t)
            }
        }, updateAutoHeight: function (e) {
            const t = this, s = [], a = t.virtual && t.params.virtual.enabled;
            let i, r = 0;
            "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
            const n = e => a ? t.slides.filter((t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e))[0] : t.slides.eq(e)[0];
            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) if (t.params.centeredSlides) (t.visibleSlides || d([])).each((e => {
                s.push(e)
            })); else for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                const e = t.activeIndex + i;
                if (e > t.slides.length && !a) break;
                s.push(n(e))
            } else s.push(n(t.activeIndex));
            for (i = 0; i < s.length; i += 1) if (void 0 !== s[i]) {
                const e = s[i].offsetHeight;
                r = e > r ? e : r
            }
            (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`)
        }, updateSlidesOffset: function () {
            const e = this, t = e.slides;
            for (let s = 0; s < t.length; s += 1) t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop
        }, updateSlidesProgress: function (e) {
            void 0 === e && (e = this && this.translate || 0);
            const t = this, s = t.params, {slides: a, rtlTranslate: i, snapGrid: r} = t;
            if (0 === a.length) return;
            void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
            let n = -e;
            i && (n = e), a.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
            for (let e = 0; e < a.length; e += 1) {
                const l = a[e];
                let o = l.swiperSlideOffset;
                s.cssMode && s.centeredSlides && (o -= a[0].swiperSlideOffset);
                const d = (n + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween),
                    c = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween),
                    p = -(n - o), u = p + t.slidesSizesGrid[e];
                (p >= 0 && p < t.size - 1 || u > 1 && u <= t.size || p <= 0 && u >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e), a.eq(e).addClass(s.slideVisibleClass)), l.progress = i ? -d : d, l.originalProgress = i ? -c : c
            }
            t.visibleSlides = d(t.visibleSlides)
        }, updateProgress: function (e) {
            const t = this;
            if (void 0 === e) {
                const s = t.rtlTranslate ? -1 : 1;
                e = t && t.translate && t.translate * s || 0
            }
            const s = t.params, a = t.maxTranslate() - t.minTranslate();
            let {progress: i, isBeginning: r, isEnd: n} = t;
            const l = r, o = n;
            0 === a ? (i = 0, r = !0, n = !0) : (i = (e - t.minTranslate()) / a, r = i <= 0, n = i >= 1), Object.assign(t, {
                progress: i,
                isBeginning: r,
                isEnd: n
            }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !l && t.emit("reachBeginning toEdge"), n && !o && t.emit("reachEnd toEdge"), (l && !r || o && !n) && t.emit("fromEdge"), t.emit("progress", i)
        }, updateSlidesClasses: function () {
            const e = this, {slides: t, params: s, $wrapperEl: a, activeIndex: i, realIndex: r} = e,
                n = e.virtual && s.virtual.enabled;
            let l;
            t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`), l = n ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`) : t.eq(i), l.addClass(s.slideActiveClass), s.loop && (l.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));
            let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
            s.loop && 0 === o.length && (o = t.eq(0), o.addClass(s.slideNextClass));
            let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
            s.loop && 0 === d.length && (d = t.eq(-1), d.addClass(s.slidePrevClass)), s.loop && (o.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass), d.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)), e.emitSlidesClasses()
        }, updateActiveIndex: function (e) {
            const t = this, s = t.rtlTranslate ? t.translate : -t.translate, {
                slidesGrid: a,
                snapGrid: i,
                params: r,
                activeIndex: n,
                realIndex: l,
                snapIndex: o
            } = t;
            let d, c = e;
            if (void 0 === c) {
                for (let e = 0; e < a.length; e += 1) void 0 !== a[e + 1] ? s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2 ? c = e : s >= a[e] && s < a[e + 1] && (c = e + 1) : s >= a[e] && (c = e);
                r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
            }
            if (i.indexOf(s) >= 0) d = i.indexOf(s); else {
                const e = Math.min(r.slidesPerGroupSkip, c);
                d = e + Math.floor((c - e) / r.slidesPerGroup)
            }
            if (d >= i.length && (d = i.length - 1), c === n) return void (d !== o && (t.snapIndex = d, t.emit("snapIndexChange")));
            const p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
            Object.assign(t, {
                snapIndex: d,
                realIndex: p,
                previousIndex: n,
                activeIndex: c
            }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), l !== p && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
        }, updateClickedSlide: function (e) {
            const t = this, s = t.params, a = d(e).closest(`.${s.slideClass}`)[0];
            let i, r = !1;
            if (a) for (let e = 0; e < t.slides.length; e += 1) if (t.slides[e] === a) {
                r = !0, i = e;
                break
            }
            if (!a || !r) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
            t.clickedSlide = a, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(d(a).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i, s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
        }
    };
    var M = {
        getTranslate: function (e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            const {params: t, rtlTranslate: s, translate: a, $wrapperEl: i} = this;
            if (t.virtualTranslate) return s ? -a : a;
            if (t.cssMode) return a;
            let r = h(i[0], e);
            return s && (r = -r), r || 0
        }, setTranslate: function (e, t) {
            const s = this, {rtlTranslate: a, params: i, $wrapperEl: r, wrapperEl: n, progress: l} = s;
            let o, d = 0, c = 0;
            s.isHorizontal() ? d = a ? -e : e : c = e, i.roundLengths && (d = Math.floor(d), c = Math.floor(c)), i.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -c : i.virtualTranslate || r.transform(`translate3d(${d}px, ${c}px, 0px)`), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? d : c;
            const p = s.maxTranslate() - s.minTranslate();
            o = 0 === p ? 0 : (e - s.minTranslate()) / p, o !== l && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
        }, minTranslate: function () {
            return -this.snapGrid[0]
        }, maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1]
        }, translateTo: function (e, t, s, a, i) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === a && (a = !0);
            const r = this, {params: n, wrapperEl: l} = r;
            if (r.animating && n.preventInteractionOnTransition) return !1;
            const o = r.minTranslate(), d = r.maxTranslate();
            let c;
            if (c = a && e > o ? o : a && e < d ? d : e, r.updateProgress(c), n.cssMode) {
                const e = r.isHorizontal();
                if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c; else {
                    if (!r.support.smoothScroll) return w({
                        swiper: r,
                        targetPosition: -c,
                        side: e ? "left" : "top"
                    }), !0;
                    l.scrollTo({[e ? "left" : "top"]: -c, behavior: "smooth"})
                }
                return !0
            }
            return 0 === t ? (r.setTransition(0), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, s && r.emit("transitionEnd"))
            }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0
        }
    };

    function P(e) {
        let {swiper: t, runCallbacks: s, direction: a, step: i} = e;
        const {activeIndex: r, previousIndex: n} = t;
        let l = a;
        if (l || (l = r > n ? "next" : r < n ? "prev" : "reset"), t.emit(`transition${i}`), s && r !== n) {
            if ("reset" === l) return void t.emit(`slideResetTransition${i}`);
            t.emit(`slideChangeTransition${i}`), "next" === l ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`)
        }
    }

    var k = {
        slideTo: function (e, t, s, a, i) {
            if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "number" != typeof e && "string" != typeof e) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
            if ("string" == typeof e) {
                const t = parseInt(e, 10);
                if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                e = t
            }
            const r = this;
            let n = e;
            n < 0 && (n = 0);
            const {
                params: l,
                snapGrid: o,
                slidesGrid: d,
                previousIndex: c,
                activeIndex: p,
                rtlTranslate: u,
                wrapperEl: h,
                enabled: m
            } = r;
            if (r.animating && l.preventInteractionOnTransition || !m && !a && !i) return !1;
            const f = Math.min(r.params.slidesPerGroupSkip, n);
            let g = f + Math.floor((n - f) / r.params.slidesPerGroup);
            g >= o.length && (g = o.length - 1);
            const v = -o[g];
            if (l.normalizeSlideIndex) for (let e = 0; e < d.length; e += 1) {
                const t = -Math.floor(100 * v), s = Math.floor(100 * d[e]), a = Math.floor(100 * d[e + 1]);
                void 0 !== d[e + 1] ? t >= s && t < a - (a - s) / 2 ? n = e : t >= s && t < a && (n = e + 1) : t >= s && (n = e)
            }
            if (r.initialized && n !== p) {
                if (!r.allowSlideNext && v < r.translate && v < r.minTranslate()) return !1;
                if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (p || 0) !== n) return !1
            }
            let b;
            if (n !== (c || 0) && s && r.emit("beforeSlideChangeStart"), r.updateProgress(v), b = n > p ? "next" : n < p ? "prev" : "reset", u && -v === r.translate || !u && v === r.translate) return r.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(v), "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)), !1;
            if (l.cssMode) {
                const e = r.isHorizontal(), s = u ? v : -v;
                if (0 === t) {
                    const t = r.virtual && r.params.virtual.enabled;
                    t && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), h[e ? "scrollLeft" : "scrollTop"] = s, t && requestAnimationFrame((() => {
                        r.wrapperEl.style.scrollSnapType = "", r._swiperImmediateVirtual = !1
                    }))
                } else {
                    if (!r.support.smoothScroll) return w({swiper: r, targetPosition: s, side: e ? "left" : "top"}), !0;
                    h.scrollTo({[e ? "left" : "top"]: s, behavior: "smooth"})
                }
                return !0
            }
            return r.setTransition(t), r.setTranslate(v), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, a), r.transitionStart(s, b), 0 === t ? r.transitionEnd(s, b) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, b))
            }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)), !0
        }, slideToLoop: function (e, t, s, a) {
            if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e) {
                const t = parseInt(e, 10);
                if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                e = t
            }
            const i = this;
            let r = e;
            return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, a)
        }, slideNext: function (e, t, s) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const a = this, {animating: i, enabled: r, params: n} = a;
            if (!r) return a;
            let l = n.slidesPerGroup;
            "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
            const o = a.activeIndex < n.slidesPerGroupSkip ? 1 : l;
            if (n.loop) {
                if (i && n.loopPreventsSlide) return !1;
                a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft
            }
            return n.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s)
        }, slidePrev: function (e, t, s) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const a = this, {params: i, animating: r, snapGrid: n, slidesGrid: l, rtlTranslate: o, enabled: d} = a;
            if (!d) return a;
            if (i.loop) {
                if (r && i.loopPreventsSlide) return !1;
                a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft
            }

            function c(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }

            const p = c(o ? a.translate : -a.translate), u = n.map((e => c(e)));
            let h = n[u.indexOf(p) - 1];
            if (void 0 === h && i.cssMode) {
                let e;
                n.forEach(((t, s) => {
                    p >= t && (e = s)
                })), void 0 !== e && (h = n[e > 0 ? e - 1 : e])
            }
            let m = 0;
            if (void 0 !== h && (m = l.indexOf(h), m < 0 && (m = a.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (m = m - a.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), i.rewind && a.isBeginning) {
                const i = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;
                return a.slideTo(i, e, t, s)
            }
            return a.slideTo(m, e, t, s)
        }, slideReset: function (e, t, s) {
            return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, s)
        }, slideToClosest: function (e, t, s, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === a && (a = .5);
            const i = this;
            let r = i.activeIndex;
            const n = Math.min(i.params.slidesPerGroupSkip, r), l = n + Math.floor((r - n) / i.params.slidesPerGroup),
                o = i.rtlTranslate ? i.translate : -i.translate;
            if (o >= i.snapGrid[l]) {
                const e = i.snapGrid[l];
                o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup)
            } else {
                const e = i.snapGrid[l - 1];
                o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup)
            }
            return r = Math.max(r, 0), r = Math.min(r, i.slidesGrid.length - 1), i.slideTo(r, e, t, s)
        }, slideToClickedSlide: function () {
            const e = this, {params: t, $wrapperEl: s} = e,
                a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let i, r = e.clickedIndex;
            if (t.loop) {
                if (e.animating) return;
                i = parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(), r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), p((() => {
                    e.slideTo(r)
                }))) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(), r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), p((() => {
                    e.slideTo(r)
                }))) : e.slideTo(r)
            } else e.slideTo(r)
        }
    };
    var z = {
        loopCreate: function () {
            const e = this, t = a(), {params: s, $wrapperEl: i} = e,
                r = i.children().length > 0 ? d(i.children()[0].parentNode) : i;
            r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
            let n = r.children(`.${s.slideClass}`);
            if (s.loopFillGroupWithBlank) {
                const e = s.slidesPerGroup - n.length % s.slidesPerGroup;
                if (e !== s.slidesPerGroup) {
                    for (let a = 0; a < e; a += 1) {
                        const e = d(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);
                        r.append(e)
                    }
                    n = r.children(`.${s.slideClass}`)
                }
            }
            "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = n.length), e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)), e.loopedSlides += s.loopAdditionalSlides, e.loopedSlides > n.length && e.params.loopedSlidesLimit && (e.loopedSlides = n.length);
            const l = [], o = [];
            n.each(((e, t) => {
                d(e).attr("data-swiper-slide-index", t)
            }));
            for (let t = 0; t < e.loopedSlides; t += 1) {
                const e = t - Math.floor(t / n.length) * n.length;
                o.push(n.eq(e)[0]), l.unshift(n.eq(n.length - e - 1)[0])
            }
            for (let e = 0; e < o.length; e += 1) r.append(d(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
            for (let e = l.length - 1; e >= 0; e -= 1) r.prepend(d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass))
        }, loopFix: function () {
            const e = this;
            e.emit("beforeLoopFix");
            const {
                activeIndex: t,
                slides: s,
                loopedSlides: a,
                allowSlidePrev: i,
                allowSlideNext: r,
                snapGrid: n,
                rtlTranslate: l
            } = e;
            let o;
            e.allowSlidePrev = !0, e.allowSlideNext = !0;
            const d = -n[t] - e.getTranslate();
            if (t < a) {
                o = s.length - 3 * a + t, o += a;
                e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)
            } else if (t >= s.length - a) {
                o = -s.length + t + a, o += a;
                e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)
            }
            e.allowSlidePrev = i, e.allowSlideNext = r, e.emit("loopFix")
        }, loopDestroy: function () {
            const {$wrapperEl: e, params: t, slides: s} = this;
            e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), s.removeAttr("data-swiper-slide-index")
        }
    };

    function L(e) {
        const t = this, s = a(), i = r(), n = t.touchEventsData, {params: l, touches: o, enabled: c} = t;
        if (!c) return;
        if (t.animating && l.preventInteractionOnTransition) return;
        !t.animating && l.cssMode && l.loop && t.loopFix();
        let p = e;
        p.originalEvent && (p = p.originalEvent);
        let h = d(p.target);
        if ("wrapper" === l.touchEventsTarget && !h.closest(t.wrapperEl).length) return;
        if (n.isTouchEvent = "touchstart" === p.type, !n.isTouchEvent && "which" in p && 3 === p.which) return;
        if (!n.isTouchEvent && "button" in p && p.button > 0) return;
        if (n.isTouched && n.isMoved) return;
        const m = !!l.noSwipingClass && "" !== l.noSwipingClass, f = e.composedPath ? e.composedPath() : e.path;
        m && p.target && p.target.shadowRoot && f && (h = d(f[0]));
        const g = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
            v = !(!p.target || !p.target.shadowRoot);
        if (l.noSwiping && (v ? function (e, t) {
            return void 0 === t && (t = this), function t(s) {
                if (!s || s === a() || s === r()) return null;
                s.assignedSlot && (s = s.assignedSlot);
                const i = s.closest(e);
                return i || s.getRootNode ? i || t(s.getRootNode().host) : null
            }(t)
        }(g, h[0]) : h.closest(g)[0])) return void (t.allowClick = !0);
        if (l.swipeHandler && !h.closest(l.swipeHandler)[0]) return;
        o.currentX = "touchstart" === p.type ? p.targetTouches[0].pageX : p.pageX, o.currentY = "touchstart" === p.type ? p.targetTouches[0].pageY : p.pageY;
        const w = o.currentX, b = o.currentY, x = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
            y = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
        if (x && (w <= y || w >= i.innerWidth - y)) {
            if ("prevent" !== x) return;
            e.preventDefault()
        }
        if (Object.assign(n, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
        }), o.startX = w, o.startY = b, n.touchStartTime = u(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, l.threshold > 0 && (n.allowThresholdMove = !1), "touchstart" !== p.type) {
            let e = !0;
            h.is(n.focusableElements) && (e = !1, "SELECT" === h[0].nodeName && (n.isTouched = !1)), s.activeElement && d(s.activeElement).is(n.focusableElements) && s.activeElement !== h[0] && s.activeElement.blur();
            const a = e && t.allowTouchMove && l.touchStartPreventDefault;
            !l.touchStartForcePreventDefault && !a || h[0].isContentEditable || p.preventDefault()
        }
        t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", p)
    }

    function O(e) {
        const t = a(), s = this, i = s.touchEventsData, {params: r, touches: n, rtlTranslate: l, enabled: o} = s;
        if (!o) return;
        let c = e;
        if (c.originalEvent && (c = c.originalEvent), !i.isTouched) return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", c));
        if (i.isTouchEvent && "touchmove" !== c.type) return;
        const p = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0]),
            h = "touchmove" === c.type ? p.pageX : c.pageX, m = "touchmove" === c.type ? p.pageY : c.pageY;
        if (c.preventedByNestedSwiper) return n.startX = h, void (n.startY = m);
        if (!s.allowTouchMove) return d(c.target).is(i.focusableElements) || (s.allowClick = !1), void (i.isTouched && (Object.assign(n, {
            startX: h,
            startY: m,
            currentX: h,
            currentY: m
        }), i.touchStartTime = u()));
        if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop) if (s.isVertical()) {
            if (m < n.startY && s.translate <= s.maxTranslate() || m > n.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1)
        } else if (h < n.startX && s.translate <= s.maxTranslate() || h > n.startX && s.translate >= s.minTranslate()) return;
        if (i.isTouchEvent && t.activeElement && c.target === t.activeElement && d(c.target).is(i.focusableElements)) return i.isMoved = !0, void (s.allowClick = !1);
        if (i.allowTouchCallbacks && s.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1) return;
        n.currentX = h, n.currentY = m;
        const f = n.currentX - n.startX, g = n.currentY - n.startY;
        if (s.params.threshold && Math.sqrt(f ** 2 + g ** 2) < s.params.threshold) return;
        if (void 0 === i.isScrolling) {
            let e;
            s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : f * f + g * g >= 25 && (e = 180 * Math.atan2(Math.abs(g), Math.abs(f)) / Math.PI, i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle)
        }
        if (i.isScrolling && s.emit("touchMoveOpposite", c), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling) return void (i.isTouched = !1);
        if (!i.startMoving) return;
        s.allowClick = !1, !r.cssMode && c.cancelable && c.preventDefault(), r.touchMoveStopPropagation && !r.nested && c.stopPropagation(), i.isMoved || (r.loop && !r.cssMode && s.loopFix(), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", c)), s.emit("sliderMove", c), i.isMoved = !0;
        let v = s.isHorizontal() ? f : g;
        n.diff = v, v *= r.touchRatio, l && (v = -v), s.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
        let w = !0, b = r.resistanceRatio;
        if (r.touchReleaseOnEdges && (b = 0), v > 0 && i.currentTranslate > s.minTranslate() ? (w = !1, r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + v) ** b)) : v < 0 && i.currentTranslate < s.maxTranslate() && (w = !1, r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - v) ** b)), w && (c.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), r.threshold > 0) {
            if (!(Math.abs(v) > r.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
            if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void (n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
        }
        r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate))
    }

    function I(e) {
        const t = this, s = t.touchEventsData, {params: a, touches: i, rtlTranslate: r, slidesGrid: n, enabled: l} = t;
        if (!l) return;
        let o = e;
        if (o.originalEvent && (o = o.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", o), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && a.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void (s.startMoving = !1);
        a.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const d = u(), c = d - s.touchStartTime;
        if (t.allowClick) {
            const e = o.path || o.composedPath && o.composedPath();
            t.updateClickedSlide(e && e[0] || o.target), t.emit("tap click", o), c < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", o)
        }
        if (s.lastClickTime = u(), p((() => {
            t.destroyed || (t.allowClick = !0)
        })), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === i.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void (s.startMoving = !1);
        let h;
        if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, h = a.followFinger ? r ? t.translate : -t.translate : -s.currentTranslate, a.cssMode) return;
        if (t.params.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({currentPos: h});
        let m = 0, f = t.slidesSizesGrid[0];
        for (let e = 0; e < n.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
            const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
            void 0 !== n[e + t] ? h >= n[e] && h < n[e + t] && (m = e, f = n[e + t] - n[e]) : h >= n[e] && (m = e, f = n[n.length - 1] - n[n.length - 2])
        }
        let g = null, v = null;
        a.rewind && (t.isBeginning ? v = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
        const w = (h - n[m]) / f, b = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        if (c > a.longSwipesMs) {
            if (!a.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (w >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? g : m + b) : t.slideTo(m)), "prev" === t.swipeDirection && (w > 1 - a.longSwipesRatio ? t.slideTo(m + b) : null !== v && w < 0 && Math.abs(w) > a.longSwipesRatio ? t.slideTo(v) : t.slideTo(m))
        } else {
            if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
            t.navigation && (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl) ? o.target === t.navigation.nextEl ? t.slideTo(m + b) : t.slideTo(m) : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : m + b), "prev" === t.swipeDirection && t.slideTo(null !== v ? v : m))
        }
    }

    function A() {
        const e = this, {params: t, el: s} = e;
        if (s && 0 === s.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {allowSlideNext: a, allowSlidePrev: i, snapGrid: r} = e;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = i, e.allowSlideNext = a, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
    }

    function D(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
    }

    function G() {
        const e = this, {wrapperEl: t, rtlTranslate: s, enabled: a} = e;
        if (!a) return;
        let i;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const r = e.maxTranslate() - e.minTranslate();
        i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
    }

    let N = !1;

    function B() {
    }

    const H = (e, t) => {
        const s = a(), {params: i, touchEvents: r, el: n, wrapperEl: l, device: o, support: d} = e, c = !!i.nested,
            p = "on" === t ? "addEventListener" : "removeEventListener", u = t;
        if (d.touch) {
            const t = !("touchstart" !== r.start || !d.passiveListener || !i.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            n[p](r.start, e.onTouchStart, t), n[p](r.move, e.onTouchMove, d.passiveListener ? {
                passive: !1,
                capture: c
            } : c), n[p](r.end, e.onTouchEnd, t), r.cancel && n[p](r.cancel, e.onTouchEnd, t)
        } else n[p](r.start, e.onTouchStart, !1), s[p](r.move, e.onTouchMove, c), s[p](r.end, e.onTouchEnd, !1);
        (i.preventClicks || i.preventClicksPropagation) && n[p]("click", e.onClick, !0), i.cssMode && l[p]("scroll", e.onScroll), i.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", A, !0) : e[u]("observerUpdate", A, !0)
    };
    var X = {
        attachEvents: function () {
            const e = this, t = a(), {params: s, support: i} = e;
            e.onTouchStart = L.bind(e), e.onTouchMove = O.bind(e), e.onTouchEnd = I.bind(e), s.cssMode && (e.onScroll = G.bind(e)), e.onClick = D.bind(e), i.touch && !N && (t.addEventListener("touchstart", B), N = !0), H(e, "on")
        }, detachEvents: function () {
            H(this, "off")
        }
    };
    const Y = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var R = {
        addClasses: function () {
            const e = this, {classNames: t, params: s, rtl: a, $el: i, device: r, support: n} = e, l = function (e, t) {
                const s = [];
                return e.forEach((e => {
                    "object" == typeof e ? Object.keys(e).forEach((a => {
                        e[a] && s.push(t + a)
                    })) : "string" == typeof e && s.push(t + e)
                })), s
            }(["initialized", s.direction, {"pointer-events": !n.touch}, {"free-mode": e.params.freeMode && s.freeMode.enabled}, {autoheight: s.autoHeight}, {rtl: a}, {grid: s.grid && s.grid.rows > 1}, {"grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill}, {android: r.android}, {ios: r.ios}, {"css-mode": s.cssMode}, {centered: s.cssMode && s.centeredSlides}, {"watch-progress": s.watchSlidesProgress}], s.containerModifierClass);
            t.push(...l), i.addClass([...t].join(" ")), e.emitContainerClasses()
        }, removeClasses: function () {
            const {$el: e, classNames: t} = this;
            e.removeClass(t.join(" ")), this.emitContainerClasses()
        }
    };
    var W = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopedSlidesLimit: !0,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };

    function j(e, t) {
        return function (s) {
            void 0 === s && (s = {});
            const a = Object.keys(s)[0], i = s[a];
            "object" == typeof i && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 && !0 === e[a] && (e[a] = {auto: !0}), a in e && "enabled" in i ? (!0 === e[a] && (e[a] = {enabled: !0}), "object" != typeof e[a] || "enabled" in e[a] || (e[a].enabled = !0), e[a] || (e[a] = {enabled: !1}), g(t, s)) : g(t, s)) : g(t, s)
        }
    }

    const q = {
        eventsEmitter: $, update: S, translate: M, transition: {
            setTransition: function (e, t) {
                const s = this;
                s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t)
            }, transitionStart: function (e, t) {
                void 0 === e && (e = !0);
                const s = this, {params: a} = s;
                a.cssMode || (a.autoHeight && s.updateAutoHeight(), P({
                    swiper: s,
                    runCallbacks: e,
                    direction: t,
                    step: "Start"
                }))
            }, transitionEnd: function (e, t) {
                void 0 === e && (e = !0);
                const s = this, {params: a} = s;
                s.animating = !1, a.cssMode || (s.setTransition(0), P({
                    swiper: s,
                    runCallbacks: e,
                    direction: t,
                    step: "End"
                }))
            }
        }, slide: k, loop: z, grabCursor: {
            setGrabCursor: function (e) {
                const t = this;
                if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab"
            }, unsetGrabCursor: function () {
                const e = this;
                e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
            }
        }, events: X, breakpoints: {
            setBreakpoint: function () {
                const e = this, {activeIndex: t, initialized: s, loopedSlides: a = 0, params: i, $el: r} = e,
                    n = i.breakpoints;
                if (!n || n && 0 === Object.keys(n).length) return;
                const l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
                if (!l || e.currentBreakpoint === l) return;
                const o = (l in n ? n[l] : void 0) || e.originalParams, d = Y(e, i), c = Y(e, o), p = i.enabled;
                d && !c ? (r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && c && (r.addClass(`${i.containerModifierClass}grid`), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && r.addClass(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => {
                    const s = i[t] && i[t].enabled, a = o[t] && o[t].enabled;
                    s && !a && e[t].disable(), !s && a && e[t].enable()
                }));
                const u = o.direction && o.direction !== i.direction,
                    h = i.loop && (o.slidesPerView !== i.slidesPerView || u);
                u && s && e.changeDirection(), g(e.params, o);
                const m = e.params.enabled;
                Object.assign(e, {
                    allowTouchMove: e.params.allowTouchMove,
                    allowSlideNext: e.params.allowSlideNext,
                    allowSlidePrev: e.params.allowSlidePrev
                }), p && !m ? e.disable() : !p && m && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", o), h && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - a + e.loopedSlides, 0, !1)), e.emit("breakpoint", o)
            }, getBreakpoint: function (e, t, s) {
                if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
                let a = !1;
                const i = r(), n = "window" === t ? i.innerHeight : s.clientHeight, l = Object.keys(e).map((e => {
                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                        const t = parseFloat(e.substr(1));
                        return {value: n * t, point: e}
                    }
                    return {value: e, point: e}
                }));
                l.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                for (let e = 0; e < l.length; e += 1) {
                    const {point: r, value: n} = l[e];
                    "window" === t ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r) : n <= s.clientWidth && (a = r)
                }
                return a || "max"
            }
        }, checkOverflow: {
            checkOverflow: function () {
                const e = this, {isLocked: t, params: s} = e, {slidesOffsetBefore: a} = s;
                if (a) {
                    const t = e.slides.length - 1, s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
                    e.isLocked = e.size > s
                } else e.isLocked = 1 === e.snapGrid.length;
                !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
            }
        }, classes: R, images: {
            loadImage: function (e, t, s, a, i, n) {
                const l = r();
                let o;

                function c() {
                    n && n()
                }

                d(e).parent("picture")[0] || e.complete && i ? c() : t ? (o = new l.Image, o.onload = c, o.onerror = c, a && (o.sizes = a), s && (o.srcset = s), t && (o.src = t)) : c()
            }, preloadImages: function () {
                const e = this;

                function t() {
                    null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                }

                e.imagesToLoad = e.$el.find("img");
                for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                    const a = e.imagesToLoad[s];
                    e.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, t)
                }
            }
        }
    }, _ = {};

    class V {
        constructor() {
            let e, t;
            for (var s = arguments.length, a = new Array(s), i = 0; i < s; i++) a[i] = arguments[i];
            if (1 === a.length && a[0].constructor && "Object" === Object.prototype.toString.call(a[0]).slice(8, -1) ? t = a[0] : [e, t] = a, t || (t = {}), t = g({}, t), e && !t.el && (t.el = e), t.el && d(t.el).length > 1) {
                const e = [];
                return d(t.el).each((s => {
                    const a = g({}, t, {el: s});
                    e.push(new V(a))
                })), e
            }
            const r = this;
            r.__swiper__ = !0, r.support = E(), r.device = C({userAgent: t.userAgent}), r.browser = T(), r.eventsListeners = {}, r.eventsAnyListeners = [], r.modules = [...r.__modules__], t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
            const n = {};
            r.modules.forEach((e => {
                e({
                    swiper: r,
                    extendParams: j(t, n),
                    on: r.on.bind(r),
                    once: r.once.bind(r),
                    off: r.off.bind(r),
                    emit: r.emit.bind(r)
                })
            }));
            const l = g({}, W, n);
            return r.params = g({}, l, _, t), r.originalParams = g({}, r.params), r.passedParams = g({}, t), r.params && r.params.on && Object.keys(r.params.on).forEach((e => {
                r.on(e, r.params.on[e])
            })), r.params && r.params.onAny && r.onAny(r.params.onAny), r.$ = d, Object.assign(r, {
                enabled: r.params.enabled,
                el: e,
                classNames: [],
                slides: d(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: () => "horizontal" === r.params.direction,
                isVertical: () => "vertical" === r.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: r.params.allowSlideNext,
                allowSlidePrev: r.params.allowSlidePrev,
                touchEvents: function () {
                    const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                        t = ["pointerdown", "pointermove", "pointerup"];
                    return r.touchEventsTouch = {
                        start: e[0],
                        move: e[1],
                        end: e[2],
                        cancel: e[3]
                    }, r.touchEventsDesktop = {
                        start: t[0],
                        move: t[1],
                        end: t[2]
                    }, r.support.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop
                }(),
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: r.params.focusableElements,
                    lastClickTime: u(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                },
                allowClick: !0,
                allowTouchMove: r.params.allowTouchMove,
                touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
                imagesToLoad: [],
                imagesLoaded: 0
            }), r.emit("_swiper"), r.params.init && r.init(), r
        }

        enable() {
            const e = this;
            e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
        }

        disable() {
            const e = this;
            e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
        }

        setProgress(e, t) {
            const s = this;
            e = Math.min(Math.max(e, 0), 1);
            const a = s.minTranslate(), i = (s.maxTranslate() - a) * e + a;
            s.translateTo(i, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses()
        }

        emitContainerClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
            e.emit("_containerClasses", t.join(" "))
        }

        getSlideClasses(e) {
            const t = this;
            return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
        }

        emitSlidesClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = [];
            e.slides.each((s => {
                const a = e.getSlideClasses(s);
                t.push({slideEl: s, classNames: a}), e.emit("_slideClass", s, a)
            })), e.emit("_slideClasses", t)
        }

        slidesPerViewDynamic(e, t) {
            void 0 === e && (e = "current"), void 0 === t && (t = !1);
            const {params: s, slides: a, slidesGrid: i, slidesSizesGrid: r, size: n, activeIndex: l} = this;
            let o = 1;
            if (s.centeredSlides) {
                let e, t = a[l].swiperSlideSize;
                for (let s = l + 1; s < a.length; s += 1) a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = !0));
                for (let s = l - 1; s >= 0; s -= 1) a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = !0))
            } else if ("current" === e) for (let e = l + 1; e < a.length; e += 1) {
                (t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1)
            } else for (let e = l - 1; e >= 0; e -= 1) {
                i[l] - i[e] < n && (o += 1)
            }
            return o
        }

        update() {
            const e = this;
            if (!e || e.destroyed) return;
            const {snapGrid: t, params: s} = e;

            function a() {
                const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                    s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses()
            }

            let i;
            s.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (a(), e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), i || a()), s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }

        changeDirection(e, t) {
            void 0 === t && (t = !0);
            const s = this, a = s.params.direction;
            return e || (e = "horizontal" === a ? "vertical" : "horizontal"), e === a || "horizontal" !== e && "vertical" !== e || (s.$el.removeClass(`${s.params.containerModifierClass}${a}`).addClass(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.each((t => {
                "vertical" === e ? t.style.width = "" : t.style.height = ""
            })), s.emit("changeDirection"), t && s.update()), s
        }

        changeLanguageDirection(e) {
            const t = this;
            t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
        }

        mount(e) {
            const t = this;
            if (t.mounted) return !0;
            const s = d(e || t.params.el);
            if (!(e = s[0])) return !1;
            e.swiper = t;
            const i = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
            let r = (() => {
                if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                    const t = d(e.shadowRoot.querySelector(i()));
                    return t.children = e => s.children(e), t
                }
                return s.children ? s.children(i()) : d(s).children(i())
            })();
            if (0 === r.length && t.params.createElements) {
                const e = a().createElement("div");
                r = d(e), e.className = t.params.wrapperClass, s.append(e), s.children(`.${t.params.slideClass}`).each((e => {
                    r.append(e)
                }))
            }
            return Object.assign(t, {
                $el: s,
                el: e,
                $wrapperEl: r,
                wrapperEl: r[0],
                mounted: !0,
                rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
                rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
                wrongRTL: "-webkit-box" === r.css("display")
            }), !0
        }

        init(e) {
            const t = this;
            if (t.initialized) return t;
            return !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
        }

        destroy(e, t) {
            void 0 === e && (e = !0), void 0 === t && (t = !0);
            const s = this, {params: a, $el: i, $wrapperEl: r, slides: n} = s;
            return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t && (s.removeClasses(), i.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e => {
                s.off(e)
            })), !1 !== e && (s.$el[0].swiper = null, function (e) {
                const t = e;
                Object.keys(t).forEach((e => {
                    try {
                        t[e] = null
                    } catch (e) {
                    }
                    try {
                        delete t[e]
                    } catch (e) {
                    }
                }))
            }(s)), s.destroyed = !0), null
        }

        static extendDefaults(e) {
            g(_, e)
        }

        static get extendedDefaults() {
            return _
        }

        static get defaults() {
            return W
        }

        static installModule(e) {
            V.prototype.__modules__ || (V.prototype.__modules__ = []);
            const t = V.prototype.__modules__;
            "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }

        static use(e) {
            return Array.isArray(e) ? (e.forEach((e => V.installModule(e))), V) : (V.installModule(e), V)
        }
    }

    function F(e, t, s, i) {
        const r = a();
        return e.params.createElements && Object.keys(i).forEach((a => {
            if (!s[a] && !0 === s.auto) {
                let n = e.$el.children(`.${i[a]}`)[0];
                n || (n = r.createElement("div"), n.className = i[a], e.$el.append(n)), s[a] = n, t[a] = n
            }
        })), s
    }

    function U(e) {
        return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`
    }

    function K(e) {
        const t = this, {$wrapperEl: s, params: a} = t;
        if (a.loop && t.loopDestroy(), "object" == typeof e && "length" in e) for (let t = 0; t < e.length; t += 1) e[t] && s.append(e[t]); else s.append(e);
        a.loop && t.loopCreate(), a.observer || t.update()
    }

    function Z(e) {
        const t = this, {params: s, $wrapperEl: a, activeIndex: i} = t;
        s.loop && t.loopDestroy();
        let r = i + 1;
        if ("object" == typeof e && "length" in e) {
            for (let t = 0; t < e.length; t += 1) e[t] && a.prepend(e[t]);
            r = i + e.length
        } else a.prepend(e);
        s.loop && t.loopCreate(), s.observer || t.update(), t.slideTo(r, 0, !1)
    }

    function Q(e, t) {
        const s = this, {$wrapperEl: a, params: i, activeIndex: r} = s;
        let n = r;
        i.loop && (n -= s.loopedSlides, s.loopDestroy(), s.slides = a.children(`.${i.slideClass}`));
        const l = s.slides.length;
        if (e <= 0) return void s.prependSlide(t);
        if (e >= l) return void s.appendSlide(t);
        let o = n > e ? n + 1 : n;
        const d = [];
        for (let t = l - 1; t >= e; t -= 1) {
            const e = s.slides.eq(t);
            e.remove(), d.unshift(e)
        }
        if ("object" == typeof t && "length" in t) {
            for (let e = 0; e < t.length; e += 1) t[e] && a.append(t[e]);
            o = n > e ? n + t.length : n
        } else a.append(t);
        for (let e = 0; e < d.length; e += 1) a.append(d[e]);
        i.loop && s.loopCreate(), i.observer || s.update(), i.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1)
    }

    function J(e) {
        const t = this, {params: s, $wrapperEl: a, activeIndex: i} = t;
        let r = i;
        s.loop && (r -= t.loopedSlides, t.loopDestroy(), t.slides = a.children(`.${s.slideClass}`));
        let n, l = r;
        if ("object" == typeof e && "length" in e) {
            for (let s = 0; s < e.length; s += 1) n = e[s], t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1);
            l = Math.max(l, 0)
        } else n = e, t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1), l = Math.max(l, 0);
        s.loop && t.loopCreate(), s.observer || t.update(), s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1)
    }

    function ee() {
        const e = this, t = [];
        for (let s = 0; s < e.slides.length; s += 1) t.push(s);
        e.removeSlide(t)
    }

    function te(e) {
        const {
            effect: t,
            swiper: s,
            on: a,
            setTranslate: i,
            setTransition: r,
            overwriteParams: n,
            perspective: l,
            recreateShadows: o,
            getEffectParams: d
        } = e;
        let c;
        a("beforeInit", (() => {
            if (s.params.effect !== t) return;
            s.classNames.push(`${s.params.containerModifierClass}${t}`), l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
            const e = n ? n() : {};
            Object.assign(s.params, e), Object.assign(s.originalParams, e)
        })), a("setTranslate", (() => {
            s.params.effect === t && i()
        })), a("setTransition", ((e, a) => {
            s.params.effect === t && r(a)
        })), a("transitionEnd", (() => {
            if (s.params.effect === t && o) {
                if (!d || !d().slideShadows) return;
                s.slides.each((e => {
                    s.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()
                })), o()
            }
        })), a("virtualUpdate", (() => {
            s.params.effect === t && (s.slides.length || (c = !0), requestAnimationFrame((() => {
                c && s.slides && s.slides.length && (i(), c = !1)
            })))
        }))
    }

    function se(e, t) {
        return e.transformEl ? t.find(e.transformEl).css({
            "backface-visibility": "hidden",
            "-webkit-backface-visibility": "hidden"
        }) : t
    }

    function ae(e) {
        let {swiper: t, duration: s, transformEl: a, allSlides: i} = e;
        const {slides: r, activeIndex: n, $wrapperEl: l} = t;
        if (t.params.virtualTranslate && 0 !== s) {
            let e, s = !1;
            e = i ? a ? r.find(a) : r : a ? r.eq(n).find(a) : r.eq(n), e.transitionEnd((() => {
                if (s) return;
                if (!t || t.destroyed) return;
                s = !0, t.animating = !1;
                const e = ["webkitTransitionEnd", "transitionend"];
                for (let t = 0; t < e.length; t += 1) l.trigger(e[t])
            }))
        }
    }

    function ie(e, t, s) {
        const a = "swiper-slide-shadow" + (s ? `-${s}` : ""), i = e.transformEl ? t.find(e.transformEl) : t;
        let r = i.children(`.${a}`);
        return r.length || (r = d(`<div class="swiper-slide-shadow${s ? `-${s}` : ""}"></div>`), i.append(r)), r
    }

    Object.keys(q).forEach((e => {
        Object.keys(q[e]).forEach((t => {
            V.prototype[t] = q[e][t]
        }))
    })), V.use([function (e) {
        let {swiper: t, on: s, emit: a} = e;
        const i = r();
        let n = null, l = null;
        const o = () => {
            t && !t.destroyed && t.initialized && (a("beforeResize"), a("resize"))
        }, d = () => {
            t && !t.destroyed && t.initialized && a("orientationchange")
        };
        s("init", (() => {
            t.params.resizeObserver && void 0 !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (n = new ResizeObserver((e => {
                l = i.requestAnimationFrame((() => {
                    const {width: s, height: a} = t;
                    let i = s, r = a;
                    e.forEach((e => {
                        let {contentBoxSize: s, contentRect: a, target: n} = e;
                        n && n !== t.el || (i = a ? a.width : (s[0] || s).inlineSize, r = a ? a.height : (s[0] || s).blockSize)
                    })), i === s && r === a || o()
                }))
            })), n.observe(t.el)) : (i.addEventListener("resize", o), i.addEventListener("orientationchange", d))
        })), s("destroy", (() => {
            l && i.cancelAnimationFrame(l), n && n.unobserve && t.el && (n.unobserve(t.el), n = null), i.removeEventListener("resize", o), i.removeEventListener("orientationchange", d)
        }))
    }, function (e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;
        const n = [], l = r(), o = function (e, t) {
            void 0 === t && (t = {});
            const s = new (l.MutationObserver || l.WebkitMutationObserver)((e => {
                if (1 === e.length) return void i("observerUpdate", e[0]);
                const t = function () {
                    i("observerUpdate", e[0])
                };
                l.requestAnimationFrame ? l.requestAnimationFrame(t) : l.setTimeout(t, 0)
            }));
            s.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }), n.push(s)
        };
        s({observer: !1, observeParents: !1, observeSlideChildren: !1}), a("init", (() => {
            if (t.params.observer) {
                if (t.params.observeParents) {
                    const e = t.$el.parents();
                    for (let t = 0; t < e.length; t += 1) o(e[t])
                }
                o(t.$el[0], {childList: t.params.observeSlideChildren}), o(t.$wrapperEl[0], {attributes: !1})
            }
        })), a("destroy", (() => {
            n.forEach((e => {
                e.disconnect()
            })), n.splice(0, n.length)
        }))
    }]);
    const re = [function (e) {
        let t, {swiper: s, extendParams: a, on: i, emit: r} = e;

        function n(e, t) {
            const a = s.params.virtual;
            if (a.cache && s.virtual.cache[t]) return s.virtual.cache[t];
            const i = a.renderSlide ? d(a.renderSlide.call(s, e, t)) : d(`<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
            return i.attr("data-swiper-slide-index") || i.attr("data-swiper-slide-index", t), a.cache && (s.virtual.cache[t] = i), i
        }

        function l(e) {
            const {slidesPerView: t, slidesPerGroup: a, centeredSlides: i} = s.params, {
                addSlidesBefore: l,
                addSlidesAfter: o
            } = s.params.virtual, {from: d, to: c, slides: p, slidesGrid: u, offset: h} = s.virtual;
            s.params.cssMode || s.updateActiveIndex();
            const m = s.activeIndex || 0;
            let f, g, v;
            f = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top", i ? (g = Math.floor(t / 2) + a + o, v = Math.floor(t / 2) + a + l) : (g = t + (a - 1) + o, v = a + l);
            const w = Math.max((m || 0) - v, 0), b = Math.min((m || 0) + g, p.length - 1),
                x = (s.slidesGrid[w] || 0) - (s.slidesGrid[0] || 0);

            function y() {
                s.updateSlides(), s.updateProgress(), s.updateSlidesClasses(), s.lazy && s.params.lazy.enabled && s.lazy.load(), r("virtualUpdate")
            }

            if (Object.assign(s.virtual, {
                from: w,
                to: b,
                offset: x,
                slidesGrid: s.slidesGrid
            }), d === w && c === b && !e) return s.slidesGrid !== u && x !== h && s.slides.css(f, `${x}px`), s.updateProgress(), void r("virtualUpdate");
            if (s.params.virtual.renderExternal) return s.params.virtual.renderExternal.call(s, {
                offset: x,
                from: w,
                to: b,
                slides: function () {
                    const e = [];
                    for (let t = w; t <= b; t += 1) e.push(p[t]);
                    return e
                }()
            }), void (s.params.virtual.renderExternalUpdate ? y() : r("virtualUpdate"));
            const E = [], C = [];
            if (e) s.$wrapperEl.find(`.${s.params.slideClass}`).remove(); else for (let e = d; e <= c; e += 1) (e < w || e > b) && s.$wrapperEl.find(`.${s.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();
            for (let t = 0; t < p.length; t += 1) t >= w && t <= b && (void 0 === c || e ? C.push(t) : (t > c && C.push(t), t < d && E.push(t)));
            C.forEach((e => {
                s.$wrapperEl.append(n(p[e], e))
            })), E.sort(((e, t) => t - e)).forEach((e => {
                s.$wrapperEl.prepend(n(p[e], e))
            })), s.$wrapperEl.children(".swiper-slide").css(f, `${x}px`), y()
        }

        a({
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: !0,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        }), s.virtual = {
            cache: {},
            from: void 0,
            to: void 0,
            slides: [],
            offset: 0,
            slidesGrid: []
        }, i("beforeInit", (() => {
            s.params.virtual.enabled && (s.virtual.slides = s.params.virtual.slides, s.classNames.push(`${s.params.containerModifierClass}virtual`), s.params.watchSlidesProgress = !0, s.originalParams.watchSlidesProgress = !0, s.params.initialSlide || l())
        })), i("setTranslate", (() => {
            s.params.virtual.enabled && (s.params.cssMode && !s._immediateVirtual ? (clearTimeout(t), t = setTimeout((() => {
                l()
            }), 100)) : l())
        })), i("init update resize", (() => {
            s.params.virtual.enabled && s.params.cssMode && v(s.wrapperEl, "--swiper-virtual-size", `${s.virtualSize}px`)
        })), Object.assign(s.virtual, {
            appendSlide: function (e) {
                if ("object" == typeof e && "length" in e) for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.push(e[t]); else s.virtual.slides.push(e);
                l(!0)
            }, prependSlide: function (e) {
                const t = s.activeIndex;
                let a = t + 1, i = 1;
                if (Array.isArray(e)) {
                    for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.unshift(e[t]);
                    a = t + e.length, i = e.length
                } else s.virtual.slides.unshift(e);
                if (s.params.virtual.cache) {
                    const e = s.virtual.cache, t = {};
                    Object.keys(e).forEach((s => {
                        const a = e[s], r = a.attr("data-swiper-slide-index");
                        r && a.attr("data-swiper-slide-index", parseInt(r, 10) + i), t[parseInt(s, 10) + i] = a
                    })), s.virtual.cache = t
                }
                l(!0), s.slideTo(a, 0)
            }, removeSlide: function (e) {
                if (null == e) return;
                let t = s.activeIndex;
                if (Array.isArray(e)) for (let a = e.length - 1; a >= 0; a -= 1) s.virtual.slides.splice(e[a], 1), s.params.virtual.cache && delete s.virtual.cache[e[a]], e[a] < t && (t -= 1), t = Math.max(t, 0); else s.virtual.slides.splice(e, 1), s.params.virtual.cache && delete s.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
                l(!0), s.slideTo(t, 0)
            }, removeAllSlides: function () {
                s.virtual.slides = [], s.params.virtual.cache && (s.virtual.cache = {}), l(!0), s.slideTo(0, 0)
            }, update: l
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: i, emit: n} = e;
        const l = a(), o = r();

        function c(e) {
            if (!t.enabled) return;
            const {rtlTranslate: s} = t;
            let a = e;
            a.originalEvent && (a = a.originalEvent);
            const i = a.keyCode || a.charCode, r = t.params.keyboard.pageUpDown, d = r && 33 === i, c = r && 34 === i,
                p = 37 === i, u = 39 === i, h = 38 === i, m = 40 === i;
            if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() && m || c)) return !1;
            if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && h || d)) return !1;
            if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || l.activeElement && l.activeElement.nodeName && ("input" === l.activeElement.nodeName.toLowerCase() || "textarea" === l.activeElement.nodeName.toLowerCase()))) {
                if (t.params.keyboard.onlyInViewport && (d || c || p || u || h || m)) {
                    let e = !1;
                    if (t.$el.parents(`.${t.params.slideClass}`).length > 0 && 0 === t.$el.parents(`.${t.params.slideActiveClass}`).length) return;
                    const a = t.$el, i = a[0].clientWidth, r = a[0].clientHeight, n = o.innerWidth, l = o.innerHeight,
                        d = t.$el.offset();
                    s && (d.left -= t.$el[0].scrollLeft);
                    const c = [[d.left, d.top], [d.left + i, d.top], [d.left, d.top + r], [d.left + i, d.top + r]];
                    for (let t = 0; t < c.length; t += 1) {
                        const s = c[t];
                        if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= l) {
                            if (0 === s[0] && 0 === s[1]) continue;
                            e = !0
                        }
                    }
                    if (!e) return
                }
                t.isHorizontal() ? ((d || c || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((c || u) && !s || (d || p) && s) && t.slideNext(), ((d || p) && !s || (c || u) && s) && t.slidePrev()) : ((d || c || h || m) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (c || m) && t.slideNext(), (d || h) && t.slidePrev()), n("keyPress", i)
            }
        }

        function p() {
            t.keyboard.enabled || (d(l).on("keydown", c), t.keyboard.enabled = !0)
        }

        function u() {
            t.keyboard.enabled && (d(l).off("keydown", c), t.keyboard.enabled = !1)
        }

        t.keyboard = {enabled: !1}, s({keyboard: {enabled: !1, onlyInViewport: !0, pageUpDown: !0}}), i("init", (() => {
            t.params.keyboard.enabled && p()
        })), i("destroy", (() => {
            t.keyboard.enabled && u()
        })), Object.assign(t.keyboard, {enable: p, disable: u})
    }, function (e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;
        const n = r();
        let l;
        s({
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarget: "container",
                thresholdDelta: null,
                thresholdTime: null
            }
        }), t.mousewheel = {enabled: !1};
        let o, c = u();
        const h = [];

        function m() {
            t.enabled && (t.mouseEntered = !0)
        }

        function f() {
            t.enabled && (t.mouseEntered = !1)
        }

        function g(e) {
            return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) && (!(t.params.mousewheel.thresholdTime && u() - c < t.params.mousewheel.thresholdTime) && (e.delta >= 6 && u() - c < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), i("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), i("scroll", e.raw)), c = (new n.Date).getTime(), !1)))
        }

        function v(e) {
            let s = e, a = !0;
            if (!t.enabled) return;
            const r = t.params.mousewheel;
            t.params.cssMode && s.preventDefault();
            let n = t.$el;
            if ("container" !== t.params.mousewheel.eventsTarget && (n = d(t.params.mousewheel.eventsTarget)), !t.mouseEntered && !n[0].contains(s.target) && !r.releaseOnEdges) return !0;
            s.originalEvent && (s = s.originalEvent);
            let c = 0;
            const m = t.rtlTranslate ? -1 : 1, f = function (e) {
                let t = 0, s = 0, a = 0, i = 0;
                return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), a = 10 * t, i = 10 * s, "deltaY" in e && (i = e.deltaY), "deltaX" in e && (a = e.deltaX), e.shiftKey && !a && (a = i, i = 0), (a || i) && e.deltaMode && (1 === e.deltaMode ? (a *= 40, i *= 40) : (a *= 800, i *= 800)), a && !t && (t = a < 1 ? -1 : 1), i && !s && (s = i < 1 ? -1 : 1), {
                    spinX: t,
                    spinY: s,
                    pixelX: a,
                    pixelY: i
                }
            }(s);
            if (r.forceToAxis) if (t.isHorizontal()) {
                if (!(Math.abs(f.pixelX) > Math.abs(f.pixelY))) return !0;
                c = -f.pixelX * m
            } else {
                if (!(Math.abs(f.pixelY) > Math.abs(f.pixelX))) return !0;
                c = -f.pixelY
            } else c = Math.abs(f.pixelX) > Math.abs(f.pixelY) ? -f.pixelX * m : -f.pixelY;
            if (0 === c) return !0;
            r.invert && (c = -c);
            let v = t.getTranslate() + c * r.sensitivity;
            if (v >= t.minTranslate() && (v = t.minTranslate()), v <= t.maxTranslate() && (v = t.maxTranslate()), a = !!t.params.loop || !(v === t.minTranslate() || v === t.maxTranslate()), a && t.params.nested && s.stopPropagation(), t.params.freeMode && t.params.freeMode.enabled) {
                const e = {time: u(), delta: Math.abs(c), direction: Math.sign(c)},
                    a = o && e.time < o.time + 500 && e.delta <= o.delta && e.direction === o.direction;
                if (!a) {
                    o = void 0, t.params.loop && t.loopFix();
                    let n = t.getTranslate() + c * r.sensitivity;
                    const d = t.isBeginning, u = t.isEnd;
                    if (n >= t.minTranslate() && (n = t.minTranslate()), n <= t.maxTranslate() && (n = t.maxTranslate()), t.setTransition(0), t.setTranslate(n), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses(), (!d && t.isBeginning || !u && t.isEnd) && t.updateSlidesClasses(), t.params.freeMode.sticky) {
                        clearTimeout(l), l = void 0, h.length >= 15 && h.shift();
                        const s = h.length ? h[h.length - 1] : void 0, a = h[0];
                        if (h.push(e), s && (e.delta > s.delta || e.direction !== s.direction)) h.splice(0); else if (h.length >= 15 && e.time - a.time < 500 && a.delta - e.delta >= 1 && e.delta <= 6) {
                            const s = c > 0 ? .8 : .2;
                            o = e, h.splice(0), l = p((() => {
                                t.slideToClosest(t.params.speed, !0, void 0, s)
                            }), 0)
                        }
                        l || (l = p((() => {
                            o = e, h.splice(0), t.slideToClosest(t.params.speed, !0, void 0, .5)
                        }), 500))
                    }
                    if (a || i("scroll", s), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), n === t.minTranslate() || n === t.maxTranslate()) return !0
                }
            } else {
                const s = {time: u(), delta: Math.abs(c), direction: Math.sign(c), raw: e};
                h.length >= 2 && h.shift();
                const a = h.length ? h[h.length - 1] : void 0;
                if (h.push(s), a ? (s.direction !== a.direction || s.delta > a.delta || s.time > a.time + 150) && g(s) : g(s), function (e) {
                    const s = t.params.mousewheel;
                    if (e.direction < 0) {
                        if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0
                    } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges) return !0;
                    return !1
                }(s)) return !0
            }
            return s.preventDefault ? s.preventDefault() : s.returnValue = !1, !1
        }

        function w(e) {
            let s = t.$el;
            "container" !== t.params.mousewheel.eventsTarget && (s = d(t.params.mousewheel.eventsTarget)), s[e]("mouseenter", m), s[e]("mouseleave", f), s[e]("wheel", v)
        }

        function b() {
            return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", v), !0) : !t.mousewheel.enabled && (w("on"), t.mousewheel.enabled = !0, !0)
        }

        function x() {
            return t.params.cssMode ? (t.wrapperEl.addEventListener(event, v), !0) : !!t.mousewheel.enabled && (w("off"), t.mousewheel.enabled = !1, !0)
        }

        a("init", (() => {
            !t.params.mousewheel.enabled && t.params.cssMode && x(), t.params.mousewheel.enabled && b()
        })), a("destroy", (() => {
            t.params.cssMode && b(), t.mousewheel.enabled && x()
        })), Object.assign(t.mousewheel, {enable: b, disable: x})
    }, function (e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;

        function r(e) {
            let s;
            return e && (s = d(e), t.params.uniqueNavElements && "string" == typeof e && s.length > 1 && 1 === t.$el.find(e).length && (s = t.$el.find(e))), s
        }

        function n(e, s) {
            const a = t.params.navigation;
            e && e.length > 0 && (e[s ? "addClass" : "removeClass"](a.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = s), t.params.watchOverflow && t.enabled && e[t.isLocked ? "addClass" : "removeClass"](a.lockClass))
        }

        function l() {
            if (t.params.loop) return;
            const {$nextEl: e, $prevEl: s} = t.navigation;
            n(s, t.isBeginning && !t.params.rewind), n(e, t.isEnd && !t.params.rewind)
        }

        function o(e) {
            e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), i("navigationPrev"))
        }

        function c(e) {
            e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), i("navigationNext"))
        }

        function p() {
            const e = t.params.navigation;
            if (t.params.navigation = F(t, t.originalParams.navigation, t.params.navigation, {
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev"
            }), !e.nextEl && !e.prevEl) return;
            const s = r(e.nextEl), a = r(e.prevEl);
            s && s.length > 0 && s.on("click", c), a && a.length > 0 && a.on("click", o), Object.assign(t.navigation, {
                $nextEl: s,
                nextEl: s && s[0],
                $prevEl: a,
                prevEl: a && a[0]
            }), t.enabled || (s && s.addClass(e.lockClass), a && a.addClass(e.lockClass))
        }

        function u() {
            const {$nextEl: e, $prevEl: s} = t.navigation;
            e && e.length && (e.off("click", c), e.removeClass(t.params.navigation.disabledClass)), s && s.length && (s.off("click", o), s.removeClass(t.params.navigation.disabledClass))
        }

        s({
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock",
                navigationDisabledClass: "swiper-navigation-disabled"
            }
        }), t.navigation = {nextEl: null, $nextEl: null, prevEl: null, $prevEl: null}, a("init", (() => {
            !1 === t.params.navigation.enabled ? h() : (p(), l())
        })), a("toEdge fromEdge lock unlock", (() => {
            l()
        })), a("destroy", (() => {
            u()
        })), a("enable disable", (() => {
            const {$nextEl: e, $prevEl: s} = t.navigation;
            e && e[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass), s && s[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass)
        })), a("click", ((e, s) => {
            const {$nextEl: a, $prevEl: r} = t.navigation, n = s.target;
            if (t.params.navigation.hideOnClick && !d(n).is(r) && !d(n).is(a)) {
                if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === n || t.pagination.el.contains(n))) return;
                let e;
                a ? e = a.hasClass(t.params.navigation.hiddenClass) : r && (e = r.hasClass(t.params.navigation.hiddenClass)), i(!0 === e ? "navigationShow" : "navigationHide"), a && a.toggleClass(t.params.navigation.hiddenClass), r && r.toggleClass(t.params.navigation.hiddenClass)
            }
        }));
        const h = () => {
            t.$el.addClass(t.params.navigation.navigationDisabledClass), u()
        };
        Object.assign(t.navigation, {
            enable: () => {
                t.$el.removeClass(t.params.navigation.navigationDisabledClass), p(), l()
            }, disable: h, update: l, init: p, destroy: u
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;
        const r = "swiper-pagination";
        let n;
        s({
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: e => e,
                formatFractionTotal: e => e,
                bulletClass: `${r}-bullet`,
                bulletActiveClass: `${r}-bullet-active`,
                modifierClass: `${r}-`,
                currentClass: `${r}-current`,
                totalClass: `${r}-total`,
                hiddenClass: `${r}-hidden`,
                progressbarFillClass: `${r}-progressbar-fill`,
                progressbarOppositeClass: `${r}-progressbar-opposite`,
                clickableClass: `${r}-clickable`,
                lockClass: `${r}-lock`,
                horizontalClass: `${r}-horizontal`,
                verticalClass: `${r}-vertical`,
                paginationDisabledClass: `${r}-disabled`
            }
        }), t.pagination = {el: null, $el: null, bullets: []};
        let l = 0;

        function o() {
            return !t.params.pagination.el || !t.pagination.el || !t.pagination.$el || 0 === t.pagination.$el.length
        }

        function c(e, s) {
            const {bulletActiveClass: a} = t.params.pagination;
            e[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`)
        }

        function p() {
            const e = t.rtl, s = t.params.pagination;
            if (o()) return;
            const a = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                r = t.pagination.$el;
            let p;
            const u = t.params.loop ? Math.ceil((a - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
            if (t.params.loop ? (p = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup), p > a - 1 - 2 * t.loopedSlides && (p -= a - 2 * t.loopedSlides), p > u - 1 && (p -= u), p < 0 && "bullets" !== t.params.paginationType && (p = u + p)) : p = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                const a = t.pagination.bullets;
                let i, o, u;
                if (s.dynamicBullets && (n = a.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(t.isHorizontal() ? "width" : "height", n * (s.dynamicMainBullets + 4) + "px"), s.dynamicMainBullets > 1 && void 0 !== t.previousIndex && (l += p - (t.previousIndex - t.loopedSlides || 0), l > s.dynamicMainBullets - 1 ? l = s.dynamicMainBullets - 1 : l < 0 && (l = 0)), i = Math.max(p - l, 0), o = i + (Math.min(a.length, s.dynamicMainBullets) - 1), u = (o + i) / 2), a.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${s.bulletActiveClass}${e}`)).join(" ")), r.length > 1) a.each((e => {
                    const t = d(e), a = t.index();
                    a === p && t.addClass(s.bulletActiveClass), s.dynamicBullets && (a >= i && a <= o && t.addClass(`${s.bulletActiveClass}-main`), a === i && c(t, "prev"), a === o && c(t, "next"))
                })); else {
                    const e = a.eq(p), r = e.index();
                    if (e.addClass(s.bulletActiveClass), s.dynamicBullets) {
                        const e = a.eq(i), n = a.eq(o);
                        for (let e = i; e <= o; e += 1) a.eq(e).addClass(`${s.bulletActiveClass}-main`);
                        if (t.params.loop) if (r >= a.length) {
                            for (let e = s.dynamicMainBullets; e >= 0; e -= 1) a.eq(a.length - e).addClass(`${s.bulletActiveClass}-main`);
                            a.eq(a.length - s.dynamicMainBullets - 1).addClass(`${s.bulletActiveClass}-prev`)
                        } else c(e, "prev"), c(n, "next"); else c(e, "prev"), c(n, "next")
                    }
                }
                if (s.dynamicBullets) {
                    const i = Math.min(a.length, s.dynamicMainBullets + 4), r = (n * i - n) / 2 - u * n,
                        l = e ? "right" : "left";
                    a.css(t.isHorizontal() ? l : "top", `${r}px`)
                }
            }
            if ("fraction" === s.type && (r.find(U(s.currentClass)).text(s.formatFractionCurrent(p + 1)), r.find(U(s.totalClass)).text(s.formatFractionTotal(u))), "progressbar" === s.type) {
                let e;
                e = s.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                const a = (p + 1) / u;
                let i = 1, n = 1;
                "horizontal" === e ? i = a : n = a, r.find(U(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${n})`).transition(t.params.speed)
            }
            "custom" === s.type && s.renderCustom ? (r.html(s.renderCustom(t, p + 1, u)), i("paginationRender", r[0])) : i("paginationUpdate", r[0]), t.params.watchOverflow && t.enabled && r[t.isLocked ? "addClass" : "removeClass"](s.lockClass)
        }

        function u() {
            const e = t.params.pagination;
            if (o()) return;
            const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                a = t.pagination.$el;
            let r = "";
            if ("bullets" === e.type) {
                let i = t.params.loop ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                t.params.freeMode && t.params.freeMode.enabled && !t.params.loop && i > s && (i = s);
                for (let s = 0; s < i; s += 1) e.renderBullet ? r += e.renderBullet.call(t, s, e.bulletClass) : r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;
                a.html(r), t.pagination.bullets = a.find(U(e.bulletClass))
            }
            "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`, a.html(r)), "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`, a.html(r)), "custom" !== e.type && i("paginationRender", t.pagination.$el[0])
        }

        function h() {
            t.params.pagination = F(t, t.originalParams.pagination, t.params.pagination, {el: "swiper-pagination"});
            const e = t.params.pagination;
            if (!e.el) return;
            let s = d(e.el);
            0 !== s.length && (t.params.uniqueNavElements && "string" == typeof e.el && s.length > 1 && (s = t.$el.find(e.el), s.length > 1 && (s = s.filter((e => d(e).parents(".swiper")[0] === t.el)))), "bullets" === e.type && e.clickable && s.addClass(e.clickableClass), s.addClass(e.modifierClass + e.type), s.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (s.addClass(`${e.modifierClass}${e.type}-dynamic`), l = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && s.addClass(e.progressbarOppositeClass), e.clickable && s.on("click", U(e.bulletClass), (function (e) {
                e.preventDefault();
                let s = d(this).index() * t.params.slidesPerGroup;
                t.params.loop && (s += t.loopedSlides), t.slideTo(s)
            })), Object.assign(t.pagination, {$el: s, el: s[0]}), t.enabled || s.addClass(e.lockClass))
        }

        function m() {
            const e = t.params.pagination;
            if (o()) return;
            const s = t.pagination.$el;
            s.removeClass(e.hiddenClass), s.removeClass(e.modifierClass + e.type), s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.pagination.bullets && t.pagination.bullets.removeClass && t.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && s.off("click", U(e.bulletClass))
        }

        a("init", (() => {
            !1 === t.params.pagination.enabled ? f() : (h(), u(), p())
        })), a("activeIndexChange", (() => {
            (t.params.loop || void 0 === t.snapIndex) && p()
        })), a("snapIndexChange", (() => {
            t.params.loop || p()
        })), a("slidesLengthChange", (() => {
            t.params.loop && (u(), p())
        })), a("snapGridLengthChange", (() => {
            t.params.loop || (u(), p())
        })), a("destroy", (() => {
            m()
        })), a("enable disable", (() => {
            const {$el: e} = t.pagination;
            e && e[t.enabled ? "removeClass" : "addClass"](t.params.pagination.lockClass)
        })), a("lock unlock", (() => {
            p()
        })), a("click", ((e, s) => {
            const a = s.target, {$el: r} = t.pagination;
            if (t.params.pagination.el && t.params.pagination.hideOnClick && r && r.length > 0 && !d(a).hasClass(t.params.pagination.bulletClass)) {
                if (t.navigation && (t.navigation.nextEl && a === t.navigation.nextEl || t.navigation.prevEl && a === t.navigation.prevEl)) return;
                const e = r.hasClass(t.params.pagination.hiddenClass);
                i(!0 === e ? "paginationShow" : "paginationHide"), r.toggleClass(t.params.pagination.hiddenClass)
            }
        }));
        const f = () => {
            t.$el.addClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass), m()
        };
        Object.assign(t.pagination, {
            enable: () => {
                t.$el.removeClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass), h(), u(), p()
            }, disable: f, render: u, update: p, init: h, destroy: m
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: i, emit: r} = e;
        const n = a();
        let l, o, c, u, h = !1, m = null, f = null;

        function g() {
            if (!t.params.scrollbar.el || !t.scrollbar.el) return;
            const {scrollbar: e, rtlTranslate: s, progress: a} = t, {$dragEl: i, $el: r} = e, n = t.params.scrollbar;
            let l = o, d = (c - o) * a;
            s ? (d = -d, d > 0 ? (l = o - d, d = 0) : -d + o > c && (l = c + d)) : d < 0 ? (l = o + d, d = 0) : d + o > c && (l = c - d), t.isHorizontal() ? (i.transform(`translate3d(${d}px, 0, 0)`), i[0].style.width = `${l}px`) : (i.transform(`translate3d(0px, ${d}px, 0)`), i[0].style.height = `${l}px`), n.hide && (clearTimeout(m), r[0].style.opacity = 1, m = setTimeout((() => {
                r[0].style.opacity = 0, r.transition(400)
            }), 1e3))
        }

        function v() {
            if (!t.params.scrollbar.el || !t.scrollbar.el) return;
            const {scrollbar: e} = t, {$dragEl: s, $el: a} = e;
            s[0].style.width = "", s[0].style.height = "", c = t.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight, u = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)), o = "auto" === t.params.scrollbar.dragSize ? c * u : parseInt(t.params.scrollbar.dragSize, 10), t.isHorizontal() ? s[0].style.width = `${o}px` : s[0].style.height = `${o}px`, a[0].style.display = u >= 1 ? "none" : "", t.params.scrollbar.hide && (a[0].style.opacity = 0), t.params.watchOverflow && t.enabled && e.$el[t.isLocked ? "addClass" : "removeClass"](t.params.scrollbar.lockClass)
        }

        function w(e) {
            return t.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
        }

        function b(e) {
            const {scrollbar: s, rtlTranslate: a} = t, {$el: i} = s;
            let r;
            r = (w(e) - i.offset()[t.isHorizontal() ? "left" : "top"] - (null !== l ? l : o / 2)) / (c - o), r = Math.max(Math.min(r, 1), 0), a && (r = 1 - r);
            const n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
            t.updateProgress(n), t.setTranslate(n), t.updateActiveIndex(), t.updateSlidesClasses()
        }

        function x(e) {
            const s = t.params.scrollbar, {scrollbar: a, $wrapperEl: i} = t, {$el: n, $dragEl: o} = a;
            h = !0, l = e.target === o[0] || e.target === o ? w(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), i.transition(100), o.transition(100), b(e), clearTimeout(f), n.transition(0), s.hide && n.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), r("scrollbarDragStart", e)
        }

        function y(e) {
            const {scrollbar: s, $wrapperEl: a} = t, {$el: i, $dragEl: n} = s;
            h && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, b(e), a.transition(0), i.transition(0), n.transition(0), r("scrollbarDragMove", e))
        }

        function E(e) {
            const s = t.params.scrollbar, {scrollbar: a, $wrapperEl: i} = t, {$el: n} = a;
            h && (h = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), i.transition("")), s.hide && (clearTimeout(f), f = p((() => {
                n.css("opacity", 0), n.transition(400)
            }), 1e3)), r("scrollbarDragEnd", e), s.snapOnRelease && t.slideToClosest())
        }

        function C(e) {
            const {scrollbar: s, touchEventsTouch: a, touchEventsDesktop: i, params: r, support: l} = t, o = s.$el;
            if (!o) return;
            const d = o[0], c = !(!l.passiveListener || !r.passiveListeners) && {passive: !1, capture: !1},
                p = !(!l.passiveListener || !r.passiveListeners) && {passive: !0, capture: !1};
            if (!d) return;
            const u = "on" === e ? "addEventListener" : "removeEventListener";
            l.touch ? (d[u](a.start, x, c), d[u](a.move, y, c), d[u](a.end, E, p)) : (d[u](i.start, x, c), n[u](i.move, y, c), n[u](i.end, E, p))
        }

        function T() {
            const {scrollbar: e, $el: s} = t;
            t.params.scrollbar = F(t, t.originalParams.scrollbar, t.params.scrollbar, {el: "swiper-scrollbar"});
            const a = t.params.scrollbar;
            if (!a.el) return;
            let i = d(a.el);
            t.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === s.find(a.el).length && (i = s.find(a.el)), i.addClass(t.isHorizontal() ? a.horizontalClass : a.verticalClass);
            let r = i.find(`.${t.params.scrollbar.dragClass}`);
            0 === r.length && (r = d(`<div class="${t.params.scrollbar.dragClass}"></div>`), i.append(r)), Object.assign(e, {
                $el: i,
                el: i[0],
                $dragEl: r,
                dragEl: r[0]
            }), a.draggable && t.params.scrollbar.el && t.scrollbar.el && C("on"), i && i[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass)
        }

        function $() {
            const e = t.params.scrollbar, s = t.scrollbar.$el;
            s && s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.params.scrollbar.el && t.scrollbar.el && C("off")
        }

        s({
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag",
                scrollbarDisabledClass: "swiper-scrollbar-disabled",
                horizontalClass: "swiper-scrollbar-horizontal",
                verticalClass: "swiper-scrollbar-vertical"
            }
        }), t.scrollbar = {el: null, dragEl: null, $el: null, $dragEl: null}, i("init", (() => {
            !1 === t.params.scrollbar.enabled ? S() : (T(), v(), g())
        })), i("update resize observerUpdate lock unlock", (() => {
            v()
        })), i("setTranslate", (() => {
            g()
        })), i("setTransition", ((e, s) => {
            !function (e) {
                t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
            }(s)
        })), i("enable disable", (() => {
            const {$el: e} = t.scrollbar;
            e && e[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass)
        })), i("destroy", (() => {
            $()
        }));
        const S = () => {
            t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), $()
        };
        Object.assign(t.scrollbar, {
            enable: () => {
                t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), T(), v(), g()
            }, disable: S, updateSize: v, setTranslate: g, init: T, destroy: $
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({parallax: {enabled: !1}});
        const i = (e, s) => {
            const {rtl: a} = t, i = d(e), r = a ? -1 : 1, n = i.attr("data-swiper-parallax") || "0";
            let l = i.attr("data-swiper-parallax-x"), o = i.attr("data-swiper-parallax-y");
            const c = i.attr("data-swiper-parallax-scale"), p = i.attr("data-swiper-parallax-opacity");
            if (l || o ? (l = l || "0", o = o || "0") : t.isHorizontal() ? (l = n, o = "0") : (o = n, l = "0"), l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s * r + "%" : l * s * r + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * s + "%" : o * s + "px", null != p) {
                const e = p - (p - 1) * (1 - Math.abs(s));
                i[0].style.opacity = e
            }
            if (null == c) i.transform(`translate3d(${l}, ${o}, 0px)`); else {
                const e = c - (c - 1) * (1 - Math.abs(s));
                i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`)
            }
        }, r = () => {
            const {$el: e, slides: s, progress: a, snapGrid: r} = t;
            e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => {
                i(e, a)
            })), s.each(((e, s) => {
                let n = e.progress;
                t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (n += Math.ceil(s / 2) - a * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), d(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => {
                    i(e, n)
                }))
            }))
        };
        a("beforeInit", (() => {
            t.params.parallax.enabled && (t.params.watchSlidesProgress = !0, t.originalParams.watchSlidesProgress = !0)
        })), a("init", (() => {
            t.params.parallax.enabled && r()
        })), a("setTranslate", (() => {
            t.params.parallax.enabled && r()
        })), a("setTransition", ((e, s) => {
            t.params.parallax.enabled && function (e) {
                void 0 === e && (e = t.params.speed);
                const {$el: s} = t;
                s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((t => {
                    const s = d(t);
                    let a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
                    0 === e && (a = 0), s.transition(a)
                }))
            }(s)
        }))
    }, function (e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;
        const n = r();
        s({
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        }), t.zoom = {enabled: !1};
        let l, o, c, p = 1, u = !1;
        const m = {
            $slideEl: void 0,
            slideWidth: void 0,
            slideHeight: void 0,
            $imageEl: void 0,
            $imageWrapEl: void 0,
            maxRatio: 3
        }, f = {
            isTouched: void 0,
            isMoved: void 0,
            currentX: void 0,
            currentY: void 0,
            minX: void 0,
            minY: void 0,
            maxX: void 0,
            maxY: void 0,
            width: void 0,
            height: void 0,
            startX: void 0,
            startY: void 0,
            touchesStart: {},
            touchesCurrent: {}
        }, g = {x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0};
        let v = 1;

        function w(e) {
            if (e.targetTouches.length < 2) return 1;
            const t = e.targetTouches[0].pageX, s = e.targetTouches[0].pageY, a = e.targetTouches[1].pageX,
                i = e.targetTouches[1].pageY;
            return Math.sqrt((a - t) ** 2 + (i - s) ** 2)
        }

        function b(e) {
            const s = t.support, a = t.params.zoom;
            if (o = !1, c = !1, !s.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                o = !0, m.scaleStart = w(e)
            }
            m.$slideEl && m.$slideEl.length || (m.$slideEl = d(e.target).closest(`.${t.params.slideClass}`), 0 === m.$slideEl.length && (m.$slideEl = t.slides.eq(t.activeIndex)), m.$imageEl = m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`), m.maxRatio = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== m.$imageWrapEl.length) ? (m.$imageEl && m.$imageEl.transition(0), u = !0) : m.$imageEl = void 0
        }

        function x(e) {
            const s = t.support, a = t.params.zoom, i = t.zoom;
            if (!s.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                c = !0, m.scaleMove = w(e)
            }
            m.$imageEl && 0 !== m.$imageEl.length ? (s.gestures ? i.scale = e.scale * p : i.scale = m.scaleMove / m.scaleStart * p, i.scale > m.maxRatio && (i.scale = m.maxRatio - 1 + (i.scale - m.maxRatio + 1) ** .5), i.scale < a.minRatio && (i.scale = a.minRatio + 1 - (a.minRatio - i.scale + 1) ** .5), m.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`)) : "gesturechange" === e.type && b(e)
        }

        function y(e) {
            const s = t.device, a = t.support, i = t.params.zoom, r = t.zoom;
            if (!a.gestures) {
                if (!o || !c) return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !s.android) return;
                o = !1, c = !1
            }
            m.$imageEl && 0 !== m.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, m.maxRatio), i.minRatio), m.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`), p = r.scale, u = !1, 1 === r.scale && (m.$slideEl = void 0))
        }

        function E(e) {
            const s = t.zoom;
            if (!m.$imageEl || 0 === m.$imageEl.length) return;
            if (t.allowClick = !1, !f.isTouched || !m.$slideEl) return;
            f.isMoved || (f.width = m.$imageEl[0].offsetWidth, f.height = m.$imageEl[0].offsetHeight, f.startX = h(m.$imageWrapEl[0], "x") || 0, f.startY = h(m.$imageWrapEl[0], "y") || 0, m.slideWidth = m.$slideEl[0].offsetWidth, m.slideHeight = m.$slideEl[0].offsetHeight, m.$imageWrapEl.transition(0));
            const a = f.width * s.scale, i = f.height * s.scale;
            if (!(a < m.slideWidth && i < m.slideHeight)) {
                if (f.minX = Math.min(m.slideWidth / 2 - a / 2, 0), f.maxX = -f.minX, f.minY = Math.min(m.slideHeight / 2 - i / 2, 0), f.maxY = -f.minY, f.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, f.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !f.isMoved && !u) {
                    if (t.isHorizontal() && (Math.floor(f.minX) === Math.floor(f.startX) && f.touchesCurrent.x < f.touchesStart.x || Math.floor(f.maxX) === Math.floor(f.startX) && f.touchesCurrent.x > f.touchesStart.x)) return void (f.isTouched = !1);
                    if (!t.isHorizontal() && (Math.floor(f.minY) === Math.floor(f.startY) && f.touchesCurrent.y < f.touchesStart.y || Math.floor(f.maxY) === Math.floor(f.startY) && f.touchesCurrent.y > f.touchesStart.y)) return void (f.isTouched = !1)
                }
                e.cancelable && e.preventDefault(), e.stopPropagation(), f.isMoved = !0, f.currentX = f.touchesCurrent.x - f.touchesStart.x + f.startX, f.currentY = f.touchesCurrent.y - f.touchesStart.y + f.startY, f.currentX < f.minX && (f.currentX = f.minX + 1 - (f.minX - f.currentX + 1) ** .8), f.currentX > f.maxX && (f.currentX = f.maxX - 1 + (f.currentX - f.maxX + 1) ** .8), f.currentY < f.minY && (f.currentY = f.minY + 1 - (f.minY - f.currentY + 1) ** .8), f.currentY > f.maxY && (f.currentY = f.maxY - 1 + (f.currentY - f.maxY + 1) ** .8), g.prevPositionX || (g.prevPositionX = f.touchesCurrent.x), g.prevPositionY || (g.prevPositionY = f.touchesCurrent.y), g.prevTime || (g.prevTime = Date.now()), g.x = (f.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2, g.y = (f.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2, Math.abs(f.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0), Math.abs(f.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0), g.prevPositionX = f.touchesCurrent.x, g.prevPositionY = f.touchesCurrent.y, g.prevTime = Date.now(), m.$imageWrapEl.transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)
            }
        }

        function C() {
            const e = t.zoom;
            m.$slideEl && t.previousIndex !== t.activeIndex && (m.$imageEl && m.$imageEl.transform("translate3d(0,0,0) scale(1)"), m.$imageWrapEl && m.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, p = 1, m.$slideEl = void 0, m.$imageEl = void 0, m.$imageWrapEl = void 0)
        }

        function T(e) {
            const s = t.zoom, a = t.params.zoom;
            if (m.$slideEl || (e && e.target && (m.$slideEl = d(e.target).closest(`.${t.params.slideClass}`)), m.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : m.$slideEl = t.slides.eq(t.activeIndex)), m.$imageEl = m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`)), !m.$imageEl || 0 === m.$imageEl.length || !m.$imageWrapEl || 0 === m.$imageWrapEl.length) return;
            let i, r, l, o, c, u, h, g, v, w, b, x, y, E, C, T, $, S;
            t.params.cssMode && (t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.touchAction = "none"), m.$slideEl.addClass(`${a.zoomedSlideClass}`), void 0 === f.touchesStart.x && e ? (i = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, r = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (i = f.touchesStart.x, r = f.touchesStart.y), s.scale = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, p = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, e ? ($ = m.$slideEl[0].offsetWidth, S = m.$slideEl[0].offsetHeight, l = m.$slideEl.offset().left + n.scrollX, o = m.$slideEl.offset().top + n.scrollY, c = l + $ / 2 - i, u = o + S / 2 - r, v = m.$imageEl[0].offsetWidth, w = m.$imageEl[0].offsetHeight, b = v * s.scale, x = w * s.scale, y = Math.min($ / 2 - b / 2, 0), E = Math.min(S / 2 - x / 2, 0), C = -y, T = -E, h = c * s.scale, g = u * s.scale, h < y && (h = y), h > C && (h = C), g < E && (g = E), g > T && (g = T)) : (h = 0, g = 0), m.$imageWrapEl.transition(300).transform(`translate3d(${h}px, ${g}px,0)`), m.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`)
        }

        function $() {
            const e = t.zoom, s = t.params.zoom;
            m.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : m.$slideEl = t.slides.eq(t.activeIndex), m.$imageEl = m.$slideEl.find(`.${s.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(`.${s.containerClass}`)), m.$imageEl && 0 !== m.$imageEl.length && m.$imageWrapEl && 0 !== m.$imageWrapEl.length && (t.params.cssMode && (t.wrapperEl.style.overflow = "", t.wrapperEl.style.touchAction = ""), e.scale = 1, p = 1, m.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), m.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), m.$slideEl.removeClass(`${s.zoomedSlideClass}`), m.$slideEl = void 0)
        }

        function S(e) {
            const s = t.zoom;
            s.scale && 1 !== s.scale ? $() : T(e)
        }

        function M() {
            const e = t.support;
            return {
                passiveListener: !("touchstart" !== t.touchEvents.start || !e.passiveListener || !t.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }, activeListenerWithCapture: !e.passiveListener || {passive: !1, capture: !0}
            }
        }

        function P() {
            return `.${t.params.slideClass}`
        }

        function k(e) {
            const {passiveListener: s} = M(), a = P();
            t.$wrapperEl[e]("gesturestart", a, b, s), t.$wrapperEl[e]("gesturechange", a, x, s), t.$wrapperEl[e]("gestureend", a, y, s)
        }

        function z() {
            l || (l = !0, k("on"))
        }

        function L() {
            l && (l = !1, k("off"))
        }

        function O() {
            const e = t.zoom;
            if (e.enabled) return;
            e.enabled = !0;
            const s = t.support, {passiveListener: a, activeListenerWithCapture: i} = M(), r = P();
            s.gestures ? (t.$wrapperEl.on(t.touchEvents.start, z, a), t.$wrapperEl.on(t.touchEvents.end, L, a)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.on(t.touchEvents.start, r, b, a), t.$wrapperEl.on(t.touchEvents.move, r, x, i), t.$wrapperEl.on(t.touchEvents.end, r, y, a), t.touchEvents.cancel && t.$wrapperEl.on(t.touchEvents.cancel, r, y, a)), t.$wrapperEl.on(t.touchEvents.move, `.${t.params.zoom.containerClass}`, E, i)
        }

        function I() {
            const e = t.zoom;
            if (!e.enabled) return;
            const s = t.support;
            e.enabled = !1;
            const {passiveListener: a, activeListenerWithCapture: i} = M(), r = P();
            s.gestures ? (t.$wrapperEl.off(t.touchEvents.start, z, a), t.$wrapperEl.off(t.touchEvents.end, L, a)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.off(t.touchEvents.start, r, b, a), t.$wrapperEl.off(t.touchEvents.move, r, x, i), t.$wrapperEl.off(t.touchEvents.end, r, y, a), t.touchEvents.cancel && t.$wrapperEl.off(t.touchEvents.cancel, r, y, a)), t.$wrapperEl.off(t.touchEvents.move, `.${t.params.zoom.containerClass}`, E, i)
        }

        Object.defineProperty(t.zoom, "scale", {
            get: () => v, set(e) {
                if (v !== e) {
                    const t = m.$imageEl ? m.$imageEl[0] : void 0, s = m.$slideEl ? m.$slideEl[0] : void 0;
                    i("zoomChange", e, t, s)
                }
                v = e
            }
        }), a("init", (() => {
            t.params.zoom.enabled && O()
        })), a("destroy", (() => {
            I()
        })), a("touchStart", ((e, s) => {
            t.zoom.enabled && function (e) {
                const s = t.device;
                m.$imageEl && 0 !== m.$imageEl.length && (f.isTouched || (s.android && e.cancelable && e.preventDefault(), f.isTouched = !0, f.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, f.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            }(s)
        })), a("touchEnd", ((e, s) => {
            t.zoom.enabled && function () {
                const e = t.zoom;
                if (!m.$imageEl || 0 === m.$imageEl.length) return;
                if (!f.isTouched || !f.isMoved) return f.isTouched = !1, void (f.isMoved = !1);
                f.isTouched = !1, f.isMoved = !1;
                let s = 300, a = 300;
                const i = g.x * s, r = f.currentX + i, n = g.y * a, l = f.currentY + n;
                0 !== g.x && (s = Math.abs((r - f.currentX) / g.x)), 0 !== g.y && (a = Math.abs((l - f.currentY) / g.y));
                const o = Math.max(s, a);
                f.currentX = r, f.currentY = l;
                const d = f.width * e.scale, c = f.height * e.scale;
                f.minX = Math.min(m.slideWidth / 2 - d / 2, 0), f.maxX = -f.minX, f.minY = Math.min(m.slideHeight / 2 - c / 2, 0), f.maxY = -f.minY, f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX), f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY), m.$imageWrapEl.transition(o).transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)
            }()
        })), a("doubleTap", ((e, s) => {
            !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && S(s)
        })), a("transitionEnd", (() => {
            t.zoom.enabled && t.params.zoom.enabled && C()
        })), a("slideChange", (() => {
            t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && C()
        })), Object.assign(t.zoom, {enable: O, disable: I, in: T, out: $, toggle: S})
    }, function (e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;
        s({
            lazy: {
                checkInView: !1,
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                scrollingElement: "",
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        }), t.lazy = {};
        let n = !1, l = !1;

        function o(e, s) {
            void 0 === s && (s = !0);
            const a = t.params.lazy;
            if (void 0 === e) return;
            if (0 === t.slides.length) return;
            const r = t.virtual && t.params.virtual.enabled ? t.$wrapperEl.children(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`) : t.slides.eq(e),
                n = r.find(`.${a.elementClass}:not(.${a.loadedClass}):not(.${a.loadingClass})`);
            !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || n.push(r[0]), 0 !== n.length && n.each((e => {
                const n = d(e);
                n.addClass(a.loadingClass);
                const l = n.attr("data-background"), c = n.attr("data-src"), p = n.attr("data-srcset"),
                    u = n.attr("data-sizes"), h = n.parent("picture");
                t.loadImage(n[0], c || l, p, u, !1, (() => {
                    if (null != t && t && (!t || t.params) && !t.destroyed) {
                        if (l ? (n.css("background-image", `url("${l}")`), n.removeAttr("data-background")) : (p && (n.attr("srcset", p), n.removeAttr("data-srcset")), u && (n.attr("sizes", u), n.removeAttr("data-sizes")), h.length && h.children("source").each((e => {
                            const t = d(e);
                            t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"))
                        })), c && (n.attr("src", c), n.removeAttr("data-src"))), n.addClass(a.loadedClass).removeClass(a.loadingClass), r.find(`.${a.preloaderClass}`).remove(), t.params.loop && s) {
                            const e = r.attr("data-swiper-slide-index");
                            if (r.hasClass(t.params.slideDuplicateClass)) {
                                o(t.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`).index(), !1)
                            } else {
                                o(t.$wrapperEl.children(`.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(), !1)
                            }
                        }
                        i("lazyImageReady", r[0], n[0]), t.params.autoHeight && t.updateAutoHeight()
                    }
                })), i("lazyImageLoad", r[0], n[0])
            }))
        }

        function c() {
            const {$wrapperEl: e, params: s, slides: a, activeIndex: i} = t, r = t.virtual && s.virtual.enabled,
                n = s.lazy;
            let c = s.slidesPerView;

            function p(t) {
                if (r) {
                    if (e.children(`.${s.slideClass}[data-swiper-slide-index="${t}"]`).length) return !0
                } else if (a[t]) return !0;
                return !1
            }

            function u(e) {
                return r ? d(e).attr("data-swiper-slide-index") : d(e).index()
            }

            if ("auto" === c && (c = 0), l || (l = !0), t.params.watchSlidesProgress) e.children(`.${s.slideVisibleClass}`).each((e => {
                o(r ? d(e).attr("data-swiper-slide-index") : d(e).index())
            })); else if (c > 1) for (let e = i; e < i + c; e += 1) p(e) && o(e); else o(i);
            if (n.loadPrevNext) if (c > 1 || n.loadPrevNextAmount && n.loadPrevNextAmount > 1) {
                const e = n.loadPrevNextAmount, t = Math.ceil(c), s = Math.min(i + t + Math.max(e, t), a.length),
                    r = Math.max(i - Math.max(t, e), 0);
                for (let e = i + t; e < s; e += 1) p(e) && o(e);
                for (let e = r; e < i; e += 1) p(e) && o(e)
            } else {
                const t = e.children(`.${s.slideNextClass}`);
                t.length > 0 && o(u(t));
                const a = e.children(`.${s.slidePrevClass}`);
                a.length > 0 && o(u(a))
            }
        }

        function p() {
            const e = r();
            if (!t || t.destroyed) return;
            const s = t.params.lazy.scrollingElement ? d(t.params.lazy.scrollingElement) : d(e), a = s[0] === e,
                i = a ? e.innerWidth : s[0].offsetWidth, l = a ? e.innerHeight : s[0].offsetHeight,
                o = t.$el.offset(), {rtlTranslate: u} = t;
            let h = !1;
            u && (o.left -= t.$el[0].scrollLeft);
            const m = [[o.left, o.top], [o.left + t.width, o.top], [o.left, o.top + t.height], [o.left + t.width, o.top + t.height]];
            for (let e = 0; e < m.length; e += 1) {
                const t = m[e];
                if (t[0] >= 0 && t[0] <= i && t[1] >= 0 && t[1] <= l) {
                    if (0 === t[0] && 0 === t[1]) continue;
                    h = !0
                }
            }
            const f = !("touchstart" !== t.touchEvents.start || !t.support.passiveListener || !t.params.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            h ? (c(), s.off("scroll", p, f)) : n || (n = !0, s.on("scroll", p, f))
        }

        a("beforeInit", (() => {
            t.params.lazy.enabled && t.params.preloadImages && (t.params.preloadImages = !1)
        })), a("init", (() => {
            t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c())
        })), a("scroll", (() => {
            t.params.freeMode && t.params.freeMode.enabled && !t.params.freeMode.sticky && c()
        })), a("scrollbarDragMove resize _freeModeNoMomentumRelease", (() => {
            t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c())
        })), a("transitionStart", (() => {
            t.params.lazy.enabled && (t.params.lazy.loadOnTransitionStart || !t.params.lazy.loadOnTransitionStart && !l) && (t.params.lazy.checkInView ? p() : c())
        })), a("transitionEnd", (() => {
            t.params.lazy.enabled && !t.params.lazy.loadOnTransitionStart && (t.params.lazy.checkInView ? p() : c())
        })), a("slideChange", (() => {
            const {lazy: e, cssMode: s, watchSlidesProgress: a, touchReleaseOnEdges: i, resistanceRatio: r} = t.params;
            e.enabled && (s || a && (i || 0 === r)) && c()
        })), a("destroy", (() => {
            t.$el && t.$el.find(`.${t.params.lazy.loadingClass}`).removeClass(t.params.lazy.loadingClass)
        })), Object.assign(t.lazy, {load: c, loadInSlide: o})
    }, function (e) {
        let {swiper: t, extendParams: s, on: a} = e;

        function i(e, t) {
            const s = function () {
                let e, t, s;
                return (a, i) => {
                    for (t = -1, e = a.length; e - t > 1;) s = e + t >> 1, a[s] <= i ? t = s : e = s;
                    return e
                }
            }();
            let a, i;
            return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
                return e ? (i = s(this.x, e), a = i - 1, (e - this.x[a]) * (this.y[i] - this.y[a]) / (this.x[i] - this.x[a]) + this.y[a]) : 0
            }, this
        }

        function r() {
            t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline)
        }

        s({
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        }), t.controller = {control: void 0}, a("beforeInit", (() => {
            t.controller.control = t.params.controller.control
        })), a("update", (() => {
            r()
        })), a("resize", (() => {
            r()
        })), a("observerUpdate", (() => {
            r()
        })), a("setTranslate", ((e, s, a) => {
            t.controller.control && t.controller.setTranslate(s, a)
        })), a("setTransition", ((e, s, a) => {
            t.controller.control && t.controller.setTransition(s, a)
        })), Object.assign(t.controller, {
            setTranslate: function (e, s) {
                const a = t.controller.control;
                let r, n;
                const l = t.constructor;

                function o(e) {
                    const s = t.rtlTranslate ? -t.translate : t.translate;
                    "slide" === t.params.controller.by && (!function (e) {
                        t.controller.spline || (t.controller.spline = t.params.loop ? new i(t.slidesGrid, e.slidesGrid) : new i(t.snapGrid, e.snapGrid))
                    }(e), n = -t.controller.spline.interpolate(-s)), n && "container" !== t.params.controller.by || (r = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()), n = (s - t.minTranslate()) * r + e.minTranslate()), t.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, t), e.updateActiveIndex(), e.updateSlidesClasses()
                }

                if (Array.isArray(a)) for (let e = 0; e < a.length; e += 1) a[e] !== s && a[e] instanceof l && o(a[e]); else a instanceof l && s !== a && o(a)
            }, setTransition: function (e, s) {
                const a = t.constructor, i = t.controller.control;
                let r;

                function n(s) {
                    s.setTransition(e, t), 0 !== e && (s.transitionStart(), s.params.autoHeight && p((() => {
                        s.updateAutoHeight()
                    })), s.$wrapperEl.transitionEnd((() => {
                        i && (s.params.loop && "slide" === t.params.controller.by && s.loopFix(), s.transitionEnd())
                    })))
                }

                if (Array.isArray(i)) for (r = 0; r < i.length; r += 1) i[r] !== s && i[r] instanceof a && n(i[r]); else i instanceof a && s !== i && n(i)
            }
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                slideLabelMessage: "{{index}} / {{slidesLength}}",
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                itemRoleDescriptionMessage: null,
                slideRole: "group",
                id: null
            }
        }), t.a11y = {clicked: !1};
        let i = null;

        function r(e) {
            const t = i;
            0 !== t.length && (t.html(""), t.html(e))
        }

        function n(e) {
            e.attr("tabIndex", "0")
        }

        function l(e) {
            e.attr("tabIndex", "-1")
        }

        function o(e, t) {
            e.attr("role", t)
        }

        function c(e, t) {
            e.attr("aria-roledescription", t)
        }

        function p(e, t) {
            e.attr("aria-label", t)
        }

        function u(e) {
            e.attr("aria-disabled", !0)
        }

        function h(e) {
            e.attr("aria-disabled", !1)
        }

        function m(e) {
            if (13 !== e.keyCode && 32 !== e.keyCode) return;
            const s = t.params.a11y, a = d(e.target);
            t.navigation && t.navigation.$nextEl && a.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? r(s.lastSlideMessage) : r(s.nextSlideMessage)), t.navigation && t.navigation.$prevEl && a.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? r(s.firstSlideMessage) : r(s.prevSlideMessage)), t.pagination && a.is(U(t.params.pagination.bulletClass)) && a[0].click()
        }

        function f() {
            return t.pagination && t.pagination.bullets && t.pagination.bullets.length
        }

        function g() {
            return f() && t.params.pagination.clickable
        }

        const v = (e, t, s) => {
            n(e), "BUTTON" !== e[0].tagName && (o(e, "button"), e.on("keydown", m)), p(e, s), function (e, t) {
                e.attr("aria-controls", t)
            }(e, t)
        }, w = () => {
            t.a11y.clicked = !0
        }, b = () => {
            t.a11y.clicked = !1
        }, x = e => {
            if (t.a11y.clicked) return;
            const s = e.target.closest(`.${t.params.slideClass}`);
            if (!s || !t.slides.includes(s)) return;
            const a = t.slides.indexOf(s) === t.activeIndex,
                i = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(s);
            a || i || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0, t.slideTo(t.slides.indexOf(s), 0))
        }, y = () => {
            const e = t.params.a11y;
            e.itemRoleDescriptionMessage && c(d(t.slides), e.itemRoleDescriptionMessage), e.slideRole && o(d(t.slides), e.slideRole);
            const s = t.params.loop ? t.slides.filter((e => !e.classList.contains(t.params.slideDuplicateClass))).length : t.slides.length;
            e.slideLabelMessage && t.slides.each(((a, i) => {
                const r = d(a), n = t.params.loop ? parseInt(r.attr("data-swiper-slide-index"), 10) : i;
                p(r, e.slideLabelMessage.replace(/\{\{index\}\}/, n + 1).replace(/\{\{slidesLength\}\}/, s))
            }))
        }, E = () => {
            const e = t.params.a11y;
            t.$el.append(i);
            const s = t.$el;
            e.containerRoleDescriptionMessage && c(s, e.containerRoleDescriptionMessage), e.containerMessage && p(s, e.containerMessage);
            const a = t.$wrapperEl,
                r = e.id || a.attr("id") || `swiper-wrapper-${n = 16, void 0 === n && (n = 16), "x".repeat(n).replace(/x/g, (() => Math.round(16 * Math.random()).toString(16)))}`;
            var n;
            const l = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
            var o;
            let d, u;
            o = r, a.attr("id", o), function (e, t) {
                e.attr("aria-live", t)
            }(a, l), y(), t.navigation && t.navigation.$nextEl && (d = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (u = t.navigation.$prevEl), d && d.length && v(d, r, e.nextSlideMessage), u && u.length && v(u, r, e.prevSlideMessage), g() && t.pagination.$el.on("keydown", U(t.params.pagination.bulletClass), m), t.$el.on("focus", x, !0), t.$el.on("pointerdown", w, !0), t.$el.on("pointerup", b, !0)
        };
        a("beforeInit", (() => {
            i = d(`<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
        })), a("afterInit", (() => {
            t.params.a11y.enabled && E()
        })), a("slidesLengthChange snapGridLengthChange slidesGridLengthChange", (() => {
            t.params.a11y.enabled && y()
        })), a("fromEdge toEdge afterInit lock unlock", (() => {
            t.params.a11y.enabled && function () {
                if (t.params.loop || t.params.rewind || !t.navigation) return;
                const {$nextEl: e, $prevEl: s} = t.navigation;
                s && s.length > 0 && (t.isBeginning ? (u(s), l(s)) : (h(s), n(s))), e && e.length > 0 && (t.isEnd ? (u(e), l(e)) : (h(e), n(e)))
            }()
        })), a("paginationUpdate", (() => {
            t.params.a11y.enabled && function () {
                const e = t.params.a11y;
                f() && t.pagination.bullets.each((s => {
                    const a = d(s);
                    t.params.pagination.clickable && (n(a), t.params.pagination.renderBullet || (o(a, "button"), p(a, e.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1)))), a.is(`.${t.params.pagination.bulletActiveClass}`) ? a.attr("aria-current", "true") : a.removeAttr("aria-current")
                }))
            }()
        })), a("destroy", (() => {
            t.params.a11y.enabled && function () {
                let e, s;
                i && i.length > 0 && i.remove(), t.navigation && t.navigation.$nextEl && (e = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (s = t.navigation.$prevEl), e && e.off("keydown", m), s && s.off("keydown", m), g() && t.pagination.$el.off("keydown", U(t.params.pagination.bulletClass), m), t.$el.off("focus", x, !0), t.$el.off("pointerdown", w, !0), t.$el.off("pointerup", b, !0)
            }()
        }))
    }, function (e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({history: {enabled: !1, root: "", replaceState: !1, key: "slides", keepQuery: !1}});
        let i = !1, n = {};
        const l = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
            o = e => {
                const t = r();
                let s;
                s = e ? new URL(e) : t.location;
                const a = s.pathname.slice(1).split("/").filter((e => "" !== e)), i = a.length;
                return {key: a[i - 2], value: a[i - 1]}
            }, d = (e, s) => {
                const a = r();
                if (!i || !t.params.history.enabled) return;
                let n;
                n = t.params.url ? new URL(t.params.url) : a.location;
                const o = t.slides.eq(s);
                let d = l(o.attr("data-history"));
                if (t.params.history.root.length > 0) {
                    let s = t.params.history.root;
                    "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)), d = `${s}/${e}/${d}`
                } else n.pathname.includes(e) || (d = `${e}/${d}`);
                t.params.history.keepQuery && (d += n.search);
                const c = a.history.state;
                c && c.value === d || (t.params.history.replaceState ? a.history.replaceState({value: d}, null, d) : a.history.pushState({value: d}, null, d))
            }, c = (e, s, a) => {
                if (s) for (let i = 0, r = t.slides.length; i < r; i += 1) {
                    const r = t.slides.eq(i);
                    if (l(r.attr("data-history")) === s && !r.hasClass(t.params.slideDuplicateClass)) {
                        const s = r.index();
                        t.slideTo(s, e, a)
                    }
                } else t.slideTo(0, e, a)
            }, p = () => {
                n = o(t.params.url), c(t.params.speed, n.value, !1)
            };
        a("init", (() => {
            t.params.history.enabled && (() => {
                const e = r();
                if (t.params.history) {
                    if (!e.history || !e.history.pushState) return t.params.history.enabled = !1, void (t.params.hashNavigation.enabled = !0);
                    i = !0, n = o(t.params.url), (n.key || n.value) && (c(0, n.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", p))
                }
            })()
        })), a("destroy", (() => {
            t.params.history.enabled && (() => {
                const e = r();
                t.params.history.replaceState || e.removeEventListener("popstate", p)
            })()
        })), a("transitionEnd _freeModeNoMomentumRelease", (() => {
            i && d(t.params.history.key, t.activeIndex)
        })), a("slideChange", (() => {
            i && t.params.cssMode && d(t.params.history.key, t.activeIndex)
        }))
    }, function (e) {
        let {swiper: t, extendParams: s, emit: i, on: n} = e, l = !1;
        const o = a(), c = r();
        s({hashNavigation: {enabled: !1, replaceState: !1, watchState: !1}});
        const p = () => {
            i("hashChange");
            const e = o.location.hash.replace("#", "");
            if (e !== t.slides.eq(t.activeIndex).attr("data-hash")) {
                const s = t.$wrapperEl.children(`.${t.params.slideClass}[data-hash="${e}"]`).index();
                if (void 0 === s) return;
                t.slideTo(s)
            }
        }, u = () => {
            if (l && t.params.hashNavigation.enabled) if (t.params.hashNavigation.replaceState && c.history && c.history.replaceState) c.history.replaceState(null, null, `#${t.slides.eq(t.activeIndex).attr("data-hash")}` || ""), i("hashSet"); else {
                const e = t.slides.eq(t.activeIndex), s = e.attr("data-hash") || e.attr("data-history");
                o.location.hash = s || "", i("hashSet")
            }
        };
        n("init", (() => {
            t.params.hashNavigation.enabled && (() => {
                if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled) return;
                l = !0;
                const e = o.location.hash.replace("#", "");
                if (e) {
                    const s = 0;
                    for (let a = 0, i = t.slides.length; a < i; a += 1) {
                        const i = t.slides.eq(a);
                        if ((i.attr("data-hash") || i.attr("data-history")) === e && !i.hasClass(t.params.slideDuplicateClass)) {
                            const e = i.index();
                            t.slideTo(e, s, t.params.runCallbacksOnInit, !0)
                        }
                    }
                }
                t.params.hashNavigation.watchState && d(c).on("hashchange", p)
            })()
        })), n("destroy", (() => {
            t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && d(c).off("hashchange", p)
        })), n("transitionEnd _freeModeNoMomentumRelease", (() => {
            l && u()
        })), n("slideChange", (() => {
            l && t.params.cssMode && u()
        }))
    }, function (e) {
        let t, {swiper: s, extendParams: i, on: r, emit: n} = e;

        function l() {
            if (!s.size) return s.autoplay.running = !1, void (s.autoplay.paused = !1);
            const e = s.slides.eq(s.activeIndex);
            let a = s.params.autoplay.delay;
            e.attr("data-swiper-autoplay") && (a = e.attr("data-swiper-autoplay") || s.params.autoplay.delay), clearTimeout(t), t = p((() => {
                let e;
                s.params.autoplay.reverseDirection ? s.params.loop ? (s.loopFix(), e = s.slidePrev(s.params.speed, !0, !0), n("autoplay")) : s.isBeginning ? s.params.autoplay.stopOnLastSlide ? d() : (e = s.slideTo(s.slides.length - 1, s.params.speed, !0, !0), n("autoplay")) : (e = s.slidePrev(s.params.speed, !0, !0), n("autoplay")) : s.params.loop ? (s.loopFix(), e = s.slideNext(s.params.speed, !0, !0), n("autoplay")) : s.isEnd ? s.params.autoplay.stopOnLastSlide ? d() : (e = s.slideTo(0, s.params.speed, !0, !0), n("autoplay")) : (e = s.slideNext(s.params.speed, !0, !0), n("autoplay")), (s.params.cssMode && s.autoplay.running || !1 === e) && l()
            }), a)
        }

        function o() {
            return void 0 === t && (!s.autoplay.running && (s.autoplay.running = !0, n("autoplayStart"), l(), !0))
        }

        function d() {
            return !!s.autoplay.running && (void 0 !== t && (t && (clearTimeout(t), t = void 0), s.autoplay.running = !1, n("autoplayStop"), !0))
        }

        function c(e) {
            s.autoplay.running && (s.autoplay.paused || (t && clearTimeout(t), s.autoplay.paused = !0, 0 !== e && s.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((e => {
                s.$wrapperEl[0].addEventListener(e, h)
            })) : (s.autoplay.paused = !1, l())))
        }

        function u() {
            const e = a();
            "hidden" === e.visibilityState && s.autoplay.running && c(), "visible" === e.visibilityState && s.autoplay.paused && (l(), s.autoplay.paused = !1)
        }

        function h(e) {
            s && !s.destroyed && s.$wrapperEl && e.target === s.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((e => {
                s.$wrapperEl[0].removeEventListener(e, h)
            })), s.autoplay.paused = !1, s.autoplay.running ? l() : d())
        }

        function m() {
            s.params.autoplay.disableOnInteraction ? d() : (n("autoplayPause"), c()), ["transitionend", "webkitTransitionEnd"].forEach((e => {
                s.$wrapperEl[0].removeEventListener(e, h)
            }))
        }

        function f() {
            s.params.autoplay.disableOnInteraction || (s.autoplay.paused = !1, n("autoplayResume"), l())
        }

        s.autoplay = {running: !1, paused: !1}, i({
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1
            }
        }), r("init", (() => {
            if (s.params.autoplay.enabled) {
                o();
                a().addEventListener("visibilitychange", u), s.params.autoplay.pauseOnMouseEnter && (s.$el.on("mouseenter", m), s.$el.on("mouseleave", f))
            }
        })), r("beforeTransitionStart", ((e, t, a) => {
            s.autoplay.running && (a || !s.params.autoplay.disableOnInteraction ? s.autoplay.pause(t) : d())
        })), r("sliderFirstMove", (() => {
            s.autoplay.running && (s.params.autoplay.disableOnInteraction ? d() : c())
        })), r("touchEnd", (() => {
            s.params.cssMode && s.autoplay.paused && !s.params.autoplay.disableOnInteraction && l()
        })), r("destroy", (() => {
            s.$el.off("mouseenter", m), s.$el.off("mouseleave", f), s.autoplay.running && d();
            a().removeEventListener("visibilitychange", u)
        })), Object.assign(s.autoplay, {pause: c, run: l, start: o, stop: d})
    }, function (e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-thumbs"
            }
        });
        let i = !1, r = !1;

        function n() {
            const e = t.thumbs.swiper;
            if (!e || e.destroyed) return;
            const s = e.clickedIndex, a = e.clickedSlide;
            if (a && d(a).hasClass(t.params.thumbs.slideThumbActiveClass)) return;
            if (null == s) return;
            let i;
            if (i = e.params.loop ? parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10) : s, t.params.loop) {
                let e = t.activeIndex;
                t.slides.eq(e).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, e = t.activeIndex);
                const s = t.slides.eq(e).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index(),
                    a = t.slides.eq(e).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();
                i = void 0 === s ? a : void 0 === a ? s : a - e < e - s ? a : s
            }
            t.slideTo(i)
        }

        function l() {
            const {thumbs: e} = t.params;
            if (i) return !1;
            i = !0;
            const s = t.constructor;
            if (e.swiper instanceof s) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), Object.assign(t.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }); else if (m(e.swiper)) {
                const a = Object.assign({}, e.swiper);
                Object.assign(a, {watchSlidesProgress: !0, slideToClickedSlide: !1}), t.thumbs.swiper = new s(a), r = !0
            }
            return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", n), !0
        }

        function o(e) {
            const s = t.thumbs.swiper;
            if (!s || s.destroyed) return;
            const a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
            let i = 1;
            const r = t.params.thumbs.slideThumbActiveClass;
            if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (i = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (i = 1), i = Math.floor(i), s.slides.removeClass(r), s.params.loop || s.params.virtual && s.params.virtual.enabled) for (let e = 0; e < i; e += 1) s.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex + e}"]`).addClass(r); else for (let e = 0; e < i; e += 1) s.slides.eq(t.realIndex + e).addClass(r);
            const n = t.params.thumbs.autoScrollOffset, l = n && !s.params.loop;
            if (t.realIndex !== s.realIndex || l) {
                let i, r, o = s.activeIndex;
                if (s.params.loop) {
                    s.slides.eq(o).hasClass(s.params.slideDuplicateClass) && (s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft, o = s.activeIndex);
                    const e = s.slides.eq(o).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(),
                        a = s.slides.eq(o).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();
                    i = void 0 === e ? a : void 0 === a ? e : a - o == o - e ? s.params.slidesPerGroup > 1 ? a : o : a - o < o - e ? a : e, r = t.activeIndex > t.previousIndex ? "next" : "prev"
                } else i = t.realIndex, r = i > t.previousIndex ? "next" : "prev";
                l && (i += "next" === r ? n : -1 * n), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(i) < 0 && (s.params.centeredSlides ? i = i > o ? i - Math.floor(a / 2) + 1 : i + Math.floor(a / 2) - 1 : i > o && s.params.slidesPerGroup, s.slideTo(i, e ? 0 : void 0))
            }
        }

        t.thumbs = {swiper: null}, a("beforeInit", (() => {
            const {thumbs: e} = t.params;
            e && e.swiper && (l(), o(!0))
        })), a("slideChange update resize observerUpdate", (() => {
            o()
        })), a("setTransition", ((e, s) => {
            const a = t.thumbs.swiper;
            a && !a.destroyed && a.setTransition(s)
        })), a("beforeDestroy", (() => {
            const e = t.thumbs.swiper;
            e && !e.destroyed && r && e.destroy()
        })), Object.assign(t.thumbs, {init: l, update: o})
    }, function (e) {
        let {swiper: t, extendParams: s, emit: a, once: i} = e;
        s({
            freeMode: {
                enabled: !1,
                momentum: !0,
                momentumRatio: 1,
                momentumBounce: !0,
                momentumBounceRatio: 1,
                momentumVelocityRatio: 1,
                sticky: !1,
                minimumVelocity: .02
            }
        }), Object.assign(t, {
            freeMode: {
                onTouchStart: function () {
                    const e = t.getTranslate();
                    t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({currentPos: t.rtl ? t.translate : -t.translate})
                }, onTouchMove: function () {
                    const {touchEventsData: e, touches: s} = t;
                    0 === e.velocities.length && e.velocities.push({
                        position: s[t.isHorizontal() ? "startX" : "startY"],
                        time: e.touchStartTime
                    }), e.velocities.push({position: s[t.isHorizontal() ? "currentX" : "currentY"], time: u()})
                }, onTouchEnd: function (e) {
                    let {currentPos: s} = e;
                    const {params: r, $wrapperEl: n, rtlTranslate: l, snapGrid: o, touchEventsData: d} = t,
                        c = u() - d.touchStartTime;
                    if (s < -t.minTranslate()) t.slideTo(t.activeIndex); else if (s > -t.maxTranslate()) t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1); else {
                        if (r.freeMode.momentum) {
                            if (d.velocities.length > 1) {
                                const e = d.velocities.pop(), s = d.velocities.pop(), a = e.position - s.position,
                                    i = e.time - s.time;
                                t.velocity = a / i, t.velocity /= 2, Math.abs(t.velocity) < r.freeMode.minimumVelocity && (t.velocity = 0), (i > 150 || u() - e.time > 300) && (t.velocity = 0)
                            } else t.velocity = 0;
                            t.velocity *= r.freeMode.momentumVelocityRatio, d.velocities.length = 0;
                            let e = 1e3 * r.freeMode.momentumRatio;
                            const s = t.velocity * e;
                            let c = t.translate + s;
                            l && (c = -c);
                            let p, h = !1;
                            const m = 20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
                            let f;
                            if (c < t.maxTranslate()) r.freeMode.momentumBounce ? (c + t.maxTranslate() < -m && (c = t.maxTranslate() - m), p = t.maxTranslate(), h = !0, d.allowMomentumBounce = !0) : c = t.maxTranslate(), r.loop && r.centeredSlides && (f = !0); else if (c > t.minTranslate()) r.freeMode.momentumBounce ? (c - t.minTranslate() > m && (c = t.minTranslate() + m), p = t.minTranslate(), h = !0, d.allowMomentumBounce = !0) : c = t.minTranslate(), r.loop && r.centeredSlides && (f = !0); else if (r.freeMode.sticky) {
                                let e;
                                for (let t = 0; t < o.length; t += 1) if (o[t] > -c) {
                                    e = t;
                                    break
                                }
                                c = Math.abs(o[e] - c) < Math.abs(o[e - 1] - c) || "next" === t.swipeDirection ? o[e] : o[e - 1], c = -c
                            }
                            if (f && i("transitionEnd", (() => {
                                t.loopFix()
                            })), 0 !== t.velocity) {
                                if (e = l ? Math.abs((-c - t.translate) / t.velocity) : Math.abs((c - t.translate) / t.velocity), r.freeMode.sticky) {
                                    const s = Math.abs((l ? -c : c) - t.translate),
                                        a = t.slidesSizesGrid[t.activeIndex];
                                    e = s < a ? r.speed : s < 2 * a ? 1.5 * r.speed : 2.5 * r.speed
                                }
                            } else if (r.freeMode.sticky) return void t.slideToClosest();
                            r.freeMode.momentumBounce && h ? (t.updateProgress(p), t.setTransition(e), t.setTranslate(c), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd((() => {
                                t && !t.destroyed && d.allowMomentumBounce && (a("momentumBounce"), t.setTransition(r.speed), setTimeout((() => {
                                    t.setTranslate(p), n.transitionEnd((() => {
                                        t && !t.destroyed && t.transitionEnd()
                                    }))
                                }), 0))
                            }))) : t.velocity ? (a("_freeModeNoMomentumRelease"), t.updateProgress(c), t.setTransition(e), t.setTranslate(c), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd((() => {
                                t && !t.destroyed && t.transitionEnd()
                            })))) : t.updateProgress(c), t.updateActiveIndex(), t.updateSlidesClasses()
                        } else {
                            if (r.freeMode.sticky) return void t.slideToClosest();
                            r.freeMode && a("_freeModeNoMomentumRelease")
                        }
                        (!r.freeMode.momentum || c >= r.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                    }
                }
            }
        })
    }, function (e) {
        let t, s, a, {swiper: i, extendParams: r} = e;
        r({grid: {rows: 1, fill: "column"}}), i.grid = {
            initSlides: e => {
                const {slidesPerView: r} = i.params, {rows: n, fill: l} = i.params.grid;
                s = t / n, a = Math.floor(e / n), t = Math.floor(e / n) === e / n ? e : Math.ceil(e / n) * n, "auto" !== r && "row" === l && (t = Math.max(t, r * n))
            }, updateSlide: (e, r, n, l) => {
                const {slidesPerGroup: o, spaceBetween: d} = i.params, {rows: c, fill: p} = i.params.grid;
                let u, h, m;
                if ("row" === p && o > 1) {
                    const s = Math.floor(e / (o * c)), a = e - c * o * s,
                        i = 0 === s ? o : Math.min(Math.ceil((n - s * c * o) / c), o);
                    m = Math.floor(a / i), h = a - m * i + s * o, u = h + m * t / c, r.css({
                        "-webkit-order": u,
                        order: u
                    })
                } else "column" === p ? (h = Math.floor(e / c), m = e - h * c, (h > a || h === a && m === c - 1) && (m += 1, m >= c && (m = 0, h += 1))) : (m = Math.floor(e / s), h = e - m * s);
                r.css(l("margin-top"), 0 !== m ? d && `${d}px` : "")
            }, updateWrapperSize: (e, s, a) => {
                const {spaceBetween: r, centeredSlides: n, roundLengths: l} = i.params, {rows: o} = i.params.grid;
                if (i.virtualSize = (e + r) * t, i.virtualSize = Math.ceil(i.virtualSize / o) - r, i.$wrapperEl.css({[a("width")]: `${i.virtualSize + r}px`}), n) {
                    s.splice(0, s.length);
                    const e = [];
                    for (let t = 0; t < s.length; t += 1) {
                        let a = s[t];
                        l && (a = Math.floor(a)), s[t] < i.virtualSize + s[0] && e.push(a)
                    }
                    s.push(...e)
                }
            }
        }
    }, function (e) {
        let {swiper: t} = e;
        Object.assign(t, {
            appendSlide: K.bind(t),
            prependSlide: Z.bind(t),
            addSlide: Q.bind(t),
            removeSlide: J.bind(t),
            removeAllSlides: ee.bind(t)
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({fadeEffect: {crossFade: !1, transformEl: null}}), te({
            effect: "fade",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {slides: e} = t, s = t.params.fadeEffect;
                for (let a = 0; a < e.length; a += 1) {
                    const e = t.slides.eq(a);
                    let i = -e[0].swiperSlideOffset;
                    t.params.virtualTranslate || (i -= t.translate);
                    let r = 0;
                    t.isHorizontal() || (r = i, i = 0);
                    const n = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e[0].progress), 0) : 1 + Math.min(Math.max(e[0].progress, -1), 0);
                    se(s, e).css({opacity: n}).transform(`translate3d(${i}px, ${r}px, 0px)`)
                }
            },
            setTransition: e => {
                const {transformEl: s} = t.params.fadeEffect;
                (s ? t.slides.find(s) : t.slides).transition(e), ae({
                    swiper: t,
                    duration: e,
                    transformEl: s,
                    allSlides: !0
                })
            },
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({cubeEffect: {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94}});
        const i = (e, t, s) => {
            let a = s ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                i = s ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
            0 === a.length && (a = d(`<div class="swiper-slide-shadow-${s ? "left" : "top"}"></div>`), e.append(a)), 0 === i.length && (i = d(`<div class="swiper-slide-shadow-${s ? "right" : "bottom"}"></div>`), e.append(i)), a.length && (a[0].style.opacity = Math.max(-t, 0)), i.length && (i[0].style.opacity = Math.max(t, 0))
        };
        te({
            effect: "cube",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {$el: e, $wrapperEl: s, slides: a, width: r, height: n, rtlTranslate: l, size: o, browser: c} = t,
                    p = t.params.cubeEffect, u = t.isHorizontal(), h = t.virtual && t.params.virtual.enabled;
                let m, f = 0;
                p.shadow && (u ? (m = s.find(".swiper-cube-shadow"), 0 === m.length && (m = d('<div class="swiper-cube-shadow"></div>'), s.append(m)), m.css({height: `${r}px`})) : (m = e.find(".swiper-cube-shadow"), 0 === m.length && (m = d('<div class="swiper-cube-shadow"></div>'), e.append(m))));
                for (let e = 0; e < a.length; e += 1) {
                    const t = a.eq(e);
                    let s = e;
                    h && (s = parseInt(t.attr("data-swiper-slide-index"), 10));
                    let r = 90 * s, n = Math.floor(r / 360);
                    l && (r = -r, n = Math.floor(-r / 360));
                    const d = Math.max(Math.min(t[0].progress, 1), -1);
                    let c = 0, m = 0, g = 0;
                    s % 4 == 0 ? (c = 4 * -n * o, g = 0) : (s - 1) % 4 == 0 ? (c = 0, g = 4 * -n * o) : (s - 2) % 4 == 0 ? (c = o + 4 * n * o, g = o) : (s - 3) % 4 == 0 && (c = -o, g = 3 * o + 4 * o * n), l && (c = -c), u || (m = c, c = 0);
                    const v = `rotateX(${u ? 0 : -r}deg) rotateY(${u ? r : 0}deg) translate3d(${c}px, ${m}px, ${g}px)`;
                    d <= 1 && d > -1 && (f = 90 * s + 90 * d, l && (f = 90 * -s - 90 * d)), t.transform(v), p.slideShadows && i(t, d, u)
                }
                if (s.css({
                    "-webkit-transform-origin": `50% 50% -${o / 2}px`,
                    "transform-origin": `50% 50% -${o / 2}px`
                }), p.shadow) if (u) m.transform(`translate3d(0px, ${r / 2 + p.shadowOffset}px, ${-r / 2}px) rotateX(90deg) rotateZ(0deg) scale(${p.shadowScale})`); else {
                    const e = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90),
                        t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2),
                        s = p.shadowScale, a = p.shadowScale / t, i = p.shadowOffset;
                    m.transform(`scale3d(${s}, 1, ${a}) translate3d(0px, ${n / 2 + i}px, ${-n / 2 / a}px) rotateX(-90deg)`)
                }
                const g = c.isSafari || c.isWebView ? -o / 2 : 0;
                s.transform(`translate3d(0px,0,${g}px) rotateX(${t.isHorizontal() ? 0 : f}deg) rotateY(${t.isHorizontal() ? -f : 0}deg)`), s[0].style.setProperty("--swiper-cube-translate-z", `${g}px`)
            },
            setTransition: e => {
                const {$el: s, slides: a} = t;
                a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && s.find(".swiper-cube-shadow").transition(e)
            },
            recreateShadows: () => {
                const e = t.isHorizontal();
                t.slides.each((t => {
                    const s = Math.max(Math.min(t.progress, 1), -1);
                    i(d(t), s, e)
                }))
            },
            getEffectParams: () => t.params.cubeEffect,
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0
            })
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({flipEffect: {slideShadows: !0, limitRotation: !0, transformEl: null}});
        const i = (e, s, a) => {
            let i = t.isHorizontal() ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                r = t.isHorizontal() ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
            0 === i.length && (i = ie(a, e, t.isHorizontal() ? "left" : "top")), 0 === r.length && (r = ie(a, e, t.isHorizontal() ? "right" : "bottom")), i.length && (i[0].style.opacity = Math.max(-s, 0)), r.length && (r[0].style.opacity = Math.max(s, 0))
        };
        te({
            effect: "flip",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {slides: e, rtlTranslate: s} = t, a = t.params.flipEffect;
                for (let r = 0; r < e.length; r += 1) {
                    const n = e.eq(r);
                    let l = n[0].progress;
                    t.params.flipEffect.limitRotation && (l = Math.max(Math.min(n[0].progress, 1), -1));
                    const o = n[0].swiperSlideOffset;
                    let d = -180 * l, c = 0, p = t.params.cssMode ? -o - t.translate : -o, u = 0;
                    t.isHorizontal() ? s && (d = -d) : (u = p, p = 0, c = -d, d = 0), n[0].style.zIndex = -Math.abs(Math.round(l)) + e.length, a.slideShadows && i(n, l, a);
                    const h = `translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;
                    se(a, n).transform(h)
                }
            },
            setTransition: e => {
                const {transformEl: s} = t.params.flipEffect;
                (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), ae({
                    swiper: t,
                    duration: e,
                    transformEl: s
                })
            },
            recreateShadows: () => {
                const e = t.params.flipEffect;
                t.slides.each((s => {
                    const a = d(s);
                    let r = a[0].progress;
                    t.params.flipEffect.limitRotation && (r = Math.max(Math.min(s.progress, 1), -1)), i(a, r, e)
                }))
            },
            getEffectParams: () => t.params.flipEffect,
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: !0,
                transformEl: null
            }
        }), te({
            effect: "coverflow", swiper: t, on: a, setTranslate: () => {
                const {width: e, height: s, slides: a, slidesSizesGrid: i} = t, r = t.params.coverflowEffect,
                    n = t.isHorizontal(), l = t.translate, o = n ? e / 2 - l : s / 2 - l, d = n ? r.rotate : -r.rotate,
                    c = r.depth;
                for (let e = 0, t = a.length; e < t; e += 1) {
                    const t = a.eq(e), s = i[e], l = (o - t[0].swiperSlideOffset - s / 2) / s,
                        p = "function" == typeof r.modifier ? r.modifier(l) : l * r.modifier;
                    let u = n ? d * p : 0, h = n ? 0 : d * p, m = -c * Math.abs(p), f = r.stretch;
                    "string" == typeof f && -1 !== f.indexOf("%") && (f = parseFloat(r.stretch) / 100 * s);
                    let g = n ? 0 : f * p, v = n ? f * p : 0, w = 1 - (1 - r.scale) * Math.abs(p);
                    Math.abs(v) < .001 && (v = 0), Math.abs(g) < .001 && (g = 0), Math.abs(m) < .001 && (m = 0), Math.abs(u) < .001 && (u = 0), Math.abs(h) < .001 && (h = 0), Math.abs(w) < .001 && (w = 0);
                    const b = `translate3d(${v}px,${g}px,${m}px)  rotateX(${h}deg) rotateY(${u}deg) scale(${w})`;
                    if (se(r, t).transform(b), t[0].style.zIndex = 1 - Math.abs(Math.round(p)), r.slideShadows) {
                        let e = n ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                            s = n ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                        0 === e.length && (e = ie(r, t, n ? "left" : "top")), 0 === s.length && (s = ie(r, t, n ? "right" : "bottom")), e.length && (e[0].style.opacity = p > 0 ? p : 0), s.length && (s[0].style.opacity = -p > 0 ? -p : 0)
                    }
                }
            }, setTransition: e => {
                const {transformEl: s} = t.params.coverflowEffect;
                (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }, perspective: () => !0, overwriteParams: () => ({watchSlidesProgress: !0})
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            creativeEffect: {
                transformEl: null,
                limitProgress: 1,
                shadowPerProgress: !1,
                progressMultiplier: 1,
                perspective: !0,
                prev: {translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1},
                next: {translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1}
            }
        });
        const i = e => "string" == typeof e ? e : `${e}px`;
        te({
            effect: "creative",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {slides: e, $wrapperEl: s, slidesSizesGrid: a} = t,
                    r = t.params.creativeEffect, {progressMultiplier: n} = r, l = t.params.centeredSlides;
                if (l) {
                    const e = a[0] / 2 - t.params.slidesOffsetBefore || 0;
                    s.transform(`translateX(calc(50% - ${e}px))`)
                }
                for (let s = 0; s < e.length; s += 1) {
                    const a = e.eq(s), o = a[0].progress,
                        d = Math.min(Math.max(a[0].progress, -r.limitProgress), r.limitProgress);
                    let c = d;
                    l || (c = Math.min(Math.max(a[0].originalProgress, -r.limitProgress), r.limitProgress));
                    const p = a[0].swiperSlideOffset, u = [t.params.cssMode ? -p - t.translate : -p, 0, 0],
                        h = [0, 0, 0];
                    let m = !1;
                    t.isHorizontal() || (u[1] = u[0], u[0] = 0);
                    let f = {translate: [0, 0, 0], rotate: [0, 0, 0], scale: 1, opacity: 1};
                    d < 0 ? (f = r.next, m = !0) : d > 0 && (f = r.prev, m = !0), u.forEach(((e, t) => {
                        u[t] = `calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d * n)}))`
                    })), h.forEach(((e, t) => {
                        h[t] = f.rotate[t] * Math.abs(d * n)
                    })), a[0].style.zIndex = -Math.abs(Math.round(o)) + e.length;
                    const g = u.join(", "), v = `rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,
                        w = c < 0 ? `scale(${1 + (1 - f.scale) * c * n})` : `scale(${1 - (1 - f.scale) * c * n})`,
                        b = c < 0 ? 1 + (1 - f.opacity) * c * n : 1 - (1 - f.opacity) * c * n,
                        x = `translate3d(${g}) ${v} ${w}`;
                    if (m && f.shadow || !m) {
                        let e = a.children(".swiper-slide-shadow");
                        if (0 === e.length && f.shadow && (e = ie(r, a)), e.length) {
                            const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
                            e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1)
                        }
                    }
                    const y = se(r, a);
                    y.transform(x).css({opacity: b}), f.origin && y.css("transform-origin", f.origin)
                }
            },
            setTransition: e => {
                const {transformEl: s} = t.params.creativeEffect;
                (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), ae({
                    swiper: t,
                    duration: e,
                    transformEl: s,
                    allSlides: !0
                })
            },
            perspective: () => t.params.creativeEffect.perspective,
            overwriteParams: () => ({watchSlidesProgress: !0, virtualTranslate: !t.params.cssMode})
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({cardsEffect: {slideShadows: !0, transformEl: null, rotate: !0, perSlideRotate: 2, perSlideOffset: 8}}), te({
            effect: "cards",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {slides: e, activeIndex: s} = t, a = t.params.cardsEffect, {
                    startTranslate: i,
                    isTouched: r
                } = t.touchEventsData, n = t.translate;
                for (let l = 0; l < e.length; l += 1) {
                    const o = e.eq(l), d = o[0].progress, c = Math.min(Math.max(d, -4), 4);
                    let p = o[0].swiperSlideOffset;
                    t.params.centeredSlides && !t.params.cssMode && t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`), t.params.centeredSlides && t.params.cssMode && (p -= e[0].swiperSlideOffset);
                    let u = t.params.cssMode ? -p - t.translate : -p, h = 0;
                    const m = -100 * Math.abs(c);
                    let f = 1, g = -a.perSlideRotate * c, v = a.perSlideOffset - .75 * Math.abs(c);
                    const w = t.virtual && t.params.virtual.enabled ? t.virtual.from + l : l,
                        b = (w === s || w === s - 1) && c > 0 && c < 1 && (r || t.params.cssMode) && n < i,
                        x = (w === s || w === s + 1) && c < 0 && c > -1 && (r || t.params.cssMode) && n > i;
                    if (b || x) {
                        const e = (1 - Math.abs((Math.abs(c) - .5) / .5)) ** .5;
                        g += -28 * c * e, f += -.5 * e, v += 96 * e, h = -25 * e * Math.abs(c) + "%"
                    }
                    if (u = c < 0 ? `calc(${u}px + (${v * Math.abs(c)}%))` : c > 0 ? `calc(${u}px + (-${v * Math.abs(c)}%))` : `${u}px`, !t.isHorizontal()) {
                        const e = h;
                        h = u, u = e
                    }
                    const y = c < 0 ? "" + (1 + (1 - f) * c) : "" + (1 - (1 - f) * c),
                        E = `\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${a.rotate ? g : 0}deg)\n        scale(${y})\n      `;
                    if (a.slideShadows) {
                        let e = o.find(".swiper-slide-shadow");
                        0 === e.length && (e = ie(a, o)), e.length && (e[0].style.opacity = Math.min(Math.max((Math.abs(c) - .5) / .5, 0), 1))
                    }
                    o[0].style.zIndex = -Math.abs(Math.round(d)) + e.length;
                    se(a, o).transform(E)
                }
            },
            setTransition: e => {
                const {transformEl: s} = t.params.cardsEffect;
                (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), ae({
                    swiper: t,
                    duration: e,
                    transformEl: s
                })
            },
            perspective: () => !0,
            overwriteParams: () => ({watchSlidesProgress: !0, virtualTranslate: !t.params.cssMode})
        })
    }];
    return V.use(re), V
}));
//# sourceMappingURL=swiper-bundle.min.js.map
"use strict";
let theme = {
    init: function () {
        theme.tnHeaderSticked(), theme.tnMobileNav(), theme.tnScrollTop(), theme.tnBackgroundImage(), theme.tnChangeAvatar(), theme.tnDatePicker(), theme.tnCountdown(), theme.tnBvRangePrice(), theme.tnDropdownCheckbox(), theme.tnDSelect(), theme.tnSelectGuest(), theme.tnGLightbox(), theme.tnPlyrPlayer(), theme.tnSwiper(), theme.tnStarRate(), theme.tnValidation(), theme.tnPreloader()
    }, tnHeaderSticked: () => {
        const e = document.querySelector("#header");
        e && document.addEventListener("scroll", (() => {
            window.scrollY > 200 ? (e.classList.add("sticked"), window.scrollY >= 300 ? e.classList.add("showed") : e.classList.remove("showed")) : e.classList.remove("sticked")
        }))
    }, tnMobileNav: () => {
        const e = document.querySelector(".mobile-nav-show"), t = document.querySelector(".mobile-nav-hide");
        document.querySelectorAll(".mobile-nav-toggle").forEach((n => {
            n.addEventListener("click", (function (n) {
                n.preventDefault(), document.body.classList.toggle("mobile-nav-active"), e.classList.toggle("d-none"), t.classList.toggle("d-none")
            }))
        }));
        document.querySelectorAll(".navbar .dropdown > a > .dropdown-indicator").forEach((e => {
            e.addEventListener("click", (function (e) {
                if (document.body.classList.contains("mobile-nav-active")) {
                    e.preventDefault(), this.parentNode.classList.toggle("active"), this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
                    const t = this.parentNode.querySelector(".dropdown-indicator");
                    t.classList.toggle("ti-chevron-down"), t.classList.toggle("ti-chevron-down")
                }
            }))
        }))
    }, tnScrollTop: () => {
        const e = document.querySelector(".scroll-top");
        if (e) {
            const t = function () {
                window.scrollY > 130 ? e.classList.add("active") : e.classList.remove("active")
            };
            window.addEventListener("load", t), document.addEventListener("scroll", t);
            const n = function () {
                window.scrollTo({top: 0, behavior: "smooth"})
            };
            e.addEventListener("click", n)
        }
    }, tnBackgroundImage: () => {
        document.querySelectorAll(".bg-image").forEach((e => {
            const t = e.getAttribute("data-image-src");
            e.style.backgroundImage = `url('${t}')`
        }))
    }, tnChangeAvatar: () => {
        document.querySelectorAll("[data-user-avatar]").forEach((e => {
            const t = e.querySelector("[data-input-avatar]"), n = e.querySelector("[data-update-avatar]"),
                a = e.querySelector("[data-show-avatar]");
            t && n && a && t.addEventListener("change", (() => {
                if (t.files && t.files[0]) {
                    const e = t.files[0].name.split(".").pop().toLowerCase();
                    if (["jpg", "gif", "png"].includes(e)) {
                        n.classList.remove("d-none");
                        const e = new FileReader;
                        e.addEventListener("load", (() => {
                            a.src = e.result
                        })), e.readAsDataURL(t.files[0])
                    } else n.classList.add("d-none")
                } else n.classList.add("d-none")
            }))
        }))
    }, tnDatePicker: () => {
        new flatpickr(".select-month", {
            allowInput: !1,
            minDate: "today",
            static: !0,
            position: "right center",
            wrap: !0,
            disableMobile: "true",
            plugins: [new monthSelectPlugin({shorthand: !0, dateFormat: "M Y", altFormat: "M Y"})]
        }), new flatpickr(".select-date", {
            allowInput: !1,
            minDate: "today",
            static: !0,
            position: "right center",
            wrap: !0,
            disableMobile: "true",
            dateFormat: "M d Y"
        }), new flatpickr(".date-of-birth", {
            allowInput: !0,
            minDate: "today",
            static: !0,
            position: "right center",
            wrap: !0,
            disableMobile: "true",
            dateFormat: "M d Y"
        })
    }, tnCountdown: () => {
        if (document.querySelector(".countdown")) {
            new countdown({target: ".countdown", dayWord: "days", hourWord: "hours", minWord: "mins", secWord: "secs"})
        }
    }, tnBvRangePrice: () => {
        document.querySelectorAll("[data-range-price]").forEach((function (e) {
            const t = e.querySelectorAll(".range-input input"), n = e.querySelectorAll(".price-input input"),
                a = e.querySelector(".slider .progress");
            let l = 100;
            if (t && n && a) {
                n.forEach((e => {
                    e.addEventListener("change", (e => {
                        let i = parseInt(n[0].value), o = parseInt(n[1].value);
                        o - i >= l && o <= t[1].max && (e.target === n[0] ? (t[0].value = i, a.style.left = i / t[0].max * 100 + "%") : (t[1].value = o, a.style.right = 100 - o / t[1].max * 100 + "%"))
                    }))
                })), t.forEach((e => {
                    e.addEventListener("input", (e => {
                        let i = parseInt(t[0].value), o = parseInt(t[1].value);
                        o - i < l ? "range-min" === e.target.className ? t[0].value = o - l : t[1].value = i + l : (n[0].value = i, n[1].value = o, a.style.left = i / t[0].max * 100 + "%", a.style.right = 100 - o / t[1].max * 100 + "%")
                    }))
                }));
                const e = parseInt(t[0].value), i = parseInt(t[1].value);
                a.style.left = e / t[0].max * 100 + "%", a.style.right = 100 - i / t[1].max * 100 + "%"
            }
        }))
    }, tnDropdownCheckbox: () => {
        document.querySelectorAll("[data-dropdown-checkbox]").forEach((function (e) {
            const t = e.querySelector('input[data-checkbox-type="all"]'),
                n = e.querySelectorAll('input[data-checkbox-type="one"]'),
                a = e.querySelector("button.dropdown-toggle");

            function l() {
                const l = e.querySelectorAll('input[data-checkbox-type="one"]:checked').length;
                if (l === n.length || l < 1) t.checked = !0, n.forEach((e => {
                    e.checked = !1
                })), a.textContent = t.value; else {
                    t.checked = !1;
                    const e = [];
                    n.forEach((t => {
                        t.checked && e.push(t.value)
                    })), a.textContent = e.join(", ")
                }
            }

            t.checked ? (a.textContent = t.value, n.forEach((e => {
                e.checked = !1
            }))) : l(), t.addEventListener("change", (function () {
                this.checked && (n.forEach((function (e) {
                    e.checked = !1
                })), a.textContent = t.value)
            })), n.forEach((e => {
                e.addEventListener("change", (() => {
                    l()
                }))
            }))
        }))
    }, tnDSelect: () => {
        for (const e of document.querySelectorAll(".custom-select")) dselect(e)
    }, tnSelectGuest: () => {
        document.querySelectorAll("[data-total-guest]").forEach((function (e) {
            const t = e.querySelector('input[data-input-adults=""]'),
                n = e.querySelector('input[data-input-children=""]'), a = e.querySelector('span[data-total-adults=""]'),
                l = e.querySelector('span[data-total-children=""]'),
                i = e.querySelector('button[data-minus-adults=""]'), o = e.querySelector('button[data-plus-adults=""]'),
                r = e.querySelector('button[data-minus-children=""]'),
                s = e.querySelector('button[data-plus-children=""]');
            if (t && n) {
                function d(e) {
                    e.addEventListener("keypress", (function (e) {
                        const t = e.keyCode || e.which, n = String.fromCharCode(t);
                        /^\d*$/.test(n) || e.preventDefault()
                    }))
                }

                "" === t.value.trim() && (t.value = 1), "" === n.value.trim() && (n.value = 0), a.innerText = `${t.value} ${t.value > 1 ? "Adults" : "Adult"}`, l.innerText = `${n.value} ${n.value > 1 ? "Children" : "Child"}`, t.addEventListener("input", (() => {
                    const e = parseInt(t.dataset.adultsMax);
                    t.value > e && (t.value = e), t.value < 1 && (t.value = 1), a.innerText = `${t.value} ${t.value > 1 ? "Adults" : "Adult"}`
                })), n.addEventListener("input", (() => {
                    const e = parseInt(n.dataset.childrenMax);
                    n.value > e && (n.value = e), l.innerText = `${n.value} ${n.value > 1 ? "Children" : "Child"}`
                })), i.addEventListener("click", (() => {
                    const e = parseInt(t.value);
                    e > 1 && (t.value = e - 1, a.innerText = `${t.value} ${t.value > 1 ? "Adults" : "Adult"}`)
                })), o.addEventListener("click", (() => {
                    const e = parseInt(t.value);
                    e < parseInt(t.dataset.adultsMax) && (t.value = e + 1, a.innerText = `${t.value} ${t.value > 1 ? "Adults" : "Adult"}`)
                })), r.addEventListener("click", (() => {
                    const e = parseInt(n.value);
                    e > 0 && (n.value = e - 1, l.innerText = `${n.value} ${n.value > 1 ? "Children" : "Child"}`)
                })), s.addEventListener("click", (() => {
                    const e = parseInt(n.value);
                    e < parseInt(n.dataset.childrenMax) && (n.value = e + 1, l.innerText = `${n.value} ${n.value > 1 ? "Children" : "Child"}`)
                })), d(t), d(n)
            }
        }))
    }, tnGLightbox: () => {
        GLightbox({selector: ".glightbox"}), GLightbox({
            selector: ".media-glightbox",
            touchNavigation: !0,
            loop: !1,
            zoomable: !1,
            autoplayVideos: !0,
            moreLength: 0,
            slideExtraAttributes: {poster: ""},
            plyr: {
                config: {
                    ratio: "16:9",
                    muted: !1,
                    hideControls: !0,
                    youtube: {noCookie: !1, rel: 0, showinfo: 0, iv_load_policy: 3},
                    vimeo: {byline: !1, portrait: !1, title: !1, speed: !0, transparent: !1}
                }
            }
        })
    }, tnPlyrPlayer: () => {
        new Plyr(".html5-player"), new Plyr(".vimeo-player"), new Plyr(".youtube-player")
    }, tnSwiper: () => {
        new Swiper(".hero-swiper", {
            speed: 800,
            loop: !0,
            autoplay: {delay: 4e3, disableOnInteraction: !1},
            navigation: {enabled: !1, nextEl: ".hero-next", prevEl: ".hero-prev"},
            pagination: {el: ".hero-pagination", clickable: !0},
            breakpoints: {991.98: {navigation: {enabled: !0}}}
        }), new Swiper(".blog-swiper", {
            speed: 800,
            loop: !0,
            spaceBetween: 24,
            navigation: {nextEl: ".blog-next", prevEl: ".blog-prev"},
            pagination: {el: ".blog-dot", type: "bullets", clickable: !0},
            breakpoints: {
                1200: {slidesPerView: 4},
                992: {slidesPerView: 3},
                768: {slidesPerView: 2},
                577: {slidesPerView: 1},
                320: {navigation: {enabled: !1}}
            }
        }), new Swiper(".blog-overlay-swiper", {
            speed: 800,
            loop: !0,
            spaceBetween: 2,
            navigation: {nextEl: ".blog-overlay-next", prevEl: ".blog-overlay-prev"},
            breakpoints: {
                1200: {slidesPerView: 3},
                992: {slidesPerView: 2},
                768: {slidesPerView: 2},
                577: {slidesPerView: 1}
            }
        }), new Swiper(".related-posts-swiper", {
            speed: 800,
            loop: !0,
            spaceBetween: 24,
            navigation: {nextEl: ".related-posts-next", prevEl: ".related-posts-prev"},
            breakpoints: {
                1200: {slidesPerView: 3},
                992: {slidesPerView: 2},
                768: {slidesPerView: 2},
                577: {slidesPerView: 1}
            }
        }), new Swiper(".tour-swiper", {
            speed: 800,
            loop: !0,
            spaceBetween: 24,
            navigation: {nextEl: ".tour-next", prevEl: ".tour-prev"},
            pagination: {el: ".tour-dot", type: "bullets", clickable: !0},
            breakpoints: {
                1200: {slidesPerView: 4},
                992: {slidesPerView: 3},
                768: {slidesPerView: 2},
                577: {slidesPerView: 1},
                320: {navigation: {enabled: !1}}
            }
        }), new Swiper(".sight-swiper", {
            speed: 800,
            loop: !0,
            spaceBetween: 24,
            navigation: {nextEl: ".sight-next", prevEl: ".sight-prev"},
            pagination: {el: ".sight-dot", type: "bullets", clickable: !0},
            breakpoints: {
                1200: {slidesPerView: 5},
                992: {slidesPerView: 4},
                768: {slidesPerView: 3},
                577: {slidesPerView: 2},
                360: {spaceBetween: 10, slidesPerView: 2, navigation: {enabled: !1}}
            }
        }), new Swiper(".city-swiper", {
            speed: 800,
            loop: !0,
            spaceBetween: 16,
            navigation: {nextEl: ".city-next", prevEl: ".city-prev"},
            pagination: {el: ".city-dot", type: "bullets", clickable: !0},
            breakpoints: {
                1200: {slidesPerView: 6},
                992: {slidesPerView: 5},
                768: {slidesPerView: 3},
                577: {slidesPerView: 2},
                320: {spaceBetween: 10, slidesPerView: 2, navigation: {enabled: !1}}
            }
        }), new Swiper(".review-swiper", {
            speed: 800,
            loop: !0,
            spaceBetween: 24,
            pagination: {el: ".review-dot", clickable: !0},
            breakpoints: {768: {slidesPerView: 2}, 577: {slidesPerView: 1}}
        }), new Swiper(".team-swiper", {
            speed: 800,
            loop: !0,
            spaceBetween: 16,
            navigation: {nextEl: ".team-next", prevEl: ".team-prev"},
            pagination: {el: ".team-dot", type: "bullets", clickable: !0},
            breakpoints: {
                1200: {slidesPerView: 4},
                992: {slidesPerView: 3},
                768: {slidesPerView: 2},
                577: {slidesPerView: 1},
                320: {navigation: {enabled: !1}}
            }
        })
    }, tnStarRate: () => {
        const e = document.querySelector(".rater");
        if (e) {
            raterJs({
                element: e, rateCallback: e => {
                    this.setRating(e)
                }
            })
        }
    }, tnValidation: () => {
        document.querySelectorAll(".needs-validation").forEach((function (e) {
            e.addEventListener("submit", (function (t) {
                e.checkValidity() || (t.preventDefault(), t.stopPropagation()), e.classList.add("was-validated")
            }), !1)
        }))
    }, tnPreloader: () => {
        const e = document.querySelector("#preloader");
        if (e) {
            function t() {
                e.remove()
            }

            setTimeout((() => {
                window.requestAnimationFrame(t)
            }), 1500)
        }
    }
};
theme.init();