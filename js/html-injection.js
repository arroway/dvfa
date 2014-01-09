document.addEventListener('DOMContentLoaded', function () {
  function unSafe(e) {
    //below we use innerHTML, unsafely, to create a <p> tag
    var val = document.getElementById('user-input').value;
    document.getElementById('output').innerHTML += '<p>'
    document.getElementById('output').innerHTML += val;
    document.getElementById('output').innerHTML += '</p>'
  }

  function safe(e) {
    //below we use textContent instead of innerHTML
    var val = document.getElementById('user-input').value;
    var p = document.createElement('p');
    p.textContent = val;
    document.getElementById('output').appendChild(p);
  }

  function clear() {
    document.getElementById('output').innerHTML='';
  }

  document.getElementById('unsafe').addEventListener('click', unSafe);
  document.getElementById('safe').addEventListener('click', safe);
  document.getElementById('clear').addEventListener('click', clear);
});
