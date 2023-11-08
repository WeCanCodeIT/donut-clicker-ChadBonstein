let clicks = 0;
let donutButton = document.getElementById("donut");
let counter = document.getElementById("counter");
function increment(){
        clicks = clicks + 1;
        counter.innerHTML = clicks;
}
function reset(){
        clicks = 0;
        counter.innerHTML = clicks;
}
donutButton.addEventListener("click", increment);
