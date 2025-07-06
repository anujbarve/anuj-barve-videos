import {
    Camera,
    Circle,
    Img,
    Layout,
    Rect,
    Txt,
    makeScene2D,
} from '@motion-canvas/2d';
import {
    all,
    beginSlide,
    createRef,
    createSignal,
    Direction,
    easeInCubic,
    easeInElastic,
    easeInOutCubic,
    fadeTransition,
    loopUntil,
    Reference,
    slideTransition,
    waitFor,
    waitUntil,
} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
    // Color Palette
    const NEON_BLUE = '#5465FF';
    const CORNFLOWER_BLUE = '#788bff';
    const JORDY_BLUE = '#9bb1ff';
    const PERIWINKLE = '#bfd7ff';
    const LIGHT_CYAN = '#e2fdff';
    const DARK_PURPLE = '#171123';
    const GIANTS_ORANGE = '#f46036';

    // Constants
    const rectSize = 120;
    const verticalSpacing = 100;
    const horizontalStart = -950;
    const columnCount = 19;

    // Reference Matrix
    const rectRefs: Reference<Rect>[][] = [];

    // Background
    view.add(
        <Rect
            fill={DARK_PURPLE}
            width={1920}
            height={1080}
            alignItems="center"
            justifyContent="center"
        />
    );

    // Fade In
    yield* fadeTransition(1);

    for (let col = 0; col < columnCount; col++) {
        const columnX = horizontalStart + col * 100;
        const columnRefs: Reference<Rect>[] = [];

        for (let y = -540; y < 540; y += verticalSpacing) {
            const rectRef = createRef<Rect>();

            view.add(
                <Rect
                    ref={rectRef}
                    size={rectSize}
                    position={[columnX, y]}
                    radius={10}
                    offset={[-1, -1]}
                />
            );

            columnRefs.push(rectRef); // ✅ Now valid
        }

        rectRefs.push(columnRefs);
    }

    // Optional Looping Animation on all rects
    // Uncomment below to animate them

    yield* loopUntil(
        'Stop Looping',
        () =>
            all(
                ...rectRefs.flat().map(ref =>
                    all(
                        ref().rotation(20, 2).to(-20, 2),
                        ref().opacity(0.2, 2).to(0.4, 2),
                        ref().stroke(NEON_BLUE,2),
                        ref().lineWidth(5,2),
                    )
                )
            )
    );


});
