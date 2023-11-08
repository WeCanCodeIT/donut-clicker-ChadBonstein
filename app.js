
    
let clicks = 0;
let autoClick=0;
let donutButton = document.getElementById("donut");
let resetButton = document.getElementById("reset");
let autoClickButton = document.getElementById("autoclick");
let counter = document.getElementById("counter");
function increment(){
        clicks = clicks + 1;
        counter.innerHTML = clicks;
}
function purchaseAutoClicker(){
    if (clicks >=100){
        clicks -=100
        counter.innerHTML = clicks;
        autoClick = autoClick + 1
        setInterval(() => {
            clicks = clicks + autoClick
            counter.innerHTML = clicks;
        }, 1000);
    }
}
function reset(){
        clicks = 0;
        autoClick = 0;
        counter.innerHTML = clicks;
}
donutButton.addEventListener("click", increment);
autoClickButton.addEventListener("click",purchaseAutoClicker);
resetButton.addEventListener("click",reset)

