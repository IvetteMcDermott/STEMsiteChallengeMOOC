function getUser() {
    let name = sessionStorage.getItem("userLogged");
    document.getElementById("userlog").innerHTML = name;
  }
  getUser();
