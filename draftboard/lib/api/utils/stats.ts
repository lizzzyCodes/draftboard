import { PlayerSeason } from "../types/player"

export function getLatestSeason(seasons: PlayerSeason[]) {
    if (!seasons.length) return null;

    return seasons.reduce((latest, current) => {
        const latestYear = Number(latest.season.split("-")[0]);
        const currentYear = Number(current.season.split("-")[0]);

        return currentYear > latestYear ? current : latest;
    });
}