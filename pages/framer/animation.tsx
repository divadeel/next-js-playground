import { motion, MotionConfig } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import styled from "styled-components";

const Framer = () => {
  const [isOn, setIsOn] = useState(false);

  const variants = {
    visible: { opacity: 1, scale: 1.2 },
    hidden: { opacity: 0.1, scale: 1 },
  };

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  const toggleSwitch = () => setIsOn(!isOn);

  const code = `<motion.div animate={{ y: [0, 100, 0] }} />

const variants = {
  visible: { opacity: 1, scale: 1.2 },
  hidden: { opacity: 0.1, scale: 1 },
};

<motion.div 
  initial={false} 
  animate="hidden" 
  variants={variants} 
  whileHover={variants.visible}
/>

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

<div className="switch" onClick={toggleSwitch}>
  <motion.div
    className="handle"
    layout
    transition={spring}
    whileHover={{ scale: 1.2 }}
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
          <motion.div
            className="w-32 h-32 bg-orange-300 rounded-xl"
            animate={{ y: [0, 100, 0], }}
          />

          <motion.div
            className="w-32 h-32 bg-green-300 rounded-xl"
            // initial="visible"
            initial={false}
            animate="hidden"
            variants={variants}
            whileHover={variants.visible}
          />

          <Switch>
            <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
              <motion.div
                className="handle"
                layout
                transition={spring}
                whileHover={{ scale: 1.2 }}
              />
            </div>
          </Switch>
        </div>

        <div className="w-[500px]">
          <CodeBlock text={code} language="jsx" theme={dracula} />
        </div>
      </div>
    </div>
  );
};

const Switch = styled.div`
  .switch {
    width: 160px;
    height: 100px;
    background-color: rgba(255, 255, 255, 0.4);
    display: flex;
    justify-content: flex-start;
    border-radius: 50px;
    padding: 10px;
    cursor: pointer;
  }

  .switch[data-isOn="true"] {
    justify-content: flex-end;
  }

  .handle {
    width: 80px;
    height: 80px;
    background-color: white;
    border-radius: 40px;
  }
`;

export default Framer;
