function HangmanPicture({ linesSVG }) {
  return linesSVG.map(({ className, x1, y1, x2, y2 }) => (
    <line class={className} x1={x1} y1={y1} x2={x2} y2={y2}></line>
  ));
}

export default HangmanPicture;
