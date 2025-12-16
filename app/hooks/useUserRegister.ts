import { IUserRegisterPayload } from "@/types/userTypes";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../actions/userActions/registerAction";




export const useUserRegister = () => {
    return useMutation({
     mutationFn: async (formData:IUserRegisterPayload)=>registerUser(formData),
      
})
}