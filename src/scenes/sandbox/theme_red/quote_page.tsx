import { Camera, Img, Layout, Rect, Txt, makeScene2D } from '@motion-canvas/2d';
import { all, beginSlide, createRef, easeInCubic, easeInElastic, easeInOutCubic, waitFor } from '@motion-canvas/core';

export default makeScene2D(function* (view) {

    const ROSE_WOOD = "#570100";
    const BITTER_SWEET = "#FB6058";
    const FIRE_BRICK = "#B82D2D";
    const MELON = "#ffada8";
    const JASMINE = "#FFD979";
    const WHITE = "#FFFFFF";
    const BLACK = "#10100F";

    const bg_rect = createRef<Rect>();

    view.add(
        <Rect ref={bg_rect} height={1080} width={1920} fill={MELON} ></Rect>
    );

    bg_rect().add(<Txt text={`What’s the goal of this workshop?
Are you problem-solving? 
Brainstorming?
Refining a concept?
        `} fill={ROSE_WOOD} offset={[-1, -1]} position={[-880, -470]} fontSize={90}></Txt>);


    bg_rect().add(<Rect size={[100, 100]} fill={BITTER_SWEET} offset={[1, 1]} radius={20} position={[920, 510]} ><Img src={`https://img.icons8.com/?size=50&id=50rlyzgyjENI&format=png&color=${ROSE_WOOD}`}></Img></Rect>)

    yield* waitFor(1);


});