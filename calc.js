// eslint-disable-next-line no-unused-vars
function main1() {
  var str = document.getElementById("text1").value;
  str = str.replace(/\+/g, " + ");
  str = str.replace(/\-/g, " - ");
  str = str.replace(/\*/g, " * ");
  str = str.replace(/\//g, " / ");
  str = str.replace(/\(/g, " ( ");
  str = str.replace(/\)/g, " ) ");
  str = str.replace(/\" "/g, "");
  str = "( " + str + " )";

  const str2 = str.split(" ");

  var i = 0;
  while (i < str2.length) {
    if (str2[i] == "") {
      str2.splice(i, 1);
    }
    i++;
  }

  x1(str2);
}

function x1(str2) {
  var str3 = "";
  while (str2[0] == "(") {
    findParenthesis(str2);
    for (var j = 1; j < str2.length - 1; j++) {
      str3 = str3 + str2[j]+ " ";
      if (j == str2.length - 2) {
        str3 = str3 + "\n";
      }
    }
  }
  str3 = str3 + "=" + str2;
  createArray(str3);
}

function createArray(str3) {
  document.getElementById("calctxt").value = str3;
  console.log(str3);
}

function findParenthesis(str2) {
  var i = 0;
  var x = 0;
  while (str2[i] != ")") {
    if (str2[i] == "(") {
      x = i;
    }
    i++;
  }

  i = multiply(str2, x, i);

  i = Addition(str2, x, i);
  str2.splice(i, 1);
  str2.splice(x, 1);
}

function multiply(str2, x, i) {
  var indexUp = x;
  while (indexUp < i) {
    if (str2[indexUp] == "*") {
      if(str2[indexUp+1]=="-" && str2[indexUp+2]!="("){
        str2[indexUp] = parseFloat(str2[indexUp - 1]) * parseFloat(str2[indexUp+1]+str2[indexUp + 2]);
        str2.splice(indexUp - 1, 1);
        str2.splice(indexUp, 2);
        i=i-3;
        indexUp--;
      }

      else {str2[indexUp] =
        parseFloat(str2[indexUp - 1]) * parseFloat(str2[indexUp + 1]);
        str2.splice(indexUp - 1, 1);
        str2.splice(indexUp, 1);
        i = i - 2;
        indexUp--;
      }
    }

    if (str2[indexUp] == "/") {
      if(str2[indexUp+1]=="-" && str2[indexUp+2]!="("){
        str2[indexUp] = parseFloat(str2[indexUp - 1]) / parseFloat(str2[indexUp+1]+str2[indexUp + 2]);
        str2.splice(indexUp - 1, 1);
        str2.splice(indexUp, 2);
        i=i-3;
        indexUp--;
      }

      else{
        str2[indexUp] =
        parseFloat(str2[indexUp - 1]) / parseFloat(str2[indexUp + 1]);
        str2.splice(indexUp - 1, 1);
        str2.splice(indexUp, 1);
        i = i - 2;
        indexUp--;
      }
    }

    indexUp++;
  }
  return i;
}

function Addition(str2, x, i) {
  var sumIndexUp = x;
  while (sumIndexUp < i) {
    if (str2[sumIndexUp] == "+") {
      str2[sumIndexUp] =
        parseFloat(str2[sumIndexUp - 1]) + parseFloat(str2[sumIndexUp + 1]);
      str2.splice(sumIndexUp - 1, 1);
      str2.splice(sumIndexUp, 1);
      i = i - 2;
      sumIndexUp--;
    }

    if (str2[sumIndexUp] == "-") {
      str2[sumIndexUp] =
        parseFloat([sumIndexUp - 1]) - parseFloat([sumIndexUp + 1]);
      str2.splice(sumIndexUp - 1, 1);
      str2.splice(sumIndexUp, 1);
      i = i - 2;
      sumIndexUp--;
    }

    sumIndexUp++;
  }
  return i;
}
