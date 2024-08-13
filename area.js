function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width="0";
}
function changeShape() {
    var shape = document.getElementById('shape').value;
    var shapes = document.getElementsByClassName('shape');
    
    for (var i = 0; i < shapes.length; i++) {
      shapes[i].style.display = 'none';
    }
    
    document.getElementById(shape).style.display = 'block';
  }
  
  function calculateRectangleArea() {
    var length = parseFloat(document.getElementById('rectLength').value);
    var width = parseFloat(document.getElementById('rectWidth').value);
    
    if (isNaN(length) || isNaN(width)) {
      document.getElementById('rectResult').innerHTML = "Please enter valid numbers.";
      return;
    }
    
    var area = length * width;
    document.getElementById('rectResult1').innerHTML = "The area is: " + area;
  }
  
  function calculateTriangleArea() {
    var base = parseFloat(document.getElementById('triBase').value);
    var height = parseFloat(document.getElementById('triHeight').value);
    
    if (isNaN(base) || isNaN(height)) {
      document.getElementById('triResult').innerHTML = "Please enter valid numbers.";
      return;
    }
    
    var area = (base * height) / 2;
    document.getElementById('triResult1').innerHTML = "The area is: " + area;
  }
  
  function calculateTrapezoidArea() {
    var topLength = parseFloat(document.getElementById('trapTop').value);
    var bottomLength = parseFloat(document.getElementById('trapBottom').value);
    var height = parseFloat(document.getElementById('trapHeight').value);
    
    if (isNaN(topLength) || isNaN(bottomLength) || isNaN(height)) {
      document.getElementById('trapResult').innerHTML = "Please enter valid numbers.";
      return;
    }
    else{
    var area = ((topLength + bottomLength) * height) / 2;
    document.getElementById('trapResult1').innerHTML = "The area is: " + area;
    }
  }
  
  function calculateCircleArea() {
    var radius = parseFloat(document.getElementById('circleRadius').value);
    
    if (isNaN(radius)) {
      document.getElementById('circleResult').innerHTML = "Please enter a valid number.";
      return;
    }
    
    var area = Math.PI * Math.pow(radius, 2);
    document.getElementById('circleResult1').innerHTML = "The area is: " + area.toFixed(2);
  }
  
  function calculateSectorArea() {
    var radius = parseFloat(document.getElementById('sectorRadius').value);
    var angle = parseFloat(document.getElementById('sectorAngle').value);
    
    if (isNaN(radius) || isNaN(angle)) {
      document.getElementById('sectorResult').innerHTML = "Please enter valid numbers.";
      return;
    }
    
    var area = (Math.PI * Math.pow(radius, 2) * angle) / 360;
    document.getElementById('sectorResult1').innerHTML = "The area is: " + area.toFixed(2);
  }
  
  function calculateEllipseArea() {
    var majorAxis = parseFloat(document.getElementById('ellipseMajor').value);
    var minorAxis = parseFloat(document.getElementById('ellipseMinor').value);
    
    if (isNaN(majorAxis) || isNaN(minorAxis)) {
      document.getElementById('ellipseResult').innerHTML = "Please enter valid numbers.";
      return;
    }
    
    var area = Math.PI * majorAxis * minorAxis;
    document.getElementById('ellipseResult1').innerHTML = "The area is: " + area.toFixed(2);
  }
  
  function calculateParallelogramArea() {
    var base = parseFloat(document.getElementById('paraBase').value);
    var height = parseFloat(document.getElementById('paraHeight').value);
    
    if (isNaN(base) || isNaN(height)) {
      document.getElementById('paraResult').innerHTML = "Please enter valid numbers.";
      return;
    }
    
    var area = base * height;
    document.getElementById('paraResult1').innerHTML = "The area is: " + area;
  }
  