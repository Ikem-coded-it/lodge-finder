"use client";

import DashboardHeader from "@/app/ui/components/Dashboard/header";
import Button from "@/app/ui/components/Button";
import EditImage from "@/app/ui/components/Dashboard/profile/edit/edit-image";
import DataColumn from "@/app/ui/components/Dashboard/profile/data-column";
import DynamicInputField from "@/app/ui/components/Form/input";
import { useFormikContext } from "formik";
import ColorRingSpinner from "../../../spinner";

export default function EditProfileForm() {
  const {
    handleBlur,
    handleChange,
    setFieldValue,
    values,
    errors,
    touched,
    handleSubmit,
    isSubmitting,
  } = useFormikContext<any>();

  return (
    <form
      onSubmit={handleSubmit}
      className="h-full w-full flex flex-col items-center justify-start"
    >
      <DashboardHeader text="SET UP PROFILE">
        <Button
          text="Save"
          type="submit"
          // disabled={!isValid || isSubmitting}
          bg
          className="w-[52px] h-[35px]"
        >
          {isSubmitting ? <ColorRingSpinner size={50} /> : null}
        </Button>
      </DashboardHeader>

      <section className="rounded-[8px] drop-shadow-md w-full min-h-[150px] max-h-fit flex flex-col lg:flex-row justify-start items-center gap-[50px] py-6 px-5 bg-whiteBg-default">
        <EditImage />

        <DataColumn>
          <DynamicInputField
            value={values.firstName}
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            label="First name"
            name="firstName"
            error={errors.firstName as string}
            touched={touched.firstName as boolean}
            className="w-[200px]"
          />

          <DynamicInputField
            value={values.lastName}
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            label="Last name"
            name="lastName"
            error={errors.lastName as string}
            touched={touched.lastName as boolean}
            className="w-[200px]"
          />
        </DataColumn>

        <DataColumn>
          <DynamicInputField
            value={values.email}
            type="email"
            onChange={handleChange}
            onBlur={handleBlur}
            label="Email"
            name="email"
            error={errors.email as string}
            touched={touched.email as boolean}
            className="w-[200px]"
          />
        </DataColumn>

        <DataColumn>
          <DynamicInputField
            value={values.callNumber}
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            label="Call number"
            name="callNumber"
            error={errors.callNumber as string}
            touched={touched.callNumber as boolean}
            className="w-[200px]"
            placeholder="*234..."
          />

          <DynamicInputField
            value={values.whatsappNumber}
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            label="Whatsapp number"
            name="whatsappNumber"
            error={errors.whatsappNumber as string}
            touched={touched.whatsappNumber as boolean}
            className="w-[200px]"
            placeholder="*234..."
          />
        </DataColumn>
      </section>
    </form>
  );
}
