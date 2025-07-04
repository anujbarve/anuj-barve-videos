import { Camera, Img, Layout, Rect, Txt, makeScene2D } from '@motion-canvas/2d';
import { createRef, easeInCubic, easeInElastic, easeInOutCubic } from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  view.fontFamily(`'JetBrains Mono', monospace`).fontWeight(700).fontSize(256);
  const imageRect = createRef<Rect>();
  const camera = createRef<Camera>();

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
              <Rect grow={2} fill={PERIWINKLE} radius={20} />
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
            />
          </Rect>
          <Rect
            grow={2}
            fill={JORDY_BLUE}
            radius={20}
            clip
            alignItems="center"
            justifyContent="center"
          >
            <Layout layout={false}>
              <Txt layout={false} text="SM" />
            </Layout>
          </Rect>

        </Layout>
      </Layout>
    </Camera>,
  );
  yield* camera().position.y(-500, 4, easeInOutCubic)
});