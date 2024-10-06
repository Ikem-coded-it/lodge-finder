import $http from "@/app/lib/services/$http";
import { toast } from "react-toastify";
import { DonationType } from "@/app/lib/definitions/donation";

class DonationService{
    async triggerDonationCheckout(payload: DonationType) {
        try {
            const response = await $http.post('/api/donation/initialize-transaction', payload)
            if(response?.status == 201) return response?.data
        } catch (e: any) {
            console.log(e)
            toast?.error(e?.response?.data?.message ?? e?.message)
        }
    }

    async verifyDonationPayment(reference: string, trxref: string) {
        try {
            const response = await $http.post('/api/donation/verify-transaction', {reference, trxref})
            if(response?.status == 200) return response?.data
        } catch (e: any) {
            console.log(e)
            toast?.error(e?.response?.data?.message ?? e?.message)
        }
    }
}

const donationService = new DonationService()
export default donationService;