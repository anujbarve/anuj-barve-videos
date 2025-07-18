import { makeScene2D, Rect, Img, Txt, Layout } from '@motion-canvas/2d';
import { createRef, waitFor } from '@motion-canvas/core';
import slides from './data.json';

type ImageWithBg = {
  src: string;
  bg: string;
};

type Slide = {
  id: string;
  type: string;
  title?: string;
  subtitle?: string;
  background?: string;
  image?: string | ImageWithBg;
  icon?: string | ImageWithBg;
  colors?: {
    title?: string;
    subtitle?: string;
    [key: string]: string;
  };
  images?: { src: string; fill: string }[];
};

function isImageObject(obj: unknown): obj is ImageWithBg {
  return typeof obj === 'object' && obj !== null && 'src' in obj && 'bg' in obj;
}

export default makeScene2D(function* (view) {
  const bg = createRef<Rect>();

  view.add(
    <Rect ref={bg} width={1920} height={1080} fill={'#000000'} />
  );

  for (const slide of slides as Slide[]) {
    bg().removeChildren();
    bg().fill(slide.background ?? '#10100F');

    // Title
    if (slide.title) {
      bg().add(
        <Txt
          text={slide.title}
          fontSize={64}
          fill={slide.colors?.title ?? '#FFD979'}
          fontFamily="Roboto Condensed"
          position={[0, -400]}
        />
      );
    }

    // Subtitle
    if (slide.subtitle) {
      bg().add(
        <Txt
          text={slide.subtitle}
          fontSize={36}
          fill={slide.colors?.subtitle ?? '#FFFFFF'}
          fontFamily="Roboto Condensed"
          position={[0, -300]}
          textAlign="center"
          lineHeight={1.4}
        />
      );
    }

    // Icon
    if (isImageObject(slide.icon)) {
      bg().add(
        <Rect
          size={[100, 100]}
          fill={slide.icon.bg}
          radius={20}
          position={[920, 510]}
          offset={[1, 1]}
        >
          <Img src={slide.icon.src} layout={false} />
        </Rect>
      );
    }

    // Single image
    if (typeof slide.image === 'string') {
      bg().add(
        <Img
          src={slide.image}
          layout={false}
          size={[800, 500]}
          radius={40}
          position={[0, 150]}
        />
      );
    } else if (isImageObject(slide.image)) {
      bg().add(
        <Rect fill={slide.image.bg} radius={40} size={[800, 500]} position={[0, 150]}>
          <Img src={slide.image.src} layout={false} />
        </Rect>
      );
    }

    // Moodboard
    if (slide.type === 'moodboard' && slide.images?.length) {
      const layoutCol = (
        <Layout layout direction="row" gap={30} alignItems="center" justifyContent="center" />
      );

      for (const { src, fill } of slide.images) {
        layoutCol.add(
          <Rect fill={fill} grow={1} radius={30} size={[300, 200]} clip>
            <Img src={src} layout={false} width="100%" />
          </Rect>
        );
      }

      bg().add(
        <Layout direction="column" gap={40} position={[0, 100]}>
          {layoutCol}
        </Layout>
      );
    }

    yield* waitFor(2); // Pause between slides
  }
});
