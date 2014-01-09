/*In this file there are two functions that take user-supplied input and then
 * add this input to an HTML element. 
 *
 * We could also HTML entity encode the user-input for further security.
 */

document.addEventListener('DOMContentLoaded', function () {
  function unSafe(e) {
    //example: we want user-input inside a <p> tag
    var val = document.getElementById('user-input').value;
    document.getElementById('output').innerHTML += '<p>'
    document.getElementById('output').innerHTML += val;
    document.getElementById('output').innerHTML += '</p>'
  }

  function safe(e) {
    //example: we want user-input inside a <p> tag
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
