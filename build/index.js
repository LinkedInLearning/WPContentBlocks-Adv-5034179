/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/01-static/index.js":
/*!********************************!*\
  !*** ./src/01-static/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bv_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bv-logo.svg */ "./src/bv-logo.svg");
/* harmony import */ var _bv_logo_white_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bv-logo-white.svg */ "./src/bv-logo-white.svg");

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType; // Import SVG as React component using @svgr/webpack.
// https://www.npmjs.com/package/@svgr/webpack

 // Import file as base64 encoded URI using url-loader.
// https://www.npmjs.com/package/url-loader

 // https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-registration/

registerBlockType("podkit/static", {
  title: __("Like & Subscribe", "podkit"),
  icon: {
    src: _bv_logo_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"]
  },
  category: "podkit",
  // https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-edit-save/
  edit: function edit() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-block podkit-static"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("figure", {
      className: "podkit-logo"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: _bv_logo_white_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
      alt: "logo"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-info"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
      className: "podkit-title"
    }, __("The Binaryville Podcast", "podkit")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-cta"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: "#"
    }, __("Like & Subscribe!", "podkit")))));
  },
  save: function save() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-block podkit-static"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("figure", {
      className: "podkit-logo"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: _bv_logo_white_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
      alt: "logo"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-info"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
      className: "podkit-title"
    }, __("The Binaryville Podcast", "podkit")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-cta"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: "/subscribe"
    }, __("Like & Subscribe!", "podkit")))));
  }
});

/***/ }),

/***/ "./src/02-editable/index.js":
/*!**********************************!*\
  !*** ./src/02-editable/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bv_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bv-logo.svg */ "./src/bv-logo.svg");
/* harmony import */ var _bv_logo_white_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bv-logo-white.svg */ "./src/bv-logo-white.svg");

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var RichText = wp.editor.RichText;


registerBlockType("podkit/editable", {
  title: __("Custom Title", "podkit"),
  icon: {
    src: _bv_logo_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"]
  },
  category: "podkit",
  attributes: {
    epsiodeTitle: {
      type: "string",
      source: "html",
      selector: ".podkit-title"
    }
  },
  edit: function edit(props) {
    // Props parameter holds all the info.
    console.info(props); // Lift info from props and populate various constants.

    var epsiodeTitle = props.attributes.epsiodeTitle,
        className = props.className,
        setAttributes = props.setAttributes;

    var onChangeEpisodeTitle = function onChangeEpisodeTitle(newEpisodeTitle) {
      setAttributes({
        epsiodeTitle: newEpisodeTitle
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "".concat(className, " podkit-block podkit-editable")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("figure", {
      className: "podkit-logo"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: _bv_logo_white_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
      alt: "logo"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-info"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-nameplate"
    }, __("The Binaryville Podcast", "podkit")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
      className: "podkit-title"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: __("Podcast episode title", "podkit"),
      value: epsiodeTitle,
      onChange: onChangeEpisodeTitle
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-cta"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: "#"
    }, __("Like & Subscribe!", "podkit")))));
  },
  save: function save(props) {
    var epsiodeTitle = props.attributes.epsiodeTitle;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-block podkit-static"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("figure", {
      className: "podkit-logo"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: _bv_logo_white_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
      alt: "logo"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-info"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-nameplate"
    }, __("The Binaryville Podcast", "podkit")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
      className: "podkit-title"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: epsiodeTitle
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-cta"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: "/subscribe"
    }, __("Like & Subscribe!", "podkit")))));
  }
});

/***/ }),

/***/ "./src/03-media/index.js":
/*!*******************************!*\
  !*** ./src/03-media/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bv_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bv-logo.svg */ "./src/bv-logo.svg");
/* harmony import */ var _bv_logo_white_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bv-logo-white.svg */ "./src/bv-logo-white.svg");

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    MediaUpload = _wp$editor.MediaUpload,
    RichText = _wp$editor.RichText;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    IconButton = _wp$components.IconButton;
console.info(wp.components);


