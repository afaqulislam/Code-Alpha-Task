// script.js
document.addEventListener("DOMContentLoaded", () => {
    const audioElements = {
        audio1: document.getElementById("audio1"),
        audio2: document.getElementById("audio2"),
        audio3: document.getElementById("audio3"),
    };
    const songButtons = document.querySelectorAll(".song-btn");
    const pauseButton = document.getElementById("pause-button");
    const songTitle = document.getElementById("song-title");
    const artistName = document.getElementById("artist-name");
    const musicInfo = document.getElementById("music-info");
    
    let currentAudio = null; // Track the currently playing audio

    // Function to play a selected song
    songButtons.forEach(button => {
        button.addEventListener("click", () => {
            const audioId = button.getAttribute("data-audio");
            const title = button.getAttribute("data-title");
            const artist = button.getAttribute("data-artist");

            if (currentAudio) {
                currentAudio.pause(); // Pause the currently playing audio
                currentAudio.currentTime = 0; // Reset its time to 0
            }

            // Set the new audio as the current audio
            currentAudio = audioElements[audioId];
            currentAudio.play(); // Play the selected song

            // Update the song information
            songTitle.textContent = `Now Playing: "${title}"`;
            artistName.textContent = `Artist: ${artist}`;
            musicInfo.classList.remove("hidden");
            musicInfo.classList.add("visible");
        });
    });

    // Pause the current song when the pause button is clicked
    pauseButton.addEventListener("click", () => {
        if (currentAudio) {
            currentAudio.pause();
            musicInfo.classList.remove("visible");
            musicInfo.classList.add("hidden");
        }
    });
});
