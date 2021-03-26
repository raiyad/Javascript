/*var i =0;
while(i<10){
    console.log('raiyad')
    i++
} */
var isRunning = true
while(isRunning){
    var rand = Math.floor(Math.random()*10+1)
if (rand==9){
    console.log('win')
    isRunning= false
}
else{
    console.log('keep trying')
}

}


