import { rand, angle, lerp, cos, sin, HALF_PI, fadeInOut } from '../utils';

interface CanvasEl {
    a: HTMLCanvasElement,
    b: HTMLCanvasElement
}

interface CanvasContext {
    a: CanvasRenderingContext2D,
    b: CanvasRenderingContext2D
}

export class Coalesce {
    particleCount;
    particlePropCount;
    particlePropsLength;
    baseTTL;
    rangeTTL;
    baseSpeed;
    rangeSpeed;
    baseSize;
    rangeSize;
    baseHue;
    rangeHue;
    noiseSteps;
    xOff;
    yOff;
    zOff;
    backgroundColor: string;
    container!: Element;
    canvas!: CanvasEl;
    ctx!: CanvasContext;
    center!: Array<number>;
    // gradient;
    tick!: number;
    particleProps!: Float32Array;
    // positions;
    // velocities;
    // lifeSpans;
    // speeds;
    // sizes;
    // hues;


    constructor() {
        this.particleCount = 700;
        this.particlePropCount = 9;
        this.particlePropsLength = this.particleCount * this.particlePropCount;
        this.baseTTL = 100;
        this.rangeTTL = 500;
        this.baseSpeed = 0.1;
        this.rangeSpeed = .8;
        this.baseSize = 2;
        this.rangeSize = 10;
        this.baseHue = 225;
        this.rangeHue = 30;
        this.noiseSteps = 2;
        this.xOff = .0025;
        this.yOff = .005;
        this.zOff = .0005;
        this.backgroundColor = 'hsla(0, 0%, 7%, 1)';
        this.initEvents();
    }

    setup() {
        this.createCanvas();
        this.resize();
        this.initParticles();
        this.draw();
    }

    initParticles() {
        this.tick = 0;
        this.particleProps = new Float32Array(this.particlePropsLength);
        for (let i = 0; i < this.particlePropsLength; i += this.particlePropCount) {
            this.initParticle(i);
          }
    }
    
    initParticle(i: number) {
        let theta, x, y, vx, vy, life, ttl, speed, size, hue;

        x = rand(this.canvas.a.width);
        y = rand(this.canvas.a.height);
        theta = angle(x, y, this.center[0], this.center[1]);
        vx = cos(theta) * 6;
        vy = sin(theta) * 6;
        life = 0;
        ttl = this.baseTTL + rand(this.rangeTTL);
        speed = this.baseSpeed + rand(this.rangeSpeed);
        size = this.baseSize + rand(this.rangeSize);
        hue = this.baseHue + rand(this.rangeHue);

        this.particleProps.set([x, y, vx, vy, life, ttl, speed, size, hue], i);
    }

    drawParticles() {
        for (let i = 0; i < this.particlePropsLength; i += this.particlePropCount) {
            this.updateParticle(i);
          }
    }

    updateParticle(i: number) {
        let i2=1+i, i3=2+i, i4=3+i, i5=4+i, i6=5+i, i7=6+i, i8=7+i, i9=8+i;
        let x, y, theta, vx, vy, life, ttl, speed, x2, y2, size, hue;

        x = this.particleProps[i];
        y = this.particleProps[i2];
        theta = angle(x, y, this.center[0], this.center[1]) + 0.75 * HALF_PI;
        vx = lerp(this.particleProps[i3], 2 * cos(theta), 0.05);
        vy = lerp(this.particleProps[i4], 2 * sin(theta), 0.05);
        life = this.particleProps[i5];
        ttl = this.particleProps[i6];
        speed = this.particleProps[i7];
        x2 = x + vx * speed;
        y2 = y + vy * speed;
        size = this.particleProps[i8];
        hue = this.particleProps[i9];
      
        this.drawParticle(x, y, theta, life, ttl, size, hue);
      
        life++;
      
        this.particleProps[i] = x2;
        this.particleProps[i2] = y2;
        this.particleProps[i3] = vx;
        this.particleProps[i4] = vy;
        this.particleProps[i5] = life;
      
        life > ttl && this.initParticle(i);
    }

    drawParticle(x:number, y:number, theta:number, life:number, ttl:number, size:number, hue:number) {
        let xRel = x - (0.5 * size), yRel = y - (0.5 * size);
        this.ctx.a.save();
        this.ctx.a.lineCap = 'round';
        this.ctx.a.lineWidth = 1;
        this.ctx.a.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
        this.ctx.a.beginPath();
        this.ctx.a.translate(xRel, yRel);
        this.ctx.a.rotate(theta);
        this.ctx.a.translate(-xRel, -yRel);
        this.ctx.a.strokeRect(xRel, yRel, size, size);
        this.ctx.a.closePath();
        this.ctx.a.restore();
    }

    createCanvas() {
        this.container = document.querySelector('#abt-canvas') as Element;
        this.canvas = {
            a: document.createElement('canvas'),
            b: document.createElement('canvas')
        };
        // this.canvas.b.style.position = 'fixed';
        this.canvas.b.style.width = '100%';
        this.canvas.b.style.height = '100%';

        this.container.appendChild(this.canvas.b);
        this.ctx = {
            a: this.canvas.a.getContext('2d') as CanvasRenderingContext2D,
            b: this.canvas.b.getContext('2d') as CanvasRenderingContext2D
         };
        this.center = [];
    }
    
    resize() {
        const { innerWidth, innerHeight } = window;
        this.canvas.a.width = innerWidth;
        this.canvas.a.height = innerHeight;

        this.ctx.a.drawImage(this.canvas.b, 0, 0);
        
        this.canvas.b.width = innerWidth;
        this.canvas.b.height = innerHeight;
  
        this.ctx.b.drawImage(this.canvas.a, 0, 0);

        this.center[0] = 0.5 * this.canvas.a.width;
        this.center[1] = 0.5 * this.canvas.a.height;

    }

    renderGlow() {
        this.ctx.b.save();
        this.ctx.b.filter = 'blur(8px) brightness(200%)';
        this.ctx.b.globalCompositeOperation = 'lighter';
        this.ctx.b.drawImage(this.canvas.a, 0, 0);
        this.ctx.b.restore();

        this.ctx.b.save();
        this.ctx.b.filter = 'blur(4px) brightness(200%)';
        this.ctx.b.globalCompositeOperation = 'lighter';
        this.ctx.b.drawImage(this.canvas.a, 0, 0);
        this.ctx.b.restore();
    }

    render() {
        this.ctx.b.save();
        this.ctx.b.globalCompositeOperation = 'lighter';
        this.ctx.b.drawImage(this.canvas.a, 0, 0);
        this.ctx.b.restore();
    }

    draw() {
        this.tick++;

        this.ctx.a.clearRect(0, 0, this.canvas.a.width, this.canvas.a.height);

        this.ctx.b.fillStyle = this.backgroundColor;
        this.ctx.b.fillRect(0, 0, this.canvas.a.width, this.canvas.a.height);

        this.drawParticles();
        this.renderGlow();
        this.render();
    
        window.requestAnimationFrame(() => this.draw());

    }

    initEvents() {
        window.addEventListener('load', (e) => this.setup());
        window.addEventListener('resize', (e) => this.resize());
    }
}

new Coalesce();