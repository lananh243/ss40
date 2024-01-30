let formElement = document.querySelector("#form");
let inputElement = document.querySelector("#inputValue");
let listPerson = JSON.parse(localStorage.getItem("peson")) || [];
let ulElement = document.querySelector("#listPerson");
console.log(listPerson);
function render(){
    let ulHtmls = listPerson.map(function(person){
        return `
        <li>
            <span>${person.name}</span>
        </li>
        `;
    })
    const ulHtml = ulHtmls.join("");
    ulElement.innerHTML = ulHtml;
    console.log(ulHtml);
}
function informationPerson(){
    if(!inputElement.value){
        alert("Tên không được bỏ trống");
    }else{
        const person = {
            name: inputElement.value,
        };
        listPerson.push(person);
        localStorage.setItem("person", JSON.stringify(listPerson));
        inputElement.value = "";
        render();
    }
}
formElement.addEventListener("submit", function(event) {
    event.preventDefault();
    informationPerson();
});

