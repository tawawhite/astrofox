import vertex from 'glsl/vertex/basic.glsl';
import fragment from 'glsl/fragment/Luminance.glsl';

export default {
  uniforms: {
    tDiffuse: { type: 't', value: null },
    amount: { type: 'f', value: 0.0 },
  },

  vertexShader: vertex,
  fragmentShader: fragment,
};
