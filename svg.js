var svg = document.getElementById("pic");

var lastX = -1;
var lastY = -1;

svg.addEventListener("click", function() {
  var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", event.offsetX);
  circle.setAttribute("cy", event.offsetY);
  circle.setAttribute("r", "10");
  svg.appendChild(circle);

  if (lastX != -1 && lastY != -1) {
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", lastX);
    line.setAttribute("y1", lastY);
    line.setAttribute("x2", event.offsetX);
    line.setAttribute("y2", event.offsetY);
    line.setAttribute("stroke", "black");
    svg.appendChild(line);
  }

  lastX = event.offsetX;
  lastY = event.offsetY;
});

var clear = document.getElementById("clear");

clear.addEventListener("click", function() {
  svg.innerHTML = "";
  lastX = -1;
  lastY = -1;
});
