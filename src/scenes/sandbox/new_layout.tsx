import { Camera, Img, Layout, Rect, Txt, makeScene2D } from '@motion-canvas/2d';
import { all, beginSlide, createRef, easeInCubic, easeInElastic, easeInOutCubic, waitFor } from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  view.fontFamily(`'JetBrains Mono', monospace`).fontWeight(700).fontSize(80);
  const imageRect = createRef<Rect>();
  const camera = createRef<Camera>();
  const title_rect = createRef<Rect>();
  const title_text = createRef<Txt>();
  const description_text = createRef<Txt>();
  const image = createRef<Img>();
  const rect1 = createRef<Rect>();
  const rect2 = createRef<Rect>();
  const bg_rect = createRef<Rect>();
  const main_layout = createRef<Layout>();
  const inner_layout = createRef<Layout>();

  const NEON_BLUE = "#5465FF";
  const CORNFLOWER_BLUE = "#788bff";
  const JORDY_BLUE = "#9bb1ff";
  const PERIWINKLE = "#bfd7ff";
  const LIGHT_CYAN = "#e2fdff";

  const SLATE = "#33415c";
  const DARK_SLATE = "#001233";

  view.add(<Rect ref={bg_rect} height={1080} width={1920} fill={DARK_SLATE}></Rect>);

  bg_rect().add(
    <Layout padding={20} ref={main_layout} layout direction={"column"} height={"100%"} width={"100%"} gap={20}>

      <Rect ref={title_rect} grow={1.5} fill={SLATE} lineWidth={10} radius={20} ></Rect>

      <Layout ref={inner_layout} grow={7.5} gap={20} >
        <Rect ref={rect1} fill={SLATE} lineWidth={10} radius={20} grow={7}></Rect>
      </Layout>

    </Layout>
  );

  inner_layout().add(<Rect ref={rect2} fill={SLATE} grow={3} radius={20} lineWidth={10} clip ></Rect>);

  title_rect().add(
  <Layout layout={false}>
    <Txt fontFamily={'Roboto Condensed'}  size={() => title_rect().size()} offsetX={0} paddingTop={20} paddingLeft={30} ref={title_text} layout={false} text="Predictive Analysis" fill={LIGHT_CYAN} />
  </Layout>
  )

  rect1().add(
  <Layout layout={false}>
<Txt
  fontFamily={'Roboto Condensed'}
  ref={description_text}
  text={`
    Predictive Analysis uses historical data, machine learning, and 
    statistics to forecast future outcomes. It helps businesses 
    anticipate trends, reduce risks, and make data-driven decisions.`}
  fill={LIGHT_CYAN}
  padding={20}
  fontSize={40}
  size={() => rect1().size()}
  layout={false}
/>

  </Layout>
  )

  rect2().add(<Img
    src={"https://images.pexels.com/photos/32249737/pexels-photo-32249737.jpeg"}
    layout={false}
    height={"100%"}
    ref={image}
    opacity={0}
  />)




  yield* all(
    rect2().grow(3, 1),
    inner_layout().gap(20, 1),
    title_text().text("Predictive Analysis with Image",1),
    image().opacity(1, 1)
  );


  yield* waitFor(2);
});