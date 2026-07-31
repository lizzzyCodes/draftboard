export interface Player {
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