var gd;
var firstName=document.getElementsByName('firstName');
var gender=document.getElementsByName('gender');
var birthDate=document.getElementsByName('birthDate');
var surName=document.getElementsByName('surname');

/*function getUSerData (form){
    var firstName = form.firstName.value;
    var surName= form.surName.value;
    var gender=document.getElementsByName('gender');
    var birthDate= form.birthDate.value;

    if(gender[0].checked){
      gd=gender[0].value;
    }
    else {
       gd=gender[1].value;
    }


    return alert ("Hi "+firstName+" "+surName+".Your birthday is "+birthDate+"Your gender is "+gd);
}*/

function checkFormInput(){
  if(firstName===""||surName===""||(gender[0].checked===false&&gender[1].checked===false))
  {
    alert ("Kindly fill the entire form");
  }
}
function getAkanName(){
  var maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
  var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa"," Afua"," Ama"];
}
