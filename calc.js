 function calc() {
    var a = parseFloat(document.getElementById('num1').value);
    var b = parseFloat(document.getElementById('num2').value);
    var oper = parseFloat(document.getElementById('op').value);
    var out = parseFloat(document.getElementById('ans'));
    switch (oper) {
      case 1:
        out = a + b;

        break;
      case 2:
        out = a - b;

        break;
      case 3:
        out = a * b;

        break;
      case 4:
        {
          if (b != 0)
            out = a / b;
          else {
            out = "Cant divide by Zero";
          }

          break;
        }

        }
        ans.textContent = "Ans =" + out;
    };

function clear() {

  // document.getElementById('num1')= NULL;
  // document.getElementById('num2')= NULL;
  // document.getElementById('op')= NULL;
num1.textContent="";
};
