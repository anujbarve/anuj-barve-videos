import { makeProject } from '@motion-canvas/core';
import dynamic from './scenes/SMM_D1/dynamic?scene';
import audio from './audio/SMM_D1.mp3';

export default makeProject({
  scenes: [dynamic],
  audio,
});
