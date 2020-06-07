function calculateTip() {
    var billAmount = document.getElementById("billAmount").value;
 
    var serviceQuality = document.getElementById("serviceQuality").value;
    var totalPeople = document.getElementById("totalPeople").value;

    if(billAmount === "" || serviceQuality == 0) {
        return window.alert("Please enter some value!");

    }

    if(totalPeople === "" || totalPeople <= 1) {
        totalPeople = 1;

        document.getElementById("each").style.display = "none";

    } else {

        document.getElementById("each").style.display = "block";

    }

    var total = (billAmount * serviceQuality) / totalPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
  console.log(total);
}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("calculate").onclick = function() { calculateTip(); };
