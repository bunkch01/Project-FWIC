analysisFunc = function() {
inputText = document.getElementById("textSource").value;
parameter = document.getElementById("parameterText").value;
outputText = document.getElementById("textOutput");
outputText.innerHTML = inputText;
analysis = document.getElementById("dataOutput");
analysisRes = input.match(/parameter/g);
analysis.innerHTML = analysisRes;
}
