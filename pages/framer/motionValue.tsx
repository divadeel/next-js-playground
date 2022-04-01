import { motion, useMotionValue, useTransform } from "framer-motion";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { CodeBlock, dracula } from "react-code-blocks";

const Framer = () => {
  const constraintsRef = useRef(null);
  const [value, setValue] = useState(0);
  const x = useMotionValue(0);
  const input = [-200, 0, 200];
  const output = [0, 1, 0];
  const opacity = useTransform(x, input, output);

  useEffect(() => {
    console.log(x);
    x.onChange((e: number) => {
      setValue(e.toFixed(2));
      console.log(e);
    });
  }, [x]);

  const code = `const x = useMotionValue(0);
const input = [-200, 0, 200];
const output = [0, 1, 0];
const opacity = useTransform(x, input, output);

<div>
  <motion.div
    ref={constraintsRef}
  />
  <motion.div
    drag
    dragConstraints={constraintsRef}
    style={{ x, opacity }}
  />
</div>
`;

  return (
    <div className="w-screen h-screen bg-gray-900">
      <Head>
        <title>Framer Motion</title>
      </Head>

      <div className="flex justify-around items-center  h-full gap-x-10">
        <div className="flex justify-center items-center h-full gap-x-10">
          <div className="relative w-[600px] h-[600px]">
            <motion.div
              className="absolute translate-y-[-50%] top-[50%] w-full h-full bg-white opacity-5 rounded-2xl"
              ref={constraintsRef}
            />
            <motion.div
              className="absolute top-[25%] left-[25%] w-[300px] h-[300px] bg-orange-400 rounded-[50%] cursor-grab"
              drag
              dragConstraints={constraintsRef}
              style={{ x, opacity }}
              whileDrag={{ cursor: "grabbing" }}
            />
            <motion.p className="absolute text-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-black text-5xl cursor-default">
              {value}
            </motion.p>
          </div>
        </div>

        <div className="w-[500px]">
          <CodeBlock text={code} language="jsx" theme={dracula} />
        </div>
      </div>
    </div>
  );
};

export default Framer;
