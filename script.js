var input = document.getElementById("input");
var submit = document.getElementById("submit");
var toDoItems = document.getElementsByClassName("to-do-items")[0];
var searchBox = document.querySelector(".searchbox");
// var nameArray = [document.querySelector(".l-s span").innerHTML];
var tapSound = new Audio("tap.wav");
let checkBtnArray = [];
// input.addEventListener("click", function (event) {
//   if(event.key === "Enter")
// });
let EmptyText = document.createElement("p");
EmptyText.className = "empty-text";
EmptyText.innerHTML = "No Notes Are Available to show";
toDoItems.appendChild(EmptyText);
toDoItems.classList.add("NoNotes");
// if (toDoItems.innerHTML == "") {
// toDoItems.innerHTML = "No Notes Are Available to show";
// }
// console.log(toDoItems);
function additem() {
  tapSound.play();
  // console.log(toDoItems.innerHTML);
  if (
    toDoItems.innerHTML ==
    '<p class="empty-text">No Notes Are Available to show</p>'
  ) {
    toDoItems.classList.remove("NoNotes");
    toDoItems.removeChild(EmptyText);
    console.log(EmptyText);
  }
  var parentDiv = document.createElement("div");
  parentDiv.className = "item";

  var divChild1 = document.createElement("div");
  divChild1.className = "left-side";
  divChild1.innerHTML = input.value;
  parentDiv.appendChild(divChild1);

  var divChild2 = document.createElement("div");
  divChild2.className = "right-side";
  parentDiv.appendChild(divChild2);

  var checkIcon = document.createElement("i");
  checkIcon.className = "fas fa-check-square";
  divChild2.appendChild(checkIcon);
  checkIcon.addEventListener("click", function () {
    checkIcon.style.color = "green";
    tapSound.play();
  });

  var trashIcon = document.createElement("i");
  trashIcon.className = "fa fa-trash";
  divChild2.appendChild(trashIcon);
  trashIcon.addEventListener("click", function () {
    checkBtnArray.pop(checkIcon);
    tapSound.play();
    var confirm_delete = true;
    if (confirm_delete == true) {
      parentDiv.remove();
      if (toDoItems.innerHTML == "") {
        toDoItems.classList.add("NoNotes");
        toDoItems.appendChild(EmptyText);
      }
    }
  });

  input.value = "";
  toDoItems.appendChild(parentDiv);
}

submit.addEventListener("click", function () {
  var inputValue = input.value;
  inputValue = inputValue.trim();
  // console.log(inputValue);
  if (inputValue == "") {
  } else {
    additem();
  }
});

// var item_made = document.querySelector(".item-made");
// var right_side = document.querySelector(".r-s");
// var left_side = document.querySelector(".l-s");
// var trash_box = document.querySelector(".trash");
// var check = document.querySelector(".check");

// check.addEventListener("click", function () {
//   check.classList.add("checked");
//   check.classList.remove("hover");
//   tapSound.play();
// });
// trash_box.addEventListener("click", function () {
//   var confirm_delete = confirm("confirm before deleting");
//   if (confirm_delete == true) {
//     item_made.classList.add("removed");
//   } else {
//   }
//   tapSound.play();
// });

// let searchValues = [];
// searchBox.addEventListener("input", function (value) {
//   searchValues.push(value);
// searchValues.forEach((element) => {
//   if (element == " ") {
//     console.log("don't add empty");
//   }
// });
// for (i = 0; i <= searchValues.length - 1; i++) {
//   searchValues.push(searchBox.value);
//   console.log(searchValues);
// }
// nameArray.forEach((element) => {
//   for (i = 0; i <= element.length; i++) {
//   }
// });
// });
