document.addEventListener('DOMContentLoaded', function () {
  function getDoctors(e) {
    var contacts = window.navigator.mozContacts.getAll({});
    window.document.getElementById('output').innerHTML = '';

    contacts.onsuccess = function(event) {
      var cursor = event.target;
      if (cursor.result) {
        var id = cursor.result.id;
	      var givenName = cursor.result.givenName;
	      var familyName = cursor.result.familyName;
	      var output = window.document.getElementById('output');
	      var p = document.createElement('p');
	      p.textContent = "ID:" + id.toString() + " with givenName:" + givenName.toString() + " and familyName:" + familyName.toString() + ".";
	      p.className = 'mini';
	      output.appendChild(p);
	      cursor.continue();
      }
    }

    contacts.onerror = function() {
      console.warn("error getting doctors");
    }

  }

  function addDoctor(e) {
    window.document.getElementById('output').innerHTML = '';
    var person = new mozContact();
    person.givenName  = ["Doctor"];
    person.familyName = ["Who"];
    var saving = navigator.mozContacts.save(person);

    saving.onsuccess = function() {
      var output = window.document.getElementById('output');
      var p = document.createElement('p');
      p.textContent = "New doctor created with givenName:Doctor and familyName:Who";
      p.className = 'mini';
      output.appendChild(p);
    };

    saving.onerror = function(err) {
      console.error('new contact NOT saved');
    };
  }

  function deleteDoctors(e) {
    window.document.getElementById('output').innerHTML = '';
    var deleted = navigator.mozContacts.clear();
    deleted.onsuccess = function() {
      var output = window.document.getElementById('output');
      var p = document.createElement('p');
      p.textContent = "ALL doctors deleted O_O";
      p.className = 'mini';
      output.appendChild(p);
    }
  }

  document.getElementById('doctors').addEventListener('click', getDoctors);
  document.getElementById('add-doctor').addEventListener('click', addDoctor);
  document.getElementById('delete-doctor').addEventListener('click', deleteDoctors);
});
