'use strict';function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$3 = {
  name: "RamButton",
  props: {
    text: {
      type: String,
      default: "Click me"
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
    },
    iconLoading: {
      type: String,
      required: true
    },
    action: {
      type: Function,
      default: function _default() {}
    },
    height: {
      type: String,
      default: "56px"
    },
    width: {
      type: String,
      default: "228px"
    },
    bgColor: {
      type: String,
      default: "#18C746"
    },
    color: {
      type: String,
      default: "#FFFFFF"
    },
    border: {
      type: String,
      default: "none"
    },
    colorHover: {
      type: String,
      default: "#30df5e"
    }
  },
  computed: {
    styles: function styles() {
      return {
        height: this.height,
        width: this.width,
        backgroundColor: this.bgColor,
        color: this.color,
        border: this.border
      };
    }
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group = css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__$3 = script$3;
/* template */

var __vue_render__$3 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('button', {
    staticClass: "ram-button",
    style: _vm.styles,
    on: {
      "click": _vm.action
    }
  }, [_vm._ssrNode("<div data-v-42982810>" + _vm._ssrEscape(_vm._s(_vm.text)) + "</div> " + (_vm.isLoading ? "<img" + _vm._ssrAttr("src", require("@/" + _vm.iconLoading)) + " class=\"bt-icon-loading\" data-v-42982810>" : _vm.icon && !_vm.isLoading ? "<img" + _vm._ssrAttr("src", require("@/" + _vm.icon)) + " class=\"bt-icon\" data-v-42982810>" : "<!---->"))]);
};

var __vue_staticRenderFns__$3 = [];
/* style */

var __vue_inject_styles__$3 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-42982810_0", {
    source: "button[data-v-42982810]{display:flex;justify-content:center;align-items:center;border-radius:100px;font-size:\"16px\";cursor:pointer;padding:\"0 25px\"}img[data-v-42982810]{width:24px;height:24px;margin-inline-start:30px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$3 = "data-v-42982810";
/* module identifier */

var __vue_module_identifier__$3 = "data-v-42982810";
/* functional template */

var __vue_is_functional_template__$3 = false;
/* style inject shadow dom */

var __vue_component__$3 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
var script$2 = {
  name: "RamTextField",
  props: {
    value: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: ""
    },
    isRequired: {
      type: Boolean,
      default: false
    },
    pattern: {
      type: String,
      default: "{}"
    }
  },
  methods: {
    onChange: function onChange(ev) {
      var value = ev.target.value;
      this.$emit("input", value);
    }
  }
};/* script */
var __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "ram-text-field"
  }, [_vm._ssrNode("<input" + _vm._ssrAttr("type", _vm.type) + _vm._ssrAttr("placeholder", _vm.placeholder) + _vm._ssrAttr("required", _vm.isRequired) + _vm._ssrAttr("pattern", _vm.pattern) + _vm._ssrAttr("value", _vm.value) + " data-v-31b1a2df>")]);
};

var __vue_staticRenderFns__$2 = [];
/* style */

var __vue_inject_styles__$2 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-31b1a2df_0", {
    source: "input[data-v-31b1a2df]{direction:rtl;box-sizing:border-box;height:28.5px;width:100%;font-size:18px;color:#23445a;border:none;border-bottom:solid 1px #23445a;padding:0 0 10px 4px;outline:0}input[data-v-31b1a2df]:focus{border-bottom:solid 1px #0078c8}input[data-v-31b1a2df]::placeholder{color:#23445a}input[data-v-31b1a2df]:not(:placeholder-shown){border-color:#e01f1f}input[data-v-31b1a2df]:required:valid{border-color:#18c746}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$2 = "data-v-31b1a2df";
/* module identifier */

var __vue_module_identifier__$2 = "data-v-31b1a2df";
/* functional template */

var __vue_is_functional_template__$2 = false;
/* style inject shadow dom */

