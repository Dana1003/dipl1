/*let date = new Date()

let localDate = document.getElementById('arrivingData')
let y = date.getFullYear()
let m = date.getMonth() + 1
if (m < 10) {
    m = '0' + m
}
let d = date.getDate()
//console.log(localDate.id)
localDate.value = `${y}-${m}-${d}`*/


/*const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.list-menu');
const blackout = document.querySelector('.blackout');
const menuItem = document.querySelectorAll('.nav-item');

function toggleMenu() {
    hamburger.classList.toggle('open-menu');
    menu.classList.toggle('nav-list-active');
    blackout.classList.toggle('active');
}

console.log(menu);
//hamburger.addEventListener('click', toggleMenu);


menuItem.forEach(item => {
    item.addEventListener('click', toggleMenu)
})*/

/* Tabulator v5.2.7 (c) Oliver Folkerd 2022 */
!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Tabulator = t()
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

    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function o(e, t, i) {
        return t && n(e.prototype, t), i && n(e, i), e
    }

    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && s(e, t)
    }

    function r(e) {
        return (r = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function s(e, t) {
        return (s = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function l(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function u(e, t) {
        return !t || "object" != typeof t && "function" != typeof t ? l(e) : t
    }

    function c(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                }))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var i, n = r(e);
            if (t) {
                var o = r(this).constructor;
                i = Reflect.construct(n, arguments, o)
            } else i = n.apply(this, arguments);
            return u(this, i)
        }
    }

    function h(e, t) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var i = [], n = !0, o = !1, a = void 0;
            try {
                for (var r, s = e[Symbol.iterator](); !(n = (r = s.next()).done) && (i.push(r.value), !t || i.length !== t); n = !0) ;
            } catch (e) {
                o = !0, a = e
            } finally {
                try {
                    n || null == s.return || s.return()
                } finally {
                    if (o) throw a
                }
            }
            return i
        }(e, t) || m(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function d(e) {
        return function (e) {
            if (Array.isArray(e)) return p(e)
        }(e) || function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        }(e) || m(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function m(e, t) {
        if (e) {
            if ("string" == typeof e) return p(e, t);
            var i = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? p(e, t) : void 0
        }
    }

    function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
        return n
    }

    function f(e, t) {
        var i;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (i = m(e)) || t && e && "number" == typeof e.length) {
                i && (e = i);
                var n = 0, o = function () {
                };
                return {
                    s: o, n: function () {
                        return n >= e.length ? {done: !0} : {done: !1, value: e[n++]}
                    }, e: function (e) {
                        throw e
                    }, f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, r = !0, s = !1;
        return {
            s: function () {
                i = e[Symbol.iterator]()
            }, n: function () {
                var e = i.next();
                return r = e.done, e
            }, e: function (e) {
                s = !0, a = e
            }, f: function () {
                try {
                    r || null == i.return || i.return()
                } finally {
                    if (s) throw a
                }
            }
        }
    }

    var g = function () {
        function e(i) {
            t(this, e), this.table = i
        }

        return o(e, [{
            key: "reloadData", value: function (e, t, i) {
                return this.table.dataLoader.load(e, void 0, void 0, void 0, t, i)
            }
        }, {
            key: "langText", value: function () {
                var e;
                return (e = this.table.modules.localize).getText.apply(e, arguments)
            }
        }, {
            key: "langBind", value: function () {
                var e;
                return (e = this.table.modules.localize).bind.apply(e, arguments)
            }
        }, {
            key: "langLocale", value: function () {
                var e;
                return (e = this.table.modules.localize).getLocale.apply(e, arguments)
            }
        }, {
            key: "commsConnections", value: function () {
                var e;
                return (e = this.table.modules.comms).getConnections.apply(e, arguments)
            }
        }, {
            key: "commsSend", value: function () {
                var e;
                return (e = this.table.modules.comms).send.apply(e, arguments)
            }
        }, {
            key: "layoutMode", value: function () {
                return this.table.modules.layout.getMode()
            }
        }, {
            key: "layoutRefresh", value: function () {
                return this.table.modules.layout.layout()
            }
        }, {
            key: "subscribe", value: function () {
                var e;
                return (e = this.table.eventBus).subscribe.apply(e, arguments)
            }
        }, {
            key: "unsubscribe", value: function () {
                var e;
                return (e = this.table.eventBus).unsubscribe.apply(e, arguments)
            }
        }, {
            key: "subscribed", value: function (e) {
                return this.table.eventBus.subscribed(e)
            }
        }, {
            key: "subscriptionChange", value: function () {
                var e;
                return (e = this.table.eventBus).subscriptionChange.apply(e, arguments)
            }
        }, {
            key: "dispatch", value: function () {
                var e;
                return (e = this.table.eventBus).dispatch.apply(e, arguments)
            }
        }, {
            key: "chain", value: function () {
                var e;
                return (e = this.table.eventBus).chain.apply(e, arguments)
            }
        }, {
            key: "confirm", value: function () {
                var e;
                return (e = this.table.eventBus).confirm.apply(e, arguments)
            }
        }, {
            key: "dispatchExternal", value: function () {
                var e;
                return (e = this.table.externalEvents).dispatch.apply(e, arguments)
            }
        }, {
            key: "subscribedExternal", value: function (e) {
                return this.table.externalEvents.subscribed(e)
            }
        }, {
            key: "subscriptionChangeExternal", value: function () {
                var e;
                return (e = this.table.externalEvents).subscriptionChange.apply(e, arguments)
            }
        }, {
            key: "options", value: function (e) {
                return this.table.options[e]
            }
        }, {
            key: "setOption", value: function (e, t) {
                return void 0 !== t && (this.table.options[e] = t), this.table.options[e]
            }
        }, {
            key: "module", value: function (e) {
                return this.table.module(e)
            }
        }]), e
    }(), v = function () {
        function e(i) {
            return t(this, e), this._column = i, this.type = "ColumnComponent", new Proxy(this, {
                get: function (e, t, i) {
                    return void 0 !== e[t] ? e[t] : e._column.table.componentFunctionBinder.handle("column", e._column, t)
                }
            })
        }

        return o(e, [{
            key: "getElement", value: function () {
                return this._column.getElement()
            }
        }, {
            key: "getDefinition", value: function () {
                return this._column.getDefinition()
            }
        }, {
            key: "getField", value: function () {
                return this._column.getField()
            }
        }, {
            key: "getTitleDownload", value: function () {
                return this._column.getTitleDownload()
            }
        }, {
            key: "getCells", value: function () {
                var e = [];
                return this._column.cells.forEach((function (t) {
                    e.push(t.getComponent())
                })), e
            }
        }, {
            key: "isVisible", value: function () {
                return this._column.visible
            }
        }, {
            key: "show", value: function () {
                this._column.isGroup ? this._column.columns.forEach((function (e) {
                    e.show()
                })) : this._column.show()
            }
        }, {
            key: "hide", value: function () {
                this._column.isGroup ? this._column.columns.forEach((function (e) {
                    e.hide()
                })) : this._column.hide()
            }
        }, {
            key: "toggle", value: function () {
                this._column.visible ? this.hide() : this.show()
            }
        }, {
            key: "delete", value: function () {
                return this._column.delete()
            }
        }, {
            key: "getSubColumns", value: function () {
                var e = [];
                return this._column.columns.length && this._column.columns.forEach((function (t) {
                    e.push(t.getComponent())
                })), e
            }
        }, {
            key: "getParentColumn", value: function () {
                return this._column.parent instanceof C && this._column.parent.getComponent()
            }
        }, {
            key: "_getSelf", value: function () {
                return this._column
            }
        }, {
            key: "scrollTo", value: function () {
                return this._column.table.columnManager.scrollToColumn(this._column)
            }
        }, {
            key: "getTable", value: function () {
                return this._column.table
            }
        }, {
            key: "move", value: function (e, t) {
                var i = this._column.table.columnManager.findColumn(e);
                i ? this._column.table.columnManager.moveColumn(this._column, i, t) : console.warn("Move Error - No matching column found:", i)
            }
        }, {
            key: "getNextColumn", value: function () {
                var e = this._column.nextColumn();
                return !!e && e.getComponent()
            }
        }, {
            key: "getPrevColumn", value: function () {
                var e = this._column.prevColumn();
                return !!e && e.getComponent()
            }
        }, {
            key: "updateDefinition", value: function (e) {
                return this._column.updateDefinition(e)
            }
        }, {
            key: "getWidth", value: function () {
                return this._column.getWidth()
            }
        }, {
            key: "setWidth", value: function (e) {
                var t;
                return t = !0 === e ? this._column.reinitializeWidth(!0) : this._column.setWidth(e), this._column.table.columnManager.renderer.rerenderColumns(!0), t
            }
        }]), e
    }(), b = {
        title: void 0,
        field: void 0,
        columns: void 0,
        visible: void 0,
        hozAlign: void 0,
        vertAlign: void 0,
        width: void 0,
        minWidth: 40,
        maxWidth: void 0,
        maxInitialWidth: void 0,
        cssClass: void 0,
        variableHeight: void 0,
        headerVertical: void 0,
        headerHozAlign: void 0,
        editableTitle: void 0
    }, y = function () {
        function e(i) {
            return t(this, e), this._cell = i, new Proxy(this, {
                get: function (e, t, i) {
                    return void 0 !== e[t] ? e[t] : e._cell.table.componentFunctionBinder.handle("cell", e._cell, t)
                }
            })
        }

        return o(e, [{
            key: "getValue", value: function () {
                return this._cell.getValue()
            }
        }, {
            key: "getOldValue", value: function () {
                return this._cell.getOldValue()
            }
        }, {
            key: "getInitialValue", value: function () {
                return this._cell.initialValue
            }
        }, {
            key: "getElement", value: function () {
                return this._cell.getElement()
            }
        }, {
            key: "getRow", value: function () {
                return this._cell.row.getComponent()
            }
        }, {
            key: "getData", value: function () {
                return this._cell.row.getData()
            }
        }, {
            key: "getField", value: function () {
                return this._cell.column.getField()
            }
        }, {
            key: "getColumn", value: function () {
                return this._cell.column.getComponent()
            }
        }, {
            key: "setValue", value: function (e, t) {
                void 0 === t && (t = !0), this._cell.setValue(e, t)
            }
        }, {
            key: "restoreOldValue", value: function () {
                this._cell.setValueActual(this._cell.getOldValue())
            }
        }, {
            key: "restoreInitialValue", value: function () {
                this._cell.setValueActual(this._cell.initialValue)
            }
        }, {
            key: "checkHeight", value: function () {
                this._cell.checkHeight()
            }
        }, {
            key: "getTable", value: function () {
                return this._cell.table
            }
        }, {
            key: "_getSelf", value: function () {
                return this._cell
            }
        }]), e
    }(), w = function (i) {
        a(r, i);
        var n = c(r);

        function r(e, i) {
            var o;
            return t(this, r), (o = n.call(this, e.table)).table = e.table, o.column = e, o.row = i, o.element = null, o.value = null, o.initialValue, o.oldValue = null, o.modules = {}, o.height = null, o.width = null, o.minWidth = null, o.component = null, o.loaded = !1, o.build(), o
        }

        return o(r, [{
            key: "build", value: function () {
                this.generateElement(), this.setWidth(), this._configureCell(), this.setValueActual(this.column.getFieldValue(this.row.data)), this.initialValue = this.value
            }
        }, {
            key: "generateElement", value: function () {
                this.element = document.createElement("div"), this.element.className = "tabulator-cell", this.element.setAttribute("role", "gridcell"), this.element = this.element
            }
        }, {
            key: "_configureCell", value: function () {
                var e = this.element, t = this.column.getField();
                (e.style.textAlign = this.column.hozAlign, this.column.vertAlign && (e.style.display = "inline-flex", e.style.alignItems = {
                    top: "flex-start",
                    bottom: "flex-end",
                    middle: "center"
                }[this.column.vertAlign] || "", this.column.hozAlign && (e.style.justifyContent = {
                    left: "flex-start",
                    right: "flex-end",
                    center: "center"
                }[this.column.hozAlign] || "")), t && e.setAttribute("tabulator-field", t), this.column.definition.cssClass) && this.column.definition.cssClass.split(" ").forEach((function (t) {
                    e.classList.add(t)
                }));
                this.dispatch("cell-init", this), this.column.visible || this.hide()
            }
        }, {
            key: "_generateContents", value: function () {
                var t, i = this;
                switch (e(t = this.chain("cell-format", this, null, (function () {
                    return i.element.innerHTML = i.value
                })))) {
                    case"object":
                        if (t instanceof Node) {
                            for (; this.element.firstChild;) this.element.removeChild(this.element.firstChild);
                            this.element.appendChild(t)
                        } else this.element.innerHTML = "", null != t && console.warn("Format Error - Formatter has returned a type of object, the only valid formatter object return is an instance of Node, the formatter returned:", t);
                        break;
                    case"undefined":
                        this.element.innerHTML = "";
                        break;
                    default:
                        this.element.innerHTML = t
                }
            }
        }, {
            key: "cellRendered", value: function () {
                this.dispatch("cell-rendered", this)
            }
        }, {
            key: "getElement", value: function (e) {
                return this.loaded || (this.loaded = !0, e || this.layoutElement()), this.element
            }
        }, {
            key: "getValue", value: function () {
                return this.value
            }
        }, {
            key: "getOldValue", value: function () {
                return this.oldValue
            }
        }, {
            key: "setValue", value: function (e, t, i) {
                this.setValueProcessData(e, t, i) && (this.dispatch("cell-value-updated", this), this.cellRendered(), this.column.definition.cellEdited && this.column.definition.cellEdited.call(this.table, this.getComponent()), this.dispatchExternal("cellEdited", this.getComponent()), this.subscribedExternal("dataChanged") && this.dispatchExternal("dataChanged", this.table.rowManager.getData()))
            }
        }, {
            key: "setValueProcessData", value: function (e, t, i) {
                var n = !1;
                return (this.value !== e || i) && (n = !0, t && (e = this.chain("cell-value-changing", [this, e], null, e))), this.setValueActual(e), n && this.dispatch("cell-value-changed", this), n
            }
        }, {
            key: "setValueActual", value: function (e) {
                this.oldValue = this.value, this.value = e, this.dispatch("cell-value-save-before", this), this.column.setFieldValue(this.row.data, e), this.dispatch("cell-value-save-after", this), this.loaded && this.layoutElement()
            }
        }, {
            key: "layoutElement", value: function () {
                this._generateContents(), this.dispatch("cell-layout", this)
            }
        }, {
            key: "setWidth", value: function () {
                this.width = this.column.width, this.element.style.width = this.column.widthStyled
            }
        }, {
            key: "clearWidth", value: function () {
                this.width = "", this.element.style.width = ""
            }
        }, {
            key: "getWidth", value: function () {
                return this.width || this.element.offsetWidth
            }
        }, {
            key: "setMinWidth", value: function () {
                this.minWidth = this.column.minWidth, this.element.style.minWidth = this.column.minWidthStyled
            }
        }, {
            key: "setMaxWidth", value: function () {
                this.maxWidth = this.column.maxWidth, this.element.style.maxWidth = this.column.maxWidthStyled
            }
        }, {
            key: "checkHeight", value: function () {
                this.row.reinitializeHeight()
            }
        }, {
            key: "clearHeight", value: function () {
                this.element.style.height = "", this.height = null, this.dispatch("cell-height", this, "")
            }
        }, {
            key: "setHeight", value: function () {
                this.height = this.row.height, this.element.style.height = this.row.heightStyled, this.dispatch("cell-height", this, this.row.heightStyled)
            }
        }, {
            key: "getHeight", value: function () {
                return this.height || this.element.offsetHeight
            }
        }, {
            key: "show", value: function () {
                this.element.style.display = this.column.vertAlign ? "inline-flex" : ""
            }
        }, {
            key: "hide", value: function () {
                this.element.style.display = "none"
            }
        }, {
            key: "delete", value: function () {
                this.dispatch("cell-delete", this), !this.table.rowManager.redrawBlock && this.element.parentNode && this.element.parentNode.removeChild(this.element), this.element = !1, this.column.deleteCell(this), this.row.deleteCell(this), this.calcs = {}
            }
        }, {
            key: "getIndex", value: function () {
                return this.row.getCellIndex(this)
            }
        }, {
            key: "getComponent", value: function () {
                return this.component || (this.component = new y(this)), this.component
            }
        }]), r
    }(g), C = function (i) {
        a(r, i);
        var n = c(r);

        function r(e, i) {
            var o;
            return t(this, r), (o = n.call(this, i.table)).definition = e, o.parent = i, o.type = "column", o.columns = [], o.cells = [], o.element = o.createElement(), o.contentElement = !1, o.titleHolderElement = !1, o.titleElement = !1, o.groupElement = o.createGroupElement(), o.isGroup = !1, o.hozAlign = "", o.vertAlign = "", o.field = "", o.fieldStructure = "", o.getFieldValue = "", o.setFieldValue = "", o.titleDownload = null, o.titleFormatterRendered = !1, o.mapDefinitions(), o.setField(o.definition.field), o.modules = {}, o.width = null, o.widthStyled = "", o.maxWidth = null, o.maxWidthStyled = "", o.maxInitialWidth = null, o.minWidth = null, o.minWidthStyled = "", o.widthFixed = !1, o.visible = !0, o.component = null, o.definition.columns ? (o.isGroup = !0, o.definition.columns.forEach((function (e, t) {
                var i = new r(e, l(o));
                o.attachColumn(i)
            })), o.checkColumnVisibility()) : i.registerColumnField(l(o)), o._initialize(), o.bindModuleColumns(), o
        }

        return o(r, [{
            key: "createElement", value: function () {
                var e = document.createElement("div");
                return e.classList.add("tabulator-col"), e.setAttribute("role", "columnheader"), e.setAttribute("aria-sort", "none"), e
            }
        }, {
            key: "createGroupElement", value: function () {
                var e = document.createElement("div");
                return e.classList.add("tabulator-col-group-cols"), e
            }
        }, {
            key: "mapDefinitions", value: function () {
                var e = this.table.options.columnDefaults;
                if (e) for (var t in e) void 0 === this.definition[t] && (this.definition[t] = e[t]);
                this.definition = this.table.columnManager.optionsList.generate(r.defaultOptionList, this.definition)
            }
        }, {
            key: "checkDefinition", value: function () {
                var e = this;
                Object.keys(this.definition).forEach((function (t) {
                    -1 === r.defaultOptionList.indexOf(t) && console.warn("Invalid column definition option in '" + (e.field || e.definition.title) + "' column:", t)
                }))
            }
        }, {
            key: "setField", value: function (e) {
                this.field = e, this.fieldStructure = e ? this.table.options.nestedFieldSeparator ? e.split(this.table.options.nestedFieldSeparator) : [e] : [], this.getFieldValue = this.fieldStructure.length > 1 ? this._getNestedData : this._getFlatData, this.setFieldValue = this.fieldStructure.length > 1 ? this._setNestedData : this._setFlatData
            }
        }, {
            key: "registerColumnPosition", value: function (e) {
                this.parent.registerColumnPosition(e)
            }
        }, {
            key: "registerColumnField", value: function (e) {
                this.parent.registerColumnField(e)
            }
        }, {
            key: "reRegisterPosition", value: function () {
                this.isGroup ? this.columns.forEach((function (e) {
                    e.reRegisterPosition()
                })) : this.registerColumnPosition(this)
            }
        }, {
            key: "_mapDepricatedFunctionality", value: function () {
            }
        }, {
            key: "_initialize", value: function () {
                for (var e = this.definition; this.element.firstChild;) this.element.removeChild(this.element.firstChild);
                e.headerVertical && (this.element.classList.add("tabulator-col-vertical"), "flip" === e.headerVertical && this.element.classList.add("tabulator-col-vertical-flip")), this.contentElement = this._buildColumnHeaderContent(), this.element.appendChild(this.contentElement), this.isGroup ? this._buildGroupHeader() : this._buildColumnHeader(), this.dispatch("column-init", this)
            }
        }, {
            key: "_buildColumnHeader", value: function () {
                var e = this, t = this.definition;
                this.table;
                (this.dispatch("column-layout", this), void 0 !== t.visible && (t.visible ? this.show(!0) : this.hide(!0)), t.cssClass) && t.cssClass.split(" ").forEach((function (t) {
                    e.element.classList.add(t)
                }));
                t.field && this.element.setAttribute("tabulator-field", t.field), this.setMinWidth(parseInt(t.minWidth)), t.maxInitialWidth && (this.maxInitialWidth = parseInt(t.maxInitialWidth)), t.maxWidth && this.setMaxWidth(parseInt(t.maxWidth)), this.reinitializeWidth(), this.hozAlign = this.definition.hozAlign, this.vertAlign = this.definition.vertAlign, this.titleElement.style.textAlign = this.definition.headerHozAlign
            }
        }, {
            key: "_buildColumnHeaderContent", value: function () {
                this.definition, this.table;
                var e = document.createElement("div");
                return e.classList.add("tabulator-col-content"), this.titleHolderElement = document.createElement("div"), this.titleHolderElement.classList.add("tabulator-col-title-holder"), e.appendChild(this.titleHolderElement), this.titleElement = this._buildColumnHeaderTitle(), this.titleHolderElement.appendChild(this.titleElement), e
            }
        }, {
            key: "_buildColumnHeaderTitle", value: function () {
                var e = this, t = this.definition, i = document.createElement("div");
                if (i.classList.add("tabulator-col-title"), t.editableTitle) {
                    var n = document.createElement("input");
                    n.classList.add("tabulator-title-editor"), n.addEventListener("click", (function (e) {
                        e.stopPropagation(), n.focus()
                    })), n.addEventListener("change", (function () {
                        t.title = n.value, e.dispatchExternal("columnTitleChanged", e.getComponent())
                    })), i.appendChild(n), t.field ? this.langBind("columns|" + t.field, (function (e) {
                        n.value = e || t.title || "&nbsp;"
                    })) : n.value = t.title || "&nbsp;"
                } else t.field ? this.langBind("columns|" + t.field, (function (n) {
                    e._formatColumnHeaderTitle(i, n || t.title || "&nbsp;")
                })) : this._formatColumnHeaderTitle(i, t.title || "&nbsp;");
                return i
            }
        }, {
            key: "_formatColumnHeaderTitle", value: function (t, i) {
                var n = this.chain("column-format", [this, i, t], null, (function () {
                    return i
                }));
                switch (e(n)) {
                    case"object":
                        n instanceof Node ? t.appendChild(n) : (t.innerHTML = "", console.warn("Format Error - Title formatter has returned a type of object, the only valid formatter object return is an instance of Node, the formatter returned:", n));
                        break;
                    case"undefined":
                        t.innerHTML = "";
                        break;
                    default:
                        t.innerHTML = n
                }
            }
        }, {
            key: "_buildGroupHeader", value: function () {
                var e = this;
                (this.element.classList.add("tabulator-col-group"), this.element.setAttribute("role", "columngroup"), this.element.setAttribute("aria-title", this.definition.title), this.definition.cssClass) && this.definition.cssClass.split(" ").forEach((function (t) {
                    e.element.classList.add(t)
                }));
                this.titleElement.style.textAlign = this.definition.headerHozAlign, this.element.appendChild(this.groupElement)
            }
        }, {
            key: "_getFlatData", value: function (e) {
                return e[this.field]
            }
        }, {
            key: "_getNestedData", value: function (e) {
                for (var t, i = e, n = this.fieldStructure, o = n.length, a = 0; a < o && (t = i = i[n[a]], i); a++) ;
                return t
            }
        }, {
            key: "_setFlatData", value: function (e, t) {
                this.field && (e[this.field] = t)
            }
        }, {
            key: "_setNestedData", value: function (e, t) {
                for (var i = e, n = this.fieldStructure, o = n.length, a = 0; a < o; a++) if (a == o - 1) i[n[a]] = t; else {
                    if (!i[n[a]]) {
                        if (void 0 === t) break;
                        i[n[a]] = {}
                    }
                    i = i[n[a]]
                }
            }
        }, {
            key: "attachColumn", value: function (e) {
                this.groupElement ? (this.columns.push(e), this.groupElement.appendChild(e.getElement()), e.columnRendered()) : console.warn("Column Warning - Column being attached to another column instead of column group")
            }
        }, {
            key: "verticalAlign", value: function (e, t) {
                var i = this.parent.isGroup ? this.parent.getGroupElement().clientHeight : t || this.parent.getHeadersElement().clientHeight;
                this.element.style.height = i + "px", this.dispatch("column-height", this, this.element.style.height), this.isGroup && (this.groupElement.style.minHeight = i - this.contentElement.offsetHeight + "px"), this.isGroup || "top" === e || (this.element.style.paddingTop = "bottom" === e ? this.element.clientHeight - this.contentElement.offsetHeight + "px" : (this.element.clientHeight - this.contentElement.offsetHeight) / 2 + "px"), this.columns.forEach((function (t) {
                    t.verticalAlign(e)
                }))
            }
        }, {
            key: "clearVerticalAlign", value: function () {
                this.element.style.paddingTop = "", this.element.style.height = "", this.element.style.minHeight = "", this.groupElement.style.minHeight = "", this.columns.forEach((function (e) {
                    e.clearVerticalAlign()
                })), this.dispatch("column-height", this, "")
            }
        }, {
            key: "bindModuleColumns", value: function () {
                "rownum" == this.definition.formatter && (this.table.rowManager.rowNumColumn = this)
            }
        }, {
            key: "getElement", value: function () {
                return this.element
            }
        }, {
            key: "getGroupElement", value: function () {
                return this.groupElement
            }
        }, {
            key: "getField", value: function () {
                return this.field
            }
        }, {
            key: "getTitleDownload", value: function () {
                return this.titleDownload
            }
        }, {
            key: "getFirstColumn", value: function () {
                return this.isGroup ? !!this.columns.length && this.columns[0].getFirstColumn() : this
            }
        }, {
            key: "getLastColumn", value: function () {
                return this.isGroup ? !!this.columns.length && this.columns[this.columns.length - 1].getLastColumn() : this
            }
        }, {
            key: "getColumns", value: function () {
                return this.columns
            }
        }, {
            key: "getCells", value: function () {
                return this.cells
            }
        }, {
            key: "getTopColumn", value: function () {
                return this.parent.isGroup ? this.parent.getTopColumn() : this
            }
        }, {
            key: "getDefinition", value: function (e) {
                var t = [];
                return this.isGroup && e && (this.columns.forEach((function (e) {
                    t.push(e.getDefinition(!0))
                })), this.definition.columns = t), this.definition
            }
        }, {
            key: "checkColumnVisibility", value: function () {
                var e = !1;
                this.columns.forEach((function (t) {
                    t.visible && (e = !0)
                })), e ? (this.show(), this.dispatchExternal("columnVisibilityChanged", this.getComponent(), !1)) : this.hide()
            }
        }, {
            key: "show", value: function (e, t) {
                this.visible || (this.visible = !0, this.element.style.display = "", this.parent.isGroup && this.parent.checkColumnVisibility(), this.cells.forEach((function (e) {
                    e.show()
                })), this.isGroup || null !== this.width || this.reinitializeWidth(), this.table.columnManager.verticalAlignHeaders(), this.dispatch("column-show", this, t), e || this.dispatchExternal("columnVisibilityChanged", this.getComponent(), !0), this.parent.isGroup && this.parent.matchChildWidths(), this.silent || this.table.columnManager.renderer.rerenderColumns())
            }
        }, {
            key: "hide", value: function (e, t) {
                this.visible && (this.visible = !1, this.element.style.display = "none", this.table.columnManager.verticalAlignHeaders(), this.parent.isGroup && this.parent.checkColumnVisibility(), this.cells.forEach((function (e) {
                    e.hide()
                })), this.dispatch("column-hide", this, t), e || this.dispatchExternal("columnVisibilityChanged", this.getComponent(), !1), this.parent.isGroup && this.parent.matchChildWidths(), this.silent || this.table.columnManager.renderer.rerenderColumns())
            }
        }, {
            key: "matchChildWidths", value: function () {
                var e = 0;
                this.contentElement && this.columns.length && (this.columns.forEach((function (t) {
                    t.visible && (e += t.getWidth())
                })), this.contentElement.style.maxWidth = e - 1 + "px", this.parent.isGroup && this.parent.matchChildWidths())
            }
        }, {
            key: "removeChild", value: function (e) {
                var t = this.columns.indexOf(e);
                t > -1 && this.columns.splice(t, 1), this.columns.length || this.delete()
            }
        }, {
            key: "setWidth", value: function (e) {
                this.widthFixed = !0, this.setWidthActual(e)
            }
        }, {
            key: "setWidthActual", value: function (e) {
                isNaN(e) && (e = Math.floor(this.table.element.clientWidth / 100 * parseInt(e))), e = Math.max(this.minWidth, e), this.maxWidth && (e = Math.min(this.maxWidth, e)), this.width = e, this.widthStyled = e ? e + "px" : "", this.element.style.width = this.widthStyled, this.isGroup || this.cells.forEach((function (e) {
                    e.setWidth()
                })), this.parent.isGroup && this.parent.matchChildWidths(), this.dispatch("column-width", this)
            }
        }, {
            key: "checkCellHeights", value: function () {
                var e = [];
                this.cells.forEach((function (t) {
                    t.row.heightInitialized && (null !== t.row.getElement().offsetParent ? (e.push(t.row), t.row.clearCellHeight()) : t.row.heightInitialized = !1)
                })), e.forEach((function (e) {
                    e.calcHeight()
                })), e.forEach((function (e) {
                    e.setCellHeight()
                }))
            }
        }, {
            key: "getWidth", value: function () {
                var e = 0;
                return this.isGroup ? this.columns.forEach((function (t) {
                    t.visible && (e += t.getWidth())
                })) : e = this.width, e
            }
        }, {
            key: "getHeight", value: function () {
                return Math.ceil(this.element.getBoundingClientRect().height)
            }
        }, {
            key: "setMinWidth", value: function (e) {
                this.minWidth = e, this.minWidthStyled = e ? e + "px" : "", this.element.style.minWidth = this.minWidthStyled, this.cells.forEach((function (e) {
                    e.setMinWidth()
                }))
            }
        }, {
            key: "setMaxWidth", value: function (e) {
                this.maxWidth = e, this.maxWidthStyled = e ? e + "px" : "", this.element.style.maxWidth = this.maxWidthStyled, this.cells.forEach((function (e) {
                    e.setMaxWidth()
                }))
            }
        }, {
            key: "delete", value: function () {
                var e = this;
                return new Promise((function (t, i) {
                    e.isGroup && e.columns.forEach((function (e) {
                        e.delete()
                    })), e.dispatch("column-delete", e);
                    for (var n = e.cells.length, o = 0; o < n; o++) e.cells[0].delete();
                    e.element.parentNode && e.element.parentNode.removeChild(e.element), e.element = !1, e.contentElement = !1, e.titleElement = !1, e.groupElement = !1, e.parent.isGroup && e.parent.removeChild(e), e.table.columnManager.deregisterColumn(e), e.table.columnManager.renderer.rerenderColumns(!0), t()
                }))
            }
        }, {
            key: "columnRendered", value: function () {
                this.titleFormatterRendered && this.titleFormatterRendered(), this.dispatch("column-rendered", this)
            }
        }, {
            key: "generateCell", value: function (e) {
                var t = new w(this, e);
                return this.cells.push(t), t
            }
        }, {
            key: "nextColumn", value: function () {
                var e = this.table.columnManager.findColumnIndex(this);
                return e > -1 && this._nextVisibleColumn(e + 1)
            }
        }, {
            key: "_nextVisibleColumn", value: function (e) {
                var t = this.table.columnManager.getColumnByIndex(e);
                return !t || t.visible ? t : this._nextVisibleColumn(e + 1)
            }
        }, {
            key: "prevColumn", value: function () {
                var e = this.table.columnManager.findColumnIndex(this);
                return e > -1 && this._prevVisibleColumn(e - 1)
            }
        }, {
            key: "_prevVisibleColumn", value: function (e) {
                var t = this.table.columnManager.getColumnByIndex(e);
                return !t || t.visible ? t : this._prevVisibleColumn(e - 1)
            }
        }, {
            key: "reinitializeWidth", value: function (e) {
                this.widthFixed = !1, void 0 === this.definition.width || e || this.setWidth(this.definition.width), this.dispatch("column-width-fit-before", this), this.fitToData(e), this.dispatch("column-width-fit-after", this)
            }
        }, {
            key: "fitToData", value: function (e) {
                if (!this.isGroup) {
                    this.widthFixed || (this.element.style.width = "", this.cells.forEach((function (e) {
                        e.clearWidth()
                    })));
                    var t = this.element.offsetWidth;
                    if ((!this.width || !this.widthFixed) && (this.cells.forEach((function (e) {
                        var i = e.getWidth();
                        i > t && (t = i)
                    })), t)) {
                        var i = t + 1;
                        this.maxInitialWidth && !e && (i = Math.min(i, this.maxInitialWidth)), this.setWidthActual(i)
                    }
                }
            }
        }, {
            key: "updateDefinition", value: function (e) {
                var t, i = this;
                return this.isGroup || this.parent.isGroup ? (console.error("Column Update Error - The updateDefinition function is only available on ungrouped columns"), Promise.reject("Column Update Error - The updateDefinition function is only available on columns, not column groups")) : (t = Object.assign({}, this.getDefinition()), t = Object.assign(t, e), this.table.columnManager.addColumn(t, !1, this).then((function (e) {
                    return t.field == i.field && (i.field = !1), i.delete().then((function () {
                        return e.getComponent()
                    }))
                })))
            }
        }, {
            key: "deleteCell", value: function (e) {
                var t = this.cells.indexOf(e);
                t > -1 && this.cells.splice(t, 1)
            }
        }, {
            key: "getComponent", value: function () {
                return this.component || (this.component = new v(this)), this.component
            }
        }]), r
    }(g);
    C.defaultOptionList = b;
    var k = function () {
        function i() {
            t(this, i)
        }

        return o(i, null, [{
            key: "elVisible", value: function (e) {
                return !(e.offsetWidth <= 0 && e.offsetHeight <= 0)
            }
        }, {
            key: "elOffset", value: function (e) {
                var t = e.getBoundingClientRect();
                return {
                    top: t.top + window.pageYOffset - document.documentElement.clientTop,
                    left: t.left + window.pageXOffset - document.documentElement.clientLeft
                }
            }
        }, {
            key: "deepClone", value: function (t, i) {
                var n = this, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], a = {}.__proto__,
                    r = [].__proto__;
                i || (i = Object.assign(Array.isArray(t) ? [] : {}, t));
                var s = function () {
                    var s = t[l], u = void 0, c = void 0;
                    null == s || "object" !== e(s) || s.__proto__ !== a && s.__proto__ !== r || ((u = o.findIndex((function (e) {
                        return e.subject === s
                    }))) > -1 ? i[l] = o[u].copy : (c = Object.assign(Array.isArray(s) ? [] : {}, s), o.unshift({
                        subject: s,
                        copy: c
                    }), i[l] = n.deepClone(s, c, o)))
                };
                for (var l in t) s();
                return i
            }
        }]), i
    }(), E = function () {
        function i(e, n) {
            var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            t(this, i), this.table = e, this.msgType = n, this.registeredDefaults = Object.assign({}, o)
        }

        return o(i, [{
            key: "register", value: function (e, t) {
                this.registeredDefaults[e] = t
            }
        }, {
            key: "generate", value: function (t) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = Object.assign({}, this.registeredDefaults);
                if (Object.assign(n, t), !1 !== i.debugInvalidOptions || this.table.options.debugInvalidOptions) for (var o in i) n.hasOwnProperty(o) || console.warn("Invalid " + this.msgType + " option:", o);
                for (var o in n) o in i ? n[o] = i[o] : Array.isArray(n[o]) ? n[o] = Object.assign([], n[o]) : "object" === e(n[o]) && null !== n[o] ? n[o] = Object.assign({}, n[o]) : void 0 === n[o] && delete n[o];
                return n
            }
        }]), i
    }(), R = function (e) {
        a(n, e);
        var i = c(n);

        function n(e) {
            var o;
            return t(this, n), (o = i.call(this, e)).elementVertical = e.rowManager.element, o.elementHorizontal = e.columnManager.element, o.tableElement = e.rowManager.tableElement, o.verticalFillMode = "fit", o
        }

        return o(n, [{
            key: "initialize", value: function () {
            }
        }, {
            key: "clearRows", value: function () {
            }
        }, {
            key: "clearColumns", value: function () {
            }
        }, {
            key: "reinitializeColumnWidths", value: function (e) {
            }
        }, {
            key: "renderRows", value: function () {
            }
        }, {
            key: "renderColumns", value: function () {
            }
        }, {
            key: "rerenderRows", value: function (e) {
                e && e()
            }
        }, {
            key: "rerenderColumns", value: function (e, t) {
            }
        }, {
            key: "renderRowCells", value: function (e) {
            }
        }, {
            key: "rerenderRowCells", value: function (e, t) {
            }
        }, {
            key: "scrollColumns", value: function (e, t) {
            }
        }, {
            key: "scrollRows", value: function (e, t) {
            }
        }, {
            key: "resize", value: function () {
            }
        }, {
            key: "scrollToRow", value: function (e) {
            }
        }, {
            key: "scrollToRowNearestTop", value: function (e) {
            }
        }, {
            key: "visibleRows", value: function (e) {
                return []
            }
        }, {
            key: "rows", value: function () {
                return this.table.rowManager.getDisplayRows()
            }
        }, {
            key: "styleRow", value: function (e, t) {
                var i = e.getElement();
                t % 2 ? (i.classList.add("tabulator-row-even"), i.classList.remove("tabulator-row-odd")) : (i.classList.add("tabulator-row-odd"), i.classList.remove("tabulator-row-even"))
            }
        }, {
            key: "clear", value: function () {
                this.clearRows(), this.clearColumns()
            }
        }, {
            key: "render", value: function () {
                this.renderRows(), this.renderColumns()
            }
        }, {
            key: "rerender", value: function (e) {
                this.rerenderRows(), this.rerenderColumns()
            }
        }, {
            key: "scrollToRowPosition", value: function (e, t, i) {
                var n = this, o = this.rows().indexOf(e), a = e.getElement(), r = 0;
                return new Promise((function (s, l) {
                    if (o > -1) {
                        if (void 0 === i && (i = n.table.options.scrollToRowIfVisible), !i && k.elVisible(a) && (r = k.elOffset(a).top - k.elOffset(n.elementVertical).top) > 0 && r < n.elementVertical.clientHeight - a.offsetHeight) return s(), !1;
                        switch (void 0 === t && (t = n.table.options.scrollToRowPosition), "nearest" === t && (t = n.scrollToRowNearestTop(e) ? "top" : "bottom"), n.scrollToRow(e), t) {
                            case"middle":
                            case"center":
                                n.elementVertical.scrollHeight - n.elementVertical.scrollTop == n.elementVertical.clientHeight ? n.elementVertical.scrollTop = n.elementVertical.scrollTop + (a.offsetTop - n.elementVertical.scrollTop) - (n.elementVertical.scrollHeight - a.offsetTop) / 2 : n.elementVertical.scrollTop = n.elementVertical.scrollTop - n.elementVertical.clientHeight / 2;
                                break;
                            case"bottom":
                                n.elementVertical.scrollHeight - n.elementVertical.scrollTop == n.elementVertical.clientHeight ? n.elementVertical.scrollTop = n.elementVertical.scrollTop - (n.elementVertical.scrollHeight - a.offsetTop) + a.offsetHeight : n.elementVertical.scrollTop = n.elementVertical.scrollTop - n.elementVertical.clientHeight + a.offsetHeight;
                                break;
                            case"top":
                                n.elementVertical.scrollTop = a.offsetTop
                        }
                        s()
                    } else console.warn("Scroll Error - Row not visible"), l("Scroll Error - Row not visible")
                }))
            }
        }]), n
    }(g), x = function (e) {
        a(n, e);
        var i = c(n);

        function n(e) {
            return t(this, n), i.call(this, e)
        }

        return o(n, [{
            key: "renderRowCells", value: function (e) {
                e.cells.forEach((function (t) {
                    e.element.appendChild(t.getElement()), t.cellRendered()
                }))
            }
        }, {
            key: "reinitializeColumnWidths", value: function (e) {
                e.forEach((function (e) {
                    e.reinitializeWidth()
                }))
            }
        }]), n
    }(R), T = function (e) {
        a(n, e);
        var i = c(n);

        function n(e) {
            var o;
            return t(this, n), (o = i.call(this, e)).leftCol = 0, o.rightCol = 0, o.scrollLeft = 0, o.vDomScrollPosLeft = 0, o.vDomScrollPosRight = 0, o.vDomPadLeft = 0, o.vDomPadRight = 0, o.fitDataColAvg = 0, o.windowBuffer = 200, o.visibleRows = null, o.initialized = !1, o.isFitData = !1, o.columns = [], o
        }

        return o(n, [{
            key: "initialize", value: function () {
                this.compatibilityCheck(), this.layoutCheck(), this.vertScrollListen()
            }
        }, {
            key: "compatibilityCheck", value: function () {
                var e = this.options("columns"), t = !0;
                return "fitDataTable" == this.options("layout") && (console.warn("Horizontal Virtual DOM is not compatible with fitDataTable layout mode"), t = !1), this.options("responsiveLayout") && (console.warn("Horizontal Virtual DOM is not compatible with responsive columns"), t = !1), this.options("rtl") && (console.warn("Horizontal Virtual DOM is not currently compatible with RTL text direction"), t = !1), e && e.find((function (e) {
                    return e.frozen
                })) && (console.warn("Horizontal Virtual DOM is not compatible with frozen columns"), t = !1), t
            }
        }, {
            key: "layoutCheck", value: function () {
                this.isFitData = this.options("layout").startsWith("fitData")
            }
        }, {
            key: "vertScrollListen", value: function () {
                this.subscribe("scroll-vertical", this.clearVisRowCache.bind(this)), this.subscribe("data-refreshed", this.clearVisRowCache.bind(this))
            }
        }, {
            key: "clearVisRowCache", value: function () {
                this.visibleRows = null
            }
        }, {
            key: "renderColumns", value: function (e, t) {
                this.dataChange()
            }
        }, {
            key: "scrollColumns", value: function (e, t) {
                this.scrollLeft != e && (this.scrollLeft = e, this.scroll(e - (this.vDomScrollPosLeft + this.windowBuffer)))
            }
        }, {
            key: "calcWindowBuffer", value: function () {
                var e = this.elementVertical.clientWidth;
                this.table.columnManager.columnsByIndex.forEach((function (t) {
                    if (t.visible) {
                        var i = t.getWidth();
                        i > e && (e = i)
                    }
                })), this.windowBuffer = 2 * e
            }
        }, {
            key: "rerenderColumns", value: function (e, t) {
                var i = this, n = {cols: this.columns, leftCol: this.leftCol, rightCol: this.rightCol}, o = 0;
                e && !this.initialized || (this.clear(), this.calcWindowBuffer(), this.scrollLeft = this.elementVertical.scrollLeft, this.vDomScrollPosLeft = this.scrollLeft - this.windowBuffer, this.vDomScrollPosRight = this.scrollLeft + this.elementVertical.clientWidth + this.windowBuffer, this.table.columnManager.columnsByIndex.forEach((function (e) {
                    var t = {};
                    if (e.visible) {
                        var n = e.getWidth();
                        t.leftPos = o, t.rightPos = o + n, t.width = n, i.isFitData && (t.fitDataCheck = !e.modules.vdomHoz || e.modules.vdomHoz.fitDataCheck), o + n > i.vDomScrollPosLeft && o < i.vDomScrollPosRight ? (-1 == i.leftCol && (i.leftCol = i.columns.length, i.vDomPadLeft = o), i.rightCol = i.columns.length) : -1 !== i.leftCol && (i.vDomPadRight += n), i.columns.push(e), e.modules.vdomHoz = t, o += n
                    }
                })), this.tableElement.style.paddingLeft = this.vDomPadLeft + "px", this.tableElement.style.paddingRight = this.vDomPadRight + "px", this.initialized = !0, t || e && !this.reinitChanged(n) || this.reinitializeRows(), this.elementVertical.scrollLeft = this.scrollLeft)
            }
        }, {
            key: "renderRowCells", value: function (e) {
                this.initialized ? this.initializeRow(e) : e.cells.forEach((function (t) {
                    e.element.appendChild(t.getElement()), t.cellRendered()
                }))
            }
        }, {
            key: "rerenderRowCells", value: function (e, t) {
                this.reinitializeRow(e, t)
            }
        }, {
            key: "reinitializeColumnWidths", value: function (e) {
                for (var t = this.leftCol; t <= this.rightCol; t++) this.columns[t].reinitializeWidth()
            }
        }, {
            key: "deinitialize", value: function () {
                this.initialized = !1
            }
        }, {
            key: "clear", value: function () {
                this.columns = [], this.leftCol = -1, this.rightCol = 0, this.vDomScrollPosLeft = 0, this.vDomScrollPosRight = 0, this.vDomPadLeft = 0, this.vDomPadRight = 0
            }
        }, {
            key: "dataChange", value: function () {
                var e, t, i = this, n = !1, o = 0;
                if (this.isFitData) {
                    if (this.table.columnManager.columnsByIndex.forEach((function (e) {
                        !e.definition.width && e.visible && (n = !0)
                    })), n && n && this.table.rowManager.getDisplayRows().length && (this.vDomScrollPosRight = this.scrollLeft + this.elementVertical.clientWidth + this.windowBuffer, t = this.chain("rows-sample", [1], [], (function () {
                        return i.table.rowManager.getDisplayRows()
                    }))[0])) {
                        e = t.getElement(), t.generateCells(), this.tableElement.appendChild(e);
                        for (o = 0; o < t.cells.length; o++) {
                            var a = t.cells[o];
                            e.appendChild(a.getElement()), a.column.reinitializeWidth(), a.column.getWidth()
                        }
                        e.parentNode.removeChild(e), this.rerenderColumns(!1, !0)
                    }
                } else "fitColumns" === this.options("layout") && (this.layoutRefresh(), this.rerenderColumns(!1, !0))
            }
        }, {
            key: "reinitChanged", value: function (e) {
                var t = this, i = !0;
                return e.cols.length !== this.columns.length || e.leftCol !== this.leftCol || e.rightCol !== this.rightCol || (e.cols.forEach((function (e, n) {
                    e !== t.columns[n] && (i = !1)
                })), !i)
            }
        }, {
            key: "reinitializeRows", value: function () {
                var e = this;
                this.getVisibleRows().forEach((function (t) {
                    e.reinitializeRow(t, !0)
                }))
            }
        }, {
            key: "getVisibleRows", value: function () {
                return this.visibleRows || (this.visibleRows = this.table.rowManager.getVisibleRows()), this.visibleRows
            }
        }, {
            key: "scroll", value: function (e) {
                this.vDomScrollPosLeft += e, this.vDomScrollPosRight += e, Math.abs(e) > this.windowBuffer / 2 ? this.rerenderColumns() : e > 0 ? (this.addColRight(), this.removeColLeft()) : (this.addColLeft(), this.removeColRight())
            }
        }, {
            key: "colPositionAdjust", value: function (e, t, i) {
                for (var n = e; n < t; n++) {
                    var o = this.columns[n];
                    o.modules.vdomHoz.leftPos += i, o.modules.vdomHoz.rightPos += i
                }
            }
        }, {
            key: "addColRight", value: function () {
                for (var e = this, t = !1, i = function () {
                    var i = e.columns[e.rightCol + 1];
                    return i && i.modules.vdomHoz.leftPos <= e.vDomScrollPosRight ? (t = !0, e.getVisibleRows().forEach((function (e) {
                        if ("group" !== e.type) {
                            var t = e.getCell(i);
                            e.getElement().appendChild(t.getElement()), t.cellRendered()
                        }
                    })), e.fitDataColActualWidthCheck(i), e.rightCol++, void (e.rightCol >= e.columns.length - 1 ? e.vDomPadRight = 0 : e.vDomPadRight -= i.getWidth())) : "break"
                }; ;) {
                    if ("break" === i()) break
                }
                t && (this.tableElement.style.paddingRight = this.vDomPadRight + "px")
            }
        }, {
            key: "addColLeft", value: function () {
                for (var e = this, t = !1, i = function () {
                    var i = e.columns[e.leftCol - 1];
                    if (!i) return "break";
                    if (!(i.modules.vdomHoz.rightPos >= e.vDomScrollPosLeft)) return "break";
                    t = !0, e.getVisibleRows().forEach((function (e) {
                        if ("group" !== e.type) {
                            var t = e.getCell(i);
                            e.getElement().prepend(t.getElement()), t.cellRendered()
                        }
                    })), e.leftCol--, e.leftCol <= 0 ? e.vDomPadLeft = 0 : e.vDomPadLeft -= i.getWidth();
                    var n = e.fitDataColActualWidthCheck(i);
                    n && (e.scrollLeft = e.elementVertical.scrollLeft = e.elementVertical.scrollLeft + n, e.vDomPadRight -= n)
                }; ;) {
                    if ("break" === i()) break
                }
                t && (this.tableElement.style.paddingLeft = this.vDomPadLeft + "px")
            }
        }, {
            key: "removeColRight", value: function () {
                for (var e = this, t = !1, i = function () {
                    var i = e.columns[e.rightCol];
                    return i && i.modules.vdomHoz.leftPos > e.vDomScrollPosRight ? (t = !0, e.getVisibleRows().forEach((function (e) {
                        if ("group" !== e.type) {
                            var t = e.getCell(i);
                            try {
                                e.getElement().removeChild(t.getElement())
                            } catch (e) {
                                console.warn("Could not removeColRight", e.message)
                            }
                        }
                    })), e.vDomPadRight += i.getWidth(), void e.rightCol--) : "break"
                }; ;) {
                    if ("break" === i()) break
                }
                t && (this.tableElement.style.paddingRight = this.vDomPadRight + "px")
            }
        }, {
            key: "removeColLeft", value: function () {
                for (var e = this, t = !1, i = function () {
                    var i = e.columns[e.leftCol];
                    return i && i.modules.vdomHoz.rightPos < e.vDomScrollPosLeft ? (t = !0, e.getVisibleRows().forEach((function (e) {
                        if ("group" !== e.type) {
                            var t = e.getCell(i);
                            try {
                                e.getElement().removeChild(t.getElement())
                            } catch (e) {
                                console.warn("Could not removeColLeft", e.message)
                            }
                        }
                    })), e.vDomPadLeft += i.getWidth(), void e.leftCol++) : "break"
                }; ;) {
                    if ("break" === i()) break
                }
                t && (this.tableElement.style.paddingLeft = this.vDomPadLeft + "px")
            }
        }, {
            key: "fitDataColActualWidthCheck", value: function (e) {
                var t, i;
                return e.modules.vdomHoz.fitDataCheck && (e.reinitializeWidth(), (i = (t = e.getWidth()) - e.modules.vdomHoz.width) && (e.modules.vdomHoz.rightPos += i, e.modules.vdomHoz.width = t, this.colPositionAdjust(this.columns.indexOf(e) + 1, this.columns.length, i)), e.modules.vdomHoz.fitDataCheck = !1), i
            }
        }, {
            key: "initializeRow", value: function (e) {
                if ("group" !== e.type) {
                    e.modules.vdomHoz = {leftCol: this.leftCol, rightCol: this.rightCol};
                    for (var t = this.leftCol; t <= this.rightCol; t++) {
                        var i = this.columns[t];
                        if (i && i.visible) {
                            var n = e.getCell(i);
                            e.getElement().appendChild(n.getElement()), n.cellRendered()
                        }
                    }
                }
            }
        }, {
            key: "reinitializeRow", value: function (e, t) {
                if ("group" !== e.type && (t || !e.modules.vdomHoz || e.modules.vdomHoz.leftCol !== this.leftCol || e.modules.vdomHoz.rightCol !== this.rightCol)) {
                    for (var i = e.getElement(); i.firstChild;) i.removeChild(i.firstChild);
                    this.initializeRow(e)
                }
            }
        }]), n
    }(R), M = function (i) {
        a(r, i);
        var n = c(r);

        function r(e) {
            var i;
            return t(this, r), (i = n.call(this, e)).blockHozScrollEvent = !1, i.headersElement = null, i.element = null, i.columns = [], i.columnsByIndex = [], i.columnsByField = {}, i.scrollLeft = 0, i.optionsList = new E(i.table, "column definition", b), i.renderer = null, i
        }

        return o(r, [{
            key: "initialize", value: function () {
                this.initializeRenderer(), this.headersElement = this.createHeadersElement(), this.element = this.createHeaderElement(), this.element.insertBefore(this.headersElement, this.element.firstChild), this.subscribe("scroll-horizontal", this.scrollHorizontal.bind(this))
            }
        }, {
            key: "initializeRenderer", value: function () {
                var e, t = {virtual: T, basic: x};
                (e = "string" == typeof this.table.options.renderHorizontal ? t[this.table.options.renderHorizontal] : this.table.options.renderHorizontal) ? (this.renderer = new e(this.table, this.element, this.tableElement), this.renderer.initialize()) : console.error("Unable to find matching renderer:", table.options.renderHorizontal)
            }
        }, {
            key: "createHeadersElement", value: function () {
                var e = document.createElement("div");
                return e.classList.add("tabulator-headers"), e.setAttribute("role", "row"), e
            }
        }, {
            key: "createHeaderElement", value: function () {
                var e = document.createElement("div");
                return e.classList.add("tabulator-header"), e.setAttribute("role", "rowgroup"), this.table.options.headerVisible || e.classList.add("tabulator-header-hidden"), e
            }
        }, {
            key: "getElement", value: function () {
                return this.element
            }
        }, {
            key: "getHeadersElement", value: function () {
                return this.headersElement
            }
        }, {
            key: "scrollHorizontal", value: function (e) {
                var t = 0, i = this.element.scrollWidth - this.table.element.clientWidth;
                this.element.scrollLeft = e, e > i ? (t = e - i, this.element.style.marginLeft = -t + "px") : this.element.style.marginLeft = 0, this.scrollLeft = e, this.renderer.scrollColumns(e)
            }
        }, {
            key: "generateColumnsFromRowData", value: function (t) {
                var i, n, o = [], a = this.table.options.autoColumnsDefinitions;
                if (t && t.length) {
                    for (var r in i = t[0]) {
                        var s = {field: r, title: r}, l = i[r];
                        switch (e(l)) {
                            case"undefined":
                                n = "string";
                                break;
                            case"boolean":
                                n = "boolean";
                                break;
                            case"object":
                                n = Array.isArray(l) ? "array" : "string";
                                break;
                            default:
                                n = isNaN(l) || "" === l ? l.match(/((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+$/i) ? "alphanum" : "string" : "number"
                        }
                        s.sorter = n, o.push(s)
                    }
                    if (a) switch (e(a)) {
                        case"function":
                            this.table.options.columns = a.call(this.table, o);
                            break;
                        case"object":
                            Array.isArray(a) ? o.forEach((function (e) {
                                var t = a.find((function (t) {
                                    return t.field === e.field
                                }));
                                t && Object.assign(e, t)
                            })) : o.forEach((function (e) {
                                a[e.field] && Object.assign(e, a[e.field])
                            })), this.table.options.columns = o
                    } else this.table.options.columns = o;
                    this.setColumns(this.table.options.columns)
                }
            }
        }, {
            key: "setColumns", value: function (e, t) {
                for (var i = this; this.headersElement.firstChild;) this.headersElement.removeChild(this.headersElement.firstChild);
                this.columns = [], this.columnsByIndex = [], this.columnsByField = {}, this.dispatch("columns-loading"), e.forEach((function (e, t) {
                    i._addColumn(e)
                })), this._reIndexColumns(), this.dispatch("columns-loaded"), this.renderer.rerenderColumns(!1, !0), this.redraw(!0)
            }
        }, {
            key: "_addColumn", value: function (e, t, i) {
                var n = new C(e, this), o = n.getElement(), a = i ? this.findColumnIndex(i) : i;
                if (i && a > -1) {
                    var r = i.getTopColumn(), s = this.columns.indexOf(r), l = r.getElement();
                    t ? (this.columns.splice(s, 0, n), l.parentNode.insertBefore(o, l)) : (this.columns.splice(s + 1, 0, n), l.parentNode.insertBefore(o, l.nextSibling))
                } else t ? (this.columns.unshift(n), this.headersElement.insertBefore(n.getElement(), this.headersElement.firstChild)) : (this.columns.push(n), this.headersElement.appendChild(n.getElement()));
                return n.columnRendered(), n
            }
        }, {
            key: "registerColumnField", value: function (e) {
                e.definition.field && (this.columnsByField[e.definition.field] = e)
            }
        }, {
            key: "registerColumnPosition", value: function (e) {
                this.columnsByIndex.push(e)
            }
        }, {
            key: "_reIndexColumns", value: function () {
                this.columnsByIndex = [], this.columns.forEach((function (e) {
                    e.reRegisterPosition()
                }))
            }
        }, {
            key: "verticalAlignHeaders", value: function () {
                var e = this, t = 0;
                this.columns.forEach((function (e) {
                    var i;
                    e.clearVerticalAlign(), (i = e.getHeight()) > t && (t = i)
                })), this.columns.forEach((function (i) {
                    i.verticalAlign(e.table.options.columnHeaderVertAlign, t)
                })), this.table.rowManager.adjustTableSize()
            }
        }, {
            key: "findColumn", value: function (t) {
                return "object" != e(t) ? this.columnsByField[t] || !1 : t instanceof C ? t : t instanceof v ? t._getSelf() || !1 : "undefined" != typeof HTMLElement && t instanceof HTMLElement && this.columns.find((function (e) {
                    return e.element === t
                })) || !1
            }
        }, {
            key: "getColumnByField", value: function (e) {
                return this.columnsByField[e]
            }
        }, {
            key: "getColumnsByFieldRoot", value: function (e) {
                var t = this, i = [];
                return Object.keys(this.columnsByField).forEach((function (n) {
                    n.split(".")[0] === e && i.push(t.columnsByField[n])
                })), i
            }
        }, {
            key: "getColumnByIndex", value: function (e) {
                return this.columnsByIndex[e]
            }
        }, {
            key: "getFirstVisibleColumn", value: function (e) {
                return (e = this.columnsByIndex.findIndex((function (e) {
                    return e.visible
                }))) > -1 && this.columnsByIndex[e]
            }
        }, {
            key: "getColumns", value: function () {
                return this.columns
            }
        }, {
            key: "findColumnIndex", value: function (e) {
                return this.columnsByIndex.findIndex((function (t) {
                    return e === t
                }))
            }
        }, {
            key: "getRealColumns", value: function () {
                return this.columnsByIndex
            }
        }, {
            key: "traverse", value: function (e) {
                this.columnsByIndex.forEach((function (t, i) {
                    e(t, i)
                }))
            }
        }, {
            key: "getDefinitions", value: function (e) {
                var t = [];
                return this.columnsByIndex.forEach((function (i) {
                    (!e || e && i.visible) && t.push(i.getDefinition())
                })), t
            }
        }, {
            key: "getDefinitionTree", value: function () {
                var e = [];
                return this.columns.forEach((function (t) {
                    e.push(t.getDefinition(!0))
                })), e
            }
        }, {
            key: "getComponents", value: function (e) {
                var t = [];
                return (e ? this.columns : this.columnsByIndex).forEach((function (e) {
                    t.push(e.getComponent())
                })), t
            }
        }, {
            key: "getWidth", value: function () {
                var e = 0;
                return this.columnsByIndex.forEach((function (t) {
                    t.visible && (e += t.getWidth())
                })), e
            }
        }, {
            key: "moveColumn", value: function (e, t, i) {
                this.moveColumnActual(e, t, i), t.element.parentNode.insertBefore(e.element, t.element), i && t.element.parentNode.insertBefore(t.element, e.element), this.verticalAlignHeaders(), this.table.rowManager.reinitialize()
            }
        }, {
            key: "moveColumnActual", value: function (e, t, i) {
                e.parent.isGroup ? this._moveColumnInArray(e.parent.columns, e, t, i) : this._moveColumnInArray(this.columns, e, t, i), this._moveColumnInArray(this.columnsByIndex, e, t, i, !0), this.renderer.rerenderColumns(!0), this.dispatch("column-moved", e, t, i), this.subscribedExternal("columnMoved") && this.dispatchExternal("columnMoved", e.getComponent(), this.table.columnManager.getComponents())
            }
        }, {
            key: "_moveColumnInArray", value: function (e, t, i, n, o) {
                var a, r = e.indexOf(t);
                r > -1 && (e.splice(r, 1), (a = e.indexOf(i)) > -1 ? n && (a += 1) : a = r, e.splice(a, 0, t), o && (this.chain("column-moving-rows", [t, i, n], null, []) || []).concat(this.table.rowManager.rows).forEach((function (e) {
                    if (e.cells.length) {
                        var t = e.cells.splice(r, 1)[0];
                        e.cells.splice(a, 0, t)
                    }
                })))
            }
        }, {
            key: "scrollToColumn", value: function (e, t, i) {
                var n = this, o = 0, a = 0, r = 0, s = e.getElement();
                return new Promise((function (l, u) {
                    if (void 0 === t && (t = n.table.options.scrollToColumnPosition), void 0 === i && (i = n.table.options.scrollToColumnIfVisible), e.visible) {
                        switch (t) {
                            case"middle":
                            case"center":
                                r = -n.element.clientWidth / 2;
                                break;
                            case"right":
                                r = s.clientWidth - n.headersElement.clientWidth
                        }
                        if (!i && (a = s.offsetLeft) > 0 && a + s.offsetWidth < n.element.clientWidth) return !1;
                        o = s.offsetLeft + r, o = Math.max(Math.min(o, n.table.rowManager.element.scrollWidth - n.table.rowManager.element.clientWidth), 0), n.table.rowManager.scrollHorizontal(o), n.scrollHorizontal(o), l()
                    } else console.warn("Scroll Error - Column not visible"), u("Scroll Error - Column not visible")
                }))
            }
        }, {
            key: "generateCells", value: function (e) {
                var t = [];
                return this.columnsByIndex.forEach((function (i) {
                    t.push(i.generateCell(e))
                })), t
            }
        }, {
            key: "getFlexBaseWidth", value: function () {
                var e = this.table.element.clientWidth, t = 0;
                return this.table.rowManager.element.scrollHeight > this.table.rowManager.element.clientHeight && (e -= this.table.rowManager.element.offsetWidth - this.table.rowManager.element.clientWidth), this.columnsByIndex.forEach((function (i) {
                    var n, o, a;
                    i.visible && (n = i.definition.width || 0, o = parseInt(i.minWidth), a = "string" == typeof n ? n.indexOf("%") > -1 ? e / 100 * parseInt(n) : parseInt(n) : n, t += a > o ? a : o)
                })), t
            }
        }, {
            key: "addColumn", value: function (e, t, i) {
                var n = this;
                return new Promise((function (o, a) {
                    var r = n._addColumn(e, t, i);
                    n._reIndexColumns(), n.dispatch("column-add", e, t, i), "fitColumns" != n.layoutMode() && r.reinitializeWidth(), n.redraw(!0), n.table.rowManager.reinitialize(), n.renderer.rerenderColumns(), o(r)
                }))
            }
        }, {
            key: "deregisterColumn", value: function (e) {
                var t, i = e.getField();
                i && delete this.columnsByField[i], (t = this.columnsByIndex.indexOf(e)) > -1 && this.columnsByIndex.splice(t, 1), (t = this.columns.indexOf(e)) > -1 && this.columns.splice(t, 1), this.verticalAlignHeaders(), this.redraw()
            }
        }, {
            key: "redraw", value: function (e) {
                k.elVisible(this.element) && this.verticalAlignHeaders(), e && (this.table.rowManager.resetScroll(), this.table.rowManager.reinitialize()), this.confirm("table-redrawing", e) || this.layoutRefresh(), this.dispatch("table-redraw", e), this.table.footerManager.redraw()
            }
        }]), r
    }(g), L = function () {
        function e(i) {
            return t(this, e), this._row = i, new Proxy(this, {
                get: function (e, t, i) {
                    return void 0 !== e[t] ? e[t] : e._row.table.componentFunctionBinder.handle("row", e._row, t)
                }
            })
        }

        return o(e, [{
            key: "getData", value: function (e) {
                return this._row.getData(e)
            }
        }, {
            key: "getElement", value: function () {
                return this._row.getElement()
            }
        }, {
            key: "getCells", value: function () {
                var e = [];
                return this._row.getCells().forEach((function (t) {
                    e.push(t.getComponent())
                })), e
            }
        }, {
            key: "getCell", value: function (e) {
                var t = this._row.getCell(e);
                return !!t && t.getComponent()
            }
        }, {
            key: "getIndex", value: function () {
                return this._row.getData("data")[this._row.table.options.index]
            }
        }, {
            key: "getPosition", value: function (e) {
                return this._row.table.rowManager.getRowPosition(this._row, e)
            }
        }, {
            key: "delete", value: function () {
                return this._row.delete()
            }
        }, {
            key: "scrollTo", value: function () {
                return this._row.table.rowManager.scrollToRow(this._row)
            }
        }, {
            key: "move", value: function (e, t) {
                this._row.moveToRow(e, t)
            }
        }, {
            key: "update", value: function (e) {
                return this._row.updateData(e)
            }
        }, {
            key: "normalizeHeight", value: function () {
                this._row.normalizeHeight(!0)
            }
        }, {
            key: "_getSelf", value: function () {
                return this._row
            }
        }, {
            key: "reformat", value: function () {
                return this._row.reinitialize()
            }
        }, {
            key: "getTable", value: function () {
                return this._row.table
            }
        }, {
            key: "getNextRow", value: function () {
                var e = this._row.nextRow();
                return e ? e.getComponent() : e
            }
        }, {
            key: "getPrevRow", value: function () {
                var e = this._row.prevRow();
                return e ? e.getComponent() : e
            }
        }]), e
    }(), D = function (e) {
        a(n, e);
        var i = c(n);

        function n(e, o) {
            var a, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "row";
            return t(this, n), (a = i.call(this, o.table)).parent = o, a.data = {}, a.type = r, a.element = !1, a.modules = {}, a.cells = [], a.height = 0, a.heightStyled = "", a.manualHeight = !1, a.outerHeight = 0, a.initialized = !1, a.heightInitialized = !1, a.component = null, a.created = !1, a.setData(e), a
        }

        return o(n, [{
            key: "create", value: function () {
                this.created || (this.created = !0, this.generateElement())
            }
        }, {
            key: "createElement", value: function () {
                var e = document.createElement("div");
                e.classList.add("tabulator-row"), e.setAttribute("role", "row"), this.element = e
            }
        }, {
            key: "getElement", value: function () {
                return this.create(), this.element
            }
        }, {
            key: "detachElement", value: function () {
                this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element)
            }
        }, {
            key: "generateElement", value: function () {
                this.createElement(), this.dispatch("row-init", this)
            }
        }, {
            key: "generateCells", value: function () {
                this.cells = this.table.columnManager.generateCells(this)
            }
        }, {
            key: "initialize", value: function (e) {
                if (this.create(), !this.initialized || e) {
                    for (this.deleteCells(); this.element.firstChild;) this.element.removeChild(this.element.firstChild);
                    this.dispatch("row-layout-before", this), this.generateCells(), this.initialized = !0, this.table.columnManager.renderer.renderRowCells(this), e && this.normalizeHeight(), this.dispatch("row-layout", this), this.table.options.rowFormatter && this.table.options.rowFormatter(this.getComponent()), this.dispatch("row-layout-after", this)
                } else this.table.columnManager.renderer.rerenderRowCells(this)
            }
        }, {
            key: "reinitializeHeight", value: function () {
                this.heightInitialized = !1, this.element && null !== this.element.offsetParent && this.normalizeHeight(!0)
            }
        }, {
            key: "deinitialize", value: function () {
                this.initialized = !1
            }
        }, {
            key: "deinitializeHeight", value: function () {
                this.heightInitialized = !1
            }
        }, {
            key: "reinitialize", value: function (e) {
                this.initialized = !1, this.heightInitialized = !1, this.manualHeight || (this.height = 0, this.heightStyled = ""), this.element && null !== this.element.offsetParent && this.initialize(!0), this.dispatch("row-relayout", this)
            }
        }, {
            key: "calcHeight", value: function (e) {
                var t, i = 0;
                this.table.options.rowHeight ? this.height = this.table.options.rowHeight : (t = this.table.options.resizableRows ? this.element.clientHeight : 0, this.cells.forEach((function (e) {
                    var t = e.getHeight();
                    t > i && (i = t)
                })), this.height = e ? Math.max(i, t) : this.manualHeight ? this.height : Math.max(i, t)), this.heightStyled = this.height ? this.height + "px" : "", this.outerHeight = this.element.offsetHeight
            }
        }, {
            key: "setCellHeight", value: function () {
                this.cells.forEach((function (e) {
                    e.setHeight()
                })), this.heightInitialized = !0
            }
        }, {
            key: "clearCellHeight", value: function () {
                this.cells.forEach((function (e) {
                    e.clearHeight()
                }))
            }
        }, {
            key: "normalizeHeight", value: function (e) {
                e && !this.table.options.rowHeight && this.clearCellHeight(), this.calcHeight(e), this.setCellHeight()
            }
        }, {
            key: "setHeight", value: function (e, t) {
                (this.height != e || t) && (this.manualHeight = !0, this.height = e, this.heightStyled = e ? e + "px" : "", this.setCellHeight(), this.outerHeight = this.element.offsetHeight)
            }
        }, {
            key: "getHeight", value: function () {
                return this.outerHeight
            }
        }, {
            key: "getWidth", value: function () {
                return this.element.offsetWidth
            }
        }, {
            key: "deleteCell", value: function (e) {
                var t = this.cells.indexOf(e);
                t > -1 && this.cells.splice(t, 1)
            }
        }, {
            key: "setData", value: function (e) {
                this.data = this.chain("row-data-init-before", [this, e], void 0, e), this.dispatch("row-data-init-after", this)
            }
        }, {
            key: "updateData", value: function (e) {
                var t, i = this, n = this.element && k.elVisible(this.element), o = {};
                return new Promise((function (a, r) {
                    for (var s in "string" == typeof e && (e = JSON.parse(e)), i.dispatch("row-data-save-before", i), i.subscribed("row-data-changing") && (o = Object.assign(o, i.data), o = Object.assign(o, e)), t = i.chain("row-data-changing", [i, o, e], null, e)) i.data[s] = t[s];
                    for (var s in i.dispatch("row-data-save-after", i), e) {
                        i.table.columnManager.getColumnsByFieldRoot(s).forEach((function (e) {
                            var o = i.getCell(e.getField());
                            if (o) {
                                var a = e.getFieldValue(t);
                                o.getValue() != a && (o.setValueProcessData(a), n && o.cellRendered())
                            }
                        }))
                    }
                    n ? (i.normalizeHeight(!0), i.table.options.rowFormatter && i.table.options.rowFormatter(i.getComponent())) : (i.initialized = !1, i.height = 0, i.heightStyled = ""), i.dispatch("row-data-changed", i, n, e), i.dispatchExternal("rowUpdated", i.getComponent()), i.subscribedExternal("dataChanged") && i.dispatchExternal("dataChanged", i.table.rowManager.getData()), a()
                }))
            }
        }, {
            key: "getData", value: function (e) {
                return e ? this.chain("row-data-retrieve", [this, e], null, this.data) : this.data
            }
        }, {
            key: "getCell", value: function (e) {
                return e = this.table.columnManager.findColumn(e), this.initialized || this.generateCells(), this.cells.find((function (t) {
                    return t.column === e
                }))
            }
        }, {
            key: "getCellIndex", value: function (e) {
                return this.cells.findIndex((function (t) {
                    return t === e
                }))
            }
        }, {
            key: "findCell", value: function (e) {
                return this.cells.find((function (t) {
                    return t.element === e
                }))
            }
        }, {
            key: "getCells", value: function () {
                return this.initialized || this.generateCells(), this.cells
            }
        }, {
            key: "nextRow", value: function () {
                return this.table.rowManager.nextDisplayRow(this, !0) || !1
            }
        }, {
            key: "prevRow", value: function () {
                return this.table.rowManager.prevDisplayRow(this, !0) || !1
            }
        }, {
            key: "moveToRow", value: function (e, t) {
                var i = this.table.rowManager.findRow(e);
                i ? (this.table.rowManager.moveRowActual(this, i, !t), this.table.rowManager.refreshActiveData("display", !1, !0)) : console.warn("Move Error - No matching row found:", e)
            }
        }, {
            key: "delete", value: function () {
                return this.dispatch("row-delete", this), this.deleteActual(), Promise.resolve()
            }
        }, {
            key: "deleteActual", value: function (e) {
                this.table.rowManager.getRowIndex(this);
                this.detatchModules(), this.table.rowManager.deleteRow(this, e), this.deleteCells(), this.initialized = !1, this.heightInitialized = !1, this.element = !1, this.dispatch("row-deleted", this)
            }
        }, {
            key: "detatchModules", value: function () {
                this.dispatch("row-deleting", this)
            }
        }, {
            key: "deleteCells", value: function () {
                for (var e = this.cells.length, t = 0; t < e; t++) this.cells[0].delete()
            }
        }, {
            key: "wipe", value: function () {
                if (this.detatchModules(), this.deleteCells(), this.element) {
                    for (; this.element.firstChild;) this.element.removeChild(this.element.firstChild);
                    this.element.parentNode && this.element.parentNode.removeChild(this.element)
                }
                this.element = !1, this.modules = {}
            }
        }, {
            key: "getGroup", value: function () {
                return this.modules.group || !1
            }
        }, {
            key: "getComponent", value: function () {
                return this.component || (this.component = new L(this)), this.component
            }
        }]), n
    }(g), S = function (e) {
        a(n, e);
        var i = c(n);

        function n(e) {
            var o;
            return t(this, n), (o = i.call(this, e)).verticalFillMode = "fill", o.scrollTop = 0, o.scrollLeft = 0, o.scrollTop = 0, o.scrollLeft = 0, o
        }

        return o(n, [{
            key: "clearRows", value: function () {
                for (var e = this.tableElement; e.firstChild;) e.removeChild(e.firstChild);
                e.scrollTop = 0, e.scrollLeft = 0, e.style.minWidth = "", e.style.minHeight = "", e.style.display = "", e.style.visibility = ""
            }
        }, {
            key: "renderRows", value: function () {
                var e = this, t = this.tableElement, i = !0;
                this.rows().forEach((function (n, o) {
                    e.styleRow(n, o), t.appendChild(n.getElement()), n.initialize(!0), "group" !== n.type && (i = !1)
                })), t.style.minWidth = i ? this.table.columnManager.getWidth() + "px" : ""
            }
        }, {
            key: "rerenderRows", value: function (e) {
                this.clearRows(), this.renderRows(), e && e()
            }
        }, {
            key: "scrollToRowNearestTop", value: function (e) {
                var t = k.elOffset(e.getElement()).top;
                return !(Math.abs(this.elementVertical.scrollTop - t) > Math.abs(this.elementVertical.scrollTop + this.elementVertical.clientHeight - t))
            }
        }, {
            key: "scrollToRow", value: function (e) {
                var t = e.getElement();
                this.elementVertical.scrollTop = k.elOffset(t).top - k.elOffset(this.elementVertical).top + this.elementVertical.scrollTop
            }
        }, {
            key: "visibleRows", value: function (e) {
                return this.rows()
            }
        }]), n
    }(R), P = function (e) {
        a(n, e);
        var i = c(n);

        function n(e) {
            var o;
            return t(this, n), (o = i.call(this, e)).verticalFillMode = "fill", o.scrollTop = 0, o.scrollLeft = 0, o.vDomRowHeight = 20, o.vDomTop = 0, o.vDomBottom = 0, o.vDomScrollPosTop = 0, o.vDomScrollPosBottom = 0, o.vDomTopPad = 0, o.vDomBottomPad = 0, o.vDomMaxRenderChain = 90, o.vDomWindowBuffer = 0, o.vDomWindowMinTotalRows = 20, o.vDomWindowMinMarginRows = 5, o.vDomTopNewRows = [], o.vDomBottomNewRows = [], o
        }

        return o(n, [{
            key: "clearRows", value: function () {
                for (var e = this.tableElement; e.firstChild;) e.removeChild(e.firstChild);
                e.style.paddingTop = "", e.style.paddingBottom = "", e.style.minHeight = "", e.style.display = "", e.style.visibility = "", this.elementVertical.scrollTop = 0, this.elementVertical.scrollLeft = 0, this.scrollTop = 0, this.scrollLeft = 0, this.vDomTop = 0, this.vDomBottom = 0, this.vDomTopPad = 0, this.vDomBottomPad = 0, this.vDomScrollPosTop = 0, this.vDomScrollPosBottom = 0
            }
        }, {
            key: "renderRows", value: function () {
                this._virtualRenderFill()
            }
        }, {
            key: "rerenderRows", value: function (e) {
                for (var t = this.elementVertical.scrollTop, i = !1, n = !1, o = this.table.rowManager.scrollLeft, a = this.rows(), r = this.vDomTop; r <= this.vDomBottom; r++) if (a[r]) {
                    var s = t - a[r].getElement().offsetTop;
                    if (!(!1 === n || Math.abs(s) < n)) break;
                    n = s, i = r
                }
                a.forEach((function (e) {
                    e.deinitializeHeight()
                })), e && e(), this._virtualRenderFill(!1 === i ? this.rows.length - 1 : i, !0, n || 0), this.scrollColumns(o)
            }
        }, {
            key: "scrollColumns", value: function (e) {
                this.table.rowManager.scrollHorizontal(e)
            }
        }, {
            key: "scrollRows", value: function (e, t) {
                var i = e - this.vDomScrollPosTop, n = e - this.vDomScrollPosBottom, o = 2 * this.vDomWindowBuffer,
                    a = this.rows();
                if (this.scrollTop = e, -i > o || n > o) {
                    var r = this.table.rowManager.scrollLeft;
                    this._virtualRenderFill(Math.floor(this.elementVertical.scrollTop / this.elementVertical.scrollHeight * a.length)), this.scrollColumns(r)
                } else t ? (i < 0 && this._addTopRow(a, -i), n < 0 && (this.vDomScrollHeight - this.scrollTop > this.vDomWindowBuffer ? this._removeBottomRow(a, -n) : this.vDomScrollPosBottom = this.scrollTop)) : (n >= 0 && this._addBottomRow(a, n), i >= 0 && (this.scrollTop > this.vDomWindowBuffer ? this._removeTopRow(a, i) : this.vDomScrollPosTop = this.scrollTop))
            }
        }, {
            key: "resize", value: function () {
                this.vDomWindowBuffer = this.table.options.renderVerticalBuffer || this.elementVertical.clientHeight
            }
        }, {
            key: "scrollToRowNearestTop", value: function (e) {
                var t = this.rows().indexOf(e);
                return !(Math.abs(this.vDomTop - t) > Math.abs(this.vDomBottom - t))
            }
        }, {
            key: "scrollToRow", value: function (e) {
                var t = this.rows().indexOf(e);
                t > -1 && this._virtualRenderFill(t, !0)
            }
        }, {
            key: "visibleRows", value: function (e) {
                var t = this.elementVertical.scrollTop, i = this.elementVertical.clientHeight + t, n = !1, o = 0, a = 0,
                    r = this.rows();
                if (e) o = this.vDomTop, a = this.vDomBottom; else for (var s = this.vDomTop; s <= this.vDomBottom; s++) if (r[s]) if (n) {
                    if (!(i - r[s].getElement().offsetTop >= 0)) break;
                    a = s
                } else if (t - r[s].getElement().offsetTop >= 0) o = s; else {
                    if (n = !0, !(i - r[s].getElement().offsetTop >= 0)) break;
                    a = s
                }
                return r.slice(o, a + 1)
            }
        }, {
            key: "_virtualRenderFill", value: function (e, t, i) {
                var n = this.tableElement, o = this.elementVertical, a = 0, r = 0, s = 0, l = 0, u = 0, c = this.rows(),
                    h = c.length, d = this.elementVertical.clientHeight;
                if (i = i || 0, e = e || 0) {
                    for (; n.firstChild;) n.removeChild(n.firstChild);
                    (s = (h - e + 1) * this.vDomRowHeight) < d && (e -= Math.ceil((d - s) / this.vDomRowHeight)) < 0 && (e = 0), e -= a = Math.min(Math.max(Math.floor(this.vDomWindowBuffer / this.vDomRowHeight), this.vDomWindowMinMarginRows), e)
                } else this.clear();
                if (h && k.elVisible(this.elementVertical)) {
                    for (this.vDomTop = e, this.vDomBottom = e - 1; (r <= d + this.vDomWindowBuffer || u < this.vDomWindowMinTotalRows) && this.vDomBottom < h - 1;) {
                        var m, p = this.vDomBottom + 1, f = c[p];
                        this.styleRow(f, p), n.appendChild(f.getElement()), f.initialize(), f.heightInitialized || f.normalizeHeight(!0), m = f.getHeight(), u < a ? l += m : r += m, m > this.vDomWindowBuffer && (this.vDomWindowBuffer = 2 * m), this.vDomBottom++, u++
                    }
                    e ? (this.vDomTopPad = t ? this.vDomRowHeight * this.vDomTop + i : this.scrollTop - l, this.vDomBottomPad = this.vDomBottom == h - 1 ? 0 : Math.max(this.vDomScrollHeight - this.vDomTopPad - r - l, 0)) : (this.vDomTopPad = 0, this.vDomRowHeight = Math.floor((r + l) / u), this.vDomBottomPad = this.vDomRowHeight * (h - this.vDomBottom - 1), this.vDomScrollHeight = l + r + this.vDomBottomPad - d), n.style.paddingTop = this.vDomTopPad + "px", n.style.paddingBottom = this.vDomBottomPad + "px", t && (this.scrollTop = this.vDomTopPad + l + i - (this.elementVertical.scrollWidth > this.elementVertical.clientWidth ? this.elementVertical.offsetHeight - d : 0)), this.scrollTop = Math.min(this.scrollTop, this.elementVertical.scrollHeight - d), this.elementVertical.scrollWidth > this.elementVertical.offsetWidth && t && (this.scrollTop += this.elementVertical.offsetHeight - d), this.vDomScrollPosTop = this.scrollTop, this.vDomScrollPosBottom = this.scrollTop, o.scrollTop = this.scrollTop, this.dispatch("render-virtual-fill")
                }
            }
        }, {
            key: "_addTopRow", value: function (e, t) {
                for (var i = this.tableElement, n = [], o = 0, a = this.vDomTop - 1, r = 0; this.vDomTop;) {
                    var s = e[a], l = void 0, u = void 0;
                    if (!(s && r < this.vDomMaxRenderChain)) break;
                    if (l = s.getHeight() || this.vDomRowHeight, u = s.initialized, !(t >= l)) break;
                    this.styleRow(s, a), i.insertBefore(s.getElement(), i.firstChild), s.initialized && s.heightInitialized || n.push(s), s.initialize(), u || (l = s.getElement().offsetHeight) > this.vDomWindowBuffer && (this.vDomWindowBuffer = 2 * l), t -= l, o += l, this.vDomTop--, a--, r++
                }
                for (var c = 0, h = n; c < h.length; c++) {
                    h[c].clearCellHeight()
                }
                this._quickNormalizeRowHeight(n), o && (this.vDomTopPad -= o, this.vDomTopPad < 0 && (this.vDomTopPad = a * this.vDomRowHeight), a < 1 && (this.vDomTopPad = 0), i.style.paddingTop = this.vDomTopPad + "px", this.vDomScrollPosTop -= o)
            }
        }, {
            key: "_removeTopRow", value: function (e, t) {
                for (var i = [], n = 0, o = 0; ;) {
                    var a = e[this.vDomTop], r = void 0;
                    if (!(a && o < this.vDomMaxRenderChain)) break;
                    if (!(t >= (r = a.getHeight() || this.vDomRowHeight))) break;
                    this.vDomTop++, t -= r, n += r, i.push(a), o++
                }
                for (var s = 0, l = i; s < l.length; s++) {
                    var u = l[s].getElement();
                    u.parentNode && u.parentNode.removeChild(u)
                }
                n && (this.vDomTopPad += n, this.tableElement.style.paddingTop = this.vDomTopPad + "px", this.vDomScrollPosTop += this.vDomTop ? n : n + this.vDomWindowBuffer)
            }
        }, {
            key: "_addBottomRow", value: function (e, t) {
                for (var i = this.tableElement, n = [], o = 0, a = this.vDomBottom + 1, r = 0; ;) {
                    var s = e[a], l = void 0, u = void 0;
                    if (!(s && r < this.vDomMaxRenderChain)) break;
                    if (l = s.getHeight() || this.vDomRowHeight, u = s.initialized, !(t >= l)) break;
                    this.styleRow(s, a), i.appendChild(s.getElement()), s.initialized && s.heightInitialized || n.push(s), s.initialize(), u || (l = s.getElement().offsetHeight) > this.vDomWindowBuffer && (this.vDomWindowBuffer = 2 * l), t -= l, o += l, this.vDomBottom++, a++, r++
                }
                for (var c = 0, h = n; c < h.length; c++) {
                    h[c].clearCellHeight()
                }
                this._quickNormalizeRowHeight(n), o && (this.vDomBottomPad -= o, (this.vDomBottomPad < 0 || a == e.length - 1) && (this.vDomBottomPad = 0), i.style.paddingBottom = this.vDomBottomPad + "px", this.vDomScrollPosBottom += o)
            }
        }, {
            key: "_removeBottomRow", value: function (e, t) {
                for (var i = [], n = 0, o = 0; ;) {
                    var a = e[this.vDomBottom], r = void 0;
                    if (!(a && o < this.vDomMaxRenderChain)) break;
                    if (!(t >= (r = a.getHeight() || this.vDomRowHeight))) break;
                    this.vDomBottom--, t -= r, n += r, i.push(a), o++
                }
                for (var s = 0, l = i; s < l.length; s++) {
                    var u = l[s].getElement();
                    u.parentNode && u.parentNode.removeChild(u)
                }
                n && (this.vDomBottomPad += n, this.vDomBottomPad < 0 && (this.vDomBottomPad = 0), this.tableElement.style.paddingBottom = this.vDomBottomPad + "px", this.vDomScrollPosBottom -= n)
            }
        }, {
            key: "_quickNormalizeRowHeight", value: function (e) {
                var t, i = f(e);
                try {
                    for (i.s(); !(t = i.n()).done;) {
                        t.value.calcHeight()
                    }
                } catch (e) {
                    i.e(e)
                } finally {
                    i.f()
                }
                var n, o = f(e);
                try {
                    for (o.s(); !(n = o.n()).done;) {
                        n.value.setCellHeight()
                    }
                } catch (e) {
                    o.e(e)
                } finally {
                    o.f()
                }
            }
        }]), n
    }(R), z = function (i) {
        a(r, i);
        var n = c(r);

        function r(e) {
            var i;
            return t(this, r), (i = n.call(this, e)).element = i.createHolderElement(), i.tableElement = i.createTableElement(), i.heightFixer = i.createTableElement(), i.placeholder = null, i.placeholderContents = null, i.firstRender = !1, i.renderMode = "virtual", i.fixedHeight = !1, i.rows = [], i.activeRowsPipeline = [], i.activeRows = [], i.activeRowsCount = 0, i.displayRows = [], i.displayRowsCount = 0, i.scrollTop = 0, i.scrollLeft = 0, i.rowNumColumn = !1, i.redrawBlock = !1, i.redrawBlockRestoreConfig = !1, i.redrawBlockRenderInPosition = !1, i.dataPipeline = [], i.displayPipeline = [], i.renderer = null, i
        }

        return o(r, [{
            key: "createHolderElement", value: function () {
                var e = document.createElement("div");
                return e.classList.add("tabulator-tableholder"), e.setAttribute("tabindex", 0), e
            }
        }, {
            key: "createTableElement", value: function () {
                var e = document.createElement("div");
                return e.classList.add("tabulator-table"), e.setAttribute("role", "rowgroup"), e
            }
        }, {
            key: "initializePlaceholder", value: function () {
                if ("string" == typeof this.table.options.placeholder) {
                    var e = document.createElement("div");
                    e.classList.add("tabulator-placeholder");
                    var t = document.createElement("div");
                    t.classList.add("tabulator-placeholder-contents"), t.innerHTML = this.table.options.placeholder, e.appendChild(t), this.placeholderContents = t, this.placeholder = e
                }
            }
        }, {
            key: "getElement", value: function () {
                return this.element
            }
        }, {
            key: "getTableElement", value: function () {
                return this.tableElement
            }
        }, {
            key: "getRowPosition", value: function (e, t) {
                return t ? this.activeRows.indexOf(e) : this.rows.indexOf(e)
            }
        }, {
            key: "initialize", value: function () {
                var e = this;
                this.initializePlaceholder(), this.initializeRenderer(), this.element.appendChild(this.tableElement), this.firstRender = !0, this.element.addEventListener("scroll", (function () {
                    var t = e.element.scrollLeft, i = e.scrollLeft > t, n = e.element.scrollTop, o = e.scrollTop > n;
                    e.scrollLeft != t && (e.scrollLeft = t, e.dispatch("scroll-horizontal", t, i), e.dispatchExternal("scrollHorizontal", t, i), e._positionPlaceholder()), e.scrollTop != n && (e.scrollTop = n, e.renderer.scrollRows(n, o), e.dispatch("scroll-vertical", n, o), e.dispatchExternal("scrollVertical", n, o))
                }))
            }
        }, {
            key: "findRow", value: function (t) {
                var i = this;
                return "object" != e(t) ? null != t && (this.rows.find((function (e) {
                    return e.data[i.table.options.index] == t
                })) || !1) : t instanceof D ? t : t instanceof L ? t._getSelf() || !1 : "undefined" != typeof HTMLElement && t instanceof HTMLElement && this.rows.find((function (e) {
                    return e.getElement() === t
                })) || !1
            }
        }, {
            key: "getRowFromDataObject", value: function (e) {
                return this.rows.find((function (t) {
                    return t.data === e
                })) || !1
            }
        }, {
            key: "getRowFromPosition", value: function (e, t) {
                return t ? this.activeRows[e] : this.rows[e]
            }
        }, {
            key: "scrollToRow", value: function (e, t, i) {
                return this.renderer.scrollToRowPosition(e, t, i)
            }
        }, {
            key: "setData", value: function (e, t, i) {
                var n = this;
                return new Promise((function (o, a) {
                    t && n.getDisplayRows().length ? n.table.options.pagination ? n._setDataActual(e, !0) : n.reRenderInPosition((function () {
                        n._setDataActual(e)
                    })) : (n.table.options.autoColumns && i && n.table.initialized && n.table.columnManager.generateColumnsFromRowData(e), n.resetScroll(), n._setDataActual(e)), o()
                }))
            }
        }, {
            key: "_setDataActual", value: function (t, i) {
                var n = this;
                this.dispatchExternal("dataProcessing", t), this._wipeElements(), Array.isArray(t) ? (this.dispatch("data-processing", t), t.forEach((function (t, i) {
                    if (t && "object" === e(t)) {
                        var o = new D(t, n);
                        n.rows.push(o)
                    } else console.warn("Data Loading Warning - Invalid row data detected and ignored, expecting object but received:", t)
                })), this.refreshActiveData(!1, !1, i), this.dispatch("data-processed", t), this.dispatchExternal("dataProcessed", t)) : console.error("Data Loading Error - Unable to process data due to invalid data type \nExpecting: array \nReceived: ", e(t), "\nData:     ", t)
            }
        }, {
            key: "_wipeElements", value: function () {
                this.dispatch("rows-wipe"), this.rows.forEach((function (e) {
                    e.wipe()
                })), this.rows = [], this.activeRows = [], this.activeRowsPipeline = [], this.activeRowsCount = 0, this.displayRows = [], this.displayRowsCount = 0, this.adjustTableSize()
            }
        }, {
            key: "deleteRow", value: function (e, t) {
                var i = this.rows.indexOf(e), n = this.activeRows.indexOf(e);
                n > -1 && this.activeRows.splice(n, 1), i > -1 && this.rows.splice(i, 1), this.setActiveRows(this.activeRows), this.displayRowIterator((function (t) {
                    var i = t.indexOf(e);
                    i > -1 && t.splice(i, 1)
                })), t || this.reRenderInPosition(), this.regenerateRowNumbers(), this.dispatchExternal("rowDeleted", e.getComponent()), this.displayRowsCount || this._showPlaceholder(), this.subscribedExternal("dataChanged") && this.dispatchExternal("dataChanged", this.getData())
            }
        }, {
            key: "addRow", value: function (e, t, i, n) {
                return this.addRowActual(e, t, i, n)
            }
        }, {
            key: "addRows", value: function (e, t, i) {
                var n = this, o = [];
                return new Promise((function (a, r) {
                    t = n.findAddRowPos(t), Array.isArray(e) || (e = [e]), e.length, (void 0 === i && t || void 0 !== i && !t) && e.reverse(), e.forEach((function (a, r) {
                        var s = n.addRow(a, t, i, !0);
                        o.push(s), n.dispatch("row-added", s, e, t, i)
                    })), n.refreshActiveData(!1, !1, !0), n.regenerateRowNumbers(), o.length && n._clearPlaceholder(), a(o)
                }))
            }
        }, {
            key: "findAddRowPos", value: function (e) {
                return void 0 === e && (e = this.table.options.addRowPos), "pos" === e && (e = !0), "bottom" === e && (e = !1), e
            }
        }, {
            key: "addRowActual", value: function (e, t, i, n) {
                var o, a, r = e instanceof D ? e : new D(e || {}, this), s = this.findAddRowPos(t), l = -1;
                return i || (a = this.chain("row-adding-position", [r, s], null, {
                    index: i,
                    top: s
                }), i = a.index, s = a.top), void 0 !== i && (i = this.findRow(i)), (i = this.chain("row-adding-index", [r, i, s], null, i)) && (l = this.rows.indexOf(i)), i && l > -1 ? (o = this.activeRows.indexOf(i), this.displayRowIterator((function (e) {
                    var t = e.indexOf(i);
                    t > -1 && e.splice(s ? t : t + 1, 0, r)
                })), o > -1 && this.activeRows.splice(s ? o : o + 1, 0, r), this.rows.splice(s ? l : l + 1, 0, r)) : s ? (this.displayRowIterator((function (e) {
                    e.unshift(r)
                })), this.activeRows.unshift(r), this.rows.unshift(r)) : (this.displayRowIterator((function (e) {
                    e.push(r)
                })), this.activeRows.push(r), this.rows.push(r)), this.setActiveRows(this.activeRows), this.dispatchExternal("rowAdded", r.getComponent()), this.subscribedExternal("dataChanged") && this.dispatchExternal("dataChanged", this.table.rowManager.getData()), n || this.reRenderInPosition(), r
            }
        }, {
            key: "moveRow", value: function (e, t, i) {
                this.dispatch("row-move", e, t, i), this.moveRowActual(e, t, i), this.regenerateRowNumbers(), this.dispatch("row-moved", e, t, i), this.dispatchExternal("rowMoved", e.getComponent())
            }
        }, {
            key: "moveRowActual", value: function (e, t, i) {
                var n = this;
                this.moveRowInArray(this.rows, e, t, i), this.moveRowInArray(this.activeRows, e, t, i), this.displayRowIterator((function (o) {
                    n.moveRowInArray(o, e, t, i)
                })), this.dispatch("row-moving", e, t, i)
            }
        }, {
            key: "moveRowInArray", value: function (e, t, i, n) {
                var o, a, r;
                if (t !== i && ((o = e.indexOf(t)) > -1 && (e.splice(o, 1), (a = e.indexOf(i)) > -1 ? n ? e.splice(a + 1, 0, t) : e.splice(a, 0, t) : e.splice(o, 0, t)), e === this.getDisplayRows())) {
                    r = a > o ? a : o + 1;
                    for (var s = o < a ? o : a; s <= r; s++) e[s] && this.styleRow(e[s], s)
                }
            }
        }, {
            key: "clearData", value: function () {
                this.setData([])
            }
        }, {
            key: "getRowIndex", value: function (e) {
                return this.findRowIndex(e, this.rows)
            }
        }, {
            key: "getDisplayRowIndex", value: function (e) {
                var t = this.getDisplayRows().indexOf(e);
                return t > -1 && t
            }
        }, {
            key: "nextDisplayRow", value: function (e, t) {
                var i = this.getDisplayRowIndex(e), n = !1;
                return !1 !== i && i < this.displayRowsCount - 1 && (n = this.getDisplayRows()[i + 1]), !n || n instanceof D && "row" == n.type ? n : this.nextDisplayRow(n, t)
            }
        }, {
            key: "prevDisplayRow", value: function (e, t) {
                var i = this.getDisplayRowIndex(e), n = !1;
                return i && (n = this.getDisplayRows()[i - 1]), !t || !n || n instanceof D && "row" == n.type ? n : this.prevDisplayRow(n, t)
            }
        }, {
            key: "findRowIndex", value: function (e, t) {
                var i;
                return !!((e = this.findRow(e)) && (i = t.indexOf(e)) > -1) && i
            }
        }, {
            key: "getData", value: function (e, t) {
                var i = [];
                return this.getRows(e).forEach((function (e) {
                    "row" == e.type && i.push(e.getData(t || "data"))
                })), i
            }
        }, {
            key: "getComponents", value: function (e) {
                var t = [];
                return this.getRows(e).forEach((function (e) {
                    t.push(e.getComponent())
                })), t
            }
        }, {
            key: "getDataCount", value: function (e) {
                return this.getRows(e).length
            }
        }, {
            key: "scrollHorizontal", value: function (e) {
                this.scrollLeft = e, this.element.scrollLeft = e, this.dispatch("scroll-horizontal", e)
            }
        }, {
            key: "registerDataPipelineHandler", value: function (e, t) {
                void 0 !== t ? (this.dataPipeline.push({
                    handler: e,
                    priority: t
                }), this.dataPipeline.sort((function (e, t) {
                    return e.priority - t.priority
                }))) : console.error("Data pipeline handlers must have a priority in order to be registered")
            }
        }, {
            key: "registerDisplayPipelineHandler", value: function (e, t) {
                void 0 !== t ? (this.displayPipeline.push({
                    handler: e,
                    priority: t
                }), this.displayPipeline.sort((function (e, t) {
                    return e.priority - t.priority
                }))) : console.error("Display pipeline handlers must have a priority in order to be registered")
            }
        }, {
            key: "refreshActiveData", value: function (e, t, i) {
                var n = this.table, o = "", a = 0, r = ["all", "dataPipeline", "display", "displayPipeline", "end"];
                if ("function" == typeof e) if ((a = this.dataPipeline.findIndex((function (t) {
                    return t.handler === e
                }))) > -1) o = "dataPipeline", t && (a == this.dataPipeline.length - 1 ? o = "display" : a++); else {
                    if (!((a = this.displayPipeline.findIndex((function (t) {
                        return t.handler === e
                    }))) > -1)) return void console.error("Unable to refresh data, invalid handler provided", e);
                    o = "displayPipeline", t && (a == this.displayPipeline.length - 1 ? o = "end" : a++)
                } else o = e || "all", a = 0;
                this.redrawBlock ? (!this.redrawBlockRestoreConfig || this.redrawBlockRestoreConfig && (this.redrawBlockRestoreConfig.stage === o && a < this.redrawBlockRestoreConfig.index || r.indexOf(o) < r.indexOf(this.redrawBlockRestoreConfig.stage))) && (this.redrawBlockRestoreConfig = {
                    handler: e,
                    skipStage: t,
                    renderInPosition: i,
                    stage: o,
                    index: a
                }) : (k.elVisible(this.element) ? i ? this.reRenderInPosition(this.refreshPipelines.bind(this, e, o, a, i)) : (this.refreshPipelines(e, o, a, i), e || this.table.columnManager.renderer.renderColumns(), this.renderTable(), n.options.layoutColumnsOnNewData && this.table.columnManager.redraw(!0)) : this.refreshPipelines(e, o, a, i), this.dispatch("data-refreshed"))
            }
        }, {
            key: "refreshPipelines", value: function (e, t, i, n) {
                switch (this.dispatch("data-refreshing"), e || (this.activeRowsPipeline[0] = this.rows.slice(0)), t) {
                    case"all":
                    case"dataPipeline":
                        for (var o = i; o < this.dataPipeline.length; o++) {
                            var a = this.dataPipeline[o].handler(this.activeRowsPipeline[o].slice(0));
                            this.activeRowsPipeline[o + 1] = a || this.activeRowsPipeline[o].slice(0)
                        }
                        this.setActiveRows(this.activeRowsPipeline[this.dataPipeline.length]), this.regenerateRowNumbers();
                    case"display":
                        i = 0, this.resetDisplayRows();
                    case"displayPipeline":
                        for (var r = i; r < this.displayPipeline.length; r++) {
                            var s = this.displayPipeline[r].handler((r ? this.getDisplayRows(r - 1) : this.activeRows).slice(0), n);
                            this.setDisplayRows(s || this.getDisplayRows(r - 1).slice(0), r)
                        }
                }
            }
        }, {
            key: "regenerateRowNumbers", value: function () {
                var e = this;
                this.rowNumColumn && this.activeRows.forEach((function (t) {
                    var i = t.getCell(e.rowNumColumn);
                    i && i._generateContents()
                }))
            }
        }, {
            key: "setActiveRows", value: function (e) {
                this.activeRows = e, this.activeRowsCount = this.activeRows.length
            }
        }, {
            key: "resetDisplayRows", value: function () {
                this.displayRows = [], this.displayRows.push(this.activeRows.slice(0)), this.displayRowsCount = this.displayRows[0].length
            }
        }, {
            key: "getNextDisplayIndex", value: function () {
                return this.displayRows.length
            }
        }, {
            key: "setDisplayRows", value: function (e, t) {
                var i = !0;
                return t && void 0 !== this.displayRows[t] ? (this.displayRows[t] = e, i = !0) : (this.displayRows.push(e), i = t = this.displayRows.length - 1), t == this.displayRows.length - 1 && (this.displayRowsCount = this.displayRows[this.displayRows.length - 1].length), i
            }
        }, {
            key: "getDisplayRows", value: function (e) {
                return void 0 === e ? this.displayRows.length ? this.displayRows[this.displayRows.length - 1] : [] : this.displayRows[e] || []
            }
        }, {
            key: "getVisibleRows", value: function (e, t) {
                var i = Object.assign([], this.renderer.visibleRows(!t));
                return e && (i = this.chain("rows-visible", [t], i, i)), i
            }
        }, {
            key: "displayRowIterator", value: function (e) {
                this.activeRowsPipeline.forEach(e), this.displayRows.forEach(e), this.displayRowsCount = this.displayRows[this.displayRows.length - 1].length
            }
        }, {
            key: "getRows", value: function (e) {
                var t;
                switch (e) {
                    case"active":
                        t = this.activeRows;
                        break;
                    case"display":
                        t = this.table.rowManager.getDisplayRows();
                        break;
                    case"visible":
                        t = this.getVisibleRows(!1, !0);
                        break;
                    default:
                        t = this.chain("rows-retrieve", e, null, this.rows) || this.rows
                }
                return t
            }
        }, {
            key: "reRenderInPosition", value: function (e) {
                this.redrawBlock ? e ? e() : this.redrawBlockRenderInPosition = !0 : (this.dispatchExternal("renderStarted"), this.renderer.rerenderRows(e), this.dispatchExternal("renderComplete"))
            }
        }, {
            key: "initializeRenderer", value: function () {
                var e, t = {virtual: P, basic: S};
                (e = "string" == typeof this.table.options.renderVertical ? t[this.table.options.renderVertical] : this.table.options.renderVertical) ? (this.renderer = new e(this.table, this.element, this.tableElement), this.renderer.initialize(), this.table.element.clientHeight || this.table.options.height ? this.fixedHeight = !0 : this.fixedHeight = !1) : console.error("Unable to find matching renderer:", table.options.renderVertical)
            }
        }, {
            key: "getRenderMode", value: function () {
                return this.renderMode
            }
        }, {
            key: "renderTable", value: function () {
                this.dispatchExternal("renderStarted"), this.element.scrollTop = 0, this._clearTable(), this.displayRowsCount ? (this.renderer.renderRows(), this.firstRender && (this.firstRender = !1, this.layoutRefresh())) : this.renderEmptyScroll(), this.fixedHeight || this.adjustTableSize(), this.dispatch("table-layout"), this.displayRowsCount || this._showPlaceholder(), this.dispatchExternal("renderComplete")
            }
        }, {
            key: "renderEmptyScroll", value: function () {
                this.placeholder ? this.tableElement.style.display = "none" : this.tableElement.style.minWidth = this.table.columnManager.getWidth() + "px"
            }
        }, {
            key: "_clearTable", value: function () {
                this.tableElement;
                this._clearPlaceholder(), this.scrollTop = 0, this.scrollLeft = 0, this.renderer.clearRows()
            }
        }, {
            key: "_showPlaceholder", value: function () {
                this.placeholder && (this.placeholder.setAttribute("tabulator-render-mode", this.renderMode), this.getElement().appendChild(this.placeholder), this._positionPlaceholder())
            }
        }, {
            key: "_clearPlaceholder", value: function () {
                this.placeholder && this.placeholder.parentNode && this.placeholder.parentNode.removeChild(this.placeholder)
            }
        }, {
            key: "_positionPlaceholder", value: function () {
                this.placeholder && this.placeholder.parentNode && (this.placeholder.style.width = this.table.columnManager.getWidth() + "px", this.placeholderContents.style.width = this.table.rowManager.element.clientWidth + "px", this.placeholderContents.style.marginLeft = this.scrollLeft + "px")
            }
        }, {
            key: "styleRow", value: function (e, t) {
                var i = e.getElement();
                t % 2 ? (i.classList.add("tabulator-row-even"), i.classList.remove("tabulator-row-odd")) : (i.classList.add("tabulator-row-odd"), i.classList.remove("tabulator-row-even"))
            }
        }, {
            key: "normalizeHeight", value: function () {
                this.activeRows.forEach((function (e) {
                    e.normalizeHeight()
                }))
            }
        }, {
            key: "adjustTableSize", value: function () {
                var e = this.element.clientHeight;
                if ("fill" === this.renderer.verticalFillMode) {
                    var t = Math.floor(this.table.columnManager.getElement().getBoundingClientRect().height + (this.table.footerManager && this.table.footerManager.active && !this.table.footerManager.external ? this.table.footerManager.getElement().getBoundingClientRect().height : 0));
                    this.fixedHeight ? (this.element.style.minHeight = "calc(100% - " + t + "px)", this.element.style.height = "calc(100% - " + t + "px)", this.element.style.maxHeight = "calc(100% - " + t + "px)") : (this.element.style.height = "", this.element.style.height = this.table.element.clientHeight - t + "px", this.element.scrollTop = this.scrollTop), this.renderer.resize(), this.fixedHeight || e == this.element.clientHeight || (this.subscribed("table-resize") ? this.dispatch("table-resize") : this.redraw())
                }
                this._positionPlaceholder()
            }
        }, {
            key: "reinitialize", value: function () {
                this.rows.forEach((function (e) {
                    e.reinitialize(!0)
                }))
            }
        }, {
            key: "blockRedraw", value: function () {
                this.redrawBlock = !0, this.redrawBlockRestoreConfig = !1
            }
        }, {
            key: "restoreRedraw", value: function () {
                this.redrawBlock = !1, this.redrawBlockRestoreConfig ? (this.refreshActiveData(this.redrawBlockRestoreConfig.handler, this.redrawBlockRestoreConfig.skipStage, this.redrawBlockRestoreConfig.renderInPosition), this.redrawBlockRestoreConfig = !1) : this.redrawBlockRenderInPosition && this.reRenderInPosition(), this.redrawBlockRenderInPosition = !1
            }
        }, {
            key: "redraw", value: function (e) {
                var t = this.scrollLeft;
                this.adjustTableSize(), this.table.tableWidth = this.table.element.clientWidth, e ? this.renderTable() : (this.reRenderInPosition(), this.scrollHorizontal(t))
            }
        }, {
            key: "resetScroll", value: function () {
                if (this.element.scrollLeft = 0, this.element.scrollTop = 0, "ie" === this.table.browser) {
                    var e = document.createEvent("Event");
                    e.initEvent("scroll", !1, !0), this.element.dispatchEvent(e)
                } else this.element.dispatchEvent(new Event("scroll"))
            }
        }]), r
    }(g), F = function (i) {
        a(r, i);
        var n = c(r);

        function r(e) {
            var i;
            return t(this, r), (i = n.call(this, e)).active = !1, i.element = i.createElement(), i.containerElement = i.createContainerElement(), i.external = !1, i
        }

        return o(r, [{
            key: "initialize", value: function () {
                this.initializeElement()
            }
        }, {
            key: "createElement", value: function () {
                var e = document.createElement("div");
                return e.classList.add("tabulator-footer"), e
            }
        }, {
            key: "createContainerElement", value: function () {
                var e = document.createElement("div");
                return e.classList.add("tabulator-footer-contents"), this.element.appendChild(e), e
            }
        }, {
            key: "initializeElement", value: function () {
                if (this.table.options.footerElement) switch (e(this.table.options.footerElement)) {
                    case"string":
                        "<" === this.table.options.footerElement[0] ? this.containerElement.innerHTML = this.table.options.footerElement : (this.external = !0, this.containerElement = document.querySelector(this.table.options.footerElement));
                        break;
                    default:
                        this.element = this.table.options.footerElement
                }
            }
        }, {
            key: "getElement", value: function () {
                return this.element
            }
        }, {
            key: "append", value: function (e) {
                this.activate(), this.containerElement.appendChild(e), this.table.rowManager.adjustTableSize()
            }
        }, {
            key: "prepend", value: function (e) {
                this.activate(), this.element.insertBefore(e, this.element.firstChild), this.table.rowManager.adjustTableSize()
            }
        }, {
            key: "remove", value: function (e) {
                e.parentNode.removeChild(e), this.deactivate()
            }
        }, {
            key: "deactivate", value: function (e) {
                this.element.firstChild && !e || (this.external || this.element.parentNode.removeChild(this.element), this.active = !1)
            }
        }, {
            key: "activate", value: function () {
                this.active || (this.active = !0, this.external || (this.table.element.appendChild(this.getElement()), this.table.element.style.display = ""))
            }
        }, {
            key: "redraw", value: function () {
                this.dispatch("footer-redraw")
            }
        }]), r
    }(g), H = function (e) {
        a(n, e);
        var i = c(n);

        function n(e) {
            var o;
            return t(this, n), (o = i.call(this, e)).el = null, o.abortClasses = ["tabulator-headers", "tabulator-table"], o.previousTargets = {}, o.listeners = ["click", "dblclick", "contextmenu", "mouseenter", "mouseleave", "mouseover", "mouseout", "mousemove", "touchstart", "touchend"], o.componentMap = {
                "tabulator-cell": "cell",
                "tabulator-row": "row",
                "tabulator-group": "group",
                "tabulator-col": "column"
            }, o.pseudoTrackers = {
                row: {subscriber: null, target: null},
                cell: {subscriber: null, target: null},
                group: {subscriber: null, target: null},
                column: {subscriber: null, target: null}
            }, o.pseudoTracking = !1, o
        }

        return o(n, [{
            key: "initialize", value: function () {
                this.el = this.table.element, this.buildListenerMap(), this.bindSubscriptionWatchers()
            }
        }, {
            key: "buildListenerMap", value: function () {
                var e = {};
                this.listeners.forEach((function (t) {
                    e[t] = {handler: null, components: []}
                })), this.listeners = e
            }
        }, {
            key: "bindPseudoEvents", value: function () {
                var e = this;
                Object.keys(this.pseudoTrackers).forEach((function (t) {
                    e.pseudoTrackers[t].subscriber = e.pseudoMouseEnter.bind(e, t), e.subscribe(t + "-mouseover", e.pseudoTrackers[t].subscriber)
                })), this.pseudoTracking = !0
            }
        }, {
            key: "pseudoMouseEnter", value: function (e, t, i) {
                this.pseudoTrackers[e].target !== i && (this.pseudoTrackers[e].target && this.dispatch(e + "-mouseleave", t, this.pseudoTrackers[e].target), this.pseudoMouseLeave(e, t), this.pseudoTrackers[e].target = i, this.dispatch(e + "-mouseenter", t, i))
            }
        }, {
            key: "pseudoMouseLeave", value: function (e, t) {
                var i = this, n = Object.keys(this.pseudoTrackers), o = {row: ["cell"], cell: ["row"]};
                (n = n.filter((function (t) {
                    var i = o[e];
                    return t !== e && (!i || i && !i.includes(t))
                }))).forEach((function (e) {
                    var n = i.pseudoTrackers[e].target;
                    i.pseudoTrackers[e].target && (i.dispatch(e + "-mouseleave", t, n), i.pseudoTrackers[e].target = null)
                }))
            }
        }, {
            key: "bindSubscriptionWatchers", value: function () {
                for (var e = Object.keys(this.listeners), t = 0, i = Object.values(this.componentMap); t < i.length; t++) {
                    var n, o = i[t], a = f(e);
                    try {
                        for (a.s(); !(n = a.n()).done;) {
                            var r = n.value, s = o + "-" + r;
                            this.subscriptionChange(s, this.subscriptionChanged.bind(this, o, r))
                        }
                    } catch (e) {
                        a.e(e)
                    } finally {
                        a.f()
                    }
                }
                this.subscribe("table-destroy", this.clearWatchers.bind(this))
            }
        }, {
            key: "subscriptionChanged", value: function (e, t, i) {
                var n = this.listeners[t].components, o = n.indexOf(e), a = !1;
                i ? -1 === o && (n.push(e), a = !0) : this.subscribed(e + "-" + t) || o > -1 && (n.splice(o, 1), a = !0), "mouseenter" !== t && "mouseleave" !== t || this.pseudoTracking || this.bindPseudoEvents(), a && this.updateEventListeners()
            }
        }, {
            key: "updateEventListeners", value: function () {
                for (var e in this.listeners) {
                    var t = this.listeners[e];
                    t.components.length ? t.handler || (t.handler = this.track.bind(this, e), this.el.addEventListener(e, t.handler)) : t.handler && (this.el.removeEventListener(e, t.handler), t.handler = null)
                }
            }
        }, {
            key: "track", value: function (e, t) {
                var i = t.composedPath && t.composedPath() || t.path, n = this.findTargets(i);
                n = this.bindComponents(e, n), this.triggerEvents(e, t, n), !this.pseudoTracking || "mouseover" != e && "mouseleave" != e || Object.keys(n).length || this.pseudoMouseLeave("none", t)
            }
        }, {
            key: "findTargets", value: function (e) {
                var t, i = this, n = {}, o = Object.keys(this.componentMap), a = f(e);
                try {
                    for (a.s(); !(t = a.n()).done;) {
                        var r = t.value, s = r.classList ? d(r.classList) : [];
                        if (s.filter((function (e) {
                            return i.abortClasses.includes(e)
                        })).length) break;
                        var l, u = f(s.filter((function (e) {
                            return o.includes(e)
                        })));
                        try {
                            for (u.s(); !(l = u.n()).done;) {
                                var c = l.value;
                                n[this.componentMap[c]] = r
                            }
                        } catch (e) {
                            u.e(e)
                        } finally {
                            u.f()
                        }
                    }
                } catch (e) {
                    a.e(e)
                } finally {
                    a.f()
                }
                return n.group && n.group === n.row && delete n.row, n
            }
        }, {
            key: "bindComponents", value: function (e, t) {
                var i, n = this, o = Object.keys(t).reverse(), a = this.listeners[e], r = {}, s = f(o);
                try {
                    var l = function () {
                        var e = i.value, o = void 0, s = t[e], l = n.previousTargets[e];
                        if (l && l.target === s) o = l.component; else switch (e) {
                            case"row":
                            case"group":
                                if (a.components.includes("row") || a.components.includes("cell") || a.components.includes("group")) o = n.table.rowManager.getVisibleRows(!0).find((function (e) {
                                    return e.getElement() === s
                                })), t.row && t.row.parentNode && t.row.parentNode.closest(".tabulator-row") && (t[e] = !1);
                                break;
                            case"column":
                                a.components.includes("column") && (o = n.table.columnManager.findColumn(s));
                                break;
                            case"cell":
                                a.components.includes("cell") && (t.row instanceof D ? o = t.row.findCell(s) : t.row && console.warn("Event Target Lookup Error - The row this cell is attached to cannot be found, has the table been reinitialized without being destroyed first?"))
                        }
                        o && (t[e] = o, r[e] = {target: s, component: o})
                    };
                    for (s.s(); !(i = s.n()).done;) l()
                } catch (e) {
                    s.e(e)
                } finally {
                    s.f()
                }
                return this.previousTargets = r, t
            }
        }, {
            key: "triggerEvents", value: function (e, t, i) {
                var n = this.listeners[e];
                for (var o in i) i[o] && n.components.includes(o) && this.dispatch(o + "-" + e, t, i[o])
            }
        }, {
            key: "clearWatchers", value: function () {
                for (var e in this.listeners) {
                    var t = this.listeners[e];
                    t.handler && (this.el.removeEventListener(e, t.handler), t.handler = null)
                }
            }
        }]), n
    }(g), _ = function () {
        function e(i) {
            t(this, e), this.table = i, this.bindings = {}
        }

        return o(e, [{
            key: "bind", value: function (e, t, i) {
                this.bindings[e] || (this.bindings[e] = {}), this.bindings[e][t] ? console.warn("Unable to bind component handler, a matching function name is already bound", e, t, i) : this.bindings[e][t] = i
            }
        }, {
            key: "handle", value: function (e, t, i) {
                if (this.bindings[e] && this.bindings[e][i] && "function" == typeof this.bindings[e][i].bind) return this.bindings[e][i].bind(null, t);
                "then" === i || "string" != typeof i || i.startsWith("_") || console.error("The " + e + " component does not have a " + i + " function, have you checked that you have the correct Tabulator module installed?")
            }
        }]), e
    }(), O = function (i) {
        a(r, i);
        var n = c(r);

        function r(e) {
            var i;
            return t(this, r), (i = n.call(this, e)).requestOrder = 0, i.loading = !1, i
        }

        return o(r, [{
            key: "initialize", value: function () {
            }
        }, {
            key: "load", value: function (t, i, n, o, a, r) {
                var s = this, l = ++this.requestOrder;
                return this.dispatchExternal("dataLoading", t), !t || 0 != t.indexOf("{") && 0 != t.indexOf("[") || (t = JSON.parse(t)), this.confirm("data-loading", [t, i, n, a]) ? (this.loading = !0, a || this.alertLoader(), i = this.chain("data-params", [t, n, a], i || {}, i || {}), i = this.mapParams(i, this.table.options.dataSendParams), this.chain("data-load", [t, i, n, a], !1, Promise.resolve([])).then((function (t) {
                    Array.isArray(t) || "object" != e(t) || (t = s.mapParams(t, s.objectInvert(s.table.options.dataReceiveParams)));
                    var i = s.chain("data-loaded", t, null, t);
                    l == s.requestOrder ? (s.clearAlert(), !1 !== i && (s.dispatchExternal("dataLoaded", i), s.table.rowManager.setData(i, o, void 0 === r ? !o : r))) : console.warn("Data Load Response Blocked - An active data load request was blocked by an attempt to change table data while the request was being made")
                })).catch((function (e) {
                    console.error("Data Load Error: ", e), s.dispatchExternal("dataLoadError", e), a || s.alertError(), setTimeout((function () {
                        s.clearAlert()
                    }), s.table.options.dataLoaderErrorTimeout)
                })).finally((function () {
                    s.loading = !1
                }))) : (this.dispatchExternal("dataLoaded", t), t || (t = []), this.table.rowManager.setData(t, o, void 0 === r ? !o : r), Promise.resolve())
            }
        }, {
            key: "mapParams", value: function (e, t) {
                var i = {};
                for (var n in e) i[t.hasOwnProperty(n) ? t[n] : n] = e[n];
                return i
            }
        }, {
            key: "objectInvert", value: function (e) {
                var t = {};
                for (var i in e) t[e[i]] = i;
                return t
            }
        }, {
            key: "blockActiveLoad", value: function () {
                this.requestOrder++
            }
        }, {
            key: "alertLoader", value: function () {
                ("function" == typeof this.table.options.dataLoader ? this.table.options.dataLoader() : this.table.options.dataLoader) && this.table.alertManager.alert(this.table.options.dataLoaderLoading || this.langText("data|loading"))
            }
        }, {
            key: "alertError", value: function () {
                this.table.alertManager.alert(this.table.options.dataLoaderError || this.langText("data|error"), "error")
            }
        }, {
            key: "clearAlert", value: function () {
                this.table.alertManager.clear()
            }
        }]), r
    }(g), A = function () {
        function e(i, n, o) {
            t(this, e), this.table = i, this.events = {}, this.optionsList = n || {}, this.subscriptionNotifiers = {}, this.dispatch = o ? this._debugDispatch.bind(this) : this._dispatch.bind(this), this.debug = o
        }

        return o(e, [{
            key: "subscriptionChange", value: function (e, t) {
                this.subscriptionNotifiers[e] || (this.subscriptionNotifiers[e] = []), this.subscriptionNotifiers[e].push(t), this.subscribed(e) && this._notifiySubscriptionChange(e, !0)
            }
        }, {
            key: "subscribe", value: function (e, t) {
                this.events[e] || (this.events[e] = []), this.events[e].push(t), this._notifiySubscriptionChange(e, !0)
            }
        }, {
            key: "unsubscribe", value: function (e, t) {
                var i;
                if (this.events[e]) {
                    if (t) {
                        if (!((i = this.events[e].findIndex((function (e) {
                            return e === t
                        }))) > -1)) return void console.warn("Cannot remove event, no matching event found:", e, t);
                        this.events[e].splice(i, 1)
                    } else delete this.events[e];
                    this._notifiySubscriptionChange(e, !1)
                } else console.warn("Cannot remove event, no events set on:", e)
            }
        }, {
            key: "subscribed", value: function (e) {
                return this.events[e] && this.events[e].length
            }
        }, {
            key: "_notifiySubscriptionChange", value: function (e, t) {
                var i = this.subscriptionNotifiers[e];
                i && i.forEach((function (e) {
                    e(t)
                }))
            }
        }, {
            key: "_dispatch", value: function () {
                var e, t = this, i = Array.from(arguments), n = i.shift();
                return this.events[n] && this.events[n].forEach((function (n, o) {
                    var a = n.apply(t.table, i);
                    o || (e = a)
                })), e
            }
        }, {
            key: "_debugDispatch", value: function () {
                var e, t = Array.from(arguments), i = t[0];
                (t[0] = "ExternalEvent:" + t[0], !0 === this.debug || this.debug.includes(i)) && (e = console).log.apply(e, d(t));
                return this._dispatch.apply(this, arguments)
            }
        }]), e
    }(), B = function () {
        function e(i) {
            t(this, e), this.events = {}, this.subscriptionNotifiers = {}, this.dispatch = i ? this._debugDispatch.bind(this) : this._dispatch.bind(this), this.chain = i ? this._debugChain.bind(this) : this._chain.bind(this), this.confirm = i ? this._debugConfirm.bind(this) : this._confirm.bind(this), this.debug = i
        }

        return o(e, [{
            key: "subscriptionChange", value: function (e, t) {
                this.subscriptionNotifiers[e] || (this.subscriptionNotifiers[e] = []), this.subscriptionNotifiers[e].push(t), this.subscribed(e) && this._notifiySubscriptionChange(e, !0)
            }
        }, {
            key: "subscribe", value: function (e, t) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e4;
                this.events[e] || (this.events[e] = []), this.events[e].push({
                    callback: t,
                    priority: i
                }), this.events[e].sort((function (e, t) {
                    return e.priority - t.priority
                })), this._notifiySubscriptionChange(e, !0)
            }
        }, {
            key: "unsubscribe", value: function (e, t) {
                var i;
                if (this.events[e]) {
                    if (t) {
                        if (!((i = this.events[e].findIndex((function (e) {
                            return e.callback === t
                        }))) > -1)) return void console.warn("Cannot remove event, no matching event found:", e, t);
                        this.events[e].splice(i, 1)
                    }
                    this._notifiySubscriptionChange(e, !1)
                } else console.warn("Cannot remove event, no events set on:", e)
            }
        }, {
            key: "subscribed", value: function (e) {
                return this.events[e] && this.events[e].length
            }
        }, {
            key: "_chain", value: function (e, t, i, n) {
                var o = this, a = i;
                return Array.isArray(t) || (t = [t]), this.subscribed(e) ? (this.events[e].forEach((function (e, i) {
                    a = e.callback.apply(o, t.concat([a]))
                })), a) : "function" == typeof n ? n() : n
            }
        }, {
            key: "_confirm", value: function (e, t) {
                var i = this, n = !1;
                return Array.isArray(t) || (t = [t]), this.subscribed(e) && this.events[e].forEach((function (e, o) {
                    e.callback.apply(i, t) && (n = !0)
                })), n
            }
        }, {
            key: "_notifiySubscriptionChange", value: function (e, t) {
                var i = this.subscriptionNotifiers[e];
                i && i.forEach((function (e) {
                    e(t)
                }))
            }
        }, {
            key: "_dispatch", value: function () {
                var e = this, t = Array.from(arguments), i = t.shift();
                this.events[i] && this.events[i].forEach((function (i) {
                    i.callback.apply(e, t)
                }))
            }
        }, {
            key: "_debugDispatch", value: function () {
                var e, t = Array.from(arguments), i = t[0];
                (t[0] = "InternalEvent:" + i, !0 === this.debug || this.debug.includes(i)) && (e = console).log.apply(e, d(t));
                return this._dispatch.apply(this, arguments)
            }
        }, {
            key: "_debugChain", value: function () {
                var e, t = Array.from(arguments), i = t[0];
                (t[0] = "InternalEvent:" + i, !0 === this.debug || this.debug.includes(i)) && (e = console).log.apply(e, d(t));
                return this._chain.apply(this, arguments)
            }
        }, {
            key: "_debugConfirm", value: function () {
                var e, t = Array.from(arguments), i = t[0];
                (t[0] = "InternalEvent:" + i, !0 === this.debug || this.debug.includes(i)) && (e = console).log.apply(e, d(t));
                return this._confirm.apply(this, arguments)
            }
        }]), e
    }(), I = function () {
        function e() {
            t(this, e)
        }

        return o(e, null, [{
            key: "register", value: function (t) {
                e.tables.push(t)
            }
        }, {
            key: "deregister", value: function (t) {
                var i = e.tables.indexOf(t);
                i > -1 && e.tables.splice(i, 1)
            }
        }, {
            key: "lookupTable", value: function (t, i) {
                var n, o, a = [];
                if ("string" == typeof t) {
                    if ((n = document.querySelectorAll(t)).length) for (var r = 0; r < n.length; r++) (o = e.matchElement(n[r])) && a.push(o)
                } else "undefined" != typeof HTMLElement && t instanceof HTMLElement || t instanceof Y ? (o = e.matchElement(t)) && a.push(o) : Array.isArray(t) ? t.forEach((function (t) {
                    a = a.concat(e.lookupTable(t))
                })) : i || console.warn("Table Connection Error - Invalid Selector", t);
                return a
            }
        }, {
            key: "matchElement", value: function (t) {
                return e.tables.find((function (e) {
                    return t instanceof Y ? e === t : e.element === t
                }))
            }
        }]), e
    }();
    I.tables = [];
    var N = function (e) {
        a(n, e);
        var i = c(n);

        function n(e, o, a) {
            var r;
            return t(this, n), (r = i.call(this, e)).element = o, r.container = r._lookupContainer(), r.parent = a, r.reversedX = !1, r.childPopup = null, r.blurable = !1, r.blurCallback = null, r.renderedCallback = null, r.visible = !1, r.element.classList.add("tabulator-popup-container"), r.blurEvent = r.hide.bind(l(r), !1), r.escEvent = r._escapeCheck.bind(l(r)), r.destroyBinding = r.tableDestroyed, r.destroyed = !1, r
        }

        return o(n, [{
            key: "tableDestroyed", value: function () {
                this.destroyed = !0, this.hide(!0)
            }
        }, {
            key: "_lookupContainer", value: function () {
                var e = this.table.options.popupContainer;
                return "string" == typeof e ? (e = document.querySelector(e)) || console.warn("Menu Error - no container element found matching selector:", this.table.options.popupContainer, "(defaulting to document body)") : !0 === e && (e = this.table.element), e && !this._checkContainerIsParent(e) && (e = !1, console.warn("Menu Error - container element does not contain this table:", this.table.options.popupContainer, "(defaulting to document body)")), e || (e = document.body), e
            }
        }, {
            key: "_checkContainerIsParent", value: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.table.element;
                return e === t || !!t.parentNode && this._checkContainerIsParent(e, t.parentNode)
            }
        }, {
            key: "renderCallback", value: function (e) {
                this.renderedCallback = e
            }
        }, {
            key: "containerEventCoords", value: function (e) {
                var t = !(e instanceof MouseEvent), i = t ? e.touches[0].pageX : e.pageX,
                    n = t ? e.touches[0].pageY : e.pageY;
                if (this.container !== document.body) {
                    var o = k.elOffset(this.container);
                    i -= o.left, n -= o.top
                }
                return {x: i, y: n}
            }
        }, {
            key: "elementPositionCoords", value: function (e) {
                var t, i, n, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "right",
                    a = k.elOffset(e);
                switch (this.container !== document.body && (t = k.elOffset(this.container), a.left -= t.left, a.top -= t.top), o) {
                    case"right":
                        i = a.left + e.offsetWidth, n = a.top - 1;
                        break;
                    case"bottom":
                        i = a.left, n = a.top + e.offsetHeight
                }
                return {x: i, y: n, offset: a}
            }
        }, {
            key: "show", value: function (e, t) {
                var i, n, o, a, r;
                return this.destroyed || this.table.destroyed || (e instanceof HTMLElement ? (o = e, a = (r = this.elementPositionCoords(e, t)).offset, i = r.x, n = r.y) : "number" == typeof e ? (a = {
                    top: 0,
                    left: 0
                }, i = e, n = t) : (i = (r = this.containerEventCoords(e)).x, n = r.y, this.reversedX = !1), this.element.style.top = n + "px", this.element.style.left = i + "px", this.container.appendChild(this.element), "function" == typeof this.renderedCallback && this.renderedCallback(), this._fitToScreen(i, n, o, a, t), this.visible = !0, this.subscribe("table-destroy", this.destroyBinding), this.element.addEventListener("mousedown", (function (e) {
                    e.stopPropagation()
                }))), this
            }
        }, {
            key: "_fitToScreen", value: function (e, t, i, n, o) {
                var a = this.container === document.body ? document.documentElement.scrollTop : this.container.scrollTop;
                if ((e + this.element.offsetWidth >= this.container.offsetWidth || this.reversedX) && (this.element.style.left = "", this.element.style.right = i ? this.container.offsetWidth - n.left + "px" : this.container.offsetWidth - e + "px", this.reversedX = !0), t + this.element.offsetHeight > Math.max(this.container.offsetHeight, a ? this.container.scrollHeight : 0)) if (i) switch (o) {
                    case"bottom":
                        this.element.style.top = parseInt(this.element.style.top) - this.element.offsetHeight - i.offsetHeight - 1 + "px";
                        break;
                    default:
                        this.element.style.top = parseInt(this.element.style.top) - this.element.offsetHeight + i.offsetHeight + 1 + "px"
                } else this.element.style.top = parseInt(this.element.style.top) - this.element.offsetHeight + "px"
            }
        }, {
            key: "isVisible", value: function () {
                return this.visible
            }
        }, {
            key: "hideOnBlur", value: function (e) {
                var t = this;
                return this.blurable = !0, this.visible && (setTimeout((function () {
                    t.table.rowManager.element.addEventListener("scroll", t.blurEvent), t.subscribe("cell-editing", t.blurEvent), document.body.addEventListener("click", t.blurEvent), document.body.addEventListener("contextmenu", t.blurEvent), document.body.addEventListener("mousedown", t.blurEvent), window.addEventListener("resize", t.blurEvent), document.body.addEventListener("keydown", t.escEvent)
                }), 100), this.blurCallback = e), this
            }
        }, {
            key: "_escapeCheck", value: function (e) {
                27 == e.keyCode && this.hide()
            }
        }, {
            key: "hide", value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return this.visible && (this.blurable && (document.body.removeEventListener("keydown", this.escEvent), document.body.removeEventListener("click", this.blurEvent), document.body.removeEventListener("contextmenu", this.blurEvent), document.body.removeEventListener("mousedown", this.blurEvent), window.removeEventListener("resize", this.blurEvent), this.table.rowManager.element.removeEventListener("scroll", this.blurEvent), this.unsubscribe("cell-editing", this.blurEvent)), this.childPopup && this.childPopup.hide(), this.parent && (this.parent.childPopup = null), this.element.parentNode && this.element.parentNode.removeChild(this.element), this.visible = !1, this.blurCallback && !e && this.blurCallback(), this.unsubscribe("table-destroy", this.destroyBinding)), this
            }
        }, {
            key: "child", value: function (e) {
                return this.childPopup && this.childPopup.hide(), this.childPopup = new n(this.table, e, this), this.childPopup
            }
        }]), n
    }(g), V = function (e) {
        a(n, e);
        var i = c(n);

        function n(e, o) {
            var a;
            return t(this, n), (a = i.call(this, e))._handler = null, a
        }

        return o(n, [{
            key: "initialize", value: function () {
            }
        }, {
            key: "registerTableOption", value: function (e, t) {
                this.table.optionsList.register(e, t)
            }
        }, {
            key: "registerColumnOption", value: function (e, t) {
                this.table.columnManager.optionsList.register(e, t)
            }
        }, {
            key: "registerTableFunction", value: function (e, t) {
                var i = this;
                void 0 === this.table[e] ? this.table[e] = function () {
                    return i.table.initGuard(e), t.apply(void 0, arguments)
                } : console.warn("Unable to bind table function, name already in use", e)
            }
        }, {
            key: "registerComponentFunction", value: function (e, t, i) {
                return this.table.componentFunctionBinder.bind(e, t, i)
            }
        }, {
            key: "registerDataHandler", value: function (e, t) {
                this.table.rowManager.registerDataPipelineHandler(e, t), this._handler = e
            }
        }, {
            key: "registerDisplayHandler", value: function (e, t) {
                this.table.rowManager.registerDisplayPipelineHandler(e, t), this._handler = e
            }
        }, {
            key: "refreshData", value: function (e, t) {
                t || (t = this._handler), t && this.table.rowManager.refreshActiveData(t, !1, e)
            }
        }, {
            key: "footerAppend", value: function (e) {
                return this.table.footerManager.append(e)
            }
        }, {
            key: "footerPrepend", value: function (e) {
                return this.table.footerManager.prepend(e)
            }
        }, {
            key: "footerRemove", value: function (e) {
                return this.table.footerManager.remove(e)
            }
        }, {
            key: "popup", value: function (e, t) {
                return new N(this.table, e, t)
            }
        }, {
            key: "alert", value: function (e, t) {
                return this.table.alertManager.alert(e, t)
            }
        }, {
            key: "clearAlert", value: function () {
                return this.table.alertManager.clear()
            }
        }]), n
    }(g);

    function W(e) {
        e.forEach((function (e) {
            e.reinitializeWidth()
        })), this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", !0) && this.table.modules.responsiveLayout.update()
    }

    var j = {
        fitData: function (e) {
            this.table.columnManager.renderer.reinitializeColumnWidths(e), this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", !0) && this.table.modules.responsiveLayout.update()
        }, fitDataFill: W, fitDataTable: W, fitDataStretch: function (e) {
            var t = this, i = 0, n = this.table.rowManager.element.clientWidth, o = 0, a = !1;
            e.forEach((function (e, n) {
                e.widthFixed || e.reinitializeWidth(), (t.table.options.responsiveLayout ? e.modules.responsive.visible : e.visible) && (a = e), e.visible && (i += e.getWidth())
            })), a ? (o = n - i + a.getWidth(), this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", !0) && (a.setWidth(0), this.table.modules.responsiveLayout.update()), o > 0 ? a.setWidth(o) : a.reinitializeWidth()) : this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", !0) && this.table.modules.responsiveLayout.update()
        }, fitColumns: function (e) {
            var t, i, n = this.table.element.clientWidth, o = 0, a = 0, r = 0, s = [], l = [], u = 0, c = 0;

            function h(e) {
                return "string" == typeof e ? e.indexOf("%") > -1 ? n / 100 * parseInt(e) : parseInt(e) : e
            }

            function d(e, t, i, n) {
                var o = [], a = 0, s = 0, l = 0, u = r, c = 0, m = 0, p = [];

                function f(e) {
                    return i * (e.column.definition.widthGrow || 1)
                }

                function g(e) {
                    return h(e.width) - i * (e.column.definition.widthShrink || 0)
                }

                return e.forEach((function (e, a) {
                    var r = n ? g(e) : f(e);
                    e.column.minWidth >= r ? o.push(e) : e.column.maxWidth && e.column.maxWidth < r ? (e.width = e.column.maxWidth, t -= e.column.maxWidth, (u -= n ? e.column.definition.widthShrink || 1 : e.column.definition.widthGrow || 1) && (i = Math.floor(t / u))) : (p.push(e), m += n ? e.column.definition.widthShrink || 1 : e.column.definition.widthGrow || 1)
                })), o.length ? (o.forEach((function (e) {
                    a += n ? e.width - e.column.minWidth : e.column.minWidth, e.width = e.column.minWidth
                })), c = (s = t - a) - (l = m ? Math.floor(s / m) : s) * m, c += d(p, s, l, n)) : (c = m ? t - Math.floor(t / m) * m : t, p.forEach((function (e) {
                    e.width = n ? g(e) : f(e)
                }))), c
            }

            this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", !0) && this.table.modules.responsiveLayout.update(), this.table.rowManager.element.scrollHeight > this.table.rowManager.element.clientHeight && (n -= this.table.rowManager.element.offsetWidth - this.table.rowManager.element.clientWidth), e.forEach((function (e) {
                var t, i, n;
                e.visible && (t = e.definition.width, i = parseInt(e.minWidth), t ? (n = h(t), o += n > i ? n : i, e.definition.widthShrink && (l.push({
                    column: e,
                    width: n > i ? n : i
                }), u += e.definition.widthShrink)) : (s.push({column: e, width: 0}), r += e.definition.widthGrow || 1))
            })), a = n - o, t = Math.floor(a / r), c = d(s, a, t, !1), s.length && c > 0 && (s[s.length - 1].width += +c), s.forEach((function (e) {
                a -= e.width
            })), (i = Math.abs(c) + a) > 0 && u && (c = d(l, i, Math.floor(i / u), !0)), l.length && (l[l.length - 1].width -= c), s.forEach((function (e) {
                e.column.setWidth(e.width)
            })), l.forEach((function (e) {
                e.column.setWidth(e.width)
            }))
        }
    }, G = function (e) {
        a(n, e);
        var i = c(n);

        function n(e) {
            var o;
            return t(this, n), (o = i.call(this, e, "layout")).mode = null, o.registerTableOption("layout", "fitData"), o.registerTableOption("layoutColumnsOnNewData", !1), o.registerColumnOption("widthGrow"), o.registerColumnOption("widthShrink"), o
        }

        return o(n, [{
            key: "initialize", value: function () {
                var e = this.table.options.layout;
                n.modes[e] ? this.mode = e : (console.warn("Layout Error - invalid mode set, defaulting to 'fitData' : " + e), this.mode = "fitData"), this.table.element.setAttribute("tabulator-layout", this.mode)
            }
        }, {
            key: "getMode", value: function () {
                return this.mode
            }
        }, {
            key: "layout", value: function () {
                this.dispatch("layout-refreshing"), n.modes[this.mode].call(this, this.table.columnManager.columnsByIndex), this.dispatch("layout-refreshed")
            }
        }]), n
    }(V);
    G.moduleName = "layout", G.modes = j;
    var U = function (i) {
        a(r, i);
        var n = c(r);

        function r(e) {
            var i;
            return t(this, r), (i = n.call(this, e)).locale = "default", i.lang = !1, i.bindings = {}, i.langList = {}, i.registerTableOption("locale", !1), i.registerTableOption("langs", {}), i
        }

        return o(r, [{
            key: "initialize", value: function () {
                for (var e in this.langList = k.deepClone(r.langs), !1 !== this.table.options.columnDefaults.headerFilterPlaceholder && this.setHeaderFilterPlaceholder(this.table.options.columnDefaults.headerFilterPlaceholder), this.table.options.langs) this.installLang(e, this.table.options.langs[e]);
                this.setLocale(this.table.options.locale), this.registerTableFunction("setLocale", this.setLocale.bind(this)), this.registerTableFunction("getLocale", this.getLocale.bind(this)), this.registerTableFunction("getLang", this.getLang.bind(this))
            }
        }, {
            key: "setHeaderFilterPlaceholder", value: function (e) {
                this.langList.default.headerFilters.default = e
            }
        }, {
            key: "setHeaderFilterColumnPlaceholder", value: function (e, t) {
                this.langList.default.headerFilters.columns[e] = t, this.lang && !this.lang.headerFilters.columns[e] && (this.lang.headerFilters.columns[e] = t)
            }
        }, {
            key: "installLang", value: function (e, t) {
                this.langList[e] ? this._setLangProp(this.langList[e], t) : this.langList[e] = t
            }
        }, {
            key: "_setLangProp", value: function (t, i) {
                for (var n in i) t[n] && "object" == e(t[n]) ? this._setLangProp(t[n], i[n]) : t[n] = i[n]
            }
        }, {
            key: "setLocale", value: function (t) {
                if (!0 === (t = t || "default") && navigator.language && (t = navigator.language.toLowerCase()), t && !this.langList[t]) {
                    var i = t.split("-")[0];
                    this.langList[i] ? (console.warn("Localization Error - Exact matching locale not found, using closest match: ", t, i), t = i) : (console.warn("Localization Error - Matching locale not found, using default: ", t), t = "default")
                }
                this.locale = t, this.lang = k.deepClone(this.langList.default || {}), "default" != t && function t(i, n) {
                    for (var o in i) "object" == e(i[o]) ? (n[o] || (n[o] = {}), t(i[o], n[o])) : n[o] = i[o]
                }(this.langList[t], this.lang), this.dispatchExternal("localized", this.locale, this.lang), this._executeBindings()
            }
        }, {
            key: "getLocale", value: function (e) {
                return this.locale
            }
        }, {
            key: "getLang", value: function (e) {
                return e ? this.langList[e] : this.lang
            }
        }, {
            key: "getText", value: function (e, t) {
                var i = (e = t ? e + "|" + t : e).split("|");
                return this._getLangElement(i, this.locale) || ""
            }
        }, {
            key: "_getLangElement", value: function (e, t) {
                var i = this.lang;
                return e.forEach((function (e) {
                    var t;
                    i && (t = i[e], i = void 0 !== t && t)
                })), i
            }
        }, {
            key: "bind", value: function (e, t) {
                this.bindings[e] || (this.bindings[e] = []), this.bindings[e].push(t), t(this.getText(e), this.lang)
            }
        }, {
            key: "_executeBindings", value: function () {
                var e = this, t = function (t) {
                    e.bindings[t].forEach((function (i) {
                        i(e.getText(t), e.lang)
                    }))
                };
                for (var i in this.bindings) t(i)
            }
        }]), r
    }(V);
    U.moduleName = "localize", U.langs = {
        default: {
            groups: {item: "item", items: "items"},
            columns: {},
            data: {loading: "Loading", error: "Error"},
            pagination: {
                page_size: "Page Size",
                page_title: "Show Page",
                first: "First",
                first_title: "First Page",
                last: "Last",
                last_title: "Last Page",
                prev: "Prev",
                prev_title: "Prev Page",
                next: "Next",
                next_title: "Next Page",
                all: "All",
                counter: {showing: "Showing", of: "of", rows: "rows", pages: "pages"}
            },
            headerFilters: {default: "filter column...", columns: {}}
        }
    };
    var X = function (e) {
        a(n, e);
        var i = c(n);

        function n(e) {
            return t(this, n), i.call(this, e)
        }

        return o(n, [{
            key: "initialize", value: function () {
                this.registerTableFunction("tableComms", this.receive.bind(this))
            }
        }, {
            key: "getConnections", value: function (e) {
                var t = this, i = [];
                return I.lookupTable(e).forEach((function (e) {
                    t.table !== e && i.push(e)
                })), i
            }
        }, {
            key: "send", value: function (e, t, i, n) {
                var o = this, a = this.getConnections(e);
                a.forEach((function (e) {
                    e.tableComms(o.table.element, t, i, n)
                })), !a.length && e && console.warn("Table Connection Error - No tables matching selector found", e)
            }
        }, {
            key: "receive", value: function (e, t, i, n) {
                if (this.table.modExists(t)) return this.table.modules[t].commsReceived(e, i, n);
                console.warn("Inter-table Comms Error - no such module:", t)
            }
        }]), n
    }(V);
    X.moduleName = "comms";
    var q = Object.freeze({__proto__: null, LayoutModule: G, LocalizeModule: U, CommsModule: X}), K = function () {
        function i(e, n) {
            t(this, i), this.bindStaticFuctionality(e), this.bindModules(e, q, !0), n && this.bindModules(e, n)
        }

        return o(i, [{
            key: "bindStaticFuctionality", value: function (t) {
                t.moduleBindings = {}, t.extendModule = function (i, n, o) {
                    if (t.moduleBindings[i]) {
                        var a = t.moduleBindings[i][n];
                        if (a) if ("object" == e(o)) for (var r in o) a[r] = o[r]; else console.warn("Module Error - Invalid value type, it must be an object"); else console.warn("Module Error - property does not exist:", n)
                    } else console.warn("Module Error - module does not exist:", i)
                }, t.registerModule = function (e) {
                    Array.isArray(e) || (e = [e]), e.forEach((function (e) {
                        t.registerModuleBinding(e)
                    }))
                }, t.registerModuleBinding = function (e) {
                    t.moduleBindings[e.moduleName] = e
                }, t.findTable = function (e) {
                    var t = I.lookupTable(e, !0);
                    return !(Array.isArray(t) && !t.length) && t
                }, t.prototype.bindModules = function () {
                    var e = [], i = [], n = [];
                    for (var o in this.modules = {}, t.moduleBindings) {
                        var a = t.moduleBindings[o], r = new a(this);
                        this.modules[o] = r, a.prototype.moduleCore ? this.modulesCore.push(r) : a.moduleInitOrder ? a.moduleInitOrder < 0 ? e.push(r) : i.push(r) : n.push(r)
                    }
                    e.sort((function (e, t) {
                        return e.moduleInitOrder > t.moduleInitOrder ? 1 : -1
                    })), i.sort((function (e, t) {
                        return e.moduleInitOrder > t.moduleInitOrder ? 1 : -1
                    })), this.modulesRegular = e.concat(n.concat(i))
                }
            }
        }, {
            key: "bindModules", value: function (e, t, i) {
                var n = Object.values(t);
                i && n.forEach((function (e) {
                    e.prototype.moduleCore = !0
                })), e.registerModule(n)
            }
        }]), i
    }(), J = function (e) {
        a(n, e);
        var i = c(n);

        function n(e) {
            var o;
            return t(this, n), (o = i.call(this, e)).element = o._createAlertElement(), o.msgElement = o._createMsgElement(), o.type = null, o.element.appendChild(o.msgElement), o
        }

        return o(n, [{
            key: "_createAlertElement", value: function () {
                var e = document.createElement("div");
                return e.classList.add("tabulator-alert"), e
            }
        }, {
            key: "_createMsgElement", value: function () {
                var e = document.createElement("div");
                return e.classList.add("tabulator-alert-msg"), e.setAttribute("role", "alert"), e
            }
        }, {
            key: "_typeClass", value: function () {
                return "tabulator-alert-state-" + this.type
            }
        }, {
            key: "alert", value: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "msg";
                if (e) {
                    for (this.clear(), this.type = t; this.msgElement.firstChild;) this.msgElement.removeChild(this.msgElement.firstChild);
                    this.msgElement.classList.add(this._typeClass()), "function" == typeof e && (e = e()), e instanceof HTMLElement ? this.msgElement.appendChild(e) : this.msgElement.innerHTML = e, this.table.element.appendChild(this.element)
                }
            }
        }, {
            key: "clear", value: function () {
                this.element.parentNode && this.element.parentNode.removeChild(this.element), this.msgElement.classList.remove(this._typeClass())
            }
        }]), n
    }(g), Y = function () {
        function i(e, n) {
            var o = this;
            t(this, i), this.options = {}, this.columnManager = null, this.rowManager = null, this.footerManager = null, this.alertManager = null, this.vdomHoz = null, this.externalEvents = null, this.eventBus = null, this.interactionMonitor = !1, this.browser = "", this.browserSlow = !1, this.browserMobile = !1, this.rtl = !1, this.originalElement = null, this.componentFunctionBinder = new _(this), this.dataLoader = !1, this.modules = {}, this.modulesCore = [], this.modulesRegular = [], this.optionsList = new E(this, "table constructor"), this.initialized = !1, this.destroyed = !1, this.initializeElement(e) && (this.initializeCoreSystems(n), setTimeout((function () {
                o._create()
            }))), I.register(this)
        }

        return o(i, [{
            key: "initializeElement", value: function (e) {
                return "undefined" != typeof HTMLElement && e instanceof HTMLElement ? (this.element = e, !0) : "string" == typeof e ? (this.element = document.querySelector(e), !!this.element || (console.error("Tabulator Creation Error - no element found matching selector: ", e), !1)) : (console.error("Tabulator Creation Error - Invalid element provided:", e), !1)
            }
        }, {
            key: "initializeCoreSystems", value: function (e) {
                this.columnManager = new M(this), this.rowManager = new z(this), this.footerManager = new F(this), this.dataLoader = new O(this), this.alertManager = new J(this), this.bindModules(), this.options = this.optionsList.generate(i.defaultOptions, e), this._clearObjectPointers(), this._mapDeprecatedFunctionality(), this.externalEvents = new A(this, this.options, this.options.debugEventsExternal), this.eventBus = new B(this.options.debugEventsInternal), this.interactionMonitor = new H(this), this.dataLoader.initialize(), this.footerManager.initialize()
            }
        }, {
            key: "_mapDeprecatedFunctionality", value: function () {
            }
        }, {
            key: "_clearSelection", value: function () {
                this.element.classList.add("tabulator-block-select"), window.getSelection ? window.getSelection().empty ? window.getSelection().empty() : window.getSelection().removeAllRanges && window.getSelection().removeAllRanges() : document.selection && document.selection.empty(), this.element.classList.remove("tabulator-block-select")
            }
        }, {
            key: "_create", value: function () {
                this.externalEvents.dispatch("tableBuilding"), this.eventBus.dispatch("table-building"), this._rtlCheck(), this._buildElement(), this._initializeTable(), this._loadInitialData(), this.initialized = !0, this.externalEvents.dispatch("tableBuilt")
            }
        }, {
            key: "_rtlCheck", value: function () {
                var e = window.getComputedStyle(this.element);
                switch (this.options.textDirection) {
                    case"auto":
                        if ("rtl" !== e.direction) break;
                    case"rtl":
                        this.element.classList.add("tabulator-rtl"), this.rtl = !0;
                        break;
                    case"ltr":
                        this.element.classList.add("tabulator-ltr");
                    default:
                        this.rtl = !1
                }
            }
        }, {
            key: "_clearObjectPointers", value: function () {
                this.options.columns = this.options.columns.slice(0), Array.isArray(this.options.data) && !this.options.reactiveData && (this.options.data = this.options.data.slice(0))
            }
        }, {
            key: "_buildElement", value: function () {
                var t, i = this.element, n = this.options;
                if ("TABLE" === i.tagName) {
                    this.originalElement = this.element, t = document.createElement("div");
                    var o = i.attributes;
                    for (var a in o) "object" == e(o[a]) && t.setAttribute(o[a].name, o[a].value);
                    i.parentNode.replaceChild(t, i), this.element = i = t
                }
                for (i.classList.add("tabulator"), i.setAttribute("role", "grid"); i.firstChild;) i.removeChild(i.firstChild);
                n.height && (n.height = isNaN(n.height) ? n.height : n.height + "px", i.style.height = n.height), !1 !== n.minHeight && (n.minHeight = isNaN(n.minHeight) ? n.minHeight : n.minHeight + "px", i.style.minHeight = n.minHeight), !1 !== n.maxHeight && (n.maxHeight = isNaN(n.maxHeight) ? n.maxHeight : n.maxHeight + "px", i.style.maxHeight = n.maxHeight)
            }
        }, {
            key: "_initializeTable", value: function () {
                var e = this.element, t = this.options;
                this.interactionMonitor.initialize(), this.columnManager.initialize(), this.rowManager.initialize(), this._detectBrowser(), this.modulesCore.forEach((function (e) {
                    e.initialize()
                })), e.appendChild(this.columnManager.getElement()), e.appendChild(this.rowManager.getElement()), t.footerElement && this.footerManager.activate(), t.autoColumns && t.data && this.columnManager.generateColumnsFromRowData(this.options.data), this.modulesRegular.forEach((function (e) {
                    e.initialize()
                })), this.columnManager.setColumns(t.columns), this.eventBus.dispatch("table-built")
            }
        }, {
            key: "_loadInitialData", value: function () {
                this.dataLoader.load(this.options.data)
            }
        }, {
            key: "destroy", value: function () {
                var e = this.element;
                for (this.destroyed = !0, I.deregister(this), this.eventBus.dispatch("table-destroy"), this.rowManager.rows.forEach((function (e) {
                    e.wipe()
                })), this.rowManager.rows = [], this.rowManager.activeRows = [], this.rowManager.displayRows = []; e.firstChild;) e.removeChild(e.firstChild);
                e.classList.remove("tabulator")
            }
        }, {
            key: "_detectBrowser", value: function () {
                var e = navigator.userAgent || navigator.vendor || window.opera;
                e.indexOf("Trident") > -1 ? (this.browser = "ie", this.browserSlow = !0) : e.indexOf("Edge") > -1 ? (this.browser = "edge", this.browserSlow = !0) : e.indexOf("Firefox") > -1 ? (this.browser = "firefox", this.browserSlow = !1) : (this.browser = "other", this.browserSlow = !1), this.browserMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.slice(0, 4))
            }
        }, {
            key: "initGuard", value: function (e, t) {
                var i, n;
                return this.options.debugInitialization && !this.initialized && (e || (e = " " == (n = "Error" == (i = (new Error).stack.split("\n"))[0] ? i[2] : i[1])[0] ? n.trim().split(" ")[1].split(".")[1] : n.trim().split("@")[0]), console.warn("Table Not Initialized - Calling the " + e + " function before the table is initialized may result in inconsistent behavior, Please wait for the `tableBuilt` event before calling this function." + (t ? " " + t : ""))), this.initialized
            }
        }, {
            key: "blockRedraw", value: function () {
                return this.initGuard(), this.rowManager.blockRedraw()
            }
        }, {
            key: "restoreRedraw", value: function () {
                return this.initGuard(), this.rowManager.restoreRedraw()
            }
        }, {
            key: "setData", value: function (e, t, i) {
                return this.initGuard(!1, "To set initial data please use the 'data' property in the table constructor."), this.dataLoader.load(e, t, i, !1)
            }
        }, {
            key: "clearData", value: function () {
                this.initGuard(), this.dataLoader.blockActiveLoad(), this.rowManager.clearData()
            }
        }, {
            key: "getData", value: function (e) {
                return this.rowManager.getData(e)
            }
        }, {
            key: "getDataCount", value: function (e) {
                return this.rowManager.getDataCount(e)
            }
        }, {
            key: "replaceData", value: function (e, t, i) {
                return this.initGuard(), this.dataLoader.load(e, t, i, !0, !0)
            }
        }, {
            key: "updateData", value: function (e) {
                var t = this, i = 0;
                return this.initGuard(), new Promise((function (n, o) {
                    t.dataLoader.blockActiveLoad(), "string" == typeof e && (e = JSON.parse(e)), e ? e.forEach((function (e) {
                        var o = t.rowManager.findRow(e[t.options.index]);
                        o && (i++, o.updateData(e).then((function () {
                            --i || n()
                        })))
                    })) : (console.warn("Update Error - No data provided"), o("Update Error - No data provided"))
                }))
            }
        }, {
            key: "addData", value: function (e, t, i) {
                var n = this;
                return this.initGuard(), new Promise((function (o, a) {
                    n.dataLoader.blockActiveLoad(), "string" == typeof e && (e = JSON.parse(e)), e ? n.rowManager.addRows(e, t, i).then((function (e) {
                        var t = [];
                        e.forEach((function (e) {
                            t.push(e.getComponent())
                        })), o(t)
                    })) : (console.warn("Update Error - No data provided"), a("Update Error - No data provided"))
                }))
            }
        }, {
            key: "updateOrAddData", value: function (e) {
                var t = this, i = [], n = 0;
                return this.initGuard(), new Promise((function (o, a) {
                    t.dataLoader.blockActiveLoad(), "string" == typeof e && (e = JSON.parse(e)), e ? e.forEach((function (e) {
                        var a = t.rowManager.findRow(e[t.options.index]);
                        n++, a ? a.updateData(e).then((function () {
                            n--, i.push(a.getComponent()), n || o(i)
                        })) : t.rowManager.addRows(e).then((function (e) {
                            n--, i.push(e[0].getComponent()), n || o(i)
                        }))
                    })) : (console.warn("Update Error - No data provided"), a("Update Error - No data provided"))
                }))
            }
        }, {
            key: "getRow", value: function (e) {
                var t = this.rowManager.findRow(e);
                return t ? t.getComponent() : (console.warn("Find Error - No matching row found:", e), !1)
            }
        }, {
            key: "getRowFromPosition", value: function (e, t) {
                var i = this.rowManager.getRowFromPosition(e, t);
                return i ? i.getComponent() : (console.warn("Find Error - No matching row found:", e), !1)
            }
        }, {
            key: "deleteRow", value: function (e) {
                var t = this, i = [];
                this.initGuard(), Array.isArray(e) || (e = [e]);
                var n, o = f(e);
                try {
                    for (o.s(); !(n = o.n()).done;) {
                        var a = n.value, r = this.rowManager.findRow(a, !0);
                        if (!r) return console.error("Delete Error - No matching row found:", a), Promise.reject("Delete Error - No matching row found");
                        i.push(r)
                    }
                } catch (e) {
                    o.e(e)
                } finally {
                    o.f()
                }
                return i.sort((function (e, i) {
                    return t.rowManager.rows.indexOf(e) > t.rowManager.rows.indexOf(i) ? 1 : -1
                })), i.forEach((function (e) {
                    e.delete()
                })), this.rowManager.reRenderInPosition(), Promise.resolve()
            }
        }, {
            key: "addRow", value: function (e, t, i) {
                return this.initGuard(), "string" == typeof e && (e = JSON.parse(e)), this.rowManager.addRows(e, t, i).then((function (e) {
                    return e[0].getComponent()
                }))
            }
        }, {
            key: "updateOrAddRow", value: function (e, t) {
                var i = this.rowManager.findRow(e);
                return this.initGuard(), "string" == typeof t && (t = JSON.parse(t)), i ? i.updateData(t).then((function () {
                    return i.getComponent()
                })) : this.rowManager.addRows(t).then((function (e) {
                    return e[0].getComponent()
                }))
            }
        }, {
            key: "updateRow", value: function (e, t) {
                var i = this.rowManager.findRow(e);
                return this.initGuard(), "string" == typeof t && (t = JSON.parse(t)), i ? i.updateData(t).then((function () {
                    return Promise.resolve(i.getComponent())
                })) : (console.warn("Update Error - No matching row found:", e), Promise.reject("Update Error - No matching row found"))
            }
        }, {
            key: "scrollToRow", value: function (e, t, i) {
                var n = this.rowManager.findRow(e);
                return n ? this.rowManager.scrollToRow(n, t, i) : (console.warn("Scroll Error - No matching row found:", e), Promise.reject("Scroll Error - No matching row found"))
            }
        }, {
            key: "moveRow", value: function (e, t, i) {
                var n = this.rowManager.findRow(e);
                this.initGuard(), n ? n.moveToRow(t, i) : console.warn("Move Error - No matching row found:", e)
            }
        }, {
            key: "getRows", value: function (e) {
                return this.rowManager.getComponents(e)
            }
        }, {
            key: "getRowPosition", value: function (e, t) {
                var i = this.rowManager.findRow(e);
                return i ? this.rowManager.getRowPosition(i, t) : (console.warn("Position Error - No matching row found:", e), !1)
            }
        }, {
            key: "setColumns", value: function (e) {
                this.initGuard(!1, "To set initial columns please use the 'columns' property in the table constructor"), this.columnManager.setColumns(e)
            }
        }, {
            key: "getColumns", value: function (e) {
                return this.columnManager.getComponents(e)
            }
        }, {
            key: "getColumn", value: function (e) {
                var t = this.columnManager.findColumn(e);
                return t ? t.getComponent() : (console.warn("Find Error - No matching column found:", e), !1)
            }
        }, {
            key: "getColumnDefinitions", value: function () {
                return this.columnManager.getDefinitionTree()
            }
        }, {
            key: "showColumn", value: function (e) {
                var t = this.columnManager.findColumn(e);
                if (this.initGuard(), !t) return console.warn("Column Show Error - No matching column found:", e), !1;
                t.show()
            }
        }, {
            key: "hideColumn", value: function (e) {
                var t = this.columnManager.findColumn(e);
                if (this.initGuard(), !t) return console.warn("Column Hide Error - No matching column found:", e), !1;
                t.hide()
            }
        }, {
            key: "toggleColumn", value: function (e) {
                var t = this.columnManager.findColumn(e);
                if (this.initGuard(), !t) return console.warn("Column Visibility Toggle Error - No matching column found:", e), !1;
                t.visible ? t.hide() : t.show()
            }
        }, {
            key: "addColumn", value: function (e, t, i) {
                var n = this.columnManager.findColumn(i);
                return this.initGuard(), this.columnManager.addColumn(e, t, n).then((function (e) {
                    return e.getComponent()
                }))
            }
        }, {
            key: "deleteColumn", value: function (e) {
                var t = this.columnManager.findColumn(e);
                return this.initGuard(), t ? t.delete() : (console.warn("Column Delete Error - No matching column found:", e), Promise.reject())
            }
        }, {
            key: "updateColumnDefinition", value: function (e, t) {
                var i = this.columnManager.findColumn(e);
                return this.initGuard(), i ? i.updateDefinition(t) : (console.warn("Column Update Error - No matching column found:", e), Promise.reject())
            }
        }, {
            key: "moveColumn", value: function (e, t, i) {
                var n = this.columnManager.findColumn(e), o = this.columnManager.findColumn(t);
                this.initGuard(), n ? o ? this.columnManager.moveColumn(n, o, i) : console.warn("Move Error - No matching column found:", o) : console.warn("Move Error - No matching column found:", e)
            }
        }, {
            key: "scrollToColumn", value: function (e, t, i) {
                var n = this;
                return new Promise((function (o, a) {
                    var r = n.columnManager.findColumn(e);
                    return r ? n.columnManager.scrollToColumn(r, t, i) : (console.warn("Scroll Error - No matching column found:", e), Promise.reject("Scroll Error - No matching column found"))
                }))
            }
        }, {
            key: "redraw", value: function (e) {
                this.initGuard(), this.columnManager.redraw(e), this.rowManager.redraw(e)
            }
        }, {
            key: "setHeight", value: function (e) {
                this.options.height = isNaN(e) ? e : e + "px", this.element.style.height = this.options.height, this.rowManager.initializeRenderer(), this.rowManager.redraw()
            }
        }, {
            key: "on", value: function (e, t) {
                this.externalEvents.subscribe(e, t)
            }
        }, {
            key: "off", value: function (e, t) {
                this.externalEvents.unsubscribe(e, t)
            }
        }, {
            key: "dispatchEvent", value: function () {
                var e, t = Array.from(arguments);
                t.shift();
                (e = this.externalEvents).dispatch.apply(e, arguments)
            }
        }, {
            key: "alert", value: function (e, t) {
                this.initGuard(), this.alertManager.alert(e, t)
            }
        }, {
            key: "clearAlert", value: function () {
                this.initGuard(), this.alertManager.clear()
            }
        }, {
            key: "modExists", value: function (e, t) {
                return !!this.modules[e] || (t && console.error("Tabulator Module Not Installed: " + e), !1)
            }
        }, {
            key: "module", value: function (e) {
                var t = this.modules[e];
                return t || console.error("Tabulator module not installed: " + e), t
            }
        }]), i
    }();
    Y.defaultOptions = {
        debugEventsExternal: !1,
        debugEventsInternal: !1,
        debugInvalidOptions: !0,
        debugInitialization: !0,
        height: !1,
        minHeight: !1,
        maxHeight: !1,
        columnHeaderVertAlign: "top",
        popupContainer: !1,
        columns: [],
        columnDefaults: {},
        data: !1,
        autoColumns: !1,
        autoColumnsDefinitions: !1,
        nestedFieldSeparator: ".",
        footerElement: !1,
        index: "id",
        textDirection: "auto",
        addRowPos: "bottom",
        headerVisible: !0,
        renderVertical: "virtual",
        renderHorizontal: "basic",
        renderVerticalBuffer: 0,
        scrollToRowPosition: "top",
        scrollToRowIfVisible: !0,
        scrollToColumnPosition: "left",
        scrollToColumnIfVisible: !0,
        rowFormatter: !1,
        rowFormatterPrint: null,
        rowFormatterClipboard: null,
        rowFormatterHtmlOutput: null,
        rowHeight: null,
        placeholder: !1,
        dataLoader: !0,
        dataLoaderLoading: !1,
        dataLoaderError: !1,
        dataLoaderErrorTimeout: 3e3,
        dataSendParams: {},
        dataReceiveParams: {}
    }, new K(Y);
    var $ = function (i) {
        a(r, i);
        var n = c(r);

        function r(e) {
            var i;
            return t(this, r), (i = n.call(this, e)).allowedTypes = ["", "data", "download", "clipboard", "print", "htmlOutput"], i.registerColumnOption("accessor"), i.registerColumnOption("accessorParams"), i.registerColumnOption("accessorData"), i.registerColumnOption("accessorDataParams"), i.registerColumnOption("accessorDownload"), i.registerColumnOption("accessorDownloadParams"), i.registerColumnOption("accessorClipboard"), i.registerColumnOption("accessorClipboardParams"), i.registerColumnOption("accessorPrint"), i.registerColumnOption("accessorPrintParams"), i.registerColumnOption("accessorHtmlOutput"), i.registerColumnOption("accessorHtmlOutputParams"), i
        }

        return o(r, [{
            key: "initialize", value: function () {
                this.subscribe("column-layout", this.initializeColumn.bind(this)), this.subscribe("row-data-retrieve", this.transformRow.bind(this))
            }
        }, {
            key: "initializeColumn", value: function (e) {
                var t = this, i = !1, n = {};
                this.allowedTypes.forEach((function (o) {
                    var a, r = "accessor" + (o.charAt(0).toUpperCase() + o.slice(1));
                    e.definition[r] && (a = t.lookupAccessor(e.definition[r])) && (i = !0, n[r] = {
                        accessor: a,
                        params: e.definition[r + "Params"] || {}
                    })
                })), i && (e.modules.accessor = n)
            }
        }, {
            key: "lookupAccessor", value: function (t) {
                var i = !1;
                switch (e(t)) {
                    case"string":
                        r.accessors[t] ? i = r.accessors[t] : console.warn("Accessor Error - No such accessor found, ignoring: ", t);
                        break;
                    case"function":
                        i = t
                }
                return i
            }
        }, {
            key: "transformRow", value: function (e, t) {
                var i = "accessor" + (t.charAt(0).toUpperCase() + t.slice(1)), n = e.getComponent(),
                    o = k.deepClone(e.data || {});
                return this.table.columnManager.traverse((function (e) {
                    var a, r, s, l;
                    e.modules.accessor && (r = e.modules.accessor[i] || e.modules.accessor.accessor || !1) && "undefined" != (a = e.getFieldValue(o)) && (l = e.getComponent(), s = "function" == typeof r.params ? r.params(a, o, t, l, n) : r.params, e.setFieldValue(o, r.accessor(a, o, t, s, l, n)))
                })), o
            }
        }]), r
    }(V);
    $.moduleName = "accessor", $.accessors = {};

    function Z(t, i) {
        var n = [];
        if (i = i || "", Array.isArray(t)) t.forEach((function (e, t) {
            n = n.concat(Z(e, i ? i + "[" + t + "]" : t))
        })); else if ("object" === e(t)) for (var o in t) n = n.concat(Z(t[o], i ? i + "[" + o + "]" : o)); else n.push({
            key: i,
            value: t
        });
        return n
    }

    function Q(e) {
        var t = Z(e), i = [];
        return t.forEach((function (e) {
            i.push(encodeURIComponent(e.key) + "=" + encodeURIComponent(e.value))
        })), i.join("&")
    }

    function ee(e, t, i) {
        return e && i && Object.keys(i).length && (t.method && "get" != t.method.toLowerCase() || (t.method = "get", e += (e.includes("?") ? "&" : "?") + Q(i))), e
    }

    function te(t, i) {
        var n = [];
        if (i = i || "", Array.isArray(t)) t.forEach((function (e, t) {
            n = n.concat(te(e, i ? i + "[" + t + "]" : t))
        })); else if ("object" === e(t)) for (var o in t) n = n.concat(te(t[o], i ? i + "[" + o + "]" : o)); else n.push({
            key: i,
            value: t
        });
        return n
    }

    var ie = {
        json: {
            headers: {"Content-Type": "application/json"}, body: function (e, t, i) {
                return JSON.stringify(i)
            }
        }, form: {
            headers: {}, body: function (e, t, i) {
                var n = te(i), o = new FormData;
                return n.forEach((function (e) {
                    o.append(e.key, e.value)
                })), o
            }
        }
    }, ne = function (e) {
        a(n, e);
        var i = c(n);

        function n(e) {
            var o;
            return t(this, n), (o = i.call(this, e)).config = {}, o.url = "", o.urlGenerator = !1, o.params = !1, o.loaderPromise = !1, o.registerTableOption("ajaxURL", !1), o.registerTableOption("ajaxURLGenerator", !1), o.registerTableOption("ajaxParams", {}), o.registerTableOption("ajaxConfig", "get"), o.registerTableOption("ajaxContentType", "form"), o.registerTableOption("ajaxRequestFunc", !1), o.registerTableOption("ajaxRequesting", (function () {
            })), o.registerTableOption("ajaxResponse", !1), o.contentTypeFormatters = n.contentTypeFormatters, o
        }

        return o(n, [{
            key: "initialize", value: function () {
                this.loaderPromise = this.table.options.ajaxRequestFunc || n.defaultLoaderPromise, this.urlGenerator = this.table.options.ajaxURLGenerator || n.defaultURLGenerator, this.table.options.ajaxURL && this.setUrl(this.table.options.ajaxURL), this.setDefaultConfig(this.table.options.ajaxConfig), this.registerTableFunction("getAjaxUrl", this.getUrl.bind(this)), this.subscribe("data-loading", this.requestDataCheck.bind(this)), this.subscribe("data-params", this.requestParams.bind(this)), this.subscribe("data-load", this.requestData.bind(this))
            }
        }, {
            key: "requestParams", value: function (e, t, i, n) {
                var o = this.table.options.ajaxParams;
                return o && ("function" == typeof o && (o = o.call(this.table)), n = Object.assign(n, o)), n
            }
        }, {
            key: "requestDataCheck", value: function (e, t, i, n) {
                return !((e || !this.url) && "string" != typeof e)
            }
        }, {
            key: "requestData", value: function (e, t, i, n, o) {
                var a;
                return !o && this.requestDataCheck(e) ? (e && this.setUrl(e), a = this.generateConfig(i), this.sendRequest(this.url, t, a)) : o
            }
        }, {
            key: "setDefaultConfig", value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.config = Object.assign({}, n.defaultConfig), "string" == typeof e ? this.config.method = e : Object.assign(this.config, e)
            }
        }, {
            key: "generateConfig", value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = Object.assign({}, this.config);
                return "string" == typeof e ? t.method = e : Object.assign(t, e), t
            }
        }, {
            key: "setUrl", value: function (e) {
                this.url = e
            }
        }, {
            key: "getUrl", value: function () {
                return this.url
            }
        }, {
            key: "sendRequest", value: function (e, t, i) {
                var n = this;
                return !1 !== this.table.options.ajaxRequesting.call(this.table, e, t) ? this.loaderPromise(e, i, t).then((function (i) {
                    return n.table.options.ajaxResponse && (i = n.table.options.ajaxResponse.call(n.table, e, t, i)), i
                })) : Promise.reject()
            }
        }]), n
    }(V);
    ne.moduleName = "ajax", ne.defaultConfig = {method: "GET"}, ne.defaultURLGenerator = ee, ne.defaultLoaderPromise = function (t, i, n) {
        var o, a = this;
        return new Promise((function (r, s) {
            if (t = a.urlGenerator.call(a.table, t, i, n), "GET" != i.method.toUpperCase()) if (o = "object" === e(a.table.options.ajaxContentType) ? a.table.options.ajaxContentType : a.contentTypeFormatters[a.table.options.ajaxContentType]) {
                for (var l in o.headers) i.headers || (i.headers = {}), void 0 === i.headers[l] && (i.headers[l] = o.headers[l]);
                i.body = o.body.call(a, t, i, n)
            } else console.warn("Ajax Error - Invalid ajaxContentType value:", a.table.options.ajaxContentType);
            t ? (void 0 === i.headers && (i.headers = {}), void 0 === i.headers.Accept && (i.headers.Accept = "application/json"), void 0 === i.headers["X-Requested-With"] && (i.headers["X-Requested-With"] = "XMLHttpRequest"), void 0 === i.mode && (i.mode = "cors"), "cors" == i.mode ? (void 0 === i.headers.Origin && (i.headers.Origin = window.location.origin), void 0 === i.credentials && (i.credentials = "same-origin")) : void 0 === i.credentials && (i.credentials = "include"), fetch(t, i).then((function (e) {
                e.ok ? e.json().then((function (e) {
                    r(e)
                })).catch((function (e) {
                    s(e), console.warn("Ajax Load Error - Invalid JSON returned", e)
                })) : (console.error("Ajax Load Error - Connection Error: " + e.status, e.statusText), s(e))
            })).catch((function (e) {
                console.error("Ajax Load Error - Connection Error: ", e), s(e)
            }))) : (console.warn("Ajax Load Error - No URL Set"), r([]))
        }))
    }, ne.contentTypeFormatters = ie;
    var oe = function (i) {
        a(r, i);
        var n = c(r);

        function r(e) {
            var i;
            return t(this, r), (i = n.call(this, e)).mode = !0, i.pasteParser = function () {
            }, i.pasteAction = function () {
            }, i.customSelection = !1, i.rowRange = !1, i.blocked = !0, i.registerTableOption("clipboard", !1), i.registerTableOption("clipboardCopyStyled", !0), i.registerTableOption("clipboardCopyConfig", !1), i.registerTableOption("clipboardCopyFormatter", !1), i.registerTableOption("clipboardCopyRowRange", "active"), i.registerTableOption("clipboardPasteParser", "table"), i.registerTableOption("clipboardPasteAction", "insert"), i.registerColumnOption("clipboard"), i.registerColumnOption("titleClipboard"), i
        }

        return o(r, [{
            key: "initialize", value: function () {
                var e = this;
                this.mode = this.table.options.clipboard, this.rowRange = this.table.options.clipboardCopyRowRange, !0 !== this.mode && "copy" !== this.mode || this.table.element.addEventListener("copy", (function (t) {
                    var i, n;
                    if (!e.blocked) {
                        if (t.preventDefault(), e.customSelection) i = e.customSelection, e.table.options.clipboardCopyFormatter && (i = e.table.options.clipboardCopyFormatter("plain", i)); else {
                            var o = e.table.modules.export.generateExportList(e.table.options.clipboardCopyConfig, e.table.options.clipboardCopyStyled, e.rowRange, "clipboard");
                            i = (n = e.table.modules.export.genereateHTMLTable(o)) ? e.generatePlainContent(o) : "", e.table.options.clipboardCopyFormatter && (i = e.table.options.clipboardCopyFormatter("plain", i), n = e.table.options.clipboardCopyFormatter("html", n))
                        }
                        window.clipboardData && window.clipboardData.setData ? window.clipboardData.setData("Text", i) : t.clipboardData && t.clipboardData.setData ? (t.clipboardData.setData("text/plain", i), n && t.clipboardData.setData("text/html", n)) : t.originalEvent && t.originalEvent.clipboardData.setData && (t.originalEvent.clipboardData.setData("text/plain", i), n && t.originalEvent.clipboardData.setData("text/html", n)), e.dispatchExternal("clipboardCopied", i, n), e.reset()
                    }
                })), !0 !== this.mode && "paste" !== this.mode || this.table.element.addEventListener("paste", (function (t) {
                    e.paste(t)
                })), this.setPasteParser(this.table.options.clipboardPasteParser), this.setPasteAction(this.table.options.clipboardPasteAction), this.registerTableFunction("copyToClipboard", this.copy.bind(this))
            }
        }, {
            key: "reset", value: function () {
                this.blocked = !0, this.customSelection = !1
            }
        }, {
            key: "generatePlainContent", value: function (t) {
                var i = [];
                return t.forEach((function (t) {
                    var n = [];
                    t.columns.forEach((function (i) {
                        var o = "";
                        if (i) if ("group" === t.type && (i.value = i.component.getKey()), null === i.value) o = ""; else switch (e(i.value)) {
                            case"object":
                                o = JSON.stringify(i.value);
                                break;
                            case"undefined":
                                o = "";
                                break;
                            default:
                                o = i.value
                        }
                        n.push(o)
                    })), i.push(n.join("\t"))
                })), i.join("\n")
            }
        }, {
            key: "copy", value: function (e, t) {
                var i, n;
                this.blocked = !1, this.customSelection = !1, !0 !== this.mode && "copy" !== this.mode || (this.rowRange = e || this.table.options.clipboardCopyRowRange, void 0 !== window.getSelection && void 0 !== document.createRange ? ((e = document.createRange()).selectNodeContents(this.table.element), (i = window.getSelection()).toString() && t && (this.customSelection = i.toString()), i.removeAllRanges(), i.addRange(e)) : void 0 !== document.selection && void 0 !== document.body.createTextRange && ((n = document.body.createTextRange()).moveToElementText(this.table.element), n.select()), document.execCommand("copy"), i && i.removeAllRanges())
            }
        }, {
            key: "setPasteAction", value: function (t) {
                switch (e(t)) {
                    case"string":
                        this.pasteAction = r.pasteActions[t], this.pasteAction || console.warn("Clipboard Error - No such paste action found:", t);
                        break;
                    case"function":
                        this.pasteAction = t
                }
            }
        }, {
            key: "setPasteParser", value: function (t) {
                switch (e(t)) {
                    case"string":
                        this.pasteParser = r.pasteParsers[t], this.pasteParser || console.warn("Clipboard Error - No such paste parser found:", t);
                        break;
                    case"function":
                        this.pasteParser = t
                }
            }
        }, {
            key: "paste", value: function (e) {
                var t, i, n;
                this.checkPaseOrigin(e) && (t = this.getPasteData(e), (i = this.pasteParser.call(this, t)) ? (e.preventDefault(), this.table.modExists("mutator") && (i = this.mutateData(i)), n = this.pasteAction.call(this, i), this.dispatchExternal("clipboardPasted", t, i, n)) : this.dispatchExternal("clipboardPasteError", t))
            }
        }, {
            key: "mutateData", value: function (e) {
                var t = this, i = [];
                return Array.isArray(e) ? e.forEach((function (e) {
                    i.push(t.table.modules.mutator.transformRow(e, "clipboard"))
                })) : i = e, i
            }
        }, {
            key: "checkPaseOrigin", value: function (e) {
                var t = !0;
                return ("DIV" != e.target.tagName || this.table.modules.edit.currentCell) && (t = !1), t
            }
        }, {
            key: "getPasteData", value: function (e) {
                var t;
                return window.clipboardData && window.clipboardData.getData ? t = window.clipboardData.getData("Text") : e.clipboardData && e.clipboardData.getData ? t = e.clipboardData.getData("text/plain") : e.originalEvent && e.originalEvent.clipboardData.getData && (t = e.originalEvent.clipboardData.getData("text/plain")), t
            }
        }]), r
    }(V);
    oe.moduleName = "clipboard", oe.pasteActions = {
        replace: function (e) {
            return this.table.setData(e)
        }, update: function (e) {
            return this.table.updateOrAddData(e)
        }, insert: function (e) {
            return this.table.addData(e)
        }
    }, oe.pasteParsers = {
        table: function (e) {
            var t = [], i = !0, n = this.table.columnManager.columns, o = [], a = [];
            return (e = e.split("\n")).forEach((function (e) {
                t.push(e.split("\t"))
            })), !(!t.length || 1 === t.length && t[0].length < 2) && (t[0].forEach((function (e) {
                var t = n.find((function (t) {
                    return e && t.definition.title && e.trim() && t.definition.title.trim() === e.trim()
                }));
                t ? o.push(t) : i = !1
            })), i || (i = !0, o = [], t[0].forEach((function (e) {
                var t = n.find((function (t) {
                    return e && t.field && e.trim() && t.field.trim() === e.trim()
                }));
                t ? o.push(t) : i = !1
            })), i || (o = this.table.columnManager.columnsByIndex)), i && t.shift(), t.forEach((function (e) {
                var t = {};
                e.forEach((function (e, i) {
                    o[i] && (t[o[i].field] = e)
                })), a.push(t)
            })), a)
        }
    };
    var ae = function () {
        function e(i) {
            return t(this, e), this._row = i, new Proxy(this, {
                get: function (e, t, i) {
                    return void 0 !== e[t] ? e[t] : e._row.table.componentFunctionBinder.handle("row", e._row, t)
                }
            })
        }

        return o(e, [{
            key: "getData", value: function (e) {
                return this._row.getData(e)
            }
        }, {
            key: "getElement", value: function () {
                return this._row.getElement()
            }
        }, {
            key: "getTable", value: function () {
                return this._row.table
            }
        }, {
            key: "getCells", value: function () {
                var e = [];
                return this._row.getCells().forEach((function (t) {
                    e.push(t.getComponent())
                })), e
            }
        }, {
            key: "getCell", value: function (e) {
                var t = this._row.getCell(e);
                return !!t && t.getComponent()
            }
        }, {
            key: "_getSelf", value: function () {
                return this._row
            }
        }]), e
    }(), re = {
        avg: function (e, t, i) {
            var n = 0, o = void 0 !== i.precision ? i.precision : 2;
            return e.length && (n = e.reduce((function (e, t) {
                return Number(e) + Number(t)
            })), n /= e.length, n = !1 !== o ? n.toFixed(o) : n), parseFloat(n).toString()
        }, max: function (e, t, i) {
            var n = null, o = void 0 !== i.precision && i.precision;
            return e.forEach((function (e) {
                ((e = Number(e)) > n || null === n) && (n = e)
            })), null !== n ? !1 !== o ? n.toFixed(o) : n : ""
        }, min: function (e, t, i) {
            var n = null, o = void 0 !== i.precision && i.precision;
            return e.forEach((function (e) {
                ((e = Number(e)) < n || null === n) && (n = e)
            })), null !== n ? !1 !== o ? n.toFixed(o) : n : ""
        }, sum: function (e, t, i) {
            var n = 0, o = void 0 !== i.precision && i.precision;
            return e.length && e.forEach((function (e) {
                e = Number(e), n += isNaN(e) ? 0 : Number(e)
            })), !1 !== o ? n.toFixed(o) : n
        }, concat: function (e, t, i) {
            var n = 0;
            return e.length && (n = e.reduce((function (e, t) {
                return String(e) + String(t)
            }))), n
        }, count: function (e, t, i) {
            var n = 0;
            return e.length && e.forEach((function (e) {
                e && n++
            })), n
        }
    }, se = function (i) {
        a(r, i);
        var n = c(r);

        function r(e) {
            var i;
            return t(this, r), (i = n.call(this, e)).topCalcs = [], i.botCalcs = [], i.genColumn = !1, i.topElement = i.createElement(), i.botElement = i.createElement(), i.topRow = !1, i.botRow = !1, i.topInitialized = !1, i.botInitialized = !1, i.registerTableOption("columnCalcs", !0), i.registerColumnOption("topCalc"), i.registerColumnOption("topCalcParams"), i.registerColumnOption("topCalcFormatter"), i.registerColumnOption("topCalcFormatterParams"), i.registerColumnOption("bottomCalc"), i.registerColumnOption("bottomCalcParams"), i.registerColumnOption("bottomCalcFormatter"), i.registerColumnOption("bottomCalcFormatterParams"), i
        }

        return o(r, [{
            key: "createElement", value: function () {
                var e = document.createElement("div");
                return e.classList.add("tabulator-calcs-holder"), e
            }
        }, {
            key: "initialize", value: function () {
                this.genColumn = new C({field: "value"}, this), this.subscribe("cell-value-changed", this.cellValueChanged.bind(this)), this.subscribe("column-init", this.initializeColumnCheck.bind(this)), this.subscribe("row-deleted", this.rowsUpdated.bind(this)), this.subscribe("scroll-horizontal", this.scrollHorizontal.bind(this)), this.subscribe("row-added", this.rowsUpdated.bind(this)), this.subscribe("column-moved", this.recalcActiveRows.bind(this)), this.subscribe("column-add", this.recalcActiveRows.bind(this)), this.subscribe("data-refreshed", this.recalcActiveRowsRefresh.bind(this)), this.subscribe("table-redraw", this.tableRedraw.bind(this)), this.subscribe("rows-visible", this.visibleRows.bind(this)), this.registerTableFunction("getCalcResults", this.getResults.bind(this)), this.registerTableFunction("recalc", this.userRecalc.bind(this))
            }
        }, {
            key: "tableRedraw", value: function (e) {
                this.recalc(this.table.rowManager.activeRows), e && this.redraw()
            }
        }, {
            key: "userRecalc", value: function () {
                this.recalc(this.table.rowManager.activeRows)
            }
        }, {
            key: "visibleRows", value: function (e, t) {
                return this.topRow && t.unshift(this.topRow), this.botRow && t.push(this.botRow), t
            }
        }, {
            key: "rowsUpdated", value: function (e) {
                this.table.options.groupBy ? this.recalcRowGroup(this) : this.recalcActiveRows()
            }
        }, {
            key: "recalcActiveRowsRefresh", value: function () {
                this.table.options.groupBy && this.table.options.dataTreeStartExpanded && this.table.options.dataTree ? this.recalcAll() : this.recalcActiveRows()
            }
        }, {
            key: "recalcActiveRows", value: function () {
                this.recalc(this.table.rowManager.activeRows)
            }
        }, {
            key: "cellValueChanged", value: function (e) {
                (e.column.definition.topCalc || e.column.definition.bottomCalc) && (this.table.options.groupBy ? ("table" != this.table.options.columnCalcs && "both" != this.table.options.columnCalcs || this.recalcActiveRows(), "table" != this.table.options.columnCalcs && this.recalcRowGroup(e.row)) : this.recalcActiveRows())
            }
        }, {
            key: "initializeColumnCheck", value: function (e) {
                (e.definition.topCalc || e.definition.bottomCalc) && this.initializeColumn(e)
            }
        }, {
            key: "initializeColumn", value: function (t) {
                var i = t.definition,
                    n = {topCalcParams: i.topCalcParams || {}, botCalcParams: i.bottomCalcParams || {}};
                if (i.topCalc) {
                    switch (e(i.topCalc)) {
                        case"string":
                            r.calculations[i.topCalc] ? n.topCalc = r.calculations[i.topCalc] : console.warn("Column Calc Error - No such calculation found, ignoring: ", i.topCalc);
                            break;
                        case"function":
                            n.topCalc = i.topCalc
                    }
                    n.topCalc && (t.modules.columnCalcs = n, this.topCalcs.push(t), "group" != this.table.options.columnCalcs && this.initializeTopRow())
                }
                if (i.bottomCalc) {
                    switch (e(i.bottomCalc)) {
                        case"string":
                            r.calculations[i.bottomCalc] ? n.botCalc = r.calculations[i.bottomCalc] : console.warn("Column Calc Error - No such calculation found, ignoring: ", i.bottomCalc);
                            break;
                        case"function":
                            n.botCalc = i.bottomCalc
                    }
                    n.botCalc && (t.modules.columnCalcs = n, this.botCalcs.push(t), "group" != this.table.options.columnCalcs && this.initializeBottomRow())
                }
            }
        }, {
            key: "registerColumnField", value: function () {
            }
        }, {
            key: "removeCalcs", value: function () {
                var e = !1;
                this.topInitialized && (this.topInitialized = !1, this.topElement.parentNode.removeChild(this.topElement), e = !0), this.botInitialized && (this.botInitialized = !1, this.footerRemove(this.botElement), e = !0), e && this.table.rowManager.adjustTableSize()
            }
        }, {
            key: "initializeTopRow", value: function () {
                this.topInitialized || (this.table.columnManager.getElement().insertBefore(this.topElement, this.table.columnManager.headersElement.nextSibling), this.topInitialized = !0)
            }
        }, {
            key: "initializeBottomRow", value: function () {
                this.botInitialized || (this.footerPrepend(this.botElement), this.botInitialized = !0)
            }
        }, {
            key: "scrollHorizontal", value: function (e) {
                this.botInitialized && this.botRow && (this.botRow.getElement().style.marginLeft = -e + "px")
            }
        }, {
            key: "recalc", value: function (e) {
                var t;
                if (this.topInitialized || this.botInitialized) {
                    if (this.rowsToData(e), this.topInitialized) {
                        for (this.topRow && this.topRow.deleteCells(), t = this.generateRow("top", this.rowsToData(e)), this.topRow = t; this.topElement.firstChild;) this.topElement.removeChild(this.topElement.firstChild);
                        this.topElement.appendChild(t.getElement()), t.initialize(!0)
                    }
                    if (this.botInitialized) {
                        for (this.botRow && this.botRow.deleteCells(), t = this.generateRow("bottom", this.rowsToData(e)), this.botRow = t; this.botElement.firstChild;) this.botElement.removeChild(this.botElement.firstChild);
                        this.botElement.appendChild(t.getElement()), t.initialize(!0)
                    }
                    this.table.rowManager.adjustTableSize(), this.table.modExists("frozenColumns") && this.table.modules.frozenColumns.layout()
                }
            }
        }, {
            key: "recalcRowGroup", value: function (e) {
                this.recalcGroup(this.table.modules.groupRows.getRowGroup(e))
            }
        }, {
            key: "recalcAll", value: function () {
                var e = this;
                (this.topCalcs.length || this.botCalcs.length) && ("group" !== this.table.options.columnCalcs && this.recalcActiveRows(), this.table.options.groupBy && "table" !== this.table.options.columnCalcs && this.table.modules.groupRows.getChildGroups().forEach((function (t) {
                    e.recalcGroup(t)
                })))
            }
        }, {
            key: "recalcGroup", value: function (e) {
                var t, i;
                e && e.calcs && (e.calcs.bottom && (t = this.rowsToData(e.rows), i = this.generateRowData("bottom", t), e.calcs.bottom.updateData(i), e.calcs.bottom.reinitialize()), e.calcs.top && (t = this.rowsToData(e.rows), i = this.generateRowData("top", t), e.calcs.top.updateData(i), e.calcs.top.reinitialize()))
            }
        }, {
            key: "generateTopRow", value: function (e) {
                return this.generateRow("top", this.rowsToData(e))
            }
        }, {
            key: "generateBottomRow", value: function (e) {
                return this.generateRow("bottom", this.rowsToData(e))
            }
        }, {
            key: "rowsToData", value: function (e) {
                var t = this, i = [];
                return e.forEach((function (e) {
                    if (i.push(e.getData()), t.table.options.dataTree && t.table.options.dataTreeChildColumnCalcs && e.modules.dataTree && e.modules.dataTree.open) {
                        var n = t.rowsToData(t.table.modules.dataTree.getFilteredTreeChildren(e));
                        i = i.concat(n)
                    }
                })), i
            }
        }, {
            key: "generateRow", value: function (e, t) {
                var i, n = this, o = this.generateRowData(e, t);
                return this.table.modExists("mutator") && this.table.modules.mutator.disable(), i = new D(o, this, "calc"), this.table.modExists("mutator") && this.table.modules.mutator.enable(), i.getElement().classList.add("tabulator-calcs", "tabulator-calcs-" + e), i.component = !1, i.getComponent = function () {
                    return i.component || (i.component = new ae(i)), i.component
                }, i.generateCells = function () {
                    var t = [];
                    n.table.columnManager.columnsByIndex.forEach((function (o) {
                        n.genColumn.setField(o.getField()), n.genColumn.hozAlign = o.hozAlign, o.definition[e + "CalcFormatter"] && n.table.modExists("format") ? n.genColumn.modules.format = {
                            formatter: n.table.modules.format.getFormatter(o.definition[e + "CalcFormatter"]),
                            params: o.definition[e + "CalcFormatterParams"] || {}
                        } : n.genColumn.modules.format = {
                            formatter: n.table.modules.format.getFormatter("plaintext"),
                            params: {}
                        }, n.genColumn.definition.cssClass = o.definition.cssClass;
                        var a = new w(n.genColumn, i);
                        a.getElement(), a.column = o, a.setWidth(), o.cells.push(a), t.push(a), o.visible || a.hide()
                    })), i.cells = t
                }, i
            }
        }, {
            key: "generateRowData", value: function (e, t) {
                var i, n, o = {}, a = "top" == e ? this.topCalcs : this.botCalcs,
                    r = "top" == e ? "topCalc" : "botCalc";
                return a.forEach((function (e) {
                    var a = [];
                    e.modules.columnCalcs && e.modules.columnCalcs[r] && (t.forEach((function (t) {
                        a.push(e.getFieldValue(t))
                    })), n = r + "Params", i = "function" == typeof e.modules.columnCalcs[n] ? e.modules.columnCalcs[n](a, t) : e.modules.columnCalcs[n], e.setFieldValue(o, e.modules.columnCalcs[r](a, t, i)))
                })), o
            }
        }, {
            key: "hasTopCalcs", value: function () {
                return !!this.topCalcs.length
            }
        }, {
            key: "hasBottomCalcs", value: function () {
                return !!this.botCalcs.length
            }
        }, {
            key: "redraw", value: function () {
                this.topRow && this.topRow.normalizeHeight(!0), this.botRow && this.botRow.normalizeHeight(!0)
            }
        }, {
            key: "getResults", value: function () {
                var e = this, t = {};
                return this.table.options.groupBy && this.table.modExists("groupRows") ? this.table.modules.groupRows.getGroups(!0).forEach((function (i) {
                    t[i.getKey()] = e.getGroupResults(i)
                })) : t = {
                    top: this.topRow ? this.topRow.getData() : {},
                    bottom: this.botRow ? this.botRow.getData() : {}
                }, t
            }
        }, {
            key: "getGroupResults", value: function (e) {
                var t = this, i = e._getSelf(), n = e.getSubGroups(), o = {};
                return n.forEach((function (e) {
                    o[e.getKey()] = t.getGroupResults(e)
                })), {
                    top: i.calcs.top ? i.calcs.top.getData() : {},
                    bottom: i.calcs.bottom ? i.calcs.bottom.getData() : {},
                    groups: o
                }
            }
        }]), r
    }(V);
    se.moduleName = "columnCalcs", se.calculations = re;
    var le = function (i) {
        a(r, i);
        var n = c(r);

        function r(e) {
            var i;
            return t(this, r), (i = n.call(this, e)).indent = 10, i.field = "", i.collapseEl = null, i.expandEl = null, i.branchEl = null, i.elementField = !1, i.startOpen = function () {
            }, i.displayIndex = 0, i.registerTableOption("dataTree", !1), i.registerTableOption("dataTreeFilter", !0), i.registerTableOption("dataTreeSort", !0), i.registerTableOption("dataTreeElementColumn", !1), i.registerTableOption("dataTreeBranchElement", !0), i.registerTableOption("dataTreeChildIndent", 9), i.registerTableOption("dataTreeChildField", "_children"), i.registerTableOption("dataTreeCollapseElement", !1), i.registerTableOption("dataTreeExpandElement", !1), i.registerTableOption("dataTreeStartExpanded", !1), i.registerTableOption("dataTreeChildColumnCalcs", !1), i.registerTableOption("dataTreeSelectPropagate", !1), i.registerComponentFunction("row", "treeCollapse", i.collapseRow.bind(l(i))), i.registerComponentFunction("row", "treeExpand", i.expandRow.bind(l(i))), i.registerComponentFunction("row", "treeToggle", i.toggleRow.bind(l(i))), i.registerComponentFunction("row", "getTreeParent", i.getTreeParent.bind(l(i))), i.registerComponentFunction("row", "getTreeChildren", i.getRowChildren.bind(l(i))), i.registerComponentFunction("row", "addTreeChild", i.addTreeChildRow.bind(l(i))), i.registerComponentFunction("row", "isTreeExpanded", i.isRowExpanded.bind(l(i))), i
        }

        return o(r, [{
            key: "initialize", value: function () {
                if (this.table.options.dataTree) {
                    var t = null, i = this.table.options;
                    switch (this.field = i.dataTreeChildField, this.indent = i.dataTreeChildIndent, i.dataTreeBranchElement && (!0 === i.dataTreeBranchElement ? (this.branchEl = document.createElement("div"), this.branchEl.classList.add("tabulator-data-tree-branch")) : "string" == typeof i.dataTreeBranchElement ? ((t = document.createElement("div")).innerHTML = i.dataTreeBranchElement, this.branchEl = t.firstChild) : this.branchEl = i.dataTreeBranchElement), i.dataTreeCollapseElement ? "string" == typeof i.dataTreeCollapseElement ? ((t = document.createElement("div")).innerHTML = i.dataTreeCollapseElement, this.collapseEl = t.firstChild) : this.collapseEl = i.dataTreeCollapseElement : (this.collapseEl = document.createElement("div"), this.collapseEl.classList.add("tabulator-data-tree-control"), this.collapseEl.tabIndex = 0, this.collapseEl.innerHTML = "<div class='tabulator-data-tree-control-collapse'></div>"), i.dataTreeExpandElement ? "string" == typeof i.dataTreeExpandElement ? ((t = document.createElement("div")).innerHTML = i.dataTreeExpandElement, this.expandEl = t.firstChild) : this.expandEl = i.dataTreeExpandElement : (this.expandEl = document.createElement("div"), this.expandEl.classList.add("tabulator-data-tree-control"), this.expandEl.tabIndex = 0, this.expandEl.innerHTML = "<div class='tabulator-data-tree-control-expand'></div>"), e(i.dataTreeStartExpanded)) {
                        case"boolean":
                            this.startOpen = function (e, t) {
                                return i.dataTreeStartExpanded
                            };
                            break;
                        case"function":
                            this.startOpen = i.dataTreeStartExpanded;
                            break;
                        default:
                            this.startOpen = function (e, t) {
                                return i.dataTreeStartExpanded[t]
                            }
                    }
                    this.subscribe("row-init", this.initializeRow.bind(this)), this.subscribe("row-layout-after", this.layoutRow.bind(this)), this.subscribe("row-deleted", this.rowDelete.bind(this), 0), this.subscribe("row-data-changed", this.rowDataChanged.bind(this), 10), this.subscribe("cell-value-updated", this.cellValueChanged.bind(this)), this.subscribe("edit-cancelled", this.cellValueChanged.bind(this)), this.subscribe("column-moving-rows", this.columnMoving.bind(this)), this.subscribe("table-built", this.initializeElementField.bind(this)), this.subscribe("table-redrawing", this.tableRedrawing.bind(this)), this.registerDisplayHandler(this.getRows.bind(this), 30)
                }
            }
        }, {
            key: "tableRedrawing", value: function (e) {
                var t = this;
                e && this.table.rowManager.getRows().forEach((function (e) {
                    t.reinitializeRowChildren(e)
                }))
            }
        }, {
            key: "initializeElementField", value: function () {
                var e = this.table.columnManager.getFirstVisibleColumn();
                this.elementField = this.table.options.dataTreeElementColumn || !!e && e.field
            }
        }, {
            key: "getRowChildren", value: function (e) {
                return this.getTreeChildren(e, !0)
            }
        }, {
            key: "columnMoving", value: function () {
                var e = this, t = [];
                return this.table.rowManager.rows.forEach((function (i) {
                    t = t.concat(e.getTreeChildren(i, !1, !0))
                })), t
            }
        }, {
            key: "rowDataChanged", value: function (e, t, i) {
                this.redrawNeeded(i) && (this.initializeRow(e), t && (this.layoutRow(e), this.refreshData(!0)))
            }
        }, {
            key: "cellValueChanged", value: function (e) {
                e.column.getField() === this.elementField && this.layoutRow(e.row)
            }
        }, {
            key: "initializeRow", value: function (t) {
                var i = t.getData()[this.field], n = Array.isArray(i), o = n || !n && "object" === e(i) && null !== i;
                !o && t.modules.dataTree && t.modules.dataTree.branchEl && t.modules.dataTree.branchEl.parentNode.removeChild(t.modules.dataTree.branchEl), !o && t.modules.dataTree && t.modules.dataTree.controlEl && t.modules.dataTree.controlEl.parentNode.removeChild(t.modules.dataTree.controlEl), t.modules.dataTree = {
                    index: t.modules.dataTree ? t.modules.dataTree.index : 0,
                    open: !!o && (t.modules.dataTree ? t.modules.dataTree.open : this.startOpen(t.getComponent(), 0)),
                    controlEl: !(!t.modules.dataTree || !o) && t.modules.dataTree.controlEl,
                    branchEl: !(!t.modules.dataTree || !o) && t.modules.dataTree.branchEl,
                    parent: !!t.modules.dataTree && t.modules.dataTree.parent,
                    children: o
                }
            }
        }, {
            key: "reinitializeRowChildren", value: function (e) {
                this.getTreeChildren(e, !1, !0).forEach((function (e) {
                    e.reinitialize(!0)
                }))
            }
        }, {
            key: "layoutRow", value: function (e) {
                var t = (this.elementField ? e.getCell(this.elementField) : e.getCells()[0]).getElement(),
                    i = e.modules.dataTree;
                i.branchEl && (i.branchEl.parentNode && i.branchEl.parentNode.removeChild(i.branchEl), i.branchEl = !1), i.controlEl && (i.controlEl.parentNode && i.controlEl.parentNode.removeChild(i.controlEl), i.controlEl = !1), this.generateControlElement(e, t), e.getElement().classList.add("tabulator-tree-level-" + i.index), i.index && (this.branchEl ? (i.branchEl = this.branchEl.cloneNode(!0), t.insertBefore(i.branchEl, t.firstChild), this.table.rtl ? i.branchEl.style.marginRight = (i.branchEl.offsetWidth + i.branchEl.style.marginLeft) * (i.index - 1) + i.index * this.indent + "px" : i.branchEl.style.marginLeft = (i.branchEl.offsetWidth + i.branchEl.style.marginRight) * (i.index - 1) + i.index * this.indent + "px") : this.table.rtl ? t.style.paddingRight = parseInt(window.getComputedStyle(t, null).getPropertyValue("padding-right")) + i.index * this.indent + "px" : t.style.paddingLeft = parseInt(window.getComputedStyle(t, null).getPropertyValue("padding-left")) + i.index * this.indent + "px")
            }
        }, {
            key: "generateControlElement", value: function (e, t) {
                var i = this, n = e.modules.dataTree, o = (t = t || e.getCells()[0].getElement(), n.controlEl);
                !1 !== n.children && (n.open ? (n.controlEl = this.collapseEl.cloneNode(!0), n.controlEl.addEventListener("click", (function (t) {
                    t.stopPropagation(), i.collapseRow(e)
                }))) : (n.controlEl = this.expandEl.cloneNode(!0), n.controlEl.addEventListener("click", (function (t) {
                    t.stopPropagation(), i.expandRow(e)
                }))), n.controlEl.addEventListener("mousedown", (function (e) {
                    e.stopPropagation()
                })), o && o.parentNode === t ? o.parentNode.replaceChild(n.controlEl, o) : t.insertBefore(n.controlEl, t.firstChild))
            }
        }, {
            key: "setDisplayIndex", value: function (e) {
                this.displayIndex = e
            }
        }, {
            key: "getDisplayIndex", value: function () {
                return this.displayIndex
            }
        }, {
            key: "getRows", value: function (e) {
                var t = this, i = [];
                return e.forEach((function (e, n) {
                    var o;
                    i.push(e), e instanceof D && (e.create(), (o = e.modules.dataTree.children).index || !1 === o.children || t.getChildren(e).forEach((function (e) {
                        e.create(), i.push(e)
                    })))
                })), i
            }
        }, {
            key: "getChildren", value: function (e, t) {
                var i = this, n = e.modules.dataTree, o = [], a = [];
                return !1 !== n.children && (n.open || t) && (Array.isArray(n.children) || (n.children = this.generateChildren(e)), o = this.table.modExists("filter") && this.table.options.dataTreeFilter ? this.table.modules.filter.filter(n.children) : n.children, this.table.modExists("sort") && this.table.options.dataTreeSort && this.table.modules.sort.sort(o), o.forEach((function (e) {
                    a.push(e), i.getChildren(e).forEach((function (e) {
                        a.push(e)
                    }))
                }))), a
            }
        }, {
            key: "generateChildren", value: function (e) {
                var t = this, i = [], n = e.getData()[this.field];
                return Array.isArray(n) || (n = [n]), n.forEach((function (n) {
                    var o = new D(n || {}, t.table.rowManager);
                    o.create(), o.modules.dataTree.index = e.modules.dataTree.index + 1, o.modules.dataTree.parent = e, o.modules.dataTree.children && (o.modules.dataTree.open = t.startOpen(o.getComponent(), o.modules.dataTree.index)), i.push(o)
                })), i
            }
        }, {
            key: "expandRow", value: function (e, t) {
                var i = e.modules.dataTree;
                !1 !== i.children && (i.open = !0, e.reinitialize(), this.refreshData(!0), this.dispatchExternal("dataTreeRowExpanded", e.getComponent(), e.modules.dataTree.index))
            }
        }, {
            key: "collapseRow", value: function (e) {
                var t = e.modules.dataTree;
                !1 !== t.children && (t.open = !1, e.reinitialize(), this.refreshData(!0), this.dispatchExternal("dataTreeRowCollapsed", e.getComponent(), e.modules.dataTree.index))
            }
        }, {
            key: "toggleRow", value: function (e) {
                var t = e.modules.dataTree;
                !1 !== t.children && (t.open ? this.collapseRow(e) : this.expandRow(e))
            }
        }, {
            key: "isRowExpanded", value: function (e) {
                return e.modules.dataTree.open
            }
        }, {
            key: "getTreeParent", value: function (e) {
                return !!e.modules.dataTree.parent && e.modules.dataTree.parent.getComponent()
            }
        }, {
            key: "getTreeParentRoot", value: function (e) {
                return e.modules.dataTree.parent ? this.getTreeParentRoot(e.modules.dataTree.parent) : e
            }
        }, {
            key: "getFilteredTreeChildren", value: function (e) {
                var t = e.modules.dataTree, i = [];
                return t.children && (Array.isArray(t.children) || (t.children = this.generateChildren(e)), (this.table.modExists("filter") && this.table.options.dataTreeFilter ? this.table.modules.filter.filter(t.children) : t.children).forEach((function (e) {
                    e instanceof D && i.push(e)
                }))), i
            }
        }, {
            key: "rowDelete", value: function (e) {
                var t, i = e.modules.dataTree.parent;
                i && (!1 !== (t = this.findChildIndex(e, i)) && i.data[this.field].splice(t, 1), i.data[this.field].length || delete i.data[this.field], this.initializeRow(i), this.layoutRow(i)), this.refreshData(!0)
            }
        }, {
            key: "addTreeChildRow", value: function (e, t, i, n) {
                var o = !1;
                "string" == typeof t && (t = JSON.parse(t)), Array.isArray(e.data[this.field]) || (e.data[this.field] = [], e.modules.dataTree.open = this.startOpen(e.getComponent(), e.modules.dataTree.index)), void 0 !== n && !1 !== (o = this.findChildIndex(n, e)) && e.data[this.field].splice(i ? o : o + 1, 0, t), !1 === o && (i ? e.data[this.field].unshift(t) : e.data[this.field].push(t)), this.initializeRow(e), this.layoutRow(e), this.refreshData(!0)
            }
        }, {
            key: "findChildIndex", value: function (t, i) {
                var n = this, o = !1;
                return "object" == e(t) ? t instanceof D ? o = t.data : t instanceof RowComponent ? o = t._getSelf().data : "undefined" != typeof HTMLElement && t instanceof HTMLElement && i.modules.dataTree && (o = i.modules.dataTree.children.find((function (e) {
                    return e instanceof D && e.element === t
                }))) && (o = o.data) : o = null != t && i.data[this.field].find((function (e) {
                    return e.data[n.table.options.index] == t
                })), o && (Array.isArray(i.data[this.field]) && (o = i.data[this.field].indexOf(o)), -1 == o && (o = !1)), o
            }
        }, {
            key: "getTreeChildren", value: function (e, t, i) {
                var n = this, o = e.modules.dataTree, a = [];
                return o.children && (Array.isArray(o.children) || (o.children = this.generateChildren(e)), o.children.forEach((function (e) {
                    e instanceof D && (a.push(t ? e.getComponent() : e), i && (a = a.concat(n.getTreeChildren(e, t, i))))
                }))), a
            }
        }, {
            key: "getChildField", value: function () {
                return this.field
            }
        }, {
            key: "redrawNeeded", value: function (e) {
                return !!this.field && void 0 !== e[this.field] || !!this.elementField && void 0 !== e[this.elementField]
            }
        }]), r
    }(V);
    le.moduleName = "dataTree";
    var ue = {
        csv: function (t, i, n) {
            var o = i && i.delimiter ? i.delimiter : ",", a = [], r = [];
            t.forEach((function (t) {
                var i = [];
                switch (t.type) {
                    case"group":
                        console.warn("Download Warning - CSV downloader cannot process row groups");
                        break;
                    case"calc":
                        console.warn("Download Warning - CSV downloader cannot process column calculations");
                        break;
                    case"header":
                        t.columns.forEach((function (e, t) {
                            e && 1 === e.depth && (r[t] = void 0 === e.value || null === e.value ? "" : '"' + String(e.value).split('"').join('""') + '"')
                        }));
                        break;
                    case"row":
                        t.columns.forEach((function (t) {
                            if (t) {
                                switch (e(t.value)) {
                                    case"object":
                                        t.value = null !== t.value ? JSON.stringify(t.value) : "";
                                        break;
                                    case"undefined":
                                        t.value = ""
                                }
                                i.push('"' + String(t.value).split('"').join('""') + '"')
                            }
                        })), a.push(i.join(o))
                }
            })), r.length && a.unshift(r.join(o)), a = a.join("\n"), i.bom && (a = "\ufeff" + a), n(a, "text/csv")
        }, json: function (e, t, i) {
            var n = [];
            e.forEach((function (e) {
                var t = {};
                switch (e.type) {
                    case"header":
                        break;
                    case"group":
                        console.warn("Download Warning - JSON downloader cannot process row groups");
                        break;
                    case"calc":
                        console.warn("Download Warning - JSON downloader cannot process column calculations");
                        break;
                    case"row":
                        e.columns.forEach((function (e) {
                            e && (t[e.component.getTitleDownload() || e.component.getField()] = e.value)
                        })), n.push(t)
                }
            })), i(n = JSON.stringify(n, null, "\t"), "application/json")
        }, jsonLines: function (e, t, i) {
            var n = [];
            e.forEach((function (e) {
                var t = {};
                switch (e.type) {
                    case"header":
                        break;
                    case"group":
                        console.warn("Download Warning - JSON downloader cannot process row groups");
                        break;
                    case"calc":
                        console.warn("Download Warning - JSON downloader cannot process column calculations");
                        break;
                    case"row":
                        e.columns.forEach((function (e) {
                            e && (t[e.component.getTitleDownload() || e.component.getField()] = e.value)
                        })), n.push(JSON.stringify(t))
                }
            })), i(n.join("\n"), "application/x-ndjson")
        }, pdf: function (t, i, n) {
            var o = [], a = [], r = {},
                s = i.rowGroupStyles || {fontStyle: "bold", fontSize: 12, cellPadding: 6, fillColor: 220},
                l = i.rowCalcStyles || {fontStyle: "bold", fontSize: 10, cellPadding: 4, fillColor: 232},
                u = i.jsPDF || {}, c = i && i.title ? i.title : "";

            function h(t, i) {
                var n = [];
                return t.columns.forEach((function (t) {
                    var o;
                    if (t) {
                        switch (e(t.value)) {
                            case"object":
                                t.value = null !== t.value ? JSON.stringify(t.value) : "";
                                break;
                            case"undefined":
                                t.value = ""
                        }
                        o = {content: t.value, colSpan: t.width, rowSpan: t.height}, i && (o.styles = i), n.push(o)
                    }
                })), n
            }

            u.orientation || (u.orientation = i.orientation || "landscape"), u.unit || (u.unit = "pt"), t.forEach((function (e) {
                switch (e.type) {
                    case"header":
                        o.push(h(e));
                        break;
                    case"group":
                        a.push(h(e, s));
                        break;
                    case"calc":
                        a.push(h(e, l));
                        break;
                    case"row":
                        a.push(h(e))
                }
            }));
            var d = new jspdf.jsPDF(u);
            i && i.autoTable && (r = "function" == typeof i.autoTable ? i.autoTable(d) || {} : i.autoTable), c && (r.didDrawPage = function (e) {
                d.text(c, 40, 30)
            }), r.head = o, r.body = a, d.autoTable(r), i && i.documentProcessing && i.documentProcessing(d), n(d.output("arraybuffer"), "application/pdf")
        }, xlsx: function (t, i, n) {
            var o = i.sheetName || "Sheet1", a = XLSX.utils.book_new(), r = new g(this);

            function s() {
                var i = [], n = [], o = {}, a = {
                    s: {c: 0, r: 0}, e: {
                        c: t[0] ? t[0].columns.reduce((function (e, t) {
                            return e + (t && t.width ? t.width : 1)
                        }), 0) : 0, r: t.length
                    }
                };
                return t.forEach((function (t, o) {
                    var a = [];
                    t.columns.forEach((function (t, i) {
                        t ? (a.push(t.value instanceof Date || "object" !== e(t.value) ? t.value : JSON.stringify(t.value)), (t.width > 1 || t.height > -1) && (t.height > 1 || t.width > 1) && n.push({
                            s: {
                                r: o,
                                c: i
                            }, e: {r: o + t.height - 1, c: i + t.width - 1}
                        })) : a.push("")
                    })), i.push(a)
                })), XLSX.utils.sheet_add_aoa(o, i), o["!ref"] = XLSX.utils.encode_range(a), n.length && (o["!merges"] = n), o
            }

            if (a.SheetNames = [], a.Sheets = {}, i.sheetOnly) n(s()); else {
                if (i.sheets) for (var l in i.sheets) !0 === i.sheets[l] ? (a.SheetNames.push(l), a.Sheets[l] = s()) : (a.SheetNames.push(l), r.commsSend(i.sheets[l], "download", "intercept", {
                    type: "xlsx",
                    options: {sheetOnly: !0},
                    active: this.active,
                    intercept: function (e) {
                        a.Sheets[l] = e
                    }
                })); else a.SheetNames.push(o), a.Sheets[o] = s();
                i.documentProcessing && (a = i.documentProcessing(a)), n(function (e) {
                    for (var t = new ArrayBuffer(e.length), i = new Uint8Array(t), n = 0; n != e.length; ++n) i[n] = 255 & e.charCodeAt(n);
                    return t
                }(XLSX.write(a, {bookType: "xlsx", bookSST: !0, type: "binary"})), "application/octet-stream")
            }
        }, html: function (e, t, i) {
            this.modExists("export", !0) && i(this.modules.export.genereateHTMLTable(e), "text/html")
        }
    }, ce = function (e) {
        a(n, e);
        var i = c(n);

        function n(e) {
            var o;
            return t(this, n), (o = i.call(this, e)).registerTableOption("downloadReady", (function (e, t) {
                return t
            })), o.registerTableOption("downloadConfig", {}), o.registerTableOption("downloadRowRange", "active"), o.registerColumnOption("download"), o.registerColumnOption("titleDownload"), o
        }

        return o(n, [{
            key: "initialize", value: function () {
                this.registerTableFunction("download", this.download.bind(this)), this.registerTableFunction("downloadToTab", this.downloadToTab.bind(this))
            }
        }, {
            key: "downloadToTab", value: function (e, t, i, n) {
                this.download(e, t, i, n, !0)
            }
        }, {
            key: "download", value: function (e, t, i, o, a) {
                var r = !1;
                if ("function" == typeof e ? r = e : n.downloaders[e] ? r = n.downloaders[e] : console.warn("Download Error - No such download type found: ", e), r) {
                    var s = this.generateExportList(o);
                    r.call(this.table, s, i || {}, function (i, n) {
                        a ? !0 === a ? this.triggerDownload(i, n, e, t, !0) : a(i) : this.triggerDownload(i, n, e, t)
                    }.bind(this))
                }
            }
        }, {
            key: "generateExportList", value: function (e) {
                var t = this.table.modules.export.generateExportList(this.table.options.downloadConfig, !1, e || this.table.options.downloadRowRange, "download"),
                    i = this.table.options.groupHeaderDownload;
                return i && !Array.isArray(i) && (i = [i]), t.forEach((function (e) {
                    var t;
                    "group" === e.type && (t = e.columns[0], i && i[e.indent] && (t.value = i[e.indent](t.value, e.component._group.getRowCount(), e.component._group.getData(), e.component)))
                })), t
            }
        }, {
            key: "triggerDownload", value: function (e, t, i, n, o) {
                var a = document.createElement("a"), r = new Blob([e], {type: t});
                n = n || "Tabulator." + ("function" == typeof i ? "txt" : i);
                (r = this.table.options.downloadReady(e, r)) && (o ? window.open(window.URL.createObjectURL(r)) : navigator.msSaveOrOpenBlob ? navigator.msSaveOrOpenBlob(r, n) : (a.setAttribute("href", window.URL.createObjectURL(r)), a.setAttribute("download", n), a.style.display = "none", document.body.appendChild(a), a.click(), document.body.removeChild(a)), this.dispatchExternal("downloadComplete"))
            }
        }, {
            key: "commsReceived", value: function (e, t, i) {
                switch (t) {
                    case"intercept":
                        this.download(i.type, "", i.options, i.active, i.intercept)
                }
            }
        }]), n
    }(V);

    function he(e, t) {
        var i = t.mask, n = void 0 !== t.maskLetterChar ? t.maskLetterChar : "A",
            o = void 0 !== t.maskNumberChar ? t.maskNumberChar : "9",
            a = void 0 !== t.maskWildcardChar ? t.maskWildcardChar : "*";

        function r(t) {
            var s = i[t];
            void 0 !== s && s !== a && s !== n && s !== o && (e.value = e.value + "" + s, r(t + 1))
        }

        e.addEventListener("keydown", (function (t) {
            var r = e.value.length, s = t.key;
            if (t.keyCode > 46) {
                if (r >= i.length) return t.preventDefault(), t.stopPropagation(), !1;
                switch (i[r]) {
                    case n:
                        if (s.toUpperCase() == s.toLowerCase()) return t.preventDefault(), t.stopPropagation(), !1;
                        break;
                    case o:
                        if (isNaN(s)) return t.preventDefault(), t.stopPropagation(), !1;
                        break;
                    case a:
                        break;
                    default:
                        if (s !== i[r]) return t.preventDefault(), t.stopPropagation(), !1
                }
            }
        })), e.addEventListener("keyup", (function (i) {
            i.keyCode > 46 && t.maskAutoFill && r(e.value.length)
        })), e.placeholder || (e.placeholder = i), t.maskAutoFill && r(e.value.length)
    }

    ce.moduleName = "download", ce.downloaders = ue;
    var de = function () {
        function i(e, n, o, a, r, s) {
            t(this, i), this.edit = e, this.table = e.table, this.cell = n, this.params = this._initializeParams(s), this.data = [], this.displayItems = [], this.currentItems = [], this.focusedItem = null, this.input = this._createInputElement(), this.listEl = this._createListElement(), this.initialValues = null, this.isFilter = !n._getSelf, this.filterTimeout = null, this.filtered = !1, this.typing = !1, this.values = [], this.popup = null, this.listIteration = 0, this.lastAction = "", this.blurable = !0, this.actions = {
                success: a,
                cancel: r
            }, this._deprecationCheck(), this._initializeValue(), o(this._onRendered.bind(this))
        }

        return o(i, [{
            key: "_deprecationCheck", value: function () {
                this.params.listItemFormatter && console.warn("The listItemFormatter editor param has been deprecated, please see the latest editor documentation for updated options"), this.params.sortValuesList && console.warn("The sortValuesList editor param has been deprecated, please see the latest editor documentation for updated options"), this.params.searchFunc && console.warn("The searchFunc editor param has been deprecated, please see the latest editor documentation for updated options"), this.params.searchingPlaceholder && console.warn("The searchingPlaceholder editor param has been deprecated, please see the latest editor documentation for updated options")
            }
        }, {
            key: "_initializeValue", value: function () {
                var e = this.cell.getValue();
                void 0 === e && void 0 !== this.params.defaultValue && (e = this.params.defaultValue), this.initialValues = this.params.multiselect ? e : [e], this.isFilter && (this.input.value = this.initialValues ? this.initialValues.join(",") : "", this.headerFilterInitialListGen())
            }
        }, {
            key: "_onRendered", value: function () {
                var e = this.cell.getElement();

                function t(e) {
                    e.stopPropagation()
                }

                this.input.style.height = "100%", this.input.focus({preventScroll: !0}), e.addEventListener("click", t), setTimeout((function () {
                    e.removeEventListener("click", t)
                }), 1e3)
            }
        }, {
            key: "_createListElement", value: function () {
                var e = document.createElement("div");
                return e.classList.add("tabulator-edit-list"), e.addEventListener("mousedown", this._preventBlur.bind(this)), e.addEventListener("keydown", this._inputKeyDown.bind(this)), e
            }
        }, {
            key: "_setListWidth", value: function () {
                var e = this.isFilter ? this.input : this.cell.getElement();
                this.listEl.style.minWidth = e.offsetWidth + "px", this.params.maxWidth && (!0 === this.params.maxWidth ? this.listEl.style.maxWidth = e.offsetWidth + "px" : "number" == typeof this.params.maxWidth ? this.listEl.style.maxWidth = this.params.maxWidth + "px" : this.listEl.style.maxWidth = this.params.maxWidth)
            }
        }, {
            key: "_createInputElement", value: function () {
                var t = this.params.elementAttributes, i = document.createElement("input");
                if (i.setAttribute("type", this.params.clearable ? "search" : "text"), i.style.padding = "4px", i.style.width = "100%", i.style.boxSizing = "border-box", this.params.autocomplete || (i.style.cursor = "default", i.style.caretColor = "transparent"), t && "object" == e(t)) for (var n in t) "+" == n.charAt(0) ? (n = n.slice(1), i.setAttribute(n, i.getAttribute(n) + t["+" + n])) : i.setAttribute(n, t[n]);
                return this.params.mask && he(i, this.params), this._bindInputEvents(i), i
            }
        }, {
            key: "_initializeParams", value: function (t) {
                var i, n = ["values", "valuesURL", "valuesLookup"];
                return (t = Object.assign({}, t)).verticalNavigation = t.verticalNavigation || "editor", t.placeholderLoading = void 0 === t.placeholderLoading ? "Searching ..." : t.placeholderLoading, t.placeholderEmpty = void 0 === t.placeholderEmpty ? "No Results Found" : t.placeholderEmpty, t.filterDelay = void 0 === t.filterDelay ? 300 : t.filterDelay, t.emptyValue = Object.keys(t).includes("emptyValue") ? t.emptyValue : "", (i = Object.keys(t).filter((function (e) {
                    return n.includes(e)
                })).length) ? i > 1 && console.warn("list editor config error - only one of the values, valuesURL, or valuesLookup options can be set on the same editor") : console.warn("list editor config error - either the values, valuesURL, or valuesLookup option must be set"), t.autocomplete ? t.multiselect && (t.multiselect = !1, console.warn("list editor config error - multiselect option is not available when autocomplete is enabled")) : (t.freetext && (t.freetext = !1, console.warn("list editor config error - freetext option is only available when autocomplete is enabled")), t.filterFunc && (t.filterFunc = !1, console.warn("list editor config error - filterFunc option is only available when autocomplete is enabled")), t.filterRemote && (t.filterRemote = !1, console.warn("list editor config error - filterRemote option is only available when autocomplete is enabled")), t.mask && (t.mask = !1, console.warn("list editor config error - mask option is only available when autocomplete is enabled")), t.allowEmpty && (t.allowEmpty = !1, console.warn("list editor config error - allowEmpty option is only available when autocomplete is enabled")), t.listOnEmpty && (t.listOnEmpty = !1, console.warn("list editor config error - listOnEmpty option is only available when autocomplete is enabled"))), t.filterRemote && "function" != typeof t.valuesLookup && !e(t.valuesURL) && (t.filterRemote = !1, console.warn("list editor config error - filterRemote option should only be used when values list is populated from a remote source")), t
            }
        }, {
            key: "_bindInputEvents", value: function (e) {
                e.addEventListener("focus", this._inputFocus.bind(this)), e.addEventListener("click", this._inputClick.bind(this)), e.addEventListener("blur", this._inputBlur.bind(this)), e.addEventListener("keydown", this._inputKeyDown.bind(this)), e.addEventListener("search", this._inputSearch.bind(this)), this.params.autocomplete && e.addEventListener("keyup", this._inputKeyUp.bind(this))
            }
        }, {
            key: "_inputFocus", value: function (e) {
                this.rebuildOptionsList()
            }
        }, {
            key: "_filter", value: function () {
                var e = this;
                this.params.filterRemote ? (clearTimeout(this.filterTimeout), this.filterTimeout = setTimeout((function () {
                    e.rebuildOptionsList()
                }), this.params.filterDelay)) : this._filterList()
            }
        }, {
            key: "_inputClick", value: function (e) {
                e.stopPropagation()
            }
        }, {
            key: "_inputBlur", value: function (e) {
                this.blurable && this.popup && this.popup.hide()
            }
        }, {
            key: "_inputSearch", value: function () {
                this._clearChoices()
            }
        }, {
            key: "_inputKeyDown", value: function (e) {
                switch (e.keyCode) {
                    case 38:
                        this._keyUp(e);
                        break;
                    case 40:
                        this._keyDown(e);
                        break;
                    case 37:
                    case 39:
                        this._keySide(e);
                        break;
                    case 13:
                        this._keyEnter();
                        break;
                    case 27:
                        this._keyEsc();
                        break;
                    case 36:
                    case 35:
                        this._keyHomeEnd(e);
                        break;
                    case 9:
                        break;
                    default:
                        this._keySelectLetter(e)
                }
            }
        }, {
            key: "_inputKeyUp", value: function (e) {
                switch (e.keyCode) {
                    case 38:
                    case 37:
                    case 39:
                    case 40:
                    case 13:
                    case 27:
                        break;
                    default:
                        this._keyAutoCompLetter(e)
                }
            }
        }, {
            key: "_preventBlur", value: function () {
                this.blurable = !1, setTimeout((function () {
                    this.blurable = !0
                }), 10)
            }
        }, {
            key: "_keyUp", value: function (e) {
                var t = this.displayItems.indexOf(this.focusedItem);
                ("editor" == this.params.verticalNavigation || "hybrid" == this.params.verticalNavigation && t) && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault(), t > 0 && this._focusItem(this.displayItems[t - 1]))
            }
        }, {
            key: "_keyDown", value: function (e) {
                var t = this.displayItems.indexOf(this.focusedItem);
                ("editor" == this.params.verticalNavigation || "hybrid" == this.params.verticalNavigation && t < this.displayItems.length - 1) && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault(), t < this.displayItems.length - 1 && (-1 == t ? this._focusItem(this.displayItems[0]) : this._focusItem(this.displayItems[t + 1])))
            }
        }, {
            key: "_keySide", value: function (e) {
                e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault()
            }
        }, {
            key: "_keyEnter", value: function (e) {
                this.params.autocomplete && "typing" === this.lastAction ? this._resolveValue(!0) : this.focusedItem && this._chooseItem(this.focusedItem)
            }
        }, {
            key: "_keyEsc", value: function (e) {
                this._cancel()
            }
        }, {
            key: "_keyHomeEnd", value: function (e) {
                this.params.autocomplete && e.stopImmediatePropagation()
            }
        }, {
            key: "_keySelectLetter", value: function (e) {
                this.params.autocomplete || (e.preventDefault(), e.keyCode >= 38 && e.keyCode <= 90 && this._scrollToValue(e.keyCode))
            }
        }, {
            key: "_keyAutoCompLetter", value: function (e) {
                this._filter(), this.lastAction = "typing", this.typing = !0
            }
        }, {
            key: "_scrollToValue", value: function (e) {
                var t = this;
                clearTimeout(this.filterTimeout);
                var i = String.fromCharCode(e).toLowerCase();
                this.filterTerm += i.toLowerCase();
                var n = this.displayItems.find((function (e) {
                    return void 0 !== e.label && e.label.toLowerCase().startsWith(t.filterTerm)
                }));
                n && this._focusItem(n), this.filterTimeout = setTimeout((function () {
                    t.filterTerm = ""
                }), 800)
            }
        }, {
            key: "_focusItem", value: function (e) {
                this.lastAction = "focus", this.focusedItem && this.focusedItem.element && this.focusedItem.element.classList.remove("focused"), this.focusedItem = e, e && e.element && (e.element.classList.add("focused"), e.element.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "start"
                }))
            }
        }, {
            key: "headerFilterInitialListGen", value: function () {
                this._generateOptions(!0)
            }
        }, {
            key: "rebuildOptionsList", value: function () {
                this._generateOptions().then(this._sortOptions.bind(this)).then(this._buildList.bind(this)).then(this._showList.bind(this)).catch((function (e) {
                    Number.isInteger(e) || console.error("List generation error", e)
                }))
            }
        }, {
            key: "_filterList", value: function () {
                this._buildList(this._filterOptions()), this._showList()
            }
        }, {
            key: "_generateOptions", value: function (e) {
                var t = this, i = [], n = ++this.listIteration;
                return this.filtered = !1, this.params.values ? i = this.params.values : this.params.valuesURL ? i = this._ajaxRequest(this.params.valuesURL, this.input.value) : "function" == typeof this.params.valuesLookup ? i = this.params.valuesLookup(this.cell, this.input.value) : this.params.valuesLookup && (i = this._uniqueColumnValues(this.params.valuesLookupField)), i instanceof Promise ? (e || this._addPlaceholder(this.params.placeholderLoading), i.then().then((function (e) {
                    return t.listIteration === n ? t._parseList(e) : Promise.reject(n)
                }))) : Promise.resolve(this._parseList(i))
            }
        }, {
            key: "_addPlaceholder", value: function (e) {
                var t = document.createElement("div");
                "function" == typeof e && (e = e(cell.getComponent(), this.listEl)), e && (this._clearList(), e instanceof HTMLElement ? t = e : (t.classList.add("tabulator-edit-list-placeholder"), t.innerHTML = e), this.listEl.appendChild(t), this._showList())
            }
        }, {
            key: "_ajaxRequest", value: function (e, t) {
                return e = ee(e, {}, this.params.filterRemote ? {term: t} : {}), fetch(e).then((function (e) {
                    return e.ok ? e.json().catch((function (e) {
                        return console.warn("List Ajax Load Error - Invalid JSON returned", e), Promise.reject(e)
                    })) : (console.error("List Ajax Load Error - Connection Error: " + e.status, e.statusText), Promise.reject(e))
                })).catch((function (e) {
                    return console.error("List Ajax Load Error - Connection Error: ", e), Promise.reject(e)
                }))
            }
        }, {
            key: "_uniqueColumnValues", value: function (e) {
                var t, i = {}, n = this.table.getData(this.params.valuesLookup);
                return (t = e ? this.table.columnManager.getColumnByField(e) : this.cell.getColumn()._getSelf()) ? n.forEach((function (e) {
                    var n = t.getFieldValue(e);
                    null != n && "" !== n && (i[n] = !0)
                })) : (console.warn("unable to find matching column to create select lookup list:", e), i = []), Object.keys(i)
            }
        }, {
            key: "_parseList", value: function (t) {
                var i = this, n = [];
                return Array.isArray(t) || (t = Object.entries(t).map((function (e) {
                    var t = h(e, 2), i = t[0];
                    return {label: t[1], value: i}
                }))), t.forEach((function (t) {
                    "object" !== e(t) && (t = {label: t, value: t}), i._parseListItem(t, n, 0)
                })), !this.currentItems.length && this.params.freetext && (this.input.value = this.initialValues, this.typing = !0, this.lastAction = "typing"), this.data = n, n
            }
        }, {
            key: "_parseListItem", value: function (e, t, i) {
                var n = {};
                e.options ? n = this._parseListGroup(e, i + 1) : (n = {
                    label: e.label,
                    value: e.value,
                    itemParams: e.itemParams,
                    elementAttributes: e.elementAttributes,
                    element: !1,
                    selected: !1,
                    visible: !0,
                    level: i,
                    original: e
                }, this.initialValues && this.initialValues.indexOf(e.value) > -1 && this._chooseItem(n, !0)), t.push(n)
            }
        }, {
            key: "_parseListGroup", value: function (e, t) {
                var i = this, n = {
                    label: e.label,
                    group: !0,
                    itemParams: e.itemParams,
                    elementAttributes: e.elementAttributes,
                    element: !1,
                    visible: !0,
                    level: t,
                    options: [],
                    original: e
                };
                return e.options.forEach((function (e) {
                    i._parseListItem(e, n.options, t)
                })), n
            }
        }, {
            key: "_sortOptions", value: function (e) {
                var t;
                return this.params.sort && (t = "function" == typeof this.params.sort ? this.params.sort : this._defaultSortFunction.bind(this), this._sortGroup(t, e)), e
            }
        }, {
            key: "_sortGroup", value: function (e, t) {
                var i = this;
                t.sort((function (t, i) {
                    return e(t.label, i.label, t.value, i.value, t.original, i.original)
                })), t.forEach((function (t) {
                    t.group && i._sortGroup(e, t.options)
                }))
            }
        }, {
            key: "_defaultSortFunction", value: function (e, t) {
                var i, n, o, a, r, s = 0, l = /(\d+)|(\D+)/g, u = /\d/, c = 0;
                if ("desc" === this.params.sort) {
                    var h = [t, e];
                    e = h[0], t = h[1]
                }
                if (e || 0 === e) {
                    if (t || 0 === t) {
                        if (isFinite(e) && isFinite(t)) return e - t;
                        if ((i = String(e).toLowerCase()) === (n = String(t).toLowerCase())) return 0;
                        if (!u.test(i) || !u.test(n)) return i > n ? 1 : -1;
                        for (i = i.match(l), n = n.match(l), r = i.length > n.length ? n.length : i.length; s < r;) if ((o = i[s]) !== (a = n[s++])) return isFinite(o) && isFinite(a) ? ("0" === o.charAt(0) && (o = "." + o), "0" === a.charAt(0) && (a = "." + a), o - a) : o > a ? 1 : -1;
                        return i.length > n.length
                    }
                    c = 1
                } else c = t || 0 === t ? -1 : 0;
                return c
            }
        }, {
            key: "_filterOptions", value: function () {
                var e = this, t = this.params.filterFunc || this._defaultFilterFunc, i = this.input.value;
                return i ? (this.filtered = !0, this.data.forEach((function (n) {
                    e._filterItem(t, i, n)
                }))) : this.filtered = !1, this.data
            }
        }, {
            key: "_filterItem", value: function (e, t, i) {
                var n = this, o = !1;
                return i.group ? (i.options.forEach((function (i) {
                    n._filterItem(e, t, i) && (o = !0)
                })), i.visible = o) : i.visible = e(t, i.label, i.value, i.original), i.visible
            }
        }, {
            key: "_defaultFilterFunc", value: function (e, t, i, n) {
                e = String(e).toLowerCase();
                return (null !== t || void 0 !== t) && (String(t).toLowerCase().indexOf(e) > -1 || String(i).toLowerCase(e).indexOf() > -1)
            }
        }, {
            key: "_clearList", value: function () {
                for (; this.listEl.firstChild;) this.listEl.removeChild(this.listEl.firstChild);
                this.displayItems = []
            }
        }, {
            key: "_buildList", value: function (e) {
                var t = this;
                this._clearList(), e.forEach((function (e) {
                    t._buildItem(e)
                })), this.displayItems.length || this._addPlaceholder(this.params.placeholderEmpty)
            }
        }, {
            key: "_buildItem", value: function (t) {
                var i, n = this, o = t.element;
                if (!this.filtered || t.visible) {
                    if (!o) {
                        if ((o = document.createElement("div")).tabIndex = 0, (i = this.params.itemFormatter ? this.params.itemFormatter(t.label, t.value, t.original, o) : t.label) instanceof HTMLElement ? o.appendChild(i) : o.innerHTML = i, t.group ? o.classList.add("tabulator-edit-list-group") : o.classList.add("tabulator-edit-list-item"), o.classList.add("tabulator-edit-list-group-level-" + t.level), t.elementAttributes && "object" == e(t.elementAttributes)) for (var a in t.elementAttributes) "+" == a.charAt(0) ? (a = a.slice(1), o.setAttribute(a, this.input.getAttribute(a) + t.elementAttributes["+" + a])) : o.setAttribute(a, t.elementAttributes[a]);
                        t.group ? o.addEventListener("click", this._groupClick.bind(this, t)) : o.addEventListener("click", this._itemClick.bind(this, t)), o.addEventListener("mousedown", this._preventBlur.bind(this)), t.element = o
                    }
                    this._styleItem(t), this.listEl.appendChild(o), t.group ? t.options.forEach((function (e) {
                        n._buildItem(e)
                    })) : this.displayItems.push(t)
                }
            }
        }, {
            key: "_showList", value: function () {
                var e = this.popup && this.popup.isVisible();
                if (this.input.parentNode) {
                    if (this.params.autocomplete && "" === this.input.value && !this.params.listOnEmpty && this.popup) return void this.popup.hide(!0);
                    this._setListWidth(), this.popup || (this.popup = this.edit.popup(this.listEl)), this.popup.show(this.cell.getElement(), "bottom"), e || this.popup.hideOnBlur(this._resolveValue.bind(this, !0))
                }
            }
        }, {
            key: "_styleItem", value: function (e) {
                e && e.element && (e.selected ? e.element.classList.add("active") : e.element.classList.remove("active"))
            }
        }, {
            key: "_itemClick", value: function (e, t) {
                t.stopPropagation(), this._chooseItem(e)
            }
        }, {
            key: "_groupClick", value: function (e, t) {
                t.stopPropagation()
            }
        }, {
            key: "_cancel", value: function () {
                this.popup.hide(!0), this.actions.cancel()
            }
        }, {
            key: "_clearChoices", value: function () {
                var e = this;
                this.typing = !0, this.currentItems.forEach((function (t) {
                    t.selected = !1, e._styleItem(t)
                })), this.currentItems = [], this.focusedItem = null
            }
        }, {
            key: "_chooseItem", value: function (e, t) {
                var i;
                this.typing = !1, this.params.multiselect ? ((i = this.currentItems.indexOf(e)) > -1 ? (this.currentItems.splice(i, 1), e.selected = !1) : (this.currentItems.push(e), e.selected = !0), this.input.value = this.currentItems.map((function (e) {
                    return e.label
                })).join(","), this._styleItem(e)) : (this.currentItems = [e], e.selected = !0, console.log("choose"), this.input.value = e.label, this._styleItem(e), t || this._resolveValue()), this._focusItem(e)
            }
        }, {
            key: "_resolveValue", value: function (e) {
                var t, i;
                if (this.popup.hide(!0), this.params.multiselect) t = this.currentItems.map((function (e) {
                    return e.value
                })); else if (e && this.params.autocomplete && this.typing) {
                    if (!(this.params.freetext || this.params.allowEmpty && "" === this.input.value)) return void this.actions.cancel();
                    t = this.input.value
                } else t = this.currentItems[0] ? this.currentItems[0].value : null == (i = this.initialValues[0]) || "" === i ? i : this.params.emptyValue;
                "" === t && (t = this.params.emptyValue), this.actions.success(t), this.isFilter && (this.initialValues = t && !Array.isArray[t] ? [t] : t)
            }
        }]), i
    }();
    var me = {
        input: function (t, i, n, o, a) {
            var r = t.getValue(), s = document.createElement("input");
            if (s.setAttribute("type", a.search ? "search" : "text"), s.style.padding = "4px", s.style.width = "100%", s.style.boxSizing = "border-box", a.elementAttributes && "object" == e(a.elementAttributes)) for (var l in a.elementAttributes) "+" == l.charAt(0) ? (l = l.slice(1), s.setAttribute(l, s.getAttribute(l) + a.elementAttributes["+" + l])) : s.setAttribute(l, a.elementAttributes[l]);

            function u(e) {
                null == r && "" !== s.value || s.value !== r ? n(s.value) && (r = s.value) : o()
            }

            return s.value = void 0 !== r ? r : "", i((function () {
                s.focus({preventScroll: !0}), s.style.height = "100%", a.selectContents && s.select()
            })), s.addEventListener("change", u), s.addEventListener("blur", u), s.addEventListener("keydown", (function (e) {
                switch (e.keyCode) {
                    case 13:
                        u();
                        break;
                    case 27:
                        o();
                        break;
                    case 35:
                    case 36:
                        e.stopPropagation()
                }
            })), a.mask && he(s, a), s
        }, textarea: function (t, i, n, o, a) {
            var r = t.getValue(), s = a.verticalNavigation || "hybrid", l = String(null != r ? r : ""),
                u = ((l.match(/(?:\r\n|\r|\n)/g) || []).length, document.createElement("textarea")), c = 0;
            if (u.style.display = "block", u.style.padding = "2px", u.style.height = "100%", u.style.width = "100%", u.style.boxSizing = "border-box", u.style.whiteSpace = "pre-wrap", u.style.resize = "none", a.elementAttributes && "object" == e(a.elementAttributes)) for (var h in a.elementAttributes) "+" == h.charAt(0) ? (h = h.slice(1), u.setAttribute(h, u.getAttribute(h) + a.elementAttributes["+" + h])) : u.setAttribute(h, a.elementAttributes[h]);

            function d(e) {
                null == r && "" !== u.value || u.value !== r ? (n(u.value) && (r = u.value), setTimeout((function () {
                    t.getRow().normalizeHeight()
                }), 300)) : o()
            }

            return u.value = l, i((function () {
                u.focus({preventScroll: !0}), u.style.height = "100%", u.scrollHeight, u.style.height = u.scrollHeight + "px", t.getRow().normalizeHeight(), a.selectContents && u.select()
            })), u.addEventListener("change", d), u.addEventListener("blur", d), u.addEventListener("keyup", (function () {
                u.style.height = "";
                var e = u.scrollHeight;
                u.style.height = e + "px", e != c && (c = e, t.getRow().normalizeHeight())
            })), u.addEventListener("keydown", (function (e) {
                switch (e.keyCode) {
                    case 27:
                        o();
                        break;
                    case 38:
                        ("editor" == s || "hybrid" == s && u.selectionStart) && (e.stopImmediatePropagation(), e.stopPropagation());
                        break;
                    case 40:
                        ("editor" == s || "hybrid" == s && u.selectionStart !== u.value.length) && (e.stopImmediatePropagation(), e.stopPropagation());
                        break;
                    case 35:
                    case 36:
                        e.stopPropagation()
                }
            })), a.mask && he(u, a), u
        }, number: function (t, i, n, o, a) {
            var r = t.getValue(), s = a.verticalNavigation || "editor", l = document.createElement("input");
            if (l.setAttribute("type", "number"), void 0 !== a.max && l.setAttribute("max", a.max), void 0 !== a.min && l.setAttribute("min", a.min), void 0 !== a.step && l.setAttribute("step", a.step), l.style.padding = "4px", l.style.width = "100%", l.style.boxSizing = "border-box", a.elementAttributes && "object" == e(a.elementAttributes)) for (var u in a.elementAttributes) "+" == u.charAt(0) ? (u = u.slice(1), l.setAttribute(u, l.getAttribute(u) + a.elementAttributes["+" + u])) : l.setAttribute(u, a.elementAttributes[u]);
            l.value = r;
            var c = function (e) {
                h()
            };

            function h() {
                var e = l.value;
                isNaN(e) || "" === e || (e = Number(e)), e !== r ? n(e) && (r = e) : o()
            }

            return i((function () {
                l.removeEventListener("blur", c), l.focus({preventScroll: !0}), l.style.height = "100%", l.addEventListener("blur", c), a.selectContents && l.select()
            })), l.addEventListener("keydown", (function (e) {
                switch (e.keyCode) {
                    case 13:
                        h();
                        break;
                    case 27:
                        o();
                        break;
                    case 38:
                    case 40:
                        "editor" == s && (e.stopImmediatePropagation(), e.stopPropagation());
                        break;
                    case 35:
                    case 36:
                        e.stopPropagation()
                }
            })), a.mask && he(l, a), l
        }, range: function (t, i, n, o, a) {
            var r = t.getValue(), s = document.createElement("input");
            if (s.setAttribute("type", "range"), void 0 !== a.max && s.setAttribute("max", a.max), void 0 !== a.min && s.setAttribute("min", a.min), void 0 !== a.step && s.setAttribute("step", a.step), s.style.padding = "4px", s.style.width = "100%", s.style.boxSizing = "border-box", a.elementAttributes && "object" == e(a.elementAttributes)) for (var l in a.elementAttributes) "+" == l.charAt(0) ? (l = l.slice(1), s.setAttribute(l, s.getAttribute(l) + a.elementAttributes["+" + l])) : s.setAttribute(l, a.elementAttributes[l]);

            function u() {
                var e = s.value;
                isNaN(e) || "" === e || (e = Number(e)), e != r ? n(e) && (r = e) : o()
            }

            return s.value = r, i((function () {
                s.focus({preventScroll: !0}), s.style.height = "100%"
            })), s.addEventListener("blur", (function (e) {
                u()
            })), s.addEventListener("keydown", (function (e) {
                switch (e.keyCode) {
                    case 13:
                        u();
                        break;
                    case 27:
                        o()
                }
            })), s
        }, select: function (e, t, i, n, o) {
            return console.warn("The select editor has been deprecated, please use the new list editor"), new de(this, e, t, i, n, o).input
        }, list: function (e, t, i, n, o) {
            return new de(this, e, t, i, n, o).input
        }, autocomplete: function (e, t, i, n, o) {
            return console.warn("The autocomplete editor has been deprecated, please use the new list editor with the 'autocomplete' editorParam"), o.autocomplete = !0, new de(this, e, t, i, n, o).input
        }, star: function (t, i, n, o, a) {
            var r = this, s = t.getElement(), l = t.getValue(), u = s.getElementsByTagName("svg").length || 5,
                c = s.getElementsByTagName("svg")[0] ? s.getElementsByTagName("svg")[0].getAttribute("width") : 14,
                h = [], d = document.createElement("div"),
                m = document.createElementNS("http://www.w3.org/2000/svg", "svg");

            function p(e) {
                h.forEach((function (t, i) {
                    i < e ? ("ie" == r.table.browser ? t.setAttribute("class", "tabulator-star-active") : t.classList.replace("tabulator-star-inactive", "tabulator-star-active"), t.innerHTML = '<polygon fill="#488CE9" stroke="#014AAE" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/>') : ("ie" == r.table.browser ? t.setAttribute("class", "tabulator-star-inactive") : t.classList.replace("tabulator-star-active", "tabulator-star-inactive"), t.innerHTML = '<polygon fill="#010155" stroke="#686868" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/>')
                }))
            }

            function f(e) {
                var t = document.createElement("span"), i = m.cloneNode(!0);
                h.push(i), t.addEventListener("mouseenter", (function (t) {
                    t.stopPropagation(), t.stopImmediatePropagation(), p(e)
                })), t.addEventListener("mousemove", (function (e) {
                    e.stopPropagation(), e.stopImmediatePropagation()
                })), t.addEventListener("click", (function (t) {
                    t.stopPropagation(), t.stopImmediatePropagation(), n(e), s.blur()
                })), t.appendChild(i), d.appendChild(t)
            }

            function g(e) {
                l = e, p(e)
            }

            if (s.style.whiteSpace = "nowrap", s.style.overflow = "hidden", s.style.textOverflow = "ellipsis", d.style.verticalAlign = "middle", d.style.display = "inline-block", d.style.padding = "4px", m.setAttribute("width", c), m.setAttribute("height", c), m.setAttribute("viewBox", "0 0 512 512"), m.setAttribute("xml:space", "preserve"), m.style.padding = "0 1px", a.elementAttributes && "object" == e(a.elementAttributes)) for (var v in a.elementAttributes) "+" == v.charAt(0) ? (v = v.slice(1), d.setAttribute(v, d.getAttribute(v) + a.elementAttributes["+" + v])) : d.setAttribute(v, a.elementAttributes[v]);
            for (var b = 1; b <= u; b++) f(b);
            return p(l = Math.min(parseInt(l), u)), d.addEventListener("mousemove", (function (e) {
                p(0)
            })), d.addEventListener("click", (function (e) {
                n(0)
            })), s.addEventListener("blur", (function (e) {
                o()
            })), s.addEventListener("keydown", (function (e) {
                switch (e.keyCode) {
                    case 39:
                        g(l + 1);
                        break;
                    case 37:
                        g(l - 1);
                        break;
                    case 13:
                        n(l);
                        break;
                    case 27:
                        o()
                }
            })), d
        }, progress: function (t, i, n, o, a) {
            var r, s, l = t.getElement(),
                u = void 0 === a.max ? l.getElementsByTagName("div")[0] && l.getElementsByTagName("div")[0].getAttribute("max") || 100 : a.max,
                c = void 0 === a.min ? l.getElementsByTagName("div")[0] && l.getElementsByTagName("div")[0].getAttribute("min") || 0 : a.min,
                h = (u - c) / 100, d = t.getValue() || 0, m = document.createElement("div"),
                p = document.createElement("div");

            function f() {
                var e = window.getComputedStyle(l, null),
                    t = h * Math.round(p.offsetWidth / ((l.clientWidth - parseInt(e.getPropertyValue("padding-left")) - parseInt(e.getPropertyValue("padding-right"))) / 100)) + c;
                n(t), l.setAttribute("aria-valuenow", t), l.setAttribute("aria-label", d)
            }

            if (m.style.position = "absolute", m.style.right = "0", m.style.top = "0", m.style.bottom = "0", m.style.width = "5px", m.classList.add("tabulator-progress-handle"), p.style.display = "inline-block", p.style.position = "relative", p.style.height = "100%", p.style.backgroundColor = "#488CE9", p.style.maxWidth = "100%", p.style.minWidth = "0%", a.elementAttributes && "object" == e(a.elementAttributes)) for (var g in a.elementAttributes) "+" == g.charAt(0) ? (g = g.slice(1), p.setAttribute(g, p.getAttribute(g) + a.elementAttributes["+" + g])) : p.setAttribute(g, a.elementAttributes[g]);
            return l.style.padding = "4px 4px", d = Math.min(parseFloat(d), u), d = Math.max(parseFloat(d), c), d = Math.round((d - c) / h), p.style.width = d + "%", l.setAttribute("aria-valuemin", c), l.setAttribute("aria-valuemax", u), p.appendChild(m), m.addEventListener("mousedown", (function (e) {
                r = e.screenX, s = p.offsetWidth
            })), m.addEventListener("mouseover", (function () {
                m.style.cursor = "ew-resize"
            })), l.addEventListener("mousemove", (function (e) {
                r && (p.style.width = s + e.screenX - r + "px")
            })), l.addEventListener("mouseup", (function (e) {
                r && (e.stopPropagation(), e.stopImmediatePropagation(), r = !1, s = !1, f())
            })), l.addEventListener("keydown", (function (e) {
                switch (e.keyCode) {
                    case 39:
                        e.preventDefault(), p.style.width = p.clientWidth + l.clientWidth / 100 + "px";
                        break;
                    case 37:
                        e.preventDefault(), p.style.width = p.clientWidth - l.clientWidth / 100 + "px";
                        break;
                    case 9:
                    case 13:
                        f();
                        break;
                    case 27:
                        o()
                }
            })), l.addEventListener("blur", (function () {
                o()
            })), p
        }, tickCross: function (t, i, n, o, a) {
            var r = t.getValue(), s = document.createElement("input"), l = a.tristate,
                u = void 0 === a.indeterminateValue ? null : a.indeterminateValue, c = !1,
                h = Object.keys(a).includes("trueValue"), d = Object.keys(a).includes("falseValue");
            if (s.setAttribute("type", "checkbox"), s.style.marginTop = "5px", s.style.boxSizing = "border-box", a.elementAttributes && "object" == e(a.elementAttributes)) for (var m in a.elementAttributes) "+" == m.charAt(0) ? (m = m.slice(1), s.setAttribute(m, s.getAttribute(m) + a.elementAttributes["+" + m])) : s.setAttribute(m, a.elementAttributes[m]);

            function p(e) {
                var t = s.checked;
                return t = h && t ? a.trueValue : d && !t ? a.falseValue : t, l ? e ? c ? u : t : s.checked && !c ? (s.checked = !1, s.indeterminate = !0, c = !0, u) : (c = !1, t) : t
            }

            return s.value = r, !l || void 0 !== r && r !== u && "" !== r || (c = !0, s.indeterminate = !0), "firefox" != this.table.browser && i((function () {
                s.focus({preventScroll: !0})
            })), s.checked = h ? r === a.trueValue : !0 === r || "true" === r || "True" === r || 1 === r, i((function () {
                s.focus()
            })), s.addEventListener("change", (function (e) {
                n(p())
            })), s.addEventListener("blur", (function (e) {
                n(p(!0))
            })), s.addEventListener("keydown", (function (e) {
                13 == e.keyCode && n(p()), 27 == e.keyCode && o()
            })), s
        }
    }, pe = function (i) {
        a(r, i);
        var n = c(r);

        function r(e) {
            var i;
            return t(this, r), (i = n.call(this, e)).currentCell = !1, i.mouseClick = !1, i.recursionBlock = !1, i.invalidEdit = !1, i.editedCells = [], i.editors = r.editors, i.registerColumnOption("editable"), i.registerColumnOption("editor"), i.registerColumnOption("editorParams"), i.registerColumnOption("cellEditing"), i.registerColumnOption("cellEdited"), i.registerColumnOption("cellEditCancelled"), i.registerTableFunction("getEditedCells", i.getEditedCells.bind(l(i))), i.registerTableFunction("clearCellEdited", i.clearCellEdited.bind(l(i))), i.registerTableFunction("navigatePrev", i.navigatePrev.bind(l(i))), i.registerTableFunction("navigateNext", i.navigateNext.bind(l(i))), i.registerTableFunction("navigateLeft", i.navigateLeft.bind(l(i))), i.registerTableFunction("navigateRight", i.navigateRight.bind(l(i))), i.registerTableFunction("navigateUp", i.navigateUp.bind(l(i))), i.registerTableFunction("navigateDown", i.navigateDown.bind(l(i))), i.registerComponentFunction("cell", "isEdited", i.cellisEdited.bind(l(i))), i.registerComponentFunction("cell", "clearEdited", i.clearEdited.bind(l(i))), i.registerComponentFunction("cell", "edit", i.editCell.bind(l(i))), i.registerComponentFunction("cell", "cancelEdit", i.cellCancelEdit.bind(l(i))), i.registerComponentFunction("cell", "navigatePrev", i.navigatePrev.bind(l(i))), i.registerComponentFunction("cell", "navigateNext", i.navigateNext.bind(l(i))), i.registerComponentFunction("cell", "navigateLeft", i.navigateLeft.bind(l(i))), i.registerComponentFunction("cell", "navigateRight", i.navigateRight.bind(l(i))), i.registerComponentFunction("cell", "navigateUp", i.navigateUp.bind(l(i))), i.registerComponentFunction("cell", "navigateDown", i.navigateDown.bind(l(i))), i
        }

        return o(r, [{
            key: "initialize", value: function () {
                this.subscribe("cell-init", this.bindEditor.bind(this)), this.subscribe("cell-delete", this.clearEdited.bind(this)), this.subscribe("column-layout", this.initializeColumnCheck.bind(this)), this.subscribe("column-delete", this.columnDeleteCheck.bind(this)), this.subscribe("row-deleting", this.rowDeleteCheck.bind(this)), this.subscribe("data-refreshing", this.cancelEdit.bind(this)), this.subscribe("keybinding-nav-prev", this.navigatePrev.bind(this, void 0)), this.subscribe("keybinding-nav-next", this.keybindingNavigateNext.bind(this)), this.subscribe("keybinding-nav-left", this.navigateLeft.bind(this, void 0)), this.subscribe("keybinding-nav-right", this.navigateRight.bind(this, void 0)), this.subscribe("keybinding-nav-up", this.navigateUp.bind(this, void 0)), this.subscribe("keybinding-nav-down", this.navigateDown.bind(this, void 0))
            }
        }, {
            key: "keybindingNavigateNext", value: function (e) {
                var t = this.currentCell, i = this.options("tabEndNewRow");
                t && (this.navigateNext(t, e) || i && (t.getElement().firstChild.blur(), (i = !0 === i ? this.table.addRow({}) : "function" == typeof i ? this.table.addRow(i(t.row.getComponent())) : this.table.addRow(Object.assign({}, i))).then((function () {
                    setTimeout((function () {
                        t.getComponent().navigateNext()
                    }))
                }))))
            }
        }, {
            key: "cellisEdited", value: function (e) {
                return !!e.modules.edit && e.modules.edit.edited
            }
        }, {
            key: "cellCancelEdit", value: function (e) {
                e === this.currentCell ? this.table.modules.edit.cancelEdit() : console.warn("Cancel Editor Error - This cell is not currently being edited ")
            }
        }, {
            key: "clearCellEdited", value: function (e) {
                var t = this;
                e || (e = this.table.modules.edit.getEditedCells()), Array.isArray(e) || (e = [e]), e.forEach((function (e) {
                    t.table.modules.edit.clearEdited(e._getSelf())
                }))
            }
        }, {
            key: "navigatePrev", value: function () {
                var e, t, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.currentCell,
                    n = arguments.length > 1 ? arguments[1] : void 0;
                if (i) {
                    if (n && n.preventDefault(), e = this.navigateLeft()) return !0;
                    if ((t = this.table.rowManager.prevDisplayRow(i.row, !0)) && (e = this.findNextEditableCell(t, t.cells.length))) return e.getComponent().edit(), !0
                }
                return !1
            }
        }, {
            key: "navigateNext", value: function () {
                var e, t, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.currentCell,
                    n = arguments.length > 1 ? arguments[1] : void 0;
                if (i) {
                    if (n && n.preventDefault(), e = this.navigateRight()) return !0;
                    if ((t = this.table.rowManager.nextDisplayRow(i.row, !0)) && (e = this.findNextEditableCell(t, -1))) return e.getComponent().edit(), !0
                }
                return !1
            }
        }, {
            key: "navigateLeft", value: function () {
                var e, t, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.currentCell,
                    n = arguments.length > 1 ? arguments[1] : void 0;
                return !!(i && (n && n.preventDefault(), e = i.getIndex(), t = this.findPrevEditableCell(i.row, e))) && (t.getComponent().edit(), !0)
            }
        }, {
            key: "navigateRight", value: function () {
                var e, t, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.currentCell,
                    n = arguments.length > 1 ? arguments[1] : void 0;
                return !!(i && (n && n.preventDefault(), e = i.getIndex(), t = this.findNextEditableCell(i.row, e))) && (t.getComponent().edit(), !0)
            }
        }, {
            key: "navigateUp", value: function () {
                var e, t, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.currentCell,
                    n = arguments.length > 1 ? arguments[1] : void 0;
                return !!(i && (n && n.preventDefault(), e = i.getIndex(), t = this.table.rowManager.prevDisplayRow(i.row, !0))) && (t.cells[e].getComponent().edit(), !0)
            }
        }, {
            key: "navigateDown", value: function () {
                var e, t, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.currentCell,
                    n = arguments.length > 1 ? arguments[1] : void 0;
                return !!(i && (n && n.preventDefault(), e = i.getIndex(), t = this.table.rowManager.nextDisplayRow(i.row, !0))) && (t.cells[e].getComponent().edit(), !0)
            }
        }, {
            key: "findNextEditableCell", value: function (e, t) {
                var i = !1;
                if (t < e.cells.length - 1) for (var n = t + 1; n < e.cells.length; n++) {
                    var o = e.cells[n];
                    if (o.column.modules.edit && k.elVisible(o.getElement())) {
                        var a = !0;
                        if ("function" == typeof o.column.modules.edit.check && (a = o.column.modules.edit.check(o.getComponent())), a) {
                            i = o;
                            break
                        }
                    }
                }
                return i
            }
        }, {
            key: "findPrevEditableCell", value: function (e, t) {
                var i = !1;
                if (t > 0) for (var n = t - 1; n >= 0; n--) {
                    var o = e.cells[n], a = !0;
                    if (o.column.modules.edit && k.elVisible(o.getElement()) && ("function" == typeof o.column.modules.edit.check && (a = o.column.modules.edit.check(o.getComponent())), a)) {
                        i = o;
                        break
                    }
                }
                return i
            }
        }, {
            key: "initializeColumnCheck", value: function (e) {
                void 0 !== e.definition.editor && this.initializeColumn(e)
            }
        }, {
            key: "columnDeleteCheck", value: function (e) {
                this.currentCell && this.currentCell.column === e && this.cancelEdit()
            }
        }, {
            key: "rowDeleteCheck", value: function (e) {
                this.currentCell && this.currentCell.row === e && this.cancelEdit()
            }
        }, {
            key: "initializeColumn", value: function (t) {
                var i = {
                    editor: !1,
                    blocked: !1,
                    check: t.definition.editable,
                    params: t.definition.editorParams || {}
                };
                switch (e(t.definition.editor)) {
                    case"string":
                        this.editors[t.definition.editor] ? i.editor = this.editors[t.definition.editor] : console.warn("Editor Error - No such editor found: ", t.definition.editor);
                        break;
                    case"function":
                        i.editor = t.definition.editor;
                        break;
                    case"boolean":
                        !0 === t.definition.editor && ("function" != typeof t.definition.formatter ? this.editors[t.definition.formatter] ? i.editor = this.editors[t.definition.formatter] : i.editor = this.editors.input : console.warn("Editor Error - Cannot auto lookup editor for a custom formatter: ", t.definition.formatter))
                }
                i.editor && (t.modules.edit = i)
            }
        }, {
            key: "getCurrentCell", value: function () {
                return !!this.currentCell && this.currentCell.getComponent()
            }
        }, {
            key: "clearEditor", value: function (e) {
                var t, i = this.currentCell;
                if (this.invalidEdit = !1, i) {
                    for (this.currentCell = !1, t = i.getElement(), this.dispatch("edit-editor-clear", i, e), t.classList.remove("tabulator-editing"); t.firstChild;) t.removeChild(t.firstChild);
                    i.row.getElement().classList.remove("tabulator-row-editing")
                }
            }
        }, {
            key: "cancelEdit", value: function () {
                if (this.currentCell) {
                    var e = this.currentCell, t = this.currentCell.getComponent();
                    this.clearEditor(!0), e.setValueActual(e.getValue()), e.cellRendered(), ("textarea" == e.column.definition.editor || e.column.definition.variableHeight) && e.row.normalizeHeight(!0), e.column.definition.cellEditCancelled && e.column.definition.cellEditCancelled.call(this.table, t), this.dispatch("edit-cancelled", e), this.dispatchExternal("cellEditCancelled", t)
                }
            }
        }, {
            key: "bindEditor", value: function (e) {
                if (e.column.modules.edit) {
                    var t = this, i = e.getElement(!0);
                    i.setAttribute("tabindex", 0), i.addEventListener("click", (function (e) {
                        i.classList.contains("tabulator-editing") || i.focus({preventScroll: !0})
                    })), i.addEventListener("mousedown", (function (e) {
                        2 === e.button ? e.preventDefault() : t.mouseClick = !0
                    })), i.addEventListener("focus", (function (i) {
                        t.recursionBlock || t.edit(e, i, !1)
                    }))
                }
            }
        }, {
            key: "focusCellNoEvent", value: function (e, t) {
                this.recursionBlock = !0, t && "ie" === this.table.browser || e.getElement().focus({preventScroll: !0}), this.recursionBlock = !1
            }
        }, {
            key: "editCell", value: function (e, t) {
                this.focusCellNoEvent(e), this.edit(e, !1, t)
            }
        }, {
            key: "focusScrollAdjust", value: function (e) {
                if ("virtual" == this.table.rowManager.getRenderMode()) {
                    var t = this.table.rowManager.element.scrollTop,
                        i = this.table.rowManager.element.clientHeight + this.table.rowManager.element.scrollTop,
                        n = e.row.getElement();
                    n.offsetTop;
                    n.offsetTop < t ? this.table.rowManager.element.scrollTop -= t - n.offsetTop : n.offsetTop + n.offsetHeight > i && (this.table.rowManager.element.scrollTop += n.offsetTop + n.offsetHeight - i);
                    var o = this.table.rowManager.element.scrollLeft,
                        a = this.table.rowManager.element.clientWidth + this.table.rowManager.element.scrollLeft,
                        r = e.getElement();
                    r.offsetLeft;
                    this.table.modExists("frozenColumns") && (o += parseInt(this.table.modules.frozenColumns.leftMargin), a -= parseInt(this.table.modules.frozenColumns.rightMargin)), "virtual" === this.table.options.renderHorizontal && (o -= parseInt(this.table.columnManager.renderer.vDomPadLeft), a -= parseInt(this.table.columnManager.renderer.vDomPadLeft)), r.offsetLeft < o ? this.table.rowManager.element.scrollLeft -= o - r.offsetLeft : r.offsetLeft + r.offsetWidth > a && (this.table.rowManager.element.scrollLeft += r.offsetLeft + r.offsetWidth - a)
                }
            }
        }, {
            key: "edit", value: function (t, i, n) {
                var o, a, r, s = this, l = !0, u = function () {
                }, c = t.getElement();
                if (!this.currentCell) {
                    if (t.column.modules.edit.blocked) return this.mouseClick = !1, c.blur(), !1;
                    switch (i && i.stopPropagation(), e(t.column.modules.edit.check)) {
                        case"function":
                            l = t.column.modules.edit.check(t.getComponent());
                            break;
                        case"boolean":
                            l = t.column.modules.edit.check
                    }
                    if (l || n) {
                        if (s.cancelEdit(), s.currentCell = t, this.focusScrollAdjust(t), a = t.getComponent(), this.mouseClick && (this.mouseClick = !1, t.column.definition.cellClick && t.column.definition.cellClick.call(this.table, i, a)), t.column.definition.cellEditing && t.column.definition.cellEditing.call(this.table, a), this.dispatch("cell-editing", t), this.dispatchExternal("cellEditing", a), r = "function" == typeof t.column.modules.edit.params ? t.column.modules.edit.params(a) : t.column.modules.edit.params, !1 === (o = t.column.modules.edit.editor.call(s, a, (function (e) {
                            u = e
                        }), (function (e) {
                            if (s.currentCell === t) {
                                var i = s.chain("edit-success", [t, e], !0, !0);
                                return !0 === i || "highlight" === s.table.options.validationMode ? (s.clearEditor(), t.modules.edit || (t.modules.edit = {}), t.modules.edit.edited = !0, -1 == s.editedCells.indexOf(t) && s.editedCells.push(t), t.setValue(e, !0), !0 === i) : (s.invalidEdit = !0, s.focusCellNoEvent(t, !0), u(), !1)
                            }
                        }), (function () {
                            s.currentCell === t && s.cancelEdit()
                        }), r))) return c.blur(), !1;
                        if (!(o instanceof Node)) return console.warn("Edit Error - Editor should return an instance of Node, the editor returned:", o), c.blur(), !1;
                        for (c.classList.add("tabulator-editing"), t.row.getElement().classList.add("tabulator-row-editing"); c.firstChild;) c.removeChild(c.firstChild);
                        c.appendChild(o), u();
                        for (var h = c.children, d = 0; d < h.length; d++) h[d].addEventListener("click", (function (e) {
                            e.stopPropagation()
                        }));
                        return !0
                    }
                    return this.mouseClick = !1, c.blur(), !1
                }
                this.invalidEdit || this.cancelEdit()
            }
        }, {
            key: "getEditedCells", value: function () {
                var e = [];
                return this.editedCells.forEach((function (t) {
                    e.push(t.getComponent())
                })), e
            }
        }, {
            key: "clearEdited", value: function (e) {
                var t;
                e.modules.edit && e.modules.edit.edited && (e.modules.edit.edited = !1, this.dispatch("edit-edited-clear", e)), (t = this.editedCells.indexOf(e)) > -1 && this.editedCells.splice(t, 1)
            }
        }]), r
    }(V);
    pe.moduleName = "edit", pe.editors = me;
    var fe = function e(i, n, o, a) {
        t(this, e), this.type = i, this.columns = n, this.component = o || !1, this.indent = a || 0
    }, ge = function e(i, n, o, a, r) {
        t(this, e), this.value = i, this.component = n || !1, this.width = o, this.height = a, this.depth = r
    }, ve = function (n) {
        a(s, n);
        var r = c(s);

        function s(e) {
            var i;
            return t(this, s), (i = r.call(this, e)).config = {}, i.cloneTableStyle = !0, i.colVisProp = "", i.registerTableOption("htmlOutputConfig", !1), i.registerColumnOption("htmlOutput"), i.registerColumnOption("titleHtmlOutput"), i
        }

        return o(s, [{
            key: "initialize", value: function () {
                this.registerTableFunction("getHtml", this.getHtml.bind(this))
            }
        }, {
            key: "generateExportList", value: function (e, t, i, n) {
                this.cloneTableStyle = t, this.config = e || {}, this.colVisProp = n;
                var o = !1 !== this.config.columnHeaders ? this.headersToExportRows(this.generateColumnGroupHeaders()) : [],
                    a = this.bodyToExportRows(this.rowLookup(i));
                return o.concat(a)
            }
        }, {
            key: "genereateTable", value: function (e, t, i, n) {
                var o = this.generateExportList(e, t, i, n);
                return this.genereateTableElement(o)
            }
        }, {
            key: "rowLookup", value: function (e) {
                var t = this, i = [];
                if ("function" == typeof e) e.call(this.table).forEach((function (e) {
                    (e = t.table.rowManager.findRow(e)) && i.push(e)
                })); else switch (e) {
                    case!0:
                    case"visible":
                        i = this.table.rowManager.getVisibleRows(!1, !0);
                        break;
                    case"all":
                        i = this.table.rowManager.rows;
                        break;
                    case"selected":
                        i = this.table.modules.selectRow.selectedRows;
                        break;
                    case"active":
                    default:
                        i = this.table.options.pagination ? this.table.rowManager.getDisplayRows(this.table.rowManager.displayRows.length - 2) : this.table.rowManager.getDisplayRows()
                }
                return Object.assign([], i)
            }
        }, {
            key: "generateColumnGroupHeaders", value: function () {
                var e = this, t = [];
                return (!1 !== this.config.columnGroups ? this.table.columnManager.columns : this.table.columnManager.columnsByIndex).forEach((function (i) {
                    var n = e.processColumnGroup(i);
                    n && t.push(n)
                })), t
            }
        }, {
            key: "processColumnGroup", value: function (e) {
                var t = this, i = e.columns, n = 0, o = {
                    title: e.definition["title" + (this.colVisProp.charAt(0).toUpperCase() + this.colVisProp.slice(1))] || e.definition.title,
                    column: e,
                    depth: 1
                };
                if (i.length) {
                    if (o.subGroups = [], o.width = 0, i.forEach((function (e) {
                        var i = t.processColumnGroup(e);
                        i && (o.width += i.width, o.subGroups.push(i), i.depth > n && (n = i.depth))
                    })), o.depth += n, !o.width) return !1
                } else {
                    if (!this.columnVisCheck(e)) return !1;
                    o.width = 1
                }
                return o
            }
        }, {
            key: "columnVisCheck", value: function (e) {
                return !1 !== e.definition[this.colVisProp] && (e.visible || !e.visible && e.definition[this.colVisProp])
            }
        }, {
            key: "headersToExportRows", value: function (e) {
                var t = [], i = 0, n = [];

                function o(e, n) {
                    var a = i - n;
                    if (void 0 === t[n] && (t[n] = []), e.height = e.subGroups ? 1 : a - e.depth + 1, t[n].push(e), e.height > 1) for (var r = 1; r < e.height; r++) void 0 === t[n + r] && (t[n + r] = []), t[n + r].push(!1);
                    if (e.width > 1) for (var s = 1; s < e.width; s++) t[n].push(!1);
                    e.subGroups && e.subGroups.forEach((function (e) {
                        o(e, n + 1)
                    }))
                }

                return e.forEach((function (e) {
                    e.depth > i && (i = e.depth)
                })), e.forEach((function (e) {
                    o(e, 0)
                })), t.forEach((function (e) {
                    var t = [];
                    e.forEach((function (e) {
                        if (e) {
                            var i = void 0 === e.title ? "" : e.title;
                            t.push(new ge(i, e.column.getComponent(), e.width, e.height, e.depth))
                        } else t.push(null)
                    })), n.push(new fe("header", t))
                })), n
            }
        }, {
            key: "bodyToExportRows", value: function (e) {
                var t = this, i = [], n = [];
                return this.table.columnManager.columnsByIndex.forEach((function (e) {
                    t.columnVisCheck(e) && i.push(e.getComponent())
                })), !1 !== this.config.columnCalcs && this.table.modExists("columnCalcs") && (this.table.modules.columnCalcs.topInitialized && e.unshift(this.table.modules.columnCalcs.topRow), this.table.modules.columnCalcs.botInitialized && e.push(this.table.modules.columnCalcs.botRow)), (e = e.filter((function (e) {
                    switch (e.type) {
                        case"group":
                            return !1 !== t.config.rowGroups;
                        case"calc":
                            return !1 !== t.config.columnCalcs;
                        case"row":
                            return !(t.table.options.dataTree && !1 === t.config.dataTree && e.modules.dataTree.parent)
                    }
                    return !0
                }))).forEach((function (e, o) {
                    var a = e.getData(t.colVisProp), r = [], s = 0;
                    switch (e.type) {
                        case"group":
                            s = e.level, r.push(new ge(e.key, e.getComponent(), i.length, 1));
                            break;
                        case"calc":
                        case"row":
                            i.forEach((function (e) {
                                r.push(new ge(e._column.getFieldValue(a), e, 1, 1))
                            })), t.table.options.dataTree && !1 !== t.config.dataTree && (s = e.modules.dataTree.index)
                    }
                    n.push(new fe(e.type, r, e.getComponent(), s))
                })), n
            }
        }, {
            key: "genereateTableElement", value: function (e) {
                var t = this, i = document.createElement("table"), n = document.createElement("thead"),
                    o = document.createElement("tbody"), a = this.lookupTableStyles(),
                    r = this.table.options["rowFormatter" + (this.colVisProp.charAt(0).toUpperCase() + this.colVisProp.slice(1))],
                    s = {};
                return s.rowFormatter = null !== r ? r : this.table.options.rowFormatter, this.table.options.dataTree && !1 !== this.config.dataTree && this.table.modExists("columnCalcs") && (s.treeElementField = this.table.modules.dataTree.elementField), s.groupHeader = this.table.options["groupHeader" + (this.colVisProp.charAt(0).toUpperCase() + this.colVisProp.slice(1))], s.groupHeader && !Array.isArray(s.groupHeader) && (s.groupHeader = [s.groupHeader]), i.classList.add("tabulator-print-table"), this.mapElementStyles(this.table.columnManager.getHeadersElement(), n, ["border-top", "border-left", "border-right", "border-bottom", "background-color", "color", "font-weight", "font-family", "font-size"]), e.length > 1e3 && console.warn("It may take a long time to render an HTML table with more than 1000 rows"), e.forEach((function (e, i) {
                    switch (e.type) {
                        case"header":
                            n.appendChild(t.genereateHeaderElement(e, s, a));
                            break;
                        case"group":
                            o.appendChild(t.genereateGroupElement(e, s, a));
                            break;
                        case"calc":
                            o.appendChild(t.genereateCalcElement(e, s, a));
                            break;
                        case"row":
                            var r = t.genereateRowElement(e, s, a);
                            t.mapElementStyles(i % 2 && a.evenRow ? a.evenRow : a.oddRow, r, ["border-top", "border-left", "border-right", "border-bottom", "color", "font-weight", "font-family", "font-size", "background-color"]), o.appendChild(r)
                    }
                })), n.innerHTML && i.appendChild(n), i.appendChild(o), this.mapElementStyles(this.table.element, i, ["border-top", "border-left", "border-right", "border-bottom"]), i
            }
        }, {
            key: "lookupTableStyles", value: function () {
                var e = {};
                return this.cloneTableStyle && window.getComputedStyle && (e.oddRow = this.table.element.querySelector(".tabulator-row-odd:not(.tabulator-group):not(.tabulator-calcs)"), e.evenRow = this.table.element.querySelector(".tabulator-row-even:not(.tabulator-group):not(.tabulator-calcs)"), e.calcRow = this.table.element.querySelector(".tabulator-row.tabulator-calcs"), e.firstRow = this.table.element.querySelector(".tabulator-row:not(.tabulator-group):not(.tabulator-calcs)"), e.firstGroup = this.table.element.getElementsByClassName("tabulator-group")[0], e.firstRow && (e.styleCells = e.firstRow.getElementsByClassName("tabulator-cell"), e.firstCell = e.styleCells[0], e.lastCell = e.styleCells[e.styleCells.length - 1])), e
            }
        }, {
            key: "genereateHeaderElement", value: function (e, t, i) {
                var n = this, o = document.createElement("tr");
                return e.columns.forEach((function (e) {
                    if (e) {
                        var t = document.createElement("th"),
                            i = e.component._column.definition.cssClass ? e.component._column.definition.cssClass.split(" ") : [];
                        t.colSpan = e.width, t.rowSpan = e.height, t.innerHTML = e.value, n.cloneTableStyle && (t.style.boxSizing = "border-box"), i.forEach((function (e) {
                            t.classList.add(e)
                        })), n.mapElementStyles(e.component.getElement(), t, ["text-align", "border-top", "border-left", "border-right", "border-bottom", "background-color", "color", "font-weight", "font-family", "font-size"]), n.mapElementStyles(e.component._column.contentElement, t, ["padding-top", "padding-left", "padding-right", "padding-bottom"]), e.component._column.visible ? n.mapElementStyles(e.component.getElement(), t, ["width"]) : e.component._column.definition.width && (t.style.width = e.component._column.definition.width + "px"), e.component._column.parent && n.mapElementStyles(e.component._column.parent.groupElement, t, ["border-top"]), o.appendChild(t)
                    }
                })), o
            }
        }, {
            key: "genereateGroupElement", value: function (e, t, i) {
                var n = document.createElement("tr"), o = document.createElement("td"), a = e.columns[0];
                return n.classList.add("tabulator-print-table-row"), t.groupHeader && t.groupHeader[e.indent] ? a.value = t.groupHeader[e.indent](a.value, e.component._group.getRowCount(), e.component._group.getData(), e.component) : !1 === t.groupHeader ? a.value = a.value : a.value = e.component._group.generator(a.value, e.component._group.getRowCount(), e.component._group.getData(), e.component), o.colSpan = a.width, o.innerHTML = a.value, n.classList.add("tabulator-print-table-group"), n.classList.add("tabulator-group-level-" + e.indent), a.component.isVisible() && n.classList.add("tabulator-group-visible"), this.mapElementStyles(i.firstGroup, n, ["border-top", "border-left", "border-right", "border-bottom", "color", "font-weight", "font-family", "font-size", "background-color"]), this.mapElementStyles(i.firstGroup, o, ["padding-top", "padding-left", "padding-right", "padding-bottom"]), n.appendChild(o), n
            }
        }, {
            key: "genereateCalcElement", value: function (e, t, i) {
                var n = this.genereateRowElement(e, t, i);
                return n.classList.add("tabulator-print-table-calcs"), this.mapElementStyles(i.calcRow, n, ["border-top", "border-left", "border-right", "border-bottom", "color", "font-weight", "font-family", "font-size", "background-color"]), n
            }
        }, {
            key: "genereateRowElement", value: function (t, n, o) {
                var a = this, r = document.createElement("tr");
                return r.classList.add("tabulator-print-table-row"), t.columns.forEach((function (s) {
                    if (s) {
                        var l = document.createElement("td"), u = s.component._column,
                            c = a.table.columnManager.findColumnIndex(u), h = s.value, d = {
                                modules: {}, getValue: function () {
                                    return h
                                }, getField: function () {
                                    return u.definition.field
                                }, getElement: function () {
                                    return l
                                }, getColumn: function () {
                                    return u.getComponent()
                                }, getData: function () {
                                    return t.component.getData()
                                }, getRow: function () {
                                    return t.component
                                }, getComponent: function () {
                                    return d
                                }, column: u
                            };
                        if ((u.definition.cssClass ? u.definition.cssClass.split(" ") : []).forEach((function (e) {
                            l.classList.add(e)
                        })), a.table.modExists("format") && !1 !== a.config.formatCells) h = a.table.modules.format.formatExportValue(d, a.colVisProp); else switch (e(h)) {
                            case"object":
                                h = null !== h ? JSON.stringify(h) : "";
                                break;
                            case"undefined":
                                h = "";
                                break;
                            default:
                                h = h
                        }
                        h instanceof Node ? l.appendChild(h) : l.innerHTML = h, (o.styleCells[c] || o.firstCell) && (a.mapElementStyles(o.styleCells[c] || o.firstCell, l, ["padding-top", "padding-left", "padding-right", "padding-bottom", "border-top", "border-left", "border-right", "border-bottom", "color", "font-weight", "font-family", "font-size", "text-align"]), u.definition.align && (l.style.textAlign = u.definition.align)), a.table.options.dataTree && !1 !== a.config.dataTree && (n.treeElementField && n.treeElementField == u.field || !n.treeElementField && 0 == i) && (t.component._row.modules.dataTree.controlEl && l.insertBefore(t.component._row.modules.dataTree.controlEl.cloneNode(!0), l.firstChild), t.component._row.modules.dataTree.branchEl && l.insertBefore(t.component._row.modules.dataTree.branchEl.cloneNode(!0), l.firstChild)), r.appendChild(l), d.modules.format && d.modules.format.renderedCallback && d.modules.format.renderedCallback(), n.rowFormatter && !1 !== a.config.formatCells && n.rowFormatter(t.component)
                    }
                })), r
            }
        }, {
            key: "genereateHTMLTable", value: function (e) {
                var t = document.createElement("div");
                return t.appendChild(this.genereateTableElement(e)), t.innerHTML
            }
        }, {
            key: "getHtml", value: function (e, t, i, n) {
                var o = this.generateExportList(i || this.table.options.htmlOutputConfig, t, e, n || "htmlOutput");
                return this.genereateHTMLTable(o)
            }
        }, {
            key: "mapElementStyles", value: function (e, t, i) {
                if (this.cloneTableStyle && e && t) {
                    var n = {
                        "background-color": "backgroundColor",
                        color: "fontColor",
                        width: "width",
                        "font-weight": "fontWeight",
                        "font-family": "fontFamily",
                        "font-size": "fontSize",
                        "text-align": "textAlign",
                        "border-top": "borderTop",
                        "border-left": "borderLeft",
                        "border-right": "borderRight",
                        "border-bottom": "borderBottom",
                        "padding-top": "paddingTop",
                        "padding-left": "paddingLeft",
                        "padding-right": "paddingRight",
                        "padding-bottom": "paddingBottom"
                    };
                    if (window.getComputedStyle) {
                        var o = window.getComputedStyle(e);
                        i.forEach((function (e) {
                            t.style[n[e]] = o.getPropertyValue(e)
                        }))
                    }
                }
            }
        }]), s
    }(V);
    ve.moduleName = "export";
    var be = {
        "=": function (e, t, i, n) {
            return t == e
        }, "<": function (e, t, i, n) {
            return t < e
        }, "<=": function (e, t, i, n) {
            return t <= e
        }, ">": function (e, t, i, n) {
            return t > e
        }, ">=": function (e, t, i, n) {
            return t >= e
        }, "!=": function (e, t, i, n) {
            return t != e
        }, regex: function (e, t, i, n) {
            return "string" == typeof e && (e = new RegExp(e)), e.test(t)
        }, like: function (e, t, i, n) {
            return null == e ? t === e : null != t && String(t).toLowerCase().indexOf(e.toLowerCase()) > -1
        }, keywords: function (e, t, i, n) {
            var o = e.toLowerCase().split(void 0 === n.separator ? " " : n.separator),
                a = String(null == t ? "" : t).toLowerCase(), r = [];
            return o.forEach((function (e) {
                a.includes(e) && r.push(!0)
            })), n.matchAll ? r.length === o.length : !!r.length
        }, starts: function (e, t, i, n) {
            return null == e ? t === e : null != t && String(t).toLowerCase().startsWith(e.toLowerCase())
        }, ends: function (e, t, i, n) {
            return null == e ? t === e : null != t && String(t).toLowerCase().endsWith(e.toLowerCase())
        }, in: function (e, t, i, n) {
            return Array.isArray(e) ? !e.length || e.indexOf(t) > -1 : (console.warn("Filter Error - filter value is not an array:", e), !1)
        }
    }, ye = function (i) {
        a(r, i);
        var n = c(r);

        function r(e) {
            var i;
            return t(this, r), (i = n.call(this, e)).filterList = [], i.headerFilters = {}, i.headerFilterColumns = [], i.prevHeaderFilterChangeCheck = "", i.prevHeaderFilterChangeCheck = "{}", i.changed = !1, i.tableInitialized = !1, i.registerTableOption("filterMode", "local"), i.registerTableOption("initialFilter", !1), i.registerTableOption("initialHeaderFilter", !1), i.registerTableOption("headerFilterLiveFilterDelay", 300), i.registerColumnOption("headerFilter"), i.registerColumnOption("headerFilterPlaceholder"), i.registerColumnOption("headerFilterParams"), i.registerColumnOption("headerFilterEmptyCheck"), i.registerColumnOption("headerFilterFunc"), i.registerColumnOption("headerFilterFuncParams"), i.registerColumnOption("headerFilterLiveFilter"), i.registerTableFunction("searchRows", i.searchRows.bind(l(i))), i.registerTableFunction("searchData", i.searchData.bind(l(i))), i.registerTableFunction("setFilter", i.userSetFilter.bind(l(i))), i.registerTableFunction("refreshFilter", i.userRefreshFilter.bind(l(i))), i.registerTableFunction("addFilter", i.userAddFilter.bind(l(i))), i.registerTableFunction("getFilters", i.getFilters.bind(l(i))), i.registerTableFunction("setHeaderFilterFocus", i.userSetHeaderFilterFocus.bind(l(i))), i.registerTableFunction("getHeaderFilterValue", i.userGetHeaderFilterValue.bind(l(i))), i.registerTableFunction("setHeaderFilterValue", i.userSetHeaderFilterValue.bind(l(i))), i.registerTableFunction("getHeaderFilters", i.getHeaderFilters.bind(l(i))), i.registerTableFunction("removeFilter", i.userRemoveFilter.bind(l(i))), i.registerTableFunction("clearFilter", i.userClearFilter.bind(l(i))), i.registerTableFunction("clearHeaderFilter", i.userClearHeaderFilter.bind(l(i))), i.registerComponentFunction("column", "headerFilterFocus", i.setHeaderFilterFocus.bind(l(i))), i.registerComponentFunction("column", "reloadHeaderFilter", i.reloadHeaderFilter.bind(l(i))), i.registerComponentFunction("column", "getHeaderFilterValue", i.getHeaderFilterValue.bind(l(i))), i.registerComponentFunction("column", "setHeaderFilterValue", i.setHeaderFilterValue.bind(l(i))), i
        }

        return o(r, [{
            key: "initialize", value: function () {
                this.subscribe("column-init", this.initializeColumnHeaderFilter.bind(this)), this.subscribe("column-width-fit-before", this.hideHeaderFilterElements.bind(this)), this.subscribe("column-width-fit-after", this.showHeaderFilterElements.bind(this)), this.subscribe("table-built", this.tableBuilt.bind(this)), "remote" === this.table.options.filterMode && this.subscribe("data-params", this.remoteFilterParams.bind(this)), this.registerDataHandler(this.filter.bind(this), 10)
            }
        }, {
            key: "tableBuilt", value: function () {
                var e = this;
                this.table.options.initialFilter && this.setFilter(this.table.options.initialFilter), this.table.options.initialHeaderFilter && this.table.options.initialHeaderFilter.forEach((function (t) {
                    var i = e.table.columnManager.findColumn(t.field);
                    if (!i) return console.warn("Column Filter Error - No matching column found:", t.field), !1;
                    e.setHeaderFilterValue(i, t.value)
                })), this.tableInitialized = !0
            }
        }, {
            key: "remoteFilterParams", value: function (e, t, i, n) {
                return n.filter = this.getFilters(!0, !0), n
            }
        }, {
            key: "userSetFilter", value: function (e, t, i, n) {
                this.setFilter(e, t, i, n), this.refreshFilter()
            }
        }, {
            key: "userRefreshFilter", value: function () {
                this.refreshFilter()
            }
        }, {
            key: "userAddFilter", value: function (e, t, i, n) {
                this.addFilter(e, t, i, n), this.refreshFilter()
            }
        }, {
            key: "userSetHeaderFilterFocus", value: function (e) {
                var t = this.table.columnManager.findColumn(e);
                if (!t) return console.warn("Column Filter Focus Error - No matching column found:", e), !1;
                this.setHeaderFilterFocus(t)
            }
        }, {
            key: "userGetHeaderFilterValue", value: function (e) {
                var t = this.table.columnManager.findColumn(e);
                if (t) return this.getHeaderFilterValue(t);
                console.warn("Column Filter Error - No matching column found:", e)
            }
        }, {
            key: "userSetHeaderFilterValue", value: function (e, t) {
                var i = this.table.columnManager.findColumn(e);
                if (!i) return console.warn("Column Filter Error - No matching column found:", e), !1;
                this.setHeaderFilterValue(i, t)
            }
        }, {
            key: "userRemoveFilter", value: function (e, t, i) {
                this.removeFilter(e, t, i), this.refreshFilter()
            }
        }, {
            key: "userClearFilter", value: function (e) {
                this.clearFilter(e), this.refreshFilter()
            }
        }, {
            key: "userClearHeaderFilter", value: function () {
                this.clearHeaderFilter(), this.refreshFilter()
            }
        }, {
            key: "searchRows", value: function (e, t, i) {
                return this.search("rows", e, t, i)
            }
        }, {
            key: "searchData", value: function (e, t, i) {
                return this.search("data", e, t, i)
            }
        }, {
            key: "initializeColumnHeaderFilter", value: function (e) {
                var t = e.definition;
                t.headerFilter && (void 0 !== t.headerFilterPlaceholder && t.field && this.module("localize").setHeaderFilterColumnPlaceholder(t.field, t.headerFilterPlaceholder), this.initializeColumn(e))
            }
        }, {
            key: "initializeColumn", value: function (t, i) {
                var n = this, o = t.getField();
                t.modules.filter = {
                    success: function (i) {
                        var a,
                            s = "input" == t.modules.filter.tagType && "text" == t.modules.filter.attrType || "textarea" == t.modules.filter.tagType ? "partial" : "match",
                            l = "", u = "";
                        if (void 0 === t.modules.filter.prevSuccess || t.modules.filter.prevSuccess !== i) {
                            if (t.modules.filter.prevSuccess = i, t.modules.filter.emptyFunc(i)) delete n.headerFilters[o]; else {
                                switch (t.modules.filter.value = i, e(t.definition.headerFilterFunc)) {
                                    case"string":
                                        r.filters[t.definition.headerFilterFunc] ? (l = t.definition.headerFilterFunc, a = function (e) {
                                            var n = t.definition.headerFilterFuncParams || {}, o = t.getFieldValue(e);
                                            return n = "function" == typeof n ? n(i, o, e) : n, r.filters[t.definition.headerFilterFunc](i, o, e, n)
                                        }) : console.warn("Header Filter Error - Matching filter function not found: ", t.definition.headerFilterFunc);
                                        break;
                                    case"function":
                                        l = a = function (e) {
                                            var n = t.definition.headerFilterFuncParams || {}, o = t.getFieldValue(e);
                                            return n = "function" == typeof n ? n(i, o, e) : n, t.definition.headerFilterFunc(i, o, e, n)
                                        }
                                }
                                if (!a) switch (s) {
                                    case"partial":
                                        a = function (e) {
                                            var n = t.getFieldValue(e);
                                            return null != n && String(n).toLowerCase().indexOf(String(i).toLowerCase()) > -1
                                        }, l = "like";
                                        break;
                                    default:
                                        a = function (e) {
                                            return t.getFieldValue(e) == i
                                        }, l = "="
                                }
                                n.headerFilters[o] = {value: i, func: a, type: l, params: {}}
                            }
                            t.modules.filter.value = i, u = JSON.stringify(n.headerFilters), n.prevHeaderFilterChangeCheck !== u && (n.prevHeaderFilterChangeCheck = u, n.trackChanges(), n.refreshFilter())
                        }
                        return !0
                    }, attrType: !1, tagType: !1, emptyFunc: !1
                }, this.generateHeaderFilterElement(t)
            }
        }, {
            key: "generateHeaderFilterElement", value: function (t, i, n) {
                var o, a, r, s, l, u, c, h = this, d = this, m = t.modules.filter.success, p = t.getField();
                if (t.modules.filter.value = i, t.modules.filter.headerElement && t.modules.filter.headerElement.parentNode && t.contentElement.removeChild(t.modules.filter.headerElement.parentNode), p) {
                    switch (t.modules.filter.emptyFunc = t.definition.headerFilterEmptyCheck || function (e) {
                        return !e && "0" !== e && 0 !== e
                    }, (o = document.createElement("div")).classList.add("tabulator-header-filter"), e(t.definition.headerFilter)) {
                        case"string":
                            d.table.modules.edit.editors[t.definition.headerFilter] ? (a = d.table.modules.edit.editors[t.definition.headerFilter], "tick" !== t.definition.headerFilter && "tickCross" !== t.definition.headerFilter || t.definition.headerFilterEmptyCheck || (t.modules.filter.emptyFunc = function (e) {
                                return !0 !== e && !1 !== e
                            })) : console.warn("Filter Error - Cannot build header filter, No such editor found: ", t.definition.editor);
                            break;
                        case"function":
                            a = t.definition.headerFilter;
                            break;
                        case"boolean":
                            t.modules.edit && t.modules.edit.editor ? a = t.modules.edit.editor : t.definition.formatter && d.table.modules.edit.editors[t.definition.formatter] ? (a = d.table.modules.edit.editors[t.definition.formatter], "tick" !== t.definition.formatter && "tickCross" !== t.definition.formatter || t.definition.headerFilterEmptyCheck || (t.modules.filter.emptyFunc = function (e) {
                                return !0 !== e && !1 !== e
                            })) : a = d.table.modules.edit.editors.input
                    }
                    if (a) {
                        if (s = {
                            getValue: function () {
                                return void 0 !== i ? i : ""
                            }, getField: function () {
                                return t.definition.field
                            }, getElement: function () {
                                return o
                            }, getColumn: function () {
                                return t.getComponent()
                            }, getRow: function () {
                                return {
                                    normalizeHeight: function () {
                                    }
                                }
                            }
                        }, c = "function" == typeof (c = t.definition.headerFilterParams || {}) ? c.call(d.table, s) : c, !(r = a.call(this.table.modules.edit, s, (function () {
                        }), m, (function () {
                        }), c))) return void console.warn("Filter Error - Cannot add filter to " + p + " column, editor returned a value of false");
                        if (!(r instanceof Node)) return void console.warn("Filter Error - Cannot add filter to " + p + " column, editor should return an instance of Node, the editor returned:", r);
                        p ? d.langBind("headerFilters|columns|" + t.definition.field, (function (e) {
                            r.setAttribute("placeholder", void 0 !== e && e ? e : d.langText("headerFilters|default"))
                        })) : d.langBind("headerFilters|default", (function (e) {
                            r.setAttribute("placeholder", e)
                        })), r.addEventListener("click", (function (e) {
                            e.stopPropagation(), r.focus()
                        })), r.addEventListener("focus", (function (e) {
                            var t = h.table.columnManager.element.scrollLeft;
                            t !== h.table.rowManager.element.scrollLeft + parseInt(h.table.columnManager.element.style.marginLeft) && (h.table.rowManager.scrollHorizontal(t), h.table.columnManager.scrollHorizontal(t))
                        })), l = !1, u = function (e) {
                            l && clearTimeout(l), l = setTimeout((function () {
                                m(r.value)
                            }), d.table.options.headerFilterLiveFilterDelay)
                        }, t.modules.filter.headerElement = r, t.modules.filter.attrType = r.hasAttribute("type") ? r.getAttribute("type").toLowerCase() : "", t.modules.filter.tagType = r.tagName.toLowerCase(), !1 !== t.definition.headerFilterLiveFilter && ("autocomplete" !== t.definition.headerFilter && "tickCross" !== t.definition.headerFilter && ("autocomplete" !== t.definition.editor && "tickCross" !== t.definition.editor || !0 !== t.definition.headerFilter) && (r.addEventListener("keyup", u), r.addEventListener("search", u), "number" == t.modules.filter.attrType && r.addEventListener("change", (function (e) {
                            m(r.value)
                        })), "text" == t.modules.filter.attrType && "ie" !== this.table.browser && r.setAttribute("type", "search")), "input" != t.modules.filter.tagType && "select" != t.modules.filter.tagType && "textarea" != t.modules.filter.tagType || r.addEventListener("mousedown", (function (e) {
                            e.stopPropagation()
                        }))), o.appendChild(r), t.contentElement.appendChild(o), n || d.headerFilterColumns.push(t)
                    }
                } else console.warn("Filter Error - Cannot add header filter, column has no field set:", t.definition.title)
            }
        }, {
            key: "hideHeaderFilterElements", value: function () {
                this.headerFilterColumns.forEach((function (e) {
                    e.modules.filter && e.modules.filter.headerElement && (e.modules.filter.headerElement.style.display = "none")
                }))
            }
        }, {
            key: "showHeaderFilterElements", value: function () {
                this.headerFilterColumns.forEach((function (e) {
                    e.modules.filter && e.modules.filter.headerElement && (e.modules.filter.headerElement.style.display = "")
                }))
            }
        }, {
            key: "setHeaderFilterFocus", value: function (e) {
                e.modules.filter && e.modules.filter.headerElement ? e.modules.filter.headerElement.focus() : console.warn("Column Filter Focus Error - No header filter set on column:", e.getField())
            }
        }, {
            key: "getHeaderFilterValue", value: function (e) {
                if (e.modules.filter && e.modules.filter.headerElement) return e.modules.filter.value;
                console.warn("Column Filter Error - No header filter set on column:", e.getField())
            }
        }, {
            key: "setHeaderFilterValue", value: function (e, t) {
                e && (e.modules.filter && e.modules.filter.headerElement ? (this.generateHeaderFilterElement(e, t, !0), e.modules.filter.success(t)) : console.warn("Column Filter Error - No header filter set on column:", e.getField()))
            }
        }, {
            key: "reloadHeaderFilter", value: function (e) {
                e && (e.modules.filter && e.modules.filter.headerElement ? this.generateHeaderFilterElement(e, e.modules.filter.value, !0) : console.warn("Column Filter Error - No header filter set on column:", e.getField()))
            }
        }, {
            key: "refreshFilter", value: function () {
                this.tableInitialized && ("remote" === this.table.options.filterMode ? this.reloadData(null, !1, !1) : this.refreshData(!0))
            }
        }, {
            key: "trackChanges", value: function () {
                this.changed = !0, this.dispatch("filter-changed")
            }
        }, {
            key: "hasChanged", value: function () {
                var e = this.changed;
                return this.changed = !1, e
            }
        }, {
            key: "setFilter", value: function (e, t, i, n) {
                this.filterList = [], Array.isArray(e) || (e = [{
                    field: e,
                    type: t,
                    value: i,
                    params: n
                }]), this.addFilter(e)
            }
        }, {
            key: "addFilter", value: function (e, t, i, n) {
                var o = this, a = !1;
                Array.isArray(e) || (e = [{field: e, type: t, value: i, params: n}]), e.forEach((function (e) {
                    (e = o.findFilter(e)) && (o.filterList.push(e), a = !0)
                })), a && this.trackChanges()
            }
        }, {
            key: "findFilter", value: function (e) {
                var t;
                if (Array.isArray(e)) return this.findSubFilters(e);
                var i = !1;
                return "function" == typeof e.field ? i = function (t) {
                    return e.field(t, e.type || {})
                } : r.filters[e.type] ? i = (t = this.table.columnManager.getColumnByField(e.field)) ? function (i) {
                    return r.filters[e.type](e.value, t.getFieldValue(i), i, e.params || {})
                } : function (t) {
                    return r.filters[e.type](e.value, t[e.field], t, e.params || {})
                } : console.warn("Filter Error - No such filter type found, ignoring: ", e.type), e.func = i, !!e.func && e
            }
        }, {
            key: "findSubFilters", value: function (e) {
                var t = this, i = [];
                return e.forEach((function (e) {
                    (e = t.findFilter(e)) && i.push(e)
                })), !!i.length && i
            }
        }, {
            key: "getFilters", value: function (e, t) {
                var i = [];
                return e && (i = this.getHeaderFilters()), t && i.forEach((function (e) {
                    "function" == typeof e.type && (e.type = "function")
                })), i = i.concat(this.filtersToArray(this.filterList, t))
            }
        }, {
            key: "filtersToArray", value: function (e, t) {
                var i = this, n = [];
                return e.forEach((function (e) {
                    var o;
                    Array.isArray(e) ? n.push(i.filtersToArray(e, t)) : (o = {
                        field: e.field,
                        type: e.type,
                        value: e.value
                    }, t && "function" == typeof o.type && (o.type = "function"), n.push(o))
                })), n
            }
        }, {
            key: "getHeaderFilters", value: function () {
                var e = [];
                for (var t in this.headerFilters) e.push({
                    field: t,
                    type: this.headerFilters[t].type,
                    value: this.headerFilters[t].value
                });
                return e
            }
        }, {
            key: "removeFilter", value: function (t, i, n) {
                var o = this;
                Array.isArray(t) || (t = [{field: t, type: i, value: n}]), t.forEach((function (t) {
                    var i = -1;
                    (i = "object" == e(t.field) ? o.filterList.findIndex((function (e) {
                        return t === e
                    })) : o.filterList.findIndex((function (e) {
                        return t.field === e.field && t.type === e.type && t.value === e.value
                    }))) > -1 ? o.filterList.splice(i, 1) : console.warn("Filter Error - No matching filter type found, ignoring: ", t.type)
                })), this.trackChanges()
            }
        }, {
            key: "clearFilter", value: function (e) {
                this.filterList = [], e && this.clearHeaderFilter(), this.trackChanges()
            }
        }, {
            key: "clearHeaderFilter", value: function () {
                var e = this;
                this.headerFilters = {}, this.prevHeaderFilterChangeCheck = "{}", this.headerFilterColumns.forEach((function (t) {
                    void 0 !== t.modules.filter.value && delete t.modules.filter.value, t.modules.filter.prevSuccess = void 0, e.reloadHeaderFilter(t)
                })), this.trackChanges()
            }
        }, {
            key: "search", value: function (e, t, i, n) {
                var o = this, a = [], r = [];
                return Array.isArray(t) || (t = [{field: t, type: i, value: n}]), t.forEach((function (e) {
                    (e = o.findFilter(e)) && r.push(e)
                })), this.table.rowManager.rows.forEach((function (t) {
                    var i = !0;
                    r.forEach((function (e) {
                        o.filterRecurse(e, t.getData()) || (i = !1)
                    })), i && a.push("data" === e ? t.getData("data") : t.getComponent())
                })), a
            }
        }, {
            key: "filter", value: function (e, t) {
                var i = this, n = [], o = [];
                return this.subscribedExternal("dataFiltering") && this.dispatchExternal("dataFiltering", this.getFilters(!0)), "remote" !== this.table.options.filterMode && (this.filterList.length || Object.keys(this.headerFilters).length) ? e.forEach((function (e) {
                    i.filterRow(e) && n.push(e)
                })) : n = e.slice(0), this.subscribedExternal("dataFiltered") && (n.forEach((function (e) {
                    o.push(e.getComponent())
                })), this.dispatchExternal("dataFiltered", this.getFilters(!0), o)), n
            }
        }, {
            key: "filterRow", value: function (e, t) {
                var i = this, n = !0, o = e.getData();
                for (var a in this.filterList.forEach((function (e) {
                    i.filterRecurse(e, o) || (n = !1)
                })), this.headerFilters) this.headerFilters[a].func(o) || (n = !1);
                return n
            }
        }, {
            key: "filterRecurse", value: function (e, t) {
                var i = this, n = !1;
                return Array.isArray(e) ? e.forEach((function (e) {
                    i.filterRecurse(e, t) && (n = !0)
                })) : n = e.func(t), n
            }
        }]), r
    }(V);
    ye.moduleName = "filter", ye.filters = be;
    var we = {
        plaintext: function (e, t, i) {
            return this.emptyToSpace(this.sanitizeHTML(e.getValue()))
        }, html: function (e, t, i) {
            return e.getValue()
        }, textarea: function (e, t, i) {
            return e.getElement().style.whiteSpace = "pre-wrap", this.emptyToSpace(this.sanitizeHTML(e.getValue()))
        }, money: function (e, t, i) {
            var n, o, a, r, s = parseFloat(e.getValue()), l = "", u = t.decimal || ".", c = t.thousand || ",",
                h = t.negativeSign || "-", d = t.symbol || "", m = !!t.symbolAfter,
                p = void 0 !== t.precision ? t.precision : 2;
            if (isNaN(s)) return this.emptyToSpace(this.sanitizeHTML(e.getValue()));
            if (s < 0 && (s = Math.abs(s), l = h), n = !1 !== p ? s.toFixed(p) : s, o = (n = String(n).split("."))[0], a = n.length > 1 ? u + n[1] : "", !1 !== t.thousand) for (r = /(\d+)(\d{3})/; r.test(o);) o = o.replace(r, "$1" + c + "$2");
            return m ? l + o + a + d : l + d + o + a
        }, link: function (t, i, n) {
            var o, a = t.getValue(), r = i.urlPrefix || "", s = i.download, l = a, u = document.createElement("a");
            if (i.labelField && (o = t.getData(), l = function t(i, n) {
                var o = n[i.shift()];
                return i.length && "object" === e(o) ? t(i, o) : o
            }(i.labelField.split(this.table.options.nestedFieldSeparator), o)), i.label) switch (e(i.label)) {
                case"string":
                    l = i.label;
                    break;
                case"function":
                    l = i.label(t)
            }
            if (l) {
                if (i.urlField && (a = (o = t.getData())[i.urlField]), i.url) switch (e(i.url)) {
                    case"string":
                        a = i.url;
                        break;
                    case"function":
                        a = i.url(t)
                }
                return u.setAttribute("href", r + a), i.target && u.setAttribute("target", i.target), i.download && (s = "function" == typeof s ? s(t) : !0 === s ? "" : s, u.setAttribute("download", s)), u.innerHTML = this.emptyToSpace(this.sanitizeHTML(l)), u
            }
            return "&nbsp;"
        }, image: function (t, i, n) {
            var o = document.createElement("img"), a = t.getValue();
            switch (i.urlPrefix && (a = i.urlPrefix + t.getValue()), i.urlSuffix && (a += i.urlSuffix), o.setAttribute("src", a), e(i.height)) {
                case"number":
                    o.style.height = i.height + "px";
                    break;
                case"string":
                    o.style.height = i.height
            }
            switch (e(i.width)) {
                case"number":
                    o.style.width = i.width + "px";
                    break;
                case"string":
                    o.style.width = i.width
            }
            return o.addEventListener("load", (function () {
                t.getRow().normalizeHeight()
            })), o
        }, tickCross: function (e, t, i) {
            var n = e.getValue(), o = e.getElement(), a = t.allowEmpty, r = t.allowTruthy,
                s = Object.keys(t).includes("trueValue"),
                l = void 0 !== t.tickElement ? t.tickElement : '<svg enable-background="new 0 0 24 24" height="14" width="14" viewBox="0 0 24 24" xml:space="preserve" ><path fill="#2DC214" clip-rule="evenodd" d="M21.652,3.211c-0.293-0.295-0.77-0.295-1.061,0L9.41,14.34  c-0.293,0.297-0.771,0.297-1.062,0L3.449,9.351C3.304,9.203,3.114,9.13,2.923,9.129C2.73,9.128,2.534,9.201,2.387,9.351  l-2.165,1.946C0.078,11.445,0,11.63,0,11.823c0,0.194,0.078,0.397,0.223,0.544l4.94,5.184c0.292,0.296,0.771,0.776,1.062,1.07  l2.124,2.141c0.292,0.293,0.769,0.293,1.062,0l14.366-14.34c0.293-0.294,0.293-0.777,0-1.071L21.652,3.211z" fill-rule="evenodd"/></svg>',
                u = void 0 !== t.crossElement ? t.crossElement : '<svg enable-background="new 0 0 24 24" height="14" width="14"  viewBox="0 0 24 24" xml:space="preserve" ><path fill="#CE1515" d="M22.245,4.015c0.313,0.313,0.313,0.826,0,1.139l-6.276,6.27c-0.313,0.312-0.313,0.826,0,1.14l6.273,6.272  c0.313,0.313,0.313,0.826,0,1.14l-2.285,2.277c-0.314,0.312-0.828,0.312-1.142,0l-6.271-6.271c-0.313-0.313-0.828-0.313-1.141,0  l-6.276,6.267c-0.313,0.313-0.828,0.313-1.141,0l-2.282-2.28c-0.313-0.313-0.313-0.826,0-1.14l6.278-6.269  c0.313-0.312,0.313-0.826,0-1.14L1.709,5.147c-0.314-0.313-0.314-0.827,0-1.14l2.284-2.278C4.308,1.417,4.821,1.417,5.135,1.73  L11.405,8c0.314,0.314,0.828,0.314,1.141,0.001l6.276-6.267c0.312-0.312,0.826-0.312,1.141,0L22.245,4.015z"/></svg>';
            return s && n === t.trueValue || !s && (r && n || !0 === n || "true" === n || "True" === n || 1 === n || "1" === n) ? (o.setAttribute("aria-checked", !0), l || "") : !a || "null" !== n && "" !== n && null != n ? (o.setAttribute("aria-checked", !1), u || "") : (o.setAttribute("aria-checked", "mixed"), "")
        }, datetime: function (e, t, i) {
            var n, o = window.DateTime || luxon.DateTime, a = t.inputFormat || "yyyy-MM-dd HH:mm:ss",
                r = t.outputFormat || "dd/MM/yyyy HH:mm:ss",
                s = void 0 !== t.invalidPlaceholder ? t.invalidPlaceholder : "", l = e.getValue();
            if (void 0 !== o) return (n = o.isDateTime(l) ? l : "iso" === a ? o.fromISO(String(l)) : o.fromFormat(String(l), a)).isValid ? (t.timezone && (n = n.setZone(t.timezone)), n.toFormat(r)) : !0 !== s && l ? "function" == typeof s ? s(l) : s : l;
            console.error("Format Error - 'datetime' formatter is dependant on luxon.js")
        }, datetimediff: function (e, t, i) {
            var n, o = window.DateTime || luxon.DateTime, a = t.inputFormat || "yyyy-MM-dd HH:mm:ss",
                r = void 0 !== t.invalidPlaceholder ? t.invalidPlaceholder : "", s = void 0 !== t.suffix && t.suffix,
                l = void 0 !== t.unit ? t.unit : "days", u = void 0 !== t.humanize && t.humanize,
                c = void 0 !== t.date ? t.date : o.now(), h = e.getValue();
            if (void 0 !== o) return (n = o.isDateTime(h) ? h : "iso" === a ? o.fromISO(String(h)) : o.fromFormat(String(h), a)).isValid ? u ? n.diff(c, l).toHuman() + (s ? " " + s : "") : parseInt(n.diff(c, l)[l]) + (s ? " " + s : "") : !0 === r ? h : "function" == typeof r ? r(h) : r;
            console.error("Format Error - 'datetimediff' formatter is dependant on luxon.js")
        }, lookup: function (e, t, i) {
            var n = e.getValue();
            return void 0 === t[n] ? (console.warn("Missing display value for " + n), n) : t[n]
        }, star: function (e, t, i) {
            var n = e.getValue(), o = e.getElement(), a = t && t.stars ? t.stars : 5,
                r = document.createElement("span"), s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            r.style.verticalAlign = "middle", s.setAttribute("width", "14"), s.setAttribute("height", "14"), s.setAttribute("viewBox", "0 0 512 512"), s.setAttribute("xml:space", "preserve"), s.style.padding = "0 1px", n = n && !isNaN(n) ? parseInt(n) : 0, n = Math.max(0, Math.min(n, a));
            for (var l = 1; l <= a; l++) {
                var u = s.cloneNode(!0);
                u.innerHTML = l <= n ? '<polygon fill="#FFEA00" stroke="#C1AB60" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/>' : '<polygon fill="#D2D2D2" stroke="#686868" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/>', r.appendChild(u)
            }
            return o.style.whiteSpace = "nowrap", o.style.overflow = "hidden", o.style.textOverflow = "ellipsis", o.setAttribute("aria-label", n), r
        }, traffic: function (t, i, n) {
            var o, a, r = this.sanitizeHTML(t.getValue()) || 0, s = document.createElement("span"),
                l = i && i.max ? i.max : 100, u = i && i.min ? i.min : 0,
                c = i && void 0 !== i.color ? i.color : ["red", "orange", "green"], h = "#666666";
            if (!isNaN(r) && void 0 !== t.getValue()) {
                switch (s.classList.add("tabulator-traffic-light"), a = parseFloat(r) <= l ? parseFloat(r) : l, a = parseFloat(a) >= u ? parseFloat(a) : u, o = (l - u) / 100, a = Math.round((a - u) / o), e(c)) {
                    case"string":
                        h = c;
                        break;
                    case"function":
                        h = c(r);
                        break;
                    case"object":
                        if (Array.isArray(c)) {
                            var d = 100 / c.length, m = Math.floor(a / d);
                            m = Math.min(m, c.length - 1), h = c[m = Math.max(m, 0)];
                            break
                        }
                }
                return s.style.backgroundColor = h, s
            }
        }, progress: function (t, i, n) {
            var o, a, r, s, l, u = this.sanitizeHTML(t.getValue()) || 0, c = t.getElement(),
                h = i && i.max ? i.max : 100, d = i && i.min ? i.min : 0,
                m = i && i.legendAlign ? i.legendAlign : "center";
            switch (a = parseFloat(u) <= h ? parseFloat(u) : h, a = parseFloat(a) >= d ? parseFloat(a) : d, o = (h - d) / 100, a = Math.round((a - d) / o), e(i.color)) {
                case"string":
                    r = i.color;
                    break;
                case"function":
                    r = i.color(u);
                    break;
                case"object":
                    if (Array.isArray(i.color)) {
                        var p = 100 / i.color.length, f = Math.floor(a / p);
                        f = Math.min(f, i.color.length - 1), f = Math.max(f, 0), r = i.color[f];
                        break
                    }
                default:
                    r = "#2DC214"
            }
            switch (e(i.legend)) {
                case"string":
                    s = i.legend;
                    break;
                case"function":
                    s = i.legend(u);
                    break;
                case"boolean":
                    s = u;
                    break;
                default:
                    s = !1
            }
            switch (e(i.legendColor)) {
                case"string":
                    l = i.legendColor;
                    break;
                case"function":
                    l = i.legendColor(u);
                    break;
                case"object":
                    if (Array.isArray(i.legendColor)) {
                        p = 100 / i.legendColor.length, f = Math.floor(a / p);
                        f = Math.min(f, i.legendColor.length - 1), f = Math.max(f, 0), l = i.legendColor[f]
                    }
                    break;
                default:
                    l = "#000"
            }
            c.style.minWidth = "30px", c.style.position = "relative", c.setAttribute("aria-label", a);
            var g = document.createElement("div");
            g.style.display = "inline-block", g.style.position = "absolute", g.style.width = a + "%", g.style.backgroundColor = r, g.style.height = "100%", g.setAttribute("data-max", h), g.setAttribute("data-min", d);
            var v = document.createElement("div");
            if (v.style.position = "relative", v.style.width = "100%", v.style.height = "100%", s) {
                var b = document.createElement("div");
                b.style.position = "absolute", b.style.top = 0, b.style.left = 0, b.style.textAlign = m, b.style.width = "100%", b.style.color = l, b.innerHTML = s
            }
            return n((function () {
                if (!(t instanceof y)) {
                    var e = document.createElement("div");
                    e.style.position = "absolute", e.style.top = "4px", e.style.bottom = "4px", e.style.left = "4px", e.style.right = "4px", c.appendChild(e), c = e
                }
                c.appendChild(v), v.appendChild(g), s && v.appendChild(b)
            })), ""
        }, color: function (e, t, i) {
            return e.getElement().style.backgroundColor = this.sanitizeHTML(e.getValue()), ""
        }, buttonTick: function (e, t, i) {
            return '<svg enable-background="new 0 0 24 24" height="14" width="14" viewBox="0 0 24 24" xml:space="preserve" ><path fill="#2DC214" clip-rule="evenodd" d="M21.652,3.211c-0.293-0.295-0.77-0.295-1.061,0L9.41,14.34  c-0.293,0.297-0.771,0.297-1.062,0L3.449,9.351C3.304,9.203,3.114,9.13,2.923,9.129C2.73,9.128,2.534,9.201,2.387,9.351  l-2.165,1.946C0.078,11.445,0,11.63,0,11.823c0,0.194,0.078,0.397,0.223,0.544l4.94,5.184c0.292,0.296,0.771,0.776,1.062,1.07  l2.124,2.141c0.292,0.293,0.769,0.293,1.062,0l14.366-14.34c0.293-0.294,0.293-0.777,0-1.071L21.652,3.211z" fill-rule="evenodd"/></svg>'
        }, buttonCross: function (e, t, i) {
            return '<svg enable-background="new 0 0 24 24" height="14" width="14" viewBox="0 0 24 24" xml:space="preserve" ><path fill="#CE1515" d="M22.245,4.015c0.313,0.313,0.313,0.826,0,1.139l-6.276,6.27c-0.313,0.312-0.313,0.826,0,1.14l6.273,6.272  c0.313,0.313,0.313,0.826,0,1.14l-2.285,2.277c-0.314,0.312-0.828,0.312-1.142,0l-6.271-6.271c-0.313-0.313-0.828-0.313-1.141,0  l-6.276,6.267c-0.313,0.313-0.828,0.313-1.141,0l-2.282-2.28c-0.313-0.313-0.313-0.826,0-1.14l6.278-6.269  c0.313-0.312,0.313-0.826,0-1.14L1.709,5.147c-0.314-0.313-0.314-0.827,0-1.14l2.284-2.278C4.308,1.417,4.821,1.417,5.135,1.73  L11.405,8c0.314,0.314,0.828,0.314,1.141,0.001l6.276-6.267c0.312-0.312,0.826-0.312,1.141,0L22.245,4.015z"/></svg>'
        }, rownum: function (e, t, i) {
            return this.table.rowManager.activeRows.indexOf(e.getRow()._getSelf()) + 1 || ""
        }, handle: function (e, t, i) {
            return e.getElement().classList.add("tabulator-row-handle"), "<div class='tabulator-row-handle-box'><div class='tabulator-row-handle-bar'></div><div class='tabulator-row-handle-bar'></div><div class='tabulator-row-handle-bar'></div></div>"
        }, responsiveCollapse: function (e, t, i) {
            var n = document.createElement("div"), o = e.getRow()._row.modules.responsiveLayout;

            function a(e) {
                var t = o.element;
                o.open = e, t && (o.open ? (n.classList.add("open"), t.style.display = "") : (n.classList.remove("open"), t.style.display = "none"))
            }

            return n.classList.add("tabulator-responsive-collapse-toggle"), n.innerHTML = "<span class='tabulator-responsive-collapse-toggle-open'>+</span><span class='tabulator-responsive-collapse-toggle-close'>-</span>", e.getElement().classList.add("tabulator-row-handle"), n.addEventListener("click", (function (e) {
                e.stopImmediatePropagation(), a(!o.open)
            })), a(o.open), n
        }, rowSelection: function (e, t, i) {
            var n = this, o = document.createElement("input"), a = !1;
            if (o.type = "checkbox", o.setAttribute("aria-label", "Select Row"), this.table.modExists("selectRow", !0)) if (o.addEventListener("click", (function (e) {
                e.stopPropagation()
            })), "function" == typeof e.getRow) {
                var r = e.getRow();
                r instanceof L ? (o.addEventListener("change", (function (e) {
                    "click" === n.table.options.selectableRangeMode && a ? a = !1 : r.toggleSelect()
                })), "click" === this.table.options.selectableRangeMode && o.addEventListener("click", (function (e) {
                    a = !0, n.table.modules.selectRow.handleComplexRowClick(r._row, e)
                })), o.checked = r.isSelected && r.isSelected(), this.table.modules.selectRow.registerRowSelectCheckbox(r, o)) : o = ""
            } else o.addEventListener("change", (function (e) {
                n.table.modules.selectRow.selectedRows.length ? n.table.deselectRow() : n.table.selectRow(t.rowRange)
            })), this.table.modules.selectRow.registerHeaderSelectCheckbox(o);
            return o
        }
    }, Ce = function (i) {
        a(r, i);
        var n = c(r);

        function r(e) {
            var i;
            return t(this, r), (i = n.call(this, e)).registerColumnOption("formatter"), i.registerColumnOption("formatterParams"), i.registerColumnOption("formatterPrint"), i.registerColumnOption("formatterPrintParams"), i.registerColumnOption("formatterClipboard"), i.registerColumnOption("formatterClipboardParams"), i.registerColumnOption("formatterHtmlOutput"), i.registerColumnOption("formatterHtmlOutputParams"), i.registerColumnOption("titleFormatter"), i.registerColumnOption("titleFormatterParams"), i
        }

        return o(r, [{
            key: "initialize", value: function () {
                this.subscribe("cell-format", this.formatValue.bind(this)), this.subscribe("cell-rendered", this.cellRendered.bind(this)), this.subscribe("column-layout", this.initializeColumn.bind(this)), this.subscribe("column-format", this.formatHeader.bind(this))
            }
        }, {
            key: "initializeColumn", value: function (e) {
                e.modules.format = this.lookupFormatter(e, ""), void 0 !== e.definition.formatterPrint && (e.modules.format.print = this.lookupFormatter(e, "Print")), void 0 !== e.definition.formatterClipboard && (e.modules.format.clipboard = this.lookupFormatter(e, "Clipboard")), void 0 !== e.definition.formatterHtmlOutput && (e.modules.format.htmlOutput = this.lookupFormatter(e, "HtmlOutput"))
            }
        }, {
            key: "lookupFormatter", value: function (t, i) {
                var n = {params: t.definition["formatter" + i + "Params"] || {}}, o = t.definition["formatter" + i];
                switch (e(o)) {
                    case"string":
                        r.formatters[o] ? n.formatter = r.formatters[o] : (console.warn("Formatter Error - No such formatter found: ", o), n.formatter = r.formatters.plaintext);
                        break;
                    case"function":
                        n.formatter = o;
                        break;
                    default:
                        n.formatter = r.formatters.plaintext
                }
                return n
            }
        }, {
            key: "cellRendered", value: function (e) {
                e.modules.format && e.modules.format.renderedCallback && !e.modules.format.rendered && (e.modules.format.renderedCallback(), e.modules.format.rendered = !0)
            }
        }, {
            key: "formatHeader", value: function (e, t, i) {
                var n, o, a, r;
                return e.definition.titleFormatter ? (n = this.getFormatter(e.definition.titleFormatter), a = function (t) {
                    e.titleFormatterRendered = t
                }, r = {
                    getValue: function () {
                        return t
                    }, getElement: function () {
                        return i
                    }
                }, o = "function" == typeof (o = e.definition.titleFormatterParams || {}) ? o() : o, n.call(this, r, o, a)) : t
            }
        }, {
            key: "formatValue", value: function (e) {
                var t = e.getComponent(),
                    i = "function" == typeof e.column.modules.format.params ? e.column.modules.format.params(t) : e.column.modules.format.params;
                return e.column.modules.format.formatter.call(this, t, i, (function (t) {
                    e.modules.format || (e.modules.format = {}), e.modules.format.renderedCallback = t, e.modules.format.rendered = !1
                }))
            }
        }, {
            key: "formatExportValue", value: function (e, t) {
                var i, n = e.column.modules.format[t];
                if (n) {
                    return i = "function" == typeof n.params ? n.params(component) : n.params, n.formatter.call(this, e.getComponent(), i, (function (t) {
                        e.modules.format || (e.modules.format = {}), e.modules.format.renderedCallback = t, e.modules.format.rendered = !1
                    }))
                }
                return this.formatValue(e)
            }
        }, {
            key: "sanitizeHTML", value: function (e) {
                if (e) {
                    var t = {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;",
                        "/": "&#x2F;",
                        "`": "&#x60;",
                        "=": "&#x3D;"
                    };
                    return String(e).replace(/[&<>"'`=\/]/g, (function (e) {
                        return t[e]
                    }))
                }
                return e
            }
        }, {
            key: "emptyToSpace", value: function (e) {
                return null == e || "" === e ? "&nbsp;" : e
            }
        }, {
            key: "getFormatter", value: function (t) {
                switch (e(t)) {
                    case"string":
                        r.formatters[t] ? t = r.formatters[t] : (console.warn("Formatter Error - No such formatter found: ", t), t = r.formatters.plaintext);
                        break;
                    case"function":
                        t = t;
                        break;
                    default:
                        t = r.formatters.plaintext
                }
                return t
            }
        }]), r
    }(V);
    Ce.moduleName = "format", Ce.formatters = we;
    var ke = function (e) {
        a(n, e);
        var i = c(n);

        function n(e) {
            var o;
            return t(this, n), (o = i.call(this, e)).leftColumns = [], o.rightColumns = [], o.leftMargin = 0, o.rightMargin = 0, o.rightPadding = 0, o.initializationMode = "left", o.active = !1, o.blocked = !0, o.registerColumnOption("frozen"), o
        }

        return o(n, [{
            key: "reset", value: function () {
                this.initializationMode = "left", this.leftColumns = [], this.rightColumns = [], this.leftMargin = 0, this.rightMargin = 0, this.rightMargin = 0, this.active = !1, this.table.columnManager.headersElement.style.marginLeft = 0, this.table.columnManager.element.style.paddingRight = 0
            }
        }, {
            key: "initialize", value: function () {
                this.subscribe("cell-layout", this.layoutCell.bind(this)), this.subscribe("column-init", this.initializeColumn.bind(this)), this.subscribe("column-width", this.layout.bind(this)), this.subscribe("row-layout-after", this.layoutRow.bind(this)), this.subscribe("table-layout", this.layout.bind(this)), this.subscribe("scroll-horizontal", this.scrollHorizontal.bind(this)), this.subscribe("scroll-horizontal", this.scrollHorizontal.bind(this)), this.subscribe("columns-loading", this.reset.bind(this)), this.subscribe("column-add", this.reinitializeColumns.bind(this)), this.subscribe("column-delete", this.reinitializeColumns.bind(this)), this.subscribe("table-redraw", this.layout.bind(this)), this.subscribe("layout-refreshing", this.blockLayout.bind(this)), this.subscribe("layout-refreshed", this.unblockLayout.bind(this))
            }
        }, {
            key: "blockLayout", value: function () {
                this.blocked = !0
            }
        }, {
            key: "unblockLayout", value: function () {
                this.blocked = !1
            }
        }, {
            key: "layoutCell", value: function (e) {
                this.layoutElement(e.element, e.column)
            }
        }, {
            key: "reinitializeColumns", value: function () {
                var e = this;
                this.reset(), this.table.columnManager.columnsByIndex.forEach((function (t) {
                    e.initializeColumn(t)
                }))
            }
        }, {
            key: "initializeColumn", value: function (e) {
                var t = {margin: 0, edge: !1};
                e.isGroup || (this.frozenCheck(e) ? (t.position = this.initializationMode, "left" == this.initializationMode ? this.leftColumns.push(e) : this.rightColumns.unshift(e), this.active = !0, e.modules.frozen = t) : this.initializationMode = "right")
            }
        }, {
            key: "frozenCheck", value: function (e) {
                return e.parent.isGroup && e.definition.frozen && console.warn("Frozen Column Error - Parent column group must be frozen, not individual columns or sub column groups"), e.parent.isGroup ? this.frozenCheck(e.parent) : e.definition.frozen
            }
        }, {
            key: "scrollHorizontal", value: function () {
                this.active && (this.calcMargins(!0), this.layoutColumnPosition(), this.layoutCalcRows(), this.reinitializeRows())
            }
        }, {
            key: "calcMargins", value: function (e) {
                e || (this.leftMargin = this._calcSpace(this.leftColumns, this.leftColumns.length) + "px", this.rightMargin = this._calcSpace(this.rightColumns, this.rightColumns.length) + "px", this.table.rowManager.tableElement.style.marginRight = this.rightMargin), this.rightPadding = this.table.rowManager.element.clientWidth + this.table.columnManager.scrollLeft
            }
        }, {
            key: "layoutCalcRows", value: function () {
                this.table.modExists("columnCalcs") && (this.table.modules.columnCalcs.topInitialized && this.table.modules.columnCalcs.topRow && this.layoutRow(this.table.modules.columnCalcs.topRow), this.table.modules.columnCalcs.botInitialized && this.table.modules.columnCalcs.botRow && this.layoutRow(this.table.modules.columnCalcs.botRow), this.table.modExists("groupRows") && this.layoutGroupCalcs(this.table.modules.groupRows.getGroups()))
            }
        }, {
            key: "layoutGroupCalcs", value: function (e) {
                var t = this;
                e.forEach((function (e) {
                    e.calcs.top && t.layoutRow(e.calcs.top), e.calcs.bottom && t.layoutRow(e.calcs.bottom), e.groupList && e.groupList.length && t.layoutGroupCalcs(e.groupList && e.groupList)
                }))
            }
        }, {
            key: "layoutColumnPosition", value: function (e) {
                var t = this, i = [], n = 0, o = 0;
                this.table.columnManager.headersElement.style.marginLeft = this.leftMargin, this.table.columnManager.element.style.paddingRight = this.rightMargin, this.leftColumns.forEach((function (o, a) {
                    if (o.modules.frozen.marginValue = n + t.table.columnManager.scrollLeft, o.modules.frozen.margin = o.modules.frozen.marginValue + "px", o.visible && (n += o.getWidth()), a == t.leftColumns.length - 1 ? o.modules.frozen.edge = !0 : o.modules.frozen.edge = !1, o.parent.isGroup) {
                        var r = t.getColGroupParentElement(o);
                        i.includes(r) || (t.layoutElement(r, o), i.push(r)), o.modules.frozen.edge && r.classList.add("tabulator-frozen-" + o.modules.frozen.position)
                    } else t.layoutElement(o.getElement(), o);
                    e && o.cells.forEach((function (e) {
                        t.layoutElement(e.getElement(!0), o)
                    }))
                })), this.rightColumns.forEach((function (i, n) {
                    i.visible && (o += i.getWidth()), i.modules.frozen.marginValue = t.rightPadding - o, i.modules.frozen.margin = i.modules.frozen.marginValue + "px", n == t.rightColumns.length - 1 ? i.modules.frozen.edge = !0 : i.modules.frozen.edge = !1, i.parent.isGroup ? t.layoutElement(t.getColGroupParentElement(i), i) : t.layoutElement(i.getElement(), i), e && i.cells.forEach((function (e) {
                        t.layoutElement(e.getElement(!0), i)
                    }))
                }))
            }
        }, {
            key: "getColGroupParentElement", value: function (e) {
                return e.parent.isGroup ? this.getColGroupParentElement(e.parent) : e.getElement()
            }
        }, {
            key: "layout", value: function () {
                this.active && !this.blocked && (this.calcMargins(), this.layoutColumnPosition(), this.reinitializeRows(), this.layoutCalcRows())
            }
        }, {
            key: "reinitializeRows", value: function () {
                var e = this, t = this.table.rowManager.getVisibleRows();
                this.table.rowManager.getRows().filter((function (e) {
                    return !t.includes(e)
                })).forEach((function (e) {
                    e.deinitialize()
                })), t.forEach((function (t) {
                    "row" === t.type && e.layoutRow(t)
                }))
            }
        }, {
            key: "layoutRow", value: function (e) {
                var t = this;
                e.getElement().style.paddingLeft = this.leftMargin, "fitDataFill" === this.table.options.layout && this.rightColumns.length && (this.table.rowManager.getTableElement().style.minWidth = "calc(100% - " + this.rightMargin + ")"), this.leftColumns.forEach((function (i) {
                    var n = e.getCell(i);
                    n && t.layoutElement(n.getElement(!0), i)
                })), this.rightColumns.forEach((function (i) {
                    var n = e.getCell(i);
                    n && t.layoutElement(n.getElement(!0), i)
                }))
            }
        }, {
            key: "layoutElement", value: function (e, t) {
                t.modules.frozen && (e.style.position = "absolute", e.style.left = t.modules.frozen.margin, e.classList.add("tabulator-frozen"), t.modules.frozen.edge && e.classList.add("tabulator-frozen-" + t.modules.frozen.position))
            }
        }, {
            key: "_calcSpace", value: function (e, t) {
                for (var i = 0, n = 0; n < t; n++) e[n].visible && (i += e[n].getWidth());
                return i
            }
        }]), n
    }(V);
    ke.moduleName = "frozenColumns";
    var Ee = function (e) {
        a(n, e);
        var i = c(n);

        function n(e) {
            var o;
            return t(this, n), (o = i.call(this, e)).topElement = document.createElement("div"), o.rows = [], o.registerComponentFunction("row", "freeze", o.freezeRow.bind(l(o))), o.registerComponentFunction("row", "unfreeze", o.unfreezeRow.bind(l(o))), o.registerComponentFunction("row", "isFrozen", o.isRowFrozen.bind(l(o))), o
        }

        return o(n, [{
            key: "initialize", value: function () {
                this.rows = [], this.topElement.classList.add("tabulator-frozen-rows-holder"), this.table.columnManager.getElement().insertBefore(this.topElement, this.table.columnManager.headersElement.nextSibling), this.subscribe("row-deleting", this.detachRow.bind(this)), this.subscribe("rows-visible", this.visibleRows.bind(this)), this.registerDisplayHandler(this.getRows.bind(this), 10)
            }
        }, {
            key: "isRowFrozen", value: function (e) {
                return this.rows.indexOf(e) > -1
            }
        }, {
            key: "isFrozen", value: function () {
                return !!this.rows.length
            }
        }, {
            key: "visibleRows", value: function (e, t) {
                return this.rows.forEach((function (e) {
                    t.push(e)
                })), t
            }
        }, {
            key: "getRows", value: function (e) {
                var t = e.slice(0);
                return this.rows.forEach((function (e) {
                    var i = t.indexOf(e);
                    i > -1 && t.splice(i, 1)
                })), t
            }
        }, {
            key: "freezeRow", value: function (e) {
                e.modules.frozen ? console.warn("Freeze Error - Row is already frozen") : (e.modules.frozen = !0, this.topElement.appendChild(e.getElement()), e.initialize(), e.normalizeHeight(), this.table.rowManager.adjustTableSize(), this.rows.push(e), this.refreshData(!1, "display"), this.styleRows())
            }
        }, {
            key: "unfreezeRow", value: function (e) {
                this.rows.indexOf(e);
                e.modules.frozen ? (e.modules.frozen = !1, this.detachRow(e), this.table.rowManager.adjustTableSize(), this.refreshData(!1, "display"), this.rows.length && this.styleRows()) : console.warn("Freeze Error - Row is already unfrozen")
            }
        }, {
            key: "detachRow", value: function (e) {
                var t = this.rows.indexOf(e);
                if (t > -1) {
                    var i = e.getElement();
                    i.parentNode && i.parentNode.removeChild(i), this.rows.splice(t, 1)
                }
            }
        }, {
            key: "styleRows", value: function (e) {
                var t = this;
                this.rows.forEach((function (e, i) {
                    t.table.rowManager.styleRow(e, i)
                }))
            }
        }]), n
    }(V);
    Ee.moduleName = "frozenRows";
    var Re = function () {
        function e(i) {
            return t(this, e), this._group = i, this.type = "GroupComponent", new Proxy(this, {
                get: function (e, t, i) {
                    return void 0 !== e[t] ? e[t] : e._group.groupManager.table.componentFunctionBinder.handle("row", e._group, t)
                }
            })
        }

        return o(e, [{
            key: "getKey", value: function () {
                return this._group.key
            }
        }, {
            key: "getField", value: function () {
                return this._group.field
            }
        }, {
            key: "getElement", value: function () {
                return this._group.element
            }
        }, {
            key: "getRows", value: function () {
                return this._group.getRows(!0)
            }
        }, {
            key: "getSubGroups", value: function () {
                return this._group.getSubGroups(!0)
            }
        }, {
            key: "getParentGroup", value: function () {
                return !!this._group.parent && this._group.parent.getComponent()
            }
        }, {
            key: "isVisible", value: function () {
                return this._group.visible
            }
        }, {
            key: "show", value: function () {
                this._group.show()
            }
        }, {
            key: "hide", value: function () {
                this._group.hide()
            }
        }, {
            key: "toggle", value: function () {
                this._group.toggleVisibility()
            }
        }, {
            key: "_getSelf", value: function () {
                return this._group
            }
        }, {
            key: "getTable", value: function () {
                return this._group.groupManager.table
            }
        }]), e
    }(), xe = function () {
        function e(i, n, o, a, r, s, l) {
            t(this, e), this.groupManager = i, this.parent = n, this.key = a, this.level = o, this.field = r, this.hasSubGroups = o < i.groupIDLookups.length - 1, this.addRow = this.hasSubGroups ? this._addRowToGroup : this._addRow, this.type = "group", this.old = l, this.rows = [], this.groups = [], this.groupList = [], this.generator = s, this.element = !1, this.elementContents = !1, this.height = 0, this.outerHeight = 0, this.initialized = !1, this.calcs = {}, this.initialized = !1, this.modules = {}, this.arrowElement = !1, this.visible = l ? l.visible : void 0 !== i.startOpen[o] ? i.startOpen[o] : i.startOpen[0], this.component = null, this.createElements(), this.addBindings(), this.createValueGroups()
        }

        return o(e, [{
            key: "wipe", value: function () {
                this.groupList.length ? this.groupList.forEach((function (e) {
                    e.wipe()
                })) : this.rows.forEach((function (e) {
                    e.modules && delete e.modules.group
                })), this.element = !1, this.arrowElement = !1, this.elementContents = !1
            }
        }, {
            key: "createElements", value: function () {
                var e = document.createElement("div");
                e.classList.add("tabulator-arrow"), this.element = document.createElement("div"), this.element.classList.add("tabulator-row"), this.element.classList.add("tabulator-group"), this.element.classList.add("tabulator-group-level-" + this.level), this.element.setAttribute("role", "rowgroup"), this.arrowElement = document.createElement("div"), this.arrowElement.classList.add("tabulator-group-toggle"), this.arrowElement.appendChild(e), !1 !== this.groupManager.table.options.movableRows && this.groupManager.table.modExists("moveRow") && this.groupManager.table.modules.moveRow.initializeGroupHeader(this)
            }
        }, {
            key: "createValueGroups", value: function () {
                var e = this, t = this.level + 1;
                this.groupManager.allowedValues && this.groupManager.allowedValues[t] && this.groupManager.allowedValues[t].forEach((function (i) {
                    e._createGroup(i, t)
                }))
            }
        }, {
            key: "addBindings", value: function () {
                var e = this;
                this.groupManager.table.options.groupToggleElement && ("arrow" == this.groupManager.table.options.groupToggleElement ? this.arrowElement : this.element).addEventListener("click", (function (t) {
                    t.stopPropagation(), t.stopImmediatePropagation(), e.toggleVisibility()
                }))
            }
        }, {
            key: "_createGroup", value: function (t, i) {
                var n = i + "_" + t,
                    o = new e(this.groupManager, this, i, t, this.groupManager.groupIDLookups[i].field, this.groupManager.headerGenerator[i] || this.groupManager.headerGenerator[0], !!this.old && this.old.groups[n]);
                this.groups[n] = o, this.groupList.push(o)
            }
        }, {
            key: "_addRowToGroup", value: function (e) {
                var t = this.level + 1;
                if (this.hasSubGroups) {
                    var i = this.groupManager.groupIDLookups[t].func(e.getData()), n = t + "_" + i;
                    this.groupManager.allowedValues && this.groupManager.allowedValues[t] ? this.groups[n] && this.groups[n].addRow(e) : (this.groups[n] || this._createGroup(i, t), this.groups[n].addRow(e))
                }
            }
        }, {
            key: "_addRow", value: function (e) {
                this.rows.push(e), e.modules.group = this
            }
        }, {
            key: "insertRow", value: function (e, t, i) {
                var n = this.conformRowData({});
                e.updateData(n);
                var o = this.rows.indexOf(t);
                o > -1 ? i ? this.rows.splice(o + 1, 0, e) : this.rows.splice(o, 0, e) : i ? this.rows.push(e) : this.rows.unshift(e), e.modules.group = this, this.generateGroupHeaderContents(), this.groupManager.table.modExists("columnCalcs") && "table" != this.groupManager.table.options.columnCalcs && this.groupManager.table.modules.columnCalcs.recalcGroup(this), this.groupManager.updateGroupRows(!0)
            }
        }, {
            key: "scrollHeader", value: function (e) {
                this.arrowElement && (this.arrowElement.style.marginLeft = e, this.groupList.forEach((function (t) {
                    t.scrollHeader(e)
                })))
            }
        }, {
            key: "getRowIndex", value: function (e) {
            }
        }, {
            key: "conformRowData", value: function (e) {
                return this.field ? e[this.field] = this.key : console.warn("Data Conforming Error - Cannot conform row data to match new group as groupBy is a function"), this.parent && (e = this.parent.conformRowData(e)), e
            }
        }, {
            key: "removeRow", value: function (e) {
                var t = this.rows.indexOf(e), i = e.getElement();
                t > -1 && this.rows.splice(t, 1), this.groupManager.table.options.groupValues || this.rows.length ? (i.parentNode && i.parentNode.removeChild(i), this.generateGroupHeaderContents(), this.groupManager.table.modExists("columnCalcs") && "table" != this.groupManager.table.options.columnCalcs && this.groupManager.table.modules.columnCalcs.recalcGroup(this)) : (this.parent ? this.parent.removeGroup(this) : this.groupManager.removeGroup(this), this.groupManager.updateGroupRows(!0))
            }
        }, {
            key: "removeGroup", value: function (e) {
                var t, i = e.level + "_" + e.key;
                this.groups[i] && (delete this.groups[i], (t = this.groupList.indexOf(e)) > -1 && this.groupList.splice(t, 1), this.groupList.length || (this.parent ? this.parent.removeGroup(this) : this.groupManager.removeGroup(this)))
            }
        }, {
            key: "getHeadersAndRows", value: function (e) {
                var t = [];
                return t.push(this), this._visSet(), this.visible ? this.groupList.length ? this.groupList.forEach((function (i) {
                    t = t.concat(i.getHeadersAndRows(e))
                })) : (!e && "table" != this.groupManager.table.options.columnCalcs && this.groupManager.table.modExists("columnCalcs") && this.groupManager.table.modules.columnCalcs.hasTopCalcs() && (this.calcs.top && (this.calcs.top.detachElement(), this.calcs.top.deleteCells()), this.calcs.top = this.groupManager.table.modules.columnCalcs.generateTopRow(this.rows), t.push(this.calcs.top)), t = t.concat(this.rows), !e && "table" != this.groupManager.table.options.columnCalcs && this.groupManager.table.modExists("columnCalcs") && this.groupManager.table.modules.columnCalcs.hasBottomCalcs() && (this.calcs.bottom && (this.calcs.bottom.detachElement(), this.calcs.bottom.deleteCells()), this.calcs.bottom = this.groupManager.table.modules.columnCalcs.generateBottomRow(this.rows), t.push(this.calcs.bottom))) : this.groupList.length || "table" == this.groupManager.table.options.columnCalcs || this.groupManager.table.modExists("columnCalcs") && (!e && this.groupManager.table.modules.columnCalcs.hasTopCalcs() && (this.calcs.top && (this.calcs.top.detachElement(), this.calcs.top.deleteCells()), this.groupManager.table.options.groupClosedShowCalcs && (this.calcs.top = this.groupManager.table.modules.columnCalcs.generateTopRow(this.rows), t.push(this.calcs.top))), !e && this.groupManager.table.modules.columnCalcs.hasBottomCalcs() && (this.calcs.bottom && (this.calcs.bottom.detachElement(), this.calcs.bottom.deleteCells()), this.groupManager.table.options.groupClosedShowCalcs && (this.calcs.bottom = this.groupManager.table.modules.columnCalcs.generateBottomRow(this.rows), t.push(this.calcs.bottom)))), t
            }
        }, {
            key: "getData", value: function (e, t) {
                var i = [];
                return this._visSet(), (!e || e && this.visible) && this.rows.forEach((function (e) {
                    i.push(e.getData(t || "data"))
                })), i
            }
        }, {
            key: "getRowCount", value: function () {
                var e = 0;
                return this.groupList.length ? this.groupList.forEach((function (t) {
                    e += t.getRowCount()
                })) : e = this.rows.length, e
            }
        }, {
            key: "toggleVisibility", value: function () {
                this.visible ? this.hide() : this.show()
            }
        }, {
            key: "hide", value: function () {
                this.visible = !1, "classic" != this.groupManager.table.rowManager.getRenderMode() || this.groupManager.table.options.pagination ? this.groupManager.updateGroupRows(!0) : (this.element.classList.remove("tabulator-group-visible"), this.groupList.length ? this.groupList.forEach((function (e) {
                    e.getHeadersAndRows().forEach((function (e) {
                        e.detachElement()
                    }))
                })) : this.rows.forEach((function (e) {
                    var t = e.getElement();
                    t.parentNode.removeChild(t)
                })), this.groupManager.table.rowManager.setDisplayRows(this.groupManager.updateGroupRows(), this.groupManager.getDisplayIndex()), this.groupManager.table.rowManager.checkClassicModeGroupHeaderWidth()), this.groupManager.table.externalEvents.dispatch("groupVisibilityChanged", this.getComponent(), !1)
            }
        }, {
            key: "show", value: function () {
                if (this.visible = !0, "classic" != this.groupManager.table.rowManager.getRenderMode() || this.groupManager.table.options.pagination) this.groupManager.updateGroupRows(!0); else {
                    this.element.classList.add("tabulator-group-visible");
                    var e = this.generateElement();
                    this.groupList.length ? this.groupList.forEach((function (t) {
                        t.getHeadersAndRows().forEach((function (t) {
                            var i = t.getElement();
                            e.parentNode.insertBefore(i, e.nextSibling), t.initialize(), e = i
                        }))
                    })) : this.rows.forEach((function (t) {
                        var i = t.getElement();
                        e.parentNode.insertBefore(i, e.nextSibling), t.initialize(), e = i
                    })), this.groupManager.table.rowManager.setDisplayRows(this.groupManager.updateGroupRows(), this.groupManager.getDisplayIndex()), this.groupManager.table.rowManager.checkClassicModeGroupHeaderWidth()
                }
                this.groupManager.table.externalEvents.dispatch("groupVisibilityChanged", this.getComponent(), !0)
            }
        }, {
            key: "_visSet", value: function () {
                var e = [];
                "function" == typeof this.visible && (this.rows.forEach((function (t) {
                    e.push(t.getData())
                })), this.visible = this.visible(this.key, this.getRowCount(), e, this.getComponent()))
            }
        }, {
            key: "getRowGroup", value: function (e) {
                var t = !1;
                return this.groupList.length ? this.groupList.forEach((function (i) {
                    var n = i.getRowGroup(e);
                    n && (t = n)
                })) : this.rows.find((function (t) {
                    return t === e
                })) && (t = this), t
            }
        }, {
            key: "getSubGroups", value: function (e) {
                var t = [];
                return this.groupList.forEach((function (i) {
                    t.push(e ? i.getComponent() : i)
                })), t
            }
        }, {
            key: "getRows", value: function (e) {
                var t = [];
                return this.rows.forEach((function (i) {
                    t.push(e ? i.getComponent() : i)
                })), t
            }
        }, {
            key: "generateGroupHeaderContents", value: function () {
                var e = [];
                for (this.rows.forEach((function (t) {
                    e.push(t.getData())
                })), this.elementContents = this.generator(this.key, this.getRowCount(), e, this.getComponent()); this.element.firstChild;) this.element.removeChild(this.element.firstChild);
                "string" == typeof this.elementContents ? this.element.innerHTML = this.elementContents : this.element.appendChild(this.elementContents), this.element.insertBefore(this.arrowElement, this.element.firstChild)
            }
        }, {
            key: "getPath", value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.unshift(this.key), this.parent && this.parent.getPath(e), e
            }
        }, {
            key: "getElement", value: function () {
                return this.elementContents ? this.element : this.generateElement()
            }
        }, {
            key: "generateElement", value: function () {
                this.addBindings = !1, this._visSet(), this.visible ? this.element.classList.add("tabulator-group-visible") : this.element.classList.remove("tabulator-group-visible");
                for (var e = 0; e < this.element.childNodes.length; ++e) this.element.childNodes[e].parentNode.removeChild(this.element.childNodes[e]);
                return this.generateGroupHeaderContents(), this.element
            }
        }, {
            key: "detachElement", value: function () {
                this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element)
            }
        }, {
            key: "normalizeHeight", value: function () {
                this.setHeight(this.element.clientHeight)
            }
        }, {
            key: "initialize", value: function (e) {
                this.initialized && !e || (this.normalizeHeight(), this.initialized = !0)
            }
        }, {
            key: "reinitialize", value: function () {
                this.initialized = !1, this.height = 0, k.elVisible(this.element) && this.initialize(!0)
            }
        }, {
            key: "setHeight", value: function (e) {
                this.height != e && (this.height = e, this.outerHeight = this.element.offsetHeight)
            }
        }, {
            key: "getHeight", value: function () {
                return this.outerHeight
            }
        }, {
            key: "getGroup", value: function () {
                return this
            }
        }, {
            key: "reinitializeHeight", value: function () {
            }
        }, {
            key: "calcHeight", value: function () {
            }
        }, {
            key: "setCellHeight", value: function () {
            }
        }, {
            key: "clearCellHeight", value: function () {
            }
        }, {
            key: "deinitializeHeight", value: function () {
            }
        }, {
            key: "getComponent", value: function () {
                return this.component || (this.component = new Re(this)), this.component
            }
        }]), e
    }(), Te = function (e) {
        a(n, e);
        var i = c(n);

        function n(e) {
            var o;
            return t(this, n), (o = i.call(this, e)).groupIDLookups = !1, o.startOpen = [function () {
                return !1
            }], o.headerGenerator = [function () {
                return ""
            }], o.groupList = [], o.allowedValues = !1, o.groups = {}, o.displayIndex = 0, o.displayHandler = o.getRows.bind(l(o)), o.registerTableOption("groupBy", !1), o.registerTableOption("groupStartOpen", !0), o.registerTableOption("groupValues", !1), o.registerTableOption("groupUpdateOnCellEdit", !1), o.registerTableOption("groupHeader", !1), o.registerTableOption("groupHeaderPrint", null), o.registerTableOption("groupHeaderClipboard", null), o.registerTableOption("groupHeaderHtmlOutput", null), o.registerTableOption("groupHeaderDownload", null), o.registerTableOption("groupToggleElement", "arrow"), o.registerTableOption("groupClosedShowCalcs", !1), o.registerTableFunction("setGroupBy", o.setGroupBy.bind(l(o))), o.registerTableFunction("setGroupValues", o.setGroupValues.bind(l(o))), o.registerTableFunction("setGroupStartOpen", o.setGroupStartOpen.bind(l(o))), o.registerTableFunction("setGroupHeader", o.setGroupHeader.bind(l(o))), o.registerTableFunction("getGroups", o.userGetGroups.bind(l(o))), o.registerTableFunction("getGroupedData", o.userGetGroupedData.bind(l(o))), o.registerComponentFunction("row", "getGroup", o.rowGetGroup.bind(l(o))), o
        }

        return o(n, [{
            key: "initialize", value: function () {
                this.table.options.groupBy && (this.table.options.groupUpdateOnCellEdit && (this.subscribe("cell-value-updated", this.cellUpdated.bind(this)), this.subscribe("row-data-changed", this.reassignRowToGroup.bind(this), 0)), this.subscribe("table-built", this.configureGroupSetup.bind(this)), this.subscribe("row-deleting", this.rowDeleting.bind(this)), this.subscribe("row-deleted", this.rowsUpdated.bind(this)), this.subscribe("scroll-horizontal", this.scrollHeaders.bind(this)), this.subscribe("rows-wipe", this.wipe.bind(this)), this.subscribe("rows-added", this.rowsUpdated.bind(this)), this.subscribe("row-moving", this.rowMoving.bind(this)), this.subscribe("row-adding-index", this.rowAddingIndex.bind(this)), this.subscribe("rows-sample", this.rowSample.bind(this)), this.subscribe("render-virtual-fill", this.virtualRenderFill.bind(this)), this.registerDisplayHandler(this.displayHandler, 20), this.initialized = !0)
            }
        }, {
            key: "configureGroupSetup", value: function () {
                var e = this;
                if (this.table.options.groupBy) {
                    var t = this.table.options.groupBy, i = this.table.options.groupStartOpen,
                        n = this.table.options.groupHeader;
                    if (this.allowedValues = this.table.options.groupValues, Array.isArray(t) && Array.isArray(n) && t.length > n.length && console.warn("Error creating group headers, groupHeader array is shorter than groupBy array"), this.headerGenerator = [function () {
                        return ""
                    }], this.startOpen = [function () {
                        return !1
                    }], this.langBind("groups|item", (function (t, i) {
                        e.headerGenerator[0] = function (e, n, o) {
                            return (void 0 === e ? "" : e) + "<span>(" + n + " " + (1 === n ? t : i.groups.items) + ")</span>"
                        }
                    })), this.groupIDLookups = [], Array.isArray(t) || t) this.table.modExists("columnCalcs") && "table" != this.table.options.columnCalcs && "both" != this.table.options.columnCalcs && this.table.modules.columnCalcs.removeCalcs(); else if (this.table.modExists("columnCalcs") && "group" != this.table.options.columnCalcs) this.table.columnManager.getRealColumns().forEach((function (t) {
                        t.definition.topCalc && e.table.modules.columnCalcs.initializeTopRow(), t.definition.bottomCalc && e.table.modules.columnCalcs.initializeBottomRow()
                    }));
                    Array.isArray(t) || (t = [t]), t.forEach((function (t, i) {
                        var n, o;
                        n = "function" == typeof t ? t : (o = e.table.columnManager.getColumnByField(t)) ? function (e) {
                            return o.getFieldValue(e)
                        } : function (e) {
                            return e[t]
                        }, e.groupIDLookups.push({
                            field: "function" != typeof t && t,
                            func: n,
                            values: !!e.allowedValues && e.allowedValues[i]
                        })
                    })), i && (Array.isArray(i) || (i = [i]), i.forEach((function (e) {
                    })), this.startOpen = i), n && (this.headerGenerator = Array.isArray(n) ? n : [n])
                }
            }
        }, {
            key: "rowSample", value: function (e, t) {
                var i = this.getGroups(!1)[0];
                return t.push(i.getRows(!1)[0]), t
            }
        }, {
            key: "virtualRenderFill", value: function () {
                var e = this.table.rowManager.tableElement, t = this.table.rowManager.getVisibleRows();
                t = t.filter((function (e) {
                    return "group" !== e.type
                })), e.style.minWidth = t.length ? "" : this.table.columnManager.getWidth() + "px"
            }
        }, {
            key: "rowAddingIndex", value: function (e, t, i) {
                this.assignRowToGroup(e);
                var n = e.modules.group.rows;
                return n.length > 1 && (!t || t && -1 == n.indexOf(t) ? i ? n[0] !== e && (t = n[0], this.table.rowManager.moveRowInArray(e.modules.group.rows, e, t, !i)) : n[n.length - 1] !== e && (t = n[n.length - 1], this.table.rowManager.moveRowInArray(e.modules.group.rows, e, t, !i)) : this.table.rowManager.moveRowInArray(e.modules.group.rows, e, t, !i)), t
            }
        }, {
            key: "trackChanges", value: function () {
                this.dispatch("group-changed")
            }
        }, {
            key: "setGroupBy", value: function (e) {
                this.table.options.groupBy = e, this.initialized ? this.configureGroupSetup() : this.initialize(), this.refreshData(), this.trackChanges()
            }
        }, {
            key: "setGroupValues", value: function (e) {
                this.table.options.groupValues = e, this.configureGroupSetup(), this.refreshData(), this.trackChanges()
            }
        }, {
            key: "setGroupStartOpen", value: function (e) {
                this.table.options.groupStartOpen = e, this.configureGroupSetup(), this.table.options.groupBy ? (this.refreshData(), this.trackChanges()) : console.warn("Grouping Update - cant refresh view, no groups have been set")
            }
        }, {
            key: "setGroupHeader", value: function (e) {
                this.table.options.groupHeader = e, this.configureGroupSetup(), this.table.options.groupBy ? (this.refreshData(), this.trackChanges()) : console.warn("Grouping Update - cant refresh view, no groups have been set")
            }
        }, {
            key: "userGetGroups", value: function (e) {
                return this.getGroups(!0)
            }
        }, {
            key: "userGetGroupedData", value: function () {
                return this.table.options.groupBy ? this.getGroupedData() : this.getData()
            }
        }, {
            key: "rowGetGroup", value: function (e) {
                return !!e.modules.group && e.modules.group.getComponent()
            }
        }, {
            key: "rowMoving", value: function (e, t, i) {
                !i && t instanceof xe && (t = this.table.rowManager.prevDisplayRow(e) || t);
                var n = t instanceof xe ? t : t.modules.group, o = e instanceof xe ? e : e.modules.group;
                n === o ? this.table.rowManager.moveRowInArray(n.rows, e, t, i) : (o && o.removeRow(e), n.insertRow(e, t, i))
            }
        }, {
            key: "rowDeleting", value: function (e) {
                e.modules.group && e.modules.group.removeRow(e)
            }
        }, {
            key: "rowsUpdated", value: function (e) {
                this.updateGroupRows(!0)
            }
        }, {
            key: "cellUpdated", value: function (e) {
                this.reassignRowToGroup(e.row)
            }
        }, {
            key: "setDisplayIndex", value: function (e) {
                this.displayIndex = e
            }
        }, {
            key: "getDisplayIndex", value: function () {
                return this.displayIndex
            }
        }, {
            key: "getRows", value: function (e) {
                return this.table.options.groupBy && this.groupIDLookups.length ? (this.dispatchExternal("dataGrouping"), this.generateGroups(e), this.subscribedExternal("dataGrouped") && this.dispatchExternal("dataGrouped", this.getGroups(!0)), this.updateGroupRows()) : e.slice(0)
            }
        }, {
            key: "getGroups", value: function (e) {
                var t = [];
                return this.groupList.forEach((function (i) {
                    t.push(e ? i.getComponent() : i)
                })), t
            }
        }, {
            key: "getChildGroups", value: function (e) {
                var t = this, i = [];
                return e || (e = this), e.groupList.forEach((function (e) {
                    e.groupList.length ? i = i.concat(t.getChildGroups(e)) : i.push(e)
                })), i
            }
        }, {
            key: "wipe", value: function () {
                this.groupList.forEach((function (e) {
                    e.wipe()
                }))
            }
        }, {
            key: "pullGroupListData", value: function (e) {
                var t = this, i = [];
                return e.forEach((function (e) {
                    var n = {level: 0, rowCount: 0, headerContent: ""}, o = [];
                    e.hasSubGroups ? (o = t.pullGroupListData(e.groupList), n.level = e.level, n.rowCount = o.length - e.groupList.length, n.headerContent = e.generator(e.key, n.rowCount, e.rows, e), i.push(n), i = i.concat(o)) : (n.level = e.level, n.headerContent = e.generator(e.key, e.rows.length, e.rows, e), n.rowCount = e.getRows().length, i.push(n), e.getRows().forEach((function (e) {
                        i.push(e.getData("data"))
                    })))
                })), i
            }
        }, {
            key: "getGroupedData", value: function () {
                return this.pullGroupListData(this.groupList)
            }
        }, {
            key: "getRowGroup", value: function (e) {
                var t = !1;
                return this.options("dataTree") && (e = this.table.modules.dataTree.getTreeParentRoot(e)), this.groupList.forEach((function (i) {
                    var n = i.getRowGroup(e);
                    n && (t = n)
                })), t
            }
        }, {
            key: "countGroups", value: function () {
                return this.groupList.length
            }
        }, {
            key: "generateGroups", value: function (e) {
                var t = this, i = this.groups;
                this.groups = {}, this.groupList = [], this.allowedValues && this.allowedValues[0] ? (this.allowedValues[0].forEach((function (e) {
                    t.createGroup(e, 0, i)
                })), e.forEach((function (e) {
                    t.assignRowToExistingGroup(e, i)
                }))) : e.forEach((function (e) {
                    t.assignRowToGroup(e, i)
                }))
            }
        }, {
            key: "createGroup", value: function (e, t, i) {
                var n, o = t + "_" + e;
                i = i || [], n = new xe(this, !1, t, e, this.groupIDLookups[0].field, this.headerGenerator[0], i[o]), this.groups[o] = n, this.groupList.push(n)
            }
        }, {
            key: "assignRowToExistingGroup", value: function (e, t) {
                var i = "0_" + this.groupIDLookups[0].func(e.getData());
                this.groups[i] && this.groups[i].addRow(e)
            }
        }, {
            key: "assignRowToGroup", value: function (e, t) {
                var i = this.groupIDLookups[0].func(e.getData()), n = !this.groups["0_" + i];
                return n && this.createGroup(i, 0, t), this.groups["0_" + i].addRow(e), !n
            }
        }, {
            key: "reassignRowToGroup", value: function (e) {
                if ("row" === e.type) {
                    var t = e.modules.group, i = t.getPath(), n = this.getExpectedPath(e);
                    i.length == n.length && i.every((function (e, t) {
                        return e === n[t]
                    })) || (t.removeRow(e), this.assignRowToGroup(e, this.groups), this.refreshData(!0))
                }
            }
        }, {
            key: "getExpectedPath", value: function (e) {
                var t = [], i = e.getData();
                return this.groupIDLookups.forEach((function (e) {
                    t.push(e.func(i))
                })), t
            }
        }, {
            key: "updateGroupRows", value: function (e) {
                var t = [];
                return this.groupList.forEach((function (e) {
                    t = t.concat(e.getHeadersAndRows())
                })), e && this.refreshData(!0, this.displayHandler), t
            }
        }, {
            key: "scrollHeaders", value: function (e) {
                "virtual" === this.table.options.renderHorizontal && (e -= this.table.columnManager.renderer.vDomPadLeft), e += "px", this.groupList.forEach((function (t) {
                    t.scrollHeader(e)
                }))
            }
        }, {
            key: "removeGroup", value: function (e) {
                var t, i = e.level + "_" + e.key;
                this.groups[i] && (delete this.groups[i], (t = this.groupList.indexOf(e)) > -1 && this.groupList.splice(t, 1))
            }
        }]), n
    }(V);
    Te.moduleName = "groupRows";
    var Me = function (e) {
        a(n, e);
        var i = c(n);

        function n(e) {
            var o;
            return t(this, n), (o = i.call(this, e)).history = [], o.index = -1, o.registerTableOption("history", !1), o
        }

        return o(n, [{
            key: "initialize", value: function () {
                this.table.options.history && (this.subscribe("cell-value-updated", this.cellUpdated.bind(this)), this.subscribe("cell-delete", this.clearComponentHistory.bind(this)), this.subscribe("row-delete", this.rowDeleted.bind(this)), this.subscribe("rows-wipe", this.clear.bind(this)), this.subscribe("row-added", this.rowAdded.bind(this)), this.subscribe("row-move", this.rowMoved.bind(this))), this.registerTableFunction("undo", this.undo.bind(this)), this.registerTableFunction("redo", this.redo.bind(this)), this.registerTableFunction("getHistoryUndoSize", this.getHistoryUndoSize.bind(this)), this.registerTableFunction("getHistoryRedoSize", this.getHistoryRedoSize.bind(this)), this.registerTableFunction("clearHistory", this.clear.bind(this))
            }
        }, {
            key: "rowMoved", value: function (e, t, i) {
                this.action("rowMove", e, {
                    posFrom: this.table.rowManager.getRowPosition(e),
                    posTo: this.table.rowManager.getRowPosition(t),
                    to: t,
                    after: i
                })
            }
        }, {
            key: "rowAdded", value: function (e, t, i, n) {
                this.action("rowAdd", e, {data: t, pos: i, index: n})
            }
        }, {
            key: "rowDeleted", value: function (e) {
                var t, i;
                this.table.options.groupBy ? (t = (i = e.getComponent().getGroup().rows).indexOf(e)) && (t = i[t - 1]) : (t = e.table.rowManager.getRowIndex(e)) && (t = e.table.rowManager.rows[t - 1]), this.action("rowDelete", e, {
                    data: e.getData(),
                    pos: !t,
                    index: t
                })
            }
        }, {
            key: "cellUpdated", value: function (e) {
                this.action("cellEdit", e, {oldValue: e.oldValue, newValue: e.value})
            }
        }, {
            key: "clear", value: function () {
                this.history = [], this.index = -1
            }
        }, {
            key: "action", value: function (e, t, i) {
                this.history = this.history.slice(0, this.index + 1), this.history.push({
                    type: e,
                    component: t,
                    data: i
                }), this.index++
            }
        }, {
            key: "getHistoryUndoSize", value: function () {
                return this.index + 1
            }
        }, {
            key: "getHistoryRedoSize", value: function () {
                return this.history.length - (this.index + 1)
            }
        }, {
            key: "clearComponentHistory", value: function (e) {
                var t = this.history.findIndex((function (t) {
                    return t.component === e
                }));
                t > -1 && (this.history.splice(t, 1), t <= this.index && this.index--, this.clearComponentHistory(e))
            }
        }, {
            key: "undo", value: function () {
                if (this.index > -1) {
                    var e = this.history[this.index];
                    return n.undoers[e.type].call(this, e), this.index--, this.dispatchExternal("historyUndo", e.type, e.component.getComponent(), e.data), !0
                }
                return console.warn("History Undo Error - No more history to undo"), !1
            }
        }, {
            key: "redo", value: function () {
                if (this.history.length - 1 > this.index) {
                    this.index++;
                    var e = this.history[this.index];
                    return n.redoers[e.type].call(this, e), this.dispatchExternal("historyRedo", e.type, e.component.getComponent(), e.data), !0
                }
                return console.warn("History Redo Error - No more history to redo"), !1
            }
        }, {
            key: "_rebindRow", value: function (e, t) {
                this.history.forEach((function (i) {
                    if (i.component instanceof D) i.component === e && (i.component = t); else if (i.component instanceof w && i.component.row === e) {
                        var n = i.component.column.getField();
                        n && (i.component = t.getCell(n))
                    }
                }))
            }
        }]), n
    }(V);
    Me.moduleName = "history", Me.undoers = {
        cellEdit: function (e) {
            e.component.setValueProcessData(e.data.oldValue), e.component.cellRendered()
        }, rowAdd: function (e) {
            e.component.deleteActual()
        }, rowDelete: function (e) {
            var t = this.table.rowManager.addRowActual(e.data.data, e.data.pos, e.data.index);
            this.table.options.groupBy && this.table.modExists("groupRows") && this.table.modules.groupRows.updateGroupRows(!0), this._rebindRow(e.component, t)
        }, rowMove: function (e) {
            this.table.rowManager.moveRowActual(e.component, this.table.rowManager.rows[e.data.posFrom], !e.data.after), this.table.rowManager.redraw()
        }
    }, Me.redoers = {
        cellEdit: function (e) {
            e.component.setValueProcessData(e.data.newValue), e.component.cellRendered()
        }, rowAdd: function (e) {
            var t = this.table.rowManager.addRowActual(e.data.data, e.data.pos, e.data.index);
            this.table.options.groupBy && this.table.modExists("groupRows") && this.table.modules.groupRows.updateGroupRows(!0), this._rebindRow(e.component, t)
        }, rowDelete: function (e) {
            e.component.deleteActual()
        }, rowMove: function (e) {
            this.table.rowManager.moveRowActual(e.component, this.table.rowManager.rows[e.data.posTo], e.data.after), this.table.rowManager.redraw()
        }
    };
    var Le = function (i) {
        a(r, i);
        var n = c(r);

        function r(e) {
            var i;
            return t(this, r), (i = n.call(this, e)).fieldIndex = [], i.hasIndex = !1, i
        }

        return o(r, [{
            key: "initialize", value: function () {
                this.tableElementCheck()
            }
        }, {
            key: "tableElementCheck", value: function () {
                this.table.originalElement && "TABLE" === this.table.originalElement.tagName && (this.table.originalElement.childNodes.length ? this.parseTable() : console.warn("Unable to parse data from empty table tag, Tabulator should be initialized on a div tag unless importing data from a table element."))
            }
        }, {
            key: "parseTable", value: function () {
                var e = this.table.originalElement, t = this.table.options,
                    i = (t.columns, e.getElementsByTagName("th")), n = e.getElementsByTagName("tbody")[0], o = [];
                this.hasIndex = !1, this.dispatchExternal("htmlImporting"), n = n ? n.getElementsByTagName("tr") : [], this._extractOptions(e, t), i.length ? this._extractHeaders(i, n) : this._generateBlankHeaders(i, n);
                for (var a = 0; a < n.length; a++) {
                    var r = n[a].getElementsByTagName("td"), s = {};
                    this.hasIndex || (s[t.index] = a);
                    for (var l = 0; l < r.length; l++) {
                        var u = r[l];
                        void 0 !== this.fieldIndex[l] && (s[this.fieldIndex[l]] = u.innerHTML)
                    }
                    o.push(s)
                }
                t.data = o, this.dispatchExternal("htmlImported")
            }
        }, {
            key: "_extractOptions", value: function (t, i, n) {
                var o = t.attributes, a = n ? Object.keys(n) : Object.keys(i), r = {};
                for (var s in a.forEach((function (e) {
                    r[e.toLowerCase()] = e
                })), o) {
                    var l, u = o[s];
                    u && "object" == e(u) && u.name && 0 === u.name.indexOf("tabulator-") && (l = u.name.replace("tabulator-", ""), void 0 !== r[l] && (i[r[l]] = this._attribValue(u.value)))
                }
            }
        }, {
            key: "_attribValue", value: function (e) {
                return "true" === e || "false" !== e && e
            }
        }, {
            key: "_findCol", value: function (e) {
                return this.table.options.columns.find((function (t) {
                    return t.title === e
                })) || !1
            }
        }, {
            key: "_extractHeaders", value: function (e, t) {
                for (var i = 0; i < e.length; i++) {
                    var n, o = e[i], a = !1, r = this._findCol(o.textContent);
                    r ? a = !0 : r = {title: o.textContent.trim()}, r.field || (r.field = o.textContent.trim().toLowerCase().replace(" ", "_")), (n = o.getAttribute("width")) && !r.width && (r.width = n), this._extractOptions(o, r, this.table.columnManager.optionsList.registeredDefaults), this.fieldIndex[i] = r.field, r.field == this.table.options.index && (this.hasIndex = !0), a || this.table.options.columns.push(r)
                }
            }
        }, {
            key: "_generateBlankHeaders", value: function (e, t) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i], o = {title: "", field: "col" + i};
                    this.fieldIndex[i] = o.field;
                    var a = n.getAttribute("width");
                    a && (o.width = a), this.table.options.columns.push(o)
                }
            }
        }]), r
    }(V);
    Le.moduleName = "htmlTableImport";
    var De = {
        csv: function (e) {
            for (var t = [], i = 0, n = 0, o = !1, a = 0; a < e.length; a++) {
                var r = e[a], s = e[a + 1];
                t[i] || (t[i] = []), t[i][n] || (t[i][n] = ""), '"' == r && o && '"' == s ? (t[i][n] += r, a++) : '"' != r ? "," != r || o ? "\r" != r || "\n" != s || o ? "\r" != r && "\n" != r || o ? t[i][n] += r : (n = 0, i++) : (n = 0, i++, a++) : n++ : o = !o
            }
            return t
        }, json: function (e) {
            try {
                return JSON.parse(e)
            } catch (e) {
                return console.warn("JSON Import Error - File contents is invalid JSON", e), Promise.reject()
            }
        }
    }, Se = function (e) {
        a(n, e);
        var i = c(n);

        function n(e) {
            var o;
            return t(this, n), (o = i.call(this, e)).registerTableOption("importFormat"), o.registerTableOption("importReader", "text"), o
        }

        return o(n, [{
            key: "initialize", value: function () {
                this.registerTableFunction("import", this.importFromFile.bind(this)), this.table.options.importFormat && (this.subscribe("data-loading", this.loadDataCheck.bind(this), 10), this.subscribe("data-load", this.loadData.bind(this), 10))
            }
        }, {
            key: "loadDataCheck", value: function (e) {
                return "string" == typeof e
            }
        }, {
            key: "loadData", value: function (e, t, i, n, o) {
                return this.importData(this.lookupImporter(), e).then(this.structureData.bind(this)).catch((function (e) {
                    return console.error("Import Error:", e || "Unable to import data"), Promise.reject(e)
                }))
            }
        }, {
            key: "lookupImporter", value: function (e) {
                var t;
                return e || (e = this.table.options.importFormat), (t = "string" == typeof e ? n.importers[e] : e) || console.error("Import Error - Importer not found:", e), t
            }
        }, {
            key: "importFromFile", value: function (e, t) {
                var i = this.lookupImporter(e);
                if (i) return this.pickFile(t).then(this.importData.bind(this, i)).then(this.structureData.bind(this)).then(this.setData.bind(this)).catch((function (e) {
                    return console.error("Import Error:", e || "Unable to import file"), Promise.reject(e)
                }))
            }
        }, {
            key: "pickFile", value: function (e) {
                var t = this;
                return new Promise((function (i, n) {
                    var o = document.createElement("input");
                    o.type = "file", o.accept = e, o.addEventListener("change", (function (e) {
                        var a = o.files[0], r = new FileReader;
                        switch (t.table.options.importReader) {
                            case"buffer":
                                r.readAsArrayBuffer(a);
                                break;
                            case"binary":
                                r.readAsBinaryString(a);
                                break;
                            case"url":
                                r.readAsDataURL(a);
                                break;
                            case"text":
                            default:
                                r.readAsText(a)
                        }
                        r.onload = function (e) {
                            i(r.result)
                        }, r.onerror = function (e) {
                            console.warn("File Load Error - Unable to read file"), n()
                        }
                    })), o.click()
                }))
            }
        }, {
            key: "importData", value: function (e, t) {
                var i = e.call(this.table, t);
                return i instanceof Promise ? i : i ? Promise.resolve(i) : Promise.reject()
            }
        }, {
            key: "structureData", value: function (e) {
                return Array.isArray(e) && e.length && Array.isArray(e[0]) ? this.table.options.autoColumns ? this.structureArrayToObject(e) : this.structureArrayToColumns(e) : e
            }
        }, {
            key: "structureArrayToObject", value: function (e) {
                var t = e.shift();
                return e.map((function (e) {
                    var i = {};
                    return t.forEach((function (t, n) {
                        i[t] = e[n]
                    })), i
                }))
            }
        }, {
            key: "structureArrayToColumns", value: function (e) {
                var t = [], i = this.table.getColumns();
                return i[0] && e[0][0] && i[0].getDefinition().title === e[0][0] && e.shift(), e.forEach((function (e) {
                    var n = {};
                    e.forEach((function (e, t) {
                        var o = i[t];
                        o && (n[o.getField()] = e)
                    })), t.push(n)
                })), t
            }
        }, {
            key: "setData", value: function (e) {
                return this.table.setData(e)
            }
        }]), n
    }(V);
    Se.moduleName = "import", Se.importers = De;
    var Pe = function (e) {
        a(n, e);
        var i = c(n);

        function n(e) {
            var o;
            return t(this, n), (o = i.call(this, e)).eventMap = {
                rowClick: "row-click",
                rowDblClick: "row-dblclick",
                rowContext: "row-contextmenu",
                rowMouseEnter: "row-mouseenter",
                rowMouseLeave: "row-mouseleave",
                rowMouseOver: "row-mouseover",
                rowMouseOut: "row-mouseout",
                rowMouseMove: "row-mousemove",
                rowTap: "row",
                rowDblTap: "row",
                rowTapHold: "row",
                cellClick: "cell-click",
                cellDblClick: "cell-dblclick",
                cellContext: "cell-contextmenu",
                cellMouseEnter: "cell-mouseenter",
                cellMouseLeave: "cell-mouseleave",
                cellMouseOver: "cell-mouseover",
                cellMouseOut: "cell-mouseout",
                cellMouseMove: "cell-mousemove",
                cellTap: "cell",
                cellDblTap: "cell",
                cellTapHold: "cell",
                headerClick: "column-click",
                headerDblClick: "column-dblclick",
                headerContext: "column-contextmenu",
                headerMouseEnter: "column-mouseenter",
                headerMouseLeave: "column-mouseleave",
                headerMouseOver: "column-mouseover",
                headerMouseOut: "column-mouseout",
                headerMouseMove: "column-mousemove",
                headerTap: "column",
                headerDblTap: "column",
                headerTapHold: "column",
                groupClick: "group-click",
                groupDblClick: "group-dblclick",
                groupContext: "group-contextmenu",
                groupMouseEnter: "group-mouseenter",
                groupMouseLeave: "group-mouseleave",
                groupMouseOver: "group-mouseover",
                groupMouseOut: "group-mouseout",
                groupMouseMove: "group-mousemove",
                groupTap: "group",
                groupDblTap: "group",
                groupTapHold: "group"
            }, o.subscribers = {}, o.touchSubscribers = {}, o.columnSubscribers = {}, o.touchWatchers = {
                row: {
                    tap: null,
                    tapDbl: null,
                    tapHold: null
                },
                cell: {tap: null, tapDbl: null, tapHold: null},
                column: {tap: null, tapDbl: null, tapHold: null},
                group: {tap: null, tapDbl: null, tapHold: null}
            }, o.registerColumnOption("headerClick"), o.registerColumnOption("headerDblClick"), o.registerColumnOption("headerContext"), o.registerColumnOption("headerMouseEnter"), o.registerColumnOption("headerMouseLeave"), o.registerColumnOption("headerMouseOver"), o.registerColumnOption("headerMouseOut"), o.registerColumnOption("headerMouseMove"), o.registerColumnOption("headerTap"), o.registerColumnOption("headerDblTap"), o.registerColumnOption("headerTapHold"), o.registerColumnOption("cellClick"), o.registerColumnOption("cellDblClick"), o.registerColumnOption("cellContext"), o.registerColumnOption("cellMouseEnter"), o.registerColumnOption("cellMouseLeave"), o.registerColumnOption("cellMouseOver"), o.registerColumnOption("cellMouseOut"), o.registerColumnOption("cellMouseMove"), o.registerColumnOption("cellTap"), o.registerColumnOption("cellDblTap"), o.registerColumnOption("cellTapHold"), o
        }

        return o(n, [{
            key: "initialize", value: function () {
                this.initializeExternalEvents(), this.subscribe("column-init", this.initializeColumn.bind(this)), this.subscribe("cell-dblclick", this.cellContentsSelectionFixer.bind(this))
            }
        }, {
            key: "cellContentsSelectionFixer", value: function (e, t) {
                if (!this.table.modExists("edit") || this.table.modules.edit.currentCell !== this) {
                    e.preventDefault();
                    try {
                        if (document.selection) (i = document.body.createTextRange()).moveToElementText(this.element), i.select(); else if (window.getSelection) {
                            var i;
                            (i = document.createRange()).selectNode(this.element), window.getSelection().removeAllRanges(), window.getSelection().addRange(i)
                        }
                    } catch (e) {
                    }
                }
            }
        }, {
            key: "initializeExternalEvents", value: function () {
                for (var e in this.eventMap) this.subscriptionChangeExternal(e, this.subscriptionChanged.bind(this, e))
            }
        }, {
            key: "subscriptionChanged", value: function (e, t) {
                t ? this.subscribers[e] || (this.eventMap[e].includes("-") ? (this.subscribers[e] = this.handle.bind(this, e), this.subscribe(this.eventMap[e], this.subscribers[e])) : this.subscribeTouchEvents(e)) : this.eventMap[e].includes("-") ? !this.subscribers[e] || this.columnSubscribers[e] || this.subscribedExternal(e) || (this.unsubscribe(this.eventMap[e], this.subscribers[e]), delete this.subscribers[e]) : this.unsubscribeTouchEvents(e)
            }
        }, {
            key: "subscribeTouchEvents", value: function (e) {
                var t = this.eventMap[e];
                this.touchSubscribers[t + "-touchstart"] || (this.touchSubscribers[t + "-touchstart"] = this.handleTouch.bind(this, t, "start"), this.touchSubscribers[t + "-touchend"] = this.handleTouch.bind(this, t, "end"), this.subscribe(t + "-touchstart", this.touchSubscribers[t + "-touchstart"]), this.subscribe(t + "-touchend", this.touchSubscribers[t + "-touchend"])), this.subscribers[e] = !0
            }
        }, {
            key: "unsubscribeTouchEvents", value: function (e) {
                var t = !0, i = this.eventMap[e];
                if (this.subscribers[e] && !this.subscribedExternal(e)) {
                    for (var n in delete this.subscribers[e], this.eventMap) this.eventMap[n] === i && this.subscribers[n] && (t = !1);
                    t && (this.unsubscribe(i + "-touchstart", this.touchSubscribers[i + "-touchstart"]), this.unsubscribe(i + "-touchend", this.touchSubscribers[i + "-touchend"]), delete this.touchSubscribers[i + "-touchstart"], delete this.touchSubscribers[i + "-touchend"])
                }
            }
        }, {
            key: "initializeColumn", value: function (e) {
                var t = e.definition;
                for (var i in this.eventMap) t[i] && (this.subscriptionChanged(i, !0), this.columnSubscribers[i] || (this.columnSubscribers[i] = []), this.columnSubscribers[i].push(e))
            }
        }, {
            key: "handle", value: function (e, t, i) {
                this.dispatchEvent(e, t, i)
            }
        }, {
            key: "handleTouch", value: function (e, t, i, n) {
                var o = this, a = this.touchWatchers[e];
                switch ("column" === e && (e = "header"), t) {
                    case"start":
                        a.tap = !0, clearTimeout(a.tapHold), a.tapHold = setTimeout((function () {
                            clearTimeout(a.tapHold), a.tapHold = null, a.tap = null, clearTimeout(a.tapDbl), a.tapDbl = null, o.dispatchEvent(e + "TapHold", i, n)
                        }), 1e3);
                        break;
                    case"end":
                        a.tap && (a.tap = null, this.dispatchEvent(e + "Tap", i, n)), a.tapDbl ? (clearTimeout(a.tapDbl), a.tapDbl = null, this.dispatchEvent(e + "DblTap", i, n)) : a.tapDbl = setTimeout((function () {
                            clearTimeout(a.tapDbl), a.tapDbl = null
                        }), 300), clearTimeout(a.tapHold), a.tapHold = null
                }
            }
        }, {
            key: "dispatchEvent", value: function (e, t, i) {
                var n, o = i.getComponent();
                this.columnSubscribers[e] && (i instanceof w ? n = i.column.definition[e] : i instanceof C && (n = i.definition[e]), n && n(t, o)), this.dispatchExternal(e, t, o)
            }
        }]), n
    }(V);
    Pe.moduleName = "interaction";
    var ze = function (i) {
        a(r, i);
        var n = c(r);

        function r(e) {
            var i;
            return t(this, r), (i = n.call(this, e)).watchKeys = null, i.pressedKeys = null, i.keyupBinding = !1, i.keydownBinding = !1, i.registerTableOption("keybindings", {}), i.registerTableOption("tabEndNewRow", !1), i
        }

        return o(r, [{
            key: "initialize", value: function () {
                var e = this.table.options.keybindings, t = {};
                this.watchKeys = {}, this.pressedKeys = [], !1 !== e && (Object.assign(t, r.bindings), Object.assign(t, e), this.mapBindings(t), this.bindEvents()), this.subscribe("table-destroy", this.clearBindings.bind(this))
            }
        }, {
            key: "mapBindings", value: function (t) {
                var i = this, n = function (n) {
                    r.actions[n] ? t[n] && ("object" !== e(t[n]) && (t[n] = [t[n]]), t[n].forEach((function (e) {
                        (Array.isArray(e) ? e : [e]).forEach((function (e) {
                            i.mapBinding(n, e)
                        }))
                    }))) : console.warn("Key Binding Error - no such action:", n)
                };
                for (var o in t) n(o)
            }
        }, {
            key: "mapBinding", value: function (e, t) {
                var i = this, n = {action: r.actions[e], keys: [], ctrl: !1, shift: !1, meta: !1};
                t.toString().toLowerCase().split(" ").join("").split("+").forEach((function (e) {
                    switch (e) {
                        case"ctrl":
                            n.ctrl = !0;
                            break;
                        case"shift":
                            n.shift = !0;
                            break;
                        case"meta":
                            n.meta = !0;
                            break;
                        default:
                            e = isNaN(e) ? e.toUpperCase().charCodeAt(0) : parseInt(e), n.keys.push(e), i.watchKeys[e] || (i.watchKeys[e] = []), i.watchKeys[e].push(n)
                    }
                }))
            }
        }, {
            key: "bindEvents", value: function () {
                var e = this;
                this.keyupBinding = function (t) {
                    var i = t.keyCode, n = e.watchKeys[i];
                    n && (e.pressedKeys.push(i), n.forEach((function (i) {
                        e.checkBinding(t, i)
                    })))
                }, this.keydownBinding = function (t) {
                    var i = t.keyCode;
                    if (e.watchKeys[i]) {
                        var n = e.pressedKeys.indexOf(i);
                        n > -1 && e.pressedKeys.splice(n, 1)
                    }
                }, this.table.element.addEventListener("keydown", this.keyupBinding), this.table.element.addEventListener("keyup", this.keydownBinding)
            }
        }, {
            key: "clearBindings", value: function () {
                this.keyupBinding && this.table.element.removeEventListener("keydown", this.keyupBinding), this.keydownBinding && this.table.element.removeEventListener("keyup", this.keydownBinding)
            }
        }, {
            key: "checkBinding", value: function (e, t) {
                var i = this, n = !0;
                return e.ctrlKey == t.ctrl && e.shiftKey == t.shift && e.metaKey == t.meta && (t.keys.forEach((function (e) {
                    -1 == i.pressedKeys.indexOf(e) && (n = !1)
                })), n && t.action.call(this, e), !0)
            }
        }]), r
    }(V);
    ze.moduleName = "keybindings", ze.bindings = {
        navPrev: "shift + 9",
        navNext: 9,
        navUp: 38,
        navDown: 40,
        scrollPageUp: 33,
        scrollPageDown: 34,
        scrollToStart: 36,
        scrollToEnd: 35,
        undo: ["ctrl + 90", "meta + 90"],
        redo: ["ctrl + 89", "meta + 89"],
        copyToClipboard: ["ctrl + 67", "meta + 89"]
    }, ze.actions = {
        keyBlock: function (e) {
            e.stopPropagation(), e.preventDefault()
        }, scrollPageUp: function (e) {
            var t = this.table.rowManager, i = t.scrollTop - t.element.clientHeight;
            t.element.scrollHeight;
            e.preventDefault(), t.displayRowsCount && (i >= 0 ? t.element.scrollTop = i : t.scrollToRow(t.getDisplayRows()[0])), this.table.element.focus()
        }, scrollPageDown: function (e) {
            var t = this.table.rowManager, i = t.scrollTop + t.element.clientHeight, n = t.element.scrollHeight;
            e.preventDefault(), t.displayRowsCount && (i <= n ? t.element.scrollTop = i : t.scrollToRow(t.getDisplayRows()[t.displayRowsCount - 1])), this.table.element.focus()
        }, scrollToStart: function (e) {
            var t = this.table.rowManager;
            e.preventDefault(), t.displayRowsCount && t.scrollToRow(t.getDisplayRows()[0]), this.table.element.focus()
        }, scrollToEnd: function (e) {
            var t = this.table.rowManager;
            e.preventDefault(), t.displayRowsCount && t.scrollToRow(t.getDisplayRows()[t.displayRowsCount - 1]), this.table.element.focus()
        }, navPrev: function (e) {
            this.dispatch("keybinding-nav-prev", e)
        }, navNext: function (e) {
            this.dispatch("keybinding-nav-next", e)
        }, navLeft: function (e) {
            this.dispatch("keybinding-nav-left", e)
        }, navRight: function (e) {
            this.dispatch("keybinding-nav-right", e)
        }, navUp: function (e) {
            this.dispatch("keybinding-nav-up", e)
        }, navDown: function (e) {
            this.dispatch("keybinding-nav-down", e)
        }, undo: function (e) {
            this.table.options.history && this.table.modExists("history") && this.table.modExists("edit") && (this.table.modules.edit.currentCell || (e.preventDefault(), this.table.modules.history.undo()))
        }, redo: function (e) {
            this.table.options.history && this.table.modExists("history") && this.table.modExists("edit") && (this.table.modules.edit.currentCell || (e.preventDefault(), this.table.modules.history.redo()))
        }, copyToClipboard: function (e) {
            this.table.modules.edit.currentCell || this.table.modExists("clipboard", !0) && this.table.modules.clipboard.copy(!1, !0)
        }
    };
    var Fe = function (e) {
        a(n, e);
        var i = c(n);

        function n(e) {
            var o;
            return t(this, n), (o = i.call(this, e)).menuContainer = null, o.nestedMenuBlock = !1, o.currentComponent = null, o.rootPopup = null, o.columnSubscribers = {}, o.registerTableOption("menuContainer", void 0), o.registerTableOption("rowContextMenu", !1), o.registerTableOption("rowClickMenu", !1), o.registerTableOption("groupContextMenu", !1), o.registerTableOption("groupClickMenu", !1), o.registerColumnOption("headerContextMenu"), o.registerColumnOption("headerClickMenu"), o.registerColumnOption("headerMenu"), o.registerColumnOption("headerMenuIcon"), o.registerColumnOption("contextMenu"), o.registerColumnOption("clickMenu"), o
        }

        return o(n, [{
            key: "initialize", value: function () {
                this.deprecationCheck(), this.initializeRowWatchers(), this.initializeGroupWatchers(), this.subscribe("column-init", this.initializeColumn.bind(this))
            }
        }, {
            key: "deprecationCheck", value: function () {
                void 0 !== this.table.options.menuContainer && (console.warn("Use of the menuContainer option is now deprecated. Please use the popupContainer option instead"), this.table.options.popupContainer = this.table.options.menuContainer)
            }
        }, {
            key: "initializeRowWatchers", value: function () {
                this.table.options.rowContextMenu && (this.subscribe("row-contextmenu", this.loadMenuEvent.bind(this, this.table.options.rowContextMenu)), this.table.on("rowTapHold", this.loadMenuEvent.bind(this, this.table.options.rowContextMenu))), this.table.options.rowClickMenu && this.subscribe("row-click", this.loadMenuEvent.bind(this, this.table.options.rowClickMenu))
            }
        }, {
            key: "initializeGroupWatchers", value: function () {
                this.table.options.groupContextMenu && (this.subscribe("group-contextmenu", this.loadMenuEvent.bind(this, this.table.options.groupContextMenu)), this.table.on("groupTapHold", this.loadMenuEvent.bind(this, this.table.options.groupContextMenu))), this.table.options.groupClickMenu && this.subscribe("group-click", this.loadMenuEvent.bind(this, this.table.options.groupClickMenu))
            }
        }, {
            key: "initializeColumn", value: function (e) {
                var t = e.definition;
                t.headerContextMenu && !this.columnSubscribers.headerContextMenu && (this.columnSubscribers.headerContextMenu = this.loadMenuTableColumnEvent.bind(this, "headerContextMenu"), this.subscribe("column-contextmenu", this.columnSubscribers.headerContextMenu), this.table.on("headerTapHold", this.loadMenuTableColumnEvent.bind(this, "headerContextMenu"))), t.headerClickMenu && !this.columnSubscribers.headerClickMenu && (this.columnSubscribers.headerClickMenu = this.loadMenuTableColumnEvent.bind(this, "headerClickMenu"), this.subscribe("column-click", this.columnSubscribers.headerClickMenu)), t.headerMenu && this.initializeColumnHeaderMenu(e), t.contextMenu && !this.columnSubscribers.contextMenu && (this.columnSubscribers.contextMenu = this.loadMenuTableCellEvent.bind(this, "contextMenu"), this.subscribe("cell-contextmenu", this.columnSubscribers.contextMenu), this.table.on("cellTapHold", this.loadMenuTableCellEvent.bind(this, "contextMenu"))), t.clickMenu && !this.columnSubscribers.clickMenu && (this.columnSubscribers.clickMenu = this.loadMenuTableCellEvent.bind(this, "clickMenu"), this.subscribe("cell-click", this.columnSubscribers.clickMenu))
            }
        }, {
            key: "initializeColumnHeaderMenu", value: function (e) {
                var t, i = this, n = e.definition.headerMenuIcon;
                (t = document.createElement("span")).classList.add("tabulator-header-popup-button"), n ? ("function" == typeof n && (n = n(e.getComponent())), n instanceof HTMLElement ? t.appendChild(n) : t.innerHTML = n) : t.innerHTML = "&vellip;", t.addEventListener("click", (function (t) {
                    t.stopPropagation(), t.preventDefault(), i.loadMenuEvent(e.definition.headerMenu, t, e)
                })), e.titleElement.insertBefore(t, e.titleElement.firstChild)
            }
        }, {
            key: "loadMenuTableCellEvent", value: function (e, t, i) {
                i._cell && (i = i._cell), i.column.definition[e] && this.loadMenuEvent(i.column.definition[e], t, i)
            }
        }, {
            key: "loadMenuTableColumnEvent", value: function (e, t, i) {
                i._column && (i = i._column), i.definition[e] && this.loadMenuEvent(i.definition[e], t, i)
            }
        }, {
            key: "loadMenuEvent", value: function (e, t, i) {
                i._group ? i = i._group : i._row && (i = i._row), e = "function" == typeof e ? e.call(this.table, t, i.getComponent()) : e, this.loadMenu(t, i, e)
            }
        }, {
            key: "loadMenu", value: function (e, t, i, n, o) {
                var a, r = this, s = !(e instanceof MouseEvent), l = document.createElement("div");
                if (l.classList.add("tabulator-menu"), s || e.preventDefault(), i && i.length) {
                    if (n) a = o.child(l); else {
                        if (this.nestedMenuBlock) {
                            if (this.rootPopup) return
                        } else this.nestedMenuBlock = setTimeout((function () {
                            r.nestedMenuBlock = !1
                        }), 100);
                        this.rootPopup && this.rootPopup.hide(), this.rootPopup = a = this.popup(l)
                    }
                    i.forEach((function (e) {
                        var i = document.createElement("div"), n = e.label, o = e.disabled;
                        e.separator ? i.classList.add("tabulator-menu-separator") : (i.classList.add("tabulator-menu-item"), "function" == typeof n && (n = n.call(r.table, t.getComponent())), n instanceof Node ? i.appendChild(n) : i.innerHTML = n, "function" == typeof o && (o = o.call(r.table, t.getComponent())), o ? (i.classList.add("tabulator-menu-item-disabled"), i.addEventListener("click", (function (e) {
                            e.stopPropagation()
                        }))) : e.menu && e.menu.length ? i.addEventListener("click", (function (n) {
                            n.stopPropagation(), r.loadMenu(n, t, e.menu, i, a)
                        })) : e.action && i.addEventListener("click", (function (i) {
                            e.action(i, t.getComponent())
                        })), e.menu && e.menu.length && i.classList.add("tabulator-menu-item-submenu")), l.appendChild(i)
                    })), l.addEventListener("click", (function (e) {
                        r.rootPopup.hide()
                    })), a.show(n || e), a === this.rootPopup && (this.rootPopup.hideOnBlur((function () {
                        r.rootPopup = null, r.currentComponent && (r.dispatchExternal("menuClosed", r.currentComponent.getComponent()), r.currentComponent = null)
                    })), this.currentComponent = t, this.dispatchExternal("menuOpened", t.getComponent()))
                }
            }
        }]), n
    }(V);
    Fe.moduleName = "menu";
    var He = function (e) {
        a(n, e);
        var i = c(n);

        function n(e) {
            var o;
            return t(this, n), (o = i.call(this, e)).placeholderElement = o.createPlaceholderElement(), o.hoverElement = !1, o.checkTimeout = !1, o.checkPeriod = 250, o.moving = !1, o.toCol = !1, o.toColAfter = !1, o.startX = 0, o.autoScrollMargin = 40, o.autoScrollStep = 5, o.autoScrollTimeout = !1, o.touchMove = !1, o.moveHover = o.moveHover.bind(l(o)), o.endMove = o.endMove.bind(l(o)), o.registerTableOption("movableColumns", !1), o
        }

        return o(n, [{
            key: "createPlaceholderElement", value: function () {
                var e = document.createElement("div");
                return e.classList.add("tabulator-col"), e.classList.add("tabulator-col-placeholder"), e
            }
        }, {
            key: "initialize", value: function () {
                this.table.options.movableColumns && this.subscribe("column-init", this.initializeColumn.bind(this))
            }
        }, {
            key: "initializeColumn", value: function (e) {
                var t, i = this, n = {};
                e.modules.frozen || e.isGroup || (t = e.getElement(), n.mousemove = function (n) {
                    e.parent === i.moving.parent && ((i.touchMove ? n.touches[0].pageX : n.pageX) - k.elOffset(t).left + i.table.columnManager.element.scrollLeft > e.getWidth() / 2 ? i.toCol === e && i.toColAfter || (t.parentNode.insertBefore(i.placeholderElement, t.nextSibling), i.moveColumn(e, !0)) : (i.toCol !== e || i.toColAfter) && (t.parentNode.insertBefore(i.placeholderElement, t), i.moveColumn(e, !1)))
                }.bind(i), t.addEventListener("mousedown", (function (t) {
                    i.touchMove = !1, 1 === t.which && (i.checkTimeout = setTimeout((function () {
                        i.startMove(t, e)
                    }), i.checkPeriod))
                })), t.addEventListener("mouseup", (function (e) {
                    1 === e.which && i.checkTimeout && clearTimeout(i.checkTimeout)
                })), i.bindTouchEvents(e)), e.modules.moveColumn = n
            }
        }, {
            key: "bindTouchEvents", value: function (e) {
                var t, i, n, o, a, r, s = this, l = e.getElement(), u = !1;
                l.addEventListener("touchstart", (function (l) {
                    s.checkTimeout = setTimeout((function () {
                        s.touchMove = !0, t = e.nextColumn(), n = t ? t.getWidth() / 2 : 0, i = e.prevColumn(), o = i ? i.getWidth() / 2 : 0, a = 0, r = 0, u = !1, s.startMove(l, e)
                    }), s.checkPeriod)
                }), {passive: !0}), l.addEventListener("touchmove", (function (l) {
                    var c, h;
                    s.moving && (s.moveHover(l), u || (u = l.touches[0].pageX), (c = l.touches[0].pageX - u) > 0 ? t && c - a > n && (h = t) !== e && (u = l.touches[0].pageX, h.getElement().parentNode.insertBefore(s.placeholderElement, h.getElement().nextSibling), s.moveColumn(h, !0)) : i && -c - r > o && (h = i) !== e && (u = l.touches[0].pageX, h.getElement().parentNode.insertBefore(s.placeholderElement, h.getElement()), s.moveColumn(h, !1)), h && (t = h.nextColumn(), a = n, n = t ? t.getWidth() / 2 : 0, i = h.prevColumn(), r = o, o = i ? i.getWidth() / 2 : 0))
                }), {passive: !0}), l.addEventListener("touchend", (function (e) {
                    s.checkTimeout && clearTimeout(s.checkTimeout), s.moving && s.endMove(e)
                }))
            }
        }, {
            key: "startMove", value: function (e, t) {
                var i = t.getElement(), n = this.table.columnManager.getElement(),
                    o = this.table.columnManager.getHeadersElement();
                this.moving = t, this.startX = (this.touchMove ? e.touches[0].pageX : e.pageX) - k.elOffset(i).left, this.table.element.classList.add("tabulator-block-select"), this.placeholderElement.style.width = t.getWidth() + "px", this.placeholderElement.style.height = t.getHeight() + "px", i.parentNode.insertBefore(this.placeholderElement, i), i.parentNode.removeChild(i), this.hoverElement = i.cloneNode(!0), this.hoverElement.classList.add("tabulator-moving"), this.table.columnManager.getElement().appendChild(this.hoverElement), this.hoverElement.style.left = "0", this.hoverElement.style.bottom = n.clientHeight - o.offsetHeight + "px", this.touchMove || (this._bindMouseMove(), document.body.addEventListener("mousemove", this.moveHover), document.body.addEventListener("mouseup", this.endMove)), this.moveHover(e)
            }
        }, {
            key: "_bindMouseMove", value: function () {
                this.table.columnManager.columnsByIndex.forEach((function (e) {
                    e.modules.moveColumn.mousemove && e.getElement().addEventListener("mousemove", e.modules.moveColumn.mousemove)
                }))
            }
        }, {
            key: "_unbindMouseMove", value: function () {
                this.table.columnManager.columnsByIndex.forEach((function (e) {
                    e.modules.moveColumn.mousemove && e.getElement().removeEventListener("mousemove", e.modules.moveColumn.mousemove)
                }))
            }
        }, {
            key: "moveColumn", value: function (e, t) {
                var i = this.moving.getCells();
                this.toCol = e, this.toColAfter = t, t ? e.getCells().forEach((function (e, t) {
                    var n = e.getElement(!0);
                    n.parentNode && i[t] && n.parentNode.insertBefore(i[t].getElement(), n.nextSibling)
                })) : e.getCells().forEach((function (e, t) {
                    var n = e.getElement(!0);
                    n.parentNode && i[t] && n.parentNode.insertBefore(i[t].getElement(), n)
                }))
            }
        }, {
            key: "endMove", value: function (e) {
                (1 === e.which || this.touchMove) && (this._unbindMouseMove(), this.placeholderElement.parentNode.insertBefore(this.moving.getElement(), this.placeholderElement.nextSibling), this.placeholderElement.parentNode.removeChild(this.placeholderElement), this.hoverElement.parentNode.removeChild(this.hoverElement), this.table.element.classList.remove("tabulator-block-select"), this.toCol && this.table.columnManager.moveColumnActual(this.moving, this.toCol, this.toColAfter), this.moving = !1, this.toCol = !1, this.toColAfter = !1, this.touchMove || (document.body.removeEventListener("mousemove", this.moveHover), document.body.removeEventListener("mouseup", this.endMove)))
            }
        }, {
            key: "moveHover", value: function (e) {
                var t, i = this, n = this.table.columnManager.getElement(), o = n.scrollLeft,
                    a = (this.touchMove ? e.touches[0].pageX : e.pageX) - k.elOffset(n).left + o;
                this.hoverElement.style.left = a - this.startX + "px", a - o < this.autoScrollMargin && (this.autoScrollTimeout || (this.autoScrollTimeout = setTimeout((function () {
                    t = Math.max(0, o - 5), i.table.rowManager.getElement().scrollLeft = t, i.autoScrollTimeout = !1
                }), 1))), o + n.clientWidth - a < this.autoScrollMargin && (this.autoScrollTimeout || (this.autoScrollTimeout = setTimeout((function () {
                    t = Math.min(n.clientWidth, o + 5), i.table.rowManager.getElement().scrollLeft = t, i.autoScrollTimeout = !1
                }), 1)))
            }
        }]), n
    }(V);
    He.moduleName = "moveColumn";
    var _e = function (i) {
        a(r, i);
        var n = c(r);

        function r(e) {
            var i;
            return t(this, r), (i = n.call(this, e)).placeholderElement = i.createPlaceholderElement(), i.hoverElement = !1, i.checkTimeout = !1, i.checkPeriod = 150, i.moving = !1, i.toRow = !1, i.toRowAfter = !1, i.hasHandle = !1, i.startY = 0, i.startX = 0, i.moveHover = i.moveHover.bind(l(i)), i.endMove = i.endMove.bind(l(i)), i.tableRowDropEvent = !1, i.touchMove = !1, i.connection = !1, i.connectionSelectorsTables = !1, i.connectionSelectorsElements = !1, i.connectionElements = [], i.connections = [], i.connectedTable = !1, i.connectedRow = !1, i.registerTableOption("movableRows", !1), i.registerTableOption("movableRowsConnectedTables", !1), i.registerTableOption("movableRowsConnectedElements", !1), i.registerTableOption("movableRowsSender", !1), i.registerTableOption("movableRowsReceiver", "insert"), i.registerColumnOption("rowHandle"), i
        }

        return o(r, [{
            key: "createPlaceholderElement", value: function () {
                var e = document.createElement("div");
                return e.classList.add("tabulator-row"), e.classList.add("tabulator-row-placeholder"), e
            }
        }, {
            key: "initialize", value: function () {
                this.table.options.movableRows && (this.connectionSelectorsTables = this.table.options.movableRowsConnectedTables, this.connectionSelectorsElements = this.table.options.movableRowsConnectedElements, this.connection = this.connectionSelectorsTables || this.connectionSelectorsElements, this.subscribe("cell-init", this.initializeCell.bind(this)), this.subscribe("column-init", this.initializeColumn.bind(this)), this.subscribe("row-init", this.initializeRow.bind(this)))
            }
        }, {
            key: "initializeGroupHeader", value: function (e) {
                var t = this, i = {};
                i.mouseup = function (e) {
                    t.tableRowDrop(e, row)
                }.bind(t), i.mousemove = function (i) {
                    var n;
                    i.pageY - k.elOffset(e.element).top + t.table.rowManager.element.scrollTop > e.getHeight() / 2 ? t.toRow === e && t.toRowAfter || ((n = e.getElement()).parentNode.insertBefore(t.placeholderElement, n.nextSibling), t.moveRow(e, !0)) : (t.toRow !== e || t.toRowAfter) && (n = e.getElement()).previousSibling && (n.parentNode.insertBefore(t.placeholderElement, n), t.moveRow(e, !1))
                }.bind(t), e.modules.moveRow = i
            }
        }, {
            key: "initializeRow", value: function (e) {
                var t, i = this, n = {};
                n.mouseup = function (t) {
                    i.tableRowDrop(t, e)
                }.bind(i), n.mousemove = function (t) {
                    var n = e.getElement();
                    t.pageY - k.elOffset(n).top + i.table.rowManager.element.scrollTop > e.getHeight() / 2 ? i.toRow === e && i.toRowAfter || (n.parentNode.insertBefore(i.placeholderElement, n.nextSibling), i.moveRow(e, !0)) : (i.toRow !== e || i.toRowAfter) && (n.parentNode.insertBefore(i.placeholderElement, n), i.moveRow(e, !1))
                }.bind(i), this.hasHandle || ((t = e.getElement()).addEventListener("mousedown", (function (t) {
                    1 === t.which && (i.checkTimeout = setTimeout((function () {
                        i.startMove(t, e)
                    }), i.checkPeriod))
                })), t.addEventListener("mouseup", (function (e) {
                    1 === e.which && i.checkTimeout && clearTimeout(i.checkTimeout)
                })), this.bindTouchEvents(e, e.getElement())), e.modules.moveRow = n
            }
        }, {
            key: "initializeColumn", value: function (e) {
                e.definition.rowHandle && !1 !== this.table.options.movableRows && (this.hasHandle = !0)
            }
        }, {
            key: "initializeCell", value: function (e) {
                if (e.column.definition.rowHandle && !1 !== this.table.options.movableRows) {
                    var t = this, i = e.getElement(!0);
                    i.addEventListener("mousedown", (function (i) {
                        1 === i.which && (t.checkTimeout = setTimeout((function () {
                            t.startMove(i, e.row)
                        }), t.checkPeriod))
                    })), i.addEventListener("mouseup", (function (e) {
                        1 === e.which && t.checkTimeout && clearTimeout(t.checkTimeout)
                    })), this.bindTouchEvents(e.row, i)
                }
            }
        }, {
            key: "bindTouchEvents", value: function (e, t) {
                var i, n, o, a, r, s, l = this, u = !1;
                t.addEventListener("touchstart", (function (t) {
                    l.checkTimeout = setTimeout((function () {
                        l.touchMove = !0, i = e.nextRow(), o = i ? i.getHeight() / 2 : 0, n = e.prevRow(), a = n ? n.getHeight() / 2 : 0, r = 0, s = 0, u = !1, l.startMove(t, e)
                    }), l.checkPeriod)
                }), {passive: !0}), this.moving, this.toRow, this.toRowAfter, t.addEventListener("touchmove", (function (t) {
                    var c, h;
                    l.moving && (t.preventDefault(), l.moveHover(t), u || (u = t.touches[0].pageY), (c = t.touches[0].pageY - u) > 0 ? i && c - r > o && (h = i) !== e && (u = t.touches[0].pageY, h.getElement().parentNode.insertBefore(l.placeholderElement, h.getElement().nextSibling), l.moveRow(h, !0)) : n && -c - s > a && (h = n) !== e && (u = t.touches[0].pageY, h.getElement().parentNode.insertBefore(l.placeholderElement, h.getElement()), l.moveRow(h, !1)), h && (i = h.nextRow(), r = o, o = i ? i.getHeight() / 2 : 0, n = h.prevRow(), s = a, a = n ? n.getHeight() / 2 : 0))
                })), t.addEventListener("touchend", (function (e) {
                    l.checkTimeout && clearTimeout(l.checkTimeout), l.moving && (l.endMove(e), l.touchMove = !1)
                }))
            }
        }, {
            key: "_bindMouseMove", value: function () {
                this.table.rowManager.getDisplayRows().forEach((function (e) {
                    ("row" === e.type || "group" === e.type) && e.modules.moveRow && e.modules.moveRow.mousemove && e.getElement().addEventListener("mousemove", e.modules.moveRow.mousemove)
                }))
            }
        }, {
            key: "_unbindMouseMove", value: function () {
                this.table.rowManager.getDisplayRows().forEach((function (e) {
                    ("row" === e.type || "group" === e.type) && e.modules.moveRow && e.modules.moveRow.mousemove && e.getElement().removeEventListener("mousemove", e.modules.moveRow.mousemove)
                }))
            }
        }, {
            key: "startMove", value: function (e, t) {
                var i = t.getElement();
                this.setStartPosition(e, t), this.moving = t, this.table.element.classList.add("tabulator-block-select"), this.placeholderElement.style.width = t.getWidth() + "px", this.placeholderElement.style.height = t.getHeight() + "px", this.connection ? (this.table.element.classList.add("tabulator-movingrow-sending"), this.connectToTables(t)) : (i.parentNode.insertBefore(this.placeholderElement, i), i.parentNode.removeChild(i)), this.hoverElement = i.cloneNode(!0), this.hoverElement.classList.add("tabulator-moving"), this.connection ? (document.body.appendChild(this.hoverElement), this.hoverElement.style.left = "0", this.hoverElement.style.top = "0", this.hoverElement.style.width = this.table.element.clientWidth + "px", this.hoverElement.style.whiteSpace = "nowrap", this.hoverElement.style.overflow = "hidden", this.hoverElement.style.pointerEvents = "none") : (this.table.rowManager.getTableElement().appendChild(this.hoverElement), this.hoverElement.style.left = "0", this.hoverElement.style.top = "0", this._bindMouseMove()), document.body.addEventListener("mousemove", this.moveHover), document.body.addEventListener("mouseup", this.endMove), this.dispatchExternal("rowMoving", t.getComponent()), this.moveHover(e)
            }
        }, {
            key: "setStartPosition", value: function (e, t) {
                var i, n, o = this.touchMove ? e.touches[0].pageX : e.pageX,
                    a = this.touchMove ? e.touches[0].pageY : e.pageY;
                i = t.getElement(), this.connection ? (n = i.getBoundingClientRect(), this.startX = n.left - o + window.pageXOffset, this.startY = n.top - a + window.pageYOffset) : this.startY = a - i.getBoundingClientRect().top
            }
        }, {
            key: "endMove", value: function (e) {
                e && 1 !== e.which && !this.touchMove || (this._unbindMouseMove(), this.connection || (this.placeholderElement.parentNode.insertBefore(this.moving.getElement(), this.placeholderElement.nextSibling), this.placeholderElement.parentNode.removeChild(this.placeholderElement)), this.hoverElement.parentNode.removeChild(this.hoverElement), this.table.element.classList.remove("tabulator-block-select"), this.toRow ? this.table.rowManager.moveRow(this.moving, this.toRow, this.toRowAfter) : this.dispatchExternal("rowMoveCancelled", this.moving.getComponent()), this.moving = !1, this.toRow = !1, this.toRowAfter = !1, document.body.removeEventListener("mousemove", this.moveHover), document.body.removeEventListener("mouseup", this.endMove), this.connection && (this.table.element.classList.remove("tabulator-movingrow-sending"), this.disconnectFromTables()))
            }
        }, {
            key: "moveRow", value: function (e, t) {
                this.toRow = e, this.toRowAfter = t
            }
        }, {
            key: "moveHover", value: function (e) {
                this.connection ? this.moveHoverConnections.call(this, e) : this.moveHoverTable.call(this, e)
            }
        }, {
            key: "moveHoverTable", value: function (e) {
                var t = this.table.rowManager.getElement(), i = t.scrollTop,
                    n = (this.touchMove ? e.touches[0].pageY : e.pageY) - t.getBoundingClientRect().top + i;
                this.hoverElement.style.top = n - this.startY + "px"
            }
        }, {
            key: "moveHoverConnections", value: function (e) {
                this.hoverElement.style.left = this.startX + (this.touchMove ? e.touches[0].pageX : e.pageX) + "px", this.hoverElement.style.top = this.startY + (this.touchMove ? e.touches[0].pageY : e.pageY) + "px"
            }
        }, {
            key: "elementRowDrop", value: function (e, t, i) {
                this.dispatchExternal("movableRowsElementDrop", e, t, !!i && i.getComponent())
            }
        }, {
            key: "connectToTables", value: function (e) {
                var t, i = this;
                this.connectionSelectorsTables && (t = this.commsConnections(this.connectionSelectorsTables), this.dispatchExternal("movableRowsSendingStart", t), this.commsSend(this.connectionSelectorsTables, "moveRow", "connect", {row: e})), this.connectionSelectorsElements && (this.connectionElements = [], Array.isArray(this.connectionSelectorsElements) || (this.connectionSelectorsElements = [this.connectionSelectorsElements]), this.connectionSelectorsElements.forEach((function (e) {
                    "string" == typeof e ? i.connectionElements = i.connectionElements.concat(Array.prototype.slice.call(document.querySelectorAll(e))) : i.connectionElements.push(e)
                })), this.connectionElements.forEach((function (e) {
                    var t = function (t) {
                        i.elementRowDrop(t, e, i.moving)
                    };
                    e.addEventListener("mouseup", t), e.tabulatorElementDropEvent = t, e.classList.add("tabulator-movingrow-receiving")
                })))
            }
        }, {
            key: "disconnectFromTables", value: function () {
                var e;
                this.connectionSelectorsTables && (e = this.commsConnections(this.connectionSelectorsTables), this.dispatchExternal("movableRowsSendingStop", e), this.commsSend(this.connectionSelectorsTables, "moveRow", "disconnect")), this.connectionElements.forEach((function (e) {
                    e.classList.remove("tabulator-movingrow-receiving"), e.removeEventListener("mouseup", e.tabulatorElementDropEvent), delete e.tabulatorElementDropEvent
                }))
            }
        }, {
            key: "connect", value: function (e, t) {
                return this.connectedTable ? (console.warn("Move Row Error - Table cannot accept connection, already connected to table:", this.connectedTable), !1) : (this.connectedTable = e, this.connectedRow = t, this.table.element.classList.add("tabulator-movingrow-receiving"), this.table.rowManager.getDisplayRows().forEach((function (e) {
                    "row" === e.type && e.modules.moveRow && e.modules.moveRow.mouseup && e.getElement().addEventListener("mouseup", e.modules.moveRow.mouseup)
                })), this.tableRowDropEvent = this.tableRowDrop.bind(this), this.table.element.addEventListener("mouseup", this.tableRowDropEvent), this.dispatchExternal("movableRowsReceivingStart", t, e), !0)
            }
        }, {
            key: "disconnect", value: function (e) {
                e === this.connectedTable ? (this.connectedTable = !1, this.connectedRow = !1, this.table.element.classList.remove("tabulator-movingrow-receiving"), this.table.rowManager.getDisplayRows().forEach((function (e) {
                    "row" === e.type && e.modules.moveRow && e.modules.moveRow.mouseup && e.getElement().removeEventListener("mouseup", e.modules.moveRow.mouseup)
                })), this.table.element.removeEventListener("mouseup", this.tableRowDropEvent), this.dispatchExternal("movableRowsReceivingStop", e)) : console.warn("Move Row Error - trying to disconnect from non connected table")
            }
        }, {
            key: "dropComplete", value: function (t, i, n) {
                var o = !1;
                if (n) {
                    switch (e(this.table.options.movableRowsSender)) {
                        case"string":
                            o = this.senders[this.table.options.movableRowsSender];
                            break;
                        case"function":
                            o = this.table.options.movableRowsSender
                    }
                    o ? o.call(this, this.moving.getComponent(), i ? i.getComponent() : void 0, t) : this.table.options.movableRowsSender && console.warn("Mover Row Error - no matching sender found:", this.table.options.movableRowsSender), this.dispatchExternal("movableRowsSent", this.moving.getComponent(), i ? i.getComponent() : void 0, t)
                } else this.dispatchExternal("movableRowsSentFailed", this.moving.getComponent(), i ? i.getComponent() : void 0, t);
                this.endMove()
            }
        }, {
            key: "tableRowDrop", value: function (t, i) {
                var n = !1, o = !1;
                switch (t.stopImmediatePropagation(), e(this.table.options.movableRowsReceiver)) {
                    case"string":
                        n = this.receivers[this.table.options.movableRowsReceiver];
                        break;
                    case"function":
                        n = this.table.options.movableRowsReceiver
                }
                n ? o = n.call(this, this.connectedRow.getComponent(), i ? i.getComponent() : void 0, this.connectedTable) : console.warn("Mover Row Error - no matching receiver found:", this.table.options.movableRowsReceiver), o ? this.dispatchExternal("movableRowsReceived", this.connectedRow.getComponent(), i ? i.getComponent() : void 0, this.connectedTable) : this.dispatchExternal("movableRowsReceivedFailed", this.connectedRow.getComponent(), i ? i.getComponent() : void 0, this.connectedTable), this.commsSend(this.connectedTable, "moveRow", "dropcomplete", {
                    row: i,
                    success: o
                })
            }
        }, {
            key: "commsReceived", value: function (e, t, i) {
                switch (t) {
                    case"connect":
                        return this.connect(e, i.row);
                    case"disconnect":
                        return this.disconnect(e);
                    case"dropcomplete":
                        return this.dropComplete(e, i.row, i.success)
                }
            }
        }]), r
    }(V);
    _e.prototype.receivers = {
        insert: function (e, t, i) {
            return this.table.addRow(e.getData(), void 0, t), !0
        }, add: function (e, t, i) {
            return this.table.addRow(e.getData()), !0
        }, update: function (e, t, i) {
            return !!t && (t.update(e.getData()), !0)
        }, replace: function (e, t, i) {
            return !!t && (this.table.addRow(e.getData(), void 0, t), t.delete(), !0)
        }
    }, _e.prototype.senders = {
        delete: function (e, t, i) {
            e.delete()
        }
    }, _e.moduleName = "moveRow";
    var Oe = function (i) {
        a(r, i);
        var n = c(r);

        function r(e) {
            var i;
            return t(this, r), (i = n.call(this, e)).allowedTypes = ["", "data", "edit", "clipboard"], i.enabled = !0, i.registerColumnOption("mutator"), i.registerColumnOption("mutatorParams"), i.registerColumnOption("mutatorData"), i.registerColumnOption("mutatorDataParams"), i.registerColumnOption("mutatorEdit"), i.registerColumnOption("mutatorEditParams"), i.registerColumnOption("mutatorClipboard"), i.registerColumnOption("mutatorClipboardParams"), i.registerColumnOption("mutateLink"), i
        }

        return o(r, [{
            key: "initialize", value: function () {
                this.subscribe("cell-value-changing", this.transformCell.bind(this)), this.subscribe("cell-value-changed", this.mutateLink.bind(this)), this.subscribe("column-layout", this.initializeColumn.bind(this)), this.subscribe("row-data-init-before", this.rowDataChanged.bind(this)), this.subscribe("row-data-changing", this.rowDataChanged.bind(this))
            }
        }, {
            key: "rowDataChanged", value: function (e, t, i) {
                return this.transformRow(t, "data", i)
            }
        }, {
            key: "initializeColumn", value: function (e) {
                var t = this, i = !1, n = {};
                this.allowedTypes.forEach((function (o) {
                    var a, r = "mutator" + (o.charAt(0).toUpperCase() + o.slice(1));
                    e.definition[r] && (a = t.lookupMutator(e.definition[r])) && (i = !0, n[r] = {
                        mutator: a,
                        params: e.definition[r + "Params"] || {}
                    })
                })), i && (e.modules.mutate = n)
            }
        }, {
            key: "lookupMutator", value: function (t) {
                var i = !1;
                switch (e(t)) {
                    case"string":
                        r.mutators[t] ? i = r.mutators[t] : console.warn("Mutator Error - No such mutator found, ignoring: ", t);
                        break;
                    case"function":
                        i = t
                }
                return i
            }
        }, {
            key: "transformRow", value: function (e, t, i) {
                var n, o = "mutator" + (t.charAt(0).toUpperCase() + t.slice(1));
                return this.enabled && this.table.columnManager.traverse((function (a) {
                    var r, s, l;
                    a.modules.mutate && (r = a.modules.mutate[o] || a.modules.mutate.mutator || !1) && (n = a.getFieldValue(void 0 !== i ? i : e), "data" != t && void 0 === n || (l = a.getComponent(), s = "function" == typeof r.params ? r.params(n, e, t, l) : r.params, a.setFieldValue(e, r.mutator(n, e, t, s, l))))
                })), e
            }
        }, {
            key: "transformCell", value: function (e, t) {
                if (e.column.modules.mutate) {
                    var i = e.column.modules.mutate.mutatorEdit || e.column.modules.mutate.mutator || !1, n = {};
                    if (i) return n = Object.assign(n, e.row.getData()), e.column.setFieldValue(n, t), i.mutator(t, n, "edit", i.params, e.getComponent())
                }
                return t
            }
        }, {
            key: "mutateLink", value: function (e) {
                var t = e.column.definition.mutateLink;
                t && (Array.isArray(t) || (t = [t]), t.forEach((function (t) {
                    var i = e.row.getCell(t);
                    i && i.setValue(i.getValue(), !0, !0)
                })))
            }
        }, {
            key: "enable", value: function () {
                this.enabled = !0
            }
        }, {
            key: "disable", value: function () {
                this.enabled = !1
            }
        }]), r
    }(V);
    Oe.moduleName = "mutator", Oe.mutators = {};
    var Ae = {
        rows: function (e, t, i, n, o) {
            var a = document.createElement("span"), r = document.createElement("span"),
                s = document.createElement("span"), l = document.createElement("span"),
                u = document.createElement("span"), c = document.createElement("span");
            return this.table.modules.localize.langBind("pagination|counter|showing", (function (e) {
                r.innerHTML = e
            })), this.table.modules.localize.langBind("pagination|counter|of", (function (e) {
                l.innerHTML = e
            })), this.table.modules.localize.langBind("pagination|counter|rows", (function (e) {
                c.innerHTML = e
            })), n ? (s.innerHTML = " " + t + "-" + Math.min(t + e - 1, n) + " ", u.innerHTML = " " + n + " ", a.appendChild(r), a.appendChild(s), a.appendChild(l), a.appendChild(u), a.appendChild(c)) : (s.innerHTML = " 0 ", a.appendChild(r), a.appendChild(s), a.appendChild(c)), a
        }, pages: function (e, t, i, n, o) {
            var a = document.createElement("span"), r = document.createElement("span"),
                s = document.createElement("span"), l = document.createElement("span"),
                u = document.createElement("span"), c = document.createElement("span");
            return this.table.modules.localize.langBind("pagination|counter|showing", (function (e) {
                r.innerHTML = e
            })), s.innerHTML = " " + i + " ", this.table.modules.localize.langBind("pagination|counter|of", (function (e) {
                l.innerHTML = e
            })), u.innerHTML = " " + o + " ", this.table.modules.localize.langBind("pagination|counter|pages", (function (e) {
                c.innerHTML = e
            })), a.appendChild(r), a.appendChild(s), a.appendChild(l), a.appendChild(u), a.appendChild(c), a
        }
    }, Be = function (i) {
        a(r, i);
        var n = c(r);

        function r(e) {
            var i;
            return t(this, r), (i = n.call(this, e)).mode = "local", i.progressiveLoad = !1, i.element = null, i.pageCounterElement = null, i.pageCounter = null, i.size = 0, i.page = 1, i.count = 5, i.max = 1, i.remoteRowCountEstimate = null, i.displayIndex = 0, i.initialLoad = !0, i.dataChanging = !1, i.pageSizes = [], i.registerTableOption("pagination", !1), i.registerTableOption("paginationMode", "local"), i.registerTableOption("paginationSize", !1), i.registerTableOption("paginationInitialPage", 1), i.registerTableOption("paginationCounter", !1), i.registerTableOption("paginationCounterElement", !1), i.registerTableOption("paginationButtonCount", 5), i.registerTableOption("paginationSizeSelector", !1), i.registerTableOption("paginationElement", !1), i.registerTableOption("paginationAddRow", "page"), i.registerTableOption("progressiveLoad", !1), i.registerTableOption("progressiveLoadDelay", 0), i.registerTableOption("progressiveLoadScrollMargin", 0), i.registerTableFunction("setMaxPage", i.setMaxPage.bind(l(i))), i.registerTableFunction("setPage", i.setPage.bind(l(i))), i.registerTableFunction("setPageToRow", i.userSetPageToRow.bind(l(i))), i.registerTableFunction("setPageSize", i.userSetPageSize.bind(l(i))), i.registerTableFunction("getPageSize", i.getPageSize.bind(l(i))), i.registerTableFunction("previousPage", i.previousPage.bind(l(i))), i.registerTableFunction("nextPage", i.nextPage.bind(l(i))), i.registerTableFunction("getPage", i.getPage.bind(l(i))), i.registerTableFunction("getPageMax", i.getPageMax.bind(l(i))), i.registerComponentFunction("row", "pageTo", i.setPageToRow.bind(l(i))), i
        }

        return o(r, [{
            key: "initialize", value: function () {
                this.table.options.pagination ? (this.subscribe("row-deleted", this.rowsUpdated.bind(this)), this.subscribe("row-added", this.rowsUpdated.bind(this)), this.subscribe("data-processed", this.initialLoadComplete.bind(this)), this.subscribe("table-built", this.calculatePageSizes.bind(this)), this.subscribe("footer-redraw", this.footerRedraw.bind(this)), "page" == this.table.options.paginationAddRow && this.subscribe("row-adding-position", this.rowAddingPosition.bind(this)), "remote" === this.table.options.paginationMode && (this.subscribe("data-params", this.remotePageParams.bind(this)), this.subscribe("data-loaded", this._parseRemoteData.bind(this))), this.table.options.progressiveLoad && console.error("Progressive Load Error - Pagination and progressive load cannot be used at the same time"), this.registerDisplayHandler(this.restOnRenderBefore.bind(this), 40), this.registerDisplayHandler(this.getRows.bind(this), 50), this.createElements(), this.initializePageCounter(), this.initializePaginator()) : this.table.options.progressiveLoad && (this.subscribe("data-params", this.remotePageParams.bind(this)), this.subscribe("data-loaded", this._parseRemoteData.bind(this)), this.subscribe("table-built", this.calculatePageSizes.bind(this)), this.subscribe("data-processed", this.initialLoadComplete.bind(this)), this.initializeProgressive(this.table.options.progressiveLoad), "scroll" === this.table.options.progressiveLoad && this.subscribe("scroll-vertical", this.scrollVertical.bind(this)))
            }
        }, {
            key: "rowAddingPosition", value: function (e, t) {
                var i, n = this.table.rowManager, o = n.getDisplayRows();
                return t ? o.length ? i = o[0] : n.activeRows.length && (i = n.activeRows[n.activeRows.length - 1], t = !1) : o.length && (i = o[o.length - 1], t = !(o.length < this.size)), {
                    index: i,
                    top: t
                }
            }
        }, {
            key: "calculatePageSizes", value: function () {
                var e, t;
                this.table.options.paginationSize ? this.size = this.table.options.paginationSize : ((e = document.createElement("div")).classList.add("tabulator-row"), e.style.visibility = "hidden", (t = document.createElement("div")).classList.add("tabulator-cell"), t.innerHTML = "Page Row Test", e.appendChild(t), this.table.rowManager.getTableElement().appendChild(e), this.size = Math.floor(this.table.rowManager.getElement().clientHeight / e.offsetHeight), this.table.rowManager.getTableElement().removeChild(e)), this.dispatchExternal("pageSizeChanged", this.size), this.generatePageSizeSelectList()
            }
        }, {
            key: "initialLoadComplete", value: function () {
                this.initialLoad = !1
            }
        }, {
            key: "remotePageParams", value: function (e, t, i, n) {
                return this.initialLoad || (this.progressiveLoad && !i || !this.progressiveLoad && !this.dataChanging) && this.reset(!0), n.page = this.page, this.size && (n.size = this.size), n
            }
        }, {
            key: "userSetPageToRow", value: function (e) {
                return this.table.options.pagination && (e = this.rowManager.findRow(e)) ? this.setPageToRow(e) : Promise.reject()
            }
        }, {
            key: "userSetPageSize", value: function (e) {
                return !!this.table.options.pagination && (this.setPageSize(e), this.setPage(1))
            }
        }, {
            key: "scrollVertical", value: function (e, t) {
                var i;
                t || this.table.dataLoader.loading || (i = this.table.rowManager.getElement()).scrollHeight - i.clientHeight - e < (this.table.options.progressiveLoadScrollMargin || 2 * i.clientHeight) && this.nextPage().catch((function () {
                }))
            }
        }, {
            key: "restOnRenderBefore", value: function (e, t) {
                return t || "local" === this.mode && this.reset(), e
            }
        }, {
            key: "rowsUpdated", value: function () {
                this.refreshData(!0, "all")
            }
        }, {
            key: "createElements", value: function () {
                var e;
                this.element = document.createElement("span"), this.element.classList.add("tabulator-paginator"), this.pagesElement = document.createElement("span"), this.pagesElement.classList.add("tabulator-pages"), (e = document.createElement("button")).classList.add("tabulator-page"), e.setAttribute("type", "button"), e.setAttribute("role", "button"), e.setAttribute("aria-label", ""), e.setAttribute("title", ""), this.firstBut = e.cloneNode(!0), this.firstBut.setAttribute("data-page", "first"), this.prevBut = e.cloneNode(!0), this.prevBut.setAttribute("data-page", "prev"), this.nextBut = e.cloneNode(!0), this.nextBut.setAttribute("data-page", "next"), this.lastBut = e.cloneNode(!0), this.lastBut.setAttribute("data-page", "last"), this.table.options.paginationSizeSelector && (this.pageSizeSelect = document.createElement("select"), this.pageSizeSelect.classList.add("tabulator-page-size"))
            }
        }, {
            key: "generatePageSizeSelectList", value: function () {
                var e = this, t = [];
                if (this.pageSizeSelect) {
                    if (Array.isArray(this.table.options.paginationSizeSelector)) t = this.table.options.paginationSizeSelector, this.pageSizes = t, -1 == this.pageSizes.indexOf(this.size) && t.unshift(this.size); else if (-1 == this.pageSizes.indexOf(this.size)) {
                        t = [];
                        for (var i = 1; i < 5; i++) t.push(this.size * i);
                        this.pageSizes = t
                    } else t = this.pageSizes;
                    for (; this.pageSizeSelect.firstChild;) this.pageSizeSelect.removeChild(this.pageSizeSelect.firstChild);
                    t.forEach((function (t) {
                        var i = document.createElement("option");
                        i.value = t, !0 === t ? e.langBind("pagination|all", (function (e) {
                            i.innerHTML = e
                        })) : i.innerHTML = t, e.pageSizeSelect.appendChild(i)
                    })), this.pageSizeSelect.value = this.size
                }
            }
        }, {
            key: "initializePageCounter", value: function () {
                var e = this.table.options.paginationCounter, t = null;
                e && ((t = "function" == typeof e ? e : r.pageCounters[e]) ? (this.pageCounter = t, this.pageCounterElement = document.createElement("span"), this.pageCounterElement.classList.add("tabulator-page-counter")) : console.warn("Pagination Error - No such page counter found: ", e))
            }
        }, {
            key: "initializePaginator", value: function (e) {
                var t, i, n = this;
                e || (this.langBind("pagination|first", (function (e) {
                    n.firstBut.innerHTML = e
                })), this.langBind("pagination|first_title", (function (e) {
                    n.firstBut.setAttribute("aria-label", e), n.firstBut.setAttribute("title", e)
                })), this.langBind("pagination|prev", (function (e) {
                    n.prevBut.innerHTML = e
                })), this.langBind("pagination|prev_title", (function (e) {
                    n.prevBut.setAttribute("aria-label", e), n.prevBut.setAttribute("title", e)
                })), this.langBind("pagination|next", (function (e) {
                    n.nextBut.innerHTML = e
                })), this.langBind("pagination|next_title", (function (e) {
                    n.nextBut.setAttribute("aria-label", e), n.nextBut.setAttribute("title", e)
                })), this.langBind("pagination|last", (function (e) {
                    n.lastBut.innerHTML = e
                })), this.langBind("pagination|last_title", (function (e) {
                    n.lastBut.setAttribute("aria-label", e), n.lastBut.setAttribute("title", e)
                })), this.firstBut.addEventListener("click", (function () {
                    n.setPage(1)
                })), this.prevBut.addEventListener("click", (function () {
                    n.previousPage()
                })), this.nextBut.addEventListener("click", (function () {
                    n.nextPage()
                })), this.lastBut.addEventListener("click", (function () {
                    n.setPage(n.max)
                })), this.table.options.paginationElement && (this.element = this.table.options.paginationElement), this.pageSizeSelect && (t = document.createElement("label"), this.langBind("pagination|page_size", (function (e) {
                    n.pageSizeSelect.setAttribute("aria-label", e), n.pageSizeSelect.setAttribute("title", e), t.innerHTML = e
                })), this.element.appendChild(t), this.element.appendChild(this.pageSizeSelect), this.pageSizeSelect.addEventListener("change", (function (e) {
                    n.setPageSize("true" == n.pageSizeSelect.value || n.pageSizeSelect.value), n.setPage(1)
                }))), this.element.appendChild(this.firstBut), this.element.appendChild(this.prevBut), this.element.appendChild(this.pagesElement), this.element.appendChild(this.nextBut), this.element.appendChild(this.lastBut), this.table.options.paginationElement || e || (this.table.options.paginationCounter && (this.table.options.paginationCounterElement ? this.table.options.paginationCounterElement instanceof HTMLElement ? this.table.options.paginationCounterElement.appendChild(this.pageCounterElement) : "string" == typeof this.table.options.paginationCounterElement && ((i = document.querySelector(this.table.options.paginationCounterElement)) ? i.appendChild(this.pageCounterElement) : console.warn("Pagination Error - Unable to find element matching paginationCounterElement selector:", this.table.options.paginationCounterElement)) : this.footerAppend(this.pageCounterElement)), this.footerAppend(this.element)), this.page = this.table.options.paginationInitialPage, this.count = this.table.options.paginationButtonCount), this.mode = this.table.options.paginationMode
            }
        }, {
            key: "initializeProgressive", value: function (e) {
                this.initializePaginator(!0), this.mode = "progressive_" + e, this.progressiveLoad = !0
            }
        }, {
            key: "trackChanges", value: function () {
                this.dispatch("page-changed")
            }
        }, {
            key: "setDisplayIndex", value: function (e) {
                this.displayIndex = e
            }
        }, {
            key: "getDisplayIndex", value: function () {
                return this.displayIndex
            }
        }, {
            key: "setMaxRows", value: function (e) {
                this.max = e ? !0 === this.size ? 1 : Math.ceil(e / this.size) : 1, this.page > this.max && (this.page = this.max)
            }
        }, {
            key: "reset", value: function (e) {
                this.initialLoad || ("local" == this.mode || e) && (this.page = 1)
            }
        }, {
            key: "setMaxPage", value: function (e) {
                e = parseInt(e), this.max = e || 1, this.page > this.max && (this.page = this.max, this.trigger())
            }
        }, {
            key: "setPage", value: function (e) {
                switch (e) {
                    case"first":
                        return this.setPage(1);
                    case"prev":
                        return this.previousPage();
                    case"next":
                        return this.nextPage();
                    case"last":
                        return this.setPage(this.max)
                }
                return (e = parseInt(e)) > 0 && e <= this.max || "local" !== this.mode ? (this.page = e, this.trackChanges(), this.trigger()) : (console.warn("Pagination Error - Requested page is out of range of 1 - " + this.max + ":", e), Promise.reject())
            }
        }, {
            key: "setPageToRow", value: function (e) {
                var t = this.table.rowManager.getDisplayRows(this.displayIndex - 1).indexOf(e);
                if (t > -1) {
                    var i = !0 === this.size ? 1 : Math.ceil((t + 1) / this.size);
                    return this.setPage(i)
                }
                return console.warn("Pagination Error - Requested row is not visible"), Promise.reject()
            }
        }, {
            key: "setPageSize", value: function (e) {
                !0 !== e && (e = parseInt(e)), e > 0 && (this.size = e, this.dispatchExternal("pageSizeChanged", e)), this.pageSizeSelect && this.generatePageSizeSelectList(), this.trackChanges()
            }
        }, {
            key: "_setPageCounter", value: function (t, i, n) {
                var o;
                if (this.pageCounter) switch ("remote" === this.mode && (i = this.size, n = (this.page - 1) * this.size + 1, t = this.remoteRowCountEstimate), e(o = this.pageCounter.call(this, i, n, this.page, t, this.max))) {
                    case"object":
                        if (o instanceof Node) {
                            for (; this.pageCounterElement.firstChild;) this.pageCounterElement.removeChild(this.pageCounterElement.firstChild);
                            this.pageCounterElement.appendChild(o)
                        } else this.pageCounterElement.innerHTML = "", null != o && console.warn("Page Counter Error - Page Counter has returned a type of object, the only valid page counter object return is an instance of Node, the page counter returned:", o);
                        break;
                    case"undefined":
                        this.pageCounterElement.innerHTML = "";
                        break;
                    default:
                        this.pageCounterElement.innerHTML = o
                }
            }
        }, {
            key: "_setPageButtons", value: function () {
                for (var e = Math.floor((this.count - 1) / 2), t = Math.ceil((this.count - 1) / 2), i = this.max - this.page + e + 1 < this.count ? this.max - this.count + 1 : Math.max(this.page - e, 1), n = this.page <= t ? Math.min(this.count, this.max) : Math.min(this.page + t, this.max); this.pagesElement.firstChild;) this.pagesElement.removeChild(this.pagesElement.firstChild);
                1 == this.page ? (this.firstBut.disabled = !0, this.prevBut.disabled = !0) : (this.firstBut.disabled = !1, this.prevBut.disabled = !1), this.page == this.max ? (this.lastBut.disabled = !0, this.nextBut.disabled = !0) : (this.lastBut.disabled = !1, this.nextBut.disabled = !1);
                for (var o = i; o <= n; o++) o > 0 && o <= this.max && this.pagesElement.appendChild(this._generatePageButton(o));
                this.footerRedraw()
            }
        }, {
            key: "_generatePageButton", value: function (e) {
                var t = this, i = document.createElement("button");
                return i.classList.add("tabulator-page"), e == this.page && i.classList.add("active"), i.setAttribute("type", "button"), i.setAttribute("role", "button"), this.langBind("pagination|page_title", (function (t) {
                    i.setAttribute("aria-label", t + " " + e), i.setAttribute("title", t + " " + e)
                })), i.setAttribute("data-page", e), i.textContent = e, i.addEventListener("click", (function (i) {
                    t.setPage(e)
                })), i
            }
        }, {
            key: "previousPage", value: function () {
                return this.page > 1 ? (this.page--, this.trackChanges(), this.trigger()) : (console.warn("Pagination Error - Previous page would be less than page 1:", 0), Promise.reject())
            }
        }, {
            key: "nextPage", value: function () {
                return this.page < this.max ? (this.page++, this.trackChanges(), this.trigger()) : (this.progressiveLoad || console.warn("Pagination Error - Next page would be greater than maximum page of " + this.max + ":", this.max + 1), Promise.reject())
            }
        }, {
            key: "getPage", value: function () {
                return this.page
            }
        }, {
            key: "getPageMax", value: function () {
                return this.max
            }
        }, {
            key: "getPageSize", value: function (e) {
                return this.size
            }
        }, {
            key: "getMode", value: function () {
                return this.mode
            }
        }, {
            key: "getRows", value: function (e) {
                var t, i, n, o, a = 0, r = e.filter((function (e) {
                    return "row" === e.type
                }));
                if ("local" == this.mode) {
                    t = [], this.setMaxRows(e.length), !0 === this.size ? (i = 0, n = e.length) : n = (i = this.size * (this.page - 1)) + parseInt(this.size), this._setPageButtons();
                    for (var s = i; s < n; s++) {
                        var l = e[s];
                        l && (t.push(l), "row" === l.type && (o || (o = l), a++))
                    }
                    return this._setPageCounter(r.length, a, o ? r.indexOf(o) + 1 : 0), t
                }
                return this._setPageButtons(), this._setPageCounter(r.length), e.slice(0)
            }
        }, {
            key: "trigger", value: function () {
                var e, t = this;
                switch (this.mode) {
                    case"local":
                        return e = this.table.rowManager.scrollLeft, this.refreshData(), this.table.rowManager.scrollHorizontal(e), this.dispatchExternal("pageLoaded", this.getPage()), Promise.resolve();
                    case"remote":
                        return this.dataChanging = !0, this.reloadData(null).finally((function () {
                            t.dataChanging = !1
                        }));
                    case"progressive_load":
                    case"progressive_scroll":
                        return this.reloadData(null, !0);
                    default:
                        return console.warn("Pagination Error - no such pagination mode:", this.mode), Promise.reject()
                }
            }
        }, {
            key: "_parseRemoteData", value: function (e) {
                var t, i = this;
                if (void 0 === e.last_page && console.warn("Remote Pagination Error - Server response missing '" + (this.options("dataReceiveParams").last_page || "last_page") + "' property"), e.data) {
                    if (this.max = parseInt(e.last_page) || 1, this.remoteRowCountEstimate = void 0 !== e.last_row ? e.last_row : e.last_page * this.size - (this.page == e.last_page ? this.size - e.data.length : 0), this.progressiveLoad) {
                        switch (this.mode) {
                            case"progressive_load":
                                1 == this.page ? this.table.rowManager.setData(e.data, !1, 1 == this.page) : this.table.rowManager.addRows(e.data), this.page < this.max && setTimeout((function () {
                                    i.nextPage()
                                }), this.table.options.progressiveLoadDelay);
                                break;
                            case"progressive_scroll":
                                e = 1 === this.page ? e.data : this.table.rowManager.getData().concat(e.data), this.table.rowManager.setData(e, 1 !== this.page, 1 == this.page), t = this.table.options.progressiveLoadScrollMargin || 2 * this.table.rowManager.element.clientHeight, this.table.rowManager.element.scrollHeight <= this.table.rowManager.element.clientHeight + t && this.page < this.max && setTimeout((function () {
                                    i.nextPage()
                                }))
                        }
                        return !1
                    }
                    this.dispatchExternal("pageLoaded", this.getPage())
                } else console.warn("Remote Pagination Error - Server response missing '" + (this.options("dataReceiveParams").data || "data") + "' property");
                return e.data
            }
        }, {
            key: "footerRedraw", value: function () {
                var e = this.table.footerManager.containerElement;
                Math.ceil(e.clientWidth) - e.scrollWidth < 0 ? this.pagesElement.style.display = "none" : (this.pagesElement.style.display = "", Math.ceil(e.clientWidth) - e.scrollWidth < 0 && (this.pagesElement.style.display = "none"))
            }
        }]), r
    }(V);
    Be.moduleName = "page", Be.pageCounters = Ae;
    var Ie = {
        local: function (e, t) {
            var i = localStorage.getItem(e + "-" + t);
            return !!i && JSON.parse(i)
        }, cookie: function (e, t) {
            var i, n, o = document.cookie, a = e + "-" + t, r = o.indexOf(a + "=");
            return r > -1 && (o = o.slice(r), (i = o.indexOf(";")) > -1 && (o = o.slice(0, i)), n = o.replace(a + "=", "")), !!n && JSON.parse(n)
        }
    }, Ne = {
        local: function (e, t, i) {
            localStorage.setItem(e + "-" + t, JSON.stringify(i))
        }, cookie: function (e, t, i) {
            var n = new Date;
            n.setDate(n.getDate() + 1e4), document.cookie = e + "-" + t + "=" + JSON.stringify(i) + "; expires=" + n.toUTCString()
        }
    }, Ve = function (e) {
        a(n, e);
        var i = c(n);

        function n(e) {
            var o;
            return t(this, n), (o = i.call(this, e)).mode = "", o.id = "", o.defWatcherBlock = !1, o.config = {}, o.readFunc = !1, o.writeFunc = !1, o.registerTableOption("persistence", !1), o.registerTableOption("persistenceID", ""), o.registerTableOption("persistenceMode", !0), o.registerTableOption("persistenceReaderFunc", !1), o.registerTableOption("persistenceWriterFunc", !1), o
        }

        return o(n, [{
            key: "localStorageTest", value: function () {
                var e = "_tabulator_test";
                try {
                    return window.localStorage.setItem(e, e), window.localStorage.removeItem(e), !0
                } catch (e) {
                    return !1
                }
            }
        }, {
            key: "initialize", value: function () {
                if (this.table.options.persistence) {
                    var e, t = this.table.options.persistenceMode, i = this.table.options.persistenceID;
                    this.mode = !0 !== t ? t : this.localStorageTest() ? "local" : "cookie", this.table.options.persistenceReaderFunc ? "function" == typeof this.table.options.persistenceReaderFunc ? this.readFunc = this.table.options.persistenceReaderFunc : n.readers[this.table.options.persistenceReaderFunc] ? this.readFunc = n.readers[this.table.options.persistenceReaderFunc] : console.warn("Persistence Read Error - invalid reader set", this.table.options.persistenceReaderFunc) : n.readers[this.mode] ? this.readFunc = n.readers[this.mode] : console.warn("Persistence Read Error - invalid reader set", this.mode), this.table.options.persistenceWriterFunc ? "function" == typeof this.table.options.persistenceWriterFunc ? this.writeFunc = this.table.options.persistenceWriterFunc : n.writers[this.table.options.persistenceWriterFunc] ? this.writeFunc = n.writers[this.table.options.persistenceWriterFunc] : console.warn("Persistence Write Error - invalid reader set", this.table.options.persistenceWriterFunc) : n.writers[this.mode] ? this.writeFunc = n.writers[this.mode] : console.warn("Persistence Write Error - invalid writer set", this.mode), this.id = "tabulator-" + (i || this.table.element.getAttribute("id") || ""), this.config = {
                        sort: !0 === this.table.options.persistence || this.table.options.persistence.sort,
                        filter: !0 === this.table.options.persistence || this.table.options.persistence.filter,
                        group: !0 === this.table.options.persistence || this.table.options.persistence.group,
                        page: !0 === this.table.options.persistence || this.table.options.persistence.page,
                        columns: !0 === this.table.options.persistence ? ["title", "width", "visible"] : this.table.options.persistence.columns
                    }, this.config.page && (e = this.retreiveData("page")) && (void 0 === e.paginationSize || !0 !== this.config.page && !this.config.page.size || (this.table.options.paginationSize = e.paginationSize), void 0 === e.paginationInitialPage || !0 !== this.config.page && !this.config.page.page || (this.table.options.paginationInitialPage = e.paginationInitialPage)), this.config.group && (e = this.retreiveData("group")) && (void 0 === e.groupBy || !0 !== this.config.group && !this.config.group.groupBy || (this.table.options.groupBy = e.groupBy), void 0 === e.groupStartOpen || !0 !== this.config.group && !this.config.group.groupStartOpen || (this.table.options.groupStartOpen = e.groupStartOpen), void 0 === e.groupHeader || !0 !== this.config.group && !this.config.group.groupHeader || (this.table.options.groupHeader = e.groupHeader)), this.config.columns && (this.table.options.columns = this.load("columns", this.table.options.columns), this.subscribe("column-init", this.initializeColumn.bind(this)), this.subscribe("column-show", this.save.bind(this, "columns")), this.subscribe("column-hide", this.save.bind(this, "columns")), this.subscribe("column-moved", this.save.bind(this, "columns"))), this.subscribe("table-built", this.tableBuilt.bind(this), 0), this.subscribe("table-redraw", this.tableRedraw.bind(this)), this.subscribe("filter-changed", this.eventSave.bind(this, "filter")), this.subscribe("sort-changed", this.eventSave.bind(this, "sort")), this.subscribe("group-changed", this.eventSave.bind(this, "group")), this.subscribe("page-changed", this.eventSave.bind(this, "page")), this.subscribe("column-resized", this.eventSave.bind(this, "columns")), this.subscribe("layout-refreshed", this.eventSave.bind(this, "columns"))
                }
                this.registerTableFunction("getColumnLayout", this.getColumnLayout.bind(this)), this.registerTableFunction("setColumnLayout", this.setColumnLayout.bind(this))
            }
        }, {
            key: "eventSave", value: function (e) {
                this.config[e] && this.save(e)
            }
        }, {
            key: "tableBuilt", value: function () {
                var e, t;
                this.table.options;
                this.config.sort && !1 == !(e = this.load("sort")) && (this.table.options.initialSort = e), this.config.filter && !1 == !(t = this.load("filter")) && (this.table.options.initialFilter = t)
            }
        }, {
            key: "tableRedraw", value: function (e) {
                e && this.config.columns && this.save("columns")
            }
        }, {
            key: "getColumnLayout", value: function () {
                return this.parseColumns(this.table.columnManager.getColumns())
            }
        }, {
            key: "setColumnLayout", value: function (e) {
                return this.table.columnManager.setColumns(this.mergeDefinition(this.table.options.columns, e)), !0
            }
        }, {
            key: "initializeColumn", value: function (e) {
                var t;
                this.config.columns && (this.defWatcherBlock = !0, t = e.getDefinition(), (!0 === this.config.columns ? Object.keys(t) : this.config.columns).forEach((function (e) {
                    var i = Object.getOwnPropertyDescriptor(t, e), n = t[e];
                    i && Object.defineProperty(t, e, {
                        set: function (e) {
                            n = e, this.defWatcherBlock || this.save("columns"), i.set && i.set(e)
                        }, get: function () {
                            return i.get && i.get(), n
                        }
                    })
                })), this.defWatcherBlock = !1)
            }
        }, {
            key: "load", value: function (e, t) {
                var i = this.retreiveData(e);
                return t && (i = i ? this.mergeDefinition(t, i) : t), i
            }
        }, {
            key: "retreiveData", value: function (e) {
                return !!this.readFunc && this.readFunc(this.id, e)
            }
        }, {
            key: "mergeDefinition", value: function (e, t) {
                var i = this, n = [];
                return (t = t || []).forEach((function (t, o) {
                    var a, r = i._findColumn(e, t);
                    r && (!0 === i.config.columns || null == i.config.columns ? (a = Object.keys(r)).push("width") : a = i.config.columns, a.forEach((function (e) {
                        "columns" !== e && void 0 !== t[e] && (r[e] = t[e])
                    })), r.columns && (r.columns = i.mergeDefinition(r.columns, t.columns)), n.push(r))
                })), e.forEach((function (e, o) {
                    i._findColumn(t, e) || (n.length > o ? n.splice(o, 0, e) : n.push(e))
                })), n
            }
        }, {
            key: "_findColumn", value: function (e, t) {
                var i = t.columns ? "group" : t.field ? "field" : "object";
                return e.find((function (e) {
                    switch (i) {
                        case"group":
                            return e.title === t.title && e.columns.length === t.columns.length;
                        case"field":
                            return e.field === t.field;
                        case"object":
                            return e === t
                    }
                }))
            }
        }, {
            key: "save", value: function (e) {
                var t = {};
                switch (e) {
                    case"columns":
                        t = this.parseColumns(this.table.columnManager.getColumns());
                        break;
                    case"filter":
                        t = this.table.modules.filter.getFilters();
                        break;
                    case"sort":
                        t = this.validateSorters(this.table.modules.sort.getSort());
                        break;
                    case"group":
                        t = this.getGroupConfig();
                        break;
                    case"page":
                        t = this.getPageConfig()
                }
                this.writeFunc && this.writeFunc(this.id, e, t)
            }
        }, {
            key: "validateSorters", value: function (e) {
                return e.forEach((function (e) {
                    e.column = e.field, delete e.field
                })), e
            }
        }, {
            key: "getGroupConfig", value: function () {
                var e = {};
                return this.config.group && ((!0 === this.config.group || this.config.group.groupBy) && (e.groupBy = this.table.options.groupBy), (!0 === this.config.group || this.config.group.groupStartOpen) && (e.groupStartOpen = this.table.options.groupStartOpen), (!0 === this.config.group || this.config.group.groupHeader) && (e.groupHeader = this.table.options.groupHeader)), e
            }
        }, {
            key: "getPageConfig", value: function () {
                var e = {};
                return this.config.page && ((!0 === this.config.page || this.config.page.size) && (e.paginationSize = this.table.modules.page.getPageSize()), (!0 === this.config.page || this.config.page.page) && (e.paginationInitialPage = this.table.modules.page.getPage())), e
            }
        }, {
            key: "parseColumns", value: function (e) {
                var t = this, i = [], n = ["headerContextMenu", "headerMenu", "contextMenu", "clickMenu"];
                return e.forEach((function (e) {
                    var o, a = {}, r = e.getDefinition();
                    e.isGroup ? (a.title = r.title, a.columns = t.parseColumns(e.getColumns())) : (a.field = e.getField(), !0 === t.config.columns || null == t.config.columns ? ((o = Object.keys(r)).push("width"), o.push("visible")) : o = t.config.columns, o.forEach((function (t) {
                        switch (t) {
                            case"width":
                                a.width = e.getWidth();
                                break;
                            case"visible":
                                a.visible = e.visible;
                                break;
                            default:
                                "function" != typeof r[t] && -1 === n.indexOf(t) && (a[t] = r[t])
                        }
                    }))), i.push(a)
                })), i
            }
        }]), n
    }(V);
    Ve.moduleName = "persistence", Ve.moduleInitOrder = -10, Ve.readers = Ie, Ve.writers = Ne;
    var We = function (e) {
        a(n, e);
        var i = c(n);

        function n(e) {
            var o;
            return t(this, n), (o = i.call(this, e)).columnSubscribers = {}, o.registerTableOption("rowContextPopup", !1), o.registerTableOption("rowClickPopup", !1), o.registerTableOption("groupContextPopup", !1), o.registerTableOption("groupClickPopup", !1), o.registerColumnOption("headerContextPopup"), o.registerColumnOption("headerClickPopup"), o.registerColumnOption("headerPopup"), o.registerColumnOption("headerPopupIcon"), o.registerColumnOption("contextPopup"), o.registerColumnOption("clickPopup"), o
        }

        return o(n, [{
            key: "initialize", value: function () {
                this.initializeRowWatchers(), this.initializeGroupWatchers(), this.subscribe("column-init", this.initializeColumn.bind(this))
            }
        }, {
            key: "initializeRowWatchers", value: function () {
                this.table.options.rowContextPopup && (this.subscribe("row-contextmenu", this.loadPopupEvent.bind(this, this.table.options.rowContextPopup)), this.table.on("rowTapHold", this.loadPopupEvent.bind(this, this.table.options.rowContextPopup))), this.table.options.rowClickPopup && this.subscribe("row-click", this.loadPopupEvent.bind(this, this.table.options.rowClickPopup))
            }
        }, {
            key: "initializeGroupWatchers", value: function () {
                this.table.options.groupContextPopup && (this.subscribe("group-contextmenu", this.loadPopupEvent.bind(this, this.table.options.groupContextPopup)), this.table.on("groupTapHold", this.loadPopupEvent.bind(this, this.table.options.groupContextPopup))), this.table.options.groupClickPopup && this.subscribe("group-click", this.loadPopupEvent.bind(this, this.table.options.groupClickPopup))
            }
        }, {
            key: "initializeColumn", value: function (e) {
                var t = e.definition;
                t.headerContextPopup && !this.columnSubscribers.headerContextPopup && (this.columnSubscribers.headerContextPopup = this.loadPopupTableColumnEvent.bind(this, "headerContextPopup"), this.subscribe("column-contextmenu", this.columnSubscribers.headerContextPopup), this.table.on("headerTapHold", this.loadPopupTableColumnEvent.bind(this, "headerContextPopup"))), t.headerClickPopup && !this.columnSubscribers.headerClickPopup && (this.columnSubscribers.headerClickPopup = this.loadPopupTableColumnEvent.bind(this, "headerClickPopup"), this.subscribe("column-click", this.columnSubscribers.headerClickPopup)), t.headerPopup && this.initializeColumnHeaderPopup(e), t.contextPopup && !this.columnSubscribers.contextPopup && (this.columnSubscribers.contextPopup = this.loadPopupTableCellEvent.bind(this, "contextPopup"), this.subscribe("cell-contextmenu", this.columnSubscribers.contextPopup), this.table.on("cellTapHold", this.loadPopupTableCellEvent.bind(this, "contextPopup"))), t.clickPopup && !this.columnSubscribers.clickPopup && (this.columnSubscribers.clickPopup = this.loadPopupTableCellEvent.bind(this, "clickPopup"), this.subscribe("cell-click", this.columnSubscribers.clickPopup))
            }
        }, {
            key: "initializeColumnHeaderPopup", value: function (e) {
                var t, i = this, n = e.definition.headerPopupIcon;
                (t = document.createElement("span")).classList.add("tabulator-header-popup-button"), n ? ("function" == typeof n && (n = n(e.getComponent())), n instanceof HTMLElement ? t.appendChild(n) : t.innerHTML = n) : t.innerHTML = "&vellip;", t.addEventListener("click", (function (t) {
                    t.stopPropagation(), t.preventDefault(), i.loadPopupEvent(e.definition.headerPopup, t, e)
                })), e.titleElement.insertBefore(t, e.titleElement.firstChild)
            }
        }, {
            key: "loadPopupTableCellEvent", value: function (e, t, i) {
                i._cell && (i = i._cell), i.column.definition[e] && this.loadPopupEvent(i.column.definition[e], t, i)
            }
        }, {
            key: "loadPopupTableColumnEvent", value: function (e, t, i) {
                i._column && (i = i._column), i.definition[e] && this.loadPopupEvent(i.definition[e], t, i)
            }
        }, {
            key: "loadPopupEvent", value: function (e, t, i) {
                var n;
                i._group ? i = i._group : i._row && (i = i._row), e = "function" == typeof e ? e.call(this.table, t, i.getComponent(), (function (e) {
                    n = e
                })) : e, this.loadPopup(t, i, e, n)
            }
        }, {
            key: "loadPopup", value: function (e, t, i, n) {
                var o, a, r = this, s = !(e instanceof MouseEvent);
                i instanceof HTMLElement ? o = i : (o = document.createElement("div")).innerHTML = i, o.classList.add("tabulator-popup"), o.addEventListener("click", (function (e) {
                    e.stopPropagation()
                })), s || e.preventDefault(), a = this.popup(o), "function" == typeof n && a.renderCallback(n), a.show(e).hideOnBlur((function () {
                    r.dispatchExternal("popupClosed", t.getComponent())
                })), this.dispatchExternal("popupOpened", t.getComponent())
            }
        }]), n
    }(V);
    We.moduleName = "popup";
    var je = function (e) {
        a(n, e);
        var i = c(n);

        function n(e) {
            var o;
            return t(this, n), (o = i.call(this, e)).element = !1, o.manualBlock = !1, o.registerTableOption("printAsHtml", !1), o.registerTableOption("printFormatter", !1), o.registerTableOption("printHeader", !1), o.registerTableOption("printFooter", !1), o.registerTableOption("printStyled", !0), o.registerTableOption("printRowRange", "visible"), o.registerTableOption("printConfig", {}), o.registerColumnOption("print"), o.registerColumnOption("titlePrint"), o
        }

        return o(n, [{
            key: "initialize", value: function () {
                this.table.options.printAsHtml && (window.addEventListener("beforeprint", this.replaceTable.bind(this)), window.addEventListener("afterprint", this.cleanup.bind(this))), this.registerTableFunction("print", this.printFullscreen.bind(this))
            }
        }, {
            key: "replaceTable", value: function () {
                this.manualBlock || (this.element = document.createElement("div"), this.element.classList.add("tabulator-print-table"), this.element.appendChild(this.table.modules.export.genereateTable(this.table.options.printConfig, this.table.options.printStyled, this.table.options.printRowRange, "print")), this.table.element.style.display = "none", this.table.element.parentNode.insertBefore(this.element, this.table.element))
            }
        }, {
            key: "cleanup", value: function () {
                document.body.classList.remove("tabulator-print-fullscreen-hide"), this.element && this.element.parentNode && (this.element.parentNode.removeChild(this.element), this.table.element.style.display = "")
            }
        }, {
            key: "printFullscreen", value: function (e, t, i) {
                var n, o, a = window.scrollX, r = window.scrollY, s = document.createElement("div"),
                    l = document.createElement("div"),
                    u = this.table.modules.export.genereateTable(void 0 !== i ? i : this.table.options.printConfig, void 0 !== t ? t : this.table.options.printStyled, e || this.table.options.printRowRange, "print");
                this.manualBlock = !0, this.element = document.createElement("div"), this.element.classList.add("tabulator-print-fullscreen"), this.table.options.printHeader && (s.classList.add("tabulator-print-header"), "string" == typeof (n = "function" == typeof this.table.options.printHeader ? this.table.options.printHeader.call(this.table) : this.table.options.printHeader) ? s.innerHTML = n : s.appendChild(n), this.element.appendChild(s)), this.element.appendChild(u), this.table.options.printFooter && (l.classList.add("tabulator-print-footer"), "string" == typeof (o = "function" == typeof this.table.options.printFooter ? this.table.options.printFooter.call(this.table) : this.table.options.printFooter) ? l.innerHTML = o : l.appendChild(o), this.element.appendChild(l)), document.body.classList.add("tabulator-print-fullscreen-hide"), document.body.appendChild(this.element), this.table.options.printFormatter && this.table.options.printFormatter(this.element, u), window.print(), this.cleanup(), window.scrollTo(a, r), this.manualBlock = !1
            }
        }]), n
    }(V);
    je.moduleName = "print";
    var Ge = function (e) {
        a(n, e);
        var i = c(n);

        function n(e) {
            var o;
            return t(this, n), (o = i.call(this, e)).data = !1, o.blocked = !1, o.origFuncs = {}, o.currentVersion = 0, o.registerTableOption("reactiveData", !1), o
        }

        return o(n, [{
            key: "initialize", value: function () {
                this.table.options.reactiveData && (this.subscribe("cell-value-save-before", this.block.bind(this)), this.subscribe("cell-value-save-after", this.unblock.bind(this)), this.subscribe("row-data-save-before", this.block.bind(this)), this.subscribe("row-data-save-after", this.unblock.bind(this)), this.subscribe("row-data-init-after", this.watchRow.bind(this)), this.subscribe("data-processing", this.watchData.bind(this)), this.subscribe("table-destroy", this.unwatchData.bind(this)))
            }
        }, {
            key: "watchData", value: function (e) {
                var t, i = this;
                this.currentVersion++, t = this.currentVersion, this.unwatchData(), this.data = e, this.origFuncs.push = e.push, Object.defineProperty(this.data, "push", {
                    enumerable: !1,
                    configurable: !0,
                    value: function () {
                        var n = Array.from(arguments);
                        return i.blocked || t !== i.currentVersion || n.forEach((function (e) {
                            i.table.rowManager.addRowActual(e, !1)
                        })), i.origFuncs.push.apply(e, arguments)
                    }
                }), this.origFuncs.unshift = e.unshift, Object.defineProperty(this.data, "unshift", {
                    enumerable: !1,
                    configurable: !0,
                    value: function () {
                        var n = Array.from(arguments);
                        return i.blocked || t !== i.currentVersion || n.forEach((function (e) {
                            i.table.rowManager.addRowActual(e, !0)
                        })), i.origFuncs.unshift.apply(e, arguments)
                    }
                }), this.origFuncs.shift = e.shift, Object.defineProperty(this.data, "shift", {
                    enumerable: !1,
                    configurable: !0,
                    value: function () {
                        var n;
                        return i.blocked || t !== i.currentVersion || i.data.length && (n = i.table.rowManager.getRowFromDataObject(i.data[0])) && n.deleteActual(), i.origFuncs.shift.call(e)
                    }
                }), this.origFuncs.pop = e.pop, Object.defineProperty(this.data, "pop", {
                    enumerable: !1,
                    configurable: !0,
                    value: function () {
                        var n;
                        return i.blocked || t !== i.currentVersion || i.data.length && (n = i.table.rowManager.getRowFromDataObject(i.data[i.data.length - 1])) && n.deleteActual(), i.origFuncs.pop.call(e)
                    }
                }), this.origFuncs.splice = e.splice, Object.defineProperty(this.data, "splice", {
                    enumerable: !1,
                    configurable: !0,
                    value: function () {
                        var n, o = Array.from(arguments), a = o[0] < 0 ? e.length + o[0] : o[0], r = o[1],
                            s = !!o[2] && o.slice(2);
                        if (!i.blocked && t === i.currentVersion) {
                            if (s && ((n = !!e[a] && i.table.rowManager.getRowFromDataObject(e[a])) ? s.forEach((function (e) {
                                i.table.rowManager.addRowActual(e, !0, n, !0)
                            })) : (s = s.slice().reverse()).forEach((function (e) {
                                i.table.rowManager.addRowActual(e, !0, !1, !0)
                            }))), 0 !== r) {
                                var l = e.slice(a, void 0 === o[1] ? o[1] : a + r);
                                l.forEach((function (e, t) {
                                    var n = i.table.rowManager.getRowFromDataObject(e);
                                    n && n.deleteActual(t !== l.length - 1)
                                }))
                            }
                            (s || 0 !== r) && i.table.rowManager.reRenderInPosition()
                        }
                        return i.origFuncs.splice.apply(e, arguments)
                    }
                })
            }
        }, {
            key: "unwatchData", value: function () {
                if (!1 !== this.data) for (var e in this.origFuncs) Object.defineProperty(this.data, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: this.origFuncs.key
                })
            }
        }, {
            key: "watchRow", value: function (e) {
                var t = e.getData();
                for (var i in this.blocked = !0, t) this.watchKey(e, t, i);
                this.table.options.dataTree && this.watchTreeChildren(e), this.blocked = !1
            }
        }, {
            key: "watchTreeChildren", value: function (e) {
                var t = arguments, i = e.getData()[this.table.options.dataTreeChildField], n = {};

                function o() {
                    this.table.modules.dataTree.initializeRow(e), this.table.modules.dataTree.layoutRow(e), this.table.rowManager.refreshActiveData("tree", !1, !0)
                }

                i && (n.push = i.push, Object.defineProperty(i, "push", {
                    enumerable: !1,
                    configurable: !0,
                    value: function () {
                        var e = n.push.apply(i, t);
                        return o(), e
                    }
                }), n.unshift = i.unshift, Object.defineProperty(i, "unshift", {
                    enumerable: !1,
                    configurable: !0,
                    value: function () {
                        var e = n.unshift.apply(i, t);
                        return o(), e
                    }
                }), n.shift = i.shift, Object.defineProperty(i, "shift", {
                    enumerable: !1,
                    configurable: !0,
                    value: function () {
                        var e = n.shift.call(i);
                        return o(), e
                    }
                }), n.pop = i.pop, Object.defineProperty(i, "pop", {
                    enumerable: !1,
                    configurable: !0,
                    value: function () {
                        var e = n.pop.call(i);
                        return o(), e
                    }
                }), n.splice = i.splice, Object.defineProperty(i, "splice", {
                    enumerable: !1,
                    configurable: !0,
                    value: function () {
                        var e = n.splice.apply(i, t);
                        return o(), e
                    }
                }))
            }
        }, {
            key: "watchKey", value: function (e, t, i) {
                var n = this, o = Object.getOwnPropertyDescriptor(t, i), a = t[i], r = this.currentVersion;
                Object.defineProperty(t, i, {
                    set: function (t) {
                        if (a = t, !n.blocked && r === n.currentVersion) {
                            var s = {};
                            s[i] = t, e.updateData(s)
                        }
                        o.set && o.set(t)
                    }, get: function () {
                        return o.get && o.get(), a
                    }
                })
            }
        }, {
            key: "unwatchRow", value: function (e) {
                var t = e.getData();
                for (var i in t) Object.defineProperty(t, i, {value: t[i]})
            }
        }, {
            key: "block", value: function () {
                this.blocked = !0
            }
        }, {
            key: "unblock", value: function () {
                this.blocked = !1
            }
        }]), n
    }(V);
    Ge.moduleName = "reactiveData";
    var Ue = function (e) {
        a(n, e);
        var i = c(n);

        function n(e) {
            var o;
            return t(this, n), (o = i.call(this, e)).startColumn = !1, o.startX = !1, o.startWidth = !1, o.latestX = !1, o.handle = null, o.initialNextColumn = null, o.nextColumn = null, o.initialized = !1, o.registerColumnOption("resizable", !0), o.registerTableOption("resizableColumnFit", !1), o
        }

        return o(n, [{
            key: "initialize", value: function () {
                this.subscribe("column-rendered", this.layoutColumnHeader.bind(this))
            }
        }, {
            key: "initializeEventWatchers", value: function () {
                this.initialized || (this.subscribe("cell-rendered", this.layoutCellHandles.bind(this)), this.subscribe("cell-delete", this.deInitializeComponent.bind(this)), this.subscribe("cell-height", this.resizeHandle.bind(this)), this.subscribe("column-moved", this.columnLayoutUpdated.bind(this)), this.subscribe("column-hide", this.deInitializeColumn.bind(this)), this.subscribe("column-show", this.columnLayoutUpdated.bind(this)), this.subscribe("column-width", this.columnWidthUpdated.bind(this)), this.subscribe("column-delete", this.deInitializeComponent.bind(this)), this.subscribe("column-height", this.resizeHandle.bind(this)), this.initialized = !0)
            }
        }, {
            key: "layoutCellHandles", value: function (e) {
                "row" === e.row.type && (this.deInitializeComponent(e), this.initializeColumn("cell", e, e.column, e.element))
            }
        }, {
            key: "layoutColumnHeader", value: function (e) {
                e.definition.resizable && (this.initializeEventWatchers(), this.deInitializeComponent(e), this.initializeColumn("header", e, e, e.element))
            }
        }, {
            key: "columnLayoutUpdated", value: function (e) {
                var t = e.prevColumn();
                this.reinitializeColumn(e), t && this.reinitializeColumn(t)
            }
        }, {
            key: "columnWidthUpdated", value: function (e) {
                var t = this;
                e.modules.frozen && (this.table.modules.frozenColumns.leftColumns.includes(e) ? this.table.modules.frozenColumns.leftColumns.forEach((function (e) {
                    t.reinitializeColumn(e)
                })) : this.table.modules.frozenColumns.rightColumns.includes(e) && this.table.modules.frozenColumns.rightColumns.forEach((function (e) {
                    t.reinitializeColumn(e)
                })))
            }
        }, {
            key: "reinitializeColumn", value: function (e) {
                var t = !!e.modules.frozen && e.modules.frozen.marginValue + e.getWidth() + "px";
                e.cells.forEach((function (e) {
                    e.modules.resize && e.modules.resize.handleEl && (t && (e.modules.resize.handleEl.style.left = t), e.element.after(e.modules.resize.handleEl))
                })), e.modules.resize && e.modules.resize.handleEl && (t && (e.modules.resize.handleEl.style.left = t), e.element.after(e.modules.resize.handleEl))
            }
        }, {
            key: "initializeColumn", value: function (e, t, i, n) {
                var o = this, a = i.definition.resizable, r = {}, s = i.getLastColumn();
                if ("header" === e && (r = {variableHeight: "textarea" == i.definition.formatter || i.definition.variableHeight}), (!0 === a || a == e) && this._checkResizability(s)) {
                    var l = document.createElement("span");
                    l.className = "tabulator-col-resize-handle", l.addEventListener("click", (function (e) {
                        e.stopPropagation()
                    }));
                    var u = function (e) {
                        o.startColumn = i, o.initialNextColumn = o.nextColumn = s.nextColumn(), o._mouseDown(e, s, l)
                    };
                    l.addEventListener("mousedown", u), l.addEventListener("touchstart", u, {passive: !0}), l.addEventListener("dblclick", (function (e) {
                        var t = s.getWidth();
                        e.stopPropagation(), s.reinitializeWidth(!0), t !== s.getWidth() && (o.dispatch("column-resized", s), o.table.externalEvents.dispatch("columnResized", s.getComponent()))
                    })), i.modules.frozen && (l.style.position = "absolute", l.style.left = i.modules.frozen.marginValue + i.getWidth() + "px"), r.handleEl = l, n.parentNode && i.visible && n.after(l)
                }
                t.modules.resize = r
            }
        }, {
            key: "deInitializeColumn", value: function (e) {
                var t = this;
                this.deInitializeComponent(e), e.cells.forEach((function (e) {
                    t.deInitializeComponent(e)
                }))
            }
        }, {
            key: "deInitializeComponent", value: function (e) {
                var t;
                e.modules.resize && (t = e.modules.resize.handleEl) && t.parentElement && t.parentElement.removeChild(t)
            }
        }, {
            key: "resizeHandle", value: function (e, t) {
                e.modules.resize && e.modules.resize.handleEl && (e.modules.resize.handleEl.style.height = t)
            }
        }, {
            key: "_checkResizability", value: function (e) {
                return e.definition.resizable
            }
        }, {
            key: "_mouseDown", value: function (e, t, i) {
                var n = this;

                function o(e) {
                    var i, o, a = void 0 === e.screenX ? e.touches[0].screenX : e.screenX, r = a - n.startX,
                        s = a - n.latestX;
                    if (n.latestX = a, n.table.rtl && (r = -r, s = -s), i = t.width == t.minWidth || t.width == t.maxWidth, t.setWidth(n.startWidth + r), o = t.width == t.minWidth || t.width == t.maxWidth, s < 0 && (n.nextColumn = n.initialNextColumn), n.table.options.resizableColumnFit && n.nextColumn && (!i || !o)) {
                        var l = n.nextColumn.getWidth();
                        s > 0 && l <= n.nextColumn.minWidth && (n.nextColumn = n.nextColumn.nextColumn()), n.nextColumn && n.nextColumn.setWidth(n.nextColumn.getWidth() - s)
                    }
                    n.table.columnManager.renderer.rerenderColumns(!0), !n.table.browserSlow && t.modules.resize && t.modules.resize.variableHeight && t.checkCellHeights()
                }

                function a(e) {
                    n.startColumn.modules.edit && (n.startColumn.modules.edit.blocked = !1), n.table.browserSlow && t.modules.resize && t.modules.resize.variableHeight && t.checkCellHeights(), document.body.removeEventListener("mouseup", a), document.body.removeEventListener("mousemove", o), i.removeEventListener("touchmove", o), i.removeEventListener("touchend", a), n.table.element.classList.remove("tabulator-block-select"), n.startWidth !== t.getWidth() && (n.dispatch("column-resized", t), n.table.externalEvents.dispatch("columnResized", t.getComponent()))
                }

                n.table.element.classList.add("tabulator-block-select"), e.stopPropagation(), n.startColumn.modules.edit && (n.startColumn.modules.edit.blocked = !0), n.startX = void 0 === e.screenX ? e.touches[0].screenX : e.screenX, n.latestX = n.startX, n.startWidth = t.getWidth(), document.body.addEventListener("mousemove", o), document.body.addEventListener("mouseup", a), i.addEventListener("touchmove", o, {passive: !0}), i.addEventListener("touchend", a)
            }
        }]), n
    }(V);
    Ue.moduleName = "resizeColumns";
    var Xe = function (e) {
        a(n, e);
        var i = c(n);

        function n(e) {
            var o;
            return t(this, n), (o = i.call(this, e)).startColumn = !1, o.startY = !1, o.startHeight = !1, o.handle = null, o.prevHandle = null, o.registerTableOption("resizableRows", !1), o
        }

        return o(n, [{
            key: "initialize", value: function () {
                this.table.options.resizableRows && this.subscribe("row-layout-after", this.initializeRow.bind(this))
            }
        }, {
            key: "initializeRow", value: function (e) {
                var t = this, i = e.getElement(), n = document.createElement("div");
                n.className = "tabulator-row-resize-handle";
                var o = document.createElement("div");
                o.className = "tabulator-row-resize-handle prev", n.addEventListener("click", (function (e) {
                    e.stopPropagation()
                }));
                var a = function (i) {
                    t.startRow = e, t._mouseDown(i, e, n)
                };
                n.addEventListener("mousedown", a), n.addEventListener("touchstart", a, {passive: !0}), o.addEventListener("click", (function (e) {
                    e.stopPropagation()
                }));
                var r = function (i) {
                    var n = t.table.rowManager.prevDisplayRow(e);
                    n && (t.startRow = n, t._mouseDown(i, n, o))
                };
                o.addEventListener("mousedown", r), o.addEventListener("touchstart", r, {passive: !0}), i.appendChild(n), i.appendChild(o)
            }
        }, {
            key: "_mouseDown", value: function (e, t, i) {
                var n = this;

                function o(e) {
                    t.setHeight(n.startHeight + ((void 0 === e.screenY ? e.touches[0].screenY : e.screenY) - n.startY))
                }

                function a(e) {
                    document.body.removeEventListener("mouseup", o), document.body.removeEventListener("mousemove", o), i.removeEventListener("touchmove", o), i.removeEventListener("touchend", a), n.table.element.classList.remove("tabulator-block-select"), n.dispatchExternal("rowResized", t.getComponent())
                }

                n.table.element.classList.add("tabulator-block-select"), e.stopPropagation(), n.startY = void 0 === e.screenY ? e.touches[0].screenY : e.screenY, n.startHeight = t.getHeight(), document.body.addEventListener("mousemove", o), document.body.addEventListener("mouseup", a), i.addEventListener("touchmove", o, {passive: !0}), i.addEventListener("touchend", a)
            }
        }]), n
    }(V);
    Xe.moduleName = "resizeRows";
    var qe = function (e) {
        a(n, e);
        var i = c(n);

        function n(e) {
            var o;
            return t(this, n), (o = i.call(this, e)).binding = !1, o.observer = !1, o.containerObserver = !1, o.tableHeight = 0, o.tableWidth = 0, o.containerHeight = 0, o.containerWidth = 0, o.autoResize = !1, o.registerTableOption("autoResize", !0), o
        }

        return o(n, [{
            key: "initialize", value: function () {
                var e = this;
                if (this.table.options.autoResize) {
                    var t, i = this.table;
                    this.tableHeight = i.element.clientHeight, this.tableWidth = i.element.clientWidth, i.element.parentNode && (this.containerHeight = i.element.parentNode.clientHeight, this.containerWidth = i.element.parentNode.clientWidth), "undefined" != typeof ResizeObserver && "virtual" === i.rowManager.getRenderMode() ? (this.autoResize = !0, this.observer = new ResizeObserver((function (t) {
                        if (!i.browserMobile || i.browserMobile && !i.modules.edit.currentCell) {
                            var n = Math.floor(t[0].contentRect.height), o = Math.floor(t[0].contentRect.width);
                            e.tableHeight == n && e.tableWidth == o || (e.tableHeight = n, e.tableWidth = o, i.element.parentNode && (e.containerHeight = i.element.parentNode.clientHeight, e.containerWidth = i.element.parentNode.clientWidth), e.table.columnManager.renderer.rerenderColumns(!0), i.redraw())
                        }
                    })), this.observer.observe(i.element), t = window.getComputedStyle(i.element), this.table.element.parentNode && !this.table.rowManager.fixedHeight && (t.getPropertyValue("max-height") || t.getPropertyValue("min-height")) && (this.containerObserver = new ResizeObserver((function (t) {
                        if (!i.browserMobile || i.browserMobile && !i.modules.edit.currentCell) {
                            var n = Math.floor(t[0].contentRect.height), o = Math.floor(t[0].contentRect.width);
                            e.containerHeight == n && e.containerWidth == o || (e.containerHeight = n, e.containerWidth = o, e.tableHeight = i.element.clientHeight, e.tableWidth = i.element.clientWidth), i.columnManager.renderer.rerenderColumns(!0), i.redraw()
                        }
                    })), this.containerObserver.observe(this.table.element.parentNode)), this.subscribe("table-resize", this.tableResized.bind(this))) : (this.binding = function () {
                        (!i.browserMobile || i.browserMobile && !i.modules.edit.currentCell) && (i.columnManager.renderer.rerenderColumns(!0), i.redraw())
                    }, window.addEventListener("resize", this.binding)), this.subscribe("table-destroy", this.clearBindings.bind(this))
                }
            }
        }, {
            key: "tableResized", value: function () {
                this.table.rowManager.redraw()
            }
        }, {
            key: "clearBindings", value: function () {
                this.binding && window.removeEventListener("resize", this.binding), this.observer && this.observer.unobserve(this.table.element), this.containerObserver && this.containerObserver.unobserve(this.table.element.parentNode)
            }
        }]), n
    }(V);
    qe.moduleName = "resizeTable";
    var Ke = function (e) {
        a(n, e);
        var i = c(n);

        function n(e) {
            var o;
            return t(this, n), (o = i.call(this, e)).columns = [], o.hiddenColumns = [], o.mode = "", o.index = 0, o.collapseFormatter = [], o.collapseStartOpen = !0, o.collapseHandleColumn = !1, o.registerTableOption("responsiveLayout", !1), o.registerTableOption("responsiveLayoutCollapseStartOpen", !0), o.registerTableOption("responsiveLayoutCollapseUseFormatters", !0), o.registerTableOption("responsiveLayoutCollapseFormatter", !1), o.registerColumnOption("responsive"), o
        }

        return o(n, [{
            key: "initialize", value: function () {
                this.table.options.responsiveLayout && (this.subscribe("column-layout", this.initializeColumn.bind(this)), this.subscribe("column-show", this.updateColumnVisibility.bind(this)), this.subscribe("column-hide", this.updateColumnVisibility.bind(this)), this.subscribe("columns-loaded", this.initializeResponsivity.bind(this)), this.subscribe("column-moved", this.initializeResponsivity.bind(this)), this.subscribe("column-add", this.initializeResponsivity.bind(this)), this.subscribe("column-delete", this.initializeResponsivity.bind(this)), this.subscribe("table-redrawing", this.tableRedraw.bind(this)), "collapse" === this.table.options.responsiveLayout && (this.subscribe("row-init", this.initializeRow.bind(this)), this.subscribe("row-layout", this.layoutRow.bind(this))))
            }
        }, {
            key: "tableRedraw", value: function (e) {
                -1 === ["fitColumns", "fitDataStretch"].indexOf(this.layoutMode()) && (e || this.update())
            }
        }, {
            key: "initializeResponsivity", value: function () {
                var e = this, t = [];
                this.mode = this.table.options.responsiveLayout, this.collapseFormatter = this.table.options.responsiveLayoutCollapseFormatter || this.formatCollapsedData, this.collapseStartOpen = this.table.options.responsiveLayoutCollapseStartOpen, this.hiddenColumns = [], this.table.columnManager.columnsByIndex.forEach((function (i, n) {
                    i.modules.responsive && i.modules.responsive.order && i.modules.responsive.visible && (i.modules.responsive.index = n, t.push(i), i.visible || "collapse" !== e.mode || e.hiddenColumns.push(i))
                })), t = (t = t.reverse()).sort((function (e, t) {
                    return t.modules.responsive.order - e.modules.responsive.order || t.modules.responsive.index - e.modules.responsive.index
                })), this.columns = t, "collapse" === this.mode && this.generateCollapsedContent();
                var i, n = f(this.table.columnManager.columnsByIndex);
                try {
                    for (n.s(); !(i = n.n()).done;) {
                        var o = i.value;
                        if ("responsiveCollapse" == o.definition.formatter) {
                            this.collapseHandleColumn = o;
                            break
                        }
                    }
                } catch (e) {
                    n.e(e)
                } finally {
                    n.f()
                }
                this.collapseHandleColumn && (this.hiddenColumns.length ? this.collapseHandleColumn.show() : this.collapseHandleColumn.hide())
            }
        }, {
            key: "initializeColumn", value: function (e) {
                var t = e.getDefinition();
                e.modules.responsive = {order: void 0 === t.responsive ? 1 : t.responsive, visible: !1 !== t.visible}
            }
        }, {
            key: "initializeRow", value: function (e) {
                var t;
                "calc" !== e.type && ((t = document.createElement("div")).classList.add("tabulator-responsive-collapse"), e.modules.responsiveLayout = {
                    element: t,
                    open: this.collapseStartOpen
                }, this.collapseStartOpen || (t.style.display = "none"))
            }
        }, {
            key: "layoutRow", value: function (e) {
                var t = e.getElement();
                e.modules.responsiveLayout && (t.appendChild(e.modules.responsiveLayout.element), this.generateCollapsedRowContent(e))
            }
        }, {
            key: "updateColumnVisibility", value: function (e, t) {
                !t && e.modules.responsive && (e.modules.responsive.visible = e.visible, this.initializeResponsivity())
            }
        }, {
            key: "hideColumn", value: function (e) {
                var t = this.hiddenColumns.length;
                e.hide(!1, !0), "collapse" === this.mode && (this.hiddenColumns.unshift(e), this.generateCollapsedContent(), this.collapseHandleColumn && !t && this.collapseHandleColumn.show())
            }
        }, {
            key: "showColumn", value: function (e) {
                var t;
                e.show(!1, !0), e.setWidth(e.getWidth()), "collapse" === this.mode && ((t = this.hiddenColumns.indexOf(e)) > -1 && this.hiddenColumns.splice(t, 1), this.generateCollapsedContent(), this.collapseHandleColumn && !this.hiddenColumns.length && this.collapseHandleColumn.hide())
            }
        }, {
            key: "update", value: function () {
                for (var e = this, t = !0; t;) {
                    var i = "fitColumns" == e.table.modules.layout.getMode() ? e.table.columnManager.getFlexBaseWidth() : e.table.columnManager.getWidth(),
                        n = (e.table.options.headerVisible ? e.table.columnManager.element.clientWidth : e.table.element.clientWidth) - i;
                    if (n < 0) {
                        var o = e.columns[e.index];
                        o ? (e.hideColumn(o), e.index++) : t = !1
                    } else {
                        var a = e.columns[e.index - 1];
                        a && n > 0 && n >= a.getWidth() ? (e.showColumn(a), e.index--) : t = !1
                    }
                    e.table.rowManager.activeRowsCount || e.table.rowManager.renderEmptyScroll()
                }
            }
        }, {
            key: "generateCollapsedContent", value: function () {
                var e = this;
                this.table.rowManager.getDisplayRows().forEach((function (t) {
                    e.generateCollapsedRowContent(t)
                }))
            }
        }, {
            key: "generateCollapsedRowContent", value: function (e) {
                var t, i;
                if (e.modules.responsiveLayout) {
                    for (t = e.modules.responsiveLayout.element; t.firstChild;) t.removeChild(t.firstChild);
                    (i = this.collapseFormatter(this.generateCollapsedRowData(e))) && t.appendChild(i)
                }
            }
        }, {
            key: "generateCollapsedRowData", value: function (e) {
                var t, i = this, n = e.getData(), o = [];
                return this.hiddenColumns.forEach((function (a) {
                    var r = a.getFieldValue(n);
                    if (a.definition.title && a.field) if (a.modules.format && i.table.options.responsiveLayoutCollapseUseFormatters) {
                        t = {
                            value: !1, data: {}, getValue: function () {
                                return r
                            }, getData: function () {
                                return n
                            }, getElement: function () {
                                return document.createElement("div")
                            }, getRow: function () {
                                return e.getComponent()
                            }, getColumn: function () {
                                return a.getComponent()
                            }
                        }, o.push({
                            field: a.field,
                            title: a.definition.title,
                            value: a.modules.format.formatter.call(i.table.modules.format, t, a.modules.format.params, (function (e) {
                                e()
                            }))
                        })
                    } else o.push({field: a.field, title: a.definition.title, value: r})
                })), o
            }
        }, {
            key: "formatCollapsedData", value: function (e) {
                var t = document.createElement("table");
                return e.forEach((function (e) {
                    var i, n = document.createElement("tr"), o = document.createElement("td"),
                        a = document.createElement("td"), r = document.createElement("strong");
                    o.appendChild(r), this.langBind("columns|" + e.field, (function (t) {
                        r.innerHTML = t || e.title
                    })), e.value instanceof Node ? ((i = document.createElement("div")).appendChild(e.value), a.appendChild(i)) : a.innerHTML = e.value, n.appendChild(o), n.appendChild(a), t.appendChild(n)
                }), this), Object.keys(e).length ? t : ""
            }
        }]), n
    }(V);
    Ke.moduleName = "responsiveLayout";
    var Je = function (i) {
        a(r, i);
        var n = c(r);

        function r(e) {
            var i;
            return t(this, r), (i = n.call(this, e)).selecting = !1, i.lastClickedRow = !1, i.selectPrev = [], i.selectedRows = [], i.headerCheckboxElement = null, i.registerTableOption("selectable", "highlight"), i.registerTableOption("selectableRangeMode", "drag"), i.registerTableOption("selectableRollingSelection", !0), i.registerTableOption("selectablePersistence", !0), i.registerTableOption("selectableCheck", (function (e, t) {
                return !0
            })), i.registerTableFunction("selectRow", i.selectRows.bind(l(i))), i.registerTableFunction("deselectRow", i.deselectRows.bind(l(i))), i.registerTableFunction("toggleSelectRow", i.toggleRow.bind(l(i))), i.registerTableFunction("getSelectedRows", i.getSelectedRows.bind(l(i))), i.registerTableFunction("getSelectedData", i.getSelectedData.bind(l(i))), i.registerComponentFunction("row", "select", i.selectRows.bind(l(i))), i.registerComponentFunction("row", "deselect", i.deselectRows.bind(l(i))), i.registerComponentFunction("row", "toggleSelect", i.toggleRow.bind(l(i))), i.registerComponentFunction("row", "isSelected", i.isRowSelected.bind(l(i))), i
        }

        return o(r, [{
            key: "initialize", value: function () {
                !1 !== this.table.options.selectable && (this.subscribe("row-init", this.initializeRow.bind(this)), this.subscribe("row-deleting", this.rowDeleted.bind(this)), this.subscribe("rows-wipe", this.clearSelectionData.bind(this)), this.subscribe("rows-retrieve", this.rowRetrieve.bind(this)), this.table.options.selectable && !this.table.options.selectablePersistence && this.subscribe("data-refreshing", this.deselectRows.bind(this)))
            }
        }, {
            key: "rowRetrieve", value: function (e, t) {
                return "selected" === e ? this.selectedRows : t
            }
        }, {
            key: "rowDeleted", value: function (e) {
                this._deselectRow(e, !0)
            }
        }, {
            key: "clearSelectionData", value: function (e) {
                this.selecting = !1, this.lastClickedRow = !1, this.selectPrev = [], this.selectedRows = [], !0 !== e && this._rowSelectionChanged()
            }
        }, {
            key: "initializeRow", value: function (e) {
                var t = this, i = e.getElement(), n = function e() {
                    setTimeout((function () {
                        t.selecting = !1
                    }), 50), document.body.removeEventListener("mouseup", e)
                };
                e.modules.select = {selected: !1}, t.table.options.selectableCheck.call(this.table, e.getComponent()) ? (i.classList.add("tabulator-selectable"), i.classList.remove("tabulator-unselectable"), t.table.options.selectable && "highlight" != t.table.options.selectable && ("click" === t.table.options.selectableRangeMode ? i.addEventListener("click", this.handleComplexRowClick.bind(this, e)) : (i.addEventListener("click", (function (i) {
                    t.table.modExists("edit") && t.table.modules.edit.getCurrentCell() || t.table._clearSelection(), t.selecting || t.toggleRow(e)
                })), i.addEventListener("mousedown", (function (i) {
                    if (i.shiftKey) return t.table._clearSelection(), t.selecting = !0, t.selectPrev = [], document.body.addEventListener("mouseup", n), document.body.addEventListener("keyup", n), t.toggleRow(e), !1
                })), i.addEventListener("mouseenter", (function (i) {
                    t.selecting && (t.table._clearSelection(), t.toggleRow(e), t.selectPrev[1] == e && t.toggleRow(t.selectPrev[0]))
                })), i.addEventListener("mouseout", (function (i) {
                    t.selecting && (t.table._clearSelection(), t.selectPrev.unshift(e))
                }))))) : (i.classList.add("tabulator-unselectable"), i.classList.remove("tabulator-selectable"))
            }
        }, {
            key: "handleComplexRowClick", value: function (e, t) {
                var i = this;
                if (t.shiftKey) {
                    this.table._clearSelection(), this.lastClickedRow = this.lastClickedRow || e;
                    var n = this.table.rowManager.getDisplayRowIndex(this.lastClickedRow),
                        o = this.table.rowManager.getDisplayRowIndex(e), a = n <= o ? n : o, r = n >= o ? n : o,
                        s = this.table.rowManager.getDisplayRows().slice(0).splice(a, r - a + 1);
                    t.ctrlKey || t.metaKey ? (s.forEach((function (t) {
                        t !== i.lastClickedRow && (!0 === i.table.options.selectable || i.isRowSelected(e) || i.selectedRows.length < i.table.options.selectable) && i.toggleRow(t)
                    })), this.lastClickedRow = e) : (this.deselectRows(void 0, !0), !0 !== this.table.options.selectable && s.length > this.table.options.selectable && (s = s.slice(0, this.table.options.selectable)), this.selectRows(s)), this.table._clearSelection()
                } else t.ctrlKey || t.metaKey ? (this.toggleRow(e), this.lastClickedRow = e) : (this.deselectRows(void 0, !0), this.selectRows(e), this.lastClickedRow = e)
            }
        }, {
            key: "toggleRow", value: function (e) {
                this.table.options.selectableCheck.call(this.table, e.getComponent()) && (e.modules.select && e.modules.select.selected ? this._deselectRow(e) : this._selectRow(e))
            }
        }, {
            key: "selectRows", value: function (t) {
                var i, n = this;
                switch (e(t)) {
                    case"undefined":
                        this.table.rowManager.rows.forEach((function (e) {
                            n._selectRow(e, !0, !0)
                        })), this._rowSelectionChanged();
                        break;
                    case"string":
                        (i = this.table.rowManager.findRow(t)) ? this._selectRow(i, !0, !0) : this.table.rowManager.getRows(t).forEach((function (e) {
                            n._selectRow(e, !0, !0)
                        })), this._rowSelectionChanged();
                        break;
                    default:
                        Array.isArray(t) ? (t.forEach((function (e) {
                            n._selectRow(e, !0, !0)
                        })), this._rowSelectionChanged()) : this._selectRow(t, !1, !0)
                }
            }
        }, {
            key: "_selectRow", value: function (e, t, i) {
                if (!isNaN(this.table.options.selectable) && !0 !== this.table.options.selectable && !i && this.selectedRows.length >= this.table.options.selectable) {
                    if (!this.table.options.selectableRollingSelection) return !1;
                    this._deselectRow(this.selectedRows[0])
                }
                var n = this.table.rowManager.findRow(e);
                n ? -1 == this.selectedRows.indexOf(n) && (n.getElement().classList.add("tabulator-selected"), n.modules.select || (n.modules.select = {}), n.modules.select.selected = !0, n.modules.select.checkboxEl && (n.modules.select.checkboxEl.checked = !0), this.selectedRows.push(n), this.table.options.dataTreeSelectPropagate && this.childRowSelection(n, !0), this.dispatchExternal("rowSelected", n.getComponent()), this._rowSelectionChanged(t)) : t || console.warn("Selection Error - No such row found, ignoring selection:" + e)
            }
        }, {
            key: "isRowSelected", value: function (e) {
                return -1 !== this.selectedRows.indexOf(e)
            }
        }, {
            key: "deselectRows", value: function (e, t) {
                var i, n = this;
                if (void 0 === e) {
                    i = n.selectedRows.length;
                    for (var o = 0; o < i; o++) n._deselectRow(n.selectedRows[0], !0);
                    i && n._rowSelectionChanged(t)
                } else Array.isArray(e) ? (e.forEach((function (e) {
                    n._deselectRow(e, !0)
                })), n._rowSelectionChanged(t)) : n._deselectRow(e, t)
            }
        }, {
            key: "_deselectRow", value: function (e, t) {
                var i, n = this, o = n.table.rowManager.findRow(e);
                o ? (i = n.selectedRows.findIndex((function (e) {
                    return e == o
                }))) > -1 && (o.getElement().classList.remove("tabulator-selected"), o.modules.select || (o.modules.select = {}), o.modules.select.selected = !1, o.modules.select.checkboxEl && (o.modules.select.checkboxEl.checked = !1), n.selectedRows.splice(i, 1), this.table.options.dataTreeSelectPropagate && this.childRowSelection(o, !1), this.dispatchExternal("rowDeselected", o.getComponent()), n._rowSelectionChanged(t)) : t || console.warn("Deselection Error - No such row found, ignoring selection:" + e)
            }
        }, {
            key: "getSelectedData", value: function () {
                var e = [];
                return this.selectedRows.forEach((function (t) {
                    e.push(t.getData())
                })), e
            }
        }, {
            key: "getSelectedRows", value: function () {
                var e = [];
                return this.selectedRows.forEach((function (t) {
                    e.push(t.getComponent())
                })), e
            }
        }, {
            key: "_rowSelectionChanged", value: function (e) {
                this.headerCheckboxElement && (0 === this.selectedRows.length ? (this.headerCheckboxElement.checked = !1, this.headerCheckboxElement.indeterminate = !1) : this.table.rowManager.rows.length === this.selectedRows.length ? (this.headerCheckboxElement.checked = !0, this.headerCheckboxElement.indeterminate = !1) : (this.headerCheckboxElement.indeterminate = !0, this.headerCheckboxElement.checked = !1)), e || this.dispatchExternal("rowSelectionChanged", this.getSelectedData(), this.getSelectedRows())
            }
        }, {
            key: "registerRowSelectCheckbox", value: function (e, t) {
                e._row.modules.select || (e._row.modules.select = {}), e._row.modules.select.checkboxEl = t
            }
        }, {
            key: "registerHeaderSelectCheckbox", value: function (e) {
                this.headerCheckboxElement = e
            }
        }, {
            key: "childRowSelection", value: function (e, t) {
                var i = this.table.modules.dataTree.getChildren(e, !0);
                if (t) {
                    var n, o = f(i);
                    try {
                        for (o.s(); !(n = o.n()).done;) {
                            var a = n.value;
                            this._selectRow(a, !0)
                        }
                    } catch (e) {
                        o.e(e)
                    } finally {
                        o.f()
                    }
                } else {
                    var r, s = f(i);
                    try {
                        for (s.s(); !(r = s.n()).done;) {
                            var l = r.value;
                            this._deselectRow(l, !0)
                        }
                    } catch (e) {
                        s.e(e)
                    } finally {
                        s.f()
                    }
                }
            }
        }]), r
    }(V);

    function Ye(e, t, i, n, o, a, r) {
        var s = window.DateTime || luxon.DateTime, l = r.format || "dd/MM/yyyy HH:mm:ss", u = r.alignEmptyValues, c = 0;
        if (void 0 !== s) {
            if (e = s.isDateTime(e) ? e : "iso" === l ? s.fromISO(String(e)) : s.fromFormat(String(e), l), t = s.isDateTime(t) ? t : "iso" === l ? s.fromISO(String(t)) : s.fromFormat(String(t), l), e.isValid) {
                if (t.isValid) return e - t;
                c = 1
            } else c = t.isValid ? -1 : 0;
            return ("top" === u && "desc" === a || "bottom" === u && "asc" === a) && (c *= -1), c
        }
        console.error("Sort Error - 'datetime' sorter is dependant on luxon.js")
    }

    Je.moduleName = "selectRow";
    var $e = {
        number: function (e, t, i, n, o, a, r) {
            var s = r.alignEmptyValues, l = r.decimalSeparator, u = r.thousandSeparator, c = 0;
            if (e = String(e), t = String(t), u && (e = e.split(u).join(""), t = t.split(u).join("")), l && (e = e.split(l).join("."), t = t.split(l).join(".")), e = parseFloat(e), t = parseFloat(t), isNaN(e)) c = isNaN(t) ? 0 : -1; else {
                if (!isNaN(t)) return e - t;
                c = 1
            }
            return ("top" === s && "desc" === a || "bottom" === s && "asc" === a) && (c *= -1), c
        }, string: function (t, i, n, o, a, r, s) {
            var l, u = s.alignEmptyValues, c = 0;
            if (t) {
                if (i) {
                    switch (e(s.locale)) {
                        case"boolean":
                            s.locale && (l = this.langLocale());
                            break;
                        case"string":
                            l = s.locale
                    }
                    return String(t).toLowerCase().localeCompare(String(i).toLowerCase(), l)
                }
                c = 1
            } else c = i ? -1 : 0;
            return ("top" === u && "desc" === r || "bottom" === u && "asc" === r) && (c *= -1), c
        }, date: function (e, t, i, n, o, a, r) {
            return r.format || (r.format = "dd/MM/yyyy"), Ye.call(this, e, t, i, n, o, a, r)
        }, time: function (e, t, i, n, o, a, r) {
            return r.format || (r.format = "HH:mm"), Ye.call(this, e, t, i, n, o, a, r)
        }, datetime: Ye, boolean: function (e, t, i, n, o, a, r) {
            return (!0 === e || "true" === e || "True" === e || 1 === e ? 1 : 0) - (!0 === t || "true" === t || "True" === t || 1 === t ? 1 : 0)
        }, array: function (e, t, i, n, o, a, r) {
            var s = r.type || "length", l = r.alignEmptyValues, u = 0;

            function c(e) {
                switch (s) {
                    case"length":
                        return e.length;
                    case"sum":
                        return e.reduce((function (e, t) {
                            return e + t
                        }));
                    case"max":
                        return Math.max.apply(null, e);
                    case"min":
                        return Math.min.apply(null, e);
                    case"avg":
                        return e.reduce((function (e, t) {
                            return e + t
                        })) / e.length
                }
            }

            if (Array.isArray(e)) {
                if (Array.isArray(t)) return (e ? c(e) : 0) - (t ? c(t) : 0);
                l = 1
            } else l = Array.isArray(t) ? -1 : 0;
            return ("top" === l && "desc" === a || "bottom" === l && "asc" === a) && (u *= -1), u
        }, exists: function (e, t, i, n, o, a, r) {
            return (void 0 === e ? 0 : 1) - (void 0 === t ? 0 : 1)
        }, alphanum: function (e, t, i, n, o, a, r) {
            var s, l, u, c, h, d = 0, m = /(\d+)|(\D+)/g, p = /\d/, f = r.alignEmptyValues, g = 0;
            if (e || 0 === e) {
                if (t || 0 === t) {
                    if (isFinite(e) && isFinite(t)) return e - t;
                    if ((s = String(e).toLowerCase()) === (l = String(t).toLowerCase())) return 0;
                    if (!p.test(s) || !p.test(l)) return s > l ? 1 : -1;
                    for (s = s.match(m), l = l.match(m), h = s.length > l.length ? l.length : s.length; d < h;) if ((u = s[d]) !== (c = l[d++])) return isFinite(u) && isFinite(c) ? ("0" === u.charAt(0) && (u = "." + u), "0" === c.charAt(0) && (c = "." + c), u - c) : u > c ? 1 : -1;
                    return s.length > l.length
                }
                g = 1
            } else g = t || 0 === t ? -1 : 0;
            return ("top" === f && "desc" === a || "bottom" === f && "asc" === a) && (g *= -1), g
        }
    }, Ze = function (i) {
        a(r, i);
        var n = c(r);

        function r(e) {
            var i;
            return t(this, r), (i = n.call(this, e)).sortList = [], i.changed = !1, i.registerTableOption("sortMode", "local"), i.registerTableOption("initialSort", !1), i.registerTableOption("columnHeaderSortMulti", !0), i.registerTableOption("sortOrderReverse", !1), i.registerTableOption("headerSortElement", "<div class='tabulator-arrow'></div>"), i.registerColumnOption("sorter"), i.registerColumnOption("sorterParams"), i.registerColumnOption("headerSort", !0), i.registerColumnOption("headerSortStartingDir"), i.registerColumnOption("headerSortTristate"), i
        }

        return o(r, [{
            key: "initialize", value: function () {
                this.subscribe("column-layout", this.initializeColumn.bind(this)), this.subscribe("table-built", this.tableBuilt.bind(this)), this.registerDataHandler(this.sort.bind(this), 20), this.registerTableFunction("setSort", this.userSetSort.bind(this)), this.registerTableFunction("getSorters", this.getSort.bind(this)), this.registerTableFunction("clearSort", this.clearSort.bind(this)), "remote" === this.table.options.sortMode && this.subscribe("data-params", this.remoteSortParams.bind(this))
            }
        }, {
            key: "tableBuilt", value: function () {
                this.table.options.initialSort && this.setSort(this.table.options.initialSort)
            }
        }, {
            key: "remoteSortParams", value: function (e, t, i, n) {
                var o = this.getSort();
                return o.forEach((function (e) {
                    delete e.column
                })), n.sort = o, n
            }
        }, {
            key: "userSetSort", value: function (e, t) {
                this.setSort(e, t), this.refreshSort()
            }
        }, {
            key: "clearSort", value: function () {
                this.clear(), this.refreshSort()
            }
        }, {
            key: "initializeColumn", value: function (t) {
                var i, n, o = this, a = !1;
                switch (e(t.definition.sorter)) {
                    case"string":
                        r.sorters[t.definition.sorter] ? a = r.sorters[t.definition.sorter] : console.warn("Sort Error - No such sorter found: ", t.definition.sorter);
                        break;
                    case"function":
                        a = t.definition.sorter
                }
                t.modules.sort = {
                    sorter: a,
                    dir: "none",
                    params: t.definition.sorterParams || {},
                    startingDir: t.definition.headerSortStartingDir || "asc",
                    tristate: t.definition.headerSortTristate
                }, !1 !== t.definition.headerSort && ((i = t.getElement()).classList.add("tabulator-sortable"), (n = document.createElement("div")).classList.add("tabulator-col-sorter"), "object" == e(this.table.options.headerSortElement) ? n.appendChild(this.table.options.headerSortElement) : n.innerHTML = this.table.options.headerSortElement, t.titleHolderElement.appendChild(n), t.modules.sort.element = n, i.addEventListener("click", (function (e) {
                    var i = "", n = [], a = !1;
                    if (t.modules.sort) {
                        if (t.modules.sort.tristate) i = "none" == t.modules.sort.dir ? t.modules.sort.startingDir : t.modules.sort.dir == t.modules.sort.startingDir ? "asc" == t.modules.sort.dir ? "desc" : "asc" : "none"; else switch (t.modules.sort.dir) {
                            case"asc":
                                i = "desc";
                                break;
                            case"desc":
                                i = "asc";
                                break;
                            default:
                                i = t.modules.sort.startingDir
                        }
                        o.table.options.columnHeaderSortMulti && (e.shiftKey || e.ctrlKey) ? ((a = (n = o.getSort()).findIndex((function (e) {
                            return e.field === t.getField()
                        }))) > -1 ? (n[a].dir = i, a != n.length - 1 && (a = n.splice(a, 1)[0], "none" != i && n.push(a))) : "none" != i && n.push({
                            column: t,
                            dir: i
                        }), o.setSort(n)) : "none" == i ? o.clear() : o.setSort(t, i), o.refreshSort()
                    }
                })))
            }
        }, {
            key: "refreshSort", value: function () {
                "remote" === this.table.options.sortMode ? this.reloadData(null, !1, !1) : this.refreshData(!0)
            }
        }, {
            key: "hasChanged", value: function () {
                var e = this.changed;
                return this.changed = !1, e
            }
        }, {
            key: "getSort", value: function () {
                var e = [];
                return this.sortList.forEach((function (t) {
                    t.column && e.push({column: t.column.getComponent(), field: t.column.getField(), dir: t.dir})
                })), e
            }
        }, {
            key: "setSort", value: function (e, t) {
                var i = this, n = [];
                Array.isArray(e) || (e = [{column: e, dir: t}]), e.forEach((function (e) {
                    var t;
                    (t = i.table.columnManager.findColumn(e.column)) ? (e.column = t, n.push(e), i.changed = !0) : console.warn("Sort Warning - Sort field does not exist and is being ignored: ", e.column)
                })), i.sortList = n, this.dispatch("sort-changed")
            }
        }, {
            key: "clear", value: function () {
                this.setSort([])
            }
        }, {
            key: "findSorter", value: function (t) {
                var i, n = this.table.rowManager.activeRows[0], o = "string";
                if (n && (n = n.getData(), t.getField())) switch (e(i = t.getFieldValue(n))) {
                    case"undefined":
                        o = "string";
                        break;
                    case"boolean":
                        o = "boolean";
                        break;
                    default:
                        isNaN(i) || "" === i ? i.match(/((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+$/i) && (o = "alphanum") : o = "number"
                }
                return r.sorters[o]
            }
        }, {
            key: "sort", value: function (e) {
                var t = this, i = this.table.options.sortOrderReverse ? t.sortList.slice().reverse() : t.sortList,
                    n = [], o = [];
                return this.subscribedExternal("dataSorting") && this.dispatchExternal("dataSorting", t.getSort()), t.clearColumnHeaders(), "remote" !== this.table.options.sortMode ? (i.forEach((function (e, i) {
                    var o = e.column.modules.sort;
                    e.column && o && (o.sorter || (o.sorter = t.findSorter(e.column)), e.params = "function" == typeof o.params ? o.params(e.column.getComponent(), e.dir) : o.params, n.push(e)), t.setColumnHeader(e.column, e.dir)
                })), n.length && t._sortItems(e, n)) : i.forEach((function (e, i) {
                    t.setColumnHeader(e.column, e.dir)
                })), this.subscribedExternal("dataSorted") && (e.forEach((function (e) {
                    o.push(e.getComponent())
                })), this.dispatchExternal("dataSorted", t.getSort(), o)), e
            }
        }, {
            key: "clearColumnHeaders", value: function () {
                this.table.columnManager.getRealColumns().forEach((function (e) {
                    e.modules.sort && (e.modules.sort.dir = "none", e.getElement().setAttribute("aria-sort", "none"))
                }))
            }
        }, {
            key: "setColumnHeader", value: function (e, t) {
                e.modules.sort.dir = t, e.getElement().setAttribute("aria-sort", "asc" === t ? "ascending" : "descending")
            }
        }, {
            key: "_sortItems", value: function (e, t) {
                var i = this, n = t.length - 1;
                e.sort((function (e, o) {
                    for (var a, r = n; r >= 0; r--) {
                        var s = t[r];
                        if (0 !== (a = i._sortRow(e, o, s.column, s.dir, s.params))) break
                    }
                    return a
                }))
            }
        }, {
            key: "_sortRow", value: function (e, t, i, n, o) {
                var a, r, s = "asc" == n ? e : t, l = "asc" == n ? t : e;
                return e = void 0 !== (e = i.getFieldValue(s.getData())) ? e : "", t = void 0 !== (t = i.getFieldValue(l.getData())) ? t : "", a = s.getComponent(), r = l.getComponent(), i.modules.sort.sorter.call(this, e, t, a, r, i.getComponent(), n, o)
            }
        }]), r
    }(V);
    Ze.moduleName = "sort", Ze.sorters = $e;
    var Qe = function (e) {
        a(n, e);
        var i = c(n);

        function n(e) {
            var o;
            return t(this, n), (o = i.call(this, e)).tooltipSubscriber = null, o.headerSubscriber = null, o.timeout = null, o.popupInstance = null, o.registerTableOption("tooltipGenerationMode", void 0), o.registerTableOption("tooltipDelay", 300), o.registerColumnOption("tooltip"), o.registerColumnOption("headerTooltip"), o
        }

        return o(n, [{
            key: "initialize", value: function () {
                this.deprecationCheck(), this.subscribe("column-init", this.initializeColumn.bind(this))
            }
        }, {
            key: "deprecationCheck", value: function () {
                void 0 !== this.table.options.tooltipGenerationMode && console.warn("Use of the tooltipGenerationMode option is now deprecated. This option is no longer needed as tooltips are always generated on hover now")
            }
        }, {
            key: "initializeColumn", value: function (e) {
                e.definition.headerTooltip && !this.headerSubscriber && (this.headerSubscriber = !0, this.subscribe("column-mousemove", this.mousemoveCheck.bind(this, "headerTooltip")), this.subscribe("column-mouseout", this.mouseoutCheck.bind(this, "headerTooltip"))), e.definition.tooltip && !this.tooltipSubscriber && (this.tooltipSubscriber = !0, this.subscribe("cell-mousemove", this.mousemoveCheck.bind(this, "tooltip")), this.subscribe("cell-mouseout", this.mouseoutCheck.bind(this, "tooltip")))
            }
        }, {
            key: "mousemoveCheck", value: function (e, t, i) {
                var n = "tooltip" === e ? i.column.definition.tooltip : i.definition.headerTooltip;
                n && (this.clearPopup(), this.timeout = setTimeout(this.loadTooltip.bind(this, t, i, n), this.table.options.tooltipDelay))
            }
        }, {
            key: "mouseoutCheck", value: function (e, t, i) {
                this.popupInstance || this.clearPopup()
            }
        }, {
            key: "clearPopup", value: function (e, t, i) {
                clearTimeout(this.timeout), this.timeout = null, this.popupInstance && this.popupInstance.hide()
            }
        }, {
            key: "loadTooltip", value: function (e, t, i) {
                var n, o, a, r = this;
                "function" == typeof i && (i = i(e, t.getComponent(), (function (e) {
                    o = e
                }))), i instanceof HTMLElement ? n = i : (n = document.createElement("div"), !0 === i && (t instanceof w ? i = t.value : t.definition.field ? this.langBind("columns|" + t.definition.field, (function (e) {
                    n.innerHTML = i = e || t.definition.title
                })) : i = t.definition.title), n.innerHTML = i), (i || 0 === i || "0" === i || !1 === i) && (n.classList.add("tabulator-tooltip"), n.addEventListener("mousemove", (function (e) {
                    return e.preventDefault()
                })), this.popupInstance = this.popup(n), "function" == typeof o && this.popupInstance.renderCallback(o), a = this.popupInstance.containerEventCoords(e), this.popupInstance.show(a.x + 15, a.y + 15).hideOnBlur((function () {
                    r.dispatchExternal("TooltipClosed", t.getComponent()), r.popupInstance = null
                })), this.dispatchExternal("TooltipOpened", t.getComponent()))
            }
        }]), n
    }(V);
    Qe.moduleName = "tooltip";
    var et = {
        integer: function (e, t, i) {
            return "" === t || null == t || "number" == typeof (t = Number(t)) && isFinite(t) && Math.floor(t) === t
        }, float: function (e, t, i) {
            return "" === t || null == t || "number" == typeof (t = Number(t)) && isFinite(t) && t % 1 != 0
        }, numeric: function (e, t, i) {
            return "" === t || null == t || !isNaN(t)
        }, string: function (e, t, i) {
            return "" === t || null == t || isNaN(t)
        }, max: function (e, t, i) {
            return "" === t || null == t || parseFloat(t) <= i
        }, min: function (e, t, i) {
            return "" === t || null == t || parseFloat(t) >= i
        }, starts: function (e, t, i) {
            return "" === t || null == t || String(t).toLowerCase().startsWith(String(i).toLowerCase())
        }, ends: function (e, t, i) {
            return "" === t || null == t || String(t).toLowerCase().endsWith(String(i).toLowerCase())
        }, minLength: function (e, t, i) {
            return "" === t || null == t || String(t).length >= i
        }, maxLength: function (e, t, i) {
            return "" === t || null == t || String(t).length <= i
        }, in: function (e, t, i) {
            return "" === t || null == t || ("string" == typeof i && (i = i.split("|")), "" === t || i.indexOf(t) > -1)
        }, regex: function (e, t, i) {
            return "" === t || null == t || new RegExp(i).test(t)
        }, unique: function (e, t, i) {
            if ("" === t || null == t) return !0;
            var n = !0, o = e.getData(), a = e.getColumn()._getSelf();
            return this.table.rowManager.rows.forEach((function (e) {
                var i = e.getData();
                i !== o && t == a.getFieldValue(i) && (n = !1)
            })), n
        }, required: function (e, t, i) {
            return "" !== t && null != t
        }
    }, tt = function (i) {
        a(r, i);
        var n = c(r);

        function r(e) {
            var i;
            return t(this, r), (i = n.call(this, e)).invalidCells = [], i.registerTableOption("validationMode", "blocking"), i.registerColumnOption("validator"), i.registerTableFunction("getInvalidCells", i.getInvalidCells.bind(l(i))), i.registerTableFunction("clearCellValidation", i.userClearCellValidation.bind(l(i))), i.registerTableFunction("validate", i.userValidate.bind(l(i))), i.registerComponentFunction("cell", "isValid", i.cellIsValid.bind(l(i))), i.registerComponentFunction("cell", "clearValidation", i.clearValidation.bind(l(i))), i.registerComponentFunction("cell", "validate", i.cellValidate.bind(l(i))), i.registerComponentFunction("column", "validate", i.columnValidate.bind(l(i))), i.registerComponentFunction("row", "validate", i.rowValidate.bind(l(i))), i
        }

        return o(r, [{
            key: "initialize", value: function () {
                this.subscribe("cell-delete", this.clearValidation.bind(this)), this.subscribe("column-layout", this.initializeColumnCheck.bind(this)), this.subscribe("edit-success", this.editValidate.bind(this)), this.subscribe("edit-editor-clear", this.editorClear.bind(this)), this.subscribe("edit-edited-clear", this.editedClear.bind(this))
            }
        }, {
            key: "editValidate", value: function (e, t, i) {
                var n = this,
                    o = "manual" === this.table.options.validationMode || this.validate(e.column.modules.validate, e, t);
                return !0 !== o && setTimeout((function () {
                    e.getElement().classList.add("tabulator-validation-fail"), n.dispatchExternal("validationFailed", e.getComponent(), t, o)
                })), o
            }
        }, {
            key: "editorClear", value: function (e, t) {
                t && e.column.modules.validate && this.cellValidate(e), e.getElement().classList.remove("tabulator-validation-fail")
            }
        }, {
            key: "editedClear", value: function (e) {
                e.modules.validate && (e.modules.validate.invalid = !1)
            }
        }, {
            key: "cellIsValid", value: function (e) {
                return e.modules.validate && e.modules.validate.invalid || !0
            }
        }, {
            key: "cellValidate", value: function (e) {
                return this.validate(e.column.modules.validate, e, e.getValue())
            }
        }, {
            key: "columnValidate", value: function (e) {
                var t = this, i = [];
                return e.cells.forEach((function (e) {
                    !0 !== t.cellValidate(e) && i.push(e.getComponent())
                })), !i.length || i
            }
        }, {
            key: "rowValidate", value: function (e) {
                var t = this, i = [];
                return e.cells.forEach((function (e) {
                    !0 !== t.cellValidate(e) && i.push(e.getComponent())
                })), !i.length || i
            }
        }, {
            key: "userClearCellValidation", value: function (e) {
                var t = this;
                e || (e = this.getInvalidCells()), Array.isArray(e) || (e = [e]), e.forEach((function (e) {
                    t.clearValidation(e._getSelf())
                }))
            }
        }, {
            key: "userValidate", value: function (e) {
                var t = [];
                return this.table.rowManager.rows.forEach((function (e) {
                    var i = (e = e.getComponent()).validate();
                    !0 !== i && (t = t.concat(i))
                })), !t.length || t
            }
        }, {
            key: "initializeColumnCheck", value: function (e) {
                void 0 !== e.definition.validator && this.initializeColumn(e)
            }
        }, {
            key: "initializeColumn", value: function (e) {
                var t, i = this, n = [];
                e.definition.validator && (Array.isArray(e.definition.validator) ? e.definition.validator.forEach((function (e) {
                    (t = i._extractValidator(e)) && n.push(t)
                })) : (t = this._extractValidator(e.definition.validator)) && n.push(t), e.modules.validate = !!n.length && n)
            }
        }, {
            key: "_extractValidator", value: function (t) {
                var i, n, o;
                switch (e(t)) {
                    case"string":
                        return (o = t.indexOf(":")) > -1 ? (i = t.substring(0, o), n = t.substring(o + 1)) : i = t, this._buildValidator(i, n);
                    case"function":
                        return this._buildValidator(t);
                    case"object":
                        return this._buildValidator(t.type, t.parameters)
                }
            }
        }, {
            key: "_buildValidator", value: function (e, t) {
                var i = "function" == typeof e ? e : r.validators[e];
                return i ? {
                    type: "function" == typeof e ? "function" : e,
                    func: i,
                    params: t
                } : (console.warn("Validator Setup Error - No matching validator found:", e), !1)
            }
        }, {
            key: "validate", value: function (e, t, i) {
                var n = this, o = [], a = this.invalidCells.indexOf(t);
                return e && e.forEach((function (e) {
                    e.func.call(n, t.getComponent(), i, e.params) || o.push({type: e.type, parameters: e.params})
                })), t.modules.validate || (t.modules.validate = {}), o.length ? (t.modules.validate.invalid = o, "manual" !== this.table.options.validationMode && t.getElement().classList.add("tabulator-validation-fail"), -1 == a && this.invalidCells.push(t)) : (t.modules.validate.invalid = !1, t.getElement().classList.remove("tabulator-validation-fail"), a > -1 && this.invalidCells.splice(a, 1)), !o.length || o
            }
        }, {
            key: "getInvalidCells", value: function () {
                var e = [];
                return this.invalidCells.forEach((function (t) {
                    e.push(t.getComponent())
                })), e
            }
        }, {
            key: "clearValidation", value: function (e) {
                var t;
                e.modules.validate && e.modules.validate.invalid && (e.getElement().classList.remove("tabulator-validation-fail"), e.modules.validate.invalid = !1, (t = this.invalidCells.indexOf(e)) > -1 && this.invalidCells.splice(t, 1))
            }
        }]), r
    }(V);
    tt.moduleName = "validate", tt.validators = et;
    var it = Object.freeze({
        __proto__: null,
        AccessorModule: $,
        AjaxModule: ne,
        ClipboardModule: oe,
        ColumnCalcsModule: se,
        DataTreeModule: le,
        DownloadModule: ce,
        EditModule: pe,
        ExportModule: ve,
        FilterModule: ye,
        FormatModule: Ce,
        FrozenColumnsModule: ke,
        FrozenRowsModule: Ee,
        GroupRowsModule: Te,
        HistoryModule: Me,
        HtmlTableImportModule: Le,
        ImportModule: Se,
        InteractionModule: Pe,
        KeybindingsModule: ze,
        MenuModule: Fe,
        MoveColumnsModule: He,
        MoveRowsModule: _e,
        MutatorModule: Oe,
        PageModule: Be,
        PersistenceModule: Ve,
        PopupModule: We,
        PrintModule: je,
        ReactiveDataModule: Ge,
        ResizeColumnsModule: Ue,
        ResizeRowsModule: Xe,
        ResizeTableModule: qe,
        ResponsiveLayoutModule: Ke,
        SelectRowModule: Je,
        SortModule: Ze,
        TooltipModule: Qe,
        ValidateModule: tt
    }), nt = function (e) {
        a(n, e);
        var i = c(n);

        function n() {
            return t(this, n), i.apply(this, arguments)
        }

        return n
    }(Y);
    return new K(nt, it), nt
}));
//# sourceMappingURL=tabulator.min.js.map

