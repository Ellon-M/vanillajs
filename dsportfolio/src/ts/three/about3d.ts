import * as THREE from 'three';


export default class Sketch {
    time: number;
    renderer: THREE.WebGLRenderer;
    camera;
    scene;
    mesh!: THREE.Mesh;
    geometry!: THREE.PlaneBufferGeometry;
    material!: THREE.MeshNormalMaterial;


    constructor() {
        this.renderer = new THREE.WebGLRenderer( { antialias: true } );
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        document.getElementById('container')?.appendChild(this.renderer.domElement)
        
        this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
        this.camera.position.z = 1;
        this.scene = new THREE.Scene();

        this.addMesh();
        this.time = 0;
        this.render();
    }

    render() {
        this.time++;
        this.mesh.rotation.x = this.time / 100;
        this.mesh.rotation.y = this.time / 100;
        console.log(this.time);
        this.renderer.render( this.scene, this.camera );
        window.requestAnimationFrame(this.render.bind(this));
    }

    addMesh() {
         this.geometry = new THREE.PlaneBufferGeometry(1, 1);
         this.material = new THREE.MeshNormalMaterial({side: THREE.DoubleSide});
         this.mesh = new THREE.Mesh( this.geometry, this.material );
         this.scene.add( this.mesh );
    }
}

new Sketch();
