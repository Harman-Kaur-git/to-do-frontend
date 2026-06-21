let isEdit = false;
let childToModify = null;
let editT;
let editD;
let updatedT;
let updatedD;
let deletT;
let deletD;
let mytasks = [];
let saveB = localStorage.getItem("mytasks");
if (saveB != null) {
  mytasks = JSON.parse(saveB);
}

var myDiv = makeDiv();
document.body.appendChild(myDiv);
function makeDiv() {
  let myDiv = document.createElement("div");
  myDiv.style.width = "1200px";
  myDiv.style.border = "1px solid white";
  myDiv.style.marginLeft = "150px";
  myDiv.style.marginRight = "100px";
  myDiv.style.marginTop = "40px";
  myDiv.style.display = "flex";
  myDiv.style.borderRadius = "5px";
  return myDiv;
}
let idiv1 = innerDiv1();
myDiv.appendChild(idiv1);
function innerDiv1() {
  let idiv1 = document.createElement("div");
  idiv1.style.width = "500px";
  idiv1.style.border = "5px solid black";
  idiv1.style.backgroundColor = "white";
  idiv1.style.marginTop = "30px";
  idiv1.style.marginLeft = "60px";
  idiv1.style.backgroundColor = "#F0E4D3";
  return idiv1;
}
idiv2 = innerDiv2();
myDiv.appendChild(idiv2);
function innerDiv2() {
  let idiv2 = document.createElement("div");
  idiv2.style.width = "500px";
  idiv2.style.border = "5px solid black";
  idiv2.style.backgroundColor = "white";
  idiv2.style.marginTop = "30px";
  idiv2.style.marginLeft = "60px";
  idiv2.style.backgroundColor = "#F0E4D3";
  return idiv2;
}
var button = makeBt();
idiv1.appendChild(button);
function makeBt() {
  let myBt = document.createElement("button");
  myBt.innerText = "Add";
  myBt.style.width = "150px";
  myBt.style.height = "70px";
  myBt.style.marginLeft = "30px";
  myBt.style.marginTop = "20px";
  myBt.style.borderRadius = "5px";
  myBt.style.marginBottom = "7px";
  myBt.onclick = () => {
    form.style.display = "block";
  };
  return myBt;
}
function makeForm() {
  let form = document.createElement("div");
  form.style.width = "400px";
  form.style.height = "450px";
  form.style.border = "3.5px solid black";
  form.style.marginLeft = "40px";
  form.style.marginTop = "20px";
  form.style.marginBottom = "15px";
  form.style.backgroundColor = "black";
  form.style.display = "none";
  form.id = "form";
  return form;
}
let form = makeForm();
idiv1.appendChild(form);
function makeTBox() {
  let tbox = document.createElement("input");
  tbox.type = "text";
  tbox.placeholder = "Title";
  tbox.style.backgroundColor = "white";
  tbox.style.width = "380px";
  tbox.style.height = "100px";
  tbox.style.marginLeft = "10px";
  tbox.style.marginTop = "20px";
  tbox.style.paddingLeft = "150px";
  tbox.style.fontSize = "30px";
  tbox.id = "t1";

  return tbox;
}

