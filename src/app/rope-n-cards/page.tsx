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
      gsap.to("#curve_rope", { y: 20, duration: 1.5, repeat: -1, yoyo: true });
    },
    { scope: container }
  );

  return (
    <div className="w-full max-w-full min-w-full h-screen bg-gradient-to-b from-[#ffffff] to-[#eaf6c6]">
      {/* Rope Base Container */}
      <div
        ref={container}
        className="rope-container w-full overflow-hidden h-[200px]"
      >
        {/* Rope SVG */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1538 99"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="curve_rope"
            d="M1 7.00012C510 109.5 786.5 145.5 1537 1.99999"
            stroke="#C1B7B7"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/*  Postal Card Container */}
      <div className="w-full flex justify-center items-center">
        <PostalCard />
      </div>
    </div>
  );
};

export default PostNCards;

// M1 27.0001C491 -100.5 736.5 322.5 1537 22
