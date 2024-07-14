'use client'
// Render Prop
import React from 'react';
import { useFormik } from 'formik';
import { CaretakerSignup } from "@/app/lib/definitions/caretaker";
import DynamicInputField from "@/app/ui/components/Form/input";
import InputContainer from "@/app/ui/components/Form/input-container";
import Button from "@/app/ui/components/Button";
import $http from "@/app/lib/services/$http";
import { AxiosError } from 'axios';
import { goToTop } from "@/app/lib/utils/window"
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { toast } from 'react-toastify';
import ColorRingSpinner from "@/app/ui/components/spinner";
import { useRouter } from "next/navigation";
import ApplicationRoutes from "@/app/config/routes";
import completeSignupSchema from "@/app/lib/schemas/complete-signup";

const CompleteSignupForm = ({...user}: any) => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    goToTop()
  }, [])

  const formik = useFormik({
    initialValues: {
      reference: user?.sub ?? uuid(),
      username: user?.nickname ?? "",
      firstName: user?.given_name ?? '',
      lastName: user?.family_name ?? '',
      email: user?.email ?? '',
      callNumber: '',
      whatsappNumber: '',
    } as CaretakerSignup,

    validationSchema: completeSignupSchema,

    onSubmit: async (values: any) => {
      setSubmitting(true)
      try {
        const res = await $http.post("/api/caretaker", values)
        if(res.status == 201) {
          toast.success("Profile created successfully")
          setSubmitting(false);
          router.push(ApplicationRoutes.DASHBOARD.VACANCIES.VIEW)
        }
      } catch (error: AxiosError | any) {
        toast.error("Something went wrong")
        console.log(error.message)
      }
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
        error={formik.errors.firstName as string}
        touched={formik.touched.firstName as boolean}
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
        error={formik.errors.lastName as string}
        touched={formik.touched.lastName as boolean}
        className="w-full md:w-2/4"
        />
      </InputContainer>

      <InputContainer>
        <DynamicInputField
        type="text"
        name="callNumber"
        label="Call number"
        placeholder="+234..."
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.callNumber}
        error={formik.errors.callNumber as string}
        touched={formik.touched.callNumber as boolean}
        className="w-full md:w-1/2"
        />

        <DynamicInputField
        type="text"
        name="whatsappNumber"
        label="Whatsapp number"
        placeholder="+234..."
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.whatsappNumber}
        error={formik.errors.whatsappNumber as string}
        touched={formik.touched.whatsappNumber as boolean}
        className="w-full md:w-1/2"
        />
      </InputContainer>

      <Button
      bg
      type="submit"
      className="w-[150px] h-[35px] mt-[20px]"
      disabled={submitting}
      >
        {
          submitting == true ? <ColorRingSpinner/> : "Finish"
        }
      </Button>
    </form>
  )
}

export default CompleteSignupForm;

