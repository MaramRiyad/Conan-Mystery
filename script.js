const correctCode = "EDOGAWA";

function checkCode() {

    const userCode = document.getElementById("codeInput").value;
    const result = document.getElementById("result");

    if (userCode === correctCode) {

        result.innerHTML = `
            <div class="success">
                <h2>🎉 Case Solved!</h2>
                <p>Excellent, Detective!</p>
                <p>You proved that you have what it takes to be Conan! 🕵️‍♂️</p>

                <a href="https://www.youtube.com/watch?v=C3-pXTRWFR0"
                   target="_blank"
                   class="song-button">
                   🎵 Listen to Conan's Song
                </a>
            </div>
        `;

    } else {

        result.innerHTML = `
            <div class="wrong">
                <h2>❌ Wrong Code!</h2>
                <p>Hmm... You're definitely not Conan 😂</p>
                <p>Even Professor Agasa is disappointed! 🔍</p>
                <p>Try again, Detective!</p>
            </div>
        `;
    }
}
