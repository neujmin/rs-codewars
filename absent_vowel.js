function absentVowel(x) {
  const vowelArray = ["a", "e", "i", "o", "u"];
  const tempArray = x.toLowerCase().split("");
  const result = vowelArray.find((x) => tempArray.indexOf(x) === -1);
  return vowelArray.indexOf(result);
}
