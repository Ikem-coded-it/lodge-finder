import { ChangeEvent } from "react";

export default function ChooseImageBtn({
  name,
  onChange,
  onBlur,
  id,
}: {
  id?: string;
  name: string;
  onChange: ChangeEvent<any> | any;
  onBlur: any;
}) {
  return (
    <div className="relative">
      <label
        htmlFor={name}
        className="p-0 flex justify-center items-center text-darkFontBlue-default rounded-[50px] text-[14px] hover:bg-blue-600 hover:text-slate-50 transition-all ease-out duration-[.2s] border-[1px] border-darkBlue-default w-[100px] cursor-pointer"
      >
        choose image
      </label>

      <input
        type="file"
        id={id ?? name}
        name={name}
        accept="image/*"
        onChange={onChange}
        onBlur={onBlur}
        className="hidden"
      />
    </div>
  );
}
