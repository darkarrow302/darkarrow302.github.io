document.addEventListener("DOMContentLoaded", function () {
    const audioFileInput = document.getElementById("audioFile");
    const audioPlayer = document.getElementById("audioPlayer");
    const volumeControl = document.getElementById("volumeControl");

    audioFileInput.addEventListener("change", function () {
        const file = audioFileInput.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            audioPlayer.src = url;
        }
    });

    volumeControl.addEventListener("input", function () {
        const volume = volumeControl.value;
        audioPlayer.volume = volume;
    });

    // JavaScript code for audio looping
    const loopButton = document.getElementById("loopButton");
    let isLooping = false;

    loopButton.addEventListener("click", function () {
        if (!isLooping) {
            audioPlayer.loop = true;
            isLooping = true;
            loopButton.textContent = "Unloop";
        } else {
            audioPlayer.loop = false;
            isLooping = false;
            loopButton.textContent = "Loop";
        }
    });
});