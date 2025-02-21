!(function (root, factory) {

    "use strict";
    "undefined" != typeof module && module.exports
        ? (module.exports = factory(require("jquery")))
        : "function" == typeof define && define.amd
        ? define(["jquery"], function ($) {
              return factory($);
          })
        : factory(root.jQuery);
})(this, function ($) {
    "use strict";
    var Typeahead = function (element, options) {
        (this.$element = $(element)),
            (this.options = $.extend({}, Typeahead.defaults, options)),
            (this.matcher = this.options.matcher || this.matcher),
            (this.sorter = this.options.sorter || this.sorter),
            (this.select = this.options.select || this.select),
            (this.autoSelect =
                "boolean" != typeof this.options.autoSelect ||
                this.options.autoSelect),
            (this.highlighter = this.options.highlighter || this.highlighter),
            (this.render = this.options.render || this.render),
            (this.updater = this.options.updater || this.updater),
            (this.displayText = this.options.displayText || this.displayText),
            (this.itemLink = this.options.itemLink || this.itemLink),
            (this.itemTitle = this.options.itemTitle || this.itemTitle),
            (this.followLinkOnSelect =
                this.options.followLinkOnSelect || this.followLinkOnSelect),
            (this.source = this.options.source),
            (this.delay = this.options.delay),
            (this.theme =
                (this.options.theme &&
                    this.options.themes &&
                    this.options.themes[this.options.theme]) ||
                Typeahead.defaults.themes[Typeahead.defaults.theme]),
            (this.$menu = $(this.options.menu || this.theme.menu)),
            (this.$appendTo = this.options.appendTo
                ? $(this.options.appendTo)
                : null),
            (this.fitToElement =
                "boolean" == typeof this.options.fitToElement &&
                this.options.fitToElement),
            (this.shown = !1),
            this.listen(),
            (this.showHintOnFocus =
                ("boolean" == typeof this.options.showHintOnFocus ||
                    "all" === this.options.showHintOnFocus) &&
                this.options.showHintOnFocus),
            (this.afterSelect = this.options.afterSelect),
            (this.afterEmptySelect = this.options.afterEmptySelect),
            (this.addItem = !1),
            (this.value = this.$element.val() || this.$element.text()),
            (this.keyPressed = !1),
            (this.focused = this.$element.is(":focus"));
    };
    Typeahead.prototype = {
        constructor: Typeahead,
        setDefault: function (val) {
            if ((this.$element.data("active", val), this.autoSelect || val)) {
                var newVal = this.updater(val);
                newVal || (newVal = ""),
                    this.$element
                        .val(this.displayText(newVal) || newVal)
                        .text(this.displayText(newVal) || newVal)
                        .change(),
                    this.afterSelect(newVal);
            }
            return this.hide();
        },
        select: function () {
            var val = this.$menu.find(".active").data("value");
            if ((this.$element.data("active", val), this.autoSelect || val)) {
                var newVal = this.updater(val);
                newVal || (newVal = ""),
                    this.$element
                        .val(this.displayText(newVal) || newVal)
                        .text(this.displayText(newVal) || newVal)
                        .change(),
                    this.afterSelect(newVal),
                    this.followLinkOnSelect && this.itemLink(val)
                        ? ((document.location = this.itemLink(val)),
                          this.afterSelect(newVal))
                        : this.followLinkOnSelect && !this.itemLink(val)
                        ? this.afterEmptySelect(newVal)
                        : this.afterSelect(newVal);
            } else this.afterEmptySelect(newVal);
            return this.hide();
        },
        updater: function (item) {
            return item;
        },
        setSource: function (source) {
            this.source = source;
        },
        show: function () {
            var element,
                pos = $.extend({}, this.$element.position(), {
                    height: this.$element[0].offsetHeight,
                }),
                scrollHeight =
                    "function" == typeof this.options.scrollHeight
                        ? this.options.scrollHeight.call()
                        : this.options.scrollHeight;
            if (
                (this.shown
                    ? (element = this.$menu)
                    : this.$appendTo
                    ? ((element = this.$menu.appendTo(this.$appendTo)),
                      (this.hasSameParent = this.$appendTo.is(
                          this.$element.parent()
                      )))
                    : ((element = this.$menu.insertAfter(this.$element)),
                      (this.hasSameParent = !0)),
                !this.hasSameParent)
            ) {
                element.css("position", "fixed");
                var offset = this.$element.offset();
                (pos.top = offset.top), (pos.left = offset.left);
            }
            var newTop = $(element).parent().hasClass("dropup")
                    ? "auto"
                    : pos.top + pos.height + scrollHeight,
                newLeft = $(element).hasClass("dropdown-menu-right")
                    ? "auto"
                    : pos.left;
            return (
                element.css({ top: newTop, left: newLeft }).show(),
                !0 === this.options.fitToElement &&
                    element.css("width", this.$element.outerWidth() + "px"),
                (this.shown = !0),
                this
            );
        },
        hide: function () {
            return this.$menu.hide(), (this.shown = !1), this;
        },
        lookup: function (query) {
            if (
                ((this.query =
                    void 0 !== query && null !== query
                        ? query
                        : this.$element.val()),
                this.query.length < this.options.minLength &&
                    !this.options.showHintOnFocus)
            )
                return this.shown ? this.hide() : this;
            var worker = $.proxy(function () {
                $.isFunction(this.source) && 3 === this.source.length
                    ? this.source(
                          this.query,
                          $.proxy(this.process, this),
                          $.proxy(this.process, this)
                      )
                    : $.isFunction(this.source)
                    ? this.source(this.query, $.proxy(this.process, this))
                    : this.source && this.process(this.source);
            }, this);
            clearTimeout(this.lookupWorker),
                (this.lookupWorker = setTimeout(worker, this.delay));
        },
        process: function (items) {
            var that = this;
            return (
                (items = $.grep(items, function (item) {
                    return that.matcher(item);
                })),
                (items = this.sorter(items)).length || this.options.addItem
                    ? (items.length > 0
                          ? this.$element.data("active", items[0])
                          : this.$element.data("active", null),
                      "all" != this.options.items &&
                          (items = items.slice(0, this.options.items)),
                      this.options.addItem && items.push(this.options.addItem),
                      this.render(items).show())
                    : this.shown
                    ? this.hide()
                    : this
            );
        },
        matcher: function (item) {
            return ~this.displayText(item)
                .toLowerCase()
                .indexOf(this.query.toLowerCase());
        },
        sorter: function (items) {
            for (
                var item,
                    beginswith = [],
                    caseSensitive = [],
                    caseInsensitive = [];
                (item = items.shift());

            ) {
                var it = this.displayText(item);
                it.toLowerCase().indexOf(this.query.toLowerCase())
                    ? ~it.indexOf(this.query)
                        ? caseSensitive.push(item)
                        : caseInsensitive.push(item)
                    : beginswith.push(item);
            }
            return beginswith.concat(caseSensitive, caseInsensitive);
        },
        highlighter: function (item) {
            var text = this.query;
            if ("" === text) return item;
            var i,
                matches = item.match(/(>)([^<]*)(<)/g),
                first = [],
                second = [];
            if (matches && matches.length)
                for (i = 0; i < matches.length; ++i)
                    matches[i].length > 2 && first.push(matches[i]);
            else (first = []).push(item);
            text = text.replace(/[\(\)\/\.\*\+\?\[\]]/g, function (mat) {
                return "\\" + mat;
            });
            var m,
                reg = new RegExp(text, "g");
            for (i = 0; i < first.length; ++i)
                (m = first[i].match(reg)) &&
                    m.length > 0 &&
                    second.push(first[i]);
            for (i = 0; i < second.length; ++i)
                item = item.replace(
                    second[i],
                    second[i].replace(reg, "<strong>$&</strong>")
                );
            return item;
        },
        render: function (items) {
            var that = this,
                self = this,
                activeFound = !1,
                data = [],
                _category = that.options.separator;
            return (
                $.each(items, function (key, value) {
                    key > 0 &&
                        value[_category] !== items[key - 1][_category] &&
                        data.push({ __type: "divider" }),
                        !value[_category] ||
                            (0 !== key &&
                                value[_category] ===
                                    items[key - 1][_category]) ||
                            data.push({
                                __type: "category",
                                name: value[_category],
                            }),
                        data.push(value);
                }),
                (items = $(data).map(function (i, item) {
                    if ("category" == (item.__type || !1))
                        return $(
                            that.options.headerHtml || that.theme.headerHtml
                        ).text(item.name)[0];
                    if ("divider" == (item.__type || !1))
                        return $(
                            that.options.headerDivider ||
                                that.theme.headerDivider
                        )[0];
                    var text = self.displayText(item);
                    return (
                        (i = $(that.options.item || that.theme.item).data(
                            "value",
                            item
                        ))
                            .find(
                                that.options.itemContentSelector ||
                                    that.theme.itemContentSelector
                            )
                            .addBack(
                                that.options.itemContentSelector ||
                                    that.theme.itemContentSelector
                            )
                            .html(that.highlighter(text, item)),
                        this.followLinkOnSelect &&
                            i.find("a").attr("href", self.itemLink(item)),
                        i.find("a").attr("title", self.itemTitle(item)),
                        text == self.$element.val() &&
                            (i.addClass("active"),
                            self.$element.data("active", item),
                            (activeFound = !0)),
                        i[0]
                    );
                })),
                this.autoSelect &&
                    !activeFound &&
                    (items
                        .filter(":not(.dropdown-header)")
                        .first()
                        .addClass("active"),
                    this.$element.data("active", items.first().data("value"))),
                this.$menu.html(items),
                this
            );
        },
        displayText: function (item) {
            return void 0 !== item && void 0 !== item.name ? item.name : item;
        },
        itemLink: function (item) {
            return null;
        },
        itemTitle: function (item) {
            return null;
        },
        next: function (event) {
            var next = this.$menu.find(".active").removeClass("active").next();
            next.length ||
                (next = $(
                    this.$menu.find(
                        $(this.options.item || this.theme.item).prop("tagName")
                    )[0]
                )),
                next.addClass("active");
            var newVal = this.updater(next.data("value"));
            this.$element.val(this.displayText(newVal) || newVal);
        },
        prev: function (event) {
            var prev = this.$menu.find(".active").removeClass("active").prev();
            prev.length ||
                (prev = this.$menu
                    .find(
                        $(this.options.item || this.theme.item).prop("tagName")
                    )
                    .last()),
                prev.addClass("active");
            var newVal = this.updater(prev.data("value"));
            this.$element.val(this.displayText(newVal) || newVal);
        },
        listen: function () {
            this.$element
                .on("focus.bootstrap3Typeahead", $.proxy(this.focus, this))
                .on("blur.bootstrap3Typeahead", $.proxy(this.blur, this))
                .on(
                    "keypress.bootstrap3Typeahead",
                    $.proxy(this.keypress, this)
                )
                .on(
                    "propertychange.bootstrap3Typeahead input.bootstrap3Typeahead",
                    $.proxy(this.input, this)
                )
                .on("keyup.bootstrap3Typeahead", $.proxy(this.keyup, this)),
                this.eventSupported("keydown") &&
                    this.$element.on(
                        "keydown.bootstrap3Typeahead",
                        $.proxy(this.keydown, this)
                    );
            var itemTagName = $(this.options.item || this.theme.item).prop(
                "tagName"
            );
            "ontouchstart" in document.documentElement
                ? this.$menu
                      .on(
                          "touchstart",
                          itemTagName,
                          $.proxy(this.touchstart, this)
                      )
                      .on("touchend", itemTagName, $.proxy(this.click, this))
                : this.$menu
                      .on("click", $.proxy(this.click, this))
                      .on(
                          "mouseenter",
                          itemTagName,
                          $.proxy(this.mouseenter, this)
                      )
                      .on(
                          "mouseleave",
                          itemTagName,
                          $.proxy(this.mouseleave, this)
                      )
                      .on("mousedown", $.proxy(this.mousedown, this));
        },
        destroy: function () {
            this.$element.data("typeahead", null),
                this.$element.data("active", null),
                this.$element
                    .unbind("focus.bootstrap3Typeahead")
                    .unbind("blur.bootstrap3Typeahead")
                    .unbind("keypress.bootstrap3Typeahead")
                    .unbind(
                        "propertychange.bootstrap3Typeahead input.bootstrap3Typeahead"
                    )
                    .unbind("keyup.bootstrap3Typeahead"),
                this.eventSupported("keydown") &&
                    this.$element.unbind("keydown.bootstrap3-typeahead"),
                this.$menu.remove(),
                (this.destroyed = !0);
        },
        eventSupported: function (eventName) {
            var isSupported = eventName in this.$element;
            return (
                isSupported ||
                    (this.$element.setAttribute(eventName, "return;"),
                    (isSupported =
                        "function" == typeof this.$element[eventName])),
                isSupported
            );
        },
        move: function (e) {
            if (this.shown)
                switch (e.keyCode) {
                    case 9:
                    case 13:
                    case 27:
                        e.preventDefault();
                        break;
                    case 38:
                        if (e.shiftKey) return;
                        e.preventDefault(), this.prev();
                        break;
                    case 40:
                        if (e.shiftKey) return;
                        e.preventDefault(), this.next();
                }
        },
        keydown: function (e) {
            17 !== e.keyCode &&
                ((this.keyPressed = !0),
                (this.suppressKeyPressRepeat = ~$.inArray(
                    e.keyCode,
                    [40, 38, 9, 13, 27]
                )),
                this.shown || 40 != e.keyCode ? this.move(e) : this.lookup());
        },
        keypress: function (e) {
            this.suppressKeyPressRepeat || this.move(e);
        },
        input: function (e) {
            var currentValue = this.$element.val() || this.$element.text();
            this.value !== currentValue &&
                ((this.value = currentValue), this.lookup());
        },
        keyup: function (e) {
            if (!this.destroyed)
                switch (e.keyCode) {
                    case 40:
                    case 38:
                    case 16:
                    case 17:
                    case 18:
                        break;
                    case 9:
                        if (
                            !this.shown ||
                            (this.showHintOnFocus && !this.keyPressed)
                        )
                            return;
                        this.select();
                        break;
                    case 13:
                        if (!this.shown) return;
                        this.select();
                        break;
                    case 27:
                        if (!this.shown) return;
                        this.hide();
                }
        },
        focus: function (e) {
            this.focused ||
                ((this.focused = !0),
                (this.keyPressed = !1),
                this.options.showHintOnFocus &&
                    !0 !== this.skipShowHintOnFocus &&
                    ("all" === this.options.showHintOnFocus
                        ? this.lookup("")
                        : this.lookup())),
                this.skipShowHintOnFocus && (this.skipShowHintOnFocus = !1);
        },
        blur: function (e) {
            this.mousedover || this.mouseddown || !this.shown
                ? this.mouseddown &&
                  ((this.skipShowHintOnFocus = !0),
                  this.$element.focus(),
                  (this.mouseddown = !1))
                : (this.select(),
                  this.hide(),
                  (this.focused = !1),
                  (this.keyPressed = !1));
        },
        click: function (e) {
            e.preventDefault(),
                (this.skipShowHintOnFocus = !0),
                this.select(),
                this.$element.focus(),
                this.hide();
        },
        mouseenter: function (e) {
            (this.mousedover = !0),
                this.$menu.find(".active").removeClass("active"),
                $(e.currentTarget).addClass("active");
        },
        mouseleave: function (e) {
            (this.mousedover = !1), !this.focused && this.shown && this.hide();
        },
        mousedown: function (e) {
            (this.mouseddown = !0),
                this.$menu.one(
                    "mouseup",
                    function (e) {
                        this.mouseddown = !1;
                    }.bind(this)
                );
        },
        touchstart: function (e) {
            e.preventDefault(),
                this.$menu.find(".active").removeClass("active"),
                $(e.currentTarget).addClass("active");
        },
        touchend: function (e) {
            e.preventDefault(), this.select(), this.$element.focus();
        },
    };
    var old = $.fn.typeahead;
    ($.fn.typeahead = function (option) {
        var arg = arguments;
        return "string" == typeof option && "getActive" == option
            ? this.data("active")
            : this.each(function () {
                  var $this = $(this),
                      data = $this.data("typeahead"),
                      options = "object" == typeof option && option;
                  data ||
                      $this.data(
                          "typeahead",
                          (data = new Typeahead(this, options))
                      ),
                      "string" == typeof option &&
                          data[option] &&
                          (arg.length > 1
                              ? data[option].apply(
                                    data,
                                    Array.prototype.slice.call(arg, 1)
                                )
                              : data[option]());
              });
    }),
        (Typeahead.defaults = {
            source: [],
            items: 8,
            minLength: 1,
            scrollHeight: 0,
            autoSelect: !0,
            afterSelect: $.noop,
            afterEmptySelect: $.noop,
            addItem: !1,
            followLinkOnSelect: !1,
            delay: 0,
            separator: "category",
            theme: "bootstrap3",
            themes: {
                bootstrap3: {
                    menu: '<ul class="typeahead dropdown-menu" role="listbox"></ul>',
                    item: '<li><a class="dropdown-item" href="#" role="option"></a></li>',
                    itemContentSelector: "a",
                    headerHtml: '<li class="dropdown-header"></li>',
                    headerDivider: '<li class="divider" role="separator"></li>',
                },
                bootstrap4: {
                    menu: '<div class="typeahead dropdown-menu" role="listbox"></div>',
                    item: '<button class="dropdown-item" role="option"></button>',
                    itemContentSelector: ".dropdown-item",
                    headerHtml: '<h6 class="dropdown-header"></h6>',
                    headerDivider: '<div class="dropdown-divider"></div>',
                },
            },
        }),
        ($.fn.typeahead.Constructor = Typeahead),
        ($.fn.typeahead.noConflict = function () {
            return ($.fn.typeahead = old), this;
        }),
        $(document).on(
            "focus.typeahead.data-api",
            '[data-provide="typeahead"]',
            function (e) {
                var $this = $(this);
                $this.data("typeahead") || $this.typeahead($this.data());
            }
        );
});
