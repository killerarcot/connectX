function convertText() {
    const inputText = document.getElementById("inputText").value;
    const binaryText = textToBraille(inputText);
    document.getElementById("binaryOutput").innerHTML = binaryText;
  }
  
  function textToBraille(inputText) {
      return inputText.toLowerCase().split("").map(letter => {
        return brailleAlphabet[letter] || "";
      }).join(" ");
    }