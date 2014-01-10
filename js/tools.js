document.addEventListener('DOMContentLoaded', function () {
  function goForward(e) {
    e.preventDefault();
    window.history.forward();
  }

  function goBack(e) {
    e.preventDefault();
    window.history.back();
  }

  function addToOutput(id, message){
    var p = document.createElement('p');
    p.textContent = message;
    p.className = 'mini';
    window.document.getElementById(id).appendChild(p);
  }

  document.getElementById('prev').addEventListener('click', goBack);
  document.getElementById('next').addEventListener('click', goForward);

  navigator.mozSetMessageHandler('activity', function(activityRequest) {
    //Web Activities: Vulnerability 1
    var option = activityRequest.source;
    if(option.data.userdata.toString() === 'delete'){
      var del = window.document.getElementById("to-delete");
      del.innerHTML = '';
      addToOutput("web-activity-output", "uh-oh, unauthorized WebActivity deleted stuff");
    }
    if (option.name === "dvfa") {
      if(option.data.userdata.toString() === 'delete'){
	console.log("WebActivity Vuln 1: this is where we should've deleted");
      }
    }

    //WebActivities: Vulnerability 2
    //We are adding this 'listener' to help demonstrate potential information leaks
    if(option.data.userdata.toString() == 'info-leak'){
	addToOutput("web-activity-output", "uh-oh, we got this secret '" + option.data.secret.toString() + "'");
    }
  });
});
