const randomColor = () => {
  const colors = ['red', 'pink', 'blue', 'purple', 'green'];
  const randomColor = colors[Math.floor(Math.random()*colors.length)];
  return randomColor;
};

export default randomColor;