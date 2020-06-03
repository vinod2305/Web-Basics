function changeRange(){
  var r= parseInt(document.getElementById("r").value);
  var b= parseInt(document.getElementById("b").value);
  var g= parseInt(document.getElementById("g").value);
  var color="#"+hex(r)+hex(b)+hex(g);
  document.body.style.backgroundColor=color;
  document.getElementById('hex-label').innerText=color;
  document.getElementById('r-label').innerText=r;
  document.getElementById("g-label").innerText=g;
  document.getElementById("b-label").innerText=b;
  
  if (r < 100 && g < 100 && b < 100) {
        document.getElementById("container").style.color = "white";
    } else {
        document.getElementById("container").style.color = "black";
    }
}
function hex(v) {
    var hex = v.toString(16);
    if (v < 16) {
        hex = "0" + hex;
    }
    return hex;
}