import {makeProject} from '@motion-canvas/core';

import example from './scenes/example?scene';
import charts from './scenes/charts?scene';
import code from './scenes/code?scene';

export default makeProject({
  scenes: [code],
});
