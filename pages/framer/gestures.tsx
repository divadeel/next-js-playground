import { motion } from "framer-motion";
import Head from "next/head";
import { useRef, useState } from "react";
import { CodeBlock, dracula } from "react-code-blocks";

const Framer = () => {
  const constraintsRef = useRef(null);
  const code = `<motion.button
  whileHover={{
    scale: 1.1, boxShadow: "none",
  }}
  whileTap={{
    scale: 0.9,
    boxShadow: "0 0 30px 1px #ECC94B",
    borderRadius: "26px",
    backgroundColor: "#fff",
  }}
  whileFocus={{ scale: 1.2, backgroundColor: "#E53E3E" }}
/>

<div>
  <motion.div
    ref={constraintsRef}
  />
  <motion.div
    drag
    dragConstraints={constraintsRef}
    whileDrag={{ cursor: "grabbing" }}
  />
</div>

<motion.div
  initial={{ opacity: 0, scale: 0.7 }}
  whileInView={{ opacity: 1, scale: 1 }}
/>
`;

  return (
    <div className="w-screen h-screen bg-gray-900">
      <Head>
        <title>Framer Motion</title>
      </Head>

      <div className="flex justify-around items-center  h-full gap-x-10">
        <div className="flex justify-center items-center h-full gap-x-10">
          <motion.button
            className="w-[100px] h-[100px] bg-white rounded-xl"
            whileHover={{
              scale: 1.1,
              boxShadow: "none",
            }}
            whileTap={{
              scale: 0.9,
              boxShadow: "0 0 30px 1px #ECC94B",
              borderRadius: "26px",
              backgroundColor: "#fff",
            }}
            whileFocus={{ scale: 1.2, backgroundColor: "#E53E3E" }}
          />

          <div className="relative w-[300px] h-[300px]">
            <motion.div
              className="absolute translate-y-[-50%] top-[50%] w-full h-full bg-white opacity-5 rounded-2xl"
              ref={constraintsRef}
            />
            <motion.div
              className="absolute top-[25%] left-[25%] w-[150px] h-[150px] bg-purple-600 rounded-[50%] cursor-grab"
              drag
              dragConstraints={constraintsRef}
              whileDrag={{ cursor: "grabbing" }}
            />
          </div>

          <div className="w-[300px] h-[500px] p-1 overflow-auto bg-white rounded-2xl">
            <motion.div
              className="w-[90%] h-[100px] bg-purple-500 rounded-lg mx-auto my-5"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
            />
            <motion.div
              className="w-[90%] h-[100px] bg-blue-500 rounded-lg mx-auto my-5"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
            />
            <motion.div
              className="w-[90%] h-[100px] bg-cyan-500 rounded-lg mx-auto my-5"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
            />
            <motion.div
              className="w-[90%] h-[100px] bg-green-500 rounded-lg mx-auto my-5"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
            />
            <motion.div
              className="w-[90%] h-[100px] bg-yellow-500 rounded-lg mx-auto my-5"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
            />
            <motion.div
              className="w-[90%] h-[100px] bg-orange-500 rounded-lg mx-auto my-5"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
            />
            <motion.div
              className="w-[90%] h-[100px] bg-red-500 rounded-lg mx-auto my-5"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
            />
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
