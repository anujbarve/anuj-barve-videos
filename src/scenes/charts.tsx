import { makeScene2D, Rect, Txt } from '@motion-canvas/2d';
import { createRef, sequence } from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  const barValues = [120, 300, 180, 240, 90,200];
  const bars = barValues.map(() => createRef<Rect>());

  for (let i = 0; i < barValues.length; i++) {
    const height = barValues[i];
    const bar = (
      <Rect
        ref={bars[i]}
        width={40}
        height={0}
        x={i * 60 - 120}
        y={() => 300 - bars[i]().height() / 2}
        fill="#99C47A"
        radius={8}
      />
    );
    view.add(bar);
  }

  // Animate bars growing
  yield* sequence(
    0.1,
    ...bars.map((bar, i) => bar().height(barValues[i], 0.6))
  );
});
