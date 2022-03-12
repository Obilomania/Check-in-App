const checkInput = document.querySelector(".checkIn-input");
const checkButton = document.querySelector(".check");
const checkList = document.querySelector(".checkings");

checkButton.addEventListener("click", addcheckList);
checkList.addEventListener("click", deleteComplete);

function addcheckList(event) {
  event.preventDefault();

  const freshdiv = document.createElement("div");
  freshdiv.classList.add("checked");

  const newCheck = document.createElement("li");
  newCheck.innerText = checkInput.value;
  checkInput.value = "";
  newCheck.classList.add("check-item");
  freshdiv.appendChild(newCheck);

  const phrase = document.createElement("p");
  phrase.innerText = "Signed out At";
  phrase.classList.add("phrase");
  freshdiv.appendChild(phrase);

  const time = new Date().toLocaleString();
  freshdiv.append(time);

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  deleteButton.classList.add("trash-btn");
  freshdiv.appendChild(deleteButton);

  checkList.appendChild(freshdiv);
  console.log("done");
}
function deleteComplete(e) {
  const item = e.target;

  if (item.classList[0] === "trash-btn") {
    const checked = item.parentElement;
    checked.remove();
  }
  if (item.classList[0] === "complete-btn") {
    const checked = item.parentElement;
    checked.classList.toggle("completed");
  }
}
