// ============================================
// SonicWave Audio Player - Script
// Pure native <audio> playback, no Web Audio API
// ============================================

document.addEventListener("DOMContentLoaded", () => {
    const tracks = [
        { title: "Midnight Dreams", artist: "Luna Echo", src: "audio1.mp3" },
        { title: "Neon Horizons", artist: "Synth Wave", src: "audio2.mp3" },
        { title: "Electric Pulse", artist: "Bass Theory", src: "audio3.mp3" },
    ];

    const audio = document.getElementById("player-audio");

    const playBtn = document.getElementById("playBtn");
    const playIcon = document.getElementById("playIcon");
    const pauseIcon = document.getElementById("pauseIcon");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const shuffleBtn = document.getElementById("shuffleBtn");
    const repeatBtn = document.getElementById("repeatBtn");
    const songTitle = document.getElementById("songTitle");
    const songArtist = document.getElementById("songArtist");
    const progressContainer = document.getElementById("progressContainer");
    const progressBar = document.getElementById("progressBar");
    const progressThumb = document.getElementById("progressThumb");
    const currentTimeEl = document.getElementById("currentTime");
    const totalTimeEl = document.getElementById("totalTime");
    const volumeBtn = document.getElementById("volumeBtn");
    const volumeIconEl = document.getElementById("volumeIcon");
    const muteIconEl = document.getElementById("muteIcon");
    const volumeSliderContainer = document.getElementById("volumeSliderContainer");
    const volumeBar = document.getElementById("volumeBar");
    const volumeThumb = document.getElementById("volumeThumb");
    const playlistItems = document.querySelectorAll(".playlist-item");
    const playerCard = document.querySelector(".player-card");

    let currentIndex = 0;
    let isPlaying = false;
    let isShuffle = false;
    let repeatMode = 0;
    let volume = 0.8;
    let isMuted = false;
    let prevVolume = 0.8;
    let isSeeking = false;
    let isVolumeAdjusting = false;

    // ---- Playback ----
    function playTrack(index) {
        audio.pause();
        audio.removeAttribute("loop");
        currentIndex = index;
        audio.src = tracks[index].src;
        audio.volume = isMuted ? 0 : volume;

        var playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.then(function() {
                isPlaying = true;
                updateUI();
            }).catch(function(err) {
                console.warn("Play error:", err);
                isPlaying = false;
                updateUI();
            });
        } else {
            isPlaying = true;
            updateUI();
        }
    }

    function togglePlay() {
        if (isPlaying) {
            audio.pause();
            isPlaying = false;
            updateUI();
        } else {
            var playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.then(function() {
                    isPlaying = true;
                    updateUI();
                }).catch(function(err) {
                    console.warn("Play error:", err);
                    isPlaying = false;
                    updateUI();
                });
            } else {
                isPlaying = true;
                updateUI();
            }
        }
    }

    function playNext() {
        var next;
        if (isShuffle) {
            do { next = Math.floor(Math.random() * tracks.length); }
            while (next === currentIndex && tracks.length > 1);
        } else {
            next = (currentIndex + 1) % tracks.length;
        }
        playTrack(next);
    }

    function playPrev() {
        if (audio.currentTime > 3) {
            audio.currentTime = 0;
            return;
        }
        var prev;
        if (isShuffle) {
            do { prev = Math.floor(Math.random() * tracks.length); }
            while (prev === currentIndex && tracks.length > 1);
        } else {
            prev = (currentIndex - 1 + tracks.length) % tracks.length;
        }
        playTrack(prev);
    }

    // ---- UI ----
    function updateUI() {
        songTitle.textContent = tracks[currentIndex].title;
        songArtist.textContent = tracks[currentIndex].artist;

        if (isPlaying) {
            playIcon.classList.add("hidden");
            pauseIcon.classList.remove("hidden");
            playerCard.classList.add("playing");
        } else {
            playIcon.classList.remove("hidden");
            pauseIcon.classList.add("hidden");
            playerCard.classList.remove("playing");
        }

        playlistItems.forEach(function(item, i) {
            item.classList.toggle("active", i === currentIndex);
        });

        shuffleBtn.classList.toggle("active", isShuffle);
        repeatBtn.classList.toggle("active", repeatMode > 0);
    }

    function formatTime(s) {
        if (isNaN(s) || !isFinite(s)) return "0:00";
        var m = Math.floor(s / 60);
        var sec = Math.floor(s % 60);
        return m + ":" + String(sec).padStart(2, "0");
    }

    // ---- Progress ----
    function updateProgress() {
        if (isSeeking) return;
        if (audio.duration) {
            var pct = (audio.currentTime / audio.duration) * 100;
            progressBar.style.width = pct + "%";
            progressThumb.style.left = pct + "%";
            currentTimeEl.textContent = formatTime(audio.currentTime);
            totalTimeEl.textContent = formatTime(audio.duration);
        }
    }

    function pctFromEvent(e, el) {
        var r = el.getBoundingClientRect();
        return Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
    }

    progressContainer.addEventListener("mousedown", function(e) {
        isSeeking = true;
        var p = pctFromEvent(e, progressContainer);
        progressBar.style.width = (p * 100) + "%";
        progressThumb.style.left = (p * 100) + "%";
    });

    document.addEventListener("mousemove", function(e) {
        if (isSeeking) {
            var p = pctFromEvent(e, progressContainer);
            progressBar.style.width = (p * 100) + "%";
            progressThumb.style.left = (p * 100) + "%";
            if (audio.duration) currentTimeEl.textContent = formatTime(p * audio.duration);
        }
        if (isVolumeAdjusting) {
            setVolume(pctFromEvent(e, volumeSliderContainer));
        }
    });

    document.addEventListener("mouseup", function() {
        if (isSeeking) {
            var p = parseFloat(progressBar.style.width) / 100;
            if (audio.duration) audio.currentTime = p * audio.duration;
            isSeeking = false;
        }
        isVolumeAdjusting = false;
    });

    progressContainer.addEventListener("touchstart", function(e) {
        isSeeking = true;
        var p = pctFromEvent(e.touches[0], progressContainer);
        progressBar.style.width = (p * 100) + "%";
        progressThumb.style.left = (p * 100) + "%";
    }, { passive: true });

    document.addEventListener("touchmove", function(e) {
        if (isSeeking) {
            var p = pctFromEvent(e.touches[0], progressContainer);
            progressBar.style.width = (p * 100) + "%";
            progressThumb.style.left = (p * 100) + "%";
        }
    }, { passive: true });

    document.addEventListener("touchend", function() {
        if (isSeeking) {
            var p = parseFloat(progressBar.style.width) / 100;
            if (audio.duration) audio.currentTime = p * audio.duration;
            isSeeking = false;
        }
    });

    // ---- Volume ----
    function setVolume(pct) {
        pct = Math.max(0, Math.min(1, pct));
        volume = pct;
        isMuted = pct === 0;
        audio.volume = isMuted ? 0 : volume;
        volumeBar.style.width = (pct * 100) + "%";
        volumeThumb.style.left = (pct * 100) + "%";
        if (isMuted || volume === 0) {
            volumeIconEl.classList.add("hidden");
            muteIconEl.classList.remove("hidden");
        } else {
            volumeIconEl.classList.remove("hidden");
            muteIconEl.classList.add("hidden");
        }
    }

    volumeSliderContainer.addEventListener("mousedown", function(e) {
        isVolumeAdjusting = true;
        setVolume(pctFromEvent(e, volumeSliderContainer));
    });

    volumeSliderContainer.addEventListener("touchstart", function(e) {
        isVolumeAdjusting = true;
        setVolume(pctFromEvent(e.touches[0], volumeSliderContainer));
    }, { passive: true });

    volumeBtn.addEventListener("click", function() {
        if (isMuted) {
            setVolume(prevVolume || 0.8);
        } else {
            prevVolume = volume;
            setVolume(0);
        }
    });

    setVolume(volume);

    // ---- Shuffle / Repeat ----
    shuffleBtn.addEventListener("click", function() {
        isShuffle = !isShuffle;
        updateUI();
    });

    repeatBtn.addEventListener("click", function() {
        repeatMode = (repeatMode + 1) % 3;
        if (repeatMode === 2) {
            audio.loop = true;
        } else {
            audio.removeAttribute("loop");
        }
        updateUI();
    });

    // ---- Audio events ----
    audio.addEventListener("timeupdate", updateProgress);

    audio.addEventListener("ended", function() {
        if (repeatMode === 2) return;
        if (repeatMode === 1) { playNext(); return; }
        if (currentIndex < tracks.length - 1 || isShuffle) {
            playNext();
        } else {
            isPlaying = false;
            audio.currentTime = 0;
            progressBar.style.width = "0%";
            progressThumb.style.left = "0%";
            currentTimeEl.textContent = "0:00";
            updateUI();
        }
    });

    audio.addEventListener("loadedmetadata", function() {
        totalTimeEl.textContent = formatTime(audio.duration);
        var durEl = document.getElementById("duration" + currentIndex);
        if (durEl) durEl.textContent = formatTime(audio.duration);
        tracks.forEach(function(_, i) {
            if (i !== currentIndex) {
                var temp = new Audio(tracks[i].src);
                temp.addEventListener("loadedmetadata", function() {
                    var de = document.getElementById("duration" + i);
                    if (de) de.textContent = formatTime(temp.duration);
                });
            }
        });
    });

    audio.addEventListener("play", function() {
        isPlaying = true;
        updateUI();
    });

    audio.addEventListener("pause", function() {
        isPlaying = false;
        updateUI();
    });

    // ---- Buttons ----
    playBtn.addEventListener("click", togglePlay);
    nextBtn.addEventListener("click", playNext);
    prevBtn.addEventListener("click", playPrev);

    playlistItems.forEach(function(item) {
        item.addEventListener("click", function() {
            playTrack(parseInt(item.getAttribute("data-index")));
        });
    });

    // ---- Keyboard ----
    document.addEventListener("keydown", function(e) {
        if (e.target.tagName === "INPUT") return;
        switch (e.code) {
            case "Space": e.preventDefault(); togglePlay(); break;
            case "ArrowRight":
                if (audio.duration) audio.currentTime = Math.min(audio.currentTime + 5, audio.duration);
                break;
            case "ArrowLeft":
                audio.currentTime = Math.max(audio.currentTime - 5, 0);
                break;
            case "ArrowUp": e.preventDefault(); setVolume(volume + 0.05); break;
            case "ArrowDown": e.preventDefault(); setVolume(volume - 0.05); break;
            case "KeyN": playNext(); break;
            case "KeyP": playPrev(); break;
            case "KeyM": volumeBtn.click(); break;
            case "KeyS": shuffleBtn.click(); break;
            case "KeyR": repeatBtn.click(); break;
        }
    });

    // ---- Init ----
    updateUI();
    songTitle.textContent = "Select a Track";
    songArtist.textContent = "Browse the playlist below";
});
