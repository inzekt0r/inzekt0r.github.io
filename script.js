const input = document.getElementById('command-input');
const history = document.getElementById('history');
const terminalBody = document.getElementById('terminal-body');

// Definiere hier deine Befehle und Antworten (HTML ist erlaubt)
const commands = {
    help: `Verfügbare Befehle:
    - <span class="highlight">about</span>    : Infos über mich
    - <span class="highlight">projects</span> : Meine aktuellen Projekte
    - <span class="highlight">contact</span>  : Wie du mich erreichen kannst
    - <span class="highlight">clear</span>    : Konsole leeren`,

    about: "Ich bin Web-Entwickler und experimentiere gerne mit interaktiven Benutzeroberflächen. Schön, dass du vorbeischaust!",

    projects: `Eine kleine Auswahl meiner Projekte:
    1. <span class="highlight">Terminal-Portfolio</span> - Diese Website
    2. <span class="highlight">Awesome-Project</span> - Ein fiktives, aber spannendes Projekt`,

    contact: `Kontaktiere mich gerne:
    - E-Mail: deine-email@beispiel.de
    - GitHub: github.com/dein-username`
};

// Klick auf das Terminal fokussiert automatisch das Eingabefeld wieder
terminalBody.addEventListener('click', () => {
    input.focus();
});

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const fullInput = input.value;
        const commandText = fullInput.trim().toLowerCase();
        input.value = '';

        // Eingegebenen Befehl im Verlauf anzeigen
        const promptLine = document.createElement('div');
        promptLine.className = 'output';
        promptLine.innerHTML = `<span class="prompt">gast@terminal:~$</span> ${fullInput}`;
        history.appendChild(promptLine);

        if (commandText === '') {
            // Nichts tun bei leerer Eingabe
        } else if (commandText === 'clear') {
            history.innerHTML = '';
        } else if (commands[commandText]) {
            const outputLine = document.createElement('div');
            outputLine.className = 'output';
            outputLine.innerHTML = commands[commandText];
            history.appendChild(outputLine);
        } else {
            const outputLine = document.createElement('div');
            outputLine.className = 'output';
            outputLine.innerHTML = `Befehl nicht gefunden: <span style="color: #ff5f56;">${fullInput}</span>. Tippe <span class="highlight">help</span> für eine Übersicht.`;
            history.appendChild(outputLine);
        }

        // Automatisch nach unten scrollen bei neuen Zeilen
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }
});
