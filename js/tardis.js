document.addEventListener('DOMContentLoaded', function () {
  function sendSOSMessage(e) {
    console.log('sendSOSMessage clicked');
    var val = document.getElementById('user-input').value;
    window.postMessage("Somebody sent this: " + val, "*");
  }

  function handleMessage(e) {
    console.log('we got a message!!!');
    var output = window.document.getElementById('output');
    output.innerHTML += "<p class='mini'>"
    output.innerHTML += e.data;
    output.innerHTML += "</p>"
  }

  function reset(e) {
    window.document.getElementById('output').innerHTML = '';
  }

  document.getElementById('send').addEventListener('click', sendSOSMessage);
  document.getElementById('reset').addEventListener('click', reset);
  window.addEventListener('message', handleMessage);
});
