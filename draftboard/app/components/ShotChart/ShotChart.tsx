"use client";

interface Shot {
    x: number; // 0-100, percent of court width
    y: number; // 0-100, percent of court height
    made: boolean;
}

interface ShotChartProps {

}

export default function ShotChart({ }: ShotChartProps) {
    return (
        <>
            <p> shot chart here </p>
        </>
    );
}