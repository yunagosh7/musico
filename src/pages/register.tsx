import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IUser } from '../interfaces/User'
import Image from 'next/image'
import appLogo from "../app/assets/app-logo.svg";
import Link from 'next/link'


import { useRouter } from 'next/navigation'
import ControlledInput from '../app/components/controlled/ControlledInput'
import { emailRequired } from '../rules/emailRequired'
import { useAuthStore } from '../stores/AuthStore'

type FormDataType = { user: IUser }

const obj = 
{
  asd: 
  "hola"
}

export default function Register() {
  console.log(obj)
  const authStore = useAuthStore()
  const [apiError, setApiError] = useState("");

  const router = useRouter()

  const { control, handleSubmit, formState: { errors } } = useForm<{ user: IUser }>({
    defaultValues: {
      user: {
        email: '',
        password: ''
      }
    }
  })

  const onSubmit: SubmitHandler<FormDataType> = async ({ user }) => {
    setApiError("")
    try {
       await authStore.register({ 
        email: user.email!, 
        password: user.password 
      })
      router.push("/home");
    } catch (er) {
      console.error('Error singing in: ', er)
      setApiError(er.message)

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
              rules={emailRequired}
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
            {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
            {
              errors.user?.email?.message || 
              errors.user?.password?.message || 
              apiError?             
               <p className="text-red-500 text-xs italic mt-2">
                
              {errors.user?.email?.message || 
              errors.user?.password?.message ||
              apiError }
               </p> 
             : ""}
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Sign Up
            </button>
            <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/register">Register</Link>
          </div>
        </form>


      </div>
    </div>
  );
}
