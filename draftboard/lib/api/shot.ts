// fetches colors of the players team, logo etc
import { API_URL } from "./const";

export async function getShotData(playerId: number) {
    try {
        const response = await fetch(`${API_URL}/shots/${playerId}`);

        if (!response.ok) {
            throw new Error("Failed to fetch shot data");
        }

        return response.json();

    } catch (error) {
        console.error("API for shot data failed", error);
        throw error;
    }
}
