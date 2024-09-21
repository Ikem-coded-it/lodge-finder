"use client";
import Main from "@/app/ui/components/Main";
import { Formik } from "formik";
import EditProfileForm from "@/app/ui/components/Dashboard/profile/edit/form";
import caretakerSchema from "@/app/lib/schemas/caretaker";
import { Caretaker } from "@/app/lib/definitions/caretaker";
import { useCreateVacanciesContext } from "@/app/context/create-vacancies-context";
import { useEffect, useState } from "react";

export default function EditProfilePage() {
  const context = useCreateVacanciesContext();
  const [initialValues, setInitialValues] = useState<Caretaker>({
    firstName: "",
    lastName: "",
    email: "",
    callNumber: "",
    whatsappNumber: "",
    imageURL: "/default-profile.png",
  });

  useEffect(() => {
    if (context && context.caretaker) {
      setInitialValues({
        firstName: context.caretaker.firstName || "",
        lastName: context.caretaker.lastName || "",
        email: context.caretaker.email || "",
        callNumber: context.caretaker.callNumber || "",
        whatsappNumber: context.caretaker.whatsappNumber || "",
        imageURL: context.caretaker.imageURL || "/default-profile.png",
      });
    }
  }, [context]);

  function handleSubmit(values: Caretaker) {
    console.log(values);
  }

  return (
    <Main>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={caretakerSchema}
        enableReinitialize={true}
      >
        {() => <EditProfileForm />}
      </Formik>
    </Main>
  );
}
