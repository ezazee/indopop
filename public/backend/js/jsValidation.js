/*!
 * jQuery Validation Plugin v1.14.0
 *
 * http://jqueryvalidation.org/
 *
 * Copyright (c) 2015 Jörn Zaefferer
 * Released under the MIT license
 */
function strlen(e) {
    var t = e + "",
        a = 0,
        n = 0;
    if (
        !this.php_js ||
        !this.php_js.ini ||
        !this.php_js.ini["unicode.semantics"] ||
        "on" !== this.php_js.ini["unicode.semantics"].local_value.toLowerCase()
    )
        return e.length;
    var r = function (e, t) {
        var a = e.charCodeAt(t),
            n = "",
            r = "";
        if (55296 <= a && a <= 56319) {
            if (e.length <= t + 1)
                throw "High surrogate without following low surrogate";
            if (56320 > (n = e.charCodeAt(t + 1)) || n > 57343)
                throw "High surrogate without following low surrogate";
            return e.charAt(t) + e.charAt(t + 1);
        }
        if (56320 <= a && a <= 57343) {
            if (0 === t) throw "Low surrogate without preceding high surrogate";
            if (55296 > (r = e.charCodeAt(t - 1)) || r > 56319)
                throw "Low surrogate without preceding high surrogate";
            return !1;
        }
        return e.charAt(t);
    };
    for (a = 0, n = 0; a < t.length; a++) !1 !== r(t, a) && n++;
    return n;
}
function array_diff(e) {
    var t = {},
        a = arguments.length,
        n = "",
        r = 1,
        i = "",
        s = {};
    e: for (n in e)
        for (r = 1; r < a; r++) {
            for (i in (s = arguments[r])) if (s[i] === e[n]) continue e;
            t[n] = e[n];
        }
    return t;
}
function strtotime(e, t) {
    var a,
        n,
        r,
        i,
        s,
        o,
        l,
        u,
        d,
        h,
        c,
        m = !1;
    if (!e) return m;
    if (
        (n = (e = e
            .replace(/^\s+|\s+$/g, "")
            .replace(/\s{2,}/g, " ")
            .replace(/[\t\r\n]/g, "")
            .toLowerCase()).match(
            /^(\d{1,4})([\-\.\/\:])(\d{1,2})([\-\.\/\:])(\d{1,4})(?:\s(\d{1,2}):(\d{2})?:?(\d{2})?)?(?:\s([A-Z]+)?)?$/
        )) &&
        n[2] === n[4]
    )
        if (n[1] > 1901)
            switch (n[2]) {
                case "-":
                case "/":
                    return n[3] > 12 || n[5] > 31
                        ? m
                        : new Date(
                              n[1],
                              parseInt(n[3], 10) - 1,
                              n[5],
                              n[6] || 0,
                              n[7] || 0,
                              n[8] || 0,
                              n[9] || 0
                          ) / 1e3;
                case ".":
                    return m;
            }
        else if (n[5] > 1901)
            switch (n[2]) {
                case "-":
                case ".":
                    return n[3] > 12 || n[1] > 31
                        ? m
                        : new Date(
                              n[5],
                              parseInt(n[3], 10) - 1,
                              n[1],
                              n[6] || 0,
                              n[7] || 0,
                              n[8] || 0,
                              n[9] || 0
                          ) / 1e3;
                case "/":
                    return n[1] > 12 || n[3] > 31
                        ? m
                        : new Date(
                              n[5],
                              parseInt(n[1], 10) - 1,
                              n[3],
                              n[6] || 0,
                              n[7] || 0,
                              n[8] || 0,
                              n[9] || 0
                          ) / 1e3;
            }
        else
            switch (n[2]) {
                case "-":
                    return n[3] > 12 || n[5] > 31 || (n[1] < 70 && n[1] > 38)
                        ? m
                        : ((i = n[1] >= 0 && n[1] <= 38 ? +n[1] + 2e3 : n[1]),
                          new Date(
                              i,
                              parseInt(n[3], 10) - 1,
                              n[5],
                              n[6] || 0,
                              n[7] || 0,
                              n[8] || 0,
                              n[9] || 0
                          ) / 1e3);
                case ".":
                    return n[5] >= 70
                        ? n[3] > 12 || n[1] > 31
                            ? m
                            : new Date(
                                  n[5],
                                  parseInt(n[3], 10) - 1,
                                  n[1],
                                  n[6] || 0,
                                  n[7] || 0,
                                  n[8] || 0,
                                  n[9] || 0
                              ) / 1e3
                        : n[5] < 60 && !n[6]
                        ? n[1] > 23 || n[3] > 59
                            ? m
                            : ((r = new Date()),
                              new Date(
                                  r.getFullYear(),
                                  r.getMonth(),
                                  r.getDate(),
                                  n[1] || 0,
                                  n[3] || 0,
                                  n[5] || 0,
                                  n[9] || 0
                              ) / 1e3)
                        : m;
                case "/":
                    return n[1] > 12 || n[3] > 31 || (n[5] < 70 && n[5] > 38)
                        ? m
                        : ((i = n[5] >= 0 && n[5] <= 38 ? +n[5] + 2e3 : n[5]),
                          new Date(
                              i,
                              parseInt(n[1], 10) - 1,
                              n[3],
                              n[6] || 0,
                              n[7] || 0,
                              n[8] || 0,
                              n[9] || 0
                          ) / 1e3);
                case ":":
                    return n[1] > 23 || n[3] > 59 || n[5] > 59
                        ? m
                        : ((r = new Date()),
                          new Date(
                              r.getFullYear(),
                              r.getMonth(),
                              r.getDate(),
                              n[1] || 0,
                              n[3] || 0,
                              n[5] || 0
                          ) / 1e3);
            }
    if ("now" === e)
        return null === t || isNaN(t)
            ? (new Date().getTime() / 1e3) | 0
            : 0 | t;
    if (!isNaN((a = Date.parse(e)))) return (a / 1e3) | 0;
    if (
        (n = e.match(
            /^([0-9]{4}-[0-9]{2}-[0-9]{2})[ t]([0-9]{2}:[0-9]{2}:[0-9]{2}(\.[0-9]+)?)([\+-][0-9]{2}(:[0-9]{2})?|z)/
        )) &&
        ("z" == n[4]
            ? (n[4] = "Z")
            : n[4].match(/^([\+-][0-9]{2})$/) && (n[4] = n[4] + ":00"),
        !isNaN((a = Date.parse(n[1] + "T" + n[2] + n[4]))))
    )
        return (a / 1e3) | 0;
    function f(e) {
        var t = e.split(" "),
            a = t[0],
            n = t[1].substring(0, 3),
            r = /\d+/.test(a),
            i = ("last" === a ? -1 : 1) * ("ago" === t[2] ? -1 : 1);
        if (
            (r && (i *= parseInt(a, 10)),
            l.hasOwnProperty(n) && !t[1].match(/^mon(day|\.)?$/i))
        )
            return s["set" + l[n]](s["get" + l[n]]() + i);
        if ("wee" === n) return s.setDate(s.getDate() + 7 * i);
        if ("next" === a || "last" === a)
            !(function (e, t, a) {
                var n,
                    r = o[t];
                void 0 !== r &&
                    (0 == (n = r - s.getDay())
                        ? (n = 7 * a)
                        : n > 0 && "last" === e
                        ? (n -= 7)
                        : n < 0 && "next" === e && (n += 7),
                    s.setDate(s.getDate() + n));
            })(a, n, i);
        else if (!r) return !1;
        return !0;
    }
    if (
        ((s = t ? new Date(1e3 * t) : new Date()),
        (o = { sun: 0, mon: 1, tue: 2, wed: 3, thu: 4, fri: 5, sat: 6 }),
        (l = {
            yea: "FullYear",
            mon: "Month",
            day: "Date",
            hou: "Hours",
            min: "Minutes",
            sec: "Seconds",
        }),
        (h =
            "([+-]?\\d+\\s" +
            (d =
                "(years?|months?|weeks?|days?|hours?|minutes?|min|seconds?|sec|sunday|sun\\.?|monday|mon\\.?|tuesday|tue\\.?|wednesday|wed\\.?|thursday|thu\\.?|friday|fri\\.?|saturday|sat\\.?)") +
            "|(last|next)\\s" +
            d +
            ")(\\sago)?"),
        !(n = e.match(new RegExp(h, "gi"))))
    )
        return m;
    for (c = 0, u = n.length; c < u; c++) if (!f(n[c])) return m;
    return s.getTime() / 1e3;
}
function is_numeric(e) {
    return (
        ("number" == typeof e ||
            ("string" == typeof e &&
                -1 ===
                    " \n\r\t\f\v            ​\u2028\u2029　".indexOf(
                        e.slice(-1)
                    ))) &&
        "" !== e &&
        !isNaN(e)
    );
}
/*!
 * @copyright Copyright &copy; Kartik Visweswaran, Krajee.com, 2014 - 2018
 * @version 1.3.5
 *
 * Date formatter utility library that allows formatting date/time variables or Date objects using PHP DateTime format.
 * This library is a standalone javascript library and does not depend on other libraries or plugins like jQuery. The
 * library also adds support for Universal Module Definition (UMD).
 *
 * @see http://php.net/manual/en/function.date.php
 *
 * For more JQuery plugins visit http://plugins.krajee.com
 * For more Yii related demos visit http://demos.krajee.com
 */ !(function (e) {
    "function" == typeof define && define.amd
        ? define(["jquery"], e)
        : e(jQuery);
})(function (e) {
    e.extend(e.fn, {
        validate: function (t) {
            if (this.length) {
                var a = e.data(this[0], "validator");
                return (
                    a ||
                    (this.attr("novalidate", "novalidate"),
                    (a = new e.validator(t, this[0])),
                    e.data(this[0], "validator", a),
                    a.settings.onsubmit &&
                        (this.on("click.validate", ":submit", function (t) {
                            (a.submitButton = t.target),
                                e(this).hasClass("cancel") &&
                                    (a.cancelSubmit = !0),
                                void 0 !== e(this).attr("formnovalidate") &&
                                    (a.cancelSubmit = !0);
                        }),
                        this.on("submit.validate", function (t) {
                            function n() {
                                var n, r;
                                return (
                                    a.submitButton &&
                                        (n = e("<input type='hidden'/>")
                                            .attr("name", a.submitButton.name)
                                            .val(e(a.submitButton).val())
                                            .appendTo(a.currentForm)),
                                    !a.settings.submitHandler ||
                                        ((r = a.settings.submitHandler.call(
                                            a,
                                            a.currentForm,
                                            t
                                        )),
                                        a.submitButton && n.remove(),
                                        void 0 !== r && r)
                                );
                            }
                            return (
                                a.settings.debug && t.preventDefault(),
                                a.cancelSubmit
                                    ? ((a.cancelSubmit = !1), n())
                                    : a.form()
                                    ? a.pendingRequest
                                        ? ((a.formSubmitted = !0), !1)
                                        : n()
                                    : (a.focusInvalid(), !1)
                            );
                        })),
                    a)
                );
            }
            t &&
                t.debug &&
                window.console &&
                console.warn(
                    "Nothing selected, can't validate, returning nothing."
                );
        },
        valid: function () {
            var t, a, n;
            return (
                e(this[0]).is("form")
                    ? (t = this.validate().form())
                    : ((n = []),
                      (t = !0),
                      (a = e(this[0].form).validate()),
                      this.each(function () {
                          (t = a.element(this) && t),
                              (n = n.concat(a.errorList));
                      }),
                      (a.errorList = n)),
                t
            );
        },
        rules: function (t, a) {
            var n,
                r,
                i,
                s,
                o,
                l,
                u = this[0];
            if (t)
                switch (
                    ((r = (n = e.data(u.form, "validator").settings).rules),
                    (i = e.validator.staticRules(u)),
                    t)
                ) {
                    case "add":
                        e.extend(i, e.validator.normalizeRule(a)),
                            delete i.messages,
                            (r[u.name] = i),
                            a.messages &&
                                (n.messages[u.name] = e.extend(
                                    n.messages[u.name],
                                    a.messages
                                ));
                        break;
                    case "remove":
                        return a
                            ? ((l = {}),
                              e.each(a.split(/\s/), function (t, a) {
                                  (l[a] = i[a]),
                                      delete i[a],
                                      "required" === a &&
                                          e(u).removeAttr("aria-required");
                              }),
                              l)
                            : (delete r[u.name], i);
                }
            return (
                (s = e.validator.normalizeRules(
                    e.extend(
                        {},
                        e.validator.classRules(u),
                        e.validator.attributeRules(u),
                        e.validator.dataRules(u),
                        e.validator.staticRules(u)
                    ),
                    u
                )).required &&
                    ((o = s.required),
                    delete s.required,
                    (s = e.extend({ required: o }, s)),
                    e(u).attr("aria-required", "true")),
                s.remote &&
                    ((o = s.remote),
                    delete s.remote,
                    (s = e.extend(s, { remote: o }))),
                s
            );
        },
    }),
        e.extend(e.expr[":"], {
            blank: function (t) {
                return !e.trim("" + e(t).val());
            },
            filled: function (t) {
                return !!e.trim("" + e(t).val());
            },
            unchecked: function (t) {
                return !e(t).prop("checked");
            },
        }),
        (e.validator = function (t, a) {
            (this.settings = e.extend(!0, {}, e.validator.defaults, t)),
                (this.currentForm = a),
                this.init();
        }),
        (e.validator.format = function (t, a) {
            return 1 === arguments.length
                ? function () {
                      var a = e.makeArray(arguments);
                      return a.unshift(t), e.validator.format.apply(this, a);
                  }
                : (arguments.length > 2 &&
                      a.constructor !== Array &&
                      (a = e.makeArray(arguments).slice(1)),
                  a.constructor !== Array && (a = [a]),
                  e.each(a, function (e, a) {
                      t = t.replace(
                          new RegExp("\\{" + e + "\\}", "g"),
                          function () {
                              return a;
                          }
                      );
                  }),
                  t);
        }),
        e.extend(e.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                validClass: "valid",
                errorElement: "label",
                focusCleanup: !1,
                focusInvalid: !0,
                errorContainer: e([]),
                errorLabelContainer: e([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function (e) {
                    (this.lastActive = e),
                        this.settings.focusCleanup &&
                            (this.settings.unhighlight &&
                                this.settings.unhighlight.call(
                                    this,
                                    e,
                                    this.settings.errorClass,
                                    this.settings.validClass
                                ),
                            this.hideThese(this.errorsFor(e)));
                },
                onfocusout: function (e) {
                    this.checkable(e) ||
                        (!(e.name in this.submitted) && this.optional(e)) ||
                        this.element(e);
                },
                onkeyup: function (t, a) {
                    (9 === a.which && "" === this.elementValue(t)) ||
                        -1 !==
                            e.inArray(
                                a.keyCode,
                                [
                                    16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45,
                                    144, 225,
                                ]
                            ) ||
                        ((t.name in this.submitted || t === this.lastElement) &&
                            this.element(t));
                },
                onclick: function (e) {
                    e.name in this.submitted
                        ? this.element(e)
                        : e.parentNode.name in this.submitted &&
                          this.element(e.parentNode);
                },
                highlight: function (t, a, n) {
                    "radio" === t.type
                        ? this.findByName(t.name).addClass(a).removeClass(n)
                        : e(t).addClass(a).removeClass(n);
                },
                unhighlight: function (t, a, n) {
                    "radio" === t.type
                        ? this.findByName(t.name).removeClass(a).addClass(n)
                        : e(t).removeClass(a).addClass(n);
                },
            },
            setDefaults: function (t) {
                e.extend(e.validator.defaults, t);
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date ( ISO ).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                creditcard: "Please enter a valid credit card number.",
                equalTo: "Please enter the same value again.",
                maxlength: e.validator.format(
                    "Please enter no more than {0} characters."
                ),
                minlength: e.validator.format(
                    "Please enter at least {0} characters."
                ),
                rangelength: e.validator.format(
                    "Please enter a value between {0} and {1} characters long."
                ),
                range: e.validator.format(
                    "Please enter a value between {0} and {1}."
                ),
                max: e.validator.format(
                    "Please enter a value less than or equal to {0}."
                ),
                min: e.validator.format(
                    "Please enter a value greater than or equal to {0}."
                ),
            },
            autoCreateRanges: !1,
            prototype: {
                init: function () {
                    (this.labelContainer = e(
                        this.settings.errorLabelContainer
                    )),
                        (this.errorContext =
                            (this.labelContainer.length &&
                                this.labelContainer) ||
                            e(this.currentForm)),
                        (this.containers = e(this.settings.errorContainer).add(
                            this.settings.errorLabelContainer
                        )),
                        (this.submitted = {}),
                        (this.valueCache = {}),
                        (this.pendingRequest = 0),
                        (this.pending = {}),
                        (this.invalid = {}),
                        this.reset();
                    var t,
                        a = (this.groups = {});
                    function n(t) {
                        var a = e.data(this.form, "validator"),
                            n = "on" + t.type.replace(/^validate/, ""),
                            r = a ? a.settings : {};
                        r[n] && !e(this).is(r.ignore) && r[n].call(a, this, t);
                    }
                    e.each(this.settings.groups, function (t, n) {
                        "string" == typeof n && (n = n.split(/\s/)),
                            e.each(n, function (e, n) {
                                a[n] = t;
                            });
                    }),
                        (t = this.settings.rules),
                        e.each(t, function (a, n) {
                            t[a] = e.validator.normalizeRule(n);
                        }),
                        e(this.currentForm)
                            .on(
                                "focusin.validate focusout.validate keyup.validate",
                                ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']",
                                n
                            )
                            .on(
                                "click.validate",
                                "select, option, [type='radio'], [type='checkbox']",
                                n
                            ),
                        this.settings.invalidHandler &&
                            e(this.currentForm).on(
                                "invalid-form.validate",
                                this.settings.invalidHandler
                            ),
                        e(this.currentForm)
                            .find(
                                "[required], [data-rule-required], .required:not(label)"
                            )
                            .attr("aria-required", "true");
                },
                form: function () {
                    return (
                        this.checkForm(),
                        e.extend(this.submitted, this.errorMap),
                        (this.invalid = e.extend({}, this.errorMap)),
                        this.valid() ||
                            e(this.currentForm).triggerHandler("invalid-form", [
                                this,
                            ]),
                        this.showErrors(),
                        this.valid()
                    );
                },
                checkForm: function () {
                    this.prepareForm();
                    for (
                        var e = 0, t = (this.currentElements = this.elements());
                        t[e];
                        e++
                    )
                        this.check(t[e]);
                    return this.valid();
                },
                element: function (t) {
                    var a = this.clean(t),
                        n = this.validationTargetFor(a),
                        r = !0;
                    return (
                        (this.lastElement = n),
                        void 0 === n
                            ? delete this.invalid[a.name]
                            : (this.prepareElement(n),
                              (this.currentElements = e(n)),
                              (r = !1 !== this.check(n))
                                  ? delete this.invalid[n.name]
                                  : (this.invalid[n.name] = !0)),
                        e(t).attr("aria-invalid", !r),
                        this.numberOfInvalids() ||
                            (this.toHide = this.toHide.add(this.containers)),
                        this.showErrors(),
                        r
                    );
                },
                showErrors: function (t) {
                    if (t) {
                        for (var a in (e.extend(this.errorMap, t),
                        (this.errorList = []),
                        t))
                            this.errorList.push({
                                message: t[a],
                                element: this.findByName(a)[0],
                            });
                        this.successList = e.grep(
                            this.successList,
                            function (e) {
                                return !(e.name in t);
                            }
                        );
                    }
                    this.settings.showErrors
                        ? this.settings.showErrors.call(
                              this,
                              this.errorMap,
                              this.errorList
                          )
                        : this.defaultShowErrors();
                },
                resetForm: function () {
                    e.fn.resetForm && e(this.currentForm).resetForm(),
                        (this.submitted = {}),
                        (this.lastElement = null),
                        this.prepareForm(),
                        this.hideErrors();
                    var t,
                        a = this.elements()
                            .removeData("previousValue")
                            .removeAttr("aria-invalid");
                    if (this.settings.unhighlight)
                        for (t = 0; a[t]; t++)
                            this.settings.unhighlight.call(
                                this,
                                a[t],
                                this.settings.errorClass,
                                ""
                            );
                    else a.removeClass(this.settings.errorClass);
                },
                numberOfInvalids: function () {
                    return this.objectLength(this.invalid);
                },
                objectLength: function (e) {
                    var t,
                        a = 0;
                    for (t in e) a++;
                    return a;
                },
                hideErrors: function () {
                    this.hideThese(this.toHide);
                },
                hideThese: function (e) {
                    e.not(this.containers).text(""), this.addWrapper(e).hide();
                },
                valid: function () {
                    return 0 === this.size();
                },
                size: function () {
                    return this.errorList.length;
                },
                focusInvalid: function () {
                    if (this.settings.focusInvalid)
                        try {
                            e(
                                this.findLastActive() ||
                                    (this.errorList.length &&
                                        this.errorList[0].element) ||
                                    []
                            )
                                .filter(":visible")
                                .focus()
                                .trigger("focusin");
                        } catch (e) {}
                },
                findLastActive: function () {
                    var t = this.lastActive;
                    return (
                        t &&
                        1 ===
                            e.grep(this.errorList, function (e) {
                                return e.element.name === t.name;
                            }).length &&
                        t
                    );
                },
                elements: function () {
                    var t = this,
                        a = {};
                    return e(this.currentForm)
                        .find("input, select, textarea")
                        .not(":submit, :reset, :image, :disabled")
                        .not(this.settings.ignore)
                        .filter(function () {
                            return (
                                !this.name &&
                                    t.settings.debug &&
                                    window.console &&
                                    console.error(
                                        "%o has no name assigned",
                                        this
                                    ),
                                !(
                                    this.name in a ||
                                    !t.objectLength(e(this).rules())
                                ) && ((a[this.name] = !0), !0)
                            );
                        });
                },
                clean: function (t) {
                    return e(t)[0];
                },
                errors: function () {
                    var t = this.settings.errorClass.split(" ").join(".");
                    return e(
                        this.settings.errorElement + "." + t,
                        this.errorContext
                    );
                },
                reset: function () {
                    (this.successList = []),
                        (this.errorList = []),
                        (this.errorMap = {}),
                        (this.toShow = e([])),
                        (this.toHide = e([])),
                        (this.currentElements = e([]));
                },
                prepareForm: function () {
                    this.reset(),
                        (this.toHide = this.errors().add(this.containers));
                },
                prepareElement: function (e) {
                    this.reset(), (this.toHide = this.errorsFor(e));
                },
                elementValue: function (t) {
                    var a,
                        n = e(t),
                        r = t.type;
                    return "radio" === r || "checkbox" === r
                        ? this.findByName(t.name).filter(":checked").val()
                        : "number" === r && void 0 !== t.validity
                        ? !t.validity.badInput && n.val()
                        : "string" == typeof (a = n.val())
                        ? a.replace(/\r/g, "")
                        : a;
                },
                check: function (t) {
                    t = this.validationTargetFor(this.clean(t));
                    var a,
                        n,
                        r,
                        i = e(t).rules(),
                        s = e.map(i, function (e, t) {
                            return t;
                        }).length,
                        o = !1,
                        l = this.elementValue(t);
                    for (n in i) {
                        r = { method: n, parameters: i[n] };
                        try {
                            if (
                                "dependency-mismatch" ===
                                    (a = e.validator.methods[n].call(
                                        this,
                                        l,
                                        t,
                                        r.parameters
                                    )) &&
                                1 === s
                            ) {
                                o = !0;
                                continue;
                            }
                            if (((o = !1), "pending" === a))
                                return void (this.toHide = this.toHide.not(
                                    this.errorsFor(t)
                                ));
                            if (!a) return this.formatAndAdd(t, r), !1;
                        } catch (e) {
                            throw (
                                (this.settings.debug &&
                                    window.console &&
                                    console.log(
                                        "Exception occurred when checking element " +
                                            t.id +
                                            ", check the '" +
                                            r.method +
                                            "' method.",
                                        e
                                    ),
                                e instanceof TypeError &&
                                    (e.message +=
                                        ".  Exception occurred when checking element " +
                                        t.id +
                                        ", check the '" +
                                        r.method +
                                        "' method."),
                                e)
                            );
                        }
                    }
                    if (!o)
                        return (
                            this.objectLength(i) && this.successList.push(t), !0
                        );
                },
                customDataMessage: function (t, a) {
                    return (
                        e(t).data(
                            "msg" +
                                a.charAt(0).toUpperCase() +
                                a.substring(1).toLowerCase()
                        ) || e(t).data("msg")
                    );
                },
                customMessage: function (e, t) {
                    var a = this.settings.messages[e];
                    return a && (a.constructor === String ? a : a[t]);
                },
                findDefined: function () {
                    for (var e = 0; e < arguments.length; e++)
                        if (void 0 !== arguments[e]) return arguments[e];
                },
                defaultMessage: function (t, a) {
                    return this.findDefined(
                        this.customMessage(t.name, a),
                        this.customDataMessage(t, a),
                        (!this.settings.ignoreTitle && t.title) || void 0,
                        e.validator.messages[a],
                        "<strong>Warning: No message defined for " +
                            t.name +
                            "</strong>"
                    );
                },
                formatAndAdd: function (t, a) {
                    var n = this.defaultMessage(t, a.method),
                        r = /\$?\{(\d+)\}/g;
                    "function" == typeof n
                        ? (n = n.call(this, a.parameters, t))
                        : r.test(n) &&
                          (n = e.validator.format(
                              n.replace(r, "{$1}"),
                              a.parameters
                          )),
                        this.errorList.push({
                            message: n,
                            element: t,
                            method: a.method,
                        }),
                        (this.errorMap[t.name] = n),
                        (this.submitted[t.name] = n);
                },
                addWrapper: function (e) {
                    return (
                        this.settings.wrapper &&
                            (e = e.add(e.parent(this.settings.wrapper))),
                        e
                    );
                },
                defaultShowErrors: function () {
                    var e, t, a;
                    for (e = 0; this.errorList[e]; e++)
                        (a = this.errorList[e]),
                            this.settings.highlight &&
                                this.settings.highlight.call(
                                    this,
                                    a.element,
                                    this.settings.errorClass,
                                    this.settings.validClass
                                ),
                            this.showLabel(a.element, a.message);
                    if (
                        (this.errorList.length &&
                            (this.toShow = this.toShow.add(this.containers)),
                        this.settings.success)
                    )
                        for (e = 0; this.successList[e]; e++)
                            this.showLabel(this.successList[e]);
                    if (this.settings.unhighlight)
                        for (e = 0, t = this.validElements(); t[e]; e++)
                            this.settings.unhighlight.call(
                                this,
                                t[e],
                                this.settings.errorClass,
                                this.settings.validClass
                            );
                    (this.toHide = this.toHide.not(this.toShow)),
                        this.hideErrors(),
                        this.addWrapper(this.toShow).show();
                },
                validElements: function () {
                    return this.currentElements.not(this.invalidElements());
                },
                invalidElements: function () {
                    return e(this.errorList).map(function () {
                        return this.element;
                    });
                },
                showLabel: function (t, a) {
                    var n,
                        r,
                        i,
                        s = this.errorsFor(t),
                        o = this.idOrName(t),
                        l = e(t).attr("aria-describedby");
                    s.length
                        ? (s
                              .removeClass(this.settings.validClass)
                              .addClass(this.settings.errorClass),
                          s.html(a))
                        : ((n = s =
                              e("<" + this.settings.errorElement + ">")
                                  .attr("id", o + "-error")
                                  .addClass(this.settings.errorClass)
                                  .html(a || "")),
                          this.settings.wrapper &&
                              (n = s
                                  .hide()
                                  .show()
                                  .wrap("<" + this.settings.wrapper + "/>")
                                  .parent()),
                          this.labelContainer.length
                              ? this.labelContainer.append(n)
                              : this.settings.errorPlacement
                              ? this.settings.errorPlacement(n, e(t))
                              : n.insertAfter(t),
                          s.is("label")
                              ? s.attr("for", o)
                              : 0 ===
                                    s.parents("label[for='" + o + "']")
                                        .length &&
                                ((i = s
                                    .attr("id")
                                    .replace(/(:|\.|\[|\]|\$)/g, "\\$1")),
                                l
                                    ? l.match(new RegExp("\\b" + i + "\\b")) ||
                                      (l += " " + i)
                                    : (l = i),
                                e(t).attr("aria-describedby", l),
                                (r = this.groups[t.name]) &&
                                    e.each(this.groups, function (t, a) {
                                        a === r &&
                                            e(
                                                "[name='" + t + "']",
                                                this.currentForm
                                            ).attr(
                                                "aria-describedby",
                                                s.attr("id")
                                            );
                                    }))),
                        !a &&
                            this.settings.success &&
                            (s.text(""),
                            "string" == typeof this.settings.success
                                ? s.addClass(this.settings.success)
                                : this.settings.success(s, t)),
                        (this.toShow = this.toShow.add(s));
                },
                errorsFor: function (t) {
                    var a = this.idOrName(t),
                        n = e(t).attr("aria-describedby"),
                        r = "label[for='" + a + "'], label[for='" + a + "'] *";
                    return (
                        n && (r = r + ", #" + n.replace(/\s+/g, ", #")),
                        this.errors().filter(r)
                    );
                },
                idOrName: function (e) {
                    return (
                        this.groups[e.name] ||
                        (this.checkable(e) ? e.name : e.id || e.name)
                    );
                },
                validationTargetFor: function (t) {
                    return (
                        this.checkable(t) && (t = this.findByName(t.name)),
                        e(t).not(this.settings.ignore)[0]
                    );
                },
                checkable: function (e) {
                    return /radio|checkbox/i.test(e.type);
                },
                findByName: function (t) {
                    return e(this.currentForm).find("[name='" + t + "']");
                },
                getLength: function (t, a) {
                    switch (a.nodeName.toLowerCase()) {
                        case "select":
                            return e("option:selected", a).length;
                        case "input":
                            if (this.checkable(a))
                                return this.findByName(a.name).filter(
                                    ":checked"
                                ).length;
                    }
                    return t.length;
                },
                depend: function (e, t) {
                    return (
                        !this.dependTypes[typeof e] ||
                        this.dependTypes[typeof e](e, t)
                    );
                },
                dependTypes: {
                    boolean: function (e) {
                        return e;
                    },
                    string: function (t, a) {
                        return !!e(t, a.form).length;
                    },
                    function: function (e, t) {
                        return e(t);
                    },
                },
                optional: function (t) {
                    var a = this.elementValue(t);
                    return (
                        !e.validator.methods.required.call(this, a, t) &&
                        "dependency-mismatch"
                    );
                },
                startRequest: function (e) {
                    this.pending[e.name] ||
                        (this.pendingRequest++, (this.pending[e.name] = !0));
                },
                stopRequest: function (t, a) {
                    this.pendingRequest--,
                        this.pendingRequest < 0 && (this.pendingRequest = 0),
                        delete this.pending[t.name],
                        a &&
                        0 === this.pendingRequest &&
                        this.formSubmitted &&
                        this.form() &&
                        0 === this.pendingRequest
                            ? (e(this.currentForm).trigger("submit"),
                              (this.formSubmitted = !1))
                            : !a &&
                              0 === this.pendingRequest &&
                              this.formSubmitted &&
                              (e(this.currentForm).triggerHandler(
                                  "invalid-form",
                                  [this]
                              ),
                              (this.formSubmitted = !1));
                },
                previousValue: function (t) {
                    return (
                        e.data(t, "previousValue") ||
                        e.data(t, "previousValue", {
                            old: null,
                            valid: !0,
                            message: this.defaultMessage(t, "remote"),
                        })
                    );
                },
                destroy: function () {
                    this.resetForm(),
                        e(this.currentForm)
                            .off(".validate")
                            .removeData("validator");
                },
            },
            classRuleSettings: {
                required: { required: !0 },
                email: { email: !0 },
                url: { url: !0 },
                date: { date: !0 },
                dateISO: { dateISO: !0 },
                number: { number: !0 },
                digits: { digits: !0 },
                creditcard: { creditcard: !0 },
            },
            addClassRules: function (t, a) {
                t.constructor === String
                    ? (this.classRuleSettings[t] = a)
                    : e.extend(this.classRuleSettings, t);
            },
            classRules: function (t) {
                var a = {},
                    n = e(t).attr("class");
                return (
                    n &&
                        e.each(n.split(" "), function () {
                            this in e.validator.classRuleSettings &&
                                e.extend(
                                    a,
                                    e.validator.classRuleSettings[this]
                                );
                        }),
                    a
                );
            },
            normalizeAttributeRule: function (e, t, a, n) {
                /min|max/.test(a) &&
                    (null === t || /number|range|text/.test(t)) &&
                    ((n = Number(n)), isNaN(n) && (n = void 0)),
                    n || 0 === n
                        ? (e[a] = n)
                        : t === a && "range" !== t && (e[a] = !0);
            },
            attributeRules: function (t) {
                var a,
                    n,
                    r = {},
                    i = e(t),
                    s = t.getAttribute("type");
                for (a in e.validator.methods)
                    "required" === a
                        ? ("" === (n = t.getAttribute(a)) && (n = !0),
                          (n = !!n))
                        : (n = i.attr(a)),
                        this.normalizeAttributeRule(r, s, a, n);
                return (
                    r.maxlength &&
                        /-1|2147483647|524288/.test(r.maxlength) &&
                        delete r.maxlength,
                    r
                );
            },
            dataRules: function (t) {
                var a,
                    n,
                    r = {},
                    i = e(t),
                    s = t.getAttribute("type");
                for (a in e.validator.methods)
                    (n = i.data(
                        "rule" +
                            a.charAt(0).toUpperCase() +
                            a.substring(1).toLowerCase()
                    )),
                        this.normalizeAttributeRule(r, s, a, n);
                return r;
            },
            staticRules: function (t) {
                var a = {},
                    n = e.data(t.form, "validator");
                return (
                    n.settings.rules &&
                        (a =
                            e.validator.normalizeRule(
                                n.settings.rules[t.name]
                            ) || {}),
                    a
                );
            },
            normalizeRules: function (t, a) {
                return (
                    e.each(t, function (n, r) {
                        if (!1 !== r) {
                            if (r.param || r.depends) {
                                var i = !0;
                                switch (typeof r.depends) {
                                    case "string":
                                        i = !!e(r.depends, a.form).length;
                                        break;
                                    case "function":
                                        i = r.depends.call(a, a);
                                }
                                i
                                    ? (t[n] = void 0 === r.param || r.param)
                                    : delete t[n];
                            }
                        } else delete t[n];
                    }),
                    e.each(t, function (n, r) {
                        t[n] = e.isFunction(r) ? r(a) : r;
                    }),
                    e.each(["minlength", "maxlength"], function () {
                        t[this] && (t[this] = Number(t[this]));
                    }),
                    e.each(["rangelength", "range"], function () {
                        var a;
                        t[this] &&
                            (e.isArray(t[this])
                                ? (t[this] = [
                                      Number(t[this][0]),
                                      Number(t[this][1]),
                                  ])
                                : "string" == typeof t[this] &&
                                  ((a = t[this]
                                      .replace(/[\[\]]/g, "")
                                      .split(/[\s,]+/)),
                                  (t[this] = [Number(a[0]), Number(a[1])])));
                    }),
                    e.validator.autoCreateRanges &&
                        (null != t.min &&
                            null != t.max &&
                            ((t.range = [t.min, t.max]),
                            delete t.min,
                            delete t.max),
                        null != t.minlength &&
                            null != t.maxlength &&
                            ((t.rangelength = [t.minlength, t.maxlength]),
                            delete t.minlength,
                            delete t.maxlength)),
                    t
                );
            },
            normalizeRule: function (t) {
                if ("string" == typeof t) {
                    var a = {};
                    e.each(t.split(/\s/), function () {
                        a[this] = !0;
                    }),
                        (t = a);
                }
                return t;
            },
            addMethod: function (t, a, n) {
                (e.validator.methods[t] = a),
                    (e.validator.messages[t] =
                        void 0 !== n ? n : e.validator.messages[t]),
                    a.length < 3 &&
                        e.validator.addClassRules(
                            t,
                            e.validator.normalizeRule(t)
                        );
            },
            methods: {
                required: function (t, a, n) {
                    if (!this.depend(n, a)) return "dependency-mismatch";
                    if ("select" === a.nodeName.toLowerCase()) {
                        var r = e(a).val();
                        return r && r.length > 0;
                    }
                    return this.checkable(a)
                        ? this.getLength(t, a) > 0
                        : t.length > 0;
                },
                email: function (e, t) {
                    return (
                        this.optional(t) ||
                        /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
                            e
                        )
                    );
                },
                url: function (e, t) {
                    return (
                        this.optional(t) ||
                        /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
                            e
                        )
                    );
                },
                date: function (e, t) {
                    return (
                        this.optional(t) ||
                        !/Invalid|NaN/.test(new Date(e).toString())
                    );
                },
                dateISO: function (e, t) {
                    return (
                        this.optional(t) ||
                        /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(
                            e
                        )
                    );
                },
                number: function (e, t) {
                    return (
                        this.optional(t) ||
                        /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
                    );
                },
                digits: function (e, t) {
                    return this.optional(t) || /^\d+$/.test(e);
                },
                creditcard: function (e, t) {
                    if (this.optional(t)) return "dependency-mismatch";
                    if (/[^0-9 \-]+/.test(e)) return !1;
                    var a,
                        n,
                        r = 0,
                        i = 0,
                        s = !1;
                    if ((e = e.replace(/\D/g, "")).length < 13 || e.length > 19)
                        return !1;
                    for (a = e.length - 1; a >= 0; a--)
                        (n = e.charAt(a)),
                            (i = parseInt(n, 10)),
                            s && (i *= 2) > 9 && (i -= 9),
                            (r += i),
                            (s = !s);
                    return r % 10 == 0;
                },
                minlength: function (t, a, n) {
                    var r = e.isArray(t) ? t.length : this.getLength(t, a);
                    return this.optional(a) || r >= n;
                },
                maxlength: function (t, a, n) {
                    var r = e.isArray(t) ? t.length : this.getLength(t, a);
                    return this.optional(a) || r <= n;
                },
                rangelength: function (t, a, n) {
                    var r = e.isArray(t) ? t.length : this.getLength(t, a);
                    return this.optional(a) || (r >= n[0] && r <= n[1]);
                },
                min: function (e, t, a) {
                    return this.optional(t) || e >= a;
                },
                max: function (e, t, a) {
                    return this.optional(t) || e <= a;
                },
                range: function (e, t, a) {
                    return this.optional(t) || (e >= a[0] && e <= a[1]);
                },
                equalTo: function (t, a, n) {
                    var r = e(n);
                    return (
                        this.settings.onfocusout &&
                            r
                                .off(".validate-equalTo")
                                .on("blur.validate-equalTo", function () {
                                    e(a).valid();
                                }),
                        t === r.val()
                    );
                },
                remote: function (t, a, n) {
                    if (this.optional(a)) return "dependency-mismatch";
                    var r,
                        i,
                        s = this.previousValue(a);
                    return (
                        this.settings.messages[a.name] ||
                            (this.settings.messages[a.name] = {}),
                        (s.originalMessage =
                            this.settings.messages[a.name].remote),
                        (this.settings.messages[a.name].remote = s.message),
                        (n = ("string" == typeof n && { url: n }) || n),
                        s.old === t
                            ? s.valid
                            : ((s.old = t),
                              (r = this),
                              this.startRequest(a),
                              ((i = {})[a.name] = t),
                              e.ajax(
                                  e.extend(
                                      !0,
                                      {
                                          mode: "abort",
                                          port: "validate" + a.name,
                                          dataType: "json",
                                          data: i,
                                          context: r.currentForm,
                                          success: function (n) {
                                              var i,
                                                  o,
                                                  l,
                                                  u = !0 === n || "true" === n;
                                              (r.settings.messages[
                                                  a.name
                                              ].remote = s.originalMessage),
                                                  u
                                                      ? ((l = r.formSubmitted),
                                                        r.prepareElement(a),
                                                        (r.formSubmitted = l),
                                                        r.successList.push(a),
                                                        delete r.invalid[
                                                            a.name
                                                        ],
                                                        r.showErrors())
                                                      : ((i = {}),
                                                        (o =
                                                            n ||
                                                            r.defaultMessage(
                                                                a,
                                                                "remote"
                                                            )),
                                                        (i[a.name] = s.message =
                                                            e.isFunction(o)
                                                                ? o(t)
                                                                : o),
                                                        (r.invalid[a.name] =
                                                            !0),
                                                        r.showErrors(i)),
                                                  (s.valid = u),
                                                  r.stopRequest(a, u);
                                          },
                                      },
                                      n
                                  )
                              ),
                              "pending")
                    );
                },
            },
        });
    var t,
        a = {};
    e.ajaxPrefilter
        ? e.ajaxPrefilter(function (e, t, n) {
              var r = e.port;
              "abort" === e.mode && (a[r] && a[r].abort(), (a[r] = n));
          })
        : ((t = e.ajax),
          (e.ajax = function (n) {
              var r = ("mode" in n ? n : e.ajaxSettings).mode,
                  i = ("port" in n ? n : e.ajaxSettings).port;
              return "abort" === r
                  ? (a[i] && a[i].abort(),
                    (a[i] = t.apply(this, arguments)),
                    a[i])
                  : t.apply(this, arguments);
          }));
}),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define([], t)
            : "object" == typeof module && module.exports
            ? (module.exports = t())
            : (e.DateFormatter = t());
    })("undefined" != typeof self ? self : this, function () {
        var e, t;
        return (
            (t = {
                DAY: 864e5,
                HOUR: 3600,
                defaults: {
                    dateSettings: {
                        days: [
                            "Sunday",
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday",
                            "Saturday",
                        ],
                        daysShort: [
                            "Sun",
                            "Mon",
                            "Tue",
                            "Wed",
                            "Thu",
                            "Fri",
                            "Sat",
                        ],
                        months: [
                            "January",
                            "February",
                            "March",
                            "April",
                            "May",
                            "June",
                            "July",
                            "August",
                            "September",
                            "October",
                            "November",
                            "December",
                        ],
                        monthsShort: [
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec",
                        ],
                        meridiem: ["AM", "PM"],
                        ordinal: function (e) {
                            var t = e % 10,
                                a = { 1: "st", 2: "nd", 3: "rd" };
                            return 1 !== Math.floor((e % 100) / 10) && a[t]
                                ? a[t]
                                : "th";
                        },
                    },
                    separators: /[ \-+\/.T:@]/g,
                    validParts: /[dDjlNSwzWFmMntLoYyaABgGhHisueTIOPZcrU]/g,
                    intParts: /[djwNzmnyYhHgGis]/g,
                    tzParts:
                        /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
                    tzClip: /[^-+\dA-Z]/g,
                },
                compare: function (e, t) {
                    return (
                        "string" == typeof e &&
                        "string" == typeof t &&
                        e.toLowerCase() === t.toLowerCase()
                    );
                },
                lpad: function (e, a, n) {
                    var r = e.toString();
                    return (n = n || "0"), r.length < a ? t.lpad(n + r, a) : r;
                },
                merge: function (e) {
                    var a, n;
                    for (e = e || {}, a = 1; a < arguments.length; a++)
                        if ((n = arguments[a]))
                            for (var r in n)
                                n.hasOwnProperty(r) &&
                                    ("object" == typeof n[r]
                                        ? t.merge(e[r], n[r])
                                        : (e[r] = n[r]));
                    return e;
                },
                getIndex: function (e, t) {
                    for (var a = 0; a < t.length; a++)
                        if (t[a].toLowerCase() === e.toLowerCase()) return a;
                    return -1;
                },
            }),
            ((e = function (e) {
                var a = this,
                    n = t.merge(t.defaults, e);
                (a.dateSettings = n.dateSettings),
                    (a.separators = n.separators),
                    (a.validParts = n.validParts),
                    (a.intParts = n.intParts),
                    (a.tzParts = n.tzParts),
                    (a.tzClip = n.tzClip);
            }).prototype = {
                constructor: e,
                getMonth: function (e) {
                    var a;
                    return (
                        0 ===
                            (a =
                                t.getIndex(e, this.dateSettings.monthsShort) +
                                1) &&
                            (a = t.getIndex(e, this.dateSettings.months) + 1),
                        a
                    );
                },
                parseDate: function (e, a) {
                    var n,
                        r,
                        i,
                        s,
                        o,
                        l,
                        u,
                        d,
                        h,
                        c,
                        m = this,
                        f = !1,
                        g = !1,
                        p = m.dateSettings,
                        v = {
                            date: null,
                            year: null,
                            month: null,
                            day: null,
                            hour: 0,
                            min: 0,
                            sec: 0,
                        };
                    if (!e) return null;
                    if (e instanceof Date) return e;
                    if ("U" === a)
                        return (i = parseInt(e)) ? new Date(1e3 * i) : e;
                    switch (typeof e) {
                        case "number":
                            return new Date(e);
                        case "string":
                            break;
                        default:
                            return null;
                    }
                    if (!(n = a.match(m.validParts)) || 0 === n.length)
                        throw new Error("Invalid date format definition.");
                    for (i = n.length - 1; i >= 0; i--)
                        "S" === n[i] && n.splice(i, 1);
                    for (
                        r = e.replace(m.separators, "\0").split("\0"), i = 0;
                        i < r.length;
                        i++
                    )
                        switch (((s = r[i]), (o = parseInt(s)), n[i])) {
                            case "y":
                            case "Y":
                                if (!o) return null;
                                (h = s.length),
                                    (v.year =
                                        2 === h
                                            ? parseInt(
                                                  (o < 70 ? "20" : "19") + s
                                              )
                                            : o),
                                    (f = !0);
                                break;
                            case "m":
                            case "n":
                            case "M":
                            case "F":
                                if (isNaN(o)) {
                                    if (!((l = m.getMonth(s)) > 0)) return null;
                                    v.month = l;
                                } else {
                                    if (!(o >= 1 && o <= 12)) return null;
                                    v.month = o;
                                }
                                f = !0;
                                break;
                            case "d":
                            case "j":
                                if (!(o >= 1 && o <= 31)) return null;
                                (v.day = o), (f = !0);
                                break;
                            case "g":
                            case "h":
                                if (
                                    ((c =
                                        r[
                                            (u =
                                                n.indexOf("a") > -1
                                                    ? n.indexOf("a")
                                                    : n.indexOf("A") > -1
                                                    ? n.indexOf("A")
                                                    : -1)
                                        ]),
                                    -1 !== u)
                                )
                                    (d = t.compare(c, p.meridiem[0])
                                        ? 0
                                        : t.compare(c, p.meridiem[1])
                                        ? 12
                                        : -1),
                                        o >= 1 && o <= 12 && -1 !== d
                                            ? (v.hour = o % 12 == 0 ? d : o + d)
                                            : o >= 0 && o <= 23 && (v.hour = o);
                                else {
                                    if (!(o >= 0 && o <= 23)) return null;
                                    v.hour = o;
                                }
                                g = !0;
                                break;
                            case "G":
                            case "H":
                                if (!(o >= 0 && o <= 23)) return null;
                                (v.hour = o), (g = !0);
                                break;
                            case "i":
                                if (!(o >= 0 && o <= 59)) return null;
                                (v.min = o), (g = !0);
                                break;
                            case "s":
                                if (!(o >= 0 && o <= 59)) return null;
                                (v.sec = o), (g = !0);
                        }
                    if (!0 === f) {
                        var b = v.year || 0,
                            y = v.month ? v.month - 1 : 0,
                            w = v.day || 1;
                        v.date = new Date(b, y, w, v.hour, v.min, v.sec, 0);
                    } else {
                        if (!0 !== g) return null;
                        v.date = new Date(0, 0, 0, v.hour, v.min, v.sec, 0);
                    }
                    return v.date;
                },
                guessDate: function (e, t) {
                    if ("string" != typeof e) return e;
                    var a,
                        n,
                        r,
                        i,
                        s,
                        o,
                        l = e.replace(this.separators, "\0").split("\0"),
                        u = t.match(this.validParts),
                        d = new Date(),
                        h = 0;
                    if (!/^[djmn]/g.test(u[0])) return e;
                    for (r = 0; r < l.length; r++) {
                        if (
                            ((h = 2),
                            (s = l[r]),
                            (o = parseInt(s.substr(0, 2))),
                            isNaN(o))
                        )
                            return null;
                        switch (r) {
                            case 0:
                                "m" === u[0] || "n" === u[0]
                                    ? d.setMonth(o - 1)
                                    : d.setDate(o);
                                break;
                            case 1:
                                "m" === u[0] || "n" === u[0]
                                    ? d.setDate(o)
                                    : d.setMonth(o - 1);
                                break;
                            case 2:
                                if (
                                    ((n = d.getFullYear()),
                                    (h = (a = s.length) < 4 ? a : 4),
                                    !(n = parseInt(
                                        a < 4
                                            ? n.toString().substr(0, 4 - a) + s
                                            : s.substr(0, 4)
                                    )))
                                )
                                    return null;
                                d.setFullYear(n);
                                break;
                            case 3:
                                d.setHours(o);
                                break;
                            case 4:
                                d.setMinutes(o);
                                break;
                            case 5:
                                d.setSeconds(o);
                        }
                        (i = s.substr(h)).length > 0 && l.splice(r + 1, 0, i);
                    }
                    return d;
                },
                parseFormat: function (e, a) {
                    var n,
                        r = this,
                        i = r.dateSettings,
                        s = /\\?(.?)/gi,
                        o = function (e, t) {
                            return n[e] ? n[e]() : t;
                        };
                    return (
                        (n = {
                            d: function () {
                                return t.lpad(n.j(), 2);
                            },
                            D: function () {
                                return i.daysShort[n.w()];
                            },
                            j: function () {
                                return a.getDate();
                            },
                            l: function () {
                                return i.days[n.w()];
                            },
                            N: function () {
                                return n.w() || 7;
                            },
                            w: function () {
                                return a.getDay();
                            },
                            z: function () {
                                var e = new Date(n.Y(), n.n() - 1, n.j()),
                                    a = new Date(n.Y(), 0, 1);
                                return Math.round((e - a) / t.DAY);
                            },
                            W: function () {
                                var e = new Date(
                                        n.Y(),
                                        n.n() - 1,
                                        n.j() - n.N() + 3
                                    ),
                                    a = new Date(e.getFullYear(), 0, 4);
                                return t.lpad(
                                    1 + Math.round((e - a) / t.DAY / 7),
                                    2
                                );
                            },
                            F: function () {
                                return i.months[a.getMonth()];
                            },
                            m: function () {
                                return t.lpad(n.n(), 2);
                            },
                            M: function () {
                                return i.monthsShort[a.getMonth()];
                            },
                            n: function () {
                                return a.getMonth() + 1;
                            },
                            t: function () {
                                return new Date(n.Y(), n.n(), 0).getDate();
                            },
                            L: function () {
                                var e = n.Y();
                                return (e % 4 == 0 && e % 100 != 0) ||
                                    e % 400 == 0
                                    ? 1
                                    : 0;
                            },
                            o: function () {
                                var e = n.n(),
                                    t = n.W();
                                return (
                                    n.Y() +
                                    (12 === e && t < 9
                                        ? 1
                                        : 1 === e && t > 9
                                        ? -1
                                        : 0)
                                );
                            },
                            Y: function () {
                                return a.getFullYear();
                            },
                            y: function () {
                                return n.Y().toString().slice(-2);
                            },
                            a: function () {
                                return n.A().toLowerCase();
                            },
                            A: function () {
                                var e = n.G() < 12 ? 0 : 1;
                                return i.meridiem[e];
                            },
                            B: function () {
                                var e = a.getUTCHours() * t.HOUR,
                                    n = 60 * a.getUTCMinutes(),
                                    r = a.getUTCSeconds();
                                return t.lpad(
                                    Math.floor((e + n + r + t.HOUR) / 86.4) %
                                        1e3,
                                    3
                                );
                            },
                            g: function () {
                                return n.G() % 12 || 12;
                            },
                            G: function () {
                                return a.getHours();
                            },
                            h: function () {
                                return t.lpad(n.g(), 2);
                            },
                            H: function () {
                                return t.lpad(n.G(), 2);
                            },
                            i: function () {
                                return t.lpad(a.getMinutes(), 2);
                            },
                            s: function () {
                                return t.lpad(a.getSeconds(), 2);
                            },
                            u: function () {
                                return t.lpad(1e3 * a.getMilliseconds(), 6);
                            },
                            e: function () {
                                return (
                                    /\((.*)\)/.exec(String(a))[1] ||
                                    "Coordinated Universal Time"
                                );
                            },
                            I: function () {
                                return new Date(n.Y(), 0) -
                                    Date.UTC(n.Y(), 0) !=
                                    new Date(n.Y(), 6) - Date.UTC(n.Y(), 6)
                                    ? 1
                                    : 0;
                            },
                            O: function () {
                                var e = a.getTimezoneOffset(),
                                    n = Math.abs(e);
                                return (
                                    (e > 0 ? "-" : "+") +
                                    t.lpad(
                                        100 * Math.floor(n / 60) + (n % 60),
                                        4
                                    )
                                );
                            },
                            P: function () {
                                var e = n.O();
                                return e.substr(0, 3) + ":" + e.substr(3, 2);
                            },
                            T: function () {
                                return (
                                    (String(a).match(r.tzParts) || [""])
                                        .pop()
                                        .replace(r.tzClip, "") || "UTC"
                                );
                            },
                            Z: function () {
                                return 60 * -a.getTimezoneOffset();
                            },
                            c: function () {
                                return "Y-m-d\\TH:i:sP".replace(s, o);
                            },
                            r: function () {
                                return "D, d M Y H:i:s O".replace(s, o);
                            },
                            U: function () {
                                return a.getTime() / 1e3 || 0;
                            },
                        }),
                        o(e, e)
                    );
                },
                formatDate: function (e, t) {
                    var a,
                        n,
                        r,
                        i,
                        s,
                        o = this,
                        l = "";
                    if ("string" == typeof e && !(e = o.parseDate(e, t)))
                        return null;
                    if (e instanceof Date) {
                        for (r = t.length, a = 0; a < r; a++)
                            "S" !== (s = t.charAt(a)) &&
                                "\\" !== s &&
                                (a > 0 && "\\" === t.charAt(a - 1)
                                    ? (l += s)
                                    : ((i = o.parseFormat(s, e)),
                                      a !== r - 1 &&
                                          o.intParts.test(s) &&
                                          "S" === t.charAt(a + 1) &&
                                          ((n = parseInt(i) || 0),
                                          (i += o.dateSettings.ordinal(n))),
                                      (l += i)));
                        return l;
                    }
                    return "";
                },
            }),
            e
        );
    });
