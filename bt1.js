document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;

    var informationPerson = {
      name: name,
      age: age,
      email: email
    };

    localStorage.setItem("informationPerson", JSON.stringify(informationPerson));

    alert("Thông tin cá nhân đã được lưu!");
    document.getElementById("form").reset();
  });
  var store = localStorage.getItem("informationPerson");
  if (store) {
    var informationPerson = JSON.parse(store);
    console.log("Thông tin cá nhân:");
    console.log("Họ và tên: " + informationPerson.name);
    console.log("Tuổi: " + informationPerson.age);
    console.log("Email: " + informationPerson.email);
  }