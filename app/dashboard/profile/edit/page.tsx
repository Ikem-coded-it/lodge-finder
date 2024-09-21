"use client";
import Main from "@/app/ui/components/Main";
import { Formik } from "formik";
import EditProfileForm from "@/app/ui/components/Dashboard/profile/edit/form";
import caretakerSchema from "@/app/lib/schemas/caretaker";
import { Caretaker } from "@/app/lib/definitions/caretaker";
import { useEffect, useState } from "react";
import $http from "@/app/lib/services/$http";
import { toast } from "react-toastify";
import { useCaretakerContext } from "@/app/context/caretaker-context";

export default function EditProfilePage() {
  const context = useCaretakerContext();
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

  async function handleSubmit(values: Caretaker) {
    try {
      const { data } = await $http.put("/api/caretaker", values);

      toast.success("Profile updated successfully");

      // Optionally, update the context with the new caretaker data
      if (context && context.setCaretaker) {
        context.setCaretaker(data.caretaker);
      }
    } catch (error: any) {
      toast.error(
        error.response?.data?.message ||
          "An error occurred while updating the profile"
      );
    }
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
