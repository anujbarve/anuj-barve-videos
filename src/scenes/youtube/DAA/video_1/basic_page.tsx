import { Camera, Img, Layout, Rect, Txt, makeScene2D } from '@motion-canvas/2d';
import { all, beginSlide, createRef, easeInCubic, easeInElastic, easeInOutCubic, waitFor, waitUntil } from '@motion-canvas/core';

export default makeScene2D(function* (view) {


    const DARK_BLUE = "#023047";
    const YELLOW = "#ffb703";
    const ORANGE = "#fb8500";
    const TEAL = "#219ebc";
    const SKY = "#8ecae6";

    const WHITE = "#FFFFFF";
    const BLACK = "#10100F";

    const title_text = createRef<Txt>();
    const desc_text = createRef<Txt>();
    const rect_1 = createRef<Rect>();

    const bg_rect = createRef<Rect>();

    view.add(
        <Rect ref={bg_rect} height={1080} width={1920} fill={BLACK} ></Rect>
    );

    bg_rect().add(<Txt ref={title_text} text={""} fill={YELLOW} offset={[-1, -1]} position={[-880, -470]} fontSize={90}></Txt>);

    bg_rect().add(<Txt ref={desc_text} text={``} fill={WHITE} offset={[-1, -1]} position={[-880, -350]} fontSize={40}></Txt>);

    bg_rect().add(<Rect ref={rect_1} size={[0, 0]} fill={ORANGE} offset={[1, 1]} radius={20} position={[920, 510]} ><Img src={`https://img.icons8.com/?size=50&id=50rlyzgyjENI&format=png&color=${WHITE}`}></Img></Rect>)



    yield* all(
        title_text().text(`The Role of Algorithms in Computing`, 2),
        desc_text().text(`
An algorithm is a specific procedure for solving a well-defined
computational problem.
The development and analysis of algorithms is fundamental to all aspects
(areas) of computer science.
Like artificial intelligence, databases, graphics, networking, operating
systems, security, and so on.
Each step in algorithm give us a path to solve a particular problem.
It maps from input to the output, in between these two there are multiple
operations/steps.
Programming is all about solving problem with the help of programming
language. In order to write a program for a problem, the programmer must
know the input and output and how to solve the problem. An algorithm
solves the half of the above task. Algorithm can be written in simple in
English sentences with clearly mentioning the steps. Otherwise, we can use
pseudo code which is quite similar to the programming language key words.
            `, 2),
        rect_1().size([100,100],2)
    );

    yield* waitUntil("Page Done");

        yield* all(
        title_text().text(``, 2),
        desc_text().text(``, 2),
        rect_1().size([0,0],2)
    );

});