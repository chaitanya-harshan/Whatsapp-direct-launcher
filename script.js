document.getElementById('numberForm').addEventListener('submit', function(event){
    event.preventDefault();

    const phoneNumber = document.getElementById('PhoneNumber').value;

    if( /^\d{10}$/.test(phoneNumber) ){
        const whatsAppLink = "https://wa.me/"+phoneNumber;
        window.location.href = whatsAppLink;
    }
    else alert("Enter a valid 10 digit Phone number.");

});