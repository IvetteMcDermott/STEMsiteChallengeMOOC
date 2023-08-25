
// Form message when there is an error

function setFormMessage(formElement, type, message) {
  const messageElement = formElement.querySelector(".form__message");

  messageElement.textContent = message;
  messageElement.classList.remove(
    "form__message--success",
    "form__message--error"
  );
  messageElement.classList.add(`form__message--${type}`);
}

// Form input message validation

function setInputError(inputElement, message) {
  inputElement.classList.add("form__input--error");
  inputElement.parentElement.querySelector(
    ".form__input-error-message"
  ).textContent = message;
}

// Form input validation messages

function clearInputError(inputElement) {
  inputElement.classList.remove("form__input--error");
  inputElement.parentElement.querySelector(
    ".form__input-error-message"
  ).textContent = "";
}

//
// Check if user exists, and password is correct
async function checkUser() {
  // variables to be use
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const apiUrl = "https://sheetdb.io/api/v1/vork6otnlryk0"; // SheetDB.io API URL
  const loginForm = document.querySelector("#sheetdb-form-signin");

  sessionStorage.setItem("userLogged", username);

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    // if use the data.some the user type wont be read but with data.find does
    const userExists = data.find(
      (user) => (user.uname === username) & (user.psw === password)
    );

    const resultElement = document.getElementById("result");
    if (userExists) {
      // get the usertype from the element user
      const utype = userExists.usertype;
      // open the html in the same window according to the type of user else will give a message
      if (utype === "teacher") {
        window.open("templates/teacher.html", "_self");
      } else if (utype === "student") {
        window.open("templates/student.html", "_self");
      } else if (utype === "parent") {
        window.open("templates/parent.html", "_self");
      }
    } else {
      resultElement.textContent = "";
      setFormMessage(
        loginForm,
        "error",
        "Invalid username/password combination"
      );
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

//
// Hide and show forms according to the link click
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#sheetdb-form-signin");
  const createAccountForm = document.querySelector("#sheetdb-form-signup");

  document
    .querySelector("#linkCreateAccount")
    .addEventListener("click", (e) => {
      e.preventDefault();
      loginForm.classList.add("form--hidden");
      createAccountForm.classList.remove("form--hidden");
    });

  document.querySelector("#linkLogin").addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.remove("form--hidden");
    createAccountForm.classList.add("form--hidden");
  });

  document.querySelector("#btnLogIn").addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.remove("form--hidden");
    createAccountForm.classList.add("form--hidden");
  });

  document.querySelector("#btnSignUp").addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.add("form--hidden");
    createAccountForm.classList.remove("form--hidden");
  });

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    checkUser();
  });

  document.querySelectorAll(".form__input").forEach((inputElement) => {
    inputElement.addEventListener("blur", (e) => {
      if (
        e.target.id === "signupUsername" &&
        e.target.value.length > 0 &&
        e.target.value.length < 10
      ) {
        setInputError(
          inputElement,
          "Username must be at least 10 characters in length"
        );
      }
    });

    inputElement.addEventListener("input", (e) => {
      clearInputError(inputElement);
    });
  });
});


// Check if email had been used already
async function validate_email() {
  // variables to be use
  const mail = document.getElementById("email").value;
  const apiUrl = "https://sheetdb.io/api/v1/vork6otnlryk0"; // SheetDB.io API URL

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    // if use the data.some the user type wont be read but with data.find does
    const userE = data.find(
      (user) => (user.email === mail) );

    const resultElement = document.getElementById("result");
    if (userE) {
      resultElement.textContent = "";
      let inputElement = document.getElementById("email")
      setInputError(
        inputElement,
        "Email already in the db"
      );
      document.getElementById("sub_button").disabled = true;
      document.getElementById("sub_button").style.opacity = 0.4;
    } else {
      document.getElementById("sub_button").disabled = false;
      document.getElementById("sub_button").style.opacity = 1;

    }
  } catch (error) {
    console.error("Error:", error);
  }
}

// https://www.geeksforgeeks.org/how-to-validate-confirm-password-using-javascript/
function validate_password() {
  const createAccountForm = document.querySelector("#sheetdb-form-signup");

  var pass = document.getElementById("pass").value;
  var confirm_pass = document.getElementById("confirm_pass").value;
  if (pass != confirm_pass) {
    setFormMessage(
      createAccountForm,
      "error",
      "☒ The password and the confirmation has to match"
    );
    document.getElementById("sub_button").disabled = true;
    document.getElementById("sub_button").style.opacity = 0.4;
  } else {
    //     document.getElementById('wrong_pass_alert').style.color = 'green';
    //     document.getElementById('wrong_pass_alert').innerHTML =
    //         '🗹 Password Matched';
    setFormMessage(createAccountForm, "", "");

    document.getElementById("sub_button").disabled = false;
    document.getElementById("sub_button").style.opacity = 1;
    // }

    // Post and save the data in the googlesheet
    var form = document.getElementById("sheetdb-form-signup");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      fetch(form.action, {
        method: "POST",
        body: new FormData(document.getElementById("sheetdb-form-signup")),
      })
        // .then(
        //     response => response.json()
        // )
        .then((html) => {
          window.open("templates/welcome.html", "_self");
        });
    });
  }
}

//
