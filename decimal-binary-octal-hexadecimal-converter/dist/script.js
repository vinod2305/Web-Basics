document.getElementById('coversion-form').addEventListener('click',convertor);

function convertor(e){
  e.preventDefault();
  var input= document.getElementById('input-value').value;
  var type= document.getElementById('input-type').value;
  
  switch(type){
    case "binary":
      document.getElementById('output-value').innerHTML=decToBin(input);
      break;
    case "hexa":
      
       document.getElementById('output-value').innerHTML=decToHex(input);
      break;
    case "octal":
      
       document.getElementById('output-value').innerHTML=decToOct(input);
       break;
  }
}

function decToBin(num){
  var bin = Number(num).toString(2);
  return bin;
}
function decToHex(num){
  var bin = Number(num).toString(16).toUpperCase();
  return bin;
}
function decToOct(num){
  var bin = Number(num).toString(8);
  return bin;
}