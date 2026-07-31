// fetches colors of the players team, logo etc
import { API_URL } from "./const";

export async function getTeamDetails(team_abbrv: string) {
    try {
        const response = await fetch(`${API_URL}/teams/${team_abbrv}`);

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error("Failed to fetch team data");
        }

        return response.json();

    } catch (error) {
        console.error("API for team colors failed", error);
        throw error;
    }
}
