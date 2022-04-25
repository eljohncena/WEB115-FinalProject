document.getElementById('createResume').addEventListener('click', myFunction);
document.getElementById('clear').addEventListener('click', clearPage);

function clearPage() {
  varClear = document.getElementsByClassName('clear');
  clearLength = varClear.length;
  for (i = 0; i < clearLength; i++) {
    varClear[i].value = '';
  }
}

function myFunction() {
  resume = myVariables();
  if (resume.email == "") {
    window.alert("Enter valid email!!!");
    location.reload();
  } else {
    writeDocument();
  }
}

function myVariables() {
  varName = document.getElementById('name').value;
  varCity = document.getElementById('city').value;
  varState = document.getElementById('state').value;
  varZip = document.getElementById('zip').value;
  varEmail = document.getElementById('email').value;
  varPhone = document.getElementById('phone').value;
  varPortfolio = document.getElementById('portfolio').value;
  varCoding = document.getElementById('coding').value;
  varWork = document.getElementById('work').value;
  varWriting = document.getElementById('writing').value;
  varProgrammingLanguages = document.getElementById('programmingLanguages').value;
  varSpokenLanguages = document.getElementById('spokenLanguages').value;
  varEducation = document.getElementById('education').value;
  varUniversity = document.getElementById('university').value;
  varCompany = document.getElementById('company').value;
  varPosition = document.getElementById('position').value;
  varBeginning = document.getElementById('beginning').value;
  varEnd = document.getElementById('end').value;
  varEmploymentInfo = document.getElementById('employmentInfo').value;
  varCompanyTwo = document.getElementById('companyTwo').value;
  varPositionTwo = document.getElementById('positionTwo').value;
  varBeginningTwo = document.getElementById('beginningTwo').value;
  varEndTwo = document.getElementById('endTwo').value;
  varEmploymentInfoTwo = document.getElementById('employmentInfoTwo').value;
  varCompanyThree = document.getElementById('companyThree').value;
  varPositionThree = document.getElementById('positionThree').value;
  varBeginningThree = document.getElementById('beginningThree').value;
  varEndThree = document.getElementById('endThree').value;
  varEmploymentInfoThree = document.getElementById('employmentInfoThree').value;
  varReference = document.getElementById('reference').value;

  const resume = {
    name: varName,
    city: varCity,
    state: varState,
    zip: varZip,
    email: varEmail,
    phone: varPhone,
    portfolio: varPortfolio,
    coding: varCoding,
    work: varWork,
    writing: varWriting,
    programmingLanguages: varProgrammingLanguages,
    spokenLanguages: varSpokenLanguages,
    university: varUniversity,
    education: varEducation,
    company: varCompany,
    position: varPosition,
    beginning: varBeginning,
    end: varEnd,
    employmentInfo: varEmploymentInfo,
    companyTwo: varCompanyTwo,
    positionTwo: varPositionTwo,
    beginningTwo: varBeginningTwo,
    endTwo: varEndTwo,
    employmentInfoTwo: varEmploymentInfoTwo,
    companyThree: varCompanyThree,
    positionThree: varPositionThree,
    beginningThree: varBeginningThree,
    endThree: varEndThree,
    employmentInfoThree: varEmploymentInfoThree,
    reference: varReference
  };
  console.log(resume);
  return resume;

}

function writeDocument() {
  document.write("<h1>" + resume.name + "</h1>");
  document.write("<p>" + resume.city + ", " + resume.state + " " + resume.zip + " \u25C6 " + resume.phone + " \u25C6 " + resume.email + "</p>");
  document.write("<p> Portfolio: </p>" + "<a href=\"url\" target=\"_blank\">" + resume.portfolio + "</a>");

  document.write("<h2 style=\"text-decoration: underline blue;\">Skills</h2>");
  document.write("<p>Coding: " + resume.coding + "</p>");
  document.write("<p>Work Ethic: " + resume.work + "</p>");
  document.write("<p>Writing Skills: " + resume.writing + "</p>");
  document.write("<h2 style=\"text-decoration: underline blue;\">Technical Skills</h2>");
  document.write("<p>Programming Languages: " + resume.programmingLanguages + "</p>");
  document.write("<p>Spoken Languages: " + resume.spokenLanguages + "</p>");

  document.write("<h2 style=\"text-decoration: underline blue;\">Education</h2>");
  document.write("<p>" + resume.university + "</p>");
  document.write("<p>" + resume.education + "</p>");

  document.write("<h2 style=\"text-decoration: underline blue;\">Recent Employment</h2>");
  document.write("<p style=\"font-weight: bold;\">" + resume.company + ", " + resume.position + ", " + resume.beginning + " - " + resume.end + "</p>");
  document.write("<p>Employment Information: " + resume.employmentInfo + "</p>");

  document.write("<p style=\"font-weight: bold;\">" + resume.companyTwo + ", " + resume.positionTwo + ", " + resume.beginningTwo + " - " + resume.endTwo + "</p>");
  document.write("<p>Employment Information: " + resume.employmentInfoTwo + "</p>");

  document.write("<p style=\"font-weight: bold;\">" + resume.companyThree + ", " + resume.positionThree + ", " + resume.beginningThree + " - " + resume.endThree + "</p>");
  document.write("<p>Employment Information: " + resume.employmentInfoThree + "</p>");

  document.write("<p>References: " + resume.reference + "</p>");

  document.write("<button type=\"button\" name=\"button\" onclick=\"location.reload();\" >Go back</button>")
}
