document.addEventListener('DOMContentLoaded', function () {
  function launchCybermen(e) {
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

  function launchCybermenActivity(e) {
    var activity = new MozActivity({
      name: 'dvfa',
      data: {
	userdata: 'info-leak',
	secret: 'emotions inhibitor code'
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
    window.document.getElementById('cybermen-output').innerHTML = '';
    var del = window.document.getElementById('to-delete');
    var p = document.createElement('p');
    p.className = 'delete';
    p.textContent = 'This-Will-Be-Deleted';
    del.appendChild(p);
  }

  document.getElementById('launch-cybermen').addEventListener('click', launchCybermen);
  document.getElementById('cybermen-activity').addEventListener('click', launchCybermenActivity);
  document.getElementById('reset').addEventListener('click', reset);
});
