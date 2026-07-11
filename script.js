
const monitorContent = document.getElementById('output-screen');
const navButtons = document.querySelectorAll('.nav-btn');

// Inhalte der jeweiligen "Dateien"
const contentData = {
    welcome: `
    <h2>System-Initialisierung...</h2>
    <p>[OK] Kernkomponenten geladen.</p>
    <p>[OK] Benutzeroberfläche bereitgestellt.</p>
    <br>
    <p>Willkommen in meinem interaktiven Terminal-Portfolio.</p>
    <p>Dieses System wurde so konzipiert, dass es den klassischen Hacker-Look beibehält, aber <strong>keine mühsame Befehlseingabe</strong> erfordert.</p>
    <p>Nutze einfach das <strong>Navigationsmenü auf der linken Seite</strong>, um die verschiedenen Systemdateien auszulesen.</p>
    <br>
    <p>Verbindung steht bereit. Bitte wählen Sie ein Datenpaket aus...</p>
    `,
    about: `
    <h2>Benutzerprofil // ABOUT_ME</h2>
    <p><strong>Name:</strong> [Dein Name]</p>
    <p><strong>Rolle:</strong> Web-Entwickler & Designer</p>
    <p><strong>Fokus:</strong> Entwicklung moderner, interaktiver Webanwendungen.</p>
    <br>
    <p>Ich kombiniere strukturierte Programmierung mit ansprechendem Design. Meine Mission ist es, komplexe Prozesse hinter intuitiven und flüssigen Anwendungen zu verbergen – ganz ohne mühsame Kommandozeilen für den Endnutzer.</p>
    `,
    projects: `
    <h2>Projektarchiv // PROJECTS</h2>
    <p>Hier sind ausgewählte Datenpakete meiner Arbeit:</p>

    <div class="project-item">
    <span class="project-title">[01] Project_Alpha</span>
    <p class="project-desc">Eine performante Web-Anwendung zur Echtzeit-Datenvisualisierung auf Basis von Node.js und React.</p>
    </div>

    <div class="project-item">
    <span class="project-title">[02] Crypto_Terminal</span>
    <p class="project-desc">Ein interaktives Dashboard zur Überwachung dezentraler Smart Contracts.</p>
    </div>

    <div class="project-item">
    <span class="project-title">[03] Cyber_UI_Framework</span>
    <p class="project-desc">Ein CSS-UI-Kit für Entwickler, die Sci-Fi- und Retro-Designs umsetzen möchten.</p>
    </div>
    `,
    skills: `
    <h2>Technologiestapel // SKILLS</h2>
    <p>Die von mir genutzten Programmiersprachen und Werkzeuge:</p>
    <ul>
    <li><strong>Sprachen:</strong> HTML5, CSS3, JavaScript (ES6+), TypeScript</li>
    <li><strong>Frameworks:</strong> React, Vue.js, Node.js, Express</li>
    <li><strong>Schnittstellen:</strong> REST APIs, GraphQL, WebSockets</li>
    <li><strong>Tools:</strong> Git, Docker, GitHub Actions</li>
    </ul>
    `,
    contact: `
    <h2>Kommunikation // CONTACT</h2>
    <p>Sende eine direkte Übertragung an meine Endpunkte:</p>
    <ul>
    <li><strong>E-Mail:</strong> <a href="mailto:deine-email@beispiel.de" style="color: #00d2ff; text-decoration: none; border-bottom: 1px dotted #00d2ff;">deine-email@beispiel.de</a></li>
    <li><strong>GitHub:</strong> <a href="https://github.com/dein-username" target="_blank" style="color: #00d2ff; text-decoration: none; border-bottom: 1px dotted #00d2ff;">github.com/dein-username</a></li>
    <li><strong>LinkedIn:</strong> <a href="#" target="_blank" style="color: #00d2ff; text-decoration: none; border-bottom: 1px dotted #00d2ff;">linkedin.com/in/dein-profil</a></li>
    </ul>
    <br>
    <p>Antwortzeit in der Regel innerhalb von 24 Systemzyklen (Stunden).</p>
    `
};

let currentTimeout = null;

// Funktion für den Lade- und Tippeffekt
function typeWriter(htmlContent) {
    if (currentTimeout) {
        clearTimeout(currentTimeout);
    }

    // Simuliere einen kurzen Ladevorgang (Hacker-Vibe)
    monitorContent.innerHTML = "<div style='color: #00d2ff;'>[VERBINDUNG HERGESTELLT... DATENSTROM EMPFANGEN]</div>";

    setTimeout(() => {
        monitorContent.innerHTML = "";

        // Temporäres Element erstellen, um HTML-Nodes sauber zu parsen
        let tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlContent;

        const nodes = Array.from(tempDiv.childNodes);
        let nodeIndex = 0;

        function renderNextNode() {
            if (nodeIndex < nodes.length) {
                const node = nodes[nodeIndex].cloneNode(true);
                monitorContent.appendChild(node);
                nodeIndex++;

                // Kurze Verzögerung zwischen Absätzen für das "Datenstream-Gefühl"
                currentTimeout = setTimeout(renderNextNode, 40);
            }
        }

        renderNextNode();
    }, 250);
}

// Event-Listener für Navigation
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Aktive Klasse wechseln
        navButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Inhalt laden
        const target = button.getAttribute('data-target');
        if (contentData[target]) {
            typeWriter(contentData[target]);
        }
    });
});

// Startseite initial laden
window.addEventListener('DOMContentLoaded', () => {
    typeWriter(contentData.welcome);
});
