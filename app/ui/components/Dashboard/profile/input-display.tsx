import { StringValidation } from "zod"
import DynamicInputField from "../../Form/input"
import { ChangeEvent } from "react";

export default function InputDisplay({
    type,
    label,
    value,
    onChange,
    onBlur,
    touched,
    name,
} : {
    type: 'input' | 'display'
    label: string
    value: string
    onChange: ChangeEvent<any> | any,
    onBlur: any,
    touched: boolean | undefined
    name: string
}) {

    const renderInput = () => (
        <DynamicInputField
        type="text"
        value={value}
        label={label}
        onChange={onChange}
        onBlur={onBlur}
        touched={touched}
        name={name}
        className=""
        />
    )

    const renderDisplay = () => (
        <div className="flex flex-col items-start gap-[15px]">
            <h2 className="font-[500] text-xs text-lightFont-default">
                {label}
            </h2>
            <p className="font-[500] text-sm text-darkFont-default">
                {value}
            </p>
        </div>
    )

    return(
        type === 'input' ? renderInput() : renderDisplay()
    )
}