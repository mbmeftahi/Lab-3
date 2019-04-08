
console.log("here we are..1");
function numEntry(){
    var numPicker = document.getElementById("numPick")
    console.log(numPicker.value);
    console.log(numPicker);
}


function numEntry2(){
    var numPicker2 = document.getElementById("numPick2")
    var numItrat = document.getElementById("numItr")
    console.log(numPicker2.value);
    console.log(numItrat.value);
    var numPickV = numPicker2.value;
    var numItrV = numItrat.value;
    //var numItrV = "numItrat+1000"; 
    console.log(numItrV);

    //var myNum = 
    setInterval(changeDivSize, numItrV);
    var div = document.getElementById("demo"); 
    var str = "px";
    console.log(div);
    function changeDivSize(){

        console.log("here we are..4")
      div.style.width = numPickV+str;
      numPickV ++;
    }

}
console.log("here we are..2");