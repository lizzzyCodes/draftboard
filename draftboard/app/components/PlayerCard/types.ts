/*export interface Player {
    first_name: string;
    last_name: string;
    birthday: string;
    height: string;
    weight: string;
    position: string;
    draft_year: number;
    jersey: number;
    team_name?: string;
    team_abbrv: string;
    nba_player_id?: number;
    color?: string;
    secondaryColor?: string;
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

export interface CardContainerProps {
    player: Player;
}

export interface CardProps {
    player: Player;
    teamDetails: TeamDetails;
    playerStats: SeasonStats;
}

export interface CardFrontProps {
    player: Player;
    teamDetails: TeamDetails;
}


export interface CardBackProps extends CardProps {
    primaryColor: string;
    secondaryColor: string;
}

*/

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
    team_name?: string;
    team_abbrv: string;
    draft_year: number;
    team: TeamDetails;
    season_stats: SeasonStats[];
    combine: Combine | null;
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

export interface CardContainerProps {
    player: Player;
}

export interface CardProps {
    player: Player;
    teamDetails?: TeamDetails;
    playerStats?: SeasonStats;
}

export interface CardFrontProps {
    player: Player;
    teamDetails: TeamDetails;
}

export interface CardBackProps extends CardProps {
    primaryColor: string;
    secondaryColor: string;
}