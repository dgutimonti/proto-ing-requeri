function sendEmail(event) {
    event.preventDefault();
    
    const form = document.getElementById('registration-form');
    const formData = new FormData(form);

    const mailtoLink = `mailto:danielg973@hotmail.com?subject=Registro%20de%20Estudiante&body=${
        Array.from(formData.entries()).map(entry => `${encodeURIComponent(entry[0])}: ${encodeURIComponent(entry[1])}`).join('%0D%0A')
    }`;

    window.location.href = mailtoLink;
}