const laravelValidation = {
    implicitRules: ["Required", "Confirmed"],
    init: function () {
        ($.validator.classRuleSettings = {}),
            ($.validator.attributeRules = function () {
                this.rules = {};
            }),
            ($.validator.dataRules = this.arrayRules),
            ($.validator.prototype.arrayRulesCache = {}),
            this.setupValidations();
    },
    arrayRules: function (e) {
        const t = {},
            a = $.data(e.form, "validator"),
            n = a.arrayRulesCache;
        return (
            -1 === e.name.indexOf("[") ||
                (e.name in n || (n[e.name] = {}),
                $.each(a.settings.rules, function (a, r) {
                    if (a in n[e.name]) $.extend(t, n[e.name][a]);
                    else {
                        n[e.name][a] = {};
                        const i =
                            laravelValidation.helpers.regexFromWildcard(a);
                        if (e.name.match(i)) {
                            const i = $.validator.normalizeRule(r) || {};
                            (n[e.name][a] = i), $.extend(t, i);
                        }
                    }
                })),
            t
        );
    },
    setupValidations: function () {
        $.validator.addMethod(
            "laravelValidation",
            function (e, t, a) {
                const n = this;
                let r = !0;
                const i = this.previousValue(t),
                    s = [];
                return (
                    $.each(a, function (e, t) {
                        t[3] ||
                        -1 !== laravelValidation.implicitRules.indexOf(t[0])
                            ? s.unshift(t)
                            : s.push(t);
                    }),
                    $.each(s, function (a, s) {
                        const o =
                                s[3] ||
                                -1 !==
                                    laravelValidation.implicitRules.indexOf(
                                        s[0]
                                    ),
                            l = s[0],
                            u = s[2];
                        return !o && n.optional(t)
                            ? ((r = "dependency-mismatch"), !1)
                            : ((r =
                                  void 0 !== laravelValidation.methods[l] &&
                                  laravelValidation.methods[l].call(
                                      n,
                                      e,
                                      t,
                                      s[1],
                                      function (a) {
                                          if (
                                              ((n.settings.messages[
                                                  t.name
                                              ].laravelValidationRemote =
                                                  i.originalMessage),
                                              a)
                                          ) {
                                              const e = n.formSubmitted;
                                              n.prepareElement(t),
                                                  (n.formSubmitted = e),
                                                  n.successList.push(t),
                                                  delete n.invalid[t.name],
                                                  n.showErrors();
                                          } else {
                                              const a = {};
                                              (a[t.name] = i.message =
                                                  $.isFunction(u) ? u(e) : u),
                                                  (n.invalid[t.name] = !0),
                                                  n.showErrors(a);
                                          }
                                          n.showErrors(n.errorMap),
                                              (i.valid = a);
                                      }
                                  )),
                              !0 !== r
                                  ? (n.settings.messages[t.name] ||
                                        (n.settings.messages[t.name] = {}),
                                    (n.settings.messages[
                                        t.name
                                    ].laravelValidation = u),
                                    !1)
                                  : void 0);
                    }),
                    r
                );
            },
            ""
        ),
            $.validator.addMethod(
                "laravelValidationRemote",
                function (e, t, a) {
                    const n = this,
                        r = this.previousValue(t);
                    let i,
                        s = !1,
                        o = a[0][1],
                        l = t.name,
                        u = o[1],
                        d = o[2];
                    if (
                        ($.each(a, function (e, t) {
                            s = s || t[3];
                        }),
                        !s && n.optional(t))
                    )
                        return "dependency-mismatch";
                    n.settings.messages[t.name] ||
                        (n.settings.messages[t.name] = {}),
                        (r.originalMessage =
                            n.settings.messages[
                                t.name
                            ].laravelValidationRemote),
                        (n.settings.messages[t.name].laravelValidationRemote =
                            r.message);
                    var h = ("string" == typeof h && { url: h }) || h;
                    if (
                        laravelValidation.helpers.arrayEquals(r.old, e) ||
                        r.old === e
                    )
                        return r.valid;
                    (r.old = e),
                        (i = $(n.currentForm).serializeArray()),
                        i.push({ name: "_js_validation", value: l }),
                        i.push({
                            name: "_js_validation_validate_all",
                            value: d,
                        });
                    let c = $(n.currentForm).attr("method");
                    return (
                        n.startRequest(t),
                        $.ajax(
                            $.extend(
                                !0,
                                {
                                    mode: "abort",
                                    port: "validate" + t.name,
                                    dataType: "json",
                                    data: i,
                                    context: n.currentForm,
                                    url: $(n.currentForm).attr("action"),
                                    type: c,
                                    beforeSend: function (e) {
                                        if (
                                            "get" !==
                                                $(n.currentForm)
                                                    .attr("method")
                                                    .toLowerCase() &&
                                            u
                                        )
                                            return e.setRequestHeader(
                                                "X-XSRF-TOKEN",
                                                u
                                            );
                                    },
                                    complete: function () {
                                        $(n.currentForm)
                                            .find("button[type=submit]")
                                            .prop("disabled", !1)
                                            .removeClass("disabled");
                                    },
                                },
                                h || {}
                            )
                        ).always(function (a, i) {
                            let s, o, l, u;
                            if ("error" === i)
                                (u = !1),
                                    (a =
                                        laravelValidation.helpers.parseErrorResponse(
                                            a
                                        ));
                            else {
                                if ("success" !== i) return;
                                u = !0 === a || "true" === a;
                            }
                            (n.settings.messages[
                                t.name
                            ].laravelValidationRemote = r.originalMessage),
                                u
                                    ? ((l = n.formSubmitted),
                                      n.prepareElement(t),
                                      (n.formSubmitted = l),
                                      n.successList.push(t),
                                      delete n.invalid[t.name],
                                      n.showErrors())
                                    : ((s = {}),
                                      (o = a || n.defaultMessage(t, "remote")),
                                      (s[t.name] = r.message =
                                          $.isFunction(o) ? o(e) : o[0]),
                                      (n.invalid[t.name] = !0),
                                      n.showErrors(s)),
                                n.showErrors(n.errorMap),
                                (r.valid = u),
                                n.stopRequest(t, u);
                        }),
                        "pending"
                    );
                },
                ""
            );
    },
};
$(() => {
    laravelValidation.init();
}),
    $.extend(!0, laravelValidation, {
        helpers: {
            numericRules: ["Integer", "Numeric"],
            fileinfo: function (e, t) {
                var a = e.value;
                return (
                    (t = void 0 !== t ? t : 0),
                    null !== e.files &&
                        void 0 !== e.files[t] && {
                            file: a,
                            extension: a.substr(a.lastIndexOf(".") + 1),
                            size: e.files[t].size / 1024,
                            type: e.files[t].type,
                        }
                );
            },
            selector: function (e) {
                var t = [];
                $.isArray(e) || (e = [e]);
                for (var a = 0; a < e.length; a++)
                    t.push("[name='" + e[a] + "']");
                return t.join();
            },
            hasNumericRules: function (e) {
                return this.hasRules(e, this.numericRules);
            },
            hasRules: function (e, t) {
                var a = !1;
                "string" == typeof t && (t = [t]);
                var n = $.data(e.form, "validator"),
                    r = [],
                    i = n.arrayRulesCache;
                return (
                    e.name in i &&
                        $.each(i[e.name], function (e, t) {
                            r.push(t);
                        }),
                    e.name in n.settings.rules &&
                        r.push(n.settings.rules[e.name]),
                    $.each(r, function (e, n) {
                        if ("laravelValidation" in n)
                            for (
                                var r = n.laravelValidation, i = 0;
                                i < r.length;
                                i++
                            )
                                if (-1 !== $.inArray(r[i][0], t))
                                    return (a = !0), !1;
                    }),
                    a
                );
            },
            strlen: function (e) {
                return strlen(e);
            },
            getSize: function (e, t, a) {
                return this.hasNumericRules(t) && this.is_numeric(a)
                    ? parseFloat(a)
                    : $.isArray(a)
                    ? parseFloat(a.length)
                    : "file" === t.type
                    ? parseFloat(Math.floor(this.fileinfo(t).size))
                    : parseFloat(this.strlen(a));
            },
            getLaravelValidation: function (e, t) {
                var a = void 0;
                return (
                    $.each($.validator.staticRules(t), function (t, n) {
                        "laravelValidation" === t &&
                            $.each(n, function (t, n) {
                                n[0] === e && (a = n);
                            });
                    }),
                    a
                );
            },
            parseTime: function (e, t) {
                var a = !1,
                    n = new DateFormatter();
                if ("number" == typeof e && void 0 === t) return e;
                if ("object" === $.type(t)) {
                    var r = this.getLaravelValidation("DateFormat", t);
                    t = void 0 !== r ? r[1][0] : null;
                }
                return (
                    null == t
                        ? (a = this.strtotime(e))
                        : (a = n.parseDate(e, t)) &&
                          (a = Math.round(a.getTime() / 1e3)),
                    a
                );
            },
            guessDate: function (e, t) {
                return new DateFormatter().guessDate(e, t);
            },
            strtotime: function (e, t) {
                return strtotime(e, t);
            },
            is_numeric: function (e) {
                return is_numeric(e);
            },
            arrayDiff: function (e, t) {
                return array_diff(e, t);
            },
            arrayEquals: function (e, t) {
                return (
                    !(!$.isArray(e) || !$.isArray(t)) &&
                    e.length === t.length &&
                    $.isEmptyObject(this.arrayDiff(e, t))
                );
            },
            dependentElement: function (e, t, a) {
                var n = e.findByName(a);
                if (void 0 !== n[0] && e.settings.onfocusout) {
                    var r = "blur";
                    ("SELECT" !== n[0].tagName &&
                        "OPTION" !== n[0].tagName &&
                        "checkbox" !== n[0].type &&
                        "radio" !== n[0].type) ||
                        (r = "click");
                    var i = ".validate-laravelValidation";
                    n.off(i)
                        .off(r + i + "-" + t.name)
                        .on(r + i + "-" + t.name, function () {
                            $(t).valid();
                        });
                }
                return n[0];
            },
            parseErrorResponse: function (e) {
                var t = ["Whoops, looks like something went wrong."];
                if ("responseText" in e) {
                    var a = e.responseText.match(/<h1\s*>(.*)<\/h1\s*>/i);
                    $.isArray(a) && (t = [a[1]]);
                }
                return t;
            },
            escapeRegExp: function (e) {
                return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            },
            regexFromWildcard: function (e) {
                var t = e.split("[*]");
                1 === t.length && t.push("");
                var a = t.map(function (e, t) {
                    return (
                        t % 2 == 0 ? (e += "[") : (e = "]" + e),
                        laravelValidation.helpers.escapeRegExp(e)
                    );
                });
                return new RegExp("^" + a.join("[^\\]]*") + "$");
            },
        },
    }),
    /*!
     * Laravel Javascript Validation
     *
     * https://github.com/proengsoft/laravel-jsvalidation
     *
     * Timezone Helper functions used by validators
     *
     * Copyright (c) 2017 Proengsoft
     * Released under the MIT license
     */ $.extend(!0, laravelValidation, {
        helpers: {
            isTimezone: function (e) {
                var t = {
                        africa: [
                            "abidjan",
                            "accra",
                            "addis_ababa",
                            "algiers",
                            "asmara",
                            "bamako",
                            "bangui",
                            "banjul",
                            "bissau",
                            "blantyre",
                            "brazzaville",
                            "bujumbura",
                            "cairo",
                            "casablanca",
                            "ceuta",
                            "conakry",
                            "dakar",
                            "dar_es_salaam",
                            "djibouti",
                            "douala",
                            "el_aaiun",
                            "freetown",
                            "gaborone",
                            "harare",
                            "johannesburg",
                            "juba",
                            "kampala",
                            "khartoum",
                            "kigali",
                            "kinshasa",
                            "lagos",
                            "libreville",
                            "lome",
                            "luanda",
                            "lubumbashi",
                            "lusaka",
                            "malabo",
                            "maputo",
                            "maseru",
                            "mbabane",
                            "mogadishu",
                            "monrovia",
                            "nairobi",
                            "ndjamena",
                            "niamey",
                            "nouakchott",
                            "ouagadougou",
                            "porto-novo",
                            "sao_tome",
                            "tripoli",
                            "tunis",
                            "windhoek",
                        ],
                        america: [
                            "adak",
                            "anchorage",
                            "anguilla",
                            "antigua",
                            "araguaina",
                            "argentina/buenos_aires",
                            "argentina/catamarca",
                            "argentina/cordoba",
                            "argentina/jujuy",
                            "argentina/la_rioja",
                            "argentina/mendoza",
                            "argentina/rio_gallegos",
                            "argentina/salta",
                            "argentina/san_juan",
                            "argentina/san_luis",
                            "argentina/tucuman",
                            "argentina/ushuaia",
                            "aruba",
                            "asuncion",
                            "atikokan",
                            "bahia",
                            "bahia_banderas",
                            "barbados",
                            "belem",
                            "belize",
                            "blanc-sablon",
                            "boa_vista",
                            "bogota",
                            "boise",
                            "cambridge_bay",
                            "campo_grande",
                            "cancun",
                            "caracas",
                            "cayenne",
                            "cayman",
                            "chicago",
                            "chihuahua",
                            "costa_rica",
                            "creston",
                            "cuiaba",
                            "curacao",
                            "danmarkshavn",
                            "dawson",
                            "dawson_creek",
                            "denver",
                            "detroit",
                            "dominica",
                            "edmonton",
                            "eirunepe",
                            "el_salvador",
                            "fortaleza",
                            "glace_bay",
                            "godthab",
                            "goose_bay",
                            "grand_turk",
                            "grenada",
                            "guadeloupe",
                            "guatemala",
                            "guayaquil",
                            "guyana",
                            "halifax",
                            "havana",
                            "hermosillo",
                            "indiana/indianapolis",
                            "indiana/knox",
                            "indiana/marengo",
                            "indiana/petersburg",
                            "indiana/tell_city",
                            "indiana/vevay",
                            "indiana/vincennes",
                            "indiana/winamac",
                            "inuvik",
                            "iqaluit",
                            "jamaica",
                            "juneau",
                            "kentucky/louisville",
                            "kentucky/monticello",
                            "kralendijk",
                            "la_paz",
                            "lima",
                            "los_angeles",
                            "lower_princes",
                            "maceio",
                            "managua",
                            "manaus",
                            "marigot",
                            "martinique",
                            "matamoros",
                            "mazatlan",
                            "menominee",
                            "merida",
                            "metlakatla",
                            "mexico_city",
                            "miquelon",
                            "moncton",
                            "monterrey",
                            "montevideo",
                            "montreal",
                            "montserrat",
                            "nassau",
                            "new_york",
                            "nipigon",
                            "nome",
                            "noronha",
                            "north_dakota/beulah",
                            "north_dakota/center",
                            "north_dakota/new_salem",
                            "ojinaga",
                            "panama",
                            "pangnirtung",
                            "paramaribo",
                            "phoenix",
                            "port-au-prince",
                            "port_of_spain",
                            "porto_velho",
                            "puerto_rico",
                            "rainy_river",
                            "rankin_inlet",
                            "recife",
                            "regina",
                            "resolute",
                            "rio_branco",
                            "santa_isabel",
                            "santarem",
                            "santiago",
                            "santo_domingo",
                            "sao_paulo",
                            "scoresbysund",
                            "shiprock",
                            "sitka",
                            "st_barthelemy",
                            "st_johns",
                            "st_kitts",
                            "st_lucia",
                            "st_thomas",
                            "st_vincent",
                            "swift_current",
                            "tegucigalpa",
                            "thule",
                            "thunder_bay",
                            "tijuana",
                            "toronto",
                            "tortola",
                            "vancouver",
                            "whitehorse",
                            "winnipeg",
                            "yakutat",
                            "yellowknife",
                        ],
                        antarctica: [
                            "casey",
                            "davis",
                            "dumontdurville",
                            "macquarie",
                            "mawson",
                            "mcmurdo",
                            "palmer",
                            "rothera",
                            "south_pole",
                            "syowa",
                            "vostok",
                        ],
                        arctic: ["longyearbyen"],
                        asia: [
                            "aden",
                            "almaty",
                            "amman",
                            "anadyr",
                            "aqtau",
                            "aqtobe",
                            "ashgabat",
                            "baghdad",
                            "bahrain",
                            "baku",
                            "bangkok",
                            "beirut",
                            "bishkek",
                            "brunei",
                            "choibalsan",
                            "chongqing",
                            "colombo",
                            "damascus",
                            "dhaka",
                            "dili",
                            "dubai",
                            "dushanbe",
                            "gaza",
                            "harbin",
                            "hebron",
                            "ho_chi_minh",
                            "hong_kong",
                            "hovd",
                            "irkutsk",
                            "jakarta",
                            "jayapura",
                            "jerusalem",
                            "kabul",
                            "kamchatka",
                            "karachi",
                            "kashgar",
                            "kathmandu",
                            "khandyga",
                            "kolkata",
                            "krasnoyarsk",
                            "kuala_lumpur",
                            "kuching",
                            "kuwait",
                            "macau",
                            "magadan",
                            "makassar",
                            "manila",
                            "muscat",
                            "nicosia",
                            "novokuznetsk",
                            "novosibirsk",
                            "omsk",
                            "oral",
                            "phnom_penh",
                            "pontianak",
                            "pyongyang",
                            "qatar",
                            "qyzylorda",
                            "rangoon",
                            "riyadh",
                            "sakhalin",
                            "samarkand",
                            "seoul",
                            "shanghai",
                            "singapore",
                            "taipei",
                            "tashkent",
                            "tbilisi",
                            "tehran",
                            "thimphu",
                            "tokyo",
                            "ulaanbaatar",
                            "urumqi",
                            "ust-nera",
                            "vientiane",
                            "vladivostok",
                            "yakutsk",
                            "yekaterinburg",
                            "yerevan",
                        ],
                        atlantic: [
                            "azores",
                            "bermuda",
                            "canary",
                            "cape_verde",
                            "faroe",
                            "madeira",
                            "reykjavik",
                            "south_georgia",
                            "st_helena",
                            "stanley",
                        ],
                        australia: [
                            "adelaide",
                            "brisbane",
                            "broken_hill",
                            "currie",
                            "darwin",
                            "eucla",
                            "hobart",
                            "lindeman",
                            "lord_howe",
                            "melbourne",
                            "perth",
                            "sydney",
                        ],
                        europe: [
                            "amsterdam",
                            "andorra",
                            "athens",
                            "belgrade",
                            "berlin",
                            "bratislava",
                            "brussels",
                            "bucharest",
                            "budapest",
                            "busingen",
                            "chisinau",
                            "copenhagen",
                            "dublin",
                            "gibraltar",
                            "guernsey",
                            "helsinki",
                            "isle_of_man",
                            "istanbul",
                            "jersey",
                            "kaliningrad",
                            "kiev",
                            "lisbon",
                            "ljubljana",
                            "london",
                            "luxembourg",
                            "madrid",
                            "malta",
                            "mariehamn",
                            "minsk",
                            "monaco",
                            "moscow",
                            "oslo",
                            "paris",
                            "podgorica",
                            "prague",
                            "riga",
                            "rome",
                            "samara",
                            "san_marino",
                            "sarajevo",
                            "simferopol",
                            "skopje",
                            "sofia",
                            "stockholm",
                            "tallinn",
                            "tirane",
                            "uzhgorod",
                            "vaduz",
                            "vatican",
                            "vienna",
                            "vilnius",
                            "volgograd",
                            "warsaw",
                            "zagreb",
                            "zaporozhye",
                            "zurich",
                        ],
                        indian: [
                            "antananarivo",
                            "chagos",
                            "christmas",
                            "cocos",
                            "comoro",
                            "kerguelen",
                            "mahe",
                            "maldives",
                            "mauritius",
                            "mayotte",
                            "reunion",
                        ],
                        pacific: [
                            "apia",
                            "auckland",
                            "chatham",
                            "chuuk",
                            "easter",
                            "efate",
                            "enderbury",
                            "fakaofo",
                            "fiji",
                            "funafuti",
                            "galapagos",
                            "gambier",
                            "guadalcanal",
                            "guam",
                            "honolulu",
                            "johnston",
                            "kiritimati",
                            "kosrae",
                            "kwajalein",
                            "majuro",
                            "marquesas",
                            "midway",
                            "nauru",
                            "niue",
                            "norfolk",
                            "noumea",
                            "pago_pago",
                            "palau",
                            "pitcairn",
                            "pohnpei",
                            "port_moresby",
                            "rarotonga",
                            "saipan",
                            "tahiti",
                            "tarawa",
                            "tongatapu",
                            "wake",
                            "wallis",
                        ],
                        utc: [""],
                    },
                    a = e.split("/", 2),
                    n = a[0].toLowerCase(),
                    r = "";
                return (
                    a[1] && (r = a[1].toLowerCase()),
                    n in t && (0 === t[n].length || -1 !== t[n].indexOf(r))
                );
            },
        },
    }),
    $.extend(!0, laravelValidation, {
        methods: {
            helpers: laravelValidation.helpers,
            jsRemoteTimer: 0,
            Sometimes: function () {
                return !0;
            },
            Bail: function () {
                return !0;
            },
            Nullable: function () {
                return !0;
            },
            Filled: function (e, t) {
                return $.validator.methods.required.call(this, e, t, !0);
            },
            Required: function (e, t) {
                return $.validator.methods.required.call(this, e, t);
            },
            RequiredWith: function (e, t, a) {
                var n = this,
                    r = !1,
                    i = this;
                return (
                    $.each(a, function (e, a) {
                        var s = laravelValidation.helpers.dependentElement(
                            i,
                            t,
                            a
                        );
                        r =
                            r ||
                            (void 0 !== s &&
                                $.validator.methods.required.call(
                                    n,
                                    i.elementValue(s),
                                    s,
                                    !0
                                ));
                    }),
                    !r || $.validator.methods.required.call(this, e, t, !0)
                );
            },
            RequiredWithAll: function (e, t, a) {
                var n = this,
                    r = !0,
                    i = this;
                return (
                    $.each(a, function (e, a) {
                        var s = laravelValidation.helpers.dependentElement(
                            i,
                            t,
                            a
                        );
                        r =
                            r &&
                            void 0 !== s &&
                            $.validator.methods.required.call(
                                n,
                                i.elementValue(s),
                                s,
                                !0
                            );
                    }),
                    !r || $.validator.methods.required.call(this, e, t, !0)
                );
            },
            RequiredWithout: function (e, t, a) {
                var n = this,
                    r = !1,
                    i = this;
                return (
                    $.each(a, function (e, a) {
                        var s = laravelValidation.helpers.dependentElement(
                            i,
                            t,
                            a
                        );
                        r =
                            r ||
                            void 0 === s ||
                            !$.validator.methods.required.call(
                                n,
                                i.elementValue(s),
                                s,
                                !0
                            );
                    }),
                    !r || $.validator.methods.required.call(this, e, t, !0)
                );
            },
            RequiredWithoutAll: function (e, t, a) {
                var n = this,
                    r = !0,
                    i = this;
                return (
                    $.each(a, function (e, a) {
                        var s = laravelValidation.helpers.dependentElement(
                            i,
                            t,
                            a
                        );
                        r =
                            r &&
                            (void 0 === s ||
                                !$.validator.methods.required.call(
                                    n,
                                    i.elementValue(s),
                                    s,
                                    !0
                                ));
                    }),
                    !r || $.validator.methods.required.call(this, e, t, !0)
                );
            },
            RequiredIf: function (e, t, a) {
                var n = laravelValidation.helpers.dependentElement(
                    this,
                    t,
                    a[0]
                );
                if (void 0 !== n) {
                    var r = String(this.elementValue(n));
                    if (void 0 !== r) {
                        var i = a.slice(1);
                        if (-1 !== $.inArray(r, i))
                            return $.validator.methods.required.call(
                                this,
                                e,
                                t,
                                !0
                            );
                    }
                }
                return !0;
            },
            RequiredUnless: function (e, t, a) {
                var n = laravelValidation.helpers.dependentElement(
                    this,
                    t,
                    a[0]
                );
                if (void 0 !== n) {
                    var r = String(this.elementValue(n));
                    if (void 0 !== r) {
                        var i = a.slice(1);
                        if (-1 !== $.inArray(r, i)) return !0;
                    }
                }
                return $.validator.methods.required.call(this, e, t, !0);
            },
            Confirmed: function (e, t, a) {
                return laravelValidation.methods.Same.call(this, e, t, a);
            },
            Same: function (e, t, a) {
                var n = laravelValidation.helpers.dependentElement(
                    this,
                    t,
                    a[0]
                );
                return (
                    void 0 !== n && String(e) === String(this.elementValue(n))
                );
            },
            InArray: function (e, t, a) {
                if (void 0 === a[0]) return !1;
                for (
                    var n = this.elements(),
                        r = !1,
                        i = laravelValidation.helpers.regexFromWildcard(a[0]),
                        s = 0;
                    s < n.length;
                    s++
                ) {
                    var o = n[s].name;
                    if (o.match(i)) {
                        var l = laravelValidation.methods.Same.call(
                            this,
                            e,
                            t,
                            [o]
                        );
                        r = r || l;
                    }
                }
                return r;
            },
            Distinct: function (e, t, a) {
                if (void 0 === a[0]) return !1;
                for (
                    var n = this.elements(),
                        r = !1,
                        i = laravelValidation.helpers.regexFromWildcard(a[0]),
                        s = 0;
                    s < n.length;
                    s++
                ) {
                    var o = n[s].name;
                    if (o !== t.name && o.match(i)) {
                        var l = laravelValidation.methods.Same.call(
                            this,
                            e,
                            t,
                            [o]
                        );
                        r = r || l;
                    }
                }
                return !r;
            },
            Different: function (e, t, a) {
                return !laravelValidation.methods.Same.call(this, e, t, a);
            },
            Accepted: function (e) {
                return new RegExp("^(?:(yes|on|1|true))$", "i").test(e);
            },
            Array: function (e, t) {
                return (
                    (-1 !== t.name.indexOf("[") &&
                        -1 !== t.name.indexOf("]")) ||
                    $.isArray(e)
                );
            },
            Boolean: function (e) {
                return new RegExp("^(?:(true|false|1|0))$", "i").test(e);
            },
            Integer: function (e) {
                return new RegExp("^(?:-?\\d+)$", "i").test(e);
            },
            Numeric: function (e, t) {
                return $.validator.methods.number.call(this, e, t, !0);
            },
            String: function (e) {
                return "string" == typeof e;
            },
            Digits: function (e, t, a) {
                return (
                    $.validator.methods.number.call(this, e, t, !0) &&
                    e.length === parseInt(a, 10)
                );
            },
            DigitsBetween: function (e, t, a) {
                return (
                    $.validator.methods.number.call(this, e, t, !0) &&
                    e.length >= parseFloat(a[0]) &&
                    e.length <= parseFloat(a[1])
                );
            },
            Size: function (e, t, a) {
                return (
                    laravelValidation.helpers.getSize(this, t, e) ===
                    parseFloat(a[0])
                );
            },
            Between: function (e, t, a) {
                return (
                    laravelValidation.helpers.getSize(this, t, e) >=
                        parseFloat(a[0]) &&
                    laravelValidation.helpers.getSize(this, t, e) <=
                        parseFloat(a[1])
                );
            },
            Min: function (e, t, a) {
                return (
                    laravelValidation.helpers.getSize(this, t, e) >=
                    parseFloat(a[0])
                );
            },
            Max: function (e, t, a) {
                return (
                    laravelValidation.helpers.getSize(this, t, e) <=
                    parseFloat(a[0])
                );
            },
            In: function (e, t, a) {
                if (
                    $.isArray(e) &&
                    laravelValidation.helpers.hasRules(t, "Array")
                ) {
                    var n = laravelValidation.helpers.arrayDiff(e, a);
                    return 0 === Object.keys(n).length;
                }
                return -1 !== a.indexOf(e.toString());
            },
            NotIn: function (e, t, a) {
                return -1 === a.indexOf(e.toString());
            },
            Ip: function (e) {
                return (
                    /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(
                        e
                    ) ||
                    /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(
                        e
                    )
                );
            },
            Email: function (e, t) {
                return $.validator.methods.email.call(this, e, t, !0);
            },
            Url: function (e, t) {
                return $.validator.methods.url.call(this, e, t, !0);
            },
            File: function (e, t) {
                return (
                    !(
                        window.File &&
                        window.FileReader &&
                        window.FileList &&
                        window.Blob
                    ) ||
                    ("files" in t && t.files.length > 0)
                );
            },
            Mimes: function (e, t, a) {
                if (
                    !(
                        window.File &&
                        window.FileReader &&
                        window.FileList &&
                        window.Blob
                    )
                )
                    return !0;
                var n = $.map(a, function (e) {
                        return e.toLowerCase();
                    }),
                    r = laravelValidation.helpers.fileinfo(t);
                return !1 !== r && -1 !== n.indexOf(r.extension.toLowerCase());
            },
            Mimetypes: function (e, t, a) {
                if (
                    !(
                        window.File &&
                        window.FileReader &&
                        window.FileList &&
                        window.Blob
                    )
                )
                    return !0;
                var n = $.map(a, function (e) {
                        return e.toLowerCase();
                    }),
                    r = laravelValidation.helpers.fileinfo(t);
                return !1 !== r && -1 !== n.indexOf(r.type.toLowerCase());
            },
            Image: function (e, t) {
                return laravelValidation.methods.Mimes.call(this, e, t, [
                    "jpg",
                    "png",
                    "gif",
                    "bmp",
                    "svg",
                    "jpeg",
                ]);
            },
            Dimensions: function (value, element, params, callback) {
                if (
                    !(
                        window.File &&
                        window.FileReader &&
                        window.FileList &&
                        window.Blob
                    )
                )
                    return !0;
                if (null === element.files || void 0 === element.files[0])
                    return !1;
                var fr = new FileReader();
                return (
                    (fr.onload = function () {
                        var img = new Image();
                        (img.onload = function () {
                            var height = parseFloat(img.naturalHeight),
                                width = parseFloat(img.naturalWidth),
                                ratio = width / height,
                                notValid =
                                    (params.width &&
                                        parseFloat(params.width !== width)) ||
                                    (params.min_width &&
                                        parseFloat(params.min_width) > width) ||
                                    (params.max_width &&
                                        parseFloat(params.max_width) < width) ||
                                    (params.height &&
                                        parseFloat(params.height) !== height) ||
                                    (params.min_height &&
                                        parseFloat(params.min_height) >
                                            height) ||
                                    (params.max_height &&
                                        parseFloat(params.max_height) <
                                            height) ||
                                    (params.ratio &&
                                        ratio !==
                                            parseFloat(eval(params.ratio)));
                            callback(!notValid);
                        }),
                            (img.onerror = function () {
                                callback(!1);
                            }),
                            (img.src = fr.result);
                    }),
                    fr.readAsDataURL(element.files[0]),
                    "pending"
                );
            },
            Alpha: function (e) {
                return (
                    "string" == typeof e &&
                    new RegExp("^(?:^[a-zà-ü]+$)$", "i").test(e)
                );
            },
            AlphaNum: function (e) {
                return (
                    "string" == typeof e &&
                    new RegExp("^(?:^[a-z0-9à-ü]+$)$", "i").test(e)
                );
            },
            AlphaDash: function (e) {
                return (
                    "string" == typeof e &&
                    new RegExp("^(?:^[a-z0-9à-ü_-]+$)$", "i").test(e)
                );
            },
            Regex: function (e, t, a) {
                var n = ["x", "s", "u", "X", "U", "A"],
                    r = new RegExp(
                        "^(?:/)(.*\\/?[^/]*|[^/]*)(?:/)([gmixXsuUAJ]*)?$"
                    ),
                    i = a[0].match(r);
                if (null === i) return !1;
                var s = [];
                if (void 0 !== i[2]) {
                    s = i[2].split("");
                    for (var o = 0; o < s.length < o; o++)
                        if (-1 !== n.indexOf(s[o])) return !0;
                }
                return new RegExp("^(?:" + i[1] + ")$", s.join()).test(e);
            },
            Date: function (e) {
                return !1 !== laravelValidation.helpers.strtotime(e);
            },
            DateFormat: function (e, t, a) {
                return !1 !== laravelValidation.helpers.parseTime(e, a[0]);
            },
            Before: function (e, t, a) {
                var n = parseFloat(a);
                if (isNaN(n)) {
                    var r = laravelValidation.helpers.dependentElement(
                        this,
                        t,
                        a
                    );
                    if (void 0 === r) return !1;
                    n = laravelValidation.helpers.parseTime(
                        this.elementValue(r),
                        r
                    );
                }
                var i = laravelValidation.helpers.parseTime(e, t);
                return !1 !== i && i < n;
            },
            After: function (e, t, a) {
                var n = parseFloat(a);
                if (isNaN(n)) {
                    var r = laravelValidation.helpers.dependentElement(
                        this,
                        t,
                        a
                    );
                    if (void 0 === r) return !1;
                    n = laravelValidation.helpers.parseTime(
                        this.elementValue(r),
                        r
                    );
                }
                var i = laravelValidation.helpers.parseTime(e, t);
                return !1 !== i && i > n;
            },
            Timezone: function (e) {
                return laravelValidation.helpers.isTimezone(e);
            },
            Json: function (e) {
                var t = !0;
                try {
                    JSON.parse(e);
                } catch (e) {
                    t = !1;
                }
                return t;
            },
        },
    });
