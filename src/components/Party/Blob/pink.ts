const fragmentShaderPink = /* glsl */ `
uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

void main() {
    // float distort = 2.0 * vDisplacement * u_intensity * sin(vUv.y * 10.0 + u_time);
    // vec3 color = vec3(abs(vUv - 0.5) * 2.0  * (1.0 - distort), 1.0); // r, g, b
	
	// 0.3 to 0.56
	float blue = 0.13 * sin(vDisplacement * vUv.y * 7.0 + u_time) + 0.43;
	
	vec3 color = vec3(0.733, 0, blue);
    gl_FragColor = vec4(color, 1.0);
}
`;

export default fragmentShaderPink;
