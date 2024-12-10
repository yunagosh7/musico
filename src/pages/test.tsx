import React from 'react'
import { NextResponse } from 'next/server'

type Props = {}

export default function test({}: Props) {
  return (
    <div>test</div>
  )
}

export const getStaticProps = () => {

  return {
    redirect: {
      destination: '/sign-up'
    }
  }
}