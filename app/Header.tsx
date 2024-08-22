"use client";
import { ChevronRight } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Header = () => {
  const { data: session } = useSession();

  // console.log(session);

  return (
    <div className="sticky top-0 z-10">
      <div className="grid grid-cols-3 items-center w-full px-6 py-5 bg-gradient-to-r from-[#523db7] to-[#01a9c0] text-white font-normal text-xl ">
        <div className="justify-start">
          <Image
            src={"/Creative-logo.webp"}
            width={130}
            height={130}
            alt="logo"
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </div>

        <div className="justify-center text-center">
          {session ? (
            <p>
              Welcome&nbsp;
              <span className="capitalize text-[#523db7] text-xl font-bold">
                {session.user?.name}
              </span>
            </p>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <p>No active session</p>
              <p>Please sign in</p>
            </div>
          )}
        </div>

        <div className="justify-end flex gap-8">
          {session ? (
            <div className="flex gap-4 items-center">
              <Image
                src={session.user?.image as string}
                alt="profile"
                width={40}
                height={40}
                className="rounded-full"
              />
              <button
                onClick={() => signOut()}
                className="bg-[#523db7] text-white !px-6 !py-2 rounded-lg"
              >
                Log out
              </button>
            </div>
          ) : (
            <div className="flex gap-4 items-center">
              <button
                onClick={() => signIn("google")}
                className="bg-[#523db7] text-white !px-6 !py-2 rounded-lg"
              >
                Google
              </button>
              <button
                onClick={() => signIn("github")}
                className="bg-[#523db7] text-white !px-6 !py-2 rounded-lg"
              >
                Github
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
