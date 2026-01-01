import { resendVerificationAction } from "@/app/actions/userActions/resendVerificationAction";
import { useMutation } from "@tanstack/react-query";






export const useResendVerification = () => {
    return useMutation({
        mutationFn: (email:string) => resendVerificationAction(email)
    });
}
