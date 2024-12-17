import appLogo from "../app/assets/app-logo.svg";
import Image from "next/image";
import Link from "next/link";
import { IUser } from "../interfaces/User";

import { SubmitHandler, useForm } from "react-hook-form";
import ControlledInput from "../app/components/controlled/ControlledInput";
import { useAuthStore } from "../stores/AuthStore";
import { useRouter } from "next/router";

type FormState = {
  user: Pick<IUser, "email" | "password">
}

export default function LogIn() {
  const authStore = useAuthStore()
  const router = useRouter()

  const { control, handleSubmit, formState: { errors } } = useForm<FormState>({
    defaultValues: {
      user: {
        email: '',
        password: ''
      }
    }
  })

  const onSubmit: SubmitHandler<FormState> = async ({ user }) => {

    try {
      await authStore.logIn({
        email: user.email!,
        password: user.password
      })
      router.push("/home")
    } catch(er) {
      console.error("Error logging in", er)
    }

  }

  return (
    <div className="flex flex-col py-12 px-6 justify-between h-dvh items-center">
      <div>
        <Image src={appLogo} alt="Application logo" />
      </div>
    
      <div className="flex w-full flex-col">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <ControlledInput
              type="email"
              control={control}
              name="user.email"
              className="input"
              rules={{
                required: "Email is required",
                validate: (email) => {
                  console.log(email)
                  const regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                  if (!regExp.test(email?.toString() || "")) return "Invalid email format"
                }
              }}
            />

          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <ControlledInput
              type="password"
              rules={{
                required: "Password is required",
              }}
              control={control}
              name="user.password"
              className="input" />
              {
              errors.user?.email?.message || 
              errors.user?.password?.message ?             
               <p className="text-red-500 text-xs italic">
                
              {errors.user?.email?.message || 
              errors.user?.password?.message}
               </p> 
             : ""}

          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Sign In
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          </div>
        </form>

        <Link className="text-center w-full" href="/register">Register</Link>

      </div>
    </div>
  );
}
