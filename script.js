document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("entry-overlay");
    const enterBtn = document.getElementById("enter-btn");
    const audio = document.getElementById("warning-sound");

    enterBtn.addEventListener("click", () => {
        // Attempt to play audio
        audio.play().catch((err) => {
            console.error("Audio playback error:", err);
        });

        // Trigger CSS fade-out transition
        overlay.classList.add("hidden");
    });
});
