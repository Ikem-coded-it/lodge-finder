'use client'
import Main from "@/app/ui/components/Main"
import { Formik } from "formik";
import EditProfileForm from "@/app/ui/components/Dashboard/profile/edit/form";
import caretakerSchema from "@/app/lib/schemas/caretaker"
import { Caretaker } from "@/app/lib/definitions/caretaker";

export default function EditProfilePage() {
    const initialValues: Caretaker = {
        firstName: "Paul",
        lastName: "Emeribe",
        email: "paulemeribe@gmail.com",
        callNumber: "+234 813 851 8766",
        whatsappNumber: "+234 811 834 2406",
        imageURL: "/default-profile.png"
    }

    function handleSubmit(values:Caretaker) {
        console.log(values)
    }

    return(
        <Main>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={caretakerSchema}>
                {() => (
                    <EditProfileForm/>
                )}
            </Formik>
        </Main>
    )
}