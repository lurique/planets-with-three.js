/*
* Planets in THREE.js
*
* Author: Lucas Henrique
* Author URI: https://github.com/lurique
*/

var Three = Three || {};

(function() {

	'use strict';

	Three.Planets = {

		// Common
		width: window.innerWidth,
		height: window.innerHeight,

		// ThreeJS variables
		scene: '',
		camera: '',
		renderer: '',
		light: '',

		// Planets variables
		radius: 0,
		segments: 0,
		rotation: 0,
		planet: '',
		clouds: '',
		particles: '',

		// Texture loader
		loader: new THREE.TextureLoader(),

		init: function() {
			this.setScene();
			this.setRender();
		},

		setScene: function() {
			var self = Three.Planets;

			this.scene = new THREE.Scene();
			this.camera = new THREE.PerspectiveCamera(75, self.width / self.height, 0.1, 1000);
			this.renderer = new THREE.WebGLRenderer();
			this.light = new THREE.DirectionalLight(0xFFFFFF, 1);
		},

		setRender: function() {
			var self = Three.Planets;

			// Setting camera default position
			self.camera.position.z = 1.5;

			// Creating canvas
			self.renderer.setSize(self.width, self.height);
			document.body.appendChild(self.renderer.domElement);

			// Rendering ambient lights
			self.light.position.set(5,3,5);
			self.scene.add(self.light);

			// Rendering planets
			self.setPlanets.planetEarth();
		},

		setPlanets: {
			planetEarth: function() {
				var self = Three.Planets;

				alert('Function is working');
			}
		}

	}

})();