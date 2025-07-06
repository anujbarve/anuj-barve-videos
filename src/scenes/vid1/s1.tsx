import { Camera, Code, Img, Layout, Rect, Txt, lines, makeScene2D } from '@motion-canvas/2d';
import { all, beginSlide, createRef, easeInCubic, easeInElastic, easeInOutCubic, waitFor, waitUntil } from '@motion-canvas/core';

export default makeScene2D(function* (view) {
    view.fontFamily(`'JetBrains Mono', monospace`).fontWeight(700).fontSize(256);
    const titleText = createRef<Txt>();
    const descText = createRef<Code>();
    const impRect = createRef<Rect>();
    const impText = createRef<Txt>();
    const impDesc = createRef<Txt>();

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
            <Txt ref={titleText} text="" fontSize={200} fill={GIANTS_ORANGE} />
        </Rect>
    );

    yield* all(
        titleText().text("Algorithms", 1)
    );

    yield* all(
        titleText().position.x(-850, 1),
        titleText().position.y(-450, 1),
        titleText().offset([-1, -1], 1),
        titleText().fontSize(80, 1),
        titleText().fill(LIGHT_CYAN, 1)
    );

    yield* titleText().text("What are Algorithms", 1);

    view.add(
        <Code ref={descText} offset={[-1, -1]} position={[-850, -300]} code="" fontSize={40} fill={LIGHT_CYAN} />
    );

    yield* descText().code(`
An algorithm is simply a step-by-step set of instructions 

to solve a problem or complete a task. 

Think of it like a recipe for your computer. 

Just like a recipe tells you how to make a cake 

— step by step 

— an algorithm tells your computer how to solve a problem.
        `, 1);

    yield* descText().selection(lines(1), 1);
    yield* descText().selection(lines(3), 1);

    yield* waitUntil("content done");

    view.add(

        <Rect ref={impRect} width={300} height={50} fill={GIANTS_ORANGE} rotation={45} position={[900, -470]} opacity={0}>
            <Txt ref={impText} text={"IMP"} fontSize={30}></Txt>
        </Rect>
    );

    yield* impRect().opacity(1, 1);

    yield* all(
        impRect().position([0, 0], 2),
        impRect().size([1920, 1080], 2),
        impRect().rotation(0, 2),
        impRect().fill(PERIWINKLE, 2),
        impText().position.x(-850, 2),
        impText().position.y(-450, 2),
        impText().offset([-1, -1], 2),
        impText().fontSize(80, 2),
    )

    view.add(
        <Txt ref={impDesc} offset={[-1, -1]} position={[-850, -300]} text="" fontSize={40} fill={LIGHT_CYAN} />
    );

    yield* impDesc().text(`
An algorithm is simply a step-by-step set of instructions 

to solve a problem or complete a task. 

Think of it like a recipe for your computer. 

Just like a recipe tells you how to make a cake 
        `, 1);
    yield* impDesc().fill(DARK_PURPLE, 1);

    yield* waitUntil("IMP done");

    yield* impText().text("IMP", 1);

    yield* all(
        impRect().position([900, -470], 2),
        impRect().size([300, 50], 2),
        impRect().rotation(45, 2),
        impRect().fill(GIANTS_ORANGE, 2),
        impText().offset([0, 0], 2),
        impText().fill(DARK_PURPLE, 2),
        impText().position([0, 0], 2),
        impText().fontSize(30, 2),
        impDesc().opacity(0, 2)
    )



    yield* waitUntil("s1 done");
});