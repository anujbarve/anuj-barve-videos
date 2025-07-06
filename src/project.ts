import {makeProject} from '@motion-canvas/core';

import example from './scenes/example?scene';
import charts from './scenes/charts?scene';
import code from './scenes/code?scene';
import s1 from './scenes/vid1/s1?scene';
import audio from "./audio/algorithms.mp3"
import s2 from './scenes/vid1/s2?scene';
import dynamic_bg from './scenes/vid1/dynamic_bg?scene';

export default makeProject({
  scenes: [dynamic_bg],
  // audio : audio
});
