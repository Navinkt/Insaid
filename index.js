// This function is called when the form is submitted.
function submitForm() {
  // Get the values from the form.
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  // Create a new XMLHttpRequest object.
  var xhr = new XMLHttpRequest();

  // Set the request method and the request URL.
  xhr.open("POST", "contact.php");

  // Set the request headers.
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  // Send the request data.
  xhr.send("name=" + name + "&email=" + email + "&phone=" + phone + "&message=" + message);

  // Handle the response.
  xhr.onload = function() {
    if (xhr.status === 200) {
      // The request was successful.
      alert("Your message has been sent!");
    } else {
      // The request failed.
      alert("An error occurred. Please try again later.");
    }
  };
}
