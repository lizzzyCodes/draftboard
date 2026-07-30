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

export async function getTeamDetails({ team_abbrv }: { team_abbrv?: string }) {

    const response = await fetch(
        `${API_URL}/teams/${team_abbrv}`
    );

    if (!response.ok) {
        throw new Error("Failed to team data");
    }


    return response.json();
}
