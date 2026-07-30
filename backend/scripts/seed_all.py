# MAIN ENTRY POINT FOR SEEDING, it will call all seed functions
from scripts.seed_players import seed_players
from scripts.seed_teams import seed_teams
from scripts.seed_season_stats import seed_season_stats
from scripts.seed_combine import seed_combine
from scripts.seed_shots import seed_shots



def main():
    seed_players()
    seed_teams()
    seed_season_stats()
    seed_combine()
    seed_shots()

if __name__ == "__main__":
    main()