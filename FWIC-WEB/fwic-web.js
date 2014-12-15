analysisFunc = function() {
input = document.getElementById("textSource").value;
parameter = document.getElementById("parameterText").value;
output = document.getElementById("textOutput");
output.innerHTML = input;
analysis = document.getElementById("dataOutput");
analysisRes = input.match(/parameter/g);
analysis.innerHTML = analysisRes;
}
