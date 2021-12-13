// export const colors = ["#FC85B9", "#A3A8FE", "#57CCC1", "#57BCF1" , "#FFC96D", "#FF7075" , "#C5EF71", "#FFF172", "#4B99FF" , "#FF8E43"]

export const generateRandomColor = () => {
  const colors = [
    "#FC85B9",
    "#A3A8FE",
    "#57CCC1",
    "#57BCF1",
    "#FFC96D",
    "#FF7075",
    "#C5EF71",
    "#FFF172",
    "#4B99FF",
    "#FF8E43",
  ];
  const index = Math.random() * (colors.length - 0) + 0;

  return colors[Number(index.toFixed())];
};
