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
        <Rect ref={bg_rect} height={1080} width={1920} fill={BLACK} ></Rect>
    );

    bg_rect().add(<Txt text={"The challenge"} fill={JASMINE} offset={[-1,-1]} position={[-880,-470]} fontSize={90}></Txt>);

    bg_rect().add(<Txt text={`
Now that you’ve established the goal, explain why a \nworkshop is the best way to reach this objective. 

For example, if you’re brainstorming, you might say a \nworkshop can break down silos, encourage collaboration \nbetween people from different disciplines, and spark creativity.

        `} fill={WHITE} offset={[-1,-1]} position={[-880,-350]} fontSize={60}></Txt>);

    bg_rect().add(<Rect size={[100,100]} fill={MELON} offset={[1,1]} radius={20} position={[920,510]} ><Img src={`https://img.icons8.com/?size=50&id=50rlyzgyjENI&format=png&color=${ROSE_WOOD}`}></Img></Rect>)

yield* waitFor(1);


});