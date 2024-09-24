import Modal from "@/app/ui/components/Modal";
import { Vacancy } from "@/app/lib/definitions/vacancy";
import ApplicationRoutes from "@/app/config/routes";
import $http from "@/app/lib/services/$http";
import { AxiosError } from "axios";
import router from "next/router";
import { toast } from "react-toastify";
import { useState } from "react";
import { ImCoinDollar } from "react-icons/im";
import Button from "../../Button";
import ColorRingSpinner from "../../spinner";
import Link from "next/link";

export default function CreateVacancyModal({ isOpen, onClose, formValues }: {
    isOpen: boolean,
    onClose: () => void,
    formValues: Vacancy | null
}) {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            const res = await $http.post("/api/vacancy", formValues);
            if (res.status == 201) {
              toast.success(res?.data?.message);
              setIsSubmitting(false);
              router.push(ApplicationRoutes.DASHBOARD.VACANCIES.VIEW);
            } else {
              toast.error(res?.data?.message);
            }
        } catch (error: AxiosError | any) {
            const message = error?.response?.data?.message || "Something went wrong";
            toast.error(message);
            console.log("error", error);
        } finally {
            setIsSubmitting(false);
            onClose();
        }
    }
    return (
        <Modal isOpen={isOpen} closeModal={onClose} title="Upload Vacancy">
            <div className="flex items-center gap-2 w-full justify-center">
                <h1 className="text-2xl">1</h1>
                <ImCoinDollar size="30px" color="#000"/>
            </div>

            <p className="text-center text-lg">
                You will be charged 1 credit for uploading a vacancy
            </p>

            <div className="flex flex-col md:flex-row items-center gap-2 w-full justify-center">
                <Button
                text="Upload vacancy"
                type="submit"
                onClick={handleSubmit}
                disabled={isSubmitting}
                bg
                className="w-[250px] h-[50px] mt-2"
                >
                {isSubmitting ? <ColorRingSpinner size={50} /> : null}
                </Button>

                <Link href={ApplicationRoutes.DASHBOARD.PACKAGES.VIEW}>
                    <Button
                    text="Purchase credits"
                    border
                    className="w-[250px] h-[50px] mt-2"
                    />
                </Link>
            </div>
        </Modal>
    )
}
