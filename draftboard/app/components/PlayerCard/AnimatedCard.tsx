"use client";

import { motion, useMotionValue, useMotionTemplate, useSpring } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedCardProps {
    children: ReactNode;
    color: string;
    secondaryColor: string;
}

export default function AnimatedCard({ children, color }: AnimatedCardProps) {
    // raw cursor percentage, 0-100 — same source of truth as your CSS version
    const sheenXRaw = useMotionValue(50);
    const sheenYRaw = useMotionValue(50);

    // optional but recommended: smooths the sweep instead of snapping frame-to-frame
    const sheenX = useSpring(sheenXRaw, { stiffness: 200, damping: 25 });
    const sheenY = useSpring(sheenYRaw, { stiffness: 200, damping: 25 });

    const backgroundPositionX = useMotionTemplate`${sheenX}%`;
    const backgroundPositionY = useMotionTemplate`${sheenY}%`;

    const rotateXRaw = useMotionValue(0);
    const rotateYRaw = useMotionValue(0);
    const rotateX = useSpring(rotateXRaw, { stiffness: 300, damping: 20 });
    const rotateY = useSpring(rotateYRaw, { stiffness: 300, damping: 20 });

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        rotateY.set((x - 0.5) * 16);
        rotateX.set((0.5 - y) * 16);

        sheenXRaw.set(x * 100);
        sheenYRaw.set(y * 100);
    }

    function reset() {
        rotateXRaw.set(0);
        rotateYRaw.set(0);
        sheenXRaw.set(50);
        sheenYRaw.set(50);
    }

    return (
        <div style={{ perspective: 1400 }}>
            <motion.section
                onMouseMove={handleMouseMove}
                onMouseLeave={reset}
                className="w-[320px] h-[450px] rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[40px] rounded-br-none p-[5px] overflow-hidden relative"
                style={{
                    backgroundColor: color,
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
            >
                {children}

                <motion.div
                    className="absolute inset-0 pointer-events-none z-50"
                    style={{
                        backgroundImage: `linear-gradient(
                            115deg,
                            transparent 20%,
                            rgba(255,255,255,.9) 42%,
                            rgba(150,220,255,.5) 48%,
                            rgba(255,180,255,.5) 54%,
                            transparent 62%
                        )`,
                        backgroundSize: "250% 250%",
                        backgroundPositionX,
                        backgroundPositionY,
                        mixBlendMode: "overlay",
                        opacity: 0.55,
                    }}
                />
            </motion.section>
        </div>
    );
}