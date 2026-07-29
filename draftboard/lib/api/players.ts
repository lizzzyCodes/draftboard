const API_URL = "http://127.0.0.1:8000";


export async function getPlayers() {

    const response = await fetch(
        `${API_URL}/players/`
    );


    if (!response.ok) {
        throw new Error("Failed to fetch players");
    }


    return response.json();
}

/**
 * 
 * import { getPlayers } from "@/lib/api/players";


export default async function Home() {

    const players = await getPlayers();


    return (
        <main>

            {players.map((player:any)=>(
                <div key={player.id}>

                    {player.first_name}
                    {" "}
                    {player.last_name}

                </div>
            ))}

        </main>
    );
}
 */