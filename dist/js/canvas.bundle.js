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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/platform.png */ "./src/js/img/platform.png");
/* harmony import */ var _img_hills_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/hills.png */ "./src/js/img/hills.png");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/background.png */ "./src/js/img/background.png");
/* harmony import */ var _img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/platformSmallTall.png */ "./src/js/img/platformSmallTall.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//import platform from './img/platform.png'




console.log(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]); // ilgili canvas tagımızı seçtik
//canvas çerçevemiz oluyor.

var canvas = document.querySelector('canvas'); //

var c = canvas.getContext('2d');
canvas.width = 1024; //innerWidth

canvas.height = 578; //innerHeight

var gravity = 1.5;

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.speed = 10;
    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 1
    };
    this.width = 30;
    this.height = 30;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.fillStyle = 'red';
      c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity; //düşmesini sağzlıyoruz burada
      //else this.velocity.y = 0
      //this.velocity.y += gravity;
    }
  }]);

  return Player;
}();

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.width = image.width;
    this.height = image.height;
    this.image = image;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}();

var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.width = image.width;
    this.height = image.height;
    this.image = image;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObject;
}();

function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}

var player = new Player();
var platforms = [new Platform({
  x: -1,
  y: 470,
  image: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
}), new Platform({
  x: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]).width - 5,
  y: 470,
  image: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
}), new Platform({
  x: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]).width * 2 + 100,
  y: 470,
  image: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
}), new Platform({
  x: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]).width * 3 + 200,
  y: 470,
  image: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
}), new Platform({
  x: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]).width * 4 + 300 - 2,
  y: 470,
  image: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
}), new Platform({
  x: createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"]).width * 4 + 300 - 2 + createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]).width,
  y: 245,
  image: createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
})];
var genericObject = [new GenericObject({
  x: -1,
  y: -1,
  image: createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_2__["default"])
}), new GenericObject({
  x: -1,
  y: -1,
  image: createImage(_img_hills_png__WEBPACK_IMPORTED_MODULE_1__["default"])
})];
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
var ScrollOffset = 0;

function init() {
  player = new Player();
  platforms = [new Platform({
    x: -1,
    y: 470,
    image: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]).width - 5,
    y: 470,
    image: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]).width * 2 + 100,
    y: 470,
    image: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]).width * 3 + 200,
    y: 470,
    image: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]).width * 4 + 300 - 2,
    y: 470,
    image: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"]).width * 4 + 300 - 2 + createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]).width,
    y: 245,
    image: createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  })];
  genericObject = [new GenericObject({
    x: -1,
    y: -1,
    image: createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  }), new GenericObject({
    x: -1,
    y: -1,
    image: createImage(_img_hills_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  })];
  var ScrollOffset = 0;
} //player.update()


function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);
  genericObject.forEach(function (genericObject) {
    genericObject.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  player.update();

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed;
  } else if (keys.left.pressed && player.position.x > 100) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      ScrollOffset += player.speed;
      platforms.forEach(function (platform) {
        platform.position.x -= player.speed;
      });
      genericObject.forEach(function (genericObject) {
        genericObject -= player.speed * 0.66;
      });
    } else if (keys.left.pressed) {
      ScrollOffset -= player.speed;
      platforms.forEach(function (platform) {
        platform.position.x += player.speed;
      });
      genericObject.forEach(function (genericObject) {
        genericObject += player.speed * 0.66;
      });
    }
  } //console.log(ScrollOffset)
  // platform collision detection


  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  }); // win condition

  if (ScrollOffset > 2000) {
    console.log('You Win !');
  } // lose condition


  if (player.position.y > canvas.height) {
    init();
    console.log('you lose');
  }
}

animate();
window.addEventListener('keydown', function (_ref3) {
  var keyCode = _ref3.keyCode;

  //console.log(keyCode)
  switch (keyCode) {
    case 65:
      console.log('left');
      keys.left.pressed = true;
      break;

    case 83:
      console.log('down');
      break;

    case 68:
      console.log('right');
      keys.right.pressed = true;
      break;

    case 87:
      console.log('up');
      player.velocity.y -= 10;
      break;
  }
});
window.addEventListener('keyup', function (_ref4) {
  var keyCode = _ref4.keyCode;

  //console.log(keyCode)
  switch (keyCode) {
    case 65:
      console.log('left');
      keys.left.pressed = false;
      break;

    case 83:
      console.log('down');
      break;

    case 68:
      console.log('right');
      keys.right.pressed = false;
      break;

    case 87:
      console.log('up');
      player.velocity.y -= 1;
      break;
  }
});

/***/ }),

/***/ "./src/js/img/background.png":
/*!***********************************!*\
  !*** ./src/js/img/background.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./src/js/img/hills.png":
/*!******************************!*\
  !*** ./src/js/img/hills.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/js/img/platform.png":
/*!*********************************!*\
  !*** ./src/js/img/platform.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/js/img/platformSmallTall.png":
/*!******************************************!*\
  !*** ./src/js/img/platformSmallTall.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0587f9be8e442eb74b2fe283bbf1a947.png");

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map