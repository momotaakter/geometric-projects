//get base rejult

function myfunctionone(){

    const getselect=document.getElementById('calculate-text2');
    const getvalue=getselect.value ;
    const base=parseFloat(getvalue);
    console.log(base);
    
    //get area rejult
    const getselect1=document.getElementById('calculate-text22');
    const getvalue1=getselect1.value ;
    const height=parseFloat(getvalue1);
    console.log(height);
    
    //calculte triangle area
  const area=height+base;
    console.log(area);
    
    //display triangle area
    
    const displayarea=document.getElementById('display-id2');
    displayarea.innerText=area
    
    
    }
    
    