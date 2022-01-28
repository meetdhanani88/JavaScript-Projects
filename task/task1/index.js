const color = ["red", "green", "yellow"];
for (let i = 0; i < 3; i++) {
  document.getElementById(color[i]).addEventListener("click", function () {
    let x = document.getElementById(color[i]).checked;
    if (x == true) {
      document.getElementById(`colors${[i]}`).style.backgroundColor = color[i];
    } else {
      document.getElementById(`colors${[i]}`).style.backgroundColor = "white";
    }
  });
}

function length_of_array(arr) {
  var counter = 0;

  arr.forEach(function () {
    counter++;
  });

  return counter;
}
