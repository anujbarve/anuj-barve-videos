import { Img, makeScene2D, Node, Path, Rect } from '@motion-canvas/2d';
import { all, createRef, loopUntil } from '@motion-canvas/core';

export default makeScene2D(function* (view) {
    const path1 = createRef<Path>();
    const path2 = createRef<Path>();
    const path3 = createRef<Path>();
    const path4 = createRef<Path>();
    const svgNode = createRef<Node>();

    const DARK_PURPLE = "#171123";


    view.add(<Rect
        fill={"#fff"}
        width={5000}
        height={5000}
        alignItems="center"
        justifyContent="center"
    >
    </Rect>);

    view.add(
        <Node ref={svgNode}>
            <Path
                ref={path1}
                stroke={'red'}
                lineWidth={1}
                opacity={1}
                data="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
                scale={10}
                position={[-50, -50]}
                end={0}
                clip
            >
                <Img scale={1} src={"https://media.sproutsocial.com/uploads/2021/06/Types-of-social-media-content-01-1.svg"}> </Img>
            </Path>
        </Node>,
    );

    yield* all(
        path1().end(1, 1),
    );

    yield* loopUntil(
        'Stop Looping',
        () => all(
            svgNode().position([0,-200],2).to([0,-250],2),
            path1().lineWidth(2,1).to(1,2),
            path1().opacity(0.4,2).to(0.8,2)       
        )
    );

});
