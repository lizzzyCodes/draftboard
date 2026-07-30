// fetches colors of the players team, logo etc
import { API_URL } from "./const";

/**
 * @param team_abbrv 
 * @returns 
  "abbreviation": "string",
  "espn_id": "string",
  "name": "string",
  "color": "string",
  "alternate_color": "string",
  "logo_url": "string"
 */

export async function getTeamDetails(team_abbrv: string) {
    try {
        const response = await fetch(`${API_URL}/teams/${team_abbrv}`);

        if (!response.ok) {
            throw new Error("Failed to fetch team data");
        }

        return response.json();

    } catch (error) {
        console.error("API for team colors failed", error);
        throw error; // important
    }
}
