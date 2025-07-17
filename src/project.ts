import { makeProject } from '@motion-canvas/core';
import dynamic from './scenes/SMM_D1/dynamic?scene';
import d2 from './scenes/SMM_D1/d2?scene';
import signals from './scenes/sandbox/signals?scene';
import audio from './audio/SMM_D5.mp3';
import s3 from './scenes/vid1/s3?scene';
import path from './scenes/vid1/path?scene';
import s1 from './scenes/SMM_D2/s1?scene';
import new_layout from './scenes/sandbox/new_layout?scene';
import './global.css';

export default makeProject({
  scenes: [dynamic],
  audio,
});
