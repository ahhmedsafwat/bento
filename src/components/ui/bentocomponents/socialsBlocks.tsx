import Block from "./Block";
import { SiYoutube, SiTwitter, SiTiktok, SiGithub } from "react-icons/si";

const SocailBlocks = () => {
  return (
    <>
      <Block
        className="col-span-6 bg-red-500 md:col-span-3"
        whileHover={{ scale: 1.1, rotate: "2.5deg" }}
        whileTap={{ scale: 1.05, rotate: "0" }}
        transition={{ bounce: 0.65, type: "spring" }}
      >
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <SiYoutube></SiYoutube>
        </a>
      </Block>
      <Block
        className="col-span-6 bg-green-500 md:col-span-3"
        whileHover={{ scale: 1.1, rotate: "-2.5deg" }}
        whileTap={{ scale: 1.05, rotate: "0" }}
        transition={{ bounce: 0.65, type: "spring" }}
      >
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <SiGithub></SiGithub>
        </a>
      </Block>
      <Block
        className="col-span-6 bg-zinc-50 md:col-span-3"
        whileHover={{ scale: 1.1, rotate: "-2.5deg" }}
        whileTap={{ scale: 1.05, rotate: "0" }}
        transition={{ bounce: 0.65, type: "spring" }}
      >
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <SiTiktok fill="black"></SiTiktok>
        </a>
      </Block>
      <Block
        className="col-span-6 bg-blue-500 md:col-span-3"
        whileHover={{ scale: 1.1, rotate: "2.5deg" }}
        whileTap={{ scale: 1.05, rotate: "0" }}
        transition={{ bounce: 0.65, type: "spring" }}
      >
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <SiTwitter></SiTwitter>
        </a>
      </Block>
    </>
  );
};

export default SocailBlocks;
