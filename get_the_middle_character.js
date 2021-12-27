function getMiddle(s) {
  const tempArray = s.split("");
  const stringLength = tempArray.length;

  return stringLength % 2 === 0
    ? tempArray[stringLength / 2 - 1] + tempArray[stringLength / 2]
    : tempArray[Math.ceil(stringLength / 2 - 1)];
}
