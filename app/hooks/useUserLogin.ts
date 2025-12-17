import { IUserLoginPayload } from "@/types/userTypes"
import { useMutation } from "@tanstack/react-query"
import { loginUserAction } from "../actions/userActions/loginUserAction"





export const useUserLogin=()=>{

    return useMutation({
        mutationFn:(fomData:IUserLoginPayload)=>loginUserAction(fomData)
    })
}