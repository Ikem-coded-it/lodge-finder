import $http from "@/app/lib/services/$http";
import { toast } from "react-toastify"
import { AxiosError } from "axios";

class CaretakerService {
    async me() {
        try {
            const response = await $http.get("/api/caretaker?query=me")
            if(response?.status == 200) return response?.data
        } catch (error: any) {
            console.log(error)
            toast.error(error?.response?.data?.message ?? "Sorry, could not retrieve your information at this time")
        }
    }
}

const caretakerService = new CaretakerService()
export default caretakerService;