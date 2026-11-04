document.addEventListener("DOMContentLoaded", () => {
    // Initial entry overlay elements
    const entryOverlay = document.getElementById("entry-overlay");
    const enterBtn = document.getElementById("enter-btn");
    const audio = document.getElementById("warning-sound");

    // Second modal elements
    const trapLink = document.getElementById("trap-link");
    const trapModal = document.getElementById("trap-modal");
    const closeModalBtn = document.getElementById("close-modal-btn");
    const dismissBtn = document.getElementById("dismiss-btn");

    // Function to play sound from the beginning
    const replayAudio = () => {
        if (audio) {
            audio.currentTime = 0; // Rewind to start
            audio.play().catch(err => console.log("Audio blocked:", err));
        }
    };

    // First button (initial entry)
    if (enterBtn) {
        enterBtn.addEventListener("click", () => {
            replayAudio();
            entryOverlay.classList.add("hidden");
        });
    }

    // Trap link click
    if (trapLink) {
        trapLink.addEventListener("click", (e) => {
            e.preventDefault(); // Stop page from jumping to top
            replayAudio();
            trapModal.classList.remove("hidden");
        });
    }

    // Close second modal
    const closeTrapModal = () => {
        trapModal.classList.add("hidden");
    };

    if (closeModalBtn) closeModalBtn.addEventListener("click", closeTrapModal);
    if (dismissBtn) dismissBtn.addEventListener("click", closeTrapModal);
});
