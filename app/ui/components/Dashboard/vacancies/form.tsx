"use client";
import { Formik, FormikHelpers } from "formik";
import { CiLocationOn } from "react-icons/ci";
import SliderFrame from "@/app/ui/components/SliderFrame";
import OptionsSlider from "@/app/ui/components/Dashboard/vacancies/options-slider";
import { Vacancy } from "@/app/lib/definitions/vacancy";
import DynamicInputField from "../../Form/input";
import CaretakerDetailsInput from "@/app/ui/components/Dashboard/vacancies/caretaker-details-input";
import Button from "../../Button";
import DisplaySlider from "../../Slider-display";
import { vacancyImagesUpload } from "@/app/lib/store/vacancy-form";
import VacancySchema from "@/app/lib/schemas/vacancy";
import { toast } from "react-toastify";
import ApplicationRoutes from "@/app/config/routes";
import ColorRingSpinner from "@/app/ui/components/spinner";
import { AxiosError } from "axios";
import { useParams, useRouter } from "next/navigation";
import $http from "@/app/lib/services/$http";
import { IVacancy } from "@/app/lib/models/vacancy";
import { useCaretakerContext } from "@/app/context/caretaker-context";
import CreateVacancyModal from "./create-vacancy-modal";
import { useState } from "react";

