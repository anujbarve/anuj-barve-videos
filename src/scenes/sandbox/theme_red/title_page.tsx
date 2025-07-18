import { Camera, Img, Layout, Rect, Txt, makeScene2D } from '@motion-canvas/2d';
import { all, beginSlide, createRef, easeInCubic, easeInElastic, easeInOutCubic, waitFor } from '@motion-canvas/core';

export default makeScene2D(function* (view) {

    const ROSE_WOOD = "#570100";
    const BITTER_SWEET = "#FB6058";
    const FIRE_BRICK = "#B82D2D";
    const MELON = "#ffada8";
    const JASMINE = "#FFD979";
    const WHITE = "#FFFFFF";
    const BLACK = "#000000";

    const DARK_BLUE = "#023047";
    const YELLOW = "#ffb703";
    const ORANGE = "#fb8500";
    const TEAL = "#219ebc";
    const SKY = "#8ecae6";

    const bg_rect = createRef<Rect>();

    view.add(
        <Rect ref={bg_rect} height={1080} width={1920} fill={ROSE_WOOD} ></Rect>
    );

    bg_rect().add(
        <Layout layout height={"100%"} width={"100%"} gap={20} padding={20}>
            <Rect fill={BITTER_SWEET} grow={5} radius={40}>
                <Layout layout={false}>
                    <Txt layout={false} fill={ROSE_WOOD} text={"Content\nMarketing"} fontSize={150}></Txt>
                </Layout>
            </Rect>
            <Layout grow={5} direction={"column"} gap={20}>
                <Layout grow={5} gap={20}>
                    <Rect fill={MELON} grow={5} radius={40} clip>
                        <Img
                                src={"https://images.pexels.com/photos/32846723/pexels-photo-32846723.jpeg"}
                                layout={false}
                                width={"100%"}
                            />
                    </Rect>
                    <Rect fill={JASMINE} grow={5} radius={40}>
                         <Layout layout={false}>
                    <Txt layout={false} fill={ROSE_WOOD} text={"Week 2"} fontFamily={'Roboto Condensed'} ></Txt>
                </Layout>
                    </Rect>
                </Layout>
                <Rect fill={FIRE_BRICK} grow={5} radius={40}>
                     <Layout layout={false}>
                    <Txt layout={false} fill={WHITE} text={""} fontFamily={'Roboto Condensed'} ></Txt>
                </Layout>
                </Rect>
            </Layout>
        </Layout>
    );

    yield* waitFor(1);


});