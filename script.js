const openSignup = document.getElementById('openSignup');
const closeSignup = document.getElementById('closeSignup');
const signupModal = document.getElementById('signupModal');

openSignup.addEventListener('click', () => {
    signupModal.style.display = 'flex';
});

closeSignup.addEventListener('click', () => {
    signupModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === signupModal) {
        signupModal.style.display = 'none';
    }
});

const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const terms = document.getElementById('terms').checked;

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;

    if (!username) {
        alert('Username is required');
        return;
    }

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    if (!password) {
        alert('Password is required');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    if (!phonePattern.test(phone)) {
        alert('Please enter a valid phone number in the format: 123-456-7890');
        return;
    }

    if (!terms) {
        alert('You must agree to the terms and conditions');
        return;
    }

    alert('Signup successful! Welcome to PetAdopt');
});
