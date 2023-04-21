import React from "react";

export default function Footer() {
  return (
    <div className="bg-slate-900 mt-24">
      <main className="max-w-7xl m-auto px-4">
        <div className="flex flex-col gap-46 py-44 justify-center items-center max-w-4xl m-auto text-center gap-16">
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
            Do you want to step in to the future before others
          </h1>
          <button className="border border-white h-14 w-full md:w-52 text-lg ">
            Request Early Access
          </button>
        </div>
        <div>
          <div className="flex flex-col md:flex-row justify-between gap-8 pb-20">
            <div className="flex flex-col gap-6 text-xs">
              <h1 className="text-5xl font-extrabold">GPT-3</h1>
              <p>
                Crechterwoord K12 182 DK <br />
                Alknjkcb, All Rights Reserved
              </p>
            </div>
            <div className="flex flex-col gap-8">
              <h2 className="font-bold text-sm">Links</h2>
              <div className="flex flex-col gap-6 text-xs">
                <a href="">Overons</a>
                <a href="">Social Media</a>
                <a href="">Counters</a>
                <a href="">Contact</a>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <h2 className="font-bold text-sm">Company</h2>
              <div className="flex flex-col gap-6 text-xs">
                <a href="">Terms & Conditions</a>
                <a href="">Privacy Policy</a>
                <a href="">Contact</a>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <h2 className="font-bold text-sm">Get in touch</h2>
              <div className="flex flex-col gap-6 text-xs">
                <a href="">
                  Crechterwoord K12
                  <br />
                  182 DK Alknjkcb
                </a>
                <a href="">085-132567</a>
                <a href="">info@payme.net</a>
              </div>
            </div>
          </div>
          <p className="text-center py-7">© 2021 GPT-3. All rights reserved.</p>
        </div>
      </main>
    </div>
  );
}
