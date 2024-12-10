
import Image from "next/image";
import Link from "next/link";
import appLogo from "../assets/app-logo.svg";



export default function Index() {
  return (
    <div className="bg-white px-6 py-12 flex flex-col items-center justify-between h-dvh  ">
      <div className="flex flex-col items-center">
        <Image src={appLogo} alt="Application logo" />
        <h3 className="text-[30px] text-white-50 text-xl">Just keep on vibin{"'"}</h3>
      </div>
      <div className="w-full flex flex-col lg:flex-row-reverse gap-4">
        <Link className="button-contained-primary flex-1 text-black-75 font-bold" href="/login">Log In</Link>

        <Link className="button-outlined-primary flex-1 flex gap-5 justify-center font-bold" href="/register">
          Register
        </Link>

      </div>
    </div>
  );
}
