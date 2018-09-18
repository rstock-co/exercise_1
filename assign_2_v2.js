//Just checking out your code
function flip_string_v2(sentence) {
  let flipped_sentence = ''

  for (let i = sentence.length - 1; i >= 0; i--) {
    flipped_sentence = flipped_sentence + sentence[i]
  }
  return flipped_sentence
}
const flip_string_v3 = sentence => {
  let flipped_sentence = ''

  for (let i = sentence.length - 1; i >= 0; i--) {
    flipped_sentence = flipped_sentence + sentence[i]
  }
  return flipped_sentence
}

const flip_sentence = sentence => {}

console.log(flip_string_v2('?A nut for a jar of tuna?'))
console.log(flip_string_v3('?A nut for a jar of tuna?'))
