const form = document.querySelector('form')
const firstName = document.querySelector('#first-name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const passwordVerify = document.querySelector('#password-verify')
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
	if (passwordVerify.validity.valid || passwordVerify.value == '') {
		passwordVerifyError.textContent = ''
		passwordVerifyError.className = 'error'
	} else {
		showPasswordVerifyError()
	}
})

form.addEventListener('submit', (event) => {
	if (firstName.validity.valueMissing) {
		showNameError()
	} else if (email.validity.valueMissing) {
		showEmailError()
	} else if (password.validity.valueMissing) {
		showPasswordError()
	} else if (passwordVerify.validity.valueMissing) {
		showPasswordVerifyError()
	} else if (password.value != passwordVerify.value) {
		validateError()
	}
	event.preventDefault()
})

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
	}
	passwordVerifyError.className = 'error active'
}

function validateError() {
	passwordVerifyError.textContent =
		'Please make sure the passwords are matching'
	passwordVerifyError.className = 'error active'
}
