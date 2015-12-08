function dnaToRna() {

  $(".result").fadeOut(500);
  $(".result").remove();

  var dna = document.getElementById("dna").value;

  var response = "";

  var i = 0;

  while (i < dna.length && response !== "Please enter a valid DNA strand") {
    if (dna.charAt(i) === "A") {
      response = response + "U";
    }
    else if (dna.charAt(i) === "T") {
      response = response + "A";
    }
    else if (dna.charAt(i) === "G") {
      response = response + "C";
    }
    else if (dna.charAt(i) === "C") {
      response = response + "G";
    }
    else {
      response = "Please enter a valid DNA strand";
    }
    i++;
  }

  var result = "<div class='result' style='display: none;'> " + response + "</div>";

  $(".dnaToRna").append(result);

  $(".result").fadeIn(500);

  document.getElementById("dna").value = "";
  console.log(response);
}

function rnaToDna() {

  var rna = document.getElementById("rna").value;

  var response = "";

  var i = 0;

  while (i < rna.length && response !== "Please enter a valid DNA strand") {
    if (rna.charAt(i) === "A") {
      response = response + "T";
    }
    else if (rna.charAt(i) === "U") {
      response = response + "A";
    }
    else if (rna.charAt(i) === "G") {
      response = response + "C";
    }
    else if (rna.charAt(i) === "C") {
      response = response + "G";
    }
    else {
      response = "Please enter a valid RNA strand";
    }
    i++;
  }

  document.getElementById("rna").value = "";
  console.log(response);

}

function complementary() {
  var complement = document.getElementById("complement").value;

  var response = "";

  var i = 0;

  while (i < complement.length && response !== "Please enter a valid DNA strand") {
    if (complement.charAt(i) === "A") {
      response = response + "T";
    }
    else if (complement.charAt(i) === "T") {
      response = response + "A";
    }
    else if (complement.charAt(i) === "G") {
      response = response + "C";
    }
    else if (complement.charAt(i) === "C") {
      response = response + "G";
    }
    else {
      response = "Please enter a valid DNA strand";
    }
    i++;
  }

  document.getElementById("complement").value = "";
  console.log(response);
}
