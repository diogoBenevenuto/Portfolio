const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//tudo novo abaixo
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("number").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    var data = {
        fullname: fullname,
        email: email,
        phone: phone,
        subject: subject,
        message: message
    };

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "send_email.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                alert("Mensagem enviada com sucesso!");

                document.getElementById("contactForm").reset();
            } else {
                alert("Erro ao enviar a mensagem.");
            }
        }
    };


    xhr.send(JSON.stringify(data));
});
