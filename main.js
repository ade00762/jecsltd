const form=document.querySelector("form");
const fullName= document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");



function SendEmail(){
const bodyMessage = `Full Name:${fullName.value} <br> Email:${email.value} <br> Message:${message.value}`;              

    Email.send({
        SecureToken : "ef9bcd34-d5a5-4745-86e7-f4ea37082938 ",
        To : 'coolsuny00762@gmail.com',
        From : "coolsuny00762@gmail.com",
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