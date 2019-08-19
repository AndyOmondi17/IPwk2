
var Gender=document.getElementsByName('gender');
var bd=parseInt(document.getElementById('birthDate')).value;
var bm=parseInt(document.getElementById('birthMonth')).value;
var yob=parseInt(document.getElementById('year')).value;
var gd;
/*function mainFunction(){*/

  function validation(){
   if((Gender[0].checked===false&&Gender[1].checked===false)||BirthDate===""||BirthMonth===""||YearOfBirth===""){
      alert("Fill the entire form");
      return false;
    }
     else if(BirthDate<=0||BirthDate>31){
      alert("Enter a valid date of Birth");
      return false;
    }
  /*  else if(Number.isNaN(BirthDate)===true ||Number.isNan(BirthMonth)===true||Number.isNan(YearOfBirth)===true){
      alert("Enter the values in figures");
      return false;
    }*/
    else{
      if(Gender[0].checked){
        gd=Gender[0].value;
        alert("Male");
      }
      else{
        gd=Gender[1].value;
        alert("Female");
      }
      alert(gd+bd+bm+yob);
      return true;
    }
  }
/*}*/
