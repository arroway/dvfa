document.addEventListener('DOMContentLoaded', function () {
  function launchCybermenActivity(e) {
    e.preventDefault();
    var userinput = document.getElementById('user-input').value;
    var activity = new MozActivity({
      name: 'dvfa',
      data: {
	userdata: userinput
      }
    });
    activity.onsuccess = function() {
      console.log("starting 'dvfa' activity");
    };
    activity.onerror = function() {
      console.log("error with 'dvfa' activity");
    };
  }

  function launchActivity(e) {
    var activity = new MozActivity({
      name: 'dvfa',
      data: {
	userdata: 'info-leak',
	secret: 'credentials O_O'
      }
    });
    activity.onsuccess = function() {
      console.log("starting 'dvfa' activity leak");
    };
    activity.onerror = function() {
      console.log("error with 'dvfa' activity leak");
    };
  }

  function reset() {
    window.document.getElementById('web-activity-output').innerHTML = '';
    var del = window.document.getElementById('to-delete');
    var p = document.createElement('p');
    p.className = 'delete';
    p.textContent = 'This-Will-Be-Deleted';
    del.appendChild(p);
  }

  document.getElementById('cybermen-activity').addEventListener('click', launchCybermenActivity);
  document.getElementById('launch-activity').addEventListener('click', launchActivity);
  document.getElementById('reset').addEventListener('click', reset);
});
