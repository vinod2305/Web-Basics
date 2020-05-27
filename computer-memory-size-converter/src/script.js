document.getElementById('coversion-form').addEventListener('click',convertor);

function convertor(e){
  
  let input_type=document.getElementById('input-type').value;
  let output_type=document.getElementById('output-type').value;
  let input_value=document.getElementById('input-value').value;
 let dif=parseInt(output_type)-parseInt(input_type);
  let sign;
  if((dif)==0){
    document.getElementById('output-value').innerHTML=input_value;
    
  }
  else if(dif>0){
    sign=1;
  }
  else{
    sign=0;
  }
  if(dif!=0){
  switch(input_type){
    
    case "1":
      convert(input_value,8,Math.abs(dif),sign);
      break;
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
      convert(input_value,1024,Math.abs(dif),sign);
      break;
    
 
  }
  }
}
function convert(value,factor,n,sign){
  let a=Math.pow(1000,n-1);
  let ans;
  console.log(n);
  if(sign==1){
   ans= value/(factor*a);
  }
  else{
    ans= value*(factor*a);
  }
  document.getElementById('output-value').innerHTML=ans;
}