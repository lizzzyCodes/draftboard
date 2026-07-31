// fetches all the nba_stats
import { API_URL } from "./const";

export async function getPlayerStats(nba_player_id?: number) {

    const response = await fetch(
        `${API_URL}/players/${nba_player_id}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch stats");
    }


    return response.json();
}
