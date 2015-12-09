<!-- Begin
<!--START OF TIMER SCRIPT-->
//how much time they get
var time=5;
var timesup=0;
var started=0;
function CountDown() {
  if(time>0)
  {document.math.timer.value=time;
  time=time-1;
  var gameTimer=setTimeout("CountDown()", 1000)}
  else if (time==0)
  {document.math.timer.value="0";
  timesup=1;
  //alert('Time\'s Up! Youre Score is:' );
  document.math.firstnum.value="";
  document.math.operator.value="";
  document.math.secondnum.value="";
  document.math.answer.value="";

   sp [0] = document.getElementById("sp").value;
  alert('Time\'s Up! Youre Score is: ' + sp [0]);
  //saveScore(sp);
  sp [1] = prompt("New score");


  // var stringify = require('json-stringify-safe');
  // localStorage["sp1"] = JSON.stringfy(sp);

  // var storedscore = JSON.prase(localStorage['sp']);

  alert(sp[0] + " " + sp [1]);

  // SAVE SCORE
  var employee = {
    name:sp [1],
    score:sp[0]
  }
  // If has result on localstorage
  if(localStorage.getItem('employees')){
    var a = localStorage.getItem("employees");
    var arr = JSON.parse(a);
    // Add current employee to leaderboard
    arr.push(employee);
    localStorage.setItem('employees',JSON.stringify(arr));
  } else {
    var arr=[];
    arr.push(employee);
    localStorage.setItem('employees',JSON.stringify(arr));
  }

  //END SAVE SCORE
  

  } 
}



<!--END OF TIMER SCRIPT-->

function startgame()
{
  if (started!=0)
{alert('You\'ve Already Started!');
}
else
{
started=1;
CountDown();
getProb();
}
}

<!--START OF RANDOM NUMBER SCRIPT-->
function randnum(min,max)
{
var num=Math.round(Math.random()*(max-min))+min;
return num;
}
<!--END OF RANDOM NUMBER SCRIPT-->

var choose, rightanswer
function getProb()
{
choose=randnum(1,4);
if (choose=="1")
{document.math.operator.value="+";
var choose1=randnum(0,50);
var choose2=randnum(0,50);
document.math.firstnum.value=choose1;
document.math.secondnum.value=choose2;
rightanswer=choose1 + choose2;
}
if (choose=="2")
{document.math.operator.value="-";
var choose2=randnum(0,50);
var choose1=randnum(choose2,50);
document.math.firstnum.value=choose1;
document.math.secondnum.value=choose2;
rightanswer=choose1 -  choose2;
}
if (choose=="3")
{document.math.operator.value="x";
var choose1=randnum(0,10);
var choose2=randnum(0,10);
document.math.firstnum.value=choose1;
document.math.secondnum.value=choose2;
rightanswer=choose1 * choose2;
}
if (choose=="4")
{document.math.operator.value="/";
var choose2=randnum(1,10);
var choose1=choose2 * randnum(0,10);
document.math.firstnum.value=choose1;
document.math.secondnum.value=choose2;
rightanswer=choose1 /  choose2;
}
}
function answerit()
{
if (started==0)
{alert('You Must Click The Button Labeled \'Start\'!');}
else
{
if (timesup!=0)
{alert('Time Ran Out!');}
else
{
var theiranswer=eval(document.math.answer.value);
var theirpoints=eval(document.math.points.value);
if (theiranswer==null)
{alert('Put Your Answer In The Box  ');
document.math.answer.select();}
else
{
if (theiranswer==rightanswer)
{
// alert('Right');
theirpoints++;
document.math.points.value=theirpoints;
}
else
{alert(theiranswer + " is wrong!\n\n"+rightanswer + " is correct!")}
document.math.answer.select();
getProb();
}
}
}
document.getElementById("number").value = "";
}
var hideKeyboard = function() {
    document.activeElement.blur();
    $("input").blur();
};

function number_write(x)
{
  var text_box = document.getElementById("number");
  if(x>=0 && x<=9)
  {
    if(isNaN(text_box.value))
   text_box.value = 0;
 text_box.value = (text_box.value * 10)+x;
  }
}
function number_clear()
{
  document.getElementById("number").value = 0;
}
function number_c()
{
  var text_box = document.getElementById("number");
  var num = text_box.value;
  var num1 = num%10;
  num -= num1;
  num /= 10;
  text_box.value = num;
}

// var x = document.getElementById("form_sample");
// var createform = document.createElement('form'); // Create New Element Form
// x.appendChild(createform);

// function saveScore(object){
//   if(localStorage.getItem('sp'));
//   array.push(object);
//   localStorage.setItem("sp", Json.stringfy(array));
// } else
// {
//   var array[i];
//   array.push(object);
//   localStorage.setItem("sp", Json.stringfy(array));
// }

// function showScore(){
//   $('main-content').empty().append($('.' + 'sp'));

//   if(localStorage.getItem('sp')) {
//     var arr = JSON.parse(localStorage.getItem('sp'));
//     arr.sort(function(a,b){
//       return a.score + b.score;

//     });
//     var html="";
//     arr.forEach(function(user,index){
//       html += '<tr><td>' + (index+1) + '</td>' + 
//       '<td>' + user.nickname + '</td>' +
//       '<td>' + user.score + '</td></tr>';
//     });
  
//   $('.sp-content').empty().append(html);
//  } else {
//   $('.main-content').empty().append('<h1>No score </h1>')
//  }
// };
