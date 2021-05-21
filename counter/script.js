function getNum() {
  return parseInt(document.getElementsByClassName("num")[0].innerHTML);
}
function setNum(n) {
  document.getElementsByClassName("num")[0].innerHTML = n;
}
function minus() {
  let n = getNum();
  setNum(n - 1);
}
function plus() {
  let n = getNum();
  setNum(n + 1);
}
function reset() {
  let n = getNum();
  setNum(0);
}
