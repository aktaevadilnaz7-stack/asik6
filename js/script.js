console.log("Name: Aktaeva Dilnaz");
console.log("Group: DJ-2503");

alert("Hello, JavaScript World!");

let studentName = "Dilnaz";
let groupNumber = 2503;
let isStudent = true;

console.log(groupNumber + 100);
console.log(groupNumber - 50);
console.log("Student: " + studentName + " from group " + groupNumber);

const infoText = document.getElementById("info-text");
const changeTextBtn = document.getElementById("changeTextBtn");

changeTextBtn.addEventListener("click", () => {
    infoText.textContent = "The content has been updated by Dilnaz!";
});

const styleBox = document.getElementById("styleBox");
const changeBgBtn = document.getElementById("changeBgBtn");
const changeSizeBtn = document.getElementById("changeSizeBtn");

changeBgBtn.addEventListener("click", () => {
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    styleBox.style.backgroundColor = randomColor;
});

changeSizeBtn.addEventListener("click", () => {
    styleBox.style.fontSize = "24px";
    styleBox.style.fontWeight = "bold";
});

const itemList = document.getElementById("itemList");
const addItemBtn = document.getElementById("addItemBtn");
const removeItemBtn = document.getElementById("removeItemBtn");

addItemBtn.addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.textContent = "New Aesthetic Item";
    itemList.appendChild(newItem);
});

removeItemBtn.addEventListener("click", () => {
    const lastItem = itemList.lastElementChild;
    if (lastItem) {
        itemList.removeChild(lastItem);
    }
});