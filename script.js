const rec = new window.webkitSpeechRecognition();

rec.lang = 'en-US';
rec.continuous = true;

rec.onresult = function (e) {
  const colors = ['blue', 'red', 'yellow', 'green', 'pink', 'black'];
  const script = e.results[e.resultIndex][0].transcript.toLowerCase().trim();
  console.log(script);
  if (colors.includes(script)) {
    document.body.style.backgroundColor = script;
  } else {
    alert('Try again with a valid color');
  }
};

rec.start();
