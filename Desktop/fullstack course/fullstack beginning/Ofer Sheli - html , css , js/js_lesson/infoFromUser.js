window.onload = function () {
  declareViewEvents();
};

function checkLocal() {
  if (localStorage["user"]) {
    document.querySelector(
      "#id_h1"
    ).innerHTML = `Welcome ${localStorage["user"]} !`;
  }
}

function declareViewEvents() {
  let saveBtn = document.querySelector("#id_btn");
  saveBtn.addEventListener("click", function () {
    let inputVal = document.querySelector("#id_input").value;
    localStorage.setItem("user", inputVal);
    checkLocal();
  });
  let btn = document.createElement("button");
  btn.innerHTML = "btn";
  let p = document.querySelector("#id_body").appendChild(btn);
}
