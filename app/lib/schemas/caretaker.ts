import * as yup from 'yup';

const caretakerSchema = yup.object().shape({
    firstName: yup.string()
        .min(3, "*Too short")
        .max(60, "*Too long")
        .required('First name is required'),
    lastName: yup.string()
        .min(3, "*Too short")
        .max(60, "*Too long")
        .required('Last name is required'),
    email: yup.string()
        .email('Invalid email format')
        .required('Email is required'),
    callNumber: yup.string()
        .min(14, "Invalid call number format")
        .max(17, "Invalid call number format")
        .matches(/^\+\d{1,3} \d{3} \d{3} \d{4}$/, 'Invalid call number format')
        .required('Call number is required'),
    whatsappNumber: yup.string()
        .min(14, "Invalid whatsapp number format")
        .max(17, "Invalid whatsapp number format")
        .matches(/^\+\d{1,3} \d{3} \d{3} \d{4}$/, 'Invalid whatsapp number format')
        .required('Whatsapp number is required'),
    // imageURL: yup.string()
    //     .url('Invalid image URL format')
    //     .required('Image URL is required'),
  });

  export default caretakerSchema;