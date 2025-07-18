import { Camera, Img, Layout, Rect, Txt, makeScene2D } from '@motion-canvas/2d';
import { all, beginSlide, createRef, easeOutSine, easeInElastic, waitFor } from '@motion-canvas/core';

export default makeScene2D(function* (view) {

    const DARK_BLUE = "#023047";
    const YELLOW = "#ffb703";
    const ORANGE = "#fb8500";
    const TEAL = "#219ebc";
    const SKY = "#8ecae6";

    const WHITE = "#FFFFFF";
    const BLACK = "#10100F";

    const rect_1 = createRef<Rect>();
    const rect_2 = createRef<Rect>();
    const rect_3 = createRef<Rect>();
    const rect_4 = createRef<Rect>();

    const bg_rect = createRef<Rect>();

    view.add(
        <Rect ref={bg_rect} height={1080} width={1920} fill={DARK_BLUE} ></Rect>
    );

    bg_rect().add(
        <Layout layout height={"100%"} width={"100%"} gap={20} padding={20}>
            <Rect fill={TEAL} grow={5} radius={40} ref={rect_1}>
                <Layout layout={false}>
                    <Txt layout={false} fill={DARK_BLUE} text={"Content\nMarketing"} fontSize={150}></Txt>
                </Layout>
            </Rect>
            <Layout grow={5} direction={"column"} gap={20}>
                <Layout grow={5} gap={20}>
                    <Rect fill={SKY} grow={5} radius={40} ref={rect_2}  clip>
                        <Img
                                src={"https://images.pexels.com/photos/32846723/pexels-photo-32846723.jpeg"}
                                layout={false}
                                width={"100%"}
                            />
                    </Rect>
                    <Rect fill={YELLOW} grow={5} radius={40} ref={rect_3}>
                         <Layout layout={false}>
                    <Txt layout={false} fill={DARK_BLUE} text={"Week 2"} fontFamily={'Roboto Condensed'} ></Txt>
                </Layout>
                    </Rect>
                </Layout>
                <Rect fill={ORANGE} grow={5} radius={40} ref={rect_4}>
                     <Layout layout={false}>
                    <Txt layout={false} fill={"white"} text={""} fontFamily={'Roboto Condensed'} ></Txt>
                </Layout>
                </Rect>
            </Layout>
        </Layout>
    );

    yield* waitFor(1);
    yield* rect_1().opacity(0,0.25);

    yield* rect_2().opacity(0,0.25);
    yield* rect_3().opacity(0,0.25);
    yield* rect_4().opacity(0,0.25);

    rect_1().remove();
    rect_2().remove();
    rect_3().remove();
    rect_4().remove();
    
    yield* bg_rect().fill(BLACK,1);
});