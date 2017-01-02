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
    inherits(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
}

// These include files constitute the main Box2D API
require('./Common/b2Settings');
require('./Common/b2Draw');
require('./Common/b2Timer');

require('./Collision/Shapes/b2CircleShape');
require('./Collision/Shapes/b2EdgeShape');
require('./Collision/Shapes/b2ChainShape');
require('./Collision/Shapes/b2PolygonShape');

require('./Collision/b2BroadPhase');
require('./Collision/b2Distance');


require('./Collision/b2DynamicTree');
require('./Collision/b2TimeOfImpact');

require('./Dynamics/b2Body');
require('./Dynamics/b2Fixture');
require('./Dynamics/b2WorldCallbacks');
require('./Dynamics/b2TimeStep');
require('./Dynamics/b2World');

require('./Dynamics/Contacts/b2Contact');

require('./Dynamics/Joints/b2AreaJoint');
require('./Dynamics/Joints/b2DistanceJoint');
require('./Dynamics/Joints/b2FrictionJoint');
require('./Dynamics/Joints/b2GearJoint');
require('./Dynamics/Joints/b2MotorJoint');
require('./Dynamics/Joints/b2MouseJoint');
require('./Dynamics/Joints/b2PrismaticJoint');
require('./Dynamics/Joints/b2PulleyJoint');
require('./Dynamics/Joints/b2RevoluteJoint');
require('./Dynamics/Joints/b2RopeJoint');
require('./Dynamics/Joints/b2WeldJoint');
require('./Dynamics/Joints/b2WheelJoint');


//#if B2_ENABLE_ROPE
require('./Rope/b2Rope');
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
