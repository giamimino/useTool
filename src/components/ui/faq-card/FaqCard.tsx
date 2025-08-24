"use client";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  title: string;
  description: string;
};

export default function FaqCard(props: Props) {
  const [show, setShow] = useState(false);
  const [inView, setInView] = useState(false);
  const cardRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`flex flex-col
        h-fit w-full transition-all duration-500 ease rounded-4xl 
        px-6 py-6 bg-white/3 select-none
        cursor-pointer  
        ${inView ? 
          "translate-x-0 translate-y-0 opacity-100 blur-0 scale-100" : 
          "translate-x-[-50px] translate-y-[-50px] opacity-0 scale-90 blur-[10px]"}`}
      onClick={() => setShow((prev) => !prev)}
    >
      <div className="flex items-center justify-between gap-12">
        <h1 className="text-white 
         tracking-tight font-medium 
        text-4.5 leading-6">{props.title}</h1>
        <button className="w-7 h-7 bg-white/5
          rounded-4xl relative cursor-pointer">
          <span className="w-3 h-0.5 bg-white absolute
          top-1/2 left-1/2 translate-[-50%] transition-all
          duration-400 ease"></span>
          <span className={`h-3 bg-white absolute
          translate-[-50%] transition-all
          duration-400 ease ${!show ? 
            "w-0.5 rotate-0" :
            "w-0 rotate-90"
          }`}></span>
        </button>
      </div>
      <main className={`transition-all duration-300 ease ${!show ? 
        "max-h-0 opacity-0 overflow-hidden " : 
        "mt-3 mx-h-125 opacity-100"}`}>
        <p className={`transition-all duration-300 ease delay-200 ${!show ?
          "opacity-0 " : "opacity-100 "
        }`}>{props.description}</p>
      </main>
    </div>
  );
}
