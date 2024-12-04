const brailleAlphabet = {
    "a": "100000",
    "b": "101000",
    "c": "110000",
    "d": "110100",
    "e": "100100",
    "f": "111000",
    "g": "111100",
    "h": "101100",
    "i": "011000",
    "j": "011100",
    "k": "100010",
    "l": "101010",
    "m": "110010",
    "n": "110110",
    "o": "100110",
    "p": "111010",
    "q": "111110",
    "r": "101110",
    "s": "011010",
    "t": "011110",
    "u": "100011",
    "v": "101011",
    "w": "011101",
    "x": "110011",
    "y": "110111",
    "z": "100111",
    " ": "000000"  // Space
  };
  
  function textToBraille(inputText) {
    return inputText.toLowerCase().split("").map(letter => {
      return brailleAlphabet[letter] || "";
    }).join(" ");
  }


  // Function to convert binary string to Braille dots
  function convertBinaryToBraille() {
    let binaryOutputElement = document.getElementById('binaryOutput');

    // Adjust based on whether binaryOutput is an input or display element
    let binaryInput = binaryOutputElement.tagName === 'INPUT' || binaryOutputElement.tagName === 'TEXTAREA'
        ? binaryOutputElement.value
        : binaryOutputElement.textContent;

    console.log(binaryInput);
    binaryInput = binaryInput.replace(/\s+/g, '');

    console.log(binaryInput);    // Log the binary input to debug

    let brailleOutput = document.getElementById('brailleOutput');
    
    // Clear any previous output
    brailleOutput.innerHTML = '';

    // Validate input (only allow binary digits)
    if (!/^[01]+$/.test(binaryInput)) {
        alert('Please enter a valid binary code (only 0s and 1s)');
        return;
    }

    // Divide binary input into 6-bit chunks (Braille character size)
    let brailleCharacters = chunkBinary(binaryInput, 6);
    console.log("CHUNKS:",brailleCharacters)

    // Generate Braille cells from binary chunks
    brailleCharacters.forEach(binaryChunk => {
        let brailleCell = createBrailleCell(binaryChunk);
        console.log("cell:",brailleCell)
        brailleOutput.appendChild(brailleCell);
    });
}


// Function to chunk binary input into 6 bits
function chunkBinary(binaryString, size) {
    let result = [];
    for (let i = 0; i < binaryString.length; i += size) {
        result.push(binaryString.substring(i, i + size));
    }
    return result;
}

// Function to create a Braille cell (6 dots) from a 6-bit binary string
function createBrailleCell(binaryChunk) {
    let brailleCell = document.createElement('div');
    brailleCell.classList.add('braille-cell');

    for (let i = 0; i < 6; i++) {
        let dot = document.createElement('div');
        dot.classList.add('braille-dot');
        
        // Turn on the dot if the corresponding binary bit is '1'
        if (binaryChunk[i] === '1') {
            dot.classList.add('on');
        }
        
        brailleCell.appendChild(dot);
    }

    return brailleCell;
}