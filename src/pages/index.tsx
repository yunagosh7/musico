import React from "react";

import appLogo from "../assets/app-logo.svg";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Index({}: Props) {
  return (
    <div className="bg-white pt-12 flex flex-col items-center justify-between h-dvh">
      <div className="flex flex-col items-center">
        <Image src={appLogo} alt="Application logo" />
        <h3 className="text-[30px] text-white-50 text-xl">Just keep on vibin'</h3>
      </div>
      <div className="w-full">
        <Link className="button-contained-primary w-full" href="/signup">Sign Up</Link>
        
      </div>
    </div>
  );
}
