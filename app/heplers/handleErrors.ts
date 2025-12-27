import { AxiosError, isAxiosError } from "axios";





export default function handleApiError(error:unknown) {
    if (isAxiosError(error)) {
        return error.response?.data.error || "An error occurred";
    }
    if (error instanceof Error) {
        return error.message;
    }
    return "An unknown error occurred";
}