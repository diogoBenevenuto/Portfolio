const contactForm = document.querySelector('#contactForm');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const fullName = document.getElementById("fullname");
const email = document.getElementById("email");
const number = document.getElementById("number");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail()
{
    const bodyMessage = `Full name: ${fullName.value}<br> Email: ${email.value}<br> 
    Phone Number: ${number.value}<br> Message: ${message.value}`;

    Email.send({
        SecureToken : "be87cd1f-905a-4e50-aeae-58ae21bc60fc",
        To : 'diogommonteiro123@gmail.com',
        From : "maoridev9@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK"){
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
      }
    );
}

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();

    contactForm.reset();
    
})

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}