export default function VacancyForm({
  initialValues,
  validation,
  className,
}: {
  initialValues: Vacancy | null;
  validation: any;
  className?: string;
}) {
  const router = useRouter();
  const context = useCaretakerContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState<Vacancy | null>(null);

  // ID of a created vacancy for edit
  const { id } = useParams();

  const formVacancyContainer =
    "flex flex-col items-center justify-start min-w-[320px] max-w-[450px]  md:min-w-[405px] md:max-w-[600px] lg:min-w-[990px] lg:max-w-[990px] rounded-[8px] p-[20px] gap-[20px] bg-whiteBg-default relative drop-shadow-md ";

  const inputLabelContainerClasses =
    "flex flex-col items-start gap-[10px] h-fit w-full";
  const labelClasses = "font-[500] text-[#000000] text-[13px]";

  const uploadVacancy = async (
    values: Vacancy,
    { setSubmitting }: { setSubmitting: any }
  ) => {
    values.caretakerName = `${context?.caretaker?.firstName} ${context?.caretaker?.lastName}`;
    values.phoneNumber = context?.caretaker?.callNumber;
    values.whatsAppNumber = context?.caretaker?.whatsappNumber;
    setFormValues(values);
    setIsModalOpen(true);
  };

  const editVacancy = async (
    values: Vacancy,
    { setSubmitting }: { setSubmitting: any }
  ) => {
    setSubmitting(true);
    try {
      // Update caretaker details
      values.caretakerName = `${context?.caretaker?.firstName} ${context?.caretaker?.lastName}`;
      values.phoneNumber = context?.caretaker?.callNumber;
      values.whatsAppNumber = context?.caretaker?.whatsappNumber;

      const res = await $http.put(`/api/vacancy/${id}`, values);

      if (res.status === 200) {
        toast.success("Vacancy updated successfully");
        setSubmitting(false);
        router.push(ApplicationRoutes.DASHBOARD.VACANCIES.VIEW);
      }
    } catch (error: AxiosError | any) {
      toast.error("Failed to update vacancy");
      console.error(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={"h-fit w-full"}>
      <Formik
        initialValues={{
          id: initialValues?.id || "",
          lodgeAddress: initialValues?.lodgeAddress || "",
          lodgeName: initialValues?.lodgeName || "",
          initialRent: initialValues?.initialRent || "",
          subsequentRent: initialValues?.subsequentRent || "",
          images: initialValues?.images || {
            buildingImageURL: "",
            roomImageURL: "",
            balconyImageURL: "",
            bathroomImageURL: "",
            kitchenImageURL: "",
          },
          additionalInfo: initialValues?.additionalInfo || "",
          caretakerName: `${context?.caretaker?.firstName || ""} ${context?.caretaker?.lastName || ""}`,
          phoneNumber: context?.caretaker?.callNumber || "",
          whatsAppNumber: context?.caretaker?.whatsappNumber || "",
          // caretaker_sub: initialValues?.caretaker_sub || "",
          hasRunningWater: initialValues?.hasRunningWater || "no",
          hasBackupPower: initialValues?.hasBackupPower || "no",
          hasSecurity: initialValues?.hasSecurity || "no",
          sanitationBill: initialValues?.sanitationBill || 0,
          lightBill: initialValues?.lightBill || 0,
        }}
        onSubmit={(values, FormikHelpers) =>
          id
            ? editVacancy(values as Vacancy, {
                setSubmitting: FormikHelpers.setSubmitting,
              })
            : uploadVacancy(values as Vacancy, {
                setSubmitting: FormikHelpers.setSubmitting,
              })
        }
        validationSchema={VacancySchema}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          errors,
          isValid,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className={formVacancyContainer}>
            <div className={inputLabelContainerClasses}>
              <label htmlFor="address" className={labelClasses}>
                Lodge location in all CAPS
              </label>
              <div className="flex gap-1 justify-start items-start h-fit w-full">
                {/* <CiLocationOn size="14px" color="#000000" /> */}
                <DynamicInputField
                  className="w-full"
                  name="lodgeAddress"
                  type="text"
                  placeholder="Enter the address of the lodge"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lodgeAddress}
                  error={errors.lodgeAddress}
                  touched={touched.lodgeAddress}
                />
              </div>
            </div>

            <DynamicInputField
              className="w-full"
              inputClassName="text-[19px]"
              label="Lodge name"
              name="lodgeName"
              type="text"
              placeholder="Enter the name of the lodge"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lodgeName}
              error={errors.lodgeName}
              touched={touched.lodgeName}
            />

            <div className={inputLabelContainerClasses}>
              <h3 className={labelClasses}>
                Select or enter the correct detail for each section
              </h3>
              <SliderFrame>
                <OptionsSlider />
              </SliderFrame>
            </div>

            <div className="flex flex-col lg:flex-row justify-start lg:justify-between items-start gap-[15px] mb-[20px] w-full">
              {/* Lodge Picture slider */}
              <DisplaySlider
                type="upload"
                data={vacancyImagesUpload}
                imageErrors={errors.images}
                imageTouched={touched.images}
                className="min-w-full md:min-w-[500px] lg:min-w-[400px] lg:max-w-[400px] h-[340px] lg:h-[380px]"
              />

              <div className="flex flex-col justify-start items-center lg:items-start flex-1 h-[288px] md:w-full lg:w-auto">
                <CaretakerDetailsInput />

                {/* Rent */}
                <SliderFrame className="w-[300px] md:w-full h-fit py-2 mb-10 lg:mb-0">
                  <div className="w-full h-fit flex justify-end items-center gap-[80px]">
                    <div className="flex justify-start items-center gap-[40px]">
                      <div className="w-fit h-fit flex flex-col justify-start items-start gap-[8px]">
                        <label
                          htmlFor="initialRent"
                          className="text-[10px] text-lightFont-default"
                        >
                          INITIAL RENT
                        </label>
                        <div className="flex items-center gap-2">
                          <span className="font-bold">₦</span>
                          <div className="flex flex-col gap-1">
                            <input
                              type="number"
                              value={values.initialRent as number}
                              name="initialRent"
                              id="initialRent"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className="w-[80px] h-[27px] rounded-[5px] border-[1px] border-darkBlue-default outline-0 p-1 bg-transparent text-base"
                            />
                            {errors.initialRent && touched.initialRent && (
                              <p className="text-red-500 text-xs">
                                {errors.initialRent}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="w-fit h-fit flex flex-col justify-start items-start gap-[8px]">
                        <label
                          htmlFor="subsequentRent"
                          className="text-[10px] text-lightFont-default"
                        >
                          SUBSEQUENT RENT
                        </label>
                        <div className="flex items-center gap-2 w-fit">
                          <span className="font-bold">₦</span>
                          <div className="flex flex-col gap-1">
                            <input
                              type="number"
                              value={values.subsequentRent as number}
                              name="subsequentRent"
                              id="subsequentRent"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className="w-[80px] h-[27px] rounded-[5px] border-[1px] border-darkBlue-default outline-0 p-1 bg-transparent text-base"
                            />
                            {errors.subsequentRent &&
                              touched.subsequentRent && (
                                <p className="text-red-500 text-xs">
                                  {errors.subsequentRent}
                                </p>
                              )}
                          </div>
                          <span className="font-[500] text-[9px] text-lightFont-default inline">
                            /per year
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SliderFrame>
              </div>
            </div>

            <Button
              text="Upload vacancy"
              type="submit"
              disabled={!isValid || isSubmitting}
              bg
              className="w-[250px] h-[50px] mt-2"
            >
              {isSubmitting ? <ColorRingSpinner size={50} /> : null}
            </Button>
          </form>
        )}
      </Formik>

      <CreateVacancyModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      formValues={formValues}
      />
    </div>
  );
}
