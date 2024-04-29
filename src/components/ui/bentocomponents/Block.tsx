import { cn } from "@/lib/utils";
import { MotionProps, motion } from "framer-motion";

type props = {
  className?: string;
} & MotionProps;

const Block = ({ className, ...props }: props) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={cn(
        "col-span-4 bg-zinc-800 border border-zinc-700 rounded-lg p-6",
        className
      )}
      {...props}
    >
      {}
    </motion.div>
  );
};

export default Block;
