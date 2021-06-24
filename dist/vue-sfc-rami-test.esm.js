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
      default: () => {}
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
    styles() {
      return {
        height: this.height,
        width: this.width,
        backgroundColor: this.bgColor,
        color: this.color,
        border: this.border
      };
    }

  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__$3 = script$3;
/* template */

var __vue_render__$3 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('button', {
    staticClass: "ram-button",
    style: _vm.styles,
    on: {
      "click": _vm.action
    }
  }, [_c('div', [_vm._v(_vm._s(_vm.text))]), _vm._v(" "), [_vm.isLoading ? _c('img', {
    staticClass: "bt-icon-loading",
    attrs: {
      "src": require("@/" + _vm.iconLoading)
    }
  }) : _vm.icon && !_vm.isLoading ? _c('img', {
    staticClass: "bt-icon",
    attrs: {
      "src": require("@/" + _vm.icon)
    }
  }) : _vm._e()]], 2);
};

var __vue_staticRenderFns__$3 = [];
/* style */

const __vue_inject_styles__$3 = function (inject) {
  if (!inject) return;
  inject("data-v-42982810_0", {
    source: "button[data-v-42982810]{display:flex;justify-content:center;align-items:center;border-radius:100px;font-size:\"16px\";cursor:pointer;padding:\"0 25px\"}img[data-v-42982810]{width:24px;height:24px;margin-inline-start:30px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$3 = "data-v-42982810";
/* module identifier */

const __vue_module_identifier__$3 = undefined;
/* functional template */

const __vue_is_functional_template__$3 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$3 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, createInjector, undefined, undefined);

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
    onChange(ev) {
      const value = ev.target.value;
      this.$emit("input", value);
    }

  }
};

/* script */
const __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "ram-text-field"
  }, [_c('input', {
    attrs: {
      "type": _vm.type,
      "placeholder": _vm.placeholder,
      "required": _vm.isRequired,
      "pattern": _vm.pattern
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "input": _vm.onChange
    }
  })]);
};

var __vue_staticRenderFns__$2 = [];
/* style */

const __vue_inject_styles__$2 = function (inject) {
  if (!inject) return;
  inject("data-v-31b1a2df_0", {
    source: "input[data-v-31b1a2df]{direction:rtl;box-sizing:border-box;height:28.5px;width:100%;font-size:18px;color:#23445a;border:none;border-bottom:solid 1px #23445a;padding:0 0 10px 4px;outline:0}input[data-v-31b1a2df]:focus{border-bottom:solid 1px #0078c8}input[data-v-31b1a2df]::placeholder{color:#23445a}input[data-v-31b1a2df]:not(:placeholder-shown){border-color:#e01f1f}input[data-v-31b1a2df]:required:valid{border-color:#18c746}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$2 = "data-v-31b1a2df";
/* module identifier */

const __vue_module_identifier__$2 = undefined;
/* functional template */

const __vue_is_functional_template__$2 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, createInjector, undefined, undefined);

//
var script$1 = {
  name: "RamForm",

  data() {
    return {
      form: null,
      isValid: false,
      errorMap: null
    };
  },

  created() {
    const form = {};
    this.fields.forEach(field => form[field.name] = "");
    this.form = form;
  },

  props: {
    onSubmit: {
      type: Function,
      default: () => {},
      required: true
    },
    fields: {
      type: Array
    }
  },
  methods: {
    validateForm() {
      const errorMap = {};
      const fields = Object.keys(this.form);
      fields.forEach(field => {
        if (field === "email" && !this.validateEmail(this.form[field])) {
          errorMap[field] = "כתובת מייל אינה תקינה";
        } else if (field === "password" && this.form[field].length < 6) {
          errorMap[field] = "סיסמה חייבת להכיל לפחות 6 תווים";
        }

        if (!this.form[field]) errorMap[field] = `${field} is empty`;
      });
      this.isValid = Object.keys(errorMap).length ? false : true;

      if (this.isValid) {
        this.errorMap = null;
        this.onSubmit({ ...this.form
        });
      } else {
        this.errorMap = errorMap;
      }
    },

    validateEmail(email) {
      const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return reg.test(email);
    }

  },
  components: {
    RamTextField: __vue_component__$2
  }
};

/* script */
const __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('form', {
    staticClass: "ram-form",
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        return _vm.validateForm();
      }
    }
  }, [_vm._l(_vm.fields, function (field) {
    return _c('div', {
      key: field.name,
      class: "ram-tf ram-tf-" + field.name
    }, [_c('Ram-text-field', {
      attrs: {
        "type": field.type,
        "placeholder": field.placeholder,
        "isRequired": field.isRequired,
        "pattern": field.pattern
      },
      model: {
        value: _vm.form[field.name],
        callback: function ($$v) {
          _vm.$set(_vm.form, field.name, $$v);
        },
        expression: "form[field.name]"
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "error-info-container"
    }, [_vm.errorMap ? _c('span', {
      staticClass: "field-error"
    }, [_vm._v(_vm._s(_vm.errorMap[field.name]))]) : _vm._e(), _vm._v(" "), field.info ? [field.isInfoLink ? _c('a', {
      staticClass: "field-info info-link"
    }, [_vm._v(_vm._s(field.info))]) : _c('span', {
      staticClass: "field-info info-span"
    }, [_vm._v(_vm._s(field.info))])] : _vm._e()], 2)], 1);
  }), _vm._v(" "), _c('div', {
    staticClass: "test-red"
  }, [_vm._t("default")], 2)], 2);
};

var __vue_staticRenderFns__$1 = [];
/* style */

const __vue_inject_styles__$1 = function (inject) {
  if (!inject) return;
  inject("data-v-d54d6d22_0", {
    source: ".error-info-container[data-v-d54d6d22]{display:flex;flex-direction:column}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$1 = "data-v-d54d6d22";
/* module identifier */

const __vue_module_identifier__$1 = undefined;
/* functional template */

const __vue_is_functional_template__$1 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, createInjector, undefined, undefined);

//
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
};

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('section', {
    staticClass: "ram-loader"
  }, [_c('img', {
    attrs: {
      "src": require("@/" + _vm.icon),
      "width": _vm.width
    }
  })]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = undefined;
/* scoped */

const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  RamButton: __vue_component__$3,
  RamTextField: __vue_component__$2,
  RamForm: __vue_component__$1,
  RamLoader: __vue_component__
});

// Import vue components

const install = function installVueSfcRamiTest(Vue) {
  Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export default install;
export { __vue_component__$3 as RamButton, __vue_component__$1 as RamForm, __vue_component__ as RamLoader, __vue_component__$2 as RamTextField };