var __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, createInjectorSSR, undefined);var script$1 = {
  name: "RamForm",
  data: function data() {
    return {
      form: null,
      isValid: false,
      errorMap: null
    };
  },
  created: function created() {
    var form = {};
    this.fields.forEach(function (field) {
      return form[field.name] = "";
    });
    this.form = form;
  },
  props: {
    onSubmit: {
      type: Function,
      default: function _default() {},
      required: true
    },
    fields: {
      type: Array
    }
  },
  methods: {
    validateForm: function validateForm() {
      var _this = this;

      var errorMap = {};
      var fields = Object.keys(this.form);
      fields.forEach(function (field) {
        if (field === "email" && !_this.validateEmail(_this.form[field])) {
          errorMap[field] = "כתובת מייל אינה תקינה";
        } else if (field === "password" && _this.form[field].length < 6) {
          errorMap[field] = "סיסמה חייבת להכיל לפחות 6 תווים";
        }

        if (!_this.form[field]) errorMap[field] = "".concat(field, " is empty");
      });
      this.isValid = Object.keys(errorMap).length ? false : true;

      if (this.isValid) {
        this.errorMap = null;
        this.onSubmit(_objectSpread2({}, this.form));
      } else {
        this.errorMap = errorMap;
      }
    },
    validateEmail: function validateEmail(email) {
      var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return reg.test(email);
    }
  },
  components: {
    RamTextField: __vue_component__$2
  }
};/* script */
var __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('form', {
    staticClass: "ram-form",
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.validateForm();
      }
    }
  }, [_vm._l(_vm.fields, function (field) {
    return _vm._ssrNode("<div" + _vm._ssrClass(null, "ram-tf ram-tf-" + field.name) + " data-v-d54d6d22>", "</div>", [_c('Ram-text-field', {
      attrs: {
        "type": field.type,
        "placeholder": field.placeholder,
        "isRequired": field.isRequired,
        "pattern": field.pattern
      },
      model: {
        value: _vm.form[field.name],
        callback: function callback($$v) {
          _vm.$set(_vm.form, field.name, $$v);
        },
        expression: "form[field.name]"
      }
    }), _vm._ssrNode(" <div class=\"error-info-container\" data-v-d54d6d22>" + (_vm.errorMap ? "<span class=\"field-error\" data-v-d54d6d22>" + _vm._ssrEscape(_vm._s(_vm.errorMap[field.name])) + "</span>" : "<!---->") + " " + (field.info ? field.isInfoLink ? "<a class=\"field-info info-link\" data-v-d54d6d22>" + _vm._ssrEscape(_vm._s(field.info)) + "</a>" : "<span class=\"field-info info-span\" data-v-d54d6d22>" + _vm._ssrEscape(_vm._s(field.info)) + "</span>" : "<!---->") + "</div>")], 2);
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"test-red\" data-v-d54d6d22>", "</div>", [_vm._t("default")], 2)], 2);
};

var __vue_staticRenderFns__$1 = [];
/* style */

var __vue_inject_styles__$1 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-d54d6d22_0", {
    source: ".error-info-container[data-v-d54d6d22]{display:flex;flex-direction:column}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$1 = "data-v-d54d6d22";
/* module identifier */

var __vue_module_identifier__$1 = "data-v-d54d6d22";
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject shadow dom */

var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
var script = {
  props: {
    icon: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: "100px"
    }
  }
};/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('section', {
    staticClass: "ram-loader"
  }, [_vm._ssrNode("<img" + _vm._ssrAttr("src", require("@/" + _vm.icon)) + _vm._ssrAttr("width", _vm.width) + ">")]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = "data-v-2005f68a";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);/* eslint-disable import/prefer-default-export */var components$1=/*#__PURE__*/Object.freeze({__proto__:null,RamButton: __vue_component__$3,RamTextField: __vue_component__$2,RamForm: __vue_component__$1,RamLoader: __vue_component__});var install = function installVueSfcRamiTest(Vue) {
  Object.entries(components$1).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()
var components=/*#__PURE__*/Object.freeze({__proto__:null,'default': install,RamButton: __vue_component__$3,RamTextField: __vue_component__$2,RamForm: __vue_component__$1,RamLoader: __vue_component__});// only expose one global var, with component exports exposed as properties of
// that global var (eg. plugin.component)

Object.entries(components).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];

  if (componentName !== 'default') {
    install[componentName] = component;
  }
});module.exports=install;