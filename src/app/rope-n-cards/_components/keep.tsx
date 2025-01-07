import React from "react";
import Image from "next/image";

const PostalCard = () => {
  return (
    <div className="w-[280px] relative rounded-3xl bg-white shadow-sm py-3 px-2 border-2 flex flex-col gap-2">
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

      {/* POSTAL CARD ROPE TAPE */}
      <div className="w-full flex items-center justify-center h-3 absolute top-0 left-0 right-0">
        <div className="w-9 h-16 bg-green-600 mix-blend-darken border border-[#615f5f] rounded-t rounded-b-md absolute bottom-1.5">
          <div className="w-full py-1.5 flex justify-center mix-blend-hard-light">
            <div className="white-cut-out w-5 h-5 bg-white border rounded-full "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostalCard;
