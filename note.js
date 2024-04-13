//01---------
const selectid=document.getElementById('button-id');
console.log(selectid);//aikane jeta ke select kora hoise seta ke dekabe

//02--------
function thirdfunction(){
    const geselect=document.getElementById('third-buttton');//akane third-button akta id r nam
    const getvaluethird=geselect.value;//input e default babe text deowa take,,setake number e convert korar jonno value likte hoi
    console.log(getvaluethird);

}

//03-------
//input type r man gulo normally text hisabe take setake number e convert korar jonno  value property set korte hoi uporer moto kore


//04--------
//upore amra je input er man gulo ber korsi segulo sob string akare ace..dorkar porle amra type of die cheak korte pari.ar ai jonno dorkar string teke number e conver kora,,,


//05-----

//numer e conver korar 2 ti prokriya holo parseint and parsfloat..Integers and floats are two different kinds of numerical data

var num=17.5;
console.log(parseInt(num));


var flotnum=17.5;
console.log(parseFloat(flotnum));
//aita hocce parsefloat and parseint er modde difference


//06-----

//upore input tager je man pawoa gese setake amra parseflote conver korbo ar setar jonno amra ai babe likte pari:-

function myfunction(){
    const selectid=document.getElementById('input-id');

    const setvalue=selectid.value;
    const convertparseflot=parseFloat(setvalue);
    console.log(typeof convertparseflot);  
}//akane input er man amra number e conver korsii



//07---

