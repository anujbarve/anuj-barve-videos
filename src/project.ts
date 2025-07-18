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
import title_page from './scenes/sandbox/theme_blue/title_page?scene';
import welcome_page from './scenes/sandbox/theme_blue/welcome_page?scene';
import basic_page from './scenes/sandbox/theme_blue/basic_page?scene';
import multiple_images from './scenes/sandbox/theme_blue/multiple_images?scene';
import quote_page from './scenes/sandbox/theme_blue/quote_page?scene';

export default makeProject({
  scenes: [title_page,welcome_page,basic_page,multiple_images,quote_page],
  // audio,
});
