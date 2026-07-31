

export interface Player { // works now 
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
}

export interface TeamDetails {
    abbreviation: string;
    espn_id: string;
    name: string;
    color: string;
    alternate_color: string | null;
    logo_url: string;
}

export interface SeasonStats {
    id: number;
    nba_player_id: number;
    season: string;
    season_type: "Regular Season" | "Playoffs";
    team: string;
    gp: number;
    pts: number;
    reb: number;
    ast: number;
    stl: number;
    blk: number;
    fgm: number;
    fga: number;
    fg_pct: number;
    fg3m: number;
    fg3a: number;
    fg3_pct: number;
    ftm: number;
    fta: number;
    ft_pct: number;
    ppg: number;
    rpg: number;
    apg: number;
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

export interface PlayerDetails extends Player { // player details per 1 NBA ID
    team: TeamDetails;
    season_stats: SeasonStats[];
    combine: Combine | null;
}

