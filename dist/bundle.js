/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	AFRAME.registerComponent("hang", {
	  init: function init() {
	    var _this = this;

	    console.log('init called');
	    var el = this.el;
	    var entity = this;
	    el.addEventListener('body-loaded', function () {

	      var body = _this.el.body;
	      var anchor = new CANNON.Body({ mass: 0 });
	      var position = _this.el.object3D.position;
	      var worldX = el.object3D.matrixWorld.elements[12] + 0;
	      var worldY = el.object3D.matrixWorld.elements[13] + 0;
	      var worldZ = el.object3D.matrixWorld.elements[14] + 0;

	      anchor.position.set(worldX, worldY + 3, worldZ);
	      var constraint = new CANNON.PointToPointConstraint(body, new CANNON.Vec3(-.25, 1, 0), anchor, new CANNON.Vec3(0, 0, 0));
	      body.world.addConstraint(constraint);
	    });
	  }
	});

	AFRAME.registerComponent('cursor-listener', {
	  init: function init() {
	    var _this2 = this;

	    this.el.addEventListener('click', function (evt) {
	      var pnt = evt.detail.intersection.point;
	      //let wrld = this.el.sceneEl.camera.getWorldDirection()
	      var dirVector = new CANNON.Vec3(pnt.x * .3, pnt.y * .3, pnt.z * .3);
	      //let dirVector = new CANNON.Vec3(wrld.x*5,wrld.y*5,wrld.z*5)
	      _this2.el.body.applyLocalImpulse(dirVector, new CANNON.Vec3(pnt.x, pnt.y, pnt.z));
	    });
	  }
	});

/***/ }
/******/ ]);