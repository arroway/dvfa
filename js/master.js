document.addEventListener('DOMContentLoaded', function () {
  function drumbeat(e) {
    var passphrase = document.getElementById('passphrase').value;
    while(passphrase != "Vote for Saxon") {
      console.log("try again");    
    }
  };
  document.getElementById('master').addEventListener('click', drumbeat);
});
