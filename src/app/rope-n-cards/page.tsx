"use client";

import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import PostalCard from "./_components/PostalCard";

gsap.registerPlugin(useGSAP);

const PostNCards = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to("#postal_container", {
        y: "20px",
        z: "20px",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
      });
    },
    { scope: container }
  );

  return (
    <div className="w-full max-w-full min-w-full h-screen bg-gradient-to-b from-[#ffffff] to-[#eaf6c6] py-20">
      <div ref={container} className="rope-container w-full relative">
        {/* Rope SVG */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1538 99"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[6rem] -top-16 absolute"
        >
          <path
            id="curve_rope"
            d="M1 7.00012C510 109.5 786.5 145.5 1537 1.99999"
            stroke="#C1B7B7"
            strokeWidth="2"
          />
        </svg>

        {/*  Postal Card Container */}
        <div
          className="w-full flex justify-center items-center gap-10"
          id="postal_container"
        >
          <PostalCard />
          {/* <PostalCard /> */}
        </div>
      </div>
    </div>
  );
};

export default PostNCards;
