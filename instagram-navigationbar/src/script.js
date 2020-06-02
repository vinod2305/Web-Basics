var tabButtons=document.querySelectorAll("i");

function showPanel(panelIndex) {
    tabButtons.forEach(function(node){
        node.style.color="";
      console.log(tabButtons);
    });
  console.log(tabButtons);
    tabButtons[panelIndex].style.color = "red";
}
showPanel(0);