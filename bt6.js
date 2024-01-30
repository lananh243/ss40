document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var birthday = document.getElementById("birthday").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var phone = document.getElementById("phone").value;

    var user = {
      name: name,
      birthday: birthday,
      email: email,
      phone: phone,
      password: password,
    };
    var flag = false;
    if (name !== "" && birthday !== "" && email !== "" && password !== "" && phone !== "") {
        flag = true;
      }
    if(flag){
        var users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(user);

        sessionStorage.setItem("users", JSON.stringify(users));

        alert("Đăng ký thành công!");
        document.getElementById("form").reset();
    }else{
        alert("Đăng kí thất bại !!");
    }
    
});