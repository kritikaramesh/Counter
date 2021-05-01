let num = 0;

function inc() {
  num += 1;
  document.querySelector(".num").innerHTML = num;
  if (num >= 0) {
    document.querySelector(".num").style.color = "green";
  }
  else {
    document.querySelector(".num").style.color = "red";
  }
}

function dec() {
  num -= 1;
  document.querySelector(".num").innerHTML = num;
  if (num >= 0) {
    document.querySelector(".num").style.color = "green";
  }
  else {
    document.querySelector(".num").style.color = "red";
  }
}
