// length of total state

var length = document.getElementsByClassName("statename").length;

//length of total city
var lengthcity = document.getElementsByClassName("cityname").length;

//all state hidden first
for (var i = 0; i < length; i++) {
  document.getElementsByClassName("statename")[i].style.display = "none";
}
//all city hidden first
for (var i = 0; i < lengthcity; i++) {
  document.getElementsByClassName("cityname")[i].style.display = "none";
}

//function call when contry||state selected
function change(ele) {
  var eleid = ele.id;

  //hidden element if display changed of state by previous call of change() function.
  for (var i = 0; i < length; i++) {
    document.getElementsByClassName("statename")[i].style.display = "none";
  }
  //hidden element if display changed of city by previous call of change() function.
  for (var j = 0; j < lengthcity; j++) {
    document.getElementsByClassName("cityname")[j].style.display = "none";
  }

  //get value of country
  var x = document.getElementById("country").value;
  console.log(x);

  //get value of state
  var y = document.getElementById("state").value;
  console.log(y);

  // if Change() call by country then no need of y, else it can cause error;
  if (eleid == "country") {
    y = "";
  }
  //unhide display of state based on country value
  for (i = 0; i < document.getElementsByClassName(x).length; i++) {
    document.getElementsByClassName(x)[i].style.display = "block";
  }
  document.getElementsByClassName(x)[0].selected = true;

  //unhide display of city based on state value
  for (j = 0; j < document.getElementsByClassName(y).length; j++) {
    document.getElementsByClassName(y)[j].style.display = "block";
  }
  document.getElementsByClassName("cityname")[0].selected = true;
}