registerBlockType("podkit/media", {
  title: __("Custom title and image", "podkit"),
  icon: {
    src: _bv_logo_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"]
  },
  category: "podkit",
  attributes: {
    epsiodeTitle: {
      type: "string",
      source: "html",
      selector: ".podkit-title"
    },
    episodeImage: {
      type: "string",
      source: "attribute",
      selector: ".podkit-logo img",
      attribute: "src",
      default: _bv_logo_white_svg__WEBPACK_IMPORTED_MODULE_2__["default"]
    }
  },
  edit: function edit(props) {
    // Lift info from props and populate various constants.
    var _props$attributes = props.attributes,
        epsiodeTitle = _props$attributes.epsiodeTitle,
        episodeImage = _props$attributes.episodeImage,
        className = props.className,
        setAttributes = props.setAttributes; // Grab newEpisodeTitle, set the value of episodeTitle to newEpisodeTitle.

    var onChangeEpisodeTitle = function onChangeEpisodeTitle(newEpisodeTitle) {
      setAttributes({
        epsiodeTitle: newEpisodeTitle
      });
    }; // Grab imageObject, set the value of episodeImage to imageObject.sizes.podkitFeatImg.url.


    var onImageSelect = function onImageSelect(imageObject) {
      setAttributes({
        episodeImage: imageObject.sizes.podkitFeatImg.url
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "".concat(className, " podkit-block podkit-editable")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("figure", {
      className: "podkit-logo"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: episodeImage,
      alt: "logo"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: onImageSelect,
      type: "image",
      value: episodeImage,
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(IconButton, {
          className: "podkit-logo__button",
          onClick: open,
          icon: "format-image",
          showTooltip: "true",
          label: __("Change image.", "podkit")
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-info"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-nameplate"
    }, __("The Binaryville Podcast", "podkit")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
      className: "podkit-title"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: __("Podcast episode title", "podkit"),
      value: epsiodeTitle,
      onChange: onChangeEpisodeTitle
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-cta"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: "#"
    }, __("Like & Subscribe!", "podkit")))));
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        epsiodeTitle = _props$attributes2.epsiodeTitle,
        episodeImage = _props$attributes2.episodeImage;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-block podkit-static"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("figure", {
      className: "podkit-logo"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: episodeImage,
      alt: "logo"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-info"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-nameplate"
    }, __("The Binaryville Podcast", "podkit")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
      className: "podkit-title"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: epsiodeTitle
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-cta"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: "/subscribe"
    }, __("Like & Subscribe!", "podkit")))));
  }
});

/***/ }),

/***/ "./src/04-extended/index.js":
/*!**********************************!*\
  !*** ./src/04-extended/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bv_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bv-logo.svg */ "./src/bv-logo.svg");
/* harmony import */ var _bv_logo_white_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bv-logo-white.svg */ "./src/bv-logo-white.svg");

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    BlockControls = _wp$editor.BlockControls,
    ColorPalette = _wp$editor.ColorPalette,
    InspectorControls = _wp$editor.InspectorControls,
    MediaUpload = _wp$editor.MediaUpload,
    RichText = _wp$editor.RichText,
    URLInputButton = _wp$editor.URLInputButton;
var _wp$components = wp.components,
    IconButton = _wp$components.IconButton,
    PanelBody = _wp$components.PanelBody;


