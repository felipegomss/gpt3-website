import Image from "next/image";
import React from "react";

export default function Blog() {
  return (
    <div>
      <h1 className="mb-6 md:w-3/4 py-20 font-extrabold text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
        A lot is happening, We are blogging about it.
      </h1>
      <div className="grid grid-rows-6 md:grid-cols-3 md:grid-rows-2 gap-12">
        <a href="" target="_blank" className="flex flex-col row-span-2">
          <Image src={"/blog(5).png"} width={546} height={608} alt="" />
          <div className="flex flex-grow flex-col justify-between p-6 bg-blue-900">
            <div className="flex flex-col gap-4">
              <b className="text-xs">Sep 26, 2021</b>
              <h1 className="font-extrabold text-2xl">
                GPT-3 and Open AI is the future. Let us explore how it is?
              </h1>
            </div>
            <a href="/" target="_blank" className="text-xs">
              Read Full Article
            </a>
          </div>
        </a>
        <a href="" target="_blank" className="flex flex-col">
          <Image
            src={"/blog(2).png"}
            className="w-full"
            width={327}
            height={130}
            alt=""
          />
          <div className="flex flex-grow flex-col justify-between p-6 bg-blue-900 min-h-[195px]">
            <div className="flex flex-col gap-4">
              <b className="text-xs">Sep 26, 2021</b>
              <h1 className="font-extrabold text-xl">
                GPT-3 and Open AI is the future. Let us explore how it is?
              </h1>
            </div>
            <a href="/" className="text-xs">
              Read Full Article
            </a>
          </div>
        </a>
        <a href="" target="_blank" className="flex flex-col">
          <Image
            src={"/blog(3).png"}
            className="w-full"
            width={327}
            height={130}
            alt=""
          />
          <div className="flex flex-grow flex-col justify-between p-6 bg-blue-900 min-h-[195px]">
            <div className="flex flex-col gap-4">
              <b className="text-xs">Sep 26, 2021</b>
              <h1 className="font-extrabold text-xl">
                GPT-3 and Open AI is the future. Let us explore how it is?
              </h1>
            </div>
            <a href="/" className="text-xs">
              Read Full Article
            </a>
          </div>
        </a>
        <a href="" target="_blank" className="flex flex-col">
          <Image
            src={"/blog(4).png"}
            className="w-full"
            width={327}
            height={130}
            alt=""
          />
          <div className="flex flex-grow flex-col justify-between p-6 bg-blue-900 min-h-[195px]">
            <div className="flex flex-col gap-4">
              <b className="text-xs">Sep 26, 2021</b>
              <h1 className="font-extrabold text-xl">
                GPT-3 and Open AI is the future. Let us explore how it is?
              </h1>
            </div>
            <a href="/" className="text-xs">
              Read Full Article
            </a>
          </div>
        </a>
        <a href="" target="_blank" className="flex flex-col">
          <Image
            src={"/blog(1).png"}
            className="w-full"
            width={327}
            height={130}
            alt=""
          />
          <div className="flex flex-grow flex-col justify-between p-6 bg-blue-900 min-h-[195px]">
            <div className="flex flex-col gap-4">
              <b className="text-xs">Sep 26, 2021</b>
              <h1 className="font-extrabold text-xl">
                GPT-3 and Open AI is the future. Let us explore how it is?
              </h1>
            </div>
            <a href="/" target="_blank" className="text-xs">
              Read Full Article
            </a>
          </div>
        </a>
      </div>
    </div>
  );
}
