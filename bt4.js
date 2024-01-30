let todoListJob = [
    {
        id: 1,
        content: "Kế toán",
        status: false,
    },
    {
        id: 2,
        content: "Marketing",
        status: true,
    },
    {
        id: 3,
        content: "Giáo viên",
        status: false,
    },
];
const userJson = JSON.stringify(todoListJob);
for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    console.log(key + ": " + value);
  }
