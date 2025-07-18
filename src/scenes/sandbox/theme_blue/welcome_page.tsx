import { Camera, Img, Layout, Rect, Txt, makeScene2D } from '@motion-canvas/2d';
import { all, beginSlide, createRef, easeInCubic, easeInElastic, easeInOutCubic, waitFor } from '@motion-canvas/core';

export default makeScene2D(function* (view) {

    const title_text = createRef<Txt>();
    const desc_text = createRef<Txt>();
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

    view.add(
        <Rect ref={bg_rect} height={1080} width={1920} fill={BLACK} ></Rect>
    );

    bg_rect().add(<Txt ref={title_text} text={""} fill={YELLOW} offset={[-1, -1]} position={[-880, -470]} fontSize={90}></Txt>);

    bg_rect().add(<Txt ref={desc_text} text={""} fill={WHITE} offset={[-1, -1]} position={[-880, -350]} fontSize={60}></Txt>);

    bg_rect().add(<Rect ref={rect_1} size={[0, 0]} fill={ORANGE} offset={[1, 1]} radius={20} position={[920, 510]} ><Img src={`https://img.icons8.com/?size=50&id=50rlyzgyjENI&format=png&color=${WHITE}`}></Img></Rect>)

    bg_rect().add(<Rect ref={rect_2} size={[0, 0]} fill={ORANGE} offset={[-1, 1]} radius={20} position={[-920, 510]} clip ><Img width={"100%"} src={`https://images.pexels.com/photos/31718809/pexels-photo-31718809.jpeg`}></Img></Rect>)

    yield* all(
        title_text().text("Welcome to the workshop", 1),
        desc_text().text("Greet your audience. Thank them for attending and prepare them \nfor the exercises ahead.", 1),
        rect_2().size([1720,500],2),
        rect_1().size([100,100],2)
    );

    yield* waitFor(1);

    yield* all(
        title_text().text("", 1),
        desc_text().text("", 1),
        rect_2().size([0,0],2),
        rect_1().size([0,0],2)
    );
});