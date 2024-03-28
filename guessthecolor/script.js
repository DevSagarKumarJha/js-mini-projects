let colorCodeContainer = document.getElementById("color-code");
let randomColor = null;
const optionsContainer = document.getElementById("options-container");
let score = 0;
const scoreContainer = document.getElementById("score");
const highScoreContainer = document.getElementById("high-score");
let highScore = 0;
function generateRandomColorRGB(){
  const red = generateRandomNumberBetween(0,255);
  const green = generateRandomNumberBetween(0,255);
  const blue = generateRandomNumberBetween(0,255);
  return `rgb(${red}, ${green}, ${blue})`
}

function generateRandomNumberBetween(min, max){
  return min + Math.floor(Math.random()*(max-min+1));
}
function incrementScore(){
  score += 1;
  scoreContainer.innerText = score

}
function validateResult(el){
   const selectedColor = el.target.style.backgroundColor;
   if(randomColor === selectedColor){
      incrementScore();
      if(score > highScore){
        window.localStorage.setItem("high-score", score);
      }
   }else{
     score = 0;     
    }
    window.localStorage.setItem("score", score);
   startGame();
}

function startGame(){
  highScore = Number(window.localStorage.getItem("high-score") )?? 0;
  highScoreContainer.innerText = highScore
  score = Number(window.localStorage.getItem("score") )?? 0;
  scoreContainer.innerText = score
  optionsContainer.innerHTML = null;
   randomColor = generateRandomColorRGB();
   colorCodeContainer.innerText = randomColor;

   let answerIndex = generateRandomNumberBetween(0,5);

   for(let i =0 ; i<6; i++){
    const div = document.createElement("div");
    div.addEventListener("click", validateResult)
    div.style.backgroundColor = i === answerIndex ? randomColor :generateRandomColorRGB();
    optionsContainer.append(div)
   }
}

window.addEventListener("load", ()=> startGame());