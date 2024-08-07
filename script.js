//generating cv
document.getElementById("btnN").style.display = "none";
function generateCV() {
  // display the CV template
  document.getElementById("cv-template").style.display = "block";
  document.getElementById("btnN").style.display = "block";
  // full name
  document.getElementById("fullName").innerHTML =
    document.getElementById("fullNameField").value;

  // job title
  document.getElementById("jobTitle").innerHTML =
    document.getElementById("jobFiled").value;

  // mobile number
  document.getElementById("mobileNumber").innerHTML =
    document.getElementById("mobileNumberField").value;

  //email address
  document.getElementById("emailAddress").innerHTML =
    document.getElementById("emailAddressFiled").value;

  // address
  document.getElementById("address").innerHTML =
    document.getElementById("addressField").value;

  // date of birth
  document.getElementById("dateOfBirth").innerHTML =
    document.getElementById("dateofbirth").value;

  // languages input fields
  let languages = document.getElementsByClassName("laField");
  let lanF = "";
  for (let element of languages) {
    lanF += `<li> <span> ${element.value} </span></li>`;
  }
  document.getElementById("lan").innerHTML = lanF;

  // skills input fields
  let s = document.getElementsByClassName("skField");
  let str1 = "";
  for (let element of s) {
    str1 += `<li> <span> ${element.value} </span></li>`;
  }
  if (str1.length) document.getElementById("skills").innerHTML = str1;

  // certificate input fields
  let crf = document.getElementsByClassName("crField");
  let str2 = "";
  for (let element of crf) {
    str2 += `<li> <span> ${element.value} </span></li>`;
  }
  if (str2.length) document.getElementById("certificate").innerHTML = str2;

  //objective (about)
  document.getElementById("objectiveT").innerHTML =
    document.getElementById("objectiveField").value;

  // education input fields
  let educationF = document.getElementsByClassName("edField");
  let resEdu = "";
  for (let element of educationF) {
    resEdu += `<li class="squar"> <h4 class="textFont"> ${element.value} </h4></li>`;
  }
  document.getElementById("edu").innerHTML = resEdu;

  // title field work experience
  let titleFF = document.getElementsByClassName("tiField");
  let titF = "";
  for (let element of titleFF) {
    titF += `<h3 class="textFont"> ${element.value} </h3>`;
  }
  document.getElementById("titleF").innerHTML = titF;

  // work experience 1
  let wes = document.getElementsByClassName("weField");
  let str = "";
  for (let element of wes) {
    str += `<li class="squar"> <h4 class="textFont"> ${element.value} </h4></li>`;
  }
  document.getElementById("weT").innerHTML = str;

  // title field work experience 2
  let titleFF2 = document.getElementsByClassName("tiField2");
  let titF2 = "";
  for (let element of titleFF2) {
    titF2 += `<h3 class="textFont"> ${element.value} </h3>`;
  }
  document.getElementById("titleF2").innerHTML = titF2;

  // work experience 2
  let wes2 = document.getElementsByClassName("weField2");
  let strw2 = "";
  for (let element of wes2) {
    strw2 += `<li class="squar"> <h4 class="textFont"> ${element.value} </h4></li>`;
  }
  document.getElementById("weT2").innerHTML = strw2;

  // title project 1
  let titlePP = document.getElementsByClassName("protiField");
  let titP = "";
  for (let element of titlePP) {
    titP += `<h3 class="textFont"> ${element.value} </h3>`;
  }
  document.getElementById("titleP").innerHTML = titP;

  //project 1
  let pro = document.getElementsByClassName("proField");
  let prostr = "";
  for (let element of pro) {
    prostr += `<li class="squar"> <h4 class="textFont"> ${element.value} </h4></li>`;
  }
  document.getElementById("projectText").innerHTML = prostr;

  // title project 2
  let titlePP2 = document.getElementsByClassName("protiField2");
  let titP2 = "";
  for (let element of titlePP2) {
    titP2 += `<h3 class="textFont"> ${element.value} </h3>`;
  }
  document.getElementById("titleP2").innerHTML = titP2;

  //project 2
  let pro2 = document.getElementsByClassName("proField2");
  let prostr2 = "";
  for (let element of pro2) {
    prostr2 += `<li class="squar"> <h4 class="textFont"> ${element.value} </h4></li>`;
  }
  document.getElementById("projectText2").innerHTML = prostr2;

  // title project 3
  let titlePP3 = document.getElementsByClassName("protiField3");
  let titP3 = "";
  for (let element of titlePP3) {
    titP3 += `<h3 class="textFont"> ${element.value} </h3>`;
  }
  document.getElementById("titleP3").innerHTML = titP3;

  //project 3
  let pro3 = document.getElementsByClassName("proField3");
  let prostr3 = "";
  for (let element of pro3) {
    prostr3 += `<li class="squar"> <h4 class="textFont"> ${element.value} </h4></li>`;
  }
  document.getElementById("projectText3").innerHTML = prostr3;

  //code for setting profile image
  let file = document.getElementById("profileImageField").files[0];
  let reader = new FileReader();
  reader.readAsDataURL(file);
  console.log(reader);
  //set the image to template
  reader.onloadend = function () {
    document.getElementById("imgTemplate").src = reader.result;
  };
}

// download resume code
function downloadPDF() {
  const element = document.getElementById("cv-template");
  html2pdf(element, {
    margin: 0,
    filename: "resume.pdf",
    image: { type: "pdf", quality: 1 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "A4", orientation: "portrait" },
  });
}

// for print resume code
function printCV() {
  if (x.matches) {
    // If media query matches

    document.getElementById("nav").style.display = "none";
    document.getElementById("resume").style.marginTop = "0px";
    document.getElementById("cv-form").style.display = "none";
    document.getElementById("heading").style.display = "none";
    document.getElementById("btnN").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
    document.getElementById("resume").className = "col-12";

    document.getElementById("footer").style.display = "none";
    var h2 = document.getElementsByTagName("h2").length;
    for (var i = 0; i < h2; i++) {
      document.getElementsByTagName("h2")[i].style["font-size"] = "16px";
    }

    var h3 = document.getElementsByTagName("h3").length;
    for (var i = 0; i < h3; i++) {
      document.getElementsByTagName("h3")[i].style["font-size"] = "16px";
    }

    var h4 = document.getElementsByTagName("h4").length;
    for (var i = 0; i < h4; i++) {
      document.getElementsByTagName("h4")[i].style["font-size"] = "16px";
      document.getElementsByTagName("h4")[i].style["color"] = "#000";
    }
    window.print();
    document.getElementById("nav").style.display = "flex";

    document.getElementById("footer").style.display = "block";
    document.getElementById("cv-form").style.display = "block";
    document.getElementById("resume").style.marginTop = "100px";
    document.getElementById("resume").className = "col-md-6";
    document.getElementById("heading").style.display = "block";
    document.getElementById("btnN").style.display = "block";
  } else {
    document.getElementById("nav").style.display = "none";
    document.getElementById("resume").style.marginTop = "0px";
    document.getElementById("cv-form").style.display = "none";
    document.getElementById("heading").style.display = "none";
    document.getElementById("btnN").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
    document.getElementById("resume").className = "col-12";
    document.getElementById("footer").style.display = "none";
    window.print();
    document.getElementById("nav").style.display = "flex";

    document.getElementById("footer").style.display = "block";
    document.getElementById("cv-form").style.display = "block";
    document.getElementById("resume").style.marginTop = "100px";
    document.getElementById("resume").className = "col-md-6";
    document.getElementById("heading").style.display = "block";
    document.getElementById("btnN").style.display = "block";
  }
}

