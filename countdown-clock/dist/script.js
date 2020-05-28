function countDown(){
  var now = new Date();
  var set=document.getElementById('set').value;
  var eventDate = new Date(set);
  
  var currentTime = now.getTime();
  var eventTime = eventDate.getTime();
  var remTime= eventTime - currentTime;
 /* if(eventTime<0){
    alert("Wrong time");
    location.reload(true);
  }
  */
 var s=0;
  var m=0;
 
  var s= Math.floor(remTime/1000);
  var m=Math.floor(s/60);
  var h= Math.floor(m/60);
  var d=Math.floor(h/24);
  h%= 24;
  m%= 60;
  s%= 60;
  h= (h<0)? "0":(h<10) ? "0"+h : h;
  m=(m<0)? "0": (m<10) ? "0"+m : m;
  s= (s<0)? "0":(s<10) ? "0"+s : s;
  if(d<0){
    d=0;
    alert("Wrong time");
    location.reload(true);
  }
  document.getElementById("days").textContent = d;
  document.getElementById("hours").textContent = h;
  document.getElementById("min").textContent = m;
  document.getElementById("sec").textContent = s;
  setTimeout(countDown,1000);
   
}
  
function show(){
 
  
  
}
countDown();