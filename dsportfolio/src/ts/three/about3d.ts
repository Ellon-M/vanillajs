import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as dat from 'dat.gui';
import fragment from './shaders/fragment.glsl';
import vertex from './shaders/vertex.glsl';
import brush from '../../../src/images/brush.png';
import fl from '../../../src/images/FL6.png';

interface OptionsObj {
    [key: string]: HTMLElement;
}

interface SettingsVal {
    progress: number;
}


export default class Sketch {
    time: number;
    renderer: THREE.WebGLRenderer;
    camera;
    scene;
    scene1;
    mesh!: THREE.Mesh;
    geometry!: THREE.PlaneBufferGeometry;
    geometryFull!: THREE.PlaneBufferGeometry;
    material!: THREE.ShaderMaterial;
    material1!: THREE.MeshBasicMaterial;
    // controls: OrbitControls;
    gui!: dat.GUI;
    setSettings!: SettingsVal;
    max: number = 0;
    meshes!: Array<THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>>;
    container: HTMLElement;
    width!: number;
    height!: number;
    mouse!: THREE.Vector2;
    prevMouse!: THREE.Vector2;
    currentWave: number;
    baseTexture:  THREE.WebGLRenderTarget;
    quad!: THREE.Mesh;
    imageAspect!: number;



    constructor(options: OptionsObj) {
        this.container = options.dom;
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.renderer = new THREE.WebGLRenderer( { antialias: true });
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setClearColor(0x000000, 1);
        this.renderer.physicallyCorrectLights = true;
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        document.getElementById('container')?.appendChild(this.renderer.domElement);

        var frustumSize = this.height;
        var aspect = this.width / this.height;
        this.camera = new THREE.OrthographicCamera(
            frustumSize * aspect/-2, frustumSize * aspect/2, frustumSize / 2, frustumSize / -2,
            -1000,
            1000
        )
        // this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.001, 1000 );
        this.camera.position.set(0 ,0 ,2);
        // this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.scene = new THREE.Scene();
        
        this.scene1 = new THREE.Scene();
        this.baseTexture = new THREE.WebGLRenderTarget(
            this.width, this.height,{
                minFilter: THREE.LinearFilter,
                magFilter: THREE.LinearFilter,
                format: THREE.RGBAFormat,
            })

        this.mouse = new THREE.Vector2(0 ,0);
        this.prevMouse = new THREE.Vector2(0 ,0);
        this.max = 120;
        this.currentWave = 0;

        this.addMesh();
        this.time = 0;
        this.resize();
        this.mouseEvents();
        this.render();
        this.setUpResize();
    }

    settings() {
        let that = this;
        this.setSettings = {
            progress: 0,
        };
        this.gui = new dat.GUI();
        this.gui.add(this.setSettings, 'progress', 0, 1, 0.01);

    }

    setUpResize() {
        window.addEventListener("resize", this.resize.bind(this));
    }

    resize() {
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.renderer.setSize(this.width, this.height);
        // this.camera.aspect = this.width /  this.height;

        this.imageAspect = 853/1280;
        let a1;
        let a2;

        if (this.width/this.height > this.imageAspect) {
            a1 = (this.width/this.height) * this.imageAspect;
            a2 = 1.0;
        } else {
            a1 = 1.0;
            a2 = (this.height/this.width) / this.imageAspect;
        }

        this.material.uniforms.resolution.value.x = this.width;
        this.material.uniforms.resolution.value.y = this.height;
        this.material.uniforms.resolution.value.z = a1;
        this.material.uniforms.resolution.value.w = a2;

        this.camera.updateProjectionMatrix();
    }

    setNewWave(x: number, y: number, index: number) {
        let mesh = this.meshes[index];
        mesh.visible = true;
        mesh.position.x = x;
        mesh.position.y = y;
        mesh.scale.x = mesh.scale.y = 0.2;
        mesh.material.opacity = 0.5;
    }

    mouseEvents() {
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX - this.width/2;
            this.mouse.y = this.height/2 - e.clientY;
        })
    }

    trackMousePos() {
        if (Math.abs(this.mouse.x - this.prevMouse.x) < 4 && Math.abs(this.mouse.y - this.prevMouse.y) < 4) {
            return;
        } else {
            this.setNewWave(this.mouse.x, this.mouse.y, this.currentWave);
            this.currentWave = (this.currentWave + 1)%this.max;
            // console.log(this.currentWave);
        }
        
        this.prevMouse.x = this.mouse.x;
        this.prevMouse.y = this.mouse.y;
    }

    render() {
        this.trackMousePos();
        this.time+=0.05;
        this.material.uniforms.time.value = this.time;
        // this.mesh.rotation.x = this.time / 100;
        // this.mesh.rotation.y = this.time / 100;
        // console.log(this.time);
        this.renderer.setRenderTarget(this.baseTexture);
        this.renderer.render( this.scene, this.camera );
        this.material.uniforms.uDisplacement.value = this.baseTexture.texture;
        this.renderer.setRenderTarget(null);
        this.renderer.clear()
        this.renderer.render( this.scene1, this.camera );

        window.requestAnimationFrame(this.render.bind(this));
        this.meshes.forEach((mesh) => {
            if (mesh.visible) {
        //     mesh.position.x = this.mouse.x;
        //     mesh.position.y = this.mouse.y;
               mesh.rotation.z += 0.02;
               mesh.material.opacity *=0.96;
               mesh.scale.x = 0.982*mesh.scale.x + 0.108;
               mesh.scale.y = mesh.scale.x;
               if (mesh.material.opacity < 0.002) {
                   mesh.visible = false;
               }
            }
        })
    }

    addMesh() {
         this.geometry = new THREE.PlaneGeometry(64, 64, 1, 1);
         this.geometryFull = new THREE.PlaneGeometry(this.width, this.height, 1, 1);
        //  this.material = new THREE.MeshNormalMaterial({side: THREE.DoubleSide});
         this.material = new THREE.ShaderMaterial({
            extensions: {
                derivatives: "#extension GL_OES_standard_derivatives : enable"
            },
            side: THREE.DoubleSide,
            uniforms: {
                time: { value: 0.0 },
                uDisplacement: { value: null },
                uTexture: { value: new THREE.TextureLoader().load(fl) },
                resolution: {value: new THREE.Vector4()}
            },
            vertexShader: vertex,
            fragmentShader: fragment,
          })
         this.meshes = [];
         for (let i = 0; i < this.max; i++) {
            let mat = new THREE.MeshBasicMaterial({
                map: new THREE.TextureLoader().load(brush),
                transparent: true,
                blending: THREE.AdditiveBlending,
                depthTest: false,
                depthWrite: false,
             }) 
             
             let mesh = new THREE.Mesh(this.geometry, mat);
             mesh.visible = false;
             mesh.rotation.z = 2*Math.PI*Math.random();
             this.scene.add(mesh);
             this.meshes.push(mesh);
         }

         this.quad = new THREE.Mesh(this.geometryFull, this.material);
         this.scene1.add(this.quad);
    }
}

new Sketch({
    dom: document.getElementById('container') as HTMLElement
});
