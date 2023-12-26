const topology = /* glsl */ `
uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

void main() {
	vec3 color = vec3(vDisplacement);
    gl_FragColor = vec4(color, 1.0);
}
`;

export default topology;
