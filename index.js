// #first-name, email, password, password-verify

const form = document.querySelector('form')
const firstName = document.getElementById('first-name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordVerify = document.getElementById('pasword-verify')
const nameError = document.querySelector('#first-name + span.error')
const emailError = document.querySelector('#email + span.error')
const passwordError = document.querySelector('#password + span.error')
const passwordVerifyError = document.querySelector(
	'#password-verify + span.error'
)

firstName.addEventListener('input', () => {
	if (firstName.validity.valid) {
		nameError.textContent = ''
		nameError.className = 'error'
	} else {
		showNameError()
	}
})
email.addEventListener('input', () => {
	if (email.validity.valid) {
		emailError.textContent = ''
		emailError.className = 'error'
	} else {
		showEmailError()
	}
})
password.addEventListener('input', () => {
	if (password.validity.valid) {
		passwordError.textContent = ''
		passwordError.className = 'error'
	} else {
		showPasswordError()
	}
})
passwordVerify.addEventListener('input', () => {
	if (passwordVerify.validity.valid) {
		passwordVerifyError.textContent = ''
		passwordVerifyError.className = 'error'
	} else {
		showPasswordVerifyError()
	}
})

form.addEventListener('submit', (e) => {
	if (
		!firstName.validity.valid ||
		!email.validity.valid ||
		!password.validity.valid ||
		!passwordVerify.validity.valid
	) {
		alert('Please fill in the required areas')
		e.preventDefault()
	}
})

// #first-name, email, password, password-verify
function showNameError() {
	if (firstName.validity.valueMissing) {
		nameError.textContent = 'Please enter a name'
	}
	nameError.className = 'error active'
}

function showEmailError() {
	if (email.validity.valueMissing) {
		emailError.textContent = 'You need to enter an email address.'
	} else if (email.validity.typeMismatch) {
		emailError.textContent = 'Please enter a valid email address'
	}
	emailError.className = 'error active'
}

function showPasswordError() {
	if (password.validity.valueMissing) {
		passwordError.textContent = 'Please enter a password'
	}
	passwordError.className = 'error active'
}

function showPasswordVerifyError() {
	if (passwordVerify.validity.valueMissing) {
		passwordVerifyError.textContent = 'Please repeat the password'
	} else if (passwordVerify.value !== password.value) {
		passwordVerifyError.textContent = 'Password does not match'
	}
	passwordVerifyError.className = 'error active'
}
