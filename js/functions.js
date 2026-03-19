lucide.createIcons();

// Reveal Animations on Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// PDF Navigation Configuration
let currentPDF = 1;
const totalPDFs = 5;

function changePDF(direction) {
    // 1. Update Index & Handle Looping
    currentPDF += direction;
    if (currentPDF > totalPDFs) currentPDF = 1;
    if (currentPDF < 1) currentPDF = totalPDFs;

    const filePath = `./assets/pdf/Aurora Shade Report ${currentPDF}.pdf`;
    
    // 2. Update Viewer (Re-cloning fixes the "blank screen" bug)
    const viewer = document.getElementById('pdf-viewer');
    if (viewer) {
        const container = viewer.parentElement;
        const newViewer = viewer.cloneNode(true);
        newViewer.setAttribute('data', filePath);
        container.replaceChild(newViewer, viewer);
    }

    // 3. Update Text & Labels
    const counter = document.getElementById('pdf-counter');
    const title = document.getElementById('pdf-title');
    if (counter) counter.innerText = `${currentPDF} / ${totalPDFs}`;
    if (title) title.innerText = `Aurora Shade Report ${currentPDF}`;

    // 4. Update Download/Full View Links
    const fallback = document.getElementById('pdf-fallback');
    const fullLink = document.getElementById('pdf-link');
    if (fallback) fallback.setAttribute('href', filePath);
    if (fullLink) fullLink.setAttribute('href', filePath);

    // 5. Refresh Lucide Icons (keeps buttons visible)
    if (window.lucide) lucide.createIcons();
}

// 6. INITIAL LOAD FIX: Runs when the page is ready
document.addEventListener('DOMContentLoaded', () => {
    changePDF(0); 
});
