//get a random color
let getOneColor = function () {
    let temp = "#";
    for(let i=0; i<3; i++){
        //here, using toString() method to change decimal to Hex
        temp += Math.round(Math.random()*255).toString(16);
    }
    return temp;
}
//get three random colors
let getThreeColor = function () {
    let colors = [];
    for (let i=0; i<3; i++) {
        colors[i] = getOneColor();
    }
    console.log(colors);
    return colors;
}
//get three random num
let getThreeNums = function () {
    let nums = new Array(3);
    for(let i=0; i<3; i++) {
        let temp = Math.round(Math.random()*8);
        while(nums.contains(temp)) {
            temp = Math.round(Math.random()*8);
        }
        nums[i] = temp;
    }
    console.log(nums);
    return nums;
}
//add contains function for array
Array.prototype.contains = function(val) {
    for(let i = 0; i < this.length; i++){
        if (this[i] === val) {
            return true;
        }
    }
    return false;
}
//get the lists of square box
let square = document.querySelectorAll(".square");
//begin
let begin_flash = function () {
    //get three random num between 0-8
    let nums = getThreeNums();
    //get three random colors
    let colors = getThreeColor();
    for (let i=0; i<3; i++) {
        square[nums[i]].style.backgroundColor = colors[i];
    }
}
//add time to begin_flash function
var timer = null;
let timer_begin = function () {
    if(timer){
        clearInterval(timer);
    }
    timer = window.setInterval("begin_flash();", 1000);
}
//end
let end_flash = function () {
    clearInterval(timer);
    console.log(timer);
    for(let i=0; i<square.length; i++) {
        square[i].style.backgroundColor = "#e9a426"
    }
}
