import { animated, config, useSpring } from "@react-spring/three";
import { Canvas, MeshProps, useFrame } from "@react-three/fiber";
import Head from "next/head";
import { useRef, useState } from "react";

const Box = (props: any) => {
  const mesh = useRef<MeshProps>(null);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const { scale } = useSpring({
    scale: active ? 1.5 : 1,
    config: config.wobbly,
  });

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += active ? 0.01 : -0.01;
      mesh.current.rotation.y += active ? -0.01 : 0.01;
      mesh.current.rotation.z += active ? 0.01 : -0.01;
    }
  });

  return (
    // @ts-ignore
    <animated.mesh
      {...props}
      ref={mesh}
      scale={scale}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </animated.mesh>
  );
};

const Box2 = (props: any) => {
  const mesh = useRef<MeshProps>(null);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += active ? 0.01 : -0.01;
      mesh.current.rotation.y += active ? -0.01 : 0.01;
      mesh.current.rotation.z += active ? 0.01 : -0.01;
    }
  });

  return (
    // @ts-ignore
    <animated.mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </animated.mesh>
  );
};

const Scene = () => {
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>React Thhree Fiber</title>
      </Head>

      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box2 position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  );
};

export default Scene;
