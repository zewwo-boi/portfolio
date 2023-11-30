const fragmentShaderBlue = `
uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

void main() {
	float from = 0.3, to = 0.6;
	float amp = (to - from) / 2.0;
	float distort = amp * sin(vDisplacement * vUv.y * 7.0 + u_time) + amp + from;
	
	// r - 0.223529
	// b - 0.88235
	vec3 color = vec3(0.223529, distort, 0.88235);
    gl_FragColor = vec4(color, 1.0);
}
`;

export default fragmentShaderBlue;
