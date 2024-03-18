// when the mouse movement ends, change the background of the body to a random color in vanilla javascript
document.body.addEventListener("mousemove", function () {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
