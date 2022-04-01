import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Framer Motion</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Framer <a>Motion</a>
        </h1>

        <p className={styles.description}>
          Ref <a href="https://www.framer.com/docs/">framer.com/docs/</a>
        </p>

        <div className={styles.grid}>
          <Link href="/framer/animation">
            <a className={styles.card}>
              <h2>Animation &rarr;</h2>
              <p>How to animate in Framer Motion.</p>
            </a>
          </Link>

          <Link href="/framer/transition">
            <a className={styles.card}>
              <h2>Transition &rarr;</h2>
              <p>A Transition animate from one state to another.</p>
            </a>
          </Link>

          <Link href="/framer/gestures">
            <a className={styles.card}>
              <h2>Gestures &rarr;</h2>
              <p>A powerful gesture recognition system.</p>
            </a>
          </Link>

          <Link href="/framer/motionValue">
            <a className={styles.card}>
              <h2>MotionValue &rarr;</h2>
              <p>A powerful gesture recognition system.</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
