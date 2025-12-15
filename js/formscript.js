const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (validateForm()) {
        sendFormData();
    }
});

function validateForm() {
    if (
        nameInput.value.trim() === '' ||
        emailInput.value.trim() === '' ||
        subjectInput.value.trim() === '' ||
        messageInput.value.trim() === ''
    ) {
        alert('Lütfen tüm alanları doldurun.');
        return false;
    }

    if (!validateEmail(emailInput.value)) {
        alert('Geçerli bir e-posta adresi giriniz.');
        return false;
    }

    return true;
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function sendFormData() {
    alert('Mesajınız başarıyla gönderildi!');

    // Formu temizle
    form.reset();
}
