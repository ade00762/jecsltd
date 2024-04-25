const form=document.querySelector("form");
const fullName= document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
 
function SendEmail(){
const bodyMessage = `Full Name:${fullName.value} <br> Email:${email.value} <br> Message:${message.value}`;              

    Email.send({
        SecureToken : "4e440fbf-1fe8-41a1-8b08-2c8dbf07256a",
        To : 'dapoajike@gmail.com',
        From : "contactus@jecslimited.com",
        Subject : Subject.value,
        Body : bodyMessage 
    }).then(
    message => {
        if (message =="Ok"){
            Swal.fire({
                title: "Success !",
                text: "message Sent Successfully!",
                icon: "success"
              });
        }
    }
    );

}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    SendEmail();    
});