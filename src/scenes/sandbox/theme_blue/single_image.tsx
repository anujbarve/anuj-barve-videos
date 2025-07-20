import { Camera, Img, Layout, Rect, Txt, makeScene2D } from '@motion-canvas/2d';
import { all, beginSlide, createRef, easeInCubic, easeInElastic, easeInOutCubic, waitFor } from '@motion-canvas/core';

export default makeScene2D(function* (view) {

    const rect_1 = createRef<Rect>();
    const rect_2 = createRef<Rect>();


    const DARK_BLUE = "#023047";
    const YELLOW = "#ffb703";
    const ORANGE = "#fb8500";
    const TEAL = "#219ebc";
    const SKY = "#8ecae6";

    const WHITE = "#FFFFFF";
    const BLACK = "#10100F";

    const bg_rect = createRef<Rect>();
    const img = createRef<Img>();

    view.add(
        <Rect
            ref={bg_rect}
            height={1080}
            width={1920}
            fill={BLACK}
        >
            <Img
                offset={[-1,-1]}
                position={[-900,-500]}
                ref={img}
                radius={50}
                src={"https://images.pexels.com/photos/32846723/pexels-photo-32846723.jpeg"}
                height={"0%"}
            />
        </Rect>
    );

    yield* img().height("90%",2);



    yield* waitFor(2)
});