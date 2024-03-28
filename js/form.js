function sendMail() {
  let parameters = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  if (
    name.value == "" ||
    email.value == "" ||
    phone.value == "" ||
    subject.value == "" ||
    message.value == ""
  ) {
    alert("Please fill in all required fields");
  } else {
    emailjs
      .send("service_9gr220l", "template_cubbfus", parameters)
      .then(alert("Email Sent!"));
  }
}
