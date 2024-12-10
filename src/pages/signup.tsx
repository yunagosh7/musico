import React from "react";

import appLogo from "../assets/app-logo.svg";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function SignUp({}: Props) {
  return (
    <div className="bg-[red] flex flex-col items-center">
      <div>
        <Image src={appLogo} alt="Application logo" />
        <h3 className="text-[30px]">Just keep on vibin'</h3>
      </div>
      <div>
        <Link href="/signup"></Link>
        
      </div>
    </div>
  );
}
