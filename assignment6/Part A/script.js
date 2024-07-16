
function validate(){
  const emailId = document.getElementById("typeEmailX");
  const password = document.getElementById("typePasswordX");
  const userName = document.getElementById("typeuserX");


  localStorage.setItem("userName",userName.value);

  const domain = "northeastern.edu";
    
   emailvalid=false;
      if(validateEmail(emailId.value) && emailId.value.indexOf(domain) != -1) {
        emailvalid = true;
      } else if (emailId.value.indexOf(domain) === -1) {
        emailvalid =false;
      };

  if(userName.value=="" || password.value =="")
  {
    alert("no blank values allowed");
    return false;
  }
  if(emailvalid==false)
  {
    alert("enter the valid email @northeastern ");
    return false;
  }
  else
  {

    
    return true;
  }
}








const emailId = document.getElementById("typeEmailX");
const password = document.getElementById("typePasswordX");
const userName = document.getElementById("typeuserX");
const number1=document.getElementById("n1");
const number2=document.getElementById("n2");



    const validateEmail = email => {
        const validateEmailId = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      
        if (email.match(validateEmailId)) {
          return true;
        } else {
          return false;
        }
      }
    

      

       


function calcadd()
{
 
  var n1=parseFloat(document.getElementById("n1").value);
  var n2=parseFloat(document.getElementById("n2").value);
  document.getElementById('result').value=n1+n2;
  
}
function calcsub()
{
  var n1=parseFloat(document.getElementById("n1").value);
  var n2=parseFloat(document.getElementById("n2").value);
  document.getElementById('result').value=n1-n2;
}
function calcdivide()
{
  var n1=parseFloat(document.getElementById("n1").value);
  var n2=parseFloat(document.getElementById("n2").value);
  document.getElementById('result').value=n1/n2;
}
function calcmultiply()
{
  var n1=parseFloat(document.getElementById("n1").value);
  var n2=parseFloat(document.getElementById("n2").value);
  document.getElementById('result').value=n1*n2;
}




number1.addEventListener("keyup", () => {
  if(validatenumber(number1.value)) {
    document.getElementById("n1msg").innerHTML="";
  } else {
    document.getElementById("n1msg").innerHTML="Enter the valid  number";
  };
})
number2.addEventListener("keyup", () => {
  if(validatenumber(number2.value)) {
    document.getElementById("n2msg").innerHTML="";
  } else {
    document.getElementById("n2msg").innerHTML="Enter the valid  number";
  };
})
const validatenumber = no => {
  const validatenumber1 = /^[0-9]\d*(\.\d+)?$/;
  if (no.match(validatenumber1)) {
    return true;
  } else {  
    return false;
  }
}