import { IUserRegisterPayload } from "@/types/userTypes";



export default function validateNewUser(
 neUser:IUserRegisterPayload
): {errors: string[] | null,hasError: boolean}  {
    const errors: string[] = [];
  if (!neUser.fullname || !neUser.email || !neUser.password || !neUser.confirm_password) {
    errors.push("All fields are required.");
  }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(neUser.email)) {
    errors.push("Invalid email format.");
  } 
    if (neUser.password.length < 8) {
    errors.push("Password must be at least 8 characters long.");
  }
    if (neUser.password !== neUser.confirm_password) {
        errors.push("Passwords do not match.");
        }
        return {errors: errors.length > 0 ? errors : null, hasError: errors.length > 0};
}