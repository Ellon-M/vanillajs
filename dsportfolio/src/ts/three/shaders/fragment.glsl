uniform float time;
uniform float progress;
uniform sampler2D uTexture;
uniform sampler2D uDisplacement;
uniform vec4 resolution;
varying vec2 vUv;
varying vec3 vPosition;
float PI = 3.14159265358973238;

void main() {
    vec4 displacement = texture2D(uDisplacement,vUv);
    float theta = displacement.r*2.*PI;
    vec2 dir = vec2(sin(theta), cos(theta));
    vec2 uv = vUv + dir*displacement.r*0.1;
    vec4 color = texture2D(uTexture,uv);
    gl_FragColor = color;
}