const shuffleArray = array => {
  for (const i = array.length - 1; i > 0; i--) {
    const j = parseInt(Math.floor(Math.random() * (i + 1)));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
export default shuffleArray;
