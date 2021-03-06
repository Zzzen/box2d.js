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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/*
	 * Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
	 *
	 * This software is provided 'as-is', without any express or implied
	 * warranty.  In no event will the authors be held liable for any damages
	 * arising from the use of this software.
	 * Permission is granted to anyone to use this software for any purpose,
	 * including commercial applications, and to alter it and redistribute it
	 * freely, subject to the following restrictions:
	 * 1. The origin of this software must not be misrepresented; you must not
	 * claim that you wrote the original software. If you use this software
	 * in a product, an acknowledgment in the product documentation would be
	 * appreciated but is not required.
	 * 2. Altered source versions must be plainly marked as such, and must not be
	 * misrepresented as being the original software.
	 * 3. This notice may not be removed or altered from any source distribution.
	 */

	/**
	\mainpage Box2D API Documentation

	\section intro_sec Getting Started

	For documentation please see http://box2d.org/documentation.html

	For discussion please visit http://box2d.org/forum
	*/

	window.goog = {
	    inherits: function inherits(d, b) {
	        for (var p in b) {
	            if (b.hasOwnProperty(p)) d[p] = b[p];
	        }function __() {
	            this.constructor = d;
	        }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    }
	};

	// These include files constitute the main Box2D API
	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);

	__webpack_require__(4);
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);

	__webpack_require__(11);
	__webpack_require__(7);

	__webpack_require__(12);
	__webpack_require__(15);

	__webpack_require__(16);
	__webpack_require__(17);
	__webpack_require__(18);
	__webpack_require__(19);
	__webpack_require__(20);

	__webpack_require__(23);

	__webpack_require__(37);
	__webpack_require__(38);
	__webpack_require__(39);
	__webpack_require__(40);
	__webpack_require__(41);
	__webpack_require__(42);
	__webpack_require__(43);
	__webpack_require__(44);
	__webpack_require__(45);
	__webpack_require__(46);
	__webpack_require__(47);
	__webpack_require__(48);

	//#if B2_ENABLE_ROPE
	__webpack_require__(49);
	//#endif

	// //#if B2_ENABLE_CONTROLLER
	// require('../../Contributions/Enhancements/Controllers/b2BuoyancyController');
	// require('../../Contributions/Enhancements/Controllers/b2ConstantAccelController');
	// require('../../Contributions/Enhancements/Controllers/b2ConstantForceController');
	// require('../../Contributions/Enhancements/Controllers/b2GravityController');
	// require('../../Contributions/Enhancements/Controllers/b2TensorDampingController');
	// //#endif

	// //#if B2_ENABLE_PARTICLE
	// require('./Particle/b2Particle');
	// require('./Particle/b2ParticleGroup');
	// require('./Particle/b2ParticleSystem');
	// require('./Particle/b2StackQueue');
	// require('./Particle/b2VoronoiDiagram');
	// //#endif

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	/*
	 * Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
	 *
	 * This software is provided 'as-is', without any express or implied
	 * warranty.  In no event will the authors be held liable for any damages
	 * arising from the use of this software.
	 * Permission is granted to anyone to use this software for any purpose,
	 * including commercial applications, and to alter it and redistribute it
	 * freely, subject to the following restrictions:
	 * 1. The origin of this software must not be misrepresented; you must not
	 * claim that you wrote the original software. If you use this software
	 * in a product, an acknowledgment in the product documentation would be
	 * appreciated but is not required.
	 * 2. Altered source versions must be plainly marked as such, and must not be
	 * misrepresented as being the original software.
	 * 3. This notice may not be removed or altered from any source distribution.
	 */

	//goog.require('goog.asserts');
	//goog.require('goog.string.format');

	window.box2d = { b2JointFactory: {} };

	if (!Object.defineProperty) {
	  Object.defineProperty = function (obj, name, options) {
	    if (Object.__defineGetter__) {
	      if ('get' in options) {
	        obj.__defineGetter__(name, options.get);
	      } else if ('value' in options) {
	        obj.__defineGetter__(name, options.value);
	      }
	    }

	    if (Object.__defineSetter__) {
	      if ('set' in options) {
	        obj.__defineSetter__(name, options.set);
	      } else if ('value' in options) {
	        obj.__defineSetter__(name, options.value);
	      }
	    }
	    return obj;
	  };
	}

	/**
	 * @export
	 * @define {boolean}
	 */
	box2d.DEBUG = true;

	/**
	 * @export
	 * @define {boolean}
	 */
	box2d.ENABLE_ASSERTS = box2d.DEBUG;

	/**
	 * @export
	 * @return {void}
	 * @param {boolean} condition
	 * @param {string=} opt_message
	 * @param {...} var_args
	 */
	box2d.b2Assert = function (condition, opt_message, var_args) {
	  if (box2d.DEBUG) {
	    if (!condition) {
	      throw new Error();
	    }

	    //goog.asserts.assert(condition, opt_message, var_args);
	  }
	};

	/**
	 * @export
	 * @const
	 * @type {number}
	 */
	box2d.b2_maxFloat = 1E+37; // FLT_MAX instead of Number.MAX_VALUE;
	/**
	 * @export
	 * @const
	 * @type {number}
	 */
	box2d.b2_epsilon = 1E-5; // FLT_EPSILON instead of Number.MIN_VALUE;
	/**
	 * @export
	 * @const
	 * @type {number}
	 */
	box2d.b2_epsilon_sq = box2d.b2_epsilon * box2d.b2_epsilon;
	/**
	 * @export
	 * @const
	 * @type {number}
	 */
	box2d.b2_pi = Math.PI;

	/**
	 * Global tuning constants based on meters-kilograms-seconds
	 * (MKS) units.
	 */

	// Collision

	/**
	 * The maximum number of contact points between two convex
	 * shapes. Do not change this value.
	 * @export
	 * @const
	 * @type {number}
	 */
	box2d.b2_maxManifoldPoints = 2;

	/**
	 * The maximum number of vertices on a convex polygon. You
	 * cannot increase this too much because b2BlockAllocator has a
	 * maximum object size.
	 * @export
	 * @const
	 * @type {number}
	 */
	box2d.b2_maxPolygonVertices = 8;

	/**
	 * This is used to fatten AABBs in the dynamic tree. This allows
	 * proxies to move by a small amount without triggering a tree
	 * adjustment.
	 * This is in meters.
	 * @export
	 * @const
	 * @type {number}
	 */
	box2d.b2_aabbExtension = 0.1;

	/**
	 * This is used to fatten AABBs in the dynamic tree. This is
	 * used to predict the future position based on the current
	 * displacement.
	 * This is a dimensionless multiplier.
	 * @export
	 * @const
	 * @type {number}
	 */
	box2d.b2_aabbMultiplier = 2;

	/**
	 * A small length used as a collision and constraint tolerance.
	 * Usually it is chosen to be numerically significant, but
	 * visually insignificant.
	 * @export
	 * @const
	 * @type {number}
	 */
	box2d.b2_linearSlop = 0.008; //0.005;

	/**
	 * A small angle used as a collision and constraint tolerance.
	 * Usually it is chosen to be numerically significant, but
	 * visually insignificant.
	 * @export
	 * @const
	 * @type {number}
	 */
	box2d.b2_angularSlop = 2 / 180 * box2d.b2_pi;

	/**
	 * The radius of the polygon/edge shape skin. This should not be
	 * modified. Making this smaller means polygons will have an
	 * insufficient buffer for continuous collision.
	 * Making it larger may create artifacts for vertex collision.
	 * @export
	 * @const
	 * @type {number}
	 */
	box2d.b2_polygonRadius = 2 * box2d.b2_linearSlop;

	/**
	 * Maximum number of sub-steps per contact in continuous physics
	 * simulation.
	 * @export
	 * @const
	 * @type {number}
	 */
	box2d.b2_maxSubSteps = 8;

	// Dynamics

	/**
	 * Maximum number of contacts to be handled to solve a TOI
	 * impact.
	 * @export
	 * @const
	 * @type {number}
	 */
	box2d.b2_maxTOIContacts = 32;

	/**
	 * A velocity threshold for elastic collisions. Any collision
	 * with a relative linear velocity below this threshold will be
	 * treated as inelastic.
	 * @export
	 * @const
	 * @type {number}
	 */
	box2d.b2_velocityThreshold = 1;

	/**
	 * The maximum linear position correction used when solving
	 * constraints. This helps to prevent overshoot.
	 * @export
	 * @const
	 * @type {number}
	 */
	box2d.b2_maxLinearCorrection = 0.2;

	/**
	 * The maximum angular position correction used when solving
	 * constraints. This helps to prevent overshoot.
	 * @export
	 * @const
	 * @type {number}
	 */
	box2d.b2_maxAngularCorrection = 8 / 180 * box2d.b2_pi;

	/**
	 * The maximum linear velocity of a body. This limit is very
	 * large and is used to prevent numerical problems. You
	 * shouldn't need to adjust this.
	 * @export
	 * @const
	 * @type {number}
	 */
	box2d.b2_maxTranslation = 2;
	/**
	 * @export
	 * @const
	 * @type {number}
	 */
	box2d.b2_maxTranslationSquared = box2d.b2_maxTranslation * box2d.b2_maxTranslation;

	/**
	 * The maximum angular velocity of a body. This limit is very
	 * large and is used to prevent numerical problems. You
	 * shouldn't need to adjust this.
	 * @export
	 * @const
	 * @type {number}
	 */
	box2d.b2_maxRotation = 0.5 * box2d.b2_pi;
	/**
	 * @export
	 * @const
	 * @type {number}
	 */
	box2d.b2_maxRotationSquared = box2d.b2_maxRotation * box2d.b2_maxRotation;

	/**
	 * This scale factor controls how fast overlap is resolved.
	 * Ideally this would be 1 so that overlap is removed in one
	 * time step. However using values close to 1 often lead to
	 * overshoot.
	 * @export
	 * @const
	 * @type {number}
	 */
	box2d.b2_baumgarte = 0.2;
	/**
	 * @export
	 * @const
	 * @type {number}
	 */
	box2d.b2_toiBaumgarte = 0.75;

	//#if B2_ENABLE_PARTICLE

	// Particle

	/**
	 * A symbolic constant that stands for particle allocation
	 * error.
	 *
	 * @export
	 * @const
	 * @type {number}
	 */
	box2d.b2_invalidParticleIndex = -1;

	/**
	 * @export
	 * @const
	 * @type {number}
	 */
	box2d.b2_maxParticleIndex = 0x7FFFFFFF;

	/**
	 * The default distance between particles, multiplied by the
	 * particle diameter.
	 *
	 * @export
	 * @const
	 * @type {number}
	 */
	box2d.b2_particleStride = 0.75;

	/**
	 * The minimum particle weight that produces pressure.
	 *
	 * @export
	 * @const
	 * @type {number}
	 */
	box2d.b2_minParticleWeight = 1.0;

	/**
	 * The upper limit for particle pressure.
	 *
	 * @export
	 * @const
	 * @type {number}
	 */
	box2d.b2_maxParticlePressure = 0.25;

	/**
	 * The upper limit for force between particles.
	 *
	 * @export
	 * @const
	 * @type {number}
	 */
	box2d.b2_maxParticleForce = 0.5;

	/**
	 * The maximum distance between particles in a triad, multiplied
	 * by the particle diameter.
	 *
	 * @export
	 * @const
	 * @type {number}
	 */
	box2d.b2_maxTriadDistance = 2.0;

	/**
	 * @export
	 * @const
	 * @type {number}
	 */
	box2d.b2_maxTriadDistanceSquared = box2d.b2_maxTriadDistance * box2d.b2_maxTriadDistance;

	/**
	 * The initial size of particle data buffers.
	 *
	 * @export
	 * @const
	 * @type {number}
	 */
	box2d.b2_minParticleSystemBufferCapacity = 256;

	/**
	 * The time into the future that collisions against barrier
	 * particles will be detected.
	 *
	 * @export
	 * @const
	 * @type {number}
	 */
	box2d.b2_barrierCollisionTime = 2.5;

	//#endif


	// Sleep

	/**
	 * The time that a body must be still before it will go to
	 * sleep.
	 * @export
	 * @const
	 * @type {number}
	 */
	box2d.b2_timeToSleep = 0.5;

	/**
	 * A body cannot sleep if its linear velocity is above this
	 * tolerance.
	 * @export
	 * @const
	 * @type {number}
	 */
	box2d.b2_linearSleepTolerance = 0.01;

	/**
	 * A body cannot sleep if its angular velocity is above this
	 * tolerance.
	 * @export
	 * @const
	 * @type {number}
	 */
	box2d.b2_angularSleepTolerance = 2 / 180 * box2d.b2_pi;

	// Memory Allocation

	/**
	 * Implement this function to use your own memory allocator.
	 * @export
	 * @return {*}
	 * @param {number} size
	 */
	box2d.b2Alloc = function (size) {
	  return null;
	};

	/**
	 * If you implement b2Alloc, you should also implement this
	 * function.
	 * @export
	 * @return {void}
	 * @param {*} mem
	 */
	box2d.b2Free = function (mem) {};

	/**
	 * Logging function.
	 * You can modify this to use your logging facility.
	 * @export
	 * @return {void}
	 * @param {...string|number|boolean} var_args
	 */
	box2d.b2Log = function (var_args) {
	  goog.global.console.log.apply(null, arguments);
	};

	/**
	 * Version numberinf scheme See
	 * http://en.wikipedia.org/wiki/Software_versioning
	 * @export
	 * @constructor
	 * @param {number=} major
	 * @param {number=} minor
	 * @param {number=} revision
	 */
	box2d.b2Version = function (major, minor, revision) {
	  this.major = major || 0;
	  this.minor = minor || 0;
	  this.revision = revision || 0;
	};

	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Version.prototype.major = 0; ///< significant changes
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Version.prototype.minor = 0; ///< incremental changes
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Version.prototype.revision = 0; ///< bug fixes

	/**
	 * @export
	 * @return {string}
	 */
	box2d.b2Version.prototype.toString = function () {
	  return this.major + "." + this.minor + "." + this.revision;
	};

	/**
	 * Current version.
	 * @export
	 * @const
	 * @type {box2d.b2Version}
	 */
	box2d.b2_version = new box2d.b2Version(2, 3, 2);
	/**
	 * @export
	 * @const
	 * @type {number}
	 */
	box2d.b2_changelist = 313;

	/**
	 * @export
	 * @return {number}
	 * @param {string} v
	 */
	box2d.b2ParseInt = function (v) {
	  return parseInt(v, 10);
	};

	/**
	 * @export
	 * @return {number}
	 * @param {string} v
	 */
	box2d.b2ParseUInt = function (v) {
	  return box2d.b2Abs(parseInt(v, 10));
	};

	/**
	 * @export
	 * @return {Array.<*>}
	 * @param {number=} length
	 * @param {function(number): *=} init
	 */
	box2d.b2MakeArray = function (length, init) {
	  length = typeof length === 'number' ? length : 0;
	  var a = [];
	  if (typeof init === 'function') {
	    for (var i = 0; i < length; ++i) {
	      a.push(init(i));
	    }
	  } else {
	    for (var i = 0; i < length; ++i) {
	      a.push(null);
	    }
	  }
	  return a;
	};

	/**
	 * @export
	 * @return {Array.<number>}
	 * @param {number=} length
	 */
	box2d.b2MakeNumberArray = function (length) {
	  return box2d.b2MakeArray(length, function (i) {
	    return 0;
	  });
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	/**
	 * Color for debug drawing. Each value has the range [0,1].
	 * @export
	 * @constructor
	 * @param {number} rr
	 * @param {number} gg
	 * @param {number} bb
	 * @param {number=} aa
	 */
	box2d.b2Color = function (rr, gg, bb, aa) {
	  this.r = rr;
	  this.g = gg;
	  this.b = bb;
	  this.a = typeof aa === 'number' ? aa : 1.0;
	};

	/**
	 * @export
	 * @type {number}
	 */
	/*
	 * Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
	 *
	 * This software is provided 'as-is', without any express or implied
	 * warranty.  In no event will the authors be held liable for any damages
	 * arising from the use of this software.
	 * Permission is granted to anyone to use this software for any purpose,
	 * including commercial applications, and to alter it and redistribute it
	 * freely, subject to the following restrictions:
	 * 1. The origin of this software must not be misrepresented; you must not
	 * claim that you wrote the original software. If you use this software
	 * in a product, an acknowledgment in the product documentation would be
	 * appreciated but is not required.
	 * 2. Altered source versions must be plainly marked as such, and must not be
	 * misrepresented as being the original software.
	 * 3. This notice may not be removed or altered from any source distribution.
	 */

	box2d.b2Color.prototype.r = 0.5;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Color.prototype.g = 0.5;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Color.prototype.b = 0.5;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Color.prototype.a = 1.0;

	/**
	 * @export
	 * @return {box2d.b2Color}
	 * @param {number} rr
	 * @param {number} gg
	 * @param {number} bb
	 */
	box2d.b2Color.prototype.SetRGB = function (rr, gg, bb) {
	  this.r = rr;
	  this.g = gg;
	  this.b = bb;
	  return this;
	};

	/**
	 * @export
	 * @return {string}
	 * @param {number=} alpha
	 */
	box2d.b2Color.prototype.MakeStyleString = function (alpha) {
	  var r = Math.round(Math.max(0, Math.min(255, this.r * 255)));
	  var g = Math.round(Math.max(0, Math.min(255, this.g * 255)));
	  var b = Math.round(Math.max(0, Math.min(255, this.b * 255)));
	  var a = typeof alpha === 'undefined' ? this.a : Math.max(0, Math.min(1, alpha));
	  return box2d.b2Color.MakeStyleString(r, g, b, a);
	};

	/**
	 * @export
	 * @return {string}
	 */
	box2d.b2Color.MakeStyleString = function (r, g, b, a) {
	  if (a < 1) {
	    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
	  } else {
	    return 'rgb(' + r + ',' + g + ',' + b + ')';
	  }
	};

	/**
	 * @export
	 * @const
	 * @type {box2d.b2Color}
	 */
	box2d.b2Color.RED = new box2d.b2Color(1, 0, 0);
	/**
	 * @export
	 * @const
	 * @type {box2d.b2Color}
	 */
	box2d.b2Color.GREEN = new box2d.b2Color(0, 1, 0);
	/**
	 * @export
	 * @const
	 * @type {box2d.b2Color}
	 */
	box2d.b2Color.BLUE = new box2d.b2Color(0, 0, 1);

	/**
	 * @export
	 * @enum
	 */
	box2d.b2DrawFlags = {
	  e_none: 0,
	  e_shapeBit: 0x0001, ///< draw shapes
	  e_jointBit: 0x0002, ///< draw joint connections
	  e_aabbBit: 0x0004, ///< draw axis aligned bounding boxes
	  e_pairBit: 0x0008, ///< draw broad-phase pairs
	  e_centerOfMassBit: 0x0010, ///< draw center of mass frame
	  //#if B2_ENABLE_CONTROLLER
	  e_controllerBit: 0x0020, /// @see box2d.b2Controller list
	  //#endif
	  //#if B2_ENABLE_PARTICLE
	  e_particleBit: 0x0040, ///< draw particles
	  //#endif
	  e_all: 0xffff
	};

	//#if B2_ENABLE_CONTROLLER

	//#endif
	//#if B2_ENABLE_PARTICLE

	//#endif


	/**
	 * Implement and register this class with a b2World to provide
	 * debug drawing of physics entities in your game.
	 * @export
	 * @constructor
	 */
	box2d.b2Draw = function () {};

	/**
	 * @export
	 * @type {box2d.b2DrawFlags}
	 */
	box2d.b2Draw.prototype.m_drawFlags = box2d.b2DrawFlags.e_none;

	/**
	 * Set the drawing flags.
	 * @export
	 * @return {void}
	 * @param {box2d.b2DrawFlags} flags
	 */
	box2d.b2Draw.prototype.SetFlags = function (flags) {
	  this.m_drawFlags = flags;
	};

	/**
	 * Get the drawing flags.
	 * @export
	 * @return {box2d.b2DrawFlags}
	 */
	box2d.b2Draw.prototype.GetFlags = function () {
	  return this.m_drawFlags;
	};

	/**
	 * Append flags to the current flags.
	 * @export
	 * @return {void}
	 * @param {box2d.b2DrawFlags} flags
	 */
	box2d.b2Draw.prototype.AppendFlags = function (flags) {
	  this.m_drawFlags |= flags;
	};

	/**
	 * Clear flags from the current flags.
	 * @export
	 * @return {void}
	 * @param {box2d.b2DrawFlags} flags
	 */
	box2d.b2Draw.prototype.ClearFlags = function (flags) {
	  this.m_drawFlags &= ~flags;
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2Transform} xf
	 */
	box2d.b2Draw.prototype.PushTransform = function (xf) {};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2Transform} xf
	 */
	box2d.b2Draw.prototype.PopTransform = function (xf) {};

	/**
	 * Draw a closed polygon provided in CCW order.
	 * @export
	 * @return {void}
	 * @param {Array.<box2d.b2Vec2>} vertices
	 * @param {number} vertexCount
	 * @param {box2d.b2Color} color
	 */
	box2d.b2Draw.prototype.DrawPolygon = function (vertices, vertexCount, color) {};

	/**
	 * Draw a solid closed polygon provided in CCW order.
	 * @export
	 * @return {void}
	 * @param {Array.<box2d.b2Vec2>} vertices
	 * @param {number} vertexCount
	 * @param {box2d.b2Color} color
	 */
	box2d.b2Draw.prototype.DrawSolidPolygon = function (vertices, vertexCount, color) {};

	/**
	 * Draw a circle.
	 * @export
	 * @return {void}
	 * @param {box2d.b2Vec2} center
	 * @param {number} radius
	 * @param {box2d.b2Color} color
	 */
	box2d.b2Draw.prototype.DrawCircle = function (center, radius, color) {};

	/**
	 * Draw a solid circle.
	 * @export
	 * @return {void}
	 * @param {box2d.b2Vec2} center
	 * @param {number} radius
	 * @param {box2d.b2Vec2} axis
	 * @param {box2d.b2Color} color
	 */
	box2d.b2Draw.prototype.DrawSolidCircle = function (center, radius, axis, color) {};

	//#if B2_ENABLE_PARTICLE

	/**
	 * Draw a particle array
	 * @export
	 * @return {void}
	 * @param {Array.<box2d.b2Vec2>} centers
	 * @param {number} radius
	 * @param {Array.<box2d.b2ParticleColor>} colors
	 * @param {number} count
	 */
	box2d.b2Draw.prototype.DrawParticles = function (centers, radius, colors, count) {};

	//#endif

	/**
	 * Draw a line segment.
	 * @export
	 * @return {void}
	 * @param {box2d.b2Vec2} p1
	 * @param {box2d.b2Vec2} p2
	 * @param {box2d.b2Color} color
	 */
	box2d.b2Draw.prototype.DrawSegment = function (p1, p2, color) {};

	/**
	 * Draw a transform. Choose your own length scale.
	 * @export
	 * @return {void}
	 * @param {box2d.b2Transform} xf a transform.
	 */
	box2d.b2Draw.prototype.DrawTransform = function (xf) {};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	/**
	 * Timer for profiling. This has platform specific code and may
	 * not work on every platform.
	 * @export
	 * @constructor
	 */
	box2d.b2Timer = function () {
	  this.m_start = new Date().getTime();
	};

	/**
	 * @export
	 * @type {number}
	 */
	/*
	 * Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
	 *
	 * This software is provided 'as-is', without any express or implied
	 * warranty.  In no event will the authors be held liable for any damages
	 * arising from the use of this software.
	 * Permission is granted to anyone to use this software for any purpose,
	 * including commercial applications, and to alter it and redistribute it
	 * freely, subject to the following restrictions:
	 * 1. The origin of this software must not be misrepresented; you must not
	 * claim that you wrote the original software. If you use this software
	 * in a product, an acknowledgment in the product documentation would be
	 * appreciated but is not required.
	 * 2. Altered source versions must be plainly marked as such, and must not be
	 * misrepresented as being the original software.
	 * 3. This notice may not be removed or altered from any source distribution.
	 */

	box2d.b2Timer.prototype.m_start = 0;

	/**
	 * @export
	 * @return {box2d.b2Timer}
	 */
	box2d.b2Timer.prototype.Reset = function () {
	  this.m_start = new Date().getTime();
	  return this;
	};

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2Timer.prototype.GetMilliseconds = function () {
	  return new Date().getTime() - this.m_start;
	};

	/**
	 * @export
	 * @constructor
	 */
	box2d.b2Counter = function () {};

	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Counter.prototype.m_count = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Counter.prototype.m_min_count = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Counter.prototype.m_max_count = 0;

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2Counter.prototype.GetCount = function () {
	  return this.m_count;
	};

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2Counter.prototype.GetMinCount = function () {
	  return this.m_min_count;
	};

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2Counter.prototype.GetMaxCount = function () {
	  return this.m_max_count;
	};

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2Counter.prototype.ResetCount = function () {
	  var count = this.m_count;
	  this.m_count = 0;
	  return count;
	};

	/**
	 * @export
	 * @return {void}
	 */
	box2d.b2Counter.prototype.ResetMinCount = function () {
	  this.m_min_count = 0;
	};

	/**
	 * @export
	 * @return {void}
	 */
	box2d.b2Counter.prototype.ResetMaxCount = function () {
	  this.m_max_count = 0;
	};

	/**
	 * @export
	 * @return {void}
	 */
	box2d.b2Counter.prototype.Increment = function () {
	  this.m_count++;

	  if (this.m_max_count < this.m_count) {
	    this.m_max_count = this.m_count;
	  }
	};

	/**
	 * @export
	 * @return {void}
	 */
	box2d.b2Counter.prototype.Decrement = function () {
	  this.m_count--;

	  if (this.m_min_count > this.m_count) {
	    this.m_min_count = this.m_count;
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(5);

	/**
	 * A circle shape.
	 * @export
	 * @constructor
	 * @extends {box2d.b2Shape}
	 * @param {number=} radius
	 */
	box2d.b2CircleShape = function (radius) {
	  box2d.b2Shape.call(this, box2d.b2ShapeType.e_circleShape, radius || 0); // base class constructor

	  this.m_p = new box2d.b2Vec2();
	}; /*
	    * Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
	    *
	    * This software is provided 'as-is', without any express or implied
	    * warranty.  In no event will the authors be held liable for any damages
	    * arising from the use of this software.
	    * Permission is granted to anyone to use this software for any purpose,
	    * including commercial applications, and to alter it and redistribute it
	    * freely, subject to the following restrictions:
	    * 1. The origin of this software must not be misrepresented; you must not
	    * claim that you wrote the original software. If you use this software
	    * in a product, an acknowledgment in the product documentation would be
	    * appreciated but is not required.
	    * 2. Altered source versions must be plainly marked as such, and must not be
	    * misrepresented as being the original software.
	    * 3. This notice may not be removed or altered from any source distribution.
	    */

	goog.inherits(box2d.b2CircleShape, box2d.b2Shape);

	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2CircleShape.prototype.m_p = null;

	/**
	 * Implement box2d.b2Shape.
	 * @export
	 * @return {box2d.b2Shape}
	 */
	box2d.b2CircleShape.prototype.Clone = function () {
	  return new box2d.b2CircleShape().Copy(this);
	};

	/**
	 * @export
	 * @return {box2d.b2Shape}
	 * @param {box2d.b2Shape} other
	 */
	box2d.b2CircleShape.prototype.Copy = function (other) {
	  box2d.b2Shape.prototype.Copy.call(this, other);

	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(other instanceof box2d.b2CircleShape);
	  }

	  this.m_p.Copy(other.m_p);
	  return this;
	};

	/**
	 * Implement box2d.b2Shape.
	 * @export
	 * @return {number}
	 */
	box2d.b2CircleShape.prototype.GetChildCount = function () {
	  return 1;
	};

	/**
	 * Implement box2d.b2Shape.
	 * @export
	 * @return {boolean}
	 * @param {box2d.b2Transform} transform
	 * @param {box2d.b2Vec2} p
	 */
	box2d.b2CircleShape.prototype.TestPoint = function (transform, p) {
	  var center = box2d.b2Mul_X_V2(transform, this.m_p, box2d.b2CircleShape.prototype.TestPoint.s_center);
	  var d = box2d.b2Sub_V2_V2(p, center, box2d.b2CircleShape.prototype.TestPoint.s_d);
	  return box2d.b2Dot_V2_V2(d, d) <= box2d.b2Sq(this.m_radius);
	};
	box2d.b2CircleShape.prototype.TestPoint.s_center = new box2d.b2Vec2();
	box2d.b2CircleShape.prototype.TestPoint.s_d = new box2d.b2Vec2();

	//#if B2_ENABLE_PARTICLE

	/**
	 * @see b2Shape::ComputeDistance
	 * @export
	 * @return {number}
	 * @param {box2d.b2Transform} xf
	 * @param {box2d.b2Vec2} p
	 * @param {box2d.b2Vec2} normal
	 * @param {number} childIndex
	 */
	box2d.b2CircleShape.prototype.ComputeDistance = function (xf, p, normal, childIndex) {
	  var center = box2d.b2Mul_X_V2(xf, this.m_p, box2d.b2CircleShape.prototype.ComputeDistance.s_center);
	  var d = box2d.b2Sub_V2_V2(p, center, normal);
	  return normal.Normalize() - this.m_radius;
	};
	box2d.b2CircleShape.prototype.ComputeDistance.s_center = new box2d.b2Vec2();

	//#endif

	/**
	 * Implement box2d.b2Shape.
	 * Collision Detection in Interactive 3D Environments by Gino
	 * van den Bergen From Section 3.1.2
	 * x = s + a * r
	 * norm(x) = radius
	 * @export
	 * @return {boolean}
	 * @param {box2d.b2RayCastOutput} output
	 * @param {box2d.b2RayCastInput} input
	 * @param {box2d.b2Transform} transform
	 * @param {number} childIndex
	 */
	box2d.b2CircleShape.prototype.RayCast = function (output, input, transform, childIndex) {
	  var position = box2d.b2Mul_X_V2(transform, this.m_p, box2d.b2CircleShape.prototype.RayCast.s_position);
	  var s = box2d.b2Sub_V2_V2(input.p1, position, box2d.b2CircleShape.prototype.RayCast.s_s);
	  var b = box2d.b2Dot_V2_V2(s, s) - box2d.b2Sq(this.m_radius);

	  // Solve quadratic equation.
	  var r = box2d.b2Sub_V2_V2(input.p2, input.p1, box2d.b2CircleShape.prototype.RayCast.s_r);
	  var c = box2d.b2Dot_V2_V2(s, r);
	  var rr = box2d.b2Dot_V2_V2(r, r);
	  var sigma = c * c - rr * b;

	  // Check for negative discriminant and short segment.
	  if (sigma < 0 || rr < box2d.b2_epsilon) {
	    return false;
	  }

	  // Find the point of intersection of the line with the circle.
	  var a = -(c + box2d.b2Sqrt(sigma));

	  // Is the intersection point on the segment?
	  if (0 <= a && a <= input.maxFraction * rr) {
	    a /= rr;
	    output.fraction = a;
	    box2d.b2AddMul_V2_S_V2(s, a, r, output.normal).SelfNormalize();
	    return true;
	  }

	  return false;
	};
	box2d.b2CircleShape.prototype.RayCast.s_position = new box2d.b2Vec2();
	box2d.b2CircleShape.prototype.RayCast.s_s = new box2d.b2Vec2();
	box2d.b2CircleShape.prototype.RayCast.s_r = new box2d.b2Vec2();

	/**
	 * @see box2d.b2Shape::ComputeAABB
	 * @export
	 * @return {void}
	 * @param {box2d.b2AABB} aabb
	 * @param {box2d.b2Transform} transform
	 * @param {number} childIndex
	 */
	box2d.b2CircleShape.prototype.ComputeAABB = function (aabb, transform, childIndex) {
	  var p = box2d.b2Mul_X_V2(transform, this.m_p, box2d.b2CircleShape.prototype.ComputeAABB.s_p);
	  aabb.lowerBound.Set(p.x - this.m_radius, p.y - this.m_radius);
	  aabb.upperBound.Set(p.x + this.m_radius, p.y + this.m_radius);
	};
	box2d.b2CircleShape.prototype.ComputeAABB.s_p = new box2d.b2Vec2();

	/**
	 * @see box2d.b2Shape::ComputeMass
	 * @export
	 * @return {void}
	 * @param {box2d.b2MassData} massData
	 * @param {number} density
	 */
	box2d.b2CircleShape.prototype.ComputeMass = function (massData, density) {
	  var radius_sq = box2d.b2Sq(this.m_radius);
	  massData.mass = density * box2d.b2_pi * radius_sq;
	  massData.center.Copy(this.m_p);

	  // inertia about the local origin
	  massData.I = massData.mass * (0.5 * radius_sq + box2d.b2Dot_V2_V2(this.m_p, this.m_p));
	};

	/**
	 * @return {void}
	 * @param {box2d.b2DistanceProxy} proxy
	 * @param {number} index
	 */
	box2d.b2CircleShape.prototype.SetupDistanceProxy = function (proxy, index) {
	  proxy.m_vertices = proxy.m_buffer;
	  proxy.m_vertices[0].Copy(this.m_p);
	  proxy.m_count = 1;
	  proxy.m_radius = this.m_radius;
	};

	/**
	 * @export
	 * @return {number}
	 * @param {box2d.b2Vec2} normal
	 * @param {number} offset
	 * @param {box2d.b2Transform} xf
	 * @param {box2d.b2Vec2} c
	 */
	box2d.b2CircleShape.prototype.ComputeSubmergedArea = function (normal, offset, xf, c) {
	  /** @type {box2d.b2Vec2} */
	  var p = box2d.b2Mul_X_V2(xf, this.m_p, new box2d.b2Vec2());
	  /** @type {number} */
	  var l = -(box2d.b2Dot_V2_V2(normal, p) - offset);

	  if (l < -this.m_radius + box2d.b2_epsilon) {
	    //Completely dry
	    return 0;
	  }
	  if (l > this.m_radius) {
	    //Completely wet
	    c.Copy(p);
	    return box2d.b2_pi * this.m_radius * this.m_radius;
	  }

	  //Magic
	  /** @type {number} */
	  var r2 = this.m_radius * this.m_radius;
	  /** @type {number} */
	  var l2 = l * l;
	  /** @type {number} */
	  var area = r2 * (box2d.b2Asin(l / this.m_radius) + box2d.b2_pi / 2) + l * box2d.b2Sqrt(r2 - l2);
	  /** @type {number} */
	  var com = -2 / 3 * box2d.b2Pow(r2 - l2, 1.5) / area;

	  c.x = p.x + normal.x * com;
	  c.y = p.y + normal.y * com;

	  return area;
	};

	/**
	 * Dump this shape to the log file.
	 * @export
	 * @return {void}
	 */
	box2d.b2CircleShape.prototype.Dump = function () {
	  box2d.b2Log("    /*box2d.b2CircleShape*/ var shape = new box2d.b2CircleShape();\n");
	  box2d.b2Log("    shape.m_radius = %.15f;\n", this.m_radius);
	  box2d.b2Log("    shape.m_p.Set(%.15f, %.15f);\n", this.m_p.x, this.m_p.y);
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(6);

	__webpack_require__(7);

	/**
	 * This holds the mass data computed for a shape.
	 * @export
	 * @constructor
	 */
	box2d.b2MassData = function () {
	  this.center = new box2d.b2Vec2(0, 0);
	};

	/**
	 * The mass of the shape, usually in kilograms.
	 * @export
	 * @type {number}
	 */
	/*
	 * Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
	 *
	 * This software is provided 'as-is', without any express or implied
	 * warranty.  In no event will the authors be held liable for any damages
	 * arising from the use of this software.
	 * Permission is granted to anyone to use this software for any purpose,
	 * including commercial applications, and to alter it and redistribute it
	 * freely, subject to the following restrictions:
	 * 1. The origin of this software must not be misrepresented; you must not
	 * claim that you wrote the original software. If you use this software
	 * in a product, an acknowledgment in the product documentation would be
	 * appreciated but is not required.
	 * 2. Altered source versions must be plainly marked as such, and must not be
	 * misrepresented as being the original software.
	 * 3. This notice may not be removed or altered from any source distribution.
	 */

	box2d.b2MassData.prototype.mass = 0;

	/**
	 * The position of the shape's centroid relative to the shape's
	 * origin.
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2MassData.prototype.center = null;

	/**
	 * The rotational inertia of the shape about the local origin.
	 * @export
	 * @type {number}
	 */
	box2d.b2MassData.prototype.I = 0;

	/**
	 * @export
	 * @enum
	 */
	box2d.b2ShapeType = {
	  e_unknown: -1,
	  e_circleShape: 0,
	  e_edgeShape: 1,
	  e_polygonShape: 2,
	  e_chainShape: 3,
	  e_shapeTypeCount: 4
	};

	/**
	 * A shape is used for collision detection. You can create a
	 * shape however you like.
	 * Shapes used for simulation in box2d.b2World are created
	 * automatically when a box2d.b2Fixture is created. Shapes may
	 * encapsulate a one or more child shapes.
	 * @export
	 * @constructor
	 * @param {box2d.b2ShapeType} type
	 * @param {number} radius
	 */
	box2d.b2Shape = function (type, radius) {
	  this.m_type = type;
	  this.m_radius = radius;
	};

	/**
	 * @export
	 * @type {box2d.b2ShapeType}
	 */
	box2d.b2Shape.prototype.m_type = box2d.b2ShapeType.e_unknown;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Shape.prototype.m_radius = 0;

	/**
	 * Clone the concrete shape using the provided allocator.
	 * @export
	 * @return {box2d.b2Shape}
	 */
	box2d.b2Shape.prototype.Clone = function () {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(false);
	  }
	  return null;
	};

	/**
	 * @export
	 * @return {box2d.b2Shape}
	 * @param {box2d.b2Shape} other
	 */
	box2d.b2Shape.prototype.Copy = function (other) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(this.m_type === other.m_type);
	  }
	  this.m_radius = other.m_radius;
	  return this;
	};

	/**
	 * Get the type of this shape. You can use this to down cast to
	 * the concrete shape.
	 * @export
	 * @return {box2d.b2ShapeType} the shape type.
	 */
	box2d.b2Shape.prototype.GetType = function () {
	  return this.m_type;
	};

	/**
	 * Get the number of child primitives.
	 * @export
	 * @return {number}
	 */
	box2d.b2Shape.prototype.GetChildCount = function () {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(false, "pure virtual");
	  }
	  return 0;
	};

	/**
	 * Test a point for containment in this shape. This only works
	 * for convex shapes.
	 * @export
	 * @return {boolean}
	 * @param {box2d.b2Transform} xf the shape world transform.
	 * @param {box2d.b2Vec2} p a point in world coordinates.
	 */
	box2d.b2Shape.prototype.TestPoint = function (xf, p) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(false, "pure virtual");
	  }
	  return false;
	};

	//#if B2_ENABLE_PARTICLE

	/**
	 * Compute the distance from the current shape to the specified
	 * point. This only works for convex shapes.
	 * @export
	 * @return {number} returns the distance from the current shape.
	 * @param {box2d.b2Transform} xf the shape world transform.
	 * @param {box2d.b2Vec2} p a point in world coordinates.
	 * @param {box2d.b2Vec2} normal returns the direction in which
	 *      the distance increases.
	 * @param {number} childIndex
	 */
	box2d.b2Shape.prototype.ComputeDistance = function (xf, p, normal, childIndex) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(false, "pure virtual");
	  }
	  return 0;
	};

	//#endif

	/**
	 * Cast a ray against a child shape.
	 * @export
	 * @return {boolean}
	 * @param {box2d.b2RayCastOutput} output the ray-cast results.
	 * @param {box2d.b2RayCastInput} input the ray-cast input parameters.
	 * @param {box2d.b2Transform} transform the transform to be applied to the shape.
	 * @param {number} childIndex the child shape index
	 */
	box2d.b2Shape.prototype.RayCast = function (output, input, transform, childIndex) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(false, "pure virtual");
	  }
	  return false;
	};

	/**
	 * Given a transform, compute the associated axis aligned
	 * bounding box for a child shape.
	 * @export
	 * @return {void}
	 * @param {box2d.b2AABB} aabb returns the axis aligned box.
	 * @param {box2d.b2Transform} xf the world transform of the shape.
	 * @param {number} childIndex the child shape
	 */
	box2d.b2Shape.prototype.ComputeAABB = function (aabb, xf, childIndex) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(false, "pure virtual");
	  }
	};

	/**
	 * Compute the mass properties of this shape using its
	 * dimensions and density.
	 * The inertia tensor is computed about the local origin.
	 * @export
	 * @return {void}
	 * @param {box2d.b2MassData} massData returns the mass data for this shape.
	 * @param {number} density the density in kilograms per meter squared.
	 */
	box2d.b2Shape.prototype.ComputeMass = function (massData, density) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(false, "pure virtual");
	  }
	};

	/**
	 * @return {void}
	 * @param {box2d.b2DistanceProxy} proxy
	 * @param {number} index
	 */
	box2d.b2Shape.prototype.SetupDistanceProxy = function (proxy, index) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(false, "pure virtual");
	  }
	};

	/**
	 * @export
	 * @return {number}
	 * @param {box2d.b2Vec2} normal
	 * @param {number} offset
	 * @param {box2d.b2Transform} xf
	 * @param {box2d.b2Vec2} c
	 */
	box2d.b2Shape.prototype.ComputeSubmergedArea = function (normal, offset, xf, c) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(false, "pure virtual");
	  }
	  return 0;
	};

	/**
	 * Dump this shape to the log file.
	 * @export
	 * @return {void}
	 */
	box2d.b2Shape.prototype.Dump = function () {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(false, "pure virtual");
	  }
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2_pi_over_180 = box2d.b2_pi / 180.0;
	/**
	 * @export
	 * @type {number}
	 */
	/*
	 * Copyright (c) 2007-2009 Erin Catto http://www.box2d.org
	 *
	 * This software is provided 'as-is', without any express or implied
	 * warranty.  In no event will the authors be held liable for any damages
	 * arising from the use of this software.
	 * Permission is granted to anyone to use this software for any purpose,
	 * including commercial applications, and to alter it and redistribute it
	 * freely, subject to the following restrictions:
	 * 1. The origin of this software must not be misrepresented; you must not
	 * claim that you wrote the original software. If you use this software
	 * in a product, an acknowledgment in the product documentation would be
	 * appreciated but is not required.
	 * 2. Altered source versions must be plainly marked as such, and must not be
	 * misrepresented as being the original software.
	 * 3. This notice may not be removed or altered from any source distribution.
	 */

	box2d.b2_180_over_pi = 180.0 / box2d.b2_pi;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2_two_pi = 2.0 * box2d.b2_pi;

	/**
	 * @export
	 * @return {number}
	 * @param {number} n
	 */
	box2d.b2Abs = Math.abs;

	/**
	 * @export
	 * @return {number}
	 * @param {number} a
	 * @param {number} b
	 */
	box2d.b2Min = Math.min;

	/**
	 * @export
	 * @return {number}
	 * @param {number} a
	 * @param {number} b
	 */
	box2d.b2Max = Math.max;

	/**
	 * @export
	 * @return {number}
	 * @param {number} a
	 * @param {number} lo
	 * @param {number} hi
	 */
	box2d.b2Clamp = function (a, lo, hi) {
	  return Math.min(Math.max(a, lo), hi);
	};

	/**
	 * @export
	 * @return {number}
	 * @param {number} num
	 * @param {number} min
	 * @param {number} max
	 */
	box2d.b2Wrap = function (num, min, max) {
	  if (min < max) {
	    if (num < min) {
	      return max - (min - num) % (max - min);
	    } else {
	      return min + (num - min) % (max - min);
	    }
	  } else if (min === max) {
	    return min;
	  } else // (min > max)
	    {
	      return num;
	    }
	};

	/**
	 * @export
	 * @return {number}
	 * @param {number} rad
	 */
	box2d.b2WrapAngle = function (rad) {
	  if (rad < 0) {
	    return (rad - box2d.b2_pi) % box2d.b2_two_pi + box2d.b2_pi;
	  } else {
	    return (rad + box2d.b2_pi) % box2d.b2_two_pi - box2d.b2_pi;
	  }
	};

	/**
	 * @export
	 * @return {void}
	 * @param {Array.<number>} a
	 * @param {Array.<number>} b
	 */
	box2d.b2Swap = function (a, b) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(false);
	  }
	  var tmp = a[0];
	  a[0] = b[0];
	  b[0] = tmp;
	};

	/**
	 * This function is used to ensure that a floating point number
	 * is not a NaN or infinity.
	 * @export
	 * @return {boolean}
	 * @param {number} n
	 */
	box2d.b2IsValid = function (n) {
	  return isFinite(n);
	};

	/**
	 * @export
	 * @return {number}
	 * @param {number} n
	 */
	box2d.b2Sq = function (n) {
	  return n * n;
	};

	/**
	 * This is a approximate yet fast inverse square-root.
	 * @export
	 * @return {number}
	 * @param {number} n
	 */
	box2d.b2InvSqrt = function (n) {
	  return 1 / Math.sqrt(n);
	};

	/**
	 * @export
	 * @return {number}
	 * @param {number} n
	 */
	box2d.b2Sqrt = function (n) {
	  return Math.sqrt(n);
	};

	/**
	 * @export
	 * @return {number}
	 * @param {number} x
	 * @param {number} y
	 */
	box2d.b2Pow = function (x, y) {
	  return Math.pow(x, y);
	};

	/**
	 * @export
	 * @return {number}
	 * @param {number} degrees
	 */
	box2d.b2DegToRad = function (degrees) {
	  return degrees * box2d.b2_pi_over_180;
	};

	/**
	 * @export
	 * @return {number}
	 * @param {number} radians
	 */
	box2d.b2RadToDeg = function (radians) {
	  return radians * box2d.b2_180_over_pi;
	};

	/**
	 * @export
	 * @return {number}
	 * @param {number} radians
	 */
	box2d.b2Cos = function (radians) {
	  return Math.cos(radians);
	};

	/**
	 * @export
	 * @return {number}
	 * @param {number} radians
	 */
	box2d.b2Sin = function (radians) {
	  return Math.sin(radians);
	};

	/**
	 * @export
	 * @return {number}
	 * @param {number} n
	 */
	box2d.b2Acos = function (n) {
	  return Math.acos(n);
	};

	/**
	 * @export
	 * @return {number}
	 * @param {number} n
	 */
	box2d.b2Asin = function (n) {
	  return Math.asin(n);
	};

	/**
	 * @export
	 * @return {number}
	 * @param {number} y
	 * @param {number} x
	 */
	box2d.b2Atan2 = function (y, x) {
	  return Math.atan2(y, x);
	};

	/**
	 * Next Largest Power of 2
	 * Given a binary integer value x, the next largest power of 2
	 * can be computed by a SWAR algorithm that recursively "folds"
	 * the upper bits into the lower bits. This process yields a bit
	 * vector with the same most significant 1 as x, but all 1's
	 * below it. Adding 1 to that value yields the next largest
	 * power of 2. For a 32-bit value:
	 * @export
	 * @return {number}
	 * @param {number} x
	 */
	box2d.b2NextPowerOfTwo = function (x) {
	  x |= x >> 1 & 0x7FFFFFFF;
	  x |= x >> 2 & 0x3FFFFFFF;
	  x |= x >> 4 & 0x0FFFFFFF;
	  x |= x >> 8 & 0x00FFFFFF;
	  x |= x >> 16 & 0x0000FFFF;
	  return x + 1;
	};

	/**
	 * @export
	 * @return {boolean}
	 * @param {number} x
	 */
	box2d.b2IsPowerOfTwo = function (x) {
	  return x > 0 && (x & x - 1) === 0;
	};

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2Random = function () {
	  return Math.random() * 2.0 - 1.0;
	};

	/**
	 * @export
	 * @return {number}
	 * @param {number} lo
	 * @param {number} hi
	 */
	box2d.b2RandomRange = function (lo, hi) {
	  return (hi - lo) * Math.random() + lo;
	};

	/**
	 * A 2D column vector.
	 * @export
	 * @constructor
	 * @param {number=} x
	 * @param {number=} y
	 */
	box2d.b2Vec2 = function (x, y) {
	  this.x = x || 0.0;
	  this.y = y || 0.0;
	  //this.a = new Float32Array(2);
	  //this.a[0] = x || 0;
	  //this.a[1] = y || 0;
	};

	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Vec2.prototype.x = 0.0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Vec2.prototype.y = 0.0;

	//  /**
	//   * @type {Float32Array}
	//   */
	//  box2d.b2Vec2.prototype.a;
	//
	//  box2d.b2Vec2.prototype.__defineGetter__('x', function () { return this.a[0]; });
	//  box2d.b2Vec2.prototype.__defineGetter__('y', function () { return this.a[1]; });
	//  box2d.b2Vec2.prototype.__defineSetter__('x', function (n) { this.a[0] = n; });
	//  box2d.b2Vec2.prototype.__defineSetter__('y', function (n) { this.a[1] = n; });

	/**
	 * @export
	 * @const
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2Vec2_zero = new box2d.b2Vec2();
	/**
	 * @export
	 * @const
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2Vec2.ZERO = new box2d.b2Vec2();
	/**
	 * @export
	 * @const
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2Vec2.UNITX = new box2d.b2Vec2(1.0, 0.0);
	/**
	 * @export
	 * @const
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2Vec2.UNITY = new box2d.b2Vec2(0.0, 1.0);

	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2Vec2.s_t0 = new box2d.b2Vec2();
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2Vec2.s_t1 = new box2d.b2Vec2();
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2Vec2.s_t2 = new box2d.b2Vec2();
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2Vec2.s_t3 = new box2d.b2Vec2();

	/**
	 * @export
	 * @return {Array.<box2d.b2Vec2>}
	 * @param {number=} length
	 */
	box2d.b2Vec2.MakeArray = function (length) {
	  return box2d.b2MakeArray(length, function (i) {
	    return new box2d.b2Vec2();
	  });
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 */
	box2d.b2Vec2.prototype.Clone = function () {
	  return new box2d.b2Vec2(this.x, this.y);
	};

	/**
	 * Set this vector to all zeros.
	 * @export
	 * @return {box2d.b2Vec2}
	 */
	box2d.b2Vec2.prototype.SetZero = function () {
	  this.x = 0.0;
	  this.y = 0.0;
	  return this;
	};

	/**
	 * Set this vector to some specified coordinates.
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {number} x
	 * @param {number} y
	 */
	box2d.b2Vec2.prototype.Set = function (x, y) {
	  this.x = x;
	  this.y = y;
	  return this;
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} other
	 */
	box2d.b2Vec2.prototype.Copy = function (other) {
	  //if (box2d.ENABLE_ASSERTS) { box2d.b2Assert(this !== other); }
	  this.x = other.x;
	  this.y = other.y;
	  return this;
	};

	/**
	 * Add a vector to this vector.
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} v
	 */
	box2d.b2Vec2.prototype.SelfAdd = function (v) {
	  this.x += v.x;
	  this.y += v.y;
	  return this;
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {number} x
	 * @param {number} y
	 */
	box2d.b2Vec2.prototype.SelfAddXY = function (x, y) {
	  this.x += x;
	  this.y += y;
	  return this;
	};

	/**
	 * Subtract a vector from this vector.
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} v
	 */
	box2d.b2Vec2.prototype.SelfSub = function (v) {
	  this.x -= v.x;
	  this.y -= v.y;
	  return this;
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {number} x
	 * @param {number} y
	 */
	box2d.b2Vec2.prototype.SelfSubXY = function (x, y) {
	  this.x -= x;
	  this.y -= y;
	  return this;
	};

	/**
	 * Multiply this vector by a scalar.
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {number} s
	 */
	box2d.b2Vec2.prototype.SelfMul = function (s) {
	  this.x *= s;
	  this.y *= s;
	  return this;
	};

	/**
	 * this += s * v
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {number} s
	 * @param {box2d.b2Vec2} v
	 */
	box2d.b2Vec2.prototype.SelfMulAdd = function (s, v) {
	  this.x += s * v.x;
	  this.y += s * v.y;
	  return this;
	};

	/**
	 * this -= s * v
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {number} s
	 * @param {box2d.b2Vec2} v
	 */
	box2d.b2Vec2.prototype.SelfMulSub = function (s, v) {
	  this.x -= s * v.x;
	  this.y -= s * v.y;
	  return this;
	};

	/**
	 * @export
	 * @return {number}
	 * @param {box2d.b2Vec2} v
	 */
	box2d.b2Vec2.prototype.Dot = function (v) {
	  return this.x * v.x + this.y * v.y;
	};

	/**
	 * @export
	 * @return {number}
	 * @param {box2d.b2Vec2} v
	 */
	box2d.b2Vec2.prototype.Cross = function (v) {
	  return this.x * v.y - this.y * v.x;
	};

	/**
	 * Get the length of this vector (the norm).
	 * @export
	 * @return {number}
	 */
	box2d.b2Vec2.prototype.Length = function () {
	  var x = this.x,
	      y = this.y;
	  return Math.sqrt(x * x + y * y);
	};

	/**
	 * Get the length squared. For performance, use this instead of
	 * b2Vec2::Length (if possible).
	 * @export
	 * @return {number}
	 */
	box2d.b2Vec2.prototype.LengthSquared = function () {
	  var x = this.x,
	      y = this.y;
	  return x * x + y * y;
	};

	/**
	 * Convert this vector into a unit vector. Returns the length.
	 * @export
	 * @return {number}
	 */
	box2d.b2Vec2.prototype.Normalize = function () {
	  var length = this.Length();
	  if (length >= box2d.b2_epsilon) {
	    var inv_length = 1.0 / length;
	    this.x *= inv_length;
	    this.y *= inv_length;
	  }
	  return length;
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 */
	box2d.b2Vec2.prototype.SelfNormalize = function () {
	  this.Normalize();
	  return this;
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {number} c
	 * @param {number} s
	 */
	box2d.b2Vec2.prototype.SelfRotate = function (c, s) {
	  var x = this.x,
	      y = this.y;
	  this.x = c * x - s * y;
	  this.y = s * x + c * y;
	  return this;
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {number} radians
	 */
	box2d.b2Vec2.prototype.SelfRotateAngle = function (radians) {
	  return this.SelfRotate(Math.cos(radians), Math.sin(radians));
	};

	/**
	 * Does this vector contain finite coordinates?
	 * @export
	 * @return {boolean}
	 */
	box2d.b2Vec2.prototype.IsValid = function () {
	  return isFinite(this.x) && isFinite(this.y);
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} v
	 */
	box2d.b2Vec2.prototype.SelfMin = function (v) {
	  this.x = Math.min(this.x, v.x);
	  this.y = Math.min(this.y, v.y);
	  return this;
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} v
	 */
	box2d.b2Vec2.prototype.SelfMax = function (v) {
	  this.x = Math.max(this.x, v.x);
	  this.y = Math.max(this.y, v.y);
	  return this;
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 */
	box2d.b2Vec2.prototype.SelfAbs = function () {
	  this.x = Math.abs(this.x);
	  this.y = Math.abs(this.y);
	  return this;
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 */
	box2d.b2Vec2.prototype.SelfNeg = function () {
	  this.x = -this.x;
	  this.y = -this.y;
	  return this;
	};

	/**
	 * Get the skew vector such that dot(skew_vec, other) ===
	 * cross(vec, other)
	 * @export
	 * @return {box2d.b2Vec2}
	 */
	box2d.b2Vec2.prototype.SelfSkew = function () {
	  var x = this.x;
	  this.x = -this.y;
	  this.y = x;
	  return this;
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} v
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2Abs_V2 = function (v, out) {
	  out.x = Math.abs(v.x);
	  out.y = Math.abs(v.y);
	  return out;
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} a
	 * @param {box2d.b2Vec2} b
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2Min_V2_V2 = function (a, b, out) {
	  out.x = Math.min(a.x, b.x);
	  out.y = Math.min(a.y, b.y);
	  return out;
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} a
	 * @param {box2d.b2Vec2} b
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2Max_V2_V2 = function (a, b, out) {
	  out.x = Math.max(a.x, b.x);
	  out.y = Math.max(a.y, b.y);
	  return out;
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} v
	 * @param {box2d.b2Vec2} lo
	 * @param {box2d.b2Vec2} hi
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2Clamp_V2_V2_V2 = function (v, lo, hi, out) {
	  out.x = Math.min(Math.max(v.x, lo.x), hi.x);
	  out.y = Math.min(Math.max(v.y, lo.y), hi.y);
	  return out;
	};

	/**
	 * Perform the dot product on two vectors.
	 * a.x * b.x + a.y * b.y
	 * @export
	 * @return {number}
	 * @param {box2d.b2Vec2} a
	 * @param {box2d.b2Vec2} b
	 */
	box2d.b2Dot_V2_V2 = function (a, b) {
	  return a.x * b.x + a.y * b.y;
	};

	/**
	 * Perform the cross product on two vectors. In 2D this produces a scalar.
	 * a.x * b.y - a.y * b.x
	 * @export
	 * @return {number}
	 * @param {box2d.b2Vec2} a
	 * @param {box2d.b2Vec2} b
	 */
	box2d.b2Cross_V2_V2 = function (a, b) {
	  return a.x * b.y - a.y * b.x;
	};

	/**
	 * Perform the cross product on a vector and a scalar. In 2D
	 * this produces a vector.
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} v
	 * @param {number} s
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2Cross_V2_S = function (v, s, out) {
	  var v_x = v.x;
	  out.x = s * v.y;
	  out.y = -s * v_x;
	  return out;
	};

	/**
	 * Perform the cross product on a scalar and a vector. In 2D
	 * this produces a vector.
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {number} s
	 * @param {box2d.b2Vec2} v
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2Cross_S_V2 = function (s, v, out) {
	  var v_x = v.x;
	  out.x = -s * v.y;
	  out.y = s * v_x;
	  return out;
	};

	/**
	 * Add two vectors component-wise.
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} a
	 * @param {box2d.b2Vec2} b
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2Add_V2_V2 = function (a, b, out) {
	  out.x = a.x + b.x;
	  out.y = a.y + b.y;
	  return out;
	};

	/**
	 * Subtract two vectors component-wise.
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} a
	 * @param {box2d.b2Vec2} b
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2Sub_V2_V2 = function (a, b, out) {
	  out.x = a.x - b.x;
	  out.y = a.y - b.y;
	  return out;
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} v
	 * @param {number} s
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2Add_V2_S = function (v, s, out) {
	  out.x = v.x + s;
	  out.y = v.y + s;
	  return out;
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} v
	 * @param {number} s
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2Sub_V2_S = function (v, s, out) {
	  out.x = v.x - s;
	  out.y = v.y - s;
	  return out;
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {number} s
	 * @param {box2d.b2Vec2} v
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2Mul_S_V2 = function (s, v, out) {
	  out.x = v.x * s;
	  out.y = v.y * s;
	  return out;
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} v
	 * @param {number} s
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2Mul_V2_S = function (v, s, out) {
	  out.x = v.x * s;
	  out.y = v.y * s;
	  return out;
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} v
	 * @param {number} s
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2Div_V2_S = function (v, s, out) {
	  out.x = v.x / s;
	  out.y = v.y / s;
	  return out;
	};

	/**
	 * out = a + (s * b)
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} a
	 * @param {number} s
	 * @param {box2d.b2Vec2} b
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2AddMul_V2_S_V2 = function (a, s, b, out) {
	  out.x = a.x + s * b.x;
	  out.y = a.y + s * b.y;
	  return out;
	};
	/**
	 * out = a - (s * b)
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} a
	 * @param {number} s
	 * @param {box2d.b2Vec2} b
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2SubMul_V2_S_V2 = function (a, s, b, out) {
	  out.x = a.x - s * b.x;
	  out.y = a.y - s * b.y;
	  return out;
	};

	/**
	 * out = a + b2Cross(s, v)
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} a
	 * @param {number} s
	 * @param {box2d.b2Vec2} v
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2AddCross_V2_S_V2 = function (a, s, v, out) {
	  var v_x = v.x;
	  out.x = a.x - s * v.y;
	  out.y = a.y + s * v_x;
	  return out;
	};

	/**
	 * Get the center of two vectors.
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} a
	 * @param {box2d.b2Vec2} b
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2Mid_V2_V2 = function (a, b, out) {
	  out.x = (a.x + b.x) * 0.5;
	  out.y = (a.y + b.y) * 0.5;
	  return out;
	};

	/**
	 * Get the extent of two vectors (half-widths).
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} a
	 * @param {box2d.b2Vec2} b
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2Ext_V2_V2 = function (a, b, out) {
	  out.x = (b.x - a.x) * 0.5;
	  out.y = (b.y - a.y) * 0.5;
	  return out;
	};

	/**
	 * @export
	 * @return {number}
	 * @param {box2d.b2Vec2} a
	 * @param {box2d.b2Vec2} b
	 */
	box2d.b2Distance = function (a, b) {
	  var c_x = a.x - b.x;
	  var c_y = a.y - b.y;
	  return Math.sqrt(c_x * c_x + c_y * c_y);
	};

	/**
	 * @export
	 * @return {number}
	 * @param {box2d.b2Vec2} a
	 * @param {box2d.b2Vec2} b
	 */
	box2d.b2DistanceSquared = function (a, b) {
	  var c_x = a.x - b.x;
	  var c_y = a.y - b.y;
	  return c_x * c_x + c_y * c_y;
	};

	/**
	 * @export
	 * @constructor
	 * @param {number=} x
	 * @param {number=} y
	 * @param {number=} z
	 */
	box2d.b2Vec3 = function (x, y, z) {
	  this.x = x || 0.0;
	  this.y = y || 0.0;
	  this.z = z || 0.0;
	  //this.a = new Float32Array(3);
	  //this.a[0] = x || 0;
	  //this.a[1] = y || 0;
	  //this.a[2] = z || 0;
	};

	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Vec3.prototype.x = 0.0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Vec3.prototype.y = 0.0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Vec3.prototype.z = 0.0;

	//  /**
	//   * @type {Float32Array}
	//   */
	//  box2d.b2Vec3.prototype.a;
	//
	//  box2d.b2Vec3.prototype.__defineGetter__('x', function () { return this.a[0]; });
	//  box2d.b2Vec3.prototype.__defineGetter__('y', function () { return this.a[1]; });
	//  box2d.b2Vec3.prototype.__defineGetter__('z', function () { return this.a[2]; });
	//  box2d.b2Vec3.prototype.__defineSetter__('x', function (n) { this.a[0] = n; });
	//  box2d.b2Vec3.prototype.__defineSetter__('y', function (n) { this.a[1] = n; });
	//  box2d.b2Vec3.prototype.__defineSetter__('z', function (n) { this.a[2] = n; });

	/**
	 * @export
	 * @const
	 * @type {box2d.b2Vec3}
	 */
	box2d.b2Vec3.ZERO = new box2d.b2Vec3();
	/**
	 * @export
	 * @type {box2d.b2Vec3}
	 */
	box2d.b2Vec3.s_t0 = new box2d.b2Vec3();

	/**
	 * @export
	 * @return {box2d.b2Vec3}
	 */
	box2d.b2Vec3.prototype.Clone = function () {
	  return new box2d.b2Vec3(this.x, this.y, this.z);
	};

	/**
	 * @export
	 * @return {box2d.b2Vec3}
	 */
	box2d.b2Vec3.prototype.SetZero = function () {
	  this.x = 0.0;
	  this.y = 0.0;
	  this.z = 0.0;
	  return this;
	};

	/**
	 * @export
	 * @return {box2d.b2Vec3}
	 * @param {number} x
	 * @param {number} y
	 * @param {number} z
	 */
	box2d.b2Vec3.prototype.Set = function (x, y, z) {
	  this.x = x;
	  this.y = y;
	  this.z = z;
	  return this;
	};

	/**
	 * @export
	 * @return {box2d.b2Vec3}
	 * @param {box2d.b2Vec3} other
	 */
	box2d.b2Vec3.prototype.Copy = function (other) {
	  //if (box2d.ENABLE_ASSERTS) { box2d.b2Assert(this !== other); }
	  this.x = other.x;
	  this.y = other.y;
	  this.z = other.z;
	  return this;
	};

	/**
	 * @export
	 * @return {box2d.b2Vec3}
	 */
	box2d.b2Vec3.prototype.SelfNeg = function () {
	  this.x = -this.x;
	  this.y = -this.y;
	  this.z = -this.z;
	  return this;
	};

	/**
	 * @export
	 * @return {box2d.b2Vec3}
	 * @param {box2d.b2Vec3} v
	 */
	box2d.b2Vec3.prototype.SelfAdd = function (v) {
	  this.x += v.x;
	  this.y += v.y;
	  this.z += v.z;
	  return this;
	};

	/**
	 * @export
	 * @return {box2d.b2Vec3}
	 * @param {box2d.b2Vec2} v
	 * @param {number} z
	 */
	box2d.b2Vec3.prototype.SelfAddV2 = function (v, z) {
	  this.x += v.x;
	  this.y += v.y;
	  this.z += z;
	  return this;
	};

	/**
	 * @export
	 * @return {box2d.b2Vec3}
	 * @param {number} x
	 * @param {number} y
	 * @param {number} z
	 */
	box2d.b2Vec3.prototype.SelfAddXYZ = function (x, y, z) {
	  this.x += x;
	  this.y += y;
	  this.z += z;
	  return this;
	};

	/**
	 * @export
	 * @return {box2d.b2Vec3}
	 * @param {box2d.b2Vec3} v
	 */
	box2d.b2Vec3.prototype.SelfSub = function (v) {
	  this.x -= v.x;
	  this.y -= v.y;
	  this.z -= v.z;
	  return this;
	};

	/**
	 * @export
	 * @return {box2d.b2Vec3}
	 * @param {box2d.b2Vec2} v
	 * @param {number} z
	 */
	box2d.b2Vec3.prototype.SelfSubV2 = function (v, z) {
	  this.x -= v.x;
	  this.y -= v.y;
	  this.z -= z;
	  return this;
	};

	/**
	 * @export
	 * @return {box2d.b2Vec3}
	 * @param {number} x
	 * @param {number} y
	 * @param {number} z
	 */
	box2d.b2Vec3.prototype.SelfSubXYZ = function (x, y, z) {
	  this.x -= x;
	  this.y -= y;
	  this.z -= z;
	  return this;
	};

	/**
	 * @export
	 * @return {box2d.b2Vec3}
	 * @param {box2d.b2Vec3} v
	 */
	box2d.b2Vec3.prototype.SelfMul = function (v) {
	  this.x *= v.x;
	  this.y *= v.y;
	  this.z *= v.z;
	  return this;
	};

	/**
	 * @export
	 * @return {box2d.b2Vec3}
	 * @param {box2d.b2Vec2} v
	 * @param {number} z
	 */
	box2d.b2Vec3.prototype.SelfMulV2 = function (v, z) {
	  this.x *= v.x;
	  this.y *= v.y;
	  this.z *= z;
	  return this;
	};

	/**
	 * @export
	 * @return {box2d.b2Vec3}
	 * @param {number} x
	 * @param {number} y
	 * @param {number} z
	 */
	box2d.b2Vec3.prototype.SelfMulXYZ = function (x, y, z) {
	  this.x *= x;
	  this.y *= y;
	  this.z *= z;
	  return this;
	};

	/**
	 * @export
	 * @return {box2d.b2Vec3}
	 * @param {number} s
	 */
	box2d.b2Vec3.prototype.SelfMulScalar = function (s) {
	  this.x *= s;
	  this.y *= s;
	  this.z *= s;
	  return this;
	};

	/**
	 * Get the length of this vector (the norm).
	 * @export
	 * @return {number}
	 */
	box2d.b2Vec3.prototype.Length = function () {
	  var x = this.x,
	      y = this.y,
	      z = this.z;
	  return Math.sqrt(x * x + y * y + z * z);
	};

	/**
	 * Get the length squared. For performance, use this instead of
	 * b2Vec3::Length (if possible).
	 * @export
	 * @return {number}
	 */
	box2d.b2Vec3.prototype.LengthSquared = function () {
	  var x = this.x,
	      y = this.y,
	      z = this.z;
	  return x * x + y * y + z * z;
	};

	/**
	 * Convert this vector into a unit vector. Returns the length.
	 * @export
	 * @return {number}
	 */
	box2d.b2Vec3.prototype.Normalize = function () {
	  var length = this.Length();
	  if (length >= box2d.b2_epsilon) {
	    var inv_length = 1.0 / length;
	    this.x *= inv_length;
	    this.y *= inv_length;
	    this.z *= inv_length;
	  }
	  return length;
	};

	/**
	 * @export
	 * @return {box2d.b2Vec3}
	 */
	box2d.b2Vec3.prototype.SelfNormalize = function () {
	  this.Normalize();
	  return this;
	};

	/**
	 * Add two vectors component-wise.
	 * @export
	 * @return {box2d.b2Vec3}
	 * @param {box2d.b2Vec3} a
	 * @param {box2d.b2Vec3} b
	 * @param {box2d.b2Vec3} out
	 */
	box2d.b2Add_V3_V3 = function (a, b, out) {
	  out.x = a.x + b.x;
	  out.y = a.y + b.y;
	  out.z = a.z + b.z;
	  return out;
	};

	/**
	 * Add two vectors component-wise.
	 * @export
	 * @return {box2d.b2Vec3}
	 * @param {box2d.b2Vec3} a
	 * @param {box2d.b2Vec3} b
	 * @param {box2d.b2Vec3} out
	 */
	box2d.b2Sub_V3_V3 = function (a, b, out) {
	  out.x = a.x + b.x;
	  out.y = a.y + b.y;
	  out.z = a.z + b.z;
	  return out;
	};

	/**
	 * Perform the dot product on two vectors.
	 * @export
	 * @return {number}
	 * @param {box2d.b2Vec3} a
	 * @param {box2d.b2Vec3} b
	 */
	box2d.b2Dot_V3_V3 = function (a, b) {
	  return a.x * b.x + a.y * b.y + a.z * b.z;
	};

	/**
	 * Perform the cross product on two vectors.
	 * @export
	 * @return {box2d.b2Vec3}
	 * @param {box2d.b2Vec3} a
	 * @param {box2d.b2Vec3} b
	 * @param {box2d.b2Vec3} out
	 */
	box2d.b2Cross_V3_V3 = function (a, b, out) {
	  var a_x = a.x,
	      a_y = a.y,
	      a_z = a.z;
	  var b_x = b.x,
	      b_y = b.y,
	      b_z = b.z;
	  out.x = a_y * b_z - a_z * b_y;
	  out.y = a_z * b_x - a_x * b_z;
	  out.z = a_x * b_y - a_y * b_x;
	  return out;
	};

	/**
	 * @export
	 * @constructor
	 * @param {number=} x
	 * @param {number=} y
	 * @param {number=} z
	 * @param {number=} w
	 */
	box2d.b2Vec4 = function (x, y, z, w) {
	  this.x = x || 0.0;
	  this.y = y || 0.0;
	  this.z = z || 0.0;
	  this.w = w || 0.0;
	  //this.a = new Float32Array(4);
	  //this.a[0] = x || 0;
	  //this.a[1] = y || 0;
	  //this.a[2] = z || 0;
	  //this.a[3] = w || 0;
	};

	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Vec4.prototype.x = 0.0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Vec4.prototype.y = 0.0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Vec4.prototype.z = 0.0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Vec4.prototype.w = 0.0;

	//  /**
	//   * @type {Float32Array}
	//   */
	//  box2d.b2Vec4.prototype.a;
	//
	//  box2d.b2Vec4.prototype.__defineGetter__('x', function () { return this.a[0]; });
	//  box2d.b2Vec4.prototype.__defineGetter__('y', function () { return this.a[1]; });
	//  box2d.b2Vec4.prototype.__defineGetter__('z', function () { return this.a[2]; });
	//  box2d.b2Vec4.prototype.__defineGetter__('w', function () { return this.a[3]; });
	//  box2d.b2Vec4.prototype.__defineSetter__('x', function (n) { this.a[0] = n; });
	//  box2d.b2Vec4.prototype.__defineSetter__('y', function (n) { this.a[1] = n; });
	//  box2d.b2Vec4.prototype.__defineSetter__('z', function (n) { this.a[2] = n; });
	//  box2d.b2Vec4.prototype.__defineSetter__('w', function (n) { this.a[3] = n; });

	/**
	 * @export
	 * @const
	 * @type {box2d.b2Vec4}
	 */
	box2d.b2Vec4.ZERO = new box2d.b2Vec4(0.0, 0.0, 0.0, 0.0);
	/**
	 * @export
	 * @type {box2d.b2Vec4}
	 */
	box2d.b2Vec4.s_t0 = new box2d.b2Vec4();

	/**
	 * @export
	 * @return {box2d.b2Vec4}
	 */
	box2d.b2Vec4.prototype.Clone = function () {
	  return new box2d.b2Vec4(this.x, this.y, this.z, this.w);
	};

	/**
	 * @export
	 * @return {box2d.b2Vec4}
	 */
	box2d.b2Vec4.prototype.SetZero = function () {
	  this.x = 0.0;
	  this.y = 0.0;
	  this.z = 0.0;
	  this.w = 0.0;
	  return this;
	};

	/**
	 * @export
	 * @return {box2d.b2Vec4}
	 * @param {number} x
	 * @param {number} y
	 * @param {number} z
	 * @param {number} w
	 */
	box2d.b2Vec4.prototype.Set = function (x, y, z, w) {
	  this.x = x;
	  this.y = y;
	  this.z = z;
	  this.w = w;
	  return this;
	};

	/**
	 * @export
	 * @return {box2d.b2Vec4}
	 * @param {box2d.b2Vec4} other
	 */
	box2d.b2Vec4.prototype.Copy = function (other) {
	  //if (box2d.ENABLE_ASSERTS) { box2d.b2Assert(this !== other); }
	  this.x = other.x;
	  this.y = other.y;
	  this.z = other.z;
	  this.w = other.w;
	  return this;
	};

	/**
	 * A 2-by-2 matrix. Stored in column-major order.
	 * @export
	 * @constructor
	 */
	box2d.b2Mat22 = function () {
	  this.ex = new box2d.b2Vec2(1.0, 0.0);
	  this.ey = new box2d.b2Vec2(0.0, 1.0);
	};

	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2Mat22.prototype.ex = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2Mat22.prototype.ey = null;

	/**
	 * @export
	 * @const
	 * @type {box2d.b2Mat22}
	 */
	box2d.b2Mat22.IDENTITY = new box2d.b2Mat22();

	/**
	 * @export
	 * @return {box2d.b2Mat22}
	 */
	box2d.b2Mat22.prototype.Clone = function () {
	  return new box2d.b2Mat22().Copy(this);
	};

	/**
	 * Initialize this matrix using an angle. This matrix becomes an
	 * orthonormal rotation matrix.
	 * @export
	 * @return {box2d.b2Mat22}
	 * @param {number} radians
	 */
	box2d.b2Mat22.prototype.SetAngle = function (radians) {
	  var c = Math.cos(radians);
	  var s = Math.sin(radians);
	  this.ex.Set(c, s);
	  this.ey.Set(-s, c);
	  return this;
	};

	/**
	 * @export
	 * @return {box2d.b2Mat22}
	 * @param {box2d.b2Mat22} other
	 */
	box2d.b2Mat22.prototype.Copy = function (other) {
	  //if (box2d.ENABLE_ASSERTS) { box2d.b2Assert(this !== other); }
	  this.ex.Copy(other.ex);
	  this.ey.Copy(other.ey);
	  return this;
	};

	/**
	 * Set this to the identity matrix.
	 * @export
	 * @return {box2d.b2Mat22}
	 */
	box2d.b2Mat22.prototype.SetIdentity = function () {
	  this.ex.Set(1.0, 0.0);
	  this.ey.Set(0.0, 1.0);
	  return this;
	};

	/**
	 * Set this matrix to all zeros.
	 * @export
	 * @return {box2d.b2Mat22}
	 */
	box2d.b2Mat22.prototype.SetZero = function () {
	  this.ex.SetZero();
	  this.ey.SetZero();
	  return this;
	};

	/**
	 * Extract the angle from this matrix (assumed to be a rotation
	 * matrix).
	 * @export
	 * @return {number}
	 */
	box2d.b2Mat22.prototype.GetAngle = function () {
	  return Math.atan2(this.ex.y, this.ex.x);
	};

	/**
	 * @export
	 * @return {box2d.b2Mat22}
	 * @param {box2d.b2Mat22} out
	 */
	box2d.b2Mat22.prototype.GetInverse = function (out) {
	  var a = this.ex.x;
	  var b = this.ey.x;
	  var c = this.ex.y;
	  var d = this.ey.y;
	  var det = a * d - b * c;
	  if (det !== 0.0) {
	    det = 1.0 / det;
	  }
	  out.ex.x = det * d;
	  out.ey.x = -det * b;
	  out.ex.y = -det * c;
	  out.ey.y = det * a;
	  return out;
	};

	/**
	 * Solve A * x = b, where b is a column vector. This is more
	 * efficient than computing the inverse in one-shot cases.
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {number} b_x
	 * @param {number} b_y
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2Mat22.prototype.Solve = function (b_x, b_y, out) {
	  var a11 = this.ex.x,
	      a12 = this.ey.x;
	  var a21 = this.ex.y,
	      a22 = this.ey.y;
	  var det = a11 * a22 - a12 * a21;
	  if (det !== 0.0) {
	    det = 1.0 / det;
	  }
	  out.x = det * (a22 * b_x - a12 * b_y);
	  out.y = det * (a11 * b_y - a21 * b_x);
	  return out;
	};

	/**
	 * @export
	 * @return {box2d.b2Mat22}
	 */
	box2d.b2Mat22.prototype.SelfAbs = function () {
	  this.ex.SelfAbs();
	  this.ey.SelfAbs();
	  return this;
	};

	/**
	 * @export
	 * @return {box2d.b2Mat22}
	 */
	box2d.b2Mat22.prototype.SelfInv = function () {
	  return this.GetInverse(this);
	};

	/**
	 * @export
	 * @return {box2d.b2Mat22}
	 * @param {box2d.b2Mat22} M
	 */
	box2d.b2Mat22.prototype.SelfAdd = function (M) {
	  this.ex.SelfAdd(M.ex);
	  this.ey.SelfAdd(M.ey);
	  return this;
	};

	/**
	 * @export
	 * @return {box2d.b2Mat22}
	 * @param {box2d.b2Mat22} M
	 */
	box2d.b2Mat22.prototype.SelfSub = function (M) {
	  this.ex.SelfSub(M.ex);
	  this.ey.SelfSub(M.ey);
	  return this;
	};

	/**
	 * @export
	 * @return {box2d.b2Mat22}
	 * @param {box2d.b2Mat22} M
	 * @param {box2d.b2Mat22} out
	 */
	box2d.b2Abs_M22 = function (M, out) {
	  var M_ex = M.ex,
	      M_ey = M.ey;
	  out.ex.x = box2d.b2Abs(M_ex.x);
	  out.ex.y = box2d.b2Abs(M_ex.y);
	  out.ey.x = box2d.b2Abs(M_ey.x);
	  out.ey.y = box2d.b2Abs(M_ey.y);
	  return out;
	};

	/**
	 * Multiply a matrix times a vector. If a rotation matrix is
	 * provided, then this transforms the vector from one frame to
	 * another.
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Mat22} M
	 * @param {box2d.b2Vec2} v
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2Mul_M22_V2 = function (M, v, out) {
	  var M_ex = M.ex,
	      M_ey = M.ey;
	  var v_x = v.x,
	      v_y = v.y;
	  out.x = M_ex.x * v_x + M_ey.x * v_y;
	  out.y = M_ex.y * v_x + M_ey.y * v_y;
	  return out;
	};

	/**
	 * Multiply a matrix transpose times a vector. If a rotation
	 * matrix is provided, then this transforms the vector from one
	 * frame to another (inverse transform).
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Mat22} M
	 * @param {box2d.b2Vec2} v
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2MulT_M22_V2 = function (M, v, out) {
	  var M_ex = M.ex,
	      M_ey = M.ey;
	  var v_x = v.x,
	      v_y = v.y;
	  out.x = M_ex.x * v_x + M_ex.y * v_y;
	  out.y = M_ey.x * v_x + M_ey.y * v_y;
	  return out;
	};

	/**
	 * @export
	 * @return {box2d.b2Mat22}
	 * @param {box2d.b2Mat22} A
	 * @param {box2d.b2Mat22} B
	 * @param {box2d.b2Mat22} out
	 */
	box2d.b2Add_M22_M22 = function (A, B, out) {
	  var A_ex = A.ex,
	      A_ey = A.ey;
	  var B_ex = B.ex,
	      B_ey = B.ey;
	  out.ex.x = A_ex.x + B_ex.x;
	  out.ex.y = A_ex.y + B_ex.y;
	  out.ey.x = A_ey.x + B_ey.x;
	  out.ey.y = A_ey.y + B_ey.y;
	  return out;
	};

	/**
	 * @export
	 * @return {box2d.b2Mat22}
	 * @param {box2d.b2Mat22} A
	 * @param {box2d.b2Mat22} B
	 * @param {box2d.b2Mat22} out
	 */
	box2d.b2Mul_M22_M22 = function (A, B, out) {
	  var A_ex_x = A.ex.x,
	      A_ex_y = A.ex.y;
	  var A_ey_x = A.ey.x,
	      A_ey_y = A.ey.y;
	  var B_ex_x = B.ex.x,
	      B_ex_y = B.ex.y;
	  var B_ey_x = B.ey.x,
	      B_ey_y = B.ey.y;
	  out.ex.x = A_ex_x * B_ex_x + A_ey_x * B_ex_y;
	  out.ex.y = A_ex_y * B_ex_x + A_ey_y * B_ex_y;
	  out.ey.x = A_ex_x * B_ey_x + A_ey_x * B_ey_y;
	  out.ey.y = A_ex_y * B_ey_x + A_ey_y * B_ey_y;
	  return out;
	};

	/**
	 * @export
	 * @return {box2d.b2Mat22}
	 * @param {box2d.b2Mat22} A
	 * @param {box2d.b2Mat22} B
	 * @param {box2d.b2Mat22} out
	 */
	box2d.b2MulT_M22_M22 = function (A, B, out) {
	  var A_ex_x = A.ex.x,
	      A_ex_y = A.ex.y;
	  var A_ey_x = A.ey.x,
	      A_ey_y = A.ey.y;
	  var B_ex_x = B.ex.x,
	      B_ex_y = B.ex.y;
	  var B_ey_x = B.ey.x,
	      B_ey_y = B.ey.y;
	  out.ex.x = A_ex_x * B_ex_x + A_ex_y * B_ex_y;
	  out.ex.y = A_ey_x * B_ex_x + A_ey_y * B_ex_y;
	  out.ey.x = A_ex_x * B_ey_x + A_ex_y * B_ey_y;
	  out.ey.y = A_ey_x * B_ey_x + A_ey_y * B_ey_y;
	  return out;
	};

	/**
	 * A 3-by-3 matrix. Stored in column-major order.
	 * @export
	 * @constructor
	 */
	box2d.b2Mat33 = function () {
	  this.ex = new box2d.b2Vec3(1.0, 0.0, 0.0);
	  this.ey = new box2d.b2Vec3(0.0, 1.0, 0.0);
	  this.ez = new box2d.b2Vec3(0.0, 0.0, 1.0);
	};

	/**
	 * @export
	 * @type {box2d.b2Vec3}
	 */
	box2d.b2Mat33.prototype.ex = null;
	/**
	 * @export
	 * @type {box2d.b2Vec3}
	 */
	box2d.b2Mat33.prototype.ey = null;
	/**
	 * @export
	 * @type {box2d.b2Vec3}
	 */
	box2d.b2Mat33.prototype.ez = null;

	/**
	 * @export
	 * @const
	 * @type {box2d.b2Mat33}
	 */
	box2d.b2Mat33.IDENTITY = new box2d.b2Mat33();

	/**
	 * @export
	 * @return {box2d.b2Mat33}
	 */
	box2d.b2Mat33.prototype.Clone = function () {
	  return new box2d.b2Mat33().Copy(this);
	};

	/**
	 * @export
	 * @return {box2d.b2Mat33}
	 * @param {box2d.b2Mat33} other
	 */
	box2d.b2Mat33.prototype.Copy = function (other) {
	  //if (box2d.ENABLE_ASSERTS) { box2d.b2Assert(this !== other); }
	  this.ex.Copy(other.ex);
	  this.ey.Copy(other.ey);
	  this.ez.Copy(other.ez);
	  return this;
	};

	/**
	 * @export
	 * @return {box2d.b2Mat33}
	 */
	box2d.b2Mat33.prototype.SetIdentity = function () {
	  this.ex.Set(1.0, 0.0, 0.0);
	  this.ey.Set(0.0, 1.0, 0.0);
	  this.ez.Set(0.0, 0.0, 1.0);
	  return this;
	};

	/**
	 * Set this matrix to all zeros.
	 * @export
	 * @return {box2d.b2Mat33}
	 */
	box2d.b2Mat33.prototype.SetZero = function () {
	  this.ex.SetZero();
	  this.ey.SetZero();
	  this.ez.SetZero();
	  return this;
	};

	/**
	 * @export
	 * @return {box2d.b2Mat33}
	 * @param {box2d.b2Mat33} M
	 */
	box2d.b2Mat33.prototype.SelfAdd = function (M) {
	  this.ex.SelfAdd(M.ex);
	  this.ey.SelfAdd(M.ey);
	  this.ez.SelfAdd(M.ez);
	  return this;
	};

	/**
	 * Solve A * x = b, where b is a column vector. This is more
	 * efficient than computing the inverse in one-shot cases.
	 * @export
	 * @return {box2d.b2Vec3}
	 * @param {number} b_x
	 * @param {number} b_y
	 * @param {number} b_z
	 * @param {box2d.b2Vec3} out
	 */
	box2d.b2Mat33.prototype.Solve33 = function (b_x, b_y, b_z, out) {
	  var a11 = this.ex.x,
	      a21 = this.ex.y,
	      a31 = this.ex.z;
	  var a12 = this.ey.x,
	      a22 = this.ey.y,
	      a32 = this.ey.z;
	  var a13 = this.ez.x,
	      a23 = this.ez.y,
	      a33 = this.ez.z;
	  var det = a11 * (a22 * a33 - a32 * a23) + a21 * (a32 * a13 - a12 * a33) + a31 * (a12 * a23 - a22 * a13);
	  if (det !== 0.0) {
	    det = 1.0 / det;
	  }
	  out.x = det * (b_x * (a22 * a33 - a32 * a23) + b_y * (a32 * a13 - a12 * a33) + b_z * (a12 * a23 - a22 * a13));
	  out.y = det * (a11 * (b_y * a33 - b_z * a23) + a21 * (b_z * a13 - b_x * a33) + a31 * (b_x * a23 - b_y * a13));
	  out.z = det * (a11 * (a22 * b_z - a32 * b_y) + a21 * (a32 * b_x - a12 * b_z) + a31 * (a12 * b_y - a22 * b_x));
	  return out;
	};

	/**
	 * Solve A * x = b, where b is a column vector. This is more
	 * efficient than computing the inverse in one-shot cases. Solve
	 * only the upper 2-by-2 matrix equation.
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {number} b_x
	 * @param {number} b_y
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2Mat33.prototype.Solve22 = function (b_x, b_y, out) {
	  var a11 = this.ex.x,
	      a12 = this.ey.x;
	  var a21 = this.ex.y,
	      a22 = this.ey.y;
	  var det = a11 * a22 - a12 * a21;
	  if (det !== 0.0) {
	    det = 1.0 / det;
	  }
	  out.x = det * (a22 * b_x - a12 * b_y);
	  out.y = det * (a11 * b_y - a21 * b_x);
	  return out;
	};

	/**
	 * Get the inverse of this matrix as a 2-by-2.
	 * Returns the zero matrix if singular.
	 * @export
	 * @return {void}
	 * @param {box2d.b2Mat33} M
	 */
	box2d.b2Mat33.prototype.GetInverse22 = function (M) {
	  var a = this.ex.x,
	      b = this.ey.x,
	      c = this.ex.y,
	      d = this.ey.y;
	  var det = a * d - b * c;
	  if (det !== 0.0) {
	    det = 1.0 / det;
	  }

	  M.ex.x = det * d;
	  M.ey.x = -det * b;
	  M.ex.z = 0.0;
	  M.ex.y = -det * c;
	  M.ey.y = det * a;
	  M.ey.z = 0.0;
	  M.ez.x = 0.0;
	  M.ez.y = 0.0;
	  M.ez.z = 0.0;
	};

	/**
	 * Get the symmetric inverse of this matrix as a 3-by-3.
	 * Returns the zero matrix if singular.
	 * @export
	 * @return {void}
	 * @param {box2d.b2Mat33} M
	 */
	box2d.b2Mat33.prototype.GetSymInverse33 = function (M) {
	  var det = box2d.b2Dot_V3_V3(this.ex, box2d.b2Cross_V3_V3(this.ey, this.ez, box2d.b2Vec3.s_t0));
	  if (det !== 0.0) {
	    det = 1.0 / det;
	  }

	  var a11 = this.ex.x,
	      a12 = this.ey.x,
	      a13 = this.ez.x;
	  var a22 = this.ey.y,
	      a23 = this.ez.y;
	  var a33 = this.ez.z;

	  M.ex.x = det * (a22 * a33 - a23 * a23);
	  M.ex.y = det * (a13 * a23 - a12 * a33);
	  M.ex.z = det * (a12 * a23 - a13 * a22);

	  M.ey.x = M.ex.y;
	  M.ey.y = det * (a11 * a33 - a13 * a13);
	  M.ey.z = det * (a13 * a12 - a11 * a23);

	  M.ez.x = M.ex.z;
	  M.ez.y = M.ey.z;
	  M.ez.z = det * (a11 * a22 - a12 * a12);
	};

	/**
	 * Multiply a matrix times a vector.
	 * @export
	 * @return {box2d.b2Vec3}
	 * @param {box2d.b2Mat33} A
	 * @param {box2d.b2Vec3} v
	 * @param {box2d.b2Vec3} out
	 */
	box2d.b2Mul_M33_V3 = function (A, v, out) {
	  var v_x = v.x,
	      v_y = v.y,
	      v_z = v.z;
	  out.x = A.ex.x * v_x + A.ey.x * v_y + A.ez.x * v_z;
	  out.y = A.ex.y * v_x + A.ey.y * v_y + A.ez.y * v_z;
	  out.z = A.ex.z * v_x + A.ey.z * v_y + A.ez.z * v_z;
	  return out;
	};
	/**
	 * @export
	 * @return {box2d.b2Vec3}
	 * @param {box2d.b2Mat33} A
	 * @param {number} x
	 * @param {number} y
	 * @param {number} z
	 * @param {box2d.b2Vec3} out
	 */
	box2d.b2Mul_M33_X_Y_Z = function (A, x, y, z, out) {
	  out.x = A.ex.x * x + A.ey.x * y + A.ez.x * z;
	  out.y = A.ex.y * x + A.ey.y * y + A.ez.y * z;
	  out.z = A.ex.z * x + A.ey.z * y + A.ez.z * z;
	  return out;
	};
	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Mat33} A
	 * @param {box2d.b2Vec2} v
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2Mul22_M33_V2 = function (A, v, out) {
	  var v_x = v.x,
	      v_y = v.y;
	  out.x = A.ex.x * v_x + A.ey.x * v_y;
	  out.y = A.ex.y * v_x + A.ey.y * v_y;
	  return out;
	};
	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Mat33} A
	 * @param {number} x
	 * @param {number} y
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2Mul_M33_X_Y = function (A, x, y, out) {
	  out.x = A.ex.x * x + A.ey.x * y;
	  out.y = A.ex.y * x + A.ey.y * y;
	  return out;
	};

	/**
	 * Rotation
	 * Initialize from an angle in radians
	 * @export
	 * @constructor
	 * @param {number=} angle
	 */
	box2d.b2Rot = function (angle) {
	  /// Sine and cosine
	  if (angle) {
	    /// TODO_ERIN optimize
	    this.angle = angle;
	    this.s = Math.sin(angle);
	    this.c = Math.cos(angle);
	  }
	};

	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Rot.prototype.angle = 0.0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Rot.prototype.s = 0.0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Rot.prototype.c = 1.0;

	/**
	 * @export
	 * @const
	 * @type {box2d.b2Rot}
	 */
	box2d.b2Rot.IDENTITY = new box2d.b2Rot();

	/**
	 * @export
	 * @return {box2d.b2Rot}
	 */
	box2d.b2Rot.prototype.Clone = function () {
	  return new box2d.b2Rot().Copy(this);
	};

	/**
	 * @export
	 * @return {box2d.b2Rot}
	 * @param {box2d.b2Rot} other
	 */
	box2d.b2Rot.prototype.Copy = function (other) {
	  this.angle = other.angle;
	  this.s = other.s;
	  this.c = other.c;
	  return this;
	};

	/**
	 * Set using an angle in radians.
	 * @export
	 * @return {box2d.b2Rot}
	 * @param {number} angle
	 */
	box2d.b2Rot.prototype.Set = function (angle) {
	  /// TODO_ERIN optimize
	  if (Math.abs(this.angle - angle) >= box2d.b2_epsilon) {
	    this.angle = angle;
	    this.s = Math.sin(angle);
	    this.c = Math.cos(angle);
	  }
	  return this;
	};

	/**
	 * @export
	 * @return {box2d.b2Rot}
	 * @param {number} angle
	 */
	box2d.b2Rot.prototype.SetAngle = box2d.b2Rot.prototype.Set;

	/**
	 * Set to the identity rotation
	 * @export
	 * @return {box2d.b2Rot}
	 */
	box2d.b2Rot.prototype.SetIdentity = function () {
	  this.angle = 0.0;
	  this.s = 0.0;
	  this.c = 1.0;
	  return this;
	};

	/**
	 * Get the angle in radians
	 * @export
	 * @return {number}
	 */
	box2d.b2Rot.prototype.GetAngle = function () {
	  return this.angle;
	  //  return Math.atan2(this.s, this.c);
	};

	/**
	 * Get the x-axis
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2Rot.prototype.GetXAxis = function (out) {
	  out.x = this.c;
	  out.y = this.s;
	  return out;
	};

	/**
	 * Get the y-axis
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2Rot.prototype.GetYAxis = function (out) {
	  out.x = -this.s;
	  out.y = this.c;
	  return out;
	};

	/**
	 * Multiply two rotations: q * r
	 * @export
	 * @return {box2d.b2Rot}
	 * @param {box2d.b2Rot} q
	 * @param {box2d.b2Rot} r
	 * @param {box2d.b2Rot} out
	 */
	box2d.b2Mul_R_R = function (q, r, out) {
	  // [qc -qs] * [rc -rs] = [qc*rc-qs*rs -qc*rs-qs*rc]
	  // [qs  qc]   [rs  rc]   [qs*rc+qc*rs -qs*rs+qc*rc]
	  // s = qs * rc + qc * rs
	  // c = qc * rc - qs * rs
	  var q_c = q.c,
	      q_s = q.s;
	  var r_c = r.c,
	      r_s = r.s;
	  out.s = q_s * r_c + q_c * r_s;
	  out.c = q_c * r_c - q_s * r_s;
	  out.angle = box2d.b2WrapAngle(q.angle + r.angle);
	  return out;
	};

	/**
	 * Transpose multiply two rotations: qT * r
	 * @export
	 * @return {box2d.b2Rot}
	 * @param {box2d.b2Rot} q
	 * @param {box2d.b2Rot} r
	 * @param {box2d.b2Rot} out
	 */
	box2d.b2MulT_R_R = function (q, r, out) {
	  // [ qc qs] * [rc -rs] = [qc*rc+qs*rs -qc*rs+qs*rc]
	  // [-qs qc]   [rs  rc]   [-qs*rc+qc*rs qs*rs+qc*rc]
	  // s = qc * rs - qs * rc
	  // c = qc * rc + qs * rs
	  var q_c = q.c,
	      q_s = q.s;
	  var r_c = r.c,
	      r_s = r.s;
	  out.s = q_c * r_s - q_s * r_c;
	  out.c = q_c * r_c + q_s * r_s;
	  out.angle = box2d.b2WrapAngle(q.angle - r.angle);
	  return out;
	};

	/**
	 * Rotate a vector
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Rot} q
	 * @param {box2d.b2Vec2} v
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2Mul_R_V2 = function (q, v, out) {
	  var q_c = q.c,
	      q_s = q.s;
	  var v_x = v.x,
	      v_y = v.y;
	  out.x = q_c * v_x - q_s * v_y;
	  out.y = q_s * v_x + q_c * v_y;
	  return out;
	};

	/**
	 * Inverse rotate a vector
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Rot} q
	 * @param {box2d.b2Vec2} v
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2MulT_R_V2 = function (q, v, out) {
	  var q_c = q.c,
	      q_s = q.s;
	  var v_x = v.x,
	      v_y = v.y;
	  out.x = q_c * v_x + q_s * v_y;
	  out.y = -q_s * v_x + q_c * v_y;
	  return out;
	};

	/**
	 * A transform contains translation and rotation. It is used to
	 * represent the position and orientation of rigid frames.
	 * @export
	 * @constructor
	 */
	box2d.b2Transform = function () {
	  this.p = new box2d.b2Vec2();
	  this.q = new box2d.b2Rot();
	};

	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2Transform.prototype.p = null;
	/**
	 * @export
	 * @type {box2d.b2Rot}
	 */
	box2d.b2Transform.prototype.q = null;

	/**
	 * @export
	 * @const
	 * @type {box2d.b2Transform}
	 */
	box2d.b2Transform.IDENTITY = new box2d.b2Transform();

	/**
	 * @export
	 * @return {box2d.b2Transform}
	 */
	box2d.b2Transform.prototype.Clone = function () {
	  return new box2d.b2Transform().Copy(this);
	};

	/**
	 * @export
	 * @return {box2d.b2Transform}
	 * @param {box2d.b2Transform} other
	 */
	box2d.b2Transform.prototype.Copy = function (other) {
	  //if (box2d.ENABLE_ASSERTS) { box2d.b2Assert(this !== other); }
	  this.p.Copy(other.p);
	  this.q.Copy(other.q);
	  return this;
	};

	/**
	 * Set this to the identity transform.
	 * @export
	 * @return {box2d.b2Transform}
	 */
	box2d.b2Transform.prototype.SetIdentity = function () {
	  this.p.SetZero();
	  this.q.SetIdentity();
	  return this;
	};

	/**
	 * @return {box2d.b2Transform}
	 * @param {box2d.b2Vec2} position
	 * @param {number} angle
	 */
	box2d.b2Transform.prototype.Set = function (position, angle) {
	  return this.SetPositionRotationAngle(position, angle);
	};

	/**
	 * Set this based on the position and angle.
	 * @export
	 * @return {box2d.b2Transform}
	 * @param {box2d.b2Vec2} position
	 * @param {box2d.b2Rot} q
	 */
	box2d.b2Transform.prototype.SetPositionRotation = function (position, q) {
	  this.p.Copy(position);
	  this.q.Copy(q);
	  return this;
	};

	/**
	 * @export
	 * @return {box2d.b2Transform}
	 * @param {box2d.b2Vec2} pos
	 * @param {number} a
	 */
	box2d.b2Transform.prototype.SetPositionRotationAngle = function (pos, a) {
	  this.p.Copy(pos);
	  this.q.SetAngle(a);
	  return this;
	};

	/**
	 * @export
	 * @return {box2d.b2Transform}
	 * @param {box2d.b2Vec2} position
	 */
	box2d.b2Transform.prototype.SetPosition = function (position) {
	  this.p.Copy(position);
	  return this;
	};

	/**
	 * @export
	 * @return {box2d.b2Transform}
	 * @param {number} x
	 * @param {number} y
	 */
	box2d.b2Transform.prototype.SetPositionXY = function (x, y) {
	  this.p.Set(x, y);
	  return this;
	};

	/**
	 * @export
	 * @return {box2d.b2Transform}
	 * @param {box2d.b2Rot} rotation
	 */
	box2d.b2Transform.prototype.SetRotation = function (rotation) {
	  this.q.Copy(rotation);
	  return this;
	};

	/**
	 * @export
	 * @return {box2d.b2Transform}
	 * @param {number} angle
	 */
	box2d.b2Transform.prototype.SetRotationAngle = function (angle) {
	  this.q.SetAngle(angle);
	  return this;
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 */
	box2d.b2Transform.prototype.GetPosition = function () {
	  return this.p;
	};

	/**
	 * @export
	 * @return {box2d.b2Rot}
	 */
	box2d.b2Transform.prototype.GetRotation = function () {
	  return this.q;
	};

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2Transform.prototype.GetRotationAngle = function () {
	  return this.q.GetAngle();
	};

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2Transform.prototype.GetAngle = function () {
	  return this.q.GetAngle();
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Transform} T
	 * @param {box2d.b2Vec2} v
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2Mul_X_V2 = function (T, v, out) {
	  //  float32 x = (T.q.c * v.x - T.q.s * v.y) + T.p.x;
	  //  float32 y = (T.q.s * v.x + T.q.c * v.y) + T.p.y;
	  //
	  //  return b2Vec2(x, y);
	  var T_q_c = T.q.c,
	      T_q_s = T.q.s;
	  var v_x = v.x,
	      v_y = v.y;
	  out.x = T_q_c * v_x - T_q_s * v_y + T.p.x;
	  out.y = T_q_s * v_x + T_q_c * v_y + T.p.y;
	  return out;
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Transform} T
	 * @param {box2d.b2Vec2} v
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2MulT_X_V2 = function (T, v, out) {
	  //  float32 px = v.x - T.p.x;
	  //  float32 py = v.y - T.p.y;
	  //  float32 x = (T.q.c * px + T.q.s * py);
	  //  float32 y = (-T.q.s * px + T.q.c * py);
	  //
	  //  return b2Vec2(x, y);
	  var T_q_c = T.q.c,
	      T_q_s = T.q.s;
	  var p_x = v.x - T.p.x;
	  var p_y = v.y - T.p.y;
	  out.x = T_q_c * p_x + T_q_s * p_y;
	  out.y = -T_q_s * p_x + T_q_c * p_y;
	  return out;
	};

	/**
	 * v2 = A.q.Rot(B.q.Rot(v1) + B.p) + A.p
	 *    = (A.q * B.q).Rot(v1) + A.q.Rot(B.p) + A.p
	 * @export
	 * @return {box2d.b2Transform}
	 * @param {box2d.b2Transform} A
	 * @param {box2d.b2Transform} B
	 * @param {box2d.b2Transform} out
	 */
	box2d.b2Mul_X_X = function (A, B, out) {
	  box2d.b2Mul_R_R(A.q, B.q, out.q);
	  box2d.b2Add_V2_V2(box2d.b2Mul_R_V2(A.q, B.p, out.p), A.p, out.p);
	  return out;
	};

	/**
	 * v2 = A.q' * (B.q * v1 + B.p - A.p)
	 *    = A.q' * B.q * v1 + A.q' * (B.p - A.p)
	 * @export
	 * @return {box2d.b2Transform}
	 * @param {box2d.b2Transform} A
	 * @param {box2d.b2Transform} B
	 * @param {box2d.b2Transform} out
	 */
	box2d.b2MulT_X_X = function (A, B, out) {
	  box2d.b2MulT_R_R(A.q, B.q, out.q);
	  box2d.b2MulT_R_V2(A.q, box2d.b2Sub_V2_V2(B.p, A.p, out.p), out.p);
	  return out;
	};

	/**
	 * This describes the motion of a body/shape for TOI computation.
	 * Shapes are defined with respect to the body origin, which may
	 * no coincide with the center of mass. However, to support dynamics
	 * we must interpolate the center of mass position.
	 * @export
	 * @constructor
	 */
	box2d.b2Sweep = function () {
	  this.localCenter = new box2d.b2Vec2();
	  this.c0 = new box2d.b2Vec2();
	  this.c = new box2d.b2Vec2();
	};

	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2Sweep.prototype.localCenter = null; ///< local center of mass position
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2Sweep.prototype.c0 = null; ///< center world positions
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2Sweep.prototype.c = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Sweep.prototype.a0 = 0.0; ///< world angles
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Sweep.prototype.a = 0.0;

	/**
	 * Fraction of the current time step in the range [0,1]
	 * c0 and a0 are the positions at alpha0.
	 * @export
	 * @type {number}
	 */
	box2d.b2Sweep.prototype.alpha0 = 0.0;

	/**
	 * @export
	 * @return {box2d.b2Sweep}
	 */
	box2d.b2Sweep.prototype.Clone = function () {
	  return new box2d.b2Sweep().Copy(this);
	};

	/**
	 * @export
	 * @return {box2d.b2Sweep}
	 * @param {box2d.b2Sweep} other
	 */
	box2d.b2Sweep.prototype.Copy = function (other) {
	  //if (box2d.ENABLE_ASSERTS) { box2d.b2Assert(this !== other); }
	  this.localCenter.Copy(other.localCenter);
	  this.c0.Copy(other.c0);
	  this.c.Copy(other.c);
	  this.a0 = other.a0;
	  this.a = other.a;
	  this.alpha0 = other.alpha0;
	  return this;
	};

	/**
	 * Get the interpolated transform at a specific time.
	 * @export
	 * @return {box2d.b2Transform}
	 * @param {box2d.b2Transform} xf
	 * @param {number} beta is a factor in [0,1], where 0 indicates alpha0.
	 */
	box2d.b2Sweep.prototype.GetTransform = function (xf, beta) {
	  var one_minus_beta = 1.0 - beta;
	  xf.p.x = one_minus_beta * this.c0.x + beta * this.c.x;
	  xf.p.y = one_minus_beta * this.c0.y + beta * this.c.y;
	  var angle = one_minus_beta * this.a0 + beta * this.a;
	  xf.q.SetAngle(angle);

	  // Shift to origin
	  xf.p.SelfSub(box2d.b2Mul_R_V2(xf.q, this.localCenter, box2d.b2Vec2.s_t0));
	  return xf;
	};

	/**
	 * Advance the sweep forward, yielding a new initial state.
	 * @export
	 * @return {void}
	 * @param {number} alpha the new initial time.
	 */
	box2d.b2Sweep.prototype.Advance = function (alpha) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(this.alpha0 < 1.0);
	  }
	  var beta = (alpha - this.alpha0) / (1.0 - this.alpha0);
	  this.c0.x += beta * (this.c.x - this.c0.x);
	  this.c0.y += beta * (this.c.y - this.c0.y);
	  this.a0 += beta * (this.a - this.a0);
	  this.alpha0 = alpha;
	};

	/**
	 * Normalize an angle in radians to be between -pi and pi
	 * @export
	 * @return {void}
	 */
	box2d.b2Sweep.prototype.Normalize = function () {
	  this.a0 = box2d.b2WrapAngle(this.a0);
	  this.a = box2d.b2WrapAngle(this.a);
	};

	/**
	 * @export
	 * @return {number}
	 * @param {box2d.b2Vec3|box2d.b2Vec2} a
	 * @param {box2d.b2Vec3|box2d.b2Vec2} b
	 */
	box2d.b2Dot = function (a, b) {
	  if (a instanceof box2d.b2Vec2 && b instanceof box2d.b2Vec2) {
	    return box2d.b2Dot_V2_V2(a, b);
	  } else if (a instanceof box2d.b2Vec3 && b instanceof box2d.b2Vec3) {
	    return box2d.b2Dot_V3_V3(a, b);
	  } else {
	    throw new Error();
	  }
	};

	/**
	 * @export
	 * @return {box2d.b2Vec3|box2d.b2Vec2|number}
	 * @param {box2d.b2Vec3|box2d.b2Vec2|number} a
	 * @param {box2d.b2Vec3|box2d.b2Vec2|number} b
	 * @param {box2d.b2Vec3|box2d.b2Vec2} out
	 */
	box2d.b2Cross = function (a, b, out) {
	  if (a instanceof box2d.b2Vec2 && b instanceof box2d.b2Vec2) {
	    return box2d.b2Cross_V2_V2(a, b);
	  } else if (a instanceof box2d.b2Vec2 && typeof b === 'number' && out instanceof box2d.b2Vec2) {
	    return box2d.b2Cross_V2_S(a, b, out);
	  } else if (typeof a === 'number' && b instanceof box2d.b2Vec2 && out instanceof box2d.b2Vec2) {
	    return box2d.b2Cross_S_V2(a, b, out);
	  } else if (a instanceof box2d.b2Vec3 && b instanceof box2d.b2Vec3 && out instanceof box2d.b2Vec3) {
	    return box2d.b2Cross_V3_V3(a, b, out);
	  } else {
	    throw new Error();
	  }
	};

	/**
	 * @export
	 * @return {box2d.b2Vec3|box2d.b2Vec2}
	 * @param {box2d.b2Vec3|box2d.b2Vec2} a
	 * @param {box2d.b2Vec3|box2d.b2Vec2} b
	 * @param {box2d.b2Vec3|box2d.b2Vec2} out
	 */
	box2d.b2Add = function (a, b, out) {
	  if (a instanceof box2d.b2Vec2 && b instanceof box2d.b2Vec2 && out instanceof box2d.b2Vec2) {
	    return box2d.b2Add_V2_V2(a, b, out);
	  } else if (a instanceof box2d.b2Vec3 && b instanceof box2d.b2Vec3 && out instanceof box2d.b2Vec3) {
	    return box2d.b2Add_V3_V3(a, b, out);
	  } else {
	    throw new Error();
	  }
	};

	/**
	 * @export
	 * @return {box2d.b2Vec3|box2d.b2Vec2}
	 * @param {box2d.b2Vec3|box2d.b2Vec2} a
	 * @param {box2d.b2Vec3|box2d.b2Vec2} b
	 * @param {box2d.b2Vec3|box2d.b2Vec2} out
	 */
	box2d.b2Sub = function (a, b, out) {
	  if (a instanceof box2d.b2Vec2 && b instanceof box2d.b2Vec2 && out instanceof box2d.b2Vec2) {
	    return box2d.b2Sub_V2_V2(a, b, out);
	  } else if (a instanceof box2d.b2Vec3 && b instanceof box2d.b2Vec3 && out instanceof box2d.b2Vec3) {
	    return box2d.b2Sub_V3_V3(a, b, out);
	  } else {
	    throw new Error();
	  }
	};

	/**
	 * @export
	 * @return {box2d.b2Transform|box2d.b2Rot|box2d.b2Mat22|box2d.b2Vec3|box2d.b2Vec2}
	 * @param {box2d.b2Transform|box2d.b2Rot|box2d.b2Mat33|box2d.b2Mat22} a
	 * @param {box2d.b2Transform|box2d.b2Rot|box2d.b2Mat22|box2d.b2Vec3|box2d.b2Vec2} b
	 * @param {box2d.b2Transform|box2d.b2Rot|box2d.b2Mat22|box2d.b2Vec3|box2d.b2Vec2} out
	 */
	box2d.b2Mul = function (a, b, out) {
	  if (a instanceof box2d.b2Mat22 && b instanceof box2d.b2Vec2 && out instanceof box2d.b2Vec2) {
	    return box2d.b2Mul_M22_V2(a, b, out);
	  } else if (a instanceof box2d.b2Mat22 && b instanceof box2d.b2Mat22 && out instanceof box2d.b2Mat22) {
	    return box2d.b2Mul_M22_M22(a, b, out);
	  } else if (a instanceof box2d.b2Mat33 && b instanceof box2d.b2Vec3 && out instanceof box2d.b2Vec3) {
	    return box2d.b2Mul_M33_V3(a, b, out);
	  } else if (a instanceof box2d.b2Rot && b instanceof box2d.b2Rot && out instanceof box2d.b2Rot) {
	    return box2d.b2Mul_R_R(a, b, out);
	  } else if (a instanceof box2d.b2Rot && b instanceof box2d.b2Vec2 && out instanceof box2d.b2Vec2) {
	    return box2d.b2Mul_R_V2(a, b, out);
	  } else if (a instanceof box2d.b2Transform && b instanceof box2d.b2Vec2 && out instanceof box2d.b2Vec2) {
	    return box2d.b2Mul_X_V2(a, b, out);
	  } else if (a instanceof box2d.b2Transform && b instanceof box2d.b2Transform && out instanceof box2d.b2Transform) {
	    return box2d.b2Mul_X_X(a, b, out);
	  } else {
	    throw new Error();
	  }
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Mat22} a
	 * @param {box2d.b2Vec2} b
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2Mul22 = function (a, b, out) {
	  if (a instanceof box2d.b2Mat33 && b instanceof box2d.b2Vec2) {
	    return box2d.b2Mul22_M33_V2(a, b, out);
	  } else {
	    throw new Error();
	  }
	};

	/**
	 * @export
	 * @return {box2d.b2Transform|box2d.b2Rot|box2d.b2Mat22|box2d.b2Vec3|box2d.b2Vec2}
	 * @param {box2d.b2Transform|box2d.b2Rot|box2d.b2Mat33|box2d.b2Mat22} a
	 * @param {box2d.b2Transform|box2d.b2Rot|box2d.b2Mat22|box2d.b2Vec3|box2d.b2Vec2} b
	 * @param {box2d.b2Transform|box2d.b2Rot|box2d.b2Mat22|box2d.b2Vec3|box2d.b2Vec2} out
	 */
	box2d.b2MulT = function (a, b, out) {
	  if (a instanceof box2d.b2Mat22 && b instanceof box2d.b2Vec2 && out instanceof box2d.b2Vec2) {
	    return box2d.b2MulT_M22_V2(a, b, out);
	  } else if (a instanceof box2d.b2Mat22 && b instanceof box2d.b2Mat22 && out instanceof box2d.b2Mat22) {
	    return box2d.b2MulT_M22_M22(a, b, out);
	  }
	  ///  else if ((a instanceof box2d.b2Mat33) && (b instanceof box2d.b2Vec3) && (out instanceof box2d.b2Vec3))
	  ///  {
	  ///    return box2d.b2MulT_M33_V3(a, b, out);
	  ///  }
	  else if (a instanceof box2d.b2Rot && b instanceof box2d.b2Rot && out instanceof box2d.b2Rot) {
	      return box2d.b2MulT_R_R(a, b, out);
	    } else if (a instanceof box2d.b2Rot && b instanceof box2d.b2Vec2 && out instanceof box2d.b2Vec2) {
	      return box2d.b2MulT_R_V2(a, b, out);
	    } else if (a instanceof box2d.b2Transform && b instanceof box2d.b2Vec2 && out instanceof box2d.b2Vec2) {
	      return box2d.b2MulT_X_V2(a, b, out);
	    } else if (a instanceof box2d.b2Transform && b instanceof box2d.b2Transform && out instanceof box2d.b2Transform) {
	      return box2d.b2MulT_X_X(a, b, out);
	    } else {
	      throw new Error();
	    }
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(6);

	/**
	 * A distance proxy is used by the GJK algorithm.
	 * It encapsulates any shape.
	 * @export
	 * @constructor
	 */
	/*
	 * Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
	 *
	 * This software is provided 'as-is', without any express or implied
	 * warranty.  In no event will the authors be held liable for any damages
	 * arising from the use of this software.
	 * Permission is granted to anyone to use this software for any purpose,
	 * including commercial applications, and to alter it and redistribute it
	 * freely, subject to the following restrictions:
	 * 1. The origin of this software must not be misrepresented; you must not
	 * claim that you wrote the original software. If you use this software
	 * in a product, an acknowledgment in the product documentation would be
	 * appreciated but is not required.
	 * 2. Altered source versions must be plainly marked as such, and must not be
	 * misrepresented as being the original software.
	 * 3. This notice may not be removed or altered from any source distribution.
	 */

	box2d.b2DistanceProxy = function () {
	  this.m_buffer = box2d.b2Vec2.MakeArray(2);
	};

	/**
	 * @export
	 * @type {Array.<box2d.b2Vec2>}
	 */
	box2d.b2DistanceProxy.prototype.m_buffer = null;
	/**
	 * @export
	 * @type {Array.<box2d.b2Vec2>}
	 */
	box2d.b2DistanceProxy.prototype.m_vertices = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2DistanceProxy.prototype.m_count = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2DistanceProxy.prototype.m_radius = 0;

	/**
	 * @export
	 * @return {box2d.b2DistanceProxy}
	 */
	box2d.b2DistanceProxy.prototype.Reset = function () {
	  this.m_vertices = null;
	  this.m_count = 0;
	  this.m_radius = 0;
	  return this;
	};

	/**
	 * Initialize the proxy using the given shape. The shape must
	 * remain in scope while the proxy is in use.
	 * @export
	 * @return {void}
	 * @param {box2d.b2Shape} shape
	 * @param {number} index
	 */
	box2d.b2DistanceProxy.prototype.SetShape = function (shape, index) {
	  shape.SetupDistanceProxy(this, index);
	};

	/**
	 * Get the supporting vertex index in the given direction.
	 * @export
	 * @return {number}
	 * @param {box2d.b2Vec2} d
	 */
	box2d.b2DistanceProxy.prototype.GetSupport = function (d) {
	  /** @type {number} */
	  var bestIndex = 0;
	  /** @type {number} */
	  var bestValue = box2d.b2Dot_V2_V2(this.m_vertices[0], d);
	  for (var i = 1; i < this.m_count; ++i) {
	    /** @type {number} */
	    var value = box2d.b2Dot_V2_V2(this.m_vertices[i], d);
	    if (value > bestValue) {
	      bestIndex = i;
	      bestValue = value;
	    }
	  }

	  return bestIndex;
	};

	/**
	 * Get the supporting vertex in the given direction.
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} d
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2DistanceProxy.prototype.GetSupportVertex = function (d, out) {
	  /** @type {number} */
	  var bestIndex = 0;
	  /** @type {number} */
	  var bestValue = box2d.b2Dot_V2_V2(this.m_vertices[0], d);
	  for (var i = 1; i < this.m_count; ++i) {
	    /** @type {number} */
	    var value = box2d.b2Dot_V2_V2(this.m_vertices[i], d);
	    if (value > bestValue) {
	      bestIndex = i;
	      bestValue = value;
	    }
	  }

	  return out.Copy(this.m_vertices[bestIndex]);
	};

	/**
	 * Get the vertex count.
	 * @export
	 * @return {number}
	 */
	box2d.b2DistanceProxy.prototype.GetVertexCount = function () {
	  return this.m_count;
	};

	/**
	 * Get a vertex by index. Used by box2d.b2Distance.
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {number} index
	 */
	box2d.b2DistanceProxy.prototype.GetVertex = function (index) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(0 <= index && index < this.m_count);
	  }
	  return this.m_vertices[index];
	};

	/**
	 * Used to warm start box2d.b2Distance.
	 * Set count to zero on first call.
	 * @export
	 * @constructor
	 */
	box2d.b2SimplexCache = function () {
	  this.indexA = box2d.b2MakeNumberArray(3);
	  this.indexB = box2d.b2MakeNumberArray(3);
	};

	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2SimplexCache.prototype.metric = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2SimplexCache.prototype.count = 0;
	/**
	 * @export
	 * @type {Array.<number>}
	 */
	box2d.b2SimplexCache.prototype.indexA = null;
	/**
	 * @export
	 * @type {Array.<number>}
	 */
	box2d.b2SimplexCache.prototype.indexB = null;

	/**
	 * @export
	 * @return {box2d.b2SimplexCache}
	 */
	box2d.b2SimplexCache.prototype.Reset = function () {
	  this.metric = 0;
	  this.count = 0;
	  return this;
	};

	/**
	 * Input for box2d.b2Distance.
	 * You have to option to use the shape radii in the computation.
	 * @export
	 * @constructor
	 */
	box2d.b2DistanceInput = function () {
	  this.proxyA = new box2d.b2DistanceProxy();
	  this.proxyB = new box2d.b2DistanceProxy();
	  this.transformA = new box2d.b2Transform();
	  this.transformB = new box2d.b2Transform();
	};

	/**
	 * @export
	 * @type {box2d.b2DistanceProxy}
	 */
	box2d.b2DistanceInput.prototype.proxyA = null;
	/**
	 * @export
	 * @type {box2d.b2DistanceProxy}
	 */
	box2d.b2DistanceInput.prototype.proxyB = null;
	/**
	 * @export
	 * @type {box2d.b2Transform}
	 */
	box2d.b2DistanceInput.prototype.transformA = null;
	/**
	 * @export
	 * @type {box2d.b2Transform}
	 */
	box2d.b2DistanceInput.prototype.transformB = null;
	/**
	 * @export
	 * @type {boolean}
	 */
	box2d.b2DistanceInput.prototype.useRadii = false;

	/**
	 * @export
	 * @return {box2d.b2DistanceInput}
	 */
	box2d.b2DistanceInput.prototype.Reset = function () {
	  this.proxyA.Reset();
	  this.proxyB.Reset();
	  this.transformA.SetIdentity();
	  this.transformB.SetIdentity();
	  this.useRadii = false;
	  return this;
	};

	/**
	 * Output for box2d.b2Distance.
	 * @export
	 * @constructor
	 */
	box2d.b2DistanceOutput = function () {
	  this.pointA = new box2d.b2Vec2();
	  this.pointB = new box2d.b2Vec2();
	};

	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2DistanceOutput.prototype.pointA = null; ///< closest point on shapeA
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2DistanceOutput.prototype.pointB = null; ///< closest point on shapeB
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2DistanceOutput.prototype.distance = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2DistanceOutput.prototype.iterations = 0; ///< number of GJK iterations used

	/**
	 * @export
	 * @return {box2d.b2DistanceOutput}
	 */
	box2d.b2DistanceOutput.prototype.Reset = function () {
	  this.pointA.SetZero();
	  this.pointB.SetZero();
	  this.distance = 0;
	  this.iterations = 0;
	  return this;
	};

	/**
	 * GJK using Voronoi regions (Christer Ericson) and Barycentric
	 * coordinates.
	 */

	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2_gjkCalls = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2_gjkIters = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2_gjkMaxIters = 0;

	/**
	 * @export
	 * @constructor
	 */
	box2d.b2SimplexVertex = function () {
	  this.wA = new box2d.b2Vec2();
	  this.wB = new box2d.b2Vec2();
	  this.w = new box2d.b2Vec2();
	};

	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2SimplexVertex.prototype.wA = null; // support point in proxyA
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2SimplexVertex.prototype.wB = null; // support point in proxyB
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2SimplexVertex.prototype.w = null; // wB - wA
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2SimplexVertex.prototype.a = 0; // barycentric coordinate for closest point
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2SimplexVertex.prototype.indexA = 0; // wA index
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2SimplexVertex.prototype.indexB = 0; // wB index

	/**
	 * @export
	 * @return {box2d.b2SimplexVertex}
	 * @param {box2d.b2SimplexVertex} other
	 */
	box2d.b2SimplexVertex.prototype.Copy = function (other) {
	  this.wA.Copy(other.wA); // support point in proxyA
	  this.wB.Copy(other.wB); // support point in proxyB
	  this.w.Copy(other.w); // wB - wA
	  this.a = other.a; // barycentric coordinate for closest point
	  this.indexA = other.indexA; // wA index
	  this.indexB = other.indexB; // wB index
	  return this;
	};

	/**
	 * @export
	 * @constructor
	 */
	box2d.b2Simplex = function () {
	  this.m_v1 = new box2d.b2SimplexVertex();
	  this.m_v2 = new box2d.b2SimplexVertex();
	  this.m_v3 = new box2d.b2SimplexVertex();
	  this.m_vertices = new Array(3);
	  this.m_vertices[0] = this.m_v1;
	  this.m_vertices[1] = this.m_v2;
	  this.m_vertices[2] = this.m_v3;
	};

	/**
	 * @export
	 * @type {box2d.b2SimplexVertex}
	 */
	box2d.b2Simplex.prototype.m_v1 = null;
	/**
	 * @export
	 * @type {box2d.b2SimplexVertex}
	 */
	box2d.b2Simplex.prototype.m_v2 = null;
	/**
	 * @export
	 * @type {box2d.b2SimplexVertex}
	 */
	box2d.b2Simplex.prototype.m_v3 = null;
	/**
	 * @export
	 * @type {Array.<box2d.b2SimplexVertex>}
	 */
	box2d.b2Simplex.prototype.m_vertices = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Simplex.prototype.m_count = 0;

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2SimplexCache} cache
	 * @param {box2d.b2DistanceProxy} proxyA
	 * @param {box2d.b2Transform} transformA
	 * @param {box2d.b2DistanceProxy} proxyB
	 * @param {box2d.b2Transform} transformB
	 */
	box2d.b2Simplex.prototype.ReadCache = function (cache, proxyA, transformA, proxyB, transformB) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(0 <= cache.count && cache.count <= 3);
	  }

	  // Copy data from cache.
	  this.m_count = cache.count;
	  /** @type Array.<box2d.b2SimplexVertex> */
	  var vertices = this.m_vertices;
	  for (var i = 0; i < this.m_count; ++i) {
	    /** @type {box2d.b2SimplexVertex} */
	    var v = vertices[i];
	    v.indexA = cache.indexA[i];
	    v.indexB = cache.indexB[i];
	    /** @type {box2d.b2Vec2} */
	    var wALocal = proxyA.GetVertex(v.indexA);
	    /** @type {box2d.b2Vec2} */
	    var wBLocal = proxyB.GetVertex(v.indexB);
	    box2d.b2Mul_X_V2(transformA, wALocal, v.wA);
	    box2d.b2Mul_X_V2(transformB, wBLocal, v.wB);
	    box2d.b2Sub_V2_V2(v.wB, v.wA, v.w);
	    v.a = 0;
	  }

	  // Compute the new simplex metric, if it is substantially different than
	  // old metric then flush the simplex.
	  if (this.m_count > 1) {
	    /** @type {number} */
	    var metric1 = cache.metric;
	    /** @type {number} */
	    var metric2 = this.GetMetric();
	    if (metric2 < 0.5 * metric1 || 2 * metric1 < metric2 || metric2 < box2d.b2_epsilon) {
	      // Reset the simplex.
	      this.m_count = 0;
	    }
	  }

	  // If the cache is empty or invalid ...
	  if (this.m_count === 0) {
	    /** type {box2d.b2SimplexVertex} */
	    var v = vertices[0];
	    v.indexA = 0;
	    v.indexB = 0;
	    /** type {box2d.b2Vec2} */
	    var wALocal = proxyA.GetVertex(0);
	    /** type {box2d.b2Vec2} */
	    var wBLocal = proxyB.GetVertex(0);
	    box2d.b2Mul_X_V2(transformA, wALocal, v.wA);
	    box2d.b2Mul_X_V2(transformB, wBLocal, v.wB);
	    box2d.b2Sub_V2_V2(v.wB, v.wA, v.w);
	    v.a = 1;
	    this.m_count = 1;
	  }
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2SimplexCache} cache
	 */
	box2d.b2Simplex.prototype.WriteCache = function (cache) {
	  cache.metric = this.GetMetric();
	  cache.count = this.m_count;
	  /** @type {Array.<box2d.b2SimplexVertex>} */
	  var vertices = this.m_vertices;
	  for (var i = 0; i < this.m_count; ++i) {
	    cache.indexA[i] = vertices[i].indexA;
	    cache.indexB[i] = vertices[i].indexB;
	  }
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2Simplex.prototype.GetSearchDirection = function (out) {
	  switch (this.m_count) {
	    case 1:
	      return out.Copy(this.m_v1.w).SelfNeg();

	    case 2:
	      {
	        var e12 = box2d.b2Sub_V2_V2(this.m_v2.w, this.m_v1.w, out);
	        var sgn = box2d.b2Cross_V2_V2(e12, box2d.b2Vec2.s_t0.Copy(this.m_v1.w).SelfNeg());
	        if (sgn > 0) {
	          // Origin is left of e12.
	          return box2d.b2Cross_S_V2(1.0, e12, out);
	        } else {
	          // Origin is right of e12.
	          return box2d.b2Cross_V2_S(e12, 1.0, out);
	        }
	      }

	    default:
	      if (box2d.ENABLE_ASSERTS) {
	        box2d.b2Assert(false);
	      }
	      return out.SetZero();
	  }
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2Simplex.prototype.GetClosestPoint = function (out) {
	  switch (this.m_count) {
	    case 0:
	      if (box2d.ENABLE_ASSERTS) {
	        box2d.b2Assert(false);
	      }
	      return out.SetZero();

	    case 1:
	      return out.Copy(this.m_v1.w);

	    case 2:
	      return out.Set(this.m_v1.a * this.m_v1.w.x + this.m_v2.a * this.m_v2.w.x, this.m_v1.a * this.m_v1.w.y + this.m_v2.a * this.m_v2.w.y);

	    case 3:
	      return out.SetZero();

	    default:
	      if (box2d.ENABLE_ASSERTS) {
	        box2d.b2Assert(false);
	      }
	      return out.SetZero();
	  }
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2Vec2} pA
	 * @param {box2d.b2Vec2} pB
	 */
	box2d.b2Simplex.prototype.GetWitnessPoints = function (pA, pB) {
	  switch (this.m_count) {
	    case 0:
	      if (box2d.ENABLE_ASSERTS) {
	        box2d.b2Assert(false);
	      }
	      break;

	    case 1:
	      pA.Copy(this.m_v1.wA);
	      pB.Copy(this.m_v1.wB);
	      break;

	    case 2:
	      pA.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x;
	      pA.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y;
	      pB.x = this.m_v1.a * this.m_v1.wB.x + this.m_v2.a * this.m_v2.wB.x;
	      pB.y = this.m_v1.a * this.m_v1.wB.y + this.m_v2.a * this.m_v2.wB.y;
	      break;

	    case 3:
	      pB.x = pA.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x + this.m_v3.a * this.m_v3.wA.x;
	      pB.y = pA.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y + this.m_v3.a * this.m_v3.wA.y;
	      break;

	    default:
	      if (box2d.ENABLE_ASSERTS) {
	        box2d.b2Assert(false);
	      }
	      break;
	  }
	};

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2Simplex.prototype.GetMetric = function () {
	  switch (this.m_count) {
	    case 0:
	      if (box2d.ENABLE_ASSERTS) {
	        box2d.b2Assert(false);
	      }
	      return 0;

	    case 1:
	      return 0;

	    case 2:
	      return box2d.b2Distance(this.m_v1.w, this.m_v2.w);

	    case 3:
	      return box2d.b2Cross_V2_V2(box2d.b2Sub_V2_V2(this.m_v2.w, this.m_v1.w, box2d.b2Vec2.s_t0), box2d.b2Sub_V2_V2(this.m_v3.w, this.m_v1.w, box2d.b2Vec2.s_t1));

	    default:
	      if (box2d.ENABLE_ASSERTS) {
	        box2d.b2Assert(false);
	      }
	      return 0;
	  }
	};

	/**
	 * Solve a line segment using barycentric coordinates.
	 *
	 * p = a1 * w1 + a2 * w2
	 * a1 + a2 = 1
	 *
	 * The vector from the origin to the closest point on the line is
	 * perpendicular to the line.
	 * e12 = w2 - w1
	 * dot(p, e) = 0
	 * a1 * dot(w1, e) + a2 * dot(w2, e) = 0
	 *
	 * 2-by-2 linear system
	 * [1      1     ][a1] = [1]
	 * [w1.e12 w2.e12][a2] = [0]
	 *
	 * Define
	 * d12_1 =  dot(w2, e12)
	 * d12_2 = -dot(w1, e12)
	 * d12 = d12_1 + d12_2
	 *
	 * Solution
	 * a1 = d12_1 / d12
	 * a2 = d12_2 / d12
	 *
	 * @export
	 * @return {void}
	 */
	box2d.b2Simplex.prototype.Solve2 = function () {
	  /** @type {box2d.b2Vec2} */
	  var w1 = this.m_v1.w;
	  /** @type {box2d.b2Vec2} */
	  var w2 = this.m_v2.w;
	  /** @type {box2d.b2Vec2} */
	  var e12 = box2d.b2Sub_V2_V2(w2, w1, box2d.b2Simplex.s_e12);

	  // w1 region
	  /** @type {number} */
	  var d12_2 = -box2d.b2Dot_V2_V2(w1, e12);
	  if (d12_2 <= 0) {
	    // a2 <= 0, so we clamp it to 0
	    this.m_v1.a = 1;
	    this.m_count = 1;
	    return;
	  }

	  // w2 region
	  /** @type {number} */
	  var d12_1 = box2d.b2Dot_V2_V2(w2, e12);
	  if (d12_1 <= 0) {
	    // a1 <= 0, so we clamp it to 0
	    this.m_v2.a = 1;
	    this.m_count = 1;
	    this.m_v1.Copy(this.m_v2);
	    return;
	  }

	  // Must be in e12 region.
	  /** @type {number} */
	  var inv_d12 = 1 / (d12_1 + d12_2);
	  this.m_v1.a = d12_1 * inv_d12;
	  this.m_v2.a = d12_2 * inv_d12;
	  this.m_count = 2;
	};

	/**
	 * Possible regions:
	 * - points[2]
	 * - edge points[0]-points[2]
	 * - edge points[1]-points[2]
	 * - inside the triangle
	 * @export
	 * @return {void}
	 */
	box2d.b2Simplex.prototype.Solve3 = function () {
	  /** @type {box2d.b2Vec2} */
	  var w1 = this.m_v1.w;
	  /** @type {box2d.b2Vec2} */
	  var w2 = this.m_v2.w;
	  /** @type {box2d.b2Vec2} */
	  var w3 = this.m_v3.w;

	  // Edge12
	  // [1      1     ][a1] = [1]
	  // [w1.e12 w2.e12][a2] = [0]
	  // a3 = 0
	  /** @type {box2d.b2Vec2} */
	  var e12 = box2d.b2Sub_V2_V2(w2, w1, box2d.b2Simplex.s_e12);
	  /** @type {number} */
	  var w1e12 = box2d.b2Dot_V2_V2(w1, e12);
	  /** @type {number} */
	  var w2e12 = box2d.b2Dot_V2_V2(w2, e12);
	  /** @type {number} */
	  var d12_1 = w2e12;
	  /** @type {number} */
	  var d12_2 = -w1e12;

	  // Edge13
	  // [1      1     ][a1] = [1]
	  // [w1.e13 w3.e13][a3] = [0]
	  // a2 = 0
	  /** @type {box2d.b2Vec2} */
	  var e13 = box2d.b2Sub_V2_V2(w3, w1, box2d.b2Simplex.s_e13);
	  /** @type {number} */
	  var w1e13 = box2d.b2Dot_V2_V2(w1, e13);
	  /** @type {number} */
	  var w3e13 = box2d.b2Dot_V2_V2(w3, e13);
	  /** @type {number} */
	  var d13_1 = w3e13;
	  /** @type {number} */
	  var d13_2 = -w1e13;

	  // Edge23
	  // [1      1     ][a2] = [1]
	  // [w2.e23 w3.e23][a3] = [0]
	  // a1 = 0
	  /** @type {box2d.b2Vec2} */
	  var e23 = box2d.b2Sub_V2_V2(w3, w2, box2d.b2Simplex.s_e23);
	  /** @type {number} */
	  var w2e23 = box2d.b2Dot_V2_V2(w2, e23);
	  /** @type {number} */
	  var w3e23 = box2d.b2Dot_V2_V2(w3, e23);
	  /** @type {number} */
	  var d23_1 = w3e23;
	  /** @type {number} */
	  var d23_2 = -w2e23;

	  // Triangle123
	  /** @type {number} */
	  var n123 = box2d.b2Cross_V2_V2(e12, e13);

	  /** @type {number} */
	  var d123_1 = n123 * box2d.b2Cross_V2_V2(w2, w3);
	  /** @type {number} */
	  var d123_2 = n123 * box2d.b2Cross_V2_V2(w3, w1);
	  /** @type {number} */
	  var d123_3 = n123 * box2d.b2Cross_V2_V2(w1, w2);

	  // w1 region
	  if (d12_2 <= 0 && d13_2 <= 0) {
	    this.m_v1.a = 1;
	    this.m_count = 1;
	    return;
	  }

	  // e12
	  if (d12_1 > 0 && d12_2 > 0 && d123_3 <= 0) {
	    /** @type {number} */
	    var inv_d12 = 1 / (d12_1 + d12_2);
	    this.m_v1.a = d12_1 * inv_d12;
	    this.m_v2.a = d12_2 * inv_d12;
	    this.m_count = 2;
	    return;
	  }

	  // e13
	  if (d13_1 > 0 && d13_2 > 0 && d123_2 <= 0) {
	    /** @type {number} */
	    var inv_d13 = 1 / (d13_1 + d13_2);
	    this.m_v1.a = d13_1 * inv_d13;
	    this.m_v3.a = d13_2 * inv_d13;
	    this.m_count = 2;
	    this.m_v2.Copy(this.m_v3);
	    return;
	  }

	  // w2 region
	  if (d12_1 <= 0 && d23_2 <= 0) {
	    this.m_v2.a = 1;
	    this.m_count = 1;
	    this.m_v1.Copy(this.m_v2);
	    return;
	  }

	  // w3 region
	  if (d13_1 <= 0 && d23_1 <= 0) {
	    this.m_v3.a = 1;
	    this.m_count = 1;
	    this.m_v1.Copy(this.m_v3);
	    return;
	  }

	  // e23
	  if (d23_1 > 0 && d23_2 > 0 && d123_1 <= 0) {
	    /** @type {number} */
	    var inv_d23 = 1 / (d23_1 + d23_2);
	    this.m_v2.a = d23_1 * inv_d23;
	    this.m_v3.a = d23_2 * inv_d23;
	    this.m_count = 2;
	    this.m_v1.Copy(this.m_v3);
	    return;
	  }

	  // Must be in triangle123
	  /** @type {number} */
	  var inv_d123 = 1 / (d123_1 + d123_2 + d123_3);
	  this.m_v1.a = d123_1 * inv_d123;
	  this.m_v2.a = d123_2 * inv_d123;
	  this.m_v3.a = d123_3 * inv_d123;
	  this.m_count = 3;
	};
	box2d.b2Simplex.s_e12 = new box2d.b2Vec2();
	box2d.b2Simplex.s_e13 = new box2d.b2Vec2();
	box2d.b2Simplex.s_e23 = new box2d.b2Vec2();

	/**
	 * Compute the closest points between two shapes. Supports any combination of:
	 * box2d.b2CircleShape, box2d.b2PolygonShape, box2d.b2EdgeShape. The simplex cache is input/output.
	 * On the first call set box2d.b2SimplexCache.count to zero.
	 * @export
	 * @param {box2d.b2DistanceOutput} output
	 * @param {box2d.b2SimplexCache} cache
	 * @param {box2d.b2DistanceInput} input
	 * @return {void}
	 */
	box2d.b2ShapeDistance = function (output, cache, input) {
	  ++box2d.b2_gjkCalls;

	  var proxyA = input.proxyA;
	  var proxyB = input.proxyB;

	  var transformA = input.transformA;
	  var transformB = input.transformB;

	  // Initialize the simplex.
	  /** @type {box2d.b2Simplex} */
	  var simplex = box2d.b2Distance.s_simplex;
	  simplex.ReadCache(cache, proxyA, transformA, proxyB, transformB);

	  // Get simplex vertices as an array.
	  /** @type {Array.<box2d.b2SimplexVertex>} */
	  var vertices = simplex.m_vertices;
	  /** @type {number} */
	  var k_maxIters = 20;

	  // These store the vertices of the last simplex so that we
	  // can check for duplicates and prevent cycling.
	  /** @type {Array.<number>} */
	  var saveA = box2d.b2Distance.s_saveA;
	  /** @type {Array.<number>} */
	  var saveB = box2d.b2Distance.s_saveB;
	  /** @type {number} */
	  var saveCount = 0;

	  /** @type {number} */
	  var distanceSqr1 = box2d.b2_maxFloat;
	  /** @type {number} */
	  var distanceSqr2 = distanceSqr1;

	  // Main iteration loop.
	  var iter = 0;
	  while (iter < k_maxIters) {
	    // Copy simplex so we can identify duplicates.
	    saveCount = simplex.m_count;
	    for (var i = 0; i < saveCount; ++i) {
	      saveA[i] = vertices[i].indexA;
	      saveB[i] = vertices[i].indexB;
	    }

	    switch (simplex.m_count) {
	      case 1:
	        break;

	      case 2:
	        simplex.Solve2();
	        break;

	      case 3:
	        simplex.Solve3();
	        break;

	      default:
	        if (box2d.ENABLE_ASSERTS) {
	          box2d.b2Assert(false);
	        }
	    }

	    // If we have 3 points, then the origin is in the corresponding triangle.
	    if (simplex.m_count === 3) {
	      break;
	    }

	    // Compute closest point.
	    /** @type {box2d.b2Vec2} */
	    var p = simplex.GetClosestPoint(box2d.b2Distance.s_p);
	    distanceSqr2 = p.LengthSquared();

	    // Ensure progress
	    /*
	    TODO: to fix compile warning
	    if (distanceSqr2 > distanceSqr1)
	    {
	      //break;
	    }
	    */
	    distanceSqr1 = distanceSqr2;

	    // Get search direction.
	    /** @type {box2d.b2Vec2} */
	    var d = simplex.GetSearchDirection(box2d.b2Distance.s_d);

	    // Ensure the search direction is numerically fit.
	    if (d.LengthSquared() < box2d.b2_epsilon_sq) {
	      // The origin is probably contained by a line segment
	      // or triangle. Thus the shapes are overlapped.

	      // We can't return zero here even though there may be overlap.
	      // In case the simplex is a point, segment, or triangle it is difficult
	      // to determine if the origin is contained in the CSO or very close to it.
	      break;
	    }

	    // Compute a tentative new simplex vertex using support points.
	    /** @type {box2d.b2SimplexVertex} */
	    var vertex = vertices[simplex.m_count];
	    vertex.indexA = proxyA.GetSupport(box2d.b2MulT_R_V2(transformA.q, box2d.b2Vec2.s_t0.Copy(d).SelfNeg(), box2d.b2Distance.s_supportA));
	    box2d.b2Mul_X_V2(transformA, proxyA.GetVertex(vertex.indexA), vertex.wA);
	    vertex.indexB = proxyB.GetSupport(box2d.b2MulT_R_V2(transformB.q, d, box2d.b2Distance.s_supportB));
	    box2d.b2Mul_X_V2(transformB, proxyB.GetVertex(vertex.indexB), vertex.wB);
	    box2d.b2Sub_V2_V2(vertex.wB, vertex.wA, vertex.w);

	    // Iteration count is equated to the number of support point calls.
	    ++iter;
	    ++box2d.b2_gjkIters;

	    // Check for duplicate support points. This is the main termination criteria.
	    /** @type {boolean} */
	    var duplicate = false;
	    for (var i = 0; i < saveCount; ++i) {
	      if (vertex.indexA === saveA[i] && vertex.indexB === saveB[i]) {
	        duplicate = true;
	        break;
	      }
	    }

	    // If we found a duplicate support point we must exit to avoid cycling.
	    if (duplicate) {
	      break;
	    }

	    // New vertex is ok and needed.
	    ++simplex.m_count;
	  }

	  box2d.b2_gjkMaxIters = box2d.b2Max(box2d.b2_gjkMaxIters, iter);

	  // Prepare output.
	  simplex.GetWitnessPoints(output.pointA, output.pointB);
	  output.distance = box2d.b2Distance(output.pointA, output.pointB);
	  output.iterations = iter;

	  // Cache the simplex.
	  simplex.WriteCache(cache);

	  // Apply radii if requested.
	  if (input.useRadii) {
	    /** @type {number} */
	    var rA = proxyA.m_radius;
	    /** @type {number} */
	    var rB = proxyB.m_radius;

	    if (output.distance > rA + rB && output.distance > box2d.b2_epsilon) {
	      // Shapes are still no overlapped.
	      // Move the witness points to the outer surface.
	      output.distance -= rA + rB;
	      /** @type {box2d.b2Vec2} */
	      var normal = box2d.b2Sub_V2_V2(output.pointB, output.pointA, box2d.b2Distance.s_normal);
	      normal.Normalize();
	      output.pointA.SelfMulAdd(rA, normal);
	      output.pointB.SelfMulSub(rB, normal);
	    } else {
	      // Shapes are overlapped when radii are considered.
	      // Move the witness points to the middle.
	      /** type {box2d.b2Vec2} */
	      var p = box2d.b2Mid_V2_V2(output.pointA, output.pointB, box2d.b2Distance.s_p);
	      output.pointA.Copy(p);
	      output.pointB.Copy(p);
	      output.distance = 0;
	    }
	  }
	};
	box2d.b2Distance.s_simplex = new box2d.b2Simplex();
	box2d.b2Distance.s_saveA = box2d.b2MakeNumberArray(3);
	box2d.b2Distance.s_saveB = box2d.b2MakeNumberArray(3);
	box2d.b2Distance.s_p = new box2d.b2Vec2();
	box2d.b2Distance.s_d = new box2d.b2Vec2();
	box2d.b2Distance.s_normal = new box2d.b2Vec2();
	box2d.b2Distance.s_supportA = new box2d.b2Vec2();
	box2d.b2Distance.s_supportB = new box2d.b2Vec2();

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(5);

	/**
	 * A line segment (edge) shape. These can be connected in chains
	 * or loops to other edge shapes. The connectivity information
	 * is used to ensure correct contact normals.
	 * @export
	 * @constructor
	 * @extends {box2d.b2Shape}
	 */
	box2d.b2EdgeShape = function () {
	  box2d.b2Shape.call(this, box2d.b2ShapeType.e_edgeShape, box2d.b2_polygonRadius); // base class constructor

	  this.m_vertex1 = new box2d.b2Vec2();
	  this.m_vertex2 = new box2d.b2Vec2();

	  this.m_vertex0 = new box2d.b2Vec2();
	  this.m_vertex3 = new box2d.b2Vec2();
	}; /*
	    * Copyright (c) 2006-2010 Erin Catto http://www.box2d.org
	    *
	    * This software is provided 'as-is', without any express or implied
	    * warranty.  In no event will the authors be held liable for any damages
	    * arising from the use of this software.
	    * Permission is granted to anyone to use this software for any purpose,
	    * including commercial applications, and to alter it and redistribute it
	    * freely, subject to the following restrictions:
	    * 1. The origin of this software must not be misrepresented; you must not
	    * claim that you wrote the original software. If you use this software
	    * in a product, an acknowledgment in the product documentation would be
	    * appreciated but is not required.
	    * 2. Altered source versions must be plainly marked as such, and must not be
	    * misrepresented as being the original software.
	    * 3. This notice may not be removed or altered from any source distribution.
	    */

	goog.inherits(box2d.b2EdgeShape, box2d.b2Shape);

	/**
	 * These are the edge vertices
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2EdgeShape.prototype.m_vertex1 = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2EdgeShape.prototype.m_vertex2 = null;

	/**
	 * Optional adjacent vertices. These are used for smooth
	 * collision.
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2EdgeShape.prototype.m_vertex0 = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2EdgeShape.prototype.m_vertex3 = null;
	/**
	 * @export
	 * @type {boolean}
	 */
	box2d.b2EdgeShape.prototype.m_hasVertex0 = false;
	/**
	 * @export
	 * @type {boolean}
	 */
	box2d.b2EdgeShape.prototype.m_hasVertex3 = false;

	/**
	 * Set this as an isolated edge.
	 * @export
	 * @return {box2d.b2EdgeShape}
	 * @param {box2d.b2Vec2} v1
	 * @param {box2d.b2Vec2} v2
	 */
	box2d.b2EdgeShape.prototype.Set = function (v1, v2) {
	  this.m_vertex1.Copy(v1);
	  this.m_vertex2.Copy(v2);
	  this.m_hasVertex0 = false;
	  this.m_hasVertex3 = false;
	  return this;
	};

	box2d.b2EdgeShape.prototype.SetAsEdge = box2d.b2EdgeShape.prototype.Set;

	/**
	 * Implement box2d.b2Shape.
	 * @export
	 * @return {box2d.b2Shape}
	 */
	box2d.b2EdgeShape.prototype.Clone = function () {
	  return new box2d.b2EdgeShape().Copy(this);
	};

	/**
	 * @export
	 * @return {box2d.b2Shape}
	 * @param {box2d.b2Shape} other
	 */
	box2d.b2EdgeShape.prototype.Copy = function (other) {
	  box2d.b2Shape.prototype.Copy.call(this, other);

	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(other instanceof box2d.b2EdgeShape);
	  }

	  this.m_vertex1.Copy(other.m_vertex1);
	  this.m_vertex2.Copy(other.m_vertex2);
	  this.m_vertex0.Copy(other.m_vertex0);
	  this.m_vertex3.Copy(other.m_vertex3);
	  this.m_hasVertex0 = other.m_hasVertex0;
	  this.m_hasVertex3 = other.m_hasVertex3;

	  return this;
	};

	/**
	 * @see box2d.b2Shape::GetChildCount
	 * @export
	 * @return {number}
	 */
	box2d.b2EdgeShape.prototype.GetChildCount = function () {
	  return 1;
	};

	/**
	 * @see box2d.b2Shape::TestPoint
	 * @export
	 * @return {boolean}
	 * @param {box2d.b2Transform} xf
	 * @param {box2d.b2Vec2} p
	 */
	box2d.b2EdgeShape.prototype.TestPoint = function (xf, p) {
	  return false;
	};

	//#if B2_ENABLE_PARTICLE

	/**
	 * @see b2Shape::ComputeDistance
	 * @export
	 * @return {number}
	 * @param {box2d.b2Transform} xf
	 * @param {box2d.b2Vec2} p
	 * @param {box2d.b2Vec2} normal
	 * @param {number} childIndex
	 */
	box2d.b2EdgeShape.prototype.ComputeDistance = function (xf, p, normal, childIndex) {
	  var v1 = box2d.b2Mul_X_V2(xf, this.m_vertex1, box2d.b2EdgeShape.prototype.ComputeDistance.s_v1);
	  var v2 = box2d.b2Mul_X_V2(xf, this.m_vertex2, box2d.b2EdgeShape.prototype.ComputeDistance.s_v2);

	  var d = box2d.b2Sub_V2_V2(p, v1, box2d.b2EdgeShape.prototype.ComputeDistance.s_d);
	  var s = box2d.b2Sub_V2_V2(v2, v1, box2d.b2EdgeShape.prototype.ComputeDistance.s_s);
	  var ds = box2d.b2Dot_V2_V2(d, s);
	  if (ds > 0) {
	    var s2 = box2d.b2Dot_V2_V2(s, s);
	    if (ds > s2) {
	      box2d.b2Sub_V2_V2(p, v2, d);
	    } else {
	      d.SelfMulSub(ds / s2, s);
	    }
	  }
	  normal.Copy(d);
	  return normal.Normalize();
	};
	box2d.b2EdgeShape.prototype.ComputeDistance.s_v1 = new box2d.b2Vec2();
	box2d.b2EdgeShape.prototype.ComputeDistance.s_v2 = new box2d.b2Vec2();
	box2d.b2EdgeShape.prototype.ComputeDistance.s_d = new box2d.b2Vec2();
	box2d.b2EdgeShape.prototype.ComputeDistance.s_s = new box2d.b2Vec2();

	//#endif

	/**
	 * Implement box2d.b2Shape.
	 * p = p1 + t * d
	 * v = v1 + s * e
	 * p1 + t * d = v1 + s * e
	 * s * e - t * d = p1 - v1
	 * @export
	 * @return {boolean}
	 * @param {box2d.b2RayCastOutput} output
	 * @param {box2d.b2RayCastInput} input
	 * @param {box2d.b2Transform} xf
	 * @param {number} childIndex
	 */
	box2d.b2EdgeShape.prototype.RayCast = function (output, input, xf, childIndex) {
	  // Put the ray into the edge's frame of reference.
	  var p1 = box2d.b2MulT_X_V2(xf, input.p1, box2d.b2EdgeShape.prototype.RayCast.s_p1);
	  var p2 = box2d.b2MulT_X_V2(xf, input.p2, box2d.b2EdgeShape.prototype.RayCast.s_p2);
	  var d = box2d.b2Sub_V2_V2(p2, p1, box2d.b2EdgeShape.prototype.RayCast.s_d);

	  var v1 = this.m_vertex1;
	  var v2 = this.m_vertex2;
	  var e = box2d.b2Sub_V2_V2(v2, v1, box2d.b2EdgeShape.prototype.RayCast.s_e);
	  var normal = output.normal.Set(e.y, -e.x).SelfNormalize();

	  // q = p1 + t * d
	  // dot(normal, q - v1) = 0
	  // dot(normal, p1 - v1) + t * dot(normal, d) = 0
	  var numerator = box2d.b2Dot_V2_V2(normal, box2d.b2Sub_V2_V2(v1, p1, box2d.b2Vec2.s_t0));
	  var denominator = box2d.b2Dot_V2_V2(normal, d);

	  if (denominator === 0) {
	    return false;
	  }

	  var t = numerator / denominator;
	  if (t < 0 || input.maxFraction < t) {
	    return false;
	  }

	  var q = box2d.b2AddMul_V2_S_V2(p1, t, d, box2d.b2EdgeShape.prototype.RayCast.s_q);

	  // q = v1 + s * r
	  // s = dot(q - v1, r) / dot(r, r)
	  var r = box2d.b2Sub_V2_V2(v2, v1, box2d.b2EdgeShape.prototype.RayCast.s_r);
	  var rr = box2d.b2Dot_V2_V2(r, r);
	  if (rr === 0) {
	    return false;
	  }

	  var s = box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(q, v1, box2d.b2Vec2.s_t0), r) / rr;
	  if (s < 0 || 1 < s) {
	    return false;
	  }

	  output.fraction = t;
	  box2d.b2Mul_R_V2(xf.q, output.normal, output.normal);
	  if (numerator > 0) {
	    output.normal.SelfNeg();
	  }
	  return true;
	};
	box2d.b2EdgeShape.prototype.RayCast.s_p1 = new box2d.b2Vec2();
	box2d.b2EdgeShape.prototype.RayCast.s_p2 = new box2d.b2Vec2();
	box2d.b2EdgeShape.prototype.RayCast.s_d = new box2d.b2Vec2();
	box2d.b2EdgeShape.prototype.RayCast.s_e = new box2d.b2Vec2();
	box2d.b2EdgeShape.prototype.RayCast.s_q = new box2d.b2Vec2();
	box2d.b2EdgeShape.prototype.RayCast.s_r = new box2d.b2Vec2();

	/**
	 * @see box2d.b2Shape::ComputeAABB
	 * @export
	 * @return {void}
	 * @param {box2d.b2AABB} aabb
	 * @param {box2d.b2Transform} xf
	 * @param {number} childIndex
	 */
	box2d.b2EdgeShape.prototype.ComputeAABB = function (aabb, xf, childIndex) {
	  var v1 = box2d.b2Mul_X_V2(xf, this.m_vertex1, box2d.b2EdgeShape.prototype.ComputeAABB.s_v1);
	  var v2 = box2d.b2Mul_X_V2(xf, this.m_vertex2, box2d.b2EdgeShape.prototype.ComputeAABB.s_v2);

	  box2d.b2Min_V2_V2(v1, v2, aabb.lowerBound);
	  box2d.b2Max_V2_V2(v1, v2, aabb.upperBound);

	  var r = this.m_radius;
	  aabb.lowerBound.SelfSubXY(r, r);
	  aabb.upperBound.SelfAddXY(r, r);
	};
	box2d.b2EdgeShape.prototype.ComputeAABB.s_v1 = new box2d.b2Vec2();
	box2d.b2EdgeShape.prototype.ComputeAABB.s_v2 = new box2d.b2Vec2();

	/**
	 * @see box2d.b2Shape::ComputeMass
	 * @export
	 * @return {void}
	 * @param {box2d.b2MassData} massData
	 * @param {number} density
	 */
	box2d.b2EdgeShape.prototype.ComputeMass = function (massData, density) {
	  massData.mass = 0;
	  box2d.b2Mid_V2_V2(this.m_vertex1, this.m_vertex2, massData.center);
	  massData.I = 0;
	};

	/**
	 * @return {void}
	 * @param {box2d.b2DistanceProxy} proxy
	 * @param {number} index
	 */
	box2d.b2EdgeShape.prototype.SetupDistanceProxy = function (proxy, index) {
	  proxy.m_vertices = proxy.m_buffer;
	  proxy.m_vertices[0].Copy(this.m_vertex1);
	  proxy.m_vertices[1].Copy(this.m_vertex2);
	  proxy.m_count = 2;
	  proxy.m_radius = this.m_radius;
	};

	/**
	 * @export
	 * @return {number}
	 * @param {box2d.b2Vec2} normal
	 * @param {number} offset
	 * @param {box2d.b2Transform} xf
	 * @param {box2d.b2Vec2} c
	 */
	box2d.b2EdgeShape.prototype.ComputeSubmergedArea = function (normal, offset, xf, c) {
	  c.SetZero();
	  return 0;
	};

	/**
	 * Dump this shape to the log file.
	 * @export
	 * @return {void}
	 */
	box2d.b2EdgeShape.prototype.Dump = function () {
	  box2d.b2Log("    /*box2d.b2EdgeShape*/ var shape = new box2d.b2EdgeShape();\n");
	  box2d.b2Log("    shape.m_radius = %.15f;\n", this.m_radius);
	  box2d.b2Log("    shape.m_vertex0.Set(%.15f, %.15f);\n", this.m_vertex0.x, this.m_vertex0.y);
	  box2d.b2Log("    shape.m_vertex1.Set(%.15f, %.15f);\n", this.m_vertex1.x, this.m_vertex1.y);
	  box2d.b2Log("    shape.m_vertex2.Set(%.15f, %.15f);\n", this.m_vertex2.x, this.m_vertex2.y);
	  box2d.b2Log("    shape.m_vertex3.Set(%.15f, %.15f);\n", this.m_vertex3.x, this.m_vertex3.y);
	  box2d.b2Log("    shape.m_hasVertex0 = %s;\n", this.m_hasVertex0);
	  box2d.b2Log("    shape.m_hasVertex3 = %s;\n", this.m_hasVertex3);
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(5);

	__webpack_require__(8);

	/**
	 * A chain shape is a free form sequence of line segments.
	 * The chain has two-sided collision, so you can use inside and outside collision.
	 * Therefore, you may use any winding order.
	 * Since there may be many vertices, they are allocated using b2Alloc.
	 * Connectivity information is used to create smooth collisions.
	 * WARNING: The chain will not collide properly if there are self-intersections.
	 * @export
	 * @constructor
	 * @extends {box2d.b2Shape}
	 */
	/*
	 * Copyright (c) 2006-2010 Erin Catto http://www.box2d.org
	 *
	 * This software is provided 'as-is', without any express or implied
	 * warranty.  In no event will the authors be held liable for any damages
	 * arising from the use of this software.
	 * Permission is granted to anyone to use this software for any purpose,
	 * including commercial applications, and to alter it and redistribute it
	 * freely, subject to the following restrictions:
	 * 1. The origin of this software must not be misrepresented; you must not
	 * claim that you wrote the original software. If you use this software
	 * in a product, an acknowledgment in the product documentation would be
	 * appreciated but is not required.
	 * 2. Altered source versions must be plainly marked as such, and must not be
	 * misrepresented as being the original software.
	 * 3. This notice may not be removed or altered from any source distribution.
	 */

	box2d.b2ChainShape = function () {
	  box2d.b2Shape.call(this, box2d.b2ShapeType.e_chainShape, box2d.b2_polygonRadius); // base class constructor

	  this.m_prevVertex = new box2d.b2Vec2();
	  this.m_nextVertex = new box2d.b2Vec2();
	};

	goog.inherits(box2d.b2ChainShape, box2d.b2Shape);

	/**
	 * The vertices. Owned by this class.
	 * @export
	 * @type {Array.<box2d.b2Vec2>}
	 */
	box2d.b2ChainShape.prototype.m_vertices = null;

	/**
	 * The vertex count.
	 * @export
	 * @type {number}
	 */
	box2d.b2ChainShape.prototype.m_count = 0;

	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2ChainShape.prototype.m_prevVertex = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2ChainShape.prototype.m_nextVertex = null;
	/**
	 * @export
	 * @type {boolean}
	 */
	box2d.b2ChainShape.prototype.m_hasPrevVertex = false;
	/**
	 * @export
	 * @type {boolean}
	 */
	box2d.b2ChainShape.prototype.m_hasNextVertex = false;

	/**
	 * Clear all data.
	 * @export
	 * @return {void}
	 */
	box2d.b2ChainShape.prototype.Clear = function () {
	  this.m_vertices = null;
	  this.m_count = 0;
	};

	/**
	 * Create a loop. This automatically adjusts connectivity.
	 * @export
	 * @return {box2d.b2ChainShape}
	 * @param {Array.<box2d.b2Vec2>} vertices an array of vertices, these are copied
	 * @param {number=} count the vertex count
	 */
	box2d.b2ChainShape.prototype.CreateLoop = function (vertices, count) {
	  count = count || vertices.length;
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(this.m_vertices === null && this.m_count === 0);
	  }
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(count >= 3);
	  }
	  if (box2d.ENABLE_ASSERTS) {
	    for (var i = 1; i < count; ++i) {
	      // If the code crashes here, it means your vertices are too close together.
	      box2d.b2Assert(box2d.b2DistanceSquared(vertices[i - 1], vertices[i]) > box2d.b2_linearSlop * box2d.b2_linearSlop);
	    }
	  }

	  this.m_count = count + 1;
	  this.m_vertices = box2d.b2Vec2.MakeArray(this.m_count);
	  for (var i = 0; i < count; ++i) {
	    this.m_vertices[i].Copy(vertices[i]);
	  }
	  this.m_vertices[count].Copy(this.m_vertices[0]);
	  this.m_prevVertex.Copy(this.m_vertices[this.m_count - 2]);
	  this.m_nextVertex.Copy(this.m_vertices[1]);
	  this.m_hasPrevVertex = true;
	  this.m_hasNextVertex = true;
	  return this;
	};

	/**
	 * Create a chain with isolated end vertices.
	 * @export
	 * @return {box2d.b2ChainShape}
	 * @param {Array.<box2d.b2Vec2>} vertices an array of vertices, these are copied
	 * @param {number=} count the vertex count
	 */
	box2d.b2ChainShape.prototype.CreateChain = function (vertices, count) {
	  count = count || vertices.length;
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(this.m_vertices === null && this.m_count === 0);
	  }
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(count >= 2);
	  }
	  if (box2d.ENABLE_ASSERTS) {
	    for (var i = 1; i < count; ++i) {
	      var v1 = vertices[i - 1];
	      var v2 = vertices[i];
	      // If the code crashes here, it means your vertices are too close together.
	      box2d.b2Assert(box2d.b2DistanceSquared(v1, v2) > box2d.b2_linearSlop * box2d.b2_linearSlop);
	    }
	  }

	  this.m_count = count;
	  this.m_vertices = box2d.b2Vec2.MakeArray(count);
	  for (var i = 0; i < count; ++i) {
	    this.m_vertices[i].Copy(vertices[i]);
	  }
	  this.m_hasPrevVertex = false;
	  this.m_hasNextVertex = false;

	  this.m_prevVertex.SetZero();
	  this.m_nextVertex.SetZero();

	  return this;
	};

	/**
	 * Establish connectivity to a vertex that precedes the first vertex.
	 * Don't call this for loops.
	 * @export
	 * @return {box2d.b2ChainShape}
	 * @param {box2d.b2Vec2} prevVertex
	 */
	box2d.b2ChainShape.prototype.SetPrevVertex = function (prevVertex) {
	  this.m_prevVertex.Copy(prevVertex);
	  this.m_hasPrevVertex = true;
	  return this;
	};

	/**
	 * Establish connectivity to a vertex that follows the last vertex.
	 * Don't call this for loops.
	 * @export
	 * @return {box2d.b2ChainShape}
	 * @param {box2d.b2Vec2} nextVertex
	 */
	box2d.b2ChainShape.prototype.SetNextVertex = function (nextVertex) {
	  this.m_nextVertex.Copy(nextVertex);
	  this.m_hasNextVertex = true;
	  return this;
	};

	/**
	 * Implement box2d.b2Shape. Vertices are cloned using b2Alloc.
	 * @export
	 * @return {box2d.b2Shape}
	 */
	box2d.b2ChainShape.prototype.Clone = function () {
	  return new box2d.b2ChainShape().Copy(this);
	};

	/**
	 * @export
	 * @return {box2d.b2Shape}
	 * @param {box2d.b2Shape} other
	 */
	box2d.b2ChainShape.prototype.Copy = function (other) {
	  box2d.b2Shape.prototype.Copy.call(this, other);

	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(other instanceof box2d.b2ChainShape);
	  }

	  this.CreateChain(other.m_vertices, other.m_count);
	  this.m_prevVertex.Copy(other.m_prevVertex);
	  this.m_nextVertex.Copy(other.m_nextVertex);
	  this.m_hasPrevVertex = other.m_hasPrevVertex;
	  this.m_hasNextVertex = other.m_hasNextVertex;

	  return this;
	};

	/**
	 * @see box2d.b2Shape::GetChildCount
	 * @export
	 * @return {number}
	 */
	box2d.b2ChainShape.prototype.GetChildCount = function () {
	  // edge count = vertex count - 1
	  return this.m_count - 1;
	};

	/**
	 * Get a child edge.
	 * @export
	 * @return {void}
	 * @param {box2d.b2EdgeShape} edge
	 * @param {number} index
	 */
	box2d.b2ChainShape.prototype.GetChildEdge = function (edge, index) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(0 <= index && index < this.m_count - 1);
	  }
	  edge.m_type = box2d.b2ShapeType.e_edgeShape;
	  edge.m_radius = this.m_radius;

	  edge.m_vertex1.Copy(this.m_vertices[index]);
	  edge.m_vertex2.Copy(this.m_vertices[index + 1]);

	  if (index > 0) {
	    edge.m_vertex0.Copy(this.m_vertices[index - 1]);
	    edge.m_hasVertex0 = true;
	  } else {
	    edge.m_vertex0.Copy(this.m_prevVertex);
	    edge.m_hasVertex0 = this.m_hasPrevVertex;
	  }

	  if (index < this.m_count - 2) {
	    edge.m_vertex3.Copy(this.m_vertices[index + 2]);
	    edge.m_hasVertex3 = true;
	  } else {
	    edge.m_vertex3.Copy(this.m_nextVertex);
	    edge.m_hasVertex3 = this.m_hasNextVertex;
	  }
	};

	/**
	 * This always return false.
	 * @see box2d.b2Shape::TestPoint
	 * @export
	 * @return {boolean}
	 * @param {box2d.b2Transform} xf
	 * @param {box2d.b2Vec2} p
	 */
	box2d.b2ChainShape.prototype.TestPoint = function (xf, p) {
	  return false;
	};

	//#if B2_ENABLE_PARTICLE

	/**
	 * @see b2Shape::ComputeDistance
	 * @export
	 * @return {number}
	 * @param {box2d.b2Transform} xf
	 * @param {box2d.b2Vec2} p
	 * @param {box2d.b2Vec2} normal
	 * @param {number} childIndex
	 */
	box2d.b2ChainShape.prototype.ComputeDistance = function (xf, p, normal, childIndex) {
	  /** @type {box2d.b2EdgeShape} */
	  var edge = box2d.b2ChainShape.prototype.ComputeDistance.s_edgeShape;
	  this.GetChildEdge(edge, childIndex);
	  return edge.ComputeDistance(xf, p, normal, 0);
	};
	box2d.b2ChainShape.prototype.ComputeDistance.s_edgeShape = new box2d.b2EdgeShape();

	//#endif

	/**
	 * Implement box2d.b2Shape.
	 * @export
	 * @return {boolean}
	 * @param {box2d.b2RayCastOutput} output
	 * @param {box2d.b2RayCastInput} input
	 * @param {box2d.b2Transform} xf
	 * @param {number} childIndex
	 */
	box2d.b2ChainShape.prototype.RayCast = function (output, input, xf, childIndex) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(childIndex < this.m_count);
	  }

	  /** @type {box2d.b2EdgeShape} */
	  var edgeShape = box2d.b2ChainShape.prototype.RayCast.s_edgeShape;

	  edgeShape.m_vertex1.Copy(this.m_vertices[childIndex]);
	  edgeShape.m_vertex2.Copy(this.m_vertices[(childIndex + 1) % this.m_count]);

	  return edgeShape.RayCast(output, input, xf, 0);
	};
	box2d.b2ChainShape.prototype.RayCast.s_edgeShape = new box2d.b2EdgeShape();

	/**
	 * @see box2d.b2Shape::ComputeAABB
	 * @export
	 * @return {void}
	 * @param {box2d.b2AABB} aabb
	 * @param {box2d.b2Transform} xf
	 * @param {number} childIndex
	 */
	box2d.b2ChainShape.prototype.ComputeAABB = function (aabb, xf, childIndex) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(childIndex < this.m_count);
	  }

	  /** @type {box2d.b2Vec2} */
	  var vertexi1 = this.m_vertices[childIndex];
	  /** @type {box2d.b2Vec2} */
	  var vertexi2 = this.m_vertices[(childIndex + 1) % this.m_count];

	  /** @type {box2d.b2Vec2} */
	  var v1 = box2d.b2Mul_X_V2(xf, vertexi1, box2d.b2ChainShape.prototype.ComputeAABB.s_v1);
	  /** @type {box2d.b2Vec2} */
	  var v2 = box2d.b2Mul_X_V2(xf, vertexi2, box2d.b2ChainShape.prototype.ComputeAABB.s_v2);

	  box2d.b2Min_V2_V2(v1, v2, aabb.lowerBound);
	  box2d.b2Max_V2_V2(v1, v2, aabb.upperBound);
	};
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2ChainShape.prototype.ComputeAABB.s_v1 = new box2d.b2Vec2();
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2ChainShape.prototype.ComputeAABB.s_v2 = new box2d.b2Vec2();

	/**
	 * @see box2d.b2Shape::ComputeMass
	 * @export
	 * @return {void}
	 * @param {box2d.b2MassData} massData
	 * @param {number} density
	 */
	box2d.b2ChainShape.prototype.ComputeMass = function (massData, density) {
	  massData.mass = 0;
	  massData.center.SetZero();
	  massData.I = 0;
	};

	/**
	 * @return {void}
	 * @param {box2d.b2DistanceProxy} proxy
	 * @param {number} index
	 */
	box2d.b2ChainShape.prototype.SetupDistanceProxy = function (proxy, index) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(0 <= index && index < this.m_count);
	  }

	  proxy.m_vertices = proxy.m_buffer;
	  proxy.m_vertices[0].Copy(this.m_vertices[index]);
	  if (index + 1 < this.m_count) {
	    proxy.m_vertices[1].Copy(this.m_vertices[index + 1]);
	  } else {
	    proxy.m_vertices[1].Copy(this.m_vertices[0]);
	  }
	  proxy.m_count = 2;
	  proxy.m_radius = this.m_radius;
	};

	/**
	 * @export
	 * @return {number}
	 * @param {box2d.b2Vec2} normal
	 * @param {number} offset
	 * @param {box2d.b2Transform} xf
	 * @param {box2d.b2Vec2} c
	 */
	box2d.b2ChainShape.prototype.ComputeSubmergedArea = function (normal, offset, xf, c) {
	  c.SetZero();
	  return 0;
	};

	/**
	 * Dump this shape to the log file.
	 * @export
	 * @return {void}
	 */
	box2d.b2ChainShape.prototype.Dump = function () {
	  box2d.b2Log("    /*box2d.b2ChainShape*/ var shape = new box2d.b2ChainShape();\n");
	  box2d.b2Log("    /*box2d.b2Vec2[]*/ var vs = box2d.b2Vec2.MakeArray(%d);\n", box2d.b2_maxPolygonVertices);
	  for (var i = 0; i < this.m_count; ++i) {
	    box2d.b2Log("    vs[%d].Set(%.15f, %.15f);\n", i, this.m_vertices[i].x, this.m_vertices[i].y);
	  }
	  box2d.b2Log("    shape.CreateChain(vs, %d);\n", this.m_count);
	  box2d.b2Log("    shape.m_prevVertex.Set(%.15f, %.15f);\n", this.m_prevVertex.x, this.m_prevVertex.y);
	  box2d.b2Log("    shape.m_nextVertex.Set(%.15f, %.15f);\n", this.m_nextVertex.x, this.m_nextVertex.y);
	  box2d.b2Log("    shape.m_hasPrevVertex = %s;\n", this.m_hasPrevVertex ? 'true' : 'false');
	  box2d.b2Log("    shape.m_hasNextVertex = %s;\n", this.m_hasNextVertex ? 'true' : 'false');
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(5);

	/**
	 * A convex polygon. It is assumed that the interior of the
	 * polygon is to the left of each edge.
	 * Polygons have a maximum number of vertices equal to
	 * box2d.b2_maxPolygonVertices. In most cases you should not
	 * need many vertices for a convex polygon.
	 * @export
	 * @constructor
	 * @extends {box2d.b2Shape}
	 */
	box2d.b2PolygonShape = function () {
	  box2d.b2Shape.call(this, box2d.b2ShapeType.e_polygonShape, box2d.b2_polygonRadius); // base class constructor

	  this.m_centroid = new box2d.b2Vec2(0, 0);
	  this.m_vertices = box2d.b2Vec2.MakeArray(box2d.b2_maxPolygonVertices);
	  this.m_normals = box2d.b2Vec2.MakeArray(box2d.b2_maxPolygonVertices);
	}; /*
	    * Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
	    *
	    * This software is provided 'as-is', without any express or implied
	    * warranty.  In no event will the authors be held liable for any damages
	    * arising from the use of this software.
	    * Permission is granted to anyone to use this software for any purpose,
	    * including commercial applications, and to alter it and redistribute it
	    * freely, subject to the following restrictions:
	    * 1. The origin of this software must not be misrepresented; you must not
	    * claim that you wrote the original software. If you use this software
	    * in a product, an acknowledgment in the product documentation would be
	    * appreciated but is not required.
	    * 2. Altered source versions must be plainly marked as such, and must not be
	    * misrepresented as being the original software.
	    * 3. This notice may not be removed or altered from any source distribution.
	    */

	goog.inherits(box2d.b2PolygonShape, box2d.b2Shape);

	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2PolygonShape.prototype.m_centroid = null;
	/**
	 * @export
	 * @type {Array.<box2d.b2Vec2>}
	 */
	box2d.b2PolygonShape.prototype.m_vertices = null;
	/**
	 * @export
	 * @type {Array.<box2d.b2Vec2>}
	 */
	box2d.b2PolygonShape.prototype.m_normals = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2PolygonShape.prototype.m_count = 0;

	/**
	 * Implement box2d.b2Shape.
	 * @export
	 * @return {box2d.b2Shape}
	 */
	box2d.b2PolygonShape.prototype.Clone = function () {
	  return new box2d.b2PolygonShape().Copy(this);
	};

	/**
	 * @export
	 * @return {box2d.b2Shape}
	 * @param {box2d.b2Shape} other
	 */
	box2d.b2PolygonShape.prototype.Copy = function (other) {
	  box2d.b2Shape.prototype.Copy.call(this, other);

	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(other instanceof box2d.b2PolygonShape);
	  }

	  this.m_centroid.Copy(other.m_centroid);
	  this.m_count = other.m_count;
	  for (var i = 0, ict = this.m_count; i < ict; ++i) {
	    this.m_vertices[i].Copy(other.m_vertices[i]);
	    this.m_normals[i].Copy(other.m_normals[i]);
	  }
	  return this;
	};

	/**
	 * Build vertices to represent an axis-aligned box centered on
	 * the local origin.
	 * @export
	 * @return {box2d.b2PolygonShape}
	 * @param {number} hx the half-width.
	 * @param {number} hy the half-height.
	 * @param {box2d.b2Vec2=} center the center of the box in local coordinates.
	 * @param {number=} angle the rotation of the box in local coordinates.
	 */
	box2d.b2PolygonShape.prototype.SetAsBox = function (hx, hy, center, angle) {
	  this.m_count = 4;
	  this.m_vertices[0].Set(-hx, -hy);
	  this.m_vertices[1].Set(hx, -hy);
	  this.m_vertices[2].Set(hx, hy);
	  this.m_vertices[3].Set(-hx, hy);
	  this.m_normals[0].Set(0, -1);
	  this.m_normals[1].Set(1, 0);
	  this.m_normals[2].Set(0, 1);
	  this.m_normals[3].Set(-1, 0);
	  this.m_centroid.SetZero();

	  if (center instanceof box2d.b2Vec2) {
	    angle = typeof angle === 'number' ? angle : 0;

	    this.m_centroid.Copy(center);

	    var xf = new box2d.b2Transform();
	    xf.SetPosition(center);
	    xf.SetRotationAngle(angle);

	    // Transform vertices and normals.
	    for (var i = 0, ict = this.m_count; i < ict; ++i) {
	      box2d.b2Mul_X_V2(xf, this.m_vertices[i], this.m_vertices[i]);
	      box2d.b2Mul_R_V2(xf.q, this.m_normals[i], this.m_normals[i]);
	    }
	  }

	  return this;
	};

	/**
	 * Create a convex hull from the given array of local points.
	 * The count must be in the range [3, b2_maxPolygonVertices].
	 * warning the points may be re-ordered, even if they form a
	 * convex polygon
	 * warning collinear points are handled but not removed.
	 * Collinear points may lead to poor stacking behavior.
	 * @export
	 * @return {box2d.b2PolygonShape}
	 * @param {Array.<box2d.b2Vec2>} vertices
	 * @param {number=} count
	 * @param {number=} start
	 */
	box2d.b2PolygonShape.prototype.Set = function (vertices, count, start) {
	  count = typeof count === 'number' ? count : vertices.length;
	  start = typeof start === 'number' ? start : 0;

	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(3 <= count && count <= box2d.b2_maxPolygonVertices);
	  }
	  if (count < 3) {
	    return this.SetAsBox(1, 1);
	  }

	  var n = box2d.b2Min(count, box2d.b2_maxPolygonVertices);

	  // Perform welding and copy vertices into local buffer.
	  var ps = box2d.b2PolygonShape.prototype.Set.s_ps;
	  var tempCount = 0;
	  for (var i = 0; i < n; ++i) {
	    var /*b2Vec2*/v = vertices[start + i];

	    var /*bool*/unique = true;
	    for (var /*int32*/j = 0; j < tempCount; ++j) {
	      if (box2d.b2DistanceSquared(v, ps[j]) < 0.5 * box2d.b2_linearSlop * (0.5 * box2d.b2_linearSlop)) {
	        unique = false;
	        break;
	      }
	    }

	    if (unique) {
	      ps[tempCount++].Copy(v); // ps[tempCount++] = v;
	    }
	  }

	  n = tempCount;
	  if (n < 3) {
	    // Polygon is degenerate.
	    if (box2d.ENABLE_ASSERTS) {
	      box2d.b2Assert(false);
	    }
	    return this.SetAsBox(1.0, 1.0);
	  }

	  // Create the convex hull using the Gift wrapping algorithm
	  // http://en.wikipedia.org/wiki/Gift_wrapping_algorithm

	  // Find the right most point on the hull
	  var i0 = 0;
	  var x0 = ps[0].x;
	  for (var i = 1; i < n; ++i) {
	    var x = ps[i].x;
	    if (x > x0 || x === x0 && ps[i].y < ps[i0].y) {
	      i0 = i;
	      x0 = x;
	    }
	  }

	  var hull = box2d.b2PolygonShape.prototype.Set.s_hull;
	  var m = 0;
	  var ih = i0;

	  for (;;) {
	    hull[m] = ih;

	    var ie = 0;
	    for (var j = 1; j < n; ++j) {
	      if (ie === ih) {
	        ie = j;
	        continue;
	      }

	      var r = box2d.b2Sub_V2_V2(ps[ie], ps[hull[m]], box2d.b2PolygonShape.prototype.Set.s_r);
	      var v = box2d.b2Sub_V2_V2(ps[j], ps[hull[m]], box2d.b2PolygonShape.prototype.Set.s_v);
	      var c = box2d.b2Cross_V2_V2(r, v);
	      if (c < 0) {
	        ie = j;
	      }

	      // Collinearity check
	      if (c === 0 && v.LengthSquared() > r.LengthSquared()) {
	        ie = j;
	      }
	    }

	    ++m;
	    ih = ie;

	    if (ie === i0) {
	      break;
	    }
	  }

	  if (m < 3) {
	    // Polygon is degenerate
	    if (box2d.ENABLE_ASSERTS) {
	      box2d.b2Assert(false);
	    }
	    return this.SetAsBox(1.0, 1.0);
	  }

	  this.m_count = m;

	  // Copy vertices.
	  for (var i = 0; i < m; ++i) {
	    this.m_vertices[i].Copy(ps[hull[i]]);
	  }

	  // Compute normals. Ensure the edges have non-zero length.
	  for (var i = 0, ict = m; i < ict; ++i) {
	    var vertexi1 = this.m_vertices[i];
	    var vertexi2 = this.m_vertices[(i + 1) % ict];
	    var edge = box2d.b2Sub_V2_V2(vertexi2, vertexi1, box2d.b2Vec2.s_t0); // edge uses s_t0
	    if (box2d.ENABLE_ASSERTS) {
	      box2d.b2Assert(edge.LengthSquared() > box2d.b2_epsilon_sq);
	    }
	    box2d.b2Cross_V2_S(edge, 1.0, this.m_normals[i]).SelfNormalize();
	  }

	  // Compute the polygon centroid.
	  box2d.b2PolygonShape.ComputeCentroid(this.m_vertices, m, this.m_centroid);

	  return this;
	};
	box2d.b2PolygonShape.prototype.Set.s_ps = box2d.b2Vec2.MakeArray(box2d.b2_maxPolygonVertices);
	box2d.b2PolygonShape.prototype.Set.s_hull = box2d.b2MakeNumberArray(box2d.b2_maxPolygonVertices);
	box2d.b2PolygonShape.prototype.Set.s_r = new box2d.b2Vec2();
	box2d.b2PolygonShape.prototype.Set.s_v = new box2d.b2Vec2();

	/**
	 * Implement box2d.b2Shape.
	 * @export
	 * @return {number}
	 */
	box2d.b2PolygonShape.prototype.GetChildCount = function () {
	  return 1;
	};

	/**
	 * @see box2d.b2Shape::TestPoint
	 * @export
	 * @return {boolean}
	 * @param {box2d.b2Transform} xf
	 * @param {box2d.b2Vec2} p
	 */
	box2d.b2PolygonShape.prototype.TestPoint = function (xf, p) {
	  var pLocal = box2d.b2MulT_X_V2(xf, p, box2d.b2PolygonShape.prototype.TestPoint.s_pLocal);

	  for (var i = 0, ict = this.m_count; i < ict; ++i) {
	    var dot = box2d.b2Dot_V2_V2(this.m_normals[i], box2d.b2Sub_V2_V2(pLocal, this.m_vertices[i], box2d.b2Vec2.s_t0));
	    if (dot > 0) {
	      return false;
	    }
	  }

	  return true;
	};
	box2d.b2PolygonShape.prototype.TestPoint.s_pLocal = new box2d.b2Vec2();

	//#if B2_ENABLE_PARTICLE

	/**
	 * @see b2Shape::ComputeDistance
	 * @export
	 * @return {number}
	 * @param {box2d.b2Transform} xf
	 * @param {box2d.b2Vec2} p
	 * @param {box2d.b2Vec2} normal
	 * @param {number} childIndex
	 */
	box2d.b2PolygonShape.prototype.ComputeDistance = function (xf, p, normal, childIndex) {
	  var pLocal = box2d.b2MulT_X_V2(xf, p, box2d.b2PolygonShape.prototype.ComputeDistance.s_pLocal);
	  var maxDistance = -box2d.b2_maxFloat;
	  var normalForMaxDistance = box2d.b2PolygonShape.prototype.ComputeDistance.s_normalForMaxDistance.Copy(pLocal);

	  for (var i = 0; i < this.m_count; ++i) {
	    var dot = box2d.b2Dot_V2_V2(this.m_normals[i], box2d.b2Sub_V2_V2(pLocal, this.m_vertices[i], box2d.b2Vec2.s_t0));
	    if (dot > maxDistance) {
	      maxDistance = dot;
	      normalForMaxDistance.Copy(this.m_normals[i]);
	    }
	  }

	  if (maxDistance > 0) {
	    var minDistance = box2d.b2PolygonShape.prototype.ComputeDistance.s_minDistance.Copy(normalForMaxDistance);
	    var minDistance2 = maxDistance * maxDistance;
	    for (var i = 0; i < this.m_count; ++i) {
	      var distance = box2d.b2Sub_V2_V2(pLocal, this.m_vertices[i], box2d.b2PolygonShape.prototype.ComputeDistance.s_distance);
	      var distance2 = distance.LengthSquared();
	      if (minDistance2 > distance2) {
	        minDistance.Copy(distance);
	        minDistance2 = distance2;
	      }
	    }

	    box2d.b2Mul_R_V2(xf.q, minDistance, normal);
	    normal.Normalize();
	    return Math.sqrt(minDistance2);
	  } else {
	    box2d.b2Mul_R_V2(xf.q, normalForMaxDistance, normal);
	    return maxDistance;
	  }
	};
	box2d.b2PolygonShape.prototype.ComputeDistance.s_pLocal = new box2d.b2Vec2();
	box2d.b2PolygonShape.prototype.ComputeDistance.s_normalForMaxDistance = new box2d.b2Vec2();
	box2d.b2PolygonShape.prototype.ComputeDistance.s_minDistance = new box2d.b2Vec2();
	box2d.b2PolygonShape.prototype.ComputeDistance.s_distance = new box2d.b2Vec2();

	//#endif

	/**
	 * Implement box2d.b2Shape.
	 * @export
	 * @return {boolean}
	 * @param {box2d.b2RayCastOutput} output
	 * @param {box2d.b2RayCastInput} input
	 * @param {box2d.b2Transform} xf
	 * @param {number} childIndex
	 */
	box2d.b2PolygonShape.prototype.RayCast = function (output, input, xf, childIndex) {
	  // Put the ray into the polygon's frame of reference.
	  var p1 = box2d.b2MulT_X_V2(xf, input.p1, box2d.b2PolygonShape.prototype.RayCast.s_p1);
	  var p2 = box2d.b2MulT_X_V2(xf, input.p2, box2d.b2PolygonShape.prototype.RayCast.s_p2);
	  var d = box2d.b2Sub_V2_V2(p2, p1, box2d.b2PolygonShape.prototype.RayCast.s_d);

	  var lower = 0,
	      upper = input.maxFraction;

	  var index = -1;

	  for (var i = 0, ict = this.m_count; i < ict; ++i) {
	    // p = p1 + a * d
	    // dot(normal, p - v) = 0
	    // dot(normal, p1 - v) + a * dot(normal, d) = 0
	    var numerator = box2d.b2Dot_V2_V2(this.m_normals[i], box2d.b2Sub_V2_V2(this.m_vertices[i], p1, box2d.b2Vec2.s_t0));
	    var denominator = box2d.b2Dot_V2_V2(this.m_normals[i], d);

	    if (denominator === 0) {
	      if (numerator < 0) {
	        return false;
	      }
	    } else {
	      // Note: we want this predicate without division:
	      // lower < numerator / denominator, where denominator < 0
	      // Since denominator < 0, we have to flip the inequality:
	      // lower < numerator / denominator <==> denominator * lower > numerator.
	      if (denominator < 0 && numerator < lower * denominator) {
	        // Increase lower.
	        // The segment enters this half-space.
	        lower = numerator / denominator;
	        index = i;
	      } else if (denominator > 0 && numerator < upper * denominator) {
	        // Decrease upper.
	        // The segment exits this half-space.
	        upper = numerator / denominator;
	      }
	    }

	    // The use of epsilon here causes the assert on lower to trip
	    // in some cases. Apparently the use of epsilon was to make edge
	    // shapes work, but now those are handled separately.
	    //if (upper < lower - box2d.b2_epsilon)
	    if (upper < lower) {
	      return false;
	    }
	  }

	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(0 <= lower && lower <= input.maxFraction);
	  }

	  if (index >= 0) {
	    output.fraction = lower;
	    box2d.b2Mul_R_V2(xf.q, this.m_normals[index], output.normal);
	    return true;
	  }

	  return false;
	};
	box2d.b2PolygonShape.prototype.RayCast.s_p1 = new box2d.b2Vec2();
	box2d.b2PolygonShape.prototype.RayCast.s_p2 = new box2d.b2Vec2();
	box2d.b2PolygonShape.prototype.RayCast.s_d = new box2d.b2Vec2();

	/**
	 * @see box2d.b2Shape::ComputeAABB
	 * @export
	 * @return {void}
	 * @param {box2d.b2AABB} aabb
	 * @param {box2d.b2Transform} xf
	 * @param {number} childIndex
	 */
	box2d.b2PolygonShape.prototype.ComputeAABB = function (aabb, xf, childIndex) {
	  var lower = box2d.b2Mul_X_V2(xf, this.m_vertices[0], aabb.lowerBound);
	  var upper = aabb.upperBound.Copy(lower);

	  for (var i = 0, ict = this.m_count; i < ict; ++i) {
	    var v = box2d.b2Mul_X_V2(xf, this.m_vertices[i], box2d.b2PolygonShape.prototype.ComputeAABB.s_v);
	    box2d.b2Min_V2_V2(v, lower, lower);
	    box2d.b2Max_V2_V2(v, upper, upper);
	  }

	  var r = this.m_radius;
	  lower.SelfSubXY(r, r);
	  upper.SelfAddXY(r, r);
	};
	box2d.b2PolygonShape.prototype.ComputeAABB.s_v = new box2d.b2Vec2();

	/**
	 * @see box2d.b2Shape::ComputeMass
	 * @export
	 * @return {void}
	 * @param {box2d.b2MassData} massData
	 * @param {number} density
	 */
	box2d.b2PolygonShape.prototype.ComputeMass = function (massData, density) {
	  // Polygon mass, centroid, and inertia.
	  // Let rho be the polygon density in mass per unit area.
	  // Then:
	  // mass = rho * int(dA)
	  // centroid.x = (1/mass) * rho * int(x * dA)
	  // centroid.y = (1/mass) * rho * int(y * dA)
	  // I = rho * int((x*x + y*y) * dA)
	  //
	  // We can compute these integrals by summing all the integrals
	  // for each triangle of the polygon. To evaluate the integral
	  // for a single triangle, we make a change of variables to
	  // the (u,v) coordinates of the triangle:
	  // x = x0 + e1x * u + e2x * v
	  // y = y0 + e1y * u + e2y * v
	  // where 0 <= u && 0 <= v && u + v <= 1.
	  //
	  // We integrate u from [0,1-v] and then v from [0,1].
	  // We also need to use the Jacobian of the transformation:
	  // D = cross(e1, e2)
	  //
	  // Simplification: triangle centroid = (1/3) * (p1 + p2 + p3)
	  //
	  // The rest of the derivation is handled by computer algebra.

	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(this.m_count >= 3);
	  }

	  var center = box2d.b2PolygonShape.prototype.ComputeMass.s_center.SetZero();
	  var area = 0;
	  var I = 0;

	  // s is the reference point for forming triangles.
	  // It's location doesn't change the result (except for rounding error).
	  var s = box2d.b2PolygonShape.prototype.ComputeMass.s_s.SetZero();

	  // This code would put the reference point inside the polygon.
	  for (var i = 0, ict = this.m_count; i < ict; ++i) {
	    s.SelfAdd(this.m_vertices[i]);
	  }
	  s.SelfMul(1 / this.m_count);

	  var k_inv3 = 1 / 3;

	  for (var i = 0, ict = this.m_count; i < ict; ++i) {
	    // Triangle vertices.
	    var e1 = box2d.b2Sub_V2_V2(this.m_vertices[i], s, box2d.b2PolygonShape.prototype.ComputeMass.s_e1);
	    var e2 = box2d.b2Sub_V2_V2(this.m_vertices[(i + 1) % ict], s, box2d.b2PolygonShape.prototype.ComputeMass.s_e2);

	    var D = box2d.b2Cross_V2_V2(e1, e2);

	    var triangleArea = 0.5 * D;
	    area += triangleArea;

	    // Area weighted centroid
	    center.SelfAdd(box2d.b2Mul_S_V2(triangleArea * k_inv3, box2d.b2Add_V2_V2(e1, e2, box2d.b2Vec2.s_t0), box2d.b2Vec2.s_t1));

	    var ex1 = e1.x;
	    var ey1 = e1.y;
	    var ex2 = e2.x;
	    var ey2 = e2.y;

	    var intx2 = ex1 * ex1 + ex2 * ex1 + ex2 * ex2;
	    var inty2 = ey1 * ey1 + ey2 * ey1 + ey2 * ey2;

	    I += 0.25 * k_inv3 * D * (intx2 + inty2);
	  }

	  // Total mass
	  massData.mass = density * area;

	  // Center of mass
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(area > box2d.b2_epsilon);
	  }
	  center.SelfMul(1 / area);
	  box2d.b2Add_V2_V2(center, s, massData.center);

	  // Inertia tensor relative to the local origin (point s).
	  massData.I = density * I;

	  // Shift to center of mass then to original body origin.
	  massData.I += massData.mass * (box2d.b2Dot_V2_V2(massData.center, massData.center) - box2d.b2Dot_V2_V2(center, center));
	};
	box2d.b2PolygonShape.prototype.ComputeMass.s_center = new box2d.b2Vec2();
	box2d.b2PolygonShape.prototype.ComputeMass.s_s = new box2d.b2Vec2();
	box2d.b2PolygonShape.prototype.ComputeMass.s_e1 = new box2d.b2Vec2();
	box2d.b2PolygonShape.prototype.ComputeMass.s_e2 = new box2d.b2Vec2();

	/**
	 * Validate convexity. This is a very time consuming operation.
	 * @export
	 * @return {boolean} true if valid
	 */
	box2d.b2PolygonShape.prototype.Validate = function () {
	  for (var i = 0; i < this.m_count; ++i) {
	    var i1 = i;
	    var i2 = (i + 1) % this.m_count;
	    var p = this.m_vertices[i1];
	    var e = box2d.b2Sub_V2_V2(this.m_vertices[i2], p, box2d.b2PolygonShape.prototype.Validate.s_e);

	    for (var j = 0; j < this.m_count; ++j) {
	      if (j === i1 || j === i2) {
	        continue;
	      }

	      var v = box2d.b2Sub_V2_V2(this.m_vertices[j], p, box2d.b2PolygonShape.prototype.Validate.s_v);
	      var c = box2d.b2Cross_V2_V2(e, v);
	      if (c < 0) {
	        return false;
	      }
	    }
	  }

	  return true;
	};
	box2d.b2PolygonShape.prototype.Validate.s_e = new box2d.b2Vec2();
	box2d.b2PolygonShape.prototype.Validate.s_v = new box2d.b2Vec2();

	/**
	 * @return {void}
	 * @param {box2d.b2DistanceProxy} proxy
	 * @param {number} index
	 */
	box2d.b2PolygonShape.prototype.SetupDistanceProxy = function (proxy, index) {
	  proxy.m_vertices = this.m_vertices;
	  proxy.m_count = this.m_count;
	  proxy.m_radius = this.m_radius;
	};

	/**
	 * @export
	 * @return {number}
	 * @param {box2d.b2Vec2} normal
	 * @param {number} offset
	 * @param {box2d.b2Transform} xf
	 * @param {box2d.b2Vec2} c
	 */
	box2d.b2PolygonShape.prototype.ComputeSubmergedArea = function (normal, offset, xf, c) {
	  // Transform plane into shape co-ordinates
	  var normalL = box2d.b2MulT_R_V2(xf.q, normal, box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_normalL);
	  var offsetL = offset - box2d.b2Dot_V2_V2(normal, xf.p);

	  var depths = box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_depths;
	  var diveCount = 0;
	  var intoIndex = -1;
	  var outoIndex = -1;

	  var lastSubmerged = false;
	  for (var i = 0, ict = this.m_count; i < ict; ++i) {
	    depths[i] = box2d.b2Dot_V2_V2(normalL, this.m_vertices[i]) - offsetL;
	    var isSubmerged = depths[i] < -box2d.b2_epsilon;
	    if (i > 0) {
	      if (isSubmerged) {
	        if (!lastSubmerged) {
	          intoIndex = i - 1;
	          diveCount++;
	        }
	      } else {
	        if (lastSubmerged) {
	          outoIndex = i - 1;
	          diveCount++;
	        }
	      }
	    }
	    lastSubmerged = isSubmerged;
	  }
	  switch (diveCount) {
	    case 0:
	      if (lastSubmerged) {
	        // Completely submerged
	        var md = box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_md;
	        this.ComputeMass(md, 1);
	        box2d.b2Mul_X_V2(xf, md.center, c);
	        return md.mass;
	      } else {
	        //Completely dry
	        return 0;
	      }
	      break;
	    case 1:
	      if (intoIndex === -1) {
	        intoIndex = this.m_count - 1;
	      } else {
	        outoIndex = this.m_count - 1;
	      }
	      break;
	  }
	  var intoIndex2 = (intoIndex + 1) % this.m_count;
	  var outoIndex2 = (outoIndex + 1) % this.m_count;
	  var intoLamdda = (0 - depths[intoIndex]) / (depths[intoIndex2] - depths[intoIndex]);
	  var outoLamdda = (0 - depths[outoIndex]) / (depths[outoIndex2] - depths[outoIndex]);

	  var intoVec = box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_intoVec.Set(this.m_vertices[intoIndex].x * (1 - intoLamdda) + this.m_vertices[intoIndex2].x * intoLamdda, this.m_vertices[intoIndex].y * (1 - intoLamdda) + this.m_vertices[intoIndex2].y * intoLamdda);
	  var outoVec = box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_outoVec.Set(this.m_vertices[outoIndex].x * (1 - outoLamdda) + this.m_vertices[outoIndex2].x * outoLamdda, this.m_vertices[outoIndex].y * (1 - outoLamdda) + this.m_vertices[outoIndex2].y * outoLamdda);

	  // Initialize accumulator
	  var area = 0;
	  var center = box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_center.SetZero();
	  var p2 = this.m_vertices[intoIndex2];
	  var p3 = null;

	  // An awkward loop from intoIndex2+1 to outIndex2
	  var i = intoIndex2;
	  while (i !== outoIndex2) {
	    i = (i + 1) % this.m_count;
	    if (i === outoIndex2) p3 = outoVec;else p3 = this.m_vertices[i];

	    var triangleArea = 0.5 * ((p2.x - intoVec.x) * (p3.y - intoVec.y) - (p2.y - intoVec.y) * (p3.x - intoVec.x));
	    area += triangleArea;
	    // Area weighted centroid
	    center.x += triangleArea * (intoVec.x + p2.x + p3.x) / 3;
	    center.y += triangleArea * (intoVec.y + p2.y + p3.y) / 3;

	    p2 = p3;
	  }

	  //Normalize and transform centroid
	  center.SelfMul(1 / area);
	  box2d.b2Mul_X_V2(xf, center, c);

	  return area;
	};
	box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_normalL = new box2d.b2Vec2();
	box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_depths = box2d.b2MakeNumberArray(box2d.b2_maxPolygonVertices);
	box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_md = new box2d.b2MassData();
	box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_intoVec = new box2d.b2Vec2();
	box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_outoVec = new box2d.b2Vec2();
	box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_center = new box2d.b2Vec2();

	/**
	 * Dump this shape to the log file.
	 * @export
	 * @return {void}
	 */
	box2d.b2PolygonShape.prototype.Dump = function () {
	  box2d.b2Log("    /*box2d.b2PolygonShape*/ var shape = new box2d.b2PolygonShape();\n");
	  box2d.b2Log("    /*box2d.b2Vec2[]*/ var vs = box2d.b2Vec2.MakeArray(%d);\n", box2d.b2_maxPolygonVertices);
	  for (var i = 0; i < this.m_count; ++i) {
	    box2d.b2Log("    vs[%d].Set(%.15f, %.15f);\n", i, this.m_vertices[i].x, this.m_vertices[i].y);
	  }
	  box2d.b2Log("    shape.Set(vs, %d);\n", this.m_count);
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {Array.<box2d.b2Vec2>} vs
	 * @param {number} count
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2PolygonShape.ComputeCentroid = function (vs, count, out) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(count >= 3);
	  }

	  var c = out;
	  c.SetZero();
	  var area = 0;

	  // s is the reference point for forming triangles.
	  // It's location doesn't change the result (except for rounding error).
	  var pRef = box2d.b2PolygonShape.ComputeCentroid.s_pRef.SetZero();
	  /*
	  #if 0
	    // This code would put the reference point inside the polygon.
	    for (var i = 0; i < count; ++i)
	    {
	        pRef.SelfAdd(vs[i]);
	    }
	    pRef.SelfMul(1 / count);
	  #endif
	  */

	  var inv3 = 1 / 3;

	  for (var i = 0; i < count; ++i) {
	    // Triangle vertices.
	    var p1 = pRef;
	    var p2 = vs[i];
	    var p3 = vs[(i + 1) % count];

	    var e1 = box2d.b2Sub_V2_V2(p2, p1, box2d.b2PolygonShape.ComputeCentroid.s_e1);
	    var e2 = box2d.b2Sub_V2_V2(p3, p1, box2d.b2PolygonShape.ComputeCentroid.s_e2);

	    var D = box2d.b2Cross_V2_V2(e1, e2);

	    var triangleArea = 0.5 * D;
	    area += triangleArea;

	    // Area weighted centroid
	    c.x += triangleArea * inv3 * (p1.x + p2.x + p3.x);
	    c.y += triangleArea * inv3 * (p1.y + p2.y + p3.y);
	  }

	  // Centroid
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(area > box2d.b2_epsilon);
	  }
	  c.SelfMul(1 / area);
	  return c;
	};
	box2d.b2PolygonShape.ComputeCentroid.s_pRef = new box2d.b2Vec2();
	box2d.b2PolygonShape.ComputeCentroid.s_e1 = new box2d.b2Vec2();
	box2d.b2PolygonShape.ComputeCentroid.s_e2 = new box2d.b2Vec2();

	/*
	box2d.b2PolygonShape.ComputeOBB = function (obb, vs, count)
	{
	  var i = 0;
	  var p = new Array(count + 1);
	  for (i = 0; i < count; ++i)
	  {
	    p[i] = vs[i];
	  }
	  p[count] = p[0];
	  var minArea = box2d.b2_maxFloat;
	  for (i = 1; i <= count; ++i)
	  {
	    var root = p[i - 1];
	    var uxX = p[i].x - root.x;
	    var uxY = p[i].y - root.y;
	    var length = box2d.b2Sqrt(uxX * uxX + uxY * uxY);
	    uxX /= length;
	    uxY /= length;
	    var uyX = (-uxY);
	    var uyY = uxX;
	    var lowerX = box2d.b2_maxFloat;
	    var lowerY = box2d.b2_maxFloat;
	    var upperX = (-box2d.b2_maxFloat);
	    var upperY = (-box2d.b2_maxFloat);
	    for (var j = 0; j < count; ++j)
	    {
	      var dX = p[j].x - root.x;
	      var dY = p[j].y - root.y;
	      var rX = (uxX * dX + uxY * dY);
	      var rY = (uyX * dX + uyY * dY);
	      if (rX < lowerX) lowerX = rX;
	      if (rY < lowerY) lowerY = rY;
	      if (rX > upperX) upperX = rX;
	      if (rY > upperY) upperY = rY;
	    }
	    var area = (upperX - lowerX) * (upperY - lowerY);
	    if (area < 0.95 * minArea)
	    {
	      minArea = area;
	      obb.R.ex.x = uxX;
	      obb.R.ex.y = uxY;
	      obb.R.ey.x = uyX;
	      obb.R.ey.y = uyY;
	      var center_x = 0.5 * (lowerX + upperX);
	      var center_y = 0.5 * (lowerY + upperY);
	      var tMat = obb.R;
	      obb.center.x = root.x + (tMat.ex.x * center_x + tMat.ey.x * center_y);
	      obb.center.y = root.y + (tMat.ex.y * center_x + tMat.ey.y * center_y);
	      obb.extents.x = 0.5 * (upperX - lowerX);
	      obb.extents.y = 0.5 * (upperY - lowerY);
	    }
	  }
	}
	*/

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(12);

	/**
	 * @export
	 * @constructor
	 */
	/*
	 * Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
	 *
	 * This software is provided 'as-is', without any express or implied
	 * warranty.  In no event will the authors be held liable for any damages
	 * arising from the use of this software.
	 * Permission is granted to anyone to use this software for any purpose,
	 * including commercial applications, and to alter it and redistribute it
	 * freely, subject to the following restrictions:
	 * 1. The origin of this software must not be misrepresented; you must not
	 * claim that you wrote the original software. If you use this software
	 * in a product, an acknowledgment in the product documentation would be
	 * appreciated but is not required.
	 * 2. Altered source versions must be plainly marked as such, and must not be
	 * misrepresented as being the original software.
	 * 3. This notice may not be removed or altered from any source distribution.
	 */

	box2d.b2Pair = function () {};

	/**
	 * @export
	 * @type {box2d.b2TreeNode}
	 */
	box2d.b2Pair.prototype.proxyA = null;
	/**
	 * @export
	 * @type {box2d.b2TreeNode}
	 */
	box2d.b2Pair.prototype.proxyB = null;

	/**
	 * The broad-phase is used for computing pairs and performing
	 * volume queries and ray casts. This broad-phase does not
	 * persist pairs. Instead, this reports potentially new pairs.
	 * It is up to the client to consume the new pairs and to track
	 * subsequent overlap.
	 * @export
	 * @constructor
	 */
	box2d.b2BroadPhase = function () {
	  this.m_tree = new box2d.b2DynamicTree();
	  this.m_moveBuffer = new Array();
	  this.m_pairBuffer = new Array();
	};

	/**
	 * @export
	 * @type {box2d.b2DynamicTree}
	 */
	box2d.b2BroadPhase.prototype.m_tree = null;

	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2BroadPhase.prototype.m_proxyCount = 0;

	//box2d.b2BroadPhase.prototype.m_moveCapacity = 16;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2BroadPhase.prototype.m_moveCount = 0;
	/**
	 * @export
	 * @type {Array.<box2d.b2TreeNode>}
	 */
	box2d.b2BroadPhase.prototype.m_moveBuffer = null;

	//box2d.b2BroadPhase.prototype.m_pairCapacity = 16;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2BroadPhase.prototype.m_pairCount = 0;
	/**
	 * @export
	 * @type {Array.<box2d.b2Pair>}
	 */
	box2d.b2BroadPhase.prototype.m_pairBuffer = null;

	//box2d.b2BroadPhase.prototype.m_queryProxyId = 0;

	/**
	 * Create a proxy with an initial AABB. Pairs are not reported
	 * until UpdatePairs is called.
	 * @export
	 * @return {box2d.b2TreeNode}
	 * @param {box2d.b2AABB} aabb
	 * @param {*} userData
	 */
	box2d.b2BroadPhase.prototype.CreateProxy = function (aabb, userData) {
	  var proxy = this.m_tree.CreateProxy(aabb, userData);
	  ++this.m_proxyCount;
	  this.BufferMove(proxy);
	  return proxy;
	};

	/**
	 * Destroy a proxy. It is up to the client to remove any pairs.
	 * @export
	 * @return {void}
	 * @param {box2d.b2TreeNode} proxy
	 */
	box2d.b2BroadPhase.prototype.DestroyProxy = function (proxy) {
	  this.UnBufferMove(proxy);
	  --this.m_proxyCount;
	  this.m_tree.DestroyProxy(proxy);
	};

	/**
	 * Call MoveProxy as many times as you like, then when you are
	 * done call UpdatePairs to finalized the proxy pairs (for your
	 * time step).
	 * @export
	 * @return {void}
	 * @param {box2d.b2TreeNode} proxy
	 * @param {box2d.b2AABB} aabb
	 * @param {box2d.b2Vec2} displacement
	 */
	box2d.b2BroadPhase.prototype.MoveProxy = function (proxy, aabb, displacement) {
	  var buffer = this.m_tree.MoveProxy(proxy, aabb, displacement);
	  if (buffer) {
	    this.BufferMove(proxy);
	  }
	};

	/**
	 * Call to trigger a re-processing of it's pairs on the next
	 * call to UpdatePairs.
	 * @export
	 * @return {void}
	 * @param {box2d.b2TreeNode} proxy
	 */
	box2d.b2BroadPhase.prototype.TouchProxy = function (proxy) {
	  this.BufferMove(proxy);
	};

	/**
	 * Get the fat AABB for a proxy.
	 * @export
	 * @return {box2d.b2AABB}
	 * @param {box2d.b2TreeNode} proxy
	 */
	box2d.b2BroadPhase.prototype.GetFatAABB = function (proxy) {
	  return this.m_tree.GetFatAABB(proxy);
	};

	/**
	 * Get user data from a proxy. Returns NULL if the id is
	 * invalid.
	 * @export
	 * @return {*}
	 * @param {box2d.b2TreeNode} proxy
	 */
	box2d.b2BroadPhase.prototype.GetUserData = function (proxy) {
	  return this.m_tree.GetUserData(proxy);
	};

	/**
	 * Test overlap of fat AABBs.
	 * @export
	 * @return {boolean}
	 * @param {box2d.b2TreeNode} proxyA
	 * @param {box2d.b2TreeNode} proxyB
	 */
	box2d.b2BroadPhase.prototype.TestOverlap = function (proxyA, proxyB) {
	  var aabbA = this.m_tree.GetFatAABB(proxyA);
	  var aabbB = this.m_tree.GetFatAABB(proxyB);
	  return box2d.b2TestOverlap_AABB(aabbA, aabbB);
	};

	/**
	 * Get the number of proxies.
	 * @export
	 * @return {number}
	 */
	box2d.b2BroadPhase.prototype.GetProxyCount = function () {
	  return this.m_proxyCount;
	};

	/**
	 * Get the height of the embedded tree.
	 * @export
	 * @return {number}
	 */
	box2d.b2BroadPhase.prototype.GetTreeHeight = function () {
	  return this.m_tree.GetHeight();
	};

	/**
	 * Get the balance of the embedded tree.
	 * @export
	 * @return {number}
	 */
	box2d.b2BroadPhase.prototype.GetTreeBalance = function () {
	  return this.m_tree.GetMaxBalance();
	};

	/**
	 * Get the quality metric of the embedded tree.
	 * @export
	 * @return {number}
	 */
	box2d.b2BroadPhase.prototype.GetTreeQuality = function () {
	  return this.m_tree.GetAreaRatio();
	};

	/**
	 * Shift the world origin. Useful for large worlds. The shift
	 * formula is: position -= newOrigin
	 * @export
	 * @return {void}
	 * @param {box2d.b2Vec2} newOrigin the new origin with respect to the old origin
	 */
	box2d.b2BroadPhase.prototype.ShiftOrigin = function (newOrigin) {
	  this.m_tree.ShiftOrigin(newOrigin);
	};

	/**
	 * Update the pairs. This results in pair callbacks. This can
	 * only add pairs.
	 * @export
	 * @return {void}
	 * @param contactManager
	 */
	box2d.b2BroadPhase.prototype.UpdatePairs = function (contactManager) {
	  // Reset pair buffer
	  this.m_pairCount = 0;

	  // Perform tree queries for all moving proxies.
	  for (var i = 0; i < this.m_moveCount; ++i) {
	    var queryProxy = this.m_moveBuffer[i];
	    if (queryProxy === null) {
	      continue;
	    }

	    var that = this;

	    // This is called from box2d.b2DynamicTree::Query when we are gathering pairs.
	    // bool b2BroadPhase::QueryCallback(int32 proxyId);
	    var QueryCallback = function QueryCallback(proxy) {
	      // A proxy cannot form a pair with itself.
	      if (proxy.m_id === queryProxy.m_id) {
	        return true;
	      }

	      // Grow the pair buffer as needed.
	      if (that.m_pairCount === that.m_pairBuffer.length) {
	        that.m_pairBuffer[that.m_pairCount] = new box2d.b2Pair();
	      }

	      var pair = that.m_pairBuffer[that.m_pairCount];
	      //pair.proxyA = proxy < queryProxy ? proxy : queryProxy;
	      //pair.proxyB = proxy >= queryProxy ? proxy : queryProxy;
	      if (proxy.m_id < queryProxy.m_id) {
	        pair.proxyA = proxy;
	        pair.proxyB = queryProxy;
	      } else {
	        pair.proxyA = queryProxy;
	        pair.proxyB = proxy;
	      }
	      ++that.m_pairCount;

	      return true;
	    };

	    // We have to query the tree with the fat AABB so that
	    // we don't fail to create a pair that may touch later.
	    var fatAABB = this.m_tree.GetFatAABB(queryProxy);

	    // Query tree, create pairs and add them pair buffer.
	    this.m_tree.Query(QueryCallback, fatAABB);
	  }

	  // Reset move buffer
	  this.m_moveCount = 0;

	  // Sort the pair buffer to expose duplicates.
	  this.m_pairBuffer.length = this.m_pairCount;
	  this.m_pairBuffer.sort(box2d.b2PairLessThan);

	  // Send the pairs back to the client.
	  var i = 0;
	  while (i < this.m_pairCount) {
	    var primaryPair = this.m_pairBuffer[i];
	    var userDataA = this.m_tree.GetUserData(primaryPair.proxyA);
	    var userDataB = this.m_tree.GetUserData(primaryPair.proxyB);

	    contactManager.AddPair(userDataA, userDataB);
	    ++i;

	    // Skip any duplicate pairs.
	    while (i < this.m_pairCount) {
	      var pair = this.m_pairBuffer[i];
	      if (pair.proxyA.m_id !== primaryPair.proxyA.m_id || pair.proxyB.m_id !== primaryPair.proxyB.m_id) {
	        break;
	      }
	      ++i;
	    }
	  }

	  // Try to keep the tree balanced.
	  //this.m_tree.Rebalance(4);
	};

	/**
	 * Query an AABB for overlapping proxies. The callback class is
	 * called for each proxy that overlaps the supplied AABB.
	 * @export
	 * @return {void}
	 * @param {function(box2d.b2TreeNode):boolean} callback
	 * @param {box2d.b2AABB} aabb
	 */
	box2d.b2BroadPhase.prototype.Query = function (callback, aabb) {
	  this.m_tree.Query(callback, aabb);
	};

	/**
	 * Ray-cast against the proxies in the tree. This relies on the
	 * callback to perform a exact ray-cast in the case were the
	 * proxy contains a shape. The callback also performs the any
	 * collision filtering. This has performance roughly equal to k
	 * * log(n), where k is the number of collisions and n is the
	 * number of proxies in the tree.
	 * @export
	 * @return {void}
	 * @param
	 *      {function(box2d.b2RayCastInput,box2d.b2TreeNode):number}
	 *      callback a callback class that is called for each
	 *      proxy that is hit by the ray.
	 * @param {box2d.b2RayCastInput} input the ray-cast input data.
	 *      The ray extends from p1 to p1 + maxFraction * (p2 -
	 *      p1).
	 */
	box2d.b2BroadPhase.prototype.RayCast = function (callback, input) {
	  this.m_tree.RayCast(callback, input);
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2TreeNode} proxy
	 */
	box2d.b2BroadPhase.prototype.BufferMove = function (proxy) {
	  this.m_moveBuffer[this.m_moveCount] = proxy;
	  ++this.m_moveCount;
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2TreeNode} proxy
	 */
	box2d.b2BroadPhase.prototype.UnBufferMove = function (proxy) {
	  var i = this.m_moveBuffer.indexOf(proxy);
	  this.m_moveBuffer[i] = null;
	};

	/**
	 * This is used to sort pairs.
	 * @return {number}
	 * @param {box2d.b2Pair} pair1
	 * @param {box2d.b2Pair} pair2
	 */
	box2d.b2PairLessThan = function (pair1, pair2) {
	  if (pair1.proxyA.m_id === pair2.proxyA.m_id) {
	    return pair1.proxyB.m_id - pair2.proxyB.m_id;
	  }

	  return pair1.proxyA.m_id - pair2.proxyA.m_id;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(13);

	__webpack_require__(14);

	/**
	 * A node in the dynamic tree. The client does not interact with
	 * this directly.
	 * @export
	 * @constructor
	 * @param {number=} id
	 */
	box2d.b2TreeNode = function (id) {
	  this.m_id = id || 0;

	  this.aabb = new box2d.b2AABB();
	};

	/**
	 * @export
	 * @type {number}
	 */
	/*
	 * Copyright (c) 2009 Erin Catto http://www.box2d.org
	 *
	 * This software is provided 'as-is', without any express or implied
	 * warranty.  In no event will the authors be held liable for any damages
	 * arising from the use of this software.
	 * Permission is granted to anyone to use this software for any purpose,
	 * including commercial applications, and to alter it and redistribute it
	 * freely, subject to the following restrictions:
	 * 1. The origin of this software must not be misrepresented; you must not
	 * claim that you wrote the original software. If you use this software
	 * in a product, an acknowledgment in the product documentation would be
	 * appreciated but is not required.
	 * 2. Altered source versions must be plainly marked as such, and must not be
	 * misrepresented as being the original software.
	 * 3. This notice may not be removed or altered from any source distribution.
	 */

	box2d.b2TreeNode.prototype.m_id = 0;

	/**
	 * Enlarged AABB
	 * @export
	 * @type {box2d.b2AABB}
	 */
	box2d.b2TreeNode.prototype.aabb = null;

	/**
	 * @export
	 * @type {*}
	 */
	box2d.b2TreeNode.prototype.userData = null;

	/**
	 * @export
	 * @type {box2d.b2TreeNode}
	 */
	box2d.b2TreeNode.prototype.parent = null; // or box2d.b2TreeNode.prototype.next

	/**
	 * @export
	 * @type {box2d.b2TreeNode}
	 */
	box2d.b2TreeNode.prototype.child1 = null;
	/**
	 * @export
	 * @type {box2d.b2TreeNode}
	 */
	box2d.b2TreeNode.prototype.child2 = null;

	/**
	 * leaf = 0, free node = -1
	 * @export
	 * @type {number}
	 */
	box2d.b2TreeNode.prototype.height = 0;

	/**
	 * @export
	 * @return {boolean}
	 */
	box2d.b2TreeNode.prototype.IsLeaf = function () {
	  return this.child1 === null;
	};

	/**
	 * A dynamic tree arranges data in a binary tree to accelerate
	 * queries such as volume queries and ray casts. Leafs are proxies
	 * with an AABB. In the tree we expand the proxy AABB by b2_fatAABBFactor
	 * so that the proxy AABB is bigger than the client object. This allows the client
	 * object to move by small amounts without triggering a tree update.
	 *
	 * Nodes are pooled and relocatable, so we use node indices rather than pointers.
	 * @export
	 * @constructor
	 */
	box2d.b2DynamicTree = function () {};

	/**
	 * @export
	 * @type {box2d.b2TreeNode}
	 */
	box2d.b2DynamicTree.prototype.m_root = null;

	//b2TreeNode* box2d.b2DynamicTree.prototype.m_nodes;
	//int32 box2d.b2DynamicTree.prototype.m_nodeCount;
	//int32 box2d.b2DynamicTree.prototype.m_nodeCapacity;

	/**
	 * @export
	 * @type {box2d.b2TreeNode}
	 */
	box2d.b2DynamicTree.prototype.m_freeList = null;

	/**
	 * This is used to incrementally traverse the tree for
	 * re-balancing.
	 * @export
	 * @type {number}
	 */
	box2d.b2DynamicTree.prototype.m_path = 0;

	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2DynamicTree.prototype.m_insertionCount = 0;

	box2d.b2DynamicTree.s_stack = new box2d.b2GrowableStack(256);
	box2d.b2DynamicTree.s_r = new box2d.b2Vec2();
	box2d.b2DynamicTree.s_v = new box2d.b2Vec2();
	box2d.b2DynamicTree.s_abs_v = new box2d.b2Vec2();
	box2d.b2DynamicTree.s_segmentAABB = new box2d.b2AABB();
	box2d.b2DynamicTree.s_subInput = new box2d.b2RayCastInput();
	box2d.b2DynamicTree.s_combinedAABB = new box2d.b2AABB();
	box2d.b2DynamicTree.s_aabb = new box2d.b2AABB();

	/**
	 * Get proxy user data.
	 * @export
	 * @return {*} the proxy user data or 0 if the id is invalid.
	 * @param {box2d.b2TreeNode} proxy
	 */
	box2d.b2DynamicTree.prototype.GetUserData = function (proxy) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(proxy !== null);
	  }
	  return proxy.userData;
	};

	/**
	 * Get the fat AABB for a proxy.
	 * @export
	 * @return {box2d.b2AABB}
	 * @param {box2d.b2TreeNode} proxy
	 */
	box2d.b2DynamicTree.prototype.GetFatAABB = function (proxy) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(proxy !== null);
	  }
	  return proxy.aabb;
	};

	/**
	 * Query an AABB for overlapping proxies. The callback class is
	 * called for each proxy that overlaps the supplied AABB.
	 * @export
	 * @return {void}
	 * @param {function(box2d.b2TreeNode):boolean} callback
	 * @param {box2d.b2AABB} aabb
	 */
	box2d.b2DynamicTree.prototype.Query = function (callback, aabb) {
	  if (this.m_root === null) return;

	  /** @type {box2d.b2GrowableStack} */
	  var stack = box2d.b2DynamicTree.s_stack.Reset();
	  stack.Push(this.m_root);

	  while (stack.GetCount() > 0) {
	    /** @type {box2d.b2TreeNode} */
	    var node = /** @type {box2d.b2TreeNode} */stack.Pop();
	    if (node === null) {
	      continue;
	    }

	    if (node.aabb.TestOverlap(aabb)) {
	      if (node.IsLeaf()) {
	        /** @type {boolean} */
	        var proceed = callback(node);
	        if (!proceed) {
	          return;
	        }
	      } else {
	        stack.Push(node.child1);
	        stack.Push(node.child2);
	      }
	    }
	  }
	};

	/**
	 * Ray-cast against the proxies in the tree. This relies on the callback
	 * to perform a exact ray-cast in the case were the proxy contains a shape.
	 * The callback also performs the any collision filtering. This has performance
	 * roughly equal to k * log(n), where k is the number of collisions and n is the
	 * number of proxies in the tree.
	 * @export
	 * @return {void}
	 * @param
	 *      {function(box2d.b2RayCastInput,box2d.b2TreeNode):number}
	 *      callback a callback class that is called for each
	 *      proxy that is hit by the ray.
	 * @param {box2d.b2RayCastInput} input the ray-cast input data.
	 *      The ray extends from p1 to p1 + maxFraction * (p2 -
	 *      p1).
	 */
	box2d.b2DynamicTree.prototype.RayCast = function (callback, input) {
	  if (this.m_root === null) return;

	  /** @type {box2d.b2Vec2} */
	  var p1 = input.p1;
	  /** @type {box2d.b2Vec2} */
	  var p2 = input.p2;
	  /** @type {box2d.b2Vec2} */
	  var r = box2d.b2Sub_V2_V2(p2, p1, box2d.b2DynamicTree.s_r);
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(r.LengthSquared() > 0);
	  }
	  r.Normalize();

	  // v is perpendicular to the segment.
	  /** @type {box2d.b2Vec2} */
	  var v = box2d.b2Cross_S_V2(1.0, r, box2d.b2DynamicTree.s_v);
	  /** @type {box2d.b2Vec2} */
	  var abs_v = box2d.b2Abs_V2(v, box2d.b2DynamicTree.s_abs_v);

	  // Separating axis for segment (Gino, p80).
	  // |dot(v, p1 - c)| > dot(|v|, h)

	  /** @type {number} */
	  var maxFraction = input.maxFraction;

	  // Build a bounding box for the segment.
	  /** @type {box2d.b2AABB} */
	  var segmentAABB = box2d.b2DynamicTree.s_segmentAABB;
	  /** @type {number} */
	  var t_x = p1.x + maxFraction * (p2.x - p1.x);
	  /** @type {number} */
	  var t_y = p1.y + maxFraction * (p2.y - p1.y);
	  segmentAABB.lowerBound.x = box2d.b2Min(p1.x, t_x);
	  segmentAABB.lowerBound.y = box2d.b2Min(p1.y, t_y);
	  segmentAABB.upperBound.x = box2d.b2Max(p1.x, t_x);
	  segmentAABB.upperBound.y = box2d.b2Max(p1.y, t_y);

	  /** @type {box2d.b2GrowableStack} */
	  var stack = box2d.b2DynamicTree.s_stack.Reset();
	  stack.Push(this.m_root);

	  while (stack.GetCount() > 0) {
	    /** @type {box2d.b2TreeNode} */
	    var node = /** @type {box2d.b2TreeNode} */stack.Pop();
	    if (node === null) {
	      continue;
	    }

	    if (!box2d.b2TestOverlap_AABB(node.aabb, segmentAABB)) {
	      continue;
	    }

	    // Separating axis for segment (Gino, p80).
	    // |dot(v, p1 - c)| > dot(|v|, h)
	    /** @type {box2d.b2Vec2} */
	    var c = node.aabb.GetCenter();
	    /** @type {box2d.b2Vec2} */
	    var h = node.aabb.GetExtents();
	    /** @type {number} */
	    var separation = box2d.b2Abs(box2d.b2Dot_V2_V2(v, box2d.b2Sub_V2_V2(p1, c, box2d.b2Vec2.s_t0))) - box2d.b2Dot_V2_V2(abs_v, h);
	    if (separation > 0) {
	      continue;
	    }

	    if (node.IsLeaf()) {
	      /** @type {box2d.b2RayCastInput} */
	      var subInput = box2d.b2DynamicTree.s_subInput;
	      subInput.p1.Copy(input.p1);
	      subInput.p2.Copy(input.p2);
	      subInput.maxFraction = maxFraction;

	      /** @type {number} */
	      var value = callback(subInput, node);

	      if (value === 0) {
	        // The client has terminated the ray cast.
	        return;
	      }

	      if (value > 0) {
	        // Update segment bounding box.
	        maxFraction = value;
	        t_x = p1.x + maxFraction * (p2.x - p1.x);
	        t_y = p1.y + maxFraction * (p2.y - p1.y);
	        segmentAABB.lowerBound.x = box2d.b2Min(p1.x, t_x);
	        segmentAABB.lowerBound.y = box2d.b2Min(p1.y, t_y);
	        segmentAABB.upperBound.x = box2d.b2Max(p1.x, t_x);
	        segmentAABB.upperBound.y = box2d.b2Max(p1.y, t_y);
	      }
	    } else {
	      stack.Push(node.child1);
	      stack.Push(node.child2);
	    }
	  }
	};

	/**
	 * @export
	 * @return {box2d.b2TreeNode}
	 */
	box2d.b2DynamicTree.prototype.AllocateNode = function () {
	  // Expand the node pool as needed.
	  if (this.m_freeList) {
	    /** @type {box2d.b2TreeNode} */
	    var node = this.m_freeList;
	    this.m_freeList = node.parent; // this.m_freeList = node.next;
	    node.parent = null;
	    node.child1 = null;
	    node.child2 = null;
	    node.height = 0;
	    node.userData = null;
	    return node;
	  }

	  return new box2d.b2TreeNode(box2d.b2DynamicTree.prototype.s_node_id++);
	};
	box2d.b2DynamicTree.prototype.s_node_id = 0;

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2TreeNode} node
	 */
	box2d.b2DynamicTree.prototype.FreeNode = function (node) {
	  node.parent = this.m_freeList; // node.next = this.m_freeList;
	  node.height = -1;
	  this.m_freeList = node;
	};

	/**
	 * Create a proxy. Provide a tight fitting AABB and a userData
	 * pointer.
	 * @export
	 * @return {box2d.b2TreeNode}
	 * @param {box2d.b2AABB} aabb
	 * @param {*} userData
	 */
	box2d.b2DynamicTree.prototype.CreateProxy = function (aabb, userData) {
	  /** @type {box2d.b2TreeNode} */
	  var node = this.AllocateNode();

	  // Fatten the aabb.
	  /** @type {number} */
	  var r_x = box2d.b2_aabbExtension;
	  /** @type {number} */
	  var r_y = box2d.b2_aabbExtension;
	  node.aabb.lowerBound.x = aabb.lowerBound.x - r_x;
	  node.aabb.lowerBound.y = aabb.lowerBound.y - r_y;
	  node.aabb.upperBound.x = aabb.upperBound.x + r_x;
	  node.aabb.upperBound.y = aabb.upperBound.y + r_y;
	  node.userData = userData;
	  node.height = 0;

	  this.InsertLeaf(node);

	  return node;
	};

	/**
	 * Destroy a proxy. This asserts if the id is invalid.
	 * @export
	 * @return {void}
	 * @param {box2d.b2TreeNode} proxy
	 */
	box2d.b2DynamicTree.prototype.DestroyProxy = function (proxy) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(proxy.IsLeaf());
	  }

	  this.RemoveLeaf(proxy);
	  this.FreeNode(proxy);
	};

	/**
	 * Move a proxy with a swepted AABB. If the proxy has moved
	 * outside of its fattened AABB, then the proxy is removed from
	 * the tree and re-inserted. Otherwise the function returns
	 * immediately.
	 * @export
	 * @return {boolean} true if the proxy was re-inserted.
	 * @param {box2d.b2TreeNode} proxy
	 * @param {box2d.b2AABB} aabb
	 * @param {box2d.b2Vec2} displacement
	 */
	box2d.b2DynamicTree.prototype.MoveProxy = function (proxy, aabb, displacement) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(proxy.IsLeaf());
	  }

	  if (proxy.aabb.Contains(aabb)) {
	    return false;
	  }

	  this.RemoveLeaf(proxy);

	  // Extend AABB.
	  // Predict AABB displacement.
	  /** @type {number} */
	  var r_x = box2d.b2_aabbExtension + box2d.b2_aabbMultiplier * (displacement.x > 0 ? displacement.x : -displacement.x);
	  /** @type {number} */
	  var r_y = box2d.b2_aabbExtension + box2d.b2_aabbMultiplier * (displacement.y > 0 ? displacement.y : -displacement.y);
	  proxy.aabb.lowerBound.x = aabb.lowerBound.x - r_x;
	  proxy.aabb.lowerBound.y = aabb.lowerBound.y - r_y;
	  proxy.aabb.upperBound.x = aabb.upperBound.x + r_x;
	  proxy.aabb.upperBound.y = aabb.upperBound.y + r_y;

	  this.InsertLeaf(proxy);
	  return true;
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2TreeNode} leaf
	 */
	box2d.b2DynamicTree.prototype.InsertLeaf = function (leaf) {
	  ++this.m_insertionCount;

	  if (this.m_root === null) {
	    this.m_root = leaf;
	    this.m_root.parent = null;
	    return;
	  }

	  // Find the best sibling for this node
	  /** @type {box2d.b2AABB} */
	  var leafAABB = leaf.aabb;
	  /** @type {box2d.b2Vec2} */
	  var center = leafAABB.GetCenter();
	  /** @type {box2d.b2TreeNode} */
	  var index = this.m_root;
	  /** @type {box2d.b2TreeNode} */
	  var child1;
	  /** @type {box2d.b2TreeNode} */
	  var child2;
	  while (!index.IsLeaf()) {
	    child1 = index.child1;
	    child2 = index.child2;

	    /** @type {number} */
	    var area = index.aabb.GetPerimeter();

	    /** @type {box2d.b2AABB} */
	    var combinedAABB = box2d.b2DynamicTree.s_combinedAABB;
	    combinedAABB.Combine2(index.aabb, leafAABB);
	    /** @type {number} */
	    var combinedArea = combinedAABB.GetPerimeter();

	    // Cost of creating a new parent for this node and the new leaf
	    /** @type {number} */
	    var cost = 2 * combinedArea;

	    // Minimum cost of pushing the leaf further down the tree
	    /** @type {number} */
	    var inheritanceCost = 2 * (combinedArea - area);

	    // Cost of descending into child1
	    /** @type {number} */
	    var cost1;
	    /** @type {box2d.b2AABB} */
	    var aabb = box2d.b2DynamicTree.s_aabb;
	    /** @type {number} */
	    var oldArea;
	    /** @type {number} */
	    var newArea;
	    if (child1.IsLeaf()) {
	      aabb.Combine2(leafAABB, child1.aabb);
	      cost1 = aabb.GetPerimeter() + inheritanceCost;
	    } else {
	      aabb.Combine2(leafAABB, child1.aabb);
	      oldArea = child1.aabb.GetPerimeter();
	      newArea = aabb.GetPerimeter();
	      cost1 = newArea - oldArea + inheritanceCost;
	    }

	    // Cost of descending into child2
	    /** @type {number} */
	    var cost2;
	    if (child2.IsLeaf()) {
	      aabb.Combine2(leafAABB, child2.aabb);
	      cost2 = aabb.GetPerimeter() + inheritanceCost;
	    } else {
	      aabb.Combine2(leafAABB, child2.aabb);
	      oldArea = child2.aabb.GetPerimeter();
	      newArea = aabb.GetPerimeter();
	      cost2 = newArea - oldArea + inheritanceCost;
	    }

	    // Descend according to the minimum cost.
	    if (cost < cost1 && cost < cost2) {
	      break;
	    }

	    // Descend
	    if (cost1 < cost2) {
	      index = child1;
	    } else {
	      index = child2;
	    }
	  }

	  /** @type {box2d.b2TreeNode} */
	  var sibling = index;

	  // Create a parent for the siblings.
	  /** @type {box2d.b2TreeNode} */
	  var oldParent = sibling.parent;
	  /** @type {box2d.b2TreeNode} */
	  var newParent = this.AllocateNode();
	  newParent.parent = oldParent;
	  newParent.userData = null;
	  newParent.aabb.Combine2(leafAABB, sibling.aabb);
	  newParent.height = sibling.height + 1;

	  if (oldParent) {
	    // The sibling was not the root.
	    if (oldParent.child1 === sibling) {
	      oldParent.child1 = newParent;
	    } else {
	      oldParent.child2 = newParent;
	    }

	    newParent.child1 = sibling;
	    newParent.child2 = leaf;
	    sibling.parent = newParent;
	    leaf.parent = newParent;
	  } else {
	    // The sibling was the root.
	    newParent.child1 = sibling;
	    newParent.child2 = leaf;
	    sibling.parent = newParent;
	    leaf.parent = newParent;
	    this.m_root = newParent;
	  }

	  // Walk back up the tree fixing heights and AABBs
	  index = leaf.parent;
	  while (index !== null) {
	    index = this.Balance(index);

	    child1 = index.child1;
	    child2 = index.child2;

	    if (box2d.ENABLE_ASSERTS) {
	      box2d.b2Assert(child1 !== null);
	    }
	    if (box2d.ENABLE_ASSERTS) {
	      box2d.b2Assert(child2 !== null);
	    }

	    index.height = 1 + box2d.b2Max(child1.height, child2.height);
	    index.aabb.Combine2(child1.aabb, child2.aabb);

	    index = index.parent;
	  }

	  //this.Validate();
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2TreeNode} leaf
	 */
	box2d.b2DynamicTree.prototype.RemoveLeaf = function (leaf) {
	  if (leaf === this.m_root) {
	    this.m_root = null;
	    return;
	  }

	  /** @type {box2d.b2TreeNode} */
	  var parent = leaf.parent;
	  /** @type {box2d.b2TreeNode} */
	  var grandParent = parent.parent;
	  /** @type {box2d.b2TreeNode} */
	  var sibling;
	  if (parent.child1 === leaf) {
	    sibling = parent.child2;
	  } else {
	    sibling = parent.child1;
	  }

	  if (grandParent) {
	    // Destroy parent and connect sibling to grandParent.
	    if (grandParent.child1 === parent) {
	      grandParent.child1 = sibling;
	    } else {
	      grandParent.child2 = sibling;
	    }
	    sibling.parent = grandParent;
	    this.FreeNode(parent);

	    // Adjust ancestor bounds.
	    /** @type {box2d.b2TreeNode} */
	    var index = grandParent;
	    while (index) {
	      index = this.Balance(index);

	      /** @type {box2d.b2TreeNode} */
	      var child1 = index.child1;
	      /** @type {box2d.b2TreeNode} */
	      var child2 = index.child2;

	      index.aabb.Combine2(child1.aabb, child2.aabb);
	      index.height = 1 + box2d.b2Max(child1.height, child2.height);

	      index = index.parent;
	    }
	  } else {
	    this.m_root = sibling;
	    sibling.parent = null;
	    this.FreeNode(parent);
	  }

	  //this.Validate();
	};

	/**
	 * Perform a left or right rotation if node A is imbalanced.
	 * Returns the new root index.
	 * @export
	 * @param {box2d.b2TreeNode} A
	 * @return {box2d.b2TreeNode}
	 */
	box2d.b2DynamicTree.prototype.Balance = function (A) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(A !== null);
	  }

	  if (A.IsLeaf() || A.height < 2) {
	    return A;
	  }

	  /** @type {box2d.b2TreeNode} */
	  var B = A.child1;
	  /** @type {box2d.b2TreeNode} */
	  var C = A.child2;

	  /** @type {number} */
	  var balance = C.height - B.height;

	  // Rotate C up
	  if (balance > 1) {
	    /** @type {box2d.b2TreeNode} */
	    var F = C.child1;
	    /** @type {box2d.b2TreeNode} */
	    var G = C.child2;

	    // Swap A and C
	    C.child1 = A;
	    C.parent = A.parent;
	    A.parent = C;

	    // A's old parent should point to C
	    if (C.parent !== null) {
	      if (C.parent.child1 === A) {
	        C.parent.child1 = C;
	      } else {
	        if (box2d.ENABLE_ASSERTS) {
	          box2d.b2Assert(C.parent.child2 === A);
	        }
	        C.parent.child2 = C;
	      }
	    } else {
	      this.m_root = C;
	    }

	    // Rotate
	    if (F.height > G.height) {
	      C.child2 = F;
	      A.child2 = G;
	      G.parent = A;
	      A.aabb.Combine2(B.aabb, G.aabb);
	      C.aabb.Combine2(A.aabb, F.aabb);

	      A.height = 1 + box2d.b2Max(B.height, G.height);
	      C.height = 1 + box2d.b2Max(A.height, F.height);
	    } else {
	      C.child2 = G;
	      A.child2 = F;
	      F.parent = A;
	      A.aabb.Combine2(B.aabb, F.aabb);
	      C.aabb.Combine2(A.aabb, G.aabb);

	      A.height = 1 + box2d.b2Max(B.height, F.height);
	      C.height = 1 + box2d.b2Max(A.height, G.height);
	    }

	    return C;
	  }

	  // Rotate B up
	  if (balance < -1) {
	    /** @type {box2d.b2TreeNode} */
	    var D = B.child1;
	    /** @type {box2d.b2TreeNode} */
	    var E = B.child2;

	    // Swap A and B
	    B.child1 = A;
	    B.parent = A.parent;
	    A.parent = B;

	    // A's old parent should point to B
	    if (B.parent !== null) {
	      if (B.parent.child1 === A) {
	        B.parent.child1 = B;
	      } else {
	        if (box2d.ENABLE_ASSERTS) {
	          box2d.b2Assert(B.parent.child2 === A);
	        }
	        B.parent.child2 = B;
	      }
	    } else {
	      this.m_root = B;
	    }

	    // Rotate
	    if (D.height > E.height) {
	      B.child2 = D;
	      A.child1 = E;
	      E.parent = A;
	      A.aabb.Combine2(C.aabb, E.aabb);
	      B.aabb.Combine2(A.aabb, D.aabb);

	      A.height = 1 + box2d.b2Max(C.height, E.height);
	      B.height = 1 + box2d.b2Max(A.height, D.height);
	    } else {
	      B.child2 = E;
	      A.child1 = D;
	      D.parent = A;
	      A.aabb.Combine2(C.aabb, D.aabb);
	      B.aabb.Combine2(A.aabb, E.aabb);

	      A.height = 1 + box2d.b2Max(C.height, D.height);
	      B.height = 1 + box2d.b2Max(A.height, E.height);
	    }

	    return B;
	  }

	  return A;
	};

	/**
	 * Compute the height of the binary tree in O(N) time. Should
	 * not be called often.
	 * @export
	 * @return {number}
	 */
	box2d.b2DynamicTree.prototype.GetHeight = function () {
	  if (this.m_root === null) {
	    return 0;
	  }

	  return this.m_root.height;
	};

	/**
	 * Get the ratio of the sum of the node areas to the root area.
	 * @export
	 * @return {number}
	 */
	box2d.b2DynamicTree.prototype.GetAreaRatio = function () {
	  if (this.m_root === null) {
	    return 0;
	  }

	  /** @type {box2d.b2TreeNode} */
	  var root = this.m_root;
	  /** @type {number} */
	  var rootArea = root.aabb.GetPerimeter();

	  var GetAreaNode = function GetAreaNode(node) {
	    if (node === null) {
	      return 0;
	    }

	    if (node.IsLeaf()) {
	      return 0;
	    }

	    /** @type {number} */
	    var area = node.aabb.GetPerimeter();
	    area += GetAreaNode(node.child1);
	    area += GetAreaNode(node.child2);
	    return area;
	  };
	  /** @type {number} */
	  var totalArea = GetAreaNode(this.m_root);

	  /*
	  float32 totalArea = 0.0;
	  for (int32 i = 0; i < m_nodeCapacity; ++i)
	  {
	    const b2TreeNode* node = m_nodes + i;
	    if (node.height < 0)
	    {
	      // Free node in pool
	      continue;
	    }
	     totalArea += node.aabb.GetPerimeter();
	  }
	  */

	  return totalArea / rootArea;
	};

	/**
	 * Compute the height of a sub-tree.
	 * @export
	 * @return {number}
	 * @param {box2d.b2TreeNode} node
	 */
	box2d.b2DynamicTree.prototype.ComputeHeightNode = function (node) {
	  if (node.IsLeaf()) {
	    return 0;
	  }

	  /** @type {number} */
	  var height1 = this.ComputeHeightNode(node.child1);
	  /** @type {number} */
	  var height2 = this.ComputeHeightNode(node.child2);
	  return 1 + box2d.b2Max(height1, height2);
	};

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2DynamicTree.prototype.ComputeHeight = function () {
	  /** @type {number} */
	  var height = this.ComputeHeightNode(this.m_root);
	  return height;
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2TreeNode} index
	 */
	box2d.b2DynamicTree.prototype.ValidateStructure = function (index) {
	  if (index === null) {
	    return;
	  }

	  if (index === this.m_root) {
	    if (box2d.ENABLE_ASSERTS) {
	      box2d.b2Assert(index.parent === null);
	    }
	  }

	  /** @type {box2d.b2TreeNode} */
	  var node = index;

	  /** @type {box2d.b2TreeNode} */
	  var child1 = node.child1;
	  /** @type {box2d.b2TreeNode} */
	  var child2 = node.child2;

	  if (node.IsLeaf()) {
	    if (box2d.ENABLE_ASSERTS) {
	      box2d.b2Assert(child1 === null);
	    }
	    if (box2d.ENABLE_ASSERTS) {
	      box2d.b2Assert(child2 === null);
	    }
	    if (box2d.ENABLE_ASSERTS) {
	      box2d.b2Assert(node.height === 0);
	    }
	    return;
	  }

	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(child1.parent === index);
	  }
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(child2.parent === index);
	  }

	  this.ValidateStructure(child1);
	  this.ValidateStructure(child2);
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2TreeNode} index
	 */
	box2d.b2DynamicTree.prototype.ValidateMetrics = function (index) {
	  if (index === null) {
	    return;
	  }

	  /** @type {box2d.b2TreeNode} */
	  var node = index;

	  /** @type {box2d.b2TreeNode} */
	  var child1 = node.child1;
	  /** @type {box2d.b2TreeNode} */
	  var child2 = node.child2;

	  if (node.IsLeaf()) {
	    if (box2d.ENABLE_ASSERTS) {
	      box2d.b2Assert(child1 === null);
	    }
	    if (box2d.ENABLE_ASSERTS) {
	      box2d.b2Assert(child2 === null);
	    }
	    if (box2d.ENABLE_ASSERTS) {
	      box2d.b2Assert(node.height === 0);
	    }
	    return;
	  }

	  /** @type {number} */
	  var height1 = child1.height;
	  /** @type {number} */
	  var height2 = child2.height;
	  /** @type {number} */
	  var height;
	  height = 1 + box2d.b2Max(height1, height2);
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(node.height === height);
	  }

	  /** @type {box2d.b2AABB} */
	  var aabb = box2d.b2DynamicTree.s_aabb;
	  aabb.Combine2(child1.aabb, child2.aabb);

	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(aabb.lowerBound === node.aabb.lowerBound);
	  }
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(aabb.upperBound === node.aabb.upperBound);
	  }

	  this.ValidateMetrics(child1);
	  this.ValidateMetrics(child2);
	};

	/**
	 * Validate this tree. For testing.
	 * @export
	 * @return {void}
	 */
	box2d.b2DynamicTree.prototype.Validate = function () {
	  this.ValidateStructure(this.m_root);
	  this.ValidateMetrics(this.m_root);

	  /** @type {number} */
	  var freeCount = 0;
	  /** @type {box2d.b2TreeNode} */
	  var freeIndex = this.m_freeList;
	  while (freeIndex !== null) {
	    freeIndex = freeIndex.parent; //freeIndex = freeIndex.next;
	    ++freeCount;
	  }

	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(this.GetHeight() === this.ComputeHeight());
	  }
	};

	/**
	 * Get the maximum balance of an node in the tree. The balance
	 * is the difference in height of the two children of a node.
	 * @export
	 * @return {number}
	 */
	box2d.b2DynamicTree.prototype.GetMaxBalance = function () {
	  var GetMaxBalanceNode = function GetMaxBalanceNode(node, maxBalance) {
	    if (node === null) {
	      return maxBalance;
	    }

	    if (node.height <= 1) {
	      return maxBalance;
	    }

	    if (box2d.ENABLE_ASSERTS) {
	      box2d.b2Assert(!node.IsLeaf());
	    }

	    /** @type {box2d.b2TreeNode} */
	    var child1 = node.child1;
	    /** @type {box2d.b2TreeNode} */
	    var child2 = node.child2;
	    /** @type {number} */
	    var balance = box2d.b2Abs(child2.height - child1.height);
	    return box2d.b2Max(maxBalance, balance);
	  };

	  /** @type {number} */
	  var maxBalance = GetMaxBalanceNode(this.m_root, 0);

	  /*
	  int32 maxBalance = 0;
	  for (int32 i = 0; i < m_nodeCapacity; ++i)
	  {
	    const b2TreeNode* node = m_nodes + i;
	    if (node.height <= 1)
	    {
	      continue;
	    }
	     b2Assert(!node.IsLeaf());
	     int32 child1 = node.child1;
	    int32 child2 = node.child2;
	    int32 balance = b2Abs(m_nodes[child2].height - m_nodes[child1].height);
	    maxBalance = b2Max(maxBalance, balance);
	  }
	  */

	  return maxBalance;
	};

	/**
	 * Build an optimal tree. Very expensive. For testing.
	 * @export
	 * @return {void}
	 */
	box2d.b2DynamicTree.prototype.RebuildBottomUp = function () {
	  /*
	  int32* nodes = (int32*)b2Alloc(m_nodeCount * sizeof(int32));
	  int32 count = 0;
	   // Build array of leaves. Free the rest.
	  for (int32 i = 0; i < m_nodeCapacity; ++i)
	  {
	    if (m_nodes[i].height < 0)
	    {
	      // free node in pool
	      continue;
	    }
	     if (m_nodes[i].IsLeaf())
	    {
	      m_nodes[i].parent = b2_nullNode;
	      nodes[count] = i;
	      ++count;
	    }
	    else
	    {
	      FreeNode(i);
	    }
	  }
	   while (count > 1)
	  {
	    float32 minCost = b2_maxFloat;
	    int32 iMin = -1, jMin = -1;
	    for (int32 i = 0; i < count; ++i)
	    {
	      b2AABB aabbi = m_nodes[nodes[i]].aabb;
	       for (int32 j = i + 1; j < count; ++j)
	      {
	        b2AABB aabbj = m_nodes[nodes[j]].aabb;
	        b2AABB b;
	        b.Combine(aabbi, aabbj);
	        float32 cost = b.GetPerimeter();
	        if (cost < minCost)
	        {
	          iMin = i;
	          jMin = j;
	          minCost = cost;
	        }
	      }
	    }
	     int32 index1 = nodes[iMin];
	    int32 index2 = nodes[jMin];
	    b2TreeNode* child1 = m_nodes + index1;
	    b2TreeNode* child2 = m_nodes + index2;
	     int32 parentIndex = AllocateNode();
	    b2TreeNode* parent = m_nodes + parentIndex;
	    parent.child1 = index1;
	    parent.child2 = index2;
	    parent.height = 1 + b2Max(child1.height, child2.height);
	    parent.aabb.Combine(child1.aabb, child2.aabb);
	    parent.parent = b2_nullNode;
	     child1.parent = parentIndex;
	    child2.parent = parentIndex;
	     nodes[jMin] = nodes[count-1];
	    nodes[iMin] = parentIndex;
	    --count;
	  }
	   m_root = nodes[0];
	  b2Free(nodes);
	  */

	  this.Validate();
	};

	/**
	 * Shift the world origin. Useful for large worlds.
	 * The shift formula is: position -= newOrigin
	 * @export
	 * @param {box2d.b2Vec2} newOrigin the new origin with respect to the old origin
	 * @return {void}
	 */
	box2d.b2DynamicTree.prototype.ShiftOrigin = function (newOrigin) {
	  var ShiftOriginNode = function ShiftOriginNode(node, newOrigin) {
	    if (node === null) {
	      return;
	    }

	    if (node.height <= 1) {
	      return;
	    }

	    if (box2d.ENABLE_ASSERTS) {
	      box2d.b2Assert(!node.IsLeaf());
	    }

	    /** @type {box2d.b2TreeNode} */
	    var child1 = node.child1;
	    /** @type {box2d.b2TreeNode} */
	    var child2 = node.child2;
	    ShiftOriginNode(child1, newOrigin);
	    ShiftOriginNode(child2, newOrigin);

	    node.aabb.lowerBound.SelfSub(newOrigin);
	    node.aabb.upperBound.SelfSub(newOrigin);
	  };

	  ShiftOriginNode(this.m_root, newOrigin);

	  /*
	  // Build array of leaves. Free the rest.
	  for (int32 i = 0; i < m_nodeCapacity; ++i)
	  {
	    m_nodes[i].aabb.lowerBound -= newOrigin;
	    m_nodes[i].aabb.upperBound -= newOrigin;
	  }
	  */
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(6);

	__webpack_require__(7);

	/**
	 * Structures and functions used for computing contact points,
	 * distance queries, and TOI queries.
	 */

	/**
	 * @export
	 * @enum
	 */
	box2d.b2ContactFeatureType = {
	  e_vertex: 0,
	  e_face: 1
	};

	/**
	 * The features that intersect to form the contact point
	 * This must be 4 bytes or less.
	 * @export
	 * @constructor
	 */
	/*
	 * Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
	 *
	 * This software is provided 'as-is', without any express or implied
	 * warranty.  In no event will the authors be held liable for any damages
	 * arising from the use of this software.
	 * Permission is granted to anyone to use this software for any purpose,
	 * including commercial applications, and to alter it and redistribute it
	 * freely, subject to the following restrictions:
	 * 1. The origin of this software must not be misrepresented; you must not
	 * claim that you wrote the original software. If you use this software
	 * in a product, an acknowledgment in the product documentation would be
	 * appreciated but is not required.
	 * 2. Altered source versions must be plainly marked as such, and must not be
	 * misrepresented as being the original software.
	 * 3. This notice may not be removed or altered from any source distribution.
	 */

	box2d.b2ContactFeature = function () {};

	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2ContactFeature.prototype._key = 0;
	/**
	 * @export
	 * @type {boolean}
	 */
	box2d.b2ContactFeature.prototype._key_invalid = false;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2ContactFeature.prototype._indexA = 0; ///< Feature index on shapeA
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2ContactFeature.prototype._indexB = 0; ///< Feature index on shapeB
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2ContactFeature.prototype._typeA = 0; ///< The feature type on shapeA
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2ContactFeature.prototype._typeB = 0; ///< The feature type on shapeB

	Object.defineProperty(box2d.b2ContactFeature.prototype, 'key', {
	  enumerable: false,
	  configurable: true,
	  /** @this {box2d.b2ContactFeature} */
	  get: function get() {
	    if (this._key_invalid) {
	      this._key_invalid = false;
	      this._key = this._indexA | this._indexB << 8 | this._typeA << 16 | this._typeB << 24;
	    }
	    return this._key;
	  },
	  /** @this {box2d.b2ContactFeature} */
	  set: function set(value) {
	    this._key = value;
	    this._indexA = this._key & 0xff;
	    this._indexB = this._key >> 8 & 0xff;
	    this._typeA = this._key >> 16 & 0xff;
	    this._typeB = this._key >> 24 & 0xff;
	  }
	});

	Object.defineProperty(box2d.b2ContactFeature.prototype, 'indexA', {
	  enumerable: false,
	  configurable: true,
	  /** @this {box2d.b2ContactFeature} */
	  get: function get() {
	    return this._indexA;
	  },
	  /** @this {box2d.b2ContactFeature} */
	  set: function set(value) {
	    this._indexA = value;
	    this._key_invalid = true;
	  }
	});

	Object.defineProperty(box2d.b2ContactFeature.prototype, 'indexB', {
	  enumerable: false,
	  configurable: true,
	  /** @this {box2d.b2ContactFeature} */
	  get: function get() {
	    return this._indexB;
	  },
	  /** @this {box2d.b2ContactFeature} */
	  set: function set(value) {
	    this._indexB = value;
	    this._key_invalid = true;
	  }
	});

	Object.defineProperty(box2d.b2ContactFeature.prototype, 'typeA', {
	  enumerable: false,
	  configurable: true,
	  /** @this {box2d.b2ContactFeature} */
	  get: function get() {
	    return this._typeA;
	  },
	  /** @this {box2d.b2ContactFeature} */
	  set: function set(value) {
	    this._typeA = value;
	    this._key_invalid = true;
	  }
	});

	Object.defineProperty(box2d.b2ContactFeature.prototype, 'typeB', {
	  enumerable: false,
	  configurable: true,
	  /** @this {box2d.b2ContactFeature} */
	  get: function get() {
	    return this._typeB;
	  },
	  /** @this {box2d.b2ContactFeature} */
	  set: function set(value) {
	    this._typeB = value;
	    this._key_invalid = true;
	  }
	});

	/**
	 * Contact ids to facilitate warm starting.
	 * @export
	 * @constructor
	 */
	box2d.b2ContactID = function () {
	  this.cf = new box2d.b2ContactFeature();
	};

	/**
	 * @export
	 * @type {box2d.b2ContactFeature}
	 */
	box2d.b2ContactID.prototype.cf = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2ContactID.prototype.key = 0; ///< Used to quickly compare contact ids.
	Object.defineProperty(box2d.b2ContactID.prototype, 'key', {
	  enumerable: false,
	  configurable: true,
	  /** @this {box2d.b2ContactID} */
	  get: function get() {
	    return this.cf.key;
	  },
	  /** @this {box2d.b2ContactID} */
	  set: function set(value) {
	    this.cf.key = value;
	  }
	});

	/**
	 * @export
	 * @return {box2d.b2ContactID}
	 * @param {box2d.b2ContactID} o
	 */
	box2d.b2ContactID.prototype.Copy = function (o) {
	  this.key = o.key;
	  return this;
	};

	/**
	 * @export
	 * @return {box2d.b2ContactID}
	 */
	box2d.b2ContactID.prototype.Clone = function () {
	  return new box2d.b2ContactID().Copy(this);
	};

	/**
	 * A manifold point is a contact point belonging to a contact
	 * manifold. It holds details related to the geometry and dynamics
	 * of the contact points.
	 * The local point usage depends on the manifold type:
	 * -e_circles: the local center of circleB
	 * -e_faceA: the local center of cirlceB or the clip point of polygonB
	 * -e_faceB: the clip point of polygonA
	 * This structure is stored across time steps, so we keep it small.
	 * Note: the impulses are used for internal caching and may not
	 * provide reliable contact forces, especially for high speed collisions.
	 * @export
	 * @constructor
	 */
	box2d.b2ManifoldPoint = function () {
	  this.localPoint = new box2d.b2Vec2();
	  this.id = new box2d.b2ContactID();
	};

	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2ManifoldPoint.prototype.localPoint = null; ///< usage depends on manifold type
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2ManifoldPoint.prototype.normalImpulse = 0; ///< the non-penetration impulse
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2ManifoldPoint.prototype.tangentImpulse = 0; ///< the friction impulse
	/**
	 * @export
	 * @type {box2d.b2ContactID}
	 */
	box2d.b2ManifoldPoint.prototype.id = null; ///< uniquely identifies a contact point between two shapes

	/**
	 * @export
	 * @return {Array.<box2d.b2ManifoldPoint>}
	 * @param {number} length
	 */
	box2d.b2ManifoldPoint.MakeArray = function (length) {
	  return box2d.b2MakeArray(length, function (i) {
	    return new box2d.b2ManifoldPoint();
	  });
	};

	/**
	 * @export
	 * @return {void}
	 */
	box2d.b2ManifoldPoint.prototype.Reset = function () {
	  this.localPoint.SetZero();
	  this.normalImpulse = 0;
	  this.tangentImpulse = 0;
	  this.id.key = 0;
	};

	/**
	 * @export
	 * @return {box2d.b2ManifoldPoint}
	 * @param {box2d.b2ManifoldPoint} o
	 */
	box2d.b2ManifoldPoint.prototype.Copy = function (o) {
	  this.localPoint.Copy(o.localPoint);
	  this.normalImpulse = o.normalImpulse;
	  this.tangentImpulse = o.tangentImpulse;
	  this.id.Copy(o.id);
	  return this;
	};

	/**
	 * @export
	 * @enum
	 */
	box2d.b2ManifoldType = {
	  e_unknown: -1,
	  e_circles: 0,
	  e_faceA: 1,
	  e_faceB: 2
	};

	/**
	 * A manifold for two touching convex shapes.
	 * Box2D supports multiple types of contact:
	 * - clip point versus plane with radius
	 * - point versus point with radius (circles)
	 * The local point usage depends on the manifold type:
	 * -e_circles: the local center of circleA
	 * -e_faceA: the center of faceA
	 * -e_faceB: the center of faceB
	 * Similarly the local normal usage:
	 * -e_circles: not used
	 * -e_faceA: the normal on polygonA
	 * -e_faceB: the normal on polygonB
	 * We store contacts in this way so that position correction can
	 * account for movement, which is critical for continuous physics.
	 * All contact scenarios must be expressed in one of these types.
	 * This structure is stored across time steps, so we keep it small.
	 * @export
	 * @constructor
	 */
	box2d.b2Manifold = function () {
	  this.points = box2d.b2ManifoldPoint.MakeArray(box2d.b2_maxManifoldPoints);
	  this.localNormal = new box2d.b2Vec2();
	  this.localPoint = new box2d.b2Vec2();
	  this.type = box2d.b2ManifoldType.e_unknown;
	  this.pointCount = 0;
	};

	/**
	 * @export
	 * @type {Array.<box2d.b2ManifoldPoint>}
	 */
	box2d.b2Manifold.prototype.points = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2Manifold.prototype.localNormal = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2Manifold.prototype.localPoint = null;
	/**
	 * @export
	 * @type {box2d.b2ManifoldType}
	 */
	box2d.b2Manifold.prototype.type = box2d.b2ManifoldType.e_unknown;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Manifold.prototype.pointCount = 0;

	/**
	 * @export
	 * @return {void}
	 */
	box2d.b2Manifold.prototype.Reset = function () {
	  for (var i = 0, ict = box2d.b2_maxManifoldPoints; i < ict; ++i) {
	    //if (box2d.ENABLE_ASSERTS) { box2d.b2Assert(this.points[i] instanceof box2d.b2ManifoldPoint); }
	    this.points[i].Reset();
	  }
	  this.localNormal.SetZero();
	  this.localPoint.SetZero();
	  this.type = box2d.b2ManifoldType.e_unknown;
	  this.pointCount = 0;
	};

	/**
	 * @export
	 * @return {box2d.b2Manifold}
	 * @param {box2d.b2Manifold} o
	 */
	box2d.b2Manifold.prototype.Copy = function (o) {
	  this.pointCount = o.pointCount;
	  for (var i = 0, ict = box2d.b2_maxManifoldPoints; i < ict; ++i) {
	    //if (box2d.ENABLE_ASSERTS) { box2d.b2Assert(this.points[i] instanceof box2d.b2ManifoldPoint); }
	    this.points[i].Copy(o.points[i]);
	  }
	  this.localNormal.Copy(o.localNormal);
	  this.localPoint.Copy(o.localPoint);
	  this.type = o.type;
	  return this;
	};

	/**
	 * @export
	 * @return {box2d.b2Manifold}
	 */
	box2d.b2Manifold.prototype.Clone = function () {
	  return new box2d.b2Manifold().Copy(this);
	};

	/**
	 * This is used to compute the current state of a contact
	 * manifold.
	 * @export
	 * @constructor
	 */
	box2d.b2WorldManifold = function () {
	  this.normal = new box2d.b2Vec2();
	  this.points = box2d.b2Vec2.MakeArray(box2d.b2_maxManifoldPoints);
	  this.separations = box2d.b2MakeNumberArray(box2d.b2_maxManifoldPoints);
	};

	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2WorldManifold.prototype.normal = null; ///< world vector pointing from A to B
	/**
	 * @export
	 * @type {Array.<box2d.b2Vec2>}
	 */
	box2d.b2WorldManifold.prototype.points = null; ///< world contact point (point of intersection)
	/**
	 * @export
	 * @type {Array.<number>}
	 */
	box2d.b2WorldManifold.prototype.separations = null; ///< a negative value indicates overlap, in meters

	/**
	 * Evaluate the manifold with supplied transforms. This assumes
	 * modest motion from the original state. This does not change
	 * the point count, impulses, etc. The radii must come from the
	 * shapes that generated the manifold.
	 * @export
	 * @param {box2d.b2Manifold} manifold
	 * @param {box2d.b2Transform} xfA
	 * @param {number} radiusA
	 * @param {box2d.b2Transform} xfB
	 * @param {number} radiusB
	 * @return {void}
	 */
	box2d.b2WorldManifold.prototype.Initialize = function (manifold, xfA, radiusA, xfB, radiusB) {
	  if (manifold.pointCount === 0) {
	    return;
	  }

	  switch (manifold.type) {
	    case box2d.b2ManifoldType.e_circles:
	      {
	        this.normal.Set(1, 0);
	        var pointA = box2d.b2Mul_X_V2(xfA, manifold.localPoint, box2d.b2WorldManifold.prototype.Initialize.s_pointA);
	        var pointB = box2d.b2Mul_X_V2(xfB, manifold.points[0].localPoint, box2d.b2WorldManifold.prototype.Initialize.s_pointB);
	        if (box2d.b2DistanceSquared(pointA, pointB) > box2d.b2_epsilon_sq) {
	          box2d.b2Sub_V2_V2(pointB, pointA, this.normal).SelfNormalize();
	        }

	        var cA = box2d.b2AddMul_V2_S_V2(pointA, radiusA, this.normal, box2d.b2WorldManifold.prototype.Initialize.s_cA);
	        var cB = box2d.b2SubMul_V2_S_V2(pointB, radiusB, this.normal, box2d.b2WorldManifold.prototype.Initialize.s_cB);
	        box2d.b2Mid_V2_V2(cA, cB, this.points[0]);
	        this.separations[0] = box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(cB, cA, box2d.b2Vec2.s_t0), this.normal); // b2Dot(cB - cA, normal);
	      }
	      break;

	    case box2d.b2ManifoldType.e_faceA:
	      {
	        box2d.b2Mul_R_V2(xfA.q, manifold.localNormal, this.normal);
	        var planePoint = box2d.b2Mul_X_V2(xfA, manifold.localPoint, box2d.b2WorldManifold.prototype.Initialize.s_planePoint);

	        for (var i = 0, ict = manifold.pointCount; i < ict; ++i) {
	          var clipPoint = box2d.b2Mul_X_V2(xfB, manifold.points[i].localPoint, box2d.b2WorldManifold.prototype.Initialize.s_clipPoint);
	          var s = radiusA - box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(clipPoint, planePoint, box2d.b2Vec2.s_t0), this.normal);
	          var cA = box2d.b2AddMul_V2_S_V2(clipPoint, s, this.normal, box2d.b2WorldManifold.prototype.Initialize.s_cA);
	          var cB = box2d.b2SubMul_V2_S_V2(clipPoint, radiusB, this.normal, box2d.b2WorldManifold.prototype.Initialize.s_cB);
	          box2d.b2Mid_V2_V2(cA, cB, this.points[i]);
	          this.separations[i] = box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(cB, cA, box2d.b2Vec2.s_t0), this.normal); // b2Dot(cB - cA, normal);
	        }
	      }
	      break;

	    case box2d.b2ManifoldType.e_faceB:
	      {
	        box2d.b2Mul_R_V2(xfB.q, manifold.localNormal, this.normal);
	        var planePoint = box2d.b2Mul_X_V2(xfB, manifold.localPoint, box2d.b2WorldManifold.prototype.Initialize.s_planePoint);

	        for (var i = 0, ict = manifold.pointCount; i < ict; ++i) {
	          var clipPoint = box2d.b2Mul_X_V2(xfA, manifold.points[i].localPoint, box2d.b2WorldManifold.prototype.Initialize.s_clipPoint);
	          var s = radiusB - box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(clipPoint, planePoint, box2d.b2Vec2.s_t0), this.normal);
	          var cB = box2d.b2AddMul_V2_S_V2(clipPoint, s, this.normal, box2d.b2WorldManifold.prototype.Initialize.s_cB);
	          var cA = box2d.b2SubMul_V2_S_V2(clipPoint, radiusA, this.normal, box2d.b2WorldManifold.prototype.Initialize.s_cA);
	          box2d.b2Mid_V2_V2(cA, cB, this.points[i]);
	          this.separations[i] = box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(cA, cB, box2d.b2Vec2.s_t0), this.normal); // b2Dot(cA - cB, normal);
	        }

	        // Ensure normal points from A to B.
	        this.normal.SelfNeg();
	      }
	      break;
	  }
	};
	box2d.b2WorldManifold.prototype.Initialize.s_pointA = new box2d.b2Vec2();
	box2d.b2WorldManifold.prototype.Initialize.s_pointB = new box2d.b2Vec2();
	box2d.b2WorldManifold.prototype.Initialize.s_cA = new box2d.b2Vec2();
	box2d.b2WorldManifold.prototype.Initialize.s_cB = new box2d.b2Vec2();
	box2d.b2WorldManifold.prototype.Initialize.s_planePoint = new box2d.b2Vec2();
	box2d.b2WorldManifold.prototype.Initialize.s_clipPoint = new box2d.b2Vec2();

	/**
	 * This is used for determining the state of contact points.
	 * @export
	 * @enum
	 */
	box2d.b2PointState = {
	  b2_nullState: 0, ///< point does not exist
	  b2_addState: 1, ///< point was added in the update
	  b2_persistState: 2, ///< point persisted across the update
	  b2_removeState: 3 ///< point was removed in the update
	};

	/**
	 * Compute the point states given two manifolds. The states
	 * pertain to the transition from manifold1 to manifold2. So
	 * state1 is either persist or remove while state2 is either add
	 * or persist.
	 * @export
	 * @return {void}
	 * @param {Array.<box2d.b2PointState>} state1
	 * @param {Array.<box2d.b2PointState>} state2
	 * @param {box2d.b2Manifold} manifold1
	 * @param {box2d.b2Manifold} manifold2
	 */
	box2d.b2GetPointStates = function (state1, state2, manifold1, manifold2) {
	  // Detect persists and removes.
	  for (var i = 0, ict = manifold1.pointCount; i < ict; ++i) {
	    var id = manifold1.points[i].id;
	    var key = id.key;

	    state1[i] = box2d.b2PointState.b2_removeState;

	    for (var j = 0, jct = manifold2.pointCount; j < jct; ++j) {
	      if (manifold2.points[j].id.key === key) {
	        state1[i] = box2d.b2PointState.b2_persistState;
	        break;
	      }
	    }
	  }
	  for (var ict = box2d.b2_maxManifoldPoints; i < ict; ++i) {
	    state1[i] = box2d.b2PointState.b2_nullState;
	  }

	  // Detect persists and adds.
	  for (var i = 0, ict = manifold2.pointCount; i < ict; ++i) {
	    var id = manifold2.points[i].id;
	    var key = id.key;

	    state2[i] = box2d.b2PointState.b2_addState;

	    for (var j = 0, jct = manifold1.pointCount; j < jct; ++j) {
	      if (manifold1.points[j].id.key === key) {
	        state2[i] = box2d.b2PointState.b2_persistState;
	        break;
	      }
	    }
	  }
	  for (var ict = box2d.b2_maxManifoldPoints; i < ict; ++i) {
	    state2[i] = box2d.b2PointState.b2_nullState;
	  }
	};

	/**
	 * Used for computing contact manifolds.
	 * @export
	 * @constructor
	 */
	box2d.b2ClipVertex = function () {
	  this.v = new box2d.b2Vec2();
	  this.id = new box2d.b2ContactID();
	};

	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2ClipVertex.prototype.v = null;
	/**
	 * @export
	 * @type {box2d.b2ContactID}
	 */
	box2d.b2ClipVertex.prototype.id = null;

	/**
	 * @export
	 * @return {Array.<box2d.b2ClipVertex>}
	 * @param {number=} length
	 */
	box2d.b2ClipVertex.MakeArray = function (length) {
	  return box2d.b2MakeArray(length, function (i) {
	    return new box2d.b2ClipVertex();
	  });
	};

	/**
	 * @export
	 * @return {box2d.b2ClipVertex}
	 * @param {box2d.b2ClipVertex} other
	 */
	box2d.b2ClipVertex.prototype.Copy = function (other) {
	  this.v.Copy(other.v);
	  this.id.Copy(other.id);
	  return this;
	};

	/**
	 * Ray-cast input data. The ray extends from p1 to p1 +
	 * maxFraction * (p2 - p1).
	 * @export
	 * @constructor
	 */
	box2d.b2RayCastInput = function () {
	  this.p1 = new box2d.b2Vec2();
	  this.p2 = new box2d.b2Vec2();
	  this.maxFraction = 1;
	};

	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2RayCastInput.prototype.p1 = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2RayCastInput.prototype.p2 = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2RayCastInput.prototype.maxFraction = 1;

	/**
	 * @export
	 * @return {box2d.b2RayCastInput}
	 * @param {box2d.b2RayCastInput} o
	 */
	box2d.b2RayCastInput.prototype.Copy = function (o) {
	  this.p1.Copy(o.p1);
	  this.p2.Copy(o.p2);
	  this.maxFraction = o.maxFraction;
	  return this;
	};

	/**
	 * Ray-cast output data. The ray hits at p1 + fraction * (p2 -
	 * p1), where p1 and p2 come from box2d.b2RayCastInput.
	 * @export
	 * @constructor
	 */
	box2d.b2RayCastOutput = function () {
	  this.normal = new box2d.b2Vec2();
	  this.fraction = 0;
	};

	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2RayCastOutput.prototype.normal = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2RayCastOutput.prototype.fraction = 0;

	/**
	 * @export
	 * @return {box2d.b2RayCastOutput}
	 * @param {box2d.b2RayCastOutput} o
	 */
	box2d.b2RayCastOutput.prototype.Copy = function (o) {
	  this.normal.Copy(o.normal);
	  this.fraction = o.fraction;
	  return this;
	};

	/**
	 * An axis aligned bounding box.
	 * @export
	 * @constructor
	 */
	box2d.b2AABB = function () {
	  this.lowerBound = new box2d.b2Vec2();
	  this.upperBound = new box2d.b2Vec2();

	  this.m_out_center = new box2d.b2Vec2();
	  this.m_out_extent = new box2d.b2Vec2();
	};

	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2AABB.prototype.lowerBound = null; ///< the lower vertex
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2AABB.prototype.upperBound = null; ///< the upper vertex

	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2AABB.prototype.m_out_center = null; // access using GetCenter()
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2AABB.prototype.m_out_extent = null; // access using GetExtents()

	/**
	 * @export
	 * @return {box2d.b2AABB}
	 */
	box2d.b2AABB.prototype.Clone = function () {
	  return new box2d.b2AABB().Copy(this);
	};

	/**
	 * @export
	 * @return {box2d.b2AABB}
	 * @param {box2d.b2AABB} o
	 */
	box2d.b2AABB.prototype.Copy = function (o) {
	  this.lowerBound.Copy(o.lowerBound);
	  this.upperBound.Copy(o.upperBound);
	  return this;
	};

	/**
	 * Verify that the bounds are sorted.
	 * @export
	 * @return {boolean}
	 */
	box2d.b2AABB.prototype.IsValid = function () {
	  var d_x = this.upperBound.x - this.lowerBound.x;
	  var d_y = this.upperBound.y - this.lowerBound.y;
	  var valid = d_x >= 0 && d_y >= 0;
	  valid = valid && this.lowerBound.IsValid() && this.upperBound.IsValid();
	  return valid;
	};

	/**
	 * Get the center of the AABB.
	 * @export
	 * @return {box2d.b2Vec2}
	 */
	box2d.b2AABB.prototype.GetCenter = function () {
	  return box2d.b2Mid_V2_V2(this.lowerBound, this.upperBound, this.m_out_center);
	};

	/**
	 * Get the extents of the AABB (half-widths).
	 * @export
	 * @return {box2d.b2Vec2}
	 */
	box2d.b2AABB.prototype.GetExtents = function () {
	  return box2d.b2Ext_V2_V2(this.lowerBound, this.upperBound, this.m_out_extent);
	};

	/**
	 * Get the perimeter length
	 * @export
	 * @return {number}
	 */
	box2d.b2AABB.prototype.GetPerimeter = function () {
	  var wx = this.upperBound.x - this.lowerBound.x;
	  var wy = this.upperBound.y - this.lowerBound.y;
	  return 2 * (wx + wy);
	};

	/**
	 * @return {box2d.b2AABB}
	 * @param {box2d.b2AABB} a0
	 * @param {box2d.b2AABB=} a1
	 */
	box2d.b2AABB.prototype.Combine = function (a0, a1) {
	  switch (arguments.length) {
	    case 1:
	      return this.Combine1(a0);
	    case 2:
	      return this.Combine2(a0, a1 || new box2d.b2AABB());
	    default:
	      throw new Error();
	  }
	};

	/**
	 * Combine an AABB into this one.
	 * @export
	 * @return {box2d.b2AABB}
	 * @param {box2d.b2AABB} aabb
	 */
	box2d.b2AABB.prototype.Combine1 = function (aabb) {
	  this.lowerBound.x = box2d.b2Min(this.lowerBound.x, aabb.lowerBound.x);
	  this.lowerBound.y = box2d.b2Min(this.lowerBound.y, aabb.lowerBound.y);
	  this.upperBound.x = box2d.b2Max(this.upperBound.x, aabb.upperBound.x);
	  this.upperBound.y = box2d.b2Max(this.upperBound.y, aabb.upperBound.y);
	  return this;
	};

	/**
	 * Combine two AABBs into this one.
	 * @export
	 * @return {box2d.b2AABB}
	 * @param {box2d.b2AABB} aabb1
	 * @param {box2d.b2AABB} aabb2
	 */
	box2d.b2AABB.prototype.Combine2 = function (aabb1, aabb2) {
	  this.lowerBound.x = box2d.b2Min(aabb1.lowerBound.x, aabb2.lowerBound.x);
	  this.lowerBound.y = box2d.b2Min(aabb1.lowerBound.y, aabb2.lowerBound.y);
	  this.upperBound.x = box2d.b2Max(aabb1.upperBound.x, aabb2.upperBound.x);
	  this.upperBound.y = box2d.b2Max(aabb1.upperBound.y, aabb2.upperBound.y);
	  return this;
	};

	/**
	 * @export
	 * @return {box2d.b2AABB}
	 * @param {box2d.b2AABB} aabb1
	 * @param {box2d.b2AABB} aabb2
	 * @param {box2d.b2AABB} out
	 */
	box2d.b2AABB.Combine = function (aabb1, aabb2, out) {
	  out.Combine2(aabb1, aabb2);
	  return out;
	};

	/**
	 * Does this aabb contain the provided AABB.
	 * @export
	 * @return {boolean}
	 * @param {box2d.b2AABB} aabb
	 */
	box2d.b2AABB.prototype.Contains = function (aabb) {
	  var result = true;
	  result = result && this.lowerBound.x <= aabb.lowerBound.x;
	  result = result && this.lowerBound.y <= aabb.lowerBound.y;
	  result = result && aabb.upperBound.x <= this.upperBound.x;
	  result = result && aabb.upperBound.y <= this.upperBound.y;
	  return result;
	};

	/**
	 * From Real-time Collision Detection, p179.
	 * @export
	 * @return {boolean}
	 * @param {box2d.b2RayCastOutput} output
	 * @param {box2d.b2RayCastInput} input
	 */
	box2d.b2AABB.prototype.RayCast = function (output, input) {
	  var tmin = -box2d.b2_maxFloat;
	  var tmax = box2d.b2_maxFloat;

	  var p_x = input.p1.x;
	  var p_y = input.p1.y;
	  var d_x = input.p2.x - input.p1.x;
	  var d_y = input.p2.y - input.p1.y;
	  var absD_x = box2d.b2Abs(d_x);
	  var absD_y = box2d.b2Abs(d_y);

	  var normal = output.normal;

	  if (absD_x < box2d.b2_epsilon) {
	    // Parallel.
	    if (p_x < this.lowerBound.x || this.upperBound.x < p_x) {
	      return false;
	    }
	  } else {
	    var inv_d = 1 / d_x;
	    var t1 = (this.lowerBound.x - p_x) * inv_d;
	    var t2 = (this.upperBound.x - p_x) * inv_d;

	    // Sign of the normal vector.
	    var s = -1;

	    if (t1 > t2) {
	      var t3 = t1;
	      t1 = t2;
	      t2 = t3;
	      s = 1;
	    }

	    // Push the min up
	    if (t1 > tmin) {
	      normal.x = s;
	      normal.y = 0;
	      tmin = t1;
	    }

	    // Pull the max down
	    tmax = box2d.b2Min(tmax, t2);

	    if (tmin > tmax) {
	      return false;
	    }
	  }

	  if (absD_y < box2d.b2_epsilon) {
	    // Parallel.
	    if (p_y < this.lowerBound.y || this.upperBound.y < p_y) {
	      return false;
	    }
	  } else {
	    var inv_d = 1 / d_y;
	    var t1 = (this.lowerBound.y - p_y) * inv_d;
	    var t2 = (this.upperBound.y - p_y) * inv_d;

	    // Sign of the normal vector.
	    var s = -1;

	    if (t1 > t2) {
	      var t3 = t1;
	      t1 = t2;
	      t2 = t3;
	      s = 1;
	    }

	    // Push the min up
	    if (t1 > tmin) {
	      normal.x = 0;
	      normal.y = s;
	      tmin = t1;
	    }

	    // Pull the max down
	    tmax = box2d.b2Min(tmax, t2);

	    if (tmin > tmax) {
	      return false;
	    }
	  }

	  // Does the ray start inside the box?
	  // Does the ray intersect beyond the max fraction?
	  if (tmin < 0 || input.maxFraction < tmin) {
	    return false;
	  }

	  // Intersection.
	  output.fraction = tmin;

	  return true;
	};

	/**
	 * @export
	 * @return {boolean}
	 * @param {box2d.b2AABB} other
	 */
	box2d.b2AABB.prototype.TestOverlap = function (other) {
	  var d1_x = other.lowerBound.x - this.upperBound.x;
	  var d1_y = other.lowerBound.y - this.upperBound.y;
	  var d2_x = this.lowerBound.x - other.upperBound.x;
	  var d2_y = this.lowerBound.y - other.upperBound.y;

	  if (d1_x > 0 || d1_y > 0) return false;

	  if (d2_x > 0 || d2_y > 0) return false;

	  return true;
	};

	/**
	 * @export
	 * @return {boolean}
	 * @param {box2d.b2AABB} a
	 * @param {box2d.b2AABB} b
	 */
	box2d.b2TestOverlap_AABB = function (a, b) {
	  var d1_x = b.lowerBound.x - a.upperBound.x;
	  var d1_y = b.lowerBound.y - a.upperBound.y;
	  var d2_x = a.lowerBound.x - b.upperBound.x;
	  var d2_y = a.lowerBound.y - b.upperBound.y;

	  if (d1_x > 0 || d1_y > 0) return false;

	  if (d2_x > 0 || d2_y > 0) return false;

	  return true;
	};

	/**
	 * Clipping for contact manifolds.
	 * Sutherland-Hodgman clipping.
	 * @export
	 * @return {number}
	 * @param {Array.<box2d.b2ClipVertex>} vOut
	 * @param {Array.<box2d.b2ClipVertex>} vIn
	 * @param {box2d.b2Vec2} normal
	 * @param {number} offset
	 * @param {number} vertexIndexA
	 */
	box2d.b2ClipSegmentToLine = function (vOut, vIn, normal, offset, vertexIndexA) {
	  // Start with no output points
	  var numOut = 0;

	  var vIn0 = vIn[0];
	  var vIn1 = vIn[1];

	  // Calculate the distance of end points to the line
	  var distance0 = box2d.b2Dot_V2_V2(normal, vIn0.v) - offset;
	  var distance1 = box2d.b2Dot_V2_V2(normal, vIn1.v) - offset;

	  // If the points are behind the plane
	  if (distance0 <= 0) vOut[numOut++].Copy(vIn0);
	  if (distance1 <= 0) vOut[numOut++].Copy(vIn1);

	  // If the points are on different sides of the plane
	  if (distance0 * distance1 < 0) {
	    // Find intersection point of edge and plane
	    var interp = distance0 / (distance0 - distance1);
	    var v = vOut[numOut].v;
	    v.x = vIn0.v.x + interp * (vIn1.v.x - vIn0.v.x);
	    v.y = vIn0.v.y + interp * (vIn1.v.y - vIn0.v.y);

	    // VertexA is hitting edgeB.
	    var id = vOut[numOut].id;
	    id.cf.indexA = vertexIndexA;
	    id.cf.indexB = vIn0.id.cf.indexB;
	    id.cf.typeA = box2d.b2ContactFeatureType.e_vertex;
	    id.cf.typeB = box2d.b2ContactFeatureType.e_face;
	    ++numOut;
	  }

	  return numOut;
	};

	/**
	 * @export
	 * @return {boolean}
	 * @param {box2d.b2Shape} shapeA
	 * @param {number} indexA
	 * @param {box2d.b2Shape} shapeB
	 * @param {number} indexB
	 * @param {box2d.b2Transform} xfA
	 * @param {box2d.b2Transform} xfB
	 */
	box2d.b2TestOverlap_Shape = function (shapeA, indexA, shapeB, indexB, xfA, xfB) {
	  var input = box2d.b2TestOverlap_Shape.s_input.Reset();
	  input.proxyA.SetShape(shapeA, indexA);
	  input.proxyB.SetShape(shapeB, indexB);
	  input.transformA.Copy(xfA);
	  input.transformB.Copy(xfB);
	  input.useRadii = true;

	  var simplexCache = box2d.b2TestOverlap_Shape.s_simplexCache.Reset();
	  simplexCache.count = 0;

	  var output = box2d.b2TestOverlap_Shape.s_output.Reset();

	  box2d.b2ShapeDistance(output, simplexCache, input);

	  return output.distance < 10 * box2d.b2_epsilon;
	};
	box2d.b2TestOverlap_Shape.s_input = new box2d.b2DistanceInput();
	box2d.b2TestOverlap_Shape.s_simplexCache = new box2d.b2SimplexCache();
	box2d.b2TestOverlap_Shape.s_output = new box2d.b2DistanceOutput();

	/**
	 * @export
	 * @return {boolean}
	 * @param {box2d.b2AABB|box2d.b2Shape} AABBA_or_shapeA
	 * @param {box2d.b2AABB|number} AABBB_or_indexA
	 * @param {box2d.b2Shape=} shapeB
	 * @param {number=} indexB
	 * @param {box2d.b2Transform=} xfA
	 * @param {box2d.b2Transform=} xfB
	 */
	box2d.b2TestOverlap = function (AABBA_or_shapeA, AABBB_or_indexA, shapeB, indexB, xfA, xfB) {
	  if (AABBA_or_shapeA instanceof box2d.b2AABB && AABBB_or_indexA instanceof box2d.b2AABB) {
	    return box2d.b2TestOverlap_AABB(AABBA_or_shapeA, AABBB_or_indexA);
	  } else if (AABBA_or_shapeA instanceof box2d.b2Shape && typeof AABBB_or_indexA === 'number' && shapeB instanceof box2d.b2Shape && typeof indexB === 'number' && xfA instanceof box2d.b2Transform && xfB instanceof box2d.b2Transform) {
	    return box2d.b2TestOverlap_Shape(AABBA_or_shapeA, AABBB_or_indexA, shapeB, indexB, xfA, xfB);
	  } else {
	    throw new Error();
	  }
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	/**
	 * This is a growable LIFO stack with an initial capacity of N.
	 * If the stack size exceeds the initial capacity, the heap is
	 * used to increase the size of the stack.
	 * @export
	 * @constructor
	 * @param {number} N
	 */
	box2d.b2GrowableStack = function (N) {
	  this.m_stack = new Array(N);
	};

	/**
	 * @export
	 * @type {Array.<*>}
	 */
	/*
	 * Copyright (c) 2010 Erin Catto http://www.box2d.org
	 *
	 * This software is provided 'as-is', without any express or implied
	 * warranty.  In no event will the authors be held liable for any damages
	 * arising from the use of this software.
	 * Permission is granted to anyone to use this software for any purpose,
	 * including commercial applications, and to alter it and redistribute it
	 * freely, subject to the following restrictions:
	 * 1. The origin of this software must not be misrepresented; you must not
	 * claim that you wrote the original software. If you use this software
	 * in a product, an acknowledgment in the product documentation would be
	 * appreciated but is not required.
	 * 2. Altered source versions must be plainly marked as such, and must not be
	 * misrepresented as being the original software.
	 * 3. This notice may not be removed or altered from any source distribution.
	 */

	box2d.b2GrowableStack.prototype.m_stack = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2GrowableStack.prototype.m_count = 0;

	/**
	 * @export
	 * @return {box2d.b2GrowableStack}
	 */
	box2d.b2GrowableStack.prototype.Reset = function () {
	  this.m_count = 0;
	  return this;
	};

	/**
	 * @export
	 * @return {void}
	 * @param {*} element
	 */
	box2d.b2GrowableStack.prototype.Push = function (element) {
	  this.m_stack[this.m_count] = element;
	  ++this.m_count;
	};

	/**
	 * @export
	 * @return {*}
	 */
	box2d.b2GrowableStack.prototype.Pop = function () {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(this.m_count > 0);
	  }
	  --this.m_count;
	  var element = this.m_stack[this.m_count];
	  this.m_stack[this.m_count] = null;
	  return element;
	};

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2GrowableStack.prototype.GetCount = function () {
	  return this.m_count;
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(7);

	__webpack_require__(6);

	__webpack_require__(3);

	/**
	 * @export
	 * @type {number}
	 */
	/*
	 * Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
	 *
	 * This software is provided 'as-is', without any express or implied
	 * warranty.  In no event will the authors be held liable for any damages
	 * arising from the use of this software.
	 * Permission is granted to anyone to use this software for any purpose,
	 * including commercial applications, and to alter it and redistribute it
	 * freely, subject to the following restrictions:
	 * 1. The origin of this software must not be misrepresented; you must not
	 * claim that you wrote the original software. If you use this software
	 * in a product, an acknowledgment in the product documentation would be
	 * appreciated but is not required.
	 * 2. Altered source versions must be plainly marked as such, and must not be
	 * misrepresented as being the original software.
	 * 3. This notice may not be removed or altered from any source distribution.
	 */

	box2d.b2_toiTime = 0.0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2_toiMaxTime = 0.0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2_toiCalls = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2_toiIters = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2_toiMaxIters = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2_toiRootIters = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2_toiMaxRootIters = 0;

	/**
	 * Input parameters for b2TimeOfImpact
	 * @export
	 * @constructor
	 */
	box2d.b2TOIInput = function () {
	  this.proxyA = new box2d.b2DistanceProxy();
	  this.proxyB = new box2d.b2DistanceProxy();
	  this.sweepA = new box2d.b2Sweep();
	  this.sweepB = new box2d.b2Sweep();
	};

	/**
	 * @export
	 * @type {box2d.b2DistanceProxy}
	 */
	box2d.b2TOIInput.prototype.proxyA = null;
	/**
	 * @export
	 * @type {box2d.b2DistanceProxy}
	 */
	box2d.b2TOIInput.prototype.proxyB = null;
	/**
	 * @export
	 * @type {box2d.b2Sweep}
	 */
	box2d.b2TOIInput.prototype.sweepA = null;
	/**
	 * @export
	 * @type {box2d.b2Sweep}
	 */
	box2d.b2TOIInput.prototype.sweepB = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2TOIInput.prototype.tMax = 0; // defines sweep interval [0, tMax]

	/**
	 * @export
	 * @enum
	 */
	box2d.b2TOIOutputState = {
	  e_unknown: 0,
	  e_failed: 1,
	  e_overlapped: 2,
	  e_touching: 3,
	  e_separated: 4
	};

	/**
	 * Output parameters for b2TimeOfImpact.
	 * @export
	 * @constructor
	 */
	box2d.b2TOIOutput = function () {};

	/**
	 * @export
	 * @type {box2d.b2TOIOutputState}
	 */
	box2d.b2TOIOutput.prototype.state = box2d.b2TOIOutputState.e_unknown;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2TOIOutput.prototype.t = 0;

	/**
	 * @export
	 * @enum
	 */
	box2d.b2SeparationFunctionType = {
	  e_unknown: -1,
	  e_points: 0,
	  e_faceA: 1,
	  e_faceB: 2
	};

	/**
	 * @export
	 * @constructor
	 */
	box2d.b2SeparationFunction = function () {
	  this.m_sweepA = new box2d.b2Sweep();
	  this.m_sweepB = new box2d.b2Sweep();
	  this.m_localPoint = new box2d.b2Vec2();
	  this.m_axis = new box2d.b2Vec2();
	};

	/**
	 * @export
	 * @type {box2d.b2DistanceProxy}
	 */
	box2d.b2SeparationFunction.prototype.m_proxyA = null;
	/**
	 * @export
	 * @type {box2d.b2DistanceProxy}
	 */
	box2d.b2SeparationFunction.prototype.m_proxyB = null;
	/**
	 * @export
	 * @type {box2d.b2Sweep}
	 */
	box2d.b2SeparationFunction.prototype.m_sweepA = null;
	/**
	 * @export
	 * @type {box2d.b2Sweep}
	 */
	box2d.b2SeparationFunction.prototype.m_sweepB = null;
	/**
	 * @export
	 * @type {box2d.b2SeparationFunctionType}
	 */
	box2d.b2SeparationFunction.prototype.m_type = box2d.b2SeparationFunctionType.e_unknown;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2SeparationFunction.prototype.m_localPoint = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2SeparationFunction.prototype.m_axis = null;

	/**
	 * TODO_ERIN might not need to return the separation
	 * @export
	 * @return {number}
	 * @param {box2d.b2SimplexCache} cache
	 * @param {box2d.b2DistanceProxy} proxyA
	 * @param {box2d.b2Sweep} sweepA
	 * @param {box2d.b2DistanceProxy} proxyB
	 * @param {box2d.b2Sweep} sweepB
	 * @param {number} t1
	 */
	box2d.b2SeparationFunction.prototype.Initialize = function (cache, proxyA, sweepA, proxyB, sweepB, t1) {
	  this.m_proxyA = proxyA;
	  this.m_proxyB = proxyB;
	  /** @type {number} */
	  var count = cache.count;
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(0 < count && count < 3);
	  }

	  this.m_sweepA.Copy(sweepA);
	  this.m_sweepB.Copy(sweepB);

	  /** @type {box2d.b2Transform} */
	  var xfA = box2d.b2TimeOfImpact.s_xfA;
	  /** @type {box2d.b2Transform} */
	  var xfB = box2d.b2TimeOfImpact.s_xfB;
	  this.m_sweepA.GetTransform(xfA, t1);
	  this.m_sweepB.GetTransform(xfB, t1);

	  if (count === 1) {
	    this.m_type = box2d.b2SeparationFunctionType.e_points;
	    /** @type {box2d.b2Vec2} */
	    var localPointA = this.m_proxyA.GetVertex(cache.indexA[0]);
	    /** @type {box2d.b2Vec2} */
	    var localPointB = this.m_proxyB.GetVertex(cache.indexB[0]);
	    /** @type {box2d.b2Vec2} */
	    var pointA = box2d.b2Mul_X_V2(xfA, localPointA, box2d.b2TimeOfImpact.s_pointA);
	    /** @type {box2d.b2Vec2} */
	    var pointB = box2d.b2Mul_X_V2(xfB, localPointB, box2d.b2TimeOfImpact.s_pointB);
	    box2d.b2Sub_V2_V2(pointB, pointA, this.m_axis);
	    /** @type {number} */
	    var s = this.m_axis.Normalize();
	    this.m_localPoint.SetZero();
	    return s;
	  } else if (cache.indexA[0] === cache.indexA[1]) {
	    // Two points on B and one on A.
	    this.m_type = box2d.b2SeparationFunctionType.e_faceB;
	    /** @type {box2d.b2Vec2} */
	    var localPointB1 = this.m_proxyB.GetVertex(cache.indexB[0]);
	    /** @type {box2d.b2Vec2} */
	    var localPointB2 = this.m_proxyB.GetVertex(cache.indexB[1]);

	    box2d.b2Cross_V2_S(box2d.b2Sub_V2_V2(localPointB2, localPointB1, box2d.b2Vec2.s_t0), 1.0, this.m_axis).SelfNormalize();
	    /** @type {box2d.b2Vec2} */
	    var normal = box2d.b2Mul_R_V2(xfB.q, this.m_axis, box2d.b2TimeOfImpact.s_normal);

	    box2d.b2Mid_V2_V2(localPointB1, localPointB2, this.m_localPoint);
	    /** type {box2d.b2Vec2} */
	    var pointB = box2d.b2Mul_X_V2(xfB, this.m_localPoint, box2d.b2TimeOfImpact.s_pointB);

	    /** type {box2d.b2Vec2} */
	    var localPointA = this.m_proxyA.GetVertex(cache.indexA[0]);
	    /** type {box2d.b2Vec2} */
	    var pointA = box2d.b2Mul_X_V2(xfA, localPointA, box2d.b2TimeOfImpact.s_pointA);

	    /** type {number} */
	    var s = box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(pointA, pointB, box2d.b2Vec2.s_t0), normal);
	    if (s < 0) {
	      this.m_axis.SelfNeg();
	      s = -s;
	    }
	    return s;
	  } else {
	    // Two points on A and one or two points on B.
	    this.m_type = box2d.b2SeparationFunctionType.e_faceA;
	    /** @type {box2d.b2Vec2} */
	    var localPointA1 = this.m_proxyA.GetVertex(cache.indexA[0]);
	    /** @type {box2d.b2Vec2} */
	    var localPointA2 = this.m_proxyA.GetVertex(cache.indexA[1]);

	    box2d.b2Cross_V2_S(box2d.b2Sub_V2_V2(localPointA2, localPointA1, box2d.b2Vec2.s_t0), 1.0, this.m_axis).SelfNormalize();
	    /** type {box2d.b2Vec2} */
	    var normal = box2d.b2Mul_R_V2(xfA.q, this.m_axis, box2d.b2TimeOfImpact.s_normal);

	    box2d.b2Mid_V2_V2(localPointA1, localPointA2, this.m_localPoint);
	    /** type {box2d.b2Vec2} */
	    var pointA = box2d.b2Mul_X_V2(xfA, this.m_localPoint, box2d.b2TimeOfImpact.s_pointA);

	    /** type {box2d.b2Vec2} */
	    var localPointB = this.m_proxyB.GetVertex(cache.indexB[0]);
	    /** type {box2d.b2Vec2} */
	    var pointB = box2d.b2Mul_X_V2(xfB, localPointB, box2d.b2TimeOfImpact.s_pointB);

	    /** type {number} */
	    var s = box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(pointB, pointA, box2d.b2Vec2.s_t0), normal);
	    if (s < 0) {
	      this.m_axis.SelfNeg();
	      s = -s;
	    }
	    return s;
	  }
	};

	/**
	 * @export
	 * @return {number}
	 * @param {Array.<number>} indexA
	 * @param {Array.<number>} indexB
	 * @param {number} t
	 */
	box2d.b2SeparationFunction.prototype.FindMinSeparation = function (indexA, indexB, t) {
	  /** @type {box2d.b2Transform} */
	  var xfA = box2d.b2TimeOfImpact.s_xfA;
	  /** @type {box2d.b2Transform} */
	  var xfB = box2d.b2TimeOfImpact.s_xfB;
	  this.m_sweepA.GetTransform(xfA, t);
	  this.m_sweepB.GetTransform(xfB, t);

	  switch (this.m_type) {
	    case box2d.b2SeparationFunctionType.e_points:
	      {
	        /** @type {box2d.b2Vec2} */
	        var axisA = box2d.b2MulT_R_V2(xfA.q, this.m_axis, box2d.b2TimeOfImpact.s_axisA);
	        /** @type {box2d.b2Vec2} */
	        var axisB = box2d.b2MulT_R_V2(xfB.q, box2d.b2Vec2.s_t0.Copy(this.m_axis).SelfNeg(), box2d.b2TimeOfImpact.s_axisB);

	        indexA[0] = this.m_proxyA.GetSupport(axisA);
	        indexB[0] = this.m_proxyB.GetSupport(axisB);

	        /** @type {box2d.b2Vec2} */
	        var localPointA = this.m_proxyA.GetVertex(indexA[0]);
	        /** @type {box2d.b2Vec2} */
	        var localPointB = this.m_proxyB.GetVertex(indexB[0]);

	        /** @type {box2d.b2Vec2} */
	        var pointA = box2d.b2Mul_X_V2(xfA, localPointA, box2d.b2TimeOfImpact.s_pointA);
	        /** @type {box2d.b2Vec2} */
	        var pointB = box2d.b2Mul_X_V2(xfB, localPointB, box2d.b2TimeOfImpact.s_pointB);

	        /** @type {number} */
	        var separation = box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(pointB, pointA, box2d.b2Vec2.s_t0), this.m_axis);
	        return separation;
	      }

	    case box2d.b2SeparationFunctionType.e_faceA:
	      {
	        /** @type {box2d.b2Vec2} */
	        var normal = box2d.b2Mul_R_V2(xfA.q, this.m_axis, box2d.b2TimeOfImpact.s_normal);
	        /** type {box2d.b2Vec2} */
	        var pointA = box2d.b2Mul_X_V2(xfA, this.m_localPoint, box2d.b2TimeOfImpact.s_pointA);

	        /** type {box2d.b2Vec2} */
	        var axisB = box2d.b2MulT_R_V2(xfB.q, box2d.b2Vec2.s_t0.Copy(normal).SelfNeg(), box2d.b2TimeOfImpact.s_axisB);

	        indexA[0] = -1;
	        indexB[0] = this.m_proxyB.GetSupport(axisB);

	        /** type {box2d.b2Vec2} */
	        var localPointB = this.m_proxyB.GetVertex(indexB[0]);
	        /** type {box2d.b2Vec2} */
	        var pointB = box2d.b2Mul_X_V2(xfB, localPointB, box2d.b2TimeOfImpact.s_pointB);

	        /** type {number} */
	        var separation = box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(pointB, pointA, box2d.b2Vec2.s_t0), normal);
	        return separation;
	      }

	    case box2d.b2SeparationFunctionType.e_faceB:
	      {
	        /** type {box2d.b2Vec2} */
	        var normal = box2d.b2Mul_R_V2(xfB.q, this.m_axis, box2d.b2TimeOfImpact.s_normal);
	        /** type {box2d.b2Vec2} */
	        var pointB = box2d.b2Mul_X_V2(xfB, this.m_localPoint, box2d.b2TimeOfImpact.s_pointB);

	        /** type {box2d.b2Vec2} */
	        var axisA = box2d.b2MulT_R_V2(xfA.q, box2d.b2Vec2.s_t0.Copy(normal).SelfNeg(), box2d.b2TimeOfImpact.s_axisA);

	        indexB[0] = -1;
	        indexA[0] = this.m_proxyA.GetSupport(axisA);

	        /** type {box2d.b2Vec2} */
	        var localPointA = this.m_proxyA.GetVertex(indexA[0]);
	        /** type {box2d.b2Vec2} */
	        var pointA = box2d.b2Mul_X_V2(xfA, localPointA, box2d.b2TimeOfImpact.s_pointA);

	        /** type {number} */
	        var separation = box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(pointA, pointB, box2d.b2Vec2.s_t0), normal);
	        return separation;
	      }

	    default:
	      if (box2d.ENABLE_ASSERTS) {
	        box2d.b2Assert(false);
	      }
	      indexA[0] = -1;
	      indexB[0] = -1;
	      return 0;
	  }
	};

	/**
	 * @export
	 * @return {number}
	 * @param {number} indexA
	 * @param {number} indexB
	 * @param {number} t
	 */
	box2d.b2SeparationFunction.prototype.Evaluate = function (indexA, indexB, t) {
	  /** @type {box2d.b2Transform} */
	  var xfA = box2d.b2TimeOfImpact.s_xfA;
	  /** @type {box2d.b2Transform} */
	  var xfB = box2d.b2TimeOfImpact.s_xfB;
	  this.m_sweepA.GetTransform(xfA, t);
	  this.m_sweepB.GetTransform(xfB, t);

	  switch (this.m_type) {
	    case box2d.b2SeparationFunctionType.e_points:
	      {
	        /** @type {box2d.b2Vec2} */
	        var localPointA = this.m_proxyA.GetVertex(indexA);
	        /** @type {box2d.b2Vec2} */
	        var localPointB = this.m_proxyB.GetVertex(indexB);

	        /** @type {box2d.b2Vec2} */
	        var pointA = box2d.b2Mul_X_V2(xfA, localPointA, box2d.b2TimeOfImpact.s_pointA);
	        /** @type {box2d.b2Vec2} */
	        var pointB = box2d.b2Mul_X_V2(xfB, localPointB, box2d.b2TimeOfImpact.s_pointB);
	        /** @type {number} */
	        var separation = box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(pointB, pointA, box2d.b2Vec2.s_t0), this.m_axis);

	        return separation;
	      }

	    case box2d.b2SeparationFunctionType.e_faceA:
	      {
	        /** @type {box2d.b2Vec2} */
	        var normal = box2d.b2Mul_R_V2(xfA.q, this.m_axis, box2d.b2TimeOfImpact.s_normal);
	        /** type {box2d.b2Vec2} */
	        var pointA = box2d.b2Mul_X_V2(xfA, this.m_localPoint, box2d.b2TimeOfImpact.s_pointA);

	        /** type {box2d.b2Vec2} */
	        var localPointB = this.m_proxyB.GetVertex(indexB);
	        /** type {box2d.b2Vec2} */
	        var pointB = box2d.b2Mul_X_V2(xfB, localPointB, box2d.b2TimeOfImpact.s_pointB);

	        /** type {number} */
	        var separation = box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(pointB, pointA, box2d.b2Vec2.s_t0), normal);
	        return separation;
	      }

	    case box2d.b2SeparationFunctionType.e_faceB:
	      {
	        /** type {box2d.b2Vec2} */
	        var normal = box2d.b2Mul_R_V2(xfB.q, this.m_axis, box2d.b2TimeOfImpact.s_normal);
	        /** type {box2d.b2Vec2} */
	        var pointB = box2d.b2Mul_X_V2(xfB, this.m_localPoint, box2d.b2TimeOfImpact.s_pointB);

	        /** type {box2d.b2Vec2} */
	        var localPointA = this.m_proxyA.GetVertex(indexA);
	        /** type {box2d.b2Vec2} */
	        var pointA = box2d.b2Mul_X_V2(xfA, localPointA, box2d.b2TimeOfImpact.s_pointA);

	        /** type {number} */
	        var separation = box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(pointA, pointB, box2d.b2Vec2.s_t0), normal);
	        return separation;
	      }

	    default:
	      if (box2d.ENABLE_ASSERTS) {
	        box2d.b2Assert(false);
	      }
	      return 0;
	  }
	};

	/**
	 * Compute the upper bound on time before two shapes penetrate.
	 * Time is represented as a fraction between [0,tMax]. This uses
	 * a swept separating axis and may miss some intermediate,
	 * non-tunneling collision. If you change the time interval, you
	 * should call this function again.
	 * Note: use box2d.b2ShapeDistance to compute the contact point and
	 * normal at the time of impact.
	 * @export
	 * @return {void}
	 * @param {box2d.b2TOIOutput} output
	 * @param {box2d.b2TOIInput} input
	 */
	box2d.b2TimeOfImpact = function (output, input) {
	  var timer = box2d.b2TimeOfImpact.s_timer.Reset();

	  ++box2d.b2_toiCalls;

	  output.state = box2d.b2TOIOutputState.e_unknown;
	  output.t = input.tMax;

	  /** @type {box2d.b2DistanceProxy} */
	  var proxyA = input.proxyA;
	  /** @type {box2d.b2DistanceProxy} */
	  var proxyB = input.proxyB;

	  /** @type {box2d.b2Sweep} */
	  var sweepA = box2d.b2TimeOfImpact.s_sweepA.Copy(input.sweepA);
	  /** @type {box2d.b2Sweep} */
	  var sweepB = box2d.b2TimeOfImpact.s_sweepB.Copy(input.sweepB);

	  // Large rotations can make the root finder fail, so we normalize the
	  // sweep angles.
	  sweepA.Normalize();
	  sweepB.Normalize();

	  /** @type {number} */
	  var tMax = input.tMax;

	  /** @type {number} */
	  var totalRadius = proxyA.m_radius + proxyB.m_radius;
	  /** @type {number} */
	  var target = box2d.b2Max(box2d.b2_linearSlop, totalRadius - 3 * box2d.b2_linearSlop);
	  /** @type {number} */
	  var tolerance = 0.25 * box2d.b2_linearSlop;
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(target > tolerance);
	  }

	  /** @type {number} */
	  var t1 = 0;
	  /** @type {number} */
	  var k_maxIterations = 20; // TODO_ERIN b2Settings
	  /** @type {number} */
	  var iter = 0;

	  // Prepare input for distance query.
	  /** @type {box2d.b2SimplexCache} */
	  var cache = box2d.b2TimeOfImpact.s_cache;
	  cache.count = 0;
	  /** @type {box2d.b2DistanceInput} */
	  var distanceInput = box2d.b2TimeOfImpact.s_distanceInput;
	  distanceInput.proxyA = input.proxyA;
	  distanceInput.proxyB = input.proxyB;
	  distanceInput.useRadii = false;

	  // The outer loop progressively attempts to compute new separating axes.
	  // This loop terminates when an axis is repeated (no progress is made).
	  for (;;) {
	    /** @type {box2d.b2Transform} */
	    var xfA = box2d.b2TimeOfImpact.s_xfA;
	    /** @type {box2d.b2Transform} */
	    var xfB = box2d.b2TimeOfImpact.s_xfB;
	    sweepA.GetTransform(xfA, t1);
	    sweepB.GetTransform(xfB, t1);

	    // Get the distance between shapes. We can also use the results
	    // to get a separating axis.
	    distanceInput.transformA.Copy(xfA);
	    distanceInput.transformB.Copy(xfB);
	    /** @type {box2d.b2DistanceOutput} */
	    var distanceOutput = box2d.b2TimeOfImpact.s_distanceOutput;
	    box2d.b2ShapeDistance(distanceOutput, cache, distanceInput);

	    // If the shapes are overlapped, we give up on continuous collision.
	    if (distanceOutput.distance <= 0) {
	      // Failure!
	      output.state = box2d.b2TOIOutputState.e_overlapped;
	      output.t = 0;
	      break;
	    }

	    if (distanceOutput.distance < target + tolerance) {
	      // Victory!
	      output.state = box2d.b2TOIOutputState.e_touching;
	      output.t = t1;
	      break;
	    }

	    // Initialize the separating axis.
	    /** @type {box2d.b2SeparationFunction} */
	    var fcn = box2d.b2TimeOfImpact.s_fcn;
	    fcn.Initialize(cache, proxyA, sweepA, proxyB, sweepB, t1);
	    /*
	    #if 0
	        // Dump the curve seen by the root finder
	        {
	          const int32 N = 100;
	          float32 dx = 1.0f / N;
	          float32 xs[N+1];
	          float32 fs[N+1];
	           float32 x = 0.0f;
	           for (int32 i = 0; i <= N; ++i)
	          {
	            sweepA.GetTransform(&xfA, x);
	            sweepB.GetTransform(&xfB, x);
	            float32 f = fcn.Evaluate(xfA, xfB) - target;
	             printf("%g %g\n", x, f);
	             xs[i] = x;
	            fs[i] = f;
	             x += dx;
	          }
	        }
	    #endif
	    */

	    // Compute the TOI on the separating axis. We do this by successively
	    // resolving the deepest point. This loop is bounded by the number of vertices.
	    /** @type {boolean} */
	    var done = false;
	    /** @type {number} */
	    var t2 = tMax;
	    /** @type {number} */
	    var pushBackIter = 0;
	    for (;;) {
	      // Find the deepest point at t2. Store the witness point indices.
	      /** @type Array.<number>} */
	      var indexA = box2d.b2TimeOfImpact.s_indexA;
	      /** @type Array.<number>} */
	      var indexB = box2d.b2TimeOfImpact.s_indexB;
	      /** @type {number} */
	      var s2 = fcn.FindMinSeparation(indexA, indexB, t2);

	      // Is the final configuration separated?
	      if (s2 > target + tolerance) {
	        // Victory!
	        output.state = box2d.b2TOIOutputState.e_separated;
	        output.t = tMax;
	        done = true;
	        break;
	      }

	      // Has the separation reached tolerance?
	      if (s2 > target - tolerance) {
	        // Advance the sweeps
	        t1 = t2;
	        break;
	      }

	      // Compute the initial separation of the witness points.
	      /** @type {number} */
	      var s1 = fcn.Evaluate(indexA[0], indexB[0], t1);

	      // Check for initial overlap. This might happen if the root finder
	      // runs out of iterations.
	      if (s1 < target - tolerance) {
	        output.state = box2d.b2TOIOutputState.e_failed;
	        output.t = t1;
	        done = true;
	        break;
	      }

	      // Check for touching
	      if (s1 <= target + tolerance) {
	        // Victory! t1 should hold the TOI (could be 0.0).
	        output.state = box2d.b2TOIOutputState.e_touching;
	        output.t = t1;
	        done = true;
	        break;
	      }

	      // Compute 1D root of: f(x) - target = 0
	      /** @type {number} */
	      var rootIterCount = 0;
	      /** @type {number} */
	      var a1 = t1;
	      /** @type {number} */
	      var a2 = t2;
	      for (;;) {
	        // Use a mix of the secant rule and bisection.
	        /** @type {number} */
	        var t = 0;
	        if (rootIterCount & 1) {
	          // Secant rule to improve convergence.
	          t = a1 + (target - s1) * (a2 - a1) / (s2 - s1);
	        } else {
	          // Bisection to guarantee progress.
	          t = 0.5 * (a1 + a2);
	        }

	        ++rootIterCount;
	        ++box2d.b2_toiRootIters;

	        /** @type {number} */
	        var s = fcn.Evaluate(indexA[0], indexB[0], t);

	        if (box2d.b2Abs(s - target) < tolerance) {
	          // t2 holds a tentative value for t1
	          t2 = t;
	          break;
	        }

	        // Ensure we continue to bracket the root.
	        if (s > target) {
	          a1 = t;
	          s1 = s;
	        } else {
	          a2 = t;
	          s2 = s;
	        }

	        if (rootIterCount === 50) {
	          break;
	        }
	      }

	      box2d.b2_toiMaxRootIters = box2d.b2Max(box2d.b2_toiMaxRootIters, rootIterCount);

	      ++pushBackIter;

	      if (pushBackIter === box2d.b2_maxPolygonVertices) {
	        break;
	      }
	    }

	    ++iter;
	    ++box2d.b2_toiIters;

	    if (done) {
	      break;
	    }

	    if (iter === k_maxIterations) {
	      // Root finder got stuck. Semi-victory.
	      output.state = box2d.b2TOIOutputState.e_failed;
	      output.t = t1;
	      break;
	    }
	  }

	  box2d.b2_toiMaxIters = box2d.b2Max(box2d.b2_toiMaxIters, iter);

	  var time = timer.GetMilliseconds();
	  box2d.b2_toiMaxTime = box2d.b2Max(box2d.b2_toiMaxTime, time);
	  box2d.b2_toiTime += time;
	};
	box2d.b2TimeOfImpact.s_timer = new box2d.b2Timer();
	box2d.b2TimeOfImpact.s_cache = new box2d.b2SimplexCache();
	box2d.b2TimeOfImpact.s_distanceInput = new box2d.b2DistanceInput();
	box2d.b2TimeOfImpact.s_distanceOutput = new box2d.b2DistanceOutput();
	box2d.b2TimeOfImpact.s_xfA = new box2d.b2Transform();
	box2d.b2TimeOfImpact.s_xfB = new box2d.b2Transform();
	box2d.b2TimeOfImpact.s_indexA = box2d.b2MakeNumberArray(1);
	box2d.b2TimeOfImpact.s_indexB = box2d.b2MakeNumberArray(1);
	box2d.b2TimeOfImpact.s_fcn = new box2d.b2SeparationFunction();
	box2d.b2TimeOfImpact.s_sweepA = new box2d.b2Sweep();
	box2d.b2TimeOfImpact.s_sweepB = new box2d.b2Sweep();
	box2d.b2TimeOfImpact.s_pointA = new box2d.b2Vec2();
	box2d.b2TimeOfImpact.s_pointB = new box2d.b2Vec2();
	box2d.b2TimeOfImpact.s_normal = new box2d.b2Vec2();
	box2d.b2TimeOfImpact.s_axisA = new box2d.b2Vec2();
	box2d.b2TimeOfImpact.s_axisB = new box2d.b2Vec2();

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(6);

	__webpack_require__(17);

	/**
	 * The body type.
	 * static: zero mass, zero velocity, may be manually moved
	 * kinematic: zero mass, non-zero velocity set by user, moved by solver
	 * dynamic: positive mass, non-zero velocity determined by forces, moved by solver
	 * @export
	 * @enum
	 */
	box2d.b2BodyType = {
	  b2_unknown: -1,
	  b2_staticBody: 0,
	  b2_kinematicBody: 1,
	  b2_dynamicBody: 2,
	  b2_bulletBody: 3 // TODO_ERIN
	};

	/**
	 * A body definition holds all the data needed to construct a
	 * rigid body.
	 * You can safely re-use body definitions. Shapes are added to a
	 * body after construction.
	 * @export
	 * @constructor
	 */
	/*
	 * Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
	 *
	 * This software is provided 'as-is', without any express or implied
	 * warranty.  In no event will the authors be held liable for any damages
	 * arising from the use of this software.
	 * Permission is granted to anyone to use this software for any purpose,
	 * including commercial applications, and to alter it and redistribute it
	 * freely, subject to the following restrictions:
	 * 1. The origin of this software must not be misrepresented; you must not
	 * claim that you wrote the original software. If you use this software
	 * in a product, an acknowledgment in the product documentation would be
	 * appreciated but is not required.
	 * 2. Altered source versions must be plainly marked as such, and must not be
	 * misrepresented as being the original software.
	 * 3. This notice may not be removed or altered from any source distribution.
	 */

	box2d.b2BodyDef = function () {
	  this.position = new box2d.b2Vec2(0, 0);
	  this.linearVelocity = new box2d.b2Vec2(0, 0);
	};

	/**
	 * The body type: static, kinematic, or dynamic.
	 * Note: if a dynamic body would have zero mass, the mass is set
	 * to one.
	 * @export
	 * @type {box2d.b2BodyType}
	 */
	box2d.b2BodyDef.prototype.type = box2d.b2BodyType.b2_staticBody;

	/**
	 * The world position of the body. Avoid creating bodies at the
	 * origin since this can lead to many overlapping shapes.
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2BodyDef.prototype.position = null;

	/**
	 * The world angle of the body in radians.
	 * @export
	 * @type {number}
	 */
	box2d.b2BodyDef.prototype.angle = 0;

	/**
	 * The linear velocity of the body's origin in world
	 * co-ordinates.
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2BodyDef.prototype.linearVelocity = null;

	/**
	 * The angular velocity of the body.
	 * @export
	 * @type {number}
	 */
	box2d.b2BodyDef.prototype.angularVelocity = 0;

	/**
	 * Linear damping is use to reduce the linear velocity. The
	 * damping parameter can be larger than 1.0f but the damping
	 * effect becomes sensitive to the time step when the damping
	 * parameter is large.
	 * @export
	 * @type {number}
	 */
	box2d.b2BodyDef.prototype.linearDamping = 0;

	/**
	 * Angular damping is use to reduce the angular velocity. The
	 * damping parameter can be larger than 1.0f but the damping
	 * effect becomes sensitive to the time step when the damping
	 * parameter is large.
	 * @export
	 * @type {number}
	 */
	box2d.b2BodyDef.prototype.angularDamping = 0;

	/**
	 * Set this flag to false if this body should never fall asleep.
	 * Note that this increases CPU usage.
	 * @export
	 * @type {boolean}
	 */
	box2d.b2BodyDef.prototype.allowSleep = true;

	/**
	 * Is this body initially awake or sleeping?
	 * @export
	 * @type {boolean}
	 */
	box2d.b2BodyDef.prototype.awake = true;

	/**
	 * Should this body be prevented from rotating? Useful for
	 * characters.
	 * @export
	 * @type {boolean}
	 */
	box2d.b2BodyDef.prototype.fixedRotation = false;

	/**
	 * Is this a fast moving body that should be prevented from
	 * tunneling through other moving bodies? Note that all bodies
	 * are prevented from tunneling through kinematic and static
	 * bodies. This setting is only considered on dynamic bodies.
	 * warning You should use this flag sparingly since it increases
	 * processing time.
	 * @export
	 * @type {boolean}
	 */
	box2d.b2BodyDef.prototype.bullet = false;

	/**
	 * Does this body start out active?
	 * @export
	 * @type {boolean}
	 */
	box2d.b2BodyDef.prototype.active = true;

	/**
	 * Use this to store application specific body data.
	 * @export
	 * @type {*}
	 */
	box2d.b2BodyDef.prototype.userData = null;

	/**
	 * Scale the gravity applied to this body.
	 * @export
	 * @type {number}
	 */
	box2d.b2BodyDef.prototype.gravityScale = 1;

	/**
	 * A rigid body. These are created via
	 * box2d.b2World::CreateBody.
	 * @export
	 * @constructor
	 * @param {box2d.b2BodyDef} bd
	 * @param {box2d.b2World} world
	 */
	box2d.b2Body = function (bd, world) {
	  this.m_xf = new box2d.b2Transform();
	  this.m_out_xf = new box2d.b2Transform();
	  //#if B2_ENABLE_PARTICLE
	  this.m_xf0 = new box2d.b2Transform();
	  //#endif
	  this.m_sweep = new box2d.b2Sweep();
	  this.m_out_sweep = new box2d.b2Sweep();
	  this.m_linearVelocity = new box2d.b2Vec2();
	  this.m_out_linearVelocity = new box2d.b2Vec2();
	  this.m_force = new box2d.b2Vec2();

	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(bd.position.IsValid());
	  }
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(bd.linearVelocity.IsValid());
	  }
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(box2d.b2IsValid(bd.angle));
	  }
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(box2d.b2IsValid(bd.angularVelocity));
	  }
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(box2d.b2IsValid(bd.gravityScale) && bd.gravityScale >= 0);
	  }
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(box2d.b2IsValid(bd.angularDamping) && bd.angularDamping >= 0);
	  }
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(box2d.b2IsValid(bd.linearDamping) && bd.linearDamping >= 0);
	  }

	  if (bd.bullet) {
	    this.m_flag_bulletFlag = true;
	  }
	  if (bd.fixedRotation) {
	    this.m_flag_fixedRotationFlag = true;
	  }
	  if (bd.allowSleep) {
	    this.m_flag_autoSleepFlag = true;
	  }
	  if (bd.awake) {
	    this.m_flag_awakeFlag = true;
	  }
	  if (bd.active) {
	    this.m_flag_activeFlag = true;
	  }

	  this.m_world = world;

	  this.m_xf.p.Copy(bd.position);
	  this.m_xf.q.SetAngle(bd.angle);
	  //#if B2_ENABLE_PARTICLE
	  this.m_xf0.Copy(this.m_xf);
	  //#endif

	  this.m_sweep.localCenter.SetZero();
	  this.m_sweep.c0.Copy(this.m_xf.p);
	  this.m_sweep.c.Copy(this.m_xf.p);
	  this.m_sweep.a0 = bd.angle;
	  this.m_sweep.a = bd.angle;
	  this.m_sweep.alpha0 = 0;

	  this.m_linearVelocity.Copy(bd.linearVelocity);
	  this.m_angularVelocity = bd.angularVelocity;

	  this.m_linearDamping = bd.linearDamping;
	  this.m_angularDamping = bd.angularDamping;
	  this.m_gravityScale = bd.gravityScale;

	  this.m_force.SetZero();
	  this.m_torque = 0;

	  this.m_sleepTime = 0;

	  this.m_type = bd.type;

	  if (bd.type === box2d.b2BodyType.b2_dynamicBody) {
	    this.m_mass = 1;
	    this.m_invMass = 1;
	  } else {
	    this.m_mass = 0;
	    this.m_invMass = 0;
	  }

	  this.m_I = 0;
	  this.m_invI = 0;

	  this.m_userData = bd.userData;

	  this.m_fixtureList = null;
	  this.m_fixtureCount = 0;

	  //#if B2_ENABLE_CONTROLLER
	  this.m_controllerList = null;
	  this.m_controllerCount = 0;
	  //#endif
	};

	/**
	 * @export
	 * @type {boolean}
	 */
	box2d.b2Body.prototype.m_flag_islandFlag = false;
	/**
	 * @export
	 * @type {boolean}
	 */
	box2d.b2Body.prototype.m_flag_awakeFlag = false;
	/**
	 * @export
	 * @type {boolean}
	 */
	box2d.b2Body.prototype.m_flag_autoSleepFlag = false;
	/**
	 * @export
	 * @type {boolean}
	 */
	box2d.b2Body.prototype.m_flag_bulletFlag = false;
	/**
	 * @export
	 * @type {boolean}
	 */
	box2d.b2Body.prototype.m_flag_fixedRotationFlag = false;
	/**
	 * @export
	 * @type {boolean}
	 */
	box2d.b2Body.prototype.m_flag_activeFlag = false;
	/**
	 * @export
	 * @type {boolean}
	 */
	box2d.b2Body.prototype.m_flag_toiFlag = false;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Body.prototype.m_islandIndex = 0;
	/**
	 * @export
	 * @type {box2d.b2World}
	 */
	box2d.b2Body.prototype.m_world = null;
	/**
	 * @export
	 * @type {box2d.b2Transform}
	 */
	box2d.b2Body.prototype.m_xf = null; // the body origin transform
	/**
	 * @export
	 * @type {box2d.b2Transform}
	 */
	box2d.b2Body.prototype.m_out_xf = null;
	//#if B2_ENABLE_PARTICLE
	/**
	 * @export
	 * @type {box2d.b2Transform}
	 */
	box2d.b2Body.prototype.m_xf0 = null;
	//#endif
	/**
	 * @export
	 * @type {box2d.b2Sweep}
	 */
	box2d.b2Body.prototype.m_sweep = null; // the swept motion for CCD
	/**
	 * @export
	 * @type {box2d.b2Sweep}
	 */
	box2d.b2Body.prototype.m_out_sweep = null;
	/**
	 * @export
	 * @type {box2d.b2JointEdge}
	 */
	box2d.b2Body.prototype.m_jointList = null;
	/**
	 * @export
	 * @type {box2d.b2ContactEdge}
	 */
	box2d.b2Body.prototype.m_contactList = null;
	/**
	 * @export
	 * @type {box2d.b2Body}
	 */
	box2d.b2Body.prototype.m_prev = null;
	/**
	 * @export
	 * @type {box2d.b2Body}
	 */
	box2d.b2Body.prototype.m_next = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2Body.prototype.m_linearVelocity = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2Body.prototype.m_out_linearVelocity = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Body.prototype.m_angularVelocity = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Body.prototype.m_linearDamping = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Body.prototype.m_angularDamping = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Body.prototype.m_gravityScale = 1;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2Body.prototype.m_force = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Body.prototype.m_torque = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Body.prototype.m_sleepTime = 0;
	/**
	 * @export
	 * @type {box2d.b2BodyType}
	 */
	box2d.b2Body.prototype.m_type = box2d.b2BodyType.b2_staticBody;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Body.prototype.m_mass = 1;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Body.prototype.m_invMass = 1;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Body.prototype.m_I = 0; // Rotational inertia about the center of mass.
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Body.prototype.m_invI = 0;
	/**
	 * @export
	 * @type {*}
	 */
	box2d.b2Body.prototype.m_userData = null;
	/**
	 * @export
	 * @type {box2d.b2Fixture}
	 */
	box2d.b2Body.prototype.m_fixtureList = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Body.prototype.m_fixtureCount = 0;

	//#if B2_ENABLE_CONTROLLER

	/**
	 * @see box2d.b2Controller list
	 * @export
	 * @type {box2d.b2ControllerEdge}
	 */
	box2d.b2Body.prototype.m_controllerList = null;

	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Body.prototype.m_controllerCount = 0;

	//#endif

	/**
	 * @export
	 * @return {box2d.b2Fixture}
	 * @param {box2d.b2FixtureDef|box2d.b2Shape} a
	 * @param {number=} b
	 */
	box2d.b2Body.prototype.CreateFixture = function (a, b) {
	  if (a instanceof box2d.b2FixtureDef) {
	    return this.CreateFixture_Def(a);
	  } else if (a instanceof box2d.b2Shape && typeof b === 'number') {
	    return this.CreateFixture_Shape_Density(a, b);
	  } else {
	    throw new Error();
	  }
	};

	/**
	 * Creates a fixture and attach it to this body. Use this
	 * function if you need to set some fixture parameters, like
	 * friction. Otherwise you can create the fixture directly from
	 * a shape.
	 * If the density is non-zero, this function automatically
	 * updates the mass of the body. Contacts are not created until
	 * the next time step.
	 * warning This function is locked during callbacks.
	 * @export
	 * @return {box2d.b2Fixture}
	 * @param {box2d.b2FixtureDef} def the fixture definition.
	 */
	box2d.b2Body.prototype.CreateFixture_Def = function (def) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(!this.m_world.IsLocked());
	  }
	  if (this.m_world.IsLocked()) {
	    return null;
	  }

	  var fixture = new box2d.b2Fixture();
	  fixture.Create(this, def);

	  if (this.m_flag_activeFlag) {
	    var broadPhase = this.m_world.m_contactManager.m_broadPhase;
	    fixture.CreateProxies(broadPhase, this.m_xf);
	  }

	  fixture.m_next = this.m_fixtureList;
	  this.m_fixtureList = fixture;
	  ++this.m_fixtureCount;

	  fixture.m_body = this;

	  // Adjust mass properties if needed.
	  if (fixture.m_density > 0) {
	    this.ResetMassData();
	  }

	  // Let the world know we have a new fixture. This will cause new contacts
	  // to be created at the beginning of the next time step.
	  this.m_world.m_flag_newFixture = true;

	  return fixture;
	};

	/**
	 * Creates a fixture from a shape and attach it to this body.
	 * This is a convenience function. Use b2FixtureDef if you need
	 * to set parameters like friction, restitution, user data, or
	 * filtering.
	 * If the density is non-zero, this function automatically
	 * updates the mass of the body.
	 * warning This function is locked during callbacks.
	 * @export
	 * @return {box2d.b2Fixture}
	 * @param {box2d.b2Shape} shape the shape to be cloned.
	 * @param {number} density the shape density (set to zero for static bodies).
	 */
	box2d.b2Body.prototype.CreateFixture_Shape_Density = function (shape, density) {
	  density = typeof density === 'number' ? density : 0;

	  var def = box2d.b2Body.prototype.CreateFixture_Shape_Density.s_def;
	  def.shape = shape;
	  def.density = density;
	  return this.CreateFixture_Def(def);
	};
	box2d.b2Body.prototype.CreateFixture_Shape_Density.s_def = new box2d.b2FixtureDef();

	/**
	 * Destroy a fixture. This removes the fixture from the
	 * broad-phase and destroys all contacts associated with this
	 * fixture. This will automatically adjust the mass of the body
	 * if the body is dynamic and the fixture has positive density.
	 * All fixtures attached to a body are implicitly destroyed when
	 * the body is destroyed.
	 * warning This function is locked during callbacks.
	 * @export
	 * @return {void}
	 * @param {box2d.b2Fixture} fixture the fixture to be removed.
	 */
	box2d.b2Body.prototype.DestroyFixture = function (fixture) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(!this.m_world.IsLocked());
	  }
	  if (this.m_world.IsLocked()) {
	    return;
	  }

	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(fixture.m_body === this);
	  }

	  // Remove the fixture from this body's singly linked list.
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(this.m_fixtureCount > 0);
	  }
	  var node = this.m_fixtureList;
	  var ppF = null;
	  var found = false;
	  while (node !== null) {
	    if (node === fixture) {
	      if (ppF) ppF.m_next = fixture.m_next;else this.m_fixtureList = fixture.m_next;
	      found = true;
	      break;
	    }

	    ppF = node;
	    node = node.m_next;
	  }

	  // You tried to remove a shape that is not attached to this body.
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(found);
	  }

	  // Destroy any contacts associated with the fixture.
	  var edge = this.m_contactList;
	  while (edge) {
	    var c = edge.contact;
	    edge = edge.next;

	    var fixtureA = c.GetFixtureA();
	    var fixtureB = c.GetFixtureB();

	    if (fixture === fixtureA || fixture === fixtureB) {
	      // This destroys the contact and removes it from
	      // this body's contact list.
	      this.m_world.m_contactManager.Destroy(c);
	    }
	  }

	  if (this.m_flag_activeFlag) {
	    var broadPhase = this.m_world.m_contactManager.m_broadPhase;
	    fixture.DestroyProxies(broadPhase);
	  }

	  fixture.Destroy();
	  fixture.m_body = null;
	  fixture.m_next = null;

	  --this.m_fixtureCount;

	  // Reset the mass data.
	  this.ResetMassData();
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2Transform|box2d.b2Vec2|number} a
	 * @param {number=} b
	 * @param {number=} c
	 */
	box2d.b2Body.prototype.SetTransform = function (a, b, c) {
	  if (a instanceof box2d.b2Vec2 && typeof b === 'number') {
	    this.SetTransform_X_Y_A(a.x, a.y, b);
	  } else if (a instanceof box2d.b2Transform) {
	    this.SetTransform_X_Y_A(a.p.x, a.p.y, a.GetAngle());
	  } else if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
	    this.SetTransform_X_Y_A(a, b, c);
	  } else {
	    throw new Error();
	  }
	};

	/**
	 * Set the position of the body's origin and rotation.
	 * Manipulating a body's transform may cause non-physical
	 * behavior.
	 * Note: contacts are updated on the next call to b2World::Step.
	 * @export
	 * @return {void}
	 * @param {box2d.b2Vec2} position the world position of the body's local origin.
	 * @param {number} angle the world rotation in radians.
	 */
	box2d.b2Body.prototype.SetTransform_V2_A = function (position, angle) {
	  this.SetTransform_X_Y_A(position.x, position.y, angle);
	};

	/**
	 * @export
	 * @return {void}
	 * @param {number} x
	 * @param {number} y
	 * @param {number} angle
	 */
	box2d.b2Body.prototype.SetTransform_X_Y_A = function (x, y, angle) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(!this.m_world.IsLocked());
	  }
	  if (this.m_world.IsLocked()) {
	    return;
	  }

	  if (this.m_xf.p.x === x && this.m_xf.p.y === y && this.m_xf.q.GetAngle() === angle) {
	    return;
	  }

	  this.m_xf.q.SetAngle(angle);
	  this.m_xf.p.Set(x, y);
	  //#if B2_ENABLE_PARTICLE
	  this.m_xf0.Copy(this.m_xf);
	  //#endif

	  box2d.b2Mul_X_V2(this.m_xf, this.m_sweep.localCenter, this.m_sweep.c);
	  this.m_sweep.a = angle;

	  this.m_sweep.c0.Copy(this.m_sweep.c);
	  this.m_sweep.a0 = angle;

	  var broadPhase = this.m_world.m_contactManager.m_broadPhase;
	  for (var f = this.m_fixtureList; f; f = f.m_next) {
	    f.Synchronize(broadPhase, this.m_xf, this.m_xf);
	  }
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2Transform} xf
	 */
	box2d.b2Body.prototype.SetTransform_X = function (xf) {
	  this.SetTransform_X_Y_A(xf.p.x, xf.p.y, xf.GetAngle());
	};

	/**
	 * Get the body transform for the body's origin.
	 * @export
	 * @return {box2d.b2Transform} the world transform of the body's origin.
	 * @param {box2d.b2Transform=} out
	 */
	box2d.b2Body.prototype.GetTransform = function (out) {
	  out = out || this.m_out_xf;
	  return out.Copy(this.m_xf);
	};

	/**
	 * Get the world body origin position.
	 * @export
	 * @return {box2d.b2Vec2} the world position of the body's origin.
	 * @param {box2d.b2Vec2=} out
	 */
	box2d.b2Body.prototype.GetPosition = function (out) {
	  out = out || this.m_out_xf.p;
	  return out.Copy(this.m_xf.p);
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2Vec2} position
	 */
	box2d.b2Body.prototype.SetPosition = function (position) {
	  this.SetTransform_V2_A(position, this.GetAngle());
	};

	/**
	 * @export
	 * @return {void}
	 * @param {number} x
	 * @param {number} y
	 */
	box2d.b2Body.prototype.SetPositionXY = function (x, y) {
	  this.SetTransform_X_Y_A(x, y, this.GetAngle());
	};

	/**
	 * Get the world body origin rotation.
	 * @export
	 * @return {box2d.b2Rot} the world rotation of the body's origin.
	 * @param {box2d.b2Rot=} out
	 */
	box2d.b2Body.prototype.GetRotation = function (out) {
	  out = out || this.m_out_xf.q;
	  return out.Copy(this.m_xf.q);
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2Rot} rotation
	 */
	box2d.b2Body.prototype.SetRotation = function (rotation) {
	  this.SetTransform_V2_A(this.GetPosition(), rotation.GetAngle());
	};

	/**
	 * Get the angle in radians.
	 * @export
	 * @return {number} the current world rotation angle in radians.
	 */
	box2d.b2Body.prototype.GetAngle = function () {
	  return this.m_sweep.a;
	};

	/**
	 * @export
	 * @return {void}
	 * @param {number} angle
	 */
	box2d.b2Body.prototype.SetAngle = function (angle) {
	  this.SetTransform_V2_A(this.GetPosition(), angle);
	};

	/**
	 * Get the world position of the center of mass.
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2=} out
	 */
	box2d.b2Body.prototype.GetWorldCenter = function (out) {
	  out = out || this.m_out_sweep.c;
	  return out.Copy(this.m_sweep.c);
	};

	/**
	 * Get the local position of the center of mass.
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2=} out
	 */
	box2d.b2Body.prototype.GetLocalCenter = function (out) {
	  out = out || this.m_out_sweep.localCenter;
	  return out.Copy(this.m_sweep.localCenter);
	};

	/**
	 * Set the linear velocity of the center of mass.
	 * @export
	 * @return {void}
	 * @param {box2d.b2Vec2} v the new linear velocity of the center of mass.
	 */
	box2d.b2Body.prototype.SetLinearVelocity = function (v) {
	  if (this.m_type === box2d.b2BodyType.b2_staticBody) {
	    return;
	  }

	  if (box2d.b2Dot_V2_V2(v, v) > 0) {
	    this.SetAwake(true);
	  }

	  this.m_linearVelocity.Copy(v);
	};

	/**
	 * Get the linear velocity of the center of mass.
	 * @export
	 * @return {box2d.b2Vec2} the linear velocity of the center of mass.
	 * @param {box2d.b2Vec2=} out
	 */
	box2d.b2Body.prototype.GetLinearVelocity = function (out) {
	  out = out || this.m_out_linearVelocity;
	  return out.Copy(this.m_linearVelocity);
	};

	/**
	 * Set the angular velocity.
	 * @export
	 * @return {void}
	 * @param {number} w the new angular velocity in radians/second.
	 */
	box2d.b2Body.prototype.SetAngularVelocity = function (w) {
	  if (this.m_type === box2d.b2BodyType.b2_staticBody) {
	    return;
	  }

	  if (w * w > 0) {
	    this.SetAwake(true);
	  }

	  this.m_angularVelocity = w;
	};

	/**
	 * Get the angular velocity.
	 * @export
	 * @return {number} the angular velocity in radians/second.
	 */
	box2d.b2Body.prototype.GetAngularVelocity = function () {
	  return this.m_angularVelocity;
	};

	/**
	 * @export
	 * @return {box2d.b2BodyDef}
	 * @param {box2d.b2BodyDef} bd
	 */
	box2d.b2Body.prototype.GetDefinition = function (bd) {
	  bd.type = this.GetType();
	  bd.allowSleep = this.m_flag_autoSleepFlag;
	  bd.angle = this.GetAngle();
	  bd.angularDamping = this.m_angularDamping;
	  bd.gravityScale = this.m_gravityScale;
	  bd.angularVelocity = this.m_angularVelocity;
	  bd.fixedRotation = this.m_flag_fixedRotationFlag;
	  bd.bullet = this.m_flag_bulletFlag;
	  bd.awake = this.m_flag_awakeFlag;
	  bd.linearDamping = this.m_linearDamping;
	  bd.linearVelocity.Copy(this.GetLinearVelocity());
	  bd.position.Copy(this.GetPosition());
	  bd.userData = this.GetUserData();
	  return bd;
	};

	/**
	 * Apply a force at a world point. If the force is not applied
	 * at the center of mass, it will generate a torque and affect
	 * the angular velocity. This wakes up the body.
	 * @export
	 * @return {void}
	 * @param {box2d.b2Vec2} force the world force vector, usually in Newtons (N).
	 * @param {box2d.b2Vec2} point the world position of the point of application.
	 * @param {boolean=} wake also wake up the body
	 */
	box2d.b2Body.prototype.ApplyForce = function (force, point, wake) {
	  wake = wake || true;

	  if (this.m_type !== box2d.b2BodyType.b2_dynamicBody) {
	    return;
	  }

	  if (wake && !this.m_flag_awakeFlag) {
	    this.SetAwake(true);
	  }

	  // Don't accumulate a force if the body is sleeping.
	  if (this.m_flag_awakeFlag) {
	    this.m_force.x += force.x;
	    this.m_force.y += force.y;
	    this.m_torque += (point.x - this.m_sweep.c.x) * force.y - (point.y - this.m_sweep.c.y) * force.x;
	  }
	};

	/**
	 * Apply a force to the center of mass. This wakes up the body.
	 * @export
	 * @return {void}
	 * @param {box2d.b2Vec2} force the world force vector, usually in Newtons (N).
	 * @param {boolean=} wake also wake up the body
	 */
	box2d.b2Body.prototype.ApplyForceToCenter = function (force, wake) {
	  wake = typeof wake === 'boolean' ? wake : true;

	  if (this.m_type !== box2d.b2BodyType.b2_dynamicBody) {
	    return;
	  }

	  if (wake && !this.m_flag_awakeFlag) {
	    this.SetAwake(true);
	  }

	  // Don't accumulate a force if the body is sleeping.
	  if (this.m_flag_awakeFlag) {
	    this.m_force.x += force.x;
	    this.m_force.y += force.y;
	  }
	};

	/**
	 * Apply a torque. This affects the angular velocity without
	 * affecting the linear velocity of the center of mass. This
	 * wakes up the body.
	 * @export
	 * @return {void}
	 * @param {number} torque about the z-axis (out of the screen), usually in N-m.
	 * @param {boolean=} wake also wake up the body
	 */
	box2d.b2Body.prototype.ApplyTorque = function (torque, wake) {
	  wake = typeof wake === 'boolean' ? wake : true;

	  if (this.m_type !== box2d.b2BodyType.b2_dynamicBody) {
	    return;
	  }

	  if (wake && !this.m_flag_awakeFlag) {
	    this.SetAwake(true);
	  }

	  // Don't accumulate a force if the body is sleeping.
	  if (this.m_flag_awakeFlag) {
	    this.m_torque += torque;
	  }
	};

	/**
	 * Apply an impulse at a point. This immediately modifies the
	 * velocity. It also modifies the angular velocity if the point
	 * of application is not at the center of mass. This wakes up
	 * the body.
	 * @export
	 * @return {void}
	 * @param {box2d.b2Vec2} impulse the world impulse vector, usually in N-seconds or kg-m/s.
	 * @param {box2d.b2Vec2} point the world position of the point of application.
	 * @param {boolean=} wake also wake up the body
	 */
	box2d.b2Body.prototype.ApplyLinearImpulse = function (impulse, point, wake) {
	  wake = typeof wake === 'boolean' ? wake : true;

	  if (this.m_type !== box2d.b2BodyType.b2_dynamicBody) {
	    return;
	  }

	  if (wake && !this.m_flag_awakeFlag) {
	    this.SetAwake(true);
	  }

	  // Don't accumulate a force if the body is sleeping.
	  if (this.m_flag_awakeFlag) {
	    this.m_linearVelocity.x += this.m_invMass * impulse.x;
	    this.m_linearVelocity.y += this.m_invMass * impulse.y;
	    this.m_angularVelocity += this.m_invI * ((point.x - this.m_sweep.c.x) * impulse.y - (point.y - this.m_sweep.c.y) * impulse.x);
	  }
	};

	/**
	 * Apply an impulse to the center of mass. This wakes up the body.
	 * @export
	 * @return {void}
	 * @param {box2d.b2Vec2} impulse the world impulse vector, usually in N-seconds or kg-m/s.
	 * @param {boolean=} wake also wake up the body
	 */
	box2d.b2Body.prototype.ApplyLinearImpulseToCenter = function (impulse, wake) {
	  wake = typeof wake === 'boolean' ? wake : true;

	  if (this.m_type !== box2d.b2BodyType.b2_dynamicBody) {
	    return;
	  }

	  if (wake && !this.m_flag_awakeFlag) {
	    this.SetAwake(true);
	  }

	  // Don't accumulate a force if the body is sleeping.
	  if (this.m_flag_awakeFlag) {
	    this.m_linearVelocity.x += this.m_invMass * impulse.x;
	    this.m_linearVelocity.y += this.m_invMass * impulse.y;
	  }
	};

	/**
	 * Apply an angular impulse.
	 * @export
	 * @return {void}
	 * @param {number} impulse the angular impulse in units of kg*m*m/s
	 * @param {boolean=} wake also wake up the body
	 */
	box2d.b2Body.prototype.ApplyAngularImpulse = function (impulse, wake) {
	  wake = typeof wake === 'boolean' ? wake : true;

	  if (this.m_type !== box2d.b2BodyType.b2_dynamicBody) {
	    return;
	  }

	  if (wake && !this.m_flag_awakeFlag) {
	    this.SetAwake(true);
	  }

	  // Don't accumulate a force if the body is sleeping.
	  if (this.m_flag_awakeFlag) {
	    this.m_angularVelocity += this.m_invI * impulse;
	  }
	};

	/**
	 * Get the total mass of the body.
	 * @export
	 * @return {number} the mass, usually in kilograms (kg).
	 */
	box2d.b2Body.prototype.GetMass = function () {
	  return this.m_mass;
	};

	/**
	 * Get the rotational inertia of the body about the local
	 * origin.
	 * @export
	 * @return {number} the rotational inertia, usually in kg-m^2.
	 */
	box2d.b2Body.prototype.GetInertia = function () {
	  return this.m_I + this.m_mass * box2d.b2Dot_V2_V2(this.m_sweep.localCenter, this.m_sweep.localCenter);
	};

	/**
	 * Get the mass data of the body.
	 * @export
	 * @return {box2d.b2MassData} a struct containing the mass, inertia and center of the body.
	 * @param {box2d.b2MassData} data
	 */
	box2d.b2Body.prototype.GetMassData = function (data) {
	  data.mass = this.m_mass;
	  data.I = this.m_I + this.m_mass * box2d.b2Dot_V2_V2(this.m_sweep.localCenter, this.m_sweep.localCenter);
	  data.center.Copy(this.m_sweep.localCenter);
	  return data;
	};

	/**
	 * Set the mass properties to override the mass properties of
	 * the fixtures.
	 * Note that this changes the center of mass position.
	 * Note that creating or destroying fixtures can also alter the
	 * mass.
	 * This function has no effect if the body isn't dynamic.
	 * @export
	 * @return {void}
	 * @param {box2d.b2MassData} massData the mass properties.
	 */
	box2d.b2Body.prototype.SetMassData = function (massData) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(!this.m_world.IsLocked());
	  }
	  if (this.m_world.IsLocked()) {
	    return;
	  }

	  if (this.m_type !== box2d.b2BodyType.b2_dynamicBody) {
	    return;
	  }

	  this.m_invMass = 0;
	  this.m_I = 0;
	  this.m_invI = 0;

	  this.m_mass = massData.mass;
	  if (this.m_mass <= 0) {
	    this.m_mass = 1;
	  }

	  this.m_invMass = 1 / this.m_mass;

	  if (massData.I > 0 && !this.m_flag_fixedRotationFlag) {
	    this.m_I = massData.I - this.m_mass * box2d.b2Dot_V2_V2(massData.center, massData.center);
	    if (box2d.ENABLE_ASSERTS) {
	      box2d.b2Assert(this.m_I > 0);
	    }
	    this.m_invI = 1 / this.m_I;
	  }

	  // Move center of mass.
	  var oldCenter = box2d.b2Body.prototype.SetMassData.s_oldCenter.Copy(this.m_sweep.c);
	  this.m_sweep.localCenter.Copy(massData.center);
	  box2d.b2Mul_X_V2(this.m_xf, this.m_sweep.localCenter, this.m_sweep.c);
	  this.m_sweep.c0.Copy(this.m_sweep.c);

	  // Update center of mass velocity.
	  box2d.b2AddCross_V2_S_V2(this.m_linearVelocity, this.m_angularVelocity, box2d.b2Sub_V2_V2(this.m_sweep.c, oldCenter, box2d.b2Vec2.s_t0), this.m_linearVelocity);
	};
	box2d.b2Body.prototype.SetMassData.s_oldCenter = new box2d.b2Vec2();

	/**
	 * This resets the mass properties to the sum of the mass
	 * properties of the fixtures. This normally does not need to be
	 * called unless you called SetMassData to override the mass and
	 * you later want to reset the mass.
	 * @export
	 * @return {void}
	 */
	box2d.b2Body.prototype.ResetMassData = function () {
	  // Compute mass data from shapes. Each shape has its own density.
	  this.m_mass = 0;
	  this.m_invMass = 0;
	  this.m_I = 0;
	  this.m_invI = 0;
	  this.m_sweep.localCenter.SetZero();

	  // Static and kinematic bodies have zero mass.
	  if (this.m_type === box2d.b2BodyType.b2_staticBody || this.m_type === box2d.b2BodyType.b2_kinematicBody) {
	    this.m_sweep.c0.Copy(this.m_xf.p);
	    this.m_sweep.c.Copy(this.m_xf.p);
	    this.m_sweep.a0 = this.m_sweep.a;
	    return;
	  }

	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(this.m_type === box2d.b2BodyType.b2_dynamicBody);
	  }

	  // Accumulate mass over all fixtures.
	  var localCenter = box2d.b2Body.prototype.ResetMassData.s_localCenter.SetZero();
	  for (var f = this.m_fixtureList; f; f = f.m_next) {
	    if (f.m_density === 0) {
	      continue;
	    }

	    var massData = f.GetMassData(box2d.b2Body.prototype.ResetMassData.s_massData);
	    this.m_mass += massData.mass;
	    localCenter.x += massData.center.x * massData.mass;
	    localCenter.y += massData.center.y * massData.mass;
	    this.m_I += massData.I;
	  }

	  // Compute center of mass.
	  if (this.m_mass > 0) {
	    this.m_invMass = 1 / this.m_mass;
	    localCenter.x *= this.m_invMass;
	    localCenter.y *= this.m_invMass;
	  } else {
	    // Force all dynamic bodies to have a positive mass.
	    this.m_mass = 1;
	    this.m_invMass = 1;
	  }

	  if (this.m_I > 0 && !this.m_flag_fixedRotationFlag) {
	    // Center the inertia about the center of mass.
	    this.m_I -= this.m_mass * box2d.b2Dot_V2_V2(localCenter, localCenter);
	    if (box2d.ENABLE_ASSERTS) {
	      box2d.b2Assert(this.m_I > 0);
	    }
	    this.m_invI = 1 / this.m_I;
	  } else {
	    this.m_I = 0;
	    this.m_invI = 0;
	  }

	  // Move center of mass.
	  var oldCenter = box2d.b2Body.prototype.ResetMassData.s_oldCenter.Copy(this.m_sweep.c);
	  this.m_sweep.localCenter.Copy(localCenter);
	  box2d.b2Mul_X_V2(this.m_xf, this.m_sweep.localCenter, this.m_sweep.c);
	  this.m_sweep.c0.Copy(this.m_sweep.c);

	  // Update center of mass velocity.
	  box2d.b2AddCross_V2_S_V2(this.m_linearVelocity, this.m_angularVelocity, box2d.b2Sub_V2_V2(this.m_sweep.c, oldCenter, box2d.b2Vec2.s_t0), this.m_linearVelocity);
	};
	box2d.b2Body.prototype.ResetMassData.s_localCenter = new box2d.b2Vec2();
	box2d.b2Body.prototype.ResetMassData.s_oldCenter = new box2d.b2Vec2();
	box2d.b2Body.prototype.ResetMassData.s_massData = new box2d.b2MassData();

	/**
	 * Get the world coordinates of a point given the local
	 * coordinates.
	 * @export
	 * @return {box2d.b2Vec2} the same point expressed in world coordinates.
	 * @param {box2d.b2Vec2} localPoint a point on the body measured relative the the body's origin.
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2Body.prototype.GetWorldPoint = function (localPoint, out) {
	  return box2d.b2Mul_X_V2(this.m_xf, localPoint, out);
	};

	/**
	 * Get the world coordinates of a vector given the local
	 * coordinates.
	 * @export
	 * @return {box2d.b2Vec2} the same vector expressed in world coordinates.
	 * @param {box2d.b2Vec2} localVector a vector fixed in the body.
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2Body.prototype.GetWorldVector = function (localVector, out) {
	  return box2d.b2Mul_R_V2(this.m_xf.q, localVector, out);
	};

	/**
	 * Gets a local point relative to the body's origin given a
	 * world point.
	 * @export
	 * @return {box2d.b2Vec2} the corresponding local point relative to the body's origin.
	 * @param {box2d.b2Vec2} worldPoint a point in world coordinates.
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2Body.prototype.GetLocalPoint = function (worldPoint, out) {
	  return box2d.b2MulT_X_V2(this.m_xf, worldPoint, out);
	};

	/**
	 * Gets a local vector given a world vector.
	 * @export
	 * @return {box2d.b2Vec2} the corresponding local vector.
	 * @param {box2d.b2Vec2} worldVector a vector in world coordinates.
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2Body.prototype.GetLocalVector = function (worldVector, out) {
	  return box2d.b2MulT_R_V2(this.m_xf.q, worldVector, out);
	};

	/**
	 * Get the world linear velocity of a world point attached to
	 * this body.
	 * @export
	 * @return {box2d.b2Vec2} the world velocity of a point.
	 * @param {box2d.b2Vec2} worldPoint a point in world coordinates.
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2Body.prototype.GetLinearVelocityFromWorldPoint = function (worldPoint, out) {
	  return box2d.b2AddCross_V2_S_V2(this.m_linearVelocity, this.m_angularVelocity, box2d.b2Sub_V2_V2(worldPoint, this.m_sweep.c, box2d.b2Vec2.s_t0), out);
	};

	/**
	 * Get the world velocity of a local point.
	 * @export
	 * @return {box2d.b2Vec2} the world velocity of a point.
	 * @param {box2d.b2Vec2} localPoint a point in local coordinates.
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2Body.prototype.GetLinearVelocityFromLocalPoint = function (localPoint, out) {
	  return this.GetLinearVelocityFromWorldPoint(this.GetWorldPoint(localPoint, out), out);
	};

	/**
	 * Get the linear damping of the body.
	 * @export
	 * @return {number}
	 */
	box2d.b2Body.prototype.GetLinearDamping = function () {
	  return this.m_linearDamping;
	};

	/**
	 * Set the linear damping of the body.
	 * @export
	 * @param {number} linearDamping
	 */
	box2d.b2Body.prototype.SetLinearDamping = function (linearDamping) {
	  this.m_linearDamping = linearDamping;
	};

	/**
	 * Get the angular damping of the body.
	 * @export
	 * @return {number}
	 */
	box2d.b2Body.prototype.GetAngularDamping = function () {
	  return this.m_angularDamping;
	};

	/**
	 * Set the angular damping of the body.
	 * @export
	 * @return {void}
	 * @param {number} angularDamping
	 */
	box2d.b2Body.prototype.SetAngularDamping = function (angularDamping) {
	  this.m_angularDamping = angularDamping;
	};

	/**
	 * Get the gravity scale of the body.
	 * @export
	 * @return {number}
	 */
	box2d.b2Body.prototype.GetGravityScale = function () {
	  return this.m_gravityScale;
	};

	/**
	 * Set the gravity scale of the body.
	 * @export
	 * @return {void}
	 * @param {number} scale
	 */
	box2d.b2Body.prototype.SetGravityScale = function (scale) {
	  this.m_gravityScale = scale;
	};

	/**
	 * Set the type of this body. This may alter the mass and
	 * velocity.
	 * @export
	 * @return {void}
	 * @param {box2d.b2BodyType} type
	 */
	box2d.b2Body.prototype.SetType = function (type) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(!this.m_world.IsLocked());
	  }
	  if (this.m_world.IsLocked()) {
	    return;
	  }

	  if (this.m_type === type) {
	    return;
	  }

	  this.m_type = type;

	  this.ResetMassData();

	  if (this.m_type === box2d.b2BodyType.b2_staticBody) {
	    this.m_linearVelocity.SetZero();
	    this.m_angularVelocity = 0;
	    this.m_sweep.a0 = this.m_sweep.a;
	    this.m_sweep.c0.Copy(this.m_sweep.c);
	    this.SynchronizeFixtures();
	  }

	  this.SetAwake(true);

	  this.m_force.SetZero();
	  this.m_torque = 0;

	  // Delete the attached contacts.
	  /** @type {box2d.b2ContactEdge} */
	  var ce = this.m_contactList;
	  while (ce) {
	    /** @type {box2d.b2ContactEdge} */
	    var ce0 = ce;
	    ce = ce.next;
	    this.m_world.m_contactManager.Destroy(ce0.contact);
	  }
	  this.m_contactList = null;

	  // Touch the proxies so that new contacts will be created (when appropriate)
	  /** @type {box2d.b2BroadPhase} */
	  var broadPhase = this.m_world.m_contactManager.m_broadPhase;
	  for ( /** @type {box2d.b2Fixture} */var f = this.m_fixtureList; f; f = f.m_next) {
	    var proxyCount = f.m_proxyCount;
	    for (var i = 0; i < proxyCount; ++i) {
	      broadPhase.TouchProxy(f.m_proxies[i].proxy);
	    }
	  }
	};

	/**
	 * Get the type of this body.
	 * @export
	 * @return {box2d.b2BodyType}
	 */
	box2d.b2Body.prototype.GetType = function () {
	  return this.m_type;
	};

	/**
	 * Should this body be treated like a bullet for continuous
	 * collision detection?
	 * @export
	 * @return {void}
	 * @param {boolean} flag
	 */
	box2d.b2Body.prototype.SetBullet = function (flag) {
	  this.m_flag_bulletFlag = flag;
	};

	/**
	 * Is this body treated like a bullet for continuous collision
	 * detection?
	 * @export
	 * @return {boolean}
	 */
	box2d.b2Body.prototype.IsBullet = function () {
	  return this.m_flag_bulletFlag;
	};

	/**
	 * You can disable sleeping on this body. If you disable
	 * sleeping, the body will be woken.
	 * @export
	 * @return {void}
	 * @param {boolean} flag
	 */
	box2d.b2Body.prototype.SetSleepingAllowed = function (flag) {
	  if (flag) {
	    this.m_flag_autoSleepFlag = true;
	  } else {
	    this.m_flag_autoSleepFlag = false;
	    this.SetAwake(true);
	  }
	};

	/**
	 * Is this body allowed to sleep
	 * @export
	 * @return {boolean}
	 */
	box2d.b2Body.prototype.IsSleepingAllowed = function () {
	  return this.m_flag_autoSleepFlag;
	};

	/**
	 * Set the sleep state of the body. A sleeping body has very low CPU cost.
	 * @export
	 * @return {void}
	 * @param {boolean} flag set to true to wake the body, false to
	 *      put it to sleep.
	 */
	box2d.b2Body.prototype.SetAwake = function (flag) {
	  if (flag) {
	    if (!this.m_flag_awakeFlag) {
	      this.m_flag_awakeFlag = true;
	      this.m_sleepTime = 0;
	    }
	  } else {
	    this.m_flag_awakeFlag = false;
	    this.m_sleepTime = 0;
	    this.m_linearVelocity.SetZero();
	    this.m_angularVelocity = 0;
	    this.m_force.SetZero();
	    this.m_torque = 0;
	  }
	};

	/**
	 * Get the sleeping state of this body.
	 * @export
	 * @return {boolean} true if the body is awake.
	 */
	box2d.b2Body.prototype.IsAwake = function () {
	  return this.m_flag_awakeFlag;
	};

	/**
	 * Set the active state of the body. An inactive body is not
	 * simulated and cannot be collided with or woken up.
	 * If you pass a flag of true, all fixtures will be added to the
	 * broad-phase.
	 * If you pass a flag of false, all fixtures will be removed from
	 * the broad-phase and all contacts will be destroyed.
	 * Fixtures and joints are otherwise unaffected. You may continue
	 * to create/destroy fixtures and joints on inactive bodies.
	 * Fixtures on an inactive body are implicitly inactive and will
	 * not participate in collisions, ray-casts, or queries.
	 * Joints connected to an inactive body are implicitly inactive.
	 * An inactive body is still owned by a b2World object and remains
	 * in the body list.
	 * @export
	 * @return {void}
	 * @param {boolean} flag
	 */
	box2d.b2Body.prototype.SetActive = function (flag) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(!this.m_world.IsLocked());
	  }

	  if (flag === this.IsActive()) {
	    return;
	  }

	  if (flag) {
	    this.m_flag_activeFlag = true;

	    // Create all proxies.
	    var broadPhase = this.m_world.m_contactManager.m_broadPhase;
	    for (var f = this.m_fixtureList; f; f = f.m_next) {
	      f.CreateProxies(broadPhase, this.m_xf);
	    }

	    // Contacts are created the next time step.
	  } else {
	    this.m_flag_activeFlag = false;

	    // Destroy all proxies.
	    var broadPhase = this.m_world.m_contactManager.m_broadPhase;
	    for (var f = this.m_fixtureList; f; f = f.m_next) {
	      f.DestroyProxies(broadPhase);
	    }

	    // Destroy the attached contacts.
	    var ce = this.m_contactList;
	    while (ce) {
	      var ce0 = ce;
	      ce = ce.next;
	      this.m_world.m_contactManager.Destroy(ce0.contact);
	    }
	    this.m_contactList = null;
	  }
	};

	/**
	 * Get the active state of the body.
	 * @export
	 * @return {boolean}
	 */
	box2d.b2Body.prototype.IsActive = function () {
	  return this.m_flag_activeFlag;
	};

	/**
	 * Set this body to have fixed rotation. This causes the mass to
	 * be reset.
	 * @export
	 * @return {void}
	 * @param {boolean} flag
	 */
	box2d.b2Body.prototype.SetFixedRotation = function (flag) {
	  var status = this.m_flag_fixedRotationFlag;
	  if (status === flag) {
	    return;
	  }

	  this.m_flag_fixedRotationFlag = flag;

	  this.m_angularVelocity = 0;

	  this.ResetMassData();
	};

	/**
	 * Does this body have fixed rotation?
	 * @export
	 * @return {boolean}
	 */
	box2d.b2Body.prototype.IsFixedRotation = function () {
	  return this.m_flag_fixedRotationFlag;
	};

	/**
	 * Get the list of all fixtures attached to this body.
	 * @export
	 * @return {box2d.b2Fixture}
	 */
	box2d.b2Body.prototype.GetFixtureList = function () {
	  return this.m_fixtureList;
	};

	/**
	 * Get the list of all joints attached to this body.
	 * @export
	 * @return {box2d.b2JointEdge}
	 */
	box2d.b2Body.prototype.GetJointList = function () {
	  return this.m_jointList;
	};

	/**
	 * Get the list of all contacts attached to this body.
	 * warning this list changes during the time step and you may
	 * miss some collisions if you don't use b2ContactListener.
	 * @export
	 * @return {box2d.b2ContactEdge}
	 */
	box2d.b2Body.prototype.GetContactList = function () {
	  return this.m_contactList;
	};

	/**
	 * Get the next body in the world's body list.
	 * @export
	 * @return {box2d.b2Body}
	 */
	box2d.b2Body.prototype.GetNext = function () {
	  return this.m_next;
	};

	/**
	 * Get the user data pointer that was provided in the body
	 * definition.
	 * @export
	 * @return {*}
	 */
	box2d.b2Body.prototype.GetUserData = function () {
	  return this.m_userData;
	};

	/**
	 * Set the user data. Use this to store your application
	 * specific data.
	 * @export
	 * @return {void}
	 * @param {*} data
	 */
	box2d.b2Body.prototype.SetUserData = function (data) {
	  this.m_userData = data;
	};

	/**
	 * Get the parent world of this body.
	 * @export
	 * @return {box2d.b2World}
	 */
	box2d.b2Body.prototype.GetWorld = function () {
	  return this.m_world;
	};

	/**
	 * @export
	 * @return {void}
	 */
	box2d.b2Body.prototype.SynchronizeFixtures = function () {
	  var xf1 = box2d.b2Body.prototype.SynchronizeFixtures.s_xf1;
	  xf1.q.SetAngle(this.m_sweep.a0);
	  box2d.b2Mul_R_V2(xf1.q, this.m_sweep.localCenter, xf1.p);
	  box2d.b2Sub_V2_V2(this.m_sweep.c0, xf1.p, xf1.p);

	  var broadPhase = this.m_world.m_contactManager.m_broadPhase;
	  for (var f = this.m_fixtureList; f; f = f.m_next) {
	    f.Synchronize(broadPhase, xf1, this.m_xf);
	  }
	};
	box2d.b2Body.prototype.SynchronizeFixtures.s_xf1 = new box2d.b2Transform();

	/**
	 * @export
	 * @return {void}
	 */
	box2d.b2Body.prototype.SynchronizeTransform = function () {
	  this.m_xf.q.SetAngle(this.m_sweep.a);
	  box2d.b2Mul_R_V2(this.m_xf.q, this.m_sweep.localCenter, this.m_xf.p);
	  box2d.b2Sub_V2_V2(this.m_sweep.c, this.m_xf.p, this.m_xf.p);
	};

	/**
	 * This is used to prevent connected bodies from colliding.
	 * It may lie, depending on the collideConnected flag.
	 * @export
	 * @return {boolean}
	 * @param {box2d.b2Body} other
	 */
	box2d.b2Body.prototype.ShouldCollide = function (other) {
	  // At least one body should be dynamic or kinematic.
	  if (this.m_type === box2d.b2BodyType.b2_staticBody && other.m_type === box2d.b2BodyType.b2_staticBody) {
	    return false;
	  }

	  return this.ShouldCollideConnected(other);
	};

	/**
	 * @export
	 * @return {boolean}
	 * @param {box2d.b2Body} other
	 */
	box2d.b2Body.prototype.ShouldCollideConnected = function (other) {
	  // Does a joint prevent collision?
	  for (var jn = this.m_jointList; jn; jn = jn.next) {
	    if (jn.other === other) {
	      if (!jn.joint.m_collideConnected) {
	        return false;
	      }
	    }
	  }

	  return true;
	};

	/**
	 * @export
	 * @return {void}
	 * @param {number} alpha
	 */
	box2d.b2Body.prototype.Advance = function (alpha) {
	  // Advance to the new safe time. This doesn't sync the broad-phase.
	  this.m_sweep.Advance(alpha);
	  this.m_sweep.c.Copy(this.m_sweep.c0);
	  this.m_sweep.a = this.m_sweep.a0;
	  this.m_xf.q.SetAngle(this.m_sweep.a);
	  box2d.b2Mul_R_V2(this.m_xf.q, this.m_sweep.localCenter, this.m_xf.p);
	  box2d.b2Sub_V2_V2(this.m_sweep.c, this.m_xf.p, this.m_xf.p);
	};

	/**
	 * Dump this body to a log file
	 * @export
	 * @return {void}
	 */
	box2d.b2Body.prototype.Dump = function () {
	  if (box2d.DEBUG) {
	    var bodyIndex = this.m_islandIndex;

	    box2d.b2Log("{\n");
	    box2d.b2Log("  /*box2d.b2BodyDef*/ var bd = new box2d.b2BodyDef();\n");
	    var type_str = '';
	    switch (this.m_type) {
	      case box2d.b2BodyType.b2_staticBody:
	        type_str = 'box2d.b2BodyType.b2_staticBody';
	        break;
	      case box2d.b2BodyType.b2_kinematicBody:
	        type_str = 'box2d.b2BodyType.b2_kinematicBody';
	        break;
	      case box2d.b2BodyType.b2_dynamicBody:
	        type_str = 'box2d.b2BodyType.b2_dynamicBody';
	        break;
	      default:
	        if (box2d.ENABLE_ASSERTS) {
	          box2d.b2Assert(false);
	        }
	        break;
	    }
	    box2d.b2Log("  bd.type = %s;\n", type_str);
	    box2d.b2Log("  bd.position.Set(%.15f, %.15f);\n", this.m_xf.p.x, this.m_xf.p.y);
	    box2d.b2Log("  bd.angle = %.15f;\n", this.m_sweep.a);
	    box2d.b2Log("  bd.linearVelocity.Set(%.15f, %.15f);\n", this.m_linearVelocity.x, this.m_linearVelocity.y);
	    box2d.b2Log("  bd.angularVelocity = %.15f;\n", this.m_angularVelocity);
	    box2d.b2Log("  bd.linearDamping = %.15f;\n", this.m_linearDamping);
	    box2d.b2Log("  bd.angularDamping = %.15f;\n", this.m_angularDamping);
	    box2d.b2Log("  bd.allowSleep = %s;\n", this.m_flag_autoSleepFlag ? 'true' : 'false');
	    box2d.b2Log("  bd.awake = %s;\n", this.m_flag_awakeFlag ? 'true' : 'false');
	    box2d.b2Log("  bd.fixedRotation = %s;\n", this.m_flag_fixedRotationFlag ? 'true' : 'false');
	    box2d.b2Log("  bd.bullet = %s;\n", this.m_flag_bulletFlag ? 'true' : 'false');
	    box2d.b2Log("  bd.active = %s;\n", this.m_flag_activeFlag ? 'true' : 'false');
	    box2d.b2Log("  bd.gravityScale = %.15f;\n", this.m_gravityScale);
	    box2d.b2Log("\n");
	    box2d.b2Log("  bodies[%d] = this.m_world.CreateBody(bd);\n", this.m_islandIndex);
	    box2d.b2Log("\n");
	    for ( /** @type {box2d.b2Fixture} */var f = this.m_fixtureList; f; f = f.m_next) {
	      box2d.b2Log("  {\n");
	      f.Dump(bodyIndex);
	      box2d.b2Log("  }\n");
	    }
	    box2d.b2Log("}\n");
	  }
	};

	//#if B2_ENABLE_CONTROLLER

	/**
	 * @see box2d.b2Controller list
	 * @export
	 * @return {box2d.b2ControllerEdge}
	 */
	box2d.b2Body.prototype.GetControllerList = function () {
	  return this.m_controllerList;
	};

	/**
	 * @see box2d.b2Controller list
	 * @export
	 * @return {number}
	 */
	box2d.b2Body.prototype.GetControllerCount = function () {
	  return this.m_controllerCount;
	};

	//#endif

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(13);

	__webpack_require__(5);

	/**
	 * This holds contact filtering data.
	 * @export
	 * @constructor
	 */
	box2d.b2Filter = function () {};

	/**
	 * The collision category bits. Normally you would just set one
	 * bit.
	 * @export
	 * @type {number}
	 */
	/*
	 * Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
	 *
	 * This software is provided 'as-is', without any express or implied
	 * warranty.  In no event will the authors be held liable for any damages
	 * arising from the use of this software.
	 * Permission is granted to anyone to use this software for any purpose,
	 * including commercial applications, and to alter it and redistribute it
	 * freely, subject to the following restrictions:
	 * 1. The origin of this software must not be misrepresented; you must not
	 * claim that you wrote the original software. If you use this software
	 * in a product, an acknowledgment in the product documentation would be
	 * appreciated but is not required.
	 * 2. Altered source versions must be plainly marked as such, and must not be
	 * misrepresented as being the original software.
	 * 3. This notice may not be removed or altered from any source distribution.
	 */

	box2d.b2Filter.prototype.categoryBits = 0x0001;

	/**
	 * The collision mask bits. This states the categories that this
	 * shape would accept for collision.
	 * @export
	 * @type {number}
	 */
	box2d.b2Filter.prototype.maskBits = 0xFFFF;

	/**
	 * Collision groups allow a certain group of objects to never
	 * collide (negative) or always collide (positive). Zero means
	 * no collision group. Non-zero group filtering always wins
	 * against the mask bits.
	 * @export
	 * @type {number}
	 */
	box2d.b2Filter.prototype.groupIndex = 0;

	/**
	 * @export
	 * @return {box2d.b2Filter}
	 */
	box2d.b2Filter.prototype.Clone = function () {
	  return new box2d.b2Filter().Copy(this);
	};

	/**
	 * @export
	 * @return {box2d.b2Filter}
	 * @param {box2d.b2Filter} other
	 */
	box2d.b2Filter.prototype.Copy = function (other) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(this !== other);
	  }
	  this.categoryBits = other.categoryBits;
	  this.maskBits = other.maskBits;
	  this.groupIndex = other.groupIndex;
	  return this;
	};

	/**
	 * A fixture definition is used to create a fixture. This class
	 * defines an abstract fixture definition. You can reuse fixture
	 * definitions safely.
	 * @export
	 * @constructor
	 */
	box2d.b2FixtureDef = function () {
	  this.filter = new box2d.b2Filter();
	};

	/**
	 * The shape, this must be set. The shape will be cloned, so you
	 * can create the shape on the stack.
	 * @export
	 * @type {box2d.b2Shape}
	 */
	box2d.b2FixtureDef.prototype.shape = null;

	/**
	 * Use this to store application specific fixture data.
	 * @export
	 * @type {*}
	 */
	box2d.b2FixtureDef.prototype.userData = null;

	/**
	 * The friction coefficient, usually in the range [0,1].
	 * @export
	 * @type {number}
	 */
	box2d.b2FixtureDef.prototype.friction = 0.2;

	/**
	 * The restitution (elasticity) usually in the range [0,1].
	 * @export
	 * @type {number}
	 */
	box2d.b2FixtureDef.prototype.restitution = 0;

	/**
	 * The density, usually in kg/m^2.
	 * @export
	 * @type {number}
	 */
	box2d.b2FixtureDef.prototype.density = 0;

	/**
	 * A sensor shape collects contact information but never
	 * generates a collision response.
	 * @export
	 * @type {boolean}
	 */
	box2d.b2FixtureDef.prototype.isSensor = false;

	/**
	 * Contact filtering data.
	 * @export
	 * @type {box2d.b2Filter}
	 */
	box2d.b2FixtureDef.prototype.filter = null;

	/**
	 * This proxy is used internally to connect fixtures to the
	 * broad-phase.
	 * @export
	 * @constructor
	 */
	box2d.b2FixtureProxy = function () {
	  this.aabb = new box2d.b2AABB();
	};

	/**
	 * @export
	 * @type {box2d.b2AABB}
	 */
	box2d.b2FixtureProxy.prototype.aabb = null;
	/**
	 * @export
	 * @type {box2d.b2Fixture}
	 */
	box2d.b2FixtureProxy.prototype.fixture = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2FixtureProxy.prototype.childIndex = 0;
	/**
	 * @export
	 * @type {box2d.b2TreeNode}
	 */
	box2d.b2FixtureProxy.prototype.proxy = null;

	/**
	 * @export
	 * @return {Array.<box2d.b2FixtureProxy>}
	 * @param {number} length
	 */
	box2d.b2FixtureProxy.MakeArray = function (length) {
	  return box2d.b2MakeArray(length, function (i) {
	    return new box2d.b2FixtureProxy();
	  });
	};

	/**
	 * A fixture is used to attach a shape to a body for collision
	 * detection. A fixture inherits its transform from its parent.
	 * Fixtures hold additional non-geometric data such as friction,
	 * collision filters, etc.
	 * Fixtures are created via box2d.b2Body::CreateFixture.
	 * warning you cannot reuse fixtures.
	 * @export
	 * @constructor
	 */
	box2d.b2Fixture = function () {
	  //  this.m_proxies = new Array();
	  this.m_proxyCount = 0;

	  this.m_filter = new box2d.b2Filter();
	};

	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Fixture.prototype.m_density = 0;

	/**
	 * @export
	 * @type {box2d.b2Fixture}
	 */
	box2d.b2Fixture.prototype.m_next = null;
	/**
	 * @export
	 * @type {box2d.b2Body}
	 */
	box2d.b2Fixture.prototype.m_body = null;

	/**
	 * @export
	 * @type {box2d.b2Shape}
	 */
	box2d.b2Fixture.prototype.m_shape = null;

	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Fixture.prototype.m_friction = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Fixture.prototype.m_restitution = 0;

	/**
	 * @export
	 * @type {Array.<box2d.b2FixtureProxy>}
	 */
	box2d.b2Fixture.prototype.m_proxies = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Fixture.prototype.m_proxyCount = 0;

	/**
	 * @export
	 * @type {box2d.b2Filter}
	 */
	box2d.b2Fixture.prototype.m_filter = null;

	/**
	 * @export
	 * @type {boolean}
	 */
	box2d.b2Fixture.prototype.m_isSensor = false;

	/**
	 * @export
	 * @type {*}
	 */
	box2d.b2Fixture.prototype.m_userData = null;

	/**
	 * Get the type of the child shape. You can use this to down
	 * cast to the concrete shape.
	 * @export
	 * @return {box2d.b2ShapeType} the shape type.
	 */
	box2d.b2Fixture.prototype.GetType = function () {
	  return this.m_shape.GetType();
	};

	/**
	 * Get the child shape. You can modify the child shape, however
	 * you should not change the number of vertices because this
	 * will crash some collision caching mechanisms.
	 * Manipulating the shape may lead to non-physical behavior.
	 * @export
	 * @return {box2d.b2Shape}
	 */
	box2d.b2Fixture.prototype.GetShape = function () {
	  return this.m_shape;
	};

	/**
	 * Is this fixture a sensor (non-solid)?
	 * @export
	 * @return {boolean} true if the shape is a sensor.
	 */
	box2d.b2Fixture.prototype.IsSensor = function () {
	  return this.m_isSensor;
	};

	/**
	 * Get the contact filtering data.
	 * @export
	 * @return {box2d.b2Filter}
	 * @param {box2d.b2Filter=} out
	 */
	box2d.b2Fixture.prototype.GetFilterData = function (out) {
	  //return this.m_filter;
	  out = out || new box2d.b2Filter();
	  return out.Copy(this.m_filter);
	};

	/**
	 * Get the user data that was assigned in the fixture
	 * definition. Use this to store your application specific data.
	 * @export
	 * @return {*}
	 */
	box2d.b2Fixture.prototype.GetUserData = function () {
	  return this.m_userData;
	};

	/**
	 * Set the user data. Use this to store your application
	 * specific data.
	 * @export
	 * @param {*} data
	 */
	box2d.b2Fixture.prototype.SetUserData = function (data) {
	  this.m_userData = data;
	};

	/**
	 * Get the parent body of this fixture. This is NULL if the
	 * fixture is not attached.
	 * @export
	 * @return {box2d.b2Body} the parent body.
	 */
	box2d.b2Fixture.prototype.GetBody = function () {
	  return this.m_body;
	};

	/**
	 * Get the next fixture in the parent body's fixture list.
	 * @export
	 * @return {box2d.b2Fixture} the next shape.
	 */
	box2d.b2Fixture.prototype.GetNext = function () {
	  return this.m_next;
	};

	/**
	 * Set the density of this fixture. This will _not_
	 * automatically adjust the mass of the body. You must call
	 * box2d.b2Body::ResetMassData to update the body's mass.
	 * @export
	 * @return {void}
	 * @param {number} density
	 */
	box2d.b2Fixture.prototype.SetDensity = function (density) {
	  this.m_density = density;
	};

	/**
	 * Get the density of this fixture.
	 * @export
	 * @return {number}
	 */
	box2d.b2Fixture.prototype.GetDensity = function () {
	  return this.m_density;
	};

	/**
	 * Get the coefficient of friction.
	 * @export
	 * @return {number}
	 */
	box2d.b2Fixture.prototype.GetFriction = function () {
	  return this.m_friction;
	};

	/**
	 * Set the coefficient of friction. This will _not_ change the
	 * friction of existing contacts.
	 * @export
	 * @return {void}
	 * @param {number} friction
	 */
	box2d.b2Fixture.prototype.SetFriction = function (friction) {
	  this.m_friction = friction;
	};

	/**
	 * Get the coefficient of restitution.
	 * @export
	 * @return {number}
	 */
	box2d.b2Fixture.prototype.GetRestitution = function () {
	  return this.m_restitution;
	};

	/**
	 * Set the coefficient of restitution. This will _not_ change
	 * the restitution of existing contacts.
	 * @export
	 * @return {void}
	 * @param {number} restitution
	 */
	box2d.b2Fixture.prototype.SetRestitution = function (restitution) {
	  this.m_restitution = restitution;
	};

	/**
	 * Test a point for containment in this fixture.
	 * @export
	 * @return {boolean}
	 * @param {box2d.b2Vec2} p a point in world coordinates.
	 */
	box2d.b2Fixture.prototype.TestPoint = function (p) {
	  return this.m_shape.TestPoint(this.m_body.GetTransform(), p);
	};

	//#if B2_ENABLE_PARTICLE

	/**
	 * Compute the distance from this fixture.
	 * @export
	 * @return {number}
	 * @param {box2d.b2Vec2} p a point in world coordinates.
	 * @param {box2d.b2Vec2} normal
	 * @param {number} childIndex
	 */
	box2d.b2Fixture.prototype.ComputeDistance = function (p, normal, childIndex) {
	  return this.m_shape.ComputeDistance(this.m_body.GetTransform(), p, normal, childIndex);
	};

	//#endif

	/**
	 * Cast a ray against this shape.
	 * @export
	 * @return {boolean}
	 * @param {box2d.b2RayCastOutput} output ray-cast results.
	 * @param {box2d.b2RayCastInput} input the ray-cast input parameters.
	 * @param {number} childIndex
	 */
	box2d.b2Fixture.prototype.RayCast = function (output, input, childIndex) {
	  return this.m_shape.RayCast(output, input, this.m_body.GetTransform(), childIndex);
	};

	/**
	 * Get the mass data for this fixture. The mass data is based on
	 * the density and the shape. The rotational inertia is about
	 * the shape's origin. This operation may be expensive.
	 * @export
	 * @return {box2d.b2MassData}
	 * @param {box2d.b2MassData=} massData
	 */
	box2d.b2Fixture.prototype.GetMassData = function (massData) {
	  massData = massData || new box2d.b2MassData();

	  this.m_shape.ComputeMass(massData, this.m_density);

	  return massData;
	};

	/**
	 * Get the fixture's AABB. This AABB may be enlarge and/or
	 * stale. If you need a more accurate AABB, compute it using the
	 * shape and the body transform.
	 * @export
	 * @return {box2d.b2AABB}
	 * @param {number} childIndex
	 */
	box2d.b2Fixture.prototype.GetAABB = function (childIndex) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(0 <= childIndex && childIndex < this.m_proxyCount);
	  }
	  return this.m_proxies[childIndex].aabb;
	};

	/**
	 * We need separation create/destroy functions from the
	 * constructor/destructor because the destructor cannot access
	 * the allocator (no destructor arguments allowed by C++).
	 * @export
	 * @return {void}
	 * @param {box2d.b2Body} body
	 * @param {box2d.b2FixtureDef} def
	 */
	box2d.b2Fixture.prototype.Create = function (body, def) {
	  this.m_userData = def.userData;
	  this.m_friction = def.friction;
	  this.m_restitution = def.restitution;

	  this.m_body = body;
	  this.m_next = null;

	  this.m_filter.Copy(def.filter);

	  this.m_isSensor = def.isSensor;

	  this.m_shape = def.shape.Clone();

	  // Reserve proxy space
	  //  var childCount = m_shape->GetChildCount();
	  //  m_proxies = (box2d.b2FixtureProxy*)allocator->Allocate(childCount * sizeof(box2d.b2FixtureProxy));
	  //  for (int32 i = 0; i < childCount; ++i)
	  //  {
	  //    m_proxies[i].fixture = NULL;
	  //    m_proxies[i].proxyId = box2d.b2BroadPhase::e_nullProxy;
	  //  }
	  this.m_proxies = box2d.b2FixtureProxy.MakeArray(this.m_shape.GetChildCount());
	  this.m_proxyCount = 0;

	  this.m_density = def.density;
	};

	/**
	 * @export
	 * @return {void}
	 */
	box2d.b2Fixture.prototype.Destroy = function () {
	  // The proxies must be destroyed before calling this.
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(this.m_proxyCount === 0);
	  }

	  // Free the proxy array.
	  //  int32 childCount = m_shape->GetChildCount();
	  //  allocator->Free(m_proxies, childCount * sizeof(box2d.b2FixtureProxy));
	  //  m_proxies = NULL;

	  this.m_shape = null;
	};

	/**
	 * These support body activation/deactivation.
	 * @export
	 * @return {void}
	 * @param {box2d.b2BroadPhase} broadPhase
	 * @param {box2d.b2Transform} xf
	 */
	box2d.b2Fixture.prototype.CreateProxies = function (broadPhase, xf) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(this.m_proxyCount === 0);
	  }

	  // Create proxies in the broad-phase.
	  this.m_proxyCount = this.m_shape.GetChildCount();

	  for (var i = 0; i < this.m_proxyCount; ++i) {
	    var proxy = this.m_proxies[i];
	    this.m_shape.ComputeAABB(proxy.aabb, xf, i);
	    proxy.proxy = broadPhase.CreateProxy(proxy.aabb, proxy);
	    proxy.fixture = this;
	    proxy.childIndex = i;
	  }
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2BroadPhase} broadPhase
	 */
	box2d.b2Fixture.prototype.DestroyProxies = function (broadPhase) {
	  // Destroy proxies in the broad-phase.
	  for (var i = 0; i < this.m_proxyCount; ++i) {
	    var proxy = this.m_proxies[i];
	    broadPhase.DestroyProxy(proxy.proxy);
	    proxy.proxy = null;
	  }

	  this.m_proxyCount = 0;
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2BroadPhase} broadPhase
	 * @param {box2d.b2Transform} transform1
	 * @param {box2d.b2Transform} transform2
	 */
	box2d.b2Fixture.prototype.Synchronize = function (broadPhase, transform1, transform2) {
	  if (this.m_proxyCount === 0) {
	    return;
	  }

	  for (var i = 0; i < this.m_proxyCount; ++i) {
	    var proxy = this.m_proxies[i];

	    // Compute an AABB that covers the swept shape (may miss some rotation effect).
	    var aabb1 = box2d.b2Fixture.prototype.Synchronize.s_aabb1;
	    var aabb2 = box2d.b2Fixture.prototype.Synchronize.s_aabb2;
	    this.m_shape.ComputeAABB(aabb1, transform1, i);
	    this.m_shape.ComputeAABB(aabb2, transform2, i);

	    proxy.aabb.Combine2(aabb1, aabb2);

	    var displacement = box2d.b2Sub_V2_V2(transform2.p, transform1.p, box2d.b2Fixture.prototype.Synchronize.s_displacement);

	    broadPhase.MoveProxy(proxy.proxy, proxy.aabb, displacement);
	  }
	};
	box2d.b2Fixture.prototype.Synchronize.s_aabb1 = new box2d.b2AABB();
	box2d.b2Fixture.prototype.Synchronize.s_aabb2 = new box2d.b2AABB();
	box2d.b2Fixture.prototype.Synchronize.s_displacement = new box2d.b2Vec2();

	/**
	 * Set the contact filtering data. This will not update contacts
	 * until the next time step when either parent body is active
	 * and awake.
	 * This automatically calls Refilter.
	 * @export
	 * @return {void}
	 * @param {box2d.b2Filter} filter
	 */
	box2d.b2Fixture.prototype.SetFilterData = function (filter) {
	  this.m_filter.Copy(filter);

	  this.Refilter();
	};

	/**
	 * Call this if you want to establish collision that was
	 * previously disabled by box2d.b2ContactFilter::ShouldCollide.
	 * @export
	 * @return {void}
	 */
	box2d.b2Fixture.prototype.Refilter = function () {
	  if (this.m_body === null) {
	    return;
	  }

	  // Flag associated contacts for filtering.
	  var edge = this.m_body.GetContactList();

	  while (edge) {
	    var contact = edge.contact;
	    var fixtureA = contact.GetFixtureA();
	    var fixtureB = contact.GetFixtureB();
	    if (fixtureA === this || fixtureB === this) {
	      contact.FlagForFiltering();
	    }

	    edge = edge.next;
	  }

	  var world = this.m_body.GetWorld();

	  if (world === null) {
	    return;
	  }

	  // Touch each proxy so that new pairs may be created
	  var broadPhase = world.m_contactManager.m_broadPhase;
	  for (var i = 0; i < this.m_proxyCount; ++i) {
	    broadPhase.TouchProxy(this.m_proxies[i].proxy);
	  }
	};

	/**
	 * Set if this fixture is a sensor.
	 * @export
	 * @return {void}
	 * @param {boolean} sensor
	 */
	box2d.b2Fixture.prototype.SetSensor = function (sensor) {
	  if (sensor !== this.m_isSensor) {
	    this.m_body.SetAwake(true);
	    this.m_isSensor = sensor;
	  }
	};

	/**
	 * Dump this fixture to the log file.
	 * @export
	 * @return {void}
	 * @param {number} bodyIndex
	 */
	box2d.b2Fixture.prototype.Dump = function (bodyIndex) {
	  if (box2d.DEBUG) {
	    box2d.b2Log("    /*box2d.b2FixtureDef*/ var fd = new box2d.b2FixtureDef();\n");
	    box2d.b2Log("    fd.friction = %.15f;\n", this.m_friction);
	    box2d.b2Log("    fd.restitution = %.15f;\n", this.m_restitution);
	    box2d.b2Log("    fd.density = %.15f;\n", this.m_density);
	    box2d.b2Log("    fd.isSensor = %s;\n", this.m_isSensor ? 'true' : 'false');
	    box2d.b2Log("    fd.filter.categoryBits = %d;\n", this.m_filter.categoryBits);
	    box2d.b2Log("    fd.filter.maskBits = %d;\n", this.m_filter.maskBits);
	    box2d.b2Log("    fd.filter.groupIndex = %d;\n", this.m_filter.groupIndex);

	    this.m_shape.Dump();

	    box2d.b2Log("\n");
	    box2d.b2Log("    fd.shape = shape;\n");
	    box2d.b2Log("\n");
	    box2d.b2Log("    bodies[%d].CreateFixture(fd);\n", bodyIndex);
	  }
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	/**
	 * Joints and fixtures are destroyed when their associated body
	 * is destroyed. Implement this listener so that you may nullify
	 * references to these joints and shapes.
	 * @export
	 * @constructor
	 */
	box2d.b2DestructionListener = function () {};

	/**
	 * Called when any joint is about to be destroyed due to the
	 * destruction of one of its attached bodies.
	 * @export
	 * @return {void}
	 * @param {box2d.b2Joint} joint
	 */
	/*
	 * Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
	 *
	 * This software is provided 'as-is', without any express or implied
	 * warranty.  In no event will the authors be held liable for any damages
	 * arising from the use of this software.
	 * Permission is granted to anyone to use this software for any purpose,
	 * including commercial applications, and to alter it and redistribute it
	 * freely, subject to the following restrictions:
	 * 1. The origin of this software must not be misrepresented; you must not
	 * claim that you wrote the original software. If you use this software
	 * in a product, an acknowledgment in the product documentation would be
	 * appreciated but is not required.
	 * 2. Altered source versions must be plainly marked as such, and must not be
	 * misrepresented as being the original software.
	 * 3. This notice may not be removed or altered from any source distribution.
	 */

	box2d.b2DestructionListener.prototype.SayGoodbyeJoint = function (joint) {};

	/**
	 * Called when any fixture is about to be destroyed due to the
	 * destruction of its parent body.
	 * @export
	 * @return {void}
	 * @param {box2d.b2Fixture} fixture
	 */
	box2d.b2DestructionListener.prototype.SayGoodbyeFixture = function (fixture) {};

	//#if B2_ENABLE_PARTICLE

	/**
	 * Called when any particle group is about to be destroyed.
	 * @return {void}
	 * @param {box2d.b2ParticleGroup} particleGroup
	 */
	box2d.b2DestructionListener.prototype.SayGoodbyeParticleGroup = function (particleGroup) {};

	/**
	 * Called when a particle is about to be destroyed.
	 * The index can be used in conjunction with
	 * b2ParticleSystem::GetUserDataBuffer() or
	 * b2ParticleSystem::GetParticleHandleFromIndex() to determine
	 * which particle has been destroyed.
	 * @return {void}
	 * @param {box2d.b2ParticleSystem} particleSystem
	 * @param {number} particleIndex
	 */
	box2d.b2DestructionListener.prototype.SayGoodbyeParticle = function (particleSystem, particleIndex) {};

	//#endif

	/**
	 * Implement this class to provide collision filtering. In other
	 * words, you can implement this class if you want finer control
	 * over contact creation.
	 * @export
	 * @constructor
	 */
	box2d.b2ContactFilter = function () {};

	/**
	 * Return true if contact calculations should be performed
	 * between these two shapes.
	 * warning for performance reasons this is only called when the
	 * AABBs begin to overlap.
	 * @export
	 * @return {boolean}
	 * @param {box2d.b2Fixture} fixtureA
	 * @param {box2d.b2Fixture} fixtureB
	 */
	box2d.b2ContactFilter.prototype.ShouldCollide = function (fixtureA, fixtureB) {
	  var bodyA = fixtureA.GetBody();
	  var bodyB = fixtureB.GetBody();

	  // At least one body should be dynamic or kinematic.
	  if (bodyB.GetType() === box2d.b2BodyType.b2_staticBody && bodyA.GetType() === box2d.b2BodyType.b2_staticBody) {
	    return false;
	  }

	  // Does a joint prevent collision?
	  if (bodyB.ShouldCollideConnected(bodyA) === false) {
	    return false;
	  }

	  var filter1 = fixtureA.GetFilterData();
	  var filter2 = fixtureB.GetFilterData();

	  if (filter1.groupIndex === filter2.groupIndex && filter1.groupIndex !== 0) {
	    return filter1.groupIndex > 0;
	  }

	  var collide = (filter1.maskBits & filter2.categoryBits) !== 0 && (filter1.categoryBits & filter2.maskBits) !== 0;
	  return collide;
	};

	//#if B2_ENABLE_PARTICLE

	/**
	 * Return true if contact calculations should be performed
	 * between a fixture and particle.  This is only called if the
	 * b2_fixtureContactListenerParticle flag is set on the
	 * particle.
	 * @export
	 * @return {boolean}
	 * @param {box2d.b2Fixture} fixture
	 * @param {box2d.b2ParticleSystem} particleSystem
	 * @param {number} particleIndex
	 */
	box2d.b2ContactFilter.prototype.ShouldCollideFixtureParticle = function (fixture, particleSystem, particleIndex) {
	  return true;
	};

	/**
	 * Return true if contact calculations should be performed
	 * between two particles.  This is only called if the
	 * b2_particleContactListenerParticle flag is set on the
	 * particle.
	 * @export
	 * @return {boolean}
	 * @param {box2d.b2ParticleSystem} particleSystem
	 * @param {number} particleIndexA
	 * @param {number} particleIndexB
	 */
	box2d.b2ContactFilter.prototype.ShouldCollideParticleParticle = function (particleSystem, particleIndexA, particleIndexB) {
	  return true;
	};

	//#endif

	/**
	 * @const
	 * @type {box2d.b2ContactFilter}
	 */
	box2d.b2ContactFilter.b2_defaultFilter = new box2d.b2ContactFilter();

	/**
	 * Contact impulses for reporting. Impulses are used instead of
	 * forces because sub-step forces may approach infinity for
	 * rigid body collisions. These match up one-to-one with the
	 * contact points in b2Manifold.
	 * @export
	 * @constructor
	 */
	box2d.b2ContactImpulse = function () {
	  this.normalImpulses = box2d.b2MakeNumberArray(box2d.b2_maxManifoldPoints);
	  this.tangentImpulses = box2d.b2MakeNumberArray(box2d.b2_maxManifoldPoints);
	};

	/**
	 * @export
	 * @type {Array.<number>}
	 */
	box2d.b2ContactImpulse.prototype.normalImpulses = null;

	/**
	 * @export
	 * @type {Array.<number>}
	 */
	box2d.b2ContactImpulse.prototype.tangentImpulses = null;

	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2ContactImpulse.prototype.count = 0;

	/**
	 * Implement this class to get contact information. You can use
	 * these results for things like sounds and game logic. You can
	 * also get contact results by traversing the contact lists
	 * after the time step. However, you might miss some contacts
	 * because continuous physics leads to sub-stepping.
	 * Additionally you may receive multiple callbacks for the same
	 * contact in a single time step.
	 * You should strive to make your callbacks efficient because
	 * there may be many callbacks per time step.
	 * warning You cannot create/destroy Box2D entities inside these
	 * callbacks.
	 * @export
	 * @constructor
	 */
	box2d.b2ContactListener = function () {};

	/**
	 * Called when two fixtures begin to touch.
	 * @export
	 * @return {void}
	 * @param {box2d.b2Contact} contact
	 */
	box2d.b2ContactListener.prototype.BeginContact = function (contact) {};

	/**
	 * Called when two fixtures cease to touch.
	 * @export
	 * @return {void}
	 * @param {box2d.b2Contact} contact
	 */
	box2d.b2ContactListener.prototype.EndContact = function (contact) {};

	//#if B2_ENABLE_PARTICLE

	/**
	 * Called when a fixture and particle start touching if the
	 * b2_fixtureContactFilterParticle flag is set on the particle.
	 * @export
	 * @return {void}
	 * @param {box2d.b2ParticleSystem} particleSystem
	 * @param {box2d.b2ParticleBodyContact} particleBodyContact
	 */
	box2d.b2ContactListener.prototype.BeginContactFixtureParticle = function (particleSystem, particleBodyContact) {};

	/**
	 * Called when a fixture and particle stop touching if the
	 * b2_fixtureContactFilterParticle flag is set on the particle.
	 * @export
	 * @return {void}
	 * @param {box2d.b2Fixture} fixture
	 * @param {box2d.b2ParticleSystem} particleSystem
	 * @param {number} particleIndex
	 */
	box2d.b2ContactListener.prototype.EndContactFixtureParticle = function (fixture, particleSystem, particleIndex) {};

	/**
	 * Called when two particles start touching if
	 * b2_particleContactFilterParticle flag is set on either
	 * particle.
	 * @export
	 * @return {void}
	 * @param {box2d.b2ParticleSystem} particleSystem
	 * @param {box2d.b2ParticleContact} particleContact
	 */
	box2d.b2ContactListener.prototype.BeginContactParticleParticle = function (particleSystem, particleContact) {};

	/**
	 * Called when two particles start touching if
	 * b2_particleContactFilterParticle flag is set on either
	 * particle.
	 * @export
	 * @return {void}
	 * @param {box2d.b2ParticleSystem} particleSystem
	 * @param {number} particleIndexA
	 * @param {number} particleIndexB
	 */
	box2d.b2ContactListener.prototype.EndContactParticleParticle = function (particleSystem, particleIndexA, particleIndexB) {};

	//#endif

	/**
	 * This is called after a contact is updated. This allows you to
	 * inspect a contact before it goes to the solver. If you are
	 * careful, you can modify the contact manifold (e.g. disable
	 * contact).
	 * A copy of the old manifold is provided so that you can detect
	 * changes.
	 * Note: this is called only for awake bodies.
	 * Note: this is called even when the number of contact points
	 * is zero.
	 * Note: this is not called for sensors.
	 * Note: if you set the number of contact points to zero, you
	 * will not get an EndContact callback. However, you may get a
	 * BeginContact callback the next step.
	 * @export
	 * @return {void}
	 * @param {box2d.b2Contact} contact
	 * @param {box2d.b2Manifold} oldManifold
	 */
	box2d.b2ContactListener.prototype.PreSolve = function (contact, oldManifold) {};

	/**
	 * This lets you inspect a contact after the solver is finished.
	 * This is useful for inspecting impulses.
	 * Note: the contact manifold does not include time of impact
	 * impulses, which can be arbitrarily large if the sub-step is
	 * small. Hence the impulse is provided explicitly in a separate
	 * data structure.
	 * Note: this is only called for contacts that are touching,
	 * solid, and awake.
	 * @export
	 * @return {void}
	 * @param {box2d.b2Contact} contact
	 * @param {box2d.b2ContactImpulse} impulse
	 */
	box2d.b2ContactListener.prototype.PostSolve = function (contact, impulse) {};

	/**
	 * @export
	 * @type {box2d.b2ContactListener}
	 */
	box2d.b2ContactListener.b2_defaultListener = new box2d.b2ContactListener();

	/**
	 * Callback class for AABB queries.
	 * See b2World::Query
	 * @export
	 * @constructor
	 */
	box2d.b2QueryCallback = function () {};

	/**
	 * Called for each fixture found in the query AABB.
	 * @export
	 * @return {boolean} false to terminate the query.
	 * @param {box2d.b2Fixture} fixture
	 */
	box2d.b2QueryCallback.prototype.ReportFixture = function (fixture) {
	  return true;
	};

	//#if B2_ENABLE_PARTICLE

	/**
	 * Called for each particle found in the query AABB.
	 * @export
	 * @return {boolean} false to terminate the query.
	 * @param {box2d.b2ParticleSystem} particleSystem
	 * @param {number} particleIndex
	 */
	box2d.b2QueryCallback.prototype.ReportParticle = function (particleSystem, particleIndex) {
	  return false;
	};

	/**
	 * Cull an entire particle system from b2World::QueryAABB.
	 * Ignored for b2ParticleSystem::QueryAABB.
	 * @export
	 * @return {boolean} true if you want to include particleSystem
	 *       in the AABB query, or false to cull particleSystem
	 *       from the AABB query.
	 * @param {box2d.b2ParticleSystem} particleSystem
	 */
	box2d.b2QueryCallback.prototype.ShouldQueryParticleSystem = function (particleSystem) {
	  return true;
	};

	//#endif

	/**
	 * Callback class for ray casts.
	 * See b2World::RayCast
	 * @export
	 * @constructor
	 */
	box2d.b2RayCastCallback = function () {};

	/**
	 * Called for each fixture found in the query. You control how
	 * the ray cast proceeds by returning a float:
	 * return -1: ignore this fixture and continue
	 * return 0: terminate the ray cast
	 * return fraction: clip the ray to this point
	 * return 1: don't clip the ray and continue
	 * @export
	 * @return {number}
	 * @param {box2d.b2Fixture} fixture the fixture hit by the ray
	 * @param {box2d.b2Vec2} point the point of initial intersection
	 * @param {box2d.b2Vec2} normal the normal vector at the point
	 *      of intersection
	 * @param {number} fraction
	 */
	box2d.b2RayCastCallback.prototype.ReportFixture = function (fixture, point, normal, fraction) {
	  return fraction;
	};

	//#if B2_ENABLE_PARTICLE

	/**
	 * Called for each particle found in the query. You control how
	 * the ray cast proceeds by returning a float:
	 * return <=0: ignore the remaining particles in this particle
	 * system
	 * return fraction: ignore particles that are 'fraction' percent
	 * farther along the line from 'point1' to 'point2'. Note that
	 * 'point1' and 'point2' are parameters to b2World::RayCast.
	 * @export
	 * @return {number} <=0 to ignore rest of particle system,
	 *       fraction to ignore particles that are farther away.
	 * @param {box2d.b2ParticleSystem} particleSystem the particle
	 *      system containing the particle
	 * @param {number} particleIndex the index of the particle in
	 *      particleSystem
	 * @param {box2d.b2Vec2} point the point of intersection bt the
	 *      ray and the particle
	 * @param {box2d.b2Vec2} normal the normal vector at the point
	 *      of intersection
	 * @param {number} fraction percent (0.0~1.0) from 'point0' to
	 *      'point1' along the ray. Note that 'point1' and
	 *      'point2' are parameters to b2World::RayCast.
	 */
	box2d.b2RayCastCallback.prototype.ReportParticle = function (particleSystem, particleIndex, point, normal, fraction) {
	  return 0;
	};

	/**
	 * Cull an entire particle system from b2World::RayCast. Ignored
	 * in b2ParticleSystem::RayCast.
	 * @export
	 * @return {boolean} true if you want to include particleSystem
	 *       in the RayCast, or false to cull particleSystem from
	 *       the RayCast.
	 * @param {box2d.b2ParticleSystem} particleSystem
	 */
	box2d.b2RayCastCallback.prototype.ShouldQueryParticleSystem = function (particleSystem) {
	  return true;
	};

	//#endif

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	/**
	 * Profiling data. Times are in milliseconds.
	 * @export
	 * @constructor
	 */
	box2d.b2Profile = function () {};

	/**
	 * @export
	 * @type {number}
	 */
	/*
	 * Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
	 *
	 * This software is provided 'as-is', without any express or implied
	 * warranty.  In no event will the authors be held liable for any damages
	 * arising from the use of this software.
	 * Permission is granted to anyone to use this software for any purpose,
	 * including commercial applications, and to alter it and redistribute it
	 * freely, subject to the following restrictions:
	 * 1. The origin of this software must not be misrepresented; you must not
	 * claim that you wrote the original software. If you use this software
	 * in a product, an acknowledgment in the product documentation would be
	 * appreciated but is not required.
	 * 2. Altered source versions must be plainly marked as such, and must not be
	 * misrepresented as being the original software.
	 * 3. This notice may not be removed or altered from any source distribution.
	 */

	box2d.b2Profile.prototype.step = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Profile.prototype.collide = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Profile.prototype.solve = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Profile.prototype.solveInit = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Profile.prototype.solveVelocity = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Profile.prototype.solvePosition = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Profile.prototype.broadphase = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Profile.prototype.solveTOI = 0;

	/**
	 * @export
	 * @return {box2d.b2Profile}
	 */
	box2d.b2Profile.prototype.Reset = function () {
	  this.step = 0;
	  this.collide = 0;
	  this.solve = 0;
	  this.solveInit = 0;
	  this.solveVelocity = 0;
	  this.solvePosition = 0;
	  this.broadphase = 0;
	  this.solveTOI = 0;
	  return this;
	};

	/**
	 * This is an internal structure.
	 * @export
	 * @constructor
	 */
	box2d.b2TimeStep = function () {};

	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2TimeStep.prototype.dt = 0; // time step
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2TimeStep.prototype.inv_dt = 0; // inverse time step (0 if dt === 0).
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2TimeStep.prototype.dtRatio = 0; // dt * inv_dt0
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2TimeStep.prototype.velocityIterations = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2TimeStep.prototype.positionIterations = 0;
	//#if B2_ENABLE_PARTICLE
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2TimeStep.prototype.particleIterations = 0;
	//#endif
	/**
	 * @export
	 * @type {boolean}
	 */
	box2d.b2TimeStep.prototype.warmStarting = false;

	/**
	 * @export
	 * @return {box2d.b2TimeStep}
	 * @param {box2d.b2TimeStep} step
	 */
	box2d.b2TimeStep.prototype.Copy = function (step) {
	  this.dt = step.dt; // time step
	  this.inv_dt = step.inv_dt; // inverse time step (0 if dt === 0).
	  this.dtRatio = step.dtRatio; // dt * inv_dt0
	  this.positionIterations = step.positionIterations;
	  this.velocityIterations = step.velocityIterations;
	  //#if B2_ENABLE_PARTICLE
	  this.particleIterations = step.particleIterations;
	  //#endif
	  this.warmStarting = step.warmStarting;
	  return this;
	};

	/**
	 * This is an internal structure.
	 * @export
	 * @constructor
	 */
	box2d.b2Position = function () {
	  this.c = new box2d.b2Vec2();
	};

	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2Position.prototype.c = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Position.prototype.a = 0;

	/**
	 * @export
	 * @return {Array.<box2d.b2Position>}
	 * @param {number} length
	 */
	box2d.b2Position.MakeArray = function (length) {
	  return box2d.b2MakeArray(length, function (i) {
	    return new box2d.b2Position();
	  });
	};

	/**
	 * This is an internal structure.
	 * @export
	 * @constructor
	 */
	box2d.b2Velocity = function () {
	  this.v = new box2d.b2Vec2();
	};

	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2Velocity.prototype.v = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Velocity.prototype.w = 0;

	/**
	 * @export
	 * @return {Array.<box2d.b2Velocity>}
	 * @param {number} length
	 */
	box2d.b2Velocity.MakeArray = function (length) {
	  return box2d.b2MakeArray(length, function (i) {
	    return new box2d.b2Velocity();
	  });
	};

	/**
	 * Solver Data
	 * @export
	 * @constructor
	 */
	box2d.b2SolverData = function () {
	  this.step = new box2d.b2TimeStep();
	};

	/**
	 * @export
	 * @type {box2d.b2TimeStep}
	 */
	box2d.b2SolverData.prototype.step = null;
	/**
	 * @export
	 * @type {Array.<box2d.b2Position>}
	 */
	box2d.b2SolverData.prototype.positions = null;
	/**
	 * @export
	 * @type {Array.<box2d.b2Velocity>}
	 */
	box2d.b2SolverData.prototype.velocities = null;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(2);

	__webpack_require__(21);

	__webpack_require__(24);

	__webpack_require__(35);

	__webpack_require__(16);

	__webpack_require__(6);

	__webpack_require__(19);

	__webpack_require__(18);

	__webpack_require__(36);

	/**
	 * The world class manages all physics entities, dynamic
	 * simulation, and asynchronous queries. The world also contains
	 * efficient memory management facilities.
	 */

	/**
	 * Construct a world object.
	 * @export
	 * @constructor
	 * @param {box2d.b2Vec2} gravity the world gravity vector.
	 */
	/*
	 * Copyright (c) 2006-2011 Erin Catto http://www.box2d.org
	 *
	 * This software is provided 'as-is', without any express or implied
	 * warranty.  In no event will the authors be held liable for any damages
	 * arising from the use of this software.
	 * Permission is granted to anyone to use this software for any purpose,
	 * including commercial applications, and to alter it and redistribute it
	 * freely, subject to the following restrictions:
	 * 1. The origin of this software must not be misrepresented; you must not
	 * claim that you wrote the original software. If you use this software
	 * in a product, an acknowledgment in the product documentation would be
	 * appreciated but is not required.
	 * 2. Altered source versions must be plainly marked as such, and must not be
	 * misrepresented as being the original software.
	 * 3. This notice may not be removed or altered from any source distribution.
	 */

	box2d.b2World = function (gravity) {
	  this.m_flag_clearForces = true;

	  this.m_contactManager = new box2d.b2ContactManager();

	  this.m_gravity = gravity.Clone();
	  this.m_out_gravity = new box2d.b2Vec2();
	  this.m_allowSleep = true;

	  this.m_destructionListener = null;
	  this.m_debugDraw = null;

	  this.m_warmStarting = true;
	  this.m_continuousPhysics = true;
	  this.m_subStepping = false;

	  this.m_stepComplete = true;

	  this.m_profile = new box2d.b2Profile();

	  this.m_island = new box2d.b2Island();

	  this.s_stack = new Array();
	};

	//b2BlockAllocator m_blockAllocator;
	//b2StackAllocator m_stackAllocator;

	/**
	 * @export
	 * @type {boolean}
	 */
	box2d.b2World.prototype.m_flag_newFixture = false;
	/**
	 * @export
	 * @type {boolean}
	 */
	box2d.b2World.prototype.m_flag_locked = false;
	/**
	 * @export
	 * @type {boolean}
	 */
	box2d.b2World.prototype.m_flag_clearForces = false;

	/**
	 * @export
	 * @type {box2d.b2ContactManager}
	 */
	box2d.b2World.prototype.m_contactManager = null;

	/**
	 * @export
	 * @type {box2d.b2Body}
	 */
	box2d.b2World.prototype.m_bodyList = null;
	/**
	 * @export
	 * @type {box2d.b2Joint}
	 */
	box2d.b2World.prototype.m_jointList = null;

	//#if B2_ENABLE_PARTICLE

	/**
	 * @export
	 * @type {box2d.b2ParticleSystem}
	 */
	box2d.b2World.prototype.m_particleSystemList = null;

	//#endif

	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2World.prototype.m_bodyCount = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2World.prototype.m_jointCount = 0;

	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2World.prototype.m_gravity = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2World.prototype.m_out_gravity = null;
	/**
	 * @export
	 * @type {boolean}
	 */
	box2d.b2World.prototype.m_allowSleep = true;

	/**
	 * @export
	 * @type {box2d.b2DestructionListener}
	 */
	box2d.b2World.prototype.m_destructionListener = null;
	/**
	 * @export
	 * @type {box2d.b2Draw}
	 */
	box2d.b2World.prototype.m_debugDraw = null;

	/**
	 * This is used to compute the time step ratio to support a
	 * variable time step.
	 * @export
	 * @type {number}
	 */
	box2d.b2World.prototype.m_inv_dt0 = 0;

	/**
	 * These are for debugging the solver.
	 * @export
	 * @type {boolean}
	 */
	box2d.b2World.prototype.m_warmStarting = true;
	/**
	 * @export
	 * @type {boolean}
	 */
	box2d.b2World.prototype.m_continuousPhysics = true;
	/**
	 * @export
	 * @type {boolean}
	 */
	box2d.b2World.prototype.m_subStepping = false;

	/**
	 * @export
	 * @type {boolean}
	 */
	box2d.b2World.prototype.m_stepComplete = true;

	/**
	 * @export
	 * @type {box2d.b2Profile}
	 */
	box2d.b2World.prototype.m_profile = null;

	/**
	 * @export
	 * @type {box2d.b2Island}
	 */
	box2d.b2World.prototype.m_island = null;

	/**
	 * @export
	 * @type {Array.<?box2d.b2Body>}
	 */
	box2d.b2World.prototype.s_stack = null;

	//#if B2_ENABLE_CONTROLLER

	/**
	 * @see box2d.b2Controller list
	 * @export
	 * @type {box2d.b2Controller}
	 */
	box2d.b2World.prototype.m_controllerList = null;

	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2World.prototype.m_controllerCount = 0;

	//#endif

	/**
	 * Enable/disable sleep.
	 * @export
	 * @return {void}
	 * @param {boolean} flag
	 */
	box2d.b2World.prototype.SetAllowSleeping = function (flag) {
	  if (flag === this.m_allowSleep) {
	    return;
	  }

	  this.m_allowSleep = flag;
	  if (!this.m_allowSleep) {
	    for ( /** @type {box2d.b2Body} */var b = this.m_bodyList; b; b = b.m_next) {
	      b.SetAwake(true);
	    }
	  }
	};

	/**
	 * @export
	 * @return {boolean}
	 */
	box2d.b2World.prototype.GetAllowSleeping = function () {
	  return this.m_allowSleep;
	};

	/**
	 * Enable/disable warm starting. For testing.
	 * @export
	 * @return {void}
	 * @param {boolean} flag
	 */
	box2d.b2World.prototype.SetWarmStarting = function (flag) {
	  this.m_warmStarting = flag;
	};

	/**
	 * @export
	 * @return {boolean}
	 */
	box2d.b2World.prototype.GetWarmStarting = function () {
	  return this.m_warmStarting;
	};

	/**
	 * Enable/disable continuous physics. For testing.
	 * @export
	 * @return {void}
	 * @param {boolean} flag
	 */
	box2d.b2World.prototype.SetContinuousPhysics = function (flag) {
	  this.m_continuousPhysics = flag;
	};

	/**
	 * @export
	 * @return {boolean}
	 */
	box2d.b2World.prototype.GetContinuousPhysics = function () {
	  return this.m_continuousPhysics;
	};

	/**
	 * Enable/disable single stepped continuous physics. For
	 * testing.
	 * @export
	 * @return {void}
	 * @param {boolean} flag
	 */
	box2d.b2World.prototype.SetSubStepping = function (flag) {
	  this.m_subStepping = flag;
	};

	/**
	 * @export
	 * @return {boolean}
	 */
	box2d.b2World.prototype.GetSubStepping = function () {
	  return this.m_subStepping;
	};

	/**
	 * Get the world body list. With the returned body, use
	 * b2Body::GetNext to get the next body in the world list. A
	 * NULL body indicates the end of the list.
	 * @export
	 * @return {box2d.b2Body} the head of the world body list.
	 */
	box2d.b2World.prototype.GetBodyList = function () {
	  return this.m_bodyList;
	};

	/**
	 * Get the world joint list. With the returned joint, use
	 * b2Joint::GetNext to get the next joint in the world list. A
	 * NULL joint indicates the end of the list.
	 * @export
	 * @return {box2d.b2Joint} the head of the world joint list.
	 */
	box2d.b2World.prototype.GetJointList = function () {
	  return this.m_jointList;
	};

	//#if B2_ENABLE_PARTICLE

	/**
	 * @export
	 * @return {box2d.b2ParticleSystem}
	 */
	box2d.b2World.prototype.GetParticleSystemList = function () {
	  return this.m_particleSystemList;
	};

	//#endif

	/**
	 * Get the world contact list. With the returned contact, use
	 * box2d.b2Contact::GetNext to get the next contact in the world
	 * list. A NULL contact indicates the end of the list.
	 * warning contacts are created and destroyed in the middle of a
	 * time step.
	 * Use box2d.b2ContactListener to avoid missing contacts.
	 * @export
	 * @return {box2d.b2Contact} the head of the world contact list.
	 */
	box2d.b2World.prototype.GetContactList = function () {
	  return this.m_contactManager.m_contactList;
	};

	/**
	 * Get the number of bodies.
	 * @export
	 * @return {number}
	 */
	box2d.b2World.prototype.GetBodyCount = function () {
	  return this.m_bodyCount;
	};

	/**
	 * Get the number of joints.
	 * @export
	 * @return {number}
	 */
	box2d.b2World.prototype.GetJointCount = function () {
	  return this.m_jointCount;
	};

	/**
	 * Get the number of contacts (each may have 0 or more contact
	 * points).
	 * @export
	 * @return {number}
	 */
	box2d.b2World.prototype.GetContactCount = function () {
	  return this.m_contactManager.m_contactCount;
	};

	/**
	 * Change the global gravity vector.
	 * @export
	 * @return {void}
	 * @param {box2d.b2Vec2} gravity
	 * @param {boolean=} wake also wake up the bodies
	 */
	box2d.b2World.prototype.SetGravity = function (gravity, wake) {
	  wake = wake || true;

	  if (this.m_gravity.x !== gravity.x || this.m_gravity.y !== gravity.y) {
	    this.m_gravity.Copy(gravity);

	    if (wake) {
	      for ( /** @type {box2d.b2Body} */var b = this.m_bodyList; b; b = b.m_next) {
	        b.SetAwake(true);
	      }
	    }
	  }
	};

	/**
	 * Get the global gravity vector.
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2=} out
	 */
	box2d.b2World.prototype.GetGravity = function (out) {
	  out = out || this.m_out_gravity;
	  return out.Copy(this.m_gravity);
	};

	/**
	 * Is the world locked (in the middle of a time step).
	 * @export
	 * @return {boolean}
	 */
	box2d.b2World.prototype.IsLocked = function () {
	  return this.m_flag_locked;
	};

	/**
	 * Set flag to control automatic clearing of forces after each
	 * time step.
	 * @export
	 * @return {void}
	 * @param {boolean} flag
	 */
	box2d.b2World.prototype.SetAutoClearForces = function (flag) {
	  this.m_flag_clearForces = flag;
	};

	/**
	 * Get the flag that controls automatic clearing of forces after
	 * each time step.
	 * @export
	 * @return {boolean}
	 */
	box2d.b2World.prototype.GetAutoClearForces = function () {
	  return this.m_flag_clearForces;
	};

	/**
	 * Get the contact manager for testing.
	 * @export
	 * @return {box2d.b2ContactManager}
	 */
	box2d.b2World.prototype.GetContactManager = function () {
	  return this.m_contactManager;
	};

	/**
	 * Get the current profile.
	 * @export
	 * @return {box2d.b2Profile}
	 */
	box2d.b2World.prototype.GetProfile = function () {
	  return this.m_profile;
	};

	/**
	 * Register a destruction listener. The listener is owned by you
	 * and must remain in scope.
	 * @export
	 * @return {void}
	 * @param {box2d.b2DestructionListener} listener
	 */
	box2d.b2World.prototype.SetDestructionListener = function (listener) {
	  this.m_destructionListener = listener;
	};

	/**
	 * Register a contact filter to provide specific control over
	 * collision. Otherwise the default filter is used
	 * (b2_defaultFilter). The listener is owned by you and must
	 * remain in scope.
	 * @export
	 * @return {void}
	 * @param {box2d.b2ContactFilter} filter
	 */
	box2d.b2World.prototype.SetContactFilter = function (filter) {
	  this.m_contactManager.m_contactFilter = filter;
	};

	/**
	 * Register a contact event listener. The listener is owned by
	 * you and must remain in scope.
	 * @export
	 * @return {void}
	 * @param {box2d.b2ContactListener} listener
	 */
	box2d.b2World.prototype.SetContactListener = function (listener) {
	  this.m_contactManager.m_contactListener = listener;
	};

	/**
	 * Register a routine for debug drawing. The debug draw
	 * functions are called inside with b2World::DrawDebugData
	 * method. The debug draw object is owned by you and must remain
	 * in scope.
	 * @export
	 * @return {void}
	 * @param {box2d.b2Draw} debugDraw
	 */
	box2d.b2World.prototype.SetDebugDraw = function (debugDraw) {
	  this.m_debugDraw = debugDraw;
	};

	/**
	 * Create a rigid body given a definition. No reference to the
	 * definition is retained.
	 * warning This function is locked during callbacks.
	 * @export
	 * @return {box2d.b2Body}
	 * @param {box2d.b2BodyDef} def
	 */
	box2d.b2World.prototype.CreateBody = function (def) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(!this.IsLocked());
	  }
	  if (this.IsLocked()) {
	    return null;
	  }

	  /** @type {box2d.b2Body} */
	  var b = new box2d.b2Body(def, this);

	  // Add to world doubly linked list.
	  b.m_prev = null;
	  b.m_next = this.m_bodyList;
	  if (this.m_bodyList) {
	    this.m_bodyList.m_prev = b;
	  }
	  this.m_bodyList = b;
	  ++this.m_bodyCount;

	  return b;
	};

	/**
	 * Destroy a rigid body given a definition. No reference to the
	 * definition is retained. This function is locked during
	 * callbacks.
	 * warning This automatically deletes all associated shapes and
	 * joints.
	 * warning This function is locked during callbacks.
	 * @export
	 * @return {void}
	 * @param {box2d.b2Body} b
	 */
	box2d.b2World.prototype.DestroyBody = function (b) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(this.m_bodyCount > 0);
	  }
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(!this.IsLocked());
	  }
	  if (this.IsLocked()) {
	    return;
	  }

	  // Delete the attached joints.
	  /** @type {box2d.b2JointEdge} */
	  var je = b.m_jointList;
	  while (je) {
	    /** @type {box2d.b2JointEdge} */
	    var je0 = je;
	    je = je.next;

	    if (this.m_destructionListener) {
	      this.m_destructionListener.SayGoodbyeJoint(je0.joint);
	    }

	    this.DestroyJoint(je0.joint);

	    b.m_jointList = je;
	  }
	  b.m_jointList = null;

	  //#if B2_ENABLE_CONTROLLER

	  /// @see box2d.b2Controller list
	  /** @type {box2d.b2ControllerEdge} */
	  var coe = b.m_controllerList;
	  while (coe) {
	    /** @type {box2d.b2ControllerEdge} */
	    var coe0 = coe;
	    coe = coe.nextController;
	    coe0.controller.RemoveBody(b);
	  }

	  //#endif

	  // Delete the attached contacts.
	  /** @type {box2d.b2ContactEdge} */
	  var ce = b.m_contactList;
	  while (ce) {
	    /** @type {box2d.b2ContactEdge} */
	    var ce0 = ce;
	    ce = ce.next;
	    this.m_contactManager.Destroy(ce0.contact);
	  }
	  b.m_contactList = null;

	  // Delete the attached fixtures. This destroys broad-phase proxies.
	  /** @type {box2d.b2Fixture} */
	  var f = b.m_fixtureList;
	  while (f) {
	    /** @type {box2d.b2Fixture} */
	    var f0 = f;
	    f = f.m_next;

	    if (this.m_destructionListener) {
	      this.m_destructionListener.SayGoodbyeFixture(f0);
	    }

	    f0.DestroyProxies(this.m_contactManager.m_broadPhase);
	    f0.Destroy();

	    b.m_fixtureList = f;
	    b.m_fixtureCount -= 1;
	  }
	  b.m_fixtureList = null;
	  b.m_fixtureCount = 0;

	  // Remove world body list.
	  if (b.m_prev) {
	    b.m_prev.m_next = b.m_next;
	  }

	  if (b.m_next) {
	    b.m_next.m_prev = b.m_prev;
	  }

	  if (b === this.m_bodyList) {
	    this.m_bodyList = b.m_next;
	  }

	  --this.m_bodyCount;
	};

	/**
	 * Create a joint to constrain bodies together. No reference to
	 * the definition is retained. This may cause the connected
	 * bodies to cease colliding.
	 * warning This function is locked during callbacks.
	 * @export
	 * @return {box2d.b2Joint}
	 * @param {box2d.b2JointDef} def
	 */
	box2d.b2World.prototype.CreateJoint = function (def) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(!this.IsLocked());
	  }
	  if (this.IsLocked()) {
	    return null;
	  }

	  /** @type {box2d.b2Joint} */
	  var j = box2d.b2JointFactory.Create(def, null);

	  // Connect to the world list.
	  j.m_prev = null;
	  j.m_next = this.m_jointList;
	  if (this.m_jointList) {
	    this.m_jointList.m_prev = j;
	  }
	  this.m_jointList = j;
	  ++this.m_jointCount;

	  // Connect to the bodies' doubly linked lists.
	  j.m_edgeA.joint = j;
	  j.m_edgeA.other = j.m_bodyB;
	  j.m_edgeA.prev = null;
	  j.m_edgeA.next = j.m_bodyA.m_jointList;
	  if (j.m_bodyA.m_jointList) j.m_bodyA.m_jointList.prev = j.m_edgeA;
	  j.m_bodyA.m_jointList = j.m_edgeA;

	  j.m_edgeB.joint = j;
	  j.m_edgeB.other = j.m_bodyA;
	  j.m_edgeB.prev = null;
	  j.m_edgeB.next = j.m_bodyB.m_jointList;
	  if (j.m_bodyB.m_jointList) j.m_bodyB.m_jointList.prev = j.m_edgeB;
	  j.m_bodyB.m_jointList = j.m_edgeB;

	  /** @type {box2d.b2Body} */
	  var bodyA = def.bodyA;
	  /** @type {box2d.b2Body} */
	  var bodyB = def.bodyB;

	  // If the joint prevents collisions, then flag any contacts for filtering.
	  if (!def.collideConnected) {
	    /** @type {box2d.b2ContactEdge} */
	    var edge = bodyB.GetContactList();
	    while (edge) {
	      if (edge.other === bodyA) {
	        // Flag the contact for filtering at the next time step (where either
	        // body is awake).
	        edge.contact.FlagForFiltering();
	      }

	      edge = edge.next;
	    }
	  }

	  // Note: creating a joint doesn't wake the bodies.

	  return j;
	};

	/**
	 * Destroy a joint. This may cause the connected bodies to begin
	 * colliding.
	 * warning This function is locked during callbacks.
	 * @export
	 * @return {void}
	 * @param {box2d.b2Joint} j
	 */
	box2d.b2World.prototype.DestroyJoint = function (j) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(!this.IsLocked());
	  }
	  if (this.IsLocked()) {
	    return;
	  }

	  /** @type {boolean} */
	  var collideConnected = j.m_collideConnected;

	  // Remove from the doubly linked list.
	  if (j.m_prev) {
	    j.m_prev.m_next = j.m_next;
	  }

	  if (j.m_next) {
	    j.m_next.m_prev = j.m_prev;
	  }

	  if (j === this.m_jointList) {
	    this.m_jointList = j.m_next;
	  }

	  // Disconnect from island graph.
	  /** @type {box2d.b2Body} */
	  var bodyA = j.m_bodyA;
	  /** @type {box2d.b2Body} */
	  var bodyB = j.m_bodyB;

	  // Wake up connected bodies.
	  bodyA.SetAwake(true);
	  bodyB.SetAwake(true);

	  // Remove from body 1.
	  if (j.m_edgeA.prev) {
	    j.m_edgeA.prev.next = j.m_edgeA.next;
	  }

	  if (j.m_edgeA.next) {
	    j.m_edgeA.next.prev = j.m_edgeA.prev;
	  }

	  if (j.m_edgeA === bodyA.m_jointList) {
	    bodyA.m_jointList = j.m_edgeA.next;
	  }

	  j.m_edgeA.prev = null;
	  j.m_edgeA.next = null;

	  // Remove from body 2
	  if (j.m_edgeB.prev) {
	    j.m_edgeB.prev.next = j.m_edgeB.next;
	  }

	  if (j.m_edgeB.next) {
	    j.m_edgeB.next.prev = j.m_edgeB.prev;
	  }

	  if (j.m_edgeB === bodyB.m_jointList) {
	    bodyB.m_jointList = j.m_edgeB.next;
	  }

	  j.m_edgeB.prev = null;
	  j.m_edgeB.next = null;

	  box2d.b2JointFactory.Destroy(j, null);

	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(this.m_jointCount > 0);
	  }
	  --this.m_jointCount;

	  // If the joint prevents collisions, then flag any contacts for filtering.
	  if (!collideConnected) {
	    /** @type {box2d.b2ContactEdge} */
	    var edge = bodyB.GetContactList();
	    while (edge) {
	      if (edge.other === bodyA) {
	        // Flag the contact for filtering at the next time step (where either
	        // body is awake).
	        edge.contact.FlagForFiltering();
	      }

	      edge = edge.next;
	    }
	  }
	};

	//#if B2_ENABLE_PARTICLE

	/**
	 * @export
	 * @return {box2d.b2ParticleSystem}
	 * @param {box2d.b2ParticleSystemDef} def
	 */
	box2d.b2World.prototype.CreateParticleSystem = function (def) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(!this.IsLocked());
	  }
	  if (this.IsLocked()) {
	    return null;
	  }

	  var p = new box2d.b2ParticleSystem(def, this);

	  // Add to world doubly linked list.
	  p.m_prev = null;
	  p.m_next = this.m_particleSystemList;
	  if (this.m_particleSystemList) {
	    this.m_particleSystemList.m_prev = p;
	  }
	  this.m_particleSystemList = p;

	  return p;
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2ParticleSystem} p
	 */
	box2d.b2World.prototype.DestroyParticleSystem = function (p) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(!this.IsLocked());
	  }
	  if (this.IsLocked()) {
	    return;
	  }

	  // Remove world particleSystem list.
	  if (p.m_prev) {
	    p.m_prev.m_next = p.m_next;
	  }

	  if (p.m_next) {
	    p.m_next.m_prev = p.m_prev;
	  }

	  if (p === this.m_particleSystemList) {
	    this.m_particleSystemList = p.m_next;
	  }
	};

	//#endif

	/**
	 * Find islands, integrate and solve constraints, solve position
	 * constraints
	 * @export
	 * @return {void}
	 * @param {box2d.b2TimeStep} step
	 */
	box2d.b2World.prototype.Solve = function (step) {
	  //#if B2_ENABLE_PARTICLE
	  // update previous transforms
	  for ( /** @type {box2d.b2Body} */var b = this.m_bodyList; b; b = b.m_next) {
	    b.m_xf0.Copy(b.m_xf);
	  }
	  //#endif

	  //#if B2_ENABLE_CONTROLLER
	  /// @see box2d.b2Controller list
	  for ( /** @type {box2d.b2Controller} */var controller = this.m_controllerList; controller; controller = controller.m_next) {
	    controller.Step(step);
	  }
	  //#endif

	  this.m_profile.solveInit = 0;
	  this.m_profile.solveVelocity = 0;
	  this.m_profile.solvePosition = 0;

	  // Size the island for the worst case.
	  /** @type {box2d.b2Island} */
	  var island = this.m_island;
	  island.Initialize(this.m_bodyCount, this.m_contactManager.m_contactCount, this.m_jointCount, null, // this.m_stackAllocator,
	  this.m_contactManager.m_contactListener);

	  // Clear all the island flags.
	  for ( /* type {box2d.b2Body} */var b = this.m_bodyList; b; b = b.m_next) {
	    b.m_flag_islandFlag = false;
	  }
	  for ( /** @type {box2d.b2Contact} */var c = this.m_contactManager.m_contactList; c; c = c.m_next) {
	    c.m_flag_islandFlag = false;
	  }
	  for ( /** @type {box2d.b2Joint} */var j = this.m_jointList; j; j = j.m_next) {
	    j.m_islandFlag = false;
	  }

	  // Build and simulate all awake islands.
	  /** @type {number} */
	  var stackSize = this.m_bodyCount;
	  /** @type {Array.<?box2d.b2Body>} */
	  var stack = this.s_stack;
	  for ( /** @type {box2d.b2Body} */var seed = this.m_bodyList; seed; seed = seed.m_next) {
	    if (seed.m_flag_islandFlag) {
	      continue;
	    }

	    if (!seed.IsAwake() || !seed.IsActive()) {
	      continue;
	    }

	    // The seed can be dynamic or kinematic.
	    if (seed.GetType() === box2d.b2BodyType.b2_staticBody) {
	      continue;
	    }

	    // Reset island and stack.
	    island.Clear();
	    /** @type {number} */
	    var stackCount = 0;
	    stack[stackCount++] = seed;
	    seed.m_flag_islandFlag = true;

	    // Perform a depth first search (DFS) on the constraint graph.
	    while (stackCount > 0) {
	      // Grab the next body off the stack and add it to the island.
	      /* type {box2d.b2Body} */
	      var b = stack[--stackCount];
	      if (box2d.ENABLE_ASSERTS) {
	        box2d.b2Assert(b.IsActive());
	      }
	      island.AddBody(b);

	      // Make sure the body is awake.
	      b.SetAwake(true);

	      // To keep islands as small as possible, we don't
	      // propagate islands across static bodies.
	      if (b.GetType() === box2d.b2BodyType.b2_staticBody) {
	        continue;
	      }

	      // Search all contacts connected to this body.
	      for ( /** @type {box2d.b2ContactEdge} */var ce = b.m_contactList; ce; ce = ce.next) {
	        /** @type {box2d.b2Contact} */
	        var contact = ce.contact;

	        // Has this contact already been added to an island?
	        if (contact.m_flag_islandFlag) {
	          continue;
	        }

	        // Is this contact solid and touching?
	        if (!contact.IsEnabled() || !contact.IsTouching()) {
	          continue;
	        }

	        // Skip sensors.
	        /** @type {boolean} */
	        var sensorA = contact.m_fixtureA.m_isSensor;
	        /** @type {boolean} */
	        var sensorB = contact.m_fixtureB.m_isSensor;
	        if (sensorA || sensorB) {
	          continue;
	        }

	        island.AddContact(contact);
	        contact.m_flag_islandFlag = true;

	        /** @type {box2d.b2Body} */
	        var other = ce.other;

	        // Was the other body already added to this island?
	        if (other.m_flag_islandFlag) {
	          continue;
	        }

	        if (box2d.ENABLE_ASSERTS) {
	          box2d.b2Assert(stackCount < stackSize);
	        }
	        stack[stackCount++] = other;
	        other.m_flag_islandFlag = true;
	      }

	      // Search all joints connect to this body.
	      for ( /** @type {box2d.b2JointEdge} */var je = b.m_jointList; je; je = je.next) {
	        if (je.joint.m_islandFlag) {
	          continue;
	        }

	        /* type {box2d.b2Body} */
	        var other = je.other;

	        // Don't simulate joints connected to inactive bodies.
	        if (!other.IsActive()) {
	          continue;
	        }

	        island.AddJoint(je.joint);
	        je.joint.m_islandFlag = true;

	        if (other.m_flag_islandFlag) {
	          continue;
	        }

	        if (box2d.ENABLE_ASSERTS) {
	          box2d.b2Assert(stackCount < stackSize);
	        }
	        stack[stackCount++] = other;
	        other.m_flag_islandFlag = true;
	      }
	    }

	    /** @type {box2d.b2Profile} */
	    var profile = new box2d.b2Profile();
	    island.Solve(profile, step, this.m_gravity, this.m_allowSleep);
	    this.m_profile.solveInit += profile.solveInit;
	    this.m_profile.solveVelocity += profile.solveVelocity;
	    this.m_profile.solvePosition += profile.solvePosition;

	    // Post solve cleanup.
	    for ( /** @type {number} */var i = 0; i < island.m_bodyCount; ++i) {
	      // Allow static bodies to participate in other islands.
	      /* type {box2d.b2Body} */
	      var b = island.m_bodies[i];
	      if (b.GetType() === box2d.b2BodyType.b2_staticBody) {
	        b.m_flag_islandFlag = false;
	      }
	    }
	  }

	  for ( /* type {number} */var i = 0; i < stack.length; ++i) {
	    if (!stack[i]) break;
	    stack[i] = null;
	  }

	  {
	    /** @type {box2d.b2Timer} */
	    var timer = new box2d.b2Timer();

	    // Synchronize fixtures, check for out of range bodies.
	    for ( /* type {box2d.b2Body} */var b = this.m_bodyList; b; b = b.m_next) {
	      // If a body was not in an island then it did not move.
	      if (!b.m_flag_islandFlag) {
	        continue;
	      }

	      if (b.GetType() === box2d.b2BodyType.b2_staticBody) {
	        continue;
	      }

	      // Update fixtures (for broad-phase).
	      b.SynchronizeFixtures();
	    }

	    // Look for new contacts.
	    this.m_contactManager.FindNewContacts();
	    this.m_profile.broadphase = timer.GetMilliseconds();
	  }
	};

	/**
	 * Find TOI contacts and solve them.
	 * @export
	 * @return {void}
	 * @param {box2d.b2TimeStep} step
	 */
	box2d.b2World.prototype.SolveTOI = function (step) {
	  //  box2d.b2Island island(2 * box2d.b2_maxTOIContacts, box2d.b2_maxTOIContacts, 0, &m_stackAllocator, m_contactManager.m_contactListener);
	  /** @type {box2d.b2Island} */
	  var island = this.m_island;
	  island.Initialize(2 * box2d.b2_maxTOIContacts, box2d.b2_maxTOIContacts, 0, null, this.m_contactManager.m_contactListener);

	  if (this.m_stepComplete) {
	    for ( /** @type {box2d.b2Body} */var b = this.m_bodyList; b; b = b.m_next) {
	      b.m_flag_islandFlag = false;
	      b.m_sweep.alpha0 = 0;
	    }

	    for ( /** @type {box2d.b2Contact} */var c = this.m_contactManager.m_contactList; c; c = c.m_next) {
	      // Invalidate TOI
	      c.m_flag_toiFlag = c.m_flag_islandFlag = false;
	      c.m_toiCount = 0;
	      c.m_toi = 1;
	    }
	  }

	  // Find TOI events and solve them.
	  for (;;) {
	    // Find the first TOI.
	    /** @type {box2d.b2Contact} */
	    var minContact = null;
	    /** @type {number} */
	    var minAlpha = 1;

	    for ( /* type {box2d.b2Contact} */var c = this.m_contactManager.m_contactList; c; c = c.m_next) {
	      // Is this contact disabled?
	      if (!c.IsEnabled()) {
	        continue;
	      }

	      // Prevent excessive sub-stepping.
	      if (c.m_toiCount > box2d.b2_maxSubSteps) {
	        continue;
	      }

	      /** @type {number} */
	      var alpha = 1;
	      if (c.m_flag_toiFlag) {
	        // This contact has a valid cached TOI.
	        alpha = c.m_toi;
	      } else {
	        /** @type {box2d.b2Fixture} */
	        var fA = c.GetFixtureA();
	        /** @type {box2d.b2Fixture} */
	        var fB = c.GetFixtureB();

	        // Is there a sensor?
	        if (fA.IsSensor() || fB.IsSensor()) {
	          continue;
	        }

	        /** @type {box2d.b2Body} */
	        var bA = fA.GetBody();
	        /** @type {box2d.b2Body} */
	        var bB = fB.GetBody();

	        /** @type {box2d.b2BodyType} */
	        var typeA = bA.m_type;
	        /** @type {box2d.b2BodyType} */
	        var typeB = bB.m_type;
	        if (box2d.ENABLE_ASSERTS) {
	          box2d.b2Assert(typeA !== box2d.b2BodyType.b2_staticBody || typeB !== box2d.b2BodyType.b2_staticBody);
	        }

	        /** @type {boolean} */
	        var activeA = bA.IsAwake() && typeA !== box2d.b2BodyType.b2_staticBody;
	        /** @type {boolean} */
	        var activeB = bB.IsAwake() && typeB !== box2d.b2BodyType.b2_staticBody;

	        // Is at least one body active (awake and dynamic or kinematic)?
	        if (!activeA && !activeB) {
	          continue;
	        }

	        /** @type {boolean} */
	        var collideA = bA.IsBullet() || typeA !== box2d.b2BodyType.b2_dynamicBody;
	        /** @type {boolean} */
	        var collideB = bB.IsBullet() || typeB !== box2d.b2BodyType.b2_dynamicBody;

	        // Are these two non-bullet dynamic bodies?
	        if (!collideA && !collideB) {
	          continue;
	        }

	        // Compute the TOI for this contact.
	        // Put the sweeps onto the same time interval.
	        /** @type {number} */
	        var alpha0 = bA.m_sweep.alpha0;

	        if (bA.m_sweep.alpha0 < bB.m_sweep.alpha0) {
	          alpha0 = bB.m_sweep.alpha0;
	          bA.m_sweep.Advance(alpha0);
	        } else if (bB.m_sweep.alpha0 < bA.m_sweep.alpha0) {
	          alpha0 = bA.m_sweep.alpha0;
	          bB.m_sweep.Advance(alpha0);
	        }

	        if (box2d.ENABLE_ASSERTS) {
	          box2d.b2Assert(alpha0 < 1);
	        }

	        /** @type {number} */
	        var indexA = c.GetChildIndexA();
	        /** @type {number} */
	        var indexB = c.GetChildIndexB();

	        // Compute the time of impact in interval [0, minTOI]
	        /** @type {box2d.b2TOIInput} */
	        var input = box2d.b2World.prototype.SolveTOI.s_toi_input;
	        input.proxyA.SetShape(fA.GetShape(), indexA);
	        input.proxyB.SetShape(fB.GetShape(), indexB);
	        input.sweepA.Copy(bA.m_sweep);
	        input.sweepB.Copy(bB.m_sweep);
	        input.tMax = 1;

	        /** @type {box2d.b2TOIOutput} */
	        var output = box2d.b2World.prototype.SolveTOI.s_toi_output;
	        box2d.b2TimeOfImpact(output, input);

	        // Beta is the fraction of the remaining portion of the .
	        /** @type {number} */
	        var beta = output.t;
	        if (output.state === box2d.b2TOIOutputState.e_touching) {
	          alpha = box2d.b2Min(alpha0 + (1 - alpha0) * beta, 1);
	        } else {
	          alpha = 1;
	        }

	        c.m_toi = alpha;
	        c.m_flag_toiFlag = true;
	      }

	      if (alpha < minAlpha) {
	        // This is the minimum TOI found so far.
	        minContact = c;
	        minAlpha = alpha;
	      }
	    }

	    if (minContact === null || 1 - 10 * box2d.b2_epsilon < minAlpha) {
	      // No more TOI events. Done!
	      this.m_stepComplete = true;
	      break;
	    }

	    // Advance the bodies to the TOI.
	    /* type {box2d.b2Fixture} */
	    var fA = minContact.GetFixtureA();
	    /* type {box2d.b2Fixture} */
	    var fB = minContact.GetFixtureB();
	    /* type {box2d.b2Body} */
	    var bA = fA.GetBody();
	    /* type {box2d.b2Body} */
	    var bB = fB.GetBody();

	    /** @type {box2d.b2Sweep} */
	    var backup1 = box2d.b2World.prototype.SolveTOI.s_backup1.Copy(bA.m_sweep);
	    /** @type {box2d.b2Sweep} */
	    var backup2 = box2d.b2World.prototype.SolveTOI.s_backup2.Copy(bB.m_sweep);

	    bA.Advance(minAlpha);
	    bB.Advance(minAlpha);

	    // The TOI contact likely has some new contact points.
	    minContact.Update(this.m_contactManager.m_contactListener);
	    minContact.m_flag_toiFlag = false;
	    ++minContact.m_toiCount;

	    // Is the contact solid?
	    if (!minContact.IsEnabled() || !minContact.IsTouching()) {
	      // Restore the sweeps.
	      minContact.SetEnabled(false);
	      bA.m_sweep.Copy(backup1);
	      bB.m_sweep.Copy(backup2);
	      bA.SynchronizeTransform();
	      bB.SynchronizeTransform();
	      continue;
	    }

	    bA.SetAwake(true);
	    bB.SetAwake(true);

	    // Build the island
	    island.Clear();
	    island.AddBody(bA);
	    island.AddBody(bB);
	    island.AddContact(minContact);

	    bA.m_flag_islandFlag = true;
	    bB.m_flag_islandFlag = true;
	    minContact.m_flag_islandFlag = true;

	    // Get contacts on bodyA and bodyB.
	    //** @type {box2d.b2Body} */ var bodies = [bA, bB];
	    for ( /** @type {number} */var i = 0; i < 2; ++i) {
	      /** @type {box2d.b2Body} */
	      var body = i === 0 ? bA : bB; //bodies[i];
	      if (body.m_type === box2d.b2BodyType.b2_dynamicBody) {
	        for ( /** @type {box2d.b2ContactEdge} */var ce = body.m_contactList; ce; ce = ce.next) {
	          if (island.m_bodyCount === island.m_bodyCapacity) {
	            break;
	          }

	          if (island.m_contactCount === island.m_contactCapacity) {
	            break;
	          }

	          /** @type {box2d.b2Contact} */
	          var contact = ce.contact;

	          // Has this contact already been added to the island?
	          if (contact.m_flag_islandFlag) {
	            continue;
	          }

	          // Only add static, kinematic, or bullet bodies.
	          /** @type {box2d.b2Body} */
	          var other = ce.other;
	          if (other.m_type === box2d.b2BodyType.b2_dynamicBody && !body.IsBullet() && !other.IsBullet()) {
	            continue;
	          }

	          // Skip sensors.
	          /** @type {boolean} */
	          var sensorA = contact.m_fixtureA.m_isSensor;
	          /** @type {boolean} */
	          var sensorB = contact.m_fixtureB.m_isSensor;
	          if (sensorA || sensorB) {
	            continue;
	          }

	          // Tentatively advance the body to the TOI.
	          /** @type {box2d.b2Sweep} */
	          var backup = box2d.b2World.prototype.SolveTOI.s_backup.Copy(other.m_sweep);
	          if (!other.m_flag_islandFlag) {
	            other.Advance(minAlpha);
	          }

	          // Update the contact points
	          contact.Update(this.m_contactManager.m_contactListener);

	          // Was the contact disabled by the user?
	          if (!contact.IsEnabled()) {
	            other.m_sweep.Copy(backup);
	            other.SynchronizeTransform();
	            continue;
	          }

	          // Are there contact points?
	          if (!contact.IsTouching()) {
	            other.m_sweep.Copy(backup);
	            other.SynchronizeTransform();
	            continue;
	          }

	          // Add the contact to the island
	          contact.m_flag_islandFlag = true;
	          island.AddContact(contact);

	          // Has the other body already been added to the island?
	          if (other.m_flag_islandFlag) {
	            continue;
	          }

	          // Add the other body to the island.
	          other.m_flag_islandFlag = true;

	          if (other.m_type !== box2d.b2BodyType.b2_staticBody) {
	            other.SetAwake(true);
	          }

	          island.AddBody(other);
	        }
	      }
	    }

	    /** @type {box2d.b2TimeStep} */
	    var subStep = box2d.b2World.prototype.SolveTOI.s_subStep;
	    subStep.dt = (1 - minAlpha) * step.dt;
	    subStep.inv_dt = 1 / subStep.dt;
	    subStep.dtRatio = 1;
	    subStep.positionIterations = 20;
	    subStep.velocityIterations = step.velocityIterations;
	    //#if B2_ENABLE_PARTICLE
	    subStep.particleIterations = step.particleIterations;
	    //#endif
	    subStep.warmStarting = false;
	    island.SolveTOI(subStep, bA.m_islandIndex, bB.m_islandIndex);

	    // Reset island flags and synchronize broad-phase proxies.
	    for ( /* type {number} */var i = 0; i < island.m_bodyCount; ++i) {
	      /* type {box2d.b2Body} */
	      var body = island.m_bodies[i];
	      body.m_flag_islandFlag = false;

	      if (body.m_type !== box2d.b2BodyType.b2_dynamicBody) {
	        continue;
	      }

	      body.SynchronizeFixtures();

	      // Invalidate all contact TOIs on this displaced body.
	      for ( /* type {box2d.b2ContactEdge} */var ce = body.m_contactList; ce; ce = ce.next) {
	        ce.contact.m_flag_toiFlag = ce.contact.m_flag_islandFlag = false;
	      }
	    }

	    // Commit fixture proxy movements to the broad-phase so that new contacts are created.
	    // Also, some contacts can be destroyed.
	    this.m_contactManager.FindNewContacts();

	    if (this.m_subStepping) {
	      this.m_stepComplete = false;
	      break;
	    }
	  }
	};
	box2d.b2World.prototype.SolveTOI.s_subStep = new box2d.b2TimeStep();
	box2d.b2World.prototype.SolveTOI.s_backup = new box2d.b2Sweep();
	box2d.b2World.prototype.SolveTOI.s_backup1 = new box2d.b2Sweep();
	box2d.b2World.prototype.SolveTOI.s_backup2 = new box2d.b2Sweep();
	box2d.b2World.prototype.SolveTOI.s_toi_input = new box2d.b2TOIInput();
	box2d.b2World.prototype.SolveTOI.s_toi_output = new box2d.b2TOIOutput();

	/**
	 * Take a time step. This performs collision detection,
	 * integration, and constraint solution.
	 * @export
	 * @return {void}
	 * @param {number} dt the amount of time to simulate, this should not vary.
	 * @param {number} velocityIterations for the velocity constraint solver.
	 * @param {number} positionIterations for the position constraint solver.
	 * @param {number=} particleIterations for the particle constraint solver.
	 */
	//#if B2_ENABLE_PARTICLE
	box2d.b2World.prototype.Step = function (dt, velocityIterations, positionIterations, particleIterations)
	//#else
	//box2d.b2World.prototype.Step = function (dt, velocityIterations, positionIterations)
	//#endif
	{
	  //#if B2_ENABLE_PARTICLE
	  particleIterations = particleIterations || this.CalculateReasonableParticleIterations(dt);
	  //#endif

	  /** @type {box2d.b2Timer} */
	  var stepTimer = new box2d.b2Timer();

	  // If new fixtures were added, we need to find the new contacts.
	  if (this.m_flag_newFixture) {
	    this.m_contactManager.FindNewContacts();
	    this.m_flag_newFixture = false;
	  }

	  this.m_flag_locked = true;

	  /** @type {box2d.b2TimeStep} */
	  var step = box2d.b2World.prototype.Step.s_step;
	  step.dt = dt;
	  step.velocityIterations = velocityIterations;
	  step.positionIterations = positionIterations;
	  //#if B2_ENABLE_PARTICLE
	  step.particleIterations = particleIterations;
	  //#endif
	  if (dt > 0) {
	    step.inv_dt = 1 / dt;
	  } else {
	    step.inv_dt = 0;
	  }

	  step.dtRatio = this.m_inv_dt0 * dt;

	  step.warmStarting = this.m_warmStarting;

	  // Update contacts. This is where some contacts are destroyed.
	  {
	    /** @type {box2d.b2Timer} */
	    var timer = new box2d.b2Timer();
	    this.m_contactManager.Collide();
	    this.m_profile.collide = timer.GetMilliseconds();
	  }

	  // Integrate velocities, solve velocity constraints, and integrate positions.
	  if (this.m_stepComplete && step.dt > 0) {
	    /* type {box2d.b2Timer} */
	    var timer = new box2d.b2Timer();
	    //#if B2_ENABLE_PARTICLE
	    for ( /** @type {box2d.b2ParticleSystem} */var p = this.m_particleSystemList; p; p = p.m_next) {
	      p.Solve(step); // Particle Simulation
	    }
	    //#endif
	    this.Solve(step);
	    this.m_profile.solve = timer.GetMilliseconds();
	  }

	  // Handle TOI events.
	  if (this.m_continuousPhysics && step.dt > 0) {
	    /* type {box2d.b2Timer} */
	    var timer = new box2d.b2Timer();
	    this.SolveTOI(step);
	    this.m_profile.solveTOI = timer.GetMilliseconds();
	  }

	  if (step.dt > 0) {
	    this.m_inv_dt0 = step.inv_dt;
	  }

	  if (this.m_flag_clearForces) {
	    this.ClearForces();
	  }

	  this.m_flag_locked = false;

	  this.m_profile.step = stepTimer.GetMilliseconds();
	};
	box2d.b2World.prototype.Step.s_step = new box2d.b2TimeStep();

	/**
	 * Manually clear the force buffer on all bodies. By default,
	 * forces are cleared automatically after each call to Step. The
	 * default behavior is modified by calling SetAutoClearForces.
	 * The purpose of this function is to support sub-stepping.
	 * Sub-stepping is often used to maintain a fixed sized time
	 * step under a variable frame-rate.
	 * When you perform sub-stepping you will disable auto clearing
	 * of forces and instead call ClearForces after all sub-steps
	 * are complete in one pass of your game loop.
	 * @see SetAutoClearForces
	 * @export
	 * @return {void}
	 */
	box2d.b2World.prototype.ClearForces = function () {
	  for ( /** @type {box2d.b2Body} */var body = this.m_bodyList; body; body = body.m_next) {
	    body.m_force.SetZero();
	    body.m_torque = 0;
	  }
	};

	/**
	 * Query the world for all fixtures that potentially overlap the
	 * provided AABB.
	 * @export
	 * @return {void}
	 * @param
	 *      {box2d.b2QueryCallback|function(box2d.b2Fixture):boolean}
	 *      callback a user implemented callback class.
	 * @param {box2d.b2AABB} aabb the query box.
	 */
	box2d.b2World.prototype.QueryAABB = function (callback, aabb) {
	  /** @type {box2d.b2BroadPhase} */
	  var broadPhase = this.m_contactManager.m_broadPhase;

	  /**
	   * @return {boolean}
	   * @param {box2d.b2TreeNode} proxy
	   */
	  var WorldQueryAABBWrapper = function WorldQueryAABBWrapper(proxy) {
	    /* type {box2d.b2FixtureProxy} */
	    var fixture_proxy = broadPhase.GetUserData(proxy);
	    if (box2d.ENABLE_ASSERTS) {
	      box2d.b2Assert(fixture_proxy instanceof box2d.b2FixtureProxy);
	    }
	    /** @type {box2d.b2Fixture} */
	    var fixture = fixture_proxy.fixture;
	    if (callback instanceof box2d.b2QueryCallback) {
	      return callback.ReportFixture(fixture);
	    } else //if (typeof(callback) === 'function')
	      {
	        return callback(fixture);
	      }
	  };

	  broadPhase.Query(WorldQueryAABBWrapper, aabb);
	  //#if B2_ENABLE_PARTICLE
	  if (callback instanceof box2d.b2QueryCallback) {
	    for ( /** @type {box2d.b2ParticleSystem} */var p = this.m_particleSystemList; p; p = p.m_next) {
	      if (callback.ShouldQueryParticleSystem(p)) {
	        p.QueryAABB(callback, aabb);
	      }
	    }
	  }
	  //#endif
	};

	/**
	 * @export
	 * @return {void}
	 * @param
	 *      {box2d.b2QueryCallback|function(box2d.b2Fixture):boolean}
	 *      callback
	 * @param {box2d.b2Shape} shape
	 * @param {box2d.b2Transform} transform
	 * @param {number=} childIndex
	 */
	box2d.b2World.prototype.QueryShape = function (callback, shape, transform, childIndex) {
	  /** @type {box2d.b2BroadPhase} */
	  var broadPhase = this.m_contactManager.m_broadPhase;

	  /**
	   * @return {boolean}
	   * @param {box2d.b2TreeNode} proxy
	   */
	  var WorldQueryShapeWrapper = function WorldQueryShapeWrapper(proxy) {
	    /* type {box2d.b2FixtureProxy} */
	    var fixture_proxy = broadPhase.GetUserData(proxy);
	    if (box2d.ENABLE_ASSERTS) {
	      box2d.b2Assert(fixture_proxy instanceof box2d.b2FixtureProxy);
	    }
	    /** @type {box2d.b2Fixture} */
	    var fixture = fixture_proxy.fixture;
	    if (box2d.b2TestOverlap_Shape(shape, 0, fixture.GetShape(), 0, transform, fixture.GetBody().GetTransform())) {
	      if (callback instanceof box2d.b2QueryCallback) {
	        return callback.ReportFixture(fixture);
	      } else //if (typeof(callback) === 'function')
	        {
	          return callback(fixture);
	        }
	    }
	    return true;
	  };

	  childIndex = childIndex || 0;
	  /** @type {box2d.b2AABB} */
	  var aabb = box2d.b2World.prototype.QueryShape.s_aabb;
	  shape.ComputeAABB(aabb, transform, childIndex);
	  broadPhase.Query(WorldQueryShapeWrapper, aabb);
	  //#if B2_ENABLE_PARTICLE
	  if (callback instanceof box2d.b2QueryCallback) {
	    for ( /** @type {box2d.b2ParticleSystem} */var p = this.m_particleSystemList; p; p = p.m_next) {
	      if (callback.ShouldQueryParticleSystem(p)) {
	        p.QueryAABB(callback, aabb);
	      }
	    }
	  }
	  //#endif
	};
	box2d.b2World.prototype.QueryShape.s_aabb = new box2d.b2AABB();

	/**
	 * @export
	 * @return {void}
	 * @param
	 *      {box2d.b2QueryCallback|function(box2d.b2Fixture):boolean}
	 *      callback
	 * @param {box2d.b2Vec2} point
	 * @param {number=} slop
	 */
	box2d.b2World.prototype.QueryPoint = function (callback, point, slop) {
	  /** @type {box2d.b2BroadPhase} */
	  var broadPhase = this.m_contactManager.m_broadPhase;

	  /**
	   * @return {boolean}
	   * @param {box2d.b2TreeNode} proxy
	   */
	  var WorldQueryWrapper = function WorldQueryWrapper(proxy) {
	    /* type {box2d.b2FixtureProxy} */
	    var fixture_proxy = broadPhase.GetUserData(proxy);
	    if (box2d.ENABLE_ASSERTS) {
	      box2d.b2Assert(fixture_proxy instanceof box2d.b2FixtureProxy);
	    }
	    /** @type {box2d.b2Fixture} */
	    var fixture = fixture_proxy.fixture;
	    if (fixture.TestPoint(point)) {
	      if (callback instanceof box2d.b2QueryCallback) {
	        return callback.ReportFixture(fixture);
	      } else //if (typeof(callback) === 'function')
	        {
	          return callback(fixture);
	        }
	    }
	    return true;
	  };

	  slop = typeof slop === 'number' ? slop : box2d.b2_linearSlop;
	  /** @type {box2d.b2AABB} */
	  var aabb = box2d.b2World.prototype.QueryPoint.s_aabb;
	  aabb.lowerBound.Set(point.x - slop, point.y - slop);
	  aabb.upperBound.Set(point.x + slop, point.y + slop);
	  broadPhase.Query(WorldQueryWrapper, aabb);
	  //#if B2_ENABLE_PARTICLE
	  if (callback instanceof box2d.b2QueryCallback) {
	    for ( /** @type {box2d.b2ParticleSystem} */var p = this.m_particleSystemList; p; p = p.m_next) {
	      if (callback.ShouldQueryParticleSystem(p)) {
	        p.QueryAABB(callback, aabb);
	      }
	    }
	  }
	  //#endif
	};
	box2d.b2World.prototype.QueryPoint.s_aabb = new box2d.b2AABB();

	/**
	 * Ray-cast the world for all fixtures in the path of the ray.
	 * Your callback controls whether you get the closest point, any
	 * point, or n-points. The ray-cast ignores shapes that contain
	 * the starting point.
	 * @export
	 * @return {void}
	 * @param
	 *      {box2d.b2RayCastCallback|function(box2d.b2Fixture,box2d.b2Vec2,box2d.b2Vec2,number):number}
	 *      callback a user implemented callback class.
	 * @param {box2d.b2Vec2} point1 the ray starting point
	 * @param {box2d.b2Vec2} point2 the ray ending point
	 */
	box2d.b2World.prototype.RayCast = function (callback, point1, point2) {
	  /** @type {box2d.b2BroadPhase} */
	  var broadPhase = this.m_contactManager.m_broadPhase;

	  /**
	   * @return {number}
	   * @param {box2d.b2RayCastInput} input
	   * @param {box2d.b2TreeNode} proxy
	   */
	  var WorldRayCastWrapper = function WorldRayCastWrapper(input, proxy) {
	    /* type {box2d.b2FixtureProxy} */
	    var fixture_proxy = broadPhase.GetUserData(proxy);
	    if (box2d.ENABLE_ASSERTS) {
	      box2d.b2Assert(fixture_proxy instanceof box2d.b2FixtureProxy);
	    }
	    /** @type {box2d.b2Fixture} */
	    var fixture = fixture_proxy.fixture;
	    /** @type {number} */
	    var index = fixture_proxy.childIndex;
	    /** @type {box2d.b2RayCastOutput} */
	    var output = box2d.b2World.prototype.RayCast.s_output;
	    /** @type {boolean} */
	    var hit = fixture.RayCast(output, input, index);

	    if (hit) {
	      /** @type {number} */
	      var fraction = output.fraction;
	      /** @type {box2d.b2Vec2} */
	      var point = box2d.b2World.prototype.RayCast.s_point;
	      point.Set((1 - fraction) * point1.x + fraction * point2.x, (1 - fraction) * point1.y + fraction * point2.y);

	      if (callback instanceof box2d.b2RayCastCallback) {
	        return callback.ReportFixture(fixture, point, output.normal, fraction);
	      } else //if (typeof(callback) === 'function')
	        {
	          return callback(fixture, point, output.normal, fraction);
	        }
	    }
	    return input.maxFraction;
	  };

	  /** @type {box2d.b2RayCastInput} */
	  var input = box2d.b2World.prototype.RayCast.s_input;
	  input.maxFraction = 1;
	  input.p1.Copy(point1);
	  input.p2.Copy(point2);
	  broadPhase.RayCast(WorldRayCastWrapper, input);
	  //#if B2_ENABLE_PARTICLE
	  if (callback instanceof box2d.b2RayCastCallback) {
	    for ( /** @type {box2d.b2ParticleSystem} */var p = this.m_particleSystemList; p; p = p.m_next) {
	      if (callback.ShouldQueryParticleSystem(p)) {
	        p.RayCast(callback, point1, point2);
	      }
	    }
	  }
	  //#endif
	};
	box2d.b2World.prototype.RayCast.s_input = new box2d.b2RayCastInput();
	box2d.b2World.prototype.RayCast.s_output = new box2d.b2RayCastOutput();
	box2d.b2World.prototype.RayCast.s_point = new box2d.b2Vec2();

	/**
	 * @export
	 * @return {box2d.b2Fixture}
	 * @param {box2d.b2Vec2} point1
	 * @param {box2d.b2Vec2} point2
	 */
	box2d.b2World.prototype.RayCastOne = function (point1, point2) {
	  /** @type {box2d.b2Fixture} */
	  var result = null;
	  /** @type {number} */
	  var min_fraction = 1;

	  /**
	   * @return {number}
	   * @param {box2d.b2Fixture} fixture
	   * @param {box2d.b2Vec2} point
	   * @param {box2d.b2Vec2} normal
	   * @param {number} fraction
	   */
	  function WorldRayCastOneWrapper(fixture, point, normal, fraction) {
	    if (fraction < min_fraction) {
	      min_fraction = fraction;
	      result = fixture;
	    }

	    return min_fraction;
	  }

	  this.RayCast(WorldRayCastOneWrapper, point1, point2);

	  return result;
	};

	/**
	 * @export
	 * @return {Array.<box2d.b2Fixture>}
	 * @param {box2d.b2Vec2} point1
	 * @param {box2d.b2Vec2} point2
	 * @param {Array.<box2d.b2Fixture>} out
	 */
	box2d.b2World.prototype.RayCastAll = function (point1, point2, out) {
	  out.length = 0;

	  /**
	   * @return {number}
	   * @param {box2d.b2Fixture} fixture
	   * @param {box2d.b2Vec2} point
	   * @param {box2d.b2Vec2} normal
	   * @param {number} fraction
	   */
	  function WorldRayCastAllWrapper(fixture, point, normal, fraction) {
	    out.push(fixture);
	    return 1;
	  }

	  this.RayCast(WorldRayCastAllWrapper, point1, point2);

	  return out;
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2Fixture} fixture
	 * @param {box2d.b2Color} color
	 */
	box2d.b2World.prototype.DrawShape = function (fixture, color) {
	  /** @type {box2d.b2Shape} */
	  var shape = fixture.GetShape();

	  switch (shape.m_type) {
	    case box2d.b2ShapeType.e_circleShape:
	      {
	        /** @type {box2d.b2CircleShape} */
	        var circle = shape instanceof box2d.b2CircleShape ? shape : null;

	        /** @type {box2d.b2Vec2} */
	        var center = circle.m_p;
	        /** @type {number} */
	        var radius = circle.m_radius;
	        /** @type {box2d.b2Vec2} */
	        var axis = box2d.b2Vec2.UNITX;

	        this.m_debugDraw.DrawSolidCircle(center, radius, axis, color);
	      }
	      break;

	    case box2d.b2ShapeType.e_edgeShape:
	      {
	        /** @type {box2d.b2EdgeShape} */
	        var edge = shape instanceof box2d.b2EdgeShape ? shape : null;
	        /** @type {box2d.b2Vec2} */
	        var v1 = edge.m_vertex1;
	        /** @type {box2d.b2Vec2} */
	        var v2 = edge.m_vertex2;
	        this.m_debugDraw.DrawSegment(v1, v2, color);
	      }
	      break;

	    case box2d.b2ShapeType.e_chainShape:
	      {
	        /** @type {box2d.b2ChainShape} */
	        var chain = shape instanceof box2d.b2ChainShape ? shape : null;
	        /** @type {number} */
	        var count = chain.m_count;
	        /* type {Array.<box2d.b2Vec2>} */
	        var vertices = chain.m_vertices;

	        /* type {box2d.b2Vec2} */
	        var v1 = vertices[0];
	        this.m_debugDraw.DrawCircle(v1, 0.05, color);
	        for ( /** @type {number} */var i = 1; i < count; ++i) {
	          /* type {box2d.b2Vec2} */
	          var v2 = vertices[i];
	          this.m_debugDraw.DrawSegment(v1, v2, color);
	          this.m_debugDraw.DrawCircle(v2, 0.05, color);
	          v1 = v2;
	        }
	      }
	      break;

	    case box2d.b2ShapeType.e_polygonShape:
	      {
	        /** @type {box2d.b2PolygonShape} */
	        var poly = shape instanceof box2d.b2PolygonShape ? shape : null;
	        /** @type {number} */
	        var vertexCount = poly.m_count;
	        /* type {Array.<box2d.b2Vec2>} */
	        var vertices = poly.m_vertices;

	        this.m_debugDraw.DrawSolidPolygon(vertices, vertexCount, color);
	      }
	      break;
	  }
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2Joint} joint
	 */
	box2d.b2World.prototype.DrawJoint = function (joint) {
	  /** @type {box2d.b2Body} */
	  var bodyA = joint.GetBodyA();
	  /** @type {box2d.b2Body} */
	  var bodyB = joint.GetBodyB();
	  /** @type {box2d.b2Transform} */
	  var xf1 = bodyA.m_xf;
	  /** @type {box2d.b2Transform} */
	  var xf2 = bodyB.m_xf;
	  /** @type {box2d.b2Vec2} */
	  var x1 = xf1.p;
	  /** @type {box2d.b2Vec2} */
	  var x2 = xf2.p;
	  /** @type {box2d.b2Vec2} */
	  var p1 = joint.GetAnchorA(box2d.b2World.prototype.DrawJoint.s_p1);
	  /** @type {box2d.b2Vec2} */
	  var p2 = joint.GetAnchorB(box2d.b2World.prototype.DrawJoint.s_p2);

	  /** @type {box2d.b2Color} */
	  var color = box2d.b2World.prototype.DrawJoint.s_color.SetRGB(0.5, 0.8, 0.8);

	  switch (joint.m_type) {
	    case box2d.b2JointType.e_distanceJoint:
	      this.m_debugDraw.DrawSegment(p1, p2, color);
	      break;

	    case box2d.b2JointType.e_pulleyJoint:
	      {
	        /** @type {box2d.b2PulleyJoint} */
	        var pulley = joint instanceof box2d.b2PulleyJoint ? joint : null;
	        /** @type {box2d.b2Vec2} */
	        var s1 = pulley.GetGroundAnchorA(box2d.b2World.prototype.DrawJoint.s_s1);
	        /** @type {box2d.b2Vec2} */
	        var s2 = pulley.GetGroundAnchorB(box2d.b2World.prototype.DrawJoint.s_s2);
	        this.m_debugDraw.DrawSegment(s1, p1, color);
	        this.m_debugDraw.DrawSegment(s2, p2, color);
	        this.m_debugDraw.DrawSegment(s1, s2, color);
	      }
	      break;

	    case box2d.b2JointType.e_mouseJoint:
	      // don't draw this
	      this.m_debugDraw.DrawSegment(p1, p2, color);
	      break;

	    default:
	      this.m_debugDraw.DrawSegment(x1, p1, color);
	      this.m_debugDraw.DrawSegment(p1, p2, color);
	      this.m_debugDraw.DrawSegment(x2, p2, color);
	  }
	};
	box2d.b2World.prototype.DrawJoint.s_p1 = new box2d.b2Vec2();
	box2d.b2World.prototype.DrawJoint.s_p2 = new box2d.b2Vec2();
	box2d.b2World.prototype.DrawJoint.s_color = new box2d.b2Color(0.5, 0.8, 0.8);
	box2d.b2World.prototype.DrawJoint.s_s1 = new box2d.b2Vec2();
	box2d.b2World.prototype.DrawJoint.s_s2 = new box2d.b2Vec2();

	//#if B2_ENABLE_PARTICLE

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2ParticleSystem} system
	 */
	box2d.b2World.prototype.DrawParticleSystem = function (system) {
	  var particleCount = system.GetParticleCount();
	  if (particleCount) {
	    var radius = system.GetRadius();
	    var positionBuffer = system.GetPositionBuffer();
	    if (system.m_colorBuffer.data) {
	      var colorBuffer = system.GetColorBuffer();
	      this.m_debugDraw.DrawParticles(positionBuffer, radius, colorBuffer, particleCount);
	    } else {
	      this.m_debugDraw.DrawParticles(positionBuffer, radius, null, particleCount);
	    }
	  }
	};

	//#endif

	/**
	 * Call this to draw shapes and other debug draw data.
	 * @export
	 * @return {void}
	 */
	box2d.b2World.prototype.DrawDebugData = function () {
	  if (this.m_debugDraw === null) {
	    return;
	  }

	  /** @type {number} */
	  var flags = this.m_debugDraw.GetFlags();
	  /** @type {box2d.b2Color} */
	  var color = box2d.b2World.prototype.DrawDebugData.s_color.SetRGB(0, 0, 0);

	  if (flags & box2d.b2DrawFlags.e_shapeBit) {
	    for ( /** @type {box2d.b2Body} */var b = this.m_bodyList; b; b = b.m_next) {
	      /** @type {box2d.b2Transform} */
	      var xf = b.m_xf;

	      this.m_debugDraw.PushTransform(xf);

	      for ( /** @type {box2d.b2Fixture} */var f = b.GetFixtureList(); f; f = f.m_next) {
	        if (!b.IsActive()) {
	          color.SetRGB(0.5, 0.5, 0.3);
	          this.DrawShape(f, color);
	        } else if (b.GetType() === box2d.b2BodyType.b2_staticBody) {
	          color.SetRGB(0.5, 0.9, 0.5);
	          this.DrawShape(f, color);
	        } else if (b.GetType() === box2d.b2BodyType.b2_kinematicBody) {
	          color.SetRGB(0.5, 0.5, 0.9);
	          this.DrawShape(f, color);
	        } else if (!b.IsAwake()) {
	          color.SetRGB(0.6, 0.6, 0.6);
	          this.DrawShape(f, color);
	        } else {
	          color.SetRGB(0.9, 0.7, 0.7);
	          this.DrawShape(f, color);
	        }
	      }

	      this.m_debugDraw.PopTransform(xf);
	    }
	  }

	  //#if B2_ENABLE_PARTICLE
	  if (flags & box2d.b2DrawFlags.e_particleBit) {
	    for ( /** @type {box2d.b2ParticleSystem} */var p = this.m_particleSystemList; p; p = p.m_next) {
	      this.DrawParticleSystem(p);
	    }
	  }
	  //#endif

	  if (flags & box2d.b2DrawFlags.e_jointBit) {
	    for ( /** @type {box2d.b2Joint} */var j = this.m_jointList; j; j = j.m_next) {
	      this.DrawJoint(j);
	    }
	  }

	  /*
	  if (flags & box2d.b2DrawFlags.e_pairBit)
	  {
	    color.SetRGB(0.3, 0.9, 0.9);
	    for (var contact = this.m_contactManager.m_contactList; contact; contact = contact.m_next)
	    {
	      var fixtureA = contact.GetFixtureA();
	      var fixtureB = contact.GetFixtureB();
	       var cA = fixtureA.GetAABB().GetCenter();
	      var cB = fixtureB.GetAABB().GetCenter();
	       this.m_debugDraw.DrawSegment(cA, cB, color);
	    }
	  }
	  */

	  if (flags & box2d.b2DrawFlags.e_aabbBit) {
	    color.SetRGB(0.9, 0.3, 0.9);
	    /** @type {box2d.b2BroadPhase} */
	    var bp = this.m_contactManager.m_broadPhase;
	    /** @type {Array.<box2d.b2Vec2>} */
	    var vs = box2d.b2World.prototype.DrawDebugData.s_vs;

	    for ( /* type {box2d.b2Body} */var b = this.m_bodyList; b; b = b.m_next) {
	      if (!b.IsActive()) {
	        continue;
	      }

	      for ( /* type {box2d.b2Fixture} */var f = b.GetFixtureList(); f; f = f.m_next) {
	        for ( /** @type {number} */var i = 0; i < f.m_proxyCount; ++i) {
	          /** @type {box2d.b2FixtureProxy} */
	          var proxy = f.m_proxies[i];

	          /** @type {box2d.b2AABB} */
	          var aabb = bp.GetFatAABB(proxy.proxy);
	          vs[0].Set(aabb.lowerBound.x, aabb.lowerBound.y);
	          vs[1].Set(aabb.upperBound.x, aabb.lowerBound.y);
	          vs[2].Set(aabb.upperBound.x, aabb.upperBound.y);
	          vs[3].Set(aabb.lowerBound.x, aabb.upperBound.y);

	          this.m_debugDraw.DrawPolygon(vs, 4, color);
	        }
	      }
	    }
	  }

	  if (flags & box2d.b2DrawFlags.e_centerOfMassBit) {
	    for ( /* type {box2d.b2Body} */var b = this.m_bodyList; b; b = b.m_next) {
	      /* type {box2d.b2Transform} */
	      var xf = box2d.b2World.prototype.DrawDebugData.s_xf;
	      xf.q.Copy(b.m_xf.q);
	      xf.p.Copy(b.GetWorldCenter());
	      this.m_debugDraw.DrawTransform(xf);
	    }
	  }

	  //#if B2_ENABLE_CONTROLLER
	  /// @see box2d.b2Controller list
	  if (flags & box2d.b2DrawFlags.e_controllerBit) {
	    for ( /** @type {box2d.b2Controller} */var c = this.m_controllerList; c; c = c.m_next) {
	      c.Draw(this.m_debugDraw);
	    }
	  }
	  //#endif
	};
	box2d.b2World.prototype.DrawDebugData.s_color = new box2d.b2Color(0, 0, 0);
	box2d.b2World.prototype.DrawDebugData.s_vs = box2d.b2Vec2.MakeArray(4);
	box2d.b2World.prototype.DrawDebugData.s_xf = new box2d.b2Transform();

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2BroadPhase} broadPhase
	 */
	box2d.b2World.prototype.SetBroadPhase = function (broadPhase) {
	  var oldBroadPhase = this.m_contactManager.m_broadPhase;

	  this.m_contactManager.m_broadPhase = broadPhase;

	  for ( /** @type {box2d.b2Body} */var b = this.m_bodyList; b; b = b.m_next) {
	    for ( /** @type {box2d.b2Fixture} */var f = b.m_fixtureList; f; f = f.m_next) {
	      f.m_proxy = broadPhase.CreateProxy(oldBroadPhase.GetFatAABB(f.m_proxy), f);
	    }
	  }
	};

	//#if B2_ENABLE_PARTICLE

	/**
	 * Recommend a value to be used in `Step` for
	 * `particleIterations`. This calculation is necessarily a
	 * simplification and should only be used as a starting point.
	 * Please see "Particle Iterations" in the Programmer's Guide
	 * for details.
	 *
	 * @export
	 * @return {number}
	 * @param {number} timeStep is the value to be passed into
	 *      `Step`.
	 */
	box2d.b2World.prototype.CalculateReasonableParticleIterations = function (timeStep) {
	  if (this.m_particleSystemList === null) {
	    return 1;
	  }

	  function GetSmallestRadius(world) {
	    var smallestRadius = box2d.b2_maxFloat;
	    for ( /** @type {box2d.b2ParticleSystem} */var system = world.GetParticleSystemList(); system !== null; system = system.m_next) {
	      smallestRadius = box2d.b2Min(smallestRadius, system.GetRadius());
	    }
	    return smallestRadius;
	  }

	  // Use the smallest radius, since that represents the worst-case.
	  return box2d.b2CalculateParticleIterations(this.m_gravity.Length(), GetSmallestRadius(this), timeStep);
	};

	//#endif

	/**
	 * Get the number of broad-phase proxies.
	 * @export
	 * @return {number}
	 */
	box2d.b2World.prototype.GetProxyCount = function () {
	  return this.m_contactManager.m_broadPhase.GetProxyCount();
	};

	/**
	 * Get the height of the dynamic tree.
	 * @export
	 * @return {number}
	 */
	box2d.b2World.prototype.GetTreeHeight = function () {
	  return this.m_contactManager.m_broadPhase.GetTreeHeight();
	};

	/**
	 * Get the balance of the dynamic tree.
	 * @export
	 * @return {number}
	 */
	box2d.b2World.prototype.GetTreeBalance = function () {
	  return this.m_contactManager.m_broadPhase.GetTreeBalance();
	};

	/**
	 * Get the quality metric of the dynamic tree. The smaller the
	 * better. The minimum is 1.
	 * @export
	 * @return {number}
	 */
	box2d.b2World.prototype.GetTreeQuality = function () {
	  return this.m_contactManager.m_broadPhase.GetTreeQuality();
	};

	/**
	 * Shift the world origin. Useful for large worlds.
	 * The body shift formula is: position -= newOrigin
	 * @export
	 * @return {void}
	 * @param {box2d.b2Vec2} newOrigin the new origin with respect to the old origin
	 */
	box2d.b2World.prototype.ShiftOrigin = function (newOrigin) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(!this.IsLocked());
	  }
	  if (this.IsLocked()) {
	    return;
	  }

	  for ( /** @type {box2d.b2Body} */var b = this.m_bodyList; b; b = b.m_next) {
	    b.m_xf.p.SelfSub(newOrigin);
	    b.m_sweep.c0.SelfSub(newOrigin);
	    b.m_sweep.c.SelfSub(newOrigin);
	  }

	  for ( /** @type {box2d.b2Joint} */var j = this.m_jointList; j; j = j.m_next) {
	    j.ShiftOrigin(newOrigin);
	  }

	  this.m_contactManager.m_broadPhase.ShiftOrigin(newOrigin);
	};

	/**
	 * Dump the world into the log file.
	 * warning this should be called outside of a time step.
	 * @export
	 * @return {void}
	 */
	box2d.b2World.prototype.Dump = function () {
	  if (box2d.DEBUG) {
	    if (this.m_flag_locked) {
	      return;
	    }

	    box2d.b2Log("/** @type {box2d.b2Vec2} */ var g = new box2d.b2Vec2(%.15f, %.15f);\n", this.m_gravity.x, this.m_gravity.y);
	    box2d.b2Log("this.m_world.SetGravity(g);\n");

	    box2d.b2Log("/** @type {Array.<box2d.b2Body>} */ var bodies = new Array(%d);\n", this.m_bodyCount);
	    box2d.b2Log("/** @type {Array.<box2d.b2Joint>} */ var joints = new Array(%d);\n", this.m_jointCount);
	    var i = 0;
	    for ( /** @type {box2d.b2Body} */var b = this.m_bodyList; b; b = b.m_next) {
	      b.m_islandIndex = i;
	      b.Dump();
	      ++i;
	    }

	    i = 0;
	    for ( /** @type {box2d.b2Joint} */var j = this.m_jointList; j; j = j.m_next) {
	      j.m_index = i;
	      ++i;
	    }

	    // First pass on joints, skip gear joints.
	    for ( /* type {box2d.b2Joint} */var j = this.m_jointList; j; j = j.m_next) {
	      if (j.m_type === box2d.b2JointType.e_gearJoint) {
	        continue;
	      }

	      box2d.b2Log("{\n");
	      j.Dump();
	      box2d.b2Log("}\n");
	    }

	    // Second pass on joints, only gear joints.
	    for ( /* type {box2d.b2Joint} */var j = this.m_jointList; j; j = j.m_next) {
	      if (j.m_type !== box2d.b2JointType.e_gearJoint) {
	        continue;
	      }

	      box2d.b2Log("{\n");
	      j.Dump();
	      box2d.b2Log("}\n");
	    }
	  }
	};

	//#if B2_ENABLE_CONTROLLER

	/**
	 * @see box2d.b2Controller list
	 * @export
	 * @return {box2d.b2Controller}
	 * @param {box2d.b2Controller} controller
	 */
	box2d.b2World.prototype.AddController = function (controller) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(controller.m_world === null, "Controller can only be a member of one world");
	  }
	  controller.m_world = this;
	  controller.m_next = this.m_controllerList;
	  controller.m_prev = null;
	  if (this.m_controllerList) this.m_controllerList.m_prev = controller;
	  this.m_controllerList = controller;
	  ++this.m_controllerCount;
	  return controller;
	};

	/**
	 * @see box2d.b2Controller list
	 * @export
	 * @return {void}
	 * @param {box2d.b2Controller} controller
	 */
	box2d.b2World.prototype.RemoveController = function (controller) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(controller.m_world === this, "Controller is not a member of this world");
	  }
	  if (controller.m_prev) controller.m_prev.m_next = controller.m_next;
	  if (controller.m_next) controller.m_next.m_prev = controller.m_prev;
	  if (this.m_controllerList === controller) this.m_controllerList = controller.m_next;
	  --this.m_controllerCount;
	  controller.m_prev = null;
	  controller.m_next = null;
	  controller.m_world = null;
	};

	//#endif

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(6);

	__webpack_require__(13);

	__webpack_require__(11);

	__webpack_require__(22);

	/**
	 * Delegate of box2d.b2World.
	 * @constructor
	 */
	box2d.b2ContactManager = function () {
	  this.m_broadPhase = new box2d.b2BroadPhase();

	  this.m_contactFactory = new box2d.b2ContactFactory(this.m_allocator);
	};

	/**
	 * @export
	 * @type {box2d.b2BroadPhase}
	 */
	/*
	 * Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
	 *
	 * This software is provided 'as-is', without any express or implied
	 * warranty.  In no event will the authors be held liable for any damages
	 * arising from the use of this software.
	 * Permission is granted to anyone to use this software for any purpose,
	 * including commercial applications, and to alter it and redistribute it
	 * freely, subject to the following restrictions:
	 * 1. The origin of this software must not be misrepresented; you must not
	 * claim that you wrote the original software. If you use this software
	 * in a product, an acknowledgment in the product documentation would be
	 * appreciated but is not required.
	 * 2. Altered source versions must be plainly marked as such, and must not be
	 * misrepresented as being the original software.
	 * 3. This notice may not be removed or altered from any source distribution.
	 */

	box2d.b2ContactManager.prototype.m_broadPhase = null;
	/**
	 * @export
	 * @type {box2d.b2Contact}
	 */
	box2d.b2ContactManager.prototype.m_contactList = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2ContactManager.prototype.m_contactCount = 0;
	/**
	 * @export
	 * @type {box2d.b2ContactFilter}
	 */
	box2d.b2ContactManager.prototype.m_contactFilter = box2d.b2ContactFilter.b2_defaultFilter;
	/**
	 * @export
	 * @type {box2d.b2ContactListener}
	 */
	box2d.b2ContactManager.prototype.m_contactListener = box2d.b2ContactListener.b2_defaultListener;
	/**
	 * @export
	 * @type {*}
	 */
	box2d.b2ContactManager.prototype.m_allocator = null;

	/**
	 * @export
	 * @type {box2d.b2ContactFactory}
	 */
	box2d.b2ContactManager.prototype.m_contactFactory = null;

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2Contact} c
	 */
	box2d.b2ContactManager.prototype.Destroy = function (c) {
	  var fixtureA = c.GetFixtureA();
	  var fixtureB = c.GetFixtureB();
	  var bodyA = fixtureA.GetBody();
	  var bodyB = fixtureB.GetBody();

	  if (this.m_contactListener && c.IsTouching()) {
	    this.m_contactListener.EndContact(c);
	  }

	  // Remove from the world.
	  if (c.m_prev) {
	    c.m_prev.m_next = c.m_next;
	  }

	  if (c.m_next) {
	    c.m_next.m_prev = c.m_prev;
	  }

	  if (c === this.m_contactList) {
	    this.m_contactList = c.m_next;
	  }

	  // Remove from body 1
	  if (c.m_nodeA.prev) {
	    c.m_nodeA.prev.next = c.m_nodeA.next;
	  }

	  if (c.m_nodeA.next) {
	    c.m_nodeA.next.prev = c.m_nodeA.prev;
	  }

	  if (c.m_nodeA === bodyA.m_contactList) {
	    bodyA.m_contactList = c.m_nodeA.next;
	  }

	  // Remove from body 2
	  if (c.m_nodeB.prev) {
	    c.m_nodeB.prev.next = c.m_nodeB.next;
	  }

	  if (c.m_nodeB.next) {
	    c.m_nodeB.next.prev = c.m_nodeB.prev;
	  }

	  if (c.m_nodeB === bodyB.m_contactList) {
	    bodyB.m_contactList = c.m_nodeB.next;
	  }

	  // Call the factory.
	  this.m_contactFactory.Destroy(c);
	  --this.m_contactCount;
	};

	/**
	 * This is the top level collision call for the time step. Here
	 * all the narrow phase collision is processed for the world
	 * contact list.
	 * @export
	 * @return {void}
	 */
	box2d.b2ContactManager.prototype.Collide = function () {
	  // Update awake contacts.
	  var c = this.m_contactList;
	  while (c) {
	    var fixtureA = c.GetFixtureA();
	    var fixtureB = c.GetFixtureB();
	    var indexA = c.GetChildIndexA();
	    var indexB = c.GetChildIndexB();
	    var bodyA = fixtureA.GetBody();
	    var bodyB = fixtureB.GetBody();

	    // Is this contact flagged for filtering?
	    if (c.m_flag_filterFlag) {
	      // Check user filtering.
	      if (this.m_contactFilter && !this.m_contactFilter.ShouldCollide(fixtureA, fixtureB)) {
	        cNuke = c;
	        c = cNuke.m_next;
	        this.Destroy(cNuke);
	        continue;
	      }

	      // Clear the filtering flag.
	      c.m_flag_filterFlag = false;
	    }

	    var activeA = bodyA.IsAwake() && bodyA.m_type !== box2d.b2BodyType.b2_staticBody;
	    var activeB = bodyB.IsAwake() && bodyB.m_type !== box2d.b2BodyType.b2_staticBody;

	    // At least one body must be awake and it must be dynamic or kinematic.
	    if (!activeA && !activeB) {
	      c = c.m_next;
	      continue;
	    }

	    var proxyA = fixtureA.m_proxies[indexA].proxy;
	    var proxyB = fixtureB.m_proxies[indexB].proxy;
	    var overlap = this.m_broadPhase.TestOverlap(proxyA, proxyB);

	    // Here we destroy contacts that cease to overlap in the broad-phase.
	    if (!overlap) {
	      cNuke = c;
	      c = cNuke.m_next;
	      this.Destroy(cNuke);
	      continue;
	    }

	    // The contact persists.
	    c.Update(this.m_contactListener);
	    c = c.m_next;
	  }
	};

	/**
	 * @export
	 * @return {void}
	 */
	box2d.b2ContactManager.prototype.FindNewContacts = function () {
	  this.m_broadPhase.UpdatePairs(this);
	};

	/**
	 * Broad-phase callback.
	 * @export
	 * @return {void}
	 * @param {box2d.b2FixtureProxy} proxyUserDataA
	 * @param {box2d.b2FixtureProxy} proxyUserDataB
	 */
	box2d.b2ContactManager.prototype.AddPair = function (proxyUserDataA, proxyUserDataB) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(proxyUserDataA instanceof box2d.b2FixtureProxy);
	  }
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(proxyUserDataB instanceof box2d.b2FixtureProxy);
	  }
	  var proxyA = proxyUserDataA; //(proxyUserDataA instanceof box2d.b2FixtureProxy ? proxyUserDataA : null);
	  var proxyB = proxyUserDataB; //(proxyUserDataB instanceof box2d.b2FixtureProxy ? proxyUserDataB : null);

	  var fixtureA = proxyA.fixture;
	  var fixtureB = proxyB.fixture;

	  var indexA = proxyA.childIndex;
	  var indexB = proxyB.childIndex;

	  var bodyA = fixtureA.GetBody();
	  var bodyB = fixtureB.GetBody();

	  // Are the fixtures on the same body?
	  if (bodyA === bodyB) {
	    return;
	  }

	  // TODO_ERIN use a hash table to remove a potential bottleneck when both
	  // bodies have a lot of contacts.
	  // Does a contact already exist?
	  var edge = bodyB.GetContactList();
	  while (edge) {
	    if (edge.other === bodyA) {
	      var fA = edge.contact.GetFixtureA();
	      var fB = edge.contact.GetFixtureB();
	      var iA = edge.contact.GetChildIndexA();
	      var iB = edge.contact.GetChildIndexB();

	      if (fA === fixtureA && fB === fixtureB && iA === indexA && iB === indexB) {
	        // A contact already exists.
	        return;
	      }

	      if (fA === fixtureB && fB === fixtureA && iA === indexB && iB === indexA) {
	        // A contact already exists.
	        return;
	      }
	    }

	    edge = edge.next;
	  }

	  // Check user filtering.
	  if (this.m_contactFilter && !this.m_contactFilter.ShouldCollide(fixtureA, fixtureB)) {
	    return;
	  }

	  // Call the factory.
	  var c = this.m_contactFactory.Create(fixtureA, indexA, fixtureB, indexB);
	  if (c === null) {
	    return;
	  }

	  // Contact creation may swap fixtures.
	  fixtureA = c.GetFixtureA();
	  fixtureB = c.GetFixtureB();
	  //indexA = c.GetChildIndexA();
	  //indexB = c.GetChildIndexB();
	  bodyA = fixtureA.m_body;
	  bodyB = fixtureB.m_body;

	  // Insert into the world.
	  c.m_prev = null;
	  c.m_next = this.m_contactList;
	  if (this.m_contactList !== null) {
	    this.m_contactList.m_prev = c;
	  }
	  this.m_contactList = c;

	  // Connect to island graph.

	  // Connect to body A
	  c.m_nodeA.contact = c;
	  c.m_nodeA.other = bodyB;

	  c.m_nodeA.prev = null;
	  c.m_nodeA.next = bodyA.m_contactList;
	  if (bodyA.m_contactList !== null) {
	    bodyA.m_contactList.prev = c.m_nodeA;
	  }
	  bodyA.m_contactList = c.m_nodeA;

	  // Connect to body B
	  c.m_nodeB.contact = c;
	  c.m_nodeB.other = bodyA;

	  c.m_nodeB.prev = null;
	  c.m_nodeB.next = bodyB.m_contactList;
	  if (bodyB.m_contactList !== null) {
	    bodyB.m_contactList.prev = c.m_nodeB;
	  }
	  bodyB.m_contactList = c.m_nodeB;

	  // Wake up the bodies
	  if (!fixtureA.IsSensor() && !fixtureB.IsSensor()) {
	    bodyA.SetAwake(true);
	    bodyB.SetAwake(true);
	  }

	  ++this.m_contactCount;
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(23);

	/**
	 * @export
	 * @constructor
	 */
	/*
	 * Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
	 *
	 * This software is provided 'as-is', without any express or implied
	 * warranty.  In no event will the authors be held liable for any damages
	 * arising from the use of this software.
	 * Permission is granted to anyone to use this software for any purpose,
	 * including commercial applications, and to alter it and redistribute it
	 * freely, subject to the following restrictions:
	 * 1. The origin of this software must not be misrepresented; you must not
	 * claim that you wrote the original software. If you use this software
	 * in a product, an acknowledgment in the product documentation would be
	 * appreciated but is not required.
	 * 2. Altered source versions must be plainly marked as such, and must not be
	 * misrepresented as being the original software.
	 * 3. This notice may not be removed or altered from any source distribution.
	 */

	box2d.b2ContactRegister = function () {};

	box2d.b2ContactRegister.prototype.createFcn = null;
	box2d.b2ContactRegister.prototype.destroyFcn = null;
	box2d.b2ContactRegister.prototype.primary = false;

	/**
	 * @export
	 * @constructor
	 * @param allocator
	 */
	box2d.b2ContactFactory = function (allocator) {
	  this.m_allocator = allocator;
	  this.InitializeRegisters();
	};

	box2d.b2ContactFactory.prototype.m_allocator = null;

	/**
	 * @export
	 * @return {void}
	 * @param createFcn
	 * @param destroyFcn
	 * @param {box2d.b2ShapeType} type1
	 * @param {box2d.b2ShapeType} type2
	 */
	box2d.b2ContactFactory.prototype.AddType = function (createFcn, destroyFcn, type1, type2) {
	  var pool = box2d.b2MakeArray(256, function (i) {
	    return createFcn();
	  }); // TODO: b2Settings

	  var poolCreateFcn = function poolCreateFcn(allocator) {
	    if (pool.length > 0) {
	      return pool.pop();
	    }

	    return createFcn(allocator);
	  };

	  var poolDestroyFcn = function poolDestroyFcn(contact, allocator) {
	    pool.push(contact);
	  };

	  this.m_registers[type1][type2].pool = pool;
	  this.m_registers[type1][type2].createFcn = poolCreateFcn;
	  this.m_registers[type1][type2].destroyFcn = poolDestroyFcn;
	  this.m_registers[type1][type2].primary = true;

	  if (type1 !== type2) {
	    this.m_registers[type2][type1].pool = pool;
	    this.m_registers[type2][type1].createFcn = poolCreateFcn;
	    this.m_registers[type2][type1].destroyFcn = poolDestroyFcn;
	    this.m_registers[type2][type1].primary = false;
	  }

	  /*
	  this.m_registers[type1][type2].createFcn = createFcn;
	  this.m_registers[type1][type2].destroyFcn = destroyFcn;
	  this.m_registers[type1][type2].primary = true;
	   if (type1 !== type2)
	  {
	    this.m_registers[type2][type1].createFcn = createFcn;
	    this.m_registers[type2][type1].destroyFcn = destroyFcn;
	    this.m_registers[type2][type1].primary = false;
	  }
	  */
	};

	/**
	 * @export
	 * @return {void}
	 */
	box2d.b2ContactFactory.prototype.InitializeRegisters = function () {
	  this.m_registers = new Array(box2d.b2ShapeType.e_shapeTypeCount);

	  for (var i = 0; i < box2d.b2ShapeType.e_shapeTypeCount; i++) {
	    this.m_registers[i] = new Array(box2d.b2ShapeType.e_shapeTypeCount);

	    for (var j = 0; j < box2d.b2ShapeType.e_shapeTypeCount; j++) {
	      this.m_registers[i][j] = new box2d.b2ContactRegister();
	    }
	  }

	  this.AddType(box2d.b2CircleContact.Create, box2d.b2CircleContact.Destroy, box2d.b2ShapeType.e_circleShape, box2d.b2ShapeType.e_circleShape);
	  this.AddType(box2d.b2PolygonAndCircleContact.Create, box2d.b2PolygonAndCircleContact.Destroy, box2d.b2ShapeType.e_polygonShape, box2d.b2ShapeType.e_circleShape);
	  this.AddType(box2d.b2PolygonContact.Create, box2d.b2PolygonContact.Destroy, box2d.b2ShapeType.e_polygonShape, box2d.b2ShapeType.e_polygonShape);
	  this.AddType(box2d.b2EdgeAndCircleContact.Create, box2d.b2EdgeAndCircleContact.Destroy, box2d.b2ShapeType.e_edgeShape, box2d.b2ShapeType.e_circleShape);
	  this.AddType(box2d.b2EdgeAndPolygonContact.Create, box2d.b2EdgeAndPolygonContact.Destroy, box2d.b2ShapeType.e_edgeShape, box2d.b2ShapeType.e_polygonShape);
	  this.AddType(box2d.b2ChainAndCircleContact.Create, box2d.b2ChainAndCircleContact.Destroy, box2d.b2ShapeType.e_chainShape, box2d.b2ShapeType.e_circleShape);
	  this.AddType(box2d.b2ChainAndPolygonContact.Create, box2d.b2ChainAndPolygonContact.Destroy, box2d.b2ShapeType.e_chainShape, box2d.b2ShapeType.e_polygonShape);
	};

	/**
	 * @export
	 * @return {box2d.b2Contact}
	 * @param {box2d.b2Fixture} fixtureA
	 * @param {number} indexA
	 * @param {box2d.b2Fixture} fixtureB
	 * @param {number} indexB
	 */
	box2d.b2ContactFactory.prototype.Create = function (fixtureA, indexA, fixtureB, indexB) {
	  var type1 = fixtureA.GetType();
	  var type2 = fixtureB.GetType();

	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(0 <= type1 && type1 < box2d.b2ShapeType.e_shapeTypeCount);
	  }
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(0 <= type2 && type2 < box2d.b2ShapeType.e_shapeTypeCount);
	  }

	  var reg = this.m_registers[type1][type2];

	  var createFcn = reg.createFcn;
	  if (createFcn !== null) {
	    if (reg.primary) {
	      var c = createFcn(this.m_allocator);
	      c.Reset(fixtureA, indexA, fixtureB, indexB);
	      return c;
	    } else {
	      var c = createFcn(this.m_allocator);
	      c.Reset(fixtureB, indexB, fixtureA, indexA);
	      return c;
	    }
	  } else {
	    return null;
	  }
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2Contact} contact
	 */
	box2d.b2ContactFactory.prototype.Destroy = function (contact) {
	  var fixtureA = contact.m_fixtureA;
	  var fixtureB = contact.m_fixtureB;

	  if (contact.m_manifold.pointCount > 0 && !fixtureA.IsSensor() && !fixtureB.IsSensor()) {
	    fixtureA.GetBody().SetAwake(true);
	    fixtureB.GetBody().SetAwake(true);
	  }

	  var typeA = fixtureA.GetType();
	  var typeB = fixtureB.GetType();

	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(0 <= typeA && typeB < box2d.b2ShapeType.e_shapeTypeCount);
	  }
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(0 <= typeA && typeB < box2d.b2ShapeType.e_shapeTypeCount);
	  }

	  var reg = this.m_registers[typeA][typeB];

	  var destroyFcn = reg.destroyFcn;
	  destroyFcn(contact, this.m_allocator);
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(13);

	__webpack_require__(15);

	/**
	 * Friction mixing law. The idea is to allow either fixture to
	 * drive the restitution to zero. For example, anything slides
	 * on ice.
	 * @export
	 * @return {number}
	 * @param {number} friction1
	 * @param {number} friction2
	 */
	box2d.b2MixFriction = function (friction1, friction2) {
	  return box2d.b2Sqrt(friction1 * friction2);
	};

	/**
	 * Restitution mixing law. The idea is allow for anything to
	 * bounce off an inelastic surface. For example, a superball
	 * bounces on anything.
	 * @export
	 * @return {number}
	 * @param {number} restitution1
	 * @param {number} restitution2
	 */
	/*
	 * Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
	 *
	 * This software is provided 'as-is', without any express or implied
	 * warranty.  In no event will the authors be held liable for any damages
	 * arising from the use of this software.
	 * Permission is granted to anyone to use this software for any purpose,
	 * including commercial applications, and to alter it and redistribute it
	 * freely, subject to the following restrictions:
	 * 1. The origin of this software must not be misrepresented; you must not
	 * claim that you wrote the original software. If you use this software
	 * in a product, an acknowledgment in the product documentation would be
	 * appreciated but is not required.
	 * 2. Altered source versions must be plainly marked as such, and must not be
	 * misrepresented as being the original software.
	 * 3. This notice may not be removed or altered from any source distribution.
	 */

	box2d.b2MixRestitution = function (restitution1, restitution2) {
	  return restitution1 > restitution2 ? restitution1 : restitution2;
	};

	/**
	 * A contact edge is used to connect bodies and contacts
	 * together in a contact graph where each body is a node and
	 * each contact is an edge. A contact edge belongs to a doubly
	 * linked list maintained in each attached body. Each contact
	 * has two contact nodes, one for each attached body.
	 * @export
	 * @constructor
	 */
	box2d.b2ContactEdge = function () {};

	/**
	 * @export
	 * @type {box2d.b2Body}
	 */
	box2d.b2ContactEdge.prototype.other = null; ///< provides quick access to the other body attached.
	/**
	 * @export
	 * @type {box2d.b2Contact}
	 */
	box2d.b2ContactEdge.prototype.contact = null; ///< the contact
	/**
	 * @export
	 * @type {box2d.b2ContactEdge}
	 */
	box2d.b2ContactEdge.prototype.prev = null; ///< the previous contact edge in the body's contact list
	/**
	 * @export
	 * @type {box2d.b2ContactEdge}
	 */
	box2d.b2ContactEdge.prototype.next = null; ///< the next contact edge in the body's contact list

	/**
	 * The class manages contact between two shapes. A contact
	 * exists for each overlapping AABB in the broad-phase (except
	 * if filtered). Therefore a contact object may exist that has
	 * no contact points.
	 * @export
	 * @constructor
	 */
	box2d.b2Contact = function () {
	  this.m_nodeA = new box2d.b2ContactEdge();
	  this.m_nodeB = new box2d.b2ContactEdge();
	  this.m_manifold = new box2d.b2Manifold();
	  this.m_oldManifold = new box2d.b2Manifold();
	};

	/**
	 * @export
	 * @type {boolean}
	 */
	box2d.b2Contact.prototype.m_flag_islandFlag = false; /// Used when crawling contact graph when forming islands.
	/**
	 * @export
	 * @type {boolean}
	 */
	box2d.b2Contact.prototype.m_flag_touchingFlag = false; /// Set when the shapes are touching.
	/**
	 * @export
	 * @type {boolean}
	 */
	box2d.b2Contact.prototype.m_flag_enabledFlag = false; /// This contact can be disabled (by user)
	/**
	 * @export
	 * @type {boolean}
	 */
	box2d.b2Contact.prototype.m_flag_filterFlag = false; /// This contact needs filtering because a fixture filter was changed.
	/**
	 * @export
	 * @type {boolean}
	 */
	box2d.b2Contact.prototype.m_flag_bulletHitFlag = false; /// This bullet contact had a TOI event
	/**
	 * @export
	 * @type {boolean}
	 */
	box2d.b2Contact.prototype.m_flag_toiFlag = false; /// This contact has a valid TOI in m_toi

	/**
	 * World pool and list pointers.
	 * @export
	 * @type {box2d.b2Contact}
	 */
	box2d.b2Contact.prototype.m_prev = null;
	/**
	 * @export
	 * @type {box2d.b2Contact}
	 */
	box2d.b2Contact.prototype.m_next = null;

	/**
	 * Nodes for connecting bodies.
	 * @export
	 * @type {box2d.b2ContactEdge}
	 */
	box2d.b2Contact.prototype.m_nodeA = null;
	/**
	 * @export
	 * @type {box2d.b2ContactEdge}
	 */
	box2d.b2Contact.prototype.m_nodeB = null;

	/**
	 * @export
	 * @type {box2d.b2Fixture}
	 */
	box2d.b2Contact.prototype.m_fixtureA = null;
	/**
	 * @export
	 * @type {box2d.b2Fixture}
	 */
	box2d.b2Contact.prototype.m_fixtureB = null;

	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Contact.prototype.m_indexA = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Contact.prototype.m_indexB = 0;

	/**
	 * @export
	 * @type {box2d.b2Manifold}
	 */
	box2d.b2Contact.prototype.m_manifold = null;

	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Contact.prototype.m_toiCount = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Contact.prototype.m_toi = 0;

	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Contact.prototype.m_friction = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Contact.prototype.m_restitution = 0;

	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Contact.prototype.m_tangentSpeed = 0;

	/**
	 * @export
	 * @type {box2d.b2Manifold}
	 */
	box2d.b2Contact.prototype.m_oldManifold = null;

	/**
	 * Get the contact manifold. Do not modify the manifold unless
	 * you understand the internals of Box2D.
	 * @export
	 * @return {box2d.b2Manifold}
	 */
	box2d.b2Contact.prototype.GetManifold = function () {
	  return this.m_manifold;
	};

	/**
	 * Get the world manifold.
	 * @export
	 * @return {void}
	 * @param {box2d.b2WorldManifold} worldManifold
	 */
	box2d.b2Contact.prototype.GetWorldManifold = function (worldManifold) {
	  var bodyA = this.m_fixtureA.GetBody();
	  var bodyB = this.m_fixtureB.GetBody();
	  var shapeA = this.m_fixtureA.GetShape();
	  var shapeB = this.m_fixtureB.GetShape();
	  worldManifold.Initialize(this.m_manifold, bodyA.GetTransform(), shapeA.m_radius, bodyB.GetTransform(), shapeB.m_radius);
	};

	/**
	 * Is this contact touching?
	 * @export
	 * @return {boolean}
	 */
	box2d.b2Contact.prototype.IsTouching = function () {
	  return this.m_flag_touchingFlag;
	};

	/**
	 * Enable/disable this contact. This can be used inside the
	 * pre-solve contact listener. The contact is only disabled for
	 * the current time step (or sub-step in continuous collisions).
	 * @export
	 * @return {void}
	 * @param {boolean} flag
	 */
	box2d.b2Contact.prototype.SetEnabled = function (flag) {
	  this.m_flag_enabledFlag = flag;
	};

	/**
	 * Has this contact been disabled?
	 * @export
	 * @return {boolean}
	 */
	box2d.b2Contact.prototype.IsEnabled = function () {
	  return this.m_flag_enabledFlag;
	};

	/**
	 * Get the next contact in the world's contact list.
	 * @export
	 * @return {box2d.b2Contact}
	 */
	box2d.b2Contact.prototype.GetNext = function () {
	  return this.m_next;
	};

	/**
	 * Get fixture A in this contact.
	 * @export
	 * @return {box2d.b2Fixture}
	 */
	box2d.b2Contact.prototype.GetFixtureA = function () {
	  return this.m_fixtureA;
	};

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2Contact.prototype.GetChildIndexA = function () {
	  return this.m_indexA;
	};

	/**
	 * Get fixture B in this contact.
	 * @export
	 * @return {box2d.b2Fixture}
	 */
	box2d.b2Contact.prototype.GetFixtureB = function () {
	  return this.m_fixtureB;
	};

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2Contact.prototype.GetChildIndexB = function () {
	  return this.m_indexB;
	};

	/**
	 * Evaluate this contact with your own manifold and transforms.
	 * @export
	 * @return {void}
	 * @param {box2d.b2Manifold} manifold
	 * @param {box2d.b2Transform} xfA
	 * @param {box2d.b2Transform} xfB
	 */
	box2d.b2Contact.prototype.Evaluate = function (manifold, xfA, xfB) {};

	/**
	 * Flag this contact for filtering. Filtering will occur the
	 * next time step.
	 * @export
	 * @return {void}
	 */
	box2d.b2Contact.prototype.FlagForFiltering = function () {
	  this.m_flag_filterFlag = true;
	};

	/**
	 * Override the default friction mixture. You can call this in
	 * box2d.b2ContactListener::PreSolve.
	 * This value persists until set or reset.
	 * @export
	 * @return {void}
	 * @param {number} friction
	 */
	box2d.b2Contact.prototype.SetFriction = function (friction) {
	  this.m_friction = friction;
	};

	/**
	 * Get the friction.
	 * @export
	 * @return {number}
	 */
	box2d.b2Contact.prototype.GetFriction = function () {
	  return this.m_friction;
	};

	/**
	 * Reset the friction mixture to the default value.
	 * @export
	 * @return {void}
	 */
	box2d.b2Contact.prototype.ResetFriction = function () {
	  this.m_friction = box2d.b2MixFriction(this.m_fixtureA.m_friction, this.m_fixtureB.m_friction);
	};

	/**
	 * Override the default restitution mixture. You can call this
	 * in box2d.b2ContactListener::PreSolve.
	 * The value persists until you set or reset.
	 * @export
	 * @return {void}
	 * @param {number} restitution
	 */
	box2d.b2Contact.prototype.SetRestitution = function (restitution) {
	  this.m_restitution = restitution;
	};

	/**
	 * Get the restitution.
	 * @export
	 * @return {number}
	 */
	box2d.b2Contact.prototype.GetRestitution = function () {
	  return this.m_restitution;
	};

	/**
	 * Reset the restitution to the default value.
	 * @export
	 * @return {void}
	 */
	box2d.b2Contact.prototype.ResetRestitution = function () {
	  this.m_restitution = box2d.b2MixRestitution(this.m_fixtureA.m_restitution, this.m_fixtureB.m_restitution);
	};

	/**
	 * Set the desired tangent speed for a conveyor belt behavior.
	 * In meters per second.
	 * @export
	 * @return {void}
	 * @param {number} speed
	 */
	box2d.b2Contact.prototype.SetTangentSpeed = function (speed) {
	  this.m_tangentSpeed = speed;
	};

	/**
	 * Get the desired tangent speed. In meters per second.
	 * @export
	 * @return {number}
	 */
	box2d.b2Contact.prototype.GetTangentSpeed = function () {
	  return this.m_tangentSpeed;
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2Fixture} fixtureA
	 * @param {box2d.b2Fixture} fixtureB
	 */
	box2d.b2Contact.prototype.Reset = function (fixtureA, indexA, fixtureB, indexB) {
	  this.m_flag_islandFlag = false;
	  this.m_flag_touchingFlag = false;
	  this.m_flag_enabledFlag = true;
	  this.m_flag_filterFlag = false;
	  this.m_flag_bulletHitFlag = false;
	  this.m_flag_toiFlag = false;

	  this.m_fixtureA = fixtureA;
	  this.m_fixtureB = fixtureB;

	  this.m_indexA = indexA;
	  this.m_indexB = indexB;

	  this.m_manifold.pointCount = 0;

	  this.m_prev = null;
	  this.m_next = null;

	  this.m_nodeA.contact = null;
	  this.m_nodeA.prev = null;
	  this.m_nodeA.next = null;
	  this.m_nodeA.other = null;

	  this.m_nodeB.contact = null;
	  this.m_nodeB.prev = null;
	  this.m_nodeB.next = null;
	  this.m_nodeB.other = null;

	  this.m_toiCount = 0;

	  this.m_friction = box2d.b2MixFriction(this.m_fixtureA.m_friction, this.m_fixtureB.m_friction);
	  this.m_restitution = box2d.b2MixRestitution(this.m_fixtureA.m_restitution, this.m_fixtureB.m_restitution);
	};

	/**
	 * Update the contact manifold and touching status.
	 * Note: do not assume the fixture AABBs are overlapping or are
	 * valid.
	 * @export
	 * @return {void}
	 * @param {box2d.b2ContactListener} listener
	 */
	box2d.b2Contact.prototype.Update = function (listener) {
	  var tManifold = this.m_oldManifold;
	  this.m_oldManifold = this.m_manifold;
	  this.m_manifold = tManifold;

	  // Re-enable this contact.
	  this.m_flag_enabledFlag = true;

	  var touching = false;
	  var wasTouching = this.m_flag_touchingFlag;

	  var sensorA = this.m_fixtureA.IsSensor();
	  var sensorB = this.m_fixtureB.IsSensor();
	  var sensor = sensorA || sensorB;

	  var bodyA = this.m_fixtureA.GetBody();
	  var bodyB = this.m_fixtureB.GetBody();
	  var xfA = bodyA.GetTransform();
	  var xfB = bodyB.GetTransform();

	  //  var aabbOverlap = box2d.b2TestOverlap_AABB(this.m_fixtureA.GetAABB(0), this.m_fixtureB.GetAABB(0));

	  // Is this contact a sensor?
	  if (sensor) {
	    //    if (aabbOverlap)
	    //    {
	    var shapeA = this.m_fixtureA.GetShape();
	    var shapeB = this.m_fixtureB.GetShape();
	    touching = box2d.b2TestOverlap_Shape(shapeA, this.m_indexA, shapeB, this.m_indexB, xfA, xfB);
	    //    }

	    // Sensors don't generate manifolds.
	    this.m_manifold.pointCount = 0;
	  } else {
	    //    if (aabbOverlap)
	    //    {
	    this.Evaluate(this.m_manifold, xfA, xfB);
	    touching = this.m_manifold.pointCount > 0;

	    // Match old contact ids to new contact ids and copy the
	    // stored impulses to warm start the solver.
	    for (var i = 0; i < this.m_manifold.pointCount; ++i) {
	      var mp2 = this.m_manifold.points[i];
	      mp2.normalImpulse = 0;
	      mp2.tangentImpulse = 0;
	      var id2 = mp2.id;

	      for (var j = 0; j < this.m_oldManifold.pointCount; ++j) {
	        var mp1 = this.m_oldManifold.points[j];

	        if (mp1.id.key === id2.key) {
	          mp2.normalImpulse = mp1.normalImpulse;
	          mp2.tangentImpulse = mp1.tangentImpulse;
	          break;
	        }
	      }
	    }
	    //    }
	    //    else
	    //    {
	    //      this.m_manifold.pointCount = 0;
	    //    }

	    if (touching !== wasTouching) {
	      bodyA.SetAwake(true);
	      bodyB.SetAwake(true);
	    }
	  }

	  this.m_flag_touchingFlag = touching;

	  if (!wasTouching && touching && listener) {
	    listener.BeginContact(this);
	  }

	  if (wasTouching && !touching && listener) {
	    listener.EndContact(this);
	  }

	  if (!sensor && touching && listener) {
	    listener.PreSolve(this, this.m_oldManifold);
	  }
	};

	/**
	 * @export
	 * @return {number}
	 * @param {box2d.b2Sweep} sweepA
	 * @param {box2d.b2Sweep} sweepB
	 */
	box2d.b2Contact.prototype.ComputeTOI = function (sweepA, sweepB) {
	  var input = box2d.b2Contact.prototype.ComputeTOI.s_input;
	  input.proxyA.SetShape(this.m_fixtureA.GetShape(), this.m_indexA);
	  input.proxyB.SetShape(this.m_fixtureB.GetShape(), this.m_indexB);
	  input.sweepA.Copy(sweepA);
	  input.sweepB.Copy(sweepB);
	  input.tMax = box2d.b2_linearSlop;

	  var output = box2d.b2Contact.prototype.ComputeTOI.s_output;

	  box2d.b2TimeOfImpact(output, input);

	  return output.t;
	};
	box2d.b2Contact.prototype.ComputeTOI.s_input = new box2d.b2TOIInput();
	box2d.b2Contact.prototype.ComputeTOI.s_output = new box2d.b2TOIOutput();

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(6);

	__webpack_require__(13);

	__webpack_require__(25);

	__webpack_require__(27);

	__webpack_require__(28);

	__webpack_require__(30);

	__webpack_require__(32);

	__webpack_require__(33);

	__webpack_require__(34);

	/**
	 * @type {boolean}
	 */
	/*
	 * Copyright (c) 2006-2011 Erin Catto http://www.box2d.org
	 *
	 * This software is provided 'as-is', without any express or implied
	 * warranty.  In no event will the authors be held liable for any damages
	 * arising from the use of this software.
	 * Permission is granted to anyone to use this software for any purpose,
	 * including commercial applications, and to alter it and redistribute it
	 * freely, subject to the following restrictions:
	 * 1. The origin of this software must not be misrepresented; you must not
	 * claim that you wrote the original software. If you use this software
	 * in a product, an acknowledgment in the product documentation would be
	 * appreciated but is not required.
	 * 2. Altered source versions must be plainly marked as such, and must not be
	 * misrepresented as being the original software.
	 * 3. This notice may not be removed or altered from any source distribution.
	 */

	box2d.g_blockSolve = true;

	/**
	 * @export
	 * @constructor
	 */
	box2d.b2VelocityConstraintPoint = function () {
	  this.rA = new box2d.b2Vec2();
	  this.rB = new box2d.b2Vec2();
	};

	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2VelocityConstraintPoint.prototype.rA = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2VelocityConstraintPoint.prototype.rB = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2VelocityConstraintPoint.prototype.normalImpulse = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2VelocityConstraintPoint.prototype.tangentImpulse = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2VelocityConstraintPoint.prototype.normalMass = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2VelocityConstraintPoint.prototype.tangentMass = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2VelocityConstraintPoint.prototype.velocityBias = 0;

	/**
	 * @export
	 * @return {Array.<box2d.b2VelocityConstraintPoint>}
	 * @param {number} length
	 */
	box2d.b2VelocityConstraintPoint.MakeArray = function (length) {
	  return box2d.b2MakeArray(length, function (i) {
	    return new box2d.b2VelocityConstraintPoint();
	  });
	};

	/**
	 * @export
	 * @constructor
	 */
	box2d.b2ContactVelocityConstraint = function () {
	  this.points = box2d.b2VelocityConstraintPoint.MakeArray(box2d.b2_maxManifoldPoints);
	  this.normal = new box2d.b2Vec2();
	  this.tangent = new box2d.b2Vec2();
	  this.normalMass = new box2d.b2Mat22();
	  this.K = new box2d.b2Mat22();
	};

	/**
	 * @export
	 * @type {Array.<box2d.b2VelocityConstraintPoint>}
	 */
	box2d.b2ContactVelocityConstraint.prototype.points = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2ContactVelocityConstraint.prototype.normal = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2ContactVelocityConstraint.prototype.tangent = null; // compute from normal
	/**
	 * @export
	 * @type {box2d.b2Mat22}
	 */
	box2d.b2ContactVelocityConstraint.prototype.normalMass = null;
	/**
	 * @export
	 * @type {box2d.b2Mat22}
	 */
	box2d.b2ContactVelocityConstraint.prototype.K = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2ContactVelocityConstraint.prototype.indexA = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2ContactVelocityConstraint.prototype.indexB = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2ContactVelocityConstraint.prototype.invMassA = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2ContactVelocityConstraint.prototype.invMassB = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2ContactVelocityConstraint.prototype.invIA = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2ContactVelocityConstraint.prototype.invIB = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2ContactVelocityConstraint.prototype.friction = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2ContactVelocityConstraint.prototype.restitution = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2ContactVelocityConstraint.prototype.tangentSpeed = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2ContactVelocityConstraint.prototype.pointCount = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2ContactVelocityConstraint.prototype.contactIndex = 0;

	/**
	 * @export
	 * @return {Array.<box2d.b2ContactVelocityConstraint>}
	 * @param {number} length
	 */
	box2d.b2ContactVelocityConstraint.MakeArray = function (length) {
	  return box2d.b2MakeArray(length, function (i) {
	    return new box2d.b2ContactVelocityConstraint();
	  });
	};

	/**
	 * @export
	 * @constructor
	 */
	box2d.b2ContactPositionConstraint = function () {
	  this.localPoints = box2d.b2Vec2.MakeArray(box2d.b2_maxManifoldPoints);
	  this.localNormal = new box2d.b2Vec2();
	  this.localPoint = new box2d.b2Vec2();
	  this.localCenterA = new box2d.b2Vec2();
	  this.localCenterB = new box2d.b2Vec2();
	};

	/**
	 * @export
	 * @type {Array.<box2d.b2Vec2>}
	 */
	box2d.b2ContactPositionConstraint.prototype.localPoints = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2ContactPositionConstraint.prototype.localNormal = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2ContactPositionConstraint.prototype.localPoint = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2ContactPositionConstraint.prototype.indexA = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2ContactPositionConstraint.prototype.indexB = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2ContactPositionConstraint.prototype.invMassA = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2ContactPositionConstraint.prototype.invMassB = 0;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2ContactPositionConstraint.prototype.localCenterA = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2ContactPositionConstraint.prototype.localCenterB = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2ContactPositionConstraint.prototype.invIA = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2ContactPositionConstraint.prototype.invIB = 0;
	/**
	 * @export
	 * @type {box2d.b2ManifoldType}
	 */
	box2d.b2ContactPositionConstraint.prototype.type = box2d.b2ManifoldType.e_unknown;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2ContactPositionConstraint.prototype.radiusA = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2ContactPositionConstraint.prototype.radiusB = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2ContactPositionConstraint.prototype.pointCount = 0;

	/**
	 * @export
	 * @return {Array.<box2d.b2ContactPositionConstraint>}
	 * @param {number} length
	 */
	box2d.b2ContactPositionConstraint.MakeArray = function (length) {
	  return box2d.b2MakeArray(length, function (i) {
	    return new box2d.b2ContactPositionConstraint();
	  });
	};

	/**
	 * @export
	 * @constructor
	 */
	box2d.b2ContactSolverDef = function () {
	  this.step = new box2d.b2TimeStep();
	};

	/**
	 * @export
	 * @type {box2d.b2TimeStep}
	 */
	box2d.b2ContactSolverDef.prototype.step = null;
	/**
	 * @export
	 * @type {Array.<box2d.b2Contact>}
	 */
	box2d.b2ContactSolverDef.prototype.contacts = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2ContactSolverDef.prototype.count = 0;
	/**
	 * @export
	 * @type {Array.<box2d.b2Position>}
	 */
	box2d.b2ContactSolverDef.prototype.positions = null;
	/**
	 * @export
	 * @type {Array.<box2d.b2Velocity>}
	 */
	box2d.b2ContactSolverDef.prototype.velocities = null;
	/**
	 * @export
	 * @type {*}
	 */
	box2d.b2ContactSolverDef.prototype.allocator = null;

	/**
	 * @export
	 * @constructor
	 */
	box2d.b2ContactSolver = function () {
	  this.m_step = new box2d.b2TimeStep();
	  this.m_positionConstraints = box2d.b2ContactPositionConstraint.MakeArray(1024); // TODO: b2Settings
	  this.m_velocityConstraints = box2d.b2ContactVelocityConstraint.MakeArray(1024); // TODO: b2Settings
	};

	/**
	 * @export
	 * @type {box2d.b2TimeStep}
	 */
	box2d.b2ContactSolver.prototype.m_step = null;
	/**
	 * @export
	 * @type {Array.<box2d.b2Position>}
	 */
	box2d.b2ContactSolver.prototype.m_positions = null;
	/**
	 * @export
	 * @type {Array.<box2d.b2Velocity>}
	 */
	box2d.b2ContactSolver.prototype.m_velocities = null;
	/**
	 * @export
	 * @type {*}
	 */
	box2d.b2ContactSolver.prototype.m_allocator = null;
	/**
	 * @export
	 * @type {Array.<box2d.b2ContactPositionConstraint>}
	 */
	box2d.b2ContactSolver.prototype.m_positionConstraints = null;
	/**
	 * @export
	 * @type {Array.<box2d.b2ContactVelocityConstraint>}
	 */
	box2d.b2ContactSolver.prototype.m_velocityConstraints = null;
	/**
	 * @export
	 * @type {Array.<box2d.b2Contact>}
	 */
	box2d.b2ContactSolver.prototype.m_contacts = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2ContactSolver.prototype.m_count = 0;

	/**
	 * @export
	 * @return {box2d.b2ContactSolver}
	 * @param {box2d.b2ContactSolverDef} def
	 */
	box2d.b2ContactSolver.prototype.Initialize = function (def) {
	  this.m_step.Copy(def.step);
	  this.m_allocator = def.allocator;
	  this.m_count = def.count;
	  // TODO:
	  if (this.m_positionConstraints.length < this.m_count) {
	    var new_length = box2d.b2Max(this.m_positionConstraints.length * 2, this.m_count);

	    if (box2d.DEBUG) {
	      window.console.log("box2d.b2ContactSolver.m_positionConstraints: " + new_length);
	    }

	    while (this.m_positionConstraints.length < new_length) {
	      this.m_positionConstraints[this.m_positionConstraints.length] = new box2d.b2ContactPositionConstraint();
	    }
	  }
	  // TODO:
	  if (this.m_velocityConstraints.length < this.m_count) {
	    var new_length = box2d.b2Max(this.m_velocityConstraints.length * 2, this.m_count);

	    if (box2d.DEBUG) {
	      window.console.log("box2d.b2ContactSolver.m_velocityConstraints: " + new_length);
	    }

	    while (this.m_velocityConstraints.length < new_length) {
	      this.m_velocityConstraints[this.m_velocityConstraints.length] = new box2d.b2ContactVelocityConstraint();
	    }
	  }
	  this.m_positions = def.positions;
	  this.m_velocities = def.velocities;
	  this.m_contacts = def.contacts;

	  /** @type {number} */
	  var i;
	  /** @type {number} */
	  var ict;
	  /** @type {number} */
	  var j;
	  /** @type {number} */
	  var jct;

	  /** @type {box2d.b2Contact} */
	  var contact;

	  /** @type {box2d.b2Fixture} */
	  var fixtureA;
	  /** @type {box2d.b2Fixture} */
	  var fixtureB;
	  /** @type {box2d.b2Shape} */
	  var shapeA;
	  /** @type {box2d.b2Shape} */
	  var shapeB;
	  /** @type {number} */
	  var radiusA;
	  /** @type {number} */
	  var radiusB;
	  /** @type {box2d.b2Body} */
	  var bodyA;
	  /** @type {box2d.b2Body} */
	  var bodyB;
	  /** @type {box2d.b2Manifold} */
	  var manifold;

	  /** @type {number} */
	  var pointCount;

	  /** @type {box2d.b2ContactVelocityConstraint} */
	  var vc;
	  /** @type {box2d.b2ContactPositionConstraint} */
	  var pc;

	  /** @type {box2d.b2ManifoldPoint} */
	  var cp;
	  /** @type {box2d.b2VelocityConstraintPoint} */
	  var vcp;

	  // Initialize position independent portions of the constraints.
	  for (i = 0, ict = this.m_count; i < ict; ++i) {
	    contact = this.m_contacts[i];

	    fixtureA = contact.m_fixtureA;
	    fixtureB = contact.m_fixtureB;
	    shapeA = fixtureA.GetShape();
	    shapeB = fixtureB.GetShape();
	    radiusA = shapeA.m_radius;
	    radiusB = shapeB.m_radius;
	    bodyA = fixtureA.GetBody();
	    bodyB = fixtureB.GetBody();
	    manifold = contact.GetManifold();

	    pointCount = manifold.pointCount;
	    if (box2d.ENABLE_ASSERTS) {
	      box2d.b2Assert(pointCount > 0);
	    }

	    vc = this.m_velocityConstraints[i];
	    vc.friction = contact.m_friction;
	    vc.restitution = contact.m_restitution;
	    vc.tangentSpeed = contact.m_tangentSpeed;
	    vc.indexA = bodyA.m_islandIndex;
	    vc.indexB = bodyB.m_islandIndex;
	    vc.invMassA = bodyA.m_invMass;
	    vc.invMassB = bodyB.m_invMass;
	    vc.invIA = bodyA.m_invI;
	    vc.invIB = bodyB.m_invI;
	    vc.contactIndex = i;
	    vc.pointCount = pointCount;
	    vc.K.SetZero();
	    vc.normalMass.SetZero();

	    pc = this.m_positionConstraints[i];
	    pc.indexA = bodyA.m_islandIndex;
	    pc.indexB = bodyB.m_islandIndex;
	    pc.invMassA = bodyA.m_invMass;
	    pc.invMassB = bodyB.m_invMass;
	    pc.localCenterA.Copy(bodyA.m_sweep.localCenter);
	    pc.localCenterB.Copy(bodyB.m_sweep.localCenter);
	    pc.invIA = bodyA.m_invI;
	    pc.invIB = bodyB.m_invI;
	    pc.localNormal.Copy(manifold.localNormal);
	    pc.localPoint.Copy(manifold.localPoint);
	    pc.pointCount = pointCount;
	    pc.radiusA = radiusA;
	    pc.radiusB = radiusB;
	    pc.type = manifold.type;

	    for (j = 0, jct = pointCount; j < jct; ++j) {
	      cp = manifold.points[j];
	      vcp = vc.points[j];

	      if (this.m_step.warmStarting) {
	        vcp.normalImpulse = this.m_step.dtRatio * cp.normalImpulse;
	        vcp.tangentImpulse = this.m_step.dtRatio * cp.tangentImpulse;
	      } else {
	        vcp.normalImpulse = 0;
	        vcp.tangentImpulse = 0;
	      }

	      vcp.rA.SetZero();
	      vcp.rB.SetZero();
	      vcp.normalMass = 0;
	      vcp.tangentMass = 0;
	      vcp.velocityBias = 0;

	      pc.localPoints[j].Copy(cp.localPoint);
	    }
	  }

	  return this;
	};

	/**
	 * Initialize position dependent portions of the velocity
	 * constraints.
	 * @export
	 * @return {void}
	 */
	box2d.b2ContactSolver.prototype.InitializeVelocityConstraints = function () {
	  /** @type {number} */
	  var i;
	  /** @type {number} */
	  var ict;
	  /** @type {number} */
	  var j;
	  /** @type {number} */
	  var jct;

	  /** @type {box2d.b2ContactVelocityConstraint} */
	  var vc;
	  /** @type {box2d.b2ContactPositionConstraint} */
	  var pc;

	  /** @type {number} */
	  var radiusA;
	  /** @type {number} */
	  var radiusB;
	  /** @type {box2d.b2Manifold} */
	  var manifold;

	  /** @type {number} */
	  var indexA;
	  /** @type {number} */
	  var indexB;

	  /** @type {number} */
	  var mA;
	  /** @type {number} */
	  var mB;
	  /** @type {number} */
	  var iA;
	  /** @type {number} */
	  var iB;
	  /** @type {box2d.b2Vec2} */
	  var localCenterA;
	  /** @type {box2d.b2Vec2} */
	  var localCenterB;

	  /** @type {box2d.b2Vec2} */
	  var cA;
	  /** @type {number} */
	  var aA;
	  /** @type {box2d.b2Vec2} */
	  var vA;
	  /** @type {number} */
	  var wA;

	  /** @type {box2d.b2Vec2} */
	  var cB;
	  /** @type {number} */
	  var aB;
	  /** @type {box2d.b2Vec2} */
	  var vB;
	  /** @type {number} */
	  var wB;

	  /** @type {box2d.b2Transform} */
	  var xfA = box2d.b2ContactSolver.prototype.InitializeVelocityConstraints.s_xfA;
	  /** @type {box2d.b2Transform} */
	  var xfB = box2d.b2ContactSolver.prototype.InitializeVelocityConstraints.s_xfB;

	  /** @type {box2d.b2WorldManifold} */
	  var worldManifold = box2d.b2ContactSolver.prototype.InitializeVelocityConstraints.s_worldManifold;

	  /** @type {number} */
	  var pointCount;

	  /** @type {box2d.b2VelocityConstraintPoint} */
	  var vcp;

	  /** @type {number} */
	  var rnA;
	  /** @type {number} */
	  var rnB;

	  /** @type {number} */
	  var kNormal;

	  /** @type {box2d.b2Vec2} */
	  var tangent;

	  /** @type {number} */
	  var rtA;
	  /** @type {number} */
	  var rtB;

	  /** @type {number} */
	  var kTangent;

	  /** @type {number} */
	  var vRel;

	  /** @type {box2d.b2VelocityConstraintPoint} */
	  var vcp1;
	  /** @type {box2d.b2VelocityConstraintPoint} */
	  var vcp2;

	  /** @type {number} */
	  var rn1A;
	  /** @type {number} */
	  var rn1B;
	  /** @type {number} */
	  var rn2A;
	  /** @type {number} */
	  var rn2B;

	  /** @type {number} */
	  var k11;
	  /** @type {number} */
	  var k22;
	  /** @type {number} */
	  var k12;

	  /** @type {number} */
	  var k_maxConditionNumber = 1000;

	  for (i = 0, ict = this.m_count; i < ict; ++i) {
	    vc = this.m_velocityConstraints[i];
	    pc = this.m_positionConstraints[i];

	    radiusA = pc.radiusA;
	    radiusB = pc.radiusB;
	    manifold = this.m_contacts[vc.contactIndex].GetManifold();

	    indexA = vc.indexA;
	    indexB = vc.indexB;

	    mA = vc.invMassA;
	    mB = vc.invMassB;
	    iA = vc.invIA;
	    iB = vc.invIB;
	    localCenterA = pc.localCenterA;
	    localCenterB = pc.localCenterB;

	    cA = this.m_positions[indexA].c;
	    aA = this.m_positions[indexA].a;
	    vA = this.m_velocities[indexA].v;
	    wA = this.m_velocities[indexA].w;

	    cB = this.m_positions[indexB].c;
	    aB = this.m_positions[indexB].a;
	    vB = this.m_velocities[indexB].v;
	    wB = this.m_velocities[indexB].w;

	    if (box2d.ENABLE_ASSERTS) {
	      box2d.b2Assert(manifold.pointCount > 0);
	    }

	    xfA.q.SetAngle(aA);
	    xfB.q.SetAngle(aB);
	    box2d.b2Sub_V2_V2(cA, box2d.b2Mul_R_V2(xfA.q, localCenterA, box2d.b2Vec2.s_t0), xfA.p);
	    box2d.b2Sub_V2_V2(cB, box2d.b2Mul_R_V2(xfB.q, localCenterB, box2d.b2Vec2.s_t0), xfB.p);

	    worldManifold.Initialize(manifold, xfA, radiusA, xfB, radiusB);

	    vc.normal.Copy(worldManifold.normal);
	    box2d.b2Cross_V2_S(vc.normal, 1.0, vc.tangent); // compute from normal

	    pointCount = vc.pointCount;
	    for (j = 0, jct = pointCount; j < jct; ++j) {
	      vcp = vc.points[j];

	      //      vcp->rA = worldManifold.points[j] - cA;
	      box2d.b2Sub_V2_V2(worldManifold.points[j], cA, vcp.rA);
	      //      vcp->rB = worldManifold.points[j] - cB;
	      box2d.b2Sub_V2_V2(worldManifold.points[j], cB, vcp.rB);

	      rnA = box2d.b2Cross_V2_V2(vcp.rA, vc.normal);
	      rnB = box2d.b2Cross_V2_V2(vcp.rB, vc.normal);

	      kNormal = mA + mB + iA * rnA * rnA + iB * rnB * rnB;

	      vcp.normalMass = kNormal > 0 ? 1 / kNormal : 0;

	      //      b2Vec2 tangent = b2Cross(vc->normal, 1.0f);
	      tangent = vc.tangent; // precomputed from normal

	      rtA = box2d.b2Cross_V2_V2(vcp.rA, tangent);
	      rtB = box2d.b2Cross_V2_V2(vcp.rB, tangent);

	      kTangent = mA + mB + iA * rtA * rtA + iB * rtB * rtB;

	      vcp.tangentMass = kTangent > 0 ? 1 / kTangent : 0;

	      // Setup a velocity bias for restitution.
	      vcp.velocityBias = 0;
	      //      float32 vRel = b2Dot(vc->normal, vB + b2Cross(wB, vcp->rB) - vA - b2Cross(wA, vcp->rA));
	      vRel = box2d.b2Dot_V2_V2(vc.normal, box2d.b2Sub_V2_V2(box2d.b2AddCross_V2_S_V2(vB, wB, vcp.rB, box2d.b2Vec2.s_t0), box2d.b2AddCross_V2_S_V2(vA, wA, vcp.rA, box2d.b2Vec2.s_t1), box2d.b2Vec2.s_t0));
	      if (vRel < -box2d.b2_velocityThreshold) {
	        vcp.velocityBias += -vc.restitution * vRel;
	      }
	    }

	    // If we have two points, then prepare the block solver.
	    if (vc.pointCount === 2 && box2d.g_blockSolve) {
	      vcp1 = vc.points[0];
	      vcp2 = vc.points[1];

	      rn1A = box2d.b2Cross_V2_V2(vcp1.rA, vc.normal);
	      rn1B = box2d.b2Cross_V2_V2(vcp1.rB, vc.normal);
	      rn2A = box2d.b2Cross_V2_V2(vcp2.rA, vc.normal);
	      rn2B = box2d.b2Cross_V2_V2(vcp2.rB, vc.normal);

	      k11 = mA + mB + iA * rn1A * rn1A + iB * rn1B * rn1B;
	      k22 = mA + mB + iA * rn2A * rn2A + iB * rn2B * rn2B;
	      k12 = mA + mB + iA * rn1A * rn2A + iB * rn1B * rn2B;

	      // Ensure a reasonable condition number.
	      //      float32 k_maxConditionNumber = 1000.0f;
	      if (k11 * k11 < k_maxConditionNumber * (k11 * k22 - k12 * k12)) {
	        // K is safe to invert.
	        vc.K.ex.Set(k11, k12);
	        vc.K.ey.Set(k12, k22);
	        vc.K.GetInverse(vc.normalMass);
	      } else {
	        // The constraints are redundant, just use one.
	        // TODO_ERIN use deepest?
	        vc.pointCount = 1;
	      }
	    }
	  }
	};
	box2d.b2ContactSolver.prototype.InitializeVelocityConstraints.s_xfA = new box2d.b2Transform();
	box2d.b2ContactSolver.prototype.InitializeVelocityConstraints.s_xfB = new box2d.b2Transform();
	box2d.b2ContactSolver.prototype.InitializeVelocityConstraints.s_worldManifold = new box2d.b2WorldManifold();

	/**
	 * @export
	 * @return {void}
	 */
	box2d.b2ContactSolver.prototype.WarmStart = function () {
	  /** @type {number} */
	  var i;
	  /** @type {number} */
	  var ict;
	  /** @type {number} */
	  var j;
	  /** @type {number} */
	  var jct;

	  /** @type {box2d.b2ContactVelocityConstraint} */
	  var vc;

	  /** @type {number} */
	  var indexA;
	  /** @type {number} */
	  var indexB;
	  /** @type {number} */
	  var mA;
	  /** @type {number} */
	  var iA;
	  /** @type {number} */
	  var mB;
	  /** @type {number} */
	  var iB;
	  /** @type {number} */
	  var pointCount;

	  /** @type {box2d.b2Vec2} */
	  var vA;
	  /** @type {number} */
	  var wA;
	  /** @type {box2d.b2Vec2} */
	  var vB;
	  /** @type {number} */
	  var wB;

	  /** @type {box2d.b2Vec2} */
	  var normal;
	  /** @type {box2d.b2Vec2} */
	  var tangent;

	  /** @type {box2d.b2VelocityConstraintPoint} */
	  var vcp;
	  /** @type {box2d.b2Vec2} */
	  var P = box2d.b2ContactSolver.prototype.WarmStart.s_P;

	  // Warm start.
	  for (i = 0, ict = this.m_count; i < ict; ++i) {
	    vc = this.m_velocityConstraints[i];

	    indexA = vc.indexA;
	    indexB = vc.indexB;
	    mA = vc.invMassA;
	    iA = vc.invIA;
	    mB = vc.invMassB;
	    iB = vc.invIB;
	    pointCount = vc.pointCount;

	    vA = this.m_velocities[indexA].v;
	    wA = this.m_velocities[indexA].w;
	    vB = this.m_velocities[indexB].v;
	    wB = this.m_velocities[indexB].w;

	    normal = vc.normal;
	    //    b2Vec2 tangent = b2Cross(normal, 1.0f);
	    tangent = vc.tangent; // precomputed from normal

	    for (j = 0, jct = pointCount; j < jct; ++j) {
	      vcp = vc.points[j];
	      //      b2Vec2 P = vcp->normalImpulse * normal + vcp->tangentImpulse * tangent;
	      box2d.b2Add_V2_V2(box2d.b2Mul_S_V2(vcp.normalImpulse, normal, box2d.b2Vec2.s_t0), box2d.b2Mul_S_V2(vcp.tangentImpulse, tangent, box2d.b2Vec2.s_t1), P);
	      //      wA -= iA * b2Cross(vcp->rA, P);
	      wA -= iA * box2d.b2Cross_V2_V2(vcp.rA, P);
	      //      vA -= mA * P;
	      vA.SelfMulSub(mA, P);
	      //      wB += iB * b2Cross(vcp->rB, P);
	      wB += iB * box2d.b2Cross_V2_V2(vcp.rB, P);
	      //      vB += mB * P;
	      vB.SelfMulAdd(mB, P);
	    }

	    //    this.m_velocities[indexA].v = vA;
	    this.m_velocities[indexA].w = wA;
	    //    this.m_velocities[indexB].v = vB;
	    this.m_velocities[indexB].w = wB;
	  }
	};
	box2d.b2ContactSolver.prototype.WarmStart.s_P = new box2d.b2Vec2();

	/**
	 * @export
	 * @return {void}
	 */
	box2d.b2ContactSolver.prototype.SolveVelocityConstraints = function () {
	  /** @type {number} */
	  var i;
	  /** @type {number} */
	  var ict;
	  /** @type {number} */
	  var j;
	  /** @type {number} */
	  var jct;

	  /** @type {box2d.b2ContactVelocityConstraint} */
	  var vc;
	  /** @type {number} */
	  var indexA;
	  /** @type {number} */
	  var indexB;
	  /** @type {number} */
	  var mA;
	  /** @type {number} */
	  var iA;
	  /** @type {number} */
	  var mB;
	  /** @type {number} */
	  var iB;
	  /** @type {number} */
	  var pointCount;
	  /** @type {box2d.b2Vec2} */
	  var vA;
	  /** @type {number} */
	  var wA;
	  /** @type {box2d.b2Vec2} */
	  var vB;
	  /** @type {number} */
	  var wB;
	  /** @type {box2d.b2Vec2} */
	  var normal;
	  /** @type {box2d.b2Vec2} */
	  var tangent;
	  /** @type {number} */
	  var friction;

	  /** @type {box2d.b2VelocityConstraintPoint} */
	  var vcp;

	  /** @type {box2d.b2Vec2} */
	  var dv = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_dv;
	  /** @type {box2d.b2Vec2} */
	  var dv1 = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_dv1;
	  /** @type {box2d.b2Vec2} */
	  var dv2 = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_dv2;

	  /** @type {number} */
	  var vt;
	  /** @type {number} */
	  var vn;
	  /** @type {number} */
	  var lambda;

	  /** @type {number} */
	  var maxFriction;
	  /** @type {number} */
	  var newImpulse;

	  /** @type {box2d.b2Vec2} */
	  var P = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_P;

	  /** @type {box2d.b2VelocityConstraintPoint} */
	  var cp1;
	  /** @type {box2d.b2VelocityConstraintPoint} */
	  var cp2;

	  /** @type {box2d.b2Vec2} */
	  var a = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_a;
	  /** @type {box2d.b2Vec2} */
	  var b = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_b;
	  /** @type {number} */
	  var vn1;
	  /** @type {number} */
	  var vn2;

	  /** @type {box2d.b2Vec2} */
	  var x = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_x;
	  /** @type {box2d.b2Vec2} */
	  var d = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_d;
	  /** @type {box2d.b2Vec2} */
	  var P1 = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_P1;
	  /** @type {box2d.b2Vec2} */
	  var P2 = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_P2;
	  /** @type {box2d.b2Vec2} */
	  var P1P2 = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_P1P2;

	  for (i = 0, ict = this.m_count; i < ict; ++i) {
	    vc = this.m_velocityConstraints[i];

	    indexA = vc.indexA;
	    indexB = vc.indexB;
	    mA = vc.invMassA;
	    iA = vc.invIA;
	    mB = vc.invMassB;
	    iB = vc.invIB;
	    pointCount = vc.pointCount;

	    vA = this.m_velocities[indexA].v;
	    wA = this.m_velocities[indexA].w;
	    vB = this.m_velocities[indexB].v;
	    wB = this.m_velocities[indexB].w;

	    //    b2Vec2 normal = vc->normal;
	    normal = vc.normal;
	    //    b2Vec2 tangent = b2Cross(normal, 1.0f);
	    tangent = vc.tangent; // precomputed from normal
	    friction = vc.friction;

	    if (box2d.ENABLE_ASSERTS) {
	      box2d.b2Assert(pointCount === 1 || pointCount === 2);
	    }

	    // Solve tangent constraints first because non-penetration is more important
	    // than friction.
	    for (j = 0, jct = pointCount; j < jct; ++j) {
	      vcp = vc.points[j];

	      // Relative velocity at contact
	      //      b2Vec2 dv = vB + b2Cross(wB, vcp->rB) - vA - b2Cross(wA, vcp->rA);
	      box2d.b2Sub_V2_V2(box2d.b2AddCross_V2_S_V2(vB, wB, vcp.rB, box2d.b2Vec2.s_t0), box2d.b2AddCross_V2_S_V2(vA, wA, vcp.rA, box2d.b2Vec2.s_t1), dv);

	      // Compute tangent force
	      //      float32 vt = b2Dot(dv, tangent) - vc->tangentSpeed;
	      vt = box2d.b2Dot_V2_V2(dv, tangent) - vc.tangentSpeed;
	      lambda = vcp.tangentMass * -vt;

	      // box2d.b2Clamp the accumulated force
	      maxFriction = friction * vcp.normalImpulse;
	      newImpulse = box2d.b2Clamp(vcp.tangentImpulse + lambda, -maxFriction, maxFriction);
	      lambda = newImpulse - vcp.tangentImpulse;
	      vcp.tangentImpulse = newImpulse;

	      // Apply contact impulse
	      //      b2Vec2 P = lambda * tangent;
	      box2d.b2Mul_S_V2(lambda, tangent, P);

	      //      vA -= mA * P;
	      vA.SelfMulSub(mA, P);
	      //      wA -= iA * b2Cross(vcp->rA, P);
	      wA -= iA * box2d.b2Cross_V2_V2(vcp.rA, P);

	      //      vB += mB * P;
	      vB.SelfMulAdd(mB, P);
	      //      wB += iB * b2Cross(vcp->rB, P);
	      wB += iB * box2d.b2Cross_V2_V2(vcp.rB, P);
	    }

	    // Solve normal constraints
	    if (vc.pointCount === 1 || !box2d.g_blockSolve) {
	      for (var ii = 0; ii < pointCount; ++ii) {
	        vcp = vc.points[ii];

	        // Relative velocity at contact
	        //        b2Vec2 dv = vB + b2Cross(wB, vcp->rB) - vA - b2Cross(wA, vcp->rA);
	        box2d.b2Sub_V2_V2(box2d.b2AddCross_V2_S_V2(vB, wB, vcp.rB, box2d.b2Vec2.s_t0), box2d.b2AddCross_V2_S_V2(vA, wA, vcp.rA, box2d.b2Vec2.s_t1), dv);

	        // Compute normal impulse
	        //        float32 vn = b2Dot(dv, normal);
	        vn = box2d.b2Dot_V2_V2(dv, normal);
	        lambda = -vcp.normalMass * (vn - vcp.velocityBias);

	        // box2d.b2Clamp the accumulated impulse
	        //        float32 newImpulse = box2d.b2Max(vcp->normalImpulse + lambda, 0.0f);
	        newImpulse = box2d.b2Max(vcp.normalImpulse + lambda, 0);
	        lambda = newImpulse - vcp.normalImpulse;
	        vcp.normalImpulse = newImpulse;

	        // Apply contact impulse
	        //        b2Vec2 P = lambda * normal;
	        box2d.b2Mul_S_V2(lambda, normal, P);
	        //        vA -= mA * P;
	        vA.SelfMulSub(mA, P);
	        //        wA -= iA * b2Cross(vcp->rA, P);
	        wA -= iA * box2d.b2Cross_V2_V2(vcp.rA, P);

	        //        vB += mB * P;
	        vB.SelfMulAdd(mB, P);
	        //        wB += iB * b2Cross(vcp->rB, P);
	        wB += iB * box2d.b2Cross_V2_V2(vcp.rB, P);
	      }
	    } else {
	      // Block solver developed in collaboration with Dirk Gregorius (back in 01/07 on Box2D_Lite).
	      // Build the mini LCP for this contact patch
	      //
	      // vn = A * x + b, vn >= 0, , vn >= 0, x >= 0 and vn_i * x_i = 0 with i = 1..2
	      //
	      // A = J * W * JT and J = ( -n, -r1 x n, n, r2 x n )
	      // b = vn0 - velocityBias
	      //
	      // The system is solved using the "Total enumeration method" (s. Murty). The complementary constraint vn_i * x_i
	      // implies that we must have in any solution either vn_i = 0 or x_i = 0. So for the 2D contact problem the cases
	      // vn1 = 0 and vn2 = 0, x1 = 0 and x2 = 0, x1 = 0 and vn2 = 0, x2 = 0 and vn1 = 0 need to be tested. The first valid
	      // solution that satisfies the problem is chosen.
	      //
	      // In order to account of the accumulated impulse 'a' (because of the iterative nature of the solver which only requires
	      // that the accumulated impulse is clamped and not the incremental impulse) we change the impulse variable (x_i).
	      //
	      // Substitute:
	      //
	      // x = a + d
	      //
	      // a := old total impulse
	      // x := new total impulse
	      // d := incremental impulse
	      //
	      // For the current iteration we extend the formula for the incremental impulse
	      // to compute the new total impulse:
	      //
	      // vn = A * d + b
	      //    = A * (x - a) + b
	      //    = A * x + b - A * a
	      //    = A * x + b'
	      // b' = b - A * a;

	      cp1 = vc.points[0];
	      cp2 = vc.points[1];

	      //      b2Vec2 a(cp1->normalImpulse, cp2->normalImpulse);
	      a.Set(cp1.normalImpulse, cp2.normalImpulse);
	      if (box2d.ENABLE_ASSERTS) {
	        box2d.b2Assert(a.x >= 0 && a.y >= 0);
	      }

	      // Relative velocity at contact
	      //      b2Vec2 dv1 = vB + b2Cross(wB, cp1->rB) - vA - b2Cross(wA, cp1->rA);
	      box2d.b2Sub_V2_V2(box2d.b2AddCross_V2_S_V2(vB, wB, cp1.rB, box2d.b2Vec2.s_t0), box2d.b2AddCross_V2_S_V2(vA, wA, cp1.rA, box2d.b2Vec2.s_t1), dv1);
	      //      b2Vec2 dv2 = vB + b2Cross(wB, cp2->rB) - vA - b2Cross(wA, cp2->rA);
	      box2d.b2Sub_V2_V2(box2d.b2AddCross_V2_S_V2(vB, wB, cp2.rB, box2d.b2Vec2.s_t0), box2d.b2AddCross_V2_S_V2(vA, wA, cp2.rA, box2d.b2Vec2.s_t1), dv2);

	      // Compute normal velocity
	      //      float32 vn1 = b2Dot(dv1, normal);
	      vn1 = box2d.b2Dot_V2_V2(dv1, normal);
	      //      float32 vn2 = b2Dot(dv2, normal);
	      vn2 = box2d.b2Dot_V2_V2(dv2, normal);

	      //      b2Vec2 b;
	      b.x = vn1 - cp1.velocityBias;
	      b.y = vn2 - cp2.velocityBias;

	      // Compute b'
	      //      b -= b2Mul(vc->K, a);
	      b.SelfSub(box2d.b2Mul_M22_V2(vc.K, a, box2d.b2Vec2.s_t0));

	      /*
	      #if B2_DEBUG_SOLVER === 1
	            var k_errorTol = 0.001;
	      #endif
	      */

	      for (;;) {
	        //
	        // Case 1: vn = 0
	        //
	        // 0 = A * x + b'
	        //
	        // Solve for x:
	        //
	        // x = - inv(A) * b'
	        //
	        //        b2Vec2 x = - b2Mul(vc->normalMass, b);
	        box2d.b2Mul_M22_V2(vc.normalMass, b, x).SelfNeg();

	        if (x.x >= 0 && x.y >= 0) {
	          // Get the incremental impulse
	          //          b2Vec2 d = x - a;
	          box2d.b2Sub_V2_V2(x, a, d);

	          // Apply incremental impulse
	          //          b2Vec2 P1 = d.x * normal;
	          box2d.b2Mul_S_V2(d.x, normal, P1);
	          //          b2Vec2 P2 = d.y * normal;
	          box2d.b2Mul_S_V2(d.y, normal, P2);
	          box2d.b2Add_V2_V2(P1, P2, P1P2);
	          //          vA -= mA * (P1 + P2);
	          vA.SelfMulSub(mA, P1P2);
	          //          wA -= iA * (b2Cross(cp1->rA, P1) + b2Cross(cp2->rA, P2));
	          wA -= iA * (box2d.b2Cross_V2_V2(cp1.rA, P1) + box2d.b2Cross_V2_V2(cp2.rA, P2));

	          //          vB += mB * (P1 + P2);
	          vB.SelfMulAdd(mB, P1P2);
	          //          wB += iB * (b2Cross(cp1->rB, P1) + b2Cross(cp2->rB, P2));
	          wB += iB * (box2d.b2Cross_V2_V2(cp1.rB, P1) + box2d.b2Cross_V2_V2(cp2.rB, P2));

	          // Accumulate
	          cp1.normalImpulse = x.x;
	          cp2.normalImpulse = x.y;

	          /*
	          #if B2_DEBUG_SOLVER === 1
	                    // Postconditions
	                    dv1 = vB + b2Cross(wB, cp1->rB) - vA - b2Cross(wA, cp1->rA);
	                    dv2 = vB + b2Cross(wB, cp2->rB) - vA - b2Cross(wA, cp2->rA);
	                     // Compute normal velocity
	                    vn1 = b2Dot(dv1, normal);
	                    vn2 = b2Dot(dv2, normal);
	                     if (box2d.ENABLE_ASSERTS) { box2d.b2Assert(box2d.b2Abs(vn1 - cp1->velocityBias) < k_errorTol); }
	                    if (box2d.ENABLE_ASSERTS) { box2d.b2Assert(box2d.b2Abs(vn2 - cp2->velocityBias) < k_errorTol); }
	          #endif
	          */
	          break;
	        }

	        //
	        // Case 2: vn1 = 0 and x2 = 0
	        //
	        //   0 = a11 * x1 + a12 * 0 + b1'
	        // vn2 = a21 * x1 + a22 * 0 + b2'
	        //
	        x.x = -cp1.normalMass * b.x;
	        x.y = 0;
	        vn1 = 0;
	        vn2 = vc.K.ex.y * x.x + b.y;

	        if (x.x >= 0 && vn2 >= 0) {
	          // Get the incremental impulse
	          //          b2Vec2 d = x - a;
	          box2d.b2Sub_V2_V2(x, a, d);

	          // Apply incremental impulse
	          //          b2Vec2 P1 = d.x * normal;
	          box2d.b2Mul_S_V2(d.x, normal, P1);
	          //          b2Vec2 P2 = d.y * normal;
	          box2d.b2Mul_S_V2(d.y, normal, P2);
	          box2d.b2Add_V2_V2(P1, P2, P1P2);
	          //          vA -= mA * (P1 + P2);
	          vA.SelfMulSub(mA, P1P2);
	          //          wA -= iA * (b2Cross(cp1->rA, P1) + b2Cross(cp2->rA, P2));
	          wA -= iA * (box2d.b2Cross_V2_V2(cp1.rA, P1) + box2d.b2Cross_V2_V2(cp2.rA, P2));

	          //          vB += mB * (P1 + P2);
	          vB.SelfMulAdd(mB, P1P2);
	          //          wB += iB * (b2Cross(cp1->rB, P1) + b2Cross(cp2->rB, P2));
	          wB += iB * (box2d.b2Cross_V2_V2(cp1.rB, P1) + box2d.b2Cross_V2_V2(cp2.rB, P2));

	          // Accumulate
	          cp1.normalImpulse = x.x;
	          cp2.normalImpulse = x.y;

	          /*
	          #if B2_DEBUG_SOLVER === 1
	                    // Postconditions
	                    dv1 = vB + b2Cross(wB, cp1->rB) - vA - b2Cross(wA, cp1->rA);
	                     // Compute normal velocity
	                    vn1 = b2Dot(dv1, normal);
	                     if (box2d.ENABLE_ASSERTS) { box2d.b2Assert(box2d.b2Abs(vn1 - cp1->velocityBias) < k_errorTol); }
	          #endif
	          */
	          break;
	        }

	        //
	        // Case 3: vn2 = 0 and x1 = 0
	        //
	        // vn1 = a11 * 0 + a12 * x2 + b1'
	        //   0 = a21 * 0 + a22 * x2 + b2'
	        //
	        x.x = 0;
	        x.y = -cp2.normalMass * b.y;
	        vn1 = vc.K.ey.x * x.y + b.x;
	        vn2 = 0;

	        if (x.y >= 0 && vn1 >= 0) {
	          // Resubstitute for the incremental impulse
	          //          b2Vec2 d = x - a;
	          box2d.b2Sub_V2_V2(x, a, d);

	          // Apply incremental impulse
	          //          b2Vec2 P1 = d.x * normal;
	          box2d.b2Mul_S_V2(d.x, normal, P1);
	          //          b2Vec2 P2 = d.y * normal;
	          box2d.b2Mul_S_V2(d.y, normal, P2);
	          box2d.b2Add_V2_V2(P1, P2, P1P2);
	          //          vA -= mA * (P1 + P2);
	          vA.SelfMulSub(mA, P1P2);
	          //          wA -= iA * (b2Cross(cp1->rA, P1) + b2Cross(cp2->rA, P2));
	          wA -= iA * (box2d.b2Cross_V2_V2(cp1.rA, P1) + box2d.b2Cross_V2_V2(cp2.rA, P2));

	          //          vB += mB * (P1 + P2);
	          vB.SelfMulAdd(mB, P1P2);
	          //          wB += iB * (b2Cross(cp1->rB, P1) + b2Cross(cp2->rB, P2));
	          wB += iB * (box2d.b2Cross_V2_V2(cp1.rB, P1) + box2d.b2Cross_V2_V2(cp2.rB, P2));

	          // Accumulate
	          cp1.normalImpulse = x.x;
	          cp2.normalImpulse = x.y;

	          /*
	          #if B2_DEBUG_SOLVER === 1
	                    // Postconditions
	                    dv2 = vB + b2Cross(wB, cp2->rB) - vA - b2Cross(wA, cp2->rA);
	                     // Compute normal velocity
	                    vn2 = b2Dot(dv2, normal);
	                     if (box2d.ENABLE_ASSERTS) { box2d.b2Assert(box2d.b2Abs(vn2 - cp2->velocityBias) < k_errorTol); }
	          #endif
	          */
	          break;
	        }

	        //
	        // Case 4: x1 = 0 and x2 = 0
	        //
	        // vn1 = b1
	        // vn2 = b2;
	        x.x = 0;
	        x.y = 0;
	        vn1 = b.x;
	        vn2 = b.y;

	        if (vn1 >= 0 && vn2 >= 0) {
	          // Resubstitute for the incremental impulse
	          //          b2Vec2 d = x - a;
	          box2d.b2Sub_V2_V2(x, a, d);

	          // Apply incremental impulse
	          //          b2Vec2 P1 = d.x * normal;
	          box2d.b2Mul_S_V2(d.x, normal, P1);
	          //          b2Vec2 P2 = d.y * normal;
	          box2d.b2Mul_S_V2(d.y, normal, P2);
	          box2d.b2Add_V2_V2(P1, P2, P1P2);
	          //          vA -= mA * (P1 + P2);
	          vA.SelfMulSub(mA, P1P2);
	          //          wA -= iA * (b2Cross(cp1->rA, P1) + b2Cross(cp2->rA, P2));
	          wA -= iA * (box2d.b2Cross_V2_V2(cp1.rA, P1) + box2d.b2Cross_V2_V2(cp2.rA, P2));

	          //          vB += mB * (P1 + P2);
	          vB.SelfMulAdd(mB, P1P2);
	          //          wB += iB * (b2Cross(cp1->rB, P1) + b2Cross(cp2->rB, P2));
	          wB += iB * (box2d.b2Cross_V2_V2(cp1.rB, P1) + box2d.b2Cross_V2_V2(cp2.rB, P2));

	          // Accumulate
	          cp1.normalImpulse = x.x;
	          cp2.normalImpulse = x.y;

	          break;
	        }

	        // No solution, give up. This is hit sometimes, but it doesn't seem to matter.
	        break;
	      }
	    }

	    //    this.m_velocities[indexA].v = vA;
	    this.m_velocities[indexA].w = wA;
	    //    this.m_velocities[indexB].v = vB;
	    this.m_velocities[indexB].w = wB;
	  }
	};
	box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_dv = new box2d.b2Vec2();
	box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_dv1 = new box2d.b2Vec2();
	box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_dv2 = new box2d.b2Vec2();
	box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_P = new box2d.b2Vec2();
	box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_a = new box2d.b2Vec2();
	box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_b = new box2d.b2Vec2();
	box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_x = new box2d.b2Vec2();
	box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_d = new box2d.b2Vec2();
	box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_P1 = new box2d.b2Vec2();
	box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_P2 = new box2d.b2Vec2();
	box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_P1P2 = new box2d.b2Vec2();

	/**
	 * @export
	 * @return {void}
	 */
	box2d.b2ContactSolver.prototype.StoreImpulses = function () {
	  /** @type {number} */
	  var i;
	  /** @type {number} */
	  var ict;
	  /** @type {number} */
	  var j;
	  /** @type {number} */
	  var jct;

	  /** @type {box2d.b2ContactVelocityConstraint} */
	  var vc;
	  /** @type {box2d.b2Manifold} */
	  var manifold;

	  for (i = 0, ict = this.m_count; i < ict; ++i) {
	    vc = this.m_velocityConstraints[i];
	    manifold = this.m_contacts[vc.contactIndex].GetManifold();

	    for (j = 0, jct = vc.pointCount; j < jct; ++j) {
	      manifold.points[j].normalImpulse = vc.points[j].normalImpulse;
	      manifold.points[j].tangentImpulse = vc.points[j].tangentImpulse;
	    }
	  }
	};

	/**
	 * @export
	 * @constructor
	 */
	box2d.b2PositionSolverManifold = function () {
	  this.normal = new box2d.b2Vec2();
	  this.point = new box2d.b2Vec2();
	};

	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2PositionSolverManifold.prototype.normal = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2PositionSolverManifold.prototype.point = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2PositionSolverManifold.prototype.separation = 0;

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2ContactPositionConstraint} pc
	 * @param {box2d.b2Transform} xfA
	 * @param {box2d.b2Transform} xfB
	 * @param {number} index
	 */
	box2d.b2PositionSolverManifold.prototype.Initialize = function (pc, xfA, xfB, index) {
	  /** @type {box2d.b2Vec2} */
	  var pointA = box2d.b2PositionSolverManifold.prototype.Initialize.s_pointA;
	  /** @type {box2d.b2Vec2} */
	  var pointB = box2d.b2PositionSolverManifold.prototype.Initialize.s_pointB;
	  /** @type {box2d.b2Vec2} */
	  var planePoint = box2d.b2PositionSolverManifold.prototype.Initialize.s_planePoint;
	  /** @type {box2d.b2Vec2} */
	  var clipPoint = box2d.b2PositionSolverManifold.prototype.Initialize.s_clipPoint;

	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(pc.pointCount > 0);
	  }

	  switch (pc.type) {
	    case box2d.b2ManifoldType.e_circles:
	      {
	        //      b2Vec2 pointA = b2Mul(xfA, pc->localPoint);
	        box2d.b2Mul_X_V2(xfA, pc.localPoint, pointA);
	        //      b2Vec2 pointB = b2Mul(xfB, pc->localPoints[0]);
	        box2d.b2Mul_X_V2(xfB, pc.localPoints[0], pointB);
	        //      normal = pointB - pointA;
	        //      normal.Normalize();
	        box2d.b2Sub_V2_V2(pointB, pointA, this.normal).SelfNormalize();
	        //      point = 0.5f * (pointA + pointB);
	        box2d.b2Mid_V2_V2(pointA, pointB, this.point);
	        //      separation = b2Dot(pointB - pointA, normal) - pc->radius;
	        this.separation = box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(pointB, pointA, box2d.b2Vec2.s_t0), this.normal) - pc.radiusA - pc.radiusB;
	      }
	      break;

	    case box2d.b2ManifoldType.e_faceA:
	      {
	        //      normal = b2Mul(xfA.q, pc->localNormal);
	        box2d.b2Mul_R_V2(xfA.q, pc.localNormal, this.normal);
	        //      b2Vec2 planePoint = b2Mul(xfA, pc->localPoint);
	        box2d.b2Mul_X_V2(xfA, pc.localPoint, planePoint);

	        //      b2Vec2 clipPoint = b2Mul(xfB, pc->localPoints[index]);
	        box2d.b2Mul_X_V2(xfB, pc.localPoints[index], clipPoint);
	        //      separation = b2Dot(clipPoint - planePoint, normal) - pc->radius;
	        this.separation = box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(clipPoint, planePoint, box2d.b2Vec2.s_t0), this.normal) - pc.radiusA - pc.radiusB;
	        //      point = clipPoint;
	        this.point.Copy(clipPoint);
	      }
	      break;

	    case box2d.b2ManifoldType.e_faceB:
	      {
	        //      normal = b2Mul(xfB.q, pc->localNormal);
	        box2d.b2Mul_R_V2(xfB.q, pc.localNormal, this.normal);
	        //      b2Vec2 planePoint = b2Mul(xfB, pc->localPoint);
	        box2d.b2Mul_X_V2(xfB, pc.localPoint, planePoint);

	        //      b2Vec2 clipPoint = b2Mul(xfA, pc->localPoints[index]);
	        box2d.b2Mul_X_V2(xfA, pc.localPoints[index], clipPoint);
	        //      separation = b2Dot(clipPoint - planePoint, normal) - pc->radius;
	        this.separation = box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(clipPoint, planePoint, box2d.b2Vec2.s_t0), this.normal) - pc.radiusA - pc.radiusB;
	        //      point = clipPoint;
	        this.point.Copy(clipPoint);

	        // Ensure normal points from A to B
	        //      normal = -normal;
	        this.normal.SelfNeg();
	      }
	      break;
	  }
	};
	box2d.b2PositionSolverManifold.prototype.Initialize.s_pointA = new box2d.b2Vec2();
	box2d.b2PositionSolverManifold.prototype.Initialize.s_pointB = new box2d.b2Vec2();
	box2d.b2PositionSolverManifold.prototype.Initialize.s_planePoint = new box2d.b2Vec2();
	box2d.b2PositionSolverManifold.prototype.Initialize.s_clipPoint = new box2d.b2Vec2();

	/**
	 * Sequential solver.
	 * @export
	 * @return {boolean}
	 */
	box2d.b2ContactSolver.prototype.SolvePositionConstraints = function () {
	  /** @type {number} */
	  var i;
	  /** @type {number} */
	  var ict;
	  /** @type {number} */
	  var j;
	  /** @type {number} */
	  var jct;

	  /** @type {box2d.b2ContactPositionConstraint} */
	  var pc;

	  /** @type {number} */
	  var indexA;
	  /** @type {number} */
	  var indexB;
	  /** @type {box2d.b2Vec2} */
	  var localCenterA;
	  /** @type {number} */
	  var mA;
	  /** @type {number} */
	  var iA;
	  /** @type {box2d.b2Vec2} */
	  var localCenterB;
	  /** @type {number} */
	  var mB;
	  /** @type {number} */
	  var iB;
	  /** @type {number} */
	  var pointCount;

	  /** @type {box2d.b2Vec2} */
	  var cA;
	  /** @type {number} */
	  var aA;

	  /** @type {box2d.b2Vec2} */
	  var cB;
	  /** @type {number} */
	  var aB;

	  /** @type {box2d.b2Transform} */
	  var xfA = box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_xfA;
	  /** @type {box2d.b2Transform} */
	  var xfB = box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_xfB;

	  /** @type {box2d.b2PositionSolverManifold} */
	  var psm = box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_psm;

	  /** @type {box2d.b2Vec2} */
	  var normal;
	  /** @type {box2d.b2Vec2} */
	  var point;
	  /** @type {number} */
	  var separation;

	  /** @type {box2d.b2Vec2} */
	  var rA = box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_rA;
	  /** @type {box2d.b2Vec2} */
	  var rB = box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_rB;

	  /** @type {number} */
	  var C;
	  /** @type {number} */
	  var rnA;
	  /** @type {number} */
	  var rnB;
	  /** @type {number} */
	  var K;
	  /** @type {number} */
	  var impulse;
	  /** @type {box2d.b2Vec2} */
	  var P = box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_P;

	  /** @type {number} */
	  var minSeparation = 0;

	  for (i = 0, ict = this.m_count; i < ict; ++i) {
	    pc = this.m_positionConstraints[i];

	    indexA = pc.indexA;
	    indexB = pc.indexB;
	    localCenterA = pc.localCenterA;
	    mA = pc.invMassA;
	    iA = pc.invIA;
	    localCenterB = pc.localCenterB;
	    mB = pc.invMassB;
	    iB = pc.invIB;
	    pointCount = pc.pointCount;

	    cA = this.m_positions[indexA].c;
	    aA = this.m_positions[indexA].a;

	    cB = this.m_positions[indexB].c;
	    aB = this.m_positions[indexB].a;

	    // Solve normal constraints
	    for (j = 0, jct = pointCount; j < jct; ++j) {
	      xfA.q.SetAngle(aA);
	      xfB.q.SetAngle(aB);
	      box2d.b2Sub_V2_V2(cA, box2d.b2Mul_R_V2(xfA.q, localCenterA, box2d.b2Vec2.s_t0), xfA.p);
	      box2d.b2Sub_V2_V2(cB, box2d.b2Mul_R_V2(xfB.q, localCenterB, box2d.b2Vec2.s_t0), xfB.p);

	      psm.Initialize(pc, xfA, xfB, j);
	      normal = psm.normal;

	      point = psm.point;
	      separation = psm.separation;

	      //      b2Vec2 rA = point - cA;
	      box2d.b2Sub_V2_V2(point, cA, rA);
	      //      b2Vec2 rB = point - cB;
	      box2d.b2Sub_V2_V2(point, cB, rB);

	      // Track max constraint error.
	      minSeparation = box2d.b2Min(minSeparation, separation);

	      // Prevent large corrections and allow slop.
	      C = box2d.b2Clamp(box2d.b2_baumgarte * (separation + box2d.b2_linearSlop), -box2d.b2_maxLinearCorrection, 0);

	      // Compute the effective mass.
	      //      float32 rnA = b2Cross(rA, normal);
	      rnA = box2d.b2Cross_V2_V2(rA, normal);
	      //      float32 rnB = b2Cross(rB, normal);
	      rnB = box2d.b2Cross_V2_V2(rB, normal);
	      //      float32 K = mA + mB + iA * rnA * rnA + iB * rnB * rnB;
	      K = mA + mB + iA * rnA * rnA + iB * rnB * rnB;

	      // Compute normal impulse
	      impulse = K > 0 ? -C / K : 0;

	      //      b2Vec2 P = impulse * normal;
	      box2d.b2Mul_S_V2(impulse, normal, P);

	      //      cA -= mA * P;
	      cA.SelfMulSub(mA, P);
	      //      aA -= iA * b2Cross(rA, P);
	      aA -= iA * box2d.b2Cross_V2_V2(rA, P);

	      //      cB += mB * P;
	      cB.SelfMulAdd(mB, P);
	      //      aB += iB * b2Cross(rB, P);
	      aB += iB * box2d.b2Cross_V2_V2(rB, P);
	    }

	    //    this.m_positions[indexA].c = cA;
	    this.m_positions[indexA].a = aA;

	    //    this.m_positions[indexB].c = cB;
	    this.m_positions[indexB].a = aB;
	  }

	  // We can't expect minSpeparation >= -box2d.b2_linearSlop because we don't
	  // push the separation above -box2d.b2_linearSlop.
	  return minSeparation > -3 * box2d.b2_linearSlop;
	};
	box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_xfA = new box2d.b2Transform();
	box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_xfB = new box2d.b2Transform();
	box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_psm = new box2d.b2PositionSolverManifold();
	box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_rA = new box2d.b2Vec2();
	box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_rB = new box2d.b2Vec2();
	box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_P = new box2d.b2Vec2();

	/**
	 * Sequential position solver for position constraints.
	 * @export
	 * @return {boolean}
	 * @param {number} toiIndexA
	 * @param {number} toiIndexB
	 */
	box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints = function (toiIndexA, toiIndexB) {
	  /** @type {number} */
	  var i;
	  /** @type {number} */
	  var ict;
	  /** @type {number} */
	  var j;
	  /** @type {number} */
	  var jct;

	  /** @type {box2d.b2ContactPositionConstraint} */
	  var pc;

	  /** @type {number} */
	  var indexA;
	  /** @type {number} */
	  var indexB;
	  /** @type {box2d.b2Vec2} */
	  var localCenterA;
	  /** @type {box2d.b2Vec2} */
	  var localCenterB;
	  /** @type {number} */
	  var pointCount;

	  /** @type {number} */
	  var mA;
	  /** @type {number} */
	  var iA;

	  /** @type {number} */
	  var mB;
	  /** @type {number} */
	  var iB;

	  /** @type {box2d.b2Vec2} */
	  var cA;
	  /** @type {number} */
	  var aA;

	  /** @type {box2d.b2Vec2} */
	  var cB;
	  /** @type {number} */
	  var aB;

	  /** @type {box2d.b2Transform} */
	  var xfA = box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_xfA;
	  /** @type {box2d.b2Transform} */
	  var xfB = box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_xfB;

	  /** @type {box2d.b2PositionSolverManifold} */
	  var psm = box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_psm;
	  /** @type {box2d.b2Vec2} */
	  var normal;
	  /** @type {box2d.b2Vec2} */
	  var point;
	  /** @type {number} */
	  var separation;
	  /** @type {box2d.b2Vec2} */
	  var rA = box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_rA;
	  /** @type {box2d.b2Vec2} */
	  var rB = box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_rB;
	  /** @type {number} */
	  var C;
	  /** @type {number} */
	  var rnA;
	  /** @type {number} */
	  var rnB;
	  /** @type {number} */
	  var K;
	  /** @type {number} */
	  var impulse;
	  /** @type {box2d.b2Vec2} */
	  var P = box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_P;

	  /** @type {number} */
	  var minSeparation = 0;

	  for (i = 0, ict = this.m_count; i < ict; ++i) {
	    pc = this.m_positionConstraints[i];

	    indexA = pc.indexA;
	    indexB = pc.indexB;
	    localCenterA = pc.localCenterA;
	    localCenterB = pc.localCenterB;
	    pointCount = pc.pointCount;

	    mA = 0;
	    iA = 0;
	    if (indexA === toiIndexA || indexA === toiIndexB) {
	      mA = pc.invMassA;
	      iA = pc.invIA;
	    }

	    mB = 0;
	    iB = 0;
	    if (indexB === toiIndexA || indexB === toiIndexB) {
	      mB = pc.invMassB;
	      iB = pc.invIB;
	    }

	    cA = this.m_positions[indexA].c;
	    aA = this.m_positions[indexA].a;

	    cB = this.m_positions[indexB].c;
	    aB = this.m_positions[indexB].a;

	    // Solve normal constraints
	    for (j = 0, jct = pointCount; j < jct; ++j) {
	      xfA.q.SetAngle(aA);
	      xfB.q.SetAngle(aB);
	      box2d.b2Sub_V2_V2(cA, box2d.b2Mul_R_V2(xfA.q, localCenterA, box2d.b2Vec2.s_t0), xfA.p);
	      box2d.b2Sub_V2_V2(cB, box2d.b2Mul_R_V2(xfB.q, localCenterB, box2d.b2Vec2.s_t0), xfB.p);

	      psm.Initialize(pc, xfA, xfB, j);
	      normal = psm.normal;

	      point = psm.point;
	      separation = psm.separation;

	      //      b2Vec2 rA = point - cA;
	      box2d.b2Sub_V2_V2(point, cA, rA);
	      //      b2Vec2 rB = point - cB;
	      box2d.b2Sub_V2_V2(point, cB, rB);

	      // Track max constraint error.
	      minSeparation = box2d.b2Min(minSeparation, separation);

	      // Prevent large corrections and allow slop.
	      C = box2d.b2Clamp(box2d.b2_toiBaumgarte * (separation + box2d.b2_linearSlop), -box2d.b2_maxLinearCorrection, 0);

	      // Compute the effective mass.
	      //      float32 rnA = b2Cross(rA, normal);
	      rnA = box2d.b2Cross_V2_V2(rA, normal);
	      //      float32 rnB = b2Cross(rB, normal);
	      rnB = box2d.b2Cross_V2_V2(rB, normal);
	      //      float32 K = mA + mB + iA * rnA * rnA + iB * rnB * rnB;
	      K = mA + mB + iA * rnA * rnA + iB * rnB * rnB;

	      // Compute normal impulse
	      impulse = K > 0 ? -C / K : 0;

	      //      b2Vec2 P = impulse * normal;
	      box2d.b2Mul_S_V2(impulse, normal, P);

	      //      cA -= mA * P;
	      cA.SelfMulSub(mA, P);
	      //      aA -= iA * b2Cross(rA, P);
	      aA -= iA * box2d.b2Cross_V2_V2(rA, P);

	      //      cB += mB * P;
	      cB.SelfMulAdd(mB, P);
	      //      aB += iB * b2Cross(rB, P);
	      aB += iB * box2d.b2Cross_V2_V2(rB, P);
	    }

	    //    this.m_positions[indexA].c = cA;
	    this.m_positions[indexA].a = aA;

	    //    this.m_positions[indexB].c = cB;
	    this.m_positions[indexB].a = aB;
	  }

	  // We can't expect minSpeparation >= -box2d.b2_linearSlop because we don't
	  // push the separation above -box2d.b2_linearSlop.
	  return minSeparation >= -1.5 * box2d.b2_linearSlop;
	};
	box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_xfA = new box2d.b2Transform();
	box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_xfB = new box2d.b2Transform();
	box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_psm = new box2d.b2PositionSolverManifold();
	box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_rA = new box2d.b2Vec2();
	box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_rB = new box2d.b2Vec2();
	box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_P = new box2d.b2Vec2();

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(23);

	__webpack_require__(26);

	/**
	 * @export
	 * @constructor
	 * @extends {box2d.b2Contact}
	 */
	box2d.b2CircleContact = function () {
	  box2d.b2Contact.call(this); // base class constructor
	}; /*
	    * Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
	    *
	    * This software is provided 'as-is', without any express or implied
	    * warranty.  In no event will the authors be held liable for any damages
	    * arising from the use of this software.
	    * Permission is granted to anyone to use this software for any purpose,
	    * including commercial applications, and to alter it and redistribute it
	    * freely, subject to the following restrictions:
	    * 1. The origin of this software must not be misrepresented; you must not
	    * claim that you wrote the original software. If you use this software
	    * in a product, an acknowledgment in the product documentation would be
	    * appreciated but is not required.
	    * 2. Altered source versions must be plainly marked as such, and must not be
	    * misrepresented as being the original software.
	    * 3. This notice may not be removed or altered from any source distribution.
	    */

	goog.inherits(box2d.b2CircleContact, box2d.b2Contact);

	/**
	 * @export
	 * @return {box2d.b2Contact}
	 * @param allocator
	 */
	box2d.b2CircleContact.Create = function (allocator) {
	  return new box2d.b2CircleContact();
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2Contact} contact
	 * @param allocator
	 */
	box2d.b2CircleContact.Destroy = function (contact, allocator) {};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2Manifold} manifold
	 * @param {box2d.b2Transform} xfA
	 * @param {box2d.b2Transform} xfB
	 */
	box2d.b2CircleContact.prototype.Evaluate = function (manifold, xfA, xfB) {
	  var shapeA = this.m_fixtureA.GetShape();
	  var shapeB = this.m_fixtureB.GetShape();
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(shapeA instanceof box2d.b2CircleShape);
	  }
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(shapeB instanceof box2d.b2CircleShape);
	  }
	  box2d.b2CollideCircles(manifold, shapeA instanceof box2d.b2CircleShape ? shapeA : null, xfA, shapeB instanceof box2d.b2CircleShape ? shapeB : null, xfB);
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(13);

	/**
	 * Compute the collision manifold between two circles.
	 * @export
	 * @return {void}
	 * @param {box2d.b2Manifold} manifold
	 * @param {box2d.b2CircleShape} circleA
	 * @param {box2d.b2Transform} xfA
	 * @param {box2d.b2CircleShape} circleB
	 * @param {box2d.b2Transform} xfB
	 */
	box2d.b2CollideCircles = function (manifold, circleA, xfA, circleB, xfB) {
	  manifold.pointCount = 0;

	  var pA = box2d.b2Mul_X_V2(xfA, circleA.m_p, box2d.b2CollideCircles.s_pA);
	  var pB = box2d.b2Mul_X_V2(xfB, circleB.m_p, box2d.b2CollideCircles.s_pB);

	  var distSqr = box2d.b2DistanceSquared(pA, pB);
	  var radius = circleA.m_radius + circleB.m_radius;
	  if (distSqr > radius * radius) {
	    return;
	  }

	  manifold.type = box2d.b2ManifoldType.e_circles;
	  manifold.localPoint.Copy(circleA.m_p);
	  manifold.localNormal.SetZero();
	  manifold.pointCount = 1;

	  manifold.points[0].localPoint.Copy(circleB.m_p);
	  manifold.points[0].id.key = 0;
	}; /*
	    * Copyright (c) 2007-2009 Erin Catto http://www.box2d.org
	    *
	    * This software is provided 'as-is', without any express or implied
	    * warranty.  In no event will the authors be held liable for any damages
	    * arising from the use of this software.
	    * Permission is granted to anyone to use this software for any purpose,
	    * including commercial applications, and to alter it and redistribute it
	    * freely, subject to the following restrictions:
	    * 1. The origin of this software must not be misrepresented; you must not
	    * claim that you wrote the original software. If you use this software
	    * in a product, an acknowledgment in the product documentation would be
	    * appreciated but is not required.
	    * 2. Altered source versions must be plainly marked as such, and must not be
	    * misrepresented as being the original software.
	    * 3. This notice may not be removed or altered from any source distribution.
	    */

	box2d.b2CollideCircles.s_pA = new box2d.b2Vec2();
	box2d.b2CollideCircles.s_pB = new box2d.b2Vec2();

	/**
	 * Compute the collision manifold between a polygon and a
	 * circle.
	 * @export
	 * @return {void}
	 * @param {box2d.b2Manifold} manifold
	 * @param {box2d.b2PolygonShape} polygonA
	 * @param {box2d.b2Transform} xfA
	 * @param {box2d.b2CircleShape} circleB
	 * @param {box2d.b2Transform} xfB
	 */
	box2d.b2CollidePolygonAndCircle = function (manifold, polygonA, xfA, circleB, xfB) {
	  manifold.pointCount = 0;

	  // Compute circle position in the frame of the polygon.
	  var c = box2d.b2Mul_X_V2(xfB, circleB.m_p, box2d.b2CollidePolygonAndCircle.s_c);
	  var cLocal = box2d.b2MulT_X_V2(xfA, c, box2d.b2CollidePolygonAndCircle.s_cLocal);

	  // Find the min separating edge.
	  var normalIndex = 0;
	  var separation = -box2d.b2_maxFloat;
	  var radius = polygonA.m_radius + circleB.m_radius;
	  var vertexCount = polygonA.m_count;
	  var vertices = polygonA.m_vertices;
	  var normals = polygonA.m_normals;

	  for (var i = 0; i < vertexCount; ++i) {
	    var s = box2d.b2Dot_V2_V2(normals[i], box2d.b2Sub_V2_V2(cLocal, vertices[i], box2d.b2Vec2.s_t0));

	    if (s > radius) {
	      // Early out.
	      return;
	    }

	    if (s > separation) {
	      separation = s;
	      normalIndex = i;
	    }
	  }

	  // Vertices that subtend the incident face.
	  var vertIndex1 = normalIndex;
	  var vertIndex2 = (vertIndex1 + 1) % vertexCount;
	  var v1 = vertices[vertIndex1];
	  var v2 = vertices[vertIndex2];

	  // If the center is inside the polygon ...
	  if (separation < box2d.b2_epsilon) {
	    manifold.pointCount = 1;
	    manifold.type = box2d.b2ManifoldType.e_faceA;
	    manifold.localNormal.Copy(normals[normalIndex]);
	    box2d.b2Mid_V2_V2(v1, v2, manifold.localPoint);
	    manifold.points[0].localPoint.Copy(circleB.m_p);
	    manifold.points[0].id.key = 0;
	    return;
	  }

	  // Compute barycentric coordinates
	  var u1 = box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(cLocal, v1, box2d.b2Vec2.s_t0), box2d.b2Sub_V2_V2(v2, v1, box2d.b2Vec2.s_t1));
	  var u2 = box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(cLocal, v2, box2d.b2Vec2.s_t0), box2d.b2Sub_V2_V2(v1, v2, box2d.b2Vec2.s_t1));
	  if (u1 <= 0) {
	    if (box2d.b2DistanceSquared(cLocal, v1) > radius * radius) {
	      return;
	    }

	    manifold.pointCount = 1;
	    manifold.type = box2d.b2ManifoldType.e_faceA;
	    box2d.b2Sub_V2_V2(cLocal, v1, manifold.localNormal).SelfNormalize();
	    manifold.localPoint.Copy(v1);
	    manifold.points[0].localPoint.Copy(circleB.m_p);
	    manifold.points[0].id.key = 0;
	  } else if (u2 <= 0) {
	    if (box2d.b2DistanceSquared(cLocal, v2) > radius * radius) {
	      return;
	    }

	    manifold.pointCount = 1;
	    manifold.type = box2d.b2ManifoldType.e_faceA;
	    box2d.b2Sub_V2_V2(cLocal, v2, manifold.localNormal).SelfNormalize();
	    manifold.localPoint.Copy(v2);
	    manifold.points[0].localPoint.Copy(circleB.m_p);
	    manifold.points[0].id.key = 0;
	  } else {
	    var faceCenter = box2d.b2Mid_V2_V2(v1, v2, box2d.b2CollidePolygonAndCircle.s_faceCenter);
	    separation = box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(cLocal, faceCenter, box2d.b2Vec2.s_t1), normals[vertIndex1]);
	    if (separation > radius) {
	      return;
	    }

	    manifold.pointCount = 1;
	    manifold.type = box2d.b2ManifoldType.e_faceA;
	    manifold.localNormal.Copy(normals[vertIndex1]).SelfNormalize();
	    manifold.localPoint.Copy(faceCenter);
	    manifold.points[0].localPoint.Copy(circleB.m_p);
	    manifold.points[0].id.key = 0;
	  }
	};
	box2d.b2CollidePolygonAndCircle.s_c = new box2d.b2Vec2();
	box2d.b2CollidePolygonAndCircle.s_cLocal = new box2d.b2Vec2();
	box2d.b2CollidePolygonAndCircle.s_faceCenter = new box2d.b2Vec2();

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(23);

	/**
	 * @export
	 * @constructor
	 * @extends {box2d.b2Contact}
	 */
	/*
	 * Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
	 *
	 * This software is provided 'as-is', without any express or implied
	 * warranty.  In no event will the authors be held liable for any damages
	 * arising from the use of this software.
	 * Permission is granted to anyone to use this software for any purpose,
	 * including commercial applications, and to alter it and redistribute it
	 * freely, subject to the following restrictions:
	 * 1. The origin of this software must not be misrepresented; you must not
	 * claim that you wrote the original software. If you use this software
	 * in a product, an acknowledgment in the product documentation would be
	 * appreciated but is not required.
	 * 2. Altered source versions must be plainly marked as such, and must not be
	 * misrepresented as being the original software.
	 * 3. This notice may not be removed or altered from any source distribution.
	 */

	box2d.b2PolygonAndCircleContact = function () {
	  box2d.b2Contact.call(this); // base class constructor
	};

	goog.inherits(box2d.b2PolygonAndCircleContact, box2d.b2Contact);

	/**
	 * @export
	 * @return {box2d.b2Contact}
	 * @param allocator
	 */
	box2d.b2PolygonAndCircleContact.Create = function (allocator) {
	  return new box2d.b2PolygonAndCircleContact();
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2Contact} contact
	 * @param allocator
	 */
	box2d.b2PolygonAndCircleContact.Destroy = function (contact, allocator) {};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2Manifold} manifold
	 * @param {box2d.b2Transform} xfA
	 * @param {box2d.b2Transform} xfB
	 */
	box2d.b2PolygonAndCircleContact.prototype.Evaluate = function (manifold, xfA, xfB) {
	  var shapeA = this.m_fixtureA.GetShape();
	  var shapeB = this.m_fixtureB.GetShape();
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(shapeA instanceof box2d.b2PolygonShape);
	  }
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(shapeB instanceof box2d.b2CircleShape);
	  }
	  box2d.b2CollidePolygonAndCircle(manifold, shapeA instanceof box2d.b2PolygonShape ? shapeA : null, xfA, shapeB instanceof box2d.b2CircleShape ? shapeB : null, xfB);
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(23);

	__webpack_require__(29);

	/**
	 * @export
	 * @constructor
	 * @extends {box2d.b2Contact}
	 */
	box2d.b2PolygonContact = function () {
	  box2d.b2Contact.call(this); // base class constructor
	}; /*
	    * Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
	    *
	    * This software is provided 'as-is', without any express or implied
	    * warranty.  In no event will the authors be held liable for any damages
	    * arising from the use of this software.
	    * Permission is granted to anyone to use this software for any purpose,
	    * including commercial applications, and to alter it and redistribute it
	    * freely, subject to the following restrictions:
	    * 1. The origin of this software must not be misrepresented; you must not
	    * claim that you wrote the original software. If you use this software
	    * in a product, an acknowledgment in the product documentation would be
	    * appreciated but is not required.
	    * 2. Altered source versions must be plainly marked as such, and must not be
	    * misrepresented as being the original software.
	    * 3. This notice may not be removed or altered from any source distribution.
	    */

	goog.inherits(box2d.b2PolygonContact, box2d.b2Contact);

	/**
	 * @export
	 * @return {box2d.b2Contact}
	 * @param allocator
	 */
	box2d.b2PolygonContact.Create = function (allocator) {
	  return new box2d.b2PolygonContact();
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2Contact} contact
	 * @param allocator
	 */
	box2d.b2PolygonContact.Destroy = function (contact, allocator) {};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2Manifold} manifold
	 * @param {box2d.b2Transform} xfA
	 * @param {box2d.b2Transform} xfB
	 */
	box2d.b2PolygonContact.prototype.Evaluate = function (manifold, xfA, xfB) {
	  var shapeA = this.m_fixtureA.GetShape();
	  var shapeB = this.m_fixtureB.GetShape();
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(shapeA instanceof box2d.b2PolygonShape);
	  }
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(shapeB instanceof box2d.b2PolygonShape);
	  }
	  box2d.b2CollidePolygons(manifold, shapeA instanceof box2d.b2PolygonShape ? shapeA : null, xfA, shapeB instanceof box2d.b2PolygonShape ? shapeB : null, xfB);
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(13);

	/**
	 * Find the max separation between poly1 and poly2 using edge
	 * normals from poly1.
	 * @export
	 * @return {number}
	 * @param {Array.<number>} edgeIndex
	 * @param {box2d.b2PolygonShape} poly1
	 * @param {box2d.b2Transform} xf1
	 * @param {box2d.b2PolygonShape} poly2
	 * @param {box2d.b2Transform} xf2
	 */
	box2d.b2FindMaxSeparation = function (edgeIndex, poly1, xf1, poly2, xf2) {
	  var /*int32*/count1 = poly1.m_count;
	  var /*int32*/count2 = poly2.m_count;
	  var /*const b2Vec2**/n1s = poly1.m_normals;
	  var /*const b2Vec2**/v1s = poly1.m_vertices;
	  var /*const b2Vec2**/v2s = poly2.m_vertices;
	  var /*b2Transform*/xf = box2d.b2MulT_X_X(xf2, xf1, box2d.b2FindMaxSeparation.s_xf);

	  var /*int32*/bestIndex = 0;
	  var /*float32*/maxSeparation = -box2d.b2_maxFloat;
	  for (var /*int32*/i = 0; i < count1; ++i) {
	    // Get poly1 normal in frame2.
	    var /*b2Vec2*/n = box2d.b2Mul_R_V2(xf.q, n1s[i], box2d.b2FindMaxSeparation.s_n);
	    var /*b2Vec2*/v1 = box2d.b2Mul_X_V2(xf, v1s[i], box2d.b2FindMaxSeparation.s_v1);

	    // Find deepest point for normal i.
	    var /*float32*/si = box2d.b2_maxFloat;
	    for (var /*int32*/j = 0; j < count2; ++j) {
	      var /*float32*/sij = box2d.b2Dot_V2_V2(n, box2d.b2Sub_V2_V2(v2s[j], v1, box2d.b2Vec2.s_t0)); // b2Dot(n, v2s[j] - v1);
	      if (sij < si) {
	        si = sij;
	      }
	    }

	    if (si > maxSeparation) {
	      maxSeparation = si;
	      bestIndex = i;
	    }
	  }

	  edgeIndex[0] = bestIndex; // *edgeIndex = bestIndex;
	  return maxSeparation;
	}; /*
	    * Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
	    *
	    * This software is provided 'as-is', without any express or implied
	    * warranty.  In no event will the authors be held liable for any damages
	    * arising from the use of this software.
	    * Permission is granted to anyone to use this software for any purpose,
	    * including commercial applications, and to alter it and redistribute it
	    * freely, subject to the following restrictions:
	    * 1. The origin of this software must not be misrepresented; you must not
	    * claim that you wrote the original software. If you use this software
	    * in a product, an acknowledgment in the product documentation would be
	    * appreciated but is not required.
	    * 2. Altered source versions must be plainly marked as such, and must not be
	    * misrepresented as being the original software.
	    * 3. This notice may not be removed or altered from any source distribution.
	    */

	box2d.b2FindMaxSeparation.s_xf = new box2d.b2Transform();
	box2d.b2FindMaxSeparation.s_n = new box2d.b2Vec2();
	box2d.b2FindMaxSeparation.s_v1 = new box2d.b2Vec2();

	/**
	 * @export
	 * @return {void}
	 * @param {Array.<box2d.b2ClipVertex>} c
	 * @param {box2d.b2PolygonShape} poly1
	 * @param {box2d.b2Transform} xf1
	 * @param {number} edge1
	 * @param {box2d.b2PolygonShape} poly2
	 * @param {box2d.b2Transform} xf2
	 */
	box2d.b2FindIncidentEdge = function (c, poly1, xf1, edge1, poly2, xf2) {
	  var count1 = poly1.m_count;
	  var normals1 = poly1.m_normals;

	  var count2 = poly2.m_count;
	  var vertices2 = poly2.m_vertices;
	  var normals2 = poly2.m_normals;

	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(0 <= edge1 && edge1 < count1);
	  }

	  // Get the normal of the reference edge in poly2's frame.
	  var normal1 = box2d.b2MulT_R_V2(xf2.q, box2d.b2Mul_R_V2(xf1.q, normals1[edge1], box2d.b2Vec2.s_t0), box2d.b2FindIncidentEdge.s_normal1);

	  // Find the incident edge on poly2.
	  var index = 0;
	  var minDot = box2d.b2_maxFloat;
	  for (var i = 0; i < count2; ++i) {
	    var dot = box2d.b2Dot_V2_V2(normal1, normals2[i]);
	    if (dot < minDot) {
	      minDot = dot;
	      index = i;
	    }
	  }

	  // Build the clip vertices for the incident edge.
	  var i1 = index;
	  var i2 = (i1 + 1) % count2;

	  var c0 = c[0];
	  box2d.b2Mul_X_V2(xf2, vertices2[i1], c0.v);
	  var cf0 = c0.id.cf;
	  cf0.indexA = edge1;
	  cf0.indexB = i1;
	  cf0.typeA = box2d.b2ContactFeatureType.e_face;
	  cf0.typeB = box2d.b2ContactFeatureType.e_vertex;

	  var c1 = c[1];
	  box2d.b2Mul_X_V2(xf2, vertices2[i2], c1.v);
	  var cf1 = c1.id.cf;
	  cf1.indexA = edge1;
	  cf1.indexB = i2;
	  cf1.typeA = box2d.b2ContactFeatureType.e_face;
	  cf1.typeB = box2d.b2ContactFeatureType.e_vertex;
	};
	box2d.b2FindIncidentEdge.s_normal1 = new box2d.b2Vec2();

	/**
	 * Find edge normal of max separation on A - return if separating axis is found
	 * Find edge normal of max separation on B - return if separation axis is found
	 * Choose reference edge as min(minA, minB)
	 * Find incident edge
	 * Clip
	 * The normal points from 1 to 2
	 * @export
	 * @return {void}
	 * @param {box2d.b2Manifold} manifold
	 * @param {box2d.b2PolygonShape} polyA
	 * @param {box2d.b2Transform} xfA
	 * @param {box2d.b2PolygonShape} polyB
	 * @param {box2d.b2Transform} xfB
	 */
	box2d.b2CollidePolygons = function (manifold, polyA, xfA, polyB, xfB) {
	  manifold.pointCount = 0;
	  var totalRadius = polyA.m_radius + polyB.m_radius;

	  var edgeA = box2d.b2CollidePolygons.s_edgeA;
	  edgeA[0] = 0;
	  var separationA = box2d.b2FindMaxSeparation(edgeA, polyA, xfA, polyB, xfB);
	  if (separationA > totalRadius) return;

	  var edgeB = box2d.b2CollidePolygons.s_edgeB;
	  edgeB[0] = 0;
	  var separationB = box2d.b2FindMaxSeparation(edgeB, polyB, xfB, polyA, xfA);
	  if (separationB > totalRadius) return;

	  var poly1; // reference polygon
	  var poly2; // incident polygon
	  var xf1, xf2;
	  var edge1 = 0; // reference edge
	  var flip = 0;
	  var k_relativeTol = 0.98;
	  var k_absoluteTol = 0.001;

	  if (separationB > k_relativeTol * separationA + k_absoluteTol) {
	    poly1 = polyB;
	    poly2 = polyA;
	    xf1 = xfB;
	    xf2 = xfA;
	    edge1 = edgeB[0];
	    manifold.type = box2d.b2ManifoldType.e_faceB;
	    flip = 1;
	  } else {
	    poly1 = polyA;
	    poly2 = polyB;
	    xf1 = xfA;
	    xf2 = xfB;
	    edge1 = edgeA[0];
	    manifold.type = box2d.b2ManifoldType.e_faceA;
	    flip = 0;
	  }

	  var incidentEdge = box2d.b2CollidePolygons.s_incidentEdge;
	  box2d.b2FindIncidentEdge(incidentEdge, poly1, xf1, edge1, poly2, xf2);

	  var count1 = poly1.m_count;
	  var vertices1 = poly1.m_vertices;

	  var iv1 = edge1;
	  var iv2 = (edge1 + 1) % count1;

	  var local_v11 = vertices1[iv1];
	  var local_v12 = vertices1[iv2];

	  var localTangent = box2d.b2Sub_V2_V2(local_v12, local_v11, box2d.b2CollidePolygons.s_localTangent);
	  localTangent.Normalize();

	  var localNormal = box2d.b2Cross_V2_S(localTangent, 1.0, box2d.b2CollidePolygons.s_localNormal);
	  var planePoint = box2d.b2Mid_V2_V2(local_v11, local_v12, box2d.b2CollidePolygons.s_planePoint);

	  var tangent = box2d.b2Mul_R_V2(xf1.q, localTangent, box2d.b2CollidePolygons.s_tangent);
	  var normal = box2d.b2Cross_V2_S(tangent, 1.0, box2d.b2CollidePolygons.s_normal);

	  var v11 = box2d.b2Mul_X_V2(xf1, local_v11, box2d.b2CollidePolygons.s_v11);
	  var v12 = box2d.b2Mul_X_V2(xf1, local_v12, box2d.b2CollidePolygons.s_v12);

	  // Face offset.
	  var frontOffset = box2d.b2Dot_V2_V2(normal, v11);

	  // Side offsets, extended by polytope skin thickness.
	  var sideOffset1 = -box2d.b2Dot_V2_V2(tangent, v11) + totalRadius;
	  var sideOffset2 = box2d.b2Dot_V2_V2(tangent, v12) + totalRadius;

	  // Clip incident edge against extruded edge1 side edges.
	  var clipPoints1 = box2d.b2CollidePolygons.s_clipPoints1;
	  var clipPoints2 = box2d.b2CollidePolygons.s_clipPoints2;
	  var np;

	  // Clip to box side 1
	  var ntangent = box2d.b2CollidePolygons.s_ntangent.Copy(tangent).SelfNeg();
	  np = box2d.b2ClipSegmentToLine(clipPoints1, incidentEdge, ntangent, sideOffset1, iv1);

	  if (np < 2) return;

	  // Clip to negative box side 1
	  np = box2d.b2ClipSegmentToLine(clipPoints2, clipPoints1, tangent, sideOffset2, iv2);

	  if (np < 2) {
	    return;
	  }

	  // Now clipPoints2 contains the clipped points.
	  manifold.localNormal.Copy(localNormal);
	  manifold.localPoint.Copy(planePoint);

	  var pointCount = 0;
	  for (var i = 0; i < box2d.b2_maxManifoldPoints; ++i) {
	    var cv = clipPoints2[i];
	    var separation = box2d.b2Dot_V2_V2(normal, cv.v) - frontOffset;

	    if (separation <= totalRadius) {
	      var cp = manifold.points[pointCount];
	      box2d.b2MulT_X_V2(xf2, cv.v, cp.localPoint);
	      cp.id.Copy(cv.id);
	      if (flip) {
	        // Swap features
	        /** @type {box2d.b2ContactFeature} */
	        var cf = cp.id.cf;
	        cp.id.cf.indexA = cf.indexB;
	        cp.id.cf.indexB = cf.indexA;
	        cp.id.cf.typeA = cf.typeB;
	        cp.id.cf.typeB = cf.typeA;
	      }
	      ++pointCount;
	    }
	  }

	  manifold.pointCount = pointCount;
	};
	box2d.b2CollidePolygons.s_incidentEdge = box2d.b2ClipVertex.MakeArray(2);
	box2d.b2CollidePolygons.s_clipPoints1 = box2d.b2ClipVertex.MakeArray(2);
	box2d.b2CollidePolygons.s_clipPoints2 = box2d.b2ClipVertex.MakeArray(2);
	box2d.b2CollidePolygons.s_edgeA = box2d.b2MakeNumberArray(1);
	box2d.b2CollidePolygons.s_edgeB = box2d.b2MakeNumberArray(1);
	box2d.b2CollidePolygons.s_localTangent = new box2d.b2Vec2();
	box2d.b2CollidePolygons.s_localNormal = new box2d.b2Vec2();
	box2d.b2CollidePolygons.s_planePoint = new box2d.b2Vec2();
	box2d.b2CollidePolygons.s_normal = new box2d.b2Vec2();
	box2d.b2CollidePolygons.s_tangent = new box2d.b2Vec2();
	box2d.b2CollidePolygons.s_ntangent = new box2d.b2Vec2();
	box2d.b2CollidePolygons.s_v11 = new box2d.b2Vec2();
	box2d.b2CollidePolygons.s_v12 = new box2d.b2Vec2();

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(23);

	__webpack_require__(31);

	/**
	 * @export
	 * @constructor
	 * @extends {box2d.b2Contact}
	 */
	box2d.b2EdgeAndCircleContact = function () {
	  box2d.b2Contact.call(this); // base class constructor
	}; /*
	    * Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
	    *
	    * This software is provided 'as-is', without any express or implied
	    * warranty.  In no event will the authors be held liable for any damages
	    * arising from the use of this software.
	    * Permission is granted to anyone to use this software for any purpose,
	    * including commercial applications, and to alter it and redistribute it
	    * freely, subject to the following restrictions:
	    * 1. The origin of this software must not be misrepresented; you must not
	    * claim that you wrote the original software. If you use this software
	    * in a product, an acknowledgment in the product documentation would be
	    * appreciated but is not required.
	    * 2. Altered source versions must be plainly marked as such, and must not be
	    * misrepresented as being the original software.
	    * 3. This notice may not be removed or altered from any source distribution.
	    */

	goog.inherits(box2d.b2EdgeAndCircleContact, box2d.b2Contact);

	/**
	 * @export
	 * @return {box2d.b2Contact}
	 * @param allocator
	 */
	box2d.b2EdgeAndCircleContact.Create = function (allocator) {
	  return new box2d.b2EdgeAndCircleContact();
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2Contact} contact
	 * @param allocator
	 */
	box2d.b2EdgeAndCircleContact.Destroy = function (contact, allocator) {};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2Manifold} manifold
	 * @param {box2d.b2Transform} xfA
	 * @param {box2d.b2Transform} xfB
	 */
	box2d.b2EdgeAndCircleContact.prototype.Evaluate = function (manifold, xfA, xfB) {
	  var shapeA = this.m_fixtureA.GetShape();
	  var shapeB = this.m_fixtureB.GetShape();
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(shapeA instanceof box2d.b2EdgeShape);
	  }
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(shapeB instanceof box2d.b2CircleShape);
	  }
	  box2d.b2CollideEdgeAndCircle(manifold, shapeA instanceof box2d.b2EdgeShape ? shapeA : null, xfA, shapeB instanceof box2d.b2CircleShape ? shapeB : null, xfB);
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(13);

	/**
	 * Compute the collision manifold between an edge and a circle.
	 * Compute contact points for edge versus circle.
	 * This accounts for edge connectivity.
	 * @export
	 * @return {void}
	 * @param {box2d.b2Manifold} manifold
	 * @param {box2d.b2EdgeShape} edgeA
	 * @param {box2d.b2Transform} xfA
	 * @param {box2d.b2CircleShape} circleB
	 * @param {box2d.b2Transform} xfB
	 */
	box2d.b2CollideEdgeAndCircle = function (manifold, edgeA, xfA, circleB, xfB) {
	  manifold.pointCount = 0;

	  // Compute circle in frame of edge
	  /** @type {box2d.b2Vec2} */
	  var Q = box2d.b2MulT_X_V2(xfA, box2d.b2Mul_X_V2(xfB, circleB.m_p, box2d.b2Vec2.s_t0), box2d.b2CollideEdgeAndCircle.s_Q);

	  /** @type {box2d.b2Vec2} */
	  var A = edgeA.m_vertex1;
	  /** @type {box2d.b2Vec2} */
	  var B = edgeA.m_vertex2;
	  /** @type {box2d.b2Vec2} */
	  var e = box2d.b2Sub_V2_V2(B, A, box2d.b2CollideEdgeAndCircle.s_e);

	  // Barycentric coordinates
	  /** @type {number} */
	  var u = box2d.b2Dot_V2_V2(e, box2d.b2Sub_V2_V2(B, Q, box2d.b2Vec2.s_t0));
	  /** @type {number} */
	  var v = box2d.b2Dot_V2_V2(e, box2d.b2Sub_V2_V2(Q, A, box2d.b2Vec2.s_t0));

	  /** @type {number} */
	  var radius = edgeA.m_radius + circleB.m_radius;

	  //  /** @type {box2d.b2ContactFeature} */ var cf = new box2d.b2ContactFeature();
	  /** @type {box2d.b2ContactID} */
	  var id = box2d.b2CollideEdgeAndCircle.s_id;
	  id.cf.indexB = 0;
	  id.cf.typeB = box2d.b2ContactFeatureType.e_vertex;

	  // Region A
	  if (v <= 0) {
	    /** @type {box2d.b2Vec2} */
	    var P = A;
	    /** @type {box2d.b2Vec2} */
	    var d = box2d.b2Sub_V2_V2(Q, P, box2d.b2CollideEdgeAndCircle.s_d);
	    /** @type {number} */
	    var dd = box2d.b2Dot_V2_V2(d, d);
	    if (dd > radius * radius) {
	      return;
	    }

	    // Is there an edge connected to A?
	    if (edgeA.m_hasVertex0) {
	      /** @type {box2d.b2Vec2} */
	      var A1 = edgeA.m_vertex0;
	      /** @type {box2d.b2Vec2} */
	      var B1 = A;
	      /** @type {box2d.b2Vec2} */
	      var e1 = box2d.b2Sub_V2_V2(B1, A1, box2d.b2CollideEdgeAndCircle.s_e1);
	      /** @type {number} */
	      var u1 = box2d.b2Dot_V2_V2(e1, box2d.b2Sub_V2_V2(B1, Q, box2d.b2Vec2.s_t0));

	      // Is the circle in Region AB of the previous edge?
	      if (u1 > 0) {
	        return;
	      }
	    }

	    id.cf.indexA = 0;
	    id.cf.typeA = box2d.b2ContactFeatureType.e_vertex;
	    manifold.pointCount = 1;
	    manifold.type = box2d.b2ManifoldType.e_circles;
	    manifold.localNormal.SetZero();
	    manifold.localPoint.Copy(P);
	    manifold.points[0].id.Copy(id);
	    //    manifold.points[0].id.key = 0;
	    //    manifold.points[0].id.cf = cf;
	    manifold.points[0].localPoint.Copy(circleB.m_p);
	    return;
	  }

	  // Region B
	  if (u <= 0) {
	    /** type {box2d.b2Vec2} */
	    var P = B;
	    /** type {box2d.b2Vec2} */
	    var d = box2d.b2Sub_V2_V2(Q, P, box2d.b2CollideEdgeAndCircle.s_d);
	    /** type {number} */
	    var dd = box2d.b2Dot_V2_V2(d, d);
	    if (dd > radius * radius) {
	      return;
	    }

	    // Is there an edge connected to B?
	    if (edgeA.m_hasVertex3) {
	      /** @type {box2d.b2Vec2} */
	      var B2 = edgeA.m_vertex3;
	      /** @type {box2d.b2Vec2} */
	      var A2 = B;
	      /** @type {box2d.b2Vec2} */
	      var e2 = box2d.b2Sub_V2_V2(B2, A2, box2d.b2CollideEdgeAndCircle.s_e2);
	      /** @type {number} */
	      var v2 = box2d.b2Dot_V2_V2(e2, box2d.b2Sub_V2_V2(Q, A2, box2d.b2Vec2.s_t0));

	      // Is the circle in Region AB of the next edge?
	      if (v2 > 0) {
	        return;
	      }
	    }

	    id.cf.indexA = 1;
	    id.cf.typeA = box2d.b2ContactFeatureType.e_vertex;
	    manifold.pointCount = 1;
	    manifold.type = box2d.b2ManifoldType.e_circles;
	    manifold.localNormal.SetZero();
	    manifold.localPoint.Copy(P);
	    manifold.points[0].id.Copy(id);
	    //    manifold.points[0].id.key = 0;
	    //    manifold.points[0].id.cf = cf;
	    manifold.points[0].localPoint.Copy(circleB.m_p);
	    return;
	  }

	  // Region AB
	  /** @type {number} */
	  var den = box2d.b2Dot_V2_V2(e, e);
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(den > 0);
	  }
	  /** type {box2d.b2Vec2} */
	  var P = box2d.b2CollideEdgeAndCircle.s_P;
	  P.x = 1 / den * (u * A.x + v * B.x);
	  P.y = 1 / den * (u * A.y + v * B.y);
	  /** type {box2d.b2Vec2} */
	  var d = box2d.b2Sub_V2_V2(Q, P, box2d.b2CollideEdgeAndCircle.s_d);
	  /** type {number} */
	  var dd = box2d.b2Dot_V2_V2(d, d);
	  if (dd > radius * radius) {
	    return;
	  }

	  /** @type {box2d.b2Vec2} */
	  var n = box2d.b2CollideEdgeAndCircle.s_n.Set(-e.y, e.x);
	  if (box2d.b2Dot_V2_V2(n, box2d.b2Sub_V2_V2(Q, A, box2d.b2Vec2.s_t0)) < 0) {
	    n.Set(-n.x, -n.y);
	  }
	  n.Normalize();

	  id.cf.indexA = 0;
	  id.cf.typeA = box2d.b2ContactFeatureType.e_face;
	  manifold.pointCount = 1;
	  manifold.type = box2d.b2ManifoldType.e_faceA;
	  manifold.localNormal.Copy(n);
	  manifold.localPoint.Copy(A);
	  manifold.points[0].id.Copy(id);
	  //  manifold.points[0].id.key = 0;
	  //  manifold.points[0].id.cf = cf;
	  manifold.points[0].localPoint.Copy(circleB.m_p);
	}; /*
	    * Copyright (c) 2007-2009 Erin Catto http://www.box2d.org
	    *
	    * This software is provided 'as-is', without any express or implied
	    * warranty.  In no event will the authors be held liable for any damages
	    * arising from the use of this software.
	    * Permission is granted to anyone to use this software for any purpose,
	    * including commercial applications, and to alter it and redistribute it
	    * freely, subject to the following restrictions:
	    * 1. The origin of this software must not be misrepresented; you must not
	    * claim that you wrote the original software. If you use this software
	    * in a product, an acknowledgment in the product documentation would be
	    * appreciated but is not required.
	    * 2. Altered source versions must be plainly marked as such, and must not be
	    * misrepresented as being the original software.
	    * 3. This notice may not be removed or altered from any source distribution.
	    */

	box2d.b2CollideEdgeAndCircle.s_Q = new box2d.b2Vec2();
	box2d.b2CollideEdgeAndCircle.s_e = new box2d.b2Vec2();
	box2d.b2CollideEdgeAndCircle.s_d = new box2d.b2Vec2();
	box2d.b2CollideEdgeAndCircle.s_e1 = new box2d.b2Vec2();
	box2d.b2CollideEdgeAndCircle.s_e2 = new box2d.b2Vec2();
	box2d.b2CollideEdgeAndCircle.s_P = new box2d.b2Vec2();
	box2d.b2CollideEdgeAndCircle.s_n = new box2d.b2Vec2();
	box2d.b2CollideEdgeAndCircle.s_id = new box2d.b2ContactID();

	/**
	 * @export
	 * @enum
	 */
	box2d.b2EPAxisType = {
	  e_unknown: 0,
	  e_edgeA: 1,
	  e_edgeB: 2
	};

	/**
	 * This structure is used to keep track of the best separating
	 * axis.
	 * @export
	 * @constructor
	 */
	box2d.b2EPAxis = function () {};

	/**
	 * @export
	 * @type {box2d.b2EPAxisType}
	 */
	box2d.b2EPAxis.prototype.type = box2d.b2EPAxisType.e_unknown;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2EPAxis.prototype.index = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2EPAxis.prototype.separation = 0;

	/**
	 * This holds polygon B expressed in frame A.
	 * @export
	 * @constructor
	 */
	box2d.b2TempPolygon = function () {
	  this.vertices = box2d.b2Vec2.MakeArray(box2d.b2_maxPolygonVertices);
	  this.normals = box2d.b2Vec2.MakeArray(box2d.b2_maxPolygonVertices);
	  this.count = 0;
	};

	/**
	 * @export
	 * @type {Array.<box2d.b2Vec2>}
	 */
	box2d.b2TempPolygon.prototype.vertices = null;
	/**
	 * @export
	 * @type {Array.<box2d.b2Vec2>}
	 */
	box2d.b2TempPolygon.prototype.normals = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2TempPolygon.prototype.count = 0;

	/**
	 * Reference face used for clipping
	 * @export
	 * @constructor
	 */
	box2d.b2ReferenceFace = function () {
	  this.i1 = 0;
	  this.i2 = 0;

	  this.v1 = new box2d.b2Vec2();
	  this.v2 = new box2d.b2Vec2();

	  this.normal = new box2d.b2Vec2();

	  this.sideNormal1 = new box2d.b2Vec2();
	  this.sideOffset1 = 0;

	  this.sideNormal2 = new box2d.b2Vec2();
	  this.sideOffset2 = 0;
	};

	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2ReferenceFace.prototype.i1 = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2ReferenceFace.prototype.i2 = 0;

	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2ReferenceFace.prototype.v1 = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2ReferenceFace.prototype.v2 = null;

	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2ReferenceFace.prototype.normal = null;

	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2ReferenceFace.prototype.sideNormal1 = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2ReferenceFace.prototype.sideOffset1 = 0;

	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2ReferenceFace.prototype.sideNormal2 = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2ReferenceFace.prototype.sideOffset2 = 0;

	/**
	 * @export
	 * @enum
	 */
	box2d.b2EPColliderVertexType = {
	  e_isolated: 0,
	  e_concave: 1,
	  e_convex: 2
	};

	/**
	 * This class collides and edge and a polygon, taking into
	 * account edge adjacency.
	 * @export
	 * @constructor
	 */
	box2d.b2EPCollider = function () {
	  this.m_polygonB = new box2d.b2TempPolygon();

	  this.m_xf = new box2d.b2Transform();
	  this.m_centroidB = new box2d.b2Vec2();
	  this.m_v0 = new box2d.b2Vec2(), this.m_v1 = new box2d.b2Vec2(), this.m_v2 = new box2d.b2Vec2(), this.m_v3 = new box2d.b2Vec2();
	  this.m_normal0 = new box2d.b2Vec2(), this.m_normal1 = new box2d.b2Vec2(), this.m_normal2 = new box2d.b2Vec2();
	  this.m_normal = new box2d.b2Vec2();
	  this.m_type1 = box2d.b2EPColliderVertexType.e_isolated, this.m_type2 = box2d.b2EPColliderVertexType.e_isolated;
	  this.m_lowerLimit = new box2d.b2Vec2(), this.m_upperLimit = new box2d.b2Vec2();
	  this.m_radius = 0;
	  this.m_front = false;
	};

	/**
	 * @export
	 * @type {box2d.b2TempPolygon}
	 */
	box2d.b2EPCollider.prototype.m_polygonB = null;

	/**
	 * @export
	 * @type {box2d.b2Transform}
	 */
	box2d.b2EPCollider.prototype.m_xf = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2EPCollider.prototype.m_centroidB = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2EPCollider.prototype.m_v0 = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2EPCollider.prototype.m_v1 = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2EPCollider.prototype.m_v2 = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2EPCollider.prototype.m_v3 = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2EPCollider.prototype.m_normal0 = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2EPCollider.prototype.m_normal1 = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2EPCollider.prototype.m_normal2 = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2EPCollider.prototype.m_normal = null;
	/**
	 * @export
	 * @type {box2d.b2EPColliderVertexType}
	 */
	box2d.b2EPCollider.prototype.m_type1 = box2d.b2EPColliderVertexType.e_isolated;
	/**
	 * @export
	 * @type {box2d.b2EPColliderVertexType}
	 */
	box2d.b2EPCollider.prototype.m_type2 = box2d.b2EPColliderVertexType.e_isolated;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2EPCollider.prototype.m_lowerLimit = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2EPCollider.prototype.m_upperLimit = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2EPCollider.prototype.m_radius = 0;
	/**
	 * @export
	 * @type {boolean}
	 */
	box2d.b2EPCollider.prototype.m_front = false;

	/**
	 * Algorithm:
	 * 1. Classify v1 and v2
	 * 2. Classify polygon centroid as front or back
	 * 3. Flip normal if necessary
	 * 4. Initialize normal range to [-pi, pi] about face normal
	 * 5. Adjust normal range according to adjacent edges
	 * 6. Visit each separating axes, only accept axes within the range
	 * 7. Return if _any_ axis indicates separation
	 * 8. Clip
	 * @export
	 * @return {void}
	 * @param {box2d.b2Manifold} manifold
	 * @param {box2d.b2EdgeShape} edgeA
	 * @param {box2d.b2Transform} xfA
	 * @param {box2d.b2PolygonShape} polygonB
	 * @param {box2d.b2Transform} xfB
	 */
	box2d.b2EPCollider.prototype.Collide = function (manifold, edgeA, xfA, polygonB, xfB) {
	  box2d.b2MulT_X_X(xfA, xfB, this.m_xf);

	  box2d.b2Mul_X_V2(this.m_xf, polygonB.m_centroid, this.m_centroidB);

	  this.m_v0.Copy(edgeA.m_vertex0);
	  this.m_v1.Copy(edgeA.m_vertex1);
	  this.m_v2.Copy(edgeA.m_vertex2);
	  this.m_v3.Copy(edgeA.m_vertex3);

	  /** @type {boolean} */
	  var hasVertex0 = edgeA.m_hasVertex0;
	  /** @type {boolean} */
	  var hasVertex3 = edgeA.m_hasVertex3;

	  /** @type {box2d.b2Vec2} */
	  var edge1 = box2d.b2Sub_V2_V2(this.m_v2, this.m_v1, box2d.b2EPCollider.s_edge1);
	  edge1.Normalize();
	  this.m_normal1.Set(edge1.y, -edge1.x);
	  /** @type {number} */
	  var offset1 = box2d.b2Dot_V2_V2(this.m_normal1, box2d.b2Sub_V2_V2(this.m_centroidB, this.m_v1, box2d.b2Vec2.s_t0));
	  /** @type {number} */
	  var offset0 = 0;
	  /** @type {number} */
	  var offset2 = 0;
	  /** @type {boolean} */
	  var convex1 = false;
	  /** @type {boolean} */
	  var convex2 = false;

	  // Is there a preceding edge?
	  if (hasVertex0) {
	    /** @type {box2d.b2Vec2} */
	    var edge0 = box2d.b2Sub_V2_V2(this.m_v1, this.m_v0, box2d.b2EPCollider.s_edge0);
	    edge0.Normalize();
	    this.m_normal0.Set(edge0.y, -edge0.x);
	    convex1 = box2d.b2Cross_V2_V2(edge0, edge1) >= 0;
	    offset0 = box2d.b2Dot_V2_V2(this.m_normal0, box2d.b2Sub_V2_V2(this.m_centroidB, this.m_v0, box2d.b2Vec2.s_t0));
	  }

	  // Is there a following edge?
	  if (hasVertex3) {
	    /** @type {box2d.b2Vec2} */
	    var edge2 = box2d.b2Sub_V2_V2(this.m_v3, this.m_v2, box2d.b2EPCollider.s_edge2);
	    edge2.Normalize();
	    this.m_normal2.Set(edge2.y, -edge2.x);
	    convex2 = box2d.b2Cross_V2_V2(edge1, edge2) > 0;
	    offset2 = box2d.b2Dot_V2_V2(this.m_normal2, box2d.b2Sub_V2_V2(this.m_centroidB, this.m_v2, box2d.b2Vec2.s_t0));
	  }

	  // Determine front or back collision. Determine collision normal limits.
	  if (hasVertex0 && hasVertex3) {
	    if (convex1 && convex2) {
	      this.m_front = offset0 >= 0 || offset1 >= 0 || offset2 >= 0;
	      if (this.m_front) {
	        this.m_normal.Copy(this.m_normal1);
	        this.m_lowerLimit.Copy(this.m_normal0);
	        this.m_upperLimit.Copy(this.m_normal2);
	      } else {
	        this.m_normal.Copy(this.m_normal1).SelfNeg();
	        this.m_lowerLimit.Copy(this.m_normal1).SelfNeg();
	        this.m_upperLimit.Copy(this.m_normal1).SelfNeg();
	      }
	    } else if (convex1) {
	      this.m_front = offset0 >= 0 || offset1 >= 0 && offset2 >= 0;
	      if (this.m_front) {
	        this.m_normal.Copy(this.m_normal1);
	        this.m_lowerLimit.Copy(this.m_normal0);
	        this.m_upperLimit.Copy(this.m_normal1);
	      } else {
	        this.m_normal.Copy(this.m_normal1).SelfNeg();
	        this.m_lowerLimit.Copy(this.m_normal2).SelfNeg();
	        this.m_upperLimit.Copy(this.m_normal1).SelfNeg();
	      }
	    } else if (convex2) {
	      this.m_front = offset2 >= 0 || offset0 >= 0 && offset1 >= 0;
	      if (this.m_front) {
	        this.m_normal.Copy(this.m_normal1);
	        this.m_lowerLimit.Copy(this.m_normal1);
	        this.m_upperLimit.Copy(this.m_normal2);
	      } else {
	        this.m_normal.Copy(this.m_normal1).SelfNeg();
	        this.m_lowerLimit.Copy(this.m_normal1).SelfNeg();
	        this.m_upperLimit.Copy(this.m_normal0).SelfNeg();
	      }
	    } else {
	      this.m_front = offset0 >= 0 && offset1 >= 0 && offset2 >= 0;
	      if (this.m_front) {
	        this.m_normal.Copy(this.m_normal1);
	        this.m_lowerLimit.Copy(this.m_normal1);
	        this.m_upperLimit.Copy(this.m_normal1);
	      } else {
	        this.m_normal.Copy(this.m_normal1).SelfNeg();
	        this.m_lowerLimit.Copy(this.m_normal2).SelfNeg();
	        this.m_upperLimit.Copy(this.m_normal0).SelfNeg();
	      }
	    }
	  } else if (hasVertex0) {
	    if (convex1) {
	      this.m_front = offset0 >= 0 || offset1 >= 0;
	      if (this.m_front) {
	        this.m_normal.Copy(this.m_normal1);
	        this.m_lowerLimit.Copy(this.m_normal0);
	        this.m_upperLimit.Copy(this.m_normal1).SelfNeg();
	      } else {
	        this.m_normal.Copy(this.m_normal1).SelfNeg();
	        this.m_lowerLimit.Copy(this.m_normal1);
	        this.m_upperLimit.Copy(this.m_normal1).SelfNeg();
	      }
	    } else {
	      this.m_front = offset0 >= 0 && offset1 >= 0;
	      if (this.m_front) {
	        this.m_normal.Copy(this.m_normal1);
	        this.m_lowerLimit.Copy(this.m_normal1);
	        this.m_upperLimit.Copy(this.m_normal1).SelfNeg();
	      } else {
	        this.m_normal.Copy(this.m_normal1).SelfNeg();
	        this.m_lowerLimit.Copy(this.m_normal1);
	        this.m_upperLimit.Copy(this.m_normal0).SelfNeg();
	      }
	    }
	  } else if (hasVertex3) {
	    if (convex2) {
	      this.m_front = offset1 >= 0 || offset2 >= 0;
	      if (this.m_front) {
	        this.m_normal.Copy(this.m_normal1);
	        this.m_lowerLimit.Copy(this.m_normal1).SelfNeg();
	        this.m_upperLimit.Copy(this.m_normal2);
	      } else {
	        this.m_normal.Copy(this.m_normal1).SelfNeg();
	        this.m_lowerLimit.Copy(this.m_normal1).SelfNeg();
	        this.m_upperLimit.Copy(this.m_normal1);
	      }
	    } else {
	      this.m_front = offset1 >= 0 && offset2 >= 0;
	      if (this.m_front) {
	        this.m_normal.Copy(this.m_normal1);
	        this.m_lowerLimit.Copy(this.m_normal1).SelfNeg();
	        this.m_upperLimit.Copy(this.m_normal1);
	      } else {
	        this.m_normal.Copy(this.m_normal1).SelfNeg();
	        this.m_lowerLimit.Copy(this.m_normal2).SelfNeg();
	        this.m_upperLimit.Copy(this.m_normal1);
	      }
	    }
	  } else {
	    this.m_front = offset1 >= 0;
	    if (this.m_front) {
	      this.m_normal.Copy(this.m_normal1);
	      this.m_lowerLimit.Copy(this.m_normal1).SelfNeg();
	      this.m_upperLimit.Copy(this.m_normal1).SelfNeg();
	    } else {
	      this.m_normal.Copy(this.m_normal1).SelfNeg();
	      this.m_lowerLimit.Copy(this.m_normal1);
	      this.m_upperLimit.Copy(this.m_normal1);
	    }
	  }

	  // Get polygonB in frameA
	  this.m_polygonB.count = polygonB.m_count;
	  for (var i = 0, ict = polygonB.m_count; i < ict; ++i) {
	    box2d.b2Mul_X_V2(this.m_xf, polygonB.m_vertices[i], this.m_polygonB.vertices[i]);
	    box2d.b2Mul_R_V2(this.m_xf.q, polygonB.m_normals[i], this.m_polygonB.normals[i]);
	  }

	  this.m_radius = 2 * box2d.b2_polygonRadius;

	  manifold.pointCount = 0;

	  /** @type {box2d.b2EPAxis} */
	  var edgeAxis = this.ComputeEdgeSeparation(box2d.b2EPCollider.s_edgeAxis);

	  // If no valid normal can be found than this edge should not collide.
	  if (edgeAxis.type === box2d.b2EPAxisType.e_unknown) {
	    return;
	  }

	  if (edgeAxis.separation > this.m_radius) {
	    return;
	  }

	  /** @type {box2d.b2EPAxis} */
	  var polygonAxis = this.ComputePolygonSeparation(box2d.b2EPCollider.s_polygonAxis);
	  if (polygonAxis.type !== box2d.b2EPAxisType.e_unknown && polygonAxis.separation > this.m_radius) {
	    return;
	  }

	  // Use hysteresis for jitter reduction.
	  /** @type {number} */
	  var k_relativeTol = 0.98;
	  /** @type {number} */
	  var k_absoluteTol = 0.001;

	  /** @type {box2d.b2EPAxis} */
	  var primaryAxis;
	  if (polygonAxis.type === box2d.b2EPAxisType.e_unknown) {
	    primaryAxis = edgeAxis;
	  } else if (polygonAxis.separation > k_relativeTol * edgeAxis.separation + k_absoluteTol) {
	    primaryAxis = polygonAxis;
	  } else {
	    primaryAxis = edgeAxis;
	  }

	  /** @type {Array.<box2d.b2ClipVertex>} */
	  var ie = box2d.b2EPCollider.s_ie;
	  /** @type {box2d.b2ReferenceFace} */
	  var rf = box2d.b2EPCollider.s_rf;
	  if (primaryAxis.type === box2d.b2EPAxisType.e_edgeA) {
	    manifold.type = box2d.b2ManifoldType.e_faceA;

	    // Search for the polygon normal that is most anti-parallel to the edge normal.
	    /** @type {number} */
	    var bestIndex = 0;
	    /** @type {number} */
	    var bestValue = box2d.b2Dot_V2_V2(this.m_normal, this.m_polygonB.normals[0]);
	    for (var i = 1, ict = this.m_polygonB.count; i < ict; ++i) {
	      /** @type {number} */
	      var value = box2d.b2Dot_V2_V2(this.m_normal, this.m_polygonB.normals[i]);
	      if (value < bestValue) {
	        bestValue = value;
	        bestIndex = i;
	      }
	    }

	    /** @type {number} */
	    var i1 = bestIndex;
	    /** @type {number} */
	    var i2 = (i1 + 1) % this.m_polygonB.count;

	    var ie0 = ie[0];
	    ie0.v.Copy(this.m_polygonB.vertices[i1]);
	    ie0.id.cf.indexA = 0;
	    ie0.id.cf.indexB = i1;
	    ie0.id.cf.typeA = box2d.b2ContactFeatureType.e_face;
	    ie0.id.cf.typeB = box2d.b2ContactFeatureType.e_vertex;

	    var ie1 = ie[1];
	    ie1.v.Copy(this.m_polygonB.vertices[i2]);
	    ie1.id.cf.indexA = 0;
	    ie1.id.cf.indexB = i2;
	    ie1.id.cf.typeA = box2d.b2ContactFeatureType.e_face;
	    ie1.id.cf.typeB = box2d.b2ContactFeatureType.e_vertex;

	    if (this.m_front) {
	      rf.i1 = 0;
	      rf.i2 = 1;
	      rf.v1.Copy(this.m_v1);
	      rf.v2.Copy(this.m_v2);
	      rf.normal.Copy(this.m_normal1);
	    } else {
	      rf.i1 = 1;
	      rf.i2 = 0;
	      rf.v1.Copy(this.m_v2);
	      rf.v2.Copy(this.m_v1);
	      rf.normal.Copy(this.m_normal1).SelfNeg();
	    }
	  } else {
	    manifold.type = box2d.b2ManifoldType.e_faceB;

	    var ie0 = ie[0];
	    ie0.v.Copy(this.m_v1);
	    ie0.id.cf.indexA = 0;
	    ie0.id.cf.indexB = primaryAxis.index;
	    ie0.id.cf.typeA = box2d.b2ContactFeatureType.e_vertex;
	    ie0.id.cf.typeB = box2d.b2ContactFeatureType.e_face;

	    var ie1 = ie[1];
	    ie1.v.Copy(this.m_v2);
	    ie1.id.cf.indexA = 0;
	    ie1.id.cf.indexB = primaryAxis.index;
	    ie1.id.cf.typeA = box2d.b2ContactFeatureType.e_vertex;
	    ie1.id.cf.typeB = box2d.b2ContactFeatureType.e_face;

	    rf.i1 = primaryAxis.index;
	    rf.i2 = (rf.i1 + 1) % this.m_polygonB.count;
	    rf.v1.Copy(this.m_polygonB.vertices[rf.i1]);
	    rf.v2.Copy(this.m_polygonB.vertices[rf.i2]);
	    rf.normal.Copy(this.m_polygonB.normals[rf.i1]);
	  }

	  rf.sideNormal1.Set(rf.normal.y, -rf.normal.x);
	  rf.sideNormal2.Copy(rf.sideNormal1).SelfNeg();
	  rf.sideOffset1 = box2d.b2Dot_V2_V2(rf.sideNormal1, rf.v1);
	  rf.sideOffset2 = box2d.b2Dot_V2_V2(rf.sideNormal2, rf.v2);

	  // Clip incident edge against extruded edge1 side edges.
	  /** @type {Array.<box2d.b2ClipVertex>} */
	  var clipPoints1 = box2d.b2EPCollider.s_clipPoints1;
	  /** @type {Array.<box2d.b2ClipVertex>} */
	  var clipPoints2 = box2d.b2EPCollider.s_clipPoints2;
	  /** @type {number} */
	  var np = 0;

	  // Clip to box side 1
	  np = box2d.b2ClipSegmentToLine(clipPoints1, ie, rf.sideNormal1, rf.sideOffset1, rf.i1);

	  if (np < box2d.b2_maxManifoldPoints) {
	    return;
	  }

	  // Clip to negative box side 1
	  np = box2d.b2ClipSegmentToLine(clipPoints2, clipPoints1, rf.sideNormal2, rf.sideOffset2, rf.i2);

	  if (np < box2d.b2_maxManifoldPoints) {
	    return;
	  }

	  // Now clipPoints2 contains the clipped points.
	  if (primaryAxis.type === box2d.b2EPAxisType.e_edgeA) {
	    manifold.localNormal.Copy(rf.normal);
	    manifold.localPoint.Copy(rf.v1);
	  } else {
	    manifold.localNormal.Copy(polygonB.m_normals[rf.i1]);
	    manifold.localPoint.Copy(polygonB.m_vertices[rf.i1]);
	  }

	  /** @type {number} */
	  var pointCount = 0;
	  for (var i = 0, ict = box2d.b2_maxManifoldPoints; i < ict; ++i) {
	    /** @type {number} */
	    var separation;

	    separation = box2d.b2Dot_V2_V2(rf.normal, box2d.b2Sub_V2_V2(clipPoints2[i].v, rf.v1, box2d.b2Vec2.s_t0));

	    if (separation <= this.m_radius) {
	      /** @type {box2d.b2ManifoldPoint} */
	      var cp = manifold.points[pointCount];

	      if (primaryAxis.type === box2d.b2EPAxisType.e_edgeA) {
	        box2d.b2MulT_X_V2(this.m_xf, clipPoints2[i].v, cp.localPoint);
	        cp.id = clipPoints2[i].id;
	      } else {
	        cp.localPoint.Copy(clipPoints2[i].v);
	        cp.id.cf.typeA = clipPoints2[i].id.cf.typeB;
	        cp.id.cf.typeB = clipPoints2[i].id.cf.typeA;
	        cp.id.cf.indexA = clipPoints2[i].id.cf.indexB;
	        cp.id.cf.indexB = clipPoints2[i].id.cf.indexA;
	      }

	      ++pointCount;
	    }
	  }

	  manifold.pointCount = pointCount;
	};

	box2d.b2EPCollider.s_edge1 = new box2d.b2Vec2();
	box2d.b2EPCollider.s_edge0 = new box2d.b2Vec2();
	box2d.b2EPCollider.s_edge2 = new box2d.b2Vec2();
	box2d.b2EPCollider.s_ie = box2d.b2ClipVertex.MakeArray(2);
	box2d.b2EPCollider.s_rf = new box2d.b2ReferenceFace();
	box2d.b2EPCollider.s_clipPoints1 = box2d.b2ClipVertex.MakeArray(2);
	box2d.b2EPCollider.s_clipPoints2 = box2d.b2ClipVertex.MakeArray(2);
	box2d.b2EPCollider.s_edgeAxis = new box2d.b2EPAxis();
	box2d.b2EPCollider.s_polygonAxis = new box2d.b2EPAxis();

	/**
	 * @export
	 * @return {box2d.b2EPAxis}
	 * @param {box2d.b2EPAxis} out
	 */
	box2d.b2EPCollider.prototype.ComputeEdgeSeparation = function (out) {
	  /** @type {box2d.b2EPAxis} */
	  var axis = out;
	  axis.type = box2d.b2EPAxisType.e_edgeA;
	  axis.index = this.m_front ? 0 : 1;
	  axis.separation = box2d.b2_maxFloat;

	  for (var i = 0, ict = this.m_polygonB.count; i < ict; ++i) {
	    /** @type {number} */
	    var s = box2d.b2Dot_V2_V2(this.m_normal, box2d.b2Sub_V2_V2(this.m_polygonB.vertices[i], this.m_v1, box2d.b2Vec2.s_t0));
	    if (s < axis.separation) {
	      axis.separation = s;
	    }
	  }

	  return axis;
	};

	/**
	 * @export
	 * @return {box2d.b2EPAxis}
	 * @param {box2d.b2EPAxis} out
	 */
	box2d.b2EPCollider.prototype.ComputePolygonSeparation = function (out) {
	  /** @type {box2d.b2EPAxis} */
	  var axis = out;
	  axis.type = box2d.b2EPAxisType.e_unknown;
	  axis.index = -1;
	  axis.separation = -box2d.b2_maxFloat;

	  /** @type {box2d.b2Vec2} */
	  var perp = box2d.b2EPCollider.s_perp.Set(-this.m_normal.y, this.m_normal.x);

	  for (var i = 0, ict = this.m_polygonB.count; i < ict; ++i) {
	    /** @type {box2d.b2Vec2} */
	    var n = box2d.b2EPCollider.s_n.Copy(this.m_polygonB.normals[i]).SelfNeg();

	    /** @type {number} */
	    var s1 = box2d.b2Dot_V2_V2(n, box2d.b2Sub_V2_V2(this.m_polygonB.vertices[i], this.m_v1, box2d.b2Vec2.s_t0));
	    /** @type {number} */
	    var s2 = box2d.b2Dot_V2_V2(n, box2d.b2Sub_V2_V2(this.m_polygonB.vertices[i], this.m_v2, box2d.b2Vec2.s_t0));
	    /** @type {number} */
	    var s = box2d.b2Min(s1, s2);

	    if (s > this.m_radius) {
	      // No collision
	      axis.type = box2d.b2EPAxisType.e_edgeB;
	      axis.index = i;
	      axis.separation = s;
	      return axis;
	    }

	    // Adjacency
	    if (box2d.b2Dot_V2_V2(n, perp) >= 0) {
	      if (box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(n, this.m_upperLimit, box2d.b2Vec2.s_t0), this.m_normal) < -box2d.b2_angularSlop) {
	        continue;
	      }
	    } else {
	      if (box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(n, this.m_lowerLimit, box2d.b2Vec2.s_t0), this.m_normal) < -box2d.b2_angularSlop) {
	        continue;
	      }
	    }

	    if (s > axis.separation) {
	      axis.type = box2d.b2EPAxisType.e_edgeB;
	      axis.index = i;
	      axis.separation = s;
	    }
	  }

	  return axis;
	};
	box2d.b2EPCollider.s_n = new box2d.b2Vec2();
	box2d.b2EPCollider.s_perp = new box2d.b2Vec2();

	/**
	 * Compute the collision manifold between an edge and a polygon.
	 * @export
	 * @return {void}
	 * @param {box2d.b2Manifold} manifold
	 * @param {box2d.b2EdgeShape} edgeA
	 * @param {box2d.b2Transform} xfA
	 * @param {box2d.b2PolygonShape} polygonB
	 * @param {box2d.b2Transform} xfB
	 */
	box2d.b2CollideEdgeAndPolygon = function (manifold, edgeA, xfA, polygonB, xfB) {
	  /** @type {box2d.b2EPCollider} */
	  var collider = box2d.b2CollideEdgeAndPolygon.s_collider;
	  collider.Collide(manifold, edgeA, xfA, polygonB, xfB);
	};
	box2d.b2CollideEdgeAndPolygon.s_collider = new box2d.b2EPCollider();

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(23);

	/**
	 * @export
	 * @constructor
	 * @extends {box2d.b2Contact}
	 */
	/*
	 * Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
	 *
	 * This software is provided 'as-is', without any express or implied
	 * warranty.  In no event will the authors be held liable for any damages
	 * arising from the use of this software.
	 * Permission is granted to anyone to use this software for any purpose,
	 * including commercial applications, and to alter it and redistribute it
	 * freely, subject to the following restrictions:
	 * 1. The origin of this software must not be misrepresented; you must not
	 * claim that you wrote the original software. If you use this software
	 * in a product, an acknowledgment in the product documentation would be
	 * appreciated but is not required.
	 * 2. Altered source versions must be plainly marked as such, and must not be
	 * misrepresented as being the original software.
	 * 3. This notice may not be removed or altered from any source distribution.
	 */

	box2d.b2EdgeAndPolygonContact = function () {
	  box2d.b2Contact.call(this); // base class constructor
	};

	goog.inherits(box2d.b2EdgeAndPolygonContact, box2d.b2Contact);

	/**
	 * @export
	 * @return {box2d.b2Contact}
	 * @param allocator
	 */
	box2d.b2EdgeAndPolygonContact.Create = function (allocator) {
	  return new box2d.b2EdgeAndPolygonContact();
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2Contact} contact
	 * @param allocator
	 */
	box2d.b2EdgeAndPolygonContact.Destroy = function (contact, allocator) {};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2Manifold} manifold
	 * @param {box2d.b2Transform} xfA
	 * @param {box2d.b2Transform} xfB
	 */
	box2d.b2EdgeAndPolygonContact.prototype.Evaluate = function (manifold, xfA, xfB) {
	  var shapeA = this.m_fixtureA.GetShape();
	  var shapeB = this.m_fixtureB.GetShape();
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(shapeA instanceof box2d.b2EdgeShape);
	  }
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(shapeB instanceof box2d.b2PolygonShape);
	  }
	  box2d.b2CollideEdgeAndPolygon(manifold, shapeA instanceof box2d.b2EdgeShape ? shapeA : null, xfA, shapeB instanceof box2d.b2PolygonShape ? shapeB : null, xfB);
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(23);

	__webpack_require__(31);

	/**
	 * @export
	 * @constructor
	 * @extends {box2d.b2Contact}
	 */
	box2d.b2ChainAndCircleContact = function () {
	  box2d.b2Contact.call(this); // base class constructor
	}; /*
	    * Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
	    *
	    * This software is provided 'as-is', without any express or implied
	    * warranty.  In no event will the authors be held liable for any damages
	    * arising from the use of this software.
	    * Permission is granted to anyone to use this software for any purpose,
	    * including commercial applications, and to alter it and redistribute it
	    * freely, subject to the following restrictions:
	    * 1. The origin of this software must not be misrepresented; you must not
	    * claim that you wrote the original software. If you use this software
	    * in a product, an acknowledgment in the product documentation would be
	    * appreciated but is not required.
	    * 2. Altered source versions must be plainly marked as such, and must not be
	    * misrepresented as being the original software.
	    * 3. This notice may not be removed or altered from any source distribution.
	    */

	goog.inherits(box2d.b2ChainAndCircleContact, box2d.b2Contact);

	/**
	 * @export
	 * @return {box2d.b2Contact}
	 * @param allocator
	 */
	box2d.b2ChainAndCircleContact.Create = function (allocator) {
	  return new box2d.b2ChainAndCircleContact();
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2Contact} contact
	 * @param allocator
	 */
	box2d.b2ChainAndCircleContact.Destroy = function (contact, allocator) {};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2Manifold} manifold
	 * @param {box2d.b2Transform} xfA
	 * @param {box2d.b2Transform} xfB
	 */
	box2d.b2ChainAndCircleContact.prototype.Evaluate = function (manifold, xfA, xfB) {
	  var shapeA = this.m_fixtureA.GetShape();
	  var shapeB = this.m_fixtureB.GetShape();
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(shapeA instanceof box2d.b2ChainShape);
	  }
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(shapeB instanceof box2d.b2CircleShape);
	  }
	  /*box2d.b2ChainShape*/
	  var chain = shapeA instanceof box2d.b2ChainShape ? shapeA : null;
	  /*box2d.b2EdgeShape*/
	  var edge = box2d.b2ChainAndCircleContact.prototype.Evaluate.s_edge;
	  chain.GetChildEdge(edge, this.m_indexA);
	  box2d.b2CollideEdgeAndCircle(manifold, edge, xfA, shapeB instanceof box2d.b2CircleShape ? shapeB : null, xfB);
	};
	box2d.b2ChainAndCircleContact.prototype.Evaluate.s_edge = new box2d.b2EdgeShape();

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(23);

	__webpack_require__(31);

	__webpack_require__(9);

	__webpack_require__(10);

	/**
	 * @export
	 * @constructor
	 * @extends {box2d.b2Contact}
	 */
	box2d.b2ChainAndPolygonContact = function () {
	  box2d.b2Contact.call(this); // base class constructor
	}; /*
	    * Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
	    *
	    * This software is provided 'as-is', without any express or implied
	    * warranty.  In no event will the authors be held liable for any damages
	    * arising from the use of this software.
	    * Permission is granted to anyone to use this software for any purpose,
	    * including commercial applications, and to alter it and redistribute it
	    * freely, subject to the following restrictions:
	    * 1. The origin of this software must not be misrepresented; you must not
	    * claim that you wrote the original software. If you use this software
	    * in a product, an acknowledgment in the product documentation would be
	    * appreciated but is not required.
	    * 2. Altered source versions must be plainly marked as such, and must not be
	    * misrepresented as being the original software.
	    * 3. This notice may not be removed or altered from any source distribution.
	    */

	goog.inherits(box2d.b2ChainAndPolygonContact, box2d.b2Contact);

	/**
	 * @export
	 * @return {box2d.b2Contact}
	 * @param allocator
	 */
	box2d.b2ChainAndPolygonContact.Create = function (allocator) {
	  return new box2d.b2ChainAndPolygonContact();
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2Contact} contact
	 * @param allocator
	 */
	box2d.b2ChainAndPolygonContact.Destroy = function (contact, allocator) {};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2Manifold} manifold
	 * @param {box2d.b2Transform} xfA
	 * @param {box2d.b2Transform} xfB
	 */
	box2d.b2ChainAndPolygonContact.prototype.Evaluate = function (manifold, xfA, xfB) {
	  var shapeA = this.m_fixtureA.GetShape();
	  var shapeB = this.m_fixtureB.GetShape();
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(shapeA instanceof box2d.b2ChainShape);
	  }
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(shapeB instanceof box2d.b2PolygonShape);
	  }
	  /*box2d.b2ChainShape*/
	  var chain = shapeA instanceof box2d.b2ChainShape ? shapeA : null;
	  /*box2d.b2EdgeShape*/
	  var edge = box2d.b2ChainAndPolygonContact.prototype.Evaluate.s_edge;
	  chain.GetChildEdge(edge, this.m_indexA);
	  box2d.b2CollideEdgeAndPolygon(manifold, edge, xfA, shapeB instanceof box2d.b2PolygonShape ? shapeB : null, xfB);
	};
	box2d.b2ChainAndPolygonContact.prototype.Evaluate.s_edge = new box2d.b2EdgeShape();

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(3);

	__webpack_require__(19);

	__webpack_require__(18);

	__webpack_require__(24);

	/*
	Position Correction Notes
	=========================
	I tried the several algorithms for position correction of the 2D revolute joint.
	I looked at these systems:
	- simple pendulum (1m diameter sphere on massless 5m stick) with initial angular velocity of 100 rad/s.
	- suspension bridge with 30 1m long planks of length 1m.
	- multi-link chain with 30 1m long links.

	Here are the algorithms:

	Baumgarte - A fraction of the position error is added to the velocity error. There is no
	separate position solver.

	Pseudo Velocities - After the velocity solver and position integration,
	the position error, Jacobian, and effective mass are recomputed. Then
	the velocity constraints are solved with pseudo velocities and a fraction
	of the position error is added to the pseudo velocity error. The pseudo
	velocities are initialized to zero and there is no warm-starting. After
	the position solver, the pseudo velocities are added to the positions.
	This is also called the First Order World method or the Position LCP method.

	Modified Nonlinear Gauss-Seidel (NGS) - Like Pseudo Velocities except the
	position error is re-computed for each constraint and the positions are updated
	after the constraint is solved. The radius vectors (aka Jacobians) are
	re-computed too (otherwise the algorithm has horrible instability). The pseudo
	velocity states are not needed because they are effectively zero at the beginning
	of each iteration. Since we have the current position error, we allow the
	iterations to terminate early if the error becomes smaller than box2d.b2_linearSlop.

	Full NGS or just NGS - Like Modified NGS except the effective mass are re-computed
	each time a constraint is solved.

	Here are the results:
	Baumgarte - this is the cheapest algorithm but it has some stability problems,
	especially with the bridge. The chain links separate easily close to the root
	and they jitter as they struggle to pull together. This is one of the most common
	methods in the field. The big drawback is that the position correction artificially
	affects the momentum, thus leading to instabilities and false bounce. I used a
	bias factor of 0.2. A larger bias factor makes the bridge less stable, a smaller
	factor makes joints and contacts more spongy.

	Pseudo Velocities - the is more stable than the Baumgarte method. The bridge is
	stable. However, joints still separate with large angular velocities. Drag the
	simple pendulum in a circle quickly and the joint will separate. The chain separates
	easily and does not recover. I used a bias factor of 0.2. A larger value lead to
	the bridge collapsing when a heavy cube drops on it.

	Modified NGS - this algorithm is better in some ways than Baumgarte and Pseudo
	Velocities, but in other ways it is worse. The bridge and chain are much more
	stable, but the simple pendulum goes unstable at high angular velocities.

	Full NGS - stable in all tests. The joints display good stiffness. The bridge
	still sags, but this is better than infinite forces.

	Recommendations
	Pseudo Velocities are not really worthwhile because the bridge and chain cannot
	recover from joint separation. In other cases the benefit over Baumgarte is small.

	Modified NGS is not a robust method for the revolute joint due to the violent
	instability seen in the simple pendulum. Perhaps it is viable with other constraint
	types, especially scalar constraints where the effective mass is a scalar.

	This leaves Baumgarte and Full NGS. Baumgarte has small, but manageable instabilities
	and is very fast. I don't think we can escape Baumgarte, especially in highly
	demanding cases where high constraint fidelity is not needed.

	Full NGS is robust and easy on the eyes. I recommend this as an option for
	higher fidelity simulation and certainly for suspension bridges and long chains.
	Full NGS might be a good choice for ragdolls, especially motorized ragdolls where
	joint separation can be problematic. The number of NGS iterations can be reduced
	for better performance without harming robustness much.

	Each joint in a can be handled differently in the position solver. So I recommend
	a system where the user can select the algorithm on a per joint basis. I would
	probably default to the slower Full NGS and let the user select the faster
	Baumgarte method in performance critical scenarios.
	*/

	/*
	Cache Performance

	The Box2D solvers are dominated by cache misses. Data structures are designed
	to increase the number of cache hits. Much of misses are due to random access
	to body data. The constraint structures are iterated over linearly, which leads
	to few cache misses.

	The bodies are not accessed during iteration. Instead read only data, such as
	the mass values are stored with the constraints. The mutable data are the constraint
	impulses and the bodies velocities/positions. The impulses are held inside the
	constraint structures. The body velocities/positions are held in compact, temporary
	arrays to increase the number of cache hits. Linear and angular velocity are
	stored in a single array since multiple arrays lead to multiple misses.
	*/

	/*
	2D Rotation

	R = [cos(theta) -sin(theta)]
	    [sin(theta) cos(theta) ]

	thetaDot = omega

	Let q1 = cos(theta), q2 = sin(theta).
	R = [q1 -q2]
	    [q2  q1]

	q1Dot = -thetaDot * q2
	q2Dot = thetaDot * q1

	q1_new = q1_old - dt * w * q2
	q2_new = q2_old + dt * w * q1
	then normalize.

	This might be faster than computing sin+cos.
	However, we can compute sin+cos of the same angle fast.
	*/

	/**
	 * This is an internal class.
	 * @export
	 * @constructor
	 */
	box2d.b2Island = function () {
	  this.m_bodies = new Array(1024); // TODO: b2Settings
	  this.m_contacts = new Array(1024); // TODO: b2Settings
	  this.m_joints = new Array(1024); // TODO: b2Settings

	  this.m_positions = box2d.b2Position.MakeArray(1024); // TODO: b2Settings
	  this.m_velocities = box2d.b2Velocity.MakeArray(1024); // TODO: b2Settings
	};

	/**
	 * @export
	 * @type {*}
	 */
	/*
	 * Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
	 *
	 * This software is provided 'as-is', without any express or implied
	 * warranty.  In no event will the authors be held liable for any damages
	 * arising from the use of this software.
	 * Permission is granted to anyone to use this software for any purpose,
	 * including commercial applications, and to alter it and redistribute it
	 * freely, subject to the following restrictions:
	 * 1. The origin of this software must not be misrepresented; you must not
	 * claim that you wrote the original software. If you use this software
	 * in a product, an acknowledgment in the product documentation would be
	 * appreciated but is not required.
	 * 2. Altered source versions must be plainly marked as such, and must not be
	 * misrepresented as being the original software.
	 * 3. This notice may not be removed or altered from any source distribution.
	 */

	box2d.b2Island.prototype.m_allocator = null;
	/**
	 * @export
	 * @type {box2d.b2ContactListener}
	 */
	box2d.b2Island.prototype.m_listener = null;

	/**
	 * @export
	 * @type {Array.<box2d.b2Body>}
	 */
	box2d.b2Island.prototype.m_bodies = null;
	/**
	 * @export
	 * @type {Array.<box2d.b2Contact>}
	 */
	box2d.b2Island.prototype.m_contacts = null;
	/**
	 * @export
	 * @type {Array.<box2d.b2Joint>}
	 */
	box2d.b2Island.prototype.m_joints = null;

	/**
	 * @export
	 * @type {Array.<box2d.b2Position>}
	 */
	box2d.b2Island.prototype.m_positions = null;
	/**
	 * @export
	 * @type {Array.<box2d.b2Velocity>}
	 */
	box2d.b2Island.prototype.m_velocities = null;

	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Island.prototype.m_bodyCount = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Island.prototype.m_jointCount = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Island.prototype.m_contactCount = 0;

	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Island.prototype.m_bodyCapacity = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Island.prototype.m_contactCapacity = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Island.prototype.m_jointCapacity = 0;

	/**
	 * @export
	 * @return {void}
	 * @param {number} bodyCapacity
	 * @param {number} contactCapacity
	 * @param {number} jointCapacity
	 * @param allocator
	 * @param {box2d.b2ContactListener} listener
	 */
	box2d.b2Island.prototype.Initialize = function (bodyCapacity, contactCapacity, jointCapacity, allocator, listener) {
	  this.m_bodyCapacity = bodyCapacity;
	  this.m_contactCapacity = contactCapacity;
	  this.m_jointCapacity = jointCapacity;
	  this.m_bodyCount = 0;
	  this.m_contactCount = 0;
	  this.m_jointCount = 0;

	  this.m_allocator = allocator;
	  this.m_listener = listener;

	  // TODO:
	  while (this.m_bodies.length < bodyCapacity) {
	    this.m_bodies[this.m_bodies.length] = null;
	  }
	  // TODO:
	  while (this.m_contacts.length < contactCapacity) {
	    this.m_contacts[this.m_contacts.length] = null;
	  }
	  // TODO:
	  while (this.m_joints.length < jointCapacity) {
	    this.m_joints[this.m_joints.length] = null;
	  }

	  // TODO:
	  if (this.m_positions.length < bodyCapacity) {
	    var new_length = box2d.b2Max(this.m_positions.length * 2, bodyCapacity);

	    if (box2d.DEBUG) {
	      window.console.log("box2d.b2Island.m_positions: " + new_length);
	    }

	    while (this.m_positions.length < new_length) {
	      this.m_positions[this.m_positions.length] = new box2d.b2Position();
	    }
	  }
	  // TODO:
	  if (this.m_velocities.length < bodyCapacity) {
	    var new_length = box2d.b2Max(this.m_velocities.length * 2, bodyCapacity);

	    if (box2d.DEBUG) {
	      window.console.log("box2d.b2Island.m_velocities: " + new_length);
	    }

	    while (this.m_velocities.length < new_length) {
	      this.m_velocities[this.m_velocities.length] = new box2d.b2Velocity();
	    }
	  }
	};

	/**
	 * @export
	 * @return {void}
	 */
	box2d.b2Island.prototype.Clear = function () {
	  this.m_bodyCount = 0;
	  this.m_contactCount = 0;
	  this.m_jointCount = 0;
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2Body} body
	 */
	box2d.b2Island.prototype.AddBody = function (body) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(this.m_bodyCount < this.m_bodyCapacity);
	  }
	  body.m_islandIndex = this.m_bodyCount;
	  this.m_bodies[this.m_bodyCount++] = body;
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2Contact} contact
	 */
	box2d.b2Island.prototype.AddContact = function (contact) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(this.m_contactCount < this.m_contactCapacity);
	  }
	  this.m_contacts[this.m_contactCount++] = contact;
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2Joint} joint
	 */
	box2d.b2Island.prototype.AddJoint = function (joint) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(this.m_jointCount < this.m_jointCapacity);
	  }
	  this.m_joints[this.m_jointCount++] = joint;
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2Profile} profile
	 * @param {box2d.b2TimeStep} step
	 * @param {box2d.b2Vec2} gravity
	 * @param {boolean} allowSleep
	 */
	box2d.b2Island.prototype.Solve = function (profile, step, gravity, allowSleep) {
	  /*box2d.b2Timer*/
	  var timer = box2d.b2Island.s_timer.Reset();

	  /*float32*/
	  var h = step.dt;

	  // Integrate velocities and apply damping. Initialize the body state.
	  for (var i = 0; i < this.m_bodyCount; ++i) {
	    /*box2d.b2Body*/
	    var b = this.m_bodies[i];

	    /*box2d.b2Vec2&*/
	    var c = this.m_positions[i].c.Copy(b.m_sweep.c);
	    /*float32*/
	    var a = b.m_sweep.a;
	    /*box2d.b2Vec2&*/
	    var v = this.m_velocities[i].v.Copy(b.m_linearVelocity);
	    /*float32*/
	    var w = b.m_angularVelocity;

	    // Store positions for continuous collision.
	    b.m_sweep.c0.Copy(b.m_sweep.c);
	    b.m_sweep.a0 = b.m_sweep.a;

	    if (b.m_type === box2d.b2BodyType.b2_dynamicBody) {
	      // Integrate velocities.
	      v.x += h * (b.m_gravityScale * gravity.x + b.m_invMass * b.m_force.x);
	      v.y += h * (b.m_gravityScale * gravity.y + b.m_invMass * b.m_force.y);
	      w += h * b.m_invI * b.m_torque;

	      // Apply damping.
	      // ODE: dv/dt + c * v = 0
	      // Solution: v(t) = v0 * exp(-c * t)
	      // Time step: v(t + dt) = v0 * exp(-c * (t + dt)) = v0 * exp(-c * t) * exp(-c * dt) = v * exp(-c * dt)
	      // v2 = exp(-c * dt) * v1
	      // Pade approximation:
	      // v2 = v1 * 1 / (1 + c * dt)
	      v.SelfMul(1.0 / (1.0 + h * b.m_linearDamping));
	      w *= 1.0 / (1.0 + h * b.m_angularDamping);
	    }

	    //    this.m_positions[i].c = c;
	    this.m_positions[i].a = a;
	    //    this.m_velocities[i].v = v;
	    this.m_velocities[i].w = w;
	  }

	  timer.Reset();

	  // Solver data
	  /*box2d.b2SolverData*/
	  var solverData = box2d.b2Island.s_solverData;
	  solverData.step.Copy(step);
	  solverData.positions = this.m_positions;
	  solverData.velocities = this.m_velocities;

	  // Initialize velocity constraints.
	  /*box2d.b2ContactSolverDef*/
	  var contactSolverDef = box2d.b2Island.s_contactSolverDef;
	  contactSolverDef.step.Copy(step);
	  contactSolverDef.contacts = this.m_contacts;
	  contactSolverDef.count = this.m_contactCount;
	  contactSolverDef.positions = this.m_positions;
	  contactSolverDef.velocities = this.m_velocities;
	  contactSolverDef.allocator = this.m_allocator;

	  /*box2d.b2ContactSolver*/
	  var contactSolver = box2d.b2Island.s_contactSolver.Initialize(contactSolverDef);
	  contactSolver.InitializeVelocityConstraints();

	  if (step.warmStarting) {
	    contactSolver.WarmStart();
	  }

	  for (var i = 0; i < this.m_jointCount; ++i) {
	    this.m_joints[i].InitVelocityConstraints(solverData);
	  }

	  profile.solveInit = timer.GetMilliseconds();

	  // Solve velocity constraints.
	  timer.Reset();
	  for (var i = 0; i < step.velocityIterations; ++i) {
	    for (var j = 0; j < this.m_jointCount; ++j) {
	      this.m_joints[j].SolveVelocityConstraints(solverData);
	    }

	    contactSolver.SolveVelocityConstraints();
	  }

	  // Store impulses for warm starting
	  contactSolver.StoreImpulses();
	  profile.solveVelocity = timer.GetMilliseconds();

	  // Integrate positions.
	  for (var i = 0; i < this.m_bodyCount; ++i) {
	    /*box2d.b2Vec2&*/
	    var c = this.m_positions[i].c;
	    /*float32*/
	    var a = this.m_positions[i].a;
	    /*box2d.b2Vec2&*/
	    var v = this.m_velocities[i].v;
	    /*float32*/
	    var w = this.m_velocities[i].w;

	    // Check for large velocities
	    /*box2d.b2Vec2*/
	    var translation = box2d.b2Mul_S_V2(h, v, box2d.b2Island.s_translation);
	    if (box2d.b2Dot_V2_V2(translation, translation) > box2d.b2_maxTranslationSquared) {
	      /*float32*/
	      var ratio = box2d.b2_maxTranslation / translation.Length();
	      v.SelfMul(ratio);
	    }

	    /*float32*/
	    var rotation = h * w;
	    if (rotation * rotation > box2d.b2_maxRotationSquared) {
	      /*float32*/
	      var ratio = box2d.b2_maxRotation / box2d.b2Abs(rotation);
	      w *= ratio;
	    }

	    // Integrate
	    c.x += h * v.x;
	    c.y += h * v.y;
	    a += h * w;

	    //    this.m_positions[i].c = c;
	    this.m_positions[i].a = a;
	    //    this.m_velocities[i].v = v;
	    this.m_velocities[i].w = w;
	  }

	  // Solve position constraints
	  timer.Reset();
	  /*bool*/
	  var positionSolved = false;
	  for (var i = 0; i < step.positionIterations; ++i) {
	    /*bool*/
	    var contactsOkay = contactSolver.SolvePositionConstraints();

	    /*bool*/
	    var jointsOkay = true;
	    for (var j = 0; j < this.m_jointCount; ++j) {
	      /*bool*/
	      var jointOkay = this.m_joints[j].SolvePositionConstraints(solverData);
	      jointsOkay = jointsOkay && jointOkay;
	    }

	    if (contactsOkay && jointsOkay) {
	      // Exit early if the position errors are small.
	      positionSolved = true;
	      break;
	    }
	  }

	  // Copy state buffers back to the bodies
	  for (var i = 0; i < this.m_bodyCount; ++i) {
	    /** @type {box2d.b2Body} */
	    var body = this.m_bodies[i];
	    body.m_sweep.c.Copy(this.m_positions[i].c);
	    body.m_sweep.a = this.m_positions[i].a;
	    body.m_linearVelocity.Copy(this.m_velocities[i].v);
	    body.m_angularVelocity = this.m_velocities[i].w;
	    body.SynchronizeTransform();
	  }

	  profile.solvePosition = timer.GetMilliseconds();

	  this.Report(contactSolver.m_velocityConstraints);

	  if (allowSleep) {
	    /*float32*/
	    var minSleepTime = box2d.b2_maxFloat;

	    /*float32*/
	    var linTolSqr = box2d.b2_linearSleepTolerance * box2d.b2_linearSleepTolerance;
	    /*float32*/
	    var angTolSqr = box2d.b2_angularSleepTolerance * box2d.b2_angularSleepTolerance;

	    for (var i = 0; i < this.m_bodyCount; ++i) {
	      /*box2d.b2Body*/
	      var b = this.m_bodies[i];
	      if (b.GetType() === box2d.b2BodyType.b2_staticBody) {
	        continue;
	      }

	      if (!b.m_flag_autoSleepFlag || b.m_angularVelocity * b.m_angularVelocity > angTolSqr || box2d.b2Dot_V2_V2(b.m_linearVelocity, b.m_linearVelocity) > linTolSqr) {
	        b.m_sleepTime = 0;
	        minSleepTime = 0;
	      } else {
	        b.m_sleepTime += h;
	        minSleepTime = box2d.b2Min(minSleepTime, b.m_sleepTime);
	      }
	    }

	    if (minSleepTime >= box2d.b2_timeToSleep && positionSolved) {
	      for (var i = 0; i < this.m_bodyCount; ++i) {
	        /*box2d.b2Body*/
	        var b = this.m_bodies[i];
	        b.SetAwake(false);
	      }
	    }
	  }
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2TimeStep} subStep
	 * @param {number} toiIndexA
	 * @param {number} toiIndexB
	 */
	box2d.b2Island.prototype.SolveTOI = function (subStep, toiIndexA, toiIndexB) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(toiIndexA < this.m_bodyCount);
	  }
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(toiIndexB < this.m_bodyCount);
	  }

	  // Initialize the body state.
	  for (var i = 0; i < this.m_bodyCount; ++i) {
	    /*box2d.b2Body*/
	    var b = this.m_bodies[i];
	    this.m_positions[i].c.Copy(b.m_sweep.c);
	    this.m_positions[i].a = b.m_sweep.a;
	    this.m_velocities[i].v.Copy(b.m_linearVelocity);
	    this.m_velocities[i].w = b.m_angularVelocity;
	  }

	  /*box2d.b2ContactSolverDef*/
	  var contactSolverDef = box2d.b2Island.s_contactSolverDef;
	  contactSolverDef.contacts = this.m_contacts;
	  contactSolverDef.count = this.m_contactCount;
	  contactSolverDef.allocator = this.m_allocator;
	  contactSolverDef.step.Copy(subStep);
	  contactSolverDef.positions = this.m_positions;
	  contactSolverDef.velocities = this.m_velocities;
	  /*box2d.b2ContactSolver*/
	  var contactSolver = box2d.b2Island.s_contactSolver.Initialize(contactSolverDef);

	  // Solve position constraints.
	  for (var i = 0; i < subStep.positionIterations; ++i) {
	    /*bool*/
	    var contactsOkay = contactSolver.SolveTOIPositionConstraints(toiIndexA, toiIndexB);
	    if (contactsOkay) {
	      break;
	    }
	  }

	  /*
	  #if 0
	    // Is the new position really safe?
	    for (int32 i = 0; i < this.m_contactCount; ++i)
	    {
	      box2d.b2Contact* c = this.m_contacts[i];
	      box2d.b2Fixture* fA = c.GetFixtureA();
	      box2d.b2Fixture* fB = c.GetFixtureB();
	       box2d.b2Body* bA = fA.GetBody();
	      box2d.b2Body* bB = fB.GetBody();
	       int32 indexA = c.GetChildIndexA();
	      int32 indexB = c.GetChildIndexB();
	       box2d.b2DistanceInput input;
	      input.proxyA.Set(fA.GetShape(), indexA);
	      input.proxyB.Set(fB.GetShape(), indexB);
	      input.transformA = bA.GetTransform();
	      input.transformB = bB.GetTransform();
	      input.useRadii = false;
	       box2d.b2DistanceOutput output;
	      box2d.b2SimplexCache cache;
	      cache.count = 0;
	      box2d.b2Distance(&output, &cache, &input);
	       if (output.distance === 0 || cache.count === 3)
	      {
	        cache.count += 0;
	      }
	    }
	  #endif
	  */

	  // Leap of faith to new safe state.
	  this.m_bodies[toiIndexA].m_sweep.c0.Copy(this.m_positions[toiIndexA].c);
	  this.m_bodies[toiIndexA].m_sweep.a0 = this.m_positions[toiIndexA].a;
	  this.m_bodies[toiIndexB].m_sweep.c0.Copy(this.m_positions[toiIndexB].c);
	  this.m_bodies[toiIndexB].m_sweep.a0 = this.m_positions[toiIndexB].a;

	  // No warm starting is needed for TOI events because warm
	  // starting impulses were applied in the discrete solver.
	  contactSolver.InitializeVelocityConstraints();

	  // Solve velocity constraints.
	  for (var i = 0; i < subStep.velocityIterations; ++i) {
	    contactSolver.SolveVelocityConstraints();
	  }

	  // Don't store the TOI contact forces for warm starting
	  // because they can be quite large.

	  /*float32*/
	  var h = subStep.dt;

	  // Integrate positions
	  for (var i = 0; i < this.m_bodyCount; ++i) {
	    /*box2d.b2Vec2&*/
	    var c = this.m_positions[i].c;
	    /*float32*/
	    var a = this.m_positions[i].a;
	    /*box2d.b2Vec2&*/
	    var v = this.m_velocities[i].v;
	    /*float32*/
	    var w = this.m_velocities[i].w;

	    // Check for large velocities
	    /*box2d.b2Vec2*/
	    var translation = box2d.b2Mul_S_V2(h, v, box2d.b2Island.s_translation);
	    if (box2d.b2Dot_V2_V2(translation, translation) > box2d.b2_maxTranslationSquared) {
	      /*float32*/
	      var ratio = box2d.b2_maxTranslation / translation.Length();
	      v.SelfMul(ratio);
	    }

	    /*float32*/
	    var rotation = h * w;
	    if (rotation * rotation > box2d.b2_maxRotationSquared) {
	      /*float32*/
	      var ratio = box2d.b2_maxRotation / box2d.b2Abs(rotation);
	      w *= ratio;
	    }

	    // Integrate
	    c.SelfMulAdd(h, v);
	    a += h * w;

	    //    this.m_positions[i].c = c;
	    this.m_positions[i].a = a;
	    //    this.m_velocities[i].v = v;
	    this.m_velocities[i].w = w;

	    // Sync bodies
	    /*box2d.b2Body*/
	    var body = this.m_bodies[i];
	    body.m_sweep.c.Copy(c);
	    body.m_sweep.a = a;
	    body.m_linearVelocity.Copy(v);
	    body.m_angularVelocity = w;
	    body.SynchronizeTransform();
	  }

	  this.Report(contactSolver.m_velocityConstraints);
	};

	/**
	 * @export
	 * @return {void}
	 * @param {Array.<box2d.b2ContactVelocityConstraint>} constraints
	 */
	box2d.b2Island.prototype.Report = function (constraints) {
	  if (this.m_listener === null) {
	    return;
	  }

	  for (var i = 0; i < this.m_contactCount; ++i) {
	    /** @type {box2d.b2Contact} */
	    var c = this.m_contacts[i];

	    if (!c) {
	      continue;
	    }

	    /** @type {box2d.b2ContactVelocityConstraint} */
	    var vc = constraints[i];

	    /*box2d.b2ContactImpulse*/
	    var impulse = box2d.b2Island.s_impulse;
	    impulse.count = vc.pointCount;
	    for (var j = 0; j < vc.pointCount; ++j) {
	      impulse.normalImpulses[j] = vc.points[j].normalImpulse;
	      impulse.tangentImpulses[j] = vc.points[j].tangentImpulse;
	    }

	    this.m_listener.PostSolve(c, impulse);
	  }
	};

	box2d.b2Island.s_timer = new box2d.b2Timer();
	box2d.b2Island.s_solverData = new box2d.b2SolverData();
	box2d.b2Island.s_contactSolverDef = new box2d.b2ContactSolverDef();
	box2d.b2Island.s_contactSolver = new box2d.b2ContactSolver();
	box2d.b2Island.s_translation = new box2d.b2Vec2();
	box2d.b2Island.s_impulse = new box2d.b2ContactImpulse();

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(6);

	__webpack_require__(50);

	/**
	 * @export
	 * @return {box2d.b2Joint}
	 * @param {box2d.b2JointDef} def
	 * @param allocator
	 */
	box2d.b2JointFactory.Create = function (def, allocator) {
	  var joint = null;

	  switch (def.type) {
	    case box2d.b2JointType.e_distanceJoint:
	      {
	        joint = new box2d.b2DistanceJoint(def instanceof box2d.b2DistanceJointDef ? def : null);
	      }
	      break;

	    case box2d.b2JointType.e_mouseJoint:
	      {
	        joint = new box2d.b2MouseJoint(def instanceof box2d.b2MouseJointDef ? def : null);
	      }
	      break;

	    case box2d.b2JointType.e_prismaticJoint:
	      {
	        joint = new box2d.b2PrismaticJoint(def instanceof box2d.b2PrismaticJointDef ? def : null);
	      }
	      break;

	    case box2d.b2JointType.e_revoluteJoint:
	      {
	        joint = new box2d.b2RevoluteJoint(def instanceof box2d.b2RevoluteJointDef ? def : null);
	      }
	      break;

	    case box2d.b2JointType.e_pulleyJoint:
	      {
	        joint = new box2d.b2PulleyJoint(def instanceof box2d.b2PulleyJointDef ? def : null);
	      }
	      break;

	    case box2d.b2JointType.e_gearJoint:
	      {
	        joint = new box2d.b2GearJoint(def instanceof box2d.b2GearJointDef ? def : null);
	      }
	      break;

	    case box2d.b2JointType.e_wheelJoint:
	      {
	        joint = new box2d.b2WheelJoint(def instanceof box2d.b2WheelJointDef ? def : null);
	      }
	      break;

	    case box2d.b2JointType.e_weldJoint:
	      {
	        joint = new box2d.b2WeldJoint(def instanceof box2d.b2WeldJointDef ? def : null);
	      }
	      break;

	    case box2d.b2JointType.e_frictionJoint:
	      {
	        joint = new box2d.b2FrictionJoint(def instanceof box2d.b2FrictionJointDef ? def : null);
	      }
	      break;

	    case box2d.b2JointType.e_ropeJoint:
	      {
	        joint = new box2d.b2RopeJoint(def instanceof box2d.b2RopeJointDef ? def : null);
	      }
	      break;

	    case box2d.b2JointType.e_motorJoint:
	      {
	        joint = new box2d.b2MotorJoint(def instanceof box2d.b2MotorJointDef ? def : null);
	      }
	      break;

	    case box2d.b2JointType.e_areaJoint:
	      {
	        joint = new box2d.b2AreaJoint(def instanceof box2d.b2AreaJointDef ? def : null);
	      }
	      break;

	    default:
	      if (box2d.ENABLE_ASSERTS) {
	        box2d.b2Assert(false);
	      }
	      break;
	  }

	  return joint;
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2Joint} joint
	 * @param allocator
	 */
	/*
	 * Copyright (c) 2006-2007 Erin Catto http://www.box2d.org
	 *
	 * This software is provided 'as-is', without any express or implied
	 * warranty.  In no event will the authors be held liable for any damages
	 * arising from the use of this software.
	 * Permission is granted to anyone to use this software for any purpose,
	 * including commercial applications, and to alter it and redistribute it
	 * freely, subject to the following restrictions:
	 * 1. The origin of this software must not be misrepresented; you must not
	 * claim that you wrote the original software. If you use this software
	 * in a product, an acknowledgment in the product documentation would be
	 * appreciated but is not required.
	 * 2. Altered source versions must be plainly marked as such, and must not be
	 * misrepresented as being the original software.
	 * 3. This notice may not be removed or altered from any source distribution.
	 */

	box2d.b2JointFactory.Destroy = function (joint, allocator) {};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(50);

	__webpack_require__(6);

	/**
	 * Definition for a {@link box2d.b2AreaJoint}, which connects a
	 * group a bodies together so they maintain a constant area
	 * within them.
	 * @export
	 * @constructor
	 * @extends {box2d.b2JointDef}
	 */
	box2d.b2AreaJointDef = function () {
	  box2d.b2JointDef.call(this, box2d.b2JointType.e_areaJoint); // base class constructor

	  this.bodies = new Array();
	}; /*
	    * Copyright (c) 2006-2007 Erin Catto http://www.box2d.org
	    *
	    * This software is provided 'as-is', without any express or implied
	    * warranty.  In no event will the authors be held liable for any damages
	    * arising from the use of this software.
	    * Permission is granted to anyone to use this software for any purpose,
	    * including commercial applications, and to alter it and redistribute it
	    * freely, subject to the following restrictions:
	    * 1. The origin of this software must not be misrepresented; you must not
	    * claim that you wrote the original software. If you use this software
	    * in a product, an acknowledgment in the product documentation would be
	    * appreciated but is not required.
	    * 2. Altered source versions must be plainly marked as such, and must not be
	    * misrepresented as being the original software.
	    * 3. This notice may not be removed or altered from any source distribution.
	    */

	goog.inherits(box2d.b2AreaJointDef, box2d.b2JointDef);

	/**
	 * @export
	 * @type {box2d.b2World}
	 */
	box2d.b2AreaJointDef.prototype.world = null;

	/**
	 * @export
	 * @type {Array.<box2d.b2Body>}
	 */
	box2d.b2AreaJointDef.prototype.bodies = null;

	/**
	 * The mass-spring-damper frequency in Hertz. A value of 0
	 * disables softness.
	 * @export
	 * @type {number}
	 */
	box2d.b2AreaJointDef.prototype.frequencyHz = 0;

	/**
	 * The damping ratio. 0 = no damping, 1 = critical damping.
	 * @export
	 * @type {number}
	 */
	box2d.b2AreaJointDef.prototype.dampingRatio = 0;

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2Body} body
	 */
	box2d.b2AreaJointDef.prototype.AddBody = function (body) {
	  this.bodies.push(body);

	  if (this.bodies.length === 1) {
	    this.bodyA = body;
	  } else if (this.bodies.length === 2) {
	    this.bodyB = body;
	  }
	};

	/**
	 * A distance joint constrains two points on two bodies to
	 * remain at a fixed distance from each other. You can view this
	 * as a massless, rigid rod.
	 * @export
	 * @constructor
	 * @extends {box2d.b2Joint}
	 * @param {box2d.b2AreaJointDef} def
	 */
	box2d.b2AreaJoint = function (def) {
	  box2d.b2Joint.call(this, def); // base class constructor

	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(def.bodies.length >= 3, "You cannot create an area joint with less than three bodies.");
	  }

	  this.m_bodies = def.bodies;
	  this.m_frequencyHz = def.frequencyHz;
	  this.m_dampingRatio = def.dampingRatio;

	  this.m_targetLengths = box2d.b2MakeNumberArray(def.bodies.length);
	  this.m_normals = box2d.b2Vec2.MakeArray(def.bodies.length);
	  this.m_joints = new Array(def.bodies.length);
	  this.m_deltas = box2d.b2Vec2.MakeArray(def.bodies.length);
	  this.m_delta = new box2d.b2Vec2();

	  var djd = new box2d.b2DistanceJointDef();
	  djd.frequencyHz = def.frequencyHz;
	  djd.dampingRatio = def.dampingRatio;

	  this.m_targetArea = 0;

	  for (var i = 0, ict = this.m_bodies.length; i < ict; ++i) {
	    var body = this.m_bodies[i];
	    var next = this.m_bodies[(i + 1) % ict];

	    var body_c = body.GetWorldCenter();
	    var next_c = next.GetWorldCenter();

	    this.m_targetLengths[i] = box2d.b2Distance(body_c, next_c);

	    this.m_targetArea += box2d.b2Cross_V2_V2(body_c, next_c);

	    djd.Initialize(body, next, body_c, next_c);
	    this.m_joints[i] = def.world.CreateJoint(djd);
	  }

	  this.m_targetArea *= 0.5;
	};

	goog.inherits(box2d.b2AreaJoint, box2d.b2Joint);

	/**
	 * @export
	 * @type {Array.<box2d.b2Body>}
	 */
	box2d.b2AreaJoint.prototype.m_bodies = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2AreaJoint.prototype.m_frequencyHz = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2AreaJoint.prototype.m_dampingRatio = 0;

	// Solver shared
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2AreaJoint.prototype.m_impulse = 0;

	// Solver temp
	box2d.b2AreaJoint.prototype.m_targetLengths = null;
	box2d.b2AreaJoint.prototype.m_targetArea = 0;
	box2d.b2AreaJoint.prototype.m_normals = null;
	box2d.b2AreaJoint.prototype.m_joints = null;
	box2d.b2AreaJoint.prototype.m_deltas = null;
	box2d.b2AreaJoint.prototype.m_delta = null;

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2AreaJoint.prototype.GetAnchorA = function (out) {
	  return out.SetZero();
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2AreaJoint.prototype.GetAnchorB = function (out) {
	  return out.SetZero();
	};

	/**
	 * Get the reaction force given the inverse time step.
	 * Unit is N.
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {number} inv_dt
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2AreaJoint.prototype.GetReactionForce = function (inv_dt, out) {
	  return out.SetZero();
	};

	/**
	 * Get the reaction torque given the inverse time step.
	 * Unit is N*m. This is always zero for a distance joint.
	 * @export
	 * @return {number}
	 * @param {number} inv_dt
	 */
	box2d.b2AreaJoint.prototype.GetReactionTorque = function (inv_dt) {
	  return 0;
	};

	/**
	 * Set/get frequency in Hz.
	 * @export
	 * @return {void}
	 * @param {number} hz
	 */
	box2d.b2AreaJoint.prototype.SetFrequency = function (hz) {
	  this.m_frequencyHz = hz;

	  for (var i = 0, ict = this.m_joints.length; i < ict; ++i) {
	    this.m_joints[i].SetFrequency(hz);
	  }
	};

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2AreaJoint.prototype.GetFrequency = function () {
	  return this.m_frequencyHz;
	};

	/**
	 * Set/get damping ratio.
	 * @export
	 * @return {void}
	 * @param {number} ratio
	 */
	box2d.b2AreaJoint.prototype.SetDampingRatio = function (ratio) {
	  this.m_dampingRatio = ratio;

	  for (var i = 0, ict = this.m_joints.length; i < ict; ++i) {
	    this.m_joints[i].SetDampingRatio(ratio);
	  }
	};

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2AreaJoint.prototype.GetDampingRatio = function () {
	  return this.m_dampingRatio;
	};

	/**
	 * Dump joint to dmLog
	 * @export
	 * @return {void}
	 */
	box2d.b2AreaJoint.prototype.Dump = function () {
	  if (box2d.DEBUG) {
	    box2d.b2Log("Area joint dumping is not supported.\n");
	  }
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2SolverData} data
	 */
	box2d.b2AreaJoint.prototype.InitVelocityConstraints = function (data) {
	  for (var i = 0, ict = this.m_bodies.length; i < ict; ++i) {
	    var prev = this.m_bodies[(i + ict - 1) % ict];
	    var next = this.m_bodies[(i + 1) % ict];
	    var prev_c = data.positions[prev.m_islandIndex].c;
	    var next_c = data.positions[next.m_islandIndex].c;
	    var delta = this.m_deltas[i];

	    box2d.b2Sub_V2_V2(next_c, prev_c, delta);
	  }

	  if (data.step.warmStarting) {
	    this.m_impulse *= data.step.dtRatio;

	    for (var i = 0, ict = this.m_bodies.length; i < ict; ++i) {
	      var body = this.m_bodies[i];
	      var body_v = data.velocities[body.m_islandIndex].v;
	      var delta = this.m_deltas[i];

	      body_v.x += body.m_invMass * delta.y * 0.5 * this.m_impulse;
	      body_v.y += body.m_invMass * -delta.x * 0.5 * this.m_impulse;
	    }
	  } else {
	    this.m_impulse = 0;
	  }
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2SolverData} data
	 */
	box2d.b2AreaJoint.prototype.SolveVelocityConstraints = function (data) {
	  var dotMassSum = 0;
	  var crossMassSum = 0;

	  for (var i = 0, ict = this.m_bodies.length; i < ict; ++i) {
	    var body = this.m_bodies[i];
	    var body_v = data.velocities[body.m_islandIndex].v;
	    var delta = this.m_deltas[i];

	    dotMassSum += delta.LengthSquared() / body.GetMass();
	    crossMassSum += box2d.b2Cross_V2_V2(body_v, delta);
	  }

	  var lambda = -2 * crossMassSum / dotMassSum;
	  //lambda = box2d.b2Clamp(lambda, -box2d.b2_maxLinearCorrection, box2d.b2_maxLinearCorrection);

	  this.m_impulse += lambda;

	  for (var i = 0, ict = this.m_bodies.length; i < ict; ++i) {
	    var body = this.m_bodies[i];
	    var body_v = data.velocities[body.m_islandIndex].v;
	    var delta = this.m_deltas[i];

	    body_v.x += body.m_invMass * delta.y * 0.5 * lambda;
	    body_v.y += body.m_invMass * -delta.x * 0.5 * lambda;
	  }
	};

	/**
	 * @export
	 * @return {boolean}
	 * @param {box2d.b2SolverData} data
	 */
	box2d.b2AreaJoint.prototype.SolvePositionConstraints = function (data) {
	  var perimeter = 0;
	  var area = 0;

	  for (var i = 0, ict = this.m_bodies.length; i < ict; ++i) {
	    var body = this.m_bodies[i];
	    var next = this.m_bodies[(i + 1) % ict];
	    var body_c = data.positions[body.m_islandIndex].c;
	    var next_c = data.positions[next.m_islandIndex].c;

	    var delta = box2d.b2Sub_V2_V2(next_c, body_c, this.m_delta);

	    var dist = delta.Length();
	    if (dist < box2d.b2_epsilon) {
	      dist = 1;
	    }

	    this.m_normals[i].x = delta.y / dist;
	    this.m_normals[i].y = -delta.x / dist;

	    perimeter += dist;

	    area += box2d.b2Cross_V2_V2(body_c, next_c);
	  }

	  area *= 0.5;

	  var deltaArea = this.m_targetArea - area;
	  var toExtrude = 0.5 * deltaArea / perimeter;
	  var done = true;

	  for (var i = 0, ict = this.m_bodies.length; i < ict; ++i) {
	    var body = this.m_bodies[i];
	    var body_c = data.positions[body.m_islandIndex].c;
	    var next_i = (i + 1) % ict;

	    var delta = box2d.b2Add_V2_V2(this.m_normals[i], this.m_normals[next_i], this.m_delta);
	    delta.SelfMul(toExtrude);

	    var norm_sq = delta.LengthSquared();
	    if (norm_sq > box2d.b2Sq(box2d.b2_maxLinearCorrection)) {
	      delta.SelfMul(box2d.b2_maxLinearCorrection / box2d.b2Sqrt(norm_sq));
	    }
	    if (norm_sq > box2d.b2Sq(box2d.b2_linearSlop)) {
	      done = false;
	    }

	    body_c.x += delta.x;
	    body_c.y += delta.y;
	  }

	  return done;
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(50);

	__webpack_require__(6);

	/**
	 * Distance joint definition. This requires defining an anchor
	 * point on both bodies and the non-zero length of the distance
	 * joint. The definition uses local anchor points so that the
	 * initial configuration can violate the constraint slightly.
	 * This helps when saving and loading a game.
	 * warning Do not use a zero or short length.
	 * @export
	 * @constructor
	 * @extends {box2d.b2JointDef}
	 */
	box2d.b2DistanceJointDef = function () {
	  box2d.b2JointDef.call(this, box2d.b2JointType.e_distanceJoint); // base class constructor

	  this.localAnchorA = new box2d.b2Vec2();
	  this.localAnchorB = new box2d.b2Vec2();
	}; /*
	    * Copyright (c) 2006-2007 Erin Catto http://www.box2d.org
	    *
	    * This software is provided 'as-is', without any express or implied
	    * warranty.  In no event will the authors be held liable for any damages
	    * arising from the use of this software.
	    * Permission is granted to anyone to use this software for any purpose,
	    * including commercial applications, and to alter it and redistribute it
	    * freely, subject to the following restrictions:
	    * 1. The origin of this software must not be misrepresented; you must not
	    * claim that you wrote the original software. If you use this software
	    * in a product, an acknowledgment in the product documentation would be
	    * appreciated but is not required.
	    * 2. Altered source versions must be plainly marked as such, and must not be
	    * misrepresented as being the original software.
	    * 3. This notice may not be removed or altered from any source distribution.
	    */

	goog.inherits(box2d.b2DistanceJointDef, box2d.b2JointDef);

	/**
	 * The local anchor point relative to bodyA's origin.
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2DistanceJointDef.prototype.localAnchorA = null;

	/**
	 * The local anchor point relative to bodyB's origin.
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2DistanceJointDef.prototype.localAnchorB = null;

	/**
	 * The natural length between the anchor points.
	 * @export
	 * @type {number}
	 */
	box2d.b2DistanceJointDef.prototype.length = 1;

	/**
	 * The mass-spring-damper frequency in Hertz. A value of 0
	 * disables softness.
	 * @export
	 * @type {number}
	 */
	box2d.b2DistanceJointDef.prototype.frequencyHz = 0;

	/**
	 * The damping ratio. 0 = no damping, 1 = critical damping.
	 * @export
	 * @type {number}
	 */
	box2d.b2DistanceJointDef.prototype.dampingRatio = 0;

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2Body} b1
	 * @param {box2d.b2Body} b2
	 * @param {box2d.b2Vec2} anchor1
	 * @param {box2d.b2Vec2} anchor2
	 */
	box2d.b2DistanceJointDef.prototype.Initialize = function (b1, b2, anchor1, anchor2) {
	  this.bodyA = b1;
	  this.bodyB = b2;
	  this.bodyA.GetLocalPoint(anchor1, this.localAnchorA);
	  this.bodyB.GetLocalPoint(anchor2, this.localAnchorB);
	  this.length = box2d.b2Distance(anchor1, anchor2);
	  this.frequencyHz = 0;
	  this.dampingRatio = 0;
	};

	/**
	 * A distance joint constrains two points on two bodies to
	 * remain at a fixed distance from each other. You can view this
	 * as a massless, rigid rod.
	 * @export
	 * @constructor
	 * @extends {box2d.b2Joint}
	 * @param {box2d.b2DistanceJointDef} def
	 */
	box2d.b2DistanceJoint = function (def) {
	  box2d.b2Joint.call(this, def); // base class constructor

	  this.m_u = new box2d.b2Vec2();
	  this.m_rA = new box2d.b2Vec2();
	  this.m_rB = new box2d.b2Vec2();
	  this.m_localCenterA = new box2d.b2Vec2();
	  this.m_localCenterB = new box2d.b2Vec2();

	  this.m_qA = new box2d.b2Rot();
	  this.m_qB = new box2d.b2Rot();
	  this.m_lalcA = new box2d.b2Vec2();
	  this.m_lalcB = new box2d.b2Vec2();

	  this.m_frequencyHz = def.frequencyHz;
	  this.m_dampingRatio = def.dampingRatio;

	  this.m_localAnchorA = def.localAnchorA.Clone();
	  this.m_localAnchorB = def.localAnchorB.Clone();
	  this.m_length = def.length;
	};

	goog.inherits(box2d.b2DistanceJoint, box2d.b2Joint);

	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2DistanceJoint.prototype.m_frequencyHz = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2DistanceJoint.prototype.m_dampingRatio = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2DistanceJoint.prototype.m_bias = 0;

	// Solver shared
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2DistanceJoint.prototype.m_localAnchorA = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2DistanceJoint.prototype.m_localAnchorB = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2DistanceJoint.prototype.m_gamma = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2DistanceJoint.prototype.m_impulse = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2DistanceJoint.prototype.m_length = 0;

	// Solver temp
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2DistanceJoint.prototype.m_indexA = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2DistanceJoint.prototype.m_indexB = 0;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2DistanceJoint.prototype.m_u = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2DistanceJoint.prototype.m_rA = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2DistanceJoint.prototype.m_rB = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2DistanceJoint.prototype.m_localCenterA = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2DistanceJoint.prototype.m_localCenterB = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2DistanceJoint.prototype.m_invMassA = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2DistanceJoint.prototype.m_invMassB = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2DistanceJoint.prototype.m_invIA = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2DistanceJoint.prototype.m_invIB = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2DistanceJoint.prototype.m_mass = 0;

	/**
	 * @export
	 * @type {box2d.b2Rot}
	 */
	box2d.b2DistanceJoint.prototype.m_qA = null;
	/**
	 * @export
	 * @type {box2d.b2Rot}
	 */
	box2d.b2DistanceJoint.prototype.m_qB = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2DistanceJoint.prototype.m_lalcA = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2DistanceJoint.prototype.m_lalcB = null;

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2DistanceJoint.prototype.GetAnchorA = function (out) {
	  return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, out);
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2DistanceJoint.prototype.GetAnchorB = function (out) {
	  return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, out);
	};

	/**
	 * Get the reaction force given the inverse time step.
	 * Unit is N.
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {number} inv_dt
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2DistanceJoint.prototype.GetReactionForce = function (inv_dt, out) {
	  return out.Set(inv_dt * this.m_impulse * this.m_u.x, inv_dt * this.m_impulse * this.m_u.y);
	};

	/**
	 * Get the reaction torque given the inverse time step.
	 * Unit is N*m. This is always zero for a distance joint.
	 * @export
	 * @return {number}
	 * @param {number} inv_dt
	 */
	box2d.b2DistanceJoint.prototype.GetReactionTorque = function (inv_dt) {
	  return 0;
	};

	/**
	 * The local anchor point relative to bodyA's origin.
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2DistanceJoint.prototype.GetLocalAnchorA = function (out) {
	  return out.Copy(this.m_localAnchorA);
	};

	/**
	 * The local anchor point relative to bodyB's origin.
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2DistanceJoint.prototype.GetLocalAnchorB = function (out) {
	  return out.Copy(this.m_localAnchorB);
	};

	/**
	 * @export
	 * @return {void}
	 * @param {number} length
	 */
	box2d.b2DistanceJoint.prototype.SetLength = function (length) {
	  this.m_length = length;
	};

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2DistanceJoint.prototype.GetLength = function () {
	  return this.m_length;
	};

	/**
	 * Set/get frequency in Hz.
	 * @export
	 * @return {void}
	 * @param {number} hz
	 */
	box2d.b2DistanceJoint.prototype.SetFrequency = function (hz) {
	  this.m_frequencyHz = hz;
	};

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2DistanceJoint.prototype.GetFrequency = function () {
	  return this.m_frequencyHz;
	};

	/**
	 * Set/get damping ratio.
	 * @export
	 * @return {void}
	 * @param {number} ratio
	 */
	box2d.b2DistanceJoint.prototype.SetDampingRatio = function (ratio) {
	  this.m_dampingRatio = ratio;
	};

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2DistanceJoint.prototype.GetDampingRatio = function () {
	  return this.m_dampingRatio;
	};

	/**
	 * Dump joint to dmLog
	 * @export
	 * @return {void}
	 */
	box2d.b2DistanceJoint.prototype.Dump = function () {
	  if (box2d.DEBUG) {
	    var indexA = this.m_bodyA.m_islandIndex;
	    var indexB = this.m_bodyB.m_islandIndex;

	    box2d.b2Log("  /*box2d.b2DistanceJointDef*/ var jd = new box2d.b2DistanceJointDef();\n");
	    box2d.b2Log("  jd.bodyA = bodies[%d];\n", indexA);
	    box2d.b2Log("  jd.bodyB = bodies[%d];\n", indexB);
	    box2d.b2Log("  jd.collideConnected = %s;\n", this.m_collideConnected ? 'true' : 'false');
	    box2d.b2Log("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y);
	    box2d.b2Log("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y);
	    box2d.b2Log("  jd.length = %.15f;\n", this.m_length);
	    box2d.b2Log("  jd.frequencyHz = %.15f;\n", this.m_frequencyHz);
	    box2d.b2Log("  jd.dampingRatio = %.15f;\n", this.m_dampingRatio);
	    box2d.b2Log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
	  }
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2SolverData} data
	 */
	box2d.b2DistanceJoint.prototype.InitVelocityConstraints = function (data) {
	  this.m_indexA = this.m_bodyA.m_islandIndex;
	  this.m_indexB = this.m_bodyB.m_islandIndex;
	  this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter);
	  this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter);
	  this.m_invMassA = this.m_bodyA.m_invMass;
	  this.m_invMassB = this.m_bodyB.m_invMass;
	  this.m_invIA = this.m_bodyA.m_invI;
	  this.m_invIB = this.m_bodyB.m_invI;

	  /*box2d.b2Vec2&*/
	  var cA = data.positions[this.m_indexA].c;
	  /*float32*/
	  var aA = data.positions[this.m_indexA].a;
	  /*box2d.b2Vec2&*/
	  var vA = data.velocities[this.m_indexA].v;
	  /*float32*/
	  var wA = data.velocities[this.m_indexA].w;

	  /*box2d.b2Vec2&*/
	  var cB = data.positions[this.m_indexB].c;
	  /*float32*/
	  var aB = data.positions[this.m_indexB].a;
	  /*box2d.b2Vec2&*/
	  var vB = data.velocities[this.m_indexB].v;
	  /*float32*/
	  var wB = data.velocities[this.m_indexB].w;

	  //  var qA = new box2d.b2Rot(aA), qB = new box2d.b2Rot(aB);
	  var qA = this.m_qA.SetAngle(aA),
	      qB = this.m_qB.SetAngle(aB);

	  //  m_rA = b2Mul(qA, m_localAnchorA - m_localCenterA);
	  box2d.b2Sub_V2_V2(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
	  box2d.b2Mul_R_V2(qA, this.m_lalcA, this.m_rA);
	  //  m_rB = b2Mul(qB, m_localAnchorB - m_localCenterB);
	  box2d.b2Sub_V2_V2(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
	  box2d.b2Mul_R_V2(qB, this.m_lalcB, this.m_rB);
	  //  m_u = cB + m_rB - cA - m_rA;
	  this.m_u.x = cB.x + this.m_rB.x - cA.x - this.m_rA.x;
	  this.m_u.y = cB.y + this.m_rB.y - cA.y - this.m_rA.y;

	  // Handle singularity.
	  var length = this.m_u.Length();
	  if (length > box2d.b2_linearSlop) {
	    this.m_u.SelfMul(1 / length);
	  } else {
	    this.m_u.SetZero();
	  }

	  //  float32 crAu = b2Cross(m_rA, m_u);
	  var crAu = box2d.b2Cross_V2_V2(this.m_rA, this.m_u);
	  //  float32 crBu = b2Cross(m_rB, m_u);
	  var crBu = box2d.b2Cross_V2_V2(this.m_rB, this.m_u);
	  //  float32 invMass = m_invMassA + m_invIA * crAu * crAu + m_invMassB + m_invIB * crBu * crBu;
	  var invMass = this.m_invMassA + this.m_invIA * crAu * crAu + this.m_invMassB + this.m_invIB * crBu * crBu;

	  // Compute the effective mass matrix.
	  this.m_mass = invMass !== 0 ? 1 / invMass : 0;

	  if (this.m_frequencyHz > 0) {
	    var C = length - this.m_length;

	    // Frequency
	    var omega = 2 * box2d.b2_pi * this.m_frequencyHz;

	    // Damping coefficient
	    var d = 2 * this.m_mass * this.m_dampingRatio * omega;

	    // Spring stiffness
	    var k = this.m_mass * omega * omega;

	    // magic formulas
	    /*float32*/
	    var h = data.step.dt;
	    this.m_gamma = h * (d + h * k);
	    this.m_gamma = this.m_gamma !== 0 ? 1 / this.m_gamma : 0;
	    this.m_bias = C * h * k * this.m_gamma;

	    invMass += this.m_gamma;
	    this.m_mass = invMass !== 0 ? 1 / invMass : 0;
	  } else {
	    this.m_gamma = 0;
	    this.m_bias = 0;
	  }

	  if (data.step.warmStarting) {
	    // Scale the impulse to support a variable time step.
	    this.m_impulse *= data.step.dtRatio;

	    //    box2d.b2Vec2 P = m_impulse * m_u;
	    var P = box2d.b2Mul_S_V2(this.m_impulse, this.m_u, box2d.b2DistanceJoint.prototype.InitVelocityConstraints.s_P);

	    //    vA -= m_invMassA * P;
	    vA.SelfMulSub(this.m_invMassA, P);
	    //    wA -= m_invIA * b2Cross(m_rA, P);
	    wA -= this.m_invIA * box2d.b2Cross_V2_V2(this.m_rA, P);
	    //    vB += m_invMassB * P;
	    vB.SelfMulAdd(this.m_invMassB, P);
	    //    wB += m_invIB * b2Cross(m_rB, P);
	    wB += this.m_invIB * box2d.b2Cross_V2_V2(this.m_rB, P);
	  } else {
	    this.m_impulse = 0;
	  }

	  //  data.velocities[this.m_indexA].v = vA;
	  data.velocities[this.m_indexA].w = wA;
	  //  data.velocities[this.m_indexB].v = vB;
	  data.velocities[this.m_indexB].w = wB;
	};
	box2d.b2DistanceJoint.prototype.InitVelocityConstraints.s_P = new box2d.b2Vec2();

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2SolverData} data
	 */
	box2d.b2DistanceJoint.prototype.SolveVelocityConstraints = function (data) {
	  /*box2d.b2Vec2&*/
	  var vA = data.velocities[this.m_indexA].v;
	  /*float32*/
	  var wA = data.velocities[this.m_indexA].w;
	  /*box2d.b2Vec2&*/
	  var vB = data.velocities[this.m_indexB].v;
	  /*float32*/
	  var wB = data.velocities[this.m_indexB].w;

	  //  box2d.b2Vec2 vpA = vA + b2Cross(wA, m_rA);
	  var vpA = box2d.b2AddCross_V2_S_V2(vA, wA, this.m_rA, box2d.b2DistanceJoint.prototype.SolveVelocityConstraints.s_vpA);
	  //  box2d.b2Vec2 vpB = vB + b2Cross(wB, m_rB);
	  var vpB = box2d.b2AddCross_V2_S_V2(vB, wB, this.m_rB, box2d.b2DistanceJoint.prototype.SolveVelocityConstraints.s_vpB);
	  //  float32 Cdot = b2Dot(m_u, vpB - vpA);
	  var Cdot = box2d.b2Dot_V2_V2(this.m_u, box2d.b2Sub_V2_V2(vpB, vpA, box2d.b2Vec2.s_t0));

	  var impulse = -this.m_mass * (Cdot + this.m_bias + this.m_gamma * this.m_impulse);
	  this.m_impulse += impulse;

	  //  box2d.b2Vec2 P = impulse * m_u;
	  var P = box2d.b2Mul_S_V2(impulse, this.m_u, box2d.b2DistanceJoint.prototype.SolveVelocityConstraints.s_P);

	  //  vA -= m_invMassA * P;
	  vA.SelfMulSub(this.m_invMassA, P);
	  //  wA -= m_invIA * b2Cross(m_rA, P);
	  wA -= this.m_invIA * box2d.b2Cross_V2_V2(this.m_rA, P);
	  //  vB += m_invMassB * P;
	  vB.SelfMulAdd(this.m_invMassB, P);
	  //  wB += m_invIB * b2Cross(m_rB, P);
	  wB += this.m_invIB * box2d.b2Cross_V2_V2(this.m_rB, P);

	  //  data.velocities[this.m_indexA].v = vA;
	  data.velocities[this.m_indexA].w = wA;
	  //  data.velocities[this.m_indexB].v = vB;
	  data.velocities[this.m_indexB].w = wB;
	};
	box2d.b2DistanceJoint.prototype.SolveVelocityConstraints.s_vpA = new box2d.b2Vec2();
	box2d.b2DistanceJoint.prototype.SolveVelocityConstraints.s_vpB = new box2d.b2Vec2();
	box2d.b2DistanceJoint.prototype.SolveVelocityConstraints.s_P = new box2d.b2Vec2();

	/**
	 * @export
	 * @return {boolean}
	 * @param {box2d.b2SolverData} data
	 */
	box2d.b2DistanceJoint.prototype.SolvePositionConstraints = function (data) {
	  if (this.m_frequencyHz > 0) {
	    // There is no position correction for soft distance constraints.
	    return true;
	  }

	  /*box2d.b2Vec2&*/
	  var cA = data.positions[this.m_indexA].c;
	  /*float32*/
	  var aA = data.positions[this.m_indexA].a;
	  /*box2d.b2Vec2&*/
	  var cB = data.positions[this.m_indexB].c;
	  /*float32*/
	  var aB = data.positions[this.m_indexB].a;

	  //  var qA = new box2d.b2Rot(aA), qB = new box2d.b2Rot(aB);
	  var qA = this.m_qA.SetAngle(aA),
	      qB = this.m_qB.SetAngle(aB);

	  //  box2d.b2Vec2 rA = b2Mul(qA, m_localAnchorA - m_localCenterA);
	  var rA = box2d.b2Mul_R_V2(this.m_qA, this.m_lalcA, this.m_rA); // use m_rA
	  //  box2d.b2Vec2 rB = b2Mul(qB, m_localAnchorB - m_localCenterB);
	  var rB = box2d.b2Mul_R_V2(this.m_qB, this.m_lalcB, this.m_rB); // use m_rB
	  //  box2d.b2Vec2 u = cB + rB - cA - rA;
	  var u = this.m_u; // use m_u
	  u.x = cB.x + rB.x - cA.x - rA.x;
	  u.y = cB.y + rB.y - cA.y - rA.y;

	  //  float32 length = u.Normalize();
	  var length = this.m_u.Normalize();
	  //  float32 C = length - m_length;
	  var C = length - this.m_length;
	  C = box2d.b2Clamp(C, -box2d.b2_maxLinearCorrection, box2d.b2_maxLinearCorrection);

	  var impulse = -this.m_mass * C;
	  //  box2d.b2Vec2 P = impulse * u;
	  var P = box2d.b2Mul_S_V2(impulse, u, box2d.b2DistanceJoint.prototype.SolvePositionConstraints.s_P);

	  //  cA -= m_invMassA * P;
	  cA.SelfMulSub(this.m_invMassA, P);
	  //  aA -= m_invIA * b2Cross(rA, P);
	  aA -= this.m_invIA * box2d.b2Cross_V2_V2(rA, P);
	  //  cB += m_invMassB * P;
	  cB.SelfMulAdd(this.m_invMassB, P);
	  //  aB += m_invIB * b2Cross(rB, P);
	  aB += this.m_invIB * box2d.b2Cross_V2_V2(rB, P);

	  //  data.positions[this.m_indexA].c = cA;
	  data.positions[this.m_indexA].a = aA;
	  //  data.positions[this.m_indexB].c = cB;
	  data.positions[this.m_indexB].a = aB;

	  return box2d.b2Abs(C) < box2d.b2_linearSlop;
	};
	box2d.b2DistanceJoint.prototype.SolvePositionConstraints.s_P = new box2d.b2Vec2();

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(50);

	__webpack_require__(6);

	/**
	 * Friction joint definition.
	 * @export
	 * @constructor
	 * @extends {box2d.b2JointDef}
	 */
	box2d.b2FrictionJointDef = function () {
	  box2d.b2JointDef.call(this, box2d.b2JointType.e_frictionJoint); // base class constructor

	  this.localAnchorA = new box2d.b2Vec2();
	  this.localAnchorB = new box2d.b2Vec2();
	}; /*
	    * Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
	    *
	    * This software is provided 'as-is', without any express or implied
	    * warranty.  In no event will the authors be held liable for any damages
	    * arising from the use of this software.
	    * Permission is granted to anyone to use this software for any purpose,
	    * including commercial applications, and to alter it and redistribute it
	    * freely, subject to the following restrictions:
	    * 1. The origin of this software must not be misrepresented; you must not
	    * claim that you wrote the original software. If you use this software
	    * in a product, an acknowledgment in the product documentation would be
	    * appreciated but is not required.
	    * 2. Altered source versions must be plainly marked as such, and must not be
	    * misrepresented as being the original software.
	    * 3. This notice may not be removed or altered from any source distribution.
	    */

	goog.inherits(box2d.b2FrictionJointDef, box2d.b2JointDef);

	/**
	 * The local anchor point relative to bodyA's origin.
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2FrictionJointDef.prototype.localAnchorA = null;

	/**
	 * The local anchor point relative to bodyB's origin.
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2FrictionJointDef.prototype.localAnchorB = null;

	/**
	 * The maximum friction force in N.
	 * @export
	 * @type {number}
	 */
	box2d.b2FrictionJointDef.prototype.maxForce = 0;

	/**
	 * The maximum friction torque in N-m.
	 * @export
	 * @type {number}
	 */
	box2d.b2FrictionJointDef.prototype.maxTorque = 0;

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2Body} bA
	 * @param {box2d.b2Body} bB
	 * @param {box2d.b2Vec2} anchor
	 */
	box2d.b2FrictionJointDef.prototype.Initialize = function (bA, bB, anchor) {
	  this.bodyA = bA;
	  this.bodyB = bB;
	  this.bodyA.GetLocalPoint(anchor, this.localAnchorA);
	  this.bodyB.GetLocalPoint(anchor, this.localAnchorB);
	};

	/**
	 * Friction joint. This is used for top-down friction. It
	 * provides 2D translational friction and angular friction.
	 * @export
	 * @constructor
	 * @extends {box2d.b2Joint}
	 * @param {box2d.b2FrictionJointDef} def
	 */
	box2d.b2FrictionJoint = function (def) {
	  box2d.b2Joint.call(this, def); // base class constructor

	  this.m_localAnchorA = def.localAnchorA.Clone();
	  this.m_localAnchorB = def.localAnchorB.Clone();

	  this.m_linearImpulse = new box2d.b2Vec2().SetZero();
	  this.m_maxForce = def.maxForce;
	  this.m_maxTorque = def.maxTorque;

	  this.m_rA = new box2d.b2Vec2();
	  this.m_rB = new box2d.b2Vec2();
	  this.m_localCenterA = new box2d.b2Vec2();
	  this.m_localCenterB = new box2d.b2Vec2();
	  this.m_linearMass = new box2d.b2Mat22().SetZero();

	  this.m_qA = new box2d.b2Rot();
	  this.m_qB = new box2d.b2Rot();
	  this.m_lalcA = new box2d.b2Vec2();
	  this.m_lalcB = new box2d.b2Vec2();
	  this.m_K = new box2d.b2Mat22();
	};

	goog.inherits(box2d.b2FrictionJoint, box2d.b2Joint);

	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2FrictionJoint.prototype.m_localAnchorA = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2FrictionJoint.prototype.m_localAnchorB = null;

	// Solver shared
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2FrictionJoint.prototype.m_linearImpulse = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2FrictionJoint.prototype.m_angularImpulse = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2FrictionJoint.prototype.m_maxForce = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2FrictionJoint.prototype.m_maxTorque = 0;

	// Solver temp
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2FrictionJoint.prototype.m_indexA = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2FrictionJoint.prototype.m_indexB = 0;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2FrictionJoint.prototype.m_rA = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2FrictionJoint.prototype.m_rB = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2FrictionJoint.prototype.m_localCenterA = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2FrictionJoint.prototype.m_localCenterB = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2FrictionJoint.prototype.m_invMassA = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2FrictionJoint.prototype.m_invMassB = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2FrictionJoint.prototype.m_invIA = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2FrictionJoint.prototype.m_invIB = 0;
	/**
	 * @export
	 * @type {box2d.b2Mat22}
	 */
	box2d.b2FrictionJoint.prototype.m_linearMass = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2FrictionJoint.prototype.m_angularMass = 0;

	/**
	 * @export
	 * @type {box2d.b2Rot}
	 */
	box2d.b2FrictionJoint.prototype.m_qA = null;
	/**
	 * @export
	 * @type {box2d.b2Rot}
	 */
	box2d.b2FrictionJoint.prototype.m_qB = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2FrictionJoint.prototype.m_lalcA = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2FrictionJoint.prototype.m_lalcB = null;
	/**
	 * @export
	 * @type {box2d.b2Mat22}
	 */
	box2d.b2FrictionJoint.prototype.m_K = null;

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2SolverData} data
	 */
	box2d.b2FrictionJoint.prototype.InitVelocityConstraints = function (data) {
	  this.m_indexA = this.m_bodyA.m_islandIndex;
	  this.m_indexB = this.m_bodyB.m_islandIndex;
	  this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter);
	  this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter);
	  this.m_invMassA = this.m_bodyA.m_invMass;
	  this.m_invMassB = this.m_bodyB.m_invMass;
	  this.m_invIA = this.m_bodyA.m_invI;
	  this.m_invIB = this.m_bodyB.m_invI;

	  //  /*box2d.b2Vec2&*/ var cA = data.positions[this.m_indexA].c;
	  /*float32*/
	  var aA = data.positions[this.m_indexA].a;
	  /*box2d.b2Vec2&*/
	  var vA = data.velocities[this.m_indexA].v;
	  /*float32*/
	  var wA = data.velocities[this.m_indexA].w;

	  //  /*box2d.b2Vec2&*/ var cB = data.positions[this.m_indexB].c;
	  /*float32*/
	  var aB = data.positions[this.m_indexB].a;
	  /*box2d.b2Vec2&*/
	  var vB = data.velocities[this.m_indexB].v;
	  /*float32*/
	  var wB = data.velocities[this.m_indexB].w;

	  //  /*box2d.b2Rot*/ var qA = new box2d.b2Rot(aA), /*box2d.b2Rot*/ qB = new box2d.b2Rot(aB);
	  var qA = this.m_qA.SetAngle(aA),
	      qB = this.m_qB.SetAngle(aB);

	  // Compute the effective mass matrix.
	  //  m_rA = b2Mul(qA, m_localAnchorA - m_localCenterA);
	  box2d.b2Sub_V2_V2(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
	  var rA = box2d.b2Mul_R_V2(qA, this.m_lalcA, this.m_rA);
	  //  m_rB = b2Mul(qB, m_localAnchorB - m_localCenterB);
	  box2d.b2Sub_V2_V2(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
	  var rB = box2d.b2Mul_R_V2(qB, this.m_lalcB, this.m_rB);

	  // J = [-I -r1_skew I r2_skew]
	  //     [ 0       -1 0       1]
	  // r_skew = [-ry; rx]

	  // Matlab
	  // K = [ mA+r1y^2*iA+mB+r2y^2*iB,  -r1y*iA*r1x-r2y*iB*r2x,          -r1y*iA-r2y*iB]
	  //     [  -r1y*iA*r1x-r2y*iB*r2x, mA+r1x^2*iA+mB+r2x^2*iB,           r1x*iA+r2x*iB]
	  //     [          -r1y*iA-r2y*iB,           r1x*iA+r2x*iB,                   iA+iB]

	  /*float32*/
	  var mA = this.m_invMassA,
	      mB = this.m_invMassB;
	  /*float32*/
	  var iA = this.m_invIA,
	      iB = this.m_invIB;

	  /*box2d.b2Mat22*/
	  var K = this.m_K; //new box2d.b2Mat22();
	  K.ex.x = mA + mB + iA * rA.y * rA.y + iB * rB.y * rB.y;
	  K.ex.y = -iA * rA.x * rA.y - iB * rB.x * rB.y;
	  K.ey.x = K.ex.y;
	  K.ey.y = mA + mB + iA * rA.x * rA.x + iB * rB.x * rB.x;

	  K.GetInverse(this.m_linearMass);

	  this.m_angularMass = iA + iB;
	  if (this.m_angularMass > 0) {
	    this.m_angularMass = 1 / this.m_angularMass;
	  }

	  if (data.step.warmStarting) {
	    // Scale impulses to support a variable time step.
	    //    m_linearImpulse *= data.step.dtRatio;
	    this.m_linearImpulse.SelfMul(data.step.dtRatio);
	    this.m_angularImpulse *= data.step.dtRatio;

	    //    /*box2d.b2Vec2*/ var P(m_linearImpulse.x, m_linearImpulse.y);
	    /*box2d.b2Vec2*/
	    var P = this.m_linearImpulse;

	    //    vA -= mA * P;
	    vA.SelfMulSub(mA, P);
	    //    wA -= iA * (b2Cross(m_rA, P) + m_angularImpulse);
	    wA -= iA * (box2d.b2Cross_V2_V2(this.m_rA, P) + this.m_angularImpulse);
	    //    vB += mB * P;
	    vB.SelfMulAdd(mB, P);
	    //    wB += iB * (b2Cross(m_rB, P) + m_angularImpulse);
	    wB += iB * (box2d.b2Cross_V2_V2(this.m_rB, P) + this.m_angularImpulse);
	  } else {
	    this.m_linearImpulse.SetZero();
	    this.m_angularImpulse = 0;
	  }

	  //  data.velocities[this.m_indexA].v = vA;
	  data.velocities[this.m_indexA].w = wA;
	  //  data.velocities[this.m_indexB].v = vB;
	  data.velocities[this.m_indexB].w = wB;
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2SolverData} data
	 */
	box2d.b2FrictionJoint.prototype.SolveVelocityConstraints = function (data) {
	  /*box2d.b2Vec2&*/
	  var vA = data.velocities[this.m_indexA].v;
	  /*float32*/
	  var wA = data.velocities[this.m_indexA].w;
	  /*box2d.b2Vec2&*/
	  var vB = data.velocities[this.m_indexB].v;
	  /*float32*/
	  var wB = data.velocities[this.m_indexB].w;

	  /*float32*/
	  var mA = this.m_invMassA,
	      mB = this.m_invMassB;
	  /*float32*/
	  var iA = this.m_invIA,
	      iB = this.m_invIB;

	  /*float32*/
	  var h = data.step.dt;

	  // Solve angular friction
	  {
	    /*float32*/
	    var Cdot = wB - wA;
	    /*float32*/
	    var impulse = -this.m_angularMass * Cdot;

	    /*float32*/
	    var oldImpulse = this.m_angularImpulse;
	    /*float32*/
	    var maxImpulse = h * this.m_maxTorque;
	    this.m_angularImpulse = box2d.b2Clamp(this.m_angularImpulse + impulse, -maxImpulse, maxImpulse);
	    impulse = this.m_angularImpulse - oldImpulse;

	    wA -= iA * impulse;
	    wB += iB * impulse;
	  }

	  // Solve linear friction
	  {
	    //    b2Vec2 Cdot = vB + b2Cross(wB, m_rB) - vA - b2Cross(wA, m_rA);
	    var Cdot = box2d.b2Sub_V2_V2(box2d.b2AddCross_V2_S_V2(vB, wB, this.m_rB, box2d.b2Vec2.s_t0), box2d.b2AddCross_V2_S_V2(vA, wA, this.m_rA, box2d.b2Vec2.s_t1), box2d.b2FrictionJoint.prototype.SolveVelocityConstraints.s_Cdot);

	    //    b2Vec2 impulse = -b2Mul(m_linearMass, Cdot);
	    var impulseV = box2d.b2Mul_M22_V2(this.m_linearMass, Cdot, box2d.b2FrictionJoint.prototype.SolveVelocityConstraints.s_impulseV).SelfNeg();
	    //    b2Vec2 oldImpulse = m_linearImpulse;
	    var oldImpulseV = box2d.b2FrictionJoint.prototype.SolveVelocityConstraints.s_oldImpulseV.Copy(this.m_linearImpulse);
	    //    m_linearImpulse += impulse;
	    this.m_linearImpulse.SelfAdd(impulseV);

	    /*float32*/
	    var maxImpulse = h * this.m_maxForce;

	    if (this.m_linearImpulse.LengthSquared() > maxImpulse * maxImpulse) {
	      this.m_linearImpulse.Normalize();
	      this.m_linearImpulse.SelfMul(maxImpulse);
	    }

	    //    impulse = m_linearImpulse - oldImpulse;
	    box2d.b2Sub_V2_V2(this.m_linearImpulse, oldImpulseV, impulseV);

	    //    vA -= mA * impulse;
	    vA.SelfMulSub(mA, impulseV);
	    //    wA -= iA * b2Cross(m_rA, impulse);
	    wA -= iA * box2d.b2Cross_V2_V2(this.m_rA, impulseV);

	    //    vB += mB * impulse;
	    vB.SelfMulAdd(mB, impulseV);
	    //    wB += iB * b2Cross(m_rB, impulse);
	    wB += iB * box2d.b2Cross_V2_V2(this.m_rB, impulseV);
	  }

	  //  data.velocities[this.m_indexA].v = vA;
	  data.velocities[this.m_indexA].w = wA;
	  //  data.velocities[this.m_indexB].v = vB;
	  data.velocities[this.m_indexB].w = wB;
	};
	box2d.b2FrictionJoint.prototype.SolveVelocityConstraints.s_Cdot = new box2d.b2Vec2();
	box2d.b2FrictionJoint.prototype.SolveVelocityConstraints.s_impulseV = new box2d.b2Vec2();
	box2d.b2FrictionJoint.prototype.SolveVelocityConstraints.s_oldImpulseV = new box2d.b2Vec2();

	/**
	 * @export
	 * @return {boolean}
	 * @param {box2d.b2SolverData} data
	 */
	box2d.b2FrictionJoint.prototype.SolvePositionConstraints = function (data) {
	  return true;
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2FrictionJoint.prototype.GetAnchorA = function (out) {
	  return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, out);
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2FrictionJoint.prototype.GetAnchorB = function (out) {
	  return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, out);
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {number} inv_dt
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2FrictionJoint.prototype.GetReactionForce = function (inv_dt, out) {
	  return out.Set(inv_dt * this.m_linearImpulse.x, inv_dt * this.m_linearImpulse.y);
	};

	/**
	 * @export
	 * @return {number}
	 * @param {number} inv_dt
	 */
	box2d.b2FrictionJoint.prototype.GetReactionTorque = function (inv_dt) {
	  return inv_dt * this.m_angularImpulse;
	};

	/**
	 * The local anchor point relative to bodyA's origin.
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2FrictionJoint.prototype.GetLocalAnchorA = function (out) {
	  return out.Copy(this.m_localAnchorA);
	};

	/**
	 * The local anchor point relative to bodyB's origin.
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2FrictionJoint.prototype.GetLocalAnchorB = function (out) {
	  return out.Copy(this.m_localAnchorB);
	};

	/**
	 * Set the maximum friction force in N.
	 * @export
	 * @return {void}
	 * @param {number} force
	 */
	box2d.b2FrictionJoint.prototype.SetMaxForce = function (force) {
	  this.m_maxForce = force;
	};

	/**
	 * Get the maximum friction force in N.
	 * @export
	 * @return {number}
	 */
	box2d.b2FrictionJoint.prototype.GetMaxForce = function () {
	  return this.m_maxForce;
	};

	/**
	 * Set the maximum friction torque in N*m.
	 * @export
	 * @return {void}
	 * @param {number} torque
	 */
	box2d.b2FrictionJoint.prototype.SetMaxTorque = function (torque) {
	  this.m_maxTorque = torque;
	};

	/**
	 * Get the maximum friction torque in N*m.
	 * @export
	 * @return {number}
	 */
	box2d.b2FrictionJoint.prototype.GetMaxTorque = function () {
	  return this.m_maxTorque;
	};

	/**
	 * Dump joint to dmLog
	 * @export
	 * @return {void}
	 */
	box2d.b2FrictionJoint.prototype.Dump = function () {
	  if (box2d.DEBUG) {
	    var indexA = this.m_bodyA.m_islandIndex;
	    var indexB = this.m_bodyB.m_islandIndex;

	    box2d.b2Log("  /*box2d.b2FrictionJointDef*/ var jd = new box2d.b2FrictionJointDef();\n");
	    box2d.b2Log("  jd.bodyA = bodies[%d];\n", indexA);
	    box2d.b2Log("  jd.bodyB = bodies[%d];\n", indexB);
	    box2d.b2Log("  jd.collideConnected = %s;\n", this.m_collideConnected ? 'true' : 'false');
	    box2d.b2Log("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y);
	    box2d.b2Log("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y);
	    box2d.b2Log("  jd.maxForce = %.15f;\n", this.m_maxForce);
	    box2d.b2Log("  jd.maxTorque = %.15f;\n", this.m_maxTorque);
	    box2d.b2Log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
	  }
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(50);

	__webpack_require__(6);

	__webpack_require__(45);

	__webpack_require__(43);

	/**
	 * Gear joint definition. This definition requires two existing
	 * revolute or prismatic joints (any combination will work).
	 * @export
	 * @constructor
	 * @extends {box2d.b2JointDef}
	 */
	box2d.b2GearJointDef = function () {
	  box2d.b2JointDef.call(this, box2d.b2JointType.e_gearJoint); // base class constructor
	}; /*
	    * Copyright (c) 2007 Erin Catto http://www.box2d.org
	    *
	    * This software is provided 'as-is', without any express or implied
	    * warranty.  In no event will the authors be held liable for any damages
	    * arising from the use of this software.
	    * Permission is granted to anyone to use this software for any purpose,
	    * including commercial applications, and to alter it and redistribute it
	    * freely, subject to the following restrictions:
	    * 1. The origin of this software must not be misrepresented; you must not
	    * claim that you wrote the original software. If you use this software
	    * in a product, an acknowledgment in the product documentation would be
	    * appreciated but is not required.
	    * 2. Altered source versions must be plainly marked as such, and must not be
	    * misrepresented as being the original software.
	    * 3. This notice may not be removed or altered from any source distribution.
	    */

	goog.inherits(box2d.b2GearJointDef, box2d.b2JointDef);

	/**
	 * The first revolute/prismatic joint attached to the gear
	 * joint.
	 * @export
	 * @type {box2d.b2Joint}
	 */
	box2d.b2GearJointDef.prototype.joint1 = null;

	/**
	 * The second revolute/prismatic joint attached to the gear
	 * joint.
	 * @export
	 * @type {box2d.b2Joint}
	 */
	box2d.b2GearJointDef.prototype.joint2 = null;

	/**
	 * The gear ratio.
	 * @see box2d.b2GearJoint for explanation.
	 * @export
	 * @type {number}
	 */
	box2d.b2GearJointDef.prototype.ratio = 1;

	/**
	 * A gear joint is used to connect two joints together. Either
	 * joint can be a revolute or prismatic joint. You specify a
	 * gear ratio to bind the motions together:
	 * coordinateA + ratio * coordinateB = constant
	 * The ratio can be negative or positive. If one joint is a
	 * revolute joint and the other joint is a prismatic joint, then
	 * the ratio will have units of length or units of 1/length.
	 * warning You have to manually destroy the gear joint if jointA
	 * or jointB is destroyed.
	 * @export
	 * @constructor
	 * @extends {box2d.b2Joint}
	 * @param {box2d.b2GearJointDef} def
	 */
	box2d.b2GearJoint = function (def) {
	  box2d.b2Joint.call(this, def); // base class constructor

	  this.m_joint1 = def.joint1;
	  this.m_joint2 = def.joint2;

	  this.m_localAnchorA = new box2d.b2Vec2();
	  this.m_localAnchorB = new box2d.b2Vec2();
	  this.m_localAnchorC = new box2d.b2Vec2();
	  this.m_localAnchorD = new box2d.b2Vec2();

	  this.m_localAxisC = new box2d.b2Vec2();
	  this.m_localAxisD = new box2d.b2Vec2();

	  this.m_lcA = new box2d.b2Vec2(), this.m_lcB = new box2d.b2Vec2(), this.m_lcC = new box2d.b2Vec2(), this.m_lcD = new box2d.b2Vec2();
	  this.m_JvAC = new box2d.b2Vec2(), this.m_JvBD = new box2d.b2Vec2();

	  this.m_qA = new box2d.b2Rot(), this.m_qB = new box2d.b2Rot(), this.m_qC = new box2d.b2Rot(), this.m_qD = new box2d.b2Rot();
	  this.m_lalcA = new box2d.b2Vec2(), this.m_lalcB = new box2d.b2Vec2(), this.m_lalcC = new box2d.b2Vec2(), this.m_lalcD = new box2d.b2Vec2();

	  this.m_typeA = this.m_joint1.GetType();
	  this.m_typeB = this.m_joint2.GetType();

	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(this.m_typeA === box2d.b2JointType.e_revoluteJoint || this.m_typeA === box2d.b2JointType.e_prismaticJoint);
	  }
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(this.m_typeB === box2d.b2JointType.e_revoluteJoint || this.m_typeB === box2d.b2JointType.e_prismaticJoint);
	  }

	  /*float32*/
	  var coordinateA, coordinateB;

	  // TODO_ERIN there might be some problem with the joint edges in b2Joint.

	  this.m_bodyC = this.m_joint1.GetBodyA();
	  this.m_bodyA = this.m_joint1.GetBodyB();

	  // Get geometry of joint1
	  /*box2d.b2Transform*/
	  var xfA = this.m_bodyA.m_xf;
	  /*float32*/
	  var aA = this.m_bodyA.m_sweep.a;
	  /*box2d.b2Transform*/
	  var xfC = this.m_bodyC.m_xf;
	  /*float32*/
	  var aC = this.m_bodyC.m_sweep.a;

	  if (this.m_typeA === box2d.b2JointType.e_revoluteJoint) {
	    /*box2d.b2RevoluteJoint*/
	    var revolute = def.joint1;
	    this.m_localAnchorC.Copy(revolute.m_localAnchorA);
	    this.m_localAnchorA.Copy(revolute.m_localAnchorB);
	    this.m_referenceAngleA = revolute.m_referenceAngle;
	    this.m_localAxisC.SetZero();

	    coordinateA = aA - aC - this.m_referenceAngleA;
	  } else {
	    /*box2d.b2PrismaticJoint*/
	    var prismatic = def.joint1;
	    this.m_localAnchorC.Copy(prismatic.m_localAnchorA);
	    this.m_localAnchorA.Copy(prismatic.m_localAnchorB);
	    this.m_referenceAngleA = prismatic.m_referenceAngle;
	    this.m_localAxisC.Copy(prismatic.m_localXAxisA);

	    //    b2Vec2 pC = m_localAnchorC;
	    var pC = this.m_localAnchorC;
	    //    b2Vec2 pA = b2MulT(xfC.q, b2Mul(xfA.q, m_localAnchorA) + (xfA.p - xfC.p));
	    var pA = box2d.b2MulT_R_V2(xfC.q, box2d.b2Add_V2_V2(box2d.b2Mul_R_V2(xfA.q, this.m_localAnchorA, box2d.b2Vec2.s_t0), box2d.b2Sub_V2_V2(xfA.p, xfC.p, box2d.b2Vec2.s_t1), box2d.b2Vec2.s_t0), box2d.b2Vec2.s_t0); // pA uses s_t0
	    //    coordinateA = b2Dot(pA - pC, m_localAxisC);
	    coordinateA = box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(pA, pC, box2d.b2Vec2.s_t0), this.m_localAxisC);
	  }

	  this.m_bodyD = this.m_joint2.GetBodyA();
	  this.m_bodyB = this.m_joint2.GetBodyB();

	  // Get geometry of joint2
	  /*box2d.b2Transform*/
	  var xfB = this.m_bodyB.m_xf;
	  /*float32*/
	  var aB = this.m_bodyB.m_sweep.a;
	  /*box2d.b2Transform*/
	  var xfD = this.m_bodyD.m_xf;
	  /*float32*/
	  var aD = this.m_bodyD.m_sweep.a;

	  if (this.m_typeB === box2d.b2JointType.e_revoluteJoint) {
	    /*box2d.b2RevoluteJoint*/
	    var revolute = def.joint2;
	    this.m_localAnchorD.Copy(revolute.m_localAnchorA);
	    this.m_localAnchorB.Copy(revolute.m_localAnchorB);
	    this.m_referenceAngleB = revolute.m_referenceAngle;
	    this.m_localAxisD.SetZero();

	    coordinateB = aB - aD - this.m_referenceAngleB;
	  } else {
	    /*box2d.b2PrismaticJoint*/
	    var prismatic = def.joint2;
	    this.m_localAnchorD.Copy(prismatic.m_localAnchorA);
	    this.m_localAnchorB.Copy(prismatic.m_localAnchorB);
	    this.m_referenceAngleB = prismatic.m_referenceAngle;
	    this.m_localAxisD.Copy(prismatic.m_localXAxisA);

	    //    b2Vec2 pD = m_localAnchorD;
	    var pD = this.m_localAnchorD;
	    //    b2Vec2 pB = b2MulT(xfD.q, b2Mul(xfB.q, m_localAnchorB) + (xfB.p - xfD.p));
	    var pB = box2d.b2MulT_R_V2(xfD.q, box2d.b2Add_V2_V2(box2d.b2Mul_R_V2(xfB.q, this.m_localAnchorB, box2d.b2Vec2.s_t0), box2d.b2Sub_V2_V2(xfB.p, xfD.p, box2d.b2Vec2.s_t1), box2d.b2Vec2.s_t0), box2d.b2Vec2.s_t0); // pB uses s_t0
	    //    coordinateB = b2Dot(pB - pD, m_localAxisD);
	    coordinateB = box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(pB, pD, box2d.b2Vec2.s_t0), this.m_localAxisD);
	  }

	  this.m_ratio = def.ratio;

	  this.m_constant = coordinateA + this.m_ratio * coordinateB;

	  this.m_impulse = 0;
	};

	goog.inherits(box2d.b2GearJoint, box2d.b2Joint);

	/**
	 * @export
	 * @type {box2d.b2Joint}
	 */
	box2d.b2GearJoint.prototype.m_joint1 = null;
	/**
	 * @export
	 * @type {box2d.b2Joint}
	 */
	box2d.b2GearJoint.prototype.m_joint2 = null;

	/**
	 * @export
	 * @type {box2d.b2JointType}
	 */
	box2d.b2GearJoint.prototype.m_typeA = box2d.b2JointType.e_unknownJoint;
	/**
	 * @export
	 * @type {box2d.b2JointType}
	 */
	box2d.b2GearJoint.prototype.m_typeB = box2d.b2JointType.e_unknownJoint;

	// Body A is connected to body C
	// Body B is connected to body D
	/**
	 * @export
	 * @type {box2d.b2Body}
	 */
	box2d.b2GearJoint.prototype.m_bodyC = null;
	/**
	 * @export
	 * @type {box2d.b2Body}
	 */
	box2d.b2GearJoint.prototype.m_bodyD = null;

	// Solver shared
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2GearJoint.prototype.m_localAnchorA = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2GearJoint.prototype.m_localAnchorB = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2GearJoint.prototype.m_localAnchorC = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2GearJoint.prototype.m_localAnchorD = null;

	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2GearJoint.prototype.m_localAxisC = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2GearJoint.prototype.m_localAxisD = null;

	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2GearJoint.prototype.m_referenceAngleA = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2GearJoint.prototype.m_referenceAngleB = 0;

	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2GearJoint.prototype.m_constant = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2GearJoint.prototype.m_ratio = 0;

	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2GearJoint.prototype.m_impulse = 0;

	// Solver temp
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2GearJoint.prototype.m_indexA = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2GearJoint.prototype.m_indexB = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2GearJoint.prototype.m_indexC = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2GearJoint.prototype.m_indexD = 0;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2GearJoint.prototype.m_lcA = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2GearJoint.prototype.m_lcB = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2GearJoint.prototype.m_lcC = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2GearJoint.prototype.m_lcD = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2GearJoint.prototype.m_mA = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2GearJoint.prototype.m_mB = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2GearJoint.prototype.m_mC = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2GearJoint.prototype.m_mD = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2GearJoint.prototype.m_iA = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2GearJoint.prototype.m_iB = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2GearJoint.prototype.m_iC = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2GearJoint.prototype.m_iD = 0;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2GearJoint.prototype.m_JvAC = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2GearJoint.prototype.m_JvBD = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2GearJoint.prototype.m_JwA = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2GearJoint.prototype.m_JwB = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2GearJoint.prototype.m_JwC = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2GearJoint.prototype.m_JwD = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2GearJoint.prototype.m_mass = 0;

	/**
	 * @export
	 * @type {box2d.b2Rot}
	 */
	box2d.b2GearJoint.prototype.m_qA = null;
	/**
	 * @export
	 * @type {box2d.b2Rot}
	 */
	box2d.b2GearJoint.prototype.m_qB = null;
	/**
	 * @export
	 * @type {box2d.b2Rot}
	 */
	box2d.b2GearJoint.prototype.m_qC = null;
	/**
	 * @export
	 * @type {box2d.b2Rot}
	 */
	box2d.b2GearJoint.prototype.m_qD = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2GearJoint.prototype.m_lalcA = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2GearJoint.prototype.m_lalcB = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2GearJoint.prototype.m_lalcC = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2GearJoint.prototype.m_lalcD = null;

	/**
	 * @param {box2d.b2SolverData} data
	 */
	box2d.b2GearJoint.prototype.InitVelocityConstraints = function (data) {
	  this.m_indexA = this.m_bodyA.m_islandIndex;
	  this.m_indexB = this.m_bodyB.m_islandIndex;
	  this.m_indexC = this.m_bodyC.m_islandIndex;
	  this.m_indexD = this.m_bodyD.m_islandIndex;
	  this.m_lcA.Copy(this.m_bodyA.m_sweep.localCenter);
	  this.m_lcB.Copy(this.m_bodyB.m_sweep.localCenter);
	  this.m_lcC.Copy(this.m_bodyC.m_sweep.localCenter);
	  this.m_lcD.Copy(this.m_bodyD.m_sweep.localCenter);
	  this.m_mA = this.m_bodyA.m_invMass;
	  this.m_mB = this.m_bodyB.m_invMass;
	  this.m_mC = this.m_bodyC.m_invMass;
	  this.m_mD = this.m_bodyD.m_invMass;
	  this.m_iA = this.m_bodyA.m_invI;
	  this.m_iB = this.m_bodyB.m_invI;
	  this.m_iC = this.m_bodyC.m_invI;
	  this.m_iD = this.m_bodyD.m_invI;

	  /*float32*/
	  var aA = data.positions[this.m_indexA].a;
	  /*box2d.b2Vec2&*/
	  var vA = data.velocities[this.m_indexA].v;
	  /*float32*/
	  var wA = data.velocities[this.m_indexA].w;

	  /*float32*/
	  var aB = data.positions[this.m_indexB].a;
	  /*box2d.b2Vec2&*/
	  var vB = data.velocities[this.m_indexB].v;
	  /*float32*/
	  var wB = data.velocities[this.m_indexB].w;

	  /*float32*/
	  var aC = data.positions[this.m_indexC].a;
	  /*box2d.b2Vec2&*/
	  var vC = data.velocities[this.m_indexC].v;
	  /*float32*/
	  var wC = data.velocities[this.m_indexC].w;

	  /*float32*/
	  var aD = data.positions[this.m_indexD].a;
	  /*box2d.b2Vec2&*/
	  var vD = data.velocities[this.m_indexD].v;
	  /*float32*/
	  var wD = data.velocities[this.m_indexD].w;

	  //  box2d.b2Rot qA(aA), qB(aB), qC(aC), qD(aD);
	  var qA = this.m_qA.SetAngle(aA),
	      qB = this.m_qB.SetAngle(aB),
	      qC = this.m_qC.SetAngle(aC),
	      qD = this.m_qD.SetAngle(aD);

	  this.m_mass = 0;

	  if (this.m_typeA === box2d.b2JointType.e_revoluteJoint) {
	    this.m_JvAC.SetZero();
	    this.m_JwA = 1;
	    this.m_JwC = 1;
	    this.m_mass += this.m_iA + this.m_iC;
	  } else {
	    //    b2Vec2 u = b2Mul(qC, m_localAxisC);
	    var u = box2d.b2Mul_R_V2(qC, this.m_localAxisC, box2d.b2GearJoint.prototype.InitVelocityConstraints.s_u);
	    //    b2Vec2 rC = b2Mul(qC, m_localAnchorC - m_lcC);
	    box2d.b2Sub_V2_V2(this.m_localAnchorC, this.m_lcC, this.m_lalcC);
	    var rC = box2d.b2Mul_R_V2(qC, this.m_lalcC, box2d.b2GearJoint.prototype.InitVelocityConstraints.s_rC);
	    //    b2Vec2 rA = b2Mul(qA, m_localAnchorA - m_lcA);
	    box2d.b2Sub_V2_V2(this.m_localAnchorA, this.m_lcA, this.m_lalcA);
	    var rA = box2d.b2Mul_R_V2(qA, this.m_lalcA, box2d.b2GearJoint.prototype.InitVelocityConstraints.s_rA);
	    //    m_JvAC = u;
	    this.m_JvAC.Copy(u);
	    //    m_JwC = b2Cross(rC, u);
	    this.m_JwC = box2d.b2Cross_V2_V2(rC, u);
	    //    m_JwA = b2Cross(rA, u);
	    this.m_JwA = box2d.b2Cross_V2_V2(rA, u);
	    this.m_mass += this.m_mC + this.m_mA + this.m_iC * this.m_JwC * this.m_JwC + this.m_iA * this.m_JwA * this.m_JwA;
	  }

	  if (this.m_typeB === box2d.b2JointType.e_revoluteJoint) {
	    this.m_JvBD.SetZero();
	    this.m_JwB = this.m_ratio;
	    this.m_JwD = this.m_ratio;
	    this.m_mass += this.m_ratio * this.m_ratio * (this.m_iB + this.m_iD);
	  } else {
	    //    b2Vec2 u = b2Mul(qD, m_localAxisD);
	    var u = box2d.b2Mul_R_V2(qD, this.m_localAxisD, box2d.b2GearJoint.prototype.InitVelocityConstraints.s_u);
	    //    b2Vec2 rD = b2Mul(qD, m_localAnchorD - m_lcD);
	    box2d.b2Sub_V2_V2(this.m_localAnchorD, this.m_lcD, this.m_lalcD);
	    var rD = box2d.b2Mul_R_V2(qD, this.m_lalcD, box2d.b2GearJoint.prototype.InitVelocityConstraints.s_rD);
	    //    b2Vec2 rB = b2Mul(qB, m_localAnchorB - m_lcB);
	    box2d.b2Sub_V2_V2(this.m_localAnchorB, this.m_lcB, this.m_lalcB);
	    var rB = box2d.b2Mul_R_V2(qB, this.m_lalcB, box2d.b2GearJoint.prototype.InitVelocityConstraints.s_rB);
	    //    m_JvBD = m_ratio * u;
	    box2d.b2Mul_S_V2(this.m_ratio, u, this.m_JvBD);
	    //    m_JwD = m_ratio * b2Cross(rD, u);
	    this.m_JwD = this.m_ratio * box2d.b2Cross_V2_V2(rD, u);
	    //    m_JwB = m_ratio * b2Cross(rB, u);
	    this.m_JwB = this.m_ratio * box2d.b2Cross_V2_V2(rB, u);
	    this.m_mass += this.m_ratio * this.m_ratio * (this.m_mD + this.m_mB) + this.m_iD * this.m_JwD * this.m_JwD + this.m_iB * this.m_JwB * this.m_JwB;
	  }

	  // Compute effective mass.
	  this.m_mass = this.m_mass > 0 ? 1 / this.m_mass : 0;

	  if (data.step.warmStarting) {
	    //    vA += (m_mA * m_impulse) * m_JvAC;
	    vA.SelfMulAdd(this.m_mA * this.m_impulse, this.m_JvAC);
	    wA += this.m_iA * this.m_impulse * this.m_JwA;
	    //    vB += (m_mB * m_impulse) * m_JvBD;
	    vB.SelfMulAdd(this.m_mB * this.m_impulse, this.m_JvBD);
	    wB += this.m_iB * this.m_impulse * this.m_JwB;
	    //    vC -= (m_mC * m_impulse) * m_JvAC;
	    vC.SelfMulSub(this.m_mC * this.m_impulse, this.m_JvAC);
	    wC -= this.m_iC * this.m_impulse * this.m_JwC;
	    //    vD -= (m_mD * m_impulse) * m_JvBD;
	    vD.SelfMulSub(this.m_mD * this.m_impulse, this.m_JvBD);
	    wD -= this.m_iD * this.m_impulse * this.m_JwD;
	  } else {
	    this.m_impulse = 0;
	  }

	  //  data.velocities[this.m_indexA].v = vA;
	  data.velocities[this.m_indexA].w = wA;
	  //  data.velocities[this.m_indexB].v = vB;
	  data.velocities[this.m_indexB].w = wB;
	  //  data.velocities[this.m_indexC].v = vC;
	  data.velocities[this.m_indexC].w = wC;
	  //  data.velocities[this.m_indexD].v = vD;
	  data.velocities[this.m_indexD].w = wD;
	};
	box2d.b2GearJoint.prototype.InitVelocityConstraints.s_u = new box2d.b2Vec2();
	box2d.b2GearJoint.prototype.InitVelocityConstraints.s_rA = new box2d.b2Vec2();
	box2d.b2GearJoint.prototype.InitVelocityConstraints.s_rB = new box2d.b2Vec2();
	box2d.b2GearJoint.prototype.InitVelocityConstraints.s_rC = new box2d.b2Vec2();
	box2d.b2GearJoint.prototype.InitVelocityConstraints.s_rD = new box2d.b2Vec2();

	/**
	 * @param {box2d.b2SolverData} data
	 */
	box2d.b2GearJoint.prototype.SolveVelocityConstraints = function (data) {
	  /*box2d.b2Vec2&*/
	  var vA = data.velocities[this.m_indexA].v;
	  /*float32*/
	  var wA = data.velocities[this.m_indexA].w;
	  /*box2d.b2Vec2&*/
	  var vB = data.velocities[this.m_indexB].v;
	  /*float32*/
	  var wB = data.velocities[this.m_indexB].w;
	  /*box2d.b2Vec2&*/
	  var vC = data.velocities[this.m_indexC].v;
	  /*float32*/
	  var wC = data.velocities[this.m_indexC].w;
	  /*box2d.b2Vec2&*/
	  var vD = data.velocities[this.m_indexD].v;
	  /*float32*/
	  var wD = data.velocities[this.m_indexD].w;

	  //  float32 Cdot = b2Dot(m_JvAC, vA - vC) + b2Dot(m_JvBD, vB - vD);
	  var Cdot = box2d.b2Dot_V2_V2(this.m_JvAC, box2d.b2Sub_V2_V2(vA, vC, box2d.b2Vec2.s_t0)) + box2d.b2Dot_V2_V2(this.m_JvBD, box2d.b2Sub_V2_V2(vB, vD, box2d.b2Vec2.s_t0));
	  Cdot += this.m_JwA * wA - this.m_JwC * wC + (this.m_JwB * wB - this.m_JwD * wD);

	  /*float32*/
	  var impulse = -this.m_mass * Cdot;
	  this.m_impulse += impulse;

	  //  vA += (m_mA * impulse) * m_JvAC;
	  vA.SelfMulAdd(this.m_mA * impulse, this.m_JvAC);
	  wA += this.m_iA * impulse * this.m_JwA;
	  //  vB += (m_mB * impulse) * m_JvBD;
	  vB.SelfMulAdd(this.m_mB * impulse, this.m_JvBD);
	  wB += this.m_iB * impulse * this.m_JwB;
	  //  vC -= (m_mC * impulse) * m_JvAC;
	  vC.SelfMulSub(this.m_mC * impulse, this.m_JvAC);
	  wC -= this.m_iC * impulse * this.m_JwC;
	  //  vD -= (m_mD * impulse) * m_JvBD;
	  vD.SelfMulSub(this.m_mD * impulse, this.m_JvBD);
	  wD -= this.m_iD * impulse * this.m_JwD;

	  //  data.velocities[this.m_indexA].v = vA;
	  data.velocities[this.m_indexA].w = wA;
	  //  data.velocities[this.m_indexB].v = vB;
	  data.velocities[this.m_indexB].w = wB;
	  //  data.velocities[this.m_indexC].v = vC;
	  data.velocities[this.m_indexC].w = wC;
	  //  data.velocities[this.m_indexD].v = vD;
	  data.velocities[this.m_indexD].w = wD;
	};

	/**
	 * @export
	 * @return {boolean}
	 * @param {box2d.b2SolverData} data
	 */
	box2d.b2GearJoint.prototype.SolvePositionConstraints = function (data) {
	  /*box2d.b2Vec2&*/
	  var cA = data.positions[this.m_indexA].c;
	  /*float32*/
	  var aA = data.positions[this.m_indexA].a;
	  /*box2d.b2Vec2&*/
	  var cB = data.positions[this.m_indexB].c;
	  /*float32*/
	  var aB = data.positions[this.m_indexB].a;
	  /*box2d.b2Vec2&*/
	  var cC = data.positions[this.m_indexC].c;
	  /*float32*/
	  var aC = data.positions[this.m_indexC].a;
	  /*box2d.b2Vec2&*/
	  var cD = data.positions[this.m_indexD].c;
	  /*float32*/
	  var aD = data.positions[this.m_indexD].a;

	  //  box2d.b2Rot qA(aA), qB(aB), qC(aC), qD(aD);
	  var qA = this.m_qA.SetAngle(aA),
	      qB = this.m_qB.SetAngle(aB),
	      qC = this.m_qC.SetAngle(aC),
	      qD = this.m_qD.SetAngle(aD);

	  /*float32*/
	  var linearError = 0;

	  /*float32*/
	  var coordinateA, coordinateB;

	  /*box2d.b2Vec2*/
	  var JvAC = this.m_JvAC,
	      JvBD = this.m_JvBD;
	  /*float32*/
	  var JwA, JwB, JwC, JwD;
	  /*float32*/
	  var mass = 0;

	  if (this.m_typeA === box2d.b2JointType.e_revoluteJoint) {
	    JvAC.SetZero();
	    JwA = 1;
	    JwC = 1;
	    mass += this.m_iA + this.m_iC;

	    coordinateA = aA - aC - this.m_referenceAngleA;
	  } else {
	    //    b2Vec2 u = b2Mul(qC, m_localAxisC);
	    var u = box2d.b2Mul_R_V2(qC, this.m_localAxisC, box2d.b2GearJoint.prototype.SolvePositionConstraints.s_u);
	    //    b2Vec2 rC = b2Mul(qC, m_localAnchorC - m_lcC);
	    var rC = box2d.b2Mul_R_V2(qC, this.m_lalcC, box2d.b2GearJoint.prototype.SolvePositionConstraints.s_rC);
	    //    b2Vec2 rA = b2Mul(qA, m_localAnchorA - m_lcA);
	    var rA = box2d.b2Mul_R_V2(qA, this.m_lalcA, box2d.b2GearJoint.prototype.SolvePositionConstraints.s_rA);
	    //    JvAC = u;
	    JvAC.Copy(u);
	    //    JwC = b2Cross(rC, u);
	    JwC = box2d.b2Cross_V2_V2(rC, u);
	    //    JwA = b2Cross(rA, u);
	    JwA = box2d.b2Cross_V2_V2(rA, u);
	    mass += this.m_mC + this.m_mA + this.m_iC * JwC * JwC + this.m_iA * JwA * JwA;

	    //    b2Vec2 pC = m_localAnchorC - m_lcC;
	    var pC = this.m_lalcC;
	    //    b2Vec2 pA = b2MulT(qC, rA + (cA - cC));
	    var pA = box2d.b2MulT_R_V2(qC, box2d.b2Add_V2_V2(rA, box2d.b2Sub_V2_V2(cA, cC, box2d.b2Vec2.s_t0), box2d.b2Vec2.s_t0), box2d.b2Vec2.s_t0); // pA uses s_t0
	    //    coordinateA = b2Dot(pA - pC, m_localAxisC);
	    coordinateA = box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(pA, pC, box2d.b2Vec2.s_t0), this.m_localAxisC);
	  }

	  if (this.m_typeB === box2d.b2JointType.e_revoluteJoint) {
	    JvBD.SetZero();
	    JwB = this.m_ratio;
	    JwD = this.m_ratio;
	    mass += this.m_ratio * this.m_ratio * (this.m_iB + this.m_iD);

	    coordinateB = aB - aD - this.m_referenceAngleB;
	  } else {
	    //    b2Vec2 u = b2Mul(qD, m_localAxisD);
	    var u = box2d.b2Mul_R_V2(qD, this.m_localAxisD, box2d.b2GearJoint.prototype.SolvePositionConstraints.s_u);
	    //    b2Vec2 rD = b2Mul(qD, m_localAnchorD - m_lcD);
	    var rD = box2d.b2Mul_R_V2(qD, this.m_lalcD, box2d.b2GearJoint.prototype.SolvePositionConstraints.s_rD);
	    //    b2Vec2 rB = b2Mul(qB, m_localAnchorB - m_lcB);
	    var rB = box2d.b2Mul_R_V2(qB, this.m_lalcB, box2d.b2GearJoint.prototype.SolvePositionConstraints.s_rB);
	    //    JvBD = m_ratio * u;
	    box2d.b2Mul_S_V2(this.m_ratio, u, JvBD);
	    //    JwD = m_ratio * b2Cross(rD, u);
	    JwD = this.m_ratio * box2d.b2Cross_V2_V2(rD, u);
	    //    JwB = m_ratio * b2Cross(rB, u);
	    JwB = this.m_ratio * box2d.b2Cross_V2_V2(rB, u);
	    mass += this.m_ratio * this.m_ratio * (this.m_mD + this.m_mB) + this.m_iD * JwD * JwD + this.m_iB * JwB * JwB;

	    //    b2Vec2 pD = m_localAnchorD - m_lcD;
	    var pD = this.m_lalcD;
	    //    b2Vec2 pB = b2MulT(qD, rB + (cB - cD));
	    var pB = box2d.b2MulT_R_V2(qD, box2d.b2Add_V2_V2(rB, box2d.b2Sub_V2_V2(cB, cD, box2d.b2Vec2.s_t0), box2d.b2Vec2.s_t0), box2d.b2Vec2.s_t0); // pB uses s_t0
	    //    coordinateB = b2Dot(pB - pD, m_localAxisD);
	    coordinateB = box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(pB, pD, box2d.b2Vec2.s_t0), this.m_localAxisD);
	  }

	  /*float32*/
	  var C = coordinateA + this.m_ratio * coordinateB - this.m_constant;

	  /*float32*/
	  var impulse = 0;
	  if (mass > 0) {
	    impulse = -C / mass;
	  }

	  //  cA += m_mA * impulse * JvAC;
	  cA.SelfMulAdd(this.m_mA * impulse, JvAC);
	  aA += this.m_iA * impulse * JwA;
	  //  cB += m_mB * impulse * JvBD;
	  cB.SelfMulAdd(this.m_mB * impulse, JvBD);
	  aB += this.m_iB * impulse * JwB;
	  //  cC -= m_mC * impulse * JvAC;
	  cC.SelfMulSub(this.m_mC * impulse, JvAC);
	  aC -= this.m_iC * impulse * JwC;
	  //  cD -= m_mD * impulse * JvBD;
	  cD.SelfMulSub(this.m_mD * impulse, JvBD);
	  aD -= this.m_iD * impulse * JwD;

	  //  data.positions[this.m_indexA].c = cA;
	  data.positions[this.m_indexA].a = aA;
	  //  data.positions[this.m_indexB].c = cB;
	  data.positions[this.m_indexB].a = aB;
	  //  data.positions[this.m_indexC].c = cC;
	  data.positions[this.m_indexC].a = aC;
	  //  data.positions[this.m_indexD].c = cD;
	  data.positions[this.m_indexD].a = aD;

	  // TODO_ERIN not implemented
	  return linearError < box2d.b2_linearSlop;
	};
	box2d.b2GearJoint.prototype.SolvePositionConstraints.s_u = new box2d.b2Vec2();
	box2d.b2GearJoint.prototype.SolvePositionConstraints.s_rA = new box2d.b2Vec2();
	box2d.b2GearJoint.prototype.SolvePositionConstraints.s_rB = new box2d.b2Vec2();
	box2d.b2GearJoint.prototype.SolvePositionConstraints.s_rC = new box2d.b2Vec2();
	box2d.b2GearJoint.prototype.SolvePositionConstraints.s_rD = new box2d.b2Vec2();

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2GearJoint.prototype.GetAnchorA = function (out) {
	  return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, out);
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2GearJoint.prototype.GetAnchorB = function (out) {
	  return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, out);
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {number} inv_dt
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2GearJoint.prototype.GetReactionForce = function (inv_dt, out) {
	  //  b2Vec2 P = m_impulse * m_JvAC;
	  //  return inv_dt * P;
	  return box2d.b2Mul_S_V2(inv_dt * this.m_impulse, this.m_JvAC, out);
	};

	/**
	 * @export
	 * @return {number}
	 * @param {number} inv_dt
	 */
	box2d.b2GearJoint.prototype.GetReactionTorque = function (inv_dt) {
	  //  float32 L = m_impulse * m_JwA;
	  //  return inv_dt * L;
	  return inv_dt * this.m_impulse * this.m_JwA;
	};

	/**
	 * Get the first joint.
	 * @export
	 * @return {box2d.b2Joint}
	 */
	box2d.b2GearJoint.prototype.GetJoint1 = function () {
	  return this.m_joint1;
	};

	/**
	 * Get the second joint.
	 * @export
	 * @return {box2d.b2Joint}
	 */
	box2d.b2GearJoint.prototype.GetJoint2 = function () {
	  return this.m_joint2;
	};

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2GearJoint.prototype.GetRatio = function () {
	  return this.m_ratio;
	};

	/**
	 * @export
	 * @return {void}
	 * @param {number} ratio
	 */
	box2d.b2GearJoint.prototype.SetRatio = function (ratio) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(box2d.b2IsValid(ratio));
	  }
	  this.m_ratio = ratio;
	};

	/**
	 * Dump joint to dmLog
	 * @export
	 * @return {void}
	 */
	box2d.b2GearJoint.prototype.Dump = function () {
	  if (box2d.DEBUG) {
	    var indexA = this.m_bodyA.m_islandIndex;
	    var indexB = this.m_bodyB.m_islandIndex;

	    var index1 = this.m_joint1.m_index;
	    var index2 = this.m_joint2.m_index;

	    box2d.b2Log("  /*box2d.b2GearJointDef*/ var jd = new box2d.b2GearJointDef();\n");
	    box2d.b2Log("  jd.bodyA = bodies[%d];\n", indexA);
	    box2d.b2Log("  jd.bodyB = bodies[%d];\n", indexB);
	    box2d.b2Log("  jd.collideConnected = %s;\n", this.m_collideConnected ? 'true' : 'false');
	    box2d.b2Log("  jd.joint1 = joints[%d];\n", index1);
	    box2d.b2Log("  jd.joint2 = joints[%d];\n", index2);
	    box2d.b2Log("  jd.ratio = %.15f;\n", this.m_ratio);
	    box2d.b2Log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
	  }
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(6);

	/**
	 * Motor joint definition.
	 * @export
	 * @constructor
	 * @extends {box2d.b2JointDef}
	 */
	/*
	 * Copyright (c) 2006-2012 Erin Catto http://www.box2d.org
	 *
	 * This software is provided 'as-is', without any express or implied
	 * warranty.  In no event will the authors be held liable for any damages
	 * arising from the use of this software.
	 * Permission is granted to anyone to use this software for any purpose,
	 * including commercial applications, and to alter it and redistribute it
	 * freely, subject to the following restrictions:
	 * 1. The origin of this software must not be misrepresented; you must not
	 * claim that you wrote the original software. If you use this software
	 * in a product, an acknowledgment in the product documentation would be
	 * appreciated but is not required.
	 * 2. Altered source versions must be plainly marked as such, and must not be
	 * misrepresented as being the original software.
	 * 3. This notice may not be removed or altered from any source distribution.
	 */

	box2d.b2MotorJointDef = function () {
	  box2d.b2JointDef.call(this, box2d.b2JointType.e_motorJoint); // base class constructor

	  this.linearOffset = new box2d.b2Vec2(0, 0);
	};

	goog.inherits(box2d.b2MotorJointDef, box2d.b2JointDef);

	/**
	 * Position of bodyB minus the position of bodyA, in bodyA's
	 * frame, in meters.
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2MotorJointDef.prototype.linearOffset = null;

	/**
	 * The bodyB angle minus bodyA angle in radians.
	 * @export
	 * @type {number}
	 */
	box2d.b2MotorJointDef.prototype.angularOffset = 0;

	/**
	 * The maximum motor force in N.
	 * @export
	 * @type {number}
	 */
	box2d.b2MotorJointDef.prototype.maxForce = 1;

	/**
	 * The maximum motor torque in N-m.
	 * @export
	 * @type {number}
	 */
	box2d.b2MotorJointDef.prototype.maxTorque = 1;

	/**
	 * Position correction factor in the range [0,1].
	 * @export
	 * @type {number}
	 */
	box2d.b2MotorJointDef.prototype.correctionFactor = 0.3;

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2Body} bA
	 * @param {box2d.b2Body} bB
	 */
	box2d.b2MotorJointDef.prototype.Initialize = function (bA, bB) {
	  this.bodyA = bA;
	  this.bodyB = bB;
	  //  b2Vec2 xB = bodyB->GetPosition();
	  //  linearOffset = bodyA->GetLocalPoint(xB);
	  this.bodyA.GetLocalPoint(this.bodyB.GetPosition(), this.linearOffset);

	  /** @type {number} */
	  var angleA = this.bodyA.GetAngle();
	  /** @type {number} */
	  var angleB = this.bodyB.GetAngle();
	  this.angularOffset = angleB - angleA;
	};

	/**
	 * A motor joint is used to control the relative motion between
	 * two bodies. A typical usage is to control the movement of a
	 * dynamic body with respect to the ground.
	 * @export
	 * @constructor
	 * @extends {box2d.b2Joint}
	 * @param {box2d.b2MotorJointDef} def
	 */
	box2d.b2MotorJoint = function (def) {
	  box2d.b2Joint.call(this, def); // base class constructor

	  this.m_linearOffset = def.linearOffset.Clone();
	  this.m_linearImpulse = new box2d.b2Vec2(0, 0);
	  this.m_maxForce = def.maxForce;
	  this.m_maxTorque = def.maxTorque;
	  this.m_correctionFactor = def.correctionFactor;

	  this.m_rA = new box2d.b2Vec2(0, 0);
	  this.m_rB = new box2d.b2Vec2(0, 0);
	  this.m_localCenterA = new box2d.b2Vec2(0, 0);
	  this.m_localCenterB = new box2d.b2Vec2(0, 0);
	  this.m_linearError = new box2d.b2Vec2(0, 0);
	  this.m_linearMass = new box2d.b2Mat22();

	  this.m_qA = new box2d.b2Rot();
	  this.m_qB = new box2d.b2Rot();
	  this.m_K = new box2d.b2Mat22();
	};

	goog.inherits(box2d.b2MotorJoint, box2d.b2Joint);

	// Solver shared
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2MotorJoint.prototype.m_linearOffset = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2MotorJoint.prototype.m_angularOffset = 0;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2MotorJoint.prototype.m_linearImpulse = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2MotorJoint.prototype.m_angularImpulse = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2MotorJoint.prototype.m_maxForce = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2MotorJoint.prototype.m_maxTorque = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2MotorJoint.prototype.m_correctionFactor = 0.3;

	// Solver temp
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2MotorJoint.prototype.m_indexA = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2MotorJoint.prototype.m_indexB = 0;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2MotorJoint.prototype.m_rA = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2MotorJoint.prototype.m_rB = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2MotorJoint.prototype.m_localCenterA = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2MotorJoint.prototype.m_localCenterB = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2MotorJoint.prototype.m_linearError = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2MotorJoint.prototype.m_angularError = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2MotorJoint.prototype.m_invMassA = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2MotorJoint.prototype.m_invMassB = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2MotorJoint.prototype.m_invIA = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2MotorJoint.prototype.m_invIB = 0;
	/**
	 * @export
	 * @type {box2d.b2Mat22}
	 */
	box2d.b2MotorJoint.prototype.m_linearMass = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2MotorJoint.prototype.m_angularMass = 0;

	/**
	 * @export
	 * @type {box2d.b2Rot}
	 */
	box2d.b2MotorJoint.prototype.m_qA = null;
	/**
	 * @export
	 * @type {box2d.b2Rot}
	 */
	box2d.b2MotorJoint.prototype.m_qB = null;
	/**
	 * @export
	 * @type {box2d.b2Mat22}
	 */
	box2d.b2MotorJoint.prototype.m_K = null;

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2MotorJoint.prototype.GetAnchorA = function (out) {
	  return this.m_bodyA.GetPosition(out);
	};
	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2MotorJoint.prototype.GetAnchorB = function (out) {
	  return this.m_bodyB.GetPosition(out);
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {number} inv_dt
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2MotorJoint.prototype.GetReactionForce = function (inv_dt, out) {
	  //  return inv_dt * m_linearImpulse;
	  return box2d.b2Mul_S_V2(inv_dt, this.m_linearImpulse, out);
	};

	/**
	 * @export
	 * @return {number}
	 * @param {number} inv_dt
	 */
	box2d.b2MotorJoint.prototype.GetReactionTorque = function (inv_dt) {
	  return inv_dt * this.m_angularImpulse;
	};

	/**
	 * Set the position correction factor in the range [0,1].
	 * @return {void}
	 * @param {number} factor
	 */
	box2d.b2MotorJoint.prototype.SetCorrectionFactor = function (factor) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(box2d.b2IsValid(factor) && 0.0 <= factor && factor <= 1.0);
	  }
	  this._correctionFactor = factor;
	};

	/**
	 * Get the position correction factor in the range [0,1].
	 * @return {number}
	 */
	box2d.b2MotorJoint.prototype.GetCorrectionFactor = function () {
	  return this.m_correctionFactor;
	};

	/**
	 * Set/get the target linear offset, in frame A, in meters.
	 * @export
	 * @return {void}
	 * @param {box2d.b2Vec2} linearOffset
	 */
	box2d.b2MotorJoint.prototype.SetLinearOffset = function (linearOffset) {
	  if (linearOffset.x != this.m_linearOffset.x || linearOffset.y != this.m_linearOffset.y) {
	    this.m_bodyA.SetAwake(true);
	    this.m_bodyB.SetAwake(true);
	    this.m_linearOffset.Copy(linearOffset);
	  }
	};
	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2MotorJoint.prototype.GetLinearOffset = function (out) {
	  return out.Copy(this.m_linearOffset);
	};

	/**
	 * Set/get the target angular offset, in radians.
	 * @export
	 * @return {void}
	 * @param {number} angularOffset
	 */
	box2d.b2MotorJoint.prototype.SetAngularOffset = function (angularOffset) {
	  if (angularOffset !== this.m_angularOffset) {
	    this.m_bodyA.SetAwake(true);
	    this.m_bodyB.SetAwake(true);
	    this.m_angularOffset = angularOffset;
	  }
	};
	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2MotorJoint.prototype.GetAngularOffset = function () {
	  return this.m_angularOffset;
	};

	/**
	 * Set the maximum friction force in N.
	 * @export
	 * @return {void}
	 * @param {number} force
	 */
	box2d.b2MotorJoint.prototype.SetMaxForce = function (force) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(box2d.b2IsValid(force) && force >= 0);
	  }
	  this.m_maxForce = force;
	};

	/**
	 * Get the maximum friction force in N.
	 * @export
	 * @return {number}
	 */
	box2d.b2MotorJoint.prototype.GetMaxForce = function () {
	  return this.m_maxForce;
	};

	/**
	 * Set the maximum friction torque in N*m.
	 * @export
	 * @return {void}
	 * @param {number} torque
	 */
	box2d.b2MotorJoint.prototype.SetMaxTorque = function (torque) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(box2d.b2IsValid(torque) && torque >= 0);
	  }
	  this.m_maxTorque = torque;
	};

	/**
	 * Get the maximum friction torque in N*m.
	 * @export
	 * @return {number}
	 */
	box2d.b2MotorJoint.prototype.GetMaxTorque = function () {
	  return this.m_maxTorque;
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2SolverData} data
	 */
	box2d.b2MotorJoint.prototype.InitVelocityConstraints = function (data) {
	  this.m_indexA = this.m_bodyA.m_islandIndex;
	  this.m_indexB = this.m_bodyB.m_islandIndex;
	  this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter);
	  this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter);
	  this.m_invMassA = this.m_bodyA.m_invMass;
	  this.m_invMassB = this.m_bodyB.m_invMass;
	  this.m_invIA = this.m_bodyA.m_invI;
	  this.m_invIB = this.m_bodyB.m_invI;

	  /*box2d.b2Vec2&*/
	  var cA = data.positions[this.m_indexA].c;
	  /*float32*/
	  var aA = data.positions[this.m_indexA].a;
	  /*box2d.b2Vec2&*/
	  var vA = data.velocities[this.m_indexA].v;
	  /*float32*/
	  var wA = data.velocities[this.m_indexA].w;

	  /*box2d.b2Vec2&*/
	  var cB = data.positions[this.m_indexB].c;
	  /*float32*/
	  var aB = data.positions[this.m_indexB].a;
	  /*box2d.b2Vec2&*/
	  var vB = data.velocities[this.m_indexB].v;
	  /*float32*/
	  var wB = data.velocities[this.m_indexB].w;

	  /*box2d.b2Rot*/
	  var qA = this.m_qA.SetAngle(aA),
	      qB = this.m_qB.SetAngle(aB);

	  // Compute the effective mass matrix.
	  //  this.m_rA = b2Mul(qA, -this.m_localCenterA);
	  var rA = box2d.b2Mul_R_V2(qA, box2d.b2Vec2.s_t0.Copy(this.m_localCenterA).SelfNeg(), this.m_rA);
	  //  this.m_rB = b2Mul(qB, -this.m_localCenterB);
	  var rB = box2d.b2Mul_R_V2(qB, box2d.b2Vec2.s_t0.Copy(this.m_localCenterB).SelfNeg(), this.m_rB);

	  // J = [-I -r1_skew I r2_skew]
	  //     [ 0       -1 0       1]
	  // r_skew = [-ry; rx]

	  // Matlab
	  // K = [ mA+r1y^2*iA+mB+r2y^2*iB,  -r1y*iA*r1x-r2y*iB*r2x,          -r1y*iA-r2y*iB]
	  //     [  -r1y*iA*r1x-r2y*iB*r2x, mA+r1x^2*iA+mB+r2x^2*iB,           r1x*iA+r2x*iB]
	  //     [          -r1y*iA-r2y*iB,           r1x*iA+r2x*iB,                   iA+iB]

	  /*float32*/
	  var mA = this.m_invMassA,
	      mB = this.m_invMassB;
	  /*float32*/
	  var iA = this.m_invIA,
	      iB = this.m_invIB;

	  /*b2Mat22*/
	  var K = this.m_K;
	  K.ex.x = mA + mB + iA * rA.y * rA.y + iB * rB.y * rB.y;
	  K.ex.y = -iA * rA.x * rA.y - iB * rB.x * rB.y;
	  K.ey.x = K.ex.y;
	  K.ey.y = mA + mB + iA * rA.x * rA.x + iB * rB.x * rB.x;

	  //  this.m_linearMass = K.GetInverse();
	  K.GetInverse(this.m_linearMass);

	  this.m_angularMass = iA + iB;
	  if (this.m_angularMass > 0) {
	    this.m_angularMass = 1 / this.m_angularMass;
	  }

	  //  this.m_linearError = cB + rB - cA - rA - b2Mul(qA, this.m_linearOffset);
	  box2d.b2Sub_V2_V2(box2d.b2Sub_V2_V2(box2d.b2Add_V2_V2(cB, rB, box2d.b2Vec2.s_t0), box2d.b2Add_V2_V2(cA, rA, box2d.b2Vec2.s_t1), box2d.b2Vec2.s_t2), box2d.b2Mul_R_V2(qA, this.m_linearOffset, box2d.b2Vec2.s_t3), this.m_linearError);
	  this.m_angularError = aB - aA - this.m_angularOffset;

	  if (data.step.warmStarting) {
	    // Scale impulses to support a variable time step.
	    //    this.m_linearImpulse *= data.step.dtRatio;
	    this.m_linearImpulse.SelfMul(data.step.dtRatio);
	    this.m_angularImpulse *= data.step.dtRatio;

	    //    b2Vec2 P(this.m_linearImpulse.x, this.m_linearImpulse.y);
	    var P = this.m_linearImpulse;
	    //    vA -= mA * P;
	    vA.SelfMulSub(mA, P);
	    wA -= iA * (box2d.b2Cross_V2_V2(rA, P) + this.m_angularImpulse);
	    //    vB += mB * P;
	    vB.SelfMulAdd(mB, P);
	    wB += iB * (box2d.b2Cross_V2_V2(rB, P) + this.m_angularImpulse);
	  } else {
	    this.m_linearImpulse.SetZero();
	    this.m_angularImpulse = 0;
	  }

	  //  data.velocities[this.m_indexA].v = vA; // vA is a reference
	  data.velocities[this.m_indexA].w = wA;
	  //  data.velocities[this.m_indexB].v = vB; // vB is a reference
	  data.velocities[this.m_indexB].w = wB;
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2SolverData} data
	 */
	box2d.b2MotorJoint.prototype.SolveVelocityConstraints = function (data) {
	  /*box2d.b2Vec2&*/
	  var vA = data.velocities[this.m_indexA].v;
	  /*float32*/
	  var wA = data.velocities[this.m_indexA].w;
	  /*box2d.b2Vec2&*/
	  var vB = data.velocities[this.m_indexB].v;
	  /*float32*/
	  var wB = data.velocities[this.m_indexB].w;

	  /*float32*/
	  var mA = this.m_invMassA,
	      mB = this.m_invMassB;
	  /*float32*/
	  var iA = this.m_invIA,
	      iB = this.m_invIB;

	  /*float32*/
	  var h = data.step.dt;
	  /*float32*/
	  var inv_h = data.step.inv_dt;

	  // Solve angular friction
	  {
	    /*float32*/
	    var Cdot = wB - wA + inv_h * this.m_correctionFactor * this.m_angularError;
	    /*float32*/
	    var impulse = -this.m_angularMass * Cdot;

	    /*float32*/
	    var oldImpulse = this.m_angularImpulse;
	    /*float32*/
	    var maxImpulse = h * this.m_maxTorque;
	    this.m_angularImpulse = box2d.b2Clamp(this.m_angularImpulse + impulse, -maxImpulse, maxImpulse);
	    impulse = this.m_angularImpulse - oldImpulse;

	    wA -= iA * impulse;
	    wB += iB * impulse;
	  }

	  // Solve linear friction
	  {
	    var rA = this.m_rA;
	    var rB = this.m_rB;

	    //    b2Vec2 Cdot = vB + b2CrossSV(wB, rB) - vA - b2CrossSV(wA, rA) + inv_h * this.m_correctionFactor * this.m_linearError;
	    var Cdot = box2d.b2Add_V2_V2(box2d.b2Sub_V2_V2(box2d.b2Add_V2_V2(vB, box2d.b2Cross_S_V2(wB, rB, box2d.b2Vec2.s_t0), box2d.b2Vec2.s_t0), box2d.b2Add_V2_V2(vA, box2d.b2Cross_S_V2(wA, rA, box2d.b2Vec2.s_t1), box2d.b2Vec2.s_t1), box2d.b2Vec2.s_t2), box2d.b2Mul_S_V2(inv_h * this.m_correctionFactor, this.m_linearError, box2d.b2Vec2.s_t3), box2d.b2MotorJoint.prototype.SolveVelocityConstraints.s_Cdot);

	    //    b2Vec2 impulse = -b2Mul(this.m_linearMass, Cdot);
	    var impulse = box2d.b2Mul_M22_V2(this.m_linearMass, Cdot, box2d.b2MotorJoint.prototype.SolveVelocityConstraints.s_impulse).SelfNeg();
	    //    b2Vec2 oldImpulse = this.m_linearImpulse;
	    var oldImpulse = box2d.b2MotorJoint.prototype.SolveVelocityConstraints.s_oldImpulse.Copy(this.m_linearImpulse);
	    //    this.m_linearImpulse += impulse;
	    this.m_linearImpulse.SelfAdd(impulse);

	    /*float32*/
	    var maxImpulse = h * this.m_maxForce;

	    if (this.m_linearImpulse.LengthSquared() > maxImpulse * maxImpulse) {
	      this.m_linearImpulse.Normalize();
	      //      this.m_linearImpulse *= maxImpulse;
	      this.m_linearImpulse.SelfMul(maxImpulse);
	    }

	    //    impulse = this.m_linearImpulse - oldImpulse;
	    box2d.b2Sub_V2_V2(this.m_linearImpulse, oldImpulse, impulse);

	    //    vA -= mA * impulse;
	    vA.SelfMulSub(mA, impulse);
	    //    wA -= iA * b2CrossVV(rA, impulse);
	    wA -= iA * box2d.b2Cross_V2_V2(rA, impulse);

	    //    vB += mB * impulse;
	    vB.SelfMulAdd(mB, impulse);
	    //    wB += iB * b2CrossVV(rB, impulse);
	    wB += iB * box2d.b2Cross_V2_V2(rB, impulse);
	  }

	  //  data.velocities[this.m_indexA].v = vA; // vA is a reference
	  data.velocities[this.m_indexA].w = wA;
	  //  data.velocities[this.m_indexB].v = vB; // vB is a reference
	  data.velocities[this.m_indexB].w = wB;
	};
	box2d.b2MotorJoint.prototype.SolveVelocityConstraints.s_Cdot = new box2d.b2Vec2();
	box2d.b2MotorJoint.prototype.SolveVelocityConstraints.s_impulse = new box2d.b2Vec2();
	box2d.b2MotorJoint.prototype.SolveVelocityConstraints.s_oldImpulse = new box2d.b2Vec2();

	/**
	 * @export
	 * @return {boolean}
	 * @param {box2d.b2SolverData} data
	 */
	box2d.b2MotorJoint.prototype.SolvePositionConstraints = function (data) {
	  return true;
	};

	/**
	 * Dump to b2Log
	 * @export
	 * @return {void}
	 */
	box2d.b2MotorJoint.prototype.Dump = function () {
	  if (box2d.DEBUG) {
	    var indexA = this.m_bodyA.m_islandIndex;
	    var indexB = this.m_bodyB.m_islandIndex;

	    box2d.b2Log("  /*box2d.b2MotorJointDef*/ var jd = new box2d.b2MotorJointDef();\n");

	    box2d.b2Log("  jd.bodyA = bodies[%d];\n", indexA);
	    box2d.b2Log("  jd.bodyB = bodies[%d];\n", indexB);
	    box2d.b2Log("  jd.collideConnected = %s;\n", this.m_collideConnected ? 'true' : 'false');

	    box2d.b2Log("  jd.linearOffset.Set(%.15f, %.15f);\n", this.m_linearOffset.x, this.m_linearOffset.y);
	    box2d.b2Log("  jd.angularOffset = %.15f;\n", this.m_angularOffset);
	    box2d.b2Log("  jd.maxForce = %.15f;\n", this.m_maxForce);
	    box2d.b2Log("  jd.maxTorque = %.15f;\n", this.m_maxTorque);
	    box2d.b2Log("  jd.correctionFactor = %.15f;\n", this.m_correctionFactor);
	    box2d.b2Log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
	  }
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(50);

	__webpack_require__(6);

	/**
	 * Mouse joint definition. This requires a world target point,
	 * tuning parameters, and the time step.
	 * @export
	 * @constructor
	 * @extends {box2d.b2JointDef}
	 */
	box2d.b2MouseJointDef = function () {
	  box2d.b2JointDef.call(this, box2d.b2JointType.e_mouseJoint); // base class constructor

	  this.target = new box2d.b2Vec2();
	}; /*
	    * Copyright (c) 2006-2007 Erin Catto http://www.box2d.org
	    *
	    * This software is provided 'as-is', without any express or implied
	    * warranty.  In no event will the authors be held liable for any damages
	    * arising from the use of this software.
	    * Permission is granted to anyone to use this software for any purpose,
	    * including commercial applications, and to alter it and redistribute it
	    * freely, subject to the following restrictions:
	    * 1. The origin of this software must not be misrepresented; you must not
	    * claim that you wrote the original software. If you use this software
	    * in a product, an acknowledgment in the product documentation would be
	    * appreciated but is not required.
	    * 2. Altered source versions must be plainly marked as such, and must not be
	    * misrepresented as being the original software.
	    * 3. This notice may not be removed or altered from any source distribution.
	    */

	goog.inherits(box2d.b2MouseJointDef, box2d.b2JointDef);

	/**
	 * The initial world target point. This is assumed to coincide
	 * with the body anchor initially.
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2MouseJointDef.prototype.target = null;

	/**
	 * The maximum constraint force that can be exerted to move the
	 * candidate body. Usually you will express as some multiple of
	 * the weight (multiplier * mass * gravity).
	 * @export
	 * @type {number}
	 */
	box2d.b2MouseJointDef.prototype.maxForce = 0;

	/**
	 * The response speed.
	 * @export
	 * @type {number}
	 */
	box2d.b2MouseJointDef.prototype.frequencyHz = 5;

	/**
	 * The damping ratio. 0 = no damping, 1 = critical damping.
	 * @export
	 * @type {number}
	 */
	box2d.b2MouseJointDef.prototype.dampingRatio = 0.7;

	/**
	 * A mouse joint is used to make a point on a body track a
	 * specified world point. This a soft constraint with a maximum
	 * force. This allows the constraint to stretch and without
	 * applying huge forces.
	 * NOTE: this joint is not documented in the manual because it
	 * was developed to be used in the testbed. If you want to learn
	 * how to use the mouse joint, look at the testbed.
	 * @export
	 * @constructor
	 * @extends {box2d.b2Joint}
	 * @param {box2d.b2MouseJointDef} def
	 */
	box2d.b2MouseJoint = function (def) {
	  box2d.b2Joint.call(this, def); // base class constructor

	  this.m_localAnchorB = new box2d.b2Vec2();
	  this.m_targetA = new box2d.b2Vec2();

	  this.m_impulse = new box2d.b2Vec2();

	  this.m_rB = new box2d.b2Vec2();
	  this.m_localCenterB = new box2d.b2Vec2();
	  this.m_mass = new box2d.b2Mat22();
	  this.m_C = new box2d.b2Vec2();
	  this.m_qB = new box2d.b2Rot();
	  this.m_lalcB = new box2d.b2Vec2();
	  this.m_K = new box2d.b2Mat22();

	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(def.target.IsValid());
	  }
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(box2d.b2IsValid(def.maxForce) && def.maxForce >= 0);
	  }
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(box2d.b2IsValid(def.frequencyHz) && def.frequencyHz >= 0);
	  }
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(box2d.b2IsValid(def.dampingRatio) && def.dampingRatio >= 0);
	  }

	  this.m_targetA.Copy(def.target);
	  box2d.b2MulT_X_V2(this.m_bodyB.GetTransform(), this.m_targetA, this.m_localAnchorB);

	  this.m_maxForce = def.maxForce;
	  this.m_impulse.SetZero();

	  this.m_frequencyHz = def.frequencyHz;
	  this.m_dampingRatio = def.dampingRatio;

	  this.m_beta = 0;
	  this.m_gamma = 0;
	};

	goog.inherits(box2d.b2MouseJoint, box2d.b2Joint);

	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2MouseJoint.prototype.m_localAnchorB = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2MouseJoint.prototype.m_targetA = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2MouseJoint.prototype.m_frequencyHz = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2MouseJoint.prototype.m_dampingRatio = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2MouseJoint.prototype.m_beta = 0;

	// Solver shared
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2MouseJoint.prototype.m_impulse = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2MouseJoint.prototype.m_maxForce = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2MouseJoint.prototype.m_gamma = 0;

	// Solver temp
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2MouseJoint.prototype.m_indexA = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2MouseJoint.prototype.m_indexB = 0;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2MouseJoint.prototype.m_rB = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2MouseJoint.prototype.m_localCenterB = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2MouseJoint.prototype.m_invMassB = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2MouseJoint.prototype.m_invIB = 0;
	/**
	 * @export
	 * @type {box2d.b2Mat22}
	 */
	box2d.b2MouseJoint.prototype.m_mass = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2MouseJoint.prototype.m_C = null;
	/**
	 * @export
	 * @type {box2d.b2Rot}
	 */
	box2d.b2MouseJoint.prototype.m_qB = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2MouseJoint.prototype.m_lalcB = null;
	/**
	 * @export
	 * @type {box2d.b2Mat22}
	 */
	box2d.b2MouseJoint.prototype.m_K = null;

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2Vec2} target
	 */
	box2d.b2MouseJoint.prototype.SetTarget = function (target) {
	  if (!this.m_bodyB.IsAwake()) {
	    this.m_bodyB.SetAwake(true);
	  }
	  this.m_targetA.Copy(target);
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2MouseJoint.prototype.GetTarget = function (out) {
	  return out.Copy(this.m_targetA);
	};

	/**
	 * @export
	 * @return {void}
	 * @param {number} maxForce
	 */
	box2d.b2MouseJoint.prototype.SetMaxForce = function (maxForce) {
	  this.m_maxForce = maxForce;
	};

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2MouseJoint.prototype.GetMaxForce = function () {
	  return this.m_maxForce;
	};

	/**
	 * @export
	 * @return {void}
	 * @param {number} hz
	 */
	box2d.b2MouseJoint.prototype.SetFrequency = function (hz) {
	  this.m_frequencyHz = hz;
	};

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2MouseJoint.prototype.GetFrequency = function () {
	  return this.m_frequencyHz;
	};

	/**
	 * @export
	 * @return {void}
	 * @param {number} ratio
	 */
	box2d.b2MouseJoint.prototype.SetDampingRatio = function (ratio) {
	  this.m_dampingRatio = ratio;
	};

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2MouseJoint.prototype.GetDampingRatio = function () {
	  return this.m_dampingRatio;
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2SolverData} data
	 */
	box2d.b2MouseJoint.prototype.InitVelocityConstraints = function (data) {
	  this.m_indexB = this.m_bodyB.m_islandIndex;
	  this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter);
	  this.m_invMassB = this.m_bodyB.m_invMass;
	  this.m_invIB = this.m_bodyB.m_invI;

	  /*box2d.b2Vec2&*/
	  var cB = data.positions[this.m_indexB].c;
	  /*float32*/
	  var aB = data.positions[this.m_indexB].a;
	  /*box2d.b2Vec2&*/
	  var vB = data.velocities[this.m_indexB].v;
	  /*float32*/
	  var wB = data.velocities[this.m_indexB].w;

	  var qB = this.m_qB.SetAngle(aB);

	  /*float32*/
	  var mass = this.m_bodyB.GetMass();

	  // Frequency
	  /*float32*/
	  var omega = 2 * box2d.b2_pi * this.m_frequencyHz;

	  // Damping coefficient
	  /*float32*/
	  var d = 2 * mass * this.m_dampingRatio * omega;

	  // Spring stiffness
	  /*float32*/
	  var k = mass * (omega * omega);

	  // magic formulas
	  // gamma has units of inverse mass.
	  // beta has units of inverse time.
	  /*float32*/
	  var h = data.step.dt;
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(d + h * k > box2d.b2_epsilon);
	  }
	  this.m_gamma = h * (d + h * k);
	  if (this.m_gamma !== 0) {
	    this.m_gamma = 1 / this.m_gamma;
	  }
	  this.m_beta = h * k * this.m_gamma;

	  // Compute the effective mass matrix.
	  box2d.b2Sub_V2_V2(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
	  box2d.b2Mul_R_V2(qB, this.m_lalcB, this.m_rB);

	  // K    = [(1/m1 + 1/m2) * eye(2) - skew(r1) * invI1 * skew(r1) - skew(r2) * invI2 * skew(r2)]
	  //      = [1/m1+1/m2     0    ] + invI1 * [r1.y*r1.y -r1.x*r1.y] + invI2 * [r1.y*r1.y -r1.x*r1.y]
	  //        [    0     1/m1+1/m2]           [-r1.x*r1.y r1.x*r1.x]           [-r1.x*r1.y r1.x*r1.x]
	  var K = this.m_K;
	  K.ex.x = this.m_invMassB + this.m_invIB * this.m_rB.y * this.m_rB.y + this.m_gamma;
	  K.ex.y = -this.m_invIB * this.m_rB.x * this.m_rB.y;
	  K.ey.x = K.ex.y;
	  K.ey.y = this.m_invMassB + this.m_invIB * this.m_rB.x * this.m_rB.x + this.m_gamma;

	  K.GetInverse(this.m_mass);

	  //  m_C = cB + m_rB - m_targetA;
	  this.m_C.x = cB.x + this.m_rB.x - this.m_targetA.x;
	  this.m_C.y = cB.y + this.m_rB.y - this.m_targetA.y;
	  //  m_C *= m_beta;
	  this.m_C.SelfMul(this.m_beta);

	  // Cheat with some damping
	  wB *= 0.98;

	  if (data.step.warmStarting) {
	    this.m_impulse.SelfMul(data.step.dtRatio);
	    //    vB += m_invMassB * m_impulse;
	    vB.x += this.m_invMassB * this.m_impulse.x;
	    vB.y += this.m_invMassB * this.m_impulse.y;
	    wB += this.m_invIB * box2d.b2Cross_V2_V2(this.m_rB, this.m_impulse);
	  } else {
	    this.m_impulse.SetZero();
	  }

	  //  data.velocities[this.m_indexB].v = vB;
	  data.velocities[this.m_indexB].w = wB;
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2SolverData} data
	 */
	box2d.b2MouseJoint.prototype.SolveVelocityConstraints = function (data) {
	  /*box2d.b2Vec2&*/
	  var vB = data.velocities[this.m_indexB].v;
	  /*float32*/
	  var wB = data.velocities[this.m_indexB].w;

	  // Cdot = v + cross(w, r)
	  //  b2Vec2 Cdot = vB + b2Cross(wB, m_rB);
	  var Cdot = box2d.b2AddCross_V2_S_V2(vB, wB, this.m_rB, box2d.b2MouseJoint.prototype.SolveVelocityConstraints.s_Cdot);
	  //  b2Vec2 impulse = b2Mul(m_mass, -(Cdot + m_C + m_gamma * m_impulse));
	  var impulse = box2d.b2Mul_M22_V2(this.m_mass, box2d.b2Add_V2_V2(Cdot, box2d.b2Add_V2_V2(this.m_C, box2d.b2Mul_S_V2(this.m_gamma, this.m_impulse, box2d.b2Vec2.s_t0), box2d.b2Vec2.s_t0), box2d.b2Vec2.s_t0).SelfNeg(), box2d.b2MouseJoint.prototype.SolveVelocityConstraints.s_impulse);

	  //  b2Vec2 oldImpulse = m_impulse;
	  var oldImpulse = box2d.b2MouseJoint.prototype.SolveVelocityConstraints.s_oldImpulse.Copy(this.m_impulse);
	  //  m_impulse += impulse;
	  this.m_impulse.SelfAdd(impulse);
	  /*float32*/
	  var maxImpulse = data.step.dt * this.m_maxForce;
	  if (this.m_impulse.LengthSquared() > maxImpulse * maxImpulse) {
	    this.m_impulse.SelfMul(maxImpulse / this.m_impulse.Length());
	  }
	  //  impulse = m_impulse - oldImpulse;
	  box2d.b2Sub_V2_V2(this.m_impulse, oldImpulse, impulse);

	  //  vB += m_invMassB * impulse;
	  vB.SelfMulAdd(this.m_invMassB, impulse);
	  wB += this.m_invIB * box2d.b2Cross_V2_V2(this.m_rB, impulse);

	  //  data.velocities[this.m_indexB].v = vB;
	  data.velocities[this.m_indexB].w = wB;
	};
	box2d.b2MouseJoint.prototype.SolveVelocityConstraints.s_Cdot = new box2d.b2Vec2();
	box2d.b2MouseJoint.prototype.SolveVelocityConstraints.s_impulse = new box2d.b2Vec2();
	box2d.b2MouseJoint.prototype.SolveVelocityConstraints.s_oldImpulse = new box2d.b2Vec2();

	/**
	 * @export
	 * @return {boolean}
	 * @param {box2d.b2SolverData} data
	 */
	box2d.b2MouseJoint.prototype.SolvePositionConstraints = function (data) {
	  return true;
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2MouseJoint.prototype.GetAnchorA = function (out) {
	  return out.Copy(this.m_targetA);
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2MouseJoint.prototype.GetAnchorB = function (out) {
	  return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, out);
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {number} inv_dt
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2MouseJoint.prototype.GetReactionForce = function (inv_dt, out) {
	  return box2d.b2Mul_S_V2(inv_dt, this.m_impulse, out);
	};

	/**
	 * @export
	 * @return {number}
	 * @param {number} inv_dt
	 */
	box2d.b2MouseJoint.prototype.GetReactionTorque = function (inv_dt) {
	  return 0;
	};

	/**
	 * The mouse joint does not support dumping.
	 * @export
	 */
	box2d.b2MouseJoint.prototype.Dump = function () {
	  if (box2d.DEBUG) {
	    box2d.b2Log("Mouse joint dumping is not supported.\n");
	  }
	};

	/**
	 * Implement b2Joint::ShiftOrigin
	 * @export
	 * @return {void}
	 * @param {box2d.b2Vec2} newOrigin
	 */
	box2d.b2MouseJoint.prototype.ShiftOrigin = function (newOrigin) {
	  this.m_targetA.SelfSub(newOrigin);
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(50);

	__webpack_require__(6);

	/**
	 * Prismatic joint definition. This requires defining a line of
	 * motion using an axis and an anchor point. The definition uses
	 * local anchor points and a local axis so that the initial
	 * configuration can violate the constraint slightly. The joint
	 * translation is zero when the local anchor points coincide in
	 * world space. Using local anchors and a local axis helps when
	 * saving and loading a game.
	 * @export
	 * @constructor
	 * @extends {box2d.b2JointDef}
	 */
	box2d.b2PrismaticJointDef = function () {
	  box2d.b2JointDef.call(this, box2d.b2JointType.e_prismaticJoint); // base class constructor

	  this.localAnchorA = new box2d.b2Vec2();
	  this.localAnchorB = new box2d.b2Vec2();
	  this.localAxisA = new box2d.b2Vec2(1, 0);
	}; /*
	    * Copyright (c) 2006-2011 Erin Catto http://www.box2d.org
	    *
	    * This software is provided 'as-is', without any express or implied
	    * warranty.  In no event will the authors be held liable for any damages
	    * arising from the use of this software.
	    * Permission is granted to anyone to use this software for any purpose,
	    * including commercial applications, and to alter it and redistribute it
	    * freely, subject to the following restrictions:
	    * 1. The origin of this software must not be misrepresented; you must not
	    * claim that you wrote the original software. If you use this software
	    * in a product, an acknowledgment in the product documentation would be
	    * appreciated but is not required.
	    * 2. Altered source versions must be plainly marked as such, and must not be
	    * misrepresented as being the original software.
	    * 3. This notice may not be removed or altered from any source distribution.
	    */

	goog.inherits(box2d.b2PrismaticJointDef, box2d.b2JointDef);

	/**
	 * The local anchor point relative to bodyA's origin.
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2PrismaticJointDef.prototype.localAnchorA = null;

	/**
	 * The local anchor point relative to bodyB's origin.
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2PrismaticJointDef.prototype.localAnchorB = null;

	/**
	 * The local translation unit axis in bodyA.
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2PrismaticJointDef.prototype.localAxisA = null;

	/**
	 * The constrained angle between the bodies: bodyB_angle -
	 * bodyA_angle.
	 * @export
	 * @type {number}
	 */
	box2d.b2PrismaticJointDef.prototype.referenceAngle = 0;

	/**
	 * Enable/disable the joint limit.
	 * @export
	 * @type {boolean}
	 */
	box2d.b2PrismaticJointDef.prototype.enableLimit = false;

	/**
	 * The lower translation limit, usually in meters.
	 * @export
	 * @type {number}
	 */
	box2d.b2PrismaticJointDef.prototype.lowerTranslation = 0;

	/**
	 * The upper translation limit, usually in meters.
	 * @export
	 * @type {number}
	 */
	box2d.b2PrismaticJointDef.prototype.upperTranslation = 0;

	/**
	 * Enable/disable the joint motor.
	 * @export
	 * @type {boolean}
	 */
	box2d.b2PrismaticJointDef.prototype.enableMotor = false;

	/**
	 * The maximum motor torque, usually in N-m.
	 * @export
	 * @type {number}
	 */
	box2d.b2PrismaticJointDef.prototype.maxMotorForce = 0;

	/**
	 * The desired motor speed in radians per second.
	 * @export
	 * @type {number}
	 */
	box2d.b2PrismaticJointDef.prototype.motorSpeed = 0;

	/**
	 * Initialize the bodies, anchors, axis, and reference angle
	 * using the world anchor and unit world axis.
	 * @export
	 * @return {void}
	 * @param {box2d.b2Body} bA
	 * @param {box2d.b2Body} bB
	 * @param {box2d.b2Vec2} anchor
	 * @param {box2d.b2Vec2} axis
	 */
	box2d.b2PrismaticJointDef.prototype.Initialize = function (bA, bB, anchor, axis) {
	  this.bodyA = bA;
	  this.bodyB = bB;
	  this.bodyA.GetLocalPoint(anchor, this.localAnchorA);
	  this.bodyB.GetLocalPoint(anchor, this.localAnchorB);
	  this.bodyA.GetLocalVector(axis, this.localAxisA);
	  this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle();
	};

	/**
	 * A prismatic joint. This joint provides one degree of freedom:
	 * translation along an axis fixed in bodyA. Relative rotation
	 * is prevented. You can use a joint limit to restrict the range
	 * of motion and a joint motor to drive the motion or to model
	 * joint friction.
	 * @export
	 * @constructor
	 * @extends {box2d.b2Joint}
	 * @param {box2d.b2PrismaticJointDef} def
	 */
	box2d.b2PrismaticJoint = function (def) {
	  box2d.b2Joint.call(this, def); // base class constructor

	  this.m_localAnchorA = def.localAnchorA.Clone();
	  this.m_localAnchorB = def.localAnchorB.Clone();
	  this.m_localXAxisA = def.localAxisA.Clone().SelfNormalize();
	  this.m_localYAxisA = box2d.b2Cross_S_V2(1.0, this.m_localXAxisA, new box2d.b2Vec2());
	  this.m_referenceAngle = def.referenceAngle;
	  this.m_impulse = new box2d.b2Vec3(0, 0, 0);
	  this.m_lowerTranslation = def.lowerTranslation;
	  this.m_upperTranslation = def.upperTranslation;
	  this.m_maxMotorForce = def.maxMotorForce;
	  this.m_motorSpeed = def.motorSpeed;
	  this.m_enableLimit = def.enableLimit;
	  this.m_enableMotor = def.enableMotor;

	  this.m_localCenterA = new box2d.b2Vec2();
	  this.m_localCenterB = new box2d.b2Vec2();
	  this.m_axis = new box2d.b2Vec2(0, 0);
	  this.m_perp = new box2d.b2Vec2(0, 0);
	  this.m_K = new box2d.b2Mat33();
	  this.m_K3 = new box2d.b2Mat33();
	  this.m_K2 = new box2d.b2Mat22();

	  this.m_qA = new box2d.b2Rot();
	  this.m_qB = new box2d.b2Rot();
	  this.m_lalcA = new box2d.b2Vec2();
	  this.m_lalcB = new box2d.b2Vec2();
	  this.m_rA = new box2d.b2Vec2();
	  this.m_rB = new box2d.b2Vec2();
	};

	goog.inherits(box2d.b2PrismaticJoint, box2d.b2Joint);

	// Solver shared
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2PrismaticJoint.prototype.m_localAnchorA = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2PrismaticJoint.prototype.m_localAnchorB = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2PrismaticJoint.prototype.m_localXAxisA = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2PrismaticJoint.prototype.m_localYAxisA = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2PrismaticJoint.prototype.m_referenceAngle = 0;
	/**
	 * @export
	 * @type {box2d.b2Vec3}
	 */
	box2d.b2PrismaticJoint.prototype.m_impulse = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2PrismaticJoint.prototype.m_motorImpulse = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2PrismaticJoint.prototype.m_lowerTranslation = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2PrismaticJoint.prototype.m_upperTranslation = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2PrismaticJoint.prototype.m_maxMotorForce = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2PrismaticJoint.prototype.m_motorSpeed = 0;
	/**
	 * @export
	 * @type {boolean}
	 */
	box2d.b2PrismaticJoint.prototype.m_enableLimit = false;
	/**
	 * @export
	 * @type {boolean}
	 */
	box2d.b2PrismaticJoint.prototype.m_enableMotor = false;
	/**
	 * @export
	 * @type {box2d.b2LimitState}
	 */
	box2d.b2PrismaticJoint.prototype.m_limitState = box2d.b2LimitState.e_inactiveLimit;

	// Solver temp
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2PrismaticJoint.prototype.m_indexA = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2PrismaticJoint.prototype.m_indexB = 0;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2PrismaticJoint.prototype.m_localCenterA = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2PrismaticJoint.prototype.m_localCenterB = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2PrismaticJoint.prototype.m_invMassA = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2PrismaticJoint.prototype.m_invMassB = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2PrismaticJoint.prototype.m_invIA = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2PrismaticJoint.prototype.m_invIB = 0;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2PrismaticJoint.prototype.m_axis = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2PrismaticJoint.prototype.m_perp = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2PrismaticJoint.prototype.m_s1 = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2PrismaticJoint.prototype.m_s2 = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2PrismaticJoint.prototype.m_a1 = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2PrismaticJoint.prototype.m_a2 = 0;
	/**
	 * @export
	 * @type {box2d.b2Mat33}
	 */
	box2d.b2PrismaticJoint.prototype.m_K = null;
	/**
	 * @export
	 * @type {box2d.b2Mat33}
	 */
	box2d.b2PrismaticJoint.prototype.m_K3 = null;
	/**
	 * @export
	 * @type {box2d.b2Mat22}
	 */
	box2d.b2PrismaticJoint.prototype.m_K2 = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2PrismaticJoint.prototype.m_motorMass = 0;

	/**
	 * @export
	 * @type {box2d.b2Rot}
	 */
	box2d.b2PrismaticJoint.prototype.m_qA = null;
	/**
	 * @export
	 * @type {box2d.b2Rot}
	 */
	box2d.b2PrismaticJoint.prototype.m_qB = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2PrismaticJoint.prototype.m_lalcA = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2PrismaticJoint.prototype.m_lalcB = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2PrismaticJoint.prototype.m_rA = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2PrismaticJoint.prototype.m_rB = null;

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2SolverData} data
	 */
	box2d.b2PrismaticJoint.prototype.InitVelocityConstraints = function (data) {
	  this.m_indexA = this.m_bodyA.m_islandIndex;
	  this.m_indexB = this.m_bodyB.m_islandIndex;
	  this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter);
	  this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter);
	  this.m_invMassA = this.m_bodyA.m_invMass;
	  this.m_invMassB = this.m_bodyB.m_invMass;
	  this.m_invIA = this.m_bodyA.m_invI;
	  this.m_invIB = this.m_bodyB.m_invI;

	  /*box2d.b2Vec2&*/
	  var cA = data.positions[this.m_indexA].c;
	  /*float32*/
	  var aA = data.positions[this.m_indexA].a;
	  /*box2d.b2Vec2&*/
	  var vA = data.velocities[this.m_indexA].v;
	  /*float32*/
	  var wA = data.velocities[this.m_indexA].w;

	  /*box2d.b2Vec2&*/
	  var cB = data.positions[this.m_indexB].c;
	  /*float32*/
	  var aB = data.positions[this.m_indexB].a;
	  /*box2d.b2Vec2&*/
	  var vB = data.velocities[this.m_indexB].v;
	  /*float32*/
	  var wB = data.velocities[this.m_indexB].w;

	  /*box2d.b2Rot*/
	  var qA = this.m_qA.SetAngle(aA),
	      qB = this.m_qB.SetAngle(aB);

	  // Compute the effective masses.
	  //  b2Vec2 rA = b2Mul(qA, m_localAnchorA - m_localCenterA);
	  box2d.b2Sub_V2_V2(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
	  var rA = box2d.b2Mul_R_V2(qA, this.m_lalcA, this.m_rA);
	  //  b2Vec2 rB = b2Mul(qB, m_localAnchorB - m_localCenterB);
	  box2d.b2Sub_V2_V2(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
	  var rB = box2d.b2Mul_R_V2(qB, this.m_lalcB, this.m_rB);
	  //  b2Vec2 d = (cB - cA) + rB - rA;
	  var d = box2d.b2Add_V2_V2(box2d.b2Sub_V2_V2(cB, cA, box2d.b2Vec2.s_t0), box2d.b2Sub_V2_V2(rB, rA, box2d.b2Vec2.s_t1), box2d.b2PrismaticJoint.prototype.InitVelocityConstraints.s_d);

	  /*float32*/
	  var mA = this.m_invMassA,
	      mB = this.m_invMassB;
	  /*float32*/
	  var iA = this.m_invIA,
	      iB = this.m_invIB;

	  // Compute motor Jacobian and effective mass.
	  {
	    //    m_axis = b2Mul(qA, m_localXAxisA);
	    box2d.b2Mul_R_V2(qA, this.m_localXAxisA, this.m_axis);
	    //    m_a1 = b2Cross(d + rA, m_axis);
	    this.m_a1 = box2d.b2Cross_V2_V2(box2d.b2Add_V2_V2(d, rA, box2d.b2Vec2.s_t0), this.m_axis);
	    //    m_a2 = b2Cross(rB, m_axis);
	    this.m_a2 = box2d.b2Cross_V2_V2(rB, this.m_axis);

	    this.m_motorMass = mA + mB + iA * this.m_a1 * this.m_a1 + iB * this.m_a2 * this.m_a2;
	    if (this.m_motorMass > 0) {
	      this.m_motorMass = 1 / this.m_motorMass;
	    }
	  }

	  // Prismatic constraint.
	  {
	    //    m_perp = b2Mul(qA, m_localYAxisA);
	    box2d.b2Mul_R_V2(qA, this.m_localYAxisA, this.m_perp);

	    //    m_s1 = b2Cross(d + rA, m_perp);
	    this.m_s1 = box2d.b2Cross_V2_V2(box2d.b2Add_V2_V2(d, rA, box2d.b2Vec2.s_t0), this.m_perp);
	    //    m_s2 = b2Cross(rB, m_perp);
	    this.m_s2 = box2d.b2Cross_V2_V2(rB, this.m_perp);

	    //    float32 s1test;
	    //    s1test = b2Cross(rA, m_perp);

	    //    float32 k11 = mA + mB + iA * m_s1 * m_s1 + iB * m_s2 * m_s2;
	    this.m_K.ex.x = mA + mB + iA * this.m_s1 * this.m_s1 + iB * this.m_s2 * this.m_s2;
	    //    float32 k12 = iA * m_s1 + iB * m_s2;
	    this.m_K.ex.y = iA * this.m_s1 + iB * this.m_s2;
	    //    float32 k13 = iA * m_s1 * m_a1 + iB * m_s2 * m_a2;
	    this.m_K.ex.z = iA * this.m_s1 * this.m_a1 + iB * this.m_s2 * this.m_a2;
	    this.m_K.ey.x = this.m_K.ex.y;
	    //    float32 k22 = iA + iB;
	    this.m_K.ey.y = iA + iB;
	    if (this.m_K.ey.y === 0) {
	      // For bodies with fixed rotation.
	      this.m_K.ey.y = 1;
	    }
	    //    float32 k23 = iA * m_a1 + iB * m_a2;
	    this.m_K.ey.z = iA * this.m_a1 + iB * this.m_a2;
	    this.m_K.ez.x = this.m_K.ex.z;
	    this.m_K.ez.y = this.m_K.ey.z;
	    //    float32 k33 = mA + mB + iA * m_a1 * m_a1 + iB * m_a2 * m_a2;
	    this.m_K.ez.z = mA + mB + iA * this.m_a1 * this.m_a1 + iB * this.m_a2 * this.m_a2;

	    //    m_K.ex.Set(k11, k12, k13);
	    //    m_K.ey.Set(k12, k22, k23);
	    //    m_K.ez.Set(k13, k23, k33);
	  }

	  // Compute motor and limit terms.
	  if (this.m_enableLimit) {
	    //    float32 jointTranslation = b2Dot(m_axis, d);
	    var jointTranslation = box2d.b2Dot_V2_V2(this.m_axis, d);
	    if (box2d.b2Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * box2d.b2_linearSlop) {
	      this.m_limitState = box2d.b2LimitState.e_equalLimits;
	    } else if (jointTranslation <= this.m_lowerTranslation) {
	      if (this.m_limitState !== box2d.b2LimitState.e_atLowerLimit) {
	        this.m_limitState = box2d.b2LimitState.e_atLowerLimit;
	        this.m_impulse.z = 0;
	      }
	    } else if (jointTranslation >= this.m_upperTranslation) {
	      if (this.m_limitState !== box2d.b2LimitState.e_atUpperLimit) {
	        this.m_limitState = box2d.b2LimitState.e_atUpperLimit;
	        this.m_impulse.z = 0;
	      }
	    } else {
	      this.m_limitState = box2d.b2LimitState.e_inactiveLimit;
	      this.m_impulse.z = 0;
	    }
	  } else {
	    this.m_limitState = box2d.b2LimitState.e_inactiveLimit;
	    this.m_impulse.z = 0;
	  }

	  if (!this.m_enableMotor) {
	    this.m_motorImpulse = 0;
	  }

	  if (data.step.warmStarting) {
	    // Account for variable time step.
	    //    m_impulse *= data.step.dtRatio;
	    this.m_impulse.SelfMulScalar(data.step.dtRatio);
	    this.m_motorImpulse *= data.step.dtRatio;

	    //    b2Vec2 P = m_impulse.x * m_perp + (m_motorImpulse + m_impulse.z) * m_axis;
	    var P = box2d.b2Add_V2_V2(box2d.b2Mul_S_V2(this.m_impulse.x, this.m_perp, box2d.b2Vec2.s_t0), box2d.b2Mul_S_V2(this.m_motorImpulse + this.m_impulse.z, this.m_axis, box2d.b2Vec2.s_t1), box2d.b2PrismaticJoint.prototype.InitVelocityConstraints.s_P);
	    //    float32 LA = m_impulse.x * m_s1 + m_impulse.y + (m_motorImpulse + m_impulse.z) * m_a1;
	    var LA = this.m_impulse.x * this.m_s1 + this.m_impulse.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_a1;
	    //    float32 LB = m_impulse.x * m_s2 + m_impulse.y + (m_motorImpulse + m_impulse.z) * m_a2;
	    var LB = this.m_impulse.x * this.m_s2 + this.m_impulse.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_a2;

	    //    vA -= mA * P;
	    vA.SelfMulSub(mA, P);
	    wA -= iA * LA;

	    //    vB += mB * P;
	    vB.SelfMulAdd(mB, P);
	    wB += iB * LB;
	  } else {
	    this.m_impulse.SetZero();
	    this.m_motorImpulse = 0;
	  }

	  //  data.velocities[this.m_indexA].v = vA;
	  data.velocities[this.m_indexA].w = wA;
	  //  data.velocities[this.m_indexB].v = vB;
	  data.velocities[this.m_indexB].w = wB;
	};
	box2d.b2PrismaticJoint.prototype.InitVelocityConstraints.s_d = new box2d.b2Vec2();
	box2d.b2PrismaticJoint.prototype.InitVelocityConstraints.s_P = new box2d.b2Vec2();

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2SolverData} data
	 */
	box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints = function (data) {
	  /*box2d.b2Vec2&*/
	  var vA = data.velocities[this.m_indexA].v;
	  /*float32*/
	  var wA = data.velocities[this.m_indexA].w;
	  /*box2d.b2Vec2&*/
	  var vB = data.velocities[this.m_indexB].v;
	  /*float32*/
	  var wB = data.velocities[this.m_indexB].w;

	  /*float32*/
	  var mA = this.m_invMassA,
	      mB = this.m_invMassB;
	  /*float32*/
	  var iA = this.m_invIA,
	      iB = this.m_invIB;

	  // Solve linear motor constraint.
	  if (this.m_enableMotor && this.m_limitState !== box2d.b2LimitState.e_equalLimits) {
	    //    float32 Cdot = b2Dot(m_axis, vB - vA) + m_a2 * wB - m_a1 * wA;
	    var Cdot = box2d.b2Dot_V2_V2(this.m_axis, box2d.b2Sub_V2_V2(vB, vA, box2d.b2Vec2.s_t0)) + this.m_a2 * wB - this.m_a1 * wA;
	    var impulse = this.m_motorMass * (this.m_motorSpeed - Cdot);
	    var oldImpulse = this.m_motorImpulse;
	    var maxImpulse = data.step.dt * this.m_maxMotorForce;
	    this.m_motorImpulse = box2d.b2Clamp(this.m_motorImpulse + impulse, -maxImpulse, maxImpulse);
	    impulse = this.m_motorImpulse - oldImpulse;

	    //    b2Vec2 P = impulse * m_axis;
	    var P = box2d.b2Mul_S_V2(impulse, this.m_axis, box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_P);
	    var LA = impulse * this.m_a1;
	    var LB = impulse * this.m_a2;

	    //    vA -= mA * P;
	    vA.SelfMulSub(mA, P);
	    wA -= iA * LA;

	    //    vB += mB * P;
	    vB.SelfMulAdd(mB, P);
	    wB += iB * LB;
	  }

	  //  b2Vec2 Cdot1;
	  //  Cdot1.x = b2Dot(m_perp, vB - vA) + m_s2 * wB - m_s1 * wA;
	  var Cdot1_x = box2d.b2Dot_V2_V2(this.m_perp, box2d.b2Sub_V2_V2(vB, vA, box2d.b2Vec2.s_t0)) + this.m_s2 * wB - this.m_s1 * wA;
	  //  Cdot1.y = wB - wA;
	  var Cdot1_y = wB - wA;

	  if (this.m_enableLimit && this.m_limitState !== box2d.b2LimitState.e_inactiveLimit) {
	    // Solve prismatic and limit constraint in block form.
	    //    float32 Cdot2;
	    //    Cdot2 = b2Dot(m_axis, vB - vA) + m_a2 * wB - m_a1 * wA;
	    var Cdot2 = box2d.b2Dot_V2_V2(this.m_axis, box2d.b2Sub_V2_V2(vB, vA, box2d.b2Vec2.s_t0)) + this.m_a2 * wB - this.m_a1 * wA;
	    //    box2d.b2Vec3 Cdot(Cdot1.x, Cdot1.y, Cdot2);

	    //    box2d.b2Vec3 f1 = m_impulse;
	    var f1 = box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_f1.Copy(this.m_impulse);
	    //    box2d.b2Vec3 df =  m_K.Solve33(-Cdot);
	    var df = this.m_K.Solve33(-Cdot1_x, -Cdot1_y, -Cdot2, box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_df3);
	    //    m_impulse += df;
	    this.m_impulse.SelfAdd(df);

	    if (this.m_limitState === box2d.b2LimitState.e_atLowerLimit) {
	      this.m_impulse.z = box2d.b2Max(this.m_impulse.z, 0);
	    } else if (this.m_limitState === box2d.b2LimitState.e_atUpperLimit) {
	      this.m_impulse.z = box2d.b2Min(this.m_impulse.z, 0);
	    }

	    // f2(1:2) = invK(1:2,1:2) * (-Cdot(1:2) - K(1:2,3) * (f2(3) - f1(3))) + f1(1:2)
	    //    b2Vec2 b = -Cdot1 - (m_impulse.z - f1.z) * box2d.b2Vec2(m_K.ez.x, m_K.ez.y);
	    var b_x = -Cdot1_x - (this.m_impulse.z - f1.z) * this.m_K.ez.x;
	    var b_y = -Cdot1_y - (this.m_impulse.z - f1.z) * this.m_K.ez.y;
	    //    b2Vec2 f2r = m_K.Solve22(b) + box2d.b2Vec2(f1.x, f1.y);
	    var f2r = this.m_K.Solve22(b_x, b_y, box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_f2r);
	    f2r.x += f1.x;
	    f2r.y += f1.y;
	    //    m_impulse.x = f2r.x;
	    this.m_impulse.x = f2r.x;
	    //    m_impulse.y = f2r.y;
	    this.m_impulse.y = f2r.y;

	    //    df = m_impulse - f1;
	    df.x = this.m_impulse.x - f1.x;
	    df.y = this.m_impulse.y - f1.y;
	    df.z = this.m_impulse.z - f1.z;

	    //    b2Vec2 P = df.x * m_perp + df.z * m_axis;
	    var P = box2d.b2Add_V2_V2(box2d.b2Mul_S_V2(df.x, this.m_perp, box2d.b2Vec2.s_t0), box2d.b2Mul_S_V2(df.z, this.m_axis, box2d.b2Vec2.s_t1), box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_P);
	    //    float32 LA = df.x * m_s1 + df.y + df.z * m_a1;
	    var LA = df.x * this.m_s1 + df.y + df.z * this.m_a1;
	    //    float32 LB = df.x * m_s2 + df.y + df.z * m_a2;
	    var LB = df.x * this.m_s2 + df.y + df.z * this.m_a2;

	    //    vA -= mA * P;
	    vA.SelfMulSub(mA, P);
	    wA -= iA * LA;

	    //    vB += mB * P;
	    vB.SelfMulAdd(mB, P);
	    wB += iB * LB;
	  } else {
	    // Limit is inactive, just solve the prismatic constraint in block form.
	    //    b2Vec2 df = m_K.Solve22(-Cdot1);
	    var df = this.m_K.Solve22(-Cdot1_x, -Cdot1_y, box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_df2);
	    this.m_impulse.x += df.x;
	    this.m_impulse.y += df.y;

	    //    b2Vec2 P = df.x * m_perp;
	    var P = box2d.b2Mul_S_V2(df.x, this.m_perp, box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_P);
	    //    float32 LA = df.x * m_s1 + df.y;
	    var LA = df.x * this.m_s1 + df.y;
	    //    float32 LB = df.x * m_s2 + df.y;
	    var LB = df.x * this.m_s2 + df.y;

	    //    vA -= mA * P;
	    vA.SelfMulSub(mA, P);
	    wA -= iA * LA;

	    //    vB += mB * P;
	    vB.SelfMulAdd(mB, P);
	    wB += iB * LB;
	  }

	  //  data.velocities[this.m_indexA].v = vA;
	  data.velocities[this.m_indexA].w = wA;
	  //  data.velocities[this.m_indexB].v = vB;
	  data.velocities[this.m_indexB].w = wB;
	};
	box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_P = new box2d.b2Vec2();
	box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_f2r = new box2d.b2Vec2();
	box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_f1 = new box2d.b2Vec3();
	box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_df3 = new box2d.b2Vec3();
	box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_df2 = new box2d.b2Vec2();

	/**
	 * @export
	 * @return {boolean}
	 * @param {box2d.b2SolverData} data
	 */
	box2d.b2PrismaticJoint.prototype.SolvePositionConstraints = function (data) {
	  /*box2d.b2Vec2&*/
	  var cA = data.positions[this.m_indexA].c;
	  /*float32*/
	  var aA = data.positions[this.m_indexA].a;
	  /*box2d.b2Vec2&*/
	  var cB = data.positions[this.m_indexB].c;
	  /*float32*/
	  var aB = data.positions[this.m_indexB].a;

	  /*box2d.b2Rot*/
	  var qA = this.m_qA.SetAngle(aA),
	      qB = this.m_qB.SetAngle(aB);

	  /*float32*/
	  var mA = this.m_invMassA,
	      mB = this.m_invMassB;
	  /*float32*/
	  var iA = this.m_invIA,
	      iB = this.m_invIB;

	  //  b2Vec2 rA = b2Mul(qA, m_localAnchorA - m_localCenterA);
	  var rA = box2d.b2Mul_R_V2(qA, this.m_lalcA, this.m_rA);
	  //  b2Vec2 rB = b2Mul(qB, m_localAnchorB - m_localCenterB);
	  var rB = box2d.b2Mul_R_V2(qB, this.m_lalcB, this.m_rB);
	  //  b2Vec2 d = cB + rB - cA - rA;
	  var d = box2d.b2Sub_V2_V2(box2d.b2Add_V2_V2(cB, rB, box2d.b2Vec2.s_t0), box2d.b2Add_V2_V2(cA, rA, box2d.b2Vec2.s_t1), box2d.b2PrismaticJoint.prototype.SolvePositionConstraints.s_d);

	  //  b2Vec2 axis = b2Mul(qA, m_localXAxisA);
	  var axis = box2d.b2Mul_R_V2(qA, this.m_localXAxisA, this.m_axis);
	  //  float32 a1 = b2Cross(d + rA, axis);
	  var a1 = box2d.b2Cross_V2_V2(box2d.b2Add_V2_V2(d, rA, box2d.b2Vec2.s_t0), axis);
	  //  float32 a2 = b2Cross(rB, axis);
	  var a2 = box2d.b2Cross_V2_V2(rB, axis);
	  //  b2Vec2 perp = b2Mul(qA, m_localYAxisA);
	  var perp = box2d.b2Mul_R_V2(qA, this.m_localYAxisA, this.m_perp);

	  //  float32 s1 = b2Cross(d + rA, perp);
	  var s1 = box2d.b2Cross_V2_V2(box2d.b2Add_V2_V2(d, rA, box2d.b2Vec2.s_t0), perp);
	  //  float32 s2 = b2Cross(rB, perp);
	  var s2 = box2d.b2Cross_V2_V2(rB, perp);

	  //  box2d.b2Vec3 impulse;
	  var impulse = box2d.b2PrismaticJoint.prototype.SolvePositionConstraints.s_impulse;
	  //  b2Vec2 C1;
	  //  C1.x = b2Dot(perp, d);
	  var C1_x = box2d.b2Dot_V2_V2(perp, d);
	  //  C1.y = aB - aA - m_referenceAngle;
	  var C1_y = aB - aA - this.m_referenceAngle;

	  var linearError = box2d.b2Abs(C1_x);
	  var angularError = box2d.b2Abs(C1_y);

	  var active = false;
	  var C2 = 0;
	  if (this.m_enableLimit) {
	    //    float32 translation = b2Dot(axis, d);
	    var translation = box2d.b2Dot_V2_V2(axis, d);
	    if (box2d.b2Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * box2d.b2_linearSlop) {
	      // Prevent large angular corrections
	      C2 = box2d.b2Clamp(translation, -box2d.b2_maxLinearCorrection, box2d.b2_maxLinearCorrection);
	      linearError = box2d.b2Max(linearError, box2d.b2Abs(translation));
	      active = true;
	    } else if (translation <= this.m_lowerTranslation) {
	      // Prevent large linear corrections and allow some slop.
	      C2 = box2d.b2Clamp(translation - this.m_lowerTranslation + box2d.b2_linearSlop, -box2d.b2_maxLinearCorrection, 0);
	      linearError = box2d.b2Max(linearError, this.m_lowerTranslation - translation);
	      active = true;
	    } else if (translation >= this.m_upperTranslation) {
	      // Prevent large linear corrections and allow some slop.
	      C2 = box2d.b2Clamp(translation - this.m_upperTranslation - box2d.b2_linearSlop, 0, box2d.b2_maxLinearCorrection);
	      linearError = box2d.b2Max(linearError, translation - this.m_upperTranslation);
	      active = true;
	    }
	  }

	  if (active) {
	    //    float32 k11 = mA + mB + iA * s1 * s1 + iB * s2 * s2;
	    var k11 = mA + mB + iA * s1 * s1 + iB * s2 * s2;
	    //    float32 k12 = iA * s1 + iB * s2;
	    var k12 = iA * s1 + iB * s2;
	    //    float32 k13 = iA * s1 * a1 + iB * s2 * a2;
	    var k13 = iA * s1 * a1 + iB * s2 * a2;
	    //    float32 k22 = iA + iB;
	    var k22 = iA + iB;
	    if (k22 === 0) {
	      // For fixed rotation
	      k22 = 1;
	    }
	    //    float32 k23 = iA * a1 + iB * a2;
	    var k23 = iA * a1 + iB * a2;
	    //    float32 k33 = mA + mB + iA * a1 * a1 + iB * a2 * a2;
	    var k33 = mA + mB + iA * a1 * a1 + iB * a2 * a2;

	    //    box2d.b2Mat33 K;
	    var K = this.m_K3;
	    K.ex.Set(k11, k12, k13);
	    K.ey.Set(k12, k22, k23);
	    K.ez.Set(k13, k23, k33);

	    //    box2d.b2Vec3 C;
	    //    C.x = C1.x;
	    //    C.y = C1.y;
	    //    C.z = C2;

	    //    impulse = K.Solve33(-C);
	    impulse = K.Solve33(-C1_x, -C1_y, -C2, impulse);
	  } else {
	    //    float32 k11 = mA + mB + iA * s1 * s1 + iB * s2 * s2;
	    var k11 = mA + mB + iA * s1 * s1 + iB * s2 * s2;
	    //    float32 k12 = iA * s1 + iB * s2;
	    var k12 = iA * s1 + iB * s2;
	    //    float32 k22 = iA + iB;
	    var k22 = iA + iB;
	    if (k22 === 0) {
	      k22 = 1;
	    }

	    //    box2d.b2Mat22 K;
	    var K2 = this.m_K2;
	    //    K.ex.Set(k11, k12);
	    K2.ex.Set(k11, k12);
	    //    K.ey.Set(k12, k22);
	    K2.ey.Set(k12, k22);

	    //    b2Vec2 impulse1 = K.Solve(-C1);
	    var impulse1 = K2.Solve(-C1_x, -C1_y, box2d.b2PrismaticJoint.prototype.SolvePositionConstraints.s_impulse1);
	    impulse.x = impulse1.x;
	    impulse.y = impulse1.y;
	    impulse.z = 0;
	  }

	  //  b2Vec2 P = impulse.x * perp + impulse.z * axis;
	  var P = box2d.b2Add_V2_V2(box2d.b2Mul_S_V2(impulse.x, perp, box2d.b2Vec2.s_t0), box2d.b2Mul_S_V2(impulse.z, axis, box2d.b2Vec2.s_t1), box2d.b2PrismaticJoint.prototype.SolvePositionConstraints.s_P);
	  //  float32 LA = impulse.x * s1 + impulse.y + impulse.z * a1;
	  var LA = impulse.x * s1 + impulse.y + impulse.z * a1;
	  //  float32 LB = impulse.x * s2 + impulse.y + impulse.z * a2;
	  var LB = impulse.x * s2 + impulse.y + impulse.z * a2;

	  //  cA -= mA * P;
	  cA.SelfMulSub(mA, P);
	  aA -= iA * LA;
	  //  cB += mB * P;
	  cB.SelfMulAdd(mB, P);
	  aB += iB * LB;

	  //  data.positions[this.m_indexA].c = cA;
	  data.positions[this.m_indexA].a = aA;
	  //  data.positions[this.m_indexB].c = cB;
	  data.positions[this.m_indexB].a = aB;

	  return linearError <= box2d.b2_linearSlop && angularError <= box2d.b2_angularSlop;
	};
	box2d.b2PrismaticJoint.prototype.SolvePositionConstraints.s_d = new box2d.b2Vec2();
	box2d.b2PrismaticJoint.prototype.SolvePositionConstraints.s_impulse = new box2d.b2Vec3();
	box2d.b2PrismaticJoint.prototype.SolvePositionConstraints.s_impulse1 = new box2d.b2Vec2();
	box2d.b2PrismaticJoint.prototype.SolvePositionConstraints.s_P = new box2d.b2Vec2();

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2PrismaticJoint.prototype.GetAnchorA = function (out) {
	  return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, out);
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2PrismaticJoint.prototype.GetAnchorB = function (out) {
	  return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, out);
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {number} inv_dt
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2PrismaticJoint.prototype.GetReactionForce = function (inv_dt, out) {
	  //  return inv_dt * (m_impulse.x * m_perp + (m_motorImpulse + m_impulse.z) * m_axis);
	  return out.Set(inv_dt * (this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.x), inv_dt * (this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.y));
	};

	/**
	 * @export
	 * @return {number}
	 * @param {number} inv_dt
	 */
	box2d.b2PrismaticJoint.prototype.GetReactionTorque = function (inv_dt) {
	  return inv_dt * this.m_impulse.y;
	};

	/**
	 * The local anchor point relative to bodyA's origin.
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2PrismaticJoint.prototype.GetLocalAnchorA = function (out) {
	  return out.Copy(this.m_localAnchorA);
	};

	/**
	 * The local anchor point relative to bodyB's origin.
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2PrismaticJoint.prototype.GetLocalAnchorB = function (out) {
	  return out.Copy(this.m_localAnchorB);
	};

	/**
	 * The local joint axis relative to bodyA.
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2PrismaticJoint.prototype.GetLocalAxisA = function (out) {
	  return out.Copy(this.m_localXAxisA);
	};

	/**
	 * Get the reference angle.
	 * @export
	 * @return {number}
	 */
	box2d.b2PrismaticJoint.prototype.GetReferenceAngle = function () {
	  return this.m_referenceAngle;
	};

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2PrismaticJoint.prototype.GetJointTranslation = function () {
	  //  b2Vec2 pA = m_bodyA.GetWorldPoint(m_localAnchorA);
	  var pA = this.m_bodyA.GetWorldPoint(this.m_localAnchorA, box2d.b2PrismaticJoint.prototype.GetJointTranslation.s_pA);
	  //  b2Vec2 pB = m_bodyB.GetWorldPoint(m_localAnchorB);
	  var pB = this.m_bodyB.GetWorldPoint(this.m_localAnchorB, box2d.b2PrismaticJoint.prototype.GetJointTranslation.s_pB);
	  //  b2Vec2 d = pB - pA;
	  var d = box2d.b2Sub_V2_V2(pB, pA, box2d.b2PrismaticJoint.prototype.GetJointTranslation.s_d);
	  //  b2Vec2 axis = m_bodyA.GetWorldVector(m_localXAxisA);
	  var axis = this.m_bodyA.GetWorldVector(this.m_localXAxisA, box2d.b2PrismaticJoint.prototype.GetJointTranslation.s_axis);

	  //  float32 translation = b2Dot(d, axis);
	  var translation = box2d.b2Dot_V2_V2(d, axis);
	  return translation;
	};
	box2d.b2PrismaticJoint.prototype.GetJointTranslation.s_pA = new box2d.b2Vec2();
	box2d.b2PrismaticJoint.prototype.GetJointTranslation.s_pB = new box2d.b2Vec2();
	box2d.b2PrismaticJoint.prototype.GetJointTranslation.s_d = new box2d.b2Vec2();
	box2d.b2PrismaticJoint.prototype.GetJointTranslation.s_axis = new box2d.b2Vec2();

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2PrismaticJoint.prototype.GetJointSpeed = function () {
	  /*box2d.b2Body*/
	  var bA = this.m_bodyA;
	  /*box2d.b2Body*/
	  var bB = this.m_bodyB;

	  //  b2Vec2 rA = b2Mul(bA->m_xf.q, m_localAnchorA - bA->m_sweep.localCenter);
	  box2d.b2Sub_V2_V2(this.m_localAnchorA, bA.m_sweep.localCenter, this.m_lalcA);
	  var rA = box2d.b2Mul_R_V2(bA.m_xf.q, this.m_lalcA, this.m_rA);
	  //  b2Vec2 rB = b2Mul(bB->m_xf.q, m_localAnchorB - bB->m_sweep.localCenter);
	  box2d.b2Sub_V2_V2(this.m_localAnchorB, bB.m_sweep.localCenter, this.m_lalcB);
	  var rB = box2d.b2Mul_R_V2(bB.m_xf.q, this.m_lalcB, this.m_rB);
	  //  b2Vec2 pA = bA->m_sweep.c + rA;
	  var pA = box2d.b2Add_V2_V2(bA.m_sweep.c, rA, box2d.b2Vec2.s_t0); // pA uses s_t0
	  //  b2Vec2 pB = bB->m_sweep.c + rB;
	  var pB = box2d.b2Add_V2_V2(bB.m_sweep.c, rB, box2d.b2Vec2.s_t1); // pB uses s_t1
	  //  b2Vec2 d = pB - pA;
	  var d = box2d.b2Sub_V2_V2(pB, pA, box2d.b2Vec2.s_t2); // d uses s_t2
	  //  b2Vec2 axis = b2Mul(bA.m_xf.q, m_localXAxisA);
	  var axis = bA.GetWorldVector(this.m_localXAxisA, this.m_axis);

	  var vA = bA.m_linearVelocity;
	  var vB = bB.m_linearVelocity;
	  var wA = bA.m_angularVelocity;
	  var wB = bB.m_angularVelocity;

	  //  float32 speed = b2Dot(d, b2Cross(wA, axis)) + b2Dot(axis, vB + b2Cross(wB, rB) - vA - b2Cross(wA, rA));
	  var speed = box2d.b2Dot_V2_V2(d, box2d.b2Cross_S_V2(wA, axis, box2d.b2Vec2.s_t0)) + box2d.b2Dot_V2_V2(axis, box2d.b2Sub_V2_V2(box2d.b2AddCross_V2_S_V2(vB, wB, rB, box2d.b2Vec2.s_t0), box2d.b2AddCross_V2_S_V2(vA, wA, rA, box2d.b2Vec2.s_t1), box2d.b2Vec2.s_t0));
	  return speed;
	};

	/**
	 * @export
	 * @return {boolean}
	 */
	box2d.b2PrismaticJoint.prototype.IsLimitEnabled = function () {
	  return this.m_enableLimit;
	};

	/**
	 * @export
	 * @return {void}
	 * @param {boolean} flag
	 */
	box2d.b2PrismaticJoint.prototype.EnableLimit = function (flag) {
	  if (flag !== this.m_enableLimit) {
	    this.m_bodyA.SetAwake(true);
	    this.m_bodyB.SetAwake(true);
	    this.m_enableLimit = flag;
	    this.m_impulse.z = 0;
	  }
	};

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2PrismaticJoint.prototype.GetLowerLimit = function () {
	  return this.m_lowerTranslation;
	};

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2PrismaticJoint.prototype.GetUpperLimit = function () {
	  return this.m_upperTranslation;
	};

	/**
	 * @export
	 * @return {void}
	 * @param {number} upper
	 * @param {number} lower
	 */
	box2d.b2PrismaticJoint.prototype.SetLimits = function (lower, upper) {
	  if (lower !== this.m_lowerTranslation || upper !== this.m_upperTranslation) {
	    this.m_bodyA.SetAwake(true);
	    this.m_bodyB.SetAwake(true);
	    this.m_lowerTranslation = lower;
	    this.m_upperTranslation = upper;
	    this.m_impulse.z = 0;
	  }
	};

	/**
	 * @export
	 * @return {boolean}
	 */
	box2d.b2PrismaticJoint.prototype.IsMotorEnabled = function () {
	  return this.m_enableMotor;
	};

	/**
	 * @export
	 * @return {void}
	 * @param {boolean} flag
	 */
	box2d.b2PrismaticJoint.prototype.EnableMotor = function (flag) {
	  this.m_bodyA.SetAwake(true);
	  this.m_bodyB.SetAwake(true);
	  this.m_enableMotor = flag;
	};

	/**
	 * @export
	 * @return {void}
	 * @param {number} speed
	 */
	box2d.b2PrismaticJoint.prototype.SetMotorSpeed = function (speed) {
	  this.m_bodyA.SetAwake(true);
	  this.m_bodyB.SetAwake(true);
	  this.m_motorSpeed = speed;
	};

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2PrismaticJoint.prototype.GetMotorSpeed = function () {
	  return this.m_motorSpeed;
	};

	/**
	 * @export
	 * @return {void}
	 * @param {number} force
	 */
	box2d.b2PrismaticJoint.prototype.SetMaxMotorForce = function (force) {
	  this.m_bodyA.SetAwake(true);
	  this.m_bodyB.SetAwake(true);
	  this.m_maxMotorForce = force;
	};

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2PrismaticJoint.prototype.GetMaxMotorForce = function () {
	  return this.m_maxMotorForce;
	};

	/**
	 * @export
	 * @return {number}
	 * @param {number} inv_dt
	 */
	box2d.b2PrismaticJoint.prototype.GetMotorForce = function (inv_dt) {
	  return inv_dt * this.m_motorImpulse;
	};

	/**
	 * Dump to b2Log
	 * @export
	 * @return {void}
	 */
	box2d.b2PrismaticJoint.prototype.Dump = function () {
	  if (box2d.DEBUG) {
	    var indexA = this.m_bodyA.m_islandIndex;
	    var indexB = this.m_bodyB.m_islandIndex;

	    box2d.b2Log("  /*box2d.b2PrismaticJointDef*/ var jd = new box2d.b2PrismaticJointDef();\n");
	    box2d.b2Log("  jd.bodyA = bodies[%d];\n", indexA);
	    box2d.b2Log("  jd.bodyB = bodies[%d];\n", indexB);
	    box2d.b2Log("  jd.collideConnected = %s;\n", this.m_collideConnected ? 'true' : 'false');
	    box2d.b2Log("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y);
	    box2d.b2Log("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y);
	    box2d.b2Log("  jd.localAxisA.Set(%.15f, %.15f);\n", this.m_localXAxisA.x, this.m_localXAxisA.y);
	    box2d.b2Log("  jd.referenceAngle = %.15f;\n", this.m_referenceAngle);
	    box2d.b2Log("  jd.enableLimit = %s;\n", this.m_enableLimit ? 'true' : 'false');
	    box2d.b2Log("  jd.lowerTranslation = %.15f;\n", this.m_lowerTranslation);
	    box2d.b2Log("  jd.upperTranslation = %.15f;\n", this.m_upperTranslation);
	    box2d.b2Log("  jd.enableMotor = %s;\n", this.m_enableMotor ? 'true' : 'false');
	    box2d.b2Log("  jd.motorSpeed = %.15f;\n", this.m_motorSpeed);
	    box2d.b2Log("  jd.maxMotorForce = %.15f;\n", this.m_maxMotorForce);
	    box2d.b2Log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
	  }
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(50);

	__webpack_require__(6);

	/**
	 * @export
	 * @const
	 * @type {number}
	 */
	box2d.b2_minPulleyLength = 2;

	/**
	 * Pulley joint definition. This requires two ground anchors,
	 * two dynamic body anchor points, and a pulley ratio.
	 * @export
	 * @constructor
	 * @extends {box2d.b2JointDef}
	 */
	/*
	 * Copyright (c) 2007 Erin Catto http://www.box2d.org
	 *
	 * This software is provided 'as-is', without any express or implied
	 * warranty.  In no event will the authors be held liable for any damages
	 * arising from the use of this software.
	 * Permission is granted to anyone to use this software for any purpose,
	 * including commercial applications, and to alter it and redistribute it
	 * freely, subject to the following restrictions:
	 * 1. The origin of this software must not be misrepresented; you must not
	 * claim that you wrote the original software. If you use this software
	 * in a product, an acknowledgment in the product documentation would be
	 * appreciated but is not required.
	 * 2. Altered source versions must be plainly marked as such, and must not be
	 * misrepresented as being the original software.
	 * 3. This notice may not be removed or altered from any source distribution.
	 */

	box2d.b2PulleyJointDef = function () {
	  box2d.b2JointDef.call(this, box2d.b2JointType.e_pulleyJoint); // base class constructor
	  this.collideConnected = true;

	  this.groundAnchorA = new box2d.b2Vec2(-1, 1);
	  this.groundAnchorB = new box2d.b2Vec2(1, 1);

	  this.localAnchorA = new box2d.b2Vec2(-1, 0);
	  this.localAnchorB = new box2d.b2Vec2(1, 0);
	};

	goog.inherits(box2d.b2PulleyJointDef, box2d.b2JointDef);

	/**
	 * The first ground anchor in world coordinates. This point
	 * never moves.
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2PulleyJointDef.prototype.groundAnchorA = null;

	/**
	 * The second ground anchor in world coordinates. This point
	 * never moves.
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2PulleyJointDef.prototype.groundAnchorB = null;

	/**
	 * The local anchor point relative to bodyA's origin.
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2PulleyJointDef.prototype.localAnchorA = null;

	/**
	 * The local anchor point relative to bodyB's origin.
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2PulleyJointDef.prototype.localAnchorB = null;

	/**
	 * The a reference length for the segment attached to bodyA.
	 * @export
	 * @type {number}
	 */
	box2d.b2PulleyJointDef.prototype.lengthA = 0;

	/**
	 * The a reference length for the segment attached to bodyB.
	 * @export
	 * @type {number}
	 */
	box2d.b2PulleyJointDef.prototype.lengthB = 0;

	/**
	 * The pulley ratio, used to simulate a block-and-tackle.
	 * @export
	 * @type {number}
	 */
	box2d.b2PulleyJointDef.prototype.ratio = 1;

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2Body} bA
	 * @param {box2d.b2Body} bB
	 * @param {box2d.b2Vec2} groundA
	 * @param {box2d.b2Vec2} groundB
	 * @param {box2d.b2Vec2} anchorA
	 * @param {box2d.b2Vec2} anchorB
	 * @param {number} r
	 */
	box2d.b2PulleyJointDef.prototype.Initialize = function (bA, bB, groundA, groundB, anchorA, anchorB, r) {
	  this.bodyA = bA;
	  this.bodyB = bB;
	  this.groundAnchorA.Copy(groundA);
	  this.groundAnchorB.Copy(groundB);
	  this.bodyA.GetLocalPoint(anchorA, this.localAnchorA);
	  this.bodyB.GetLocalPoint(anchorB, this.localAnchorB);
	  this.lengthA = box2d.b2Distance(anchorA, groundA);
	  this.lengthB = box2d.b2Distance(anchorB, groundB);
	  this.ratio = r;
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(this.ratio > box2d.b2_epsilon);
	  }
	};

	/**
	 * The pulley joint is connected to two bodies and two fixed ground points.
	 * The pulley supports a ratio such that:
	 * lengthA + ratio * lengthB <= constant
	 * Yes, the force transmitted is scaled by the ratio.
	 * Warning: the pulley joint can get a bit squirrelly by itself.
	 * They often work better when combined with prismatic joints.
	 * You should also cover the the anchor points with static
	 * shapes to prevent one side from going to zero length.
	 * @export
	 * @constructor
	 * @extends {box2d.b2Joint}
	 * @param {box2d.b2PulleyJointDef} def
	 */
	box2d.b2PulleyJoint = function (def) {
	  box2d.b2Joint.call(this, def); // base class constructor

	  this.m_groundAnchorA = new box2d.b2Vec2();
	  this.m_groundAnchorB = new box2d.b2Vec2();
	  this.m_localAnchorA = new box2d.b2Vec2();
	  this.m_localAnchorB = new box2d.b2Vec2();

	  this.m_uA = new box2d.b2Vec2();
	  this.m_uB = new box2d.b2Vec2();
	  this.m_rA = new box2d.b2Vec2();
	  this.m_rB = new box2d.b2Vec2();
	  this.m_localCenterA = new box2d.b2Vec2();
	  this.m_localCenterB = new box2d.b2Vec2();

	  this.m_qA = new box2d.b2Rot();
	  this.m_qB = new box2d.b2Rot();
	  this.m_lalcA = new box2d.b2Vec2();
	  this.m_lalcB = new box2d.b2Vec2();

	  this.m_groundAnchorA.Copy(def.groundAnchorA);
	  this.m_groundAnchorB.Copy(def.groundAnchorB);
	  this.m_localAnchorA.Copy(def.localAnchorA);
	  this.m_localAnchorB.Copy(def.localAnchorB);

	  this.m_lengthA = def.lengthA;
	  this.m_lengthB = def.lengthB;

	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(def.ratio !== 0);
	  }
	  this.m_ratio = def.ratio;

	  this.m_constant = def.lengthA + this.m_ratio * def.lengthB;

	  this.m_impulse = 0;
	};

	goog.inherits(box2d.b2PulleyJoint, box2d.b2Joint);

	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2PulleyJoint.prototype.m_groundAnchorA = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2PulleyJoint.prototype.m_groundAnchorB = null;

	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2PulleyJoint.prototype.m_lengthA = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2PulleyJoint.prototype.m_lengthB = 0;

	// Solver shared
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2PulleyJoint.prototype.m_localAnchorA = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2PulleyJoint.prototype.m_localAnchorB = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2PulleyJoint.prototype.m_constant = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2PulleyJoint.prototype.m_ratio = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2PulleyJoint.prototype.m_impulse = 0;

	// Solver temp
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2PulleyJoint.prototype.m_indexA = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2PulleyJoint.prototype.m_indexB = 0;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2PulleyJoint.prototype.m_uA = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2PulleyJoint.prototype.m_uB = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2PulleyJoint.prototype.m_rA = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2PulleyJoint.prototype.m_rB = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2PulleyJoint.prototype.m_localCenterA = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2PulleyJoint.prototype.m_localCenterB = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2PulleyJoint.prototype.m_invMassA = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2PulleyJoint.prototype.m_invMassB = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2PulleyJoint.prototype.m_invIA = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2PulleyJoint.prototype.m_invIB = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2PulleyJoint.prototype.m_mass = 0;

	/**
	 * @export
	 * @type {box2d.b2Rot}
	 */
	box2d.b2PulleyJoint.prototype.m_qA = null;
	/**
	 * @export
	 * @type {box2d.b2Rot}
	 */
	box2d.b2PulleyJoint.prototype.m_qB = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2PulleyJoint.prototype.m_lalcA = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2PulleyJoint.prototype.m_lalcB = null;

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2SolverData} data
	 */
	box2d.b2PulleyJoint.prototype.InitVelocityConstraints = function (data) {
	  this.m_indexA = this.m_bodyA.m_islandIndex;
	  this.m_indexB = this.m_bodyB.m_islandIndex;
	  this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter);
	  this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter);
	  this.m_invMassA = this.m_bodyA.m_invMass;
	  this.m_invMassB = this.m_bodyB.m_invMass;
	  this.m_invIA = this.m_bodyA.m_invI;
	  this.m_invIB = this.m_bodyB.m_invI;

	  /*box2d.b2Vec2&*/
	  var cA = data.positions[this.m_indexA].c;
	  /*float32*/
	  var aA = data.positions[this.m_indexA].a;
	  /*box2d.b2Vec2&*/
	  var vA = data.velocities[this.m_indexA].v;
	  /*float32*/
	  var wA = data.velocities[this.m_indexA].w;

	  /*box2d.b2Vec2&*/
	  var cB = data.positions[this.m_indexB].c;
	  /*float32*/
	  var aB = data.positions[this.m_indexB].a;
	  /*box2d.b2Vec2&*/
	  var vB = data.velocities[this.m_indexB].v;
	  /*float32*/
	  var wB = data.velocities[this.m_indexB].w;

	  //  box2d.b2Rot qA(aA), qB(aB);
	  /*box2d.b2Rot*/
	  var qA = this.m_qA.SetAngle(aA),
	      qB = this.m_qB.SetAngle(aB);

	  //  m_rA = b2Mul(qA, m_localAnchorA - m_localCenterA);
	  box2d.b2Sub_V2_V2(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
	  box2d.b2Mul_R_V2(qA, this.m_lalcA, this.m_rA);
	  //  m_rB = b2Mul(qB, m_localAnchorB - m_localCenterB);
	  box2d.b2Sub_V2_V2(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
	  box2d.b2Mul_R_V2(qB, this.m_lalcB, this.m_rB);

	  // Get the pulley axes.
	  //  m_uA = cA + m_rA - m_groundAnchorA;
	  this.m_uA.Copy(cA).SelfAdd(this.m_rA).SelfSub(this.m_groundAnchorA);
	  //  m_uB = cB + m_rB - m_groundAnchorB;
	  this.m_uB.Copy(cB).SelfAdd(this.m_rB).SelfSub(this.m_groundAnchorB);

	  /*float32*/
	  var lengthA = this.m_uA.Length();
	  /*float32*/
	  var lengthB = this.m_uB.Length();

	  if (lengthA > 10 * box2d.b2_linearSlop) {
	    this.m_uA.SelfMul(1 / lengthA);
	  } else {
	    this.m_uA.SetZero();
	  }

	  if (lengthB > 10 * box2d.b2_linearSlop) {
	    this.m_uB.SelfMul(1 / lengthB);
	  } else {
	    this.m_uB.SetZero();
	  }

	  // Compute effective mass.
	  /*float32*/
	  var ruA = box2d.b2Cross_V2_V2(this.m_rA, this.m_uA);
	  /*float32*/
	  var ruB = box2d.b2Cross_V2_V2(this.m_rB, this.m_uB);

	  /*float32*/
	  var mA = this.m_invMassA + this.m_invIA * ruA * ruA;
	  /*float32*/
	  var mB = this.m_invMassB + this.m_invIB * ruB * ruB;

	  this.m_mass = mA + this.m_ratio * this.m_ratio * mB;

	  if (this.m_mass > 0) {
	    this.m_mass = 1 / this.m_mass;
	  }

	  if (data.step.warmStarting) {
	    // Scale impulses to support variable time steps.
	    this.m_impulse *= data.step.dtRatio;

	    // Warm starting.
	    //    box2d.b2Vec2 PA = -(m_impulse) * m_uA;
	    var PA = box2d.b2Mul_S_V2(-this.m_impulse, this.m_uA, box2d.b2PulleyJoint.prototype.InitVelocityConstraints.s_PA);
	    //    box2d.b2Vec2 PB = (-m_ratio * m_impulse) * m_uB;
	    var PB = box2d.b2Mul_S_V2(-this.m_ratio * this.m_impulse, this.m_uB, box2d.b2PulleyJoint.prototype.InitVelocityConstraints.s_PB);

	    //    vA += m_invMassA * PA;
	    vA.SelfMulAdd(this.m_invMassA, PA);
	    wA += this.m_invIA * box2d.b2Cross_V2_V2(this.m_rA, PA);
	    //    vB += m_invMassB * PB;
	    vB.SelfMulAdd(this.m_invMassB, PB);
	    wB += this.m_invIB * box2d.b2Cross_V2_V2(this.m_rB, PB);
	  } else {
	    this.m_impulse = 0;
	  }

	  //  data.velocities[this.m_indexA].v = vA;
	  data.velocities[this.m_indexA].w = wA;
	  //  data.velocities[this.m_indexB].v = vB;
	  data.velocities[this.m_indexB].w = wB;
	};
	box2d.b2PulleyJoint.prototype.InitVelocityConstraints.s_PA = new box2d.b2Vec2();
	box2d.b2PulleyJoint.prototype.InitVelocityConstraints.s_PB = new box2d.b2Vec2();

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2SolverData} data
	 */
	box2d.b2PulleyJoint.prototype.SolveVelocityConstraints = function (data) {
	  /*box2d.b2Vec2&*/
	  var vA = data.velocities[this.m_indexA].v;
	  /*float32*/
	  var wA = data.velocities[this.m_indexA].w;
	  /*box2d.b2Vec2&*/
	  var vB = data.velocities[this.m_indexB].v;
	  /*float32*/
	  var wB = data.velocities[this.m_indexB].w;

	  //  b2Vec2 vpA = vA + b2Cross(wA, m_rA);
	  var vpA = box2d.b2AddCross_V2_S_V2(vA, wA, this.m_rA, box2d.b2PulleyJoint.prototype.SolveVelocityConstraints.s_vpA);
	  //  b2Vec2 vpB = vB + b2Cross(wB, m_rB);
	  var vpB = box2d.b2AddCross_V2_S_V2(vB, wB, this.m_rB, box2d.b2PulleyJoint.prototype.SolveVelocityConstraints.s_vpB);

	  /*float32*/
	  var Cdot = -box2d.b2Dot_V2_V2(this.m_uA, vpA) - this.m_ratio * box2d.b2Dot_V2_V2(this.m_uB, vpB);
	  /*float32*/
	  var impulse = -this.m_mass * Cdot;
	  this.m_impulse += impulse;

	  //  b2Vec2 PA = -impulse * m_uA;
	  var PA = box2d.b2Mul_S_V2(-impulse, this.m_uA, box2d.b2PulleyJoint.prototype.SolveVelocityConstraints.s_PA);
	  //  b2Vec2 PB = -m_ratio * impulse * m_uB;
	  var PB = box2d.b2Mul_S_V2(-this.m_ratio * impulse, this.m_uB, box2d.b2PulleyJoint.prototype.SolveVelocityConstraints.s_PB);
	  //  vA += m_invMassA * PA;
	  vA.SelfMulAdd(this.m_invMassA, PA);
	  wA += this.m_invIA * box2d.b2Cross_V2_V2(this.m_rA, PA);
	  //  vB += m_invMassB * PB;
	  vB.SelfMulAdd(this.m_invMassB, PB);
	  wB += this.m_invIB * box2d.b2Cross_V2_V2(this.m_rB, PB);

	  //  data.velocities[this.m_indexA].v = vA;
	  data.velocities[this.m_indexA].w = wA;
	  //  data.velocities[this.m_indexB].v = vB;
	  data.velocities[this.m_indexB].w = wB;
	};
	box2d.b2PulleyJoint.prototype.SolveVelocityConstraints.s_vpA = new box2d.b2Vec2();
	box2d.b2PulleyJoint.prototype.SolveVelocityConstraints.s_vpB = new box2d.b2Vec2();
	box2d.b2PulleyJoint.prototype.SolveVelocityConstraints.s_PA = new box2d.b2Vec2();
	box2d.b2PulleyJoint.prototype.SolveVelocityConstraints.s_PB = new box2d.b2Vec2();

	/**
	 * @export
	 * @return {boolean}
	 * @param {box2d.b2SolverData} data
	 */
	box2d.b2PulleyJoint.prototype.SolvePositionConstraints = function (data) {
	  /*box2d.b2Vec2&*/
	  var cA = data.positions[this.m_indexA].c;
	  /*float32*/
	  var aA = data.positions[this.m_indexA].a;
	  /*box2d.b2Vec2&*/
	  var cB = data.positions[this.m_indexB].c;
	  /*float32*/
	  var aB = data.positions[this.m_indexB].a;

	  //  box2d.b2Rot qA(aA), qB(aB);
	  /*box2d.b2Rot*/
	  var qA = this.m_qA.SetAngle(aA),
	      qB = this.m_qB.SetAngle(aB);

	  //  b2Vec2 rA = b2Mul(qA, m_localAnchorA - m_localCenterA);
	  box2d.b2Sub_V2_V2(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
	  var rA = box2d.b2Mul_R_V2(qA, this.m_lalcA, this.m_rA);
	  //  b2Vec2 rB = b2Mul(qB, m_localAnchorB - m_localCenterB);
	  box2d.b2Sub_V2_V2(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
	  var rB = box2d.b2Mul_R_V2(qB, this.m_lalcB, this.m_rB);

	  // Get the pulley axes.
	  //  b2Vec2 uA = cA + rA - m_groundAnchorA;
	  var uA = this.m_uA.Copy(cA).SelfAdd(rA).SelfSub(this.m_groundAnchorA);
	  //  b2Vec2 uB = cB + rB - m_groundAnchorB;
	  var uB = this.m_uB.Copy(cB).SelfAdd(rB).SelfSub(this.m_groundAnchorB);

	  /*float32*/
	  var lengthA = uA.Length();
	  /*float32*/
	  var lengthB = uB.Length();

	  if (lengthA > 10 * box2d.b2_linearSlop) {
	    uA.SelfMul(1 / lengthA);
	  } else {
	    uA.SetZero();
	  }

	  if (lengthB > 10 * box2d.b2_linearSlop) {
	    uB.SelfMul(1 / lengthB);
	  } else {
	    uB.SetZero();
	  }

	  // Compute effective mass.
	  /*float32*/
	  var ruA = box2d.b2Cross_V2_V2(rA, uA);
	  /*float32*/
	  var ruB = box2d.b2Cross_V2_V2(rB, uB);

	  /*float32*/
	  var mA = this.m_invMassA + this.m_invIA * ruA * ruA;
	  /*float32*/
	  var mB = this.m_invMassB + this.m_invIB * ruB * ruB;

	  /*float32*/
	  var mass = mA + this.m_ratio * this.m_ratio * mB;

	  if (mass > 0) {
	    mass = 1 / mass;
	  }

	  /*float32*/
	  var C = this.m_constant - lengthA - this.m_ratio * lengthB;
	  /*float32*/
	  var linearError = box2d.b2Abs(C);

	  /*float32*/
	  var impulse = -mass * C;

	  //  b2Vec2 PA = -impulse * uA;
	  var PA = box2d.b2Mul_S_V2(-impulse, uA, box2d.b2PulleyJoint.prototype.SolvePositionConstraints.s_PA);
	  //  b2Vec2 PB = -m_ratio * impulse * uB;
	  var PB = box2d.b2Mul_S_V2(-this.m_ratio * impulse, uB, box2d.b2PulleyJoint.prototype.SolvePositionConstraints.s_PB);

	  //  cA += m_invMassA * PA;
	  cA.SelfMulAdd(this.m_invMassA, PA);
	  aA += this.m_invIA * box2d.b2Cross_V2_V2(rA, PA);
	  //  cB += m_invMassB * PB;
	  cB.SelfMulAdd(this.m_invMassB, PB);
	  aB += this.m_invIB * box2d.b2Cross_V2_V2(rB, PB);

	  //  data.positions[this.m_indexA].c = cA;
	  data.positions[this.m_indexA].a = aA;
	  //  data.positions[this.m_indexB].c = cB;
	  data.positions[this.m_indexB].a = aB;

	  return linearError < box2d.b2_linearSlop;
	};
	box2d.b2PulleyJoint.prototype.SolvePositionConstraints.s_PA = new box2d.b2Vec2();
	box2d.b2PulleyJoint.prototype.SolvePositionConstraints.s_PB = new box2d.b2Vec2();

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2PulleyJoint.prototype.GetAnchorA = function (out) {
	  return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, out);
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2PulleyJoint.prototype.GetAnchorB = function (out) {
	  return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, out);
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {number} inv_dt
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2PulleyJoint.prototype.GetReactionForce = function (inv_dt, out) {
	  //  b2Vec2 P = m_impulse * m_uB;
	  //  return inv_dt * P;
	  return out.Set(inv_dt * this.m_impulse * this.m_uB.x, inv_dt * this.m_impulse * this.m_uB.y);
	};

	/**
	 * @export
	 * @return {number}
	 * @param {number} inv_dt
	 */
	box2d.b2PulleyJoint.prototype.GetReactionTorque = function (inv_dt) {
	  return 0;
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2PulleyJoint.prototype.GetGroundAnchorA = function (out) {
	  return out.Copy(this.m_groundAnchorA);
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2PulleyJoint.prototype.GetGroundAnchorB = function (out) {
	  return out.Copy(this.m_groundAnchorB);
	};

	/**
	 * Get the current length of the segment attached to bodyA.
	 * @export
	 * @return {number}
	 */
	box2d.b2PulleyJoint.prototype.GetLengthA = function () {
	  return this.m_lengthA;
	};

	/**
	 * Get the current length of the segment attached to bodyB.
	 * @export
	 * @return {number}
	 */
	box2d.b2PulleyJoint.prototype.GetLengthB = function () {
	  return this.m_lengthB;
	};

	/**
	 * Get the pulley ratio.
	 * @export
	 * @return {number}
	 */
	box2d.b2PulleyJoint.prototype.GetRatio = function () {
	  return this.m_ratio;
	};

	/**
	 * Get the current length of the segment attached to bodyA.
	 * @export
	 * @return {number}
	 */
	box2d.b2PulleyJoint.prototype.GetCurrentLengthA = function () {
	  //  b2Vec2 p = m_bodyA->GetWorldPoint(m_localAnchorA);
	  //  b2Vec2 s = m_groundAnchorA;
	  //  b2Vec2 d = p - s;
	  //  return d.Length();
	  var p = this.m_bodyA.GetWorldPoint(this.m_localAnchorA, box2d.b2PulleyJoint.prototype.GetCurrentLengthA.s_p);
	  var s = this.m_groundAnchorA;
	  return box2d.b2Distance(p, s);
	};
	box2d.b2PulleyJoint.prototype.GetCurrentLengthA.s_p = new box2d.b2Vec2();

	/**
	 * Get the current length of the segment attached to bodyB.
	 * @export
	 * @return {number}
	 */
	box2d.b2PulleyJoint.prototype.GetCurrentLengthB = function () {
	  //  b2Vec2 p = m_bodyB->GetWorldPoint(m_localAnchorB);
	  //  b2Vec2 s = m_groundAnchorB;
	  //  b2Vec2 d = p - s;
	  //  return d.Length();
	  var p = this.m_bodyB.GetWorldPoint(this.m_localAnchorB, box2d.b2PulleyJoint.prototype.GetCurrentLengthB.s_p);
	  var s = this.m_groundAnchorB;
	  return box2d.b2Distance(p, s);
	};
	box2d.b2PulleyJoint.prototype.GetCurrentLengthB.s_p = new box2d.b2Vec2();

	/**
	 * Dump joint to dmLog
	 * @export
	 * @return {void}
	 */
	box2d.b2PulleyJoint.prototype.Dump = function () {
	  if (box2d.DEBUG) {
	    var indexA = this.m_bodyA.m_islandIndex;
	    var indexB = this.m_bodyB.m_islandIndex;

	    box2d.b2Log("  /*box2d.b2PulleyJointDef*/ var jd = new box2d.b2PulleyJointDef();\n");
	    box2d.b2Log("  jd.bodyA = bodies[%d];\n", indexA);
	    box2d.b2Log("  jd.bodyB = bodies[%d];\n", indexB);
	    box2d.b2Log("  jd.collideConnected = %s;\n", this.m_collideConnected ? 'true' : 'false');
	    box2d.b2Log("  jd.groundAnchorA.Set(%.15f, %.15f);\n", this.m_groundAnchorA.x, this.m_groundAnchorA.y);
	    box2d.b2Log("  jd.groundAnchorB.Set(%.15f, %.15f);\n", this.m_groundAnchorB.x, this.m_groundAnchorB.y);
	    box2d.b2Log("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y);
	    box2d.b2Log("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y);
	    box2d.b2Log("  jd.lengthA = %.15f;\n", this.m_lengthA);
	    box2d.b2Log("  jd.lengthB = %.15f;\n", this.m_lengthB);
	    box2d.b2Log("  jd.ratio = %.15f;\n", this.m_ratio);
	    box2d.b2Log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
	  }
	};

	/**
	 * Implement b2Joint::ShiftOrigin
	 * @export
	 * @return {void}
	 * @param {box2d.b2Vec2} newOrigin
	 */
	box2d.b2PulleyJoint.prototype.ShiftOrigin = function (newOrigin) {
	  this.m_groundAnchorA.SelfSub(newOrigin);
	  this.m_groundAnchorB.SelfSub(newOrigin);
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(50);

	__webpack_require__(6);

	/**
	 * Revolute joint definition. This requires defining an anchor
	 * point where the bodies are joined. The definition uses local
	 * anchor points so that the initial configuration can violate
	 * the constraint slightly. You also need to specify the initial
	 * relative angle for joint limits. This helps when saving and
	 * loading a game.
	 * The local anchor points are measured from the body's origin
	 * rather than the center of mass because:
	 * 1. you might not know where the center of mass will be.
	 * 2. if you add/remove shapes from a body and recompute the
	 * mass, the joints will be broken.
	 * @export
	 * @constructor
	 * @extends {box2d.b2JointDef}
	 */
	box2d.b2RevoluteJointDef = function () {
	  box2d.b2JointDef.call(this, box2d.b2JointType.e_revoluteJoint); // base class constructor

	  this.localAnchorA = new box2d.b2Vec2(0, 0);
	  this.localAnchorB = new box2d.b2Vec2(0, 0);
	}; /*
	    * Copyright (c) 2006-2007 Erin Catto http://www.box2d.org
	    *
	    * This software is provided 'as-is', without any express or implied
	    * warranty.  In no event will the authors be held liable for any damages
	    * arising from the use of this software.
	    * Permission is granted to anyone to use this software for any purpose,
	    * including commercial applications, and to alter it and redistribute it
	    * freely, subject to the following restrictions:
	    * 1. The origin of this software must not be misrepresented; you must not
	    * claim that you wrote the original software. If you use this software
	    * in a product, an acknowledgment in the product documentation would be
	    * appreciated but is not required.
	    * 2. Altered source versions must be plainly marked as such, and must not be
	    * misrepresented as being the original software.
	    * 3. This notice may not be removed or altered from any source distribution.
	    */

	goog.inherits(box2d.b2RevoluteJointDef, box2d.b2JointDef);

	/**
	 * The local anchor point relative to bodyA's origin.
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2RevoluteJointDef.prototype.localAnchorA = null;

	/**
	 * The local anchor point relative to bodyB's origin.
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2RevoluteJointDef.prototype.localAnchorB = null;

	/**
	 * The bodyB angle minus bodyA angle in the reference state
	 * (radians).
	 * @export
	 * @type {number}
	 */
	box2d.b2RevoluteJointDef.prototype.referenceAngle = 0;

	/**
	 * A flag to enable joint limits.
	 * @export
	 * @type {boolean}
	 */
	box2d.b2RevoluteJointDef.prototype.enableLimit = false;

	/**
	 * The lower angle for the joint limit (radians).
	 * @export
	 * @type {number}
	 */
	box2d.b2RevoluteJointDef.prototype.lowerAngle = 0;

	/**
	 * The upper angle for the joint limit (radians).
	 * @export
	 * @type {number}
	 */
	box2d.b2RevoluteJointDef.prototype.upperAngle = 0;

	/**
	 * A flag to enable the joint motor.
	 * @export
	 * @type {boolean}
	 */
	box2d.b2RevoluteJointDef.prototype.enableMotor = false;

	/**
	 * The desired motor speed. Usually in radians per second.
	 * @export
	 * @type {number}
	 */
	box2d.b2RevoluteJointDef.prototype.motorSpeed = 0;

	/**
	 * The maximum motor torque used to achieve the desired motor
	 * speed.
	 * Usually in N-m.
	 * @export
	 * @type {number}
	 */
	box2d.b2RevoluteJointDef.prototype.maxMotorTorque = 0;

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2Body} bA
	 * @param {box2d.b2Body} bB
	 * @param {box2d.b2Vec2} anchor
	 */
	box2d.b2RevoluteJointDef.prototype.Initialize = function (bA, bB, anchor) {
	  this.bodyA = bA;
	  this.bodyB = bB;
	  this.bodyA.GetLocalPoint(anchor, this.localAnchorA);
	  this.bodyB.GetLocalPoint(anchor, this.localAnchorB);
	  this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle();
	};

	/**
	 * A revolute joint constrains two bodies to share a common
	 * point while they are free to rotate about the point. The
	 * relative rotation about the shared point is the joint angle.
	 * You can limit the relative rotation with a joint limit that
	 * specifies a lower and upper angle. You can use a motor to
	 * drive the relative rotation about the shared point. A maximum
	 * motor torque is provided so that infinite forces are not
	 * generated.
	 * @export
	 * @constructor
	 * @extends {box2d.b2Joint}
	 * @param {box2d.b2RevoluteJointDef} def
	 */
	box2d.b2RevoluteJoint = function (def) {
	  box2d.b2Joint.call(this, def); // base class constructor

	  this.m_localAnchorA = new box2d.b2Vec2();
	  this.m_localAnchorB = new box2d.b2Vec2();
	  this.m_impulse = new box2d.b2Vec3();

	  this.m_rA = new box2d.b2Vec2();
	  this.m_rB = new box2d.b2Vec2();
	  this.m_localCenterA = new box2d.b2Vec2();
	  this.m_localCenterB = new box2d.b2Vec2();
	  this.m_mass = new box2d.b2Mat33();

	  this.m_qA = new box2d.b2Rot();
	  this.m_qB = new box2d.b2Rot();
	  this.m_lalcA = new box2d.b2Vec2();
	  this.m_lalcB = new box2d.b2Vec2();
	  this.m_K = new box2d.b2Mat22();

	  this.m_localAnchorA.Copy(def.localAnchorA);
	  this.m_localAnchorB.Copy(def.localAnchorB);
	  this.m_referenceAngle = def.referenceAngle;

	  this.m_impulse.SetZero();
	  this.m_motorImpulse = 0;

	  this.m_lowerAngle = def.lowerAngle;
	  this.m_upperAngle = def.upperAngle;
	  this.m_maxMotorTorque = def.maxMotorTorque;
	  this.m_motorSpeed = def.motorSpeed;
	  this.m_enableLimit = def.enableLimit;
	  this.m_enableMotor = def.enableMotor;
	  this.m_limitState = box2d.b2LimitState.e_inactiveLimit;
	};

	goog.inherits(box2d.b2RevoluteJoint, box2d.b2Joint);

	// Solver shared
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2RevoluteJoint.prototype.m_localAnchorA = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2RevoluteJoint.prototype.m_localAnchorB = null;
	/**
	 * @export
	 * @type {box2d.b2Vec3}
	 */
	box2d.b2RevoluteJoint.prototype.m_impulse = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2RevoluteJoint.prototype.m_motorImpulse = 0;

	/**
	 * @export
	 * @type {boolean}
	 */
	box2d.b2RevoluteJoint.prototype.m_enableMotor = false;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2RevoluteJoint.prototype.m_maxMotorTorque = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2RevoluteJoint.prototype.m_motorSpeed = 0;

	/**
	 * @export
	 * @type {boolean}
	 */
	box2d.b2RevoluteJoint.prototype.m_enableLimit = false;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2RevoluteJoint.prototype.m_referenceAngle = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2RevoluteJoint.prototype.m_lowerAngle = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2RevoluteJoint.prototype.m_upperAngle = 0;

	// Solver temp
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2RevoluteJoint.prototype.m_indexA = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2RevoluteJoint.prototype.m_indexB = 0;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2RevoluteJoint.prototype.m_rA = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2RevoluteJoint.prototype.m_rB = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2RevoluteJoint.prototype.m_localCenterA = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2RevoluteJoint.prototype.m_localCenterB = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2RevoluteJoint.prototype.m_invMassA = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2RevoluteJoint.prototype.m_invMassB = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2RevoluteJoint.prototype.m_invIA = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2RevoluteJoint.prototype.m_invIB = 0;
	/**
	 * @export
	 * @type {box2d.b2Mat33}
	 */
	box2d.b2RevoluteJoint.prototype.m_mass = null; // effective mass for point-to-point constraint.
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2RevoluteJoint.prototype.m_motorMass = 0; // effective mass for motor/limit angular constraint.
	/**
	 * @export
	 * @type {box2d.b2LimitState}
	 */
	box2d.b2RevoluteJoint.prototype.m_limitState = box2d.b2LimitState.e_inactiveLimit;

	/**
	 * @export
	 * @type {box2d.b2Rot}
	 */
	box2d.b2RevoluteJoint.prototype.m_qA = null;
	/**
	 * @export
	 * @type {box2d.b2Rot}
	 */
	box2d.b2RevoluteJoint.prototype.m_qB = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2RevoluteJoint.prototype.m_lalcA = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2RevoluteJoint.prototype.m_lalcB = null;
	/**
	 * @export
	 * @type {box2d.b2Mat22}
	 */
	box2d.b2RevoluteJoint.prototype.m_K = null;

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2SolverData} data
	 */
	box2d.b2RevoluteJoint.prototype.InitVelocityConstraints = function (data) {
	  this.m_indexA = this.m_bodyA.m_islandIndex;
	  this.m_indexB = this.m_bodyB.m_islandIndex;
	  this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter);
	  this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter);
	  this.m_invMassA = this.m_bodyA.m_invMass;
	  this.m_invMassB = this.m_bodyB.m_invMass;
	  this.m_invIA = this.m_bodyA.m_invI;
	  this.m_invIB = this.m_bodyB.m_invI;

	  /*float32*/
	  var aA = data.positions[this.m_indexA].a;
	  /*box2d.b2Vec2&*/
	  var vA = data.velocities[this.m_indexA].v;
	  /*float32*/
	  var wA = data.velocities[this.m_indexA].w;

	  /*float32*/
	  var aB = data.positions[this.m_indexB].a;
	  /*box2d.b2Vec2&*/
	  var vB = data.velocities[this.m_indexB].v;
	  /*float32*/
	  var wB = data.velocities[this.m_indexB].w;

	  //  b2Rot qA(aA), qB(aB);
	  /*box2d.b2Rot*/
	  var qA = this.m_qA.SetAngle(aA),
	      qB = this.m_qB.SetAngle(aB);

	  //  m_rA = b2Mul(qA, m_localAnchorA - m_localCenterA);
	  box2d.b2Sub_V2_V2(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
	  box2d.b2Mul_R_V2(qA, this.m_lalcA, this.m_rA);
	  //  m_rB = b2Mul(qB, m_localAnchorB - m_localCenterB);
	  box2d.b2Sub_V2_V2(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
	  box2d.b2Mul_R_V2(qB, this.m_lalcB, this.m_rB);

	  // J = [-I -r1_skew I r2_skew]
	  //     [ 0       -1 0       1]
	  // r_skew = [-ry; rx]

	  // Matlab
	  // K = [ mA+r1y^2*iA+mB+r2y^2*iB,  -r1y*iA*r1x-r2y*iB*r2x,          -r1y*iA-r2y*iB]
	  //     [  -r1y*iA*r1x-r2y*iB*r2x, mA+r1x^2*iA+mB+r2x^2*iB,           r1x*iA+r2x*iB]
	  //     [          -r1y*iA-r2y*iB,           r1x*iA+r2x*iB,                   iA+iB]

	  /*float32*/
	  var mA = this.m_invMassA,
	      mB = this.m_invMassB;
	  /*float32*/
	  var iA = this.m_invIA,
	      iB = this.m_invIB;

	  /*bool*/
	  var fixedRotation = iA + iB === 0;

	  this.m_mass.ex.x = mA + mB + this.m_rA.y * this.m_rA.y * iA + this.m_rB.y * this.m_rB.y * iB;
	  this.m_mass.ey.x = -this.m_rA.y * this.m_rA.x * iA - this.m_rB.y * this.m_rB.x * iB;
	  this.m_mass.ez.x = -this.m_rA.y * iA - this.m_rB.y * iB;
	  this.m_mass.ex.y = this.m_mass.ey.x;
	  this.m_mass.ey.y = mA + mB + this.m_rA.x * this.m_rA.x * iA + this.m_rB.x * this.m_rB.x * iB;
	  this.m_mass.ez.y = this.m_rA.x * iA + this.m_rB.x * iB;
	  this.m_mass.ex.z = this.m_mass.ez.x;
	  this.m_mass.ey.z = this.m_mass.ez.y;
	  this.m_mass.ez.z = iA + iB;

	  this.m_motorMass = iA + iB;
	  if (this.m_motorMass > 0) {
	    this.m_motorMass = 1 / this.m_motorMass;
	  }

	  if (!this.m_enableMotor || fixedRotation) {
	    this.m_motorImpulse = 0;
	  }

	  if (this.m_enableLimit && !fixedRotation) {
	    /*float32*/
	    var jointAngle = aB - aA - this.m_referenceAngle;
	    if (box2d.b2Abs(this.m_upperAngle - this.m_lowerAngle) < 2 * box2d.b2_angularSlop) {
	      this.m_limitState = box2d.b2LimitState.e_equalLimits;
	    } else if (jointAngle <= this.m_lowerAngle) {
	      if (this.m_limitState !== box2d.b2LimitState.e_atLowerLimit) {
	        this.m_impulse.z = 0;
	      }
	      this.m_limitState = box2d.b2LimitState.e_atLowerLimit;
	    } else if (jointAngle >= this.m_upperAngle) {
	      if (this.m_limitState !== box2d.b2LimitState.e_atUpperLimit) {
	        this.m_impulse.z = 0;
	      }
	      this.m_limitState = box2d.b2LimitState.e_atUpperLimit;
	    } else {
	      this.m_limitState = box2d.b2LimitState.e_inactiveLimit;
	      this.m_impulse.z = 0;
	    }
	  } else {
	    this.m_limitState = box2d.b2LimitState.e_inactiveLimit;
	  }

	  if (data.step.warmStarting) {
	    // Scale impulses to support a variable time step.
	    this.m_impulse.SelfMulScalar(data.step.dtRatio);
	    this.m_motorImpulse *= data.step.dtRatio;

	    //    b2Vec2 P(m_impulse.x, m_impulse.y);
	    var P = box2d.b2RevoluteJoint.prototype.InitVelocityConstraints.s_P.Set(this.m_impulse.x, this.m_impulse.y);

	    //    vA -= mA * P;
	    vA.SelfMulSub(mA, P);
	    wA -= iA * (box2d.b2Cross_V2_V2(this.m_rA, P) + this.m_motorImpulse + this.m_impulse.z);

	    //    vB += mB * P;
	    vB.SelfMulAdd(mB, P);
	    wB += iB * (box2d.b2Cross_V2_V2(this.m_rB, P) + this.m_motorImpulse + this.m_impulse.z);
	  } else {
	    this.m_impulse.SetZero();
	    this.m_motorImpulse = 0;
	  }

	  //  data.velocities[this.m_indexA].v = vA;
	  data.velocities[this.m_indexA].w = wA;
	  //  data.velocities[this.m_indexB].v = vB;
	  data.velocities[this.m_indexB].w = wB;
	};
	box2d.b2RevoluteJoint.prototype.InitVelocityConstraints.s_P = new box2d.b2Vec2();

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2SolverData} data
	 */
	box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints = function (data) {
	  /*box2d.b2Vec2&*/
	  var vA = data.velocities[this.m_indexA].v;
	  /*float32*/
	  var wA = data.velocities[this.m_indexA].w;
	  /*box2d.b2Vec2&*/
	  var vB = data.velocities[this.m_indexB].v;
	  /*float32*/
	  var wB = data.velocities[this.m_indexB].w;

	  /*float32*/
	  var mA = this.m_invMassA,
	      mB = this.m_invMassB;
	  /*float32*/
	  var iA = this.m_invIA,
	      iB = this.m_invIB;

	  /*bool*/
	  var fixedRotation = iA + iB === 0;

	  // Solve motor constraint.
	  if (this.m_enableMotor && this.m_limitState !== box2d.b2LimitState.e_equalLimits && !fixedRotation) {
	    /*float32*/
	    var Cdot = wB - wA - this.m_motorSpeed;
	    /*float32*/
	    var impulse = -this.m_motorMass * Cdot;
	    /*float32*/
	    var oldImpulse = this.m_motorImpulse;
	    /*float32*/
	    var maxImpulse = data.step.dt * this.m_maxMotorTorque;
	    this.m_motorImpulse = box2d.b2Clamp(this.m_motorImpulse + impulse, -maxImpulse, maxImpulse);
	    impulse = this.m_motorImpulse - oldImpulse;

	    wA -= iA * impulse;
	    wB += iB * impulse;
	  }

	  // Solve limit constraint.
	  if (this.m_enableLimit && this.m_limitState !== box2d.b2LimitState.e_inactiveLimit && !fixedRotation) {
	    //    b2Vec2 Cdot1 = vB + b2Cross(wB, m_rB) - vA - b2Cross(wA, m_rA);
	    var Cdot1 = box2d.b2Sub_V2_V2(box2d.b2AddCross_V2_S_V2(vB, wB, this.m_rB, box2d.b2Vec2.s_t0), box2d.b2AddCross_V2_S_V2(vA, wA, this.m_rA, box2d.b2Vec2.s_t1), box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_Cdot1);
	    /*float32*/
	    var Cdot2 = wB - wA;
	    //    b2Vec3 Cdot(Cdot1.x, Cdot1.y, Cdot2);

	    //    b2Vec3 impulse = -this.m_mass.Solve33(Cdot);
	    var impulse = this.m_mass.Solve33(Cdot1.x, Cdot1.y, Cdot2, box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_impulse3).SelfNeg();

	    if (this.m_limitState === box2d.b2LimitState.e_equalLimits) {
	      this.m_impulse.SelfAdd(impulse);
	    } else if (this.m_limitState === box2d.b2LimitState.e_atLowerLimit) {
	      /*float32*/
	      var newImpulse = this.m_impulse.z + impulse.z;
	      if (newImpulse < 0) {
	        //        b2Vec2 rhs = -Cdot1 + m_impulse.z * b2Vec2(m_mass.ez.x, m_mass.ez.y);
	        var rhs_x = -Cdot1.x + this.m_impulse.z * this.m_mass.ez.x;
	        var rhs_y = -Cdot1.y + this.m_impulse.z * this.m_mass.ez.y;
	        /*box2d.b2Vec2*/
	        var reduced = this.m_mass.Solve22(rhs_x, rhs_y, box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_reduced);
	        impulse.x = reduced.x;
	        impulse.y = reduced.y;
	        impulse.z = -this.m_impulse.z;
	        this.m_impulse.x += reduced.x;
	        this.m_impulse.y += reduced.y;
	        this.m_impulse.z = 0;
	      } else {
	        this.m_impulse.SelfAdd(impulse);
	      }
	    } else if (this.m_limitState === box2d.b2LimitState.e_atUpperLimit) {
	      /*float32*/
	      var newImpulse = this.m_impulse.z + impulse.z;
	      if (newImpulse > 0) {
	        //        b2Vec2 rhs = -Cdot1 + m_impulse.z * b2Vec2(m_mass.ez.x, m_mass.ez.y);
	        var rhs_x = -Cdot1.x + this.m_impulse.z * this.m_mass.ez.x;
	        var rhs_y = -Cdot1.y + this.m_impulse.z * this.m_mass.ez.y;
	        /*box2d.b2Vec2*/
	        var reduced = this.m_mass.Solve22(rhs_x, rhs_y, box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_reduced);
	        impulse.x = reduced.x;
	        impulse.y = reduced.y;
	        impulse.z = -this.m_impulse.z;
	        this.m_impulse.x += reduced.x;
	        this.m_impulse.y += reduced.y;
	        this.m_impulse.z = 0;
	      } else {
	        this.m_impulse.SelfAdd(impulse);
	      }
	    }

	    //    b2Vec2 P(impulse.x, impulse.y);
	    var P = box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_P.Set(impulse.x, impulse.y);

	    //    vA -= mA * P;
	    vA.SelfMulSub(mA, P);
	    wA -= iA * (box2d.b2Cross_V2_V2(this.m_rA, P) + impulse.z);

	    //    vB += mB * P;
	    vB.SelfMulAdd(mB, P);
	    wB += iB * (box2d.b2Cross_V2_V2(this.m_rB, P) + impulse.z);
	  } else {
	    // Solve point-to-point constraint
	    //    b2Vec2 Cdot = vB + b2Cross(wB, m_rB) - vA - b2Cross(wA, m_rA);
	    var Cdot = box2d.b2Sub_V2_V2(box2d.b2AddCross_V2_S_V2(vB, wB, this.m_rB, box2d.b2Vec2.s_t0), box2d.b2AddCross_V2_S_V2(vA, wA, this.m_rA, box2d.b2Vec2.s_t1), box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_Cdot);
	    //    b2Vec2 impulse = m_mass.Solve22(-Cdot);
	    /*box2d.b2Vec2*/
	    var impulse = this.m_mass.Solve22(-Cdot.x, -Cdot.y, box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_impulse2);

	    this.m_impulse.x += impulse.x;
	    this.m_impulse.y += impulse.y;

	    //    vA -= mA * impulse;
	    vA.SelfMulSub(mA, impulse);
	    wA -= iA * box2d.b2Cross_V2_V2(this.m_rA, impulse);

	    //    vB += mB * impulse;
	    vB.SelfMulAdd(mB, impulse);
	    wB += iB * box2d.b2Cross_V2_V2(this.m_rB, impulse);
	  }

	  //  data.velocities[this.m_indexA].v = vA;
	  data.velocities[this.m_indexA].w = wA;
	  //  data.velocities[this.m_indexB].v = vB;
	  data.velocities[this.m_indexB].w = wB;
	};
	box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_P = new box2d.b2Vec2();
	box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_Cdot = new box2d.b2Vec2();
	box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_Cdot1 = new box2d.b2Vec2();
	box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_impulse3 = new box2d.b2Vec3();
	box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_reduced = new box2d.b2Vec2();
	box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_impulse2 = new box2d.b2Vec2();

	/**
	 * @export
	 * @return {boolean}
	 * @param {box2d.b2SolverData} data
	 */
	box2d.b2RevoluteJoint.prototype.SolvePositionConstraints = function (data) {
	  /*box2d.b2Vec2&*/
	  var cA = data.positions[this.m_indexA].c;
	  /*float32*/
	  var aA = data.positions[this.m_indexA].a;
	  /*box2d.b2Vec2&*/
	  var cB = data.positions[this.m_indexB].c;
	  /*float32*/
	  var aB = data.positions[this.m_indexB].a;

	  //  b2Rot qA(aA), qB(aB);
	  /*box2d.b2Rot*/
	  var qA = this.m_qA.SetAngle(aA),
	      qB = this.m_qB.SetAngle(aB);

	  /*float32*/
	  var angularError = 0;
	  /*float32*/
	  var positionError = 0;

	  /*bool*/
	  var fixedRotation = this.m_invIA + this.m_invIB === 0;

	  // Solve angular limit constraint.
	  if (this.m_enableLimit && this.m_limitState !== box2d.b2LimitState.e_inactiveLimit && !fixedRotation) {
	    /*float32*/
	    var angle = aB - aA - this.m_referenceAngle;
	    /*float32*/
	    var limitImpulse = 0;

	    if (this.m_limitState === box2d.b2LimitState.e_equalLimits) {
	      // Prevent large angular corrections
	      /*float32*/
	      var C = box2d.b2Clamp(angle - this.m_lowerAngle, -box2d.b2_maxAngularCorrection, box2d.b2_maxAngularCorrection);
	      limitImpulse = -this.m_motorMass * C;
	      angularError = box2d.b2Abs(C);
	    } else if (this.m_limitState === box2d.b2LimitState.e_atLowerLimit) {
	      /*float32*/
	      var C = angle - this.m_lowerAngle;
	      angularError = -C;

	      // Prevent large angular corrections and allow some slop.
	      C = box2d.b2Clamp(C + box2d.b2_angularSlop, -box2d.b2_maxAngularCorrection, 0);
	      limitImpulse = -this.m_motorMass * C;
	    } else if (this.m_limitState === box2d.b2LimitState.e_atUpperLimit) {
	      /*float32*/
	      var C = angle - this.m_upperAngle;
	      angularError = C;

	      // Prevent large angular corrections and allow some slop.
	      C = box2d.b2Clamp(C - box2d.b2_angularSlop, 0, box2d.b2_maxAngularCorrection);
	      limitImpulse = -this.m_motorMass * C;
	    }

	    aA -= this.m_invIA * limitImpulse;
	    aB += this.m_invIB * limitImpulse;
	  }

	  // Solve point-to-point constraint.
	  {
	    qA.SetAngle(aA);
	    qB.SetAngle(aB);
	    //    b2Vec2 rA = b2Mul(qA, m_localAnchorA - m_localCenterA);
	    box2d.b2Sub_V2_V2(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
	    var rA = box2d.b2Mul_R_V2(qA, this.m_lalcA, this.m_rA);
	    //    b2Vec2 rB = b2Mul(qB, m_localAnchorB - m_localCenterB);
	    box2d.b2Sub_V2_V2(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
	    var rB = box2d.b2Mul_R_V2(qB, this.m_lalcB, this.m_rB);

	    //    b2Vec2 C = cB + rB - cA - rA;
	    var C = box2d.b2Sub_V2_V2(box2d.b2Add_V2_V2(cB, rB, box2d.b2Vec2.s_t0), box2d.b2Add_V2_V2(cA, rA, box2d.b2Vec2.s_t1), box2d.b2RevoluteJoint.prototype.SolvePositionConstraints.s_C);
	    positionError = C.Length();

	    /*float32*/
	    var mA = this.m_invMassA,
	        mB = this.m_invMassB;
	    /*float32*/
	    var iA = this.m_invIA,
	        iB = this.m_invIB;

	    var K = this.m_K;
	    K.ex.x = mA + mB + iA * rA.y * rA.y + iB * rB.y * rB.y;
	    K.ex.y = -iA * rA.x * rA.y - iB * rB.x * rB.y;
	    K.ey.x = K.ex.y;
	    K.ey.y = mA + mB + iA * rA.x * rA.x + iB * rB.x * rB.x;

	    //    b2Vec2 impulse = -K.Solve(C);
	    /*box2d.b2Vec2*/
	    var impulse = K.Solve(C.x, C.y, box2d.b2RevoluteJoint.prototype.SolvePositionConstraints.s_impulse).SelfNeg();

	    //    cA -= mA * impulse;
	    cA.SelfMulSub(mA, impulse);
	    aA -= iA * box2d.b2Cross_V2_V2(rA, impulse);

	    //    cB += mB * impulse;
	    cB.SelfMulAdd(mB, impulse);
	    aB += iB * box2d.b2Cross_V2_V2(rB, impulse);
	  }

	  //  data.positions[this.m_indexA].c = cA;
	  data.positions[this.m_indexA].a = aA;
	  //  data.positions[this.m_indexB].c = cB;
	  data.positions[this.m_indexB].a = aB;

	  return positionError <= box2d.b2_linearSlop && angularError <= box2d.b2_angularSlop;
	};
	box2d.b2RevoluteJoint.prototype.SolvePositionConstraints.s_C = new box2d.b2Vec2();
	box2d.b2RevoluteJoint.prototype.SolvePositionConstraints.s_impulse = new box2d.b2Vec2();

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2RevoluteJoint.prototype.GetAnchorA = function (out) {
	  return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, out);
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2RevoluteJoint.prototype.GetAnchorB = function (out) {
	  return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, out);
	};

	/**
	 * Get the reaction force given the inverse time step.
	 * Unit is N.
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {number} inv_dt
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2RevoluteJoint.prototype.GetReactionForce = function (inv_dt, out) {
	  //  b2Vec2 P(this.m_impulse.x, this.m_impulse.y);
	  //  return inv_dt * P;
	  return out.Set(inv_dt * this.m_impulse.x, inv_dt * this.m_impulse.y);
	};

	/**
	 * Get the reaction torque due to the joint limit given the
	 * inverse time step.
	 * Unit is N*m.
	 * @export
	 * @return {number}
	 * @param {number} inv_dt
	 */
	box2d.b2RevoluteJoint.prototype.GetReactionTorque = function (inv_dt) {
	  return inv_dt * this.m_impulse.z;
	};

	/**
	 * The local anchor point relative to bodyA's origin.
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2RevoluteJoint.prototype.GetLocalAnchorA = function (out) {
	  return out.Copy(this.m_localAnchorA);
	};

	/**
	 * The local anchor point relative to bodyB's origin.
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2=} out
	 */
	box2d.b2RevoluteJoint.prototype.GetLocalAnchorB = function (out) {
	  return out.Copy(this.m_localAnchorB);
	};

	/**
	 * Get the reference angle.
	 * @export
	 * @return {number}
	 */
	box2d.b2RevoluteJoint.prototype.GetReferenceAngle = function () {
	  return this.m_referenceAngle;
	};

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2RevoluteJoint.prototype.GetJointAngle = function () {
	  //  b2Body* bA = this.m_bodyA;
	  //  b2Body* bB = this.m_bodyB;
	  //  return bB->this.m_sweep.a - bA->this.m_sweep.a - this.m_referenceAngle;
	  return this.m_bodyB.m_sweep.a - this.m_bodyA.m_sweep.a - this.m_referenceAngle;
	};

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2RevoluteJoint.prototype.GetJointSpeed = function () {
	  //  b2Body* bA = this.m_bodyA;
	  //  b2Body* bB = this.m_bodyB;
	  //  return bB->this.m_angularVelocity - bA->this.m_angularVelocity;
	  return this.m_bodyB.m_angularVelocity - this.m_bodyA.m_angularVelocity;
	};

	/**
	 * @export
	 * @return {boolean}
	 */
	box2d.b2RevoluteJoint.prototype.IsMotorEnabled = function () {
	  return this.m_enableMotor;
	};

	/**
	 * @export
	 * @return {void}
	 * @param {boolean} flag
	 */
	box2d.b2RevoluteJoint.prototype.EnableMotor = function (flag) {
	  if (this.m_enableMotor !== flag) {
	    this.m_bodyA.SetAwake(true);
	    this.m_bodyB.SetAwake(true);
	    this.m_enableMotor = flag;
	  }
	};

	/**
	 * Get the current motor torque given the inverse time step.
	 * Unit is N*m.
	 * @export
	 * @return {number}
	 * @param {number} inv_dt
	 */
	box2d.b2RevoluteJoint.prototype.GetMotorTorque = function (inv_dt) {
	  return inv_dt * this.m_motorImpulse;
	};

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2RevoluteJoint.prototype.GetMotorSpeed = function () {
	  return this.m_motorSpeed;
	};

	/**
	 * @export
	 * @return {void}
	 * @param {number} torque
	 */
	box2d.b2RevoluteJoint.prototype.SetMaxMotorTorque = function (torque) {
	  this.m_maxMotorTorque = torque;
	};

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2RevoluteJoint.prototype.GetMaxMotorTorque = function () {
	  return this.m_maxMotorTorque;
	};

	/**
	 * @export
	 * @return {boolean}
	 */
	box2d.b2RevoluteJoint.prototype.IsLimitEnabled = function () {
	  return this.m_enableLimit;
	};

	/**
	 * @export
	 * @return {void}
	 * @param {boolean} flag
	 */
	box2d.b2RevoluteJoint.prototype.EnableLimit = function (flag) {
	  if (flag !== this.m_enableLimit) {
	    this.m_bodyA.SetAwake(true);
	    this.m_bodyB.SetAwake(true);
	    this.m_enableLimit = flag;
	    this.m_impulse.z = 0;
	  }
	};

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2RevoluteJoint.prototype.GetLowerLimit = function () {
	  return this.m_lowerAngle;
	};

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2RevoluteJoint.prototype.GetUpperLimit = function () {
	  return this.m_upperAngle;
	};

	/**
	 * @export
	 * @return {void}
	 * @param {number} lower
	 * @param {number} upper
	 */
	box2d.b2RevoluteJoint.prototype.SetLimits = function (lower, upper) {

	  if (lower !== this.m_lowerAngle || upper !== this.m_upperAngle) {
	    this.m_bodyA.SetAwake(true);
	    this.m_bodyB.SetAwake(true);
	    this.m_impulse.z = 0;
	    this.m_lowerAngle = lower;
	    this.m_upperAngle = upper;
	  }
	};

	/**
	 * @export
	 * @return {void}
	 * @param {number} speed
	 */
	box2d.b2RevoluteJoint.prototype.SetMotorSpeed = function (speed) {
	  if (this.m_motorSpeed !== speed) {
	    this.m_bodyA.SetAwake(true);
	    this.m_bodyB.SetAwake(true);
	    this.m_motorSpeed = speed;
	  }
	};

	/**
	 * Dump to b2Log.
	 * @export
	 * @return {void}
	 */
	box2d.b2RevoluteJoint.prototype.Dump = function () {
	  if (box2d.DEBUG) {
	    var indexA = this.m_bodyA.m_islandIndex;
	    var indexB = this.m_bodyB.m_islandIndex;

	    box2d.b2Log("  /*box2d.b2RevoluteJointDef*/ var jd = new box2d.b2RevoluteJointDef();\n");
	    box2d.b2Log("  jd.bodyA = bodies[%d];\n", indexA);
	    box2d.b2Log("  jd.bodyB = bodies[%d];\n", indexB);
	    box2d.b2Log("  jd.collideConnected = %s;\n", this.m_collideConnected ? 'true' : 'false');
	    box2d.b2Log("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y);
	    box2d.b2Log("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y);
	    box2d.b2Log("  jd.referenceAngle = %.15f;\n", this.m_referenceAngle);
	    box2d.b2Log("  jd.enableLimit = %s;\n", this.m_enableLimit ? 'true' : 'false');
	    box2d.b2Log("  jd.lowerAngle = %.15f;\n", this.m_lowerAngle);
	    box2d.b2Log("  jd.upperAngle = %.15f;\n", this.m_upperAngle);
	    box2d.b2Log("  jd.enableMotor = %s;\n", this.m_enableMotor ? 'true' : 'false');
	    box2d.b2Log("  jd.motorSpeed = %.15f;\n", this.m_motorSpeed);
	    box2d.b2Log("  jd.maxMotorTorque = %.15f;\n", this.m_maxMotorTorque);
	    box2d.b2Log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
	  }
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(50);

	__webpack_require__(6);

	/**
	 * Rope joint definition. This requires two body anchor points
	 * and a maximum lengths.
	 * Note: by default the connected objects will not collide. see
	 * collideConnected in box2d.b2JointDef.
	 * @export
	 * @constructor
	 * @extends {box2d.b2JointDef}
	 */
	box2d.b2RopeJointDef = function () {
	  box2d.b2JointDef.call(this, box2d.b2JointType.e_ropeJoint); // base class constructor

	  this.localAnchorA = new box2d.b2Vec2(-1, 0);
	  this.localAnchorB = new box2d.b2Vec2(1, 0);
	}; /*
	    * Copyright (c) 2006-2011 Erin Catto http://www.box2d.org
	    *
	    * This software is provided 'as-is', without any express or implied
	    * warranty.  In no event will the authors be held liable for any damages
	    * arising from the use of this software.
	    * Permission is granted to anyone to use this software for any purpose,
	    * including commercial applications, and to alter it and redistribute it
	    * freely, subject to the following restrictions:
	    * 1. The origin of this software must not be misrepresented; you must not
	    * claim that you wrote the original software. If you use this software
	    * in a product, an acknowledgment in the product documentation would be
	    * appreciated but is not required.
	    * 2. Altered source versions must be plainly marked as such, and must not be
	    * misrepresented as being the original software.
	    * 3. This notice may not be removed or altered from any source distribution.
	    */

	goog.inherits(box2d.b2RopeJointDef, box2d.b2JointDef);

	/**
	 * The local anchor point relative to bodyA's origin.
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2RopeJointDef.prototype.localAnchorA = null;

	/**
	 * The local anchor point relative to bodyB's origin.
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2RopeJointDef.prototype.localAnchorB = null;

	/**
	 * The maximum length of the rope.
	 * Warning: this must be larger than box2d.b2_linearSlop or the
	 * joint will have no effect.
	 * @export
	 * @type {number}
	 */
	box2d.b2RopeJointDef.prototype.maxLength = 0;

	/**
	 * A rope joint enforces a maximum distance between two points
	 * on two bodies. It has no other effect.
	 * Warning: if you attempt to change the maximum length during
	 * the simulation you will get some non-physical behavior. A
	 * model that would allow you to dynamically modify the length
	 * would have some sponginess, so I chose not to implement it
	 * that way. See box2d.b2DistanceJoint if you want to
	 * dynamically control length.
	 * @export
	 * @constructor
	 * @extends {box2d.b2Joint}
	 * @param {box2d.b2RopeJointDef} def
	 */
	box2d.b2RopeJoint = function (def) {
	  box2d.b2Joint.call(this, def); // base class constructor

	  this.m_localAnchorA = def.localAnchorA.Clone();
	  this.m_localAnchorB = def.localAnchorB.Clone();
	  this.m_maxLength = def.maxLength;

	  this.m_u = new box2d.b2Vec2();
	  this.m_rA = new box2d.b2Vec2();
	  this.m_rB = new box2d.b2Vec2();
	  this.m_localCenterA = new box2d.b2Vec2();
	  this.m_localCenterB = new box2d.b2Vec2();

	  this.m_qA = new box2d.b2Rot();
	  this.m_qB = new box2d.b2Rot();
	  this.m_lalcA = new box2d.b2Vec2();
	  this.m_lalcB = new box2d.b2Vec2();
	};

	goog.inherits(box2d.b2RopeJoint, box2d.b2Joint);

	// Solver shared
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2RopeJoint.prototype.m_localAnchorA = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2RopeJoint.prototype.m_localAnchorB = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2RopeJoint.prototype.m_maxLength = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2RopeJoint.prototype.m_length = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2RopeJoint.prototype.m_impulse = 0;

	// Solver temp
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2RopeJoint.prototype.m_indexA = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2RopeJoint.prototype.m_indexB = 0;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2RopeJoint.prototype.m_u = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2RopeJoint.prototype.m_rA = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2RopeJoint.prototype.m_rB = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2RopeJoint.prototype.m_localCenterA = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2RopeJoint.prototype.m_localCenterB = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2RopeJoint.prototype.m_invMassA = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2RopeJoint.prototype.m_invMassB = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2RopeJoint.prototype.m_invIA = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2RopeJoint.prototype.m_invIB = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2RopeJoint.prototype.m_mass = 0;
	/**
	 * @export
	 * @type {box2d.b2LimitState}
	 */
	box2d.b2RopeJoint.prototype.m_state = box2d.b2LimitState.e_inactiveLimit;

	/**
	 * @export
	 * @type {box2d.b2Rot}
	 */
	box2d.b2RopeJoint.prototype.m_qA = null;
	/**
	 * @export
	 * @type {box2d.b2Rot}
	 */
	box2d.b2RopeJoint.prototype.m_qB = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2RopeJoint.prototype.m_lalcA = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2RopeJoint.prototype.m_lalcB = null;

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2SolverData} data
	 */
	box2d.b2RopeJoint.prototype.InitVelocityConstraints = function (data) {
	  this.m_indexA = this.m_bodyA.m_islandIndex;
	  this.m_indexB = this.m_bodyB.m_islandIndex;
	  this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter);
	  this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter);
	  this.m_invMassA = this.m_bodyA.m_invMass;
	  this.m_invMassB = this.m_bodyB.m_invMass;
	  this.m_invIA = this.m_bodyA.m_invI;
	  this.m_invIB = this.m_bodyB.m_invI;

	  /*box2d.b2Vec2&*/
	  var cA = data.positions[this.m_indexA].c;
	  /*float32*/
	  var aA = data.positions[this.m_indexA].a;
	  /*box2d.b2Vec2&*/
	  var vA = data.velocities[this.m_indexA].v;
	  /*float32*/
	  var wA = data.velocities[this.m_indexA].w;

	  /*box2d.b2Vec2&*/
	  var cB = data.positions[this.m_indexB].c;
	  /*float32*/
	  var aB = data.positions[this.m_indexB].a;
	  /*box2d.b2Vec2&*/
	  var vB = data.velocities[this.m_indexB].v;
	  /*float32*/
	  var wB = data.velocities[this.m_indexB].w;

	  /*box2d.b2Rot*/
	  var qA = this.m_qA.SetAngle(aA),
	      qB = this.m_qB.SetAngle(aB);

	  //  this.m_rA = b2Mul(qA, this.m_localAnchorA - this.m_localCenterA);
	  box2d.b2Sub_V2_V2(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
	  box2d.b2Mul_R_V2(qA, this.m_lalcA, this.m_rA);
	  //  this.m_rB = b2Mul(qB, this.m_localAnchorB - this.m_localCenterB);
	  box2d.b2Sub_V2_V2(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
	  box2d.b2Mul_R_V2(qB, this.m_lalcB, this.m_rB);
	  //  this.m_u = cB + this.m_rB - cA - this.m_rA;
	  this.m_u.Copy(cB).SelfAdd(this.m_rB).SelfSub(cA).SelfSub(this.m_rA);

	  this.m_length = this.m_u.Length();

	  /*float32*/
	  var C = this.m_length - this.m_maxLength;
	  if (C > 0) {
	    this.m_state = box2d.b2LimitState.e_atUpperLimit;
	  } else {
	    this.m_state = box2d.b2LimitState.e_inactiveLimit;
	  }

	  if (this.m_length > box2d.b2_linearSlop) {
	    this.m_u.SelfMul(1 / this.m_length);
	  } else {
	    this.m_u.SetZero();
	    this.m_mass = 0;
	    this.m_impulse = 0;
	    return;
	  }

	  // Compute effective mass.
	  /*float32*/
	  var crA = box2d.b2Cross_V2_V2(this.m_rA, this.m_u);
	  /*float32*/
	  var crB = box2d.b2Cross_V2_V2(this.m_rB, this.m_u);
	  /*float32*/
	  var invMass = this.m_invMassA + this.m_invIA * crA * crA + this.m_invMassB + this.m_invIB * crB * crB;

	  this.m_mass = invMass !== 0 ? 1 / invMass : 0;

	  if (data.step.warmStarting) {
	    // Scale the impulse to support a variable time step.
	    this.m_impulse *= data.step.dtRatio;

	    //    b2Vec2 P = m_impulse * m_u;
	    var P = box2d.b2Mul_S_V2(this.m_impulse, this.m_u, box2d.b2RopeJoint.prototype.InitVelocityConstraints.s_P);
	    //    vA -= m_invMassA * P;
	    vA.SelfMulSub(this.m_invMassA, P);
	    wA -= this.m_invIA * box2d.b2Cross_V2_V2(this.m_rA, P);
	    //    vB += m_invMassB * P;
	    vB.SelfMulAdd(this.m_invMassB, P);
	    wB += this.m_invIB * box2d.b2Cross_V2_V2(this.m_rB, P);
	  } else {
	    this.m_impulse = 0;
	  }

	  //  data.velocities[this.m_indexA].v = vA;
	  data.velocities[this.m_indexA].w = wA;
	  //  data.velocities[this.m_indexB].v = vB;
	  data.velocities[this.m_indexB].w = wB;
	};
	box2d.b2RopeJoint.prototype.InitVelocityConstraints.s_P = new box2d.b2Vec2();

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2SolverData} data
	 */
	box2d.b2RopeJoint.prototype.SolveVelocityConstraints = function (data) {
	  /*box2d.b2Vec2&*/
	  var vA = data.velocities[this.m_indexA].v;
	  /*float32*/
	  var wA = data.velocities[this.m_indexA].w;
	  /*box2d.b2Vec2&*/
	  var vB = data.velocities[this.m_indexB].v;
	  /*float32*/
	  var wB = data.velocities[this.m_indexB].w;

	  // Cdot = dot(u, v + cross(w, r))
	  //  b2Vec2 vpA = vA + b2Cross(wA, m_rA);
	  var vpA = box2d.b2AddCross_V2_S_V2(vA, wA, this.m_rA, box2d.b2RopeJoint.prototype.SolveVelocityConstraints.s_vpA);
	  //  b2Vec2 vpB = vB + b2Cross(wB, m_rB);
	  var vpB = box2d.b2AddCross_V2_S_V2(vB, wB, this.m_rB, box2d.b2RopeJoint.prototype.SolveVelocityConstraints.s_vpB);
	  //  float32 C = m_length - m_maxLength;
	  /*float32*/
	  var C = this.m_length - this.m_maxLength;
	  //  float32 Cdot = b2Dot(m_u, vpB - vpA);
	  /*float32*/
	  var Cdot = box2d.b2Dot_V2_V2(this.m_u, box2d.b2Sub_V2_V2(vpB, vpA, box2d.b2Vec2.s_t0));

	  // Predictive constraint.
	  if (C < 0) {
	    Cdot += data.step.inv_dt * C;
	  }

	  /*float32*/
	  var impulse = -this.m_mass * Cdot;
	  /*float32*/
	  var oldImpulse = this.m_impulse;
	  this.m_impulse = box2d.b2Min(0, this.m_impulse + impulse);
	  impulse = this.m_impulse - oldImpulse;

	  //  b2Vec2 P = impulse * m_u;
	  var P = box2d.b2Mul_S_V2(impulse, this.m_u, box2d.b2RopeJoint.prototype.SolveVelocityConstraints.s_P);
	  //  vA -= m_invMassA * P;
	  vA.SelfMulSub(this.m_invMassA, P);
	  wA -= this.m_invIA * box2d.b2Cross_V2_V2(this.m_rA, P);
	  //  vB += m_invMassB * P;
	  vB.SelfMulAdd(this.m_invMassB, P);
	  wB += this.m_invIB * box2d.b2Cross_V2_V2(this.m_rB, P);

	  //  data.velocities[this.m_indexA].v = vA;
	  data.velocities[this.m_indexA].w = wA;
	  //  data.velocities[this.m_indexB].v = vB;
	  data.velocities[this.m_indexB].w = wB;
	};
	box2d.b2RopeJoint.prototype.SolveVelocityConstraints.s_vpA = new box2d.b2Vec2();
	box2d.b2RopeJoint.prototype.SolveVelocityConstraints.s_vpB = new box2d.b2Vec2();
	box2d.b2RopeJoint.prototype.SolveVelocityConstraints.s_P = new box2d.b2Vec2();

	/**
	 * @export
	 * @return {boolean}
	 * @param {box2d.b2SolverData} data
	 */
	box2d.b2RopeJoint.prototype.SolvePositionConstraints = function (data) {
	  /*box2d.b2Vec2&*/
	  var cA = data.positions[this.m_indexA].c;
	  /*float32*/
	  var aA = data.positions[this.m_indexA].a;
	  /*box2d.b2Vec2&*/
	  var cB = data.positions[this.m_indexB].c;
	  /*float32*/
	  var aB = data.positions[this.m_indexB].a;

	  /*box2d.b2Rot*/
	  var qA = this.m_qA.SetAngle(aA),
	      qB = this.m_qB.SetAngle(aB);

	  //  b2Vec2 rA = b2Mul(qA, this.m_localAnchorA - this.m_localCenterA);
	  box2d.b2Sub_V2_V2(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
	  var rA = box2d.b2Mul_R_V2(qA, this.m_lalcA, this.m_rA);
	  //  b2Vec2 rB = b2Mul(qB, this.m_localAnchorB - this.m_localCenterB);
	  box2d.b2Sub_V2_V2(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
	  var rB = box2d.b2Mul_R_V2(qB, this.m_lalcB, this.m_rB);
	  //  b2Vec2 u = cB + rB - cA - rA;
	  /*box2d.b2Vec2*/
	  var u = this.m_u.Copy(cB).SelfAdd(rB).SelfSub(cA).SelfSub(rA);

	  /*float32*/
	  var length = u.Normalize();
	  /*float32*/
	  var C = length - this.m_maxLength;

	  C = box2d.b2Clamp(C, 0, box2d.b2_maxLinearCorrection);

	  /*float32*/
	  var impulse = -this.m_mass * C;
	  //  b2Vec2 P = impulse * u;
	  var P = box2d.b2Mul_S_V2(impulse, u, box2d.b2RopeJoint.prototype.SolvePositionConstraints.s_P);

	  //  cA -= m_invMassA * P;
	  cA.SelfMulSub(this.m_invMassA, P);
	  aA -= this.m_invIA * box2d.b2Cross_V2_V2(rA, P);
	  //  cB += m_invMassB * P;
	  cB.SelfMulAdd(this.m_invMassB, P);
	  aB += this.m_invIB * box2d.b2Cross_V2_V2(rB, P);

	  //  data.positions[this.m_indexA].c = cA;
	  data.positions[this.m_indexA].a = aA;
	  //  data.positions[this.m_indexB].c = cB;
	  data.positions[this.m_indexB].a = aB;

	  return length - this.m_maxLength < box2d.b2_linearSlop;
	};
	box2d.b2RopeJoint.prototype.SolvePositionConstraints.s_P = new box2d.b2Vec2();

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2RopeJoint.prototype.GetAnchorA = function (out) {
	  return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, out);
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2RopeJoint.prototype.GetAnchorB = function (out) {
	  return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, out);
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {number} inv_dt
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2RopeJoint.prototype.GetReactionForce = function (inv_dt, out) {
	  /*box2d.b2Vec2*/
	  var F = box2d.b2Mul_S_V2(inv_dt * this.m_impulse, this.m_u, out);
	  return F;
	  //  return out.Set(inv_dt * this.m_linearImpulse.x, inv_dt * this.m_linearImpulse.y);
	};

	/**
	 * @export
	 * @return {number}
	 * @param {number} inv_dt
	 */
	box2d.b2RopeJoint.prototype.GetReactionTorque = function (inv_dt) {
	  return 0;
	};

	/**
	 * The local anchor point relative to bodyA's origin.
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2RopeJoint.prototype.GetLocalAnchorA = function (out) {
	  return out.Copy(this.m_localAnchorA);
	};

	/**
	 * The local anchor point relative to bodyB's origin.
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2RopeJoint.prototype.GetLocalAnchorB = function (out) {
	  return out.Copy(this.m_localAnchorB);
	};

	/**
	 * Set/Get the maximum length of the rope.
	 * @export
	 * @return {void}
	 * @param {number} length
	 */
	box2d.b2RopeJoint.prototype.SetMaxLength = function (length) {
	  this.m_maxLength = length;
	};
	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2RopeJoint.prototype.GetMaxLength = function () {
	  return this.m_maxLength;
	};

	/**
	 * @export
	 * @return {box2d.b2LimitState}
	 */
	box2d.b2RopeJoint.prototype.GetLimitState = function () {
	  return this.m_state;
	};

	/**
	 * Dump joint to dmLog
	 * @export
	 * @return {void}
	 */
	box2d.b2RopeJoint.prototype.Dump = function () {
	  if (box2d.DEBUG) {
	    var indexA = this.m_bodyA.m_islandIndex;
	    var indexB = this.m_bodyB.m_islandIndex;

	    box2d.b2Log("  /*box2d.b2RopeJointDef*/ var jd = new box2d.b2RopeJointDef();\n");
	    box2d.b2Log("  jd.bodyA = bodies[%d];\n", indexA);
	    box2d.b2Log("  jd.bodyB = bodies[%d];\n", indexB);
	    box2d.b2Log("  jd.collideConnected = %s;\n", this.m_collideConnected ? 'true' : 'false');
	    box2d.b2Log("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y);
	    box2d.b2Log("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y);
	    box2d.b2Log("  jd.maxLength = %.15f;\n", this.m_maxLength);
	    box2d.b2Log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
	  }
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(50);

	__webpack_require__(6);

	/**
	 * Weld joint definition. You need to specify local anchor
	 * points where they are attached and the relative body angle.
	 * The position of the anchor points is important for computing
	 * the reaction torque.
	 * @export
	 * @constructor
	 * @extends {box2d.b2JointDef}
	 */
	box2d.b2WeldJointDef = function () {
	  box2d.b2JointDef.call(this, box2d.b2JointType.e_weldJoint); // base class constructor

	  this.localAnchorA = new box2d.b2Vec2();
	  this.localAnchorB = new box2d.b2Vec2();
	}; /*
	    * Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
	    *
	    * This software is provided 'as-is', without any express or implied
	    * warranty.  In no event will the authors be held liable for any damages
	    * arising from the use of this software.
	    * Permission is granted to anyone to use this software for any purpose,
	    * including commercial applications, and to alter it and redistribute it
	    * freely, subject to the following restrictions:
	    * 1. The origin of this software must not be misrepresented; you must not
	    * claim that you wrote the original software. If you use this software
	    * in a product, an acknowledgment in the product documentation would be
	    * appreciated but is not required.
	    * 2. Altered source versions must be plainly marked as such, and must not be
	    * misrepresented as being the original software.
	    * 3. This notice may not be removed or altered from any source distribution.
	    */

	goog.inherits(box2d.b2WeldJointDef, box2d.b2JointDef);

	/**
	 * The local anchor point relative to bodyA's origin.
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2WeldJointDef.prototype.localAnchorA = null;

	/**
	 * The local anchor point relative to bodyB's origin.
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2WeldJointDef.prototype.localAnchorB = null;

	/**
	 * The bodyB angle minus bodyA angle in the reference state
	 * (radians).
	 * @export
	 * @type {number}
	 */
	box2d.b2WeldJointDef.prototype.referenceAngle = 0;

	/**
	 * The mass-spring-damper frequency in Hertz. Rotation only.
	 * Disable softness with a value of 0.
	 * @export
	 * @type {number}
	 */
	box2d.b2WeldJointDef.prototype.frequencyHz = 0;

	/**
	 * The damping ratio. 0 = no damping, 1 = critical damping.
	 * @export
	 * @type {number}
	 */
	box2d.b2WeldJointDef.prototype.dampingRatio = 0;

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2Body} bA
	 * @param {box2d.b2Body} bB
	 * @param {box2d.b2Vec2} anchor
	 */
	box2d.b2WeldJointDef.prototype.Initialize = function (bA, bB, anchor) {
	  this.bodyA = bA;
	  this.bodyB = bB;
	  this.bodyA.GetLocalPoint(anchor, this.localAnchorA);
	  this.bodyB.GetLocalPoint(anchor, this.localAnchorB);
	  this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle();
	};

	/**
	 * A weld joint essentially glues two bodies together. A weld
	 * joint may distort somewhat because the island constraint
	 * solver is approximate.
	 * @export
	 * @constructor
	 * @extends {box2d.b2Joint}
	 * @param {box2d.b2WeldJointDef} def
	 */
	box2d.b2WeldJoint = function (def) {
	  box2d.b2Joint.call(this, def); // base class constructor

	  this.m_frequencyHz = def.frequencyHz;
	  this.m_dampingRatio = def.dampingRatio;

	  this.m_localAnchorA = def.localAnchorA.Clone();
	  this.m_localAnchorB = def.localAnchorB.Clone();
	  this.m_referenceAngle = def.referenceAngle;
	  this.m_impulse = new box2d.b2Vec3(0, 0, 0);

	  this.m_rA = new box2d.b2Vec2();
	  this.m_rB = new box2d.b2Vec2();
	  this.m_localCenterA = new box2d.b2Vec2();
	  this.m_localCenterB = new box2d.b2Vec2();
	  this.m_mass = new box2d.b2Mat33();

	  this.m_qA = new box2d.b2Rot();
	  this.m_qB = new box2d.b2Rot();
	  this.m_lalcA = new box2d.b2Vec2();
	  this.m_lalcB = new box2d.b2Vec2();
	  this.m_K = new box2d.b2Mat33();
	};

	goog.inherits(box2d.b2WeldJoint, box2d.b2Joint);

	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2WeldJoint.prototype.m_frequencyHz = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2WeldJoint.prototype.m_dampingRatio = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2WeldJoint.prototype.m_bias = 0;

	// Solver shared
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2WeldJoint.prototype.m_localAnchorA = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2WeldJoint.prototype.m_localAnchorB = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2WeldJoint.prototype.m_referenceAngle = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2WeldJoint.prototype.m_gamma = 0;
	/**
	 * @export
	 * @type {box2d.b2Vec3}
	 */
	box2d.b2WeldJoint.prototype.m_impulse = null;

	// Solver temp
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2WeldJoint.prototype.m_indexA = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2WeldJoint.prototype.m_indexB = 0;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2WeldJoint.prototype.m_rA = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2WeldJoint.prototype.m_rB = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2WeldJoint.prototype.m_localCenterA = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2WeldJoint.prototype.m_localCenterB = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2WeldJoint.prototype.m_invMassA = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2WeldJoint.prototype.m_invMassB = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2WeldJoint.prototype.m_invIA = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2WeldJoint.prototype.m_invIB = 0;
	/**
	 * @export
	 * @type {box2d.b2Mat33}
	 */
	box2d.b2WeldJoint.prototype.m_mass = null;

	/**
	 * @export
	 * @type {box2d.b2Rot}
	 */
	box2d.b2WeldJoint.prototype.m_qA = null;
	/**
	 * @export
	 * @type {box2d.b2Rot}
	 */
	box2d.b2WeldJoint.prototype.m_qB = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2WeldJoint.prototype.m_lalcA = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2WeldJoint.prototype.m_lalcB = null;
	/**
	 * @export
	 * @type {box2d.b2Mat33}
	 */
	box2d.b2WeldJoint.prototype.m_K = null;

	/**
	 * @param {box2d.b2SolverData} data
	 */
	box2d.b2WeldJoint.prototype.InitVelocityConstraints = function (data) {
	  this.m_indexA = this.m_bodyA.m_islandIndex;
	  this.m_indexB = this.m_bodyB.m_islandIndex;
	  this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter);
	  this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter);
	  this.m_invMassA = this.m_bodyA.m_invMass;
	  this.m_invMassB = this.m_bodyB.m_invMass;
	  this.m_invIA = this.m_bodyA.m_invI;
	  this.m_invIB = this.m_bodyB.m_invI;

	  /*float32*/
	  var aA = data.positions[this.m_indexA].a;
	  /*box2d.b2Vec2&*/
	  var vA = data.velocities[this.m_indexA].v;
	  /*float32*/
	  var wA = data.velocities[this.m_indexA].w;

	  /*float32*/
	  var aB = data.positions[this.m_indexB].a;
	  /*box2d.b2Vec2&*/
	  var vB = data.velocities[this.m_indexB].v;
	  /*float32*/
	  var wB = data.velocities[this.m_indexB].w;

	  /*box2d.b2Rot*/
	  var qA = this.m_qA.SetAngle(aA),
	      qB = this.m_qB.SetAngle(aB);

	  //  m_rA = b2Mul(qA, m_localAnchorA - m_localCenterA);
	  box2d.b2Sub_V2_V2(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
	  box2d.b2Mul_R_V2(qA, this.m_lalcA, this.m_rA);
	  //  m_rB = b2Mul(qB, m_localAnchorB - m_localCenterB);
	  box2d.b2Sub_V2_V2(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
	  box2d.b2Mul_R_V2(qB, this.m_lalcB, this.m_rB);

	  // J = [-I -r1_skew I r2_skew]
	  //     [ 0       -1 0       1]
	  // r_skew = [-ry; rx]

	  // Matlab
	  // K = [ mA+r1y^2*iA+mB+r2y^2*iB,  -r1y*iA*r1x-r2y*iB*r2x,          -r1y*iA-r2y*iB]
	  //     [  -r1y*iA*r1x-r2y*iB*r2x, mA+r1x^2*iA+mB+r2x^2*iB,           r1x*iA+r2x*iB]
	  //     [          -r1y*iA-r2y*iB,           r1x*iA+r2x*iB,                   iA+iB]

	  /*float32*/
	  var mA = this.m_invMassA,
	      mB = this.m_invMassB;
	  /*float32*/
	  var iA = this.m_invIA,
	      iB = this.m_invIB;

	  /*b2Mat33*/
	  var K = this.m_K;
	  K.ex.x = mA + mB + this.m_rA.y * this.m_rA.y * iA + this.m_rB.y * this.m_rB.y * iB;
	  K.ey.x = -this.m_rA.y * this.m_rA.x * iA - this.m_rB.y * this.m_rB.x * iB;
	  K.ez.x = -this.m_rA.y * iA - this.m_rB.y * iB;
	  K.ex.y = K.ey.x;
	  K.ey.y = mA + mB + this.m_rA.x * this.m_rA.x * iA + this.m_rB.x * this.m_rB.x * iB;
	  K.ez.y = this.m_rA.x * iA + this.m_rB.x * iB;
	  K.ex.z = K.ez.x;
	  K.ey.z = K.ez.y;
	  K.ez.z = iA + iB;

	  if (this.m_frequencyHz > 0) {
	    K.GetInverse22(this.m_mass);

	    /*float32*/
	    var invM = iA + iB;
	    /*float32*/
	    var m = invM > 0 ? 1 / invM : 0;

	    /*float32*/
	    var C = aB - aA - this.m_referenceAngle;

	    // Frequency
	    /*float32*/
	    var omega = 2 * box2d.b2_pi * this.m_frequencyHz;

	    // Damping coefficient
	    /*float32*/
	    var d = 2 * m * this.m_dampingRatio * omega;

	    // Spring stiffness
	    /*float32*/
	    var k = m * omega * omega;

	    // magic formulas
	    /*float32*/
	    var h = data.step.dt;
	    this.m_gamma = h * (d + h * k);
	    this.m_gamma = this.m_gamma !== 0 ? 1 / this.m_gamma : 0;
	    this.m_bias = C * h * k * this.m_gamma;

	    invM += this.m_gamma;
	    this.m_mass.ez.z = invM !== 0 ? 1 / invM : 0;
	  } else if (K.ez.z === 0) {
	    K.GetInverse22(this.m_mass);
	    this.m_gamma = 0;
	    this.m_bias = 0;
	  } else {
	    K.GetSymInverse33(this.m_mass);
	    this.m_gamma = 0;
	    this.m_bias = 0;
	  }

	  if (data.step.warmStarting) {
	    // Scale impulses to support a variable time step.
	    this.m_impulse.SelfMulScalar(data.step.dtRatio);

	    //    box2d.b2Vec2 P(m_impulse.x, m_impulse.y);
	    var P = box2d.b2WeldJoint.prototype.InitVelocityConstraints.s_P.Set(this.m_impulse.x, this.m_impulse.y);

	    //    vA -= mA * P;
	    vA.SelfMulSub(mA, P);
	    wA -= iA * (box2d.b2Cross_V2_V2(this.m_rA, P) + this.m_impulse.z);

	    //    vB += mB * P;
	    vB.SelfMulAdd(mB, P);
	    wB += iB * (box2d.b2Cross_V2_V2(this.m_rB, P) + this.m_impulse.z);
	  } else {
	    this.m_impulse.SetZero();
	  }

	  //  data.velocities[this.m_indexA].v = vA;
	  data.velocities[this.m_indexA].w = wA;
	  //  data.velocities[this.m_indexB].v = vB;
	  data.velocities[this.m_indexB].w = wB;
	};
	box2d.b2WeldJoint.prototype.InitVelocityConstraints.s_P = new box2d.b2Vec2();

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2SolverData} data
	 */
	box2d.b2WeldJoint.prototype.SolveVelocityConstraints = function (data) {
	  /*box2d.b2Vec2&*/
	  var vA = data.velocities[this.m_indexA].v;
	  /*float32*/
	  var wA = data.velocities[this.m_indexA].w;
	  /*box2d.b2Vec2&*/
	  var vB = data.velocities[this.m_indexB].v;
	  /*float32*/
	  var wB = data.velocities[this.m_indexB].w;

	  /*float32*/
	  var mA = this.m_invMassA,
	      mB = this.m_invMassB;
	  /*float32*/
	  var iA = this.m_invIA,
	      iB = this.m_invIB;

	  if (this.m_frequencyHz > 0) {
	    /*float32*/
	    var Cdot2 = wB - wA;

	    /*float32*/
	    var impulse2 = -this.m_mass.ez.z * (Cdot2 + this.m_bias + this.m_gamma * this.m_impulse.z);
	    this.m_impulse.z += impulse2;

	    wA -= iA * impulse2;
	    wB += iB * impulse2;

	    //    b2Vec2 Cdot1 = vB + b2CrossSV(wB, this.m_rB) - vA - b2CrossSV(wA, this.m_rA);
	    var Cdot1 = box2d.b2Sub_V2_V2(box2d.b2AddCross_V2_S_V2(vB, wB, this.m_rB, box2d.b2Vec2.s_t0), box2d.b2AddCross_V2_S_V2(vA, wA, this.m_rA, box2d.b2Vec2.s_t1), box2d.b2WeldJoint.prototype.SolveVelocityConstraints.s_Cdot1);

	    //    b2Vec2 impulse1 = -b2Mul22(m_mass, Cdot1);
	    var impulse1 = box2d.b2Mul_M33_X_Y(this.m_mass, Cdot1.x, Cdot1.y, box2d.b2WeldJoint.prototype.SolveVelocityConstraints.s_impulse1).SelfNeg();
	    this.m_impulse.x += impulse1.x;
	    this.m_impulse.y += impulse1.y;

	    //    b2Vec2 P = impulse1;
	    var P = impulse1;

	    //    vA -= mA * P;
	    vA.SelfMulSub(mA, P);
	    //    wA -= iA * b2Cross(m_rA, P);
	    wA -= iA * box2d.b2Cross_V2_V2(this.m_rA, P);

	    //    vB += mB * P;
	    vB.SelfMulAdd(mB, P);
	    //    wB += iB * b2Cross(m_rB, P);
	    wB += iB * box2d.b2Cross_V2_V2(this.m_rB, P);
	  } else {
	    //    b2Vec2 Cdot1 = vB + b2Cross(wB, this.m_rB) - vA - b2Cross(wA, this.m_rA);
	    var Cdot1 = box2d.b2Sub_V2_V2(box2d.b2AddCross_V2_S_V2(vB, wB, this.m_rB, box2d.b2Vec2.s_t0), box2d.b2AddCross_V2_S_V2(vA, wA, this.m_rA, box2d.b2Vec2.s_t1), box2d.b2WeldJoint.prototype.SolveVelocityConstraints.s_Cdot1);
	    /*float32*/
	    var Cdot2 = wB - wA;
	    //    b2Vec3 var Cdot(Cdot1.x, Cdot1.y, Cdot2);

	    //    b2Vec3 impulse = -b2Mul(m_mass, Cdot);
	    var impulse = box2d.b2Mul_M33_X_Y_Z(this.m_mass, Cdot1.x, Cdot1.y, Cdot2, box2d.b2WeldJoint.prototype.SolveVelocityConstraints.s_impulse).SelfNeg();
	    this.m_impulse.SelfAdd(impulse);

	    //    box2d.b2Vec2 P(impulse.x, impulse.y);
	    var P = box2d.b2WeldJoint.prototype.SolveVelocityConstraints.s_P.Set(impulse.x, impulse.y);

	    //    vA -= mA * P;
	    vA.SelfMulSub(mA, P);
	    wA -= iA * (box2d.b2Cross_V2_V2(this.m_rA, P) + impulse.z);

	    //    vB += mB * P;
	    vB.SelfMulAdd(mB, P);
	    wB += iB * (box2d.b2Cross_V2_V2(this.m_rB, P) + impulse.z);
	  }

	  //  data.velocities[this.m_indexA].v = vA;
	  data.velocities[this.m_indexA].w = wA;
	  //  data.velocities[this.m_indexB].v = vB;
	  data.velocities[this.m_indexB].w = wB;
	};
	box2d.b2WeldJoint.prototype.SolveVelocityConstraints.s_Cdot1 = new box2d.b2Vec2();
	box2d.b2WeldJoint.prototype.SolveVelocityConstraints.s_impulse1 = new box2d.b2Vec2();
	box2d.b2WeldJoint.prototype.SolveVelocityConstraints.s_impulse = new box2d.b2Vec3();
	box2d.b2WeldJoint.prototype.SolveVelocityConstraints.s_P = new box2d.b2Vec2();

	/**
	 * @export
	 * @return {boolean}
	 * @param {box2d.b2SolverData} data
	 */
	box2d.b2WeldJoint.prototype.SolvePositionConstraints = function (data) {
	  /*box2d.b2Vec2&*/
	  var cA = data.positions[this.m_indexA].c;
	  /*float32*/
	  var aA = data.positions[this.m_indexA].a;
	  /*box2d.b2Vec2&*/
	  var cB = data.positions[this.m_indexB].c;
	  /*float32*/
	  var aB = data.positions[this.m_indexB].a;

	  /*box2d.b2Rot*/
	  var qA = this.m_qA.SetAngle(aA),
	      qB = this.m_qB.SetAngle(aB);

	  /*float32*/
	  var mA = this.m_invMassA,
	      mB = this.m_invMassB;
	  /*float32*/
	  var iA = this.m_invIA,
	      iB = this.m_invIB;

	  //  b2Vec2 rA = b2Mul(qA, m_localAnchorA - m_localCenterA);
	  box2d.b2Sub_V2_V2(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
	  var rA = box2d.b2Mul_R_V2(qA, this.m_lalcA, this.m_rA);
	  //  b2Vec2 rB = b2Mul(qB, m_localAnchorB - m_localCenterB);
	  box2d.b2Sub_V2_V2(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
	  var rB = box2d.b2Mul_R_V2(qB, this.m_lalcB, this.m_rB);

	  /*float32*/
	  var positionError, angularError;

	  /*b2Mat33*/
	  var K = this.m_K;
	  K.ex.x = mA + mB + rA.y * rA.y * iA + rB.y * rB.y * iB;
	  K.ey.x = -rA.y * rA.x * iA - rB.y * rB.x * iB;
	  K.ez.x = -rA.y * iA - rB.y * iB;
	  K.ex.y = K.ey.x;
	  K.ey.y = mA + mB + rA.x * rA.x * iA + rB.x * rB.x * iB;
	  K.ez.y = rA.x * iA + rB.x * iB;
	  K.ex.z = K.ez.x;
	  K.ey.z = K.ez.y;
	  K.ez.z = iA + iB;

	  if (this.m_frequencyHz > 0) {
	    //    b2Vec2 C1 =  cB + rB - cA - rA;
	    var C1 = box2d.b2Sub_V2_V2(box2d.b2Add_V2_V2(cB, rB, box2d.b2Vec2.s_t0), box2d.b2Add_V2_V2(cA, rA, box2d.b2Vec2.s_t1), box2d.b2WeldJoint.prototype.SolvePositionConstraints.s_C1);
	    positionError = C1.Length();
	    angularError = 0;

	    //    b2Vec2 P = -K.Solve22(C1);
	    var P = K.Solve22(C1.x, C1.y, box2d.b2WeldJoint.prototype.SolvePositionConstraints.s_P).SelfNeg();

	    //    cA -= mA * P;
	    cA.SelfMulSub(mA, P);
	    aA -= iA * box2d.b2Cross_V2_V2(rA, P);

	    //    cB += mB * P;
	    cB.SelfMulAdd(mB, P);
	    aB += iB * box2d.b2Cross_V2_V2(rB, P);
	  } else {
	    //    b2Vec2 C1 =  cB + rB - cA - rA;
	    var C1 = box2d.b2Sub_V2_V2(box2d.b2Add_V2_V2(cB, rB, box2d.b2Vec2.s_t0), box2d.b2Add_V2_V2(cA, rA, box2d.b2Vec2.s_t1), box2d.b2WeldJoint.prototype.SolvePositionConstraints.s_C1);
	    /*float32*/
	    var C2 = aB - aA - this.m_referenceAngle;

	    positionError = C1.Length();
	    angularError = box2d.b2Abs(C2);

	    //    b2Vec3 C(C1.x, C1.y, C2);

	    //    b2Vec3 impulse;
	    /*box2d.b2Vec3*/
	    var impulse = box2d.b2WeldJoint.prototype.SolvePositionConstraints.s_impulse;
	    if (K.ez.z > 0) {
	      //      impulse = -K.Solve33(C);
	      K.Solve33(C1.x, C1.y, C2, impulse).SelfNeg();
	    } else {
	      //      b2Vec2 impulse2 = -K.Solve22(C1);
	      var impulse2 = K.Solve22(C1.x, C1.y, box2d.b2WeldJoint.prototype.SolvePositionConstraints.s_impulse2).SelfNeg();
	      //      impulse.Set(impulse2.x, impulse2.y, 0.0f);
	      impulse.x = impulse2.x;
	      impulse.y = impulse2.y;
	      impulse.z = 0;
	    }

	    //    b2Vec2 P(impulse.x, impulse.y);
	    var P = box2d.b2WeldJoint.prototype.SolvePositionConstraints.s_P.Set(impulse.x, impulse.y);

	    //    cA -= mA * P;
	    cA.SelfMulSub(mA, P);
	    aA -= iA * (box2d.b2Cross_V2_V2(this.m_rA, P) + impulse.z);

	    //    cB += mB * P;
	    cB.SelfMulAdd(mB, P);
	    aB += iB * (box2d.b2Cross_V2_V2(this.m_rB, P) + impulse.z);
	  }

	  //  data.positions[this.m_indexA].c = cA;
	  data.positions[this.m_indexA].a = aA;
	  //  data.positions[this.m_indexB].c = cB;
	  data.positions[this.m_indexB].a = aB;

	  return positionError <= box2d.b2_linearSlop && angularError <= box2d.b2_angularSlop;
	};
	box2d.b2WeldJoint.prototype.SolvePositionConstraints.s_C1 = new box2d.b2Vec2();
	box2d.b2WeldJoint.prototype.SolvePositionConstraints.s_P = new box2d.b2Vec2();
	box2d.b2WeldJoint.prototype.SolvePositionConstraints.s_impulse = new box2d.b2Vec3();
	box2d.b2WeldJoint.prototype.SolvePositionConstraints.s_impulse2 = new box2d.b2Vec2();

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2WeldJoint.prototype.GetAnchorA = function (out) {
	  return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, out);
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2WeldJoint.prototype.GetAnchorB = function (out) {
	  return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, out);
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {number} inv_dt
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2WeldJoint.prototype.GetReactionForce = function (inv_dt, out) {
	  //  box2d.b2Vec2 P(this.m_impulse.x, this.m_impulse.y);
	  //  return inv_dt * P;
	  return out.Set(inv_dt * this.m_impulse.x, inv_dt * this.m_impulse.y);
	};

	/**
	 * @export
	 * @return {number}
	 * @param {number} inv_dt
	 */
	box2d.b2WeldJoint.prototype.GetReactionTorque = function (inv_dt) {
	  return inv_dt * this.m_impulse.z;
	};

	/**
	 * The local anchor point relative to bodyA's origin.
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2WeldJoint.prototype.GetLocalAnchorA = function (out) {
	  return out.Copy(this.m_localAnchorA);
	};

	/**
	 * The local anchor point relative to bodyB's origin.
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2WeldJoint.prototype.GetLocalAnchorB = function (out) {
	  return out.Copy(this.m_localAnchorB);
	};

	/**
	 * Get the reference angle.
	 * @export
	 * @return {number}
	 */
	box2d.b2WeldJoint.prototype.GetReferenceAngle = function () {
	  return this.m_referenceAngle;
	};

	/**
	 * Set/get frequency in Hz.
	 * @return {void}
	 * @param {number} hz
	 */
	box2d.b2WeldJoint.prototype.SetFrequency = function (hz) {
	  this.m_frequencyHz = hz;
	};
	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2WeldJoint.prototype.GetFrequency = function () {
	  return this.m_frequencyHz;
	};

	/**
	 * Set/get damping ratio.
	 * @return {void}
	 * @param {number} ratio
	 */
	box2d.b2WeldJoint.prototype.SetDampingRatio = function (ratio) {
	  this.m_dampingRatio = ratio;
	};
	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2WeldJoint.prototype.GetDampingRatio = function () {
	  return this.m_dampingRatio;
	};

	/**
	 * Dump to b2Log
	 * @export
	 * @return {void}
	 */
	box2d.b2WeldJoint.prototype.Dump = function () {
	  if (box2d.DEBUG) {
	    var indexA = this.m_bodyA.m_islandIndex;
	    var indexB = this.m_bodyB.m_islandIndex;

	    box2d.b2Log("  /*box2d.b2WeldJointDef*/ var jd = new box2d.b2WeldJointDef();\n");
	    box2d.b2Log("  jd.bodyA = bodies[%d];\n", indexA);
	    box2d.b2Log("  jd.bodyB = bodies[%d];\n", indexB);
	    box2d.b2Log("  jd.collideConnected = %s;\n", this.m_collideConnected ? 'true' : 'false');
	    box2d.b2Log("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y);
	    box2d.b2Log("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y);
	    box2d.b2Log("  jd.referenceAngle = %.15f;\n", this.m_referenceAngle);
	    box2d.b2Log("  jd.frequencyHz = %.15f;\n", this.m_frequencyHz);
	    box2d.b2Log("  jd.dampingRatio = %.15f;\n", this.m_dampingRatio);
	    box2d.b2Log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
	  }
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(6);

	/**
	 * Wheel joint definition. This requires defining a line of
	 * motion using an axis and an anchor point. The definition uses
	 * local anchor points and a local axis so that the initial
	 * configuration can violate the constraint slightly. The joint
	 * translation is zero when the local anchor points coincide in
	 * world space. Using local anchors and a local axis helps when
	 * saving and loading a game.
	 * @export
	 * @constructor
	 * @extends {box2d.b2JointDef}
	 */
	/*
	 * Copyright (c) 2006-2007 Erin Catto http://www.box2d.org
	 *
	 * This software is provided 'as-is', without any express or implied
	 * warranty.  In no event will the authors be held liable for any damages
	 * arising from the use of this software.
	 * Permission is granted to anyone to use this software for any purpose,
	 * including commercial applications, and to alter it and redistribute it
	 * freely, subject to the following restrictions:
	 * 1. The origin of this software must not be misrepresented; you must not
	 * claim that you wrote the original software. If you use this software
	 * in a product, an acknowledgment in the product documentation would be
	 * appreciated but is not required.
	 * 2. Altered source versions must be plainly marked as such, and must not be
	 * misrepresented as being the original software.
	 * 3. This notice may not be removed or altered from any source distribution.
	 */

	box2d.b2WheelJointDef = function () {
	  box2d.b2JointDef.call(this, box2d.b2JointType.e_wheelJoint); // base class constructor

	  this.localAnchorA = new box2d.b2Vec2(0, 0);
	  this.localAnchorB = new box2d.b2Vec2(0, 0);
	  this.localAxisA = new box2d.b2Vec2(1, 0);
	};

	goog.inherits(box2d.b2WheelJointDef, box2d.b2JointDef);

	/**
	 * The local anchor point relative to bodyA's origin.
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2WheelJointDef.prototype.localAnchorA = null;

	/**
	 * The local anchor point relative to bodyB's origin.
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2WheelJointDef.prototype.localAnchorB = null;

	/**
	 * The local translation axis in bodyA.
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2WheelJointDef.prototype.localAxisA = null;

	/**
	 * Enable/disable the joint motor.
	 * @export
	 * @type {boolean}
	 */
	box2d.b2WheelJointDef.prototype.enableMotor = false;

	/**
	 * The maximum motor torque, usually in N-m.
	 * @export
	 * @type {number}
	 */
	box2d.b2WheelJointDef.prototype.maxMotorTorque = 0;

	/**
	 * The desired motor speed in radians per second.
	 * @export
	 * @type {number}
	 */
	box2d.b2WheelJointDef.prototype.motorSpeed = 0;

	/**
	 * Suspension frequency, zero indicates no suspension
	 * @export
	 * @type {number}
	 */
	box2d.b2WheelJointDef.prototype.frequencyHz = 2;

	/**
	 * Suspension damping ratio, one indicates critical damping
	 * @export
	 * @type {number}
	 */
	box2d.b2WheelJointDef.prototype.dampingRatio = 0.7;

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2Body} bA
	 * @param {box2d.b2Body} bB
	 * @param {box2d.b2Vec2} anchor
	 * @param {box2d.b2Vec2} axis
	 */
	box2d.b2WheelJointDef.prototype.Initialize = function (bA, bB, anchor, axis) {
	  this.bodyA = bA;
	  this.bodyB = bB;
	  this.bodyA.GetLocalPoint(anchor, this.localAnchorA);
	  this.bodyB.GetLocalPoint(anchor, this.localAnchorB);
	  this.bodyA.GetLocalVector(axis, this.localAxisA);
	};

	/**
	 * A wheel joint. This joint provides two degrees of freedom:
	 * translation along an axis fixed in bodyA and rotation in the
	 * plane. In other words, it is a point to line constraint with
	 * a rotational motor and a linear spring/damper.
	 * This joint is designed for vehicle suspensions.
	 * @export
	 * @constructor
	 * @extends {box2d.b2Joint}
	 * @param {box2d.b2WheelJointDef} def
	 */
	box2d.b2WheelJoint = function (def) {
	  box2d.b2Joint.call(this, def); // base class constructor

	  this.m_frequencyHz = def.frequencyHz;
	  this.m_dampingRatio = def.dampingRatio;

	  this.m_localAnchorA = def.localAnchorA.Clone();
	  this.m_localAnchorB = def.localAnchorB.Clone();
	  this.m_localXAxisA = def.localAxisA.Clone();
	  this.m_localYAxisA = box2d.b2Cross_S_V2(1.0, this.m_localXAxisA, new box2d.b2Vec2());

	  this.m_maxMotorTorque = def.maxMotorTorque;
	  this.m_motorSpeed = def.motorSpeed;
	  this.m_enableMotor = def.enableMotor;

	  this.m_localCenterA = new box2d.b2Vec2();
	  this.m_localCenterB = new box2d.b2Vec2();

	  this.m_ax = new box2d.b2Vec2(), this.m_ay = new box2d.b2Vec2();

	  this.m_qA = new box2d.b2Rot();
	  this.m_qB = new box2d.b2Rot();
	  this.m_lalcA = new box2d.b2Vec2();
	  this.m_lalcB = new box2d.b2Vec2();
	  this.m_rA = new box2d.b2Vec2();
	  this.m_rB = new box2d.b2Vec2();

	  this.m_ax.SetZero();
	  this.m_ay.SetZero();
	};

	goog.inherits(box2d.b2WheelJoint, box2d.b2Joint);

	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2WheelJoint.prototype.m_frequencyHz = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2WheelJoint.prototype.m_dampingRatio = 0;

	// Solver shared
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2WheelJoint.prototype.m_localAnchorA = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2WheelJoint.prototype.m_localAnchorB = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2WheelJoint.prototype.m_localXAxisA = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2WheelJoint.prototype.m_localYAxisA = null;

	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2WheelJoint.prototype.m_impulse = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2WheelJoint.prototype.m_motorImpulse = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2WheelJoint.prototype.m_springImpulse = 0;

	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2WheelJoint.prototype.m_maxMotorTorque = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2WheelJoint.prototype.m_motorSpeed = 0;
	/**
	 * @export
	 * @type {boolean}
	 */
	box2d.b2WheelJoint.prototype.m_enableMotor = false;

	// Solver temp
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2WheelJoint.prototype.m_indexA = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2WheelJoint.prototype.m_indexB = 0;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2WheelJoint.prototype.m_localCenterA = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2WheelJoint.prototype.m_localCenterB = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2WheelJoint.prototype.m_invMassA = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2WheelJoint.prototype.m_invMassB = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2WheelJoint.prototype.m_invIA = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2WheelJoint.prototype.m_invIB = 0;

	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2WheelJoint.prototype.m_ax = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2WheelJoint.prototype.m_ay = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2WheelJoint.prototype.m_sAx = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2WheelJoint.prototype.m_sBx = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2WheelJoint.prototype.m_sAy = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2WheelJoint.prototype.m_sBy = 0;

	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2WheelJoint.prototype.m_mass = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2WheelJoint.prototype.m_motorMass = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2WheelJoint.prototype.m_springMass = 0;

	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2WheelJoint.prototype.m_bias = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2WheelJoint.prototype.m_gamma = 0;

	/**
	 * @export
	 * @type {box2d.b2Rot}
	 */
	box2d.b2WheelJoint.prototype.m_qA = null;
	/**
	 * @export
	 * @type {box2d.b2Rot}
	 */
	box2d.b2WheelJoint.prototype.m_qB = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2WheelJoint.prototype.m_lalcA = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2WheelJoint.prototype.m_lalcB = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2WheelJoint.prototype.m_rA = null;
	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2WheelJoint.prototype.m_rB = null;

	/**
	 * Get the motor speed, usually in radians per second.
	 * @export
	 * @return {number}
	 */
	box2d.b2WheelJoint.prototype.GetMotorSpeed = function () {
	  return this.m_motorSpeed;
	};

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2WheelJoint.prototype.GetMaxMotorTorque = function () {
	  return this.m_maxMotorTorque;
	};

	/**
	 * @export
	 * @return {void}
	 * @param {number} hz
	 */
	box2d.b2WheelJoint.prototype.SetSpringFrequencyHz = function (hz) {
	  this.m_frequencyHz = hz;
	};

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2WheelJoint.prototype.GetSpringFrequencyHz = function () {
	  return this.m_frequencyHz;
	};

	/**
	 * @export
	 * @return {void}
	 * @param {number} ratio
	 */
	box2d.b2WheelJoint.prototype.SetSpringDampingRatio = function (ratio) {
	  this.m_dampingRatio = ratio;
	};

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2WheelJoint.prototype.GetSpringDampingRatio = function () {
	  return this.m_dampingRatio;
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2SolverData} data
	 */
	box2d.b2WheelJoint.prototype.InitVelocityConstraints = function (data) {
	  this.m_indexA = this.m_bodyA.m_islandIndex;
	  this.m_indexB = this.m_bodyB.m_islandIndex;
	  this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter);
	  this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter);
	  this.m_invMassA = this.m_bodyA.m_invMass;
	  this.m_invMassB = this.m_bodyB.m_invMass;
	  this.m_invIA = this.m_bodyA.m_invI;
	  this.m_invIB = this.m_bodyB.m_invI;

	  /*float32*/
	  var mA = this.m_invMassA,
	      mB = this.m_invMassB;
	  /*float32*/
	  var iA = this.m_invIA,
	      iB = this.m_invIB;

	  /*box2d.b2Vec2&*/
	  var cA = data.positions[this.m_indexA].c;
	  /*float32*/
	  var aA = data.positions[this.m_indexA].a;
	  /*box2d.b2Vec2&*/
	  var vA = data.velocities[this.m_indexA].v;
	  /*float32*/
	  var wA = data.velocities[this.m_indexA].w;

	  /*box2d.b2Vec2&*/
	  var cB = data.positions[this.m_indexB].c;
	  /*float32*/
	  var aB = data.positions[this.m_indexB].a;
	  /*box2d.b2Vec2&*/
	  var vB = data.velocities[this.m_indexB].v;
	  /*float32*/
	  var wB = data.velocities[this.m_indexB].w;

	  /*box2d.b2Rot*/
	  var qA = this.m_qA.SetAngle(aA),
	      qB = this.m_qB.SetAngle(aB);

	  // Compute the effective masses.
	  //  box2d.b2Vec2 rA = b2Mul(qA, m_localAnchorA - m_localCenterA);
	  box2d.b2Sub_V2_V2(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
	  var rA = box2d.b2Mul_R_V2(qA, this.m_lalcA, this.m_rA);
	  //  box2d.b2Vec2 rB = b2Mul(qB, m_localAnchorB - m_localCenterB);
	  box2d.b2Sub_V2_V2(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
	  var rB = box2d.b2Mul_R_V2(qB, this.m_lalcB, this.m_rB);
	  //  box2d.b2Vec2 d = cB + rB - cA - rA;
	  var d = box2d.b2Sub_V2_V2(box2d.b2Add_V2_V2(cB, rB, box2d.b2Vec2.s_t0), box2d.b2Add_V2_V2(cA, rA, box2d.b2Vec2.s_t1), box2d.b2WheelJoint.prototype.InitVelocityConstraints.s_d);

	  // Point to line constraint
	  {
	    //    m_ay = b2Mul(qA, m_localYAxisA);
	    box2d.b2Mul_R_V2(qA, this.m_localYAxisA, this.m_ay);
	    //    m_sAy = b2Cross(d + rA, m_ay);
	    this.m_sAy = box2d.b2Cross_V2_V2(box2d.b2Add_V2_V2(d, rA, box2d.b2Vec2.s_t0), this.m_ay);
	    //    m_sBy = b2Cross(rB, m_ay);
	    this.m_sBy = box2d.b2Cross_V2_V2(rB, this.m_ay);

	    this.m_mass = mA + mB + iA * this.m_sAy * this.m_sAy + iB * this.m_sBy * this.m_sBy;

	    if (this.m_mass > 0) {
	      this.m_mass = 1 / this.m_mass;
	    }
	  }

	  // Spring constraint
	  this.m_springMass = 0;
	  this.m_bias = 0;
	  this.m_gamma = 0;
	  if (this.m_frequencyHz > 0) {
	    //    m_ax = b2Mul(qA, m_localXAxisA);
	    box2d.b2Mul_R_V2(qA, this.m_localXAxisA, this.m_ax);
	    //    m_sAx = b2Cross(d + rA, m_ax);
	    this.m_sAx = box2d.b2Cross_V2_V2(box2d.b2Add_V2_V2(d, rA, box2d.b2Vec2.s_t0), this.m_ax);
	    //    m_sBx = b2Cross(rB, m_ax);
	    this.m_sBx = box2d.b2Cross_V2_V2(rB, this.m_ax);

	    /*float32*/
	    var invMass = mA + mB + iA * this.m_sAx * this.m_sAx + iB * this.m_sBx * this.m_sBx;

	    if (invMass > 0) {
	      this.m_springMass = 1 / invMass;

	      /*float32*/
	      var C = box2d.b2Dot_V2_V2(d, this.m_ax);

	      // Frequency
	      /*float32*/
	      var omega = 2 * box2d.b2_pi * this.m_frequencyHz;

	      // Damping coefficient
	      /*float32*/
	      var dc = 2 * this.m_springMass * this.m_dampingRatio * omega;

	      // Spring stiffness
	      /*float32*/
	      var k = this.m_springMass * omega * omega;

	      // magic formulas
	      /*float32*/
	      var h = data.step.dt;
	      this.m_gamma = h * (dc + h * k);
	      if (this.m_gamma > 0) {
	        this.m_gamma = 1 / this.m_gamma;
	      }

	      this.m_bias = C * h * k * this.m_gamma;

	      this.m_springMass = invMass + this.m_gamma;
	      if (this.m_springMass > 0) {
	        this.m_springMass = 1 / this.m_springMass;
	      }
	    }
	  } else {
	    this.m_springImpulse = 0;
	  }

	  // Rotational motor
	  if (this.m_enableMotor) {
	    this.m_motorMass = iA + iB;
	    if (this.m_motorMass > 0) {
	      this.m_motorMass = 1 / this.m_motorMass;
	    }
	  } else {
	    this.m_motorMass = 0;
	    this.m_motorImpulse = 0;
	  }

	  if (data.step.warmStarting) {
	    // Account for variable time step.
	    this.m_impulse *= data.step.dtRatio;
	    this.m_springImpulse *= data.step.dtRatio;
	    this.m_motorImpulse *= data.step.dtRatio;

	    //    box2d.b2Vec2 P = m_impulse * m_ay + m_springImpulse * m_ax;
	    var P = box2d.b2Add_V2_V2(box2d.b2Mul_S_V2(this.m_impulse, this.m_ay, box2d.b2Vec2.s_t0), box2d.b2Mul_S_V2(this.m_springImpulse, this.m_ax, box2d.b2Vec2.s_t1), box2d.b2WheelJoint.prototype.InitVelocityConstraints.s_P);
	    //    float32 LA = m_impulse * m_sAy + m_springImpulse * m_sAx + m_motorImpulse;
	    /*float32*/
	    var LA = this.m_impulse * this.m_sAy + this.m_springImpulse * this.m_sAx + this.m_motorImpulse;
	    //    float32 LB = m_impulse * m_sBy + m_springImpulse * m_sBx + m_motorImpulse;
	    /*float32*/
	    var LB = this.m_impulse * this.m_sBy + this.m_springImpulse * this.m_sBx + this.m_motorImpulse;

	    //    vA -= m_invMassA * P;
	    vA.SelfMulSub(this.m_invMassA, P);
	    wA -= this.m_invIA * LA;

	    //    vB += m_invMassB * P;
	    vB.SelfMulAdd(this.m_invMassB, P);
	    wB += this.m_invIB * LB;
	  } else {
	    this.m_impulse = 0;
	    this.m_springImpulse = 0;
	    this.m_motorImpulse = 0;
	  }

	  //  data.velocities[this.m_indexA].v = vA;
	  data.velocities[this.m_indexA].w = wA;
	  //  data.velocities[this.m_indexB].v = vB;
	  data.velocities[this.m_indexB].w = wB;
	};
	box2d.b2WheelJoint.prototype.InitVelocityConstraints.s_d = new box2d.b2Vec2();
	box2d.b2WheelJoint.prototype.InitVelocityConstraints.s_P = new box2d.b2Vec2();

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2SolverData} data
	 */
	box2d.b2WheelJoint.prototype.SolveVelocityConstraints = function (data) {
	  /*float32*/
	  var mA = this.m_invMassA,
	      mB = this.m_invMassB;
	  /*float32*/
	  var iA = this.m_invIA,
	      iB = this.m_invIB;

	  /*box2d.b2Vec2&*/
	  var vA = data.velocities[this.m_indexA].v;
	  /*float32*/
	  var wA = data.velocities[this.m_indexA].w;
	  /*box2d.b2Vec2&*/
	  var vB = data.velocities[this.m_indexB].v;
	  /*float32*/
	  var wB = data.velocities[this.m_indexB].w;

	  // Solve spring constraint
	  {
	    /*float32*/
	    var Cdot = box2d.b2Dot_V2_V2(this.m_ax, box2d.b2Sub_V2_V2(vB, vA, box2d.b2Vec2.s_t0)) + this.m_sBx * wB - this.m_sAx * wA;
	    /*float32*/
	    var impulse = -this.m_springMass * (Cdot + this.m_bias + this.m_gamma * this.m_springImpulse);
	    this.m_springImpulse += impulse;

	    //    box2d.b2Vec2 P = impulse * m_ax;
	    var P = box2d.b2Mul_S_V2(impulse, this.m_ax, box2d.b2WheelJoint.prototype.SolveVelocityConstraints.s_P);
	    /*float32*/
	    var LA = impulse * this.m_sAx;
	    /*float32*/
	    var LB = impulse * this.m_sBx;

	    //    vA -= mA * P;
	    vA.SelfMulSub(mA, P);
	    wA -= iA * LA;

	    //    vB += mB * P;
	    vB.SelfMulAdd(mB, P);
	    wB += iB * LB;
	  }

	  // Solve rotational motor constraint
	  {
	    /*float32*/
	    var Cdot = wB - wA - this.m_motorSpeed;
	    /*float32*/
	    var impulse = -this.m_motorMass * Cdot;

	    /*float32*/
	    var oldImpulse = this.m_motorImpulse;
	    /*float32*/
	    var maxImpulse = data.step.dt * this.m_maxMotorTorque;
	    this.m_motorImpulse = box2d.b2Clamp(this.m_motorImpulse + impulse, -maxImpulse, maxImpulse);
	    impulse = this.m_motorImpulse - oldImpulse;

	    wA -= iA * impulse;
	    wB += iB * impulse;
	  }

	  // Solve point to line constraint
	  {
	    /*float32*/
	    var Cdot = box2d.b2Dot_V2_V2(this.m_ay, box2d.b2Sub_V2_V2(vB, vA, box2d.b2Vec2.s_t0)) + this.m_sBy * wB - this.m_sAy * wA;
	    /*float32*/
	    var impulse = -this.m_mass * Cdot;
	    this.m_impulse += impulse;

	    //    box2d.b2Vec2 P = impulse * m_ay;
	    var P = box2d.b2Mul_S_V2(impulse, this.m_ay, box2d.b2WheelJoint.prototype.SolveVelocityConstraints.s_P);
	    /*float32*/
	    var LA = impulse * this.m_sAy;
	    /*float32*/
	    var LB = impulse * this.m_sBy;

	    //    vA -= mA * P;
	    vA.SelfMulSub(mA, P);
	    wA -= iA * LA;

	    //    vB += mB * P;
	    vB.SelfMulAdd(mB, P);
	    wB += iB * LB;
	  }

	  //  data.velocities[this.m_indexA].v = vA;
	  data.velocities[this.m_indexA].w = wA;
	  //  data.velocities[this.m_indexB].v = vB;
	  data.velocities[this.m_indexB].w = wB;
	};
	box2d.b2WheelJoint.prototype.SolveVelocityConstraints.s_P = new box2d.b2Vec2();

	/**
	 * @export
	 * @return {boolean}
	 * @param {box2d.b2SolverData} data
	 */
	box2d.b2WheelJoint.prototype.SolvePositionConstraints = function (data) {
	  /*box2d.b2Vec2&*/
	  var cA = data.positions[this.m_indexA].c;
	  /*float32*/
	  var aA = data.positions[this.m_indexA].a;
	  /*box2d.b2Vec2&*/
	  var cB = data.positions[this.m_indexB].c;
	  /*float32*/
	  var aB = data.positions[this.m_indexB].a;

	  /*box2d.b2Rot*/
	  var qA = this.m_qA.SetAngle(aA),
	      qB = this.m_qB.SetAngle(aB);

	  //  box2d.b2Vec2 rA = b2Mul(qA, m_localAnchorA - m_localCenterA);
	  box2d.b2Sub_V2_V2(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
	  var rA = box2d.b2Mul_R_V2(qA, this.m_lalcA, this.m_rA);
	  //  box2d.b2Vec2 rB = b2Mul(qB, m_localAnchorB - m_localCenterB);
	  box2d.b2Sub_V2_V2(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
	  var rB = box2d.b2Mul_R_V2(qB, this.m_lalcB, this.m_rB);
	  //  box2d.b2Vec2 d = (cB - cA) + rB - rA;
	  var d = box2d.b2Add_V2_V2(box2d.b2Sub_V2_V2(cB, cA, box2d.b2Vec2.s_t0), box2d.b2Sub_V2_V2(rB, rA, box2d.b2Vec2.s_t1), box2d.b2WheelJoint.prototype.SolvePositionConstraints.s_d);

	  //  box2d.b2Vec2 ay = b2Mul(qA, m_localYAxisA);
	  var ay = box2d.b2Mul_R_V2(qA, this.m_localYAxisA, this.m_ay);

	  //  float32 sAy = b2Cross(d + rA, ay);
	  var sAy = box2d.b2Cross_V2_V2(box2d.b2Add_V2_V2(d, rA, box2d.b2Vec2.s_t0), ay);
	  //  float32 sBy = b2Cross(rB, ay);
	  var sBy = box2d.b2Cross_V2_V2(rB, ay);

	  //  float32 C = b2Dot(d, ay);
	  var C = box2d.b2Dot_V2_V2(d, this.m_ay);

	  /*float32*/
	  var k = this.m_invMassA + this.m_invMassB + this.m_invIA * this.m_sAy * this.m_sAy + this.m_invIB * this.m_sBy * this.m_sBy;

	  /*float32*/
	  var impulse;
	  if (k !== 0) {
	    impulse = -C / k;
	  } else {
	    impulse = 0;
	  }

	  //  box2d.b2Vec2 P = impulse * ay;
	  var P = box2d.b2Mul_S_V2(impulse, ay, box2d.b2WheelJoint.prototype.SolvePositionConstraints.s_P);
	  /*float32*/
	  var LA = impulse * sAy;
	  /*float32*/
	  var LB = impulse * sBy;

	  //  cA -= m_invMassA * P;
	  cA.SelfMulSub(this.m_invMassA, P);
	  aA -= this.m_invIA * LA;
	  //  cB += m_invMassB * P;
	  cB.SelfMulAdd(this.m_invMassB, P);
	  aB += this.m_invIB * LB;

	  //  data.positions[this.m_indexA].c = cA;
	  data.positions[this.m_indexA].a = aA;
	  //  data.positions[this.m_indexB].c = cB;
	  data.positions[this.m_indexB].a = aB;

	  return box2d.b2Abs(C) <= box2d.b2_linearSlop;
	};
	box2d.b2WheelJoint.prototype.SolvePositionConstraints.s_d = new box2d.b2Vec2();
	box2d.b2WheelJoint.prototype.SolvePositionConstraints.s_P = new box2d.b2Vec2();

	/**
	 * @export
	 * @return {box2d.b2WheelJointDef}
	 * @param {box2d.b2WheelJointDef} def
	 */
	box2d.b2WheelJoint.prototype.GetDefinition = function (def) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(false);
	  } // TODO
	  return def;
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2WheelJoint.prototype.GetAnchorA = function (out) {
	  return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, out);
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2WheelJoint.prototype.GetAnchorB = function (out) {
	  return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, out);
	};

	/**
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {number} inv_dt
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2WheelJoint.prototype.GetReactionForce = function (inv_dt, out) {
	  //  return inv_dt * (m_impulse * m_ay + m_springImpulse * m_ax);
	  out.x = inv_dt * (this.m_impulse * this.m_ay.x + this.m_springImpulse * this.m_ax.x);
	  out.y = inv_dt * (this.m_impulse * this.m_ay.y + this.m_springImpulse * this.m_ax.y);
	  return out;
	};

	/**
	 * @export
	 * @return {number}
	 * @param {number} inv_dt
	 */
	box2d.b2WheelJoint.prototype.GetReactionTorque = function (inv_dt) {
	  return inv_dt * this.m_motorImpulse;
	};

	/**
	 * The local anchor point relative to bodyA's origin.
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2WheelJoint.prototype.GetLocalAnchorA = function (out) {
	  return out.Copy(this.m_localAnchorA);
	};

	/**
	 * The local anchor point relative to bodyB's origin.
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2WheelJoint.prototype.GetLocalAnchorB = function (out) {
	  return out.Copy(this.m_localAnchorB);
	};

	/**
	 * The local joint axis relative to bodyA.
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2WheelJoint.prototype.GetLocalAxisA = function (out) {
	  return out.Copy(this.m_localXAxisA);
	};

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2WheelJoint.prototype.GetJointTranslation = function () {
	  return this.GetPrismaticJointTranslation();
	};

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2WheelJoint.prototype.GetJointSpeed = function () {
	  return this.GetRevoluteJointSpeed();
	};

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2WheelJoint.prototype.GetPrismaticJointTranslation = function () {
	  /*box2d.b2Body*/
	  var bA = this.m_bodyA;
	  /*box2d.b2Body*/
	  var bB = this.m_bodyB;

	  /*box2d.b2Vec2*/
	  var pA = bA.GetWorldPoint(this.m_localAnchorA, new box2d.b2Vec2());
	  /*box2d.b2Vec2*/
	  var pB = bB.GetWorldPoint(this.m_localAnchorB, new box2d.b2Vec2());
	  /*box2d.b2Vec2*/
	  var d = box2d.b2Sub_V2_V2(pB, pA, new box2d.b2Vec2());
	  /*box2d.b2Vec2*/
	  var axis = bA.GetWorldVector(this.m_localXAxisA, new box2d.b2Vec2());

	  /*float32*/
	  var translation = box2d.b2Dot_V2_V2(d, axis);
	  return translation;
	};

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2WheelJoint.prototype.GetPrismaticJointSpeed = function () {
	  /*box2d.b2Body*/
	  var bA = this.m_bodyA;
	  /*box2d.b2Body*/
	  var bB = this.m_bodyB;

	  //  b2Vec2 rA = b2Mul(bA->m_xf.q, m_localAnchorA - bA->m_sweep.localCenter);
	  box2d.b2Sub_V2_V2(this.m_localAnchorA, bA.m_sweep.localCenter, this.m_lalcA);
	  var rA = box2d.b2Mul_R_V2(bA.m_xf.q, this.m_lalcA, this.m_rA);
	  //  b2Vec2 rB = b2Mul(bB->m_xf.q, m_localAnchorB - bB->m_sweep.localCenter);
	  box2d.b2Sub_V2_V2(this.m_localAnchorB, bB.m_sweep.localCenter, this.m_lalcB);
	  var rB = box2d.b2Mul_R_V2(bB.m_xf.q, this.m_lalcB, this.m_rB);
	  //  b2Vec2 pA = bA->m_sweep.c + rA;
	  var pA = box2d.b2Add_V2_V2(bA.m_sweep.c, rA, box2d.b2Vec2.s_t0); // pA uses s_t0
	  //  b2Vec2 pB = bB->m_sweep.c + rB;
	  var pB = box2d.b2Add_V2_V2(bB.m_sweep.c, rB, box2d.b2Vec2.s_t1); // pB uses s_t1
	  //  b2Vec2 d = pB - pA;
	  var d = box2d.b2Sub_V2_V2(pB, pA, box2d.b2Vec2.s_t2); // d uses s_t2
	  //  b2Vec2 axis = b2Mul(bA.m_xf.q, m_localXAxisA);
	  var axis = bA.GetWorldVector(this.m_localXAxisA, new box2d.b2Vec2());

	  var vA = bA.m_linearVelocity;
	  var vB = bB.m_linearVelocity;
	  var wA = bA.m_angularVelocity;
	  var wB = bB.m_angularVelocity;

	  //  float32 speed = b2Dot(d, b2Cross(wA, axis)) + b2Dot(axis, vB + b2Cross(wB, rB) - vA - b2Cross(wA, rA));
	  var speed = box2d.b2Dot_V2_V2(d, box2d.b2Cross_S_V2(wA, axis, box2d.b2Vec2.s_t0)) + box2d.b2Dot_V2_V2(axis, box2d.b2Sub_V2_V2(box2d.b2AddCross_V2_S_V2(vB, wB, rB, box2d.b2Vec2.s_t0), box2d.b2AddCross_V2_S_V2(vA, wA, rA, box2d.b2Vec2.s_t1), box2d.b2Vec2.s_t0));
	  return speed;
	};

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2WheelJoint.prototype.GetRevoluteJointAngle = function () {
	  //  b2Body* bA = this.m_bodyA;
	  //  b2Body* bB = this.m_bodyB;
	  //  return bB->this.m_sweep.a - bA->this.m_sweep.a;
	  return this.m_bodyB.m_sweep.a - this.m_bodyA.m_sweep.a;
	};

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2WheelJoint.prototype.GetRevoluteJointSpeed = function () {
	  /*float32*/
	  var wA = this.m_bodyA.m_angularVelocity;
	  /*float32*/
	  var wB = this.m_bodyB.m_angularVelocity;
	  return wB - wA;
	};

	/**
	 * @export
	 * @return {boolean}
	 */
	box2d.b2WheelJoint.prototype.IsMotorEnabled = function () {
	  return this.m_enableMotor;
	};

	/**
	 * @export
	 * @return {void}
	 * @param {boolean} flag
	 */
	box2d.b2WheelJoint.prototype.EnableMotor = function (flag) {
	  this.m_bodyA.SetAwake(true);
	  this.m_bodyB.SetAwake(true);
	  this.m_enableMotor = flag;
	};

	/**
	 * Set the motor speed, usually in radians per second.
	 * @export
	 * @return {void}
	 * @param {number} speed
	 */
	box2d.b2WheelJoint.prototype.SetMotorSpeed = function (speed) {
	  this.m_bodyA.SetAwake(true);
	  this.m_bodyB.SetAwake(true);
	  this.m_motorSpeed = speed;
	};

	/**
	 * Set/Get the maximum motor force, usually in N-m.
	 * @export
	 * @return {void}
	 * @param {number} force
	 */
	box2d.b2WheelJoint.prototype.SetMaxMotorTorque = function (force) {
	  this.m_bodyA.SetAwake(true);
	  this.m_bodyB.SetAwake(true);
	  this.m_maxMotorTorque = force;
	};

	/**
	 * Get the current motor torque given the inverse time step,
	 * usually in N-m.
	 * @export
	 * @return {number}
	 * @param {number} inv_dt
	 */
	box2d.b2WheelJoint.prototype.GetMotorTorque = function (inv_dt) {
	  return inv_dt * this.m_motorImpulse;
	};

	/**
	 * Dump to b2Log
	 * @export
	 * @return {void}
	 */
	box2d.b2WheelJoint.prototype.Dump = function () {
	  if (box2d.DEBUG) {
	    var indexA = this.m_bodyA.m_islandIndex;
	    var indexB = this.m_bodyB.m_islandIndex;

	    box2d.b2Log("  /*box2d.b2WheelJointDef*/ var jd = new box2d.b2WheelJointDef();\n");
	    box2d.b2Log("  jd.bodyA = bodies[%d];\n", indexA);
	    box2d.b2Log("  jd.bodyB = bodies[%d];\n", indexB);
	    box2d.b2Log("  jd.collideConnected = %s;\n", this.m_collideConnected ? 'true' : 'false');
	    box2d.b2Log("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y);
	    box2d.b2Log("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y);
	    box2d.b2Log("  jd.localAxisA.Set(%.15f, %.15f);\n", this.m_localXAxisA.x, this.m_localXAxisA.y);
	    box2d.b2Log("  jd.enableMotor = %s;\n", this.m_enableMotor ? 'true' : 'false');
	    box2d.b2Log("  jd.motorSpeed = %.15f;\n", this.m_motorSpeed);
	    box2d.b2Log("  jd.maxMotorTorque = %.15f;\n", this.m_maxMotorTorque);
	    box2d.b2Log("  jd.frequencyHz = %.15f;\n", this.m_frequencyHz);
	    box2d.b2Log("  jd.dampingRatio = %.15f;\n", this.m_dampingRatio);
	    box2d.b2Log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
	  }
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(6);

	__webpack_require__(2);

	/**
	 * @export
	 * @constructor
	 */
	/*
	 * Copyright (c) 2011 Erin Catto http://www.box2d.org
	 *
	 * This software is provided 'as-is', without any express or implied
	 * warranty.  In no event will the authors be held liable for any damages
	 * arising from the use of this software.
	 * Permission is granted to anyone to use this software for any purpose,
	 * including commercial applications, and to alter it and redistribute it
	 * freely, subject to the following restrictions:
	 * 1. The origin of this software must not be misrepresented; you must not
	 * claim that you wrote the original software. If you use this software
	 * in a product, an acknowledgment in the product documentation would be
	 * appreciated but is not required.
	 * 2. Altered source versions must be plainly marked as such, and must not be
	 * misrepresented as being the original software.
	 * 3. This notice may not be removed or altered from any source distribution.
	 */

	//#if B2_ENABLE_ROPE

	box2d.b2RopeDef = function () {
	  this.vertices = new Array();
	  this.masses = new Array();
	  this.gravity = new box2d.b2Vec2();
	};

	/*box2d.b2Vec2[]*/
	box2d.b2RopeDef.prototype.vertices = null;

	/*int32*/
	box2d.b2RopeDef.prototype.count = 0;

	/*float32[]*/
	box2d.b2RopeDef.prototype.masses = null;

	/*box2d.b2Vec2*/
	box2d.b2RopeDef.prototype.gravity = null;

	/*float32*/
	box2d.b2RopeDef.prototype.damping = 0.1;

	/**
	 * Stretching stiffness
	 */
	/*float32*/
	box2d.b2RopeDef.prototype.k2 = 0.9;

	/**
	 * Bending stiffness. Values above 0.5 can make the simulation
	 * blow up.
	 */
	/*float32*/
	box2d.b2RopeDef.prototype.k3 = 0.1;

	/**
	 * @export
	 * @constructor
	 */
	box2d.b2Rope = function () {
	  this.m_gravity = new box2d.b2Vec2();
	};

	/*int32*/
	box2d.b2Rope.prototype.m_count = 0;
	/*box2d.b2Vec2[]*/
	box2d.b2Rope.prototype.m_ps = null;
	/*box2d.b2Vec2[]*/
	box2d.b2Rope.prototype.m_p0s = null;
	/*box2d.b2Vec2[]*/
	box2d.b2Rope.prototype.m_vs = null;

	/*float32[]*/
	box2d.b2Rope.prototype.m_ims = null;

	/*float32[]*/
	box2d.b2Rope.prototype.m_Ls = null;
	/*float32[]*/
	box2d.b2Rope.prototype.m_as = null;

	/*box2d.b2Vec2*/
	box2d.b2Rope.prototype.m_gravity = null;
	/*float32*/
	box2d.b2Rope.prototype.m_damping = 0;

	/*float32*/
	box2d.b2Rope.prototype.m_k2 = 1;
	/*float32*/
	box2d.b2Rope.prototype.m_k3 = 0.1;

	/**
	 * @export
	 * @return {number}
	 */
	box2d.b2Rope.prototype.GetVertexCount = function () {
	  return this.m_count;
	};

	/**
	 * @export
	 * @return {Array.<box2d.b2Vec2>}
	 */
	box2d.b2Rope.prototype.GetVertices = function () {
	  return this.m_ps;
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2RopeDef} def
	 */
	box2d.b2Rope.prototype.Initialize = function (def) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(def.count >= 3);
	  }
	  this.m_count = def.count;
	  //  this.m_ps = (box2d.b2Vec2*)b2Alloc(this.m_count * sizeof(box2d.b2Vec2));
	  this.m_ps = box2d.b2Vec2.MakeArray(this.m_count);
	  //  this.m_p0s = (box2d.b2Vec2*)b2Alloc(this.m_count * sizeof(box2d.b2Vec2));
	  this.m_p0s = box2d.b2Vec2.MakeArray(this.m_count);
	  //  this.m_vs = (box2d.b2Vec2*)b2Alloc(this.m_count * sizeof(box2d.b2Vec2));
	  this.m_vs = box2d.b2Vec2.MakeArray(this.m_count);
	  //  this.m_ims = (float32*)b2Alloc(this.m_count * sizeof(float32));
	  this.m_ims = box2d.b2MakeNumberArray(this.m_count);

	  for ( /*int32*/var i = 0; i < this.m_count; ++i) {
	    this.m_ps[i].Copy(def.vertices[i]);
	    this.m_p0s[i].Copy(def.vertices[i]);
	    this.m_vs[i].SetZero();

	    /*float32*/
	    var m = def.masses[i];
	    if (m > 0) {
	      this.m_ims[i] = 1 / m;
	    } else {
	      this.m_ims[i] = 0;
	    }
	  }

	  /*int32*/
	  var count2 = this.m_count - 1;
	  /*int32*/
	  var count3 = this.m_count - 2;
	  //  this.m_Ls = (float32*)be2Alloc(count2 * sizeof(float32));
	  this.m_Ls = box2d.b2MakeNumberArray(count2);
	  //  this.m_as = (float32*)b2Alloc(count3 * sizeof(float32));
	  this.m_as = box2d.b2MakeNumberArray(count3);

	  for ( /*int32*/var i = 0; i < count2; ++i) {
	    /*box2d.b2Vec2&*/
	    var p1 = this.m_ps[i];
	    /*box2d.b2Vec2&*/
	    var p2 = this.m_ps[i + 1];
	    this.m_Ls[i] = box2d.b2Distance(p1, p2);
	  }

	  for ( /*int32*/var i = 0; i < count3; ++i) {
	    /*box2d.b2Vec2&*/
	    var p1 = this.m_ps[i];
	    /*box2d.b2Vec2&*/
	    var p2 = this.m_ps[i + 1];
	    /*box2d.b2Vec2&*/
	    var p3 = this.m_ps[i + 2];

	    /*box2d.b2Vec2*/
	    var d1 = box2d.b2Sub_V2_V2(p2, p1, box2d.b2Vec2.s_t0);
	    /*box2d.b2Vec2*/
	    var d2 = box2d.b2Sub_V2_V2(p3, p2, box2d.b2Vec2.s_t1);

	    /*float32*/
	    var a = box2d.b2Cross_V2_V2(d1, d2);
	    /*float32*/
	    var b = box2d.b2Dot_V2_V2(d1, d2);

	    this.m_as[i] = box2d.b2Atan2(a, b);
	  }

	  this.m_gravity.Copy(def.gravity);
	  this.m_damping = def.damping;
	  this.m_k2 = def.k2;
	  this.m_k3 = def.k3;
	};

	/**
	 * @export
	 * @return {void}
	 * @param {number} h
	 * @param {number} iterations
	 */
	box2d.b2Rope.prototype.Step = function ( /*float32*/h, /*int32*/iterations) {
	  if (h === 0) {
	    return;
	  }

	  /*float32*/
	  var d = Math.exp(-h * this.m_damping);

	  for ( /*int32*/var i = 0; i < this.m_count; ++i) {
	    this.m_p0s[i].Copy(this.m_ps[i]);
	    if (this.m_ims[i] > 0) {
	      this.m_vs[i].SelfMulAdd(h, this.m_gravity);
	    }
	    this.m_vs[i].SelfMul(d);
	    this.m_ps[i].SelfMulAdd(h, this.m_vs[i]);
	  }

	  for ( /*int32*/var i = 0; i < iterations; ++i) {
	    this.SolveC2();
	    this.SolveC3();
	    this.SolveC2();
	  }

	  /*float32*/
	  var inv_h = 1 / h;
	  for ( /*int32*/var i = 0; i < this.m_count; ++i) {
	    box2d.b2Mul_S_V2(inv_h, box2d.b2Sub_V2_V2(this.m_ps[i], this.m_p0s[i], box2d.b2Vec2.s_t0), this.m_vs[i]);
	  }
	};

	/**
	 * @export
	 * @return {void}
	 */
	box2d.b2Rope.prototype.SolveC2 = function () {
	  /*int32*/
	  var count2 = this.m_count - 1;

	  for ( /*int32*/var i = 0; i < count2; ++i) {
	    /*box2d.b2Vec2&*/
	    var p1 = this.m_ps[i];
	    /*box2d.b2Vec2&*/
	    var p2 = this.m_ps[i + 1];

	    /*box2d.b2Vec2*/
	    var d = box2d.b2Sub_V2_V2(p2, p1, box2d.b2Rope.s_d);
	    /*float32*/
	    var L = d.Normalize();

	    /*float32*/
	    var im1 = this.m_ims[i];
	    /*float32*/
	    var im2 = this.m_ims[i + 1];

	    if (im1 + im2 === 0) {
	      continue;
	    }

	    /*float32*/
	    var s1 = im1 / (im1 + im2);
	    /*float32*/
	    var s2 = im2 / (im1 + im2);

	    p1.SelfMulSub(this.m_k2 * s1 * (this.m_Ls[i] - L), d);
	    p2.SelfMulAdd(this.m_k2 * s2 * (this.m_Ls[i] - L), d);

	    //    this.m_ps[i] = p1;
	    //    this.m_ps[i + 1] = p2;
	  }
	};
	box2d.b2Rope.s_d = new box2d.b2Vec2();

	/**
	 * @export
	 * @return {void}
	 * @param {number} angle
	 */
	box2d.b2Rope.prototype.SetAngle = function (angle) {
	  /*int32*/
	  var count3 = this.m_count - 2;
	  for ( /*int32*/var i = 0; i < count3; ++i) {
	    this.m_as[i] = angle;
	  }
	};

	/**
	 * @export
	 * @return {void}
	 */
	box2d.b2Rope.prototype.SolveC3 = function () {
	  /*int32*/
	  var count3 = this.m_count - 2;

	  for ( /*int32*/var i = 0; i < count3; ++i) {
	    /*box2d.b2Vec2&*/
	    var p1 = this.m_ps[i];
	    /*box2d.b2Vec2&*/
	    var p2 = this.m_ps[i + 1];
	    /*box2d.b2Vec2&*/
	    var p3 = this.m_ps[i + 2];

	    /*float32*/
	    var m1 = this.m_ims[i];
	    /*float32*/
	    var m2 = this.m_ims[i + 1];
	    /*float32*/
	    var m3 = this.m_ims[i + 2];

	    /*box2d.b2Vec2*/
	    var d1 = box2d.b2Sub_V2_V2(p2, p1, box2d.b2Rope.s_d1);
	    /*box2d.b2Vec2*/
	    var d2 = box2d.b2Sub_V2_V2(p3, p2, box2d.b2Rope.s_d2);

	    /*float32*/
	    var L1sqr = d1.LengthSquared();
	    /*float32*/
	    var L2sqr = d2.LengthSquared();

	    if (L1sqr * L2sqr === 0) {
	      continue;
	    }

	    /*float32*/
	    var a = box2d.b2Cross_V2_V2(d1, d2);
	    /*float32*/
	    var b = box2d.b2Dot_V2_V2(d1, d2);

	    /*float32*/
	    var angle = box2d.b2Atan2(a, b);

	    /*box2d.b2Vec2*/
	    var Jd1 = box2d.b2Mul_S_V2(-1 / L1sqr, d1.SelfSkew(), box2d.b2Rope.s_Jd1);
	    /*box2d.b2Vec2*/
	    var Jd2 = box2d.b2Mul_S_V2(1 / L2sqr, d2.SelfSkew(), box2d.b2Rope.s_Jd2);

	    /*box2d.b2Vec2*/
	    var J1 = box2d.b2Rope.s_J1.Copy(Jd1).SelfNeg();
	    /*box2d.b2Vec2*/
	    var J2 = box2d.b2Sub_V2_V2(Jd1, Jd2, box2d.b2Rope.s_J2);
	    /*box2d.b2Vec2*/
	    var J3 = Jd2;

	    /*float32*/
	    var mass = m1 * box2d.b2Dot_V2_V2(J1, J1) + m2 * box2d.b2Dot_V2_V2(J2, J2) + m3 * box2d.b2Dot_V2_V2(J3, J3);
	    if (mass === 0) {
	      continue;
	    }

	    mass = 1 / mass;

	    /*float32*/
	    var C = angle - this.m_as[i];

	    while (C > box2d.b2_pi) {
	      angle -= 2 * box2d.b2_pi;
	      C = angle - this.m_as[i];
	    }

	    while (C < -box2d.b2_pi) {
	      angle += 2 * box2d.b2_pi;
	      C = angle - this.m_as[i];
	    }

	    /*float32*/
	    var impulse = -this.m_k3 * mass * C;

	    p1.SelfMulAdd(m1 * impulse, J1);
	    p2.SelfMulAdd(m2 * impulse, J2);
	    p3.SelfMulAdd(m3 * impulse, J3);

	    //    this.m_ps[i] = p1;
	    //    this.m_ps[i + 1] = p2;
	    //    this.m_ps[i + 2] = p3;
	  }
	};
	box2d.b2Rope.s_d1 = new box2d.b2Vec2();
	box2d.b2Rope.s_d2 = new box2d.b2Vec2();
	box2d.b2Rope.s_Jd1 = new box2d.b2Vec2();
	box2d.b2Rope.s_Jd2 = new box2d.b2Vec2();
	box2d.b2Rope.s_J1 = new box2d.b2Vec2();
	box2d.b2Rope.s_J2 = new box2d.b2Vec2();

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2Draw} draw
	 */
	box2d.b2Rope.prototype.Draw = function (draw) {
	  /*box2d.b2Color*/
	  var c = new box2d.b2Color(0.4, 0.5, 0.7);

	  for ( /*int32*/var i = 0; i < this.m_count - 1; ++i) {
	    draw.DrawSegment(this.m_ps[i], this.m_ps[i + 1], c);
	  }
	};

	//#endif

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(6);

	/**
	 * @export
	 * @enum
	 */
	/*
	 * Copyright (c) 2006-2007 Erin Catto http://www.box2d.org
	 *
	 * This software is provided 'as-is', without any express or implied
	 * warranty.  In no event will the authors be held liable for any damages
	 * arising from the use of this software.
	 * Permission is granted to anyone to use this software for any purpose,
	 * including commercial applications, and to alter it and redistribute it
	 * freely, subject to the following restrictions:
	 * 1. The origin of this software must not be misrepresented; you must not
	 * claim that you wrote the original software. If you use this software
	 * in a product, an acknowledgment in the product documentation would be
	 * appreciated but is not required.
	 * 2. Altered source versions must be plainly marked as such, and must not be
	 * misrepresented as being the original software.
	 * 3. This notice may not be removed or altered from any source distribution.
	 */

	box2d.b2JointType = {
	  e_unknownJoint: 0,
	  e_revoluteJoint: 1,
	  e_prismaticJoint: 2,
	  e_distanceJoint: 3,
	  e_pulleyJoint: 4,
	  e_mouseJoint: 5,
	  e_gearJoint: 6,
	  e_wheelJoint: 7,
	  e_weldJoint: 8,
	  e_frictionJoint: 9,
	  e_ropeJoint: 10,
	  e_motorJoint: 11,
	  e_areaJoint: 12
	};

	/**
	 * @export
	 * @enum
	 */
	box2d.b2LimitState = {
	  e_inactiveLimit: 0,
	  e_atLowerLimit: 1,
	  e_atUpperLimit: 2,
	  e_equalLimits: 3
	};

	/**
	 * @export
	 * @constructor
	 */
	box2d.b2Jacobian = function () {
	  this.linear = new box2d.b2Vec2();
	};

	/**
	 * @export
	 * @type {box2d.b2Vec2}
	 */
	box2d.b2Jacobian.prototype.linear = null;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Jacobian.prototype.angularA = 0;
	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Jacobian.prototype.angularB = 0;

	/**
	 * @export
	 * @return {box2d.b2Jacobian}
	 */
	box2d.b2Jacobian.prototype.SetZero = function () {
	  this.linear.SetZero();
	  this.angularA = 0;
	  this.angularB = 0;
	  return this;
	};

	/**
	 * @export
	 * @return {box2d.b2Jacobian}
	 * @param {box2d.b2Vec2} x
	 * @param {number} a1
	 * @param {number} a2
	 */
	box2d.b2Jacobian.prototype.Set = function (x, a1, a2) {
	  this.linear.Copy(x);
	  this.angularA = a1;
	  this.angularB = a2;
	  return this;
	};

	/**
	 * A joint edge is used to connect bodies and joints together in
	 * a joint graph where each body is a node and each joint is an
	 * edge. A joint edge belongs to a doubly linked list maintained
	 * in each attached body. Each joint has two joint nodes, one
	 * for each attached body.
	 * @export
	 * @constructor
	 */
	box2d.b2JointEdge = function () {};

	/**
	 * @export
	 * @type {box2d.b2Body}
	 */
	box2d.b2JointEdge.prototype.other = null; ///< provides quick access to the other body attached.
	/**
	 * @export
	 * @type {box2d.b2Joint}
	 */
	box2d.b2JointEdge.prototype.joint = null; ///< the joint
	/**
	 * @export
	 * @type {box2d.b2JointEdge}
	 */
	box2d.b2JointEdge.prototype.prev = null; ///< the previous joint edge in the body's joint list
	/**
	 * @export
	 * @type {box2d.b2JointEdge}
	 */
	box2d.b2JointEdge.prototype.next = null; ///< the next joint edge in the body's joint list

	/**
	 * Joint definitions are used to construct joints.
	 * @export
	 * @constructor
	 * @param {box2d.b2JointType} type
	 */
	box2d.b2JointDef = function (type) {
	  this.type = type;
	};

	/**
	 * The joint type is set automatically for concrete joint types.
	 * @export
	 * @type {box2d.b2JointType}
	 */
	box2d.b2JointDef.prototype.type = box2d.b2JointType.e_unknownJoint;

	/**
	 * Use this to attach application specific data to your joints.
	 * @export
	 * @type {*}
	 */
	box2d.b2JointDef.prototype.userData = null;

	/**
	 * The first attached body.
	 * @export
	 * @type {box2d.b2Body}
	 */
	box2d.b2JointDef.prototype.bodyA = null;

	/**
	 * The second attached body.
	 * @export
	 * @type {box2d.b2Body}
	 */
	box2d.b2JointDef.prototype.bodyB = null;

	/**
	 * Set this flag to true if the attached bodies should collide.
	 * @export
	 * @type {boolean}
	 */
	box2d.b2JointDef.prototype.collideConnected = false;

	/**
	 * The base joint class. Joints are used to constraint two
	 * bodies together in various fashions. Some joints also feature
	 * limits and motors.
	 * @export
	 * @constructor
	 */
	box2d.b2Joint = function (def) {
	  if (box2d.ENABLE_ASSERTS) {
	    box2d.b2Assert(def.bodyA !== def.bodyB);
	  }

	  this.m_type = def.type;
	  this.m_edgeA = new box2d.b2JointEdge();
	  this.m_edgeB = new box2d.b2JointEdge();
	  this.m_bodyA = def.bodyA;
	  this.m_bodyB = def.bodyB;

	  this.m_collideConnected = def.collideConnected;

	  this.m_userData = def.userData;
	};

	/**
	 * @export
	 * @type {box2d.b2JointType}
	 */
	box2d.b2Joint.prototype.m_type = box2d.b2JointType.e_unknownJoint;
	/**
	 * @export
	 * @type {box2d.b2Joint}
	 */
	box2d.b2Joint.prototype.m_prev = null;
	/**
	 * @export
	 * @type {box2d.b2Joint}
	 */
	box2d.b2Joint.prototype.m_next = null;
	/**
	 * @export
	 * @type {box2d.b2JointEdge}
	 */
	box2d.b2Joint.prototype.m_edgeA = null;
	/**
	 * @export
	 * @type {box2d.b2JointEdge}
	 */
	box2d.b2Joint.prototype.m_edgeB = null;
	/**
	 * @export
	 * @type {box2d.b2Body}
	 */
	box2d.b2Joint.prototype.m_bodyA = null;
	/**
	 * @export
	 * @type {box2d.b2Body}
	 */
	box2d.b2Joint.prototype.m_bodyB = null;

	/**
	 * @export
	 * @type {number}
	 */
	box2d.b2Joint.prototype.m_index = 0;

	/**
	 * @export
	 * @type {boolean}
	 */
	box2d.b2Joint.prototype.m_islandFlag = false;
	/**
	 * @export
	 * @type {boolean}
	 */
	box2d.b2Joint.prototype.m_collideConnected = false;

	/**
	 * @export
	 * @type {*}
	 */
	box2d.b2Joint.prototype.m_userData = null;

	/**
	 * Get the anchor point on bodyA in world coordinates.
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2Joint.prototype.GetAnchorA = function (out) {
	  return out.SetZero();
	};

	/**
	 * Get the anchor point on bodyB in world coordinates.
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2Joint.prototype.GetAnchorB = function (out) {
	  return out.SetZero();
	};

	/**
	 * Get the reaction force on bodyB at the joint anchor in
	 * Newtons.
	 * @export
	 * @return {box2d.b2Vec2}
	 * @param {number} inv_dt
	 * @param {box2d.b2Vec2} out
	 */
	box2d.b2Joint.prototype.GetReactionForce = function (inv_dt, out) {
	  return out.SetZero();
	};

	/**
	 * Get the reaction torque on bodyB in N*m.
	 * @export
	 * @return {number}
	 * @param {number} inv_dt
	 */
	box2d.b2Joint.prototype.GetReactionTorque = function (inv_dt) {
	  return 0;
	};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2SolverData} data
	 */
	box2d.b2Joint.prototype.InitVelocityConstraints = function (data) {};

	/**
	 * @export
	 * @return {void}
	 * @param {box2d.b2SolverData} data
	 */
	box2d.b2Joint.prototype.SolveVelocityConstraints = function (data) {};

	/**
	 * This returns true if the position errors are within
	 * tolerance.
	 * @export
	 * @return {boolean}
	 * @param {box2d.b2SolverData} data
	 */
	box2d.b2Joint.prototype.SolvePositionConstraints = function (data) {
	  return false;
	};

	/**
	 * Get the type of the concrete joint.
	 * @export
	 * @return {box2d.b2JointType}
	 */
	box2d.b2Joint.prototype.GetType = function () {
	  return this.m_type;
	};

	/**
	 * Get the first body attached to this joint.
	 * @export
	 * @return {box2d.b2Body}
	 */
	box2d.b2Joint.prototype.GetBodyA = function () {
	  return this.m_bodyA;
	};

	/**
	 * Get the second body attached to this joint.
	 * @export
	 * @return {box2d.b2Body}
	 */
	box2d.b2Joint.prototype.GetBodyB = function () {
	  return this.m_bodyB;
	};

	/**
	 * Get the next joint the world joint list.
	 * @export
	 * @return {box2d.b2Joint}
	 */
	box2d.b2Joint.prototype.GetNext = function () {
	  return this.m_next;
	};

	/**
	 * Get the user data pointer.
	 * @export
	 * @return {*}
	 */
	box2d.b2Joint.prototype.GetUserData = function () {
	  return this.m_userData;
	};

	/**
	 * Set the user data pointer.
	 * @export
	 * @return {void}
	 * @param {*} data
	 */
	box2d.b2Joint.prototype.SetUserData = function (data) {
	  this.m_userData = data;
	};

	/**
	 * Get collide connected.
	 * Note: modifying the collide connect flag won't work correctly
	 * because the flag is only checked when fixture AABBs begin to
	 * overlap.
	 * @export
	 * @return {boolean}
	 */
	box2d.b2Joint.prototype.GetCollideConnected = function () {
	  return this.m_collideConnected;
	};

	/**
	 * Dump this joint to the log file.
	 * @export
	 * @return {void}
	 */
	box2d.b2Joint.prototype.Dump = function () {
	  if (box2d.DEBUG) {
	    box2d.b2Log("// Dump is not supported for this joint type.\n");
	  }
	};

	/**
	 * Short-cut function to determine if either body is inactive.
	 * @export
	 * @return {boolean}
	 */
	box2d.b2Joint.prototype.IsActive = function () {
	  return this.m_bodyA.IsActive() && this.m_bodyB.IsActive();
	};

	/**
	 * Shift the origin for any points stored in world coordinates.
	 * @export
	 * @return {void}
	 * @param {box2d.b2Vec2} newOrigin
	 */
	box2d.b2Joint.prototype.ShiftOrigin = function (newOrigin) {};

/***/ }
/******/ ]);