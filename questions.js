//Instructions:
// This array holds the questions, question number, options, and answers
// Enter the latex equation or text for the options after the span 
// If equation requires backslash, use double backslash as JS skips through one

const questions = [
  {
  numb: 1,
  question: "The value of $latex \\displaystyle\\iint \\limits_{R} e^{x^2+y^2}dxdy $ where R is a circle of radius $latex 1$ and center $latex (0,0)$ is:",
  answer: "C",
  options: [
    `<span class="letterQuiz">A</span> $latex 2\\pi(1-e)$`,
    `<span class="letterQuiz">B</span> $latex e$`,
    `<span class="letterQuiz">C</span> $latex \\pi(e-1)$`,
    `<span class="letterQuiz">D</span> $latex \\pi$`
  ]
},
  {
  numb: 2,
  question: "The integral $latex \\displaystyle\\iint x y^2 dxdy$ over the rectangle of vertices $latex (0,-1)$ and $latex (1,2)$ is:",
  answer: "D",
  options: [
    `<span class="letterQuiz">A</span> $latex \\dfrac{1}{2}$`,
    `<span class="letterQuiz">B</span> $latex \\dfrac{1}{3}$`,
    `<span class="letterQuiz">C</span> $latex \\dfrac{2}{3}$`,
    `<span class="letterQuiz">D</span> $latex \\dfrac{3}{2}$`
  ]
},
  {
  numb: 3,
  question: "Finding $latex\\displaystyle\\iint y^2 e^{xy}dx dy$, over the region $latex x≤y$ with $latex y∊[0,1]$, we get:",
  answer: "A",
  options: [
    `<span class="letterQuiz">A</span> $latex \\dfrac {e-2}{2}$`,
    `<span class="letterQuiz">B</span> $latex e^2$`,
    `<span class="letterQuiz">C</span> $latex 1$`,
    `<span class="letterQuiz">D</span> $latex \\dfrac{1}{2}$`
  ]
},
  {
  numb: 4,
  question: "Solving $latex\\displaystyle\\iint e^y dx dy$ over the region $latex x∊[1-y,1]$ and $latex y∊[0,1]$, we get:",
  answer: "C",
  options: [
    `<span class="letterQuiz">A</span> $latex 1.5$`,
    `<span class="letterQuiz">B</span> $latex 0.5$`,
    `<span class="letterQuiz">C</span> $latex 1$`,
    `<span class="letterQuiz">D</span> $latex 2$`
  ]
},
  {
  numb: 5,
  question: "The integral $latex\\displaystyle \\int x \\left[\\int dy\\right] dx$, over the region $latex x∊[0,2]$ and $latex y∊[x^2,2x]$, is:",
  answer: "A",
  options: [
    `<span class="letterQuiz">A</span> $latex \\dfrac{4}{3}$`,
    `<span class="letterQuiz">B</span> $latex \\dfrac{3}{4}$`,
    `<span class="letterQuiz">C</span> $latex \\dfrac{2}{3}$`,
    `<span class="letterQuiz">D</span> $latex 1$`
  ]
},

];