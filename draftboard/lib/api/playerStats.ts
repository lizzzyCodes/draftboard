import { API_URL } from "./const";

export async function getPlayerStats(nba_player_id: number) {
    try {
        const response = await fetch(`${API_URL}/players/${nba_player_id}`);
        if (!response.ok) return null;
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch stats:", error);
        return null;
    }
}
