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
		showError()
	}
})
email.addEventListener('input', () => {
	if (email.validity.valid) {
		emailError.textContent = ''
		emailError.className = 'error'
	} else {
		showError()
	}
})
password.addEventListener('input', () => {
	if (password.validity.valid) {
		passwordError.textContent = ''
		passwordError.className = 'error'
	} else {
		showError()
	}
})
passwordVerify.addEventListener('input', () => {
	if (passwordVerify.validity.valid) {
		passwordVerifyError.textContent = ''
		passwordVerifyError.className = 'error'
	} else {
		showError()
	}
})

form.addEventListener('submit', (e) => {
	if (
		!firstName.validity.valid ||
		!email.validity.valid ||
		!password.validity.valid ||
		!passwordVerify.validity.valid
	) {
		showError()
		e.preventDefault()
	}
})

// #first-name, email, password, password-verify
function showError() {
	if (firstName.validity.valueMissing) {
		nameError.textContent = 'Please enter a name'
	}
}
