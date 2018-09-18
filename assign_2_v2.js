const flip_string = sentence => {
  let flipped_sentence = ''

  for (let i = sentence.length - 1; i >= 0; i--) {
    flipped_sentence = flipped_sentence + sentence[i]
  }
  return flipped_sentence
}

console.log(flip_string('?A nut for a jar of tuna?'))
