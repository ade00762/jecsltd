function sendMail(){
    var params={
        name:document.getElementById("name").value ,
        email:document.getElementById("email").value ,
        message:document.getElementById("message").value ,
    }
    console.log("body= ",params)
    const serviceID = "service_k3bhkcp";
const templateID = "template_mmu8d8w"

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        console.log("res= ",res)
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
        console.log(res);
        alert("your message sent successfully")
    }
)
.catch ((err)=> console.log (err));
};

