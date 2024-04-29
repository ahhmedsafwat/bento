import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import Block from "./Block";
import { FiArrowRight } from "react-icons/fi";

const HeaderBlock = () => {
  return (
    <Block className="col-span-12 row-span-2 md:col-span-6 ">
      <Avatar className="w-14 h-14">
        <AvatarImage
          src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
          alt="@shadcn"
        />
        <AvatarFallback>Cn</AvatarFallback>
      </Avatar>
      <h1 className="mb-12 text-4xl font-medium leading-tight">
        Hi, I'm Ahmed.{" "}
        <span className="text-zinc-400">
          I build cool websites like this one.
        </span>
      </h1>
      <a
        href="#"
        className="flex items-center gap-1 text-red-300 hover:underline"
      >
        Contact me <FiArrowRight></FiArrowRight>
      </a>
    </Block>
  );
};

export default HeaderBlock;
