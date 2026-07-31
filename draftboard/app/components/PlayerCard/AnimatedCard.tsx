// CLAUDE GENERATED CODE

"use client";
import {
    motion,
    AnimatePresence,
    useMotionValue,
    useMotionTemplate,
    useSpring,
} from "framer-motion";
import { ReactNode, useState } from "react";

interface AnimatedCardProps {
    id: string;
    front: ReactNode;
    back: ReactNode;
    color: string;
    secondaryColor?: string;
}

export default function AnimatedCard({ id, front, back, color }: AnimatedCardProps) {
    const [expanded, setExpanded] = useState(false);
    const [flipped, setFlipped] = useState(false);

    const sheenXRaw = useMotionValue(50);
    const sheenYRaw = useMotionValue(50);
    const sheenX = useSpring(sheenXRaw, { stiffness: 200, damping: 25 });
    const sheenY = useSpring(sheenYRaw, { stiffness: 200, damping: 25 });
    const backgroundPositionX = useMotionTemplate`${sheenX}%`;
    const backgroundPositionY = useMotionTemplate`${sheenY}%`;

    const rotateXRaw = useMotionValue(0);
    const rotateYRaw = useMotionValue(0);
    const rotateX = useSpring(rotateXRaw, { stiffness: 300, damping: 20 });
    const rotateY = useSpring(rotateYRaw, { stiffness: 300, damping: 20 });

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        if (expanded) return;
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

    function handleExpandClick() {
        setExpanded(true);
        setFlipped(true);
    }

    function handleClose() {
        setExpanded(false);
        setFlipped(false);
    }

    return (
        <>
            {!expanded && (
                <div style={{ perspective: 1400 }}>
                    <motion.section
                        layoutId={`card-${id}`}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={reset}
                        onClick={handleExpandClick}
                        className="w-[320px] h-[450px] rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[50px] rounded-br-none p-[5px] overflow-hidden relative cursor-pointer"
                        style={{
                            backgroundColor: color,
                            rotateX,
                            rotateY,
                            transformStyle: "preserve-3d",
                        }}
                    >
                        {front}
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
            )}

            <AnimatePresence>
                {expanded && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                    >
                        <motion.section
                            layoutId={`card-${id}`}
                            onClick={(e) => e.stopPropagation()}
                            className="w-[95vw] h-[95vh] max-w-4xl rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[50px] rounded-br-none p-[5px] relative"
                            style={{ backgroundColor: color, perspective: 1400 }}
                        >
                            <motion.div
                                className="relative w-full h-full"
                                style={{ transformStyle: "preserve-3d" }}
                                animate={{ rotateY: flipped ? 180 : 0 }}
                                transition={{ duration: 0.6, delay: 0.15 }}
                            >
                                <div
                                    className="absolute inset-0 overflow-y-auto"
                                    style={{ backfaceVisibility: "hidden" }}
                                >
                                    {front}
                                </div>
                                <div
                                    className="absolute inset-0 overflow-y-auto"
                                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                                >
                                    {back}
                                </div>
                            </motion.div>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleClose();
                                }}
                                className="absolute top-4 right-4 z-50 rounded-full bg-white/80 px-3 py-1 text-sm font-bold"
                            >
                                ✕
                            </button>
                        </motion.section>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}