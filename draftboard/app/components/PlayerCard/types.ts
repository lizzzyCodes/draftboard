export interface Player {
    first_name: string;
    last_name: string;
    birthday: string;
    height: string;
    weight: string;
    position: string;
    draft_year: number;
    jersey: number;
    team_name: string;
    team_abbrv: string;
    nba_player_id: number;
    color?: string;
    secondaryColor?: string;
}

export interface CardContainerProps {
    player: Player;
}

export interface CardProps {
    player: Player;
    /// teamDetails: TeamDetails;
    // playerStats: PlayerStats;
}

export interface CardFrontProps {
    player: Player;
    teamDetails: TeamDetails;
}


export interface CardBackProps extends CardProps {
    primaryColor: string;
    secondaryColor: string;
}