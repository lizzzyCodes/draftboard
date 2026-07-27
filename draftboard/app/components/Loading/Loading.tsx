"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import Image from "next/image";
import React from "react";

// CLAUDE GENERATED CODE
// TODO: need to refactor
// Builds a decaying bounce sequence: drop height shrinks by `restitution`
// each bounce, and each segment's duration shrinks with it (sqrt relationship,
// same as real gravity — a shorter drop takes less time to fall).
function buildBounceSequence(
  dropHeight = 220,
  restitution = 0.55,
  bounces = 5,
) {
  const GRAVITY = 2000; // tune this to taste — higher = snappier bounce
  const values: number[] = [-dropHeight, 0]; // start high, first fall to ground
  const durations: number[] = [Math.sqrt((2 * dropHeight) / GRAVITY)];
  const easings: ("easeIn" | "easeOut")[] = ["easeIn"];

  let height = dropHeight;
  for (let i = 0; i < bounces; i++) {
    height *= restitution;
    if (height < 2) break; // stop once bounces are imperceptible
    const segDuration = Math.sqrt((2 * height) / GRAVITY);
    values.push(-height); // rise
    durations.push(segDuration);
    easings.push("easeOut");
    values.push(0); // fall
    durations.push(segDuration);
    easings.push("easeIn");
  }

  const totalDuration = durations.reduce((a, b) => a + b, 0);
  let elapsed = 0;
  const times = [0, ...durations.map((d) => (elapsed += d) / totalDuration)];

  return { values, times, easings, totalDuration };
}

export function BouncingLoader() {
  const y = useMotionValue(-220);
  React.useEffect(() => {
    const { values, times, easings, totalDuration } = buildBounceSequence();
    const controls = animate(y, values, {
      duration: totalDuration,
      times,
      ease: easings,
      repeat: Infinity,
      repeatDelay: 0.5, // pause before the ball resets to the top and drops again
    });
    return controls.stop;
  }, [y]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ position: "relative", width: 60, height: 240 }}>
        <motion.div
          style={{
            position: "absolute",
            left: "50%",
            bottom: 0,
            width: 34,
            height: 34,
            marginLeft: -17,
            y,
            overflow: "hidden", // ensures the image is clipped to the border radius
          }}
        >
          <Image
            src={"/player-images/basketballnobg.png"}
            alt={"example"}
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      <div style={{ fontSize: 30, letterSpacing: "0.1em" }}>
        <h1 className="text-center">LOADING</h1>
      </div>
    </div>
  );
}
