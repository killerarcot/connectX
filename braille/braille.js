// Function to convert binary string to Braille dots
function convertBinaryToBraille() {
    let binaryInput = document.getElementById('binaryInput').value;
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

    // Generate Braille cells from binary chunks
    brailleCharacters.forEach(binaryChunk => {
        let brailleCell = createBrailleCell(binaryChunk);
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