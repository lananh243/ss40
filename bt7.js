let formElement = document.querySelector("#form");
let inputElement = document.querySelector("#inputValue");
let listPerson = JSON.parse(localStorage.getItem("persons")) || [];
let ulElement = document.querySelector("#listPerson");
console.log(listPerson);
function render() {
let ulHtmls = listPerson.map(function(person){
        return `
            <span>${person.name}</span>
        `;
})
const ulHtml = ulHtmls.join("");
ulElement.innerHTML = ulHtml;
console.log(ulHtml);
}
function addPerson() {
    const newPerson = {
        name: inputElement.value,
    };
    listPerson.push(newPerson)
    localStorage.setItem("persons", JSON.stringify(listPerson));
    inputElement.value = "";
    render();
}

function deletePersons() {
    localStorage.clear();
    listPerson = [];
    render();
}

formElement.addEventListener("submit", function(event) {
    event.preventDefault();
    addPerson();
    button.style.display = "none";
    
    
});

document.getElementById("btn").addEventListener("click", function() {
    localStorage.removeItem("persons");
    deletePersons();
});