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
import welcome_page from './scenes/youtube/DAA/video_1/welcome_page?scene';
import basic_page from './scenes/youtube/DAA/video_1/basic_page?scene';
import algorithm_technology from './scenes/youtube/DAA/video_1/algorithm_technology?scene';

export default makeProject({
  scenes: [algorithm_technology],
  // audio,
});
