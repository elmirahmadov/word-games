const words = [
  "Elmir",
  "Soltan",
  "Dürrə",
  "Səma",
  "Musa",
  "İzzət",
  "Emil",
  "Sərxan",
  "Murad",
  "İbrahim",
];

function randomElements(arr) {
  const randomIndex1 = Math.floor(Math.random() * arr.length);
  return arr[randomIndex1];
}

const guessWords = randomElements(words);

const hiddenWords = guessWords.split("").map(function () {
  return "_";
});

while (hiddenWords.includes("_")) {
  console.log(`Your secret word:  ${hiddenWords.join(" ")}`);

  const letter = prompt("Enter your letter");

  let found = false;
  for (let i = 0; i < guessWords.length; i++) {
    if (guessWords[i] === letter) {
      hiddenWords[i] = letter;
      found = true;
    }
  }

  if (!found) {
    console.log("Letter not found.");
  }

  console.log(hiddenWords.join(" "));
}

console.log("Congratulations, you found it!");
