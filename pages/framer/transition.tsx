import { motion, MotionConfig } from "framer-motion";
import Head from "next/head";
import { CodeBlock, dracula } from "react-code-blocks";

const Framer = () => {
  const code = `<MotionConfig
  transition={{
    duration: 2,
    ease: "easeInOut",
    times: [0, 0.2, 0.5, 0.8, 1],
    repeat: Infinity,
    repeatDelay: 1,
  }}
>
  <motion.div
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      boxShadow: "none",
    }}
  />

  <motion.div
    animate={{
      scale: [2, 1, 1, 2, 2],
      rotate: [270, 270, 0, 0, 270],
      borderRadius: ["50%", "50%", "20%", "20%", "50%"],
    }}
  />
</MotionConfig>`;

  return (
    <div className="w-screen h-screen bg-gray-900">
      <Head>
        <title>Framer Motion</title>
      </Head>

      <div className="flex justify-around items-center  h-full gap-x-10">
        <div className="flex justify-center items-center h-full">
          <MotionConfig
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            <motion.div
              className="w-[100px] h-[100px] bg-blue-300 m-20"
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                boxShadow: "none",
              }}
            ></motion.div>

            <motion.div
              className="w-[100px] h-[100px] bg-pink-300 m-20"
              animate={{
                scale: [2, 1, 1, 2, 2],
                rotate: [270, 270, 0, 0, 270],
                borderRadius: ["50%", "50%", "20%", "20%", "50%"],
              }}
            ></motion.div>
          </MotionConfig>

          {/* <motion.div
          className="w-[100px] h-[100px] bg-blue-300 m-20"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            boxShadow: "none",
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        ></motion.div>

        <motion.div
          className="w-[100px] h-[100px] bg-pink-300 m-20"
          animate={{
            scale: [2, 1, 1, 2, 2],
            rotate: [270, 270, 0, 0, 270],
            borderRadius: ["50%", "50%", "20%", "20%", "50%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        ></motion.div> */}
        </div>

        <div className="w-[500px]">
          <CodeBlock text={code} language="jsx" theme={dracula} />
        </div>
      </div>
    </div>
  );
};

export default Framer;
