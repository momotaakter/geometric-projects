//get base rejult

function myfunction(){

const getselect=document.getElementById('calculate-text');
const getvalue=getselect.value ;
const base=parseFloat(getvalue);
console.log(base);

//get area rejult
const getselect1=document.getElementById('calculate-text2');
const getvalue1=getselect1.value ;
const height=parseFloat(getvalue1);
console.log(height);

//calculte triangle area

const area=0.5*base*height;
console.log(area);

//display triangle area

const displayarea=document.getElementById('display-id');
displayarea.innerText=area


}



//rectangle area
function myfunctionone(){
    const selectone=document.getElementById('calculate-textone');
   
    const getvaluetwo=selectone.value;
    const getfloattwo=parseFloat(getvaluetwo);
    console.log(getfloattwo);

const selecttwo=document.getElementById('calculate-text222');
const getvalueetwo=selecttwo.value;
const getfloatttwo=parseFloat(getvalueetwo);
console.log(getfloatttwo);

const getgun=getfloatttwo*getfloattwo;

const displayareatwo=document.getElementById('display-idtwo');
displayareatwo.innerText=getgun

}

//


