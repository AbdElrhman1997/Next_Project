"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const images = Array.from(
  { length: 13 },
  (_, index) => `/images/Artboard ${index + 1}.png`
);

const NewsTicker = () => {
  return (
    <div className=" mb-20">
      <p className="text-black text-4xl text-center font-semibold mb-12 mt-12">
        نخدم نخبة من الشركات الرائدة
      </p>
      <Marquee direction="left" loop={0} autoFill={true} speed={200}>
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Artboard ${index + 1}`}
            className="h-20 mx-6"
            width={300}
            height={100}
          />
        ))}
      </Marquee>
    </div>
  );
};

export default NewsTicker;
