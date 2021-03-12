document.addEventListener('DOMContentLoaded', (event) => {
  // array with texts to type in spell
  var h1_intro = [
    "👋 Hello, I`m Javier Lopez Ramos",
    "🤝 Call me Javi",
    "💻 A software engineer",
    "👍 Get to know me!"
  ];
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function spell(text, i, cb) {
    // finished?
    if (i < (text.length)) {
      // add next character to h1
      document.querySelector("h1").innerHTML = text.substring(0, i + 1) + '<span>|</span>';
      // wait for a while and call this function again for next character
      setTimeout(() => {
        spell(text, i + 1, cb)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof cb == 'function') {
      // call callback after timeout
      setTimeout(cb, 700);
    }
  }
  // start a spell animation for a text in the h1_intro array
  function animate(i) {
    if (typeof h1_intro[i] == 'undefined') {
      setTimeout(() => {
        animate(0);
      }, 20000);
    }
    // check if h1_intro[i] exists
    if (i < h1_intro[i].length) {
      // text exists! start spell animation
      spell(h1_intro[i], 0, () => {
        // after callback (and whole text has been animated), start next text
        animate(i + 1);
      });
    }
  }
  // start the text animation
  animate(0);
});