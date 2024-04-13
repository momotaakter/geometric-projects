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

//parallotiogram-

function parallefunctionone(){
    const selectparalle=document.getElementById('calculate-paralle1');
    const transfervalue=selectparalle.value;
    const transferfloat=parseFloat(transfervalue);
    console.log(transferfloat);

const selectparalleo2=document.getElementById('calculate-paralle2');
const transvalue2=selectparalleo2.value;
const getfloatparalleo2=parseFloat(transvalue2);
console.log(getfloatparalleo2);


const getrejultofpara2=transferfloat*getfloatparalleo2;
const displayparalleo=document.getElementById('display-paralle');
displayparalleo.innerText=getrejultofpara2

}
//rombhus

function rmyfunction(){
    const rselect=document.getElementById('calculate-textr1');
    const rvalue=rselect.value;
    const rfloat=parseFloat(rvalue);
    console.log(rfloat);



    const rselect2=document.getElementById('calculate-text2r2');
    const rvalue2=rselect2.value;
    const rfloat2=parseFloat(rvalue2);
    console.log(rfloat2);

const getrrejult=0.5*rfloat*rfloat2;
const displayromhus=document.getElementById('display-rid');
displayromhus.innerText=getrrejult

}
//pentagon

function pmyfunction(){
    const selectpentagon=document.getElementById('pcalculate-text');
    const penvalue=selectpentagon.value;
    const penfloat=parseFloat(penvalue);
    console.log(penfloat);


    const selectpenta2=document.getElementById('pcalculate-text2');
    const penvalue2=selectpenta2.value;
    const penfloat2=parseFloat(penvalue2);
    console.log(penfloat2);

  const penrejult=(penfloat*penfloat2)/2;
  const displypentagon=document.getElementById('pdisplay-rid');
  displypentagon.innerText=penrejult

}
//ellipse
function elimyfunction(){

    const selectellp1=document.getElementById('elicalculate-text');
    const ellivalue1=selectellp1.value;
    const floatelli=parseFloat(ellivalue1);
    console.log(floatelli);

const selectellip2=document.getElementById('elicalculate-text2');
const valueselectelli2=selectellip2.value;
const floatellip2=parseFloat(valueselectelli2);
console.log(floatellip2);

const getellisum=(0.5*floatelli*floatellip2)*90;
const displellirejult=document.getElementById('elidisplay-id');
displellirejult.innerText=getellisum

}
