import React from "react";
import Image from "next/image";

const PostalCard = () => {
  return (
    <div className="w-[300px] relative rounded-3xl bg-white py-3 px-2 border-2 flex flex-col gap-2">
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
        <h2 className="font-semibold">History</h2>
        <p className="text-sm text-gray-500">Learn about history for kids.</p>
      </div>

      {/* POSTAL CARD ROPE TAPE */}
      <div className="w-full flex items-center justify-center h-3 bg-transparent absolute top-0 left-0 right-0">
        <div className="w-9 h-16 bg-green-600 border border-[#333333] rounded-t rounded-b-md absolute bottom-1.5">
          <div className="w-full py-1.5 flex justify-center">
            <div className="white-cut-out w-5 h-5 bg-white border rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostalCard;