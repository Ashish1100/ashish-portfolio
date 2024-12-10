/* eslint-disable @next/next/no-img-element */
import ashish from "@/public/ashish.jpg";
import { IoIosArrowDown } from "react-icons/io";
import Image, { StaticImageData } from "next/image";

import * as data from "./data";
import Link from "next/link";
import { socialLinks } from "./data";

function HeroSection() {
  return (
    <div className="relative">
      <div className="flex p-5 gap-3">
        <Image
          src={ashish}
          className="size-32 rounded-full border p-1 600"
          alt="profile"
        />
        <div className="px-2 flex-1 opacity-80">
          <p className="text-4xl font-semibold  text-gray-900 opacity-100">
            {data.name}
          </p>
          <p className="text-sm">Developing and researching in Data Science and AI.</p>
          <p className="text-sm"> Previously worked as an intern at Samsung, ISRO</p>
          <p className="text-sm">(Govt. of India). Regularly evaluating new and</p>
          <p className="text-sm">evolving technologies.</p>
          
          <div className="flex gap-1 my-3 items-center">
            {socialLinks.map((social, index) => (
              <SocialIcon key={index} href={social.href} image={social.image} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-8 md:mt-16">
        <IoIosArrowDown className="size-5 opacity-55 animate-bounce" />
      </div>
    </div>
  );
}

export default HeroSection;

interface SocailIconProps {
  image: StaticImageData;
  href: string;
}

function SocialIcon({ image, href }: SocailIconProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="p-[6px] rounded-md shadow-sm shadow-black/25 hover:-translate-y-[1px] transition-all"
    >
      <Image className="heroSocialIcon" src={image} alt="Social Icon" />
    </Link>
  );
}
