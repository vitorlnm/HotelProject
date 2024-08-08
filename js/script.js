document.getElementById('book-btn').addEventListener('click', function() {
    const form = document.getElementById('booking-form');

    const bookingData = {
        name: form.elements['name'].value,
        cpf: form.elements['cpf'].value,
        email: form.elements['email'].value,
        password: form.elements['password'].value,
        checkin: form.elements['checkin'].value,
        checkout: form.elements['checkout'].value
    };

    let allFieldsFilled = true;
    for (const key in bookingData) {
        if (bookingData[key] === '') {
            allFieldsFilled = false;
            break;
        }
    }

    if (allFieldsFilled) {
        alert("Reserva realizada com sucesso!");

        form.reset();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});

// Event listener para o scroll da janela
window.addEventListener('scroll', function() {
    var scrollLado = document.getElementById('scrollLado');
    var scrollPosition = window.scrollY;
    
    if (scrollPosition > 50) { 
        scrollLado.style.opacity = '0';
    } else {
        scrollLado.style.opacity = '1';
    }
});
