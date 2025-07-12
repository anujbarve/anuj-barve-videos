import { makeProject } from '@motion-canvas/core';
import dynamic from './scenes/SMM_D1/dynamic?scene';
import signals from './scenes/sandbox/signals?scene';
import audio from './audio/SMM_D1.mp3';
import s3 from './scenes/vid1/s3?scene';
import path from './scenes/vid1/path?scene';

export default makeProject({
  scenes: [path],
  // audio,
});
