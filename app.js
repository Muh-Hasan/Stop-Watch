var min = 0 
var sec  = 0 
var mili = 0

var minDisplay = document.getElementById("min")
var secDisplay = document.getElementById("sec")
var miliDisplay = document.getElementById("mili")

// var btn_1 = document.getElementById('btn-1').disabled = false
// var btn_2 = document.getElementById('btn-2')
// var btn_3 = document.getElementById('btn-3')

var interval;

function timer() {
    mili ++
    miliDisplay.innerHTML = mili
    if (mili === 100){
        sec ++
        secDisplay.innerHTML = sec
        mili = 0
    }
    else if (sec === 60 ) {
        min ++
        minDisplay.innerHTML = min
        sec = 0 
    }

}

function start(){
    interval = setInterval(timer , 10);
    document.getElementById('btn-1').disabled = true
}
function pause(){
    clearInterval(interval)
    document.getElementById('btn-1').disabled = false
}
function reset(){
    min = 0
    sec = 0
    mili = 0
    minDisplay.innerHTML = min
    secDisplay.innerHTML = sec
    miliDisplay.innerHTML = mili
}