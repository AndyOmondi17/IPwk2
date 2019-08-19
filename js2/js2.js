function validation(){
    var Gender=document.getElementsByName('gender');
    var DD= document.getElementById("date").value;
    var MM= document.getElementById("month").value;
    var yob= document.getElementById("year").value;
    var CC=Number(yob.slice(0,2));
    var YY=Number(yob.slice(2,4));

    var men=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var female=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];




    var d=( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
    var answer=Math.round(d);
    


    if(Gender[0].checked===true && answer===0){
        return alert(men[0]);
    }
    else if(Gender[1].checked===true && answer===0){
      return alert(female[0]);
    }
    else if(Gender[0].checked===true && answer===1){
      return alert(men[1]);
    }
    else if(Gender[1].checked===true && answer===1){
      return alert(female[1]);
    }
    else if(Gender[0].checked===true && answer===2){
      return alert(men[2]);
    }
    else if(Gender[1].checked===true && answer===2){
      return alert(female[2]);
    }
    else if(Gender[0].checked===true && answer===3){
      return alert(men[3]);
    }
    else if(Gender[1].checked===true && answer===3){
      return alert(female[3]);
    }
    else if(Gender[0].checked===true && answer===4){
      return alert(men[4]);
    }
    else if(Gender[1].checked===true && answer===4){
      return alert(female[4]);
    }
    else if(Gender[0].checked===true && answer===5){
      return alert(men[5]);
    }
    else if(Gender[1].checked===true && answer===5){
      return alert(female[5]);
    }
    else if(Gender[0].checked===true && answer===6){
      return alert(men[6]);
    }
    else if(Gender[1].checked===true && answer===6){
      return alert(female[6]);
    }
    else{
      alert("null");
    }
  }

    // if(DD.value <=0 || DD.value > 31){
    //   alert("invalid date!");
    // }else if(MM.value <=0 || MM.value > 31){
    //   alert("invalid month");
    //
    // }else if(yob.value>2019){
    //     alert("invalid year");
    //   }
    //   else{
    //     alert(d);
    //     return true;
    //   }
    // };
