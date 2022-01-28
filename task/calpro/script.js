// var btn = document.getElementsByClassName("calbtn");
// var inputstring = "";

// //mouse click
// for (i = 0; i < btn.length; i++) {
//   btn[i].addEventListener("click", function () {
//     let pressedkey = this.id;
//     btnclick(pressedkey);
//   });
// }
// //keyboard click
// document.getElementById("txtval").addEventListener("keyup", function (eve) {
//   btnclick(eve.key);
// });

// //Do after keypress
// function btnclick(pressedkey) {
//   inputstring = inputstring + pressedkey;

//   document.getElementById("txtval").value = inputstring;
//   try {
//     if (pressedkey == "=") {
//       document.getElementById("txtval").value = eval(
//         inputstring.slice(0, inputstring.length - 1)
//       );
//       inputstring = "";
//     }
//     if (pressedkey == "Enter") {
//       document.getElementById("txtval").value = eval(
//         inputstring.slice(0, inputstring.length - 5)
//       );
//       inputstring = "";
//     }
   
//     if (pressedkey == "C" || pressedkey== "c") {
//       clearall();
//     }
    
//   } catch (error) {
//     clearall();
//     document.getElementById("txtval").value = error;
//   }
// }

// //cleatall from inputbox
// function clearall() {
//   document.getElementById("txtval").value = "";
//   inputstring = "";
// }


var [x] = [1,2,3];

var [first, second, third] = ["Laide", "Gabriel", "Jets"];

console.log(first);
console.log(second);
console.log(third);

