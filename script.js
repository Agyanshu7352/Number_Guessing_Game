
const randomNumber = Math.floor(Math.random() * 100) + 1;
let user=document.querySelector("#num");

function checkGuess() {
    const userGuess = Number(document.getElementById('num').value);
    const message = document.querySelector("#ans");

    if (!userGuess || userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter a valid number between 1 and 100!";
        message.className = "error";
        user.value="";
        return;
    }

    if (userGuess === randomNumber) {
        message.textContent = "🎉 Congratulations! You guessed the correct number!";
        message.className = "success";
        user.value="";
    } else if (userGuess < randomNumber) {
        message.textContent = "📉 Too low! Try again.";
        message.className = "error";
        user.value="";
    } else {
        message.textContent = "📈 Too high! Try again.";
        message.className = "error";
        user.value="";
    }
}
let btn=document.querySelector("#btn");
btn.addEventListener("click",()=>{
    checkGuess();
    
})
