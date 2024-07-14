import $http from "@/app/lib/services/$http";
import { toast } from "react-toastify";

class PaymentService{
    async triggerCheckout(packageId: number) {
        try {
            const response = await $http.post('/api/checkout/initialize-transaction', {packageId})
            if(response?.status == 201) return response?.data
        } catch (e: any) {
            console.log(e)
            toast?.error(e?.response?.data?.message ?? e?.message)
        }
    }

    async verifyPayment(reference: string, trxref: string) {
        try {
            const response = await $http.post('/api/checkout/verify-transaction', {reference, trxref})
            if(response?.status == 200) return response?.data
        } catch (e: any) {
            console.log(e)
            toast?.error(e?.response?.data?.message ?? e?.message)
        }
    }
}

const paymentService = new PaymentService()
export default paymentService;