export interface Player {
    id: number;
    first_name: string;
    last_name: string;
    birthday: string;        // ISO datetime, e.g. "1984-12-30T00:00:00"
    height: string;          // "6-9"
    weight: string;          // "250" — string, since the API returns it quoted
    jersey: number;          // 23`
    position: string;        // "Forward"
    draft_year: number;      // 2003
    team_name: string;       // "76ers"
    team_abbrv: string;
}