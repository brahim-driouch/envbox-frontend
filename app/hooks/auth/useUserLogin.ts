import { loginUserAction } from "@/app/actions/userActions/loginUserAction"
import { IUserLoginPayload } from "@/types/userTypes"
import { useMutation } from "@tanstack/react-query"





export const useUserLogin=()=>{

    return useMutation({
        mutationFn:(formData:IUserLoginPayload)=>loginUserAction(formData)
    })
}