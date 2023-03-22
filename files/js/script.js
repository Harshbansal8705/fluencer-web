let elems = document.getElementsByClassName("circle");
let len = elems.length;
let i = 0;
for (var elem of elems) {
  elem.style.transform = `rotate(${i*360/len}deg)`;
  i++;
}