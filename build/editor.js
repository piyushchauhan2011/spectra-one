/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/block-extensions/all.js":
/*!*************************************!*\
  !*** ./src/block-extensions/all.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ "./src/block-extensions/header.js");
/* harmony import */ var _responsive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./responsive.js */ "./src/block-extensions/responsive.js");



/***/ }),

/***/ "./src/block-extensions/header.js":
/*!****************************************!*\
  !*** ./src/block-extensions/header.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderSettings": function() { return /* binding */ HeaderSettings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);






const HeaderSettings = props => {
  let SWTStickyHeader;
  let SWTTransparentHeader;
  if (props.hasOwnProperty("setAttributes")) {
    SWTStickyHeader = props?.attributes?.SWTStickyHeader && props.attributes.SWTStickyHeader ? true : false;
    SWTTransparentHeader = props?.attributes?.SWTTransparentHeader && props.attributes.SWTTransparentHeader ? true : false;
  } else {
    SWTStickyHeader = props?.meta["swt_meta_sticky_header"] && props.meta["swt_meta_sticky_header"] ? true : false;
    SWTTransparentHeader = props?.meta["swt_meta_transparent_header"] && props.meta["swt_meta_transparent_header"] ? true : false;
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !SWTTransparentHeader && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Enable Sticky Header", "spectra-one"),
    help: SWTStickyHeader ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Transparent header option will be disabled on enabling this option.", "spectra-one") : "",
    checked: SWTStickyHeader,
    onChange: val => {
      props.hasOwnProperty("setAttributes") ? props.setAttributes({
        SWTStickyHeader: !SWTStickyHeader
      }) : props.setMetaFieldValue(val, "swt_meta_sticky_header");
    }
  })), !SWTStickyHeader && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Enable Transparent Header", "spectra-one"),
    help: SWTTransparentHeader ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Sticky header option will be disabled on enabling this option.", "spectra-one") : "",
    checked: SWTTransparentHeader,
    onChange: val => {
      props.hasOwnProperty("setAttributes") ? props.setAttributes({
        SWTTransparentHeader: !SWTTransparentHeader
      }) : props.setMetaFieldValue(val, "swt_meta_transparent_header");
    }
  })));
};
const Header = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.createHigherOrderComponent)(BlockEdit => {
  return props => {
    const {
      attributes,
      name
    } = props;
    if (attributes?.tagName && "header" === attributes.tagName && "core/template-part" === name) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Panel, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
        title: "Header Settings",
        initialOpen: true
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(HeaderSettings, props)))));
    } else {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props));
    }
  };
}, "Header");
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.addFilter)("editor.BlockEdit", "swt/header", Header);
function HeaderAttributes(settings) {
  const includeBlock = ["core/template-part"];
  if (includeBlock.includes(settings.name)) {
    if (settings.attributes) {
      settings.attributes = Object.assign(settings.attributes, {
        SWTStickyHeader: {
          type: "boolean",
          default: false
        },
        SWTTransparentHeader: {
          type: "boolean",
          default: false
        }
      });
    }
  }
  return settings;
}
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.addFilter)("blocks.registerBlockType", "swt/header-attributes", HeaderAttributes);

/***/ }),

/***/ "./src/block-extensions/responsive.js":
/*!********************************************!*\
  !*** ./src/block-extensions/responsive.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);






const Responsive = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.createHigherOrderComponent)(BlockEdit => {
  return props => {
    const {
      attributes,
      name,
      setAttributes
    } = props;
    // Adding compatibility with spectra plugin. So the slugs are same as the plugin.
    const {
      SWTHideDesktop,
      SWTHideTab,
      SWTHideMob
    } = attributes;
    if (name && name.includes('uagb/')) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props));
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Panel, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: "Responsive Settings",
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Hide Desktop", "spectra-one"),
      checked: SWTHideDesktop,
      onChange: () => setAttributes({
        SWTHideDesktop: !SWTHideDesktop
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Hide Tablet", "spectra-one"),
      checked: SWTHideTab,
      onChange: () => setAttributes({
        SWTHideTab: !SWTHideTab
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Hide Mobile", "spectra-one"),
      checked: SWTHideMob,
      onChange: () => setAttributes({
        SWTHideMob: !SWTHideMob
      })
    }))))));
  };
}, "Responsive");
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.addFilter)("editor.BlockEdit", "swt/responsive", Responsive);
function ResponsiveAttributes(settings) {
  // if not excluded then it causes render error as adding custom attributes to these blocks are prohibited.
  const excludeBlock = ['core/archives', 'core/calendar', 'core/latest-comments', 'core/tag-cloud', 'core/rss'];
  if (!excludeBlock.includes(settings.name)) {
    if (settings.attributes) {
      settings.attributes = Object.assign(settings.attributes, {
        SWTHideDesktop: {
          type: "boolean",
          default: false
        },
        SWTHideTab: {
          type: "boolean",
          default: false
        },
        SWTHideMob: {
          type: "boolean",
          default: false
        }
      });
    }
  }
  return settings;
}
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.addFilter)("blocks.registerBlockType", "swt/responsive-attributes", ResponsiveAttributes);

/***/ }),

