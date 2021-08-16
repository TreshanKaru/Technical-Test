function hideShow() {
  event.preventDefault();
  var wrapperOne = document.getElementById("login-wrapper");
  var wrapperTwo = document.getElementById("register-wrapper");
  if (wrapperOne.style.display === "none") {
    wrapperOne.style.display = "block";
    wrapperTwo.style.display = "none";
  } else {
    wrapperOne.style.display = "none";
    wrapperTwo.style.display = "block";
  }
}