registerBlockType("podkit/extended", {
  title: __("Extended episode promo", "podkit"),
  icon: {
    src: _bv_logo_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"]
  },
  category: "podkit",
  attributes: {
    epsiodeTitle: {
      type: "string",
      source: "html",
      selector: ".podkit-title"
    },
    episodeImage: {
      type: "string",
      source: "attribute",
      selector: ".podkit-logo img",
      attribute: "src",
      default: _bv_logo_white_svg__WEBPACK_IMPORTED_MODULE_2__["default"]
    },
    episodeDescription: {
      type: "array",
      source: "children",
      multiline: "p",
      selector: ".podkit-description"
    },
    episodeURL: {
      type: "string",
      source: "attribute",
      selector: ".podkit-cta a",
      attribute: "href"
    },
    descriptionAlignment: {
      type: "string",
      default: "left"
    },
    backgroundColor: {
      type: "string"
    }
  },
  supports: {
    align: ['wide', 'full']
  },
  styles: [{
    name: 'default',
    label: __('Red (default)', "podkit"),
    isDefault: true
  }, {
    name: 'blue',
    label: __('Blue', "podkit")
  }, {
    name: 'yellow',
    label: __('Yellow', "podkit")
  }],
  edit: function edit(props) {
    // Lift info from props and populate various constants.
    var _props$attributes = props.attributes,
        epsiodeTitle = _props$attributes.epsiodeTitle,
        episodeImage = _props$attributes.episodeImage,
        episodeDescription = _props$attributes.episodeDescription,
        episodeURL = _props$attributes.episodeURL,
        descriptionAlignment = _props$attributes.descriptionAlignment,
        backgroundColor = _props$attributes.backgroundColor,
        className = props.className,
        setAttributes = props.setAttributes; // Grab newEpisodeTitle, set the value of episodeTitle to newEpisodeTitle.

    var onChangeEpisodeTitle = function onChangeEpisodeTitle(newEpisodeTitle) {
      setAttributes({
        epsiodeTitle: newEpisodeTitle
      });
    }; // Grab imageObject, set the value of episodeImage to imageObject.sizes.podkitFeatImg.url.


    var onImageSelect = function onImageSelect(imageObject) {
      setAttributes({
        episodeImage: imageObject.sizes.podkitFeatImg.url
      });
    }; // Grab newEpisodeDescription, set the value of episodeDescription to newEpisodeDescription.


    var onChangeEpisodeDescription = function onChangeEpisodeDescription(newEpisodeDescription) {
      setAttributes({
        episodeDescription: newEpisodeDescription
      });
    }; // Grab newEpisodeURL, set the value of episodeURL to newEpisodeURL.


    var onChangeEpisodeURL = function onChangeEpisodeURL(newEpisodeURL) {
      setAttributes({
        episodeURL: newEpisodeURL
      });
    }; // Grab newDescriptionAlignment, set the value of descriptionAlignment to newDescriptionAlignment.


    var onChangeDescriptionAlignment = function onChangeDescriptionAlignment(newDescriptionAlignment) {
      setAttributes({
        descriptionAlignment: newDescriptionAlignment
      });
    }; // Grab newBackgroundColor, set the value of backgroundColor to newBackgroundColor.


    var onChangeBackgroundColor = function onChangeBackgroundColor(newBackgroundColor) {
      setAttributes({
        backgroundColor: newBackgroundColor
      });
    };

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Color settings', "podkit")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-base-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-base-control__field"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
      className: "components-base-control__label"
    }, __("Background color", "podkit")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      value: backgroundColor,
      onChange: onChangeBackgroundColor
    }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "".concat(className, " podkit-block podkit-expanded"),
      style: {
        background: backgroundColor
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AlignmentToolbar, {
      value: descriptionAlignment,
      onChange: onChangeDescriptionAlignment
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("figure", {
      className: "podkit-logo"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: episodeImage,
      alt: "logo"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: onImageSelect,
      type: "image",
      value: episodeImage,
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(IconButton, {
          className: "podkit-logo__button",
          onClick: open,
          icon: "format-image",
          showTooltip: "true",
          label: __("Change image.", "podkit")
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-info"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-nameplate"
    }, __("The Binaryville Podcast", "podkit")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
      className: "podkit-title"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: __("Podcast episode title", "podkit"),
      value: epsiodeTitle,
      onChange: onChangeEpisodeTitle
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-description"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      style: {
        textAlign: descriptionAlignment
      },
      multiline: "p",
      placeholder: __("Episode description", "podkit"),
      onChange: onChangeEpisodeDescription,
      value: episodeDescription
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-cta"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: "#"
    }, __("Listen now!", "podkit")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(URLInputButton, {
      className: "podkit-dropdown__input",
      label: __("Episode URL", "podkit"),
      onChange: onChangeEpisodeURL,
      url: episodeURL
    })))];
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        epsiodeTitle = _props$attributes2.epsiodeTitle,
        episodeImage = _props$attributes2.episodeImage,
        episodeDescription = _props$attributes2.episodeDescription,
        episodeURL = _props$attributes2.episodeURL,
        descriptionAlignment = _props$attributes2.descriptionAlignment,
        backgroundColor = _props$attributes2.backgroundColor;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-block podkit-expanded",
      style: {
        background: backgroundColor
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("figure", {
      className: "podkit-logo"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: episodeImage,
      alt: "logo"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-info"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-nameplate"
    }, __("The Binaryville Podcast", "podkit")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
      className: "podkit-title"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: epsiodeTitle
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-description",
      style: "text-align:".concat(descriptionAlignment)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      multiline: "p",
      value: episodeDescription
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-cta"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: episodeURL
    }, __("Listen now!", "podkit"))));
  }
});

/***/ }),

/***/ "./src/05-dynamic/index.js":
/*!*********************************!*\
  !*** ./src/05-dynamic/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bv_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bv-logo.svg */ "./src/bv-logo.svg");
/* harmony import */ var _bv_logo_white_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bv-logo-white.svg */ "./src/bv-logo-white.svg");

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var RichText = wp.editor.RichText;
var withSelect = wp.data.withSelect;


