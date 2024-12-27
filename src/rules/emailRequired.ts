import { Rules } from "../types";

export const emailRequired: Rules = {
    required: "Email is required",
    validate: (email) => {
        const regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!regExp.test(email?.toString() || "")) return "Invalid email format"
      }
}
