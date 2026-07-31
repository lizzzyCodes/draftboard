import { API_URL } from "./const";

export async function getPlayers() {
    try {
        const response = await fetch(`${API_URL}/players/`);

        if (!response.ok) {
            throw new Error("Failed to fetch players");
        }


        return response.json();
    } catch (error) {
    }
}

