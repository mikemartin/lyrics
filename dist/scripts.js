(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/dist/scripts"],{

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rabbit_lyrics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rabbit-lyrics */ "./node_modules/rabbit-lyrics/src/index.js");

var audioPlayer = document.getElementById("music");
var vocals = document.getElementById("vocals");
vocals.addEventListener('click', function () {
  if (this.classList.contains("vocals-on")) {
    this.classList.remove("vocals-on");
    audioPlayer.src = 'audio.mp3';
  } else {
    this.classList.add("vocals-on");
    audioPlayer.src = 'audio-vocals.mp3';
  }

  audioPlayer.play();
});
new rabbit_lyrics__WEBPACK_IMPORTED_MODULE_0__["default"]({
  element: document.getElementById("lyrics"),
  mediaElement: audioPlayer
});

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!***********************************************!*\
  !*** multi ./src/scripts.js ./src/styles.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/mike/Sites/lyrics/src/scripts.js */"./src/scripts.js");
module.exports = __webpack_require__(/*! /Users/mike/Sites/lyrics/src/styles.css */"./src/styles.css");


/***/ })

},[[0,"/dist/manifest","/dist/vendor"]]]);