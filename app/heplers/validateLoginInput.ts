


import { IUserLoginPayload, IUserRegisterPayload } from "@/types/userTypes";



export default function validateLoginInput(
 neUser:IUserLoginPayload
): {errors: string[] | null,hasError: boolean}  {
    const errors: string[] = [];
  if ( !neUser.email || !neUser.password ) {
    errors.push("All fields are required.");
  }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(neUser.email)) {
    errors.push("Invalid email format.");
  } 
    if (neUser.password.length < 8) {
    errors.push("Password must be at least 8 characters long.");
  }
    
        return {errors: errors.length > 0 ? errors : null, hasError: errors.length > 0};
}