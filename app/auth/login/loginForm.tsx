'use client'
// Render Prop

import React from 'react';
import { useFormik } from 'formik';
import { CaretakerLogin } from "@/app/lib/definitions/caretaker";
import { validateCaretakerLogin } from "./validator";
import DynamicInputField from "@/app/ui/components/Form/input";
import InputContainer from "@/app/ui/components/Form/input-container";
import Button from "@/app/ui/components/Button";
import Link from "next/link";

const LoginForm = () => {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    } as CaretakerLogin,

    validate: validateCaretakerLogin as any,

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

      <DynamicInputField
      type="password"
      name="password"
      label="Password"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.password}
      error={formik.errors.password}
      touched={formik.touched.password}
      className="w-full"
      />

      <InputContainer>
        <Button
        bg
        type="submit"
        text="Create account"
        className="w-[150px] h-[35px] mt-[20px]"
        />

        <Link href="/auth/forgot-password">
          <Button
          type="button"
          text="Forgot password"
          className="w-[150px] h-[35px] mt-[20px]"
          />
        </Link>
      </InputContainer>

      <p className="text-[12px] font-[500] text-darkFont-default mt-10">
        Don&apos;t have an account?
        <span className="font-[800]">
          <Link
          href="/auth/signup"
          className="text-blue-700"
          >
            {" " + "Sign up instead"}
          </Link>
        </span>
      </p>
    </form>
  )
}

export default LoginForm;

