import { makeScene2D, Rect, Txt, Img, Code } from '@motion-canvas/2d';
import { all, createRef, waitFor, loopUntil } from '@motion-canvas/core';

// Load JSON directly (use bundler plugin or hardcode array for now)
import slides from './w3d4.json';

export default makeScene2D(function* (view) {
  view.fontFamily(`'JetBrains Mono', monospace`).fontWeight(700).fontSize(256);

  const LIGHT_CYAN = "#e2fdff";
  const DARK_PURPLE = "#171123";
  const GIANTS_ORANGE = "#f46036";

  for (const slide of slides) {
    const titleText = createRef<Txt>();
    const descText = createRef<Code>();
    const logo = createRef<Rect>();

    view.add(
      <Rect
        fill={DARK_PURPLE}
        width={1920}
        height={1080}
        alignItems="center"
        justifyContent="center"
      >
        <Txt ref={titleText} text="" fontSize={200} fill={GIANTS_ORANGE} />
      </Rect>
    );

    yield* all(titleText().text(slide.miniTitle, 1));
    yield* all(
      titleText().position.x(-850, 1),
      titleText().position.y(-450, 1),
      titleText().offset([-1, -1], 1),
      titleText().fontSize(60, 1),
      titleText().fill(LIGHT_CYAN, 1)
    );
    yield* titleText().text(slide.title, 1);

    view.add(
      <Code
        ref={descText}
        offset={[-1, -1]}
        position={[-850, -300]}
        code=""
        fontSize={40}
        fill={LIGHT_CYAN}
      />
    );

    yield* descText().code(slide.description, 1);

    view.add(
      <Rect
        ref={logo}
        position={[750, 350]}
        size={[250, 250]}
        opacity={0.4}
        radius={20}
        clip
      >
        <Img src={slide.imgSrc} layout={false} size={() => logo().size()} />
      </Rect>
    );

    yield* loopUntil(`${slide.slideId} Done`, () =>
      all(
        logo().rotation(5, 3).to(-5, 3),
        logo().opacity(0.2, 3).to(0.4, 3)
      )
    );

    // Optional: clear view for next slide
    view.removeChildren();
  }
});