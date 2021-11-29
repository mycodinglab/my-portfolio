function getElement(elementId) {
    return document.getElementById(elementId);
}

const sendMail = (params) => {
    var tempParams = {
        from_name: getElement("name").value,
        from_email: getElement("email").value,
        message: getElement("message").value
    };
    emailjs.send('service_6ybrv6v', 'template_byxxujd', tempParams)
        .then(
            function (res) {
                console.log('SUCCESS!', res.status);
            }, function (error) {
                console.log('FAILED...', error);
            });
}