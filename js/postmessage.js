document.addEventListener('DOMContentLoaded', function () {
  function sendPostMessage(e) {
    console.log('sendPostMessage clicked');
    window.postMessage("bad person sent this <h1>baaad</h1>", "*");
  }

  function handleMessage(e) {
    console.log('we got a message!!!');
    var output = window.document.getElementById('output');
    //uh-oh, we are using innerHTML badly
    output.innerHTML += "<p class='mini'>"
    output.innerHTML += e.data;
    output.innerHTML += "</p>"
  }

  function reset(e) {
    window.document.getElementById('output').innerHTML = '';
  }

  document.getElementById('send').addEventListener('click', sendPostMessage);
  document.getElementById('reset').addEventListener('click', reset);
  window.addEventListener('message', handleMessage);
});
