import { IoWaterOutline } from "react-icons/io5";
import { BsLightningCharge } from "react-icons/bs";
import { GrUserPolice } from "react-icons/gr";
import { FaRegLightbulb } from "react-icons/fa6";
import { CiTrash } from "react-icons/ci";

interface IExtraInfo {
  hasBackupPower?: "yes" | "no" | undefined;
  hasRunningWater?: "yes" | "no" | undefined;
  hasSecurity?: "yes" | "no" | undefined;
  sanitationBill?: number | undefined;
  lightBill?: number | undefined;
}

export default function ExtraInfo({
  hasBackupPower,
  hasRunningWater,
  hasSecurity,
  sanitationBill,
  lightBill,
}: IExtraInfo) {
  return (
    <div className="flex justify-start items-center gap-[15px] h-[fit-content]">
      <div className="w-[144px] h-[fit-content] flex justify-between items-center">
        <div className="flex flex-col items-center justify-center font-[500] text-[9px] w-[70%] gap-[5px]">
          <IoWaterOutline size="18px" color="#000000" />
          RUNNING WATER
        </div>

        <div className="w-[38px] h-[21px] bg-[#F0F4F8] flex justify-center items-center rounded-[50px] font-[500] text-[9px]">
          {hasRunningWater}
          {/* YES */}
        </div>
      </div>

      <div className="w-[144px] h-[fit-content] flex justify-between items-center">
        <div className="flex flex-col items-center justify-center font-[500] text-[9px] w-[70%] gap-[5px]">
          <BsLightningCharge size="18px" color="#000000" />
          BACKUP POWER
        </div>

        <div className="w-[38px] h-[21px] bg-[#F0F4F8] flex justify-center items-center rounded-[50px] font-[500] text-[9px]">
          {/* YES */}
          {hasRunningWater}
        </div>
      </div>

      <div className="w-[144px] h-[fit-content] flex justify-between items-center">
        <div className="flex flex-col items-center justify-center font-[500] text-[9px] w-[70%] gap-[5px]">
          <GrUserPolice size="18px" color="#000000" />
          SECURITY
        </div>

        <div className="w-[38px] h-[21px] bg-[#F0F4F8] flex justify-center items-center rounded-[50px] font-[500] text-[9px]">
          {/* YES */}
          {hasSecurity}
        </div>
      </div>

      <div className="w-[144px] h-[fit-content] flex justify-between items-center">
        <div className="flex flex-col items-center justify-center font-[500] text-[9px] w-[70%] gap-[5px]">
          <FaRegLightbulb size="18px" color="#000000" />
          LIGHT BILL
        </div>

        <div className="w-[84px] h-[21px] bg-[#F0F4F8] flex justify-center items-center rounded-[50px] font-[500] text-[9px]">
          {lightBill}/per month
        </div>
      </div>

      <div className="w-[144px] h-[fit-content] flex justify-between items-center">
        <div className="flex flex-col items-center justify-center font-[500] text-[9px] w-[70%] gap-[5px]">
          <CiTrash size="18px" color="#000000" />
          SANITATION BILL
        </div>

        <div className="w-[84px] h-[21px] bg-[#F0F4F8] flex justify-center items-center rounded-[50px] font-[500] text-[9px]">
          {sanitationBill}/per month
        </div>
      </div>
    </div>
  );
}
