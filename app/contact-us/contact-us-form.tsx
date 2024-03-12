'use client'
// Render Prop

import React from 'react';
import { useFormik } from 'formik';
import { validateContactUsMessage } from "./validator";
import DynamicInputField from "@/app/ui/components/Form/input";
import ContactUsMessage from "@/app/lib/definitions/contact-us-message";
import InputContainer from "@/app/ui/components/Form/input-container";
import Button from "@/app/ui/components/Button";

const ContactUsForm = () => {

  const formik = useFormik({
    initialValues: {
        fullName: '',
        email: '',
        message: ''
    } as ContactUsMessage,

    validate: validateContactUsMessage as any,

    onSubmit: (values: any, { setSubmitting }: { setSubmitting: any } ) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    },
  });

  return(
    <form
    onSubmit={formik.handleSubmit}
    className="w-full h-fit flex flex-col gap-3">
      
      <DynamicInputField
      type="text"
      name="fullName"
      label="Full name"
      placeholder="Emeka Okafor"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.fullName}
      error={formik.errors.fullName}
      touched={formik.touched.fullName}
      className="w-full"
      />

      <DynamicInputField
      type="email"
      name="email"
      label="Email"
      placeholder="emekaokafor@mail.com"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.email}
      error={formik.errors.email}
      touched={formik.touched.email}
      className="w-full"
      />

    <DynamicInputField
      type="textarea"
      name="message"
      label="Message"
      placeholder="Type in your message"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.message}
      error={formik.errors.message}
      touched={formik.touched.message}
      className="w-full"
      />

      <InputContainer>
        <Button
        bg
        type="submit"
        text="Send"
        className="w-[150px] h-[35px] mt-[20px]"
        />
      </InputContainer>

      <p className="text-[12px] font-[500] text-darkFont-default mt-10">
        or send us an email - 
        <span>helpdesk@lodgefinders.com</span>
      </p>
    </form>
  )
}

export default ContactUsForm;

