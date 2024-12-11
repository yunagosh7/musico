import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AuthService } from '../services/AuthService'
import { User } from '../interfaces/User'
import Image from 'next/image'
import appLogo from "../app/assets/app-logo.svg";
import Link from 'next/link'

import { useRouter } from 'next/navigation'



type FormDataType = { user: User }


export default function Register() {

  const router = useRouter()

  const { handleSubmit, register } = useForm<{ user: User }>({
    defaultValues: {
      user: {
        email: '',
        password: ''
      }
    }
  })

  const onSubmit: SubmitHandler<FormDataType> = async ({ user }) => {
    try {
      const res = await AuthService.register({ email: user.email, password: user.password })
      console.log(res);
      if(!res.error) return router.replace("/home");
      localStorage.setItem('token', JSON.stringify(res.data))

    } catch (er) {
      console.error('Error singing in: ', er)
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
            <input  {...register("user.email")} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input {...register("user.password")} className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
            {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
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
