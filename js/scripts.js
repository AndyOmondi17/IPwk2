function testResults (form) {
    var firstName = form.firstName.value;
    var surName= form.surName.value;
    var gender=form.gender.value;
    var birthDate= form.birthDate.value;
    return alert ("Hi "+firstName+" "+surName+".Your birthday is "+birthDate);
}
