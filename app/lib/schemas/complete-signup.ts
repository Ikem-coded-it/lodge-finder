import * as yup from 'yup';

const completeSignupSchema = yup.object().shape({
    firstName: yup.string()
        .max(60, "*Too long")
        .trim()
        .required('First name is required'),
    lastName: yup.string()
        .max(60, "*Too long")
        .trim()
        .required('Last name is required'),
    callNumber: yup.string()
        .min(14, "Invalid call number format")
        .max(17, "Invalid call number format")
        // .matches(/^\+\d{1,3} \d{3} \d{3} \d{4}$/, 'Invalid call number format')
        .trim()
        .required('Call number is required'),
    whatsappNumber: yup.string()
        .min(14, "Invalid whatsapp number format")
        .max(17, "Invalid whatsapp number format")
        // .matches(/^\+\d{1,3} \d{3} \d{3} \d{4}$/, 'Invalid whatsapp number format')
        .trim()
        .required('Whatsapp number is required'),
    // imageURL: yup.string()
    //     .url('Invalid image URL format')
    //     .required('Image URL is required'),
  });

  export default completeSignupSchema;