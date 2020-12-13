function makeCalculation()
{
  var gradeList
  var weightList
  var array = [];
  var array2 = [];
  var sum = 0.0;
  var finalCalc = 0;
  var finalGrade;

  if (document.getElementsByName("mygrades[]").length > 0)
  {
    gradeList = Array.from(document.getElementsByName('mygrades[]'));
    weightList = Array.from(document.getElementsByName('myweights[]'));
  }

  else
  {
    return 0;
  }

  for (var i = 0; i < document.getElementsByName("mygrades[]").length; i++)
  {
    array.push(document.getElementsByName("mygrades[]").innerHTML);
    array2.push(document.getElementsByName("myweights[]").innerHTML);
  }

  for (var i = 0; i < gradeList.length; i++)
  {
    finalCalc = finalCalc + (gradeList[i].value * weightList[i].value)
    sum = sum + parseFloat(weightList[i].value)
  }

  finalCalc = finalCalc / sum

  document.getElementById("par").innerHTML = finalCalc.toFixed(2) + "%"

  if (finalCalc < 50)
  {
    document.getElementById("grade").innerHTML = "(F)"
  }

  else if (finalCalc > 60 && finalCalc < 63)
  {
    document.getElementById("grade").innerHTML = "(D-)"
  }

  else if (finalCalc > 62 && finalCalc < 67)
  {
    document.getElementById("grade").innerHTML = "(D)"
  }

  else if (finalCalc > 66 && finalCalc < 70)
  {
    document.getElementById("grade").innerHTML = "(D+)"
  }

  else if (finalCalc > 69 && finalCalc < 73)
  {
    document.getElementById("grade").innerHTML = "(C-)"
  }

  else if (finalCalc > 72 && finalCalc < 77)
  {
    document.getElementById("grade").innerHTML = "(C)"
  }

  else if (finalCalc > 76 && finalCalc < 80)
  {
    document.getElementById("grade").innerHTML = "(C+)"
  }

  else if (finalCalc > 79 && finalCalc < 83)
  {
    document.getElementById("grade").innerHTML = "(B-)"
  }

  else if (finalCalc > 82 && finalCalc < 87)
  {
    document.getElementById("grade").innerHTML = "(B)"
  }

  else if (finalCalc > 86 && finalCalc < 90)
  {
    document.getElementById("grade").innerHTML = "(B+)"
  }

  else if (finalCalc > 89 && finalCalc < 93)
  {
    document.getElementById("grade").innerHTML = "(A-)"
  }

  else if (finalCalc > 92)
  {
    document.getElementById("grade").innerHTML = "(A)"
  }
}
