import { motion } from "framer-motion";
import Block from "./Block";

const LocationBlock = () => {
  return (
    <Block className="col-span-12 md:col-span-3 flex flex-col justify-center items-center gap-2 ">
      <div className={"relative"}>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          id="location"
          animate={{
            y: [0, -8, 4, -5, 0],
          }}
          transition={{
            repeat: Infinity,

            duration: 1.3,
          }}
          style={{ zIndex: "5", position: "relative" }}
        >
          <g
            fill="none"
            fill-rule="evenodd"
            stroke="#ffffff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            transform="translate(3.5 2)"
          >
            <path d="M0.739130438,8.39130439 C0.753537867,4.15071799 4.2028919,0.72472301 8.4434783,0.739085164 C12.6840647,0.753537867 16.1100597,4.2028919 16.0956975,8.4434783 L16.0956975,8.53043483 C16.0434783,11.2869566 14.5043479,13.8347827 12.6173914,15.826087 C11.5382412,16.9467164 10.3331375,17.9388114 9.026087,18.7826088 C8.67659293,19.0849173 8.15818976,19.0849173 7.80869569,18.7826088 C5.86019813,17.5143538 4.15006533,15.9131279 2.75652175,14.052174 C1.51448066,12.4293903 0.809295599,10.4597355 0.739130438,8.41739135 L0.739130438,8.39130439 Z"></path>
            <circle cx="8.417" cy="8.539" r="2.461"></circle>
          </g>
        </motion.svg>

        <motion.div
          className="absolute left-2  rounded-full bottom-[-10px] w-3 , h-3 bg-transparent border p-0  "
          style={{ perspective: 1000, rotateX: 70, zIndex: "1" }}
          animate={{ scale: [0, 5, 5.5], opacity: [1, 0.6, 0] }}
          transition={{ repeat: Infinity, delay: 1, duration: 1.3 }}
        />
        <motion.div
          className="absolute left-2  rounded-full bottom-[-10px] w-3 , h-3 bg-transparent border p-0  "
          style={{ perspective: 1000, rotateX: 70, zIndex: "1" }}
          animate={{ scale: [0, 5, 5.8], opacity: [1, 0.6, 0] }}
          transition={{ repeat: Infinity, delay: 1.4, duration: 1.3 }}
        />
      </div>
      <p className="text-xl text-center text-zinc-400 relative z-10">
        El-Mansoura
      </p>
    </Block>
  );
};

export default LocationBlock;
