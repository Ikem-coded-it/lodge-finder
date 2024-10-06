"use client"
import { Formik } from "formik";
import { DonationFormQuestions } from "@/app/lib/store/donation-form";
import DynamicInputField from "../ui/components/Form/input";
import Button from "../ui/components/Button";
import ColorRingSpinner from "../ui/components/spinner";
import { DonationType } from "@/app/lib/definitions/donation";
import donationService from "@/app/lib/services/donation.service";
import { toast } from "react-toastify";

export default function DonationForm() {
    const questions = DonationFormQuestions()

    const initialValues: DonationType = {
        fullName: "",
        amount: 0,
        email: "",
        testimonial: ""
    }
    
    const handleSubmit = async(
        values: DonationType, 
        {setSubmitting}: {setSubmitting: (arg0: boolean) => void}
    ) => {
        setSubmitting(true)
        try {
            const {authorizationUrl} = await donationService.triggerDonationCheckout(values)
            window.location.href = authorizationUrl
        } catch (error) {
            console.log("error: ", error)
            toast.error("Could not generate checkout link")
        } finally {
            setSubmitting(false)
        }
    }

    return(
        <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        >
            {
                (({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    errors,
                    values,
                    touched,
                    isSubmitting
                }) => (
                    <form
                    onSubmit={handleSubmit}
                    className="w-full h-fit flex flex-col gap-3"
                    >
                        {
                            questions?.map((question) => (
                                <DynamicInputField
                                type={question?.type as string}
                                name={question?.key}
                                label={question?.label}
                                placeholder={question?.placeholder}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values?.[question.key as keyof DonationType]}
                                error={errors?.[question.key as keyof DonationType]}
                                touched={touched?.[question.key as keyof DonationType]}
                                className="min-w-full"
                                />
                            ))
                        }

                        <Button
                        bg
                        type="submit"
                        className="w-[150px] h-[35px] mt-[20px]"
                        disabled={isSubmitting}
                        >
                            {
                                isSubmitting == true ? <ColorRingSpinner/> : "Donate"
                            }
                        </Button>
                    </form>
                ))
            }
        </Formik>
    )
}