const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let passwordOneEl = document.getElementById("password-one-el")
let passwordTwoEl = document.getElementById("password-two-el")

function getPasswords() {
    passwordOneEl.textContent = ""
    passwordTwoEl.textContent = ""
    
    for (let i = 0; i <= 15; i++) {
        let char1 = Math.floor( Math.random() * characters.length )
        let char2 = Math.floor( Math.random() * characters.length )
        passwordOneEl.textContent += characters[char1]
        passwordTwoEl.textContent += characters[char2]
    }
}
