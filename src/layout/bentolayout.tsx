import AboutBlock from "@/components/ui/bentocomponents/AboutBlock";
import ContactBlock from "@/components/ui/bentocomponents/ContactBlock";
import HeaderBlock from "@/components/ui/bentocomponents/headerBlock";
import LocationBlock from "@/components/ui/bentocomponents/location";
import SocailBlocks from "@/components/ui/bentocomponents/socialsBlocks";
import { motion } from "framer-motion";

const BentoLayout = () => {
  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-12 text-zinc-50 overflow-hidden ">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.05 }}
        className="mx-auto grid max-w-4xl grid-cols-12 gap-4 grid-flow-dense"
      >
        <HeaderBlock />
        <SocailBlocks />
        <AboutBlock />
        <LocationBlock />
        <ContactBlock />
      </motion.div>
    </div>
  );
};

export default BentoLayout;
