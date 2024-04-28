document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Form validation and submission code here
    alert('Signup form submitted!');
});

document.getElementById('signinForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Form validation and submission code here
    alert('Signin form submitted!');
});
const toggleButton = document.getElementById('toggleButton');
const hiddenContent = document.getElementById('hiddenContent');

toggleButton.addEventListener('click', function() {
    if (hiddenContent.classList.contains('hidden')) {
        hiddenContent.classList.remove('hidden');
        toggleButton.textContent = 'Click to hide content';
    } else {
        hiddenContent.classList.add('hidden');
        toggleButton.textContent = 'Click to see content';
    }
});
