const accessToken = "Ihr-Zugriffstoken-hier"; // Setze dein Spotify-Zugriffstoken hier ein
const userId = "smedjan"; // Setze die Benutzer-ID ein

const createPlaylist = async () => {
    const url = `https://api.spotify.com/v1/users/${userId}/playlists`;
    const data = {
        name: "My Awesome Playlist",
        description: "A playlist created via Spotify Web API",
        public: false,
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Fehler: ${response.status} - ${response.statusText}`);
        }

        const playlist = await response.json();
        console.log("Playlist erstellt:", playlist);
    } catch (error) {
        console.error("Fehler beim Erstellen der Playlist:", error);
    }
};

// Button-Klick zum Erstellen der Playlist
document.getElementById("create-playlist").addEventListener("click", createPlaylist);
