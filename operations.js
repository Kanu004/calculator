const Clear = () =>{
    var inp =document.getElementById('input');
    inp.value='';
}
const Back =()=>{
    var inp=document.getElementById('input');
    inp.value =inp.value.slice(0,-1);
}
const Solve =(inp)=>{
    var inp1=document.getElementById('input');
    inp1.value += inp;
}
const Result =()=>{
    var n1=document.getElementById('input').value;
    var n2=eval(n1);
    document.getElementById('input').value=n2;
}