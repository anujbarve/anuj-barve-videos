import { Camera, Latex, Layout, Node, Rect, Txt, makeScene2D } from '@motion-canvas/2d';
import { all, beginSlide, createRef, createSignal, loopFor, waitFor } from '@motion-canvas/core';

export default makeScene2D(function* (view) {
    // 🎨 Colors
    const COLORS = {
        DARK_BLUE: "#023047",
        YELLOW: "#ffb703",
        DARK_YELLOW: "#443100ff",
        ORANGE: "#fb8500",
        TEAL: "#219ebc",
        SKY: "#8ecae6",
        WHITE: "#FFFFFF",
        BLACK: "#10100F",
    };

    // 🔁 Refs
    const cam1 = createRef<Camera>();
    const bgRect = createRef<Rect>();
    const darkYellowRect = createRef<Rect>();
    const darkBlueRect = createRef<Rect>();
    const compA = createRef<Rect>();
    const compB = createRef<Rect>();
    const algoA = createRef<Rect>();
    const algoB = createRef<Rect>();
    const formulaBoxA = createRef<Rect>();
    const formulaBoxB = createRef<Rect>();
    const formulaBoxNodeA = createRef<Node>();
    const formulaBoxNodeB = createRef<Node>();
    const compATxt = createRef<Txt>();
    const compBTxt = createRef<Txt>();
    const algoATxt = createRef<Txt>();
    const algoBTxt = createRef<Txt>();
    const formula1 = createRef<Latex>();
    const formula2 = createRef<Latex>();

    const crown = createRef<Txt>();

    // 🔢 Signals
    const compAOps = createSignal(0);
    const compBOps = createSignal(0);
    const input_size = createSignal(100);

    // 🎥 Scene setup
    view.add(
        <Camera ref={cam1}>
            <Rect ref={bgRect} width={5000} height={5000} fill={COLORS.BLACK} />
        </Camera>
    );


    bgRect().add(<Rect ref={darkYellowRect} height={5000} width={5000} fill={COLORS.DARK_YELLOW} offsetX={-1}></Rect>);
    bgRect().add(<Rect ref={darkBlueRect} height={5000} width={5000} fill={COLORS.DARK_BLUE} offsetX={1}></Rect>);


    // 🖥️ Computer A
    bgRect().add(
        <Rect
            ref={compA}
            width={0}
            height={0}
            radius={0}
            fill={COLORS.WHITE}
            stroke={COLORS.TEAL}
            lineWidth={10}
            position={[-250, 0]}
        >
            <Txt
                ref={compATxt}
                opacity={0}
                fontFamily="Oswald"
                text={() =>
                    `COMPUTER A\n${compAOps().toFixed(0)}\nINSTRUCTIONS\nPER SECOND`
                }
            />
        </Rect>
    );

    // 🖥️ Computer B
    bgRect().add(
        <Rect
            ref={compB}
            width={0}
            height={0}
            radius={0}
            fill={COLORS.WHITE}
            stroke={COLORS.YELLOW}
            lineWidth={10}
            position={[250, 0]}
        >
            <Txt
                ref={compBTxt}
                opacity={0}
                fontFamily="Oswald"
                text={() =>
                    `COMPUTER B\n${compBOps().toFixed(0)}\nINSTRUCTIONS\nPER SECOND`
                }
            />
        </Rect>
    );

    // 🧠 Sort Labels
    bgRect().add(
        <Rect
            ref={algoA}
            width={0}
            height={0}
            radius={20}
            fill={COLORS.WHITE}
            stroke={COLORS.TEAL}
            lineWidth={10}
            position={[-700, 0]}
        >
            <Txt ref={algoATxt} opacity={0} fontFamily="Oswald" text={"INSERTION \nSORT\nO(n^2)"} />
        </Rect>
    );

    bgRect().add(
        <Rect
            ref={algoB}
            width={0}
            height={0}
            radius={20}
            fill={COLORS.WHITE}
            stroke={COLORS.YELLOW}
            lineWidth={10}
            position={[700, 0]}
        >
            <Txt ref={algoBTxt} opacity={0} fontFamily="Oswald" text={"MERGE \nSORT\nO(n log n)"} />
        </Rect>
    );

        bgRect().add(<Rect ref={formulaBoxA} height={0} width={0} offsetX={1} position={[-50, 450]} radius={20} stroke={COLORS.TEAL} lineWidth={10} fill={COLORS.WHITE}>
        <Node ref={formulaBoxNodeA} opacity={0}>
            <Layout layout direction={"column"}>
                <Txt fontFamily="Oswald" text={() => `For Input : ${input_size().toFixed(0)}`}></Txt>
                <Txt text={"DDE"} fill={COLORS.WHITE}></Txt>
                <Latex ref={formula1} tex={"2 * (10^2)^2 / 10^4 = 2"} fill={COLORS.BLACK}></Latex>
            </Layout>
        </Node>
    </Rect>);

    bgRect().add(<Rect ref={formulaBoxB} height={0} width={0} offsetX={-1} fill={COLORS.WHITE} position={[50, 450]} radius={20} stroke={COLORS.YELLOW} lineWidth={10}>
        <Layout layout direction={"column"}>
            <Node ref={formulaBoxNodeB} opacity={0}>
                <Txt fontFamily="Oswald" text={() => `For Input : ${input_size().toFixed(0)}`}></Txt>
                <Rect height={50}></Rect>
                <Latex ref={formula2} tex={"2 * (10^2) log (10^2) / 10 ^ 2 = 4"} fill={COLORS.BLACK}></Latex>
            </Node>
        </Layout>
    </Rect>);

    yield* beginSlide("Introduction");

    // 🎬 Animations
    yield* all(
        compA().size([400, 400], 2),
        compA().radius(20, 2),
        compB().size([400, 400], 2),
        compB().radius(20, 2)
    );

    compATxt().opacity(1);
    compBTxt().opacity(1);

    yield* all(
        compAOps(10000, 2),
        compBOps(100, 2)
    );

    yield* beginSlide("Algorithms");

    yield* all(
        algoA().size([400, 400], 2),
        algoB().size([400, 400], 2),
    );

    algoATxt().opacity(1);
    algoBTxt().opacity(1);

    yield* beginSlide("Computer A");

    yield* all(
        cam1().position.y(280, 2),
        cam1().position.x(-960, 2)
    );

    yield* all(
        formulaBoxA().height(400, 2),
        formulaBoxA().width(850, 2),
    );

    yield* formulaBoxNodeA().opacity(1, 1);

    yield* beginSlide("100 to 10000 A");

    yield* input_size(10000, 1);
    yield* formula1().tex("2 * (10^4)^2 / 10^4 = 20000", 2);

    yield* beginSlide("Cam Reset");

    yield* cam1().position.x(0, 2);

    yield* beginSlide("Computer B");

    yield* cam1().position.x(960, 2);


    input_size(100);

    yield* all(
        formulaBoxB().height(400, 2),
        formulaBoxB().width(850, 2),
    );

    yield* formulaBoxNodeB().opacity(1, 1);

    yield* beginSlide("100 to 10000 B");

    yield* input_size(10000, 1);
    yield* formula2().tex("2 * (10^4) log (10^4) / 10 ^ 2 = 800", 2);

    yield* beginSlide("CAM Reset B");

    yield* cam1().position.x(0, 2);

    yield* beginSlide("Comp B Wins");

    bgRect().add(<Txt ref={crown} text={"👑"} fontSize={100} x={450} y={-200} rotation={45}></Txt>);

    yield* loopFor(
        5,
        () => crown().rotation(30,1).to(45,1) 
    );

});
