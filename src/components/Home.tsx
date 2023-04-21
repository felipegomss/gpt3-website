import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-10">
        <aside className="flex flex-col gap-16">
          <h1 className="text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
            Let’s Build Something amazing with GPT-3 OpenAI
          </h1>
          <p className="text-blue-200 text-xl">
            Yet bed any for traveling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <form action="" className="h-20 flex">
            <input
              type="email"
              placeholder="Your Email Address"
              className="h-full md:px-8 px-2 flex-1 text-xl rounded-tl-md rounded-bl-md"
            />
            <button
              type="submit"
              className="rounded-tr-md rounded-br-md bg-orange-600 font-bold text-xl px-9 h-full"
            >
              Get Started
            </button>
          </form>
          <div className="flex gap-3 items-center">
            <Image src={"/avatars.png"} width={181} height={38} alt="" />
            <p className="text-white font-medium text-xs">
              1,600 people requested access a visit in last 24 hours
            </p>
          </div>
        </aside>
        <aside>
          <Image src={"/home.png"} width={667} height={701} alt="" />
        </aside>
      </div>

      <div className="flex flex-col md:flex-row gap-11 justify-center items-center w-full my-20">
        <Image src={"/google.png"} width={71} height={24} alt="" />
        <Image src={"/slack.png"} width={95} height={24} alt="" />
        <Image src={"/atlassian.png"} width={112} height={24} alt="" />
        <Image src={"/dropbox.png"} width={120} height={24} alt="" />
        <Image src={"/shopify.png"} width={84} height={24} alt="" />
      </div>
    </div>
  );
}
