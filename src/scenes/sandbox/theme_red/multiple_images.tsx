import { Camera, Img, Layout, Rect, Txt, makeScene2D } from '@motion-canvas/2d';
import { all, beginSlide, createRef, easeInCubic, easeInElastic, easeInOutCubic, waitFor } from '@motion-canvas/core';

export default makeScene2D(function* (view) {

    const img_rect_1 = createRef<Rect>();
    const img_rect_2 = createRef<Rect>();
    const img_rect_3 = createRef<Rect>();
    const img_rect_4 = createRef<Rect>();

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

    bg_rect().add(
        <Layout layout height={"100%"} width={"100%"} direction={"column"}>
            <Layout grow={1} margin={20}>
                <Rect fill={"#303030"} opacity={1} grow={5} radius={20}>
                    <Layout layout={false}>
                        <Txt layout={false} fill={JASMINE} text={"Mood Board"} fontFamily={'Roboto Condensed'} ></Txt>
                    </Layout>
                </Rect>
                <Rect grow={5}>

                </Rect>
            </Layout>
            <Layout grow={9} gap={20} margin={20}>
                <Layout grow={5} direction={"column"} gap={20}>
                    <Layout grow={5} gap={20}>
                        <Rect ref={img_rect_1} fill={MELON} grow={5} radius={40} clip>
                            <Img
                                src={"https://images.pexels.com/photos/32846723/pexels-photo-32846723.jpeg"}
                                layout={false}
                                width={"100%"}
                            />
                        </Rect>
                        <Rect ref={img_rect_2} fill={JASMINE} grow={5} radius={40} clip>
                            <Img
                                src={"https://images.pexels.com/photos/32846723/pexels-photo-32846723.jpeg"}
                                layout={false}
                                width={"100%"}
                            />
                        </Rect>
                    </Layout>
                    <Rect ref={img_rect_3} fill={FIRE_BRICK} grow={5} radius={40} clip>
                            <Img
                                src={"https://images.pexels.com/photos/32846723/pexels-photo-32846723.jpeg"}
                                layout={false}
                                width={"100%"}
                            />
                    </Rect>
                </Layout>
                <Rect ref={img_rect_4} fill={BITTER_SWEET} grow={5} radius={40} clip>
                            <Img
                                src={"https://images.pexels.com/photos/32846723/pexels-photo-32846723.jpeg"}
                                layout={false}
                                width={"100%"}
                            />
                </Rect>
            </Layout>
        </Layout>
    );

    yield* waitFor(1);


});