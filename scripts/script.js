function sendMail(){
    let parms = {
        form_name : document.getElementById("form_name").value,
        form_email : document.getElementById("form_email").value,
        form_message : document.getElementById("form_message").value,
    }

    if (document.getElementById("anon").checked){
        parms.form_name = "anonimo"
    }

    const email_checker = parms.form_email.split("@");

    if (document.getElementById("anon").checked && parms.form_email != "" && parms.form_message != ""){
        parms.form_name = "anonimo"
        emailjs.send("service_MassageEmail","template_contact",parms).then(alert("mensagem enviada com sucesso!"))
        location.reload();
    } else if (parms.form_name == "" || parms.form_email == "" || parms.form_message == ""){
        alert("preencha todos os campos")
        return;
    } else if (email_checker.length != 2){
        alert("email invalido")
        return;
    } else {
        emailjs.send("service_MassageEmail","template_contact",parms).then(alert("mensagem enviada com sucesso!"))
        location.reload();
    }
}