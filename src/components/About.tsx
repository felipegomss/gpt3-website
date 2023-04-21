import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="flex flex-col gap-16">
      <section className="flex flex-col gap-20 p-14 bg-blue-950">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <h1 className="md:w-1/2 w-full font-extrabold text-2xl">
            What is GPT-3
          </h1>
          <p className="font-medium text-blue-200">
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
            Connection has put impossible own apartments boisterous. At jointure
            ladyship an insisted so humanity he. Friendly bachelor entrance to
            on by.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <h2 className="font-extrabold text-4xl md:w-1/2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
            The possibilities are beyond your imagination
          </h2>
          <p className="text-orange-400 font-medium">Explore The Library</p>
        </div>
        <div className="grid md:grid-cols-3 md:grid-rows-1 grid-rows-3 gap-8">
          <div className="flex flex-col gap-6">
            <h3 className="font-extrabold text-2xl">Chatbots</h3>
            <p className="text-blue-200 font-medium">
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="font-extrabold text-2xl">Knowledgebase</h3>
            <p className="text-blue-200 font-medium">
              At jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by. As put impossible own apartments
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="font-extrabold text-2xl">Education</h3>
            <p className="text-blue-200 font-medium">
              At jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by. As put impossible own apartments
            </p>
          </div>
        </div>
      </section>
      <section className="grid md:grid-cols-2 gap-10">
        <aside className="flex flex-col gap-8">
          <h1 className="md:w-3/4 leading-snug font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </h1>
          <p className="text-orange-400 font-medium">
            Request Early Access to Get Started
          </p>
        </aside>
        <aside className="grid grid-rows-4 gap-5">
          <div className="grid md:grid-cols-2 grid-cols-1 md:grid-rows-1 grid-rows-2 py-5">
            <h2 className="font-extrabold text-lg md:w-2/3">
              Improving end distrusts instantly
            </h2>
            <p className="text-blue-200 font-medium">
              From they fine john he give of rich he. They age and draw mrs
              like. Improving end distrusts may instantly was household
              applauded.
            </p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 md:grid-rows-1 grid-rows-2 py-5">
            <h2 className="font-extrabold text-lg md:w-2/3">
              Become the tended active
            </h2>
            <p className="text-blue-200 font-medium">
              Considered sympathize ten uncommonly occasional assistance
              sufficient not. Letter of on become he tended active enable to.
            </p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 md:grid-rows-1 grid-rows-2 py-5">
            <h2 className="font-extrabold text-lg md:w-2/3">
              Message or am nothing
            </h2>
            <p className="text-blue-200 font-medium">
              Led ask possible mistress relation elegance eat likewise debating.
              By message or am nothing amongst chiefly address.
            </p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 md:grid-rows-1 grid-rows-2 py-5">
            <h2 className="font-extrabold text-lg md:w-2/3">
              Really boy law county
            </h2>
            <p className="text-blue-200 font-medium">
              Really boy law county she unable her sister. Feet you off its like
              like six. Among sex are leave law built now. In built table in an
              rapid blush.
            </p>
          </div>
        </aside>
      </section>
      <section className="grid md:grid-cols-2 gap-10">
        <Image src={"/feature.png"} width={546} height={608} alt="" />
        <div className="flex flex-col justify-end py-9">
          <h2 className="font-medium text-cyan-300 mb-2">
            Request Early Access to Get Started
          </h2>
          <h1 className="mb-6 font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
            The possibilities are beyond your imagination
          </h1>
          <p className="text-blue-200 mb-8">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <h2 className="font-medium text-orange-300">
            Request Early Access to Get Started
          </h2>
        </div>
      </section>
      <section className="flex flex-col md:flex-row justify-between p-10 rounded-xl gap-10 bg-gradient-to-r from-purple-400 to-orange-400">
        <div>
          <h2 className="font-medium text-xs text-zinc-950">
            Request Early Access to Get Started
          </h2>
          <h1 className="font-extrabold text-black text-2xl">
            Register today & start exploring the endless possibilities.
          </h1>
        </div>
        <div>
          <button className="bg-black h-14 w-full md:w-48 font-bold text-lg rounded-full">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}
