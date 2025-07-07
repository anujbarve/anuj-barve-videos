import { Camera, Code, Img, Layout, Rect, Txt, lines, makeScene2D } from '@motion-canvas/2d';
import { all, beginSlide, createRef, easeInCubic, easeInElastic, easeInOutCubic, loopUntil, waitFor, waitUntil } from '@motion-canvas/core';

export default makeScene2D(function* (view) {
    view.fontFamily(`'JetBrains Mono', monospace`).fontWeight(700).fontSize(256);
    const titleText = createRef<Txt>();
    const descText = createRef<Code>();
    const logo = createRef<Rect>();

    const miniTitle = "Content Types";
    const title = "Content Types Across Platforms";
    const description = `Text: LinkedIn updates, tweets.

Images: Instagram posts, Facebook carousels.

Videos: Reels, Shorts, TikToks, YouTube.

Live content: Facebook Live, IG Live, Spaces.

Stories: Ephemeral, engaging, and interactive.

Blog links: Shared via Facebook, LinkedIn, Twitter.
`;
    const imgSrc = "";

    const NEON_BLUE = "#5465FF";
    const CORNFLOWER_BLUE = "#788bff";
    const JORDY_BLUE = "#9bb1ff";
    const PERIWINKLE = "#bfd7ff";
    const LIGHT_CYAN = "#e2fdff";

    const DARK_PURPLE = "#171123";
    const GIANTS_ORANGE = "#f46036";

    view.add(
        <Rect
            fill={DARK_PURPLE}
            width={1920}
            height={1080}
            alignItems="center"
            justifyContent="center"
        >
            <Txt ref={titleText} text="" fontSize={200} fill={GIANTS_ORANGE} />
        </Rect>
    );

    yield* all(
        titleText().text(miniTitle, 1)
    );

    yield* all(
        titleText().position.x(-850, 1),
        titleText().position.y(-450, 1),
        titleText().offset([-1, -1], 1),
        titleText().fontSize(60, 1),
        titleText().fill(LIGHT_CYAN, 1)
    );

    yield* titleText().text(title, 1);

    view.add(
        <Code ref={descText} offset={[-1, -1]} position={[-850, -300]} code="" fontSize={40} fill={LIGHT_CYAN} />
    );

    yield* descText().code(description, 1);

    
    view.add(
    <Rect ref={logo} position={[750,350]} size={[250,250]} opacity={0.4} radius={20} clip>
            <Img
              src={imgSrc}
              layout={false}
              size={() => logo().size()}
            />
    </Rect>
    )

        yield* loopUntil(
            'S11 Done',
            () =>
                all(
                    logo().rotation(5,2).to(-5,1),
                    logo().opacity(0.2,2).to(0.4,1)
                )
        );

});