import { Camera, Img, Layout, Rect, Txt, makeScene2D } from '@motion-canvas/2d';
import { all, beginSlide, createRef, easeInCubic, easeInElastic, easeInOutCubic } from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  view.fontFamily(`'JetBrains Mono', monospace`).fontWeight(700).fontSize(256);
  const imageRect = createRef<Rect>();
  const camera = createRef<Camera>();
  const image = createRef<Img>();
  const rect1 = createRef<Rect>();
  const rect2 = createRef<Rect>();

  const NEON_BLUE = "#5465FF";
  const CORNFLOWER_BLUE = "#788bff";
  const JORDY_BLUE = "#9bb1ff";
  const PERIWINKLE = "#bfd7ff";
  const LIGHT_CYAN = "#e2fdff";

  view.add(
    <Camera ref={camera}>
      <Layout layout width={1920} height={1080} direction={"column"} gap={20} padding={20}>
        <Layout grow={7} gap={20}>
          <Layout grow={4} direction={"column"} gap={20}>
            <Rect grow={2} fill={NEON_BLUE} radius={20} />
            <Rect grow={6} fill={NEON_BLUE} radius={20} />
          </Layout>
          <Layout grow={6} direction={"column"} gap={20}>
            <Layout grow={7} gap={20}>
              <Layout grow={4.5} direction={"column"} gap={20}>
                <Rect grow={5} fill={CORNFLOWER_BLUE} radius={20} />
                <Rect grow={2} fill={CORNFLOWER_BLUE} radius={20} />
              </Layout>
              <Layout grow={5.5} gap={20}>
                <Rect grow={10} fill={LIGHT_CYAN} radius={20} lineWidth={2} />
              </Layout>
            </Layout>
            <Layout grow={3} gap={20}>
              <Rect grow={2} fill={PERIWINKLE} ref={rect1}  radius={20} />
              <Rect grow={6} fill={PERIWINKLE} radius={20} />
            </Layout>
          </Layout>
        </Layout>
        <Layout grow={3} gap={20}>
          <Rect grow={2} fill={JORDY_BLUE} radius={20} />
          <Rect
            ref={imageRect}
            grow={6}
            fill={JORDY_BLUE}
            radius={20}
            clip
          >
            <Img
              src={"https://images.pexels.com/photos/32846723/pexels-photo-32846723.jpeg"}
              layout={false}
              size={() => imageRect().size()}
              ref={image}
            />
            <Layout layout={false}>
              <Txt layout={false} text="IT WORKS" fontSize={200} fill={LIGHT_CYAN} />
            </Layout>
          </Rect>
          <Rect
            grow={2}
            fill={JORDY_BLUE}
            radius={20}
            clip
            alignItems="center"
            justifyContent="center"
          >
          </Rect>
        </Layout>
      </Layout>
    </Camera>,
  );

  yield* beginSlide("BEGIN");

  yield* camera().centerOn(rect1(), 2);

  view.add(<Rect ref={rect2} width={rect1().width} height={rect1().height} fill={rect1().fill} radius={rect1().radius}></Rect>);


  yield* beginSlide("DEMO");

  yield* all(
    rect2().width(1920, 2),
    rect2().height(1080, 2),
    rect2().fill(LIGHT_CYAN, 2),
    rect2().radius(0, 2)
  )


  yield* beginSlide("DEMO2");

  yield* all(
    rect2().width(rect1().width, 2),
    rect2().height(rect1().height, 2),
    rect2().fill(rect1().fill, 2),
    rect2().radius(rect1().radius, 2),
  )

  yield* rect2().opacity(0, 1);

  yield* beginSlide("END");

  yield* camera().reset(2);
});