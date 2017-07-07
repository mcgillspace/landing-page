(function () {
  angular
  .module('app')
  .controller('BannerCtrl', BannerCtrl);

  BannerCtrl.$inject = ['$scope'];

  function BannerCtrl($scope) {
    var scene, camera, renderer;
    var geometry, material, mesh;

    init();

    function init() {
      var elem = document.getElementById('background-overlay')
      var elemRect = elem.getBoundingClientRect()

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera( 75, elemRect.width / elemRect.height, 1, 10000 );
      camera.position.z = 1000;

      // instantiate a loader
      var loader = new THREE.ObjectLoader();

      // load a resource
      loader.load(
        '/landing-page/assets/3d/ISS/ISS.json',

        // Function when resource is loaded
        function ( geometry, materials ) {
          material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
          // mesh = new THREE.Mesh( geometry, material );
          mesh = geometry;
          mesh.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
              child.material = material;
            }
          });
          mesh.scale.set( 200, 200, 200 )

          scene.add( mesh );
          renderer = new THREE.WebGLRenderer();
          renderer.setSize( elemRect.width, elemRect.height );

          document.getElementById('background-overlay').appendChild( renderer.domElement );

          animate();

        }
      );

    }

    function animate() {

      requestAnimationFrame( animate );

      // if (mesh) {
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.02;

        renderer.render( scene, camera );
      // }


    }
  }
})();
