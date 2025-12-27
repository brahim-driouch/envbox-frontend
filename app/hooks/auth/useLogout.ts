import { useMutation } from "@tanstack/react-query";
import { logoutAction } from "@/app/actions/userActions/logoutAction";

export const useLogout = () => {
    return useMutation({
        mutationFn: async () => logoutAction()
    });
}