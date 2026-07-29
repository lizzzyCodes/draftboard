# MAIN ENTRY POINT FOR SEEDING, it will call all seed functions


from scripts.seed_players import seed_players

#from seed_season_stats import seed_season_stats
#from seed_shots import seed_shots


def main():
    seed_players()

if __name__ == "__main__":
    main()