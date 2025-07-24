import { Camera, Latex, Rect, Txt, makeScene2D } from '@motion-canvas/2d';
import { all, createRef, createSignal, waitFor } from '@motion-canvas/core';

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
    const compATxt = createRef<Txt>();
    const compBTxt = createRef<Txt>();
    const algoATxt = createRef<Txt>();
    const algoBTxt = createRef<Txt>();
    const formula1 = createRef<Latex>();
    const formula2 = createRef<Latex>();

    // 🔢 Signals
    const compAOps = createSignal(0);
    const compBOps = createSignal(0);

    // 🎥 Scene setup
    view.add(
        <Camera ref={cam1}>
            <Rect ref={bgRect} width={5000} height={5000} fill={COLORS.BLACK} />
        </Camera>
    );


    bgRect().add(<Rect ref={darkYellowRect} height={5000} width={1000} fill={COLORS.DARK_YELLOW} offsetX={-1}></Rect>);
    bgRect().add(<Rect ref={darkBlueRect} height={5000} width={1000} fill={COLORS.DARK_BLUE} offsetX={1}></Rect>);


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

    yield* all(
        algoA().size([400, 400], 2),
        algoB().size([400, 400], 2),
    );

    algoATxt().opacity(1);
    algoBTxt().opacity(1);

    view.add(<Latex ref={formula1} tex={""} offset={[-1, -1]} position={[-700, 0]} fill={COLORS.WHITE}></Latex>);
    view.add(<Latex ref={formula2} tex={""} offset={[-1, -1]} position={[250, 0]} fill={COLORS.WHITE}></Latex>);

    yield* cam1().position.y(280, 2);

    yield* all(
        formula1().tex("T(A)= C1 (n^2 / 10^4)", 1),
        formula2().tex("T(B)= C2 (n log n / 10^2)", 1)
    );


    yield* waitFor(2);
});
