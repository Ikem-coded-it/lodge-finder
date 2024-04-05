"use client";
import Modal from "../../Modal";
import React from "react";
import DisplaySlider from "@/app/ui/components/Slider-display"
import { vacancyImagesUpload } from "@/app/lib/store/vacancy-form";

export default function ChooseImageModal({
    isOpen,
    closeModal
}: {
    isOpen: boolean,
    closeModal: () => void
}) {
    return (
        <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        title="Select images for your vacancy"
        >
            <DisplaySlider type="upload" data={vacancyImagesUpload}/>
        </Modal>
    )
}