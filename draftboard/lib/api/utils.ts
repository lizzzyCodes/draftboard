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