registerBlockType("podkit/dynamic", {
  title: __("Latest episode promo", "podkit"),
  icon: {
    src: _bv_logo_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"]
  },
  category: "podkit",
  supports: {
    align: ['wide', 'full']
  },
  styles: [{
    name: 'default',
    label: __('Red (default)', "podkit"),
    isDefault: true
  }, {
    name: 'blue',
    label: __('Blue', "podkit")
  }, {
    name: 'yellow',
    label: __('Yellow', "podkit")
  }],
  edit: withSelect(function (select) {
    return {
      // Send a GET query to the REST API.
      posts: select("core").getEntityRecords("postType", "post", {
        categories: 2,
        per_page: 1
      })
    };
  })(function (_ref) {
    var posts = _ref.posts,
        className = _ref.className;

    // Wait for posts to be returned.
    if (!posts) {
      return "Loading...";
    } // If no posts are returned.


    if (posts && posts.length === 0) {
      return "No posts";
    } // Grab the first post.


    var post = posts[0];
    console.info(post);

    var featImg = function featImg(imageURL) {
      return imageURL ? imageURL : _bv_logo_white_svg__WEBPACK_IMPORTED_MODULE_2__["default"];
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "".concat(className, " podkit-block podkit-dynamic")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("figure", {
      className: "podkit-logo"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: featImg(post.featured_image_podkitFeatImg_url),
      alt: "logo"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-info"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-nameplate"
    }, __("The Binaryville Podcast", "podkit")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
      className: "podkit-title"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: post.title.rendered
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-description"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: post.excerpt.rendered
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-cta"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: post.link
    }, __("Listen now!", "podkit"))));
  }),
  save: function save(props) {
    return null;
  }
});

/***/ }),

/***/ "./src/bv-logo-white.svg":
/*!*******************************!*\
  !*** ./src/bv-logo-white.svg ***!
  \*******************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgBvLogoWhite; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M42.9 38.3V38c2.9-.6 4.3-2.2 4.3-4.8V21.6c0-5.4-2.7-8.2-8-8.2H23.3c-.2-.6-.7-1-1.4-1-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4c.7 0 1.2-.4 1.4-1H29v22.1h-5.7c-.2-.6-.7-1-1.4-1-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4c.7 0 1.2-.4 1.4-1H29v20.7h-5.6c-.2-.6-.7-1-1.4-1-.8 0-1.4.6-1.4 1.4 0 .8.6 1.4 1.4 1.4.7 0 1.2-.4 1.4-1H41c4.6 0 6.8-2.2 6.8-6.7v-8.4c.1-2.6-1.6-4.3-4.9-5.2zm-8-19.4h3.6c1.8 0 2.7 1.1 2.7 3.3v9.9c0 2.2-1.2 3.3-3.4 3.3H35V18.9zm6.9 32.2c0 1.3-.8 1.9-2.4 1.9h-4.5V40.8h3.3c2.4 0 3.6 1.1 3.6 3.2v7.1z",
  fill: "#fff"
});

var SvgBvLogoWhite = function SvgBvLogoWhite(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 72 72"
  }, props), _ref);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA3MiA3MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNzIgNzI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00Mi45LDM4LjNWMzhjMi45LTAuNiw0LjMtMi4yLDQuMy00LjhWMjEuNmMwLTUuNC0yLjctOC4yLTgtOC4ySDIzLjNjLTAuMi0wLjYtMC43LTEtMS40LTENCgljLTAuOCwwLTEuNCwwLjYtMS40LDEuNHMwLjYsMS40LDEuNCwxLjRjMC43LDAsMS4yLTAuNCwxLjQtMWg1Ljd2MjIuMWgtNS43Yy0wLjItMC42LTAuNy0xLTEuNC0xYy0wLjgsMC0xLjQsMC42LTEuNCwxLjQNCglzMC42LDEuNCwxLjQsMS40YzAuNywwLDEuMi0wLjQsMS40LTFoNS43djIwLjdoLTUuNmMtMC4yLTAuNi0wLjctMS0xLjQtMWMtMC44LDAtMS40LDAuNi0xLjQsMS40YzAsMC44LDAuNiwxLjQsMS40LDEuNA0KCWMwLjcsMCwxLjItMC40LDEuNC0xaDUuN3YwSDQxYzQuNiwwLDYuOC0yLjIsNi44LTYuN3YtOC40QzQ3LjksNDAuOSw0Ni4yLDM5LjIsNDIuOSwzOC4zeiBNMzQuOSwxOC45aDMuNmMxLjgsMCwyLjcsMS4xLDIuNywzLjMNCgl2OS45YzAsMi4yLTEuMiwzLjMtMy40LDMuM2gtMi44VjE4Ljl6IE00MS44LDUxLjFjMCwxLjMtMC44LDEuOS0yLjQsMS45aC00LjVWNDAuOGgzLjNjMi40LDAsMy42LDEuMSwzLjYsMy4yVjUxLjF6Ii8+DQo8L3N2Zz4NCg==");


/***/ }),

