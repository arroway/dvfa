document.addEventListener('DOMContentLoaded', function () {
  function drumbeat(e) {
    console.log('Ruh-roh, we are going kaboom...');
    var passphrase = document.getElementById('passphrase').value;
    var re = new Regexp('Vote for Saxon');
    while(!re.test(passphrase)) {
      console.log("try again");    
    };
    }
  }

  document.getElementById('master').addEventListener('click', drumbeat);
});
