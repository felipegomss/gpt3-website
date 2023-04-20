"use client";

import React, { useState } from "react";
import { Command, Component } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  function handleMenu() {
    setOpen(!open);
  }

  return (
    <nav className="flex md:flex-row flex-col justify-between py-14 items-center ">
      <div className="flex gap-16 md:flex-row flex-col w-full md:w-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-extrabold">GPT-3</h1>
          {open ? (
            <button
              className="md:hidden p-2 bg-white/10 rounded-full"
              onClick={handleMenu}
            >
              <Component />
            </button>
          ) : (
            <button
              className="md:hidden p-2 bg-white/10 rounded-full"
              onClick={handleMenu}
            >
              <Command />
            </button>
          )}
        </div>
        <div
          className={`md:flex gap-14 text-lg font-medium flex-col md:flex-row
            ${open ? "flex" : "hidden"}
            `}
        >
          <a href="/">Home</a>
          <a href="/">What is GPT?</a>
          <a href="/">Open AI</a>
          <a href="/">Case Studies</a>
          <a href="/">Library</a>
        </div>
      </div>
      <div
        className={`md:flex text-lg font-medium ${open ? "flex" : "hidden"}`}
      >
        <button className="w-36 h-14 rounded-md">Sign in</button>
        <button className="w-36 h-14 rounded-md bg-orange-600">Sign up</button>
      </div>
    </nav>
  );
}
