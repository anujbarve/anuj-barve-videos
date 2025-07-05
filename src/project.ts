import {makeProject} from '@motion-canvas/core';

import example from './scenes/example?scene';
import charts from './scenes/charts?scene';
import code from './scenes/code?scene';
import s1 from './scenes/vid1/s1?scene';
import audio from "./audio/algorithms.mp3"

export default makeProject({
  scenes: [s1],
  audio : audio
});
