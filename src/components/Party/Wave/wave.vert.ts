const vertexShader = /* glsl */ `
uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;

void main() {
    vUv = uv;	
	float vDisplacement = sin(position.x + u_time) + sin(position.y + u_time);
	
    vec3 newPosition = position + normal * (u_intensity * vDisplacement);
    vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
  
    gl_Position = projectedPosition;
}
`;

export default vertexShader;
