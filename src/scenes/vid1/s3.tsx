import { Camera, Circle, Code, Img, Layout, Rect, Txt, makeScene2D } from '@motion-canvas/2d';
import { all, beginSlide, createRef, Direction, easeInCubic, easeInElastic, easeInOutCubic, fadeTransition, loopUntil, slideTransition, waitFor, waitUntil } from '@motion-canvas/core';

export default makeScene2D(function* (view) {
    view.fontFamily(`'JetBrains Mono', monospace`).fontWeight(700).fontSize(256);
    const text = createRef<Txt>();
    const desc = createRef<Code>();
    const rect = createRef<Rect>();
    const rect2 = createRef<Rect>();
    const circle = createRef<Circle>();
    const bg_rect = createRef<Rect>();
    const camera = createRef<Camera>();

    const NEON_BLUE = "#5465FF";
    const CORNFLOWER_BLUE = "#788bff";
    const JORDY_BLUE = "#9bb1ff";
    const PERIWINKLE = "#bfd7ff";
    const LIGHT_CYAN = "#e2fdff";

    const DARK_PURPLE = "#171123";
    const GIANTS_ORANGE = "#f46036";

    view.add(
        <Camera ref={camera}>
            <Rect
                fill={DARK_PURPLE}
                width={5000}
                height={5000}
                alignItems="center"
                justifyContent="center"
                ref={bg_rect}
            >
            </Rect>
        </Camera>
    );

    bg_rect().add(<Txt ref={text} text="" fontSize={200} fill={GIANTS_ORANGE} />);
    bg_rect().add(<Img src={"https://media.sproutsocial.com/uploads/2021/06/Types-of-social-media-content-01-1.svg"} scale={9} position={[0, -1500]}> </Img>);
    bg_rect().add(<Img src={"https://images.pexels.com/photos/18960521/pexels-photo-18960521.jpeg"} scale={0.15} position={[500, 1500]}> </Img>);

    yield* text().text("Content", 0)

    yield* all(
        text().position.x(-850, 1),
        text().position.y(-450, 1),
        text().offset([-1, -1], 1),
        text().fontSize(80, 1),
        text().fill(LIGHT_CYAN, 1)
    );

    bg_rect().add(<Code ref={desc} offset={[-1, -1]} position={[-850, -300]} code="" fontSize={40} fill={LIGHT_CYAN} />);

    yield* text().text("Why Content Matters", 1);

    yield* desc().code(`
Content is what your audience sees, shares, and remembers.

It shapes perception, trust, and brand voice.

Strong content leads to higher reach and ROI.

Helps users through the awareness, interest, and decision stages.

Great content converts followers into loyal customers.

It's your most powerful digital marketing asset.
`, 1);

    yield* waitUntil("MID DONE");

    yield* camera().position.y(1500, 2);

    yield* waitUntil("DOWN DONE");

    yield* camera().position.y(-1500, 2);

    yield* waitUntil("UP DONE");

    yield* camera().position([0,0],2);
});