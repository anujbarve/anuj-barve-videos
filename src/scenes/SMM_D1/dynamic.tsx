import { makeScene2D, Rect, Txt, Img, Code, Path, Node } from '@motion-canvas/2d';
import { all, createRef, waitFor, loopUntil, beginSlide, waitUntil } from '@motion-canvas/core';

import slides from './w3d3.json';

export default makeScene2D(function* (view) {
  view.fontFamily(`'JetBrains Mono', monospace`).fontWeight(700).fontSize(256);

  const LIGHT_CYAN = "#e2fdff";
  const DARK_PURPLE = "#171123";
  const GIANTS_ORANGE = "#f46036";

  for (const slide of slides) {
    // Start slide control
    yield* beginSlide(slide.slideId);

    const titleText = createRef<Txt>();
    const descText = createRef<Code>();
    const logo = createRef<Rect>();
    const bg_rect = createRef<Rect>();

    // Background and Title Setup
    view.add(
      <Rect
        ref={bg_rect}
        fill={DARK_PURPLE}
        width={1920}
        height={1080}
        alignItems="center"
        justifyContent="center"
      >
        <Txt ref={titleText} text="" fontSize={200} fill={GIANTS_ORANGE} />
      </Rect>
    );

    // Animate mini title -> then full title
    yield* all(titleText().text(slide.miniTitle, 1));
    yield* all(
      titleText().position.x(-850, 1),
      titleText().position.y(-450, 1),
      titleText().offset([-1, -1], 1),
      titleText().fontSize(60, 1),
      titleText().fill(LIGHT_CYAN, 1)
    );
    yield* titleText().text(slide.title, 1);

    // Description
    bg_rect().add(
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

    if (slide.images.length > 0) {
      // ⏸️ Wait before starting the image sequence
      yield* waitUntil(`${slide.slideId}-img-start`);

      const emptyImageRect = createRef<Rect>();
      bg_rect().add(
        <Rect
          ref={emptyImageRect}
          height={1080}
          width={1920}
        >
        </Rect>
      );
      const slidesWithWideImages = ["S5"];

      // ✅ Now add actual images with control
      for (let i = 0; i < slide.images.length; i++) {
        const element = slide.images[i];
        const imageRect = createRef<Rect>();

        bg_rect().add(
          <Rect
            ref={imageRect}
            height={1080}
            width={1920}
            fill={DARK_PURPLE}
          >
            <Img
              radius={50}
              src={element}
              zIndex={20}
              {...(
                slidesWithWideImages.includes(slide.slideId)
                  ? { width: "90%" }
                  : { height: "90%" }
              )}
            />
          </Rect>
        );

        // ⏸️ Wait for this image to be manually triggered
        yield* waitUntil(`${slide.slideId}-img-${i}`);

        // 🎬 Optional transition out
        yield* imageRect().opacity(0, 0.1);
      }
    }



    yield* waitUntil(slide.slideId);
  }
});
