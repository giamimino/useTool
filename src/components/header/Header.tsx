"use client";
import React from "react";
import { Icon } from "@iconify/react";

export default function Header() {
  return (
    <header
      className={
        "flex w-full px-7 py-8 justify-between text-white fixed top-0 left-0 z-[9999]"
      }
    >
      <span></span>
      <span></span>
      <button
        className="cursor-pointer size-8 absolute left-1/2 translate-x-[-50%]"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <Icon icon={"mdi:dots-hexagon"} className="size-8" />
      </button>
      <nav className="flex gap-3">
        <button className="cursor-pointer font-500 px-4 py-2 rounded-2xl hover:bg-[#ffffff14]">
          Log In
        </button>
        <button className="cursor-pointer font-500 px-4 py-2 rounded-2xl bg-[#ffffff0d] hover:bg-[#ffffff14]">
          Register
        </button>
      </nav>
    </header>
  );
}
