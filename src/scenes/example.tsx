import { Img, Layout, Rect, makeScene2D } from '@motion-canvas/2d';
import { createRef } from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  const imageRect = createRef<Rect>();
  
  view.add(
    <>
      <Layout layout width={1920} height={1080} direction={"column"} gap={20} padding={20}>
        <Layout grow={7} gap={20}>
          <Layout grow={4} direction={"column"} gap={20}>
            <Rect grow={2} fill={'#000'} radius={20} stroke={"#fff"} lineWidth={2} />
            <Rect grow={6} fill={'#000'} radius={20} stroke={"#fff"} lineWidth={2} />
          </Layout>
          <Layout grow={6} direction={"column"} gap={20}>
            <Layout grow={7} gap={20}>
              <Layout grow={4.5} direction={"column"} gap={20}>
                <Rect grow={5} fill={'#000'} radius={20} stroke={"#fff"} lineWidth={2} />
                <Rect grow={2} fill={'#000'} radius={20} stroke={"#fff"} lineWidth={2} />
              </Layout>
              <Layout grow={5.5} gap={20}>
                <Rect grow={10} fill={'#000'} radius={20} stroke={"#fff"} lineWidth={2} />
              </Layout>
            </Layout>
            <Layout grow={3} gap={20}>
              <Rect grow={2} fill={'#000'} radius={20} stroke={"#fff"} lineWidth={2} />
              <Rect grow={6} fill={'#000'} radius={20} stroke={"#fff"} lineWidth={2} />
            </Layout>
          </Layout>
        </Layout>
        <Layout grow={3} gap={20}>
          <Rect grow={2} fill={'#000'} radius={20} stroke={"#fff"} lineWidth={2} />
          <Rect 
            
            grow={6} 
            fill={'#000'} 
            radius={20} 
            stroke={"#fff"} 
            lineWidth={2}
            clip
          >

          </Rect>
          <Rect ref={imageRect} grow={2} fill={'#000'} radius={20} stroke={"#fff"} lineWidth={2} clip>
                        <Img 
              src={"https://images.pexels.com/photos/32846723/pexels-photo-32846723.jpeg"}
              layout={false}
              size={() => imageRect().size()}
            />
          </Rect>
        </Layout>
      </Layout>
    </>,
  );
});