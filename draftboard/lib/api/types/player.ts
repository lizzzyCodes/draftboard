import type { TeamDetails, SeasonStats } from "@/app/components/PlayerCard/types";

export interface Player {
    id: number;
    nba_player_id: number;
    first_name: string;
    last_name: string;
    height: string;
    weight: string;
    birthday: string;
    jersey: number;
    position: string;
    team_name: string;
    team_abbrv: string;
    draft_year: number;
    team: TeamDetails;
    season_stats: SeasonStats[];
    combine: Combine;
}

export interface Combine {
    id: number;
    nba_player_id: number;
    draft_year: string;

    max_vertical: number | null;
    standing_vertical: number | null;
    lane_agility: number | null;
    sprint: number | null;
    bench_press: number | null;

    wingspan: number;
    standing_reach: number;

    height_w_shoes: number | null;
    weight: number;
}