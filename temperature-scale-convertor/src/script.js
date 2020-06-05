document.getElementById('buttonCel').addEventListener('click',convertorCel);
document.getElementById('buttonFah').addEventListener('click',convertorFah);
document.getElementById('clear').addEventListener('click',clear);
function clear(e){
  e.preventDefault();
  document.getElementById('celc').value='';
  document.getElementById('faher').value='';
}
function convertorCel(e){
  e.preventDefault();
  var celc= document.getElementById('celc').value;
  var faher= document.getElementById('faher').value;
  if(celc=='' && faher==''){
    alert("Enter a value to convert!!!");
  }
  else if(faher==''){
     alert("Enter a value to convert!!!");
  }
  else{
    faherToCel(faher);
  } 
}
function faherToCel(faher){
  var result= (faher-32)*(5/9);
  document.getElementById('celc').value=result;
}
function celToFahr(celc){
  var result= celc*(9/5)+32;
  document.getElementById('faher').value=result;
}



function convertorFah(e){
  e.preventDefault();
  var celc= document.getElementById('celc').value;
  var faher= document.getElementById('faher').value;
  if(celc=='' && faher==''){
    alert("Enter a value to convert!!!");
  }
  else if(celc==''){
     alert("Enter a value to convert!!!");
  }
  else{
    celToFahr(celc);
  } 
}
