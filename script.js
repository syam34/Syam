document.getElementById('loginBtn').addEventListener('click', function() {
    document.getElementById('loginForm').classList.remove('hidden');
});

document.getElementById('saveLogin').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        document.getElementById('loginForm').classList.add('hidden');
        document.getElementById('profileForm').classList.remove('hidden');
    } else {
        alert('Please enter username and password');
    }
});

document.getElementById('saveProfile').addEventListener('click', function() {
    document.getElementById('saveProfile').style.display = 'none';

    // Make specific fields read-only
    document.getElementById('name').readOnly = true;
    document.getElementById('dob').readOnly = true;
    document.getElementById('bloodGroup').readOnly = true;

    alert('Profile saved! You can now edit other fields.');
});

const editableFields = [
    'pastMedicalHistory', 'weight', 'height', 'allergies', 'address', 'emergencyContact', 'emergencyEmail'
];

editableFields.forEach(field => {
    const input = document.getElementById(field);
    input.addEventListener('input', function() {
        document.getElementById('saveProfile').style.display = 'inline';
    });
});

// SOS Button
document.getElementById('sosBtn').addEventListener('click', function() {
    const emergencyContact = document.getElementById('emergencyContact').value;
    const emergencyEmail = document.getElementById('emergencyEmail').value;

    if (!emergencyContact || !emergencyEmail) {
        alert('Please enter both emergency contact number and email before sending an SOS alert.');
        return;
    }

    // Simulate sending alert
    sendAlert(emergencyContact, emergencyEmail);
});

// Function to simulate sending alerts
function sendAlert(contact, email) {
    // Here you would integrate with an API for sending SMS and email
    alert(Alert sent to ${contact} and ${email});

    // Show alert popup
    const popup = document.getElementById('alertPopup');
    popup.classList.remove('hidden');
    setTimeout(() => popup.classList.add('hidden'), 3000);
}
