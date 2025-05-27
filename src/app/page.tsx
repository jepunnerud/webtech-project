"use client";
import { useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import StandardButton from "@/components/StandardButton";

export default function Home() {
  /* ───── disable scrolling only on this page ───── */
  useEffect(() => {
    const { body } = document;
    const prev = body.style.overflow;
    body.style.overflow = "hidden";
    return () => {
      body.style.overflow = prev; // restore when leaving Home
    };
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <h1>
            Welcome to the <span>Museum&nbsp;of&nbsp;Football</span>
          </h1>
          <p>
            Explore legendary clubs, deep-dive into historic careers and learn
            how this project was built.
          </p>

          <div className={styles.ctas}>
            <StandardButton
              label="Enter the museum →"
              href="/museum"
              size="large"
            ></StandardButton>
            <StandardButton
              label="Project docs"
              variant="secondary"
              href="/documentation"
              size="large"
            ></StandardButton>
          </div>
        </div>

        <Image
          src="/hero-ball.png"
          alt="Classic leather football"
          width={360}
          height={360}
          className={styles.ball}
          priority
        />
      </div>
    </section>
  );
}
