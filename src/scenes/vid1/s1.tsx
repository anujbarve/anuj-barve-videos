import { Camera, Img, Layout, Rect, Txt, makeScene2D } from '@motion-canvas/2d';
import { all, beginSlide, createRef, easeInCubic, easeInElastic, easeInOutCubic, waitFor, waitUntil } from '@motion-canvas/core';

export default makeScene2D(function* (view) {
    view.fontFamily(`'JetBrains Mono', monospace`).fontWeight(700).fontSize(256);
    const text = createRef<Txt>();

    const NEON_BLUE = "#5465FF";
    const CORNFLOWER_BLUE = "#788bff";
    const JORDY_BLUE = "#9bb1ff";
    const PERIWINKLE = "#bfd7ff";
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
            <Txt ref={text} text="" fontSize={200} fill={GIANTS_ORANGE} />
        </Rect>
    );

    yield* all(
        text().text("Algorithms", 1)
    );

    yield* all(
        text().position.x(-850, 1),
        text().position.y(-450, 1),
        text().offset([-1, -1], 1),
        text().fontSize(80, 1),
        text().fill(LIGHT_CYAN, 1)
    ); 

    yield* text().text("What are Algorithms", 1);

    view.add(
        <Txt ref={text} offset={[-1, -1]} position={[-850, -300]} text="" fontSize={40} fill={LIGHT_CYAN} />
    );

    yield* text().text(`
An algorithm is simply a step-by-step set of instructions 

to solve a problem or complete a task. 

Think of it like a recipe for your computer. 

Just like a recipe tells you how to make a cake 

— step by step 

— an algorithm tells your computer how to solve a problem.
        `, 1);

    yield* waitUntil("algorithm explaination finished");
});