document.addEventListener('DOMContentLoaded', function () {
  function launchMaliciousActivity(e) {
    e.preventDefault();
    var activity = new MozActivity({
      name: 'dvfa',
      data: {
	userdata: 'delete'
      }
    });
    activity.onsuccess = function() {
      console.log("starting 'dvfa' activity");
    };
    activity.onerror = function() {
      console.log("error with 'dvfa' activity");
    };
  }

  function launchActivityLeak(e) {
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

  document.getElementById('launch-malicious-activity').addEventListener('click', launchMaliciousActivity);
  document.getElementById('leak-activity').addEventListener('click', launchActivityLeak);
  document.getElementById('reset').addEventListener('click', reset);
});
