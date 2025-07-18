import { Camera, Img, Layout, Rect, Txt, makeScene2D } from '@motion-canvas/2d';
import { all, beginSlide, createRef, easeInCubic, easeInElastic, easeInOutCubic, waitFor } from '@motion-canvas/core';

export default makeScene2D(function* (view) {


    const DARK_BLUE = "#023047";
    const YELLOW = "#ffb703";
    const ORANGE = "#fb8500";
    const TEAL = "#219ebc";
    const SKY = "#8ecae6";

    const WHITE = "#FFFFFF";
    const BLACK = "#10100F";

    const title_text = createRef<Txt>();
    const desc_text = createRef<Txt>();
    const rect_1 = createRef<Rect>();

    const bg_rect = createRef<Rect>();

    view.add(
        <Rect ref={bg_rect} height={1080} width={1920} fill={BLACK} ></Rect>
    );

    bg_rect().add(<Txt ref={title_text} text={""} fill={YELLOW} offset={[-1, -1]} position={[-880, -470]} fontSize={90}></Txt>);

    bg_rect().add(<Txt ref={desc_text} text={``} fill={WHITE} offset={[-1, -1]} position={[-880, -350]} fontSize={60}></Txt>);

    bg_rect().add(<Rect ref={rect_1} size={[0, 0]} fill={ORANGE} offset={[1, 1]} radius={20} position={[920, 510]} ><Img src={`https://img.icons8.com/?size=50&id=50rlyzgyjENI&format=png&color=${WHITE}`}></Img></Rect>)



    yield* all(
        title_text().text(`The challenge`, 1),
        desc_text().text(`
Now that you’ve established the goal, explain why a \nworkshop is the best way to reach this objective. 

For example, if you’re brainstorming, you might say a \nworkshop can break down silos, encourage collaboration \nbetween people from different disciplines, and spark creativity.
`, 1),
        rect_1().size([100,100],1)
    );

    yield* waitFor(1);


});