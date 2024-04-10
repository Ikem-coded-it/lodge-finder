import Main from "@/app/ui/components/Main"
import DashboardHeader from "@/app/ui/components/Dashboard/header";
import Button from "@/app/ui/components/Button";

export default function EditProfilePage() {
    return(
        <Main>
            <DashboardHeader text="SET UP PROFILE">
                <Button
                className="w-[52px] h-[35px]"
                text="Save"
                bg
                />
            </DashboardHeader>
        </Main>
    )
}