/***/ "./src/extensions/editor/all.js":
/*!**************************************!*\
  !*** ./src/extensions/editor/all.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_title_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor-title.js */ "./src/extensions/editor/editor-title.js");
/* harmony import */ var _editor_title_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editor_title_js__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/extensions/editor/editor-title.js":
/*!***********************************************!*\
  !*** ./src/extensions/editor/editor-title.js ***!
  \***********************************************/
/***/ (function() {

window.addEventListener('load', function (e) {
  swt_onload_function();
});
function swt_onload_function() {
  /* Do things after DOM has fully loaded */

  wp.data.subscribe(function () {
    setTimeout(function () {
      const editorStylesWrapper = document.querySelector('.editor-styles-wrapper');
      if (null !== editorStylesWrapper) {
        const editorStylesWrapperWidth = parseInt(editorStylesWrapper.offsetWidth);
        if (editorStylesWrapperWidth < 1350) {
          editorStylesWrapper.classList.remove('swt-stacked-title-visibility');
          editorStylesWrapper.classList.add('swt-stacked-title-visibility');
        } else {
          editorStylesWrapper.classList.remove('swt-stacked-title-visibility');
        }
      }

      // Title visibility with new editor compatibility update.
      const titleVisibility = document.querySelector('.title-visibility'),
        titleBlock = document.querySelector('.edit-post-visual-editor__post-title-wrapper');
      if (null === titleVisibility && null !== titleBlock) {
        var titleVisibilityTrigger = '';
        if (false === wp.data.select('core/editor').getEditedPostAttribute('meta')['swt_meta_site_title_display']) {
          titleVisibilityTrigger = '<span class="dashicons dashicons-hidden title-visibility" data-tooltip="Enable Title"></span>';
          titleBlock.classList.toggle('invisible');
        } else {
          titleVisibilityTrigger = '<span class="dashicons dashicons-visibility title-visibility" data-tooltip="Disable Title"></span>';
        }
        titleBlock.insertAdjacentHTML('beforeend', titleVisibilityTrigger);
        document.querySelector('.title-visibility').addEventListener('click', function () {
          const titleBlock = document.querySelector('.edit-post-visual-editor__post-title-wrapper');
          titleBlock.classList.toggle('invisible');
          if (this.classList.contains('dashicons-hidden')) {
            this.classList.add('dashicons-visibility');
            this.classList.remove('dashicons-hidden');
            this.dataset.tooltip = 'Disable Title';
            wp.data.dispatch('core/editor').editPost({
              meta: {
                'swt_meta_site_title_display': true
              }
            });
          } else {
            this.classList.add('dashicons-hidden');
            this.classList.remove('dashicons-visibility');
            this.dataset.tooltip = 'Enable Title';
            wp.data.dispatch('core/editor').editPost({
              meta: {
                'swt_meta_site_title_display': false
              }
            });
          }
        });
      }

      // Show post/page title wrapper outline & eye icon only when clicked.
      const titleInput = document.querySelector('.editor-post-title__input');
      const visibilityIcon = document.querySelector('.title-visibility');
      if (null != titleInput && null != visibilityIcon) {
        document.addEventListener('click', function (event) {
          if (!titleBlock.contains(event.target)) {
            visibilityIcon.classList.remove('swt-show-visibility-icon');
            titleInput.classList.remove('swt-show-editor-title-outline');
          }
        });
        document.addEventListener('visibilitychange', function () {
          visibilityIcon.classList.remove('swt-show-visibility-icon');
          titleInput.classList.remove('swt-show-editor-title-outline');
        });
        titleBlock.addEventListener('focusout', function () {
          visibilityIcon.classList.remove('swt-show-visibility-icon');
          titleInput.classList.remove('swt-show-editor-title-outline');
        });
        titleBlock.addEventListener('click', function () {
          visibilityIcon.classList.add('swt-show-visibility-icon');
          titleInput.classList.add('swt-show-editor-title-outline');
        });
        titleInput.addEventListener('input', function () {
          visibilityIcon.classList.add('swt-show-visibility-icon');
          this.classList.add('swt-show-editor-title-outline');
        });
      }
      const responsivePreview = document.querySelectorAll('.is-tablet-preview, .is-mobile-preview');
      if (responsivePreview.length) {
        document.body.classList.add('responsive-enabled');
      } else {
        document.body.classList.remove('responsive-enabled');
      }
    }, 1);
  });
}

/***/ }),

