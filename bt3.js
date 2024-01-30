let todoListPerson = [
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 3,
    },
];
let personLocal = JSON.stringify(todoListPerson);
console.log("Dữ liệu JSON", todoListPerson);
let input = localStorage.setItem("todoListPerson", JSON.stringify(todoListPerson));

function deleteItemsById(items, id) {
    var deletedItems = [];
    for (var i = items.length - 1; i >= 0; i--) {
        if (items[i].id == id) {
            deletedItems.push(items.splice(i, 1)[0]);
        }
    }
    return deletedItems;
}

function deletePlayer() {
    let inputValue = document.querySelector("#inputValue").value;
    var deletedItems = deleteItemsById(todoListPerson, inputValue);

    if (deletedItems.length > 0) {
        alert("Đã xóa " + deletedItems.length + " phần tử có ID: " + inputValue);
    } else {
        alert("Không tìm thấy phần tử có ID: " + inputValue);
    }
    
}