// Save this script as `options.js`
// Saves options to localStorage.
function save_options() {

  var client_id = document.getElementById("client_id").value.toString();
  localStorage["client_id"] = client_id+"";
  var secret = document.getElementById("secret").value.toString();
  localStorage["secret"] = secret+"";

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 950);
}

document.querySelector('#save').addEventListener('click', save_options);