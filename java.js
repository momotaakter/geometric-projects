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







