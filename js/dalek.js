document.addEventListener('DOMContentLoaded', function () {
  function alertalert(e) {
    //below we use innerHTML, unsafely, to create a <p> tag
    var val = document.getElementById('user-input').value;
    document.getElementById('output').innerHTML += '<p>'
    document.getElementById('output').innerHTML += val;
    document.getElementById('output').innerHTML += '</p>'
  }

  function exterminate(e) {
    //below we use textContent instead of innerHTML
    var val = document.getElementById('user-input').value;
    var p = document.createElement('p');
    p.textContent = val;
    document.getElementById('output').appendChild(p);
  }

  function clear() {
    document.getElementById('output').innerHTML='';
  }

  document.getElementById('alertalert').addEventListener('click', alertalert);
  document.getElementById('exterminate').addEventListener('click', exterminate);
  document.getElementById('clear').addEventListener('click', clear);
});
