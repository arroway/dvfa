document.addEventListener('DOMContentLoaded', function () {
  function kaboom(e) {
    console.log('Ruh-roh, we are going kaboom...');
    while(true) {
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
  }

  document.getElementById('dos').addEventListener('click', kaboom);
});