/***/ "./src/extensions/page-settings/icons.js":
/*!***********************************************!*\
  !*** ./src/extensions/page-settings/icons.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const SettingsIcons = {
  logo: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "swt-page-settings-button",
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 70 70",
    fill: "none"
  }, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M35 70C54.33 70 70 54.33 70 35C70 15.67 54.33 0 35 0C15.67 0 0 15.67 0 35C0 54.33 15.67 70 35 70ZM24.4471 23.5112C18.9722 26.7403 20.2852 35.3759 26.5032 37.0351L36.8875 39.806C37.7533 40.037 37.91 41.224 37.135 41.6811L27.0972 47.5799L26.036 58L45.5529 46.4888C51.0278 43.2597 49.7148 34.6241 43.4968 32.9649L33.1125 30.1941C32.2467 29.963 32.09 28.776 32.865 28.3189L42.9028 22.4202L43.964 12L24.4471 23.5112Z"
  }), " ")
};
/* harmony default export */ __webpack_exports__["default"] = (SettingsIcons);

/***/ }),

/***/ "./src/extensions/page-settings/settings-list.js":
/*!*******************************************************!*\
  !*** ./src/extensions/page-settings/settings-list.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwtSettingList": function() { return /* binding */ SwtSettingList; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _block_extensions_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../block-extensions/header */ "./src/block-extensions/header.js");





const SwtSettingList = props => {
  const disableSections = Object.entries(spectraOne.disable_sections).map(_ref => {
    let [key, value] = _ref;
    let sectionValue = props?.meta[value["key"]] && props.meta[value["key"]] ? true : false;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      key: key,
      label: value["label"],
      checked: sectionValue,
      onChange: val => {
        props.setMetaFieldValue(val, value["key"]);
      }
    }));
  });
  const panelBody = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Disable Elements", "spectra-one"),
    initialOpen: true,
    className: "swt-disable-elements-panel"
  }, disableSections), !props?.meta?.swt_meta_header_display && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Header Settings", "spectra-one"),
    initialOpen: true,
    className: "swt-header-settings-panel"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_block_extensions_header__WEBPACK_IMPORTED_MODULE_4__.HeaderSettings, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, spectraOne.header_settings))));
  return panelBody;
};

/***/ }),

/***/ "./src/extensions/page-settings/settings.js":
/*!**************************************************!*\
  !*** ./src/extensions/page-settings/settings.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons.js */ "./src/extensions/page-settings/icons.js");
/* harmony import */ var _settings_list_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings-list.js */ "./src/extensions/page-settings/settings-list.js");

/**
 * Meta Options build.
 */






const SwtPageSettingsPopup = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_1__.PluginSidebarMoreMenuItem, {
    target: "swt-page-settings-panel",
    icon: _icons_js__WEBPACK_IMPORTED_MODULE_5__["default"].logo
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Spectra Page Settings', 'spectra-one')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_1__.PluginSidebar, {
    isPinnable: true,
    icon: _icons_js__WEBPACK_IMPORTED_MODULE_5__["default"].logo,
    name: "swt-page-settings-panel",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Spectra Page Settings', 'spectra-one'),
    className: 'swt-sidebar'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_settings_list_js__WEBPACK_IMPORTED_MODULE_6__.SwtSettingList, props)));
};
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.compose)((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withSelect)(select => {
  const postMeta = select('core/editor').getEditedPostAttribute('meta');
  const oldPostMeta = select('core/editor').getCurrentPostAttribute('meta');
  return {
    meta: {
      ...oldPostMeta,
      ...postMeta
    },
    oldMeta: oldPostMeta
  };
}), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withDispatch)(dispatch => ({
  setMetaFieldValue: (value, field) => dispatch('core/editor').editPost({
    meta: {
      [field]: value
    }
  })
})))(SwtPageSettingsPopup));

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/edit-post":
/*!**********************************!*\
  !*** external ["wp","editPost"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["editPost"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["plugins"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!***********************!*\
  !*** ./src/editor.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _extensions_page_settings_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extensions/page-settings/settings */ "./src/extensions/page-settings/settings.js");
/* harmony import */ var _extensions_page_settings_settings_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extensions/page-settings/settings-list.js */ "./src/extensions/page-settings/settings-list.js");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _extensions_editor_all_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./extensions/editor/all.js */ "./src/extensions/editor/all.js");
/* harmony import */ var _block_extensions_all_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./block-extensions/all.js */ "./src/block-extensions/all.js");







if (spectraOne.is_spectra_plugin) {
  (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)("spectra.page-sidebar.before", "swt/setting-list", function (markup, props) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, markup, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_extensions_page_settings_settings_list_js__WEBPACK_IMPORTED_MODULE_3__.SwtSettingList, props));
  }, 10);
}
if (!spectraOne.is_spectra_plugin) {
  (0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__.registerPlugin)("swt-page-level-settings", {
    render: _extensions_page_settings_settings__WEBPACK_IMPORTED_MODULE_2__["default"]
  });
}
}();
/******/ })()
;
//# sourceMappingURL=editor.js.map