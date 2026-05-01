import Swal from "sweetalert2";

export default async function  submit (){
    const email = document.getElementById("email") as HTMLInputElement
    const cel = document.getElementById("cel") as HTMLInputElement
    const message = document.getElementById("msg") as HTMLTextAreaElement
    const emailValid = email.value.includes('@') && email.value.includes('.') && email.value.length > 5
    const celValid = cel.value.length === 10 || cel.value.length === 12
    if(emailValid && celValid && message.value.length > 5){
        await fetch("https://sys3-bot.aramiib.com/webhook/bf96e04a-dbd7-468e-9d4b-e60617d3a1ec",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "email": email.value,
                "number": cel.value ,
                "message": message.value
            })
        })
        .then(res => res.json())
        .then(data => {
            if(data.message === "Workflow was started"){
                Swal.fire({
                    title: "Muy bien",
                    text: "Tu mensaje ha sido enviado con exito",
                    icon: "success"
                })
                email.value = ""
                cel.value = ""
                message.value = ""
            }
        })
    }
    else{
        Swal.fire({
            title: "Error",
            text: "Por favor revisa que los datos esten correctos",
            icon: "error"
        })
    }
}