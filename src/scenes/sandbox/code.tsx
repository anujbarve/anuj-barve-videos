import { makeScene2D, Code, lines, Rect } from '@motion-canvas/2d';
import { createRef, DEFAULT, waitFor } from '@motion-canvas/core';

const colorPrimary = '#5465ff';
const colorSecondary = '#788bff';
const colorTertiary = '#9bb1ff';
const colorLight = '#bfd7ff';
const colorLighter = '#e2fdff';


export default makeScene2D(function* (view) {
    const code = createRef<Code>();

    view.add(<Rect height={1080} width={1920} fill={colorLighter}></Rect>)

    view.add(
        <Code
            fill={colorPrimary}
            ref={code}
            fontSize={28}
            offsetX={-1}
            x={-800}
            code=
            {
`\
Asymptotic notations are mathematical tools to represent time complexity of
algorithms for asymptotic analysis.
The main idea of asymptotic analysis is to have a measure of efficiency of
algorithms that doesn’t depend on machine specific constants, and doesn’t require
algorithms to be executed and time taken by programs to be compared.
The following 3 asymptotic notations are mostly used to represent time complexity
of algorithms.
1. Big Oh Notation (O):
2. Omega Notation (Ω):
3. Theta Notation (Θ):
`
}
        />,
    );


    // select line 1
    yield* code().selection(lines(1), 0.6);
    yield* waitFor(0.3);


    yield* code().selection(lines(2), 0.6);
    yield* waitFor(0.3);

    yield* code().selection(lines(3), 0.6);
    yield* waitFor(0.3);


    yield* code().selection(lines(4), 0.6);
    yield* waitFor(0.3);

    // reset the selection
    yield* code().selection(DEFAULT, 0.6);
    yield* waitFor(0.3);

});
