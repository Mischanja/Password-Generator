//PASSWORD GENERATOR

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


function generatePw() {
    
    let passwordOne = document.getElementById('Pw-1-Btn')
    let passwordTwo = document.getElementById('Pw-2-Btn')
    
    passwordOne.textContent = ''
    passwordTwo.textContent = ''
    
    for (let i = 0; i < 15; i++) {
    let randomIndexOne = Math.floor(Math.random()*characters.length)
    let randomIndexTwo = Math.floor(Math.random()*characters.length)
    
    passwordOne.textContent += characters[randomIndexOne]
    passwordTwo.textContent += characters[randomIndexTwo]
    }
    
     // Attach click event listeners for copying to clipboard
    passwordOne.addEventListener('click', function() {
        copyToClipboard(this.textContent);
    });
    passwordTwo.addEventListener('click', function() {
        copyToClipboard(this.textContent);
    });
}

    // Copy to clipboard function
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text)
            .then(() => alert('Password copied to clipboard'))
            .catch(err => console.error('Failed to copy text to clipboard. Error: ', err.toString()));
}


generatePw()

//THEME TOGGLE

document.getElementById('toggle').addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
});

