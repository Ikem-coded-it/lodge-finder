import ContactUsMessage from "@/app/lib/definitions/contact-us-message";

export const validateContactUsMessage = (values: ContactUsMessage) => {
  const errors: any = {};

  if (!values.fullName) {
    errors.fullName = 'Required';
  }  else if (values.fullName.length < 3) {
    errors.fullName = 'Must be 3 characters and above';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.message) {
    errors.message = 'Required';
  } else if (values.message.length < 3) {
    errors.message = 'Must be 3 characters and above';
  }

  return errors;
};