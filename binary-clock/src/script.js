var intervalId1 = "";
var intervalTime = 1000;


  intervalId1 = setInterval("start_clock1()", intervalTime);
  
var on = '<i class="material-icons" id="on">fiber_manual_record</i>';
var off = '<i class="material-icons" id="off">fiber_manual_record</i>';

function start_clock1() {
  var currentTime = new Date();
  var currentHours = currentTime.getHours();
  var currentMinutes = currentTime.getMinutes();
  var currentSeconds = currentTime.getSeconds();
  var hour_left=document.getElementById("hour_left");
  var hour_right=document.getElementById("hour_right");
  var minute_left=document.getElementById("minute_left");
  var minute_right=document.getElementById("minute_right");
  var second_left=document.getElementById("second_left");
  var second_right=document.getElementById("second_right");
  var zero = off+off+off+off;
  var one = off+off+off+on;
  var two = off+off+on+off;
  var three = off+off+on+on;
  var four = off+on+off+off;
  var five = off+on+off+on;
  var six = off+on+on+off;
  var seven = off+on+on+on;
  var eigth = on+off+off+off;
  var nine = on+off+off+on;
  
  switch (currentHours) {
    case 0:
      hour_left.innerHTML=zero;
       hour_right.innerHTML=zero;
    break;
    case 1:
      hour_left.innerHTML=zero;
       hour_right.innerHTML=one;
    break;
    case 2:
      hour_left.innerHTML=zero;
       hour_right.innerHTML=two;
    break;
    case 3:
      hour_left.innerHTML=zero;
       hour_right.innerHTML=three;
    break;
    case 4:
      hour_left.innerHTML=zero;
       hour_right.innerHTML=four;
    break;
    case 5:
      hour_left.innerHTML=zero;
       hour_right.innerHTML=five;
    break;
    case 6:
      hour_left.innerHTML=zero;
       hour_right.innerHTML=six;
    break;
    case 7:
      hour_left.innerHTML=zero;
      hour_right.innerHTML=seven;
    break;
    case 8:
      hour_left.innerHTML=zero;
      hour_right.innerHTML=eigth;
    break;
    case 9:
      hour_left.innerHTML=zero;
      hour_right.innerHTML=nine;
    break;
    case 10:
      hour_left.innerHTML=one;
      hour_right.innerHTML=zero;
    break;
    case 11:
      hour_left.innerHTML=one;
      hour_right.innerHTML=one;
    break;
    case 12:
      hour_left.innerHTML=one;
      hour_right.innerHTML=two;
    break;
    case 13:
      hour_left.innerHTML=one;
      hour_right.innerHTML=three;
    break;
    case 14:
      hour_left.innerHTML=one;
      hour_right.innerHTML=four;
    break;
    case 15:
      hour_left.innerHTML=one;
      hour_right.innerHTML=five;
    break;
    case 16:
      hour_left.innerHTML=one;
      hour_right.innerHTML=six;
    break;
    case 17:
     hour_left.innerHTML=one;
      hour_right.innerHTML=seven;
    break;
    case 18:
      hour_left.innerHTML=one;
      hour_right.innerHTML=eigth;
    break;
    case 19:
      hour_left.innerHTML=one;
      hour_right.innerHTML=nine;
    break;
    case 20:
      hour_left.innerHTML=two;
      hour_right.innerHTML=zero;
    break;
    case 21:
      hour_left.innerHTML=two;
      hour_right.innerHTML=one;
    break;
    case 22:
      hour_left.innerHTML=two;
      hour_right.innerHTML=two;
    break;
    case 23:
      hour_left.innerHTML=two;
      hour_right.innerHTML=three;
    break;
    default:
      hour_left.innerHTML=zero;
      hour_right.innerHTML=zero;
    break;
  }
  
switch (currentMinutes) {
  case 0:
    $('#minute_left').html(zero);
    $('#minute_right').html(zero);
  break;
  case 1:
    $('#minute_left').html(zero);
    $('#minute_right').html(one);
  break;
  case 2:
    $('#minute_left').html(zero);
    $('#minute_right').html(two);
  break;
  case 3:
    $('#minute_left').html(zero);
    $('#minute_right').html(three);
  break;
  case 4:
    $('#minute_left').html(zero);
    $('#minute_right').html(four);
  break;
  case 5:
    $('#minute_left').html(zero);
    $('#minute_right').html(five);
  break;
  case 6:
    $('#minute_left').html(zero);
    $('#minute_right').html(six);
  break;
  case 7:
    $('#minute_left').html(zero);
    $('#minute_right').html(seven);
  break;
  case 8:
    $('#minute_left').html(zero);
    $('#minute_right').html(eigth);
  break;
  case 9:
    $('#minute_left').html(zero);
    $('#minute_right').html(nine);
  break;
  case 10:
    $('#minute_left').html(one);
    $('#minute_right').html(zero);
  break;
  case 11:
    $('#minute_left').html(one);
    $('#minute_right').html(one);
  break;
  case 12:
    $('#minute_left').html(one);
    $('#minute_right').html(two);
  break;
  case 13:
    $('#minute_left').html(one);
    $('#minute_right').html(three);
  break;
  case 14:
    $('#minute_left').html(one);
    $('#minute_right').html(four);
  break;
  case 15:
    $('#minute_left').html(one);
    $('#minute_right').html(five);
  break;
  case 16:
    $('#minute_left').html(one);
    $('#minute_right').html(six);
  break;
  case 17:
    $('#minute_left').html(one);
    $('#minute_right').html(seven);
  break;
  case 18:
    $('#minute_left').html(one);
    $('#minute_right').html(eigth);
  break;
  case 19:
    $('#minute_left').html(one);
    $('#minute_right').html(nine);
  break;
  case 20:
    $('#minute_left').html(two);
    $('#minute_right').html(zero);
  break;
  case 21:
    $('#minute_left').html(two);
    $('#minute_right').html(one);
  break;
  case 22:
    $('#minute_left').html(two);
    $('#minute_right').html(two);
  break;
  case 23:
    $('#minute_left').html(two);
    $('#minute_right').html(three);
  break;
  case 24:
    $('#minute_left').html(two);
    $('#minute_right').html(four);
  break;
  case 25:
    $('#minute_left').html(two);
    $('#minute_right').html(five);
  break;
  case 26:
    $('#minute_left').html(two);
    $('#minute_right').html(six);
  break;
  case 27:
    $('#minute_left').html(two);
    $('#minute_right').html(seven);
  break;
  case 28:
    $('#minute_left').html(two);
    $('#minute_right').html(eigth);
  break;
  case 29:
    $('#minute_left').html(two);
    $('#minute_right').html(nine);
  break;
  case 30:
    $('#minute_left').html(three);
    $('#minute_right').html(zero);
  break;
  case 31:
    $('#minute_left').html(three);
    $('#minute_right').html(one);
  break;
  case 32:
    $('#minute_left').html(three);
    $('#minute_right').html(two);
  break;
  case 33:
    $('#minute_left').html(three);
    $('#minute_right').html(three);
  break;
  case 34:
    $('#minute_left').html(three);
    $('#minute_right').html(four);
  break;
  case 35:
    $('#minute_left').html(three);
    $('#minute_right').html(five);
  break;
  case 36:
    $('#minute_left').html(three);
    $('#minute_right').html(six);
  break;
  case 37:
    $('#minute_left').html(three);
    $('#minute_right').html(seven);
  break;
  case 38:
    $('#minute_left').html(three);
    $('#minute_right').html(eigth);
  break;
  case 39:
    $('#minute_left').html(three);
    $('#minute_right').html(nine);
  break;
  case 40:
    $('#minute_left').html(four);
    $('#minute_right').html(zero);
  break;
  case 41:
    $('#minute_left').html(four);
    $('#minute_right').html(one);
  break;
  case 42:
    $('#minute_left').html(four);
    $('#minute_right').html(two);
  break;
  case 43:
    $('#minute_left').html(four);
    $('#minute_right').html(three);
  break;
  case 44:
    $('#minute_left').html(four);
    $('#minute_right').html(four);
  break;
  case 45:
    $('#minute_left').html(four);
    $('#minute_right').html(five);
  break;
  case 46:
    $('#minute_left').html(four);
    $('#minute_right').html(six);
  break;
  case 47:
    $('#minute_left').html(four);
    $('#minute_right').html(seven);
  break;
  case 48:
    $('#minute_left').html(four);
    $('#minute_right').html(eigth);
  break;
  case 49:
    $('#minute_left').html(four);
    $('#minute_right').html(nine);
  break;
  case 50:
    $('#minute_left').html(five);
    $('#minute_right').html(zero);
  break;
  case 51:
    $('#minute_left').html(five);
    $('#minute_right').html(one);
  break;
  case 52:
    $('#minute_left').html(five);
    $('#minute_right').html(two);
  break;
  case 53:
    $('#minute_left').html(five);
    $('#minute_right').html(three);
  break;
  case 54:
    $('#minute_left').html(five);
    $('#minute_right').html(four);
  break;
  case 55:
    $('#minute_left').html(five);
    $('#minute_right').html(five);
  break;
  case 56:
    $('#minute_left').html(five);
    $('#minute_right').html(six);
  break;
  case 57:
    $('#minute_left').html(five);
    $('#minute_right').html(seven);
  break;
  case 58:
    $('#minute_left').html(five);
    $('#minute_right').html(eigth);
  break;
  case 59:
    $('#minute_left').html(five);
    $('#minute_right').html(nine);
  break;
  default:
    $('#minute_left').html(zero);
    $('#minute_right').html(zero);
  break;
}

switch (currentSeconds) {
  case 0:
    $('#second_left').html(zero);
    $('#second_right').html(zero);
  break;
  case 1:
    $('#second_left').html(zero);
    $('#second_right').html(one);
  break;
  case 2:
    $('#second_left').html(zero);
    $('#second_right').html(two);
  break;
  case 3:
    $('#second_left').html(zero);
    $('#second_right').html(three);
  break;
  case 4:
    $('#second_left').html(zero);
    $('#second_right').html(four);
  break;
  case 5:
    $('#second_left').html(zero);
    $('#second_right').html(five);
  break;
  case 6:
    $('#second_left').html(zero);
    $('#second_right').html(six);
  break;
  case 7:
    $('#second_left').html(zero);
    $('#second_right').html(seven);
  break;
  case 8:
    $('#second_left').html(zero);
    $('#second_right').html(eigth);
  break;
  case 9:
    $('#second_left').html(zero);
    $('#second_right').html(nine);
  break;
  case 10:
    $('#second_left').html(one);
    $('#second_right').html(zero);
  break;
  case 11:
    $('#second_left').html(one);
    $('#second_right').html(one);
  break;
  case 12:
    $('#second_left').html(one);
    $('#second_right').html(two);
  break;
  case 13:
    $('#second_left').html(one);
    $('#second_right').html(three);
  break;
  case 14:
    $('#second_left').html(one);
    $('#second_right').html(four);
  break;
  case 15:
    $('#second_left').html(one);
    $('#second_right').html(five);
  break;
  case 16:
    $('#second_left').html(one);
    $('#second_right').html(six);
  break;
  case 17:
    $('#second_left').html(one);
    $('#second_right').html(seven);
  break;
  case 18:
    $('#second_left').html(one);
    $('#second_right').html(eigth);
  break;
  case 19:
    $('#second_left').html(one);
    $('#second_right').html(nine);
  break;
  case 20:
    $('#second_left').html(two);
    $('#second_right').html(zero);
  break;
  case 21:
    $('#second_left').html(two);
    $('#second_right').html(one);
  break;
  case 22:
    $('#second_left').html(two);
    $('#second_right').html(two);
  break;
  case 23:
    $('#second_left').html(two);
    $('#second_right').html(three);
  break;
  case 24:
    $('#second_left').html(two);
    $('#second_right').html(four);
  break;
  case 25:
    $('#second_left').html(two);
    $('#second_right').html(five);
  break;
  case 26:
    $('#second_left').html(two);
    $('#second_right').html(six);
  break;
  case 27:
    $('#second_left').html(two);
    $('#second_right').html(seven);
  break;
  case 28:
    $('#second_left').html(two);
    $('#second_right').html(eigth);
  break;
  case 29:
    $('#second_left').html(two);
    $('#second_right').html(nine);
  break;
  case 30:
    $('#second_left').html(three);
    $('#second_right').html(zero);
  break;
  case 31:
    $('#second_left').html(three);
    $('#second_right').html(one);
  break;
  case 32:
    $('#second_left').html(three);
    $('#second_right').html(two);
  break;
  case 33:
    $('#second_left').html(three);
    $('#second_right').html(three);
  break;
  case 34:
    $('#second_left').html(three);
    $('#second_right').html(four);
  break;
  case 35:
    $('#second_left').html(three);
    $('#second_right').html(five);
  break;
  case 36:
    $('#second_left').html(three);
    $('#second_right').html(six);
  break;
  case 37:
    $('#second_left').html(three);
    $('#second_right').html(seven);
  break;
  case 38:
    $('#second_left').html(three);
    $('#second_right').html(eigth);
  break;
  case 39:
    $('#second_left').html(three);
    $('#second_right').html(nine);
  break;
  case 40:
    $('#second_left').html(four);
    $('#second_right').html(zero);
  break;
  case 41:
    $('#second_left').html(four);
    $('#second_right').html(one);
  break;
  case 42:
    $('#second_left').html(four);
    $('#second_right').html(two);
  break;
  case 43:
    $('#second_left').html(four);
    $('#second_right').html(three);
  break;
  case 44:
    $('#second_left').html(four);
    $('#second_right').html(four);
  break;
  case 45:
    $('#second_left').html(four);
    $('#second_right').html(five);
  break;
  case 46:
    $('#second_left').html(four);
    $('#second_right').html(six);
  break;
  case 47:
    $('#second_left').html(four);
    $('#second_right').html(seven);
  break;
  case 48:
    $('#second_left').html(four);
    $('#second_right').html(eigth);
  break;
  case 49:
    $('#second_left').html(four);
    $('#second_right').html(nine);
  break;
  case 50:
    $('#second_left').html(five);
    $('#second_right').html(zero);
  break;
  case 51:
    $('#second_left').html(five);
    $('#second_right').html(one);
  break;
  case 52:
    $('#second_left').html(five);
    $('#second_right').html(two);
  break;
  case 53:
    $('#second_left').html(five);
    $('#second_right').html(three);
  break;
  case 54:
    $('#second_left').html(five);
    $('#second_right').html(four);
  break;
  case 55:
    $('#second_left').html(five);
    $('#second_right').html(five);
  break;
  case 56:
    $('#second_left').html(five);
    $('#second_right').html(six);
  break;
  case 57:
    $('#second_left').html(five);
    $('#second_right').html(seven);
  break;
  case 58:
    $('#second_left').html(five);
    $('#second_right').html(eigth);
  break;
  case 59:
    $('#second_left').html(five);
    $('#second_right').html(nine);
  break;
  default:
    $('#second_left').html(zero);
    $('#second_right').html(zero);
  break;
}  
  
  if (currentHours < 10) {
		currentHours = "0"+currentHours;
	}
	if (currentMinutes < 10) {
		currentMinutes = "0"+currentMinutes;
	}
	if (currentSeconds < 10) {
		currentSeconds = "0"+currentSeconds;
	}
    var time = currentHours + ":"+ currentMinutes + ":"+ currentSeconds ;
  document.getElementById("myClockDisplay").textContent= time;
}