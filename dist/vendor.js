(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/vendor"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/rabbit-lyrics/src/index.css":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/rabbit-lyrics/src/index.css ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Framed view mode (default) */\n\n.rabbit-lyrics {\n  position: relative; /* Must be relative, otherwise cannot calculate offset */\n  height: 16.5em;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.rabbit-lyrics__line {\n  min-height: 1.5em;\n}\n\n.rabbit-lyrics__line--active {\n  color: #41bdff;\n}\n\n/* Mini view mode */\n\n.rabbit-lyrics--mini {\n  height: 1.5em;\n  overflow-y: hidden;\n}\n\n.rabbit-lyrics--mini .rabbit-lyrics__line {\n  display: none;\n}\n\n.rabbit-lyrics--mini .rabbit-lyrics__line--active {\n  display: inline-block;\n}\n\n/* Full view mode, no scroll bar */\n\n.rabbit-lyrics--full {\n  height: auto;\n  overflow-y: initial;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/rabbit-lyrics/src/index.css":
/*!**************************************************!*\
  !*** ./node_modules/rabbit-lyrics/src/index.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--6-1!../../postcss-loader/src??ref--6-2!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/rabbit-lyrics/src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/rabbit-lyrics/src/index.js":
/*!*************************************************!*\
  !*** ./node_modules/rabbit-lyrics/src/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RabbitLyrics; });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./node_modules/rabbit-lyrics/src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Rabbit Lyrics
 *
 * JavaScript audio and timed lyrics synchronizer. No jQuery required.
 *
 * License: GNU General Public License version 3
 * Author: Guo Yunhe <yunhe.guo@protonmail.com>
 * Home page: https://gitlab.com/guoyunhe/rabbit-lyrics
 * Documentation: https://gitlab.com/guoyunhe/rabbit-lyrics/wiki
 * Report bugs: https://gitlab.com/guoyunhe/rabbit-lyrics/issues
 */



/**
 * Rabbit Lyrics main class
 *
 * @prop {HTMLElement} element
 * @prop {HTMLMediaElement} mediaElement
 * @prop {HTMLElement[]} lineElements
 * @prop {number} scrollerInterval
 *      Used to force stop previous scroller interval and set new interval
 * @prop {number} scrollerIntervalStep
 *      How long scroller interval should be executed, in milliseconds
 * @prop {number} scrollerIntervalDuration
 *      How long scroller interval could work.
 * @prop {number} scrollerTimer
 *      Countdown timer (ms) for scrolling animation.
 */
class RabbitLyrics {
  /**
   * Constructor
   * @param {Object} options
   * @param {HTMLElement} options.element The block this contains lyrics
   * @param {HTMLMediaElement} options.mediaElement The audio or video element to synchronize
   * @param {string} options.viewMode Modes of lyrics view box, available values: default, mini, full
   * @param {string} options.alignment Lyrics text alighment, available values: left, center, right
   * @param {number} options.height Height of lyrics. Only works with default view mode
   */
  constructor(options) {
    this.element = options.element;

    if (this.element.classList.contains("rabbit-lyrics--enabled")) {
      return;
    }

    this.element.classList.add("rabbit-lyrics");

    if (options.mediaElement) {
      this.mediaElement = options.mediaElement;
    } else {
      this.mediaElement = this.findMediaElementBefore(this.element);
    }

    if (options.viewMode) {
      this.viewMode = options.viewMode;
    } else {
      this.viewMode = "default";
    }
    this.element.classList.add("rabbit-lyrics--" + this.viewMode);

    if (this.viewMode !== "full" && options.height) {
      this.element.style.height = options.height + "px";
    }

    if (options.alignment) {
      this.element.style.textAlign = options.alignment;
    }

    this.scrollerIntervalDuration = 200;
    this.scrollerIntervalStep = 10;
    this.lineElements = [];

    // Bind this to event handlers
    this.setStatus = this.setStatus.bind(this);
    this.synchronize = this.synchronize.bind(this);
    this.scroll = this.scroll.bind(this);

    this.parseLyrics();
    this.enableLyrics();
  }

  /**
   * Find first audio or video element before lyrics element. Only used when
   * no mediaElement was specified. If nothing was found, return null.
   * @param {HTMLElement} element The start point element
   * @return {HTMLMediaElement|null}
   */
  findMediaElementBefore(element) {
    if (!element) {
      return null;
    }

    let previousElement = element.previousElementSibling;
    // First, lookup siblings before
    while (previousElement) {
      if (
        previousElement.tagName.toLowerCase() === "audio" ||
        previousElement.tagName.toLowerCase() === "video"
      ) {
        return previousElement;
      } else {
        const mediaChildren = previousElement.querySelector("audio, video");
        if (mediaChildren) {
          return mediaChildren[mediaChildren.length - 1];
        }
      }
      previousElement = previousElement.previousElementSibling;
    }

    if (element.parentElement) {
      return this.findMediaElementBefore(element.parentElement);
    } else {
      return null;
    }
  }

  /**
   * Parse lyrics syntax to HTML with data properties
   */
  parseLyrics() {
    // Do not do anything if no lyrics element was found
    if (!this.element) {
      return this;
    }

    let lines = this.element.textContent.trim().split("\n");

    this.element.textContent = "";

    let lastTime = 0; // Remember last time stamp. If next lines doesn't
    // have beginning time stamp, use this value
    let lineElementsWithoutEndingTime = []; // Store elements without ending
    // time stamp and add later

    for (let i = 0; i < lines.length; i++) {
      // Make a new <div> element for the lyrics line
      let lineElement = document.createElement("div");
      lineElement.className = "rabbit-lyrics__line";
      this.element.appendChild(lineElement);
      this.lineElements.push(lineElement);

      let line = lines[i].trim();

      // Look up time stamps
      let timeStamps = line.match(/\[\d+:\d+\.\d+\]/g) || [];
      let beginningTimeStamp = line.match(/^\[\d+:\d+\.\d+\]/g) || [];
      let endingTimeStamp = line.match(/\[\d+:\d+\.\d+\]$/g) || [];

      // If this line has any timestamps, previous lines without ending
      // time stamps could use its first time stamp as ending time stamp
      if (timeStamps.length && lineElementsWithoutEndingTime.length) {
        lineElementsWithoutEndingTime.forEach(function(element) {
          element.dataset.end = this.decodeTimeStamp(timeStamps[0]);
        }, this);
        lineElementsWithoutEndingTime = [];
      }

      // Set beginning time. If not available, use lastTime instead
      if (beginningTimeStamp.length > 0) {
        lineElement.dataset.start = this.decodeTimeStamp(beginningTimeStamp[0]);
        lastTime = this.decodeTimeStamp(beginningTimeStamp[0]);
      } else {
        lineElement.dataset.start = lastTime;
      }

      // Set ending time. If not available, use Infinity instead and stored
      // for changes in future
      if (endingTimeStamp.length > 0) {
        lineElement.dataset.end = this.decodeTimeStamp(endingTimeStamp[0]);
        lastTime = this.decodeTimeStamp(endingTimeStamp[0]);
      } else {
        lineElement.dataset.end = Infinity;
        lineElementsWithoutEndingTime.push(lineElement);
      }

      // Remove parsed time stamps and append to element
      line = line.replace(/\[\d+:\d+\.\d+\]/g, "");

      // Use Non-Break Space for empty lines. Otherwise, the line hight of
      // will be 0
      if (!line) {
        line = "&nbsp;";
      }

      lineElement.innerHTML = line;
    }

    return this;
  }

  /**
   * Enable lyrics playback
   */
  enableLyrics() {
    // Do not do anything if no media element was found
    if (!this.mediaElement) {
      return this;
    }

    // Rest scroll bar
    this.element.scrollTop = 0;

    // Bind playback update events
    this.mediaElement.ontimeupdate = this.synchronize;

    this.mediaElement.onplay = this.setStatus;
    this.mediaElement.onplaying = this.setStatus;
    this.mediaElement.onpause = this.setStatus;
    this.mediaElement.onwaiting = this.setStatus;
    this.mediaElement.onended = this.setStatus;

    // Add enabled status class. Avoid initializing the same element twice
    this.element.classList.add("rabbit-lyrics--enabled");

    return this;
  }

  /**
   *
   * @param {Event} e Media element event
   */
  setStatus(e) {
    let status; // playing, paused, waiting, ended
    switch (e.type) {
      case 'play':
      case 'playing':
        status = 'playing';
        break;
      case 'pause':
        status = 'paused';
        break;
      case 'waiting':
        status = 'waiting';
        break;
      case 'ended':
        status = 'ended';
        break;
    }
    this.element.classList.remove("rabbit-lyrics--playing", "rabbit-lyrics--paused", "rabbit-lyrics--waiting", "rabbit-lyrics--ended");
    if (status) {
      this.element.classList.add("rabbit-lyrics--" + status);
    }
  }

  /**
   * Synchronize media element time and lyrics lines
   */
  synchronize() {
    let time = this.mediaElement.currentTime;
    let changed = false; // If here are active lines changed
    let activeLineElements = [];

    this.lineElements.forEach(element => {
      if (time >= element.dataset.start && time <= element.dataset.end) {
        // If line should be active
        if (!element.classList.contains("rabbit-lyrics__line--active")) {
          // If it hasn't been activated
          changed = true;
          element.classList.add("rabbit-lyrics__line--active");
        }
        activeLineElements.push(element);
      } else {
        // If line should be inactive
        if (element.classList.contains("rabbit-lyrics__line--active")) {
          // If it hasn't been deactivated
          changed = true;
          element.classList.remove("rabbit-lyrics__line--active");
        }
      }
    });

    if (changed && activeLineElements.length > 0) {
      // Calculate scroll top. Vertically align active lines in middle
      let activeLinesOffsetTop =
        (activeLineElements[0].offsetTop +
          activeLineElements[activeLineElements.length - 1].offsetTop +
          activeLineElements[activeLineElements.length - 1].offsetHeight) /
        2;
      this.scrollTop = activeLinesOffsetTop - this.element.clientHeight / 2;

      // Start scrolling animation
      clearInterval(this.scrollerInterval);
      this.scrollerTimer = this.scrollerIntervalDuration;
      this.scrollerInterval = setInterval(
        this.scroll,
        this.scrollerIntervalStep
      );
    }
  }

  /**
   * One step of scrolling animation
   */
  scroll() {
    // If it is already scrolled to position, stop animation interval
    if (this.scrollerTimer <= 0) {
      clearInterval(this.scrollerInterval);
      return;
    }

    let distance = this.scrollTop - this.element.scrollTop;
    let movement = (distance * this.scrollerIntervalStep) / this.scrollerTimer;

    this.element.scrollTop += movement;

    this.scrollerTimer -= this.scrollerIntervalStep;
  }

  /**
   * Convert time stamp to seconds
   * @param {string} timestamp Lyrics time stamp, in format [2:17.88] or [1:03:45.32]
   * @return {number} Time in seconds, float number
   */
  decodeTimeStamp(timestamp) {
    if (!timestamp || typeof timestamp !== "string") return 0;

    let results;

    // [hh:mm:ss.xx] format, used by some long audio books
    results = timestamp.match(/\[(\d+):(\d+):(\d+\.\d+)\]/);
    if (results && results.length === 4) {
      return (
        parseInt(results[1]) * 60 * 60 +
        parseInt(results[2]) * 60 +
        parseFloat(results[3])
      );
    }

    // [mm:ss.xx] format, widely used for songs
    results = timestamp.match(/\[(\d+):(\d+\.\d+)\]/);
    if (results && results.length === 3) {
      return parseInt(results[1]) * 60 + parseFloat(results[2]);
    }

    return 0;
  }
}

// Support HTML syntax (doesn't work in older IEs)
document.addEventListener(
  "DOMContentLoaded",
  function() {
    let elements = document.getElementsByClassName("rabbit-lyrics");

    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      let mediaElement = document.querySelector(element.dataset.media);
      let { viewMode, height, alignment } = element.dataset;
      let options = {
        element,
        mediaElement,
        viewMode,
        height,
        alignment
      };

      new RabbitLyrics(options);
    }
  },
  false
);


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ 1:
/*!***************************!*\
  !*** multi rabbit-lyrics ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! rabbit-lyrics */"./node_modules/rabbit-lyrics/src/index.js");


/***/ })

}]);