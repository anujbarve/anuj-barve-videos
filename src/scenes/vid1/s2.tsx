import { Camera, Circle, Img, Layout, Rect, Txt, makeScene2D } from '@motion-canvas/2d';
import { all, beginSlide, createRef, Direction, easeInCubic, easeInElastic, easeInOutCubic, fadeTransition, loopUntil, slideTransition, waitFor, waitUntil } from '@motion-canvas/core';

export default makeScene2D(function* (view) {
    view.fontFamily(`'JetBrains Mono', monospace`).fontWeight(700).fontSize(256);
    const text = createRef<Txt>();
    const rect = createRef<Rect>();
    const rect2 = createRef<Rect>();
    const circle = createRef<Circle>();

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

    yield* fadeTransition(1);

    yield* all(
        text().text("Loops", 1)
    );

    yield* all(
        text().position.x(-850, 1),
        text().position.y(-450, 1),
        text().offset([-1, -1], 1),
        text().fontSize(80, 1),
        text().fill(LIGHT_CYAN, 1)
    );

    yield* text().text("Playing with Loops", 1);

    view.add(
        <>
        <Rect ref={rect} size={400} radius={100}></Rect>
        <Rect ref={rect2} size={400} position={[200,200]} radius={100}></Rect>
        </>
    );

    // view.add(
    //     <Circle ref={circle} size={450} stroke={NEON_BLUE} lineWidth={20} clip>
    //         <Img
    //           src={"https://images.pexels.com/photos/32846723/pexels-photo-32846723.jpeg"}
    //           layout={false}
    //           size={() => circle().size()}
    //         />
    //     </Circle>
    // )


    yield* loopUntil(
        'Stop Looping',
        () => all(
            rect().stroke(NEON_BLUE,2),
            rect().lineWidth(20,2),
            rect().opacity(0.2,2),
            rect().rotation(10,2).to(20,2),
            rect2().stroke(NEON_BLUE,2),
            rect2().lineWidth(20,2),
            rect2().opacity(0.1,2),
            rect2().rotation(10,2).to(20,2)
        )
    );  
});