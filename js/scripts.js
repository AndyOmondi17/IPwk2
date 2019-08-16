var gd;
var firstName=document.getElementByName('firstName');
var gender=document.getElementsByName('gender');
var birthDate=document.getElementByName('birthDate');
var surName=document.getElementByName('surname');

function getUSerData (form){
    firstName = form.firstName.value;
    surName= form.surName.value;
    gender=document.getElementsByName('gender');
    birthDate= form.birthDate.value;

    if(gender[0].checked){
      gd=gender[0].value;

    }
    else {
       gd=gender[1].value;
    }


    return alert ("Hi "+firstName+" "+surName+".Your birthday is "+birthDate+"Your gender is "+gd);
}
function checkFormInput(){
  if
}
