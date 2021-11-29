function getElement(elementId) {
    return document.getElementById(elementId);
}


const sendMail = (params) => {
    var tempParams = {
        from_name: getElement("fromName").value,
        to_name: getElement("toName").value,
        message: getElement("msg").value
    };
    emailjs.send('service_6ybrv6v', 'template_p1b40xd', tempParams)
        .then(
            function (res) {
                console.log('SUCCESS!', res.status);
            }, function (error) {
                console.log('FAILED...', error);
            });
}