function largeno(...arr) {
  return arr.reduce(largeno1);

  function largeno1(total, str) {
    if (total.length > str.length) return total;
    else return str;
  }
}

function multiply(x, ...rrr) {
  return (
    x *
    rrr.reduce((z, y) => {
     return z + y;
    })
  );
}







document.getElementById("ok").innerHTML = multiply(2,1,2,3,3);
