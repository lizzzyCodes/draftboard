export function formatBirthday(dateString: string) {
    const date = new Date(dateString);

    return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
}

export function fullName(first_name: string, last_name: string) {
    return `${first_name} ${last_name}`;
}

// formats percent from 0.3 -> 30%
export function formatPercent(value: number): string {
    return `${(value * 100).toFixed(1)}%`;
}

export function displayValue(value: string | number | null | undefined) {
    return value ?? "-";
}

// spurs and nets had black / white text and on the background you couldnt see much so included a fallback function
export function safeColor(color?: string | null, fallback = "#000000"): string {
    if (!color) return fallback;
    return color.toUpperCase() === "#FFFFFF" ? fallback : color;
}