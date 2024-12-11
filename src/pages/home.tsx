import React from 'react'

import { useRouter } from 'next/navigation';

type Props = {}

export default function Home({}: Props) {

  const router = useRouter()

  const logOut = () => {
    localStorage.removeItem('token');
    router.push('/login')

  }

  return (
    <div>
      <button className='button-contained-primary w-full' onClick={logOut}>logOut</button>
    </div>
  )
}