import { Camera, Code, Img, Layout, Rect, Txt, makeScene2D } from '@motion-canvas/2d';
import { all, beginSlide, createRef, easeInCubic, easeInElastic, easeInOutCubic, waitFor } from '@motion-canvas/core';

export default makeScene2D(function* (view) {


    const DARK_BLUE = "#023047";
    const YELLOW = "#ffb703";
    const ORANGE = "#fb8500";
    const TEAL = "#219ebc";
    const SKY = "#8ecae6";

    const WHITE = "#FFFFFF";
    const BLACK = "#10100F";

    const bg_rect = createRef<Rect>();
    const rect_1 = createRef<Rect>();
    const quote = createRef<Code>();

    view.add(
        <Rect ref={bg_rect} height={1080} width={1920} fill={DARK_BLUE} ></Rect>
    );

    bg_rect().add(<Code ref={quote} code={``} fill={YELLOW} offset={[-1, -1]} position={[-880, -470]} fontSize={90}></Code>);


    bg_rect().add(<Rect ref={rect_1} size={[0, 0]} fill={TEAL} offset={[1, 1]} radius={20} position={[920, 510]} ><Img src={`https://img.icons8.com/?size=50&id=50rlyzgyjENI&format=png&color=#ffffff`}></Img></Rect>)


    yield* all(
        rect_1().size([100, 100], 2),
        quote().code(`
What’s the goal of this workshop?
Are you problem-solving? 
Brainstorming?
Refining a concept?
        `, 2)
    );

    yield* waitFor(1);


});