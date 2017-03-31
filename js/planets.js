var Three = Three || {};

(function() {

	'use strict';

	Three.Planets = {

		init: function() {
			this.setVariables();
			this.setScene();
			this.setRender();
			this.setPlanets();
		},

		setVariables: function() {
			this.width = window.innerWidth;
			this.height = window.innerHeight;
		},

		setScene: function() {
			var self = Three.Planets;

			this.scene = new THREE.Scene();
			this.camera = new THREE.PerspectiveCamera(75, self.width / self.height, 0.1, 1000);
			this.renderer = new THREE.WebGLRenderer();
		},

		setRender: function() {
			var self = Three.Planets;

			self.renderer.setSize(self.width, self.height);
			document.body.appendChild(self.renderer.domElement);
		},

		setPlanets: function() {
			alert('Oi');	
		}

	}

})();