import { IUserRegisterPayload } from "@/types/userTypes";
import { useMutation } from "@tanstack/react-query";
import {  registerUserAcion } from "../actions/userActions/registerAction";




export const useUserRegister = () => {
    return useMutation({
     mutationFn: async (formData:IUserRegisterPayload)=>registerUserAcion(formData),
      
})
}