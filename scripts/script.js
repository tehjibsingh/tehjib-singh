let modelName = "XYZ";
let duration = 0;
function recalculate() {
  let costLabel = document.getElementById("calculated-cost");
  let totalCost = 0;
  if (modelName === "XYZ") {
    totalCost = duration * 100;
  } else if (modelName === "CPRG") {
    totalCost = duration * 213;
  }
  costLabel.innerHTML = totalCost.toFixed(2);
}

let modelButton = document.getElementById("model-button");

function changeModel() {
  let modelText = document.getElementById("model-text");
  if (modelName === "XYZ") {
    modelName = "CPRG";
    modelText.innerHTML = "Model CPRG";
  } else if (modelName === "CPRG") {
    modelName = "XYZ";
    modelText.innerHTML = "Model XYZ";
  }
  recalculate();
}

modelButton.addEventListener("click", changeModel);

let durationButton = document.getElementById("duration-button");

function changeDuration() {
  let durationText = document.getElementById("duration-text");
  let newDuration = prompt("Please enter the number of days you want to book:",0);
  if (newDuration !== null && !isNaN(newDuration)) {
    duration = parseInt(newDuration);
    durationText.innerHTML = duration;
    recalculate();
  }
}

durationButton.addEventListener("click", changeDuration);