// Select input field
let inputBox = document.getElementById("inputbox");

// Select input Btn
let addbtn = document.getElementById("addbtn");

// Select id where data will be display
let display = document.getElementById("list");
// Set a empty array
let emptyArray = [];

// All funtion will be here
function remove(e) {
  let item = e.target;
  let deleteditem = e.target.textContent;
  if (getLocal().includes(deleteditem)) {
    emptyArray = getLocal();
    let updatedTodo = emptyArray.filter((curTodo) => curTodo !== deleteditem);
    console.log(updatedTodo);
    addLocal(updatedTodo);
    item.style.textDecoration = "line-through";
    item.style.color = "red";
    setInterval(() => {
      item.style.display = "none";
    }, 2000);
    // console.log(emptyArray);
  }
}

const addLocal = (data) => {
  localStorage.setItem("todo", JSON.stringify(data));
};

const getLocal = () => {
  return JSON.parse((localData = localStorage.getItem("todo"))) || [];
};

const loadhtmlTodo = () => {
  emptyArray = getLocal();
  let inputData = inputBox.value.trim();
  if (inputData.length !== 0) {
    emptyArray.push(inputData);

    if (getLocal().length !== 0) {
      if (!getLocal().includes(inputData)) {
        addLocal(emptyArray);
        const li = document.createElement("li");
        li.innerText = inputData;
        display.append(li);
        inputBox.value = "";
      } else {
        document.getElementById("error").innerText =
          inputData + " already added";
      }
    } else {
      addLocal(emptyArray);
      const li = document.createElement("li");
      li.innerText = inputData;
      display.append(li);
      inputBox.value = "";
    }
  } else {
    alert("Empty todo not allow");
  }
};

// Code here
addbtn.addEventListener("click", (e) => {
  loadhtmlTodo();
});
const item = getLocal();

item.forEach((element) => {
  const li = document.createElement("li");
  li.innerText = element;
  display.append(li);
});
display.addEventListener("click", (e) => {
  remove(e);
});
