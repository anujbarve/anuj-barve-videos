import { Grid, Layout, makeScene2D, Rect, Txt } from '@motion-canvas/2d';
import { all, createRef, sequence } from '@motion-canvas/core';

export default makeScene2D(function* (view) {

  const grid = createRef<Grid>();


  view.add(


    <Layout height={600} width={800} clip>
      <Grid ref={grid}
        width={'100%'}
        height={'100%'}
        stroke={'#666'}
        start={0}
        end={1} >
      </Grid>
    </Layout>

  );


  yield* all(
    grid().end(0.5, 1).to(1, 1).wait(1),
    grid().start(0.5, 1).to(0, 1).wait(1),
  );
});
