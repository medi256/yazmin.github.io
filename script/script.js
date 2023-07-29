// Catch message
const btn = document.querySelector("button");
let textInput = document.getElementById("text-input");

textInput.addEventListener("input", () => {
  let textInputValue = textInput.value;
  let inputLength = textInputValue.length;

  //Check the length of the input in the textarea and render accordingly
  try {
    if (inputLength < 5) {
      btn.disabled = true;
      btn.style.color = "grey";
      btn.style.background = "#5d5a5a";
      btn.addEventListener("mouseover", () => {
        btn.style.background = "#5d5a5a";
      });
    } else {
      btn.disabled = false;
      btn.style.color = "#000000";
      btn.style.background = "#00c9c8";
      btn.addEventListener("mouseover", () => {
        btn.style.background = "#bffcf9";
      });
    }
  } catch (error) {
    console.error(error.message);
  }
});

// Outprint message
function outPrintMsg() {
  let outPutContainer = document.getElementById("output-container");
  outPutContainer.innerText = textInput.value;
}
