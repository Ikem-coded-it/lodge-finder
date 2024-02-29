'use client'
// Render Prop

import React from 'react';
import { useFormik } from 'formik';
import { CaretakerSignup } from "@/app/lib/definitions/caretaker";
import { validateCaretakerSignup } from "./validator";
import DynamicInputField from "@/app/ui/components/Form/input";
import InputContainer from "@/app/ui/components/Form/input-container";
import Button from "@/app/ui/components/Button";

const SignupForm = () => {

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      callNumber: '',
      whatsappNumber: '',
    } as CaretakerSignup,

    validate: validateCaretakerSignup as any,

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
      <InputContainer>
        <DynamicInputField
        type="text"
        name="firstName"
        label="First name"
        placeholder="Emeka"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
        error={formik.errors.firstName}
        touched={formik.touched.firstName}
        className="w-full md:w-2/4"
        />

        <DynamicInputField
        type="text"
        name="lastName"
        label="Last name"
        placeholder="Okafor"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
        error={formik.errors.lastName}
        touched={formik.touched.lastName}
        className="w-full md:w-2/4"
        />
      </InputContainer>
      
      <DynamicInputField
      type="email"
      name="email"
      label="Email"
      placeholder="emeka@gmail.com"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.email}
      error={formik.errors.email}
      touched={formik.touched.email}
      className="w-full"
      />

      <InputContainer>
        <DynamicInputField
        type="password"
        name="password"
        label="Password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        error={formik.errors.password}
        touched={formik.touched.password}
        className="w-full md:w-1/2"
        />

        <DynamicInputField
        type="password"
        name="confirmPassword"
        label="Confirm password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.confirmPassword}
        error={formik.errors.confirmPassword}
        touched={formik.touched.confirmPassword}
        className="w-full md:w-1/2"
        />
      </InputContainer>

      <InputContainer>
        <DynamicInputField
        type="number"
        name="callNumber"
        label="Call number"
        placeholder="+234..."
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.callNumber}
        error={formik.errors.callNumber}
        touched={formik.touched.callNumber}
        className="w-full md:w-1/2"
        />

        <DynamicInputField
        type="number"
        name="whatsappNumber"
        label="Whatsapp number"
        placeholder="+234..."
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.whatsappNumber}
        error={formik.errors.whatsappNumber}
        touched={formik.touched.whatsappNumber}
        className="w-full md:w-1/2"
        />
      </InputContainer>

      <Button
      bg
      type="submit"
      text="Create account"
      className="w-[150px] h-[35px] mt-[20px]"
      />
    </form>
  )
}

export default SignupForm;

