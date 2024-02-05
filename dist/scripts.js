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

var lyrics = document.getElementById("lyrics");
var audioPlayer = document.getElementById("music");
var lines = document.getElementsByClassName("rabbit-lyrics__line");
new rabbit_lyrics__WEBPACK_IMPORTED_MODULE_0__["default"]({
  element: lyrics,
  mediaElement: audioPlayer
});
setTimeout(function () {
  var _loop = function _loop() {
    var line = lines.item(i);
    var start = line.dataset.start;
    line.addEventListener('click', function () {
      audioPlayer.currentTime = start;
    });
  };
  for (var i = 0; i < lines.length; i++) {
    _loop();
  }
}, 3000);

/***/ }),

/***/ 0:
/*!***********************************************!*\
  !*** multi ./src/scripts.js ./src/styles.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/mike/Sites/lyrics/src/scripts.js */"./src/scripts.js");
!(function webpackMissingModule() { var e = new Error("Cannot find module '/Users/mike/Sites/lyrics/src/styles.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


/***/ })

},[[0,"/dist/manifest","/dist/vendor"]]]);