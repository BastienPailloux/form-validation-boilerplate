// TODO: Validate this form
const inputs = document.querySelectorAll('.form-control')
const arrayOfAllInputs = Array.from(inputs);
const tos = document.querySelector('#tos')
const button = document.querySelector('button')
const email = document.querySelector('#email')

inputs.forEach((input) => {
  input.addEventListener("blur", (event) => {
    validateInput(event.target)
    enableButton();
  })

})

tos.addEventListener('change', (event) => {
  enableButton();
})


const enableButton = () => {
  const allFieldsValid = checkInputsValid(arrayOfAllInputs);
  const tosChecked = checkCheckBox(tos);

  if (allFieldsValid && tosChecked) {
    button.disabled = false;
  } else {
    console.log(allFieldsValid)
    console.log(tosChecked)
    button.disabled = true;
  }
}

const checkCheckBox = (input) => {
  return input.checked;
}

const checkInputsValid = (inputs) => {
  return inputs.every((input) => {
    return input.classList.contains("is-valid")
  })
}

const validateInput = (input) => {
  if (input === email) {
    checkEmail(input)
  } else {
    isNotEmpty(input)
  }
}

const checkEmail = (input) => {
  const isValid = /^\w+@\w+(\.\w{2,6})+$/.test(input.value)
  if (isValid) {
    input.classList.add('is-valid')
    input.classList.remove('is-invalid')
  } else {
    input.classList.add('is-invalid')
    input.classList.remove('is-valid')
  }
}

const isNotEmpty = (input) => {
if (input.value !== "") {
  input.classList.add('is-valid')
  input.classList.remove('is-invalid')
} else {
  input.classList.add('is-invalid')
  input.classList.remove('is-valid')
}
}
