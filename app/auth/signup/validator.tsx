import { CaretakerSignup } from "@/app/lib/definitions/caretaker"

export const validateCaretakerSignup = (values: CaretakerSignup) => {
  const errors: any = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length < 3) {
    errors.firstName = 'Must be 3 characters and above';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length < 3) {
    errors.lastName = 'Must be 3 characters and above';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(values.password)) {
    errors.password = 'Must contain an uppercase letter, lowercase letter and a number';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Required';
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Must match password';
  }

  if (!values.whatsappNumber) {
    errors.whatsappNumber = 'Required';
  } else if (!/^(234)(70|71|80|81|90|91)\d{8}$/.test(values.whatsappNumber.toString())) {
    console.log(values.whatsappNumber)
    errors.whatsappNumber = 'Enter a valid Nigerian phone number starting with +234';
  }

  if (!values.callNumber) {
    errors.callNumber = 'Required';
  } else if (!/^(234)(70|71|80|81|90|91)\d{8}$/.test(values.callNumber.toString())) {
    errors.callNumber = 'Enter a valid Nigerian phone number starting with +234';
  }

  return errors;
};