import { Grid, Layout, makeScene2D, Rect, Txt } from '@motion-canvas/2d';
import { all, createRef, createSignal, sequence } from '@motion-canvas/core';

export default makeScene2D(function* (view) {
     view.fontFamily(`'JetBrains Mono', monospace`).fontWeight(700).fontSize(100);


  const rectsize = createSignal(400);
  const rect = createRef<Rect>();
  const text = createRef<Txt>();

  const LIGHT_CYAN = "#e2fdff";
  const DARK_PURPLE = "#171123";
  const GIANTS_ORANGE = "#f46036";


  view.add(

    <Rect
        fill={DARK_PURPLE}
        width={1920}
        height={1080}
        alignItems="center"
        justifyContent="center"
      >


      </Rect>
  );

  view.add(
  <Rect height={() => rectsize()} width={() => rectsize()} fill={LIGHT_CYAN}>
    <Txt text={() => rectsize().toFixed(2)}></Txt>
  </Rect>
  );

  yield* rectsize(800,1).to(800,1).to(400,1)

});
