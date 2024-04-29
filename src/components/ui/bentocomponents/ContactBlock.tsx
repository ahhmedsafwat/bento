import { FiMail } from "react-icons/fi";
import { Button } from "../button";
import { Input } from "../input";
import { Label } from "../label";
import Block from "./Block";

const ContactBlock = () => {
  return (
    <Block className="col-span-12 md:col-span-9">
      <Label className=" text-lg">Join my mailing list</Label>
      <form className="flex gap-2 mt-3">
        <Input
          type="email"
          placeholder="Enter Your Email"
          className="border border-zinc-700  bg-zinc-800 focus:border-red-300 focus:ring-0 "
        ></Input>
        <Button className="bg-zinc-50 text-zinc-900 hover:bg-zinc-900 hover:text-zinc-50 flex gap-2  whitespace-nowrap justify-center items-center ">
          <FiMail></FiMail>Join the list
        </Button>
      </form>
    </Block>
  );
};

export default ContactBlock;
