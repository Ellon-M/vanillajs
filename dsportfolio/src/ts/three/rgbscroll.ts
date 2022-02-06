import { lerp } from '../utils';
import * as THREE from 'three';
import fragment from './shaders/rgbFragment.glsl';
import vertex from './shaders/rgbVertex.glsl';

let scrollable = document.querySelector('#root') as HTMLElement;
let current = 0;
let target = 0;
let ease = 0.075;

var canvas = document.createElement('canvas'),
ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
 
ctx.fillStyle = '#000000';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = '#ff00ff';
ctx.strokeRect(0, 0, canvas.width, canvas.height);


const init = () => {
    document.body.style.height = `${scrollable.getBoundingClientRect().height}px`;
}

const smoothScroll = () => {
    target = window.scrollY;
    current = lerp(current, target, ease);
    scrollable.style.transform = `translate3d(0,${-current}px, 0)`;
    requestAnimationFrame(smoothScroll)
}


export class RGBCanvas {
    container: HTMLElement;
    containees: Array<Element>;
    meshes: Array<MeshItem>;
    scene!: THREE.Scene;
    renderer!: THREE.WebGL1Renderer;
    camera!: THREE.PerspectiveCamera;


    constructor() {
        this.container = document.querySelector('.f') as HTMLElement;
        this.containees = [...document.querySelectorAll('.f-word, .f-word-sub')];
        this.meshes = [];
        this.setupCamera();
        this.createMeshItems();
        this.render();
        console.log(this.containees);
    }

    get viewport() {
        let width = window.innerWidth;
        let height = window.innerHeight;
        let aspectRatio = width / height;
        return {
            width,
            height,
            aspectRatio
        }
    }

    setupCamera() {
        this.scene = new THREE.Scene();
        let perspective = 1000;
        const fov = (180 * (2 * Math.atan(window.innerHeight / 2 / perspective))) / Math.PI;  // fov setting
        this.camera = new THREE.PerspectiveCamera(fov, this.viewport.aspectRatio, 1, 1000);
        this.camera.position.set(0, 0, perspective);

        this.renderer = new THREE.WebGL1Renderer({antialias: true, alpha: true});
        this.renderer.setSize(this.viewport.width, this.viewport.height);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.container.appendChild(this.renderer.domElement);
    }

    onWindowResize() {
        this.camera.aspect = this.viewport.aspectRatio;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.viewport.width, this.viewport.height);
    }

    createMeshItems() {
        this.containees.forEach(containee => {
            let meshItem = new MeshItem(containee, this.scene);
            this.meshes.push(meshItem);
        })
    }

    render() {
        for(let i = 0; i < this.meshes.length; i++){
            this.meshes[i].render();
        }
        this.renderer.render(this.scene, this.camera)
        requestAnimationFrame(this.render.bind(this));
    }
}

class MeshItem {
    scene;
    element;
    offset;
    sizes;
    geometry!: THREE.PlaneBufferGeometry;
    texture!: THREE.Texture;
    uniforms: any;
    material!: THREE.ShaderMaterial;
    mesh!: THREE.Mesh;

    constructor(element: Element, scene: THREE.Scene) {
        this.element = element;
        this.scene = scene;
        this.offset = new THREE.Vector2(0, 0); // mesh size
        this.sizes = new THREE.Vector2(0, 0); // mesh position
        this.createMesh();
    }

    getDimensions() {
        const { width, height, top, left } = this.element.getBoundingClientRect();
        this.sizes.set(width, height);
        this.offset.set(left - window.innerWidth / 2 + width / 2, -top + window.innerHeight / 2 - height / 2); 
    }

    createMesh() {
        this.geometry = new THREE.PlaneBufferGeometry(1,1,100,100);
        this.texture = new THREE.Texture(canvas);
        this.texture.needsUpdate = true;
        this.uniforms = {
            uTexture: {
                value: this.texture
            },
            uOffset: {
                value: new THREE.Vector2(0.0, 0.0)  
            },
            uAlpha: {
                value: 1.
            }
        }
        this.material = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: vertex,
            fragmentShader: fragment,
            transparent: true,
            // wireframe: true,
            side: THREE.DoubleSide
        })
        this.mesh = new THREE.Mesh( this.geometry, this.material );
        this.getDimensions(); 
        this.mesh.position.set(this.offset.x, this.offset.y, 0);
		this.mesh.scale.set(this.sizes.x, this.sizes.y, 1);

        this.scene.add( this.mesh );
    }

    render() {
        this.getDimensions();
        this.mesh.position.set(this.offset.x, this.offset.y, 0)
		this.mesh.scale.set(this.sizes.x, this.sizes.y, 1)
        this.uniforms.uOffset.value.set(this.offset.x * 0.0, - (target- current) * 0.0003)
    }

}

