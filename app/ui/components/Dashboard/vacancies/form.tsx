"use client"
import { Formik } from 'formik';
import { CiLocationOn } from "react-icons/ci";
import SliderFrame from "@/app/ui/components/SliderFrame";
import OptionsSlider from "@/app/ui/components/Dashboard/vacancies/options-slider";
import { Vacancy } from '@/app/lib/definitions/vacancy';
import DynamicInputField from '../../Form/input';
import CaretakerDetailsInput from "@/app/ui/components/Dashboard/vacancies/caretaker-details-input";
import Button from '../../Button';
import DisplaySlider from '../../Slider-display';
import { vacancyImagesUpload } from "@/app/lib/store/vacancy-form";
import VacancySchema from '@/app/lib/schemas/vacancy';

export default function VacancyForm({
    initialValues,
    validation,
    className,
}:{
    initialValues: Vacancy,
    validation: any,
    className?: string
}) {

    const formVacancyContainer = "flex flex-col items-center justify-start min-w-[320px] max-w-[320px]  md:min-w-[405px] md:max-w-[600px] lg:min-w-[990px] lg:max-w-[990px] rounded-[8px] p-[20px] gap-[20px] bg-whiteBg-default relative drop-shadow-md"

    const inputLabelContainerClasses = "flex flex-col items-start gap-[10px] h-fit w-full"
    const labelClasses = "font-[500] text-[#000000] text-[13px]"

    const uploadVacancy = (values: Vacancy) => {
        console.log(values)
    }

    return (
        <div className={'h-fit w-fit'}>
            <Formik initialValues={initialValues} onSubmit={uploadVacancy} validationSchema={VacancySchema}>
                {({ handleSubmit, handleChange, handleBlur, values, touched, errors }) => (
                     <form
                     onSubmit={handleSubmit}
                     className={formVacancyContainer}>
                        <div className={inputLabelContainerClasses}>
                            <label htmlFor='address' className={labelClasses}>
                                Lodge location in all CAPS
                            </label>
                            <div className="flex gap-1 justify-start items-start h-fit w-full">
                                 <CiLocationOn size="14px" color="#000000"/>
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
                                 <OptionsSlider/>
                             </SliderFrame>
                        </div>

                        <div className="flex flex-col lg:flex-row justify-start lg:justify-between items-start gap-[15px] mb-[20px] w-full">
                            {/* Lodge Picture slider */}
                            <DisplaySlider
                            type='upload'
                            data={vacancyImagesUpload}
                            imageErrors={errors.images}
                            imageTouched={touched.images}
                            className="min-w-full md:min-w-[500px] lg:min-w-[400px] lg:max-w-[400px] h-[340px] lg:h-[380px]"
                            />

                            <div className="flex flex-col justify-start items-center lg:items-start flex-1 h-[288px] md:w-full lg:w-auto">
                                <CaretakerDetailsInput/>

                                {/* Rent */}
                                <SliderFrame className="w-[300px] md:w-full h-fit py-2 mb-10 lg:mb-0">
                                    <div className="w-full h-fit flex justify-end items-center gap-[80px]">
                                  
                                        <div className="flex justify-start items-center gap-[40px]">
                                            <div className="w-fit h-fit flex flex-col justify-start items-start gap-[8px]">
                                                <label htmlFor='initialRent' className="text-[10px] text-lightFont-default">
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
                                                        {
                                                            errors.initialRent &&
                                                            touched.initialRent &&
                                                            <p className="text-red-500 text-xs">{errors.initialRent}</p>
                                                        }
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="w-fit h-fit flex flex-col justify-start items-start gap-[8px]">
                                                <label htmlFor='subsequentRent' className="text-[10px] text-lightFont-default">
                                                    SUBSEQUENT RENT
                                                </label>
                                                <div className="flex items-center gap-2 w-fit">
                                                    <span  className="font-bold">₦</span>
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
                                                        {
                                                            errors.subsequentRent &&
                                                            touched.subsequentRent &&
                                                            <p className="text-red-500 text-xs">{errors.subsequentRent}</p>
                                                        }
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
                        className='w-[250px] h-[50px] mt-2 bg-yellow-600 text-white'
                        />
                     </form>
                )}
            </Formik>
        </div>
    )
}