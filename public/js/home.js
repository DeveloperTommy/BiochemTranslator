function dnaToRna() {

  $(".result-dna").fadeOut(500);
  $(".result-dna").remove();

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

  if (dna.length === 0) {
    response = "Please enter a valid DNA strand";
  }

  var result;

  if (response !== "Please enter a valid DNA strand") {
    var reverse = response.split("").reverse().join("");
    result = "<div class='result-dna' style='display: none;'> " + "<p style='color: red;'> Original DNA Strand: </p>" + dna
            + "<p style='color: green;'> Complementary RNA Strand: </p>" + response
            + "<p style='color: blue;'> Reversed: </p>" + reverse + "</div>";
  }
  else {
    result = "<div class='result-dna' style='display: none;'> " + response + "</div>";
  }

  $(".dnaToRna").append(result);

  $(".result-dna").fadeIn(500);

  document.getElementById("dna").value = "";
  console.log(response);
}

function rnaToDna() {

  var rna = document.getElementById("rna").value;

  $(".result-rna").fadeOut(500);
  $(".result-rna").remove();

  var response = "";

  var i = 0;

  while (i < rna.length && response !== "Please enter a valid RNA strand") {
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

  if (rna.length === 0) {
    response = "Please enter a valid RNA strand";
  }

  var result;

  if (response !== "Please enter a valid RNA strand") {
    var reverse = response.split("").reverse().join("");
    result = "<div class='result-rna' style='display: none;'> " + "<p style='color: red;'> Original RNA Strand: </p>" + rna
    + "<p style='color: green;'> Complementary DNA Strand: </p>" + response
    + "<p style='color: blue;'> Reversed: </p>" + reverse + "</div>";
  }
  else {
    result = "<div class='result-rna' style='display: none;'> " + response + "</div>";
  }

  $(".rnaToDna").append(result);

  $(".result-rna").fadeIn(500);

  document.getElementById("rna").value = "";
  console.log(response);

}

function complementary() {
  var complement = document.getElementById("complement").value;

  $(".result-complement").fadeOut(500);
  $(".result-complement").remove();

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

  if (complement.length === 0) {
    response = "Please enter a valid DNA strand";
  }

  var result;

  if (response !== "Please enter a valid DNA strand") {
    var reverse = response.split("").reverse().join("");
    result = "<div class='result-complement' style='display: none;'> " + "<p style='color: red;'> Original DNA Strand: </p>" + complement
    + "<p style='color: green;'> Complementary DNA Strand: </p>" + response
    + "<p style='color: blue;'> Reverse: </p>" + reverse + "</div>";
  }
  else {
    result = "<div class='result-complement' style='display: none;'> " + response + "</div>";
  }

  $(".complementary").append(result);

  $(".result-complement").fadeIn(500);

  document.getElementById("complement").value = "";
  console.log(response);
}
