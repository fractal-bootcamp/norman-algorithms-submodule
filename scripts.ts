const bubbleStep = (input: Number[]) => {
  const nextStep = [...input];
  for (let i = 0; i < nextStep.length - 1; i++) {
    let helper = [nextStep[i], nextStep[i + 1]];

    if (helper[0] > helper[1]) {
      nextStep[i] = helper[1];
      nextStep[i + 1] = helper[0];
    }
  }

  return nextStep;
};

const bubbleSort = (input: Number[]) => {
  while (
    !input.every(
      (currentElement, currentIndex) =>
        bubbleStep(input)[currentIndex] === currentElement
    )
  ) {
    input = bubbleStep(input);
    console.log(input);
  }

  return input;
};

bubbleSort([4, 3, 2, 1]);

export default bubbleSort;