var tbox = makeTBox();
form.appendChild(tbox);
function makeDes() {
  let des = document.createElement("input");
  des.type = "textarea";
  des.placeholder = "Description";
  des.style.backgroundColor = "white";
  des.style.width = "380px";
  des.style.height = "100px";
  des.style.marginLeft = "10px";
  des.style.marginTop = "20px";
  des.style.paddingLeft = "110px";
  des.style.fontSize = "30px";
  des.id = "d1";
  return des;
}
var des = makeDes();
form.appendChild(des);
function resetT() {
  tbox.value = "";
}
function resetD() {
  des.value = "";
}
function saveToStorage(t, d) {
  let task = {
    title: t,
    description: d,
  };
  mytasks.push(task);
  localStorage.setItem("mytasks", JSON.stringify(mytasks));
}
function editb() {
  let edit = document.createElement("button");
  edit.style.borderRadius = "50px";
  edit.style.border = "2px solid green";
  edit.style.backgroundColor = "rgba(120, 200, 65, 0.5)";
  edit.style.fontSize = "15px";
  edit.innerText = "Edit";
  edit.style.color = "black";
  edit.id = "e";
  edit.style.marginBottom = "5px";
  edit.onclick = function () {
    document.getElementById("form").style.display = "block";
    document.getElementById("b1").innerText = "update";
    editT = this.parentElement.childNodes[0].innerText;
    editD = this.parentElement.childNodes[2].textContent;
    document.getElementById("t1").value = editT;
    document.getElementById("d1").value = editD;
    isEdit = true;
    childToModify = this.parentElement;
  };

  return edit;
}
function del() {
  let delb = document.createElement("button");
  delb.style.borderRadius = "50px";
  delb.style.border = "2px solid red";
  delb.style.backgroundColor = "rgba(251, 65, 65, 0.5)";
  delb.style.fontSize = "15px";
  delb.innerText = "Delete";
  delb.style.color = "black";
  delb.style.marginLeft = "10px";
  delb.style.marginBottom = "5px";
  delb.onclick = function () {
    let delet = this.parentElement;
    deletT = delet.childNodes[0].innerText;
    deletD = delet.childNodes[0].textContent;
    delet.remove();
    removeFromStorage(deletT, deletD);
  };
  return delb;
}
let newtask = [];
function removeFromStorage(deletT, deletD) {
  for (i = 0; i < mytasks.length; i++) {
    if (mytasks[i].title != deletT && mytasks[i].description != deletD) {
      newtask.push(mytasks[i]);
    }
  }
  localStorage.setItem("mytasks", JSON.stringify(newtask));
  mytasks = newtask;
}

function final(t, d) {
  let ot = document.createElement("div");

  ot.innerHTML = "<b>" + t + "</b>" + "<br>" + d + "<br><br>";
  idiv2.appendChild(ot);
  ot.style.width = "410px";
  ot.style.display = "none";
  ot.style.border = "3px solid black";
  ot.style.backgroundColor = "white";
  ot.style.marginLeft = "30px";
  ot.style.marginTop = "20px";
  ot.style.marginBottom = "7px";
  ot.style.paddingLeft = "20px";
  ot.style.paddingTop = "10px";
  ot.style.paddingRight = "10px";
  ot.style.overflowWrap = "break-word";
  ot.style.fontFamily = "verdana";
  if (ot.innerText) {
    ot.style.display = "block";
    resetT();
    resetD();
  }
  let edit = editb();
  ot.appendChild(edit);

  let delb = del();
  ot.appendChild(delb);

  return ot;
}
for (i = 0; i < mytasks.length; i++) {
  let task = mytasks[i];
  final(task.title, task.description);
}
var button2 = makeBt2();
form.appendChild(button2);
function makeBt2() {
  let myBt2 = document.createElement("button");
  myBt2.innerText = "Add task";
  myBt2.style.width = "150px";
  myBt2.style.height = "70px";
  myBt2.style.marginLeft = "120px";
  myBt2.style.marginTop = "70px";
  myBt2.style.borderRadius = "45px";
  myBt2.style.backgroundColor = "#98A1BC";
  myBt2.id = "b1";
  myBt2.onclick = () => {
    if (isEdit == false) {
      let t = tbox.value.trim();
      let d = des.value.trim();
      if (t === "" && d === "") {
        alert("title and description cann not be empty");
        resetT();
        resetD();
      } else if (d === "") {
        alert("description can not be empty");
        resetT();
        resetD();
      } else {
        resetT();
        resetD();
        let details = final(t, d);

        form.style.display = "none";
        idiv2.appendChild(details);

        saveToStorage(t, d);
      }
    }
    if (isEdit == true) {
      updatedT = document.getElementById("form").childNodes[0].value;
      updatedD = document.getElementById("d1").value;
      resetT();
      resetD();
      document.getElementById("b1").innerText = "Add Task";
      document.getElementById("form").style.display = "none";
      childToModify.childNodes[0].innerHTML = "<b>" + updatedT + "</b>";
      childToModify.childNodes[2].textContent = updatedD;
      updateToStorage(updatedT, updatedD);
    }
  };
  return myBt2;
}
function updateToStorage(updatedT, updatedD) {
  for (i = 0; i < mytasks.length; i++) {
    if (mytasks[i].title === editT && mytasks[i].description === editD) {
      mytasks[i].title = updatedT;
      mytasks[i].description = updatedD;
    }
  }
  localStorage.setItem("mytasks", JSON.stringify(mytasks));
}
