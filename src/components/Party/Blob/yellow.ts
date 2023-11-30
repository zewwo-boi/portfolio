const fragmentShaderYellow = `
uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

void main() {
	float from = 0.68627, to = 0.85098;
	float amp = (to - from) / 2.0;
	float distort = amp * sin(vDisplacement * vUv.y * 7.0 + u_time) + amp + from;
	
	// r - 0.98823
	// b - 0.23529
	vec3 color = vec3(0.98823, distort, 0.23529);
    gl_FragColor = vec4(color, 1.0);
}
`;

export default fragmentShaderYellow;
