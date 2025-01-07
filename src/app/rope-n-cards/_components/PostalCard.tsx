import React from "react";
import Image from "next/image";

const PostalCard = () => {
  return (
    <div className="w-full max-w-[280px] min-w-[280px] flex flex-col">
      {/* POSTAL CARD ROPE TAPE */}
      <div className="w-full flex items-center justify-center relative z-20 -mb-2 mix-blend-darken ">
        <div className="w-9 h-16 bg-green-600 border border-[#615f5f] rounded-t rounded-b-md ">
          <div className="w-full py-1.5 flex justify-center">
            <div className="white-cut-out w-5 h-5 bg-white border rounded-full "></div>
          </div>
        </div>
      </div>

      <div className="relative z-10 rounded-3xl bg-white shadow-sm py-3 px-2 border-2 flex flex-col gap-2 isolate">
        <div className="w-full h-48">
          <Image
            src="/puzzle-storage.webp"
            alt="Postal Card"
            width={300}
            height={200}
            draggable={false}
            priority={true}
            className="rounded-2xl w-full h-full object-cover"
          />
        </div>

        <div className="w-full flex flex-col p-1">
          <h2 className="font-semibold">Design</h2>
          <p className="text-sm text-gray-500">
            Crafted by{" "}
            <a
              className="underline"
              target="_blank"
              href="https://jeremytechie.com"
            >
              Jeremytechie.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostalCard;
