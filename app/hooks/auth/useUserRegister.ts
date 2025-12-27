import { registerUserAcion } from "@/app/actions/userActions/registerAction";
import { IUserRegisterPayload } from "@/types/userTypes";
import { useMutation } from "@tanstack/react-query";




export const useUserRegister = () => {
    return useMutation({
     mutationFn: async (formData:IUserRegisterPayload)=>registerUserAcion(formData),
      
})
}