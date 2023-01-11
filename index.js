// #first-name, email, password, password-verify

const form = document.querySelector('form')
const firstName = document.getElementById('first-name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordVerify = document.getElementById('password-verify')
const nameError = document.querySelector('#first-name + span.error')
const emailError = document.querySelector('#email + span.error')
const passwordError = document.querySelector('#password + span.error')
const passwordVerifyError = document.querySelector(
	'#password-verify + span.error'
)
const button = document.querySelector('button')

button.addEventListener('click', () => {
	const passwordOne = document.getElementById('password').value
	const passwordTwo = document.getElementById('password-verify').value
	if (passwordTwo !== passwordOne) {
		alert('Please enter matching passwords')
	}
})

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

form.addEventListener('submit', () => {
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

// form.addEventListener('submit', () => {
// 	alert('Please fill in the required areas')
// 	e.preventDefault()
// })

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
	const typedPassword = password.value
	if (password.validity.valueMissing) {
		passwordError.textContent = 'Please enter a password'
	}
	passwordError.className = 'error active'
	return typedPassword
}

function showPasswordVerifyError() {
	if (passwordVerify.validity.valueMissing) {
		passwordVerifyError.textContent = 'Please repeat the password'
	}
	passwordVerifyError.className = 'error active'
}