/***/ "./src/bv-logo.svg":
/*!*************************!*\
  !*** ./src/bv-logo.svg ***!
  \*************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgBvLogo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M42.9 38.3V38c2.9-.6 4.3-2.2 4.3-4.8V21.6c0-5.4-2.7-8.2-8-8.2H23.3c-.2-.6-.7-1-1.4-1-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4c.7 0 1.2-.4 1.4-1H29v22.1h-5.7c-.2-.6-.7-1-1.4-1-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4c.7 0 1.2-.4 1.4-1H29v20.7h-5.6c-.2-.6-.7-1-1.4-1-.8 0-1.4.6-1.4 1.4 0 .8.6 1.4 1.4 1.4.7 0 1.2-.4 1.4-1H41c4.6 0 6.8-2.2 6.8-6.7v-8.4c.1-2.6-1.6-4.3-4.9-5.2zm-8-19.4h3.6c1.8 0 2.7 1.1 2.7 3.3v9.9c0 2.2-1.2 3.3-3.4 3.3H35V18.9zm6.9 32.2c0 1.3-.8 1.9-2.4 1.9h-4.5V40.8h3.3c2.4 0 3.6 1.1 3.6 3.2v7.1z"
});

var SvgBvLogo = function SvgBvLogo(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 72 72"
  }, props), _ref);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA3MiA3MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNzIgNzI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGQ9Ik00Mi45LDM4LjNWMzhjMi45LTAuNiw0LjMtMi4yLDQuMy00LjhWMjEuNmMwLTUuNC0yLjctOC4yLTgtOC4ySDIzLjNjLTAuMi0wLjYtMC43LTEtMS40LTFjLTAuOCwwLTEuNCwwLjYtMS40LDEuNA0KCXMwLjYsMS40LDEuNCwxLjRjMC43LDAsMS4yLTAuNCwxLjQtMWg1Ljd2MjIuMWgtNS43Yy0wLjItMC42LTAuNy0xLTEuNC0xYy0wLjgsMC0xLjQsMC42LTEuNCwxLjRzMC42LDEuNCwxLjQsMS40DQoJYzAuNywwLDEuMi0wLjQsMS40LTFoNS43djIwLjdoLTUuNmMtMC4yLTAuNi0wLjctMS0xLjQtMWMtMC44LDAtMS40LDAuNi0xLjQsMS40YzAsMC44LDAuNiwxLjQsMS40LDEuNGMwLjcsMCwxLjItMC40LDEuNC0xaDUuN3YwDQoJSDQxYzQuNiwwLDYuOC0yLjIsNi44LTYuN3YtOC40QzQ3LjksNDAuOSw0Ni4yLDM5LjIsNDIuOSwzOC4zeiBNMzQuOSwxOC45aDMuNmMxLjgsMCwyLjcsMS4xLDIuNywzLjN2OS45YzAsMi4yLTEuMiwzLjMtMy40LDMuMw0KCWgtMi44VjE4Ljl6IE00MS44LDUxLjFjMCwxLjMtMC44LDEuOS0yLjQsMS45aC00LjVWNDAuOGgzLjNjMi40LDAsMy42LDEuMSwzLjYsMy4yVjUxLjF6Ii8+DQo8L3N2Zz4NCg==");


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _01_static__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./01-static */ "./src/01-static/index.js");
/* harmony import */ var _02_editable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./02-editable */ "./src/02-editable/index.js");
/* harmony import */ var _03_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./03-media */ "./src/03-media/index.js");
/* harmony import */ var _04_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./04-extended */ "./src/04-extended/index.js");
/* harmony import */ var _05_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./05-dynamic */ "./src/05-dynamic/index.js");
/**
 * Import blocks as components.
 */






/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ })

/******/ });
//# sourceMappingURL=index.js.map