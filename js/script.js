function getElement(elementId) {
    return document.getElementById(elementId);
}

const name = getElement("name").value;
const email = getElement("email").value;
const textInput = getElement("text-input").value;
const button = getElement("button");


const sendEmail = ()=>{
    var params = {
        name: name,
        reply_email: email,
        message: textInput
    };
    emailjs.send('gmail', 'feedback', params);
}